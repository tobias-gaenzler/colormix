@TestOn('vm')

import 'package:test/test.dart';
import 'package:colormix/colormix.dart';
import 'package:vector_math/vector_math.dart';

void main() {
  group('ColorMixer.mix(color)', () {
    test('ColorMixer.mix(first color) returns first color', () {
      var colorMixer = ColorMixer();
      var first_color = Vector3(255.0, 255.0, 255.0);
      expect(colorMixer.mix(first_color), equals(first_color));
      expect(colorMixer.mixResult(), equals(first_color));
    });
    test('ColorMixer.mix(color) mixes RYB blue and RYB yellow to RYB green',
        () {
      var colorMixer = ColorMixer();
      var blue = Vector3(0.0, 0.0, 255.0);
      var yellow = Vector3(0.0, 255.0, 0.0);
      var green = Vector3(0.0, 255.0, 255.0);
      colorMixer.mix(blue);
      var result = colorMixer.mix(yellow);
      expect(result, equals(green));
    });
    test('ColorMixer.mix(color) mixes RYB red and RYB yellow to RYB orange',
        () {
      var colorMixer = ColorMixer();
      var red = Vector3(255.0, 0.0, 0.0);
      var yellow = Vector3(0.0, 255.0, 0.0);
      var orange = Vector3(255.0, 255.0, 0.0);
      colorMixer.mix(red);
      var result = colorMixer.mix(yellow);
      expect(result, equals(orange));
    });
  });

  group('ColorMixHelper.reset()', () {
    test('ColorMixer.reset() removes all mixed colors', () {
      var colorMixer = ColorMixer();
      var red = Vector3(255.0, 0.0, 0.0);
      var yellow = Vector3(0.0, 255.0, 0.0);
      colorMixer.mix(red);
      colorMixer.mix(yellow);
      colorMixer.reset();
      expect(colorMixer.mixResult(), equals(Vector3.zero()));
    });
  });
}
