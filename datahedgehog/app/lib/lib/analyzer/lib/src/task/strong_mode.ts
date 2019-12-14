/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/task/strong_mode.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export var isValidForTypeInference : (expression : any) => boolean = (expression : any) : boolean =>  {
    let visitor = new _IsValidForTypeInferenceVisitor();
    expression.accept(visitor);
    return visitor.isValid;
};
export var setFieldType : (field : any,newType : any) => void = (field : any,newType : any) : void =>  {
    (field as any).type = newType;
};
export namespace InstanceMemberInferrer {
    export type Constructors = 'InstanceMemberInferrer';
    export type Interface = Omit<InstanceMemberInferrer, Constructors>;
}
@DartClass
export class InstanceMemberInferrer {
    typeProvider : any;

    typeSystem : any;

    inheritanceManagerProvider : (element : any) => any;

    fieldsWithDisabledInitializerInference : core.DartSet<any>;

    elementsBeingInferred : core.DartHashSet<any>;

    constructor(typeProvider : any,inheritanceManagerProvider : (element : any) => any,fieldsWithDisabledInitializerInference : core.DartSet<any>,_namedArguments? : {typeSystem? : any}) {
    }
    @defaultConstructor
    InstanceMemberInferrer(typeProvider : any,inheritanceManagerProvider : (element : any) => any,fieldsWithDisabledInitializerInference : core.DartSet<any>,_namedArguments? : {typeSystem? : any}) {
        let {typeSystem} = Object.assign({
        }, _namedArguments );
        this.elementsBeingInferred = new core.DartHashSet<any>();
        this.typeSystem = (typeSystem != null) ? typeSystem : new bare.createInstance(any,null,typeProvider);
        this.typeProvider = typeProvider;
        this.inheritanceManagerProvider = inheritanceManagerProvider;
        this.fieldsWithDisabledInitializerInference = fieldsWithDisabledInitializerInference;
    }
    inferCompilationUnit(unit : any) : void {
        for(let classElement of unit.types) {
            try {
                this._inferClass(classElement);
            } catch (__error__) {

                if (is(__error__,_CycleException)){
                }
            }
        }
    }
    _allSameElementKind(element : any,elements : core.DartList<any>) : boolean {
        return elements.every((e : any) =>  {
            return op(Op.EQUALS,e.kind,element.kind);
        });
    }
    _computeFieldOverrideType(inheritanceManager : any,accessor : any) : _FieldOverrideInferenceResult {
        let name : string = accessor.displayName;
        let overriddenElements = new core.DartList.literal<any>();
        overriddenElements.addAll(inheritanceManager.lookupOverrides(accessor.enclosingElement,name));
        if (overriddenElements.isEmpty || !accessor.variable.isFinal) {
            let overriddenSetters : core.DartList<any> = inheritanceManager.lookupOverrides(accessor.enclosingElement,`${name}=`);
            overriddenElements.addAll(overriddenSetters);
        }
        let isCovariant : boolean = false;
        let impliedType : any;
        for(let overriddenElement of overriddenElements) {
            let overriddenType : any = this._toOverriddenFunctionType(accessor,overriddenElement);
            if (op(Op.EQUALS,overriddenType,null)) {
                return new _FieldOverrideInferenceResult(false,null,true);
            }
            let type : any;
            if (op(Op.EQUALS,overriddenElement.kind,ElementKind.GETTER)) {
                type = overriddenType.returnType;
            }else if (op(Op.EQUALS,overriddenElement.kind,ElementKind.SETTER)) {
                if (op(Op.EQUALS,overriddenType.parameters.length,1)) {
                    let parameter : any = op(Op.INDEX,overriddenType.parameters,0);
                    type = parameter.type;
                    isCovariant = isCovariant || parameter.isCovariant;
                }
            }else {
                return new _FieldOverrideInferenceResult(false,null,true);
            }
            if (op(Op.EQUALS,impliedType,null)) {
                impliedType = type;
            }else if (type != impliedType) {
                return new _FieldOverrideInferenceResult(false,null,true);
            }
        }
        return new _FieldOverrideInferenceResult(isCovariant,impliedType,false);
    }
    _computeParameterType(parameter : any,index : number,overriddenTypes : core.DartList<any>) : any {
        let parameterType : any = null;
        let length : number = overriddenTypes.length;
        for(let i : number = 0; i < length; i++){
            let matchingParameter : any = this._getCorrespondingParameter(parameter,index,overriddenTypes[i].parameters);
            let type : any = (((t)=>(!!t)?t.type:null)(matchingParameter) || this.typeProvider.dynamicType);
            if (op(Op.EQUALS,parameterType,null)) {
                parameterType = type;
            }else if (parameterType != type) {
                if (is(parameter, any)) {
                    parameter.setInferenceError(new bare.createInstance(any,null,{
                        kind : TopLevelInferenceErrorKind.overrideConflictParameterType}));
                }
                return this.typeProvider.dynamicType;
            }
        }
        return (parameterType || this.typeProvider.dynamicType);
    }
    _computeReturnType(overriddenReturnTypes : core.DartIterable<any>) : any {
        let returnType : any = null;
        for(let type of overriddenReturnTypes) {
            if (op(Op.EQUALS,type,null)) {
                type = this.typeProvider.dynamicType;
            }
            if (op(Op.EQUALS,returnType,null)) {
                returnType = type;
            }else if (returnType != type) {
                return this.typeProvider.dynamicType;
            }
        }
        return (returnType || this.typeProvider.dynamicType);
    }
    _getCorrespondingParameter(parameter : any,index : number,methodParameters : core.DartList<any>) : any {
        if (op(Op.EQUALS,parameter.parameterKind,ParameterKind.NAMED)) {
            return methodParameters.lastWhere((methodParameter : any) =>  {
                return op(Op.EQUALS,methodParameter.parameterKind,ParameterKind.NAMED) && op(Op.EQUALS,methodParameter.name,parameter.name);
            },{
                orElse : () =>  {
                    return null;
                }});
        }
        if (index < methodParameters.length) {
            let matchingParameter = methodParameters[index];
            if (matchingParameter.parameterKind != ParameterKind.NAMED) {
                return matchingParameter;
            }
        }
        return null;
    }
    _inferAccessor(inheritanceManager : any,element : any) : void {
        if (element.isSynthetic || element.isStatic) {
            return;
        }
        if (op(Op.EQUALS,element.kind,ElementKind.GETTER) && !element.hasImplicitReturnType) {
            return;
        }
        let typeResult : _FieldOverrideInferenceResult = this._computeFieldOverrideType(inheritanceManager,element);
        if (typeResult.isError == null || op(Op.EQUALS,typeResult.type,null)) {
            return;
        }
        if (op(Op.EQUALS,element.kind,ElementKind.GETTER)) {
            (element as any).returnType = typeResult.type;
        }else if (op(Op.EQUALS,element.kind,ElementKind.SETTER)) {
            let parameters : core.DartList<any> = element.parameters;
            if (parameters.isNotEmpty) {
                let parameter = parameters[0] as any;
                if (parameter.hasImplicitType) {
                    parameter.type = typeResult.type;
                }
                parameter.inheritsCovariant = typeResult.isCovariant;
            }
        }
        setFieldType(element.variable,typeResult.type);
    }
    _inferClass(classElement : any) : void {
        if (is(classElement, any)) {
            if (classElement.hasBeenInferred) {
                return;
            }
            if (!this.elementsBeingInferred.add(classElement)) {
                throw new _CycleException();
            }
            try {
                let inheritanceManager : any = this.inheritanceManagerProvider(classElement);
                this._inferType(classElement.supertype);
                classElement.mixins.forEach(this._inferType.bind(this));
                classElement.interfaces.forEach(this._inferType.bind(this));
                classElement.fields.forEach((field : any) =>  {
                    this._inferField(inheritanceManager,field);
                });
                classElement.accessors.forEach((accessor : any) =>  {
                    this._inferAccessor(inheritanceManager,accessor);
                });
                classElement.methods.forEach((method : any) =>  {
                    this._inferExecutable(inheritanceManager,method);
                });
                classElement.constructors.forEach(this._inferConstructorFieldFormals.bind(this));
                classElement.hasBeenInferred = true;
            } finally {
                this.elementsBeingInferred.remove(classElement);
            }
        }
    }
    _inferConstructorFieldFormals(constructor : any) : void {
        for(let parameter of constructor.parameters) {
            if (parameter.hasImplicitType && is(parameter, any)) {
                let field : any = parameter.field;
                if (field != null) {
                    parameter.type = field.type;
                }
            }
        }
    }
    _inferExecutable(inheritanceManager : any,element : any) : void {
        if (element.isSynthetic || element.isStatic) {
            return;
        }
        let overriddenElements : core.DartList<any> = inheritanceManager.lookupOverrides(element.enclosingElement,element.displayName);
        if (overriddenElements.isEmpty || !this._allSameElementKind(element,overriddenElements)) {
            return;
        }
        let overriddenTypes : core.DartList<any> = this._toOverriddenFunctionTypes(element,overriddenElements);
        if (overriddenTypes.isEmpty) {
            return;
        }
        if (element.hasImplicitReturnType) {
            (element as any).returnType = this._computeReturnType(overriddenTypes.map((t : any) =>  {
                return t.returnType;
            }));
            if (is(element, any)) {
                this._updateSyntheticVariableType(element);
            }
        }
        let parameters : core.DartList<any> = element.parameters;
        let length : number = parameters.length;
        for(let i : number = 0; i < length; ++i){
            let parameter : any = parameters[i];
            if (is(parameter, any)) {
                this._inferParameterCovariance(parameter,i,overriddenTypes);
                if (parameter.hasImplicitType) {
                    parameter.type = this._computeParameterType(parameter,i,overriddenTypes);
                    if (is(element, any)) {
                        this._updateSyntheticVariableType(element);
                    }
                }
            }
        }
    }
    _inferField(inheritanceManager : any,field : any) : void {
        if (field.isSynthetic || field.isStatic) {
            return;
        }
        let typeResult : _FieldOverrideInferenceResult = this._computeFieldOverrideType(inheritanceManager,field.getter);
        if (typeResult.isError) {
            if (is(field, any)) {
                field.setInferenceError(new bare.createInstance(any,null,{
                    kind : TopLevelInferenceErrorKind.overrideConflictFieldType}));
            }
            return;
        }
        if (field.hasImplicitType) {
            let newType : any = typeResult.type;
            if (op(Op.EQUALS,newType,null) && field.initializer != null && !this.fieldsWithDisabledInitializerInference.contains(field)) {
                newType = field.initializer.returnType;
            }
            if (op(Op.EQUALS,newType,null) || newType.isBottom || newType.isDartCoreNull) {
                newType = this.typeProvider.dynamicType;
            }
            setFieldType(field,newType);
        }
        if (field.setter != null) {
            let parameter = op(Op.INDEX,field.setter.parameters,0) as any;
            parameter.inheritsCovariant = typeResult.isCovariant;
        }
    }
    _inferParameterCovariance(parameter : any,index : number,overriddenTypes : core.DartIterable<any>) : void {
        parameter.inheritsCovariant = overriddenTypes.any((f : any) =>  {
            let param = this._getCorrespondingParameter(parameter,index,f.parameters);
            return param != null && param.isCovariant;
        });
    }
    _inferType(type : any) : void {
        if (type != null) {
            let element : any = type.element;
            if (element != null) {
                this._inferClass(element);
            }
        }
    }
    _toOverriddenFunctionType(element : any,overriddenElement : any) : any {
        let typeFormals : core.DartList<any> = TypeParameterTypeImpl.getTypes(element.type.typeFormals);
        let overriddenType : any = overriddenElement.type;
        if (op(Op.EQUALS,overriddenType,null)) {
            return null;
        }
        if (overriddenType.typeFormals.isNotEmpty) {
            if (overriddenType.typeFormals.length != typeFormals.length) {
                return null;
            }
            overriddenType = overriddenType.instantiate(typeFormals);
        }
        return overriddenType;
    }
    _toOverriddenFunctionTypes(element : any,overriddenElements : core.DartList<any>) : core.DartList<any> {
        let overriddenTypes = new core.DartList.literal<any>();
        for(let overriddenElement of overriddenElements) {
            let overriddenType : any = this._toOverriddenFunctionType(element,overriddenElement);
            if (op(Op.EQUALS,overriddenType,null)) {
                return new core.DartList.literal<any>();
            }
            overriddenTypes.add(overriddenType);
        }
        return overriddenTypes;
    }
    _updateSyntheticVariableType(element : any) : void {
        /* TODO (AssertStatementImpl) : assert (!element.isSynthetic); */;
        let getter : any = element;
        if (element.isSetter) {
            getter = element.correspondingGetter;
        }
        let newType : any;
        if (getter != null) {
            newType = getter.returnType;
        }else if (element.isSetter && element.parameters.isNotEmpty) {
            newType = op(Op.INDEX,element.parameters,0).type;
        }
        if (newType != null) {
            (element.variable as any).type = newType;
        }
    }
}

export namespace VariableGatherer {
    export type Constructors = 'VariableGatherer';
    export type Interface = Omit<VariableGatherer, Constructors>;
}
@DartClass
export class VariableGatherer extends any {
    filter : (element : any) => boolean;

    results : core.DartSet<any>;

    constructor(filter? : (element : any) => boolean) {
    }
    @defaultConstructor
    VariableGatherer(filter? : (element : any) => boolean) {
        filter = filter || null;
        this.results = new core.DartHashSet<any>();
        this.filter = filter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : void {
        if (!node.inDeclarationContext()) {
            var nonAccessor : (element : any) => any = (element : any) : any =>  {
                if (is(element, any) && element.isSynthetic) {
                    return element.variable;
                }
                return element;
            };
            let element : any = nonAccessor(node.staticElement);
            if (is(element, any) && (op(Op.EQUALS,this.filter,null) || this.filter(element))) {
                this.results.add(element);
            }
        }
    }
}

export namespace _CycleException {
    export type Constructors = '_CycleException';
    export type Interface = Omit<_CycleException, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class _CycleException implements core.Exception.Interface {
    constructor() {
    }
    @defaultConstructor
    _CycleException() {
    }
}

export namespace _FieldOverrideInferenceResult {
    export type Constructors = '_FieldOverrideInferenceResult';
    export type Interface = Omit<_FieldOverrideInferenceResult, Constructors>;
}
@DartClass
export class _FieldOverrideInferenceResult {
    isCovariant : boolean;

    type : any;

    isError : boolean;

    constructor(isCovariant : boolean,type : any,isError : boolean) {
    }
    @defaultConstructor
    _FieldOverrideInferenceResult(isCovariant : boolean,type : any,isError : boolean) {
        this.isCovariant = isCovariant;
        this.type = type;
        this.isError = isError;
    }
}

export namespace _IsValidForTypeInferenceVisitor {
    export type Constructors = '_IsValidForTypeInferenceVisitor';
    export type Interface = Omit<_IsValidForTypeInferenceVisitor, Constructors>;
}
@DartClass
export class _IsValidForTypeInferenceVisitor extends any {
    isValid : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : void {
        this.isValid = false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCascadeExpression(node : any) : void {
        node.target.accept(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : void {
        let body : any = node.body;
        if (is(body, any)) {
            body.accept(this);
        }else {
            this.isValid = false;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpressionInvocation(node : any) : void {
        ((_509_)=>(!!_509_)?_509_.accept(this):null)(node.function);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) : void {
        this.isValid = false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : void {
        let constructor : any = node.staticElement;
        if (constructor != null) {
            let clazz : any = ((t)=>(!!t)?t.enclosingElement:null)(constructor);
            if (clazz.typeParameters.isNotEmpty && op(Op.EQUALS,node.constructorName.type.typeArguments,null)) {
                this.isValid = false;
                return;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : any) : void {
        if (op(Op.EQUALS,node.typeArguments,null)) {
            super.visitListLiteral(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : any) : void {
        if (op(Op.EQUALS,node.typeArguments,null)) {
            super.visitMapLiteral(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : void {
        let element : any = node.methodName.staticElement;
        if (is(element, any)) {
            if (element.type.typeFormals.isNotEmpty && op(Op.EQUALS,node.typeArguments,null)) {
                this.isValid = false;
                return;
            }
        }
        ((_510_)=>(!!_510_)?_510_.accept(this):null)(node.target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : void {
        let element : any = node.staticElement;
        if (op(Op.EQUALS,element,null)) {
            let parent : any = node.parent;
            if (is(parent, any) && op(Op.EQUALS,parent.propertyName,node) || is(parent, any) && op(Op.EQUALS,parent.identifier,node)) {
                this.isValid = false;
            }
        }else if (is(element, any) && !element.isStatic) {
            this.isValid = false;
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _IsValidForTypeInferenceVisitor() {
        this.isValid = true;
    }
}

export class properties {
}
