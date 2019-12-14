/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/search/element_visitors.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var visitChildren : (element : any,processor : (element : any) => boolean) => void = (element : any,processor : (element : any) => boolean) : void =>  {
    element.visitChildren(new _ElementVisitorAdapter(processor));
};
export var visitLibraryTopLevelElements : (library : any,processor : (element : any) => boolean) => void = (library : any,processor : (element : any) => boolean) : void =>  {
    library.visitChildren(new _TopLevelElementsVisitor(processor));
};
export namespace _ElementVisitorAdapter {
    export type Constructors = '_ElementVisitorAdapter';
    export type Interface = Omit<_ElementVisitorAdapter, Constructors>;
}
@DartClass
export class _ElementVisitorAdapter extends any {
    processor : (element : any) => boolean;

    constructor(processor : (element : any) => boolean) {
    }
    @defaultConstructor
    _ElementVisitorAdapter(processor : (element : any) => boolean) {
        this.processor = processor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitElement(element : any) : void {
        let visitChildren : boolean = this.processor(element);
        if (visitChildren == true) {
            element.visitChildren(this);
        }
    }
}

export namespace _TopLevelElementsVisitor {
    export type Constructors = '_TopLevelElementsVisitor';
    export type Interface = Omit<_TopLevelElementsVisitor, Constructors>;
}
@DartClass
export class _TopLevelElementsVisitor extends any {
    processor : (element : any) => boolean;

    constructor(processor : (element : any) => boolean) {
    }
    @defaultConstructor
    _TopLevelElementsVisitor(processor : (element : any) => boolean) {
        this.processor = processor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitElement(element : any) : void {
        if (is(element, any)) {
            element.visitChildren(this);
        }else {
            this.processor(element);
        }
    }
}

export class properties {
}
