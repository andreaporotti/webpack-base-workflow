# Webpack Base Workflow

## Disclaimer
THIS CODE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.

## Description

This repo contains a basic [Webpack](https://webpack.js.org/) setup ment to be used as a starting point for a new web project.

Here is a list of the implemented features:
- General
  - helps to stay more organized keeping JS e CSS in smaller files (modules)
  - provides "dev" and "prod" compile commands
  - watches for JS and CSS changes and immediately compiles all the files
- Javascript
  - compiles all JS files in a single one (bundle)
  - returns a JS code compatible with older browsers
  - minifies the JS code
- CSS
  - compiles all CSS files in a single one (bundle)
  - minifies the CSS code
  - imports [normalize.css](http://necolas.github.io/normalize.css/) in the bundle
  - supports SCSS
  - supports Mixins
  - adds prefixes to the CSS properties
  - allows usage of HEX values in RGBA colors

I left a few "temp" files as a placeholder to better understand the code organization.

## Requirements
- **NodeJS** to run the `npm` package manager (tested on NodeJS 8.12.0 and `npm` 6.4.1)

## Installation
- clone or download & extract this repository in a folder
- run `npm install` to install all the dependencies

## Configuration

The main configuration is placed inside the `webpack.config.js` file.

The script names (the commands you can run) are inside the `package.json` file.

## Usage
run `npm run dev` to get a single not minified `bundle.js` file that includes JS and CSS code.

run `npm run prod` to get two minified files:  `bundle.js` and `bundle.css`.

Each command will run and then will enter in "watch" state, so the files will be compiled again on every change.

By default, the files will be saved in the `dist` folder.

If you want to test the default setup, create an `index.html` file inside the `dist` folder with this code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Webpack Base Workflow</title>
    <link rel="stylesheet" href="bundle.css">
</head>
<body>
    <div class="temp-box">
        <p class="temp-box__text temp-box__text--white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, blanditiis.</p>
    </div>

    <script src="bundle.js"></script>
</body>
</html>
```