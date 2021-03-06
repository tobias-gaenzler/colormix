@TestOn('vm')

import 'package:test/test.dart';
import 'package:colormix/colormix.dart';
import 'package:vector_math/vector_math.dart';

void main() {
  group('ColorMixHelper.toRGBString()', () {
    test('ColorMixHelper.toRGBString(red) returns rgb(255,0,0)', () {
      Vector3 rgb_red = Vector3(255.0, 0.1, 0.4);
      expect(ColorMixHelper.toRGBString(rgb_red), equals('rgb(255,0,0)'));
    });
    test('ColorMixHelper.toRGBString(color) rounds color values to integers',
        () {
      Vector3 color = Vector3(14.3423423, 1.7423423, 254.500);
      expect(ColorMixHelper.toRGBString(color), equals('rgb(14,2,255)'));
    });
  });
}
