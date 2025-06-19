# 🧪 WebdriverIO-Mocha-TypeScript Framework 2025

This project is a scalable end-to-end test automation framework built using **WebdriverIO v9**, **Mocha**, and **TypeScript** for the Magento demo site.

---

## Project Structure

webdriver.io-mocha-framework-2025/

- ├── allure-results/ # Allure raw test result data
- ├── allure-report/ # Generated Allure reports
- ├── screenshots/ # Screenshots captured on failures
- │
- ├── test/
- │ ├── base/ # BaseTest class - handles env config
- │ ├── pages/ # Page Objects
- │ ├── specs/ # Test specs
- │ ├── resources/ # Test data & config files
- │ └── utils/ # Utility classes (JS commands, wait utils)
- │
- ├── wdio.conf.ts # WebdriverIO configuration file
- ├── package.json # NPM scripts and dependencies
- └── tsconfig.json # TypeScript configuration

---

## Getting Started

### Install Dependencies

npm install

## Run Test Suite

1. npm run wdio

This will:

**Clean screenshots, allure-results, and allure-report folders**

**Execute all tests inside test/specs/**

**Automatically take screenshots on failure**

**Generate raw results in allure-results/**

2. npx wdio run wdio.conf.ts --spec file path (e.g, npx wdio run wdio.conf.ts --spec ./test/specs/login.spec.ts)

**This will execute single test**

## Reporting
### Allure Report
After test execution:

npx allure generate allure-results --clean -o allure-report
npx allure open allure-report

## Screenshots on Failure
Screenshots are saved under /screenshots folder on test failures and automatically attached to the Allure report.
