import 'package:vector_math/vector_math.dart';

/// Convert colors from RedYellowBlue (RYB) color space to RedGreenBlue (RGB) color space.
/// See also https://en.wikipedia.org/wiki/Subtractive_color#RYB
class RYB2RGB {
  static final Vector3 _white = Vector3(1.0, 1.0, 1.0);
  static final Vector3 _red = Vector3(1.0, 0.0, 0.0);
  static final Vector3 _yellow = Vector3(1.0, 1.0, 0.0);
  static final Vector3 _blue = Vector3(0.163, 0.373, 0.6);
  static final Vector3 _violet = Vector3(0.5, 0.0, 0.5);
  static final Vector3 _green = Vector3(0.0, 0.66, 0.2);
  static final Vector3 _orange = Vector3(1.0, 0.5, 0.0);
  static final Vector3 _black = Vector3(0.2, 0.094, 0.0);

  ///
  static Vector3 ryb2rgb(Vector3 ryb) {
    var rgb = ryb.clone();
    rgb.scale(1.0 / 255.0);
    var result = Vector3.zero();
    var r = rgb.r;
    var y = rgb.y;
    var b = rgb.b;

    for (var i = 0; i <= 2; i = ++i) {
      result[i] = (_white[i] * (1.0 - r) * (1.0 - b) * (1.0 - y) +
          _red[i] * r * (1.0 - b) * (1 - y) +
          _blue[i] * (1.0 - r) * b * (1.0 - y) +
          _violet[i] * r * b * (1.0 - y) +
          _yellow[i] * (1.0 - r) * (1.0 - b) * y +
          _orange[i] * r * (1.0 - b) * y +
          _green[i] * (1.0 - r) * b * y +
          _black[i] * r * b * y);
    }
    result.scale(255.0);
    result.round();
    return result;
  }
}
