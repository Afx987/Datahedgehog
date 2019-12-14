/** Library asset:datahedgehog_monitor/lib/lib/material/stepper.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./colors";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_physics";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib9 from "./theme";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib12 from "./icons";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/icon";
import * as lib14 from "./theme_data";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/widgets/implicit_animations";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/widgets/animated_cross_fade";
import * as lib23 from "./material_localizations";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib25 from "./button_theme";
import * as lib26 from "./flat_button";
import * as lib27 from "./text_theme";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib29 from "@dart2ts.packages/flutter/lib/src/widgets/scrollable";
import * as lib30 from "./ink_well";
import * as lib31 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_view";
import * as lib32 from "./material";
import * as lib33 from "@dart2ts.packages/flutter/lib/src/widgets/animated_size";
import * as lib34 from "@dart2ts.packages/flutter/lib/src/rendering/custom_paint";

export enum StepState {
    indexed,
    editing,
    complete,
    disabled,
    error
}

export enum StepperType {
    vertical,
    horizontal
}

export namespace Step {
    export type Constructors = 'Step';
    export type Interface = Omit<Step, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class Step {
    constructor(_namedArguments? : {title? : lib5.Widget,subtitle? : lib5.Widget,content? : lib5.Widget,state? : StepState,isActive? : boolean}) {
    }
    @defaultConstructor
    Step(_namedArguments? : {title? : lib5.Widget,subtitle? : lib5.Widget,content? : lib5.Widget,state? : StepState,isActive? : boolean}) {
        let {title,subtitle,content,state,isActive} = Object.assign({
            "state" : StepState.indexed,
            "isActive" : false}, _namedArguments );
        this.assert = assert;
        this.title = title;
        this.subtitle = subtitle;
        this.content = content;
        this.state = state;
        this.isActive = isActive;
    }
     : any;

     : any;

     : any;

    title : lib5.Widget;

    subtitle : lib5.Widget;

    content : lib5.Widget;

    state : StepState;

    isActive : boolean;

}

export namespace Stepper {
    export type Constructors = lib5.StatefulWidget.Constructors | 'Stepper';
    export type Interface = Omit<Stepper, Constructors>;
}
@DartClass
export class Stepper extends lib5.StatefulWidget {
    constructor(_namedArguments? : {key? : lib6.Key,steps? : core.DartList<Step>,physics? : lib7.ScrollPhysics,type? : StepperType,currentStep? : number,onStepTapped? : <T>(value : number) => void,onStepContinue? : any,onStepCancel? : any,controlsBuilder? : (context : lib5.BuildContext,_namedArguments : {onStepContinue? : any?,onStepCancel? : any?}) => lib5.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Stepper(_namedArguments? : {key? : lib6.Key,steps? : core.DartList<Step>,physics? : lib7.ScrollPhysics,type? : StepperType,currentStep? : number,onStepTapped? : <T>(value : number) => void,onStepContinue? : any,onStepCancel? : any,controlsBuilder? : (context : lib5.BuildContext,_namedArguments : {onStepContinue? : any?,onStepCancel? : any?}) => lib5.Widget}) {
        let {key,steps,physics,type,currentStep,onStepTapped,onStepContinue,onStepCancel,controlsBuilder} = Object.assign({
            "type" : StepperType.vertical,
            "currentStep" : 0}, _namedArguments );
        this.assert = assert;
        this.steps = steps;
        this.physics = physics;
        this.type = type;
        this.currentStep = currentStep;
        this.onStepTapped = onStepTapped;
        this.onStepContinue = onStepContinue;
        this.onStepCancel = onStepCancel;
        this.controlsBuilder = controlsBuilder;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    steps : core.DartList<Step>;

    physics : lib7.ScrollPhysics;

    type : StepperType;

    currentStep : number;

    onStepTapped : <T>(value : number) => void;

    onStepContinue : any;

    onStepCancel : any;

    controlsBuilder : (context : lib5.BuildContext,_namedArguments : {onStepContinue? : any?,onStepCancel? : any?}) => lib5.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _StepperState {
        return _StepperState();
    }
}

export namespace _StepperState {
    export type Constructors = '_StepperState';
    export type Interface = Omit<_StepperState, Constructors>;
}
@DartClass
@With(any)
export class _StepperState extends any implements any.Interface {
    _keys : core.DartList<lib5.GlobalKey<any>>;

    _oldStates : core.DartMap<number,StepState>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._keys = op(Op.LT,core.DartList<E>,lib5.GlobalKey<T>);
        op(Op.GT,,.generate(widget.steps.length,(i : number) =>  {
            return lib5.GlobalKey();
        }));
        for(let i : number = 0; i < widget.steps.length; i += 1)this._oldStates.set(i,op(Op.INDEX,widget.steps,i).state);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : Stepper) : any {
        super.didUpdateWidget(oldWidget);
        /* TODO (AssertStatementImpl) : assert (widget.steps.length == oldWidget.steps.length); */;
        for(let i : number = 0; i < oldWidget.steps.length; i += 1)this._oldStates.set(i,oldWidget.steps[i].state);
    }
    _isFirst(index : number) : boolean {
        return index == 0;
    }
    _isLast(index : number) : boolean {
        return op(Op.EQUALS,op(Op.MINUS,widget.steps.length,1),index);
    }
    _isCurrent(index : number) : boolean {
        return op(Op.EQUALS,widget.currentStep,index);
    }
    _isDark() : boolean {
        return op(Op.EQUALS,lib9.Theme.of(lib8.properties.context).brightness,Brightness.dark);
    }
    _buildLine(visible : boolean) : lib5.Widget {
        return lib10.Container({
            width : visible ? 1.0 : 0.0,height : 16.0,color : lib3.Colors.grey.shade400});
    }
    _buildCircleChild(index : number,oldState : boolean) : lib5.Widget {
        let state : StepState = oldState ? this._oldStates.get(index) : op(Op.INDEX,widget.steps,index).state;
        let isDarkActive : boolean = this._isDark() && op(Op.INDEX,widget.steps,index).isActive;
        /* TODO (AssertStatementImpl) : assert (state != null); */;
        switch (state) {
            case StepState.indexed:
            case StepState.disabled:
                return lib11.Text(`${index + 1}`,{
                    style : isDarkActive ? properties._kStepStyle.copyWith({
                        color : lib3.Colors.black87}) : properties._kStepStyle});
            case StepState.editing:
                return lib13.Icon(lib12.Icons.edit,{
                    color : isDarkActive ? properties._kCircleActiveDark : properties._kCircleActiveLight,size : 18.0});
            case StepState.complete:
                return lib13.Icon(lib12.Icons.check,{
                    color : isDarkActive ? properties._kCircleActiveDark : properties._kCircleActiveLight,size : 18.0});
            case StepState.error:
                return new lib11.Text('!',{
                    style : properties._kStepStyle});
        }
        return null;
    }
    _circleColor(index : number) : any {
        let themeData : lib14.ThemeData = lib9.Theme.of(lib8.properties.context);
        if (!this._isDark()) {
            return op(Op.INDEX,widget.steps,index).isActive ? themeData.primaryColor : lib3.Colors.black38;
        }else {
            return op(Op.INDEX,widget.steps,index).isActive ? themeData.accentColor : themeData.backgroundColor;
        }
    }
    _buildCircle(index : number,oldState : boolean) : lib5.Widget {
        return lib10.Container({
            margin : new lib15.EdgeInsets.symmetric({
                vertical : 8.0}),width : properties._kStepSize,height : properties._kStepSize,child : lib20.AnimatedContainer({
                curve : lib16.Curves.fastOutSlowIn,duration : lib9.properties.kThemeAnimationDuration,decoration : lib18.BoxDecoration({
                    color : this._circleColor(index),shape : lib17.BoxShape.circle}),child : lib19.Center({
                    child : this._buildCircleChild(index,oldState && op(Op.EQUALS,op(Op.INDEX,widget.steps,index).state,StepState.error))})})});
    }
    _buildTriangle(index : number,oldState : boolean) : lib5.Widget {
        return lib10.Container({
            margin : new lib15.EdgeInsets.symmetric({
                vertical : 8.0}),width : properties._kStepSize,height : properties._kStepSize,child : lib19.Center({
                child : lib19.SizedBox({
                    width : properties._kStepSize,height : properties._kTriangleHeight,child : lib19.CustomPaint({
                        painter : _TrianglePainter({
                            color : this._isDark() ? properties._kErrorDark : properties._kErrorLight}),child : lib19.Align({
                            alignment : new lib21.Alignment(0.0,0.8),child : this._buildCircleChild(index,oldState && op(Op.INDEX,widget.steps,index).state != StepState.error)})})})})});
    }
    _buildIcon(index : number) : lib5.Widget {
        if (op(Op.INDEX,widget.steps,index).state != this._oldStates.get(index)) {
            return lib22.AnimatedCrossFade({
                firstChild : this._buildCircle(index,true),secondChild : this._buildTriangle(index,true),firstCurve : new lib16.Interval(0.0,0.6,{
                    curve : lib16.Curves.fastOutSlowIn}),secondCurve : new lib16.Interval(0.4,1.0,{
                    curve : lib16.Curves.fastOutSlowIn}),sizeCurve : lib16.Curves.fastOutSlowIn,crossFadeState : op(Op.EQUALS,op(Op.INDEX,widget.steps,index).state,StepState.error) ? lib22.CrossFadeState.showSecond : lib22.CrossFadeState.showFirst,duration : lib9.properties.kThemeAnimationDuration});
        }else {
            if (op(Op.INDEX,widget.steps,index).state != StepState.error) return this._buildCircle(index,false);else return this._buildTriangle(index,false);
        }
    }
    _buildVerticalControls() : lib5.Widget {
        if (widget.controlsBuilder != null) return widget.controlsBuilder(lib8.properties.context,{
            onStepContinue : widget.onStepContinue,onStepCancel : widget.onStepCancel});
        let cancelColor : any;
        switch (lib9.Theme.of(lib8.properties.context).brightness) {
            case Brightness.light:
                cancelColor = lib3.Colors.black54;
                break;
            case Brightness.dark:
                cancelColor = lib3.Colors.white70;
                break;
        }
        /* TODO (AssertStatementImpl) : assert (cancelColor != null); */;
        let themeData : lib14.ThemeData = lib9.Theme.of(lib8.properties.context);
        let localizations : lib23.MaterialLocalizations = lib23.MaterialLocalizations.of(lib8.properties.context);
        return lib10.Container({
            margin : new lib15.EdgeInsets.only({
                top : 16.0}),child : lib19.ConstrainedBox({
                constraints : new lib24.BoxConstraints.tightFor({
                    height : 48.0}),child : lib19.Row({
                    children : new core.DartList.literal<lib5.Widget>(lib26.FlatButton({
                        onPressed : widget.onStepContinue,color : this._isDark() ? themeData.backgroundColor : themeData.primaryColor,textColor : lib3.Colors.white,textTheme : lib25.ButtonTextTheme.normal,child : lib11.Text(localizations.continueButtonLabel)}),lib10.Container({
                        margin : new lib15.EdgeInsetsDirectional.only({
                            start : 8.0}),child : lib26.FlatButton({
                            onPressed : widget.onStepCancel,textColor : cancelColor,textTheme : lib25.ButtonTextTheme.normal,child : lib11.Text(localizations.cancelButtonLabel)})}))})})});
    }
    _titleStyle(index : number) : lib4.TextStyle {
        let themeData : lib14.ThemeData = lib9.Theme.of(lib8.properties.context);
        let textTheme : lib27.TextTheme = themeData.textTheme;
        /* TODO (AssertStatementImpl) : assert (widget.steps[index].state != null); */;
        switch (op(Op.INDEX,widget.steps,index).state) {
            case StepState.indexed:
            case StepState.editing:
            case StepState.complete:
                return textTheme.body2;
            case StepState.disabled:
                return textTheme.body2.copyWith({
                    color : this._isDark() ? properties._kDisabledDark : properties._kDisabledLight});
            case StepState.error:
                return textTheme.body2.copyWith({
                    color : this._isDark() ? properties._kErrorDark : properties._kErrorLight});
        }
        return null;
    }
    _subtitleStyle(index : number) : lib4.TextStyle {
        let themeData : lib14.ThemeData = lib9.Theme.of(lib8.properties.context);
        let textTheme : lib27.TextTheme = themeData.textTheme;
        /* TODO (AssertStatementImpl) : assert (widget.steps[index].state != null); */;
        switch (op(Op.INDEX,widget.steps,index).state) {
            case StepState.indexed:
            case StepState.editing:
            case StepState.complete:
                return textTheme.caption;
            case StepState.disabled:
                return textTheme.caption.copyWith({
                    color : this._isDark() ? properties._kDisabledDark : properties._kDisabledLight});
            case StepState.error:
                return textTheme.caption.copyWith({
                    color : this._isDark() ? properties._kErrorDark : properties._kErrorLight});
        }
        return null;
    }
    _buildHeaderText(index : number) : lib5.Widget {
        let children : core.DartList<lib5.Widget> = new core.DartList.literal<lib5.Widget>(lib20.AnimatedDefaultTextStyle({
            style : this._titleStyle(index),duration : lib9.properties.kThemeAnimationDuration,curve : lib16.Curves.fastOutSlowIn,child : op(Op.INDEX,widget.steps,index).title}));
        if (op(Op.INDEX,widget.steps,index).subtitle != null) children.add(lib10.Container({
            margin : new lib15.EdgeInsets.only({
                top : 2.0}),child : lib20.AnimatedDefaultTextStyle({
                style : this._subtitleStyle(index),duration : lib9.properties.kThemeAnimationDuration,curve : lib16.Curves.fastOutSlowIn,child : op(Op.INDEX,widget.steps,index).subtitle})}));
        return lib19.Column({
            crossAxisAlignment : lib28.CrossAxisAlignment.start,mainAxisSize : lib28.MainAxisSize.min,children : children});
    }
    _buildVerticalHeader(index : number) : lib5.Widget {
        return lib10.Container({
            margin : new lib15.EdgeInsets.symmetric({
                horizontal : 24.0}),child : lib19.Row({
                children : new core.DartList.literal<lib5.Widget>(lib19.Column({
                    children : new core.DartList.literal<lib5.Widget>(this._buildLine(!this._isFirst(index)),this._buildIcon(index),this._buildLine(!this._isLast(index)))}),lib10.Container({
                    margin : new lib15.EdgeInsetsDirectional.only({
                        start : 12.0}),child : this._buildHeaderText(index)}))})});
    }
    _buildVerticalBody(index : number) : lib5.Widget {
        return lib19.Stack({
            children : new core.DartList.literal<lib5.Widget>(lib19.PositionedDirectional({
                start : 24.0,top : 0.0,bottom : 0.0,child : lib19.SizedBox({
                    width : 24.0,child : lib19.Center({
                        child : lib19.SizedBox({
                            width : this._isLast(index) ? 0.0 : 1.0,child : lib10.Container({
                                color : lib3.Colors.grey.shade400})})})})}),lib22.AnimatedCrossFade({
                firstChild : lib10.Container({
                    height : 0.0}),secondChild : lib10.Container({
                    margin : new lib15.EdgeInsetsDirectional.only({
                        start : 60.0,end : 24.0,bottom : 24.0}),child : lib19.Column({
                        children : new core.DartList.literal<lib5.Widget>(op(Op.INDEX,widget.steps,index).content,this._buildVerticalControls())})}),firstCurve : new lib16.Interval(0.0,0.6,{
                    curve : lib16.Curves.fastOutSlowIn}),secondCurve : new lib16.Interval(0.4,1.0,{
                    curve : lib16.Curves.fastOutSlowIn}),sizeCurve : lib16.Curves.fastOutSlowIn,crossFadeState : this._isCurrent(index) ? lib22.CrossFadeState.showSecond : lib22.CrossFadeState.showFirst,duration : lib9.properties.kThemeAnimationDuration}))});
    }
    _buildVertical() : lib5.Widget {
        let children : core.DartList<lib5.Widget> = new core.DartList.literal<lib5.Widget>();
        for(let i : number = 0; i < widget.steps.length; i += 1){
            children.add(lib19.Column({
                key : this._keys[i],children : new core.DartList.literal<lib5.Widget>(lib30.InkWell({
                    onTap : op(Op.INDEX,widget.steps,i).state != StepState.disabled ? () =>  {
                        lib29.Scrollable.ensureVisible(this._keys[i].currentContext,{
                            curve : lib16.Curves.fastOutSlowIn,duration : lib9.properties.kThemeAnimationDuration});
                        if (widget.onStepTapped != null) widget.onStepTapped(i);
                    } : null,child : this._buildVerticalHeader(i)}),this._buildVerticalBody(i))}));
        }
        return lib31.ListView({
            shrinkWrap : true,physics : widget.physics,children : children});
    }
    _buildHorizontal() : lib5.Widget {
        let children : core.DartList<lib5.Widget> = new core.DartList.literal<lib5.Widget>();
        for(let i : number = 0; i < widget.steps.length; i += 1){
            children.add(lib30.InkResponse({
                onTap : op(Op.INDEX,widget.steps,i).state != StepState.disabled ? () =>  {
                    if (widget.onStepTapped != null) widget.onStepTapped(i);
                } : null,child : lib19.Row({
                    children : new core.DartList.literal<lib5.Widget>(lib10.Container({
                        height : 72.0,child : lib19.Center({
                            child : this._buildIcon(i)})}),lib10.Container({
                        margin : new lib15.EdgeInsetsDirectional.only({
                            start : 12.0}),child : this._buildHeaderText(i)}))})}));
            if (!this._isLast(i)) {
                children.add(lib19.Expanded({
                    child : lib10.Container({
                        margin : new lib15.EdgeInsets.symmetric({
                            horizontal : 8.0}),height : 1.0,color : lib3.Colors.grey.shade400})}));
            }
        }
        return lib19.Column({
            children : new core.DartList.literal<lib5.Widget>(lib32.Material({
                elevation : 2.0,child : lib10.Container({
                    margin : new lib15.EdgeInsets.symmetric({
                        horizontal : 24.0}),child : lib19.Row({
                        children : children})})}),lib19.Expanded({
                child : lib31.ListView({
                    padding : new lib15.EdgeInsets.all(24.0),children : new core.DartList.literal<lib5.Widget>(lib33.AnimatedSize({
                        curve : lib16.Curves.fastOutSlowIn,duration : lib9.properties.kThemeAnimationDuration,vsync : this,child : op(Op.INDEX,widget.steps,widget.currentStep).content}),this._buildVerticalControls())})}))});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib5.BuildContext) : lib5.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        /* TODO (AssertStatementImpl) : assert (() {if (context.ancestorWidgetOfExactType(Stepper) != null) throw FlutterError('Steppers must not be nested. The material specification advises ' 'that one should avoid embedding steppers within steppers. ' 'https://material.io/archive/guidelines/components/steppers.html#steppers-usage\n'); return true;}()); */;
        /* TODO (AssertStatementImpl) : assert (widget.type != null); */;
        switch (widget.type) {
            case StepperType.vertical:
                return this._buildVertical();
            case StepperType.horizontal:
                return this._buildHorizontal();
        }
        return null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StepperState() {
        this._oldStates = new core.DartMap.literal([
        ]);
    }
}

export namespace _TrianglePainter {
    export type Constructors = lib34.CustomPainter.Constructors | '_TrianglePainter';
    export type Interface = Omit<_TrianglePainter, Constructors>;
}
@DartClass
export class _TrianglePainter extends lib34.CustomPainter {
    constructor(_namedArguments? : {color? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TrianglePainter(_namedArguments? : {color? : any}) {
        let {color} = Object.assign({
        }, _namedArguments );
        this.color = color;
    }
    color : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(point : any) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRepaint(oldPainter : _TrianglePainter) : boolean {
        return oldPainter.color != this.color;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,size : any) : any {
        let base : double = size.width;
        let halfBase : double = op(Op.DIVIDE,size.width,2.0);
        let height : double = size.height;
        let points : core.DartList<any> = new core.DartList.literal<any>(Offset(0.0,height),Offset(base,height),Offset(halfBase,0.0));
        canvas.drawPath(((_) : any =>  {
            {
                addPolygon(points,true);
                return _;
            }
        })(Path()),((_) : any =>  {
            {
                _.color = this.color;
                return _;
            }
        })(Paint()));
    }
}

export class properties {
    private static __$_kStepStyle : lib4.TextStyle;
    static get _kStepStyle() : lib4.TextStyle { 
        if (this.__$_kStepStyle===undefined) {
            this.__$_kStepStyle = lib4.TextStyle({
                fontSize : 12.0,color : lib3.Colors.white});
        }
        return this.__$_kStepStyle;
    }
    static set _kStepStyle(__$value : lib4.TextStyle)  { 
        this.__$_kStepStyle = __$value;
    }

    private static __$_kErrorLight : any;
    static get _kErrorLight() : any { 
        if (this.__$_kErrorLight===undefined) {
            this.__$_kErrorLight = lib3.Colors.red;
        }
        return this.__$_kErrorLight;
    }
    static set _kErrorLight(__$value : any)  { 
        this.__$_kErrorLight = __$value;
    }

    private static __$_kErrorDark : any;
    static get _kErrorDark() : any { 
        if (this.__$_kErrorDark===undefined) {
            this.__$_kErrorDark = lib3.Colors.red.shade400;
        }
        return this.__$_kErrorDark;
    }
    static set _kErrorDark(__$value : any)  { 
        this.__$_kErrorDark = __$value;
    }

    private static __$_kCircleActiveLight : any;
    static get _kCircleActiveLight() : any { 
        if (this.__$_kCircleActiveLight===undefined) {
            this.__$_kCircleActiveLight = lib3.Colors.white;
        }
        return this.__$_kCircleActiveLight;
    }
    static set _kCircleActiveLight(__$value : any)  { 
        this.__$_kCircleActiveLight = __$value;
    }

    private static __$_kCircleActiveDark : any;
    static get _kCircleActiveDark() : any { 
        if (this.__$_kCircleActiveDark===undefined) {
            this.__$_kCircleActiveDark = lib3.Colors.black87;
        }
        return this.__$_kCircleActiveDark;
    }
    static set _kCircleActiveDark(__$value : any)  { 
        this.__$_kCircleActiveDark = __$value;
    }

    private static __$_kDisabledLight : any;
    static get _kDisabledLight() : any { 
        if (this.__$_kDisabledLight===undefined) {
            this.__$_kDisabledLight = lib3.Colors.black38;
        }
        return this.__$_kDisabledLight;
    }
    static set _kDisabledLight(__$value : any)  { 
        this.__$_kDisabledLight = __$value;
    }

    private static __$_kDisabledDark : any;
    static get _kDisabledDark() : any { 
        if (this.__$_kDisabledDark===undefined) {
            this.__$_kDisabledDark = lib3.Colors.white30;
        }
        return this.__$_kDisabledDark;
    }
    static set _kDisabledDark(__$value : any)  { 
        this.__$_kDisabledDark = __$value;
    }

    private static __$_kStepSize : double;
    static get _kStepSize() : double { 
        if (this.__$_kStepSize===undefined) {
            this.__$_kStepSize = 24.0;
        }
        return this.__$_kStepSize;
    }
    static set _kStepSize(__$value : double)  { 
        this.__$_kStepSize = __$value;
    }

    private static __$_kTriangleHeight : double;
    static get _kTriangleHeight() : double { 
        if (this.__$_kTriangleHeight===undefined) {
            this.__$_kTriangleHeight = properties._kStepSize * 0.866025;
        }
        return this.__$_kTriangleHeight;
    }
    static set _kTriangleHeight(__$value : double)  { 
        this.__$_kTriangleHeight = __$value;
    }

}
