/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/utilities_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_support";
import * as collection from "@dart2ts/dart/core";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AstClonerTest);
        defineReflectiveTests(BooleanArrayTest);
        defineReflectiveTests(DirectedGraphTest);
        defineReflectiveTests(ExceptionHandlingDelegatingAstVisitorTest);
        defineReflectiveTests(LineInfoTest);
        defineReflectiveTests(MultipleMapIteratorTest);
        defineReflectiveTests(NodeReplacerTest);
        defineReflectiveTests(SingleMapIteratorTest);
        defineReflectiveTests(SourceRangeTest);
        defineReflectiveTests(StringUtilitiesTest);
        defineReflectiveTests(TokenMapTest);
    });
};
export namespace Getter_NodeReplacerTest_test_forEachStatement_withIdentifier {
    export type Constructors = 'Getter_NodeReplacerTest_test_forEachStatement_withIdentifier';
    export type Interface = Omit<Getter_NodeReplacerTest_test_forEachStatement_withIdentifier, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_forEachStatement_withIdentifier implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.body;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_forEachStatement_withIdentifier() {
    }
}

export namespace AstClonerTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'AstClonerTest';
    export type Interface = Omit<AstClonerTest, Constructors>;
}
@DartClass
export class AstClonerTest extends lib3.EngineTestCase {
    test_visitAdjacentStrings() : void {
        this._assertCloneExpression("'a' 'b'");
    }
    test_visitAnnotation_constant() : void {
        this._assertCloneUnitMember('@A main() {}');
    }
    test_visitAnnotation_constructor() : void {
        this._assertCloneUnitMember('@A.c() main() {}');
    }
    test_visitAnnotation_withComment() : void {
        let clazz : any = this._parseUnitMember('/** comment */ @deprecated class A {}');
        let annotation : any = clazz.metadata.single;
        this._assertClone(annotation);
    }
    test_visitArgumentList() : void {
        this._assertCloneExpression('m(a, b)');
    }
    test_visitAsExpression() : void {
        this._assertCloneExpression('e as T');
    }
    test_visitAssertStatement() : void {
        this._assertCloneStatement('assert(a);');
    }
    test_visitAssignmentExpression() : void {
        this._assertCloneStatement('a = b;');
    }
    test_visitAwaitExpression() : void {
        this._assertCloneStatement('await a;');
    }
    test_visitBinaryExpression() : void {
        this._assertCloneExpression('a + b');
    }
    test_visitBlock_empty() : void {
        this._assertCloneStatement('{}');
    }
    test_visitBlock_nonEmpty() : void {
        this._assertCloneStatement('{ print(1); print(2); }');
    }
    test_visitBlockFunctionBody() : void {
        this._assertCloneUnitMember('main() {}');
    }
    test_visitBooleanLiteral_false() : void {
        this._assertCloneExpression('false');
    }
    test_visitBooleanLiteral_true() : void {
        this._assertCloneExpression('true');
    }
    test_visitBreakStatement_label() : void {
        this._assertCloneStatement('l: while(true) { break l; }');
    }
    test_visitBreakStatement_noLabel() : void {
        this._assertCloneStatement('while(true) { break; }');
    }
    test_visitCascadeExpression_field() : void {
        this._assertCloneExpression('a..b..c');
    }
    test_visitCascadeExpression_index() : void {
        this._assertCloneExpression('a..[0]..[1]');
    }
    test_visitCascadeExpression_method() : void {
        this._assertCloneExpression('a..b()..c()');
    }
    test_visitCatchClause_catch_noStack() : void {
        this._assertCloneStatement('try {} catch (e) {}');
    }
    test_visitCatchClause_catch_stack() : void {
        this._assertCloneStatement('try {} catch (e, s) {}');
    }
    test_visitCatchClause_on() : void {
        this._assertCloneStatement('try {} on E {}');
    }
    test_visitCatchClause_on_catch() : void {
        this._assertCloneStatement('try {} on E catch (e) {}');
    }
    test_visitClassDeclaration_abstract() : void {
        this._assertCloneUnitMember('abstract class C {}');
    }
    test_visitClassDeclaration_empty() : void {
        this._assertCloneUnitMember('class C {}');
    }
    test_visitClassDeclaration_extends() : void {
        this._assertCloneUnitMember('class C extends A {}');
    }
    test_visitClassDeclaration_extends_implements() : void {
        this._assertCloneUnitMember('class C extends A implements B {}');
    }
    test_visitClassDeclaration_extends_with() : void {
        this._assertCloneUnitMember('class C extends A with M {}');
    }
    test_visitClassDeclaration_extends_with_implements() : void {
        this._assertCloneUnitMember('class C extends A with M implements B {}');
    }
    test_visitClassDeclaration_implements() : void {
        this._assertCloneUnitMember('class C implements B {}');
    }
    test_visitClassDeclaration_multipleMember() : void {
        this._assertCloneUnitMember('class C { var a;  var b; }');
    }
    test_visitClassDeclaration_parameters() : void {
        this._assertCloneUnitMember('class C<E> {}');
    }
    test_visitClassDeclaration_parameters_extends() : void {
        this._assertCloneUnitMember('class C<E> extends A {}');
    }
    test_visitClassDeclaration_parameters_extends_implements() : void {
        this._assertCloneUnitMember('class C<E> extends A implements B {}');
    }
    test_visitClassDeclaration_parameters_extends_with() : void {
        this._assertCloneUnitMember('class C<E> extends A with M {}');
    }
    test_visitClassDeclaration_parameters_extends_with_implements() : void {
        this._assertCloneUnitMember('class C<E> extends A with M implements B {}');
    }
    test_visitClassDeclaration_parameters_implements() : void {
        this._assertCloneUnitMember('class C<E> implements B {}');
    }
    test_visitClassDeclaration_singleMember() : void {
        this._assertCloneUnitMember('class C { var a; }');
    }
    test_visitClassDeclaration_withMetadata() : void {
        this._assertCloneUnitMember('@deprecated class C {}');
    }
    test_visitClassTypeAlias_abstract() : void {
        this._assertCloneUnitMember('abstract class C = S with M1;');
    }
    test_visitClassTypeAlias_abstract_implements() : void {
        this._assertCloneUnitMember('abstract class C = S with M1 implements I;');
    }
    test_visitClassTypeAlias_generic() : void {
        this._assertCloneUnitMember('class C<E> = S<E> with M1<E>;');
    }
    test_visitClassTypeAlias_implements() : void {
        this._assertCloneUnitMember('class C = S with M1 implements I;');
    }
    test_visitClassTypeAlias_minimal() : void {
        this._assertCloneUnitMember('class C = S with M1;');
    }
    test_visitClassTypeAlias_parameters_abstract() : void {
        this._assertCloneUnitMember('abstract class C = S<E> with M1;');
    }
    test_visitClassTypeAlias_parameters_abstract_implements() : void {
        this._assertCloneUnitMember('abstract class C = S<E> with M1 implements I;');
    }
    test_visitClassTypeAlias_parameters_implements() : void {
        this._assertCloneUnitMember('class C = S<E> with M1 implements I;');
    }
    test_visitClassTypeAlias_withMetadata() : void {
        this._assertCloneUnitMember('@deprecated class C = S with M;');
    }
    test_visitComment() : void {
        this._assertCloneUnitMember('main() { print(1);  /* comment */  print(2); }');
    }
    test_visitComment_beginToken() : void {
        this._assertCloneUnitMember('/** comment */ main() {}');
    }
    test_visitCommentReference() : void {
        this._assertCloneUnitMember('/** ref [a]. */ main(a) {}');
    }
    test_visitCompilationUnit_declaration() : void {
        this._assertCloneUnitMember('var a;');
    }
    test_visitCompilationUnit_directive() : void {
        this._assertCloneUnit('library l;');
    }
    test_visitCompilationUnit_directive_declaration() : void {
        this._assertCloneUnit('library l;  var a;');
    }
    test_visitCompilationUnit_directive_withComment() : void {
        this._assertCloneUnit('/// aaa\n/// bbb\nlibrary l;');
    }
    test_visitCompilationUnit_empty() : void {
        this._assertCloneUnit('');
    }
    test_visitCompilationUnit_script() : void {
        this._assertCloneUnit('#!/bin/dartvm');
    }
    test_visitCompilationUnit_script_declaration() : void {
        this._assertCloneUnit('#!/bin/dartvm \n var a;');
    }
    test_visitCompilationUnit_script_directive() : void {
        this._assertCloneUnit('#!/bin/dartvm \n library l;');
    }
    test_visitCompilationUnit_script_directives_declarations() : void {
        this._assertCloneUnit('#!/bin/dartvm \n library l;  var a;');
    }
    test_visitConditionalExpression() : void {
        this._assertCloneExpression('a ? b : c');
    }
    test_visitConstructorDeclaration_const() : void {
        this._assertCloneUnitMember('class C { const C(); }');
    }
    test_visitConstructorDeclaration_external() : void {
        this._assertCloneUnitMember('class C { external C(); }');
    }
    test_visitConstructorDeclaration_minimal() : void {
        this._assertCloneUnitMember('class C { C() {} }');
    }
    test_visitConstructorDeclaration_multipleInitializers() : void {
        this._assertCloneUnitMember('class C { C() : a = b, c = d {} }');
    }
    test_visitConstructorDeclaration_multipleParameters() : void {
        this._assertCloneUnitMember('class C { C(var a, var b) {} }');
    }
    test_visitConstructorDeclaration_named() : void {
        this._assertCloneUnitMember('class C { C.m() {} }');
    }
    test_visitConstructorDeclaration_singleInitializer() : void {
        this._assertCloneUnitMember('class C { C() : a = b {} }');
    }
    test_visitConstructorDeclaration_withMetadata() : void {
        this._assertCloneUnitMember('class C { @deprecated C() {} }');
    }
    test_visitConstructorFieldInitializer_withoutThis() : void {
        this._assertCloneUnitMember('class C { C() : a = b {} }');
    }
    test_visitConstructorFieldInitializer_withThis() : void {
        this._assertCloneUnitMember('class C { C() : this.a = b {} }');
    }
    test_visitConstructorName_named_prefix() : void {
        this._assertCloneExpression('new p.C.n()');
    }
    test_visitConstructorName_unnamed_noPrefix() : void {
        this._assertCloneExpression('new C()');
    }
    test_visitConstructorName_unnamed_prefix() : void {
        this._assertCloneExpression('new p.C()');
    }
    test_visitContinueStatement_label() : void {
        this._assertCloneStatement('l: while (true) { continue l; }');
    }
    test_visitContinueStatement_noLabel() : void {
        this._assertCloneStatement('while (true) { continue; }');
    }
    test_visitDefaultFormalParameter_named_noValue() : void {
        this._assertCloneUnitMember('main({p}) {}');
    }
    test_visitDefaultFormalParameter_named_value() : void {
        this._assertCloneUnitMember('main({p : 0}) {}');
    }
    test_visitDefaultFormalParameter_positional_noValue() : void {
        this._assertCloneUnitMember('main([p]) {}');
    }
    test_visitDefaultFormalParameter_positional_value() : void {
        this._assertCloneUnitMember('main([p = 0]) {}');
    }
    test_visitDoStatement() : void {
        this._assertCloneStatement('do {} while (c);');
    }
    test_visitDoubleLiteral() : void {
        this._assertCloneExpression('4.2');
    }
    test_visitEmptyFunctionBody() : void {
        this._assertCloneUnitMember('main() {}');
    }
    test_visitEmptyStatement() : void {
        this._assertCloneUnitMember('main() { ; }');
    }
    test_visitExportDirective_combinator() : void {
        this._assertCloneUnit('export "a.dart" show A;');
    }
    test_visitExportDirective_combinators() : void {
        this._assertCloneUnit('export "a.dart" show A hide B;');
    }
    test_visitExportDirective_minimal() : void {
        this._assertCloneUnit('export "a.dart";');
    }
    test_visitExportDirective_withMetadata() : void {
        this._assertCloneUnit('@deprecated export "a.dart";');
    }
    test_visitExpressionFunctionBody() : void {
        this._assertCloneUnitMember('main() => a;');
    }
    test_visitExpressionStatement() : void {
        this._assertCloneStatement('a;');
    }
    test_visitExtendsClause() : void {
        this._assertCloneUnitMember('class A extends B {}');
    }
    test_visitFieldDeclaration_instance() : void {
        this._assertCloneUnitMember('class C { var a; }');
    }
    test_visitFieldDeclaration_static() : void {
        this._assertCloneUnitMember('class C { static var a; }');
    }
    test_visitFieldDeclaration_withMetadata() : void {
        this._assertCloneUnitMember('class C { @deprecated var a; }');
    }
    test_visitFieldFormalParameter_functionTyped() : void {
        this._assertCloneUnitMember('class C { C(A this.a(b)); }');
    }
    test_visitFieldFormalParameter_keyword() : void {
        this._assertCloneUnitMember('class C { C(var this.a); }');
    }
    test_visitFieldFormalParameter_keywordAndType() : void {
        this._assertCloneUnitMember('class C { C(final A this.a); }');
    }
    test_visitFieldFormalParameter_type() : void {
        this._assertCloneUnitMember('class C { C(A this.a); }');
    }
    test_visitForEachStatement_declared() : void {
        this._assertCloneStatement('for (var a in b) {}');
    }
    test_visitForEachStatement_variable() : void {
        this._assertCloneStatement('for (a in b) {}');
    }
    test_visitForEachStatement_variable_await() : void {
        this._assertCloneUnitMember('main(s) async { await for (a in s) {} }');
    }
    test_visitFormalParameterList_empty() : void {
        this._assertCloneUnitMember('main() {}');
    }
    test_visitFormalParameterList_n() : void {
        this._assertCloneUnitMember('main({a: 0}) {}');
    }
    test_visitFormalParameterList_nn() : void {
        this._assertCloneUnitMember('main({a: 0, b: 1}) {}');
    }
    test_visitFormalParameterList_p() : void {
        this._assertCloneUnitMember('main([a = 0]) {}');
    }
    test_visitFormalParameterList_pp() : void {
        this._assertCloneUnitMember('main([a = 0, b = 1]) {}');
    }
    test_visitFormalParameterList_r() : void {
        this._assertCloneUnitMember('main(a) {}');
    }
    test_visitFormalParameterList_rn() : void {
        this._assertCloneUnitMember('main(a, {b: 1}) {}');
    }
    test_visitFormalParameterList_rnn() : void {
        this._assertCloneUnitMember('main(a, {b: 1, c: 2}) {}');
    }
    test_visitFormalParameterList_rp() : void {
        this._assertCloneUnitMember('main(a, [b = 1]) {}');
    }
    test_visitFormalParameterList_rpp() : void {
        this._assertCloneUnitMember('main(a, [b = 1, c = 2]) {}');
    }
    test_visitFormalParameterList_rr() : void {
        this._assertCloneUnitMember('main(a, b) {}');
    }
    test_visitFormalParameterList_rrn() : void {
        this._assertCloneUnitMember('main(a, b, {c: 3}) {}');
    }
    test_visitFormalParameterList_rrnn() : void {
        this._assertCloneUnitMember('main(a, b, {c: 3, d: 4}) {}');
    }
    test_visitFormalParameterList_rrp() : void {
        this._assertCloneUnitMember('main(a, b, [c = 3]) {}');
    }
    test_visitFormalParameterList_rrpp() : void {
        this._assertCloneUnitMember('main(a, b, [c = 3, d = 4]) {}');
    }
    test_visitForStatement_c() : void {
        this._assertCloneStatement('for (; c;) {}');
    }
    test_visitForStatement_cu() : void {
        this._assertCloneStatement('for (; c; u) {}');
    }
    test_visitForStatement_e() : void {
        this._assertCloneStatement('for (e; ;) {}');
    }
    test_visitForStatement_ec() : void {
        this._assertCloneStatement('for (e; c;) {}');
    }
    test_visitForStatement_ecu() : void {
        this._assertCloneStatement('for (e; c; u) {}');
    }
    test_visitForStatement_eu() : void {
        this._assertCloneStatement('for (e; ; u) {}');
    }
    test_visitForStatement_i() : void {
        this._assertCloneStatement('for (var i; ;) {}');
    }
    test_visitForStatement_ic() : void {
        this._assertCloneStatement('for (var i; c;) {}');
    }
    test_visitForStatement_icu() : void {
        this._assertCloneStatement('for (var i; c; u) {}');
    }
    test_visitForStatement_iu() : void {
        this._assertCloneStatement('for (var i; ; u) {}');
    }
    test_visitForStatement_u() : void {
        this._assertCloneStatement('for (; ; u) {}');
    }
    test_visitFunctionDeclaration_getter() : void {
        this._assertCloneUnitMember('get f {}');
    }
    test_visitFunctionDeclaration_normal() : void {
        this._assertCloneUnitMember('f() {}');
    }
    test_visitFunctionDeclaration_setter() : void {
        this._assertCloneUnitMember('set f(x) {}');
    }
    test_visitFunctionDeclaration_withMetadata() : void {
        this._assertCloneUnitMember('@deprecated f() {}');
    }
    test_visitFunctionDeclarationStatement() : void {
        this._assertCloneStatement('f() {}');
    }
    test_visitFunctionExpressionInvocation() : void {
        this._assertCloneStatement('{ () {}(); }');
    }
    test_visitFunctionTypeAlias_generic() : void {
        this._assertCloneUnitMember('typedef A F<B>();');
    }
    test_visitFunctionTypeAlias_nonGeneric() : void {
        this._assertCloneUnitMember('typedef A F();');
    }
    test_visitFunctionTypeAlias_withMetadata() : void {
        this._assertCloneUnitMember('@deprecated typedef A F();');
    }
    test_visitFunctionTypedFormalParameter_noType() : void {
        this._assertCloneUnitMember('main( f() ) {}');
    }
    test_visitFunctionTypedFormalParameter_type() : void {
        this._assertCloneUnitMember('main( T f() ) {}');
    }
    test_visitIfStatement_withElse() : void {
        this._assertCloneStatement('if (c) {} else {}');
    }
    test_visitIfStatement_withoutElse() : void {
        this._assertCloneStatement('if (c) {}');
    }
    test_visitImplementsClause_multiple() : void {
        this._assertCloneUnitMember('class A implements B, C {}');
    }
    test_visitImplementsClause_single() : void {
        this._assertCloneUnitMember('class A implements B {}');
    }
    test_visitImportDirective_combinator() : void {
        this._assertCloneUnit('import "a.dart" show A;');
    }
    test_visitImportDirective_combinators() : void {
        this._assertCloneUnit('import "a.dart" show A hide B;');
    }
    test_visitImportDirective_minimal() : void {
        this._assertCloneUnit('import "a.dart";');
    }
    test_visitImportDirective_prefix() : void {
        this._assertCloneUnit('import "a.dart" as p;');
    }
    test_visitImportDirective_prefix_combinator() : void {
        this._assertCloneUnit('import "a.dart" as p show A;');
    }
    test_visitImportDirective_prefix_combinators() : void {
        this._assertCloneUnit('import "a.dart" as p show A hide B;');
    }
    test_visitImportDirective_withMetadata() : void {
        this._assertCloneUnit('@deprecated import "a.dart";');
    }
    test_visitImportHideCombinator_multiple() : void {
        this._assertCloneUnit('import "a.dart" hide a, b;');
    }
    test_visitImportHideCombinator_single() : void {
        this._assertCloneUnit('import "a.dart" hide a;');
    }
    test_visitImportShowCombinator_multiple() : void {
        this._assertCloneUnit('import "a.dart" show a, b;');
    }
    test_visitImportShowCombinator_single() : void {
        this._assertCloneUnit('import "a.dart" show a;');
    }
    test_visitIndexExpression() : void {
        this._assertCloneExpression('a[i]');
    }
    test_visitInstanceCreationExpression_const() : void {
        this._assertCloneExpression('const C()');
    }
    test_visitInstanceCreationExpression_named() : void {
        this._assertCloneExpression('new C.c()');
    }
    test_visitInstanceCreationExpression_unnamed() : void {
        this._assertCloneExpression('new C()');
    }
    test_visitIntegerLiteral() : void {
        this._assertCloneExpression('42');
    }
    test_visitInterpolationExpression_expression() : void {
        this._assertCloneExpression('"${c}"');
    }
    test_visitInterpolationExpression_identifier() : void {
        this._assertCloneExpression('"$c"');
    }
    test_visitIsExpression_negated() : void {
        this._assertCloneExpression('a is! C');
    }
    test_visitIsExpression_normal() : void {
        this._assertCloneExpression('a is C');
    }
    test_visitLabel() : void {
        this._assertCloneStatement('a: return;');
    }
    test_visitLabeledStatement_multiple() : void {
        this._assertCloneStatement('a: b: return;');
    }
    test_visitLabeledStatement_single() : void {
        this._assertCloneStatement('a: return;');
    }
    test_visitLibraryDirective() : void {
        this._assertCloneUnit('library l;');
    }
    test_visitLibraryDirective_withMetadata() : void {
        this._assertCloneUnit('@deprecated library l;');
    }
    test_visitLibraryIdentifier_multiple() : void {
        this._assertCloneUnit('library a.b.c;');
    }
    test_visitLibraryIdentifier_single() : void {
        this._assertCloneUnit('library a;');
    }
    test_visitListLiteral_const() : void {
        this._assertCloneExpression('const []');
    }
    test_visitListLiteral_empty() : void {
        this._assertCloneExpression('[]');
    }
    test_visitListLiteral_nonEmpty() : void {
        this._assertCloneExpression('[a, b, c]');
    }
    test_visitMapLiteral_const() : void {
        this._assertCloneExpression('const {}');
    }
    test_visitMapLiteral_empty() : void {
        this._assertCloneExpression('{}');
    }
    test_visitMapLiteral_nonEmpty() : void {
        this._assertCloneExpression('{a: a, b: b, c: c}');
    }
    test_visitMethodDeclaration_external() : void {
        this._assertCloneUnitMember('class C { external m(); }');
    }
    test_visitMethodDeclaration_external_returnType() : void {
        this._assertCloneUnitMember('class C { T m(); }');
    }
    test_visitMethodDeclaration_getter() : void {
        this._assertCloneUnitMember('class C { get m {} }');
    }
    test_visitMethodDeclaration_getter_returnType() : void {
        this._assertCloneUnitMember('class C { T get m {} }');
    }
    test_visitMethodDeclaration_minimal() : void {
        this._assertCloneUnitMember('class C { m() {} }');
    }
    test_visitMethodDeclaration_multipleParameters() : void {
        this._assertCloneUnitMember('class C { m(var a, var b) {} }');
    }
    test_visitMethodDeclaration_operator() : void {
        this._assertCloneUnitMember('class C { operator+() {} }');
    }
    test_visitMethodDeclaration_operator_returnType() : void {
        this._assertCloneUnitMember('class C { T operator+() {} }');
    }
    test_visitMethodDeclaration_returnType() : void {
        this._assertCloneUnitMember('class C { T m() {} }');
    }
    test_visitMethodDeclaration_setter() : void {
        this._assertCloneUnitMember('class C { set m(var v) {} }');
    }
    test_visitMethodDeclaration_setter_returnType() : void {
        this._assertCloneUnitMember('class C { T set m(v) {} }');
    }
    test_visitMethodDeclaration_static() : void {
        this._assertCloneUnitMember('class C { static m() {} }');
    }
    test_visitMethodDeclaration_static_returnType() : void {
        this._assertCloneUnitMember('class C { static T m() {} }');
    }
    test_visitMethodDeclaration_withMetadata() : void {
        this._assertCloneUnitMember('class C { @deprecated m() {} }');
    }
    test_visitMethodInvocation_noTarget() : void {
        this._assertCloneExpression('m()');
    }
    test_visitMethodInvocation_target() : void {
        this._assertCloneExpression('t.m()');
    }
    test_visitNamedExpression() : void {
        this._assertCloneExpression('m(a: b)');
    }
    test_visitNativeClause() : void {
        this._assertCloneUnitMember('f() native "code";');
    }
    test_visitNativeFunctionBody() : void {
        this._assertCloneUnitMember('f() native "str";');
    }
    test_visitNullLiteral() : void {
        this._assertCloneExpression('null');
    }
    test_visitParenthesizedExpression() : void {
        this._assertCloneExpression('(a)');
    }
    test_visitPartDirective() : void {
        this._assertCloneUnit('part "a.dart";');
    }
    test_visitPartDirective_withMetadata() : void {
        this._assertCloneUnit('@deprecated part "a.dart";');
    }
    test_visitPartOfDirective() : void {
        this._assertCloneUnit('part of l;');
    }
    test_visitPartOfDirective_withMetadata() : void {
        this._assertCloneUnit('@deprecated part of l;');
    }
    test_visitPositionalFormalParameter() : void {
        this._assertCloneUnitMember('main([var p = 0]) {}');
    }
    test_visitPostfixExpression() : void {
        this._assertCloneExpression('a++');
    }
    test_visitPrefixedIdentifier() : void {
        this._assertCloneExpression('a.b');
    }
    test_visitPrefixExpression() : void {
        this._assertCloneExpression('-a');
    }
    test_visitPropertyAccess() : void {
        this._assertCloneExpression('a.b.c');
    }
    test_visitRedirectingConstructorInvocation_named() : void {
        this._assertCloneUnitMember('class A { factory A() = B.b; }');
    }
    test_visitRedirectingConstructorInvocation_unnamed() : void {
        this._assertCloneUnitMember('class A { factory A() = B; }');
    }
    test_visitRethrowExpression() : void {
        this._assertCloneExpression('rethrow');
    }
    test_visitReturnStatement_expression() : void {
        this._assertCloneStatement('return a;');
    }
    test_visitReturnStatement_noExpression() : void {
        this._assertCloneStatement('return;');
    }
    test_visitScriptTag() : void {
        this._assertCloneUnit('#!/bin/dart.exe');
    }
    test_visitSimpleFormalParameter_keyword() : void {
        this._assertCloneUnitMember('main(var a) {}');
    }
    test_visitSimpleFormalParameter_keyword_type() : void {
        this._assertCloneUnitMember('main(final A a) {}');
    }
    test_visitSimpleFormalParameter_type() : void {
        this._assertCloneUnitMember('main(A a) {}');
    }
    test_visitSimpleIdentifier() : void {
        this._assertCloneExpression('a');
    }
    test_visitSimpleStringLiteral() : void {
        this._assertCloneExpression("'a'");
    }
    test_visitStringInterpolation() : void {
        this._assertCloneExpression("'a${e}b'");
    }
    test_visitSuperConstructorInvocation() : void {
        this._assertCloneUnitMember('class C { C() : super(); }');
    }
    test_visitSuperConstructorInvocation_named() : void {
        this._assertCloneUnitMember('class C { C() : super.c(); }');
    }
    test_visitSuperExpression() : void {
        this._assertCloneUnitMember('class C { m() { super.m(); } }');
    }
    test_visitSwitchCase_multipleLabels() : void {
        this._assertCloneStatement('switch (v) {l1: l2: case a: {} }');
    }
    test_visitSwitchCase_multipleStatements() : void {
        this._assertCloneStatement('switch (v) { case a: {} {} }');
    }
    test_visitSwitchCase_noLabels() : void {
        this._assertCloneStatement('switch (v) { case a: {} }');
    }
    test_visitSwitchCase_singleLabel() : void {
        this._assertCloneStatement('switch (v) { l1: case a: {} }');
    }
    test_visitSwitchDefault_multipleLabels() : void {
        this._assertCloneStatement('switch (v) { l1: l2: default: {} }');
    }
    test_visitSwitchDefault_multipleStatements() : void {
        this._assertCloneStatement('switch (v) { default: {} {} }');
    }
    test_visitSwitchDefault_noLabels() : void {
        this._assertCloneStatement('switch (v) { default: {} }');
    }
    test_visitSwitchDefault_singleLabel() : void {
        this._assertCloneStatement('switch (v) { l1: default: {} }');
    }
    test_visitSwitchStatement() : void {
        this._assertCloneStatement('switch (a) { case b: {} default: {} }');
    }
    test_visitSymbolLiteral_multiple() : void {
        this._assertCloneExpression('#a.b.c');
    }
    test_visitSymbolLiteral_single() : void {
        this._assertCloneExpression('#a');
    }
    test_visitThisExpression() : void {
        this._assertCloneExpression('this');
    }
    test_visitThrowStatement() : void {
        this._assertCloneStatement('throw e;');
    }
    test_visitTopLevelVariableDeclaration_multiple() : void {
        this._assertCloneUnitMember('var a;');
    }
    test_visitTopLevelVariableDeclaration_single() : void {
        this._assertCloneUnitMember('var a, b;');
    }
    test_visitTryStatement_catch() : void {
        this._assertCloneStatement('try {} on E {}');
    }
    test_visitTryStatement_catches() : void {
        this._assertCloneStatement('try {} on E {} on F {}');
    }
    test_visitTryStatement_catchFinally() : void {
        this._assertCloneStatement('try {} on E {} finally {}');
    }
    test_visitTryStatement_finally() : void {
        this._assertCloneStatement('try {} finally {}');
    }
    test_visitTypeName_multipleArgs() : void {
        this._assertCloneExpression('new C<D, E>()');
    }
    test_visitTypeName_nestedArg() : void {
        this._assertCloneExpression('new C<D<E>>()');
    }
    test_visitTypeName_noArgs() : void {
        this._assertCloneExpression('new C()');
    }
    test_visitTypeName_singleArg() : void {
        this._assertCloneExpression('new C<D>()');
    }
    test_visitTypeParameter_withExtends() : void {
        this._assertCloneUnitMember('class A<E extends C> {}');
    }
    test_visitTypeParameter_withMetadata() : void {
        this._assertCloneUnitMember('class A<@deprecated E> {}');
    }
    test_visitTypeParameter_withoutExtends() : void {
        this._assertCloneUnitMember('class A<E> {}');
    }
    test_visitTypeParameterList_multiple() : void {
        this._assertCloneUnitMember('class A<E, F> {}');
    }
    test_visitTypeParameterList_single() : void {
        this._assertCloneUnitMember('class A<E> {}');
    }
    test_visitVariableDeclaration_initialized() : void {
        this._assertCloneStatement('var a = b;');
    }
    test_visitVariableDeclaration_uninitialized() : void {
        this._assertCloneStatement('var a;');
    }
    test_visitVariableDeclarationList_const_type() : void {
        this._assertCloneStatement('const C a, b;');
    }
    test_visitVariableDeclarationList_final_noType() : void {
        this._assertCloneStatement('final a, b;');
    }
    test_visitVariableDeclarationList_final_withMetadata() : void {
        this._assertCloneStatement('@deprecated final a, b;');
    }
    test_visitVariableDeclarationList_type() : void {
        this._assertCloneStatement('C a, b;');
    }
    test_visitVariableDeclarationList_var() : void {
        this._assertCloneStatement('var a, b;');
    }
    test_visitVariableDeclarationStatement() : void {
        this._assertCloneStatement('C c;');
    }
    test_visitWhileStatement() : void {
        this._assertCloneStatement('while (c) {}');
    }
    test_visitWithClause_multiple() : void {
        this._assertCloneUnitMember('class X extends Y with A, B, C {}');
    }
    test_visitWithClause_single() : void {
        this._assertCloneUnitMember('class X extends Y with A {}');
    }
    test_visitYieldStatement() : void {
        this._assertCloneUnitMember('main() async* { yield 42; }');
    }
    _assertClone(node : any) : void {
        {
            let clone : any = node.accept(new bare.createInstance(any,null));
            let comparator : AstCloneComparator = new AstCloneComparator(false);
            if (!comparator.isEqualNodes(node,clone)) {
                fail(`Failed to clone ${node.runtimeType.toString()}`);
            }
            AstClonerTest._assertEqualTokens(clone,node);
        }
        {
            let clone : any = node.accept(new bare.createInstance(any,null,true));
            let comparator : AstCloneComparator = new AstCloneComparator(true);
            if (!comparator.isEqualNodes(node,clone)) {
                fail(`Failed to clone ${node.runtimeType.toString()}`);
            }
            AstClonerTest._assertEqualTokens(clone,node);
        }
    }
    _assertCloneExpression(code : string) : void {
        let node : any = this._parseExpression(code);
        this._assertClone(node);
    }
    _assertCloneStatement(code : string) : void {
        let node : any = this._parseStatement(code);
        this._assertClone(node);
    }
    _assertCloneUnit(code : string) : void {
        let node : any = this._parseUnit(code);
        this._assertClone(node);
    }
    _assertCloneUnitMember(code : string) : void {
        let node : any = this._parseUnitMember(code);
        this._assertClone(node);
    }
    _parseExpression(code : string) : any {
        let unit : any = this._parseUnit(`var v = ${code};`);
        let decl : any = unit.declarations.single;
        return decl.variables.variables.single.initializer;
    }
    _parseStatement(code : string) : any {
        let unit : any = this._parseUnit(`main() { ${code} }`);
        let main : any = unit.declarations.single;
        let body : any = main.functionExpression.body;
        return body.block.statements.single;
    }
    _parseUnit(code : string) : any {
        let listener : lib3.GatheringErrorListener = new lib3.GatheringErrorListener();
        let reader : any = new bare.createInstance(any,null,code);
        let scanner : any = new bare.createInstance(any,null,null,reader,listener);
        let token : any = scanner.tokenize();
        let parser : any = new bare.createInstance(any,null,null,listener);
        let unit : any = parser.parseCompilationUnit(token);
        expect(unit,isNotNull);
        listener.assertNoErrors();
        return unit;
    }
    _parseUnitMember(code : string) : any {
        let unit : any = this._parseUnit(code);
        return unit.declarations.single;
    }
    static _assertEqualToken(clone : any,original : any) : void {
        expect(clone.type,original.type);
        expect(clone.offset,original.offset);
        expect(clone.length,original.length);
        expect(clone.lexeme,original.lexeme);
    }
    static _assertEqualTokens(cloneNode : any,originalNode : any) : void {
        let clone : any = cloneNode.beginToken;
        let original : any = originalNode.beginToken;
        if (isNot(original, any)) {
            AstClonerTest._assertHasPrevious(original);
            AstClonerTest._assertHasPrevious(clone);
        }
        let stopOriginalToken : any = originalNode.endToken.next;
        let skipCloneComment : any = null;
        let skipOriginalComment : any = null;
        while (original != stopOriginalToken){
            expect(clone,isNotNull);
            AstClonerTest._assertEqualToken(clone,original);
            {
                let cloneComment : any = clone.precedingComments;
                let originalComment : any = original.precedingComments;
                if (cloneComment != skipCloneComment && originalComment != skipOriginalComment) {
                    while (true){
                        if (op(Op.EQUALS,originalComment,null)) {
                            expect(cloneComment,isNull);
                            break;
                        }
                        expect(cloneComment,isNotNull);
                        AstClonerTest._assertEqualToken(cloneComment,originalComment);
                        cloneComment = cloneComment.next;
                        originalComment = originalComment.next;
                    }
                }
            }
            if (is(original, any)) {
                expect(clone,new bare.createInstance(any,null));
                skipOriginalComment = original;
                skipCloneComment = clone;
                original = (original as any).parent;
                clone = (clone as any).parent;
            }else {
                clone = clone.next;
                original = original.next;
            }
        }
    }
    static _assertHasPrevious(token : any) : void {
        expect(token,isNotNull);
        if (op(Op.EQUALS,token.type,TokenType.EOF)) {
            return;
        }
        while (token != null){
            let previous : any = token.previous;
            expect(previous,isNotNull);
            if (op(Op.EQUALS,token.type,TokenType.EOF)) {
                expect(previous,same(token));
                break;
            }
            token = previous;
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AstClonerTest() {
    }
}

export namespace BooleanArrayTest {
    export type Constructors = 'BooleanArrayTest';
    export type Interface = Omit<BooleanArrayTest, Constructors>;
}
@DartClass
export class BooleanArrayTest {
    test_get_negative() : void {
        try {
            BooleanArray.get(0,-1);
            fail("Expected ");
        } catch (__error__) {

            if (is(__error__,core.RangeError)){
            }
        }
    }
    test_get_tooBig() : void {
        try {
            BooleanArray.get(0,31);
            fail("Expected ");
        } catch (__error__) {

            if (is(__error__,core.RangeError)){
            }
        }
    }
    test_get_valid() : void {
        expect(BooleanArray.get(0,0),false);
        expect(BooleanArray.get(1,0),true);
        expect(BooleanArray.get(0,30),false);
        expect(BooleanArray.get(1 << 30,30),true);
    }
    test_set_negative() : void {
        try {
            BooleanArray.set(0,-1,true);
            fail("Expected ");
        } catch (__error__) {

            if (is(__error__,core.RangeError)){
            }
        }
    }
    test_set_tooBig() : void {
        try {
            BooleanArray.set(0,32,true);
            fail("Expected ");
        } catch (__error__) {

            if (is(__error__,core.RangeError)){
            }
        }
    }
    test_set_valueChanging() : void {
        expect(BooleanArray.set(0,0,true),1);
        expect(BooleanArray.set(1,0,false),0);
        expect(BooleanArray.set(0,30,true),1 << 30);
        expect(BooleanArray.set(1 << 30,30,false),0);
    }
    test_set_valuePreserving() : void {
        expect(BooleanArray.set(0,0,false),0);
        expect(BooleanArray.set(1,0,true),1);
        expect(BooleanArray.set(0,30,false),0);
        expect(BooleanArray.set(1 << 30,30,true),1 << 30);
    }
    constructor() {
    }
    @defaultConstructor
    BooleanArrayTest() {
    }
}

export namespace DirectedGraphTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'DirectedGraphTest';
    export type Interface = Omit<DirectedGraphTest, Constructors>;
}
@DartClass
export class DirectedGraphTest extends lib3.EngineTestCase {
    test_addEdge() : void {
        let graph : any = new bare.createInstance(any,null);
        expect(graph.isEmpty,isTrue);
        graph.addEdge(new DirectedGraphTest_Node(),new DirectedGraphTest_Node());
        expect(graph.isEmpty,isFalse);
    }
    test_addNode() : void {
        let graph : any = new bare.createInstance(any,null);
        expect(graph.isEmpty,isTrue);
        graph.addNode(new DirectedGraphTest_Node());
        expect(graph.isEmpty,isFalse);
    }
    test_containsPath_noCycles() : void {
        let node1 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node2 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node3 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let graph : any = new bare.createInstance(any,null);
        graph.addEdge(node1,node2);
        graph.addEdge(node2,node3);
        expect(graph.containsPath(node1,node1),isTrue);
        expect(graph.containsPath(node1,node2),isTrue);
        expect(graph.containsPath(node1,node3),isTrue);
        expect(graph.containsPath(node2,node1),isFalse);
        expect(graph.containsPath(node2,node2),isTrue);
        expect(graph.containsPath(node2,node3),isTrue);
        expect(graph.containsPath(node3,node1),isFalse);
        expect(graph.containsPath(node3,node2),isFalse);
        expect(graph.containsPath(node3,node3),isTrue);
    }
    test_containsPath_withCycles() : void {
        let node1 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node2 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node3 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node4 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let graph : any = new bare.createInstance(any,null);
        graph.addEdge(node1,node2);
        graph.addEdge(node2,node1);
        graph.addEdge(node1,node3);
        graph.addEdge(node3,node4);
        graph.addEdge(node4,node3);
        expect(graph.containsPath(node1,node1),isTrue);
        expect(graph.containsPath(node1,node2),isTrue);
        expect(graph.containsPath(node1,node3),isTrue);
        expect(graph.containsPath(node1,node4),isTrue);
        expect(graph.containsPath(node2,node1),isTrue);
        expect(graph.containsPath(node2,node2),isTrue);
        expect(graph.containsPath(node2,node3),isTrue);
        expect(graph.containsPath(node2,node4),isTrue);
        expect(graph.containsPath(node3,node1),isFalse);
        expect(graph.containsPath(node3,node2),isFalse);
        expect(graph.containsPath(node3,node3),isTrue);
        expect(graph.containsPath(node3,node4),isTrue);
        expect(graph.containsPath(node4,node1),isFalse);
        expect(graph.containsPath(node4,node2),isFalse);
        expect(graph.containsPath(node4,node3),isTrue);
        expect(graph.containsPath(node4,node4),isTrue);
    }
    test_creation() : void {
        expect(new bare.createInstance(any,null),isNotNull);
    }
    test_findCycleContaining_complexCycle() : void {
        let node1 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node2 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node3 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node4 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node5 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let graph : any = new bare.createInstance(any,null);
        graph.addEdge(node1,node2);
        graph.addEdge(node2,node3);
        graph.addEdge(node3,node1);
        graph.addEdge(node3,node4);
        graph.addEdge(node4,node5);
        graph.addEdge(node5,node3);
        let cycle : core.DartList<DirectedGraphTest_Node> = graph.findCycleContaining(node1);
        expect(cycle,hasLength(5));
        expect(cycle.contains(node1),isTrue);
        expect(cycle.contains(node2),isTrue);
        expect(cycle.contains(node3),isTrue);
        expect(cycle.contains(node4),isTrue);
        expect(cycle.contains(node5),isTrue);
    }
    test_findCycleContaining_cycle() : void {
        let node1 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node2 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node3 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let graph : any = new bare.createInstance(any,null);
        graph.addEdge(node1,node2);
        graph.addEdge(node2,node3);
        graph.addEdge(node2,new DirectedGraphTest_Node());
        graph.addEdge(node3,node1);
        graph.addEdge(node3,new DirectedGraphTest_Node());
        let cycle : core.DartList<DirectedGraphTest_Node> = graph.findCycleContaining(node1);
        expect(cycle,hasLength(3));
        expect(cycle.contains(node1),isTrue);
        expect(cycle.contains(node2),isTrue);
        expect(cycle.contains(node3),isTrue);
    }
    test_findCycleContaining_notInGraph() : void {
        let node : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let graph : any = new bare.createInstance(any,null);
        let cycle : core.DartList<DirectedGraphTest_Node> = graph.findCycleContaining(node);
        expect(cycle,hasLength(1));
        expect(cycle[0],node);
    }
    test_findCycleContaining_null() : void {
        let graph : any = new bare.createInstance(any,null);
        expect(() =>  {
            return graph.findCycleContaining(null);
        },throwsArgumentError);
    }
    test_findCycleContaining_singleton() : void {
        let node1 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node2 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node3 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let graph : any = new bare.createInstance(any,null);
        graph.addEdge(node1,node2);
        graph.addEdge(node2,node3);
        let cycle : core.DartList<DirectedGraphTest_Node> = graph.findCycleContaining(node1);
        expect(cycle,hasLength(1));
        expect(cycle[0],node1);
    }
    test_getNodeCount() : void {
        let node1 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node2 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let graph : any = new bare.createInstance(any,null);
        expect(graph.nodeCount,0);
        graph.addNode(node1);
        expect(graph.nodeCount,1);
        graph.addNode(node2);
        expect(graph.nodeCount,2);
        graph.removeNode(node1);
        expect(graph.nodeCount,1);
    }
    test_getTails() : void {
        let node1 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node2 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node3 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let graph : any = new bare.createInstance(any,null);
        expect(graph.getTails(node1),hasLength(0));
        graph.addEdge(node1,node2);
        expect(graph.getTails(node1),hasLength(1));
        graph.addEdge(node1,node3);
        expect(graph.getTails(node1),hasLength(2));
    }
    test_removeAllNodes() : void {
        let node1 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node2 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let nodes : core.DartList<DirectedGraphTest_Node> = new core.DartList<DirectedGraphTest_Node>();
        nodes.add(node1);
        nodes.add(node2);
        let graph : any = new bare.createInstance(any,null);
        graph.addEdge(node1,node2);
        graph.addEdge(node2,node1);
        expect(graph.isEmpty,isFalse);
        graph.removeAllNodes(nodes);
        expect(graph.isEmpty,isTrue);
    }
    test_removeEdge() : void {
        let node1 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node2 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node3 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let graph : any = new bare.createInstance(any,null);
        graph.addEdge(node1,node2);
        graph.addEdge(node1,node3);
        expect(graph.getTails(node1),hasLength(2));
        graph.removeEdge(node1,node2);
        expect(graph.getTails(node1),hasLength(1));
    }
    test_removeNode() : void {
        let node1 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node2 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node3 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let graph : any = new bare.createInstance(any,null);
        graph.addEdge(node1,node2);
        graph.addEdge(node1,node3);
        expect(graph.getTails(node1),hasLength(2));
        graph.removeNode(node2);
        expect(graph.getTails(node1),hasLength(1));
    }
    test_removeSink() : void {
        let node1 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node2 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let graph : any = new bare.createInstance(any,null);
        graph.addEdge(node1,node2);
        expect(graph.removeSink(),same(node2));
        expect(graph.removeSink(),same(node1));
        expect(graph.isEmpty,isTrue);
    }
    test_topologicalSort_noCycles() : void {
        let node1 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node2 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node3 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let graph : any = new bare.createInstance(any,null);
        graph.addEdge(node1,node2);
        graph.addEdge(node1,node3);
        graph.addEdge(node2,node3);
        let topologicalSort : core.DartList<core.DartList<DirectedGraphTest_Node>> = graph.computeTopologicalSort();
        expect(topologicalSort,hasLength(3));
        expect(topologicalSort[0],hasLength(1));
        expect(topologicalSort[0][0],node3);
        expect(topologicalSort[1],hasLength(1));
        expect(topologicalSort[1][0],node2);
        expect(topologicalSort[2],hasLength(1));
        expect(topologicalSort[2][0],node1);
    }
    test_topologicalSort_withCycles() : void {
        let node1 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node2 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node3 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let node4 : DirectedGraphTest_Node = new DirectedGraphTest_Node();
        let graph : any = new bare.createInstance(any,null);
        graph.addEdge(node1,node2);
        graph.addEdge(node2,node1);
        graph.addEdge(node1,node3);
        graph.addEdge(node3,node4);
        graph.addEdge(node4,node3);
        let topologicalSort : core.DartList<core.DartList<DirectedGraphTest_Node>> = graph.computeTopologicalSort();
        expect(topologicalSort,hasLength(2));
        expect(topologicalSort[0],unorderedEquals(new core.DartList.literal(node3,node4)));
        expect(topologicalSort[1],unorderedEquals(new core.DartList.literal(node1,node2)));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DirectedGraphTest() {
    }
}

export namespace DirectedGraphTest_Node {
    export type Constructors = 'DirectedGraphTest_Node';
    export type Interface = Omit<DirectedGraphTest_Node, Constructors>;
}
@DartClass
export class DirectedGraphTest_Node {
    constructor() {
    }
    @defaultConstructor
    DirectedGraphTest_Node() {
    }
}

export namespace ExceptionHandlingDelegatingAstVisitorTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ExceptionHandlingDelegatingAstVisitorTest';
    export type Interface = Omit<ExceptionHandlingDelegatingAstVisitorTest, Constructors>;
}
@DartClass
export class ExceptionHandlingDelegatingAstVisitorTest extends lib3.EngineTestCase {
    test_handlerIsCalled() : void {
        let exceptionThrowingVisitor : any = new _ExceptionThrowingVisitor();
        let handlerInvoked : boolean = false;
        let visitor : any = new bare.createInstance(any,null,new core.DartList.literal(exceptionThrowingVisitor),(node : any,visitor : any,exception : any,stackTrace : core.DartStackTrace) =>  {
            handlerInvoked = true;
        });
        astFactory.nullLiteral(null).accept(visitor);
        expect(handlerInvoked,isTrue);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExceptionHandlingDelegatingAstVisitorTest() {
    }
}

export namespace Getter_NodeReplacerTest_test_annotation {
    export type Constructors = 'Getter_NodeReplacerTest_test_annotation';
    export type Interface = Omit<Getter_NodeReplacerTest_test_annotation, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_annotation implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.arguments;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_annotation() {
    }
}

export namespace Getter_NodeReplacerTest_test_annotation_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_annotation_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_annotation_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_annotation_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.name;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_annotation_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_annotation_3 {
    export type Constructors = 'Getter_NodeReplacerTest_test_annotation_3';
    export type Interface = Omit<Getter_NodeReplacerTest_test_annotation_3, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_annotation_3 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.constructorName;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_annotation_3() {
    }
}

export namespace Getter_NodeReplacerTest_test_asExpression {
    export type Constructors = 'Getter_NodeReplacerTest_test_asExpression';
    export type Interface = Omit<Getter_NodeReplacerTest_test_asExpression, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_asExpression implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.type;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_asExpression() {
    }
}

export namespace Getter_NodeReplacerTest_test_asExpression_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_asExpression_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_asExpression_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_asExpression_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.expression;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_asExpression_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_assertStatement {
    export type Constructors = 'Getter_NodeReplacerTest_test_assertStatement';
    export type Interface = Omit<Getter_NodeReplacerTest_test_assertStatement, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_assertStatement implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.condition;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_assertStatement() {
    }
}

export namespace Getter_NodeReplacerTest_test_assertStatement_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_assertStatement_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_assertStatement_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_assertStatement_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.message;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_assertStatement_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_assignmentExpression {
    export type Constructors = 'Getter_NodeReplacerTest_test_assignmentExpression';
    export type Interface = Omit<Getter_NodeReplacerTest_test_assignmentExpression, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_assignmentExpression implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.rightHandSide;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_assignmentExpression() {
    }
}

export namespace Getter_NodeReplacerTest_test_assignmentExpression_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_assignmentExpression_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_assignmentExpression_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_assignmentExpression_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.leftHandSide;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_assignmentExpression_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_awaitExpression {
    export type Constructors = 'Getter_NodeReplacerTest_test_awaitExpression';
    export type Interface = Omit<Getter_NodeReplacerTest_test_awaitExpression, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_awaitExpression implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.expression;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_awaitExpression() {
    }
}

export namespace Getter_NodeReplacerTest_test_binaryExpression {
    export type Constructors = 'Getter_NodeReplacerTest_test_binaryExpression';
    export type Interface = Omit<Getter_NodeReplacerTest_test_binaryExpression, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_binaryExpression implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.leftOperand;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_binaryExpression() {
    }
}

export namespace Getter_NodeReplacerTest_test_binaryExpression_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_binaryExpression_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_binaryExpression_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_binaryExpression_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.rightOperand;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_binaryExpression_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_blockFunctionBody {
    export type Constructors = 'Getter_NodeReplacerTest_test_blockFunctionBody';
    export type Interface = Omit<Getter_NodeReplacerTest_test_blockFunctionBody, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_blockFunctionBody implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.block;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_blockFunctionBody() {
    }
}

export namespace Getter_NodeReplacerTest_test_breakStatement {
    export type Constructors = 'Getter_NodeReplacerTest_test_breakStatement';
    export type Interface = Omit<Getter_NodeReplacerTest_test_breakStatement, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_breakStatement implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.label;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_breakStatement() {
    }
}

export namespace Getter_NodeReplacerTest_test_cascadeExpression {
    export type Constructors = 'Getter_NodeReplacerTest_test_cascadeExpression';
    export type Interface = Omit<Getter_NodeReplacerTest_test_cascadeExpression, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_cascadeExpression implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.target;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_cascadeExpression() {
    }
}

export namespace Getter_NodeReplacerTest_test_catchClause {
    export type Constructors = 'Getter_NodeReplacerTest_test_catchClause';
    export type Interface = Omit<Getter_NodeReplacerTest_test_catchClause, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_catchClause implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.stackTraceParameter;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_catchClause() {
    }
}

export namespace Getter_NodeReplacerTest_test_catchClause_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_catchClause_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_catchClause_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_catchClause_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.exceptionParameter;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_catchClause_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_catchClause_3 {
    export type Constructors = 'Getter_NodeReplacerTest_test_catchClause_3';
    export type Interface = Omit<Getter_NodeReplacerTest_test_catchClause_3, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_catchClause_3 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.exceptionType;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_catchClause_3() {
    }
}

export namespace Getter_NodeReplacerTest_test_classDeclaration {
    export type Constructors = 'Getter_NodeReplacerTest_test_classDeclaration';
    export type Interface = Omit<Getter_NodeReplacerTest_test_classDeclaration, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_classDeclaration implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.implementsClause;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_classDeclaration() {
    }
}

export namespace Getter_NodeReplacerTest_test_classDeclaration_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_classDeclaration_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_classDeclaration_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_classDeclaration_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.withClause;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_classDeclaration_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_classDeclaration_3 {
    export type Constructors = 'Getter_NodeReplacerTest_test_classDeclaration_3';
    export type Interface = Omit<Getter_NodeReplacerTest_test_classDeclaration_3, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_classDeclaration_3 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.nativeClause;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_classDeclaration_3() {
    }
}

export namespace Getter_NodeReplacerTest_test_classDeclaration_4 {
    export type Constructors = 'Getter_NodeReplacerTest_test_classDeclaration_4';
    export type Interface = Omit<Getter_NodeReplacerTest_test_classDeclaration_4, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_classDeclaration_4 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.extendsClause;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_classDeclaration_4() {
    }
}

export namespace Getter_NodeReplacerTest_test_classDeclaration_5 {
    export type Constructors = 'Getter_NodeReplacerTest_test_classDeclaration_5';
    export type Interface = Omit<Getter_NodeReplacerTest_test_classDeclaration_5, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_classDeclaration_5 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.typeParameters;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_classDeclaration_5() {
    }
}

export namespace Getter_NodeReplacerTest_test_classDeclaration_6 {
    export type Constructors = 'Getter_NodeReplacerTest_test_classDeclaration_6';
    export type Interface = Omit<Getter_NodeReplacerTest_test_classDeclaration_6, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_classDeclaration_6 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.name;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_classDeclaration_6() {
    }
}

export namespace Getter_NodeReplacerTest_test_classTypeAlias {
    export type Constructors = 'Getter_NodeReplacerTest_test_classTypeAlias';
    export type Interface = Omit<Getter_NodeReplacerTest_test_classTypeAlias, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_classTypeAlias implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.superclass;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_classTypeAlias() {
    }
}

export namespace Getter_NodeReplacerTest_test_classTypeAlias_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_classTypeAlias_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_classTypeAlias_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_classTypeAlias_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.implementsClause;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_classTypeAlias_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_classTypeAlias_3 {
    export type Constructors = 'Getter_NodeReplacerTest_test_classTypeAlias_3';
    export type Interface = Omit<Getter_NodeReplacerTest_test_classTypeAlias_3, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_classTypeAlias_3 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.withClause;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_classTypeAlias_3() {
    }
}

export namespace Getter_NodeReplacerTest_test_classTypeAlias_4 {
    export type Constructors = 'Getter_NodeReplacerTest_test_classTypeAlias_4';
    export type Interface = Omit<Getter_NodeReplacerTest_test_classTypeAlias_4, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_classTypeAlias_4 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.name;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_classTypeAlias_4() {
    }
}

export namespace Getter_NodeReplacerTest_test_classTypeAlias_5 {
    export type Constructors = 'Getter_NodeReplacerTest_test_classTypeAlias_5';
    export type Interface = Omit<Getter_NodeReplacerTest_test_classTypeAlias_5, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_classTypeAlias_5 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.typeParameters;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_classTypeAlias_5() {
    }
}

export namespace Getter_NodeReplacerTest_test_commentReference {
    export type Constructors = 'Getter_NodeReplacerTest_test_commentReference';
    export type Interface = Omit<Getter_NodeReplacerTest_test_commentReference, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_commentReference implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.identifier;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_commentReference() {
    }
}

export namespace Getter_NodeReplacerTest_test_compilationUnit {
    export type Constructors = 'Getter_NodeReplacerTest_test_compilationUnit';
    export type Interface = Omit<Getter_NodeReplacerTest_test_compilationUnit, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_compilationUnit implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.scriptTag;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_compilationUnit() {
    }
}

export namespace Getter_NodeReplacerTest_test_conditionalExpression {
    export type Constructors = 'Getter_NodeReplacerTest_test_conditionalExpression';
    export type Interface = Omit<Getter_NodeReplacerTest_test_conditionalExpression, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_conditionalExpression implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.elseExpression;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_conditionalExpression() {
    }
}

export namespace Getter_NodeReplacerTest_test_conditionalExpression_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_conditionalExpression_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_conditionalExpression_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_conditionalExpression_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.thenExpression;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_conditionalExpression_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_conditionalExpression_3 {
    export type Constructors = 'Getter_NodeReplacerTest_test_conditionalExpression_3';
    export type Interface = Omit<Getter_NodeReplacerTest_test_conditionalExpression_3, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_conditionalExpression_3 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.condition;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_conditionalExpression_3() {
    }
}

export namespace Getter_NodeReplacerTest_test_constructorDeclaration {
    export type Constructors = 'Getter_NodeReplacerTest_test_constructorDeclaration';
    export type Interface = Omit<Getter_NodeReplacerTest_test_constructorDeclaration, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_constructorDeclaration implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.redirectedConstructor;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_constructorDeclaration() {
    }
}

export namespace Getter_NodeReplacerTest_test_constructorDeclaration_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_constructorDeclaration_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_constructorDeclaration_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_constructorDeclaration_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.name;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_constructorDeclaration_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_constructorDeclaration_3 {
    export type Constructors = 'Getter_NodeReplacerTest_test_constructorDeclaration_3';
    export type Interface = Omit<Getter_NodeReplacerTest_test_constructorDeclaration_3, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_constructorDeclaration_3 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.returnType;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_constructorDeclaration_3() {
    }
}

export namespace Getter_NodeReplacerTest_test_constructorDeclaration_4 {
    export type Constructors = 'Getter_NodeReplacerTest_test_constructorDeclaration_4';
    export type Interface = Omit<Getter_NodeReplacerTest_test_constructorDeclaration_4, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_constructorDeclaration_4 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.parameters;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_constructorDeclaration_4() {
    }
}

export namespace Getter_NodeReplacerTest_test_constructorDeclaration_5 {
    export type Constructors = 'Getter_NodeReplacerTest_test_constructorDeclaration_5';
    export type Interface = Omit<Getter_NodeReplacerTest_test_constructorDeclaration_5, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_constructorDeclaration_5 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.body;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_constructorDeclaration_5() {
    }
}

export namespace Getter_NodeReplacerTest_test_constructorFieldInitializer {
    export type Constructors = 'Getter_NodeReplacerTest_test_constructorFieldInitializer';
    export type Interface = Omit<Getter_NodeReplacerTest_test_constructorFieldInitializer, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_constructorFieldInitializer implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.fieldName;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_constructorFieldInitializer() {
    }
}

export namespace Getter_NodeReplacerTest_test_constructorFieldInitializer_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_constructorFieldInitializer_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_constructorFieldInitializer_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_constructorFieldInitializer_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.expression;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_constructorFieldInitializer_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_constructorName {
    export type Constructors = 'Getter_NodeReplacerTest_test_constructorName';
    export type Interface = Omit<Getter_NodeReplacerTest_test_constructorName, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_constructorName implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.type;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_constructorName() {
    }
}

export namespace Getter_NodeReplacerTest_test_constructorName_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_constructorName_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_constructorName_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_constructorName_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.name;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_constructorName_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_continueStatement {
    export type Constructors = 'Getter_NodeReplacerTest_test_continueStatement';
    export type Interface = Omit<Getter_NodeReplacerTest_test_continueStatement, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_continueStatement implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.label;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_continueStatement() {
    }
}

export namespace Getter_NodeReplacerTest_test_declaredIdentifier {
    export type Constructors = 'Getter_NodeReplacerTest_test_declaredIdentifier';
    export type Interface = Omit<Getter_NodeReplacerTest_test_declaredIdentifier, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_declaredIdentifier implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.type;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_declaredIdentifier() {
    }
}

export namespace Getter_NodeReplacerTest_test_declaredIdentifier_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_declaredIdentifier_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_declaredIdentifier_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_declaredIdentifier_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.identifier;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_declaredIdentifier_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_defaultFormalParameter {
    export type Constructors = 'Getter_NodeReplacerTest_test_defaultFormalParameter';
    export type Interface = Omit<Getter_NodeReplacerTest_test_defaultFormalParameter, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_defaultFormalParameter implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.parameter;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_defaultFormalParameter() {
    }
}

export namespace Getter_NodeReplacerTest_test_defaultFormalParameter_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_defaultFormalParameter_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_defaultFormalParameter_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_defaultFormalParameter_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.defaultValue;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_defaultFormalParameter_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_doStatement {
    export type Constructors = 'Getter_NodeReplacerTest_test_doStatement';
    export type Interface = Omit<Getter_NodeReplacerTest_test_doStatement, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_doStatement implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.condition;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_doStatement() {
    }
}

export namespace Getter_NodeReplacerTest_test_doStatement_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_doStatement_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_doStatement_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_doStatement_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.body;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_doStatement_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_enumConstantDeclaration {
    export type Constructors = 'Getter_NodeReplacerTest_test_enumConstantDeclaration';
    export type Interface = Omit<Getter_NodeReplacerTest_test_enumConstantDeclaration, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_enumConstantDeclaration implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.name;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_enumConstantDeclaration() {
    }
}

export namespace Getter_NodeReplacerTest_test_enumDeclaration {
    export type Constructors = 'Getter_NodeReplacerTest_test_enumDeclaration';
    export type Interface = Omit<Getter_NodeReplacerTest_test_enumDeclaration, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_enumDeclaration implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.name;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_enumDeclaration() {
    }
}

export namespace Getter_NodeReplacerTest_test_expressionFunctionBody {
    export type Constructors = 'Getter_NodeReplacerTest_test_expressionFunctionBody';
    export type Interface = Omit<Getter_NodeReplacerTest_test_expressionFunctionBody, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_expressionFunctionBody implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.expression;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_expressionFunctionBody() {
    }
}

export namespace Getter_NodeReplacerTest_test_expressionStatement {
    export type Constructors = 'Getter_NodeReplacerTest_test_expressionStatement';
    export type Interface = Omit<Getter_NodeReplacerTest_test_expressionStatement, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_expressionStatement implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.expression;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_expressionStatement() {
    }
}

export namespace Getter_NodeReplacerTest_test_extendsClause {
    export type Constructors = 'Getter_NodeReplacerTest_test_extendsClause';
    export type Interface = Omit<Getter_NodeReplacerTest_test_extendsClause, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_extendsClause implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.superclass;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_extendsClause() {
    }
}

export namespace Getter_NodeReplacerTest_test_fieldDeclaration {
    export type Constructors = 'Getter_NodeReplacerTest_test_fieldDeclaration';
    export type Interface = Omit<Getter_NodeReplacerTest_test_fieldDeclaration, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_fieldDeclaration implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.fields;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_fieldDeclaration() {
    }
}

export namespace Getter_NodeReplacerTest_test_fieldFormalParameter {
    export type Constructors = 'Getter_NodeReplacerTest_test_fieldFormalParameter';
    export type Interface = Omit<Getter_NodeReplacerTest_test_fieldFormalParameter, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_fieldFormalParameter implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.parameters;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_fieldFormalParameter() {
    }
}

export namespace Getter_NodeReplacerTest_test_fieldFormalParameter_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_fieldFormalParameter_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_fieldFormalParameter_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_fieldFormalParameter_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.type;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_fieldFormalParameter_2() {
    }
}

export namespace AstCloneComparator {
    export type Constructors = 'AstCloneComparator';
    export type Interface = Omit<AstCloneComparator, Constructors>;
}
@DartClass
export class AstCloneComparator extends any {
    expectTokensCopied : boolean;

    constructor(expectTokensCopied : boolean) {
    }
    @defaultConstructor
    AstCloneComparator(expectTokensCopied : boolean) {
        this.expectTokensCopied = expectTokensCopied;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isEqualNodes(first : any,second : any) : boolean {
        if (first != null && core.identical(first,second)) {
            fail(`Failed to copy node: ${first} (${first.offset})`);
            return false;
        }
        return super.isEqualNodes(first,second);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isEqualTokens(first : any,second : any) : boolean {
        if (this.expectTokensCopied && first != null && core.identical(first,second)) {
            fail(`Failed to copy token: ${first.lexeme} (${first.offset})`);
            return false;
        }
        if (is(first, any)) {
            let comment : any = first.precedingComments;
            if (comment.parent != first) {
                fail(`Failed to link the comment "${comment}" with the token "${first}".`);
            }
        }
        return super.isEqualTokens(first,second);
    }
}

export namespace Getter_NodeReplacerTest_test_forEachStatement_withIdentifier_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_forEachStatement_withIdentifier_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_forEachStatement_withIdentifier_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_forEachStatement_withIdentifier_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.identifier;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_forEachStatement_withIdentifier_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_forEachStatement_withIdentifier_3 {
    export type Constructors = 'Getter_NodeReplacerTest_test_forEachStatement_withIdentifier_3';
    export type Interface = Omit<Getter_NodeReplacerTest_test_forEachStatement_withIdentifier_3, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_forEachStatement_withIdentifier_3 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.iterable;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_forEachStatement_withIdentifier_3() {
    }
}

export namespace Getter_NodeReplacerTest_test_forEachStatement_withLoopVariable {
    export type Constructors = 'Getter_NodeReplacerTest_test_forEachStatement_withLoopVariable';
    export type Interface = Omit<Getter_NodeReplacerTest_test_forEachStatement_withLoopVariable, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_forEachStatement_withLoopVariable implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.iterable;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_forEachStatement_withLoopVariable() {
    }
}

export namespace Getter_NodeReplacerTest_test_forEachStatement_withLoopVariable_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_forEachStatement_withLoopVariable_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_forEachStatement_withLoopVariable_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_forEachStatement_withLoopVariable_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.loopVariable;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_forEachStatement_withLoopVariable_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_forEachStatement_withLoopVariable_3 {
    export type Constructors = 'Getter_NodeReplacerTest_test_forEachStatement_withLoopVariable_3';
    export type Interface = Omit<Getter_NodeReplacerTest_test_forEachStatement_withLoopVariable_3, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_forEachStatement_withLoopVariable_3 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.body;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_forEachStatement_withLoopVariable_3() {
    }
}

export namespace Getter_NodeReplacerTest_test_forStatement_withInitialization {
    export type Constructors = 'Getter_NodeReplacerTest_test_forStatement_withInitialization';
    export type Interface = Omit<Getter_NodeReplacerTest_test_forStatement_withInitialization, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_forStatement_withInitialization implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.body;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_forStatement_withInitialization() {
    }
}

export namespace Getter_NodeReplacerTest_test_forStatement_withInitialization_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_forStatement_withInitialization_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_forStatement_withInitialization_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_forStatement_withInitialization_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.condition;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_forStatement_withInitialization_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_forStatement_withInitialization_3 {
    export type Constructors = 'Getter_NodeReplacerTest_test_forStatement_withInitialization_3';
    export type Interface = Omit<Getter_NodeReplacerTest_test_forStatement_withInitialization_3, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_forStatement_withInitialization_3 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.initialization;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_forStatement_withInitialization_3() {
    }
}

export namespace Getter_NodeReplacerTest_test_forStatement_withVariables {
    export type Constructors = 'Getter_NodeReplacerTest_test_forStatement_withVariables';
    export type Interface = Omit<Getter_NodeReplacerTest_test_forStatement_withVariables, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_forStatement_withVariables implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.body;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_forStatement_withVariables() {
    }
}

export namespace Getter_NodeReplacerTest_test_forStatement_withVariables_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_forStatement_withVariables_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_forStatement_withVariables_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_forStatement_withVariables_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.variables;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_forStatement_withVariables_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_forStatement_withVariables_3 {
    export type Constructors = 'Getter_NodeReplacerTest_test_forStatement_withVariables_3';
    export type Interface = Omit<Getter_NodeReplacerTest_test_forStatement_withVariables_3, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_forStatement_withVariables_3 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.condition;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_forStatement_withVariables_3() {
    }
}

export namespace Getter_NodeReplacerTest_test_functionDeclaration {
    export type Constructors = 'Getter_NodeReplacerTest_test_functionDeclaration';
    export type Interface = Omit<Getter_NodeReplacerTest_test_functionDeclaration, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_functionDeclaration implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.returnType;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_functionDeclaration() {
    }
}

export namespace Getter_NodeReplacerTest_test_functionDeclaration_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_functionDeclaration_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_functionDeclaration_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_functionDeclaration_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.functionExpression;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_functionDeclaration_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_functionDeclaration_3 {
    export type Constructors = 'Getter_NodeReplacerTest_test_functionDeclaration_3';
    export type Interface = Omit<Getter_NodeReplacerTest_test_functionDeclaration_3, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_functionDeclaration_3 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.name;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_functionDeclaration_3() {
    }
}

export namespace Getter_NodeReplacerTest_test_functionDeclarationStatement {
    export type Constructors = 'Getter_NodeReplacerTest_test_functionDeclarationStatement';
    export type Interface = Omit<Getter_NodeReplacerTest_test_functionDeclarationStatement, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_functionDeclarationStatement implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.functionDeclaration;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_functionDeclarationStatement() {
    }
}

export namespace Getter_NodeReplacerTest_test_functionExpression {
    export type Constructors = 'Getter_NodeReplacerTest_test_functionExpression';
    export type Interface = Omit<Getter_NodeReplacerTest_test_functionExpression, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_functionExpression implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.parameters;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_functionExpression() {
    }
}

export namespace Getter_NodeReplacerTest_test_functionExpression_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_functionExpression_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_functionExpression_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_functionExpression_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.body;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_functionExpression_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_functionExpressionInvocation {
    export type Constructors = 'Getter_NodeReplacerTest_test_functionExpressionInvocation';
    export type Interface = Omit<Getter_NodeReplacerTest_test_functionExpressionInvocation, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_functionExpressionInvocation implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.function;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_functionExpressionInvocation() {
    }
}

export namespace Getter_NodeReplacerTest_test_functionExpressionInvocation_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_functionExpressionInvocation_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_functionExpressionInvocation_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_functionExpressionInvocation_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.argumentList;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_functionExpressionInvocation_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_functionTypeAlias {
    export type Constructors = 'Getter_NodeReplacerTest_test_functionTypeAlias';
    export type Interface = Omit<Getter_NodeReplacerTest_test_functionTypeAlias, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_functionTypeAlias implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.typeParameters;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_functionTypeAlias() {
    }
}

export namespace Getter_NodeReplacerTest_test_functionTypeAlias_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_functionTypeAlias_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_functionTypeAlias_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_functionTypeAlias_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.parameters;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_functionTypeAlias_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_functionTypeAlias_3 {
    export type Constructors = 'Getter_NodeReplacerTest_test_functionTypeAlias_3';
    export type Interface = Omit<Getter_NodeReplacerTest_test_functionTypeAlias_3, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_functionTypeAlias_3 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.returnType;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_functionTypeAlias_3() {
    }
}

export namespace Getter_NodeReplacerTest_test_functionTypeAlias_4 {
    export type Constructors = 'Getter_NodeReplacerTest_test_functionTypeAlias_4';
    export type Interface = Omit<Getter_NodeReplacerTest_test_functionTypeAlias_4, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_functionTypeAlias_4 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.name;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_functionTypeAlias_4() {
    }
}

export namespace Getter_NodeReplacerTest_test_functionTypedFormalParameter {
    export type Constructors = 'Getter_NodeReplacerTest_test_functionTypedFormalParameter';
    export type Interface = Omit<Getter_NodeReplacerTest_test_functionTypedFormalParameter, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_functionTypedFormalParameter implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.returnType;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_functionTypedFormalParameter() {
    }
}

export namespace Getter_NodeReplacerTest_test_functionTypedFormalParameter_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_functionTypedFormalParameter_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_functionTypedFormalParameter_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_functionTypedFormalParameter_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.parameters;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_functionTypedFormalParameter_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_ifStatement {
    export type Constructors = 'Getter_NodeReplacerTest_test_ifStatement';
    export type Interface = Omit<Getter_NodeReplacerTest_test_ifStatement, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_ifStatement implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.condition;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_ifStatement() {
    }
}

export namespace Getter_NodeReplacerTest_test_ifStatement_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_ifStatement_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_ifStatement_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_ifStatement_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.elseStatement;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_ifStatement_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_ifStatement_3 {
    export type Constructors = 'Getter_NodeReplacerTest_test_ifStatement_3';
    export type Interface = Omit<Getter_NodeReplacerTest_test_ifStatement_3, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_ifStatement_3 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.thenStatement;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_ifStatement_3() {
    }
}

export namespace Getter_NodeReplacerTest_test_importDirective {
    export type Constructors = 'Getter_NodeReplacerTest_test_importDirective';
    export type Interface = Omit<Getter_NodeReplacerTest_test_importDirective, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_importDirective implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.prefix;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_importDirective() {
    }
}

export namespace Getter_NodeReplacerTest_test_indexExpression {
    export type Constructors = 'Getter_NodeReplacerTest_test_indexExpression';
    export type Interface = Omit<Getter_NodeReplacerTest_test_indexExpression, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_indexExpression implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.target;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_indexExpression() {
    }
}

export namespace Getter_NodeReplacerTest_test_indexExpression_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_indexExpression_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_indexExpression_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_indexExpression_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.index;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_indexExpression_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_instanceCreationExpression {
    export type Constructors = 'Getter_NodeReplacerTest_test_instanceCreationExpression';
    export type Interface = Omit<Getter_NodeReplacerTest_test_instanceCreationExpression, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_instanceCreationExpression implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.argumentList;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_instanceCreationExpression() {
    }
}

export namespace Getter_NodeReplacerTest_test_instanceCreationExpression_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_instanceCreationExpression_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_instanceCreationExpression_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_instanceCreationExpression_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.constructorName;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_instanceCreationExpression_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_interpolationExpression {
    export type Constructors = 'Getter_NodeReplacerTest_test_interpolationExpression';
    export type Interface = Omit<Getter_NodeReplacerTest_test_interpolationExpression, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_interpolationExpression implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.expression;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_interpolationExpression() {
    }
}

export namespace Getter_NodeReplacerTest_test_isExpression {
    export type Constructors = 'Getter_NodeReplacerTest_test_isExpression';
    export type Interface = Omit<Getter_NodeReplacerTest_test_isExpression, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_isExpression implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.expression;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_isExpression() {
    }
}

export namespace Getter_NodeReplacerTest_test_isExpression_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_isExpression_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_isExpression_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_isExpression_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.type;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_isExpression_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_label {
    export type Constructors = 'Getter_NodeReplacerTest_test_label';
    export type Interface = Omit<Getter_NodeReplacerTest_test_label, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_label implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.label;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_label() {
    }
}

export namespace Getter_NodeReplacerTest_test_labeledStatement {
    export type Constructors = 'Getter_NodeReplacerTest_test_labeledStatement';
    export type Interface = Omit<Getter_NodeReplacerTest_test_labeledStatement, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_labeledStatement implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.statement;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_labeledStatement() {
    }
}

export namespace Getter_NodeReplacerTest_test_libraryDirective {
    export type Constructors = 'Getter_NodeReplacerTest_test_libraryDirective';
    export type Interface = Omit<Getter_NodeReplacerTest_test_libraryDirective, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_libraryDirective implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.name;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_libraryDirective() {
    }
}

export namespace Getter_NodeReplacerTest_test_mapLiteralEntry {
    export type Constructors = 'Getter_NodeReplacerTest_test_mapLiteralEntry';
    export type Interface = Omit<Getter_NodeReplacerTest_test_mapLiteralEntry, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_mapLiteralEntry implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.value;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_mapLiteralEntry() {
    }
}

export namespace Getter_NodeReplacerTest_test_mapLiteralEntry_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_mapLiteralEntry_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_mapLiteralEntry_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_mapLiteralEntry_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.key;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_mapLiteralEntry_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_methodDeclaration {
    export type Constructors = 'Getter_NodeReplacerTest_test_methodDeclaration';
    export type Interface = Omit<Getter_NodeReplacerTest_test_methodDeclaration, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_methodDeclaration implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.returnType;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_methodDeclaration() {
    }
}

export namespace Getter_NodeReplacerTest_test_methodDeclaration_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_methodDeclaration_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_methodDeclaration_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_methodDeclaration_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.body;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_methodDeclaration_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_methodDeclaration_3 {
    export type Constructors = 'Getter_NodeReplacerTest_test_methodDeclaration_3';
    export type Interface = Omit<Getter_NodeReplacerTest_test_methodDeclaration_3, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_methodDeclaration_3 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.name;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_methodDeclaration_3() {
    }
}

export namespace Getter_NodeReplacerTest_test_methodDeclaration_4 {
    export type Constructors = 'Getter_NodeReplacerTest_test_methodDeclaration_4';
    export type Interface = Omit<Getter_NodeReplacerTest_test_methodDeclaration_4, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_methodDeclaration_4 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.parameters;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_methodDeclaration_4() {
    }
}

export namespace Getter_NodeReplacerTest_test_methodInvocation {
    export type Constructors = 'Getter_NodeReplacerTest_test_methodInvocation';
    export type Interface = Omit<Getter_NodeReplacerTest_test_methodInvocation, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_methodInvocation implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.argumentList;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_methodInvocation() {
    }
}

export namespace Getter_NodeReplacerTest_test_methodInvocation_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_methodInvocation_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_methodInvocation_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_methodInvocation_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.target;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_methodInvocation_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_methodInvocation_3 {
    export type Constructors = 'Getter_NodeReplacerTest_test_methodInvocation_3';
    export type Interface = Omit<Getter_NodeReplacerTest_test_methodInvocation_3, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_methodInvocation_3 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.methodName;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_methodInvocation_3() {
    }
}

export namespace Getter_NodeReplacerTest_test_namedExpression {
    export type Constructors = 'Getter_NodeReplacerTest_test_namedExpression';
    export type Interface = Omit<Getter_NodeReplacerTest_test_namedExpression, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_namedExpression implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.name;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_namedExpression() {
    }
}

export namespace Getter_NodeReplacerTest_test_namedExpression_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_namedExpression_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_namedExpression_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_namedExpression_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.expression;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_namedExpression_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_nativeClause {
    export type Constructors = 'Getter_NodeReplacerTest_test_nativeClause';
    export type Interface = Omit<Getter_NodeReplacerTest_test_nativeClause, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_nativeClause implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.name;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_nativeClause() {
    }
}

export namespace Getter_NodeReplacerTest_test_nativeFunctionBody {
    export type Constructors = 'Getter_NodeReplacerTest_test_nativeFunctionBody';
    export type Interface = Omit<Getter_NodeReplacerTest_test_nativeFunctionBody, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_nativeFunctionBody implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.stringLiteral;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_nativeFunctionBody() {
    }
}

export namespace Getter_NodeReplacerTest_test_parenthesizedExpression {
    export type Constructors = 'Getter_NodeReplacerTest_test_parenthesizedExpression';
    export type Interface = Omit<Getter_NodeReplacerTest_test_parenthesizedExpression, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_parenthesizedExpression implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.expression;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_parenthesizedExpression() {
    }
}

export namespace Getter_NodeReplacerTest_test_partOfDirective {
    export type Constructors = 'Getter_NodeReplacerTest_test_partOfDirective';
    export type Interface = Omit<Getter_NodeReplacerTest_test_partOfDirective, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_partOfDirective implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.libraryName;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_partOfDirective() {
    }
}

export namespace Getter_NodeReplacerTest_test_postfixExpression {
    export type Constructors = 'Getter_NodeReplacerTest_test_postfixExpression';
    export type Interface = Omit<Getter_NodeReplacerTest_test_postfixExpression, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_postfixExpression implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.operand;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_postfixExpression() {
    }
}

export namespace Getter_NodeReplacerTest_test_prefixedIdentifier {
    export type Constructors = 'Getter_NodeReplacerTest_test_prefixedIdentifier';
    export type Interface = Omit<Getter_NodeReplacerTest_test_prefixedIdentifier, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_prefixedIdentifier implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.identifier;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_prefixedIdentifier() {
    }
}

export namespace Getter_NodeReplacerTest_test_prefixedIdentifier_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_prefixedIdentifier_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_prefixedIdentifier_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_prefixedIdentifier_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.prefix;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_prefixedIdentifier_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_prefixExpression {
    export type Constructors = 'Getter_NodeReplacerTest_test_prefixExpression';
    export type Interface = Omit<Getter_NodeReplacerTest_test_prefixExpression, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_prefixExpression implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.operand;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_prefixExpression() {
    }
}

export namespace Getter_NodeReplacerTest_test_propertyAccess {
    export type Constructors = 'Getter_NodeReplacerTest_test_propertyAccess';
    export type Interface = Omit<Getter_NodeReplacerTest_test_propertyAccess, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_propertyAccess implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.target;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_propertyAccess() {
    }
}

export namespace Getter_NodeReplacerTest_test_propertyAccess_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_propertyAccess_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_propertyAccess_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_propertyAccess_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.propertyName;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_propertyAccess_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_redirectingConstructorInvocation {
    export type Constructors = 'Getter_NodeReplacerTest_test_redirectingConstructorInvocation';
    export type Interface = Omit<Getter_NodeReplacerTest_test_redirectingConstructorInvocation, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_redirectingConstructorInvocation implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.constructorName;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_redirectingConstructorInvocation() {
    }
}

export namespace Getter_NodeReplacerTest_test_redirectingConstructorInvocation_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_redirectingConstructorInvocation_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_redirectingConstructorInvocation_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_redirectingConstructorInvocation_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.argumentList;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_redirectingConstructorInvocation_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_returnStatement {
    export type Constructors = 'Getter_NodeReplacerTest_test_returnStatement';
    export type Interface = Omit<Getter_NodeReplacerTest_test_returnStatement, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_returnStatement implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.expression;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_returnStatement() {
    }
}

export namespace _ExceptionThrowingVisitor {
    export type Constructors = '_ExceptionThrowingVisitor';
    export type Interface = Omit<_ExceptionThrowingVisitor, Constructors>;
}
@DartClass
export class _ExceptionThrowingVisitor extends any {
    visitNullLiteral(node : any) {
        throw new core.ArgumentError('');
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ExceptionThrowingVisitor() {
    }
}

export namespace Getter_NodeReplacerTest_test_superConstructorInvocation {
    export type Constructors = 'Getter_NodeReplacerTest_test_superConstructorInvocation';
    export type Interface = Omit<Getter_NodeReplacerTest_test_superConstructorInvocation, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_superConstructorInvocation implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.constructorName;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_superConstructorInvocation() {
    }
}

export namespace Getter_NodeReplacerTest_test_superConstructorInvocation_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_superConstructorInvocation_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_superConstructorInvocation_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_superConstructorInvocation_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.argumentList;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_superConstructorInvocation_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_switchCase {
    export type Constructors = 'Getter_NodeReplacerTest_test_switchCase';
    export type Interface = Omit<Getter_NodeReplacerTest_test_switchCase, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_switchCase implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.expression;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_switchCase() {
    }
}

export namespace Getter_NodeReplacerTest_test_switchStatement {
    export type Constructors = 'Getter_NodeReplacerTest_test_switchStatement';
    export type Interface = Omit<Getter_NodeReplacerTest_test_switchStatement, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_switchStatement implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.expression;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_switchStatement() {
    }
}

export namespace Getter_NodeReplacerTest_test_throwExpression {
    export type Constructors = 'Getter_NodeReplacerTest_test_throwExpression';
    export type Interface = Omit<Getter_NodeReplacerTest_test_throwExpression, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_throwExpression implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.expression;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_throwExpression() {
    }
}

export namespace Getter_NodeReplacerTest_test_topLevelVariableDeclaration {
    export type Constructors = 'Getter_NodeReplacerTest_test_topLevelVariableDeclaration';
    export type Interface = Omit<Getter_NodeReplacerTest_test_topLevelVariableDeclaration, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_topLevelVariableDeclaration implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.variables;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_topLevelVariableDeclaration() {
    }
}

export namespace Getter_NodeReplacerTest_test_tryStatement {
    export type Constructors = 'Getter_NodeReplacerTest_test_tryStatement';
    export type Interface = Omit<Getter_NodeReplacerTest_test_tryStatement, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_tryStatement implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.finallyBlock;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_tryStatement() {
    }
}

export namespace Getter_NodeReplacerTest_test_tryStatement_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_tryStatement_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_tryStatement_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_tryStatement_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.body;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_tryStatement_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_typeName {
    export type Constructors = 'Getter_NodeReplacerTest_test_typeName';
    export type Interface = Omit<Getter_NodeReplacerTest_test_typeName, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_typeName implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.typeArguments;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_typeName() {
    }
}

export namespace Getter_NodeReplacerTest_test_typeName_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_typeName_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_typeName_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_typeName_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.name;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_typeName_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_typeParameter {
    export type Constructors = 'Getter_NodeReplacerTest_test_typeParameter';
    export type Interface = Omit<Getter_NodeReplacerTest_test_typeParameter, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_typeParameter implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.bound;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_typeParameter() {
    }
}

export namespace Getter_NodeReplacerTest_test_typeParameter_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_typeParameter_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_typeParameter_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_typeParameter_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.name;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_typeParameter_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_variableDeclaration {
    export type Constructors = 'Getter_NodeReplacerTest_test_variableDeclaration';
    export type Interface = Omit<Getter_NodeReplacerTest_test_variableDeclaration, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_variableDeclaration implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.name;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_variableDeclaration() {
    }
}

export namespace Getter_NodeReplacerTest_test_variableDeclaration_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_variableDeclaration_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_variableDeclaration_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_variableDeclaration_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.initializer;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_variableDeclaration_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_variableDeclarationList {
    export type Constructors = 'Getter_NodeReplacerTest_test_variableDeclarationList';
    export type Interface = Omit<Getter_NodeReplacerTest_test_variableDeclarationList, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_variableDeclarationList implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.type;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_variableDeclarationList() {
    }
}

export namespace Getter_NodeReplacerTest_test_variableDeclarationStatement {
    export type Constructors = 'Getter_NodeReplacerTest_test_variableDeclarationStatement';
    export type Interface = Omit<Getter_NodeReplacerTest_test_variableDeclarationStatement, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_variableDeclarationStatement implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.variables;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_variableDeclarationStatement() {
    }
}

export namespace Getter_NodeReplacerTest_test_whileStatement {
    export type Constructors = 'Getter_NodeReplacerTest_test_whileStatement';
    export type Interface = Omit<Getter_NodeReplacerTest_test_whileStatement, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_whileStatement implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.condition;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_whileStatement() {
    }
}

export namespace Getter_NodeReplacerTest_test_whileStatement_2 {
    export type Constructors = 'Getter_NodeReplacerTest_test_whileStatement_2';
    export type Interface = Omit<Getter_NodeReplacerTest_test_whileStatement_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_whileStatement_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.body;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_whileStatement_2() {
    }
}

export namespace Getter_NodeReplacerTest_test_yieldStatement {
    export type Constructors = 'Getter_NodeReplacerTest_test_yieldStatement';
    export type Interface = Omit<Getter_NodeReplacerTest_test_yieldStatement, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_yieldStatement implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.expression;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_yieldStatement() {
    }
}

export namespace Getter_NodeReplacerTest_testAnnotatedNode {
    export type Constructors = 'Getter_NodeReplacerTest_testAnnotatedNode';
    export type Interface = Omit<Getter_NodeReplacerTest_testAnnotatedNode, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_testAnnotatedNode implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.documentationComment;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_testAnnotatedNode() {
    }
}

export namespace Getter_NodeReplacerTest_testNormalFormalParameter {
    export type Constructors = 'Getter_NodeReplacerTest_testNormalFormalParameter';
    export type Interface = Omit<Getter_NodeReplacerTest_testNormalFormalParameter, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_testNormalFormalParameter implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.identifier;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_testNormalFormalParameter() {
    }
}

export namespace Getter_NodeReplacerTest_testNormalFormalParameter_2 {
    export type Constructors = 'Getter_NodeReplacerTest_testNormalFormalParameter_2';
    export type Interface = Omit<Getter_NodeReplacerTest_testNormalFormalParameter_2, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_testNormalFormalParameter_2 implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.documentationComment;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_testNormalFormalParameter_2() {
    }
}

export namespace Getter_NodeReplacerTest_testTypedLiteral {
    export type Constructors = 'Getter_NodeReplacerTest_testTypedLiteral';
    export type Interface = Omit<Getter_NodeReplacerTest_testTypedLiteral, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_testTypedLiteral implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.typeArguments;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_testTypedLiteral() {
    }
}

export namespace Getter_NodeReplacerTest_testUriBasedDirective {
    export type Constructors = 'Getter_NodeReplacerTest_testUriBasedDirective';
    export type Interface = Omit<Getter_NodeReplacerTest_testUriBasedDirective, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_testUriBasedDirective implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.uri;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_testUriBasedDirective() {
    }
}

export namespace LineInfoTest {
    export type Constructors = 'LineInfoTest';
    export type Interface = Omit<LineInfoTest, Constructors>;
}
@DartClass
export class LineInfoTest {
    test_creation() : void {
        expect(new bare.createInstance(any,null,new core.DartList.literal<number>(0)),isNotNull);
    }
    test_creation_empty() : void {
        expect(() =>  {
            new bare.createInstance(any,null,new core.DartList.literal<number>());
        },throwsArgumentError);
    }
    test_creation_null() : void {
        expect(() =>  {
            new bare.createInstance(any,null,null);
        },throwsArgumentError);
    }
    test_firstLine() : void {
        let info : any = new bare.createInstance(any,null,new core.DartList.literal<number>(0,12,34));
        let location : any = info.getLocation(4);
        expect(location.lineNumber,1);
        expect(location.columnNumber,5);
    }
    test_lastLine() : void {
        let info : any = new bare.createInstance(any,null,new core.DartList.literal<number>(0,12,34));
        let location : any = info.getLocation(36);
        expect(location.lineNumber,3);
        expect(location.columnNumber,3);
    }
    test_middleLine() : void {
        let info : any = new bare.createInstance(any,null,new core.DartList.literal<number>(0,12,34));
        let location : any = info.getLocation(12);
        expect(location.lineNumber,2);
        expect(location.columnNumber,1);
    }
    constructor() {
    }
    @defaultConstructor
    LineInfoTest() {
    }
}

export namespace TokenMapTest {
    export type Constructors = 'TokenMapTest';
    export type Interface = Omit<TokenMapTest, Constructors>;
}
@DartClass
export class TokenMapTest {
    test_creation() : void {
        expect(new bare.createInstance(any,null),isNotNull);
    }
    test_get_absent() : void {
        let tokenMap : any = new bare.createInstance(any,null);
        expect(tokenMap.get(TokenFactory.tokenFromType(TokenType.AT)),isNull);
    }
    test_get_added() : void {
        let tokenMap : any = new bare.createInstance(any,null);
        let key : any = TokenFactory.tokenFromType(TokenType.AT);
        let value : any = TokenFactory.tokenFromType(TokenType.AT);
        tokenMap.put(key,value);
        expect(tokenMap.get(key),same(value));
    }
    constructor() {
    }
    @defaultConstructor
    TokenMapTest() {
    }
}

export namespace StringUtilitiesTest {
    export type Constructors = 'StringUtilitiesTest';
    export type Interface = Omit<StringUtilitiesTest, Constructors>;
}
@DartClass
export class StringUtilitiesTest {
    test_computeLineStarts_n() : void {
        let starts : core.DartList<number> = StringUtilities.computeLineStarts('a\nbb\nccc');
        expect(starts,new core.DartList.literal<number>(0,2,5));
    }
    test_computeLineStarts_r() : void {
        let starts : core.DartList<number> = StringUtilities.computeLineStarts('abbccc');
        expect(starts,new core.DartList.literal<number>(0,2,5));
    }
    test_computeLineStarts_rn() : void {
        let starts : core.DartList<number> = StringUtilities.computeLineStarts('a\nbb\nccc');
        expect(starts,new core.DartList.literal<number>(0,3,7));
    }
    test_EMPTY() : void {
        expect(StringUtilities.EMPTY,"");
        expect(StringUtilities.EMPTY.isEmpty,isTrue);
    }
    test_EMPTY_ARRAY() : void {
        expect(StringUtilities.EMPTY_ARRAY.length,0);
    }
    test_endsWith3() : void {
        expect(StringUtilities.endsWith3("abc",97,98,99),isTrue);
        expect(StringUtilities.endsWith3("abcdefghi",103,104,105),isTrue);
        expect(StringUtilities.endsWith3("abcdefghi",100,101,97),isFalse);
    }
    test_endsWithChar() : void {
        expect(StringUtilities.endsWithChar("a",97),isTrue);
        expect(StringUtilities.endsWithChar("b",97),isFalse);
        expect(StringUtilities.endsWithChar("",97),isFalse);
    }
    test_indexOf1() : void {
        expect(StringUtilities.indexOf1("a",0,97),0);
        expect(StringUtilities.indexOf1("abcdef",0,97),0);
        expect(StringUtilities.indexOf1("abcdef",0,99),2);
        expect(StringUtilities.indexOf1("abcdef",0,102),5);
        expect(StringUtilities.indexOf1("abcdef",0,122),-1);
        expect(StringUtilities.indexOf1("abcdef",1,97),-1);
    }
    test_indexOf2() : void {
        expect(StringUtilities.indexOf2("ab",0,97,98),0);
        expect(StringUtilities.indexOf2("abcdef",0,97,98),0);
        expect(StringUtilities.indexOf2("abcdef",0,99,100),2);
        expect(StringUtilities.indexOf2("abcdef",0,101,102),4);
        expect(StringUtilities.indexOf2("abcdef",0,100,97),-1);
        expect(StringUtilities.indexOf2("abcdef",1,97,98),-1);
    }
    test_indexOf4() : void {
        expect(StringUtilities.indexOf4("abcd",0,97,98,99,100),0);
        expect(StringUtilities.indexOf4("abcdefghi",0,97,98,99,100),0);
        expect(StringUtilities.indexOf4("abcdefghi",0,99,100,101,102),2);
        expect(StringUtilities.indexOf4("abcdefghi",0,102,103,104,105),5);
        expect(StringUtilities.indexOf4("abcdefghi",0,100,101,97,100),-1);
        expect(StringUtilities.indexOf4("abcdefghi",1,97,98,99,100),-1);
    }
    test_indexOf5() : void {
        expect(StringUtilities.indexOf5("abcde",0,97,98,99,100,101),0);
        expect(StringUtilities.indexOf5("abcdefghi",0,97,98,99,100,101),0);
        expect(StringUtilities.indexOf5("abcdefghi",0,99,100,101,102,103),2);
        expect(StringUtilities.indexOf5("abcdefghi",0,101,102,103,104,105),4);
        expect(StringUtilities.indexOf5("abcdefghi",0,100,101,102,105,110),-1);
        expect(StringUtilities.indexOf5("abcdefghi",1,97,98,99,100,101),-1);
    }
    test_isEmpty() : void {
        expect(StringUtilities.isEmpty(""),isTrue);
        expect(StringUtilities.isEmpty(" "),isFalse);
        expect(StringUtilities.isEmpty("a"),isFalse);
        expect(StringUtilities.isEmpty(StringUtilities.EMPTY),isTrue);
    }
    test_isTagName() : void {
        expect(StringUtilities.isTagName(null),isFalse);
        expect(StringUtilities.isTagName(""),isFalse);
        expect(StringUtilities.isTagName("-"),isFalse);
        expect(StringUtilities.isTagName("0"),isFalse);
        expect(StringUtilities.isTagName("0a"),isFalse);
        expect(StringUtilities.isTagName("a b"),isFalse);
        expect(StringUtilities.isTagName("a0"),isTrue);
        expect(StringUtilities.isTagName("a"),isTrue);
        expect(StringUtilities.isTagName("ab"),isTrue);
        expect(StringUtilities.isTagName("a-b"),isTrue);
    }
    test_printListOfQuotedNames_empty() : void {
        expect(() =>  {
            StringUtilities.printListOfQuotedNames(new core.DartList<string>(0));
        },throwsArgumentError);
    }
    test_printListOfQuotedNames_five() : void {
        expect(StringUtilities.printListOfQuotedNames(new core.DartList.literal<string>("a","b","c","d","e")),"'a', 'b', 'c', 'd' and 'e'");
    }
    test_printListOfQuotedNames_null() : void {
        expect(() =>  {
            StringUtilities.printListOfQuotedNames(null);
        },throwsArgumentError);
    }
    test_printListOfQuotedNames_one() : void {
        expect(() =>  {
            StringUtilities.printListOfQuotedNames(new core.DartList.literal<string>("a"));
        },throwsArgumentError);
    }
    test_printListOfQuotedNames_three() : void {
        expect(StringUtilities.printListOfQuotedNames(new core.DartList.literal<string>("a","b","c")),"'a', 'b' and 'c'");
    }
    test_printListOfQuotedNames_two() : void {
        expect(StringUtilities.printListOfQuotedNames(new core.DartList.literal<string>("a","b")),"'a' and 'b'");
    }
    test_startsWith2() : void {
        expect(StringUtilities.startsWith2("ab",0,97,98),isTrue);
        expect(StringUtilities.startsWith2("abcdefghi",0,97,98),isTrue);
        expect(StringUtilities.startsWith2("abcdefghi",2,99,100),isTrue);
        expect(StringUtilities.startsWith2("abcdefghi",5,102,103),isTrue);
        expect(StringUtilities.startsWith2("abcdefghi",0,100,100),isFalse);
    }
    test_startsWith3() : void {
        expect(StringUtilities.startsWith3("abc",0,97,98,99),isTrue);
        expect(StringUtilities.startsWith3("abcdefghi",0,97,98,99),isTrue);
        expect(StringUtilities.startsWith3("abcdefghi",2,99,100,101),isTrue);
        expect(StringUtilities.startsWith3("abcdefghi",6,103,104,105),isTrue);
        expect(StringUtilities.startsWith3("abcdefghi",0,100,101,97),isFalse);
    }
    test_startsWith4() : void {
        expect(StringUtilities.startsWith4("abcd",0,97,98,99,100),isTrue);
        expect(StringUtilities.startsWith4("abcdefghi",0,97,98,99,100),isTrue);
        expect(StringUtilities.startsWith4("abcdefghi",2,99,100,101,102),isTrue);
        expect(StringUtilities.startsWith4("abcdefghi",5,102,103,104,105),isTrue);
        expect(StringUtilities.startsWith4("abcdefghi",0,100,101,97,100),isFalse);
    }
    test_startsWith5() : void {
        expect(StringUtilities.startsWith5("abcde",0,97,98,99,100,101),isTrue);
        expect(StringUtilities.startsWith5("abcdefghi",0,97,98,99,100,101),isTrue);
        expect(StringUtilities.startsWith5("abcdefghi",2,99,100,101,102,103),isTrue);
        expect(StringUtilities.startsWith5("abcdefghi",4,101,102,103,104,105),isTrue);
        expect(StringUtilities.startsWith5("abcdefghi",0,97,98,99,98,97),isFalse);
    }
    test_startsWith6() : void {
        expect(StringUtilities.startsWith6("abcdef",0,97,98,99,100,101,102),isTrue);
        expect(StringUtilities.startsWith6("abcdefghi",0,97,98,99,100,101,102),isTrue);
        expect(StringUtilities.startsWith6("abcdefghi",2,99,100,101,102,103,104),isTrue);
        expect(StringUtilities.startsWith6("abcdefghi",3,100,101,102,103,104,105),isTrue);
        expect(StringUtilities.startsWith6("abcdefghi",0,97,98,99,100,101,103),isFalse);
    }
    test_startsWithChar() : void {
        expect(StringUtilities.startsWithChar("a",97),isTrue);
        expect(StringUtilities.startsWithChar("b",97),isFalse);
        expect(StringUtilities.startsWithChar("",97),isFalse);
    }
    test_substringBefore() : void {
        expect(StringUtilities.substringBefore(null,""),null);
        expect(StringUtilities.substringBefore(null,"a"),null);
        expect(StringUtilities.substringBefore("","a"),"");
        expect(StringUtilities.substringBefore("abc","a"),"");
        expect(StringUtilities.substringBefore("abcba","b"),"a");
        expect(StringUtilities.substringBefore("abc","c"),"ab");
        expect(StringUtilities.substringBefore("abc","d"),"abc");
        expect(StringUtilities.substringBefore("abc",""),"");
        expect(StringUtilities.substringBefore("abc",null),"abc");
    }
    test_substringBeforeChar() : void {
        expect(StringUtilities.substringBeforeChar(null,97),null);
        expect(StringUtilities.substringBeforeChar("",97),"");
        expect(StringUtilities.substringBeforeChar("abc",97),"");
        expect(StringUtilities.substringBeforeChar("abcba",98),"a");
        expect(StringUtilities.substringBeforeChar("abc",99),"ab");
        expect(StringUtilities.substringBeforeChar("abc",100),"abc");
    }
    constructor() {
    }
    @defaultConstructor
    StringUtilitiesTest() {
    }
}

export namespace SourceRangeTest {
    export type Constructors = 'SourceRangeTest';
    export type Interface = Omit<SourceRangeTest, Constructors>;
}
@DartClass
export class SourceRangeTest {
    test_access() : void {
        let r : any = new bare.createInstance(any,null,10,1);
        expect(r.offset,10);
        expect(r.length,1);
        expect(r.end,10 + 1);
        r.hashCode;
    }
    test_contains() : void {
        let r : any = new bare.createInstance(any,null,5,10);
        expect(r.contains(5),isTrue);
        expect(r.contains(10),isTrue);
        expect(r.contains(14),isTrue);
        expect(r.contains(0),isFalse);
        expect(r.contains(15),isFalse);
    }
    test_containsExclusive() : void {
        let r : any = new bare.createInstance(any,null,5,10);
        expect(r.containsExclusive(5),isFalse);
        expect(r.containsExclusive(10),isTrue);
        expect(r.containsExclusive(14),isTrue);
        expect(r.containsExclusive(0),isFalse);
        expect(r.containsExclusive(15),isFalse);
    }
    test_coveredBy() : void {
        let r : any = new bare.createInstance(any,null,5,10);
        expect(r.coveredBy(new bare.createInstance(any,null,20,10)),isFalse);
        expect(r.coveredBy(new bare.createInstance(any,null,0,3)),isFalse);
        expect(r.coveredBy(new bare.createInstance(any,null,0,10)),isFalse);
        expect(r.coveredBy(new bare.createInstance(any,null,10,10)),isFalse);
        expect(r.coveredBy(new bare.createInstance(any,null,0,20)),isTrue);
        expect(r.coveredBy(new bare.createInstance(any,null,5,10)),isTrue);
    }
    test_covers() : void {
        let r : any = new bare.createInstance(any,null,5,10);
        expect(r.covers(new bare.createInstance(any,null,0,3)),isFalse);
        expect(r.covers(new bare.createInstance(any,null,20,3)),isFalse);
        expect(r.covers(new bare.createInstance(any,null,0,10)),isFalse);
        expect(r.covers(new bare.createInstance(any,null,10,10)),isFalse);
        expect(r.covers(new bare.createInstance(any,null,5,10)),isTrue);
        expect(r.covers(new bare.createInstance(any,null,6,9)),isTrue);
        expect(r.covers(new bare.createInstance(any,null,6,8)),isTrue);
    }
    test_endsIn() : void {
        let r : any = new bare.createInstance(any,null,5,10);
        expect(r.endsIn(new bare.createInstance(any,null,20,10)),isFalse);
        expect(r.endsIn(new bare.createInstance(any,null,0,3)),isFalse);
        expect(r.endsIn(new bare.createInstance(any,null,10,20)),isTrue);
        expect(r.endsIn(new bare.createInstance(any,null,0,20)),isTrue);
    }
    test_equals() : void {
        let r : any = new bare.createInstance(any,null,10,1);
        expect(op(Op.EQUALS,r,null),isFalse);
        expect(op(Op.EQUALS,r,this),isFalse);
        expect(op(Op.EQUALS,r,new bare.createInstance(any,null,20,2)),isFalse);
        expect(op(Op.EQUALS,r,new bare.createInstance(any,null,10,1)),isTrue);
        expect(op(Op.EQUALS,r,r),isTrue);
    }
    test_getExpanded() : void {
        let r : any = new bare.createInstance(any,null,5,3);
        expect(r.getExpanded(0),r);
        expect(r.getExpanded(2),new bare.createInstance(any,null,3,7));
        expect(r.getExpanded(-1),new bare.createInstance(any,null,6,1));
    }
    test_getMoveEnd() : void {
        let r : any = new bare.createInstance(any,null,5,3);
        expect(r.getMoveEnd(0),r);
        expect(r.getMoveEnd(3),new bare.createInstance(any,null,5,6));
        expect(r.getMoveEnd(-1),new bare.createInstance(any,null,5,2));
    }
    test_getTranslated() : void {
        let r : any = new bare.createInstance(any,null,5,3);
        expect(r.getTranslated(0),r);
        expect(r.getTranslated(2),new bare.createInstance(any,null,7,3));
        expect(r.getTranslated(-1),new bare.createInstance(any,null,4,3));
    }
    test_getUnion() : void {
        expect(new bare.createInstance(any,null,10,10).getUnion(new bare.createInstance(any,null,15,10)),new bare.createInstance(any,null,10,15));
        expect(new bare.createInstance(any,null,15,10).getUnion(new bare.createInstance(any,null,10,10)),new bare.createInstance(any,null,10,15));
        expect(new bare.createInstance(any,null,10,10).getUnion(new bare.createInstance(any,null,15,2)),new bare.createInstance(any,null,10,10));
        expect(new bare.createInstance(any,null,15,2).getUnion(new bare.createInstance(any,null,10,10)),new bare.createInstance(any,null,10,10));
    }
    test_intersects() : void {
        let r : any = new bare.createInstance(any,null,5,3);
        expect(r.intersects(null),isFalse);
        expect(r.intersects(new bare.createInstance(any,null,0,5)),isFalse);
        expect(r.intersects(new bare.createInstance(any,null,8,5)),isFalse);
        expect(r.intersects(new bare.createInstance(any,null,5,1)),isTrue);
        expect(r.intersects(new bare.createInstance(any,null,6,1)),isTrue);
        expect(r.intersects(new bare.createInstance(any,null,6,10)),isTrue);
        expect(r.intersects(new bare.createInstance(any,null,0,10)),isTrue);
    }
    test_startsIn() : void {
        let r : any = new bare.createInstance(any,null,5,10);
        expect(r.startsIn(new bare.createInstance(any,null,20,10)),isFalse);
        expect(r.startsIn(new bare.createInstance(any,null,0,3)),isFalse);
        expect(r.startsIn(new bare.createInstance(any,null,5,1)),isTrue);
        expect(r.startsIn(new bare.createInstance(any,null,0,20)),isTrue);
    }
    test_toString() : void {
        let r : any = new bare.createInstance(any,null,10,1);
        expect(r.toString(),"[offset=10, length=1]");
    }
    constructor() {
    }
    @defaultConstructor
    SourceRangeTest() {
    }
}

export namespace SingleMapIteratorTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'SingleMapIteratorTest';
    export type Interface = Omit<SingleMapIteratorTest, Constructors>;
}
@DartClass
export class SingleMapIteratorTest extends lib3.EngineTestCase {
    test_empty() : void {
        let map : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        let iterator : any = new bare.createInstance(any,null,map);
        expect(iterator.moveNext(),isFalse);
        expect(() =>  {
            return iterator.key;
        },throwsStateError);
        expect(() =>  {
            return iterator.value;
        },throwsStateError);
        expect(() =>  {
            iterator.value = 'x';
        },throwsStateError);
        expect(iterator.moveNext(),isFalse);
    }
    test_multiple() : void {
        let map : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        op(Op.INDEX_ASSIGN,map,"k1","v1");
        op(Op.INDEX_ASSIGN,map,"k2","v2");
        op(Op.INDEX_ASSIGN,map,"k3","v3");
        let iterator : any = new bare.createInstance(any,null,map);
        expect(iterator.moveNext(),isTrue);
        expect(iterator.moveNext(),isTrue);
        expect(iterator.moveNext(),isTrue);
        expect(iterator.moveNext(),isFalse);
    }
    test_single() : void {
        let key : string = "key";
        let value : string = "value";
        let map : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        op(Op.INDEX_ASSIGN,map,key,value);
        let iterator : any = new bare.createInstance(any,null,map);
        expect(iterator.moveNext(),isTrue);
        expect(iterator.key,same(key));
        expect(iterator.value,same(value));
        let newValue : string = "newValue";
        iterator.value = newValue;
        expect(iterator.value,same(newValue));
        expect(iterator.moveNext(),isFalse);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SingleMapIteratorTest() {
    }
}

export namespace NodeReplacerTest_ListGetter {
    export type Constructors = 'NodeReplacerTest_ListGetter';
    export type Interface<P extends any,C extends any> = Omit<NodeReplacerTest_ListGetter<P extends any,C extends any>, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class NodeReplacerTest_ListGetter<P extends any,C extends any> implements NodeReplacerTest_Getter.Interface<P,C> {
    _index : number;

    constructor(_index : number) {
    }
    @defaultConstructor
    NodeReplacerTest_ListGetter(_index : number) {
        this._index = _index;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(parent : P) : C {
        let list : any = this.getList(parent);
        if (list.isEmpty) {
            return null;
        }
        return op(Op.INDEX,list,this._index);
    }
    @Abstract
    getList(parent : P) : any{ throw 'abstract'}
}

export namespace NodeReplacerTest_Getter {
    export type Constructors = 'NodeReplacerTest_Getter';
    export type Interface<P,C> = Omit<NodeReplacerTest_Getter<P,C>, Constructors>;
}
@DartClass
export class NodeReplacerTest_Getter<P,C> {
    @Abstract
    get(parent : P) : C{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    NodeReplacerTest_Getter() {
    }
}

export namespace NodeReplacerTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'NodeReplacerTest';
    export type Interface = Omit<NodeReplacerTest, Constructors>;
}
@DartClass
export class NodeReplacerTest extends lib3.EngineTestCase {
    private static __$EMPTY_TOKEN_LIST : core.DartList<any>;
    static get EMPTY_TOKEN_LIST() : core.DartList<any> { 
        if (this.__$EMPTY_TOKEN_LIST===undefined) {
            this.__$EMPTY_TOKEN_LIST = new core.DartList.literal<any>();
        }
        return this.__$EMPTY_TOKEN_LIST;
    }

    test_adjacentStrings() : void {
        let node : any = AstTestFactory.adjacentStrings(new core.DartList.literal(AstTestFactory.string2("a"),AstTestFactory.string2("b")));
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_adjacentStrings_2(0));
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_adjacentStrings(1));
    }
    test_annotation() : void {
        let node : any = AstTestFactory.annotation2(AstTestFactory.identifier3("C"),AstTestFactory.identifier3("c"),AstTestFactory.argumentList(new core.DartList.literal(AstTestFactory.integer(0))));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_annotation());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_annotation_3());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_annotation_2());
    }
    test_argumentList() : void {
        let node : any = AstTestFactory.argumentList(new core.DartList.literal(AstTestFactory.integer(0)));
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_argumentList(0));
    }
    test_asExpression() : void {
        let node : any = AstTestFactory.asExpression(AstTestFactory.integer(0),AstTestFactory.typeName3(AstTestFactory.identifier3("a"),new core.DartList.literal(AstTestFactory.typeName4("C"))));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_asExpression_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_asExpression());
    }
    test_assertStatement() : void {
        let node : any = AstTestFactory.assertStatement(AstTestFactory.booleanLiteral(true),AstTestFactory.string2('foo'));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_assertStatement());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_assertStatement_2());
    }
    test_assignmentExpression() : void {
        let node : any = AstTestFactory.assignmentExpression(AstTestFactory.identifier3("l"),TokenType.EQ,AstTestFactory.identifier3("r"));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_assignmentExpression_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_assignmentExpression());
    }
    test_awaitExpression() : void {
        let node = AstTestFactory.awaitExpression(AstTestFactory.identifier3("A"));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_awaitExpression());
    }
    test_binaryExpression() : void {
        let node : any = AstTestFactory.binaryExpression(AstTestFactory.identifier3("l"),TokenType.PLUS,AstTestFactory.identifier3("r"));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_binaryExpression());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_binaryExpression_2());
    }
    test_block() : void {
        let node : any = AstTestFactory.block(new core.DartList.literal(AstTestFactory.emptyStatement()));
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_block(0));
    }
    test_blockFunctionBody() : void {
        let node : any = AstTestFactory.blockFunctionBody(AstTestFactory.block());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_blockFunctionBody());
    }
    test_breakStatement() : void {
        let node : any = AstTestFactory.breakStatement2("l");
        this._assertReplace(node,new Getter_NodeReplacerTest_test_breakStatement());
    }
    test_cascadeExpression() : void {
        let node : any = AstTestFactory.cascadeExpression(AstTestFactory.integer(0),new core.DartList.literal(AstTestFactory.propertyAccess(null,AstTestFactory.identifier3("b"))));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_cascadeExpression());
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_cascadeExpression(0));
    }
    test_catchClause() : void {
        let node : any = AstTestFactory.catchClause5(AstTestFactory.typeName4("E"),"e","s",new core.DartList.literal(AstTestFactory.emptyStatement()));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_catchClause_3());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_catchClause_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_catchClause());
    }
    test_classDeclaration() : void {
        let node : any = AstTestFactory.classDeclaration(null,"A",AstTestFactory.typeParameterList(new core.DartList.literal("E")),AstTestFactory.extendsClause(AstTestFactory.typeName4("B")),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("C"))),AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("D"))),new core.DartList.literal(AstTestFactory.fieldDeclaration2(false,null,new core.DartList.literal(AstTestFactory.variableDeclaration("f")))));
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        node.nativeClause = AstTestFactory.nativeClause("");
        this._assertReplace(node,new Getter_NodeReplacerTest_test_classDeclaration_6());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_classDeclaration_5());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_classDeclaration_4());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_classDeclaration_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_classDeclaration());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_classDeclaration_3());
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_classDeclaration(0));
        this._testAnnotatedNode(node);
    }
    test_classTypeAlias() : void {
        let node : any = AstTestFactory.classTypeAlias("A",AstTestFactory.typeParameterList(new core.DartList.literal("E")),null,AstTestFactory.typeName4("B"),AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("C"))),AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("D"))));
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_classTypeAlias_4());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_classTypeAlias_5());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_classTypeAlias());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_classTypeAlias_3());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_classTypeAlias_2());
        this._testAnnotatedNode(node);
    }
    test_comment() : void {
        let node : any = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.references.add(astFactory.commentReference(null,AstTestFactory.identifier3("x")));
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_comment(0));
    }
    test_commentReference() : void {
        let node : any = astFactory.commentReference(null,AstTestFactory.identifier3("x"));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_commentReference());
    }
    test_compilationUnit() : void {
        let node : any = AstTestFactory.compilationUnit8("",new core.DartList.literal(AstTestFactory.libraryDirective2("lib")),new core.DartList.literal(AstTestFactory.topLevelVariableDeclaration2(null,new core.DartList.literal(AstTestFactory.variableDeclaration("X")))));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_compilationUnit());
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_compilationUnit(0));
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_compilationUnit_2(0));
    }
    test_conditionalExpression() : void {
        let node : any = AstTestFactory.conditionalExpression(AstTestFactory.booleanLiteral(true),AstTestFactory.integer(0),AstTestFactory.integer(1));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_conditionalExpression_3());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_conditionalExpression_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_conditionalExpression());
    }
    test_constructorDeclaration() : void {
        let node : any = AstTestFactory.constructorDeclaration2(null,null,AstTestFactory.identifier3("C"),"d",AstTestFactory.formalParameterList(),new core.DartList.literal(AstTestFactory.constructorFieldInitializer(false,"x",AstTestFactory.integer(0))),AstTestFactory.emptyFunctionBody());
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        node.redirectedConstructor = AstTestFactory.constructorName(AstTestFactory.typeName4("B"),"a");
        this._assertReplace(node,new Getter_NodeReplacerTest_test_constructorDeclaration_3());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_constructorDeclaration_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_constructorDeclaration_4());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_constructorDeclaration());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_constructorDeclaration_5());
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_constructorDeclaration(0));
        this._testAnnotatedNode(node);
    }
    test_constructorFieldInitializer() : void {
        let node : any = AstTestFactory.constructorFieldInitializer(false,"f",AstTestFactory.integer(0));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_constructorFieldInitializer());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_constructorFieldInitializer_2());
    }
    test_constructorName() : void {
        let node : any = AstTestFactory.constructorName(AstTestFactory.typeName4("C"),"n");
        this._assertReplace(node,new Getter_NodeReplacerTest_test_constructorName());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_constructorName_2());
    }
    test_continueStatement() : void {
        let node : any = AstTestFactory.continueStatement("l");
        this._assertReplace(node,new Getter_NodeReplacerTest_test_continueStatement());
    }
    test_declaredIdentifier() : void {
        let node : any = AstTestFactory.declaredIdentifier4(AstTestFactory.typeName4("C"),"i");
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_declaredIdentifier());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_declaredIdentifier_2());
        this._testAnnotatedNode(node);
    }
    test_defaultFormalParameter() : void {
        let node : any = AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("p"),AstTestFactory.integer(0));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_defaultFormalParameter());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_defaultFormalParameter_2());
    }
    test_doStatement() : void {
        let node : any = AstTestFactory.doStatement(AstTestFactory.block(),AstTestFactory.booleanLiteral(true));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_doStatement_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_doStatement());
    }
    test_enumConstantDeclaration() : void {
        let node : any = astFactory.enumConstantDeclaration(astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST),new core.DartList.literal(AstTestFactory.annotation(AstTestFactory.identifier3("a"))),AstTestFactory.identifier3("C"));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_enumConstantDeclaration());
        this._testAnnotatedNode(node);
    }
    test_enumDeclaration() : void {
        let node : any = AstTestFactory.enumDeclaration2("E",new core.DartList.literal("ONE","TWO"));
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_enumDeclaration());
        this._testAnnotatedNode(node);
    }
    test_exportDirective() : void {
        let node : any = AstTestFactory.exportDirective2("",new core.DartList.literal(AstTestFactory.hideCombinator2(new core.DartList.literal("C"))));
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        this._testNamespaceDirective(node);
    }
    test_expressionFunctionBody() : void {
        let node : any = AstTestFactory.expressionFunctionBody(AstTestFactory.integer(0));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_expressionFunctionBody());
    }
    test_expressionStatement() : void {
        let node : any = AstTestFactory.expressionStatement(AstTestFactory.integer(0));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_expressionStatement());
    }
    test_extendsClause() : void {
        let node : any = AstTestFactory.extendsClause(AstTestFactory.typeName4("S"));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_extendsClause());
    }
    test_fieldDeclaration() : void {
        let node : any = AstTestFactory.fieldDeclaration(false,null,AstTestFactory.typeName4("C"),new core.DartList.literal(AstTestFactory.variableDeclaration("c")));
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_fieldDeclaration());
        this._testAnnotatedNode(node);
    }
    test_fieldFormalParameter() : void {
        let node : any = AstTestFactory.fieldFormalParameter(null,AstTestFactory.typeName4("C"),"f",AstTestFactory.formalParameterList());
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata = new core.DartList.literal(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_fieldFormalParameter_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_fieldFormalParameter());
        this._testNormalFormalParameter(node);
    }
    test_forEachStatement_withIdentifier() : void {
        let node : any = AstTestFactory.forEachStatement2(AstTestFactory.identifier3("i"),AstTestFactory.identifier3("l"),AstTestFactory.block());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_forEachStatement_withIdentifier_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_forEachStatement_withIdentifier_3());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_forEachStatement_withIdentifier());
    }
    test_forEachStatement_withLoopVariable() : void {
        let node : any = AstTestFactory.forEachStatement(AstTestFactory.declaredIdentifier3("e"),AstTestFactory.identifier3("l"),AstTestFactory.block());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_forEachStatement_withLoopVariable_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_forEachStatement_withLoopVariable());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_forEachStatement_withLoopVariable_3());
    }
    test_formalParameterList() : void {
        let node : any = AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("p")));
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_formalParameterList(0));
    }
    test_forStatement_withInitialization() : void {
        let node : any = AstTestFactory.forStatement(AstTestFactory.identifier3("a"),AstTestFactory.booleanLiteral(true),new core.DartList.literal(AstTestFactory.integer(0)),AstTestFactory.block());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_forStatement_withInitialization_3());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_forStatement_withInitialization_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_forStatement_withInitialization());
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_forStatement_withInitialization(0));
    }
    test_forStatement_withVariables() : void {
        let node : any = AstTestFactory.forStatement2(AstTestFactory.variableDeclarationList2(null,new core.DartList.literal(AstTestFactory.variableDeclaration("i"))),AstTestFactory.booleanLiteral(true),new core.DartList.literal(AstTestFactory.integer(0)),AstTestFactory.block());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_forStatement_withVariables_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_forStatement_withVariables_3());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_forStatement_withVariables());
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_forStatement_withVariables(0));
    }
    test_functionDeclaration() : void {
        let node : any = AstTestFactory.functionDeclaration(AstTestFactory.typeName4("R"),null,"f",AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody(AstTestFactory.block())));
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_functionDeclaration());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_functionDeclaration_3());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_functionDeclaration_2());
        this._testAnnotatedNode(node);
    }
    test_functionDeclarationStatement() : void {
        let node : any = AstTestFactory.functionDeclarationStatement(AstTestFactory.typeName4("R"),null,"f",AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody(AstTestFactory.block())));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_functionDeclarationStatement());
    }
    test_functionExpression() : void {
        let node : any = AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody(AstTestFactory.block()));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_functionExpression());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_functionExpression_2());
    }
    test_functionExpressionInvocation() : void {
        let node : any = AstTestFactory.functionExpressionInvocation(AstTestFactory.identifier3("f"),new core.DartList.literal(AstTestFactory.integer(0)));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_functionExpressionInvocation());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_functionExpressionInvocation_2());
    }
    test_functionTypeAlias() : void {
        let node : any = AstTestFactory.typeAlias(AstTestFactory.typeName4("R"),"F",AstTestFactory.typeParameterList(new core.DartList.literal("E")),AstTestFactory.formalParameterList());
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_functionTypeAlias_3());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_functionTypeAlias_4());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_functionTypeAlias());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_functionTypeAlias_2());
        this._testAnnotatedNode(node);
    }
    test_functionTypedFormalParameter() : void {
        let node : any = AstTestFactory.functionTypedFormalParameter(AstTestFactory.typeName4("R"),"f",new core.DartList.literal(AstTestFactory.simpleFormalParameter3("p")));
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata = new core.DartList.literal(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_functionTypedFormalParameter());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_functionTypedFormalParameter_2());
        this._testNormalFormalParameter(node);
    }
    test_hideCombinator() : void {
        let node : any = AstTestFactory.hideCombinator2(new core.DartList.literal("A","B"));
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_hideCombinator(0));
    }
    test_ifStatement() : void {
        let node : any = AstTestFactory.ifStatement2(AstTestFactory.booleanLiteral(true),AstTestFactory.block(),AstTestFactory.block());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_ifStatement());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_ifStatement_3());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_ifStatement_2());
    }
    test_implementsClause() : void {
        let node : any = AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName4("I"),AstTestFactory.typeName4("J")));
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_implementsClause(0));
    }
    test_importDirective() : void {
        let node : any = AstTestFactory.importDirective3("","p",new core.DartList.literal(AstTestFactory.showCombinator2(new core.DartList.literal("A")),AstTestFactory.hideCombinator2(new core.DartList.literal("B"))));
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_importDirective());
        this._testNamespaceDirective(node);
    }
    test_indexExpression() : void {
        let node : any = AstTestFactory.indexExpression(AstTestFactory.identifier3("a"),AstTestFactory.identifier3("i"));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_indexExpression());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_indexExpression_2());
    }
    test_instanceCreationExpression() : void {
        let node : any = AstTestFactory.instanceCreationExpression3(null,AstTestFactory.typeName4("C"),"c",new core.DartList.literal(AstTestFactory.integer(2)));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_instanceCreationExpression_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_instanceCreationExpression());
    }
    test_interpolationExpression() : void {
        let node : any = AstTestFactory.interpolationExpression2("x");
        this._assertReplace(node,new Getter_NodeReplacerTest_test_interpolationExpression());
    }
    test_isExpression() : void {
        let node : any = AstTestFactory.isExpression(AstTestFactory.identifier3("v"),false,AstTestFactory.typeName4("T"));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_isExpression());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_isExpression_2());
    }
    test_label() : void {
        let node : any = AstTestFactory.label2("l");
        this._assertReplace(node,new Getter_NodeReplacerTest_test_label());
    }
    test_labeledStatement() : void {
        let node : any = AstTestFactory.labeledStatement(new core.DartList.literal(AstTestFactory.label2("l")),AstTestFactory.block());
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_labeledStatement(0));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_labeledStatement());
    }
    test_libraryDirective() : void {
        let node : any = AstTestFactory.libraryDirective2("lib");
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_libraryDirective());
        this._testAnnotatedNode(node);
    }
    test_libraryIdentifier() : void {
        let node : any = AstTestFactory.libraryIdentifier2(new core.DartList.literal("lib"));
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_libraryIdentifier(0));
    }
    test_listLiteral() : void {
        let node : any = AstTestFactory.listLiteral2(null,AstTestFactory.typeArgumentList(new core.DartList.literal(AstTestFactory.typeName4("E"))),new core.DartList.literal(AstTestFactory.identifier3("e")));
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_listLiteral(0));
        this._testTypedLiteral(node);
    }
    test_mapLiteral() : void {
        let node : any = AstTestFactory.mapLiteral(null,AstTestFactory.typeArgumentList(new core.DartList.literal(AstTestFactory.typeName4("E"))),new core.DartList.literal(AstTestFactory.mapLiteralEntry("k",AstTestFactory.identifier3("v"))));
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_mapLiteral(0));
        this._testTypedLiteral(node);
    }
    test_mapLiteralEntry() : void {
        let node : any = AstTestFactory.mapLiteralEntry("k",AstTestFactory.identifier3("v"));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_mapLiteralEntry_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_mapLiteralEntry());
    }
    test_methodDeclaration() : void {
        let node : any = AstTestFactory.methodDeclaration2(null,AstTestFactory.typeName4("A"),null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody(AstTestFactory.block()));
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_methodDeclaration());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_methodDeclaration_3());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_methodDeclaration_4());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_methodDeclaration_2());
        this._testAnnotatedNode(node);
    }
    test_methodInvocation() : void {
        let node : any = AstTestFactory.methodInvocation(AstTestFactory.identifier3("t"),"m",new core.DartList.literal(AstTestFactory.integer(0)));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_methodInvocation_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_methodInvocation_3());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_methodInvocation());
    }
    test_namedExpression() : void {
        let node : any = AstTestFactory.namedExpression2("l",AstTestFactory.identifier3("v"));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_namedExpression());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_namedExpression_2());
    }
    test_nativeClause() : void {
        let node : any = AstTestFactory.nativeClause("");
        this._assertReplace(node,new Getter_NodeReplacerTest_test_nativeClause());
    }
    test_nativeFunctionBody() : void {
        let node : any = AstTestFactory.nativeFunctionBody("m");
        this._assertReplace(node,new Getter_NodeReplacerTest_test_nativeFunctionBody());
    }
    test_parenthesizedExpression() : void {
        let node : any = AstTestFactory.parenthesizedExpression(AstTestFactory.integer(0));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_parenthesizedExpression());
    }
    test_partDirective() : void {
        let node : any = AstTestFactory.partDirective2("");
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        this._testUriBasedDirective(node);
    }
    test_partOfDirective() : void {
        let node : any = AstTestFactory.partOfDirective(AstTestFactory.libraryIdentifier2(new core.DartList.literal("lib")));
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_partOfDirective());
        this._testAnnotatedNode(node);
    }
    test_postfixExpression() : void {
        let node : any = AstTestFactory.postfixExpression(AstTestFactory.identifier3("x"),TokenType.MINUS_MINUS);
        this._assertReplace(node,new Getter_NodeReplacerTest_test_postfixExpression());
    }
    test_prefixedIdentifier() : void {
        let node : any = AstTestFactory.identifier5("a","b");
        this._assertReplace(node,new Getter_NodeReplacerTest_test_prefixedIdentifier_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_prefixedIdentifier());
    }
    test_prefixExpression() : void {
        let node : any = AstTestFactory.prefixExpression(TokenType.PLUS_PLUS,AstTestFactory.identifier3("y"));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_prefixExpression());
    }
    test_propertyAccess() : void {
        let node : any = AstTestFactory.propertyAccess2(AstTestFactory.identifier3("x"),"y");
        this._assertReplace(node,new Getter_NodeReplacerTest_test_propertyAccess());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_propertyAccess_2());
    }
    test_redirectingConstructorInvocation() : void {
        let node : any = AstTestFactory.redirectingConstructorInvocation2("c",new core.DartList.literal(AstTestFactory.integer(0)));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_redirectingConstructorInvocation());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_redirectingConstructorInvocation_2());
    }
    test_returnStatement() : void {
        let node : any = AstTestFactory.returnStatement2(AstTestFactory.integer(0));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_returnStatement());
    }
    test_showCombinator() : void {
        let node : any = AstTestFactory.showCombinator2(new core.DartList.literal("X","Y"));
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_showCombinator(0));
    }
    test_simpleFormalParameter() : void {
        let node : any = AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName4("T"),"p");
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata = new core.DartList.literal(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_simpleFormalParameter());
        this._testNormalFormalParameter(node);
    }
    test_stringInterpolation() : void {
        let node : any = AstTestFactory.string(new core.DartList.literal(AstTestFactory.interpolationExpression2("a")));
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_stringInterpolation(0));
    }
    test_superConstructorInvocation() : void {
        let node : any = AstTestFactory.superConstructorInvocation2("s",new core.DartList.literal(AstTestFactory.integer(1)));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_superConstructorInvocation());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_superConstructorInvocation_2());
    }
    test_switchCase() : void {
        let node : any = AstTestFactory.switchCase2(new core.DartList.literal(AstTestFactory.label2("l")),AstTestFactory.integer(0),new core.DartList.literal(AstTestFactory.block()));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_switchCase());
        this._testSwitchMember(node);
    }
    test_switchDefault() : void {
        let node : any = AstTestFactory.switchDefault(new core.DartList.literal(AstTestFactory.label2("l")),new core.DartList.literal(AstTestFactory.block()));
        this._testSwitchMember(node);
    }
    test_switchStatement() : void {
        let node : any = AstTestFactory.switchStatement(AstTestFactory.identifier3("x"),new core.DartList.literal(AstTestFactory.switchCase2(new core.DartList.literal(AstTestFactory.label2("l")),AstTestFactory.integer(0),new core.DartList.literal(AstTestFactory.block())),AstTestFactory.switchDefault(new core.DartList.literal(AstTestFactory.label2("l")),new core.DartList.literal(AstTestFactory.block()))));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_switchStatement());
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_switchStatement(0));
    }
    test_throwExpression() : void {
        let node : any = AstTestFactory.throwExpression2(AstTestFactory.identifier3("e"));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_throwExpression());
    }
    test_topLevelVariableDeclaration() : void {
        let node : any = AstTestFactory.topLevelVariableDeclaration(null,AstTestFactory.typeName4("T"),new core.DartList.literal(AstTestFactory.variableDeclaration("t")));
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_topLevelVariableDeclaration());
        this._testAnnotatedNode(node);
    }
    test_tryStatement() : void {
        let node : any = AstTestFactory.tryStatement3(AstTestFactory.block(),new core.DartList.literal(AstTestFactory.catchClause("e",new core.DartList.literal(AstTestFactory.block()))),AstTestFactory.block());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_tryStatement_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_tryStatement());
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_tryStatement(0));
    }
    test_typeArgumentList() : void {
        let node : any = AstTestFactory.typeArgumentList(new core.DartList.literal(AstTestFactory.typeName4("A")));
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_typeArgumentList(0));
    }
    test_typeName() : void {
        let node : any = AstTestFactory.typeName4("T",new core.DartList.literal(AstTestFactory.typeName4("E"),AstTestFactory.typeName4("F")));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_typeName_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_typeName());
    }
    test_typeParameter() : void {
        let node : any = AstTestFactory.typeParameter2("E",AstTestFactory.typeName4("B"));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_typeParameter_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_typeParameter());
    }
    test_typeParameterList() : void {
        let node : any = AstTestFactory.typeParameterList(new core.DartList.literal("A","B"));
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_typeParameterList(0));
    }
    test_variableDeclaration() : void {
        let node : any = AstTestFactory.variableDeclaration2("a",AstTestFactory.nullLiteral());
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_variableDeclaration());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_variableDeclaration_2());
        this._testAnnotatedNode(node);
    }
    test_variableDeclarationList() : void {
        let node : any = AstTestFactory.variableDeclarationList(null,AstTestFactory.typeName4("T"),new core.DartList.literal(AstTestFactory.variableDeclaration("a")));
        node.documentationComment = astFactory.endOfLineComment(NodeReplacerTest.EMPTY_TOKEN_LIST);
        node.metadata.add(AstTestFactory.annotation(AstTestFactory.identifier3("a")));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_variableDeclarationList());
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_variableDeclarationList(0));
        this._testAnnotatedNode(node);
    }
    test_variableDeclarationStatement() : void {
        let node : any = AstTestFactory.variableDeclarationStatement(null,AstTestFactory.typeName4("T"),new core.DartList.literal(AstTestFactory.variableDeclaration("a")));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_variableDeclarationStatement());
    }
    test_whileStatement() : void {
        let node : any = AstTestFactory.whileStatement(AstTestFactory.booleanLiteral(true),AstTestFactory.block());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_whileStatement());
        this._assertReplace(node,new Getter_NodeReplacerTest_test_whileStatement_2());
    }
    test_withClause() : void {
        let node : any = AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName4("M")));
        this._assertReplace(node,new ListGetter_NodeReplacerTest_test_withClause(0));
    }
    test_yieldStatement() : void {
        let node = AstTestFactory.yieldStatement(AstTestFactory.identifier3("A"));
        this._assertReplace(node,new Getter_NodeReplacerTest_test_yieldStatement());
    }
    _assertReplace(parent : any,getter : NodeReplacerTest_Getter<any,any>) : void {
        let child : any = getter.get(parent);
        if (child != null) {
            let clone : any = child.accept(new bare.createInstance(any,null));
            NodeReplacer.replace(child,clone);
            expect(getter.get(parent),clone);
            expect(clone.parent,parent);
        }
    }
    _testAnnotatedNode(node : any) : void {
        this._assertReplace(node,new Getter_NodeReplacerTest_testAnnotatedNode());
        this._assertReplace(node,new ListGetter_NodeReplacerTest_testAnnotatedNode(0));
    }
    _testNamespaceDirective(node : any) : void {
        this._assertReplace(node,new ListGetter_NodeReplacerTest_testNamespaceDirective(0));
        this._testUriBasedDirective(node);
    }
    _testNormalFormalParameter(node : any) : void {
        this._assertReplace(node,new Getter_NodeReplacerTest_testNormalFormalParameter_2());
        this._assertReplace(node,new Getter_NodeReplacerTest_testNormalFormalParameter());
        this._assertReplace(node,new ListGetter_NodeReplacerTest_testNormalFormalParameter(0));
    }
    _testSwitchMember(node : any) : void {
        this._assertReplace(node,new ListGetter_NodeReplacerTest_testSwitchMember(0));
        this._assertReplace(node,new ListGetter_NodeReplacerTest_testSwitchMember_2(0));
    }
    _testTypedLiteral(node : any) : void {
        this._assertReplace(node,new Getter_NodeReplacerTest_testTypedLiteral());
    }
    _testUriBasedDirective(node : any) : void {
        this._assertReplace(node,new Getter_NodeReplacerTest_testUriBasedDirective());
        this._testAnnotatedNode(node);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NodeReplacerTest() {
    }
}

export namespace Getter_NodeReplacerTest_test_simpleFormalParameter {
    export type Constructors = 'Getter_NodeReplacerTest_test_simpleFormalParameter';
    export type Interface = Omit<Getter_NodeReplacerTest_test_simpleFormalParameter, Constructors>;
}
@DartClass
@Implements(NodeReplacerTest_Getter)
export class Getter_NodeReplacerTest_test_simpleFormalParameter implements NodeReplacerTest_Getter.Interface<any,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(node : any) : any {
        return node.type;
    }
    constructor() {
    }
    @defaultConstructor
    Getter_NodeReplacerTest_test_simpleFormalParameter() {
    }
}

export namespace MultipleMapIteratorTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'MultipleMapIteratorTest';
    export type Interface = Omit<MultipleMapIteratorTest, Constructors>;
}
@DartClass
export class MultipleMapIteratorTest extends lib3.EngineTestCase {
    test_multipleMaps_firstEmpty() : void {
        let map1 : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        let map2 : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        op(Op.INDEX_ASSIGN,map2,"k2","v2");
        let map3 : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        op(Op.INDEX_ASSIGN,map3,"k3","v3");
        let iterator : any = this._iterator(new core.DartList.literal(map1,map2,map3));
        expect(iterator.moveNext(),isTrue);
        expect(iterator.moveNext(),isTrue);
        expect(iterator.moveNext(),isFalse);
    }
    test_multipleMaps_lastEmpty() : void {
        let map1 : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        op(Op.INDEX_ASSIGN,map1,"k1","v1");
        let map2 : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        op(Op.INDEX_ASSIGN,map2,"k2","v2");
        let map3 : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        let iterator : any = this._iterator(new core.DartList.literal(map1,map2,map3));
        expect(iterator.moveNext(),isTrue);
        expect(iterator.moveNext(),isTrue);
        expect(iterator.moveNext(),isFalse);
    }
    test_multipleMaps_middleEmpty() : void {
        let map1 : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        op(Op.INDEX_ASSIGN,map1,"k1","v1");
        let map2 : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        let map3 : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        op(Op.INDEX_ASSIGN,map3,"k3","v3");
        let iterator : any = this._iterator(new core.DartList.literal(map1,map2,map3));
        expect(iterator.moveNext(),isTrue);
        expect(iterator.moveNext(),isTrue);
        expect(iterator.moveNext(),isFalse);
    }
    test_multipleMaps_nonEmpty() : void {
        let map1 : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        op(Op.INDEX_ASSIGN,map1,"k1","v1");
        let map2 : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        op(Op.INDEX_ASSIGN,map2,"k2","v2");
        let map3 : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        op(Op.INDEX_ASSIGN,map3,"k3","v3");
        let iterator : any = this._iterator(new core.DartList.literal(map1,map2,map3));
        expect(iterator.moveNext(),isTrue);
        expect(iterator.moveNext(),isTrue);
        expect(iterator.moveNext(),isTrue);
        expect(iterator.moveNext(),isFalse);
    }
    test_noMap() : void {
        let iterator : any = this._iterator(new core.DartList.literal());
        expect(iterator.moveNext(),isFalse);
        expect(iterator.moveNext(),isFalse);
    }
    test_singleMap_empty() : void {
        let map : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        let iterator : any = this._iterator(new core.DartList.literal<core.DartMap<any,any>>(map));
        expect(iterator.moveNext(),isFalse);
        expect(() =>  {
            return iterator.key;
        },throwsStateError);
        expect(() =>  {
            return iterator.value;
        },throwsStateError);
        expect(() =>  {
            iterator.value = 'x';
        },throwsStateError);
    }
    test_singleMap_multiple() : void {
        let map : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        op(Op.INDEX_ASSIGN,map,"k1","v1");
        op(Op.INDEX_ASSIGN,map,"k2","v2");
        op(Op.INDEX_ASSIGN,map,"k3","v3");
        let iterator : any = this._iterator(new core.DartList.literal(map));
        expect(iterator.moveNext(),isTrue);
        expect(iterator.moveNext(),isTrue);
        expect(iterator.moveNext(),isTrue);
        expect(iterator.moveNext(),isFalse);
    }
    test_singleMap_single() : void {
        let key : string = "key";
        let value : string = "value";
        let map : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        op(Op.INDEX_ASSIGN,map,key,value);
        let iterator : any = this._iterator(new core.DartList.literal(map));
        expect(iterator.moveNext(),isTrue);
        expect(iterator.key,same(key));
        expect(iterator.value,same(value));
        let newValue : string = "newValue";
        iterator.value = newValue;
        expect(iterator.value,same(newValue));
        expect(iterator.moveNext(),isFalse);
    }
    _iterator(maps : core.DartList<core.DartMap<any,any>>) : any {
        return new bare.createInstance(any,null,maps);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MultipleMapIteratorTest() {
    }
}

export namespace ListGetter_NodeReplacerTest_test_constructorDeclaration {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_constructorDeclaration';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_constructorDeclaration, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_constructorDeclaration extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_constructorDeclaration(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.initializers;
    }
}

export namespace ListGetter_NodeReplacerTest_test_formalParameterList {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_formalParameterList';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_formalParameterList, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_formalParameterList extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_formalParameterList(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.parameters;
    }
}

export namespace ListGetter_NodeReplacerTest_test_forStatement_withInitialization {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_forStatement_withInitialization';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_forStatement_withInitialization, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_forStatement_withInitialization extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_forStatement_withInitialization(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.updaters;
    }
}

export namespace ListGetter_NodeReplacerTest_test_forStatement_withVariables {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_forStatement_withVariables';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_forStatement_withVariables, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_forStatement_withVariables extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_forStatement_withVariables(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.updaters;
    }
}

export namespace ListGetter_NodeReplacerTest_test_hideCombinator {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_hideCombinator';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_hideCombinator, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_hideCombinator extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_hideCombinator(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.hiddenNames;
    }
}

export namespace ListGetter_NodeReplacerTest_test_implementsClause {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_implementsClause';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_implementsClause, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_implementsClause extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_implementsClause(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.interfaces;
    }
}

export namespace ListGetter_NodeReplacerTest_test_labeledStatement {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_labeledStatement';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_labeledStatement, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_labeledStatement extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_labeledStatement(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.labels;
    }
}

export namespace ListGetter_NodeReplacerTest_test_libraryIdentifier {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_libraryIdentifier';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_libraryIdentifier, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_libraryIdentifier extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_libraryIdentifier(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.components;
    }
}

export namespace ListGetter_NodeReplacerTest_test_listLiteral {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_listLiteral';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_listLiteral, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_listLiteral extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_listLiteral(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.elements;
    }
}

export namespace ListGetter_NodeReplacerTest_test_mapLiteral {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_mapLiteral';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_mapLiteral, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_mapLiteral extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_mapLiteral(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.entries;
    }
}

export namespace ListGetter_NodeReplacerTest_test_showCombinator {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_showCombinator';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_showCombinator, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_showCombinator extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_showCombinator(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.shownNames;
    }
}

export namespace ListGetter_NodeReplacerTest_test_stringInterpolation {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_stringInterpolation';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_stringInterpolation, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_stringInterpolation extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_stringInterpolation(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.elements;
    }
}

export namespace ListGetter_NodeReplacerTest_test_switchStatement {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_switchStatement';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_switchStatement, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_switchStatement extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_switchStatement(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.members;
    }
}

export namespace ListGetter_NodeReplacerTest_test_tryStatement {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_tryStatement';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_tryStatement, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_tryStatement extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_tryStatement(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.catchClauses;
    }
}

export namespace ListGetter_NodeReplacerTest_test_typeArgumentList {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_typeArgumentList';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_typeArgumentList, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_typeArgumentList extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_typeArgumentList(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.arguments;
    }
}

export namespace ListGetter_NodeReplacerTest_test_typeParameterList {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_typeParameterList';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_typeParameterList, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_typeParameterList extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_typeParameterList(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.typeParameters;
    }
}

export namespace ListGetter_NodeReplacerTest_test_variableDeclarationList {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_variableDeclarationList';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_variableDeclarationList, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_variableDeclarationList extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_variableDeclarationList(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.variables;
    }
}

export namespace ListGetter_NodeReplacerTest_test_withClause {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_withClause';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_withClause, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_withClause extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_withClause(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.mixinTypes;
    }
}

export namespace ListGetter_NodeReplacerTest_testAnnotatedNode {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_testAnnotatedNode';
    export type Interface = Omit<ListGetter_NodeReplacerTest_testAnnotatedNode, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_testAnnotatedNode extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_testAnnotatedNode(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.metadata;
    }
}

export namespace ListGetter_NodeReplacerTest_testNamespaceDirective {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_testNamespaceDirective';
    export type Interface = Omit<ListGetter_NodeReplacerTest_testNamespaceDirective, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_testNamespaceDirective extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_testNamespaceDirective(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.combinators;
    }
}

export namespace ListGetter_NodeReplacerTest_testNormalFormalParameter {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_testNormalFormalParameter';
    export type Interface = Omit<ListGetter_NodeReplacerTest_testNormalFormalParameter, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_testNormalFormalParameter extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_testNormalFormalParameter(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.metadata;
    }
}

export namespace ListGetter_NodeReplacerTest_testSwitchMember {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_testSwitchMember';
    export type Interface = Omit<ListGetter_NodeReplacerTest_testSwitchMember, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_testSwitchMember extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_testSwitchMember(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.labels;
    }
}

export namespace ListGetter_NodeReplacerTest_testSwitchMember_2 {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_testSwitchMember_2';
    export type Interface = Omit<ListGetter_NodeReplacerTest_testSwitchMember_2, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_testSwitchMember_2 extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_testSwitchMember_2(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.statements;
    }
}

export namespace ListGetter_NodeReplacerTest_test_compilationUnit {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_compilationUnit';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_compilationUnit, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_compilationUnit extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_compilationUnit(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.directives;
    }
}

export namespace ListGetter_NodeReplacerTest_test_comment {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_comment';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_comment, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_comment extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_comment(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.references;
    }
}

export namespace ListGetter_NodeReplacerTest_test_classDeclaration {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_classDeclaration';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_classDeclaration, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_classDeclaration extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_classDeclaration(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.members;
    }
}

export namespace ListGetter_NodeReplacerTest_test_cascadeExpression {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_cascadeExpression';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_cascadeExpression, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_cascadeExpression extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_cascadeExpression(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.cascadeSections;
    }
}

export namespace ListGetter_NodeReplacerTest_test_block {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_block';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_block, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_block extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_block(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.statements;
    }
}

export namespace ListGetter_NodeReplacerTest_test_argumentList {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_argumentList';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_argumentList, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_argumentList extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_argumentList(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.arguments;
    }
}

export namespace ListGetter_NodeReplacerTest_test_adjacentStrings_2 {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_adjacentStrings_2';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_adjacentStrings_2, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_adjacentStrings_2 extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_adjacentStrings_2(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.strings;
    }
}

export namespace ListGetter_NodeReplacerTest_test_adjacentStrings {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_adjacentStrings';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_adjacentStrings, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_adjacentStrings extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_adjacentStrings(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.strings;
    }
}

export namespace ListGetter_NodeReplacerTest_test_compilationUnit_2 {
    export type Constructors = NodeReplacerTest_ListGetter.Constructors | 'ListGetter_NodeReplacerTest_test_compilationUnit_2';
    export type Interface = Omit<ListGetter_NodeReplacerTest_test_compilationUnit_2, Constructors>;
}
@DartClass
export class ListGetter_NodeReplacerTest_test_compilationUnit_2 extends NodeReplacerTest_ListGetter<any,any> {
    constructor(arg0 : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListGetter_NodeReplacerTest_test_compilationUnit_2(arg0 : number) {
        super.NodeReplacerTest_ListGetter(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getList(node : any) : any {
        return node.declarations;
    }
}

export class properties {
}
