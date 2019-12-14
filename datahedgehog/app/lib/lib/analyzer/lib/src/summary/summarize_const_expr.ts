/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/summarize_const_expr.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var serializeConstructorInitializer : (node : any,serializeConstExpr : (expr : any) => any) => any = (node : any,serializeConstExpr : (expr : any) => any) : any =>  {
    if (is(node, any)) {
        return new bare.createInstance(any,null,{
            kind : UnlinkedConstructorInitializerKind.field,name : node.fieldName.name,expression : serializeConstExpr(node.expression)});
    }
    let arguments : core.DartList<any> = new core.DartList.literal<any>();
    let argumentNames : core.DartList<string> = new core.DartList.literal<string>();
    var serializeArguments : (args : core.DartList<any>) => void = (args : core.DartList<any>) : void =>  {
        for(let arg of args) {
            if (is(arg, any)) {
                let namedExpression : any = arg;
                argumentNames.add(namedExpression.name.label.name);
                arg = namedExpression.expression;
            }
            arguments.add(serializeConstExpr(arg));
        }
    };
    if (is(node, any)) {
        serializeArguments(node.message != null ? new core.DartList.literal(node.condition,node.message) : new core.DartList.literal(node.condition));
        return new bare.createInstance(any,null,{
            kind : UnlinkedConstructorInitializerKind.assertInvocation,arguments : arguments});
    }
    if (is(node, any)) {
        serializeArguments(node.argumentList.arguments);
        return new bare.createInstance(any,null,{
            kind : UnlinkedConstructorInitializerKind.thisInvocation,name : ((t)=>(!!t)?t.name:null)(((t)=>(!!t)?t.constructorName:null)(node)),arguments : arguments,argumentNames : argumentNames});
    }
    if (is(node, any)) {
        serializeArguments(node.argumentList.arguments);
        return new bare.createInstance(any,null,{
            kind : UnlinkedConstructorInitializerKind.superInvocation,name : ((t)=>(!!t)?t.name:null)(((t)=>(!!t)?t.constructorName:null)(node)),arguments : arguments,argumentNames : argumentNames});
    }
    throw new core.StateError(`Unexpected initializer type ${node.runtimeType}`);
};
export namespace AbstractConstExprSerializer {
    export type Constructors = 'AbstractConstExprSerializer';
    export type Interface = Omit<AbstractConstExprSerializer, Constructors>;
}
@DartClass
export class AbstractConstExprSerializer {
    forConst : boolean;

    isValidConst : boolean;

    name : string;

    operations : core.DartList<any>;

    assignmentOperators : core.DartList<any>;

    ints : core.DartList<number>;

    doubles : core.DartList<double>;

    strings : core.DartList<string>;

    references : core.DartList<any>;

    constructor(forConst : boolean) {
    }
    @defaultConstructor
    AbstractConstExprSerializer(forConst : boolean) {
        this.isValidConst = true;
        this.name = null;
        this.operations = new core.DartList.literal<any>();
        this.assignmentOperators = new core.DartList.literal<any>();
        this.ints = new core.DartList.literal<number>();
        this.doubles = new core.DartList.literal<double>();
        this.strings = new core.DartList.literal<string>();
        this.references = new core.DartList.literal<any>();
        this.forConst = forConst;
    }
    @Abstract
    isParameterName(name : string) : boolean{ throw 'abstract'}
    serialize(expr : any) : void {
        try {
            if (is(expr, any)) {
                let namedExpression : any = expr;
                this.name = namedExpression.name.label.name;
                expr = namedExpression.expression;
            }
            this._serialize(expr);
        } catch (__error__) {

            if (is(__error__,core.StateError)){
                this.isValidConst = false;
                this.operations.clear();
                this.assignmentOperators.clear();
                this.ints.clear();
                this.doubles.clear();
                this.strings.clear();
                this.references.clear();
            }
        }
    }
    @Abstract
    serializeAnnotation(annotation : any) : void{ throw 'abstract'}
    @Abstract
    serializeConstructorRef(type : any,typeName : any,typeArguments : any,name : any) : any{ throw 'abstract'}
    @Abstract
    serializeFunctionExpression(functionExpression : any) : core.DartList<number>{ throw 'abstract'}
    @Abstract
    serializeIdentifier(identifier : any) : any{ throw 'abstract'}
    @Abstract
    serializeIdentifierSequence(expr : any) : any{ throw 'abstract'}
    serializeInstanceCreation(constructor : any,argumentList : any) : void {
        this._serializeArguments(argumentList);
        this.references.add(constructor);
        this.operations.add(UnlinkedExprOperation.invokeConstructor);
    }
    @Abstract
    serializeType(type : any,name : any,arguments : any) : any{ throw 'abstract'}
    serializeTypeName(type : any) : any {
        if (is(type, any)) {
            return this.serializeType(((t)=>(!!t)?t.type:null)(type),((t)=>(!!t)?t.name:null)(type),((t)=>(!!t)?t.typeArguments:null)(type));
        }
        throw new core.ArgumentError(`Cannot serialize an instance of ${type.runtimeType}`);
    }
    toBuilder() : any {
        return new bare.createInstance(any,null,{
            isValidConst : this.isValidConst,operations : this.operations,assignmentOperators : this.assignmentOperators,ints : this.ints,doubles : this.doubles,strings : this.strings,references : this.references});
    }
    _isIdentifierSequence(expr : any) : boolean {
        while (expr != null){
            if (is(expr, any)) {
                let parent : any = expr.parent;
                if (is(parent, any) && op(Op.EQUALS,parent.methodName,expr)) {
                    if (parent.isCascaded) {
                        return false;
                    }
                    return op(Op.EQUALS,parent.target,null) || this._isIdentifierSequence(parent.target);
                }
                if (this.isParameterName(expr.name)) {
                    return false;
                }
                return true;
            }else if (is(expr, any)) {
                expr = (expr as any).prefix;
            }else if (is(expr, any)) {
                expr = (expr as any).target;
            }else {
                return false;
            }
        }
        return false;
    }
    _pushAssignable(expr : any) : void {
        if (this._isIdentifierSequence(expr)) {
            let ref : any = this.serializeIdentifierSequence(expr);
            this.references.add(ref);
            this.operations.add(UnlinkedExprOperation.assignToRef);
        }else if (is(expr, any)) {
            if (!expr.isCascaded) {
                this._serialize(expr.target);
            }
            this.strings.add(expr.propertyName.name);
            this.operations.add(UnlinkedExprOperation.assignToProperty);
        }else if (is(expr, any)) {
            if (!expr.isCascaded) {
                this._serialize(expr.target);
            }
            this._serialize(expr.index);
            this.operations.add(UnlinkedExprOperation.assignToIndex);
        }else if (is(expr, any)) {
            this.strings.add(expr.prefix.name);
            this.operations.add(UnlinkedExprOperation.pushParameter);
            this.strings.add(expr.identifier.name);
            this.operations.add(UnlinkedExprOperation.assignToProperty);
        }else {
            throw new core.StateError(`Unsupported assignable: ${expr}`);
        }
    }
    _pushInt(value : number) : void {
        /* TODO (AssertStatementImpl) : assert (value >= 0); */;
        if (value >= 4294967296) {
            let numOfComponents : number = 0;
            this.ints.add(numOfComponents);
            var pushComponents : (value : number) => void = (value : number) : void =>  {
                if (value >= 4294967296) {
                    pushComponents(op(Op.QUOTIENT,value,4294967296));
                }
                numOfComponents++;
                this.ints.add(value & 4294967295);
            };
            pushComponents(value);
            this.ints[this.ints.length - 1 - numOfComponents] = numOfComponents;
            this.operations.add(UnlinkedExprOperation.pushLongInt);
        }else {
            this.operations.add(UnlinkedExprOperation.pushInt);
            this.ints.add(value);
        }
    }
    _serialize(expr : any) : void {
        if (is(expr, any)) {
            this._pushInt(expr.value);
        }else if (is(expr, any)) {
            this.operations.add(UnlinkedExprOperation.pushDouble);
            this.doubles.add(expr.value);
        }else if (is(expr, any)) {
            if (expr.value) {
                this.operations.add(UnlinkedExprOperation.pushTrue);
            }else {
                this.operations.add(UnlinkedExprOperation.pushFalse);
            }
        }else if (is(expr, any)) {
            this._serializeString(expr);
        }else if (is(expr, any)) {
            this.strings.add(expr.components.map((token : any) =>  {
                return token.lexeme;
            }).join('.'));
            this.operations.add(UnlinkedExprOperation.makeSymbol);
        }else if (is(expr, any)) {
            this.operations.add(UnlinkedExprOperation.pushNull);
        }else if (is(expr, any)) {
            if (is(expr, any) && this.isParameterName(expr.name)) {
                this.strings.add(expr.name);
                this.operations.add(UnlinkedExprOperation.pushParameter);
            }else if (is(expr, any) && this.isParameterName(expr.prefix.name)) {
                this.strings.add(expr.prefix.name);
                this.operations.add(UnlinkedExprOperation.pushParameter);
                this.strings.add(expr.identifier.name);
                this.operations.add(UnlinkedExprOperation.extractProperty);
            }else {
                this.references.add(this.serializeIdentifier(expr));
                this.operations.add(UnlinkedExprOperation.pushReference);
            }
        }else if (is(expr, any)) {
            if (!expr.isConst) {
                this.isValidConst = false;
            }
            let typeName : any = expr.constructorName.type;
            this.serializeInstanceCreation(this.serializeConstructorRef(typeName.type,typeName.name,typeName.typeArguments,expr.constructorName.name),expr.argumentList);
        }else if (is(expr, any)) {
            this._serializeListLiteral(expr);
        }else if (is(expr, any)) {
            this._serializeMapLiteral(expr);
        }else if (is(expr, any)) {
            this._serializeMethodInvocation(expr);
        }else if (is(expr, any)) {
            this._serializeBinaryExpression(expr);
        }else if (is(expr, any)) {
            this._serialize(expr.condition);
            this._serialize(expr.thenExpression);
            this._serialize(expr.elseExpression);
            this.operations.add(UnlinkedExprOperation.conditional);
        }else if (is(expr, any)) {
            this._serializePrefixExpression(expr);
        }else if (is(expr, any)) {
            this._serializePostfixExpression(expr);
        }else if (is(expr, any)) {
            this._serializePropertyAccess(expr);
        }else if (is(expr, any)) {
            this._serialize(expr.expression);
        }else if (is(expr, any)) {
            this.isValidConst = false;
            this._serialize(expr.target);
            this._serialize(expr.index);
            this.operations.add(UnlinkedExprOperation.extractIndex);
        }else if (is(expr, any)) {
            this._serializeAssignment(expr);
        }else if (is(expr, any)) {
            this.isValidConst = false;
            this._serialize(expr.target);
        }else if (is(expr, any)) {
            this.isValidConst = false;
            let indices : core.DartList<number> = this.serializeFunctionExpression(expr);
            if (indices != null) {
                this.ints.addAll(this.serializeFunctionExpression(expr));
                this.operations.add(UnlinkedExprOperation.pushLocalFunctionReference);
            }else {
                this.operations.add(UnlinkedExprOperation.pushNull);
            }
        }else if (is(expr, any)) {
            this.isValidConst = false;
            this.operations.add(UnlinkedExprOperation.pushNull);
        }else if (is(expr, any)) {
            this.isValidConst = false;
            this._serialize(expr.expression);
            this.references.add(this.serializeTypeName(expr.type));
            this.operations.add(UnlinkedExprOperation.typeCast);
        }else if (is(expr, any)) {
            this.isValidConst = false;
            this._serialize(expr.expression);
            this.references.add(this.serializeTypeName(expr.type));
            this.operations.add(UnlinkedExprOperation.typeCheck);
        }else if (is(expr, any)) {
            this.operations.add(UnlinkedExprOperation.pushSuper);
        }else if (is(expr, any)) {
            this.operations.add(UnlinkedExprOperation.pushThis);
        }else if (is(expr, any)) {
            this.isValidConst = false;
            this._serialize(expr.expression);
            this.operations.add(UnlinkedExprOperation.throwException);
        }else if (is(expr, any)) {
            this.isValidConst = false;
            this._serialize(expr.expression);
            this.operations.add(UnlinkedExprOperation.await);
        }else {
            throw new core.StateError(`Unknown expression type: ${expr}`);
        }
    }
    _serializeArguments(argumentList : any) : void {
        if (this.forConst) {
            let arguments : core.DartList<any> = argumentList.arguments;
            let argumentNames : core.DartList<string> = new core.DartList.literal<string>();
            arguments.forEach((arg : any) =>  {
                if (is(arg, any)) {
                    argumentNames.add(arg.name.label.name);
                    this._serialize(arg.expression);
                }else {
                    this._serialize(arg);
                }
            });
            this.ints.add(argumentNames.length);
            this.strings.addAll(argumentNames);
            this.ints.add(arguments.length - argumentNames.length);
        }else {
            this.ints.add(0);
            this.ints.add(0);
        }
    }
    _serializeAssignment(expr : any) : void {
        this.isValidConst = false;
        this._serialize(expr.rightHandSide);
        let operator : any = expr.operator.type;
        let assignmentOperator : any;
        if (op(Op.EQUALS,operator,TokenType.EQ)) {
            assignmentOperator = UnlinkedExprAssignOperator.assign;
        }else if (op(Op.EQUALS,operator,TokenType.QUESTION_QUESTION_EQ)) {
            assignmentOperator = UnlinkedExprAssignOperator.ifNull;
        }else if (op(Op.EQUALS,operator,TokenType.STAR_EQ)) {
            assignmentOperator = UnlinkedExprAssignOperator.multiply;
        }else if (op(Op.EQUALS,operator,TokenType.SLASH_EQ)) {
            assignmentOperator = UnlinkedExprAssignOperator.divide;
        }else if (op(Op.EQUALS,operator,TokenType.TILDE_SLASH_EQ)) {
            assignmentOperator = UnlinkedExprAssignOperator.floorDivide;
        }else if (op(Op.EQUALS,operator,TokenType.PERCENT_EQ)) {
            assignmentOperator = UnlinkedExprAssignOperator.modulo;
        }else if (op(Op.EQUALS,operator,TokenType.PLUS_EQ)) {
            assignmentOperator = UnlinkedExprAssignOperator.plus;
        }else if (op(Op.EQUALS,operator,TokenType.MINUS_EQ)) {
            assignmentOperator = UnlinkedExprAssignOperator.minus;
        }else if (op(Op.EQUALS,operator,TokenType.LT_LT_EQ)) {
            assignmentOperator = UnlinkedExprAssignOperator.shiftLeft;
        }else if (op(Op.EQUALS,operator,TokenType.GT_GT_EQ)) {
            assignmentOperator = UnlinkedExprAssignOperator.shiftRight;
        }else if (op(Op.EQUALS,operator,TokenType.AMPERSAND_EQ)) {
            assignmentOperator = UnlinkedExprAssignOperator.bitAnd;
        }else if (op(Op.EQUALS,operator,TokenType.CARET_EQ)) {
            assignmentOperator = UnlinkedExprAssignOperator.bitXor;
        }else if (op(Op.EQUALS,operator,TokenType.BAR_EQ)) {
            assignmentOperator = UnlinkedExprAssignOperator.bitOr;
        }else {
            throw new core.StateError(`Unknown assignment operator: ${operator}`);
        }
        this.assignmentOperators.add(assignmentOperator);
        this._pushAssignable(expr.leftHandSide);
    }
    _serializeBinaryExpression(expr : any) : void {
        this._serialize(expr.leftOperand);
        this._serialize(expr.rightOperand);
        let operator : any = expr.operator.type;
        if (op(Op.EQUALS,operator,TokenType.EQ_EQ)) {
            this.operations.add(UnlinkedExprOperation.equal);
        }else if (op(Op.EQUALS,operator,TokenType.BANG_EQ)) {
            this.operations.add(UnlinkedExprOperation.notEqual);
        }else if (op(Op.EQUALS,operator,TokenType.AMPERSAND_AMPERSAND)) {
            this.operations.add(UnlinkedExprOperation.and);
        }else if (op(Op.EQUALS,operator,TokenType.BAR_BAR)) {
            this.operations.add(UnlinkedExprOperation.or);
        }else if (op(Op.EQUALS,operator,TokenType.CARET)) {
            this.operations.add(UnlinkedExprOperation.bitXor);
        }else if (op(Op.EQUALS,operator,TokenType.AMPERSAND)) {
            this.operations.add(UnlinkedExprOperation.bitAnd);
        }else if (op(Op.EQUALS,operator,TokenType.BAR)) {
            this.operations.add(UnlinkedExprOperation.bitOr);
        }else if (op(Op.EQUALS,operator,TokenType.GT_GT)) {
            this.operations.add(UnlinkedExprOperation.bitShiftRight);
        }else if (op(Op.EQUALS,operator,TokenType.LT_LT)) {
            this.operations.add(UnlinkedExprOperation.bitShiftLeft);
        }else if (op(Op.EQUALS,operator,TokenType.PLUS)) {
            this.operations.add(UnlinkedExprOperation.add);
        }else if (op(Op.EQUALS,operator,TokenType.MINUS)) {
            this.operations.add(UnlinkedExprOperation.subtract);
        }else if (op(Op.EQUALS,operator,TokenType.STAR)) {
            this.operations.add(UnlinkedExprOperation.multiply);
        }else if (op(Op.EQUALS,operator,TokenType.SLASH)) {
            this.operations.add(UnlinkedExprOperation.divide);
        }else if (op(Op.EQUALS,operator,TokenType.TILDE_SLASH)) {
            this.operations.add(UnlinkedExprOperation.floorDivide);
        }else if (op(Op.EQUALS,operator,TokenType.GT)) {
            this.operations.add(UnlinkedExprOperation.greater);
        }else if (op(Op.EQUALS,operator,TokenType.LT)) {
            this.operations.add(UnlinkedExprOperation.less);
        }else if (op(Op.EQUALS,operator,TokenType.GT_EQ)) {
            this.operations.add(UnlinkedExprOperation.greaterEqual);
        }else if (op(Op.EQUALS,operator,TokenType.LT_EQ)) {
            this.operations.add(UnlinkedExprOperation.lessEqual);
        }else if (op(Op.EQUALS,operator,TokenType.PERCENT)) {
            this.operations.add(UnlinkedExprOperation.modulo);
        }else if (op(Op.EQUALS,operator,TokenType.QUESTION_QUESTION)) {
            this.operations.add(UnlinkedExprOperation.ifNull);
        }else {
            throw new core.StateError(`Unknown operator: ${operator}`);
        }
    }
    _serializeListLiteral(expr : any) : void {
        if (this.forConst || op(Op.EQUALS,expr.typeArguments,null)) {
            let elements : core.DartList<any> = expr.elements;
            elements.forEach(this._serialize.bind(this));
            this.ints.add(elements.length);
        }else {
            this.ints.add(0);
        }
        if (expr.typeArguments != null && op(Op.EQUALS,expr.typeArguments.arguments.length,1)) {
            this.references.add(this.serializeTypeName(op(Op.INDEX,expr.typeArguments.arguments,0)));
            this.operations.add(UnlinkedExprOperation.makeTypedList);
        }else {
            this.operations.add(UnlinkedExprOperation.makeUntypedList);
        }
    }
    _serializeMapLiteral(expr : any) : void {
        if (this.forConst || op(Op.EQUALS,expr.typeArguments,null)) {
            for(let entry of expr.entries) {
                this._serialize(entry.key);
                this._serialize(entry.value);
            }
            this.ints.add(expr.entries.length);
        }else {
            this.ints.add(0);
        }
        if (expr.typeArguments != null && op(Op.EQUALS,expr.typeArguments.arguments.length,2)) {
            this.references.add(this.serializeTypeName(op(Op.INDEX,expr.typeArguments.arguments,0)));
            this.references.add(this.serializeTypeName(op(Op.INDEX,expr.typeArguments.arguments,1)));
            this.operations.add(UnlinkedExprOperation.makeTypedMap);
        }else {
            this.operations.add(UnlinkedExprOperation.makeUntypedMap);
        }
    }
    _serializeMethodInvocation(invocation : any) : void {
        if (invocation.target != null || invocation.methodName.name != 'identical') {
            this.isValidConst = false;
        }
        let target : any = invocation.target;
        let methodName : any = invocation.methodName;
        let argumentList : any = invocation.argumentList;
        if (this._isIdentifierSequence(methodName)) {
            let ref : any = this.serializeIdentifierSequence(methodName);
            this._serializeArguments(argumentList);
            this.references.add(ref);
            this._serializeTypeArguments(invocation.typeArguments);
            this.operations.add(UnlinkedExprOperation.invokeMethodRef);
        }else {
            if (!invocation.isCascaded) {
                this._serialize(target);
            }
            this._serializeArguments(argumentList);
            this.strings.add(methodName.name);
            this._serializeTypeArguments(invocation.typeArguments);
            this.operations.add(UnlinkedExprOperation.invokeMethod);
        }
    }
    _serializePostfixExpression(expr : any) : void {
        let operator : any = expr.operator.type;
        let operand : any = expr.operand;
        if (op(Op.EQUALS,operator,TokenType.PLUS_PLUS)) {
            this._serializePrefixPostfixIncDec(operand,UnlinkedExprAssignOperator.postfixIncrement);
        }else if (op(Op.EQUALS,operator,TokenType.MINUS_MINUS)) {
            this._serializePrefixPostfixIncDec(operand,UnlinkedExprAssignOperator.postfixDecrement);
        }else {
            throw new core.StateError(`Unknown operator: ${operator}`);
        }
    }
    _serializePrefixExpression(expr : any) : void {
        let operator : any = expr.operator.type;
        let operand : any = expr.operand;
        if (op(Op.EQUALS,operator,TokenType.BANG)) {
            this._serialize(operand);
            this.operations.add(UnlinkedExprOperation.not);
        }else if (op(Op.EQUALS,operator,TokenType.MINUS)) {
            this._serialize(operand);
            this.operations.add(UnlinkedExprOperation.negate);
        }else if (op(Op.EQUALS,operator,TokenType.TILDE)) {
            this._serialize(operand);
            this.operations.add(UnlinkedExprOperation.complement);
        }else if (op(Op.EQUALS,operator,TokenType.PLUS_PLUS)) {
            this._serializePrefixPostfixIncDec(operand,UnlinkedExprAssignOperator.prefixIncrement);
        }else if (op(Op.EQUALS,operator,TokenType.MINUS_MINUS)) {
            this._serializePrefixPostfixIncDec(operand,UnlinkedExprAssignOperator.prefixDecrement);
        }else {
            throw new core.StateError(`Unknown operator: ${operator}`);
        }
    }
    _serializePrefixPostfixIncDec(operand : any,operator : any) : void {
        this.isValidConst = false;
        this.assignmentOperators.add(operator);
        this._pushAssignable(operand);
    }
    _serializePropertyAccess(expr : any) : void {
        if (this._isIdentifierSequence(expr)) {
            let ref : any = this.serializeIdentifierSequence(expr);
            this.references.add(ref);
            this.operations.add(UnlinkedExprOperation.pushReference);
        }else {
            if (!expr.isCascaded) {
                this._serialize(expr.target);
            }
            this.strings.add(expr.propertyName.name);
            this.operations.add(UnlinkedExprOperation.extractProperty);
        }
    }
    _serializeString(expr : any) : void {
        if (is(expr, any)) {
            if (expr.strings.every((string : any) =>  {
                return is(string, any);
            })) {
                this.operations.add(UnlinkedExprOperation.pushString);
                this.strings.add(expr.stringValue);
            }else {
                expr.strings.forEach(this._serializeString.bind(this));
                this.operations.add(UnlinkedExprOperation.concatenate);
                this.ints.add(expr.strings.length);
            }
        }else if (is(expr, any)) {
            this.operations.add(UnlinkedExprOperation.pushString);
            this.strings.add(expr.value);
        }else {
            let interpolation : any = expr as any;
            for(let element of interpolation.elements) {
                if (is(element, any)) {
                    this.operations.add(UnlinkedExprOperation.pushString);
                    this.strings.add(element.value);
                }else {
                    this._serialize((element as any).expression);
                }
            }
            this.operations.add(UnlinkedExprOperation.concatenate);
            this.ints.add(interpolation.elements.length);
        }
    }
    _serializeTypeArguments(typeArguments : any) : void {
        if (op(Op.EQUALS,typeArguments,null)) {
            this.ints.add(0);
        }else {
            this.ints.add(typeArguments.arguments.length);
            for(let type of typeArguments.arguments) {
                this.references.add(this.serializeTypeName(type));
            }
        }
    }
}

export class properties {
}
