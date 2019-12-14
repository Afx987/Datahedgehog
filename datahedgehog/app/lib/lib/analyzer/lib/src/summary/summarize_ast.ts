/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/summarize_ast.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var serializeAstUnlinked : (compilationUnit : any) => any = (compilationUnit : any) : any =>  {
    return new _SummarizeAstVisitor().serializeCompilationUnit(compilationUnit);
};
export namespace _ConstExprSerializer {
    export type Constructors = '_ConstExprSerializer';
    export type Interface = Omit<_ConstExprSerializer, Constructors>;
}
@DartClass
export class _ConstExprSerializer extends any {
    visitor : _SummarizeAstVisitor;

    localClosureIndexMap : core.DartMap<number,number>;

    parameterNames : core.DartSet<string>;

    constructor(forConst : boolean,visitor : _SummarizeAstVisitor,localClosureIndexMap : core.DartMap<number,number>,parameterNames : core.DartSet<string>) {
    }
    @defaultConstructor
    _ConstExprSerializer(forConst : boolean,visitor : _SummarizeAstVisitor,localClosureIndexMap : core.DartMap<number,number>,parameterNames : core.DartSet<string>) {
        super.DartObject(forConst);
        this.visitor = visitor;
        this.localClosureIndexMap = localClosureIndexMap;
        this.parameterNames = parameterNames;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isParameterName(name : string) : boolean {
        return (((_499_)=>(!!_499_)?_499_.contains(name):null)(this.parameterNames) || false);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    serializeAnnotation(annotation : any) : void {
        let name : any = annotation.name;
        let constructor : any;
        if (is(name, any) && op(Op.EQUALS,annotation.constructorName,null)) {
            constructor = this.serializeConstructorRef(null,name.prefix,null,name.identifier);
        }else {
            constructor = this.serializeConstructorRef(null,annotation.name,null,annotation.constructorName);
        }
        if (op(Op.EQUALS,annotation.arguments,null)) {
            references.add(constructor);
            operations.add(UnlinkedExprOperation.pushReference);
        }else {
            serializeInstanceCreation(constructor,annotation.arguments);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    serializeConstructorRef(type : any,typeName : any,typeArguments : any,name : any) : any {
        let typeBuilder : any = this.serializeType(type,typeName,typeArguments);
        if (op(Op.EQUALS,name,null)) {
            return typeBuilder;
        }else {
            let nameRef : number = this.visitor.serializeReference(typeBuilder.reference,name.name);
            return new bare.createInstance(any,null,{
                reference : nameRef,typeArguments : typeBuilder.typeArguments});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    serializeFunctionExpression(functionExpression : any) : core.DartList<number> {
        let localIndex : number;
        if (this.localClosureIndexMap == null) {
            return null;
        }else {
            localIndex = this.localClosureIndexMap.get(functionExpression.offset);
            /* TODO (AssertStatementImpl) : assert (localIndex != null); */;
            return new core.DartList.literal<number>(0,localIndex);
        }
    }
    serializeIdentifier(identifier : any) : any {
        let b : any = new bare.createInstance(any,null);
        if (is(identifier, any)) {
            let index : number = this.visitor.serializeSimpleReference(identifier.name);
            if (index < 0) {
                b.paramReference = -index;
            }else {
                b.reference = index;
            }
        }else if (is(identifier, any)) {
            let prefix : number = this.visitor.serializeSimpleReference(identifier.prefix.name);
            if (prefix < 0) {
                throw new core.StateError(`Invalid type parameter usage: ${identifier}}`);
            }
            b.reference = this.visitor.serializeReference(prefix,identifier.identifier.name);
        }else {
            throw new core.StateError(`Unexpected identifier type: ${identifier.runtimeType}`);
        }
        return b;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    serializeIdentifierSequence(expr : any) : any {
        if (is(expr, any)) {
            let parent : any = expr.parent;
            if (is(parent, any) && op(Op.EQUALS,parent.methodName,expr) && parent.target != null) {
                let targetId : number = this.serializeIdentifierSequence(parent.target).reference;
                let nameId : number = this.visitor.serializeReference(targetId,expr.name);
                return new bare.createInstance(any,null,{
                    reference : nameId});
            }
            return this.serializeIdentifier(expr);
        }
        if (is(expr, any)) {
            let targetId : number = this.serializeIdentifierSequence(expr.target).reference;
            let nameId : number = this.visitor.serializeReference(targetId,expr.propertyName.name);
            return new bare.createInstance(any,null,{
                reference : nameId});
        }else {
            throw new core.StateError(`Unexpected node type: ${expr.runtimeType}`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    serializeType(type : any,name : any,arguments : any) : any {
        return this.visitor.serializeType(name,arguments);
    }
}

export namespace _Scope {
    export type Constructors = '_Scope';
    export type Interface = Omit<_Scope, Constructors>;
}
@DartClass
export class _Scope {
    _definedNames : core.DartMap<string,_ScopedEntity>;

    [OperatorMethods.INDEX](name : string) : _ScopedEntity {
        return this._definedNames.get(name);
    }
    [OperatorMethods.INDEX_EQ](name : string,entity : _ScopedEntity) : void {
        this._definedNames.set(name,entity);
    }
    constructor() {
    }
    @defaultConstructor
    _Scope() {
        this._definedNames = new core.DartMap.literal([
        ]);
    }
}

export namespace _ScopedEntity {
    export type Constructors = '_ScopedEntity';
    export type Interface = Omit<_ScopedEntity, Constructors>;
}
@DartClass
export class _ScopedEntity {
    constructor() {
    }
    @defaultConstructor
    _ScopedEntity() {
    }
}

export namespace _SummarizeAstVisitor {
    export type Constructors = '_SummarizeAstVisitor';
    export type Interface = Omit<_SummarizeAstVisitor, Constructors>;
}
@DartClass
export class _SummarizeAstVisitor extends any {
    classes : core.DartList<any>;

    enums : core.DartList<any>;

    executables : core.DartList<any>;

    exports : core.DartList<any>;

    labels : core.DartList<any>;

    parts : core.DartList<any>;

    typedefs : core.DartList<any>;

    variables : core.DartList<any>;

    unlinkedImports : core.DartList<any>;

    unlinkedReferences : core.DartList<any>;

    scopes : core.DartList<_Scope>;

    hasCoreBeenImported : boolean;

    nameToReference : core.DartMap<number,core.DartMap<string,number>>;

    isCoreLibrary : boolean;

    isPartOf : boolean;

    libraryName : string;

    libraryNameOffset : number;

    libraryNameLength : number;

    libraryDocumentationComment : any;

    libraryAnnotations : core.DartList<any>;

    numSlots : number;

    enclosingBlock : any;

    _localClosureIndexMap : core.DartMap<number,number>;

    _serializeClosureBodyExprs : boolean;

    _parameterNames : core.DartSet<string>;

    _parametersMayInheritCovariance : boolean;

    assignSlot() : number {
        return ++this.numSlots;
    }
    buildClassMemberScope(className : string,members : any) : _Scope {
        let scope : _Scope = new _Scope();
        for(let member of members) {
            if (is(member, any)) {
                if (member.isSetter || member.isOperator) {
                }else {
                    op(Op.INDEX_ASSIGN,scope,member.name.name,new _ScopedClassMember(className));
                }
            }else if (is(member, any)) {
                for(let field of member.fields.variables) {
                    op(Op.INDEX_ASSIGN,scope,field.name.name,new _ScopedClassMember(className));
                }
            }
        }
        return scope;
    }
    serializeAnnotations(annotations : any) : core.DartList<any> {
        if (op(Op.EQUALS,annotations,null) || annotations.isEmpty) {
            return new core.DartList.literal<any>();
        }
        return annotations.map((a : any) =>  {
            let localClosureIndexMap : core.DartMap<number,number> = null;
            let serializer : _ConstExprSerializer = new _ConstExprSerializer(true,this,localClosureIndexMap,null);
            try {
                serializer.serializeAnnotation(a);
            } catch (__error__) {

                if (is(__error__,core.StateError)){
                    return ((_) : any =>  {
                        {
                            _.isValidConst = false;
                            return _;
                        }
                    })(new bare.createInstance(any,null));
                }
            }
            return serializer.toBuilder();
        }).toList();
    }
    serializeClass(node : any,abstractKeyword : any,name : string,nameOffset : number,typeParameters : any,superclass : any,withClause : any,implementsClause : any,members : any,isMixinApplication : boolean,documentationComment : any,annotations : any) : void {
        let oldScopesLength : number = this.scopes.length;
        let oldExecutables : core.DartList<any> = this.executables;
        this.executables = new core.DartList.literal<any>();
        let oldVariables : core.DartList<any> = this.variables;
        this.variables = new core.DartList.literal<any>();
        let typeParameterScope : _TypeParameterScope = new _TypeParameterScope();
        this.scopes.add(typeParameterScope);
        let b : any = new bare.createInstance(any,null);
        b.name = name;
        b.nameOffset = nameOffset;
        b.isMixinApplication = isMixinApplication;
        b.typeParameters = this.serializeTypeParameters(typeParameters,typeParameterScope);
        if (superclass != null) {
            b.supertype = this.serializeTypeName(superclass);
        }else {
            b.hasNoSupertype = this.isCoreLibrary && name == 'Object';
        }
        if (withClause != null) {
            b.mixins = withClause.mixinTypes.map(this.serializeTypeName.bind(this)).toList();
        }
        if (implementsClause != null) {
            b.interfaces = implementsClause.interfaces.map(this.serializeTypeName.bind(this)).toList();
        }
        if (members != null) {
            this.scopes.add(this.buildClassMemberScope(name,members));
            for(let member of members) {
                member.accept(this);
            }
            this.scopes.removeLast();
        }
        b.executables = this.executables;
        b.fields = this.variables;
        b.isAbstract = abstractKeyword != null;
        b.documentationComment = this.serializeDocumentation(documentationComment);
        b.annotations = this.serializeAnnotations(annotations);
        b.codeRange = this.serializeCodeRange(node);
        this.classes.add(b);
        this.scopes.removeLast();
        /* TODO (AssertStatementImpl) : assert (scopes.length == oldScopesLength); */;
        this.executables = oldExecutables;
        this.variables = oldVariables;
    }
    serializeCodeRange(node : any) : any {
        return new bare.createInstance(any,null,{
            offset : node.offset,length : node.length});
    }
    serializeCombinator(combinator : any) : any {
        let b : any = new bare.createInstance(any,null);
        if (is(combinator, any)) {
            b.shows = combinator.shownNames.map((id : any) =>  {
                return id.name;
            }).toList();
            b.offset = combinator.offset;
            b.end = combinator.end;
        }else if (is(combinator, any)) {
            b.hides = combinator.hiddenNames.map((id : any) =>  {
                return id.name;
            }).toList();
        }else {
            throw new core.StateError(`Unexpected combinator type: ${combinator.runtimeType}`);
        }
        return b;
    }
    serializeCompilationUnit(compilationUnit : any) : any {
        compilationUnit.directives.accept(this);
        if (!this.hasCoreBeenImported) {
            this.unlinkedImports.add(new bare.createInstance(any,null,{
                isImplicit : true}));
        }
        compilationUnit.declarations.accept(this);
        let b : any = new bare.createInstance(any,null);
        b.lineStarts = ((t)=>(!!t)?t.lineStarts:null)(compilationUnit.lineInfo);
        b.isPartOf = this.isPartOf;
        b.libraryName = this.libraryName;
        b.libraryNameOffset = this.libraryNameOffset;
        b.libraryNameLength = this.libraryNameLength;
        b.libraryDocumentationComment = this.libraryDocumentationComment;
        b.libraryAnnotations = this.libraryAnnotations;
        b.codeRange = this.serializeCodeRange(compilationUnit);
        b.classes = this.classes;
        b.enums = this.enums;
        b.executables = this.executables;
        b.exports = this.exports;
        b.imports = this.unlinkedImports;
        b.parts = this.parts;
        b.references = this.unlinkedReferences;
        b.typedefs = this.typedefs;
        b.variables = this.variables;
        b.publicNamespace = computePublicNamespace(compilationUnit);
        _SummarizeAstVisitor._computeApiSignature(b);
        return b;
    }
    serializeConstExpr(forConst : boolean,localClosureIndexMap : core.DartMap<number,number>,expression : any,parameterNames? : core.DartSet<string>) : any {
        let serializer : _ConstExprSerializer = new _ConstExprSerializer(forConst,this,localClosureIndexMap,parameterNames);
        serializer.serialize(expression);
        return serializer.toBuilder();
    }
    serializeDeclaredIdentifier(scopeNode : any,documentationComment : any,annotations : any,isFinal : boolean,isConst : boolean,type : any,assignPropagatedTypeSlot : boolean,declaredIdentifier : any) : void {
        let b : any = new bare.createInstance(any,null);
        b.isFinal = isFinal;
        b.isConst = isConst;
        b.name = declaredIdentifier.name;
        b.nameOffset = declaredIdentifier.offset;
        b.type = this.serializeTypeName(type);
        b.documentationComment = this.serializeDocumentation(documentationComment);
        b.annotations = this.serializeAnnotations(annotations);
        b.codeRange = this.serializeCodeRange(declaredIdentifier);
        if (assignPropagatedTypeSlot) {
            b.propagatedTypeSlot = this.assignSlot();
        }
        b.visibleOffset = ((t)=>(!!t)?t.offset:null)(scopeNode);
        b.visibleLength = ((t)=>(!!t)?t.length:null)(scopeNode);
        this.variables.add(b);
    }
    serializeDocumentation(documentationComment : any) : any {
        if (op(Op.EQUALS,documentationComment,null)) {
            return null;
        }
        let text : string = documentationComment.tokens.map((t : any) =>  {
            return t.toString();
        }).join('\n').replaceAll('\n','\n');
        return new bare.createInstance(any,null,{
            text : text});
    }
    serializeDynamic() : any {
        let builder : any = new bare.createInstance(any,null);
        builder.reference = this.serializeReference(null,'dynamic');
        return builder;
    }
    serializeExecutable(node : any,name : string,nameOffset : number,isGetter : boolean,isSetter : boolean,returnType : any,formalParameters : any,body : any,isTopLevel : boolean,isDeclaredStatic : boolean,documentationComment : any,annotations : any,typeParameters : any,isExternal : boolean,serializeBodyExpr : boolean,serializeBody : boolean) : any {
        let oldScopesLength : number = this.scopes.length;
        let typeParameterScope : _TypeParameterScope = new _TypeParameterScope();
        this.scopes.add(typeParameterScope);
        let b : any = new bare.createInstance(any,null);
        let nameString : string = name;
        if (isGetter) {
            b.kind = UnlinkedExecutableKind.getter;
        }else if (isSetter) {
            b.kind = UnlinkedExecutableKind.setter;
            nameString = `${nameString}=`;
        }else {
            b.kind = UnlinkedExecutableKind.functionOrMethod;
        }
        b.isExternal = isExternal;
        b.isAbstract = !isExternal && is(body, any);
        b.isAsynchronous = body.isAsynchronous;
        b.isGenerator = body.isGenerator;
        b.name = nameString;
        b.nameOffset = nameOffset;
        b.typeParameters = this.serializeTypeParameters(typeParameters,typeParameterScope);
        if (!isTopLevel) {
            b.isStatic = isDeclaredStatic;
        }
        b.returnType = this.serializeTypeName(returnType);
        let isSemanticallyStatic : boolean = isTopLevel || isDeclaredStatic;
        if (formalParameters != null) {
            let oldMayInheritCovariance : boolean = this._parametersMayInheritCovariance;
            this._parametersMayInheritCovariance = !isTopLevel && !isDeclaredStatic;
            b.parameters = formalParameters.parameters.map((p : any) =>  {
                return p.accept(this) as any;
            }).toList();
            this._parametersMayInheritCovariance = oldMayInheritCovariance;
            if (!isSemanticallyStatic) {
                for(let i : number = 0; i < formalParameters.parameters.length; i++){
                    if (!op(Op.INDEX,b.parameters,i).isFunctionTyped && op(Op.EQUALS,op(Op.INDEX,b.parameters,i).type,null)) {
                        op(Op.INDEX,b.parameters,i).inferredTypeSlot = this.assignSlot();
                    }
                }
            }
        }
        b.documentationComment = this.serializeDocumentation(documentationComment);
        b.annotations = this.serializeAnnotations(annotations);
        b.codeRange = this.serializeCodeRange(node);
        if (op(Op.EQUALS,returnType,null) && !isSemanticallyStatic) {
            b.inferredReturnTypeSlot = this.assignSlot();
        }
        b.visibleOffset = ((t)=>(!!t)?t.offset:null)(this.enclosingBlock);
        b.visibleLength = ((t)=>(!!t)?t.length:null)(this.enclosingBlock);
        let oldParameterNames : core.DartSet<string> = this._parameterNames;
        if (formalParameters != null && formalParameters.parameters.isNotEmpty) {
            this._parameterNames = op(Op.EQUALS,this._parameterNames,null) ? new core.DartSet<string>() : this._parameterNames.toSet();
            this._parameterNames.addAll(formalParameters.parameters.map((p : any) =>  {
                return p.identifier.name;
            }));
        }
        this.serializeFunctionBody(b,null,body,serializeBodyExpr,serializeBody,false);
        this._parameterNames = oldParameterNames;
        this.scopes.removeLast();
        /* TODO (AssertStatementImpl) : assert (scopes.length == oldScopesLength); */;
        return b;
    }
    serializeFunctionBody(b : any,initializers : core.DartList<any>,body : any,serializeBodyExpr : boolean,serializeBody : boolean,forConst : boolean) : core.DartMap<number,number> {
        if (is(body, any) || is(body, any)) {
            for(let parameter of b.parameters) {
                if (!parameter.isInitializingFormal) {
                    parameter.visibleOffset = body.offset;
                    parameter.visibleLength = body.length;
                }
            }
        }
        let oldExecutables : core.DartList<any> = this.executables;
        let oldLabels : core.DartList<any> = this.labels;
        let oldVariables : core.DartList<any> = this.variables;
        let oldLocalClosureIndexMap : core.DartMap<number,number> = this._localClosureIndexMap;
        let oldSerializeClosureBodyExprs : boolean = this._serializeClosureBodyExprs;
        this.executables = new core.DartList.literal<any>();
        this.labels = new core.DartList.literal<any>();
        this.variables = new core.DartList.literal<any>();
        this._localClosureIndexMap = new core.DartMap.literal([
        ]);
        this._serializeClosureBodyExprs = serializeBodyExpr;
        if (initializers != null) {
            for(let initializer of initializers) {
                initializer.accept(this);
            }
        }
        if (serializeBody) {
            body.accept(this);
        }
        if (serializeBodyExpr) {
            if (is(body, any)) {
                b.bodyExpr = this.serializeConstExpr(forConst,this._localClosureIndexMap,body,this._parameterNames);
            }else if (is(body, any)) {
                b.bodyExpr = this.serializeConstExpr(forConst,this._localClosureIndexMap,body.expression,this._parameterNames);
            }else {
            }
        }
        b.localFunctions = this.executables;
        b.localLabels = this.labels;
        b.localVariables = this.variables;
        let localClosureIndexMap : core.DartMap<number,number> = this._localClosureIndexMap;
        this.executables = oldExecutables;
        this.labels = oldLabels;
        this.variables = oldVariables;
        this._localClosureIndexMap = oldLocalClosureIndexMap;
        this._serializeClosureBodyExprs = oldSerializeClosureBodyExprs;
        return localClosureIndexMap;
    }
    serializeFunctionTypedParameterDetails(b : any,returnType : any,parameters : any) : void {
        let serializedReturnType : any = this.serializeTypeName(returnType);
        if (serializedReturnType != null) {
            b.type = serializedReturnType;
        }
        let oldMayInheritCovariance : boolean = this._parametersMayInheritCovariance;
        this._parametersMayInheritCovariance = false;
        b.parameters = parameters.parameters.map((p : any) =>  {
            return p.accept(this) as any;
        }).toList();
        this._parametersMayInheritCovariance = oldMayInheritCovariance;
    }
    serializeGenericFunctionType(node : any) : any {
        let typeParameterScope : _TypeParameterScope = new _TypeParameterScope();
        this.scopes.add(typeParameterScope);
        let b : any = new bare.createInstance(any,null);
        b.entityKind = EntityRefKind.genericFunctionType;
        b.typeParameters = this.serializeTypeParameters(node.typeParameters,typeParameterScope);
        b.syntheticReturnType = op(Op.EQUALS,node.returnType,null) ? this.serializeDynamic() : this.serializeTypeName(node.returnType);
        b.syntheticParams = node.parameters.parameters.map((p : any) =>  {
            return p.accept(this) as any;
        }).toList();
        this.scopes.removeLast();
        return b;
    }
    serializeInitializerFunction(expression : any,serializeBodyExpr : boolean,forConst : boolean) : any {
        if (op(Op.EQUALS,expression,null)) {
            return null;
        }
        let initializer : any = new bare.createInstance(any,null,{
            nameOffset : expression.offset});
        this.serializeFunctionBody(initializer,null,expression,serializeBodyExpr,true,forConst);
        initializer.inferredReturnTypeSlot = this.assignSlot();
        return initializer;
    }
    serializeParameter(node : any) : any {
        let b : any = new bare.createInstance(any,null);
        b.name = ((t)=>(!!t)?t.name:null)(node.identifier);
        b.nameOffset = ((t)=>(!!t)?t.offset:null)(node.identifier);
        b.annotations = this.serializeAnnotations(node.metadata);
        b.codeRange = this.serializeCodeRange(node);
        b.isExplicitlyCovariant = node.covariantKeyword != null;
        b.isFinal = node.isFinal;
        if (this._parametersMayInheritCovariance) {
            b.inheritsCovariantSlot = this.assignSlot();
        }
        switch (node.kind) {
            case ParameterKind.REQUIRED:
                b.kind = UnlinkedParamKind.required;
                break;
            case ParameterKind.POSITIONAL:
                b.kind = UnlinkedParamKind.positional;
                break;
            case ParameterKind.NAMED:
                b.kind = UnlinkedParamKind.named;
                break;
            default:
                throw new core.StateError(`Unexpected parameter kind: ${node.kind}`);
        }
        return b;
    }
    serializeReference(prefixIndex : number,name : string) : number {
        return this.nameToReference.putIfAbsent(prefixIndex,() =>  {
            return new core.DartMap.literal([
            ]);
        }).putIfAbsent(name,() =>  {
            let index : number = this.unlinkedReferences.length;
            this.unlinkedReferences.add(new bare.createInstance(any,null,{
                prefixReference : prefixIndex,name : name}));
            return index;
        });
    }
    serializeSimpleReference(name : string) : number {
        let indexOffset : number = 0;
        for(let i : number = this.scopes.length - 1; i >= 0; i--){
            let scope : _Scope = this.scopes[i];
            let entity : _ScopedEntity = op(Op.INDEX,scope,name);
            if (entity != null) {
                if (is(entity, _ScopedClassMember)) {
                    return this.serializeReference(this.serializeReference(null,entity.className),name);
                }else if (is(entity, _ScopedTypeParameter)) {
                    let paramReference : number = indexOffset + entity.index;
                    return -paramReference;
                }
            }
            if (is(scope, _TypeParameterScope)) {
                indexOffset += scope.length;
            }
        }
        return this.serializeReference(null,name);
    }
    serializeType(identifier : any,typeArguments : any) : any {
        if (op(Op.EQUALS,identifier,null)) {
            return null;
        }else {
            let b : any = new bare.createInstance(any,null);
            if (is(identifier, any)) {
                let name : string = identifier.name;
                let indexOffset : number = 0;
                for(let i : number = this.scopes.length - 1; i >= 0; i--){
                    let scope : _Scope = this.scopes[i];
                    let entity : _ScopedEntity = op(Op.INDEX,scope,name);
                    if (entity != null) {
                        if (is(entity, _ScopedTypeParameter)) {
                            b.paramReference = indexOffset + entity.index;
                            return b;
                        }else {
                            b.reference = this.serializeReference(null,'dynamic');
                            return b;
                        }
                    }
                    if (is(scope, _TypeParameterScope)) {
                        indexOffset += scope.length;
                    }
                }
                b.reference = this.serializeReference(null,name);
            }else if (is(identifier, any)) {
                let prefixIndex : number = this.serializeSimpleReference(identifier.prefix.name);
                if (prefixIndex < 0) {
                    b.reference = this.serializeReference(null,'dynamic');
                    return b;
                }else {
                    b.reference = this.serializeReference(prefixIndex,identifier.identifier.name);
                }
            }else {
                throw new core.StateError(`Unexpected identifier type: ${identifier.runtimeType}`);
            }
            if (typeArguments != null) {
                b.typeArguments = typeArguments.arguments.map(this.serializeTypeName.bind(this)).toList();
            }
            return b;
        }
    }
    serializeTypeName(node : any) : any {
        if (is(node, any)) {
            return this.serializeType(((t)=>(!!t)?t.name:null)(node),((t)=>(!!t)?t.typeArguments:null)(node));
        }else if (is(node, any)) {
            return this.serializeGenericFunctionType(node);
        }else if (node != null) {
            throw new core.ArgumentError(`Cannot serialize a ${node.runtimeType}`);
        }
        return null;
    }
    serializeTypeParameters(typeParameters : any,typeParameterScope : _TypeParameterScope) : core.DartList<any> {
        if (typeParameters != null) {
            for(let i : number = 0; i < typeParameters.typeParameters.length; i++){
                let typeParameter : any = op(Op.INDEX,typeParameters.typeParameters,i);
                op(Op.INDEX_ASSIGN,typeParameterScope,typeParameter.name.name,new _ScopedTypeParameter(op(Op.MINUS,typeParameters.typeParameters.length,i)));
            }
            return typeParameters.typeParameters.map(this.visitTypeParameter.bind(this)).toList();
        }
        return new core.DartList.literal<any>();
    }
    serializeVariables(scopeNode : any,variables : any,isDeclaredStatic : boolean,documentationComment : any,annotations : any,isField : boolean) : void {
        let isCovariant : boolean = isField ? (variables.parent as any).covariantKeyword != null : false;
        for(let variable of variables.variables) {
            let b : any = new bare.createInstance(any,null);
            b.isConst = variables.isConst;
            b.isCovariant = isCovariant;
            b.isFinal = variables.isFinal;
            b.isStatic = isDeclaredStatic;
            b.name = variable.name.name;
            b.nameOffset = variable.name.offset;
            b.type = this.serializeTypeName(variables.type);
            b.documentationComment = this.serializeDocumentation(documentationComment);
            b.annotations = this.serializeAnnotations(annotations);
            b.codeRange = this.serializeCodeRange(variables.parent);
            let serializeBodyExpr : boolean = variable.isConst || variable.isFinal && isField && !isDeclaredStatic || op(Op.EQUALS,variables.type,null);
            b.initializer = this.serializeInitializerFunction(variable.initializer,serializeBodyExpr,b.isConst);
            if (isField && !isDeclaredStatic && !variables.isFinal) {
                b.inheritsCovariantSlot = this.assignSlot();
            }
            if (variable.initializer != null && (variables.isFinal || variables.isConst)) {
                b.propagatedTypeSlot = this.assignSlot();
            }
            let isSemanticallyStatic : boolean = !isField || isDeclaredStatic;
            if (op(Op.EQUALS,variables.type,null) && (variable.initializer != null || !isSemanticallyStatic)) {
                b.inferredTypeSlot = this.assignSlot();
            }
            b.visibleOffset = ((t)=>(!!t)?t.offset:null)(scopeNode);
            b.visibleLength = ((t)=>(!!t)?t.length:null)(scopeNode);
            this.variables.add(b);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : any) : void {
        let oldBlock : any = this.enclosingBlock;
        this.enclosingBlock = node;
        super.visitBlock(node);
        this.enclosingBlock = oldBlock;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCatchClause(node : any) : void {
        let exception : any = node.exceptionParameter;
        let st : any = node.stackTraceParameter;
        if (exception != null) {
            this.serializeDeclaredIdentifier(node,null,null,false,false,node.exceptionType,false,exception);
        }
        if (st != null) {
            this.serializeDeclaredIdentifier(node,null,null,false,false,null,false,st);
        }
        super.visitCatchClause(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : void {
        let superclass : any = op(Op.EQUALS,node.extendsClause,null) ? null : node.extendsClause.superclass;
        this.serializeClass(node,node.abstractKeyword,node.name.name,node.name.offset,node.typeParameters,superclass,node.withClause,node.implementsClause,node.members,false,node.documentationComment,node.metadata);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) : void {
        this.serializeClass(node,node.abstractKeyword,node.name.name,node.name.offset,node.typeParameters,node.superclass,node.withClause,node.implementsClause,null,true,node.documentationComment,node.metadata);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : void {
        let b : any = new bare.createInstance(any,null);
        if (node.name != null) {
            b.name = node.name.name;
            b.nameOffset = node.name.offset;
            b.periodOffset = node.period.offset;
            b.nameEnd = node.name.end;
        }else {
            b.nameOffset = node.returnType.offset;
        }
        b.parameters = node.parameters.parameters.map((p : any) =>  {
            return p.accept(this) as any;
        }).toList();
        b.kind = UnlinkedExecutableKind.constructor;
        if (node.factoryKeyword != null) {
            b.isFactory = true;
            if (node.redirectedConstructor != null) {
                b.isRedirectedConstructor = true;
                let typeName : any = node.redirectedConstructor.type;
                let localClosureIndexMap : core.DartMap<number,number> = null;
                b.redirectedConstructor = new _ConstExprSerializer(true,this,localClosureIndexMap,null).serializeConstructorRef(null,typeName.name,typeName.typeArguments,node.redirectedConstructor.name);
            }
        }else {
            for(let initializer of node.initializers) {
                if (is(initializer, any)) {
                    b.isRedirectedConstructor = true;
                    b.redirectedConstructorName = ((t)=>(!!t)?t.name:null)(initializer.constructorName);
                }
            }
        }
        if (node.constKeyword != null) {
            b.isConst = true;
            b.constCycleSlot = this.assignSlot();
        }
        b.isExternal = node.externalKeyword != null || is(node.body, any);
        b.documentationComment = this.serializeDocumentation(node.documentationComment);
        b.annotations = this.serializeAnnotations(node.metadata);
        b.codeRange = this.serializeCodeRange(node);
        let localClosureIndexMap : core.DartMap<number,number> = this.serializeFunctionBody(b,node.initializers,node.body,node.constKeyword != null,false,false);
        if (node.constKeyword != null) {
            let constructorParameterNames : core.DartSet<string> = node.parameters.parameters.map((p : any) =>  {
                return p.identifier.name;
            }).toSet();
            b.constantInitializers = node.initializers.map((initializer : any) =>  {
                return serializeConstructorInitializer(initializer,(expr : any) =>  {
                    return this.serializeConstExpr(true,localClosureIndexMap,expr,constructorParameterNames);
                });
            }).toList();
        }
        this.executables.add(b);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDefaultFormalParameter(node : any) : any {
        let b : any = node.parameter.accept(this) as any;
        b.initializer = this.serializeInitializerFunction(node.defaultValue,true,true);
        if (node.defaultValue != null) {
            b.defaultValueCode = node.defaultValue.toSource();
        }
        b.codeRange = this.serializeCodeRange(node);
        return b;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumDeclaration(node : any) : void {
        let b : any = new bare.createInstance(any,null);
        b.name = node.name.name;
        b.nameOffset = node.name.offset;
        b.values = node.constants.map((value : any) =>  {
            return new bare.createInstance(any,null,{
                documentationComment : this.serializeDocumentation(value.documentationComment),name : value.name.name,nameOffset : value.name.offset});
        }).toList();
        b.documentationComment = this.serializeDocumentation(node.documentationComment);
        b.annotations = this.serializeAnnotations(node.metadata);
        b.codeRange = this.serializeCodeRange(node);
        this.enums.add(b);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : void {
        let b : any = new bare.createInstance(any,null,{
            uriOffset : node.uri.offset,uriEnd : node.uri.end,offset : node.offset});
        b.annotations = this.serializeAnnotations(node.metadata);
        this.exports.add(b);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldDeclaration(node : any) : void {
        this.serializeVariables(null,node.fields,node.staticKeyword != null,node.documentationComment,node.metadata,true);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldFormalParameter(node : any) : any {
        let b : any = this.serializeParameter(node);
        b.isInitializingFormal = true;
        if (node.type != null || node.parameters != null) {
            b.isFunctionTyped = node.parameters != null;
            if (node.parameters != null) {
                this.serializeFunctionTypedParameterDetails(b,node.type,node.parameters);
            }else {
                b.type = this.serializeTypeName(node.type);
            }
        }
        return b;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) : void {
        let loopVariable : any = node.loopVariable;
        if (loopVariable != null) {
            this.serializeDeclaredIdentifier(node,loopVariable.documentationComment,loopVariable.metadata,loopVariable.isFinal,loopVariable.isConst,loopVariable.type,true,loopVariable.identifier);
        }
        super.visitForEachStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : void {
        let declaredVariables : any = node.variables;
        if (declaredVariables != null) {
            this.serializeVariables(node,declaredVariables,false,null,null,false);
        }
        super.visitForStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : void {
        this.executables.add(this.serializeExecutable(node,node.name.name,node.name.offset,node.isGetter,node.isSetter,node.returnType,node.functionExpression.parameters,node.functionExpression.body,true,false,node.documentationComment,node.metadata,node.functionExpression.typeParameters,node.externalKeyword != null || is(node.functionExpression.body, any),false,is(node.parent, any)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : void {
        if (isNot(node.parent, any)) {
            if (this._localClosureIndexMap != null) {
                this._localClosureIndexMap.set(node.offset,this.executables.length);
            }
            this.executables.add(this.serializeExecutable(node,null,node.offset,false,false,null,node.parameters,node.body,false,false,null,null,node.typeParameters,false,this._serializeClosureBodyExprs,true));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) : void {
        let oldScopesLength : number = this.scopes.length;
        let typeParameterScope : _TypeParameterScope = new _TypeParameterScope();
        this.scopes.add(typeParameterScope);
        let b : any = new bare.createInstance(any,null);
        b.name = node.name.name;
        b.nameOffset = node.name.offset;
        b.typeParameters = this.serializeTypeParameters(node.typeParameters,typeParameterScope);
        let serializedReturnType : any = this.serializeTypeName(node.returnType);
        if (serializedReturnType != null) {
            b.returnType = serializedReturnType;
        }
        b.parameters = node.parameters.parameters.map((p : any) =>  {
            return p.accept(this) as any;
        }).toList();
        b.documentationComment = this.serializeDocumentation(node.documentationComment);
        b.annotations = this.serializeAnnotations(node.metadata);
        b.codeRange = this.serializeCodeRange(node);
        this.typedefs.add(b);
        this.scopes.removeLast();
        /* TODO (AssertStatementImpl) : assert (scopes.length == oldScopesLength); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypedFormalParameter(node : any) : any {
        let b : any = this.serializeParameter(node);
        b.isFunctionTyped = true;
        this.serializeFunctionTypedParameterDetails(b,node.returnType,node.parameters);
        return b;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericTypeAlias(node : any) : void {
        let oldScopesLength : number = this.scopes.length;
        let typeParameterScope : _TypeParameterScope = new _TypeParameterScope();
        this.scopes.add(typeParameterScope);
        let b : any = new bare.createInstance(any,null);
        b.style = TypedefStyle.genericFunctionType;
        b.name = node.name.name;
        b.nameOffset = node.name.offset;
        b.typeParameters = this.serializeTypeParameters(node.typeParameters,typeParameterScope);
        let functionType : any = node.functionType;
        let serializedType : any = op(Op.EQUALS,functionType,null) ? null : this.serializeGenericFunctionType(functionType);
        if (serializedType != null) {
            b.returnType = serializedType;
        }
        b.documentationComment = this.serializeDocumentation(node.documentationComment);
        b.annotations = this.serializeAnnotations(node.metadata);
        b.codeRange = this.serializeCodeRange(node);
        this.typedefs.add(b);
        this.scopes.removeLast();
        /* TODO (AssertStatementImpl) : assert (scopes.length == oldScopesLength); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : void {
        let b : any = new bare.createInstance(any,null);
        b.annotations = this.serializeAnnotations(node.metadata);
        if (op(Op.EQUALS,node.uri.stringValue,'dart:core')) {
            this.hasCoreBeenImported = true;
        }
        b.offset = node.offset;
        b.combinators = node.combinators.map(this.serializeCombinator.bind(this)).toList();
        b.configurations = node.configurations.map(serializeConfiguration).toList();
        if (node.prefix != null) {
            b.prefixReference = this.serializeReference(null,node.prefix.name);
            b.prefixOffset = node.prefix.offset;
        }
        b.isDeferred = node.deferredKeyword != null;
        b.uri = node.uri.stringValue;
        b.uriOffset = node.uri.offset;
        b.uriEnd = node.uri.end;
        this.unlinkedImports.add(b);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabel(node : any) : void {
        let parent : any = node.parent;
        if (isNot(parent, any)) {
            this.labels.add(new bare.createInstance(any,null,{
                name : node.label.name,nameOffset : node.offset,isOnSwitchMember : is(parent, any),isOnSwitchStatement : is(parent, any) && is(parent.statement, any)}));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryDirective(node : any) : void {
        this.libraryName = node.name.components.map((id : any) =>  {
            return id.name;
        }).join('.');
        this.libraryNameOffset = node.name.offset;
        this.libraryNameLength = node.name.length;
        this.isCoreLibrary = this.libraryName == 'dart.core';
        this.libraryDocumentationComment = this.serializeDocumentation(node.documentationComment);
        this.libraryAnnotations = this.serializeAnnotations(node.metadata);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : void {
        this.executables.add(this.serializeExecutable(node,node.name.name,node.name.offset,node.isGetter,node.isSetter,node.returnType,node.parameters,node.body,false,node.isStatic,node.documentationComment,node.metadata,node.typeParameters,node.externalKeyword != null || is(node.body, any),false,false));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartDirective(node : any) : void {
        this.parts.add(new bare.createInstance(any,null,{
            uriOffset : node.uri.offset,uriEnd : node.uri.end,annotations : this.serializeAnnotations(node.metadata)}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartOfDirective(node : any) : void {
        this.isCoreLibrary = op(Op.EQUALS,((t)=>(!!t)?t.name:null)(node.libraryName),'dart.core');
        this.isPartOf = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleFormalParameter(node : any) : any {
        let b : any = this.serializeParameter(node);
        b.type = this.serializeTypeName(node.type);
        return b;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTopLevelVariableDeclaration(node : any) : void {
        this.serializeVariables(null,node.variables,false,node.documentationComment,node.metadata,false);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameter(node : any) : any {
        let b : any = new bare.createInstance(any,null);
        b.name = node.name.name;
        b.nameOffset = node.name.offset;
        if (node.bound != null) {
            b.bound = this.serializeTypeName(node.bound);
        }
        b.annotations = this.serializeAnnotations(node.metadata);
        b.codeRange = this.serializeCodeRange(node);
        return b;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationStatement(node : any) : void {
        this.serializeVariables(this.enclosingBlock,node.variables,false,null,null,false);
    }
    static _computeApiSignature(b : any) : void {
        let apiSignature : any = new bare.createInstance(any,null);
        b.collectApiSignature(apiSignature);
        b.apiSignature = apiSignature.toByteList();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SummarizeAstVisitor() {
        this.classes = new core.DartList.literal<any>();
        this.enums = new core.DartList.literal<any>();
        this.executables = new core.DartList.literal<any>();
        this.exports = new core.DartList.literal<any>();
        this.labels = new core.DartList.literal<any>();
        this.parts = new core.DartList.literal<any>();
        this.typedefs = new core.DartList.literal<any>();
        this.variables = new core.DartList.literal<any>();
        this.unlinkedImports = new core.DartList.literal<any>();
        this.unlinkedReferences = new core.DartList.literal<any>(new bare.createInstance(any,null));
        this.scopes = new core.DartList.literal<_Scope>();
        this.hasCoreBeenImported = false;
        this.nameToReference = new core.DartMap.literal([
        ]);
        this.isCoreLibrary = false;
        this.isPartOf = false;
        this.libraryAnnotations = new core.DartList.literal<any>();
        this.numSlots = 0;
        this.enclosingBlock = null;
        this._serializeClosureBodyExprs = false;
        this._parametersMayInheritCovariance = false;
    }
}

export namespace _ScopedClassMember {
    export type Constructors = _ScopedEntity.Constructors | '_ScopedClassMember';
    export type Interface = Omit<_ScopedClassMember, Constructors>;
}
@DartClass
export class _ScopedClassMember extends _ScopedEntity {
    className : string;

    constructor(className : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ScopedClassMember(className : string) {
        this.className = className;
    }
}

export namespace _ScopedTypeParameter {
    export type Constructors = _ScopedEntity.Constructors | '_ScopedTypeParameter';
    export type Interface = Omit<_ScopedTypeParameter, Constructors>;
}
@DartClass
export class _ScopedTypeParameter extends _ScopedEntity {
    index : number;

    constructor(index : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ScopedTypeParameter(index : number) {
        this.index = index;
    }
}

export namespace _TypeParameterScope {
    export type Constructors = _Scope.Constructors | '_TypeParameterScope';
    export type Interface = Omit<_TypeParameterScope, Constructors>;
}
@DartClass
export class _TypeParameterScope extends _Scope {
    get length() : number {
        return this._definedNames.length;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TypeParameterScope() {
    }
}

export class properties {
}
