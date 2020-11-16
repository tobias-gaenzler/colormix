@TestOn('vm')

import 'package:test/test.dart';
import 'package:colormix/colormix.dart';
import 'package:vector_math/vector_math.dart';

void main() {
  group('ColorMixer.mix(color)', () {
    test('ColorMixer.mix(first color) returns first color', () {
      ColorMixer colorMixer = ColorMixer();
      Vector3 first_color = Vector3(255.0, 255.0, 255.0);
      expect(colorMixer.mix(first_color), equals(first_color));
      expect(colorMixer.mixResult(), equals(first_color));
    });
    test('ColorMixer.mix(color) mixes RYB blue and RYB yellow to RYB green',
        () {
      ColorMixer colorMixer = ColorMixer();
      Vector3 blue = Vector3(0.0, 0.0, 255.0);
      Vector3 yellow = Vector3(0.0, 255.0, 0.0);
      Vector3 green = Vector3(0.0, 255.0, 255.0);
      colorMixer.mix(blue);
      Vector3 result = colorMixer.mix(yellow);
      expect(result, equals(green));
    });
    test('ColorMixer.mix(color) mixes RYB red and RYB yellow to RYB orange',
        () {
      ColorMixer colorMixer = ColorMixer();
      Vector3 red = Vector3(255.0, 0.0, 0.0);
      Vector3 yellow = Vector3(0.0, 255.0, 0.0);
      Vector3 orange = Vector3(255.0, 255.0, 0.0);
      colorMixer.mix(red);
      Vector3 result = colorMixer.mix(yellow);
      expect(result, equals(orange));
    });
  });

  group('ColorMixHelper.reset()', () {
    test('ColorMixer.reset() removes all mixed colors', () {
      ColorMixer colorMixer = ColorMixer();
      Vector3 red = Vector3(255.0, 0.0, 0.0);
      Vector3 yellow = Vector3(0.0, 255.0, 0.0);
      colorMixer.mix(red);
      colorMixer.mix(yellow);
      colorMixer.reset();
      expect(colorMixer.mixResult(), equals(Vector3.zero()));
    });
  });
}
