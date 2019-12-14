/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/completion_target_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../abstract_context";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(CompletionTargetTest);
    });
};
export namespace CompletionTargetTest {
    export type Constructors = lib3.AbstractContextTest.Constructors | 'CompletionTargetTest';
    export type Interface = Omit<CompletionTargetTest, Constructors>;
}
@DartClass
export class CompletionTargetTest extends lib3.AbstractContextTest {
    testSource : any;

    completionOffset : number;

    target : any;

    addTestSource(content : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this.completionOffset,isNull,{
                reason : 'Call addTestSource exactly once'});
            this.completionOffset = new core.DartString(content).indexOf('^');
            expect(this.completionOffset,isNot(equals(-1)),{
                reason : 'missing ^'});
            let nextOffset : number = new core.DartString(content).indexOf('^',this.completionOffset + 1);
            expect(nextOffset,equals(-1),{
                reason : 'too many ^'});
            content = new core.DartString(content).substring(0,this.completionOffset) + new core.DartString(content).substring(this.completionOffset + 1);
            this.testSource = this.addSource('/test.dart',content);
            let result : any = await this.driver.getResult(this.testSource.fullName);
            this.target = new bare.createInstance(any,null,result.unit,this.completionOffset);
        } )());
    }

    assertTarget(entityText : any,nodeText : any,_namedArguments? : {argIndex? : number,isFunctionalArgument? : boolean}) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let {argIndex,isFunctionalArgument} = Object.assign({
                "argIndex" : null,
                "isFunctionalArgument" : false}, _namedArguments );
            var assertCommon : () => void = () : void =>  {
                expect(this.target.entity.toString(),entityText,{
                    reason : 'entity'});
                expect(this.target.containingNode.toString(),nodeText,{
                    reason : 'containingNode'});
                expect(this.target.argIndex,argIndex,{
                    reason : 'argIndex'});
            };
            assertCommon();
            let result : any = await this.driver.getResult(this.testSource.fullName);
            this.target = new bare.createInstance(any,null,result.unit,this.completionOffset);
            assertCommon();
            expect(this.target.isFunctionalArgument(),isFunctionalArgument);
        } )());
    }

    test_ArgumentList_InstanceCreationExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() {new Foo(^)}');
            await this.assertTarget(')','()',{
                argIndex : 0});
        } )());
    }

    test_ArgumentList_InstanceCreationExpression2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() {new Foo(a,^)}');
            await this.assertTarget(')','(a)',{
                argIndex : 1});
        } )());
    }

    test_ArgumentList_InstanceCreationExpression_functionArg2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() {new B(^)} class B{B(f()){}}');
            await this.assertTarget(')','()',{
                argIndex : 0,isFunctionalArgument : true});
        } )());
    }

    test_ArgumentList_InstanceCreationExpression_functionArg3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() {new B(1, f: ^)} class B{B(int i, {f()}){}}');
            await this.assertTarget('','f: ',{
                argIndex : 1,isFunctionalArgument : true});
        } )());
    }

    test_ArgumentList_MethodInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() {foo(^)}');
            await this.assertTarget(')','()',{
                argIndex : 0});
        } )());
    }

    test_ArgumentList_MethodInvocation2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() {foo(^n)}');
            await this.assertTarget('n','(n)',{
                argIndex : 0});
        } )());
    }

    test_ArgumentList_MethodInvocation3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() {foo(n^)}');
            await this.assertTarget('n','(n)',{
                argIndex : 0});
        } )());
    }

    test_ArgumentList_MethodInvocation3a() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() {foo((n)^)}');
            await this.assertTarget(')','((n))',{
                argIndex : 0});
        } )());
    }

    test_ArgumentList_MethodInvocation4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() {foo(n,^)}');
            await this.assertTarget(')','(n)',{
                argIndex : 1});
        } )());
    }

    test_ArgumentList_MethodInvocation_functionArg() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() {foo(^)} foo(f()) {}');
            await this.assertTarget(')','()',{
                argIndex : 0,isFunctionalArgument : true});
        } )());
    }

    test_ArgumentList_MethodInvocation_functionArg2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() {new B().boo(^)} class B{boo(f()){}}');
            await this.assertTarget(')','()',{
                argIndex : 0,isFunctionalArgument : true});
        } )());
    }

    test_ArgumentList_MethodInvocation_functionArg3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() {foo(f: ^)} foo({f()}) {}');
            await this.assertTarget('','f: ',{
                argIndex : 0,isFunctionalArgument : true});
        } )());
    }

    test_ArgumentList_MethodInvocation_functionArg4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() {new B().boo(f: ^)} class B{boo({f()}){}}');
            await this.assertTarget('','f: ',{
                argIndex : 0,isFunctionalArgument : true});
        } )());
    }

    test_AsExpression_identifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class A {var b; X _c; foo() {var a; (a^ as String).foo();}');
            await this.assertTarget('a as String','(a as String)');
        } )());
    }

    test_AsExpression_keyword() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class A {var b; X _c; foo() {var a; (a ^as String).foo();}');
            await this.assertTarget('as','a as String');
        } )());
    }

    test_AsExpression_keyword2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class A {var b; X _c; foo() {var a; (a a^s String).foo();}');
            await this.assertTarget('as','a as String');
        } )());
    }

    test_AsExpression_keyword3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class A {var b; X _c; foo() {var a; (a as^ String).foo();}');
            await this.assertTarget('as','a as String');
        } )());
    }

    test_AsExpression_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class A {var b; X _c; foo() {var a; (a as ^String).foo();}');
            await this.assertTarget('String','a as String');
        } )());
    }

    test_Block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() {^}');
            await this.assertTarget('}','{}');
        } )());
    }

    test_Block_keyword() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class C { static C get instance => null; } main() {C.in^}');
            await this.assertTarget('in','C.in');
        } )());
    }

    test_Block_keyword2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class C { static C get instance => null; } main() {C.i^n}');
            await this.assertTarget('in','C.in');
        } )());
    }

    test_FormalParameter_partialType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('foo(b.^ f) { }');
            await this.assertTarget('f','b.f');
        } )());
    }

    test_FormalParameter_partialType2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('foo(b.z^ f) { }');
            await this.assertTarget('z','b.z');
        } )());
    }

    test_FormalParameter_partialType3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('foo(b.^) { }');
            await this.assertTarget('','b.');
        } )());
    }

    test_FormalParameterList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('foo(^) { }');
            await this.assertTarget(')','()');
        } )());
    }

    test_FunctionDeclaration_inLineComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('      // normal comment ^\n      zoo(z) { } String name;');
            await this.assertTarget('// normal comment ','zoo(z) {} String name;');
        } )());
    }

    test_FunctionDeclaration_inLineComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('      // normal ^comment\n      zoo(z) { } String name;');
            await this.assertTarget('// normal comment','zoo(z) {} String name;');
        } )());
    }

    test_FunctionDeclaration_inLineComment3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('      // normal comment ^\n      // normal comment 2\n      zoo(z) { } String name;');
            await this.assertTarget('// normal comment ','zoo(z) {} String name;');
        } )());
    }

    test_FunctionDeclaration_inLineComment4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('      // normal comment\n      // normal comment 2^\n      zoo(z) { } String name;');
            await this.assertTarget('// normal comment 2','zoo(z) {} String name;');
        } )());
    }

    test_FunctionDeclaration_inLineDocComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('      /// some dartdoc ^\n      zoo(z) { } String name;');
            await this.assertTarget('/// some dartdoc ','');
            expect(is(this.target.containingNode, any),isTrue);
            expect(this.target.containingNode.parent.toSource(),'zoo(z) {}');
        } )());
    }

    test_FunctionDeclaration_inLineDocComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('      /// some ^dartdoc\n      zoo(z) { } String name;');
            await this.assertTarget('/// some dartdoc','');
            expect(is(this.target.containingNode, any),isTrue);
            expect(this.target.containingNode.parent.toSource(),'zoo(z) {}');
        } )());
    }

    test_FunctionDeclaration_inStarComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('/* ^ */ zoo(z) {} String name;');
            await this.assertTarget('/*  */','zoo(z) {} String name;');
        } )());
    }

    test_FunctionDeclaration_inStarComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('/*  *^/ zoo(z) {} String name;');
            await this.assertTarget('/*  */','zoo(z) {} String name;');
        } )());
    }

    test_FunctionDeclaration_inStarDocComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('/** ^ */ zoo(z) { } String name;');
            await this.assertTarget('/**  */','');
            expect(is(this.target.containingNode, any),isTrue);
            expect(this.target.containingNode.parent.toSource(),'zoo(z) {}');
        } )());
    }

    test_FunctionDeclaration_inStarDocComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('/**  *^/ zoo(z) { } String name;');
            await this.assertTarget('/**  */','');
            expect(is(this.target.containingNode, any),isTrue);
            expect(this.target.containingNode.parent.toSource(),'zoo(z) {}');
        } )());
    }

    test_FunctionDeclaration_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('^ zoo(z) { } String name;');
            await this.assertTarget('zoo(z) {}','zoo(z) {} String name;');
        } )());
    }

    test_FunctionDeclaration_returnType_afterLineComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('      // normal comment\n      ^ zoo(z) {} String name;');
            await this.assertTarget('zoo(z) {}','zoo(z) {} String name;');
        } )());
    }

    test_FunctionDeclaration_returnType_afterLineComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('// normal comment\n^ zoo(z) {} String name;');
            await this.assertTarget('zoo(z) {}','zoo(z) {} String name;');
        } )());
    }

    test_FunctionDeclaration_returnType_afterLineDocComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('      /// some dartdoc\n      ^ zoo(z) { } String name; ');
            await this.assertTarget('zoo','zoo(z) {}');
        } )());
    }

    test_FunctionDeclaration_returnType_afterLineDocComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('/// some dartdoc\n^ zoo(z) { } String name;');
            await this.assertTarget('zoo','zoo(z) {}');
        } )());
    }

    test_FunctionDeclaration_returnType_afterStarComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('/* */ ^ zoo(z) { } String name;');
            await this.assertTarget('zoo(z) {}','zoo(z) {} String name;');
        } )());
    }

    test_FunctionDeclaration_returnType_afterStarComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('/* */^ zoo(z) { } String name;');
            await this.assertTarget('zoo(z) {}','zoo(z) {} String name;');
        } )());
    }

    test_FunctionDeclaration_returnType_afterStarDocComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('/** */ ^ zoo(z) { } String name;');
            await this.assertTarget('zoo','zoo(z) {}');
        } )());
    }

    test_FunctionDeclaration_returnType_afterStarDocComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('/** */^ zoo(z) { } String name;');
            await this.assertTarget('zoo','zoo(z) {}');
        } )());
    }

    test_InstanceCreationExpression_identifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class C {foo(){var f; {var x;} new ^C();}}');
            await this.assertTarget('C','new C()');
        } )());
    }

    test_InstanceCreationExpression_keyword() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class C {foo(){var f; {var x;} new^ }}');
            await this.assertTarget('new ();','{var f; {var x;} new ();}');
        } )());
    }

    test_InstanceCreationExpression_keyword2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class C {foo(){var f; {var x;} new^ C();}}');
            await this.assertTarget('new C();','{var f; {var x;} new C();}');
        } )());
    }

    test_MapLiteralEntry() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('foo = {^');
            await this.assertTarget(' : ','{ : }');
        } )());
    }

    test_MapLiteralEntry1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('foo = {T^');
            await this.assertTarget('T : ','{T : }');
        } )());
    }

    test_MapLiteralEntry2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('foo = {7:T^};');
            await this.assertTarget('T','7 : T');
        } )());
    }

    test_MethodDeclaration_inLineComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('      class C2 {\n        // normal comment ^\n        zoo(z) { } String name; }');
            await this.assertTarget('// normal comment ','class C2 {zoo(z) {} String name;}');
        } )());
    }

    test_MethodDeclaration_inLineComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('      class C2 {\n        // normal ^comment\n        zoo(z) { } String name; }');
            await this.assertTarget('// normal comment','class C2 {zoo(z) {} String name;}');
        } )());
    }

    test_MethodDeclaration_inLineComment3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('      class C2 {\n        // normal comment ^\n        // normal comment 2\n        zoo(z) { } String name; }');
            await this.assertTarget('// normal comment ','class C2 {zoo(z) {} String name;}');
        } )());
    }

    test_MethodDeclaration_inLineComment4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('      class C2 {\n        // normal comment\n        // normal comment 2^\n        zoo(z) { } String name; }');
            await this.assertTarget('// normal comment 2','class C2 {zoo(z) {} String name;}');
        } )());
    }

    test_MethodDeclaration_inLineDocComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('      class C2 {\n        /// some dartdoc ^\n        zoo(z) { } String name; }');
            await this.assertTarget('/// some dartdoc ','');
            expect(is(this.target.containingNode, any),isTrue);
            expect(this.target.containingNode.parent.toSource(),'zoo(z) {}');
        } )());
    }

    test_MethodDeclaration_inLineDocComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('      class C2 {\n        /// some ^dartdoc\n        zoo(z) { } String name; }');
            await this.assertTarget('/// some dartdoc','');
            expect(is(this.target.containingNode, any),isTrue);
            expect(this.target.containingNode.parent.toSource(),'zoo(z) {}');
        } )());
    }

    test_MethodDeclaration_inStarComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class C2 {/* ^ */ zoo(z) {} String name;}');
            await this.assertTarget('/*  */','class C2 {zoo(z) {} String name;}');
        } )());
    }

    test_MethodDeclaration_inStarComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class C2 {/*  *^/ zoo(z) {} String name;}');
            await this.assertTarget('/*  */','class C2 {zoo(z) {} String name;}');
        } )());
    }

    test_MethodDeclaration_inStarDocComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class C2 {/** ^ */ zoo(z) { } String name; }');
            await this.assertTarget('/**  */','');
            expect(is(this.target.containingNode, any),isTrue);
            expect(this.target.containingNode.parent.toSource(),'zoo(z) {}');
        } )());
    }

    test_MethodDeclaration_inStarDocComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class C2 {/**  *^/ zoo(z) { } String name; }');
            await this.assertTarget('/**  */','');
            expect(is(this.target.containingNode, any),isTrue);
            expect(this.target.containingNode.parent.toSource(),'zoo(z) {}');
        } )());
    }

    test_MethodDeclaration_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class C2 {^ zoo(z) { } String name; }');
            await this.assertTarget('zoo(z) {}','class C2 {zoo(z) {} String name;}');
        } )());
    }

    test_MethodDeclaration_returnType_afterLineComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('      class C2 {\n        // normal comment\n        ^ zoo(z) {} String name;}');
            await this.assertTarget('zoo(z) {}','class C2 {zoo(z) {} String name;}');
        } )());
    }

    test_MethodDeclaration_returnType_afterLineComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class C2 {\n  // normal comment\n^ zoo(z) {} String name;}');
            await this.assertTarget('zoo(z) {}','class C2 {zoo(z) {} String name;}');
        } )());
    }

    test_MethodDeclaration_returnType_afterLineDocComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('      class C2 {\n        /// some dartdoc\n        ^ zoo(z) { } String name; }');
            await this.assertTarget('zoo','zoo(z) {}');
        } )());
    }

    test_MethodDeclaration_returnType_afterLineDocComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class C2 {\n  /// some dartdoc\n^ zoo(z) { } String name; }');
            await this.assertTarget('zoo','zoo(z) {}');
        } )());
    }

    test_MethodDeclaration_returnType_afterStarComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class C2 {/* */ ^ zoo(z) { } String name; }');
            await this.assertTarget('zoo(z) {}','class C2 {zoo(z) {} String name;}');
        } )());
    }

    test_MethodDeclaration_returnType_afterStarComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class C2 {/* */^ zoo(z) { } String name; }');
            await this.assertTarget('zoo(z) {}','class C2 {zoo(z) {} String name;}');
        } )());
    }

    test_MethodDeclaration_returnType_afterStarDocComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class C2 {/** */ ^ zoo(z) { } String name; }');
            await this.assertTarget('zoo','zoo(z) {}');
        } )());
    }

    test_MethodDeclaration_returnType_afterStarDocComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('class C2 {/** */^ zoo(z) { } String name; }');
            await this.assertTarget('zoo','zoo(z) {}');
        } )());
    }

    test_SwitchStatement_c() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() { switch(x) {c^} }');
            await this.assertTarget('}','switch (x) {}');
        } )());
    }

    test_SwitchStatement_c2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() { switch(x) { c^ } }');
            await this.assertTarget('}','switch (x) {}');
        } )());
    }

    test_SwitchStatement_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() { switch(x) {^} }');
            await this.assertTarget('}','switch (x) {}');
        } )());
    }

    test_SwitchStatement_empty2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() { switch(x) { ^ } }');
            await this.assertTarget('}','switch (x) {}');
        } )());
    }

    test_TypeArgumentList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() { C<^> c; }');
            await this.assertTarget('','<>');
        } )());
    }

    test_TypeArgumentList2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() { C<C^> c; }');
            await this.assertTarget('C','<C>');
        } )());
    }

    test_VariableDeclaration_lhs_identifier_after() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() {int b^ = 1;}');
            await this.assertTarget('b = 1','int b = 1');
        } )());
    }

    test_VariableDeclaration_lhs_identifier_before() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.addTestSource('main() {int ^b = 1;}');
            await this.assertTarget('b = 1','int b = 1');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompletionTargetTest() {
    }
}

export class properties {
}
