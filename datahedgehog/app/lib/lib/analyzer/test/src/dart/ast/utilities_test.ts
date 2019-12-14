/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/dart/ast/utilities_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../../generated/parser_test";
import * as lib4 from "./../../../generated/test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ConstantEvaluatorTest);
        defineReflectiveTests(NodeLocatorTest);
        defineReflectiveTests(NodeLocator2Test);
        defineReflectiveTests(ResolutionCopierTest);
        defineReflectiveTests(ToSourceVisitorTest);
        defineReflectiveTests(ToSourceVisitor2Test);
    });
};
export namespace ConstantEvaluatorTest {
    export type Constructors = lib3.ParserTestCase.Constructors | 'ConstantEvaluatorTest';
    export type Interface = Omit<ConstantEvaluatorTest, Constructors>;
}
@DartClass
export class ConstantEvaluatorTest extends lib3.ParserTestCase {
    fail_constructor() : void {
        let value : core.DartObject = this._getConstantValue("?");
        expect(value,null);
    }
    fail_identifier_class() : void {
        let value : core.DartObject = this._getConstantValue("?");
        expect(value,null);
    }
    fail_identifier_function() : void {
        let value : core.DartObject = this._getConstantValue("?");
        expect(value,null);
    }
    fail_identifier_static() : void {
        let value : core.DartObject = this._getConstantValue("?");
        expect(value,null);
    }
    fail_identifier_staticMethod() : void {
        let value : core.DartObject = this._getConstantValue("?");
        expect(value,null);
    }
    fail_identifier_topLevel() : void {
        let value : core.DartObject = this._getConstantValue("?");
        expect(value,null);
    }
    fail_identifier_typeParameter() : void {
        let value : core.DartObject = this._getConstantValue("?");
        expect(value,null);
    }
    test_binary_bitAnd() : void {
        let value : core.DartObject = this._getConstantValue("74 & 42");
        lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, "number");
        },number,value);
        expect(value as number,74 & 42);
    }
    test_binary_bitOr() : void {
        let value : core.DartObject = this._getConstantValue("74 | 42");
        lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, "number");
        },number,value);
        expect(value as number,74 | 42);
    }
    test_binary_bitXor() : void {
        let value : core.DartObject = this._getConstantValue("74 ^ 42");
        lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, "number");
        },number,value);
        expect(value as number,74 ^ 42);
    }
    test_binary_divide_double() : void {
        let value : core.DartObject = this._getConstantValue("3.2 / 2.3");
        expect(value,3.2 / 2.3);
    }
    test_binary_divide_integer() : void {
        let value : core.DartObject = this._getConstantValue("3 / 2");
        expect(value,1.5);
    }
    test_binary_equal_boolean() : void {
        let value : core.DartObject = this._getConstantValue("true == false");
        expect(value,false);
    }
    test_binary_equal_integer() : void {
        let value : core.DartObject = this._getConstantValue("2 == 3");
        expect(value,false);
    }
    test_binary_equal_invalidLeft() : void {
        let value : core.DartObject = this._getConstantValue("a == 3");
        expect(value,ConstantEvaluator.NOT_A_CONSTANT);
    }
    test_binary_equal_invalidRight() : void {
        let value : core.DartObject = this._getConstantValue("2 == a");
        expect(value,ConstantEvaluator.NOT_A_CONSTANT);
    }
    test_binary_equal_string() : void {
        let value : core.DartObject = this._getConstantValue("'a' == 'b'");
        expect(value,false);
    }
    test_binary_greaterThan() : void {
        let value : core.DartObject = this._getConstantValue("2 > 3");
        expect(value,false);
    }
    test_binary_greaterThanOrEqual() : void {
        let value : core.DartObject = this._getConstantValue("2 >= 3");
        expect(value,false);
    }
    test_binary_leftShift() : void {
        let value : core.DartObject = this._getConstantValue("16 << 2");
        lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, "number");
        },number,value);
        expect(value as number,64);
    }
    test_binary_lessThan() : void {
        let value : core.DartObject = this._getConstantValue("2 < 3");
        expect(value,true);
    }
    test_binary_lessThanOrEqual() : void {
        let value : core.DartObject = this._getConstantValue("2 <= 3");
        expect(value,true);
    }
    test_binary_logicalAnd() : void {
        let value : core.DartObject = this._getConstantValue("true && false");
        expect(value,false);
    }
    test_binary_logicalOr() : void {
        let value : core.DartObject = this._getConstantValue("true || false");
        expect(value,true);
    }
    test_binary_minus_double() : void {
        let value : core.DartObject = this._getConstantValue("3.2 - 2.3");
        expect(value,3.2 - 2.3);
    }
    test_binary_minus_integer() : void {
        let value : core.DartObject = this._getConstantValue("3 - 2");
        expect(value,1);
    }
    test_binary_notEqual_boolean() : void {
        let value : core.DartObject = this._getConstantValue("true != false");
        expect(value,true);
    }
    test_binary_notEqual_integer() : void {
        let value : core.DartObject = this._getConstantValue("2 != 3");
        expect(value,true);
    }
    test_binary_notEqual_invalidLeft() : void {
        let value : core.DartObject = this._getConstantValue("a != 3");
        expect(value,ConstantEvaluator.NOT_A_CONSTANT);
    }
    test_binary_notEqual_invalidRight() : void {
        let value : core.DartObject = this._getConstantValue("2 != a");
        expect(value,ConstantEvaluator.NOT_A_CONSTANT);
    }
    test_binary_notEqual_string() : void {
        let value : core.DartObject = this._getConstantValue("'a' != 'b'");
        expect(value,true);
    }
    test_binary_plus_double() : void {
        let value : core.DartObject = this._getConstantValue("2.3 + 3.2");
        expect(value,2.3 + 3.2);
    }
    test_binary_plus_double_string() : void {
        let value : core.DartObject = this._getConstantValue("'world' + 5.5");
        expect(value,ConstantEvaluator.NOT_A_CONSTANT);
    }
    test_binary_plus_int_string() : void {
        let value : core.DartObject = this._getConstantValue("'world' + 5");
        expect(value,ConstantEvaluator.NOT_A_CONSTANT);
    }
    test_binary_plus_integer() : void {
        let value : core.DartObject = this._getConstantValue("2 + 3");
        expect(value,5);
    }
    test_binary_plus_string() : void {
        let value : core.DartObject = this._getConstantValue("'hello ' + 'world'");
        expect(value,'hello world');
    }
    test_binary_plus_string_double() : void {
        let value : core.DartObject = this._getConstantValue("5.5 + 'world'");
        expect(value,ConstantEvaluator.NOT_A_CONSTANT);
    }
    test_binary_plus_string_int() : void {
        let value : core.DartObject = this._getConstantValue("5 + 'world'");
        expect(value,ConstantEvaluator.NOT_A_CONSTANT);
    }
    test_binary_remainder_double() : void {
        let value : core.DartObject = this._getConstantValue("3.2 % 2.3");
        expect(value,3.2 % 2.3);
    }
    test_binary_remainder_integer() : void {
        let value : core.DartObject = this._getConstantValue("8 % 3");
        expect(value,2);
    }
    test_binary_rightShift() : void {
        let value : core.DartObject = this._getConstantValue("64 >> 2");
        lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, "number");
        },number,value);
        expect(value as number,16);
    }
    test_binary_times_double() : void {
        let value : core.DartObject = this._getConstantValue("2.3 * 3.2");
        expect(value,2.3 * 3.2);
    }
    test_binary_times_integer() : void {
        let value : core.DartObject = this._getConstantValue("2 * 3");
        expect(value,6);
    }
    test_binary_truncatingDivide_double() : void {
        let value : core.DartObject = this._getConstantValue("3.2 ~/ 2.3");
        lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, "number");
        },number,value);
        expect(value as number,1);
    }
    test_binary_truncatingDivide_integer() : void {
        let value : core.DartObject = this._getConstantValue("10 ~/ 3");
        lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, "number");
        },number,value);
        expect(value as number,3);
    }
    test_literal_boolean_false() : void {
        let value : core.DartObject = this._getConstantValue("false");
        expect(value,false);
    }
    test_literal_boolean_true() : void {
        let value : core.DartObject = this._getConstantValue("true");
        expect(value,true);
    }
    test_literal_list() : void {
        let value : core.DartObject = this._getConstantValue("['a', 'b', 'c']");
        lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, core.DartList<any>);
        },core.DartList<E>,value);
        let list : core.DartList<any> = value as core.DartList<any>;
        expect(list.length,3);
        expect(list[0],"a");
        expect(list[1],"b");
        expect(list[2],"c");
    }
    test_literal_map() : void {
        let value : core.DartObject = this._getConstantValue("{'a' : 'm', 'b' : 'n', 'c' : 'o'}");
        lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, core.DartMap<any,any>);
        },core.DartMap<K,V>,value);
        let map : core.DartMap<any,any> = value as core.DartMap<any,any>;
        expect(map.length,3);
        expect(map.get("a"),"m");
        expect(map.get("b"),"n");
        expect(map.get("c"),"o");
    }
    test_literal_null() : void {
        let value : core.DartObject = this._getConstantValue("null");
        expect(value,null);
    }
    test_literal_number_double() : void {
        let value : core.DartObject = this._getConstantValue("3.45");
        expect(value,3.45);
    }
    test_literal_number_integer() : void {
        let value : core.DartObject = this._getConstantValue("42");
        expect(value,42);
    }
    test_literal_string_adjacent() : void {
        let value : core.DartObject = this._getConstantValue("'abc' 'def'");
        expect(value,"abcdef");
    }
    test_literal_string_interpolation_invalid() : void {
        let value : core.DartObject = this._getConstantValue("'a${f()}c'");
        expect(value,ConstantEvaluator.NOT_A_CONSTANT);
    }
    test_literal_string_interpolation_valid() : void {
        let value : core.DartObject = this._getConstantValue("'a${3}c'");
        expect(value,"a3c");
    }
    test_literal_string_simple() : void {
        let value : core.DartObject = this._getConstantValue("'abc'");
        expect(value,"abc");
    }
    test_parenthesizedExpression() : void {
        let value : core.DartObject = this._getConstantValue("('a')");
        expect(value,"a");
    }
    test_unary_bitNot() : void {
        let value : core.DartObject = this._getConstantValue("~42");
        lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, "number");
        },number,value);
        expect(value as number,~42);
    }
    test_unary_logicalNot() : void {
        let value : core.DartObject = this._getConstantValue("!true");
        expect(value,false);
    }
    test_unary_negated_double() : void {
        let value : core.DartObject = this._getConstantValue("-42.3");
        expect(value,-42.3);
    }
    test_unary_negated_integer() : void {
        let value : core.DartObject = this._getConstantValue("-42");
        expect(value,-42);
    }
    _getConstantValue(source : string) : core.DartObject {
        return this.parseExpression(source).accept(new bare.createInstance(any,null));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstantEvaluatorTest() {
    }
}

export namespace NodeLocator2Test {
    export type Constructors = lib3.ParserTestCase.Constructors | 'NodeLocator2Test';
    export type Interface = Omit<NodeLocator2Test, Constructors>;
}
@DartClass
export class NodeLocator2Test extends lib3.ParserTestCase {
    test_onlyStartOffset() : void {
        let code : string = ' int vv; ';
        let unit : any = this.parseCompilationUnit(code);
        let declaration : any = op(Op.INDEX,unit.declarations,0);
        let variableList : any = declaration.variables;
        let typeName : any = (variableList.type as any).name;
        let varName : any = op(Op.INDEX,variableList.variables,0).name;
        expect(new bare.createInstance(any,null,0).searchWithin(unit),same(unit));
        expect(new bare.createInstance(any,null,1).searchWithin(unit),same(typeName));
        expect(new bare.createInstance(any,null,2).searchWithin(unit),same(typeName));
        expect(new bare.createInstance(any,null,3).searchWithin(unit),same(typeName));
        expect(new bare.createInstance(any,null,4).searchWithin(unit),same(variableList));
        expect(new bare.createInstance(any,null,5).searchWithin(unit),same(varName));
        expect(new bare.createInstance(any,null,6).searchWithin(unit),same(varName));
        expect(new bare.createInstance(any,null,7).searchWithin(unit),same(declaration));
        expect(new bare.createInstance(any,null,8).searchWithin(unit),same(unit));
        expect(new bare.createInstance(any,null,9).searchWithin(unit),isNull);
        expect(new bare.createInstance(any,null,100).searchWithin(unit),isNull);
    }
    test_startEndOffset() : void {
        let code : string = ' int vv; ';
        let unit : any = this.parseCompilationUnit(code);
        let declaration : any = op(Op.INDEX,unit.declarations,0);
        let variableList : any = declaration.variables;
        let typeName : any = (variableList.type as any).name;
        let varName : any = op(Op.INDEX,variableList.variables,0).name;
        expect(new bare.createInstance(any,null,-1,2).searchWithin(unit),isNull);
        expect(new bare.createInstance(any,null,0,2).searchWithin(unit),same(unit));
        expect(new bare.createInstance(any,null,1,2).searchWithin(unit),same(typeName));
        expect(new bare.createInstance(any,null,1,3).searchWithin(unit),same(typeName));
        expect(new bare.createInstance(any,null,1,4).searchWithin(unit),same(variableList));
        expect(new bare.createInstance(any,null,5,6).searchWithin(unit),same(varName));
        expect(new bare.createInstance(any,null,5,7).searchWithin(unit),same(declaration));
        expect(new bare.createInstance(any,null,5,8).searchWithin(unit),same(unit));
        expect(new bare.createInstance(any,null,5,100).searchWithin(unit),isNull);
        expect(new bare.createInstance(any,null,100,200).searchWithin(unit),isNull);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NodeLocator2Test() {
    }
}

export namespace NodeLocatorTest {
    export type Constructors = lib3.ParserTestCase.Constructors | 'NodeLocatorTest';
    export type Interface = Omit<NodeLocatorTest, Constructors>;
}
@DartClass
export class NodeLocatorTest extends lib3.ParserTestCase {
    test_range() : void {
        let unit : any = this.parseCompilationUnit("library myLib;");
        this._assertLocate(unit,4,10,(node : any) =>  {
            return is(node, any);
        },LibraryDirective);
    }
    test_searchWithin_null() : void {
        let locator : any = new bare.createInstance(any,null,0,0);
        expect(locator.searchWithin(null),isNull);
    }
    test_searchWithin_offset() : void {
        let unit : any = this.parseCompilationUnit("library myLib;");
        this._assertLocate(unit,10,10,(node : any) =>  {
            return is(node, any);
        },SimpleIdentifier);
    }
    test_searchWithin_offsetAfterNode() : void {
        let unit : any = this.parseCompilationUnit('class A {}\nclass B {}');
        let locator : any = new bare.createInstance(any,null,1024,1024);
        let node : any = locator.searchWithin(op(Op.INDEX,unit.declarations,0));
        expect(node,isNull);
    }
    test_searchWithin_offsetBeforeNode() : void {
        let unit : any = this.parseCompilationUnit('class A {}\nclass B {}');
        let locator : any = new bare.createInstance(any,null,0,0);
        let node : any = locator.searchWithin(op(Op.INDEX,unit.declarations,1));
        expect(node,isNull);
    }
    _assertLocate(unit : any,start : number,end : number,predicate : any,expectedClass : core.Type) : void {
        let locator : any = new bare.createInstance(any,null,start,end);
        let node : any = locator.searchWithin(unit);
        expect(node,isNotNull);
        expect(locator.foundNode,same(node));
        expect(op(Op.LEQ,node.offset,start),isTrue,{
            reason : "Node starts after range"});
        expect(op(Op.GT,op(Op.PLUS,node.offset,node.length),end),isTrue,{
            reason : "Node ends before range"});
        lib4.EngineTestCase.assertInstanceOf(predicate,expectedClass,node);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NodeLocatorTest() {
    }
}

export namespace ResolutionCopierTest {
    export type Constructors = lib4.EngineTestCase.Constructors | 'ResolutionCopierTest';
    export type Interface = Omit<ResolutionCopierTest, Constructors>;
}
@DartClass
export class ResolutionCopierTest extends lib4.EngineTestCase {
    test_visitAdjacentStrings() : void {
        var createNode : () => any = () : any =>  {
            return astFactory.adjacentStrings(new core.DartList.literal(astFactory.simpleStringLiteral(null,'hello'),astFactory.simpleStringLiteral(null,'world')));
        };
        let fromNode : any = createNode();
        let propagatedType : any = ElementFactory.classElement2("A").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("B").type;
        fromNode.staticType = staticType;
        let toNode : any = createNode();
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitAnnotation() : void {
        let annotationName : string = "proxy";
        let fromNode : any = AstTestFactory.annotation(AstTestFactory.identifier3(annotationName));
        let element : any = ElementFactory.topLevelVariableElement2(annotationName);
        fromNode.element = element;
        let toNode : any = AstTestFactory.annotation(AstTestFactory.identifier3(annotationName));
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.element,same(element));
    }
    test_visitAsExpression() : void {
        let fromNode : any = AstTestFactory.asExpression(AstTestFactory.identifier3("x"),AstTestFactory.typeName4("A"));
        let propagatedType : any = ElementFactory.classElement2("A").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("B").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.asExpression(AstTestFactory.identifier3("x"),AstTestFactory.typeName4("A"));
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitAssignmentExpression() : void {
        let fromNode : any = AstTestFactory.assignmentExpression(AstTestFactory.identifier3("a"),TokenType.PLUS_EQ,AstTestFactory.identifier3("b"));
        let propagatedType : any = ElementFactory.classElement2("C").type;
        let propagatedElement : any = ElementFactory.methodElement("+",propagatedType);
        fromNode.propagatedElement = propagatedElement;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        let staticElement : any = ElementFactory.methodElement("+",staticType);
        fromNode.staticElement = staticElement;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.assignmentExpression(AstTestFactory.identifier3("a"),TokenType.PLUS_EQ,AstTestFactory.identifier3("b"));
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedElement,same(propagatedElement));
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticElement,same(staticElement));
        expect(toNode.staticType,same(staticType));
    }
    test_visitBinaryExpression() : void {
        let fromNode : any = AstTestFactory.binaryExpression(AstTestFactory.identifier3("a"),TokenType.PLUS,AstTestFactory.identifier3("b"));
        let propagatedType : any = ElementFactory.classElement2("C").type;
        let propagatedElement : any = ElementFactory.methodElement("+",propagatedType);
        fromNode.propagatedElement = propagatedElement;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        let staticElement : any = ElementFactory.methodElement("+",staticType);
        fromNode.staticElement = staticElement;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.binaryExpression(AstTestFactory.identifier3("a"),TokenType.PLUS,AstTestFactory.identifier3("b"));
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedElement,same(propagatedElement));
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticElement,same(staticElement));
        expect(toNode.staticType,same(staticType));
    }
    test_visitBooleanLiteral() : void {
        let fromNode : any = AstTestFactory.booleanLiteral(true);
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.booleanLiteral(true);
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitCascadeExpression() : void {
        let fromNode : any = AstTestFactory.cascadeExpression(AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.identifier3("b")));
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.cascadeExpression(AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.identifier3("b")));
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitCompilationUnit() : void {
        let fromNode : any = AstTestFactory.compilationUnit();
        let element : any = new bare.createInstance(any,null,"test.dart");
        fromNode.element = element;
        let toNode : any = AstTestFactory.compilationUnit();
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.element,same(element));
    }
    test_visitConditionalExpression() : void {
        let fromNode : any = AstTestFactory.conditionalExpression(AstTestFactory.identifier3("c"),AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"));
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.conditionalExpression(AstTestFactory.identifier3("c"),AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"));
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitConstructorDeclaration() : void {
        let className : string = "A";
        let constructorName : string = "c";
        let fromNode : any = AstTestFactory.constructorDeclaration(AstTestFactory.identifier3(className),constructorName,AstTestFactory.formalParameterList(),null);
        let element : any = ElementFactory.constructorElement2(ElementFactory.classElement2(className),constructorName);
        fromNode.element = element;
        let toNode : any = AstTestFactory.constructorDeclaration(AstTestFactory.identifier3(className),constructorName,AstTestFactory.formalParameterList(),null);
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.element,same(element));
    }
    test_visitConstructorName() : void {
        let fromNode : any = AstTestFactory.constructorName(AstTestFactory.typeName4("A"),"c");
        let staticElement : any = ElementFactory.constructorElement2(ElementFactory.classElement2("A"),"c");
        fromNode.staticElement = staticElement;
        let toNode : any = AstTestFactory.constructorName(AstTestFactory.typeName4("A"),"c");
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.staticElement,same(staticElement));
    }
    test_visitDoubleLiteral() : void {
        let fromNode : any = AstTestFactory.doubleLiteral(1.0);
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.doubleLiteral(1.0);
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitExportDirective() : void {
        let fromNode : any = AstTestFactory.exportDirective2("dart:uri");
        let element : any = new bare.createInstance(any,null,-1);
        fromNode.element = element;
        let toNode : any = AstTestFactory.exportDirective2("dart:uri");
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.element,same(element));
    }
    test_visitFunctionExpression() : void {
        let fromNode : any = AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.emptyFunctionBody());
        let element : any = ElementFactory.methodElement("m",ElementFactory.classElement2("C").type);
        fromNode.element = element;
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.emptyFunctionBody());
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.element,same(element));
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitFunctionExpressionInvocation() : void {
        let fromNode : any = AstTestFactory.functionExpressionInvocation(AstTestFactory.identifier3("f"));
        let propagatedElement : any = ElementFactory.methodElement("m",ElementFactory.classElement2("C").type);
        fromNode.propagatedElement = propagatedElement;
        let staticElement : any = ElementFactory.methodElement("m",ElementFactory.classElement2("C").type);
        fromNode.staticElement = staticElement;
        let toNode : any = AstTestFactory.functionExpressionInvocation(AstTestFactory.identifier3("f"));
        let elementT : any = ElementFactory.classElement2('T');
        fromNode.typeArguments = AstTestFactory.typeArgumentList(new core.DartList.literal<any>(AstTestFactory.typeName(elementT)));
        toNode.typeArguments = AstTestFactory.typeArgumentList(new core.DartList.literal<any>(AstTestFactory.typeName4('T')));
        this._copyAndVerifyInvocation(fromNode,toNode);
        expect(toNode.propagatedElement,same(propagatedElement));
        expect(toNode.staticElement,same(staticElement));
    }
    test_visitImportDirective() : void {
        let fromNode : any = AstTestFactory.importDirective3("dart:uri",null);
        let element : any = new bare.createInstance(any,null,0);
        fromNode.element = element;
        let toNode : any = AstTestFactory.importDirective3("dart:uri",null);
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.element,same(element));
    }
    test_visitIndexExpression() : void {
        let fromNode : any = AstTestFactory.indexExpression(AstTestFactory.identifier3("a"),AstTestFactory.integer(0));
        let propagatedElement : any = ElementFactory.methodElement("m",ElementFactory.classElement2("C").type);
        let staticElement : any = ElementFactory.methodElement("m",ElementFactory.classElement2("C").type);
        let auxiliaryElements : any = new bare.createInstance(any,null,staticElement,propagatedElement);
        fromNode.auxiliaryElements = auxiliaryElements;
        fromNode.propagatedElement = propagatedElement;
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        fromNode.staticElement = staticElement;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.indexExpression(AstTestFactory.identifier3("a"),AstTestFactory.integer(0));
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.auxiliaryElements,same(auxiliaryElements));
        expect(toNode.propagatedElement,same(propagatedElement));
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticElement,same(staticElement));
        expect(toNode.staticType,same(staticType));
    }
    test_visitInstanceCreationExpression() : void {
        let fromNode : any = AstTestFactory.instanceCreationExpression2(Keyword.NEW,AstTestFactory.typeName4("C"));
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticElement : any = ElementFactory.constructorElement2(ElementFactory.classElement2("C"),null);
        fromNode.staticElement = staticElement;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.instanceCreationExpression2(Keyword.NEW,AstTestFactory.typeName4("C"));
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticElement,same(staticElement));
        expect(toNode.staticType,same(staticType));
    }
    test_visitIntegerLiteral() : void {
        let fromNode : any = AstTestFactory.integer(2);
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.integer(2);
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitIsExpression() : void {
        let fromNode : any = AstTestFactory.isExpression(AstTestFactory.identifier3("x"),false,AstTestFactory.typeName4("A"));
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.isExpression(AstTestFactory.identifier3("x"),false,AstTestFactory.typeName4("A"));
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitLibraryIdentifier() : void {
        let fromNode : any = AstTestFactory.libraryIdentifier(new core.DartList.literal(AstTestFactory.identifier3("lib")));
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.libraryIdentifier(new core.DartList.literal(AstTestFactory.identifier3("lib")));
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitListLiteral() : void {
        let fromNode : any = AstTestFactory.listLiteral();
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.listLiteral();
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitMapLiteral() : void {
        let fromNode : any = AstTestFactory.mapLiteral2();
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.mapLiteral2();
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitMethodInvocation() : void {
        let fromNode : any = AstTestFactory.methodInvocation2("m");
        let toNode : any = AstTestFactory.methodInvocation2("m");
        let elementT : any = ElementFactory.classElement2('T');
        fromNode.typeArguments = AstTestFactory.typeArgumentList(new core.DartList.literal<any>(AstTestFactory.typeName(elementT)));
        toNode.typeArguments = AstTestFactory.typeArgumentList(new core.DartList.literal<any>(AstTestFactory.typeName4('T')));
        this._copyAndVerifyInvocation(fromNode,toNode);
    }
    test_visitNamedExpression() : void {
        let fromNode : any = AstTestFactory.namedExpression2("n",AstTestFactory.integer(0));
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.namedExpression2("n",AstTestFactory.integer(0));
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitNullLiteral() : void {
        let fromNode : any = AstTestFactory.nullLiteral();
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.nullLiteral();
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitParenthesizedExpression() : void {
        let fromNode : any = AstTestFactory.parenthesizedExpression(AstTestFactory.integer(0));
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.parenthesizedExpression(AstTestFactory.integer(0));
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitPartDirective() : void {
        let fromNode : any = AstTestFactory.partDirective2("part.dart");
        let element : any = new bare.createInstance(any,null,null,AstTestFactory.libraryIdentifier2(new core.DartList.literal("lib")));
        fromNode.element = element;
        let toNode : any = AstTestFactory.partDirective2("part.dart");
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.element,same(element));
    }
    test_visitPartOfDirective() : void {
        let fromNode : any = AstTestFactory.partOfDirective(AstTestFactory.libraryIdentifier2(new core.DartList.literal("lib")));
        let element : any = new bare.createInstance(any,null,null,AstTestFactory.libraryIdentifier2(new core.DartList.literal("lib")));
        fromNode.element = element;
        let toNode : any = AstTestFactory.partOfDirective(AstTestFactory.libraryIdentifier2(new core.DartList.literal("lib")));
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.element,same(element));
    }
    test_visitPostfixExpression() : void {
        let variableName : string = "x";
        let fromNode : any = AstTestFactory.postfixExpression(AstTestFactory.identifier3(variableName),TokenType.PLUS_PLUS);
        let propagatedElement : any = ElementFactory.methodElement("+",ElementFactory.classElement2("C").type);
        fromNode.propagatedElement = propagatedElement;
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticElement : any = ElementFactory.methodElement("+",ElementFactory.classElement2("C").type);
        fromNode.staticElement = staticElement;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.postfixExpression(AstTestFactory.identifier3(variableName),TokenType.PLUS_PLUS);
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedElement,same(propagatedElement));
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticElement,same(staticElement));
        expect(toNode.staticType,same(staticType));
    }
    test_visitPrefixedIdentifier() : void {
        let fromNode : any = AstTestFactory.identifier5("p","f");
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.identifier5("p","f");
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitPrefixExpression() : void {
        let fromNode : any = AstTestFactory.prefixExpression(TokenType.PLUS_PLUS,AstTestFactory.identifier3("x"));
        let propagatedElement : any = ElementFactory.methodElement("+",ElementFactory.classElement2("C").type);
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedElement = propagatedElement;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        let staticElement : any = ElementFactory.methodElement("+",ElementFactory.classElement2("C").type);
        fromNode.staticElement = staticElement;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.prefixExpression(TokenType.PLUS_PLUS,AstTestFactory.identifier3("x"));
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedElement,same(propagatedElement));
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticElement,same(staticElement));
        expect(toNode.staticType,same(staticType));
    }
    test_visitPropertyAccess() : void {
        let fromNode : any = AstTestFactory.propertyAccess2(AstTestFactory.identifier3("x"),"y");
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.propertyAccess2(AstTestFactory.identifier3("x"),"y");
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitRedirectingConstructorInvocation() : void {
        let fromNode : any = AstTestFactory.redirectingConstructorInvocation();
        let staticElement : any = ElementFactory.constructorElement2(ElementFactory.classElement2("C"),null);
        fromNode.staticElement = staticElement;
        let toNode : any = AstTestFactory.redirectingConstructorInvocation();
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.staticElement,same(staticElement));
    }
    test_visitRethrowExpression() : void {
        let fromNode : any = AstTestFactory.rethrowExpression();
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.rethrowExpression();
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitSimpleIdentifier() : void {
        let fromNode : any = AstTestFactory.identifier3("x");
        let propagatedElement : any = ElementFactory.methodElement("m",ElementFactory.classElement2("C").type);
        let staticElement : any = ElementFactory.methodElement("m",ElementFactory.classElement2("C").type);
        let auxiliaryElements : any = new bare.createInstance(any,null,staticElement,propagatedElement);
        fromNode.auxiliaryElements = auxiliaryElements;
        fromNode.propagatedElement = propagatedElement;
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        fromNode.staticElement = staticElement;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.identifier3("x");
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.auxiliaryElements,same(auxiliaryElements));
        expect(toNode.propagatedElement,same(propagatedElement));
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticElement,same(staticElement));
        expect(toNode.staticType,same(staticType));
    }
    test_visitSimpleStringLiteral() : void {
        let fromNode : any = AstTestFactory.string2("abc");
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.string2("abc");
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitStringInterpolation() : void {
        let fromNode : any = AstTestFactory.string(new core.DartList.literal(AstTestFactory.interpolationString("a","'a'")));
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.string(new core.DartList.literal(AstTestFactory.interpolationString("a","'a'")));
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitSuperConstructorInvocation() : void {
        let fromNode : any = AstTestFactory.superConstructorInvocation();
        let staticElement : any = ElementFactory.constructorElement2(ElementFactory.classElement2("C"),null);
        fromNode.staticElement = staticElement;
        let toNode : any = AstTestFactory.superConstructorInvocation();
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.staticElement,same(staticElement));
    }
    test_visitSuperExpression() : void {
        let fromNode : any = AstTestFactory.superExpression();
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.superExpression();
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitSymbolLiteral() : void {
        let fromNode : any = AstTestFactory.symbolLiteral(new core.DartList.literal("s"));
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.symbolLiteral(new core.DartList.literal("s"));
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitThisExpression() : void {
        let fromNode : any = AstTestFactory.thisExpression();
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.thisExpression();
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitThrowExpression() : void {
        let fromNode : any = AstTestFactory.throwExpression();
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let toNode : any = AstTestFactory.throwExpression();
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
    }
    test_visitTypeName() : void {
        let fromNode : any = AstTestFactory.typeName4("C");
        let type : any = ElementFactory.classElement2("C").type;
        fromNode.type = type;
        let toNode : any = AstTestFactory.typeName4("C");
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.type,same(type));
    }
    _copyAndVerifyInvocation(fromNode : any,toNode : any) : void {
        let propagatedType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedType = propagatedType;
        let staticType : any = ElementFactory.classElement2("C").type;
        fromNode.staticType = staticType;
        let propagatedInvokeType : any = ElementFactory.classElement2("C").type;
        fromNode.propagatedInvokeType = propagatedInvokeType;
        let staticInvokeType : any = ElementFactory.classElement2("C").type;
        fromNode.staticInvokeType = staticInvokeType;
        ResolutionCopier.copyResolutionData(fromNode,toNode);
        expect(toNode.propagatedType,same(propagatedType));
        expect(toNode.staticType,same(staticType));
        expect(toNode.propagatedInvokeType,same(propagatedInvokeType));
        expect(toNode.staticInvokeType,same(staticInvokeType));
        let fromTypeArguments : core.DartList<any> = toNode.typeArguments.arguments;
        let toTypeArguments : core.DartList<any> = fromNode.typeArguments.arguments;
        if (fromTypeArguments != null) {
            for(let i : number = 0; i < fromTypeArguments.length; i++){
                let toArgument : any = fromTypeArguments[i];
                let fromArgument : any = toTypeArguments[i];
                expect(toArgument.type,same(fromArgument.type));
            }
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResolutionCopierTest() {
    }
}

export namespace ToSourceVisitor2Test {
    export type Constructors = lib4.EngineTestCase.Constructors | 'ToSourceVisitor2Test';
    export type Interface = Omit<ToSourceVisitor2Test, Constructors>;
}
@DartClass
export class ToSourceVisitor2Test extends lib4.EngineTestCase {
    test_visitAdjacentStrings() : void {
        this._assertSource("'a' 'b'",AstTestFactory.adjacentStrings(new core.DartList.literal(AstTestFactory.string2("a"),AstTestFactory.string2("b"))));
    }
    test_visitAnnotation_constant() : void {
        this._assertSource("@A",AstTestFactory.annotation(AstTestFactory.identifier3("A")));
    }
    test_visitAnnotation_constructor() : void {
        this._assertSource("@A.c()",AstTestFactory.annotation2(AstTestFactory.identifier3("A"),AstTestFactory.identifier3("c"),AstTestFactory.argumentList()));
    }
    test_visitArgumentList() : void {
        this._assertSource("(a, b)",AstTestFactory.argumentList(new core.DartList.literal(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"))));
    }
    test_visitAsExpression() : void {
        this._assertSource("e as T",AstTestFactory.asExpression(AstTestFactory.identifier3("e"),AstTestFactory.typeName4("T")));
    }
    test_visitAssertStatement() : void {
        this._assertSource("assert (a);",AstTestFactory.assertStatement(AstTestFactory.identifier3("a")));
    }
    test_visitAssertStatement_withMessage() : void {
        this._assertSource("assert (a, b);",AstTestFactory.assertStatement(AstTestFactory.identifier3("a"),AstTestFactory.identifier3('b')));
    }
    test_visitAssignmentExpression() : void {
        this._assertSource("a = b",AstTestFactory.assignmentExpression(AstTestFactory.identifier3("a"),TokenType.EQ,AstTestFactory.identifier3("b")));
    }
    test_visitAwaitExpression() : void {
        this._assertSource("await e",AstTestFactory.awaitExpression(AstTestFactory.identifier3("e")));
    }
    test_visitBinaryExpression() : void {
        this._assertSource("a + b",AstTestFactory.binaryExpression(AstTestFactory.identifier3("a"),TokenType.PLUS,AstTestFactory.identifier3("b")));
    }
    test_visitBlock_empty() : void {
        this._assertSource("{}",AstTestFactory.block());
    }
    test_visitBlock_nonEmpty() : void {
        this._assertSource("{break; break;}",AstTestFactory.block(new core.DartList.literal(AstTestFactory.breakStatement(),AstTestFactory.breakStatement())));
    }
    test_visitBlockFunctionBody_async() : void {
        this._assertSource("async {}",AstTestFactory.asyncBlockFunctionBody());
    }
    test_visitBlockFunctionBody_async_star() : void {
        this._assertSource("async* {}",AstTestFactory.asyncGeneratorBlockFunctionBody());
    }
    test_visitBlockFunctionBody_simple() : void {
        this._assertSource("{}",AstTestFactory.blockFunctionBody2());
    }
    test_visitBlockFunctionBody_sync() : void {
        this._assertSource("sync {}",AstTestFactory.syncBlockFunctionBody());
    }
    test_visitBlockFunctionBody_sync_star() : void {
        this._assertSource("sync* {}",AstTestFactory.syncGeneratorBlockFunctionBody());
    }
    test_visitBooleanLiteral_false() : void {
        this._assertSource("false",AstTestFactory.booleanLiteral(false));
    }
    test_visitBooleanLiteral_true() : void {
        this._assertSource("true",AstTestFactory.booleanLiteral(true));
    }
    test_visitBreakStatement_label() : void {
        this._assertSource("break l;",AstTestFactory.breakStatement2("l"));
    }
    test_visitBreakStatement_noLabel() : void {
        this._assertSource("break;",AstTestFactory.breakStatement());
    }
    test_visitCascadeExpression_field() : void {
        this._assertSource("a..b..c",AstTestFactory.cascadeExpression(AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.cascadedPropertyAccess("b"),AstTestFactory.cascadedPropertyAccess("c"))));
    }
    test_visitCascadeExpression_index() : void {
        this._assertSource("a..[0]..[1]",AstTestFactory.cascadeExpression(AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.cascadedIndexExpression(AstTestFactory.integer(0)),AstTestFactory.cascadedIndexExpression(AstTestFactory.integer(1)))));
    }
    test_visitCascadeExpression_method() : void {
        this._assertSource("a..b()..c()",AstTestFactory.cascadeExpression(AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.cascadedMethodInvocation("b"),AstTestFactory.cascadedMethodInvocation("c"))));
    }
    test_visitCatchClause_catch_noStack() : void {
        this._assertSource("catch (e) {}",AstTestFactory.catchClause("e"));
    }
    test_visitCatchClause_catch_stack() : void {
        this._assertSource("catch (e, s) {}",AstTestFactory.catchClause2("e","s"));
    }
    test_visitCatchClause_on() : void {
        this._assertSource("on E {}",AstTestFactory.catchClause3(AstTestFactory.typeName4("E")));
    }
    test_visitCatchClause_on_catch() : void {
        this._assertSource("on E catch (e) {}",AstTestFactory.catchClause4(AstTestFactory.typeName4("E"),"e"));
    }
    test_visitClassDeclaration_abstract() : void {
        this._assertSource("abstract class C {}",AstTestFactory.classDeclaration(Keyword.ABSTRACT,"C",null,null,null,null));
    }
    test_visitClassDeclaration_empty() : void {
        this._assertSource("class C {}",AstTestFactory.classDeclaration(null,"C",null,null,null,null));
    }
    test_visitClassDeclaration_extends() : void {
        this._assertSource("class C extends A {}",AstTestFactory.classDeclaration(null,"C",null,AstTestFactory.extendsClause(AstTestFactory.typeName4("A")),null,null));
    }
    test_visitClassDeclaration_extends_implements() : void {
        this._assertSource("class C extends A implements B {}",AstTestFactory.classDeclaration(null,"C",null,AstTestFactory.extendsClause(AstTestFactory.typeName4("A")),null,AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("B")))));
    }
    test_visitClassDeclaration_extends_with() : void {
        this._assertSource("class C extends A with M {}",AstTestFactory.classDeclaration(null,"C",null,AstTestFactory.extendsClause(AstTestFactory.typeName4("A")),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M"))),null));
    }
    test_visitClassDeclaration_extends_with_implements() : void {
        this._assertSource("class C extends A with M implements B {}",AstTestFactory.classDeclaration(null,"C",null,AstTestFactory.extendsClause(AstTestFactory.typeName4("A")),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M"))),AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("B")))));
    }
    test_visitClassDeclaration_implements() : void {
        this._assertSource("class C implements B {}",AstTestFactory.classDeclaration(null,"C",null,null,null,AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("B")))));
    }
    test_visitClassDeclaration_multipleMember() : void {
        this._assertSource("class C {var a; var b;}",AstTestFactory.classDeclaration(null,"C",null,null,null,null,new core.DartList.literal(AstTestFactory.fieldDeclaration2(false,Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"))),AstTestFactory.fieldDeclaration2(false,Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("b"))))));
    }
    test_visitClassDeclaration_parameters() : void {
        this._assertSource("class C<E> {}",AstTestFactory.classDeclaration(null,"C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),null,null,null));
    }
    test_visitClassDeclaration_parameters_extends() : void {
        this._assertSource("class C<E> extends A {}",AstTestFactory.classDeclaration(null,"C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),AstTestFactory.extendsClause(AstTestFactory.typeName4("A")),null,null));
    }
    test_visitClassDeclaration_parameters_extends_implements() : void {
        this._assertSource("class C<E> extends A implements B {}",AstTestFactory.classDeclaration(null,"C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),AstTestFactory.extendsClause(AstTestFactory.typeName4("A")),null,AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("B")))));
    }
    test_visitClassDeclaration_parameters_extends_with() : void {
        this._assertSource("class C<E> extends A with M {}",AstTestFactory.classDeclaration(null,"C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),AstTestFactory.extendsClause(AstTestFactory.typeName4("A")),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M"))),null));
    }
    test_visitClassDeclaration_parameters_extends_with_implements() : void {
        this._assertSource("class C<E> extends A with M implements B {}",AstTestFactory.classDeclaration(null,"C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),AstTestFactory.extendsClause(AstTestFactory.typeName4("A")),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M"))),AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("B")))));
    }
    test_visitClassDeclaration_parameters_implements() : void {
        this._assertSource("class C<E> implements B {}",AstTestFactory.classDeclaration(null,"C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),null,null,AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("B")))));
    }
    test_visitClassDeclaration_singleMember() : void {
        this._assertSource("class C {var a;}",AstTestFactory.classDeclaration(null,"C",null,null,null,null,new core.DartList.literal(AstTestFactory.fieldDeclaration2(false,Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"))))));
    }
    test_visitClassDeclaration_withMetadata() : void {
        let declaration : any = AstTestFactory.classDeclaration(null,"C",null,null,null,null);
        declaration.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated class C {}",declaration);
    }
    test_visitClassTypeAlias_abstract() : void {
        this._assertSource("abstract class C = S with M1;",AstTestFactory.classTypeAlias("C",null,Keyword.ABSTRACT,AstTestFactory.typeName4("S"),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M1"))),null));
    }
    test_visitClassTypeAlias_abstract_implements() : void {
        this._assertSource("abstract class C = S with M1 implements I;",AstTestFactory.classTypeAlias("C",null,Keyword.ABSTRACT,AstTestFactory.typeName4("S"),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M1"))),AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("I")))));
    }
    test_visitClassTypeAlias_generic() : void {
        this._assertSource("class C<E> = S<E> with M1<E>;",AstTestFactory.classTypeAlias("C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),null,AstTestFactory.typeName4("S",new core.DartList.literal(AstTestFactory.typeName4("E"))),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M1",new core.DartList.literal(AstTestFactory.typeName4("E"))))),null));
    }
    test_visitClassTypeAlias_implements() : void {
        this._assertSource("class C = S with M1 implements I;",AstTestFactory.classTypeAlias("C",null,null,AstTestFactory.typeName4("S"),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M1"))),AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("I")))));
    }
    test_visitClassTypeAlias_minimal() : void {
        this._assertSource("class C = S with M1;",AstTestFactory.classTypeAlias("C",null,null,AstTestFactory.typeName4("S"),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M1"))),null));
    }
    test_visitClassTypeAlias_parameters_abstract() : void {
        this._assertSource("abstract class C<E> = S with M1;",AstTestFactory.classTypeAlias("C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),Keyword.ABSTRACT,AstTestFactory.typeName4("S"),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M1"))),null));
    }
    test_visitClassTypeAlias_parameters_abstract_implements() : void {
        this._assertSource("abstract class C<E> = S with M1 implements I;",AstTestFactory.classTypeAlias("C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),Keyword.ABSTRACT,AstTestFactory.typeName4("S"),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M1"))),AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("I")))));
    }
    test_visitClassTypeAlias_parameters_implements() : void {
        this._assertSource("class C<E> = S with M1 implements I;",AstTestFactory.classTypeAlias("C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),null,AstTestFactory.typeName4("S"),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M1"))),AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("I")))));
    }
    test_visitClassTypeAlias_withMetadata() : void {
        let declaration : any = AstTestFactory.classTypeAlias("C",null,null,AstTestFactory.typeName4("S"),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M1"))),null);
        declaration.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated class C = S with M1;",declaration);
    }
    test_visitComment() : void {
        this._assertSource("",astFactory.blockComment(new core.DartList.literal<any>(TokenFactory.tokenFromString("/* comment */"))));
    }
    test_visitCommentReference() : void {
        this._assertSource("",astFactory.commentReference(null,AstTestFactory.identifier3("a")));
    }
    test_visitCompilationUnit_declaration() : void {
        this._assertSource("var a;",AstTestFactory.compilationUnit2(new core.DartList.literal(AstTestFactory.topLevelVariableDeclaration2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"))))));
    }
    test_visitCompilationUnit_directive() : void {
        this._assertSource("library l;",AstTestFactory.compilationUnit3(new core.DartList.literal(AstTestFactory.libraryDirective2("l"))));
    }
    test_visitCompilationUnit_directive_declaration() : void {
        this._assertSource("library l; var a;",AstTestFactory.compilationUnit4(new core.DartList.literal(AstTestFactory.libraryDirective2("l")),new core.DartList.literal(AstTestFactory.topLevelVariableDeclaration2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"))))));
    }
    test_visitCompilationUnit_empty() : void {
        this._assertSource("",AstTestFactory.compilationUnit());
    }
    test_visitCompilationUnit_script() : void {
        this._assertSource("!#/bin/dartvm",AstTestFactory.compilationUnit5("!#/bin/dartvm"));
    }
    test_visitCompilationUnit_script_declaration() : void {
        this._assertSource("!#/bin/dartvm var a;",AstTestFactory.compilationUnit6("!#/bin/dartvm",new core.DartList.literal(AstTestFactory.topLevelVariableDeclaration2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"))))));
    }
    test_visitCompilationUnit_script_directive() : void {
        this._assertSource("!#/bin/dartvm library l;",AstTestFactory.compilationUnit7("!#/bin/dartvm",new core.DartList.literal(AstTestFactory.libraryDirective2("l"))));
    }
    test_visitCompilationUnit_script_directives_declarations() : void {
        this._assertSource("!#/bin/dartvm library l; var a;",AstTestFactory.compilationUnit8("!#/bin/dartvm",new core.DartList.literal(AstTestFactory.libraryDirective2("l")),new core.DartList.literal(AstTestFactory.topLevelVariableDeclaration2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"))))));
    }
    test_visitConditionalExpression() : void {
        this._assertSource("a ? b : c",AstTestFactory.conditionalExpression(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"),AstTestFactory.identifier3("c")));
    }
    test_visitConstructorDeclaration_const() : void {
        this._assertSource("const C() {}",AstTestFactory.constructorDeclaration2(Keyword.CONST,null,AstTestFactory.identifier3("C"),null,AstTestFactory.formalParameterList(),null,AstTestFactory.blockFunctionBody2()));
    }
    test_visitConstructorDeclaration_external() : void {
        this._assertSource("external C();",AstTestFactory.constructorDeclaration(AstTestFactory.identifier3("C"),null,AstTestFactory.formalParameterList(),null));
    }
    test_visitConstructorDeclaration_minimal() : void {
        this._assertSource("C() {}",AstTestFactory.constructorDeclaration2(null,null,AstTestFactory.identifier3("C"),null,AstTestFactory.formalParameterList(),null,AstTestFactory.blockFunctionBody2()));
    }
    test_visitConstructorDeclaration_multipleInitializers() : void {
        this._assertSource("C() : a = b, c = d {}",AstTestFactory.constructorDeclaration2(null,null,AstTestFactory.identifier3("C"),null,AstTestFactory.formalParameterList(),new core.DartList.literal(AstTestFactory.constructorFieldInitializer(false,"a",AstTestFactory.identifier3("b")),AstTestFactory.constructorFieldInitializer(false,"c",AstTestFactory.identifier3("d"))),AstTestFactory.blockFunctionBody2()));
    }
    test_visitConstructorDeclaration_multipleParameters() : void {
        this._assertSource("C(var a, var b) {}",AstTestFactory.constructorDeclaration2(null,null,AstTestFactory.identifier3("C"),null,AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter(Keyword.VAR,"a"),AstTestFactory.simpleFormalParameter(Keyword.VAR,"b"))),null,AstTestFactory.blockFunctionBody2()));
    }
    test_visitConstructorDeclaration_named() : void {
        this._assertSource("C.m() {}",AstTestFactory.constructorDeclaration2(null,null,AstTestFactory.identifier3("C"),"m",AstTestFactory.formalParameterList(),null,AstTestFactory.blockFunctionBody2()));
    }
    test_visitConstructorDeclaration_singleInitializer() : void {
        this._assertSource("C() : a = b {}",AstTestFactory.constructorDeclaration2(null,null,AstTestFactory.identifier3("C"),null,AstTestFactory.formalParameterList(),new core.DartList.literal(AstTestFactory.constructorFieldInitializer(false,"a",AstTestFactory.identifier3("b"))),AstTestFactory.blockFunctionBody2()));
    }
    test_visitConstructorDeclaration_withMetadata() : void {
        let declaration : any = AstTestFactory.constructorDeclaration2(null,null,AstTestFactory.identifier3("C"),null,AstTestFactory.formalParameterList(),null,AstTestFactory.blockFunctionBody2());
        declaration.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated C() {}",declaration);
    }
    test_visitConstructorFieldInitializer_withoutThis() : void {
        this._assertSource("a = b",AstTestFactory.constructorFieldInitializer(false,"a",AstTestFactory.identifier3("b")));
    }
    test_visitConstructorFieldInitializer_withThis() : void {
        this._assertSource("this.a = b",AstTestFactory.constructorFieldInitializer(true,"a",AstTestFactory.identifier3("b")));
    }
    test_visitConstructorName_named_prefix() : void {
        this._assertSource("p.C.n",AstTestFactory.constructorName(AstTestFactory.typeName4("p.C.n"),null));
    }
    test_visitConstructorName_unnamed_noPrefix() : void {
        this._assertSource("C",AstTestFactory.constructorName(AstTestFactory.typeName4("C"),null));
    }
    test_visitConstructorName_unnamed_prefix() : void {
        this._assertSource("p.C",AstTestFactory.constructorName(AstTestFactory.typeName3(AstTestFactory.identifier5("p","C")),null));
    }
    test_visitContinueStatement_label() : void {
        this._assertSource("continue l;",AstTestFactory.continueStatement("l"));
    }
    test_visitContinueStatement_noLabel() : void {
        this._assertSource("continue;",AstTestFactory.continueStatement());
    }
    test_visitDefaultFormalParameter_annotation() : void {
        let parameter : any = AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("p"),AstTestFactory.integer(0));
        parameter.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("A")));
        this._assertSource('@A p = 0',parameter);
    }
    test_visitDefaultFormalParameter_named_noValue() : void {
        this._assertSource("p",AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("p"),null));
    }
    test_visitDefaultFormalParameter_named_value() : void {
        this._assertSource("p : 0",AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("p"),AstTestFactory.integer(0)));
    }
    test_visitDefaultFormalParameter_positional_noValue() : void {
        this._assertSource("p",AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("p"),null));
    }
    test_visitDefaultFormalParameter_positional_value() : void {
        this._assertSource("p = 0",AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("p"),AstTestFactory.integer(0)));
    }
    test_visitDoStatement() : void {
        this._assertSource("do {} while (c);",AstTestFactory.doStatement(AstTestFactory.block(),AstTestFactory.identifier3("c")));
    }
    test_visitDoubleLiteral() : void {
        this._assertSource("4.2",AstTestFactory.doubleLiteral(4.2));
    }
    test_visitEmptyFunctionBody() : void {
        this._assertSource(";",AstTestFactory.emptyFunctionBody());
    }
    test_visitEmptyStatement() : void {
        this._assertSource(";",AstTestFactory.emptyStatement());
    }
    test_visitEnumDeclaration_multiple() : void {
        this._assertSource("enum E {ONE, TWO}",AstTestFactory.enumDeclaration2("E",new core.DartList.literal("ONE","TWO")));
    }
    test_visitEnumDeclaration_single() : void {
        this._assertSource("enum E {ONE}",AstTestFactory.enumDeclaration2("E",new core.DartList.literal("ONE")));
    }
    test_visitExportDirective_combinator() : void {
        this._assertSource("export 'a.dart' show A;",AstTestFactory.exportDirective2("a.dart",new core.DartList.literal(AstTestFactory.showCombinator(new core.DartList.literal(AstTestFactory.identifier3("A"))))));
    }
    test_visitExportDirective_combinators() : void {
        this._assertSource("export 'a.dart' show A hide B;",AstTestFactory.exportDirective2("a.dart",new core.DartList.literal(AstTestFactory.showCombinator(new core.DartList.literal(AstTestFactory.identifier3("A"))),AstTestFactory.hideCombinator(new core.DartList.literal(AstTestFactory.identifier3("B"))))));
    }
    test_visitExportDirective_minimal() : void {
        this._assertSource("export 'a.dart';",AstTestFactory.exportDirective2("a.dart"));
    }
    test_visitExportDirective_withMetadata() : void {
        let directive : any = AstTestFactory.exportDirective2("a.dart");
        directive.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated export 'a.dart';",directive);
    }
    test_visitExpressionFunctionBody_async() : void {
        this._assertSource("async => a;",AstTestFactory.asyncExpressionFunctionBody(AstTestFactory.identifier3("a")));
    }
    test_visitExpressionFunctionBody_simple() : void {
        this._assertSource("=> a;",AstTestFactory.expressionFunctionBody(AstTestFactory.identifier3("a")));
    }
    test_visitExpressionStatement() : void {
        this._assertSource("a;",AstTestFactory.expressionStatement(AstTestFactory.identifier3("a")));
    }
    test_visitExtendsClause() : void {
        this._assertSource("extends C",AstTestFactory.extendsClause(AstTestFactory.typeName4("C")));
    }
    test_visitFieldDeclaration_instance() : void {
        this._assertSource("var a;",AstTestFactory.fieldDeclaration2(false,Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"))));
    }
    test_visitFieldDeclaration_static() : void {
        this._assertSource("static var a;",AstTestFactory.fieldDeclaration2(true,Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"))));
    }
    test_visitFieldDeclaration_withMetadata() : void {
        let declaration : any = AstTestFactory.fieldDeclaration2(false,Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a")));
        declaration.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated var a;",declaration);
    }
    test_visitFieldFormalParameter_annotation() : void {
        let parameter : any = AstTestFactory.fieldFormalParameter2('f');
        parameter.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("A")));
        this._assertSource('@A this.f',parameter);
    }
    test_visitFieldFormalParameter_functionTyped() : void {
        this._assertSource("A this.a(b)",AstTestFactory.fieldFormalParameter(null,AstTestFactory.typeName4("A"),"a",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("b")))));
    }
    test_visitFieldFormalParameter_functionTyped_typeParameters() : void {
        this._assertSource("A this.a<E, F>(b)",astFactory.fieldFormalParameter2({
            type : AstTestFactory.typeName4('A'),thisKeyword : TokenFactory.tokenFromKeyword(Keyword.THIS),period : TokenFactory.tokenFromType(TokenType.PERIOD),identifier : AstTestFactory.identifier3('a'),typeParameters : AstTestFactory.typeParameterList(new core.DartList.literal('E','F')),parameters : AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("b")))}));
    }
    test_visitFieldFormalParameter_keyword() : void {
        this._assertSource("var this.a",AstTestFactory.fieldFormalParameter(Keyword.VAR,null,"a"));
    }
    test_visitFieldFormalParameter_keywordAndType() : void {
        this._assertSource("final A this.a",AstTestFactory.fieldFormalParameter(Keyword.FINAL,AstTestFactory.typeName4("A"),"a"));
    }
    test_visitFieldFormalParameter_type() : void {
        this._assertSource("A this.a",AstTestFactory.fieldFormalParameter(null,AstTestFactory.typeName4("A"),"a"));
    }
    test_visitFieldFormalParameter_type_covariant() : void {
        let expected : any = AstTestFactory.fieldFormalParameter(null,AstTestFactory.typeName4("A"),"a");
        expected.covariantKeyword = TokenFactory.tokenFromKeyword(Keyword.COVARIANT);
        this._assertSource("covariant A this.a",expected);
    }
    test_visitForEachStatement_declared() : void {
        this._assertSource("for (var a in b) {}",AstTestFactory.forEachStatement(AstTestFactory.declaredIdentifier3("a"),AstTestFactory.identifier3("b"),AstTestFactory.block()));
    }
    test_visitForEachStatement_variable() : void {
        this._assertSource("for (a in b) {}",astFactory.forEachStatementWithReference(null,TokenFactory.tokenFromKeyword(Keyword.FOR),TokenFactory.tokenFromType(TokenType.OPEN_PAREN),AstTestFactory.identifier3("a"),TokenFactory.tokenFromKeyword(Keyword.IN),AstTestFactory.identifier3("b"),TokenFactory.tokenFromType(TokenType.CLOSE_PAREN),AstTestFactory.block()));
    }
    test_visitForEachStatement_variable_await() : void {
        this._assertSource("await for (a in b) {}",astFactory.forEachStatementWithReference(TokenFactory.tokenFromString("await"),TokenFactory.tokenFromKeyword(Keyword.FOR),TokenFactory.tokenFromType(TokenType.OPEN_PAREN),AstTestFactory.identifier3("a"),TokenFactory.tokenFromKeyword(Keyword.IN),AstTestFactory.identifier3("b"),TokenFactory.tokenFromType(TokenType.CLOSE_PAREN),AstTestFactory.block()));
    }
    test_visitFormalParameterList_empty() : void {
        this._assertSource("()",AstTestFactory.formalParameterList());
    }
    test_visitFormalParameterList_n() : void {
        this._assertSource("({a : 0})",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.integer(0)))));
    }
    test_visitFormalParameterList_nn() : void {
        this._assertSource("({a : 0, b : 1})",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.integer(0)),AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.integer(1)))));
    }
    test_visitFormalParameterList_p() : void {
        this._assertSource("([a = 0])",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.integer(0)))));
    }
    test_visitFormalParameterList_pp() : void {
        this._assertSource("([a = 0, b = 1])",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.integer(0)),AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.integer(1)))));
    }
    test_visitFormalParameterList_r() : void {
        this._assertSource("(a)",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"))));
    }
    test_visitFormalParameterList_rn() : void {
        this._assertSource("(a, {b : 1})",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.integer(1)))));
    }
    test_visitFormalParameterList_rnn() : void {
        this._assertSource("(a, {b : 1, c : 2})",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.integer(1)),AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("c"),AstTestFactory.integer(2)))));
    }
    test_visitFormalParameterList_rp() : void {
        this._assertSource("(a, [b = 1])",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.integer(1)))));
    }
    test_visitFormalParameterList_rpp() : void {
        this._assertSource("(a, [b = 1, c = 2])",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.integer(1)),AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("c"),AstTestFactory.integer(2)))));
    }
    test_visitFormalParameterList_rr() : void {
        this._assertSource("(a, b)",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.simpleFormalParameter3("b"))));
    }
    test_visitFormalParameterList_rrn() : void {
        this._assertSource("(a, b, {c : 3})",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("c"),AstTestFactory.integer(3)))));
    }
    test_visitFormalParameterList_rrnn() : void {
        this._assertSource("(a, b, {c : 3, d : 4})",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("c"),AstTestFactory.integer(3)),AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("d"),AstTestFactory.integer(4)))));
    }
    test_visitFormalParameterList_rrp() : void {
        this._assertSource("(a, b, [c = 3])",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("c"),AstTestFactory.integer(3)))));
    }
    test_visitFormalParameterList_rrpp() : void {
        this._assertSource("(a, b, [c = 3, d = 4])",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("c"),AstTestFactory.integer(3)),AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("d"),AstTestFactory.integer(4)))));
    }
    test_visitForStatement_c() : void {
        this._assertSource("for (; c;) {}",AstTestFactory.forStatement(null,AstTestFactory.identifier3("c"),null,AstTestFactory.block()));
    }
    test_visitForStatement_cu() : void {
        this._assertSource("for (; c; u) {}",AstTestFactory.forStatement(null,AstTestFactory.identifier3("c"),new core.DartList.literal(AstTestFactory.identifier3("u")),AstTestFactory.block()));
    }
    test_visitForStatement_e() : void {
        this._assertSource("for (e;;) {}",AstTestFactory.forStatement(AstTestFactory.identifier3("e"),null,null,AstTestFactory.block()));
    }
    test_visitForStatement_ec() : void {
        this._assertSource("for (e; c;) {}",AstTestFactory.forStatement(AstTestFactory.identifier3("e"),AstTestFactory.identifier3("c"),null,AstTestFactory.block()));
    }
    test_visitForStatement_ecu() : void {
        this._assertSource("for (e; c; u) {}",AstTestFactory.forStatement(AstTestFactory.identifier3("e"),AstTestFactory.identifier3("c"),new core.DartList.literal(AstTestFactory.identifier3("u")),AstTestFactory.block()));
    }
    test_visitForStatement_eu() : void {
        this._assertSource("for (e;; u) {}",AstTestFactory.forStatement(AstTestFactory.identifier3("e"),null,new core.DartList.literal(AstTestFactory.identifier3("u")),AstTestFactory.block()));
    }
    test_visitForStatement_i() : void {
        this._assertSource("for (var i;;) {}",AstTestFactory.forStatement2(AstTestFactory.variableDeclarationList2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("i"))),null,null,AstTestFactory.block()));
    }
    test_visitForStatement_ic() : void {
        this._assertSource("for (var i; c;) {}",AstTestFactory.forStatement2(AstTestFactory.variableDeclarationList2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("i"))),AstTestFactory.identifier3("c"),null,AstTestFactory.block()));
    }
    test_visitForStatement_icu() : void {
        this._assertSource("for (var i; c; u) {}",AstTestFactory.forStatement2(AstTestFactory.variableDeclarationList2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("i"))),AstTestFactory.identifier3("c"),new core.DartList.literal(AstTestFactory.identifier3("u")),AstTestFactory.block()));
    }
    test_visitForStatement_iu() : void {
        this._assertSource("for (var i;; u) {}",AstTestFactory.forStatement2(AstTestFactory.variableDeclarationList2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("i"))),null,new core.DartList.literal(AstTestFactory.identifier3("u")),AstTestFactory.block()));
    }
    test_visitForStatement_u() : void {
        this._assertSource("for (;; u) {}",AstTestFactory.forStatement(null,null,new core.DartList.literal(AstTestFactory.identifier3("u")),AstTestFactory.block()));
    }
    test_visitFunctionDeclaration_external() : void {
        let functionDeclaration : any = AstTestFactory.functionDeclaration(null,null,"f",AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.emptyFunctionBody()));
        functionDeclaration.externalKeyword = TokenFactory.tokenFromKeyword(Keyword.EXTERNAL);
        this._assertSource("external f();",functionDeclaration);
    }
    test_visitFunctionDeclaration_getter() : void {
        this._assertSource("get f() {}",AstTestFactory.functionDeclaration(null,Keyword.GET,"f",AstTestFactory.functionExpression()));
    }
    test_visitFunctionDeclaration_local_blockBody() : void {
        let f : any = AstTestFactory.functionDeclaration(null,null,"f",AstTestFactory.functionExpression());
        let fStatement : any = astFactory.functionDeclarationStatement(f);
        this._assertSource("main() {f() {} 42;}",AstTestFactory.functionDeclaration(null,null,"main",AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2(new core.DartList.literal(fStatement,AstTestFactory.expressionStatement(AstTestFactory.integer(42)))))));
    }
    test_visitFunctionDeclaration_local_expressionBody() : void {
        let f : any = AstTestFactory.functionDeclaration(null,null,"f",AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.expressionFunctionBody(AstTestFactory.integer(1))));
        let fStatement : any = astFactory.functionDeclarationStatement(f);
        this._assertSource("main() {f() => 1; 2;}",AstTestFactory.functionDeclaration(null,null,"main",AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2(new core.DartList.literal(fStatement,AstTestFactory.expressionStatement(AstTestFactory.integer(2)))))));
    }
    test_visitFunctionDeclaration_normal() : void {
        this._assertSource("f() {}",AstTestFactory.functionDeclaration(null,null,"f",AstTestFactory.functionExpression()));
    }
    test_visitFunctionDeclaration_setter() : void {
        this._assertSource("set f() {}",AstTestFactory.functionDeclaration(null,Keyword.SET,"f",AstTestFactory.functionExpression()));
    }
    test_visitFunctionDeclaration_typeParameters() : void {
        this._assertSource("f<E>() {}",AstTestFactory.functionDeclaration(null,null,"f",AstTestFactory.functionExpression3(AstTestFactory.typeParameterList(new core.DartList.literal('E')),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2())));
    }
    test_visitFunctionDeclaration_withMetadata() : void {
        let declaration : any = AstTestFactory.functionDeclaration(null,null,"f",AstTestFactory.functionExpression());
        declaration.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated f() {}",declaration);
    }
    test_visitFunctionDeclarationStatement() : void {
        this._assertSource("f() {}",AstTestFactory.functionDeclarationStatement(null,null,"f",AstTestFactory.functionExpression()));
    }
    test_visitFunctionExpression() : void {
        this._assertSource("() {}",AstTestFactory.functionExpression());
    }
    test_visitFunctionExpression_typeParameters() : void {
        this._assertSource("<E>() {}",AstTestFactory.functionExpression3(AstTestFactory.typeParameterList(new core.DartList.literal('E')),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
    }
    test_visitFunctionExpressionInvocation_minimal() : void {
        this._assertSource("f()",AstTestFactory.functionExpressionInvocation(AstTestFactory.identifier3("f")));
    }
    test_visitFunctionExpressionInvocation_typeArguments() : void {
        this._assertSource("f<A>()",AstTestFactory.functionExpressionInvocation2(AstTestFactory.identifier3("f"),AstTestFactory.typeArgumentList(new core.DartList.literal(AstTestFactory.typeName4('A')))));
    }
    test_visitFunctionTypeAlias_generic() : void {
        this._assertSource("typedef A F<B>();",AstTestFactory.typeAlias(AstTestFactory.typeName4("A"),"F",AstTestFactory.typeParameterList(new core.DartList.literal("B")),AstTestFactory.formalParameterList()));
    }
    test_visitFunctionTypeAlias_nonGeneric() : void {
        this._assertSource("typedef A F();",AstTestFactory.typeAlias(AstTestFactory.typeName4("A"),"F",null,AstTestFactory.formalParameterList()));
    }
    test_visitFunctionTypeAlias_withMetadata() : void {
        let declaration : any = AstTestFactory.typeAlias(AstTestFactory.typeName4("A"),"F",null,AstTestFactory.formalParameterList());
        declaration.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated typedef A F();",declaration);
    }
    test_visitFunctionTypedFormalParameter_annotation() : void {
        let parameter : any = AstTestFactory.functionTypedFormalParameter(null,"f");
        parameter.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("A")));
        this._assertSource('@A f()',parameter);
    }
    test_visitFunctionTypedFormalParameter_noType() : void {
        this._assertSource("f()",AstTestFactory.functionTypedFormalParameter(null,"f"));
    }
    test_visitFunctionTypedFormalParameter_type() : void {
        this._assertSource("T f()",AstTestFactory.functionTypedFormalParameter(AstTestFactory.typeName4("T"),"f"));
    }
    test_visitFunctionTypedFormalParameter_type_covariant() : void {
        let expected : any = AstTestFactory.functionTypedFormalParameter(AstTestFactory.typeName4("T"),"f");
        expected.covariantKeyword = TokenFactory.tokenFromKeyword(Keyword.COVARIANT);
        this._assertSource("covariant T f()",expected);
    }
    test_visitFunctionTypedFormalParameter_typeParameters() : void {
        this._assertSource("T f<E>()",astFactory.functionTypedFormalParameter2({
            returnType : AstTestFactory.typeName4("T"),identifier : AstTestFactory.identifier3('f'),typeParameters : AstTestFactory.typeParameterList(new core.DartList.literal('E')),parameters : AstTestFactory.formalParameterList(new core.DartList.literal())}));
    }
    test_visitGenericFunctionType() : void {
        this._assertSource("int Function<T>(T)",AstTestFactory.genericFunctionType(AstTestFactory.typeName4("int"),AstTestFactory.typeParameterList(new core.DartList.literal('T')),AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName4("T"),null)))));
    }
    test_visitGenericTypeAlias() : void {
        this._assertSource("typedef X<S> = S Function<T>(T)",AstTestFactory.genericTypeAlias('X',AstTestFactory.typeParameterList(new core.DartList.literal('S')),AstTestFactory.genericFunctionType(AstTestFactory.typeName4("S"),AstTestFactory.typeParameterList(new core.DartList.literal('T')),AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName4("T"),null))))));
    }
    test_visitIfStatement_withElse() : void {
        this._assertSource("if (c) {} else {}",AstTestFactory.ifStatement2(AstTestFactory.identifier3("c"),AstTestFactory.block(),AstTestFactory.block()));
    }
    test_visitIfStatement_withoutElse() : void {
        this._assertSource("if (c) {}",AstTestFactory.ifStatement(AstTestFactory.identifier3("c"),AstTestFactory.block()));
    }
    test_visitImplementsClause_multiple() : void {
        this._assertSource("implements A, B",AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("A"),AstTestFactory.typeName4("B"))));
    }
    test_visitImplementsClause_single() : void {
        this._assertSource("implements A",AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("A"))));
    }
    test_visitImportDirective_combinator() : void {
        this._assertSource("import 'a.dart' show A;",AstTestFactory.importDirective3("a.dart",null,new core.DartList.literal(AstTestFactory.showCombinator(new core.DartList.literal(AstTestFactory.identifier3("A"))))));
    }
    test_visitImportDirective_combinators() : void {
        this._assertSource("import 'a.dart' show A hide B;",AstTestFactory.importDirective3("a.dart",null,new core.DartList.literal(AstTestFactory.showCombinator(new core.DartList.literal(AstTestFactory.identifier3("A"))),AstTestFactory.hideCombinator(new core.DartList.literal(AstTestFactory.identifier3("B"))))));
    }
    test_visitImportDirective_deferred() : void {
        this._assertSource("import 'a.dart' deferred as p;",AstTestFactory.importDirective2("a.dart",true,"p"));
    }
    test_visitImportDirective_minimal() : void {
        this._assertSource("import 'a.dart';",AstTestFactory.importDirective3("a.dart",null));
    }
    test_visitImportDirective_prefix() : void {
        this._assertSource("import 'a.dart' as p;",AstTestFactory.importDirective3("a.dart","p"));
    }
    test_visitImportDirective_prefix_combinator() : void {
        this._assertSource("import 'a.dart' as p show A;",AstTestFactory.importDirective3("a.dart","p",new core.DartList.literal(AstTestFactory.showCombinator(new core.DartList.literal(AstTestFactory.identifier3("A"))))));
    }
    test_visitImportDirective_prefix_combinators() : void {
        this._assertSource("import 'a.dart' as p show A hide B;",AstTestFactory.importDirective3("a.dart","p",new core.DartList.literal(AstTestFactory.showCombinator(new core.DartList.literal(AstTestFactory.identifier3("A"))),AstTestFactory.hideCombinator(new core.DartList.literal(AstTestFactory.identifier3("B"))))));
    }
    test_visitImportDirective_withMetadata() : void {
        let directive : any = AstTestFactory.importDirective3("a.dart",null);
        directive.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated import 'a.dart';",directive);
    }
    test_visitImportHideCombinator_multiple() : void {
        this._assertSource("hide a, b",AstTestFactory.hideCombinator(new core.DartList.literal(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"))));
    }
    test_visitImportHideCombinator_single() : void {
        this._assertSource("hide a",AstTestFactory.hideCombinator(new core.DartList.literal(AstTestFactory.identifier3("a"))));
    }
    test_visitImportShowCombinator_multiple() : void {
        this._assertSource("show a, b",AstTestFactory.showCombinator(new core.DartList.literal(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"))));
    }
    test_visitImportShowCombinator_single() : void {
        this._assertSource("show a",AstTestFactory.showCombinator(new core.DartList.literal(AstTestFactory.identifier3("a"))));
    }
    test_visitIndexExpression() : void {
        this._assertSource("a[i]",AstTestFactory.indexExpression(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("i")));
    }
    test_visitInstanceCreationExpression_const() : void {
        this._assertSource("const C()",AstTestFactory.instanceCreationExpression2(Keyword.CONST,AstTestFactory.typeName4("C")));
    }
    test_visitInstanceCreationExpression_named() : void {
        this._assertSource("new C.c()",AstTestFactory.instanceCreationExpression3(Keyword.NEW,AstTestFactory.typeName4("C"),"c"));
    }
    test_visitInstanceCreationExpression_unnamed() : void {
        this._assertSource("new C()",AstTestFactory.instanceCreationExpression2(Keyword.NEW,AstTestFactory.typeName4("C")));
    }
    test_visitIntegerLiteral() : void {
        this._assertSource("42",AstTestFactory.integer(42));
    }
    test_visitInterpolationExpression_expression() : void {
        this._assertSource("${a}",AstTestFactory.interpolationExpression(AstTestFactory.identifier3("a")));
    }
    test_visitInterpolationExpression_identifier() : void {
        this._assertSource("$a",AstTestFactory.interpolationExpression2("a"));
    }
    test_visitInterpolationString() : void {
        this._assertSource("'x",AstTestFactory.interpolationString("'x","x"));
    }
    test_visitIsExpression_negated() : void {
        this._assertSource("a is! C",AstTestFactory.isExpression(AstTestFactory.identifier3("a"),true,AstTestFactory.typeName4("C")));
    }
    test_visitIsExpression_normal() : void {
        this._assertSource("a is C",AstTestFactory.isExpression(AstTestFactory.identifier3("a"),false,AstTestFactory.typeName4("C")));
    }
    test_visitLabel() : void {
        this._assertSource("a:",AstTestFactory.label2("a"));
    }
    test_visitLabeledStatement_multiple() : void {
        this._assertSource("a: b: return;",AstTestFactory.labeledStatement(new core.DartList.literal(AstTestFactory.label2("a"),AstTestFactory.label2("b")),AstTestFactory.returnStatement()));
    }
    test_visitLabeledStatement_single() : void {
        this._assertSource("a: return;",AstTestFactory.labeledStatement(new core.DartList.literal(AstTestFactory.label2("a")),AstTestFactory.returnStatement()));
    }
    test_visitLibraryDirective() : void {
        this._assertSource("library l;",AstTestFactory.libraryDirective2("l"));
    }
    test_visitLibraryDirective_withMetadata() : void {
        let directive : any = AstTestFactory.libraryDirective2("l");
        directive.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated library l;",directive);
    }
    test_visitLibraryIdentifier_multiple() : void {
        this._assertSource("a.b.c",AstTestFactory.libraryIdentifier(new core.DartList.literal(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"),AstTestFactory.identifier3("c"))));
    }
    test_visitLibraryIdentifier_single() : void {
        this._assertSource("a",AstTestFactory.libraryIdentifier(new core.DartList.literal(AstTestFactory.identifier3("a"))));
    }
    test_visitListLiteral_const() : void {
        this._assertSource("const []",AstTestFactory.listLiteral2(Keyword.CONST,null));
    }
    test_visitListLiteral_empty() : void {
        this._assertSource("[]",AstTestFactory.listLiteral());
    }
    test_visitListLiteral_nonEmpty() : void {
        this._assertSource("[a, b, c]",AstTestFactory.listLiteral(new core.DartList.literal(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"),AstTestFactory.identifier3("c"))));
    }
    test_visitMapLiteral_const() : void {
        this._assertSource("const {}",AstTestFactory.mapLiteral(Keyword.CONST,null));
    }
    test_visitMapLiteral_empty() : void {
        this._assertSource("{}",AstTestFactory.mapLiteral2());
    }
    test_visitMapLiteral_nonEmpty() : void {
        this._assertSource("{'a' : a, 'b' : b, 'c' : c}",AstTestFactory.mapLiteral2(new core.DartList.literal(AstTestFactory.mapLiteralEntry("a",AstTestFactory.identifier3("a")),AstTestFactory.mapLiteralEntry("b",AstTestFactory.identifier3("b")),AstTestFactory.mapLiteralEntry("c",AstTestFactory.identifier3("c")))));
    }
    test_visitMapLiteralEntry() : void {
        this._assertSource("'a' : b",AstTestFactory.mapLiteralEntry("a",AstTestFactory.identifier3("b")));
    }
    test_visitMethodDeclaration_external() : void {
        this._assertSource("external m();",AstTestFactory.methodDeclaration(null,null,null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList()));
    }
    test_visitMethodDeclaration_external_returnType() : void {
        this._assertSource("external T m();",AstTestFactory.methodDeclaration(null,AstTestFactory.typeName4("T"),null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList()));
    }
    test_visitMethodDeclaration_getter() : void {
        this._assertSource("get m {}",AstTestFactory.methodDeclaration2(null,null,Keyword.GET,null,AstTestFactory.identifier3("m"),null,AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_getter_returnType() : void {
        this._assertSource("T get m {}",AstTestFactory.methodDeclaration2(null,AstTestFactory.typeName4("T"),Keyword.GET,null,AstTestFactory.identifier3("m"),null,AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_getter_seturnType() : void {
        this._assertSource("T set m(var v) {}",AstTestFactory.methodDeclaration2(null,AstTestFactory.typeName4("T"),Keyword.SET,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter(Keyword.VAR,"v"))),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_minimal() : void {
        this._assertSource("m() {}",AstTestFactory.methodDeclaration2(null,null,null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_multipleParameters() : void {
        this._assertSource("m(var a, var b) {}",AstTestFactory.methodDeclaration2(null,null,null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter(Keyword.VAR,"a"),AstTestFactory.simpleFormalParameter(Keyword.VAR,"b"))),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_operator() : void {
        this._assertSource("operator +() {}",AstTestFactory.methodDeclaration2(null,null,null,Keyword.OPERATOR,AstTestFactory.identifier3("+"),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_operator_returnType() : void {
        this._assertSource("T operator +() {}",AstTestFactory.methodDeclaration2(null,AstTestFactory.typeName4("T"),null,Keyword.OPERATOR,AstTestFactory.identifier3("+"),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_returnType() : void {
        this._assertSource("T m() {}",AstTestFactory.methodDeclaration2(null,AstTestFactory.typeName4("T"),null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_setter() : void {
        this._assertSource("set m(var v) {}",AstTestFactory.methodDeclaration2(null,null,Keyword.SET,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter(Keyword.VAR,"v"))),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_static() : void {
        this._assertSource("static m() {}",AstTestFactory.methodDeclaration2(Keyword.STATIC,null,null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_static_returnType() : void {
        this._assertSource("static T m() {}",AstTestFactory.methodDeclaration2(Keyword.STATIC,AstTestFactory.typeName4("T"),null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_typeParameters() : void {
        this._assertSource("m<E>() {}",AstTestFactory.methodDeclaration3(null,null,null,null,AstTestFactory.identifier3("m"),AstTestFactory.typeParameterList(new core.DartList.literal('E')),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_withMetadata() : void {
        let declaration : any = AstTestFactory.methodDeclaration2(null,null,null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2());
        declaration.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated m() {}",declaration);
    }
    test_visitMethodInvocation_conditional() : void {
        this._assertSource("t?.m()",AstTestFactory.methodInvocation(AstTestFactory.identifier3("t"),"m",null,TokenType.QUESTION_PERIOD));
    }
    test_visitMethodInvocation_noTarget() : void {
        this._assertSource("m()",AstTestFactory.methodInvocation2("m"));
    }
    test_visitMethodInvocation_target() : void {
        this._assertSource("t.m()",AstTestFactory.methodInvocation(AstTestFactory.identifier3("t"),"m"));
    }
    test_visitMethodInvocation_typeArguments() : void {
        this._assertSource("m<A>()",AstTestFactory.methodInvocation3(null,"m",AstTestFactory.typeArgumentList(new core.DartList.literal(AstTestFactory.typeName4('A')))));
    }
    test_visitNamedExpression() : void {
        this._assertSource("a: b",AstTestFactory.namedExpression2("a",AstTestFactory.identifier3("b")));
    }
    test_visitNamedFormalParameter() : void {
        this._assertSource("var a : 0",AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter(Keyword.VAR,"a"),AstTestFactory.integer(0)));
    }
    test_visitNativeClause() : void {
        this._assertSource("native 'code'",AstTestFactory.nativeClause("code"));
    }
    test_visitNativeFunctionBody() : void {
        this._assertSource("native 'str';",AstTestFactory.nativeFunctionBody("str"));
    }
    test_visitNullLiteral() : void {
        this._assertSource("null",AstTestFactory.nullLiteral());
    }
    test_visitParenthesizedExpression() : void {
        this._assertSource("(a)",AstTestFactory.parenthesizedExpression(AstTestFactory.identifier3("a")));
    }
    test_visitPartDirective() : void {
        this._assertSource("part 'a.dart';",AstTestFactory.partDirective2("a.dart"));
    }
    test_visitPartDirective_withMetadata() : void {
        let directive : any = AstTestFactory.partDirective2("a.dart");
        directive.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated part 'a.dart';",directive);
    }
    test_visitPartOfDirective() : void {
        this._assertSource("part of l;",AstTestFactory.partOfDirective(AstTestFactory.libraryIdentifier2(new core.DartList.literal("l"))));
    }
    test_visitPartOfDirective_withMetadata() : void {
        let directive : any = AstTestFactory.partOfDirective(AstTestFactory.libraryIdentifier2(new core.DartList.literal("l")));
        directive.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated part of l;",directive);
    }
    test_visitPositionalFormalParameter() : void {
        this._assertSource("var a = 0",AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter(Keyword.VAR,"a"),AstTestFactory.integer(0)));
    }
    test_visitPostfixExpression() : void {
        this._assertSource("a++",AstTestFactory.postfixExpression(AstTestFactory.identifier3("a"),TokenType.PLUS_PLUS));
    }
    test_visitPrefixedIdentifier() : void {
        this._assertSource("a.b",AstTestFactory.identifier5("a","b"));
    }
    test_visitPrefixExpression() : void {
        this._assertSource("-a",AstTestFactory.prefixExpression(TokenType.MINUS,AstTestFactory.identifier3("a")));
    }
    test_visitPropertyAccess() : void {
        this._assertSource("a.b",AstTestFactory.propertyAccess2(AstTestFactory.identifier3("a"),"b"));
    }
    test_visitPropertyAccess_conditional() : void {
        this._assertSource("a?.b",AstTestFactory.propertyAccess2(AstTestFactory.identifier3("a"),"b",TokenType.QUESTION_PERIOD));
    }
    test_visitRedirectingConstructorInvocation_named() : void {
        this._assertSource("this.c()",AstTestFactory.redirectingConstructorInvocation2("c"));
    }
    test_visitRedirectingConstructorInvocation_unnamed() : void {
        this._assertSource("this()",AstTestFactory.redirectingConstructorInvocation());
    }
    test_visitRethrowExpression() : void {
        this._assertSource("rethrow",AstTestFactory.rethrowExpression());
    }
    test_visitReturnStatement_expression() : void {
        this._assertSource("return a;",AstTestFactory.returnStatement2(AstTestFactory.identifier3("a")));
    }
    test_visitReturnStatement_noExpression() : void {
        this._assertSource("return;",AstTestFactory.returnStatement());
    }
    test_visitScriptTag() : void {
        let scriptTag : string = "!#/bin/dart.exe";
        this._assertSource(scriptTag,AstTestFactory.scriptTag(scriptTag));
    }
    test_visitSimpleFormalParameter_annotation() : void {
        let parameter : any = AstTestFactory.simpleFormalParameter3('x');
        parameter.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("A")));
        this._assertSource('@A x',parameter);
    }
    test_visitSimpleFormalParameter_keyword() : void {
        this._assertSource("var a",AstTestFactory.simpleFormalParameter(Keyword.VAR,"a"));
    }
    test_visitSimpleFormalParameter_keyword_type() : void {
        this._assertSource("final A a",AstTestFactory.simpleFormalParameter2(Keyword.FINAL,AstTestFactory.typeName4("A"),"a"));
    }
    test_visitSimpleFormalParameter_type() : void {
        this._assertSource("A a",AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName4("A"),"a"));
    }
    test_visitSimpleFormalParameter_type_covariant() : void {
        let expected : any = AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName4("A"),"a");
        expected.covariantKeyword = TokenFactory.tokenFromKeyword(Keyword.COVARIANT);
        this._assertSource("covariant A a",expected);
    }
    test_visitSimpleIdentifier() : void {
        this._assertSource("a",AstTestFactory.identifier3("a"));
    }
    test_visitSimpleStringLiteral() : void {
        this._assertSource("'a'",AstTestFactory.string2("a"));
    }
    test_visitStringInterpolation() : void {
        this._assertSource("'a${e}b'",AstTestFactory.string(new core.DartList.literal(AstTestFactory.interpolationString("'a","a"),AstTestFactory.interpolationExpression(AstTestFactory.identifier3("e")),AstTestFactory.interpolationString("b'","b"))));
    }
    test_visitSuperConstructorInvocation() : void {
        this._assertSource("super()",AstTestFactory.superConstructorInvocation());
    }
    test_visitSuperConstructorInvocation_named() : void {
        this._assertSource("super.c()",AstTestFactory.superConstructorInvocation2("c"));
    }
    test_visitSuperExpression() : void {
        this._assertSource("super",AstTestFactory.superExpression());
    }
    test_visitSwitchCase_multipleLabels() : void {
        this._assertSource("l1: l2: case a: {}",AstTestFactory.switchCase2(new core.DartList.literal(AstTestFactory.label2("l1"),AstTestFactory.label2("l2")),AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.block())));
    }
    test_visitSwitchCase_multipleStatements() : void {
        this._assertSource("case a: {} {}",AstTestFactory.switchCase(AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.block(),AstTestFactory.block())));
    }
    test_visitSwitchCase_noLabels() : void {
        this._assertSource("case a: {}",AstTestFactory.switchCase(AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.block())));
    }
    test_visitSwitchCase_singleLabel() : void {
        this._assertSource("l1: case a: {}",AstTestFactory.switchCase2(new core.DartList.literal(AstTestFactory.label2("l1")),AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.block())));
    }
    test_visitSwitchDefault_multipleLabels() : void {
        this._assertSource("l1: l2: default: {}",AstTestFactory.switchDefault(new core.DartList.literal(AstTestFactory.label2("l1"),AstTestFactory.label2("l2")),new core.DartList.literal(AstTestFactory.block())));
    }
    test_visitSwitchDefault_multipleStatements() : void {
        this._assertSource("default: {} {}",AstTestFactory.switchDefault2(new core.DartList.literal(AstTestFactory.block(),AstTestFactory.block())));
    }
    test_visitSwitchDefault_noLabels() : void {
        this._assertSource("default: {}",AstTestFactory.switchDefault2(new core.DartList.literal(AstTestFactory.block())));
    }
    test_visitSwitchDefault_singleLabel() : void {
        this._assertSource("l1: default: {}",AstTestFactory.switchDefault(new core.DartList.literal(AstTestFactory.label2("l1")),new core.DartList.literal(AstTestFactory.block())));
    }
    test_visitSwitchStatement() : void {
        this._assertSource("switch (a) {case 'b': {} default: {}}",AstTestFactory.switchStatement(AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.switchCase(AstTestFactory.string2("b"),new core.DartList.literal(AstTestFactory.block())),AstTestFactory.switchDefault2(new core.DartList.literal(AstTestFactory.block())))));
    }
    test_visitSymbolLiteral_multiple() : void {
        this._assertSource("#a.b.c",AstTestFactory.symbolLiteral(new core.DartList.literal("a","b","c")));
    }
    test_visitSymbolLiteral_single() : void {
        this._assertSource("#a",AstTestFactory.symbolLiteral(new core.DartList.literal("a")));
    }
    test_visitThisExpression() : void {
        this._assertSource("this",AstTestFactory.thisExpression());
    }
    test_visitThrowStatement() : void {
        this._assertSource("throw e",AstTestFactory.throwExpression2(AstTestFactory.identifier3("e")));
    }
    test_visitTopLevelVariableDeclaration_multiple() : void {
        this._assertSource("var a;",AstTestFactory.topLevelVariableDeclaration2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"))));
    }
    test_visitTopLevelVariableDeclaration_single() : void {
        this._assertSource("var a, b;",AstTestFactory.topLevelVariableDeclaration2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"),AstTestFactory.variableDeclaration("b"))));
    }
    test_visitTryStatement_catch() : void {
        this._assertSource("try {} on E {}",AstTestFactory.tryStatement2(AstTestFactory.block(),new core.DartList.literal(AstTestFactory.catchClause3(AstTestFactory.typeName4("E")))));
    }
    test_visitTryStatement_catches() : void {
        this._assertSource("try {} on E {} on F {}",AstTestFactory.tryStatement2(AstTestFactory.block(),new core.DartList.literal(AstTestFactory.catchClause3(AstTestFactory.typeName4("E")),AstTestFactory.catchClause3(AstTestFactory.typeName4("F")))));
    }
    test_visitTryStatement_catchFinally() : void {
        this._assertSource("try {} on E {} finally {}",AstTestFactory.tryStatement3(AstTestFactory.block(),new core.DartList.literal(AstTestFactory.catchClause3(AstTestFactory.typeName4("E"))),AstTestFactory.block()));
    }
    test_visitTryStatement_finally() : void {
        this._assertSource("try {} finally {}",AstTestFactory.tryStatement(AstTestFactory.block(),AstTestFactory.block()));
    }
    test_visitTypeArgumentList_multiple() : void {
        this._assertSource("<E, F>",AstTestFactory.typeArgumentList(new core.DartList.literal(AstTestFactory.typeName4("E"),AstTestFactory.typeName4("F"))));
    }
    test_visitTypeArgumentList_single() : void {
        this._assertSource("<E>",AstTestFactory.typeArgumentList(new core.DartList.literal(AstTestFactory.typeName4("E"))));
    }
    test_visitTypeName_multipleArgs() : void {
        this._assertSource("C<D, E>",AstTestFactory.typeName4("C",new core.DartList.literal(AstTestFactory.typeName4("D"),AstTestFactory.typeName4("E"))));
    }
    test_visitTypeName_nestedArg() : void {
        this._assertSource("C<D<E>>",AstTestFactory.typeName4("C",new core.DartList.literal(AstTestFactory.typeName4("D",new core.DartList.literal(AstTestFactory.typeName4("E"))))));
    }
    test_visitTypeName_noArgs() : void {
        this._assertSource("C",AstTestFactory.typeName4("C"));
    }
    test_visitTypeName_singleArg() : void {
        this._assertSource("C<D>",AstTestFactory.typeName4("C",new core.DartList.literal(AstTestFactory.typeName4("D"))));
    }
    test_visitTypeParameter_withExtends() : void {
        this._assertSource("E extends C",AstTestFactory.typeParameter2("E",AstTestFactory.typeName4("C")));
    }
    test_visitTypeParameter_withMetadata() : void {
        let parameter : any = AstTestFactory.typeParameter("E");
        parameter.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated E",parameter);
    }
    test_visitTypeParameter_withoutExtends() : void {
        this._assertSource("E",AstTestFactory.typeParameter("E"));
    }
    test_visitTypeParameterList_multiple() : void {
        this._assertSource("<E, F>",AstTestFactory.typeParameterList(new core.DartList.literal("E","F")));
    }
    test_visitTypeParameterList_single() : void {
        this._assertSource("<E>",AstTestFactory.typeParameterList(new core.DartList.literal("E")));
    }
    test_visitVariableDeclaration_initialized() : void {
        this._assertSource("a = b",AstTestFactory.variableDeclaration2("a",AstTestFactory.identifier3("b")));
    }
    test_visitVariableDeclaration_uninitialized() : void {
        this._assertSource("a",AstTestFactory.variableDeclaration("a"));
    }
    test_visitVariableDeclaration_withMetadata() : void {
        let declaration : any = AstTestFactory.variableDeclaration("a");
        declaration.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated a",declaration);
    }
    test_visitVariableDeclarationList_const_type() : void {
        this._assertSource("const C a, b",AstTestFactory.variableDeclarationList(Keyword.CONST,AstTestFactory.typeName4("C"),new core.DartList.literal(AstTestFactory.variableDeclaration("a"),AstTestFactory.variableDeclaration("b"))));
    }
    test_visitVariableDeclarationList_final_noType() : void {
        this._assertSource("final a, b",AstTestFactory.variableDeclarationList2(Keyword.FINAL,new core.DartList.literal(AstTestFactory.variableDeclaration("a"),AstTestFactory.variableDeclaration("b"))));
    }
    test_visitVariableDeclarationList_final_withMetadata() : void {
        let declarationList : any = AstTestFactory.variableDeclarationList2(Keyword.FINAL,new core.DartList.literal(AstTestFactory.variableDeclaration("a"),AstTestFactory.variableDeclaration("b")));
        declarationList.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated final a, b",declarationList);
    }
    test_visitVariableDeclarationList_type() : void {
        this._assertSource("C a, b",AstTestFactory.variableDeclarationList(null,AstTestFactory.typeName4("C"),new core.DartList.literal(AstTestFactory.variableDeclaration("a"),AstTestFactory.variableDeclaration("b"))));
    }
    test_visitVariableDeclarationList_var() : void {
        this._assertSource("var a, b",AstTestFactory.variableDeclarationList2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"),AstTestFactory.variableDeclaration("b"))));
    }
    test_visitVariableDeclarationStatement() : void {
        this._assertSource("C c;",AstTestFactory.variableDeclarationStatement(null,AstTestFactory.typeName4("C"),new core.DartList.literal(AstTestFactory.variableDeclaration("c"))));
    }
    test_visitWhileStatement() : void {
        this._assertSource("while (c) {}",AstTestFactory.whileStatement(AstTestFactory.identifier3("c"),AstTestFactory.block()));
    }
    test_visitWithClause_multiple() : void {
        this._assertSource("with A, B, C",AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("A"),AstTestFactory.typeName4("B"),AstTestFactory.typeName4("C"))));
    }
    test_visitWithClause_single() : void {
        this._assertSource("with A",AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("A"))));
    }
    test_visitYieldStatement() : void {
        this._assertSource("yield e;",AstTestFactory.yieldStatement(AstTestFactory.identifier3("e")));
    }
    test_visitYieldStatement_each() : void {
        this._assertSource("yield* e;",AstTestFactory.yieldEachStatement(AstTestFactory.identifier3("e")));
    }
    _assertSource(expectedSource : string,node : any) : void {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        node.accept(new bare.createInstance(any,null,buffer));
        expect(buffer.toString(),expectedSource);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ToSourceVisitor2Test() {
    }
}

export namespace ToSourceVisitorTest {
    export type Constructors = lib4.EngineTestCase.Constructors | 'ToSourceVisitorTest';
    export type Interface = Omit<ToSourceVisitorTest, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class ToSourceVisitorTest extends lib4.EngineTestCase {
    test_visitAdjacentStrings() : void {
        this._assertSource("'a' 'b'",AstTestFactory.adjacentStrings(new core.DartList.literal(AstTestFactory.string2("a"),AstTestFactory.string2("b"))));
    }
    test_visitAnnotation_constant() : void {
        this._assertSource("@A",AstTestFactory.annotation(AstTestFactory.identifier3("A")));
    }
    test_visitAnnotation_constructor() : void {
        this._assertSource("@A.c()",AstTestFactory.annotation2(AstTestFactory.identifier3("A"),AstTestFactory.identifier3("c"),AstTestFactory.argumentList()));
    }
    test_visitArgumentList() : void {
        this._assertSource("(a, b)",AstTestFactory.argumentList(new core.DartList.literal(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"))));
    }
    test_visitAsExpression() : void {
        this._assertSource("e as T",AstTestFactory.asExpression(AstTestFactory.identifier3("e"),AstTestFactory.typeName4("T")));
    }
    test_visitAssertStatement() : void {
        this._assertSource("assert (a);",AstTestFactory.assertStatement(AstTestFactory.identifier3("a")));
    }
    test_visitAssertStatement_withMessage() : void {
        this._assertSource("assert (a, b);",AstTestFactory.assertStatement(AstTestFactory.identifier3("a"),AstTestFactory.identifier3('b')));
    }
    test_visitAssignmentExpression() : void {
        this._assertSource("a = b",AstTestFactory.assignmentExpression(AstTestFactory.identifier3("a"),TokenType.EQ,AstTestFactory.identifier3("b")));
    }
    test_visitAwaitExpression() : void {
        this._assertSource("await e",AstTestFactory.awaitExpression(AstTestFactory.identifier3("e")));
    }
    test_visitBinaryExpression() : void {
        this._assertSource("a + b",AstTestFactory.binaryExpression(AstTestFactory.identifier3("a"),TokenType.PLUS,AstTestFactory.identifier3("b")));
    }
    test_visitBlock_empty() : void {
        this._assertSource("{}",AstTestFactory.block());
    }
    test_visitBlock_nonEmpty() : void {
        this._assertSource("{break; break;}",AstTestFactory.block(new core.DartList.literal(AstTestFactory.breakStatement(),AstTestFactory.breakStatement())));
    }
    test_visitBlockFunctionBody_async() : void {
        this._assertSource("async {}",AstTestFactory.asyncBlockFunctionBody());
    }
    test_visitBlockFunctionBody_async_star() : void {
        this._assertSource("async* {}",AstTestFactory.asyncGeneratorBlockFunctionBody());
    }
    test_visitBlockFunctionBody_simple() : void {
        this._assertSource("{}",AstTestFactory.blockFunctionBody2());
    }
    test_visitBlockFunctionBody_sync() : void {
        this._assertSource("sync {}",AstTestFactory.syncBlockFunctionBody());
    }
    test_visitBlockFunctionBody_sync_star() : void {
        this._assertSource("sync* {}",AstTestFactory.syncGeneratorBlockFunctionBody());
    }
    test_visitBooleanLiteral_false() : void {
        this._assertSource("false",AstTestFactory.booleanLiteral(false));
    }
    test_visitBooleanLiteral_true() : void {
        this._assertSource("true",AstTestFactory.booleanLiteral(true));
    }
    test_visitBreakStatement_label() : void {
        this._assertSource("break l;",AstTestFactory.breakStatement2("l"));
    }
    test_visitBreakStatement_noLabel() : void {
        this._assertSource("break;",AstTestFactory.breakStatement());
    }
    test_visitCascadeExpression_field() : void {
        this._assertSource("a..b..c",AstTestFactory.cascadeExpression(AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.cascadedPropertyAccess("b"),AstTestFactory.cascadedPropertyAccess("c"))));
    }
    test_visitCascadeExpression_index() : void {
        this._assertSource("a..[0]..[1]",AstTestFactory.cascadeExpression(AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.cascadedIndexExpression(AstTestFactory.integer(0)),AstTestFactory.cascadedIndexExpression(AstTestFactory.integer(1)))));
    }
    test_visitCascadeExpression_method() : void {
        this._assertSource("a..b()..c()",AstTestFactory.cascadeExpression(AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.cascadedMethodInvocation("b"),AstTestFactory.cascadedMethodInvocation("c"))));
    }
    test_visitCatchClause_catch_noStack() : void {
        this._assertSource("catch (e) {}",AstTestFactory.catchClause("e"));
    }
    test_visitCatchClause_catch_stack() : void {
        this._assertSource("catch (e, s) {}",AstTestFactory.catchClause2("e","s"));
    }
    test_visitCatchClause_on() : void {
        this._assertSource("on E {}",AstTestFactory.catchClause3(AstTestFactory.typeName4("E")));
    }
    test_visitCatchClause_on_catch() : void {
        this._assertSource("on E catch (e) {}",AstTestFactory.catchClause4(AstTestFactory.typeName4("E"),"e"));
    }
    test_visitClassDeclaration_abstract() : void {
        this._assertSource("abstract class C {}",AstTestFactory.classDeclaration(Keyword.ABSTRACT,"C",null,null,null,null));
    }
    test_visitClassDeclaration_empty() : void {
        this._assertSource("class C {}",AstTestFactory.classDeclaration(null,"C",null,null,null,null));
    }
    test_visitClassDeclaration_extends() : void {
        this._assertSource("class C extends A {}",AstTestFactory.classDeclaration(null,"C",null,AstTestFactory.extendsClause(AstTestFactory.typeName4("A")),null,null));
    }
    test_visitClassDeclaration_extends_implements() : void {
        this._assertSource("class C extends A implements B {}",AstTestFactory.classDeclaration(null,"C",null,AstTestFactory.extendsClause(AstTestFactory.typeName4("A")),null,AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("B")))));
    }
    test_visitClassDeclaration_extends_with() : void {
        this._assertSource("class C extends A with M {}",AstTestFactory.classDeclaration(null,"C",null,AstTestFactory.extendsClause(AstTestFactory.typeName4("A")),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M"))),null));
    }
    test_visitClassDeclaration_extends_with_implements() : void {
        this._assertSource("class C extends A with M implements B {}",AstTestFactory.classDeclaration(null,"C",null,AstTestFactory.extendsClause(AstTestFactory.typeName4("A")),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M"))),AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("B")))));
    }
    test_visitClassDeclaration_implements() : void {
        this._assertSource("class C implements B {}",AstTestFactory.classDeclaration(null,"C",null,null,null,AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("B")))));
    }
    test_visitClassDeclaration_multipleMember() : void {
        this._assertSource("class C {var a; var b;}",AstTestFactory.classDeclaration(null,"C",null,null,null,null,new core.DartList.literal(AstTestFactory.fieldDeclaration2(false,Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"))),AstTestFactory.fieldDeclaration2(false,Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("b"))))));
    }
    test_visitClassDeclaration_parameters() : void {
        this._assertSource("class C<E> {}",AstTestFactory.classDeclaration(null,"C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),null,null,null));
    }
    test_visitClassDeclaration_parameters_extends() : void {
        this._assertSource("class C<E> extends A {}",AstTestFactory.classDeclaration(null,"C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),AstTestFactory.extendsClause(AstTestFactory.typeName4("A")),null,null));
    }
    test_visitClassDeclaration_parameters_extends_implements() : void {
        this._assertSource("class C<E> extends A implements B {}",AstTestFactory.classDeclaration(null,"C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),AstTestFactory.extendsClause(AstTestFactory.typeName4("A")),null,AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("B")))));
    }
    test_visitClassDeclaration_parameters_extends_with() : void {
        this._assertSource("class C<E> extends A with M {}",AstTestFactory.classDeclaration(null,"C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),AstTestFactory.extendsClause(AstTestFactory.typeName4("A")),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M"))),null));
    }
    test_visitClassDeclaration_parameters_extends_with_implements() : void {
        this._assertSource("class C<E> extends A with M implements B {}",AstTestFactory.classDeclaration(null,"C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),AstTestFactory.extendsClause(AstTestFactory.typeName4("A")),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M"))),AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("B")))));
    }
    test_visitClassDeclaration_parameters_implements() : void {
        this._assertSource("class C<E> implements B {}",AstTestFactory.classDeclaration(null,"C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),null,null,AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("B")))));
    }
    test_visitClassDeclaration_singleMember() : void {
        this._assertSource("class C {var a;}",AstTestFactory.classDeclaration(null,"C",null,null,null,null,new core.DartList.literal(AstTestFactory.fieldDeclaration2(false,Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"))))));
    }
    test_visitClassDeclaration_withMetadata() : void {
        let declaration : any = AstTestFactory.classDeclaration(null,"C",null,null,null,null);
        declaration.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated class C {}",declaration);
    }
    test_visitClassTypeAlias_abstract() : void {
        this._assertSource("abstract class C = S with M1;",AstTestFactory.classTypeAlias("C",null,Keyword.ABSTRACT,AstTestFactory.typeName4("S"),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M1"))),null));
    }
    test_visitClassTypeAlias_abstract_implements() : void {
        this._assertSource("abstract class C = S with M1 implements I;",AstTestFactory.classTypeAlias("C",null,Keyword.ABSTRACT,AstTestFactory.typeName4("S"),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M1"))),AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("I")))));
    }
    test_visitClassTypeAlias_generic() : void {
        this._assertSource("class C<E> = S<E> with M1<E>;",AstTestFactory.classTypeAlias("C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),null,AstTestFactory.typeName4("S",new core.DartList.literal(AstTestFactory.typeName4("E"))),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M1",new core.DartList.literal(AstTestFactory.typeName4("E"))))),null));
    }
    test_visitClassTypeAlias_implements() : void {
        this._assertSource("class C = S with M1 implements I;",AstTestFactory.classTypeAlias("C",null,null,AstTestFactory.typeName4("S"),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M1"))),AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("I")))));
    }
    test_visitClassTypeAlias_minimal() : void {
        this._assertSource("class C = S with M1;",AstTestFactory.classTypeAlias("C",null,null,AstTestFactory.typeName4("S"),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M1"))),null));
    }
    test_visitClassTypeAlias_parameters_abstract() : void {
        this._assertSource("abstract class C<E> = S with M1;",AstTestFactory.classTypeAlias("C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),Keyword.ABSTRACT,AstTestFactory.typeName4("S"),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M1"))),null));
    }
    test_visitClassTypeAlias_parameters_abstract_implements() : void {
        this._assertSource("abstract class C<E> = S with M1 implements I;",AstTestFactory.classTypeAlias("C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),Keyword.ABSTRACT,AstTestFactory.typeName4("S"),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M1"))),AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("I")))));
    }
    test_visitClassTypeAlias_parameters_implements() : void {
        this._assertSource("class C<E> = S with M1 implements I;",AstTestFactory.classTypeAlias("C",AstTestFactory.typeParameterList(new core.DartList.literal("E")),null,AstTestFactory.typeName4("S"),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M1"))),AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("I")))));
    }
    test_visitClassTypeAlias_withMetadata() : void {
        let declaration : any = AstTestFactory.classTypeAlias("C",null,null,AstTestFactory.typeName4("S"),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M1"))),null);
        declaration.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated class C = S with M1;",declaration);
    }
    test_visitComment() : void {
        this._assertSource("",astFactory.blockComment(new core.DartList.literal<any>(TokenFactory.tokenFromString("/* comment */"))));
    }
    test_visitCommentReference() : void {
        this._assertSource("",astFactory.commentReference(null,AstTestFactory.identifier3("a")));
    }
    test_visitCompilationUnit_declaration() : void {
        this._assertSource("var a;",AstTestFactory.compilationUnit2(new core.DartList.literal(AstTestFactory.topLevelVariableDeclaration2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"))))));
    }
    test_visitCompilationUnit_directive() : void {
        this._assertSource("library l;",AstTestFactory.compilationUnit3(new core.DartList.literal(AstTestFactory.libraryDirective2("l"))));
    }
    test_visitCompilationUnit_directive_declaration() : void {
        this._assertSource("library l; var a;",AstTestFactory.compilationUnit4(new core.DartList.literal(AstTestFactory.libraryDirective2("l")),new core.DartList.literal(AstTestFactory.topLevelVariableDeclaration2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"))))));
    }
    test_visitCompilationUnit_empty() : void {
        this._assertSource("",AstTestFactory.compilationUnit());
    }
    test_visitCompilationUnit_script() : void {
        this._assertSource("!#/bin/dartvm",AstTestFactory.compilationUnit5("!#/bin/dartvm"));
    }
    test_visitCompilationUnit_script_declaration() : void {
        this._assertSource("!#/bin/dartvm var a;",AstTestFactory.compilationUnit6("!#/bin/dartvm",new core.DartList.literal(AstTestFactory.topLevelVariableDeclaration2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"))))));
    }
    test_visitCompilationUnit_script_directive() : void {
        this._assertSource("!#/bin/dartvm library l;",AstTestFactory.compilationUnit7("!#/bin/dartvm",new core.DartList.literal(AstTestFactory.libraryDirective2("l"))));
    }
    test_visitCompilationUnit_script_directives_declarations() : void {
        this._assertSource("!#/bin/dartvm library l; var a;",AstTestFactory.compilationUnit8("!#/bin/dartvm",new core.DartList.literal(AstTestFactory.libraryDirective2("l")),new core.DartList.literal(AstTestFactory.topLevelVariableDeclaration2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"))))));
    }
    test_visitConditionalExpression() : void {
        this._assertSource("a ? b : c",AstTestFactory.conditionalExpression(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"),AstTestFactory.identifier3("c")));
    }
    test_visitConstructorDeclaration_const() : void {
        this._assertSource("const C() {}",AstTestFactory.constructorDeclaration2(Keyword.CONST,null,AstTestFactory.identifier3("C"),null,AstTestFactory.formalParameterList(),null,AstTestFactory.blockFunctionBody2()));
    }
    test_visitConstructorDeclaration_external() : void {
        this._assertSource("external C();",AstTestFactory.constructorDeclaration(AstTestFactory.identifier3("C"),null,AstTestFactory.formalParameterList(),null));
    }
    test_visitConstructorDeclaration_minimal() : void {
        this._assertSource("C() {}",AstTestFactory.constructorDeclaration2(null,null,AstTestFactory.identifier3("C"),null,AstTestFactory.formalParameterList(),null,AstTestFactory.blockFunctionBody2()));
    }
    test_visitConstructorDeclaration_multipleInitializers() : void {
        this._assertSource("C() : a = b, c = d {}",AstTestFactory.constructorDeclaration2(null,null,AstTestFactory.identifier3("C"),null,AstTestFactory.formalParameterList(),new core.DartList.literal(AstTestFactory.constructorFieldInitializer(false,"a",AstTestFactory.identifier3("b")),AstTestFactory.constructorFieldInitializer(false,"c",AstTestFactory.identifier3("d"))),AstTestFactory.blockFunctionBody2()));
    }
    test_visitConstructorDeclaration_multipleParameters() : void {
        this._assertSource("C(var a, var b) {}",AstTestFactory.constructorDeclaration2(null,null,AstTestFactory.identifier3("C"),null,AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter(Keyword.VAR,"a"),AstTestFactory.simpleFormalParameter(Keyword.VAR,"b"))),null,AstTestFactory.blockFunctionBody2()));
    }
    test_visitConstructorDeclaration_named() : void {
        this._assertSource("C.m() {}",AstTestFactory.constructorDeclaration2(null,null,AstTestFactory.identifier3("C"),"m",AstTestFactory.formalParameterList(),null,AstTestFactory.blockFunctionBody2()));
    }
    test_visitConstructorDeclaration_singleInitializer() : void {
        this._assertSource("C() : a = b {}",AstTestFactory.constructorDeclaration2(null,null,AstTestFactory.identifier3("C"),null,AstTestFactory.formalParameterList(),new core.DartList.literal(AstTestFactory.constructorFieldInitializer(false,"a",AstTestFactory.identifier3("b"))),AstTestFactory.blockFunctionBody2()));
    }
    test_visitConstructorDeclaration_withMetadata() : void {
        let declaration : any = AstTestFactory.constructorDeclaration2(null,null,AstTestFactory.identifier3("C"),null,AstTestFactory.formalParameterList(),null,AstTestFactory.blockFunctionBody2());
        declaration.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated C() {}",declaration);
    }
    test_visitConstructorFieldInitializer_withoutThis() : void {
        this._assertSource("a = b",AstTestFactory.constructorFieldInitializer(false,"a",AstTestFactory.identifier3("b")));
    }
    test_visitConstructorFieldInitializer_withThis() : void {
        this._assertSource("this.a = b",AstTestFactory.constructorFieldInitializer(true,"a",AstTestFactory.identifier3("b")));
    }
    test_visitConstructorName_named_prefix() : void {
        this._assertSource("p.C.n",AstTestFactory.constructorName(AstTestFactory.typeName4("p.C.n"),null));
    }
    test_visitConstructorName_unnamed_noPrefix() : void {
        this._assertSource("C",AstTestFactory.constructorName(AstTestFactory.typeName4("C"),null));
    }
    test_visitConstructorName_unnamed_prefix() : void {
        this._assertSource("p.C",AstTestFactory.constructorName(AstTestFactory.typeName3(AstTestFactory.identifier5("p","C")),null));
    }
    test_visitContinueStatement_label() : void {
        this._assertSource("continue l;",AstTestFactory.continueStatement("l"));
    }
    test_visitContinueStatement_noLabel() : void {
        this._assertSource("continue;",AstTestFactory.continueStatement());
    }
    test_visitDefaultFormalParameter_annotation() : void {
        let parameter : any = AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("p"),AstTestFactory.integer(0));
        parameter.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("A")));
        this._assertSource('@A p = 0',parameter);
    }
    test_visitDefaultFormalParameter_named_noValue() : void {
        this._assertSource("p",AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("p"),null));
    }
    test_visitDefaultFormalParameter_named_value() : void {
        this._assertSource("p : 0",AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("p"),AstTestFactory.integer(0)));
    }
    test_visitDefaultFormalParameter_positional_noValue() : void {
        this._assertSource("p",AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("p"),null));
    }
    test_visitDefaultFormalParameter_positional_value() : void {
        this._assertSource("p = 0",AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("p"),AstTestFactory.integer(0)));
    }
    test_visitDoStatement() : void {
        this._assertSource("do {} while (c);",AstTestFactory.doStatement(AstTestFactory.block(),AstTestFactory.identifier3("c")));
    }
    test_visitDoubleLiteral() : void {
        this._assertSource("4.2",AstTestFactory.doubleLiteral(4.2));
    }
    test_visitEmptyFunctionBody() : void {
        this._assertSource(";",AstTestFactory.emptyFunctionBody());
    }
    test_visitEmptyStatement() : void {
        this._assertSource(";",AstTestFactory.emptyStatement());
    }
    test_visitEnumDeclaration_multiple() : void {
        this._assertSource("enum E {ONE, TWO}",AstTestFactory.enumDeclaration2("E",new core.DartList.literal("ONE","TWO")));
    }
    test_visitEnumDeclaration_single() : void {
        this._assertSource("enum E {ONE}",AstTestFactory.enumDeclaration2("E",new core.DartList.literal("ONE")));
    }
    test_visitExportDirective_combinator() : void {
        this._assertSource("export 'a.dart' show A;",AstTestFactory.exportDirective2("a.dart",new core.DartList.literal(AstTestFactory.showCombinator(new core.DartList.literal(AstTestFactory.identifier3("A"))))));
    }
    test_visitExportDirective_combinators() : void {
        this._assertSource("export 'a.dart' show A hide B;",AstTestFactory.exportDirective2("a.dart",new core.DartList.literal(AstTestFactory.showCombinator(new core.DartList.literal(AstTestFactory.identifier3("A"))),AstTestFactory.hideCombinator(new core.DartList.literal(AstTestFactory.identifier3("B"))))));
    }
    test_visitExportDirective_minimal() : void {
        this._assertSource("export 'a.dart';",AstTestFactory.exportDirective2("a.dart"));
    }
    test_visitExportDirective_withMetadata() : void {
        let directive : any = AstTestFactory.exportDirective2("a.dart");
        directive.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated export 'a.dart';",directive);
    }
    test_visitExpressionFunctionBody_async() : void {
        this._assertSource("async => a;",AstTestFactory.asyncExpressionFunctionBody(AstTestFactory.identifier3("a")));
    }
    test_visitExpressionFunctionBody_simple() : void {
        this._assertSource("=> a;",AstTestFactory.expressionFunctionBody(AstTestFactory.identifier3("a")));
    }
    test_visitExpressionStatement() : void {
        this._assertSource("a;",AstTestFactory.expressionStatement(AstTestFactory.identifier3("a")));
    }
    test_visitExtendsClause() : void {
        this._assertSource("extends C",AstTestFactory.extendsClause(AstTestFactory.typeName4("C")));
    }
    test_visitFieldDeclaration_instance() : void {
        this._assertSource("var a;",AstTestFactory.fieldDeclaration2(false,Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"))));
    }
    test_visitFieldDeclaration_static() : void {
        this._assertSource("static var a;",AstTestFactory.fieldDeclaration2(true,Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"))));
    }
    test_visitFieldDeclaration_withMetadata() : void {
        let declaration : any = AstTestFactory.fieldDeclaration2(false,Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a")));
        declaration.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated var a;",declaration);
    }
    test_visitFieldFormalParameter_annotation() : void {
        let parameter : any = AstTestFactory.fieldFormalParameter2('f');
        parameter.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("A")));
        this._assertSource('@A this.f',parameter);
    }
    test_visitFieldFormalParameter_functionTyped() : void {
        this._assertSource("A this.a(b)",AstTestFactory.fieldFormalParameter(null,AstTestFactory.typeName4("A"),"a",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("b")))));
    }
    test_visitFieldFormalParameter_functionTyped_typeParameters() : void {
        this._assertSource("A this.a<E, F>(b)",astFactory.fieldFormalParameter2({
            type : AstTestFactory.typeName4('A'),thisKeyword : TokenFactory.tokenFromKeyword(Keyword.THIS),period : TokenFactory.tokenFromType(TokenType.PERIOD),identifier : AstTestFactory.identifier3('a'),typeParameters : AstTestFactory.typeParameterList(new core.DartList.literal('E','F')),parameters : AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("b")))}));
    }
    test_visitFieldFormalParameter_keyword() : void {
        this._assertSource("var this.a",AstTestFactory.fieldFormalParameter(Keyword.VAR,null,"a"));
    }
    test_visitFieldFormalParameter_keywordAndType() : void {
        this._assertSource("final A this.a",AstTestFactory.fieldFormalParameter(Keyword.FINAL,AstTestFactory.typeName4("A"),"a"));
    }
    test_visitFieldFormalParameter_type() : void {
        this._assertSource("A this.a",AstTestFactory.fieldFormalParameter(null,AstTestFactory.typeName4("A"),"a"));
    }
    test_visitFieldFormalParameter_type_covariant() : void {
        let expected : any = AstTestFactory.fieldFormalParameter(null,AstTestFactory.typeName4("A"),"a");
        expected.covariantKeyword = TokenFactory.tokenFromKeyword(Keyword.COVARIANT);
        this._assertSource("covariant A this.a",expected);
    }
    test_visitForEachStatement_declared() : void {
        this._assertSource("for (var a in b) {}",AstTestFactory.forEachStatement(AstTestFactory.declaredIdentifier3("a"),AstTestFactory.identifier3("b"),AstTestFactory.block()));
    }
    test_visitForEachStatement_variable() : void {
        this._assertSource("for (a in b) {}",astFactory.forEachStatementWithReference(null,TokenFactory.tokenFromKeyword(Keyword.FOR),TokenFactory.tokenFromType(TokenType.OPEN_PAREN),AstTestFactory.identifier3("a"),TokenFactory.tokenFromKeyword(Keyword.IN),AstTestFactory.identifier3("b"),TokenFactory.tokenFromType(TokenType.CLOSE_PAREN),AstTestFactory.block()));
    }
    test_visitForEachStatement_variable_await() : void {
        this._assertSource("await for (a in b) {}",astFactory.forEachStatementWithReference(TokenFactory.tokenFromString("await"),TokenFactory.tokenFromKeyword(Keyword.FOR),TokenFactory.tokenFromType(TokenType.OPEN_PAREN),AstTestFactory.identifier3("a"),TokenFactory.tokenFromKeyword(Keyword.IN),AstTestFactory.identifier3("b"),TokenFactory.tokenFromType(TokenType.CLOSE_PAREN),AstTestFactory.block()));
    }
    test_visitFormalParameterList_empty() : void {
        this._assertSource("()",AstTestFactory.formalParameterList());
    }
    test_visitFormalParameterList_n() : void {
        this._assertSource("({a : 0})",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.integer(0)))));
    }
    test_visitFormalParameterList_nn() : void {
        this._assertSource("({a : 0, b : 1})",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.integer(0)),AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.integer(1)))));
    }
    test_visitFormalParameterList_p() : void {
        this._assertSource("([a = 0])",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.integer(0)))));
    }
    test_visitFormalParameterList_pp() : void {
        this._assertSource("([a = 0, b = 1])",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.integer(0)),AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.integer(1)))));
    }
    test_visitFormalParameterList_r() : void {
        this._assertSource("(a)",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"))));
    }
    test_visitFormalParameterList_rn() : void {
        this._assertSource("(a, {b : 1})",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.integer(1)))));
    }
    test_visitFormalParameterList_rnn() : void {
        this._assertSource("(a, {b : 1, c : 2})",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.integer(1)),AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("c"),AstTestFactory.integer(2)))));
    }
    test_visitFormalParameterList_rp() : void {
        this._assertSource("(a, [b = 1])",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.integer(1)))));
    }
    test_visitFormalParameterList_rpp() : void {
        this._assertSource("(a, [b = 1, c = 2])",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.integer(1)),AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("c"),AstTestFactory.integer(2)))));
    }
    test_visitFormalParameterList_rr() : void {
        this._assertSource("(a, b)",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.simpleFormalParameter3("b"))));
    }
    test_visitFormalParameterList_rrn() : void {
        this._assertSource("(a, b, {c : 3})",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("c"),AstTestFactory.integer(3)))));
    }
    test_visitFormalParameterList_rrnn() : void {
        this._assertSource("(a, b, {c : 3, d : 4})",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("c"),AstTestFactory.integer(3)),AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("d"),AstTestFactory.integer(4)))));
    }
    test_visitFormalParameterList_rrp() : void {
        this._assertSource("(a, b, [c = 3])",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("c"),AstTestFactory.integer(3)))));
    }
    test_visitFormalParameterList_rrpp() : void {
        this._assertSource("(a, b, [c = 3, d = 4])",AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"),AstTestFactory.simpleFormalParameter3("b"),AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("c"),AstTestFactory.integer(3)),AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("d"),AstTestFactory.integer(4)))));
    }
    test_visitForStatement_c() : void {
        this._assertSource("for (; c;) {}",AstTestFactory.forStatement(null,AstTestFactory.identifier3("c"),null,AstTestFactory.block()));
    }
    test_visitForStatement_cu() : void {
        this._assertSource("for (; c; u) {}",AstTestFactory.forStatement(null,AstTestFactory.identifier3("c"),new core.DartList.literal(AstTestFactory.identifier3("u")),AstTestFactory.block()));
    }
    test_visitForStatement_e() : void {
        this._assertSource("for (e;;) {}",AstTestFactory.forStatement(AstTestFactory.identifier3("e"),null,null,AstTestFactory.block()));
    }
    test_visitForStatement_ec() : void {
        this._assertSource("for (e; c;) {}",AstTestFactory.forStatement(AstTestFactory.identifier3("e"),AstTestFactory.identifier3("c"),null,AstTestFactory.block()));
    }
    test_visitForStatement_ecu() : void {
        this._assertSource("for (e; c; u) {}",AstTestFactory.forStatement(AstTestFactory.identifier3("e"),AstTestFactory.identifier3("c"),new core.DartList.literal(AstTestFactory.identifier3("u")),AstTestFactory.block()));
    }
    test_visitForStatement_eu() : void {
        this._assertSource("for (e;; u) {}",AstTestFactory.forStatement(AstTestFactory.identifier3("e"),null,new core.DartList.literal(AstTestFactory.identifier3("u")),AstTestFactory.block()));
    }
    test_visitForStatement_i() : void {
        this._assertSource("for (var i;;) {}",AstTestFactory.forStatement2(AstTestFactory.variableDeclarationList2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("i"))),null,null,AstTestFactory.block()));
    }
    test_visitForStatement_ic() : void {
        this._assertSource("for (var i; c;) {}",AstTestFactory.forStatement2(AstTestFactory.variableDeclarationList2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("i"))),AstTestFactory.identifier3("c"),null,AstTestFactory.block()));
    }
    test_visitForStatement_icu() : void {
        this._assertSource("for (var i; c; u) {}",AstTestFactory.forStatement2(AstTestFactory.variableDeclarationList2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("i"))),AstTestFactory.identifier3("c"),new core.DartList.literal(AstTestFactory.identifier3("u")),AstTestFactory.block()));
    }
    test_visitForStatement_iu() : void {
        this._assertSource("for (var i;; u) {}",AstTestFactory.forStatement2(AstTestFactory.variableDeclarationList2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("i"))),null,new core.DartList.literal(AstTestFactory.identifier3("u")),AstTestFactory.block()));
    }
    test_visitForStatement_u() : void {
        this._assertSource("for (;; u) {}",AstTestFactory.forStatement(null,null,new core.DartList.literal(AstTestFactory.identifier3("u")),AstTestFactory.block()));
    }
    test_visitFunctionDeclaration_external() : void {
        let functionDeclaration : any = AstTestFactory.functionDeclaration(null,null,"f",AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.emptyFunctionBody()));
        functionDeclaration.externalKeyword = TokenFactory.tokenFromKeyword(Keyword.EXTERNAL);
        this._assertSource("external f();",functionDeclaration);
    }
    test_visitFunctionDeclaration_getter() : void {
        this._assertSource("get f() {}",AstTestFactory.functionDeclaration(null,Keyword.GET,"f",AstTestFactory.functionExpression()));
    }
    test_visitFunctionDeclaration_local_blockBody() : void {
        let f : any = AstTestFactory.functionDeclaration(null,null,"f",AstTestFactory.functionExpression());
        let fStatement : any = astFactory.functionDeclarationStatement(f);
        this._assertSource("main() {f() {} 42;}",AstTestFactory.functionDeclaration(null,null,"main",AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2(new core.DartList.literal(fStatement,AstTestFactory.expressionStatement(AstTestFactory.integer(42)))))));
    }
    test_visitFunctionDeclaration_local_expressionBody() : void {
        let f : any = AstTestFactory.functionDeclaration(null,null,"f",AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.expressionFunctionBody(AstTestFactory.integer(1))));
        let fStatement : any = astFactory.functionDeclarationStatement(f);
        this._assertSource("main() {f() => 1; 2;}",AstTestFactory.functionDeclaration(null,null,"main",AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2(new core.DartList.literal(fStatement,AstTestFactory.expressionStatement(AstTestFactory.integer(2)))))));
    }
    test_visitFunctionDeclaration_normal() : void {
        this._assertSource("f() {}",AstTestFactory.functionDeclaration(null,null,"f",AstTestFactory.functionExpression()));
    }
    test_visitFunctionDeclaration_setter() : void {
        this._assertSource("set f() {}",AstTestFactory.functionDeclaration(null,Keyword.SET,"f",AstTestFactory.functionExpression()));
    }
    test_visitFunctionDeclaration_typeParameters() : void {
        this._assertSource("f<E>() {}",AstTestFactory.functionDeclaration(null,null,"f",AstTestFactory.functionExpression3(AstTestFactory.typeParameterList(new core.DartList.literal('E')),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2())));
    }
    test_visitFunctionDeclaration_withMetadata() : void {
        let declaration : any = AstTestFactory.functionDeclaration(null,null,"f",AstTestFactory.functionExpression());
        declaration.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated f() {}",declaration);
    }
    test_visitFunctionDeclarationStatement() : void {
        this._assertSource("f() {}",AstTestFactory.functionDeclarationStatement(null,null,"f",AstTestFactory.functionExpression()));
    }
    test_visitFunctionExpression() : void {
        this._assertSource("() {}",AstTestFactory.functionExpression());
    }
    test_visitFunctionExpression_typeParameters() : void {
        this._assertSource("<E>() {}",AstTestFactory.functionExpression3(AstTestFactory.typeParameterList(new core.DartList.literal('E')),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
    }
    test_visitFunctionExpressionInvocation_minimal() : void {
        this._assertSource("f()",AstTestFactory.functionExpressionInvocation(AstTestFactory.identifier3("f")));
    }
    test_visitFunctionExpressionInvocation_typeArguments() : void {
        this._assertSource("f<A>()",AstTestFactory.functionExpressionInvocation2(AstTestFactory.identifier3("f"),AstTestFactory.typeArgumentList(new core.DartList.literal(AstTestFactory.typeName4('A')))));
    }
    test_visitFunctionTypeAlias_generic() : void {
        this._assertSource("typedef A F<B>();",AstTestFactory.typeAlias(AstTestFactory.typeName4("A"),"F",AstTestFactory.typeParameterList(new core.DartList.literal("B")),AstTestFactory.formalParameterList()));
    }
    test_visitFunctionTypeAlias_nonGeneric() : void {
        this._assertSource("typedef A F();",AstTestFactory.typeAlias(AstTestFactory.typeName4("A"),"F",null,AstTestFactory.formalParameterList()));
    }
    test_visitFunctionTypeAlias_withMetadata() : void {
        let declaration : any = AstTestFactory.typeAlias(AstTestFactory.typeName4("A"),"F",null,AstTestFactory.formalParameterList());
        declaration.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated typedef A F();",declaration);
    }
    test_visitFunctionTypedFormalParameter_annotation() : void {
        let parameter : any = AstTestFactory.functionTypedFormalParameter(null,"f");
        parameter.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("A")));
        this._assertSource('@A f()',parameter);
    }
    test_visitFunctionTypedFormalParameter_noType() : void {
        this._assertSource("f()",AstTestFactory.functionTypedFormalParameter(null,"f"));
    }
    test_visitFunctionTypedFormalParameter_type() : void {
        this._assertSource("T f()",AstTestFactory.functionTypedFormalParameter(AstTestFactory.typeName4("T"),"f"));
    }
    test_visitFunctionTypedFormalParameter_type_covariant() : void {
        let expected : any = AstTestFactory.functionTypedFormalParameter(AstTestFactory.typeName4("T"),"f");
        expected.covariantKeyword = TokenFactory.tokenFromKeyword(Keyword.COVARIANT);
        this._assertSource("covariant T f()",expected);
    }
    test_visitFunctionTypedFormalParameter_typeParameters() : void {
        this._assertSource("T f<E>()",astFactory.functionTypedFormalParameter2({
            returnType : AstTestFactory.typeName4("T"),identifier : AstTestFactory.identifier3('f'),typeParameters : AstTestFactory.typeParameterList(new core.DartList.literal('E')),parameters : AstTestFactory.formalParameterList(new core.DartList.literal())}));
    }
    test_visitGenericFunctionType() : void {
        this._assertSource("int Function<T>(T)",AstTestFactory.genericFunctionType(AstTestFactory.typeName4("int"),AstTestFactory.typeParameterList(new core.DartList.literal('T')),AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName4("T"),null)))));
    }
    test_visitGenericTypeAlias() : void {
        this._assertSource("typedef X<S> = S Function<T>(T)",AstTestFactory.genericTypeAlias('X',AstTestFactory.typeParameterList(new core.DartList.literal('S')),AstTestFactory.genericFunctionType(AstTestFactory.typeName4("S"),AstTestFactory.typeParameterList(new core.DartList.literal('T')),AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName4("T"),null))))));
    }
    test_visitIfStatement_withElse() : void {
        this._assertSource("if (c) {} else {}",AstTestFactory.ifStatement2(AstTestFactory.identifier3("c"),AstTestFactory.block(),AstTestFactory.block()));
    }
    test_visitIfStatement_withoutElse() : void {
        this._assertSource("if (c) {}",AstTestFactory.ifStatement(AstTestFactory.identifier3("c"),AstTestFactory.block()));
    }
    test_visitImplementsClause_multiple() : void {
        this._assertSource("implements A, B",AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("A"),AstTestFactory.typeName4("B"))));
    }
    test_visitImplementsClause_single() : void {
        this._assertSource("implements A",AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("A"))));
    }
    test_visitImportDirective_combinator() : void {
        this._assertSource("import 'a.dart' show A;",AstTestFactory.importDirective3("a.dart",null,new core.DartList.literal(AstTestFactory.showCombinator(new core.DartList.literal(AstTestFactory.identifier3("A"))))));
    }
    test_visitImportDirective_combinators() : void {
        this._assertSource("import 'a.dart' show A hide B;",AstTestFactory.importDirective3("a.dart",null,new core.DartList.literal(AstTestFactory.showCombinator(new core.DartList.literal(AstTestFactory.identifier3("A"))),AstTestFactory.hideCombinator(new core.DartList.literal(AstTestFactory.identifier3("B"))))));
    }
    test_visitImportDirective_deferred() : void {
        this._assertSource("import 'a.dart' deferred as p;",AstTestFactory.importDirective2("a.dart",true,"p"));
    }
    test_visitImportDirective_minimal() : void {
        this._assertSource("import 'a.dart';",AstTestFactory.importDirective3("a.dart",null));
    }
    test_visitImportDirective_prefix() : void {
        this._assertSource("import 'a.dart' as p;",AstTestFactory.importDirective3("a.dart","p"));
    }
    test_visitImportDirective_prefix_combinator() : void {
        this._assertSource("import 'a.dart' as p show A;",AstTestFactory.importDirective3("a.dart","p",new core.DartList.literal(AstTestFactory.showCombinator(new core.DartList.literal(AstTestFactory.identifier3("A"))))));
    }
    test_visitImportDirective_prefix_combinators() : void {
        this._assertSource("import 'a.dart' as p show A hide B;",AstTestFactory.importDirective3("a.dart","p",new core.DartList.literal(AstTestFactory.showCombinator(new core.DartList.literal(AstTestFactory.identifier3("A"))),AstTestFactory.hideCombinator(new core.DartList.literal(AstTestFactory.identifier3("B"))))));
    }
    test_visitImportDirective_withMetadata() : void {
        let directive : any = AstTestFactory.importDirective3("a.dart",null);
        directive.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated import 'a.dart';",directive);
    }
    test_visitImportHideCombinator_multiple() : void {
        this._assertSource("hide a, b",AstTestFactory.hideCombinator(new core.DartList.literal(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"))));
    }
    test_visitImportHideCombinator_single() : void {
        this._assertSource("hide a",AstTestFactory.hideCombinator(new core.DartList.literal(AstTestFactory.identifier3("a"))));
    }
    test_visitImportShowCombinator_multiple() : void {
        this._assertSource("show a, b",AstTestFactory.showCombinator(new core.DartList.literal(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"))));
    }
    test_visitImportShowCombinator_single() : void {
        this._assertSource("show a",AstTestFactory.showCombinator(new core.DartList.literal(AstTestFactory.identifier3("a"))));
    }
    test_visitIndexExpression() : void {
        this._assertSource("a[i]",AstTestFactory.indexExpression(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("i")));
    }
    test_visitInstanceCreationExpression_const() : void {
        this._assertSource("const C()",AstTestFactory.instanceCreationExpression2(Keyword.CONST,AstTestFactory.typeName4("C")));
    }
    test_visitInstanceCreationExpression_named() : void {
        this._assertSource("new C.c()",AstTestFactory.instanceCreationExpression3(Keyword.NEW,AstTestFactory.typeName4("C"),"c"));
    }
    test_visitInstanceCreationExpression_unnamed() : void {
        this._assertSource("new C()",AstTestFactory.instanceCreationExpression2(Keyword.NEW,AstTestFactory.typeName4("C")));
    }
    test_visitIntegerLiteral() : void {
        this._assertSource("42",AstTestFactory.integer(42));
    }
    test_visitInterpolationExpression_expression() : void {
        this._assertSource("${a}",AstTestFactory.interpolationExpression(AstTestFactory.identifier3("a")));
    }
    test_visitInterpolationExpression_identifier() : void {
        this._assertSource("$a",AstTestFactory.interpolationExpression2("a"));
    }
    test_visitInterpolationString() : void {
        this._assertSource("'x",AstTestFactory.interpolationString("'x","x"));
    }
    test_visitIsExpression_negated() : void {
        this._assertSource("a is! C",AstTestFactory.isExpression(AstTestFactory.identifier3("a"),true,AstTestFactory.typeName4("C")));
    }
    test_visitIsExpression_normal() : void {
        this._assertSource("a is C",AstTestFactory.isExpression(AstTestFactory.identifier3("a"),false,AstTestFactory.typeName4("C")));
    }
    test_visitLabel() : void {
        this._assertSource("a:",AstTestFactory.label2("a"));
    }
    test_visitLabeledStatement_multiple() : void {
        this._assertSource("a: b: return;",AstTestFactory.labeledStatement(new core.DartList.literal(AstTestFactory.label2("a"),AstTestFactory.label2("b")),AstTestFactory.returnStatement()));
    }
    test_visitLabeledStatement_single() : void {
        this._assertSource("a: return;",AstTestFactory.labeledStatement(new core.DartList.literal(AstTestFactory.label2("a")),AstTestFactory.returnStatement()));
    }
    test_visitLibraryDirective() : void {
        this._assertSource("library l;",AstTestFactory.libraryDirective2("l"));
    }
    test_visitLibraryDirective_withMetadata() : void {
        let directive : any = AstTestFactory.libraryDirective2("l");
        directive.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated library l;",directive);
    }
    test_visitLibraryIdentifier_multiple() : void {
        this._assertSource("a.b.c",AstTestFactory.libraryIdentifier(new core.DartList.literal(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"),AstTestFactory.identifier3("c"))));
    }
    test_visitLibraryIdentifier_single() : void {
        this._assertSource("a",AstTestFactory.libraryIdentifier(new core.DartList.literal(AstTestFactory.identifier3("a"))));
    }
    test_visitListLiteral_const() : void {
        this._assertSource("const []",AstTestFactory.listLiteral2(Keyword.CONST,null));
    }
    test_visitListLiteral_empty() : void {
        this._assertSource("[]",AstTestFactory.listLiteral());
    }
    test_visitListLiteral_nonEmpty() : void {
        this._assertSource("[a, b, c]",AstTestFactory.listLiteral(new core.DartList.literal(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"),AstTestFactory.identifier3("c"))));
    }
    test_visitMapLiteral_const() : void {
        this._assertSource("const {}",AstTestFactory.mapLiteral(Keyword.CONST,null));
    }
    test_visitMapLiteral_empty() : void {
        this._assertSource("{}",AstTestFactory.mapLiteral2());
    }
    test_visitMapLiteral_nonEmpty() : void {
        this._assertSource("{'a' : a, 'b' : b, 'c' : c}",AstTestFactory.mapLiteral2(new core.DartList.literal(AstTestFactory.mapLiteralEntry("a",AstTestFactory.identifier3("a")),AstTestFactory.mapLiteralEntry("b",AstTestFactory.identifier3("b")),AstTestFactory.mapLiteralEntry("c",AstTestFactory.identifier3("c")))));
    }
    test_visitMapLiteralEntry() : void {
        this._assertSource("'a' : b",AstTestFactory.mapLiteralEntry("a",AstTestFactory.identifier3("b")));
    }
    test_visitMethodDeclaration_external() : void {
        this._assertSource("external m();",AstTestFactory.methodDeclaration(null,null,null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList()));
    }
    test_visitMethodDeclaration_external_returnType() : void {
        this._assertSource("external T m();",AstTestFactory.methodDeclaration(null,AstTestFactory.typeName4("T"),null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList()));
    }
    test_visitMethodDeclaration_getter() : void {
        this._assertSource("get m {}",AstTestFactory.methodDeclaration2(null,null,Keyword.GET,null,AstTestFactory.identifier3("m"),null,AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_getter_returnType() : void {
        this._assertSource("T get m {}",AstTestFactory.methodDeclaration2(null,AstTestFactory.typeName4("T"),Keyword.GET,null,AstTestFactory.identifier3("m"),null,AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_getter_seturnType() : void {
        this._assertSource("T set m(var v) {}",AstTestFactory.methodDeclaration2(null,AstTestFactory.typeName4("T"),Keyword.SET,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter(Keyword.VAR,"v"))),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_minimal() : void {
        this._assertSource("m() {}",AstTestFactory.methodDeclaration2(null,null,null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_multipleParameters() : void {
        this._assertSource("m(var a, var b) {}",AstTestFactory.methodDeclaration2(null,null,null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter(Keyword.VAR,"a"),AstTestFactory.simpleFormalParameter(Keyword.VAR,"b"))),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_operator() : void {
        this._assertSource("operator +() {}",AstTestFactory.methodDeclaration2(null,null,null,Keyword.OPERATOR,AstTestFactory.identifier3("+"),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_operator_returnType() : void {
        this._assertSource("T operator +() {}",AstTestFactory.methodDeclaration2(null,AstTestFactory.typeName4("T"),null,Keyword.OPERATOR,AstTestFactory.identifier3("+"),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_returnType() : void {
        this._assertSource("T m() {}",AstTestFactory.methodDeclaration2(null,AstTestFactory.typeName4("T"),null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_setter() : void {
        this._assertSource("set m(var v) {}",AstTestFactory.methodDeclaration2(null,null,Keyword.SET,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter(Keyword.VAR,"v"))),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_static() : void {
        this._assertSource("static m() {}",AstTestFactory.methodDeclaration2(Keyword.STATIC,null,null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_static_returnType() : void {
        this._assertSource("static T m() {}",AstTestFactory.methodDeclaration2(Keyword.STATIC,AstTestFactory.typeName4("T"),null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_typeParameters() : void {
        this._assertSource("m<E>() {}",AstTestFactory.methodDeclaration3(null,null,null,null,AstTestFactory.identifier3("m"),AstTestFactory.typeParameterList(new core.DartList.literal('E')),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
    }
    test_visitMethodDeclaration_withMetadata() : void {
        let declaration : any = AstTestFactory.methodDeclaration2(null,null,null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2());
        declaration.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated m() {}",declaration);
    }
    test_visitMethodInvocation_conditional() : void {
        this._assertSource("t?.m()",AstTestFactory.methodInvocation(AstTestFactory.identifier3("t"),"m",null,TokenType.QUESTION_PERIOD));
    }
    test_visitMethodInvocation_noTarget() : void {
        this._assertSource("m()",AstTestFactory.methodInvocation2("m"));
    }
    test_visitMethodInvocation_target() : void {
        this._assertSource("t.m()",AstTestFactory.methodInvocation(AstTestFactory.identifier3("t"),"m"));
    }
    test_visitMethodInvocation_typeArguments() : void {
        this._assertSource("m<A>()",AstTestFactory.methodInvocation3(null,"m",AstTestFactory.typeArgumentList(new core.DartList.literal(AstTestFactory.typeName4('A')))));
    }
    test_visitNamedExpression() : void {
        this._assertSource("a: b",AstTestFactory.namedExpression2("a",AstTestFactory.identifier3("b")));
    }
    test_visitNamedFormalParameter() : void {
        this._assertSource("var a : 0",AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter(Keyword.VAR,"a"),AstTestFactory.integer(0)));
    }
    test_visitNativeClause() : void {
        this._assertSource("native 'code'",AstTestFactory.nativeClause("code"));
    }
    test_visitNativeFunctionBody() : void {
        this._assertSource("native 'str';",AstTestFactory.nativeFunctionBody("str"));
    }
    test_visitNullLiteral() : void {
        this._assertSource("null",AstTestFactory.nullLiteral());
    }
    test_visitParenthesizedExpression() : void {
        this._assertSource("(a)",AstTestFactory.parenthesizedExpression(AstTestFactory.identifier3("a")));
    }
    test_visitPartDirective() : void {
        this._assertSource("part 'a.dart';",AstTestFactory.partDirective2("a.dart"));
    }
    test_visitPartDirective_withMetadata() : void {
        let directive : any = AstTestFactory.partDirective2("a.dart");
        directive.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated part 'a.dart';",directive);
    }
    test_visitPartOfDirective() : void {
        this._assertSource("part of l;",AstTestFactory.partOfDirective(AstTestFactory.libraryIdentifier2(new core.DartList.literal("l"))));
    }
    test_visitPartOfDirective_withMetadata() : void {
        let directive : any = AstTestFactory.partOfDirective(AstTestFactory.libraryIdentifier2(new core.DartList.literal("l")));
        directive.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated part of l;",directive);
    }
    test_visitPositionalFormalParameter() : void {
        this._assertSource("var a = 0",AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter(Keyword.VAR,"a"),AstTestFactory.integer(0)));
    }
    test_visitPostfixExpression() : void {
        this._assertSource("a++",AstTestFactory.postfixExpression(AstTestFactory.identifier3("a"),TokenType.PLUS_PLUS));
    }
    test_visitPrefixedIdentifier() : void {
        this._assertSource("a.b",AstTestFactory.identifier5("a","b"));
    }
    test_visitPrefixExpression() : void {
        this._assertSource("-a",AstTestFactory.prefixExpression(TokenType.MINUS,AstTestFactory.identifier3("a")));
    }
    test_visitPropertyAccess() : void {
        this._assertSource("a.b",AstTestFactory.propertyAccess2(AstTestFactory.identifier3("a"),"b"));
    }
    test_visitPropertyAccess_conditional() : void {
        this._assertSource("a?.b",AstTestFactory.propertyAccess2(AstTestFactory.identifier3("a"),"b",TokenType.QUESTION_PERIOD));
    }
    test_visitRedirectingConstructorInvocation_named() : void {
        this._assertSource("this.c()",AstTestFactory.redirectingConstructorInvocation2("c"));
    }
    test_visitRedirectingConstructorInvocation_unnamed() : void {
        this._assertSource("this()",AstTestFactory.redirectingConstructorInvocation());
    }
    test_visitRethrowExpression() : void {
        this._assertSource("rethrow",AstTestFactory.rethrowExpression());
    }
    test_visitReturnStatement_expression() : void {
        this._assertSource("return a;",AstTestFactory.returnStatement2(AstTestFactory.identifier3("a")));
    }
    test_visitReturnStatement_noExpression() : void {
        this._assertSource("return;",AstTestFactory.returnStatement());
    }
    test_visitScriptTag() : void {
        let scriptTag : string = "!#/bin/dart.exe";
        this._assertSource(scriptTag,AstTestFactory.scriptTag(scriptTag));
    }
    test_visitSimpleFormalParameter_annotation() : void {
        let parameter : any = AstTestFactory.simpleFormalParameter3('x');
        parameter.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("A")));
        this._assertSource('@A x',parameter);
    }
    test_visitSimpleFormalParameter_keyword() : void {
        this._assertSource("var a",AstTestFactory.simpleFormalParameter(Keyword.VAR,"a"));
    }
    test_visitSimpleFormalParameter_keyword_type() : void {
        this._assertSource("final A a",AstTestFactory.simpleFormalParameter2(Keyword.FINAL,AstTestFactory.typeName4("A"),"a"));
    }
    test_visitSimpleFormalParameter_type() : void {
        this._assertSource("A a",AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName4("A"),"a"));
    }
    test_visitSimpleFormalParameter_type_covariant() : void {
        let expected : any = AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName4("A"),"a");
        expected.covariantKeyword = TokenFactory.tokenFromKeyword(Keyword.COVARIANT);
        this._assertSource("covariant A a",expected);
    }
    test_visitSimpleIdentifier() : void {
        this._assertSource("a",AstTestFactory.identifier3("a"));
    }
    test_visitSimpleStringLiteral() : void {
        this._assertSource("'a'",AstTestFactory.string2("a"));
    }
    test_visitStringInterpolation() : void {
        this._assertSource("'a${e}b'",AstTestFactory.string(new core.DartList.literal(AstTestFactory.interpolationString("'a","a"),AstTestFactory.interpolationExpression(AstTestFactory.identifier3("e")),AstTestFactory.interpolationString("b'","b"))));
    }
    test_visitSuperConstructorInvocation() : void {
        this._assertSource("super()",AstTestFactory.superConstructorInvocation());
    }
    test_visitSuperConstructorInvocation_named() : void {
        this._assertSource("super.c()",AstTestFactory.superConstructorInvocation2("c"));
    }
    test_visitSuperExpression() : void {
        this._assertSource("super",AstTestFactory.superExpression());
    }
    test_visitSwitchCase_multipleLabels() : void {
        this._assertSource("l1: l2: case a: {}",AstTestFactory.switchCase2(new core.DartList.literal(AstTestFactory.label2("l1"),AstTestFactory.label2("l2")),AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.block())));
    }
    test_visitSwitchCase_multipleStatements() : void {
        this._assertSource("case a: {} {}",AstTestFactory.switchCase(AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.block(),AstTestFactory.block())));
    }
    test_visitSwitchCase_noLabels() : void {
        this._assertSource("case a: {}",AstTestFactory.switchCase(AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.block())));
    }
    test_visitSwitchCase_singleLabel() : void {
        this._assertSource("l1: case a: {}",AstTestFactory.switchCase2(new core.DartList.literal(AstTestFactory.label2("l1")),AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.block())));
    }
    test_visitSwitchDefault_multipleLabels() : void {
        this._assertSource("l1: l2: default: {}",AstTestFactory.switchDefault(new core.DartList.literal(AstTestFactory.label2("l1"),AstTestFactory.label2("l2")),new core.DartList.literal(AstTestFactory.block())));
    }
    test_visitSwitchDefault_multipleStatements() : void {
        this._assertSource("default: {} {}",AstTestFactory.switchDefault2(new core.DartList.literal(AstTestFactory.block(),AstTestFactory.block())));
    }
    test_visitSwitchDefault_noLabels() : void {
        this._assertSource("default: {}",AstTestFactory.switchDefault2(new core.DartList.literal(AstTestFactory.block())));
    }
    test_visitSwitchDefault_singleLabel() : void {
        this._assertSource("l1: default: {}",AstTestFactory.switchDefault(new core.DartList.literal(AstTestFactory.label2("l1")),new core.DartList.literal(AstTestFactory.block())));
    }
    test_visitSwitchStatement() : void {
        this._assertSource("switch (a) {case 'b': {} default: {}}",AstTestFactory.switchStatement(AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.switchCase(AstTestFactory.string2("b"),new core.DartList.literal(AstTestFactory.block())),AstTestFactory.switchDefault2(new core.DartList.literal(AstTestFactory.block())))));
    }
    test_visitSymbolLiteral_multiple() : void {
        this._assertSource("#a.b.c",AstTestFactory.symbolLiteral(new core.DartList.literal("a","b","c")));
    }
    test_visitSymbolLiteral_single() : void {
        this._assertSource("#a",AstTestFactory.symbolLiteral(new core.DartList.literal("a")));
    }
    test_visitThisExpression() : void {
        this._assertSource("this",AstTestFactory.thisExpression());
    }
    test_visitThrowStatement() : void {
        this._assertSource("throw e",AstTestFactory.throwExpression2(AstTestFactory.identifier3("e")));
    }
    test_visitTopLevelVariableDeclaration_multiple() : void {
        this._assertSource("var a;",AstTestFactory.topLevelVariableDeclaration2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"))));
    }
    test_visitTopLevelVariableDeclaration_single() : void {
        this._assertSource("var a, b;",AstTestFactory.topLevelVariableDeclaration2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"),AstTestFactory.variableDeclaration("b"))));
    }
    test_visitTryStatement_catch() : void {
        this._assertSource("try {} on E {}",AstTestFactory.tryStatement2(AstTestFactory.block(),new core.DartList.literal(AstTestFactory.catchClause3(AstTestFactory.typeName4("E")))));
    }
    test_visitTryStatement_catches() : void {
        this._assertSource("try {} on E {} on F {}",AstTestFactory.tryStatement2(AstTestFactory.block(),new core.DartList.literal(AstTestFactory.catchClause3(AstTestFactory.typeName4("E")),AstTestFactory.catchClause3(AstTestFactory.typeName4("F")))));
    }
    test_visitTryStatement_catchFinally() : void {
        this._assertSource("try {} on E {} finally {}",AstTestFactory.tryStatement3(AstTestFactory.block(),new core.DartList.literal(AstTestFactory.catchClause3(AstTestFactory.typeName4("E"))),AstTestFactory.block()));
    }
    test_visitTryStatement_finally() : void {
        this._assertSource("try {} finally {}",AstTestFactory.tryStatement(AstTestFactory.block(),AstTestFactory.block()));
    }
    test_visitTypeArgumentList_multiple() : void {
        this._assertSource("<E, F>",AstTestFactory.typeArgumentList(new core.DartList.literal(AstTestFactory.typeName4("E"),AstTestFactory.typeName4("F"))));
    }
    test_visitTypeArgumentList_single() : void {
        this._assertSource("<E>",AstTestFactory.typeArgumentList(new core.DartList.literal(AstTestFactory.typeName4("E"))));
    }
    test_visitTypeName_multipleArgs() : void {
        this._assertSource("C<D, E>",AstTestFactory.typeName4("C",new core.DartList.literal(AstTestFactory.typeName4("D"),AstTestFactory.typeName4("E"))));
    }
    test_visitTypeName_nestedArg() : void {
        this._assertSource("C<D<E>>",AstTestFactory.typeName4("C",new core.DartList.literal(AstTestFactory.typeName4("D",new core.DartList.literal(AstTestFactory.typeName4("E"))))));
    }
    test_visitTypeName_noArgs() : void {
        this._assertSource("C",AstTestFactory.typeName4("C"));
    }
    test_visitTypeName_singleArg() : void {
        this._assertSource("C<D>",AstTestFactory.typeName4("C",new core.DartList.literal(AstTestFactory.typeName4("D"))));
    }
    test_visitTypeParameter_withExtends() : void {
        this._assertSource("E extends C",AstTestFactory.typeParameter2("E",AstTestFactory.typeName4("C")));
    }
    test_visitTypeParameter_withMetadata() : void {
        let parameter : any = AstTestFactory.typeParameter("E");
        parameter.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated E",parameter);
    }
    test_visitTypeParameter_withoutExtends() : void {
        this._assertSource("E",AstTestFactory.typeParameter("E"));
    }
    test_visitTypeParameterList_multiple() : void {
        this._assertSource("<E, F>",AstTestFactory.typeParameterList(new core.DartList.literal("E","F")));
    }
    test_visitTypeParameterList_single() : void {
        this._assertSource("<E>",AstTestFactory.typeParameterList(new core.DartList.literal("E")));
    }
    test_visitVariableDeclaration_initialized() : void {
        this._assertSource("a = b",AstTestFactory.variableDeclaration2("a",AstTestFactory.identifier3("b")));
    }
    test_visitVariableDeclaration_uninitialized() : void {
        this._assertSource("a",AstTestFactory.variableDeclaration("a"));
    }
    test_visitVariableDeclaration_withMetadata() : void {
        let declaration : any = AstTestFactory.variableDeclaration("a");
        declaration.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated a",declaration);
    }
    test_visitVariableDeclarationList_const_type() : void {
        this._assertSource("const C a, b",AstTestFactory.variableDeclarationList(Keyword.CONST,AstTestFactory.typeName4("C"),new core.DartList.literal(AstTestFactory.variableDeclaration("a"),AstTestFactory.variableDeclaration("b"))));
    }
    test_visitVariableDeclarationList_final_noType() : void {
        this._assertSource("final a, b",AstTestFactory.variableDeclarationList2(Keyword.FINAL,new core.DartList.literal(AstTestFactory.variableDeclaration("a"),AstTestFactory.variableDeclaration("b"))));
    }
    test_visitVariableDeclarationList_final_withMetadata() : void {
        let declarationList : any = AstTestFactory.variableDeclarationList2(Keyword.FINAL,new core.DartList.literal(AstTestFactory.variableDeclaration("a"),AstTestFactory.variableDeclaration("b")));
        declarationList.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("deprecated")));
        this._assertSource("@deprecated final a, b",declarationList);
    }
    test_visitVariableDeclarationList_type() : void {
        this._assertSource("C a, b",AstTestFactory.variableDeclarationList(null,AstTestFactory.typeName4("C"),new core.DartList.literal(AstTestFactory.variableDeclaration("a"),AstTestFactory.variableDeclaration("b"))));
    }
    test_visitVariableDeclarationList_var() : void {
        this._assertSource("var a, b",AstTestFactory.variableDeclarationList2(Keyword.VAR,new core.DartList.literal(AstTestFactory.variableDeclaration("a"),AstTestFactory.variableDeclaration("b"))));
    }
    test_visitVariableDeclarationStatement() : void {
        this._assertSource("C c;",AstTestFactory.variableDeclarationStatement(null,AstTestFactory.typeName4("C"),new core.DartList.literal(AstTestFactory.variableDeclaration("c"))));
    }
    test_visitWhileStatement() : void {
        this._assertSource("while (c) {}",AstTestFactory.whileStatement(AstTestFactory.identifier3("c"),AstTestFactory.block()));
    }
    test_visitWithClause_multiple() : void {
        this._assertSource("with A, B, C",AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("A"),AstTestFactory.typeName4("B"),AstTestFactory.typeName4("C"))));
    }
    test_visitWithClause_single() : void {
        this._assertSource("with A",AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("A"))));
    }
    test_visitYieldStatement() : void {
        this._assertSource("yield e;",AstTestFactory.yieldStatement(AstTestFactory.identifier3("e")));
    }
    test_visitYieldStatement_each() : void {
        this._assertSource("yield* e;",AstTestFactory.yieldEachStatement(AstTestFactory.identifier3("e")));
    }
    _assertSource(expectedSource : string,node : any) : void {
        let writer : any = new bare.createInstance(any,null);
        node.accept(new bare.createInstance(any,null,writer));
        expect(writer.toString(),expectedSource);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ToSourceVisitorTest() {
    }
}

export class properties {
}
