# Owly Website

A modern, creative Next.js website for Owly with video background and smooth animations.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your hero video:**
   - Place your 10-second looping video in the `public` folder as `hero-video.mp4`
   - Optionally, add a poster image as `hero-image.jpg` for fallback/loading state
   - The video will automatically loop and play on the hero section

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

- `app/` - Next.js app router pages
  - `page.tsx` - Home/Landing page
  - `about/` - About Us page
  - `features/` - Features page
  - `pricing/` - Pricing page
- `components/` - Reusable React components
  - `Navigation.tsx` - Main navigation with CTAs
  - `Footer.tsx` - Site footer
  - `ui/` - UI components (Button, Card)
- `public/` - Static assets (images, videos)

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette.

### Navigation CTAs
Edit the button text/links in `components/Navigation.tsx`.

### Content
Update page content in the respective page files in the `app/` directory.

## Build for Production

```bash
npm run build
npm start
```
