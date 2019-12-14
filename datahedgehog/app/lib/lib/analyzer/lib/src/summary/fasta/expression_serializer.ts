/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/fasta/expression_serializer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./visitor";
import * as lib4 from "./model";
import * as lib5 from "./expressions";

export var _binaryOpFor : (operatorKind : number) => any = (operatorKind : number) : any =>  {
    switch (operatorKind) {
        case AMPERSAND_TOKEN:
            return UnlinkedExprOperation.bitAnd;
        case AMPERSAND_AMPERSAND_TOKEN:
            return UnlinkedExprOperation.and;
        case BANG_EQ_TOKEN:
            return UnlinkedExprOperation.notEqual;
        case BAR_TOKEN:
            return UnlinkedExprOperation.bitOr;
        case BAR_BAR_TOKEN:
            return UnlinkedExprOperation.or;
        case CARET_TOKEN:
            return UnlinkedExprOperation.bitXor;
        case EQ_EQ_TOKEN:
            return UnlinkedExprOperation.equal;
        case GT_TOKEN:
            return UnlinkedExprOperation.greater;
        case GT_EQ_TOKEN:
            return UnlinkedExprOperation.greaterEqual;
        case GT_GT_TOKEN:
            return UnlinkedExprOperation.bitShiftRight;
        case LT_TOKEN:
            return UnlinkedExprOperation.less;
        case LT_EQ_TOKEN:
            return UnlinkedExprOperation.lessEqual;
        case LT_LT_TOKEN:
            return UnlinkedExprOperation.bitShiftLeft;
        case MINUS_TOKEN:
            return UnlinkedExprOperation.subtract;
        case PERCENT_TOKEN:
            return UnlinkedExprOperation.modulo;
        case PERIOD_TOKEN:
            return UnlinkedExprOperation.extractProperty;
        case PLUS_TOKEN:
            return UnlinkedExprOperation.add;
        case QUESTION_QUESTION_TOKEN:
            return UnlinkedExprOperation.ifNull;
        case SLASH_TOKEN:
            return UnlinkedExprOperation.divide;
        case STAR_TOKEN:
            return UnlinkedExprOperation.multiply;
        case TILDE_SLASH_TOKEN:
            return UnlinkedExprOperation.floorDivide;
        default:
            throw `Unhandled openratorKind ${operatorKind}`;
    }
};
export var _unaryOpFor : (operatorKind : number) => any = (operatorKind : number) : any =>  {
    switch (operatorKind) {
        case BANG_TOKEN:
            return UnlinkedExprOperation.not;
        case MINUS_TOKEN:
            return UnlinkedExprOperation.negate;
        default:
            throw `Unhandled operator kind ${operatorKind}`;
    }
};
export namespace Serializer {
    export type Constructors = lib3.RecursiveVisitor.Constructors | 'Serializer';
    export type Interface = Omit<Serializer, Constructors>;
}
@DartClass
export class Serializer extends lib3.RecursiveVisitor {
    expression : any;

    scope : lib4.Scope;

    forConst : boolean;

    constructor(scope : lib4.Scope,forConst : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Serializer(scope : lib4.Scope,forConst : boolean) {
        this.scope = scope;
        this.forConst = forConst;
    }
    handleAs(n : lib5.As) {
        throw new core.UnimplementedError();
    }
    handleBinary(n : lib5.Binary) {
        this.expression.operations.add(_binaryOpFor(n.operator));
    }
    handleBool(n : lib5.BoolLiteral) {
        this.expression.operations.add(n.value ? UnlinkedExprOperation.pushTrue : UnlinkedExprOperation.pushFalse);
    }
    handleConditional(n : lib5.Conditional) {
        this.expression.operations.add(UnlinkedExprOperation.conditional);
    }
    handleConstCreation(n : lib5.ConstCreation) {
        let ctor = n.constructor;
        let type = this.handleType(ctor.type);
        if (ctor.name != null) {
            throw new core.UnimplementedError();
        }else {
            this.expression.references.add(type);
        }
        this.expression.ints.add(n.namedArgs.length);
        this.expression.ints.add(n.positionalArgs.length);
        this.expression.strings.addAll(n.namedArgs.map((a : any) =>  {
            return a.name;
        }));
        this.expression.operations.add(UnlinkedExprOperation.invokeConstructor);
    }
    handleDouble(n : lib5.DoubleLiteral) {
        this.expression.operations.add(UnlinkedExprOperation.pushDouble);
        this.expression.doubles.add(n.value);
    }
    handleIdentical(n : lib5.Identical) {
        this.expression.references.add(this.handleRef(new lib5.Ref('identical'),{
            push : false}));
        this.expression.ints.add(0);
        this.expression.ints.add(2);
        this.expression.ints.add(0);
        this.expression.operations.add(UnlinkedExprOperation.invokeMethodRef);
    }
    handleInt(n : lib5.IntLiteral) {
        let ints = this.expression.ints;
        let operations = this.expression.operations;
        let value : number = n.value;
        /* TODO (AssertStatementImpl) : assert (value >= 0); */;
        if (value >= (1 << 32)) {
            let numOfComponents : number = 0;
            this.expression.ints.add(numOfComponents);
            var pushComponents : (value : number) => void = (value : number) : void =>  {
                if (value >= (1 << 32)) {
                    pushComponents(value >> 32);
                }
                numOfComponents++;
                ints.add(value & 4294967295);
            };
            pushComponents(value);
            op(Op.INDEX_ASSIGN,ints,op(Op.MINUS,op(Op.MINUS,ints.length,1),numOfComponents),numOfComponents);
            operations.add(UnlinkedExprOperation.pushLongInt);
        }else {
            operations.add(UnlinkedExprOperation.pushInt);
            ints.add(value);
        }
    }
    handleInvalid(n : lib5.Invalid) {
        this.expression.isValidConst = false;
        throw new core.UnimplementedError();
    }
    handleIs(n : lib5.Is) {
        throw new core.UnimplementedError();
    }
    handleList(n : lib5.ListLiteral) {
        this.expression.ints.add(n.values.length);
        if (op(Op.EQUALS,n.elementType,null)) {
            this.expression.operations.add(UnlinkedExprOperation.makeUntypedList);
        }else {
            this.handleType(n.elementType);
            this.expression.operations.add(UnlinkedExprOperation.makeTypedList);
        }
    }
    handleLoad(n : lib5.Load) {
        this.expression.strings.add(n.name);
        this.expression.operations.add(UnlinkedExprOperation.extractProperty);
    }
    handleMap(n : lib5.MapLiteral) {
        this.expression.ints.add(n.values.length);
        if (n.types.isEmpty) {
            this.expression.operations.add(UnlinkedExprOperation.makeUntypedMap);
        }else {
            n.types.forEach(this.handleType.bind(this));
            this.expression.operations.add(UnlinkedExprOperation.makeTypedMap);
        }
    }
    handleNull(n : lib5.NullLiteral) {
        this.expression.operations.add(UnlinkedExprOperation.pushNull);
    }
    handleOpaque(n : lib5.Opaque) {
        if (n.type != null) {
            this.handleType(n.type);
            this.expression.operations.add(UnlinkedExprOperation.pushTypedAbstract);
        }else {
            this.expression.operations.add(UnlinkedExprOperation.pushUntypedAbstract);
        }
    }
    handleOpaqueOp(n : lib5.OpaqueOp) {
    }
    handleRef(n : lib5.Ref,_namedArguments? : {push? : any}) {
        let {push} = Object.assign({
            "push" : true}, _namedArguments );
        let ref = op(Op.EQUALS,n.prefix,null) ? new lib4.LazyEntityRef(n.name,this.scope) : new lib4.NestedLazyEntityRef(this.handleRef(n.prefix,{
            push : false}),n.name,this.scope);
        if (push) {
            this.expression.references.add(ref);
            this.expression.operations.add(UnlinkedExprOperation.pushReference);
        }
        return ref;
    }
    handleString(n : lib5.StringLiteral) {
        this.expression.strings.add(n.value);
        this.expression.operations.add(UnlinkedExprOperation.pushString);
    }
    handleSymbol(n : lib5.SymbolLiteral) {
        this.expression.strings.add(n.value);
        this.expression.operations.add(UnlinkedExprOperation.makeSymbol);
    }
    handleType(n : lib5.TypeRef) {
        let t = this.handleRef(n.name,{
            push : false});
        let args = (n.typeArguments || new core.DartList.literal());
        t.typeArguments = args.map((a : any) =>  {
            return this.handleType(a);
        }).toList();
        return t;
    }
    handleUnary(n : lib5.Unary) {
        this.expression.operations.add(_unaryOpFor(n.operator));
    }
    run(root : lib5.Expression) {
        this.expression = new bare.createInstance(any,null,{
            isValidConst : this.forConst,operations : new core.DartList.literal(),assignmentOperators : new core.DartList.literal(),ints : new core.DartList.literal(),doubles : new core.DartList.literal(),strings : new core.DartList.literal(),references : new core.DartList.literal()});
        root.accept(this);
        this.expression.references.forEach((r : any) =>  {
            return (r as lib4.LazyEntityRef).expand();
        });
        return this.expression;
    }
}

export class properties {
}
