
# Moveax ESLint configuration

This repo contains the default ESLint configuration for Moveax TypeScript projects.

## Installation

This package depends on `eslint` and `typescript`.

Install the package:

```bash
yarn add @moveax/eslint-config
```

## Setup

Create a `.eslintrc.js` file with the following contents:

```js
module.exports = {
  "extends": ["@moveax"]
}
```

You can override some rules by adding a `rules` key to the `.eslintrc.js` file.

To lint the project, run the following command in your project root folder:

```bash
yarn eslint --ext .js,.ts .
```

To fix errors that are fixable, run the following command in your project root folder:

```bash
yarn eslint --ext .js,.ts --fix .
```

### WebStorm integration

To enable eslint in your WebStorm project, go to `Settings > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint`
and select `Automatic ESLint configuration`.

