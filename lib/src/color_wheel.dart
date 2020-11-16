import 'dart:html';
import 'dart:math';

import 'package:colormix/colormix.dart';
import 'package:vector_math/vector_math.dart';

class ColorWheel {
  static double SEGMENT_ANGLE = 60.0;
  Rectangle _containingRect;

  void create(CanvasElement canvas) {
    CanvasRenderingContext2D context = canvas.getContext('2d');
    _containingRect = context.canvas.getBoundingClientRect();
    _fillColorWheel(canvas, context);
  }

  void _fillColorWheel(CanvasElement canvas, CanvasRenderingContext2D context) {
    double x = canvas.width / 2;
    double y = canvas.height / 2;
    double radius = canvas.width / 2.0;

    for (double angle = 0.0; angle < 360.0; angle += SEGMENT_ANGLE) {
      double startAngle = (angle) * pi / 180.0;
      double endAngle = (angle + SEGMENT_ANGLE) * pi / 180.0;
      context.beginPath();
      context.moveTo(x, y);
      context.arc(x, y, radius, startAngle, endAngle, false);
      context.closePath();
      Vector3 rgbColor =
          RYB2RGB.ryb2rgb(HSL2RYB.hslToRyb(angle / 360.0, 1.0, 0.5));
      context.fillStyle = ColorMixHelper.toRGBString(rgbColor);
      context.fill();
    }
  }

  Vector3 getSelectedColor(MouseEvent e) {
    double x = (e.client.x -
        (_containingRect.left).round() -
        _containingRect.width / 2.0);
    double y = (e.client.y -
        (_containingRect.top).round() -
        _containingRect.height / 2.0);

    // get angle of clicked segment
    double angle = atan2(y, x) * radians2Degrees;
    if (angle < 0) {
      angle += 360;
    }

    // use start angle of segment
    angle = (angle / SEGMENT_ANGLE).floor() * SEGMENT_ANGLE;

    // calculate rgb value of clicked segment
    return HSL2RYB.hslToRyb(angle / 360.0, 1.0, 0.5);
  }

  void setNumberOfColors(int numColors) {
    SEGMENT_ANGLE = (360.0 / numColors).roundToDouble();
  }
}
