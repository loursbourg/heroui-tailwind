# Vite & HeroUI Card Replica

This is a near-perfect replica of the card and items.

[Try it on CodeSandbox](https://githubbox.com/frontio-ai/vite-template)

## Used

- [Vite](https://vitejs.dev/guide/)
- [HeroUI](https://heroui.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion) ( from heroui)

## How to Run

To clone the project, run the following command:

```bash
git clone https://github.com/frontio-ai/vite-template.git
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## Note on fonts
Fonts render slightly different if you are under retina display:

For more information, read: 

https://medium.com/@vilu_s/why-your-fonts-look-different-in-figma-vs-the-browser-and-how-to-fix-it-2ed1916daca8

and from reddit:
```
It's because font rendering. Figma from what I know uses a custom font rendering engine for their app - reason for that is since it's a collaboration tool they have to ensure that everyone working on the same files gets the fonts rendered the same. On the web, fonts can render completely different between different browsers, OS, devices, display hardware... so you'll always have some differences. In general, there is really not much you can do about it.

```
See [this reddit post](https://www.reddit.com/r/FigmaDesign/comments/sik089/comment/hv98pem/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)