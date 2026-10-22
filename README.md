# Developer Portfolio

A responsive, single-page portfolio for showcasing projects, technical skills, experience, recommendations, and contact information. Built with React and Vite, with Tailwind CSS styling and a persistent light/dark theme.

## Features

- Responsive navigation with links to each portfolio section and a mobile menu
- Light and dark themes, with the selected theme saved in browser storage
- Project gallery with category filters
- Skills grid and experience timeline
- Testimonial carousel with previous/next navigation and company logos
- Contact section and footer navigation
- Smooth scrolling between sections

## Tech stack

- React 19
- Vite 8
- Tailwind CSS 4
- Lucide React and React Icons
- ESLint

## Getting started

### Prerequisites

- Node.js and npm

### Install and run

```bash
git clone https://github.com/Tharmeem1999/React_Project-Portfolio_Website.git
cd React_Project-Portfolio_Website
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project structure

```text
public/
  images/                 Portfolio, project, testimonial, and logo images
src/
  components/             Page sections and reusable UI components
  context/                Theme state and theme switching
  data/                   Project, experience, testimonial, and logo content
  App.jsx                 Page composition and section anchors
  App.css                 Global page styling
  index.css               Tailwind CSS import and dark-mode variant
```

## Screenshots

<img width="1517" height="831" alt="Image" src="https://github.com/user-attachments/assets/809d0496-15d7-4d57-bab5-36b9520acbff" />
<img width="1521" height="835" alt="Image" src="https://github.com/user-attachments/assets/17184857-852f-40a3-8a81-00a3029085e2" />
<img width="1517" height="925" alt="Image" src="https://github.com/user-attachments/assets/ef5b17dc-bac8-4fe8-b915-4e8e73891da4" />

## Customize the portfolio

- Edit `src/data/projects.js` to change project descriptions, categories, and image paths. The gallery filters are generated from the project categories.
- Edit `src/data/experiences.js`, `src/data/testimonials.js`, and `src/data/companyLogos.js` to update the experience, recommendations, and logos.
- Update the name, introduction, profile image, and contact details in the components under `src/components/`.
- Add or replace images in `public/images/` and reference them using paths such as `/images/projects/project1.jpg`.
- The downloadable CV link in the hero currently points to `#cv`; replace it with the path to a CV file when one is available.

## Notes

The contact form is currently presentation-only: it has no submit handler or backend integration. Connect it to a service or API before relying on it to receive messages. The portfolio content and contact information are sample content and should be reviewed before publishing.

## License

This project is available under the [MIT License](./LICENSE).
