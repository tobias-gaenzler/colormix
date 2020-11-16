@TestOn('vm')

import 'package:test/test.dart';
import 'package:colormix/colormix.dart';
import 'package:vector_math/vector_math.dart';

void main() {
  test('HSL2RYB.convert(h,s,l) interpolates HSL red to RGB red', () {
    expect(HSL2RYB.convert(0.0, 1.0, 0.50), equals(Vector3(255.0, 0.0, 0.0)));
  });
  test('HSL2RYB.convert(h,s,l) interpolates HSL green to RGB green', () {
    expect(HSL2RYB.convert(120.0 / 360.0, 1.0, 0.50),
        equals(Vector3(0.0, 255.0, 0.0)));
  });
  test('HSL2RYB.convert(h,s,l) interpolates HSL blue to RGB blue', () {
    expect(HSL2RYB.convert(240.0 / 360.0, 1.0, 0.50),
        equals(Vector3(0.0, 0.0, 255.0)));
  });
  test('HSL2RYB.convert(h,s,l) interpolates HSL white to RGB white', () {
    expect(
        HSL2RYB.convert(0.0, 0.0, 1.0), equals(Vector3(255.0, 255.0, 255.0)));
  });
}
