/** Library asset:datahedgehog_monitor/lib/lib/material/dialog.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/border_radius";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/rounded_rectangle_border";
import * as lib9 from "./dialog_theme";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib13 from "./theme";
import * as lib14 from "./material";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/implicit_animations";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib18 from "./theme_data";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib21 from "./material_localizations";
import * as lib22 from "./button_bar";
import * as lib23 from "./button_theme";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib25 from "./ink_well";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/widgets/single_child_scroll_view";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib29 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as lib30 from "@dart2ts.packages/flutter/lib/src/widgets/safe_area";
import * as lib31 from "./colors";
import * as lib32 from "@dart2ts.packages/flutter/lib/src/widgets/routes";

export var _buildMaterialDialogTransitions : (context : lib3.BuildContext,animation : lib27.Animation<double>,secondaryAnimation : lib27.Animation<double>,child : lib3.Widget) => lib3.Widget = (context : lib3.BuildContext,animation : lib27.Animation<double>,secondaryAnimation : lib27.Animation<double>,child : lib3.Widget) : lib3.Widget =>  {
    return lib29.FadeTransition({
        opacity : lib28.CurvedAnimation({
            parent : animation,curve : lib5.Curves.easeOut}),child : child});
};
export var showDialog : <T>(_namedArguments? : {context? : lib3.BuildContext,barrierDismissible? : boolean,child? : lib3.Widget,builder? : (context : lib3.BuildContext) => lib3.Widget}) => async.Future<T> = <T>(_namedArguments? : {context? : lib3.BuildContext,barrierDismissible? : boolean,child? : lib3.Widget,builder? : (context : lib3.BuildContext) => lib3.Widget}) : async.Future<T> =>  {
    let {context,barrierDismissible,child,builder} = Object.assign({
        "barrierDismissible" : true}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (child == null || builder == null); */;
    /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
    return lib32.showGeneralDialog({
        context : context,pageBuilder : (buildContext : lib3.BuildContext,animation : lib27.Animation<double>,secondaryAnimation : lib27.Animation<double>) =>  {
            let theme : lib18.ThemeData = lib13.Theme.of(context,{
                shadowThemeOnly : true});
            let pageChild : lib3.Widget = (child || lib15.Builder({
                builder : builder}));
            return lib30.SafeArea({
                child : lib15.Builder({
                    builder : (context : lib3.BuildContext) =>  {
                        return theme != null ? lib13.Theme({
                            data : theme,child : pageChild}) : pageChild;
                    }})});
        },barrierDismissible : barrierDismissible,barrierLabel : lib21.MaterialLocalizations.of(context).modalBarrierDismissLabel,barrierColor : lib31.Colors.black54,transitionDuration : new core.DartDuration({
            milliseconds : 150}),transitionBuilder : _buildMaterialDialogTransitions});
};
export namespace Dialog {
    export type Constructors = lib3.StatelessWidget.Constructors | 'Dialog';
    export type Interface = Omit<Dialog, Constructors>;
}
@DartClass
export class Dialog extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,backgroundColor? : any,elevation? : double,insetAnimationDuration? : core.DartDuration,insetAnimationCurve? : lib5.Curve,shape? : lib6.ShapeBorder,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Dialog(_namedArguments? : {key? : lib4.Key,backgroundColor? : any,elevation? : double,insetAnimationDuration? : core.DartDuration,insetAnimationCurve? : lib5.Curve,shape? : lib6.ShapeBorder,child? : lib3.Widget}) {
        let {key,backgroundColor,elevation,insetAnimationDuration,insetAnimationCurve,shape,child} = Object.assign({
            "insetAnimationDuration" : new core.DartDuration({
                milliseconds : 100}),
            "insetAnimationCurve" : lib5.Curves.decelerate}, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.backgroundColor = backgroundColor;
        this.elevation = elevation;
        this.insetAnimationDuration = insetAnimationDuration;
        this.insetAnimationCurve = insetAnimationCurve;
        this.shape = shape;
        this.child = child;
    }
    backgroundColor : any;

    elevation : double;

    insetAnimationDuration : core.DartDuration;

    insetAnimationCurve : lib5.Curve;

    shape : lib6.ShapeBorder;

    child : lib3.Widget;

    private static __$_defaultDialogShape : lib8.RoundedRectangleBorder;
    static get _defaultDialogShape() : lib8.RoundedRectangleBorder { 
        if (this.__$_defaultDialogShape===undefined) {
            this.__$_defaultDialogShape = lib8.RoundedRectangleBorder({
                borderRadius : lib7.BorderRadius.all(Radius.circular(2.0))});
        }
        return this.__$_defaultDialogShape;
    }

    private static __$_defaultElevation : double;
    static get _defaultElevation() : double { 
        if (this.__$_defaultElevation===undefined) {
            this.__$_defaultElevation = 24.0;
        }
        return this.__$_defaultElevation;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let dialogTheme : lib9.DialogTheme = lib9.DialogTheme.of(context);
        return lib16.AnimatedPadding({
            padding : op(Op.PLUS,lib10.MediaQuery.of(context).viewInsets,new lib11.EdgeInsets.symmetric({
                horizontal : 40.0,vertical : 24.0})),duration : this.insetAnimationDuration,curve : this.insetAnimationCurve,child : lib10.MediaQuery.removeViewInsets({
                removeLeft : true,removeTop : true,removeRight : true,removeBottom : true,context : context,child : lib15.Center({
                    child : lib15.ConstrainedBox({
                        constraints : new lib12.BoxConstraints({
                            minWidth : 280.0}),child : lib14.Material({
                            color : ((this.backgroundColor || dialogTheme.backgroundColor) || lib13.Theme.of(context).dialogBackgroundColor),elevation : ((this.elevation || dialogTheme.elevation) || Dialog._defaultElevation),shape : ((this.shape || dialogTheme.shape) || Dialog._defaultDialogShape),type : lib14.MaterialType.card,child : this.child})})})})});
    }
}

export namespace AlertDialog {
    export type Constructors = lib3.StatelessWidget.Constructors | 'AlertDialog';
    export type Interface = Omit<AlertDialog, Constructors>;
}
@DartClass
export class AlertDialog extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,title? : lib3.Widget,titlePadding? : lib11.EdgeInsetsGeometry,titleTextStyle? : lib17.TextStyle,content? : lib3.Widget,contentPadding? : lib11.EdgeInsetsGeometry,contentTextStyle? : lib17.TextStyle,actions? : core.DartList<lib3.Widget>,backgroundColor? : any,elevation? : double,semanticLabel? : string,shape? : lib6.ShapeBorder}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AlertDialog(_namedArguments? : {key? : lib4.Key,title? : lib3.Widget,titlePadding? : lib11.EdgeInsetsGeometry,titleTextStyle? : lib17.TextStyle,content? : lib3.Widget,contentPadding? : lib11.EdgeInsetsGeometry,contentTextStyle? : lib17.TextStyle,actions? : core.DartList<lib3.Widget>,backgroundColor? : any,elevation? : double,semanticLabel? : string,shape? : lib6.ShapeBorder}) {
        let {key,title,titlePadding,titleTextStyle,content,contentPadding,contentTextStyle,actions,backgroundColor,elevation,semanticLabel,shape} = Object.assign({
            "contentPadding" : new lib11.EdgeInsets.fromLTRB(24.0,20.0,24.0,24.0)}, _namedArguments );
        this.assert = assert;
        this.title = title;
        this.titlePadding = titlePadding;
        this.titleTextStyle = titleTextStyle;
        this.content = content;
        this.contentPadding = contentPadding;
        this.contentTextStyle = contentTextStyle;
        this.actions = actions;
        this.backgroundColor = backgroundColor;
        this.elevation = elevation;
        this.semanticLabel = semanticLabel;
        this.shape = shape;
    }
     : any;

     : any;

     : any;

    title : lib3.Widget;

    titlePadding : lib11.EdgeInsetsGeometry;

    titleTextStyle : lib17.TextStyle;

    content : lib3.Widget;

    contentPadding : lib11.EdgeInsetsGeometry;

    contentTextStyle : lib17.TextStyle;

    actions : core.DartList<lib3.Widget>;

    backgroundColor : any;

    elevation : double;

    semanticLabel : string;

    shape : lib6.ShapeBorder;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        let theme : lib18.ThemeData = lib13.Theme.of(context);
        let dialogTheme : lib9.DialogTheme = lib9.DialogTheme.of(context);
        let children : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>();
        let label : string = this.semanticLabel;
        if (this.title != null) {
            children.add(lib15.Padding({
                padding : (this.titlePadding || lib11.EdgeInsets.fromLTRB(24.0,24.0,24.0,op(Op.EQUALS,this.content,null) ? 20.0 : 0.0)),child : lib19.DefaultTextStyle({
                    style : ((this.titleTextStyle || dialogTheme.titleTextStyle) || theme.textTheme.title),child : lib15.Semantics({
                        child : this.title,namesRoute : true,container : true})})}));
        }else {
            switch (lib20.properties.defaultTargetPlatform) {
                case lib20.TargetPlatform.iOS:
                    label = this.semanticLabel;
                    break;
                case lib20.TargetPlatform.android:
                case lib20.TargetPlatform.fuchsia:
                    label = (this.semanticLabel || ((t)=>(!!t)?t.alertDialogLabel:null)(lib21.MaterialLocalizations.of(context)));
            }
        }
        if (this.content != null) {
            children.add(lib15.Flexible({
                child : lib15.Padding({
                    padding : this.contentPadding,child : lib19.DefaultTextStyle({
                        style : ((this.contentTextStyle || dialogTheme.contentTextStyle) || theme.textTheme.subhead),child : this.content})})}));
        }
        if (this.actions != null) {
            children.add(lib23.ButtonTheme.bar({
                child : lib22.ButtonBar({
                    children : this.actions})}));
        }
        let dialogChild : lib3.Widget = lib15.IntrinsicWidth({
            child : lib15.Column({
                mainAxisSize : lib24.MainAxisSize.min,crossAxisAlignment : lib24.CrossAxisAlignment.stretch,children : children})});
        if (label != null) dialogChild = lib15.Semantics({
            namesRoute : true,label : label,child : dialogChild});
        return Dialog({
            backgroundColor : this.backgroundColor,elevation : this.elevation,shape : this.shape,child : dialogChild});
    }
}

export namespace SimpleDialogOption {
    export type Constructors = lib3.StatelessWidget.Constructors | 'SimpleDialogOption';
    export type Interface = Omit<SimpleDialogOption, Constructors>;
}
@DartClass
export class SimpleDialogOption extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,onPressed? : any,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SimpleDialogOption(_namedArguments? : {key? : lib4.Key,onPressed? : any,child? : lib3.Widget}) {
        let {key,onPressed,child} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.onPressed = onPressed;
        this.child = child;
    }
    onPressed : any;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib25.InkWell({
            onTap : this.onPressed,child : lib15.Padding({
                padding : new lib11.EdgeInsets.symmetric({
                    vertical : 8.0,horizontal : 24.0}),child : this.child})});
    }
}

export namespace SimpleDialog {
    export type Constructors = lib3.StatelessWidget.Constructors | 'SimpleDialog';
    export type Interface = Omit<SimpleDialog, Constructors>;
}
@DartClass
export class SimpleDialog extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,title? : lib3.Widget,titlePadding? : lib11.EdgeInsetsGeometry,children? : core.DartList<lib3.Widget>,contentPadding? : lib11.EdgeInsetsGeometry,backgroundColor? : any,elevation? : double,semanticLabel? : string,shape? : lib6.ShapeBorder}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SimpleDialog(_namedArguments? : {key? : lib4.Key,title? : lib3.Widget,titlePadding? : lib11.EdgeInsetsGeometry,children? : core.DartList<lib3.Widget>,contentPadding? : lib11.EdgeInsetsGeometry,backgroundColor? : any,elevation? : double,semanticLabel? : string,shape? : lib6.ShapeBorder}) {
        let {key,title,titlePadding,children,contentPadding,backgroundColor,elevation,semanticLabel,shape} = Object.assign({
            "titlePadding" : new lib11.EdgeInsets.fromLTRB(24.0,24.0,24.0,0.0),
            "contentPadding" : new lib11.EdgeInsets.fromLTRB(0.0,12.0,0.0,16.0)}, _namedArguments );
        this.assert = assert;
        this.title = title;
        this.titlePadding = titlePadding;
        this.children = children;
        this.contentPadding = contentPadding;
        this.backgroundColor = backgroundColor;
        this.elevation = elevation;
        this.semanticLabel = semanticLabel;
        this.shape = shape;
    }
     : any;

     : any;

     : any;

     : any;

    title : lib3.Widget;

    titlePadding : lib11.EdgeInsetsGeometry;

    children : core.DartList<lib3.Widget>;

    contentPadding : lib11.EdgeInsetsGeometry;

    backgroundColor : any;

    elevation : double;

    semanticLabel : string;

    shape : lib6.ShapeBorder;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        let body : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>();
        let label : string = this.semanticLabel;
        if (this.title != null) {
            body.add(lib15.Padding({
                padding : this.titlePadding,child : lib19.DefaultTextStyle({
                    style : lib13.Theme.of(context).textTheme.title,child : lib15.Semantics({
                        namesRoute : true,child : this.title})})}));
        }else {
            switch (lib20.properties.defaultTargetPlatform) {
                case lib20.TargetPlatform.iOS:
                    label = this.semanticLabel;
                    break;
                case lib20.TargetPlatform.android:
                case lib20.TargetPlatform.fuchsia:
                    label = (this.semanticLabel || ((t)=>(!!t)?t.dialogLabel:null)(lib21.MaterialLocalizations.of(context)));
            }
        }
        if (this.children != null) {
            body.add(lib15.Flexible({
                child : lib26.SingleChildScrollView({
                    padding : this.contentPadding,child : lib15.ListBody({
                        children : this.children})})}));
        }
        let dialogChild : lib3.Widget = lib15.IntrinsicWidth({
            stepWidth : 56.0,child : lib15.ConstrainedBox({
                constraints : new lib12.BoxConstraints({
                    minWidth : 280.0}),child : lib15.Column({
                    mainAxisSize : lib24.MainAxisSize.min,crossAxisAlignment : lib24.CrossAxisAlignment.stretch,children : body})})});
        if (label != null) dialogChild = lib15.Semantics({
            namesRoute : true,label : label,child : dialogChild});
        return Dialog({
            backgroundColor : this.backgroundColor,elevation : this.elevation,shape : this.shape,child : dialogChild});
    }
}

export class properties {
}
