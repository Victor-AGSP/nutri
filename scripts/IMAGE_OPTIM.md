Image optimization / WebP conversion

This project now prefers WebP images when available via `<picture>` + `source` tags. To fully enable WebP fallbacks, create `.webp` versions of the images in `public/images/` with the same base name (e.g. `food-apple.webp`, `service-mealplan.webp`).

Recommended conversion methods (choose one):

1) cwebp (Google libwebp) - fast, high quality
- Install: https://developers.google.com/speed/webp
- Example (PowerShell):

  cwebp -q 85 .\public\images\food-apple.svg -o .\public\images\food-apple.webp
  cwebp -q 85 .\public\images\service-mealplan.svg -o .\public\images\service-mealplan.webp

Note: `cwebp` accepts raster inputs (png/jpg). If you have SVGs, first rasterize them (e.g. with ImageMagick `magick` or `rsvg-convert`).

2) ImageMagick (magick) - rasterize SVG then convert
- Example (PowerShell):

  magick -density 192 .\public\images\food-apple.svg -quality 85 .\public\images\food-apple.png
  magick .\public\images\food-apple.png -quality 85 .\public\images\food-apple.webp

3) Node.js (sharp) - scriptable, recommended for build pipelines
- Install: `npm i sharp --save-dev`
- Example script (node):
  ```js
  // scripts/convert-images.js
  const sharp = require('sharp');
  const fs = require('fs');
  const path = require('path');
  const dir = path.join(__dirname, '..', 'public', 'images');
  fs.readdirSync(dir).forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if(ext === '.png' || ext === '.jpg' || ext === '.jpeg'){
      const infile = path.join(dir, file);
      const outfile = path.join(dir, path.basename(file, ext) + '.webp');
      sharp(infile).webp({quality:85}).toFile(outfile).then(()=>console.log('converted', outfile));
    }
  })
  ```

After conversion, run `npm run build` or `npm run dev` to verify the images are served correctly. If you prefer, I can prepare a conversion script for the repo (requires Node package install and possibly adding `sharp`).
