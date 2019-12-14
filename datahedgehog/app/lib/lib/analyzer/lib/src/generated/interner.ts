/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/interner.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace MappedInterner {
    export type Constructors = 'MappedInterner';
    export type Interface = Omit<MappedInterner, Constructors>;
}
@DartClass
@Implements(any)
export class MappedInterner implements any.Interface {
    _table : core.DartMap<string,string>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    intern(string : string) : string {
        let original : string = this._table.get(string);
        if (original == null) {
            this._table.set(string,string);
            return string;
        }
        return original;
    }
    constructor() {
    }
    @defaultConstructor
    MappedInterner() {
        this._table = new core.DartHashMap<string,string>();
    }
}

export class properties {
}
