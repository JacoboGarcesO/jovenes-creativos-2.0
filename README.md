# Jóvenes Creativos Frontend

![Jóvenes Creativos Preview](./preview.png)

## About the Project

Jóvenes Creativos is a free software development program designed to help young people become developers from scratch. The program offers comprehensive training in IT skills, focusing on both technical abilities and entrepreneurship.

### Key Features
- Free access to quality software development education
- Comprehensive curriculum covering frontend and backend technologies
- Focus on practical, hands-on learning
- Community-driven learning environment

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Project Structure

The project is organized into several Angular libraries and applications:

- **home**: Library containing home page components
- **ui**: Shared UI component library
- **main**: Main application that ties everything together

### Scaffold Representation

```
jovenes-creativos-frontend/
├── .angular/                  # Angular cache and build files
├── .vscode/                   # VS Code configuration
│   ├── extensions.json
│   ├── launch.json
│   └── tasks.json
├── projects/                  # Angular workspace projects
│   ├── home/                  # Home library
│   │   ├── src/
│   │   │   ├── components/    # Reusable UI components
│   │   │   │   ├── _styles/   # Component styles
│   │   │   │   ├── blocks/    # Block components
│   │   │   │   └── layouts/   # Layout components
│   │   │   ├── containers/    # Container components
│   │   │   │   ├── header-container/
│   │   │   │   └── hero-container/
│   │   │   └── index.ts       # Public API exports
│   │   ├── ng-package.json    # Angular package configuration
│   │   ├── package.json       # Library dependencies
│   │   ├── tsconfig.lib.json  # TypeScript configuration
│   │   └── README.md          # Library documentation
│   ├── ui/                    # UI library
│   │   ├── src/
│   │   │   ├── assets/        # UI assets
│   │   │   └── index.ts       # Public API exports
│   │   ├── ng-package.json    # Angular package configuration
│   │   ├── package.json       # Library dependencies
│   │   ├── tsconfig.lib.json  # TypeScript configuration
│   │   └── README.md          # Library documentation
│   └── main/                  # Main application
│       ├── public/            # Static assets
│       │   ├── images/        # Image assets
│       │   └── favicon.ico    # Favicon
│       ├── src/               # Application source code
│       │   ├── app/           # Application components
│       │   │   ├── app.component.ts
│       │   │   ├── app.config.ts
│       │   │   └── app.routes.ts
│       │   ├── assets/        # Application assets
│       │   │   └── font/      # Font files
│       │   ├── index.html     # Main HTML file
│       │   ├── main.ts        # Application entry point
│       │   └── styles.scss    # Global styles
│       └── tsconfig.app.json  # TypeScript configuration
├── angular.json               # Angular workspace configuration
├── package.json               # Project dependencies
├── tsconfig.json              # TypeScript configuration
├── LICENSE                    # License file
└── README.md                  # Project documentation
```

This structure follows Angular's recommended workspace organization with a monorepo approach, separating reusable libraries from the main application.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher)
- Angular CLI (v19.2.5)

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/jovenes-creativos-frontend.git

# Navigate to the project directory
cd jovenes-creativos-frontend

# Install dependencies
npm install
```

## Additional Resources

- For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
