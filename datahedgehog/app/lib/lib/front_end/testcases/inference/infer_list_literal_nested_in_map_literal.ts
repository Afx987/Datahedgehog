/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_list_literal_nested_in_map_literal.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var getResource : (str : string) => Resource = (str : string) : Resource =>  {
    return null;
};
export var main : () => any = () =>  {
    let map = new core.DartMap.literal([
        ['pkgA',new core.DartList.literal(getResource('/pkgA/lib/'))],
        ['pkgB',new core.DartList.literal(getResource('/pkgB/lib/'))]]);
    let list = new core.DartList.literal<core.DartMap<string,Folder>>(new core.DartMap.literal([
        ['pkgA',getResource('/pkgA/lib/')]]),new core.DartMap.literal([
        ['pkgB',getResource('/pkgB/lib/')]]));
    let foo = new Foo<core.DartList<Folder>>(new core.DartList.literal(getResource('/pkgA/lib/')));
};
export namespace Resource {
    export type Constructors = 'Resource';
    export type Interface = Omit<Resource, Constructors>;
}
@DartClass
export class Resource {
    constructor() {
    }
    @defaultConstructor
    Resource() {
    }
}

export namespace Foo {
    export type Constructors = 'Foo';
    export type Interface<T> = Omit<Foo<T>, Constructors>;
}
@DartClass
export class Foo<T> {
    constructor(t : T) {
    }
    @defaultConstructor
    Foo(t : T) {
    }
}

export namespace Folder {
    export type Constructors = Resource.Constructors | 'Folder';
    export type Interface = Omit<Folder, Constructors>;
}
@DartClass
export class Folder extends Resource {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Folder() {
    }
}

export class properties {
}
