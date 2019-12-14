/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/source/scope_listener.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./unhandled_listener";
import * as lib4 from "./../scope";
import * as lib5 from "./stack_listener";
import * as lib6 from "./../../scanner/token";

export enum JumpTargetKind {
    Break,
    Continue,
    Goto
}

export namespace ScopeListener {
    export type Constructors = lib3.UnhandledListener.Constructors | 'ScopeListener';
    export type Interface<J> = Omit<ScopeListener<J>, Constructors>;
}
@DartClass
export class ScopeListener<J> extends lib3.UnhandledListener {
    scope : lib4.Scope;

    breakTarget : J;

    continueTarget : J;

    constructor(scope : lib4.Scope) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScopeListener(scope : lib4.Scope) {
        this.scope = (scope || new lib4.Scope.immutable());
    }
    @Abstract
    createJumpTarget(kind : JumpTargetKind,charOffset : number) : J{ throw 'abstract'}
    createBreakTarget(charOffset : number) : J {
        return this.createJumpTarget(JumpTargetKind.Break,charOffset);
    }
    createContinueTarget(charOffset : number) : J {
        return this.createJumpTarget(JumpTargetKind.Continue,charOffset);
    }
    createGotoTarget(charOffset : number) : J {
        return this.createJumpTarget(JumpTargetKind.Goto,charOffset);
    }
    enterLocalScope(newScope? : lib4.Scope) : void {
        this.push(this.scope);
        this.scope = (newScope || this.scope.createNestedScope());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    exitLocalScope() : void {
        this.scope = this.pop();
        /* TODO (AssertStatementImpl) : assert (scope != null); */;
    }
    enterBreakTarget(charOffset : number,target? : J) : void {
        this.push((this.breakTarget || lib5.NullValue.BreakTarget));
        this.breakTarget = (target || this.createBreakTarget(charOffset));
    }
    enterContinueTarget(charOffset : number,target? : J) : void {
        this.push((this.continueTarget || lib5.NullValue.ContinueTarget));
        this.continueTarget = (target || this.createContinueTarget(charOffset));
    }
    exitBreakTarget() : J {
        let current : J = this.breakTarget;
        this.breakTarget = this.pop();
        return current;
    }
    exitContinueTarget() : J {
        let current : J = this.continueTarget;
        this.continueTarget = this.pop();
        return current;
    }
    enterLoop(charOffset : number) : void {
        this.enterBreakTarget(charOffset);
        this.enterContinueTarget(charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginBlockFunctionBody(begin : lib6.Token) : void {
        this.debugEvent("beginBlockFunctionBody");
        this.enterLocalScope();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginForStatement(token : lib6.Token) : void {
        this.debugEvent("beginForStatement");
        this.enterLoop(token.charOffset);
        this.enterLocalScope();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginBlock(token : lib6.Token) : void {
        this.debugEvent("beginBlock");
        this.enterLocalScope();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginSwitchBlock(token : lib6.Token) : void {
        this.debugEvent("beginSwitchBlock");
        this.enterLocalScope();
        this.enterBreakTarget(token.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginDoWhileStatement(token : lib6.Token) : void {
        this.debugEvent("beginDoWhileStatement");
        this.enterLoop(token.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginWhileStatement(token : lib6.Token) : void {
        this.debugEvent("beginWhileStatement");
        this.enterLoop(token.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginDoWhileStatementBody(token : lib6.Token) : void {
        this.debugEvent("beginDoWhileStatementBody");
        this.enterLocalScope();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endDoWhileStatementBody(token : lib6.Token) : void {
        this.debugEvent("endDoWhileStatementBody");
        let body = this.pop();
        this.exitLocalScope();
        this.push(body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginWhileStatementBody(token : lib6.Token) : void {
        this.debugEvent("beginWhileStatementBody");
        this.enterLocalScope();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endWhileStatementBody(token : lib6.Token) : void {
        this.debugEvent("endWhileStatementBody");
        let body = this.pop();
        this.exitLocalScope();
        this.push(body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginForStatementBody(token : lib6.Token) : void {
        this.debugEvent("beginForStatementBody");
        this.enterLocalScope();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endForStatementBody(token : lib6.Token) : void {
        this.debugEvent("endForStatementBody");
        let body = this.pop();
        this.exitLocalScope();
        this.push(body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginForInBody(token : lib6.Token) : void {
        this.debugEvent("beginForInBody");
        this.enterLocalScope();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endForInBody(token : lib6.Token) : void {
        this.debugEvent("endForInBody");
        let body = this.pop();
        this.exitLocalScope();
        this.push(body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginThenStatement(token : lib6.Token) : void {
        this.debugEvent("beginThenStatement");
        this.enterLocalScope();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endThenStatement(token : lib6.Token) : void {
        this.debugEvent("endThenStatement");
        let body = this.pop();
        this.exitLocalScope();
        this.push(body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginElseStatement(token : lib6.Token) : void {
        this.debugEvent("beginElseStatement");
        this.enterLocalScope();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endElseStatement(token : lib6.Token) : void {
        this.debugEvent("endElseStatement");
        let body = this.pop();
        this.exitLocalScope();
        this.push(body);
    }
}

export class properties {
}
