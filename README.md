
# Playwright Fundamentals

A comprehensive learning project for mastering Playwright testing framework. This project demonstrates modern web automation practices with TypeScript, covering end-to-end testing, advanced locator strategies, state management, and professional reporting with Allure integration. Ideal for developers looking to build robust and scalable test automation solutions.

## Project Structure

```
PlaywrightFundamentals/
├── tests/                          # Main test modules organized by topic
│   ├── Ch01_Basic/                # Chapter 1: Basic Playwright concepts
│   ├── Ch02_First_Tests/          # Chapter 2: Writing first tests
│   ├── Ch03_Locator_Commands/     # Chapter 3: Locator and command strategies
│   ├── Ch04_Session_Storage/      # Chapter 4: Session and storage handling
│   ├── Ch05_AllureReporting/      # Chapter 5: Allure reporting integration
│   ├── Projects/                  # Project-based test examples
│   └── Tasks/                     # Task-based test implementations
├── e2e/                           # End-to-end test specifications
│   └── example.spec.ts           # Example E2E test file
├── playwright-report/            # Playwright test report (generated)
├── test-results/                 # Test results (generated)
├── allure-results/               # Allure report results (generated)
├── playwright.config.ts          # Playwright configuration
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file

## Technologies & Dependencies

- **Playwright**: ^1.59.1 - Modern web testing framework
- **TypeScript**: ^6.0.3 - Type-safe scripting
- **Allure Reporting**: ^3.7.1 - Advanced test reporting
- **Node.js**: ^25.6.0 - Runtime environment

## Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run lint` - Run TSLint on source files
- `npm run prepublish` - Prepare for publication

## Getting Started

1. Install dependencies: `npm install`
2. Configure Playwright in `playwright.config.ts`
3. Run tests using Playwright's built-in commands
4. View reports in `playwright-report/` or `allure-results/`
