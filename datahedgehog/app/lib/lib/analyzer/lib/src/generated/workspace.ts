/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/workspace.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Workspace {
    export type Constructors = 'Workspace';
    export type Interface = Omit<Workspace, Constructors>;
}
@DartClass
export class Workspace {
    @AbstractProperty
    get packageMap() : core.DartMap<string,core.DartList<any>>{ throw 'abstract'}
    @AbstractProperty
    get packageUriResolver() : any{ throw 'abstract'}
    get hasFlutterDependency() : boolean {
        return false;
    }
    @Abstract
    createSourceFactory(sdk : any) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Workspace() {
    }
}

export class properties {
}
