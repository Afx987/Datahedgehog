/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/hint_code_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test_case";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(HintCodeTest);
    });
};
export namespace HintCodeTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'HintCodeTest';
    export type Interface = Omit<HintCodeTest, Constructors>;
}
@DartClass
export class HintCodeTest extends lib3.ResolverTestCase {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    reset() : void {
        super.resetWith({
            packages : new core.DartList.literal(new core.DartList.literal('meta','library meta;\n\nconst _Factory factory = const _Factory();\nconst Immutable immutable = const Immutable();\nconst _Literal literal = const _Literal();\nconst _MustCallSuper mustCallSuper = const _MustCallSuper();\nconst _Protected protected = const _Protected();\nconst Required required = const Required();\nclass Required {\n  final String reason;\n  const Required([this.reason]);\n}\n\nclass Immutable {\n  final String reason;\n  const Immutable([this.reason]);\n}\nclass _Factory {\n  const _Factory();\n}\nclass _Literal {\n  const _Literal();\n}\nclass _MustCallSuper {\n  const _MustCallSuper();\n}\nclass _Protected {\n  const _Protected();\n}\nclass _Required {\n  final String reason;\n  const _Required([this.reason]);\n}\n'),new core.DartList.literal('js','library js;\nclass JS {\n  const JS([String js]) { }\n}\n'))});
    }
    test_abstractSuperMemberReference_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  int get test;\n}\nclass B extends A {\n  int get test {\n    super.test;\n    return 0;\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.ABSTRACT_SUPER_MEMBER_REFERENCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_abstractSuperMemberReference_method_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  void test();\n}\nclass B extends A {\n  void test() {\n    super.test();\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.ABSTRACT_SUPER_MEMBER_REFERENCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_abstractSuperMemberReference_method_reference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  void test();\n}\nclass B extends A {\n  void test() {\n    super.test;\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.ABSTRACT_SUPER_MEMBER_REFERENCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_abstractSuperMemberReference_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  void set test(int v);\n}\nclass B extends A {\n  void set test(int v){\n    super.test = 0;\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.ABSTRACT_SUPER_MEMBER_REFERENCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_functionType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m() {\n  var a = new A();\n  a.n(() => 0);\n}\nclass A {\n  n(void f(int i)) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_message() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE.message,HintCode.ARGUMENT_TYPE_NOT_ASSIGNABLE.message);
        } )());
    }

    test_argumentTypeNotAssignable_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m() {\n  var i = \'\';\n  n(i);\n}\nn(int i) {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_canBeNullAfterNullAware_false_methodInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  x?.a()?.b();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_canBeNullAfterNullAware_false_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  x?.a.hashCode;\n  x?.a.runtimeType;\n  x?.a.toString();\n  x?.b().hashCode;\n  x?.b().runtimeType;\n  x?.b().toString();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_canBeNullAfterNullAware_false_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  x?.a?.b;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_canBeNullAfterNullAware_methodInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  x?.a.b();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.CAN_BE_NULL_AFTER_NULL_AWARE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_canBeNullAfterNullAware_parenthesized() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  (x?.a).b;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.CAN_BE_NULL_AFTER_NULL_AWARE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_canBeNullAfterNullAware_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  x?.a.b;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.CAN_BE_NULL_AFTER_NULL_AWARE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_conditionalElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  true ? 1 : 2;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_conditionalElse_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  true ? true : false && false;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_conditionalIf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  false ? 1 : 2;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_conditionalIf_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  false ? false && false : true;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_else() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  if(true) {} else {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_else_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  if(true) {} else {if (false) {}}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_if() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  if(false) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_if_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  if(false) {if(false) {}}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_while() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  while(false) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_while_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  while(false) {if(false) {}}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadCatch_catchFollowingCatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nf() {\n  try {} catch (e) {} catch (e) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE_CATCH_FOLLOWING_CATCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadCatch_catchFollowingCatch_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nf() {\n  try {} catch (e) {} catch (e) {if(false) {}}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE_CATCH_FOLLOWING_CATCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadCatch_catchFollowingCatch_object() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  try {} on Object catch (e) {} catch (e) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE_CATCH_FOLLOWING_CATCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadCatch_catchFollowingCatch_object_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  try {} on Object catch (e) {} catch (e) {if(false) {}}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE_CATCH_FOLLOWING_CATCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadCatch_onCatchSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {}\nf() {\n  try {} on A catch (e) {} on B catch (e) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE_ON_CATCH_SUBTYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadCatch_onCatchSubtype_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {}\nf() {\n  try {} on A catch (e) {} on B catch (e) {if(false) {}}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE_ON_CATCH_SUBTYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadFinalReturnInCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  switch (true) {\n  case true:\n    try {\n      int a = 1;\n    } finally {\n      return;\n    }\n    return;\n  default:\n    break;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadFinalStatementInCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  switch (true) {\n  case true:\n    try {\n      int a = 1;\n    } finally {\n      return;\n    }\n    int b = 1;\n  default:\n    break;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE,StaticWarningCode.CASE_BLOCK_NOT_TERMINATED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadOperandLHS_and() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  bool b = false && false;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadOperandLHS_and_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  bool b = false && (false && false);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadOperandLHS_or() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  bool b = true || true;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadOperandLHS_or_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  bool b = true || (false && false);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterBreak_inDefaultCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(v) {\n  switch(v) {\n    case 1:\n    default:\n      break;\n      var a;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterBreak_inForEachStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var list;\n  for(var l in list) {\n    break;\n    var a;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterBreak_inForStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  for(;;) {\n    break;\n    var a;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterBreak_inSwitchCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(v) {\n  switch(v) {\n    case 1:\n      break;\n      var a;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterBreak_inWhileStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(v) {\n  while(v) {\n    break;\n    var a;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterContinue_inForEachStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var list;\n  for(var l in list) {\n    continue;\n    var a;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterContinue_inForStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  for(;;) {\n    continue;\n    var a;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterContinue_inWhileStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(v) {\n  while(v) {\n    continue;\n    var a;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterExitingIf_returns() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  if (1 > 2) {\n    return;\n  } else {\n    return;\n  }\n  var one = 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterRethrow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  try {\n    var one = 1;\n  } catch (e) {\n    rethrow;\n    var two = 2;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterReturn_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var one = 1;\n  return;\n  var two = 2;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterReturn_ifStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(bool b) {\n  if(b) {\n    var one = 1;\n    return;\n    var two = 2;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterReturn_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {\n    var one = 1;\n    return;\n    var two = 2;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterReturn_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var one = 1;\n  return;\n  if(false) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterReturn_twoReturns() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var one = 1;\n  return;\n  var two = 2;\n  return;\n  var three = 3;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterThrow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var one = 1;\n  throw \'Stop here\';\n  var two = 2;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  @deprecated\n  A operator+(A a) { return a; }\n}\nf(A a) {\n  A b;\n  a += b;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_call() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  @deprecated\n  call() {}\n  m() {\n    A a = new A();\n    a();\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_deprecated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  @deprecated\n  m() {}\n  n() {m();}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_Deprecated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  @Deprecated(\'0.9\')\n  m() {}\n  n() {m();}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_export() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("export 'deprecated_library.dart';");
            this.addNamedSource("/deprecated_library.dart",'@deprecated\nlibrary deprecated_library;\nclass A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  @deprecated\n  int x = 1;\n}\nf(A a) {\n  return a.x;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  @deprecated\n  get m => 1;\n}\nf(A a) {\n  return a.m;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_import() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'deprecated_library.dart\';\nf(A a) {}');
            this.addNamedSource("/deprecated_library.dart",'@deprecated\nlibrary deprecated_library;\nclass A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_indexExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  @deprecated\n  operator[](int i) {}\n}\nf(A a) {\n  return a[1];\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_instanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  @deprecated\n  A(int i) {}\n}\nf() {\n  A a = new A(1);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_instanceCreation_namedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  @deprecated\n  A.named(int i) {}\n}\nf() {\n  A a = new A.named(1);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m({@deprecated int x}) {}\n  n() {m(x: 1);}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_operator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  @deprecated\n  operator+(A a) {}\n}\nf(A a) {\n  A b;\n  return a + b;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m([@deprecated int x]) {}\n  n() {m(1);}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  @deprecated\n  set s(v) {}\n}\nf(A a) {\n  return a.s = 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_superConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  @deprecated\n  A() {}\n}\nclass B extends A {\n  B() : super() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_superConstructor_namedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  @deprecated\n  A.named() {}\n}\nclass B extends A {\n  B() : super.named() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedFunction_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class Function {}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_FUNCTION_CLASS_DECLARATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedFunction_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A extends Function {}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_EXTENDS_FUNCTION,StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedFunction_extends2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class Function {}\nclass A extends Function {}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_FUNCTION_CLASS_DECLARATION,HintCode.DEPRECATED_EXTENDS_FUNCTION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedFunction_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A extends Object with Function {}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MIXIN_FUNCTION,StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedFunction_mixin2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class Function {}\nclass A extends Object with Function {}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_FUNCTION_CLASS_DECLARATION,HintCode.DEPRECATED_MIXIN_FUNCTION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_divisionOptimization_double() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(double x, double y) {\n  var v = (x / y).toInt();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DIVISION_OPTIMIZATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_divisionOptimization_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int x, int y) {\n  var v = (x / y).toInt();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DIVISION_OPTIMIZATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_divisionOptimization_propagatedType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(x, y) {\n  x = 1;\n  y = 1;\n  var v = (x / y).toInt();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DIVISION_OPTIMIZATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_divisionOptimization_wrappedBinaryExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int x, int y) {\n  var v = (((x / y))).toInt();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DIVISION_OPTIMIZATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateImport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\';\nimport \'lib1.dart\';\nA a;');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DUPLICATE_IMPORT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateImport2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\';\nimport \'lib1.dart\';\nimport \'lib1.dart\';\nA a;');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DUPLICATE_IMPORT,HintCode.DUPLICATE_IMPORT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateImport3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\' as M show A hide B;\nimport \'lib1.dart\' as M show A hide B;\nM.A a;');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass A {}\nclass B {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DUPLICATE_IMPORT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory__expr_return_null_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\nclass Stateful {\n  @factory\n  State createState() => null;\n}\n\nclass State { }\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory_abstract_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\nabstract class Stateful {\n  @factory\n  State createState();\n}\n\nclass State { }\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory_bad_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\nclass Stateful {\n  State _s = new State();\n\n  @factory\n  State createState() => _s;\n}\n\nclass State { }\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.INVALID_FACTORY_METHOD_IMPL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory_block_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\nclass Stateful {\n  @factory\n  State createState() {\n    return new State();\n  }\n}\n\nclass State { }\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory_block_return_null_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\nclass Stateful {\n  @factory\n  State createState() {\n    return null;\n  }\n}\n\nclass State { }\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory_expr_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\nclass Stateful {\n  @factory\n  State createState() => new State();\n}\n\nclass State { }\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory_misplaced_annotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\n@factory\nclass X {\n  @factory\n  int x;\n}\n\n@factory\nmain() { }\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.INVALID_FACTORY_ANNOTATION,HintCode.INVALID_FACTORY_ANNOTATION,HintCode.INVALID_FACTORY_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory_no_return_type_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\nclass Stateful {\n  @factory\n  createState() {\n    return new Stateful();\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory_subclass_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\nabstract class Stateful {\n  @factory\n  State createState();\n}\n\nclass MyThing extends Stateful {\n  @override\n  State createState() {\n    print(\'my state\');\n    return new MyState();\n  }\n}\n\nclass State { }\nclass MyState extends State { }\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory_void_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\nclass Stateful {\n  @factory\n  void createState() {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.INVALID_FACTORY_METHOD_DECL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_importDeferredLibraryWithLoadFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nloadLibrary() {}\nf() {}','library root;\nimport \'lib1.dart\' deferred as lib1;\nmain() { lib1.f(); }'),new core.DartList.literal<any>(HintCode.IMPORT_DEFERRED_LIBRARY_WITH_LOAD_FUNCTION));
        } )());
    }

    test_invalidAssignment_instanceVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n}\nf(var y) {\n  A a;\n  if(y is String) {\n    a.x = y;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.INVALID_ASSIGNMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAssignment_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(var y) {\n  if(y is String) {\n    int x = y;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.INVALID_ASSIGNMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAssignment_message() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(StaticTypeWarningCode.INVALID_ASSIGNMENT.message,HintCode.INVALID_ASSIGNMENT.message);
        } )());
    }

    test_invalidAssignment_staticVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static int x;\n}\nf(var y) {\n  if(y is String) {\n    A.x = y;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.INVALID_ASSIGNMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAssignment_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class Point {\n  final num x, y;\n  Point(this.x, this.y);\n  Point operator +(Point other) {\n    return new Point(x+other.x, y+other.y);\n  }\n}\nmain() {\n  var p1 = new Point(0, 0);\n  var p2 = new Point(10, 10);\n  int n = p1 + p2;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.INVALID_ASSIGNMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidImmutableAnnotation_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  @immutable\n  void m() {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.INVALID_IMMUTABLE_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_closure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource('/lib1.dart','import \'package:meta/meta.dart\';\n\nclass A {\n  @protected\n  int a() => 42;\n}\n');
            let source2 : any = this.addNamedSource('/lib2.dart','import \'lib1.dart\';\n\nvoid main() {\n  var leak = new A().a;\n  print(leak);\n}\n');
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(HintCode.INVALID_USE_OF_PROTECTED_MEMBER));
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_invalidUseOfProtectedMember_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource('/lib1.dart','import \'package:meta/meta.dart\';\nclass A {\n  @protected\n  int a;\n}\n');
            let source2 : any = this.addNamedSource('/lib2.dart','import \'lib1.dart\';\n\nabstract class B {\n  int b() => new A().a;\n}\n');
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(HintCode.INVALID_USE_OF_PROTECTED_MEMBER));
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_invalidUseOfProtectedMember_field_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  @protected\n  int a;\n}\nabstract class B implements A {\n  int b() => a;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource('/lib1.dart','import \'package:meta/meta.dart\';\nclass A {\n  @protected\n  void a(){ }\n}\n');
            let source2 : any = this.addNamedSource('/lib2.dart','import \'lib1.dart\';\n\nmain() {\n  new A().a();\n}\n');
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(HintCode.INVALID_USE_OF_PROTECTED_MEMBER));
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_invalidUseOfProtectedMember_function_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  @protected\n  int a() => 0;\n}\n\nabstract class B implements A {\n  int b() => a();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_function_OK2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  @protected\n  void a(){ }\n}\nmain() {\n  new A().a();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource('/lib1.dart','import \'package:meta/meta.dart\';\nclass A {\n  @protected\n  int get a => 42;\n}\n');
            let source2 : any = this.addNamedSource('/lib2.dart','import \'lib1.dart\';\n\nclass B {\n  A a;\n  int b() => a.a;\n}\n');
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(HintCode.INVALID_USE_OF_PROTECTED_MEMBER));
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_invalidUseOfProtectedMember_getter_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  @protected\n  int get a => 42;\n}\nabstract class B implements A {\n  int b() => a;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_in_docs_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\nclass A {\n  @protected\n  int a() => c;\n  @protected\n  int get b => a();\n  @protected\n  int c = 42;\n}\n\n/// OK: [A.a], [A.b], [A.c].\nf() {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_message() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource('/lib1.dart','import \'package:meta/meta.dart\';\nclass A {\n  @protected\n  void a(){ }\n}\n');
            let source2 : any = this.addNamedSource('/lib2.dart','import \'lib1.dart\';\n\nclass B {\n  void b() => new A().a();\n}\n');
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(HintCode.INVALID_USE_OF_PROTECTED_MEMBER));
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_invalidUseOfProtectedMember_method_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource('/lib1.dart','import \'package:meta/meta.dart\';\nclass A {\n  @protected\n  void a(){ }\n}\n');
            let source2 : any = this.addNamedSource('/lib2.dart','import \'lib1.dart\';\n\nclass B {\n  void b() => new A().a();\n}\n');
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(HintCode.INVALID_USE_OF_PROTECTED_MEMBER));
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_invalidUseOfProtectedMember_method_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\ntypedef void VoidCallback();\n\nclass State<E> {\n  @protected\n  void setState(VoidCallback fn) {}\n}\n\nclass Button extends State<Object> {\n  void handleSomething() {\n    setState(() {});\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_OK_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  @protected\n  void a(){ }\n}\nclass B extends A {\n  void b() => a();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_OK_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  @protected\n  void a(){ }\n}\nclass B extends Object with A {\n  void b() => a();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_OK_3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  @protected m1() {}\n}\nclass B extends A {\n  static m2(A a) => a.m1();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_OK_4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  @protected\n  void a(){ }\n}\nclass B extends A {\n  void a() => a();\n}\nmain() {\n  new B().a();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_OK_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  @protected\n  int a = 42;\n}\nclass B extends A {\n  int b() => a;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_OK_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  @protected\n  int get a => 42;\n}\nclass B extends A {\n  int b() => a;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_OK_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  @protected\n  void set a(int i) { }\n}\nclass B extends A {\n  void b(int i) {\n    a = i;\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_OK_setter_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  int _a;\n  @protected\n  void set a(int a) { _a = a; }\n  A(int a) {\n    this.a = a;\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource('/lib1.dart','import \'package:meta/meta.dart\';\nclass A {\n  @protected\n  void set a(int i) { }\n}\n');
            let source2 : any = this.addNamedSource('/lib2.dart','import \'lib1.dart\';\n\nclass B{\n  A a;\n  b(int i) {\n    a.a = i;\n  }\n}\n');
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(HintCode.INVALID_USE_OF_PROTECTED_MEMBER));
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_invalidUseOfProtectedMember_setter_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  @protected\n  void set a(int i) { }\n}\nabstract class B implements A {\n  b(int i) {\n    a = i;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_topLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n@protected\nint x = 0;\nmain() {\n  print(x);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isDouble() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.dart2jsHint = true;
            this.resetWith({
                options : options});
            let source : any = this.addSource("var v = 1 is double;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.IS_DOUBLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isInt() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var v = 1 is int;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.IS_INT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isNotDouble() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.dart2jsHint = true;
            this.resetWith({
                options : options});
            let source : any = this.addSource("var v = 1 is! double;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.IS_NOT_DOUBLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isNotInt() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var v = 1 is! int;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.IS_NOT_INT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_js_lib_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@JS()\nlibrary foo;\n\nimport \'package:js/js.dart\';\n\n@JS()\nclass A { }\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingJsLibAnnotation_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library foo;\n\nimport \'package:js/js.dart\';\n\n@JS()\nclass A { }\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_JS_LIB_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingJsLibAnnotation_externalField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:js/js.dart\';\n\n@JS()\nexternal dynamic exports;\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.EXTERNAL_FIELD,HintCode.MISSING_JS_LIB_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingJsLibAnnotation_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library foo;\n\nimport \'package:js/js.dart\';\n\n@JS(\'acxZIndex\')\nset _currentZIndex(int value) { }\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_JS_LIB_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingJsLibAnnotation_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library foo;\n\nimport \'package:js/js.dart\';\n\nclass A {\n  @JS()\n  void a() { }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_JS_LIB_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingJsLibAnnotation_variable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:js/js.dart\';\n\n@JS()\ndynamic variable;\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_JS_LIB_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingReturn_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture<int> f() async {}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_RETURN));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingReturn_factory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  factory A() {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_RETURN));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingReturn_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("int f() {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_RETURN));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingReturn_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int m() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_RETURN));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mustBeImmutable_direct() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n@immutable\nclass A {\n  int x;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MUST_BE_IMMUTABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mustBeImmutable_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n@immutable\nclass A {}\nclass B extends A {\n  int x;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MUST_BE_IMMUTABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mustBeImmutable_fromMixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n@immutable\nclass A {}\nclass B {\n  int x;\n}\nclass C extends A with B {}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MUST_BE_IMMUTABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mustBeImmutable_instance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n@immutable\nclass A {\n  static int x;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal());
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mustCallSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  @mustCallSuper\n  void a() {}\n}\nclass B extends A {\n  @override\n  void a()\n  {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MUST_CALL_SUPER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mustCallSuper_fromInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  @mustCallSuper\n  void a() {}\n}\nclass C implements A {\n  @override\n  void a() {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal());
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mustCallSuper_indirect() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  @mustCallSuper\n  void a() {}\n}\nclass C extends A {\n  @override\n  void a() {\n    super.a();\n  }\n}\nclass D extends C {\n  @override\n  void a() {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MUST_CALL_SUPER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mustCallSuper_overridden() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  @mustCallSuper\n  void a() {}\n}\nclass C extends A {\n  @override\n  void a() {\n    super.a(); //OK\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal());
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_assert() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  assert (x?.a);\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_conditionalExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  return x?.a ? 0 : 1;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_do() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  do {} while (x?.a);\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_for() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  for (var v = x; v?.a; v = v.next) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  if (x?.a) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if_conditionalAnd_first() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  if (x?.a && x.b) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if_conditionalAnd_second() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  if (x.a && x?.b) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if_conditionalAnd_third() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  if (x.a && x.b && x?.c) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if_conditionalOr_first() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  if (x?.a || x.b) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if_conditionalOr_second() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  if (x.a || x?.b) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if_conditionalOr_third() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  if (x.a || x.b || x?.c) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if_not() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  if (!x?.a) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if_parenthesized() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  if ((x?.a)) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_while() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  while (x?.a) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideEqualsButNotHashCode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  bool operator ==(x) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.OVERRIDE_EQUALS_BUT_NOT_HASH_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingField_invalid() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n}\nclass B extends A {\n  @override\n  final int m = 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.OVERRIDE_ON_NON_OVERRIDING_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingGetter_invalid() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n}\nclass B extends A {\n  @override\n  int get m => 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.OVERRIDE_ON_NON_OVERRIDING_GETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingMethod_invalid() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n}\nclass B extends A {\n  @override\n  int m() => 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.OVERRIDE_ON_NON_OVERRIDING_METHOD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingSetter_invalid() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n}\nclass B extends A {\n  @override\n  set m(int x) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.OVERRIDE_ON_NON_OVERRIDING_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_constructor_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\nclass C {\n  C({@Required(\'must specify an `a`\') int a}) {}\n}\n\nmain() {\n  new C();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_REQUIRED_PARAM_WITH_DETAILS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_constructor_param_no_reason() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\nclass C {\n  C({@required int a}) {}\n}\n\nmain() {\n  new C();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_REQUIRED_PARAM));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_constructor_param_null_reason() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\nclass C {\n  C({@Required(null) int a}) {}\n}\n\nmain() {\n  new C();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_REQUIRED_PARAM));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_constructor_param_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\nclass C {\n  C({@required int a}) {}\n}\n\nmain() {\n  new C(a: 2);\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_constructor_param_redirecting_cons_call() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\nclass C {\n  C({@required int x});\n  C.named() : this();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_REQUIRED_PARAM));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_constructor_param_super_call() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\nclass C {\n  C({@Required(\'must specify an `a`\') int a}) {}\n}\n\nclass D extends C {\n  D() : super();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_REQUIRED_PARAM_WITH_DETAILS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_function_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\nvoid f({@Required(\'must specify an `a`\') int a}) {}\n\nmain() {\n  f();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_REQUIRED_PARAM_WITH_DETAILS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_method_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\nclass A {\n  void m({@Required(\'must specify an `a`\') int a}) {}\n}\nf() {\n  new A().m();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_REQUIRED_PARAM_WITH_DETAILS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_method_param_in_other_lib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/a_lib.dart','library a_lib;\nimport \'package:meta/meta.dart\';\nclass A {\n  void m({@Required(\'must specify an `a`\') int a}) {}\n}\n');
            let source : any = this.addSource('import "a_lib.dart";\nf() {\n  new A().m();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_REQUIRED_PARAM_WITH_DETAILS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_typedef_function_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';\n\nString test(C c) => c.m()();\n\ntypedef String F({@required String x});\n\nclass C {\n  F m() => ({@required String x}) => null;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_REQUIRED_PARAM));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_strongMode_downCastCompositeHint() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.strongMode = true;
            options.strongModeHints = true;
            this.resetWith({
                options : options});
            let source : any = this.addSource('main() {\n  List dynamicList = [ ];\n  List<int> list = dynamicList;\n  print(list);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StrongModeCode.DOWN_CAST_COMPOSITE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_strongMode_downCastCompositeNoHint() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.strongMode = true;
            options.strongModeHints = false;
            this.resetWith({
                options : options});
            let source : any = this.addSource('main() {\n  List dynamicList = [ ];\n  List<int> list = dynamicList;\n  print(list);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_strongMode_downCastCompositeWarn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            applyToAnalysisOptions(options,new core.DartMap.literal([
                [AnalyzerOptions.analyzer,new core.DartMap.literal([
                    [AnalyzerOptions.errors,new core.DartMap.literal([
                        [StrongModeCode.DOWN_CAST_COMPOSITE.name,'warning']])]])]]));
            options.strongMode = true;
            options.strongModeHints = false;
            this.resetWith({
                options : options});
            let source : any = this.addSource('main() {\n  List dynamicList = [ ];\n  List<int> list = dynamicList;\n  print(list);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StrongModeCode.DOWN_CAST_COMPOSITE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_strongMode_topLevelInstanceGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            let source : any = this.addSource('class A {\n  int get g => 0;\n}\nvar a = new A();\nvar b = a.g;\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StrongModeCode.TOP_LEVEL_INSTANCE_GETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeCheck_type_is_Null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(i) {\n  bool b = i is Null;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.TYPE_CHECK_IS_NULL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeCheck_type_not_Null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(i) {\n  bool b = i is! Null;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.TYPE_CHECK_IS_NOT_NULL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nf(var a) {\n  if(a is A) {\n    return a.m;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_GETTER));
        } )());
    }

    test_undefinedGetter_message() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(StaticWarningCode.UNDEFINED_GETTER.message,StaticTypeWarningCode.UNDEFINED_GETTER.message);
        } )());
    }

    test_undefinedIdentifier_exportHide() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nexport \'lib1.dart\' hide a;');
            this.addNamedSource("/lib1.dart","library lib1;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_HIDDEN_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedIdentifier_exportShow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nexport \'lib1.dart\' show a;');
            this.addNamedSource("/lib1.dart","library lib1;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_SHOWN_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedIdentifier_importHide() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\' hide a;');
            this.addNamedSource("/lib1.dart","library lib1;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_IMPORT,HintCode.UNDEFINED_HIDDEN_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedIdentifier_importShow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\' show a;');
            this.addNamedSource("/lib1.dart","library lib1;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_IMPORT,HintCode.UNDEFINED_SHOWN_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var a = \'str\';\n  a.notAMethodOnString();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedMethod_assignmentExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B {\n  f(var a, var a2) {\n    a = new A();\n    a2 = new A();\n    a += a2;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedOperator_binaryExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nf(var a) {\n  if(a is A) {\n    a + 1;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_undefinedOperator_indexBoth() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nf(var a) {\n  if(a is A) {\n    a[0]++;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_undefinedOperator_indexGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nf(var a) {\n  if(a is A) {\n    a[0];\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_undefinedOperator_indexSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nf(var a) {\n  if(a is A) {\n    a[0] = 1;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_undefinedOperator_postfixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nf(var a) {\n  if(a is A) {\n    a++;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_undefinedOperator_prefixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nf(var a) {\n  if(a is A) {\n    ++a;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_undefinedSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nf(var a) {\n  if(a is A) {\n    a.m = 0;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_SETTER));
        } )());
    }

    test_undefinedSetter_message() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(StaticWarningCode.UNDEFINED_SETTER.message,StaticTypeWarningCode.UNDEFINED_SETTER.message);
        } )());
    }

    test_unnecessaryCast_type_supertype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(int i) {\n  var b = i as Object;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_CAST));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryCast_type_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(num i) {\n  var b = i as num;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_CAST));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryNoSuchMethod_blockBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  noSuchMethod(x) => super.noSuchMethod(x);\n}\nclass B extends A {\n  mmm();\n  noSuchMethod(y) {\n    return super.noSuchMethod(y);\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_NO_SUCH_METHOD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryNoSuchMethod_expressionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  noSuchMethod(x) => super.noSuchMethod(x);\n}\nclass B extends A {\n  mmm();\n  noSuchMethod(y) => super.noSuchMethod(y);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_NO_SUCH_METHOD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryTypeCheck_null_is_Null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("bool b = null is Null;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_TYPE_CHECK_TRUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryTypeCheck_null_not_Null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("bool b = null is! Null;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_TYPE_CHECK_FALSE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryTypeCheck_type_is_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(i) {\n  bool b = i is dynamic;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_TYPE_CHECK_TRUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryTypeCheck_type_is_object() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(i) {\n  bool b = i is Object;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_TYPE_CHECK_TRUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryTypeCheck_type_not_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(i) {\n  bool b = i is! dynamic;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_TYPE_CHECK_FALSE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryTypeCheck_type_not_object() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(i) {\n  bool b = i is! Object;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_TYPE_CHECK_FALSE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_isUsed_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {}\nclass B extends _A {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_isUsed_fieldDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let src = 'class Foo {\n  _Bar x;\n}\n\nclass _Bar {\n}\n';
            let source : any = this.addSource(src);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_isUsed_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {}\nclass B implements _A {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_isUsed_instanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {}\nmain() {\n  new _A();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_isUsed_staticFieldAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {\n  static const F = 42;\n}\nmain() {\n  _A.F;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_isUsed_staticMethodInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {\n  static m() {}\n}\nmain() {\n  _A.m();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_isUsed_typeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {}\nmain() {\n  var v = new List<_A>();\n  print(v);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_notUsed_inClassMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {\n  static staticMethod() {\n    new _A();\n  }\n  instanceMethod() {\n    new _A();\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_notUsed_inConstructorName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {\n  _A() {}\n  _A.named() {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_notUsed_isExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {}\nmain(p) {\n  if (p is _A) {\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_notUsed_noReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {}\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_notUsed_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {}\nmain() {\n  _A v;\n  print(v);\n}\nprint(x) {}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_enum_isUsed_fieldReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('enum _MyEnum {A, B, C}\nmain() {\n  print(_MyEnum.B);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_enum_notUsed_noReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('enum _MyEnum {A, B, C}\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionLocal_isUsed_closure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('main() {\n  print(() {});\n}\nprint(x) {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionLocal_isUsed_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('main() {\n  f() {}\n  f();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionLocal_isUsed_reference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('main() {\n  f() {}\n  print(f);\n}\nprint(x) {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionLocal_notUsed_noReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('main() {\n  f() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionLocal_notUsed_referenceFromItself() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('main() {\n  _f(int p) {\n    _f(p - 1);\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionTop_isUsed_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('_f() {}\nmain() {\n  _f();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionTop_isUsed_reference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('_f() {}\nmain() {\n  print(_f);\n}\nprint(x) {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionTop_notUsed_noReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('_f() {}\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionTop_notUsed_referenceFromItself() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('_f(int p) {\n  _f(p - 1);\n}\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionTypeAlias_isUsed_isExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('typedef _F(a, b);\nmain(f) {\n  if (f is _F) {\n    print(\'F\');\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionTypeAlias_isUsed_reference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('typedef _F(a, b);\nmain(_F f) {\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionTypeAlias_isUsed_typeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('typedef _F(a, b);\nmain() {\n  var v = new List<_F>();\n  print(v);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionTypeAlias_isUsed_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('typedef _F(a, b);\nclass A {\n  _F f;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionTypeAlias_notUsed_noReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('typedef _F(a, b);\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_getter_isUsed_invocation_implicitThis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  get _g => null;\n  useGetter() {\n    var v = _g;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_getter_isUsed_invocation_PrefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  get _g => null;\n}\nmain(A a) {\n  var v = a._g;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_getter_isUsed_invocation_PropertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  get _g => null;\n}\nmain() {\n  var v = new A()._g;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_getter_notUsed_noReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  get _g => null;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_getter_notUsed_referenceFromItself() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  get _g {\n    return _g;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_hasReference_implicitThis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  _m() {}\n  useMethod() {\n    print(_m);\n  }\n}\nprint(x) {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_hasReference_implicitThis_subclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  _m() {}\n  useMethod() {\n    print(_m);\n  }\n}\nclass B extends A {\n  _m() {}\n}\nprint(x) {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_hasReference_PrefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  _m() {}\n}\nmain(A a) {\n  a._m;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_hasReference_PropertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  _m() {}\n}\nmain() {\n  new A()._m;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_invocation_implicitThis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  _m() {}\n  useMethod() {\n    _m();\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_invocation_implicitThis_subclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  _m() {}\n  useMethod() {\n    _m();\n  }\n}\nclass B extends A {\n  _m() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_invocation_MemberElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A<T> {\n  _m(T t) {}\n}\nmain(A<int> a) {\n  a._m(0);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_invocation_propagated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  _m() {}\n}\nmain() {\n  var a = new A();\n  a._m();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_invocation_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  _m() {}\n}\nmain() {\n  A a = new A();\n  a._m();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_invocation_subclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  _m() {}\n}\nclass B extends A {\n  _m() {}\n}\nmain(A a) {\n  a._m();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_notPrivate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  m() {}\n}\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_staticInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  static _m() {}\n}\nmain() {\n  A._m();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_notUsed_noReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  static _m() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_notUsed_referenceFromItself() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  static _m(int p) {\n    _m(p - 1);\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_setter_isUsed_invocation_implicitThis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  set _s(x) {}\n  useSetter() {\n    _s = 42;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_setter_isUsed_invocation_PrefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  set _s(x) {}\n}\nmain(A a) {\n  a._s = 42;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_setter_isUsed_invocation_PropertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  set _s(x) {}\n}\nmain() {\n  new A()._s = 42;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_setter_notUsed_noReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  set _s(x) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_setter_notUsed_referenceFromItself() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  set _s(int x) {\n    if (x > 5) {\n      _s = x - 1;\n    }\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_isUsed_argument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  int _f = 0;\n  main() {\n    print(++_f);\n  }\n}\nprint(x) {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_isUsed_reference_implicitThis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  int _f;\n  main() {\n    print(_f);\n  }\n}\nprint(x) {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_isUsed_reference_implicitThis_expressionFunctionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  int _f;\n  m() => _f;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_isUsed_reference_implicitThis_subclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  int _f;\n  main() {\n    print(_f);\n  }\n}\nclass B extends A {\n  int _f;\n}\nprint(x) {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_isUsed_reference_qualified_propagatedElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  int _f;\n}\nmain() {\n  var a = new A();\n  print(a._f);\n}\nprint(x) {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_isUsed_reference_qualified_staticElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  int _f;\n}\nmain() {\n  A a = new A();\n  print(a._f);\n}\nprint(x) {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_isUsed_reference_qualified_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  int _f;\n}\nmain(a) {\n  print(a._f);\n}\nprint(x) {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_notUsed_compoundAssign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  int _f;\n  main() {\n    _f += 2;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_notUsed_constructorFieldInitializers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  int _f;\n  A() : _f = 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_notUsed_fieldFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  int _f;\n  A(this._f);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_notUsed_noReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  int _f;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_notUsed_nullAssign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  var _f;\n  m() {\n    _f ??= doSomething();\n  }\n}\ndoSomething() => 0;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_notUsed_postfixExpr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  int _f = 0;\n  main() {\n    _f++;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_notUsed_prefixExpr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  int _f = 0;\n  main() {\n    ++_f;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_notUsed_simpleAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {\n  int _f;\n  m() {\n    _f = 1;\n  }\n}\nmain(A a) {\n  a._f = 2;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedImport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\';');
            let source2 : any = this.addNamedSource("/lib1.dart","library lib1;");
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_IMPORT));
            this.assertNoErrors(source2);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_unusedImport_as() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\';\nimport \'lib1.dart\' as one;\none.A a;');
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;\nclass A {}');
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_IMPORT));
            this.assertNoErrors(source2);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_unusedImport_as_equalPrefixes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\' as one;\nimport \'lib2.dart\' as one;\none.A a;');
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;\nclass A {}');
            let source3 : any = this.addNamedSource("/lib2.dart",'library lib2;\nclass B {}');
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            await this.computeAnalysisResult(source3);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_IMPORT));
            this.assertNoErrors(source2);
            this.assertNoErrors(source3);
            this.verify(new core.DartList.literal(source,source2,source3));
        } )());
    }

    test_unusedImport_hide() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\';\nimport \'lib1.dart\' hide A;\nA a;');
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;\nclass A {}');
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_IMPORT));
            this.assertNoErrors(source2);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_unusedImport_inComment_libraryDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('/// Use [Future] class.\nlibrary L;\nimport \'dart:async\';\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_unusedImport_show() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\' show A;\nimport \'lib1.dart\' show B;\nA a;');
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;\nclass A {}\nclass B {}');
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_IMPORT));
            this.assertNoErrors(source2);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_unusedLocalVariable_inCatch_exception() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {\n  try {\n  } on String catch (exception) {\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_CATCH_CLAUSE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_inCatch_exception_hasStack() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {\n  try {\n  } catch (exception, stack) {\n    print(stack);\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_inCatch_exception_noOnClause() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {\n  try {\n  } catch (exception) {\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_inCatch_stackTrace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {\n  try {\n  } catch (exception, stackTrace) {\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_CATCH_STACK));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_inCatch_stackTrace_used() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {\n  try {\n  } catch (exception, stackTrace) {\n    print(\'exception at $stackTrace\');\n  }\n}\nprint(x) {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_inFor_underscore_ignored() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {\n  for (var _ in [1,2,3]) {\n    for (var __ in [4,5,6]) {\n      // do something\n    }\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_inFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {\n  var v = 1;\n  v = 2;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_LOCAL_VARIABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_inMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('class A {\n  foo() {\n    var v = 1;\n    v = 2;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_LOCAL_VARIABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_isInvoked() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('typedef Foo();\nmain() {\n  Foo foo;\n  foo();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_isNullAssigned() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('typedef Foo();\nmain() {\n  var v;\n  v ??= doSomething();\n}\ndoSomething() => 42;\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_isRead_notUsed_compoundAssign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {\n  var v = 1;\n  v += 2;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_LOCAL_VARIABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_isRead_notUsed_postfixExpr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {\n  var v = 1;\n  v++;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_LOCAL_VARIABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_isRead_notUsed_prefixExpr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {\n  var v = 1;\n  ++v;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_LOCAL_VARIABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_isRead_usedArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {\n  var v = 1;\n  print(++v);\n}\nprint(x) {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_isRead_usedInvocationTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('class A {\n  foo() {}\n}\nmain() {\n  var a = new A();\n  a.foo();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedShownName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\' show A, B;\nA a;');
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;\nclass A {}\nclass B {}');
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_SHOWN_NAME));
            this.assertNoErrors(source2);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_unusedShownName_as() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\' as p show A, B;\np.A a;');
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;\nclass A {}\nclass B {}');
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_SHOWN_NAME));
            this.assertNoErrors(source2);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_unusedShownName_duplicates() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\' show A, B;\nimport \'lib1.dart\' show C, D;\nA a;\nC c;');
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;\nclass A {}\nclass B {}\nclass C {}\nclass D {}');
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_SHOWN_NAME,HintCode.UNUSED_SHOWN_NAME));
            this.assertNoErrors(source2);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_unusedShownName_topLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\' show var1, var2;\nimport \'lib1.dart\' show var3, var4;\nint a = var1;\nint b = var2;\nint c = var3;');
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;\nconst int var1 = 1;\nconst int var2 = 2;\nconst int var3 = 3;\nconst int var4 = 4;');
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_SHOWN_NAME));
            this.assertNoErrors(source2);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_useOfVoidResult_assignmentExpression_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void f() {}\nclass A {\n  n() {\n    var a;\n    a = f();\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.USE_OF_VOID_RESULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_useOfVoidResult_assignmentExpression_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void m() {}\n  n() {\n    var a;\n    a = m();\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.USE_OF_VOID_RESULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_useOfVoidResult_inForLoop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void m() {}\n  n() {\n    for(var a = m();;) {}\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.USE_OF_VOID_RESULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_useOfVoidResult_variableDeclaration_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void f() {}\nclass A {\n  n() {\n    var a = f();\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.USE_OF_VOID_RESULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_useOfVoidResult_variableDeclaration_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void m() {}\n  n() {\n    var a = m();\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.USE_OF_VOID_RESULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_useOfVoidResult_variableDeclaration_method2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void m() {}\n  n() {\n    var a = m(), b = m();\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.USE_OF_VOID_RESULT,HintCode.USE_OF_VOID_RESULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    HintCodeTest() {
    }
}

export class properties {
}
