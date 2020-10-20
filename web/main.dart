import 'dart:html';

import 'package:colormix/colormix.dart';

ColorWheel colorWheel = ColorWheel();
ColorMixer colorMixer = ColorMixer();
String resultElementId = 'resultColor';

void main() {
  colorWheel.create(querySelector('#colorWheel'));
  querySelector('#colorWheel').onClick.listen((e) {
    addColor(e);
  });
  querySelector('#resetButton').onClick.listen((e) {
    reset();
  });
  querySelector('#numberOfColorsInColorWheel').onChange.listen((e) {
    setNumberOfColors();
  });
}

void setNumberOfColors() {
  SelectElement myElement = querySelector('#numberOfColorsInColorWheel');
  colorWheel.setNumberOfColors(int.parse(myElement.value));
  colorWheel.create(querySelector('#colorWheel'));
}

void addColor(e) {
  var selectedColor = colorWheel.getSelectedColor(e);
  var mix = colorMixer.mix(selectedColor);
  querySelector('#$resultElementId').style.backgroundColor =
      ColorMixHelper.toRGBString(RYB2RGB.ryb2rgb(mix));
  querySelector('#$resultElementId').text =
      ColorMixHelper.toRGBString(RYB2RGB.ryb2rgb(mix));
}

void reset() {
  querySelector('#$resultElementId').style.backgroundColor =
      ColorMixHelper.toRGBString(ColorMixHelper.WHITE);
  querySelector('#$resultElementId').text = '';
  colorMixer.reset();
}
