import 'package:vector_math/vector_math.dart';

class HSL2RYB {
  /// Converts an HSL color value to RGB. Conversion formula
  /// adapted from http://en.wikipedia.org/wiki/HSL_color_space.
  /// Assumes h, s, and l are contained in the set [0, 1] and
  /// returns r, g, and b in the set [0, 255].
  ///
  /// @param   Number  h       The hue
  /// @param   Number  s       The saturation
  /// @param   Number  l       The lightness
  /// @return  Array           The RGB representation
  static Vector3 hslToRyb(h, s, l) {
    double r, g, b;

    if (s == 0.0) {
      r = g = b = l; // achromatic
    } else {
      double q = l < 0.5 ? l * (1.0 + s) : l + s - l * s;
      var p = 2.0 * l - q;
      r = _hue2ryb(p, q, h + 1.0 / 3.0);
      g = _hue2ryb(p, q, h);
      b = _hue2ryb(p, q, h - 1.0 / 3.0);
    }
    var result = Vector3(r, g, b);
    result.scale(255.0);
    return result;
  }

  static double _hue2ryb(double p, double q, double t) {
    if (t < 0.0) t += 1;
    if (t > 1.0) t -= 1;
    if (t < 1.0 / 6.0) return p + (q - p) * 6.0 * t;
    if (t < 1.0 / 2.0) return q;
    if (t < 2.0 / 3.0) return p + (q - p) * (2.0 / 3.0 - t) * 6.0;
    return p;
  }
}
