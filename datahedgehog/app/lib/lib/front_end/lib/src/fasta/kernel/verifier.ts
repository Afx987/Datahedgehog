/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/verifier.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./../errors";
import * as lib5 from "./redirecting_factory_body";

export var verifyProgram : (program : any,_namedArguments? : {isOutline? : boolean}) => core.DartList<any> = (program : any,_namedArguments? : {isOutline? : boolean}) : core.DartList<any> =>  {
    let {isOutline} = Object.assign({
        "isOutline" : false}, _namedArguments );
    let verifier : FastaVerifyingVisitor = new FastaVerifyingVisitor(isOutline);
    program.accept(verifier);
    return verifier.errors;
};
export namespace FastaVerifyingVisitor {
    export type Constructors = 'FastaVerifyingVisitor';
    export type Interface = Omit<FastaVerifyingVisitor, Constructors>;
}
@DartClass
@Implements(any)
export class FastaVerifyingVisitor extends any implements any.Interface {
    errors : core.DartList<any>;

    fileUri : string;

    constructor(isOutline : boolean) {
    }
    @defaultConstructor
    FastaVerifyingVisitor(isOutline : boolean) {
        this.errors = new core.DartList.literal<any>();
        this.isOutline = isOutline;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    problem(node : any,details : string,_namedArguments? : {context? : any}) {
        let {context} = Object.assign({
        }, _namedArguments );
        context = ( context ) || ( this.context );
        let error : any = new bare.createInstance(any,null,context,node,details);
        let uri = this.fileUri != null ? lib3.Uri.parse(this.fileUri) : null;
        let offset = (uri != null && node != null) ? node.fileOffset : -1;
        lib4.printUnexpected(uri,offset,`${error}`);
        this.errors.add(error);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionStatement(node : any) {
        if (isNot(node, lib5.RedirectingFactoryBody)) {
            super.visitExpressionStatement(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibrary(node : any) {
        this.fileUri = node.fileUri;
        super.visitLibrary(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClass(node : any) {
        this.fileUri = node.fileUri;
        super.visitClass(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitField(node : any) {
        this.fileUri = node.fileUri;
        super.visitField(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitProcedure(node : any) {
        this.fileUri = node.fileUri;
        super.visitProcedure(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInvalidExpression(node : any) {
        this.problem(node,"Invalid expression.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInvalidStatement(node : any) {
        this.problem(node,"Invalid statement.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInvalidInitializer(node : any) {
        this.problem(node,"Invalid initializer.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitUnknownType(node : any) {
        this.problem(null,"Unexpected appearance of the unknown type.");
    }
}

export class properties {
}
