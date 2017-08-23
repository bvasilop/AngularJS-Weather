# AngularWeatherApp

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## added prompt to fix Karma plugin issues
`npm install grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core phantomjs-prebuilt --save-dev`

## Autoprefixer plugin
`npm install grunt-autoprefixer --save-dev`

## Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

`grunt.loadNpmTasks('grunt-autoprefixer');`

## In your project's Gruntfile, add a section named autoprefixer to the data object passed into grunt.initConfig().

`grunt.initConfig({
  autoprefixer: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})`
