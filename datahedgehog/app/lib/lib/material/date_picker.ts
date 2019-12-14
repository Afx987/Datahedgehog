/** Library asset:datahedgehog_monitor/lib/lib/material/date_picker.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib6 from "./material_localizations";
import * as lib7 from "./theme";
import * as lib8 from "./theme_data";
import * as lib9 from "./text_theme";
import * as lib10 from "./colors";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib14 from "./feedback";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib18 from "./material";
import * as lib19 from "./ink_well";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/rendering/sliver_grid";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/rendering/sliver";
import * as math from "@dart2ts/dart/math";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/gestures/recognizer";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/widgets/gesture_detector";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/widgets/sliver";
import * as lib29 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_view";
import * as lib30 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib31 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib32 from "@dart2ts.packages/flutter/lib/src/widgets/page_view";
import * as lib33 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib34 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib35 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib36 from "@dart2ts.packages/flutter/lib/src/semantics/semantics_service";
import * as lib37 from "@dart2ts.packages/flutter/lib/src/widgets/notification_listener";
import * as lib38 from "./icons";
import * as lib39 from "@dart2ts.packages/flutter/lib/src/widgets/icon";
import * as lib40 from "./icon_button";
import * as lib41 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as lib42 from "@dart2ts.packages/flutter/lib/src/semantics/semantics";
import * as lib43 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_controller";
import * as lib44 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib45 from "@dart2ts.packages/flutter/lib/src/services/haptic_feedback";
import * as lib46 from "@dart2ts.packages/flutter/lib/src/widgets/navigator";
import * as lib47 from "./flat_button";
import * as lib48 from "./button_bar";
import * as lib49 from "./button_theme";
import * as lib50 from "@dart2ts.packages/flutter/lib/src/widgets/orientation_builder";
import * as lib51 from "./dialog";
import * as lib52 from "@dart2ts.packages/flutter/lib/src/widgets/localizations";

export var showDatePicker : (_namedArguments? : {context? : lib3.BuildContext,initialDate? : core.DartDateTime,firstDate? : core.DartDateTime,lastDate? : core.DartDateTime,selectableDayPredicate? : (day : core.DartDateTime) => boolean,initialDatePickerMode? : DatePickerMode,locale? : any,textDirection? : any,builder? : (context : lib3.BuildContext,child : lib3.Widget) => lib3.Widget}) => async.Future<core.DartDateTime> = (_namedArguments? : {context? : lib3.BuildContext,initialDate? : core.DartDateTime,firstDate? : core.DartDateTime,lastDate? : core.DartDateTime,selectableDayPredicate? : (day : core.DartDateTime) => boolean,initialDatePickerMode? : DatePickerMode,locale? : any,textDirection? : any,builder? : (context : lib3.BuildContext,child : lib3.Widget) => lib3.Widget}) => new async.Future.fromPromise(( async () : Promise<core.DartDateTime> =>  {
    let {context,initialDate,firstDate,lastDate,selectableDayPredicate,initialDatePickerMode,locale,textDirection,builder} = Object.assign({
        "initialDatePickerMode" : DatePickerMode.day}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (initialDate != null); */;
    /* TODO (AssertStatementImpl) : assert (firstDate != null); */;
    /* TODO (AssertStatementImpl) : assert (lastDate != null); */;
    /* TODO (AssertStatementImpl) : assert (!initialDate.isBefore(firstDate), 'initialDate must be on or after firstDate'); */;
    /* TODO (AssertStatementImpl) : assert (!initialDate.isAfter(lastDate), 'initialDate must be on or before lastDate'); */;
    /* TODO (AssertStatementImpl) : assert (!firstDate.isAfter(lastDate), 'lastDate must be on or after firstDate'); */;
    /* TODO (AssertStatementImpl) : assert (selectableDayPredicate == null || selectableDayPredicate(initialDate), 'Provided initialDate must satisfy provided selectableDayPredicate'); */;
    /* TODO (AssertStatementImpl) : assert (initialDatePickerMode != null, 'initialDatePickerMode must not be null'); */;
    /* TODO (AssertStatementImpl) : assert (context != null); */;
    /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
    let child : lib3.Widget = _DatePickerDialog({
        initialDate : initialDate,firstDate : firstDate,lastDate : lastDate,selectableDayPredicate : selectableDayPredicate,initialDatePickerMode : initialDatePickerMode});
    if (textDirection != null) {
        child = lib16.Directionality({
            textDirection : textDirection,child : child});
    }
    if (locale != null) {
        child = lib52.Localizations.override({
            context : context,locale : locale,child : child});
    }
    return await lib51.showDialog({
        context : context,builder : (context : lib3.BuildContext) =>  {
            return op(Op.EQUALS,builder,null) ? child : builder(context,child);
        }});
})());
export enum DatePickerMode {
    day,
    year
}

export namespace _DatePickerHeader {
    export type Constructors = lib3.StatelessWidget.Constructors | '_DatePickerHeader';
    export type Interface = Omit<_DatePickerHeader, Constructors>;
}
@DartClass
export class _DatePickerHeader extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,selectedDate? : core.DartDateTime,mode? : DatePickerMode,onModeChanged? : <T>(value : DatePickerMode) => void,orientation? : lib5.Orientation}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DatePickerHeader(_namedArguments? : {key? : lib4.Key,selectedDate? : core.DartDateTime,mode? : DatePickerMode,onModeChanged? : <T>(value : DatePickerMode) => void,orientation? : lib5.Orientation}) {
        let {key,selectedDate,mode,onModeChanged,orientation} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.selectedDate = selectedDate;
        this.mode = mode;
        this.onModeChanged = onModeChanged;
        this.orientation = orientation;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    selectedDate : core.DartDateTime;

    mode : DatePickerMode;

    onModeChanged : <T>(value : DatePickerMode) => void;

    orientation : lib5.Orientation;

    _handleChangeMode(value : DatePickerMode) : any {
        if (value != this.mode) this.onModeChanged(value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let localizations : lib6.MaterialLocalizations = lib6.MaterialLocalizations.of(context);
        let themeData : lib8.ThemeData = lib7.Theme.of(context);
        let headerTextTheme : lib9.TextTheme = themeData.primaryTextTheme;
        let dayColor : any;
        let yearColor : any;
        switch (themeData.primaryColorBrightness) {
            case Brightness.light:
                dayColor = op(Op.EQUALS,this.mode,DatePickerMode.day) ? lib10.Colors.black87 : lib10.Colors.black54;
                yearColor = op(Op.EQUALS,this.mode,DatePickerMode.year) ? lib10.Colors.black87 : lib10.Colors.black54;
                break;
            case Brightness.dark:
                dayColor = op(Op.EQUALS,this.mode,DatePickerMode.day) ? lib10.Colors.white : lib10.Colors.white70;
                yearColor = op(Op.EQUALS,this.mode,DatePickerMode.year) ? lib10.Colors.white : lib10.Colors.white70;
                break;
        }
        let dayStyle : lib11.TextStyle = headerTextTheme.display1.copyWith({
            color : dayColor,height : 1.4});
        let yearStyle : lib11.TextStyle = headerTextTheme.subhead.copyWith({
            color : yearColor,height : 1.4});
        let backgroundColor : any;
        switch (themeData.brightness) {
            case Brightness.light:
                backgroundColor = themeData.primaryColor;
                break;
            case Brightness.dark:
                backgroundColor = themeData.backgroundColor;
                break;
        }
        let width : double;
        let height : double;
        let padding : lib12.EdgeInsets;
        let mainAxisAlignment : lib13.MainAxisAlignment;
        switch (this.orientation) {
            case lib5.Orientation.portrait:
                height = properties._kDatePickerHeaderPortraitHeight;
                padding = new lib12.EdgeInsets.symmetric({
                    horizontal : 16.0});
                mainAxisAlignment = lib13.MainAxisAlignment.center;
                break;
            case lib5.Orientation.landscape:
                width = properties._kDatePickerHeaderLandscapeWidth;
                padding = new lib12.EdgeInsets.all(8.0);
                mainAxisAlignment = lib13.MainAxisAlignment.start;
                break;
        }
        let yearButton : lib3.Widget = lib16.IgnorePointer({
            ignoring : this.mode != DatePickerMode.day,ignoringSemantics : false,child : _DateHeaderButton({
                color : backgroundColor,onTap : lib14.Feedback.wrapForTap(() =>  {
                    return this._handleChangeMode(DatePickerMode.year);
                },context),child : lib16.Semantics({
                    selected : op(Op.EQUALS,this.mode,DatePickerMode.year),child : lib15.Text(localizations.formatYear(this.selectedDate),{
                        style : yearStyle})})})});
        let dayButton : lib3.Widget = lib16.IgnorePointer({
            ignoring : op(Op.EQUALS,this.mode,DatePickerMode.day),ignoringSemantics : false,child : _DateHeaderButton({
                color : backgroundColor,onTap : lib14.Feedback.wrapForTap(() =>  {
                    return this._handleChangeMode(DatePickerMode.day);
                },context),child : lib16.Semantics({
                    selected : op(Op.EQUALS,this.mode,DatePickerMode.day),child : lib15.Text(localizations.formatMediumDate(this.selectedDate),{
                        style : dayStyle})})})});
        return lib17.Container({
            width : width,height : height,padding : padding,color : backgroundColor,child : lib16.Column({
                mainAxisAlignment : mainAxisAlignment,crossAxisAlignment : lib13.CrossAxisAlignment.start,children : new core.DartList.literal<lib3.Widget>(yearButton,dayButton)})});
    }
}

export namespace _DateHeaderButton {
    export type Constructors = lib3.StatelessWidget.Constructors | '_DateHeaderButton';
    export type Interface = Omit<_DateHeaderButton, Constructors>;
}
@DartClass
export class _DateHeaderButton extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,onTap? : any,color? : any,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DateHeaderButton(_namedArguments? : {key? : lib4.Key,onTap? : any,color? : any,child? : lib3.Widget}) {
        let {key,onTap,color,child} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.onTap = onTap;
        this.color = color;
        this.child = child;
    }
    onTap : any;

    color : any;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let theme : lib8.ThemeData = lib7.Theme.of(context);
        return lib18.Material({
            type : lib18.MaterialType.button,color : this.color,child : lib19.InkWell({
                borderRadius : lib18.properties.kMaterialEdges.get(lib18.MaterialType.button),highlightColor : theme.highlightColor,splashColor : theme.splashColor,onTap : this.onTap,child : lib17.Container({
                    padding : new lib12.EdgeInsets.symmetric({
                        horizontal : 8.0}),child : this.child})})});
    }
}

export namespace _DayPickerGridDelegate {
    export type Constructors = lib20.SliverGridDelegate.Constructors | '_DayPickerGridDelegate';
    export type Interface = Omit<_DayPickerGridDelegate, Constructors>;
}
@DartClass
export class _DayPickerGridDelegate extends lib20.SliverGridDelegate {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DayPickerGridDelegate() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLayout(constraints : lib21.SliverConstraints) : lib20.SliverGridLayout {
        let columnCount : number = core.DartDateTime.daysPerWeek;
        let tileWidth : double = constraints.crossAxisExtent / columnCount;
        let tileHeight : double = math.min(properties._kDayPickerRowHeight,constraints.viewportMainAxisExtent / (properties._kMaxDayPickerRowCount + 1));
        return lib20.SliverGridRegularTileLayout({
            crossAxisCount : columnCount,mainAxisStride : tileHeight,crossAxisStride : tileWidth,childMainAxisExtent : tileHeight,childCrossAxisExtent : tileWidth,reverseCrossAxis : lib23.axisDirectionIsReversed(constraints.crossAxisDirection)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRelayout(oldDelegate : _DayPickerGridDelegate) : boolean {
        return false;
    }
}

export namespace DayPicker {
    export type Constructors = lib3.StatelessWidget.Constructors | 'DayPicker' | 'isAfter' | 'isAfter' | 'isAtSameMomentAs';
    export type Interface = Omit<DayPicker, Constructors>;
}
@DartClass
export class DayPicker extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,selectedDate? : core.DartDateTime,currentDate? : core.DartDateTime,onChanged? : <T>(value : core.DartDateTime) => void,firstDate? : core.DartDateTime,lastDate? : core.DartDateTime,displayedMonth? : core.DartDateTime,selectableDayPredicate? : (day : core.DartDateTime) => boolean,dragStartBehavior? : lib24.DragStartBehavior}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DayPicker(_namedArguments? : {key? : lib4.Key,selectedDate? : core.DartDateTime,currentDate? : core.DartDateTime,onChanged? : <T>(value : core.DartDateTime) => void,firstDate? : core.DartDateTime,lastDate? : core.DartDateTime,displayedMonth? : core.DartDateTime,selectableDayPredicate? : (day : core.DartDateTime) => boolean,dragStartBehavior? : lib24.DragStartBehavior}) {
        let {key,selectedDate,currentDate,onChanged,firstDate,lastDate,displayedMonth,selectableDayPredicate,dragStartBehavior} = Object.assign({
            "dragStartBehavior" : lib24.DragStartBehavior.down}, _namedArguments );
        this.assert = assert;
        this.selectedDate = selectedDate;
        this.currentDate = currentDate;
        this.onChanged = onChanged;
        this.firstDate = firstDate;
        this.lastDate = lastDate;
        this.displayedMonth = displayedMonth;
        this.selectableDayPredicate = selectableDayPredicate;
        this.dragStartBehavior = dragStartBehavior;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    @namedConstructor
    isAfter(lastDate : any) {
    }
    static isAfter : new(lastDate : any) => DayPicker;

    @namedConstructor
    isAfter(firstDate : any) {
    }
    static isAfter : new(firstDate : any) => DayPicker;

    @namedConstructor
    isAtSameMomentAs(firstDate : any) {
    }
    static isAtSameMomentAs : new(firstDate : any) => DayPicker;

     : any;

     : any;

    selectedDate : core.DartDateTime;

    currentDate : core.DartDateTime;

    onChanged : <T>(value : core.DartDateTime) => void;

    firstDate : core.DartDateTime;

    lastDate : core.DartDateTime;

    displayedMonth : core.DartDateTime;

    selectableDayPredicate : (day : core.DartDateTime) => boolean;

    dragStartBehavior : lib24.DragStartBehavior;

    _getDayHeaders(headerStyle : lib11.TextStyle,localizations : lib6.MaterialLocalizations) : core.DartList<lib3.Widget> {
        let result : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>();
        for(let i : number = localizations.firstDayOfWeekIndex; true; i = (i + 1) % 7){
            let weekday : string = localizations.narrowWeekdays[i];
            result.add(lib16.ExcludeSemantics({
                child : lib16.Center({
                    child : lib15.Text(weekday,{
                        style : headerStyle})})}));
            if (i == (localizations.firstDayOfWeekIndex - 1) % 7) break;
        }
        return result;
    }
    private static __$_daysInMonth : core.DartList<number>;
    static get _daysInMonth() : core.DartList<number> { 
        if (this.__$_daysInMonth===undefined) {
            this.__$_daysInMonth = new core.DartList.literal<number>(31,-1,31,30,31,30,31,31,30,31,30,31);
        }
        return this.__$_daysInMonth;
    }

    static getDaysInMonth(year : number,month : number) : number {
        if (month == core.DartDateTime.february) {
            let isLeapYear : boolean = (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0);
            if (isLeapYear) return 29;
            return 28;
        }
        return DayPicker._daysInMonth[month - 1];
    }
    _computeFirstDayOffset(year : number,month : number,localizations : lib6.MaterialLocalizations) : number {
        let weekdayFromMonday : number = op(Op.MINUS,core.DartDateTime(year,month).weekday,1);
        let firstDayOfWeekFromSunday : number = localizations.firstDayOfWeekIndex;
        let firstDayOfWeekFromMonday : number = (firstDayOfWeekFromSunday - 1) % 7;
        return (weekdayFromMonday - firstDayOfWeekFromMonday) % 7;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let themeData : lib8.ThemeData = lib7.Theme.of(context);
        let localizations : lib6.MaterialLocalizations = lib6.MaterialLocalizations.of(context);
        let year : number = this.displayedMonth.year;
        let month : number = this.displayedMonth.month;
        let daysInMonth : number = DayPicker.getDaysInMonth(year,month);
        let firstDayOffset : number = this._computeFirstDayOffset(year,month,localizations);
        let labels : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>();
        labels.addAll(this._getDayHeaders(themeData.textTheme.caption,localizations));
        for(let i : number = 0; true; i += 1){
            let day : number = i - firstDayOffset + 1;
            if (day > daysInMonth) break;
            if (day < 1) {
                labels.add(lib17.Container());
            }else {
                let dayToBuild : core.DartDateTime = core.DartDateTime(year,month,day);
                let disabled : boolean = dayToBuild.isAfter(this.lastDate) || dayToBuild.isBefore(this.firstDate) || (this.selectableDayPredicate != null && !this.selectableDayPredicate(dayToBuild));
                let decoration : lib25.BoxDecoration;
                let itemStyle : lib11.TextStyle = themeData.textTheme.body1;
                let isSelectedDay : boolean = this.selectedDate.year == year && this.selectedDate.month == month && this.selectedDate.day == day;
                if (isSelectedDay) {
                    itemStyle = themeData.accentTextTheme.body2;
                    decoration = lib25.BoxDecoration({
                        color : themeData.accentColor,shape : lib26.BoxShape.circle});
                }else if (disabled) {
                    itemStyle = themeData.textTheme.body1.copyWith({
                        color : themeData.disabledColor});
                }else if (this.currentDate.year == year && this.currentDate.month == month && this.currentDate.day == day) {
                    itemStyle = themeData.textTheme.body2.copyWith({
                        color : themeData.accentColor});
                }
                let dayWidget : lib3.Widget = lib17.Container({
                    decoration : decoration,child : lib16.Center({
                        child : lib16.Semantics({
                            label : `${localizations.formatDecimal(day)}, ${localizations.formatFullDate(dayToBuild)}`,selected : isSelectedDay,child : lib16.ExcludeSemantics({
                                child : lib15.Text(localizations.formatDecimal(day),{
                                    style : itemStyle})})})})});
                if (!disabled) {
                    dayWidget = lib27.GestureDetector({
                        behavior : HitTestBehavior.opaque,onTap : () =>  {
                            this.onChanged(dayToBuild);
                        },child : dayWidget,dragStartBehavior : this.dragStartBehavior});
                }
                labels.add(dayWidget);
            }
        }
        return lib16.Padding({
            padding : new lib12.EdgeInsets.symmetric({
                horizontal : 8.0}),child : lib16.Column({
                children : new core.DartList.literal<lib3.Widget>(lib17.Container({
                    height : properties._kDayPickerRowHeight,child : lib16.Center({
                        child : lib16.ExcludeSemantics({
                            child : lib15.Text(localizations.formatMonthYear(this.displayedMonth),{
                                style : themeData.textTheme.subhead})})})}),lib16.Flexible({
                    child : lib29.GridView.custom({
                        gridDelegate : properties._kDayPickerGridDelegate,childrenDelegate : lib28.SliverChildListDelegate(labels,{
                            addRepaintBoundaries : false})})}))})});
    }
}

export namespace MonthPicker {
    export type Constructors = lib3.StatefulWidget.Constructors | 'MonthPicker' | 'isAfter' | 'isAfter' | 'isAtSameMomentAs';
    export type Interface = Omit<MonthPicker, Constructors>;
}
@DartClass
export class MonthPicker extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,selectedDate? : core.DartDateTime,onChanged? : <T>(value : core.DartDateTime) => void,firstDate? : core.DartDateTime,lastDate? : core.DartDateTime,selectableDayPredicate? : (day : core.DartDateTime) => boolean,dragStartBehavior? : lib24.DragStartBehavior}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MonthPicker(_namedArguments? : {key? : lib4.Key,selectedDate? : core.DartDateTime,onChanged? : <T>(value : core.DartDateTime) => void,firstDate? : core.DartDateTime,lastDate? : core.DartDateTime,selectableDayPredicate? : (day : core.DartDateTime) => boolean,dragStartBehavior? : lib24.DragStartBehavior}) {
        let {key,selectedDate,onChanged,firstDate,lastDate,selectableDayPredicate,dragStartBehavior} = Object.assign({
            "dragStartBehavior" : lib24.DragStartBehavior.down}, _namedArguments );
        this.assert = assert;
        this.selectedDate = selectedDate;
        this.onChanged = onChanged;
        this.firstDate = firstDate;
        this.lastDate = lastDate;
        this.selectableDayPredicate = selectableDayPredicate;
        this.dragStartBehavior = dragStartBehavior;
    }
     : any;

     : any;

    @namedConstructor
    isAfter(lastDate : any) {
    }
    static isAfter : new(lastDate : any) => MonthPicker;

    @namedConstructor
    isAfter(firstDate : any) {
    }
    static isAfter : new(firstDate : any) => MonthPicker;

    @namedConstructor
    isAtSameMomentAs(firstDate : any) {
    }
    static isAtSameMomentAs : new(firstDate : any) => MonthPicker;

     : any;

     : any;

    selectedDate : core.DartDateTime;

    onChanged : <T>(value : core.DartDateTime) => void;

    firstDate : core.DartDateTime;

    lastDate : core.DartDateTime;

    selectableDayPredicate : (day : core.DartDateTime) => boolean;

    dragStartBehavior : lib24.DragStartBehavior;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _MonthPickerState {
        return _MonthPickerState();
    }
}

export namespace _MonthPickerState {
    export type Constructors = '_MonthPickerState';
    export type Interface = Omit<_MonthPickerState, Constructors>;
}
@DartClass
@With(any)
export class _MonthPickerState extends any implements any.Interface {
    private static __$_chevronOpacityTween : lib31.Animatable<double>;
    static get _chevronOpacityTween() : lib31.Animatable<double> { 
        if (this.__$_chevronOpacityTween===undefined) {
            this.__$_chevronOpacityTween = lib31.Tween({
                begin : 1.0,end : 0.0}).chain(lib31.CurveTween({
                curve : lib30.Curves.easeInOut}));
        }
        return this.__$_chevronOpacityTween;
    }
    static set _chevronOpacityTween(__$value : lib31.Animatable<double>)  { 
        this.__$_chevronOpacityTween = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        let monthPage : number = _MonthPickerState._monthDelta(widget.firstDate,widget.selectedDate);
        this._dayPickerController = lib32.PageController({
            initialPage : monthPage});
        this._handleMonthPageChanged(monthPage);
        this._updateCurrentDate();
        this._chevronOpacityController = lib33.AnimationController({
            duration : new core.DartDuration({
                milliseconds : 250}),vsync : this});
        this._chevronOpacityAnimation = this._chevronOpacityController.drive(_MonthPickerState._chevronOpacityTween);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : MonthPicker) : any {
        super.didUpdateWidget(oldWidget);
        if (widget.selectedDate != oldWidget.selectedDate) {
            let monthPage : number = _MonthPickerState._monthDelta(widget.firstDate,widget.selectedDate);
            this._dayPickerController = lib32.PageController({
                initialPage : monthPage});
            this._handleMonthPageChanged(monthPage);
        }
    }
    localizations : lib6.MaterialLocalizations;

    textDirection : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        this.localizations = lib6.MaterialLocalizations.of(lib34.properties.context);
        this.textDirection = lib16.Directionality.of(lib34.properties.context);
    }
    _todayDate : core.DartDateTime;

    _currentDisplayedMonthDate : core.DartDateTime;

    _timer : async.DartTimer;

    _dayPickerController : lib32.PageController;

    _chevronOpacityController : lib33.AnimationController;

    _chevronOpacityAnimation : lib35.Animation<double>;

    _updateCurrentDate() : any {
        this._todayDate = core.DartDateTime.now();
        let tomorrow : core.DartDateTime = core.DartDateTime(this._todayDate.year,this._todayDate.month,this._todayDate.day + 1);
        let timeUntilTomorrow : core.DartDuration = tomorrow.difference(this._todayDate);
        timeUntilTomorrow += new core.DartDuration({
            seconds : 1});
        ((_725_)=>(!!_725_)?_725_.cancel():null)(this._timer);
        this._timer = async.DartTimer(timeUntilTomorrow,() =>  {
            setState(() =>  {
                this._updateCurrentDate();
            });
        });
    }
    static _monthDelta(startDate : core.DartDateTime,endDate : core.DartDateTime) : number {
        return (endDate.year - startDate.year) * 12 + endDate.month - startDate.month;
    }
    _addMonthsToMonthDate(monthDate : core.DartDateTime,monthsToAdd : number) : core.DartDateTime {
        return core.DartDateTime(monthDate.year + op(Op.QUOTIENT,monthsToAdd,12),monthDate.month + monthsToAdd % 12);
    }
    _buildItems(context : lib3.BuildContext,index : number) : lib3.Widget {
        let month : core.DartDateTime = this._addMonthsToMonthDate(widget.firstDate,index);
        return DayPicker({
            key : lib4.ValueKey(month),selectedDate : widget.selectedDate,currentDate : this._todayDate,onChanged : widget.onChanged,firstDate : widget.firstDate,lastDate : widget.lastDate,displayedMonth : month,selectableDayPredicate : widget.selectableDayPredicate,dragStartBehavior : widget.dragStartBehavior});
    }
    _handleNextMonth() : any {
        if (!this._isDisplayingLastMonth) {
            lib36.SemanticsService.announce(this.localizations.formatMonthYear(this._nextMonthDate),this.textDirection);
            this._dayPickerController.nextPage({
                duration : properties._kMonthScrollDuration,curve : lib30.Curves.ease});
        }
    }
    _handlePreviousMonth() : any {
        if (!this._isDisplayingFirstMonth) {
            lib36.SemanticsService.announce(this.localizations.formatMonthYear(this._previousMonthDate),this.textDirection);
            this._dayPickerController.previousPage({
                duration : properties._kMonthScrollDuration,curve : lib30.Curves.ease});
        }
    }
    get _isDisplayingFirstMonth() : boolean {
        return !this._currentDisplayedMonthDate.isAfter(core.DartDateTime(widget.firstDate.year,widget.firstDate.month));
    }
    get _isDisplayingLastMonth() : boolean {
        return !this._currentDisplayedMonthDate.isBefore(core.DartDateTime(widget.lastDate.year,widget.lastDate.month));
    }
    _previousMonthDate : core.DartDateTime;

    _nextMonthDate : core.DartDateTime;

    _handleMonthPageChanged(monthPage : number) : any {
        setState(() =>  {
            this._previousMonthDate = this._addMonthsToMonthDate(widget.firstDate,monthPage - 1);
            this._currentDisplayedMonthDate = this._addMonthsToMonthDate(widget.firstDate,monthPage);
            this._nextMonthDate = this._addMonthsToMonthDate(widget.firstDate,monthPage + 1);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib16.SizedBox({
            width : properties._kMonthPickerPortraitWidth,height : properties._kMaxDayPickerHeight,child : lib16.Stack({
                children : new core.DartList.literal<lib3.Widget>(lib16.Semantics({
                    sortKey : _MonthPickerSortKey.calendar,child : lib37.NotificationListener({
                        onNotification : (_ : any) =>  {
                            this._chevronOpacityController.forward();
                            return false;
                        },child : lib37.NotificationListener({
                            onNotification : (_ : any) =>  {
                                this._chevronOpacityController.reverse();
                                return false;
                            },child : lib32.PageView.builder({
                                dragStartBehavior : widget.dragStartBehavior,key : lib4.ValueKey(widget.selectedDate),controller : this._dayPickerController,scrollDirection : lib23.Axis.horizontal,itemCount : _MonthPickerState._monthDelta(widget.firstDate,widget.lastDate) + 1,itemBuilder : this._buildItems.bind(this),onPageChanged : this._handleMonthPageChanged.bind(this)})})})}),lib16.PositionedDirectional({
                    top : 0.0,start : 8.0,child : lib16.Semantics({
                        sortKey : _MonthPickerSortKey.previousMonth,child : lib41.FadeTransition({
                            opacity : this._chevronOpacityAnimation,child : lib40.IconButton({
                                icon : new lib39.Icon(lib38.Icons.chevron_left),tooltip : this._isDisplayingFirstMonth ? null : `${this.localizations.previousMonthTooltip} ${this.localizations.formatMonthYear(this._previousMonthDate)}`,onPressed : this._isDisplayingFirstMonth ? null : this._handlePreviousMonth.bind(this)})})})}),lib16.PositionedDirectional({
                    top : 0.0,end : 8.0,child : lib16.Semantics({
                        sortKey : _MonthPickerSortKey.nextMonth,child : lib41.FadeTransition({
                            opacity : this._chevronOpacityAnimation,child : lib40.IconButton({
                                icon : new lib39.Icon(lib38.Icons.chevron_right),tooltip : this._isDisplayingLastMonth ? null : `${this.localizations.nextMonthTooltip} ${this.localizations.formatMonthYear(this._nextMonthDate)}`,onPressed : this._isDisplayingLastMonth ? null : this._handleNextMonth.bind(this)})})})}))})});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        ((_726_)=>(!!_726_)?_726_.cancel():null)(this._timer);
        ((_727_)=>(!!_727_)?_727_.dispose():null)(this._dayPickerController);
        super.dispose();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MonthPickerState() {
    }
}

export namespace _MonthPickerSortKey {
    export type Constructors = lib42.OrdinalSortKey.Constructors | '_MonthPickerSortKey';
    export type Interface = Omit<_MonthPickerSortKey, Constructors>;
}
@DartClass
export class _MonthPickerSortKey extends lib42.OrdinalSortKey {
    constructor(order : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MonthPickerSortKey(order : double) {
        super.OrdinalSortKey(order);
    }
    private static __$previousMonth : _MonthPickerSortKey;
    static get previousMonth() : _MonthPickerSortKey { 
        if (this.__$previousMonth===undefined) {
            this.__$previousMonth = _MonthPickerSortKey(1.0);
        }
        return this.__$previousMonth;
    }

    private static __$nextMonth : _MonthPickerSortKey;
    static get nextMonth() : _MonthPickerSortKey { 
        if (this.__$nextMonth===undefined) {
            this.__$nextMonth = _MonthPickerSortKey(2.0);
        }
        return this.__$nextMonth;
    }

    private static __$calendar : _MonthPickerSortKey;
    static get calendar() : _MonthPickerSortKey { 
        if (this.__$calendar===undefined) {
            this.__$calendar = _MonthPickerSortKey(3.0);
        }
        return this.__$calendar;
    }

}

export namespace YearPicker {
    export type Constructors = lib3.StatefulWidget.Constructors | 'YearPicker' | 'isAfter';
    export type Interface = Omit<YearPicker, Constructors>;
}
@DartClass
export class YearPicker extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,selectedDate? : core.DartDateTime,onChanged? : <T>(value : core.DartDateTime) => void,firstDate? : core.DartDateTime,lastDate? : core.DartDateTime,dragStartBehavior? : lib24.DragStartBehavior}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    YearPicker(_namedArguments? : {key? : lib4.Key,selectedDate? : core.DartDateTime,onChanged? : <T>(value : core.DartDateTime) => void,firstDate? : core.DartDateTime,lastDate? : core.DartDateTime,dragStartBehavior? : lib24.DragStartBehavior}) {
        let {key,selectedDate,onChanged,firstDate,lastDate,dragStartBehavior} = Object.assign({
            "dragStartBehavior" : lib24.DragStartBehavior.down}, _namedArguments );
        this.assert = assert;
        this.selectedDate = selectedDate;
        this.onChanged = onChanged;
        this.firstDate = firstDate;
        this.lastDate = lastDate;
        this.dragStartBehavior = dragStartBehavior;
    }
     : any;

     : any;

    @namedConstructor
    isAfter(lastDate : any) {
    }
    static isAfter : new(lastDate : any) => YearPicker;

     : any;

     : any;

    selectedDate : core.DartDateTime;

    onChanged : <T>(value : core.DartDateTime) => void;

    firstDate : core.DartDateTime;

    lastDate : core.DartDateTime;

    dragStartBehavior : lib24.DragStartBehavior;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _YearPickerState {
        return _YearPickerState();
    }
}

export namespace _YearPickerState {
    export type Constructors = '_YearPickerState';
    export type Interface = Omit<_YearPickerState, Constructors>;
}
@DartClass
export class _YearPickerState extends any {
    private static __$_itemExtent : double;
    static get _itemExtent() : double { 
        if (this.__$_itemExtent===undefined) {
            this.__$_itemExtent = 50.0;
        }
        return this.__$_itemExtent;
    }

    scrollController : lib43.ScrollController;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this.scrollController = lib43.ScrollController({
            initialScrollOffset : op(Op.TIMES,(op(Op.MINUS,widget.selectedDate.year,widget.firstDate.year)),_YearPickerState._itemExtent)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        let themeData : lib8.ThemeData = lib7.Theme.of(context);
        let style : lib11.TextStyle = themeData.textTheme.body1;
        return lib29.ListView.builder({
            dragStartBehavior : widget.dragStartBehavior,controller : this.scrollController,itemExtent : _YearPickerState._itemExtent,itemCount : op(Op.PLUS,op(Op.MINUS,widget.lastDate.year,widget.firstDate.year),1),itemBuilder : (context : lib3.BuildContext,index : number) =>  {
                let year : number = op(Op.PLUS,widget.firstDate.year,index);
                let isSelected : boolean = year == widget.selectedDate.year;
                let itemStyle : lib11.TextStyle = isSelected ? themeData.textTheme.headline.copyWith({
                    color : themeData.accentColor}) : style;
                return lib19.InkWell({
                    key : lib4.ValueKey(year),onTap : () =>  {
                        widget.onChanged(core.DartDateTime(year,widget.selectedDate.month,widget.selectedDate.day));
                    },child : lib16.Center({
                        child : lib16.Semantics({
                            selected : isSelected,child : lib15.Text(new core.DartInt(year).toString(),{
                                style : itemStyle})})})});
            }});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _YearPickerState() {
    }
}

export namespace _DatePickerDialog {
    export type Constructors = lib3.StatefulWidget.Constructors | '_DatePickerDialog';
    export type Interface = Omit<_DatePickerDialog, Constructors>;
}
@DartClass
export class _DatePickerDialog extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,initialDate? : core.DartDateTime,firstDate? : core.DartDateTime,lastDate? : core.DartDateTime,selectableDayPredicate? : (day : core.DartDateTime) => boolean,initialDatePickerMode? : DatePickerMode}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DatePickerDialog(_namedArguments? : {key? : lib4.Key,initialDate? : core.DartDateTime,firstDate? : core.DartDateTime,lastDate? : core.DartDateTime,selectableDayPredicate? : (day : core.DartDateTime) => boolean,initialDatePickerMode? : DatePickerMode}) {
        let {key,initialDate,firstDate,lastDate,selectableDayPredicate,initialDatePickerMode} = Object.assign({
        }, _namedArguments );
        super.StatefulWidget({
            key : key});
        this.initialDate = initialDate;
        this.firstDate = firstDate;
        this.lastDate = lastDate;
        this.selectableDayPredicate = selectableDayPredicate;
        this.initialDatePickerMode = initialDatePickerMode;
    }
    initialDate : core.DartDateTime;

    firstDate : core.DartDateTime;

    lastDate : core.DartDateTime;

    selectableDayPredicate : (day : core.DartDateTime) => boolean;

    initialDatePickerMode : DatePickerMode;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _DatePickerDialogState {
        return _DatePickerDialogState();
    }
}

export namespace _DatePickerDialogState {
    export type Constructors = '_DatePickerDialogState';
    export type Interface = Omit<_DatePickerDialogState, Constructors>;
}
@DartClass
export class _DatePickerDialogState extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._selectedDate = widget.initialDate;
        this._mode = widget.initialDatePickerMode;
    }
    _announcedInitialDate : boolean;

    localizations : lib6.MaterialLocalizations;

    textDirection : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        this.localizations = lib6.MaterialLocalizations.of(lib34.properties.context);
        this.textDirection = lib16.Directionality.of(lib34.properties.context);
        if (!this._announcedInitialDate) {
            this._announcedInitialDate = true;
            lib36.SemanticsService.announce(this.localizations.formatFullDate(this._selectedDate),this.textDirection);
        }
    }
    _selectedDate : core.DartDateTime;

    _mode : DatePickerMode;

    _pickerKey : lib3.GlobalKey<any>;

    _vibrate() : any {
        switch (lib7.Theme.of(lib34.properties.context).platform) {
            case lib44.TargetPlatform.android:
            case lib44.TargetPlatform.fuchsia:
                lib45.HapticFeedback.vibrate();
                break;
            case lib44.TargetPlatform.iOS:
                break;
        }
    }
    _handleModeChanged(mode : DatePickerMode) : any {
        this._vibrate();
        setState(() =>  {
            this._mode = mode;
            if (op(Op.EQUALS,this._mode,DatePickerMode.day)) {
                lib36.SemanticsService.announce(this.localizations.formatMonthYear(this._selectedDate),this.textDirection);
            }else {
                lib36.SemanticsService.announce(this.localizations.formatYear(this._selectedDate),this.textDirection);
            }
        });
    }
    _handleYearChanged(value : core.DartDateTime) : any {
        if (value.isBefore(widget.firstDate)) value = widget.firstDate;else if (value.isAfter(widget.lastDate)) value = widget.lastDate;
        if (op(Op.EQUALS,value,this._selectedDate)) return;
        this._vibrate();
        setState(() =>  {
            this._mode = DatePickerMode.day;
            this._selectedDate = value;
        });
    }
    _handleDayChanged(value : core.DartDateTime) : any {
        this._vibrate();
        setState(() =>  {
            this._selectedDate = value;
        });
    }
    _handleCancel() : any {
        lib46.Navigator.pop(lib34.properties.context);
    }
    _handleOk() : any {
        lib46.Navigator.pop(lib34.properties.context,this._selectedDate);
    }
    _buildPicker() : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (_mode != null); */;
        switch (this._mode) {
            case DatePickerMode.day:
                return MonthPicker({
                    key : this._pickerKey,selectedDate : this._selectedDate,onChanged : this._handleDayChanged.bind(this),firstDate : widget.firstDate,lastDate : widget.lastDate,selectableDayPredicate : widget.selectableDayPredicate});
            case DatePickerMode.year:
                return YearPicker({
                    key : this._pickerKey,selectedDate : this._selectedDate,onChanged : this._handleYearChanged.bind(this),firstDate : widget.firstDate,lastDate : widget.lastDate});
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let theme : lib8.ThemeData = lib7.Theme.of(context);
        let picker : lib3.Widget = lib16.Flexible({
            child : lib16.SizedBox({
                height : properties._kMaxDayPickerHeight,child : this._buildPicker()})});
        let actions : lib3.Widget = lib49.ButtonTheme.bar({
            child : lib48.ButtonBar({
                children : new core.DartList.literal<lib3.Widget>(lib47.FlatButton({
                    child : lib15.Text(this.localizations.cancelButtonLabel),onPressed : this._handleCancel.bind(this)}),lib47.FlatButton({
                    child : lib15.Text(this.localizations.okButtonLabel),onPressed : this._handleOk.bind(this)}))})});
        let dialog : lib51.Dialog = lib51.Dialog({
            child : lib50.OrientationBuilder({
                builder : (context : lib3.BuildContext,orientation : lib5.Orientation) =>  {
                    /* TODO (AssertStatementImpl) : assert (orientation != null); */;
                    let header : lib3.Widget = _DatePickerHeader({
                        selectedDate : this._selectedDate,mode : this._mode,onModeChanged : this._handleModeChanged.bind(this),orientation : orientation});
                    switch (orientation) {
                        case lib5.Orientation.portrait:
                            return lib16.SizedBox({
                                width : properties._kMonthPickerPortraitWidth,child : lib16.Column({
                                    mainAxisSize : lib13.MainAxisSize.min,crossAxisAlignment : lib13.CrossAxisAlignment.stretch,children : new core.DartList.literal<lib3.Widget>(header,lib17.Container({
                                        color : theme.dialogBackgroundColor,child : lib16.Column({
                                            mainAxisSize : lib13.MainAxisSize.min,crossAxisAlignment : lib13.CrossAxisAlignment.stretch,children : new core.DartList.literal<lib3.Widget>(picker,actions)})}))})});
                        case lib5.Orientation.landscape:
                            return lib16.SizedBox({
                                height : properties._kDatePickerLandscapeHeight,child : lib16.Row({
                                    mainAxisSize : lib13.MainAxisSize.min,crossAxisAlignment : lib13.CrossAxisAlignment.stretch,children : new core.DartList.literal<lib3.Widget>(header,lib16.Flexible({
                                        child : lib17.Container({
                                            width : properties._kMonthPickerLandscapeWidth,color : theme.dialogBackgroundColor,child : lib16.Column({
                                                mainAxisSize : lib13.MainAxisSize.min,crossAxisAlignment : lib13.CrossAxisAlignment.stretch,children : new core.DartList.literal<lib3.Widget>(picker,actions)})})}))})});
                    }
                    return null;
                }})});
        return lib7.Theme({
            data : theme.copyWith({
                dialogBackgroundColor : lib10.Colors.transparent}),child : dialog});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DatePickerDialogState() {
        this._announcedInitialDate = false;
        this._pickerKey = lib3.GlobalKey();
    }
}

export class properties {
    private static __$_kDatePickerHeaderPortraitHeight : double;
    static get _kDatePickerHeaderPortraitHeight() : double { 
        if (this.__$_kDatePickerHeaderPortraitHeight===undefined) {
            this.__$_kDatePickerHeaderPortraitHeight = 100.0;
        }
        return this.__$_kDatePickerHeaderPortraitHeight;
    }
    static set _kDatePickerHeaderPortraitHeight(__$value : double)  { 
        this.__$_kDatePickerHeaderPortraitHeight = __$value;
    }

    private static __$_kDatePickerHeaderLandscapeWidth : double;
    static get _kDatePickerHeaderLandscapeWidth() : double { 
        if (this.__$_kDatePickerHeaderLandscapeWidth===undefined) {
            this.__$_kDatePickerHeaderLandscapeWidth = 168.0;
        }
        return this.__$_kDatePickerHeaderLandscapeWidth;
    }
    static set _kDatePickerHeaderLandscapeWidth(__$value : double)  { 
        this.__$_kDatePickerHeaderLandscapeWidth = __$value;
    }

    private static __$_kMonthScrollDuration : core.DartDuration;
    static get _kMonthScrollDuration() : core.DartDuration { 
        if (this.__$_kMonthScrollDuration===undefined) {
            this.__$_kMonthScrollDuration = core.DartDuration({
                milliseconds : 200});
        }
        return this.__$_kMonthScrollDuration;
    }
    static set _kMonthScrollDuration(__$value : core.DartDuration)  { 
        this.__$_kMonthScrollDuration = __$value;
    }

    private static __$_kDayPickerRowHeight : double;
    static get _kDayPickerRowHeight() : double { 
        if (this.__$_kDayPickerRowHeight===undefined) {
            this.__$_kDayPickerRowHeight = 42.0;
        }
        return this.__$_kDayPickerRowHeight;
    }
    static set _kDayPickerRowHeight(__$value : double)  { 
        this.__$_kDayPickerRowHeight = __$value;
    }

    private static __$_kMaxDayPickerRowCount : number;
    static get _kMaxDayPickerRowCount() : number { 
        if (this.__$_kMaxDayPickerRowCount===undefined) {
            this.__$_kMaxDayPickerRowCount = 6;
        }
        return this.__$_kMaxDayPickerRowCount;
    }
    static set _kMaxDayPickerRowCount(__$value : number)  { 
        this.__$_kMaxDayPickerRowCount = __$value;
    }

    private static __$_kMaxDayPickerHeight : double;
    static get _kMaxDayPickerHeight() : double { 
        if (this.__$_kMaxDayPickerHeight===undefined) {
            this.__$_kMaxDayPickerHeight = properties._kDayPickerRowHeight * (properties._kMaxDayPickerRowCount + 2);
        }
        return this.__$_kMaxDayPickerHeight;
    }
    static set _kMaxDayPickerHeight(__$value : double)  { 
        this.__$_kMaxDayPickerHeight = __$value;
    }

    private static __$_kMonthPickerPortraitWidth : double;
    static get _kMonthPickerPortraitWidth() : double { 
        if (this.__$_kMonthPickerPortraitWidth===undefined) {
            this.__$_kMonthPickerPortraitWidth = 330.0;
        }
        return this.__$_kMonthPickerPortraitWidth;
    }
    static set _kMonthPickerPortraitWidth(__$value : double)  { 
        this.__$_kMonthPickerPortraitWidth = __$value;
    }

    private static __$_kMonthPickerLandscapeWidth : double;
    static get _kMonthPickerLandscapeWidth() : double { 
        if (this.__$_kMonthPickerLandscapeWidth===undefined) {
            this.__$_kMonthPickerLandscapeWidth = 344.0;
        }
        return this.__$_kMonthPickerLandscapeWidth;
    }
    static set _kMonthPickerLandscapeWidth(__$value : double)  { 
        this.__$_kMonthPickerLandscapeWidth = __$value;
    }

    private static __$_kDialogActionBarHeight : double;
    static get _kDialogActionBarHeight() : double { 
        if (this.__$_kDialogActionBarHeight===undefined) {
            this.__$_kDialogActionBarHeight = 52.0;
        }
        return this.__$_kDialogActionBarHeight;
    }
    static set _kDialogActionBarHeight(__$value : double)  { 
        this.__$_kDialogActionBarHeight = __$value;
    }

    private static __$_kDatePickerLandscapeHeight : double;
    static get _kDatePickerLandscapeHeight() : double { 
        if (this.__$_kDatePickerLandscapeHeight===undefined) {
            this.__$_kDatePickerLandscapeHeight = properties._kMaxDayPickerHeight + properties._kDialogActionBarHeight;
        }
        return this.__$_kDatePickerLandscapeHeight;
    }
    static set _kDatePickerLandscapeHeight(__$value : double)  { 
        this.__$_kDatePickerLandscapeHeight = __$value;
    }

    private static __$_kDayPickerGridDelegate : _DayPickerGridDelegate;
    static get _kDayPickerGridDelegate() : _DayPickerGridDelegate { 
        if (this.__$_kDayPickerGridDelegate===undefined) {
            this.__$_kDayPickerGridDelegate = _DayPickerGridDelegate();
        }
        return this.__$_kDayPickerGridDelegate;
    }
    static set _kDayPickerGridDelegate(__$value : _DayPickerGridDelegate)  { 
        this.__$_kDayPickerGridDelegate = __$value;
    }

}
