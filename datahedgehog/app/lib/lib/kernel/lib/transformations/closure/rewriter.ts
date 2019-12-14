/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/closure/rewriter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../ast";
import * as lib4 from "./converter";

export namespace AstRewriter {
    export type Constructors = 'AstRewriter';
    export type Interface = Omit<AstRewriter, Constructors>;
}
@DartClass
export class AstRewriter {
    contextDeclaration : lib3.VariableDeclaration;

    vectorCreation : lib3.VectorCreation;

    @Abstract
    forNestedBlock(block : lib3.Block) : BlockRewriter{ throw 'abstract'}
    @Abstract
    insertContextDeclaration(accessParent : lib3.Expression) : void{ throw 'abstract'}
    @Abstract
    insertExtendContext(extender : lib3.VectorSet) : void{ throw 'abstract'}
    _createDeclaration() : void {
        /* TODO (AssertStatementImpl) : assert (contextDeclaration == null && vectorCreation == null); */;
        this.vectorCreation = new lib3.VectorCreation(1);
        this.contextDeclaration = new lib3.VariableDeclaration.forValue(this.vectorCreation,{
            type : new lib3.VectorType()});
        this.contextDeclaration.name = "#context";
    }
    constructor() {
    }
    @defaultConstructor
    AstRewriter() {
    }
}

export namespace BlockRewriter {
    export type Constructors = AstRewriter.Constructors | 'BlockRewriter';
    export type Interface = Omit<BlockRewriter, Constructors>;
}
@DartClass
export class BlockRewriter extends AstRewriter {
    _currentBlock : lib3.Block;

    _insertionIndex : number;

    constructor(_currentBlock : lib3.Block) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BlockRewriter(_currentBlock : lib3.Block) {
        this._insertionIndex = 0;
        this._currentBlock = _currentBlock;
    }
    forNestedBlock(block : lib3.Block) : BlockRewriter {
        return this._currentBlock != block ? new BlockRewriter(block) : this;
    }
    transformStatements(block : lib3.Block,converter : lib4.ClosureConverter) : void {
        while (this._insertionIndex < this._currentBlock.statements.length){
            let original = this._currentBlock.statements[this._insertionIndex];
            let transformed = original.accept(converter);
            /* TODO (AssertStatementImpl) : assert (_currentBlock.statements[_insertionIndex] == original); */;
            if (op(Op.EQUALS,transformed,null)) {
                this._currentBlock.statements.removeAt(this._insertionIndex);
            }else {
                this._currentBlock.statements[this._insertionIndex++] = transformed;
                transformed.parent = this._currentBlock;
            }
        }
    }
    _insertStatement(statement : lib3.Statement) : void {
        this._currentBlock.statements.insert(this._insertionIndex++,statement);
        statement.parent = this._currentBlock;
    }
    insertContextDeclaration(accessParent : lib3.Expression) : void {
        this._createDeclaration();
        this._insertStatement(this.contextDeclaration);
        if (isNot(accessParent, lib3.NullLiteral)) {
            this._insertStatement(new lib3.ExpressionStatement(new lib3.VectorSet(new lib3.VariableGet(this.contextDeclaration),0,accessParent)));
        }
    }
    insertExtendContext(extender : lib3.VectorSet) : void {
        this._insertStatement(new lib3.ExpressionStatement(extender));
    }
}

export namespace InitializerRewriter {
    export type Constructors = AstRewriter.Constructors | 'InitializerRewriter';
    export type Interface = Omit<InitializerRewriter, Constructors>;
}
@DartClass
export class InitializerRewriter extends AstRewriter {
    initializingExpression : lib3.Expression;

    constructor(initializingExpression : lib3.Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InitializerRewriter(initializingExpression : lib3.Expression) {
        this.initializingExpression = initializingExpression;
        /* TODO (AssertStatementImpl) : assert (initializingExpression.parent is FieldInitializer); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forNestedBlock(block : lib3.Block) : BlockRewriter {
        return new BlockRewriter(block);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    insertContextDeclaration(accessParent : lib3.Expression) : void {
        this._createDeclaration();
        let parent : lib3.FieldInitializer = this.initializingExpression.parent;
        let binding : lib3.Let = new lib3.Let(this.contextDeclaration,this.initializingExpression);
        this.initializingExpression.parent = binding;
        parent.value = binding;
        binding.parent = parent;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    insertExtendContext(extender : lib3.VectorSet) : void {
        let parent : lib3.Let = this.initializingExpression.parent;
        let binding : lib3.Let = new lib3.Let(new lib3.VariableDeclaration(null,{
            initializer : extender}),this.initializingExpression);
        parent.body = binding;
        binding.parent = parent;
    }
}

export class properties {
}
