# SPYC Library

[Github](https://github.com/spyc/library)

[![Build Status](https://travis-ci.org/tonyhhyip/library.svg?branch=master)](https://travis-ci.org/tonyhhyip/library)

The version 3 SPYC library website

## Required Software

Please install the following software:

- [node.js](../software/Node.md) (6)
- [yarn](../software/Yarn.md) (0.17 or above)

## Project Structure

    .
    ├── assets        # Resource of the website
    |   ├── data      # Data of website in JSON format
    |   ├── images    # Image to be used
    |   ├── js        # All Javascript of the site
    |   ├── layouts   # Template for include
    |   ├── pages     # Tempalte for pages
    |   └── scss      # Style of the site 
    ├── node_modules  # Javascript Library
    ├── public        # Output files
    └── spec          # All the test

## Involved Technology

- Javascript
- [VueJS](https://vuejs.org/) - Core routing & logic
- [scss](http://sass-lang.com/) - Simpler CSS Style
- [Nunjucks](https://mozilla.github.io/nunjucks/) - HTML Template
- [gulp](http://gulpjs.com/) - Auto Building
- [webpack](https://webpack.github.io/docs/) - Javascript Bundle
- [BabelJS](https://babeljs.io/) - Javascript Compiling
- [Karma](https://karma-runner.github.io/1.0/index.html) - Test on Browser
- [Jasmine](https://jasmine.github.io/) - Test Framework

## Setup

```bash
[sudo] yarn global add gulp
yarn install
```

## Development

Run the command: `gulp dev`

A HTTP Server would start and listen on **8080** port and resource would continue building.

Run command `yarn test` for testing