/** Library asset:datahedgehog_monitor/lib/lib/foundation/annotations.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Category {
    export type Constructors = 'Category';
    export type Interface = Omit<Category, Constructors>;
}
@DartClass
export class Category {
    constructor(sections : core.DartList<string>) {
    }
    @defaultConstructor
    Category(sections : core.DartList<string>) {
        this.assert = assert;
        this.sections = sections;
    }
     : any;

    sections : core.DartList<string>;

}

export namespace DocumentationIcon {
    export type Constructors = 'DocumentationIcon';
    export type Interface = Omit<DocumentationIcon, Constructors>;
}
@DartClass
export class DocumentationIcon {
    constructor(url : string) {
    }
    @defaultConstructor
    DocumentationIcon(url : string) {
        this.assert = assert;
        this.url = url;
    }
     : any;

    url : string;

}

export namespace Summary {
    export type Constructors = 'Summary';
    export type Interface = Omit<Summary, Constructors>;
}
@DartClass
export class Summary {
    constructor(text : string) {
    }
    @defaultConstructor
    Summary(text : string) {
        this.assert = assert;
        this.text = text;
    }
     : any;

    text : string;

}

export class properties {
}
