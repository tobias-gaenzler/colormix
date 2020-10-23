import 'package:vector_math/vector_math.dart';

class ColorMixHelper {
  static Vector3 WHITE = Vector3(255.0, 255.0, 255.0);

  /// Return a string representation (integer numbers) of the RGB color
  /// which can be used as background color for a canvas (html)
  static String toRGBString(Vector3 color) {
    return 'rgb(' +
        color[0].round().toString() +
        ',' +
        color[1].round().toString() +
        ',' +
        color[2].round().toString() +
        ')';
  }

  /// Convenience method which round each value of a vector
  /// Uses roundToDouble since Vector3 does not accept integers
  static Vector3 roundToDouble(Vector3 vector) {
    vector[0] = vector[0].roundToDouble();
    vector[1] = vector[1].roundToDouble();
    vector[2] = vector[2].roundToDouble();
    return vector;
  }
}
