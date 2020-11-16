import 'package:vector_math/vector_math.dart';

class HSL2RYB {
  /// Converts an HSL color value to RGB. Conversion formula
  /// adapted from http://en.wikipedia.org/wiki/HSL_color_space.
  /// Assumes h, s, and l are contained in the interval [0, 1] and
  /// returns integers r, g, and b in the range [0, 255].
  ///
  /// @param   double  H       The hue
  /// @param   double  S       The saturation
  /// @param   double  L       The lightness
  /// @return  Vector3           The RGB representation
  static Vector3 convert(double H, double S, double L) {
    double r, g, b;

    if (S == 0.0) {
      r = g = b = L; // achromatic
    } else {
      double q = L < 0.5 ? L * (1.0 + S) : L + S - L * S;
      double p = 2.0 * L - q;
      r = _hue2RYB(p, q, H + 1.0 / 3.0);
      g = _hue2RYB(p, q, H);
      b = _hue2RYB(p, q, H - 1.0 / 3.0);
    }
    Vector3 result = Vector3(r, g, b);
    result.scale(255.0);
    return result;
  }

  static double _hue2RYB(double p, double q, double t) {
    if (t < 0.0) {
      t += 1;
    } else if (t > 1.0) {
      t -= 1;
    }

    if (t < 1.0 / 6.0) {
      return p + (q - p) * 6.0 * t;
    } else if (t < 1.0 / 2.0) {
      return q;
    } else if (t < 2.0 / 3.0) {
      return p + (q - p) * (2.0 / 3.0 - t) * 6.0;
    } else {
      return p;
    }
  }
}
