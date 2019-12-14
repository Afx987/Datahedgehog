/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/inline_local_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_refactoring";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(InlineLocalTest);
    });
};
export namespace InlineLocalTest {
    export type Constructors = lib3.RefactoringTest.Constructors | 'InlineLocalTest';
    export type Interface = Omit<InlineLocalTest, Constructors>;
}
@DartClass
export class InlineLocalTest extends lib3.RefactoringTest {
    refactoring : any;

    test_access() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int test = 1 + 2;\n  print(test);\n  print(test);\n}\n');
            this._createRefactoring('test =');
            expect(this.refactoring.refactoringName,'Inline Local Variable');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.variableName,'test');
            expect(this.refactoring.referenceCount,2);
        } )());
    }

    test_bad_selectionMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n}\n');
            this._createRefactoring('main() {');
            let status : any = await this.refactoring.checkInitialConditions();
            this._assert_fatalError_selection(status);
        } )());
    }

    test_bad_selectionParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(int test) {\n}\n');
            this._createRefactoring('test) {');
            let status : any = await this.refactoring.checkInitialConditions();
            this._assert_fatalError_selection(status);
        } )());
    }

    test_bad_selectionVariable_hasAssignments_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int test = 0;\n  test = 1;\n}\n');
            this._createRefactoring('test = 0');
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedContextSearch : 'test = 1'});
        } )());
    }

    test_bad_selectionVariable_hasAssignments_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int test = 0;\n  test += 1;\n}\n');
            this._createRefactoring('test = 0');
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedContextSearch : 'test += 1'});
        } )());
    }

    test_bad_selectionVariable_notInBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  if (true)\n    int test = 0;\n}\n');
            this._createRefactoring('test = 0');
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL);
        } )());
    }

    test_bad_selectionVariable_notInitialized() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int test;\n}\n');
            this._createRefactoring('test;');
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL);
        } )());
    }

    test_OK_cascade_intoCascade() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  foo() {}\n  bar() {}\n}\nmain() {\n  A test = new A()..foo();\n  test..bar();\n}\n');
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('class A {\n  foo() {}\n  bar() {}\n}\nmain() {\n  new A()..foo()..bar();\n}\n');
        } )());
    }

    test_OK_cascade_intoNotCascade() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  foo() {}\n  bar() {}\n}\nmain() {\n  A test = new A()..foo();\n  test.bar();\n}\n');
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('class A {\n  foo() {}\n  bar() {}\n}\nmain() {\n  (new A()..foo()).bar();\n}\n');
        } )());
    }

    test_OK_inSwitchCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(int p) {\n  switch (p) {\n    case 0:\n      int test = 42;\n      print(test);\n      break;\n  }\n}\n');
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main(int p) {\n  switch (p) {\n    case 0:\n      print(42);\n      break;\n  }\n}\n');
        } )());
    }

    test_OK_intoStringInterpolation_binaryExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int test = 1 + 2;\n  print(\'test = $test\');\n  print(\'test = ${test}\');\n  print(\'test = ${process(test)}\');\n}\nprocess(x) {}\n');
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {\n  print(\'test = ${1 + 2}\');\n  print(\'test = ${1 + 2}\');\n  print(\'test = ${process(1 + 2)}\');\n}\nprocess(x) {}\n');
        } )());
    }

    test_OK_intoStringInterpolation_simpleIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int foo = 1 + 2;\n  int test = foo;\n  print(\'test = $test\');\n  print(\'test = ${test}\');\n  print(\'test = ${process(test)}\');\n}\nprocess(x) {}\n');
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {\n  int foo = 1 + 2;\n  print(\'test = $foo\');\n  print(\'test = ${foo}\');\n  print(\'test = ${process(foo)}\');\n}\nprocess(x) {}\n');
        } )());
    }

    test_OK_intoStringInterpolation_string_differentQuotes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  String a = "aaa";\n  String b = \'$a bbb\';\n}\n');
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring('main() {\n  String b = \'${"aaa"} bbb\';\n}\n');
        } )());
    }

    test_OK_intoStringInterpolation_string_doubleQuotes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  String a = "aaa";\n  String b = "$a bbb";\n}\n');
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring('main() {\n  String b = "aaa bbb";\n}\n');
        } )());
    }

    test_OK_intoStringInterpolation_string_multiLineIntoMulti_leadingSpaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit("main() {\n  String a = '''\ \\na\na''';\n  String b = '''\n$a\nbbb''';\n}\n");
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring("main() {\n  String b = '''\na\na\nbbb''';\n}\n");
        } )());
    }

    test_OK_intoStringInterpolation_string_multiLineIntoMulti_unixEOL() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit("main() {\n  String a = '''\na\na\na''';\n  String b = '''\n$a\nbbb''';\n}\n");
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring("main() {\n  String b = '''\na\na\na\nbbb''';\n}\n");
        } )());
    }

    test_OK_intoStringInterpolation_string_multiLineIntoMulti_windowsEOL() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit(new core.DartString("main() {\n  String a = '''\na\na\na''';\n  String b = '''\n$a\nbbb''';\n}\n").replaceAll('\n','\n'));
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring(new core.DartString("main() {\n  String b = '''\na\na\na\nbbb''';\n}\n").replaceAll('\n','\n'));
        } )());
    }

    test_OK_intoStringInterpolation_string_multiLineIntoSingle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  String a = """aaa""";\n  String b = "$a bbb";\n}\n');
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring('main() {\n  String b = "${"""aaa"""} bbb";\n}\n');
        } )());
    }

    test_OK_intoStringInterpolation_string_raw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  String a = r\'an $ignored interpolation\';\n  String b = \'$a bbb\';\n}\n');
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring('main() {\n  String b = \'${r\'an $ignored interpolation\'} bbb\';\n}\n');
        } )());
    }

    test_OK_intoStringInterpolation_string_singleLineIntoMulti_doubleQuotes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  String a = "aaa";\n  String b = """$a bbb""";\n}\n');
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring('main() {\n  String b = """aaa bbb""";\n}\n');
        } )());
    }

    test_OK_intoStringInterpolation_string_singleLineIntoMulti_singleQuotes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit("main() {\n  String a = 'aaa';\n  String b = '''$a bbb''';\n}\n");
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring("main() {\n  String b = '''aaa bbb''';\n}\n");
        } )());
    }

    test_OK_intoStringInterpolation_string_singleQuotes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  String a = \'aaa\';\n  String b = \'$a bbb\';\n}\n');
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring('main() {\n  String b = \'aaa bbb\';\n}\n');
        } )());
    }

    test_OK_intoStringInterpolation_stringInterpolation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  String a = \'aaa\';\n  String b = \'$a bbb\';\n  String c = \'$b ccc\';\n}\n');
            this._createRefactoring('b =');
            return this.assertSuccessfulRefactoring('main() {\n  String a = \'aaa\';\n  String c = \'$a bbb ccc\';\n}\n');
        } )());
    }

    test_OK_keepNextCommentedLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int test = 1 + 2;\n  // foo\n  print(test);\n  // bar\n}\n');
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {\n  // foo\n  print(1 + 2);\n  // bar\n}\n');
        } )());
    }

    test_OK_noUsages_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int test = 1 + 2;\n  print(0);\n}\n');
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {\n  print(0);\n}\n');
        } )());
    }

    test_OK_noUsages_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int test = 1 + 2;\n}\n');
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {\n}\n');
        } )());
    }

    test_OK_oneUsage() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int test = 1 + 2;\n  print(test);\n}\n');
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {\n  print(1 + 2);\n}\n');
        } )());
    }

    test_OK_parenthesis_decrement_intoNegate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  var a = 1;\n  var test = --a;\n  var b = -test;\n}\n');
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {\n  var a = 1;\n  var b = -(--a);\n}\n');
        } )());
    }

    test_OK_parenthesis_instanceCreation_intoList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {}\nmain() {\n  var test = new A();\n  var list = [test];\n}\n');
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('class A {}\nmain() {\n  var list = [new A()];\n}\n');
        } )());
    }

    test_OK_parenthesis_intoIndexExpression_index() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  var items = [];\n  var test = 1 + 2;\n  items[test] * 5;\n}\n');
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {\n  var items = [];\n  items[1 + 2] * 5;\n}\n');
        } )());
    }

    test_OK_parenthesis_intoParenthesizedExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('f(m, x, y) {\n  int test = x as int;\n  m[test] = y;\n  return m[test];\n}\n');
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('f(m, x, y) {\n  m[x as int] = y;\n  return m[x as int];\n}\n');
        } )());
    }

    test_OK_parenthesis_negate_intoNegate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  var a = 1;\n  var test = -a;\n  var b = -test;\n}\n');
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {\n  var a = 1;\n  var b = -(-a);\n}\n');
        } )());
    }

    test_OK_parenthesis_plus_intoMultiply() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  var test = 1 + 2;\n  print(test * 3);\n}\n');
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {\n  print((1 + 2) * 3);\n}\n');
        } )());
    }

    test_OK_twoUsages() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int test = 1 + 2;\n  print(test);\n  print(test);\n}\n');
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {\n  print(1 + 2);\n  print(1 + 2);\n}\n');
        } )());
    }

    _assert_fatalError_selection(status : any) : void {
        expect(this.refactoring.variableName,isNull);
        expect(this.refactoring.referenceCount,0);
        this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
            expectedMessage : 'Local variable declaration or reference must be ' + 'selected to activate this refactoring.'});
    }
    _createRefactoring(search : string) : void {
        let offset : number = this.findOffset(search);
        this.refactoring = new bare.createInstance(any,null,this.searchEngine,this.astProvider,this.testUnit,offset);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InlineLocalTest() {
    }
}

export class properties {
}
