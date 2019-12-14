/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/fasta/visitor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./expressions";

export namespace Visitor {
    export type Constructors = 'Visitor';
    export type Interface = Omit<Visitor, Constructors>;
}
@DartClass
export class Visitor {
    handleAs(n : lib3.As) {
    }
    handleBinary(n : lib3.Binary) {
    }
    handleBool(n : lib3.BoolLiteral) {
    }
    handleConditional(n : lib3.Conditional) {
    }
    handleConstCreation(n : lib3.ConstCreation) {
    }
    handleDouble(n : lib3.DoubleLiteral) {
    }
    handleIdentical(n : lib3.Identical) {
    }
    handleInt(n : lib3.IntLiteral) {
    }
    handleInvalid(n : lib3.Invalid) {
    }
    handleIs(n : lib3.Is) {
    }
    handleList(n : lib3.ListLiteral) {
    }
    handleLoad(n : lib3.Load) {
    }
    handleMap(n : lib3.MapLiteral) {
    }
    handleNull(n : lib3.NullLiteral) {
    }
    handleOpaque(n : lib3.Opaque) {
    }
    handleOpaqueOp(n : lib3.OpaqueOp) {
    }
    handleRef(n : lib3.Ref) {
    }
    handleString(n : lib3.StringLiteral) {
    }
    handleSymbol(n : lib3.SymbolLiteral) {
    }
    handleUnary(n : lib3.Unary) {
    }
    visitAs(n : lib3.As) {
        return this.handleAs(n);
    }
    visitBinary(n : lib3.Binary) {
        return this.handleBinary(n);
    }
    visitBool(n : lib3.BoolLiteral) {
        return this.handleBool(n);
    }
    visitConditional(n : lib3.Conditional) {
        return this.handleConditional(n);
    }
    visitConstCreation(n : lib3.ConstCreation) {
        return this.handleConstCreation(n);
    }
    visitDouble(n : lib3.DoubleLiteral) {
        return this.handleDouble(n);
    }
    visitIdentical(n : lib3.Identical) {
        return this.handleIdentical(n);
    }
    visitInt(n : lib3.IntLiteral) {
        return this.handleInt(n);
    }
    visitInvalid(n : lib3.Invalid) {
        return this.handleInvalid(n);
    }
    visitIs(n : lib3.Is) {
        return this.handleIs(n);
    }
    visitList(n : lib3.ListLiteral) {
        return this.handleList(n);
    }
    visitLoad(n : lib3.Load) {
        return this.handleLoad(n);
    }
    visitMap(n : lib3.MapLiteral) {
        return this.handleMap(n);
    }
    visitNull(n : lib3.NullLiteral) {
        return this.handleNull(n);
    }
    visitOpaque(n : lib3.Opaque) {
        return this.handleOpaque(n);
    }
    visitOpaqueOp(n : lib3.OpaqueOp) {
        return this.handleOpaqueOp(n);
    }
    visitRef(n : lib3.Ref) {
        return this.handleRef(n);
    }
    visitString(n : lib3.StringLiteral) {
        return this.handleString(n);
    }
    visitSymbol(n : lib3.SymbolLiteral) {
        return this.handleSymbol(n);
    }
    visitUnary(n : lib3.Unary) {
        return this.handleUnary(n);
    }
    constructor() {
    }
    @defaultConstructor
    Visitor() {
    }
}

export namespace RecursiveVisitor {
    export type Constructors = Visitor.Constructors | 'RecursiveVisitor';
    export type Interface = Omit<RecursiveVisitor, Constructors>;
}
@DartClass
export class RecursiveVisitor extends Visitor {
    visitAs(n : lib3.As) {
        n.exp.accept(this);
        this.handleAs(n);
    }
    visitBinary(n : lib3.Binary) {
        n.left.accept(this);
        n.right.accept(this);
        this.handleBinary(n);
    }
    visitConditional(n : lib3.Conditional) {
        n.test.accept(this);
        n.trueBranch.accept(this);
        n.falseBranch.accept(this);
        this.handleConditional(n);
    }
    visitConstCreation(n : lib3.ConstCreation) {
        for(let arg of n.positionalArgs) {
            arg.accept(this);
        }
        for(let arg of n.namedArgs) {
            arg.value.accept(this);
        }
        this.handleConstCreation(n);
    }
    visitIdentical(n : lib3.Identical) {
        n.left.accept(this);
        n.right.accept(this);
        this.handleIdentical(n);
    }
    visitIs(n : lib3.Is) {
        n.exp.accept(this);
        this.handleIs(n);
    }
    visitList(n : lib3.ListLiteral) {
        for(let v of n.values) {
            v.accept(this);
        }
        this.handleList(n);
    }
    visitLoad(n : lib3.Load) {
        n.left.accept(this);
        this.handleLoad(n);
    }
    visitMap(n : lib3.MapLiteral) {
        for(let v of n.values) {
            v.key.accept(this);
            v.value.accept(this);
        }
        this.handleMap(n);
    }
    visitOpaqueOp(n : lib3.OpaqueOp) {
        n.exp.accept(this);
        this.handleOpaqueOp(n);
    }
    visitUnary(n : lib3.Unary) {
        n.exp.accept(this);
        this.handleUnary(n);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RecursiveVisitor() {
    }
}

export class properties {
}
