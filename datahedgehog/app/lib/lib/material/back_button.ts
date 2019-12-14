/** Library asset:datahedgehog_monitor/lib/lib/material/back_button.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib6 from "./icons";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/widgets/icon_data";
import * as lib8 from "./theme";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/icon";
import * as lib10 from "./material_localizations";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/navigator";
import * as lib12 from "./icon_button";

export namespace BackButtonIcon {
    export type Constructors = lib3.StatelessWidget.Constructors | 'BackButtonIcon';
    export type Interface = Omit<BackButtonIcon, Constructors>;
}
@DartClass
export class BackButtonIcon extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BackButtonIcon(_namedArguments? : {key? : lib4.Key}) {
        let {key} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
    }
    static _getIconData(platform : lib5.TargetPlatform) : lib7.IconData {
        switch (platform) {
            case lib5.TargetPlatform.android:
            case lib5.TargetPlatform.fuchsia:
                return lib6.Icons.arrow_back;
            case lib5.TargetPlatform.iOS:
                return lib6.Icons.arrow_back_ios;
        }
        /* TODO (AssertStatementImpl) : assert (false); */;
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib9.Icon(BackButtonIcon._getIconData(lib8.Theme.of(context).platform));
    }
}

export namespace BackButton {
    export type Constructors = lib3.StatelessWidget.Constructors | 'BackButton';
    export type Interface = Omit<BackButton, Constructors>;
}
@DartClass
export class BackButton extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,color? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BackButton(_namedArguments? : {key? : lib4.Key,color? : any}) {
        let {key,color} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.color = color;
    }
    color : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        return lib12.IconButton({
            icon : new BackButtonIcon(),color : this.color,tooltip : lib10.MaterialLocalizations.of(context).backButtonTooltip,onPressed : () =>  {
                lib11.Navigator.maybePop(context);
            }});
    }
}

export namespace CloseButton {
    export type Constructors = lib3.StatelessWidget.Constructors | 'CloseButton';
    export type Interface = Omit<CloseButton, Constructors>;
}
@DartClass
export class CloseButton extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CloseButton(_namedArguments? : {key? : lib4.Key}) {
        let {key} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        return lib12.IconButton({
            icon : new lib9.Icon(lib6.Icons.close),tooltip : lib10.MaterialLocalizations.of(context).closeButtonTooltip,onPressed : () =>  {
                lib11.Navigator.maybePop(context);
            }});
    }
}

export class properties {
}
