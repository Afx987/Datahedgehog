import 'package:flutter/material.dart';

class HexColor extends Color {
  static Map<String, HexColor> cachedColors = {
    "transparent": HexColor(null),
  };

  static int _getColorFromHex(String hexColor) {
    if (hexColor == null) {
      return 0x00FFFFFF;
    }

    switch (hexColor) {
      case "white":
        return 0xFFFFFFFF;
        break;
      case "red":
        return 0xFFFF0000;
        break;
      default:
    }

    hexColor = hexColor.toUpperCase().replaceAll("#", "");

    if (hexColor.length == 6) {
      hexColor = "FF" + hexColor;
    } else {
      return 0x00FFFFFF;
    }

    return int.parse(hexColor, radix: 16);
  }

  HexColor(final String hexColor) : super(_getColorFromHex(hexColor));

  static HexColor create(String hex) {
    if (hex == null || hex.length < 1) {
      return HexColor.cachedColors["transparent"];
    }

    if (HexColor.cachedColors.containsKey(hex)) {
      return HexColor.cachedColors[hex];
    }

    HexColor c = HexColor(hex);

    HexColor.cachedColors[hex] = c;
    return c;
  }
}
