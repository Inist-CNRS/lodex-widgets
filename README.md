# LODEX widgets

> Vue.js components for [LODEX](https://github.com/Inist-CNRS/lodex/)

## Install

    npm install --save lodex-widgets

## Build Setup

> Required: use node@stable (works with node 6.3.0)

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# lint all *.js and *.vue files
npm run lint

# run unit tests
npm test
```

For more information see the [docs for vueify](https://github.com/vuejs/vueify).

## Usage

To list the JSON-LD items returned in an array from an URL, add the URL in the `about` attribute of the `lod-list` component.

For this to work, you need to include the [`LodList.js`](https://npmcdn.com/lodex-widgets@1.0.1/dist/LodList.js) file.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>LODEX widgets</title>
  </head>
  <body>
    <lod-list
     title="Linked Open Data List"
     about="http://article-type.lod.istex.fr/?alt=jsonld"
    ></lod-list>
    <script src="dist/LodList.js"></script>
  </body>
</html>
```
