/** Library asset:datahedgehog_monitor/lib/lib/material/time.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "./material_localizations";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";

export var hourFormat : (_namedArguments? : {of? : TimeOfDayFormat}) => HourFormat = (_namedArguments? : {of? : TimeOfDayFormat}) : HourFormat =>  {
    let {of} = Object.assign({
    }, _namedArguments );
    switch (of) {
        case TimeOfDayFormat.h_colon_mm_space_a:
        case TimeOfDayFormat.a_space_h_colon_mm:
            return HourFormat.h;
        case TimeOfDayFormat.H_colon_mm:
            return HourFormat.H;
        case TimeOfDayFormat.HH_dot_mm:
        case TimeOfDayFormat.HH_colon_mm:
        case TimeOfDayFormat.frenchCanadian:
            return HourFormat.HH;
    }
    return null;
};
export enum DayPeriod {
    am,
    pm
}

export namespace TimeOfDay {
    export type Constructors = 'TimeOfDay' | 'fromDateTime';
    export type Interface = Omit<TimeOfDay, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class TimeOfDay {
    constructor(_namedArguments? : {hour? : number,minute? : number}) {
    }
    @defaultConstructor
    TimeOfDay(_namedArguments? : {hour? : number,minute? : number}) {
        let {hour,minute} = Object.assign({
        }, _namedArguments );
        this.hour = hour;
        this.minute = minute;
    }
    @namedConstructor
    fromDateTime(time : core.DartDateTime) {
        this.hour = time.hour;
        this.minute = time.minute;
    }
    static fromDateTime : new(time : core.DartDateTime) => TimeOfDay;

    @namedFactory
    static $now() : TimeOfDay {
        return TimeOfDay.fromDateTime(core.DartDateTime.now());
    }
    static now : new() => TimeOfDay;

    private static __$hoursPerDay : number;
    static get hoursPerDay() : number { 
        if (this.__$hoursPerDay===undefined) {
            this.__$hoursPerDay = 24;
        }
        return this.__$hoursPerDay;
    }

    private static __$hoursPerPeriod : number;
    static get hoursPerPeriod() : number { 
        if (this.__$hoursPerPeriod===undefined) {
            this.__$hoursPerPeriod = 12;
        }
        return this.__$hoursPerPeriod;
    }

    private static __$minutesPerHour : number;
    static get minutesPerHour() : number { 
        if (this.__$minutesPerHour===undefined) {
            this.__$minutesPerHour = 60;
        }
        return this.__$minutesPerHour;
    }

    replacing(_namedArguments? : {hour? : number,minute? : number}) : TimeOfDay {
        let {hour,minute} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (hour == null || (hour >= 0 && hour < hoursPerDay)); */;
        /* TODO (AssertStatementImpl) : assert (minute == null || (minute >= 0 && minute < minutesPerHour)); */;
        return TimeOfDay({
            hour : (hour || this.hour),minute : (minute || this.minute)});
    }
    hour : number;

    minute : number;

    get period() : DayPeriod {
        return this.hour < TimeOfDay.hoursPerPeriod ? DayPeriod.am : DayPeriod.pm;
    }
    get hourOfPeriod() : number {
        return this.hour - this.periodOffset;
    }
    get periodOffset() : number {
        return op(Op.EQUALS,this.period,DayPeriod.am) ? 0 : TimeOfDay.hoursPerPeriod;
    }
    format(context : lib3.BuildContext) : string {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMediaQuery(context)); */;
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        let localizations : lib4.MaterialLocalizations = lib4.MaterialLocalizations.of(context);
        return localizations.formatTimeOfDay(this,{
            alwaysUse24HourFormat : lib5.MediaQuery.of(context).alwaysUse24HourFormat});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (isNot(other, TimeOfDay)) return false;
        let typedOther : TimeOfDay = other;
        return typedOther.hour == this.hour && typedOther.minute == this.minute;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.hour,this.minute);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        var _addLeadingZeroIfNeeded : (value : number) => string = (value : number) : string =>  {
            if (value < 10) return `0${value}`;
            return new core.DartInt(value).toString();
        };
        let hourLabel : string = _addLeadingZeroIfNeeded(this.hour);
        let minuteLabel : string = _addLeadingZeroIfNeeded(this.minute);
        return `${TimeOfDay}(${hourLabel}:${minuteLabel})`;
    }
}

export enum TimeOfDayFormat {
    HH_colon_mm,
    HH_dot_mm,
    frenchCanadian,
    H_colon_mm,
    h_colon_mm_space_a,
    a_space_h_colon_mm
}

export enum HourFormat {
    HH,
    H,
    h
}

export class properties {
}
