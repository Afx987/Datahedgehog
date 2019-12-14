/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_shadow_ast.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var getExplicitTypeArguments : (arguments : any) => core.DartList<any> = (arguments : any) : core.DartList<any> =>  {
    if (is(arguments, KernelArguments)) {
        return arguments._hasExplicitTypeArguments ? arguments.types : null;
    }else {
        /* TODO (AssertStatementImpl) : assert (arguments.types.isEmpty); */;
        return null;
    }
};
export namespace KernelFunctionExpression {
    export type Constructors = 'KernelFunctionExpression';
    export type Interface = Omit<KernelFunctionExpression, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelFunctionExpression extends any implements KernelExpression.Interface {
    constructor(function : any) {
    }
    @defaultConstructor
    KernelFunctionExpression(function : any) {
        super.DartObject(function);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        typeNeeded = inferrer.listener.functionExpressionEnter(this,typeContext) || typeNeeded;
        let typeParameters : core.DartList<any> = function.typeParameters;
        let formals : core.DartList<any> = ((_) : any =>  {
            {
                addAll(function.namedParameters);
                return _;
            }
        })(function.positionalParameters.toList());
        let substitution : any;
        let formalTypesFromContext : core.DartList<any> = new core.DartList.filled(formals.length,null);
        let returnContext : any;
        if (inferrer.strongMode && is(typeContext, any)) {
            for(let i : number = 0; i < formals.length; i++){
                if (i < function.positionalParameters.length) {
                    formalTypesFromContext[i] = inferrer.getPositionalParameterType(typeContext,i);
                }else {
                    formalTypesFromContext[i] = inferrer.getNamedParameterType(typeContext,formals[i].name);
                }
            }
            returnContext = typeContext.returnType;
            let substitutionMap = new core.DartMap.literal([
            ]);
            for(let i : number = 0; i < typeContext.typeParameters.length; i++){
                substitutionMap.set(op(Op.INDEX,typeContext.typeParameters,i),i < typeParameters.length ? new bare.createInstance(any,null,typeParameters[i]) : new bare.createInstance(any,null));
            }
            substitution = Substitution.fromMap(substitutionMap);
        }else {
            substitution = Substitution.empty;
        }
        for(let i : number = 0; i < formals.length; i++){
            let formal : KernelVariableDeclaration = formals[i];
            if (KernelVariableDeclaration.isImplicitlyTyped(formal)) {
                let inferredType : any;
                if (formalTypesFromContext[i] != null) {
                    inferredType = greatestClosure(inferrer.coreTypes,substitution.substituteType(formalTypesFromContext[i]));
                }else {
                    inferredType = new bare.createInstance(any,null);
                }
                ((_545_)=>(!!_545_)?_545_.record(lib3.Uri.parse(inferrer.uri),formal.fileOffset,'type',new bare.createInstance(any,null,inferredType)):null)(inferrer.instrumentation);
                formal.type = inferredType;
            }
        }
        if (returnContext != null) {
            returnContext = substitution.substituteType(returnContext);
        }
        let isExpressionFunction : boolean = is(function.body, any);
        let needToSetReturnType : boolean = isExpressionFunction || inferrer.strongMode;
        let oldClosureContext : any = inferrer.closureContext;
        let closureContext : any = new bare.createInstance(any,null,inferrer,function.asyncMarker,returnContext);
        inferrer.closureContext = closureContext;
        inferrer.inferStatement(function.body);
        let inferredReturnType : any;
        if (needToSetReturnType || typeNeeded) {
            inferredReturnType = closureContext.inferReturnType(inferrer,isExpressionFunction);
        }
        if (needToSetReturnType) {
            ((_546_)=>(!!_546_)?_546_.record(lib3.Uri.parse(inferrer.uri),fileOffset,'returnType',new bare.createInstance(any,null,inferredReturnType)):null)(inferrer.instrumentation);
            function.returnType = inferredReturnType;
        }
        inferrer.closureContext = oldClosureContext;
        let inferredType = typeNeeded ? function.functionType : null;
        inferrer.listener.functionExpressionExit(this,inferredType);
        return inferredType;
    }
}

export namespace KernelAsExpression {
    export type Constructors = 'KernelAsExpression';
    export type Interface = Omit<KernelAsExpression, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelAsExpression extends any implements KernelExpression.Interface {
    constructor(operand : any,type : any) {
    }
    @defaultConstructor
    KernelAsExpression(operand : any,type : any) {
        super.DartObject(operand,type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        typeNeeded = inferrer.listener.asExpressionEnter(this,typeContext) || typeNeeded;
        inferrer.inferExpression(operand,null,false);
        let inferredType = typeNeeded ? type : null;
        inferrer.listener.asExpressionExit(this,inferredType);
        return inferredType;
    }
}

export namespace KernelAwaitExpression {
    export type Constructors = 'KernelAwaitExpression';
    export type Interface = Omit<KernelAwaitExpression, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelAwaitExpression extends any implements KernelExpression.Interface {
    constructor(operand : any) {
    }
    @defaultConstructor
    KernelAwaitExpression(operand : any) {
        super.DartObject(operand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        return typeNeeded ? new bare.createInstance(any,null) : null;
    }
}

export namespace KernelBlock {
    export type Constructors = 'KernelBlock';
    export type Interface = Omit<KernelBlock, Constructors>;
}
@DartClass
@Implements(KernelStatement)
export class KernelBlock extends any implements KernelStatement.Interface {
    constructor(statements : core.DartList<any>) {
    }
    @defaultConstructor
    KernelBlock(statements : core.DartList<any>) {
        super.DartObject(statements);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferStatement(inferrer : KernelTypeInferrer) : void {
        inferrer.listener.blockEnter(this);
        for(let statement of statements) {
            inferrer.inferStatement(statement);
        }
        inferrer.listener.blockExit(this);
    }
}

export namespace KernelBoolLiteral {
    export type Constructors = 'KernelBoolLiteral';
    export type Interface = Omit<KernelBoolLiteral, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelBoolLiteral extends any implements KernelExpression.Interface {
    constructor(value : boolean) {
    }
    @defaultConstructor
    KernelBoolLiteral(value : boolean) {
        super.DartObject(value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        typeNeeded = inferrer.listener.boolLiteralEnter(this,typeContext) || typeNeeded;
        let inferredType = typeNeeded ? inferrer.coreTypes.boolClass.rawType : null;
        inferrer.listener.boolLiteralExit(this,inferredType);
        return inferredType;
    }
}

export namespace KernelConditionalExpression {
    export type Constructors = 'KernelConditionalExpression';
    export type Interface = Omit<KernelConditionalExpression, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelConditionalExpression extends any implements KernelExpression.Interface {
    constructor(condition : any,then : any,otherwise : any) {
    }
    @defaultConstructor
    KernelConditionalExpression(condition : any,then : any,otherwise : any) {
        super.DartObject(condition,then,otherwise,new bare.createInstance(any,null));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        typeNeeded = inferrer.listener.conditionalExpressionEnter(this,typeContext) || typeNeeded;
        inferrer.inferExpression(condition,inferrer.coreTypes.boolClass.rawType,false);
        let thenType : any = inferrer.inferExpression(then,typeContext,true);
        let otherwiseType : any = inferrer.inferExpression(otherwise,typeContext,true);
        let type : any = inferrer.typeSchemaEnvironment.getLeastUpperBound(thenType,otherwiseType);
        staticType = type;
        let inferredType = typeNeeded ? type : null;
        inferrer.listener.conditionalExpressionExit(this,inferredType);
        return inferredType;
    }
}

export namespace KernelConstructorInvocation {
    export type Constructors = 'KernelConstructorInvocation' | 'byReference';
    export type Interface = Omit<KernelConstructorInvocation, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelConstructorInvocation extends any implements KernelExpression.Interface {
    constructor(target : any,arguments : any,_namedArguments? : {isConst? : boolean}) {
    }
    @defaultConstructor
    KernelConstructorInvocation(target : any,arguments : any,_namedArguments? : {isConst? : boolean}) {
        let {isConst} = Object.assign({
            "isConst" : false}, _namedArguments );
        super.DartObject(target,arguments,{
            isConst : isConst});
    }
    @namedConstructor
    byReference(targetReference : any,arguments : any) {
        super.byReference(targetReference,arguments);
    }
    static byReference : new(targetReference : any,arguments : any) => KernelConstructorInvocation;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        typeNeeded = inferrer.listener.constructorInvocationEnter(this,typeContext) || typeNeeded;
        let inferredType = inferrer.inferInvocation(typeContext,typeNeeded,fileOffset,target.function.functionType,target.enclosingClass.thisType,arguments);
        inferrer.listener.constructorInvocationExit(this,inferredType);
        return inferredType;
    }
}

export namespace KernelDirectMethodInvocation {
    export type Constructors = 'KernelDirectMethodInvocation' | 'byReference';
    export type Interface = Omit<KernelDirectMethodInvocation, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelDirectMethodInvocation extends any implements KernelExpression.Interface {
    constructor(receiver : any,target : any,arguments : any) {
    }
    @defaultConstructor
    KernelDirectMethodInvocation(receiver : any,target : any,arguments : any) {
        super.DartObject(receiver,target,arguments);
    }
    @namedConstructor
    byReference(receiver : any,targetReference : any,arguments : any) {
        super.byReference(receiver,targetReference,arguments);
    }
    static byReference : new(receiver : any,targetReference : any,arguments : any) => KernelDirectMethodInvocation;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        return typeNeeded ? new bare.createInstance(any,null) : null;
    }
}

export namespace KernelDirectPropertyGet {
    export type Constructors = 'KernelDirectPropertyGet' | 'byReference';
    export type Interface = Omit<KernelDirectPropertyGet, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelDirectPropertyGet extends any implements KernelExpression.Interface {
    constructor(receiver : any,target : any) {
    }
    @defaultConstructor
    KernelDirectPropertyGet(receiver : any,target : any) {
        super.DartObject(receiver,target);
    }
    @namedConstructor
    byReference(receiver : any,targetReference : any) {
        super.byReference(receiver,targetReference);
    }
    static byReference : new(receiver : any,targetReference : any) => KernelDirectPropertyGet;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        return typeNeeded ? new bare.createInstance(any,null) : null;
    }
}

export namespace KernelDirectPropertySet {
    export type Constructors = 'KernelDirectPropertySet' | 'byReference';
    export type Interface = Omit<KernelDirectPropertySet, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelDirectPropertySet extends any implements KernelExpression.Interface {
    constructor(receiver : any,target : any,value : any) {
    }
    @defaultConstructor
    KernelDirectPropertySet(receiver : any,target : any,value : any) {
        super.DartObject(receiver,target,value);
    }
    @namedConstructor
    byReference(receiver : any,targetReference : any,value : any) {
        super.byReference(receiver,targetReference,value);
    }
    static byReference : new(receiver : any,targetReference : any,value : any) => KernelDirectPropertySet;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        return typeNeeded ? new bare.createInstance(any,null) : null;
    }
}

export namespace KernelDoubleLiteral {
    export type Constructors = 'KernelDoubleLiteral';
    export type Interface = Omit<KernelDoubleLiteral, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelDoubleLiteral extends any implements KernelExpression.Interface {
    constructor(value : double) {
    }
    @defaultConstructor
    KernelDoubleLiteral(value : double) {
        super.DartObject(value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        typeNeeded = inferrer.listener.doubleLiteralEnter(this,typeContext) || typeNeeded;
        let inferredType = typeNeeded ? inferrer.coreTypes.doubleClass.rawType : null;
        inferrer.listener.doubleLiteralExit(this,inferredType);
        return inferredType;
    }
}

export namespace KernelExpression {
    export type Constructors = 'KernelExpression';
    export type Interface = Omit<KernelExpression, Constructors>;
}
@DartClass
@Implements(any)
export class KernelExpression implements any.Interface {
    @Abstract
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    KernelExpression() {
    }
}

export namespace KernelExpressionStatement {
    export type Constructors = 'KernelExpressionStatement';
    export type Interface = Omit<KernelExpressionStatement, Constructors>;
}
@DartClass
@Implements(KernelStatement)
export class KernelExpressionStatement extends any implements KernelStatement.Interface {
    constructor(expression : any) {
    }
    @defaultConstructor
    KernelExpressionStatement(expression : any) {
        super.DartObject(expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferStatement(inferrer : KernelTypeInferrer) : void {
        inferrer.listener.expressionStatementEnter(this);
        inferrer.inferExpression(expression,null,false);
        inferrer.listener.expressionStatementExit(this);
    }
}

export namespace KernelFactoryConstructorInvocation {
    export type Constructors = 'KernelFactoryConstructorInvocation';
    export type Interface = Omit<KernelFactoryConstructorInvocation, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelFactoryConstructorInvocation extends any implements KernelExpression.Interface {
    constructor(target : any,arguments : any,_namedArguments? : {isConst? : boolean}) {
    }
    @defaultConstructor
    KernelFactoryConstructorInvocation(target : any,arguments : any,_namedArguments? : {isConst? : boolean}) {
        let {isConst} = Object.assign({
            "isConst" : false}, _namedArguments );
        super.DartObject(target,arguments,{
            isConst : isConst});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        typeNeeded = inferrer.listener.constructorInvocationEnter(this,typeContext) || typeNeeded;
        let returnType = target.enclosingClass.thisType;
        if (target.enclosingClass.typeParameters.isNotEmpty) {
            returnType = Substitution.fromPairs(target.enclosingClass.typeParameters,target.function.functionType.typeParameters.map((p : any) =>  {
                return new bare.createInstance(any,null,p);
            }).toList()).substituteType(returnType);
        }
        let inferredType = inferrer.inferInvocation(typeContext,typeNeeded,fileOffset,target.function.functionType,returnType,arguments);
        inferrer.listener.constructorInvocationExit(this,inferredType);
        return inferredType;
    }
}

export namespace KernelField {
    export type Constructors = 'KernelField';
    export type Interface = Omit<KernelField, Constructors>;
}
@DartClass
export class KernelField extends any {
    _implicitlyTyped : boolean;

    _fieldNode : any;

    _isInferred : boolean;

    _typeInferrer : KernelTypeInferrer;

    constructor(name : any,_namedArguments? : {fileUri? : string}) {
    }
    @defaultConstructor
    KernelField(name : any,_namedArguments? : {fileUri? : string}) {
        let {fileUri} = Object.assign({
        }, _namedArguments );
        this._implicitlyTyped = true;
        this._isInferred = false;
        super.DartObject(name,{
            fileUri : fileUri});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set type(value : any) {
        this._implicitlyTyped = false;
        super.type = value;
    }
    get _fileUri() : string {
        return enclosingLibrary.importUri.toString();
    }
    _setInferredType(inferredType : any) : void {
        this._isInferred = true;
        super.type = inferredType;
    }
}

export namespace KernelFunctionDeclaration {
    export type Constructors = 'KernelFunctionDeclaration';
    export type Interface = Omit<KernelFunctionDeclaration, Constructors>;
}
@DartClass
@Implements(KernelStatement)
export class KernelFunctionDeclaration extends any implements KernelStatement.Interface {
    constructor(variable : any,function : any) {
    }
    @defaultConstructor
    KernelFunctionDeclaration(variable : any,function : any) {
        super.DartObject(variable,function);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferStatement(inferrer : KernelTypeInferrer) : void {
        inferrer.listener.functionDeclarationEnter(this);
        let oldClosureContext = inferrer.closureContext;
        inferrer.closureContext = new bare.createInstance(any,null,inferrer,function.asyncMarker,function.returnType);
        inferrer.inferStatement(function.body);
        inferrer.closureContext = oldClosureContext;
        inferrer.listener.functionDeclarationExit(this);
    }
}

export namespace KernelArguments {
    export type Constructors = 'KernelArguments';
    export type Interface = Omit<KernelArguments, Constructors>;
}
@DartClass
export class KernelArguments extends any {
    _hasExplicitTypeArguments : boolean;

    constructor(positional : core.DartList<any>,_namedArguments? : {types? : core.DartList<any>,named? : core.DartList<any>}) {
    }
    @defaultConstructor
    KernelArguments(positional : core.DartList<any>,_namedArguments? : {types? : core.DartList<any>,named? : core.DartList<any>}) {
        let {types,named} = Object.assign({
        }, _namedArguments );
        this._hasExplicitTypeArguments = types != null && types.isNotEmpty;
        super.DartObject(positional,{
            types : types,named : named});
    }
    static setExplicitArgumentTypes(arguments : KernelArguments,types : core.DartList<any>) : void {
        arguments.types.clear();
        arguments.types.addAll(types);
        arguments._hasExplicitTypeArguments = true;
    }
}

export namespace KernelIfStatement {
    export type Constructors = 'KernelIfStatement';
    export type Interface = Omit<KernelIfStatement, Constructors>;
}
@DartClass
@Implements(KernelStatement)
export class KernelIfStatement extends any implements KernelStatement.Interface {
    constructor(condition : any,then : any,otherwise : any) {
    }
    @defaultConstructor
    KernelIfStatement(condition : any,then : any,otherwise : any) {
        super.DartObject(condition,then,otherwise);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferStatement(inferrer : KernelTypeInferrer) : void {
        inferrer.listener.ifStatementEnter(this);
        inferrer.inferExpression(condition,inferrer.coreTypes.boolClass.rawType,false);
        inferrer.inferStatement(then);
        if (otherwise != null) inferrer.inferStatement(otherwise);
        inferrer.listener.ifStatementExit(this);
    }
}

export namespace KernelIntLiteral {
    export type Constructors = 'KernelIntLiteral';
    export type Interface = Omit<KernelIntLiteral, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelIntLiteral extends any implements KernelExpression.Interface {
    constructor(value : number) {
    }
    @defaultConstructor
    KernelIntLiteral(value : number) {
        super.DartObject(value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        typeNeeded = inferrer.listener.intLiteralEnter(this,typeContext) || typeNeeded;
        let inferredType = typeNeeded ? inferrer.coreTypes.intClass.rawType : null;
        inferrer.listener.intLiteralExit(this,inferredType);
        return inferredType;
    }
}

export namespace KernelIsExpression {
    export type Constructors = 'KernelIsExpression';
    export type Interface = Omit<KernelIsExpression, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelIsExpression extends any implements KernelExpression.Interface {
    constructor(operand : any,type : any) {
    }
    @defaultConstructor
    KernelIsExpression(operand : any,type : any) {
        super.DartObject(operand,type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        typeNeeded = inferrer.listener.isExpressionEnter(this,typeContext) || typeNeeded;
        inferrer.inferExpression(operand,null,false);
        let inferredType = typeNeeded ? inferrer.coreTypes.boolClass.rawType : null;
        inferrer.listener.isExpressionExit(this,inferredType);
        return inferredType;
    }
}

export namespace KernelIsNotExpression {
    export type Constructors = 'KernelIsNotExpression';
    export type Interface = Omit<KernelIsNotExpression, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelIsNotExpression extends any implements KernelExpression.Interface {
    constructor(operand : any,type : any,charOffset : number) {
    }
    @defaultConstructor
    KernelIsNotExpression(operand : any,type : any,charOffset : number) {
        super.DartObject(((_) : any =>  {
            {
                _.fileOffset = charOffset;
                return _;
            }
        })(new bare.createInstance(any,null,operand,type)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        let isExpression : any = this.operand;
        typeNeeded = inferrer.listener.isNotExpressionEnter(this,typeContext) || typeNeeded;
        inferrer.inferExpression(isExpression.operand,null,false);
        let inferredType = typeNeeded ? inferrer.coreTypes.boolClass.rawType : null;
        inferrer.listener.isNotExpressionExit(this,inferredType);
        return inferredType;
    }
}

export namespace KernelListLiteral {
    export type Constructors = 'KernelListLiteral';
    export type Interface = Omit<KernelListLiteral, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelListLiteral extends any implements KernelExpression.Interface {
    _declaredTypeArgument : any;

    constructor(expressions : core.DartList<any>,_namedArguments? : {typeArgument? : any,isConst? : boolean}) {
    }
    @defaultConstructor
    KernelListLiteral(expressions : core.DartList<any>,_namedArguments? : {typeArgument? : any,isConst? : boolean}) {
        let {typeArgument,isConst} = Object.assign({
            "isConst" : false}, _namedArguments );
        this._declaredTypeArgument = typeArgument;
        super.DartObject(expressions,{
            typeArgument : (typeArgument || new bare.createInstance(any,null)),isConst : isConst});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        typeNeeded = inferrer.listener.listLiteralEnter(this,typeContext) || typeNeeded;
        let listClass = inferrer.coreTypes.listClass;
        let listType = listClass.thisType;
        let inferredTypes : core.DartList<any>;
        let inferredTypeArgument : any;
        let formalTypes : core.DartList<any>;
        let actualTypes : core.DartList<any>;
        let inferenceNeeded : boolean = op(Op.EQUALS,this._declaredTypeArgument,null) && inferrer.strongMode;
        if (inferenceNeeded) {
            inferredTypes = new core.DartList.literal(new bare.createInstance(any,null));
            inferrer.typeSchemaEnvironment.inferGenericFunctionOrType(listType,listClass.typeParameters,null,null,typeContext,inferredTypes);
            inferredTypeArgument = inferredTypes[0];
            formalTypes = new core.DartList.literal();
            actualTypes = new core.DartList.literal();
        }else {
            inferredTypeArgument = (this._declaredTypeArgument || new bare.createInstance(any,null));
        }
        for(let expression of expressions) {
            let expressionType = inferrer.inferExpression(expression,inferredTypeArgument,inferenceNeeded);
            if (inferenceNeeded) {
                formalTypes.add(op(Op.INDEX,listType.typeArguments,0));
                actualTypes.add(expressionType);
            }
        }
        if (inferenceNeeded) {
            inferrer.typeSchemaEnvironment.inferGenericFunctionOrType(listType,listClass.typeParameters,formalTypes,actualTypes,typeContext,inferredTypes);
            inferredTypeArgument = inferredTypes[0];
            ((_547_)=>(!!_547_)?_547_.record(lib3.Uri.parse(inferrer.uri),fileOffset,'typeArgs',new bare.createInstance(any,null,new core.DartList.literal(inferredTypeArgument))):null)(inferrer.instrumentation);
            typeArgument = inferredTypeArgument;
        }
        let inferredType = typeNeeded ? new bare.createInstance(any,null,listClass,new core.DartList.literal(inferredTypeArgument)) : null;
        inferrer.listener.listLiteralExit(this,inferredType);
        return inferredType;
    }
}

export namespace KernelLogicalExpression {
    export type Constructors = 'KernelLogicalExpression';
    export type Interface = Omit<KernelLogicalExpression, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelLogicalExpression extends any implements KernelExpression.Interface {
    constructor(left : any,operator : string,right : any) {
    }
    @defaultConstructor
    KernelLogicalExpression(left : any,operator : string,right : any) {
        super.DartObject(left,operator,right);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        return typeNeeded ? new bare.createInstance(any,null) : null;
    }
}

export namespace KernelMapLiteral {
    export type Constructors = 'KernelMapLiteral';
    export type Interface = Omit<KernelMapLiteral, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelMapLiteral extends any implements KernelExpression.Interface {
    constructor(entries : core.DartList<any>,_namedArguments? : {keyType? : any,valueType? : any,isConst? : boolean}) {
    }
    @defaultConstructor
    KernelMapLiteral(entries : core.DartList<any>,_namedArguments? : {keyType? : any,valueType? : any,isConst? : boolean}) {
        let {keyType,valueType,isConst} = Object.assign({
            "keyType" : new bare.createInstance(any,null),
            "valueType" : new bare.createInstance(any,null),
            "isConst" : false}, _namedArguments );
        super.DartObject(entries,{
            keyType : keyType,valueType : valueType,isConst : isConst});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        return typeNeeded ? new bare.createInstance(any,null) : null;
    }
}

export namespace KernelMethodInvocation {
    export type Constructors = 'KernelMethodInvocation' | 'byReference';
    export type Interface = Omit<KernelMethodInvocation, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelMethodInvocation extends any implements KernelExpression.Interface {
    constructor(receiver : any,name : any,arguments : any,interfaceTarget? : any) {
    }
    @defaultConstructor
    KernelMethodInvocation(receiver : any,name : any,arguments : any,interfaceTarget? : any) {
        super.DartObject(receiver,name,arguments,interfaceTarget);
    }
    @namedConstructor
    byReference(receiver : any,name : any,arguments : any,interfaceTargetReference : any) {
        super.byReference(receiver,name,arguments,interfaceTargetReference);
    }
    static byReference : new(receiver : any,name : any,arguments : any,interfaceTargetReference : any) => KernelMethodInvocation;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        typeNeeded = inferrer.listener.methodInvocationEnter(this,typeContext) || typeNeeded;
        let receiverType = inferrer.inferExpression(receiver,null,true);
        let isOverloadedArithmeticOperator : boolean = false;
        let interfaceMember : any;
        if (is(receiverType, any)) {
            interfaceMember = inferrer.classHierarchy.getInterfaceMember(receiverType.classNode,name);
            if (is(interfaceMember, any)) {
                if (inferrer.strongMode) {
                    interfaceTarget = interfaceMember;
                }
                isOverloadedArithmeticOperator = inferrer.typeSchemaEnvironment.isOverloadedArithmeticOperator(interfaceMember);
            }
        }
        let calleeType = inferrer.getCalleeFunctionType(interfaceMember,receiverType,name,fileOffset);
        let inferredType = inferrer.inferInvocation(typeContext,typeNeeded,fileOffset,calleeType,calleeType.returnType,arguments,{
            isOverloadedArithmeticOperator : isOverloadedArithmeticOperator,receiverType : receiverType});
        inferrer.listener.methodInvocationExit(this,inferredType);
        return inferredType;
    }
}

export namespace KernelNot {
    export type Constructors = 'KernelNot';
    export type Interface = Omit<KernelNot, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelNot extends any implements KernelExpression.Interface {
    constructor(operand : any) {
    }
    @defaultConstructor
    KernelNot(operand : any) {
        super.DartObject(operand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        return typeNeeded ? new bare.createInstance(any,null) : null;
    }
}

export namespace KernelNullLiteral {
    export type Constructors = 'KernelNullLiteral';
    export type Interface = Omit<KernelNullLiteral, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelNullLiteral extends any implements KernelExpression.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        typeNeeded = inferrer.listener.nullLiteralEnter(this,typeContext) || typeNeeded;
        let inferredType = typeNeeded ? inferrer.coreTypes.nullClass.rawType : null;
        inferrer.listener.nullLiteralExit(this,inferredType);
        return inferredType;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelNullLiteral() {
    }
}

export namespace KernelPropertyGet {
    export type Constructors = 'KernelPropertyGet' | 'byReference';
    export type Interface = Omit<KernelPropertyGet, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelPropertyGet extends any implements KernelExpression.Interface {
    constructor(receiver : any,name : any,interfaceTarget? : any) {
    }
    @defaultConstructor
    KernelPropertyGet(receiver : any,name : any,interfaceTarget? : any) {
        super.DartObject(receiver,name,interfaceTarget);
    }
    @namedConstructor
    byReference(receiver : any,name : any,interfaceTargetReference : any) {
        super.byReference(receiver,name,interfaceTargetReference);
    }
    static byReference : new(receiver : any,name : any,interfaceTargetReference : any) => KernelPropertyGet;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        return typeNeeded ? new bare.createInstance(any,null) : null;
    }
}

export namespace KernelPropertySet {
    export type Constructors = 'KernelPropertySet' | 'byReference';
    export type Interface = Omit<KernelPropertySet, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelPropertySet extends any implements KernelExpression.Interface {
    constructor(receiver : any,name : any,value : any,interfaceTarget? : any) {
    }
    @defaultConstructor
    KernelPropertySet(receiver : any,name : any,value : any,interfaceTarget? : any) {
        super.DartObject(receiver,name,value,interfaceTarget);
    }
    @namedConstructor
    byReference(receiver : any,name : any,value : any,interfaceTargetReference : any) {
        super.byReference(receiver,name,value,interfaceTargetReference);
    }
    static byReference : new(receiver : any,name : any,value : any,interfaceTargetReference : any) => KernelPropertySet;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        return typeNeeded ? new bare.createInstance(any,null) : null;
    }
}

export namespace KernelRethrow {
    export type Constructors = 'KernelRethrow';
    export type Interface = Omit<KernelRethrow, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelRethrow extends any implements KernelExpression.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        return typeNeeded ? new bare.createInstance(any,null) : null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelRethrow() {
    }
}

export namespace KernelReturnStatement {
    export type Constructors = 'KernelReturnStatement';
    export type Interface = Omit<KernelReturnStatement, Constructors>;
}
@DartClass
@Implements(KernelStatement)
export class KernelReturnStatement extends any implements KernelStatement.Interface {
    constructor(expression? : any) {
    }
    @defaultConstructor
    KernelReturnStatement(expression? : any) {
        super.DartObject(expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferStatement(inferrer : KernelTypeInferrer) : void {
        inferrer.listener.returnStatementEnter(this);
        let closureContext = inferrer.closureContext;
        let typeContext = !closureContext.isGenerator ? closureContext.returnContext : null;
        let inferredType = expression != null ? inferrer.inferExpression(expression,typeContext,true) : new bare.createInstance(any,null);
        if (expression != null) {
            closureContext.handleReturn(inferrer,inferredType);
        }
        inferrer.listener.returnStatementExit(this);
    }
}

export namespace KernelStatement {
    export type Constructors = 'KernelStatement';
    export type Interface = Omit<KernelStatement, Constructors>;
}
@DartClass
export class KernelStatement extends any {
    @Abstract
    _inferStatement(inferrer : KernelTypeInferrer) : void{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelStatement() {
    }
}

export namespace KernelYieldStatement {
    export type Constructors = 'KernelYieldStatement';
    export type Interface = Omit<KernelYieldStatement, Constructors>;
}
@DartClass
@Implements(KernelStatement)
export class KernelYieldStatement extends any implements KernelStatement.Interface {
    constructor(expression : any,_namedArguments? : {isYieldStar? : boolean}) {
    }
    @defaultConstructor
    KernelYieldStatement(expression : any,_namedArguments? : {isYieldStar? : boolean}) {
        let {isYieldStar} = Object.assign({
            "isYieldStar" : false}, _namedArguments );
        super.DartObject(expression,{
            isYieldStar : isYieldStar});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferStatement(inferrer : KernelTypeInferrer) : void {
        inferrer.listener.yieldStatementEnter(this);
        let closureContext = inferrer.closureContext;
        let typeContext = closureContext.isGenerator ? closureContext.returnContext : null;
        if (isYieldStar && typeContext != null) {
            typeContext = inferrer.wrapType(typeContext,closureContext.isAsync ? inferrer.coreTypes.streamClass : inferrer.coreTypes.iterableClass);
        }
        let inferredType = inferrer.inferExpression(expression,typeContext,closureContext != null);
        closureContext.handleYield(inferrer,isYieldStar,inferredType);
        inferrer.listener.yieldStatementExit(this);
    }
}

export namespace KernelStaticInvocation {
    export type Constructors = 'KernelStaticInvocation' | 'byReference';
    export type Interface = Omit<KernelStaticInvocation, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelStaticInvocation extends any implements KernelExpression.Interface {
    constructor(target : any,arguments : any,_namedArguments? : {isConst? : boolean}) {
    }
    @defaultConstructor
    KernelStaticInvocation(target : any,arguments : any,_namedArguments? : {isConst? : boolean}) {
        let {isConst} = Object.assign({
            "isConst" : false}, _namedArguments );
        super.DartObject(target,arguments,{
            isConst : isConst});
    }
    @namedConstructor
    byReference(targetReference : any,arguments : any) {
        super.byReference(targetReference,arguments);
    }
    static byReference : new(targetReference : any,arguments : any) => KernelStaticInvocation;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        typeNeeded = inferrer.listener.staticInvocationEnter(this,typeContext) || typeNeeded;
        let calleeType = target.function.functionType;
        let inferredType = inferrer.inferInvocation(typeContext,typeNeeded,fileOffset,calleeType,calleeType.returnType,arguments);
        inferrer.listener.staticInvocationExit(this,inferredType);
        return inferredType;
    }
}

export namespace KernelStaticSet {
    export type Constructors = 'KernelStaticSet' | 'byReference';
    export type Interface = Omit<KernelStaticSet, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelStaticSet extends any implements KernelExpression.Interface {
    constructor(target : any,value : any) {
    }
    @defaultConstructor
    KernelStaticSet(target : any,value : any) {
        super.DartObject(target,value);
    }
    @namedConstructor
    byReference(targetReference : any,value : any) {
        super.byReference(targetReference,value);
    }
    static byReference : new(targetReference : any,value : any) => KernelStaticSet;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        return typeNeeded ? new bare.createInstance(any,null) : null;
    }
}

export namespace KernelStringConcatenation {
    export type Constructors = 'KernelStringConcatenation';
    export type Interface = Omit<KernelStringConcatenation, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelStringConcatenation extends any implements KernelExpression.Interface {
    constructor(expressions : core.DartList<any>) {
    }
    @defaultConstructor
    KernelStringConcatenation(expressions : core.DartList<any>) {
        super.DartObject(expressions);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        typeNeeded = inferrer.listener.stringConcatenationEnter(this,typeContext) || typeNeeded;
        for(let expression of expressions) {
            inferrer.inferExpression(expression,null,false);
        }
        let inferredType = typeNeeded ? inferrer.coreTypes.stringClass.rawType : null;
        inferrer.listener.stringConcatenationExit(this,inferredType);
        return inferredType;
    }
}

export namespace KernelStringLiteral {
    export type Constructors = 'KernelStringLiteral';
    export type Interface = Omit<KernelStringLiteral, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelStringLiteral extends any implements KernelExpression.Interface {
    constructor(value : string) {
    }
    @defaultConstructor
    KernelStringLiteral(value : string) {
        super.DartObject(value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        typeNeeded = inferrer.listener.stringLiteralEnter(this,typeContext) || typeNeeded;
        let inferredType = typeNeeded ? inferrer.coreTypes.stringClass.rawType : null;
        inferrer.listener.stringLiteralExit(this,inferredType);
        return inferredType;
    }
}

export namespace KernelSuperMethodInvocation {
    export type Constructors = 'KernelSuperMethodInvocation' | 'byReference';
    export type Interface = Omit<KernelSuperMethodInvocation, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelSuperMethodInvocation extends any implements KernelExpression.Interface {
    constructor(name : any,arguments : any,interfaceTarget? : any) {
    }
    @defaultConstructor
    KernelSuperMethodInvocation(name : any,arguments : any,interfaceTarget? : any) {
        super.DartObject(name,arguments,interfaceTarget);
    }
    @namedConstructor
    byReference(name : any,arguments : any,interfaceTargetReference : any) {
        super.byReference(name,arguments,interfaceTargetReference);
    }
    static byReference : new(name : any,arguments : any,interfaceTargetReference : any) => KernelSuperMethodInvocation;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        return typeNeeded ? new bare.createInstance(any,null) : null;
    }
}

export namespace KernelSuperPropertyGet {
    export type Constructors = 'KernelSuperPropertyGet' | 'byReference';
    export type Interface = Omit<KernelSuperPropertyGet, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelSuperPropertyGet extends any implements KernelExpression.Interface {
    constructor(name : any,interfaceTarget? : any) {
    }
    @defaultConstructor
    KernelSuperPropertyGet(name : any,interfaceTarget? : any) {
        super.DartObject(name,interfaceTarget);
    }
    @namedConstructor
    byReference(name : any,interfaceTargetReference : any) {
        super.byReference(name,interfaceTargetReference);
    }
    static byReference : new(name : any,interfaceTargetReference : any) => KernelSuperPropertyGet;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        return typeNeeded ? new bare.createInstance(any,null) : null;
    }
}

export namespace KernelSuperPropertySet {
    export type Constructors = 'KernelSuperPropertySet' | 'byReference';
    export type Interface = Omit<KernelSuperPropertySet, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelSuperPropertySet extends any implements KernelExpression.Interface {
    constructor(name : any,value : any,interfaceTarget : any) {
    }
    @defaultConstructor
    KernelSuperPropertySet(name : any,value : any,interfaceTarget : any) {
        super.DartObject(name,value,interfaceTarget);
    }
    @namedConstructor
    byReference(name : any,value : any,interfaceTargetReference : any) {
        super.byReference(name,value,interfaceTargetReference);
    }
    static byReference : new(name : any,value : any,interfaceTargetReference : any) => KernelSuperPropertySet;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        return typeNeeded ? new bare.createInstance(any,null) : null;
    }
}

export namespace KernelSymbolLiteral {
    export type Constructors = 'KernelSymbolLiteral';
    export type Interface = Omit<KernelSymbolLiteral, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelSymbolLiteral extends any implements KernelExpression.Interface {
    constructor(value : string) {
    }
    @defaultConstructor
    KernelSymbolLiteral(value : string) {
        super.DartObject(value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        return typeNeeded ? new bare.createInstance(any,null) : null;
    }
}

export namespace KernelThisExpression {
    export type Constructors = 'KernelThisExpression';
    export type Interface = Omit<KernelThisExpression, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelThisExpression extends any implements KernelExpression.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        return typeNeeded ? new bare.createInstance(any,null) : null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelThisExpression() {
    }
}

export namespace KernelThrow {
    export type Constructors = 'KernelThrow';
    export type Interface = Omit<KernelThrow, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelThrow extends any implements KernelExpression.Interface {
    constructor(expression : any) {
    }
    @defaultConstructor
    KernelThrow(expression : any) {
        super.DartObject(expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        inferrer.inferExpression(expression,null,false);
        return typeNeeded ? new bare.createInstance(any,null) : null;
    }
}

export namespace KernelTypeInferenceEngine {
    export type Constructors = 'KernelTypeInferenceEngine';
    export type Interface = Omit<KernelTypeInferenceEngine, Constructors>;
}
@DartClass
export class KernelTypeInferenceEngine extends any {
    constructor(instrumentation : any,strongMode : boolean) {
    }
    @defaultConstructor
    KernelTypeInferenceEngine(instrumentation : any,strongMode : boolean) {
        super.DartObject(instrumentation,strongMode);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    clearFieldInitializer(field : KernelField) : void {
        field.initializer = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createFieldNode(field : KernelField) : any {
        let fieldNode : any = new bare.createInstance(any,null,this,field);
        field._fieldNode = fieldNode;
        return fieldNode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createLocalTypeInferrer(uri : lib3.Uri,listener : any) : KernelTypeInferrer {
        return new KernelTypeInferrer._(this,uri.toString(),listener);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createTopLevelTypeInferrer(field : KernelField,listener : any) : KernelTypeInferrer {
        return field._typeInferrer = new KernelTypeInferrer._(this,this.getFieldUri(field),listener);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fieldHasInitializer(field : KernelField) : boolean {
        return field.initializer != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getFieldDeclaredType(field : KernelField) : any {
        return field._implicitlyTyped ? null : field.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getFieldDependencies(field : KernelField) : core.DartList<any> {
        return ((t)=>(!!t)?t.dependencies:null)(field._fieldNode);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getFieldOffset(field : KernelField) : number {
        return field.fileOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getFieldTypeInferrer(field : KernelField) : KernelTypeInferrer {
        return field._typeInferrer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getFieldUri(field : KernelField) : string {
        return field._fileUri;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isFieldInferred(field : KernelField) : boolean {
        return field._isInferred;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setFieldInferredType(field : KernelField,inferredType : any) : void {
        field._setInferredType(inferredType);
    }
}

export namespace KernelTypeInferrer {
    export type Constructors = '_';
    export type Interface = Omit<KernelTypeInferrer, Constructors>;
}
@DartClass
export class KernelTypeInferrer extends any {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    typePromoter;

    @namedConstructor
    _(engine : KernelTypeInferenceEngine,uri : string,listener : any) {
        this.typePromoter = new KernelTypePromoter();
        super.DartObject(engine,uri,listener);
    }
    static _ : new(engine : KernelTypeInferenceEngine,uri : string,listener : any) => KernelTypeInferrer;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getFieldInitializer(field : KernelField) : any {
        return field.initializer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getFieldNodeForReadTarget(readTarget : any) : any {
        if (is(readTarget, KernelField)) {
            return readTarget._fieldNode;
        }else {
            return null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    inferExpression(expression : any,typeContext : any,typeNeeded : boolean) : any {
        if (is(expression, KernelExpression)) {
            return expression._inferExpression(this,typeContext,typeNeeded);
        }else {
            return typeNeeded ? new bare.createInstance(any,null) : null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    inferFieldInitializer(field : KernelField,type : any,typeNeeded : boolean) : any {
        return this.inferExpression(field.initializer,type,typeNeeded);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    inferStatement(statement : any) : void {
        if (is(statement, KernelStatement)) {
            return statement._inferStatement(this);
        }else {
        }
    }
}

export namespace KernelTypeLiteral {
    export type Constructors = 'KernelTypeLiteral';
    export type Interface = Omit<KernelTypeLiteral, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelTypeLiteral extends any implements KernelExpression.Interface {
    constructor(type : any) {
    }
    @defaultConstructor
    KernelTypeLiteral(type : any) {
        super.DartObject(type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        return typeNeeded ? new bare.createInstance(any,null) : null;
    }
}

export namespace KernelTypePromoter {
    export type Constructors = 'KernelTypePromoter';
    export type Interface = Omit<KernelTypePromoter, Constructors>;
}
@DartClass
export class KernelTypePromoter extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getVariableFunctionNestingLevel(variable : any) : number {
        if (is(variable, KernelVariableDeclaration)) {
            return variable._functionNestingLevel;
        }else {
            return 0;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isPromotionCandidate(variable : any) : boolean {
        if (is(variable, KernelVariableDeclaration)) {
            return !variable._isLocalFunction;
        }else {
            return true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sameExpressions(a : any,b : any) : boolean {
        return core.identical(a,b);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setVariableMutatedAnywhere(variable : any) : void {
        if (is(variable, KernelVariableDeclaration)) {
            variable._mutatedAnywhere = true;
        }else {
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setVariableMutatedInClosure(variable : any) : void {
        if (is(variable, KernelVariableDeclaration)) {
            variable._mutatedInClosure = true;
        }else {
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    wasVariableMutatedAnywhere(variable : any) : boolean {
        if (is(variable, KernelVariableDeclaration)) {
            return variable._mutatedAnywhere;
        }else {
            return true;
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelTypePromoter() {
    }
}

export namespace KernelVariableDeclaration {
    export type Constructors = 'KernelVariableDeclaration';
    export type Interface = Omit<KernelVariableDeclaration, Constructors>;
}
@DartClass
@Implements(KernelStatement)
export class KernelVariableDeclaration extends any implements KernelStatement.Interface {
    _implicitlyTyped : boolean;

    _functionNestingLevel : number;

    _mutatedInClosure : boolean;

    _mutatedAnywhere : boolean;

    _isLocalFunction : boolean;

    constructor(name : string,_functionNestingLevel : number,_namedArguments? : {initializer? : any,type? : any,isFinal? : boolean,isConst? : boolean,isLocalFunction? : boolean}) {
    }
    @defaultConstructor
    KernelVariableDeclaration(name : string,_functionNestingLevel : number,_namedArguments? : {initializer? : any,type? : any,isFinal? : boolean,isConst? : boolean,isLocalFunction? : boolean}) {
        let {initializer,type,isFinal,isConst,isLocalFunction} = Object.assign({
            "isFinal" : false,
            "isConst" : false,
            "isLocalFunction" : false}, _namedArguments );
        this._mutatedInClosure = false;
        this._mutatedAnywhere = false;
        this._implicitlyTyped = op(Op.EQUALS,type,null);
        this._isLocalFunction = isLocalFunction;
        super.DartObject(name,{
            initializer : initializer,type : (type || new bare.createInstance(any,null)),isFinal : isFinal,isConst : isConst});
        this._functionNestingLevel = _functionNestingLevel;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferStatement(inferrer : KernelTypeInferrer) : void {
        inferrer.listener.variableDeclarationEnter(this);
        let declaredType = this._implicitlyTyped ? null : type;
        if (initializer != null) {
            let inferredType = inferrer.inferDeclarationType(inferrer.inferExpression(initializer,declaredType,this._implicitlyTyped));
            if (inferrer.strongMode && this._implicitlyTyped) {
                ((_548_)=>(!!_548_)?_548_.record(lib3.Uri.parse(inferrer.uri),fileOffset,'type',new bare.createInstance(any,null,inferredType)):null)(inferrer.instrumentation);
                type = inferredType;
            }
        }
        inferrer.listener.variableDeclarationExit(this);
    }
    static isImplicitlyTyped(variable : KernelVariableDeclaration) : boolean {
        return variable._implicitlyTyped;
    }
}

export namespace KernelVariableGet {
    export type Constructors = 'KernelVariableGet';
    export type Interface = Omit<KernelVariableGet, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelVariableGet extends any implements KernelExpression.Interface {
    _fact : any;

    _scope : any;

    constructor(variable : any,_fact : any,_scope : any) {
    }
    @defaultConstructor
    KernelVariableGet(variable : any,_fact : any,_scope : any) {
        super.DartObject(variable);
        this._fact = _fact;
        this._scope = _scope;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        let variable = this.variable as KernelVariableDeclaration;
        let mutatedInClosure : boolean = variable._mutatedInClosure;
        let declaredOrInferredType : any = variable.type;
        typeNeeded = inferrer.listener.variableGetEnter(this,typeContext) || typeNeeded;
        let promotedType : any = inferrer.typePromoter.computePromotedType(this._fact,this._scope,mutatedInClosure);
        if (promotedType != null) {
            ((_549_)=>(!!_549_)?_549_.record(lib3.Uri.parse(inferrer.uri),fileOffset,'promotedType',new bare.createInstance(any,null,promotedType)):null)(inferrer.instrumentation);
        }
        this.promotedType = promotedType;
        let inferredType = typeNeeded ? ((promotedType || declaredOrInferredType)) : null;
        inferrer.listener.variableGetExit(this,inferredType);
        return inferredType;
    }
}

export namespace KernelVariableSet {
    export type Constructors = 'KernelVariableSet';
    export type Interface = Omit<KernelVariableSet, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelVariableSet extends any implements KernelExpression.Interface {
    constructor(variable : any,value : any) {
    }
    @defaultConstructor
    KernelVariableSet(variable : any,value : any) {
        super.DartObject(variable,value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        let variable = this.variable as KernelVariableDeclaration;
        typeNeeded = inferrer.listener.variableSetEnter(this,typeContext) || typeNeeded;
        let inferredType = inferrer.inferExpression(value,variable.type,typeNeeded);
        inferrer.listener.variableSetExit(this,inferredType);
        return inferredType;
    }
}

export namespace KernelStaticGet {
    export type Constructors = 'KernelStaticGet';
    export type Interface = Omit<KernelStaticGet, Constructors>;
}
@DartClass
@Implements(KernelExpression)
export class KernelStaticGet extends any implements KernelExpression.Interface {
    constructor(target : any) {
    }
    @defaultConstructor
    KernelStaticGet(target : any) {
        super.DartObject(target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _inferExpression(inferrer : KernelTypeInferrer,typeContext : any,typeNeeded : boolean) : any {
        typeNeeded = inferrer.listener.staticGetEnter(this,typeContext) || typeNeeded;
        let inferredType = typeNeeded ? target.getterType : null;
        inferrer.listener.staticGetExit(this,inferredType);
        return inferredType;
    }
}

export class properties {
}
