@TestOn('chrome')

import 'dart:html';
import 'package:test/test.dart';
import 'package:vector_math/vector_math.dart';
import 'package:colormix/colorwheel.dart';

/// Test the color wheel painted on the canvas by checking the colors returned when clicked on certain segments
void main() {
  test('ColorWheel displays red, yellow, blue in RYB color space', () {
    var colorWheel = ColorWheel();
    colorWheel.setNumberOfColors(3);
    colorWheel.create(querySelector('#colorWheel'));
    // red
    var mouseEvent = MouseEvent('click', clientX: 200, clientY: 200);
    var result = colorWheel.getSelectedColor(mouseEvent);
    expect(result, equals(Vector3(255, 0, 0)));
    // yellow
    mouseEvent = MouseEvent('click', clientX: 0, clientY: 0);
    result = colorWheel.getSelectedColor(mouseEvent);
    print(result);
    expect(result, equals(Vector3(0, 255, 0)));
    // blue
    mouseEvent = MouseEvent('click', clientX: 150, clientY: 75);
    result = colorWheel.getSelectedColor(mouseEvent);
    expect(result, equals(Vector3(0, 0, 255)));
  });
}
