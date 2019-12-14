/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/source/unhandled_listener.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./stack_listener";
import * as lib4 from "./../../scanner/token";

export enum Unhandled {
    ConditionalUri,
    ConditionalUris,
    DottedName,
    Hide,
    Initializers,
    Interpolation,
    Metadata,
    Show,
    TypeVariables
}

export namespace UnhandledListener {
    export type Constructors = lib3.StackListener.Constructors | 'UnhandledListener';
    export type Interface = Omit<UnhandledListener, Constructors>;
}
@DartClass
export class UnhandledListener extends lib3.StackListener {
    popCharOffset() : number {
        return -1;
    }
    popIdentifierList(count : number) : core.DartList<string> {
        return this.popList(count);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endMetadataStar(count : number,forParameter : boolean) : void {
        this.debugEvent("MetadataStar");
        this.push((this.popList(count) || lib3.NullValue.Metadata));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endConditionalUri(ifKeyword : lib4.Token,equalitySign : lib4.Token) : void {
        this.debugEvent("ConditionalUri");
        this.popCharOffset();
        this.pop();
        if (equalitySign != null) this.popCharOffset();
        this.popIfNotNull(equalitySign);
        this.pop();
        this.push(Unhandled.ConditionalUri);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endConditionalUris(count : number) : void {
        this.debugEvent("ConditionalUris");
        this.popList(count);
        this.push(Unhandled.ConditionalUris);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endHide(hideKeyword : lib4.Token) : void {
        this.debugEvent("Hide");
        this.pop();
        this.push(Unhandled.Hide);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endShow(showKeyword : lib4.Token) : void {
        this.debugEvent("Show");
        this.pop();
        this.push(Unhandled.Show);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endCombinators(count : number) : void {
        this.debugEvent("Combinators");
        this.push((this.popList(count) || lib3.NullValue.Combinators));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endDottedName(count : number,firstIdentifier : lib4.Token) : void {
        this.debugEvent("DottedName");
        this.popIdentifierList(count);
        this.push(Unhandled.DottedName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleFunctionType(functionToken : lib4.Token,endToken : lib4.Token) : void {
        this.pop();
        this.pop();
        this.pop();
        this.push(lib3.NullValue.Type);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UnhandledListener() {
    }
}

export class properties {
}
