/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/fasta/stack_listener.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "@dart2ts/dart/uri";

export enum NullValue {
    Arguments,
    Combinators,
    FormalParameters,
    FunctionBody,
    IdentifierList,
    Initializers,
    Metadata,
    Modifiers,
    Type,
    TypeArguments,
    TypeList,
    TypeVariable,
    TypeVariables
}

export namespace StackListener {
    export type Constructors = 'StackListener';
    export type Interface = Omit<StackListener, Constructors>;
}
@DartClass
export class StackListener extends any {
    stack : collection.Queue<core.DartObject>;

    @AbstractProperty
    get uri() : lib4.Uri{ throw 'abstract'}
    checkEmpty() : void {
        if (this.stack.isNotEmpty) {
            throw `Stack not empty ${this.uri}:\n` + `  ${this.stack.join('\n  ')}`;
        }
    }
    debugEvent(name : string) : void {
    }
    endCompilationUnit(count : number,token : any) : void {
        this.debugEvent("CompilationUnit");
        this.checkEmpty();
    }
    endTopLevelDeclaration(token : any) : void {
        this.debugEvent("TopLevelDeclaration");
        this.checkEmpty();
    }
    handleIdentifier(token : any,context : any) : void {
        this.debugEvent("handleIdentifier");
        this.push(token.lexeme);
    }
    handleNoArguments(token : any) : void {
        this.debugEvent("NoArguments");
        let typeArguments = this.pop();
        /* TODO (AssertStatementImpl) : assert (typeArguments == null); */;
        this.push(NullValue.Arguments);
    }
    handleNoFormalParameters(token : any,kind : any) : void {
        this.debugEvent("NoFormalParameters");
        this.push(NullValue.FormalParameters);
    }
    handleNoFunctionBody(token : any) : void {
        this.debugEvent("NoFunctionBody");
        this.push(NullValue.FunctionBody);
    }
    handleNoInitializers() : void {
        this.debugEvent("NoInitializers");
        this.push(NullValue.Initializers);
    }
    handleNoType(token : any) : void {
        this.debugEvent("NoType");
        this.push(NullValue.Type);
    }
    handleNoTypeArguments(token : any) : void {
        this.debugEvent("NoTypeArguments");
        this.push(NullValue.TypeArguments);
    }
    handleNoTypeVariables(token : any) : void {
        this.debugEvent("NoTypeVariables");
        this.push(NullValue.TypeVariables);
    }
    handleParenthesizedExpression(token : any) : void {
        this.debugEvent("ParenthesizedExpression");
    }
    logEvent(name : string) : void {
        core.print(`  ${this.stack.join('\n  ')}`);
        throw `Unhandled event: ${name} in ${this.runtimeType} ${this.uri}.`;
    }
    peek() : core.DartObject {
        let node : core.DartObject = this.stack.last;
        return is(node, NullValue) ? null : node;
    }
    pop(_namedArguments? : {expect? : NullValue}) : core.DartObject {
        let {expect} = Object.assign({
            "expect" : null}, _namedArguments );
        let node : core.DartObject = this.stack.removeLast();
        if (expect != null && expect != node) {
            throw `unexpected value: ${expect} vs ${node}`;
        }
        return is(node, NullValue) ? null : node;
    }
    popIfNotNull(value : core.DartObject) : core.DartObject {
        return op(Op.EQUALS,value,null) ? null : this.pop();
    }
    popList(n : number) : core.DartList<any> {
        if (n == 0) return null;
        let list : core.DartList<any> = new core.DartList<any>(n);
        for(let i : number = n - 1; i >= 0; i--){
            list[i] = this.pop();
        }
        return list;
    }
    push(node : core.DartObject) : void {
        if (op(Op.EQUALS,node,null)) throw "null not allowed.";
        this.stack.addLast(node);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StackListener() {
        this.stack = new collection.Queue<core.DartObject>();
    }
}

export class properties {
}
