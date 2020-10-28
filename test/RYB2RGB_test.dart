@TestOn('vm')

import 'package:test/test.dart';
import 'package:colormix/colormix.dart';
import 'package:vector_math/vector_math.dart';

void main() {
  test('RYB2RGB.ryb2rgb(ryb) interpolates RYB red to RGB red', () {
    var ryb_red = Vector3(255.0, 0.0, 0.0);
    expect(RYB2RGB.ryb2rgb(ryb_red), equals(Vector3(255.0, 0.0, 0.0)));
  });
  test('RYB2RGB.ryb2rgb(ryb) interpolates RYB blue to RGB blue', () {
    var ryb_red = Vector3(0.0, 0.0, 255.0);
    expect(RYB2RGB.ryb2rgb(ryb_red), equals(Vector3(42.0, 95.0, 153.0)));
  });
  test('RYB2RGB.ryb2rgb(ryb) interpolates RYB yellow to RGB yellow', () {
    var ryb_red = Vector3(0.0, 255.0, 0.0);
    expect(RYB2RGB.ryb2rgb(ryb_red), equals(Vector3(255.0, 255.0, 0.0)));
  });
}
