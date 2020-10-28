# Colormix

## Introduction
This is a simple dart web app to mix a predefined set of colors.
Since there seems to be no good algorithm to simulate mixing paint colors (see [algorithm for mixing real colors discussion](https://stackoverflow.com/questions/1351442/is-there-an-algorithm-for-color-mixing-that-works-like-mixing-real-colors)) I chose a simple algorithm which gives at least *blue + yellow = green* as children learn in school.

This simple algorithm just adds color values in the RYB color space, e.g. (attention: these are RYB values and not RGB values):
>   blue (0, 0, 255) + yellow (0, 255, 0) = green (0, 255, 255)

## Quick Start
Clone the repo and open [web/index.html](https://github.com/tobias-gaenzler/colormix/blob/main/web/index.html)
in your browser.

### Usage
Clicking one of the colors in the color wheel adds the color to the result.
You restart by clicking *Reset*.

## Development
Clone the repo, import the project in your favorite IDE (Intellij Idea, VSC) 
and use 
* pub get
* webdev serve 

That will open a chrome browser with the app.

