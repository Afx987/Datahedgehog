/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/element_resolver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test_case";
import * as lib4 from "./test_support";
import * as lib5 from "./analysis_context_factory";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ElementResolverCodeTest);
        defineReflectiveTests(ElementResolverTest);
    });
};
export namespace ElementResolverCodeTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'ElementResolverCodeTest';
    export type Interface = Omit<ElementResolverCodeTest, Constructors>;
}
@DartClass
export class ElementResolverCodeTest extends lib3.ResolverTestCase {
    test_annotation_class_namedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/a.dart','class A {\n  const A.named();\n}\n');
            await this._validateAnnotation('','@A.named()',(name1 : any,name2 : any,name3 : any,annotationElement : any) =>  {
                expect(name1,isNotNull);
                expect(name1.staticElement,new bare.createInstance(any,null));
                expect(resolutionMap.staticElementForIdentifier(name1).displayName,'A');
                expect(name2,isNotNull);
                expect(name2.staticElement,new bare.createInstance(any,null));
                expect(resolutionMap.staticElementForIdentifier(name2).displayName,'named');
                expect(name3,isNull);
                if (is(annotationElement, any)) {
                    expect(annotationElement,same(name2.staticElement));
                    expect(annotationElement.enclosingElement,name1.staticElement);
                    expect(annotationElement.displayName,'named');
                    expect(annotationElement.parameters,isEmpty);
                }else {
                    fail('Expected "annotationElement" is ConstructorElement, ' + `but (${((t)=>(!!t)?t.runtimeType:null)(annotationElement)}) ${annotationElement} found.`);
                }
            });
        } )());
    }

    test_annotation_class_prefixed_namedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/a.dart','class A {\n  const A.named();\n}\n');
            await this._validateAnnotation('as p','@p.A.named()',(name1 : any,name2 : any,name3 : any,annotationElement : any) =>  {
                expect(name1,isNotNull);
                expect(name1.staticElement,new bare.createInstance(any,null));
                expect(resolutionMap.staticElementForIdentifier(name1).displayName,'p');
                expect(name2,isNotNull);
                expect(name2.staticElement,new bare.createInstance(any,null));
                expect(resolutionMap.staticElementForIdentifier(name2).displayName,'A');
                expect(name3,isNotNull);
                expect(name3.staticElement,new bare.createInstance(any,null));
                expect(resolutionMap.staticElementForIdentifier(name3).displayName,'named');
                if (is(annotationElement, any)) {
                    expect(annotationElement,same(name3.staticElement));
                    expect(annotationElement.enclosingElement,name2.staticElement);
                    expect(annotationElement.displayName,'named');
                    expect(annotationElement.parameters,isEmpty);
                }else {
                    fail('Expected "annotationElement" is ConstructorElement, ' + `but (${((t)=>(!!t)?t.runtimeType:null)(annotationElement)}) ${annotationElement} found.`);
                }
            });
        } )());
    }

    test_annotation_class_prefixed_staticConstField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/a.dart','class A {\n  static const V = 0;\n}\n');
            await this._validateAnnotation('as p','@p.A.V',(name1 : any,name2 : any,name3 : any,annotationElement : any) =>  {
                expect(name1,isNotNull);
                expect(name1.staticElement,new bare.createInstance(any,null));
                expect(resolutionMap.staticElementForIdentifier(name1).displayName,'p');
                expect(name2,isNotNull);
                expect(name2.staticElement,new bare.createInstance(any,null));
                expect(resolutionMap.staticElementForIdentifier(name2).displayName,'A');
                expect(name3,isNotNull);
                expect(name3.staticElement,new bare.createInstance(any,null));
                expect(resolutionMap.staticElementForIdentifier(name3).displayName,'V');
                if (is(annotationElement, any)) {
                    expect(annotationElement,same(name3.staticElement));
                    expect(annotationElement.enclosingElement,name2.staticElement);
                    expect(annotationElement.displayName,'V');
                }else {
                    fail('Expected "annotationElement" is PropertyAccessorElement, ' + `but (${((t)=>(!!t)?t.runtimeType:null)(annotationElement)}) ${annotationElement} found.`);
                }
            });
        } )());
    }

    test_annotation_class_prefixed_unnamedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/a.dart','class A {\n  const A();\n}\n');
            await this._validateAnnotation('as p','@p.A',(name1 : any,name2 : any,name3 : any,annotationElement : any) =>  {
                expect(name1,isNotNull);
                expect(name1.staticElement,new bare.createInstance(any,null));
                expect(resolutionMap.staticElementForIdentifier(name1).displayName,'p');
                expect(name2,isNotNull);
                expect(name2.staticElement,new bare.createInstance(any,null));
                expect(resolutionMap.staticElementForIdentifier(name2).displayName,'A');
                expect(name3,isNull);
                if (is(annotationElement, any)) {
                    expect(annotationElement.enclosingElement,name2.staticElement);
                    expect(annotationElement.displayName,'');
                    expect(annotationElement.parameters,isEmpty);
                }else {
                    fail('Expected "annotationElement" is ConstructorElement, ' + `but (${((t)=>(!!t)?t.runtimeType:null)(annotationElement)}) ${annotationElement} found.`);
                }
            });
        } )());
    }

    test_annotation_class_staticConstField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/a.dart','class A {\n  static const V = 0;\n}\n');
            await this._validateAnnotation('','@A.V',(name1 : any,name2 : any,name3 : any,annotationElement : any) =>  {
                expect(name1,isNotNull);
                expect(name1.staticElement,new bare.createInstance(any,null));
                expect(resolutionMap.staticElementForIdentifier(name1).displayName,'A');
                expect(name2,isNotNull);
                expect(name2.staticElement,new bare.createInstance(any,null));
                expect(resolutionMap.staticElementForIdentifier(name2).displayName,'V');
                expect(name3,isNull);
                if (is(annotationElement, any)) {
                    expect(annotationElement,same(name2.staticElement));
                    expect(annotationElement.enclosingElement,name1.staticElement);
                    expect(annotationElement.displayName,'V');
                }else {
                    fail('Expected "annotationElement" is PropertyAccessorElement, ' + `but (${((t)=>(!!t)?t.runtimeType:null)(annotationElement)}) ${annotationElement} found.`);
                }
            });
        } )());
    }

    test_annotation_class_unnamedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/a.dart','class A {\n  const A();\n}\n');
            await this._validateAnnotation('','@A',(name1 : any,name2 : any,name3 : any,annotationElement : any) =>  {
                expect(name1,isNotNull);
                expect(name1.staticElement,new bare.createInstance(any,null));
                expect(resolutionMap.staticElementForIdentifier(name1).displayName,'A');
                expect(name2,isNull);
                expect(name3,isNull);
                if (is(annotationElement, any)) {
                    expect(annotationElement.enclosingElement,name1.staticElement);
                    expect(annotationElement.displayName,'');
                    expect(annotationElement.parameters,isEmpty);
                }else {
                    fail('Expected "annotationElement" is ConstructorElement, ' + `but (${((t)=>(!!t)?t.runtimeType:null)(annotationElement)}) ${annotationElement} found.`);
                }
            });
        } )());
    }

    test_annotation_topLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/a.dart','const V = 0;\n');
            await this._validateAnnotation('','@V',(name1 : any,name2 : any,name3 : any,annotationElement : any) =>  {
                expect(name1,isNotNull);
                expect(name1.staticElement,new bare.createInstance(any,null));
                expect(resolutionMap.staticElementForIdentifier(name1).displayName,'V');
                expect(name2,isNull);
                expect(name3,isNull);
                if (is(annotationElement, any)) {
                    expect(annotationElement,same(name1.staticElement));
                    expect(annotationElement.enclosingElement,new bare.createInstance(any,null));
                    expect(annotationElement.displayName,'V');
                }else {
                    fail('Expected "annotationElement" is PropertyAccessorElement, ' + `but (${((t)=>(!!t)?t.runtimeType:null)(annotationElement)}) ${annotationElement} found.`);
                }
            });
        } )());
    }

    test_annotation_topLevelVariable_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/a.dart','const V = 0;\n');
            await this._validateAnnotation('as p','@p.V',(name1 : any,name2 : any,name3 : any,annotationElement : any) =>  {
                expect(name1,isNotNull);
                expect(name1.staticElement,new bare.createInstance(any,null));
                expect(resolutionMap.staticElementForIdentifier(name1).displayName,'p');
                expect(name2,isNotNull);
                expect(name2.staticElement,new bare.createInstance(any,null));
                expect(resolutionMap.staticElementForIdentifier(name2).displayName,'V');
                expect(name3,isNull);
                if (is(annotationElement, any)) {
                    expect(annotationElement,same(name2.staticElement));
                    expect(annotationElement.enclosingElement,new bare.createInstance(any,null));
                    expect(annotationElement.displayName,'V');
                }else {
                    fail('Expected "annotationElement" is PropertyAccessorElement, ' + `but (${((t)=>(!!t)?t.runtimeType:null)(annotationElement)}) ${annotationElement} found.`);
                }
            });
        } )());
    }

    _validateAnnotation(annotationPrefix : string,annotationText : string,validator : (name1 : any,name2 : any,name3 : any,annotationElement : any) => any) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit : any = await this.resolveSource(`import 'a.dart' ${annotationPrefix};\n${annotationText}\nclass C {}\n`);
            let clazz = unit.declarations.single as any;
            let annotation : any = clazz.metadata.single;
            let name : any = annotation.name;
            let annotationElement : any = annotation.element;
            if (is(name, any)) {
                validator(name,null,annotation.constructorName,annotationElement);
            }else if (is(name, any)) {
                validator(name.prefix,name.identifier,annotation.constructorName,annotationElement);
            }else {
                fail(`Uknown "name": ${((t)=>(!!t)?t.runtimeType:null)(name)} ${name}`);
            }
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ElementResolverCodeTest() {
    }
}

export namespace ElementResolverTest {
    export type Constructors = lib4.EngineTestCase.Constructors | 'ElementResolverTest';
    export type Interface = Omit<ElementResolverTest, Constructors>;
}
@DartClass
export class ElementResolverTest extends lib4.EngineTestCase {
    _listener : lib4.GatheringErrorListener;

    _typeProvider : any;

    _definingLibrary : any;

    _visitor : any;

    _resolver : any;

    fail_visitExportDirective_combinators() : void {
        fail("Not yet tested");
        let directive : any = AstTestFactory.exportDirective2(null,new core.DartList.literal(AstTestFactory.hideCombinator2(new core.DartList.literal("A"))));
        this._resolveNode(directive);
        this._listener.assertNoErrors();
    }
    fail_visitFunctionExpressionInvocation() : void {
        fail("Not yet tested");
        this._listener.assertNoErrors();
    }
    fail_visitImportDirective_combinators_noPrefix() : void {
        fail("Not yet tested");
        let directive : any = AstTestFactory.importDirective3(null,null,new core.DartList.literal(AstTestFactory.showCombinator2(new core.DartList.literal("A"))));
        this._resolveNode(directive);
        this._listener.assertNoErrors();
    }
    fail_visitImportDirective_combinators_prefix() : void {
        fail("Not yet tested");
        let prefixName : string = "p";
        this._definingLibrary.imports = new core.DartList.literal<any>(ElementFactory.importFor(null,ElementFactory.prefix(prefixName)));
        let directive : any = AstTestFactory.importDirective3(null,prefixName,new core.DartList.literal(AstTestFactory.showCombinator2(new core.DartList.literal("A")),AstTestFactory.hideCombinator2(new core.DartList.literal("B"))));
        this._resolveNode(directive);
        this._listener.assertNoErrors();
    }
    fail_visitRedirectingConstructorInvocation() : void {
        fail("Not yet tested");
        this._listener.assertNoErrors();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this._listener = new lib4.GatheringErrorListener();
        this._typeProvider = new bare.createInstance(any,null);
        this._resolver = this._createResolver();
    }
    test_lookUpMethodInInterfaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let intType : any = this._typeProvider.intType;
            let classA : any = ElementFactory.classElement2("A");
            let operator : any = ElementFactory.methodElement("[]",intType,new core.DartList.literal(intType));
            classA.methods = new core.DartList.literal<any>(operator);
            let classB : any = ElementFactory.classElement2("B");
            classB.interfaces = new core.DartList.literal<any>(classA.type);
            let classC : any = ElementFactory.classElement2("C");
            classC.mixins = new core.DartList.literal<any>(classB.type);
            let classD : any = ElementFactory.classElement("D",classC.type);
            let array : any = AstTestFactory.identifier3("a");
            array.staticType = classD.type;
            let expression : any = AstTestFactory.indexExpression(array,AstTestFactory.identifier3("i"));
            expect(this._resolveIndexExpression(expression),same(operator));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitAssignmentExpression_compound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let intType : any = this._typeProvider.intType;
            let leftHandSide : any = AstTestFactory.identifier3("a");
            leftHandSide.staticType = intType;
            let assignment : any = AstTestFactory.assignmentExpression(leftHandSide,TokenType.PLUS_EQ,AstTestFactory.integer(1));
            this._resolveNode(assignment);
            expect(assignment.staticElement,same(this.getMethod(this._typeProvider.numType,"+")));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitAssignmentExpression_simple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let expression : any = AstTestFactory.assignmentExpression(AstTestFactory.identifier3("x"),TokenType.EQ,AstTestFactory.integer(0));
            this._resolveNode(expression);
            expect(expression.staticElement,isNull);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitBinaryExpression_bangEq() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let stringType : any = this._typeProvider.stringType;
            let left : any = AstTestFactory.identifier3("i");
            left.staticType = stringType;
            let expression : any = AstTestFactory.binaryExpression(left,TokenType.BANG_EQ,AstTestFactory.identifier3("j"));
            this._resolveNode(expression);
            let stringElement = stringType.element;
            expect(expression.staticElement,isNotNull);
            expect(expression.staticElement,stringElement.lookUpMethod(TokenType.EQ_EQ.lexeme,stringElement.library));
            expect(expression.propagatedElement,isNull);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitBinaryExpression_eq() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let stringType : any = this._typeProvider.stringType;
            let left : any = AstTestFactory.identifier3("i");
            left.staticType = stringType;
            let expression : any = AstTestFactory.binaryExpression(left,TokenType.EQ_EQ,AstTestFactory.identifier3("j"));
            this._resolveNode(expression);
            let stringElement = stringType.element;
            expect(expression.staticElement,stringElement.lookUpMethod(TokenType.EQ_EQ.lexeme,stringElement.library));
            expect(expression.propagatedElement,isNull);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitBinaryExpression_plus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let numType : any = this._typeProvider.numType;
            let left : any = AstTestFactory.identifier3("i");
            left.staticType = numType;
            let expression : any = AstTestFactory.binaryExpression(left,TokenType.PLUS,AstTestFactory.identifier3("j"));
            this._resolveNode(expression);
            expect(expression.staticElement,this.getMethod(numType,"+"));
            expect(expression.propagatedElement,isNull);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitBinaryExpression_plus_propagatedElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let numType : any = this._typeProvider.numType;
            let left : any = AstTestFactory.identifier3("i");
            left.propagatedType = numType;
            let expression : any = AstTestFactory.binaryExpression(left,TokenType.PLUS,AstTestFactory.identifier3("j"));
            this._resolveNode(expression);
            expect(expression.staticElement,isNull);
            expect(expression.propagatedElement,this.getMethod(numType,"+"));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitBreakStatement_withLabel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let label : string = "loop";
            let labelElement : any = new bare.createInstance(any,null,AstTestFactory.identifier3(label),false,false);
            let breakStatement : any = AstTestFactory.breakStatement2(label);
            let condition : any = AstTestFactory.booleanLiteral(true);
            let whileStatement : any = AstTestFactory.whileStatement(condition,breakStatement);
            expect(this._resolveBreak(breakStatement,labelElement,whileStatement),same(labelElement));
            expect(breakStatement.target,same(whileStatement));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitBreakStatement_withoutLabel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let statement : any = AstTestFactory.breakStatement();
            this._resolveStatement(statement,null,null);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitCommentReference_prefixedIdentifier_class_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let propName : string = "p";
            let getter : any = ElementFactory.getterElement(propName,false,this._typeProvider.intType);
            let setter : any = ElementFactory.setterElement(propName,false,this._typeProvider.intType);
            classA.accessors = new core.DartList.literal<any>(getter,setter);
            this._visitor.nameScope = ((_) : any =>  {
                {
                    defineNameWithoutChecking('A',classA);
                    return _;
                }
            })(new bare.createInstance(any,null,null));
            let prefixed : any = AstTestFactory.identifier5('A','p');
            let commentReference : any = astFactory.commentReference(null,prefixed);
            this._resolveNode(commentReference);
            expect(prefixed.prefix.staticElement,classA);
            expect(prefixed.identifier.staticElement,getter);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitCommentReference_prefixedIdentifier_class_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let method : any = ElementFactory.methodElement("m",this._typeProvider.intType);
            classA.methods = new core.DartList.literal<any>(method);
            this._visitor.nameScope = ((_) : any =>  {
                {
                    defineNameWithoutChecking('A',classA);
                    return _;
                }
            })(new bare.createInstance(any,null,null));
            let prefixed : any = AstTestFactory.identifier5('A','m');
            let commentReference : any = astFactory.commentReference(null,prefixed);
            this._resolveNode(commentReference);
            expect(prefixed.prefix.staticElement,classA);
            expect(prefixed.identifier.staticElement,method);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitCommentReference_prefixedIdentifier_class_operator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let method : any = ElementFactory.methodElement("==",this._typeProvider.boolType);
            classA.methods = new core.DartList.literal<any>(method);
            this._visitor.nameScope = ((_) : any =>  {
                {
                    defineNameWithoutChecking('A',classA);
                    return _;
                }
            })(new bare.createInstance(any,null,null));
            let prefixed : any = AstTestFactory.identifier5('A','==');
            let commentReference : any = astFactory.commentReference(null,prefixed);
            this._resolveNode(commentReference);
            expect(prefixed.prefix.staticElement,classA);
            expect(prefixed.identifier.staticElement,method);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitConstructorName_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let constructorName : string = "a";
            let constructor : any = ElementFactory.constructorElement2(classA,constructorName);
            classA.constructors = new core.DartList.literal<any>(constructor);
            let name : any = AstTestFactory.constructorName(AstTestFactory.typeName(classA),constructorName);
            this._resolveNode(name);
            expect(name.staticElement,same(constructor));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitConstructorName_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let constructorName : string = null;
            let constructor : any = ElementFactory.constructorElement2(classA,constructorName);
            classA.constructors = new core.DartList.literal<any>(constructor);
            let name : any = AstTestFactory.constructorName(AstTestFactory.typeName(classA),constructorName);
            this._resolveNode(name);
            expect(name.staticElement,same(constructor));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitContinueStatement_withLabel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let label : string = "loop";
            let labelElement : any = new bare.createInstance(any,null,AstTestFactory.identifier3(label),false,false);
            let continueStatement : any = AstTestFactory.continueStatement(label);
            let condition : any = AstTestFactory.booleanLiteral(true);
            let whileStatement : any = AstTestFactory.whileStatement(condition,continueStatement);
            expect(this._resolveContinue(continueStatement,labelElement,whileStatement),same(labelElement));
            expect(continueStatement.target,same(whileStatement));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitContinueStatement_withoutLabel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let statement : any = AstTestFactory.continueStatement();
            this._resolveStatement(statement,null,null);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitEnumDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnitElement : any = ElementFactory.compilationUnit('foo.dart');
            let enumElement : any = ElementFactory.enumElement(this._typeProvider,('E'));
            compilationUnitElement.enums = new core.DartList.literal<any>(enumElement);
            let enumNode : any = AstTestFactory.enumDeclaration2('E',new core.DartList.literal());
            let annotationNode : any = AstTestFactory.annotation(AstTestFactory.identifier3('a'));
            annotationNode.element = ElementFactory.classElement2('A');
            annotationNode.elementAnnotation = new bare.createInstance(any,null,compilationUnitElement);
            enumNode.metadata.add(annotationNode);
            enumNode.name.staticElement = enumElement;
            let metadata : core.DartList<any> = new core.DartList.literal<any>(annotationNode.elementAnnotation);
            this._resolveNode(enumNode);
            expect(metadata[0].element,annotationNode.element);
        } )());
    }

    test_visitExportDirective_noCombinators() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let directive : any = AstTestFactory.exportDirective2(null);
            directive.element = ElementFactory.exportFor(ElementFactory.library(this._definingLibrary.context,"lib"));
            this._resolveNode(directive);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitFieldFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let fieldName : string = "f";
            let intType : any = this._typeProvider.intType;
            let fieldElement : any = ElementFactory.fieldElement(fieldName,false,false,false,intType);
            let classA : any = ElementFactory.classElement2("A");
            classA.fields = new core.DartList.literal<any>(fieldElement);
            let parameter : any = AstTestFactory.fieldFormalParameter2(fieldName);
            let parameterElement : any = ElementFactory.fieldFormalParameter(parameter.identifier);
            parameterElement.field = fieldElement;
            parameterElement.type = intType;
            parameter.identifier.staticElement = parameterElement;
            this._resolveInClass(parameter,classA);
            expect(resolutionMap.elementDeclaredByFormalParameter(parameter).type,same(intType));
        } )());
    }

    test_visitImportDirective_noCombinators_noPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let directive : any = AstTestFactory.importDirective3(null,null);
            directive.element = ElementFactory.importFor(ElementFactory.library(this._definingLibrary.context,"lib"),null);
            this._resolveNode(directive);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitImportDirective_noCombinators_prefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let prefixName : string = "p";
            let importElement : any = ElementFactory.importFor(ElementFactory.library(this._definingLibrary.context,"lib"),ElementFactory.prefix(prefixName));
            this._definingLibrary.imports = new core.DartList.literal<any>(importElement);
            let directive : any = AstTestFactory.importDirective3(null,prefixName);
            directive.element = importElement;
            this._resolveNode(directive);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitImportDirective_withCombinators() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let combinator : any = AstTestFactory.showCombinator2(new core.DartList.literal("A","B","C"));
            let directive : any = AstTestFactory.importDirective3(null,null,new core.DartList.literal(combinator));
            let library : any = ElementFactory.library(this._definingLibrary.context,"lib");
            let varA : any = ElementFactory.topLevelVariableElement2("A");
            let varB : any = ElementFactory.topLevelVariableElement2("B");
            let varC : any = ElementFactory.topLevelVariableElement2("C");
            let unit : any = library.definingCompilationUnit as any;
            unit.accessors = new core.DartList.literal<any>(varA.getter,varA.setter,varB.getter,varC.setter);
            unit.topLevelVariables = new core.DartList.literal<any>(varA,varB,varC);
            directive.element = ElementFactory.importFor(library,null);
            this._resolveNode(directive);
            expect(op(Op.INDEX,combinator.shownNames,0).staticElement,same(varA));
            expect(op(Op.INDEX,combinator.shownNames,1).staticElement,same(varB));
            expect(op(Op.INDEX,combinator.shownNames,2).staticElement,same(varC));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitIndexExpression_get() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let intType : any = this._typeProvider.intType;
            let getter : any = ElementFactory.methodElement("[]",intType,new core.DartList.literal(intType));
            classA.methods = new core.DartList.literal<any>(getter);
            let array : any = AstTestFactory.identifier3("a");
            array.staticType = classA.type;
            let expression : any = AstTestFactory.indexExpression(array,AstTestFactory.identifier3("i"));
            expect(this._resolveIndexExpression(expression),same(getter));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitIndexExpression_set() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let intType : any = this._typeProvider.intType;
            let setter : any = ElementFactory.methodElement("[]=",intType,new core.DartList.literal(intType));
            classA.methods = new core.DartList.literal<any>(setter);
            let array : any = AstTestFactory.identifier3("a");
            array.staticType = classA.type;
            let expression : any = AstTestFactory.indexExpression(array,AstTestFactory.identifier3("i"));
            AstTestFactory.assignmentExpression(expression,TokenType.EQ,AstTestFactory.integer(0));
            expect(this._resolveIndexExpression(expression),same(setter));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitInstanceCreationExpression_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let constructorName : string = "a";
            let constructor : any = ElementFactory.constructorElement2(classA,constructorName);
            classA.constructors = new core.DartList.literal<any>(constructor);
            let name : any = AstTestFactory.constructorName(AstTestFactory.typeName(classA),constructorName);
            name.staticElement = constructor;
            let creation : any = AstTestFactory.instanceCreationExpression(Keyword.NEW,name);
            this._resolveNode(creation);
            expect(creation.staticElement,same(constructor));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitInstanceCreationExpression_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let constructorName : string = null;
            let constructor : any = ElementFactory.constructorElement2(classA,constructorName);
            classA.constructors = new core.DartList.literal<any>(constructor);
            let name : any = AstTestFactory.constructorName(AstTestFactory.typeName(classA),constructorName);
            name.staticElement = constructor;
            let creation : any = AstTestFactory.instanceCreationExpression(Keyword.NEW,name);
            this._resolveNode(creation);
            expect(creation.staticElement,same(constructor));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitInstanceCreationExpression_unnamed_namedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let constructorName : string = null;
            let constructor : any = ElementFactory.constructorElement2(classA,constructorName);
            let parameterName : string = "a";
            let parameter : any = ElementFactory.namedParameter(parameterName);
            constructor.parameters = new core.DartList.literal<any>(parameter);
            classA.constructors = new core.DartList.literal<any>(constructor);
            let name : any = AstTestFactory.constructorName(AstTestFactory.typeName(classA),constructorName);
            name.staticElement = constructor;
            let creation : any = AstTestFactory.instanceCreationExpression(Keyword.NEW,name,new core.DartList.literal(AstTestFactory.namedExpression2(parameterName,AstTestFactory.integer(0))));
            this._resolveNode(creation);
            expect(creation.staticElement,same(constructor));
            expect((op(Op.INDEX,creation.argumentList.arguments,0) as any).name.label.staticElement,same(parameter));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitMethodInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let numType : any = this._typeProvider.numType;
            let left : any = AstTestFactory.identifier3("i");
            left.staticType = numType;
            let methodName : string = "abs";
            let invocation : any = AstTestFactory.methodInvocation(left,methodName);
            this._resolveNode(invocation);
            expect(invocation.methodName.staticElement,same(this.getMethod(numType,methodName)));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitMethodInvocation_namedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let methodName : string = "m";
            let parameterName : string = "p";
            let method : any = ElementFactory.methodElement(methodName,null);
            let parameter : any = ElementFactory.namedParameter(parameterName);
            method.parameters = new core.DartList.literal<any>(parameter);
            classA.methods = new core.DartList.literal<any>(method);
            let left : any = AstTestFactory.identifier3("i");
            left.staticType = classA.type;
            let invocation : any = AstTestFactory.methodInvocation(left,methodName,new core.DartList.literal(AstTestFactory.namedExpression2(parameterName,AstTestFactory.integer(0))));
            this._resolveNode(invocation);
            expect(invocation.methodName.staticElement,same(method));
            expect((op(Op.INDEX,invocation.argumentList.arguments,0) as any).name.label.staticElement,same(parameter));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitPostfixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let numType : any = this._typeProvider.numType;
            let operand : any = AstTestFactory.identifier3("i");
            operand.staticType = numType;
            let expression : any = AstTestFactory.postfixExpression(operand,TokenType.PLUS_PLUS);
            this._resolveNode(expression);
            expect(expression.staticElement,this.getMethod(numType,"+"));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitPrefixedIdentifier_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let dynamicType : any = this._typeProvider.dynamicType;
            let target : any = AstTestFactory.identifier3("a");
            let variable : any = ElementFactory.localVariableElement(target);
            variable.type = dynamicType;
            target.staticElement = variable;
            target.staticType = dynamicType;
            let identifier : any = AstTestFactory.identifier(target,AstTestFactory.identifier3("b"));
            this._resolveNode(identifier);
            expect(identifier.staticElement,isNull);
            expect(identifier.identifier.staticElement,isNull);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitPrefixedIdentifier_nonDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let getterName : string = "b";
            let getter : any = ElementFactory.getterElement(getterName,false,this._typeProvider.intType);
            classA.accessors = new core.DartList.literal<any>(getter);
            let target : any = AstTestFactory.identifier3("a");
            let variable : any = ElementFactory.localVariableElement(target);
            variable.type = classA.type;
            target.staticElement = variable;
            target.staticType = classA.type;
            let identifier : any = AstTestFactory.identifier(target,AstTestFactory.identifier3(getterName));
            this._resolveNode(identifier);
            expect(identifier.staticElement,same(getter));
            expect(identifier.identifier.staticElement,same(getter));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitPrefixedIdentifier_staticClassMember_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let propName : string = "b";
            let getter : any = ElementFactory.getterElement(propName,false,this._typeProvider.intType);
            let setter : any = ElementFactory.setterElement(propName,false,this._typeProvider.intType);
            classA.accessors = new core.DartList.literal<any>(getter,setter);
            let target : any = AstTestFactory.identifier3("A");
            target.staticElement = classA;
            target.staticType = classA.type;
            let identifier : any = AstTestFactory.identifier(target,AstTestFactory.identifier3(propName));
            this._resolveNode(identifier);
            expect(identifier.staticElement,same(getter));
            expect(identifier.identifier.staticElement,same(getter));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitPrefixedIdentifier_staticClassMember_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let propName : string = "m";
            let method : any = ElementFactory.methodElement("m",this._typeProvider.intType);
            classA.methods = new core.DartList.literal<any>(method);
            let target : any = AstTestFactory.identifier3("A");
            target.staticElement = classA;
            target.staticType = classA.type;
            let identifier : any = AstTestFactory.identifier(target,AstTestFactory.identifier3(propName));
            AstTestFactory.assignmentExpression(identifier,TokenType.EQ,AstTestFactory.nullLiteral());
            this._resolveNode(identifier);
            expect(identifier.staticElement,same(method));
            expect(identifier.identifier.staticElement,same(method));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitPrefixedIdentifier_staticClassMember_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let propName : string = "b";
            let getter : any = ElementFactory.getterElement(propName,false,this._typeProvider.intType);
            let setter : any = ElementFactory.setterElement(propName,false,this._typeProvider.intType);
            classA.accessors = new core.DartList.literal<any>(getter,setter);
            let target : any = AstTestFactory.identifier3("A");
            target.staticElement = classA;
            target.staticType = classA.type;
            let identifier : any = AstTestFactory.identifier(target,AstTestFactory.identifier3(propName));
            AstTestFactory.assignmentExpression(identifier,TokenType.EQ,AstTestFactory.nullLiteral());
            this._resolveNode(identifier);
            expect(identifier.staticElement,same(setter));
            expect(identifier.identifier.staticElement,same(setter));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitPrefixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let numType : any = this._typeProvider.numType;
            let operand : any = AstTestFactory.identifier3("i");
            operand.staticType = numType;
            let expression : any = AstTestFactory.prefixExpression(TokenType.PLUS_PLUS,operand);
            this._resolveNode(expression);
            expect(expression.staticElement,this.getMethod(numType,"+"));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitPropertyAccess_getter_identifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let getterName : string = "b";
            let getter : any = ElementFactory.getterElement(getterName,false,this._typeProvider.intType);
            classA.accessors = new core.DartList.literal<any>(getter);
            let target : any = AstTestFactory.identifier3("a");
            target.staticType = classA.type;
            let access : any = AstTestFactory.propertyAccess2(target,getterName);
            this._resolveNode(access);
            expect(access.propertyName.staticElement,same(getter));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitPropertyAccess_getter_super() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let getterName : string = "b";
            let getter : any = ElementFactory.getterElement(getterName,false,this._typeProvider.intType);
            classA.accessors = new core.DartList.literal<any>(getter);
            let target : any = AstTestFactory.superExpression();
            target.staticType = ElementFactory.classElement("B",classA.type).type;
            let access : any = AstTestFactory.propertyAccess2(target,getterName);
            AstTestFactory.methodDeclaration2(null,null,null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(),AstTestFactory.expressionFunctionBody(access));
            this._resolveNode(access);
            expect(access.propertyName.staticElement,same(getter));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitPropertyAccess_setter_this() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let setterName : string = "b";
            let setter : any = ElementFactory.setterElement(setterName,false,this._typeProvider.intType);
            classA.accessors = new core.DartList.literal<any>(setter);
            let target : any = AstTestFactory.thisExpression();
            target.staticType = classA.type;
            let access : any = AstTestFactory.propertyAccess2(target,setterName);
            AstTestFactory.assignmentExpression(access,TokenType.EQ,AstTestFactory.integer(0));
            this._resolveNode(access);
            expect(access.propertyName.staticElement,same(setter));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitSimpleIdentifier_classScope() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let doubleType : any = this._typeProvider.doubleType;
            let fieldName : string = "NAN";
            let node : any = AstTestFactory.identifier3(fieldName);
            this._resolveInClass(node,doubleType.element);
            expect(node.staticElement,this.getGetter(doubleType,fieldName));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitSimpleIdentifier_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let node : any = AstTestFactory.identifier3("dynamic");
            this._resolveIdentifier(node);
            expect(node.staticElement,same(this._typeProvider.dynamicType.element));
            expect(node.staticType,same(this._typeProvider.typeType));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitSimpleIdentifier_lexicalScope() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let node : any = AstTestFactory.identifier3("i");
            let element : any = ElementFactory.localVariableElement(node);
            expect(this._resolveIdentifier(node,new core.DartList.literal(element)),same(element));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitSimpleIdentifier_lexicalScope_field_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let intType : any = this._typeProvider.intType;
            let classA : any = ElementFactory.classElement2("A");
            let fieldName : string = "a";
            let field : any = ElementFactory.fieldElement(fieldName,false,false,false,intType);
            classA.fields = new core.DartList.literal<any>(field);
            classA.accessors = new core.DartList.literal<any>(field.getter,field.setter);
            let node : any = AstTestFactory.identifier3(fieldName);
            AstTestFactory.assignmentExpression(node,TokenType.EQ,AstTestFactory.integer(0));
            this._resolveInClass(node,classA);
            let element : any = node.staticElement;
            lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },PropertyAccessorElement,element);
            expect((element as any).isSetter,isTrue);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitSuperConstructorInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let superclass : any = ElementFactory.classElement2("A");
            let superConstructor : any = ElementFactory.constructorElement2(superclass,null);
            superclass.constructors = new core.DartList.literal<any>(superConstructor);
            let subclass : any = ElementFactory.classElement("B",superclass.type);
            let subConstructor : any = ElementFactory.constructorElement2(subclass,null);
            subclass.constructors = new core.DartList.literal<any>(subConstructor);
            let invocation : any = AstTestFactory.superConstructorInvocation();
            AstTestFactory.classDeclaration(null,'C',null,null,null,null,new core.DartList.literal(AstTestFactory.constructorDeclaration(null,'C',null,new core.DartList.literal(invocation))));
            this._resolveInClass(invocation,subclass);
            expect(invocation.staticElement,superConstructor);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitSuperConstructorInvocation_namedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let superclass : any = ElementFactory.classElement2("A");
            let superConstructor : any = ElementFactory.constructorElement2(superclass,null);
            let parameterName : string = "p";
            let parameter : any = ElementFactory.namedParameter(parameterName);
            superConstructor.parameters = new core.DartList.literal<any>(parameter);
            superclass.constructors = new core.DartList.literal<any>(superConstructor);
            let subclass : any = ElementFactory.classElement("B",superclass.type);
            let subConstructor : any = ElementFactory.constructorElement2(subclass,null);
            subclass.constructors = new core.DartList.literal<any>(subConstructor);
            let invocation : any = AstTestFactory.superConstructorInvocation(new core.DartList.literal(AstTestFactory.namedExpression2(parameterName,AstTestFactory.integer(0))));
            AstTestFactory.classDeclaration(null,'C',null,null,null,null,new core.DartList.literal(AstTestFactory.constructorDeclaration(null,'C',null,new core.DartList.literal(invocation))));
            this._resolveInClass(invocation,subclass);
            expect(invocation.staticElement,superConstructor);
            expect((op(Op.INDEX,invocation.argumentList.arguments,0) as any).name.label.staticElement,same(parameter));
            this._listener.assertNoErrors();
        } )());
    }

    _createResolver() : any {
        let resourceProvider : any = new bare.createInstance(any,null);
        let context : any = lib5.AnalysisContextFactory.contextWithCore({
            resourceProvider : resourceProvider});
        let source : any = new bare.createInstance(any,null,resourceProvider.getFile("/test.dart"));
        let unit : any = new bare.createInstance(any,null,"test.dart");
        unit.librarySource = unit.source = source;
        this._definingLibrary = ElementFactory.library(context,"test");
        this._definingLibrary.definingCompilationUnit = unit;
        this._visitor = new bare.createInstance(any,null,this._definingLibrary,source,this._typeProvider,this._listener,{
            nameScope : new bare.createInstance(any,null,this._definingLibrary)});
        return this._visitor.elementResolver;
    }
    _resolveBreak(statement : any,labelElement : any,labelTarget : any) : any {
        this._resolveStatement(statement,labelElement,labelTarget);
        return statement.label.staticElement;
    }
    _resolveContinue(statement : any,labelElement : any,labelTarget : any) : any {
        this._resolveStatement(statement,labelElement,labelTarget);
        return statement.label.staticElement;
    }
    _resolveIdentifier(node : any,definedElements? : core.DartList<any>) : any {
        this._resolveNode(node,definedElements);
        return node.staticElement;
    }
    _resolveInClass(node : any,enclosingClass : any) : void {
        let outerScope : any = this._visitor.nameScope;
        try {
            this._visitor.enclosingClass = enclosingClass;
            let innerScope : any = new bare.createInstance(any,null,new bare.createInstance(any,null,outerScope,enclosingClass),enclosingClass);
            this._visitor.nameScope = innerScope;
            node.accept(this._resolver);
        } finally {
            this._visitor.enclosingClass = null;
            this._visitor.nameScope = outerScope;
        }
    }
    _resolveIndexExpression(node : any,definedElements? : core.DartList<any>) : any {
        this._resolveNode(node,definedElements);
        return node.staticElement;
    }
    _resolveNode(node : any,definedElements? : core.DartList<any>) : void {
        let outerScope : any = this._visitor.nameScope;
        try {
            let innerScope : any = new bare.createInstance(any,null,outerScope);
            if (definedElements != null) {
                for(let element of definedElements) {
                    innerScope.define(element);
                }
            }
            this._visitor.nameScope = innerScope;
            node.accept(this._resolver);
        } finally {
            this._visitor.nameScope = outerScope;
        }
    }
    _resolveStatement(statement : any,labelElement : any,labelTarget : any) : void {
        let outerScope : any = this._visitor.labelScope;
        try {
            let innerScope : any;
            if (op(Op.EQUALS,labelElement,null)) {
                innerScope = outerScope;
            }else {
                innerScope = new bare.createInstance(any,null,outerScope,labelElement.name,labelTarget,labelElement);
            }
            this._visitor.labelScope = innerScope;
            statement.accept(this._resolver);
        } finally {
            this._visitor.labelScope = outerScope;
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ElementResolverTest() {
    }
}

export class properties {
}
