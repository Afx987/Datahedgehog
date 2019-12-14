/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/domains/analysis/navigation_dart.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var computeDartNavigation : (collector : any,unit : any,offset : number,length : number) => any = (collector : any,unit : any,offset : number,length : number) : any =>  {
    let dartCollector : _DartNavigationCollector = new _DartNavigationCollector(collector);
    let visitor : _DartNavigationComputerVisitor = new _DartNavigationComputerVisitor(dartCollector);
    if (offset == null || length == null) {
        unit.accept(visitor);
    }else {
        let node : any = _getNodeForRange(unit,offset,length);
        ((_9_)=>(!!_9_)?_9_.accept(visitor):null)(node);
    }
    return collector;
};
export var _getNodeForRange : (unit : any,offset : number,length : number) => any = (unit : any,offset : number,length : number) : any =>  {
    let node : any = new bare.createInstance(any,null,offset,offset + length).searchWithin(unit);
    for(let n : any = node; n != null; n = n.parent){
        if (is(n, any)) {
            return n;
        }
    }
    return node;
};
export namespace DartNavigationComputer {
    export type Constructors = 'DartNavigationComputer';
    export type Interface = Omit<DartNavigationComputer, Constructors>;
}
@DartClass
@Implements(any)
export class DartNavigationComputer implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNavigation(collector : any,context : any,source : any,offset : number,length : number) : void {
        let libraries : core.DartList<any> = context.getLibrariesContaining(source);
        if (libraries.isNotEmpty) {
            let unit : any = context.getResolvedCompilationUnit2(source,libraries.first);
            if (unit != null) {
                computeDartNavigation(collector,unit,offset,length);
            }
        }
    }
    constructor() {
    }
    @defaultConstructor
    DartNavigationComputer() {
    }
}

export namespace _DartNavigationCollector {
    export type Constructors = '_DartNavigationCollector';
    export type Interface = Omit<_DartNavigationCollector, Constructors>;
}
@DartClass
export class _DartNavigationCollector {
    collector : any;

    constructor(collector : any) {
    }
    @defaultConstructor
    _DartNavigationCollector(collector : any) {
        this.collector = collector;
    }
    _addRegion(offset : number,length : number,element : any) : void {
        if (is(element, any)) {
            element = (element as any).field;
        }
        if (op(Op.EQUALS,element,null) || op(Op.EQUALS,element,DynamicElementImpl.instance)) {
            return;
        }
        if (op(Op.EQUALS,element.location,null)) {
            return;
        }
        let kind : any = null /*topLevl*/.convertElementKind(element.kind);
        let location : any = null /*topLevl*/.newLocation_fromElement(element);
        if (op(Op.EQUALS,location,null)) {
            return;
        }
        this.collector.addRegion(offset,length,kind,location);
    }
    _addRegion_nodeStart_nodeEnd(a : any,b : any,element : any) : void {
        let offset : number = a.offset;
        let length : number = op(Op.MINUS,b.end,offset);
        this._addRegion(offset,length,element);
    }
    _addRegionForNode(node : any,element : any) : void {
        if (op(Op.EQUALS,node,null)) {
            return;
        }
        let offset : number = node.offset;
        let length : number = node.length;
        this._addRegion(offset,length,element);
    }
    _addRegionForToken(token : any,element : any) : void {
        let offset : number = token.offset;
        let length : number = token.length;
        this._addRegion(offset,length,element);
    }
}

export namespace _DartNavigationComputerVisitor {
    export type Constructors = '_DartNavigationComputerVisitor';
    export type Interface = Omit<_DartNavigationComputerVisitor, Constructors>;
}
@DartClass
export class _DartNavigationComputerVisitor extends any {
    computer : _DartNavigationCollector;

    constructor(computer : _DartNavigationCollector) {
    }
    @defaultConstructor
    _DartNavigationComputerVisitor(computer : _DartNavigationCollector) {
        this.computer = computer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) {
        let element : any = node.element;
        if (is(element, any) && element.isSynthetic) {
            element = element.enclosingElement;
        }
        let name : any = node.name;
        if (is(name, any)) {
            let prefixElement : any = name.prefix.staticElement;
            if (is(prefixElement, any)) {
                prefixElement = element;
            }
            this.computer._addRegionForNode(name.prefix,prefixElement);
            this.computer._addRegionForNode(name.identifier,element);
        }else {
            this.computer._addRegionForNode(name,element);
        }
        this.computer._addRegionForNode(node.constructorName,element);
        ((_10_)=>(!!_10_)?_10_.accept(this):null)(node.arguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) {
        ((_11_)=>(!!_11_)?_11_.accept(this):null)(node.leftHandSide);
        this.computer._addRegionForToken(node.operator,node.bestElement);
        ((_12_)=>(!!_12_)?_12_.accept(this):null)(node.rightHandSide);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) {
        ((_13_)=>(!!_13_)?_13_.accept(this):null)(node.leftOperand);
        this.computer._addRegionForToken(node.operator,node.bestElement);
        ((_14_)=>(!!_14_)?_14_.accept(this):null)(node.rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(unit : any) {
        let nodes : core.DartList<any> = new core.DartList.literal<any>();
        nodes.addAll(unit.directives);
        nodes.addAll(unit.declarations);
        nodes.sort((a : any,b : any) =>  {
            return op(Op.MINUS,a.offset,b.offset);
        });
        for(let node of nodes) {
            node.accept(this);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) {
        {
            let firstNode : any = node.returnType;
            let lastNode : any = node.name;
            if (op(Op.EQUALS,lastNode,null)) {
                lastNode = firstNode;
            }
            if (firstNode != null && lastNode != null) {
                this.computer._addRegion_nodeStart_nodeEnd(firstNode,lastNode,node.element);
            }
        }
        super.visitConstructorDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorName(node : any) {
        let parent : any = node.parent;
        if (is(parent, any) && op(Op.EQUALS,parent.constructorName,node)) {
            this._addConstructorName(parent,node);
        }else if (is(parent, any) && op(Op.EQUALS,parent.redirectedConstructor,node)) {
            this._addConstructorName(node,node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDeclaredIdentifier(node : any) {
        if (op(Op.EQUALS,node.type,null)) {
            let token : any = node.keyword;
            if (op(Op.EQUALS,((t)=>(!!t)?t.keyword:null)(token),Keyword.VAR)) {
                let inferredType : any = ((t)=>(!!t)?t.bestType:null)(node.identifier);
                let element : any = ((t)=>(!!t)?t.element:null)(inferredType);
                if (element != null) {
                    this.computer._addRegionForToken(token,element);
                }
            }
        }
        super.visitDeclaredIdentifier(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) {
        let exportElement : any = node.element;
        if (exportElement != null) {
            let libraryElement : any = exportElement.exportedLibrary;
            this._addUriDirectiveRegion(node,libraryElement);
        }
        super.visitExportDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) {
        let importElement : any = node.element;
        if (importElement != null) {
            let libraryElement : any = importElement.importedLibrary;
            this._addUriDirectiveRegion(node,libraryElement);
        }
        super.visitImportDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) {
        super.visitIndexExpression(node);
        let element : any = node.bestElement;
        this.computer._addRegionForToken(node.leftBracket,element);
        this.computer._addRegionForToken(node.rightBracket,element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryDirective(node : any) {
        this.computer._addRegionForNode(node.name,node.element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartDirective(node : any) {
        this._addUriDirectiveRegion(node,node.element);
        super.visitPartDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartOfDirective(node : any) {
        this.computer._addRegionForNode(node.libraryName,node.element);
        super.visitPartOfDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) {
        super.visitPostfixExpression(node);
        this.computer._addRegionForToken(node.operator,node.bestElement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) {
        this.computer._addRegionForToken(node.operator,node.bestElement);
        super.visitPrefixExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingConstructorInvocation(node : any) {
        let element : any = node.staticElement;
        if (element != null && element.isSynthetic) {
            element = element.enclosingElement;
        }
        this.computer._addRegionForToken(node.thisKeyword,element);
        this.computer._addRegionForNode(node.constructorName,element);
        ((_15_)=>(!!_15_)?_15_.accept(this):null)(node.argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) {
        if (is(node.parent, any)) {
            return;
        }
        let element : any = node.bestElement;
        this.computer._addRegionForNode(node,element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) {
        let element : any = node.staticElement;
        if (element != null && element.isSynthetic) {
            element = element.enclosingElement;
        }
        this.computer._addRegionForToken(node.superKeyword,element);
        this.computer._addRegionForNode(node.constructorName,element);
        ((_16_)=>(!!_16_)?_16_.accept(this):null)(node.argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationList(node : any) {
        var getCommonElement : (variables : core.DartList<any>) => any = (variables : core.DartList<any>) : any =>  {
            let firstElement : any = ((t)=>(!!t)?t.element:null)(((t)=>(!!t)?t.bestType:null)(variables[0].name));
            if (op(Op.EQUALS,firstElement,null)) {
                return null;
            }
            for(let i : number = 1; i < variables.length; i++){
                let element : any = ((t)=>(!!t)?t.element:null)(((t)=>(!!t)?t.bestType:null)(variables[1].name));
                if (element != firstElement) {
                    return null;
                }
            }
            return firstElement;
        };
        if (op(Op.EQUALS,node.type,null)) {
            let token : any = node.keyword;
            if (op(Op.EQUALS,((t)=>(!!t)?t.keyword:null)(token),Keyword.VAR)) {
                let element : any = getCommonElement(node.variables);
                if (element != null) {
                    this.computer._addRegionForToken(token,element);
                }
            }
        }
        super.visitVariableDeclarationList(node);
    }
    _addConstructorName(parent : any,node : any) : void {
        let element : any = node.staticElement;
        if (op(Op.EQUALS,element,null)) {
            return;
        }
        if (element.isSynthetic) {
            element = element.enclosingElement;
        }
        let typeName : any = node.type;
        {
            let name : any = typeName.name;
            let className : any = name;
            if (is(name, any)) {
                name.prefix.accept(this);
                className = name.identifier;
            }
            this.computer._addRegionForNode(className,element);
        }
        let typeArguments : any = typeName.typeArguments;
        if (typeArguments != null) {
            typeArguments.accept(this);
        }
        if (node.name != null) {
            this.computer._addRegionForNode(node.name,element);
        }
    }
    _addUriDirectiveRegion(node : any,element : any) : void {
        if (element != null) {
            let source : any = element.source;
            if (element.context.exists(source)) {
                this.computer._addRegionForNode(node.uri,element);
            }
        }
    }
}

export class properties {
}
