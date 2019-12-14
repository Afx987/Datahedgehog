/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/util/absolute_path.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AbsolutePathContext {
    export type Constructors = 'AbsolutePathContext';
    export type Interface = Omit<AbsolutePathContext, Constructors>;
}
@DartClass
export class AbsolutePathContext {
    private static __$_COLON : number;
    static get _COLON() : number { 
        if (this.__$_COLON===undefined) {
            this.__$_COLON = 58;
        }
        return this.__$_COLON;
    }

    private static __$_LOWER_A : number;
    static get _LOWER_A() : number { 
        if (this.__$_LOWER_A===undefined) {
            this.__$_LOWER_A = 97;
        }
        return this.__$_LOWER_A;
    }

    private static __$_LOWER_Z : number;
    static get _LOWER_Z() : number { 
        if (this.__$_LOWER_Z===undefined) {
            this.__$_LOWER_Z = 122;
        }
        return this.__$_LOWER_Z;
    }

    private static __$_UPPER_A : number;
    static get _UPPER_A() : number { 
        if (this.__$_UPPER_A===undefined) {
            this.__$_UPPER_A = 65;
        }
        return this.__$_UPPER_A;
    }

    private static __$_UPPER_Z : number;
    static get _UPPER_Z() : number { 
        if (this.__$_UPPER_Z===undefined) {
            this.__$_UPPER_Z = 90;
        }
        return this.__$_UPPER_Z;
    }

    _isWindows : boolean;

    separator : string;

    _separatorChar : number;

    _singlePeriodComponent : string;

    _doublePeriodComponent : string;

    _singlePeriodEnding : string;

    _doublePeriodEnding : string;

    constructor(_isWindows : boolean) {
    }
    @defaultConstructor
    AbsolutePathContext(_isWindows : boolean) {
        this._isWindows = _isWindows;
        this.separator = this._isWindows ? '\' : '/';
        this._separatorChar = new core.DartString(this.separator).codeUnitAt(0);
        this._singlePeriodComponent = this.separator + '.' + this.separator;
        this._doublePeriodComponent = this.separator + '..' + this.separator;
        this._singlePeriodEnding = this.separator + '.';
        this._doublePeriodEnding = this.separator + '..';
    }
    append(parent : string,suffix : string) : string {
        return `${parent}${this.separator}${suffix}`;
    }
    basename(path : string) : string {
        let index : number = new core.DartString(path).lastIndexOf(this.separator);
        return new core.DartString(path).substring(index + 1);
    }
    dirname(path : string) : string {
        let firstIndex : number = new core.DartString(path).indexOf(this.separator);
        let lastIndex : number = new core.DartString(path).lastIndexOf(this.separator);
        return lastIndex == firstIndex ? new core.DartString(path).substring(0,firstIndex + 1) : new core.DartString(path).substring(0,lastIndex);
    }
    isValid(path : string) : boolean {
        return this._isAbsolute(path) && this._isNormalized(path);
    }
    isWithin(parent : string,child : string) : boolean {
        let parentLength : number = new core.DartString(parent).length;
        let childLength : number = new core.DartString(child).length;
        if (parentLength >= childLength) {
            return false;
        }
        if (new core.DartString(child).codeUnitAt(parentLength) != this._separatorChar) {
            return false;
        }
        return AbsolutePathContext._startsWithUnsafe(child,parent);
    }
    split(path : string) : core.DartList<string> {
        return new core.DartString(path).split(this.separator);
    }
    suffix(parent : string,child : string) : string {
        let parentPrefix : string = parent + this.separator;
        if (new core.DartString(child).startsWith(parentPrefix)) {
            return new core.DartString(child).substring(new core.DartString(parentPrefix).length);
        }
        return null;
    }
    _isAbsolute(path : string) : boolean {
        if (this._isWindows) {
            return new core.DartString(path).length >= 3 && AbsolutePathContext._isAlphabetic(new core.DartString(path).codeUnitAt(0)) && new core.DartString(path).codeUnitAt(1) == AbsolutePathContext._COLON && new core.DartString(path).codeUnitAt(2) == this._separatorChar;
        }else {
            return new core.DartString(path).isNotEmpty && new core.DartString(path).codeUnitAt(0) == this._separatorChar;
        }
    }
    _isNormalized(path : string) : boolean {
        return !new core.DartString(path).contains(this._singlePeriodComponent) && !new core.DartString(path).contains(this._doublePeriodComponent) && !new core.DartString(path).endsWith(this._singlePeriodEnding) && !new core.DartString(path).endsWith(this._doublePeriodEnding);
    }
    static _isAlphabetic(char : number) : boolean {
        return char >= AbsolutePathContext._UPPER_A && char <= AbsolutePathContext._UPPER_Z || char >= AbsolutePathContext._LOWER_A && char <= AbsolutePathContext._LOWER_Z;
    }
    static _startsWithUnsafe(str : string,prefix : string) : boolean {
        let len : number = new core.DartString(prefix).length;
        for(let i : number = len - 1; i >= 0; i--){
            if (new core.DartString(str).codeUnitAt(i) != new core.DartString(prefix).codeUnitAt(i)) {
                return false;
            }
        }
        return true;
    }
}

export class properties {
}
