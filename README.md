
# Playwright Fundamentals

A comprehensive learning project for mastering Playwright testing framework. This project demonstrates modern web automation practices with TypeScript, covering end-to-end testing, advanced locator strategies, state management, and professional reporting with Allure integration. Ideal for developers looking to build robust and scalable test automation solutions.

## Project Structure

```
PlaywrightFundamentals/
├── tests/                                      # Main test modules organized by chapters
│   ├── Ch01_Basic/                            # Chapter 1: Basic Playwright concepts
│   │   ├── basic.spec.ts                      # Basic test examples
│   │   └── Test_Annotation.spec.ts            # Test annotations and metadata
│   │
│   ├── Ch02_First_Tests/                      # Chapter 2: Writing and managing tests
│   │   ├── First_Running_Test.spec.ts         # Your first test execution
│   │   ├── Browser_Context_Pages.spec.ts     # Managing browser contexts and pages
│   │   ├── Multiple_Pages.spec.ts            # Working with multiple page instances
│   │   ├── MultipleContext.spec.ts           # Managing multiple contexts
│   │   ├── Manual_Context.spec.ts            # Manual context configuration
│   │   ├── manualContext_Options.spec.ts     # Advanced context options
│   │   ├── Reusing_Context.spec.ts           # Reusing contexts across tests
│   │   └── TestPW.spec.ts                    # Test Playwright utilities
│   │
│   ├── Ch03_Locator_Commands/                # Chapter 3: Locator strategies & commands
│   │   ├── CSS_Selector.spec.ts              # CSS selector strategies
│   │   ├── Xpath.spec.ts                     # XPath selector strategies
│   │   ├── GetByRole.spec.ts                 # Accessible locators using getByRole
│   │   ├── GotoCommands.spec.ts              # Navigation and goto commands
│   │   ├── GotoCommands2.spec.ts             # Advanced goto scenarios
│   │   ├── PressSequentially.spec.ts         # Sequential keyboard input
│   │   ├── Cookies.spec.ts                   # Cookie management
│   │   ├── Automation_VWO.com.spec.ts        # Real-world automation example
│   │   └── Index.html                        # Test HTML fixture
│   │
│   ├── Ch04_Session_Storage/                 # Chapter 4: Session & storage handling
│   │   └── (Test files for state persistence)
│   │
│   ├── Ch05_AllureReporting/                 # Chapter 5: Allure reporting integration
│   │   └── (Test files with Allure annotations)
│   │
│   ├── Projects/                             # Project-based test examples
│   │   └── (Real-world project implementations)
│   │
│   └── Tasks/                                # Task-based test implementations
│       └── (Guided task exercises)
│
├── e2e/                                      # End-to-end test specifications
│   └── example.spec.ts                      # Example E2E test template
│
├── playwright-report/                        # Playwright test report (generated)
├── test-results/                             # Test results artifacts (generated)
├── allure-results/                           # Allure report results (generated)
├── playwright.config.ts                      # Playwright configuration & browser settings
├── package.json                              # Project dependencies and npm scripts
├── tsconfig.json                             # TypeScript configuration
└── README.md                                 # This file

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
