/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/element/builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace CompilationUnitBuilder {
    export type Constructors = 'CompilationUnitBuilder';
    export type Interface = Omit<CompilationUnitBuilder, Constructors>;
}
@DartClass
export class CompilationUnitBuilder {
    buildCompilationUnit(source : any,unit : any,librarySource : any) : any {
        return PerformanceStatistics.resolve.makeCurrentWhile(() =>  {
            if (op(Op.EQUALS,unit,null)) {
                return null;
            }
            let holder : any = new bare.createInstance(any,null);
            let element : any = new bare.createInstance(any,null,source.shortName);
            let builder : ElementBuilder = new ElementBuilder(holder,element);
            unit.accept(builder);
            element.accessors = holder.accessors;
            element.enums = holder.enums;
            element.functions = holder.functions;
            element.source = source;
            element.librarySource = librarySource;
            element.typeAliases = holder.typeAliases;
            element.types = holder.types;
            element.topLevelVariables = holder.topLevelVariables;
            unit.element = element;
            holder.validate();
            return element;
        });
    }
    constructor() {
    }
    @defaultConstructor
    CompilationUnitBuilder() {
    }
}

export namespace DirectiveElementBuilder {
    export type Constructors = 'DirectiveElementBuilder';
    export type Interface = Omit<DirectiveElementBuilder, Constructors>;
}
@DartClass
export class DirectiveElementBuilder extends any {
    context : any;

    libraryElement : any;

    sourceModificationTimeMap : core.DartMap<any,number>;

    importLibraryMap : core.DartMap<any,any>;

    importSourceKindMap : core.DartMap<any,any>;

    exportLibraryMap : core.DartMap<any,any>;

    exportSourceKindMap : core.DartMap<any,any>;

    imports : core.DartList<any>;

    exports : core.DartList<any>;

    errors : core.DartList<any>;

    nameToPrefixMap : core.DartHashMap<string,any>;

    explicitlyImportsCore : boolean;

    constructor(context : any,libraryElement : any,sourceModificationTimeMap : core.DartMap<any,number>,importLibraryMap : core.DartMap<any,any>,importSourceKindMap : core.DartMap<any,any>,exportLibraryMap : core.DartMap<any,any>,exportSourceKindMap : core.DartMap<any,any>) {
    }
    @defaultConstructor
    DirectiveElementBuilder(context : any,libraryElement : any,sourceModificationTimeMap : core.DartMap<any,number>,importLibraryMap : core.DartMap<any,any>,importSourceKindMap : core.DartMap<any,any>,exportLibraryMap : core.DartMap<any,any>,exportSourceKindMap : core.DartMap<any,any>) {
        this.imports = new core.DartList.literal<any>();
        this.exports = new core.DartList.literal<any>();
        this.errors = new core.DartList.literal<any>();
        this.nameToPrefixMap = new core.DartHashMap<string,any>();
        this.explicitlyImportsCore = false;
        this.context = context;
        this.libraryElement = libraryElement;
        this.sourceModificationTimeMap = sourceModificationTimeMap;
        this.importLibraryMap = importLibraryMap;
        this.importSourceKindMap = importSourceKindMap;
        this.exportLibraryMap = exportLibraryMap;
        this.exportSourceKindMap = exportSourceKindMap;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) : core.DartObject {
        for(let directive of node.directives) {
            directive.accept(this);
        }
        let librarySource : any = this.libraryElement.source;
        let coreLibrarySource : any = this.context.sourceFactory.forUri(DartSdk.DART_CORE);
        if (!this.explicitlyImportsCore && coreLibrarySource != librarySource) {
            let importElement : any = new bare.createInstance(any,null,-1);
            importElement.importedLibrary = this.importLibraryMap.get(coreLibrarySource);
            importElement.isSynthetic = true;
            this.imports.add(importElement);
        }
        this.libraryElement.imports = this.imports;
        this.libraryElement.exports = this.exports;
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : core.DartObject {
        node.element = null;
        let exportedSource : any = node.selectedSource;
        let exportedTime : number = (this.sourceModificationTimeMap.get(exportedSource) || -1);
        let exportedLibrary : any = this.exportLibraryMap.get(exportedSource);
        if (exportedLibrary != null) {
            let exportElement : any = new bare.createInstance(any,null,node.offset);
            exportElement.metadata = this._getElementAnnotations(node.metadata);
            let uriLiteral : any = node.uri;
            if (uriLiteral != null) {
                exportElement.uriOffset = uriLiteral.offset;
                exportElement.uriEnd = uriLiteral.end;
            }
            exportElement.uri = node.selectedUriContent;
            exportElement.combinators = DirectiveElementBuilder._buildCombinators(node);
            exportElement.exportedLibrary = exportedLibrary;
            setElementDocumentationComment(exportElement,node);
            node.element = exportElement;
            this.exports.add(exportElement);
            if (exportedTime >= 0 && this.exportSourceKindMap.get(exportedSource) != SourceKind.LIBRARY) {
                let offset : number = node.offset;
                let length : number = node.length;
                if (uriLiteral != null) {
                    offset = uriLiteral.offset;
                    length = uriLiteral.length;
                }
                this.errors.add(new bare.createInstance(any,null,this.libraryElement.source,offset,length,CompileTimeErrorCode.EXPORT_OF_NON_LIBRARY,new core.DartList.literal(uriLiteral.toSource())));
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : core.DartObject {
        node.element = null;
        let importedSource : any = node.selectedSource;
        let importedTime : number = (this.sourceModificationTimeMap.get(importedSource) || -1);
        let importedLibrary : any = this.importLibraryMap.get(importedSource);
        if (importedLibrary != null) {
            if (importedLibrary.isDartCore) {
                this.explicitlyImportsCore = true;
            }
            let importElement : any = new bare.createInstance(any,null,node.offset);
            importElement.metadata = this._getElementAnnotations(node.metadata);
            let uriLiteral : any = node.uri;
            if (uriLiteral != null) {
                importElement.uriOffset = uriLiteral.offset;
                importElement.uriEnd = uriLiteral.end;
            }
            importElement.uri = node.selectedUriContent;
            importElement.deferred = node.deferredKeyword != null;
            importElement.combinators = DirectiveElementBuilder._buildCombinators(node);
            importElement.importedLibrary = importedLibrary;
            setElementDocumentationComment(importElement,node);
            let prefixNode : any = node.prefix;
            if (prefixNode != null) {
                importElement.prefixOffset = prefixNode.offset;
                let prefixName : string = prefixNode.name;
                let prefix : any = op(Op.INDEX,this.nameToPrefixMap,prefixName);
                if (op(Op.EQUALS,prefix,null)) {
                    prefix = new bare.createInstance(any,null,prefixNode);
                    op(Op.INDEX_ASSIGN,this.nameToPrefixMap,prefixName,prefix);
                }
                importElement.prefix = prefix;
                prefixNode.staticElement = prefix;
            }
            node.element = importElement;
            this.imports.add(importElement);
            if (importedTime >= 0 && this.importSourceKindMap.get(importedSource) != SourceKind.LIBRARY) {
                let offset : number = node.offset;
                let length : number = node.length;
                if (uriLiteral != null) {
                    offset = uriLiteral.offset;
                    length = uriLiteral.length;
                }
                let errorCode : any = importElement.isDeferred ? StaticWarningCode.IMPORT_OF_NON_LIBRARY : CompileTimeErrorCode.IMPORT_OF_NON_LIBRARY;
                this.errors.add(new bare.createInstance(any,null,this.libraryElement.source,offset,length,errorCode,new core.DartList.literal(uriLiteral.toSource())));
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryDirective(node : any) : core.DartObject {
        ((t)=>(!!t)?t.metadata:null)((node.element as any)) = this._getElementAnnotations(node.metadata);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartDirective(node : any) : core.DartObject {
        ((t)=>(!!t)?t.metadata:null)((node.element as any)) = this._getElementAnnotations(node.metadata);
        return null;
    }
    _getElementAnnotations(metadata : any) : core.DartList<any> {
        if (metadata.isEmpty) {
            return ElementAnnotation.EMPTY_LIST;
        }
        return metadata.map((a : any) =>  {
            return a.elementAnnotation;
        }).toList();
    }
    static _buildCombinators(directive : any) : core.DartList<any> {
        let namespaceCombinatorBuilder : _NamespaceCombinatorBuilder = new _NamespaceCombinatorBuilder();
        for(let combinator of directive.combinators) {
            combinator.accept(namespaceCombinatorBuilder);
        }
        return namespaceCombinatorBuilder.combinators;
    }
}

export namespace _BaseElementBuilder {
    export type Constructors = '_BaseElementBuilder';
    export type Interface = Omit<_BaseElementBuilder, Constructors>;
}
@DartClass
export class _BaseElementBuilder extends any {
    _unitElement : any;

    _currentHolder : any;

    constructor(_currentHolder : any,_unitElement : any) {
    }
    @defaultConstructor
    _BaseElementBuilder(_currentHolder : any,_unitElement : any) {
        this._currentHolder = _currentHolder;
        this._unitElement = _unitElement;
    }
    buildParameterInitializer(parameter : any,defaultValue : any) : void {
        if (defaultValue != null) {
            let holder : any = new bare.createInstance(any,null);
            this._visit(holder,defaultValue);
            let initializer : any = new bare.createInstance(any,null,defaultValue.beginToken.offset);
            initializer.hasImplicitReturnType = true;
            initializer.functions = holder.functions;
            initializer.labels = holder.labels;
            initializer.localVariables = holder.localVariables;
            initializer.parameters = holder.parameters;
            initializer.isSynthetic = true;
            initializer.type = new bare.createInstance(any,null,initializer);
            parameter.initializer = initializer;
            parameter.defaultValueCode = defaultValue.toSource();
            holder.validate();
        }
    }
    buildVariableInitializer(variable : any,initializer : any) : void {
        if (initializer != null) {
            let holder : any = new bare.createInstance(any,null);
            this._visit(holder,initializer);
            let initializerElement : any = new bare.createInstance(any,null,initializer.beginToken.offset);
            initializerElement.hasImplicitReturnType = true;
            initializerElement.functions = holder.functions;
            initializerElement.labels = holder.labels;
            initializerElement.localVariables = holder.localVariables;
            initializerElement.isSynthetic = true;
            initializerElement.type = new bare.createInstance(any,null,initializerElement);
            variable.initializer = initializerElement;
            holder.validate();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDefaultFormalParameter(node : any) : core.DartObject {
        let normalParameter : any = node.parameter;
        let parameterName : any = normalParameter.identifier;
        let parameter : any;
        if (is(normalParameter, any)) {
            let fieldParameter : any = new bare.createInstance(any,null,parameterName);
            this._setFieldParameterField(node,fieldParameter);
            parameter = fieldParameter;
        }else {
            parameter = new bare.createInstance(any,null,parameterName);
        }
        this._setCodeRange(parameter,node);
        parameter.isConst = node.isConst;
        parameter.isExplicitlyCovariant = node.parameter.covariantKeyword != null;
        parameter.isFinal = node.isFinal;
        parameter.parameterKind = node.kind;
        this._setParameterVisibleRange(node,parameter);
        if (is(normalParameter, any) && op(Op.EQUALS,normalParameter.type,null)) {
            parameter.hasImplicitType = true;
        }
        this._currentHolder.addParameter(parameter);
        if (is(normalParameter, any)) {
            normalParameter.element = parameter;
        }
        ((t)=>(!!t)?t.staticElement:null)(parameterName) = parameter;
        normalParameter.accept(this);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldFormalParameter(node : any) : core.DartObject {
        if (isNot(node.parent, any)) {
            let parameterName : any = node.identifier;
            let parameter : any = new bare.createInstance(any,null,parameterName);
            this._setCodeRange(parameter,node);
            this._setFieldParameterField(node,parameter);
            parameter.isConst = node.isConst;
            parameter.isExplicitlyCovariant = node.covariantKeyword != null;
            parameter.isFinal = node.isFinal;
            parameter.parameterKind = node.kind;
            this._currentHolder.addParameter(parameter);
            parameterName.staticElement = parameter;
        }
        let holder : any = new bare.createInstance(any,null);
        this._visitChildren(holder,node);
        let element : any = node.element;
        element.metadata = this._createElementAnnotations(node.metadata);
        element.parameters = holder.parameters;
        element.typeParameters = holder.typeParameters;
        holder.validate();
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypedFormalParameter(node : any) : core.DartObject {
        if (isNot(node.parent, any)) {
            let parameterName : any = node.identifier;
            let parameter : any = new bare.createInstance(any,null,parameterName);
            this._setCodeRange(parameter,node);
            parameter.isConst = node.isConst;
            parameter.isExplicitlyCovariant = node.covariantKeyword != null;
            parameter.isFinal = node.isFinal;
            parameter.parameterKind = node.kind;
            this._setParameterVisibleRange(node,parameter);
            this._currentHolder.addParameter(parameter);
            parameterName.staticElement = parameter;
        }
        let holder : any = new bare.createInstance(any,null);
        this._visitChildren(holder,node);
        let element : any = node.element;
        element.metadata = this._createElementAnnotations(node.metadata);
        element.parameters = holder.parameters;
        element.typeParameters = holder.typeParameters;
        holder.validate();
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericFunctionType(node : any) : core.DartObject {
        let holder : any = new bare.createInstance(any,null);
        this._visitChildren(holder,node);
        let element : any = new bare.createInstance(any,null,node.beginToken.offset);
        this._setCodeRange(element,node);
        element.parameters = holder.parameters;
        element.typeParameters = holder.typeParameters;
        let type : any = new bare.createInstance(any,null,element);
        element.type = type;
        (node as any).type = type;
        holder.validate();
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleFormalParameter(node : any) : core.DartObject {
        let parameter : any;
        if (isNot(node.parent, any)) {
            let parameterName : any = node.identifier;
            parameter = new bare.createInstance(any,null,parameterName);
            this._setCodeRange(parameter,node);
            parameter.isConst = node.isConst;
            parameter.isExplicitlyCovariant = node.covariantKeyword != null;
            parameter.isFinal = node.isFinal;
            parameter.parameterKind = node.kind;
            this._setParameterVisibleRange(node,parameter);
            if (op(Op.EQUALS,node.type,null)) {
                parameter.hasImplicitType = true;
            }
            this._currentHolder.addParameter(parameter);
            (node as any).element = parameter;
            ((t)=>(!!t)?t.staticElement:null)(parameterName) = parameter;
        }
        super.visitSimpleFormalParameter(node);
        parameter = ( parameter ) || ( node.element );
        ((t)=>(!!t)?t.metadata:null)(parameter) = this._createElementAnnotations(node.metadata);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameter(node : any) : core.DartObject {
        let parameterName : any = node.name;
        let typeParameter : any = new bare.createInstance(any,null,parameterName);
        this._setCodeRange(typeParameter,node);
        typeParameter.metadata = this._createElementAnnotations(node.metadata);
        let typeParameterType : any = new bare.createInstance(any,null,typeParameter);
        typeParameter.type = typeParameterType;
        this._currentHolder.addTypeParameter(typeParameter);
        parameterName.staticElement = typeParameter;
        return super.visitTypeParameter(node);
    }
    _createElementAnnotations(annotations : any) : core.DartList<any> {
        if (annotations.isEmpty) {
            return ElementAnnotation.EMPTY_LIST;
        }
        return annotations.map((a : any) =>  {
            let elementAnnotation : any = new bare.createInstance(any,null,this._unitElement);
            a.elementAnnotation = elementAnnotation;
            return elementAnnotation;
        }).toList();
    }
    _getFunctionBody(parameter : any) : any {
        let parent : any = ((t)=>(!!t)?t.parent:null)(((t)=>(!!t)?t.parent:null)(parameter));
        if (is(parent, any)) {
            return parent.body;
        }else if (is(parent, any)) {
            return parent.body;
        }else if (is(parent, any)) {
            return parent.body;
        }
        return null;
    }
    _setCodeRange(element : any,node : any) : void {
        element.setCodeRange(node.offset,node.length);
    }
    _setFieldParameterField(node : any,element : any) : void {
    }
    _setParameterVisibleRange(node : any,element : any) : void {
        let body : any = this._getFunctionBody(node);
        if (is(body, any) || is(body, any)) {
            element.setVisibleRange(body.offset,body.length);
        }
    }
    _setVariableDeclarationListAnnotations(node : any,elementAnnotations : core.DartList<any>) : void {
        for(let variableDeclaration of node.variables) {
            let element : any = variableDeclaration.element as any;
            this._setCodeRange(element,node.parent);
            element.metadata = elementAnnotations;
        }
    }
    _visit(holder : any,node : any) : void {
        if (node != null) {
            let previousHolder : any = this._currentHolder;
            this._currentHolder = holder;
            try {
                node.accept(this);
            } finally {
                this._currentHolder = previousHolder;
            }
        }
    }
    _visitChildren(holder : any,node : any) : void {
        if (node != null) {
            let previousHolder : any = this._currentHolder;
            this._currentHolder = holder;
            try {
                node.visitChildren(this);
            } finally {
                this._currentHolder = previousHolder;
            }
        }
    }
}

export namespace _ElementBuilder_visitClassDeclaration {
    export type Constructors = '_ElementBuilder_visitClassDeclaration';
    export type Interface = Omit<_ElementBuilder_visitClassDeclaration, Constructors>;
}
@DartClass
export class _ElementBuilder_visitClassDeclaration extends any {
    builder : ApiElementBuilder;

    nonFields : core.DartList<any>;

    constructor(builder : ApiElementBuilder,nonFields : core.DartList<any>) {
    }
    @defaultConstructor
    _ElementBuilder_visitClassDeclaration(builder : ApiElementBuilder,nonFields : core.DartList<any>) {
        super.DartObject();
        this.builder = builder;
        this.nonFields = nonFields;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : core.DartObject {
        this.nonFields.add(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : core.DartObject {
        this.nonFields.add(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) : core.DartObject {
        return node.accept(this.builder);
    }
}

export namespace _NamespaceCombinatorBuilder {
    export type Constructors = '_NamespaceCombinatorBuilder';
    export type Interface = Omit<_NamespaceCombinatorBuilder, Constructors>;
}
@DartClass
export class _NamespaceCombinatorBuilder extends any {
    combinators : core.DartList<any>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitHideCombinator(node : any) : core.DartObject {
        let hide : any = new bare.createInstance(any,null);
        hide.hiddenNames = _NamespaceCombinatorBuilder._getIdentifiers(node.hiddenNames);
        this.combinators.add(hide);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitShowCombinator(node : any) : core.DartObject {
        let show : any = new bare.createInstance(any,null);
        show.offset = node.offset;
        show.end = node.end;
        show.shownNames = _NamespaceCombinatorBuilder._getIdentifiers(node.shownNames);
        this.combinators.add(show);
        return null;
    }
    static _getIdentifiers(identifiers : any) : core.DartList<string> {
        return identifiers.map((identifier : any) =>  {
            return identifier.name;
        }).toList();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _NamespaceCombinatorBuilder() {
        this.combinators = new core.DartList.literal<any>();
    }
}

export namespace ApiElementBuilder {
    export type Constructors = _BaseElementBuilder.Constructors | 'ApiElementBuilder';
    export type Interface = Omit<ApiElementBuilder, Constructors>;
}
@DartClass
export class ApiElementBuilder extends _BaseElementBuilder {
    _fieldMap : core.DartHashMap<string,any>;

    constructor(initialHolder : any,compilationUnitElement : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ApiElementBuilder(initialHolder : any,compilationUnitElement : any) {
        super._BaseElementBuilder(initialHolder,compilationUnitElement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : core.DartObject {
        let holder : any = new bare.createInstance(any,null);
        let previousHolder : any = this._currentHolder;
        this._currentHolder = holder;
        try {
            super.visitAnnotation(node);
        } finally {
            this._currentHolder = previousHolder;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : core.DartObject {
        let holder : any = new bare.createInstance(any,null);
        let previousHolder : any = this._currentHolder;
        this._currentHolder = holder;
        try {
            let nonFields : core.DartList<any> = new core.DartList<any>();
            node.visitChildren(new _ElementBuilder_visitClassDeclaration(this,nonFields));
            this._buildFieldMap(holder.fieldsWithoutFlushing);
            let count : number = nonFields.length;
            for(let i : number = 0; i < count; i++){
                nonFields[i].accept(this);
            }
        } finally {
            this._currentHolder = previousHolder;
        }
        let className : any = node.name;
        let element : any = new bare.createInstance(any,null,className);
        this._setCodeRange(element,node);
        element.metadata = this._createElementAnnotations(node.metadata);
        element.typeParameters = holder.typeParameters;
        setElementDocumentationComment(element,node);
        element.abstract = node.isAbstract;
        element.accessors = holder.accessors;
        let constructors : core.DartList<any> = holder.constructors;
        if (constructors.isEmpty) {
            constructors = this._createDefaultConstructors(element);
        }
        element.constructors = constructors;
        element.fields = holder.fields;
        element.methods = holder.methods;
        this._currentHolder.addType(element);
        className.staticElement = element;
        this._fieldMap = null;
        holder.validate();
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) : core.DartObject {
        let holder : any = new bare.createInstance(any,null);
        this._visitChildren(holder,node);
        let className : any = node.name;
        let element : any = new bare.createInstance(any,null,className);
        this._setCodeRange(element,node);
        element.metadata = this._createElementAnnotations(node.metadata);
        element.abstract = node.abstractKeyword != null;
        element.mixinApplication = true;
        element.typeParameters = holder.typeParameters;
        setElementDocumentationComment(element,node);
        this._currentHolder.addType(element);
        className.staticElement = element;
        holder.validate();
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) : core.DartObject {
        if (is(this._unitElement, any)) {
            this._setCodeRange(this._unitElement,node);
        }
        return super.visitCompilationUnit(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : core.DartObject {
        let holder : any = new bare.createInstance(any,null);
        this._visitChildren(holder,node);
        let body : any = node.body;
        let constructorName : any = node.name;
        let element : any = new bare.createInstance(any,null,constructorName);
        this._setCodeRange(element,node);
        element.metadata = this._createElementAnnotations(node.metadata);
        setElementDocumentationComment(element,node);
        if (node.externalKeyword != null) {
            element.external = true;
        }
        if (node.factoryKeyword != null) {
            element.factory = true;
        }
        element.functions = holder.functions;
        element.labels = holder.labels;
        element.localVariables = holder.localVariables;
        element.parameters = holder.parameters;
        element.isConst = node.constKeyword != null;
        element.isCycleFree = element.isConst;
        if (body.isAsynchronous) {
            element.asynchronous = true;
        }
        if (body.isGenerator) {
            element.generator = true;
        }
        this._currentHolder.addConstructor(element);
        node.element = element;
        if (op(Op.EQUALS,constructorName,null)) {
            let returnType : any = node.returnType;
            if (returnType != null) {
                element.nameOffset = returnType.offset;
                element.nameEnd = returnType.end;
            }
        }else {
            constructorName.staticElement = element;
            element.periodOffset = node.period.offset;
            element.nameEnd = constructorName.end;
        }
        holder.validate();
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumDeclaration(node : any) : core.DartObject {
        let enumName : any = node.name;
        let enumElement : any = new bare.createInstance(any,null,enumName);
        this._setCodeRange(enumElement,node);
        enumElement.metadata = this._createElementAnnotations(node.metadata);
        setElementDocumentationComment(enumElement,node);
        let enumType : any = enumElement.type;
        let fields : core.DartList<any> = new core.DartList<any>();
        let constants : any = node.constants;
        for(let constant of constants) {
            let constantName : any = constant.name;
            let constantField : any = new bare.createInstance(any,null,constantName);
            constantField.isStatic = true;
            constantField.isConst = true;
            constantField.type = enumType;
            setElementDocumentationComment(constantField,constant);
            fields.add(constantField);
            new bare.createInstance(any,null,constantField);
            constantName.staticElement = constantField;
        }
        enumElement.fields = fields;
        this._currentHolder.addEnum(enumElement);
        enumName.staticElement = enumElement;
        return super.visitEnumDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : core.DartObject {
        let annotations : core.DartList<any> = this._createElementAnnotations(node.metadata);
        this._unitElement.setAnnotations(node.offset,annotations);
        return super.visitExportDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionFunctionBody(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : core.DartObject {
        let expression : any = node.functionExpression;
        if (expression != null) {
            let holder : any = new bare.createInstance(any,null);
            this._visitChildren(holder,node);
            let body : any = expression.body;
            let property : any = node.propertyKeyword;
            if (op(Op.EQUALS,property,null)) {
                let functionName : any = node.name;
                let element : any = new bare.createInstance(any,null,functionName);
                this._setCodeRange(element,node);
                element.metadata = this._createElementAnnotations(node.metadata);
                setElementDocumentationComment(element,node);
                if (node.externalKeyword != null || is(body, any)) {
                    element.external = true;
                }
                element.functions = holder.functions;
                element.labels = holder.labels;
                element.localVariables = holder.localVariables;
                element.parameters = holder.parameters;
                element.typeParameters = holder.typeParameters;
                if (body.isAsynchronous) {
                    element.asynchronous = true;
                }
                if (body.isGenerator) {
                    element.generator = true;
                }
                if (op(Op.EQUALS,node.returnType,null)) {
                    element.hasImplicitReturnType = true;
                }
                this._currentHolder.addFunction(element);
                expression.element = element;
                functionName.staticElement = element;
            }else {
                let propertyNameNode : any = node.name;
                if (op(Op.EQUALS,propertyNameNode,null)) {
                    return null;
                }
                let propertyName : string = propertyNameNode.name;
                let variable : any = this._currentHolder.getTopLevelVariable(propertyName) as any;
                if (op(Op.EQUALS,variable,null)) {
                    variable = new bare.createInstance(any,null,node.name.name,-1);
                    variable.isFinal = true;
                    variable.isSynthetic = true;
                    this._currentHolder.addTopLevelVariable(variable);
                }
                if (node.isGetter) {
                    let getter : any = new bare.createInstance(any,null,propertyNameNode);
                    this._setCodeRange(getter,node);
                    getter.metadata = this._createElementAnnotations(node.metadata);
                    setElementDocumentationComment(getter,node);
                    if (node.externalKeyword != null || is(body, any)) {
                        getter.external = true;
                    }
                    getter.functions = holder.functions;
                    getter.labels = holder.labels;
                    getter.localVariables = holder.localVariables;
                    if (body.isAsynchronous) {
                        getter.asynchronous = true;
                    }
                    if (body.isGenerator) {
                        getter.generator = true;
                    }
                    getter.variable = variable;
                    getter.getter = true;
                    getter.isStatic = true;
                    variable.getter = getter;
                    if (op(Op.EQUALS,node.returnType,null)) {
                        getter.hasImplicitReturnType = true;
                    }
                    this._currentHolder.addAccessor(getter);
                    expression.element = getter;
                    propertyNameNode.staticElement = getter;
                }else {
                    let setter : any = new bare.createInstance(any,null,propertyNameNode);
                    this._setCodeRange(setter,node);
                    setter.metadata = this._createElementAnnotations(node.metadata);
                    setElementDocumentationComment(setter,node);
                    if (node.externalKeyword != null || is(body, any)) {
                        setter.external = true;
                    }
                    setter.functions = holder.functions;
                    setter.labels = holder.labels;
                    setter.localVariables = holder.localVariables;
                    setter.parameters = holder.parameters;
                    if (body.isAsynchronous) {
                        setter.asynchronous = true;
                    }
                    if (body.isGenerator) {
                        setter.generator = true;
                    }
                    setter.variable = variable;
                    setter.setter = true;
                    setter.isStatic = true;
                    if (op(Op.EQUALS,node.returnType,null)) {
                        setter.hasImplicitReturnType = true;
                    }
                    variable.setter = setter;
                    variable.isFinal = false;
                    this._currentHolder.addAccessor(setter);
                    expression.element = setter;
                    propertyNameNode.staticElement = setter;
                }
            }
            holder.validate();
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : core.DartObject {
        if (is(node.parent, any)) {
            return super.visitFunctionExpression(node);
        }
        let holder : any = new bare.createInstance(any,null);
        this._visitChildren(holder,node);
        let body : any = node.body;
        let element : any = new bare.createInstance(any,null,node.beginToken.offset);
        this._setCodeRange(element,node);
        element.functions = holder.functions;
        element.labels = holder.labels;
        element.localVariables = holder.localVariables;
        element.parameters = holder.parameters;
        element.typeParameters = holder.typeParameters;
        if (body.isAsynchronous) {
            element.asynchronous = true;
        }
        if (body.isGenerator) {
            element.generator = true;
        }
        element.type = new bare.createInstance(any,null,element);
        element.hasImplicitReturnType = true;
        this._currentHolder.addFunction(element);
        node.element = element;
        holder.validate();
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) : core.DartObject {
        let holder : any = new bare.createInstance(any,null);
        this._visitChildren(holder,node);
        let aliasName : any = node.name;
        let parameters : core.DartList<any> = holder.parameters;
        let typeParameters : core.DartList<any> = holder.typeParameters;
        let element : any = new bare.createInstance(any,null,aliasName);
        this._setCodeRange(element,node);
        element.metadata = this._createElementAnnotations(node.metadata);
        setElementDocumentationComment(element,node);
        element.parameters = parameters;
        element.typeParameters = typeParameters;
        this._createTypeParameterTypes(typeParameters);
        element.type = new bare.createInstance(any,null,element);
        this._currentHolder.addTypeAlias(element);
        aliasName.staticElement = element;
        holder.validate();
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericTypeAlias(node : any) : core.DartObject {
        let holder : any = new bare.createInstance(any,null);
        this._visitChildren(holder,node);
        let aliasName : any = node.name;
        let typeParameters : core.DartList<any> = holder.typeParameters;
        let element : any = new bare.createInstance(any,null,aliasName);
        this._setCodeRange(element,node);
        element.metadata = this._createElementAnnotations(node.metadata);
        setElementDocumentationComment(element,node);
        element.typeParameters = typeParameters;
        this._createTypeParameterTypes(typeParameters);
        element.type = new bare.createInstance(any,null,element);
        element.function = ((t)=>(!!t)?t.element:null)(((t)=>(!!t)?t.type:null)(node.functionType));
        this._currentHolder.addTypeAlias(element);
        aliasName.staticElement = element;
        holder.validate();
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : core.DartObject {
        let annotations : core.DartList<any> = this._createElementAnnotations(node.metadata);
        this._unitElement.setAnnotations(node.offset,annotations);
        return super.visitImportDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryDirective(node : any) : core.DartObject {
        let annotations : core.DartList<any> = this._createElementAnnotations(node.metadata);
        this._unitElement.setAnnotations(node.offset,annotations);
        return super.visitLibraryDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : core.DartObject {
        try {
            let holder : any = new bare.createInstance(any,null);
            this._visitChildren(holder,node);
            let isStatic : boolean = node.isStatic;
            let property : any = node.propertyKeyword;
            let body : any = node.body;
            if (op(Op.EQUALS,property,null)) {
                let methodName : any = node.name;
                let nameOfMethod : string = methodName.name;
                if (nameOfMethod == TokenType.MINUS.lexeme && op(Op.EQUALS,node.parameters.parameters.length,0)) {
                    nameOfMethod = "unary-";
                }
                let element : any = new bare.createInstance(any,null,nameOfMethod,methodName.offset);
                this._setCodeRange(element,node);
                element.metadata = this._createElementAnnotations(node.metadata);
                setElementDocumentationComment(element,node);
                element.abstract = node.isAbstract;
                if (node.externalKeyword != null || is(body, any)) {
                    element.external = true;
                }
                element.functions = holder.functions;
                element.labels = holder.labels;
                element.localVariables = holder.localVariables;
                element.parameters = holder.parameters;
                element.isStatic = isStatic;
                element.typeParameters = holder.typeParameters;
                if (body.isAsynchronous) {
                    element.asynchronous = true;
                }
                if (body.isGenerator) {
                    element.generator = true;
                }
                if (op(Op.EQUALS,node.returnType,null)) {
                    element.hasImplicitReturnType = true;
                }
                this._currentHolder.addMethod(element);
                methodName.staticElement = element;
            }else {
                let propertyNameNode : any = node.name;
                let propertyName : string = propertyNameNode.name;
                let field : any = this._currentHolder.getField(propertyName,{
                    synthetic : true}) as any;
                if (op(Op.EQUALS,field,null)) {
                    field = new bare.createInstance(any,null,node.name.name,-1);
                    field.isFinal = true;
                    field.isStatic = isStatic;
                    field.isSynthetic = true;
                    this._currentHolder.addField(field);
                }
                if (node.isGetter) {
                    let getter : any = new bare.createInstance(any,null,propertyNameNode);
                    this._setCodeRange(getter,node);
                    getter.metadata = this._createElementAnnotations(node.metadata);
                    setElementDocumentationComment(getter,node);
                    if (node.externalKeyword != null || is(body, any)) {
                        getter.external = true;
                    }
                    getter.functions = holder.functions;
                    getter.labels = holder.labels;
                    getter.localVariables = holder.localVariables;
                    if (body.isAsynchronous) {
                        getter.asynchronous = true;
                    }
                    if (body.isGenerator) {
                        getter.generator = true;
                    }
                    getter.variable = field;
                    getter.abstract = node.isAbstract;
                    getter.getter = true;
                    getter.isStatic = isStatic;
                    field.getter = getter;
                    if (op(Op.EQUALS,node.returnType,null)) {
                        getter.hasImplicitReturnType = true;
                    }
                    this._currentHolder.addAccessor(getter);
                    propertyNameNode.staticElement = getter;
                }else {
                    let setter : any = new bare.createInstance(any,null,propertyNameNode);
                    this._setCodeRange(setter,node);
                    setter.metadata = this._createElementAnnotations(node.metadata);
                    setElementDocumentationComment(setter,node);
                    if (node.externalKeyword != null || is(body, any)) {
                        setter.external = true;
                    }
                    setter.functions = holder.functions;
                    setter.labels = holder.labels;
                    setter.localVariables = holder.localVariables;
                    setter.parameters = holder.parameters;
                    if (body.isAsynchronous) {
                        setter.asynchronous = true;
                    }
                    if (body.isGenerator) {
                        setter.generator = true;
                    }
                    setter.variable = field;
                    setter.abstract = node.isAbstract;
                    setter.setter = true;
                    setter.isStatic = isStatic;
                    if (op(Op.EQUALS,node.returnType,null)) {
                        setter.hasImplicitReturnType = true;
                    }
                    field.setter = setter;
                    field.isFinal = false;
                    this._currentHolder.addAccessor(setter);
                    propertyNameNode.staticElement = setter;
                }
            }
            holder.validate();
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                if (op(Op.EQUALS,node.name.staticElement,null)) {
                    let classNode : any = node.getAncestor((node : any) =>  {
                        return is(node, any);
                    });
                    let buffer : core.DartStringBuffer = new core.DartStringBuffer();
                    buffer.write("The element for the method ");
                    buffer.write(node.name);
                    buffer.write(" in ");
                    buffer.write(classNode.name);
                    buffer.write(" was not set while trying to build the element model.");
                    AnalysisEngine.instance.logger.logError(buffer.toString(),new bare.createInstance(any,null,exception,stackTrace));
                }else {
                    let message : string = "Exception caught in ElementBuilder.visitMethodDeclaration()";
                    AnalysisEngine.instance.logger.logError(message,new bare.createInstance(any,null,exception,stackTrace));
                }
            }
        } finally {
            if (op(Op.EQUALS,node.name.staticElement,null)) {
                let classNode : any = node.getAncestor((node : any) =>  {
                    return is(node, any);
                });
                let buffer : core.DartStringBuffer = new core.DartStringBuffer();
                buffer.write("The element for the method ");
                buffer.write(node.name);
                buffer.write(" in ");
                buffer.write(classNode.name);
                buffer.write(" was not set while trying to resolve types.");
                AnalysisEngine.instance.logger.logError(buffer.toString(),new bare.createInstance(any,null,new bare.createInstance(any,null,buffer.toString()),null));
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartDirective(node : any) : core.DartObject {
        let annotations : core.DartList<any> = this._createElementAnnotations(node.metadata);
        this._unitElement.setAnnotations(node.offset,annotations);
        return super.visitPartDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : core.DartObject {
        let isConst : boolean = node.isConst;
        let isFinal : boolean = node.isFinal;
        let initializerNode : any = node.initializer;
        let hasInitializer : boolean = initializerNode != null;
        let varList : any = node.parent;
        let fieldNode : any = is(varList.parent, any) ? varList.parent : null;
        let element : any;
        if (fieldNode != null) {
            let fieldName : any = node.name;
            let field : any;
            if ((isConst || isFinal && !fieldNode.isStatic) && hasInitializer) {
                field = new bare.createInstance(any,null,fieldName);
            }else {
                field = new bare.createInstance(any,null,fieldName);
            }
            element = field;
            field.isCovariant = fieldNode.covariantKeyword != null;
            field.isStatic = fieldNode.isStatic;
            this._setCodeRange(element,node);
            setElementDocumentationComment(element,fieldNode);
            field.hasImplicitType = op(Op.EQUALS,varList.type,null);
            this._currentHolder.addField(field);
            fieldName.staticElement = field;
        }else {
            let variableName : any = node.name;
            let variable : any;
            if (isConst && hasInitializer) {
                variable = new bare.createInstance(any,null,variableName);
            }else {
                variable = new bare.createInstance(any,null,variableName);
            }
            element = variable;
            this._setCodeRange(element,node);
            if (is(varList.parent, any)) {
                setElementDocumentationComment(element,varList.parent);
            }
            variable.hasImplicitType = op(Op.EQUALS,varList.type,null);
            this._currentHolder.addTopLevelVariable(variable);
            variableName.staticElement = element;
        }
        element.isConst = isConst;
        element.isFinal = isFinal;
        if (is(element, any)) {
            let getter : any = new bare.createInstance(any,null,element);
            this._currentHolder.addAccessor(getter);
            if (!isConst && !isFinal) {
                let setter : any = new bare.createInstance(any,null,element);
                if (fieldNode != null) {
                    (op(Op.INDEX,setter.parameters,0) as any).isExplicitlyCovariant = fieldNode.covariantKeyword != null;
                }
                this._currentHolder.addAccessor(setter);
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationList(node : any) : core.DartObject {
        super.visitVariableDeclarationList(node);
        let parent : any = node.parent;
        let elementAnnotations : core.DartList<any>;
        if (is(parent, any)) {
            elementAnnotations = this._createElementAnnotations(parent.metadata);
        }else if (is(parent, any)) {
            elementAnnotations = this._createElementAnnotations(parent.metadata);
        }else {
            elementAnnotations = this._createElementAnnotations(node.metadata);
        }
        this._setVariableDeclarationListAnnotations(node,elementAnnotations);
        return null;
    }
    _buildFieldMap(fields : core.DartList<any>) : void {
        this._fieldMap = new core.DartHashMap<string,any>();
        let count : number = fields.length;
        for(let i : number = 0; i < count; i++){
            let field : any = fields[i];
            op(Op.INDEX_ASSIGN,this._fieldMap,field.name,field);
        }
    }
    _createDefaultConstructors(definingClass : any) : core.DartList<any> {
        let constructor : any = new bare.createInstance(any,null,null);
        constructor.isSynthetic = true;
        constructor.enclosingElement = definingClass;
        return new core.DartList.literal<any>(constructor);
    }
    _createTypeParameterTypes(typeParameters : core.DartList<any>) : core.DartList<any> {
        let typeParameterCount : number = typeParameters.length;
        let typeArguments : core.DartList<any> = new core.DartList<any>(typeParameterCount);
        for(let i : number = 0; i < typeParameterCount; i++){
            let typeParameter : any = typeParameters[i] as any;
            let typeParameterType : any = new bare.createInstance(any,null,typeParameter);
            typeParameter.type = typeParameterType;
            typeArguments[i] = typeParameterType;
        }
        return typeArguments;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _setFieldParameterField(node : any,element : any) : void {
        if (is(((t)=>(!!t)?t.parent:null)(node.parent), any)) {
            let field : any = op(Op.EQUALS,this._fieldMap,null) ? null : op(Op.INDEX,this._fieldMap,element.name);
            if (field != null) {
                element.field = field;
            }
        }
    }
}

export namespace LocalElementBuilder {
    export type Constructors = _BaseElementBuilder.Constructors | 'LocalElementBuilder';
    export type Interface = Omit<LocalElementBuilder, Constructors>;
}
@DartClass
export class LocalElementBuilder extends _BaseElementBuilder {
    constructor(initialHolder : any,compilationUnitElement : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LocalElementBuilder(initialHolder : any,compilationUnitElement : any) {
        super._BaseElementBuilder(initialHolder,compilationUnitElement);
    }
    buildCatchVariableElements(node : any) : void {
        let exceptionParameter : any = node.exceptionParameter;
        if (exceptionParameter != null) {
            let exception : any = new bare.createInstance(any,null,exceptionParameter);
            if (op(Op.EQUALS,node.exceptionType,null)) {
                exception.hasImplicitType = true;
            }
            exception.setVisibleRange(node.offset,node.length);
            this._currentHolder.addLocalVariable(exception);
            exceptionParameter.staticElement = exception;
            let stackTraceParameter : any = node.stackTraceParameter;
            if (stackTraceParameter != null) {
                let stackTrace : any = new bare.createInstance(any,null,stackTraceParameter);
                this._setCodeRange(stackTrace,stackTraceParameter);
                stackTrace.setVisibleRange(node.offset,node.length);
                this._currentHolder.addLocalVariable(stackTrace);
                stackTraceParameter.staticElement = stackTrace;
            }
        }
    }
    buildLabelElements(labels : any,onSwitchStatement : boolean,onSwitchMember : boolean) : void {
        for(let label of labels) {
            let labelName : any = label.label;
            let element : any = new bare.createInstance(any,null,labelName,onSwitchStatement,onSwitchMember);
            labelName.staticElement = element;
            this._currentHolder.addLabel(element);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCatchClause(node : any) : core.DartObject {
        this.buildCatchVariableElements(node);
        return super.visitCatchClause(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDeclaredIdentifier(node : any) : core.DartObject {
        let variableName : any = node.identifier;
        let element : any = new bare.createInstance(any,null,variableName);
        this._setCodeRange(element,node);
        element.metadata = this._createElementAnnotations(node.metadata);
        let statement : any = node.parent as any;
        element.setVisibleRange(statement.offset,statement.length);
        element.isConst = node.isConst;
        element.isFinal = node.isFinal;
        if (op(Op.EQUALS,node.type,null)) {
            element.hasImplicitType = true;
        }
        this._currentHolder.addLocalVariable(element);
        variableName.staticElement = element;
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDefaultFormalParameter(node : any) : core.DartObject {
        super.visitDefaultFormalParameter(node);
        this.buildParameterInitializer(node.element as any,node.defaultValue);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : core.DartObject {
        let expression : any = node.functionExpression;
        if (op(Op.EQUALS,expression,null)) {
            return null;
        }
        let holder : any = new bare.createInstance(any,null);
        this._visitChildren(holder,node);
        let element : any = new bare.createInstance(any,null,node.name);
        this._setCodeRange(element,node);
        setElementDocumentationComment(element,node);
        element.metadata = this._createElementAnnotations(node.metadata);
        let body : any = expression.body;
        if (node.externalKeyword != null || is(body, any)) {
            element.external = true;
        }
        element.functions = holder.functions;
        element.labels = holder.labels;
        element.localVariables = holder.localVariables;
        element.parameters = holder.parameters;
        element.typeParameters = holder.typeParameters;
        if (body.isAsynchronous) {
            element.asynchronous = body.isAsynchronous;
        }
        if (body.isGenerator) {
            element.generator = true;
        }
        {
            let enclosingBlock : any = node.getAncestor((node : any) =>  {
                return is(node, any);
            });
            if (enclosingBlock != null) {
                element.setVisibleRange(enclosingBlock.offset,enclosingBlock.length);
            }
        }
        if (op(Op.EQUALS,node.returnType,null)) {
            element.hasImplicitReturnType = true;
        }
        this._currentHolder.addFunction(element);
        expression.element = element;
        node.name.staticElement = element;
        holder.validate();
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : core.DartObject {
        if (is(node.parent, any)) {
            return super.visitFunctionExpression(node);
        }
        let holder : any = new bare.createInstance(any,null);
        this._visitChildren(holder,node);
        let element : any = new bare.createInstance(any,null,node.beginToken.offset);
        this._setCodeRange(element,node);
        element.functions = holder.functions;
        element.labels = holder.labels;
        element.localVariables = holder.localVariables;
        element.parameters = holder.parameters;
        element.typeParameters = holder.typeParameters;
        let body : any = node.body;
        if (body.isAsynchronous) {
            element.asynchronous = true;
        }
        if (body.isGenerator) {
            element.generator = true;
        }
        {
            let enclosingBlock : any = node.getAncestor((node : any) =>  {
                return is(node, any);
            });
            if (enclosingBlock != null) {
                element.setVisibleRange(enclosingBlock.offset,enclosingBlock.length);
            }
        }
        element.type = new bare.createInstance(any,null,element);
        element.hasImplicitReturnType = true;
        this._currentHolder.addFunction(element);
        node.element = element;
        holder.validate();
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabeledStatement(node : any) : core.DartObject {
        let onSwitchStatement : boolean = is(node.statement, any);
        this.buildLabelElements(node.labels,onSwitchStatement,false);
        return super.visitLabeledStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchCase(node : any) : core.DartObject {
        this.buildLabelElements(node.labels,false,true);
        return super.visitSwitchCase(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchDefault(node : any) : core.DartObject {
        this.buildLabelElements(node.labels,false,true);
        return super.visitSwitchDefault(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : core.DartObject {
        let isConst : boolean = node.isConst;
        let isFinal : boolean = node.isFinal;
        let initializerNode : any = node.initializer;
        let varList : any = node.parent;
        let variableName : any = node.name;
        let element : any;
        if (isConst && initializerNode != null) {
            element = new bare.createInstance(any,null,variableName);
        }else {
            element = new bare.createInstance(any,null,variableName);
        }
        this._setCodeRange(element,node);
        this._setVariableVisibleRange(element,node);
        element.hasImplicitType = op(Op.EQUALS,varList.type,null);
        this._currentHolder.addLocalVariable(element);
        variableName.staticElement = element;
        element.isConst = isConst;
        element.isFinal = isFinal;
        this.buildVariableInitializer(element,initializerNode);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationList(node : any) : core.DartObject {
        super.visitVariableDeclarationList(node);
        let elementAnnotations : core.DartList<any> = this._createElementAnnotations(node.metadata);
        this._setVariableDeclarationListAnnotations(node,elementAnnotations);
        return null;
    }
    _setVariableVisibleRange(element : any,node : any) : void {
        let scopeNode : any;
        let parent2 : any = node.parent.parent;
        if (is(parent2, any)) {
            scopeNode = parent2;
        }else {
            scopeNode = node.getAncestor((node : any) =>  {
                return is(node, any);
            });
        }
        element.setVisibleRange(scopeNode.offset,scopeNode.length);
    }
}

export namespace ElementBuilder {
    export type Constructors = ApiElementBuilder.Constructors | 'ElementBuilder';
    export type Interface = Omit<ElementBuilder, Constructors>;
}
@DartClass
export class ElementBuilder extends ApiElementBuilder {
    constructor(initialHolder : any,compilationUnitElement : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ElementBuilder(initialHolder : any,compilationUnitElement : any) {
        super.ApiElementBuilder(initialHolder,compilationUnitElement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) : core.DartObject {
        this._buildLocal(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDefaultFormalParameter(node : any) : core.DartObject {
        super.visitDefaultFormalParameter(node);
        this.buildParameterInitializer(node.element as any,node.defaultValue);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionFunctionBody(node : any) : core.DartObject {
        this._buildLocal(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : core.DartObject {
        super.visitVariableDeclaration(node);
        let element : any = node.element as any;
        this.buildVariableInitializer(element,node.initializer);
        return null;
    }
    _buildLocal(node : any) : void {
        node.accept(new LocalElementBuilder(this._currentHolder,this._unitElement));
    }
}

export class properties {
}
