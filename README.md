# Aryan Chauhan — Developer Portfolio

A personal portfolio built with **React 19, TypeScript and Vite**. The site presents selected work, technical skills, professional experience, education and contact information in a responsive single-page experience.

## Highlights

- Hero section and personal introduction
- Selected project cards with media previews
- Technical skills grouped by category
- Professional experience and education sections
- Services and contact sections
- Responsive UI with reusable React components

## Tech stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS (utility classes)
- Lucide React icons

## Run locally

**Requirements:** Node.js (LTS recommended) and npm.

```bash
git clone https://github.com/Aryan96250/AryanPortfolio.git
cd AryanPortfolio
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
.
├── components/       # Portfolio sections and UI components
├── App.tsx           # Main application composition
├── constants.ts      # Portfolio content and project data
├── index.html        # HTML entry point
├── index.tsx         # React entry point
├── package.json
└── vite.config.ts
```

## Customize the portfolio

Update the content in `constants.ts` (personal information, experience, projects, skills and education). Reusable page sections live in `components/`.

## Notes

- Project links and descriptions are maintained in `constants.ts`; verify external links before presenting the portfolio publicly.
- Do not commit API keys, tokens, private credentials or local environment files.

## Author

**Aryan Chauhan**  
[GitHub](https://github.com/Aryan96250) · [LinkedIn](https://www.linkedin.com/in/chauhan-3a11b6286) · [Email](mailto:aryan96250@gmail.com)
