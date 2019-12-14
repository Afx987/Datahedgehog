/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/scanner/string_utilities.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace StringUtilities {
    export type Constructors = 'StringUtilities';
    export type Interface = Omit<StringUtilities, Constructors>;
}
@DartClass
export class StringUtilities {
    private static __$INTERNER : any;
    static get INTERNER() : any { 
        if (this.__$INTERNER===undefined) {
            this.__$INTERNER = new bare.createInstance(any,null);
        }
        return this.__$INTERNER;
    }
    static set INTERNER(__$value : any)  { 
        this.__$INTERNER = __$value;
    }

    static endsWith3(str : string,c1 : number,c2 : number,c3 : number) : boolean {
        let length = new core.DartString(str).length;
        return length >= 3 && new core.DartString(str).codeUnitAt(length - 3) == c1 && new core.DartString(str).codeUnitAt(length - 2) == c2 && new core.DartString(str).codeUnitAt(length - 1) == c3;
    }
    static intern(string : string) : string {
        return StringUtilities.INTERNER.intern(string);
    }
    static startsWith3(str : string,start : number,c1 : number,c2 : number,c3 : number) : boolean {
        return new core.DartString(str).length - start >= 3 && new core.DartString(str).codeUnitAt(start) == c1 && new core.DartString(str).codeUnitAt(start + 1) == c2 && new core.DartString(str).codeUnitAt(start + 2) == c3;
    }
    constructor() {
    }
    @defaultConstructor
    StringUtilities() {
    }
}

export class properties {
}
