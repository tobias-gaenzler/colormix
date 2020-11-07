import 'dart:html';

import 'package:colormix/colormix.dart';
import 'package:colormix/colorwheel.dart';

class MainView {
  final ColorWheel _colorWheel = ColorWheel();
  final ColorMixer _colorMixer = ColorMixer();

  ColorWheel createColorWheel() {
    _colorWheel.create(querySelector('#colorWheel'));
    return _colorWheel; // used in tests
  }

  void addListener() {
    querySelector('#colorWheel').onClick.listen((e) {
      _addColor(e);
    });
    querySelector('#resetButton').onClick.listen((e) {
      _reset();
    });
    querySelector('#numberOfColorsInColorWheel').onChange.listen((e) {
      _setNumberOfColors();
    });
  }

  void _setNumberOfColors() {
    SelectElement myElement = querySelector('#numberOfColorsInColorWheel');
    _colorWheel.setNumberOfColors(int.parse(myElement.value));
    _colorWheel.create(querySelector('#colorWheel'));
  }

  void _addColor(e) {
    var selectedColor = _colorWheel.getSelectedColor(e);
    var mix = _colorMixer.mix(selectedColor);
    querySelector('#resultColor').style.backgroundColor =
        ColorMixHelper.toRGBString(RYB2RGB.ryb2rgb(mix));
    querySelector('#resultColor').text =
        ColorMixHelper.toRGBString(RYB2RGB.ryb2rgb(mix));
  }

  void _reset() {
    querySelector('#resultColor').style.backgroundColor =
        ColorMixHelper.toRGBString(ColorMixHelper.WHITE);
    querySelector('#resultColor').text = 'Result';
    _colorMixer.reset();
  }
}
