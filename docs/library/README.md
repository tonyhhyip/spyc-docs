# SPYC Library

[![Build Status](https://travis-ci.org/tonyhhyip/library.svg?branch=master)](https://travis-ci.org/tonyhhyip/library)

The version 3 SPYC library website

## Required Software

Please install the following software:

- node.js (6)
- npm (3 or above) / yarn (0.17 or above)

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

## Setup

```bash
npm install -g gulp
npm install
```

## Development

Run the command: `gulp dev`
A HTTP Server would start and listen on 8080 port and resource would continue building
Run command `npm run test` for testing

## Production

1. Run command: `NODE_ENV=production gulp build`
2. Serve the `public` directory with a HTTP Server (e.g. nginx)