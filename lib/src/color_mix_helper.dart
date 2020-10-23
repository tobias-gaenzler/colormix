import 'package:vector_math/vector_math.dart';

class ColorMixHelper {
  static Vector3 WHITE = Vector3(255.0, 255.0, 255.0);

  /// Return a string representation (integer numbers) of the RGB color
  /// which can be used as background color for a canvas (html)
  static String toRGBString(Vector3 color) {
    return 'rgb(' +
        color.r.round().toString() +
        ',' +
        color.y.round().toString() +
        ',' +
        color.b.round().toString() +
        ')';
  }

  static Vector3 roundToDouble(Vector3 vector) {
    vector.x = vector.x.roundToDouble();
    vector.y = vector.y.roundToDouble();
    vector.z = vector.z.roundToDouble();
    return vector;
  }
}
