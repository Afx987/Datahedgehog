/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/optype_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../../abstract_context";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(OpTypeTest);
    });
};
export namespace OpTypeTest {
    export type Constructors = lib3.AbstractContextTest.Constructors | 'OpTypeTest';
    export type Interface = Omit<OpTypeTest, Constructors>;
}
@DartClass
export class OpTypeTest extends lib3.AbstractContextTest {
    private static __$testpath;
    static get testpath() { 
        if (this.__$testpath===undefined) {
            this.__$testpath = '/completionTest.dart';
        }
        return this.__$testpath;
    }

    completionOffset : number;

    visitor : any;

    addTestSource(content : string) : void {
        this.completionOffset = new core.DartString(content).indexOf('^');
        expect(this.completionOffset,isNot(equals(-1)),{
            reason : 'missing ^'});
        let nextOffset : number = new core.DartString(content).indexOf('^',this.completionOffset + 1);
        expect(nextOffset,equals(-1),{
            reason : 'too many ^'});
        content = new core.DartString(content).substring(0,this.completionOffset) + new core.DartString(content).substring(this.completionOffset + 1);
        super.addSource(OpTypeTest.testpath,content);
    }
    assertOpType(_namedArguments? : {caseLabel? : boolean,constructors? : boolean,namedArgs? : boolean,prefixed? : boolean,returnValue? : boolean,statementLabel? : boolean,staticMethodBody? : boolean,typeNames? : boolean,varNames? : boolean,voidReturn? : boolean,kind? : any}) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let {caseLabel,constructors,namedArgs,prefixed,returnValue,statementLabel,staticMethodBody,typeNames,varNames,voidReturn,kind} = Object.assign({
                "caseLabel" : false,
                "constructors" : false,
                "namedArgs" : false,
                "prefixed" : false,
                "returnValue" : false,
                "statementLabel" : false,
                "staticMethodBody" : false,
                "typeNames" : false,
                "varNames" : false,
                "voidReturn" : false,
                "kind" : CompletionSuggestionKind.INVOCATION}, _namedArguments );
            let analysisResult : any = await this.driver.getResult(OpTypeTest.testpath);
            let completionTarget : any = new bare.createInstance(any,null,analysisResult.unit,this.completionOffset);
            this.visitor = new bare.createInstance(any,null,completionTarget,this.completionOffset);
            expect(this.visitor.includeCaseLabelSuggestions,caseLabel,{
                reason : 'caseLabel'});
            expect(this.visitor.includeConstructorSuggestions,constructors,{
                reason : 'constructors'});
            expect(this.visitor.includeNamedArgumentSuggestions,namedArgs,{
                reason : 'namedArgs'});
            expect(this.visitor.includeReturnValueSuggestions,returnValue,{
                reason : 'returnValue'});
            expect(this.visitor.includeStatementLabelSuggestions,statementLabel,{
                reason : 'statementLabel'});
            expect(this.visitor.includeTypeNameSuggestions,typeNames,{
                reason : 'typeNames'});
            expect(this.visitor.includeVarNameSuggestions,varNames,{
                reason : 'varNames'});
            expect(this.visitor.includeVoidReturnSuggestions,voidReturn,{
                reason : 'voidReturn'});
            expect(this.visitor.inStaticMethodBody,staticMethodBody,{
                reason : 'staticMethodBody'});
            expect(this.visitor.isPrefixed,prefixed,{
                reason : 'prefixed'});
            expect(this.visitor.suggestKind,kind,{
                reason : 'suggestion kind'});
        } )());
    }

    test_Annotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C { @A^ }');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_ArgumentList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {expect(^)}');
            await this.assertOpType({
                namedArgs : true,returnValue : true,typeNames : true});
        } )());
    }

    test_ArgumentList_constructor_named_resolved_1_0() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { new A.b(^); }' + 'class A{ A.b({one, two}) {} }');
            await this.assertOpType({
                namedArgs : true});
        } )());
    }

    test_ArgumentList_constructor_named_resolved_1_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { new A.b(o^); }' + 'class A { A.b({one, two}) {} }');
            await this.assertOpType({
                namedArgs : true});
        } )());
    }

    test_ArgumentList_constructor_resolved_1_0() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { new A(^); }' + 'class A{ A({one, two}) {} }');
            await this.assertOpType({
                namedArgs : true});
        } )());
    }

    test_ArgumentList_constructor_resolved_1_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { new A(o^); }' + 'class A { A({one, two}) {} }');
            await this.assertOpType({
                namedArgs : true});
        } )());
    }

    test_ArgumentList_factory_named_resolved_1_0() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { new A.b(^); }' + 'class A{ factory A.b({one, two}) {} }');
            await this.assertOpType({
                namedArgs : true});
        } )());
    }

    test_ArgumentList_factory_named_resolved_1_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { new A.b(o^); }' + 'class A { factory A.b({one, two}) {} }');
            await this.assertOpType({
                namedArgs : true});
        } )());
    }

    test_ArgumentList_factory_resolved_1_0() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { new A(^); }' + 'class A{ factory A({one, two}) {} }');
            await this.assertOpType({
                namedArgs : true});
        } )());
    }

    test_ArgumentList_factory_resolved_1_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { new A(o^); }' + 'class A { factory A({one, two}) {} }');
            await this.assertOpType({
                namedArgs : true});
        } )());
    }

    test_ArgumentList_method_resolved_1_0() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { foo(^);} foo({one, two}) {}');
            await this.assertOpType({
                namedArgs : true});
        } )());
    }

    test_ArgumentList_method_resolved_1_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { foo(o^);} foo({one, two}) {}');
            await this.assertOpType({
                namedArgs : true});
        } )());
    }

    test_ArgumentList_namedParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {expect(foo: ^)}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_ArgumentList_prefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {expect(aa.^)}');
            await this.assertOpType({
                returnValue : true,typeNames : true,prefixed : true});
        } )());
    }

    test_ArgumentList_resolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {int.parse(^)}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_ArgumentList_resolved_2_0() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {int.parse("16", ^)}');
            await this.assertOpType({
                namedArgs : true});
        } )());
    }

    test_AsExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {var b; X _c; foo() {var a; (a as ^).foo();}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_AsIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {var asdf; foo() {as^}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_AsIdentifier2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {var asdf; foo() {A as^}');
            await this.assertOpType();
        } )());
    }

    test_Assert() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {assert(^)}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_AssignmentExpression_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} main() {int a; int ^b = 1;}');
            await this.assertOpType({
                varNames : true});
        } )());
    }

    test_AssignmentExpression_RHS() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} main() {int a; int b = ^}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_AssignmentExpression_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      main() {\n        int a;\n        ^ b = 1;}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_AssignmentExpression_type_newline() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      main() {\n        int a;\n        ^\n        b = 1;}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_AssignmentExpression_type_partial() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      main() {\n        int a;\n        int^ b = 1;}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_AssignmentExpression_type_partial_newline() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      main() {\n        int a;\n        i^\n        b = 1;}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_AwaitExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() async {A a; await ^}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_AwaitExpression2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() async {A a; await c^ await}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_AwaitExpression3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() async {A a; await ^ await foo;}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_AwaitExpression4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() async {A a; await ^ await bar();}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_AwaitExpression_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() async {A a; int x = await ^}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_AwaitExpression_assignment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() async {A a; int x = await ^ await foo;}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_AwaitExpression_assignment3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() async {A a; int x = await v^ int y = await foo;}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_BinaryExpression_LHS() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {int a = 1, b = ^ + 2;}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_BinaryExpression_RHS() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {int a = 1, b = 2 + ^;}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_BinaryExpression_RHS2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {if (c < ^)}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_Block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      class X {\n        a() {\n          var f;\n          localF(int arg1) { }\n          {var x;}\n          ^ var r;\n        }\n      }');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_Block_catch_1a() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} ^}');
            await this.assertOpType();
        } )());
    }

    test_Block_catch_1b() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} c^}');
            await this.assertOpType();
        } )());
    }

    test_Block_catch_1c() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} ^;}');
            await this.assertOpType();
        } )());
    }

    test_Block_catch_1d() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} ^ Foo foo;}');
            await this.assertOpType();
        } )());
    }

    test_Block_catch_2a() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} catch () {} ^}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_Block_catch_2b() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} catch () {} c^}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_Block_catch_2c() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} catch () {} ^;}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_Block_catch_2d() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} catch () {} ^ Foo foo;}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_Block_catch_3a() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} finally {} ^}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_Block_catch_3b() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} finally {} c^}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_Block_catch_3c() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} finally {} ^;}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_Block_catch_3d() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} finally {} ^ Foo foo;}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_Block_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A extends E implements I with M {a() {^}}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_Block_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {final ^}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_Block_final2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {final S^ v;}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_Block_final3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {final ^ v;}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_Block_final_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {final ^ final S x;}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_Block_final_final2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {final S^ final S x;}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_Block_identifier_partial() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class X {a() {var f; {var x;} D^ var r;} void b() { }}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_Block_keyword() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C { static C get instance => null; } main() {C.in^}');
            await this.assertOpType({
                prefixed : true,returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_Block_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {static foo() {^}}');
            await this.assertOpType({
                returnValue : true,typeNames : true,staticMethodBody : true,voidReturn : true});
        } )());
    }

    test_Break_after_label() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { foo: while (true) { break foo ^ ; } }');
            await this.assertOpType();
        } )());
    }

    test_Break_before_label() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { foo: while (true) { break ^ foo; } }');
            await this.assertOpType({
                statementLabel : true});
        } )());
    }

    test_Break_no_label() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { foo: while (true) { break ^; } }');
            await this.assertOpType({
                statementLabel : true});
        } )());
    }

    test_CascadeExpression_selector1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      // looks like a cascade to the parser\n      // but the user is trying to get completions for a non-cascade\n      main() {A a; a.^.z}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true,prefixed : true});
        } )());
    }

    test_CascadeExpression_selector2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {A a; a..^z}');
            await this.assertOpType({
                returnValue : true,voidReturn : true,prefixed : true});
        } )());
    }

    test_CascadeExpression_selector2_withTrailingReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {A a; a..^ return}');
            await this.assertOpType({
                returnValue : true,voidReturn : true,prefixed : true});
        } )());
    }

    test_CascadeExpression_target() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {A a; a^..b}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_catch_4a1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} ^ on SomeException {}}');
            await this.assertOpType();
        } )());
    }

    test_catch_4a2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} c^ on SomeException {}}');
            await this.assertOpType();
        } )());
    }

    test_catch_4b1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} ^ catch (e) {}}');
            await this.assertOpType();
        } )());
    }

    test_catch_4b2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} c^ catch (e) {}}');
            await this.assertOpType();
        } )());
    }

    test_catch_4c1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} ^ finally {}}');
            await this.assertOpType();
        } )());
    }

    test_catch_4c2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} c^ finally {}}');
            await this.assertOpType();
        } )());
    }

    test_catch_5a() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} on ^ finally {}}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_catch_5b() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} on E^ finally {}}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_CatchClause_onType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {try{var x;} on ^ {}}}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_CatchClause_onType_noBrackets() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {try{var x;} on ^}}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_CatchClause_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {try{var x;} on E catch (e) {^}}}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_CatchClause_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {try{var x;} catch (e, s) {^}}}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_ClassDeclaration_body() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('@deprecated class A {^}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_ClassDeclaration_body2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('@deprecated class A {^mth() {}}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_Combinator_hide() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      import "/testAB.dart" hide ^;\n      class X {}');
            await this.assertOpType();
        } )());
    }

    test_Combinator_show() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      import "/testAB.dart" show ^;\n      import "/testCD.dart";\n      class X {}');
            await this.assertOpType();
        } )());
    }

    test_CommentReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {/** [^] */ mth() {}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true,kind : CompletionSuggestionKind.IDENTIFIER});
        } )());
    }

    test_ConditionalExpression_elseExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {foo(){var f; {var x;} return a ? T1 : T^}}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_ConditionalExpression_elseExpression_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {foo(){var f; {var x;} return a ? T1 : ^}}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_ConditionalExpression_partial_thenExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {foo(){var f; {var x;} return a ? T^}}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_ConditionalExpression_partial_thenExpression_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {foo(){var f; {var x;} return a ? ^}}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_ConditionalExpression_thenExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {foo(){var f; {var x;} return a ? T^ : c}}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_ConstructorName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {new X.^}');
            await this.assertOpType({
                constructors : true,prefixed : true});
        } )());
    }

    test_ConstructorName_name_resolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {new Str^ing.fromCharCodes([]);}');
            await this.assertOpType({
                constructors : true});
        } )());
    }

    test_ConstructorName_resolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {new String.fr^omCharCodes([]);}');
            await this.assertOpType({
                constructors : true,prefixed : true});
        } )());
    }

    test_ConstructorName_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {new String.fr^omCharCodes([]);}');
            await this.assertOpType({
                constructors : true,prefixed : true});
        } )());
    }

    test_Continue_after_label() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { foo: while (true) { continue foo ^ ; } }');
            await this.assertOpType();
        } )());
    }

    test_Continue_before_label() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { foo: while (true) { continue ^ foo; } }');
            await this.assertOpType({
                statementLabel : true,caseLabel : true});
        } )());
    }

    test_Continue_no_label() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { foo: while (true) { continue ^; } }');
            await this.assertOpType({
                statementLabel : true,caseLabel : true});
        } )());
    }

    test_DefaultFormalParameter_named_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a(blat: ^) { }}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_DoStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {do{} while(^x);}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_ExpressionFunctionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('m(){[1].forEach((x)=>^x);}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_ExpressionStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('n(){f(3);^}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_ExpressionStatement_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {a() {C ^}}');
            await this.assertOpType({
                varNames : true});
        } )());
    }

    test_ExpressionStatement_name_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {a() {C ^;}}');
            await this.assertOpType({
                varNames : true});
        } )());
    }

    test_ExpressionStatement_prefixed_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {a() {x.Y ^}}');
            await this.assertOpType({
                varNames : true});
        } )());
    }

    test_ExpressionStatement_prefixed_name_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {a() {x.Y ^;}}');
            await this.assertOpType({
                varNames : true});
        } )());
    }

    test_ExtendsClause() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class x extends ^\n{}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_FieldDeclaration_name_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {A ^}');
            await this.assertOpType({
                varNames : true});
        } )());
    }

    test_FieldDeclaration_name_var() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {var ^}');
            await this.assertOpType();
        } )());
    }

    test_ForEachStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {for(z in ^zs) {}}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_ForEachStatement_body_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (int foo in bar) {^}}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_ForEachStatement_body_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (foo in bar) {^}}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_ForEachStatement_iterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (int foo in ^) {}}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_ForEachStatement_loopVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (^ in args) {}}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_ForEachStatement_loopVariable_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (String ^ in args) {}}');
            await this.assertOpType();
        } )());
    }

    test_ForEachStatement_loopVariable_name2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (String f^ in args) {}}');
            await this.assertOpType();
        } )());
    }

    test_ForEachStatement_loopVariable_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (^ foo in args) {}}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_ForEachStatement_loopVariable_type2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (S^ foo in args) {}}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_FormalParameter_partialType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a(b.^ f) { }}');
            await this.assertOpType({
                returnValue : true,typeNames : true,prefixed : true});
        } )());
    }

    test_FormalParameter_partialType2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a(b.z^ f) { }}');
            await this.assertOpType({
                returnValue : true,typeNames : true,prefixed : true});
        } )());
    }

    test_FormalParameter_partialType3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a(b.^) { }}');
            await this.assertOpType({
                returnValue : true,typeNames : true,prefixed : true});
        } )());
    }

    test_FormalParameterList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a(^) { }}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_ForStatement_condition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {for (int index = 0; i^)}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_ForStatement_initializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {List a; for (^)}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_ForStatement_initializer_inKeyword() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { for (var v i^) }');
            await this.assertOpType();
        } )());
    }

    test_ForStatement_initializer_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {List a; for (i^ v = 0;)}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_ForStatement_initializer_variableNameEmpty_afterType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { for (String ^) }');
            await this.assertOpType({
                varNames : true});
        } )());
    }

    test_ForStatement_updaters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {for (int index = 0; index < 10; i^)}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_ForStatement_updaters_prefix_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {for (int index = 0; index < 10; ++i^)}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_FunctionDeclaration1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('const ^Fara();');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_FunctionDeclaration2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('const F^ara();');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_FunctionDeclaration_inLineComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      // normal comment ^\n      zoo(z) { } String name;');
            await this.assertOpType();
        } )());
    }

    test_FunctionDeclaration_inLineComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      // normal ^comment\n      zoo(z) { } String name;');
            await this.assertOpType();
        } )());
    }

    test_FunctionDeclaration_inLineComment3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      // normal comment ^\n      // normal comment 2\n      zoo(z) { } String name;');
            await this.assertOpType();
        } )());
    }

    test_FunctionDeclaration_inLineComment4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      // normal comment\n      // normal comment 2^\n      zoo(z) { } String name;');
            await this.assertOpType();
        } )());
    }

    test_FunctionDeclaration_inLineDocComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      /// some dartdoc ^\n      zoo(z) { } String name;');
            await this.assertOpType();
        } )());
    }

    test_FunctionDeclaration_inLineDocComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      /// some ^dartdoc\n      zoo(z) { } String name;');
            await this.assertOpType();
        } )());
    }

    test_FunctionDeclaration_inStarComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('/* ^ */ zoo(z) {} String name;');
            await this.assertOpType();
        } )());
    }

    test_FunctionDeclaration_inStarComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('/*  *^/ zoo(z) {} String name;');
            await this.assertOpType();
        } )());
    }

    test_FunctionDeclaration_inStarDocComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('/** ^ */ zoo(z) { } String name; ');
            await this.assertOpType();
        } )());
    }

    test_FunctionDeclaration_inStarDocComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('/**  *^/ zoo(z) { } String name;');
            await this.assertOpType();
        } )());
    }

    test_FunctionDeclaration_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('^ zoo(z) { } String name;');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_FunctionDeclaration_returnType_afterLineComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      // normal comment\n      ^ zoo(z) {} String name;');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_FunctionDeclaration_returnType_afterLineComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('// normal comment\n^ zoo(z) {} String name;');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_FunctionDeclaration_returnType_afterLineDocComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      /// some dartdoc\n      ^ zoo(z) { } String name;');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_FunctionDeclaration_returnType_afterLineDocComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('/// some dartdoc\n^ zoo(z) { } String name;');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_FunctionDeclaration_returnType_afterStarComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('/* */ ^ zoo(z) { } String name;');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_FunctionDeclaration_returnType_afterStarComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('/* */^ zoo(z) { } String name;');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_FunctionDeclaration_returnType_afterStarDocComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('/** */ ^ zoo(z) { } String name;');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_FunctionDeclaration_returnType_afterStarDocComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('/** */^ zoo(z) { } String name;');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_FunctionExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main()^ { int b = 2; b++; b. }');
            await this.assertOpType();
        } )());
    }

    test_FunctionExpressionInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { ((x) => x + 7)^(2) }');
            await this.assertOpType();
        } )());
    }

    test_FunctionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('typedef n^ ;');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_IfStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(){var a; if (true) ^}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_IfStatement_condition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(){var a; if (^)}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_IfStatement_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {foo() {A a; if (^) something}}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_IfStatement_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var a; if (a.^) something}');
            await this.assertOpType({
                returnValue : true,typeNames : true,prefixed : true});
        } )());
    }

    test_ImplementsClause() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class x implements ^\n{}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_ImportDirective_dart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      import "dart^";\n      main() {}');
            await this.assertOpType();
        } )());
    }

    test_IndexExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {foo(){var f; {var x;} f[^]}}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_IndexExpression2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {foo(){var f; {var x;} f[T^]}}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_InstanceCreationExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {foo(){var f; {var x;} new ^}}');
            await this.assertOpType({
                constructors : true});
        } )());
    }

    test_InstanceCreationExpression_keyword() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {foo(){var f; {var x;} new^ }}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_InstanceCreationExpression_keyword2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {foo(){var f; {var x;} new^ C();}}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_InstanceCreationExpression_trailingStmt() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {foo(){var f; {var x;} new ^ int x = 7;}}');
            await this.assertOpType({
                constructors : true});
        } )());
    }

    test_InterpolationExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {String name; print("hello $^");}');
            await this.assertOpType({
                returnValue : true});
        } )());
    }

    test_InterpolationExpression_block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {String name; print("hello ${n^}");}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_InterpolationExpression_prefix_selector() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {String name; print("hello ${name.^}");}');
            await this.assertOpType({
                returnValue : true,typeNames : true,prefixed : true});
        } )());
    }

    test_InterpolationExpression_prefix_target() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {String name; print("hello ${nam^e.length}");}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_IsExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var x; if (x is ^) { }}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_IsExpression_target() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(){var a; if (^ is A)}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_IsExpression_type_partial() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(){var a; if (a is Obj^)}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_Literal_list() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var Some; print([^]);}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_Literal_list2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var Some; print([S^]);}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_Literal_string() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {"hel^lo"}}');
            await this.assertOpType();
        } )());
    }

    test_MapLiteralEntry() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo = {^');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_MapLiteralEntry1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo = {T^');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_MapLiteralEntry2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo = {7:T^};');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_MethodDeclaration1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class Bar {const ^Fara();}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_MethodDeclaration2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class Bar {const F^ara();}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_MethodDeclaration_inLineComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      class C2 {\n        // normal comment ^\n        zoo(z) { } String name; }');
            await this.assertOpType();
        } )());
    }

    test_MethodDeclaration_inLineComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      class C2 {\n        // normal ^comment\n        zoo(z) { } String name; }');
            await this.assertOpType();
        } )());
    }

    test_MethodDeclaration_inLineComment3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      class C2 {\n        // normal comment ^\n        // normal comment 2\n        zoo(z) { } String name; }');
            await this.assertOpType();
        } )());
    }

    test_MethodDeclaration_inLineComment4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      class C2 {\n        // normal comment\n        // normal comment 2^\n        zoo(z) { } String name; }');
            await this.assertOpType();
        } )());
    }

    test_MethodDeclaration_inLineDocComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      class C2 {\n        /// some dartdoc ^\n        zoo(z) { } String name; }');
            await this.assertOpType();
        } )());
    }

    test_MethodDeclaration_inLineDocComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      class C2 {\n        /// some ^dartdoc\n        zoo(z) { } String name; }');
            await this.assertOpType();
        } )());
    }

    test_MethodDeclaration_inStarComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C2 {/* ^ */ zoo(z) {} String name;}');
            await this.assertOpType();
        } )());
    }

    test_MethodDeclaration_inStarComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C2 {/*  *^/ zoo(z) {} String name;}');
            await this.assertOpType();
        } )());
    }

    test_MethodDeclaration_inStarDocComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C2 {/** ^ */ zoo(z) { } String name; }');
            await this.assertOpType();
        } )());
    }

    test_MethodDeclaration_inStarDocComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C2 {/**  *^/ zoo(z) { } String name; }');
            await this.assertOpType();
        } )());
    }

    test_MethodDeclaration_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C2 {^ zoo(z) { } String name; }');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_MethodDeclaration_returnType_afterLineComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      class C2 {\n        // normal comment\n        ^ zoo(z) {} String name;}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_MethodDeclaration_returnType_afterLineComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C2 {\n  // normal comment\n^ zoo(z) {} String name;}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_MethodDeclaration_returnType_afterLineDocComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      class C2 {\n        /// some dartdoc\n        ^ zoo(z) { } String name; }');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_MethodDeclaration_returnType_afterLineDocComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C2 {\n  /// some dartdoc\n^ zoo(z) { } String name; }');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_MethodDeclaration_returnType_afterStarComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C2 {/* */ ^ zoo(z) { } String name; }');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_MethodDeclaration_returnType_afterStarComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C2 {/* */^ zoo(z) { } String name; }');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_MethodDeclaration_returnType_afterStarDocComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C2 {/** */ ^ zoo(z) { } String name; }');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_MethodDeclaration_returnType_afterStarDocComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C2 {/** */^ zoo(z) { } String name; }');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_MethodInvocation_no_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      class A implements I {\n        // no semicolon between completion point and next statement\n        set _s2(I x) {x.^ m(null);}\n      }');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true,prefixed : true});
        } )());
    }

    test_PostfixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('int x = 0; main() {ax+^+;}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_PrefixedIdentifier_class_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {A.^}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true,prefixed : true});
        } )());
    }

    test_PrefixedIdentifier_class_imported() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {A a; a.^}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true,prefixed : true});
        } )());
    }

    test_PrefixedIdentifier_prefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class X {foo(){A^.bar}}');
            await this.assertOpType({
                typeNames : true,returnValue : true,voidReturn : true});
        } )());
    }

    test_PropertyAccess_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {"hello".to^String().length}}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true,prefixed : true});
        } )());
    }

    test_PropertyAccess_noTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {.^}');
            await this.assertOpType();
        } )());
    }

    test_PropertyAccess_noTarget2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {.^.}');
            await this.assertOpType();
        } )());
    }

    test_PropertyAccess_noTarget3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {..^}');
            await this.assertOpType();
        } )());
    }

    test_PropertyAccess_selector() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {"hello".length.^}}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true,prefixed : true});
        } )());
    }

    test_ReturnStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('f() { var vvv = 42; return ^ }');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_SimpleFormalParameter_closure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('mth() { PNGS.sort((String a, Str^) => a.compareTo(b)); }');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_SimpleFormalParameter_name1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('m(String na^) {}');
            await this.assertOpType({
                typeNames : false});
        } )());
    }

    test_SimpleFormalParameter_name2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('m(int first, String na^) {}');
            await this.assertOpType({
                typeNames : false});
        } )());
    }

    test_SimpleFormalParameter_type_optionalNamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('m({Str^}) {}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_SimpleFormalParameter_type_optionalPositional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('m([Str^]) {}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_SimpleFormalParameter_type_withName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('m(Str^ name) {}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_SimpleFormalParameter_type_withoutName1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('m(Str^) {}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_SimpleFormalParameter_type_withoutName2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('m(^) {}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_SimpleFormalParameter_type_withoutName3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('m(int first, Str^) {}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_SwitchCase_before() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(k) {^case 1:}}');
            await this.assertOpType();
        } )());
    }

    test_SwitchCase_between() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(k) {case 1: ^ case 2: return}}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_SwitchCase_expression1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('m() {switch (x) {case ^D: return;}}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_SwitchCase_expression2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('m() {switch (x) {case ^}}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_SwitchDefault_before() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(k) { ^ default: return;}}');
            await this.assertOpType();
        } )());
    }

    test_SwitchDefault_between() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(k) {case 1: ^ default: return;}}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_SwitchStatement_body_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(k) {^}}');
            await this.assertOpType();
        } )());
    }

    test_SwitchStatement_body_end() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(k) {case 1:^}}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_SwitchStatement_body_end2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(k) {case 1:as^}}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_SwitchStatement_expression1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(^k) {case 1:{}}}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_SwitchStatement_expression2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(k^) {case 1:{}}}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_SwitchStatement_expression_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(^) {case 1:{}}}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_ThisExpression_block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      class A implements I {\n        // no semicolon between completion point and next statement\n        set s1(I x) {} set _s2(I x) {this.^ m(null);}\n      }');
            await this.assertOpType({
                returnValue : true,voidReturn : true,prefixed : true});
        } )());
    }

    test_ThisExpression_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      class A implements I {\n        A() {this.^}\n      }');
            await this.assertOpType({
                returnValue : true,voidReturn : true,prefixed : true});
        } )());
    }

    test_ThisExpression_constructor_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      class A implements I {\n        A(this.^) {}\n      }');
            await this.assertOpType({
                prefixed : true});
        } )());
    }

    test_ThisExpression_constructor_param2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      class A implements I {\n        A(this.f^) {}\n      }');
            await this.assertOpType({
                prefixed : true});
        } )());
    }

    test_ThisExpression_constructor_param3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      class A implements I {\n        A(this.^f) {}\n      }');
            await this.assertOpType({
                prefixed : true});
        } )());
    }

    test_ThisExpression_constructor_param4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      class A implements I {\n        A(Str^ this.foo) {}\n      }');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_ThrowExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {throw ^;}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_TopLevelVariableDeclaration_typed_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} B ^');
            await this.assertOpType({
                varNames : true});
        } )());
    }

    test_TopLevelVariableDeclaration_typed_name_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} B ^;');
            await this.assertOpType({
                varNames : true});
        } )());
    }

    test_TopLevelVariableDeclaration_untyped_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} var ^');
            await this.assertOpType();
        } )());
    }

    test_TypeArgumentList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { C<^> c; }');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_TypeArgumentList2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { C<C^> c; }');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_TypeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class tezetst <String, ^List> {}');
            await this.assertOpType();
        } )());
    }

    test_TypeParameterList_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class tezetst <^> {}');
            await this.assertOpType();
        } )());
    }

    test_VariableDeclaration_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var ^}');
            await this.assertOpType();
        } )());
    }

    test_VariableDeclaration_name_hasSome_parameterizedType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {List<int> m^}');
            await this.assertOpType({
                varNames : true});
        } )());
    }

    test_VariableDeclaration_name_hasSome_simpleType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {String m^}');
            await this.assertOpType({
                varNames : true});
        } )());
    }

    test_VariableDeclarationList_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {final ^}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    test_VariableDeclarationStatement_afterSemicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {var a; x() {var b;^}}');
            await this.assertOpType({
                returnValue : true,typeNames : true,voidReturn : true});
        } )());
    }

    test_VariableDeclarationStatement_RHS() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {bar(){var f; {var x;} var e = ^}}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_VariableDeclarationStatement_RHS_missing_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {bar(){var f; {var x;} var e = ^ var g}}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_WhileStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('mth() { while (b^) {} }}');
            await this.assertOpType({
                returnValue : true,typeNames : true});
        } )());
    }

    test_WithClause() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class x extends Object with ^\n{}');
            await this.assertOpType({
                typeNames : true});
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OpTypeTest() {
    }
}

export class properties {
}
