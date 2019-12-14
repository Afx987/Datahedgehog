/** Library asset:datahedgehog_monitor/lib/lib/cupertino/localizations.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/widgets/localizations";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/synchronous_future";

export enum DatePickerDateTimeOrder {
    date_time_dayPeriod,
    date_dayPeriod_time,
    time_dayPeriod_date,
    dayPeriod_time_date
}

export enum DatePickerDateOrder {
    dmy,
    mdy,
    ymd,
    ydm
}

export namespace CupertinoLocalizations {
    export type Constructors = 'CupertinoLocalizations';
    export type Interface = Omit<CupertinoLocalizations, Constructors>;
}
@DartClass
export class CupertinoLocalizations {
    @Abstract
    datePickerYear(yearIndex : number) : string{ throw 'abstract'}
    @Abstract
    datePickerMonth(monthIndex : number) : string{ throw 'abstract'}
    @Abstract
    datePickerDayOfMonth(dayIndex : number) : string{ throw 'abstract'}
    @Abstract
    datePickerMediumDate(date : core.DartDateTime) : string{ throw 'abstract'}
    @Abstract
    datePickerHour(hour : number) : string{ throw 'abstract'}
    @Abstract
    datePickerHourSemanticsLabel(hour : number) : string{ throw 'abstract'}
    @Abstract
    datePickerMinute(minute : number) : string{ throw 'abstract'}
    @Abstract
    datePickerMinuteSemanticsLabel(minute : number) : string{ throw 'abstract'}
    @AbstractProperty
    get datePickerDateOrder() : DatePickerDateOrder{ throw 'abstract'}
    @AbstractProperty
    get datePickerDateTimeOrder() : DatePickerDateTimeOrder{ throw 'abstract'}
    @AbstractProperty
    get anteMeridiemAbbreviation() : string{ throw 'abstract'}
    @AbstractProperty
    get postMeridiemAbbreviation() : string{ throw 'abstract'}
    @AbstractProperty
    get alertDialogLabel() : string{ throw 'abstract'}
    @Abstract
    timerPickerHour(hour : number) : string{ throw 'abstract'}
    @Abstract
    timerPickerMinute(minute : number) : string{ throw 'abstract'}
    @Abstract
    timerPickerSecond(second : number) : string{ throw 'abstract'}
    @Abstract
    timerPickerHourLabel(hour : number) : string{ throw 'abstract'}
    @Abstract
    timerPickerMinuteLabel(minute : number) : string{ throw 'abstract'}
    @Abstract
    timerPickerSecondLabel(second : number) : string{ throw 'abstract'}
    @AbstractProperty
    get cutButtonLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get copyButtonLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get pasteButtonLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get selectAllButtonLabel() : string{ throw 'abstract'}
    static of(context : lib3.BuildContext) : CupertinoLocalizations {
        return lib4.Localizations.of(context,CupertinoLocalizations);
    }
    constructor() {
    }
    @defaultConstructor
    CupertinoLocalizations() {
    }
}

export namespace _CupertinoLocalizationsDelegate {
    export type Constructors = lib4.LocalizationsDelegate.Constructors | '_CupertinoLocalizationsDelegate';
    export type Interface = Omit<_CupertinoLocalizationsDelegate, Constructors>;
}
@DartClass
export class _CupertinoLocalizationsDelegate extends lib4.LocalizationsDelegate<CupertinoLocalizations> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoLocalizationsDelegate() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSupported(locale : any) : boolean {
        return op(Op.EQUALS,locale.languageCode,'en');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    load(locale : any) : async.Future<CupertinoLocalizations> {
        return DefaultCupertinoLocalizations.load(locale);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldReload(old : _CupertinoLocalizationsDelegate) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return 'DefaultCupertinoLocalizations.delegate(en_US)';
    }
}

export namespace DefaultCupertinoLocalizations {
    export type Constructors = 'DefaultCupertinoLocalizations';
    export type Interface = Omit<DefaultCupertinoLocalizations, Constructors>;
}
@DartClass
@Implements(CupertinoLocalizations)
export class DefaultCupertinoLocalizations implements CupertinoLocalizations.Interface {
    constructor() {
    }
    @defaultConstructor
    DefaultCupertinoLocalizations() {
    }
    private static __$_shortWeekdays : core.DartList<string>;
    static get _shortWeekdays() : core.DartList<string> { 
        if (this.__$_shortWeekdays===undefined) {
            this.__$_shortWeekdays = new core.DartList.literal<string>('Mon','Tue','Wed','Thu','Fri','Sat','Sun');
        }
        return this.__$_shortWeekdays;
    }

    private static __$_shortMonths : core.DartList<string>;
    static get _shortMonths() : core.DartList<string> { 
        if (this.__$_shortMonths===undefined) {
            this.__$_shortMonths = new core.DartList.literal<string>('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');
        }
        return this.__$_shortMonths;
    }

    private static __$_months : core.DartList<string>;
    static get _months() : core.DartList<string> { 
        if (this.__$_months===undefined) {
            this.__$_months = new core.DartList.literal<string>('January','February','March','April','May','June','July','August','September','October','November','December');
        }
        return this.__$_months;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    datePickerYear(yearIndex : number) : string {
        return new core.DartInt(yearIndex).toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    datePickerMonth(monthIndex : number) : string {
        return DefaultCupertinoLocalizations._months[monthIndex - 1];
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    datePickerDayOfMonth(dayIndex : number) : string {
        return new core.DartInt(dayIndex).toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    datePickerHour(hour : number) : string {
        return new core.DartInt(hour).toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    datePickerHourSemanticsLabel(hour : number) : string {
        return new core.DartInt(hour).toString() + " o'clock";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    datePickerMinute(minute : number) : string {
        return new core.DartString(new core.DartInt(minute).toString()).padLeft(2,'0');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    datePickerMinuteSemanticsLabel(minute : number) : string {
        if (minute == 1) return '1 minute';
        return new core.DartInt(minute).toString() + ' minutes';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    datePickerMediumDate(date : core.DartDateTime) : string {
        return `${DefaultCupertinoLocalizations._shortWeekdays[date.weekday - core.DartDateTime.monday]} ` + `${DefaultCupertinoLocalizations._shortMonths[date.month - core.DartDateTime.january]} ` + `${new core.DartString(new core.DartInt(date.day).toString()).padRight(2)}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get datePickerDateOrder() : DatePickerDateOrder {
        return DatePickerDateOrder.mdy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get datePickerDateTimeOrder() : DatePickerDateTimeOrder {
        return DatePickerDateTimeOrder.date_time_dayPeriod;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get anteMeridiemAbbreviation() : string {
        return 'AM';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get postMeridiemAbbreviation() : string {
        return 'PM';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get alertDialogLabel() : string {
        return 'Alert';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    timerPickerHour(hour : number) : string {
        return new core.DartInt(hour).toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    timerPickerMinute(minute : number) : string {
        return new core.DartInt(minute).toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    timerPickerSecond(second : number) : string {
        return new core.DartInt(second).toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    timerPickerHourLabel(hour : number) : string {
        return hour == 1 ? 'hour' : 'hours';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    timerPickerMinuteLabel(minute : number) : string {
        return 'min';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    timerPickerSecondLabel(second : number) : string {
        return 'sec';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get cutButtonLabel() : string {
        return 'Cut';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get copyButtonLabel() : string {
        return 'Copy';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get pasteButtonLabel() : string {
        return 'Paste';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get selectAllButtonLabel() : string {
        return 'Select All';
    }
    static load(locale : any) : async.Future<CupertinoLocalizations> {
        return lib5.SynchronousFuture(new DefaultCupertinoLocalizations());
    }
    private static __$delegate : lib4.LocalizationsDelegate<CupertinoLocalizations>;
    static get delegate() : lib4.LocalizationsDelegate<CupertinoLocalizations> { 
        if (this.__$delegate===undefined) {
            this.__$delegate = _CupertinoLocalizationsDelegate();
        }
        return this.__$delegate;
    }

}

export class properties {
}
