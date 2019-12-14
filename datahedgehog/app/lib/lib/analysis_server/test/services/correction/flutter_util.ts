/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/correction/flutter_util.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export class properties {
    private static __$flutterPkgLibPath : string;
    static get flutterPkgLibPath() : string { 
        if (this.__$flutterPkgLibPath===undefined) {
            this.__$flutterPkgLibPath = '/packages/flutter/lib';
        }
        return this.__$flutterPkgLibPath;
    }
    static set flutterPkgLibPath(__$value : string)  { 
        this.__$flutterPkgLibPath = __$value;
    }

    static get flutter_framework_code() : string {
        return 'class Widget {}\nclass RenderObjectWidget extends Widget {}\nclass StatelessWidget extends Widget {}\nabstract class StatefulWidget extends Widget { }\nclass SingleChildRenderObjectWidget extends RenderObjectWidget {}\nclass Transform extends SingleChildRenderObjectWidget {}\nclass ClipRect extends SingleChildRenderObjectWidget { ClipRect.rect(){} }\nclass AspectRatio extends SingleChildRenderObjectWidget {}\nclass Container extends StatelessWidget { Container({child: null, width: null, height: null}){}}\nclass Center extends StatelessWidget { Center({child: null, key: null}){}}\nclass DefaultTextStyle extends StatelessWidget { DefaultTextStyle({child: null}){}}\nclass Row extends Widget { Row({List<Widget> children: null, key: null}){}}\nclass GestureDetector extends SingleChildRenderObjectWidget { GestureDetector({child: null, onTap: null}){}}\nclass AppBar extends StatefulWidget implements PreferredSizeWidget { AppBar(title: null, color: null, key: null) }\nclass Scaffold extends Widget { Scaffold({body: null, PreferredSizeWidget appBar: null}){}}\nclass PreferredSizeWidget implements Widget {}\n';
    }
}
