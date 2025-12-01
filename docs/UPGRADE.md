Upgrade notes — animations and images

1) Install framer-motion

To enable the animations added to the carousel and to use motion components across the app, install:

```powershell
npm install framer-motion
```

2) Convert images to WebP

The project now uses `<picture>` tags and expects `.webp` versions of images placed alongside originals in `public/images/`. See `scripts/IMAGE_OPTIM.md` for several methods (cwebp, ImageMagick, sharp) and example commands.

3) Optional: add `sharp` to your dev deps and create a `npm run convert-images` script to automate conversion.

4) After installing dependencies, run the dev server:

```powershell
npm install
npm run dev
```

If you want, I can:
- Add a small Node script using `sharp` to batch-convert images (I will add `sharp` to devDependencies), or
- Add `framer-motion` to `package.json` directly and run `npm install` here (I can't run install in your environment without your approval).