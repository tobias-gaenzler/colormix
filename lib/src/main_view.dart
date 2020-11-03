import 'dart:html';

import 'package:colormix/colormix.dart';
import 'package:colormix/colorwheel.dart';

class MainView {
  final ColorWheel _colorWheel = ColorWheel();
  final ColorMixer _colorMixer = ColorMixer();
  final String _resultElementId = 'resultColor';

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
    querySelector('#$_resultElementId').style.backgroundColor =
        ColorMixHelper.toRGBString(RYB2RGB.ryb2rgb(mix));
    querySelector('#$_resultElementId').text =
        ColorMixHelper.toRGBString(RYB2RGB.ryb2rgb(mix));
  }

  void _reset() {
    querySelector('#$_resultElementId').style.backgroundColor =
        ColorMixHelper.toRGBString(ColorMixHelper.WHITE);
    querySelector('#$_resultElementId').text = 'Result';
    _colorMixer.reset();
    _setNumberOfColors();
  }
}
