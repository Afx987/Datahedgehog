/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/error_verifier.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as math from "@dart2ts/dart/math";

export namespace ErrorVerifier {
    export type Constructors = 'ErrorVerifier';
    export type Interface = Omit<ErrorVerifier, Constructors>;
}
@DartClass
export class ErrorVerifier extends any {
    private static __$_GETTER_SPACE : string;
    static get _GETTER_SPACE() : string { 
        if (this.__$_GETTER_SPACE===undefined) {
            this.__$_GETTER_SPACE = "getter ";
        }
        return this.__$_GETTER_SPACE;
    }
    static set _GETTER_SPACE(__$value : string)  { 
        this.__$_GETTER_SPACE = __$value;
    }

    private static __$_SETTER_SPACE : string;
    static get _SETTER_SPACE() : string { 
        if (this.__$_SETTER_SPACE===undefined) {
            this.__$_SETTER_SPACE = "setter ";
        }
        return this.__$_SETTER_SPACE;
    }
    static set _SETTER_SPACE(__$value : string)  { 
        this.__$_SETTER_SPACE = __$value;
    }

    _errorReporter : any;

    _currentLibrary : any;

    _boolType : any;

    _intType : any;

    _options : any;

    _typeProvider : any;

    _typeSystem : any;

    _inheritanceManager : any;

    _isEnclosingConstructorConst : boolean;

    _inAsync : boolean;

    _inGenerator : boolean;

    _isInCatchClause : boolean;

    _isInComment : boolean;

    _isInConstInstanceCreation : boolean;

    _isInNativeClass : boolean;

    _isInStaticVariableDeclaration : boolean;

    _isInInstanceVariableDeclaration : boolean;

    _isInInstanceVariableInitializer : boolean;

    _isInConstructorInitializer : boolean;

    _isInFunctionTypedFormalParameter : boolean;

    _isInStaticMethod : boolean;

    _isInFactory : boolean;

    _isInSystemLibrary : boolean;

    _hasExtUri : boolean;

    _hasReturnWithoutValue : boolean;

    _enclosingClass : any;

    _enclosingEnum : any;

    _enclosingFunction : any;

    _returnsWith : core.DartList<any>;

    _returnsWithout : core.DartList<any>;

    _initialFieldElementsMap : core.DartHashMap<any,any>;

    _nameToExportElement : core.DartHashMap<string,any>;

    _nameToImportElement : core.DartHashMap<string,any>;

    _exportedElements : core.DartHashMap<string,any>;

    _namesForReferenceToDeclaredVariableInInitializer : core.DartHashSet<string>;

    _hiddenElements : HiddenElements;

    _DISALLOWED_TYPES_TO_EXTEND_OR_IMPLEMENT : core.DartList<any>;

    enableSuperMixins : boolean;

    constructor(_errorReporter : any,_currentLibrary : any,_typeProvider : any,_inheritanceManager : any,enableSuperMixins : boolean) {
    }
    @defaultConstructor
    ErrorVerifier(_errorReporter : any,_currentLibrary : any,_typeProvider : any,_inheritanceManager : any,enableSuperMixins : boolean) {
        this._isEnclosingConstructorConst = false;
        this._inAsync = false;
        this._inGenerator = false;
        this._isInCatchClause = false;
        this._isInComment = false;
        this._isInConstInstanceCreation = false;
        this._isInNativeClass = false;
        this._isInStaticVariableDeclaration = false;
        this._isInInstanceVariableDeclaration = false;
        this._isInInstanceVariableInitializer = false;
        this._isInConstructorInitializer = false;
        this._isInFunctionTypedFormalParameter = false;
        this._isInStaticMethod = false;
        this._isInFactory = false;
        this._isInSystemLibrary = false;
        this._hasExtUri = false;
        this._hasReturnWithoutValue = false;
        this._returnsWith = new core.DartList<any>();
        this._returnsWithout = new core.DartList<any>();
        this._nameToExportElement = new core.DartHashMap<string,any>();
        this._nameToImportElement = new core.DartHashMap<string,any>();
        this._exportedElements = new core.DartHashMap<string,any>();
        this._namesForReferenceToDeclaredVariableInInitializer = new core.DartHashSet<string>();
        this._hiddenElements = null;
        this._errorReporter = _errorReporter;
        this._currentLibrary = _currentLibrary;
        this._typeProvider = _typeProvider;
        this._inheritanceManager = _inheritanceManager;
        this.enableSuperMixins = enableSuperMixins;
        this._isInSystemLibrary = this._currentLibrary.source.isInSystemLibrary;
        this._hasExtUri = this._currentLibrary.hasExtUri;
        this._isEnclosingConstructorConst = false;
        this._isInCatchClause = false;
        this._isInStaticVariableDeclaration = false;
        this._isInInstanceVariableDeclaration = false;
        this._isInInstanceVariableInitializer = false;
        this._isInConstructorInitializer = false;
        this._isInStaticMethod = false;
        this._boolType = this._typeProvider.boolType;
        this._intType = this._typeProvider.intType;
        this._DISALLOWED_TYPES_TO_EXTEND_OR_IMPLEMENT = this._typeProvider.nonSubtypableTypes;
        this._typeSystem = this._currentLibrary.context.typeSystem;
        this._options = this._currentLibrary.context.analysisOptions;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : core.DartObject {
        this._checkForInvalidAnnotationFromDeferredLibrary(node);
        this._checkForMissingJSLibAnnotation(node);
        return super.visitAnnotation(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitArgumentList(node : any) : core.DartObject {
        this._checkForArgumentTypesNotAssignableInList(node);
        return super.visitArgumentList(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAsExpression(node : any) : core.DartObject {
        this._checkForTypeAnnotationDeferredClass(node.type);
        return super.visitAsExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertInitializer(node : any) : core.DartObject {
        this._checkForNonBoolExpression(node);
        return super.visitAssertInitializer(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertStatement(node : any) : core.DartObject {
        this._checkForNonBoolExpression(node);
        return super.visitAssertStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : core.DartObject {
        let operatorType : any = node.operator.type;
        let lhs : any = node.leftHandSide;
        let rhs : any = node.rightHandSide;
        if (op(Op.EQUALS,operatorType,TokenType.EQ) || op(Op.EQUALS,operatorType,TokenType.QUESTION_QUESTION_EQ)) {
            this._checkForInvalidAssignment(lhs,rhs);
        }else {
            this._checkForInvalidCompoundAssignment(node,lhs,rhs);
            this._checkForArgumentTypeNotAssignableForArgument(rhs);
        }
        this._checkForAssignmentToFinal(lhs);
        return super.visitAssignmentExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAwaitExpression(node : any) : core.DartObject {
        if (!this._inAsync) {
            this._errorReporter.reportErrorForToken(CompileTimeErrorCode.AWAIT_IN_WRONG_CONTEXT,node.awaitKeyword);
        }
        return super.visitAwaitExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : core.DartObject {
        let operator : any = node.operator;
        let type : any = operator.type;
        if (op(Op.EQUALS,type,TokenType.AMPERSAND_AMPERSAND) || op(Op.EQUALS,type,TokenType.BAR_BAR)) {
            let lexeme : string = operator.lexeme;
            this._checkForAssignability(node.leftOperand,this._boolType,StaticTypeWarningCode.NON_BOOL_OPERAND,new core.DartList.literal(lexeme));
            this._checkForAssignability(node.rightOperand,this._boolType,StaticTypeWarningCode.NON_BOOL_OPERAND,new core.DartList.literal(lexeme));
        }else {
            this._checkForArgumentTypeNotAssignableForArgument(node.rightOperand);
        }
        return super.visitBinaryExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : any) : core.DartObject {
        this._hiddenElements = new HiddenElements(this._hiddenElements,node);
        try {
            this._checkDuplicateDeclarationInStatements(node.statements);
            return super.visitBlock(node);
        } finally {
            this._hiddenElements = this._hiddenElements.outerElements;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) : core.DartObject {
        let wasInAsync : boolean = this._inAsync;
        let wasInGenerator : boolean = this._inGenerator;
        let previousHasReturnWithoutValue : boolean = this._hasReturnWithoutValue;
        this._hasReturnWithoutValue = false;
        let previousReturnsWith : core.DartList<any> = this._returnsWith;
        let previousReturnsWithout : core.DartList<any> = this._returnsWithout;
        try {
            this._inAsync = node.isAsynchronous;
            this._inGenerator = node.isGenerator;
            this._returnsWith = new core.DartList<any>();
            this._returnsWithout = new core.DartList<any>();
            super.visitBlockFunctionBody(node);
            this._checkForMixedReturns(node);
        } finally {
            this._inAsync = wasInAsync;
            this._inGenerator = wasInGenerator;
            this._returnsWith = previousReturnsWith;
            this._returnsWithout = previousReturnsWithout;
            this._hasReturnWithoutValue = previousHasReturnWithoutValue;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBreakStatement(node : any) : core.DartObject {
        let labelNode : any = node.label;
        if (labelNode != null) {
            let labelElement : any = labelNode.staticElement;
            if (is(labelElement, any) && labelElement.isOnSwitchMember) {
                this._errorReporter.reportErrorForNode(ResolverErrorCode.BREAK_LABEL_ON_SWITCH_MEMBER,labelNode);
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCatchClause(node : any) : core.DartObject {
        this._checkDuplicateDefinitionInCatchClause(node);
        let previousIsInCatchClause : boolean = this._isInCatchClause;
        try {
            this._isInCatchClause = true;
            this._checkForTypeAnnotationDeferredClass(node.exceptionType);
            return super.visitCatchClause(node);
        } finally {
            this._isInCatchClause = previousIsInCatchClause;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : core.DartObject {
        let outerClass : any = this._enclosingClass;
        try {
            this._isInNativeClass = node.nativeClause != null;
            this._enclosingClass = AbstractClassElementImpl.getImpl(node.element);
            this._checkDuplicateClassMembers(node);
            this._checkForBuiltInIdentifierAsName(node.name,CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_TYPE_NAME);
            this._checkForMemberWithClassName();
            this._checkForNoDefaultSuperConstructorImplicit(node);
            this._checkForConflictingTypeVariableErrorCodes(node);
            let superclass : any = ((t)=>(!!t)?t.superclass:null)(node.extendsClause);
            let implementsClause : any = node.implementsClause;
            let withClause : any = node.withClause;
            if (implementsClause != null || superclass != null || withClause != null) {
                this._checkClassInheritance(node,superclass,withClause,implementsClause);
            }
            this.visitClassDeclarationIncrementally(node);
            this._checkForFinalNotInitializedInClass(node);
            this._checkForDuplicateDefinitionInheritance();
            this._checkForConflictingInstanceMethodSetter(node);
            this._checkForBadFunctionUse(node);
            return super.visitClassDeclaration(node);
        } finally {
            this._isInNativeClass = false;
            this._initialFieldElementsMap = null;
            this._enclosingClass = outerClass;
        }
    }
    visitClassDeclarationIncrementally(node : any) : void {
        this._isInNativeClass = node.nativeClause != null;
        this._enclosingClass = AbstractClassElementImpl.getImpl(node.element);
        if (this._enclosingClass != null) {
            let fieldElements : core.DartList<any> = this._enclosingClass.fields;
            this._initialFieldElementsMap = new core.DartHashMap<any,any>();
            for(let fieldElement of fieldElements) {
                if (!fieldElement.isSynthetic) {
                    op(Op.INDEX_ASSIGN,this._initialFieldElementsMap,fieldElement,op(Op.EQUALS,fieldElement.initializer,null) ? INIT_STATE.NOT_INIT : INIT_STATE.INIT_IN_DECLARATION);
                }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) : core.DartObject {
        this._checkForBuiltInIdentifierAsName(node.name,CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_TYPEDEF_NAME);
        let outerClassElement : any = this._enclosingClass;
        try {
            this._enclosingClass = AbstractClassElementImpl.getImpl(node.element);
            this._checkClassInheritance(node,node.superclass,node.withClause,node.implementsClause);
        } finally {
            this._enclosingClass = outerClassElement;
        }
        return super.visitClassTypeAlias(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitComment(node : any) : core.DartObject {
        this._isInComment = true;
        try {
            return super.visitComment(node);
        } finally {
            this._isInComment = false;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) : core.DartObject {
        this._checkDuplicateUnitMembers(node);
        this._checkForDeferredPrefixCollisions(node);
        return super.visitCompilationUnit(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConditionalExpression(node : any) : core.DartObject {
        this._checkForNonBoolCondition(node.condition);
        return super.visitConditionalExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : core.DartObject {
        let outerFunction : any = this._enclosingFunction;
        try {
            let constructorElement : any = node.element;
            this._enclosingFunction = constructorElement;
            this._isEnclosingConstructorConst = node.constKeyword != null;
            this._isInFactory = node.factoryKeyword != null;
            this._checkForInvalidModifierOnBody(node.body,CompileTimeErrorCode.INVALID_MODIFIER_ON_CONSTRUCTOR);
            this._checkForConstConstructorWithNonFinalField(node,constructorElement);
            this._checkForConstConstructorWithNonConstSuper(node);
            this._checkForConflictingConstructorNameAndMember(node,constructorElement);
            this._checkForAllFinalInitializedErrorCodes(node);
            this._checkForRedirectingConstructorErrorCodes(node);
            this._checkForMultipleSuperInitializers(node);
            this._checkForRecursiveConstructorRedirect(node,constructorElement);
            if (!this._checkForRecursiveFactoryRedirect(node,constructorElement)) {
                this._checkForAllRedirectConstructorErrorCodes(node);
            }
            this._checkForUndefinedConstructorInInitializerImplicit(node);
            this._checkForRedirectToNonConstConstructor(node,constructorElement);
            this._checkForReturnInGenerativeConstructor(node);
            return super.visitConstructorDeclaration(node);
        } finally {
            this._isEnclosingConstructorConst = false;
            this._isInFactory = false;
            this._enclosingFunction = outerFunction;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorFieldInitializer(node : any) : core.DartObject {
        this._isInConstructorInitializer = true;
        try {
            let fieldName : any = node.fieldName;
            let staticElement : any = fieldName.staticElement;
            this._checkForInvalidField(node,fieldName,staticElement);
            if (is(staticElement, any)) {
                this._checkForFieldInitializerNotAssignable(node,staticElement);
            }
            return super.visitConstructorFieldInitializer(node);
        } finally {
            this._isInConstructorInitializer = false;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContinueStatement(node : any) : core.DartObject {
        let labelNode : any = node.label;
        if (labelNode != null) {
            let labelElement : any = labelNode.staticElement;
            if (is(labelElement, any) && labelElement.isOnSwitchStatement) {
                this._errorReporter.reportErrorForNode(ResolverErrorCode.CONTINUE_LABEL_ON_SWITCH,labelNode);
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDefaultFormalParameter(node : any) : core.DartObject {
        this._checkForInvalidAssignment(node.identifier,node.defaultValue);
        this._checkForDefaultValueInFunctionTypedParameter(node);
        return super.visitDefaultFormalParameter(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoStatement(node : any) : core.DartObject {
        this._checkForNonBoolCondition(node.condition);
        return super.visitDoStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumDeclaration(node : any) : core.DartObject {
        let outerEnum : any = this._enclosingEnum;
        try {
            this._enclosingEnum = node.element;
            this._checkDuplicateEnumMembers(node);
            return super.visitEnumDeclaration(node);
        } finally {
            this._enclosingEnum = outerEnum;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : core.DartObject {
        let exportElement : any = node.element;
        if (exportElement != null) {
            let exportedLibrary : any = exportElement.exportedLibrary;
            this._checkForAmbiguousExport(node,exportElement,exportedLibrary);
            this._checkForExportDuplicateLibraryName(node,exportElement,exportedLibrary);
            this._checkForExportInternalLibrary(node,exportElement);
        }
        return super.visitExportDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionFunctionBody(node : any) : core.DartObject {
        let wasInAsync : boolean = this._inAsync;
        let wasInGenerator : boolean = this._inGenerator;
        try {
            this._inAsync = node.isAsynchronous;
            this._inGenerator = node.isGenerator;
            let functionType : any = ((t)=>(!!t)?t.type:null)(this._enclosingFunction);
            let expectedReturnType : any = op(Op.EQUALS,functionType,null) ? DynamicTypeImpl.instance : functionType.returnType;
            let function : any = this._enclosingFunction;
            let isSetterWithImplicitReturn : boolean = function.hasImplicitReturnType && is(function, any) && function.isSetter;
            if (!isSetterWithImplicitReturn) {
                this._checkForReturnOfInvalidType(node.expression,expectedReturnType,{
                    isArrowFunction : true});
            }
            return super.visitExpressionFunctionBody(node);
        } finally {
            this._inAsync = wasInAsync;
            this._inGenerator = wasInGenerator;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldDeclaration(node : any) : core.DartObject {
        this._isInStaticVariableDeclaration = node.isStatic;
        this._isInInstanceVariableDeclaration = !this._isInStaticVariableDeclaration;
        if (this._isInInstanceVariableDeclaration) {
            let variables : any = node.fields;
            if (variables.isConst) {
                this._errorReporter.reportErrorForToken(CompileTimeErrorCode.CONST_INSTANCE_FIELD,variables.keyword);
            }
        }
        try {
            this._checkForAllInvalidOverrideErrorCodesForField(node);
            return super.visitFieldDeclaration(node);
        } finally {
            this._isInStaticVariableDeclaration = false;
            this._isInInstanceVariableDeclaration = false;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldFormalParameter(node : any) : core.DartObject {
        this._checkForValidField(node);
        this._checkForConstFormalParameter(node);
        this._checkForPrivateOptionalParameter(node);
        this._checkForFieldInitializingFormalRedirectingConstructor(node);
        this._checkForTypeAnnotationDeferredClass(node.type);
        return super.visitFieldFormalParameter(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) : core.DartObject {
        this._checkForInIterable(node);
        return super.visitForEachStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFormalParameterList(node : any) : core.DartObject {
        this._checkDuplicateDefinitionInParameterList(node);
        this._checkUseOfCovariantInParameters(node);
        return super.visitFormalParameterList(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : core.DartObject {
        if (node.condition != null) {
            this._checkForNonBoolCondition(node.condition);
        }
        if (node.variables != null) {
            this._checkDuplicateVariables(node.variables);
        }
        return super.visitForStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : core.DartObject {
        let functionElement : any = node.element;
        if (functionElement != null && isNot(functionElement.enclosingElement, any)) {
            this._hiddenElements.declare(functionElement);
        }
        let outerFunction : any = this._enclosingFunction;
        try {
            let identifier : any = node.name;
            let methodName : string = "";
            if (identifier != null) {
                methodName = identifier.name;
            }
            this._enclosingFunction = functionElement;
            let returnType : any = node.returnType;
            if (node.isSetter || node.isGetter) {
                this._checkForMismatchedAccessorTypes(node,methodName);
                if (node.isSetter) {
                    let functionExpression : any = node.functionExpression;
                    if (functionExpression != null) {
                        this._checkForWrongNumberOfParametersForSetter(identifier,functionExpression.parameters);
                    }
                    this._checkForNonVoidReturnTypeForSetter(returnType);
                }
            }
            if (node.isSetter) {
                this._checkForInvalidModifierOnBody(node.functionExpression.body,CompileTimeErrorCode.INVALID_MODIFIER_ON_SETTER);
            }
            this._checkForTypeAnnotationDeferredClass(returnType);
            this._checkForIllegalReturnType(returnType);
            this._checkForImplicitDynamicReturn(node.name,node.element);
            return super.visitFunctionDeclaration(node);
        } finally {
            this._enclosingFunction = outerFunction;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : core.DartObject {
        if (isNot(node.parent, any)) {
            let outerFunction : any = this._enclosingFunction;
            try {
                this._enclosingFunction = node.element;
                return super.visitFunctionExpression(node);
            } finally {
                this._enclosingFunction = outerFunction;
            }
        }else {
            return super.visitFunctionExpression(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpressionInvocation(node : any) : core.DartObject {
        let functionExpression : any = node.function;
        let expressionType : any = functionExpression.staticType;
        if (!this._isFunctionType(expressionType)) {
            this._errorReporter.reportErrorForNode(StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION_EXPRESSION,functionExpression);
        }else if (is(expressionType, any)) {
            this._checkTypeArguments(node);
        }
        this._checkForImplicitDynamicInvoke(node);
        return super.visitFunctionExpressionInvocation(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) : core.DartObject {
        this._checkForBuiltInIdentifierAsName(node.name,CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_TYPEDEF_NAME);
        this._checkForDefaultValueInFunctionTypeAlias(node);
        this._checkForTypeAliasCannotReferenceItself_function(node);
        return super.visitFunctionTypeAlias(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypedFormalParameter(node : any) : core.DartObject {
        let old : boolean = this._isInFunctionTypedFormalParameter;
        this._isInFunctionTypedFormalParameter = true;
        try {
            this._checkForTypeAnnotationDeferredClass(node.returnType);
            if (!this._options.implicitDynamic && op(Op.EQUALS,node.returnType,null)) {
                let parameterType : any = resolutionMap.elementDeclaredByFormalParameter(node).type;
                if (is(parameterType, any) && parameterType.returnType.isDynamic) {
                    this._errorReporter.reportErrorForNode(StrongModeCode.IMPLICIT_DYNAMIC_RETURN,node.identifier,new core.DartList.literal(node.identifier));
                }
            }
            if (node.typeParameters != null) {
                this._errorReporter.reportErrorForNode(CompileTimeErrorCode.GENERIC_FUNCTION_TYPED_PARAM_UNSUPPORTED,node);
            }
            return super.visitFunctionTypedFormalParameter(node);
        } finally {
            this._isInFunctionTypedFormalParameter = old;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIfStatement(node : any) : core.DartObject {
        this._checkForNonBoolCondition(node.condition);
        return super.visitIfStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImplementsClause(node : any) : core.DartObject {
        node.interfaces.forEach(this._checkForImplicitDynamicType.bind(this));
        return super.visitImplementsClause(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : core.DartObject {
        let importElement : any = node.element;
        if (node.prefix != null) {
            this._checkForBuiltInIdentifierAsName(node.prefix,CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_PREFIX_NAME);
        }
        if (importElement != null) {
            this._checkForImportDuplicateLibraryName(node,importElement);
            this._checkForImportInternalLibrary(node,importElement);
        }
        return super.visitImportDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) : core.DartObject {
        this._checkForArgumentTypeNotAssignableForArgument(node.index);
        return super.visitIndexExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : core.DartObject {
        let wasInConstInstanceCreation : boolean = this._isInConstInstanceCreation;
        this._isInConstInstanceCreation = node.isConst;
        try {
            let constructorName : any = node.constructorName;
            let typeName : any = constructorName.type;
            let type : any = typeName.type;
            if (is(type, any)) {
                this._checkForConstOrNewWithAbstractClass(node,typeName,type);
                this._checkForConstOrNewWithEnum(node,typeName,type);
                if (this._isInConstInstanceCreation) {
                    this._checkForConstWithNonConst(node);
                    this._checkForConstWithUndefinedConstructor(node,constructorName,typeName);
                    if (!this._options.strongMode) {
                        this._checkForConstWithTypeParameters(typeName);
                    }
                    this._checkForConstDeferredClass(node,constructorName,typeName);
                }else {
                    this._checkForNewWithUndefinedConstructor(node,constructorName,typeName);
                }
            }
            this._checkForImplicitDynamicType(typeName);
            return super.visitInstanceCreationExpression(node);
        } finally {
            this._isInConstInstanceCreation = wasInConstInstanceCreation;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIsExpression(node : any) : core.DartObject {
        this._checkForTypeAnnotationDeferredClass(node.type);
        this._checkForTypeAnnotationGenericFunctionParameter(node.type);
        return super.visitIsExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : any) : core.DartObject {
        let typeArguments : any = node.typeArguments;
        if (typeArguments != null) {
            if (!this._options.strongMode && node.constKeyword != null) {
                let arguments : any = typeArguments.arguments;
                if (arguments.isNotEmpty) {
                    this._checkForInvalidTypeArgumentInConstTypedLiteral(arguments,CompileTimeErrorCode.INVALID_TYPE_ARGUMENT_IN_CONST_LIST);
                }
            }
            this._checkForExpectedOneListTypeArgument(node,typeArguments);
        }
        this._checkForImplicitDynamicTypedLiteral(node);
        this._checkForListElementTypeNotAssignable(node);
        return super.visitListLiteral(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : any) : core.DartObject {
        let typeArguments : any = node.typeArguments;
        if (typeArguments != null) {
            let arguments : any = typeArguments.arguments;
            if (!this._options.strongMode && arguments.isNotEmpty) {
                if (node.constKeyword != null) {
                    this._checkForInvalidTypeArgumentInConstTypedLiteral(arguments,CompileTimeErrorCode.INVALID_TYPE_ARGUMENT_IN_CONST_MAP);
                }
            }
            this._checkExpectedTwoMapTypeArguments(typeArguments);
        }
        this._checkForImplicitDynamicTypedLiteral(node);
        this._checkForMapTypeNotAssignable(node);
        this._checkForNonConstMapAsExpressionStatement(node);
        return super.visitMapLiteral(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : core.DartObject {
        let previousFunction : any = this._enclosingFunction;
        try {
            this._isInStaticMethod = node.isStatic;
            this._enclosingFunction = node.element;
            let identifier : any = node.name;
            let methodName : string = "";
            if (identifier != null) {
                methodName = identifier.name;
            }
            let returnType : any = node.returnType;
            if (node.isSetter || node.isGetter) {
                this._checkForMismatchedAccessorTypes(node,methodName);
            }
            if (node.isGetter) {
                this._checkForVoidReturnType(node);
                this._checkForConflictingStaticGetterAndInstanceSetter(node);
            }else if (node.isSetter) {
                this._checkForInvalidModifierOnBody(node.body,CompileTimeErrorCode.INVALID_MODIFIER_ON_SETTER);
                this._checkForWrongNumberOfParametersForSetter(node.name,node.parameters);
                this._checkForNonVoidReturnTypeForSetter(returnType);
                this._checkForConflictingStaticSetterAndInstanceMember(node);
            }else if (node.isOperator) {
                this._checkForOptionalParameterInOperator(node);
                this._checkForWrongNumberOfParametersForOperator(node);
                this._checkForNonVoidReturnTypeForOperator(node);
            }
            this._checkForConcreteClassWithAbstractMember(node);
            this._checkForAllInvalidOverrideErrorCodesForMethod(node);
            this._checkForTypeAnnotationDeferredClass(returnType);
            this._checkForIllegalReturnType(returnType);
            this._checkForImplicitDynamicReturn(node,node.element);
            this._checkForMustCallSuper(node);
            return super.visitMethodDeclaration(node);
        } finally {
            this._enclosingFunction = previousFunction;
            this._isInStaticMethod = false;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : core.DartObject {
        let target : any = node.realTarget;
        let methodName : any = node.methodName;
        if (target != null) {
            let typeReference : any = ElementResolver.getTypeReference(target);
            this._checkForStaticAccessToInstanceMember(typeReference,methodName);
            this._checkForInstanceAccessToStaticMember(typeReference,methodName);
        }else {
            this._checkForUnqualifiedReferenceToNonLocalStaticMember(methodName);
        }
        this._checkTypeArguments(node);
        this._checkForImplicitDynamicInvoke(node);
        return super.visitMethodInvocation(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNativeClause(node : any) : core.DartObject {
        if (!this._isInSystemLibrary) {
            this._errorReporter.reportErrorForNode(ParserErrorCode.NATIVE_CLAUSE_IN_NON_SDK_CODE,node);
        }
        return super.visitNativeClause(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNativeFunctionBody(node : any) : core.DartObject {
        this._checkForNativeFunctionBodyInNonSdkCode(node);
        return super.visitNativeFunctionBody(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) : core.DartObject {
        this._checkForAssignmentToFinal(node.operand);
        this._checkForIntNotAssignable(node.operand);
        return super.visitPostfixExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : core.DartObject {
        if (isNot(node.parent, any)) {
            let typeReference : any = ElementResolver.getTypeReference(node.prefix);
            let name : any = node.identifier;
            this._checkForStaticAccessToInstanceMember(typeReference,name);
            this._checkForInstanceAccessToStaticMember(typeReference,name);
        }
        return super.visitPrefixedIdentifier(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : core.DartObject {
        let operatorType : any = node.operator.type;
        let operand : any = node.operand;
        if (op(Op.EQUALS,operatorType,TokenType.BANG)) {
            this._checkForNonBoolNegationExpression(operand);
        }else if (operatorType.isIncrementOperator) {
            this._checkForAssignmentToFinal(operand);
        }
        this._checkForIntNotAssignable(operand);
        return super.visitPrefixExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) : core.DartObject {
        let typeReference : any = ElementResolver.getTypeReference(node.realTarget);
        let propertyName : any = node.propertyName;
        this._checkForStaticAccessToInstanceMember(typeReference,propertyName);
        this._checkForInstanceAccessToStaticMember(typeReference,propertyName);
        return super.visitPropertyAccess(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingConstructorInvocation(node : any) : core.DartObject {
        this._isInConstructorInitializer = true;
        try {
            return super.visitRedirectingConstructorInvocation(node);
        } finally {
            this._isInConstructorInitializer = false;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRethrowExpression(node : any) : core.DartObject {
        this._checkForRethrowOutsideCatch(node);
        return super.visitRethrowExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : any) : core.DartObject {
        if (op(Op.EQUALS,node.expression,null)) {
            this._returnsWithout.add(node);
        }else {
            this._returnsWith.add(node);
        }
        this._checkForAllReturnStatementErrorCodes(node);
        return super.visitReturnStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleFormalParameter(node : any) : core.DartObject {
        this._checkForConstFormalParameter(node);
        this._checkForPrivateOptionalParameter(node);
        this._checkForTypeAnnotationDeferredClass(node.type);
        this._checkForImplicitDynamicIdentifier(node,node.identifier);
        return super.visitSimpleFormalParameter(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : core.DartObject {
        this._checkForAmbiguousImport(node);
        this._checkForReferenceBeforeDeclaration(node);
        this._checkForImplicitThisReferenceInInitializer(node);
        if (!this._isUnqualifiedReferenceToNonLocalStaticMemberAllowed(node)) {
            this._checkForUnqualifiedReferenceToNonLocalStaticMember(node);
        }
        return super.visitSimpleIdentifier(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) : core.DartObject {
        this._isInConstructorInitializer = true;
        try {
            return super.visitSuperConstructorInvocation(node);
        } finally {
            this._isInConstructorInitializer = false;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchCase(node : any) : core.DartObject {
        this._checkDuplicateDeclarationInStatements(node.statements);
        return super.visitSwitchCase(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchDefault(node : any) : core.DartObject {
        this._checkDuplicateDeclarationInStatements(node.statements);
        return super.visitSwitchDefault(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchStatement(node : any) : core.DartObject {
        this._checkForSwitchExpressionNotAssignable(node);
        this._checkForCaseBlocksNotTerminated(node);
        this._checkForMissingEnumConstantInSwitch(node);
        return super.visitSwitchStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThisExpression(node : any) : core.DartObject {
        this._checkForInvalidReferenceToThis(node);
        return super.visitThisExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThrowExpression(node : any) : core.DartObject {
        this._checkForConstEvalThrowsException(node);
        return super.visitThrowExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTopLevelVariableDeclaration(node : any) : core.DartObject {
        this._checkForFinalNotInitialized(node.variables);
        return super.visitTopLevelVariableDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeArgumentList(node : any) : core.DartObject {
        let list : any = node.arguments;
        for(let type of list) {
            this._checkForTypeAnnotationDeferredClass(type);
        }
        return super.visitTypeArgumentList(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) : core.DartObject {
        this._checkForTypeArgumentNotMatchingBounds(node);
        this._checkForTypeParameterReferencedByStatic(node);
        return super.visitTypeName(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameter(node : any) : core.DartObject {
        this._checkForBuiltInIdentifierAsName(node.name,CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_TYPE_PARAMETER_NAME);
        this._checkForTypeParameterSupertypeOfItsBound(node);
        this._checkForTypeAnnotationDeferredClass(node.bound);
        this._checkForImplicitDynamicType(node.bound);
        this._checkForNotInstantiatedBound(node.bound);
        return super.visitTypeParameter(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameterList(node : any) : core.DartObject {
        this._checkDuplicateDefinitionInTypeParameterList(node);
        return super.visitTypeParameterList(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : core.DartObject {
        let nameNode : any = node.name;
        let initializerNode : any = node.initializer;
        this._checkForInvalidAssignment(nameNode,initializerNode);
        this._checkForImplicitDynamicIdentifier(node,nameNode);
        nameNode.accept(this);
        let name : string = nameNode.name;
        this._namesForReferenceToDeclaredVariableInInitializer.add(name);
        let wasInInstanceVariableInitializer : boolean = this._isInInstanceVariableInitializer;
        this._isInInstanceVariableInitializer = this._isInInstanceVariableDeclaration;
        try {
            if (initializerNode != null) {
                initializerNode.accept(this);
            }
        } finally {
            this._isInInstanceVariableInitializer = wasInInstanceVariableInitializer;
            this._namesForReferenceToDeclaredVariableInInitializer.remove(name);
        }
        let grandparent : any = node.parent.parent;
        if (isNot(grandparent, any) && isNot(grandparent, any)) {
            let element : any = node.element;
            if (element != null) {
                this._hiddenElements.declare(element);
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationList(node : any) : core.DartObject {
        this._checkForTypeAnnotationDeferredClass(node.type);
        return super.visitVariableDeclarationList(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationStatement(node : any) : core.DartObject {
        this._checkForFinalNotInitialized(node.variables);
        return super.visitVariableDeclarationStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWhileStatement(node : any) : core.DartObject {
        this._checkForNonBoolCondition(node.condition);
        return super.visitWhileStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWithClause(node : any) : core.DartObject {
        node.mixinTypes.forEach(this._checkForImplicitDynamicType.bind(this));
        return super.visitWithClause(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitYieldStatement(node : any) : core.DartObject {
        if (this._inGenerator) {
            this._checkForYieldOfInvalidType(node.expression,node.star != null);
        }else {
            let errorCode : any;
            if (node.star != null) {
                errorCode = CompileTimeErrorCode.YIELD_EACH_IN_NON_GENERATOR;
            }else {
                errorCode = CompileTimeErrorCode.YIELD_IN_NON_GENERATOR;
            }
            this._errorReporter.reportErrorForNode(errorCode,node);
        }
        return super.visitYieldStatement(node);
    }
    _checkClassInheritance(node : any,superclass : any,withClause : any,implementsClause : any) : void {
        if (!this._checkForExtendsDisallowedClass(superclass) && !this._checkForImplementsDisallowedClass(implementsClause) && !this._checkForAllMixinErrorCodes(withClause)) {
            this._checkForImplicitDynamicType(superclass);
            this._checkForExtendsDeferredClass(superclass);
            this._checkForImplementsDeferredClass(implementsClause);
            this._checkForNonAbstractClassInheritsAbstractMember(node.name);
            this._checkForInconsistentMethodInheritance();
            this._checkForRecursiveInterfaceInheritance(this._enclosingClass);
            this._checkForConflictingGetterAndMethod();
            this._checkForConflictingInstanceGetterAndSuperclassMember();
            this._checkImplementsSuperClass(implementsClause);
            this._checkImplementsFunctionWithoutCall(node.name);
            this._checkForMixinHasNoConstructors(node);
            if (this._options.strongMode) {
                this._checkForMixinWithConflictingPrivateMember(withClause,superclass);
            }
        }
    }
    _checkDeferredPrefixCollision(directives : core.DartList<any>) : void {
        let count : number = directives.length;
        if (count > 1) {
            for(let i : number = 0; i < count; i++){
                let deferredToken : any = directives[i].deferredKeyword;
                if (deferredToken != null) {
                    this._errorReporter.reportErrorForToken(CompileTimeErrorCode.SHARED_DEFERRED_PREFIX,deferredToken);
                }
            }
        }
    }
    _checkDuplicateClassMembers(node : any) : void {
        let definedNames : core.DartMap<string,any> = new core.DartHashMap<string,any>();
        let visitedFields : core.DartSet<string> = new core.DartHashSet<string>();
        for(let member of node.members) {
            if (is(member, any)) {
                for(let field of member.fields.variables) {
                    let identifier : any = field.name;
                    this._checkDuplicateIdentifier(definedNames,identifier);
                    let name : string = identifier.name;
                    if (!field.isFinal && !field.isConst && !visitedFields.contains(name)) {
                        this._checkDuplicateIdentifier(definedNames,identifier,{
                            implicitSetter : true});
                    }
                    visitedFields.add(name);
                }
            }else if (is(member, any)) {
                this._checkDuplicateIdentifier(definedNames,member.name);
            }
        }
    }
    _checkDuplicateDeclarationInStatements(statements : core.DartList<any>) : void {
        let definedNames : core.DartMap<string,any> = new core.DartHashMap<string,any>();
        for(let statement of statements) {
            if (is(statement, any)) {
                for(let variable of statement.variables.variables) {
                    this._checkDuplicateIdentifier(definedNames,variable.name);
                }
            }else if (is(statement, any)) {
                this._checkDuplicateIdentifier(definedNames,statement.functionDeclaration.name);
            }
        }
    }
    _checkDuplicateDefinitionInCatchClause(node : any) : void {
        let exceptionParameter : any = node.exceptionParameter;
        let stackTraceParameter : any = node.stackTraceParameter;
        if (exceptionParameter != null && stackTraceParameter != null) {
            let exceptionName : string = exceptionParameter.name;
            if (exceptionName == stackTraceParameter.name) {
                this._errorReporter.reportErrorForNode(CompileTimeErrorCode.DUPLICATE_DEFINITION,stackTraceParameter,new core.DartList.literal(exceptionName));
            }
        }
    }
    _checkDuplicateDefinitionInParameterList(node : any) : void {
        let definedNames : core.DartMap<string,any> = new core.DartHashMap<string,any>();
        for(let parameter of node.parameters) {
            let identifier : any = parameter.identifier;
            if (identifier != null) {
                this._checkDuplicateIdentifier(definedNames,identifier);
            }
        }
    }
    _checkDuplicateDefinitionInTypeParameterList(node : any) : void {
        let definedNames : core.DartMap<string,any> = new core.DartHashMap<string,any>();
        for(let parameter of node.typeParameters) {
            this._checkDuplicateIdentifier(definedNames,parameter.name);
        }
    }
    _checkDuplicateEnumMembers(node : any) : void {
        let definedNames : core.DartMap<string,any> = new core.DartHashMap<string,any>();
        let element : any = node.element;
        let indexName : string = 'index';
        let valuesName : string = 'values';
        op(Op.INDEX_ASSIGN,definedNames,indexName,element.getField(indexName));
        op(Op.INDEX_ASSIGN,definedNames,valuesName,element.getField(valuesName));
        for(let constant of node.constants) {
            this._checkDuplicateIdentifier(definedNames,constant.name);
        }
    }
    _checkDuplicateIdentifier(definedNames : core.DartMap<string,any>,identifier : any,_namedArguments? : {implicitSetter? : boolean}) : void {
        let {implicitSetter} = Object.assign({
            "implicitSetter" : false}, _namedArguments );
        var getError : (previous : any,current : any) => any = (previous : any,current : any) : any =>  {
            if (is(previous, any) && is(current, any)) {
                if (current.isGetter) {
                    return CompileTimeErrorCode.GETTER_AND_METHOD_WITH_SAME_NAME;
                }
            }else if (is(previous, any) && is(current, any)) {
                if (previous.isGetter) {
                    return CompileTimeErrorCode.METHOD_AND_GETTER_WITH_SAME_NAME;
                }
            }else if (is(previous, any)) {
                return CompileTimeErrorCode.PREFIX_COLLIDES_WITH_TOP_LEVEL_MEMBER;
            }
            return CompileTimeErrorCode.DUPLICATE_DEFINITION;
        };
        let current : any = identifier.staticElement;
        let name : string = identifier.name;
        if (is(current, any) && current.isSetter) {
            name += '=';
        }else if (is(current, any) && current.isOperator && name == '-') {
            if (op(Op.EQUALS,current.parameters.length,0)) {
                name = 'unary-';
            }
        }else if (implicitSetter) {
            name += '=';
        }
        let previous : any = definedNames.get(name);
        if (previous != null) {
            this._errorReporter.reportErrorForNode(getError(previous,current),identifier,new core.DartList.literal(name));
        }else {
            definedNames.set(name,identifier.staticElement);
        }
    }
    _checkDuplicateUnitMembers(node : any) : void {
        let definedNames : core.DartMap<string,any> = new core.DartHashMap<string,any>();
        var addWithoutChecking : (element : any) => void = (element : any) : void =>  {
            for(let accessor of element.accessors) {
                let name : string = accessor.name;
                if (accessor.isSetter) {
                    name += '=';
                }
                op(Op.INDEX_ASSIGN,definedNames,name,accessor);
            }
            for(let type of element.enums) {
                op(Op.INDEX_ASSIGN,definedNames,type.name,type);
            }
            for(let function of element.functions) {
                op(Op.INDEX_ASSIGN,definedNames,function.name,function);
            }
            for(let alias of element.functionTypeAliases) {
                op(Op.INDEX_ASSIGN,definedNames,alias.name,alias);
            }
            for(let variable of element.topLevelVariables) {
                op(Op.INDEX_ASSIGN,definedNames,variable.name,variable);
                if (!variable.isFinal && !variable.isConst) {
                    op(Op.INDEX_ASSIGN,definedNames,op(Op.PLUS,variable.name,'='),variable);
                }
            }
            for(let type of element.types) {
                op(Op.INDEX_ASSIGN,definedNames,type.name,type);
            }
        };
        for(let importElement of this._currentLibrary.imports) {
            let prefix : any = importElement.prefix;
            if (prefix != null) {
                op(Op.INDEX_ASSIGN,definedNames,prefix.name,prefix);
            }
        }
        let element : any = node.element;
        if (element != this._currentLibrary.definingCompilationUnit) {
            addWithoutChecking(this._currentLibrary.definingCompilationUnit);
            for(let part of this._currentLibrary.parts) {
                if (op(Op.EQUALS,element,part)) {
                    break;
                }
                addWithoutChecking(part);
            }
        }
        for(let member of node.declarations) {
            if (is(member, any)) {
                this._checkDuplicateIdentifier(definedNames,member.name);
            }else if (is(member, any)) {
                for(let variable of member.variables.variables) {
                    this._checkDuplicateIdentifier(definedNames,variable.name);
                    if (!variable.isFinal && !variable.isConst) {
                        this._checkDuplicateIdentifier(definedNames,variable.name,{
                            implicitSetter : true});
                    }
                }
            }
        }
    }
    _checkDuplicateVariables(node : any) : void {
        let definedNames : core.DartMap<string,any> = new core.DartHashMap<string,any>();
        for(let variable of node.variables) {
            this._checkDuplicateIdentifier(definedNames,variable.name);
        }
    }
    _checkExpectedTwoMapTypeArguments(typeArguments : any) : void {
        let num : number = typeArguments.arguments.length;
        if (num != 2) {
            this._errorReporter.reportErrorForNode(StaticTypeWarningCode.EXPECTED_TWO_MAP_TYPE_ARGUMENTS,typeArguments,new core.DartList.literal(num));
        }
    }
    _checkForAllFinalInitializedErrorCodes(constructor : any) : void {
        if (constructor.factoryKeyword != null || constructor.redirectedConstructor != null || constructor.externalKeyword != null) {
            return;
        }
        if (this._isInNativeClass) {
            return;
        }
        let fieldElementsMap : core.DartHashMap<any,any> = new core.DartHashMap.from(this._initialFieldElementsMap);
        let formalParameters : any = constructor.parameters.parameters;
        for(let formalParameter of formalParameters) {
            var baseParameter : (parameter : any) => any = (parameter : any) : any =>  {
                if (is(parameter, any)) {
                    return parameter.parameter;
                }
                return parameter;
            };
            let parameter : any = baseParameter(formalParameter);
            if (is(parameter, any)) {
                let fieldElement : any = (parameter.element as any).field;
                let state : any = op(Op.INDEX,fieldElementsMap,fieldElement);
                if (op(Op.EQUALS,state,INIT_STATE.NOT_INIT)) {
                    op(Op.INDEX_ASSIGN,fieldElementsMap,fieldElement,INIT_STATE.INIT_IN_FIELD_FORMAL);
                }else if (op(Op.EQUALS,state,INIT_STATE.INIT_IN_DECLARATION)) {
                    if (fieldElement.isFinal || fieldElement.isConst) {
                        this._errorReporter.reportErrorForNode(StaticWarningCode.FINAL_INITIALIZED_IN_DECLARATION_AND_CONSTRUCTOR,formalParameter.identifier,new core.DartList.literal(fieldElement.displayName));
                    }
                }else if (op(Op.EQUALS,state,INIT_STATE.INIT_IN_FIELD_FORMAL)) {
                    if (fieldElement.isFinal || fieldElement.isConst) {
                        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.FINAL_INITIALIZED_MULTIPLE_TIMES,formalParameter.identifier,new core.DartList.literal(fieldElement.displayName));
                    }
                }
            }
        }
        let initializers : any = constructor.initializers;
        for(let constructorInitializer of initializers) {
            if (is(constructorInitializer, any)) {
                return;
            }
            if (is(constructorInitializer, any)) {
                let fieldName : any = constructorInitializer.fieldName;
                let element : any = fieldName.staticElement;
                if (is(element, any)) {
                    let state : any = op(Op.INDEX,fieldElementsMap,element);
                    if (op(Op.EQUALS,state,INIT_STATE.NOT_INIT)) {
                        op(Op.INDEX_ASSIGN,fieldElementsMap,element,INIT_STATE.INIT_IN_INITIALIZERS);
                    }else if (op(Op.EQUALS,state,INIT_STATE.INIT_IN_DECLARATION)) {
                        if (element.isFinal || element.isConst) {
                            this._errorReporter.reportErrorForNode(StaticWarningCode.FIELD_INITIALIZED_IN_INITIALIZER_AND_DECLARATION,fieldName);
                        }
                    }else if (op(Op.EQUALS,state,INIT_STATE.INIT_IN_FIELD_FORMAL)) {
                        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.FIELD_INITIALIZED_IN_PARAMETER_AND_INITIALIZER,fieldName);
                    }else if (op(Op.EQUALS,state,INIT_STATE.INIT_IN_INITIALIZERS)) {
                        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.FIELD_INITIALIZED_BY_MULTIPLE_INITIALIZERS,fieldName,new core.DartList.literal(element.displayName));
                    }
                }
            }
        }
        let notInitFinalFields : core.DartList<any> = new core.DartList.literal<any>();
        fieldElementsMap.forEach((fieldElement : any,state : any) =>  {
            if (op(Op.EQUALS,state,INIT_STATE.NOT_INIT)) {
                if (fieldElement.isFinal) {
                    notInitFinalFields.add(fieldElement);
                }
            }
        });
        fieldElementsMap.forEach((fieldElement : any,state : any) =>  {
            if (op(Op.EQUALS,state,INIT_STATE.NOT_INIT)) {
                if (fieldElement.isConst) {
                    this._errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_NOT_INITIALIZED,constructor.returnType,new core.DartList.literal(fieldElement.name));
                }
            }
        });
        if (notInitFinalFields.isNotEmpty) {
            let names : core.DartList<string> = notInitFinalFields.map((item : any) =>  {
                return item.name;
            }).toList();
            names.sort();
            if (names.length == 1) {
                this._errorReporter.reportErrorForNode(StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_1,constructor.returnType,names);
            }else if (names.length == 2) {
                this._errorReporter.reportErrorForNode(StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_2,constructor.returnType,names);
            }else {
                this._errorReporter.reportErrorForNode(StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_3_PLUS,constructor.returnType,new core.DartList.literal(names[0],names[1],names.length - 2));
            }
        }
    }
    _checkForAllInvalidOverrideErrorCodes(derivedElement : any,baseElement : any,parameters : core.DartList<any>,parameterLocations : core.DartList<any>,errorNameTarget : any) : boolean {
        if (this._options.strongMode) {
            return false;
        }
        let isGetter : boolean = false;
        let isSetter : boolean = false;
        if (is(derivedElement, any)) {
            isGetter = derivedElement.isGetter;
            isSetter = derivedElement.isSetter;
        }
        let executableElementName : string = derivedElement.name;
        let derivedFT : any = derivedElement.type;
        let baseFT : any = baseElement.type;
        let enclosingType : any = this._enclosingClass.type;
        baseFT = this._inheritanceManager.substituteTypeArgumentsInMemberFromInheritance(baseFT,executableElementName,enclosingType);
        if (op(Op.EQUALS,derivedFT,null) || op(Op.EQUALS,baseFT,null)) {
            return false;
        }
        if (!derivedFT.typeFormals.isEmpty) {
            if (baseFT.typeFormals.isEmpty) {
                derivedFT = this._typeSystem.instantiateToBounds(derivedFT);
            }else {
                let params1 : core.DartList<any> = derivedFT.typeFormals;
                let params2 : core.DartList<any> = baseFT.typeFormals;
                let count : number = params1.length;
                if (params2.length != count) {
                    this._errorReporter.reportErrorForNode(HintCode.INVALID_METHOD_OVERRIDE_TYPE_PARAMETERS,errorNameTarget,new core.DartList.literal(count,params2.length,baseElement.enclosingElement.displayName));
                    return true;
                }
                let variables1 : core.DartList<any> = new core.DartList<any>();
                let variables2 : core.DartList<any> = new core.DartList<any>();
                let variablesFresh : core.DartList<any> = new core.DartList<any>();
                for(let i : number = 0; i < count; i++){
                    let p1 : any = params1[i];
                    let p2 : any = params2[i];
                    let pFresh : any = new bare.createInstance(any,null,p1.name,-1);
                    let variable1 : any = p1.type;
                    let variable2 : any = p2.type;
                    let variableFresh : any = new bare.createInstance(any,null,pFresh);
                    variables1.add(variable1);
                    variables2.add(variable2);
                    variablesFresh.add(variableFresh);
                    let bound1 : any = (p1.bound || DynamicTypeImpl.instance);
                    let bound2 : any = (p2.bound || DynamicTypeImpl.instance);
                    bound1 = bound1.substitute2(variablesFresh,variables1);
                    bound2 = bound2.substitute2(variablesFresh,variables2);
                    pFresh.bound = bound2;
                    if (!this._typeSystem.isSubtypeOf(bound2,bound1)) {
                        this._errorReporter.reportErrorForNode(HintCode.INVALID_METHOD_OVERRIDE_TYPE_PARAMETER_BOUND,errorNameTarget,new core.DartList.literal(p1.displayName,p1.bound,p2.displayName,p2.bound,baseElement.enclosingElement.displayName));
                        return true;
                    }
                }
                derivedFT = derivedFT.instantiate(variablesFresh);
                baseFT = baseFT.instantiate(variablesFresh);
            }
        }
        let derivedFTReturnType : any = derivedFT.returnType;
        let baseFTReturnType : any = baseFT.returnType;
        let derivedNormalPT : core.DartList<any> = derivedFT.normalParameterTypes;
        let baseNormalPT : core.DartList<any> = baseFT.normalParameterTypes;
        let derivedPositionalPT : core.DartList<any> = derivedFT.optionalParameterTypes;
        let basePositionalPT : core.DartList<any> = baseFT.optionalParameterTypes;
        let derivedNamedPT : core.DartMap<string,any> = derivedFT.namedParameterTypes;
        let baseNamedPT : core.DartMap<string,any> = baseFT.namedParameterTypes;
        if (derivedNormalPT.length > baseNormalPT.length) {
            this._errorReporter.reportErrorForNode(StaticWarningCode.INVALID_OVERRIDE_REQUIRED,errorNameTarget,new core.DartList.literal(baseNormalPT.length,baseElement,baseElement.enclosingElement.displayName));
            return true;
        }
        if (derivedNormalPT.length + derivedPositionalPT.length < basePositionalPT.length + baseNormalPT.length) {
            this._errorReporter.reportErrorForNode(StaticWarningCode.INVALID_OVERRIDE_POSITIONAL,errorNameTarget,new core.DartList.literal(basePositionalPT.length + baseNormalPT.length,baseElement,baseElement.enclosingElement.displayName));
            return true;
        }
        for(let overriddenParamName of baseNamedPT.keys) {
            if (!derivedNamedPT.containsKey(overriddenParamName)) {
                this._errorReporter.reportErrorForNode(StaticWarningCode.INVALID_OVERRIDE_NAMED,errorNameTarget,new core.DartList.literal(overriddenParamName,baseElement,baseElement.enclosingElement.displayName));
                return true;
            }
        }
        if (baseFTReturnType != VoidTypeImpl.instance && !this._typeSystem.isAssignableTo(derivedFTReturnType,baseFTReturnType)) {
            this._errorReporter.reportTypeErrorForNode(!isGetter ? StaticWarningCode.INVALID_METHOD_OVERRIDE_RETURN_TYPE : StaticWarningCode.INVALID_GETTER_OVERRIDE_RETURN_TYPE,errorNameTarget,new core.DartList.literal(derivedFTReturnType,baseFTReturnType,baseElement.enclosingElement.displayName));
            return true;
        }
        if (parameterLocations == null) {
            return false;
        }
        let parameterIndex : number = 0;
        for(let i : number = 0; i < derivedNormalPT.length; i++){
            if (!this._typeSystem.isAssignableTo(baseNormalPT[i],derivedNormalPT[i])) {
                this._errorReporter.reportTypeErrorForNode(!isSetter ? StaticWarningCode.INVALID_METHOD_OVERRIDE_NORMAL_PARAM_TYPE : StaticWarningCode.INVALID_SETTER_OVERRIDE_NORMAL_PARAM_TYPE,parameterLocations[parameterIndex],new core.DartList.literal(derivedNormalPT[i],baseNormalPT[i],baseElement.enclosingElement.displayName));
                return true;
            }
            parameterIndex++;
        }
        for(let i : number = 0; i < basePositionalPT.length; i++){
            if (!this._typeSystem.isAssignableTo(basePositionalPT[i],derivedPositionalPT[i])) {
                this._errorReporter.reportTypeErrorForNode(StaticWarningCode.INVALID_METHOD_OVERRIDE_OPTIONAL_PARAM_TYPE,parameterLocations[parameterIndex],new core.DartList.literal(derivedPositionalPT[i],basePositionalPT[i],baseElement.enclosingElement.displayName));
                return true;
            }
            parameterIndex++;
        }
        for(let overriddenName of baseNamedPT.keys) {
            let derivedType : any = derivedNamedPT.get(overriddenName);
            if (op(Op.EQUALS,derivedType,null)) {
                continue;
            }
            let baseType : any = baseNamedPT.get(overriddenName);
            if (!this._typeSystem.isAssignableTo(baseType,derivedType)) {
                let parameterToSelect : any = null;
                let parameterLocationToSelect : any = null;
                for(let i : number = 0; i < parameters.length; i++){
                    let parameter : any = parameters[i];
                    if (op(Op.EQUALS,parameter.parameterKind,ParameterKind.NAMED) && overriddenName == parameter.name) {
                        parameterToSelect = parameter;
                        parameterLocationToSelect = parameterLocations[i];
                        break;
                    }
                }
                if (parameterToSelect != null) {
                    this._errorReporter.reportTypeErrorForNode(StaticWarningCode.INVALID_METHOD_OVERRIDE_NAMED_PARAM_TYPE,parameterLocationToSelect,new core.DartList.literal(derivedType,baseType,baseElement.enclosingElement.displayName));
                    return true;
                }
            }
        }
        let foundError : boolean = false;
        let formalParameters : core.DartList<any> = new core.DartList<any>();
        let parameterElts : core.DartList<any> = new core.DartList<any>();
        let overriddenParameterElts : core.DartList<any> = new core.DartList<any>();
        let overriddenPEs : core.DartList<any> = baseElement.parameters;
        for(let i : number = 0; i < parameters.length; i++){
            let parameter : any = parameters[i];
            if (parameter.parameterKind.isOptional) {
                formalParameters.add(parameterLocations[i]);
                parameterElts.add(parameter as any);
            }
        }
        for(let parameterElt of overriddenPEs) {
            if (parameterElt.parameterKind.isOptional) {
                if (is(parameterElt, any)) {
                    overriddenParameterElts.add(parameterElt);
                }
            }
        }
        if (parameterElts.length > 0) {
            if (op(Op.EQUALS,parameterElts[0].parameterKind,ParameterKind.NAMED)) {
                for(let i : number = 0; i < parameterElts.length; i++){
                    let parameterElt : any = parameterElts[i];
                    let result : any = parameterElt.evaluationResult;
                    if (this._isUserDefinedObject(result)) {
                        continue;
                    }
                    let parameterName : string = parameterElt.name;
                    for(let j : number = 0; j < overriddenParameterElts.length; j++){
                        let overriddenParameterElt : any = overriddenParameterElts[j];
                        if (op(Op.EQUALS,overriddenParameterElt.initializer,null)) {
                            continue;
                        }
                        let overriddenParameterName : string = overriddenParameterElt.name;
                        if (parameterName != null && parameterName == overriddenParameterName) {
                            let overriddenResult : any = overriddenParameterElt.evaluationResult;
                            if (this._isUserDefinedObject(overriddenResult)) {
                                break;
                            }
                            if (!result.equalValues(this._typeProvider,overriddenResult)) {
                                this._errorReporter.reportErrorForNode(StaticWarningCode.INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_NAMED,formalParameters[i],new core.DartList.literal(baseElement.enclosingElement.displayName,baseElement.displayName,parameterName));
                                foundError = true;
                            }
                        }
                    }
                }
            }else {
                for(let i : number = 0; i < parameterElts.length && i < overriddenParameterElts.length; i++){
                    let parameterElt : any = parameterElts[i];
                    let result : any = parameterElt.evaluationResult;
                    if (this._isUserDefinedObject(result)) {
                        continue;
                    }
                    let overriddenParameterElt : any = overriddenParameterElts[i];
                    if (op(Op.EQUALS,overriddenParameterElt.initializer,null)) {
                        continue;
                    }
                    let overriddenResult : any = overriddenParameterElt.evaluationResult;
                    if (this._isUserDefinedObject(overriddenResult)) {
                        continue;
                    }
                    if (!result.equalValues(this._typeProvider,overriddenResult)) {
                        this._errorReporter.reportErrorForNode(StaticWarningCode.INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_POSITIONAL,formalParameters[i],new core.DartList.literal(baseElement.enclosingElement.displayName,baseElement.displayName));
                        foundError = true;
                    }
                }
            }
        }
        return foundError;
    }
    _checkForAllInvalidOverrideErrorCodesForExecutable(executableElement : any,parameters : core.DartList<any>,parameterLocations : core.DartList<any>,errorNameTarget : any) : void {
        /* TODO (AssertStatementImpl) : assert (!_options.strongMode); */;
        let overriddenExecutables : core.DartList<any> = this._inheritanceManager.lookupOverrides(this._enclosingClass,executableElement.name);
        if (this._checkForInstanceMethodNameCollidesWithSuperclassStatic(executableElement,errorNameTarget)) {
            return;
        }
        for(let overriddenElement of overriddenExecutables) {
            if (this._checkForAllInvalidOverrideErrorCodes(executableElement,overriddenElement,parameters,parameterLocations,errorNameTarget)) {
                return;
            }
        }
    }
    _checkForAllInvalidOverrideErrorCodesForField(declaration : any) : void {
        if (this._options.strongMode) {
            return;
        }
        if (op(Op.EQUALS,this._enclosingClass,null) || declaration.isStatic) {
            return;
        }
        let fields : any = declaration.fields;
        for(let field of fields.variables) {
            let element : any = field.element as any;
            if (op(Op.EQUALS,element,null)) {
                continue;
            }
            let getter : any = element.getter;
            let setter : any = element.setter;
            let fieldName : any = field.name;
            if (getter != null) {
                this._checkForAllInvalidOverrideErrorCodesForExecutable(getter,ParameterElement.EMPTY_LIST,AstNode.EMPTY_LIST,fieldName);
            }
            if (setter != null) {
                this._checkForAllInvalidOverrideErrorCodesForExecutable(setter,setter.parameters,new core.DartList.literal<any>(fieldName),fieldName);
            }
        }
    }
    _checkForAllInvalidOverrideErrorCodesForMethod(method : any) : void {
        if (this._options.strongMode) {
            return;
        }
        if (op(Op.EQUALS,this._enclosingClass,null) || method.isStatic || is(method.body, any)) {
            return;
        }
        let executableElement : any = method.element;
        if (op(Op.EQUALS,executableElement,null)) {
            return;
        }
        let methodName : any = method.name;
        if (methodName.isSynthetic) {
            return;
        }
        let formalParameterList : any = method.parameters;
        let parameterList : any = ((t)=>(!!t)?t.parameters:null)(formalParameterList);
        let parameters : core.DartList<any> = parameterList != null ? new core.DartList.from(parameterList) : null;
        this._checkForAllInvalidOverrideErrorCodesForExecutable(executableElement,executableElement.parameters,parameters,methodName);
    }
    _checkForAllMixinErrorCodes(withClause : any) : boolean {
        if (op(Op.EQUALS,withClause,null)) {
            return false;
        }
        let problemReported : boolean = false;
        for(let mixinName of withClause.mixinTypes) {
            let mixinType : any = mixinName.type;
            if (is(mixinType, any)) {
                if (this._checkForExtendsOrImplementsDisallowedClass(mixinName,CompileTimeErrorCode.MIXIN_OF_DISALLOWED_CLASS)) {
                    problemReported = true;
                }else {
                    let mixinElement : any = mixinType.element;
                    if (this._checkForExtendsOrImplementsDeferredClass(mixinName,CompileTimeErrorCode.MIXIN_DEFERRED_CLASS)) {
                        problemReported = true;
                    }
                    if (this._checkForMixinDeclaresConstructor(mixinName,mixinElement)) {
                        problemReported = true;
                    }
                    if (!this.enableSuperMixins && this._checkForMixinInheritsNotFromObject(mixinName,mixinElement)) {
                        problemReported = true;
                    }
                    if (this._checkForMixinReferencesSuper(mixinName,mixinElement)) {
                        problemReported = true;
                    }
                }
            }
        }
        return problemReported;
    }
    _checkForAllRedirectConstructorErrorCodes(declaration : any) : void {
        let redirectedConstructor : any = declaration.redirectedConstructor;
        if (op(Op.EQUALS,redirectedConstructor,null)) {
            return;
        }
        let redirectedElement : any = redirectedConstructor.staticElement;
        if (op(Op.EQUALS,redirectedElement,null)) {
            let constructorTypeName : any = redirectedConstructor.type;
            let redirectedType : any = constructorTypeName.type;
            if (redirectedType != null && redirectedType.element != null && !redirectedType.isDynamic) {
                let constructorStrName : string = constructorTypeName.name.name;
                if (redirectedConstructor.name != null) {
                    constructorStrName += `.${redirectedConstructor.name.name}`;
                }
                let errorCode : any = (declaration.constKeyword != null ? CompileTimeErrorCode.REDIRECT_TO_MISSING_CONSTRUCTOR : StaticWarningCode.REDIRECT_TO_MISSING_CONSTRUCTOR);
                this._errorReporter.reportErrorForNode(errorCode,redirectedConstructor,new core.DartList.literal(constructorStrName,redirectedType.displayName));
            }
            return;
        }
        let redirectedType : any = redirectedElement.type;
        let redirectedReturnType : any = redirectedType.returnType;
        let constructorType : any = resolutionMap.elementDeclaredByConstructorDeclaration(declaration).type;
        let constructorReturnType : any = constructorType.returnType;
        if (!this._typeSystem.isAssignableTo(redirectedReturnType,constructorReturnType)) {
            this._errorReporter.reportErrorForNode(StaticWarningCode.REDIRECT_TO_INVALID_RETURN_TYPE,redirectedConstructor,new core.DartList.literal(redirectedReturnType,constructorReturnType));
            return;
        }else if (!this._typeSystem.isSubtypeOf(redirectedType,constructorType)) {
            this._errorReporter.reportErrorForNode(StaticWarningCode.REDIRECT_TO_INVALID_FUNCTION_TYPE,redirectedConstructor,new core.DartList.literal(redirectedType,constructorType));
        }
    }
    _checkForAllReturnStatementErrorCodes(statement : any) : void {
        let functionType : any = ((t)=>(!!t)?t.type:null)(this._enclosingFunction);
        let expectedReturnType : any = op(Op.EQUALS,functionType,null) ? DynamicTypeImpl.instance : functionType.returnType;
        let returnExpression : any = statement.expression;
        var isGenerativeConstructor : (element : any) => boolean = (element : any) : boolean =>  {
            return is(element, any) && !element.isFactory;
        };
        if (isGenerativeConstructor(this._enclosingFunction)) {
            if (op(Op.EQUALS,returnExpression,null)) {
                return;
            }
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.RETURN_IN_GENERATIVE_CONSTRUCTOR,returnExpression);
            return;
        }
        if (op(Op.EQUALS,returnExpression,null)) {
            if (this._inGenerator) {
                return;
            }else if (this._inAsync) {
                if (expectedReturnType.isDynamic) {
                    return;
                }
                if (is(expectedReturnType, any) && expectedReturnType.isDartAsyncFuture) {
                    let futureArgument : any = op(Op.INDEX,expectedReturnType.typeArguments,0);
                    if (futureArgument.isDynamic || futureArgument.isDartCoreNull || futureArgument.isObject) {
                        return;
                    }
                }
            }else if (expectedReturnType.isDynamic || expectedReturnType.isVoid || (expectedReturnType.isDartCoreNull && this._options.strongMode)) {
                return;
            }
            this._hasReturnWithoutValue = true;
            this._errorReporter.reportErrorForNode(StaticWarningCode.RETURN_WITHOUT_VALUE,statement);
            return;
        }else if (this._inGenerator) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.RETURN_IN_GENERATOR,statement,new core.DartList.literal(this._inAsync ? "async*" : "sync*"));
        }
        this._checkForReturnOfInvalidType(returnExpression,expectedReturnType);
    }
    _checkForAmbiguousExport(directive : any,exportElement : any,exportedLibrary : any) : void {
        if (op(Op.EQUALS,exportedLibrary,null)) {
            return;
        }
        let namespace : any = new bare.createInstance(any,null).createExportNamespaceForDirective(exportElement);
        let definedNames : core.DartMap<string,any> = namespace.definedNames;
        for(let name of definedNames.keys) {
            let element : any = definedNames.get(name);
            let prevElement : any = op(Op.INDEX,this._exportedElements,name);
            if (element != null && prevElement != null && prevElement != element) {
                this._errorReporter.reportErrorForNode(CompileTimeErrorCode.AMBIGUOUS_EXPORT,directive,new core.DartList.literal(name,prevElement.library.definingCompilationUnit.displayName,element.library.definingCompilationUnit.displayName));
                return;
            }else {
                op(Op.INDEX_ASSIGN,this._exportedElements,name,element);
            }
        }
    }
    _checkForAmbiguousImport(node : any) : void {
        let element : any = node.staticElement;
        if (is(element, any)) {
            let name : string = element.displayName;
            let conflictingMembers : core.DartList<any> = element.conflictingElements;
            let count : number = conflictingMembers.length;
            let libraryNames : core.DartList<string> = new core.DartList<string>(count);
            for(let i : number = 0; i < count; i++){
                libraryNames[i] = this._getLibraryName(conflictingMembers[i]);
            }
            libraryNames.sort();
            this._errorReporter.reportErrorForNode(StaticWarningCode.AMBIGUOUS_IMPORT,node,new core.DartList.literal(name,StringUtilities.printListOfQuotedNames(libraryNames)));
        }else if (element != null) {
            let sdkElements : core.DartList<any> = node.getProperty(LibraryImportScope.conflictingSdkElements);
            if (sdkElements != null) {
                this._errorReporter.reportErrorForNode(StaticWarningCode.CONFLICTING_DART_IMPORT,node,new core.DartList.literal(element.displayName,this._getLibraryName(sdkElements[0]),this._getLibraryName(element)));
            }
        }
    }
    _checkForArgumentTypeNotAssignable(expression : any,expectedStaticType : any,actualStaticType : any,errorCode : any) : void {
        if (actualStaticType != null && expectedStaticType != null) {
            this._checkForAssignableExpressionAtType(expression,actualStaticType,expectedStaticType,errorCode);
        }
    }
    _checkForArgumentTypeNotAssignableForArgument(argument : any) : void {
        if (op(Op.EQUALS,argument,null)) {
            return;
        }
        let staticParameterElement : any = argument.staticParameterElement;
        let staticParameterType : any = ((t)=>(!!t)?t.type:null)(staticParameterElement);
        this._checkForArgumentTypeNotAssignableWithExpectedTypes(argument,staticParameterType,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE);
    }
    _checkForArgumentTypeNotAssignableWithExpectedTypes(expression : any,expectedStaticType : any,errorCode : any) : void {
        this._checkForArgumentTypeNotAssignable(expression,expectedStaticType,ErrorVerifier.getStaticType(expression),errorCode);
    }
    _checkForArgumentTypesNotAssignableInList(argumentList : any) : void {
        if (op(Op.EQUALS,argumentList,null)) {
            return;
        }
        for(let argument of argumentList.arguments) {
            this._checkForArgumentTypeNotAssignableForArgument(argument);
        }
    }
    _checkForAssignability(expression : any,type : any,errorCode : any,arguments : core.DartList<core.DartObject>) : void {
        if (op(Op.EQUALS,expression,null)) {
            return;
        }
        let expressionType : any = expression.staticType;
        if (op(Op.EQUALS,expressionType,null)) {
            return;
        }
        if (this._expressionIsAssignableAtType(expression,expressionType,type)) {
            return;
        }
        this._errorReporter.reportErrorForNode(errorCode,expression,arguments);
    }
    _checkForAssignableExpression(expression : any,expectedStaticType : any,errorCode : any) : boolean {
        let actualStaticType : any = ErrorVerifier.getStaticType(expression);
        return actualStaticType != null && this._checkForAssignableExpressionAtType(expression,actualStaticType,expectedStaticType,errorCode);
    }
    _checkForAssignableExpressionAtType(expression : any,actualStaticType : any,expectedStaticType : any,errorCode : any) : boolean {
        if (!this._expressionIsAssignableAtType(expression,actualStaticType,expectedStaticType)) {
            this._errorReporter.reportTypeErrorForNode(errorCode,expression,new core.DartList.literal(actualStaticType,expectedStaticType));
            return false;
        }
        return true;
    }
    _checkForAssignmentToFinal(expression : any) : void {
        let element : any = null;
        let highlightedNode : any = expression;
        if (is(expression, any)) {
            element = expression.staticElement;
            if (is(expression, any)) {
                highlightedNode = expression.identifier;
            }
        }else if (is(expression, any)) {
            element = expression.propertyName.staticElement;
            highlightedNode = expression.propertyName;
        }
        var toVariable : (element : any) => any = (element : any) : any =>  {
            return is(element, any) ? element.variable : element;
        };
        element = toVariable(element);
        if (is(element, any)) {
            if (element.isConst) {
                this._errorReporter.reportErrorForNode(StaticWarningCode.ASSIGNMENT_TO_CONST,expression);
            }else if (element.isFinal) {
                if (is(element, any) && op(Op.EQUALS,element.setter,null) && element.isSynthetic) {
                    this._errorReporter.reportErrorForNode(StaticWarningCode.ASSIGNMENT_TO_FINAL_NO_SETTER,highlightedNode,new core.DartList.literal(element.name,element.enclosingElement.displayName));
                    return;
                }
                this._errorReporter.reportErrorForNode(StaticWarningCode.ASSIGNMENT_TO_FINAL,highlightedNode,new core.DartList.literal(element.name));
            }
        }else if (is(element, any)) {
            this._errorReporter.reportErrorForNode(StaticWarningCode.ASSIGNMENT_TO_FUNCTION,expression);
        }else if (is(element, any)) {
            this._errorReporter.reportErrorForNode(StaticWarningCode.ASSIGNMENT_TO_METHOD,expression);
        }else if (is(element, any) || is(element, any) || is(element, any)) {
            this._errorReporter.reportErrorForNode(StaticWarningCode.ASSIGNMENT_TO_TYPE,expression);
        }
    }
    _checkForBadFunctionUse(node : any) : void {
        let extendsClause : any = node.extendsClause;
        let withClause : any = node.withClause;
        if (op(Op.EQUALS,node.name.name,"Function")) {
            this._errorReporter.reportErrorForNode(HintCode.DEPRECATED_FUNCTION_CLASS_DECLARATION,node.name);
        }
        if (extendsClause != null) {
            let superclassType : any = this._enclosingClass.supertype;
            let superclassElement : any = ((t)=>(!!t)?t.element:null)(superclassType);
            if (superclassElement != null && op(Op.EQUALS,superclassElement.name,"Function")) {
                this._errorReporter.reportErrorForNode(HintCode.DEPRECATED_EXTENDS_FUNCTION,extendsClause.superclass);
            }
        }
        if (withClause != null) {
            for(let type of withClause.mixinTypes) {
                let mixinElement : any = type.name.staticElement;
                if (mixinElement != null && op(Op.EQUALS,mixinElement.name,"Function")) {
                    this._errorReporter.reportErrorForNode(HintCode.DEPRECATED_MIXIN_FUNCTION,type);
                }
            }
        }
    }
    _checkForBuiltInIdentifierAsName(identifier : any,errorCode : any) : void {
        let token : any = identifier.token;
        if (token.type.isKeyword && ((t)=>(!!t)?t.isPseudo:null)(token.keyword) != true) {
            this._errorReporter.reportErrorForNode(errorCode,identifier,new core.DartList.literal(identifier.name));
        }
    }
    _checkForCaseBlockNotTerminated(switchCase : any) : void {
        let statements : any = switchCase.statements;
        if (statements.isEmpty) {
            let parent : any = switchCase.parent;
            if (is(parent, any)) {
                let members : any = parent.members;
                let index : number = members.indexOf(switchCase);
                if (index != -1 && index < op(Op.MINUS,members.length,1)) {
                    return;
                }
            }
        }else {
            let statement : any = statements.last;
            if (is(statement, any) && statement.statements.isNotEmpty) {
                let block : any = statement;
                statement = block.statements.last;
            }
            if (is(statement, any) || is(statement, any) || is(statement, any)) {
                return;
            }
            if (is(statement, any)) {
                let expression : any = statement.expression;
                if (is(expression, any) || is(expression, any)) {
                    return;
                }
            }
        }
        this._errorReporter.reportErrorForToken(StaticWarningCode.CASE_BLOCK_NOT_TERMINATED,switchCase.keyword);
    }
    _checkForCaseBlocksNotTerminated(statement : any) : void {
        let members : any = statement.members;
        let lastMember : number = op(Op.MINUS,members.length,1);
        for(let i : number = 0; i < lastMember; i++){
            let member : any = op(Op.INDEX,members,i);
            if (is(member, any)) {
                this._checkForCaseBlockNotTerminated(member);
            }
        }
    }
    _checkForConcreteClassWithAbstractMember(method : any) : void {
        if (method.isAbstract && this._enclosingClass != null && !this._enclosingClass.isAbstract) {
            let nameNode : any = method.name;
            let memberName : string = nameNode.name;
            let overriddenMember : any;
            if (method.isGetter) {
                overriddenMember = this._enclosingClass.lookUpInheritedConcreteGetter(memberName,this._currentLibrary);
            }else if (method.isSetter) {
                overriddenMember = this._enclosingClass.lookUpInheritedConcreteSetter(memberName,this._currentLibrary);
            }else {
                overriddenMember = this._enclosingClass.lookUpInheritedConcreteMethod(memberName,this._currentLibrary);
            }
            if (op(Op.EQUALS,overriddenMember,null) && !this._enclosingClass.hasNoSuchMethod) {
                this._errorReporter.reportErrorForNode(StaticWarningCode.CONCRETE_CLASS_WITH_ABSTRACT_MEMBER,nameNode,new core.DartList.literal(memberName,this._enclosingClass.displayName));
            }
        }
    }
    _checkForConflictingConstructorNameAndMember(constructor : any,constructorElement : any) : void {
        let constructorName : any = constructor.name;
        let name : string = constructorElement.name;
        let classElement : any = constructorElement.enclosingElement;
        let constructors : core.DartList<any> = classElement.constructors;
        for(let otherConstructor of constructors) {
            if (core.identical(otherConstructor,constructorElement)) {
                continue;
            }
            if (name == otherConstructor.name) {
                if (name == null || new core.DartString(name).length == 0) {
                    this._errorReporter.reportErrorForNode(CompileTimeErrorCode.DUPLICATE_CONSTRUCTOR_DEFAULT,constructor);
                }else {
                    this._errorReporter.reportErrorForNode(CompileTimeErrorCode.DUPLICATE_CONSTRUCTOR_NAME,constructor,new core.DartList.literal(name));
                }
                return;
            }
        }
        if (constructorName != null && constructorElement != null && !constructorName.isSynthetic) {
            let field : any = classElement.getField(name);
            if (field != null && field.getter != null) {
                this._errorReporter.reportErrorForNode(CompileTimeErrorCode.CONFLICTING_CONSTRUCTOR_NAME_AND_FIELD,constructor,new core.DartList.literal(name));
            }else if (classElement.getMethod(name) != null) {
                this._errorReporter.reportErrorForNode(CompileTimeErrorCode.CONFLICTING_CONSTRUCTOR_NAME_AND_METHOD,constructor,new core.DartList.literal(name));
            }
        }
    }
    _checkForConflictingGetterAndMethod() : void {
        if (op(Op.EQUALS,this._enclosingClass,null)) {
            return;
        }
        for(let method of this._enclosingClass.methods) {
            let name : string = method.name;
            let inherited : any = this._inheritanceManager.lookupInheritance(this._enclosingClass,name);
            if (isNot(inherited, any)) {
                continue;
            }
            this._errorReporter.reportErrorForElement(CompileTimeErrorCode.CONFLICTING_GETTER_AND_METHOD,method,new core.DartList.literal(this._enclosingClass.displayName,inherited.enclosingElement.displayName,name));
        }
        for(let accessor of this._enclosingClass.accessors) {
            if (!accessor.isGetter) {
                continue;
            }
            let name : string = accessor.name;
            let inherited : any = this._inheritanceManager.lookupInheritance(this._enclosingClass,name);
            if (isNot(inherited, any)) {
                continue;
            }
            this._errorReporter.reportErrorForElement(CompileTimeErrorCode.CONFLICTING_METHOD_AND_GETTER,accessor,new core.DartList.literal(this._enclosingClass.displayName,inherited.enclosingElement.displayName,name));
        }
    }
    _checkForConflictingInstanceGetterAndSuperclassMember() : void {
        if (op(Op.EQUALS,this._enclosingClass,null)) {
            return;
        }
        let enclosingType : any = this._enclosingClass.type;
        for(let accessor of this._enclosingClass.accessors) {
            if (accessor.isStatic) {
                continue;
            }
            let name : string = accessor.displayName;
            let getter : boolean = accessor.isGetter;
            if (accessor.isSetter && accessor.isSynthetic) {
                continue;
            }
            let superElement : any;
            superElement = enclosingType.lookUpGetterInSuperclass(name,this._currentLibrary);
            if (op(Op.EQUALS,superElement,null)) {
                superElement = enclosingType.lookUpSetterInSuperclass(name,this._currentLibrary);
            }
            if (op(Op.EQUALS,superElement,null)) {
                superElement = enclosingType.lookUpMethodInSuperclass(name,this._currentLibrary);
            }
            if (op(Op.EQUALS,superElement,null)) {
                continue;
            }
            if (!superElement.isStatic) {
                continue;
            }
            let superElementClass : any = superElement.enclosingElement as any;
            let superElementType : any = superElementClass.type;
            if (getter) {
                this._errorReporter.reportErrorForElement(StaticWarningCode.CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER,accessor,new core.DartList.literal(superElementType.displayName));
            }else {
                this._errorReporter.reportErrorForElement(StaticWarningCode.CONFLICTING_INSTANCE_SETTER_AND_SUPERCLASS_MEMBER,accessor,new core.DartList.literal(superElementType.displayName));
            }
        }
    }
    _checkForConflictingInstanceMethodSetter(declaration : any) : void {
        let classMembers : any = declaration.members;
        if (classMembers.isEmpty) {
            return;
        }
        let memberHashMap : core.DartHashMap<string,any> = new core.DartHashMap<string,any>();
        for(let member of classMembers) {
            if (is(member, any)) {
                if (member.isStatic) {
                    continue;
                }
                let name : any = member.name;
                if (op(Op.EQUALS,name,null)) {
                    continue;
                }
                let addThisMemberToTheMap : boolean = true;
                let isGetter : boolean = member.isGetter;
                let isSetter : boolean = member.isSetter;
                let isOperator : boolean = member.isOperator;
                let isMethod : boolean = !isGetter && !isSetter && !isOperator;
                if (isMethod) {
                    let setterName : string = `${name.name}=`;
                    let enclosingElementOfSetter : any = null;
                    let conflictingSetter : any = op(Op.INDEX,memberHashMap,setterName);
                    if (conflictingSetter != null) {
                        enclosingElementOfSetter = resolutionMap.elementDeclaredByDeclaration(conflictingSetter).enclosingElement;
                    }else {
                        let elementFromInheritance : any = this._inheritanceManager.lookupInheritance(this._enclosingClass,setterName);
                        if (elementFromInheritance != null) {
                            enclosingElementOfSetter = elementFromInheritance.enclosingElement;
                        }
                    }
                    if (enclosingElementOfSetter != null) {
                        this._errorReporter.reportErrorForNode(StaticWarningCode.CONFLICTING_INSTANCE_METHOD_SETTER,name,new core.DartList.literal(this._enclosingClass.displayName,name.name,enclosingElementOfSetter.displayName));
                        addThisMemberToTheMap = false;
                    }
                }else if (isSetter) {
                    let methodName : string = name.name;
                    let conflictingMethod : any = op(Op.INDEX,memberHashMap,methodName);
                    if (conflictingMethod != null && is(conflictingMethod, any) && !conflictingMethod.isGetter) {
                        this._errorReporter.reportErrorForNode(StaticWarningCode.CONFLICTING_INSTANCE_METHOD_SETTER2,name,new core.DartList.literal(this._enclosingClass.displayName,name.name));
                        addThisMemberToTheMap = false;
                    }
                }
                if (addThisMemberToTheMap) {
                    if (member.isSetter) {
                        op(Op.INDEX_ASSIGN,memberHashMap,`${name.name}=`,member);
                    }else {
                        op(Op.INDEX_ASSIGN,memberHashMap,name.name,member);
                    }
                }
            }
        }
    }
    _checkForConflictingStaticGetterAndInstanceSetter(method : any) : void {
        if (!method.isStatic) {
            return;
        }
        let nameNode : any = method.name;
        if (op(Op.EQUALS,nameNode,null)) {
            return;
        }
        let name : string = nameNode.name;
        if (op(Op.EQUALS,this._enclosingClass,null)) {
            return;
        }
        let enclosingType : any = this._enclosingClass.type;
        let setter : any = enclosingType.lookUpSetter(name,this._currentLibrary);
        if (op(Op.EQUALS,setter,null)) {
            return;
        }
        if (setter.isStatic) {
            return;
        }
        let setterClass : any = setter.enclosingElement as any;
        let setterType : any = setterClass.type;
        this._errorReporter.reportErrorForNode(StaticWarningCode.CONFLICTING_STATIC_GETTER_AND_INSTANCE_SETTER,nameNode,new core.DartList.literal(setterType.displayName));
    }
    _checkForConflictingStaticSetterAndInstanceMember(method : any) : void {
        if (!method.isStatic) {
            return;
        }
        let nameNode : any = method.name;
        if (op(Op.EQUALS,nameNode,null)) {
            return;
        }
        let name : string = nameNode.name;
        if (op(Op.EQUALS,this._enclosingClass,null)) {
            return;
        }
        let enclosingType : any = this._enclosingClass.type;
        let member : any;
        member = enclosingType.lookUpMethod(name,this._currentLibrary);
        if (op(Op.EQUALS,member,null)) {
            member = enclosingType.lookUpGetter(name,this._currentLibrary);
        }
        if (op(Op.EQUALS,member,null)) {
            member = enclosingType.lookUpSetter(name,this._currentLibrary);
        }
        if (op(Op.EQUALS,member,null)) {
            return;
        }
        if (member.isStatic) {
            return;
        }
        let memberClass : any = member.enclosingElement as any;
        let memberType : any = memberClass.type;
        this._errorReporter.reportErrorForNode(StaticWarningCode.CONFLICTING_STATIC_SETTER_AND_INSTANCE_MEMBER,nameNode,new core.DartList.literal(memberType.displayName));
    }
    _checkForConflictingTypeVariableErrorCodes(declaration : any) : void {
        for(let typeParameter of this._enclosingClass.typeParameters) {
            let name : string = typeParameter.name;
            if (op(Op.EQUALS,this._enclosingClass.name,name)) {
                this._errorReporter.reportErrorForElement(CompileTimeErrorCode.CONFLICTING_TYPE_VARIABLE_AND_CLASS,typeParameter,new core.DartList.literal(name));
            }
            if (this._enclosingClass.getMethod(name) != null || this._enclosingClass.getGetter(name) != null || this._enclosingClass.getSetter(name) != null) {
                this._errorReporter.reportErrorForElement(CompileTimeErrorCode.CONFLICTING_TYPE_VARIABLE_AND_MEMBER,typeParameter,new core.DartList.literal(name));
            }
        }
    }
    _checkForConstConstructorWithNonConstSuper(constructor : any) : void {
        if (!this._isEnclosingConstructorConst) {
            return;
        }
        if (constructor.factoryKeyword != null) {
            return;
        }
        if (this._enclosingClass.mixins.length != 0) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_MIXIN,constructor.returnType);
            return;
        }
        for(let initializer of constructor.initializers) {
            if (is(initializer, any)) {
                let element : any = initializer.staticElement;
                if (op(Op.EQUALS,element,null) || element.isConst) {
                    return;
                }
                this._errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_NON_CONST_SUPER,initializer,new core.DartList.literal(element.enclosingElement.displayName));
                return;
            }
        }
        let supertype : any = this._enclosingClass.supertype;
        if (op(Op.EQUALS,supertype,null)) {
            return;
        }
        if (supertype.isObject) {
            return;
        }
        let unnamedConstructor : any = supertype.element.unnamedConstructor;
        if (op(Op.EQUALS,unnamedConstructor,null) || unnamedConstructor.isConst) {
            return;
        }
        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_NON_CONST_SUPER,constructor.returnType,new core.DartList.literal(supertype.displayName));
    }
    _checkForConstConstructorWithNonFinalField(constructor : any,constructorElement : any) : void {
        if (!this._isEnclosingConstructorConst) {
            return;
        }
        let classElement : any = constructorElement.enclosingElement;
        if (!classElement.hasNonFinalField) {
            return;
        }
        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_NON_FINAL_FIELD,constructor);
    }
    _checkForConstDeferredClass(expression : any,constructorName : any,typeName : any) : void {
        if (typeName.isDeferred) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_DEFERRED_CLASS,constructorName,new core.DartList.literal(typeName.name.name));
        }
    }
    _checkForConstEvalThrowsException(expression : any) : void {
        if (this._isEnclosingConstructorConst) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_CONSTRUCTOR_THROWS_EXCEPTION,expression);
        }
    }
    _checkForConstFormalParameter(parameter : any) : void {
        if (parameter.isConst) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_FORMAL_PARAMETER,parameter);
        }
    }
    _checkForConstOrNewWithAbstractClass(expression : any,typeName : any,type : any) : void {
        if (type.element.isAbstract) {
            let element : any = expression.staticElement;
            if (element != null && !element.isFactory) {
                if (op(Op.EQUALS,expression.keyword.keyword,Keyword.CONST)) {
                    this._errorReporter.reportErrorForNode(StaticWarningCode.CONST_WITH_ABSTRACT_CLASS,typeName);
                }else {
                    this._errorReporter.reportErrorForNode(StaticWarningCode.NEW_WITH_ABSTRACT_CLASS,typeName);
                }
            }
        }
    }
    _checkForConstOrNewWithEnum(expression : any,typeName : any,type : any) : void {
        if (type.element.isEnum) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.INSTANTIATE_ENUM,typeName);
        }
    }
    _checkForConstWithNonConst(expression : any) : void {
        let constructorElement : any = expression.staticElement;
        if (constructorElement != null && !constructorElement.isConst) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_WITH_NON_CONST,expression);
        }
    }
    _checkForConstWithTypeParameters(type : any) : void {
        if (isNot(type, any)) {
            return;
        }
        let typeName : any = type;
        let name : any = typeName.name;
        if (op(Op.EQUALS,name,null)) {
            return;
        }
        if (is(name.staticElement, any)) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_WITH_TYPE_PARAMETERS,name);
        }
        let typeArguments : any = typeName.typeArguments;
        if (typeArguments != null) {
            for(let argument of typeArguments.arguments) {
                this._checkForConstWithTypeParameters(argument);
            }
        }
    }
    _checkForConstWithUndefinedConstructor(expression : any,constructorName : any,typeName : any) : void {
        if (expression.staticElement != null) {
            return;
        }
        let type : any = typeName.type;
        if (is(type, any)) {
            let element : any = type.element;
            if (element != null && element.isEnum) {
                return;
            }
        }
        let className : any = typeName.name;
        let name : any = constructorName.name;
        if (name != null) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_WITH_UNDEFINED_CONSTRUCTOR,name,new core.DartList.literal(className,name));
        }else {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT,constructorName,new core.DartList.literal(className));
        }
    }
    _checkForDefaultValueInFunctionTypeAlias(alias : any) : void {
        let formalParameterList : any = alias.parameters;
        let parameters : any = formalParameterList.parameters;
        for(let parameter of parameters) {
            if (is(parameter, any)) {
                if (parameter.defaultValue != null) {
                    this._errorReporter.reportErrorForNode(CompileTimeErrorCode.DEFAULT_VALUE_IN_FUNCTION_TYPE_ALIAS,alias);
                }
            }
        }
    }
    _checkForDefaultValueInFunctionTypedParameter(parameter : any) : void {
        if (!this._isInFunctionTypedFormalParameter) {
            return;
        }
        if (op(Op.EQUALS,parameter.defaultValue,null)) {
            return;
        }
        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.DEFAULT_VALUE_IN_FUNCTION_TYPED_PARAMETER,parameter);
    }
    _checkForDeferredPrefixCollisions(unit : any) : void {
        let directives : any = unit.directives;
        let count : number = directives.length;
        if (count > 0) {
            let prefixToDirectivesMap : core.DartHashMap<any,core.DartList<any>> = new core.DartHashMap<any,core.DartList<any>>();
            for(let i : number = 0; i < count; i++){
                let directive : any = op(Op.INDEX,directives,i);
                if (is(directive, any)) {
                    let prefix : any = directive.prefix;
                    if (prefix != null) {
                        let element : any = prefix.staticElement;
                        if (is(element, any)) {
                            let elements : core.DartList<any> = op(Op.INDEX,prefixToDirectivesMap,element);
                            if (elements == null) {
                                elements = new core.DartList<any>();
                                op(Op.INDEX_ASSIGN,prefixToDirectivesMap,element,elements);
                            }
                            elements.add(directive);
                        }
                    }
                }
            }
            for(let imports of prefixToDirectivesMap.values) {
                this._checkDeferredPrefixCollision(imports);
            }
        }
    }
    _checkForDuplicateDefinitionInheritance() : void {
        if (op(Op.EQUALS,this._enclosingClass,null)) {
            return;
        }
        for(let member of this._enclosingClass.methods) {
            if (member.isStatic) {
                this._checkForDuplicateDefinitionOfMember(member);
            }
        }
        for(let member of this._enclosingClass.accessors) {
            if (member.isStatic) {
                this._checkForDuplicateDefinitionOfMember(member);
            }
        }
    }
    _checkForDuplicateDefinitionOfMember(staticMember : any) : void {
        let name : string = staticMember.name;
        if (name == null) {
            return;
        }
        let inheritedMember : any = this._inheritanceManager.lookupInheritance(this._enclosingClass,name);
        if (op(Op.EQUALS,inheritedMember,null)) {
            return;
        }
        if (inheritedMember.isStatic) {
            return;
        }
        let displayName : string;
        let enclosingElement : any = inheritedMember.enclosingElement;
        if (op(Op.EQUALS,enclosingElement.source,this._enclosingClass.source)) {
            displayName = enclosingElement.displayName;
        }else {
            displayName = enclosingElement.getExtendedDisplayName(null);
        }
        this._errorReporter.reportErrorForElement(CompileTimeErrorCode.DUPLICATE_DEFINITION_INHERITANCE,staticMember,new core.DartList.literal(name,displayName));
    }
    _checkForExpectedOneListTypeArgument(literal : any,typeArguments : any) : void {
        let num : number = typeArguments.arguments.length;
        if (num != 1) {
            this._errorReporter.reportErrorForNode(StaticTypeWarningCode.EXPECTED_ONE_LIST_TYPE_ARGUMENTS,typeArguments,new core.DartList.literal(num));
        }
    }
    _checkForExportDuplicateLibraryName(directive : any,exportElement : any,exportedLibrary : any) : void {
        if (op(Op.EQUALS,exportedLibrary,null)) {
            return;
        }
        let name : string = exportedLibrary.name;
        let prevLibrary : any = op(Op.INDEX,this._nameToExportElement,name);
        if (prevLibrary != null) {
            if (prevLibrary != exportedLibrary) {
                if (!new core.DartString(name).isEmpty) {
                    this._errorReporter.reportErrorForNode(StaticWarningCode.EXPORT_DUPLICATED_LIBRARY_NAMED,directive,new core.DartList.literal(prevLibrary.definingCompilationUnit.displayName,exportedLibrary.definingCompilationUnit.displayName,name));
                }
                return;
            }
        }else {
            op(Op.INDEX_ASSIGN,this._nameToExportElement,name,exportedLibrary);
        }
    }
    _checkForExportInternalLibrary(directive : any,exportElement : any) : void {
        if (this._isInSystemLibrary) {
            return;
        }
        let sdk : any = this._currentLibrary.context.sourceFactory.dartSdk;
        let uri : string = exportElement.uri;
        let sdkLibrary : any = sdk.getSdkLibrary(uri);
        if (op(Op.EQUALS,sdkLibrary,null)) {
            return;
        }
        if (!sdkLibrary.isInternal) {
            return;
        }
        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.EXPORT_INTERNAL_LIBRARY,directive,new core.DartList.literal(directive.uri));
    }
    _checkForExtendsDeferredClass(superclass : any) : void {
        if (op(Op.EQUALS,superclass,null)) {
            return;
        }
        this._checkForExtendsOrImplementsDeferredClass(superclass,CompileTimeErrorCode.EXTENDS_DEFERRED_CLASS);
    }
    _checkForExtendsDisallowedClass(superclass : any) : boolean {
        if (op(Op.EQUALS,superclass,null)) {
            return false;
        }
        return this._checkForExtendsOrImplementsDisallowedClass(superclass,CompileTimeErrorCode.EXTENDS_DISALLOWED_CLASS);
    }
    _checkForExtendsOrImplementsDeferredClass(typeName : any,errorCode : any) : boolean {
        if (typeName.isSynthetic) {
            return false;
        }
        if (typeName.isDeferred) {
            this._errorReporter.reportErrorForNode(errorCode,typeName,new core.DartList.literal(typeName.name.name));
            return true;
        }
        return false;
    }
    _checkForExtendsOrImplementsDisallowedClass(typeName : any,errorCode : any) : boolean {
        if (typeName.isSynthetic) {
            return false;
        }
        if (this._currentLibrary.source.isInSystemLibrary) {
            return false;
        }
        let superType : any = typeName.type;
        for(let disallowedType of this._DISALLOWED_TYPES_TO_EXTEND_OR_IMPLEMENT) {
            if (superType != null && op(Op.EQUALS,superType,disallowedType)) {
                if (op(Op.EQUALS,superType,this._typeProvider.numType)) {
                    let grandParent : any = typeName.parent.parent;
                    if (is(grandParent, any)) {
                        let classElement : any = grandParent.element;
                        let classType : any = classElement.type;
                        if (classType != null && (op(Op.EQUALS,classType,this._intType) || op(Op.EQUALS,classType,this._typeProvider.doubleType))) {
                            return false;
                        }
                    }
                }
                this._errorReporter.reportErrorForNode(errorCode,typeName,new core.DartList.literal(disallowedType.displayName));
                return true;
            }
        }
        return false;
    }
    _checkForFieldInitializerNotAssignable(initializer : any,fieldElement : any) : void {
        let fieldType : any = fieldElement.type;
        let expression : any = initializer.expression;
        if (op(Op.EQUALS,expression,null)) {
            return;
        }
        let staticType : any = ErrorVerifier.getStaticType(expression);
        if (op(Op.EQUALS,staticType,null)) {
            return;
        }
        if (this._expressionIsAssignableAtType(expression,staticType,fieldType)) {
            return;
        }
        if (this._isEnclosingConstructorConst) {
            this._errorReporter.reportTypeErrorForNode(CheckedModeCompileTimeErrorCode.CONST_FIELD_INITIALIZER_NOT_ASSIGNABLE,expression,new core.DartList.literal(staticType,fieldType));
        }
        this._errorReporter.reportTypeErrorForNode(StaticWarningCode.FIELD_INITIALIZER_NOT_ASSIGNABLE,expression,new core.DartList.literal(staticType,fieldType));
    }
    _checkForFieldInitializingFormalRedirectingConstructor(parameter : any) : void {
        let formalParameterList : any = parameter.parent;
        if (isNot(formalParameterList, any)) {
            formalParameterList = ((t)=>(!!t)?t.parent:null)(formalParameterList);
        }
        let constructor : any = ((t)=>(!!t)?t.parent:null)(formalParameterList);
        if (is(constructor, any)) {
            if (constructor.factoryKeyword != null) {
                this._errorReporter.reportErrorForNode(CompileTimeErrorCode.FIELD_INITIALIZER_FACTORY_CONSTRUCTOR,parameter);
                return;
            }
            for(let initializer of constructor.initializers) {
                if (is(initializer, any)) {
                    this._errorReporter.reportErrorForNode(CompileTimeErrorCode.FIELD_INITIALIZER_REDIRECTING_CONSTRUCTOR,parameter);
                    return;
                }
            }
        }else {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR,parameter);
        }
    }
    _checkForFinalNotInitialized(list : any) : void {
        if (this._isInNativeClass || list.isSynthetic) {
            return;
        }
        let isConst : boolean = list.isConst;
        if (!(isConst || list.isFinal)) {
            return;
        }
        let variables : any = list.variables;
        for(let variable of variables) {
            if (op(Op.EQUALS,variable.initializer,null)) {
                if (isConst) {
                    this._errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_NOT_INITIALIZED,variable.name,new core.DartList.literal(variable.name.name));
                }else {
                    this._errorReporter.reportErrorForNode(StaticWarningCode.FINAL_NOT_INITIALIZED,variable.name,new core.DartList.literal(variable.name.name));
                }
            }
        }
    }
    _checkForFinalNotInitializedInClass(declaration : any) : void {
        let classMembers : any = declaration.members;
        for(let classMember of classMembers) {
            if (is(classMember, any)) {
                return;
            }
        }
        for(let classMember of classMembers) {
            if (is(classMember, any)) {
                this._checkForFinalNotInitialized(classMember.fields);
            }
        }
    }
    _checkForIllegalReturnType(returnType : any) : void {
        if (op(Op.EQUALS,returnType,null)) {
            return;
        }
        if (this._enclosingFunction.isAsynchronous) {
            if (this._enclosingFunction.isGenerator) {
                this._checkForIllegalReturnTypeCode(returnType,this._typeProvider.streamDynamicType,StaticTypeWarningCode.ILLEGAL_ASYNC_GENERATOR_RETURN_TYPE);
            }else {
                this._checkForIllegalReturnTypeCode(returnType,this._typeProvider.futureDynamicType,StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE);
            }
        }else if (this._enclosingFunction.isGenerator) {
            this._checkForIllegalReturnTypeCode(returnType,this._typeProvider.iterableDynamicType,StaticTypeWarningCode.ILLEGAL_SYNC_GENERATOR_RETURN_TYPE);
        }
    }
    _checkForIllegalReturnTypeCode(returnTypeName : any,expectedType : any,errorCode : any) : void {
        let returnType : any = this._enclosingFunction.returnType;
        if (this._options.strongMode) {
            let genericType : any = (expectedType.element as any).type;
            let lowerBound : any = genericType.instantiate(new core.DartList.literal(BottomTypeImpl.instance));
            if (!this._typeSystem.isSubtypeOf(lowerBound,returnType)) {
                this._errorReporter.reportErrorForNode(errorCode,returnTypeName);
            }
        }else if (!this._typeSystem.isAssignableTo(returnType,expectedType)) {
            this._errorReporter.reportErrorForNode(errorCode,returnTypeName);
        }
    }
    _checkForImplementsDeferredClass(clause : any) : void {
        if (op(Op.EQUALS,clause,null)) {
            return;
        }
        for(let type of clause.interfaces) {
            this._checkForExtendsOrImplementsDeferredClass(type,CompileTimeErrorCode.IMPLEMENTS_DEFERRED_CLASS);
        }
    }
    _checkForImplementsDisallowedClass(clause : any) : boolean {
        if (op(Op.EQUALS,clause,null)) {
            return false;
        }
        let foundError : boolean = false;
        for(let type of clause.interfaces) {
            if (this._checkForExtendsOrImplementsDisallowedClass(type,CompileTimeErrorCode.IMPLEMENTS_DISALLOWED_CLASS)) {
                foundError = true;
            }
        }
        return foundError;
    }
    _checkForImplicitDynamicIdentifier(node : any,id : any) : void {
        if (this._options.implicitDynamic) {
            return;
        }
        let variable : any = ErrorVerifier.getVariableElement(id);
        if (variable != null && variable.hasImplicitType && variable.type.isDynamic) {
            let errorCode : any;
            if (is(variable, any)) {
                errorCode = StrongModeCode.IMPLICIT_DYNAMIC_FIELD;
            }else if (is(variable, any)) {
                errorCode = StrongModeCode.IMPLICIT_DYNAMIC_PARAMETER;
            }else {
                errorCode = StrongModeCode.IMPLICIT_DYNAMIC_VARIABLE;
            }
            this._errorReporter.reportErrorForNode(errorCode,node,new core.DartList.literal(id));
        }
    }
    _checkForImplicitDynamicInvoke(node : any) : void {
        if (this._options.implicitDynamic || op(Op.EQUALS,node,null) || node.typeArguments != null) {
            return;
        }
        let invokeType : any = node.staticInvokeType;
        let declaredType : any = node.function.staticType;
        if (is(invokeType, any) && is(declaredType, any) && declaredType.typeFormals.isNotEmpty) {
            let typeArgs : core.DartIterable<any> = FunctionTypeImpl.recoverTypeArguments(declaredType,invokeType);
            if (typeArgs.any((t : any) =>  {
                return t.isDynamic;
            })) {
                let function : any = node.function;
                if (is(function, any)) {
                    let element : any = function.staticElement;
                    if (is(element, any)) {
                        this._errorReporter.reportErrorForNode(StrongModeCode.IMPLICIT_DYNAMIC_METHOD,node.function,new core.DartList.literal(element.displayName,element.typeParameters.join(', ')));
                        return;
                    }
                    if (is(element, any)) {
                        this._errorReporter.reportErrorForNode(StrongModeCode.IMPLICIT_DYNAMIC_FUNCTION,node.function,new core.DartList.literal(element.displayName,element.typeParameters.join(', ')));
                        return;
                    }
                }
                this._errorReporter.reportErrorForNode(StrongModeCode.IMPLICIT_DYNAMIC_INVOKE,node.function,new core.DartList.literal(declaredType));
            }
        }
    }
    _checkForImplicitDynamicReturn(functionName : any,element : any) : void {
        if (this._options.implicitDynamic) {
            return;
        }
        if (is(element, any) && element.isSetter) {
            return;
        }
        if (element != null && element.hasImplicitReturnType && element.returnType.isDynamic) {
            this._errorReporter.reportErrorForNode(StrongModeCode.IMPLICIT_DYNAMIC_RETURN,functionName,new core.DartList.literal(element.displayName));
        }
    }
    _checkForImplicitDynamicType(node : any) : void {
        if (this._options.implicitDynamic || op(Op.EQUALS,node,null) || (is(node, any) && node.typeArguments != null)) {
            return;
        }
        let type : any = node.type;
        if (is(type, any) && type.typeArguments.isNotEmpty && type.typeArguments.any((t : any) =>  {
            return t.isDynamic;
        })) {
            this._errorReporter.reportErrorForNode(StrongModeCode.IMPLICIT_DYNAMIC_TYPE,node,new core.DartList.literal(type));
        }
    }
    _checkForImplicitDynamicTypedLiteral(node : any) : void {
        if (this._options.implicitDynamic || node.typeArguments != null) {
            return;
        }
        let type : any = node.staticType;
        if (is(type, any) && type.typeArguments.any((t : any) =>  {
            return t.isDynamic;
        })) {
            let errorCode : any = is(node, any) ? StrongModeCode.IMPLICIT_DYNAMIC_LIST_LITERAL : StrongModeCode.IMPLICIT_DYNAMIC_MAP_LITERAL;
            this._errorReporter.reportErrorForNode(errorCode,node);
        }
    }
    _checkForImplicitThisReferenceInInitializer(identifier : any) : void {
        if (!this._isInConstructorInitializer && !this._isInStaticMethod && !this._isInFactory && !this._isInInstanceVariableInitializer && !this._isInStaticVariableDeclaration) {
            return;
        }
        let element : any = identifier.staticElement;
        if (!(is(element, any) || is(element, any))) {
            return;
        }
        let executableElement : any = element as any;
        if (executableElement.isStatic) {
            return;
        }
        let enclosingElement : any = element.enclosingElement;
        if (isNot(enclosingElement, any)) {
            return;
        }
        let parent : any = identifier.parent;
        if (is(parent, any)) {
            return;
        }
        if (is(parent, any)) {
            if (core.identical(parent.methodName,identifier) && parent.realTarget != null) {
                return;
            }
        }
        if (is(parent, any)) {
            if (core.identical(parent.propertyName,identifier) && parent.realTarget != null) {
                return;
            }
        }
        if (is(parent, any)) {
            if (core.identical(parent.identifier,identifier)) {
                return;
            }
        }
        if (this._isInStaticMethod) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.INSTANCE_MEMBER_ACCESS_FROM_STATIC,identifier);
        }else if (this._isInFactory) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.INSTANCE_MEMBER_ACCESS_FROM_FACTORY,identifier);
        }else {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.IMPLICIT_THIS_REFERENCE_IN_INITIALIZER,identifier);
        }
    }
    _checkForImportDuplicateLibraryName(directive : any,importElement : any) : void {
        let nodeLibrary : any = importElement.importedLibrary;
        if (op(Op.EQUALS,nodeLibrary,null)) {
            return;
        }
        let name : string = nodeLibrary.name;
        let prevLibrary : any = op(Op.INDEX,this._nameToImportElement,name);
        if (prevLibrary != null) {
            if (prevLibrary != nodeLibrary && !new core.DartString(name).isEmpty) {
                this._errorReporter.reportErrorForNode(StaticWarningCode.IMPORT_DUPLICATED_LIBRARY_NAMED,directive,new core.DartList.literal(prevLibrary.definingCompilationUnit.displayName,nodeLibrary.definingCompilationUnit.displayName,name));
            }
        }else {
            op(Op.INDEX_ASSIGN,this._nameToImportElement,name,nodeLibrary);
        }
    }
    _checkForImportInternalLibrary(directive : any,importElement : any) : void {
        if (this._isInSystemLibrary) {
            return;
        }
        let sdk : any = this._currentLibrary.context.sourceFactory.dartSdk;
        let uri : string = importElement.uri;
        let sdkLibrary : any = sdk.getSdkLibrary(uri);
        if (op(Op.EQUALS,sdkLibrary,null) || !sdkLibrary.isInternal) {
            return;
        }
        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.IMPORT_INTERNAL_LIBRARY,directive,new core.DartList.literal(directive.uri));
    }
    _checkForInconsistentMethodInheritance() : void {
        this._inheritanceManager.getMembersInheritedFromInterfaces(this._enclosingClass);
        let errors : core.DartSet<any> = this._inheritanceManager.getErrors(this._enclosingClass);
        if (op(Op.EQUALS,errors,null) || errors.isEmpty) {
            return;
        }
        for(let error of errors) {
            this._errorReporter.reportError(error);
        }
        return;
    }
    _checkForInIterable(node : any) : void {
        if (op(Op.EQUALS,node.identifier,null) && op(Op.EQUALS,node.loopVariable,null)) {
            return;
        }
        let iterableType : any = ErrorVerifier.getStaticType(node.iterable);
        if (iterableType.isDynamic) {
            return;
        }
        let variable : any = (node.identifier || node.loopVariable.identifier);
        let variableType : any = ErrorVerifier.getStaticType(variable);
        let loopType : any = node.awaitKeyword != null ? this._typeProvider.streamType : this._typeProvider.iterableType;
        let loopTypeName : string = node.awaitKeyword != null ? "Stream" : "Iterable";
        iterableType = iterableType.resolveToBound(this._typeProvider.objectType);
        let bestIterableType : any = this._typeSystem.mostSpecificTypeArgument(iterableType,loopType);
        if (op(Op.EQUALS,bestIterableType,null)) {
            if (this._typeSystem.isSubtypeOf(loopType,iterableType)) {
                bestIterableType = DynamicTypeImpl.instance;
            }
        }
        if (op(Op.EQUALS,bestIterableType,null)) {
            this._errorReporter.reportTypeErrorForNode(StaticTypeWarningCode.FOR_IN_OF_INVALID_TYPE,node.iterable,new core.DartList.literal(iterableType,loopTypeName));
        }else if (!this._typeSystem.isAssignableTo(bestIterableType,variableType)) {
            this._errorReporter.reportTypeErrorForNode(StaticTypeWarningCode.FOR_IN_OF_INVALID_ELEMENT_TYPE,node.iterable,new core.DartList.literal(iterableType,loopTypeName,variableType));
        }
    }
    _checkForInstanceAccessToStaticMember(typeReference : any,name : any) : void {
        if (this._isInComment) {
            return;
        }
        if (typeReference != null) {
            return;
        }
        let element : any = name.staticElement;
        if (is(element, any)) {
            if (isNot(element.enclosingElement, any)) {
                return;
            }
            if (!element.isStatic) {
                return;
            }
            this._errorReporter.reportErrorForNode(StaticTypeWarningCode.INSTANCE_ACCESS_TO_STATIC_MEMBER,name,new core.DartList.literal(name.name,this._getKind(element),element.enclosingElement.name));
        }
    }
    _checkForInstanceMethodNameCollidesWithSuperclassStatic(executableElement : any,errorNameTarget : any) : boolean {
        let executableElementName : string = executableElement.name;
        if (isNot(executableElement, any) && !executableElement.isOperator) {
            let visitedClasses : core.DartHashSet<any> = new core.DartHashSet<any>();
            let superclassType : any = this._enclosingClass.supertype;
            let superclassElement : any = ((t)=>(!!t)?t.element:null)(superclassType);
            let executableElementPrivate : boolean = Identifier.isPrivateName(executableElementName);
            while (superclassElement != null && !visitedClasses.contains(superclassElement)){
                visitedClasses.add(superclassElement);
                let superclassLibrary : any = superclassElement.library;
                let fieldElt : any = superclassElement.getField(executableElementName);
                if (fieldElt != null) {
                    if (executableElementPrivate && this._currentLibrary != superclassLibrary) {
                        continue;
                    }
                    if (fieldElt.isStatic) {
                        this._errorReporter.reportErrorForNode(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC,errorNameTarget,new core.DartList.literal(executableElementName,fieldElt.enclosingElement.displayName));
                        return true;
                    }
                }
                let methodElements : core.DartList<any> = superclassElement.methods;
                let length : number = methodElements.length;
                for(let i : number = 0; i < length; i++){
                    let methodElement : any = methodElements[i];
                    if (methodElement.name != executableElementName) {
                        continue;
                    }
                    if (executableElementPrivate && this._currentLibrary != superclassLibrary) {
                        continue;
                    }
                    if (methodElement.isStatic) {
                        this._errorReporter.reportErrorForNode(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC,errorNameTarget,new core.DartList.literal(executableElementName,methodElement.enclosingElement.displayName));
                        return true;
                    }
                }
                superclassType = superclassElement.supertype;
                superclassElement = ((t)=>(!!t)?t.element:null)(superclassType);
            }
        }
        return false;
    }
    _checkForIntNotAssignable(argument : any) : void {
        if (op(Op.EQUALS,argument,null)) {
            return;
        }
        let staticParameterElement : any = argument.staticParameterElement;
        let staticParameterType : any = ((t)=>(!!t)?t.type:null)(staticParameterElement);
        this._checkForArgumentTypeNotAssignable(argument,staticParameterType,this._intType,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE);
    }
    _checkForInvalidAnnotationFromDeferredLibrary(annotation : any) : void {
        let nameIdentifier : any = annotation.name;
        if (is(nameIdentifier, any) && nameIdentifier.isDeferred) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.INVALID_ANNOTATION_FROM_DEFERRED_LIBRARY,annotation.name);
        }
    }
    _checkForInvalidAssignment(lhs : any,rhs : any) : void {
        if (op(Op.EQUALS,lhs,null) || op(Op.EQUALS,rhs,null)) {
            return;
        }
        let leftVariableElement : any = ErrorVerifier.getVariableElement(lhs);
        let leftType : any = (op(Op.EQUALS,leftVariableElement,null)) ? ErrorVerifier.getStaticType(lhs) : leftVariableElement.type;
        this._checkForAssignableExpression(rhs,leftType,StaticTypeWarningCode.INVALID_ASSIGNMENT);
    }
    _checkForInvalidCompoundAssignment(assignment : any,lhs : any,rhs : any) : void {
        if (op(Op.EQUALS,lhs,null)) {
            return;
        }
        let leftType : any = ErrorVerifier.getStaticType(lhs);
        let rightType : any = ErrorVerifier.getStaticType(assignment);
        if (!this._typeSystem.isAssignableTo(rightType,leftType)) {
            this._errorReporter.reportTypeErrorForNode(StaticTypeWarningCode.INVALID_ASSIGNMENT,rhs,new core.DartList.literal(rightType,leftType));
        }
    }
    _checkForInvalidField(initializer : any,fieldName : any,staticElement : any) : void {
        if (is(staticElement, any)) {
            if (staticElement.isSynthetic) {
                this._errorReporter.reportErrorForNode(CompileTimeErrorCode.INITIALIZER_FOR_NON_EXISTENT_FIELD,initializer,new core.DartList.literal(fieldName));
            }else if (staticElement.isStatic) {
                this._errorReporter.reportErrorForNode(CompileTimeErrorCode.INITIALIZER_FOR_STATIC_FIELD,initializer,new core.DartList.literal(fieldName));
            }
        }else {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.INITIALIZER_FOR_NON_EXISTENT_FIELD,initializer,new core.DartList.literal(fieldName));
            return;
        }
    }
    _checkForInvalidModifierOnBody(body : any,errorCode : any) : void {
        let keyword : any = body.keyword;
        if (keyword != null) {
            this._errorReporter.reportErrorForToken(errorCode,keyword,new core.DartList.literal(keyword.lexeme));
        }
    }
    _checkForInvalidReferenceToThis(expression : any) : void {
        if (!this._isThisInValidContext(expression)) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.INVALID_REFERENCE_TO_THIS,expression);
        }
    }
    _checkForInvalidTypeArgumentInConstTypedLiteral(arguments : any,errorCode : any) : void {
        for(let type of arguments) {
            if (is(type, any) && is(type.type, any)) {
                this._errorReporter.reportErrorForNode(errorCode,type,new core.DartList.literal(type.name));
            }
        }
    }
    _checkForListElementTypeNotAssignable(literal : any) : void {
        let listType : any = literal.staticType;
        /* TODO (AssertStatementImpl) : assert (listType is InterfaceTypeImpl); */;
        let typeArguments : core.DartList<any> = (listType as any).typeArguments;
        /* TODO (AssertStatementImpl) : assert (typeArguments.length == 1); */;
        let listElementType : any = typeArguments[0];
        for(let element of literal.elements) {
            if (literal.constKeyword != null) {
                this._checkForArgumentTypeNotAssignableWithExpectedTypes(element,listElementType,CheckedModeCompileTimeErrorCode.LIST_ELEMENT_TYPE_NOT_ASSIGNABLE);
            }
            this._checkForArgumentTypeNotAssignableWithExpectedTypes(element,listElementType,StaticWarningCode.LIST_ELEMENT_TYPE_NOT_ASSIGNABLE);
        }
    }
    _checkForMapTypeNotAssignable(literal : any) : void {
        let mapType : any = literal.staticType;
        /* TODO (AssertStatementImpl) : assert (mapType is InterfaceTypeImpl); */;
        let typeArguments : core.DartList<any> = (mapType as any).typeArguments;
        /* TODO (AssertStatementImpl) : assert (typeArguments.length == 2); */;
        let keyType : any = typeArguments[0];
        let valueType : any = typeArguments[1];
        let entries : any = literal.entries;
        for(let entry of entries) {
            let key : any = entry.key;
            let value : any = entry.value;
            if (literal.constKeyword != null) {
                this._checkForArgumentTypeNotAssignableWithExpectedTypes(key,keyType,CheckedModeCompileTimeErrorCode.MAP_KEY_TYPE_NOT_ASSIGNABLE);
                this._checkForArgumentTypeNotAssignableWithExpectedTypes(value,valueType,CheckedModeCompileTimeErrorCode.MAP_VALUE_TYPE_NOT_ASSIGNABLE);
            }
            this._checkForArgumentTypeNotAssignableWithExpectedTypes(key,keyType,StaticWarningCode.MAP_KEY_TYPE_NOT_ASSIGNABLE);
            this._checkForArgumentTypeNotAssignableWithExpectedTypes(value,valueType,StaticWarningCode.MAP_VALUE_TYPE_NOT_ASSIGNABLE);
        }
    }
    _checkForMemberWithClassName() : void {
        if (op(Op.EQUALS,this._enclosingClass,null)) {
            return;
        }
        let className : string = this._enclosingClass.name;
        if (className == null) {
            return;
        }
        for(let accessor of this._enclosingClass.accessors) {
            if (className == accessor.name) {
                this._errorReporter.reportErrorForElement(CompileTimeErrorCode.MEMBER_WITH_CLASS_NAME,accessor);
            }
        }
    }
    _checkForMismatchedAccessorTypes(accessorDeclaration : any,accessorTextName : string) : void {
        let accessorElement : any = accessorDeclaration.element as any;
        if (is(accessorElement, any)) {
            let counterpartAccessor : any = null;
            let enclosingClassForCounterpart : any = null;
            if (accessorElement.isGetter) {
                counterpartAccessor = accessorElement.correspondingSetter;
            }else {
                counterpartAccessor = accessorElement.correspondingGetter;
                if (counterpartAccessor != null && core.identical(counterpartAccessor.enclosingElement,accessorElement.enclosingElement)) {
                    return;
                }
            }
            if (op(Op.EQUALS,counterpartAccessor,null)) {
                if (this._enclosingClass != null) {
                    let lookupIdentifier : string = accessorElement.name;
                    if (StringUtilities.endsWithChar(lookupIdentifier,61)) {
                        lookupIdentifier = new core.DartString(lookupIdentifier).substring(0,new core.DartString(lookupIdentifier).length - 1);
                    }else {
                        lookupIdentifier += "=";
                    }
                    let elementFromInheritance : any = this._inheritanceManager.lookupInheritance(this._enclosingClass,lookupIdentifier);
                    if (elementFromInheritance != null && is(elementFromInheritance, any)) {
                        enclosingClassForCounterpart = elementFromInheritance.enclosingElement as any;
                        counterpartAccessor = elementFromInheritance;
                    }
                }
                if (op(Op.EQUALS,counterpartAccessor,null)) {
                    return;
                }
            }
            let getterType : any = null;
            let setterType : any = null;
            if (accessorElement.isGetter) {
                getterType = this._getGetterType(accessorElement);
                setterType = this._getSetterType(counterpartAccessor);
            }else if (accessorElement.isSetter) {
                setterType = this._getSetterType(accessorElement);
                getterType = this._getGetterType(counterpartAccessor);
            }
            if (setterType != null && getterType != null && !this._typeSystem.isAssignableTo(getterType,setterType)) {
                if (op(Op.EQUALS,enclosingClassForCounterpart,null)) {
                    this._errorReporter.reportTypeErrorForNode(StaticWarningCode.MISMATCHED_GETTER_AND_SETTER_TYPES,accessorDeclaration,new core.DartList.literal(accessorTextName,setterType,getterType));
                }else {
                    this._errorReporter.reportTypeErrorForNode(StaticWarningCode.MISMATCHED_GETTER_AND_SETTER_TYPES_FROM_SUPERTYPE,accessorDeclaration,new core.DartList.literal(accessorTextName,setterType,getterType,enclosingClassForCounterpart.displayName));
                }
            }
        }
    }
    _checkForMissingEnumConstantInSwitch(statement : any) : void {
        let expression : any = statement.expression;
        let expressionType : any = ErrorVerifier.getStaticType(expression);
        if (op(Op.EQUALS,expressionType,null)) {
            return;
        }
        let expressionElement : any = expressionType.element;
        if (is(expressionElement, any)) {
            if (!expressionElement.isEnum) {
                return;
            }
            let constantNames : core.DartList<string> = new core.DartList.literal<string>();
            let fields : core.DartList<any> = expressionElement.fields;
            let fieldCount : number = fields.length;
            for(let i : number = 0; i < fieldCount; i++){
                let field : any = fields[i];
                if (field.isStatic && !field.isSynthetic) {
                    constantNames.add(field.name);
                }
            }
            let members : any = statement.members;
            let memberCount : number = members.length;
            for(let i : number = 0; i < memberCount; i++){
                let member : any = op(Op.INDEX,members,i);
                if (is(member, any)) {
                    return;
                }
                let constantName : string = this._getConstantName((member as any).expression);
                if (constantName != null) {
                    constantNames.remove(constantName);
                }
            }
            if (constantNames.isEmpty) {
                return;
            }
            for(let i : number = 0; i < constantNames.length; i++){
                let offset : number = statement.offset;
                let end : number = statement.rightParenthesis.end;
                this._errorReporter.reportErrorForOffset(StaticWarningCode.MISSING_ENUM_CONSTANT_IN_SWITCH,offset,end - offset,new core.DartList.literal(constantNames[i]));
            }
        }
    }
    _checkForMissingJSLibAnnotation(node : any) : void {
        if ((((t)=>(!!t)?t.isJS:null)(resolutionMap.elementAnnotationForAnnotation(node)) || false)) {
            if (this._currentLibrary.isJS != true) {
                this._errorReporter.reportErrorForNode(HintCode.MISSING_JS_LIB_ANNOTATION,node);
            }
        }
    }
    _checkForMixedReturns(body : any) : void {
        if (this._hasReturnWithoutValue) {
            return;
        }
        if (this._returnsWith.isNotEmpty && this._returnsWithout.isNotEmpty) {
            for(let returnWith of this._returnsWith) {
                this._errorReporter.reportErrorForToken(StaticWarningCode.MIXED_RETURN_TYPES,returnWith.returnKeyword);
            }
            for(let returnWithout of this._returnsWithout) {
                this._errorReporter.reportErrorForToken(StaticWarningCode.MIXED_RETURN_TYPES,returnWithout.returnKeyword);
            }
        }
    }
    _checkForMixinDeclaresConstructor(mixinName : any,mixinElement : any) : boolean {
        for(let constructor of mixinElement.constructors) {
            if (!constructor.isSynthetic && !constructor.isFactory) {
                this._errorReporter.reportErrorForNode(CompileTimeErrorCode.MIXIN_DECLARES_CONSTRUCTOR,mixinName,new core.DartList.literal(mixinElement.name));
                return true;
            }
        }
        return false;
    }
    _checkForMixinHasNoConstructors(node : any) : void {
        if (this._enclosingClass.doesMixinLackConstructors) {
            let errorCode : any = CompileTimeErrorCode.MIXIN_HAS_NO_CONSTRUCTORS;
            this._errorReporter.reportErrorForNode(errorCode,node,new core.DartList.literal(this._enclosingClass.supertype));
        }
    }
    _checkForMixinInheritsNotFromObject(mixinName : any,mixinElement : any) : boolean {
        let mixinSupertype : any = mixinElement.supertype;
        if (mixinSupertype != null) {
            if (!mixinSupertype.isObject || !mixinElement.isMixinApplication && mixinElement.mixins.length != 0) {
                this._errorReporter.reportErrorForNode(CompileTimeErrorCode.MIXIN_INHERITS_FROM_NOT_OBJECT,mixinName,new core.DartList.literal(mixinElement.name));
                return true;
            }
        }
        return false;
    }
    _checkForMixinReferencesSuper(mixinName : any,mixinElement : any) : boolean {
        if (!this.enableSuperMixins && mixinElement.hasReferenceToSuper) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.MIXIN_REFERENCES_SUPER,mixinName,new core.DartList.literal(mixinElement.name));
        }
        return false;
    }
    _checkForMixinWithConflictingPrivateMember(withClause : any,superclassName : any) : void {
        if (op(Op.EQUALS,withClause,null)) {
            return;
        }
        let declaredSupertype : any = ((t)=>(!!t)?t.type:null)(superclassName);
        if (isNot(declaredSupertype, any)) {
            return;
        }
        let superclass : any = declaredSupertype;
        let mixedInNames : core.DartMap<any,core.DartMap<string,string>> = new core.DartMap.literal([
        ]);
        var isConflictingName : (name : string,library : any,typeName : any) => boolean = (name : string,library : any,typeName : any) : boolean =>  {
            if (Identifier.isPrivateName(name)) {
                let names : core.DartMap<string,string> = mixedInNames.putIfAbsent(library,() =>  {
                    return new core.DartMap.literal([
                    ]);
                });
                if (names.containsKey(name)) {
                    this._errorReporter.reportErrorForNode(CompileTimeErrorCode.PRIVATE_COLLISION_IN_MIXIN_APPLICATION,typeName,new core.DartList.literal(name,typeName.name.name,names.get(name)));
                    return true;
                }
                names.set(name,typeName.name.name);
                let inheritedMember : any = ((superclass.lookUpMethod(name,library) || superclass.lookUpGetter(name,library)) || superclass.lookUpSetter(name,library));
                if (inheritedMember != null) {
                    this._errorReporter.reportErrorForNode(CompileTimeErrorCode.PRIVATE_COLLISION_IN_MIXIN_APPLICATION,typeName,new core.DartList.literal(name,typeName.name.name,inheritedMember.enclosingElement.name));
                    return true;
                }
            }
            return false;
        };
        for(let mixinType of withClause.mixinTypes) {
            let type : any = mixinType.type;
            if (is(type, any)) {
                let library : any = type.element.library;
                if (library != this._currentLibrary) {
                    for(let accessor of type.accessors) {
                        if (isConflictingName(accessor.name,library,mixinType)) {
                            return;
                        }
                    }
                    for(let method of type.methods) {
                        if (isConflictingName(method.name,library,mixinType)) {
                            return;
                        }
                    }
                }
            }
        }
    }
    _checkForMultipleSuperInitializers(constructor : any) : void {
        let hasSuperInitializer : boolean = false;
        for(let initializer of constructor.initializers) {
            if (is(initializer, any)) {
                if (hasSuperInitializer) {
                    this._errorReporter.reportErrorForNode(CompileTimeErrorCode.MULTIPLE_SUPER_INITIALIZERS,initializer);
                }
                hasSuperInitializer = true;
            }
        }
    }
    _checkForMustCallSuper(node : any) : void {
        if (node.isStatic) {
            return;
        }
        let element : any = this._findOverriddenMemberThatMustCallSuper(node);
        if (element != null) {
            let collector : _InvocationCollector = new _InvocationCollector();
            node.accept(collector);
            if (!collector.superCalls.contains(element.name)) {
                this._errorReporter.reportErrorForNode(HintCode.MUST_CALL_SUPER,node.name,new core.DartList.literal(element.enclosingElement.name));
            }
        }
    }
    _checkForNativeFunctionBodyInNonSdkCode(body : any) : void {
        if (!this._isInSystemLibrary && !this._hasExtUri) {
            this._errorReporter.reportErrorForNode(ParserErrorCode.NATIVE_FUNCTION_BODY_IN_NON_SDK_CODE,body);
        }
    }
    _checkForNewWithUndefinedConstructor(expression : any,constructorName : any,typeName : any) : void {
        if (expression.staticElement != null) {
            return;
        }
        let type : any = typeName.type;
        if (is(type, any)) {
            let element : any = type.element;
            if (element != null && element.isEnum) {
                return;
            }
        }
        let className : any = typeName.name;
        let name : any = constructorName.name;
        if (name != null) {
            this._errorReporter.reportErrorForNode(StaticWarningCode.NEW_WITH_UNDEFINED_CONSTRUCTOR,name,new core.DartList.literal(className,name));
        }else {
            this._errorReporter.reportErrorForNode(StaticWarningCode.NEW_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT,constructorName,new core.DartList.literal(className));
        }
    }
    _checkForNoDefaultSuperConstructorImplicit(declaration : any) : void {
        if (this._enclosingClass.doesMixinLackConstructors) {
            return;
        }
        let constructors : core.DartList<any> = this._enclosingClass.constructors;
        if (!constructors[0].isSynthetic) {
            return;
        }
        let superType : any = this._enclosingClass.supertype;
        if (op(Op.EQUALS,superType,null)) {
            return;
        }
        let superElement : any = superType.element;
        let superUnnamedConstructor : any = superElement.unnamedConstructor;
        if (superUnnamedConstructor != null) {
            if (superUnnamedConstructor.isFactory) {
                this._errorReporter.reportErrorForNode(CompileTimeErrorCode.NON_GENERATIVE_CONSTRUCTOR,declaration.name,new core.DartList.literal(superUnnamedConstructor));
                return;
            }
            if (superUnnamedConstructor.isDefaultConstructor && this._enclosingClass.isSuperConstructorAccessible(superUnnamedConstructor)) {
                return;
            }
        }
        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT,declaration.name,new core.DartList.literal(superType.displayName,this._enclosingClass.displayName));
    }
    _checkForNonAbstractClassInheritsAbstractMember(classNameNode : any) : void {
        if (this._enclosingClass.isAbstract) {
            return;
        }else if (this._enclosingClass.hasNoSuchMethod) {
            return;
        }
        let missingOverrides : core.DartSet<any> = ErrorVerifier.computeMissingOverrides(this._options.strongMode,this._typeProvider,this._typeSystem,this._inheritanceManager,this._enclosingClass);
        if (missingOverrides.isEmpty) {
            return;
        }
        let missingOverrideNames : core.DartList<string> = new core.DartList.literal<string>();
        for(let element of missingOverrides) {
            let enclosingElement : any = element.enclosingElement;
            let prefix : string = StringUtilities.EMPTY;
            if (is(element, any)) {
                if (element.isGetter) {
                    prefix = ErrorVerifier._GETTER_SPACE;
                }else {
                    prefix = ErrorVerifier._SETTER_SPACE;
                }
            }
            let newStrMember : string;
            if (enclosingElement != null) {
                newStrMember = `${prefix}'${enclosingElement.displayName}.${element.displayName}'`;
            }else {
                newStrMember = `${prefix}'${element.displayName}'`;
            }
            missingOverrideNames.add(newStrMember);
        }
        missingOverrideNames.sort();
        if (missingOverrideNames.length == 1) {
            this._errorReporter.reportErrorForNode(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE,classNameNode,new core.DartList.literal(missingOverrideNames[0]));
        }else if (missingOverrideNames.length == 2) {
            this._errorReporter.reportErrorForNode(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_TWO,classNameNode,new core.DartList.literal(missingOverrideNames[0],missingOverrideNames[1]));
        }else if (missingOverrideNames.length == 3) {
            this._errorReporter.reportErrorForNode(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_THREE,classNameNode,new core.DartList.literal(missingOverrideNames[0],missingOverrideNames[1],missingOverrideNames[2]));
        }else if (missingOverrideNames.length == 4) {
            this._errorReporter.reportErrorForNode(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FOUR,classNameNode,new core.DartList.literal(missingOverrideNames[0],missingOverrideNames[1],missingOverrideNames[2],missingOverrideNames[3]));
        }else {
            this._errorReporter.reportErrorForNode(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FIVE_PLUS,classNameNode,new core.DartList.literal(missingOverrideNames[0],missingOverrideNames[1],missingOverrideNames[2],missingOverrideNames[3],missingOverrideNames.length - 4));
        }
    }
    _checkForNonBoolCondition(condition : any) : void {
        let conditionType : any = ErrorVerifier.getStaticType(condition);
        if (conditionType != null && !this._typeSystem.isAssignableTo(conditionType,this._boolType)) {
            this._errorReporter.reportErrorForNode(StaticTypeWarningCode.NON_BOOL_CONDITION,condition);
        }
    }
    _checkForNonBoolExpression(assertion : any) : void {
        let expression : any = assertion.condition;
        let type : any = ErrorVerifier.getStaticType(expression);
        if (is(type, any)) {
            if (!this._typeSystem.isAssignableTo(type,this._boolType)) {
                this._errorReporter.reportErrorForNode(StaticTypeWarningCode.NON_BOOL_EXPRESSION,expression);
            }
        }else if (is(type, any)) {
            if (op(Op.EQUALS,type.typeArguments.length,0) && !this._typeSystem.isAssignableTo(type.returnType,this._boolType)) {
                this._errorReporter.reportErrorForNode(StaticTypeWarningCode.NON_BOOL_EXPRESSION,expression);
            }
        }
    }
    _checkForNonBoolNegationExpression(expression : any) : void {
        let conditionType : any = ErrorVerifier.getStaticType(expression);
        if (conditionType != null && !this._typeSystem.isAssignableTo(conditionType,this._boolType)) {
            this._errorReporter.reportErrorForNode(StaticTypeWarningCode.NON_BOOL_NEGATION_EXPRESSION,expression);
        }
    }
    _checkForNonConstMapAsExpressionStatement(literal : any) : void {
        if (literal.constKeyword != null) {
            return;
        }
        if (literal.typeArguments != null) {
            return;
        }
        let statement : any = literal.getAncestor((node : any) =>  {
            return is(node, any);
        });
        if (op(Op.EQUALS,statement,null)) {
            return;
        }
        if (!core.identical(statement.beginToken,literal.beginToken)) {
            return;
        }
        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.NON_CONST_MAP_AS_EXPRESSION_STATEMENT,literal);
    }
    _checkForNonVoidReturnTypeForOperator(declaration : any) : void {
        let name : any = declaration.name;
        if (name.name != "[]=") {
            return;
        }
        let annotation : any = declaration.returnType;
        if (annotation != null) {
            let type : any = annotation.type;
            if (type != null && !type.isVoid) {
                this._errorReporter.reportErrorForNode(StaticWarningCode.NON_VOID_RETURN_FOR_OPERATOR,annotation);
            }
        }
    }
    _checkForNonVoidReturnTypeForSetter(typeName : any) : void {
        if (typeName != null) {
            let type : any = typeName.type;
            if (type != null && !type.isVoid) {
                this._errorReporter.reportErrorForNode(StaticWarningCode.NON_VOID_RETURN_FOR_SETTER,typeName);
            }
        }
    }
    _checkForNotInstantiatedBound(node : any) : void {
        if (!this._options.strongMode || op(Op.EQUALS,node,null)) {
            return;
        }
        if (is(node, any)) {
            if (op(Op.EQUALS,node.typeArguments,null)) {
                let type : any = node.type;
                if (is(type, any)) {
                    let element : any = type.element;
                    if (is(element, any) && element.typeParameters.any((p : any) =>  {
                        return p.bound != null;
                    })) {
                        this._errorReporter.reportErrorForNode(StrongModeCode.NOT_INSTANTIATED_BOUND,node,new core.DartList.literal(type));
                    }
                }
            }else {
                node.typeArguments.arguments.forEach(this._checkForNotInstantiatedBound.bind(this));
            }
        }else {
            throw new core.UnimplementedError(`${node.runtimeType}`);
        }
    }
    _checkForOptionalParameterInOperator(declaration : any) : void {
        let parameterList : any = declaration.parameters;
        if (op(Op.EQUALS,parameterList,null)) {
            return;
        }
        let formalParameters : any = parameterList.parameters;
        for(let formalParameter of formalParameters) {
            if (formalParameter.kind.isOptional) {
                this._errorReporter.reportErrorForNode(CompileTimeErrorCode.OPTIONAL_PARAMETER_IN_OPERATOR,formalParameter);
            }
        }
    }
    _checkForPrivateOptionalParameter(parameter : any) : void {
        if (parameter.kind != ParameterKind.NAMED) {
            return;
        }
        let name : any = parameter.identifier;
        if (op(Op.EQUALS,name,null) || name.isSynthetic || !StringUtilities.startsWithChar(name.name,95)) {
            return;
        }
        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.PRIVATE_OPTIONAL_PARAMETER,parameter);
    }
    _checkForRecursiveConstructorRedirect(declaration : any,constructorElement : any) : void {
        if (declaration.factoryKeyword != null) {
            return;
        }
        for(let initializer of declaration.initializers) {
            if (is(initializer, any)) {
                if (this._hasRedirectingFactoryConstructorCycle(constructorElement)) {
                    this._errorReporter.reportErrorForNode(CompileTimeErrorCode.RECURSIVE_CONSTRUCTOR_REDIRECT,initializer);
                }
                return;
            }
        }
    }
    _checkForRecursiveFactoryRedirect(declaration : any,element : any) : boolean {
        let redirectedConstructorNode : any = declaration.redirectedConstructor;
        if (op(Op.EQUALS,redirectedConstructorNode,null)) {
            return false;
        }
        if (!this._hasRedirectingFactoryConstructorCycle(element)) {
            return false;
        }
        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.RECURSIVE_FACTORY_REDIRECT,redirectedConstructorNode);
        return true;
    }
    _checkForRecursiveInterfaceInheritance(element : any) : void {
        if (op(Op.EQUALS,element,null)) {
            return;
        }
        this._safeCheckForRecursiveInterfaceInheritance(element,new core.DartList.literal<any>());
    }
    _checkForRedirectingConstructorErrorCodes(declaration : any) : void {
        let redirectedConstructor : any = declaration.redirectedConstructor;
        if (redirectedConstructor != null) {
            for(let parameter of declaration.parameters.parameters) {
                if (is(parameter, any) && parameter.defaultValue != null) {
                    this._errorReporter.reportErrorForNode(CompileTimeErrorCode.DEFAULT_VALUE_IN_REDIRECTING_FACTORY_CONSTRUCTOR,parameter.identifier);
                }
            }
        }
        let numRedirections : number = 0;
        for(let initializer of declaration.initializers) {
            if (is(initializer, any)) {
                if (numRedirections > 0) {
                    this._errorReporter.reportErrorForNode(CompileTimeErrorCode.MULTIPLE_REDIRECTING_CONSTRUCTOR_INVOCATIONS,initializer);
                }
                if (op(Op.EQUALS,declaration.factoryKeyword,null)) {
                    let invocation : any = initializer;
                    let redirectingElement : any = invocation.staticElement;
                    if (op(Op.EQUALS,redirectingElement,null)) {
                        let enclosingTypeName : string = this._enclosingClass.displayName;
                        let constructorStrName : string = enclosingTypeName;
                        if (invocation.constructorName != null) {
                            constructorStrName += `.${invocation.constructorName.name}`;
                        }
                        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.REDIRECT_GENERATIVE_TO_MISSING_CONSTRUCTOR,invocation,new core.DartList.literal(constructorStrName,enclosingTypeName));
                    }else {
                        if (redirectingElement.isFactory) {
                            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.REDIRECT_GENERATIVE_TO_NON_GENERATIVE_CONSTRUCTOR,initializer);
                        }
                    }
                }
                numRedirections++;
            }
        }
        if (numRedirections > 0) {
            for(let initializer of declaration.initializers) {
                if (is(initializer, any)) {
                    this._errorReporter.reportErrorForNode(CompileTimeErrorCode.SUPER_IN_REDIRECTING_CONSTRUCTOR,initializer);
                }
                if (is(initializer, any)) {
                    this._errorReporter.reportErrorForNode(CompileTimeErrorCode.FIELD_INITIALIZER_REDIRECTING_CONSTRUCTOR,initializer);
                }
            }
        }
    }
    _checkForRedirectToNonConstConstructor(declaration : any,element : any) : void {
        let redirectedConstructorNode : any = declaration.redirectedConstructor;
        if (op(Op.EQUALS,redirectedConstructorNode,null)) {
            return;
        }
        if (op(Op.EQUALS,element,null)) {
            return;
        }
        if (!element.isConst) {
            return;
        }
        let redirectedConstructor : any = element.redirectedConstructor;
        if (op(Op.EQUALS,redirectedConstructor,null)) {
            return;
        }
        if (redirectedConstructor.isConst) {
            return;
        }
        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.REDIRECT_TO_NON_CONST_CONSTRUCTOR,redirectedConstructorNode);
    }
    _checkForReferenceBeforeDeclaration(node : any) : void {
        if (!node.inDeclarationContext() && this._hiddenElements != null && this._hiddenElements.contains(node.staticElement)) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.REFERENCED_BEFORE_DECLARATION,node,new core.DartList.literal(node.name));
        }
    }
    _checkForRethrowOutsideCatch(expression : any) : void {
        if (!this._isInCatchClause) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.RETHROW_OUTSIDE_CATCH,expression);
        }
    }
    _checkForReturnInGenerativeConstructor(declaration : any) : void {
        if (declaration.factoryKeyword != null) {
            return;
        }
        let body : any = declaration.body;
        if (isNot(body, any)) {
            return;
        }
        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.RETURN_IN_GENERATIVE_CONSTRUCTOR,body);
    }
    _checkForReturnOfInvalidType(returnExpression : any,expectedReturnType : any,_namedArguments? : {isArrowFunction? : boolean}) : void {
        let {isArrowFunction} = Object.assign({
            "isArrowFunction" : false}, _namedArguments );
        if (op(Op.EQUALS,this._enclosingFunction,null)) {
            return;
        }
        if (this._inGenerator) {
            return;
        }
        let staticReturnType : any = this._computeReturnTypeForMethod(returnExpression);
        if (expectedReturnType.isVoid) {
            if (isArrowFunction) {
                return;
            }
            if (staticReturnType.isVoid || staticReturnType.isDynamic || staticReturnType.isBottom || staticReturnType.isDartCoreNull) {
                return;
            }
            this._errorReporter.reportTypeErrorForNode(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE,returnExpression,new core.DartList.literal(staticReturnType,expectedReturnType,this._enclosingFunction.displayName));
            return;
        }
        if (this._expressionIsAssignableAtType(returnExpression,staticReturnType,expectedReturnType)) {
            return;
        }
        this._errorReporter.reportTypeErrorForNode(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE,returnExpression,new core.DartList.literal(staticReturnType,expectedReturnType,this._enclosingFunction.displayName));
    }
    _checkForStaticAccessToInstanceMember(typeReference : any,name : any) : void {
        if (this._isInComment) {
            return;
        }
        if (op(Op.EQUALS,typeReference,null)) {
            return;
        }
        let element : any = name.staticElement;
        if (is(element, any)) {
            if (element.isStatic) {
                return;
            }
            this._errorReporter.reportErrorForNode(StaticWarningCode.STATIC_ACCESS_TO_INSTANCE_MEMBER,name,new core.DartList.literal(name.name));
        }
    }
    _checkForSwitchExpressionNotAssignable(statement : any) : void {
        let expression : any = statement.expression;
        let expressionType : any = ErrorVerifier.getStaticType(expression);
        if (op(Op.EQUALS,expressionType,null)) {
            return;
        }
        let switchCase : any = statement.members.firstWhere((member : any) =>  {
            return is(member, any);
        },{
            orElse : () =>  {
                return null;
            }});
        if (op(Op.EQUALS,switchCase,null)) {
            return;
        }
        let caseExpression : any = switchCase.expression;
        let caseType : any = ErrorVerifier.getStaticType(caseExpression);
        if (!this._expressionIsAssignableAtType(expression,expressionType,caseType)) {
            this._errorReporter.reportErrorForNode(StaticWarningCode.SWITCH_EXPRESSION_NOT_ASSIGNABLE,expression,new core.DartList.literal(expressionType,caseType));
        }
    }
    _checkForTypeAliasCannotReferenceItself_function(alias : any) : void {
        if (this._hasTypedefSelfReference(alias.element)) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.TYPE_ALIAS_CANNOT_REFERENCE_ITSELF,alias);
        }
    }
    _checkForTypeAnnotationDeferredClass(type : any) : void {
        if (is(type, any) && type.isDeferred) {
            this._errorReporter.reportErrorForNode(StaticWarningCode.TYPE_ANNOTATION_DEFERRED_CLASS,type,new core.DartList.literal(type.name));
        }
    }
    _checkForTypeAnnotationGenericFunctionParameter(type : any) : void {
        if (is(type, any)) {
            let name : any = type.name;
            if (is(name, any)) {
                let element : any = name.staticElement;
                if (is(element, any) && is(element.enclosingElement, any)) {
                    this._errorReporter.reportErrorForNode(StaticWarningCode.TYPE_ANNOTATION_GENERIC_FUNCTION_PARAMETER,name,new core.DartList.literal(name.name));
                }
            }
        }
    }
    _checkForTypeArgumentNotMatchingBounds(typeName : any) : void {
        if (op(Op.EQUALS,typeName.typeArguments,null)) {
            return;
        }
        let type : any = typeName.type;
        if (op(Op.EQUALS,type,null)) {
            return;
        }
        let element : any = type.element;
        if (is(element, any)) {
            let parameterElements : core.DartList<any> = element.typeParameters;
            let parameterTypes : core.DartList<any> = element.type.typeArguments;
            let arguments : core.DartList<any> = (type as any).typeArguments;
            let argumentNodes : any = typeName.typeArguments.arguments;
            let loopThroughIndex : number = math.min(argumentNodes.length,parameterElements.length);
            let shouldSubstitute : boolean = arguments.length != 0 && arguments.length == parameterTypes.length;
            for(let i : number = 0; i < loopThroughIndex; i++){
                let argumentNode : any = op(Op.INDEX,argumentNodes,i);
                let argType : any = argumentNode.type;
                let boundType : any = parameterElements[i].bound;
                if (argType != null && boundType != null) {
                    if (shouldSubstitute) {
                        boundType = boundType.substitute2(arguments,parameterTypes);
                    }
                    if (!this._typeSystem.isSubtypeOf(argType,boundType)) {
                        let errorCode : any;
                        if (this._isInConstInstanceCreation) {
                            errorCode = CompileTimeErrorCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS;
                        }else {
                            errorCode = StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS;
                        }
                        this._errorReporter.reportTypeErrorForNode(errorCode,argumentNode,new core.DartList.literal(argType,boundType));
                    }
                }
            }
        }
    }
    _checkForTypeParameterReferencedByStatic(name : any) : void {
        if (this._isInStaticMethod || this._isInStaticVariableDeclaration) {
            let type : any = name.type;
            if (is(type, any) && is(type.element.enclosingElement, any)) {
                this._errorReporter.reportErrorForNode(StaticWarningCode.TYPE_PARAMETER_REFERENCED_BY_STATIC,name);
            }
        }
    }
    _checkForTypeParameterSupertypeOfItsBound(parameter : any) : void {
        let element : any = parameter.element;
        let bound : any = element.bound;
        if (op(Op.EQUALS,bound,null)) {
            return;
        }
        if (!bound.isMoreSpecificThan(element.type)) {
            return;
        }
        this._errorReporter.reportErrorForNode(StaticTypeWarningCode.TYPE_PARAMETER_SUPERTYPE_OF_ITS_BOUND,parameter,new core.DartList.literal(element.displayName,bound.displayName));
    }
    _checkForUndefinedConstructorInInitializerImplicit(constructor : any) : void {
        if (op(Op.EQUALS,this._enclosingClass,null)) {
            return;
        }
        if (this._enclosingClass.doesMixinLackConstructors) {
            return;
        }
        if (constructor.factoryKeyword != null) {
            return;
        }
        for(let constructorInitializer of constructor.initializers) {
            if (is(constructorInitializer, any) || is(constructorInitializer, any)) {
                return;
            }
        }
        let superType : any = this._enclosingClass.supertype;
        if (op(Op.EQUALS,superType,null)) {
            return;
        }
        let superElement : any = superType.element;
        let superUnnamedConstructor : any = superElement.unnamedConstructor;
        if (superUnnamedConstructor != null) {
            if (superUnnamedConstructor.isFactory) {
                this._errorReporter.reportErrorForNode(CompileTimeErrorCode.NON_GENERATIVE_CONSTRUCTOR,constructor.returnType,new core.DartList.literal(superUnnamedConstructor));
            }else if (!superUnnamedConstructor.isDefaultConstructor || !this._enclosingClass.isSuperConstructorAccessible(superUnnamedConstructor)) {
                let returnType : any = constructor.returnType;
                let name : any = constructor.name;
                let offset : number = returnType.offset;
                let length : number = op(Op.MINUS,(name != null ? name.end : returnType.end),offset);
                this._errorReporter.reportErrorForOffset(CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_EXPLICIT,offset,length,new core.DartList.literal(superType.displayName));
            }
        }else {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT,constructor.returnType,new core.DartList.literal(superElement.name));
        }
    }
    _checkForUnqualifiedReferenceToNonLocalStaticMember(name : any) : void {
        let element : any = name.staticElement;
        if (op(Op.EQUALS,element,null) || is(element, any)) {
            return;
        }
        let enclosingElement : any = element.enclosingElement;
        if (core.identical(enclosingElement,this._enclosingClass)) {
            return;
        }
        if (core.identical(enclosingElement,this._enclosingEnum)) {
            return;
        }
        if (isNot(enclosingElement, any)) {
            return;
        }
        if (is(element, any) && !element.isStatic) {
            return;
        }
        this._errorReporter.reportErrorForNode(StaticTypeWarningCode.UNQUALIFIED_REFERENCE_TO_NON_LOCAL_STATIC_MEMBER,name,new core.DartList.literal(enclosingElement.name));
    }
    _checkForValidField(parameter : any) : void {
        let parent2 : any = ((t)=>(!!t)?t.parent:null)(parameter.parent);
        if (isNot(parent2, any) && isNot(((t)=>(!!t)?t.parent:null)(parent2), any)) {
            return;
        }
        let element : any = parameter.element;
        if (is(element, any)) {
            let fieldElement : any = element.field;
            if (op(Op.EQUALS,fieldElement,null) || fieldElement.isSynthetic) {
                this._errorReporter.reportErrorForNode(CompileTimeErrorCode.INITIALIZING_FORMAL_FOR_NON_EXISTENT_FIELD,parameter,new core.DartList.literal(parameter.identifier.name));
            }else {
                let parameterElement : any = parameter.element;
                if (is(parameterElement, any)) {
                    let declaredType : any = parameterElement.type;
                    let fieldType : any = fieldElement.type;
                    if (fieldElement.isSynthetic) {
                        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.INITIALIZING_FORMAL_FOR_NON_EXISTENT_FIELD,parameter,new core.DartList.literal(parameter.identifier.name));
                    }else if (fieldElement.isStatic) {
                        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.INITIALIZING_FORMAL_FOR_STATIC_FIELD,parameter,new core.DartList.literal(parameter.identifier.name));
                    }else if (declaredType != null && fieldType != null && !this._typeSystem.isAssignableTo(declaredType,fieldType)) {
                        this._errorReporter.reportTypeErrorForNode(StaticWarningCode.FIELD_INITIALIZING_FORMAL_NOT_ASSIGNABLE,parameter,new core.DartList.literal(declaredType,fieldType));
                    }
                }else {
                    if (fieldElement.isSynthetic) {
                        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.INITIALIZING_FORMAL_FOR_NON_EXISTENT_FIELD,parameter,new core.DartList.literal(parameter.identifier.name));
                    }else if (fieldElement.isStatic) {
                        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.INITIALIZING_FORMAL_FOR_STATIC_FIELD,parameter,new core.DartList.literal(parameter.identifier.name));
                    }
                }
            }
        }
    }
    _checkForVoidReturnType(getter : any) : void {
        let returnType : any = getter.returnType;
        if (is(returnType, any) && op(Op.EQUALS,returnType.name.name,"void")) {
            this._errorReporter.reportErrorForNode(StaticWarningCode.VOID_RETURN_FOR_GETTER,returnType);
        }
    }
    _checkForWrongNumberOfParametersForOperator(declaration : any) : void {
        let parameterList : any = declaration.parameters;
        if (op(Op.EQUALS,parameterList,null)) {
            return;
        }
        let numParameters : number = parameterList.parameters.length;
        let nameNode : any = declaration.name;
        if (op(Op.EQUALS,nameNode,null)) {
            return;
        }
        let name : string = nameNode.name;
        let expected : number = -1;
        if ("[]=" == name) {
            expected = 2;
        }else if ("<" == name || ">" == name || "<=" == name || ">=" == name || "==" == name || "+" == name || "/" == name || "~/" == name || "*" == name || "%" == name || "|" == name || "^" == name || "&" == name || "<<" == name || ">>" == name || "[]" == name) {
            expected = 1;
        }else if ("~" == name) {
            expected = 0;
        }
        if (expected != -1 && numParameters != expected) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.WRONG_NUMBER_OF_PARAMETERS_FOR_OPERATOR,nameNode,new core.DartList.literal(name,expected,numParameters));
        }else if ("-" == name && numParameters > 1) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.WRONG_NUMBER_OF_PARAMETERS_FOR_OPERATOR_MINUS,nameNode,new core.DartList.literal(numParameters));
        }
    }
    _checkForWrongNumberOfParametersForSetter(setterName : any,parameterList : any) : void {
        if (op(Op.EQUALS,setterName,null) || op(Op.EQUALS,parameterList,null)) {
            return;
        }
        let parameters : any = parameterList.parameters;
        if (parameters.length != 1 || op(Op.INDEX,parameters,0).kind != ParameterKind.REQUIRED) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.WRONG_NUMBER_OF_PARAMETERS_FOR_SETTER,setterName);
        }
    }
    _checkForYieldOfInvalidType(yieldExpression : any,isYieldEach : boolean) : void {
        /* TODO (AssertStatementImpl) : assert (_inGenerator); */;
        if (op(Op.EQUALS,this._enclosingFunction,null)) {
            return;
        }
        let declaredReturnType : any = this._enclosingFunction.returnType;
        let staticYieldedType : any = ErrorVerifier.getStaticType(yieldExpression);
        let impliedReturnType : any;
        if (isYieldEach) {
            impliedReturnType = staticYieldedType;
        }else if (this._enclosingFunction.isAsynchronous) {
            impliedReturnType = this._typeProvider.streamType.instantiate(new core.DartList.literal<any>(staticYieldedType));
        }else {
            impliedReturnType = this._typeProvider.iterableType.instantiate(new core.DartList.literal<any>(staticYieldedType));
        }
        if (!this._checkForAssignableExpressionAtType(yieldExpression,impliedReturnType,declaredReturnType,StaticTypeWarningCode.YIELD_OF_INVALID_TYPE)) {
            return;
        }
        if (isYieldEach) {
            let requiredReturnType : any;
            if (this._enclosingFunction.isAsynchronous) {
                requiredReturnType = this._typeProvider.streamDynamicType;
            }else {
                requiredReturnType = this._typeProvider.iterableDynamicType;
            }
            if (!this._typeSystem.isAssignableTo(impliedReturnType,requiredReturnType)) {
                this._errorReporter.reportTypeErrorForNode(StaticTypeWarningCode.YIELD_OF_INVALID_TYPE,yieldExpression,new core.DartList.literal(impliedReturnType,requiredReturnType));
                return;
            }
        }
    }
    _checkImplementsFunctionWithoutCall(className : any) : void {
        let classElement : any = this._enclosingClass;
        if (op(Op.EQUALS,classElement,null)) {
            return;
        }
        if (classElement.isAbstract) {
            return;
        }
        if (!this._typeSystem.isSubtypeOf(classElement.type,this._typeProvider.functionType)) {
            return;
        }
        if (this._enclosingClass.hasNoSuchMethod) {
            return;
        }
        let callMethod : any = this._inheritanceManager.lookupMember(classElement,FunctionElement.CALL_METHOD_NAME);
        if (op(Op.EQUALS,callMethod,null) || isNot(callMethod, any) || (callMethod as any).isAbstract) {
            this._errorReporter.reportErrorForNode(StaticWarningCode.FUNCTION_WITHOUT_CALL,className);
        }
    }
    _checkImplementsSuperClass(implementsClause : any) : void {
        let superType : any = this._enclosingClass.supertype;
        if (op(Op.EQUALS,superType,null)) {
            return;
        }
        if (op(Op.EQUALS,implementsClause,null)) {
            return;
        }
        for(let interfaceNode of implementsClause.interfaces) {
            if (op(Op.EQUALS,interfaceNode.type,superType)) {
                this._errorReporter.reportErrorForNode(CompileTimeErrorCode.IMPLEMENTS_SUPER_CLASS,interfaceNode,new core.DartList.literal(superType.displayName));
            }
        }
    }
    _checkTypeArguments(node : any) : void {
        let typeArgumentList : any = ((t)=>(!!t)?t.arguments:null)(node.typeArguments);
        if (op(Op.EQUALS,typeArgumentList,null)) {
            return;
        }
        let genericType = node.function.staticType;
        let instantiatedType = node.staticInvokeType;
        if (is(genericType, any) && is(instantiatedType, any)) {
            let fnTypeParams = TypeParameterTypeImpl.getTypes(genericType.typeFormals);
            let typeArgs = typeArgumentList.map((t : any) =>  {
                return t.type;
            }).toList();
            for(let i : number = 0, len : number = math.min(typeArgs.length,fnTypeParams.length); i < len; i++){
                let argType : any = op(Op.INDEX,typeArgs,i);
                let bound : any = op(Op.INDEX,fnTypeParams,i).bound.substitute2(typeArgs,fnTypeParams);
                if (!this._typeSystem.isSubtypeOf(argType,bound)) {
                    this._errorReporter.reportTypeErrorForNode(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS,op(Op.INDEX,typeArgumentList,i),new core.DartList.literal(argType,bound));
                }
            }
        }
    }
    _checkUseOfCovariantInParameters(node : any) : void {
        let parent : any = node.parent;
        if (is(parent, any) && !parent.isStatic) {
            return;
        }
        let parameters : any = node.parameters;
        let length : number = parameters.length;
        for(let i : number = 0; i < length; i++){
            let parameter : any = op(Op.INDEX,parameters,i);
            let keyword : any = parameter.covariantKeyword;
            if (keyword != null) {
                this._errorReporter.reportErrorForToken(CompileTimeErrorCode.INVALID_USE_OF_COVARIANT,keyword);
            }
        }
    }
    _computeReturnTypeForMethod(returnExpression : any) : any {
        /* TODO (AssertStatementImpl) : assert (!_inGenerator); */;
        if (op(Op.EQUALS,returnExpression,null)) {
            if (this._enclosingFunction.isAsynchronous) {
                return this._typeProvider.futureNullType;
            }else {
                return VoidTypeImpl.instance;
            }
        }
        let staticReturnType : any = ErrorVerifier.getStaticType(returnExpression);
        if (staticReturnType != null && this._enclosingFunction.isAsynchronous) {
            return this._typeProvider.futureType.instantiate(new core.DartList.literal<any>(staticReturnType.flattenFutures(this._typeSystem)));
        }
        return staticReturnType;
    }
    _expressionIsAssignableAtType(expression : any,actualStaticType : any,expectedStaticType : any) : boolean {
        let concrete : boolean = this._options.strongMode && null /*topLevl*/.hasStrictArrow(expression);
        if (concrete && is(actualStaticType, any)) {
            actualStaticType = this._typeSystem.functionTypeToConcreteType(actualStaticType);
        }
        return this._typeSystem.isAssignableTo(actualStaticType,expectedStaticType);
    }
    _findOverriddenMemberThatMustCallSuper(node : any) : any {
        let overriddenMember : any = this._getOverriddenMember(node.element);
        let seen : core.DartList<any> = new core.DartList.literal<any>();
        while (is(overriddenMember, any) && !seen.contains(overriddenMember)){
            for(let annotation of overriddenMember.metadata) {
                if (annotation.isMustCallSuper) {
                    return overriddenMember;
                }
            }
            seen.add(overriddenMember);
            overriddenMember = this._getOverriddenMember(overriddenMember);
        }
        return null;
    }
    _getBaseCaseErrorCode(element : any) : any {
        let supertype : any = element.supertype;
        if (supertype != null && op(Op.EQUALS,this._enclosingClass,supertype.element)) {
            return CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_EXTENDS;
        }
        let mixins : core.DartList<any> = element.mixins;
        for(let i : number = 0; i < mixins.length; i++){
            if (op(Op.EQUALS,this._enclosingClass,mixins[i].element)) {
                return CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_WITH;
            }
        }
        return CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_IMPLEMENTS;
    }
    _getConstantName(expression : any) : string {
        if (is(expression, any)) {
            return expression.name;
        }else if (is(expression, any)) {
            return expression.identifier.name;
        }else if (is(expression, any)) {
            return expression.propertyName.name;
        }
        return null;
    }
    _getGetterType(getter : any) : any {
        let functionType : any = getter.type;
        if (functionType != null) {
            return functionType.returnType;
        }else {
            return null;
        }
    }
    _getKind(element : any) : string {
        if (is(element, any)) {
            return 'method';
        }else if (is(element, any)) {
            if (element.isSynthetic) {
                let variable : any = element.variable;
                if (is(variable, any)) {
                    return 'field';
                }
                return 'variable';
            }else if (element.isGetter) {
                return 'getter';
            }else {
                return 'setter';
            }
        }else if (is(element, any)) {
            return 'constructor';
        }else if (is(element, any)) {
            return 'function';
        }
        return 'member';
    }
    _getLibraryName(element : any) : string {
        if (op(Op.EQUALS,element,null)) {
            return StringUtilities.EMPTY;
        }
        let library : any = element.library;
        if (op(Op.EQUALS,library,null)) {
            return StringUtilities.EMPTY;
        }
        let imports : core.DartList<any> = this._currentLibrary.imports;
        let count : number = imports.length;
        for(let i : number = 0; i < count; i++){
            if (core.identical(imports[i].importedLibrary,library)) {
                return library.definingCompilationUnit.displayName;
            }
        }
        let indirectSources : core.DartList<string> = new core.DartList<string>();
        for(let i : number = 0; i < count; i++){
            let importedLibrary : any = imports[i].importedLibrary;
            if (importedLibrary != null) {
                for(let exportedLibrary of importedLibrary.exportedLibraries) {
                    if (core.identical(exportedLibrary,library)) {
                        indirectSources.add(importedLibrary.definingCompilationUnit.displayName);
                    }
                }
            }
        }
        let indirectCount : number = indirectSources.length;
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write(library.definingCompilationUnit.displayName);
        if (indirectCount > 0) {
            buffer.write(" (via ");
            if (indirectCount > 1) {
                indirectSources.sort();
                buffer.write(StringUtilities.printListOfQuotedNames(indirectSources));
            }else {
                buffer.write(indirectSources[0]);
            }
            buffer.write(")");
        }
        return buffer.toString();
    }
    _getOverriddenMember(member : any) : any {
        if (op(Op.EQUALS,member,null)) {
            return null;
        }
        let classElement : any = member.getAncestor((element : any) =>  {
            return is(element, any);
        });
        if (op(Op.EQUALS,classElement,null)) {
            return null;
        }
        let name : string = member.name;
        let superclass : any = ((t)=>(!!t)?t.element:null)(classElement.supertype);
        let visitedClasses : core.DartSet<any> = new core.DartSet<any>();
        while (superclass != null && visitedClasses.add(superclass)){
            let member : any = ((superclass.getMethod(name) || superclass.getGetter(name)) || superclass.getSetter(name));
            if (member != null) {
                return member;
            }
            superclass = ((t)=>(!!t)?t.element:null)(superclass.supertype);
        }
        return null;
    }
    _getSetterType(setter : any) : any {
        let setterParameters : core.DartList<any> = setter.parameters;
        if (setterParameters.length == 0) {
            return null;
        }
        return setterParameters[0].type;
    }
    _hasRedirectingFactoryConstructorCycle(constructor : any) : boolean {
        var nonMember : (constructor : any) => any = (constructor : any) : any =>  {
            return is(constructor, any) ? constructor.baseElement : constructor;
        };
        let constructors : core.DartSet<any> = new core.DartHashSet<any>();
        let current : any = constructor;
        while (current != null){
            if (constructors.contains(current)) {
                return core.identical(current,constructor);
            }
            constructors.add(current);
            current = nonMember(current.redirectedConstructor);
        }
        return false;
    }
    _hasTypedefSelfReference(element : any) : boolean {
        let checked : core.DartSet<any> = new core.DartHashSet<any>();
        let toCheck : core.DartList<any> = new core.DartList<any>();
        let elementVisitor : GeneralizingElementVisitor_ErrorVerifier_hasTypedefSelfReference = new GeneralizingElementVisitor_ErrorVerifier_hasTypedefSelfReference(toCheck);
        toCheck.add(element);
        let firstIteration : boolean = true;
        while (true){
            let current : any;
            while (true){
                if (toCheck.isEmpty) {
                    return false;
                }
                current = toCheck.removeAt(toCheck.length - 1);
                if (op(Op.EQUALS,element,current)) {
                    if (firstIteration) {
                        firstIteration = false;
                        break;
                    }else {
                        return true;
                    }
                }
                if (current != null && !checked.contains(current)) {
                    break;
                }
            }
            current.accept(elementVisitor);
            checked.add(current);
        }
    }
    _isFunctionType(type : any) : boolean {
        if (type.isDynamic || type.isDartCoreNull) {
            return true;
        }else if (is(type, any) || type.isDartCoreFunction) {
            return true;
        }else if (is(type, any)) {
            let callMethod : any = type.lookUpMethod(FunctionElement.CALL_METHOD_NAME,this._currentLibrary);
            return callMethod != null;
        }
        return false;
    }
    _isThisInValidContext(expression : any) : boolean {
        for(let node : any = expression.parent; node != null; node = node.parent){
            if (is(node, any)) {
                return false;
            }else if (is(node, any)) {
                return op(Op.EQUALS,node.factoryKeyword,null);
            }else if (is(node, any)) {
                return false;
            }else if (is(node, any)) {
                return !node.isStatic;
            }
        }
        return false;
    }
    _isUnqualifiedReferenceToNonLocalStaticMemberAllowed(identifier : any) : boolean {
        if (identifier.inDeclarationContext()) {
            return true;
        }
        let parent : any = identifier.parent;
        if (is(parent, any)) {
            return core.identical(parent.constructorName,identifier);
        }
        if (is(parent, any)) {
            return parent.newKeyword != null;
        }
        if (is(parent, any)) {
            return core.identical(parent.name,identifier);
        }
        if (is(parent, any)) {
            return core.identical(parent.methodName,identifier);
        }
        if (is(parent, any)) {
            return core.identical(parent.identifier,identifier);
        }
        if (is(parent, any)) {
            return core.identical(parent.propertyName,identifier);
        }
        if (is(parent, any)) {
            return core.identical(parent.constructorName,identifier);
        }
        return false;
    }
    _isUserDefinedObject(result : any) : boolean {
        return op(Op.EQUALS,result,null) || (result.value != null && result.value.isUserDefinedObject);
    }
    _safeCheckForRecursiveInterfaceInheritance(element : any,path : core.DartList<any>) : boolean {
        let size : number = path.length;
        if (size > 0 && op(Op.EQUALS,this._enclosingClass,element)) {
            let enclosingClassName : string = this._enclosingClass.displayName;
            if (size > 1) {
                let separator : string = ", ";
                let buffer : core.DartStringBuffer = new core.DartStringBuffer();
                for(let i : number = 0; i < size; i++){
                    buffer.write(path[i].displayName);
                    buffer.write(separator);
                }
                buffer.write(element.displayName);
                this._errorReporter.reportErrorForElement(CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE,this._enclosingClass,new core.DartList.literal(enclosingClassName,buffer.toString()));
                return true;
            }else {
                this._errorReporter.reportErrorForElement(this._getBaseCaseErrorCode(element),this._enclosingClass,new core.DartList.literal(enclosingClassName));
                return true;
            }
        }
        if (path.indexOf(element) > 0) {
            return false;
        }
        path.add(element);
        let supertype : any = element.supertype;
        if (supertype != null && this._safeCheckForRecursiveInterfaceInheritance(supertype.element,path)) {
            return true;
        }
        let interfaceTypes : core.DartList<any> = element.interfaces;
        for(let interfaceType of interfaceTypes) {
            if (this._safeCheckForRecursiveInterfaceInheritance(interfaceType.element,path)) {
                return true;
            }
        }
        let mixinTypes : core.DartList<any> = element.mixins;
        for(let mixinType of mixinTypes) {
            if (this._safeCheckForRecursiveInterfaceInheritance(mixinType.element,path)) {
                return true;
            }
        }
        path.removeAt(path.length - 1);
        return false;
    }
    static computeMissingOverrides(strongMode : boolean,typeProvider : any,typeSystem : any,inheritanceManager : any,classElement : any) : core.DartSet<any> {
        let missingOverrides : core.DartHashSet<any> = new core.DartHashSet<any>();
        let membersInheritedFromInterfaces : core.DartMap<string,any> = inheritanceManager.getMembersInheritedFromInterfaces(classElement);
        let membersInheritedFromSuperclasses : core.DartMap<string,any> = inheritanceManager.getMembersInheritedFromClasses(classElement);
        for(let memberName of membersInheritedFromInterfaces.keys) {
            let executableElt : any = membersInheritedFromInterfaces.get(memberName);
            if (memberName == null) {
                break;
            }
            if (executableElt.enclosingElement != null && (executableElt.enclosingElement as any).type.isObject) {
                continue;
            }
            if (ErrorVerifier._isMemberInClassOrMixin(executableElt,classElement)) {
                continue;
            }
            let elt : any = membersInheritedFromSuperclasses.get(memberName);
            if (elt != null) {
                let enclosingType : any = classElement.type;
                let concreteType : any = elt.type;
                let requiredMemberType : any = executableElt.type;
                if (op(Op.EQUALS,enclosingType,null) || op(Op.EQUALS,concreteType,null) || op(Op.EQUALS,requiredMemberType,null)) {
                    continue;
                }
                if ((is(elt, any) && !elt.isAbstract) || (is(elt, any) && !elt.isAbstract)) {
                    let foundConcreteFT : any = inheritanceManager.substituteTypeArgumentsInMemberFromInheritance(concreteType,memberName,enclosingType);
                    let requiredMemberFT : any = inheritanceManager.substituteTypeArgumentsInMemberFromInheritance(requiredMemberType,memberName,enclosingType);
                    foundConcreteFT = typeSystem.functionTypeToConcreteType(foundConcreteFT);
                    requiredMemberFT = typeSystem.functionTypeToConcreteType(requiredMemberFT);
                    if (strongMode || typeSystem.isSubtypeOf(foundConcreteFT,requiredMemberFT)) {
                        continue;
                    }
                }
            }
            missingOverrides.add(executableElt);
        }
        return missingOverrides;
    }
    static computeNotInitializedFields(constructor : any) : core.DartList<any> {
        let fields : core.DartSet<any> = new core.DartSet<any>();
        let classDeclaration = constructor.parent as any;
        for(let fieldDeclaration of classDeclaration.members) {
            if (is(fieldDeclaration, any)) {
                for(let field of fieldDeclaration.fields.variables) {
                    if (op(Op.EQUALS,field.initializer,null)) {
                        fields.add(field.element);
                    }
                }
            }
        }
        let parameters : core.DartList<any> = (((t)=>(!!t)?t.parameters:null)(constructor.parameters) || new core.DartList.literal());
        for(let parameter of parameters) {
            if (is(parameter, any)) {
                parameter = (parameter as any).parameter;
            }
            if (is(parameter, any)) {
                let element : any = parameter.identifier.staticElement as any;
                fields.remove(element.field);
            }
        }
        for(let initializer of constructor.initializers) {
            if (is(initializer, any)) {
                fields.remove(initializer.fieldName.staticElement);
            }
        }
        return fields.toList();
    }
    static getStaticType(expression : any) : any {
        let type : any = expression.staticType;
        if (op(Op.EQUALS,type,null)) {
            return DynamicTypeImpl.instance;
        }
        return type;
    }
    static getVariableElement(expression : any) : any {
        if (is(expression, any)) {
            let element : any = expression.staticElement;
            if (is(element, any)) {
                return element;
            }
        }
        return null;
    }
    static _isMemberInClassOrMixin(executableElement : any,classElement : any) : boolean {
        let foundElt : any = null;
        let executableName : string = executableElement.name;
        if (is(executableElement, any)) {
            foundElt = classElement.getMethod(executableName);
            if (foundElt != null && !foundElt.isAbstract) {
                return true;
            }
            let mixins : core.DartList<any> = classElement.mixins;
            for(let i : number = 0; i < mixins.length && op(Op.EQUALS,foundElt,null); i++){
                foundElt = mixins[i].getMethod(executableName);
            }
            if (foundElt != null && !foundElt.isAbstract) {
                return true;
            }
        }else if (is(executableElement, any)) {
            if (executableElement.isGetter) {
                foundElt = classElement.getGetter(executableName);
            }
            if (op(Op.EQUALS,foundElt,null) && executableElement.isSetter) {
                foundElt = classElement.getSetter(executableName);
            }
            if (foundElt != null && !(foundElt as any).isAbstract) {
                return true;
            }
            let mixins : core.DartList<any> = classElement.mixins;
            for(let i : number = 0; i < mixins.length && op(Op.EQUALS,foundElt,null); i++){
                foundElt = mixins[i].getGetter(executableName);
                if (op(Op.EQUALS,foundElt,null)) {
                    foundElt = mixins[i].getSetter(executableName);
                }
            }
            if (foundElt != null && !foundElt.isAbstract) {
                return true;
            }
        }
        return false;
    }
}

export namespace GeneralizingElementVisitor_ErrorVerifier_hasTypedefSelfReference {
    export type Constructors = 'GeneralizingElementVisitor_ErrorVerifier_hasTypedefSelfReference';
    export type Interface = Omit<GeneralizingElementVisitor_ErrorVerifier_hasTypedefSelfReference, Constructors>;
}
@DartClass
export class GeneralizingElementVisitor_ErrorVerifier_hasTypedefSelfReference extends any {
    toCheck : core.DartList<any>;

    constructor(toCheck : core.DartList<any>) {
    }
    @defaultConstructor
    GeneralizingElementVisitor_ErrorVerifier_hasTypedefSelfReference(toCheck : core.DartList<any>) {
        super.DartObject();
        this.toCheck = toCheck;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassElement(element : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionElement(element : any) : core.DartObject {
        this._addTypeToCheck(element.returnType);
        return super.visitFunctionElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAliasElement(element : any) : core.DartObject {
        this._addTypeToCheck(element.returnType);
        return super.visitFunctionTypeAliasElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitParameterElement(element : any) : core.DartObject {
        this._addTypeToCheck(element.type);
        return super.visitParameterElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameterElement(element : any) : core.DartObject {
        this._addTypeToCheck(element.bound);
        return super.visitTypeParameterElement(element);
    }
    _addTypeToCheck(type : any) : void {
        if (op(Op.EQUALS,type,null)) {
            return;
        }
        this.toCheck.add(type.element);
        if (is(type, any)) {
            for(let typeArgument of type.typeArguments) {
                this._addTypeToCheck(typeArgument);
            }
        }
    }
}

export namespace HiddenElements {
    export type Constructors = 'HiddenElements';
    export type Interface = Omit<HiddenElements, Constructors>;
}
@DartClass
export class HiddenElements {
    outerElements : HiddenElements;

    _elements : core.DartSet<any>;

    constructor(outerElements : HiddenElements,block : any) {
    }
    @defaultConstructor
    HiddenElements(outerElements : HiddenElements,block : any) {
        this._elements = new core.DartHashSet<any>();
        this.outerElements = outerElements;
        this._initializeElements(block);
    }
    contains(element : any) : boolean {
        if (this._elements.contains(element)) {
            return true;
        }else if (this.outerElements != null) {
            return this.outerElements.contains(element);
        }
        return false;
    }
    declare(element : any) : void {
        this._elements.remove(element);
    }
    _initializeElements(block : any) : void {
        this._elements.addAll(BlockScope.elementsInBlock(block));
    }
}

export namespace RequiredConstantsComputer {
    export type Constructors = 'RequiredConstantsComputer';
    export type Interface = Omit<RequiredConstantsComputer, Constructors>;
}
@DartClass
export class RequiredConstantsComputer extends any {
    source : any;

    pendingErrors : core.DartList<any>;

    requiredConstants : core.DartList<any>;

    constructor(source : any) {
    }
    @defaultConstructor
    RequiredConstantsComputer(source : any) {
        this.pendingErrors = new core.DartList.literal<any>();
        this.requiredConstants = new core.DartList.literal<any>();
        this.source = source;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpressionInvocation(node : any) : core.DartObject {
        this._checkForMissingRequiredParam(node.staticInvokeType,node.argumentList,node);
        return super.visitFunctionExpressionInvocation(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : core.DartObject {
        let type : any = node.constructorName.type.type;
        if (is(type, any)) {
            this._checkForMissingRequiredParam(((t)=>(!!t)?t.type:null)(resolutionMap.staticElementForConstructorReference(node)),node.argumentList,node.constructorName);
        }
        return super.visitInstanceCreationExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : core.DartObject {
        this._checkForMissingRequiredParam(node.staticInvokeType,node.argumentList,node.methodName);
        return super.visitMethodInvocation(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingConstructorInvocation(node : any) : core.DartObject {
        let type : any = ((t)=>(!!t)?t.type:null)(resolutionMap.staticElementForConstructorReference(node));
        if (type != null) {
            this._checkForMissingRequiredParam(type,node.argumentList,node);
        }
        return super.visitRedirectingConstructorInvocation(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) : core.DartObject {
        let type : any = ((t)=>(!!t)?t.type:null)(resolutionMap.staticElementForConstructorReference(node));
        if (type != null) {
            this._checkForMissingRequiredParam(type,node.argumentList,node);
        }
        return super.visitSuperConstructorInvocation(node);
    }
    _checkForMissingRequiredParam(type : any,argumentList : any,node : any) : void {
        if (is(type, any)) {
            for(let parameter of type.parameters) {
                if (op(Op.EQUALS,parameter.parameterKind,ParameterKind.NAMED)) {
                    let annotation : any = this._getRequiredAnnotation(parameter);
                    if (annotation != null) {
                        let parameterName : string = parameter.name;
                        if (!this._containsNamedExpression(argumentList,parameterName)) {
                            this.requiredConstants.add(annotation);
                            this.pendingErrors.add(new bare.createInstance(any,null,this.source,parameterName,node,annotation));
                        }
                    }
                }
            }
        }
    }
    _containsNamedExpression(args : any,name : string) : boolean {
        let arguments : any = args.arguments;
        for(let i : number = op(Op.MINUS,arguments.length,1); i >= 0; i--){
            let expression : any = op(Op.INDEX,arguments,i);
            if (is(expression, any)) {
                if (op(Op.EQUALS,expression.name.label.name,name)) {
                    return true;
                }
            }
        }
        return false;
    }
    _getRequiredAnnotation(param : any) : any {
        return param.metadata.firstWhere((e : any) =>  {
            return e.isRequired;
        },{
            orElse : () =>  {
                return null;
            }});
    }
}

export namespace _InvocationCollector {
    export type Constructors = '_InvocationCollector';
    export type Interface = Omit<_InvocationCollector, Constructors>;
}
@DartClass
export class _InvocationCollector extends any {
    superCalls : core.DartList<string>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) {
        if (is(node.target, any)) {
            this.superCalls.add(node.methodName.name);
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _InvocationCollector() {
        this.superCalls = new core.DartList.literal<string>();
    }
}

export class properties {
}
