# Legal Loids - React Migration

This is a modern React application migrated from a legacy HTML/CSS/JavaScript website.

## Project Structure

```
legal-loids/
├── public/
│   ├── css/           # All CSS files (copy from root css/)
│   ├── fonts/         # All font files (copy from root fonts/)
│   ├── images/        # All images (copy from root images/)
│   └── index.html     # React entry point
├── src/
│   ├── components/    # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Welcome.jsx
│   │   ├── PracticeAreas.jsx
│   │   ├── Counter.jsx
│   │   ├── VideoSection.jsx
│   │   ├── CallToAction.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ConsultationForm.jsx
│   │   ├── Blog.jsx
│   │   ├── Attorneys.jsx
│   │   ├── IntroSection.jsx
│   │   ├── Footer.jsx
│   │   └── GoToTop.jsx
│   ├── App.jsx        # Main app component
│   ├── App.css
│   ├── index.js       # React entry point
│   └── index.css
└── package.json
```

## Setup Instructions

### 1. Copy Assets to Public Folder

Before running the application, you need to copy the following folders from the root directory to the `public` folder:

```bash
# Copy CSS files
cp -r css public/

# Copy fonts
cp -r fonts public/

# Copy images
cp -r images public/
```

Or on Windows PowerShell:
```powershell
Copy-Item -Path css -Destination public\css -Recurse
Copy-Item -Path fonts -Destination public\fonts -Recurse
Copy-Item -Path images -Destination public\images -Recurse
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

The application will open at `http://localhost:3000`

## Component Overview

### Navbar
- Responsive navigation with mobile menu
- Dropdown menu support
- Uses React hooks (`useState`, `useEffect`) for menu toggle

### Hero
- Image slider with auto-rotation
- Smooth transitions between slides
- Full-height hero section

### Welcome
- Introduction section with image and text

### PracticeAreas
- Reusable component for displaying practice areas
- Can be configured with different content

### Counter
- Animated counters that trigger on scroll
- Uses IntersectionObserver API

### VideoSection
- Video background with play button overlay

### CallToAction
- Call-to-action section with background image

### Testimonials
- Testimonial carousel with auto-rotation

### ConsultationForm
- Contact form with React state management
- Form validation ready for implementation

### Blog
- Blog post grid display

### Attorneys
- Team member cards with social links

### IntroSection
- Contact information section

### Footer
- Footer with navigation, contact info, and social links

### GoToTop
- Scroll-to-top button that appears on scroll

## Key React Conversions

### HTML to JSX
- `class` → `className`
- `for` → `htmlFor`
- Inline styles converted to React style objects
- Self-closing tags properly closed

### JavaScript to React Hooks
- `document.querySelector` → `useRef` and `useState`
- `addEventListener` → `useEffect` hooks
- DOM manipulation → React state management
- jQuery plugins → React hooks and state

## Notes

- CSS is kept global as requested
- All images are referenced from `/images/` (public folder)
- The application uses modern React patterns (functional components, hooks)
- No jQuery dependencies - all functionality converted to React

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.
