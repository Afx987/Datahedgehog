/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/declaration_resolver.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace DeclarationResolver {
    export type Constructors = 'DeclarationResolver';
    export type Interface = Omit<DeclarationResolver, Constructors>;
}
@DartClass
export class DeclarationResolver extends any {
    _enclosingUnit : any;

    _walker : ElementWalker;

    resolve(unit : any,element : any) : void {
        this._enclosingUnit = element;
        this._walker = new ElementWalker.forCompilationUnit(element);
        unit.element = element;
        try {
            unit.accept(this);
            this._walker.validate();
        } catch (__error__) {

            if (is(__error__,core.DartError)){
                let st : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e : core.DartError = __error__;
                throw new _ElementMismatchException(element,this._walker.element,new bare.createInstance(any,null,e,st));
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : core.DartObject {
        let elementHolder : any = new bare.createInstance(any,null);
        new bare.createInstance(any,null,elementHolder,this._enclosingUnit).visitAnnotation(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) : core.DartObject {
        if (DeclarationResolver._isBodyToCreateElementsFor(node)) {
            this._walker.consumeLocalElements();
            node.accept(this._walker.elementBuilder);
            return null;
        }else {
            return super.visitBlockFunctionBody(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCatchClause(node : any) : core.DartObject {
        this._walker.elementBuilder.buildCatchVariableElements(node);
        return super.visitCatchClause(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : core.DartObject {
        let element : any = this._match(node.name,this._walker.getClass());
        this._walk(new ElementWalker.forClass(element),() =>  {
            super.visitClassDeclaration(node);
        });
        this._resolveMetadata(node,node.metadata,element);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) : core.DartObject {
        let element : any = this._match(node.name,this._walker.getClass());
        this._walk(new ElementWalker.forClass(element),() =>  {
            super.visitClassTypeAlias(node);
        });
        this._resolveMetadata(node,node.metadata,element);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : core.DartObject {
        let element : any = this._match(node.name,this._walker.getConstructor(),{
            offset : (((t)=>(!!t)?t.offset:null)(node.name) || node.returnType.offset)});
        this._walk(new ElementWalker.forExecutable(element,this._enclosingUnit),() =>  {
            node.element = element;
            super.visitConstructorDeclaration(node);
        });
        this._resolveMetadata(node,node.metadata,element);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDeclaredIdentifier(node : any) : core.DartObject {
        this._walker.elementBuilder.visitDeclaredIdentifier(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDefaultFormalParameter(node : any) : core.DartObject {
        let normalParameter : any = node.parameter;
        let element : any = this._match(normalParameter.identifier,this._walker.getParameter());
        if (is(normalParameter, any)) {
            normalParameter.element = element;
        }
        let defaultValue : any = node.defaultValue;
        if (defaultValue != null) {
            this._walk(new ElementWalker.forExecutable(element.initializer,this._enclosingUnit),() =>  {
                defaultValue.accept(this);
            });
        }
        this._walk(new ElementWalker.forParameter(element),() =>  {
            normalParameter.accept(this);
        });
        this._resolveMetadata(node,node.metadata,element);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumDeclaration(node : any) : core.DartObject {
        let element : any = this._match(node.name,this._walker.getEnum());
        this._walk(new ElementWalker.forClass(element),() =>  {
            for(let constant of node.constants) {
                this._match(constant.name,this._walker.getVariable());
            }
            super.visitEnumDeclaration(node);
        });
        this._resolveMetadata(node,node.metadata,element);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : core.DartObject {
        super.visitExportDirective(node);
        let annotations : core.DartList<any> = this._enclosingUnit.getAnnotations(node.offset);
        if (annotations.isEmpty && node.metadata.isNotEmpty) {
            let index : number = (node.parent as any).directives.where((directive : any) =>  {
                return is(directive, any);
            }).toList().indexOf(node);
            annotations = op(Op.INDEX,this._walker.element.library.exports,index).metadata;
        }
        this._resolveAnnotations(node,node.metadata,annotations);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionFunctionBody(node : any) : core.DartObject {
        if (DeclarationResolver._isBodyToCreateElementsFor(node)) {
            this._walker.consumeLocalElements();
            node.accept(this._walker.elementBuilder);
            return null;
        }else {
            return super.visitExpressionFunctionBody(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldDeclaration(node : any) : core.DartObject {
        super.visitFieldDeclaration(node);
        this._resolveMetadata(node,node.metadata,op(Op.INDEX,node.fields.variables,0).element);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldFormalParameter(node : any) : core.DartObject {
        if (isNot(node.parent, any)) {
            let element : any = this._match(node.identifier,this._walker.getParameter());
            this._walk(new ElementWalker.forParameter(element),() =>  {
                super.visitFieldFormalParameter(node);
            });
            this._resolveMetadata(node,node.metadata,element);
            return null;
        }else {
            return super.visitFieldFormalParameter(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : core.DartObject {
        let functionName : any = node.name;
        let property : any = node.propertyKeyword;
        let element : any;
        if (op(Op.EQUALS,property,null)) {
            element = this._match(functionName,this._walker.getFunction());
        }else {
            if (is(this._walker.element, any)) {
                element = this._match(functionName,this._walker.getFunction());
            }else if (op(Op.EQUALS,property.keyword,Keyword.GET)) {
                element = this._match(functionName,this._walker.getAccessor());
            }else {
                /* TODO (AssertStatementImpl) : assert (property.keyword == Keyword.SET); */;
                element = this._match(functionName,this._walker.getAccessor(),{
                    elementName : op(Op.PLUS,functionName.name,'=')});
            }
        }
        this._setGenericFunctionType(node.returnType,element.returnType);
        node.functionExpression.element = element;
        ((_258_)=>(!!_258_)?_258_.addFunction(element):null)(this._walker._elementHolder);
        this._walk(new ElementWalker.forExecutable(element,this._enclosingUnit),() =>  {
            super.visitFunctionDeclaration(node);
        });
        this._resolveMetadata(node,node.metadata,element);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : core.DartObject {
        if (isNot(node.parent, any)) {
            let element : any = this._walker.getFunction();
            this._matchOffset(element,node.offset);
            node.element = element;
            this._walker._elementHolder.addFunction(element);
            this._walk(new ElementWalker.forExecutable(element,this._enclosingUnit),() =>  {
                super.visitFunctionExpression(node);
            });
            return null;
        }else {
            return super.visitFunctionExpression(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) : core.DartObject {
        let element : any = this._match(node.name,this._walker.getTypedef());
        this._walk(new ElementWalker.forTypedef(element),() =>  {
            super.visitFunctionTypeAlias(node);
        });
        this._resolveMetadata(node,node.metadata,element);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypedFormalParameter(node : any) : core.DartObject {
        if (isNot(node.parent, any)) {
            let element : any = this._match(node.identifier,this._walker.getParameter());
            this._walk(new ElementWalker.forParameter(element),() =>  {
                super.visitFunctionTypedFormalParameter(node);
            });
            this._resolveMetadata(node,node.metadata,element);
            return null;
        }else {
            return super.visitFunctionTypedFormalParameter(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericFunctionType(node : any) : core.DartObject {
        if (this._walker.elementBuilder != null) {
            this._walker.elementBuilder.visitGenericFunctionType(node);
        }else {
            let type : any = node.type;
            if (type != null) {
                let element : any = type.element;
                if (is(element, any)) {
                    this._setGenericFunctionType(node.returnType,element.returnType);
                    this._walk(new ElementWalker.forGenericFunctionType(element),() =>  {
                        super.visitGenericFunctionType(node);
                    });
                }
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericTypeAlias(node : any) : core.DartObject {
        let element : any = this._match(node.name,this._walker.getTypedef());
        this._setGenericFunctionType(node.functionType,((t)=>(!!t)?t.type:null)(element.function));
        this._walk(new ElementWalker.forGenericTypeAlias(element),() =>  {
            super.visitGenericTypeAlias(node);
        });
        this._resolveMetadata(node,node.metadata,element);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : core.DartObject {
        super.visitImportDirective(node);
        let annotations : core.DartList<any> = this._enclosingUnit.getAnnotations(node.offset);
        if (annotations.isEmpty && node.metadata.isNotEmpty) {
            let index : number = (node.parent as any).directives.where((directive : any) =>  {
                return is(directive, any);
            }).toList().indexOf(node);
            annotations = op(Op.INDEX,this._walker.element.library.imports,index).metadata;
        }
        this._resolveAnnotations(node,node.metadata,annotations);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabeledStatement(node : any) : core.DartObject {
        let onSwitchStatement : boolean = is(node.statement, any);
        this._walker.elementBuilder.buildLabelElements(node.labels,onSwitchStatement,false);
        return super.visitLabeledStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryDirective(node : any) : core.DartObject {
        super.visitLibraryDirective(node);
        let annotations : core.DartList<any> = this._enclosingUnit.getAnnotations(node.offset);
        if (annotations.isEmpty && node.metadata.isNotEmpty) {
            annotations = this._walker.element.library.metadata;
        }
        this._resolveAnnotations(node,node.metadata,annotations);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : core.DartObject {
        let property : any = node.propertyKeyword;
        let methodName : any = node.name;
        let nameOfMethod : string = methodName.name;
        let element : any;
        if (op(Op.EQUALS,property,null)) {
            let elementName : string = nameOfMethod == '-' && node.parameters != null && node.parameters.parameters.isEmpty ? 'unary-' : nameOfMethod;
            element = this._match(methodName,this._walker.getFunction(),{
                elementName : elementName});
        }else {
            if (op(Op.EQUALS,property.keyword,Keyword.GET)) {
                element = this._match(methodName,this._walker.getAccessor());
            }else {
                /* TODO (AssertStatementImpl) : assert (property.keyword == Keyword.SET); */;
                element = this._match(methodName,this._walker.getAccessor(),{
                    elementName : nameOfMethod + '='});
            }
        }
        this._setGenericFunctionType(node.returnType,element.returnType);
        this._walk(new ElementWalker.forExecutable(element,this._enclosingUnit),() =>  {
            super.visitMethodDeclaration(node);
        });
        this._resolveMetadata(node,node.metadata,element);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartDirective(node : any) : core.DartObject {
        super.visitPartDirective(node);
        let annotations : core.DartList<any> = this._enclosingUnit.getAnnotations(node.offset);
        if (annotations.isEmpty && node.metadata.isNotEmpty) {
            let index : number = (node.parent as any).directives.where((directive : any) =>  {
                return is(directive, any);
            }).toList().indexOf(node);
            annotations = op(Op.INDEX,this._walker.element.library.parts,index).metadata;
        }
        this._resolveAnnotations(node,node.metadata,annotations);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartOfDirective(node : any) : core.DartObject {
        node.element = this._enclosingUnit.library;
        return super.visitPartOfDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleFormalParameter(node : any) : core.DartObject {
        if (isNot(node.parent, any)) {
            let element : any = this._match(node.identifier,this._walker.getParameter());
            (node as any).element = element;
            this._setGenericFunctionType(node.type,element.type);
            this._walk(new ElementWalker.forParameter(element),() =>  {
                super.visitSimpleFormalParameter(node);
            });
            this._resolveMetadata(node,node.metadata,element);
            return null;
        }else {
            return super.visitSimpleFormalParameter(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchCase(node : any) : core.DartObject {
        this._walker.elementBuilder.buildLabelElements(node.labels,false,true);
        return super.visitSwitchCase(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchDefault(node : any) : core.DartObject {
        this._walker.elementBuilder.buildLabelElements(node.labels,false,true);
        return super.visitSwitchDefault(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTopLevelVariableDeclaration(node : any) : core.DartObject {
        super.visitTopLevelVariableDeclaration(node);
        this._resolveMetadata(node,node.metadata,op(Op.INDEX,node.variables.variables,0).element);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameter(node : any) : core.DartObject {
        if (is(node.parent.parent, any)) {
            let element = new bare.createInstance(any,null,node.name);
            element.type = new bare.createInstance(any,null,element);
            ((t)=>(!!t)?t.staticElement:null)(node.name) = element;
            return null;
        }
        let element : any = this._match(node.name,this._walker.getTypeParameter());
        super.visitTypeParameter(node);
        this._resolveMetadata(node,node.metadata,element);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : core.DartObject {
        let element : any = this._match(node.name,this._walker.getVariable());
        let initializer : any = node.initializer;
        if (initializer != null) {
            this._walk(new ElementWalker.forExecutable(element.initializer,this._enclosingUnit),() =>  {
                super.visitVariableDeclaration(node);
            });
            return null;
        }else {
            return super.visitVariableDeclaration(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationList(node : any) : core.DartObject {
        if (this._walker.elementBuilder != null) {
            return this._walker.elementBuilder.visitVariableDeclarationList(node);
        }else {
            node.variables.accept(this);
            let firstVariable : any = op(Op.INDEX,node.variables,0).element;
            this._setGenericFunctionType(node.type,firstVariable.type);
            ((_259_)=>(!!_259_)?_259_.accept(this):null)(node.type);
            if (isNot(node.parent, any) && isNot(node.parent, any)) {
                this._resolveMetadata(node,node.metadata,firstVariable);
            }
            return null;
        }
    }
    _match(identifier : any,element : any,_namedArguments? : {elementName? : string,offset? : number}) : any {
        let {elementName,offset} = Object.assign({
        }, _namedArguments );
        elementName = ( elementName ) || ( (((t)=>(!!t)?t.name:null)(identifier) || '') );
        offset = ( offset ) || ( (((t)=>(!!t)?t.offset:null)(identifier) || -1) );
        if (element.name != elementName) {
            throw new core.StateError(`Expected an element matching `${elementName}`, got `${element.name}``);
        }
        ((t)=>(!!t)?t.staticElement:null)(identifier) = element;
        this._matchOffset(element,offset);
        return element;
    }
    _matchOffset(element : any,offset : number) : void {
        if (element.nameOffset != 0 && element.nameOffset != offset) {
            throw new core.StateError('Element offset mismatch');
        }else {
            (element as any).nameOffset = offset;
        }
    }
    _resolveAnnotations(parent : any,nodes : any,annotations : core.DartList<any>) : void {
        let nodeCount : number = nodes.length;
        if (nodeCount != annotations.length) {
            throw new core.StateError(`Found ${nodeCount} annotation nodes and ` + `${annotations.length} element annotations`);
        }
        for(let i : number = 0; i < nodeCount; i++){
            op(Op.INDEX,nodes,i).elementAnnotation = annotations[i];
        }
    }
    _resolveMetadata(parent : any,nodes : any,element : any) : void {
        if (element != null) {
            this._resolveAnnotations(parent,nodes,element.metadata);
        }
    }
    _setGenericFunctionType(typeNode : any,type : any) : void {
        if (is(typeNode, any)) {
            typeNode.type = type;
        }else if (is(typeNode, any)) {
            typeNode.type = type;
            if (is(type, any)) {
                let nodes : core.DartList<any> = (((t)=>(!!t)?t.arguments:null)(typeNode.typeArguments) || new core.DartList.literal());
                let types : core.DartList<any> = type.typeArguments;
                if (nodes.length == types.length) {
                    for(let i : number = 0; i < nodes.length; i++){
                        this._setGenericFunctionType(nodes[i],types[i]);
                    }
                }
            }
        }
    }
    _walk(walker : ElementWalker,callback : () => void) : void {
        let outerWalker : ElementWalker = this._walker;
        this._walker = walker;
        callback();
        walker.validate();
        this._walker = outerWalker;
    }
    static _isBodyToCreateElementsFor(node : any) : boolean {
        let parent : any = node.parent;
        return is(parent, any) || is(parent, any) || is(parent.parent, any) && is(parent.parent.parent, any);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DeclarationResolver() {
    }
}

export namespace ElementWalker {
    export type Constructors = 'forClass' | 'forCompilationUnit' | 'forExecutable' | 'forGenericFunctionType' | 'forGenericTypeAlias' | 'forParameter' | 'forTypedef' | '_forExecutable';
    export type Interface = Omit<ElementWalker, Constructors>;
}
@DartClass
export class ElementWalker {
    element : any;

    elementBuilder : any;

    _elementHolder : any;

    _accessors : core.DartList<any>;

    _accessorIndex : number;

    _classes : core.DartList<any>;

    _classIndex : number;

    _constructors : core.DartList<any>;

    _constructorIndex : number;

    _enums : core.DartList<any>;

    _enumIndex : number;

    _functions : core.DartList<any>;

    _functionIndex : number;

    _parameters : core.DartList<any>;

    _parameterIndex : number;

    _typedefs : core.DartList<any>;

    _typedefIndex : number;

    _typeParameters : core.DartList<any>;

    _typeParameterIndex : number;

    _variables : core.DartList<any>;

    _variableIndex : number;

    @namedConstructor
    forClass(element : any) {
        this._accessorIndex = 0;
        this._classIndex = 0;
        this._constructorIndex = 0;
        this._enumIndex = 0;
        this._functionIndex = 0;
        this._parameterIndex = 0;
        this._typedefIndex = 0;
        this._typeParameterIndex = 0;
        this._variableIndex = 0;
        this.element = element;
        this._accessors = element.accessors.where(ElementWalker._isNotSynthetic.bind(this)).toList();
        this._constructors = element.isMixinApplication ? null : element.constructors.where(ElementWalker._isNotSynthetic.bind(this)).toList();
        this._functions = element.methods;
        this._typeParameters = element.typeParameters;
        this._variables = element.fields.where(ElementWalker._isNotSynthetic.bind(this)).toList();
    }
    static forClass : new(element : any) => ElementWalker;

    @namedConstructor
    forCompilationUnit(compilationUnit : any) {
        this._accessorIndex = 0;
        this._classIndex = 0;
        this._constructorIndex = 0;
        this._enumIndex = 0;
        this._functionIndex = 0;
        this._parameterIndex = 0;
        this._typedefIndex = 0;
        this._typeParameterIndex = 0;
        this._variableIndex = 0;
        this.element = compilationUnit;
        this._accessors = compilationUnit.accessors.where(ElementWalker._isNotSynthetic.bind(this)).toList();
        this._classes = compilationUnit.types;
        this._enums = compilationUnit.enums;
        this._functions = compilationUnit.functions;
        this._typedefs = compilationUnit.functionTypeAliases;
        this._variables = compilationUnit.topLevelVariables.where(ElementWalker._isNotSynthetic.bind(this)).toList();
    }
    static forCompilationUnit : new(compilationUnit : any) => ElementWalker;

    @namedConstructor
    forExecutable(element : any,compilationUnit : any) {
        this._accessorIndex = 0;
        this._classIndex = 0;
        this._constructorIndex = 0;
        this._enumIndex = 0;
        this._functionIndex = 0;
        this._parameterIndex = 0;
        this._typedefIndex = 0;
        this._typeParameterIndex = 0;
        this._variableIndex = 0;
        this._forExecutable(element,compilationUnit,new bare.createInstance(any,null));
    }
    static forExecutable : new(element : any,compilationUnit : any) => ElementWalker;

    @namedConstructor
    forGenericFunctionType(element : any) {
        this._accessorIndex = 0;
        this._classIndex = 0;
        this._constructorIndex = 0;
        this._enumIndex = 0;
        this._functionIndex = 0;
        this._parameterIndex = 0;
        this._typedefIndex = 0;
        this._typeParameterIndex = 0;
        this._variableIndex = 0;
        this.element = element;
        this._parameters = element.parameters;
        this._typeParameters = element.typeParameters;
    }
    static forGenericFunctionType : new(element : any) => ElementWalker;

    @namedConstructor
    forGenericTypeAlias(element : any) {
        this._accessorIndex = 0;
        this._classIndex = 0;
        this._constructorIndex = 0;
        this._enumIndex = 0;
        this._functionIndex = 0;
        this._parameterIndex = 0;
        this._typedefIndex = 0;
        this._typeParameterIndex = 0;
        this._variableIndex = 0;
        this.element = element;
        this._typeParameters = element.typeParameters;
    }
    static forGenericTypeAlias : new(element : any) => ElementWalker;

    @namedConstructor
    forParameter(element : any) {
        this._accessorIndex = 0;
        this._classIndex = 0;
        this._constructorIndex = 0;
        this._enumIndex = 0;
        this._functionIndex = 0;
        this._parameterIndex = 0;
        this._typedefIndex = 0;
        this._typeParameterIndex = 0;
        this._variableIndex = 0;
        this.element = element;
        this._parameters = element.parameters;
        this._typeParameters = element.typeParameters;
    }
    static forParameter : new(element : any) => ElementWalker;

    @namedConstructor
    forTypedef(element : any) {
        this._accessorIndex = 0;
        this._classIndex = 0;
        this._constructorIndex = 0;
        this._enumIndex = 0;
        this._functionIndex = 0;
        this._parameterIndex = 0;
        this._typedefIndex = 0;
        this._typeParameterIndex = 0;
        this._variableIndex = 0;
        this.element = element;
        this._parameters = element.parameters;
        this._typeParameters = element.typeParameters;
    }
    static forTypedef : new(element : any) => ElementWalker;

    @namedConstructor
    _forExecutable(element : any,compilationUnit : any,elementHolder : any) {
        this._accessorIndex = 0;
        this._classIndex = 0;
        this._constructorIndex = 0;
        this._enumIndex = 0;
        this._functionIndex = 0;
        this._parameterIndex = 0;
        this._typedefIndex = 0;
        this._typeParameterIndex = 0;
        this._variableIndex = 0;
        this.element = element;
        this.elementBuilder = new bare.createInstance(any,null,elementHolder,compilationUnit);
        this._elementHolder = elementHolder;
        this._functions = element.functions;
        this._parameters = element.parameters;
        this._typeParameters = element.typeParameters;
    }
    static _forExecutable : new(element : any,compilationUnit : any,elementHolder : any) => ElementWalker;

    consumeLocalElements() : void {
        this._functionIndex = this._functions.length;
    }
    getAccessor() : any {
        return this._accessors[this._accessorIndex++];
    }
    getClass() : any {
        return this._classes[this._classIndex++];
    }
    getConstructor() : any {
        return this._constructors[this._constructorIndex++];
    }
    getEnum() : any {
        return this._enums[this._enumIndex++];
    }
    getFunction() : any {
        return this._functions[this._functionIndex++];
    }
    getParameter() : any {
        return this._parameters[this._parameterIndex++];
    }
    getTypedef() : any {
        return this._typedefs[this._typedefIndex++];
    }
    getTypeParameter() : any {
        return this._typeParameters[this._typeParameterIndex++];
    }
    getVariable() : any {
        return this._variables[this._variableIndex++];
    }
    validate() : void {
        var check : (elements : core.DartList<any>,index : number) => void = (elements : core.DartList<any>,index : number) : void =>  {
            if (elements != null && elements.length != index) {
                throw new core.StateError(`Unmatched ${elements[index].runtimeType} ${elements[index]}`);
            }
        };
        check(this._accessors,this._accessorIndex);
        check(this._classes,this._classIndex);
        check(this._constructors,this._constructorIndex);
        check(this._enums,this._enumIndex);
        check(this._functions,this._functionIndex);
        check(this._parameters,this._parameterIndex);
        check(this._typedefs,this._typedefIndex);
        check(this._typeParameters,this._typeParameterIndex);
        check(this._variables,this._variableIndex);
        let element : any = this.element;
        if (is(element, any)) {
            element.functions = this._elementHolder.functions;
            element.labels = this._elementHolder.labels;
            element.localVariables = this._elementHolder.localVariables;
        }
    }
    static _isNotSynthetic(e : any) : boolean {
        return !e.isSynthetic;
    }
}

export namespace _ElementMismatchException {
    export type Constructors = '_ElementMismatchException';
    export type Interface = Omit<_ElementMismatchException, Constructors>;
}
@DartClass
export class _ElementMismatchException extends any {
    constructor(compilationUnit : any,element : any,cause? : any) {
    }
    @defaultConstructor
    _ElementMismatchException(compilationUnit : any,element : any,cause? : any) {
        cause = cause || null;
        super.DartObject(`Element mismatch in ${compilationUnit} at ${element}`,cause);
    }
}

export class properties {
}
