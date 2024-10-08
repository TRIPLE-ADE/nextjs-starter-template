# Project Name

A brief description of what your project does and its main goals.

## Table of Contents

1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Setup](#setup)
2. [Project Structure](#project-structure)
3. [Features](#features)
4. [Contributing](#-contributing)
   - [Contribution Guidelines](#contribution-guidelines)
   - [Commit Cheat Sheet](#commit-cheat-sheet)
5. [Tech Stack](#tech-stack)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js 18.19+](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-project.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd your-project
   ```

3. **Install project dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env.local` file at the root of your project and add the necessary environment variables:

   ```bash
   KEY_NAME=your_value
   ```

5. **Run the development server:**

   ```bash
   npm run dev
   ```

6. **Open your browser to view the result:**
   - [http://localhost:3000](http://localhost:3000)

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
├── next-env.d.ts        # TypeScript environment definitions
├── next.config.mjs       # Next.js configuration
├── package-lock.json       # Lockfile for npm dependencies
├── package.json            # Project metadata and npm scripts
├── postcss.config.mjs     # Tailwind Postcss configuration
├── README.md            # Project documentation
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## Features

- **Feature 1**: Description of feature 1.
- **Feature 2**: Description of feature 2.
- **Feature 3**: Description of feature 3.

## 🤝 Contributing

### Contribution Guidelines

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-project.git
   ```

2. **Create a new branch from `main`:**

   ```bash
   git checkout -b Feat/{feature-name} origin/main
   ```

3. **Ensure your branch is up to date:**

   ```bash
   git pull origin main
   ```

4. **Commit your changes with a descriptive message:**

   ```bash
   git commit -m "feat: {describe your feature here}"
   ```

5. **Push your changes:**

   ```bash
   git push -u origin Feat/{feature-name}
   ```

6. **Create a pull request and describe your changes in detail.**

### _Commit Cheat Sheet_

| Type     | Description                                                       |
| -------- | ----------------------------------------------------------------- |
| feat     | A new feature you're adding                                       |
| fix      | A bug fix                                                         |
| docs     | Documentation only changes                                        |
| style    | Changes that do not affect code logic (e.g., formatting, linting) |
| refactor | Code change that neither fixes a bug nor adds a feature           |
| perf     | Code change that improves performance                             |
| test     | Adding or updating tests                                          |
| build    | Changes that affect the build system or external dependencies     |
| ci       | Changes to CI configuration files and scripts                     |
| chore    | Other changes that don't modify source or test files              |
| revert   | Reverts a previous commit                                         |

#### Sample Commit Message

- `feat: Add new feature to handle X` := A descriptive example of a feature commit message.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Linting**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- **Git Hooks**: [Husky](https://typicode.github.io/husky/#/)
- **Commit Guidelines**: [Commitlint](https://commitlint.js.org/)
- **Others**
