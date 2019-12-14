/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/dependency_grapher.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var graphForProgram : (sources : core.DartList<lib3.Uri>,options : any) => async.Future<Graph> = (sources : core.DartList<lib3.Uri>,options : any) : async.Future<Graph> =>  {
    let processedOptions = new bare.createInstance(any,null,options);
    return null /*topLevl*/.graphForProgram(sources,processedOptions);
};
export namespace Graph {
    export type Constructors = 'Graph';
    export type Interface = Omit<Graph, Constructors>;
}
@DartClass
export class Graph {
    topologicallySortedCycles;

    constructor() {
    }
    @defaultConstructor
    Graph() {
        this.topologicallySortedCycles = new core.DartList.literal<LibraryCycleNode>();
    }
}

export namespace LibraryCycleNode {
    export type Constructors = 'LibraryCycleNode';
    export type Interface = Omit<LibraryCycleNode, Constructors>;
}
@DartClass
export class LibraryCycleNode {
    libraries;

    constructor() {
    }
    @defaultConstructor
    LibraryCycleNode() {
        this.libraries = new core.DartMap.literal([
        ]);
    }
}

export namespace LibraryNode {
    export type Constructors = 'LibraryNode';
    export type Interface = Omit<LibraryNode, Constructors>;
}
@DartClass
export class LibraryNode {
    uri : lib3.Uri;

    parts;

    dependencies;

    constructor(uri : lib3.Uri) {
    }
    @defaultConstructor
    LibraryNode(uri : lib3.Uri) {
        this.parts = new core.DartList.literal<lib3.Uri>();
        this.dependencies = new core.DartList.literal<LibraryNode>();
        this.uri = uri;
    }
}

export class properties {
}
