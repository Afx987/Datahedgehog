/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/parser_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ClassMemberParserTest);
        defineReflectiveTests(ComplexParserTest);
        defineReflectiveTests(ErrorParserTest);
        defineReflectiveTests(ExpressionParserTest);
        defineReflectiveTests(FormalParameterParserTest);
        defineReflectiveTests(NonErrorParserTest);
        defineReflectiveTests(RecoveryParserTest);
        defineReflectiveTests(SimpleParserTest);
        defineReflectiveTests(StatementParserTest);
        defineReflectiveTests(TopLevelParserTest);
    });
};
export namespace AbstractParserTestCase {
    export type Constructors = 'AbstractParserTestCase';
    export type Interface = Omit<AbstractParserTestCase, Constructors>;
}
@DartClass
@Implements(ParserTestHelpers)
export class AbstractParserTestCase implements ParserTestHelpers.Interface {
    set enableAssertInitializer(value : boolean){ throw 'abstract'}
    set enableGenericMethodComments(value : boolean){ throw 'abstract'}
    set enableLazyAssignmentOperators(value : boolean){ throw 'abstract'}
    set enableNnbd(value : boolean){ throw 'abstract'}
    set enableUriInPartOf(value : boolean){ throw 'abstract'}
    @AbstractProperty
    get parser() : any{ throw 'abstract'}
    @Abstract
    assertErrorsWithCodes(expectedErrorCodes : core.DartList<any>) : void{ throw 'abstract'}
    @Abstract
    assertNoErrors() : void{ throw 'abstract'}
    @Abstract
    createParser(content : string) : void{ throw 'abstract'}
    @Abstract
    parseAdditiveExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseAssignableExpression(code : string,primaryAllowed : boolean) : any{ throw 'abstract'}
    @Abstract
    parseAssignableSelector(code : string,optional : boolean,_namedArguments? : {allowConditional? : boolean}) : any{ throw 'abstract'}
    @Abstract
    parseAwaitExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseBitwiseAndExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseBitwiseOrExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseBitwiseXorExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseCascadeSection(code : string) : any{ throw 'abstract'}
    @Abstract
    parseCompilationUnit(source : string,errorCodes? : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    parseConditionalExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseConstExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseConstructorInitializer(code : string) : any{ throw 'abstract'}
    @Abstract
    parseDirectives(source : string,errorCodes? : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    parseEqualityExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseExpression(source : string,errorCodes? : core.DartList<any>) : any{ throw 'abstract'}
    @Abstract
    parseExpressionList(code : string) : core.DartList<any>{ throw 'abstract'}
    @Abstract
    parseExpressionWithoutCascade(code : string) : any{ throw 'abstract'}
    @Abstract
    parseFormalParameter(code : string,kind : any,_namedArguments? : {errorCodes? : core.DartList<any>}) : any{ throw 'abstract'}
    @Abstract
    parseFormalParameterList(code : string,_namedArguments? : {inFunctionType? : boolean,errorCodes? : core.DartList<any>}) : any{ throw 'abstract'}
    @Abstract
    parseFullCompilationUnitMember() : any{ throw 'abstract'}
    @Abstract
    parseFullDirective() : any{ throw 'abstract'}
    @Abstract
    parseFunctionExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseInstanceCreationExpression(code : string,newToken : any) : any{ throw 'abstract'}
    @Abstract
    parseListLiteral(token : any,typeArgumentsCode : string,code : string) : any{ throw 'abstract'}
    @Abstract
    parseListOrMapLiteral(modifier : any,code : string) : any{ throw 'abstract'}
    @Abstract
    parseLogicalAndExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseLogicalOrExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseMapLiteral(token : any,typeArgumentsCode : string,code : string) : any{ throw 'abstract'}
    @Abstract
    parseMapLiteralEntry(code : string) : any{ throw 'abstract'}
    @Abstract
    parseMultiplicativeExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseNewExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseNormalFormalParameter(code : string,_namedArguments? : {inFunctionType? : boolean}) : any{ throw 'abstract'}
    @Abstract
    parsePostfixExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parsePrefixedIdentifier(code : string) : any{ throw 'abstract'}
    @Abstract
    parsePrimaryExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseRelationalExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseRethrowExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseShiftExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseSimpleIdentifier(code : string) : any{ throw 'abstract'}
    @Abstract
    parseStatement(source : string,enableLazyAssignmentOperators? : boolean) : any{ throw 'abstract'}
    @Abstract
    parseStringLiteral(code : string) : any{ throw 'abstract'}
    @Abstract
    parseSymbolLiteral(code : string) : any{ throw 'abstract'}
    @Abstract
    parseThrowExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseThrowExpressionWithoutCascade(code : string) : any{ throw 'abstract'}
    @Abstract
    parseUnaryExpression(code : string) : any{ throw 'abstract'}
    @Abstract
    parseVariableDeclarationList(source : string) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    AbstractParserTestCase() {
    }
}

export namespace AstValidator {
    export type Constructors = 'AstValidator';
    export type Interface = Omit<AstValidator, Constructors>;
}
@DartClass
export class AstValidator extends any {
    _errors : core.DartList<string>;

    assertValid() : void {
        if (!this._errors.isEmpty) {
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            buffer.write("Invalid AST structure:");
            for(let message of this._errors) {
                buffer.write("\n   ");
                buffer.write(message);
            }
            fail(buffer.toString());
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) : core.DartObject {
        this._validate(node);
        return super.visitNode(node);
    }
    _validate(node : any) : void {
        let parent : any = node.parent;
        if (is(node, any)) {
            if (parent != null) {
                this._errors.add("Compilation units should not have a parent");
            }
        }else {
            if (op(Op.EQUALS,parent,null)) {
                this._errors.add(`No parent for ${node.runtimeType}`);
            }
        }
        if (op(Op.EQUALS,node.beginToken,null)) {
            this._errors.add(`No begin token for ${node.runtimeType}`);
        }
        if (op(Op.EQUALS,node.endToken,null)) {
            this._errors.add(`No end token for ${node.runtimeType}`);
        }
        let nodeStart : number = node.offset;
        let nodeLength : number = node.length;
        if (nodeStart < 0 || nodeLength < 0) {
            this._errors.add(`No source info for ${node.runtimeType}`);
        }
        if (parent != null) {
            let nodeEnd : number = nodeStart + nodeLength;
            let parentStart : number = parent.offset;
            let parentEnd : number = parentStart + parent.length;
            if (nodeStart < parentStart) {
                this._errors.add(`Invalid source start (${nodeStart}) for ${node.runtimeType} inside ${parent.runtimeType} (${parentStart})`);
            }
            if (nodeEnd > parentEnd) {
                this._errors.add(`Invalid source end (${nodeEnd}) for ${node.runtimeType} inside ${parent.runtimeType} (${parentStart})`);
            }
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AstValidator() {
        this._errors = new core.DartList<string>();
    }
}

export namespace ClassMemberParserTestMixin {
    export type Constructors = 'ClassMemberParserTestMixin';
    export type Interface = Omit<ClassMemberParserTestMixin, Constructors>;
}
@DartClass
@Implements(AbstractParserTestCase)
export class ClassMemberParserTestMixin implements AbstractParserTestCase.Interface {
    test_parseAwaitExpression_asStatement_inAsync() : void {
        this.createParser('m() async { await x; }');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        let body : any = method.body;
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BlockFunctionBody,body);
        let statement : any = op(Op.INDEX,(body as any).block.statements,0);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },ExpressionStatement,statement);
        let expression : any = (statement as any).expression;
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },AwaitExpression,expression);
        expect((expression as any).awaitKeyword,isNotNull);
        expect((expression as any).expression,isNotNull);
    }
    test_parseAwaitExpression_asStatement_inSync() : void {
        this.createParser('m() { await x; }');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        let body : any = method.body;
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BlockFunctionBody,body);
        let statement : any = op(Op.INDEX,(body as any).block.statements,0);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },VariableDeclarationStatement,statement);
    }
    test_parseAwaitExpression_inSync() : void {
        this.createParser('m() { return await x + await y; }');
        let method : any = this.parser.parseClassMember('C');
        expect(method,isNotNull);
        this.assertNoErrors();
        let body : any = method.body;
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BlockFunctionBody,body);
        let statement : any = op(Op.INDEX,(body as any).block.statements,0);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },ReturnStatement,statement);
        let expression : any = (statement as any).expression;
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },AwaitExpression,(expression as any).leftOperand);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },AwaitExpression,(expression as any).rightOperand);
    }
    test_parseClassMember_constructor_withDocComment() : void {
        this.createParser('/// Doc\nC();');
        let constructor = this.parser.parseClassMember('C') as any;
        this.expectCommentText(constructor.documentationComment,'/// Doc');
    }
    test_parseClassMember_constructor_withInitializers() : void {
        this.createParser('C(_, _$, this.__) : _a = _ + _$ {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let constructor : any = member;
        expect(constructor.body,isNotNull);
        expect(constructor.separator,isNotNull);
        expect(constructor.externalKeyword,isNull);
        expect(constructor.constKeyword,isNull);
        expect(constructor.factoryKeyword,isNull);
        expect(constructor.name,isNull);
        expect(constructor.parameters,isNotNull);
        expect(constructor.period,isNull);
        expect(constructor.returnType,isNotNull);
        expect(constructor.initializers,hasLength(1));
    }
    test_parseClassMember_field_covariant() : void {
        this.createParser('covariant T f;');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let field : any = member;
        expect(field.covariantKeyword,isNotNull);
        expect(field.documentationComment,isNull);
        expect(field.metadata,hasLength(0));
        expect(field.staticKeyword,isNull);
        let list : any = field.fields;
        expect(list,isNotNull);
        let variables : any = list.variables;
        expect(variables,hasLength(1));
        let variable : any = op(Op.INDEX,variables,0);
        expect(variable.name,isNotNull);
    }
    test_parseClassMember_field_gftType_gftReturnType() : void {
        this.createParser('Function(int) Function(String) v;\n');
        let member : any = this.parser.parseClassMember('C');
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let fields : any = (member as any).fields;
        expect(fields.type,new bare.createInstance(any,null));
    }
    test_parseClassMember_field_gftType_noReturnType() : void {
        this.createParser('Function(int, String) v;\n');
        let member : any = this.parser.parseClassMember('C');
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let fields : any = (member as any).fields;
        expect(fields.type,new bare.createInstance(any,null));
    }
    test_parseClassMember_field_instance_prefixedType() : void {
        this.createParser('p.A f;');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let field : any = member;
        expect(field.covariantKeyword,isNull);
        expect(field.documentationComment,isNull);
        expect(field.metadata,hasLength(0));
        expect(field.staticKeyword,isNull);
        let list : any = field.fields;
        expect(list,isNotNull);
        let variables : any = list.variables;
        expect(variables,hasLength(1));
        let variable : any = op(Op.INDEX,variables,0);
        expect(variable.name,isNotNull);
        this._assertIsDeclarationName(variable.name);
    }
    test_parseClassMember_field_namedGet() : void {
        this.createParser('var get;');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let field : any = member;
        expect(field.covariantKeyword,isNull);
        expect(field.documentationComment,isNull);
        expect(field.metadata,hasLength(0));
        expect(field.staticKeyword,isNull);
        let list : any = field.fields;
        expect(list,isNotNull);
        let variables : any = list.variables;
        expect(variables,hasLength(1));
        let variable : any = op(Op.INDEX,variables,0);
        expect(variable.name,isNotNull);
    }
    test_parseClassMember_field_namedOperator() : void {
        this.createParser('var operator;');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let field : any = member;
        expect(field.covariantKeyword,isNull);
        expect(field.documentationComment,isNull);
        expect(field.metadata,hasLength(0));
        expect(field.staticKeyword,isNull);
        let list : any = field.fields;
        expect(list,isNotNull);
        let variables : any = list.variables;
        expect(variables,hasLength(1));
        let variable : any = op(Op.INDEX,variables,0);
        expect(variable.name,isNotNull);
    }
    test_parseClassMember_field_namedOperator_withAssignment() : void {
        this.createParser('var operator = (5);');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let field : any = member;
        expect(field.covariantKeyword,isNull);
        expect(field.documentationComment,isNull);
        expect(field.metadata,hasLength(0));
        expect(field.staticKeyword,isNull);
        let list : any = field.fields;
        expect(list,isNotNull);
        let variables : any = list.variables;
        expect(variables,hasLength(1));
        let variable : any = op(Op.INDEX,variables,0);
        expect(variable.name,isNotNull);
        expect(variable.initializer,isNotNull);
    }
    test_parseClassMember_field_namedSet() : void {
        this.createParser('var set;');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let field : any = member;
        expect(field.covariantKeyword,isNull);
        expect(field.documentationComment,isNull);
        expect(field.metadata,hasLength(0));
        expect(field.staticKeyword,isNull);
        let list : any = field.fields;
        expect(list,isNotNull);
        let variables : any = list.variables;
        expect(variables,hasLength(1));
        let variable : any = op(Op.INDEX,variables,0);
        expect(variable.name,isNotNull);
    }
    test_parseClassMember_field_static() : void {
        this.createParser('static A f;');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let field : any = member;
        expect(field.covariantKeyword,isNull);
        expect(field.documentationComment,isNull);
        expect(field.metadata,hasLength(0));
        expect(field.staticKeyword,isNotNull);
        let list : any = field.fields;
        expect(list,isNotNull);
        let variables : any = list.variables;
        expect(variables,hasLength(1));
        let variable : any = op(Op.INDEX,variables,0);
        expect(variable.name,isNotNull);
    }
    test_parseClassMember_getter_functionType() : void {
        this.createParser('int Function(int) get g {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNotNull);
        expect(method.returnType,isNotNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.body,isNotNull);
        expect(method.parameters,isNull);
    }
    test_parseClassMember_getter_void() : void {
        this.createParser('void get g {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNotNull);
        expect(method.returnType,isNotNull);
        expect(method.name,isNotNull);
        this._assertIsDeclarationName(method.name);
        expect(method.operatorKeyword,isNull);
        expect(method.body,isNotNull);
        expect(method.parameters,isNull);
    }
    test_parseClassMember_method_external() : void {
        this.createParser('external m();');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNotNull);
        expect(method.modifierKeyword,isNull);
        expect(method.name,isNotNull);
        this._assertIsDeclarationName(method.name);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNull);
        let body = method.body as any;
        expect(body.keyword,isNull);
        expect(body.star,isNull);
        expect(body.semicolon.type,TokenType.SEMICOLON);
    }
    test_parseClassMember_method_external_withTypeAndArgs() : void {
        this.createParser('external int m(int a);');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.body,isNotNull);
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNotNull);
        expect(method.modifierKeyword,isNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNotNull);
    }
    test_parseClassMember_method_generic_comment_noReturnType() : void {
        this.enableGenericMethodComments = true;
        this.createParser('m/*<T>*/() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNotNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_generic_comment_parameterType() : void {
        this.enableGenericMethodComments = true;
        this.createParser('m/*<T>*/(dynamic /*=T*/ p) => null;');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNotNull);
        let parameters : any = method.parameters;
        expect(parameters,isNotNull);
        expect(parameters.parameters,hasLength(1));
        let parameter = op(Op.INDEX,parameters.parameters,0) as any;
        let parameterType = parameter.type as any;
        expect(parameterType.name.name,'T');
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_generic_comment_returnType() : void {
        this.enableGenericMethodComments = true;
        this.createParser('/*=T*/ m/*<T>*/() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNotNull);
        expect((method.returnType as any).name.name,'T');
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNotNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_generic_comment_returnType_bound() : void {
        this.enableGenericMethodComments = true;
        this.createParser('num/*=T*/ m/*<T extends num>*/() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect((method.returnType as any).name.name,'T');
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNotNull);
        let tp : any = op(Op.INDEX,method.typeParameters.typeParameters,0);
        expect(tp.name.name,'T');
        expect(tp.extendsKeyword,isNotNull);
        expect((tp.bound as any).name.name,'num');
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_generic_comment_returnType_complex() : void {
        this.enableGenericMethodComments = true;
        this.createParser('dynamic /*=Map<int, T>*/ m/*<T>*/() => null;');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        {
            let returnType = method.returnType as any;
            expect(returnType,isNotNull);
            expect(returnType.name.name,'Map');
            let typeArguments : core.DartList<any> = returnType.typeArguments.arguments;
            expect(typeArguments,hasLength(2));
            expect((typeArguments[0] as any).name.name,'int');
            expect((typeArguments[1] as any).name.name,'T');
        }
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNotNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_generic_comment_void() : void {
        this.enableGenericMethodComments = true;
        this.createParser('void m/*<T>*/() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNotNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNotNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_generic_noReturnType() : void {
        this.createParser('m<T>() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNotNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_generic_returnType() : void {
        this.createParser('T m<T>() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNotNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNotNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_generic_void() : void {
        this.createParser('void m<T>() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNotNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNotNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_get_noType() : void {
        this.createParser('get() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_get_type() : void {
        this.createParser('int get() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNotNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_get_void() : void {
        this.createParser('void get() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNotNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_gftReturnType_noReturnType() : void {
        this.createParser('Function<A>(core.List<core.int> x) m() => null;\n');
        let member : any = this.parser.parseClassMember('C');
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        expect((member as any).body,new bare.createInstance(any,null));
    }
    test_parseClassMember_method_gftReturnType_voidReturnType() : void {
        this.createParser('void Function<A>(core.List<core.int> x) m() => null;\n');
        let member : any = this.parser.parseClassMember('C');
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        expect((member as any).body,new bare.createInstance(any,null));
    }
    test_parseClassMember_method_native() : void {
        this.createParser('m() native "str";');
        let method = this.parser.parseClassMember('C') as any;
        this.assertNoErrors();
        let body = method.body as any;
        expect(body.nativeKeyword,isNotNull);
        expect(body.stringLiteral,isNotNull);
        expect(body.semicolon,isNotNull);
    }
    test_parseClassMember_method_operator_noType() : void {
        this.createParser('operator() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_operator_type() : void {
        this.createParser('int operator() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNotNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_operator_void() : void {
        this.createParser('void operator() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNotNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_returnType_functionType() : void {
        this.createParser('int Function(String) m() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNotNull);
        expect(method.name,isNotNull);
        expect(method.name.name,'m');
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_returnType_parameterized() : void {
        this.createParser('p.A m() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNotNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_set_noType() : void {
        this.createParser('set() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_set_type() : void {
        this.createParser('int set() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNotNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_set_void() : void {
        this.createParser('void set() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNotNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_static_generic_comment_returnType() : void {
        this.enableGenericMethodComments = true;
        this.createParser('static /*=T*/ m/*<T>*/() {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNotNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNotNull);
        expect((method.returnType as any).name.name,'T');
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNotNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_method_trailing_commas() : void {
        this.createParser('void f(int x, int y,) {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNotNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_operator_functionType() : void {
        this.createParser('int Function() operator +(int Function() f) {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,new bare.createInstance(any,null));
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNotNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        let parameters : any = method.parameters.parameters;
        expect(parameters,hasLength(1));
        expect((op(Op.INDEX,parameters,0) as any).type,new bare.createInstance(any,null));
        expect(method.body,isNotNull);
    }
    test_parseClassMember_operator_index() : void {
        this.createParser('int operator [](int i) {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNotNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNotNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_operator_indexAssign() : void {
        this.createParser('int operator []=(int i) {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.propertyKeyword,isNull);
        expect(method.returnType,isNotNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNotNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.body,isNotNull);
    }
    test_parseClassMember_redirectingFactory_const() : void {
        this.createParser('const factory C() = prefix.B.foo;');
        let constructor = this.parser.parseClassMember('C') as any;
        this.assertNoErrors();
        expect(constructor,isNotNull);
        expect(constructor.externalKeyword,isNull);
        expect(constructor.constKeyword.keyword,Keyword.CONST);
        expect(constructor.factoryKeyword.keyword,Keyword.FACTORY);
        expect(constructor.returnType.name,'C');
        expect(constructor.period,isNull);
        expect(constructor.name,isNull);
        this._assertIsDeclarationName(constructor.returnType,false);
        expect(constructor.parameters,isNotNull);
        expect(constructor.parameters.parameters,isEmpty);
        expect(constructor.separator.type,TokenType.EQ);
        expect(constructor.initializers,isEmpty);
        expect(constructor.redirectedConstructor,isNotNull);
        expect(constructor.redirectedConstructor.type.name.name,'prefix.B');
        expect(constructor.redirectedConstructor.period.type,TokenType.PERIOD);
        expect(constructor.redirectedConstructor.name.name,'foo');
        expect(constructor.body,new bare.createInstance(any,null));
    }
    test_parseClassMember_redirectingFactory_expressionBody() : void {
        this.createParser('factory C() => null;');
        let constructor = this.parser.parseClassMember('C') as any;
        this.assertNoErrors();
        expect(constructor,isNotNull);
        expect(constructor.externalKeyword,isNull);
        expect(constructor.constKeyword,isNull);
        expect(constructor.factoryKeyword.keyword,Keyword.FACTORY);
        expect(constructor.returnType.name,'C');
        expect(constructor.period,isNull);
        expect(constructor.name,isNull);
        expect(constructor.parameters,isNotNull);
        expect(constructor.parameters.parameters,isEmpty);
        expect(constructor.separator,isNull);
        expect(constructor.initializers,isEmpty);
        expect(constructor.redirectedConstructor,isNull);
        let body = constructor.body as any;
        expect(body.keyword,isNull);
        expect(body.star,isNull);
        expect(body.functionDefinition.type,TokenType.FUNCTION);
        expect(body.expression,isNotNull);
        expect(body.semicolon,isNotNull);
    }
    test_parseClassMember_redirectingFactory_nonConst() : void {
        this.createParser('factory C() = B;');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let constructor : any = member;
        expect(constructor.externalKeyword,isNull);
        expect(constructor.constKeyword,isNull);
        expect(constructor.factoryKeyword.keyword,Keyword.FACTORY);
        expect(constructor.returnType.name,'C');
        this._assertIsDeclarationName(constructor.returnType,false);
        expect(constructor.period,isNull);
        expect(constructor.name,isNull);
        expect(constructor.parameters,isNotNull);
        expect(constructor.parameters.parameters,isEmpty);
        expect(constructor.separator.type,TokenType.EQ);
        expect(constructor.initializers,isEmpty);
        expect(constructor.redirectedConstructor,isNotNull);
        expect(constructor.redirectedConstructor.type.name.name,'B');
        expect(constructor.redirectedConstructor.period,isNull);
        expect(constructor.redirectedConstructor.name,isNull);
        expect(constructor.body,new bare.createInstance(any,null));
    }
    test_parseConstructor_assert() : void {
        this.enableAssertInitializer = true;
        this.createParser('C(x, y) : _x = x, assert (x < y), _y = y;');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let constructor : any = member as any;
        let initializers : any = constructor.initializers;
        expect(initializers,hasLength(3));
        let initializer : any = op(Op.INDEX,initializers,1);
        expect(initializer,new bare.createInstance(any,null));
        let assertInitializer : any = initializer;
        expect(assertInitializer.condition,isNotNull);
        expect(assertInitializer.message,isNull);
    }
    test_parseConstructor_factory_named() : void {
        this.createParser('factory C.foo() => null;');
        let constructor = this.parser.parseClassMember('C') as any;
        this.assertNoErrors();
        expect(constructor,isNotNull);
        expect(constructor.externalKeyword,isNull);
        expect(constructor.constKeyword,isNull);
        expect(constructor.factoryKeyword,isNotNull);
        expect(constructor.returnType.name,'C');
        this._assertIsDeclarationName(constructor.returnType,false);
        expect(constructor.period.type,TokenType.PERIOD);
        expect(constructor.name.name,'foo');
        this._assertIsDeclarationName(constructor.name);
        expect(constructor.parameters,isNotNull);
        expect(constructor.parameters.parameters,isEmpty);
        expect(constructor.separator,isNull);
        expect(constructor.initializers,isEmpty);
        expect(constructor.redirectedConstructor,isNull);
        expect(constructor.body,new bare.createInstance(any,null));
    }
    test_parseConstructor_initializers_field() : void {
        this.createParser('C(x, y) : _x = x, this._y = y;');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let constructor : any = member as any;
        let initializers : any = constructor.initializers;
        expect(initializers,hasLength(2));
        {
            let initializer = op(Op.INDEX,initializers,0) as any;
            expect(initializer.thisKeyword,isNull);
            expect(initializer.period,isNull);
            expect(initializer.fieldName.name,'_x');
            expect(initializer.expression,isNotNull);
        }
        {
            let initializer = op(Op.INDEX,initializers,1) as any;
            expect(initializer.thisKeyword,isNotNull);
            expect(initializer.period,isNotNull);
            expect(initializer.fieldName.name,'_y');
            expect(initializer.expression,isNotNull);
        }
    }
    test_parseConstructor_named() : void {
        this.createParser('C.foo();');
        let constructor = this.parser.parseClassMember('C') as any;
        this.assertNoErrors();
        expect(constructor,isNotNull);
        expect(constructor.externalKeyword,isNull);
        expect(constructor.constKeyword,isNull);
        expect(constructor.factoryKeyword,isNull);
        expect(constructor.returnType.name,'C');
        this._assertIsDeclarationName(constructor.returnType,false);
        expect(constructor.period.type,TokenType.PERIOD);
        expect(constructor.name.name,'foo');
        this._assertIsDeclarationName(constructor.name);
        expect(constructor.parameters,isNotNull);
        expect(constructor.parameters.parameters,isEmpty);
        expect(constructor.separator,isNull);
        expect(constructor.initializers,isEmpty);
        expect(constructor.redirectedConstructor,isNull);
        expect(constructor.body,new bare.createInstance(any,null));
    }
    test_parseConstructor_unnamed() : void {
        this.createParser('C();');
        let constructor = this.parser.parseClassMember('C') as any;
        this.assertNoErrors();
        expect(constructor,isNotNull);
        expect(constructor.externalKeyword,isNull);
        expect(constructor.constKeyword,isNull);
        expect(constructor.factoryKeyword,isNull);
        expect(constructor.returnType.name,'C');
        this._assertIsDeclarationName(constructor.returnType,false);
        expect(constructor.period,isNull);
        expect(constructor.name,isNull);
        expect(constructor.parameters,isNotNull);
        expect(constructor.parameters.parameters,isEmpty);
        expect(constructor.separator,isNull);
        expect(constructor.initializers,isEmpty);
        expect(constructor.redirectedConstructor,isNull);
        expect(constructor.body,new bare.createInstance(any,null));
    }
    test_parseConstructor_with_pseudo_function_literal() : void {
        this.createParser('C() : a = (b) {}');
        let member : any = this.parser.parseClassMember('C');
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let constructor : any = member as any;
        let initializers : any = constructor.initializers;
        expect(initializers,hasLength(1));
        let initializer : any = op(Op.INDEX,initializers,0);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },ConstructorFieldInitializer,initializer);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },ParenthesizedExpression,(initializer as any).expression);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BlockFunctionBody,constructor.body);
    }
    test_parseConstructorFieldInitializer_qualified() : void {
        let initializer = this.parseConstructorInitializer('this.a = b') as any;
        expect(initializer,isNotNull);
        this.assertNoErrors();
        expect(initializer.equals,isNotNull);
        expect(initializer.expression,isNotNull);
        expect(initializer.fieldName,isNotNull);
        expect(initializer.thisKeyword,isNotNull);
        expect(initializer.period,isNotNull);
    }
    test_parseConstructorFieldInitializer_unqualified() : void {
        let initializer = this.parseConstructorInitializer('a = b') as any;
        expect(initializer,isNotNull);
        this.assertNoErrors();
        expect(initializer.equals,isNotNull);
        expect(initializer.expression,isNotNull);
        expect(initializer.fieldName,isNotNull);
        expect(initializer.thisKeyword,isNull);
        expect(initializer.period,isNull);
    }
    test_parseGetter_nonStatic() : void {
        this.createParser('/// Doc\nT get a;');
        let method : any = this.parser.parseClassMember('C');
        expect(method,isNotNull);
        this.assertNoErrors();
        expect(method.body,isNotNull);
        this.expectCommentText(method.documentationComment,'/// Doc');
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.parameters,isNull);
        expect(method.propertyKeyword,isNotNull);
        expect((method.returnType as any).name.name,'T');
    }
    test_parseGetter_static() : void {
        this.createParser('/// Doc\nstatic T get a => 42;');
        let method : any = this.parser.parseClassMember('C');
        expect(method,isNotNull);
        this.assertNoErrors();
        expect(method.body,isNotNull);
        this.expectCommentText(method.documentationComment,'/// Doc');
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword.lexeme,'static');
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNull);
        expect(method.propertyKeyword,isNotNull);
        expect((method.returnType as any).name.name,'T');
    }
    test_parseInitializedIdentifierList_type() : void {
        this.createParser("/// Doc\nstatic T a = 1, b, c = 3;");
        let declaration : any = this.parser.parseClassMember('C');
        expect(declaration,isNotNull);
        this.assertNoErrors();
        this.expectCommentText(declaration.documentationComment,'/// Doc');
        let fields : any = declaration.fields;
        expect(fields,isNotNull);
        expect(fields.keyword,isNull);
        expect((fields.type as any).name.name,'T');
        expect(fields.variables,hasLength(3));
        expect(declaration.staticKeyword.lexeme,'static');
        expect(declaration.semicolon,isNotNull);
    }
    test_parseInitializedIdentifierList_var() : void {
        this.createParser('/// Doc\nstatic var a = 1, b, c = 3;');
        let declaration : any = this.parser.parseClassMember('C');
        expect(declaration,isNotNull);
        this.assertNoErrors();
        this.expectCommentText(declaration.documentationComment,'/// Doc');
        let fields : any = declaration.fields;
        expect(fields,isNotNull);
        expect(fields.keyword.lexeme,'var');
        expect(fields.type,isNull);
        expect(fields.variables,hasLength(3));
        expect(declaration.staticKeyword.lexeme,'static');
        expect(declaration.semicolon,isNotNull);
    }
    test_parseOperator() : void {
        this.createParser('/// Doc\nT operator +(A a);');
        let method : any = this.parser.parseClassMember('C');
        expect(method,isNotNull);
        this.assertNoErrors();
        expect(method.body,isNotNull);
        this.expectCommentText(method.documentationComment,'/// Doc');
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNotNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.propertyKeyword,isNull);
        expect((method.returnType as any).name.name,'T');
    }
    test_parseSetter_nonStatic() : void {
        this.createParser('/// Doc\nT set a(var x);');
        let method : any = this.parser.parseClassMember('C');
        expect(method,isNotNull);
        this.assertNoErrors();
        expect(method.body,isNotNull);
        this.expectCommentText(method.documentationComment,'/// Doc');
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword,isNull);
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.propertyKeyword,isNotNull);
        expect((method.returnType as any).name.name,'T');
    }
    test_parseSetter_static() : void {
        this.createParser('/// Doc\nstatic T set a(var x) {}');
        let method : any = this.parser.parseClassMember('C');
        expect(method,isNotNull);
        this.assertNoErrors();
        expect(method.body,isNotNull);
        this.expectCommentText(method.documentationComment,'/// Doc');
        expect(method.externalKeyword,isNull);
        expect(method.modifierKeyword.lexeme,'static');
        expect(method.name,isNotNull);
        expect(method.operatorKeyword,isNull);
        expect(method.typeParameters,isNull);
        expect(method.parameters,isNotNull);
        expect(method.propertyKeyword,isNotNull);
        expect((method.returnType as any).name.name,'T');
    }
    test_simpleFormalParameter_withDocComment() : void {
        this.createParser('int f(\n    /// Doc\n    int x) {}\n');
        let function = this.parseFullCompilationUnitMember() as any;
        let parameter = op(Op.INDEX,function.functionExpression.parameters.parameters,0) as any;
        this.expectCommentText(parameter.documentationComment,'/// Doc');
    }
    _assertIsDeclarationName(name : any,expected? : boolean) : void {
        expected = expected || true;
        expect(name.inDeclarationContext(),expected);
    }
    constructor() {
    }
    @defaultConstructor
    ClassMemberParserTestMixin() {
    }
}

export namespace ComplexParserTestMixin {
    export type Constructors = 'ComplexParserTestMixin';
    export type Interface = Omit<ComplexParserTestMixin, Constructors>;
}
@DartClass
@Implements(AbstractParserTestCase)
export class ComplexParserTestMixin implements AbstractParserTestCase.Interface {
    test_additiveExpression_normal() : void {
        let expression : any = this.parseExpression("x + y - z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_additiveExpression_noSpaces() : void {
        let expression : any = this.parseExpression("i+1");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },IntegerLiteral,expression.rightOperand);
    }
    test_additiveExpression_precedence_multiplicative_left() : void {
        let expression : any = this.parseExpression("x * y + z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_additiveExpression_precedence_multiplicative_left_withSuper() : void {
        let expression : any = this.parseExpression("super * y - z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_additiveExpression_precedence_multiplicative_right() : void {
        let expression : any = this.parseExpression("x + y * z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.rightOperand);
    }
    test_additiveExpression_super() : void {
        let expression : any = this.parseExpression("super + y - z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_assignableExpression_arguments_normal_chain() : void {
        let propertyAccess1 : any = this.parseExpression("a(b)(c).d(e).f");
        expect(propertyAccess1.propertyName.name,"f");
        let invocation2 : any = lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },MethodInvocation,propertyAccess1.target);
        expect(invocation2.methodName.name,"d");
        expect(invocation2.typeArguments,isNull);
        let argumentList2 : any = invocation2.argumentList;
        expect(argumentList2,isNotNull);
        expect(argumentList2.arguments,hasLength(1));
        let invocation3 : any = lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },FunctionExpressionInvocation,invocation2.target);
        expect(invocation3.typeArguments,isNull);
        let argumentList3 : any = invocation3.argumentList;
        expect(argumentList3,isNotNull);
        expect(argumentList3.arguments,hasLength(1));
        let invocation4 : any = lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },MethodInvocation,invocation3.function);
        expect(invocation4.methodName.name,"a");
        expect(invocation4.typeArguments,isNull);
        let argumentList4 : any = invocation4.argumentList;
        expect(argumentList4,isNotNull);
        expect(argumentList4.arguments,hasLength(1));
    }
    test_assignableExpression_arguments_normal_chain_typeArgumentComments() : void {
        this.enableGenericMethodComments = true;
        this._validate_assignableExpression_arguments_normal_chain_typeArguments("a/*<E>*/(b)/*<F>*/(c).d/*<G>*/(e).f");
    }
    test_assignableExpression_arguments_normal_chain_typeArguments() : void {
        this._validate_assignableExpression_arguments_normal_chain_typeArguments("a<E>(b)<F>(c).d<G>(e).f");
    }
    test_assignmentExpression_compound() : void {
        let expression : any = this.parseExpression("x = y = 0");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftHandSide);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },AssignmentExpression,expression.rightHandSide);
    }
    test_assignmentExpression_indexExpression() : void {
        let expression : any = this.parseExpression("x[1] = 0");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },IndexExpression,expression.leftHandSide);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },IntegerLiteral,expression.rightHandSide);
    }
    test_assignmentExpression_prefixedIdentifier() : void {
        let expression : any = this.parseExpression("x.y = 0");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },PrefixedIdentifier,expression.leftHandSide);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },IntegerLiteral,expression.rightHandSide);
    }
    test_assignmentExpression_propertyAccess() : void {
        let expression : any = this.parseExpression("super.y = 0");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },PropertyAccess,expression.leftHandSide);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },IntegerLiteral,expression.rightHandSide);
    }
    test_bitwiseAndExpression_normal() : void {
        let expression : any = this.parseExpression("x & y & z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_bitwiseAndExpression_precedence_equality_left() : void {
        let expression : any = this.parseExpression("x == y && z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_bitwiseAndExpression_precedence_equality_right() : void {
        let expression : any = this.parseExpression("x && y == z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.rightOperand);
    }
    test_bitwiseAndExpression_super() : void {
        let expression : any = this.parseExpression("super & y & z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_bitwiseOrExpression_normal() : void {
        let expression : any = this.parseExpression("x | y | z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_bitwiseOrExpression_precedence_xor_left() : void {
        let expression : any = this.parseExpression("x ^ y | z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_bitwiseOrExpression_precedence_xor_right() : void {
        let expression : any = this.parseExpression("x | y ^ z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.rightOperand);
    }
    test_bitwiseOrExpression_super() : void {
        let expression : any = this.parseExpression("super | y | z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_bitwiseXorExpression_normal() : void {
        let expression : any = this.parseExpression("x ^ y ^ z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_bitwiseXorExpression_precedence_and_left() : void {
        let expression : any = this.parseExpression("x & y ^ z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_bitwiseXorExpression_precedence_and_right() : void {
        let expression : any = this.parseExpression("x ^ y & z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.rightOperand);
    }
    test_bitwiseXorExpression_super() : void {
        let expression : any = this.parseExpression("super ^ y ^ z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_cascade_withAssignment() : void {
        let cascade : any = this.parseExpression("new Map()..[3] = 4 ..[0] = 11");
        let target : any = cascade.target;
        for(let section of cascade.cascadeSections) {
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },AssignmentExpression,section);
            let lhs : any = (section as any).leftHandSide;
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },IndexExpression,lhs);
            let index : any = lhs as any;
            expect(index.isCascaded,isTrue);
            expect(index.realTarget,same(target));
        }
    }
    test_conditionalExpression_precedence_ifNullExpression() : void {
        let expression : any = this.parseExpression('a ?? b ? y : z');
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.condition);
    }
    test_conditionalExpression_precedence_logicalOrExpression() : void {
        let expression : any = this.parseExpression("a | b ? y : z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.condition);
    }
    test_conditionalExpression_precedence_nullableType_as() : void {
        this.enableNnbd = true;
        let expression : any = this.parseExpression('x as String ? (x + y) : z');
        expect(expression,isNotNull);
        expect(expression,new bare.createInstance(any,null));
        let conditional : any = expression;
        let condition : any = conditional.condition;
        expect(condition,new bare.createInstance(any,null));
        let thenExpression : any = conditional.thenExpression;
        expect(thenExpression,new bare.createInstance(any,null));
        let elseExpression : any = conditional.elseExpression;
        expect(elseExpression,new bare.createInstance(any,null));
    }
    test_conditionalExpression_precedence_nullableType_is() : void {
        this.enableNnbd = true;
        let expression : any = this.parseExpression('x is String ? (x + y) : z');
        expect(expression,isNotNull);
        expect(expression,new bare.createInstance(any,null));
        let conditional : any = expression;
        let condition : any = conditional.condition;
        expect(condition,new bare.createInstance(any,null));
        let thenExpression : any = conditional.thenExpression;
        expect(thenExpression,new bare.createInstance(any,null));
        let elseExpression : any = conditional.elseExpression;
        expect(elseExpression,new bare.createInstance(any,null));
    }
    test_constructor_initializer_withParenthesizedExpression() : void {
        let unit : any = this.parseCompilationUnit('class C {\n  C() :\n    this.a = (b == null ? c : d) {\n  }\n}');
        let declarations : any = unit.declarations;
        expect(declarations,hasLength(1));
    }
    test_equalityExpression_normal() : void {
        let expression : any = this.parseExpression("x == y != z",new core.DartList.literal(ParserErrorCode.EQUALITY_CANNOT_BE_EQUALITY_OPERAND));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_equalityExpression_precedence_relational_left() : void {
        let expression : any = this.parseExpression("x is y == z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },IsExpression,expression.leftOperand);
    }
    test_equalityExpression_precedence_relational_right() : void {
        let expression : any = this.parseExpression("x == y is z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },IsExpression,expression.rightOperand);
    }
    test_equalityExpression_super() : void {
        let expression : any = this.parseExpression("super == y != z",new core.DartList.literal(ParserErrorCode.EQUALITY_CANNOT_BE_EQUALITY_OPERAND));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_ifNullExpression() : void {
        let expression : any = this.parseExpression('x ?? y ?? z');
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_ifNullExpression_precedence_logicalOr_left() : void {
        let expression : any = this.parseExpression('x || y ?? z');
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_ifNullExpression_precedence_logicalOr_right() : void {
        let expression : any = this.parseExpression('x ?? y || z');
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.rightOperand);
    }
    test_logicalAndExpression() : void {
        let expression : any = this.parseExpression("x && y && z");
        expect(expression.leftOperand,new bare.createInstance(any,null));
    }
    test_logicalAndExpression_precedence_bitwiseOr_left() : void {
        let expression : any = this.parseExpression("x | y < z");
        expect(expression.leftOperand,new bare.createInstance(any,null));
    }
    test_logicalAndExpression_precedence_bitwiseOr_right() : void {
        let expression : any = this.parseExpression("x < y | z");
        expect(expression.rightOperand,new bare.createInstance(any,null));
    }
    test_logicalAndExpression_precedence_nullableType() : void {
        this.enableNnbd = true;
        let expression : any = this.parseExpression("x is C? && y is D");
        expect(expression.leftOperand,new bare.createInstance(any,null));
        expect(expression.rightOperand,new bare.createInstance(any,null));
    }
    test_logicalOrExpression() : void {
        let expression : any = this.parseExpression("x || y || z");
        expect(expression.leftOperand,new bare.createInstance(any,null));
    }
    test_logicalOrExpression_precedence_logicalAnd_left() : void {
        let expression : any = this.parseExpression("x && y || z");
        expect(expression.leftOperand,new bare.createInstance(any,null));
    }
    test_logicalOrExpression_precedence_logicalAnd_right() : void {
        let expression : any = this.parseExpression("x || y && z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.rightOperand);
    }
    test_logicalOrExpression_precedence_nullableType() : void {
        this.enableNnbd = true;
        let expression : any = this.parseExpression("a is X? || (b ? c : d)");
        expect(expression.leftOperand,new bare.createInstance(any,null));
        expect(expression.rightOperand,new bare.createInstance(any,null));
        expect((expression.rightOperand as any).expression,new bare.createInstance(any,null));
    }
    test_multipleLabels_statement() : void {
        let statement : any = this.parseStatement("a: b: c: return x;");
        expect(statement.labels,hasLength(3));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },ReturnStatement,statement.statement);
    }
    test_multiplicativeExpression_normal() : void {
        let expression : any = this.parseExpression("x * y / z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_multiplicativeExpression_precedence_unary_left() : void {
        let expression : any = this.parseExpression("-x * y");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },PrefixExpression,expression.leftOperand);
    }
    test_multiplicativeExpression_precedence_unary_right() : void {
        let expression : any = this.parseExpression("x * -y");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },PrefixExpression,expression.rightOperand);
    }
    test_multiplicativeExpression_super() : void {
        let expression : any = this.parseExpression("super * y / z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_relationalExpression_precedence_shift_right() : void {
        let expression : any = this.parseExpression("x << y is z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.expression);
    }
    test_shiftExpression_normal() : void {
        let expression : any = this.parseExpression("x >> 4 << 3");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_shiftExpression_precedence_additive_left() : void {
        let expression : any = this.parseExpression("x + y << z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_shiftExpression_precedence_additive_right() : void {
        let expression : any = this.parseExpression("x << y + z");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.rightOperand);
    }
    test_shiftExpression_super() : void {
        let expression : any = this.parseExpression("super >> 4 << 3");
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_topLevelFunction_nestedGenericFunction() : void {
        this.parseCompilationUnit('void f() {\n  void g<T>() {\n  }\n}\n');
    }
    _validate_assignableExpression_arguments_normal_chain_typeArguments(code : string) : void {
        let propertyAccess1 : any = this.parseExpression(code);
        expect(propertyAccess1.propertyName.name,"f");
        let invocation2 : any = lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },MethodInvocation,propertyAccess1.target);
        expect(invocation2.methodName.name,"d");
        expect(invocation2.typeArguments,isNotNull);
        let argumentList2 : any = invocation2.argumentList;
        expect(argumentList2,isNotNull);
        expect(argumentList2.arguments,hasLength(1));
        let invocation3 : any = lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },FunctionExpressionInvocation,invocation2.target);
        expect(invocation3.typeArguments,isNotNull);
        let argumentList3 : any = invocation3.argumentList;
        expect(argumentList3,isNotNull);
        expect(argumentList3.arguments,hasLength(1));
        let invocation4 : any = lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },MethodInvocation,invocation3.function);
        expect(invocation4.methodName.name,"a");
        expect(invocation4.typeArguments,isNotNull);
        let argumentList4 : any = invocation4.argumentList;
        expect(argumentList4,isNotNull);
        expect(argumentList4.arguments,hasLength(1));
    }
    constructor() {
    }
    @defaultConstructor
    ComplexParserTestMixin() {
    }
}

export namespace ExpressionParserTestMixin {
    export type Constructors = 'ExpressionParserTestMixin';
    export type Interface = Omit<ExpressionParserTestMixin, Constructors>;
}
@DartClass
@Implements(AbstractParserTestCase)
export class ExpressionParserTestMixin implements AbstractParserTestCase.Interface {
    test_namedArgument() : void {
        let invocation = this.parseExpression('m(a: 1, b: 2)') as any;
        let arguments : core.DartList<any> = invocation.argumentList.arguments;
        let a = arguments[0] as any;
        expect(a.name.label.name,'a');
        expect(a.expression,isNotNull);
        let b = arguments[1] as any;
        expect(b.name.label.name,'b');
        expect(b.expression,isNotNull);
    }
    test_parseAdditiveExpression_normal() : void {
        let expression : any = this.parseAdditiveExpression('x + y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let binaryExpression = expression as any;
        expect(binaryExpression.leftOperand,isNotNull);
        expect(binaryExpression.operator,isNotNull);
        expect(binaryExpression.operator.type,TokenType.PLUS);
        expect(binaryExpression.rightOperand,isNotNull);
    }
    test_parseAdditiveExpression_super() : void {
        let expression : any = this.parseAdditiveExpression('super + y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let binaryExpression = expression as any;
        expect(binaryExpression.leftOperand,new bare.createInstance(any,null));
        expect(binaryExpression.operator,isNotNull);
        expect(binaryExpression.operator.type,TokenType.PLUS);
        expect(binaryExpression.rightOperand,isNotNull);
    }
    test_parseAssignableExpression_expression_args_dot() : void {
        let expression : any = this.parseAssignableExpression('(x)(y).z',false);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let propertyAccess = expression as any;
        let invocation : any = propertyAccess.target as any;
        expect(invocation.function,isNotNull);
        expect(invocation.typeArguments,isNull);
        let argumentList : any = invocation.argumentList;
        expect(argumentList,isNotNull);
        expect(argumentList.arguments,hasLength(1));
        expect(propertyAccess.operator,isNotNull);
        expect(propertyAccess.propertyName,isNotNull);
    }
    test_parseAssignableExpression_expression_args_dot_typeArgumentComments() : void {
        this.enableGenericMethodComments = true;
        let expression : any = this.parseAssignableExpression('(x)/*<F>*/(y).z',false);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let propertyAccess = expression as any;
        let invocation : any = propertyAccess.target as any;
        expect(invocation.function,isNotNull);
        expect(invocation.typeArguments,isNotNull);
        let argumentList : any = invocation.argumentList;
        expect(argumentList,isNotNull);
        expect(argumentList.arguments,hasLength(1));
        expect(propertyAccess.operator,isNotNull);
        expect(propertyAccess.propertyName,isNotNull);
    }
    test_parseAssignableExpression_expression_args_dot_typeArguments() : void {
        let expression : any = this.parseAssignableExpression('(x)<F>(y).z',false);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let propertyAccess = expression as any;
        let invocation : any = propertyAccess.target as any;
        expect(invocation.function,isNotNull);
        expect(invocation.typeArguments,isNotNull);
        let argumentList : any = invocation.argumentList;
        expect(argumentList,isNotNull);
        expect(argumentList.arguments,hasLength(1));
        expect(propertyAccess.operator,isNotNull);
        expect(propertyAccess.propertyName,isNotNull);
    }
    test_parseAssignableExpression_expression_dot() : void {
        let expression : any = this.parseAssignableExpression('(x).y',false);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let propertyAccess = expression as any;
        expect(propertyAccess.target,isNotNull);
        expect(propertyAccess.operator.type,TokenType.PERIOD);
        expect(propertyAccess.propertyName,isNotNull);
    }
    test_parseAssignableExpression_expression_index() : void {
        let expression : any = this.parseAssignableExpression('(x)[y]',false);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let indexExpression = expression as any;
        expect(indexExpression.target,isNotNull);
        expect(indexExpression.leftBracket,isNotNull);
        expect(indexExpression.index,isNotNull);
        expect(indexExpression.rightBracket,isNotNull);
    }
    test_parseAssignableExpression_expression_question_dot() : void {
        let expression : any = this.parseAssignableExpression('(x)?.y',false);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let propertyAccess = expression as any;
        expect(propertyAccess.target,isNotNull);
        expect(propertyAccess.operator.type,TokenType.QUESTION_PERIOD);
        expect(propertyAccess.propertyName,isNotNull);
    }
    test_parseAssignableExpression_identifier() : void {
        let expression : any = this.parseAssignableExpression('x',false);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let identifier = expression as any;
        expect(identifier,isNotNull);
    }
    test_parseAssignableExpression_identifier_args_dot() : void {
        let expression : any = this.parseAssignableExpression('x(y).z',false);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let propertyAccess = expression as any;
        let invocation : any = propertyAccess.target as any;
        expect(invocation.methodName.name,"x");
        expect(invocation.typeArguments,isNull);
        let argumentList : any = invocation.argumentList;
        expect(argumentList,isNotNull);
        expect(argumentList.arguments,hasLength(1));
        expect(propertyAccess.operator,isNotNull);
        expect(propertyAccess.propertyName,isNotNull);
    }
    test_parseAssignableExpression_identifier_args_dot_typeArgumentComments() : void {
        this.enableGenericMethodComments = true;
        let expression : any = this.parseAssignableExpression('x/*<E>*/(y).z',false);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let propertyAccess = expression as any;
        let invocation : any = propertyAccess.target as any;
        expect(invocation.methodName.name,"x");
        expect(invocation.typeArguments,isNotNull);
        let argumentList : any = invocation.argumentList;
        expect(argumentList,isNotNull);
        expect(argumentList.arguments,hasLength(1));
        expect(propertyAccess.operator,isNotNull);
        expect(propertyAccess.propertyName,isNotNull);
    }
    test_parseAssignableExpression_identifier_args_dot_typeArguments() : void {
        let expression : any = this.parseAssignableExpression('x<E>(y).z',false);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let propertyAccess = expression as any;
        let invocation : any = propertyAccess.target as any;
        expect(invocation.methodName.name,"x");
        expect(invocation.typeArguments,isNotNull);
        let argumentList : any = invocation.argumentList;
        expect(argumentList,isNotNull);
        expect(argumentList.arguments,hasLength(1));
        expect(propertyAccess.operator,isNotNull);
        expect(propertyAccess.propertyName,isNotNull);
    }
    test_parseAssignableExpression_identifier_dot() : void {
        let expression : any = this.parseAssignableExpression('x.y',false);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let identifier = expression as any;
        expect(identifier.prefix.name,'x');
        expect(identifier.period,isNotNull);
        expect(identifier.period.type,TokenType.PERIOD);
        expect(identifier.identifier.name,'y');
    }
    test_parseAssignableExpression_identifier_index() : void {
        let expression : any = this.parseAssignableExpression('x[y]',false);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let indexExpression = expression as any;
        expect(indexExpression.target,isNotNull);
        expect(indexExpression.leftBracket,isNotNull);
        expect(indexExpression.index,isNotNull);
        expect(indexExpression.rightBracket,isNotNull);
    }
    test_parseAssignableExpression_identifier_question_dot() : void {
        let expression : any = this.parseAssignableExpression('x?.y',false);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let propertyAccess = expression as any;
        expect(propertyAccess.target,isNotNull);
        expect(propertyAccess.operator.type,TokenType.QUESTION_PERIOD);
        expect(propertyAccess.propertyName,isNotNull);
    }
    test_parseAssignableExpression_super_dot() : void {
        let expression : any = this.parseAssignableExpression('super.y',false);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let propertyAccess = expression as any;
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SuperExpression,propertyAccess.target);
        expect(propertyAccess.operator,isNotNull);
        expect(propertyAccess.propertyName,isNotNull);
    }
    test_parseAssignableExpression_super_index() : void {
        let expression : any = this.parseAssignableExpression('super[y]',false);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let indexExpression = expression as any;
        expect(indexExpression.target,new bare.createInstance(any,null));
        expect(indexExpression.leftBracket,isNotNull);
        expect(indexExpression.index,isNotNull);
        expect(indexExpression.rightBracket,isNotNull);
    }
    test_parseAssignableSelector_dot() : void {
        let expression : any = this.parseAssignableSelector('.x',true);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let propertyAccess = expression as any;
        expect(propertyAccess.operator.type,TokenType.PERIOD);
        expect(propertyAccess.propertyName,isNotNull);
    }
    test_parseAssignableSelector_index() : void {
        let expression : any = this.parseAssignableSelector('[x]',true);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let indexExpression = expression as any;
        expect(indexExpression.leftBracket,isNotNull);
        expect(indexExpression.index,isNotNull);
        expect(indexExpression.rightBracket,isNotNull);
    }
    test_parseAssignableSelector_none() : void {
        let expression : any = this.parseAssignableSelector('',true);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let identifier = expression as any;
        expect(identifier,isNotNull);
    }
    test_parseAssignableSelector_question_dot() : void {
        let expression : any = this.parseAssignableSelector('?.x',true);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let propertyAccess = expression as any;
        expect(propertyAccess.operator.type,TokenType.QUESTION_PERIOD);
        expect(propertyAccess.propertyName,isNotNull);
    }
    test_parseAwaitExpression() : void {
        let expression : any = this.parseAwaitExpression('await x');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.awaitKeyword,isNotNull);
        expect(expression.expression,isNotNull);
    }
    test_parseBitwiseAndExpression_normal() : void {
        let expression : any = this.parseBitwiseAndExpression('x & y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let binaryExpression = expression as any;
        expect(binaryExpression.leftOperand,isNotNull);
        expect(binaryExpression.operator,isNotNull);
        expect(binaryExpression.operator.type,TokenType.AMPERSAND);
        expect(binaryExpression.rightOperand,isNotNull);
    }
    test_parseBitwiseAndExpression_super() : void {
        let expression : any = this.parseBitwiseAndExpression('super & y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let binaryExpression = expression as any;
        expect(binaryExpression.leftOperand,new bare.createInstance(any,null));
        expect(binaryExpression.operator,isNotNull);
        expect(binaryExpression.operator.type,TokenType.AMPERSAND);
        expect(binaryExpression.rightOperand,isNotNull);
    }
    test_parseBitwiseOrExpression_normal() : void {
        let expression : any = this.parseBitwiseOrExpression('x | y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let binaryExpression = expression as any;
        expect(binaryExpression.leftOperand,isNotNull);
        expect(binaryExpression.operator,isNotNull);
        expect(binaryExpression.operator.type,TokenType.BAR);
        expect(binaryExpression.rightOperand,isNotNull);
    }
    test_parseBitwiseOrExpression_super() : void {
        let expression : any = this.parseBitwiseOrExpression('super | y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let binaryExpression = expression as any;
        expect(binaryExpression.leftOperand,new bare.createInstance(any,null));
        expect(binaryExpression.operator,isNotNull);
        expect(binaryExpression.operator.type,TokenType.BAR);
        expect(binaryExpression.rightOperand,isNotNull);
    }
    test_parseBitwiseXorExpression_normal() : void {
        let expression : any = this.parseBitwiseXorExpression('x ^ y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let binaryExpression = expression as any;
        expect(binaryExpression.leftOperand,isNotNull);
        expect(binaryExpression.operator,isNotNull);
        expect(binaryExpression.operator.type,TokenType.CARET);
        expect(binaryExpression.rightOperand,isNotNull);
    }
    test_parseBitwiseXorExpression_super() : void {
        let expression : any = this.parseBitwiseXorExpression('super ^ y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let binaryExpression = expression as any;
        expect(binaryExpression.leftOperand,new bare.createInstance(any,null));
        expect(binaryExpression.operator,isNotNull);
        expect(binaryExpression.operator.type,TokenType.CARET);
        expect(binaryExpression.rightOperand,isNotNull);
    }
    test_parseCascadeSection_i() : void {
        let expression : any = this.parseCascadeSection('..[i]');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.target,isNull);
        expect(section.leftBracket,isNotNull);
        expect(section.index,isNotNull);
        expect(section.rightBracket,isNotNull);
    }
    test_parseCascadeSection_ia() : void {
        let expression : any = this.parseCascadeSection('..[i](b)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.function,new bare.createInstance(any,null));
        expect(section.typeArguments,isNull);
        expect(section.argumentList,isNotNull);
    }
    test_parseCascadeSection_ia_typeArgumentComments() : void {
        this.enableGenericMethodComments = true;
        let expression : any = this.parseCascadeSection('..[i]/*<E>*/(b)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.function,new bare.createInstance(any,null));
        expect(section.typeArguments,isNotNull);
        expect(section.argumentList,isNotNull);
    }
    test_parseCascadeSection_ia_typeArguments() : void {
        let expression : any = this.parseCascadeSection('..[i]<E>(b)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.function,new bare.createInstance(any,null));
        expect(section.typeArguments,isNotNull);
        expect(section.argumentList,isNotNull);
    }
    test_parseCascadeSection_ii() : void {
        let expression : any = this.parseCascadeSection('..a(b).c(d)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.target,new bare.createInstance(any,null));
        expect(section.operator,isNotNull);
        expect(section.methodName,isNotNull);
        expect(section.typeArguments,isNull);
        expect(section.argumentList,isNotNull);
        expect(section.argumentList.arguments,hasLength(1));
    }
    test_parseCascadeSection_ii_typeArgumentComments() : void {
        this.enableGenericMethodComments = true;
        let expression : any = this.parseCascadeSection('..a/*<E>*/(b).c/*<F>*/(d)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.target,new bare.createInstance(any,null));
        expect(section.operator,isNotNull);
        expect(section.methodName,isNotNull);
        expect(section.typeArguments,isNotNull);
        expect(section.argumentList,isNotNull);
        expect(section.argumentList.arguments,hasLength(1));
    }
    test_parseCascadeSection_ii_typeArguments() : void {
        let expression : any = this.parseCascadeSection('..a<E>(b).c<F>(d)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.target,new bare.createInstance(any,null));
        expect(section.operator,isNotNull);
        expect(section.methodName,isNotNull);
        expect(section.typeArguments,isNotNull);
        expect(section.argumentList,isNotNull);
        expect(section.argumentList.arguments,hasLength(1));
    }
    test_parseCascadeSection_p() : void {
        let expression : any = this.parseCascadeSection('..a');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.target,isNull);
        expect(section.operator,isNotNull);
        expect(section.propertyName,isNotNull);
    }
    test_parseCascadeSection_p_assign() : void {
        let expression : any = this.parseCascadeSection('..a = 3');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.leftHandSide,isNotNull);
        expect(section.operator,isNotNull);
        let rhs : any = section.rightHandSide;
        expect(rhs,isNotNull);
    }
    test_parseCascadeSection_p_assign_withCascade() : void {
        let expression : any = this.parseCascadeSection('..a = 3..m()');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.leftHandSide,isNotNull);
        expect(section.operator,isNotNull);
        let rhs : any = section.rightHandSide;
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },IntegerLiteral,rhs);
    }
    test_parseCascadeSection_p_assign_withCascade_typeArgumentComments() : void {
        this.enableGenericMethodComments = true;
        let expression : any = this.parseCascadeSection('..a = 3..m/*<E>*/()');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.leftHandSide,isNotNull);
        expect(section.operator,isNotNull);
        let rhs : any = section.rightHandSide;
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },IntegerLiteral,rhs);
    }
    test_parseCascadeSection_p_assign_withCascade_typeArguments() : void {
        let expression : any = this.parseCascadeSection('..a = 3..m<E>()');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.leftHandSide,isNotNull);
        expect(section.operator,isNotNull);
        let rhs : any = section.rightHandSide;
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },IntegerLiteral,rhs);
    }
    test_parseCascadeSection_p_builtIn() : void {
        let expression : any = this.parseCascadeSection('..as');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.target,isNull);
        expect(section.operator,isNotNull);
        expect(section.propertyName,isNotNull);
    }
    test_parseCascadeSection_pa() : void {
        let expression : any = this.parseCascadeSection('..a(b)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.target,isNull);
        expect(section.operator,isNotNull);
        expect(section.methodName,isNotNull);
        expect(section.typeArguments,isNull);
        expect(section.argumentList,isNotNull);
        expect(section.argumentList.arguments,hasLength(1));
    }
    test_parseCascadeSection_pa_typeArgumentComments() : void {
        this.enableGenericMethodComments = true;
        let expression : any = this.parseCascadeSection('..a/*<E>*/(b)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.target,isNull);
        expect(section.operator,isNotNull);
        expect(section.methodName,isNotNull);
        expect(section.typeArguments,isNotNull);
        expect(section.argumentList,isNotNull);
        expect(section.argumentList.arguments,hasLength(1));
    }
    test_parseCascadeSection_pa_typeArguments() : void {
        let expression : any = this.parseCascadeSection('..a<E>(b)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.target,isNull);
        expect(section.operator,isNotNull);
        expect(section.methodName,isNotNull);
        expect(section.typeArguments,isNotNull);
        expect(section.argumentList,isNotNull);
        expect(section.argumentList.arguments,hasLength(1));
    }
    test_parseCascadeSection_paa() : void {
        let expression : any = this.parseCascadeSection('..a(b)(c)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.function,new bare.createInstance(any,null));
        expect(section.typeArguments,isNull);
        expect(section.argumentList,isNotNull);
        expect(section.argumentList.arguments,hasLength(1));
    }
    test_parseCascadeSection_paa_typeArgumentComments() : void {
        this.enableGenericMethodComments = true;
        let expression : any = this.parseCascadeSection('..a/*<E>*/(b)/*<F>*/(c)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.function,new bare.createInstance(any,null));
        expect(section.typeArguments,isNotNull);
        expect(section.argumentList,isNotNull);
        expect(section.argumentList.arguments,hasLength(1));
    }
    test_parseCascadeSection_paa_typeArguments() : void {
        let expression : any = this.parseCascadeSection('..a<E>(b)<F>(c)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.function,new bare.createInstance(any,null));
        expect(section.typeArguments,isNotNull);
        expect(section.argumentList,isNotNull);
        expect(section.argumentList.arguments,hasLength(1));
    }
    test_parseCascadeSection_paapaa() : void {
        let expression : any = this.parseCascadeSection('..a(b)(c).d(e)(f)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.function,new bare.createInstance(any,null));
        expect(section.typeArguments,isNull);
        expect(section.argumentList,isNotNull);
        expect(section.argumentList.arguments,hasLength(1));
    }
    test_parseCascadeSection_paapaa_typeArgumentComments() : void {
        this.enableGenericMethodComments = true;
        let expression : any = this.parseCascadeSection('..a/*<E>*/(b)/*<F>*/(c).d/*<G>*/(e)/*<H>*/(f)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.function,new bare.createInstance(any,null));
        expect(section.typeArguments,isNotNull);
        expect(section.argumentList,isNotNull);
        expect(section.argumentList.arguments,hasLength(1));
    }
    test_parseCascadeSection_paapaa_typeArguments() : void {
        let expression : any = this.parseCascadeSection('..a<E>(b)<F>(c).d<G>(e)<H>(f)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.function,new bare.createInstance(any,null));
        expect(section.typeArguments,isNotNull);
        expect(section.argumentList,isNotNull);
        expect(section.argumentList.arguments,hasLength(1));
    }
    test_parseCascadeSection_pap() : void {
        let expression : any = this.parseCascadeSection('..a(b).c');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.target,isNotNull);
        expect(section.operator,isNotNull);
        expect(section.propertyName,isNotNull);
    }
    test_parseCascadeSection_pap_typeArgumentComments() : void {
        this.enableGenericMethodComments = true;
        let expression : any = this.parseCascadeSection('..a/*<E>*/(b).c');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.target,isNotNull);
        expect(section.operator,isNotNull);
        expect(section.propertyName,isNotNull);
    }
    test_parseCascadeSection_pap_typeArguments() : void {
        let expression : any = this.parseCascadeSection('..a<E>(b).c');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let section = expression as any;
        expect(section.target,isNotNull);
        expect(section.operator,isNotNull);
        expect(section.propertyName,isNotNull);
    }
    test_parseConditionalExpression() : void {
        let expression : any = this.parseConditionalExpression('x ? y : z');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.condition,isNotNull);
        expect(expression.question,isNotNull);
        expect(expression.thenExpression,isNotNull);
        expect(expression.colon,isNotNull);
        expect(expression.elseExpression,isNotNull);
    }
    test_parseConstExpression_instanceCreation() : void {
        let expression : any = this.parseConstExpression('const A()');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression,new bare.createInstance(any,null));
        let instanceCreation : any = expression;
        expect(instanceCreation.keyword,isNotNull);
        let name : any = instanceCreation.constructorName;
        expect(name,isNotNull);
        expect(name.type,isNotNull);
        expect(name.period,isNull);
        expect(name.name,isNull);
        expect(instanceCreation.argumentList,isNotNull);
    }
    test_parseConstExpression_listLiteral_typed() : void {
        let expression : any = this.parseConstExpression('const <A> []');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.constKeyword,isNotNull);
        expect(literal.typeArguments,isNotNull);
        expect(literal.leftBracket,isNotNull);
        expect(literal.elements,hasLength(0));
        expect(literal.rightBracket,isNotNull);
    }
    test_parseConstExpression_listLiteral_typed_genericComment() : void {
        this.enableGenericMethodComments = true;
        let expression : any = this.parseConstExpression('const /*<A>*/ []');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.constKeyword,isNotNull);
        expect(literal.typeArguments,isNotNull);
        expect(literal.leftBracket,isNotNull);
        expect(literal.elements,hasLength(0));
        expect(literal.rightBracket,isNotNull);
    }
    test_parseConstExpression_listLiteral_untyped() : void {
        let expression : any = this.parseConstExpression('const []');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.constKeyword,isNotNull);
        expect(literal.typeArguments,isNull);
        expect(literal.leftBracket,isNotNull);
        expect(literal.elements,hasLength(0));
        expect(literal.rightBracket,isNotNull);
    }
    test_parseConstExpression_mapLiteral_typed() : void {
        let expression : any = this.parseConstExpression('const <A, B> {}');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.leftBracket,isNotNull);
        expect(literal.entries,hasLength(0));
        expect(literal.rightBracket,isNotNull);
        expect(literal.typeArguments,isNotNull);
    }
    test_parseConstExpression_mapLiteral_typed_genericComment() : void {
        this.enableGenericMethodComments = true;
        let expression : any = this.parseConstExpression('const /*<A, B>*/ {}');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.leftBracket,isNotNull);
        expect(literal.entries,hasLength(0));
        expect(literal.rightBracket,isNotNull);
        expect(literal.typeArguments,isNotNull);
    }
    test_parseConstExpression_mapLiteral_untyped() : void {
        let expression : any = this.parseConstExpression('const {}');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.leftBracket,isNotNull);
        expect(literal.entries,hasLength(0));
        expect(literal.rightBracket,isNotNull);
        expect(literal.typeArguments,isNull);
    }
    test_parseEqualityExpression_normal() : void {
        let expression : any = this.parseEqualityExpression('x == y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.leftOperand,isNotNull);
        expect(expression.operator,isNotNull);
        expect(expression.operator.type,TokenType.EQ_EQ);
        expect(expression.rightOperand,isNotNull);
    }
    test_parseEqualityExpression_super() : void {
        let expression : any = this.parseEqualityExpression('super == y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.leftOperand,new bare.createInstance(any,null));
        expect(expression.operator,isNotNull);
        expect(expression.operator.type,TokenType.EQ_EQ);
        expect(expression.rightOperand,isNotNull);
    }
    test_parseExpression_assign() : void {
        let expression : any = this.parseExpression('x = y');
        let assignmentExpression = expression as any;
        expect(assignmentExpression.leftHandSide,isNotNull);
        expect(assignmentExpression.operator,isNotNull);
        expect(assignmentExpression.operator.type,TokenType.EQ);
        expect(assignmentExpression.rightHandSide,isNotNull);
    }
    test_parseExpression_assign_compound() : void {
        this.enableLazyAssignmentOperators = true;
        let expression : any = this.parseExpression('x ||= y');
        let assignmentExpression = expression as any;
        expect(assignmentExpression.leftHandSide,isNotNull);
        expect(assignmentExpression.operator,isNotNull);
        expect(assignmentExpression.operator.type,TokenType.BAR_BAR_EQ);
        expect(assignmentExpression.rightHandSide,isNotNull);
    }
    test_parseExpression_comparison() : void {
        let expression : any = this.parseExpression('--a.b == c');
        let binaryExpression = expression as any;
        expect(binaryExpression.leftOperand,isNotNull);
        expect(binaryExpression.operator,isNotNull);
        expect(binaryExpression.operator.type,TokenType.EQ_EQ);
        expect(binaryExpression.rightOperand,isNotNull);
    }
    test_parseExpression_function_async() : void {
        let expression : any = this.parseExpression('() async {}');
        let functionExpression = expression as any;
        expect(functionExpression.body,isNotNull);
        expect(functionExpression.body.isAsynchronous,isTrue);
        expect(functionExpression.body.isGenerator,isFalse);
        expect(functionExpression.parameters,isNotNull);
    }
    test_parseExpression_function_asyncStar() : void {
        let expression : any = this.parseExpression('() async* {}');
        let functionExpression = expression as any;
        expect(functionExpression.body,isNotNull);
        expect(functionExpression.body.isAsynchronous,isTrue);
        expect(functionExpression.body.isGenerator,isTrue);
        expect(functionExpression.parameters,isNotNull);
    }
    test_parseExpression_function_sync() : void {
        let expression : any = this.parseExpression('() {}');
        let functionExpression = expression as any;
        expect(functionExpression.body,isNotNull);
        expect(functionExpression.body.isAsynchronous,isFalse);
        expect(functionExpression.body.isGenerator,isFalse);
        expect(functionExpression.parameters,isNotNull);
    }
    test_parseExpression_function_syncStar() : void {
        let expression : any = this.parseExpression('() sync* {}');
        let functionExpression = expression as any;
        expect(functionExpression.body,isNotNull);
        expect(functionExpression.body.isAsynchronous,isFalse);
        expect(functionExpression.body.isGenerator,isTrue);
        expect(functionExpression.parameters,isNotNull);
    }
    test_parseExpression_invokeFunctionExpression() : void {
        let expression : any = this.parseExpression('(a) {return a + a;} (3)');
        let invocation = expression as any;
        expect(invocation.function,new bare.createInstance(any,null));
        let functionExpression : any = invocation.function as any;
        expect(functionExpression.parameters,isNotNull);
        expect(functionExpression.body,isNotNull);
        expect(invocation.typeArguments,isNull);
        let list : any = invocation.argumentList;
        expect(list,isNotNull);
        expect(list.arguments,hasLength(1));
    }
    test_parseExpression_nonAwait() : void {
        let expression : any = this.parseExpression('await()');
        let invocation = expression as any;
        expect(invocation.methodName.name,'await');
        expect(invocation.typeArguments,isNull);
        expect(invocation.argumentList,isNotNull);
    }
    test_parseExpression_superMethodInvocation() : void {
        let expression : any = this.parseExpression('super.m()');
        let invocation = expression as any;
        expect(invocation.target,isNotNull);
        expect(invocation.methodName,isNotNull);
        expect(invocation.typeArguments,isNull);
        expect(invocation.argumentList,isNotNull);
    }
    test_parseExpression_superMethodInvocation_typeArgumentComments() : void {
        this.enableGenericMethodComments = true;
        let expression : any = this.parseExpression('super.m/*<E>*/()');
        let invocation = expression as any;
        expect(invocation.target,isNotNull);
        expect(invocation.methodName,isNotNull);
        expect(invocation.typeArguments,isNotNull);
        expect(invocation.argumentList,isNotNull);
    }
    test_parseExpression_superMethodInvocation_typeArguments() : void {
        let expression : any = this.parseExpression('super.m<E>()');
        let invocation = expression as any;
        expect(invocation.target,isNotNull);
        expect(invocation.methodName,isNotNull);
        expect(invocation.typeArguments,isNotNull);
        expect(invocation.argumentList,isNotNull);
    }
    test_parseExpressionList_multiple() : void {
        let result : core.DartList<any> = this.parseExpressionList('1, 2, 3');
        expect(result,isNotNull);
        this.assertNoErrors();
        expect(result,hasLength(3));
    }
    test_parseExpressionList_single() : void {
        let result : core.DartList<any> = this.parseExpressionList('1');
        expect(result,isNotNull);
        this.assertNoErrors();
        expect(result,hasLength(1));
    }
    test_parseExpressionWithoutCascade_assign() : void {
        let expression : any = this.parseExpressionWithoutCascade('x = y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let assignmentExpression = expression as any;
        expect(assignmentExpression.leftHandSide,isNotNull);
        expect(assignmentExpression.operator,isNotNull);
        expect(assignmentExpression.operator.type,TokenType.EQ);
        expect(assignmentExpression.rightHandSide,isNotNull);
    }
    test_parseExpressionWithoutCascade_comparison() : void {
        let expression : any = this.parseExpressionWithoutCascade('--a.b == c');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let binaryExpression = expression as any;
        expect(binaryExpression.leftOperand,isNotNull);
        expect(binaryExpression.operator,isNotNull);
        expect(binaryExpression.operator.type,TokenType.EQ_EQ);
        expect(binaryExpression.rightOperand,isNotNull);
    }
    test_parseExpressionWithoutCascade_superMethodInvocation() : void {
        let expression : any = this.parseExpressionWithoutCascade('super.m()');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let invocation = expression as any;
        expect(invocation.target,isNotNull);
        expect(invocation.methodName,isNotNull);
        expect(invocation.typeArguments,isNull);
        expect(invocation.argumentList,isNotNull);
    }
    test_parseExpressionWithoutCascade_superMethodInvocation_typeArgumentComments() : void {
        this.enableGenericMethodComments = true;
        let expression : any = this.parseExpressionWithoutCascade('super.m/*<E>*/()');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let invocation = expression as any;
        expect(invocation.target,isNotNull);
        expect(invocation.methodName,isNotNull);
        expect(invocation.typeArguments,isNotNull);
        expect(invocation.argumentList,isNotNull);
    }
    test_parseExpressionWithoutCascade_superMethodInvocation_typeArguments() : void {
        let expression : any = this.parseExpressionWithoutCascade('super.m<E>()');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let invocation = expression as any;
        expect(invocation.target,isNotNull);
        expect(invocation.methodName,isNotNull);
        expect(invocation.typeArguments,isNotNull);
        expect(invocation.argumentList,isNotNull);
    }
    test_parseFunctionExpression_body_inExpression() : void {
        let expression : any = this.parseFunctionExpression('(int i) => i++');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.body,isNotNull);
        expect(expression.typeParameters,isNull);
        expect(expression.parameters,isNotNull);
        expect((expression.body as any).semicolon,isNull);
    }
    test_parseFunctionExpression_typeParameterComments() : void {
        this.enableGenericMethodComments = true;
        let expression : any = this.parseFunctionExpression('/*<E>*/(/*=E*/ i) => i++');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.body,isNotNull);
        expect(expression.typeParameters,isNotNull);
        expect(expression.parameters,isNotNull);
        expect((expression.body as any).semicolon,isNull);
        let p : any = op(Op.INDEX,expression.parameters.parameters,0);
        expect(p.type,isNotNull);
    }
    test_parseFunctionExpression_typeParameters() : void {
        let expression : any = this.parseFunctionExpression('<E>(E i) => i++');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.body,isNotNull);
        expect(expression.typeParameters,isNotNull);
        expect(expression.parameters,isNotNull);
        expect((expression.body as any).semicolon,isNull);
    }
    test_parseInstanceCreationExpression_qualifiedType() : void {
        let token : any = TokenFactory.tokenFromKeyword(Keyword.NEW);
        let expression : any = this.parseInstanceCreationExpression('A.B()',token);
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.keyword.keyword,Keyword.NEW);
        let name : any = expression.constructorName;
        expect(name,isNotNull);
        let type : any = name.type;
        expect(type.name.name,'A.B');
        expect(type.typeArguments,isNull);
        expect(name.period,isNull);
        expect(name.name,isNull);
        expect(expression.argumentList,isNotNull);
    }
    test_parseInstanceCreationExpression_qualifiedType_named() : void {
        let token : any = TokenFactory.tokenFromKeyword(Keyword.NEW);
        let expression : any = this.parseInstanceCreationExpression('A.B.c()',token);
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.keyword.keyword,Keyword.NEW);
        let name : any = expression.constructorName;
        expect(name,isNotNull);
        let type : any = name.type;
        expect(type,isNotNull);
        expect(type.typeArguments,isNull);
        expect(name.period,isNotNull);
        expect(name.name,isNotNull);
        expect(expression.argumentList,isNotNull);
    }
    test_parseInstanceCreationExpression_qualifiedType_named_typeArgumentComments() : void {
        this.enableGenericMethodComments = true;
        let token : any = TokenFactory.tokenFromKeyword(Keyword.NEW);
        let expression : any = this.parseInstanceCreationExpression('A.B/*<E>*/.c()',token);
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.keyword.keyword,Keyword.NEW);
        let name : any = expression.constructorName;
        expect(name,isNotNull);
        let type : any = name.type;
        expect(type,isNotNull);
        expect(type.typeArguments.arguments,hasLength(1));
        expect(name.period,isNotNull);
        expect(name.name,isNotNull);
        expect(expression.argumentList,isNotNull);
    }
    test_parseInstanceCreationExpression_qualifiedType_named_typeArguments() : void {
        let token : any = TokenFactory.tokenFromKeyword(Keyword.NEW);
        let expression : any = this.parseInstanceCreationExpression('A.B<E>.c()',token);
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.keyword.keyword,Keyword.NEW);
        let name : any = expression.constructorName;
        expect(name,isNotNull);
        let type : any = name.type;
        expect(type,isNotNull);
        expect(type.typeArguments.arguments,hasLength(1));
        expect(name.period,isNotNull);
        expect(name.name,isNotNull);
        expect(expression.argumentList,isNotNull);
    }
    test_parseInstanceCreationExpression_qualifiedType_typeArgumentComments() : void {
        this.enableGenericMethodComments = true;
        let token : any = TokenFactory.tokenFromKeyword(Keyword.NEW);
        let expression : any = this.parseInstanceCreationExpression('A.B/*<E>*/()',token);
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.keyword.keyword,Keyword.NEW);
        let name : any = expression.constructorName;
        expect(name,isNotNull);
        let type : any = name.type;
        expect(type,isNotNull);
        expect(type.typeArguments.arguments,hasLength(1));
        expect(name.period,isNull);
        expect(name.name,isNull);
        expect(expression.argumentList,isNotNull);
    }
    test_parseInstanceCreationExpression_qualifiedType_typeArguments() : void {
        let token : any = TokenFactory.tokenFromKeyword(Keyword.NEW);
        let expression : any = this.parseInstanceCreationExpression('A.B<E>()',token);
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.keyword.keyword,Keyword.NEW);
        let name : any = expression.constructorName;
        expect(name,isNotNull);
        let type : any = name.type;
        expect(type,isNotNull);
        expect(type.typeArguments.arguments,hasLength(1));
        expect(name.period,isNull);
        expect(name.name,isNull);
        expect(expression.argumentList,isNotNull);
    }
    test_parseInstanceCreationExpression_type() : void {
        let token : any = TokenFactory.tokenFromKeyword(Keyword.NEW);
        let expression : any = this.parseInstanceCreationExpression('A()',token);
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.keyword.keyword,Keyword.NEW);
        let name : any = expression.constructorName;
        expect(name,isNotNull);
        let type : any = name.type;
        expect(type,isNotNull);
        expect(type.typeArguments,isNull);
        expect(name.period,isNull);
        expect(name.name,isNull);
        expect(expression.argumentList,isNotNull);
    }
    test_parseInstanceCreationExpression_type_named() : void {
        let token : any = TokenFactory.tokenFromKeyword(Keyword.NEW);
        let expression : any = this.parseInstanceCreationExpression('A.c()',token);
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.keyword.keyword,Keyword.NEW);
        let name : any = expression.constructorName;
        expect(name,isNotNull);
        let type : any = name.type;
        expect(type,isNotNull);
        expect(type.typeArguments,isNull);
        expect(name.period,isNull);
        expect(name.name,isNull);
        expect(expression.argumentList,isNotNull);
    }
    test_parseInstanceCreationExpression_type_named_typeArgumentComments() : void {
        this.enableGenericMethodComments = true;
        let token : any = TokenFactory.tokenFromKeyword(Keyword.NEW);
        let expression : any = this.parseInstanceCreationExpression('A/*<B>*/.c()',token);
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.keyword.keyword,Keyword.NEW);
        let name : any = expression.constructorName;
        expect(name,isNotNull);
        let type : any = name.type;
        expect(type,isNotNull);
        expect(type.typeArguments.arguments,hasLength(1));
        expect(name.period,isNotNull);
        expect(name.name,isNotNull);
        expect(expression.argumentList,isNotNull);
    }
    test_parseInstanceCreationExpression_type_named_typeArguments() : void {
        let token : any = TokenFactory.tokenFromKeyword(Keyword.NEW);
        let expression : any = this.parseInstanceCreationExpression('A<B>.c()',token);
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.keyword.keyword,Keyword.NEW);
        let name : any = expression.constructorName;
        expect(name,isNotNull);
        let type : any = name.type;
        expect(type,isNotNull);
        expect(type.typeArguments.arguments,hasLength(1));
        expect(name.period,isNotNull);
        expect(name.name,isNotNull);
        expect(expression.argumentList,isNotNull);
    }
    test_parseInstanceCreationExpression_type_typeArgumentComments() : void {
        this.enableGenericMethodComments = true;
        let token : any = TokenFactory.tokenFromKeyword(Keyword.NEW);
        let expression : any = this.parseInstanceCreationExpression('A/*<B>*/()',token);
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.keyword.keyword,Keyword.NEW);
        let name : any = expression.constructorName;
        expect(name,isNotNull);
        let type : any = name.type;
        expect(type,isNotNull);
        expect(type.typeArguments.arguments,hasLength(1));
        expect(name.period,isNull);
        expect(name.name,isNull);
        expect(expression.argumentList,isNotNull);
    }
    test_parseInstanceCreationExpression_type_typeArguments() : void {
        let token : any = TokenFactory.tokenFromKeyword(Keyword.NEW);
        let expression : any = this.parseInstanceCreationExpression('A<B>()',token);
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.keyword.keyword,Keyword.NEW);
        let name : any = expression.constructorName;
        expect(name,isNotNull);
        let type : any = name.type;
        expect(type,isNotNull);
        expect(type.typeArguments.arguments,hasLength(1));
        expect(name.period,isNull);
        expect(name.name,isNull);
        expect(expression.argumentList,isNotNull);
    }
    test_parseInstanceCreationExpression_type_typeArguments_nullable() : void {
        this.enableNnbd = true;
        let token : any = TokenFactory.tokenFromKeyword(Keyword.NEW);
        let expression : any = this.parseInstanceCreationExpression('A<B?>()',token);
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.keyword.keyword,Keyword.NEW);
        let name : any = expression.constructorName;
        expect(name,isNotNull);
        let type : any = name.type;
        expect(type,isNotNull);
        expect(name.period,isNull);
        expect(name.name,isNull);
        expect(expression.argumentList,isNotNull);
        let arguments : any = type.typeArguments.arguments;
        expect(arguments,hasLength(1));
        expect((op(Op.INDEX,arguments,0) as any).question,isNotNull);
    }
    test_parseListLiteral_empty_oneToken() : void {
        let token : any = TokenFactory.tokenFromKeyword(Keyword.CONST);
        let literal : any = this.parseListLiteral(token,null,'[]');
        expect(literal,isNotNull);
        this.assertNoErrors();
        expect(literal.constKeyword.keyword,Keyword.CONST);
        expect(literal.typeArguments,isNull);
        expect(literal.leftBracket,isNotNull);
        expect(literal.elements,hasLength(0));
        expect(literal.rightBracket,isNotNull);
    }
    test_parseListLiteral_empty_oneToken_withComment() : void {
        let literal : any = this.parseListLiteral(null,null,'/* 0 */ []');
        expect(literal,isNotNull);
        this.assertNoErrors();
        expect(literal.constKeyword,isNull);
        expect(literal.typeArguments,isNull);
        let leftBracket : any = literal.leftBracket;
        expect(leftBracket,isNotNull);
        expect(leftBracket.precedingComments,isNotNull);
        expect(literal.elements,hasLength(0));
        expect(literal.rightBracket,isNotNull);
    }
    test_parseListLiteral_empty_twoTokens() : void {
        let token : any = TokenFactory.tokenFromKeyword(Keyword.CONST);
        let literal : any = this.parseListLiteral(token,null,'[ ]');
        expect(literal,isNotNull);
        this.assertNoErrors();
        expect(literal.constKeyword.keyword,Keyword.CONST);
        expect(literal.typeArguments,isNull);
        expect(literal.leftBracket,isNotNull);
        expect(literal.elements,hasLength(0));
        expect(literal.rightBracket,isNotNull);
    }
    test_parseListLiteral_multiple() : void {
        let literal : any = this.parseListLiteral(null,null,'[1, 2, 3]');
        expect(literal,isNotNull);
        this.assertNoErrors();
        expect(literal.constKeyword,isNull);
        expect(literal.typeArguments,isNull);
        expect(literal.leftBracket,isNotNull);
        expect(literal.elements,hasLength(3));
        expect(literal.rightBracket,isNotNull);
    }
    test_parseListLiteral_single() : void {
        let literal : any = this.parseListLiteral(null,null,'[1]');
        expect(literal,isNotNull);
        this.assertNoErrors();
        expect(literal.constKeyword,isNull);
        expect(literal.typeArguments,isNull);
        expect(literal.leftBracket,isNotNull);
        expect(literal.elements,hasLength(1));
        expect(literal.rightBracket,isNotNull);
    }
    test_parseListLiteral_single_withTypeArgument() : void {
        let literal : any = this.parseListLiteral(null,'<int>','[1]');
        expect(literal,isNotNull);
        this.assertNoErrors();
        expect(literal.constKeyword,isNull);
        expect(literal.typeArguments,isNotNull);
        expect(literal.leftBracket,isNotNull);
        expect(literal.elements,hasLength(1));
        expect(literal.rightBracket,isNotNull);
    }
    test_parseListOrMapLiteral_list_noType() : void {
        let literal : any = this.parseListOrMapLiteral(null,'[1]');
        expect(literal,isNotNull);
        this.assertNoErrors();
        let listLiteral = literal as any;
        expect(listLiteral.constKeyword,isNull);
        expect(listLiteral.typeArguments,isNull);
        expect(listLiteral.leftBracket,isNotNull);
        expect(listLiteral.elements,hasLength(1));
        expect(listLiteral.rightBracket,isNotNull);
    }
    test_parseListOrMapLiteral_list_type() : void {
        let literal : any = this.parseListOrMapLiteral(null,'<int> [1]');
        expect(literal,isNotNull);
        this.assertNoErrors();
        let listLiteral = literal as any;
        expect(listLiteral.constKeyword,isNull);
        expect(listLiteral.typeArguments,isNotNull);
        expect(listLiteral.leftBracket,isNotNull);
        expect(listLiteral.elements,hasLength(1));
        expect(listLiteral.rightBracket,isNotNull);
    }
    test_parseListOrMapLiteral_map_noType() : void {
        let literal : any = this.parseListOrMapLiteral(null,"{'1' : 1}");
        expect(literal,isNotNull);
        this.assertNoErrors();
        let mapLiteral = literal as any;
        expect(mapLiteral.constKeyword,isNull);
        expect(mapLiteral.typeArguments,isNull);
        expect(mapLiteral.leftBracket,isNotNull);
        expect(mapLiteral.entries,hasLength(1));
        expect(mapLiteral.rightBracket,isNotNull);
    }
    test_parseListOrMapLiteral_map_type() : void {
        let literal : any = this.parseListOrMapLiteral(null,"<String, int> {'1' : 1}");
        expect(literal,isNotNull);
        this.assertNoErrors();
        let mapLiteral = literal as any;
        expect(mapLiteral.constKeyword,isNull);
        expect(mapLiteral.typeArguments,isNotNull);
        expect(mapLiteral.leftBracket,isNotNull);
        expect(mapLiteral.entries,hasLength(1));
        expect(mapLiteral.rightBracket,isNotNull);
    }
    test_parseLogicalAndExpression() : void {
        let expression : any = this.parseLogicalAndExpression('x && y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let binaryExpression = expression as any;
        expect(binaryExpression.leftOperand,isNotNull);
        expect(binaryExpression.operator,isNotNull);
        expect(binaryExpression.operator.type,TokenType.AMPERSAND_AMPERSAND);
        expect(binaryExpression.rightOperand,isNotNull);
    }
    test_parseLogicalOrExpression() : void {
        let expression : any = this.parseLogicalOrExpression('x || y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let binaryExpression = expression as any;
        expect(binaryExpression.leftOperand,isNotNull);
        expect(binaryExpression.operator,isNotNull);
        expect(binaryExpression.operator.type,TokenType.BAR_BAR);
        expect(binaryExpression.rightOperand,isNotNull);
    }
    test_parseMapLiteral_empty() : void {
        let token : any = TokenFactory.tokenFromKeyword(Keyword.CONST);
        let literal : any = this.parseMapLiteral(token,'<String, int>','{}');
        expect(literal,isNotNull);
        this.assertNoErrors();
        expect(literal.constKeyword.keyword,Keyword.CONST);
        expect(literal.typeArguments,isNotNull);
        expect(literal.leftBracket,isNotNull);
        expect(literal.entries,hasLength(0));
        expect(literal.rightBracket,isNotNull);
    }
    test_parseMapLiteral_multiple() : void {
        let literal : any = this.parseMapLiteral(null,null,"{'a' : b, 'x' : y}");
        expect(literal,isNotNull);
        this.assertNoErrors();
        expect(literal.leftBracket,isNotNull);
        expect(literal.entries,hasLength(2));
        expect(literal.rightBracket,isNotNull);
    }
    test_parseMapLiteral_single() : void {
        let literal : any = this.parseMapLiteral(null,null,"{'x' : y}");
        expect(literal,isNotNull);
        this.assertNoErrors();
        expect(literal.leftBracket,isNotNull);
        expect(literal.entries,hasLength(1));
        expect(literal.rightBracket,isNotNull);
    }
    test_parseMapLiteralEntry_complex() : void {
        let entry : any = this.parseMapLiteralEntry('2 + 2 : y');
        expect(entry,isNotNull);
        this.assertNoErrors();
        expect(entry.key,isNotNull);
        expect(entry.separator,isNotNull);
        expect(entry.value,isNotNull);
    }
    test_parseMapLiteralEntry_int() : void {
        let entry : any = this.parseMapLiteralEntry('0 : y');
        expect(entry,isNotNull);
        this.assertNoErrors();
        expect(entry.key,isNotNull);
        expect(entry.separator,isNotNull);
        expect(entry.value,isNotNull);
    }
    test_parseMapLiteralEntry_string() : void {
        let entry : any = this.parseMapLiteralEntry("'x' : y");
        expect(entry,isNotNull);
        this.assertNoErrors();
        expect(entry.key,isNotNull);
        expect(entry.separator,isNotNull);
        expect(entry.value,isNotNull);
    }
    test_parseMultiplicativeExpression_normal() : void {
        let expression : any = this.parseMultiplicativeExpression('x * y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let binaryExpression = expression as any;
        expect(binaryExpression.leftOperand,isNotNull);
        expect(binaryExpression.operator,isNotNull);
        expect(binaryExpression.operator.type,TokenType.STAR);
        expect(binaryExpression.rightOperand,isNotNull);
    }
    test_parseMultiplicativeExpression_super() : void {
        let expression : any = this.parseMultiplicativeExpression('super * y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let binaryExpression = expression as any;
        expect(binaryExpression.leftOperand,new bare.createInstance(any,null));
        expect(binaryExpression.operator,isNotNull);
        expect(binaryExpression.operator.type,TokenType.STAR);
        expect(binaryExpression.rightOperand,isNotNull);
    }
    test_parseNewExpression() : void {
        let expression : any = this.parseNewExpression('new A()');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.keyword,isNotNull);
        let name : any = expression.constructorName;
        expect(name,isNotNull);
        expect(name.type,isNotNull);
        expect(name.period,isNull);
        expect(name.name,isNull);
        expect(expression.argumentList,isNotNull);
    }
    test_parsePostfixExpression_decrement() : void {
        let expression : any = this.parsePostfixExpression('i--');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let postfixExpression = expression as any;
        expect(postfixExpression.operand,isNotNull);
        expect(postfixExpression.operator,isNotNull);
        expect(postfixExpression.operator.type,TokenType.MINUS_MINUS);
    }
    test_parsePostfixExpression_increment() : void {
        let expression : any = this.parsePostfixExpression('i++');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let postfixExpression = expression as any;
        expect(postfixExpression.operand,isNotNull);
        expect(postfixExpression.operator,isNotNull);
        expect(postfixExpression.operator.type,TokenType.PLUS_PLUS);
    }
    test_parsePostfixExpression_none_indexExpression() : void {
        let expression : any = this.parsePostfixExpression('a[0]');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let indexExpression = expression as any;
        expect(indexExpression.target,isNotNull);
        expect(indexExpression.index,isNotNull);
    }
    test_parsePostfixExpression_none_methodInvocation() : void {
        let expression : any = this.parsePostfixExpression('a.m()');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let methodInvocation = expression as any;
        expect(methodInvocation.target,isNotNull);
        expect(methodInvocation.operator.type,TokenType.PERIOD);
        expect(methodInvocation.methodName,isNotNull);
        expect(methodInvocation.typeArguments,isNull);
        expect(methodInvocation.argumentList,isNotNull);
    }
    test_parsePostfixExpression_none_methodInvocation_question_dot() : void {
        let expression : any = this.parsePostfixExpression('a?.m()');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let methodInvocation = expression as any;
        expect(methodInvocation.target,isNotNull);
        expect(methodInvocation.operator.type,TokenType.QUESTION_PERIOD);
        expect(methodInvocation.methodName,isNotNull);
        expect(methodInvocation.typeArguments,isNull);
        expect(methodInvocation.argumentList,isNotNull);
    }
    test_parsePostfixExpression_none_methodInvocation_question_dot_typeArgumentComments() : void {
        this.enableGenericMethodComments = true;
        let expression : any = this.parsePostfixExpression('a?.m/*<E>*/()');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let methodInvocation = expression as any;
        expect(methodInvocation.target,isNotNull);
        expect(methodInvocation.operator.type,TokenType.QUESTION_PERIOD);
        expect(methodInvocation.methodName,isNotNull);
        expect(methodInvocation.typeArguments,isNotNull);
        expect(methodInvocation.argumentList,isNotNull);
    }
    test_parsePostfixExpression_none_methodInvocation_question_dot_typeArguments() : void {
        let expression : any = this.parsePostfixExpression('a?.m<E>()');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let methodInvocation = expression as any;
        expect(methodInvocation.target,isNotNull);
        expect(methodInvocation.operator.type,TokenType.QUESTION_PERIOD);
        expect(methodInvocation.methodName,isNotNull);
        expect(methodInvocation.typeArguments,isNotNull);
        expect(methodInvocation.argumentList,isNotNull);
    }
    test_parsePostfixExpression_none_methodInvocation_typeArgumentComments() : void {
        this.enableGenericMethodComments = true;
        let expression : any = this.parsePostfixExpression('a.m/*<E>*/()');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let methodInvocation = expression as any;
        expect(methodInvocation.target,isNotNull);
        expect(methodInvocation.operator.type,TokenType.PERIOD);
        expect(methodInvocation.methodName,isNotNull);
        expect(methodInvocation.typeArguments,isNotNull);
        expect(methodInvocation.argumentList,isNotNull);
    }
    test_parsePostfixExpression_none_methodInvocation_typeArguments() : void {
        let expression : any = this.parsePostfixExpression('a.m<E>()');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let methodInvocation = expression as any;
        expect(methodInvocation.target,isNotNull);
        expect(methodInvocation.operator.type,TokenType.PERIOD);
        expect(methodInvocation.methodName,isNotNull);
        expect(methodInvocation.typeArguments,isNotNull);
        expect(methodInvocation.argumentList,isNotNull);
    }
    test_parsePostfixExpression_none_propertyAccess() : void {
        let expression : any = this.parsePostfixExpression('a.b');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let identifier = expression as any;
        expect(identifier.prefix,isNotNull);
        expect(identifier.identifier,isNotNull);
    }
    test_parsePrefixedIdentifier_noPrefix() : void {
        let lexeme : string = "bar";
        let identifier : any = this.parsePrefixedIdentifier(lexeme);
        expect(identifier,isNotNull);
        this.assertNoErrors();
        let simpleIdentifier = identifier as any;
        expect(simpleIdentifier.token,isNotNull);
        expect(simpleIdentifier.name,lexeme);
    }
    test_parsePrefixedIdentifier_prefix() : void {
        let lexeme : string = "foo.bar";
        let identifier : any = this.parsePrefixedIdentifier(lexeme);
        expect(identifier,isNotNull);
        this.assertNoErrors();
        let prefixedIdentifier = identifier as any;
        expect(prefixedIdentifier.prefix.name,"foo");
        expect(prefixedIdentifier.period,isNotNull);
        expect(prefixedIdentifier.identifier.name,"bar");
    }
    test_parsePrimaryExpression_const() : void {
        let expression : any = this.parsePrimaryExpression('const A()');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression,isNotNull);
    }
    test_parsePrimaryExpression_double() : void {
        let doubleLiteral : string = "3.2e4";
        let expression : any = this.parsePrimaryExpression(doubleLiteral);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.literal,isNotNull);
        expect(literal.value,core.DartDouble.parse(doubleLiteral));
    }
    test_parsePrimaryExpression_false() : void {
        let expression : any = this.parsePrimaryExpression('false');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.literal,isNotNull);
        expect(literal.value,isFalse);
    }
    test_parsePrimaryExpression_function_arguments() : void {
        let expression : any = this.parsePrimaryExpression('(int i) => i + 1');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let functionExpression = expression as any;
        expect(functionExpression.parameters,isNotNull);
        expect(functionExpression.body,isNotNull);
    }
    test_parsePrimaryExpression_function_noArguments() : void {
        let expression : any = this.parsePrimaryExpression('() => 42');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let functionExpression = expression as any;
        expect(functionExpression.parameters,isNotNull);
        expect(functionExpression.body,isNotNull);
    }
    test_parsePrimaryExpression_genericFunctionExpression() : void {
        let expression : any = this.parsePrimaryExpression('<X, Y>(Map<X, Y> m, X x) => m[x]');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let functionExpression = expression as any;
        expect(functionExpression.typeParameters,isNotNull);
    }
    test_parsePrimaryExpression_hex() : void {
        let hexLiteral : string = "3F";
        let expression : any = this.parsePrimaryExpression(`0x${hexLiteral}`);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.literal,isNotNull);
        expect(literal.value,core.DartInt.parse(hexLiteral,{
            radix : 16}));
    }
    test_parsePrimaryExpression_identifier() : void {
        let expression : any = this.parsePrimaryExpression('a');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let identifier = expression as any;
        expect(identifier,isNotNull);
    }
    test_parsePrimaryExpression_int() : void {
        let intLiteral : string = "472";
        let expression : any = this.parsePrimaryExpression(intLiteral);
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.literal,isNotNull);
        expect(literal.value,core.DartInt.parse(intLiteral));
    }
    test_parsePrimaryExpression_listLiteral() : void {
        let expression : any = this.parsePrimaryExpression('[ ]');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal,isNotNull);
    }
    test_parsePrimaryExpression_listLiteral_index() : void {
        let expression : any = this.parsePrimaryExpression('[]');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal,isNotNull);
    }
    test_parsePrimaryExpression_listLiteral_typed() : void {
        let expression : any = this.parsePrimaryExpression('<A>[ ]');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.typeArguments,isNotNull);
        expect(literal.typeArguments.arguments,hasLength(1));
    }
    test_parsePrimaryExpression_listLiteral_typed_genericComment() : void {
        this.enableGenericMethodComments = true;
        let expression : any = this.parsePrimaryExpression('/*<A>*/[ ]');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.typeArguments,isNotNull);
        expect(literal.typeArguments.arguments,hasLength(1));
    }
    test_parsePrimaryExpression_mapLiteral() : void {
        let expression : any = this.parsePrimaryExpression('{}');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.typeArguments,isNull);
        expect(literal,isNotNull);
    }
    test_parsePrimaryExpression_mapLiteral_typed() : void {
        let expression : any = this.parsePrimaryExpression('<A, B>{}');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.typeArguments,isNotNull);
        expect(literal.typeArguments.arguments,hasLength(2));
    }
    test_parsePrimaryExpression_mapLiteral_typed_genericComment() : void {
        this.enableGenericMethodComments = true;
        let expression : any = this.parsePrimaryExpression('/*<A, B>*/{}');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.typeArguments,isNotNull);
        expect(literal.typeArguments.arguments,hasLength(2));
    }
    test_parsePrimaryExpression_new() : void {
        let expression : any = this.parsePrimaryExpression('new A()');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let creation = expression as any;
        expect(creation,isNotNull);
    }
    test_parsePrimaryExpression_null() : void {
        let expression : any = this.parsePrimaryExpression('null');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression,new bare.createInstance(any,null));
        let literal : any = expression;
        expect(literal.literal,isNotNull);
    }
    test_parsePrimaryExpression_parenthesized() : void {
        let expression : any = this.parsePrimaryExpression('(x)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let parens = expression as any;
        expect(parens,isNotNull);
    }
    test_parsePrimaryExpression_string() : void {
        let expression : any = this.parsePrimaryExpression('"string"');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.isMultiline,isFalse);
        expect(literal.isRaw,isFalse);
        expect(literal.value,"string");
    }
    test_parsePrimaryExpression_string_multiline() : void {
        let expression : any = this.parsePrimaryExpression("'''string'''");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.isMultiline,isTrue);
        expect(literal.isRaw,isFalse);
        expect(literal.value,"string");
    }
    test_parsePrimaryExpression_string_raw() : void {
        let expression : any = this.parsePrimaryExpression("r'string'");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.isMultiline,isFalse);
        expect(literal.isRaw,isTrue);
        expect(literal.value,"string");
    }
    test_parsePrimaryExpression_super() : void {
        let expression : any = this.parsePrimaryExpression('super.x');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let propertyAccess = expression as any;
        expect(is(propertyAccess.target, any),isTrue);
        expect(propertyAccess.operator,isNotNull);
        expect(propertyAccess.operator.type,TokenType.PERIOD);
        expect(propertyAccess.propertyName,isNotNull);
    }
    test_parsePrimaryExpression_this() : void {
        let expression : any = this.parsePrimaryExpression('this');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let thisExpression = expression as any;
        expect(thisExpression.thisKeyword,isNotNull);
    }
    test_parsePrimaryExpression_true() : void {
        let expression : any = this.parsePrimaryExpression('true');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.literal,isNotNull);
        expect(literal.value,isTrue);
    }
    test_parseRedirectingConstructorInvocation_named() : void {
        let invocation = this.parseConstructorInitializer('this.a()') as any;
        this.assertNoErrors();
        expect(invocation.argumentList,isNotNull);
        expect(invocation.constructorName,isNotNull);
        expect(invocation.thisKeyword,isNotNull);
        expect(invocation.period,isNotNull);
    }
    test_parseRedirectingConstructorInvocation_unnamed() : void {
        let invocation = this.parseConstructorInitializer('this()') as any;
        this.assertNoErrors();
        expect(invocation.argumentList,isNotNull);
        expect(invocation.constructorName,isNull);
        expect(invocation.thisKeyword,isNotNull);
        expect(invocation.period,isNull);
    }
    test_parseRelationalExpression_as_functionType_noReturnType() : void {
        let expression : any = this.parseRelationalExpression('x as Function(int)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let asExpression = expression as any;
        expect(asExpression.expression,isNotNull);
        expect(asExpression.asOperator,isNotNull);
        expect(asExpression.type,new bare.createInstance(any,null));
    }
    test_parseRelationalExpression_as_functionType_returnType() : void {
        let expression : any = this.parseRelationalExpression('x as String Function(int)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let asExpression = expression as any;
        expect(asExpression.expression,isNotNull);
        expect(asExpression.asOperator,isNotNull);
        expect(asExpression.type,new bare.createInstance(any,null));
    }
    test_parseRelationalExpression_as_generic() : void {
        let expression : any = this.parseRelationalExpression('x as C<D>');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let asExpression = expression as any;
        expect(asExpression.expression,isNotNull);
        expect(asExpression.asOperator,isNotNull);
        expect(asExpression.type,new bare.createInstance(any,null));
    }
    test_parseRelationalExpression_as_nullable() : void {
        this.enableNnbd = true;
        let expression : any = this.parseRelationalExpression('x as Y?)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let asExpression = expression as any;
        expect(asExpression.expression,isNotNull);
        expect(asExpression.asOperator,isNotNull);
        expect(asExpression.type,new bare.createInstance(any,null));
    }
    test_parseRelationalExpression_as_simple() : void {
        let expression : any = this.parseRelationalExpression('x as Y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let asExpression = expression as any;
        expect(asExpression.expression,isNotNull);
        expect(asExpression.asOperator,isNotNull);
        expect(asExpression.type,new bare.createInstance(any,null));
    }
    test_parseRelationalExpression_as_simple_function() : void {
        let expression : any = this.parseRelationalExpression('x as Function');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let asExpression = expression as any;
        expect(asExpression.expression,isNotNull);
        expect(asExpression.asOperator,isNotNull);
        expect(asExpression.type,new bare.createInstance(any,null));
    }
    test_parseRelationalExpression_is() : void {
        let expression : any = this.parseRelationalExpression('x is y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let isExpression = expression as any;
        expect(isExpression.expression,isNotNull);
        expect(isExpression.isOperator,isNotNull);
        expect(isExpression.notOperator,isNull);
        expect(isExpression.type,isNotNull);
    }
    test_parseRelationalExpression_is_nullable() : void {
        this.enableNnbd = true;
        let expression : any = this.parseRelationalExpression('x is y?)');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let isExpression = expression as any;
        expect(isExpression.expression,isNotNull);
        expect(isExpression.isOperator,isNotNull);
        expect(isExpression.notOperator,isNull);
        expect(isExpression.type,isNotNull);
    }
    test_parseRelationalExpression_isNot() : void {
        let expression : any = this.parseRelationalExpression('x is! y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let isExpression = expression as any;
        expect(isExpression.expression,isNotNull);
        expect(isExpression.isOperator,isNotNull);
        expect(isExpression.notOperator,isNotNull);
        expect(isExpression.type,isNotNull);
    }
    test_parseRelationalExpression_normal() : void {
        let expression : any = this.parseRelationalExpression('x < y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let binaryExpression = expression as any;
        expect(binaryExpression.leftOperand,isNotNull);
        expect(binaryExpression.operator,isNotNull);
        expect(binaryExpression.operator.type,TokenType.LT);
        expect(binaryExpression.rightOperand,isNotNull);
    }
    test_parseRelationalExpression_super() : void {
        let expression : any = this.parseRelationalExpression('super < y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let binaryExpression = expression as any;
        expect(binaryExpression.leftOperand,isNotNull);
        expect(binaryExpression.operator,isNotNull);
        expect(binaryExpression.operator.type,TokenType.LT);
        expect(binaryExpression.rightOperand,isNotNull);
    }
    test_parseRethrowExpression() : void {
        let expression : any = this.parseRethrowExpression('rethrow');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.rethrowKeyword,isNotNull);
    }
    test_parseShiftExpression_normal() : void {
        let expression : any = this.parseShiftExpression('x << y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.leftOperand,isNotNull);
        expect(expression.operator,isNotNull);
        expect(expression.operator.type,TokenType.LT_LT);
        expect(expression.rightOperand,isNotNull);
    }
    test_parseShiftExpression_super() : void {
        let expression : any = this.parseShiftExpression('super << y');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.leftOperand,isNotNull);
        expect(expression.operator,isNotNull);
        expect(expression.operator.type,TokenType.LT_LT);
        expect(expression.rightOperand,isNotNull);
    }
    test_parseSimpleIdentifier1_normalIdentifier() : void {
    }
    test_parseSimpleIdentifier_builtInIdentifier() : void {
        let lexeme : string = "as";
        let identifier : any = this.parseSimpleIdentifier(lexeme);
        expect(identifier,isNotNull);
        this.assertNoErrors();
        expect(identifier.token,isNotNull);
        expect(identifier.name,lexeme);
    }
    test_parseSimpleIdentifier_normalIdentifier() : void {
        let lexeme : string = "foo";
        let identifier : any = this.parseSimpleIdentifier(lexeme);
        expect(identifier,isNotNull);
        this.assertNoErrors();
        expect(identifier.token,isNotNull);
        expect(identifier.name,lexeme);
    }
    test_parseStringLiteral_adjacent() : void {
        let expression : any = this.parseStringLiteral("'a' 'b'");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        let strings : any = literal.strings;
        expect(strings,hasLength(2));
        let firstString : any = op(Op.INDEX,strings,0);
        let secondString : any = op(Op.INDEX,strings,1);
        expect((firstString as any).value,"a");
        expect((secondString as any).value,"b");
    }
    test_parseStringLiteral_endsWithInterpolation() : void {
        let expression : any = this.parseStringLiteral("'x$y'");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let interpolation = expression as any;
        expect(interpolation.elements,hasLength(3));
        expect(op(Op.INDEX,interpolation.elements,0),new bare.createInstance(any,null));
        let element0 : any = op(Op.INDEX,interpolation.elements,0);
        expect(element0.value,'x');
        expect(op(Op.INDEX,interpolation.elements,1),new bare.createInstance(any,null));
        let element1 : any = op(Op.INDEX,interpolation.elements,1);
        expect(element1.expression,new bare.createInstance(any,null));
        expect(op(Op.INDEX,interpolation.elements,2),new bare.createInstance(any,null));
        let element2 : any = op(Op.INDEX,interpolation.elements,2);
        expect(element2.value,'');
    }
    test_parseStringLiteral_interpolated() : void {
        let expression : any = this.parseStringLiteral("'a ${b} c $this d'");
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression,new bare.createInstance(any,null));
        let literal : any = expression;
        let elements : any = literal.elements;
        expect(elements,hasLength(5));
        expect(is(op(Op.INDEX,elements,0), any),isTrue);
        expect(is(op(Op.INDEX,elements,1), any),isTrue);
        expect(is(op(Op.INDEX,elements,2), any),isTrue);
        expect(is(op(Op.INDEX,elements,3), any),isTrue);
        expect(is(op(Op.INDEX,elements,4), any),isTrue);
    }
    test_parseStringLiteral_multiline_encodedSpace() : void {
        let expression : any = this.parseStringLiteral("'''\x20\na'''");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.literal,isNotNull);
        expect(literal.value," \na");
    }
    test_parseStringLiteral_multiline_endsWithInterpolation() : void {
        let expression : any = this.parseStringLiteral("'''x$y'''");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let interpolation = expression as any;
        expect(interpolation.elements,hasLength(3));
        expect(op(Op.INDEX,interpolation.elements,0),new bare.createInstance(any,null));
        let element0 : any = op(Op.INDEX,interpolation.elements,0);
        expect(element0.value,'x');
        expect(op(Op.INDEX,interpolation.elements,1),new bare.createInstance(any,null));
        let element1 : any = op(Op.INDEX,interpolation.elements,1);
        expect(element1.expression,new bare.createInstance(any,null));
        expect(op(Op.INDEX,interpolation.elements,2),new bare.createInstance(any,null));
        let element2 : any = op(Op.INDEX,interpolation.elements,2);
        expect(element2.value,'');
    }
    test_parseStringLiteral_multiline_escapedBackslash() : void {
        let expression : any = this.parseStringLiteral("'''\\\na'''");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.literal,isNotNull);
        expect(literal.value,"\\na");
    }
    test_parseStringLiteral_multiline_escapedBackslash_raw() : void {
        let expression : any = this.parseStringLiteral("r'''\\\na'''");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.literal,isNotNull);
        expect(literal.value,"\\\na");
    }
    test_parseStringLiteral_multiline_escapedEolMarker() : void {
        let expression : any = this.parseStringLiteral("'''\\na'''");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.literal,isNotNull);
        expect(literal.value,"a");
    }
    test_parseStringLiteral_multiline_escapedEolMarker_raw() : void {
        let expression : any = this.parseStringLiteral("r'''\\na'''");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.literal,isNotNull);
        expect(literal.value,"a");
    }
    test_parseStringLiteral_multiline_escapedSpaceAndEolMarker() : void {
        let expression : any = this.parseStringLiteral("'''\ \\na'''");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.literal,isNotNull);
        expect(literal.value,"a");
    }
    test_parseStringLiteral_multiline_escapedSpaceAndEolMarker_raw() : void {
        let expression : any = this.parseStringLiteral("r'''\ \\na'''");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.literal,isNotNull);
        expect(literal.value,"a");
    }
    test_parseStringLiteral_multiline_escapedTab() : void {
        let expression : any = this.parseStringLiteral("'''\t\na'''");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.literal,isNotNull);
        expect(literal.value,"	\na");
    }
    test_parseStringLiteral_multiline_escapedTab_raw() : void {
        let expression : any = this.parseStringLiteral("r'''\t\na'''");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.literal,isNotNull);
        expect(literal.value,"\t\na");
    }
    test_parseStringLiteral_multiline_quoteAfterInterpolation() : void {
        let expression : any = this.parseStringLiteral("'''$x'y'''");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let interpolation = expression as any;
        expect(interpolation.elements,hasLength(3));
        expect(op(Op.INDEX,interpolation.elements,0),new bare.createInstance(any,null));
        let element0 : any = op(Op.INDEX,interpolation.elements,0);
        expect(element0.value,'');
        expect(op(Op.INDEX,interpolation.elements,1),new bare.createInstance(any,null));
        let element1 : any = op(Op.INDEX,interpolation.elements,1);
        expect(element1.expression,new bare.createInstance(any,null));
        expect(op(Op.INDEX,interpolation.elements,2),new bare.createInstance(any,null));
        let element2 : any = op(Op.INDEX,interpolation.elements,2);
        expect(element2.value,"'y");
    }
    test_parseStringLiteral_multiline_startsWithInterpolation() : void {
        let expression : any = this.parseStringLiteral("'''${x}y'''");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let interpolation = expression as any;
        expect(interpolation.elements,hasLength(3));
        expect(op(Op.INDEX,interpolation.elements,0),new bare.createInstance(any,null));
        let element0 : any = op(Op.INDEX,interpolation.elements,0);
        expect(element0.value,'');
        expect(op(Op.INDEX,interpolation.elements,1),new bare.createInstance(any,null));
        let element1 : any = op(Op.INDEX,interpolation.elements,1);
        expect(element1.expression,new bare.createInstance(any,null));
        expect(op(Op.INDEX,interpolation.elements,2),new bare.createInstance(any,null));
        let element2 : any = op(Op.INDEX,interpolation.elements,2);
        expect(element2.value,'y');
    }
    test_parseStringLiteral_multiline_twoSpaces() : void {
        let expression : any = this.parseStringLiteral("'''  \na'''");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.literal,isNotNull);
        expect(literal.value,"a");
    }
    test_parseStringLiteral_multiline_twoSpaces_raw() : void {
        let expression : any = this.parseStringLiteral("r'''  \na'''");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.literal,isNotNull);
        expect(literal.value,"a");
    }
    test_parseStringLiteral_multiline_untrimmed() : void {
        let expression : any = this.parseStringLiteral("''' a\nb'''");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.literal,isNotNull);
        expect(literal.value," a\nb");
    }
    test_parseStringLiteral_quoteAfterInterpolation() : void {
        let expression : any = this.parseStringLiteral("'$x\"'");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let interpolation = expression as any;
        expect(interpolation.elements,hasLength(3));
        expect(op(Op.INDEX,interpolation.elements,0),new bare.createInstance(any,null));
        let element0 : any = op(Op.INDEX,interpolation.elements,0);
        expect(element0.value,'');
        expect(op(Op.INDEX,interpolation.elements,1),new bare.createInstance(any,null));
        let element1 : any = op(Op.INDEX,interpolation.elements,1);
        expect(element1.expression,new bare.createInstance(any,null));
        expect(op(Op.INDEX,interpolation.elements,2),new bare.createInstance(any,null));
        let element2 : any = op(Op.INDEX,interpolation.elements,2);
        expect(element2.value,'"');
    }
    test_parseStringLiteral_single() : void {
        let expression : any = this.parseStringLiteral("'a'");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let literal = expression as any;
        expect(literal.literal,isNotNull);
        expect(literal.value,"a");
    }
    test_parseStringLiteral_startsWithInterpolation() : void {
        let expression : any = this.parseStringLiteral("'${x}y'");
        expect(expression,isNotNull);
        this.assertNoErrors();
        let interpolation = expression as any;
        expect(interpolation.elements,hasLength(3));
        expect(op(Op.INDEX,interpolation.elements,0),new bare.createInstance(any,null));
        let element0 : any = op(Op.INDEX,interpolation.elements,0);
        expect(element0.value,'');
        expect(op(Op.INDEX,interpolation.elements,1),new bare.createInstance(any,null));
        let element1 : any = op(Op.INDEX,interpolation.elements,1);
        expect(element1.expression,new bare.createInstance(any,null));
        expect(op(Op.INDEX,interpolation.elements,2),new bare.createInstance(any,null));
        let element2 : any = op(Op.INDEX,interpolation.elements,2);
        expect(element2.value,'y');
    }
    test_parseSuperConstructorInvocation_named() : void {
        let invocation = this.parseConstructorInitializer('super.a()') as any;
        expect(invocation,isNotNull);
        this.assertNoErrors();
        expect(invocation.argumentList,isNotNull);
        expect(invocation.constructorName,isNotNull);
        expect(invocation.superKeyword,isNotNull);
        expect(invocation.period,isNotNull);
    }
    test_parseSuperConstructorInvocation_unnamed() : void {
        let invocation = this.parseConstructorInitializer('super()') as any;
        this.assertNoErrors();
        expect(invocation.argumentList,isNotNull);
        expect(invocation.constructorName,isNull);
        expect(invocation.superKeyword,isNotNull);
        expect(invocation.period,isNull);
    }
    test_parseSymbolLiteral_builtInIdentifier() : void {
        let literal : any = this.parseSymbolLiteral('#dynamic.static.abstract');
        expect(literal,isNotNull);
        this.assertNoErrors();
        expect(literal.poundSign,isNotNull);
        let components : core.DartList<any> = literal.components;
        expect(components,hasLength(3));
        expect(components[0].lexeme,"dynamic");
        expect(components[1].lexeme,"static");
        expect(components[2].lexeme,"abstract");
    }
    test_parseSymbolLiteral_multiple() : void {
        let literal : any = this.parseSymbolLiteral('#a.b.c');
        expect(literal,isNotNull);
        this.assertNoErrors();
        expect(literal.poundSign,isNotNull);
        let components : core.DartList<any> = literal.components;
        expect(components,hasLength(3));
        expect(components[0].lexeme,"a");
        expect(components[1].lexeme,"b");
        expect(components[2].lexeme,"c");
    }
    test_parseSymbolLiteral_operator() : void {
        let literal : any = this.parseSymbolLiteral('#==');
        expect(literal,isNotNull);
        this.assertNoErrors();
        expect(literal.poundSign,isNotNull);
        let components : core.DartList<any> = literal.components;
        expect(components,hasLength(1));
        expect(components[0].lexeme,"==");
    }
    test_parseSymbolLiteral_single() : void {
        let literal : any = this.parseSymbolLiteral('#a');
        expect(literal,isNotNull);
        this.assertNoErrors();
        expect(literal.poundSign,isNotNull);
        let components : core.DartList<any> = literal.components;
        expect(components,hasLength(1));
        expect(components[0].lexeme,"a");
    }
    test_parseSymbolLiteral_void() : void {
        let literal : any = this.parseSymbolLiteral('#void');
        expect(literal,isNotNull);
        this.assertNoErrors();
        expect(literal.poundSign,isNotNull);
        let components : core.DartList<any> = literal.components;
        expect(components,hasLength(1));
        expect(components[0].lexeme,"void");
    }
    test_parseThrowExpression() : void {
        let expression : any = this.parseThrowExpression('throw x');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let throwExpression = expression as any;
        expect(throwExpression.throwKeyword,isNotNull);
        expect(throwExpression.expression,isNotNull);
    }
    test_parseThrowExpressionWithoutCascade() : void {
        let expression : any = this.parseThrowExpressionWithoutCascade('throw x');
        expect(expression,isNotNull);
        this.assertNoErrors();
        let throwExpression = expression as any;
        expect(throwExpression.throwKeyword,isNotNull);
        expect(throwExpression.expression,isNotNull);
    }
    test_parseUnaryExpression_decrement_normal() : void {
        let expression : any = this.parseUnaryExpression('--x');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.operator,isNotNull);
        expect(expression.operator.type,TokenType.MINUS_MINUS);
        expect(expression.operand,isNotNull);
    }
    test_parseUnaryExpression_decrement_super() : void {
        let expression : any = this.parseUnaryExpression('--super');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.operator,isNotNull);
        expect(expression.operator.type,TokenType.MINUS);
        let innerExpression : any = expression.operand;
        expect(innerExpression,isNotNull);
        expect(is(innerExpression, any),isTrue);
        let operand : any = innerExpression as any;
        expect(operand.operator,isNotNull);
        expect(operand.operator.type,TokenType.MINUS);
        expect(operand.operand,isNotNull);
    }
    test_parseUnaryExpression_decrement_super_propertyAccess() : void {
        let expression : any = this.parseUnaryExpression('--super.x');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.operator,isNotNull);
        expect(expression.operator.type,TokenType.MINUS_MINUS);
        expect(expression.operand,isNotNull);
        let operand : any = expression.operand as any;
        expect(is(operand.target, any),isTrue);
        expect(operand.propertyName.name,"x");
    }
    test_parseUnaryExpression_decrement_super_withComment() : void {
        let expression : any = this.parseUnaryExpression('/* 0 */ --super');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.operator,isNotNull);
        expect(expression.operator.type,TokenType.MINUS);
        expect(expression.operator.precedingComments,isNotNull);
        let innerExpression : any = expression.operand;
        expect(innerExpression,isNotNull);
        expect(is(innerExpression, any),isTrue);
        let operand : any = innerExpression as any;
        expect(operand.operator,isNotNull);
        expect(operand.operator.type,TokenType.MINUS);
        expect(operand.operand,isNotNull);
    }
    test_parseUnaryExpression_increment_normal() : void {
        let expression : any = this.parseUnaryExpression('++x');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.operator,isNotNull);
        expect(expression.operator.type,TokenType.PLUS_PLUS);
        expect(expression.operand,isNotNull);
    }
    test_parseUnaryExpression_increment_super_index() : void {
        let expression : any = this.parseUnaryExpression('++super[0]');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.operator,isNotNull);
        expect(expression.operator.type,TokenType.PLUS_PLUS);
        expect(expression.operand,isNotNull);
        let operand : any = expression.operand as any;
        expect(is(operand.realTarget, any),isTrue);
        expect(is(operand.index, any),isTrue);
    }
    test_parseUnaryExpression_increment_super_propertyAccess() : void {
        let expression : any = this.parseUnaryExpression('++super.x');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.operator,isNotNull);
        expect(expression.operator.type,TokenType.PLUS_PLUS);
        expect(expression.operand,isNotNull);
        let operand : any = expression.operand as any;
        expect(is(operand.target, any),isTrue);
        expect(operand.propertyName.name,"x");
    }
    test_parseUnaryExpression_minus_normal() : void {
        let expression : any = this.parseUnaryExpression('-x');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.operator,isNotNull);
        expect(expression.operator.type,TokenType.MINUS);
        expect(expression.operand,isNotNull);
    }
    test_parseUnaryExpression_minus_super() : void {
        let expression : any = this.parseUnaryExpression('-super');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.operator,isNotNull);
        expect(expression.operator.type,TokenType.MINUS);
        expect(expression.operand,isNotNull);
    }
    test_parseUnaryExpression_not_normal() : void {
        let expression : any = this.parseUnaryExpression('!x');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.operator,isNotNull);
        expect(expression.operator.type,TokenType.BANG);
        expect(expression.operand,isNotNull);
    }
    test_parseUnaryExpression_not_super() : void {
        let expression : any = this.parseUnaryExpression('!super');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.operator,isNotNull);
        expect(expression.operator.type,TokenType.BANG);
        expect(expression.operand,isNotNull);
    }
    test_parseUnaryExpression_tilda_normal() : void {
        let expression : any = this.parseUnaryExpression('~x');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.operator,isNotNull);
        expect(expression.operator.type,TokenType.TILDE);
        expect(expression.operand,isNotNull);
    }
    test_parseUnaryExpression_tilda_super() : void {
        let expression : any = this.parseUnaryExpression('~super');
        expect(expression,isNotNull);
        this.assertNoErrors();
        expect(expression.operator,isNotNull);
        expect(expression.operator.type,TokenType.TILDE);
        expect(expression.operand,isNotNull);
    }
    constructor() {
    }
    @defaultConstructor
    ExpressionParserTestMixin() {
    }
}

export namespace FormalParameterParserTestMixin {
    export type Constructors = 'FormalParameterParserTestMixin';
    export type Interface = Omit<FormalParameterParserTestMixin, Constructors>;
}
@DartClass
@Implements(AbstractParserTestCase)
export class FormalParameterParserTestMixin implements AbstractParserTestCase.Interface {
    test_parseFormalParameter_covariant_final_named() : void {
        let kind : any = ParameterKind.NAMED;
        let parameter : any = this.parseFormalParameter('covariant final a : null',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let defaultParameter : any = parameter;
        let simpleParameter : any = defaultParameter.parameter as any;
        expect(simpleParameter.covariantKeyword,isNotNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNull);
        expect(simpleParameter.kind,kind);
        expect(defaultParameter.separator,isNotNull);
        expect(defaultParameter.defaultValue,isNotNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseFormalParameter_covariant_final_normal() : void {
        let kind : any = ParameterKind.REQUIRED;
        let parameter : any = this.parseFormalParameter('covariant final a',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let simpleParameter : any = parameter;
        expect(simpleParameter.covariantKeyword,isNotNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNull);
        expect(simpleParameter.kind,kind);
    }
    test_parseFormalParameter_covariant_final_positional() : void {
        let kind : any = ParameterKind.POSITIONAL;
        let parameter : any = this.parseFormalParameter('covariant final a = null',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let defaultParameter : any = parameter;
        let simpleParameter : any = defaultParameter.parameter as any;
        expect(simpleParameter.covariantKeyword,isNotNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNull);
        expect(simpleParameter.kind,kind);
        expect(defaultParameter.separator,isNotNull);
        expect(defaultParameter.defaultValue,isNotNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseFormalParameter_covariant_final_type_named() : void {
        let kind : any = ParameterKind.NAMED;
        let parameter : any = this.parseFormalParameter('covariant final A a : null',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let defaultParameter : any = parameter;
        let simpleParameter : any = defaultParameter.parameter as any;
        expect(simpleParameter.covariantKeyword,isNotNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNotNull);
        expect(simpleParameter.kind,kind);
        expect(defaultParameter.separator,isNotNull);
        expect(defaultParameter.defaultValue,isNotNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseFormalParameter_covariant_final_type_normal() : void {
        let kind : any = ParameterKind.REQUIRED;
        let parameter : any = this.parseFormalParameter('covariant final A a',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let simpleParameter : any = parameter;
        expect(simpleParameter.covariantKeyword,isNotNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNotNull);
        expect(simpleParameter.kind,kind);
    }
    test_parseFormalParameter_covariant_final_type_positional() : void {
        let kind : any = ParameterKind.POSITIONAL;
        let parameter : any = this.parseFormalParameter('covariant final A a = null',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let defaultParameter : any = parameter;
        let simpleParameter : any = defaultParameter.parameter as any;
        expect(simpleParameter.covariantKeyword,isNotNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNotNull);
        expect(simpleParameter.kind,kind);
        expect(defaultParameter.separator,isNotNull);
        expect(defaultParameter.defaultValue,isNotNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseFormalParameter_covariant_type_function() : void {
        let kind : any = ParameterKind.REQUIRED;
        let parameter : any = this.parseFormalParameter('covariant String Function(int) a',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let simpleParameter : any = parameter;
        expect(simpleParameter.covariantKeyword,isNotNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNull);
        expect(simpleParameter.type,new bare.createInstance(any,null));
        expect(simpleParameter.kind,kind);
    }
    test_parseFormalParameter_covariant_type_named() : void {
        let kind : any = ParameterKind.NAMED;
        let parameter : any = this.parseFormalParameter('covariant A a : null',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let defaultParameter : any = parameter;
        let simpleParameter : any = defaultParameter.parameter as any;
        expect(simpleParameter.covariantKeyword,isNotNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNull);
        expect(simpleParameter.type,isNotNull);
        expect(simpleParameter.kind,kind);
        expect(defaultParameter.separator,isNotNull);
        expect(defaultParameter.defaultValue,isNotNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseFormalParameter_covariant_type_normal() : void {
        let kind : any = ParameterKind.REQUIRED;
        let parameter : any = this.parseFormalParameter('covariant A<B<C>> a',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let simpleParameter : any = parameter;
        expect(simpleParameter.covariantKeyword,isNotNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNull);
        expect(simpleParameter.type,isNotNull);
        expect(simpleParameter.kind,kind);
    }
    test_parseFormalParameter_covariant_type_positional() : void {
        let kind : any = ParameterKind.POSITIONAL;
        let parameter : any = this.parseFormalParameter('covariant A a = null',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let defaultParameter : any = parameter;
        let simpleParameter : any = defaultParameter.parameter as any;
        expect(simpleParameter.covariantKeyword,isNotNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNull);
        expect(simpleParameter.type,isNotNull);
        expect(simpleParameter.kind,kind);
        expect(defaultParameter.separator,isNotNull);
        expect(defaultParameter.defaultValue,isNotNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseFormalParameter_covariant_var_named() : void {
        let kind : any = ParameterKind.NAMED;
        let parameter : any = this.parseFormalParameter('covariant var a : null',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let defaultParameter : any = parameter;
        let simpleParameter : any = defaultParameter.parameter as any;
        expect(simpleParameter.covariantKeyword,isNotNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNull);
        expect(simpleParameter.kind,kind);
        expect(defaultParameter.separator,isNotNull);
        expect(defaultParameter.defaultValue,isNotNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseFormalParameter_covariant_var_normal() : void {
        let kind : any = ParameterKind.REQUIRED;
        let parameter : any = this.parseFormalParameter('covariant var a',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let simpleParameter : any = parameter;
        expect(simpleParameter.covariantKeyword,isNotNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNull);
        expect(simpleParameter.kind,kind);
    }
    test_parseFormalParameter_covariant_var_positional() : void {
        let kind : any = ParameterKind.POSITIONAL;
        let parameter : any = this.parseFormalParameter('covariant var a = null',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let defaultParameter : any = parameter;
        let simpleParameter : any = defaultParameter.parameter as any;
        expect(simpleParameter.covariantKeyword,isNotNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNull);
        expect(simpleParameter.kind,kind);
        expect(defaultParameter.separator,isNotNull);
        expect(defaultParameter.defaultValue,isNotNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseFormalParameter_final_named() : void {
        let kind : any = ParameterKind.NAMED;
        let parameter : any = this.parseFormalParameter('final a : null',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let defaultParameter : any = parameter;
        let simpleParameter : any = defaultParameter.parameter as any;
        expect(simpleParameter.covariantKeyword,isNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNull);
        expect(simpleParameter.kind,kind);
        expect(defaultParameter.separator,isNotNull);
        expect(defaultParameter.defaultValue,isNotNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseFormalParameter_final_normal() : void {
        let kind : any = ParameterKind.REQUIRED;
        let parameter : any = this.parseFormalParameter('final a',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let simpleParameter : any = parameter;
        expect(simpleParameter.covariantKeyword,isNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNull);
        expect(simpleParameter.kind,kind);
    }
    test_parseFormalParameter_final_positional() : void {
        let kind : any = ParameterKind.POSITIONAL;
        let parameter : any = this.parseFormalParameter('final a = null',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let defaultParameter : any = parameter;
        let simpleParameter : any = defaultParameter.parameter as any;
        expect(simpleParameter.covariantKeyword,isNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNull);
        expect(simpleParameter.kind,kind);
        expect(defaultParameter.separator,isNotNull);
        expect(defaultParameter.defaultValue,isNotNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseFormalParameter_final_type_named() : void {
        let kind : any = ParameterKind.NAMED;
        let parameter : any = this.parseFormalParameter('final A a : null',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let defaultParameter : any = parameter;
        let simpleParameter : any = defaultParameter.parameter as any;
        expect(simpleParameter.covariantKeyword,isNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNotNull);
        expect(simpleParameter.kind,kind);
        expect(defaultParameter.separator,isNotNull);
        expect(defaultParameter.defaultValue,isNotNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseFormalParameter_final_type_normal() : void {
        let kind : any = ParameterKind.REQUIRED;
        let parameter : any = this.parseFormalParameter('final A a',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let simpleParameter : any = parameter;
        expect(simpleParameter.covariantKeyword,isNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNotNull);
        expect(simpleParameter.kind,kind);
    }
    test_parseFormalParameter_final_type_positional() : void {
        let kind : any = ParameterKind.POSITIONAL;
        let parameter : any = this.parseFormalParameter('final A a = null',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let defaultParameter : any = parameter;
        let simpleParameter : any = defaultParameter.parameter as any;
        expect(simpleParameter.covariantKeyword,isNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNotNull);
        expect(simpleParameter.kind,kind);
        expect(defaultParameter.separator,isNotNull);
        expect(defaultParameter.defaultValue,isNotNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseFormalParameter_type_function() : void {
        let kind : any = ParameterKind.REQUIRED;
        let parameter : any = this.parseFormalParameter('String Function(int) a',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let simpleParameter : any = parameter;
        expect(simpleParameter.covariantKeyword,isNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNull);
        expect(simpleParameter.type,new bare.createInstance(any,null));
        expect(simpleParameter.kind,kind);
    }
    test_parseFormalParameter_type_named() : void {
        let kind : any = ParameterKind.NAMED;
        let parameter : any = this.parseFormalParameter('A a : null',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let defaultParameter : any = parameter;
        let simpleParameter : any = defaultParameter.parameter as any;
        expect(simpleParameter.covariantKeyword,isNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNull);
        expect(simpleParameter.type,isNotNull);
        expect(simpleParameter.kind,kind);
        expect(defaultParameter.separator,isNotNull);
        expect(defaultParameter.defaultValue,isNotNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseFormalParameter_type_named_noDefault() : void {
        let kind : any = ParameterKind.NAMED;
        let parameter : any = this.parseFormalParameter('A a',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let defaultParameter : any = parameter;
        let simpleParameter : any = defaultParameter.parameter as any;
        expect(simpleParameter.covariantKeyword,isNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNull);
        expect(simpleParameter.type,isNotNull);
        expect(simpleParameter.kind,kind);
        expect(defaultParameter.separator,isNull);
        expect(defaultParameter.defaultValue,isNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseFormalParameter_type_normal() : void {
        let kind : any = ParameterKind.REQUIRED;
        let parameter : any = this.parseFormalParameter('A a',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let simpleParameter : any = parameter;
        expect(simpleParameter.covariantKeyword,isNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNull);
        expect(simpleParameter.type,isNotNull);
        expect(simpleParameter.kind,kind);
    }
    test_parseFormalParameter_type_positional() : void {
        let kind : any = ParameterKind.POSITIONAL;
        let parameter : any = this.parseFormalParameter('A a = null',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let defaultParameter : any = parameter;
        let simpleParameter : any = defaultParameter.parameter as any;
        expect(simpleParameter.covariantKeyword,isNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNull);
        expect(simpleParameter.type,isNotNull);
        expect(simpleParameter.kind,kind);
        expect(defaultParameter.separator,isNotNull);
        expect(defaultParameter.defaultValue,isNotNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseFormalParameter_type_positional_noDefault() : void {
        let kind : any = ParameterKind.POSITIONAL;
        let parameter : any = this.parseFormalParameter('A a',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let defaultParameter : any = parameter;
        let simpleParameter : any = defaultParameter.parameter as any;
        expect(simpleParameter.covariantKeyword,isNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNull);
        expect(simpleParameter.type,isNotNull);
        expect(simpleParameter.kind,kind);
        expect(defaultParameter.separator,isNull);
        expect(defaultParameter.defaultValue,isNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseFormalParameter_var_named() : void {
        let kind : any = ParameterKind.NAMED;
        let parameter : any = this.parseFormalParameter('var a : null',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let defaultParameter : any = parameter;
        let simpleParameter : any = defaultParameter.parameter as any;
        expect(simpleParameter.covariantKeyword,isNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNull);
        expect(simpleParameter.kind,kind);
        expect(defaultParameter.separator,isNotNull);
        expect(defaultParameter.defaultValue,isNotNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseFormalParameter_var_normal() : void {
        let kind : any = ParameterKind.REQUIRED;
        let parameter : any = this.parseFormalParameter('var a',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let simpleParameter : any = parameter;
        expect(simpleParameter.covariantKeyword,isNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNull);
        expect(simpleParameter.kind,kind);
    }
    test_parseFormalParameter_var_positional() : void {
        let kind : any = ParameterKind.POSITIONAL;
        let parameter : any = this.parseFormalParameter('var a = null',kind);
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let defaultParameter : any = parameter;
        let simpleParameter : any = defaultParameter.parameter as any;
        expect(simpleParameter.covariantKeyword,isNull);
        expect(simpleParameter.identifier,isNotNull);
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNull);
        expect(simpleParameter.kind,kind);
        expect(defaultParameter.separator,isNotNull);
        expect(defaultParameter.defaultValue,isNotNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseFormalParameterList_empty() : void {
        let list : any = this.parseFormalParameterList('()');
        expect(list,isNotNull);
        this.assertNoErrors();
        expect(list.leftParenthesis,isNotNull);
        expect(list.leftDelimiter,isNull);
        expect(list.parameters,hasLength(0));
        expect(list.rightDelimiter,isNull);
        expect(list.rightParenthesis,isNotNull);
    }
    test_parseFormalParameterList_named_multiple() : void {
        let list : any = this.parseFormalParameterList('({A a : 1, B b, C c : 3})');
        expect(list,isNotNull);
        this.assertNoErrors();
        expect(list.leftParenthesis,isNotNull);
        expect(list.leftDelimiter,isNotNull);
        expect(list.parameters,hasLength(3));
        expect(list.rightDelimiter,isNotNull);
        expect(list.rightParenthesis,isNotNull);
    }
    test_parseFormalParameterList_named_single() : void {
        let list : any = this.parseFormalParameterList('({A a})');
        expect(list,isNotNull);
        this.assertNoErrors();
        expect(list.leftParenthesis,isNotNull);
        expect(list.leftDelimiter,isNotNull);
        expect(list.parameters,hasLength(1));
        expect(list.rightDelimiter,isNotNull);
        expect(list.rightParenthesis,isNotNull);
    }
    test_parseFormalParameterList_named_trailing_comma() : void {
        let list : any = this.parseFormalParameterList('(A a, {B b,})');
        expect(list,isNotNull);
        this.assertNoErrors();
        expect(list.leftParenthesis,isNotNull);
        expect(list.leftDelimiter,isNotNull);
        expect(list.parameters,hasLength(2));
        expect(list.rightDelimiter,isNotNull);
        expect(list.rightParenthesis,isNotNull);
    }
    test_parseFormalParameterList_normal_multiple() : void {
        let list : any = this.parseFormalParameterList('(A a, B b, C c)');
        expect(list,isNotNull);
        this.assertNoErrors();
        expect(list.leftParenthesis,isNotNull);
        expect(list.leftDelimiter,isNull);
        expect(list.parameters,hasLength(3));
        expect(list.rightDelimiter,isNull);
        expect(list.rightParenthesis,isNotNull);
    }
    test_parseFormalParameterList_normal_named() : void {
        let list : any = this.parseFormalParameterList('(A a, {B b})');
        expect(list,isNotNull);
        this.assertNoErrors();
        expect(list.leftParenthesis,isNotNull);
        expect(list.leftDelimiter,isNotNull);
        expect(list.parameters,hasLength(2));
        expect(list.rightDelimiter,isNotNull);
        expect(list.rightParenthesis,isNotNull);
    }
    test_parseFormalParameterList_normal_named_inFunctionType() : void {
        let list : any = this.parseFormalParameterList('(A, {B b})',{
            inFunctionType : true});
        expect(list,isNotNull);
        this.assertNoErrors();
        expect(list.leftParenthesis,isNotNull);
        expect(list.leftDelimiter,isNotNull);
        expect(list.rightDelimiter,isNotNull);
        expect(list.rightParenthesis,isNotNull);
        let parameters : any = list.parameters;
        expect(parameters,hasLength(2));
        expect(op(Op.INDEX,parameters,0),new bare.createInstance(any,null));
        let required : any = op(Op.INDEX,parameters,0);
        expect(required.identifier,isNull);
        expect(required.type,new bare.createInstance(any,null));
        expect((required.type as any).name.name,'A');
        expect(op(Op.INDEX,parameters,1),new bare.createInstance(any,null));
        let named : any = op(Op.INDEX,parameters,1);
        expect(named.identifier,isNotNull);
        expect(named.parameter,new bare.createInstance(any,null));
        let simple : any = named.parameter;
        expect(simple.type,new bare.createInstance(any,null));
        expect((simple.type as any).name.name,'B');
    }
    test_parseFormalParameterList_normal_positional() : void {
        let list : any = this.parseFormalParameterList('(A a, [B b])');
        expect(list,isNotNull);
        this.assertNoErrors();
        expect(list.leftParenthesis,isNotNull);
        expect(list.leftDelimiter,isNotNull);
        expect(list.parameters,hasLength(2));
        expect(list.rightDelimiter,isNotNull);
        expect(list.rightParenthesis,isNotNull);
    }
    test_parseFormalParameterList_normal_single() : void {
        let list : any = this.parseFormalParameterList('(A a)');
        expect(list,isNotNull);
        this.assertNoErrors();
        expect(list.leftParenthesis,isNotNull);
        expect(list.leftDelimiter,isNull);
        expect(list.parameters,hasLength(1));
        expect(list.rightDelimiter,isNull);
        expect(list.rightParenthesis,isNotNull);
    }
    test_parseFormalParameterList_normal_single_Function() : void {
        let list : any = this.parseFormalParameterList('(Function f)');
        expect(list,isNotNull);
        this.assertNoErrors();
        expect(list.leftParenthesis,isNotNull);
        expect(list.leftDelimiter,isNull);
        expect(list.parameters,hasLength(1));
        expect(list.rightDelimiter,isNull);
        expect(list.rightParenthesis,isNotNull);
    }
    test_parseFormalParameterList_normal_single_trailing_comma() : void {
        let list : any = this.parseFormalParameterList('(A a,)');
        expect(list,isNotNull);
        this.assertNoErrors();
        expect(list.leftParenthesis,isNotNull);
        expect(list.leftDelimiter,isNull);
        expect(list.parameters,hasLength(1));
        expect(list.rightDelimiter,isNull);
        expect(list.rightParenthesis,isNotNull);
    }
    test_parseFormalParameterList_positional_multiple() : void {
        let list : any = this.parseFormalParameterList('([A a = null, B b, C c = null])');
        expect(list,isNotNull);
        this.assertNoErrors();
        expect(list.leftParenthesis,isNotNull);
        expect(list.leftDelimiter,isNotNull);
        expect(list.parameters,hasLength(3));
        expect(list.rightDelimiter,isNotNull);
        expect(list.rightParenthesis,isNotNull);
    }
    test_parseFormalParameterList_positional_single() : void {
        let list : any = this.parseFormalParameterList('([A a = null])');
        expect(list,isNotNull);
        this.assertNoErrors();
        expect(list.leftParenthesis,isNotNull);
        expect(list.leftDelimiter,isNotNull);
        expect(list.parameters,hasLength(1));
        expect(list.rightDelimiter,isNotNull);
        expect(list.rightParenthesis,isNotNull);
    }
    test_parseFormalParameterList_positional_trailing_comma() : void {
        let list : any = this.parseFormalParameterList('(A a, [B b,])');
        expect(list,isNotNull);
        this.assertNoErrors();
        expect(list.leftParenthesis,isNotNull);
        expect(list.leftDelimiter,isNotNull);
        expect(list.parameters,hasLength(2));
        expect(list.rightDelimiter,isNotNull);
        expect(list.rightParenthesis,isNotNull);
    }
    test_parseFormalParameterList_prefixedType() : void {
        let list : any = this.parseFormalParameterList('(io.File f)');
        expect(list,isNotNull);
        this.assertNoErrors();
        expect(list.leftParenthesis,isNotNull);
        expect(list.leftDelimiter,isNull);
        expect(list.parameters,hasLength(1));
        expect(op(Op.INDEX,list.parameters,0).toSource(),'io.File f');
        expect(list.rightDelimiter,isNull);
        expect(list.rightParenthesis,isNotNull);
    }
    test_parseFormalParameterList_prefixedType_partial() : void {
        let list : any = this.parseFormalParameterList('(io.)',{
            errorCodes : new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER)});
        expect(list,isNotNull);
        expect(list.leftParenthesis,isNotNull);
        expect(list.leftDelimiter,isNull);
        expect(list.parameters,hasLength(1));
        expect(op(Op.INDEX,list.parameters,0).toSource(),'io. ');
        expect(list.rightDelimiter,isNull);
        expect(list.rightParenthesis,isNotNull);
    }
    test_parseFormalParameterList_prefixedType_partial2() : void {
        let list : any = this.parseFormalParameterList('(io.,a)',{
            errorCodes : new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER)});
        expect(list,isNotNull);
        expect(list.leftParenthesis,isNotNull);
        expect(list.leftDelimiter,isNull);
        expect(list.parameters,hasLength(2));
        expect(op(Op.INDEX,list.parameters,0).toSource(),'io. ');
        expect(op(Op.INDEX,list.parameters,1).toSource(),'a');
        expect(list.rightDelimiter,isNull);
        expect(list.rightParenthesis,isNotNull);
    }
    test_parseNormalFormalParameter_field_const_noType() : void {
        let parameter : any = this.parseNormalFormalParameter('const this.a');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let fieldParameter : any = parameter;
        expect(fieldParameter.keyword,isNotNull);
        expect(fieldParameter.type,isNull);
        expect(fieldParameter.identifier,isNotNull);
        expect(fieldParameter.parameters,isNull);
    }
    test_parseNormalFormalParameter_field_const_type() : void {
        let parameter : any = this.parseNormalFormalParameter('const A this.a');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let fieldParameter : any = parameter;
        expect(fieldParameter.keyword,isNotNull);
        expect(fieldParameter.type,isNotNull);
        expect(fieldParameter.identifier,isNotNull);
        expect(fieldParameter.parameters,isNull);
    }
    test_parseNormalFormalParameter_field_final_noType() : void {
        let parameter : any = this.parseNormalFormalParameter('final this.a');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let fieldParameter : any = parameter;
        expect(fieldParameter.keyword,isNotNull);
        expect(fieldParameter.type,isNull);
        expect(fieldParameter.identifier,isNotNull);
        expect(fieldParameter.parameters,isNull);
    }
    test_parseNormalFormalParameter_field_final_type() : void {
        let parameter : any = this.parseNormalFormalParameter('final A this.a');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let fieldParameter : any = parameter;
        expect(fieldParameter.keyword,isNotNull);
        expect(fieldParameter.type,isNotNull);
        expect(fieldParameter.identifier,isNotNull);
        expect(fieldParameter.parameters,isNull);
    }
    test_parseNormalFormalParameter_field_function_nested() : void {
        let parameter : any = this.parseNormalFormalParameter('this.a(B b)');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let fieldParameter : any = parameter;
        expect(fieldParameter.keyword,isNull);
        expect(fieldParameter.type,isNull);
        expect(fieldParameter.identifier,isNotNull);
        let parameterList : any = fieldParameter.parameters;
        expect(parameterList,isNotNull);
        expect(parameterList.parameters,hasLength(1));
    }
    test_parseNormalFormalParameter_field_function_noNested() : void {
        let parameter : any = this.parseNormalFormalParameter('this.a()');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let fieldParameter : any = parameter;
        expect(fieldParameter.keyword,isNull);
        expect(fieldParameter.type,isNull);
        expect(fieldParameter.identifier,isNotNull);
        let parameterList : any = fieldParameter.parameters;
        expect(parameterList,isNotNull);
        expect(parameterList.parameters,hasLength(0));
    }
    test_parseNormalFormalParameter_field_function_withDocComment() : void {
        let parameter = this.parseNormalFormalParameter('/// Doc\nthis.f()');
        this.expectCommentText(parameter.documentationComment,'/// Doc');
    }
    test_parseNormalFormalParameter_field_noType() : void {
        let parameter : any = this.parseNormalFormalParameter('this.a');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let fieldParameter : any = parameter;
        expect(fieldParameter.keyword,isNull);
        expect(fieldParameter.type,isNull);
        expect(fieldParameter.identifier,isNotNull);
        expect(fieldParameter.parameters,isNull);
    }
    test_parseNormalFormalParameter_field_type() : void {
        let parameter : any = this.parseNormalFormalParameter('A this.a');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let fieldParameter : any = parameter;
        expect(fieldParameter.keyword,isNull);
        expect(fieldParameter.type,isNotNull);
        expect(fieldParameter.identifier,isNotNull);
        expect(fieldParameter.parameters,isNull);
    }
    test_parseNormalFormalParameter_field_var() : void {
        let parameter : any = this.parseNormalFormalParameter('var this.a');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let fieldParameter : any = parameter;
        expect(fieldParameter.keyword,isNotNull);
        expect(fieldParameter.type,isNull);
        expect(fieldParameter.identifier,isNotNull);
        expect(fieldParameter.parameters,isNull);
    }
    test_parseNormalFormalParameter_field_withDocComment() : void {
        let parameter = this.parseNormalFormalParameter('/// Doc\nthis.a');
        this.expectCommentText(parameter.documentationComment,'/// Doc');
    }
    test_parseNormalFormalParameter_function_named() : void {
        let kind : any = ParameterKind.NAMED;
        let defaultParameter = this.parseFormalParameter('a() : null',kind) as any;
        let functionParameter = defaultParameter.parameter as any;
        this.assertNoErrors();
        expect(functionParameter.returnType,isNull);
        expect(functionParameter.identifier,isNotNull);
        expect(functionParameter.typeParameters,isNull);
        expect(functionParameter.parameters,isNotNull);
        expect(functionParameter.kind,kind);
        expect(defaultParameter.separator,isNotNull);
        expect(defaultParameter.defaultValue,isNotNull);
        expect(defaultParameter.kind,kind);
    }
    test_parseNormalFormalParameter_function_noType() : void {
        let parameter : any = this.parseNormalFormalParameter('a()');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let functionParameter : any = parameter;
        expect(functionParameter.returnType,isNull);
        expect(functionParameter.identifier,isNotNull);
        expect(functionParameter.typeParameters,isNull);
        expect(functionParameter.parameters,isNotNull);
    }
    test_parseNormalFormalParameter_function_noType_covariant() : void {
        let parameter : any = this.parseNormalFormalParameter('covariant a()');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let functionParameter : any = parameter;
        expect(functionParameter.covariantKeyword,isNotNull);
        expect(functionParameter.returnType,isNull);
        expect(functionParameter.identifier,isNotNull);
        expect(functionParameter.typeParameters,isNull);
        expect(functionParameter.parameters,isNotNull);
    }
    test_parseNormalFormalParameter_function_noType_nullable() : void {
        this.enableNnbd = true;
        let parameter : any = this.parseNormalFormalParameter('a()?');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let functionParameter : any = parameter;
        expect(functionParameter.returnType,isNull);
        expect(functionParameter.identifier,isNotNull);
        expect(functionParameter.typeParameters,isNull);
        expect(functionParameter.parameters,isNotNull);
        expect(functionParameter.question,isNotNull);
    }
    test_parseNormalFormalParameter_function_noType_typeParameterComments() : void {
        this.enableGenericMethodComments = true;
        let parameter : any = this.parseNormalFormalParameter('a/*<E>*/()');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let functionParameter : any = parameter;
        expect(functionParameter.returnType,isNull);
        expect(functionParameter.identifier,isNotNull);
        expect(functionParameter.typeParameters,isNotNull);
        expect(functionParameter.parameters,isNotNull);
    }
    test_parseNormalFormalParameter_function_noType_typeParameters() : void {
        let parameter : any = this.parseNormalFormalParameter('a<E>()');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let functionParameter : any = parameter;
        expect(functionParameter.returnType,isNull);
        expect(functionParameter.identifier,isNotNull);
        expect(functionParameter.typeParameters,isNotNull);
        expect(functionParameter.parameters,isNotNull);
        expect(functionParameter.question,isNull);
        expect(functionParameter.question,isNull);
    }
    test_parseNormalFormalParameter_function_noType_typeParameters_nullable() : void {
        this.enableNnbd = true;
        let parameter : any = this.parseNormalFormalParameter('a<E>()?');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let functionParameter : any = parameter;
        expect(functionParameter.returnType,isNull);
        expect(functionParameter.identifier,isNotNull);
        expect(functionParameter.typeParameters,isNotNull);
        expect(functionParameter.parameters,isNotNull);
        expect(functionParameter.question,isNotNull);
    }
    test_parseNormalFormalParameter_function_type() : void {
        let parameter : any = this.parseNormalFormalParameter('A a()');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let functionParameter : any = parameter;
        expect(functionParameter.returnType,isNotNull);
        expect(functionParameter.identifier,isNotNull);
        expect(functionParameter.typeParameters,isNull);
        expect(functionParameter.parameters,isNotNull);
        expect(functionParameter.question,isNull);
    }
    test_parseNormalFormalParameter_function_type_nullable() : void {
        this.enableNnbd = true;
        let parameter : any = this.parseNormalFormalParameter('A a()?');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let functionParameter : any = parameter;
        expect(functionParameter.returnType,isNotNull);
        expect(functionParameter.identifier,isNotNull);
        expect(functionParameter.typeParameters,isNull);
        expect(functionParameter.parameters,isNotNull);
        expect(functionParameter.question,isNotNull);
    }
    test_parseNormalFormalParameter_function_type_typeParameterComments() : void {
        this.enableGenericMethodComments = true;
        let parameter : any = this.parseNormalFormalParameter('A a/*<E>*/()');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let functionParameter : any = parameter;
        expect(functionParameter.returnType,isNotNull);
        expect(functionParameter.identifier,isNotNull);
        expect(functionParameter.typeParameters,isNotNull);
        expect(functionParameter.parameters,isNotNull);
        expect(functionParameter.question,isNull);
    }
    test_parseNormalFormalParameter_function_type_typeParameters() : void {
        let parameter : any = this.parseNormalFormalParameter('A a<E>()');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let functionParameter : any = parameter;
        expect(functionParameter.returnType,isNotNull);
        expect(functionParameter.identifier,isNotNull);
        expect(functionParameter.typeParameters,isNotNull);
        expect(functionParameter.parameters,isNotNull);
        expect(functionParameter.question,isNull);
    }
    test_parseNormalFormalParameter_function_type_typeParameters_nullable() : void {
        this.enableNnbd = true;
        let parameter : any = this.parseNormalFormalParameter('A a<E>()?');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let functionParameter : any = parameter;
        expect(functionParameter.returnType,isNotNull);
        expect(functionParameter.identifier,isNotNull);
        expect(functionParameter.typeParameters,isNotNull);
        expect(functionParameter.parameters,isNotNull);
        expect(functionParameter.question,isNotNull);
    }
    test_parseNormalFormalParameter_function_void() : void {
        let parameter : any = this.parseNormalFormalParameter('void a()');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let functionParameter : any = parameter;
        expect(functionParameter.returnType,isNotNull);
        expect(functionParameter.identifier,isNotNull);
        expect(functionParameter.typeParameters,isNull);
        expect(functionParameter.parameters,isNotNull);
        expect(functionParameter.question,isNull);
    }
    test_parseNormalFormalParameter_function_void_nullable() : void {
        this.enableNnbd = true;
        let parameter : any = this.parseNormalFormalParameter('void a()?');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let functionParameter : any = parameter;
        expect(functionParameter.returnType,isNotNull);
        expect(functionParameter.identifier,isNotNull);
        expect(functionParameter.typeParameters,isNull);
        expect(functionParameter.parameters,isNotNull);
        expect(functionParameter.question,isNotNull);
    }
    test_parseNormalFormalParameter_function_void_typeParameterComments() : void {
        this.enableGenericMethodComments = true;
        let parameter : any = this.parseNormalFormalParameter('void a/*<E>*/()');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let functionParameter : any = parameter;
        expect(functionParameter.returnType,isNotNull);
        expect(functionParameter.identifier,isNotNull);
        expect(functionParameter.typeParameters,isNotNull);
        expect(functionParameter.parameters,isNotNull);
        expect(functionParameter.question,isNull);
    }
    test_parseNormalFormalParameter_function_void_typeParameters() : void {
        let parameter : any = this.parseNormalFormalParameter('void a<E>()');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let functionParameter : any = parameter;
        expect(functionParameter.returnType,isNotNull);
        expect(functionParameter.identifier,isNotNull);
        expect(functionParameter.typeParameters,isNotNull);
        expect(functionParameter.parameters,isNotNull);
        expect(functionParameter.question,isNull);
    }
    test_parseNormalFormalParameter_function_void_typeParameters_nullable() : void {
        this.enableNnbd = true;
        let parameter : any = this.parseNormalFormalParameter('void a<E>()?');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let functionParameter : any = parameter;
        expect(functionParameter.returnType,isNotNull);
        expect(functionParameter.identifier,isNotNull);
        expect(functionParameter.typeParameters,isNotNull);
        expect(functionParameter.parameters,isNotNull);
        expect(functionParameter.question,isNotNull);
    }
    test_parseNormalFormalParameter_function_withDocComment() : void {
        let parameter = this.parseFormalParameter('/// Doc\nf()',ParameterKind.REQUIRED) as any;
        this.expectCommentText(parameter.documentationComment,'/// Doc');
    }
    test_parseNormalFormalParameter_simple_const_noType() : void {
        let parameter : any = this.parseNormalFormalParameter('const a');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let simpleParameter : any = parameter;
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNull);
        expect(simpleParameter.identifier,isNotNull);
    }
    test_parseNormalFormalParameter_simple_const_type() : void {
        let parameter : any = this.parseNormalFormalParameter('const A a');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let simpleParameter : any = parameter;
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNotNull);
        expect(simpleParameter.identifier,isNotNull);
    }
    test_parseNormalFormalParameter_simple_final_noType() : void {
        let parameter : any = this.parseNormalFormalParameter('final a');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let simpleParameter : any = parameter;
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNull);
        expect(simpleParameter.identifier,isNotNull);
    }
    test_parseNormalFormalParameter_simple_final_type() : void {
        let parameter : any = this.parseNormalFormalParameter('final A a');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let simpleParameter : any = parameter;
        expect(simpleParameter.keyword,isNotNull);
        expect(simpleParameter.type,isNotNull);
        expect(simpleParameter.identifier,isNotNull);
    }
    test_parseNormalFormalParameter_simple_noName() : void {
        let parameter : any = this.parseNormalFormalParameter('a',{
            inFunctionType : true});
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let simpleParameter : any = parameter;
        expect(simpleParameter.keyword,isNull);
        expect(simpleParameter.type,isNotNull);
        expect(simpleParameter.identifier,isNull);
    }
    test_parseNormalFormalParameter_simple_noType() : void {
        let parameter : any = this.parseNormalFormalParameter('a');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let simpleParameter : any = parameter;
        expect(simpleParameter.keyword,isNull);
        expect(simpleParameter.type,isNull);
        expect(simpleParameter.identifier,isNotNull);
    }
    test_parseNormalFormalParameter_simple_noType_namedCovariant() : void {
        let parameter : any = this.parseNormalFormalParameter('covariant');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let simpleParameter : any = parameter;
        expect(simpleParameter.covariantKeyword,isNull);
        expect(simpleParameter.keyword,isNull);
        expect(simpleParameter.type,isNull);
        expect(simpleParameter.identifier,isNotNull);
    }
    test_parseNormalFormalParameter_simple_type() : void {
        let parameter : any = this.parseNormalFormalParameter('A a');
        expect(parameter,isNotNull);
        this.assertNoErrors();
        expect(parameter,new bare.createInstance(any,null));
        let simpleParameter : any = parameter;
        expect(simpleParameter.keyword,isNull);
        expect(simpleParameter.type,isNotNull);
        expect(simpleParameter.identifier,isNotNull);
    }
    constructor() {
    }
    @defaultConstructor
    FormalParameterParserTestMixin() {
    }
}

export namespace ParserTestCase {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ParserTestCase';
    export type Interface = Omit<ParserTestCase, Constructors>;
}
@DartClass
@Implements(AbstractParserTestCase)
@With(ParserTestHelpers)
export class ParserTestCase extends lib3.EngineTestCase implements AbstractParserTestCase.Interface,ParserTestHelpers.Interface {
    @Abstract
    expectCommentText(comment : any,expectedText : string) : void {
        throw 'from mixin';
    }
    @Abstract
    expectDottedName(name : any,expectedComponents : core.DartList<string>) : void {
        throw 'from mixin';
    }
    private static __$parseFunctionBodies : boolean;
    static get parseFunctionBodies() : boolean { 
        if (this.__$parseFunctionBodies===undefined) {
            this.__$parseFunctionBodies = true;
        }
        return this.__$parseFunctionBodies;
    }
    static set parseFunctionBodies(__$value : boolean)  { 
        this.__$parseFunctionBodies = __$value;
    }

    enableAssertInitializer : boolean;

    parseAsync : boolean;

    enableGenericMethodComments : boolean;

    enableLazyAssignmentOperators : boolean;

    enableNnbd : boolean;

    enableUriInPartOf : boolean;

    listener : lib3.GatheringErrorListener;

    parser : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    assertErrorsWithCodes(expectedErrorCodes : core.DartList<any>) : void {
        this.listener.assertErrorsWithCodes(expectedErrorCodes);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    assertNoErrors() : void {
        this.listener.assertNoErrors();
    }
    createParser(content : string) : void {
        this.listener = new lib3.GatheringErrorListener();
        let source : lib3.TestSource = new lib3.TestSource();
        let reader : any = new bare.createInstance(any,null,content);
        let scanner : any = new bare.createInstance(any,null,source,reader,this.listener);
        scanner.scanGenericMethodComments = this.enableGenericMethodComments;
        scanner.scanLazyAssignmentOperators = this.enableLazyAssignmentOperators;
        let tokenStream : any = scanner.tokenize();
        this.listener.setLineInfo(source,scanner.lineStarts);
        this.parser = new bare.createInstance(any,null,source,this.listener);
        this.parser.enableAssertInitializer = this.enableAssertInitializer;
        this.parser.parseGenericMethodComments = this.enableGenericMethodComments;
        this.parser.parseFunctionBodies = ParserTestCase.parseFunctionBodies;
        this.parser.enableNnbd = this.enableNnbd;
        this.parser.enableUriInPartOf = this.enableUriInPartOf;
        this.parser.currentToken = tokenStream;
    }
    expectNotNullIfNoErrors(result : core.DartObject) : void {
        if (!this.listener.hasErrors) {
            expect(result,isNotNull);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseAdditiveExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parseAdditiveExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseAssignableExpression(code : string,primaryAllowed : boolean) : any {
        this.createParser(code);
        return this.parser.parseAssignableExpression(primaryAllowed);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseAssignableSelector(code : string,optional : boolean,_namedArguments? : {allowConditional? : boolean}) : any {
        let {allowConditional} = Object.assign({
            "allowConditional" : true}, _namedArguments );
        let prefix : any = astFactory.simpleIdentifier(new bare.createInstance(any,null,TokenType.STRING,'foo',0));
        this.createParser(code);
        return this.parser.parseAssignableSelector(prefix,optional,{
            allowConditional : allowConditional});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseAwaitExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parseAwaitExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseBitwiseAndExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parseBitwiseAndExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseBitwiseOrExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parseBitwiseOrExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseBitwiseXorExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parseBitwiseXorExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseCascadeSection(code : string) : any {
        this.createParser(code);
        return this.parser.parseCascadeSection();
    }
    parseCompilationUnit(source : string,errorCodes? : core.DartList<any>) : any {
        errorCodes = errorCodes || new core.DartList.literal<any>();
        let listener : lib3.GatheringErrorListener = new lib3.GatheringErrorListener();
        let scanner : any = new bare.createInstance(any,null,null,new bare.createInstance(any,null,source),listener);
        listener.setLineInfo(new lib3.TestSource(),scanner.lineStarts);
        let token : any = scanner.tokenize();
        let parser : any = new bare.createInstance(any,null,null,listener);
        let unit : any = parser.parseCompilationUnit(token);
        expect(unit,isNotNull);
        listener.assertErrorsWithCodes(errorCodes);
        return unit;
    }
    parseCompilationUnit2(code : string,_namedArguments? : {listener? : any}) : any {
        let {listener} = Object.assign({
        }, _namedArguments );
        listener = ( listener ) || ( AnalysisErrorListener.NULL_LISTENER );
        let scanner : any = new bare.createInstance(any,null,null,new bare.createInstance(any,null,code),listener);
        let token : any = scanner.tokenize();
        let parser : any = new bare.createInstance(any,null,null,listener);
        let unit : any = parser.parseCompilationUnit(token);
        unit.lineInfo = new bare.createInstance(any,null,scanner.lineStarts);
        return unit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseConditionalExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parseConditionalExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseConstExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parseConstExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseConstructorInitializer(code : string) : any {
        this.createParser(`class __Test { __Test() : ${code}; }`);
        let unit : any = this.parser.parseCompilationUnit2();
        let clazz = op(Op.INDEX,unit.declarations,0) as any;
        let constructor = op(Op.INDEX,clazz.members,0) as any;
        return constructor.initializers.single;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseDirectives(source : string,errorCodes? : core.DartList<any>) : any {
        errorCodes = errorCodes || new core.DartList.literal<any>();
        this.createParser(source);
        let unit : any = this.parser.parseDirectives2();
        expect(unit,isNotNull);
        expect(unit.declarations,hasLength(0));
        this.listener.assertErrorsWithCodes(errorCodes);
        return unit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseEqualityExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parseEqualityExpression();
    }
    parseExpression(source : string,errorCodes? : core.DartList<any>) : any {
        errorCodes = errorCodes || new core.DartList.literal<any>();
        this.createParser(source);
        let expression : any = this.parser.parseExpression2();
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(errorCodes);
        return expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseExpressionList(code : string) : core.DartList<any> {
        this.createParser(code);
        return this.parser.parseExpressionList();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseExpressionWithoutCascade(code : string) : any {
        this.createParser(code);
        return this.parser.parseExpressionWithoutCascade();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseFormalParameter(code : string,kind : any,_namedArguments? : {errorCodes? : core.DartList<any>}) : any {
        let {errorCodes} = Object.assign({
            "errorCodes" : new core.DartList.literal<any>()}, _namedArguments );
        this.createParser(code);
        let parameter : any = this.parser.parseFormalParameter(kind);
        this.assertErrorsWithCodes(errorCodes);
        return parameter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseFormalParameterList(code : string,_namedArguments? : {inFunctionType? : boolean,errorCodes? : core.DartList<any>}) : any {
        let {inFunctionType,errorCodes} = Object.assign({
            "inFunctionType" : false,
            "errorCodes" : new core.DartList.literal<any>()}, _namedArguments );
        this.createParser(code);
        let list : any = this.parser.parseFormalParameterList({
            inFunctionType : inFunctionType});
        this.assertErrorsWithCodes(errorCodes);
        return list;
    }
    parseFullCompilationUnitMember() : any {
        return this.parser.parseCompilationUnitMember(this.parser.parseCommentAndMetadata());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseFullDirective() : any {
        return this.parser.parseDirective(this.parser.parseCommentAndMetadata());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseFunctionExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parseFunctionExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseInstanceCreationExpression(code : string,newToken : any) : any {
        this.createParser(code);
        return this.parser.parseInstanceCreationExpression(newToken);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseListLiteral(token : any,typeArgumentsCode : string,code : string) : any {
        let typeArguments : any;
        if (typeArgumentsCode != null) {
            this.createParser(typeArgumentsCode);
            typeArguments = this.parser.parseTypeArgumentList();
        }
        this.createParser(code);
        return this.parser.parseListLiteral(token,typeArguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseListOrMapLiteral(modifier : any,code : string) : any {
        this.createParser(code);
        return this.parser.parseListOrMapLiteral(modifier);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseLogicalAndExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parseLogicalAndExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseLogicalOrExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parseLogicalOrExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseMapLiteral(token : any,typeArgumentsCode : string,code : string) : any {
        let typeArguments : any;
        if (typeArgumentsCode != null) {
            this.createParser(typeArgumentsCode);
            typeArguments = this.parser.parseTypeArgumentList();
        }
        this.createParser(code);
        return this.parser.parseMapLiteral(token,typeArguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseMapLiteralEntry(code : string) : any {
        this.createParser(code);
        return this.parser.parseMapLiteralEntry();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseMultiplicativeExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parseMultiplicativeExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseNewExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parseNewExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseNormalFormalParameter(code : string,_namedArguments? : {inFunctionType? : boolean,errorCodes? : core.DartList<any>}) : any {
        let {inFunctionType,errorCodes} = Object.assign({
            "inFunctionType" : false,
            "errorCodes" : new core.DartList.literal<any>()}, _namedArguments );
        this.createParser(code);
        let parameter : any = this.parser.parseNormalFormalParameter({
            inFunctionType : inFunctionType});
        this.assertErrorsWithCodes(errorCodes);
        return parameter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parsePostfixExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parsePostfixExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parsePrefixedIdentifier(code : string) : any {
        this.createParser(code);
        return this.parser.parsePrefixedIdentifier();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parsePrimaryExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parsePrimaryExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseRelationalExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parseRelationalExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseRethrowExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parseRethrowExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseShiftExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parseShiftExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseSimpleIdentifier(code : string) : any {
        this.createParser(code);
        return this.parser.parseSimpleIdentifier();
    }
    parseStatement(source : string,enableLazyAssignmentOperators? : boolean) : any {
        this.listener = new lib3.GatheringErrorListener();
        let scanner : any = new bare.createInstance(any,null,null,new bare.createInstance(any,null,source),this.listener);
        scanner.scanGenericMethodComments = this.enableGenericMethodComments;
        scanner.scanLazyAssignmentOperators = enableLazyAssignmentOperators;
        this.listener.setLineInfo(new lib3.TestSource(),scanner.lineStarts);
        let token : any = scanner.tokenize();
        let parser : any = new bare.createInstance(any,null,null,this.listener);
        parser.parseGenericMethodComments = this.enableGenericMethodComments;
        let statement : any = parser.parseStatement(token);
        expect(statement,isNotNull);
        return statement;
    }
    parseStatements(source : string,expectedCount : number,errorCodes? : core.DartList<any>) : core.DartList<any> {
        errorCodes = errorCodes || new core.DartList.literal<any>();
        let listener : lib3.GatheringErrorListener = new lib3.GatheringErrorListener();
        let scanner : any = new bare.createInstance(any,null,null,new bare.createInstance(any,null,source),listener);
        listener.setLineInfo(new lib3.TestSource(),scanner.lineStarts);
        let token : any = scanner.tokenize();
        let parser : any = new bare.createInstance(any,null,null,listener);
        let statements : core.DartList<any> = parser.parseStatements(token);
        expect(statements,hasLength(expectedCount));
        listener.assertErrorsWithCodes(errorCodes);
        return statements;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseStringLiteral(code : string) : any {
        this.createParser(code);
        return this.parser.parseStringLiteral();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseSymbolLiteral(code : string) : any {
        this.createParser(code);
        return this.parser.parseSymbolLiteral();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseThrowExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parseThrowExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseThrowExpressionWithoutCascade(code : string) : any {
        this.createParser(code);
        return this.parser.parseThrowExpressionWithoutCascade();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseUnaryExpression(code : string) : any {
        this.createParser(code);
        return this.parser.parseUnaryExpression();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseVariableDeclarationList(code : string) : any {
        this.createParser(code);
        let commentAndMetadata : any = this.parser.parseCommentAndMetadata();
        return this.parser.parseVariableDeclarationListAfterMetadata(commentAndMetadata);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        ParserTestCase.parseFunctionBodies = true;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ParserTestCase() {
        this.enableAssertInitializer = false;
        this.parseAsync = true;
        this.enableGenericMethodComments = false;
        this.enableLazyAssignmentOperators = false;
        this.enableNnbd = false;
        this.enableUriInPartOf = false;
    }
}

export namespace ParserTestHelpers {
    export type Constructors = 'ParserTestHelpers';
    export type Interface = Omit<ParserTestHelpers, Constructors>;
}
@DartClass
export class ParserTestHelpers {
    expectCommentText(comment : any,expectedText : string) : void {
        expect(comment.beginToken,same(comment.endToken));
        expect(comment.beginToken.lexeme,expectedText);
    }
    expectDottedName(name : any,expectedComponents : core.DartList<string>) : void {
        let count : number = expectedComponents.length;
        let components : any = name.components;
        expect(components,hasLength(count));
        for(let i : number = 0; i < count; i++){
            let component : any = op(Op.INDEX,components,i);
            expect(component,isNotNull);
            expect(component.name,expectedComponents[i]);
        }
    }
    constructor() {
    }
    @defaultConstructor
    ParserTestHelpers() {
    }
}

export namespace StatementParserTestMixin {
    export type Constructors = 'StatementParserTestMixin';
    export type Interface = Omit<StatementParserTestMixin, Constructors>;
}
@DartClass
@Implements(AbstractParserTestCase)
export class StatementParserTestMixin implements AbstractParserTestCase.Interface {
    test_parseAssertStatement() : void {
        let statement = this.parseStatement('assert (x);') as any;
        this.assertNoErrors();
        expect(statement.assertKeyword,isNotNull);
        expect(statement.leftParenthesis,isNotNull);
        expect(statement.condition,isNotNull);
        expect(statement.comma,isNull);
        expect(statement.message,isNull);
        expect(statement.rightParenthesis,isNotNull);
        expect(statement.semicolon,isNotNull);
    }
    test_parseAssertStatement_messageLowPrecedence() : void {
        let statement = this.parseStatement('assert (x, throw "foo");') as any;
        this.assertNoErrors();
        expect(statement.assertKeyword,isNotNull);
        expect(statement.leftParenthesis,isNotNull);
        expect(statement.condition,isNotNull);
        expect(statement.comma,isNotNull);
        expect(statement.message,isNotNull);
        expect(statement.rightParenthesis,isNotNull);
        expect(statement.semicolon,isNotNull);
    }
    test_parseAssertStatement_messageString() : void {
        let statement = this.parseStatement('assert (x, "foo");') as any;
        this.assertNoErrors();
        expect(statement.assertKeyword,isNotNull);
        expect(statement.leftParenthesis,isNotNull);
        expect(statement.condition,isNotNull);
        expect(statement.comma,isNotNull);
        expect(statement.message,isNotNull);
        expect(statement.rightParenthesis,isNotNull);
        expect(statement.semicolon,isNotNull);
    }
    test_parseBlock_empty() : void {
        let block = this.parseStatement('{}') as any;
        this.assertNoErrors();
        expect(block.leftBracket,isNotNull);
        expect(block.statements,hasLength(0));
        expect(block.rightBracket,isNotNull);
    }
    test_parseBlock_nonEmpty() : void {
        let block = this.parseStatement('{;}') as any;
        this.assertNoErrors();
        expect(block.leftBracket,isNotNull);
        expect(block.statements,hasLength(1));
        expect(block.rightBracket,isNotNull);
    }
    test_parseBreakStatement_label() : void {
        let statement = this.parseStatement('break foo;') as any;
        this.assertNoErrors();
        expect(statement.breakKeyword,isNotNull);
        expect(statement.label,isNotNull);
        expect(statement.semicolon,isNotNull);
    }
    test_parseBreakStatement_noLabel() : void {
        let statement = this.parseStatement('break;') as any;
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.BREAK_OUTSIDE_OF_LOOP));
        expect(statement.breakKeyword,isNotNull);
        expect(statement.label,isNull);
        expect(statement.semicolon,isNotNull);
    }
    test_parseContinueStatement_label() : void {
        let statement = this.parseStatement('continue foo;') as any;
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.CONTINUE_OUTSIDE_OF_LOOP));
        expect(statement.continueKeyword,isNotNull);
        expect(statement.label,isNotNull);
        expect(statement.semicolon,isNotNull);
    }
    test_parseContinueStatement_noLabel() : void {
        let statement = this.parseStatement('continue;') as any;
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.CONTINUE_OUTSIDE_OF_LOOP));
        expect(statement.continueKeyword,isNotNull);
        expect(statement.label,isNull);
        expect(statement.semicolon,isNotNull);
    }
    test_parseDoStatement() : void {
        let statement = this.parseStatement('do {} while (x);') as any;
        this.assertNoErrors();
        expect(statement.doKeyword,isNotNull);
        expect(statement.body,isNotNull);
        expect(statement.whileKeyword,isNotNull);
        expect(statement.leftParenthesis,isNotNull);
        expect(statement.condition,isNotNull);
        expect(statement.rightParenthesis,isNotNull);
        expect(statement.semicolon,isNotNull);
    }
    test_parseEmptyStatement() : void {
        let statement = this.parseStatement(';') as any;
        this.assertNoErrors();
        expect(statement.semicolon,isNotNull);
    }
    test_parseForStatement_each_await() : void {
        let code : string = 'await for (element in list) {}';
        let forStatement = this._parseAsyncStatement(code) as any;
        this.assertNoErrors();
        expect(forStatement.awaitKeyword,isNotNull);
        expect(forStatement.forKeyword,isNotNull);
        expect(forStatement.leftParenthesis,isNotNull);
        expect(forStatement.loopVariable,isNull);
        expect(forStatement.identifier,isNotNull);
        expect(forStatement.inKeyword,isNotNull);
        expect(forStatement.iterable,isNotNull);
        expect(forStatement.rightParenthesis,isNotNull);
        expect(forStatement.body,isNotNull);
    }
    test_parseForStatement_each_identifier() : void {
        let forStatement = this.parseStatement('for (element in list) {}') as any;
        this.assertNoErrors();
        expect(forStatement.awaitKeyword,isNull);
        expect(forStatement.forKeyword,isNotNull);
        expect(forStatement.leftParenthesis,isNotNull);
        expect(forStatement.loopVariable,isNull);
        expect(forStatement.identifier,isNotNull);
        expect(forStatement.inKeyword,isNotNull);
        expect(forStatement.iterable,isNotNull);
        expect(forStatement.rightParenthesis,isNotNull);
        expect(forStatement.body,isNotNull);
    }
    test_parseForStatement_each_noType_metadata() : void {
        let forStatement = this.parseStatement('for (@A var element in list) {}') as any;
        this.assertNoErrors();
        expect(forStatement.awaitKeyword,isNull);
        expect(forStatement.forKeyword,isNotNull);
        expect(forStatement.leftParenthesis,isNotNull);
        expect(forStatement.loopVariable,isNotNull);
        expect(forStatement.loopVariable.metadata,hasLength(1));
        expect(forStatement.identifier,isNull);
        expect(forStatement.inKeyword,isNotNull);
        expect(forStatement.iterable,isNotNull);
        expect(forStatement.rightParenthesis,isNotNull);
        expect(forStatement.body,isNotNull);
    }
    test_parseForStatement_each_type() : void {
        let forStatement = this.parseStatement('for (A element in list) {}') as any;
        this.assertNoErrors();
        expect(forStatement.awaitKeyword,isNull);
        expect(forStatement.forKeyword,isNotNull);
        expect(forStatement.leftParenthesis,isNotNull);
        expect(forStatement.loopVariable,isNotNull);
        expect(forStatement.identifier,isNull);
        expect(forStatement.inKeyword,isNotNull);
        expect(forStatement.iterable,isNotNull);
        expect(forStatement.rightParenthesis,isNotNull);
        expect(forStatement.body,isNotNull);
    }
    test_parseForStatement_each_var() : void {
        let forStatement = this.parseStatement('for (var element in list) {}') as any;
        this.assertNoErrors();
        expect(forStatement.awaitKeyword,isNull);
        expect(forStatement.forKeyword,isNotNull);
        expect(forStatement.leftParenthesis,isNotNull);
        expect(forStatement.loopVariable,isNotNull);
        expect(forStatement.identifier,isNull);
        expect(forStatement.inKeyword,isNotNull);
        expect(forStatement.iterable,isNotNull);
        expect(forStatement.rightParenthesis,isNotNull);
        expect(forStatement.body,isNotNull);
    }
    test_parseForStatement_loop_c() : void {
        let forStatement = this.parseStatement('for (; i < count;) {}') as any;
        this.assertNoErrors();
        expect(forStatement.forKeyword,isNotNull);
        expect(forStatement.leftParenthesis,isNotNull);
        expect(forStatement.variables,isNull);
        expect(forStatement.initialization,isNull);
        expect(forStatement.leftSeparator,isNotNull);
        expect(forStatement.condition,isNotNull);
        expect(forStatement.rightSeparator,isNotNull);
        expect(forStatement.updaters,hasLength(0));
        expect(forStatement.rightParenthesis,isNotNull);
        expect(forStatement.body,isNotNull);
    }
    test_parseForStatement_loop_cu() : void {
        let forStatement = this.parseStatement('for (; i < count; i++) {}') as any;
        this.assertNoErrors();
        expect(forStatement.forKeyword,isNotNull);
        expect(forStatement.leftParenthesis,isNotNull);
        expect(forStatement.variables,isNull);
        expect(forStatement.initialization,isNull);
        expect(forStatement.leftSeparator,isNotNull);
        expect(forStatement.condition,isNotNull);
        expect(forStatement.rightSeparator,isNotNull);
        expect(forStatement.updaters,hasLength(1));
        expect(forStatement.rightParenthesis,isNotNull);
        expect(forStatement.body,isNotNull);
    }
    test_parseForStatement_loop_ecu() : void {
        let forStatement = this.parseStatement('for (i--; i < count; i++) {}') as any;
        this.assertNoErrors();
        expect(forStatement.forKeyword,isNotNull);
        expect(forStatement.leftParenthesis,isNotNull);
        expect(forStatement.variables,isNull);
        expect(forStatement.initialization,isNotNull);
        expect(forStatement.leftSeparator,isNotNull);
        expect(forStatement.condition,isNotNull);
        expect(forStatement.rightSeparator,isNotNull);
        expect(forStatement.updaters,hasLength(1));
        expect(forStatement.rightParenthesis,isNotNull);
        expect(forStatement.body,isNotNull);
    }
    test_parseForStatement_loop_i() : void {
        let forStatement = this.parseStatement('for (var i = 0;;) {}') as any;
        this.assertNoErrors();
        expect(forStatement.forKeyword,isNotNull);
        expect(forStatement.leftParenthesis,isNotNull);
        let variables : any = forStatement.variables;
        expect(variables,isNotNull);
        expect(variables.metadata,hasLength(0));
        expect(variables.variables,hasLength(1));
        expect(forStatement.initialization,isNull);
        expect(forStatement.leftSeparator,isNotNull);
        expect(forStatement.condition,isNull);
        expect(forStatement.rightSeparator,isNotNull);
        expect(forStatement.updaters,hasLength(0));
        expect(forStatement.rightParenthesis,isNotNull);
        expect(forStatement.body,isNotNull);
    }
    test_parseForStatement_loop_i_withMetadata() : void {
        let forStatement = this.parseStatement('for (@A var i = 0;;) {}') as any;
        this.assertNoErrors();
        expect(forStatement.forKeyword,isNotNull);
        expect(forStatement.leftParenthesis,isNotNull);
        let variables : any = forStatement.variables;
        expect(variables,isNotNull);
        expect(variables.metadata,hasLength(1));
        expect(variables.variables,hasLength(1));
        expect(forStatement.initialization,isNull);
        expect(forStatement.leftSeparator,isNotNull);
        expect(forStatement.condition,isNull);
        expect(forStatement.rightSeparator,isNotNull);
        expect(forStatement.updaters,hasLength(0));
        expect(forStatement.rightParenthesis,isNotNull);
        expect(forStatement.body,isNotNull);
    }
    test_parseForStatement_loop_ic() : void {
        let forStatement = this.parseStatement('for (var i = 0; i < count;) {}') as any;
        this.assertNoErrors();
        expect(forStatement.forKeyword,isNotNull);
        expect(forStatement.leftParenthesis,isNotNull);
        let variables : any = forStatement.variables;
        expect(variables,isNotNull);
        expect(variables.variables,hasLength(1));
        expect(forStatement.initialization,isNull);
        expect(forStatement.leftSeparator,isNotNull);
        expect(forStatement.condition,isNotNull);
        expect(forStatement.rightSeparator,isNotNull);
        expect(forStatement.updaters,hasLength(0));
        expect(forStatement.rightParenthesis,isNotNull);
        expect(forStatement.body,isNotNull);
    }
    test_parseForStatement_loop_icu() : void {
        let forStatement = this.parseStatement('for (var i = 0; i < count; i++) {}') as any;
        this.assertNoErrors();
        expect(forStatement.forKeyword,isNotNull);
        expect(forStatement.leftParenthesis,isNotNull);
        let variables : any = forStatement.variables;
        expect(variables,isNotNull);
        expect(variables.variables,hasLength(1));
        expect(forStatement.initialization,isNull);
        expect(forStatement.leftSeparator,isNotNull);
        expect(forStatement.condition,isNotNull);
        expect(forStatement.rightSeparator,isNotNull);
        expect(forStatement.updaters,hasLength(1));
        expect(forStatement.rightParenthesis,isNotNull);
        expect(forStatement.body,isNotNull);
    }
    test_parseForStatement_loop_iicuu() : void {
        let forStatement = this.parseStatement('for (int i = 0, j = count; i < j; i++, j--) {}') as any;
        this.assertNoErrors();
        expect(forStatement.forKeyword,isNotNull);
        expect(forStatement.leftParenthesis,isNotNull);
        let variables : any = forStatement.variables;
        expect(variables,isNotNull);
        expect(variables.variables,hasLength(2));
        expect(forStatement.initialization,isNull);
        expect(forStatement.leftSeparator,isNotNull);
        expect(forStatement.condition,isNotNull);
        expect(forStatement.rightSeparator,isNotNull);
        expect(forStatement.updaters,hasLength(2));
        expect(forStatement.rightParenthesis,isNotNull);
        expect(forStatement.body,isNotNull);
    }
    test_parseForStatement_loop_iu() : void {
        let forStatement = this.parseStatement('for (var i = 0;; i++) {}') as any;
        this.assertNoErrors();
        expect(forStatement.forKeyword,isNotNull);
        expect(forStatement.leftParenthesis,isNotNull);
        let variables : any = forStatement.variables;
        expect(variables,isNotNull);
        expect(variables.variables,hasLength(1));
        expect(forStatement.initialization,isNull);
        expect(forStatement.leftSeparator,isNotNull);
        expect(forStatement.condition,isNull);
        expect(forStatement.rightSeparator,isNotNull);
        expect(forStatement.updaters,hasLength(1));
        expect(forStatement.rightParenthesis,isNotNull);
        expect(forStatement.body,isNotNull);
    }
    test_parseForStatement_loop_u() : void {
        let forStatement = this.parseStatement('for (;; i++) {}') as any;
        this.assertNoErrors();
        expect(forStatement.forKeyword,isNotNull);
        expect(forStatement.leftParenthesis,isNotNull);
        expect(forStatement.variables,isNull);
        expect(forStatement.initialization,isNull);
        expect(forStatement.leftSeparator,isNotNull);
        expect(forStatement.condition,isNull);
        expect(forStatement.rightSeparator,isNotNull);
        expect(forStatement.updaters,hasLength(1));
        expect(forStatement.rightParenthesis,isNotNull);
        expect(forStatement.body,isNotNull);
    }
    test_parseFunctionDeclarationStatement() : void {
        let statement = this.parseStatement('void f(int p) => p * 2;') as any;
        this.assertNoErrors();
        expect(statement.functionDeclaration,isNotNull);
    }
    test_parseFunctionDeclarationStatement_typeParameterComments() : void {
        this.enableGenericMethodComments = true;
        let statement = this.parseStatement('/*=E*/ f/*<E>*/(/*=E*/ p) => p * 2;') as any;
        this.assertNoErrors();
        let f : any = statement.functionDeclaration;
        expect(f,isNotNull);
        expect(f.functionExpression.typeParameters,isNotNull);
        expect(f.returnType,isNotNull);
        let p : any = op(Op.INDEX,f.functionExpression.parameters.parameters,0);
        expect(p.type,isNotNull);
    }
    test_parseFunctionDeclarationStatement_typeParameters() : void {
        let statement = this.parseStatement('E f<E>(E p) => p * 2;') as any;
        this.assertNoErrors();
        expect(statement.functionDeclaration,isNotNull);
        expect(statement.functionDeclaration.functionExpression.typeParameters,isNotNull);
    }
    test_parseFunctionDeclarationStatement_typeParameters_noReturnType() : void {
        let statement = this.parseStatement('f<E>(E p) => p * 2;') as any;
        this.assertNoErrors();
        expect(statement.functionDeclaration,isNotNull);
        expect(statement.functionDeclaration.functionExpression.typeParameters,isNotNull);
    }
    test_parseIfStatement_else_block() : void {
        let statement = this.parseStatement('if (x) {} else {}') as any;
        this.assertNoErrors();
        expect(statement.ifKeyword,isNotNull);
        expect(statement.leftParenthesis,isNotNull);
        expect(statement.condition,isNotNull);
        expect(statement.rightParenthesis,isNotNull);
        expect(statement.thenStatement,isNotNull);
        expect(statement.elseKeyword,isNotNull);
        expect(statement.elseStatement,isNotNull);
    }
    test_parseIfStatement_else_statement() : void {
        let statement = this.parseStatement('if (x) f(x); else f(y);') as any;
        this.assertNoErrors();
        expect(statement.ifKeyword,isNotNull);
        expect(statement.leftParenthesis,isNotNull);
        expect(statement.condition,isNotNull);
        expect(statement.rightParenthesis,isNotNull);
        expect(statement.thenStatement,isNotNull);
        expect(statement.elseKeyword,isNotNull);
        expect(statement.elseStatement,isNotNull);
    }
    test_parseIfStatement_noElse_block() : void {
        let statement = this.parseStatement('if (x) {}') as any;
        this.assertNoErrors();
        expect(statement.ifKeyword,isNotNull);
        expect(statement.leftParenthesis,isNotNull);
        expect(statement.condition,isNotNull);
        expect(statement.rightParenthesis,isNotNull);
        expect(statement.thenStatement,isNotNull);
        expect(statement.elseKeyword,isNull);
        expect(statement.elseStatement,isNull);
    }
    test_parseIfStatement_noElse_statement() : void {
        let statement = this.parseStatement('if (x) f(x);') as any;
        this.assertNoErrors();
        expect(statement.ifKeyword,isNotNull);
        expect(statement.leftParenthesis,isNotNull);
        expect(statement.condition,isNotNull);
        expect(statement.rightParenthesis,isNotNull);
        expect(statement.thenStatement,isNotNull);
        expect(statement.elseKeyword,isNull);
        expect(statement.elseStatement,isNull);
    }
    test_parseNonLabeledStatement_const_list_empty() : void {
        let statement = this.parseStatement('const [];') as any;
        this.assertNoErrors();
        expect(statement.expression,isNotNull);
    }
    test_parseNonLabeledStatement_const_list_nonEmpty() : void {
        let statement = this.parseStatement('const [1, 2];') as any;
        this.assertNoErrors();
        expect(statement.expression,isNotNull);
    }
    test_parseNonLabeledStatement_const_map_empty() : void {
        let statement = this.parseStatement('const {};') as any;
        this.assertNoErrors();
        expect(statement.expression,isNotNull);
    }
    test_parseNonLabeledStatement_const_map_nonEmpty() : void {
        let statement = this.parseStatement("const {'a' : 1};") as any;
        this.assertNoErrors();
        expect(statement.expression,isNotNull);
    }
    test_parseNonLabeledStatement_const_object() : void {
        let statement = this.parseStatement('const A();') as any;
        this.assertNoErrors();
        expect(statement.expression,isNotNull);
    }
    test_parseNonLabeledStatement_const_object_named_typeParameters() : void {
        let statement = this.parseStatement('const A<B>.c();') as any;
        this.assertNoErrors();
        expect(statement.expression,isNotNull);
    }
    test_parseNonLabeledStatement_constructorInvocation() : void {
        let statement = this.parseStatement('new C().m();') as any;
        this.assertNoErrors();
        expect(statement.expression,isNotNull);
    }
    test_parseNonLabeledStatement_false() : void {
        let statement = this.parseStatement('false;') as any;
        this.assertNoErrors();
        expect(statement.expression,isNotNull);
    }
    test_parseNonLabeledStatement_functionDeclaration() : void {
        let statement = this.parseStatement('f() {}') as any;
        this.assertNoErrors();
        let function = statement.functionDeclaration.functionExpression;
        expect(function.parameters.parameters,isEmpty);
        expect(function.body,isNotNull);
    }
    test_parseNonLabeledStatement_functionDeclaration_arguments() : void {
        let statement = this.parseStatement('f(void g()) {}') as any;
        this.assertNoErrors();
        let function = statement.functionDeclaration.functionExpression;
        expect(function.parameters.parameters,hasLength(1));
        expect(function.body,isNotNull);
    }
    test_parseNonLabeledStatement_functionExpressionIndex() : void {
        let statement = this.parseStatement('() {}[0] = null;') as any;
        this.assertNoErrors();
        expect(statement,isNotNull);
    }
    test_parseNonLabeledStatement_functionInvocation() : void {
        let statement = this.parseStatement('f();') as any;
        this.assertNoErrors();
        expect(statement.expression,isNotNull);
    }
    test_parseNonLabeledStatement_invokeFunctionExpression() : void {
        let statement = this.parseStatement('(a) {return a + a;} (3);') as any;
        this.assertNoErrors();
        let invocation = statement.expression as any;
        let expression : any = invocation.function as any;
        expect(expression.parameters,isNotNull);
        expect(expression.body,isNotNull);
        expect(invocation.typeArguments,isNull);
        expect(invocation.argumentList.arguments,hasLength(1));
    }
    test_parseNonLabeledStatement_localFunction_gftReturnType() : void {
        let statement = this.parseStatement('int Function(int) f(String s) => null;') as any;
        this.assertNoErrors();
        let function : any = statement.functionDeclaration;
        expect(function.returnType,new bare.createInstance(any,null));
    }
    test_parseNonLabeledStatement_null() : void {
        let statement = this.parseStatement('null;') as any;
        this.assertNoErrors();
        expect(statement.expression,isNotNull);
    }
    test_parseNonLabeledStatement_startingWithBuiltInIdentifier() : void {
        let statement = this.parseStatement('library.getName();') as any;
        this.assertNoErrors();
        expect(statement.expression,isNotNull);
    }
    test_parseNonLabeledStatement_true() : void {
        let statement = this.parseStatement('true;') as any;
        this.assertNoErrors();
        expect(statement.expression,isNotNull);
    }
    test_parseNonLabeledStatement_typeCast() : void {
        let statement = this.parseStatement('double.NAN as num;') as any;
        this.assertNoErrors();
        expect(statement.expression,isNotNull);
    }
    test_parseNonLabeledStatement_variableDeclaration_final_namedFunction() : void {
        let statement = this.parseStatement('final int Function = 0;') as any;
        this.assertNoErrors();
        let variables : core.DartList<any> = statement.variables.variables;
        expect(variables,hasLength(1));
        expect(variables[0].name.name,'Function');
    }
    test_parseNonLabeledStatement_variableDeclaration_gftType() : void {
        let statement = this.parseStatement('int Function(int) v;') as any;
        this.assertNoErrors();
        let variableList : any = statement.variables;
        let variables : core.DartList<any> = variableList.variables;
        expect(variables,hasLength(1));
        expect(variables[0].name.name,'v');
        expect(variableList.type,new bare.createInstance(any,null));
    }
    test_parseNonLabeledStatement_variableDeclaration_gftType_functionReturnType() : void {
        let statement = this.parseStatement('Function Function(int x1, {Function x}) Function<B extends core.int>(int x) v;') as any;
        this.assertNoErrors();
        let variableList : any = statement.variables;
        let variables : core.DartList<any> = variableList.variables;
        expect(variables,hasLength(1));
        expect(variables[0].name.name,'v');
        expect(variableList.type,new bare.createInstance(any,null));
    }
    test_parseNonLabeledStatement_variableDeclaration_gftType_gftReturnType() : void {
        let statement = this.parseStatement('Function(int) Function(int) v;') as any;
        this.assertNoErrors();
        let variableList : any = statement.variables;
        let variables : core.DartList<any> = variableList.variables;
        expect(variables,hasLength(1));
        expect(variables[0].name.name,'v');
        expect(variableList.type,new bare.createInstance(any,null));
    }
    test_parseNonLabeledStatement_variableDeclaration_gftType_gftReturnType2() : void {
        let statement = this.parseStatement('int Function(int) Function(int) v;') as any;
        this.assertNoErrors();
        let variableList : any = statement.variables;
        let variables : core.DartList<any> = variableList.variables;
        expect(variables,hasLength(1));
        expect(variables[0].name.name,'v');
        expect(variableList.type,new bare.createInstance(any,null));
    }
    test_parseNonLabeledStatement_variableDeclaration_gftType_noReturnType() : void {
        let statement = this.parseStatement('Function(int) v;') as any;
        this.assertNoErrors();
        let variableList : any = statement.variables;
        let variables : core.DartList<any> = variableList.variables;
        expect(variables,hasLength(1));
        expect(variables[0].name.name,'v');
        expect(variableList.type,new bare.createInstance(any,null));
    }
    test_parseNonLabeledStatement_variableDeclaration_gftType_returnType() : void {
        let statement = this.parseStatement('int Function<T>() v;') as any;
        this.assertNoErrors();
        let variableList : any = statement.variables;
        let variables : core.DartList<any> = variableList.variables;
        expect(variables,hasLength(1));
        expect(variables[0].name.name,'v');
        expect(variableList.type,new bare.createInstance(any,null));
    }
    test_parseNonLabeledStatement_variableDeclaration_gftType_voidReturnType() : void {
        let statement = this.parseStatement('void Function() v;') as any;
        this.assertNoErrors();
        let variableList : any = statement.variables;
        let variables : core.DartList<any> = variableList.variables;
        expect(variables,hasLength(1));
        expect(variables[0].name.name,'v');
        expect(variableList.type,new bare.createInstance(any,null));
    }
    test_parseStatement_emptyTypeArgumentList() : void {
        let declaration = this.parseStatement('C<> c;') as any;
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_TYPE_NAME));
        let variables : any = declaration.variables;
        let type : any = variables.type;
        let argumentList : any = type.typeArguments;
        expect(argumentList.leftBracket,isNotNull);
        expect(argumentList.arguments,hasLength(1));
        expect(op(Op.INDEX,argumentList.arguments,0).isSynthetic,isTrue);
        expect(argumentList.rightBracket,isNotNull);
    }
    test_parseStatement_function_gftReturnType() : void {
        let statement = this.parseStatement('void Function<A>(core.List<core.int> x) m() => null;') as any;
        expect(statement.functionDeclaration.functionExpression.body,new bare.createInstance(any,null));
    }
    test_parseStatement_functionDeclaration_noReturnType() : void {
        let statement = this.parseStatement('true;') as any;
        this.assertNoErrors();
        expect(statement.expression,isNotNull);
    }
    test_parseStatement_functionDeclaration_noReturnType_typeParameterComments() : void {
        this.enableGenericMethodComments = true;
        let statement = this.parseStatement('f/*<E>*/(a, b) {}') as any;
        this.assertNoErrors();
        expect(statement.functionDeclaration,isNotNull);
        expect(statement.functionDeclaration.functionExpression.typeParameters,isNotNull);
    }
    test_parseStatement_functionDeclaration_noReturnType_typeParameters() : void {
        let statement = this.parseStatement('f<E>(a, b) {}') as any;
        this.assertNoErrors();
        expect(statement.functionDeclaration,isNotNull);
    }
    test_parseStatement_functionDeclaration_returnType() : void {
        let statement = this.parseStatement('int f(a, b) {}') as any;
        this.assertNoErrors();
        expect(statement.functionDeclaration,isNotNull);
    }
    test_parseStatement_functionDeclaration_returnType_typeParameters() : void {
        let statement = this.parseStatement('int f<E>(a, b) {}') as any;
        this.assertNoErrors();
        expect(statement.functionDeclaration,isNotNull);
    }
    test_parseStatement_multipleLabels() : void {
        let statement = this.parseStatement('l: m: return x;') as any;
        expect(statement.labels,hasLength(2));
        expect(statement.statement,isNotNull);
    }
    test_parseStatement_noLabels() : void {
        let statement = this.parseStatement('return x;') as any;
        this.assertNoErrors();
        expect(statement,isNotNull);
    }
    test_parseStatement_singleLabel() : void {
        let statement = this.parseStatement('l: return x;') as any;
        this.assertNoErrors();
        expect(statement.labels,hasLength(1));
        expect(op(Op.INDEX,statement.labels,0).label.inDeclarationContext(),isTrue);
        expect(statement.statement,isNotNull);
    }
    test_parseSwitchStatement_case() : void {
        let statement = this.parseStatement('switch (a) {case 1: return "I";}') as any;
        this.assertNoErrors();
        expect(statement.switchKeyword,isNotNull);
        expect(statement.leftParenthesis,isNotNull);
        expect(statement.expression,isNotNull);
        expect(statement.rightParenthesis,isNotNull);
        expect(statement.leftBracket,isNotNull);
        expect(statement.members,hasLength(1));
        expect(statement.rightBracket,isNotNull);
    }
    test_parseSwitchStatement_empty() : void {
        let statement = this.parseStatement('switch (a) {}') as any;
        this.assertNoErrors();
        expect(statement.switchKeyword,isNotNull);
        expect(statement.leftParenthesis,isNotNull);
        expect(statement.expression,isNotNull);
        expect(statement.rightParenthesis,isNotNull);
        expect(statement.leftBracket,isNotNull);
        expect(statement.members,hasLength(0));
        expect(statement.rightBracket,isNotNull);
    }
    test_parseSwitchStatement_labeledCase() : void {
        let statement = this.parseStatement('switch (a) {l1: l2: l3: case(1):}') as any;
        this.assertNoErrors();
        expect(statement.switchKeyword,isNotNull);
        expect(statement.leftParenthesis,isNotNull);
        expect(statement.expression,isNotNull);
        expect(statement.rightParenthesis,isNotNull);
        expect(statement.leftBracket,isNotNull);
        expect(statement.members,hasLength(1));
        {
            let labels : core.DartList<any> = op(Op.INDEX,statement.members,0).labels;
            expect(labels,hasLength(3));
            expect(labels[0].label.inDeclarationContext(),isTrue);
            expect(labels[1].label.inDeclarationContext(),isTrue);
            expect(labels[2].label.inDeclarationContext(),isTrue);
        }
        expect(statement.rightBracket,isNotNull);
    }
    test_parseSwitchStatement_labeledDefault() : void {
        let statement = this.parseStatement('switch (a) {l1: l2: l3: default:}') as any;
        this.assertNoErrors();
        expect(statement.switchKeyword,isNotNull);
        expect(statement.leftParenthesis,isNotNull);
        expect(statement.expression,isNotNull);
        expect(statement.rightParenthesis,isNotNull);
        expect(statement.leftBracket,isNotNull);
        expect(statement.members,hasLength(1));
        {
            let labels : core.DartList<any> = op(Op.INDEX,statement.members,0).labels;
            expect(labels,hasLength(3));
            expect(labels[0].label.inDeclarationContext(),isTrue);
            expect(labels[1].label.inDeclarationContext(),isTrue);
            expect(labels[2].label.inDeclarationContext(),isTrue);
        }
        expect(statement.rightBracket,isNotNull);
    }
    test_parseSwitchStatement_labeledStatementInCase() : void {
        let statement = this.parseStatement('switch (a) {case 0: f(); l1: g(); break;}') as any;
        this.assertNoErrors();
        expect(statement.switchKeyword,isNotNull);
        expect(statement.leftParenthesis,isNotNull);
        expect(statement.expression,isNotNull);
        expect(statement.rightParenthesis,isNotNull);
        expect(statement.leftBracket,isNotNull);
        expect(statement.members,hasLength(1));
        expect(op(Op.INDEX,statement.members,0).statements,hasLength(3));
        expect(statement.rightBracket,isNotNull);
    }
    test_parseTryStatement_catch() : void {
        let statement = this.parseStatement('try {} catch (e) {}') as any;
        this.assertNoErrors();
        expect(statement.tryKeyword,isNotNull);
        expect(statement.body,isNotNull);
        let catchClauses : any = statement.catchClauses;
        expect(catchClauses,hasLength(1));
        let clause : any = op(Op.INDEX,catchClauses,0);
        expect(clause.onKeyword,isNull);
        expect(clause.exceptionType,isNull);
        expect(clause.catchKeyword,isNotNull);
        expect(clause.exceptionParameter,isNotNull);
        expect(clause.comma,isNull);
        expect(clause.stackTraceParameter,isNull);
        expect(clause.body,isNotNull);
        expect(statement.finallyKeyword,isNull);
        expect(statement.finallyBlock,isNull);
    }
    test_parseTryStatement_catch_finally() : void {
        let statement = this.parseStatement('try {} catch (e, s) {} finally {}') as any;
        this.assertNoErrors();
        expect(statement.tryKeyword,isNotNull);
        expect(statement.body,isNotNull);
        let catchClauses : any = statement.catchClauses;
        expect(catchClauses,hasLength(1));
        let clause : any = op(Op.INDEX,catchClauses,0);
        expect(clause.onKeyword,isNull);
        expect(clause.exceptionType,isNull);
        expect(clause.catchKeyword,isNotNull);
        expect(clause.exceptionParameter,isNotNull);
        expect(clause.comma,isNotNull);
        expect(clause.stackTraceParameter,isNotNull);
        expect(clause.body,isNotNull);
        expect(statement.finallyKeyword,isNotNull);
        expect(statement.finallyBlock,isNotNull);
    }
    test_parseTryStatement_finally() : void {
        let statement = this.parseStatement('try {} finally {}') as any;
        this.assertNoErrors();
        expect(statement.tryKeyword,isNotNull);
        expect(statement.body,isNotNull);
        expect(statement.catchClauses,hasLength(0));
        expect(statement.finallyKeyword,isNotNull);
        expect(statement.finallyBlock,isNotNull);
    }
    test_parseTryStatement_multiple() : void {
        let statement = this.parseStatement('try {} on NPE catch (e) {} on Error {} catch (e) {}') as any;
        this.assertNoErrors();
        expect(statement.tryKeyword,isNotNull);
        expect(statement.body,isNotNull);
        expect(statement.catchClauses,hasLength(3));
        expect(statement.finallyKeyword,isNull);
        expect(statement.finallyBlock,isNull);
    }
    test_parseTryStatement_on() : void {
        let statement = this.parseStatement('try {} on Error {}') as any;
        this.assertNoErrors();
        expect(statement.tryKeyword,isNotNull);
        expect(statement.body,isNotNull);
        let catchClauses : any = statement.catchClauses;
        expect(catchClauses,hasLength(1));
        let clause : any = op(Op.INDEX,catchClauses,0);
        expect(clause.onKeyword,isNotNull);
        expect(clause.exceptionType,isNotNull);
        expect(clause.catchKeyword,isNull);
        expect(clause.exceptionParameter,isNull);
        expect(clause.comma,isNull);
        expect(clause.stackTraceParameter,isNull);
        expect(clause.body,isNotNull);
        expect(statement.finallyKeyword,isNull);
        expect(statement.finallyBlock,isNull);
    }
    test_parseTryStatement_on_catch() : void {
        let statement = this.parseStatement('try {} on Error catch (e, s) {}') as any;
        this.assertNoErrors();
        expect(statement.tryKeyword,isNotNull);
        expect(statement.body,isNotNull);
        let catchClauses : any = statement.catchClauses;
        expect(catchClauses,hasLength(1));
        let clause : any = op(Op.INDEX,catchClauses,0);
        expect(clause.onKeyword,isNotNull);
        expect(clause.exceptionType,isNotNull);
        expect(clause.catchKeyword,isNotNull);
        expect(clause.exceptionParameter,isNotNull);
        expect(clause.comma,isNotNull);
        expect(clause.stackTraceParameter,isNotNull);
        expect(clause.body,isNotNull);
        expect(statement.finallyKeyword,isNull);
        expect(statement.finallyBlock,isNull);
    }
    test_parseTryStatement_on_catch_finally() : void {
        let statement = this.parseStatement('try {} on Error catch (e, s) {} finally {}') as any;
        this.assertNoErrors();
        expect(statement.tryKeyword,isNotNull);
        expect(statement.body,isNotNull);
        let catchClauses : any = statement.catchClauses;
        expect(catchClauses,hasLength(1));
        let clause : any = op(Op.INDEX,catchClauses,0);
        expect(clause.onKeyword,isNotNull);
        expect(clause.exceptionType,isNotNull);
        expect(clause.catchKeyword,isNotNull);
        expect(clause.exceptionParameter,isNotNull);
        expect(clause.comma,isNotNull);
        expect(clause.stackTraceParameter,isNotNull);
        expect(clause.body,isNotNull);
        expect(statement.finallyKeyword,isNotNull);
        expect(statement.finallyBlock,isNotNull);
    }
    test_parseVariableDeclarationListAfterMetadata_const_noType() : void {
        let declarationList = this.parseVariableDeclarationList('const a');
        this.assertNoErrors();
        expect(declarationList.keyword.lexeme,'const');
        expect(declarationList.type,isNull);
        expect(declarationList.variables,hasLength(1));
    }
    test_parseVariableDeclarationListAfterMetadata_const_type() : void {
        let declarationList = this.parseVariableDeclarationList('const A a');
        this.assertNoErrors();
        expect(declarationList.keyword.lexeme,'const');
        expect(declarationList.type,isNotNull);
        expect(declarationList.variables,hasLength(1));
    }
    test_parseVariableDeclarationListAfterMetadata_const_typeComment() : void {
        this.enableGenericMethodComments = true;
        let declarationList = this.parseVariableDeclarationList('const/*=T*/ a');
        this.assertNoErrors();
        expect((declarationList.type as any).name.name,'T');
        expect(declarationList.isConst,true);
    }
    test_parseVariableDeclarationListAfterMetadata_dynamic_typeComment() : void {
        this.enableGenericMethodComments = true;
        let declarationList = this.parseVariableDeclarationList('dynamic/*=T*/ a');
        this.assertNoErrors();
        expect((declarationList.type as any).name.name,'T');
        expect(declarationList.keyword,isNull);
    }
    test_parseVariableDeclarationListAfterMetadata_final_noType() : void {
        let declarationList = this.parseVariableDeclarationList('final a');
        this.assertNoErrors();
        expect(declarationList.keyword,isNotNull);
        expect(declarationList.type,isNull);
        expect(declarationList.variables,hasLength(1));
    }
    test_parseVariableDeclarationListAfterMetadata_final_type() : void {
        let declarationList = this.parseVariableDeclarationList('final A a');
        this.assertNoErrors();
        expect(declarationList.keyword.lexeme,'final');
        expect(declarationList.type,isNotNull);
        expect(declarationList.variables,hasLength(1));
    }
    test_parseVariableDeclarationListAfterMetadata_final_typeComment() : void {
        this.enableGenericMethodComments = true;
        let declarationList = this.parseVariableDeclarationList('final/*=T*/ a');
        this.assertNoErrors();
        expect((declarationList.type as any).name.name,'T');
        expect(declarationList.isFinal,true);
    }
    test_parseVariableDeclarationListAfterMetadata_type_multiple() : void {
        let declarationList = this.parseVariableDeclarationList('A a, b, c');
        this.assertNoErrors();
        expect(declarationList.keyword,isNull);
        expect(declarationList.type,isNotNull);
        expect(declarationList.variables,hasLength(3));
    }
    test_parseVariableDeclarationListAfterMetadata_type_single() : void {
        let declarationList = this.parseVariableDeclarationList('A a');
        this.assertNoErrors();
        expect(declarationList.keyword,isNull);
        expect(declarationList.type,isNotNull);
        expect(declarationList.variables,hasLength(1));
    }
    test_parseVariableDeclarationListAfterMetadata_type_typeComment() : void {
        this.enableGenericMethodComments = true;
        let declarationList = this.parseVariableDeclarationList('int/*=T*/ a');
        this.assertNoErrors();
        expect((declarationList.type as any).name.name,'T');
        expect(declarationList.keyword,isNull);
    }
    test_parseVariableDeclarationListAfterMetadata_var_multiple() : void {
        let declarationList = this.parseVariableDeclarationList('var a, b, c');
        this.assertNoErrors();
        expect(declarationList.keyword.lexeme,'var');
        expect(declarationList.type,isNull);
        expect(declarationList.variables,hasLength(3));
    }
    test_parseVariableDeclarationListAfterMetadata_var_single() : void {
        let declarationList = this.parseVariableDeclarationList('var a');
        this.assertNoErrors();
        expect(declarationList.keyword.lexeme,'var');
        expect(declarationList.type,isNull);
        expect(declarationList.variables,hasLength(1));
    }
    test_parseVariableDeclarationListAfterMetadata_var_typeComment() : void {
        this.enableGenericMethodComments = true;
        let declarationList = this.parseVariableDeclarationList('var/*=T*/ a');
        this.assertNoErrors();
        expect((declarationList.type as any).name.name,'T');
        expect(declarationList.keyword,isNull);
    }
    test_parseVariableDeclarationStatementAfterMetadata_multiple() : void {
        let statement = this.parseStatement('var x, y, z;') as any;
        this.assertNoErrors();
        expect(statement.semicolon,isNotNull);
        let variableList : any = statement.variables;
        expect(variableList,isNotNull);
        expect(variableList.variables,hasLength(3));
    }
    test_parseVariableDeclarationStatementAfterMetadata_single() : void {
        let statement = this.parseStatement('var x;') as any;
        this.assertNoErrors();
        expect(statement.semicolon,isNotNull);
        let variableList : any = statement.variables;
        expect(variableList,isNotNull);
        expect(variableList.variables,hasLength(1));
    }
    test_parseWhileStatement() : void {
        let statement = this.parseStatement('while (x) {}') as any;
        this.assertNoErrors();
        expect(statement.whileKeyword,isNotNull);
        expect(statement.leftParenthesis,isNotNull);
        expect(statement.condition,isNotNull);
        expect(statement.rightParenthesis,isNotNull);
        expect(statement.body,isNotNull);
    }
    test_parseYieldStatement_each() : void {
        let statement = this._parseAsyncStatement('yield* x;',{
            isGenerator : true}) as any;
        this.assertNoErrors();
        expect(statement.yieldKeyword,isNotNull);
        expect(statement.star,isNotNull);
        expect(statement.expression,isNotNull);
        expect(statement.semicolon,isNotNull);
    }
    test_parseYieldStatement_normal() : void {
        let statement = this._parseAsyncStatement('yield x;',{
            isGenerator : true}) as any;
        this.assertNoErrors();
        expect(statement.yieldKeyword,isNotNull);
        expect(statement.star,isNull);
        expect(statement.expression,isNotNull);
        expect(statement.semicolon,isNotNull);
    }
    _parseAsyncStatement(code : string,_namedArguments? : {isGenerator? : boolean}) : any {
        let {isGenerator} = Object.assign({
            "isGenerator" : false}, _namedArguments );
        let star = isGenerator ? '*' : '';
        let localFunction = this.parseStatement(`wrapper() async${star} { ${code} }`) as any;
        let localBody = localFunction.functionDeclaration.functionExpression.body as any;
        return localBody.block.statements.single;
    }
    constructor() {
    }
    @defaultConstructor
    StatementParserTestMixin() {
    }
}

export namespace TopLevelParserTestMixin {
    export type Constructors = 'TopLevelParserTestMixin';
    export type Interface = Omit<TopLevelParserTestMixin, Constructors>;
}
@DartClass
@Implements(AbstractParserTestCase)
export class TopLevelParserTestMixin implements AbstractParserTestCase.Interface {
    test_function_literal_allowed_at_toplevel() : void {
        this.parseCompilationUnit("var x = () {};");
    }
    test_function_literal_allowed_in_ArgumentList_in_ConstructorFieldInitializer() : void {
        this.parseCompilationUnit("class C { C() : a = f(() {}); }");
    }
    test_function_literal_allowed_in_IndexExpression_in_ConstructorFieldInitializer() : void {
        this.parseCompilationUnit("class C { C() : a = x[() {}]; }");
    }
    test_function_literal_allowed_in_ListLiteral_in_ConstructorFieldInitializer() : void {
        this.parseCompilationUnit("class C { C() : a = [() {}]; }");
    }
    test_function_literal_allowed_in_MapLiteral_in_ConstructorFieldInitializer() : void {
        this.parseCompilationUnit("class C { C() : a = {'key': () {}}; }");
    }
    test_function_literal_allowed_in_ParenthesizedExpression_in_ConstructorFieldInitializer() : void {
        this.parseCompilationUnit("class C { C() : a = (() {}); }");
    }
    test_function_literal_allowed_in_StringInterpolation_in_ConstructorFieldInitializer() : void {
        this.parseCompilationUnit("class C { C() : a = \"${(){}}\"; }");
    }
    test_import_as_show() : void {
        this.parseCompilationUnit("import 'dart:math' as M show E;");
    }
    test_import_show_hide() : void {
        this.parseCompilationUnit("import 'import1_lib.dart' show hide, show hide ugly;");
    }
    test_import_withDocComment() : void {
        let compilationUnit = this.parseCompilationUnit('/// Doc\nimport "foo.dart";');
        let importDirective = op(Op.INDEX,compilationUnit.directives,0);
        this.expectCommentText(importDirective.documentationComment,'/// Doc');
    }
    test_parseClassDeclaration_abstract() : void {
        this.createParser('abstract class A {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.documentationComment,isNull);
        expect(declaration.abstractKeyword,isNotNull);
        expect(declaration.extendsClause,isNull);
        expect(declaration.implementsClause,isNull);
        expect(declaration.classKeyword,isNotNull);
        expect(declaration.leftBracket,isNotNull);
        expect(declaration.name,isNotNull);
        expect(declaration.members,hasLength(0));
        expect(declaration.rightBracket,isNotNull);
        expect(declaration.typeParameters,isNull);
    }
    test_parseClassDeclaration_empty() : void {
        this.createParser('class A {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.documentationComment,isNull);
        expect(declaration.abstractKeyword,isNull);
        expect(declaration.extendsClause,isNull);
        expect(declaration.implementsClause,isNull);
        expect(declaration.classKeyword,isNotNull);
        expect(declaration.leftBracket,isNotNull);
        expect(declaration.name,isNotNull);
        this._assertIsDeclarationName(declaration.name);
        expect(declaration.members,hasLength(0));
        expect(declaration.rightBracket,isNotNull);
        expect(declaration.typeParameters,isNull);
    }
    test_parseClassDeclaration_extends() : void {
        this.createParser('class A extends B {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.documentationComment,isNull);
        expect(declaration.abstractKeyword,isNull);
        expect(declaration.extendsClause,isNotNull);
        expect(declaration.implementsClause,isNull);
        expect(declaration.classKeyword,isNotNull);
        expect(declaration.leftBracket,isNotNull);
        expect(declaration.name,isNotNull);
        expect(declaration.members,hasLength(0));
        expect(declaration.rightBracket,isNotNull);
        expect(declaration.typeParameters,isNull);
    }
    test_parseClassDeclaration_extendsAndImplements() : void {
        this.createParser('class A extends B implements C {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.documentationComment,isNull);
        expect(declaration.abstractKeyword,isNull);
        expect(declaration.extendsClause,isNotNull);
        expect(declaration.implementsClause,isNotNull);
        expect(declaration.classKeyword,isNotNull);
        expect(declaration.leftBracket,isNotNull);
        expect(declaration.name,isNotNull);
        expect(declaration.members,hasLength(0));
        expect(declaration.rightBracket,isNotNull);
        expect(declaration.typeParameters,isNull);
    }
    test_parseClassDeclaration_extendsAndWith() : void {
        this.createParser('class A extends B with C {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.documentationComment,isNull);
        expect(declaration.abstractKeyword,isNull);
        expect(declaration.classKeyword,isNotNull);
        expect(declaration.name,isNotNull);
        expect(declaration.typeParameters,isNull);
        expect(declaration.extendsClause,isNotNull);
        expect(declaration.withClause,isNotNull);
        expect(declaration.implementsClause,isNull);
        expect(declaration.leftBracket,isNotNull);
        expect(declaration.members,hasLength(0));
        expect(declaration.rightBracket,isNotNull);
    }
    test_parseClassDeclaration_extendsAndWithAndImplements() : void {
        this.createParser('class A extends B with C implements D {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.documentationComment,isNull);
        expect(declaration.abstractKeyword,isNull);
        expect(declaration.classKeyword,isNotNull);
        expect(declaration.name,isNotNull);
        expect(declaration.typeParameters,isNull);
        expect(declaration.extendsClause,isNotNull);
        expect(declaration.withClause,isNotNull);
        expect(declaration.implementsClause,isNotNull);
        expect(declaration.leftBracket,isNotNull);
        expect(declaration.members,hasLength(0));
        expect(declaration.rightBracket,isNotNull);
    }
    test_parseClassDeclaration_implements() : void {
        this.createParser('class A implements C {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.documentationComment,isNull);
        expect(declaration.abstractKeyword,isNull);
        expect(declaration.extendsClause,isNull);
        expect(declaration.implementsClause,isNotNull);
        expect(declaration.classKeyword,isNotNull);
        expect(declaration.leftBracket,isNotNull);
        expect(declaration.name,isNotNull);
        expect(declaration.members,hasLength(0));
        expect(declaration.rightBracket,isNotNull);
        expect(declaration.typeParameters,isNull);
    }
    test_parseClassDeclaration_metadata() : void {
        this.createParser('@A @B(2) @C.foo(3) @d.E.bar(4, 5) class X {}');
        let declaration = this.parseFullCompilationUnitMember() as any;
        expect(declaration.metadata,hasLength(4));
        {
            let annotation = op(Op.INDEX,declaration.metadata,0);
            expect(annotation.atSign,isNotNull);
            expect(annotation.name,new bare.createInstance(any,null));
            expect(annotation.name.name,'A');
            expect(annotation.period,isNull);
            expect(annotation.constructorName,isNull);
            expect(annotation.arguments,isNull);
        }
        {
            let annotation = op(Op.INDEX,declaration.metadata,1);
            expect(annotation.atSign,isNotNull);
            expect(annotation.name,new bare.createInstance(any,null));
            expect(annotation.name.name,'B');
            expect(annotation.period,isNull);
            expect(annotation.constructorName,isNull);
            expect(annotation.arguments,isNotNull);
            expect(annotation.arguments.arguments,hasLength(1));
        }
        {
            let annotation = op(Op.INDEX,declaration.metadata,2);
            expect(annotation.atSign,isNotNull);
            expect(annotation.name,new bare.createInstance(any,null));
            expect(annotation.name.name,'C.foo');
            expect(annotation.period,isNull);
            expect(annotation.constructorName,isNull);
            expect(annotation.arguments,isNotNull);
            expect(annotation.arguments.arguments,hasLength(1));
        }
        {
            let annotation = op(Op.INDEX,declaration.metadata,3);
            expect(annotation.atSign,isNotNull);
            expect(annotation.name,new bare.createInstance(any,null));
            expect(annotation.name.name,'d.E');
            expect(annotation.period,isNotNull);
            expect(annotation.constructorName,isNotNull);
            expect(annotation.constructorName.name,'bar');
            expect(annotation.arguments,isNotNull);
            expect(annotation.arguments.arguments,hasLength(2));
        }
    }
    test_parseClassDeclaration_native() : void {
        this.createParser('class A native "nativeValue" {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        let nativeClause : any = declaration.nativeClause;
        expect(nativeClause,isNotNull);
        expect(nativeClause.nativeKeyword,isNotNull);
        expect(nativeClause.name.stringValue,"nativeValue");
        expect(nativeClause.beginToken,same(nativeClause.nativeKeyword));
        expect(nativeClause.endToken,same(nativeClause.name.endToken));
    }
    test_parseClassDeclaration_nonEmpty() : void {
        this.createParser('class A {var f;}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.documentationComment,isNull);
        expect(declaration.abstractKeyword,isNull);
        expect(declaration.extendsClause,isNull);
        expect(declaration.implementsClause,isNull);
        expect(declaration.classKeyword,isNotNull);
        expect(declaration.leftBracket,isNotNull);
        expect(declaration.name,isNotNull);
        expect(declaration.members,hasLength(1));
        expect(declaration.rightBracket,isNotNull);
        expect(declaration.typeParameters,isNull);
    }
    test_parseClassDeclaration_typeAlias_implementsC() : void {
        this.createParser('class A = Object with B implements C;');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let typeAlias : any = member;
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        this._assertIsDeclarationName(typeAlias.name);
        expect(typeAlias.typeParameters,isNull);
        expect(typeAlias.withClause,isNotNull);
        expect(typeAlias.implementsClause,isNotNull);
        expect(typeAlias.implementsClause.implementsKeyword,isNotNull);
        expect(typeAlias.implementsClause.interfaces.length,1);
        expect(typeAlias.semicolon,isNotNull);
    }
    test_parseClassDeclaration_typeAlias_withB() : void {
        this.createParser('class A = Object with B;');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let typeAlias : any = member;
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.typeParameters,isNull);
        expect(typeAlias.withClause,isNotNull);
        expect(typeAlias.withClause.withKeyword,isNotNull);
        expect(typeAlias.withClause.mixinTypes.length,1);
        expect(typeAlias.implementsClause,isNull);
        expect(typeAlias.semicolon,isNotNull);
    }
    test_parseClassDeclaration_typeParameters() : void {
        this.createParser('class A<B> {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.documentationComment,isNull);
        expect(declaration.abstractKeyword,isNull);
        expect(declaration.extendsClause,isNull);
        expect(declaration.implementsClause,isNull);
        expect(declaration.classKeyword,isNotNull);
        expect(declaration.leftBracket,isNotNull);
        expect(declaration.name,isNotNull);
        this._assertIsDeclarationName(declaration.name);
        expect(declaration.members,hasLength(0));
        expect(declaration.rightBracket,isNotNull);
        expect(declaration.typeParameters,isNotNull);
        expect(declaration.typeParameters.typeParameters,hasLength(1));
        this._assertIsDeclarationName(op(Op.INDEX,declaration.typeParameters.typeParameters,0).name);
    }
    test_parseClassDeclaration_withDocumentationComment() : void {
        this.createParser('/// Doc\nclass C {}');
        let classDeclaration = this.parseFullCompilationUnitMember() as any;
        this.expectCommentText(classDeclaration.documentationComment,'/// Doc');
    }
    test_parseClassTypeAlias_withDocumentationComment() : void {
        this.createParser('/// Doc\nclass C = D with E;');
        let classTypeAlias = this.parseFullCompilationUnitMember() as any;
        this.expectCommentText(classTypeAlias.documentationComment,'/// Doc');
    }
    test_parseCompilationUnit_abstractAsPrefix_parameterized() : void {
        this.createParser('abstract<dynamic> _abstract = new abstract.A();');
        let unit : any = this.parser.parseCompilationUnit2();
        expect(unit,isNotNull);
        this.assertNoErrors();
        expect(unit.scriptTag,isNull);
        expect(unit.directives,hasLength(0));
        expect(unit.declarations,hasLength(1));
    }
    test_parseCompilationUnit_builtIn_asFunctionName() : void {
        this.parseCompilationUnit('abstract(x) => 0;');
        this.parseCompilationUnit('as(x) => 0;');
        this.parseCompilationUnit('dynamic(x) => 0;');
        this.parseCompilationUnit('export(x) => 0;');
        this.parseCompilationUnit('external(x) => 0;');
        this.parseCompilationUnit('factory(x) => 0;');
        this.parseCompilationUnit('get(x) => 0;');
        this.parseCompilationUnit('implements(x) => 0;');
        this.parseCompilationUnit('import(x) => 0;');
        this.parseCompilationUnit('library(x) => 0;');
        this.parseCompilationUnit('operator(x) => 0;');
        this.parseCompilationUnit('part(x) => 0;');
        this.parseCompilationUnit('set(x) => 0;');
        this.parseCompilationUnit('static(x) => 0;');
        this.parseCompilationUnit('typedef(x) => 0;');
    }
    test_parseCompilationUnit_directives_multiple() : void {
        this.createParser("library l;\npart 'a.dart';");
        let unit : any = this.parser.parseCompilationUnit2();
        expect(unit,isNotNull);
        this.assertNoErrors();
        expect(unit.scriptTag,isNull);
        expect(unit.directives,hasLength(2));
        expect(unit.declarations,hasLength(0));
    }
    test_parseCompilationUnit_directives_single() : void {
        this.createParser('library l;');
        let unit : any = this.parser.parseCompilationUnit2();
        expect(unit,isNotNull);
        this.assertNoErrors();
        expect(unit.scriptTag,isNull);
        expect(unit.directives,hasLength(1));
        expect(unit.declarations,hasLength(0));
    }
    test_parseCompilationUnit_empty() : void {
        this.createParser('');
        let unit : any = this.parser.parseCompilationUnit2();
        expect(unit,isNotNull);
        this.assertNoErrors();
        expect(unit.scriptTag,isNull);
        expect(unit.directives,hasLength(0));
        expect(unit.declarations,hasLength(0));
        expect(unit.beginToken,isNotNull);
        expect(unit.endToken,isNotNull);
        expect(unit.endToken.type,TokenType.EOF);
    }
    test_parseCompilationUnit_exportAsPrefix() : void {
        this.createParser('export.A _export = new export.A();');
        let unit : any = this.parser.parseCompilationUnit2();
        expect(unit,isNotNull);
        this.assertNoErrors();
        expect(unit.scriptTag,isNull);
        expect(unit.directives,hasLength(0));
        expect(unit.declarations,hasLength(1));
    }
    test_parseCompilationUnit_exportAsPrefix_parameterized() : void {
        this.createParser('export<dynamic> _export = new export.A();');
        let unit : any = this.parser.parseCompilationUnit2();
        expect(unit,isNotNull);
        this.assertNoErrors();
        expect(unit.scriptTag,isNull);
        expect(unit.directives,hasLength(0));
        expect(unit.declarations,hasLength(1));
    }
    test_parseCompilationUnit_operatorAsPrefix_parameterized() : void {
        this.createParser('operator<dynamic> _operator = new operator.A();');
        let unit : any = this.parser.parseCompilationUnit2();
        expect(unit,isNotNull);
        this.assertNoErrors();
        expect(unit.scriptTag,isNull);
        expect(unit.directives,hasLength(0));
        expect(unit.declarations,hasLength(1));
    }
    test_parseCompilationUnit_script() : void {
        this.createParser('#! /bin/dart');
        let unit : any = this.parser.parseCompilationUnit2();
        expect(unit,isNotNull);
        this.assertNoErrors();
        expect(unit.scriptTag,isNotNull);
        expect(unit.directives,hasLength(0));
        expect(unit.declarations,hasLength(0));
    }
    test_parseCompilationUnit_skipFunctionBody_withInterpolation() : void {
        ParserTestCase.parseFunctionBodies = false;
        this.createParser('f() { "${n}"; }');
        let unit : any = this.parser.parseCompilationUnit2();
        expect(unit,isNotNull);
        this.assertNoErrors();
        expect(unit.scriptTag,isNull);
        expect(unit.declarations,hasLength(1));
    }
    test_parseCompilationUnit_topLevelDeclaration() : void {
        this.createParser('class A {}');
        let unit : any = this.parser.parseCompilationUnit2();
        expect(unit,isNotNull);
        this.assertNoErrors();
        expect(unit.scriptTag,isNull);
        expect(unit.directives,hasLength(0));
        expect(unit.declarations,hasLength(1));
        expect(unit.beginToken,isNotNull);
        expect(unit.beginToken.keyword,Keyword.CLASS);
        expect(unit.endToken,isNotNull);
        expect(unit.endToken.type,TokenType.EOF);
    }
    test_parseCompilationUnit_typedefAsPrefix() : void {
        this.createParser('typedef.A _typedef = new typedef.A();');
        let unit : any = this.parser.parseCompilationUnit2();
        expect(unit,isNotNull);
        this.assertNoErrors();
        expect(unit.scriptTag,isNull);
        expect(unit.directives,hasLength(0));
        expect(unit.declarations,hasLength(1));
    }
    test_parseCompilationUnitMember_abstractAsPrefix() : void {
        this.createParser('abstract.A _abstract = new abstract.A();');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.semicolon,isNotNull);
        expect(declaration.variables,isNotNull);
    }
    test_parseCompilationUnitMember_class() : void {
        this.createParser('class A {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.name.name,"A");
        expect(declaration.members,hasLength(0));
    }
    test_parseCompilationUnitMember_classTypeAlias() : void {
        this.createParser('abstract class A = B with C;');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.name.name,"A");
        expect(declaration.abstractKeyword,isNotNull);
    }
    test_parseCompilationUnitMember_constVariable() : void {
        this.createParser('const int x = 0;');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.semicolon,isNotNull);
        expect(declaration.variables,isNotNull);
        expect(declaration.variables.keyword.lexeme,'const');
        this._assertIsDeclarationName(op(Op.INDEX,declaration.variables.variables,0).name);
    }
    test_parseCompilationUnitMember_expressionFunctionBody_tokens() : void {
        this.createParser('f() => 0;');
        let f = this.parseFullCompilationUnitMember() as any;
        let body = f.functionExpression.body as any;
        expect(body.functionDefinition.lexeme,'=>');
        expect(body.semicolon.lexeme,';');
        this._assertIsDeclarationName(f.name);
    }
    test_parseCompilationUnitMember_finalVariable() : void {
        this.createParser('final x = 0;');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.semicolon,isNotNull);
        expect(declaration.variables,isNotNull);
        expect(declaration.variables.keyword.lexeme,'final');
    }
    test_parseCompilationUnitMember_function_external_noType() : void {
        this.createParser('external f();');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.externalKeyword,isNotNull);
        expect(declaration.functionExpression,isNotNull);
        expect(declaration.propertyKeyword,isNull);
    }
    test_parseCompilationUnitMember_function_external_type() : void {
        this.createParser('external int f();');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.externalKeyword,isNotNull);
        expect(declaration.functionExpression,isNotNull);
        expect(declaration.propertyKeyword,isNull);
    }
    test_parseCompilationUnitMember_function_generic_noReturnType() : void {
        this.createParser('f<E>() {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.returnType,isNull);
        expect(declaration.functionExpression.typeParameters,isNotNull);
    }
    test_parseCompilationUnitMember_function_generic_noReturnType_annotated() : void {
        this.createParser('f<@a E>() {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.returnType,isNull);
        expect(declaration.functionExpression.typeParameters,isNotNull);
    }
    test_parseCompilationUnitMember_function_generic_returnType() : void {
        this.createParser('E f<E>() {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.returnType,isNotNull);
        expect(declaration.functionExpression.typeParameters,isNotNull);
    }
    test_parseCompilationUnitMember_function_generic_void() : void {
        this.createParser('void f<T>(T t) {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.functionExpression,isNotNull);
        expect(declaration.propertyKeyword,isNull);
    }
    test_parseCompilationUnitMember_function_gftReturnType() : void {
        this.createParser('void Function<A>(core.List<core.int> x) f() => null;\n');
        let unit : any = this.parser.parseCompilationUnit2();
        this.assertNoErrors();
        expect(unit,isNotNull);
        expect(unit.declarations,hasLength(1));
    }
    test_parseCompilationUnitMember_function_noReturnType() : void {
        this.createParser('Function<A>(core.List<core.int> x) f() => null;\n');
        let unit : any = this.parser.parseCompilationUnit2();
        this.assertNoErrors();
        expect(unit,isNotNull);
        expect(unit.declarations,hasLength(1));
    }
    test_parseCompilationUnitMember_function_noType() : void {
        this.createParser('f() {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.functionExpression,isNotNull);
        expect(declaration.propertyKeyword,isNull);
    }
    test_parseCompilationUnitMember_function_type() : void {
        this.createParser('int f() {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.functionExpression,isNotNull);
        expect(declaration.propertyKeyword,isNull);
    }
    test_parseCompilationUnitMember_function_void() : void {
        this.createParser('void f() {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.returnType,isNotNull);
    }
    test_parseCompilationUnitMember_getter_external_noType() : void {
        this.createParser('external get p;');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.externalKeyword,isNotNull);
        expect(declaration.functionExpression,isNotNull);
        expect(declaration.propertyKeyword,isNotNull);
        this._assertIsDeclarationName(declaration.name);
    }
    test_parseCompilationUnitMember_getter_external_type() : void {
        this.createParser('external int get p;');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.externalKeyword,isNotNull);
        expect(declaration.functionExpression,isNotNull);
        expect(declaration.propertyKeyword,isNotNull);
    }
    test_parseCompilationUnitMember_getter_noType() : void {
        this.createParser('get p => 0;');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.functionExpression,isNotNull);
        expect(declaration.propertyKeyword,isNotNull);
    }
    test_parseCompilationUnitMember_getter_type() : void {
        this.createParser('int get p => 0;');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.functionExpression,isNotNull);
        expect(declaration.propertyKeyword,isNotNull);
    }
    test_parseCompilationUnitMember_setter_external_noType() : void {
        this.createParser('external set p(v);');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.externalKeyword,isNotNull);
        expect(declaration.functionExpression,isNotNull);
        expect(declaration.propertyKeyword,isNotNull);
    }
    test_parseCompilationUnitMember_setter_external_type() : void {
        this.createParser('external void set p(int v);');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.externalKeyword,isNotNull);
        expect(declaration.functionExpression,isNotNull);
        expect(declaration.propertyKeyword,isNotNull);
    }
    test_parseCompilationUnitMember_setter_noType() : void {
        this.createParser('set p(v) {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.functionExpression,isNotNull);
        expect(declaration.propertyKeyword,isNotNull);
        this._assertIsDeclarationName(declaration.name);
    }
    test_parseCompilationUnitMember_setter_type() : void {
        this.createParser('void set p(int v) {}');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.functionExpression,isNotNull);
        expect(declaration.propertyKeyword,isNotNull);
        expect(declaration.returnType,isNotNull);
    }
    test_parseCompilationUnitMember_typeAlias_abstract() : void {
        this.createParser('abstract class C = S with M;');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let typeAlias : any = member;
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name.name,"C");
        this._assertIsDeclarationName(typeAlias.name);
        expect(typeAlias.typeParameters,isNull);
        expect(typeAlias.equals,isNotNull);
        expect(typeAlias.abstractKeyword,isNotNull);
        expect(typeAlias.superclass.name.name,"S");
        expect(typeAlias.withClause,isNotNull);
        expect(typeAlias.implementsClause,isNull);
        expect(typeAlias.semicolon,isNotNull);
    }
    test_parseCompilationUnitMember_typeAlias_generic() : void {
        this.createParser('class C<E> = S<E> with M<E> implements I<E>;');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let typeAlias : any = member;
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name.name,"C");
        expect(typeAlias.typeParameters.typeParameters,hasLength(1));
        expect(typeAlias.equals,isNotNull);
        expect(typeAlias.abstractKeyword,isNull);
        expect(typeAlias.superclass.name.name,"S");
        expect(typeAlias.withClause,isNotNull);
        expect(typeAlias.implementsClause,isNotNull);
        expect(typeAlias.semicolon,isNotNull);
    }
    test_parseCompilationUnitMember_typeAlias_implements() : void {
        this.createParser('class C = S with M implements I;');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let typeAlias : any = member;
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name.name,"C");
        expect(typeAlias.typeParameters,isNull);
        expect(typeAlias.equals,isNotNull);
        expect(typeAlias.abstractKeyword,isNull);
        expect(typeAlias.superclass.name.name,"S");
        expect(typeAlias.withClause,isNotNull);
        expect(typeAlias.implementsClause,isNotNull);
        expect(typeAlias.semicolon,isNotNull);
    }
    test_parseCompilationUnitMember_typeAlias_noImplements() : void {
        this.createParser('class C = S with M;');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let typeAlias : any = member;
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name.name,"C");
        expect(typeAlias.typeParameters,isNull);
        expect(typeAlias.equals,isNotNull);
        expect(typeAlias.abstractKeyword,isNull);
        expect(typeAlias.superclass.name.name,"S");
        expect(typeAlias.withClause,isNotNull);
        expect(typeAlias.implementsClause,isNull);
        expect(typeAlias.semicolon,isNotNull);
    }
    test_parseCompilationUnitMember_typedef() : void {
        this.createParser('typedef F();');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let typeAlias : any = member;
        expect(typeAlias.name.name,"F");
        expect(typeAlias.parameters.parameters,hasLength(0));
        this._assertIsDeclarationName(typeAlias.name);
    }
    test_parseCompilationUnitMember_typedef_withDocComment() : void {
        this.createParser('/// Doc\ntypedef F();');
        let typeAlias = this.parseFullCompilationUnitMember() as any;
        this.expectCommentText(typeAlias.documentationComment,'/// Doc');
    }
    test_parseCompilationUnitMember_typedVariable() : void {
        this.createParser('int x = 0;');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.semicolon,isNotNull);
        expect(declaration.variables,isNotNull);
        expect(declaration.variables.type,isNotNull);
        expect(declaration.variables.keyword,isNull);
        this._assertIsDeclarationName(op(Op.INDEX,declaration.variables.variables,0).name);
    }
    test_parseCompilationUnitMember_variable() : void {
        this.createParser('var x = 0;');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.semicolon,isNotNull);
        expect(declaration.variables,isNotNull);
        expect(declaration.variables.keyword.lexeme,'var');
    }
    test_parseCompilationUnitMember_variable_gftType_gftReturnType() : void {
        this.createParser('Function(int) Function(String) v;\n');
        let unit : any = this.parser.parseCompilationUnit2();
        this.assertNoErrors();
        expect(unit,isNotNull);
        expect(unit.declarations,hasLength(1));
        let declaration : any = op(Op.INDEX,unit.declarations,0) as any;
        expect(declaration.variables.type,new bare.createInstance(any,null));
    }
    test_parseCompilationUnitMember_variable_gftType_noReturnType() : void {
        this.createParser('Function(int, String) v;\n');
        let unit : any = this.parser.parseCompilationUnit2();
        this.assertNoErrors();
        expect(unit,isNotNull);
        expect(unit.declarations,hasLength(1));
    }
    test_parseCompilationUnitMember_variable_withDocumentationComment() : void {
        this.createParser('/// Doc\nvar x = 0;');
        let declaration = this.parseFullCompilationUnitMember() as any;
        this.expectCommentText(declaration.documentationComment,'/// Doc');
    }
    test_parseCompilationUnitMember_variableGet() : void {
        this.createParser('String get = null;');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.semicolon,isNotNull);
        expect(declaration.variables,isNotNull);
    }
    test_parseCompilationUnitMember_variableSet() : void {
        this.createParser('String set = null;');
        let member : any = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let declaration : any = member;
        expect(declaration.semicolon,isNotNull);
        expect(declaration.variables,isNotNull);
    }
    test_parseDirective_export() : void {
        this.createParser("export 'lib/lib.dart';");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive,new bare.createInstance(any,null));
        let exportDirective : any = directive;
        expect(exportDirective.keyword,isNotNull);
        expect(exportDirective.uri,isNotNull);
        expect(exportDirective.combinators,hasLength(0));
        expect(exportDirective.semicolon,isNotNull);
    }
    test_parseDirective_export_withDocComment() : void {
        this.createParser("/// Doc\nexport 'foo.dart';");
        let directive = this.parseFullDirective() as any;
        this.expectCommentText(directive.documentationComment,'/// Doc');
    }
    test_parseDirective_import() : void {
        this.createParser("import 'lib/lib.dart';");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive,new bare.createInstance(any,null));
        let importDirective : any = directive;
        expect(importDirective.keyword,isNotNull);
        expect(importDirective.uri,isNotNull);
        expect(importDirective.asKeyword,isNull);
        expect(importDirective.prefix,isNull);
        expect(importDirective.combinators,hasLength(0));
        expect(importDirective.semicolon,isNotNull);
    }
    test_parseDirective_library() : void {
        this.createParser("library l;");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive,new bare.createInstance(any,null));
        let libraryDirective : any = directive;
        expect(libraryDirective.libraryKeyword,isNotNull);
        expect(libraryDirective.name,isNotNull);
        expect(libraryDirective.semicolon,isNotNull);
    }
    test_parseDirective_library_1_component() : void {
        this.createParser("library a;");
        let lib = this.parseFullDirective() as any;
        expect(lib.name.components,hasLength(1));
        expect(op(Op.INDEX,lib.name.components,0).name,'a');
    }
    test_parseDirective_library_2_components() : void {
        this.createParser("library a.b;");
        let lib = this.parseFullDirective() as any;
        expect(lib.name.components,hasLength(2));
        expect(op(Op.INDEX,lib.name.components,0).name,'a');
        expect(op(Op.INDEX,lib.name.components,1).name,'b');
    }
    test_parseDirective_library_3_components() : void {
        this.createParser("library a.b.c;");
        let lib = this.parseFullDirective() as any;
        expect(lib.name.components,hasLength(3));
        expect(op(Op.INDEX,lib.name.components,0).name,'a');
        expect(op(Op.INDEX,lib.name.components,1).name,'b');
        expect(op(Op.INDEX,lib.name.components,2).name,'c');
    }
    test_parseDirective_library_withDocumentationComment() : void {
        this.createParser('/// Doc\nlibrary l;');
        let directive = this.parseFullDirective() as any;
        this.expectCommentText(directive.documentationComment,'/// Doc');
    }
    test_parseDirective_part() : void {
        this.createParser("part 'lib/lib.dart';");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive,new bare.createInstance(any,null));
        let partDirective : any = directive;
        expect(partDirective.partKeyword,isNotNull);
        expect(partDirective.uri,isNotNull);
        expect(partDirective.semicolon,isNotNull);
    }
    test_parseDirective_part_of_1_component() : void {
        this.createParser("part of a;");
        let partOf = this.parseFullDirective() as any;
        expect(partOf.libraryName.components,hasLength(1));
        expect(op(Op.INDEX,partOf.libraryName.components,0).name,'a');
    }
    test_parseDirective_part_of_2_components() : void {
        this.createParser("part of a.b;");
        let partOf = this.parseFullDirective() as any;
        expect(partOf.libraryName.components,hasLength(2));
        expect(op(Op.INDEX,partOf.libraryName.components,0).name,'a');
        expect(op(Op.INDEX,partOf.libraryName.components,1).name,'b');
    }
    test_parseDirective_part_of_3_components() : void {
        this.createParser("part of a.b.c;");
        let partOf = this.parseFullDirective() as any;
        expect(partOf.libraryName.components,hasLength(3));
        expect(op(Op.INDEX,partOf.libraryName.components,0).name,'a');
        expect(op(Op.INDEX,partOf.libraryName.components,1).name,'b');
        expect(op(Op.INDEX,partOf.libraryName.components,2).name,'c');
    }
    test_parseDirective_part_of_withDocumentationComment() : void {
        this.createParser('/// Doc\npart of a;');
        let partOf = this.parseFullDirective() as any;
        this.expectCommentText(partOf.documentationComment,'/// Doc');
    }
    test_parseDirective_part_withDocumentationComment() : void {
        this.createParser("/// Doc\npart 'lib.dart';");
        let directive = this.parseFullDirective() as any;
        this.expectCommentText(directive.documentationComment,'/// Doc');
    }
    test_parseDirective_partOf() : void {
        this.createParser("part of l;");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive,new bare.createInstance(any,null));
        let partOfDirective : any = directive;
        expect(partOfDirective.partKeyword,isNotNull);
        expect(partOfDirective.ofKeyword,isNotNull);
        expect(partOfDirective.libraryName,isNotNull);
        expect(partOfDirective.semicolon,isNotNull);
    }
    test_parseDirectives_complete() : void {
        let unit : any = this.parseDirectives("#! /bin/dart\nlibrary l;\nclass A {}");
        expect(unit.scriptTag,isNotNull);
        expect(unit.directives,hasLength(1));
    }
    test_parseDirectives_empty() : void {
        let unit : any = this.parseDirectives("");
        expect(unit.scriptTag,isNull);
        expect(unit.directives,hasLength(0));
    }
    test_parseDirectives_mixed() : void {
        let unit : any = this.parseDirectives("library l; class A {} part 'foo.dart';");
        expect(unit.scriptTag,isNull);
        expect(unit.directives,hasLength(1));
    }
    test_parseDirectives_multiple() : void {
        let unit : any = this.parseDirectives("library l;\npart 'a.dart';");
        expect(unit.scriptTag,isNull);
        expect(unit.directives,hasLength(2));
    }
    test_parseDirectives_script() : void {
        let unit : any = this.parseDirectives("#! /bin/dart");
        expect(unit.scriptTag,isNotNull);
        expect(unit.directives,hasLength(0));
    }
    test_parseDirectives_single() : void {
        let unit : any = this.parseDirectives("library l;");
        expect(unit.scriptTag,isNull);
        expect(unit.directives,hasLength(1));
    }
    test_parseDirectives_topLevelDeclaration() : void {
        let unit : any = this.parseDirectives("class A {}");
        expect(unit.scriptTag,isNull);
        expect(unit.directives,hasLength(0));
    }
    test_parseEnumDeclaration_one() : void {
        this.createParser("enum E {ONE}");
        let declaration : any = this.parseFullCompilationUnitMember();
        expect(declaration,isNotNull);
        this.assertNoErrors();
        expect(declaration.documentationComment,isNull);
        expect(declaration.enumKeyword,isNotNull);
        expect(declaration.leftBracket,isNotNull);
        expect(declaration.name,isNotNull);
        expect(declaration.constants,hasLength(1));
        expect(declaration.rightBracket,isNotNull);
    }
    test_parseEnumDeclaration_trailingComma() : void {
        this.createParser("enum E {ONE,}");
        let declaration : any = this.parseFullCompilationUnitMember();
        expect(declaration,isNotNull);
        this.assertNoErrors();
        expect(declaration.documentationComment,isNull);
        expect(declaration.enumKeyword,isNotNull);
        expect(declaration.leftBracket,isNotNull);
        expect(declaration.name,isNotNull);
        expect(declaration.constants,hasLength(1));
        expect(declaration.rightBracket,isNotNull);
    }
    test_parseEnumDeclaration_two() : void {
        this.createParser("enum E {ONE, TWO}");
        let declaration : any = this.parseFullCompilationUnitMember();
        expect(declaration,isNotNull);
        this.assertNoErrors();
        expect(declaration.documentationComment,isNull);
        expect(declaration.enumKeyword,isNotNull);
        expect(declaration.leftBracket,isNotNull);
        expect(declaration.name,isNotNull);
        expect(declaration.constants,hasLength(2));
        expect(declaration.rightBracket,isNotNull);
    }
    test_parseEnumDeclaration_withDocComment_onEnum() : void {
        this.createParser('/// Doc\nenum E {ONE}');
        let declaration = this.parseFullCompilationUnitMember() as any;
        this.expectCommentText(declaration.documentationComment,'/// Doc');
    }
    test_parseEnumDeclaration_withDocComment_onValue() : void {
        this.createParser('enum E {\n  /// Doc\n  ONE\n}');
        let declaration = this.parseFullCompilationUnitMember() as any;
        let value = op(Op.INDEX,declaration.constants,0);
        this.expectCommentText(value.documentationComment,'/// Doc');
    }
    test_parseExportDirective_configuration_multiple() : void {
        this.createParser("export 'lib/lib.dart' if (a) 'b.dart' if (c) 'd.dart';");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive.keyword,isNotNull);
        expect(directive.uri,isNotNull);
        expect(directive.configurations,hasLength(2));
        this.expectDottedName(op(Op.INDEX,directive.configurations,0).name,new core.DartList.literal('a'));
        this.expectDottedName(op(Op.INDEX,directive.configurations,1).name,new core.DartList.literal('c'));
        expect(directive.combinators,hasLength(0));
        expect(directive.semicolon,isNotNull);
    }
    test_parseExportDirective_configuration_single() : void {
        this.createParser("export 'lib/lib.dart' if (a.b == 'c.dart') '';");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive.keyword,isNotNull);
        expect(directive.uri,isNotNull);
        expect(directive.configurations,hasLength(1));
        this.expectDottedName(op(Op.INDEX,directive.configurations,0).name,new core.DartList.literal('a','b'));
        expect(directive.combinators,hasLength(0));
        expect(directive.semicolon,isNotNull);
    }
    test_parseExportDirective_hide() : void {
        this.createParser("export 'lib/lib.dart' hide A, B;");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive.keyword,isNotNull);
        expect(directive.uri,isNotNull);
        expect(directive.combinators,hasLength(1));
        expect(directive.semicolon,isNotNull);
    }
    test_parseExportDirective_hide_show() : void {
        this.createParser("export 'lib/lib.dart' hide A show B;");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive.keyword,isNotNull);
        expect(directive.uri,isNotNull);
        expect(directive.combinators,hasLength(2));
        expect(directive.semicolon,isNotNull);
    }
    test_parseExportDirective_noCombinator() : void {
        this.createParser("export 'lib/lib.dart';");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive.keyword,isNotNull);
        expect(directive.uri,isNotNull);
        expect(directive.combinators,hasLength(0));
        expect(directive.semicolon,isNotNull);
    }
    test_parseExportDirective_show() : void {
        this.createParser("export 'lib/lib.dart' show A, B;");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive.keyword,isNotNull);
        expect(directive.uri,isNotNull);
        expect(directive.combinators,hasLength(1));
        expect(directive.semicolon,isNotNull);
    }
    test_parseExportDirective_show_hide() : void {
        this.createParser("export 'lib/lib.dart' show B hide A;");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive.keyword,isNotNull);
        expect(directive.uri,isNotNull);
        expect(directive.combinators,hasLength(2));
        expect(directive.semicolon,isNotNull);
    }
    test_parseFunctionDeclaration_function() : void {
        this.createParser('/// Doc\nT f() {}');
        let declaration : any = this.parseFullCompilationUnitMember();
        expect(declaration,isNotNull);
        this.assertNoErrors();
        this.expectCommentText(declaration.documentationComment,'/// Doc');
        expect((declaration.returnType as any).name.name,'T');
        expect(declaration.name,isNotNull);
        let expression : any = declaration.functionExpression;
        expect(expression,isNotNull);
        expect(expression.body,isNotNull);
        expect(expression.typeParameters,isNull);
        expect(expression.parameters,isNotNull);
        expect(declaration.propertyKeyword,isNull);
    }
    test_parseFunctionDeclaration_functionWithTypeParameters() : void {
        this.createParser('/// Doc\nT f<E>() {}');
        let declaration : any = this.parseFullCompilationUnitMember();
        expect(declaration,isNotNull);
        this.assertNoErrors();
        this.expectCommentText(declaration.documentationComment,'/// Doc');
        expect((declaration.returnType as any).name.name,'T');
        expect(declaration.name,isNotNull);
        let expression : any = declaration.functionExpression;
        expect(expression,isNotNull);
        expect(expression.body,isNotNull);
        expect(expression.typeParameters,isNotNull);
        expect(expression.parameters,isNotNull);
        expect(declaration.propertyKeyword,isNull);
    }
    test_parseFunctionDeclaration_functionWithTypeParameters_comment() : void {
        this.enableGenericMethodComments = true;
        this.createParser('/// Doc\nT f/*<E>*/() {}');
        let declaration : any = this.parseFullCompilationUnitMember();
        expect(declaration,isNotNull);
        this.assertNoErrors();
        this.expectCommentText(declaration.documentationComment,'/// Doc');
        expect((declaration.returnType as any).name.name,'T');
        expect(declaration.name,isNotNull);
        let expression : any = declaration.functionExpression;
        expect(expression,isNotNull);
        expect(expression.body,isNotNull);
        expect(expression.typeParameters,isNotNull);
        expect(expression.parameters,isNotNull);
        expect(declaration.propertyKeyword,isNull);
    }
    test_parseFunctionDeclaration_getter() : void {
        this.createParser('/// Doc\nT get p => 0;');
        let declaration : any = this.parseFullCompilationUnitMember();
        expect(declaration,isNotNull);
        this.assertNoErrors();
        this.expectCommentText(declaration.documentationComment,'/// Doc');
        expect((declaration.returnType as any).name.name,'T');
        expect(declaration.name,isNotNull);
        let expression : any = declaration.functionExpression;
        expect(expression,isNotNull);
        expect(expression.body,isNotNull);
        expect(expression.typeParameters,isNull);
        expect(expression.parameters,isNull);
        expect(declaration.propertyKeyword,isNotNull);
    }
    test_parseFunctionDeclaration_getter_generic_comment_returnType() : void {
        this.enableGenericMethodComments = true;
        this.createParser('/*=T*/ f/*<S, T>*/(/*=S*/ s) => null;');
        let member = this.parseFullCompilationUnitMember();
        expect(member,isNotNull);
        this.assertNoErrors();
        let functionDeclaration = member as any;
        let functionExpression = functionDeclaration.functionExpression;
        expect(functionDeclaration.documentationComment,isNull);
        expect(functionDeclaration.externalKeyword,isNull);
        expect(functionDeclaration.propertyKeyword,isNull);
        expect((functionDeclaration.returnType as any).name.name,'T');
        expect(functionDeclaration.name,isNotNull);
        expect(functionExpression.typeParameters,isNotNull);
        expect(functionExpression.parameters,isNotNull);
        expect(functionExpression.body,isNotNull);
    }
    test_parseFunctionDeclaration_setter() : void {
        this.createParser('/// Doc\nT set p(v) {}');
        let declaration : any = this.parseFullCompilationUnitMember();
        expect(declaration,isNotNull);
        this.assertNoErrors();
        this.expectCommentText(declaration.documentationComment,'/// Doc');
        expect((declaration.returnType as any).name.name,'T');
        expect(declaration.name,isNotNull);
        let expression : any = declaration.functionExpression;
        expect(expression,isNotNull);
        expect(expression.body,isNotNull);
        expect(expression.typeParameters,isNull);
        expect(expression.parameters,isNotNull);
        expect(declaration.propertyKeyword,isNotNull);
    }
    test_parseGenericTypeAlias_noTypeParameters() : void {
        this.createParser('F = int Function(int);');
        let alias : any = this.parseFullCompilationUnitMember();
        expect(alias,isNotNull);
        this.assertNoErrors();
        expect(alias.name,isNotNull);
        expect(alias.name.name,'F');
        expect(alias.typeParameters,isNull);
        expect(alias.equals,isNotNull);
        expect(alias.functionType,isNotNull);
        expect(alias.semicolon,isNotNull);
    }
    test_parseGenericTypeAlias_typeParameters() : void {
        this.createParser('F<T> = T Function(T);');
        let alias : any = this.parseFullCompilationUnitMember();
        expect(alias,isNotNull);
        this.assertNoErrors();
        expect(alias.name,isNotNull);
        expect(alias.name.name,'F');
        expect(alias.typeParameters,isNotNull);
        expect(alias.equals,isNotNull);
        expect(alias.functionType,isNotNull);
        expect(alias.semicolon,isNotNull);
    }
    test_parseImportDirective_configuration_multiple() : void {
        this.createParser("import 'lib/lib.dart' if (a) 'b.dart' if (c) 'd.dart';");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive.keyword,isNotNull);
        expect(directive.uri,isNotNull);
        expect(directive.configurations,hasLength(2));
        this.expectDottedName(op(Op.INDEX,directive.configurations,0).name,new core.DartList.literal('a'));
        this.expectDottedName(op(Op.INDEX,directive.configurations,1).name,new core.DartList.literal('c'));
        expect(directive.deferredKeyword,isNull);
        expect(directive.asKeyword,isNull);
        expect(directive.prefix,isNull);
        expect(directive.combinators,hasLength(0));
        expect(directive.semicolon,isNotNull);
    }
    test_parseImportDirective_configuration_single() : void {
        this.createParser("import 'lib/lib.dart' if (a.b == 'c.dart') '';");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive.keyword,isNotNull);
        expect(directive.uri,isNotNull);
        expect(directive.configurations,hasLength(1));
        this.expectDottedName(op(Op.INDEX,directive.configurations,0).name,new core.DartList.literal('a','b'));
        expect(directive.deferredKeyword,isNull);
        expect(directive.asKeyword,isNull);
        expect(directive.prefix,isNull);
        expect(directive.combinators,hasLength(0));
        expect(directive.semicolon,isNotNull);
    }
    test_parseImportDirective_deferred() : void {
        this.createParser("import 'lib/lib.dart' deferred as a;");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive.keyword,isNotNull);
        expect(directive.uri,isNotNull);
        expect(directive.deferredKeyword,isNotNull);
        expect(directive.asKeyword,isNotNull);
        expect(directive.prefix,isNotNull);
        expect(directive.combinators,hasLength(0));
        expect(directive.semicolon,isNotNull);
    }
    test_parseImportDirective_hide() : void {
        this.createParser("import 'lib/lib.dart' hide A, B;");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive.keyword,isNotNull);
        expect(directive.uri,isNotNull);
        expect(directive.deferredKeyword,isNull);
        expect(directive.asKeyword,isNull);
        expect(directive.prefix,isNull);
        expect(directive.combinators,hasLength(1));
        expect(directive.semicolon,isNotNull);
    }
    test_parseImportDirective_noCombinator() : void {
        this.createParser("import 'lib/lib.dart';");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive.keyword,isNotNull);
        expect(directive.uri,isNotNull);
        expect(directive.deferredKeyword,isNull);
        expect(directive.asKeyword,isNull);
        expect(directive.prefix,isNull);
        expect(directive.combinators,hasLength(0));
        expect(directive.semicolon,isNotNull);
    }
    test_parseImportDirective_prefix() : void {
        this.createParser("import 'lib/lib.dart' as a;");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive.keyword,isNotNull);
        expect(directive.uri,isNotNull);
        expect(directive.deferredKeyword,isNull);
        expect(directive.asKeyword,isNotNull);
        expect(directive.prefix,isNotNull);
        expect(directive.combinators,hasLength(0));
        expect(directive.semicolon,isNotNull);
    }
    test_parseImportDirective_prefix_hide_show() : void {
        this.createParser("import 'lib/lib.dart' as a hide A show B;");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive.keyword,isNotNull);
        expect(directive.uri,isNotNull);
        expect(directive.deferredKeyword,isNull);
        expect(directive.asKeyword,isNotNull);
        expect(directive.prefix,isNotNull);
        expect(directive.combinators,hasLength(2));
        expect(directive.semicolon,isNotNull);
    }
    test_parseImportDirective_prefix_show_hide() : void {
        this.createParser("import 'lib/lib.dart' as a show B hide A;");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive.keyword,isNotNull);
        expect(directive.uri,isNotNull);
        expect(directive.deferredKeyword,isNull);
        expect(directive.asKeyword,isNotNull);
        expect(directive.prefix,isNotNull);
        expect(directive.combinators,hasLength(2));
        expect(directive.semicolon,isNotNull);
    }
    test_parseImportDirective_show() : void {
        this.createParser("import 'lib/lib.dart' show A, B;");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive.keyword,isNotNull);
        expect(directive.uri,isNotNull);
        expect(directive.deferredKeyword,isNull);
        expect(directive.asKeyword,isNull);
        expect(directive.prefix,isNull);
        expect(directive.combinators,hasLength(1));
        expect(directive.semicolon,isNotNull);
    }
    test_parseLibraryDirective() : void {
        this.createParser('library l;');
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive.libraryKeyword,isNotNull);
        expect(directive.name,isNotNull);
        expect(directive.semicolon,isNotNull);
    }
    test_parsePartDirective() : void {
        this.createParser("part 'lib/lib.dart';");
        let directive : any = this.parseFullDirective();
        expect(directive,isNotNull);
        this.assertNoErrors();
        expect(directive.partKeyword,isNotNull);
        expect(directive.uri,isNotNull);
        expect(directive.semicolon,isNotNull);
    }
    test_parsePartOfDirective_name() : void {
        this.enableUriInPartOf = true;
        this.createParser("part of l;");
        let directive : any = this.parseFullDirective();
        expect(directive.partKeyword,isNotNull);
        expect(directive.ofKeyword,isNotNull);
        expect(directive.libraryName,isNotNull);
        expect(directive.uri,isNull);
        expect(directive.semicolon,isNotNull);
    }
    test_parsePartOfDirective_uri() : void {
        this.enableUriInPartOf = true;
        this.createParser("part of 'lib.dart';");
        let directive : any = this.parseFullDirective();
        expect(directive.partKeyword,isNotNull);
        expect(directive.ofKeyword,isNotNull);
        expect(directive.libraryName,isNull);
        expect(directive.uri,isNotNull);
        expect(directive.semicolon,isNotNull);
    }
    test_parseTypeAlias_function_noParameters() : void {
        this.createParser('typedef bool F();');
        let typeAlias : any = this.parseFullCompilationUnitMember();
        expect(typeAlias,isNotNull);
        this.assertNoErrors();
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.parameters,isNotNull);
        expect(typeAlias.returnType,isNotNull);
        expect(typeAlias.semicolon,isNotNull);
        expect(typeAlias.typeParameters,isNull);
    }
    test_parseTypeAlias_function_noReturnType() : void {
        this.createParser('typedef F();');
        let typeAlias : any = this.parseFullCompilationUnitMember();
        expect(typeAlias,isNotNull);
        this.assertNoErrors();
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.parameters,isNotNull);
        expect(typeAlias.returnType,isNull);
        expect(typeAlias.semicolon,isNotNull);
        expect(typeAlias.typeParameters,isNull);
    }
    test_parseTypeAlias_function_parameterizedReturnType() : void {
        this.createParser('typedef A<B> F();');
        let typeAlias : any = this.parseFullCompilationUnitMember();
        expect(typeAlias,isNotNull);
        this.assertNoErrors();
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.parameters,isNotNull);
        expect(typeAlias.returnType,isNotNull);
        expect(typeAlias.semicolon,isNotNull);
        expect(typeAlias.typeParameters,isNull);
    }
    test_parseTypeAlias_function_parameters() : void {
        this.createParser('typedef bool F(Object value);');
        let typeAlias : any = this.parseFullCompilationUnitMember();
        expect(typeAlias,isNotNull);
        this.assertNoErrors();
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.parameters,isNotNull);
        expect(typeAlias.returnType,isNotNull);
        expect(typeAlias.semicolon,isNotNull);
        expect(typeAlias.typeParameters,isNull);
    }
    test_parseTypeAlias_function_typeParameters() : void {
        this.createParser('typedef bool F<E>();');
        let typeAlias : any = this.parseFullCompilationUnitMember();
        expect(typeAlias,isNotNull);
        this.assertNoErrors();
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.parameters,isNotNull);
        expect(typeAlias.returnType,isNotNull);
        expect(typeAlias.semicolon,isNotNull);
        expect(typeAlias.typeParameters,isNotNull);
    }
    test_parseTypeAlias_function_voidReturnType() : void {
        this.createParser('typedef void F();');
        let typeAlias : any = this.parseFullCompilationUnitMember();
        expect(typeAlias,isNotNull);
        this.assertNoErrors();
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.parameters,isNotNull);
        expect(typeAlias.returnType,isNotNull);
        expect(typeAlias.semicolon,isNotNull);
        expect(typeAlias.typeParameters,isNull);
    }
    test_parseTypeAlias_genericFunction_noParameters() : void {
        this.createParser('typedef F = bool Function();');
        let typeAlias : any = this.parseFullCompilationUnitMember();
        expect(typeAlias,isNotNull);
        this.assertNoErrors();
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.typeParameters,isNull);
        expect(typeAlias.semicolon,isNotNull);
        let functionType : any = typeAlias.functionType;
        expect(functionType,isNotNull);
        expect(functionType.parameters,isNotNull);
        expect(functionType.returnType,isNotNull);
        expect(functionType.typeParameters,isNull);
    }
    test_parseTypeAlias_genericFunction_noReturnType() : void {
        this.createParser('typedef F = Function();');
        let typeAlias : any = this.parseFullCompilationUnitMember();
        expect(typeAlias,isNotNull);
        this.assertNoErrors();
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.typeParameters,isNull);
        expect(typeAlias.semicolon,isNotNull);
        let functionType : any = typeAlias.functionType;
        expect(functionType,isNotNull);
        expect(functionType.parameters,isNotNull);
        expect(functionType.returnType,isNull);
        expect(functionType.typeParameters,isNull);
    }
    test_parseTypeAlias_genericFunction_parameterizedReturnType() : void {
        this.createParser('typedef F = A<B> Function();');
        let typeAlias : any = this.parseFullCompilationUnitMember();
        expect(typeAlias,isNotNull);
        this.assertNoErrors();
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.typeParameters,isNull);
        expect(typeAlias.semicolon,isNotNull);
        let functionType : any = typeAlias.functionType;
        expect(functionType,isNotNull);
        expect(functionType.parameters,isNotNull);
        expect(functionType.returnType,isNotNull);
        expect(functionType.typeParameters,isNull);
    }
    test_parseTypeAlias_genericFunction_parameters() : void {
        this.createParser('typedef F = bool Function(Object value);');
        let typeAlias : any = this.parseFullCompilationUnitMember();
        expect(typeAlias,isNotNull);
        this.assertNoErrors();
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.typeParameters,isNull);
        expect(typeAlias.semicolon,isNotNull);
        let functionType : any = typeAlias.functionType;
        expect(functionType,isNotNull);
        expect(functionType.parameters,isNotNull);
        expect(functionType.returnType,isNotNull);
        expect(functionType.typeParameters,isNull);
    }
    test_parseTypeAlias_genericFunction_typeParameters() : void {
        this.createParser('typedef F = bool Function<E>();');
        let typeAlias : any = this.parseFullCompilationUnitMember();
        expect(typeAlias,isNotNull);
        this.assertNoErrors();
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.typeParameters,isNull);
        expect(typeAlias.semicolon,isNotNull);
        let functionType : any = typeAlias.functionType;
        expect(functionType,isNotNull);
        expect(functionType.parameters,isNotNull);
        expect(functionType.returnType,isNotNull);
        expect(functionType.typeParameters,isNotNull);
    }
    test_parseTypeAlias_genericFunction_typeParameters_noParameters() : void {
        this.createParser('typedef F<T> = bool Function();');
        let typeAlias : any = this.parseFullCompilationUnitMember();
        expect(typeAlias,isNotNull);
        this.assertNoErrors();
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.typeParameters,isNotNull);
        expect(typeAlias.semicolon,isNotNull);
        let functionType : any = typeAlias.functionType;
        expect(functionType,isNotNull);
        expect(functionType.parameters,isNotNull);
        expect(functionType.returnType,isNotNull);
        expect(functionType.typeParameters,isNull);
    }
    test_parseTypeAlias_genericFunction_typeParameters_noReturnType() : void {
        this.createParser('typedef F<T> = Function();');
        let typeAlias : any = this.parseFullCompilationUnitMember();
        expect(typeAlias,isNotNull);
        this.assertNoErrors();
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.typeParameters,isNotNull);
        expect(typeAlias.semicolon,isNotNull);
        let functionType : any = typeAlias.functionType;
        expect(functionType,isNotNull);
        expect(functionType.parameters,isNotNull);
        expect(functionType.returnType,isNull);
        expect(functionType.typeParameters,isNull);
    }
    test_parseTypeAlias_genericFunction_typeParameters_parameterizedReturnType() : void {
        this.createParser('typedef F<T> = A<B> Function();');
        let typeAlias : any = this.parseFullCompilationUnitMember();
        expect(typeAlias,isNotNull);
        this.assertNoErrors();
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.typeParameters,isNotNull);
        expect(typeAlias.semicolon,isNotNull);
        let functionType : any = typeAlias.functionType;
        expect(functionType,isNotNull);
        expect(functionType.parameters,isNotNull);
        expect(functionType.returnType,isNotNull);
        expect(functionType.typeParameters,isNull);
    }
    test_parseTypeAlias_genericFunction_typeParameters_parameters() : void {
        this.createParser('typedef F<T> = bool Function(Object value);');
        let typeAlias : any = this.parseFullCompilationUnitMember();
        expect(typeAlias,isNotNull);
        this.assertNoErrors();
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.typeParameters,isNotNull);
        expect(typeAlias.semicolon,isNotNull);
        let functionType : any = typeAlias.functionType;
        expect(functionType,isNotNull);
        expect(functionType.parameters,isNotNull);
        expect(functionType.returnType,isNotNull);
        expect(functionType.typeParameters,isNull);
    }
    test_parseTypeAlias_genericFunction_typeParameters_typeParameters() : void {
        this.createParser('typedef F<T> = bool Function<E>();');
        let typeAlias : any = this.parseFullCompilationUnitMember();
        expect(typeAlias,isNotNull);
        this.assertNoErrors();
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.typeParameters,isNotNull);
        expect(typeAlias.semicolon,isNotNull);
        let functionType : any = typeAlias.functionType;
        expect(functionType,isNotNull);
        expect(functionType.parameters,isNotNull);
        expect(functionType.returnType,isNotNull);
        expect(functionType.typeParameters,isNotNull);
    }
    test_parseTypeAlias_genericFunction_typeParameters_voidReturnType() : void {
        this.createParser('typedef F<T> = void Function();');
        let typeAlias : any = this.parseFullCompilationUnitMember();
        expect(typeAlias,isNotNull);
        this.assertNoErrors();
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.typeParameters,isNotNull);
        expect(typeAlias.semicolon,isNotNull);
        let functionType : any = typeAlias.functionType;
        expect(functionType,isNotNull);
        expect(functionType.parameters,isNotNull);
        expect(functionType.returnType,isNotNull);
        expect(functionType.typeParameters,isNull);
    }
    test_parseTypeAlias_genericFunction_voidReturnType() : void {
        this.createParser('typedef F = void Function();');
        let typeAlias : any = this.parseFullCompilationUnitMember();
        expect(typeAlias,isNotNull);
        this.assertNoErrors();
        expect(typeAlias.typedefKeyword,isNotNull);
        expect(typeAlias.name,isNotNull);
        expect(typeAlias.typeParameters,isNull);
        expect(typeAlias.semicolon,isNotNull);
        let functionType : any = typeAlias.functionType;
        expect(functionType,isNotNull);
        expect(functionType.parameters,isNotNull);
        expect(functionType.returnType,isNotNull);
        expect(functionType.typeParameters,isNull);
    }
    test_parseTypeAlias_genericFunction_withDocComment() : void {
        this.createParser('/// Doc\ntypedef F = bool Function();');
        let typeAlias = this.parseFullCompilationUnitMember() as any;
        this.expectCommentText(typeAlias.documentationComment,'/// Doc');
    }
    test_parseTypeVariable_withDocumentationComment() : void {
        this.createParser('class A<\n    /// Doc\n    B> {}\n');
        let classDeclaration = this.parseFullCompilationUnitMember() as any;
        let typeVariable = op(Op.INDEX,classDeclaration.typeParameters.typeParameters,0);
        this.expectCommentText(typeVariable.documentationComment,'/// Doc');
    }
    _assertIsDeclarationName(name : any) : void {
        expect(name.inDeclarationContext(),isTrue);
    }
    constructor() {
    }
    @defaultConstructor
    TopLevelParserTestMixin() {
    }
}

export namespace ClassMemberParserTest {
    export type Constructors = ParserTestCase.Constructors | 'ClassMemberParserTest';
    export type Interface = Omit<ClassMemberParserTest, Constructors>;
}
@DartClass
@With(ClassMemberParserTestMixin)
export class ClassMemberParserTest extends ParserTestCase implements ClassMemberParserTestMixin.Interface {
    @Abstract
    test_parseAwaitExpression_asStatement_inAsync() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAwaitExpression_asStatement_inSync() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAwaitExpression_inSync() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_constructor_withDocComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_constructor_withInitializers() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_field_covariant() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_field_gftType_gftReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_field_gftType_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_field_instance_prefixedType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_field_namedGet() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_field_namedOperator() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_field_namedOperator_withAssignment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_field_namedSet() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_field_static() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_getter_functionType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_getter_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_external() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_external_withTypeAndArgs() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_generic_comment_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_generic_comment_parameterType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_generic_comment_returnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_generic_comment_returnType_bound() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_generic_comment_returnType_complex() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_generic_comment_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_generic_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_generic_returnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_generic_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_get_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_get_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_get_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_gftReturnType_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_gftReturnType_voidReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_native() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_operator_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_operator_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_operator_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_returnType_functionType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_returnType_parameterized() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_set_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_set_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_set_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_static_generic_comment_returnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_trailing_commas() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_operator_functionType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_operator_index() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_operator_indexAssign() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_redirectingFactory_const() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_redirectingFactory_expressionBody() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_redirectingFactory_nonConst() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstructor_assert() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstructor_factory_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstructor_initializers_field() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstructor_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstructor_unnamed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstructor_with_pseudo_function_literal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstructorFieldInitializer_qualified() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstructorFieldInitializer_unqualified() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseGetter_nonStatic() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseGetter_static() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInitializedIdentifierList_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInitializedIdentifierList_var() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseOperator() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSetter_nonStatic() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSetter_static() : void {
        throw 'from mixin';
    }
    @Abstract
    test_simpleFormalParameter_withDocComment() : void {
        throw 'from mixin';
    }
    @Abstract
    _assertIsDeclarationName(name : any,expected? : boolean) : void {
        expected = expected || true;
        throw 'from mixin';
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassMemberParserTest() {
    }
}

export namespace ComplexParserTest {
    export type Constructors = ParserTestCase.Constructors | 'ComplexParserTest';
    export type Interface = Omit<ComplexParserTest, Constructors>;
}
@DartClass
@With(ComplexParserTestMixin)
export class ComplexParserTest extends ParserTestCase implements ComplexParserTestMixin.Interface {
    @Abstract
    test_additiveExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_additiveExpression_noSpaces() : void {
        throw 'from mixin';
    }
    @Abstract
    test_additiveExpression_precedence_multiplicative_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_additiveExpression_precedence_multiplicative_left_withSuper() : void {
        throw 'from mixin';
    }
    @Abstract
    test_additiveExpression_precedence_multiplicative_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_additiveExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_assignableExpression_arguments_normal_chain() : void {
        throw 'from mixin';
    }
    @Abstract
    test_assignableExpression_arguments_normal_chain_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_assignableExpression_arguments_normal_chain_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_assignmentExpression_compound() : void {
        throw 'from mixin';
    }
    @Abstract
    test_assignmentExpression_indexExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_assignmentExpression_prefixedIdentifier() : void {
        throw 'from mixin';
    }
    @Abstract
    test_assignmentExpression_propertyAccess() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseAndExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseAndExpression_precedence_equality_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseAndExpression_precedence_equality_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseAndExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseOrExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseOrExpression_precedence_xor_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseOrExpression_precedence_xor_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseOrExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseXorExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseXorExpression_precedence_and_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseXorExpression_precedence_and_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseXorExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_cascade_withAssignment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_conditionalExpression_precedence_ifNullExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_conditionalExpression_precedence_logicalOrExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_conditionalExpression_precedence_nullableType_as() : void {
        throw 'from mixin';
    }
    @Abstract
    test_conditionalExpression_precedence_nullableType_is() : void {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializer_withParenthesizedExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_equalityExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_equalityExpression_precedence_relational_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_equalityExpression_precedence_relational_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_equalityExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_ifNullExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_ifNullExpression_precedence_logicalOr_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_ifNullExpression_precedence_logicalOr_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_logicalAndExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_logicalAndExpression_precedence_bitwiseOr_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_logicalAndExpression_precedence_bitwiseOr_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_logicalAndExpression_precedence_nullableType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_logicalOrExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_logicalOrExpression_precedence_logicalAnd_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_logicalOrExpression_precedence_logicalAnd_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_logicalOrExpression_precedence_nullableType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_multipleLabels_statement() : void {
        throw 'from mixin';
    }
    @Abstract
    test_multiplicativeExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_multiplicativeExpression_precedence_unary_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_multiplicativeExpression_precedence_unary_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_multiplicativeExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_relationalExpression_precedence_shift_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_shiftExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_shiftExpression_precedence_additive_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_shiftExpression_precedence_additive_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_shiftExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_topLevelFunction_nestedGenericFunction() : void {
        throw 'from mixin';
    }
    @Abstract
    _validate_assignableExpression_arguments_normal_chain_typeArguments(code : string) : void {
        throw 'from mixin';
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ComplexParserTest() {
    }
}

export namespace ErrorParserTest {
    export type Constructors = ParserTestCase.Constructors | 'ErrorParserTest';
    export type Interface = Omit<ErrorParserTest, Constructors>;
}
@DartClass
export class ErrorParserTest extends ParserTestCase {
    test_abstractClassMember_constructor() : void {
        this.createParser('abstract C.c();');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.ABSTRACT_CLASS_MEMBER));
    }
    test_abstractClassMember_field() : void {
        this.createParser('abstract C f;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.ABSTRACT_CLASS_MEMBER));
    }
    test_abstractClassMember_getter() : void {
        this.createParser('abstract get m;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.ABSTRACT_CLASS_MEMBER));
    }
    test_abstractClassMember_method() : void {
        this.createParser('abstract m();');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.ABSTRACT_CLASS_MEMBER));
    }
    test_abstractClassMember_setter() : void {
        this.createParser('abstract set m(v);');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.ABSTRACT_CLASS_MEMBER));
    }
    test_abstractEnum() : void {
        this.parseCompilationUnit("abstract enum E {ONE}",new core.DartList.literal(ParserErrorCode.ABSTRACT_ENUM));
    }
    test_abstractTopLevelFunction_function() : void {
        this.parseCompilationUnit("abstract f(v) {}",new core.DartList.literal(ParserErrorCode.ABSTRACT_TOP_LEVEL_FUNCTION));
    }
    test_abstractTopLevelFunction_getter() : void {
        this.parseCompilationUnit("abstract get m {}",new core.DartList.literal(ParserErrorCode.ABSTRACT_TOP_LEVEL_FUNCTION));
    }
    test_abstractTopLevelFunction_setter() : void {
        this.parseCompilationUnit("abstract set m(v) {}",new core.DartList.literal(ParserErrorCode.ABSTRACT_TOP_LEVEL_FUNCTION));
    }
    test_abstractTopLevelVariable() : void {
        this.parseCompilationUnit("abstract C f;",new core.DartList.literal(ParserErrorCode.ABSTRACT_TOP_LEVEL_VARIABLE));
    }
    test_abstractTypeDef() : void {
        this.parseCompilationUnit("abstract typedef F();",new core.DartList.literal(ParserErrorCode.ABSTRACT_TYPEDEF));
    }
    test_annotationOnEnumConstant_first() : void {
        this.parseCompilationUnit("enum E { @override C }",new core.DartList.literal(ParserErrorCode.ANNOTATION_ON_ENUM_CONSTANT));
    }
    test_annotationOnEnumConstant_middle() : void {
        this.parseCompilationUnit("enum E { C, @override D, E }",new core.DartList.literal(ParserErrorCode.ANNOTATION_ON_ENUM_CONSTANT));
    }
    test_breakOutsideOfLoop_breakInDoStatement() : void {
        this.createParser('do {break;} while (x);');
        let statement : any = this.parser.parseDoStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertNoErrors();
    }
    test_breakOutsideOfLoop_breakInForStatement() : void {
        this.createParser('for (; x;) {break;}');
        let statement : any = this.parser.parseForStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertNoErrors();
    }
    test_breakOutsideOfLoop_breakInIfStatement() : void {
        this.createParser('if (x) {break;}');
        let statement : any = this.parser.parseIfStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.BREAK_OUTSIDE_OF_LOOP));
    }
    test_breakOutsideOfLoop_breakInSwitchStatement() : void {
        this.createParser('switch (x) {case 1: break;}');
        let statement : any = this.parser.parseSwitchStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertNoErrors();
    }
    test_breakOutsideOfLoop_breakInWhileStatement() : void {
        this.createParser('while (x) {break;}');
        let statement : any = this.parser.parseWhileStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertNoErrors();
    }
    test_breakOutsideOfLoop_functionExpression_inALoop() : void {
        this.parseStatement("for(; x;) {() {break;};}");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.BREAK_OUTSIDE_OF_LOOP));
    }
    test_breakOutsideOfLoop_functionExpression_withALoop() : void {
        this.parseStatement("() {for (; x;) {break;}};");
    }
    test_classInClass_abstract() : void {
        this.parseCompilationUnit("class C { abstract class B {} }",new core.DartList.literal(ParserErrorCode.CLASS_IN_CLASS));
    }
    test_classInClass_nonAbstract() : void {
        this.parseCompilationUnit("class C { class B {} }",new core.DartList.literal(ParserErrorCode.CLASS_IN_CLASS));
    }
    test_classTypeAlias_abstractAfterEq() : void {
        this.createParser('class A = abstract B with C;');
        let member : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.EXPECTED_TOKEN));
    }
    test_colonInPlaceOfIn() : void {
        this.parseStatement("for (var x : list) {}");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.COLON_IN_PLACE_OF_IN));
    }
    test_constAndCovariant() : void {
        this.createParser('covariant const C f;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.CONST_AND_COVARIANT));
    }
    test_constAndFinal() : void {
        this.createParser('const final int x;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.CONST_AND_FINAL));
    }
    test_constAndVar() : void {
        this.createParser('const var x;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.CONST_AND_VAR));
    }
    test_constClass() : void {
        this.parseCompilationUnit("const class C {}",new core.DartList.literal(ParserErrorCode.CONST_CLASS));
    }
    test_constConstructorWithBody() : void {
        this.createParser('const C() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.CONST_CONSTRUCTOR_WITH_BODY));
    }
    test_constEnum() : void {
        this.parseCompilationUnit("const enum E {ONE}",new core.DartList.literal(ParserErrorCode.CONST_ENUM));
    }
    test_constFactory() : void {
        this.createParser('const factory C() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.CONST_FACTORY));
    }
    test_constMethod() : void {
        this.createParser('const int m() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.CONST_METHOD));
    }
    test_constructorWithReturnType() : void {
        this.createParser('C C() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.CONSTRUCTOR_WITH_RETURN_TYPE));
    }
    test_constructorWithReturnType_var() : void {
        this.createParser('var C() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.CONSTRUCTOR_WITH_RETURN_TYPE));
    }
    test_constTypedef() : void {
        this.parseCompilationUnit("const typedef F();",new core.DartList.literal(ParserErrorCode.CONST_TYPEDEF));
    }
    test_continueOutsideOfLoop_continueInDoStatement() : void {
        this.createParser('do {continue;} while (x);');
        let statement : any = this.parser.parseDoStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertNoErrors();
    }
    test_continueOutsideOfLoop_continueInForStatement() : void {
        this.createParser('for (; x;) {continue;}');
        let statement : any = this.parser.parseForStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertNoErrors();
    }
    test_continueOutsideOfLoop_continueInIfStatement() : void {
        this.createParser('if (x) {continue;}');
        let statement : any = this.parser.parseIfStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.CONTINUE_OUTSIDE_OF_LOOP));
    }
    test_continueOutsideOfLoop_continueInSwitchStatement() : void {
        this.createParser('switch (x) {case 1: continue a;}');
        let statement : any = this.parser.parseSwitchStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertNoErrors();
    }
    test_continueOutsideOfLoop_continueInWhileStatement() : void {
        this.createParser('while (x) {continue;}');
        let statement : any = this.parser.parseWhileStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertNoErrors();
    }
    test_continueOutsideOfLoop_functionExpression_inALoop() : void {
        this.parseStatement("for(; x;) {() {continue;};}");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.CONTINUE_OUTSIDE_OF_LOOP));
    }
    test_continueOutsideOfLoop_functionExpression_withALoop() : void {
        this.parseStatement("() {for (; x;) {continue;}};");
    }
    test_continueWithoutLabelInCase_error() : void {
        this.createParser('switch (x) {case 1: continue;}');
        let statement : any = this.parser.parseSwitchStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.CONTINUE_WITHOUT_LABEL_IN_CASE));
    }
    test_continueWithoutLabelInCase_noError() : void {
        this.createParser('switch (x) {case 1: continue a;}');
        let statement : any = this.parser.parseSwitchStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertNoErrors();
    }
    test_continueWithoutLabelInCase_noError_switchInLoop() : void {
        this.createParser('while (a) { switch (b) {default: continue;}}');
        let statement : any = this.parser.parseWhileStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertNoErrors();
    }
    test_covariantAfterVar() : void {
        this.createParser('var covariant f;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.COVARIANT_AFTER_VAR));
    }
    test_covariantAndStatic() : void {
        this.createParser('covariant static A f;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.COVARIANT_AND_STATIC));
    }
    test_covariantConstructor() : void {
        this.createParser('class C { covariant C(); }');
        let member : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.COVARIANT_CONSTRUCTOR));
    }
    test_covariantMember_getter_noReturnType() : void {
        this.createParser('static covariant get x => 0;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.COVARIANT_MEMBER));
    }
    test_covariantMember_getter_returnType() : void {
        this.createParser('static covariant int get x => 0;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.COVARIANT_MEMBER));
    }
    test_covariantMember_method() : void {
        this.createParser('covariant int m() => 0;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.COVARIANT_MEMBER));
    }
    test_covariantTopLevelDeclaration_class() : void {
        this.createParser('covariant class C {}');
        let member : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.COVARIANT_TOP_LEVEL_DECLARATION));
    }
    test_covariantTopLevelDeclaration_enum() : void {
        this.createParser('covariant enum E { v }');
        let member : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.COVARIANT_TOP_LEVEL_DECLARATION));
    }
    test_covariantTopLevelDeclaration_typedef() : void {
        this.parseCompilationUnit("covariant typedef F();",new core.DartList.literal(ParserErrorCode.COVARIANT_TOP_LEVEL_DECLARATION));
    }
    test_defaultValueInFunctionType_named_colon() : void {
        this.createParser('int x : 0');
        let parameter : any = this.parser.parseFormalParameter(ParameterKind.NAMED,{
            inFunctionType : true});
        this.expectNotNullIfNoErrors(parameter);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.DEFAULT_VALUE_IN_FUNCTION_TYPE));
    }
    test_defaultValueInFunctionType_named_equal() : void {
        this.createParser('int x = 0');
        let parameter : any = this.parser.parseFormalParameter(ParameterKind.NAMED,{
            inFunctionType : true});
        this.expectNotNullIfNoErrors(parameter);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.DEFAULT_VALUE_IN_FUNCTION_TYPE));
    }
    test_defaultValueInFunctionType_positional() : void {
        this.createParser('int x = 0');
        let parameter : any = this.parser.parseFormalParameter(ParameterKind.POSITIONAL,{
            inFunctionType : true});
        this.expectNotNullIfNoErrors(parameter);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.DEFAULT_VALUE_IN_FUNCTION_TYPE));
    }
    test_directiveAfterDeclaration_classBeforeDirective() : void {
        let unit : any = this.parseCompilationUnit("class Foo{} library l;",new core.DartList.literal(ParserErrorCode.DIRECTIVE_AFTER_DECLARATION));
        expect(unit,isNotNull);
    }
    test_directiveAfterDeclaration_classBetweenDirectives() : void {
        let unit : any = this.parseCompilationUnit("library l;\nclass Foo{}\npart 'a.dart';",new core.DartList.literal(ParserErrorCode.DIRECTIVE_AFTER_DECLARATION));
        expect(unit,isNotNull);
    }
    test_duplicatedModifier_const() : void {
        this.createParser('const const m;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.DUPLICATED_MODIFIER));
    }
    test_duplicatedModifier_external() : void {
        this.createParser('external external f();');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.DUPLICATED_MODIFIER));
    }
    test_duplicatedModifier_factory() : void {
        this.createParser('factory factory C() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.DUPLICATED_MODIFIER));
    }
    test_duplicatedModifier_final() : void {
        this.createParser('final final m;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.DUPLICATED_MODIFIER));
    }
    test_duplicatedModifier_static() : void {
        this.createParser('static static var m;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.DUPLICATED_MODIFIER));
    }
    test_duplicatedModifier_var() : void {
        this.createParser('var var m;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.DUPLICATED_MODIFIER));
    }
    test_duplicateLabelInSwitchStatement() : void {
        this.createParser('switch (e) {l1: case 0: break; l1: case 1: break;}');
        let statement : any = this.parser.parseSwitchStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.DUPLICATE_LABEL_IN_SWITCH_STATEMENT));
    }
    test_emptyEnumBody() : void {
        this.createParser('enum E {}');
        let declaration : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(declaration);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EMPTY_ENUM_BODY));
    }
    test_enumInClass() : void {
        this.parseCompilationUnit('class Foo {\n  enum Bar {\n    Bar1, Bar2, Bar3\n  }\n}\n',new core.DartList.literal(ParserErrorCode.ENUM_IN_CLASS));
    }
    test_equalityCannotBeEqualityOperand_eq_eq() : void {
        this.parseExpression("1 == 2 == 3",new core.DartList.literal(ParserErrorCode.EQUALITY_CANNOT_BE_EQUALITY_OPERAND));
    }
    test_equalityCannotBeEqualityOperand_eq_neq() : void {
        this.parseExpression("1 == 2 != 3",new core.DartList.literal(ParserErrorCode.EQUALITY_CANNOT_BE_EQUALITY_OPERAND));
    }
    test_equalityCannotBeEqualityOperand_neq_eq() : void {
        this.parseExpression("1 != 2 == 3",new core.DartList.literal(ParserErrorCode.EQUALITY_CANNOT_BE_EQUALITY_OPERAND));
    }
    test_expectedCaseOrDefault() : void {
        this.createParser('switch (e) {break;}');
        let statement : any = this.parser.parseSwitchStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_CASE_OR_DEFAULT));
    }
    test_expectedClassMember_inClass_afterType() : void {
        this.createParser('heart 2 heart');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_CLASS_MEMBER));
    }
    test_expectedClassMember_inClass_beforeType() : void {
        this.createParser('4 score');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_CLASS_MEMBER));
    }
    test_expectedExecutable_inClass_afterVoid() : void {
        this.createParser('void 2 void');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_EXECUTABLE));
    }
    test_expectedExecutable_topLevel_afterType() : void {
        this.createParser('heart 2 heart');
        let member : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_EXECUTABLE));
    }
    test_expectedExecutable_topLevel_afterVoid() : void {
        this.createParser('void 2 void');
        let member : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_EXECUTABLE));
    }
    test_expectedExecutable_topLevel_beforeType() : void {
        this.createParser('4 score');
        let member : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_EXECUTABLE));
    }
    test_expectedExecutable_topLevel_eof() : void {
        this.createParser('x');
        let member : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrors(new core.DartList.literal(new bare.createInstance(any,null,null,0,1,ParserErrorCode.EXPECTED_EXECUTABLE)));
    }
    test_expectedInterpolationIdentifier() : void {
        this.createParser("'$x$'");
        let literal : any = this.parser.parseStringLiteral();
        this.expectNotNullIfNoErrors(literal);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
    }
    test_expectedInterpolationIdentifier_emptyString() : void {
        this.createParser("'$$foo'");
        let literal : any = this.parser.parseStringLiteral();
        this.expectNotNullIfNoErrors(literal);
        this.listener.assertErrors(new core.DartList.literal(new bare.createInstance(any,null,null,2,1,ParserErrorCode.MISSING_IDENTIFIER)));
    }
    test_expectedListOrMapLiteral() : void {
        let literal : any = this.parseListOrMapLiteral(null,'1');
        this.expectNotNullIfNoErrors(literal);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_LIST_OR_MAP_LITERAL));
        expect(literal.isSynthetic,isTrue);
    }
    test_expectedStringLiteral() : void {
        this.createParser('1');
        let literal : any = this.parser.parseStringLiteral();
        this.expectNotNullIfNoErrors(literal);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_STRING_LITERAL));
        expect(literal.isSynthetic,isTrue);
    }
    test_expectedToken_commaMissingInArgumentList() : void {
        this.createParser('(x, y z)');
        let list : any = this.parser.parseArgumentList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN));
    }
    test_expectedToken_parseStatement_afterVoid() : void {
        this.parseStatement("void}");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.MISSING_IDENTIFIER));
    }
    test_expectedToken_semicolonMissingAfterExport() : void {
        let unit : any = this.parseCompilationUnit("export '' class A {}",new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN));
        let directive : any = op(Op.INDEX,unit.directives,0) as any;
        let semicolon : any = directive.semicolon;
        expect(semicolon,isNotNull);
        expect(semicolon.isSynthetic,isTrue);
    }
    test_expectedToken_semicolonMissingAfterExpression() : void {
        this.parseStatement("x");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN));
    }
    test_expectedToken_semicolonMissingAfterImport() : void {
        let unit : any = this.parseCompilationUnit("import '' class A {}",new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN));
        let directive : any = op(Op.INDEX,unit.directives,0) as any;
        let semicolon : any = directive.semicolon;
        expect(semicolon,isNotNull);
        expect(semicolon.isSynthetic,isTrue);
    }
    test_expectedToken_whileMissingInDoStatement() : void {
        this.parseStatement("do {} (x);");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN));
    }
    test_expectedTypeName_as() : void {
        this.parseExpression("x as",new core.DartList.literal(ParserErrorCode.EXPECTED_TYPE_NAME));
    }
    test_expectedTypeName_as_void() : void {
        this.parseExpression("x as void)",new core.DartList.literal(ParserErrorCode.EXPECTED_TYPE_NAME));
    }
    test_expectedTypeName_is() : void {
        this.parseExpression("x is",new core.DartList.literal(ParserErrorCode.EXPECTED_TYPE_NAME));
    }
    test_expectedTypeName_is_void() : void {
        this.parseExpression("x is void)",new core.DartList.literal(ParserErrorCode.EXPECTED_TYPE_NAME));
    }
    test_exportDirectiveAfterPartDirective() : void {
        this.parseCompilationUnit("part 'a.dart'; export 'b.dart';",new core.DartList.literal(ParserErrorCode.EXPORT_DIRECTIVE_AFTER_PART_DIRECTIVE));
    }
    test_externalAfterConst() : void {
        this.createParser('const external C();');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXTERNAL_AFTER_CONST));
    }
    test_externalAfterFactory() : void {
        this.createParser('factory external C();');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXTERNAL_AFTER_FACTORY));
    }
    test_externalAfterStatic() : void {
        this.createParser('static external int m();');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXTERNAL_AFTER_STATIC));
    }
    test_externalClass() : void {
        this.parseCompilationUnit("external class C {}",new core.DartList.literal(ParserErrorCode.EXTERNAL_CLASS));
    }
    test_externalConstructorWithBody_factory() : void {
        this.createParser('external factory C() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXTERNAL_CONSTRUCTOR_WITH_BODY));
    }
    test_externalConstructorWithBody_named() : void {
        this.createParser('external C.c() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXTERNAL_CONSTRUCTOR_WITH_BODY));
    }
    test_externalEnum() : void {
        this.parseCompilationUnit("external enum E {ONE}",new core.DartList.literal(ParserErrorCode.EXTERNAL_ENUM));
    }
    test_externalField_const() : void {
        this.createParser('external const A f;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXTERNAL_FIELD));
    }
    test_externalField_final() : void {
        this.createParser('external final A f;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXTERNAL_FIELD));
    }
    test_externalField_static() : void {
        this.createParser('external static A f;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXTERNAL_FIELD));
    }
    test_externalField_typed() : void {
        this.createParser('external A f;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXTERNAL_FIELD));
    }
    test_externalField_untyped() : void {
        this.createParser('external var f;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXTERNAL_FIELD));
    }
    test_externalGetterWithBody() : void {
        this.createParser('external int get x {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXTERNAL_GETTER_WITH_BODY));
    }
    test_externalMethodWithBody() : void {
        this.createParser('external m() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXTERNAL_METHOD_WITH_BODY));
    }
    test_externalOperatorWithBody() : void {
        this.createParser('external operator +(int value) {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXTERNAL_OPERATOR_WITH_BODY));
    }
    test_externalSetterWithBody() : void {
        this.createParser('external set x(int value) {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXTERNAL_SETTER_WITH_BODY));
    }
    test_externalTypedef() : void {
        this.parseCompilationUnit("external typedef F();",new core.DartList.literal(ParserErrorCode.EXTERNAL_TYPEDEF));
    }
    test_extraCommaInParameterList() : void {
        this.createParser('(int a, , int b)');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.EXPECTED_TOKEN));
    }
    test_extraCommaTrailingNamedParameterGroup() : void {
        this.createParser('({int b},)');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.NORMAL_BEFORE_OPTIONAL_PARAMETERS));
    }
    test_extraCommaTrailingPositionalParameterGroup() : void {
        this.createParser('([int b],)');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.NORMAL_BEFORE_OPTIONAL_PARAMETERS));
    }
    test_extraTrailingCommaInParameterList() : void {
        this.createParser('(a,,)');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
    }
    test_factoryTopLevelDeclaration_class() : void {
        this.parseCompilationUnit("factory class C {}",new core.DartList.literal(ParserErrorCode.FACTORY_TOP_LEVEL_DECLARATION));
    }
    test_factoryTopLevelDeclaration_enum() : void {
        this.parseCompilationUnit("factory enum E { v }",new core.DartList.literal(ParserErrorCode.FACTORY_TOP_LEVEL_DECLARATION));
    }
    test_factoryTopLevelDeclaration_typedef() : void {
        this.parseCompilationUnit("factory typedef F();",new core.DartList.literal(ParserErrorCode.FACTORY_TOP_LEVEL_DECLARATION));
    }
    test_factoryWithInitializers() : void {
        this.createParser('factory C() : x = 3 {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.FACTORY_WITH_INITIALIZERS));
    }
    test_factoryWithoutBody() : void {
        this.createParser('factory C();');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.FACTORY_WITHOUT_BODY));
    }
    test_fieldInitializerOutsideConstructor() : void {
        this.createParser('void m(this.x);');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR));
    }
    test_finalAndCovariant() : void {
        this.createParser('covariant final f;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.FINAL_AND_COVARIANT));
    }
    test_finalAndVar() : void {
        this.createParser('final var x;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.FINAL_AND_VAR));
    }
    test_finalClass() : void {
        this.parseCompilationUnit("final class C {}",new core.DartList.literal(ParserErrorCode.FINAL_CLASS));
    }
    test_finalConstructor() : void {
        this.createParser('final C() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.FINAL_CONSTRUCTOR));
    }
    test_finalEnum() : void {
        this.parseCompilationUnit("final enum E {ONE}",new core.DartList.literal(ParserErrorCode.FINAL_ENUM));
    }
    test_finalMethod() : void {
        this.createParser('final int m() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.FINAL_METHOD));
    }
    test_finalTypedef() : void {
        this.parseCompilationUnit("final typedef F();",new core.DartList.literal(ParserErrorCode.FINAL_TYPEDEF));
    }
    test_functionTypedParameter_const() : void {
        this.parseCompilationUnit("void f(const x()) {}",new core.DartList.literal(ParserErrorCode.FUNCTION_TYPED_PARAMETER_VAR));
    }
    test_functionTypedParameter_final() : void {
        this.parseCompilationUnit("void f(final x()) {}",new core.DartList.literal(ParserErrorCode.FUNCTION_TYPED_PARAMETER_VAR));
    }
    test_functionTypedParameter_incomplete1() : void {
        this.parseCompilationUnit("void f(int Function(",new core.DartList.literal(ParserErrorCode.MISSING_FUNCTION_BODY,ParserErrorCode.MISSING_CLOSING_PARENTHESIS,ParserErrorCode.EXPECTED_EXECUTABLE,ParserErrorCode.MISSING_CONST_FINAL_VAR_OR_TYPE,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.EXPECTED_TOKEN));
    }
    test_functionTypedParameter_var() : void {
        this.parseCompilationUnit("void f(var x()) {}",new core.DartList.literal(ParserErrorCode.FUNCTION_TYPED_PARAMETER_VAR));
    }
    test_getterInFunction_block_noReturnType() : void {
        let statement : any = this.parseStatement("get x { return _x; }");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.GETTER_IN_FUNCTION));
        expect(statement.functionDeclaration.functionExpression.parameters,isNull);
    }
    test_getterInFunction_block_returnType() : void {
        this.parseStatement("int get x { return _x; }");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.GETTER_IN_FUNCTION));
    }
    test_getterInFunction_expression_noReturnType() : void {
        this.parseStatement("get x => _x;");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.GETTER_IN_FUNCTION));
    }
    test_getterInFunction_expression_returnType() : void {
        this.parseStatement("int get x => _x;");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.GETTER_IN_FUNCTION));
    }
    test_getterWithParameters() : void {
        this.createParser('int get x() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.GETTER_WITH_PARAMETERS));
    }
    test_illegalAssignmentToNonAssignable_postfix_minusMinus_literal() : void {
        this.parseExpression("0--",new core.DartList.literal(ParserErrorCode.ILLEGAL_ASSIGNMENT_TO_NON_ASSIGNABLE));
    }
    test_illegalAssignmentToNonAssignable_postfix_plusPlus_literal() : void {
        this.parseExpression("0++",new core.DartList.literal(ParserErrorCode.ILLEGAL_ASSIGNMENT_TO_NON_ASSIGNABLE));
    }
    test_illegalAssignmentToNonAssignable_postfix_plusPlus_parenthesized() : void {
        this.parseExpression("(x)++",new core.DartList.literal(ParserErrorCode.ILLEGAL_ASSIGNMENT_TO_NON_ASSIGNABLE));
    }
    test_illegalAssignmentToNonAssignable_primarySelectorPostfix() : void {
        this.parseExpression("x(y)(z)++",new core.DartList.literal(ParserErrorCode.ILLEGAL_ASSIGNMENT_TO_NON_ASSIGNABLE));
    }
    test_illegalAssignmentToNonAssignable_superAssigned() : void {
        this.parseExpression("super = x;",new core.DartList.literal(ParserErrorCode.MISSING_ASSIGNABLE_SELECTOR,ParserErrorCode.ILLEGAL_ASSIGNMENT_TO_NON_ASSIGNABLE));
    }
    test_illegalAssignmentToNonAssignable_superAssigned_failing() : void {
        this.parseExpression("super = x;",new core.DartList.literal(ParserErrorCode.ILLEGAL_ASSIGNMENT_TO_NON_ASSIGNABLE));
    }
    test_implementsBeforeExtends() : void {
        this.parseCompilationUnit("class A implements B extends C {}",new core.DartList.literal(ParserErrorCode.IMPLEMENTS_BEFORE_EXTENDS));
    }
    test_implementsBeforeWith() : void {
        this.parseCompilationUnit("class A extends B implements C with D {}",new core.DartList.literal(ParserErrorCode.IMPLEMENTS_BEFORE_WITH));
    }
    test_importDirectiveAfterPartDirective() : void {
        this.parseCompilationUnit("part 'a.dart'; import 'b.dart';",new core.DartList.literal(ParserErrorCode.IMPORT_DIRECTIVE_AFTER_PART_DIRECTIVE));
    }
    test_initializedVariableInForEach() : void {
        this.createParser('for (int a = 0 in foo) {}');
        let statement : any = this.parser.parseForStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INITIALIZED_VARIABLE_IN_FOR_EACH));
    }
    test_invalidAwaitInFor() : void {
        this.createParser('await for (; ;) {}');
        let statement : any = this.parser.parseForStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_AWAIT_IN_FOR));
    }
    test_invalidCodePoint() : void {
        this.createParser("'\u{110000}'");
        let literal : any = this.parser.parseStringLiteral();
        this.expectNotNullIfNoErrors(literal);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_CODE_POINT));
    }
    test_invalidCommentReference__new_nonIdentifier() : void {
        this.createParser('');
        let reference : any = this.parser.parseCommentReference('new 42',0);
        this.expectNotNullIfNoErrors(reference);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_COMMENT_REFERENCE));
    }
    test_invalidCommentReference__new_tooMuch() : void {
        this.createParser('');
        let reference : any = this.parser.parseCommentReference('new a.b.c.d',0);
        this.expectNotNullIfNoErrors(reference);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_COMMENT_REFERENCE));
    }
    test_invalidCommentReference__nonNew_nonIdentifier() : void {
        this.createParser('');
        let reference : any = this.parser.parseCommentReference('42',0);
        this.expectNotNullIfNoErrors(reference);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_COMMENT_REFERENCE));
    }
    test_invalidCommentReference__nonNew_tooMuch() : void {
        this.createParser('');
        let reference : any = this.parser.parseCommentReference('a.b.c.d',0);
        this.expectNotNullIfNoErrors(reference);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_COMMENT_REFERENCE));
    }
    test_invalidConstructorName_with() : void {
        this.createParser("C.with();");
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_CONSTRUCTOR_NAME));
    }
    test_invalidHexEscape_invalidDigit() : void {
        this.createParser("'\x0 a'");
        let literal : any = this.parser.parseStringLiteral();
        this.expectNotNullIfNoErrors(literal);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_HEX_ESCAPE));
    }
    test_invalidHexEscape_tooFewDigits() : void {
        this.createParser("'\x0'");
        let literal : any = this.parser.parseStringLiteral();
        this.expectNotNullIfNoErrors(literal);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_HEX_ESCAPE));
    }
    test_invalidInterpolationIdentifier_startWithDigit() : void {
        this.createParser("'$1'");
        let literal : any = this.parser.parseStringLiteral();
        this.expectNotNullIfNoErrors(literal);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
    }
    test_invalidLiteralInConfiguration() : void {
        this.createParser("if (a == 'x $y z') 'a.dart'");
        let configuration : any = this.parser.parseConfiguration();
        this.expectNotNullIfNoErrors(configuration);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_LITERAL_IN_CONFIGURATION));
    }
    test_invalidOperator() : void {
        this.createParser('void operator ===(x) {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_OPERATOR));
    }
    test_invalidOperatorAfterSuper_assignableExpression() : void {
        let expression : any = this.parseAssignableExpression('super?.v',false);
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_OPERATOR_FOR_SUPER));
    }
    test_invalidOperatorAfterSuper_primaryExpression() : void {
        let expression : any = this.parsePrimaryExpression('super?.v');
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_OPERATOR_FOR_SUPER));
    }
    test_invalidOperatorForSuper() : void {
        this.createParser('++super');
        let expression : any = this.parser.parseUnaryExpression();
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_OPERATOR_FOR_SUPER));
    }
    test_invalidStarAfterAsync() : void {
        this.createParser('async* => 0;');
        let functionBody : any = this.parser.parseFunctionBody(false,null,false);
        this.expectNotNullIfNoErrors(functionBody);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_STAR_AFTER_ASYNC));
    }
    test_invalidSync() : void {
        this.createParser('sync* => 0;');
        let functionBody : any = this.parser.parseFunctionBody(false,null,false);
        this.expectNotNullIfNoErrors(functionBody);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_SYNC));
    }
    test_invalidUnicodeEscape_incomplete_noDigits() : void {
        let expression : any = this.parseStringLiteral("'\u{'");
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_UNICODE_ESCAPE));
    }
    test_invalidUnicodeEscape_incomplete_someDigits() : void {
        let expression : any = this.parseStringLiteral("'\u{0A'");
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_UNICODE_ESCAPE));
    }
    test_invalidUnicodeEscape_invalidDigit() : void {
        let expression : any = this.parseStringLiteral("'\u0 a'");
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_UNICODE_ESCAPE));
    }
    test_invalidUnicodeEscape_tooFewDigits_fixed() : void {
        let expression : any = this.parseStringLiteral("'\u04'");
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_UNICODE_ESCAPE));
    }
    test_invalidUnicodeEscape_tooFewDigits_variable() : void {
        let expression : any = this.parseStringLiteral("'\u{}'");
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_UNICODE_ESCAPE));
    }
    test_invalidUnicodeEscape_tooManyDigits_variable() : void {
        let expression : any = this.parseStringLiteral("'\u{12345678}'");
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.INVALID_UNICODE_ESCAPE,ParserErrorCode.INVALID_CODE_POINT));
    }
    test_libraryDirectiveNotFirst() : void {
        this.parseCompilationUnit("import 'x.dart'; library l;",new core.DartList.literal(ParserErrorCode.LIBRARY_DIRECTIVE_NOT_FIRST));
    }
    test_libraryDirectiveNotFirst_afterPart() : void {
        let unit : any = this.parseCompilationUnit("part 'a.dart';\nlibrary l;",new core.DartList.literal(ParserErrorCode.LIBRARY_DIRECTIVE_NOT_FIRST));
        expect(unit,isNotNull);
    }
    test_localFunctionDeclarationModifier_abstract() : void {
        this.parseStatement("abstract f() {}");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.LOCAL_FUNCTION_DECLARATION_MODIFIER));
    }
    test_localFunctionDeclarationModifier_external() : void {
        this.parseStatement("external f() {}");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.LOCAL_FUNCTION_DECLARATION_MODIFIER));
    }
    test_localFunctionDeclarationModifier_factory() : void {
        this.parseStatement("factory f() {}");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.LOCAL_FUNCTION_DECLARATION_MODIFIER));
    }
    test_localFunctionDeclarationModifier_static() : void {
        this.parseStatement("static f() {}");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.LOCAL_FUNCTION_DECLARATION_MODIFIER));
    }
    test_method_invalidTypeParameterComments() : void {
        this.enableGenericMethodComments = true;
        this.createParser('void m/*<E, hello!>*/() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.MISSING_FUNCTION_BODY));
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.typeParameters.toString(),'<E, hello>',{
            reason : 'parser recovers what it can'});
    }
    test_method_invalidTypeParameterExtends() : void {
        this.createParser('f<E>(E extends num p);');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.MISSING_FUNCTION_BODY));
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.parameters.toString(),'(E, extends)',{
            reason : 'parser recovers what it can'});
    }
    test_method_invalidTypeParameterExtendsComment() : void {
        this.enableGenericMethodComments = true;
        this.createParser('f/*<E>*/(dynamic/*=E extends num*/p);');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.MISSING_FUNCTION_BODY));
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.parameters.toString(),'(E extends, extends)',{
            reason : 'parser recovers what it can'});
    }
    test_method_invalidTypeParameters() : void {
        this.createParser('void m<E, hello!>() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.MISSING_FUNCTION_BODY));
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.typeParameters.toString(),'<E, hello>',{
            reason : 'parser recovers what it can'});
    }
    test_missingAssignableSelector_identifiersAssigned() : void {
        this.parseExpression("x.y = y;");
    }
    test_missingAssignableSelector_prefix_minusMinus_literal() : void {
        this.parseExpression("--0",new core.DartList.literal(ParserErrorCode.MISSING_ASSIGNABLE_SELECTOR));
    }
    test_missingAssignableSelector_prefix_plusPlus_literal() : void {
        this.parseExpression("++0",new core.DartList.literal(ParserErrorCode.MISSING_ASSIGNABLE_SELECTOR));
    }
    test_missingAssignableSelector_selector() : void {
        this.parseExpression("x(y)(z).a++");
    }
    test_missingAssignableSelector_superPrimaryExpression() : void {
        this.createParser('super');
        let expression : any = this.parser.parsePrimaryExpression();
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_ASSIGNABLE_SELECTOR));
        expect(expression,new bare.createInstance(any,null));
        let superExpression : any = expression;
        expect(superExpression.superKeyword,isNotNull);
    }
    test_missingAssignableSelector_superPropertyAccessAssigned() : void {
        this.parseExpression("super.x = x;");
    }
    test_missingCatchOrFinally() : void {
        this.createParser('try {}');
        let statement : any = this.parser.parseTryStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_CATCH_OR_FINALLY));
        expect(statement,isNotNull);
    }
    test_missingClassBody() : void {
        this.parseCompilationUnit("class A class B {}",new core.DartList.literal(ParserErrorCode.MISSING_CLASS_BODY));
    }
    test_missingClosingParenthesis() : void {
        this.createParser('(int a, int b ;');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_CLOSING_PARENTHESIS));
    }
    test_missingConstFinalVarOrType_static() : void {
        this.parseCompilationUnit("class A { static f; }",new core.DartList.literal(ParserErrorCode.MISSING_CONST_FINAL_VAR_OR_TYPE));
    }
    test_missingConstFinalVarOrType_topLevel() : void {
        this.createParser('a;');
        let result : any = this.parser.parseFinalConstVarOrType(false);
        this.expectNotNullIfNoErrors(result);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_CONST_FINAL_VAR_OR_TYPE));
    }
    test_missingEnumBody() : void {
        this.createParser('enum E;');
        let declaration : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(declaration);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_ENUM_BODY));
    }
    test_missingExpressionInThrow_withCascade() : void {
        this.createParser('throw;');
        let expression : any = this.parser.parseThrowExpression();
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_EXPRESSION_IN_THROW));
    }
    test_missingExpressionInThrow_withoutCascade() : void {
        this.createParser('throw;');
        let expression : any = this.parser.parseThrowExpressionWithoutCascade();
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_EXPRESSION_IN_THROW));
    }
    test_missingFunctionBody_emptyNotAllowed() : void {
        this.createParser(';');
        let functionBody : any = this.parser.parseFunctionBody(false,ParserErrorCode.MISSING_FUNCTION_BODY,false);
        this.expectNotNullIfNoErrors(functionBody);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_FUNCTION_BODY));
    }
    test_missingFunctionBody_invalid() : void {
        this.createParser('return 0;');
        let functionBody : any = this.parser.parseFunctionBody(false,ParserErrorCode.MISSING_FUNCTION_BODY,false);
        this.expectNotNullIfNoErrors(functionBody);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_FUNCTION_BODY));
    }
    test_missingFunctionParameters_local_nonVoid_block() : void {
        this.parseStatement("int f { return x;}");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_FUNCTION_PARAMETERS));
    }
    test_missingFunctionParameters_local_nonVoid_expression() : void {
        this.parseStatement("int f => x;");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_FUNCTION_PARAMETERS));
    }
    test_missingFunctionParameters_local_void_block() : void {
        this.parseStatement("void f { return x;}");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_FUNCTION_PARAMETERS));
    }
    test_missingFunctionParameters_local_void_expression() : void {
        this.parseStatement("void f => x;");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_FUNCTION_PARAMETERS));
    }
    test_missingFunctionParameters_topLevel_nonVoid_block() : void {
        this.parseCompilationUnit("int f { return x;}",new core.DartList.literal(ParserErrorCode.MISSING_FUNCTION_PARAMETERS));
    }
    test_missingFunctionParameters_topLevel_nonVoid_expression() : void {
        this.parseCompilationUnit("int f => x;",new core.DartList.literal(ParserErrorCode.MISSING_FUNCTION_PARAMETERS));
    }
    test_missingFunctionParameters_topLevel_void_block() : void {
        let unit : any = this.parseCompilationUnit("void f { return x;}",new core.DartList.literal(ParserErrorCode.MISSING_FUNCTION_PARAMETERS));
        let funct : any = op(Op.INDEX,unit.declarations,0);
        expect(funct.functionExpression.parameters,hasLength(0));
    }
    test_missingFunctionParameters_topLevel_void_expression() : void {
        let unit : any = this.parseCompilationUnit("void f => x;",new core.DartList.literal(ParserErrorCode.MISSING_FUNCTION_PARAMETERS));
        let funct : any = op(Op.INDEX,unit.declarations,0);
        expect(funct.functionExpression.parameters,hasLength(0));
    }
    test_missingIdentifier_afterOperator() : void {
        this.createParser('1 *');
        let expression : any = this.parser.parseMultiplicativeExpression();
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
    }
    test_missingIdentifier_beforeClosingCurly() : void {
        this.createParser('int}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.EXPECTED_TOKEN));
    }
    test_missingIdentifier_inEnum() : void {
        this.createParser('enum E {, TWO}');
        let declaration : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(declaration);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
    }
    test_missingIdentifier_inSymbol_afterPeriod() : void {
        let literal : any = this.parseSymbolLiteral('#a.');
        this.expectNotNullIfNoErrors(literal);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
    }
    test_missingIdentifier_inSymbol_first() : void {
        let literal : any = this.parseSymbolLiteral('#');
        this.expectNotNullIfNoErrors(literal);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
    }
    test_missingIdentifier_number() : void {
        this.createParser('1');
        let expression : any = this.parser.parseSimpleIdentifier();
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        expect(expression.isSynthetic,isTrue);
    }
    test_missingIdentifierForParameterGroup() : void {
        this.createParser('(,)');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
    }
    test_missingKeywordOperator() : void {
        this.createParser('+(x) {}');
        let method : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(method);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_KEYWORD_OPERATOR));
    }
    test_missingKeywordOperator_parseClassMember() : void {
        this.createParser('+() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_KEYWORD_OPERATOR));
    }
    test_missingKeywordOperator_parseClassMember_afterTypeName() : void {
        this.createParser('int +() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_KEYWORD_OPERATOR));
    }
    test_missingKeywordOperator_parseClassMember_afterVoid() : void {
        this.createParser('void +() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_KEYWORD_OPERATOR));
    }
    test_missingMethodParameters_void_block() : void {
        this.createParser('void m {} }');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_METHOD_PARAMETERS));
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.parameters,hasLength(0));
    }
    test_missingMethodParameters_void_expression() : void {
        this.createParser('void m => null; }');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_METHOD_PARAMETERS));
    }
    test_missingNameForNamedParameter_colon() : void {
        this.createParser('int : 0');
        let parameter : any = this.parser.parseFormalParameter(ParameterKind.NAMED,{
            inFunctionType : true});
        this.expectNotNullIfNoErrors(parameter);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.DEFAULT_VALUE_IN_FUNCTION_TYPE,ParserErrorCode.MISSING_NAME_FOR_NAMED_PARAMETER));
    }
    test_missingNameForNamedParameter_equals() : void {
        this.createParser('int = 0');
        let parameter : any = this.parser.parseFormalParameter(ParameterKind.NAMED,{
            inFunctionType : true});
        this.expectNotNullIfNoErrors(parameter);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.DEFAULT_VALUE_IN_FUNCTION_TYPE,ParserErrorCode.MISSING_NAME_FOR_NAMED_PARAMETER));
    }
    test_missingNameForNamedParameter_noDefault() : void {
        this.createParser('int');
        let parameter : any = this.parser.parseFormalParameter(ParameterKind.NAMED,{
            inFunctionType : true});
        this.expectNotNullIfNoErrors(parameter);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_NAME_FOR_NAMED_PARAMETER));
    }
    test_missingNameInLibraryDirective() : void {
        let unit : any = this.parseCompilationUnit("library;",new core.DartList.literal(ParserErrorCode.MISSING_NAME_IN_LIBRARY_DIRECTIVE));
        expect(unit,isNotNull);
    }
    test_missingNameInPartOfDirective() : void {
        let unit : any = this.parseCompilationUnit("part of;",new core.DartList.literal(ParserErrorCode.MISSING_NAME_IN_PART_OF_DIRECTIVE));
        expect(unit,isNotNull);
    }
    test_missingPrefixInDeferredImport() : void {
        this.parseCompilationUnit("import 'foo.dart' deferred;",new core.DartList.literal(ParserErrorCode.MISSING_PREFIX_IN_DEFERRED_IMPORT));
    }
    test_missingStartAfterSync() : void {
        this.createParser('sync {}');
        let functionBody : any = this.parser.parseFunctionBody(false,null,false);
        this.expectNotNullIfNoErrors(functionBody);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_STAR_AFTER_SYNC));
    }
    test_missingStatement() : void {
        this.parseStatement("is");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_STATEMENT));
    }
    test_missingStatement_afterVoid() : void {
        this.parseStatement("void;");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_STATEMENT));
    }
    test_missingTerminatorForParameterGroup_named() : void {
        this.createParser('(a, {b: 0)');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_TERMINATOR_FOR_PARAMETER_GROUP));
    }
    test_missingTerminatorForParameterGroup_optional() : void {
        this.createParser('(a, [b = 0)');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_TERMINATOR_FOR_PARAMETER_GROUP));
    }
    test_missingTypedefParameters_nonVoid() : void {
        this.parseCompilationUnit("typedef int F;",new core.DartList.literal(ParserErrorCode.MISSING_TYPEDEF_PARAMETERS));
    }
    test_missingTypedefParameters_typeParameters() : void {
        this.parseCompilationUnit("typedef F<E>;",new core.DartList.literal(ParserErrorCode.MISSING_TYPEDEF_PARAMETERS));
    }
    test_missingTypedefParameters_void() : void {
        this.parseCompilationUnit("typedef void F;",new core.DartList.literal(ParserErrorCode.MISSING_TYPEDEF_PARAMETERS));
    }
    test_missingVariableInForEach() : void {
        this.createParser('for (a < b in foo) {}');
        let statement : any = this.parser.parseForStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_VARIABLE_IN_FOR_EACH));
    }
    test_mixedParameterGroups_namedPositional() : void {
        this.createParser('(a, {b}, [c])');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MIXED_PARAMETER_GROUPS));
    }
    test_mixedParameterGroups_positionalNamed() : void {
        this.createParser('(a, [b], {c})');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MIXED_PARAMETER_GROUPS));
    }
    test_mixin_application_lacks_with_clause() : void {
        this.parseCompilationUnit("class Foo = Bar;",new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN));
    }
    test_multipleExtendsClauses() : void {
        this.parseCompilationUnit("class A extends B extends C {}",new core.DartList.literal(ParserErrorCode.MULTIPLE_EXTENDS_CLAUSES));
    }
    test_multipleImplementsClauses() : void {
        this.parseCompilationUnit("class A implements B implements C {}",new core.DartList.literal(ParserErrorCode.MULTIPLE_IMPLEMENTS_CLAUSES));
    }
    test_multipleLibraryDirectives() : void {
        this.parseCompilationUnit("library l; library m;",new core.DartList.literal(ParserErrorCode.MULTIPLE_LIBRARY_DIRECTIVES));
    }
    test_multipleNamedParameterGroups() : void {
        this.createParser('(a, {b}, {c})');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MULTIPLE_NAMED_PARAMETER_GROUPS));
    }
    test_multiplePartOfDirectives() : void {
        this.parseCompilationUnit("part of l; part of m;",new core.DartList.literal(ParserErrorCode.MULTIPLE_PART_OF_DIRECTIVES));
    }
    test_multiplePositionalParameterGroups() : void {
        this.createParser('(a, [b], [c])');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MULTIPLE_POSITIONAL_PARAMETER_GROUPS));
    }
    test_multipleVariablesInForEach() : void {
        this.createParser('for (int a, b in foo) {}');
        let statement : any = this.parser.parseForStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MULTIPLE_VARIABLES_IN_FOR_EACH));
    }
    test_multipleWithClauses() : void {
        this.parseCompilationUnit("class A extends B with C with D {}",new core.DartList.literal(ParserErrorCode.MULTIPLE_WITH_CLAUSES));
    }
    test_namedFunctionExpression() : void {
        let expression : any = this.parsePrimaryExpression('f() {}');
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.NAMED_FUNCTION_EXPRESSION));
        expect(expression,new bare.createInstance(any,null));
    }
    test_namedParameterOutsideGroup() : void {
        this.createParser('(a, b : 0)');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.NAMED_PARAMETER_OUTSIDE_GROUP));
        expect(op(Op.INDEX,list.parameters,0).kind,ParameterKind.REQUIRED);
        expect(op(Op.INDEX,list.parameters,1).kind,ParameterKind.NAMED);
    }
    test_nonConstructorFactory_field() : void {
        this.createParser('factory int x;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.NON_CONSTRUCTOR_FACTORY));
    }
    test_nonConstructorFactory_method() : void {
        this.createParser('factory int m() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.NON_CONSTRUCTOR_FACTORY));
    }
    test_nonIdentifierLibraryName_library() : void {
        let unit : any = this.parseCompilationUnit("library 'lib';",new core.DartList.literal(ParserErrorCode.NON_IDENTIFIER_LIBRARY_NAME));
        expect(unit,isNotNull);
    }
    test_nonIdentifierLibraryName_partOf() : void {
        let unit : any = this.parseCompilationUnit("part of 3;",new core.DartList.literal(ParserErrorCode.MISSING_NAME_IN_PART_OF_DIRECTIVE,ParserErrorCode.UNEXPECTED_TOKEN));
        expect(unit,isNotNull);
    }
    test_nonPartOfDirectiveInPart_after() : void {
        this.parseCompilationUnit("part of l; part 'f.dart';",new core.DartList.literal(ParserErrorCode.NON_PART_OF_DIRECTIVE_IN_PART));
    }
    test_nonPartOfDirectiveInPart_before() : void {
        this.parseCompilationUnit("part 'f.dart'; part of m;",new core.DartList.literal(ParserErrorCode.NON_PART_OF_DIRECTIVE_IN_PART));
    }
    test_nonUserDefinableOperator() : void {
        this.createParser('operator +=(int x) => x + 1;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.NON_USER_DEFINABLE_OPERATOR));
    }
    test_nullableTypeInExtends() : void {
        this.enableNnbd = true;
        this.createParser('extends B?');
        let clause : any = this.parser.parseExtendsClause();
        this.expectNotNullIfNoErrors(clause);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.NULLABLE_TYPE_IN_EXTENDS));
    }
    test_nullableTypeInImplements() : void {
        this.enableNnbd = true;
        this.createParser('implements I?');
        let clause : any = this.parser.parseImplementsClause();
        this.expectNotNullIfNoErrors(clause);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.NULLABLE_TYPE_IN_IMPLEMENTS));
    }
    test_nullableTypeInWith() : void {
        this.enableNnbd = true;
        this.createParser('with M?');
        let clause : any = this.parser.parseWithClause();
        this.expectNotNullIfNoErrors(clause);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.NULLABLE_TYPE_IN_WITH));
    }
    test_nullableTypeParameter() : void {
        this.enableNnbd = true;
        this.createParser('T?');
        let parameter : any = this.parser.parseTypeParameter();
        this.expectNotNullIfNoErrors(parameter);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.NULLABLE_TYPE_PARAMETER));
    }
    test_optionalAfterNormalParameters_named() : void {
        this.parseCompilationUnit("f({a}, b) {}",new core.DartList.literal(ParserErrorCode.NORMAL_BEFORE_OPTIONAL_PARAMETERS));
    }
    test_optionalAfterNormalParameters_positional() : void {
        this.parseCompilationUnit("f([a], b) {}",new core.DartList.literal(ParserErrorCode.NORMAL_BEFORE_OPTIONAL_PARAMETERS));
    }
    test_parseCascadeSection_missingIdentifier() : void {
        this.createParser('..()');
        let methodInvocation : any = this.parser.parseCascadeSection();
        this.expectNotNullIfNoErrors(methodInvocation);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        expect(methodInvocation.target,isNull);
        expect(methodInvocation.methodName.name,"");
        expect(methodInvocation.typeArguments,isNull);
        expect(methodInvocation.argumentList.arguments,hasLength(0));
    }
    test_parseCascadeSection_missingIdentifier_typeArguments() : void {
        this.createParser('..<E>()');
        let methodInvocation : any = this.parser.parseCascadeSection();
        this.expectNotNullIfNoErrors(methodInvocation);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        expect(methodInvocation.target,isNull);
        expect(methodInvocation.methodName.name,"");
        expect(methodInvocation.typeArguments,isNotNull);
        expect(methodInvocation.argumentList.arguments,hasLength(0));
    }
    test_positionalAfterNamedArgument() : void {
        this.createParser('(x: 1, 2)');
        let list : any = this.parser.parseArgumentList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.POSITIONAL_AFTER_NAMED_ARGUMENT));
    }
    test_positionalParameterOutsideGroup() : void {
        this.createParser('(a, b = 0)');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.POSITIONAL_PARAMETER_OUTSIDE_GROUP));
        expect(op(Op.INDEX,list.parameters,0).kind,ParameterKind.REQUIRED);
        expect(op(Op.INDEX,list.parameters,1).kind,ParameterKind.POSITIONAL);
    }
    test_redirectingConstructorWithBody_named() : void {
        this.createParser('C.x() : this() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.REDIRECTING_CONSTRUCTOR_WITH_BODY));
    }
    test_redirectingConstructorWithBody_unnamed() : void {
        this.createParser('C() : this.x() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.REDIRECTING_CONSTRUCTOR_WITH_BODY));
    }
    test_redirectionInNonFactoryConstructor() : void {
        this.createParser('C() = D;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.REDIRECTION_IN_NON_FACTORY_CONSTRUCTOR));
    }
    test_setterInFunction_block() : void {
        this.parseStatement("set x(v) {_x = v;}");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.SETTER_IN_FUNCTION));
    }
    test_setterInFunction_expression() : void {
        this.parseStatement("set x(v) => _x = v;");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.SETTER_IN_FUNCTION));
    }
    test_staticAfterConst() : void {
        this.createParser('final static int f;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.STATIC_AFTER_FINAL));
    }
    test_staticAfterFinal() : void {
        this.createParser('const static int f;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.STATIC_AFTER_CONST));
    }
    test_staticAfterVar() : void {
        this.createParser('var static f;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.STATIC_AFTER_VAR));
    }
    test_staticConstructor() : void {
        this.createParser('static C.m() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.STATIC_CONSTRUCTOR));
    }
    test_staticGetterWithoutBody() : void {
        this.createParser('static get m;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.STATIC_GETTER_WITHOUT_BODY));
    }
    test_staticOperator_noReturnType() : void {
        this.createParser('static operator +(int x) => x + 1;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.STATIC_OPERATOR));
    }
    test_staticOperator_returnType() : void {
        this.createParser('static int operator +(int x) => x + 1;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.STATIC_OPERATOR));
    }
    test_staticSetterWithoutBody() : void {
        this.createParser('static set m(x);');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.STATIC_SETTER_WITHOUT_BODY));
    }
    test_staticTopLevelDeclaration_class() : void {
        this.parseCompilationUnit("static class C {}",new core.DartList.literal(ParserErrorCode.STATIC_TOP_LEVEL_DECLARATION));
    }
    test_staticTopLevelDeclaration_enum() : void {
        this.parseCompilationUnit("static enum E { v }",new core.DartList.literal(ParserErrorCode.STATIC_TOP_LEVEL_DECLARATION));
    }
    test_staticTopLevelDeclaration_function() : void {
        this.parseCompilationUnit("static f() {}",new core.DartList.literal(ParserErrorCode.STATIC_TOP_LEVEL_DECLARATION));
    }
    test_staticTopLevelDeclaration_typedef() : void {
        this.parseCompilationUnit("static typedef F();",new core.DartList.literal(ParserErrorCode.STATIC_TOP_LEVEL_DECLARATION));
    }
    test_staticTopLevelDeclaration_variable() : void {
        this.parseCompilationUnit("static var x;",new core.DartList.literal(ParserErrorCode.STATIC_TOP_LEVEL_DECLARATION));
    }
    test_string_unterminated_interpolation_block() : void {
        this.parseCompilationUnit('m() {\n {\n \'${${\n',new core.DartList.literal(ScannerErrorCode.UNTERMINATED_STRING_LITERAL,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.EXPECTED_TOKEN));
    }
    test_switchHasCaseAfterDefaultCase() : void {
        this.createParser('switch (a) {default: return 0; case 1: return 1;}');
        let statement : any = this.parser.parseSwitchStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.SWITCH_HAS_CASE_AFTER_DEFAULT_CASE));
    }
    test_switchHasCaseAfterDefaultCase_repeated() : void {
        this.createParser('switch (a) {default: return 0; case 1: return 1; case 2: return 2;}');
        let statement : any = this.parser.parseSwitchStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.SWITCH_HAS_CASE_AFTER_DEFAULT_CASE,ParserErrorCode.SWITCH_HAS_CASE_AFTER_DEFAULT_CASE));
    }
    test_switchHasMultipleDefaultCases() : void {
        this.createParser('switch (a) {default: return 0; default: return 1;}');
        let statement : any = this.parser.parseSwitchStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.SWITCH_HAS_MULTIPLE_DEFAULT_CASES));
    }
    test_switchHasMultipleDefaultCases_repeated() : void {
        this.createParser('switch (a) {default: return 0; default: return 1; default: return 2;}');
        let statement : any = this.parser.parseSwitchStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.SWITCH_HAS_MULTIPLE_DEFAULT_CASES,ParserErrorCode.SWITCH_HAS_MULTIPLE_DEFAULT_CASES));
    }
    test_topLevel_getter() : void {
        this.createParser('get x => 7;');
        let member : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(member);
        this.listener.assertNoErrors();
        expect(member,new bare.createInstance(any,null));
        let function : any = member;
        expect(function.functionExpression.parameters,isNull);
    }
    test_topLevelOperator_withoutType() : void {
        this.createParser('operator +(bool x, bool y) => x | y;');
        let member : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.TOP_LEVEL_OPERATOR));
    }
    test_topLevelOperator_withType() : void {
        this.createParser('bool operator +(bool x, bool y) => x | y;');
        let member : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.TOP_LEVEL_OPERATOR));
    }
    test_topLevelOperator_withVoid() : void {
        this.createParser('void operator +(bool x, bool y) => x | y;');
        let member : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.TOP_LEVEL_OPERATOR));
    }
    test_topLevelVariable_withMetadata() : void {
        this.parseCompilationUnit("String @A string;",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.MISSING_CONST_FINAL_VAR_OR_TYPE));
    }
    test_typedef_incomplete() : void {
        this.parseCompilationUnit('class A {}\nclass B extends A {}\n\ntypedef T\n\nmain() {\n  Function<\n}\n',new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.UNEXPECTED_TOKEN,ParserErrorCode.EXPECTED_EXECUTABLE));
    }
    test_typedef_namedFunction() : void {
        this.parseCompilationUnit('typedef void Function();',new core.DartList.literal(ParserErrorCode.UNEXPECTED_TOKEN,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.EXPECTED_EXECUTABLE,ParserErrorCode.MISSING_TYPEDEF_PARAMETERS));
    }
    test_typedefInClass_withoutReturnType() : void {
        this.parseCompilationUnit("class C { typedef F(x); }",new core.DartList.literal(ParserErrorCode.TYPEDEF_IN_CLASS));
    }
    test_typedefInClass_withReturnType() : void {
        this.parseCompilationUnit("class C { typedef int F(int x); }",new core.DartList.literal(ParserErrorCode.TYPEDEF_IN_CLASS));
    }
    test_unexpectedTerminatorForParameterGroup_named() : void {
        this.createParser('(a, b})');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.UNEXPECTED_TERMINATOR_FOR_PARAMETER_GROUP));
    }
    test_unexpectedTerminatorForParameterGroup_optional() : void {
        this.createParser('(a, b])');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.UNEXPECTED_TERMINATOR_FOR_PARAMETER_GROUP));
    }
    test_unexpectedToken_endOfFieldDeclarationStatement() : void {
        this.parseStatement("String s = (null));");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.UNEXPECTED_TOKEN));
    }
    test_unexpectedToken_invalidPostfixExpression() : void {
        this.parseExpression("f()++",new core.DartList.literal(ParserErrorCode.UNEXPECTED_TOKEN));
    }
    test_unexpectedToken_returnInExpressionFuntionBody() : void {
        this.parseCompilationUnit("f() => return null;",new core.DartList.literal(ParserErrorCode.UNEXPECTED_TOKEN));
    }
    test_unexpectedToken_semicolonBetweenClassMembers() : void {
        this.createParser('class C { int x; ; int y;}');
        let declaration : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(declaration);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.UNEXPECTED_TOKEN));
    }
    test_unexpectedToken_semicolonBetweenCompilationUnitMembers() : void {
        this.parseCompilationUnit("int x; ; int y;",new core.DartList.literal(ParserErrorCode.UNEXPECTED_TOKEN));
    }
    test_unterminatedString_at_eof() : void {
        this.parseCompilationUnit('void main() {\n  var x = "',new core.DartList.literal(ScannerErrorCode.UNTERMINATED_STRING_LITERAL,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.EXPECTED_TOKEN));
    }
    test_unterminatedString_at_eol() : void {
        this.parseCompilationUnit('void main() {\n  var x = "\n;\n}\n',new core.DartList.literal(ScannerErrorCode.UNTERMINATED_STRING_LITERAL));
    }
    test_unterminatedString_multiline_at_eof_3_quotes() : void {
        this.parseCompilationUnit('void main() {\n  var x = """',new core.DartList.literal(ScannerErrorCode.UNTERMINATED_STRING_LITERAL,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.EXPECTED_TOKEN));
    }
    test_unterminatedString_multiline_at_eof_4_quotes() : void {
        this.parseCompilationUnit('void main() {\n  var x = """"',new core.DartList.literal(ScannerErrorCode.UNTERMINATED_STRING_LITERAL,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.EXPECTED_TOKEN));
    }
    test_unterminatedString_multiline_at_eof_5_quotes() : void {
        this.parseCompilationUnit('void main() {\n  var x = """""',new core.DartList.literal(ScannerErrorCode.UNTERMINATED_STRING_LITERAL,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.EXPECTED_TOKEN));
    }
    test_useOfUnaryPlusOperator() : void {
        this.createParser('+x');
        let expression : any = this.parser.parseUnaryExpression();
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        let identifier = expression as any;
        expect(identifier.isSynthetic,isTrue);
    }
    test_varAndType_field() : void {
        this.parseCompilationUnit("class C { var int x; }",new core.DartList.literal(ParserErrorCode.VAR_AND_TYPE));
    }
    test_varAndType_local() : void {
        this.parseStatement("var int x;");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.VAR_AND_TYPE));
    }
    test_varAndType_parameter() : void {
        this.createParser('(var int x)');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.VAR_AND_TYPE));
    }
    test_varAndType_topLevelVariable() : void {
        this.parseCompilationUnit("var int x;",new core.DartList.literal(ParserErrorCode.VAR_AND_TYPE));
    }
    test_varAsTypeName_as() : void {
        this.parseExpression("x as var",new core.DartList.literal(ParserErrorCode.VAR_AS_TYPE_NAME));
    }
    test_varClass() : void {
        this.parseCompilationUnit("var class C {}",new core.DartList.literal(ParserErrorCode.VAR_CLASS));
    }
    test_varEnum() : void {
        this.parseCompilationUnit("var enum E {ONE}",new core.DartList.literal(ParserErrorCode.VAR_ENUM));
    }
    test_varReturnType() : void {
        this.createParser('var m() {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.VAR_RETURN_TYPE));
    }
    test_varTypedef() : void {
        this.parseCompilationUnit("var typedef F();",new core.DartList.literal(ParserErrorCode.VAR_TYPEDEF));
    }
    test_voidParameter() : void {
        this.createParser('void a)');
        let parameter : any = this.parser.parseNormalFormalParameter();
        this.expectNotNullIfNoErrors(parameter);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.VOID_PARAMETER));
    }
    test_voidVariable_parseClassMember_initializer() : void {
        this.createParser('void x = 0;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.VOID_VARIABLE));
    }
    test_voidVariable_parseClassMember_noInitializer() : void {
        this.createParser('void x;');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.VOID_VARIABLE));
    }
    test_voidVariable_parseCompilationUnit_initializer() : void {
        this.parseCompilationUnit("void x = 0;",new core.DartList.literal(ParserErrorCode.VOID_VARIABLE));
    }
    test_voidVariable_parseCompilationUnit_noInitializer() : void {
        this.parseCompilationUnit("void x;",new core.DartList.literal(ParserErrorCode.VOID_VARIABLE));
    }
    test_voidVariable_parseCompilationUnitMember_initializer() : void {
        this.createParser('void a = 0;');
        let member : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.VOID_VARIABLE));
    }
    test_voidVariable_parseCompilationUnitMember_noInitializer() : void {
        this.createParser('void a;');
        let member : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.VOID_VARIABLE));
    }
    test_voidVariable_statement_initializer() : void {
        this.parseStatement("void x = 0;");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.VOID_VARIABLE));
    }
    test_voidVariable_statement_noInitializer() : void {
        this.parseStatement("void x;");
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.VOID_VARIABLE));
    }
    test_withBeforeExtends() : void {
        this.parseCompilationUnit("class A with B extends C {}",new core.DartList.literal(ParserErrorCode.WITH_BEFORE_EXTENDS));
    }
    test_withWithoutExtends() : void {
        this.createParser('class A with B, C {}');
        let declaration : any = this.parseFullCompilationUnitMember();
        this.expectNotNullIfNoErrors(declaration);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.WITH_WITHOUT_EXTENDS));
    }
    test_wrongSeparatorForPositionalParameter() : void {
        this.createParser('(a, [b : 0])');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.WRONG_SEPARATOR_FOR_POSITIONAL_PARAMETER));
    }
    test_wrongTerminatorForParameterGroup_named() : void {
        this.createParser('(a, {b, c])');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.WRONG_TERMINATOR_FOR_PARAMETER_GROUP));
    }
    test_wrongTerminatorForParameterGroup_optional() : void {
        this.createParser('(a, [b, c})');
        let list : any = this.parser.parseFormalParameterList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.WRONG_TERMINATOR_FOR_PARAMETER_GROUP));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ErrorParserTest() {
    }
}

export namespace ExpressionParserTest {
    export type Constructors = ParserTestCase.Constructors | 'ExpressionParserTest';
    export type Interface = Omit<ExpressionParserTest, Constructors>;
}
@DartClass
@With(ExpressionParserTestMixin)
export class ExpressionParserTest extends ParserTestCase implements ExpressionParserTestMixin.Interface {
    @Abstract
    test_namedArgument() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAdditiveExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAdditiveExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_expression_args_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_expression_args_dot_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_expression_args_dot_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_expression_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_expression_index() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_expression_question_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_identifier() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_identifier_args_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_identifier_args_dot_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_identifier_args_dot_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_identifier_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_identifier_index() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_identifier_question_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_super_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_super_index() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableSelector_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableSelector_index() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableSelector_none() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableSelector_question_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAwaitExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBitwiseAndExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBitwiseAndExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBitwiseOrExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBitwiseOrExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBitwiseXorExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBitwiseXorExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_i() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_ia() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_ia_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_ia_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_ii() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_ii_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_ii_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_p() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_p_assign() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_p_assign_withCascade() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_p_assign_withCascade_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_p_assign_withCascade_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_p_builtIn() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_pa() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_pa_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_pa_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_paa() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_paa_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_paa_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_paapaa() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_paapaa_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_paapaa_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_pap() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_pap_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_pap_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConditionalExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstExpression_instanceCreation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstExpression_listLiteral_typed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstExpression_listLiteral_typed_genericComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstExpression_listLiteral_untyped() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstExpression_mapLiteral_typed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstExpression_mapLiteral_typed_genericComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstExpression_mapLiteral_untyped() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseEqualityExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseEqualityExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_assign() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_assign_compound() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_comparison() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_function_async() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_function_asyncStar() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_function_sync() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_function_syncStar() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_invokeFunctionExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_nonAwait() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_superMethodInvocation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_superMethodInvocation_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_superMethodInvocation_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpressionList_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpressionList_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpressionWithoutCascade_assign() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpressionWithoutCascade_comparison() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpressionWithoutCascade_superMethodInvocation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpressionWithoutCascade_superMethodInvocation_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpressionWithoutCascade_superMethodInvocation_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionExpression_body_inExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionExpression_typeParameterComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionExpression_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_qualifiedType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_qualifiedType_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_qualifiedType_named_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_qualifiedType_named_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_qualifiedType_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_qualifiedType_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_type_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_type_named_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_type_named_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_type_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_type_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_type_typeArguments_nullable() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListLiteral_empty_oneToken() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListLiteral_empty_oneToken_withComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListLiteral_empty_twoTokens() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListLiteral_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListLiteral_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListLiteral_single_withTypeArgument() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListOrMapLiteral_list_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListOrMapLiteral_list_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListOrMapLiteral_map_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListOrMapLiteral_map_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseLogicalAndExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseLogicalOrExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseMapLiteral_empty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseMapLiteral_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseMapLiteral_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseMapLiteralEntry_complex() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseMapLiteralEntry_int() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseMapLiteralEntry_string() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseMultiplicativeExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseMultiplicativeExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNewExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_decrement() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_increment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_none_indexExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_none_methodInvocation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_none_methodInvocation_question_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_none_methodInvocation_question_dot_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_none_methodInvocation_question_dot_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_none_methodInvocation_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_none_methodInvocation_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_none_propertyAccess() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrefixedIdentifier_noPrefix() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrefixedIdentifier_prefix() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_const() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_double() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_false() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_function_arguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_function_noArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_genericFunctionExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_hex() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_identifier() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_int() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_listLiteral() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_listLiteral_index() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_listLiteral_typed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_listLiteral_typed_genericComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_mapLiteral() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_mapLiteral_typed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_mapLiteral_typed_genericComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_new() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_null() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_parenthesized() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_string() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_string_multiline() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_string_raw() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_this() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_true() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRedirectingConstructorInvocation_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRedirectingConstructorInvocation_unnamed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_as_functionType_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_as_functionType_returnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_as_generic() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_as_nullable() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_as_simple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_as_simple_function() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_is() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_is_nullable() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_isNot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRethrowExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseShiftExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseShiftExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSimpleIdentifier1_normalIdentifier() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSimpleIdentifier_builtInIdentifier() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSimpleIdentifier_normalIdentifier() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_adjacent() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_endsWithInterpolation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_interpolated() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_encodedSpace() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_endsWithInterpolation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_escapedBackslash() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_escapedBackslash_raw() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_escapedEolMarker() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_escapedEolMarker_raw() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_escapedSpaceAndEolMarker() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_escapedSpaceAndEolMarker_raw() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_escapedTab() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_escapedTab_raw() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_quoteAfterInterpolation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_startsWithInterpolation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_twoSpaces() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_twoSpaces_raw() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_untrimmed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_quoteAfterInterpolation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_startsWithInterpolation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSuperConstructorInvocation_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSuperConstructorInvocation_unnamed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSymbolLiteral_builtInIdentifier() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSymbolLiteral_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSymbolLiteral_operator() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSymbolLiteral_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSymbolLiteral_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseThrowExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseThrowExpressionWithoutCascade() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_decrement_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_decrement_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_decrement_super_propertyAccess() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_decrement_super_withComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_increment_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_increment_super_index() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_increment_super_propertyAccess() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_minus_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_minus_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_not_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_not_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_tilda_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_tilda_super() : void {
        throw 'from mixin';
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpressionParserTest() {
    }
}

export namespace FormalParameterParserTest {
    export type Constructors = ParserTestCase.Constructors | 'FormalParameterParserTest';
    export type Interface = Omit<FormalParameterParserTest, Constructors>;
}
@DartClass
@With(FormalParameterParserTestMixin)
export class FormalParameterParserTest extends ParserTestCase implements FormalParameterParserTestMixin.Interface {
    @Abstract
    test_parseFormalParameter_covariant_final_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_final_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_final_positional() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_final_type_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_final_type_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_final_type_positional() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_type_function() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_type_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_type_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_type_positional() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_var_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_var_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_var_positional() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_final_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_final_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_final_positional() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_final_type_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_final_type_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_final_type_positional() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_type_function() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_type_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_type_named_noDefault() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_type_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_type_positional() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_type_positional_noDefault() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_var_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_var_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_var_positional() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_empty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_named_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_named_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_named_trailing_comma() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_normal_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_normal_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_normal_named_inFunctionType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_normal_positional() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_normal_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_normal_single_Function() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_normal_single_trailing_comma() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_positional_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_positional_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_positional_trailing_comma() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_prefixedType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_prefixedType_partial() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_prefixedType_partial2() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_const_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_const_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_final_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_final_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_function_nested() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_function_noNested() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_function_withDocComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_var() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_withDocComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_noType_covariant() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_noType_nullable() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_noType_typeParameterComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_noType_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_noType_typeParameters_nullable() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_type_nullable() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_type_typeParameterComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_type_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_type_typeParameters_nullable() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_void_nullable() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_void_typeParameterComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_void_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_void_typeParameters_nullable() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_withDocComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_simple_const_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_simple_const_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_simple_final_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_simple_final_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_simple_noName() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_simple_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_simple_noType_namedCovariant() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_simple_type() : void {
        throw 'from mixin';
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FormalParameterParserTest() {
    }
}

export namespace NonErrorParserTest {
    export type Constructors = ParserTestCase.Constructors | 'NonErrorParserTest';
    export type Interface = Omit<NonErrorParserTest, Constructors>;
}
@DartClass
export class NonErrorParserTest extends ParserTestCase {
    test_constFactory_external() : void {
        this.createParser('external const factory C();');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertNoErrors();
    }
    test_staticMethod_notParsingFunctionBodies() : void {
        ParserTestCase.parseFunctionBodies = false;
        try {
            this.createParser('class C { static void m() {} }');
            let unit : any = this.parser.parseCompilationUnit2();
            this.expectNotNullIfNoErrors(unit);
            this.listener.assertNoErrors();
        } finally {
            ParserTestCase.parseFunctionBodies = true;
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NonErrorParserTest() {
    }
}

export namespace RecoveryParserTest {
    export type Constructors = ParserTestCase.Constructors | 'RecoveryParserTest';
    export type Interface = Omit<RecoveryParserTest, Constructors>;
}
@DartClass
export class RecoveryParserTest extends ParserTestCase {
    test_additiveExpression_missing_LHS() : void {
        let expression : any = this.parseExpression("+ y",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        expect(expression.leftOperand.isSynthetic,isTrue);
    }
    test_additiveExpression_missing_LHS_RHS() : void {
        let expression : any = this.parseExpression("+",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        expect(expression.leftOperand.isSynthetic,isTrue);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_additiveExpression_missing_RHS() : void {
        let expression : any = this.parseExpression("x +",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_additiveExpression_missing_RHS_super() : void {
        let expression : any = this.parseExpression("super +",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_additiveExpression_precedence_multiplicative_left() : void {
        let expression : any = this.parseExpression("* +",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_additiveExpression_precedence_multiplicative_right() : void {
        let expression : any = this.parseExpression("+ *",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.rightOperand);
    }
    test_additiveExpression_super() : void {
        let expression : any = this.parseExpression("super + +",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_assignableSelector() : void {
        let expression : any = this.parseExpression("a.b[]",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        let index : any = expression.index;
        expect(index,new bare.createInstance(any,null));
        expect(index.isSynthetic,isTrue);
    }
    test_assignmentExpression_missing_compound1() : void {
        let expression : any = this.parseExpression("= y = 0",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        let syntheticExpression : any = expression.leftHandSide;
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,syntheticExpression);
        expect(syntheticExpression.isSynthetic,isTrue);
    }
    test_assignmentExpression_missing_compound2() : void {
        let expression : any = this.parseExpression("x = = 0",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        let syntheticExpression : any = (expression.rightHandSide as any).leftHandSide;
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,syntheticExpression);
        expect(syntheticExpression.isSynthetic,isTrue);
    }
    test_assignmentExpression_missing_compound3() : void {
        let expression : any = this.parseExpression("x = y =",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        let syntheticExpression : any = (expression.rightHandSide as any).rightHandSide;
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,syntheticExpression);
        expect(syntheticExpression.isSynthetic,isTrue);
    }
    test_assignmentExpression_missing_LHS() : void {
        let expression : any = this.parseExpression("= 0",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftHandSide);
        expect(expression.leftHandSide.isSynthetic,isTrue);
    }
    test_assignmentExpression_missing_RHS() : void {
        let expression : any = this.parseExpression("x =",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftHandSide);
        expect(expression.rightHandSide.isSynthetic,isTrue);
    }
    test_bitwiseAndExpression_missing_LHS() : void {
        let expression : any = this.parseExpression("& y",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        expect(expression.leftOperand.isSynthetic,isTrue);
    }
    test_bitwiseAndExpression_missing_LHS_RHS() : void {
        let expression : any = this.parseExpression("&",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        expect(expression.leftOperand.isSynthetic,isTrue);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_bitwiseAndExpression_missing_RHS() : void {
        let expression : any = this.parseExpression("x &",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_bitwiseAndExpression_missing_RHS_super() : void {
        let expression : any = this.parseExpression("super &",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_bitwiseAndExpression_precedence_equality_left() : void {
        let expression : any = this.parseExpression("== &&",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_bitwiseAndExpression_precedence_equality_right() : void {
        let expression : any = this.parseExpression("&& ==",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.rightOperand);
    }
    test_bitwiseAndExpression_super() : void {
        let expression : any = this.parseExpression("super &  &",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_bitwiseOrExpression_missing_LHS() : void {
        let expression : any = this.parseExpression("| y",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        expect(expression.leftOperand.isSynthetic,isTrue);
    }
    test_bitwiseOrExpression_missing_LHS_RHS() : void {
        let expression : any = this.parseExpression("|",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        expect(expression.leftOperand.isSynthetic,isTrue);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_bitwiseOrExpression_missing_RHS() : void {
        let expression : any = this.parseExpression("x |",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_bitwiseOrExpression_missing_RHS_super() : void {
        let expression : any = this.parseExpression("super |",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_bitwiseOrExpression_precedence_xor_left() : void {
        let expression : any = this.parseExpression("^ |",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_bitwiseOrExpression_precedence_xor_right() : void {
        let expression : any = this.parseExpression("| ^",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.rightOperand);
    }
    test_bitwiseOrExpression_super() : void {
        let expression : any = this.parseExpression("super |  |",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_bitwiseXorExpression_missing_LHS() : void {
        let expression : any = this.parseExpression("^ y",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        expect(expression.leftOperand.isSynthetic,isTrue);
    }
    test_bitwiseXorExpression_missing_LHS_RHS() : void {
        let expression : any = this.parseExpression("^",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        expect(expression.leftOperand.isSynthetic,isTrue);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_bitwiseXorExpression_missing_RHS() : void {
        let expression : any = this.parseExpression("x ^",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_bitwiseXorExpression_missing_RHS_super() : void {
        let expression : any = this.parseExpression("super ^",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_bitwiseXorExpression_precedence_and_left() : void {
        let expression : any = this.parseExpression("& ^",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_bitwiseXorExpression_precedence_and_right() : void {
        let expression : any = this.parseExpression("^ &",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.rightOperand);
    }
    test_bitwiseXorExpression_super() : void {
        let expression : any = this.parseExpression("super ^  ^",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_classTypeAlias_withBody() : void {
        this.parseCompilationUnit('class A {}\nclass B = Object with A {}',new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN));
    }
    test_conditionalExpression_missingElse() : void {
        this.createParser('x ? y :');
        let expression : any = this.parser.parseConditionalExpression();
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        expect(expression,new bare.createInstance(any,null));
        let conditionalExpression : any = expression;
        expect(conditionalExpression.elseExpression,new bare.createInstance(any,null));
        expect(conditionalExpression.elseExpression.isSynthetic,isTrue);
    }
    test_conditionalExpression_missingThen() : void {
        this.createParser('x ? : z');
        let expression : any = this.parser.parseConditionalExpression();
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        expect(expression,new bare.createInstance(any,null));
        let conditionalExpression : any = expression;
        expect(conditionalExpression.thenExpression,new bare.createInstance(any,null));
        expect(conditionalExpression.thenExpression.isSynthetic,isTrue);
    }
    test_declarationBeforeDirective() : void {
        let unit : any = this.parseCompilationUnit("class foo { } import 'bar.dart';",new core.DartList.literal(ParserErrorCode.DIRECTIVE_AFTER_DECLARATION));
        expect(unit.directives,hasLength(1));
        expect(unit.declarations,hasLength(1));
        let classDecl : any = unit.childEntities.first;
        expect(classDecl,isNotNull);
        expect(classDecl.name.name,'foo');
    }
    test_equalityExpression_missing_LHS() : void {
        let expression : any = this.parseExpression("== y",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        expect(expression.leftOperand.isSynthetic,isTrue);
    }
    test_equalityExpression_missing_LHS_RHS() : void {
        let expression : any = this.parseExpression("==",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        expect(expression.leftOperand.isSynthetic,isTrue);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_equalityExpression_missing_RHS() : void {
        let expression : any = this.parseExpression("x ==",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_equalityExpression_missing_RHS_super() : void {
        let expression : any = this.parseExpression("super ==",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_equalityExpression_precedence_relational_left() : void {
        let expression : any = this.parseExpression("is ==",new core.DartList.literal(ParserErrorCode.EXPECTED_TYPE_NAME,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },IsExpression,expression.leftOperand);
    }
    test_equalityExpression_precedence_relational_right() : void {
        let expression : any = this.parseExpression("== is",new core.DartList.literal(ParserErrorCode.EXPECTED_TYPE_NAME,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },IsExpression,expression.rightOperand);
    }
    test_equalityExpression_super() : void {
        let expression : any = this.parseExpression("super ==  ==",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.EQUALITY_CANNOT_BE_EQUALITY_OPERAND));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_expressionList_multiple_end() : void {
        this.createParser(', 2, 3, 4');
        let result : core.DartList<any> = this.parser.parseExpressionList();
        this.expectNotNullIfNoErrors(result);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        expect(result,hasLength(4));
        let syntheticExpression : any = result[0];
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,syntheticExpression);
        expect(syntheticExpression.isSynthetic,isTrue);
    }
    test_expressionList_multiple_middle() : void {
        this.createParser('1, 2, , 4');
        let result : core.DartList<any> = this.parser.parseExpressionList();
        this.expectNotNullIfNoErrors(result);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        expect(result,hasLength(4));
        let syntheticExpression : any = result[2];
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,syntheticExpression);
        expect(syntheticExpression.isSynthetic,isTrue);
    }
    test_expressionList_multiple_start() : void {
        this.createParser('1, 2, 3,');
        let result : core.DartList<any> = this.parser.parseExpressionList();
        this.expectNotNullIfNoErrors(result);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        expect(result,hasLength(4));
        let syntheticExpression : any = result[3];
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,syntheticExpression);
        expect(syntheticExpression.isSynthetic,isTrue);
    }
    test_functionExpression_in_ConstructorFieldInitializer() : void {
        let unit : any = this.parseCompilationUnit("class A { A() : a = (){}; var v; }",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.UNEXPECTED_TOKEN));
        let declaration : any = op(Op.INDEX,unit.declarations,0) as any;
        let members : any = declaration.members;
        let fieldDecl : any = op(Op.INDEX,members,1);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },FieldDeclaration,fieldDecl);
        let vars : any = (fieldDecl as any).fields.variables;
        expect(vars,hasLength(1));
        expect(op(Op.INDEX,vars,0).name.name,"v");
    }
    test_functionExpression_named() : void {
        this.parseExpression("m(f() => 0);",new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN));
    }
    test_importDirectivePartial_as() : void {
        let unit : any = this.parseCompilationUnit("import 'b.dart' d as b;",new core.DartList.literal(ParserErrorCode.UNEXPECTED_TOKEN));
        let importDirective : any = unit.childEntities.first;
        expect(importDirective.asKeyword,isNotNull);
        expect(unit.directives,hasLength(1));
        expect(unit.declarations,hasLength(0));
    }
    test_importDirectivePartial_hide() : void {
        let unit : any = this.parseCompilationUnit("import 'b.dart' d hide foo;",new core.DartList.literal(ParserErrorCode.UNEXPECTED_TOKEN));
        let importDirective : any = unit.childEntities.first;
        expect(importDirective.combinators,hasLength(1));
        expect(unit.directives,hasLength(1));
        expect(unit.declarations,hasLength(0));
    }
    test_importDirectivePartial_show() : void {
        let unit : any = this.parseCompilationUnit("import 'b.dart' d show foo;",new core.DartList.literal(ParserErrorCode.UNEXPECTED_TOKEN));
        let importDirective : any = unit.childEntities.first;
        expect(importDirective.combinators,hasLength(1));
        expect(unit.directives,hasLength(1));
        expect(unit.declarations,hasLength(0));
    }
    test_incomplete_conditionalExpression() : void {
        this.parseExpression("x ? 0",new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.MISSING_IDENTIFIER));
    }
    test_incomplete_constructorInitializers_empty() : void {
        this.createParser('C() : {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_INITIALIZER));
    }
    test_incomplete_constructorInitializers_missingEquals() : void {
        this.createParser('C() : x(3) {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_ASSIGNMENT_IN_INITIALIZER));
        expect(member,new bare.createInstance(any,null));
        let initializers : any = (member as any).initializers;
        expect(initializers,hasLength(1));
        let initializer : any = op(Op.INDEX,initializers,0);
        expect(initializer,new bare.createInstance(any,null));
        let expression : any = (initializer as any).expression;
        expect(expression,isNotNull);
        expect(expression,new bare.createInstance(any,null));
    }
    test_incomplete_constructorInitializers_variable() : void {
        this.createParser('C() : x {}');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.MISSING_ASSIGNMENT_IN_INITIALIZER));
    }
    test_incomplete_returnType() : void {
        this.parseCompilationUnit('Map<Symbol, convertStringToSymbolMap(Map<String, dynamic> map) {\n  if (map == null) return null;\n  Map<Symbol, dynamic> result = new Map<Symbol, dynamic>();\n  map.forEach((name, value) {\n    result[new Symbol(name)] = value;\n  });\n  return result;\n}');
    }
    test_incomplete_topLevelFunction() : void {
        this.parseCompilationUnit("foo();",new core.DartList.literal(ParserErrorCode.MISSING_FUNCTION_BODY));
    }
    test_incomplete_topLevelVariable() : void {
        let unit : any = this.parseCompilationUnit("String",new core.DartList.literal(ParserErrorCode.EXPECTED_EXECUTABLE));
        let declarations : any = unit.declarations;
        expect(declarations,hasLength(1));
        let member : any = op(Op.INDEX,declarations,0);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },TopLevelVariableDeclaration,member);
        let variables : any = (member as any).variables.variables;
        expect(variables,hasLength(1));
        let name : any = op(Op.INDEX,variables,0).name;
        expect(name.isSynthetic,isTrue);
    }
    test_incomplete_topLevelVariable_const() : void {
        let unit : any = this.parseCompilationUnit("const ",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.EXPECTED_TOKEN));
        let declarations : any = unit.declarations;
        expect(declarations,hasLength(1));
        let member : any = op(Op.INDEX,declarations,0);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },TopLevelVariableDeclaration,member);
        let variables : any = (member as any).variables.variables;
        expect(variables,hasLength(1));
        let name : any = op(Op.INDEX,variables,0).name;
        expect(name.isSynthetic,isTrue);
    }
    test_incomplete_topLevelVariable_final() : void {
        let unit : any = this.parseCompilationUnit("final ",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.EXPECTED_TOKEN));
        let declarations : any = unit.declarations;
        expect(declarations,hasLength(1));
        let member : any = op(Op.INDEX,declarations,0);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },TopLevelVariableDeclaration,member);
        let variables : any = (member as any).variables.variables;
        expect(variables,hasLength(1));
        let name : any = op(Op.INDEX,variables,0).name;
        expect(name.isSynthetic,isTrue);
    }
    test_incomplete_topLevelVariable_var() : void {
        let unit : any = this.parseCompilationUnit("var ",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.EXPECTED_TOKEN));
        let declarations : any = unit.declarations;
        expect(declarations,hasLength(1));
        let member : any = op(Op.INDEX,declarations,0);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },TopLevelVariableDeclaration,member);
        let variables : any = (member as any).variables.variables;
        expect(variables,hasLength(1));
        let name : any = op(Op.INDEX,variables,0).name;
        expect(name.isSynthetic,isTrue);
    }
    test_incompleteField_const() : void {
        let unit : any = this.parseCompilationUnit('class C {\n  const\n}',new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.EXPECTED_TOKEN));
        let declarations : any = unit.declarations;
        expect(declarations,hasLength(1));
        let unitMember : any = op(Op.INDEX,declarations,0);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },ClassDeclaration,unitMember);
        let members : any = (unitMember as any).members;
        expect(members,hasLength(1));
        let classMember : any = op(Op.INDEX,members,0);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },FieldDeclaration,classMember);
        let fieldList : any = (classMember as any).fields;
        expect(fieldList.keyword.keyword,Keyword.CONST);
        let fields : any = fieldList.variables;
        expect(fields,hasLength(1));
        let field : any = op(Op.INDEX,fields,0);
        expect(field.name.isSynthetic,isTrue);
    }
    test_incompleteField_final() : void {
        let unit : any = this.parseCompilationUnit('class C {\n  final\n}',new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.EXPECTED_TOKEN));
        let declarations : any = unit.declarations;
        expect(declarations,hasLength(1));
        let unitMember : any = op(Op.INDEX,declarations,0);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },ClassDeclaration,unitMember);
        let members : any = (unitMember as any).members;
        expect(members,hasLength(1));
        let classMember : any = op(Op.INDEX,members,0);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },FieldDeclaration,classMember);
        let fieldList : any = (classMember as any).fields;
        expect(fieldList.keyword.keyword,Keyword.FINAL);
        let fields : any = fieldList.variables;
        expect(fields,hasLength(1));
        let field : any = op(Op.INDEX,fields,0);
        expect(field.name.isSynthetic,isTrue);
    }
    test_incompleteField_var() : void {
        let unit : any = this.parseCompilationUnit('class C {\n  var\n}',new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.EXPECTED_TOKEN));
        let declarations : any = unit.declarations;
        expect(declarations,hasLength(1));
        let unitMember : any = op(Op.INDEX,declarations,0);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },ClassDeclaration,unitMember);
        let members : any = (unitMember as any).members;
        expect(members,hasLength(1));
        let classMember : any = op(Op.INDEX,members,0);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },FieldDeclaration,classMember);
        let fieldList : any = (classMember as any).fields;
        expect(fieldList.keyword.keyword,Keyword.VAR);
        let fields : any = fieldList.variables;
        expect(fields,hasLength(1));
        let field : any = op(Op.INDEX,fields,0);
        expect(field.name.isSynthetic,isTrue);
    }
    test_incompleteForEach() : void {
        let statement : any = this.parseStatement('for (String item i) {}');
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.EXPECTED_TOKEN));
        expect(statement,new bare.createInstance(any,null));
        expect(statement.toSource(),'for (String item; i;) {}');
        expect(statement.leftSeparator,isNotNull);
        expect(statement.leftSeparator.type,TokenType.SEMICOLON);
        expect(statement.rightSeparator,isNotNull);
        expect(statement.rightSeparator.type,TokenType.SEMICOLON);
    }
    test_incompleteLocalVariable_atTheEndOfBlock() : void {
        let statement : any = this.parseStatement('String v }');
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN));
        expect(statement,new bare.createInstance(any,null));
        expect(statement.toSource(),'String v;');
    }
    test_incompleteLocalVariable_beforeIdentifier() : void {
        let statement : any = this.parseStatement('String v String v2;');
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN));
        expect(statement,new bare.createInstance(any,null));
        expect(statement.toSource(),'String v;');
    }
    test_incompleteLocalVariable_beforeKeyword() : void {
        let statement : any = this.parseStatement('String v if (true) {}');
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN));
        expect(statement,new bare.createInstance(any,null));
        expect(statement.toSource(),'String v;');
    }
    test_incompleteLocalVariable_beforeNextBlock() : void {
        let statement : any = this.parseStatement('String v {}');
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN));
        expect(statement,new bare.createInstance(any,null));
        expect(statement.toSource(),'String v;');
    }
    test_incompleteLocalVariable_parameterizedType() : void {
        let statement : any = this.parseStatement('List<String> v {}');
        this.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN));
        expect(statement,new bare.createInstance(any,null));
        expect(statement.toSource(),'List<String> v;');
    }
    test_incompleteTypeArguments_field() : void {
        let unit : any = this.parseCompilationUnit('class C {\n  final List<int f;\n}',new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN));
        let declarations : core.DartList<any> = unit.declarations;
        expect(declarations,hasLength(1));
        let classDecl : any = declarations[0] as any;
        let members : core.DartList<any> = classDecl.members;
        expect(members,hasLength(1));
        let fieldDecl : any = members[0] as any;
        let fieldList : any = fieldDecl.fields;
        let fields : core.DartList<any> = fieldList.variables;
        expect(fields,hasLength(1));
        let field : any = fields[0];
        expect(field.name.name,'f');
        let typeArguments : any = (fieldList.type as any).typeArguments;
        expect(typeArguments.arguments,hasLength(1));
        let token : any = typeArguments.endToken;
        expect(token.type,TokenType.GT);
        expect(token.isSynthetic,isTrue);
    }
    test_incompleteTypeParameters() : void {
        let unit : any = this.parseCompilationUnit('class C<K {\n}',new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN));
        let declarations : core.DartList<any> = unit.declarations;
        expect(declarations,hasLength(1));
        let classDecl : any = declarations[0] as any;
        let typeParameters : any = classDecl.typeParameters;
        expect(typeParameters.typeParameters,hasLength(1));
        let token : any = typeParameters.endToken;
        expect(token.type,TokenType.GT);
        expect(token.isSynthetic,isTrue);
    }
    test_invalidFunctionBodyModifier() : void {
        this.parseCompilationUnit("f() sync {}",new core.DartList.literal(ParserErrorCode.MISSING_STAR_AFTER_SYNC));
    }
    test_isExpression_noType() : void {
        let unit : any = this.parseCompilationUnit("class Bar<T extends Foo> {m(x){if (x is ) return;if (x is !)}}",new core.DartList.literal(ParserErrorCode.EXPECTED_TYPE_NAME,ParserErrorCode.EXPECTED_TYPE_NAME,ParserErrorCode.MISSING_STATEMENT));
        let declaration : any = op(Op.INDEX,unit.declarations,0) as any;
        let method : any = op(Op.INDEX,declaration.members,0) as any;
        let body : any = method.body as any;
        let ifStatement : any = op(Op.INDEX,body.block.statements,1) as any;
        let expression : any = ifStatement.condition as any;
        expect(expression.expression,isNotNull);
        expect(expression.isOperator,isNotNull);
        expect(expression.notOperator,isNotNull);
        let type : any = expression.type;
        expect(type,isNotNull);
        expect(is(type, any) && type.name.isSynthetic,isTrue);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },EmptyStatement,ifStatement.thenStatement);
    }
    test_keywordInPlaceOfIdentifier() : void {
        this.parseCompilationUnit("do() {}",new core.DartList.literal(ParserErrorCode.EXPECTED_EXECUTABLE,ParserErrorCode.UNEXPECTED_TOKEN));
    }
    test_logicalAndExpression_missing_LHS() : void {
        let expression : any = this.parseExpression("&& y",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        expect(expression.leftOperand.isSynthetic,isTrue);
    }
    test_logicalAndExpression_missing_LHS_RHS() : void {
        let expression : any = this.parseExpression("&&",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        expect(expression.leftOperand.isSynthetic,isTrue);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_logicalAndExpression_missing_RHS() : void {
        let expression : any = this.parseExpression("x &&",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_logicalAndExpression_precedence_bitwiseOr_left() : void {
        let expression : any = this.parseExpression("| &&",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_logicalAndExpression_precedence_bitwiseOr_right() : void {
        let expression : any = this.parseExpression("&& |",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.rightOperand);
    }
    test_logicalOrExpression_missing_LHS() : void {
        let expression : any = this.parseExpression("|| y",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        expect(expression.leftOperand.isSynthetic,isTrue);
    }
    test_logicalOrExpression_missing_LHS_RHS() : void {
        let expression : any = this.parseExpression("||",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        expect(expression.leftOperand.isSynthetic,isTrue);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_logicalOrExpression_missing_RHS() : void {
        let expression : any = this.parseExpression("x ||",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_logicalOrExpression_precedence_logicalAnd_left() : void {
        let expression : any = this.parseExpression("&& ||",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_logicalOrExpression_precedence_logicalAnd_right() : void {
        let expression : any = this.parseExpression("|| &&",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.rightOperand);
    }
    test_missing_commaInArgumentList() : void {
        this.parseExpression("f(x: 1 y: 2)",new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN));
    }
    test_missingComma_beforeNamedArgument() : void {
        this.createParser('(a b: c)');
        let argumentList : any = this.parser.parseArgumentList();
        this.expectNotNullIfNoErrors(argumentList);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN));
        expect(argumentList.arguments,hasLength(2));
    }
    test_missingGet() : void {
        let unit : any = this.parseCompilationUnit('class C {\n  int length {}\n  void foo() {}\n}',new core.DartList.literal(ParserErrorCode.MISSING_GET));
        expect(unit,isNotNull);
        let classDeclaration : any = op(Op.INDEX,unit.declarations,0) as any;
        let members : any = classDeclaration.members;
        expect(members,hasLength(2));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },MethodDeclaration,op(Op.INDEX,members,0));
        let member : any = op(Op.INDEX,members,1);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },MethodDeclaration,member);
        expect((member as any).name.name,"foo");
    }
    test_missingIdentifier_afterAnnotation() : void {
        this.createParser('@override }');
        let member : any = this.parser.parseClassMember('C');
        this.expectNotNullIfNoErrors(member);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_CLASS_MEMBER));
        expect(member,new bare.createInstance(any,null));
        let method : any = member;
        expect(method.documentationComment,isNull);
        let metadata : any = method.metadata;
        expect(metadata,hasLength(1));
        expect(op(Op.INDEX,metadata,0).name.name,"override");
    }
    test_missingSemicolon_varialeDeclarationList() : void {
        var verify : (member : any,expectedTypeName : string,expectedName : string,expectedSemicolon : string) => void = (member : any,expectedTypeName : string,expectedName : string,expectedSemicolon : string) : void =>  {
            expect(member,new bare.createInstance(any,null));
            let declaration : any = member;
            let variableList : any = declaration.variables;
            expect(variableList,isNotNull);
            let variables : any = variableList.variables;
            expect(variables,hasLength(1));
            let variable : any = op(Op.INDEX,variables,0);
            expect(variableList.type.toString(),expectedTypeName);
            expect(variable.name.name,expectedName);
            expect(declaration.semicolon.lexeme,expectedSemicolon);
        };
        let unit : any = this.parseCompilationUnit('String n x = "";',new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.MISSING_CONST_FINAL_VAR_OR_TYPE));
        expect(unit,isNotNull);
        let declarations : any = unit.declarations;
        expect(declarations,hasLength(2));
        verify(op(Op.INDEX,declarations,0),'String','n','');
        verify(op(Op.INDEX,declarations,1),'null','x',';');
    }
    test_multiplicativeExpression_missing_LHS() : void {
        let expression : any = this.parseExpression("* y",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        expect(expression.leftOperand.isSynthetic,isTrue);
    }
    test_multiplicativeExpression_missing_LHS_RHS() : void {
        let expression : any = this.parseExpression("*",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        expect(expression.leftOperand.isSynthetic,isTrue);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_multiplicativeExpression_missing_RHS() : void {
        let expression : any = this.parseExpression("x *",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_multiplicativeExpression_missing_RHS_super() : void {
        let expression : any = this.parseExpression("super *",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_multiplicativeExpression_precedence_unary_left() : void {
        let expression : any = this.parseExpression("-x *",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },PrefixExpression,expression.leftOperand);
    }
    test_multiplicativeExpression_precedence_unary_right() : void {
        let expression : any = this.parseExpression("* -y",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },PrefixExpression,expression.rightOperand);
    }
    test_multiplicativeExpression_super() : void {
        let expression : any = this.parseExpression("super ==  ==",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.EQUALITY_CANNOT_BE_EQUALITY_OPERAND));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_nonStringLiteralUri_import() : void {
        this.parseCompilationUnit("import dart:io; class C {}",new core.DartList.literal(ParserErrorCode.NON_STRING_LITERAL_AS_URI));
    }
    test_prefixExpression_missing_operand_minus() : void {
        let expression : any = this.parseExpression("-",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.operand);
        expect(expression.operand.isSynthetic,isTrue);
        expect(expression.operator.type,TokenType.MINUS);
    }
    test_primaryExpression_argumentDefinitionTest() : void {
        let expression : any = this.parsePrimaryExpression('?a');
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.UNEXPECTED_TOKEN));
        expect(expression,new bare.createInstance(any,null));
    }
    test_relationalExpression_missing_LHS() : void {
        let expression : any = this.parseExpression("is y",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.expression);
        expect(expression.expression.isSynthetic,isTrue);
    }
    test_relationalExpression_missing_LHS_RHS() : void {
        let expression : any = this.parseExpression("is",new core.DartList.literal(ParserErrorCode.EXPECTED_TYPE_NAME,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.expression);
        expect(expression.expression.isSynthetic,isTrue);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },TypeName,expression.type);
        expect(expression.type.isSynthetic,isTrue);
    }
    test_relationalExpression_missing_RHS() : void {
        let expression : any = this.parseExpression("x is",new core.DartList.literal(ParserErrorCode.EXPECTED_TYPE_NAME));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },TypeName,expression.type);
        expect(expression.type.isSynthetic,isTrue);
    }
    test_relationalExpression_precedence_shift_right() : void {
        let expression : any = this.parseExpression("<< is",new core.DartList.literal(ParserErrorCode.EXPECTED_TYPE_NAME,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.expression);
    }
    test_shiftExpression_missing_LHS() : void {
        let expression : any = this.parseExpression("<< y",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        expect(expression.leftOperand.isSynthetic,isTrue);
    }
    test_shiftExpression_missing_LHS_RHS() : void {
        let expression : any = this.parseExpression("<<",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.leftOperand);
        expect(expression.leftOperand.isSynthetic,isTrue);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_shiftExpression_missing_RHS() : void {
        let expression : any = this.parseExpression("x <<",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_shiftExpression_missing_RHS_super() : void {
        let expression : any = this.parseExpression("super <<",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,expression.rightOperand);
        expect(expression.rightOperand.isSynthetic,isTrue);
    }
    test_shiftExpression_precedence_unary_left() : void {
        let expression : any = this.parseExpression("+ <<",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_shiftExpression_precedence_unary_right() : void {
        let expression : any = this.parseExpression("<< +",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.rightOperand);
    }
    test_shiftExpression_super() : void {
        let expression : any = this.parseExpression("super << <<",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_IDENTIFIER));
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },BinaryExpression,expression.leftOperand);
    }
    test_typedef_eof() : void {
        let unit : any = this.parseCompilationUnit("typedef n",new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.MISSING_TYPEDEF_PARAMETERS));
        let declarations : any = unit.declarations;
        expect(declarations,hasLength(1));
        let member : any = op(Op.INDEX,declarations,0);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },FunctionTypeAlias,member);
    }
    test_unaryPlus() : void {
        this.parseExpression("+2",new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RecoveryParserTest() {
    }
}

export namespace SimpleParserTest {
    export type Constructors = ParserTestCase.Constructors | 'SimpleParserTest';
    export type Interface = Omit<SimpleParserTest, Constructors>;
}
@DartClass
export class SimpleParserTest extends ParserTestCase {
    test_computeStringValue_emptyInterpolationPrefix() : void {
        expect(this._computeStringValue("'''",true,false),"");
    }
    test_computeStringValue_escape_b() : void {
        expect(this._computeStringValue("'\b'",true,true),"");
    }
    test_computeStringValue_escape_f() : void {
        expect(this._computeStringValue("'\f'",true,true),"");
    }
    test_computeStringValue_escape_n() : void {
        expect(this._computeStringValue("'\n'",true,true),"\n");
    }
    test_computeStringValue_escape_notSpecial() : void {
        expect(this._computeStringValue("'\:'",true,true),":");
    }
    test_computeStringValue_escape_r() : void {
        expect(this._computeStringValue("'\r'",true,true),"");
    }
    test_computeStringValue_escape_t() : void {
        expect(this._computeStringValue("'\t'",true,true),"	");
    }
    test_computeStringValue_escape_u_fixed() : void {
        expect(this._computeStringValue("'\u4321'",true,true),"䌡");
    }
    test_computeStringValue_escape_u_variable() : void {
        expect(this._computeStringValue("'\u{123}'",true,true),"ģ");
    }
    test_computeStringValue_escape_v() : void {
        expect(this._computeStringValue("'\v'",true,true),"");
    }
    test_computeStringValue_escape_x() : void {
        expect(this._computeStringValue("'\xFF'",true,true),"ÿ");
    }
    test_computeStringValue_noEscape_single() : void {
        expect(this._computeStringValue("'text'",true,true),"text");
    }
    test_computeStringValue_noEscape_triple() : void {
        expect(this._computeStringValue("'''text'''",true,true),"text");
    }
    test_computeStringValue_raw_single() : void {
        expect(this._computeStringValue("r'text'",true,true),"text");
    }
    test_computeStringValue_raw_triple() : void {
        expect(this._computeStringValue("r'''text'''",true,true),"text");
    }
    test_computeStringValue_raw_withEscape() : void {
        expect(this._computeStringValue("r'two\nlines'",true,true),"two\nlines");
    }
    test_computeStringValue_triple_internalQuote_first_empty() : void {
        expect(this._computeStringValue("''''",true,false),"'");
    }
    test_computeStringValue_triple_internalQuote_first_nonEmpty() : void {
        expect(this._computeStringValue("''''text",true,false),"'text");
    }
    test_computeStringValue_triple_internalQuote_last_empty() : void {
        expect(this._computeStringValue("'''",false,true),"");
    }
    test_computeStringValue_triple_internalQuote_last_nonEmpty() : void {
        expect(this._computeStringValue("text'''",false,true),"text");
    }
    test_createSyntheticIdentifier() : void {
        this.createParser('');
        let identifier : any = this.parser.createSyntheticIdentifier();
        this.expectNotNullIfNoErrors(identifier);
        expect(identifier.isSynthetic,isTrue);
    }
    test_createSyntheticStringLiteral() : void {
        this.createParser('');
        let literal : any = this.parser.createSyntheticStringLiteral();
        this.expectNotNullIfNoErrors(literal);
        expect(literal.isSynthetic,isTrue);
    }
    test_isFunctionDeclaration_nameButNoReturn_block() : void {
        expect(this._isFunctionDeclaration("f() {}"),isTrue);
    }
    test_isFunctionDeclaration_nameButNoReturn_expression() : void {
        expect(this._isFunctionDeclaration("f() => e"),isTrue);
    }
    test_isFunctionDeclaration_nameButNoReturn_typeParameters_block() : void {
        expect(this._isFunctionDeclaration("f<E>() {}"),isTrue);
    }
    test_isFunctionDeclaration_nameButNoReturn_typeParameters_expression() : void {
        expect(this._isFunctionDeclaration("f<E>() => e"),isTrue);
    }
    test_isFunctionDeclaration_normalReturn_block() : void {
        expect(this._isFunctionDeclaration("C f() {}"),isTrue);
    }
    test_isFunctionDeclaration_normalReturn_expression() : void {
        expect(this._isFunctionDeclaration("C f() => e"),isTrue);
    }
    test_isFunctionDeclaration_normalReturn_typeParameters_block() : void {
        expect(this._isFunctionDeclaration("C f<E>() {}"),isTrue);
    }
    test_isFunctionDeclaration_normalReturn_typeParameters_expression() : void {
        expect(this._isFunctionDeclaration("C f<E>() => e"),isTrue);
    }
    test_isFunctionDeclaration_voidReturn_block() : void {
        expect(this._isFunctionDeclaration("void f() {}"),isTrue);
    }
    test_isFunctionDeclaration_voidReturn_expression() : void {
        expect(this._isFunctionDeclaration("void f() => e"),isTrue);
    }
    test_isFunctionDeclaration_voidReturn_typeParameters_block() : void {
        expect(this._isFunctionDeclaration("void f<E>() {}"),isTrue);
    }
    test_isFunctionDeclaration_voidReturn_typeParameters_expression() : void {
        expect(this._isFunctionDeclaration("void f<E>() => e"),isTrue);
    }
    test_isFunctionExpression_false_noBody() : void {
        expect(this._isFunctionExpression("f();"),isFalse);
    }
    test_isFunctionExpression_false_notParameters() : void {
        expect(this._isFunctionExpression("(a + b) {"),isFalse);
    }
    test_isFunctionExpression_noParameters_block() : void {
        expect(this._isFunctionExpression("() {}"),isTrue);
    }
    test_isFunctionExpression_noParameters_expression() : void {
        expect(this._isFunctionExpression("() => e"),isTrue);
    }
    test_isFunctionExpression_noParameters_typeParameters_block() : void {
        expect(this._isFunctionExpression("<E>() {}"),isTrue);
    }
    test_isFunctionExpression_noParameters_typeParameters_expression() : void {
        expect(this._isFunctionExpression("<E>() => e"),isTrue);
    }
    test_isFunctionExpression_parameter_final() : void {
        expect(this._isFunctionExpression("(final a) {}"),isTrue);
        expect(this._isFunctionExpression("(final a, b) {}"),isTrue);
        expect(this._isFunctionExpression("(final a, final b) {}"),isTrue);
    }
    test_isFunctionExpression_parameter_final_typed() : void {
        expect(this._isFunctionExpression("(final int a) {}"),isTrue);
        expect(this._isFunctionExpression("(final prefix.List a) {}"),isTrue);
        expect(this._isFunctionExpression("(final List<int> a) {}"),isTrue);
        expect(this._isFunctionExpression("(final prefix.List<int> a) {}"),isTrue);
    }
    test_isFunctionExpression_parameter_multiple() : void {
        expect(this._isFunctionExpression("(a, b) {}"),isTrue);
    }
    test_isFunctionExpression_parameter_named() : void {
        expect(this._isFunctionExpression("({a}) {}"),isTrue);
    }
    test_isFunctionExpression_parameter_optional() : void {
        expect(this._isFunctionExpression("([a]) {}"),isTrue);
    }
    test_isFunctionExpression_parameter_single() : void {
        expect(this._isFunctionExpression("(a) {}"),isTrue);
    }
    test_isFunctionExpression_parameter_typed() : void {
        expect(this._isFunctionExpression("(int a, int b) {}"),isTrue);
    }
    test_isInitializedVariableDeclaration_assignment() : void {
        expect(this._isInitializedVariableDeclaration("a = null;"),isFalse);
    }
    test_isInitializedVariableDeclaration_comparison() : void {
        expect(this._isInitializedVariableDeclaration("a < 0;"),isFalse);
    }
    test_isInitializedVariableDeclaration_conditional() : void {
        expect(this._isInitializedVariableDeclaration("a == null ? init() : update();"),isFalse);
    }
    test_isInitializedVariableDeclaration_const_noType_initialized() : void {
        expect(this._isInitializedVariableDeclaration("const a = 0;"),isTrue);
    }
    test_isInitializedVariableDeclaration_const_noType_uninitialized() : void {
        expect(this._isInitializedVariableDeclaration("const a;"),isTrue);
    }
    test_isInitializedVariableDeclaration_const_simpleType_uninitialized() : void {
        expect(this._isInitializedVariableDeclaration("const A a;"),isTrue);
    }
    test_isInitializedVariableDeclaration_final_noType_initialized() : void {
        expect(this._isInitializedVariableDeclaration("final a = 0;"),isTrue);
    }
    test_isInitializedVariableDeclaration_final_noType_uninitialized() : void {
        expect(this._isInitializedVariableDeclaration("final a;"),isTrue);
    }
    test_isInitializedVariableDeclaration_final_simpleType_initialized() : void {
        expect(this._isInitializedVariableDeclaration("final A a = 0;"),isTrue);
    }
    test_isInitializedVariableDeclaration_functionDeclaration_typed() : void {
        expect(this._isInitializedVariableDeclaration("A f() {};"),isFalse);
    }
    test_isInitializedVariableDeclaration_functionDeclaration_untyped() : void {
        expect(this._isInitializedVariableDeclaration("f() {};"),isFalse);
    }
    test_isInitializedVariableDeclaration_noType_initialized() : void {
        expect(this._isInitializedVariableDeclaration("var a = 0;"),isTrue);
    }
    test_isInitializedVariableDeclaration_noType_uninitialized() : void {
        expect(this._isInitializedVariableDeclaration("var a;"),isTrue);
    }
    test_isInitializedVariableDeclaration_parameterizedType_initialized() : void {
        expect(this._isInitializedVariableDeclaration("List<int> a = null;"),isTrue);
    }
    test_isInitializedVariableDeclaration_parameterizedType_uninitialized() : void {
        expect(this._isInitializedVariableDeclaration("List<int> a;"),isTrue);
    }
    test_isInitializedVariableDeclaration_simpleType_initialized() : void {
        expect(this._isInitializedVariableDeclaration("A a = 0;"),isTrue);
    }
    test_isInitializedVariableDeclaration_simpleType_uninitialized() : void {
        expect(this._isInitializedVariableDeclaration("A a;"),isTrue);
    }
    test_isSwitchMember_case_labeled() : void {
        expect(this._isSwitchMember("l1: l2: case"),isTrue);
    }
    test_isSwitchMember_case_unlabeled() : void {
        expect(this._isSwitchMember("case"),isTrue);
    }
    test_isSwitchMember_default_labeled() : void {
        expect(this._isSwitchMember("l1: l2: default"),isTrue);
    }
    test_isSwitchMember_default_unlabeled() : void {
        expect(this._isSwitchMember("default"),isTrue);
    }
    test_isSwitchMember_false() : void {
        expect(this._isSwitchMember("break;"),isFalse);
    }
    test_parseAnnotation_n1() : void {
        this.createParser('@A');
        let annotation : any = this.parser.parseAnnotation();
        this.expectNotNullIfNoErrors(annotation);
        this.listener.assertNoErrors();
        expect(annotation.atSign,isNotNull);
        expect(annotation.name,isNotNull);
        expect(annotation.period,isNull);
        expect(annotation.constructorName,isNull);
        expect(annotation.arguments,isNull);
    }
    test_parseAnnotation_n1_a() : void {
        this.createParser('@A(x,y)');
        let annotation : any = this.parser.parseAnnotation();
        this.expectNotNullIfNoErrors(annotation);
        this.listener.assertNoErrors();
        expect(annotation.atSign,isNotNull);
        expect(annotation.name,isNotNull);
        expect(annotation.period,isNull);
        expect(annotation.constructorName,isNull);
        expect(annotation.arguments,isNotNull);
    }
    test_parseAnnotation_n2() : void {
        this.createParser('@A.B');
        let annotation : any = this.parser.parseAnnotation();
        this.expectNotNullIfNoErrors(annotation);
        this.listener.assertNoErrors();
        expect(annotation.atSign,isNotNull);
        expect(annotation.name,isNotNull);
        expect(annotation.period,isNull);
        expect(annotation.constructorName,isNull);
        expect(annotation.arguments,isNull);
    }
    test_parseAnnotation_n2_a() : void {
        this.createParser('@A.B(x,y)');
        let annotation : any = this.parser.parseAnnotation();
        this.expectNotNullIfNoErrors(annotation);
        this.listener.assertNoErrors();
        expect(annotation.atSign,isNotNull);
        expect(annotation.name,isNotNull);
        expect(annotation.period,isNull);
        expect(annotation.constructorName,isNull);
        expect(annotation.arguments,isNotNull);
    }
    test_parseAnnotation_n3() : void {
        this.createParser('@A.B.C');
        let annotation : any = this.parser.parseAnnotation();
        this.expectNotNullIfNoErrors(annotation);
        this.listener.assertNoErrors();
        expect(annotation.atSign,isNotNull);
        expect(annotation.name,isNotNull);
        expect(annotation.period,isNotNull);
        expect(annotation.constructorName,isNotNull);
        expect(annotation.arguments,isNull);
    }
    test_parseAnnotation_n3_a() : void {
        this.createParser('@A.B.C(x,y)');
        let annotation : any = this.parser.parseAnnotation();
        this.expectNotNullIfNoErrors(annotation);
        this.listener.assertNoErrors();
        expect(annotation.atSign,isNotNull);
        expect(annotation.name,isNotNull);
        expect(annotation.period,isNotNull);
        expect(annotation.constructorName,isNotNull);
        expect(annotation.arguments,isNotNull);
    }
    test_parseArgument_named() : void {
        this.createParser('n: x');
        let expression : any = this.parser.parseArgument();
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertNoErrors();
        expect(expression,new bare.createInstance(any,null));
        let namedExpression : any = expression;
        let name : any = namedExpression.name;
        expect(name,isNotNull);
        expect(name.label,isNotNull);
        expect(name.colon,isNotNull);
        expect(namedExpression.expression,isNotNull);
    }
    test_parseArgument_unnamed() : void {
        let lexeme : string = "x";
        this.createParser(lexeme);
        let expression : any = this.parser.parseArgument();
        this.expectNotNullIfNoErrors(expression);
        this.listener.assertNoErrors();
        let identifier = expression as any;
        expect(identifier.name,lexeme);
    }
    test_parseArgumentList_empty() : void {
        this.createParser('()');
        let argumentList : any = this.parser.parseArgumentList();
        this.expectNotNullIfNoErrors(argumentList);
        this.listener.assertNoErrors();
        let arguments : any = argumentList.arguments;
        expect(arguments,hasLength(0));
    }
    test_parseArgumentList_mixed() : void {
        this.createParser('(w, x, y: y, z: z)');
        let argumentList : any = this.parser.parseArgumentList();
        this.expectNotNullIfNoErrors(argumentList);
        this.listener.assertNoErrors();
        let arguments : any = argumentList.arguments;
        expect(arguments,hasLength(4));
    }
    test_parseArgumentList_noNamed() : void {
        this.createParser('(x, y, z)');
        let argumentList : any = this.parser.parseArgumentList();
        this.expectNotNullIfNoErrors(argumentList);
        this.listener.assertNoErrors();
        let arguments : any = argumentList.arguments;
        expect(arguments,hasLength(3));
    }
    test_parseArgumentList_onlyNamed() : void {
        this.createParser('(x: x, y: y)');
        let argumentList : any = this.parser.parseArgumentList();
        this.expectNotNullIfNoErrors(argumentList);
        this.listener.assertNoErrors();
        let arguments : any = argumentList.arguments;
        expect(arguments,hasLength(2));
    }
    test_parseArgumentList_trailing_comma() : void {
        this.createParser('(x, y, z,)');
        let argumentList : any = this.parser.parseArgumentList();
        this.expectNotNullIfNoErrors(argumentList);
        this.listener.assertNoErrors();
        let arguments : any = argumentList.arguments;
        expect(arguments,hasLength(3));
    }
    test_parseCombinator_hide() : void {
        this.createParser('hide a;');
        let combinator : any = this.parser.parseCombinator();
        this.expectNotNullIfNoErrors(combinator);
        this.listener.assertNoErrors();
        expect(combinator,new bare.createInstance(any,null));
        let hideCombinator : any = combinator;
        expect(hideCombinator.keyword,isNotNull);
        expect(hideCombinator.hiddenNames,hasLength(1));
    }
    test_parseCombinator_show() : void {
        this.createParser('show a;');
        let combinator : any = this.parser.parseCombinator();
        this.expectNotNullIfNoErrors(combinator);
        this.listener.assertNoErrors();
        expect(combinator,new bare.createInstance(any,null));
        let showCombinator : any = combinator;
        expect(showCombinator.keyword,isNotNull);
        expect(showCombinator.shownNames,hasLength(1));
    }
    test_parseCombinators_h() : void {
        this.createParser('hide a;');
        let combinators : core.DartList<any> = this.parser.parseCombinators();
        this.expectNotNullIfNoErrors(combinators);
        this.listener.assertNoErrors();
        expect(combinators,hasLength(1));
        let combinator : any = combinators[0] as any;
        expect(combinator,isNotNull);
        expect(combinator.keyword,isNotNull);
        expect(combinator.hiddenNames,hasLength(1));
    }
    test_parseCombinators_hs() : void {
        this.createParser('hide a show b;');
        let combinators : core.DartList<any> = this.parser.parseCombinators();
        this.expectNotNullIfNoErrors(combinators);
        this.listener.assertNoErrors();
        expect(combinators,hasLength(2));
        let hideCombinator : any = combinators[0] as any;
        expect(hideCombinator,isNotNull);
        expect(hideCombinator.keyword,isNotNull);
        expect(hideCombinator.hiddenNames,hasLength(1));
        let showCombinator : any = combinators[1] as any;
        expect(showCombinator,isNotNull);
        expect(showCombinator.keyword,isNotNull);
        expect(showCombinator.shownNames,hasLength(1));
    }
    test_parseCombinators_hshs() : void {
        this.createParser('hide a show b hide c show d;');
        let combinators : core.DartList<any> = this.parser.parseCombinators();
        this.expectNotNullIfNoErrors(combinators);
        this.listener.assertNoErrors();
        expect(combinators,hasLength(4));
    }
    test_parseCombinators_s() : void {
        this.createParser('show a;');
        let combinators : core.DartList<any> = this.parser.parseCombinators();
        this.expectNotNullIfNoErrors(combinators);
        this.listener.assertNoErrors();
        expect(combinators,hasLength(1));
        let combinator : any = combinators[0] as any;
        expect(combinator,isNotNull);
        expect(combinator.keyword,isNotNull);
        expect(combinator.shownNames,hasLength(1));
    }
    test_parseCommentAndMetadata_c() : void {
        this.createParser('/** 1 */ void');
        let commentAndMetadata : any = this.parser.parseCommentAndMetadata();
        this.expectNotNullIfNoErrors(commentAndMetadata);
        this.listener.assertNoErrors();
        expect(commentAndMetadata.comment,isNotNull);
        expect(commentAndMetadata.metadata,isNull);
    }
    test_parseCommentAndMetadata_cmc() : void {
        this.createParser('/** 1 */ @A /** 2 */ void');
        let commentAndMetadata : any = this.parser.parseCommentAndMetadata();
        this.expectNotNullIfNoErrors(commentAndMetadata);
        this.listener.assertNoErrors();
        expect(commentAndMetadata.comment,isNotNull);
        expect(commentAndMetadata.metadata,hasLength(1));
    }
    test_parseCommentAndMetadata_cmcm() : void {
        this.createParser('/** 1 */ @A /** 2 */ @B void');
        let commentAndMetadata : any = this.parser.parseCommentAndMetadata();
        this.expectNotNullIfNoErrors(commentAndMetadata);
        this.listener.assertNoErrors();
        expect(commentAndMetadata.comment,isNotNull);
        expect(commentAndMetadata.metadata,hasLength(2));
    }
    test_parseCommentAndMetadata_cmm() : void {
        this.createParser('/** 1 */ @A @B void');
        let commentAndMetadata : any = this.parser.parseCommentAndMetadata();
        this.expectNotNullIfNoErrors(commentAndMetadata);
        this.listener.assertNoErrors();
        expect(commentAndMetadata.comment,isNotNull);
        expect(commentAndMetadata.metadata,hasLength(2));
    }
    test_parseCommentAndMetadata_m() : void {
        this.createParser('@A void');
        let commentAndMetadata : any = this.parser.parseCommentAndMetadata();
        this.expectNotNullIfNoErrors(commentAndMetadata);
        this.listener.assertNoErrors();
        expect(commentAndMetadata.comment,isNull);
        expect(commentAndMetadata.metadata,hasLength(1));
    }
    test_parseCommentAndMetadata_mcm() : void {
        this.createParser('@A /** 1 */ @B void');
        let commentAndMetadata : any = this.parser.parseCommentAndMetadata();
        this.expectNotNullIfNoErrors(commentAndMetadata);
        this.listener.assertNoErrors();
        expect(commentAndMetadata.comment,isNotNull);
        expect(commentAndMetadata.metadata,hasLength(2));
    }
    test_parseCommentAndMetadata_mcmc() : void {
        this.createParser('@A /** 1 */ @B /** 2 */ void');
        let commentAndMetadata : any = this.parser.parseCommentAndMetadata();
        this.expectNotNullIfNoErrors(commentAndMetadata);
        this.listener.assertNoErrors();
        expect(commentAndMetadata.comment,isNotNull);
        expect(commentAndMetadata.metadata,hasLength(2));
    }
    test_parseCommentAndMetadata_mm() : void {
        this.createParser('@A @B(x) void');
        let commentAndMetadata : any = this.parser.parseCommentAndMetadata();
        this.expectNotNullIfNoErrors(commentAndMetadata);
        this.listener.assertNoErrors();
        expect(commentAndMetadata.comment,isNull);
        expect(commentAndMetadata.metadata,hasLength(2));
    }
    test_parseCommentAndMetadata_none() : void {
        this.createParser('void');
        let commentAndMetadata : any = this.parser.parseCommentAndMetadata();
        this.expectNotNullIfNoErrors(commentAndMetadata);
        this.listener.assertNoErrors();
        expect(commentAndMetadata.comment,isNull);
        expect(commentAndMetadata.metadata,isNull);
    }
    test_parseCommentAndMetadata_singleLine() : void {
        this.createParser('/// 1\n/// 2\nvoid');
        let commentAndMetadata : any = this.parser.parseCommentAndMetadata();
        this.expectNotNullIfNoErrors(commentAndMetadata);
        this.listener.assertNoErrors();
        expect(commentAndMetadata.comment,isNotNull);
        expect(commentAndMetadata.metadata,isNull);
    }
    test_parseCommentReference_new_prefixed() : void {
        this.createParser('');
        let reference : any = this.parser.parseCommentReference('new a.b',7);
        this.expectNotNullIfNoErrors(reference);
        this.listener.assertNoErrors();
        expect(reference.identifier,new bare.createInstance(any,null));
        let prefixedIdentifier : any = reference.identifier;
        let prefix : any = prefixedIdentifier.prefix;
        expect(prefix.token,isNotNull);
        expect(prefix.name,"a");
        expect(prefix.offset,11);
        expect(prefixedIdentifier.period,isNotNull);
        let identifier : any = prefixedIdentifier.identifier;
        expect(identifier.token,isNotNull);
        expect(identifier.name,"b");
        expect(identifier.offset,13);
    }
    test_parseCommentReference_new_simple() : void {
        this.createParser('');
        let reference : any = this.parser.parseCommentReference('new a',5);
        this.expectNotNullIfNoErrors(reference);
        this.listener.assertNoErrors();
        expect(reference.identifier,new bare.createInstance(any,null));
        let identifier : any = reference.identifier;
        expect(identifier.token,isNotNull);
        expect(identifier.name,"a");
        expect(identifier.offset,9);
    }
    test_parseCommentReference_operator_withKeyword_notPrefixed() : void {
        this.createParser('');
        let reference : any = this.parser.parseCommentReference('operator ==',5);
        this.expectNotNullIfNoErrors(reference);
        this.listener.assertNoErrors();
        expect(reference.identifier,new bare.createInstance(any,null));
        let identifier : any = reference.identifier;
        expect(identifier.token,isNotNull);
        expect(identifier.name,"==");
        expect(identifier.offset,14);
    }
    test_parseCommentReference_operator_withKeyword_prefixed() : void {
        this.createParser('');
        let reference : any = this.parser.parseCommentReference('Object.operator==',7);
        this.expectNotNullIfNoErrors(reference);
        this.listener.assertNoErrors();
        expect(reference.identifier,new bare.createInstance(any,null));
        let prefixedIdentifier : any = reference.identifier;
        let prefix : any = prefixedIdentifier.prefix;
        expect(prefix.token,isNotNull);
        expect(prefix.name,"Object");
        expect(prefix.offset,7);
        expect(prefixedIdentifier.period,isNotNull);
        let identifier : any = prefixedIdentifier.identifier;
        expect(identifier.token,isNotNull);
        expect(identifier.name,"==");
        expect(identifier.offset,22);
    }
    test_parseCommentReference_operator_withoutKeyword_notPrefixed() : void {
        this.createParser('');
        let reference : any = this.parser.parseCommentReference('==',5);
        this.expectNotNullIfNoErrors(reference);
        this.listener.assertNoErrors();
        expect(reference.identifier,new bare.createInstance(any,null));
        let identifier : any = reference.identifier;
        expect(identifier.token,isNotNull);
        expect(identifier.name,"==");
        expect(identifier.offset,5);
    }
    test_parseCommentReference_operator_withoutKeyword_prefixed() : void {
        this.createParser('');
        let reference : any = this.parser.parseCommentReference('Object.==',7);
        this.expectNotNullIfNoErrors(reference);
        this.listener.assertNoErrors();
        expect(reference.identifier,new bare.createInstance(any,null));
        let prefixedIdentifier : any = reference.identifier;
        let prefix : any = prefixedIdentifier.prefix;
        expect(prefix.token,isNotNull);
        expect(prefix.name,"Object");
        expect(prefix.offset,7);
        expect(prefixedIdentifier.period,isNotNull);
        let identifier : any = prefixedIdentifier.identifier;
        expect(identifier.token,isNotNull);
        expect(identifier.name,"==");
        expect(identifier.offset,14);
    }
    test_parseCommentReference_prefixed() : void {
        this.createParser('');
        let reference : any = this.parser.parseCommentReference('a.b',7);
        this.expectNotNullIfNoErrors(reference);
        this.listener.assertNoErrors();
        expect(reference.identifier,new bare.createInstance(any,null));
        let prefixedIdentifier : any = reference.identifier;
        let prefix : any = prefixedIdentifier.prefix;
        expect(prefix.token,isNotNull);
        expect(prefix.name,"a");
        expect(prefix.offset,7);
        expect(prefixedIdentifier.period,isNotNull);
        let identifier : any = prefixedIdentifier.identifier;
        expect(identifier.token,isNotNull);
        expect(identifier.name,"b");
        expect(identifier.offset,9);
    }
    test_parseCommentReference_simple() : void {
        this.createParser('');
        let reference : any = this.parser.parseCommentReference('a',5);
        this.expectNotNullIfNoErrors(reference);
        this.listener.assertNoErrors();
        expect(reference.identifier,new bare.createInstance(any,null));
        let identifier : any = reference.identifier;
        expect(identifier.token,isNotNull);
        expect(identifier.name,"a");
        expect(identifier.offset,5);
    }
    test_parseCommentReference_synthetic() : void {
        this.createParser('');
        let reference : any = this.parser.parseCommentReference('',5);
        this.expectNotNullIfNoErrors(reference);
        this.listener.assertNoErrors();
        expect(reference.identifier,new bare.createInstance(any,null));
        let identifier : any = reference.identifier;
        expect(identifier,isNotNull);
        expect(identifier.isSynthetic,isTrue);
        expect(identifier.token,isNotNull);
        expect(identifier.name,"");
        expect(identifier.offset,5);
        let nextToken : any = identifier.token.next;
        expect(nextToken,isNotNull);
        expect(nextToken.type,TokenType.EOF);
    }
    test_parseCommentReference_this() : void {
        this.createParser('');
        let reference : any = this.parser.parseCommentReference('this',5);
        this.expectNotNullIfNoErrors(reference);
        this.listener.assertNoErrors();
        let identifier : any = lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },SimpleIdentifier,reference.identifier);
        expect(identifier.token,isNotNull);
        expect(identifier.name,"a");
        expect(identifier.offset,5);
    }
    test_parseCommentReferences_multiLine() : void {
        let token : any = new bare.createInstance(any,null,TokenType.MULTI_LINE_COMMENT,"/** xxx [a] yyy [bb] zzz */",3);
        let tokens : core.DartList<any> = new core.DartList.literal<any>(token);
        this.createParser('');
        let references : core.DartList<any> = this.parser.parseCommentReferences(tokens);
        this.expectNotNullIfNoErrors(references);
        this.listener.assertNoErrors();
        let tokenReferences : core.DartList<any> = token.references;
        expect(references,hasLength(2));
        expect(tokenReferences,hasLength(2));
        {
            let reference : any = references[0];
            expect(reference,isNotNull);
            expect(reference.identifier,isNotNull);
            expect(reference.offset,12);
            let referenceToken : any = tokenReferences[0];
            expect(referenceToken.offset,12);
            expect(referenceToken.lexeme,'a');
        }
        {
            let reference : any = references[1];
            expect(reference,isNotNull);
            expect(reference.identifier,isNotNull);
            expect(reference.offset,20);
            let referenceToken : any = tokenReferences[1];
            expect(referenceToken.offset,20);
            expect(referenceToken.lexeme,'bb');
        }
    }
    test_parseCommentReferences_notClosed_noIdentifier() : void {
        let docToken : any = new bare.createInstance(any,null,TokenType.MULTI_LINE_COMMENT,"/** [ some text",5);
        this.createParser('');
        let references : core.DartList<any> = this.parser.parseCommentReferences(new core.DartList.literal<any>(docToken));
        this.expectNotNullIfNoErrors(references);
        this.listener.assertNoErrors();
        expect(docToken.references,hasLength(1));
        expect(references,hasLength(1));
        let referenceToken : any = op(Op.INDEX,docToken.references,0);
        let reference : any = references[0];
        expect(reference,isNotNull);
        expect(op(Op.INDEX,docToken.references,0),same(reference.beginToken));
        expect(reference.identifier,isNotNull);
        expect(reference.identifier.isSynthetic,isTrue);
        expect(reference.identifier.name,"");
        let nextToken : any = referenceToken.next;
        expect(nextToken,isNotNull);
        expect(nextToken.type,TokenType.EOF);
    }
    test_parseCommentReferences_notClosed_withIdentifier() : void {
        let docToken : any = new bare.createInstance(any,null,TokenType.MULTI_LINE_COMMENT,"/** [namePrefix some text",5);
        this.createParser('');
        let references : core.DartList<any> = this.parser.parseCommentReferences(new core.DartList.literal<any>(docToken));
        this.expectNotNullIfNoErrors(references);
        this.listener.assertNoErrors();
        expect(docToken.references,hasLength(1));
        expect(references,hasLength(1));
        let referenceToken : any = op(Op.INDEX,docToken.references,0);
        let reference : any = references[0];
        expect(reference,isNotNull);
        expect(referenceToken,same(reference.beginToken));
        expect(reference.identifier,isNotNull);
        expect(reference.identifier.isSynthetic,isFalse);
        expect(reference.identifier.name,"namePrefix");
        let nextToken : any = referenceToken.next;
        expect(nextToken,isNotNull);
        expect(nextToken.type,TokenType.EOF);
    }
    test_parseCommentReferences_singleLine() : void {
        let tokens : core.DartList<any> = new core.DartList.literal<any>(new bare.createInstance(any,null,TokenType.SINGLE_LINE_COMMENT,"/// xxx [a] yyy [b] zzz",3),new bare.createInstance(any,null,TokenType.SINGLE_LINE_COMMENT,"/// x [c]",28));
        this.createParser('');
        let references : core.DartList<any> = this.parser.parseCommentReferences(tokens);
        this.expectNotNullIfNoErrors(references);
        this.listener.assertNoErrors();
        expect(references,hasLength(3));
        let reference : any = references[0];
        expect(reference,isNotNull);
        expect(reference.identifier,isNotNull);
        expect(reference.offset,12);
        reference = references[1];
        expect(reference,isNotNull);
        expect(reference.identifier,isNotNull);
        expect(reference.offset,20);
        reference = references[2];
        expect(reference,isNotNull);
        expect(reference.identifier,isNotNull);
        expect(reference.offset,35);
    }
    test_parseCommentReferences_skipCodeBlock_4spaces_block() : void {
        let tokens : core.DartList<any> = new core.DartList.literal<any>(new bare.createInstance(any,null,TokenType.MULTI_LINE_COMMENT,"/**\n *     a[i]\n * non-code line\n */",3));
        this.createParser('');
        let references : core.DartList<any> = this.parser.parseCommentReferences(tokens);
        this.expectNotNullIfNoErrors(references);
        this.listener.assertNoErrors();
        expect(references,isEmpty);
    }
    test_parseCommentReferences_skipCodeBlock_4spaces_lines() : void {
        let tokens : core.DartList<any> = new core.DartList.literal<any>(new bare.createInstance(any,null,TokenType.SINGLE_LINE_COMMENT,"/// Code block:",0),new bare.createInstance(any,null,TokenType.SINGLE_LINE_COMMENT,"///     a[i] == b[i]",0));
        this.createParser('');
        let references : core.DartList<any> = this.parser.parseCommentReferences(tokens);
        this.expectNotNullIfNoErrors(references);
        this.listener.assertNoErrors();
        expect(references,isEmpty);
    }
    test_parseCommentReferences_skipCodeBlock_bracketed() : void {
        let tokens : core.DartList<any> = new core.DartList.literal<any>(new bare.createInstance(any,null,TokenType.MULTI_LINE_COMMENT,"/** [:xxx [a] yyy:] [b] zzz */",3));
        this.createParser('');
        let references : core.DartList<any> = this.parser.parseCommentReferences(tokens);
        this.expectNotNullIfNoErrors(references);
        this.listener.assertNoErrors();
        expect(references,hasLength(1));
        let reference : any = references[0];
        expect(reference,isNotNull);
        expect(reference.identifier,isNotNull);
        expect(reference.offset,24);
    }
    test_parseCommentReferences_skipCodeBlock_gitHub() : void {
        let tokens : core.DartList<any> = new core.DartList.literal<any>(new bare.createInstance(any,null,TokenType.MULTI_LINE_COMMENT,"/** `a[i]` and [b] */",0));
        this.createParser('');
        let references : core.DartList<any> = this.parser.parseCommentReferences(tokens);
        this.expectNotNullIfNoErrors(references);
        this.listener.assertNoErrors();
        expect(references,hasLength(1));
        let reference : any = references[0];
        expect(reference,isNotNull);
        expect(reference.identifier,isNotNull);
        expect(reference.offset,16);
    }
    test_parseCommentReferences_skipCodeBlock_gitHub_multiLine() : void {
        let tokens : core.DartList<any> = new core.DartList.literal<any>(new bare.createInstance(any,null,TokenType.MULTI_LINE_COMMENT,'/**\n * First.\n * ```dart\n * Some [int] reference.\n * ```\n * Last.\n */\n',3));
        this.createParser('');
        let references : core.DartList<any> = this.parser.parseCommentReferences(tokens);
        this.expectNotNullIfNoErrors(references);
        this.listener.assertNoErrors();
        expect(references,isEmpty);
    }
    test_parseCommentReferences_skipCodeBlock_gitHub_multiLine_lines() : void {
        let commentText : string = '/// First.\n/// ```dart\n/// Some [int] reference.\n/// ```\n/// Last.\n';
        let tokens : core.DartList<any> = new core.DartString(commentText).split('\n').map((line : any) =>  {
            return new bare.createInstance(any,null,TokenType.SINGLE_LINE_COMMENT,line,0);
        }).toList();
        this.createParser('');
        let references : core.DartList<any> = this.parser.parseCommentReferences(tokens);
        this.expectNotNullIfNoErrors(references);
        this.listener.assertNoErrors();
        expect(references,isEmpty);
    }
    test_parseCommentReferences_skipCodeBlock_gitHub_notTerminated() : void {
        let tokens : core.DartList<any> = new core.DartList.literal<any>(new bare.createInstance(any,null,TokenType.MULTI_LINE_COMMENT,"/** `a[i] and [b] */",0));
        this.createParser('');
        let references : core.DartList<any> = this.parser.parseCommentReferences(tokens);
        this.expectNotNullIfNoErrors(references);
        this.listener.assertNoErrors();
        expect(references,hasLength(2));
    }
    test_parseCommentReferences_skipCodeBlock_spaces() : void {
        let tokens : core.DartList<any> = new core.DartList.literal<any>(new bare.createInstance(any,null,TokenType.MULTI_LINE_COMMENT,"/**\n *     a[i]\n * xxx [i] zzz\n */",3));
        this.createParser('');
        let references : core.DartList<any> = this.parser.parseCommentReferences(tokens);
        this.expectNotNullIfNoErrors(references);
        this.listener.assertNoErrors();
        expect(references,hasLength(1));
        let reference : any = references[0];
        expect(reference,isNotNull);
        expect(reference.identifier,isNotNull);
        expect(reference.offset,27);
    }
    test_parseCommentReferences_skipLinkDefinition() : void {
        let tokens : core.DartList<any> = new core.DartList.literal<any>(new bare.createInstance(any,null,TokenType.MULTI_LINE_COMMENT,"/** [a]: http://www.google.com (Google) [b] zzz */",3));
        this.createParser('');
        let references : core.DartList<any> = this.parser.parseCommentReferences(tokens);
        this.expectNotNullIfNoErrors(references);
        this.listener.assertNoErrors();
        expect(references,hasLength(1));
        let reference : any = references[0];
        expect(reference,isNotNull);
        expect(reference.identifier,isNotNull);
        expect(reference.offset,44);
    }
    test_parseCommentReferences_skipLinked() : void {
        let tokens : core.DartList<any> = new core.DartList.literal<any>(new bare.createInstance(any,null,TokenType.MULTI_LINE_COMMENT,"/** [a](http://www.google.com) [b] zzz */",3));
        this.createParser('');
        let references : core.DartList<any> = this.parser.parseCommentReferences(tokens);
        this.expectNotNullIfNoErrors(references);
        this.listener.assertNoErrors();
        expect(references,hasLength(1));
        let reference : any = references[0];
        expect(reference,isNotNull);
        expect(reference.identifier,isNotNull);
        expect(reference.offset,35);
    }
    test_parseCommentReferences_skipReferenceLink() : void {
        let tokens : core.DartList<any> = new core.DartList.literal<any>(new bare.createInstance(any,null,TokenType.MULTI_LINE_COMMENT,"/** [a][c] [b] zzz */",3));
        this.createParser('');
        let references : core.DartList<any> = this.parser.parseCommentReferences(tokens);
        this.expectNotNullIfNoErrors(references);
        this.listener.assertNoErrors();
        expect(references,hasLength(1));
        let reference : any = references[0];
        expect(reference,isNotNull);
        expect(reference.identifier,isNotNull);
        expect(reference.offset,15);
    }
    test_parseConfiguration_noOperator_dottedIdentifier() : void {
        this.createParser("if (a.b) 'c.dart'");
        let configuration : any = this.parser.parseConfiguration();
        this.expectNotNullIfNoErrors(configuration);
        this.listener.assertNoErrors();
        expect(configuration.ifKeyword,isNotNull);
        expect(configuration.leftParenthesis,isNotNull);
        this.expectDottedName(configuration.name,new core.DartList.literal("a","b"));
        expect(configuration.equalToken,isNull);
        expect(configuration.value,isNull);
        expect(configuration.rightParenthesis,isNotNull);
        expect(configuration.uri,isNotNull);
    }
    test_parseConfiguration_noOperator_simpleIdentifier() : void {
        this.createParser("if (a) 'b.dart'");
        let configuration : any = this.parser.parseConfiguration();
        this.expectNotNullIfNoErrors(configuration);
        this.listener.assertNoErrors();
        expect(configuration.ifKeyword,isNotNull);
        expect(configuration.leftParenthesis,isNotNull);
        this.expectDottedName(configuration.name,new core.DartList.literal("a"));
        expect(configuration.equalToken,isNull);
        expect(configuration.value,isNull);
        expect(configuration.rightParenthesis,isNotNull);
        expect(configuration.uri,isNotNull);
    }
    test_parseConfiguration_operator_dottedIdentifier() : void {
        this.createParser("if (a.b == 'c') 'd.dart'");
        let configuration : any = this.parser.parseConfiguration();
        this.expectNotNullIfNoErrors(configuration);
        this.listener.assertNoErrors();
        expect(configuration.ifKeyword,isNotNull);
        expect(configuration.leftParenthesis,isNotNull);
        this.expectDottedName(configuration.name,new core.DartList.literal("a","b"));
        expect(configuration.equalToken,isNotNull);
        expect(configuration.value,isNotNull);
        expect(configuration.rightParenthesis,isNotNull);
        expect(configuration.uri,isNotNull);
    }
    test_parseConfiguration_operator_simpleIdentifier() : void {
        this.createParser("if (a == 'b') 'c.dart'");
        let configuration : any = this.parser.parseConfiguration();
        this.expectNotNullIfNoErrors(configuration);
        this.listener.assertNoErrors();
        expect(configuration.ifKeyword,isNotNull);
        expect(configuration.leftParenthesis,isNotNull);
        this.expectDottedName(configuration.name,new core.DartList.literal("a"));
        expect(configuration.equalToken,isNotNull);
        expect(configuration.value,isNotNull);
        expect(configuration.rightParenthesis,isNotNull);
        expect(configuration.uri,isNotNull);
    }
    test_parseConstructor() : void {
    }
    test_parseConstructorName_named_noPrefix() : void {
        this.createParser('A.n;');
        let name : any = this.parser.parseConstructorName();
        this.expectNotNullIfNoErrors(name);
        this.listener.assertNoErrors();
        expect(name.type,isNotNull);
        expect(name.period,isNull);
        expect(name.name,isNull);
    }
    test_parseConstructorName_named_prefixed() : void {
        this.createParser('p.A.n;');
        let name : any = this.parser.parseConstructorName();
        this.expectNotNullIfNoErrors(name);
        this.listener.assertNoErrors();
        expect(name.type,isNotNull);
        expect(name.period,isNotNull);
        expect(name.name,isNotNull);
    }
    test_parseConstructorName_unnamed_noPrefix() : void {
        this.createParser('A;');
        let name : any = this.parser.parseConstructorName();
        this.expectNotNullIfNoErrors(name);
        this.listener.assertNoErrors();
        expect(name.type,isNotNull);
        expect(name.period,isNull);
        expect(name.name,isNull);
    }
    test_parseConstructorName_unnamed_prefixed() : void {
        this.createParser('p.A;');
        let name : any = this.parser.parseConstructorName();
        this.expectNotNullIfNoErrors(name);
        this.listener.assertNoErrors();
        expect(name.type,isNotNull);
        expect(name.period,isNull);
        expect(name.name,isNull);
    }
    test_parseDocumentationComment_block() : void {
        this.createParser('/** */ class');
        let comment : any = this.parser.parseDocumentationComment(this.parser.parseDocumentationCommentTokens());
        this.expectNotNullIfNoErrors(comment);
        this.listener.assertNoErrors();
        expect(comment.isBlock,isFalse);
        expect(comment.isDocumentation,isTrue);
        expect(comment.isEndOfLine,isFalse);
    }
    test_parseDocumentationComment_block_withReference() : void {
        this.createParser('/** [a] */ class');
        let comment : any = this.parser.parseDocumentationComment(this.parser.parseDocumentationCommentTokens());
        this.expectNotNullIfNoErrors(comment);
        this.listener.assertNoErrors();
        expect(comment.isBlock,isFalse);
        expect(comment.isDocumentation,isTrue);
        expect(comment.isEndOfLine,isFalse);
        let references : any = comment.references;
        expect(references,hasLength(1));
        let reference : any = op(Op.INDEX,references,0);
        expect(reference,isNotNull);
        expect(reference.offset,5);
    }
    test_parseDocumentationComment_endOfLine() : void {
        this.createParser('/// \n/// \n class');
        let comment : any = this.parser.parseDocumentationComment(this.parser.parseDocumentationCommentTokens());
        this.expectNotNullIfNoErrors(comment);
        this.listener.assertNoErrors();
        expect(comment.isBlock,isFalse);
        expect(comment.isDocumentation,isTrue);
        expect(comment.isEndOfLine,isFalse);
    }
    test_parseDottedName_multiple() : void {
        this.createParser('a.b.c');
        let name : any = this.parser.parseDottedName();
        this.expectNotNullIfNoErrors(name);
        this.listener.assertNoErrors();
        this.expectDottedName(name,new core.DartList.literal("a","b","c"));
    }
    test_parseDottedName_single() : void {
        this.createParser('a');
        let name : any = this.parser.parseDottedName();
        this.expectNotNullIfNoErrors(name);
        this.listener.assertNoErrors();
        this.expectDottedName(name,new core.DartList.literal("a"));
    }
    test_parseExtendsClause() : void {
        this.createParser('extends B');
        let clause : any = this.parser.parseExtendsClause();
        this.expectNotNullIfNoErrors(clause);
        this.listener.assertNoErrors();
        expect(clause.extendsKeyword,isNotNull);
        expect(clause.superclass,isNotNull);
        expect(clause.superclass,new bare.createInstance(any,null));
    }
    test_parseFinalConstVarOrType_const_functionType() : void {
        this.createParser('const int Function(int) f');
        let result : any = this.parser.parseFinalConstVarOrType(false);
        this.expectNotNullIfNoErrors(result);
        this.listener.assertNoErrors();
        let keyword : any = result.keyword;
        expect(keyword,isNotNull);
        expect(keyword.type.isKeyword,true);
        expect(keyword.keyword,Keyword.CONST);
        expect(result.type,isNotNull);
    }
    test_parseFinalConstVarOrType_const_namedType() : void {
        this.createParser('const A a');
        let result : any = this.parser.parseFinalConstVarOrType(false);
        this.expectNotNullIfNoErrors(result);
        this.listener.assertNoErrors();
        let keyword : any = result.keyword;
        expect(keyword,isNotNull);
        expect(keyword.type.isKeyword,true);
        expect(keyword.keyword,Keyword.CONST);
        expect(result.type,isNotNull);
    }
    test_parseFinalConstVarOrType_const_noType() : void {
        this.createParser('const');
        let result : any = this.parser.parseFinalConstVarOrType(false);
        this.expectNotNullIfNoErrors(result);
        this.listener.assertNoErrors();
        let keyword : any = result.keyword;
        expect(keyword,isNotNull);
        expect(keyword.type.isKeyword,true);
        expect(keyword.keyword,Keyword.CONST);
        expect(result.type,isNull);
    }
    test_parseFinalConstVarOrType_final_functionType() : void {
        this.createParser('final int Function(int) f');
        let result : any = this.parser.parseFinalConstVarOrType(false);
        this.expectNotNullIfNoErrors(result);
        this.listener.assertNoErrors();
        let keyword : any = result.keyword;
        expect(keyword,isNotNull);
        expect(keyword.type.isKeyword,true);
        expect(keyword.keyword,Keyword.FINAL);
        expect(result.type,isNotNull);
    }
    test_parseFinalConstVarOrType_final_namedType() : void {
        this.createParser('final A a');
        let result : any = this.parser.parseFinalConstVarOrType(false);
        this.expectNotNullIfNoErrors(result);
        this.listener.assertNoErrors();
        let keyword : any = result.keyword;
        expect(keyword,isNotNull);
        expect(keyword.type.isKeyword,true);
        expect(keyword.keyword,Keyword.FINAL);
        expect(result.type,isNotNull);
    }
    test_parseFinalConstVarOrType_final_noType() : void {
        this.createParser('final');
        let result : any = this.parser.parseFinalConstVarOrType(false);
        this.expectNotNullIfNoErrors(result);
        this.listener.assertNoErrors();
        let keyword : any = result.keyword;
        expect(keyword,isNotNull);
        expect(keyword.type.isKeyword,true);
        expect(keyword.keyword,Keyword.FINAL);
        expect(result.type,isNull);
    }
    test_parseFinalConstVarOrType_final_prefixedType() : void {
        this.createParser('final p.A a');
        let result : any = this.parser.parseFinalConstVarOrType(false);
        this.expectNotNullIfNoErrors(result);
        this.listener.assertNoErrors();
        let keyword : any = result.keyword;
        expect(keyword,isNotNull);
        expect(keyword.type.isKeyword,true);
        expect(keyword.keyword,Keyword.FINAL);
        expect(result.type,isNotNull);
    }
    test_parseFinalConstVarOrType_type_function() : void {
        this.createParser('int Function(int) f');
        let result : any = this.parser.parseFinalConstVarOrType(false);
        this.expectNotNullIfNoErrors(result);
        this.listener.assertNoErrors();
        expect(result.keyword,isNull);
        expect(result.type,isNotNull);
    }
    test_parseFinalConstVarOrType_type_parameterized() : void {
        this.createParser('A<B> a');
        let result : any = this.parser.parseFinalConstVarOrType(false);
        this.expectNotNullIfNoErrors(result);
        this.listener.assertNoErrors();
        expect(result.keyword,isNull);
        expect(result.type,isNotNull);
    }
    test_parseFinalConstVarOrType_type_prefixed() : void {
        this.createParser('p.A a');
        let result : any = this.parser.parseFinalConstVarOrType(false);
        this.expectNotNullIfNoErrors(result);
        this.listener.assertNoErrors();
        expect(result.keyword,isNull);
        expect(result.type,isNotNull);
    }
    test_parseFinalConstVarOrType_type_prefixed_noIdentifier() : void {
        this.createParser('p.A,');
        let result : any = this.parser.parseFinalConstVarOrType(false);
        this.expectNotNullIfNoErrors(result);
        this.listener.assertNoErrors();
        expect(result.keyword,isNull);
        expect(result.type,isNotNull);
    }
    test_parseFinalConstVarOrType_type_prefixedAndParameterized() : void {
        this.createParser('p.A<B> a');
        let result : any = this.parser.parseFinalConstVarOrType(false);
        this.expectNotNullIfNoErrors(result);
        this.listener.assertNoErrors();
        expect(result.keyword,isNull);
        expect(result.type,isNotNull);
    }
    test_parseFinalConstVarOrType_type_simple() : void {
        this.createParser('A a');
        let result : any = this.parser.parseFinalConstVarOrType(false);
        this.expectNotNullIfNoErrors(result);
        this.listener.assertNoErrors();
        expect(result.keyword,isNull);
        expect(result.type,isNotNull);
    }
    test_parseFinalConstVarOrType_type_simple_noIdentifier_inFunctionType() : void {
        this.createParser('A,');
        let result : any = this.parser.parseFinalConstVarOrType(false,{
            inFunctionType : true});
        this.expectNotNullIfNoErrors(result);
        this.listener.assertNoErrors();
        expect(result.keyword,isNull);
        expect(result.type,isNotNull);
    }
    test_parseFinalConstVarOrType_var() : void {
        this.createParser('var');
        let result : any = this.parser.parseFinalConstVarOrType(false);
        this.expectNotNullIfNoErrors(result);
        this.listener.assertNoErrors();
        let keyword : any = result.keyword;
        expect(keyword,isNotNull);
        expect(keyword.type.isKeyword,true);
        expect(keyword.keyword,Keyword.VAR);
        expect(result.type,isNull);
    }
    test_parseFinalConstVarOrType_void() : void {
        this.createParser('void f()');
        let result : any = this.parser.parseFinalConstVarOrType(false);
        this.expectNotNullIfNoErrors(result);
        this.listener.assertNoErrors();
        expect(result.keyword,isNull);
        expect(result.type,isNotNull);
    }
    test_parseFinalConstVarOrType_void_noIdentifier() : void {
        this.createParser('void,');
        let result : any = this.parser.parseFinalConstVarOrType(false);
        this.expectNotNullIfNoErrors(result);
        this.listener.assertNoErrors();
        expect(result.keyword,isNull);
        expect(result.type,isNotNull);
    }
    test_parseFunctionBody_block() : void {
        this.createParser('{}');
        let functionBody : any = this.parser.parseFunctionBody(false,null,false);
        this.expectNotNullIfNoErrors(functionBody);
        this.listener.assertNoErrors();
        expect(functionBody,new bare.createInstance(any,null));
        let body : any = functionBody;
        expect(body.keyword,isNull);
        expect(body.star,isNull);
        expect(body.block,isNotNull);
        expect(body.isAsynchronous,isFalse);
        expect(body.isGenerator,isFalse);
        expect(body.isSynchronous,isTrue);
    }
    test_parseFunctionBody_block_async() : void {
        this.createParser('async {}');
        let functionBody : any = this.parser.parseFunctionBody(false,null,false);
        this.expectNotNullIfNoErrors(functionBody);
        this.listener.assertNoErrors();
        expect(functionBody,new bare.createInstance(any,null));
        let body : any = functionBody;
        expect(body.keyword,isNotNull);
        expect(body.keyword.lexeme,Parser.ASYNC);
        expect(body.star,isNull);
        expect(body.block,isNotNull);
        expect(body.isAsynchronous,isTrue);
        expect(body.isGenerator,isFalse);
        expect(body.isSynchronous,isFalse);
    }
    test_parseFunctionBody_block_asyncGenerator() : void {
        this.createParser('async* {}');
        let functionBody : any = this.parser.parseFunctionBody(false,null,false);
        this.expectNotNullIfNoErrors(functionBody);
        this.listener.assertNoErrors();
        expect(functionBody,new bare.createInstance(any,null));
        let body : any = functionBody;
        expect(body.keyword,isNotNull);
        expect(body.keyword.lexeme,Parser.ASYNC);
        expect(body.star,isNotNull);
        expect(body.block,isNotNull);
        expect(body.isAsynchronous,isTrue);
        expect(body.isGenerator,isTrue);
        expect(body.isSynchronous,isFalse);
    }
    test_parseFunctionBody_block_syncGenerator() : void {
        this.createParser('sync* {}');
        let functionBody : any = this.parser.parseFunctionBody(false,null,false);
        this.expectNotNullIfNoErrors(functionBody);
        this.listener.assertNoErrors();
        expect(functionBody,new bare.createInstance(any,null));
        let body : any = functionBody;
        expect(body.keyword,isNotNull);
        expect(body.keyword.lexeme,Parser.SYNC);
        expect(body.star,isNotNull);
        expect(body.block,isNotNull);
        expect(body.isAsynchronous,isFalse);
        expect(body.isGenerator,isTrue);
        expect(body.isSynchronous,isTrue);
    }
    test_parseFunctionBody_empty() : void {
        this.createParser(';');
        let functionBody : any = this.parser.parseFunctionBody(true,null,false);
        this.expectNotNullIfNoErrors(functionBody);
        this.listener.assertNoErrors();
        expect(functionBody,new bare.createInstance(any,null));
        let body : any = functionBody;
        expect(body.semicolon,isNotNull);
    }
    test_parseFunctionBody_expression() : void {
        this.createParser('=> y;');
        let functionBody : any = this.parser.parseFunctionBody(false,null,false);
        this.expectNotNullIfNoErrors(functionBody);
        this.listener.assertNoErrors();
        expect(functionBody,new bare.createInstance(any,null));
        let body : any = functionBody;
        expect(body.keyword,isNull);
        expect(body.functionDefinition,isNotNull);
        expect(body.expression,isNotNull);
        expect(body.semicolon,isNotNull);
        expect(body.isAsynchronous,isFalse);
        expect(body.isGenerator,isFalse);
        expect(body.isSynchronous,isTrue);
    }
    test_parseFunctionBody_expression_async() : void {
        this.createParser('async => y;');
        let functionBody : any = this.parser.parseFunctionBody(false,null,false);
        this.expectNotNullIfNoErrors(functionBody);
        this.listener.assertNoErrors();
        expect(functionBody,new bare.createInstance(any,null));
        let body : any = functionBody;
        expect(body.keyword,isNotNull);
        expect(body.keyword.lexeme,Parser.ASYNC);
        expect(body.functionDefinition,isNotNull);
        expect(body.expression,isNotNull);
        expect(body.semicolon,isNotNull);
        expect(body.isAsynchronous,isTrue);
        expect(body.isGenerator,isFalse);
        expect(body.isSynchronous,isFalse);
    }
    test_parseFunctionBody_skip_block() : void {
        ParserTestCase.parseFunctionBodies = false;
        this.createParser('{}');
        let functionBody : any = this.parser.parseFunctionBody(false,null,false);
        this.expectNotNullIfNoErrors(functionBody);
        this.listener.assertNoErrors();
        expect(functionBody,new bare.createInstance(any,null));
    }
    test_parseFunctionBody_skip_block_invalid() : void {
        ParserTestCase.parseFunctionBodies = false;
        this.createParser('{');
        let functionBody : any = this.parser.parseFunctionBody(false,null,false);
        this.expectNotNullIfNoErrors(functionBody);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_TOKEN));
        expect(functionBody,new bare.createInstance(any,null));
    }
    test_parseFunctionBody_skip_blocks() : void {
        ParserTestCase.parseFunctionBodies = false;
        this.createParser('{ {} }');
        let functionBody : any = this.parser.parseFunctionBody(false,null,false);
        this.expectNotNullIfNoErrors(functionBody);
        this.listener.assertNoErrors();
        expect(functionBody,new bare.createInstance(any,null));
    }
    test_parseFunctionBody_skip_expression() : void {
        ParserTestCase.parseFunctionBodies = false;
        this.createParser('=> y;');
        let functionBody : any = this.parser.parseFunctionBody(false,null,false);
        this.expectNotNullIfNoErrors(functionBody);
        this.listener.assertNoErrors();
        expect(functionBody,new bare.createInstance(any,null));
    }
    test_parseIdentifierList_multiple() : void {
        this.createParser('a, b, c');
        let list : core.DartList<any> = this.parser.parseIdentifierList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertNoErrors();
        expect(list,hasLength(3));
    }
    test_parseIdentifierList_single() : void {
        this.createParser('a');
        let list : core.DartList<any> = this.parser.parseIdentifierList();
        this.expectNotNullIfNoErrors(list);
        this.listener.assertNoErrors();
        expect(list,hasLength(1));
    }
    test_parseImplementsClause_multiple() : void {
        this.createParser('implements A, B, C');
        let clause : any = this.parser.parseImplementsClause();
        this.expectNotNullIfNoErrors(clause);
        this.listener.assertNoErrors();
        expect(clause.interfaces,hasLength(3));
        expect(clause.implementsKeyword,isNotNull);
    }
    test_parseImplementsClause_single() : void {
        this.createParser('implements A');
        let clause : any = this.parser.parseImplementsClause();
        this.expectNotNullIfNoErrors(clause);
        this.listener.assertNoErrors();
        expect(clause.interfaces,hasLength(1));
        expect(clause.implementsKeyword,isNotNull);
    }
    test_parseLibraryIdentifier_multiple() : void {
        let name : string = "a.b.c";
        this.createParser(name);
        let identifier : any = this.parser.parseLibraryIdentifier();
        this.expectNotNullIfNoErrors(identifier);
        this.listener.assertNoErrors();
        expect(identifier.name,name);
    }
    test_parseLibraryIdentifier_single() : void {
        let name : string = "a";
        this.createParser(name);
        let identifier : any = this.parser.parseLibraryIdentifier();
        this.expectNotNullIfNoErrors(identifier);
        this.listener.assertNoErrors();
        expect(identifier.name,name);
    }
    test_parseModifiers_abstract() : void {
        this.createParser('abstract A');
        let modifiers : any = this.parser.parseModifiers();
        this.expectNotNullIfNoErrors(modifiers);
        this.listener.assertNoErrors();
        expect(modifiers.abstractKeyword,isNotNull);
    }
    test_parseModifiers_const() : void {
        this.createParser('const A');
        let modifiers : any = this.parser.parseModifiers();
        this.expectNotNullIfNoErrors(modifiers);
        this.listener.assertNoErrors();
        expect(modifiers.constKeyword,isNotNull);
    }
    test_parseModifiers_covariant() : void {
        this.createParser('covariant A');
        let modifiers : any = this.parser.parseModifiers();
        this.expectNotNullIfNoErrors(modifiers);
        this.listener.assertNoErrors();
        expect(modifiers.covariantKeyword,isNotNull);
    }
    test_parseModifiers_external() : void {
        this.createParser('external A');
        let modifiers : any = this.parser.parseModifiers();
        this.expectNotNullIfNoErrors(modifiers);
        this.listener.assertNoErrors();
        expect(modifiers.externalKeyword,isNotNull);
    }
    test_parseModifiers_factory() : void {
        this.createParser('factory A');
        let modifiers : any = this.parser.parseModifiers();
        this.expectNotNullIfNoErrors(modifiers);
        this.listener.assertNoErrors();
        expect(modifiers.factoryKeyword,isNotNull);
    }
    test_parseModifiers_final() : void {
        this.createParser('final A');
        let modifiers : any = this.parser.parseModifiers();
        this.expectNotNullIfNoErrors(modifiers);
        this.listener.assertNoErrors();
        expect(modifiers.finalKeyword,isNotNull);
    }
    test_parseModifiers_static() : void {
        this.createParser('static A');
        let modifiers : any = this.parser.parseModifiers();
        this.expectNotNullIfNoErrors(modifiers);
        this.listener.assertNoErrors();
        expect(modifiers.staticKeyword,isNotNull);
    }
    test_parseModifiers_var() : void {
        this.createParser('var A');
        let modifiers : any = this.parser.parseModifiers();
        this.expectNotNullIfNoErrors(modifiers);
        this.listener.assertNoErrors();
        expect(modifiers.varKeyword,isNotNull);
    }
    test_parseOptionalReturnType() : void {
    }
    test_Parser() : void {
        expect(new bare.createInstance(any,null,null,null),isNotNull);
    }
    test_parseReturnStatement_noValue() : void {
        this.createParser('return;');
        let statement : any = this.parser.parseReturnStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertNoErrors();
        expect(statement.returnKeyword,isNotNull);
        expect(statement.expression,isNull);
        expect(statement.semicolon,isNotNull);
    }
    test_parseReturnStatement_value() : void {
        this.createParser('return x;');
        let statement : any = this.parser.parseReturnStatement();
        this.expectNotNullIfNoErrors(statement);
        this.listener.assertNoErrors();
        expect(statement.returnKeyword,isNotNull);
        expect(statement.expression,isNotNull);
        expect(statement.semicolon,isNotNull);
    }
    test_parseReturnType_function() : void {
        this.createParser('A<B> Function<B>(B)');
        let type : any = this.parser.parseReturnType(false);
        this.expectNotNullIfNoErrors(type);
        this.listener.assertNoErrors();
        expect(type.returnType,isNotNull);
        expect(type.typeParameters,isNotNull);
        expect(type.parameters,isNotNull);
    }
    test_parseReturnType_named() : void {
        this.createParser('A<B>');
        let typeName : any = this.parser.parseReturnType(false);
        this.expectNotNullIfNoErrors(typeName);
        this.listener.assertNoErrors();
        expect(typeName.name,isNotNull);
        expect(typeName.typeArguments,isNotNull);
    }
    test_parseReturnType_void() : void {
        this.createParser('void');
        let typeName : any = this.parser.parseReturnType(false);
        this.expectNotNullIfNoErrors(typeName);
        this.listener.assertNoErrors();
        expect(typeName.name,isNotNull);
        expect(typeName.typeArguments,isNull);
    }
    test_parseStatement_function_noReturnType() : void {
        this.createParser('Function<A>(core.List<core.int> x) m() => null;\n');
        let statement : any = this.parser.parseStatement2();
        expect(statement,new bare.createInstance(any,null));
        expect((statement as any).functionDeclaration.functionExpression.body,new bare.createInstance(any,null));
    }
    test_parseStatements_multiple() : void {
        let statements : core.DartList<any> = this.parseStatements("return; return;",2);
        expect(statements,hasLength(2));
    }
    test_parseStatements_single() : void {
        let statements : core.DartList<any> = this.parseStatements("return;",1);
        expect(statements,hasLength(1));
    }
    test_parseTypeAnnotation_function_noReturnType_noParameters() : void {
        this.createParser('Function() v');
        let functionType : any = this.parser.parseTypeAnnotation(false);
        this.expectNotNullIfNoErrors(functionType);
        this.listener.assertNoErrors();
        expect(functionType.returnType,isNull);
        expect(functionType.functionKeyword,isNotNull);
        expect(functionType.typeParameters,isNull);
        let parameterList : any = functionType.parameters;
        expect(parameterList,isNotNull);
        expect(parameterList.parameters,hasLength(0));
    }
    test_parseTypeAnnotation_function_noReturnType_parameters() : void {
        this.createParser('Function(int, int) v');
        let functionType : any = this.parser.parseTypeAnnotation(false);
        this.expectNotNullIfNoErrors(functionType);
        this.listener.assertNoErrors();
        expect(functionType.returnType,isNull);
        expect(functionType.functionKeyword,isNotNull);
        expect(functionType.typeParameters,isNull);
        let parameterList : any = functionType.parameters;
        expect(parameterList,isNotNull);
        let parameters : any = parameterList.parameters;
        expect(parameters,hasLength(2));
        expect(op(Op.INDEX,parameters,0),new bare.createInstance(any,null));
        let parameter : any = op(Op.INDEX,parameters,0);
        expect(parameter.identifier,isNull);
        expect(parameter.type,new bare.createInstance(any,null));
        expect((parameter.type as any).name.name,'int');
        expect(op(Op.INDEX,parameters,1),new bare.createInstance(any,null));
        parameter = op(Op.INDEX,parameters,1);
        expect(parameter.identifier,isNull);
        expect(parameter.type,new bare.createInstance(any,null));
        expect((parameter.type as any).name.name,'int');
    }
    test_parseTypeAnnotation_function_noReturnType_typeParameters() : void {
        this.createParser('Function<S, T>()');
        let functionType : any = this.parser.parseTypeAnnotation(false);
        this.expectNotNullIfNoErrors(functionType);
        this.listener.assertNoErrors();
        expect(functionType.returnType,isNull);
        expect(functionType.functionKeyword,isNotNull);
        let typeParameters : any = functionType.typeParameters;
        expect(typeParameters,isNotNull);
        expect(typeParameters.typeParameters,hasLength(2));
        let parameterList : any = functionType.parameters;
        expect(parameterList,isNotNull);
        expect(parameterList.parameters,hasLength(0));
    }
    test_parseTypeAnnotation_function_noReturnType_typeParameters_parameters() : void {
        this.createParser('Function<T>(String, {T t})');
        let functionType : any = this.parser.parseTypeAnnotation(false);
        this.expectNotNullIfNoErrors(functionType);
        this.listener.assertNoErrors();
        expect(functionType.returnType,isNull);
        expect(functionType.functionKeyword,isNotNull);
        let typeParameters : any = functionType.typeParameters;
        expect(typeParameters,isNotNull);
        expect(typeParameters.typeParameters,hasLength(1));
        let parameterList : any = functionType.parameters;
        expect(parameterList,isNotNull);
        expect(parameterList.parameters,hasLength(2));
    }
    test_parseTypeAnnotation_function_returnType_classFunction() : void {
        this.createParser('Function v');
        let functionType : any = this.parser.parseTypeAnnotation(false);
        this.expectNotNullIfNoErrors(functionType);
        this.listener.assertNoErrors();
    }
    test_parseTypeAnnotation_function_returnType_function() : void {
        this.createParser('A Function(B, C) Function(D) v');
        let functionType = this.parser.parseTypeAnnotation(false) as any;
        this.expectNotNullIfNoErrors(functionType);
        this.listener.assertNoErrors();
    }
    test_parseTypeAnnotation_function_returnType_noParameters() : void {
        this.createParser('List<int> Function()');
        let functionType : any = this.parser.parseTypeAnnotation(false);
        this.expectNotNullIfNoErrors(functionType);
        this.listener.assertNoErrors();
        expect(functionType.returnType,isNotNull);
        expect(functionType.functionKeyword,isNotNull);
        expect(functionType.typeParameters,isNull);
        let parameterList : any = functionType.parameters;
        expect(parameterList,isNotNull);
        expect(parameterList.parameters,hasLength(0));
    }
    test_parseTypeAnnotation_function_returnType_parameters() : void {
        this.createParser('List<int> Function(String s, int i)');
        let functionType : any = this.parser.parseTypeAnnotation(false);
        this.expectNotNullIfNoErrors(functionType);
        this.listener.assertNoErrors();
        expect(functionType.returnType,isNotNull);
        expect(functionType.functionKeyword,isNotNull);
        expect(functionType.typeParameters,isNull);
        let parameterList : any = functionType.parameters;
        expect(parameterList,isNotNull);
        let parameters : any = parameterList.parameters;
        expect(parameters,hasLength(2));
        expect(op(Op.INDEX,parameters,0),new bare.createInstance(any,null));
        let parameter : any = op(Op.INDEX,parameters,0);
        expect(parameter.identifier,isNotNull);
        expect(parameter.identifier.name,'s');
        expect(parameter.type,new bare.createInstance(any,null));
        expect((parameter.type as any).name.name,'String');
        expect(op(Op.INDEX,parameters,1),new bare.createInstance(any,null));
        parameter = op(Op.INDEX,parameters,1);
        expect(parameter.identifier,isNotNull);
        expect(parameter.identifier.name,'i');
        expect(parameter.type,new bare.createInstance(any,null));
        expect((parameter.type as any).name.name,'int');
    }
    test_parseTypeAnnotation_function_returnType_simple() : void {
        this.createParser('A Function(B, C) v');
        let functionType = this.parser.parseTypeAnnotation(false) as any;
        this.expectNotNullIfNoErrors(functionType);
        this.listener.assertNoErrors();
    }
    test_parseTypeAnnotation_function_returnType_typeParameters() : void {
        this.createParser('List<T> Function<T>()');
        let functionType : any = this.parser.parseTypeAnnotation(false);
        this.expectNotNullIfNoErrors(functionType);
        this.listener.assertNoErrors();
        expect(functionType.returnType,isNotNull);
        expect(functionType.functionKeyword,isNotNull);
        let typeParameters : any = functionType.typeParameters;
        expect(typeParameters,isNotNull);
        expect(typeParameters.typeParameters,hasLength(1));
        let parameterList : any = functionType.parameters;
        expect(parameterList,isNotNull);
        expect(parameterList.parameters,hasLength(0));
    }
    test_parseTypeAnnotation_function_returnType_typeParameters_parameters() : void {
        this.createParser('List<T> Function<T>(String s, [T])');
        let functionType : any = this.parser.parseTypeAnnotation(false);
        this.expectNotNullIfNoErrors(functionType);
        this.listener.assertNoErrors();
        expect(functionType.returnType,isNotNull);
        expect(functionType.functionKeyword,isNotNull);
        let typeParameters : any = functionType.typeParameters;
        expect(typeParameters,isNotNull);
        expect(typeParameters.typeParameters,hasLength(1));
        let parameterList : any = functionType.parameters;
        expect(parameterList,isNotNull);
        expect(parameterList.parameters,hasLength(2));
    }
    test_parseTypeAnnotation_function_returnType_withArguments() : void {
        this.createParser('A<B> Function(C) v');
        let functionType = this.parser.parseTypeAnnotation(false) as any;
        this.expectNotNullIfNoErrors(functionType);
        this.listener.assertNoErrors();
    }
    test_parseTypeAnnotation_named() : void {
        this.createParser('A<B> v');
        let typeName : any = this.parser.parseTypeAnnotation(false);
        this.expectNotNullIfNoErrors(typeName);
        this.listener.assertNoErrors();
    }
    test_parseTypeArgumentList_empty() : void {
        this.createParser('<>');
        let argumentList : any = this.parser.parseTypeArgumentList();
        this.expectNotNullIfNoErrors(argumentList);
        this.listener.assertErrorsWithCodes(new core.DartList.literal(ParserErrorCode.EXPECTED_TYPE_NAME));
        expect(argumentList.leftBracket,isNotNull);
        expect(argumentList.arguments,hasLength(1));
        expect(argumentList.rightBracket,isNotNull);
    }
    test_parseTypeArgumentList_multiple() : void {
        this.createParser('<int, int, int>');
        let argumentList : any = this.parser.parseTypeArgumentList();
        this.expectNotNullIfNoErrors(argumentList);
        this.listener.assertNoErrors();
        expect(argumentList.leftBracket,isNotNull);
        expect(argumentList.arguments,hasLength(3));
        expect(argumentList.rightBracket,isNotNull);
    }
    test_parseTypeArgumentList_nested() : void {
        this.createParser('<A<B>>');
        let argumentList : any = this.parser.parseTypeArgumentList();
        this.expectNotNullIfNoErrors(argumentList);
        this.listener.assertNoErrors();
        expect(argumentList.leftBracket,isNotNull);
        expect(argumentList.arguments,hasLength(1));
        let argument : any = op(Op.INDEX,argumentList.arguments,0);
        expect(argument,isNotNull);
        let innerList : any = argument.typeArguments;
        expect(innerList,isNotNull);
        expect(innerList.arguments,hasLength(1));
        expect(argumentList.rightBracket,isNotNull);
    }
    test_parseTypeArgumentList_nested_withComment_double() : void {
        this.createParser('<A<B /* 0 */ >>');
        let argumentList : any = this.parser.parseTypeArgumentList();
        this.expectNotNullIfNoErrors(argumentList);
        this.listener.assertNoErrors();
        expect(argumentList.leftBracket,isNotNull);
        expect(argumentList.rightBracket,isNotNull);
        expect(argumentList.arguments,hasLength(1));
        let argument : any = op(Op.INDEX,argumentList.arguments,0);
        expect(argument,isNotNull);
        let innerList : any = argument.typeArguments;
        expect(innerList,isNotNull);
        expect(innerList.leftBracket,isNotNull);
        expect(innerList.arguments,hasLength(1));
        expect(innerList.rightBracket,isNotNull);
        expect(innerList.rightBracket.precedingComments,isNotNull);
    }
    test_parseTypeArgumentList_nested_withComment_tripple() : void {
        this.createParser('<A<B<C /* 0 */ >>>');
        let argumentList : any = this.parser.parseTypeArgumentList();
        this.expectNotNullIfNoErrors(argumentList);
        this.listener.assertNoErrors();
        expect(argumentList.leftBracket,isNotNull);
        expect(argumentList.rightBracket,isNotNull);
        expect(argumentList.arguments,hasLength(1));
        let argument : any = op(Op.INDEX,argumentList.arguments,0);
        expect(argument,isNotNull);
        let innerList : any = argument.typeArguments;
        expect(innerList,isNotNull);
        expect(innerList.leftBracket,isNotNull);
        expect(innerList.arguments,hasLength(1));
        expect(innerList.rightBracket,isNotNull);
        let innerArgument : any = op(Op.INDEX,innerList.arguments,0);
        expect(innerArgument,isNotNull);
        let innerInnerList : any = innerArgument.typeArguments;
        expect(innerInnerList,isNotNull);
        expect(innerInnerList.leftBracket,isNotNull);
        expect(innerInnerList.arguments,hasLength(1));
        expect(innerInnerList.rightBracket,isNotNull);
        expect(innerInnerList.rightBracket.precedingComments,isNotNull);
    }
    test_parseTypeArgumentList_single() : void {
        this.createParser('<int>');
        let argumentList : any = this.parser.parseTypeArgumentList();
        this.expectNotNullIfNoErrors(argumentList);
        this.listener.assertNoErrors();
        expect(argumentList.leftBracket,isNotNull);
        expect(argumentList.arguments,hasLength(1));
        expect(argumentList.rightBracket,isNotNull);
    }
    test_parseTypeName_parameterized() : void {
        this.createParser('List<int>');
        let typeName : any = this.parser.parseTypeName(false);
        this.expectNotNullIfNoErrors(typeName);
        this.listener.assertNoErrors();
        expect(typeName.name,isNotNull);
        expect(typeName.typeArguments,isNotNull);
        expect(typeName.question,isNull);
    }
    test_parseTypeName_parameterized_nullable() : void {
        this.enableNnbd = true;
        this.createParser('List<int>?');
        let typeName : any = this.parser.parseTypeName(false);
        this.expectNotNullIfNoErrors(typeName);
        this.listener.assertNoErrors();
        expect(typeName.name,isNotNull);
        expect(typeName.typeArguments,isNotNull);
        expect(typeName.question,isNotNull);
    }
    test_parseTypeName_simple() : void {
        this.createParser('int');
        let typeName : any = this.parser.parseTypeName(false);
        this.expectNotNullIfNoErrors(typeName);
        this.listener.assertNoErrors();
        expect(typeName.name,isNotNull);
        expect(typeName.typeArguments,isNull);
        expect(typeName.question,isNull);
    }
    test_parseTypeName_simple_nullable() : void {
        this.enableNnbd = true;
        this.createParser('String?');
        let typeName : any = this.parser.parseTypeName(false);
        this.expectNotNullIfNoErrors(typeName);
        this.listener.assertNoErrors();
        expect(typeName.name,isNotNull);
        expect(typeName.typeArguments,isNull);
        expect(typeName.question,isNotNull);
    }
    test_parseTypeParameter_bounded_functionType_noReturn() : void {
        this.createParser('A extends Function(int)');
        let parameter : any = this.parser.parseTypeParameter();
        this.expectNotNullIfNoErrors(parameter);
        this.listener.assertNoErrors();
        expect(parameter.bound,new bare.createInstance(any,null));
        expect(parameter.extendsKeyword,isNotNull);
        expect(parameter.name,isNotNull);
    }
    test_parseTypeParameter_bounded_functionType_return() : void {
        this.createParser('A extends String Function(int)');
        let parameter : any = this.parser.parseTypeParameter();
        this.expectNotNullIfNoErrors(parameter);
        this.listener.assertNoErrors();
        expect(parameter.bound,new bare.createInstance(any,null));
        expect(parameter.extendsKeyword,isNotNull);
        expect(parameter.name,isNotNull);
    }
    test_parseTypeParameter_bounded_generic() : void {
        this.createParser('A extends B<C>');
        let parameter : any = this.parser.parseTypeParameter();
        this.expectNotNullIfNoErrors(parameter);
        this.listener.assertNoErrors();
        expect(parameter.bound,new bare.createInstance(any,null));
        expect(parameter.extendsKeyword,isNotNull);
        expect(parameter.name,isNotNull);
    }
    test_parseTypeParameter_bounded_nullable() : void {
        this.enableNnbd = true;
        this.createParser('A extends B?');
        let parameter : any = this.parser.parseTypeParameter();
        this.expectNotNullIfNoErrors(parameter);
        this.listener.assertNoErrors();
        expect(parameter.bound,new bare.createInstance(any,null));
        expect(parameter.extendsKeyword,isNotNull);
        expect(parameter.name,isNotNull);
        let bound : any = parameter.bound;
        expect(bound,isNotNull);
        expect(bound.question,isNotNull);
    }
    test_parseTypeParameter_bounded_simple() : void {
        this.createParser('A extends B');
        let parameter : any = this.parser.parseTypeParameter();
        this.expectNotNullIfNoErrors(parameter);
        this.listener.assertNoErrors();
        expect(parameter.bound,new bare.createInstance(any,null));
        expect(parameter.extendsKeyword,isNotNull);
        expect(parameter.name,isNotNull);
    }
    test_parseTypeParameter_simple() : void {
        this.createParser('A');
        let parameter : any = this.parser.parseTypeParameter();
        this.expectNotNullIfNoErrors(parameter);
        this.listener.assertNoErrors();
        expect(parameter.bound,isNull);
        expect(parameter.extendsKeyword,isNull);
        expect(parameter.name,isNotNull);
    }
    test_parseTypeParameterList_multiple() : void {
        this.createParser('<A, B extends C, D>');
        let parameterList : any = this.parser.parseTypeParameterList();
        this.expectNotNullIfNoErrors(parameterList);
        this.listener.assertNoErrors();
        expect(parameterList.leftBracket,isNotNull);
        expect(parameterList.rightBracket,isNotNull);
        expect(parameterList.typeParameters,hasLength(3));
    }
    test_parseTypeParameterList_parameterizedWithTrailingEquals() : void {
        this.createParser('<A extends B<E>>=');
        let parameterList : any = this.parser.parseTypeParameterList();
        this.expectNotNullIfNoErrors(parameterList);
        this.listener.assertNoErrors();
        expect(parameterList.leftBracket,isNotNull);
        expect(parameterList.rightBracket,isNotNull);
        expect(parameterList.typeParameters,hasLength(1));
    }
    test_parseTypeParameterList_single() : void {
        this.createParser('<<A>');
        let parameterList : any = this.parser.parseTypeParameterList();
        this.expectNotNullIfNoErrors(parameterList);
        this.listener.assertNoErrors();
        expect(parameterList.leftBracket,isNotNull);
        expect(parameterList.rightBracket,isNotNull);
        expect(parameterList.typeParameters,hasLength(1));
    }
    test_parseTypeParameterList_withTrailingEquals() : void {
        this.createParser('<A>=');
        let parameterList : any = this.parser.parseTypeParameterList();
        this.expectNotNullIfNoErrors(parameterList);
        this.listener.assertNoErrors();
        expect(parameterList.leftBracket,isNotNull);
        expect(parameterList.rightBracket,isNotNull);
        expect(parameterList.typeParameters,hasLength(1));
    }
    test_parseVariableDeclaration_equals() : void {
        this.createParser('a = b');
        let declaration : any = this.parser.parseVariableDeclaration();
        this.expectNotNullIfNoErrors(declaration);
        this.listener.assertNoErrors();
        expect(declaration.name,isNotNull);
        expect(declaration.equals,isNotNull);
        expect(declaration.initializer,isNotNull);
    }
    test_parseVariableDeclaration_noEquals() : void {
        this.createParser('a');
        let declaration : any = this.parser.parseVariableDeclaration();
        this.expectNotNullIfNoErrors(declaration);
        this.listener.assertNoErrors();
        expect(declaration.name,isNotNull);
        expect(declaration.equals,isNull);
        expect(declaration.initializer,isNull);
    }
    test_parseWithClause_multiple() : void {
        this.createParser('with A, B, C');
        let clause : any = this.parser.parseWithClause();
        this.expectNotNullIfNoErrors(clause);
        this.listener.assertNoErrors();
        expect(clause.withKeyword,isNotNull);
        expect(clause.mixinTypes,hasLength(3));
    }
    test_parseWithClause_single() : void {
        this.createParser('with M');
        let clause : any = this.parser.parseWithClause();
        this.expectNotNullIfNoErrors(clause);
        this.listener.assertNoErrors();
        expect(clause.withKeyword,isNotNull);
        expect(clause.mixinTypes,hasLength(1));
    }
    test_skipPrefixedIdentifier_invalid() : void {
        this.createParser('+');
        let following : any = this.parser.skipPrefixedIdentifier(this.parser.currentToken);
        expect(following,isNull);
    }
    test_skipPrefixedIdentifier_notPrefixed() : void {
        this.createParser('a +');
        let following : any = this.parser.skipPrefixedIdentifier(this.parser.currentToken);
        expect(following,isNotNull);
        expect(following.type,TokenType.PLUS);
    }
    test_skipPrefixedIdentifier_prefixed() : void {
        this.createParser('a.b +');
        let following : any = this.parser.skipPrefixedIdentifier(this.parser.currentToken);
        expect(following,isNotNull);
        expect(following.type,TokenType.PLUS);
    }
    test_skipReturnType_invalid() : void {
        this.createParser('+');
        let following : any = this.parser.skipReturnType(this.parser.currentToken);
        expect(following,isNull);
    }
    test_skipReturnType_type() : void {
        this.createParser('C +');
        let following : any = this.parser.skipReturnType(this.parser.currentToken);
        expect(following,isNotNull);
        expect(following.type,TokenType.PLUS);
    }
    test_skipReturnType_void() : void {
        this.createParser('void +');
        let following : any = this.parser.skipReturnType(this.parser.currentToken);
        expect(following,isNotNull);
        expect(following.type,TokenType.PLUS);
    }
    test_skipSimpleIdentifier_identifier() : void {
        this.createParser('i +');
        let following : any = this.parser.skipSimpleIdentifier(this.parser.currentToken);
        expect(following,isNotNull);
        expect(following.type,TokenType.PLUS);
    }
    test_skipSimpleIdentifier_invalid() : void {
        this.createParser('9 +');
        let following : any = this.parser.skipSimpleIdentifier(this.parser.currentToken);
        expect(following,isNull);
    }
    test_skipSimpleIdentifier_pseudoKeyword() : void {
        this.createParser('as +');
        let following : any = this.parser.skipSimpleIdentifier(this.parser.currentToken);
        expect(following,isNotNull);
        expect(following.type,TokenType.PLUS);
    }
    test_skipStringLiteral_adjacent() : void {
        this.createParser("'a' 'b' +");
        let following : any = this.parser.skipStringLiteral(this.parser.currentToken);
        expect(following,isNotNull);
        expect(following.type,TokenType.PLUS);
    }
    test_skipStringLiteral_interpolated() : void {
        this.createParser("'a${b}c' +");
        let following : any = this.parser.skipStringLiteral(this.parser.currentToken);
        expect(following,isNotNull);
        expect(following.type,TokenType.PLUS);
    }
    test_skipStringLiteral_invalid() : void {
        this.createParser('a');
        let following : any = this.parser.skipStringLiteral(this.parser.currentToken);
        expect(following,isNull);
    }
    test_skipStringLiteral_single() : void {
        this.createParser("'a' +");
        let following : any = this.parser.skipStringLiteral(this.parser.currentToken);
        expect(following,isNotNull);
        expect(following.type,TokenType.PLUS);
    }
    test_skipTypeArgumentList_invalid() : void {
        this.createParser('+');
        let following : any = this.parser.skipTypeArgumentList(this.parser.currentToken);
        expect(following,isNull);
    }
    test_skipTypeArgumentList_multiple() : void {
        this.createParser('<E, F, G> +');
        let following : any = this.parser.skipTypeArgumentList(this.parser.currentToken);
        expect(following,isNotNull);
        expect(following.type,TokenType.PLUS);
    }
    test_skipTypeArgumentList_single() : void {
        this.createParser('<E> +');
        let following : any = this.parser.skipTypeArgumentList(this.parser.currentToken);
        expect(following,isNotNull);
        expect(following.type,TokenType.PLUS);
    }
    test_skipTypeName_invalid() : void {
        this.createParser('+');
        let following : any = this.parser.skipTypeName(this.parser.currentToken);
        expect(following,isNull);
    }
    test_skipTypeName_parameterized() : void {
        this.createParser('C<E<F<G>>> +');
        let following : any = this.parser.skipTypeName(this.parser.currentToken);
        expect(following,isNotNull);
        expect(following.type,TokenType.PLUS);
    }
    test_skipTypeName_simple() : void {
        this.createParser('C +');
        let following : any = this.parser.skipTypeName(this.parser.currentToken);
        expect(following,isNotNull);
        expect(following.type,TokenType.PLUS);
    }
    _computeStringValue(lexeme : string,first : boolean,last : boolean) : string {
        this.createParser('');
        let value : string = this.parser.computeStringValue(lexeme,first,last);
        this.listener.assertNoErrors();
        return value;
    }
    _isFunctionDeclaration(source : string) : boolean {
        this.createParser(source);
        let result : boolean = this.parser.isFunctionDeclaration();
        this.expectNotNullIfNoErrors(result);
        return result;
    }
    _isFunctionExpression(source : string) : boolean {
        this.createParser(source);
        return this.parser.isFunctionExpression(this.parser.currentToken);
    }
    _isInitializedVariableDeclaration(source : string) : boolean {
        this.createParser(source);
        let result : boolean = this.parser.isInitializedVariableDeclaration();
        this.expectNotNullIfNoErrors(result);
        return result;
    }
    _isSwitchMember(source : string) : boolean {
        this.createParser(source);
        let result : boolean = this.parser.isSwitchMember();
        this.expectNotNullIfNoErrors(result);
        return result;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SimpleParserTest() {
    }
}

export namespace StatementParserTest {
    export type Constructors = ParserTestCase.Constructors | 'StatementParserTest';
    export type Interface = Omit<StatementParserTest, Constructors>;
}
@DartClass
@With(StatementParserTestMixin)
export class StatementParserTest extends ParserTestCase implements StatementParserTestMixin.Interface {
    @Abstract
    test_parseAssertStatement() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssertStatement_messageLowPrecedence() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssertStatement_messageString() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBlock_empty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBlock_nonEmpty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBreakStatement_label() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBreakStatement_noLabel() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseContinueStatement_label() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseContinueStatement_noLabel() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDoStatement() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseEmptyStatement() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_each_await() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_each_identifier() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_each_noType_metadata() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_each_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_each_var() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_c() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_cu() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_ecu() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_i() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_i_withMetadata() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_ic() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_icu() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_iicuu() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_iu() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_u() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclarationStatement() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclarationStatement_typeParameterComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclarationStatement_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclarationStatement_typeParameters_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseIfStatement_else_block() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseIfStatement_else_statement() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseIfStatement_noElse_block() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseIfStatement_noElse_statement() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_const_list_empty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_const_list_nonEmpty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_const_map_empty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_const_map_nonEmpty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_const_object() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_const_object_named_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_constructorInvocation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_false() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_functionDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_functionDeclaration_arguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_functionExpressionIndex() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_functionInvocation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_invokeFunctionExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_localFunction_gftReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_null() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_startingWithBuiltInIdentifier() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_true() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_typeCast() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_variableDeclaration_final_namedFunction() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_variableDeclaration_gftType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_variableDeclaration_gftType_functionReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_variableDeclaration_gftType_gftReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_variableDeclaration_gftType_gftReturnType2() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_variableDeclaration_gftType_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_variableDeclaration_gftType_returnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_variableDeclaration_gftType_voidReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_emptyTypeArgumentList() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_function_gftReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_functionDeclaration_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_functionDeclaration_noReturnType_typeParameterComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_functionDeclaration_noReturnType_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_functionDeclaration_returnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_functionDeclaration_returnType_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_multipleLabels() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_noLabels() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_singleLabel() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSwitchStatement_case() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSwitchStatement_empty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSwitchStatement_labeledCase() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSwitchStatement_labeledDefault() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSwitchStatement_labeledStatementInCase() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTryStatement_catch() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTryStatement_catch_finally() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTryStatement_finally() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTryStatement_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTryStatement_on() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTryStatement_on_catch() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTryStatement_on_catch_finally() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_const_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_const_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_const_typeComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_dynamic_typeComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_final_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_final_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_final_typeComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_type_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_type_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_type_typeComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_var_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_var_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_var_typeComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationStatementAfterMetadata_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationStatementAfterMetadata_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseWhileStatement() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseYieldStatement_each() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseYieldStatement_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    _parseAsyncStatement(code : string,_namedArguments? : {isGenerator? : boolean}) : any {
        let {isGenerator} = Object.assign({
            "isGenerator" : false}, _namedArguments );
        throw 'from mixin';
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StatementParserTest() {
    }
}

export namespace TopLevelParserTest {
    export type Constructors = ParserTestCase.Constructors | 'TopLevelParserTest';
    export type Interface = Omit<TopLevelParserTest, Constructors>;
}
@DartClass
@With(TopLevelParserTestMixin)
export class TopLevelParserTest extends ParserTestCase implements TopLevelParserTestMixin.Interface {
    @Abstract
    test_function_literal_allowed_at_toplevel() : void {
        throw 'from mixin';
    }
    @Abstract
    test_function_literal_allowed_in_ArgumentList_in_ConstructorFieldInitializer() : void {
        throw 'from mixin';
    }
    @Abstract
    test_function_literal_allowed_in_IndexExpression_in_ConstructorFieldInitializer() : void {
        throw 'from mixin';
    }
    @Abstract
    test_function_literal_allowed_in_ListLiteral_in_ConstructorFieldInitializer() : void {
        throw 'from mixin';
    }
    @Abstract
    test_function_literal_allowed_in_MapLiteral_in_ConstructorFieldInitializer() : void {
        throw 'from mixin';
    }
    @Abstract
    test_function_literal_allowed_in_ParenthesizedExpression_in_ConstructorFieldInitializer() : void {
        throw 'from mixin';
    }
    @Abstract
    test_function_literal_allowed_in_StringInterpolation_in_ConstructorFieldInitializer() : void {
        throw 'from mixin';
    }
    @Abstract
    test_import_as_show() : void {
        throw 'from mixin';
    }
    @Abstract
    test_import_show_hide() : void {
        throw 'from mixin';
    }
    @Abstract
    test_import_withDocComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_abstract() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_empty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_extends() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_extendsAndImplements() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_extendsAndWith() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_extendsAndWithAndImplements() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_implements() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_metadata() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_native() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_nonEmpty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_typeAlias_implementsC() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_typeAlias_withB() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_withDocumentationComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassTypeAlias_withDocumentationComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_abstractAsPrefix_parameterized() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_builtIn_asFunctionName() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_directives_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_directives_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_empty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_exportAsPrefix() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_exportAsPrefix_parameterized() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_operatorAsPrefix_parameterized() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_script() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_skipFunctionBody_withInterpolation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_topLevelDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_typedefAsPrefix() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_abstractAsPrefix() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_class() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_classTypeAlias() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_constVariable() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_expressionFunctionBody_tokens() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_finalVariable() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_external_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_external_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_generic_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_generic_noReturnType_annotated() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_generic_returnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_generic_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_gftReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_getter_external_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_getter_external_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_getter_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_getter_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_setter_external_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_setter_external_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_setter_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_setter_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_typeAlias_abstract() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_typeAlias_generic() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_typeAlias_implements() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_typeAlias_noImplements() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_typedef() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_typedef_withDocComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_typedVariable() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_variable() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_variable_gftType_gftReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_variable_gftType_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_variable_withDocumentationComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_variableGet() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_variableSet() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_export() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_export_withDocComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_import() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_library() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_library_1_component() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_library_2_components() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_library_3_components() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_library_withDocumentationComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_part() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_part_of_1_component() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_part_of_2_components() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_part_of_3_components() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_part_of_withDocumentationComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_part_withDocumentationComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_partOf() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirectives_complete() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirectives_empty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirectives_mixed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirectives_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirectives_script() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirectives_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirectives_topLevelDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseEnumDeclaration_one() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseEnumDeclaration_trailingComma() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseEnumDeclaration_two() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseEnumDeclaration_withDocComment_onEnum() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseEnumDeclaration_withDocComment_onValue() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExportDirective_configuration_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExportDirective_configuration_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExportDirective_hide() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExportDirective_hide_show() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExportDirective_noCombinator() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExportDirective_show() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExportDirective_show_hide() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclaration_function() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclaration_functionWithTypeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclaration_functionWithTypeParameters_comment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclaration_getter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclaration_getter_generic_comment_returnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclaration_setter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseGenericTypeAlias_noTypeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseGenericTypeAlias_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseImportDirective_configuration_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseImportDirective_configuration_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseImportDirective_deferred() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseImportDirective_hide() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseImportDirective_noCombinator() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseImportDirective_prefix() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseImportDirective_prefix_hide_show() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseImportDirective_prefix_show_hide() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseImportDirective_show() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseLibraryDirective() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePartDirective() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePartOfDirective_name() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePartOfDirective_uri() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_function_noParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_function_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_function_parameterizedReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_function_parameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_function_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_function_voidReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_noParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_parameterizedReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_parameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_typeParameters_noParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_typeParameters_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_typeParameters_parameterizedReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_typeParameters_parameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_typeParameters_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_typeParameters_voidReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_voidReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_withDocComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeVariable_withDocumentationComment() : void {
        throw 'from mixin';
    }
    @Abstract
    _assertIsDeclarationName(name : any) : void {
        throw 'from mixin';
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TopLevelParserTest() {
    }
}

export class properties {
}
