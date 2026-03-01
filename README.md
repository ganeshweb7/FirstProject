# frontendlalit Portfolio

A futuristic, high-performance portfolio for **Lalit Mali**.

## Tech Stack
- **Framework**: React 18 (Vite)
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Styles**: Vanilla CSS (Glassmorphism + Neon accents)

## Local Development
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```

## How to Customize
- **Site Data**: Edit `src/data.ts` to update projects, social links, and bio.
- **Photo**: Replace the file at `src/assets/photo.jpg` with your own portrait.
- **Colors**: Change CSS variables in `src/index.css` (specifically `--accent-color`).

## Vercel Deployment
1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com).
3. Click "New Project" and import your repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Click **Deploy**.
