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
├── .angular/                            # Angular cache and build files
├── .editorconfig                        # Editor configuration
├── .github/                             # GitHub workflows for CI/CD pipelines
│   └── workflows/
│       └── deploy.yaml                  # Automated deployment configuration
├── .gitignore                           # Git ignore rules for version control
├── .vscode/                             # VS Code editor configuration
│   ├── extensions.json                  # Recommended extensions for the project
│   ├── launch.json                      # Debugging configuration
│   └── tasks.json                       # Custom task definitions
├── LICENSE                              # License file
├── README.md                            # Project documentation
├── angular.json                         # Angular workspace configuration
├── package-lock.json                    # NPM lock file for dependency versioning
├── package.json                         # Project dependencies and scripts
├── preview.png                          # Project preview image
├── projects/                            # Angular workspace projects (monorepo structure)
│   ├── home/                            # Home library - contains home page components
│   │   ├── README.md                    # Home library documentation
│   │   ├── ng-package.json              # Angular package configuration
│   │   ├── package.json                 # Library-specific dependencies
│   │   ├── src/                         # Source code for the home library
│   │   │   ├── application/             # Application layer - contains use cases and application services
│   │   │   ├── domain/                  # Domain layer - contains business logic, entities and value objects
│   │   │   ├── index.ts                 # Public API exports for the library
│   │   │   └── infrastructure/          # Infrastructure layer - implements interfaces defined in domain
│   │   │       ├── adapters/            # Adapters for external services and APIs
│   │   │       │   ├── input/           # Input adapters (controllers, event handlers)
│   │   │       │   └── output/          # Output adapters (repositories, external service clients)
│   │   │       ├── services/            # Infrastructure services implementation
│   │   │       └── ui/                  # User interface components
│   │   │           ├── _styles/         # Component-specific styles
│   │   │           ├── components/      # Reusable UI components for home features
│   │   │           └── layouts/         # Layout components for home pages
│   │   ├── tsconfig.lib.json            # TypeScript configuration for library
│   │   ├── tsconfig.lib.prod.json       # Production TypeScript configuration
│   │   └── tsconfig.spec.json           # Test TypeScript configuration
│   ├── main/                            # Main application - entry point that ties everything together
│   │   ├── public/                      # Static public assets
│   │   ├── src/                         # Source code for the main application
│   │   │   ├── app/                     # Core application code
│   │   │   │   ├── app.component.ts     # Root component
│   │   │   │   ├── app.config.ts        # Application configuration
│   │   │   │   └── app.routes.ts        # Application routing
│   │   │   ├── assets/                  # Static assets (images, fonts, etc.)
│   │   │   ├── index.html               # Main HTML entry point
│   │   │   ├── main.ts                  # Application bootstrap file
│   │   │   └── styles.scss              # Global styles
│   │   ├── tsconfig.app.json            # TypeScript configuration for application
│   │   └── tsconfig.spec.json           # Test TypeScript configuration
│   └── shared/                          # Shared library - common components used across the application
│       ├── README.md                    # Shared library documentation
│       ├── ng-package.json              # Angular package configuration
│       ├── package.json                 # Library-specific dependencies
│       ├── src/                         # Source code for the shared library
│       │   ├── application/             # Application layer - shared use cases and services
│       │   ├── domain/                  # Domain layer - shared business logic and models
│       │   ├── index.ts                 # Public API exports for the library
│       │   └── infrastructure/          # Infrastructure layer - shared implementations
│       │       ├── adapters/            # Shared adapters for external services
│       │       │   ├── input/           # Shared input adapters
│       │       │   └── output/          # Shared output adapters
│       │       ├── services/            # Shared service implementations
│       │       └── ui/                  # Shared UI components
│       │           ├── _styles/         # Shared component styles
│       │           ├── components/      # Reusable UI components
│       │           ├── forms/           # Form components and validators
│       │           └── layouts/         # Shared layout components
│       ├── tsconfig.lib.json            # TypeScript configuration for library
│       ├── tsconfig.lib.prod.json       # Production TypeScript configuration
│       └── tsconfig.spec.json           # Test TypeScript configuration
├── tsconfig.json                        # Root TypeScript configuration
├── LICENSE                              # License file
└── README.md                            # Project documentation
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
