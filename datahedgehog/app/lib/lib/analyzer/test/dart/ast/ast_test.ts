/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/dart/ast/ast_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../generated/parser_test";
import * as lib4 from "./../../generated/test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ClassDeclarationTest);
        defineReflectiveTests(ClassTypeAliasTest);
        defineReflectiveTests(ConstructorDeclarationTest);
        defineReflectiveTests(FieldFormalParameterTest);
        defineReflectiveTests(IndexExpressionTest);
        defineReflectiveTests(MethodDeclarationTest);
        defineReflectiveTests(NodeListTest);
        defineReflectiveTests(SimpleIdentifierTest);
        defineReflectiveTests(SimpleStringLiteralTest);
        defineReflectiveTests(StringInterpolationTest);
        defineReflectiveTests(VariableDeclarationTest);
    });
};
export namespace ClassDeclarationTest {
    export type Constructors = lib3.ParserTestCase.Constructors | 'ClassDeclarationTest';
    export type Interface = Omit<ClassDeclarationTest, Constructors>;
}
@DartClass
export class ClassDeclarationTest extends lib3.ParserTestCase {
    test_getConstructor() : void {
        let initializers : core.DartList<any> = new core.DartList<any>();
        let defaultConstructor : any = AstTestFactory.constructorDeclaration(AstTestFactory.identifier3("Test"),null,AstTestFactory.formalParameterList(),initializers);
        let aConstructor : any = AstTestFactory.constructorDeclaration(AstTestFactory.identifier3("Test"),"a",AstTestFactory.formalParameterList(),initializers);
        let bConstructor : any = AstTestFactory.constructorDeclaration(AstTestFactory.identifier3("Test"),"b",AstTestFactory.formalParameterList(),initializers);
        let clazz : any = AstTestFactory.classDeclaration(null,"Test",null,null,null,null,new core.DartList.literal(defaultConstructor,aConstructor,bConstructor));
        expect(clazz.getConstructor(null),same(defaultConstructor));
        expect(clazz.getConstructor("a"),same(aConstructor));
        expect(clazz.getConstructor("b"),same(bConstructor));
        expect(clazz.getConstructor("noSuchConstructor"),same(null));
    }
    test_getField() : void {
        let aVar : any = AstTestFactory.variableDeclaration("a");
        let bVar : any = AstTestFactory.variableDeclaration("b");
        let cVar : any = AstTestFactory.variableDeclaration("c");
        let clazz : any = AstTestFactory.classDeclaration(null,"Test",null,null,null,null,new core.DartList.literal(AstTestFactory.fieldDeclaration2(false,null,new core.DartList.literal(aVar)),AstTestFactory.fieldDeclaration2(false,null,new core.DartList.literal(bVar,cVar))));
        expect(clazz.getField("a"),same(aVar));
        expect(clazz.getField("b"),same(bVar));
        expect(clazz.getField("c"),same(cVar));
        expect(clazz.getField("noSuchField"),same(null));
    }
    test_getMethod() : void {
        let aMethod : any = AstTestFactory.methodDeclaration(null,null,null,null,AstTestFactory.identifier3("a"),AstTestFactory.formalParameterList());
        let bMethod : any = AstTestFactory.methodDeclaration(null,null,null,null,AstTestFactory.identifier3("b"),AstTestFactory.formalParameterList());
        let clazz : any = AstTestFactory.classDeclaration(null,"Test",null,null,null,null,new core.DartList.literal(aMethod,bMethod));
        expect(clazz.getMethod("a"),same(aMethod));
        expect(clazz.getMethod("b"),same(bMethod));
        expect(clazz.getMethod("noSuchMethod"),same(null));
    }
    test_isAbstract() : void {
        expect(AstTestFactory.classDeclaration(null,"A",null,null,null,null).isAbstract,isFalse);
        expect(AstTestFactory.classDeclaration(Keyword.ABSTRACT,"B",null,null,null,null).isAbstract,isTrue);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassDeclarationTest() {
    }
}

export namespace ClassTypeAliasTest {
    export type Constructors = lib3.ParserTestCase.Constructors | 'ClassTypeAliasTest';
    export type Interface = Omit<ClassTypeAliasTest, Constructors>;
}
@DartClass
export class ClassTypeAliasTest extends lib3.ParserTestCase {
    test_isAbstract() : void {
        expect(AstTestFactory.classTypeAlias("A",null,null,null,null,null).isAbstract,isFalse);
        expect(AstTestFactory.classTypeAlias("B",null,Keyword.ABSTRACT,null,null,null).isAbstract,isTrue);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassTypeAliasTest() {
    }
}

export namespace ConstructorDeclarationTest {
    export type Constructors = lib4.EngineTestCase.Constructors | 'ConstructorDeclarationTest';
    export type Interface = Omit<ConstructorDeclarationTest, Constructors>;
}
@DartClass
export class ConstructorDeclarationTest extends lib4.EngineTestCase {
    test_firstTokenAfterCommentAndMetadata_all_inverted() : void {
        let externalKeyword : any = TokenFactory.tokenFromKeyword(Keyword.EXTERNAL);
        externalKeyword.offset = 14;
        let declaration : any = AstTestFactory.constructorDeclaration2(Keyword.CONST,Keyword.FACTORY,AstTestFactory.identifier3('int'),null,null,null,null);
        declaration.externalKeyword = externalKeyword;
        declaration.constKeyword.offset = 8;
        let factoryKeyword : any = declaration.factoryKeyword;
        factoryKeyword.offset = 0;
        expect(declaration.firstTokenAfterCommentAndMetadata,factoryKeyword);
    }
    test_firstTokenAfterCommentAndMetadata_all_normal() : void {
        let token : any = TokenFactory.tokenFromKeyword(Keyword.EXTERNAL);
        token.offset = 0;
        let declaration : any = AstTestFactory.constructorDeclaration2(Keyword.CONST,Keyword.FACTORY,AstTestFactory.identifier3('int'),null,null,null,null);
        declaration.externalKeyword = token;
        declaration.constKeyword.offset = 9;
        declaration.factoryKeyword.offset = 15;
        expect(declaration.firstTokenAfterCommentAndMetadata,token);
    }
    test_firstTokenAfterCommentAndMetadata_constOnly() : void {
        let declaration : any = AstTestFactory.constructorDeclaration2(Keyword.CONST,null,AstTestFactory.identifier3('int'),null,null,null,null);
        expect(declaration.firstTokenAfterCommentAndMetadata,declaration.constKeyword);
    }
    test_firstTokenAfterCommentAndMetadata_externalOnly() : void {
        let externalKeyword : any = TokenFactory.tokenFromKeyword(Keyword.EXTERNAL);
        let declaration : any = AstTestFactory.constructorDeclaration2(null,null,AstTestFactory.identifier3('int'),null,null,null,null);
        declaration.externalKeyword = externalKeyword;
        expect(declaration.firstTokenAfterCommentAndMetadata,externalKeyword);
    }
    test_firstTokenAfterCommentAndMetadata_factoryOnly() : void {
        let declaration : any = AstTestFactory.constructorDeclaration2(null,Keyword.FACTORY,AstTestFactory.identifier3('int'),null,null,null,null);
        expect(declaration.firstTokenAfterCommentAndMetadata,declaration.factoryKeyword);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorDeclarationTest() {
    }
}

export namespace FieldFormalParameterTest {
    export type Constructors = lib4.EngineTestCase.Constructors | 'FieldFormalParameterTest';
    export type Interface = Omit<FieldFormalParameterTest, Constructors>;
}
@DartClass
export class FieldFormalParameterTest extends lib4.EngineTestCase {
    test_endToken_noParameters() : void {
        let parameter : any = AstTestFactory.fieldFormalParameter2('field');
        expect(parameter.endToken,parameter.identifier.endToken);
    }
    test_endToken_parameters() : void {
        let parameter : any = AstTestFactory.fieldFormalParameter(null,null,'field',AstTestFactory.formalParameterList(new core.DartList.literal()));
        expect(parameter.endToken,parameter.parameters.endToken);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldFormalParameterTest() {
    }
}

export namespace IndexExpressionTest {
    export type Constructors = lib4.EngineTestCase.Constructors | 'IndexExpressionTest';
    export type Interface = Omit<IndexExpressionTest, Constructors>;
}
@DartClass
export class IndexExpressionTest extends lib4.EngineTestCase {
    test_inGetterContext_assignment_compound_left() : void {
        let expression : any = AstTestFactory.indexExpression(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"));
        AstTestFactory.assignmentExpression(expression,TokenType.PLUS_EQ,AstTestFactory.identifier3("c"));
        expect(expression.inGetterContext(),isTrue);
    }
    test_inGetterContext_assignment_simple_left() : void {
        let expression : any = AstTestFactory.indexExpression(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"));
        AstTestFactory.assignmentExpression(expression,TokenType.EQ,AstTestFactory.identifier3("c"));
        expect(expression.inGetterContext(),isFalse);
    }
    test_inGetterContext_nonAssignment() : void {
        let expression : any = AstTestFactory.indexExpression(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"));
        AstTestFactory.binaryExpression(expression,TokenType.PLUS,AstTestFactory.identifier3("c"));
        expect(expression.inGetterContext(),isTrue);
    }
    test_inSetterContext_assignment_compound_left() : void {
        let expression : any = AstTestFactory.indexExpression(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"));
        AstTestFactory.assignmentExpression(expression,TokenType.PLUS_EQ,AstTestFactory.identifier3("c"));
        expect(expression.inSetterContext(),isTrue);
    }
    test_inSetterContext_assignment_compound_right() : void {
        let expression : any = AstTestFactory.indexExpression(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"));
        AstTestFactory.assignmentExpression(AstTestFactory.identifier3("c"),TokenType.PLUS_EQ,expression);
        expect(expression.inSetterContext(),isFalse);
    }
    test_inSetterContext_assignment_simple_left() : void {
        let expression : any = AstTestFactory.indexExpression(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"));
        AstTestFactory.assignmentExpression(expression,TokenType.EQ,AstTestFactory.identifier3("c"));
        expect(expression.inSetterContext(),isTrue);
    }
    test_inSetterContext_assignment_simple_right() : void {
        let expression : any = AstTestFactory.indexExpression(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"));
        AstTestFactory.assignmentExpression(AstTestFactory.identifier3("c"),TokenType.EQ,expression);
        expect(expression.inSetterContext(),isFalse);
    }
    test_inSetterContext_nonAssignment() : void {
        let expression : any = AstTestFactory.indexExpression(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"));
        AstTestFactory.binaryExpression(expression,TokenType.PLUS,AstTestFactory.identifier3("c"));
        expect(expression.inSetterContext(),isFalse);
    }
    test_inSetterContext_postfix() : void {
        let expression : any = AstTestFactory.indexExpression(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"));
        AstTestFactory.postfixExpression(expression,TokenType.PLUS_PLUS);
        expect(expression.inSetterContext(),isTrue);
    }
    test_inSetterContext_prefix_bang() : void {
        let expression : any = AstTestFactory.indexExpression(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"));
        AstTestFactory.prefixExpression(TokenType.BANG,expression);
        expect(expression.inSetterContext(),isFalse);
    }
    test_inSetterContext_prefix_minusMinus() : void {
        let expression : any = AstTestFactory.indexExpression(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"));
        AstTestFactory.prefixExpression(TokenType.MINUS_MINUS,expression);
        expect(expression.inSetterContext(),isTrue);
    }
    test_inSetterContext_prefix_plusPlus() : void {
        let expression : any = AstTestFactory.indexExpression(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("b"));
        AstTestFactory.prefixExpression(TokenType.PLUS_PLUS,expression);
        expect(expression.inSetterContext(),isTrue);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IndexExpressionTest() {
    }
}

export namespace MethodDeclarationTest {
    export type Constructors = lib4.EngineTestCase.Constructors | 'MethodDeclarationTest';
    export type Interface = Omit<MethodDeclarationTest, Constructors>;
}
@DartClass
export class MethodDeclarationTest extends lib4.EngineTestCase {
    test_firstTokenAfterCommentAndMetadata_external() : void {
        let declaration : any = AstTestFactory.methodDeclaration4({
            external : true,name : 'm'});
        expect(declaration.firstTokenAfterCommentAndMetadata,declaration.externalKeyword);
    }
    test_firstTokenAfterCommentAndMetadata_external_getter() : void {
        let declaration : any = AstTestFactory.methodDeclaration4({
            external : true,property : Keyword.GET,name : 'm'});
        expect(declaration.firstTokenAfterCommentAndMetadata,declaration.externalKeyword);
    }
    test_firstTokenAfterCommentAndMetadata_external_operator() : void {
        let declaration : any = AstTestFactory.methodDeclaration4({
            external : true,operator : true,name : 'm'});
        expect(declaration.firstTokenAfterCommentAndMetadata,declaration.externalKeyword);
    }
    test_firstTokenAfterCommentAndMetadata_getter() : void {
        let declaration : any = AstTestFactory.methodDeclaration4({
            property : Keyword.GET,name : 'm'});
        expect(declaration.firstTokenAfterCommentAndMetadata,declaration.propertyKeyword);
    }
    test_firstTokenAfterCommentAndMetadata_operator() : void {
        let declaration : any = AstTestFactory.methodDeclaration4({
            operator : true,name : 'm'});
        expect(declaration.firstTokenAfterCommentAndMetadata,declaration.operatorKeyword);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MethodDeclarationTest() {
    }
}

export namespace NodeListTest {
    export type Constructors = lib4.EngineTestCase.Constructors | 'NodeListTest';
    export type Interface = Omit<NodeListTest, Constructors>;
}
@DartClass
export class NodeListTest extends lib4.EngineTestCase {
    test_add() : void {
        let parent : any = AstTestFactory.argumentList();
        let firstNode : any = AstTestFactory.booleanLiteral(true);
        let secondNode : any = AstTestFactory.booleanLiteral(false);
        let list : any = astFactory.nodeList(parent);
        list.insert(0,secondNode);
        list.insert(0,firstNode);
        expect(list,hasLength(2));
        expect(op(Op.INDEX,list,0),same(firstNode));
        expect(op(Op.INDEX,list,1),same(secondNode));
        expect(firstNode.parent,same(parent));
        expect(secondNode.parent,same(parent));
        let thirdNode : any = AstTestFactory.booleanLiteral(false);
        list.insert(1,thirdNode);
        expect(list,hasLength(3));
        expect(op(Op.INDEX,list,0),same(firstNode));
        expect(op(Op.INDEX,list,1),same(thirdNode));
        expect(op(Op.INDEX,list,2),same(secondNode));
        expect(firstNode.parent,same(parent));
        expect(secondNode.parent,same(parent));
        expect(thirdNode.parent,same(parent));
    }
    test_add_negative() : void {
        let list : any = astFactory.nodeList(AstTestFactory.argumentList());
        try {
            list.insert(-1,AstTestFactory.booleanLiteral(true));
            fail("Expected IndexOutOfBoundsException");
        } catch (__error__) {

            if (is(__error__,core.RangeError)){
            }
        }
    }
    test_add_tooBig() : void {
        let list : any = astFactory.nodeList(AstTestFactory.argumentList());
        try {
            list.insert(1,AstTestFactory.booleanLiteral(true));
            fail("Expected IndexOutOfBoundsException");
        } catch (__error__) {

            if (is(__error__,core.RangeError)){
            }
        }
    }
    test_addAll() : void {
        let parent : any = AstTestFactory.argumentList();
        let firstNodes : core.DartList<any> = new core.DartList<any>();
        let firstNode : any = AstTestFactory.booleanLiteral(true);
        let secondNode : any = AstTestFactory.booleanLiteral(false);
        firstNodes.add(firstNode);
        firstNodes.add(secondNode);
        let list : any = astFactory.nodeList(parent);
        list.addAll(firstNodes);
        expect(list,hasLength(2));
        expect(op(Op.INDEX,list,0),same(firstNode));
        expect(op(Op.INDEX,list,1),same(secondNode));
        expect(firstNode.parent,same(parent));
        expect(secondNode.parent,same(parent));
        let secondNodes : core.DartList<any> = new core.DartList<any>();
        let thirdNode : any = AstTestFactory.booleanLiteral(true);
        let fourthNode : any = AstTestFactory.booleanLiteral(false);
        secondNodes.add(thirdNode);
        secondNodes.add(fourthNode);
        list.addAll(secondNodes);
        expect(list,hasLength(4));
        expect(op(Op.INDEX,list,0),same(firstNode));
        expect(op(Op.INDEX,list,1),same(secondNode));
        expect(op(Op.INDEX,list,2),same(thirdNode));
        expect(op(Op.INDEX,list,3),same(fourthNode));
        expect(firstNode.parent,same(parent));
        expect(secondNode.parent,same(parent));
        expect(thirdNode.parent,same(parent));
        expect(fourthNode.parent,same(parent));
    }
    test_creation() : void {
        let owner : any = AstTestFactory.argumentList();
        let list : any = astFactory.nodeList(owner);
        expect(list,isNotNull);
        expect(list,hasLength(0));
        expect(list.owner,same(owner));
    }
    test_get_negative() : void {
        let list : any = astFactory.nodeList(AstTestFactory.argumentList());
        try {
            op(Op.INDEX,list,-1);
            fail("Expected IndexOutOfBoundsException");
        } catch (__error__) {

            if (is(__error__,core.RangeError)){
            }
        }
    }
    test_get_tooBig() : void {
        let list : any = astFactory.nodeList(AstTestFactory.argumentList());
        try {
            op(Op.INDEX,list,1);
            fail("Expected IndexOutOfBoundsException");
        } catch (__error__) {

            if (is(__error__,core.RangeError)){
            }
        }
    }
    test_getBeginToken_empty() : void {
        let list : any = astFactory.nodeList(AstTestFactory.argumentList());
        expect(list.beginToken,isNull);
    }
    test_getBeginToken_nonEmpty() : void {
        let list : any = astFactory.nodeList(AstTestFactory.argumentList());
        let node : any = AstTestFactory.parenthesizedExpression(AstTestFactory.booleanLiteral(true));
        list.add(node);
        expect(list.beginToken,same(node.beginToken));
    }
    test_getEndToken_empty() : void {
        let list : any = astFactory.nodeList(AstTestFactory.argumentList());
        expect(list.endToken,isNull);
    }
    test_getEndToken_nonEmpty() : void {
        let list : any = astFactory.nodeList(AstTestFactory.argumentList());
        let node : any = AstTestFactory.parenthesizedExpression(AstTestFactory.booleanLiteral(true));
        list.add(node);
        expect(list.endToken,same(node.endToken));
    }
    test_indexOf() : void {
        let nodes : core.DartList<any> = new core.DartList<any>();
        let firstNode : any = AstTestFactory.booleanLiteral(true);
        let secondNode : any = AstTestFactory.booleanLiteral(false);
        let thirdNode : any = AstTestFactory.booleanLiteral(true);
        let fourthNode : any = AstTestFactory.booleanLiteral(false);
        nodes.add(firstNode);
        nodes.add(secondNode);
        nodes.add(thirdNode);
        let list : any = astFactory.nodeList(AstTestFactory.argumentList());
        list.addAll(nodes);
        expect(list,hasLength(3));
        expect(list.indexOf(firstNode),0);
        expect(list.indexOf(secondNode),1);
        expect(list.indexOf(thirdNode),2);
        expect(list.indexOf(fourthNode),-1);
        expect(list.indexOf(null),-1);
    }
    test_remove() : void {
        let nodes : core.DartList<any> = new core.DartList<any>();
        let firstNode : any = AstTestFactory.booleanLiteral(true);
        let secondNode : any = AstTestFactory.booleanLiteral(false);
        let thirdNode : any = AstTestFactory.booleanLiteral(true);
        nodes.add(firstNode);
        nodes.add(secondNode);
        nodes.add(thirdNode);
        let list : any = astFactory.nodeList(AstTestFactory.argumentList());
        list.addAll(nodes);
        expect(list,hasLength(3));
        expect(list.removeAt(1),same(secondNode));
        expect(list,hasLength(2));
        expect(op(Op.INDEX,list,0),same(firstNode));
        expect(op(Op.INDEX,list,1),same(thirdNode));
    }
    test_remove_negative() : void {
        let list : any = astFactory.nodeList(AstTestFactory.argumentList());
        try {
            list.removeAt(-1);
            fail("Expected IndexOutOfBoundsException");
        } catch (__error__) {

            if (is(__error__,core.RangeError)){
            }
        }
    }
    test_remove_tooBig() : void {
        let list : any = astFactory.nodeList(AstTestFactory.argumentList());
        try {
            list.removeAt(1);
            fail("Expected IndexOutOfBoundsException");
        } catch (__error__) {

            if (is(__error__,core.RangeError)){
            }
        }
    }
    test_set() : void {
        let nodes : core.DartList<any> = new core.DartList<any>();
        let firstNode : any = AstTestFactory.booleanLiteral(true);
        let secondNode : any = AstTestFactory.booleanLiteral(false);
        let thirdNode : any = AstTestFactory.booleanLiteral(true);
        nodes.add(firstNode);
        nodes.add(secondNode);
        nodes.add(thirdNode);
        let list : any = astFactory.nodeList(AstTestFactory.argumentList());
        list.addAll(nodes);
        expect(list,hasLength(3));
        let fourthNode : any = AstTestFactory.integer(0);
        op(Op.INDEX_ASSIGN,list,1,fourthNode);
        expect(list,hasLength(3));
        expect(op(Op.INDEX,list,0),same(firstNode));
        expect(op(Op.INDEX,list,1),same(fourthNode));
        expect(op(Op.INDEX,list,2),same(thirdNode));
    }
    test_set_negative() : void {
        let node : any = AstTestFactory.booleanLiteral(true);
        let list : any = astFactory.nodeList(AstTestFactory.argumentList());
        try {
            op(Op.INDEX_ASSIGN,list,-1,node);
            fail("Expected IndexOutOfBoundsException");
        } catch (__error__) {

            if (is(__error__,core.RangeError)){
            }
        }
    }
    test_set_tooBig() : void {
        let node : any = AstTestFactory.booleanLiteral(true);
        let list : any = astFactory.nodeList(AstTestFactory.argumentList());
        try {
            op(Op.INDEX_ASSIGN,list,1,node);
            fail("Expected IndexOutOfBoundsException");
        } catch (__error__) {

            if (is(__error__,core.RangeError)){
            }
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NodeListTest() {
    }
}

export namespace SimpleIdentifierTest {
    export type Constructors = lib3.ParserTestCase.Constructors | 'SimpleIdentifierTest';
    export type Interface = Omit<SimpleIdentifierTest, Constructors>;
}
@DartClass
export class SimpleIdentifierTest extends lib3.ParserTestCase {
    test_inGetterContext() : void {
        for(let wrapper of _WrapperKind.values) {
            for(let assignment of _AssignmentKind.values) {
                let identifier : any = this._createIdentifier(wrapper,assignment);
                if (op(Op.EQUALS,assignment,_AssignmentKind.SIMPLE_LEFT) && wrapper != _WrapperKind.PREFIXED_LEFT && wrapper != _WrapperKind.PROPERTY_LEFT) {
                    if (identifier.inGetterContext()) {
                        fail(`Expected ${this._topMostNode(identifier).toSource()} to be false`);
                    }
                }else {
                    if (!identifier.inGetterContext()) {
                        fail(`Expected ${this._topMostNode(identifier).toSource()} to be true`);
                    }
                }
            }
        }
    }
    test_inGetterContext_constructorFieldInitializer() : void {
        let initializer : any = AstTestFactory.constructorFieldInitializer(false,'f',AstTestFactory.integer(0));
        let identifier : any = initializer.fieldName;
        expect(identifier.inGetterContext(),isFalse);
    }
    test_inGetterContext_fieldFormalParameter() : void {
        let parameter : any = AstTestFactory.fieldFormalParameter2('test');
        let identifier : any = parameter.identifier;
        expect(identifier.inGetterContext(),isFalse);
    }
    test_inGetterContext_forEachLoop() : void {
        let identifier : any = AstTestFactory.identifier3("a");
        let iterator : any = AstTestFactory.listLiteral();
        let body : any = AstTestFactory.block();
        AstTestFactory.forEachStatement2(identifier,iterator,body);
        expect(identifier.inGetterContext(),isFalse);
    }
    test_inGetterContext_variableDeclaration() : void {
        let variable : any = AstTestFactory.variableDeclaration('test');
        let identifier : any = variable.name;
        expect(identifier.inGetterContext(),isFalse);
    }
    test_inReferenceContext() : void {
        let identifier : any = AstTestFactory.identifier3("id");
        AstTestFactory.namedExpression(AstTestFactory.label(identifier),AstTestFactory.identifier3("_"));
        expect(identifier.inGetterContext(),isFalse);
        expect(identifier.inSetterContext(),isFalse);
    }
    test_inSetterContext() : void {
        for(let wrapper of _WrapperKind.values) {
            for(let assignment of _AssignmentKind.values) {
                let identifier : any = this._createIdentifier(wrapper,assignment);
                if (op(Op.EQUALS,wrapper,_WrapperKind.PREFIXED_LEFT) || op(Op.EQUALS,wrapper,_WrapperKind.PROPERTY_LEFT) || op(Op.EQUALS,assignment,_AssignmentKind.BINARY) || op(Op.EQUALS,assignment,_AssignmentKind.COMPOUND_RIGHT) || op(Op.EQUALS,assignment,_AssignmentKind.PREFIX_NOT) || op(Op.EQUALS,assignment,_AssignmentKind.SIMPLE_RIGHT) || op(Op.EQUALS,assignment,_AssignmentKind.NONE)) {
                    if (identifier.inSetterContext()) {
                        fail(`Expected ${this._topMostNode(identifier).toSource()} to be false`);
                    }
                }else {
                    if (!identifier.inSetterContext()) {
                        fail(`Expected ${this._topMostNode(identifier).toSource()} to be true`);
                    }
                }
            }
        }
    }
    test_inSetterContext_forEachLoop() : void {
        let identifier : any = AstTestFactory.identifier3("a");
        let iterator : any = AstTestFactory.listLiteral();
        let body : any = AstTestFactory.block();
        AstTestFactory.forEachStatement2(identifier,iterator,body);
        expect(identifier.inSetterContext(),isTrue);
    }
    test_isQualified_inMethodInvocation_noTarget() : void {
        let invocation : any = AstTestFactory.methodInvocation2("test",new core.DartList.literal(AstTestFactory.identifier3("arg0")));
        let identifier : any = invocation.methodName;
        expect(identifier.isQualified,isFalse);
    }
    test_isQualified_inMethodInvocation_withTarget() : void {
        let invocation : any = AstTestFactory.methodInvocation(AstTestFactory.identifier3("target"),"test",new core.DartList.literal(AstTestFactory.identifier3("arg0")));
        let identifier : any = invocation.methodName;
        expect(identifier.isQualified,isTrue);
    }
    test_isQualified_inPrefixedIdentifier_name() : void {
        let identifier : any = AstTestFactory.identifier3("test");
        AstTestFactory.identifier4("prefix",identifier);
        expect(identifier.isQualified,isTrue);
    }
    test_isQualified_inPrefixedIdentifier_prefix() : void {
        let identifier : any = AstTestFactory.identifier3("test");
        AstTestFactory.identifier(identifier,AstTestFactory.identifier3("name"));
        expect(identifier.isQualified,isFalse);
    }
    test_isQualified_inPropertyAccess_name() : void {
        let identifier : any = AstTestFactory.identifier3("test");
        AstTestFactory.propertyAccess(AstTestFactory.identifier3("target"),identifier);
        expect(identifier.isQualified,isTrue);
    }
    test_isQualified_inPropertyAccess_target() : void {
        let identifier : any = AstTestFactory.identifier3("test");
        AstTestFactory.propertyAccess(identifier,AstTestFactory.identifier3("name"));
        expect(identifier.isQualified,isFalse);
    }
    test_isQualified_inReturnStatement() : void {
        let identifier : any = AstTestFactory.identifier3("test");
        AstTestFactory.returnStatement2(identifier);
        expect(identifier.isQualified,isFalse);
    }
    _createIdentifier(wrapper : _WrapperKind,assignment : _AssignmentKind) : any {
        let identifier : any = AstTestFactory.identifier3("a");
        let expression : any = identifier;
        while (true){
            if (op(Op.EQUALS,wrapper,_WrapperKind.PREFIXED_LEFT)) {
                expression = AstTestFactory.identifier(identifier,AstTestFactory.identifier3("_"));
            }else if (op(Op.EQUALS,wrapper,_WrapperKind.PREFIXED_RIGHT)) {
                expression = AstTestFactory.identifier(AstTestFactory.identifier3("_"),identifier);
            }else if (op(Op.EQUALS,wrapper,_WrapperKind.PROPERTY_LEFT)) {
                expression = AstTestFactory.propertyAccess2(expression,"_");
            }else if (op(Op.EQUALS,wrapper,_WrapperKind.PROPERTY_RIGHT)) {
                expression = AstTestFactory.propertyAccess(AstTestFactory.identifier3("_"),identifier);
            }else if (op(Op.EQUALS,wrapper,_WrapperKind.NONE)) {
            }
            break;
        }
        while (true){
            if (op(Op.EQUALS,assignment,_AssignmentKind.BINARY)) {
                AstTestFactory.binaryExpression(expression,TokenType.PLUS,AstTestFactory.identifier3("_"));
            }else if (op(Op.EQUALS,assignment,_AssignmentKind.COMPOUND_LEFT)) {
                AstTestFactory.assignmentExpression(expression,TokenType.PLUS_EQ,AstTestFactory.identifier3("_"));
            }else if (op(Op.EQUALS,assignment,_AssignmentKind.COMPOUND_RIGHT)) {
                AstTestFactory.assignmentExpression(AstTestFactory.identifier3("_"),TokenType.PLUS_EQ,expression);
            }else if (op(Op.EQUALS,assignment,_AssignmentKind.POSTFIX_INC)) {
                AstTestFactory.postfixExpression(expression,TokenType.PLUS_PLUS);
            }else if (op(Op.EQUALS,assignment,_AssignmentKind.PREFIX_DEC)) {
                AstTestFactory.prefixExpression(TokenType.MINUS_MINUS,expression);
            }else if (op(Op.EQUALS,assignment,_AssignmentKind.PREFIX_INC)) {
                AstTestFactory.prefixExpression(TokenType.PLUS_PLUS,expression);
            }else if (op(Op.EQUALS,assignment,_AssignmentKind.PREFIX_NOT)) {
                AstTestFactory.prefixExpression(TokenType.BANG,expression);
            }else if (op(Op.EQUALS,assignment,_AssignmentKind.SIMPLE_LEFT)) {
                AstTestFactory.assignmentExpression(expression,TokenType.EQ,AstTestFactory.identifier3("_"));
            }else if (op(Op.EQUALS,assignment,_AssignmentKind.SIMPLE_RIGHT)) {
                AstTestFactory.assignmentExpression(AstTestFactory.identifier3("_"),TokenType.EQ,expression);
            }else if (op(Op.EQUALS,assignment,_AssignmentKind.NONE)) {
            }
            break;
        }
        return identifier;
    }
    _topMostNode(identifier : any) : any {
        let child : any = identifier;
        let parent : any = identifier.parent;
        while (parent != null){
            child = parent;
            parent = parent.parent;
        }
        return child;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SimpleIdentifierTest() {
    }
}

export namespace SimpleStringLiteralTest {
    export type Constructors = lib3.ParserTestCase.Constructors | 'SimpleStringLiteralTest';
    export type Interface = Omit<SimpleStringLiteralTest, Constructors>;
}
@DartClass
export class SimpleStringLiteralTest extends lib3.ParserTestCase {
    test_contentsEnd() : void {
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("'X'"),"X").contentsEnd,2);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString('"X"'),"X").contentsEnd,2);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString('"""X"""'),"X").contentsEnd,4);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("'''X'''"),"X").contentsEnd,4);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("'''  \nX'''"),"X").contentsEnd,7);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("r'X'"),"X").contentsEnd,3);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString('r"X"'),"X").contentsEnd,3);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString('r"""X"""'),"X").contentsEnd,5);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("r'''X'''"),"X").contentsEnd,5);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("r'''  \nX'''"),"X").contentsEnd,8);
    }
    test_contentsOffset() : void {
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("'X'"),"X").contentsOffset,1);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("\"X\""),"X").contentsOffset,1);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("\"\"\"X\"\"\""),"X").contentsOffset,3);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("'''X'''"),"X").contentsOffset,3);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("r'X'"),"X").contentsOffset,2);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("r\"X\""),"X").contentsOffset,2);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("r\"\"\"X\"\"\""),"X").contentsOffset,4);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("r'''X'''"),"X").contentsOffset,4);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("'''  \nX''"),"X").contentsOffset,6);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString('r"""  \nX"""'),"X").contentsOffset,7);
    }
    test_isMultiline() : void {
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("'X'"),"X").isMultiline,isFalse);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("r'X'"),"X").isMultiline,isFalse);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("\"X\""),"X").isMultiline,isFalse);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("r\"X\""),"X").isMultiline,isFalse);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("'''X'''"),"X").isMultiline,isTrue);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("r'''X'''"),"X").isMultiline,isTrue);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("\"\"\"X\"\"\""),"X").isMultiline,isTrue);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("r\"\"\"X\"\"\""),"X").isMultiline,isTrue);
    }
    test_isRaw() : void {
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("'X'"),"X").isRaw,isFalse);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("\"X\""),"X").isRaw,isFalse);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("\"\"\"X\"\"\""),"X").isRaw,isFalse);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("'''X'''"),"X").isRaw,isFalse);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("r'X'"),"X").isRaw,isTrue);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("r\"X\""),"X").isRaw,isTrue);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("r\"\"\"X\"\"\""),"X").isRaw,isTrue);
        expect(astFactory.simpleStringLiteral(TokenFactory.tokenFromString("r'''X'''"),"X").isRaw,isTrue);
    }
    test_isSingleQuoted() : void {
        {
            let token = TokenFactory.tokenFromString("'X'");
            let node = astFactory.simpleStringLiteral(token,null);
            expect(node.isSingleQuoted,isTrue);
        }
        {
            let token = TokenFactory.tokenFromString("'''X'''");
            let node = astFactory.simpleStringLiteral(token,null);
            expect(node.isSingleQuoted,isTrue);
        }
        {
            let token = TokenFactory.tokenFromString('"X"');
            let node = astFactory.simpleStringLiteral(token,null);
            expect(node.isSingleQuoted,isFalse);
        }
        {
            let token = TokenFactory.tokenFromString('"""X"""');
            let node = astFactory.simpleStringLiteral(token,null);
            expect(node.isSingleQuoted,isFalse);
        }
    }
    test_isSingleQuoted_raw() : void {
        {
            let token = TokenFactory.tokenFromString("r'X'");
            let node = astFactory.simpleStringLiteral(token,null);
            expect(node.isSingleQuoted,isTrue);
        }
        {
            let token = TokenFactory.tokenFromString("r'''X'''");
            let node = astFactory.simpleStringLiteral(token,null);
            expect(node.isSingleQuoted,isTrue);
        }
        {
            let token = TokenFactory.tokenFromString('r"X"');
            let node = astFactory.simpleStringLiteral(token,null);
            expect(node.isSingleQuoted,isFalse);
        }
        {
            let token = TokenFactory.tokenFromString('r"""X"""');
            let node = astFactory.simpleStringLiteral(token,null);
            expect(node.isSingleQuoted,isFalse);
        }
    }
    test_simple() : void {
        let token : any = TokenFactory.tokenFromString("'value'");
        let stringLiteral : any = astFactory.simpleStringLiteral(token,"value");
        expect(stringLiteral.literal,same(token));
        expect(stringLiteral.beginToken,same(token));
        expect(stringLiteral.endToken,same(token));
        expect(stringLiteral.value,"value");
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SimpleStringLiteralTest() {
    }
}

export namespace StringInterpolationTest {
    export type Constructors = lib3.ParserTestCase.Constructors | 'StringInterpolationTest';
    export type Interface = Omit<StringInterpolationTest, Constructors>;
}
@DartClass
export class StringInterpolationTest extends lib3.ParserTestCase {
    test_contentsOffsetEnd() : void {
        AstTestFactory.interpolationExpression(AstTestFactory.identifier3('bb'));
        {
            let ae = AstTestFactory.interpolationString("'a","a");
            let cToken = new bare.createInstance(any,null,TokenType.STRING,"ccc'",10);
            let cElement = astFactory.interpolationString(cToken,'ccc');
            let node : any = AstTestFactory.string(new core.DartList.literal(ae,ae,cElement));
            expect(node.contentsOffset,1);
            expect(node.contentsEnd,10 + 4 - 1);
        }
        {
            let ae = AstTestFactory.interpolationString("'''a","a");
            let cToken = new bare.createInstance(any,null,TokenType.STRING,"ccc'''",10);
            let cElement = astFactory.interpolationString(cToken,'ccc');
            let node : any = AstTestFactory.string(new core.DartList.literal(ae,ae,cElement));
            expect(node.contentsOffset,3);
            expect(node.contentsEnd,10 + 4 - 1);
        }
        {
            let ae = AstTestFactory.interpolationString('"""a',"a");
            let cToken = new bare.createInstance(any,null,TokenType.STRING,'ccc"""',10);
            let cElement = astFactory.interpolationString(cToken,'ccc');
            let node : any = AstTestFactory.string(new core.DartList.literal(ae,ae,cElement));
            expect(node.contentsOffset,3);
            expect(node.contentsEnd,10 + 4 - 1);
        }
        {
            let ae = AstTestFactory.interpolationString("r'a","a");
            let cToken = new bare.createInstance(any,null,TokenType.STRING,"ccc'",10);
            let cElement = astFactory.interpolationString(cToken,'ccc');
            let node : any = AstTestFactory.string(new core.DartList.literal(ae,ae,cElement));
            expect(node.contentsOffset,2);
            expect(node.contentsEnd,10 + 4 - 1);
        }
        {
            let ae = AstTestFactory.interpolationString("r'''a","a");
            let cToken = new bare.createInstance(any,null,TokenType.STRING,"ccc'''",10);
            let cElement = astFactory.interpolationString(cToken,'ccc');
            let node : any = AstTestFactory.string(new core.DartList.literal(ae,ae,cElement));
            expect(node.contentsOffset,4);
            expect(node.contentsEnd,10 + 4 - 1);
        }
        {
            let ae = AstTestFactory.interpolationString('r"""a',"a");
            let cToken = new bare.createInstance(any,null,TokenType.STRING,'ccc"""',10);
            let cElement = astFactory.interpolationString(cToken,'ccc');
            let node : any = AstTestFactory.string(new core.DartList.literal(ae,ae,cElement));
            expect(node.contentsOffset,4);
            expect(node.contentsEnd,10 + 4 - 1);
        }
    }
    test_isMultiline() : void {
        let b = AstTestFactory.interpolationExpression(AstTestFactory.identifier3('bb'));
        {
            let a = AstTestFactory.interpolationString("'a","a");
            let c = AstTestFactory.interpolationString("ccc'","ccc");
            let node : any = AstTestFactory.string(new core.DartList.literal(a,b,c));
            expect(node.isMultiline,isFalse);
        }
        {
            let a = AstTestFactory.interpolationString("'''a","a");
            let c = AstTestFactory.interpolationString("ccc'''","ccc");
            let node : any = AstTestFactory.string(new core.DartList.literal(a,b,c));
            expect(node.isMultiline,isTrue);
        }
        {
            let a = AstTestFactory.interpolationString('"a',"a");
            let c = AstTestFactory.interpolationString('ccc"',"ccc");
            let node : any = AstTestFactory.string(new core.DartList.literal(a,b,c));
            expect(node.isMultiline,isFalse);
        }
        {
            let a = AstTestFactory.interpolationString('"""a',"a");
            let c = AstTestFactory.interpolationString('ccc"""',"ccc");
            let node : any = AstTestFactory.string(new core.DartList.literal(a,b,c));
            expect(node.isMultiline,isTrue);
        }
    }
    test_isRaw() : void {
        let node : any = AstTestFactory.string();
        expect(node.isRaw,isFalse);
    }
    test_isSingleQuoted() : void {
        let b = AstTestFactory.interpolationExpression(AstTestFactory.identifier3('bb'));
        {
            let a = AstTestFactory.interpolationString('"a',"a");
            let c = AstTestFactory.interpolationString('ccc"',"ccc");
            let node : any = AstTestFactory.string(new core.DartList.literal(a,b,c));
            expect(node.isSingleQuoted,isFalse);
        }
        {
            let a = AstTestFactory.interpolationString('"""a',"a");
            let c = AstTestFactory.interpolationString('ccc"""',"ccc");
            let node : any = AstTestFactory.string(new core.DartList.literal(a,b,c));
            expect(node.isSingleQuoted,isFalse);
        }
        {
            let a = AstTestFactory.interpolationString("'a","a");
            let c = AstTestFactory.interpolationString("ccc'","ccc");
            let node : any = AstTestFactory.string(new core.DartList.literal(a,b,c));
            expect(node.isSingleQuoted,isTrue);
        }
        {
            let a = AstTestFactory.interpolationString("'''a","a");
            let c = AstTestFactory.interpolationString("ccc'''","ccc");
            let node : any = AstTestFactory.string(new core.DartList.literal(a,b,c));
            expect(node.isSingleQuoted,isTrue);
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringInterpolationTest() {
    }
}

export namespace VariableDeclarationTest {
    export type Constructors = lib3.ParserTestCase.Constructors | 'VariableDeclarationTest';
    export type Interface = Omit<VariableDeclarationTest, Constructors>;
}
@DartClass
export class VariableDeclarationTest extends lib3.ParserTestCase {
    test_getDocumentationComment_onGrandParent() : void {
        let varDecl : any = AstTestFactory.variableDeclaration("a");
        let decl : any = AstTestFactory.topLevelVariableDeclaration2(Keyword.VAR,new core.DartList.literal(varDecl));
        let comment : any = astFactory.documentationComment(new core.DartList<any>(0));
        expect(varDecl.documentationComment,isNull);
        decl.documentationComment = comment;
        expect(varDecl.documentationComment,isNotNull);
        expect(decl.documentationComment,isNotNull);
    }
    test_getDocumentationComment_onNode() : void {
        let decl : any = AstTestFactory.variableDeclaration("a");
        let comment : any = astFactory.documentationComment(new core.DartList<any>(0));
        decl.documentationComment = comment;
        expect(decl.documentationComment,isNotNull);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableDeclarationTest() {
    }
}

export namespace _AssignmentKind {
    export type Constructors = '_AssignmentKind';
    export type Interface = Omit<_AssignmentKind, Constructors>;
}
@DartClass
export class _AssignmentKind {
    private static __$BINARY : _AssignmentKind;
    static get BINARY() : _AssignmentKind { 
        if (this.__$BINARY===undefined) {
            this.__$BINARY = new _AssignmentKind('BINARY',0);
        }
        return this.__$BINARY;
    }

    private static __$COMPOUND_LEFT : _AssignmentKind;
    static get COMPOUND_LEFT() : _AssignmentKind { 
        if (this.__$COMPOUND_LEFT===undefined) {
            this.__$COMPOUND_LEFT = new _AssignmentKind('COMPOUND_LEFT',1);
        }
        return this.__$COMPOUND_LEFT;
    }

    private static __$COMPOUND_RIGHT : _AssignmentKind;
    static get COMPOUND_RIGHT() : _AssignmentKind { 
        if (this.__$COMPOUND_RIGHT===undefined) {
            this.__$COMPOUND_RIGHT = new _AssignmentKind('COMPOUND_RIGHT',2);
        }
        return this.__$COMPOUND_RIGHT;
    }

    private static __$POSTFIX_INC : _AssignmentKind;
    static get POSTFIX_INC() : _AssignmentKind { 
        if (this.__$POSTFIX_INC===undefined) {
            this.__$POSTFIX_INC = new _AssignmentKind('POSTFIX_INC',3);
        }
        return this.__$POSTFIX_INC;
    }

    private static __$PREFIX_DEC : _AssignmentKind;
    static get PREFIX_DEC() : _AssignmentKind { 
        if (this.__$PREFIX_DEC===undefined) {
            this.__$PREFIX_DEC = new _AssignmentKind('PREFIX_DEC',4);
        }
        return this.__$PREFIX_DEC;
    }

    private static __$PREFIX_INC : _AssignmentKind;
    static get PREFIX_INC() : _AssignmentKind { 
        if (this.__$PREFIX_INC===undefined) {
            this.__$PREFIX_INC = new _AssignmentKind('PREFIX_INC',5);
        }
        return this.__$PREFIX_INC;
    }

    private static __$PREFIX_NOT : _AssignmentKind;
    static get PREFIX_NOT() : _AssignmentKind { 
        if (this.__$PREFIX_NOT===undefined) {
            this.__$PREFIX_NOT = new _AssignmentKind('PREFIX_NOT',6);
        }
        return this.__$PREFIX_NOT;
    }

    private static __$SIMPLE_LEFT : _AssignmentKind;
    static get SIMPLE_LEFT() : _AssignmentKind { 
        if (this.__$SIMPLE_LEFT===undefined) {
            this.__$SIMPLE_LEFT = new _AssignmentKind('SIMPLE_LEFT',7);
        }
        return this.__$SIMPLE_LEFT;
    }

    private static __$SIMPLE_RIGHT : _AssignmentKind;
    static get SIMPLE_RIGHT() : _AssignmentKind { 
        if (this.__$SIMPLE_RIGHT===undefined) {
            this.__$SIMPLE_RIGHT = new _AssignmentKind('SIMPLE_RIGHT',8);
        }
        return this.__$SIMPLE_RIGHT;
    }

    private static __$NONE : _AssignmentKind;
    static get NONE() : _AssignmentKind { 
        if (this.__$NONE===undefined) {
            this.__$NONE = new _AssignmentKind('NONE',9);
        }
        return this.__$NONE;
    }

    private static __$values : core.DartList<_AssignmentKind>;
    static get values() : core.DartList<_AssignmentKind> { 
        if (this.__$values===undefined) {
            this.__$values = new core.DartList.literal(_AssignmentKind.BINARY,_AssignmentKind.COMPOUND_LEFT,_AssignmentKind.COMPOUND_RIGHT,_AssignmentKind.POSTFIX_INC,_AssignmentKind.PREFIX_DEC,_AssignmentKind.PREFIX_INC,_AssignmentKind.PREFIX_NOT,_AssignmentKind.SIMPLE_LEFT,_AssignmentKind.SIMPLE_RIGHT,_AssignmentKind.NONE);
        }
        return this.__$values;
    }

    name : string;

    ordinal : number;

    constructor(name : string,ordinal : number) {
    }
    @defaultConstructor
    _AssignmentKind(name : string,ordinal : number) {
        this.name = name;
        this.ordinal = ordinal;
    }
    get hashCode() : number {
        return this.ordinal;
    }
    compareTo(other : _AssignmentKind) : number {
        return this.ordinal - other.ordinal;
    }
    toString() : string {
        return this.name;
    }
}

export namespace _WrapperKind {
    export type Constructors = '_WrapperKind';
    export type Interface = Omit<_WrapperKind, Constructors>;
}
@DartClass
export class _WrapperKind {
    private static __$PREFIXED_LEFT : _WrapperKind;
    static get PREFIXED_LEFT() : _WrapperKind { 
        if (this.__$PREFIXED_LEFT===undefined) {
            this.__$PREFIXED_LEFT = new _WrapperKind('PREFIXED_LEFT',0);
        }
        return this.__$PREFIXED_LEFT;
    }

    private static __$PREFIXED_RIGHT : _WrapperKind;
    static get PREFIXED_RIGHT() : _WrapperKind { 
        if (this.__$PREFIXED_RIGHT===undefined) {
            this.__$PREFIXED_RIGHT = new _WrapperKind('PREFIXED_RIGHT',1);
        }
        return this.__$PREFIXED_RIGHT;
    }

    private static __$PROPERTY_LEFT : _WrapperKind;
    static get PROPERTY_LEFT() : _WrapperKind { 
        if (this.__$PROPERTY_LEFT===undefined) {
            this.__$PROPERTY_LEFT = new _WrapperKind('PROPERTY_LEFT',2);
        }
        return this.__$PROPERTY_LEFT;
    }

    private static __$PROPERTY_RIGHT : _WrapperKind;
    static get PROPERTY_RIGHT() : _WrapperKind { 
        if (this.__$PROPERTY_RIGHT===undefined) {
            this.__$PROPERTY_RIGHT = new _WrapperKind('PROPERTY_RIGHT',3);
        }
        return this.__$PROPERTY_RIGHT;
    }

    private static __$NONE : _WrapperKind;
    static get NONE() : _WrapperKind { 
        if (this.__$NONE===undefined) {
            this.__$NONE = new _WrapperKind('NONE',4);
        }
        return this.__$NONE;
    }

    private static __$values : core.DartList<_WrapperKind>;
    static get values() : core.DartList<_WrapperKind> { 
        if (this.__$values===undefined) {
            this.__$values = new core.DartList.literal(_WrapperKind.PREFIXED_LEFT,_WrapperKind.PREFIXED_RIGHT,_WrapperKind.PROPERTY_LEFT,_WrapperKind.PROPERTY_RIGHT,_WrapperKind.NONE);
        }
        return this.__$values;
    }

    name : string;

    ordinal : number;

    constructor(name : string,ordinal : number) {
    }
    @defaultConstructor
    _WrapperKind(name : string,ordinal : number) {
        this.name = name;
        this.ordinal = ordinal;
    }
    get hashCode() : number {
        return this.ordinal;
    }
    compareTo(other : _WrapperKind) : number {
        return this.ordinal - other.ordinal;
    }
    toString() : string {
        return this.name;
    }
}

export class properties {
}
