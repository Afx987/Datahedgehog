/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/dart/constant/utilities_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../../generated/test_support";
import * as lib4 from "./../../../generated/engine_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ConstantFinderTest);
        defineReflectiveTests(ReferenceFinderTest);
    });
};
export namespace ConstantFinderTest {
    export type Constructors = 'ConstantFinderTest';
    export type Interface = Omit<ConstantFinderTest, Constructors>;
}
@DartClass
export class ConstantFinderTest {
    _node : any;

    _typeProvider : any;

    _context : any;

    _source : any;

    setUp() : void {
        this._typeProvider = new bare.createInstance(any,null);
        this._context = new _TestAnalysisContext();
        this._source = new lib3.TestSource();
    }
    test_visitAnnotation_constantVariable() : void {
        let compilationUnitElement : any = ((_) : any =>  {
            {
                _.source = this._source;
                return _;
            }
        })(ElementFactory.compilationUnit('/test.dart',this._source));
        ElementFactory.library(this._context,'L').definingCompilationUnit = compilationUnitElement;
        let elementAnnotation : any = new bare.createInstance(any,null,compilationUnitElement);
        this._node = elementAnnotation.annotationAst = ((_) : any =>  {
            {
                _.elementAnnotation = elementAnnotation;
                return _;
            }
        })(AstTestFactory.annotation(AstTestFactory.identifier3('x')));
        expect(this._findAnnotations(),contains(this._node));
    }
    test_visitAnnotation_enumConstant() : void {
        let annotation : any = AstTestFactory.annotation2(AstTestFactory.identifier3('A'),null,AstTestFactory.argumentList());
        this._node = astFactory.enumConstantDeclaration(null,new core.DartList.literal<any>(annotation),AstTestFactory.identifier3('C'));
        expect(this._findConstants(),isEmpty);
    }
    test_visitAnnotation_invocation() : void {
        let compilationUnitElement : any = ((_) : any =>  {
            {
                _.source = this._source;
                return _;
            }
        })(ElementFactory.compilationUnit('/test.dart',this._source));
        ElementFactory.library(this._context,'L').definingCompilationUnit = compilationUnitElement;
        let elementAnnotation : any = new bare.createInstance(any,null,compilationUnitElement);
        this._node = elementAnnotation.annotationAst = ((_) : any =>  {
            {
                _.elementAnnotation = elementAnnotation;
                return _;
            }
        })(AstTestFactory.annotation2(AstTestFactory.identifier3('A'),null,AstTestFactory.argumentList()));
        expect(this._findAnnotations(),contains(this._node));
    }
    test_visitAnnotation_partOf() : void {
        let annotation : any = AstTestFactory.annotation2(AstTestFactory.identifier3('A'),null,AstTestFactory.argumentList());
        this._node = AstTestFactory.partOfDirective2(new core.DartList.literal<any>(annotation),AstTestFactory.libraryIdentifier2(new core.DartList.literal<string>('L')));
        expect(this._findConstants(),isEmpty);
    }
    test_visitConstructorDeclaration_const() : void {
        let element : any = this._setupConstructorDeclaration("A",true);
        expect(this._findConstants(),contains(element));
    }
    test_visitConstructorDeclaration_nonConst() : void {
        this._setupConstructorDeclaration("A",false);
        expect(this._findConstants(),isEmpty);
    }
    test_visitVariableDeclaration_const() : void {
        let element : any = this._setupVariableDeclaration("v",true,true);
        expect(this._findConstants(),contains(element));
    }
    test_visitVariableDeclaration_final_inClass() : void {
        this._setupFieldDeclaration('C','f',Keyword.FINAL);
        expect(this._findConstants(),isEmpty);
    }
    test_visitVariableDeclaration_final_inClassWithConstConstructor() : void {
        let field : any = this._setupFieldDeclaration('C','f',Keyword.FINAL,{
            hasConstConstructor : true});
        expect(this._findConstants(),contains(field.element));
    }
    test_visitVariableDeclaration_final_outsideClass() : void {
        this._setupVariableDeclaration('v',false,true,{
            isFinal : true});
        expect(this._findConstants(),isEmpty);
    }
    test_visitVariableDeclaration_noInitializer() : void {
        this._setupVariableDeclaration("v",true,false);
        expect(this._findConstants(),isEmpty);
    }
    test_visitVariableDeclaration_nonConst() : void {
        this._setupVariableDeclaration("v",false,true);
        expect(this._findConstants(),isEmpty);
    }
    test_visitVariableDeclaration_static_const_inClass() : void {
        let field : any = this._setupFieldDeclaration('C','f',Keyword.CONST,{
            isStatic : true});
        expect(this._findConstants(),contains(field.element));
    }
    test_visitVariableDeclaration_static_const_inClassWithConstConstructor() : void {
        let field : any = this._setupFieldDeclaration('C','f',Keyword.CONST,{
            isStatic : true,hasConstConstructor : true});
        expect(this._findConstants(),contains(field.element));
    }
    test_visitVariableDeclaration_static_final_inClassWithConstConstructor() : void {
        let field : any = this._setupFieldDeclaration('C','f',Keyword.FINAL,{
            isStatic : true,hasConstConstructor : true});
        expect(this._findConstants(),isNot(contains(field.element)));
    }
    test_visitVariableDeclaration_uninitialized_final_inClassWithConstConstructor() : void {
        let field : any = this._setupFieldDeclaration('C','f',Keyword.FINAL,{
            isInitialized : false,hasConstConstructor : true});
        expect(this._findConstants(),isNot(contains(field.element)));
    }
    test_visitVariableDeclaration_uninitialized_static_const_inClass() : void {
        this._setupFieldDeclaration('C','f',Keyword.CONST,{
            isStatic : true,isInitialized : false});
        expect(this._findConstants(),isEmpty);
    }
    _findAnnotations() : core.DartList<any> {
        let annotations : core.DartSet<any> = new core.DartSet<any>();
        for(let target of this._findConstants()) {
            if (is(target, any)) {
                expect(target.context,same(this._context));
                expect(target.source,same(this._source));
                annotations.add(target.annotationAst);
            }
        }
        return new core.DartList.from(annotations);
    }
    _findConstants() : core.DartList<any> {
        let finder : any = new bare.createInstance(any,null);
        this._node.accept(finder);
        let constants : core.DartList<any> = finder.constantsToCompute;
        expect(constants,isNotNull);
        return constants;
    }
    _setupConstructorDeclaration(name : string,isConst : boolean) : any {
        let constKeyword : any = isConst ? Keyword.CONST : null;
        let constructorDeclaration : any = AstTestFactory.constructorDeclaration2(constKeyword,null,null,name,AstTestFactory.formalParameterList(),null,AstTestFactory.blockFunctionBody2());
        let classElement : any = ElementFactory.classElement2(name);
        let element : any = ElementFactory.constructorElement(classElement,name,isConst);
        constructorDeclaration.element = element;
        this._node = constructorDeclaration;
        return element;
    }
    _setupFieldDeclaration(className : string,fieldName : string,keyword : any,_namedArguments? : {isInitialized? : boolean,isStatic? : boolean,hasConstConstructor? : boolean}) : any {
        let {isInitialized,isStatic,hasConstConstructor} = Object.assign({
            "isInitialized" : true,
            "isStatic" : false,
            "hasConstConstructor" : false}, _namedArguments );
        let variableDeclaration : any = isInitialized ? AstTestFactory.variableDeclaration2(fieldName,AstTestFactory.integer(0)) : AstTestFactory.variableDeclaration(fieldName);
        let fieldElement : any = ElementFactory.fieldElement(fieldName,isStatic,op(Op.EQUALS,keyword,Keyword.FINAL),op(Op.EQUALS,keyword,Keyword.CONST),this._typeProvider.intType);
        variableDeclaration.name.staticElement = fieldElement;
        let fieldDeclaration : any = AstTestFactory.fieldDeclaration2(isStatic,keyword,new core.DartList.literal<any>(variableDeclaration));
        let classDeclaration : any = AstTestFactory.classDeclaration(null,className,null,null,null,null);
        classDeclaration.members.add(fieldDeclaration);
        this._node = classDeclaration;
        let classElement : any = ElementFactory.classElement2(className);
        classElement.fields = new core.DartList.literal<any>(fieldElement);
        classDeclaration.name.staticElement = classElement;
        if (hasConstConstructor) {
            let constructorDeclaration : any = AstTestFactory.constructorDeclaration2(Keyword.CONST,null,AstTestFactory.identifier3(className),null,AstTestFactory.formalParameterList(),null,AstTestFactory.blockFunctionBody2());
            classDeclaration.members.add(constructorDeclaration);
            let constructorElement : any = ElementFactory.constructorElement(classElement,'',true);
            constructorDeclaration.element = constructorElement;
            classElement.constructors = new core.DartList.literal<any>(constructorElement);
        }else {
            classElement.constructors = ConstructorElement.EMPTY_LIST;
        }
        return variableDeclaration;
    }
    _setupVariableDeclaration(name : string,isConst : boolean,isInitialized : boolean,_namedArguments? : {isFinal? : any}) : any {
        let {isFinal} = Object.assign({
            "isFinal" : false}, _namedArguments );
        let variableDeclaration : any = isInitialized ? AstTestFactory.variableDeclaration2(name,AstTestFactory.integer(0)) : AstTestFactory.variableDeclaration(name);
        let identifier : any = variableDeclaration.name;
        let element : any = ElementFactory.localVariableElement(identifier);
        identifier.staticElement = element;
        let keyword : any = isConst ? Keyword.CONST : isFinal ? Keyword.FINAL : null;
        AstTestFactory.variableDeclarationList2(keyword,new core.DartList.literal(variableDeclaration));
        this._node = variableDeclaration;
        return element;
    }
    constructor() {
    }
    @defaultConstructor
    ConstantFinderTest() {
    }
}

export namespace ReferenceFinderTest {
    export type Constructors = 'ReferenceFinderTest';
    export type Interface = Omit<ReferenceFinderTest, Constructors>;
}
@DartClass
export class ReferenceFinderTest {
    _referenceGraph : any;

    _head : any;

    _tail : any;

    setUp() : void {
        this._referenceGraph = new bare.createInstance(any,null);
        this._head = ElementFactory.topLevelVariableElement2("v1");
    }
    test_visitSimpleIdentifier_const() : void {
        this._visitNode(this._makeTailVariable("v2",true));
        this._assertOneArc(this._tail);
    }
    test_visitSuperConstructorInvocation_const() : void {
        this._visitNode(this._makeTailSuperConstructorInvocation("A",true));
        this._assertOneArc(this._tail);
    }
    test_visitSuperConstructorInvocation_nonConst() : void {
        this._visitNode(this._makeTailSuperConstructorInvocation("A",false));
        this._assertOneArc(this._tail);
    }
    test_visitSuperConstructorInvocation_unresolved() : void {
        let superConstructorInvocation : any = AstTestFactory.superConstructorInvocation();
        this._visitNode(superConstructorInvocation);
        this._assertNoArcs();
    }
    _assertNoArcs() : void {
        let tails : core.DartSet<any> = this._referenceGraph.getTails(this._head);
        expect(tails,hasLength(0));
    }
    _assertOneArc(tail : any) : void {
        let tails : core.DartSet<any> = this._referenceGraph.getTails(this._head);
        expect(tails,hasLength(1));
        expect(tails.first,same(tail));
    }
    _createReferenceFinder(source : any) : any {
        return new bare.createInstance(any,null,(dependency : any) =>  {
            this._referenceGraph.addEdge(source,dependency);
        });
    }
    _makeTailSuperConstructorInvocation(name : string,isConst : boolean) : any {
        let initializers : core.DartList<any> = new core.DartList<any>();
        let constructorDeclaration : any = AstTestFactory.constructorDeclaration(AstTestFactory.identifier3(name),null,AstTestFactory.formalParameterList(),initializers);
        if (isConst) {
            constructorDeclaration.constKeyword = new bare.createInstance(any,null,Keyword.CONST,0);
        }
        let classElement : any = ElementFactory.classElement2(name);
        let superConstructorInvocation : any = AstTestFactory.superConstructorInvocation();
        let constructorElement : any = ElementFactory.constructorElement(classElement,name,isConst);
        this._tail = constructorElement;
        superConstructorInvocation.staticElement = constructorElement;
        return superConstructorInvocation;
    }
    _makeTailVariable(name : string,isConst : boolean) : any {
        let variableDeclaration : any = AstTestFactory.variableDeclaration(name);
        let variableElement : any = ElementFactory.constLocalVariableElement(name);
        this._tail = variableElement;
        variableElement.isConst = isConst;
        AstTestFactory.variableDeclarationList2(isConst ? Keyword.CONST : Keyword.VAR,new core.DartList.literal(variableDeclaration));
        let identifier : any = AstTestFactory.identifier3(name);
        identifier.staticElement = variableElement;
        return identifier;
    }
    _visitNode(node : any) : void {
        node.accept(this._createReferenceFinder(this._head));
    }
    constructor() {
    }
    @defaultConstructor
    ReferenceFinderTest() {
    }
}

export namespace _TestAnalysisContext {
    export type Constructors = lib4.TestAnalysisContext.Constructors | '_TestAnalysisContext';
    export type Interface = Omit<_TestAnalysisContext, Constructors>;
}
@DartClass
export class _TestAnalysisContext extends lib4.TestAnalysisContext {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getContextFor(source : any) : any {
        return this;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TestAnalysisContext() {
    }
}

export class properties {
}
