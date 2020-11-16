import 'dart:math';

import 'package:vector_math/vector_math.dart';

class ColorMixer {
  Vector3 _total;

  ColorMixer() {
    _total = Vector3.zero();
  }

  Vector3 mix(Vector3 ryb) {
    _total.add(ryb);
    double t = max(_total.r, max(_total.y, _total.b));
    if (t >= 255.0) {
      t = 255.0 / t;
    } else {
      t = 1.0;
    }
    Vector3 clone = _total.clone();
    clone.scale(t);
    return clone;
  }

  void reset() {
    _total = Vector3.zero();
  }

  Vector3 mixResult() {
    return _total;
  }
}
