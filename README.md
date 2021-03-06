![Screenshot](colormix.jpg)

## Introduction
This is a simple dart web app to mix a predefined set of colors.
Since there seems to be no good algorithm to simulate mixing paint colors (see [algorithm for mixing real colors discussion](https://stackoverflow.com/questions/1351442/is-there-an-algorithm-for-color-mixing-that-works-like-mixing-real-colors)) I chose a simple algorithm which gives at least *blue + yellow = green* as children learn in school.

This simple algorithm just adds color values in the RYB color space, e.g. (attention: these are RYB values and not RGB values):
>   blue (0, 0, 255) + yellow (0, 255, 0) = green (0, 255, 255)

## Quick Start
* Clone the repo and open [web/index_standalone.html](https://github.com/tobias-gaenzler/colormix/blob/main/web/index_standalone.html)
in your browser.
* Alternative: download and unpack [colormix_1.0.zip](https://github.com/tobias-gaenzler/colormix/releases/tag/1.0) from the release and open [index_standalone.html](https://github.com/tobias-gaenzler/colormix/blob/main/web/index_standalone.html) in your browser
* Alternative: run via *Docker* 
    ```
    docker pull tobiasgaenzler/colormix:1.0
    docker run -i -p 8080:8080 tobiasgaenzler/colormix:1.0 
    open http://localhost:8080 in your browser (wait some time, try *chrome* if it does not work in your browser ...)
    ```


### App Usage
Clicking one of the colors in the color wheel adds the color to the result.
You restart by clicking *Reset*.

## Development
Setup your local development environment for dart (see e.g. [Dart Web deployment](https://dart.dev/web/deployment) ).

Clone the repo and either import the project in your favorite IDE (Intellij Idea, VSC) or use the command line:
* pub get
* webdev serve 

That will open a chrome browser with the app.

### Executing tests
You can execute unit tests:
>  pub run test -p vm test

or web tests (browser)
>   pub run test -p chrome test

