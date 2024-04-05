# React Vite Template

A basic React Vite template.

This template expands on the default Vite React and Typescript template and includes:

- An extended eslint configuration
- Formatting with prettier
- Typescript
- TailwindCSS
- `@` import alias for the `./src` folder

## Starting a new project

To start a new project with this template:

1. First, ensure you have the dependencies, Node and PNPM, installed.
1. Create a new GitHub repository for the project and make note of the name you choose.
1. Open a terminal and navigate to where you want to keep the project.
1. Create a new folder named after the repository and navigate into it.
1. Copy the template files to the folder with `pnpm dlx degit RickyAtkinson/react-vite-template`.
1. Update the `name` field in the `package.json` file to match your repository name.

   > If you plan to host this project on GitHub Pages with the `gh-pages` CLI, this field **needs** to match the repository name as Vite will use this as the `base` name for the project too.

1. Update the page title in `index.html`.
1. Replace the content in `./src/App.tsx` with the following:

   ```js
   export default function App() {
     return <h1>Project Title</h1>;
   }
   ```

1. Delete the `./public` and `./src/assets/` folders as they only contain example content.
1. Remove any irrelevant content from the `README.md` file and update the title.
1. Setup git with `git init`.
1. Make your first commit with `git add .` then `git commit -m "Initial commit"`.

You can now link your local repository to the remote one you set up earlier push your new project.

## Dependencies

- Node
- PNPM

## Setup

Install the project dependencies with `pnpm install` then start the development server with `pnpm run dev`.

## Scripts

- `pnpm run dev` - Start the development server
- `pnpm run build` - Build the project
- `pnpm run preview` - Preview the project build
- `pnpm run format` - Format project files with prettier
- `pnpm run lint` - Lint project files with eslint
- `pnpm run test` - Run tests (not implemented)
