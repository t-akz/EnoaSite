const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

async function processLogo() {
    const logoPath = process.argv[2] || path.join(__dirname, '../logoenoa.png');
    const faviconPath = path.join(__dirname, '../favicon.ico');
    const iconPath = path.join(__dirname, '../app/icon.png');

    try {
        console.log(`Loading image from ${logoPath}...`);
        const image = await Jimp.read(logoPath);

        // Save as app/icon.png for Next.js App Router
        // Wait for the app folder to exist
        if (fs.existsSync(path.dirname(iconPath))) {
            await image.clone().resize(64, 64).writeAsync(iconPath);
            console.log(`✅ Saved icon.png to ${iconPath}`);
        } else {
            await image.clone().resize(64, 64).writeAsync(faviconPath);
            console.log(`✅ Saved favicon.ico to ${faviconPath}`);
        }

        image.resize(100, 100);
        const colors = {};

        for (let x = 0; x < 100; x++) {
            for (let y = 0; y < 100; y++) {
                const hex = image.getPixelColor(x, y);
                const rgba = Jimp.intToRGBA(hex);

                // Ignore transparent or near-transparent pixels
                if (rgba.a < 100) continue;

                // Group colors slightly
                const rCategory = Math.round(rgba.r / 15) * 15;
                const gCategory = Math.round(rgba.g / 15) * 15;
                const bCategory = Math.round(rgba.b / 15) * 15;

                const key = `${rCategory},${gCategory},${bCategory}`;
                if (!colors[key]) {
                    colors[key] = { count: 0, r: rgba.r, g: rgba.g, b: rgba.b };
                }
                colors[key].count++;
            }
        }

        const sortedColors = Object.values(colors).sort((a, b) => b.count - a.count);

        console.log("\nTop Dominant Colors (RGB):");
        const top = sortedColors.slice(0, 5);
        top.forEach(c => {
            const hex = '#' + ((1 << 24) + (c.r << 16) + (c.g << 8) + c.b).toString(16).slice(1);
            console.log(`${hex.toUpperCase()} - Pixels: ${c.count} (rgb(${c.r}, ${c.g}, ${c.b}))`);
        });

    } catch (err) {
        console.error("Error analyzing logo:", err);
    }
}

processLogo();
