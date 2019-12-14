/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/source/stack_listener.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../parser/listener";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "./../errors";
import * as lib6 from "./../../scanner/token";
import * as lib7 from "./../parser/identifier_context";
import * as lib8 from "./../parser/parser";
import * as lib9 from "./../scanner/token";
import * as lib10 from "./../quote";
import * as lib11 from "./../fasta_codes";
import * as lib12 from "./../messages";

export enum NullValue {
    Arguments,
    Block,
    BreakTarget,
    CascadeReceiver,
    Combinators,
    Comments,
    ConditionalUris,
    ConstructorInitializerSeparator,
    ConstructorInitializers,
    ConstructorReferenceContinuationAfterTypeArguments,
    ContinueTarget,
    Expression,
    FieldInitializer,
    FormalParameters,
    FunctionBody,
    FunctionBodyAsyncToken,
    FunctionBodyStarToken,
    Identifier,
    IdentifierList,
    Initializers,
    Metadata,
    Modifiers,
    ParameterDefaultValue,
    SwitchScope,
    Type,
    TypeArguments,
    TypeList,
    TypeVariable,
    TypeVariables
}

export namespace StackListener {
    export type Constructors = lib3.Listener.Constructors | 'StackListener';
    export type Interface = Omit<StackListener, Constructors>;
}
@DartClass
export class StackListener extends lib3.Listener {
    stack : Stack;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get uri() : lib4.Uri{ throw 'abstract'}
    finishFunction(formals : any,asyncModifier : any,body : any) : void {
        return lib5.internalError("Unsupported operation");
    }
    exitLocalScope() : void {
        return lib5.internalError("Unsupported operation");
    }
    prepareInitializers() : void {
        return lib5.internalError("Unsupported operation");
    }
    push(node : core.DartObject) : void {
        if (op(Op.EQUALS,node,null)) lib5.internalError("null not allowed.");
        this.stack.push(node);
    }
    peek() : core.DartObject {
        return this.stack.last;
    }
    pop() : core.DartObject {
        return this.stack.pop();
    }
    popIfNotNull(value : core.DartObject) : core.DartObject {
        return op(Op.EQUALS,value,null) ? null : this.pop();
    }
    popList(n : number) : core.DartList<any> {
        if (n == 0) return null;
        return this.stack.popList(n);
    }
    debugEvent(name : string) : void {
    }
    printEvent(name : string) : void {
        for(let o of this.stack.values) {
            let s : string = `  ${o}`;
            let index : number = new core.DartString(s).indexOf("\n");
            if (index != -1) {
                s = new core.DartString(s).substring(0,index) + "...";
            }
            core.print(s);
        }
        core.print(name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logEvent(name : string) : void {
        lib5.internalError(`Unhandled event: ${name} in ${this.runtimeType} ${this.uri}:\n` + `  ${this.stack.values.join('\n  ')}`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleIdentifier(token : lib6.Token,context : lib7.IdentifierContext) : void {
        this.debugEvent("handleIdentifier");
        this.push(token.lexeme);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoName(token : lib6.Token) : void {
        this.debugEvent("NoName");
        this.push(NullValue.Identifier);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endInitializer(token : lib6.Token) : void {
        this.debugEvent("Initializer");
    }
    checkEmpty(charOffset : number) : void {
        if (this.stack.isNotEmpty) {
            lib5.internalError(`${this.runtimeType}: Stack not empty:\n` + `  ${this.stack.values.join('\n  ')}`,this.uri,charOffset);
        }
        if (this.recoverableErrors.isNotEmpty) {
            lib5.inputError(this.uri,this.recoverableErrors.first.beginOffset,this.recoverableErrors);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTopLevelDeclaration(token : lib6.Token) : void {
        this.debugEvent("TopLevelDeclaration");
        this.checkEmpty(token.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endCompilationUnit(count : number,token : lib6.Token) : void {
        this.debugEvent("CompilationUnit");
        this.checkEmpty(token.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoTypeArguments(token : lib6.Token) : void {
        this.debugEvent("NoTypeArguments");
        this.push(NullValue.TypeArguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoTypeVariables(token : lib6.Token) : void {
        this.debugEvent("NoTypeVariables");
        this.push(NullValue.TypeVariables);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoConstructorReferenceContinuationAfterTypeArguments(token : lib6.Token) : void {
        this.debugEvent("NoConstructorReferenceContinuationAfterTypeArguments");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoType(token : lib6.Token) : void {
        this.debugEvent("NoType");
        this.push(NullValue.Type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoFormalParameters(token : lib6.Token,kind : lib8.MemberKind) : void {
        this.debugEvent("NoFormalParameters");
        this.push(NullValue.FormalParameters);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoArguments(token : lib6.Token) : void {
        this.debugEvent("NoArguments");
        this.push(NullValue.Arguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoFunctionBody(token : lib6.Token) : void {
        this.debugEvent("NoFunctionBody");
        this.push(NullValue.FunctionBody);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoInitializers() : void {
        this.debugEvent("NoInitializers");
        this.push(NullValue.Initializers);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleParenthesizedExpression(token : lib9.BeginGroupToken) : void {
        this.debugEvent("ParenthesizedExpression");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginLiteralString(token : lib6.Token) : void {
        this.debugEvent("beginLiteralString");
        this.push(token);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endLiteralString(interpolationCount : number,endToken : lib6.Token) : void {
        this.debugEvent("endLiteralString");
        if (interpolationCount == 0) {
            let token : lib6.Token = this.pop();
            this.push(lib10.unescapeString(token.lexeme));
        }else {
            lib5.internalError("String interpolation not implemented.");
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleStringJuxtaposition(literalCount : number) : void {
        this.debugEvent("StringJuxtaposition");
        this.push(this.popList(literalCount).join(""));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleRecoverExpression(token : lib6.Token) : void {
        this.debugEvent("RecoverExpression");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endCatchClause(token : lib6.Token) : void {
        this.debugEvent("CatchClause");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleRecoverableError(token : lib6.Token,message : lib11.FastaMessage) : void {
        this.debugEvent(`Error: ${message.message}`);
        super.handleRecoverableError(token,message);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleUnrecoverableError(token : lib6.Token,message : lib11.FastaMessage) : lib6.Token {
        throw lib5.inputError(this.uri,token.charOffset,message.message);
    }
    nit(message : string,charOffset? : number) : void {
        charOffset = charOffset || -1;
        lib12.nit(this.uri,charOffset,message);
    }
    warning(message : string,charOffset? : number) : void {
        charOffset = charOffset || -1;
        lib12.warning(this.uri,charOffset,message);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StackListener() {
        this.stack = new Stack();
    }
}

export namespace Stack {
    export type Constructors = 'Stack';
    export type Interface = Omit<Stack, Constructors>;
}
@DartClass
export class Stack {
    array : core.DartList<any>;

    arrayLength : number;

    get isNotEmpty() : boolean {
        return this.arrayLength > 0;
    }
    get length() : number {
        return this.arrayLength;
    }
    get last() : core.DartObject {
        let value = this.array[this.arrayLength - 1];
        return is(value, NullValue) ? null : value;
    }
    push(value : core.DartObject) : void {
        this.array[this.arrayLength++] = value;
        if (this.array.length == this.arrayLength) {
            this._grow();
        }
    }
    pop() : core.DartObject {
        /* TODO (AssertStatementImpl) : assert (arrayLength > 0); */;
        let value : core.DartObject = this.array[--this.arrayLength];
        this.array[this.arrayLength] = null;
        return is(value, NullValue) ? null : value;
    }
    popList(count : number) : core.DartList<any> {
        /* TODO (AssertStatementImpl) : assert (arrayLength >= count); */;
        let table = this.array;
        let length = this.arrayLength;
        let tailList = new core.DartList.filled(count,null,{
            growable : true});
        let startIndex = length - count;
        for(let i : number = 0; i < count; i++){
            let value = table[startIndex + i];
            tailList[i] = is(value, NullValue) ? null : value;
        }
        this.arrayLength -= count;
        return tailList;
    }
    get values() : core.DartList<any> {
        let list : core.DartList<any> = new core.DartList<any>(this.arrayLength);
        list.setRange(0,this.arrayLength,this.array);
        return list;
    }
    _grow() : void {
        let newTable : core.DartList<any> = new core.DartList<any>(this.array.length * 2);
        newTable.setRange(0,this.array.length,this.array,0);
        this.array = newTable;
    }
    constructor() {
    }
    @defaultConstructor
    Stack() {
        this.array = new core.DartList<any>(8);
        this.arrayLength = 0;
    }
}

export class properties {
}
