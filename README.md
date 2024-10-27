# Next.js Starter Template

This is a **Next.js starter template** setup to help you quickly bootstrap your Next.js projects with best practices and pre-configured tools. It includes packages and setups needed for industry-standard development workflows.

## Features:

- **Next.js (App Directory)**: Next.js setup for building modern web applications.
- **TypeScript**: TypeScript for type checking, better maintainability and scalability.
- **Tailwind CSS**: Utility-first CSS framework for UI development.
- **Husky**: Automatically set Pre-commit hooks or Pre-push hooks to enforce linting and testing.
- **Lint-Staged**: Runs ESLint and Prettier on staged files before committing.
- **ESLint & Prettier**: Linting and formatting tools to ensure clean, consistent code.
- **Commitlint**: Enforces conventional commit messages for better commit history.
- **Pre-Commit Hooks**: Automatically runs linting on staged files before every commit.
- **Pre-Push Hooks**: Automatically runs the build process before pushing to ensure code quality.

## Getting Started:

1. Clone the repository:

   ```bash
   git clone https://github.com/TRIPLE-ADE/nextjs-starter-template.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Customize the template to fit your project!

## Usage:

This repository is set up as a **template**, allowing you to easily clone or generate new projects based on it.

## Customize Your README

After setting up your project, you can replace this README with a project-specific one. A **README template** is provided in this repository to help you quickly document your new project.

1. Navigate to `README_TEMPLATE.md` in the root directory.
2. Copy the contents of `README_TEMPLATE.md`.
3. Replace this README with your own by pasting and customizing the template to fit your project.

> **Note:** Add all relevant project information such as the project name, description, features, and instructions.

## Project Structure

The project follows a **feature-first** folder structure (or modify based on your actual structure):

```bash
project-name/
│
├── .husky/              # Husky configuration for pre-commit hooks
├── app/                # App directory for routing and pages
│   ├── api/            # API routes
│   ├── components/      # Reusable components
│   ├── layout.tsx       # Layout component
│   ├── page.tsx         # Main entry point for the app
│   ├── styles/          # Global styles (e.g., Tailwind)
│   ├── middleware.ts    # Middleware for authentication
│   ├── hooks/           # Custom React hooks
│   └── utils/           # Utility functions
├── .eslintignore         # ESLint ignore rules configuration
├── .eslintrc.json        # ESLint configuration
├── .prettierignore       # Prettier ignore rules configuration
├── .prettierrc.json      # Prettier configuration
├── commitlint.config.mjs # Commitlint configuration
├── components.json # shadcn components json
├── jest.config.js      # jest configuration
├── jest.setup.js       # jest setup configuration
├── next-env.d.ts        # TypeScript environment definitions
├── next.config.mjs       # Next.js configuration
├── package-lock.json       # Lockfile for npm dependencies
├── package.json            # Project metadata and npm scripts
├── postcss.config.mjs     # Tailwind Postcss configuration
├── README_TEMPLATE.md     # Project specific documentation
├── README.md            # Project documentation
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```