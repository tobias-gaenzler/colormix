@TestOn('chrome')

import 'dart:html';
import 'package:colormix/colorwheel.dart';
import 'package:colormix/mainview.dart';
import 'package:test/test.dart';

/// Test that clicking on color wheel mixes colors
void main() {
  group('Test that clicking on color wheel mixes colors', () {
    test('Click on red adds red to result', () {
      MainView mainView = MainView();
      ColorWheel colorWheel = mainView.createColorWheel();
      // use three instead of six colors
      colorWheel.setNumberOfColors(3);
      // need to repaint the color wheel
      colorWheel = mainView.createColorWheel();
      mainView.addListener();
      // click red
      MouseEvent mouseEvent = MouseEvent('click', clientX: 200, clientY: 200);
      querySelector('#colorWheel').dispatchEvent(mouseEvent);
      String result = querySelector('#resultColor').style.backgroundColor;
      expect(result, equals('rgb(255, 0, 0)'));
    });
    test('Yellow and blue mix to green', () {
      MainView mainView = MainView();
      mainView.createColorWheel();
      mainView.addListener();
      // click yellow
      MouseEvent mouseEvent = MouseEvent('click', clientX: 75, clientY: 200);
      querySelector('#colorWheel').dispatchEvent(mouseEvent);
      // click blue
      mouseEvent = MouseEvent('click', clientX: 150, clientY: 50);
      querySelector('#colorWheel').dispatchEvent(mouseEvent);
      String result = querySelector('#resultColor').style.backgroundColor;
      expect(result, equals('rgb(0, 168, 51)'));
    });
  });
  group('Test that reset button works', () {
    test('Reset button resets result color', () {
      MainView mainView = MainView();
      mainView.createColorWheel();
      mainView.addListener();
      // click yellow
      MouseEvent mouseEvent = MouseEvent('click', clientX: 75, clientY: 200);
      querySelector('#colorWheel').dispatchEvent(mouseEvent);
      String result = querySelector('#resultColor').style.backgroundColor;
      expect(result, equals('rgb(255, 255, 0)'));
      querySelector('#resetButton').click();
      result = querySelector('#resultColor').style.backgroundColor;
      expect(result, equals('rgb(255, 255, 255)'));
    });
  });
}
