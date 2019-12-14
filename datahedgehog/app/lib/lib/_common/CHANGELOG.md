## 1.0.0+7

* Nothing Update


## 1.0.0

```dart
import 'package:common/hashid.dart';
import 'package:common/util.dart';


HashIds hashids = HashIds(salt: "secret")
String output = hashids.encode(123);
```


```dart
bool isInDebugMode = Util().isInDebugMode;
```


```dart
Color c = HexColor.create("#ff0000");
```