/** Library asset:datahedgehog_monitor/lib/lib/material/time_picker.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";
import * as lib4 from "./text_theme";
import * as lib5 from "./time";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib9 from "./material_localizations";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib11 from "./feedback";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/gesture_detector";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/rendering/custom_layout";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib18 from "./theme";
import * as lib19 from "./theme_data";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib21 from "./colors";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/painting/text_painter";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/rendering/custom_paint";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/semantics/semantics";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib29 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib30 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib31 from "@dart2ts.packages/flutter/lib/src/gestures/drag_details";
import * as lib32 from "@dart2ts.packages/flutter/lib/src/gestures/tap";
import * as lib33 from "@dart2ts.packages/flutter/lib/src/painting/text_span";
import * as lib34 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib35 from "@dart2ts.packages/flutter/lib/src/services/haptic_feedback";
import * as lib36 from "@dart2ts.packages/flutter/lib/src/widgets/navigator";
import * as lib37 from "./flat_button";
import * as lib38 from "./button_bar";
import * as lib39 from "./button_theme";
import * as lib40 from "@dart2ts.packages/flutter/lib/src/widgets/orientation_builder";
import * as lib41 from "./dialog";
import * as lib42 from "@dart2ts.packages/flutter/lib/src/semantics/semantics_service";

export var showTimePicker : (_namedArguments? : {context? : lib8.BuildContext,initialTime? : lib5.TimeOfDay,builder? : (context : lib8.BuildContext,child : lib8.Widget) => lib8.Widget}) => async.Future<lib5.TimeOfDay> = (_namedArguments? : {context? : lib8.BuildContext,initialTime? : lib5.TimeOfDay,builder? : (context : lib8.BuildContext,child : lib8.Widget) => lib8.Widget}) => new async.Future.fromPromise(( async () : Promise<lib5.TimeOfDay> =>  {
    let {context,initialTime,builder} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (context != null); */;
    /* TODO (AssertStatementImpl) : assert (initialTime != null); */;
    /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
    let dialog : lib8.Widget = _TimePickerDialog({
        initialTime : initialTime});
    return await lib41.showDialog({
        context : context,builder : (context : lib8.BuildContext) =>  {
            return op(Op.EQUALS,builder,null) ? dialog : builder(context,dialog);
        }});
})());
export var _buildHeaderFormat : (timeOfDayFormat : lib5.TimeOfDayFormat,context : _TimePickerFragmentContext) => _TimePickerHeaderFormat = (timeOfDayFormat : lib5.TimeOfDayFormat,context : _TimePickerFragmentContext) : _TimePickerHeaderFormat =>  {
    var hour : () => _TimePickerHeaderFragment = () : _TimePickerHeaderFragment =>  {
        return _TimePickerHeaderFragment({
            layoutId : _TimePickerHeaderId.hour,widget : _HourControl({
                fragmentContext : context}),startMargin : properties._kPeriodGap});
    };
    var minute : () => _TimePickerHeaderFragment = () : _TimePickerHeaderFragment =>  {
        return _TimePickerHeaderFragment({
            layoutId : _TimePickerHeaderId.minute,widget : _MinuteControl({
                fragmentContext : context})});
    };
    var string : (layoutId : _TimePickerHeaderId,value : string) => _TimePickerHeaderFragment = (layoutId : _TimePickerHeaderId,value : string) : _TimePickerHeaderFragment =>  {
        return _TimePickerHeaderFragment({
            layoutId : layoutId,widget : _StringFragment({
                fragmentContext : context,value : value})});
    };
    var dayPeriod : () => _TimePickerHeaderFragment = () : _TimePickerHeaderFragment =>  {
        return _TimePickerHeaderFragment({
            layoutId : _TimePickerHeaderId.period,widget : _DayPeriodControl({
                fragmentContext : context}),startMargin : properties._kPeriodGap});
    };
    var format : (piece1 : _TimePickerHeaderPiece,piece2? : _TimePickerHeaderPiece) => _TimePickerHeaderFormat = (piece1 : _TimePickerHeaderPiece,piece2? : _TimePickerHeaderPiece) : _TimePickerHeaderFormat =>  {
        let pieces : core.DartList<_TimePickerHeaderPiece> = new core.DartList.literal<_TimePickerHeaderPiece>();
        switch (context.textDirection) {
            case TextDirection.ltr:
                pieces.add(piece1);
                if (piece2 != null) pieces.add(piece2);
                break;
            case TextDirection.rtl:
                if (piece2 != null) pieces.add(piece2);
                pieces.add(piece1);
                break;
        }
        let centrepieceIndex : number;
        for(let i : number = 0; i < pieces.length; i += 1){
            if (pieces[i].pivotIndex >= 0) {
                centrepieceIndex = i;
            }
        }
        /* TODO (AssertStatementImpl) : assert (centrepieceIndex != null); */;
        return _TimePickerHeaderFormat(centrepieceIndex,pieces);
    };
    var piece : (_namedArguments? : {pivotIndex? : number,bottomMargin? : double,fragment1? : _TimePickerHeaderFragment,fragment2? : _TimePickerHeaderFragment,fragment3? : _TimePickerHeaderFragment}) => _TimePickerHeaderPiece = (_namedArguments? : {pivotIndex? : number,bottomMargin? : double,fragment1? : _TimePickerHeaderFragment,fragment2? : _TimePickerHeaderFragment,fragment3? : _TimePickerHeaderFragment}) : _TimePickerHeaderPiece =>  {
        let {pivotIndex,bottomMargin,fragment1,fragment2,fragment3} = Object.assign({
            "pivotIndex" : -1,
            "bottomMargin" : 0.0}, _namedArguments );
        let fragments : core.DartList<_TimePickerHeaderFragment> = new core.DartList.literal<_TimePickerHeaderFragment>(fragment1);
        if (fragment2 != null) {
            fragments.add(fragment2);
            if (fragment3 != null) fragments.add(fragment3);
        }
        return _TimePickerHeaderPiece(pivotIndex,fragments,{
            bottomMargin : bottomMargin});
    };
    switch (timeOfDayFormat) {
        case lib5.TimeOfDayFormat.h_colon_mm_space_a:
            return format(piece({
                pivotIndex : 1,fragment1 : hour(),fragment2 : string(_TimePickerHeaderId.colon,':'),fragment3 : minute()}),piece({
                bottomMargin : properties._kVerticalGap,fragment1 : dayPeriod()}));
        case lib5.TimeOfDayFormat.H_colon_mm:
            return format(piece({
                pivotIndex : 1,fragment1 : hour(),fragment2 : string(_TimePickerHeaderId.colon,':'),fragment3 : minute()}));
        case lib5.TimeOfDayFormat.HH_dot_mm:
            return format(piece({
                pivotIndex : 1,fragment1 : hour(),fragment2 : string(_TimePickerHeaderId.dot,'.'),fragment3 : minute()}));
        case lib5.TimeOfDayFormat.a_space_h_colon_mm:
            return format(piece({
                bottomMargin : properties._kVerticalGap,fragment1 : dayPeriod()}),piece({
                pivotIndex : 1,fragment1 : hour(),fragment2 : string(_TimePickerHeaderId.colon,':'),fragment3 : minute()}));
        case lib5.TimeOfDayFormat.frenchCanadian:
            return format(piece({
                pivotIndex : 1,fragment1 : hour(),fragment2 : string(_TimePickerHeaderId.hString,'h'),fragment3 : minute()}));
        case lib5.TimeOfDayFormat.HH_colon_mm:
            return format(piece({
                pivotIndex : 1,fragment1 : hour(),fragment2 : string(_TimePickerHeaderId.colon,':'),fragment3 : minute()}));
    }
    return null;
};
export var _announceToAccessibility : (context : lib8.BuildContext,message : string) => any = (context : lib8.BuildContext,message : string) : any =>  {
    lib42.SemanticsService.announce(message,lib13.Directionality.of(context));
};
export namespace _TimePickerHeaderFragment {
    export type Constructors = '_TimePickerHeaderFragment';
    export type Interface = Omit<_TimePickerHeaderFragment, Constructors>;
}
@DartClass
export class _TimePickerHeaderFragment {
    constructor(_namedArguments? : {layoutId? : _TimePickerHeaderId,widget? : lib8.Widget,startMargin? : double}) {
    }
    @defaultConstructor
    _TimePickerHeaderFragment(_namedArguments? : {layoutId? : _TimePickerHeaderId,widget? : lib8.Widget,startMargin? : double}) {
        let {layoutId,widget,startMargin} = Object.assign({
            "startMargin" : 0.0}, _namedArguments );
        this.assert = assert;
        this.layoutId = layoutId;
        this.widget = widget;
        this.startMargin = startMargin;
    }
     : any;

     : any;

     : any;

    layoutId : _TimePickerHeaderId;

    widget : lib8.Widget;

    startMargin : double;

}

export namespace _TimePickerHeaderPiece {
    export type Constructors = '_TimePickerHeaderPiece';
    export type Interface = Omit<_TimePickerHeaderPiece, Constructors>;
}
@DartClass
export class _TimePickerHeaderPiece {
    constructor(pivotIndex : number,fragments : core.DartList<_TimePickerHeaderFragment>,_namedArguments? : {bottomMargin? : double}) {
    }
    @defaultConstructor
    _TimePickerHeaderPiece(pivotIndex : number,fragments : core.DartList<_TimePickerHeaderFragment>,_namedArguments? : {bottomMargin? : double}) {
        let {bottomMargin} = Object.assign({
            "bottomMargin" : 0.0}, _namedArguments );
        this.assert = assert;
        this.pivotIndex = pivotIndex;
        this.fragments = fragments;
        this.bottomMargin = bottomMargin;
    }
     : any;

     : any;

     : any;

    pivotIndex : number;

    fragments : core.DartList<_TimePickerHeaderFragment>;

    bottomMargin : double;

}

export namespace _TimePickerHeaderFormat {
    export type Constructors = '_TimePickerHeaderFormat';
    export type Interface = Omit<_TimePickerHeaderFormat, Constructors>;
}
@DartClass
export class _TimePickerHeaderFormat {
    constructor(centrepieceIndex : number,pieces : core.DartList<_TimePickerHeaderPiece>) {
    }
    @defaultConstructor
    _TimePickerHeaderFormat(centrepieceIndex : number,pieces : core.DartList<_TimePickerHeaderPiece>) {
        this.assert = assert;
        this.centrepieceIndex = centrepieceIndex;
        this.pieces = pieces;
    }
     : any;

     : any;

    centrepieceIndex : number;

    pieces : core.DartList<_TimePickerHeaderPiece>;

}

export namespace _DayPeriodControl {
    export type Constructors = lib8.StatelessWidget.Constructors | '_DayPeriodControl';
    export type Interface = Omit<_DayPeriodControl, Constructors>;
}
@DartClass
export class _DayPeriodControl extends lib8.StatelessWidget {
    constructor(_namedArguments? : {fragmentContext? : _TimePickerFragmentContext}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DayPeriodControl(_namedArguments? : {fragmentContext? : _TimePickerFragmentContext}) {
        let {fragmentContext} = Object.assign({
        }, _namedArguments );
        this.fragmentContext = fragmentContext;
    }
    fragmentContext : _TimePickerFragmentContext;

    _togglePeriod() : any {
        let newHour : number = (this.fragmentContext.selectedTime.hour + lib5.TimeOfDay.hoursPerPeriod) % lib5.TimeOfDay.hoursPerDay;
        let newTime : lib5.TimeOfDay = this.fragmentContext.selectedTime.replacing({
            hour : newHour});
        this.fragmentContext.onTimeChange(newTime);
    }
    _setAm(context : lib8.BuildContext) : any {
        if (op(Op.EQUALS,this.fragmentContext.selectedTime.period,lib5.DayPeriod.am)) {
            return;
        }
        if (op(Op.EQUALS,this.fragmentContext.targetPlatform,lib7.TargetPlatform.android)) {
            _announceToAccessibility(context,lib9.MaterialLocalizations.of(context).anteMeridiemAbbreviation);
        }
        this._togglePeriod();
    }
    _setPm(context : lib8.BuildContext) : any {
        if (op(Op.EQUALS,this.fragmentContext.selectedTime.period,lib5.DayPeriod.pm)) {
            return;
        }
        if (op(Op.EQUALS,this.fragmentContext.targetPlatform,lib7.TargetPlatform.android)) {
            _announceToAccessibility(context,lib9.MaterialLocalizations.of(context).postMeridiemAbbreviation);
        }
        this._togglePeriod();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib8.BuildContext) : lib8.Widget {
        let materialLocalizations : lib9.MaterialLocalizations = lib9.MaterialLocalizations.of(context);
        let headerTextTheme : lib4.TextTheme = this.fragmentContext.headerTextTheme;
        let selectedTime : lib5.TimeOfDay = this.fragmentContext.selectedTime;
        let activeColor : any = this.fragmentContext.activeColor;
        let inactiveColor : any = this.fragmentContext.inactiveColor;
        let amSelected : boolean = op(Op.EQUALS,selectedTime.period,lib5.DayPeriod.am);
        let amStyle : lib6.TextStyle = headerTextTheme.subhead.copyWith({
            color : amSelected ? activeColor : inactiveColor});
        let pmStyle : lib6.TextStyle = headerTextTheme.subhead.copyWith({
            color : !amSelected ? activeColor : inactiveColor});
        return lib13.Column({
            mainAxisSize : lib10.MainAxisSize.min,children : new core.DartList.literal<lib8.Widget>(lib14.GestureDetector({
                excludeFromSemantics : true,onTap : lib11.Feedback.wrapForTap(() =>  {
                    this._setAm(context);
                },context),behavior : HitTestBehavior.opaque,child : lib13.Semantics({
                    selected : amSelected,onTap : () =>  {
                        this._setAm(context);
                    },child : lib12.Text(materialLocalizations.anteMeridiemAbbreviation,{
                        style : amStyle})})}),new lib13.SizedBox({
                width : 0.0,height : 4.0}),lib14.GestureDetector({
                excludeFromSemantics : true,onTap : lib11.Feedback.wrapForTap(() =>  {
                    this._setPm(context);
                },context),behavior : HitTestBehavior.opaque,child : lib13.Semantics({
                    selected : !amSelected,onTap : () =>  {
                        this._setPm(context);
                    },child : lib12.Text(materialLocalizations.postMeridiemAbbreviation,{
                        style : pmStyle})})}))});
    }
}

export namespace _HourControl {
    export type Constructors = lib8.StatelessWidget.Constructors | '_HourControl';
    export type Interface = Omit<_HourControl, Constructors>;
}
@DartClass
export class _HourControl extends lib8.StatelessWidget {
    constructor(_namedArguments? : {fragmentContext? : _TimePickerFragmentContext}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HourControl(_namedArguments? : {fragmentContext? : _TimePickerFragmentContext}) {
        let {fragmentContext} = Object.assign({
        }, _namedArguments );
        this.fragmentContext = fragmentContext;
    }
    fragmentContext : _TimePickerFragmentContext;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib8.BuildContext) : lib8.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMediaQuery(context)); */;
        let alwaysUse24HourFormat : boolean = lib15.MediaQuery.of(context).alwaysUse24HourFormat;
        let localizations : lib9.MaterialLocalizations = lib9.MaterialLocalizations.of(context);
        let hourStyle : lib6.TextStyle = op(Op.EQUALS,this.fragmentContext.mode,_TimePickerMode.hour) ? this.fragmentContext.activeStyle : this.fragmentContext.inactiveStyle;
        let formattedHour : string = localizations.formatHour(this.fragmentContext.selectedTime,{
            alwaysUse24HourFormat : alwaysUse24HourFormat});
        var hoursFromSelected : (hoursToAdd : number) => lib5.TimeOfDay = (hoursToAdd : number) : lib5.TimeOfDay =>  {
            if (this.fragmentContext.use24HourDials) {
                let selectedHour : number = this.fragmentContext.selectedTime.hour;
                return this.fragmentContext.selectedTime.replacing({
                    hour : (selectedHour + hoursToAdd) % lib5.TimeOfDay.hoursPerDay});
            }else {
                let periodOffset : number = this.fragmentContext.selectedTime.periodOffset;
                let hours : number = this.fragmentContext.selectedTime.hourOfPeriod;
                return this.fragmentContext.selectedTime.replacing({
                    hour : periodOffset + (hours + hoursToAdd) % lib5.TimeOfDay.hoursPerPeriod});
            }
        };
        let nextHour : lib5.TimeOfDay = hoursFromSelected(1);
        let formattedNextHour : string = localizations.formatHour(nextHour,{
            alwaysUse24HourFormat : alwaysUse24HourFormat});
        let previousHour : lib5.TimeOfDay = hoursFromSelected(-1);
        let formattedPreviousHour : string = localizations.formatHour(previousHour,{
            alwaysUse24HourFormat : alwaysUse24HourFormat});
        return lib14.GestureDetector({
            onTap : lib11.Feedback.wrapForTap(() =>  {
                return this.fragmentContext.onModeChange(_TimePickerMode.hour);
            },context),child : lib13.Semantics({
                hint : localizations.timePickerHourModeAnnouncement,value : formattedHour,excludeSemantics : true,increasedValue : formattedNextHour,onIncrease : () =>  {
                    this.fragmentContext.onTimeChange(nextHour);
                },decreasedValue : formattedPreviousHour,onDecrease : () =>  {
                    this.fragmentContext.onTimeChange(previousHour);
                },child : lib12.Text(formattedHour,{
                    style : hourStyle})})});
    }
}

export namespace _StringFragment {
    export type Constructors = lib8.StatelessWidget.Constructors | '_StringFragment';
    export type Interface = Omit<_StringFragment, Constructors>;
}
@DartClass
export class _StringFragment extends lib8.StatelessWidget {
    constructor(_namedArguments? : {fragmentContext? : _TimePickerFragmentContext,value? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StringFragment(_namedArguments? : {fragmentContext? : _TimePickerFragmentContext,value? : string}) {
        let {fragmentContext,value} = Object.assign({
        }, _namedArguments );
        this.fragmentContext = fragmentContext;
        this.value = value;
    }
    fragmentContext : _TimePickerFragmentContext;

    value : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib8.BuildContext) : lib8.Widget {
        return lib13.ExcludeSemantics({
            child : lib12.Text(this.value,{
                style : this.fragmentContext.inactiveStyle})});
    }
}

export namespace _TimePickerFragmentContext {
    export type Constructors = '_TimePickerFragmentContext';
    export type Interface = Omit<_TimePickerFragmentContext, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class _TimePickerFragmentContext {
    constructor(_namedArguments? : {headerTextTheme? : lib4.TextTheme,textDirection? : any,selectedTime? : lib5.TimeOfDay,mode? : _TimePickerMode,activeColor? : any,activeStyle? : lib6.TextStyle,inactiveColor? : any,inactiveStyle? : lib6.TextStyle,onTimeChange? : <T>(value : lib5.TimeOfDay) => void,onModeChange? : <T>(value : _TimePickerMode) => void,targetPlatform? : lib7.TargetPlatform,use24HourDials? : boolean}) {
    }
    @defaultConstructor
    _TimePickerFragmentContext(_namedArguments? : {headerTextTheme? : lib4.TextTheme,textDirection? : any,selectedTime? : lib5.TimeOfDay,mode? : _TimePickerMode,activeColor? : any,activeStyle? : lib6.TextStyle,inactiveColor? : any,inactiveStyle? : lib6.TextStyle,onTimeChange? : <T>(value : lib5.TimeOfDay) => void,onModeChange? : <T>(value : _TimePickerMode) => void,targetPlatform? : lib7.TargetPlatform,use24HourDials? : boolean}) {
        let {headerTextTheme,textDirection,selectedTime,mode,activeColor,activeStyle,inactiveColor,inactiveStyle,onTimeChange,onModeChange,targetPlatform,use24HourDials} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.headerTextTheme = headerTextTheme;
        this.textDirection = textDirection;
        this.selectedTime = selectedTime;
        this.mode = mode;
        this.activeColor = activeColor;
        this.activeStyle = activeStyle;
        this.inactiveColor = inactiveColor;
        this.inactiveStyle = inactiveStyle;
        this.onTimeChange = onTimeChange;
        this.onModeChange = onModeChange;
        this.targetPlatform = targetPlatform;
        this.use24HourDials = use24HourDials;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    headerTextTheme : lib4.TextTheme;

    textDirection : any;

    selectedTime : lib5.TimeOfDay;

    mode : _TimePickerMode;

    activeColor : any;

    activeStyle : lib6.TextStyle;

    inactiveColor : any;

    inactiveStyle : lib6.TextStyle;

    onTimeChange : <T>(value : lib5.TimeOfDay) => void;

    onModeChange : <T>(value : _TimePickerMode) => void;

    targetPlatform : lib7.TargetPlatform;

    use24HourDials : boolean;

}

export enum _TimePickerHeaderId {
    hour,
    colon,
    minute,
    period,
    dot,
    hString
}

export namespace _TimePickerHeaderLayout {
    export type Constructors = lib16.MultiChildLayoutDelegate.Constructors | '_TimePickerHeaderLayout';
    export type Interface = Omit<_TimePickerHeaderLayout, Constructors>;
}
@DartClass
export class _TimePickerHeaderLayout extends lib16.MultiChildLayoutDelegate {
    constructor(orientation : lib15.Orientation,format : _TimePickerHeaderFormat) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TimePickerHeaderLayout(orientation : lib15.Orientation,format : _TimePickerHeaderFormat) {
        this.assert = assert;
        this.orientation = orientation;
        this.format = format;
    }
     : any;

     : any;

    orientation : lib15.Orientation;

    format : _TimePickerHeaderFormat;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout(size : any) : any {
        let constraints : lib17.BoxConstraints = lib17.BoxConstraints.loose(size);
        switch (this.orientation) {
            case lib15.Orientation.portrait:
                this._layoutHorizontally(size,constraints);
                break;
            case lib15.Orientation.landscape:
                this._layoutVertically(size,constraints);
                break;
        }
    }
    _layoutHorizontally(size : any,constraints : lib17.BoxConstraints) : any {
        let fragmentsFlattened : core.DartList<_TimePickerHeaderFragment> = new core.DartList.literal<_TimePickerHeaderFragment>();
        let childSizes : core.DartMap<_TimePickerHeaderId,any> = new core.DartMap.literal([
        ]);
        let pivotIndex : number = 0;
        for(let pieceIndex : number = 0; pieceIndex < this.format.pieces.length; pieceIndex += 1){
            let piece : _TimePickerHeaderPiece = this.format.pieces[pieceIndex];
            for(let fragment of piece.fragments) {
                childSizes.set(fragment.layoutId,this.layoutChild(fragment.layoutId,constraints));
                fragmentsFlattened.add(fragment);
            }
            if (pieceIndex == this.format.centrepieceIndex) pivotIndex += this.format.pieces[this.format.centrepieceIndex].pivotIndex;else if (pieceIndex < this.format.centrepieceIndex) pivotIndex += piece.fragments.length;
        }
        this._positionPivoted(size.width,op(Op.DIVIDE,size.height,2.0),childSizes,fragmentsFlattened,pivotIndex);
    }
    _layoutVertically(size : any,constraints : lib17.BoxConstraints) : any {
        let childSizes : core.DartMap<_TimePickerHeaderId,any> = new core.DartMap.literal([
        ]);
        let pieceHeights : core.DartList<double> = new core.DartList.literal<double>();
        let height : double = 0.0;
        let margin : double = 0.0;
        for(let piece of this.format.pieces) {
            let pieceHeight : double = 0.0;
            for(let fragment of piece.fragments) {
                let childSize : any = childSizes.set(fragment.layoutId,this.layoutChild(fragment.layoutId,constraints));
                pieceHeight = math.max(pieceHeight,childSize.height);
            }
            pieceHeights.add(pieceHeight);
            height += pieceHeight + margin;
            margin = piece.bottomMargin;
        }
        let centrepiece : _TimePickerHeaderPiece = this.format.pieces[this.format.centrepieceIndex];
        let y : double = op(Op.DIVIDE,(op(Op.MINUS,size.height,height)),2.0);
        for(let pieceIndex : number = 0; pieceIndex < this.format.pieces.length; pieceIndex += 1){
            if (pieceIndex != this.format.centrepieceIndex) this._positionPiece(size.width,y,childSizes,this.format.pieces[pieceIndex].fragments);else this._positionPivoted(size.width,y,childSizes,centrepiece.fragments,centrepiece.pivotIndex);
            y += pieceHeights[pieceIndex] + this.format.pieces[pieceIndex].bottomMargin;
        }
    }
    _positionPivoted(width : double,y : double,childSizes : core.DartMap<_TimePickerHeaderId,any>,fragments : core.DartList<_TimePickerHeaderFragment>,pivotIndex : number) : any {
        let tailWidth : double = op(Op.DIVIDE,childSizes.get(fragments[pivotIndex].layoutId).width,2.0);
        for(let fragment of fragments.skip(pivotIndex + 1)) {
            tailWidth += op(Op.PLUS,childSizes.get(fragment.layoutId).width,fragment.startMargin);
        }
        let x : double = width / 2.0 + tailWidth;
        x = math.min(x,width);
        for(let i : number = fragments.length - 1; i >= 0; i -= 1){
            let fragment : _TimePickerHeaderFragment = fragments[i];
            let childSize : any = childSizes.get(fragment.layoutId);
            x -= childSize.width;
            this.positionChild(fragment.layoutId,Offset(x,y - op(Op.DIVIDE,childSize.height,2.0)));
            x -= fragment.startMargin;
        }
    }
    _positionPiece(width : double,centeredAroundY : double,childSizes : core.DartMap<_TimePickerHeaderId,any>,fragments : core.DartList<_TimePickerHeaderFragment>) : any {
        let pieceWidth : double = 0.0;
        let nextMargin : double = 0.0;
        for(let fragment of fragments) {
            let childSize : any = childSizes.get(fragment.layoutId);
            pieceWidth += op(Op.PLUS,childSize.width,nextMargin);
            nextMargin = fragment.startMargin;
        }
        let x : double = (width + pieceWidth) / 2.0;
        for(let i : number = fragments.length - 1; i >= 0; i -= 1){
            let fragment : _TimePickerHeaderFragment = fragments[i];
            let childSize : any = childSizes.get(fragment.layoutId);
            x -= childSize.width;
            this.positionChild(fragment.layoutId,Offset(x,centeredAroundY - op(Op.DIVIDE,childSize.height,2.0)));
            x -= fragment.startMargin;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRelayout(oldDelegate : _TimePickerHeaderLayout) : boolean {
        return this.orientation != oldDelegate.orientation || this.format != oldDelegate.format;
    }
}

export namespace _TimePickerHeader {
    export type Constructors = lib8.StatelessWidget.Constructors | '_TimePickerHeader';
    export type Interface = Omit<_TimePickerHeader, Constructors>;
}
@DartClass
export class _TimePickerHeader extends lib8.StatelessWidget {
    constructor(_namedArguments? : {selectedTime? : lib5.TimeOfDay,mode? : _TimePickerMode,orientation? : lib15.Orientation,onModeChanged? : <T>(value : _TimePickerMode) => void,onChanged? : <T>(value : lib5.TimeOfDay) => void,use24HourDials? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TimePickerHeader(_namedArguments? : {selectedTime? : lib5.TimeOfDay,mode? : _TimePickerMode,orientation? : lib15.Orientation,onModeChanged? : <T>(value : _TimePickerMode) => void,onChanged? : <T>(value : lib5.TimeOfDay) => void,use24HourDials? : boolean}) {
        let {selectedTime,mode,orientation,onModeChanged,onChanged,use24HourDials} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.selectedTime = selectedTime;
        this.mode = mode;
        this.orientation = orientation;
        this.onModeChanged = onModeChanged;
        this.onChanged = onChanged;
        this.use24HourDials = use24HourDials;
    }
     : any;

     : any;

     : any;

     : any;

    selectedTime : lib5.TimeOfDay;

    mode : _TimePickerMode;

    orientation : lib15.Orientation;

    onModeChanged : <T>(value : _TimePickerMode) => void;

    onChanged : <T>(value : lib5.TimeOfDay) => void;

    use24HourDials : boolean;

    _handleChangeMode(value : _TimePickerMode) : any {
        if (value != this.mode) this.onModeChanged(value);
    }
    _getBaseHeaderStyle(headerTextTheme : lib4.TextTheme) : lib6.TextStyle {
        /* TODO (AssertStatementImpl) : assert (orientation != null); */;
        switch (this.orientation) {
            case lib15.Orientation.portrait:
                return headerTextTheme.display3.copyWith({
                    fontSize : 60.0});
            case lib15.Orientation.landscape:
                return headerTextTheme.display2.copyWith({
                    fontSize : 50.0});
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib8.BuildContext) : lib8.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMediaQuery(context)); */;
        let themeData : lib19.ThemeData = lib18.Theme.of(context);
        let media : lib15.MediaQueryData = lib15.MediaQuery.of(context);
        let timeOfDayFormat : lib5.TimeOfDayFormat = lib9.MaterialLocalizations.of(context).timeOfDayFormat({
            alwaysUse24HourFormat : media.alwaysUse24HourFormat});
        let padding : lib20.EdgeInsets;
        let height : double;
        let width : double;
        /* TODO (AssertStatementImpl) : assert (orientation != null); */;
        switch (this.orientation) {
            case lib15.Orientation.portrait:
                height = properties._kTimePickerHeaderPortraitHeight;
                padding = new lib20.EdgeInsets.symmetric({
                    horizontal : 24.0});
                break;
            case lib15.Orientation.landscape:
                width = properties._kTimePickerHeaderLandscapeWidth;
                padding = new lib20.EdgeInsets.symmetric({
                    horizontal : 16.0});
                break;
        }
        let backgroundColor : any;
        switch (themeData.brightness) {
            case Brightness.light:
                backgroundColor = themeData.primaryColor;
                break;
            case Brightness.dark:
                backgroundColor = themeData.backgroundColor;
                break;
        }
        let activeColor : any;
        let inactiveColor : any;
        switch (themeData.primaryColorBrightness) {
            case Brightness.light:
                activeColor = lib21.Colors.black87;
                inactiveColor = lib21.Colors.black54;
                break;
            case Brightness.dark:
                activeColor = lib21.Colors.white;
                inactiveColor = lib21.Colors.white70;
                break;
        }
        let headerTextTheme : lib4.TextTheme = themeData.primaryTextTheme;
        let baseHeaderStyle : lib6.TextStyle = this._getBaseHeaderStyle(headerTextTheme);
        let fragmentContext : _TimePickerFragmentContext = _TimePickerFragmentContext({
            headerTextTheme : headerTextTheme,textDirection : lib13.Directionality.of(context),selectedTime : this.selectedTime,mode : this.mode,activeColor : activeColor,activeStyle : baseHeaderStyle.copyWith({
                color : activeColor}),inactiveColor : inactiveColor,inactiveStyle : baseHeaderStyle.copyWith({
                color : inactiveColor}),onTimeChange : this.onChanged,onModeChange : this._handleChangeMode.bind(this),targetPlatform : themeData.platform,use24HourDials : this.use24HourDials});
        let format : _TimePickerHeaderFormat = _buildHeaderFormat(timeOfDayFormat,fragmentContext);
        return lib22.Container({
            width : width,height : height,padding : padding,color : backgroundColor,child : lib13.CustomMultiChildLayout({
                delegate : _TimePickerHeaderLayout(this.orientation,format),children : format.pieces.expand((piece : _TimePickerHeaderPiece) =>  {
                    return piece.fragments;
                }).map((fragment : _TimePickerHeaderFragment) =>  {
                    return lib13.LayoutId({
                        id : fragment.layoutId,child : fragment.widget});
                }).toList()})});
    }
}

export enum _DialRing {
    outer,
    inner
}

export namespace _TappableLabel {
    export type Constructors = '_TappableLabel';
    export type Interface = Omit<_TappableLabel, Constructors>;
}
@DartClass
export class _TappableLabel {
    constructor(_namedArguments? : {value? : number,painter? : lib23.TextPainter,onTap? : any}) {
    }
    @defaultConstructor
    _TappableLabel(_namedArguments? : {value? : number,painter? : lib23.TextPainter,onTap? : any}) {
        let {value,painter,onTap} = Object.assign({
        }, _namedArguments );
        this.value = value;
        this.painter = painter;
        this.onTap = onTap;
    }
    value : number;

    painter : lib23.TextPainter;

    onTap : any;

}

export namespace _DialPainter {
    export type Constructors = lib24.CustomPainter.Constructors | '_DialPainter';
    export type Interface = Omit<_DialPainter, Constructors>;
}
@DartClass
export class _DialPainter extends lib24.CustomPainter {
    constructor(_namedArguments? : {primaryOuterLabels? : core.DartList<_TappableLabel>,primaryInnerLabels? : core.DartList<_TappableLabel>,secondaryOuterLabels? : core.DartList<_TappableLabel>,secondaryInnerLabels? : core.DartList<_TappableLabel>,backgroundColor? : any,accentColor? : any,theta? : double,activeRing? : _DialRing,textDirection? : any,selectedValue? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DialPainter(_namedArguments? : {primaryOuterLabels? : core.DartList<_TappableLabel>,primaryInnerLabels? : core.DartList<_TappableLabel>,secondaryOuterLabels? : core.DartList<_TappableLabel>,secondaryInnerLabels? : core.DartList<_TappableLabel>,backgroundColor? : any,accentColor? : any,theta? : double,activeRing? : _DialRing,textDirection? : any,selectedValue? : number}) {
        let {primaryOuterLabels,primaryInnerLabels,secondaryOuterLabels,secondaryInnerLabels,backgroundColor,accentColor,theta,activeRing,textDirection,selectedValue} = Object.assign({
        }, _namedArguments );
        this.primaryOuterLabels = primaryOuterLabels;
        this.primaryInnerLabels = primaryInnerLabels;
        this.secondaryOuterLabels = secondaryOuterLabels;
        this.secondaryInnerLabels = secondaryInnerLabels;
        this.backgroundColor = backgroundColor;
        this.accentColor = accentColor;
        this.theta = theta;
        this.activeRing = activeRing;
        this.textDirection = textDirection;
        this.selectedValue = selectedValue;
    }
    primaryOuterLabels : core.DartList<_TappableLabel>;

    primaryInnerLabels : core.DartList<_TappableLabel>;

    secondaryOuterLabels : core.DartList<_TappableLabel>;

    secondaryInnerLabels : core.DartList<_TappableLabel>;

    backgroundColor : any;

    accentColor : any;

    theta : double;

    activeRing : _DialRing;

    textDirection : any;

    selectedValue : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,size : any) : any {
        let radius : double = op(Op.DIVIDE,size.shortestSide,2.0);
        let center : any = Offset(op(Op.DIVIDE,size.width,2.0),op(Op.DIVIDE,size.height,2.0));
        let centerPoint : any = center;
        canvas.drawCircle(centerPoint,radius,((_) : any =>  {
            {
                _.color = this.backgroundColor;
                return _;
            }
        })(Paint()));
        let labelPadding : double = 24.0;
        let outerLabelRadius : double = radius - labelPadding;
        let innerLabelRadius : double = radius - labelPadding * 2.5;
        var getOffsetForTheta : (theta : double,ring : _DialRing) => any = (theta : double,ring : _DialRing) : any =>  {
            let labelRadius : double;
            switch (ring) {
                case _DialRing.outer:
                    labelRadius = outerLabelRadius;
                    break;
                case _DialRing.inner:
                    labelRadius = innerLabelRadius;
                    break;
            }
            return op(Op.PLUS,center,Offset(labelRadius * math.cos(theta),-labelRadius * math.sin(theta)));
        };
        var paintLabels : (labels : core.DartList<_TappableLabel>,ring : _DialRing) => any = (labels : core.DartList<_TappableLabel>,ring : _DialRing) : any =>  {
            if (labels == null) return;
            let labelThetaIncrement : double = -properties._kTwoPi / labels.length;
            let labelTheta : double = op(Op.DIVIDE,math.pi,2.0);
            for(let label of labels) {
                let labelPainter : lib23.TextPainter = label.painter;
                let labelOffset : any = Offset(-labelPainter.width / 2.0,-labelPainter.height / 2.0);
                labelPainter.paint(canvas,op(Op.PLUS,getOffsetForTheta(labelTheta,ring),labelOffset));
                labelTheta += labelThetaIncrement;
            }
        };
        paintLabels(this.primaryOuterLabels,_DialRing.outer);
        paintLabels(this.primaryInnerLabels,_DialRing.inner);
        let selectorPaint : any = ((_) : any =>  {
            {
                _.color = this.accentColor;
                return _;
            }
        })(Paint());
        let focusedPoint : any = getOffsetForTheta(this.theta,this.activeRing);
        let focusedRadius : double = labelPadding - 4.0;
        canvas.drawCircle(centerPoint,4.0,selectorPaint);
        canvas.drawCircle(focusedPoint,focusedRadius,selectorPaint);
        selectorPaint.strokeWidth = 2.0;
        canvas.drawLine(centerPoint,focusedPoint,selectorPaint);
        let focusedRect : any = Rect.fromCircle({
            center : focusedPoint,radius : focusedRadius});
        ((_) : any =>  {
            {
                save();
                clipPath(((_) : any =>  {
                    {
                        addOval(focusedRect);
                        return _;
                    }
                })(Path()));
                return _;
            }
        })(canvas);
        paintLabels(this.secondaryOuterLabels,_DialRing.outer);
        paintLabels(this.secondaryInnerLabels,_DialRing.inner);
        canvas.restore();
    }
    private static __$_semanticNodeSizeScale : double;
    static get _semanticNodeSizeScale() : double { 
        if (this.__$_semanticNodeSizeScale===undefined) {
            this.__$_semanticNodeSizeScale = 1.5;
        }
        return this.__$_semanticNodeSizeScale;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get semanticsBuilder() : (size : any) => core.DartList<lib24.CustomPainterSemantics> {
        return this._buildSemantics.bind(this);
    }
    _buildSemantics(size : any) : core.DartList<lib24.CustomPainterSemantics> {
        let radius : double = op(Op.DIVIDE,size.shortestSide,2.0);
        let center : any = Offset(op(Op.DIVIDE,size.width,2.0),op(Op.DIVIDE,size.height,2.0));
        let labelPadding : double = 24.0;
        let outerLabelRadius : double = radius - labelPadding;
        let innerLabelRadius : double = radius - labelPadding * 2.5;
        var getOffsetForTheta : (theta : double,ring : _DialRing) => any = (theta : double,ring : _DialRing) : any =>  {
            let labelRadius : double;
            switch (ring) {
                case _DialRing.outer:
                    labelRadius = outerLabelRadius;
                    break;
                case _DialRing.inner:
                    labelRadius = innerLabelRadius;
                    break;
            }
            return op(Op.PLUS,center,Offset(labelRadius * math.cos(theta),-labelRadius * math.sin(theta)));
        };
        let nodes : core.DartList<lib24.CustomPainterSemantics> = new core.DartList.literal<lib24.CustomPainterSemantics>();
        var paintLabels : (labels : core.DartList<_TappableLabel>,ring : _DialRing) => any = (labels : core.DartList<_TappableLabel>,ring : _DialRing) : any =>  {
            if (labels == null) return;
            let labelThetaIncrement : double = -properties._kTwoPi / labels.length;
            let ordinalOffset : double = op(Op.EQUALS,ring,_DialRing.inner) ? 12.0 : 0.0;
            let labelTheta : double = op(Op.DIVIDE,math.pi,2.0);
            for(let i : number = 0; i < labels.length; i++){
                let label : _TappableLabel = labels[i];
                let labelPainter : lib23.TextPainter = label.painter;
                let width : double = labelPainter.width * _DialPainter._semanticNodeSizeScale;
                let height : double = labelPainter.height * _DialPainter._semanticNodeSizeScale;
                let nodeOffset : any = op(Op.PLUS,getOffsetForTheta(labelTheta,ring),Offset(-width / 2.0,-height / 2.0));
                let node : lib24.CustomPainterSemantics = op(Op.GT,lib24.CustomPainterSemantics({
                    rect : Rect.fromLTRB(op(Op.PLUS,op(Op.MINUS,nodeOffset.dx,24.0),width / 2),op(Op.PLUS,op(Op.MINUS,nodeOffset.dy,24.0),height / 2),op(Op.PLUS,op(Op.PLUS,nodeOffset.dx,24.0),width / 2),op(Op.PLUS,op(Op.PLUS,nodeOffset.dy,24.0),height / 2)),properties : lib25.SemanticsProperties({
                        sortKey : lib25.OrdinalSortKey(new core.DartInt(i).toDouble() + ordinalOffset),selected : label.value == this.selectedValue,value : labelPainter.text.text,textDirection : this.textDirection,onTap : label.onTap}),tags : op(Op.LT,core.DartSet<E>,lib25.SemanticsTag)}),.from(new core.DartList.literal<lib25.SemanticsTag>(lib25.SemanticsTag('dial-label')))),  : lib24.CustomPainterSemantics;
                nodes.add(node);
                labelTheta += labelThetaIncrement;
            }
        };
        paintLabels(this.primaryOuterLabels,_DialRing.outer);
        paintLabels(this.primaryInnerLabels,_DialRing.inner);
        return nodes;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRepaint(oldPainter : _DialPainter) : boolean {
        return oldPainter.primaryOuterLabels != this.primaryOuterLabels || oldPainter.primaryInnerLabels != this.primaryInnerLabels || oldPainter.secondaryOuterLabels != this.secondaryOuterLabels || oldPainter.secondaryInnerLabels != this.secondaryInnerLabels || oldPainter.backgroundColor != this.backgroundColor || oldPainter.accentColor != this.accentColor || oldPainter.theta != this.theta || oldPainter.activeRing != this.activeRing;
    }
}

export namespace _Dial {
    export type Constructors = lib8.StatefulWidget.Constructors | '_Dial';
    export type Interface = Omit<_Dial, Constructors>;
}
@DartClass
export class _Dial extends lib8.StatefulWidget {
    constructor(_namedArguments? : {selectedTime? : lib5.TimeOfDay,mode? : _TimePickerMode,use24HourDials? : boolean,onChanged? : <T>(value : lib5.TimeOfDay) => void}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _Dial(_namedArguments? : {selectedTime? : lib5.TimeOfDay,mode? : _TimePickerMode,use24HourDials? : boolean,onChanged? : <T>(value : lib5.TimeOfDay) => void}) {
        let {selectedTime,mode,use24HourDials,onChanged} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.selectedTime = selectedTime;
        this.mode = mode;
        this.use24HourDials = use24HourDials;
        this.onChanged = onChanged;
    }
     : any;

    selectedTime : lib5.TimeOfDay;

    mode : _TimePickerMode;

    use24HourDials : boolean;

    onChanged : <T>(value : lib5.TimeOfDay) => void;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _DialState {
        return _DialState();
    }
}

export namespace _DialState {
    export type Constructors = '_DialState';
    export type Interface = Omit<_DialState, Constructors>;
}
@DartClass
@With(any)
export class _DialState extends any implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._updateDialRingFromWidget();
        this._thetaController = lib26.AnimationController({
            duration : properties._kDialAnimateDuration,vsync : this});
        this._thetaTween = lib27.Tween({
            begin : this._getThetaForTime(widget.selectedTime)});
        this._theta = ((_) : lib28.Animation<any> =>  {
            {
                _.addListener(() =>  {
                    return setState(() =>  {
                    });
                });
                return _;
            }
        })(this._thetaController.drive(lib27.CurveTween({
            curve : lib29.Curves.fastOutSlowIn})).drive(this._thetaTween));
    }
    themeData : lib19.ThemeData;

    localizations : lib9.MaterialLocalizations;

    media : lib15.MediaQueryData;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMediaQuery(context)); */;
        this.themeData = lib18.Theme.of(lib30.properties.context);
        this.localizations = lib9.MaterialLocalizations.of(lib30.properties.context);
        this.media = lib15.MediaQuery.of(lib30.properties.context);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : _Dial) : any {
        super.didUpdateWidget(oldWidget);
        this._updateDialRingFromWidget();
        if (widget.mode != oldWidget.mode || widget.selectedTime != oldWidget.selectedTime) {
            if (!this._dragging) this._animateTo(this._getThetaForTime(widget.selectedTime));
        }
    }
    _updateDialRingFromWidget() : any {
        if (op(Op.EQUALS,widget.mode,_TimePickerMode.hour) && widget.use24HourDials) {
            this._activeRing = op(Op.GEQ,widget.selectedTime.hour,1) && op(Op.LEQ,widget.selectedTime.hour,12) ? _DialRing.inner : _DialRing.outer;
        }else {
            this._activeRing = _DialRing.outer;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._thetaController.dispose();
        super.dispose();
    }
    _thetaTween : lib27.Tween<double>;

    _theta : lib28.Animation<double>;

    _thetaController : lib26.AnimationController;

    _dragging : boolean;

    static _nearest(target : double,a : double,b : double) : double {
        return (new core.DartDouble((target - a)).abs() < new core.DartDouble((target - b)).abs()) ? a : b;
    }
    _animateTo(targetTheta : double) : any {
        let currentTheta : double = this._theta.value;
        let beginTheta : double = _DialState._nearest(targetTheta,currentTheta,currentTheta + properties._kTwoPi);
        beginTheta = _DialState._nearest(targetTheta,beginTheta,currentTheta - properties._kTwoPi);
        ((_) : lib27.Tween<double> =>  {
            {
                _.begin = beginTheta;
                _.end = targetTheta;
                return _;
            }
        })(this._thetaTween);
        ((_) : lib26.AnimationController =>  {
            {
                _.value = 0.0;
                forward();
                return _;
            }
        })(this._thetaController);
    }
    _getThetaForTime(time : lib5.TimeOfDay) : double {
        let fraction : double = op(Op.EQUALS,widget.mode,_TimePickerMode.hour) ? (time.hour / lib5.TimeOfDay.hoursPerPeriod) % lib5.TimeOfDay.hoursPerPeriod : (time.minute / lib5.TimeOfDay.minutesPerHour) % lib5.TimeOfDay.minutesPerHour;
        return op(Op.MODULE,(op(Op.MINUS,op(Op.DIVIDE,math.pi,2.0),fraction * properties._kTwoPi)),properties._kTwoPi);
    }
    _getTimeForTheta(theta : double) : lib5.TimeOfDay {
        let fraction : double = (0.25 - (theta % properties._kTwoPi) / properties._kTwoPi) % 1.0;
        if (op(Op.EQUALS,widget.mode,_TimePickerMode.hour)) {
            let newHour : number = new core.DartDouble((fraction * lib5.TimeOfDay.hoursPerPeriod)).round() % lib5.TimeOfDay.hoursPerPeriod;
            if (widget.use24HourDials) {
                if (op(Op.EQUALS,this._activeRing,_DialRing.outer)) {
                    if (newHour != 0) newHour = (newHour + lib5.TimeOfDay.hoursPerPeriod) % lib5.TimeOfDay.hoursPerDay;
                }else if (newHour == 0) {
                    newHour = lib5.TimeOfDay.hoursPerPeriod;
                }
            }else {
                newHour = newHour + widget.selectedTime.periodOffset;
            }
            return widget.selectedTime.replacing({
                hour : newHour});
        }else {
            return widget.selectedTime.replacing({
                minute : new core.DartDouble((fraction * lib5.TimeOfDay.minutesPerHour)).round() % lib5.TimeOfDay.minutesPerHour});
        }
    }
    _notifyOnChangedIfNeeded() : lib5.TimeOfDay {
        let current : lib5.TimeOfDay = this._getTimeForTheta(this._theta.value);
        if (op(Op.EQUALS,widget.onChanged,null)) return current;
        if (current != widget.selectedTime) widget.onChanged(current);
        return current;
    }
    _updateThetaForPan() : any {
        setState(() =>  {
            let offset : any = op(Op.MINUS,this._position,this._center);
            let angle : double = (math.atan2(offset.dx,offset.dy) - op(Op.DIVIDE,math.pi,2.0)) % properties._kTwoPi;
            ((_) : lib27.Tween<double> =>  {
                {
                    _.begin = angle;
                    _.end = angle;
                    return _;
                }
            })(this._thetaTween);
            let box : any = lib30.properties.context.findRenderObject();
            let radius : double = op(Op.DIVIDE,box.size.shortestSide,2.0);
            if (op(Op.EQUALS,widget.mode,_TimePickerMode.hour) && widget.use24HourDials) {
                if (op(Op.LT,op(Op.TIMES,offset.distance,1.5),radius)) this._activeRing = _DialRing.inner;else this._activeRing = _DialRing.outer;
            }
        });
    }
    _position : any;

    _center : any;

    _activeRing : _DialRing;

    _handlePanStart(details : lib31.DragStartDetails) : any {
        /* TODO (AssertStatementImpl) : assert (!_dragging); */;
        this._dragging = true;
        let box : any = lib30.properties.context.findRenderObject();
        this._position = box.globalToLocal(details.globalPosition);
        this._center = box.size.center(Offset.zero);
        this._updateThetaForPan();
        this._notifyOnChangedIfNeeded();
    }
    _handlePanUpdate(details : lib31.DragUpdateDetails) : any {
        this._position += details.delta;
        this._updateThetaForPan();
        this._notifyOnChangedIfNeeded();
    }
    _handlePanEnd(details : lib31.DragEndDetails) : any {
        /* TODO (AssertStatementImpl) : assert (_dragging); */;
        this._dragging = false;
        this._position = null;
        this._center = null;
        this._animateTo(this._getThetaForTime(widget.selectedTime));
    }
    _handleTapUp(details : lib32.TapUpDetails) : any {
        let box : any = lib30.properties.context.findRenderObject();
        this._position = box.globalToLocal(details.globalPosition);
        this._center = box.size.center(Offset.zero);
        this._updateThetaForPan();
        let newTime : lib5.TimeOfDay = this._notifyOnChangedIfNeeded();
        if (op(Op.EQUALS,widget.mode,_TimePickerMode.hour)) {
            if (widget.use24HourDials) {
                _announceToAccessibility(lib30.properties.context,this.localizations.formatDecimal(newTime.hour));
            }else {
                _announceToAccessibility(lib30.properties.context,this.localizations.formatDecimal(newTime.hourOfPeriod));
            }
        }else {
            _announceToAccessibility(lib30.properties.context,this.localizations.formatDecimal(newTime.minute));
        }
        this._animateTo(this._getThetaForTime(this._getTimeForTheta(this._theta.value)));
        this._dragging = false;
        this._position = null;
        this._center = null;
    }
    _selectHour(hour : number) : any {
        _announceToAccessibility(lib30.properties.context,this.localizations.formatDecimal(hour));
        let time : lib5.TimeOfDay;
        if (op(Op.EQUALS,widget.mode,_TimePickerMode.hour) && widget.use24HourDials) {
            this._activeRing = hour >= 1 && hour <= 12 ? _DialRing.inner : _DialRing.outer;
            time = lib5.TimeOfDay({
                hour : hour,minute : widget.selectedTime.minute});
        }else {
            this._activeRing = _DialRing.outer;
            if (op(Op.EQUALS,widget.selectedTime.period,lib5.DayPeriod.am)) {
                time = lib5.TimeOfDay({
                    hour : hour,minute : widget.selectedTime.minute});
            }else {
                time = lib5.TimeOfDay({
                    hour : hour + lib5.TimeOfDay.hoursPerPeriod,minute : widget.selectedTime.minute});
            }
        }
        let angle : double = this._getThetaForTime(time);
        ((_) : lib27.Tween<double> =>  {
            {
                _.begin = angle;
                _.end = angle;
                return _;
            }
        })(this._thetaTween);
        this._notifyOnChangedIfNeeded();
    }
    _selectMinute(minute : number) : any {
        _announceToAccessibility(lib30.properties.context,this.localizations.formatDecimal(minute));
        let time : lib5.TimeOfDay = lib5.TimeOfDay({
            hour : widget.selectedTime.hour,minute : minute});
        let angle : double = this._getThetaForTime(time);
        ((_) : lib27.Tween<double> =>  {
            {
                _.begin = angle;
                _.end = angle;
                return _;
            }
        })(this._thetaTween);
        this._notifyOnChangedIfNeeded();
    }
    private static __$_amHours : core.DartList<lib5.TimeOfDay>;
    static get _amHours() : core.DartList<lib5.TimeOfDay> { 
        if (this.__$_amHours===undefined) {
            this.__$_amHours = new core.DartList.literal<lib5.TimeOfDay>(lib5.TimeOfDay({
                hour : 12,minute : 0}),lib5.TimeOfDay({
                hour : 1,minute : 0}),lib5.TimeOfDay({
                hour : 2,minute : 0}),lib5.TimeOfDay({
                hour : 3,minute : 0}),lib5.TimeOfDay({
                hour : 4,minute : 0}),lib5.TimeOfDay({
                hour : 5,minute : 0}),lib5.TimeOfDay({
                hour : 6,minute : 0}),lib5.TimeOfDay({
                hour : 7,minute : 0}),lib5.TimeOfDay({
                hour : 8,minute : 0}),lib5.TimeOfDay({
                hour : 9,minute : 0}),lib5.TimeOfDay({
                hour : 10,minute : 0}),lib5.TimeOfDay({
                hour : 11,minute : 0}));
        }
        return this.__$_amHours;
    }

    private static __$_pmHours : core.DartList<lib5.TimeOfDay>;
    static get _pmHours() : core.DartList<lib5.TimeOfDay> { 
        if (this.__$_pmHours===undefined) {
            this.__$_pmHours = new core.DartList.literal<lib5.TimeOfDay>(lib5.TimeOfDay({
                hour : 0,minute : 0}),lib5.TimeOfDay({
                hour : 13,minute : 0}),lib5.TimeOfDay({
                hour : 14,minute : 0}),lib5.TimeOfDay({
                hour : 15,minute : 0}),lib5.TimeOfDay({
                hour : 16,minute : 0}),lib5.TimeOfDay({
                hour : 17,minute : 0}),lib5.TimeOfDay({
                hour : 18,minute : 0}),lib5.TimeOfDay({
                hour : 19,minute : 0}),lib5.TimeOfDay({
                hour : 20,minute : 0}),lib5.TimeOfDay({
                hour : 21,minute : 0}),lib5.TimeOfDay({
                hour : 22,minute : 0}),lib5.TimeOfDay({
                hour : 23,minute : 0}));
        }
        return this.__$_pmHours;
    }

    _buildTappableLabel(textTheme : lib4.TextTheme,value : number,label : string,onTap : any) : _TappableLabel {
        let style : lib6.TextStyle = textTheme.subhead;
        return _TappableLabel({
            value : value,painter : ((_) : any =>  {
                {
                    layout();
                    return _;
                }
            })(lib23.TextPainter({
                text : lib33.TextSpan({
                    style : style,text : label}),textDirection : TextDirection.ltr})),onTap : onTap});
    }
    _build24HourInnerRing(textTheme : lib4.TextTheme) : core.DartList<_TappableLabel> {
        let labels : core.DartList<_TappableLabel> = new core.DartList.literal<_TappableLabel>();
        for(let timeOfDay of _DialState._amHours) {
            labels.add(this._buildTappableLabel(textTheme,timeOfDay.hour,this.localizations.formatHour(timeOfDay,{
                alwaysUse24HourFormat : this.media.alwaysUse24HourFormat}),() =>  {
                this._selectHour(timeOfDay.hour);
            }));
        }
        return labels;
    }
    _build24HourOuterRing(textTheme : lib4.TextTheme) : core.DartList<_TappableLabel> {
        let labels : core.DartList<_TappableLabel> = new core.DartList.literal<_TappableLabel>();
        for(let timeOfDay of _DialState._pmHours) {
            labels.add(this._buildTappableLabel(textTheme,timeOfDay.hour,this.localizations.formatHour(timeOfDay,{
                alwaysUse24HourFormat : this.media.alwaysUse24HourFormat}),() =>  {
                this._selectHour(timeOfDay.hour);
            }));
        }
        return labels;
    }
    _build12HourOuterRing(textTheme : lib4.TextTheme) : core.DartList<_TappableLabel> {
        let labels : core.DartList<_TappableLabel> = new core.DartList.literal<_TappableLabel>();
        for(let timeOfDay of _DialState._amHours) {
            labels.add(this._buildTappableLabel(textTheme,timeOfDay.hour,this.localizations.formatHour(timeOfDay,{
                alwaysUse24HourFormat : this.media.alwaysUse24HourFormat}),() =>  {
                this._selectHour(timeOfDay.hour);
            }));
        }
        return labels;
    }
    _buildMinutes(textTheme : lib4.TextTheme) : core.DartList<_TappableLabel> {
        let _minuteMarkerValues : core.DartList<lib5.TimeOfDay> = new core.DartList.literal<lib5.TimeOfDay>(lib5.TimeOfDay({
            hour : 0,minute : 0}),lib5.TimeOfDay({
            hour : 0,minute : 5}),lib5.TimeOfDay({
            hour : 0,minute : 10}),lib5.TimeOfDay({
            hour : 0,minute : 15}),lib5.TimeOfDay({
            hour : 0,minute : 20}),lib5.TimeOfDay({
            hour : 0,minute : 25}),lib5.TimeOfDay({
            hour : 0,minute : 30}),lib5.TimeOfDay({
            hour : 0,minute : 35}),lib5.TimeOfDay({
            hour : 0,minute : 40}),lib5.TimeOfDay({
            hour : 0,minute : 45}),lib5.TimeOfDay({
            hour : 0,minute : 50}),lib5.TimeOfDay({
            hour : 0,minute : 55}));
        let labels : core.DartList<_TappableLabel> = new core.DartList.literal<_TappableLabel>();
        for(let timeOfDay of _minuteMarkerValues) {
            labels.add(this._buildTappableLabel(textTheme,timeOfDay.minute,this.localizations.formatMinute(timeOfDay),() =>  {
                this._selectMinute(timeOfDay.minute);
            }));
        }
        return labels;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib8.BuildContext) : lib8.Widget {
        let backgroundColor : any;
        switch (this.themeData.brightness) {
            case Brightness.light:
                backgroundColor = op(Op.INDEX,lib21.Colors.grey,200);
                break;
            case Brightness.dark:
                backgroundColor = this.themeData.backgroundColor;
                break;
        }
        let theme : lib19.ThemeData = lib18.Theme.of(context);
        let primaryOuterLabels : core.DartList<_TappableLabel>;
        let primaryInnerLabels : core.DartList<_TappableLabel>;
        let secondaryOuterLabels : core.DartList<_TappableLabel>;
        let secondaryInnerLabels : core.DartList<_TappableLabel>;
        let selectedDialValue : number;
        switch (widget.mode) {
            case _TimePickerMode.hour:
                if (widget.use24HourDials) {
                    selectedDialValue = widget.selectedTime.hour;
                    primaryOuterLabels = this._build24HourOuterRing(theme.textTheme);
                    secondaryOuterLabels = this._build24HourOuterRing(theme.accentTextTheme);
                    primaryInnerLabels = this._build24HourInnerRing(theme.textTheme);
                    secondaryInnerLabels = this._build24HourInnerRing(theme.accentTextTheme);
                }else {
                    selectedDialValue = widget.selectedTime.hourOfPeriod;
                    primaryOuterLabels = this._build12HourOuterRing(theme.textTheme);
                    secondaryOuterLabels = this._build12HourOuterRing(theme.accentTextTheme);
                }
                break;
            case _TimePickerMode.minute:
                selectedDialValue = widget.selectedTime.minute;
                primaryOuterLabels = this._buildMinutes(theme.textTheme);
                primaryInnerLabels = null;
                secondaryOuterLabels = this._buildMinutes(theme.accentTextTheme);
                secondaryInnerLabels = null;
                break;
        }
        return lib14.GestureDetector({
            excludeFromSemantics : true,onPanStart : this._handlePanStart.bind(this),onPanUpdate : this._handlePanUpdate.bind(this),onPanEnd : this._handlePanEnd.bind(this),onTapUp : this._handleTapUp.bind(this),child : lib13.CustomPaint({
                key : new lib34.ValueKey<string>('time-picker-dial'),painter : _DialPainter({
                    selectedValue : selectedDialValue,primaryOuterLabels : primaryOuterLabels,primaryInnerLabels : primaryInnerLabels,secondaryOuterLabels : secondaryOuterLabels,secondaryInnerLabels : secondaryInnerLabels,backgroundColor : backgroundColor,accentColor : this.themeData.accentColor,theta : this._theta.value,activeRing : this._activeRing,textDirection : lib13.Directionality.of(context)})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DialState() {
        this._dragging = false;
        this._activeRing = _DialRing.outer;
    }
}

export namespace _TimePickerDialog {
    export type Constructors = lib8.StatefulWidget.Constructors | '_TimePickerDialog';
    export type Interface = Omit<_TimePickerDialog, Constructors>;
}
@DartClass
export class _TimePickerDialog extends lib8.StatefulWidget {
    constructor(_namedArguments? : {key? : lib34.Key,initialTime? : lib5.TimeOfDay}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TimePickerDialog(_namedArguments? : {key? : lib34.Key,initialTime? : lib5.TimeOfDay}) {
        let {key,initialTime} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.initialTime = initialTime;
    }
     : any;

     : any;

     : any;

    initialTime : lib5.TimeOfDay;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _TimePickerDialogState {
        return _TimePickerDialogState();
    }
}

export namespace _TimePickerDialogState {
    export type Constructors = '_TimePickerDialogState';
    export type Interface = Omit<_TimePickerDialogState, Constructors>;
}
@DartClass
export class _TimePickerDialogState extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._selectedTime = widget.initialTime;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        this.localizations = lib9.MaterialLocalizations.of(lib30.properties.context);
        this._announceInitialTimeOnce();
        this._announceModeOnce();
    }
    _mode : _TimePickerMode;

    _lastModeAnnounced : _TimePickerMode;

    get selectedTime() : lib5.TimeOfDay {
        return this._selectedTime;
    }
    _selectedTime : lib5.TimeOfDay;

    _vibrateTimer : async.DartTimer;

    localizations : lib9.MaterialLocalizations;

    _vibrate() : any {
        switch (lib18.Theme.of(lib30.properties.context).platform) {
            case lib7.TargetPlatform.android:
            case lib7.TargetPlatform.fuchsia:
                ((_794_)=>(!!_794_)?_794_.cancel():null)(this._vibrateTimer);
                this._vibrateTimer = async.DartTimer(properties._kVibrateCommitDelay,() =>  {
                    lib35.HapticFeedback.vibrate();
                    this._vibrateTimer = null;
                });
                break;
            case lib7.TargetPlatform.iOS:
                break;
        }
    }
    _handleModeChanged(mode : _TimePickerMode) : any {
        this._vibrate();
        setState(() =>  {
            this._mode = mode;
            this._announceModeOnce();
        });
    }
    _announceModeOnce() : any {
        if (op(Op.EQUALS,this._lastModeAnnounced,this._mode)) {
            return;
        }
        switch (this._mode) {
            case _TimePickerMode.hour:
                _announceToAccessibility(lib30.properties.context,this.localizations.timePickerHourModeAnnouncement);
                break;
            case _TimePickerMode.minute:
                _announceToAccessibility(lib30.properties.context,this.localizations.timePickerMinuteModeAnnouncement);
                break;
        }
        this._lastModeAnnounced = this._mode;
    }
    _announcedInitialTime : boolean;

    _announceInitialTimeOnce() : any {
        if (this._announcedInitialTime) return;
        let media : lib15.MediaQueryData = lib15.MediaQuery.of(lib30.properties.context);
        let localizations : lib9.MaterialLocalizations = lib9.MaterialLocalizations.of(lib30.properties.context);
        _announceToAccessibility(lib30.properties.context,localizations.formatTimeOfDay(widget.initialTime,{
            alwaysUse24HourFormat : media.alwaysUse24HourFormat}));
        this._announcedInitialTime = true;
    }
    _handleTimeChanged(value : lib5.TimeOfDay) : any {
        this._vibrate();
        setState(() =>  {
            this._selectedTime = value;
        });
    }
    _handleCancel() : any {
        lib36.Navigator.pop(lib30.properties.context);
    }
    _handleOk() : any {
        lib36.Navigator.pop(lib30.properties.context,this._selectedTime);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib8.BuildContext) : lib8.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMediaQuery(context)); */;
        let media : lib15.MediaQueryData = lib15.MediaQuery.of(context);
        let timeOfDayFormat : lib5.TimeOfDayFormat = this.localizations.timeOfDayFormat({
            alwaysUse24HourFormat : media.alwaysUse24HourFormat});
        let use24HourDials : boolean = lib5.hourFormat({
            of : timeOfDayFormat}) != lib5.HourFormat.h;
        let theme : lib19.ThemeData = lib18.Theme.of(context);
        let picker : lib8.Widget = lib13.Padding({
            padding : new lib20.EdgeInsets.all(16.0),child : lib13.AspectRatio({
                aspectRatio : 1.0,child : _Dial({
                    mode : this._mode,use24HourDials : use24HourDials,selectedTime : this._selectedTime,onChanged : this._handleTimeChanged.bind(this)})})});
        let actions : lib8.Widget = lib39.ButtonTheme.bar({
            child : lib38.ButtonBar({
                children : new core.DartList.literal<lib8.Widget>(lib37.FlatButton({
                    child : lib12.Text(this.localizations.cancelButtonLabel),onPressed : this._handleCancel.bind(this)}),lib37.FlatButton({
                    child : lib12.Text(this.localizations.okButtonLabel),onPressed : this._handleOk.bind(this)}))})});
        let dialog : lib41.Dialog = lib41.Dialog({
            child : lib40.OrientationBuilder({
                builder : (context : lib8.BuildContext,orientation : lib15.Orientation) =>  {
                    let header : lib8.Widget = _TimePickerHeader({
                        selectedTime : this._selectedTime,mode : this._mode,orientation : orientation,onModeChanged : this._handleModeChanged.bind(this),onChanged : this._handleTimeChanged.bind(this),use24HourDials : use24HourDials});
                    let pickerAndActions : lib8.Widget = lib22.Container({
                        color : theme.dialogBackgroundColor,child : lib13.Column({
                            mainAxisSize : lib10.MainAxisSize.min,children : new core.DartList.literal<lib8.Widget>(lib13.Expanded({
                                child : picker}),actions)})});
                    let timePickerHeightPortrait : double;
                    let timePickerHeightLandscape : double;
                    switch (theme.materialTapTargetSize) {
                        case lib19.MaterialTapTargetSize.padded:
                            timePickerHeightPortrait = properties._kTimePickerHeightPortrait;
                            timePickerHeightLandscape = properties._kTimePickerHeightLandscape;
                            break;
                        case lib19.MaterialTapTargetSize.shrinkWrap:
                            timePickerHeightPortrait = properties._kTimePickerHeightPortraitCollapsed;
                            timePickerHeightLandscape = properties._kTimePickerHeightLandscapeCollapsed;
                            break;
                    }
                    /* TODO (AssertStatementImpl) : assert (orientation != null); */;
                    switch (orientation) {
                        case lib15.Orientation.portrait:
                            return lib13.SizedBox({
                                width : properties._kTimePickerWidthPortrait,height : timePickerHeightPortrait,child : lib13.Column({
                                    mainAxisSize : lib10.MainAxisSize.min,crossAxisAlignment : lib10.CrossAxisAlignment.stretch,children : new core.DartList.literal<lib8.Widget>(header,lib13.Expanded({
                                        child : pickerAndActions}))})});
                        case lib15.Orientation.landscape:
                            return lib13.SizedBox({
                                width : properties._kTimePickerWidthLandscape,height : timePickerHeightLandscape,child : lib13.Row({
                                    mainAxisSize : lib10.MainAxisSize.min,crossAxisAlignment : lib10.CrossAxisAlignment.stretch,children : new core.DartList.literal<lib8.Widget>(header,lib13.Flexible({
                                        child : pickerAndActions}))})});
                    }
                    return null;
                }})});
        return lib18.Theme({
            data : theme.copyWith({
                dialogBackgroundColor : lib21.Colors.transparent}),child : dialog});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        ((_795_)=>(!!_795_)?_795_.cancel():null)(this._vibrateTimer);
        this._vibrateTimer = null;
        super.dispose();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TimePickerDialogState() {
        this._mode = _TimePickerMode.hour;
        this._announcedInitialTime = false;
    }
}

export enum _TimePickerMode {
    hour,
    minute
}

export namespace _MinuteControl {
    export type Constructors = lib8.StatelessWidget.Constructors | '_MinuteControl';
    export type Interface = Omit<_MinuteControl, Constructors>;
}
@DartClass
export class _MinuteControl extends lib8.StatelessWidget {
    constructor(_namedArguments? : {fragmentContext? : _TimePickerFragmentContext}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MinuteControl(_namedArguments? : {fragmentContext? : _TimePickerFragmentContext}) {
        let {fragmentContext} = Object.assign({
        }, _namedArguments );
        this.fragmentContext = fragmentContext;
    }
    fragmentContext : _TimePickerFragmentContext;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib8.BuildContext) : lib8.Widget {
        let localizations : lib9.MaterialLocalizations = lib9.MaterialLocalizations.of(context);
        let minuteStyle : lib6.TextStyle = op(Op.EQUALS,this.fragmentContext.mode,_TimePickerMode.minute) ? this.fragmentContext.activeStyle : this.fragmentContext.inactiveStyle;
        let formattedMinute : string = localizations.formatMinute(this.fragmentContext.selectedTime);
        let nextMinute : lib5.TimeOfDay = this.fragmentContext.selectedTime.replacing({
            minute : (this.fragmentContext.selectedTime.minute + 1) % lib5.TimeOfDay.minutesPerHour});
        let formattedNextMinute : string = localizations.formatMinute(nextMinute);
        let previousMinute : lib5.TimeOfDay = this.fragmentContext.selectedTime.replacing({
            minute : (this.fragmentContext.selectedTime.minute - 1) % lib5.TimeOfDay.minutesPerHour});
        let formattedPreviousMinute : string = localizations.formatMinute(previousMinute);
        return lib14.GestureDetector({
            onTap : lib11.Feedback.wrapForTap(() =>  {
                return this.fragmentContext.onModeChange(_TimePickerMode.minute);
            },context),child : lib13.Semantics({
                excludeSemantics : true,hint : localizations.timePickerMinuteModeAnnouncement,value : formattedMinute,increasedValue : formattedNextMinute,onIncrease : () =>  {
                    this.fragmentContext.onTimeChange(nextMinute);
                },decreasedValue : formattedPreviousMinute,onDecrease : () =>  {
                    this.fragmentContext.onTimeChange(previousMinute);
                },child : lib12.Text(formattedMinute,{
                    style : minuteStyle})})});
    }
}

export class properties {
    private static __$_kPeriodGap : double;
    static get _kPeriodGap() : double { 
        if (this.__$_kPeriodGap===undefined) {
            this.__$_kPeriodGap = 8.0;
        }
        return this.__$_kPeriodGap;
    }
    static set _kPeriodGap(__$value : double)  { 
        this.__$_kPeriodGap = __$value;
    }

    private static __$_kTwoPi : double;
    static get _kTwoPi() : double { 
        if (this.__$_kTwoPi===undefined) {
            this.__$_kTwoPi = 2 * math.pi;
        }
        return this.__$_kTwoPi;
    }
    static set _kTwoPi(__$value : double)  { 
        this.__$_kTwoPi = __$value;
    }

    private static __$_kVibrateCommitDelay : core.DartDuration;
    static get _kVibrateCommitDelay() : core.DartDuration { 
        if (this.__$_kVibrateCommitDelay===undefined) {
            this.__$_kVibrateCommitDelay = core.DartDuration({
                milliseconds : 100});
        }
        return this.__$_kVibrateCommitDelay;
    }
    static set _kVibrateCommitDelay(__$value : core.DartDuration)  { 
        this.__$_kVibrateCommitDelay = __$value;
    }

    private static __$_kTimePickerHeaderPortraitHeight : double;
    static get _kTimePickerHeaderPortraitHeight() : double { 
        if (this.__$_kTimePickerHeaderPortraitHeight===undefined) {
            this.__$_kTimePickerHeaderPortraitHeight = 96.0;
        }
        return this.__$_kTimePickerHeaderPortraitHeight;
    }
    static set _kTimePickerHeaderPortraitHeight(__$value : double)  { 
        this.__$_kTimePickerHeaderPortraitHeight = __$value;
    }

    private static __$_kTimePickerHeaderLandscapeWidth : double;
    static get _kTimePickerHeaderLandscapeWidth() : double { 
        if (this.__$_kTimePickerHeaderLandscapeWidth===undefined) {
            this.__$_kTimePickerHeaderLandscapeWidth = 168.0;
        }
        return this.__$_kTimePickerHeaderLandscapeWidth;
    }
    static set _kTimePickerHeaderLandscapeWidth(__$value : double)  { 
        this.__$_kTimePickerHeaderLandscapeWidth = __$value;
    }

    private static __$_kTimePickerWidthPortrait : double;
    static get _kTimePickerWidthPortrait() : double { 
        if (this.__$_kTimePickerWidthPortrait===undefined) {
            this.__$_kTimePickerWidthPortrait = 328.0;
        }
        return this.__$_kTimePickerWidthPortrait;
    }
    static set _kTimePickerWidthPortrait(__$value : double)  { 
        this.__$_kTimePickerWidthPortrait = __$value;
    }

    private static __$_kTimePickerWidthLandscape : double;
    static get _kTimePickerWidthLandscape() : double { 
        if (this.__$_kTimePickerWidthLandscape===undefined) {
            this.__$_kTimePickerWidthLandscape = 512.0;
        }
        return this.__$_kTimePickerWidthLandscape;
    }
    static set _kTimePickerWidthLandscape(__$value : double)  { 
        this.__$_kTimePickerWidthLandscape = __$value;
    }

    private static __$_kTimePickerHeightPortrait : double;
    static get _kTimePickerHeightPortrait() : double { 
        if (this.__$_kTimePickerHeightPortrait===undefined) {
            this.__$_kTimePickerHeightPortrait = 496.0;
        }
        return this.__$_kTimePickerHeightPortrait;
    }
    static set _kTimePickerHeightPortrait(__$value : double)  { 
        this.__$_kTimePickerHeightPortrait = __$value;
    }

    private static __$_kTimePickerHeightLandscape : double;
    static get _kTimePickerHeightLandscape() : double { 
        if (this.__$_kTimePickerHeightLandscape===undefined) {
            this.__$_kTimePickerHeightLandscape = 316.0;
        }
        return this.__$_kTimePickerHeightLandscape;
    }
    static set _kTimePickerHeightLandscape(__$value : double)  { 
        this.__$_kTimePickerHeightLandscape = __$value;
    }

    private static __$_kTimePickerHeightPortraitCollapsed : double;
    static get _kTimePickerHeightPortraitCollapsed() : double { 
        if (this.__$_kTimePickerHeightPortraitCollapsed===undefined) {
            this.__$_kTimePickerHeightPortraitCollapsed = 484.0;
        }
        return this.__$_kTimePickerHeightPortraitCollapsed;
    }
    static set _kTimePickerHeightPortraitCollapsed(__$value : double)  { 
        this.__$_kTimePickerHeightPortraitCollapsed = __$value;
    }

    private static __$_kTimePickerHeightLandscapeCollapsed : double;
    static get _kTimePickerHeightLandscapeCollapsed() : double { 
        if (this.__$_kTimePickerHeightLandscapeCollapsed===undefined) {
            this.__$_kTimePickerHeightLandscapeCollapsed = 304.0;
        }
        return this.__$_kTimePickerHeightLandscapeCollapsed;
    }
    static set _kTimePickerHeightLandscapeCollapsed(__$value : double)  { 
        this.__$_kTimePickerHeightLandscapeCollapsed = __$value;
    }

    private static __$_kDialAnimateDuration : core.DartDuration;
    static get _kDialAnimateDuration() : core.DartDuration { 
        if (this.__$_kDialAnimateDuration===undefined) {
            this.__$_kDialAnimateDuration = core.DartDuration({
                milliseconds : 200});
        }
        return this.__$_kDialAnimateDuration;
    }
    static set _kDialAnimateDuration(__$value : core.DartDuration)  { 
        this.__$_kDialAnimateDuration = __$value;
    }

    private static __$_kVerticalGap : double;
    static get _kVerticalGap() : double { 
        if (this.__$_kVerticalGap===undefined) {
            this.__$_kVerticalGap = 8.0;
        }
        return this.__$_kVerticalGap;
    }
    static set _kVerticalGap(__$value : double)  { 
        this.__$_kVerticalGap = __$value;
    }

}
