import 'package:vector_math/vector_math.dart';

class ColorMixHelper {
  static Vector3 WHITE = Vector3(255.0, 255.0, 255.0);

  /// Return a string representation (integer numbers) of the RGB color
  /// which can be used as background color for a html element
  static String toRGBString(Vector3 color) {
    return 'rgb(' +
        color[0].round().toString() +
        ',' +
        color[1].round().toString() +
        ',' +
        color[2].round().toString() +
        ')';
  }
}
