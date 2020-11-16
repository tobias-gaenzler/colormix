import 'dart:html';

import 'package:colormix/colormix.dart';
import 'package:colormix/colorwheel.dart';
import 'package:vector_math/vector_math.dart';

class MainView {
  final ColorWheel _colorWheel = ColorWheel();
  final ColorMixer _colorMixer = ColorMixer();

  ColorWheel createColorWheel() {
    _colorWheel.create(querySelector('#colorWheel'));
    return _colorWheel; // used in tests
  }

  void addListener() {
    querySelector('#colorWheel').onClick.listen((MouseEvent e) {
      _addColor(e);
    });
    querySelector('#resetButton').onClick.listen((e) {
      _reset();
    });
    querySelector('#numberOfColorsInColorWheel').onChange.listen((Event e) {
      _setNumberOfColors();
    });
  }

  void _setNumberOfColors() {
    SelectElement myElement = querySelector('#numberOfColorsInColorWheel');
    _colorWheel.setNumberOfColors(int.parse(myElement.value));
    _colorWheel.create(querySelector('#colorWheel'));
  }

  void _addColor(MouseEvent e) {
    Vector3 selectedColor = _colorWheel.getSelectedColor(e);
    Vector3 mix = _colorMixer.mix(selectedColor);
    querySelector('#resultColor').style.backgroundColor =
        ColorMixHelper.toRGBString(RYB2RGB.convert(mix));
    querySelector('#resultColor').text = '';
    querySelector('#resultColor').title =
        ColorMixHelper.toRGBString(RYB2RGB.convert(mix));
  }

  void _reset() {
    querySelector('#resultColor').style.backgroundColor =
        ColorMixHelper.toRGBString(ColorMixHelper.WHITE);
    querySelector('#resultColor').text = 'Result';
    _colorMixer.reset();
  }
}
