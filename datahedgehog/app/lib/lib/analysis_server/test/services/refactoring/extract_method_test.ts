/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/extract_method_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_refactoring";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ExtractMethodTest);
    });
};
export namespace ExtractMethodTest {
    export type Constructors = lib3.RefactoringTest.Constructors | 'ExtractMethodTest';
    export type Interface = Omit<ExtractMethodTest, Constructors>;
}
@DartClass
export class ExtractMethodTest extends lib3.RefactoringTest {
    refactoring : any;

    test_bad_assignmentLeftHandSide() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int aaa;\n  aaa = 0;\n}\n');
            this._createRefactoringForString('aaa ');
            return this._assertConditionsFatal('Cannot extract the left-hand side of an assignment.');
        } )());
    }

    test_bad_comment_selectionEndsInside() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n// start\n  print(0);\n/*\n// end\n*/\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal('Selection ends inside a comment.');
        } )());
    }

    test_bad_comment_selectionStartsInside() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n/*\n// start\n*/\n  print(0);\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal('Selection begins inside a comment.');
        } )());
    }

    test_bad_conflict_method_alreadyDeclaresMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  void res() {}\n  main() {\n// start\n    print(0);\n// end\n  }\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsError("Class 'A' already declares method with name 'res'.");
        } )());
    }

    test_bad_conflict_method_shadowsSuperDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  void res() {} // marker\n}\nclass B extends A {\n  main() {\n    res();\n// start\n    print(0);\n// end\n  }\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsError("Created method will shadow method 'A.res'.");
        } )());
    }

    test_bad_conflict_topLevel_alreadyDeclaresFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('library my.lib;\n\nvoid res() {}\nmain() {\n// start\n  print(0);\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsError("Library already declares function with name 'res'.");
        } )());
    }

    test_bad_conflict_topLevel_willHideInheritedMemberUsage() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  void res() {}\n}\nclass B extends A {\n  foo() {\n    res(); // marker\n  }\n}\nmain() {\n// start\n  print(0);\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsError("Created function will shadow method 'A.res'.");
        } )());
    }

    test_bad_constructor_initializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  int f;\n  A() : f = 0 {}\n}\n');
            this._createRefactoringForString('f = 0');
            return this._assertConditionsFatal('Cannot extract a constructor initializer. Select expression part of initializer.');
        } )());
    }

    test_bad_constructor_redirectingConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  A() : this.named();\n  A.named() {}\n}\n');
            this._createRefactoringForString('this.named()');
            return this._assertConditionsFatal('Cannot extract a constructor initializer. Select expression part of initializer.');
        } )());
    }

    test_bad_constructor_superConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {}\nclass B extends A {\n  B() : super();\n}\n');
            this._createRefactoringForString('super()');
            return this._assertConditionsFatal('Cannot extract a constructor initializer. Select expression part of initializer.');
        } )());
    }

    test_bad_doWhile_body() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  do\n// start\n  {\n  }\n// end\n  while (true);\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Operation not applicable to a 'do' statement's body and expression.");
        } )());
    }

    test_bad_emptySelection() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n// start\n// end\n  print(0);\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Can only extract a single expression or a set of statements.");
        } )());
    }

    test_bad_forLoop_conditionAndUpdaters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  for (\n    int i = 0;\n// start\n    i < 10;\n    i++\n// end\n  ) {}\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Operation not applicable to a 'for' statement's condition and updaters.");
        } )());
    }

    test_bad_forLoop_init() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  for (\n// start\n    int i = 0\n// end\n    ; i < 10;\n    i++\n  ) {}\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Cannot extract initialization part of a 'for' statement.");
        } )());
    }

    test_bad_forLoop_initAndCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  for (\n// start\n    int i = 0;\n    i < 10;\n// end\n    i++\n  ) {}\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Operation not applicable to a 'for' statement's initializer and condition.");
        } )());
    }

    test_bad_forLoop_updaters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  for (\n    int i = 0;\n    i < 10;\n// start\n    i++\n// end\n  ) {}\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Cannot extract increment part of a 'for' statement.");
        } )());
    }

    test_bad_forLoop_updatersAndBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  for (\n    int i = 0;\n    i < 10;\n// start\n    i++\n  ) {}\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Operation not applicable to a 'for' statement's updaters and body.");
        } )());
    }

    test_bad_methodName_reference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  main();\n}\n');
            this._createRefactoringWithSuffix('main','();');
            return this._assertConditionsFatal("Cannot extract a single method name.");
        } )());
    }

    test_bad_namePartOfDeclaration_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n}\n');
            this._createRefactoringForString('main');
            return this._assertConditionsFatal("Cannot extract the name part of a declaration.");
        } )());
    }

    test_bad_namePartOfDeclaration_variable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int vvv = 0;\n}\n');
            this._createRefactoringForString('vvv');
            return this._assertConditionsFatal("Cannot extract the name part of a declaration.");
        } )());
    }

    test_bad_namePartOfQualified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  var fff;\n}\nmain() {\n  A a;\n  a.fff = 1;\n}\n');
            this._createRefactoringWithSuffix('fff',' = 1');
            return this._assertConditionsFatal("Can not extract name part of a property access.");
        } )());
    }

    test_bad_newMethodName_notIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n// start\n  print(0);\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            this.refactoring.name = 'bad-name';
            return this._assertConditionsFatal("Method name must not contain '-'.");
        } )());
    }

    test_bad_notSameParent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  while (false)\n// start\n  {\n  }\n  print(0);\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal('Not all selected statements are enclosed by the same parent statement.');
        } )());
    }

    test_bad_parameterName_duplicate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int v1 = 1;\n  int v2 = 2;\n// start\n  int a = v1 + v2; // marker\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            await this.refactoring.checkInitialConditions();
            {
                let parameters : core.DartList<any> = this._getParametersCopy();
                expect(parameters,hasLength(2));
                parameters[0].name = 'dup';
                parameters[1].name = 'dup';
                this.refactoring.parameters = parameters;
            }
            return this._assertFinalConditionsError("Parameter 'dup' already exists");
        } )());
    }

    test_bad_parameterName_inUse_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int v1 = 1;\n  int v2 = 2;\n// start\n  f(v1, v2);\n// end\n}\nf(a, b) {}\n');
            this._createRefactoringForStartEndComments();
            await this.refactoring.checkInitialConditions();
            {
                let parameters : core.DartList<any> = this._getParametersCopy();
                expect(parameters,hasLength(2));
                parameters[0].name = 'f';
                this.refactoring.parameters = parameters;
            }
            return this._assertFinalConditionsError("'f' is already used as a name in the selected code");
        } )());
    }

    test_bad_parameterName_inUse_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int v1 = 1;\n  int v2 = 2;\n// start\n  int a = v1 + v2; // marker\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            await this.refactoring.checkInitialConditions();
            {
                let parameters : core.DartList<any> = this._getParametersCopy();
                expect(parameters,hasLength(2));
                parameters[0].name = 'a';
                this.refactoring.parameters = parameters;
            }
            return this._assertFinalConditionsError("'a' is already used as a name in the selected code");
        } )());
    }

    test_bad_parameterName_inUse_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  main() {\n    int v1 = 1;\n    int v2 = 2;\n  // start\n    m(v1, v2);\n  // end\n  }\n  m(a, b) {}\n}\n');
            this._createRefactoringForStartEndComments();
            await this.refactoring.checkInitialConditions();
            {
                let parameters : core.DartList<any> = this._getParametersCopy();
                expect(parameters,hasLength(2));
                parameters[0].name = 'm';
                this.refactoring.parameters = parameters;
            }
            return this._assertFinalConditionsError("'m' is already used as a name in the selected code");
        } )());
    }

    test_bad_selectionEndsInSomeNode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n// start\n  print(0);\n  print(1);\n// end\n}\n');
            this._createRefactoringForStartEndString('print(0','rint(1)');
            return this._assertConditionsFatal("The selection does not cover a set of statements or an expression. " + "Extend selection to a valid range.");
        } )());
    }

    test_bad_statements_exit_notAllExecutionFlows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(int p) {\n// start\n  if (p == 0) {\n    return;\n  }\n// end\n  print(p);\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsError(ExtractMethodRefactoringImpl.ERROR_EXITS);
        } )());
    }

    test_bad_statements_return_andAssignsVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n// start\n  var v = 0;\n  return 42;\n// end\n  print(v);\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Ambiguous return value: Selected block contains assignment(s) to " + "local variables and return statement.");
        } )());
    }

    test_bad_switchCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  switch (1) {\n// start\n    case 0: break;\n// end\n  }\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Selection must either cover whole switch statement " + "or parts of a single case block.");
        } )());
    }

    test_bad_tokensBetweenLastNodeAndSelectionEnd() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n// start\n  print(0);\n  print(1);\n}\n// end\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("The end of the selection contains characters that do not belong to a statement.");
        } )());
    }

    test_bad_tokensBetweenSelectionStartAndFirstNode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n// start\n  print(0); // marker\n  print(1);\n// end\n}\n');
            this._createRefactoringForStartEndString('); // marker','// end');
            return this._assertConditionsFatal("The beginning of the selection contains characters that do not belong to a statement.");
        } )());
    }

    test_bad_try_catchBlock_block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  try\n  {}\n  catch (e)\n// start\n  {}\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Selection must either cover whole try statement or " + "parts of try, catch, or finally block.");
        } )());
    }

    test_bad_try_catchBlock_complete() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  try\n  {}\n// start\n  catch (e)\n  {}\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Selection must either cover whole try statement or " + "parts of try, catch, or finally block.");
        } )());
    }

    test_bad_try_catchBlock_exception() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  try {\n  } catch (\n// start\n  e\n// end\n  ) {\n  }\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal('Cannot extract the name part of a declaration.');
        } )());
    }

    test_bad_try_finallyBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  try\n  {}\n  finally\n// start\n  {}\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Selection must either cover whole try statement or " + "parts of try, catch, or finally block.");
        } )());
    }

    test_bad_try_tryBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  try\n// start\n  {}\n// end\n  finally\n  {}\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Selection must either cover whole try statement or " + "parts of try, catch, or finally block.");
        } )());
    }

    test_bad_typeReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int a = 0;\n}\n');
            this._createRefactoringForString("int");
            return this._assertConditionsFatal("Cannot extract a single type reference.");
        } )());
    }

    test_bad_variableDeclarationFragment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int\n// start\n    a = 1\n// end\n    ,b = 2;\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Cannot extract a variable declaration fragment. Select whole declaration statement.");
        } )());
    }

    test_bad_while_conditionAndBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  while\n// start\n    (false)\n  {\n  }\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Operation not applicable to a while statement's expression and body.");
        } )());
    }

    test_canExtractGetter_false_closure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  useFunction((_) => true);\n}\nuseFunction(filter(String p)) {}\n');
            this._createRefactoringForString('(_) => true');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.canCreateGetter,false);
            expect(this.refactoring.createGetter,false);
        } )());
    }

    test_canExtractGetter_false_fieldAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  var f;\n  main() {\n// start\n    f = 1;\n// end\n  }\n}\n');
            this._createRefactoringForStartEndComments();
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.canCreateGetter,false);
            expect(this.refactoring.createGetter,false);
        } )());
    }

    test_canExtractGetter_false_hasParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(int p) {\n  int a = p + 1;\n}\n');
            this._createRefactoringForString('p + 1');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.canCreateGetter,false);
            expect(this.refactoring.createGetter,false);
        } )());
    }

    test_canExtractGetter_false_returnNotUsed_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('var topVar = 0;\nf(int p) {\n  topVar = 5;\n}\n');
            this._createRefactoringForString('topVar = 5');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.canCreateGetter,false);
            expect(this.refactoring.createGetter,false);
        } )());
    }

    test_canExtractGetter_false_returnNotUsed_noReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('var topVar = 0;\nmain() {\n// start\n  int a = 1;\n  int b = 2;\n  topVar = a + b;\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.canCreateGetter,false);
            expect(this.refactoring.createGetter,false);
        } )());
    }

    test_canExtractGetter_true() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int a = 1 + 2;\n}\n');
            this._createRefactoringForString('1 + 2');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.canCreateGetter,true);
            expect(this.refactoring.createGetter,true);
        } )());
    }

    test_checkName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int a = 1 + 2;\n}\n');
            this._createRefactoringForString('1 + 2');
            this.refactoring.name = null;
            this.assertRefactoringStatus(this.refactoring.checkName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Method name must not be null."});
            this.refactoring.name = '';
            this.assertRefactoringStatus(this.refactoring.checkName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Method name must not be empty."});
            this.refactoring.name = 'res';
            this.assertRefactoringStatusOK(this.refactoring.checkName());
        } )());
    }

    test_closure_asFunction_singleExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('process(f(x)) {}\nmain() {\n  process((x) => x * 2);\n}\n');
            this._createRefactoringForString('(x) => x * 2');
            return this._assertSuccessfulRefactoring('process(f(x)) {}\nmain() {\n  process(res);\n}\n\nres(x) => x * 2;\n');
        } )());
    }

    test_closure_asFunction_statements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('process(f(x)) {}\nmain() {\n  process((x) {\n    print(x);\n    return x * 2;\n  }); // marker\n}\n');
            this._createRefactoringForStartEndString('(x) {','); // marker');
            return this._assertSuccessfulRefactoring('process(f(x)) {}\nmain() {\n  process(res); // marker\n}\n\nres(x) {\n  print(x);\n  return x * 2;\n}\n');
        } )());
    }

    test_closure_asMethod_statements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('process(f(x)) {}\nclass A {\n  int k = 2;\n  main() {\n    process((x) {\n      print(x);\n      return x * k;\n    }); // marker\n  }\n}\n');
            this._createRefactoringForStartEndString('(x) {','); // marker');
            return this._assertSuccessfulRefactoring('process(f(x)) {}\nclass A {\n  int k = 2;\n  main() {\n    process(res); // marker\n  }\n\n  res(x) {\n    print(x);\n    return x * k;\n  }\n}\n');
        } )());
    }

    test_closure_bad_referencesLocalVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('process(f(x)) {}\nmain() {\n  int k = 2;\n  process((x) => x * k);\n}\n');
            this._createRefactoringForString('(x) => x * k');
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : 'Cannot extract closure as method, it references 1 external variable(s).'});
        } )());
    }

    test_closure_bad_referencesParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('process(f(x)) {}\nmain(int k) {\n  process((x) => x * k);\n}\n');
            this._createRefactoringForString('(x) => x * k');
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : 'Cannot extract closure as method, it references 1 external variable(s).'});
        } )());
    }

    test_fromTopLevelVariableInitializerClosure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('var X = 1;\n\ndynamic Y = () {\n  return 1 + X;\n};\n');
            this._createRefactoringForString('1 + X');
            return this._assertSuccessfulRefactoring('var X = 1;\n\ndynamic Y = () {\n  return res();\n};\n\nint res() => 1 + X;\n');
        } )());
    }

    test_getExtractGetter_expression_true_binaryExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  print(1 + 2);\n}\n');
            this._createRefactoringForString('1 + 2');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.createGetter,true);
        } )());
    }

    test_getExtractGetter_expression_true_literal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  print(42);\n}\n');
            this._createRefactoringForString('42');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.createGetter,true);
        } )());
    }

    test_getExtractGetter_expression_true_prefixedExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  print(!true);\n}\n');
            this._createRefactoringForString('!true');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.createGetter,true);
        } )());
    }

    test_getExtractGetter_expression_true_prefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  print(myValue.isEven);\n}\nint get myValue => 42;\n');
            this._createRefactoringForString('myValue.isEven');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.createGetter,true);
        } )());
    }

    test_getExtractGetter_expression_true_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  print(1.isEven);\n}\n');
            this._createRefactoringForString('1.isEven');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.createGetter,true);
        } )());
    }

    test_getExtractGetter_statements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n// start\n  int v = 0;\n// end\n  print(v);\n}\n');
            this._createRefactoringForStartEndComments();
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.createGetter,false);
        } )());
    }

    test_getRefactoringName_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  print(1 + 2);\n}\n');
            this._createRefactoringForString('1 + 2');
            expect(this.refactoring.refactoringName,'Extract Function');
        } )());
    }

    test_getRefactoringName_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  main() {\n    print(1 + 2);\n  }\n}\n');
            this._createRefactoringForString('1 + 2');
            expect(this.refactoring.refactoringName,'Extract Method');
        } )());
    }

    test_names_singleExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class TreeItem {}\nTreeItem getSelectedItem() => null;\nprocess(my) {}\nmain() {\n  process(getSelectedItem()); // marker\n  int treeItem = 0;\n}\n');
            this._createRefactoringWithSuffix('getSelectedItem()','); // marker');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.names,unorderedEquals(new core.DartList.literal('selectedItem','item','my','treeItem2')));
        } )());
    }

    test_offsets_lengths() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int a = 1 + 2;\n  int b = 1 +  2;\n}\n');
            this._createRefactoringForString('1 +  2');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.offsets,unorderedEquals(new core.DartList.literal(this.findOffset('1 + 2'),this.findOffset('1 +  2'))));
            expect(this.refactoring.lengths,unorderedEquals(new core.DartList.literal(5,6)));
        } )());
    }

    test_returnType_closure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('process(f(x)) {}\nmain() {\n  process((x) => x * 2);\n}\n');
            this._createRefactoringForString('(x) => x * 2');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.returnType,'');
        } )());
    }

    test_returnType_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int a = 1 + 2;\n}\n');
            this._createRefactoringForString('1 + 2');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.returnType,'int');
        } )());
    }

    test_returnType_mixInterfaceFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n// start\n  if (true) {\n    return 1;\n  } else {\n    return () {};\n  }\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.returnType,'Object');
        } )());
    }

    test_returnType_statements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n// start\n  double v = 5.0;\n// end\n  print(v);\n}\n');
            this._createRefactoringForStartEndComments();
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.returnType,'double');
        } )());
    }

    test_returnType_statements_nullMix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(bool p) {\n// start\n  if (p) {\n    return 42;\n  }\n  return null;\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.returnType,'int');
        } )());
    }

    test_returnType_statements_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n// start\n  print(42);\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.returnType,'void');
        } )());
    }

    test_setExtractGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int a = 1 + 2;\n}\n');
            this._createRefactoringForString('1 + 2');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.canCreateGetter,true);
            expect(this.refactoring.createGetter,true);
            this.refactoringChange = await this.refactoring.createChange();
            this.assertTestChangeResult('main() {\n  int a = res;\n}\n\nint get res => 1 + 2;\n');
        } )());
    }

    test_singleExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int a = 1 + 2;\n}\n');
            this._createRefactoringForString('1 + 2');
            return this._assertSuccessfulRefactoring('main() {\n  int a = res();\n}\n\nint res() => 1 + 2;\n');
        } )());
    }

    test_singleExpression_cascade() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  String s = \'\';\n  var v = s..length;\n}\n');
            this._createRefactoringForString('s..length');
            return this._assertSuccessfulRefactoring('main() {\n  String s = \'\';\n  var v = res(s);\n}\n\nString res(String s) => s..length;\n');
        } )());
    }

    test_singleExpression_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('dynaFunction() {}\nmain() {\n  var v = dynaFunction(); // marker\n}\n');
            this._createRefactoringWithSuffix('dynaFunction()','; // marker');
            return this._assertSuccessfulRefactoring('dynaFunction() {}\nmain() {\n  var v = res(); // marker\n}\n\nres() => dynaFunction();\n');
        } )());
    }

    test_singleExpression_hasAwait() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';\nFuture<int> getValue() async => 42;\nmain() async {\n  int v = await getValue();\n  print(v);\n}\n');
            this._createRefactoringForString('await getValue()');
            return this._assertSuccessfulRefactoring('import \'dart:async\';\nFuture<int> getValue() async => 42;\nmain() async {\n  int v = await res();\n  print(v);\n}\n\nFuture<int> res() async => await getValue();\n');
        } )());
    }

    test_singleExpression_ignore_assignmentLeftHandSize() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  getButton().text = \'txt\';\n  print(getButton().text); // marker\n}\ngetButton() {}\n');
            this._createRefactoringWithSuffix('getButton().text','); // marker');
            return this._assertSuccessfulRefactoring('main() {\n  getButton().text = \'txt\';\n  print(res()); // marker\n}\n\nres() => getButton().text;\ngetButton() {}\n');
        } )());
    }

    test_singleExpression_occurrences() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int v1 = 1;\n  int v2 = 2;\n  int v3 = 3;\n  int positiveA = v1 + v2; // marker\n  int positiveB = v2 + v3;\n  int positiveC = v1 +  v2;\n  int positiveD = v1/*abc*/ + v2;\n  int negA = 1 + 2;\n  int negB = 1 + v2;\n  int negC = v1 + 2;\n  int negD = v1 * v2;\n}\n');
            this._createRefactoringWithSuffix('v1 + v2','; // marker');
            return this._assertSuccessfulRefactoring('main() {\n  int v1 = 1;\n  int v2 = 2;\n  int v3 = 3;\n  int positiveA = res(v1, v2); // marker\n  int positiveB = res(v2, v3);\n  int positiveC = res(v1, v2);\n  int positiveD = res(v1, v2);\n  int negA = 1 + 2;\n  int negB = 1 + v2;\n  int negC = v1 + 2;\n  int negD = v1 * v2;\n}\n\nint res(int v1, int v2) => v1 + v2;\n');
        } )());
    }

    test_singleExpression_occurrences_disabled() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int v1 = 1;\n  int v2 = 2;\n  int v3 = 3;\n  int a = v1 + v2; // marker\n  int b = v2 + v3;\n}\n');
            this._createRefactoringWithSuffix('v1 + v2','; // marker');
            this.refactoring.extractAll = false;
            return this._assertSuccessfulRefactoring('main() {\n  int v1 = 1;\n  int v2 = 2;\n  int v3 = 3;\n  int a = res(v1, v2); // marker\n  int b = v2 + v3;\n}\n\nint res(int v1, int v2) => v1 + v2;\n');
        } )());
    }

    test_singleExpression_occurrences_inClassOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  myMethod() {\n    int v1 = 1;\n    int v2 = 2;\n    int positiveA = v1 + v2; // marker\n  }\n}\nmain() {\n  int v1 = 1;\n  int v2 = 2;\n  int negA = v1 + v2;\n}\n');
            this._createRefactoringWithSuffix('v1 + v2','; // marker');
            return this._assertSuccessfulRefactoring('class A {\n  myMethod() {\n    int v1 = 1;\n    int v2 = 2;\n    int positiveA = res(v1, v2); // marker\n  }\n\n  int res(int v1, int v2) => v1 + v2;\n}\nmain() {\n  int v1 = 1;\n  int v2 = 2;\n  int negA = v1 + v2;\n}\n');
        } )());
    }

    test_singleExpression_occurrences_incompatibleTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int x = 1;\n  String y = \'foo\';\n  print(x.toString());\n  print(y.toString());\n}\n');
            this._createRefactoringForString('x.toString()');
            return this._assertSuccessfulRefactoring('main() {\n  int x = 1;\n  String y = \'foo\';\n  print(res(x));\n  print(y.toString());\n}\n\nString res(int x) => x.toString();\n');
        } )());
    }

    test_singleExpression_occurrences_inWholeUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int v1 = 1;\n  int v2 = 2;\n  int positiveA = v1 + v2; // marker\n}\nclass A {\n  myMethod() {\n    int v1 = 1;\n    int v2 = 2;\n    int positiveB = v1 + v2;\n  }\n}\n');
            this._createRefactoringWithSuffix('v1 + v2','; // marker');
            return this._assertSuccessfulRefactoring('main() {\n  int v1 = 1;\n  int v2 = 2;\n  int positiveA = res(v1, v2); // marker\n}\n\nint res(int v1, int v2) => v1 + v2;\nclass A {\n  myMethod() {\n    int v1 = 1;\n    int v2 = 2;\n    int positiveB = res(v1, v2);\n  }\n}\n');
        } )());
    }

    test_singleExpression_parameter_functionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('typedef R Foo<S, R>(S s);\nvoid main(Foo<String, int> foo, String s) {\n  int a = foo(s);\n}\n');
            this._createRefactoringForString('foo(s)');
            return this._assertSuccessfulRefactoring('typedef R Foo<S, R>(S s);\nvoid main(Foo<String, int> foo, String s) {\n  int a = res(foo, s);\n}\n\nint res(Foo<String, int> foo, String s) => foo(s);\n');
        } )());
    }

    test_singleExpression_returnType_importLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addLibraryReturningAsync();
            await this.indexTestUnit('import \'asyncLib.dart\';\nmain() {\n  var a = newFuture();\n}\n');
            this._createRefactoringForString('newFuture()');
            return this._assertSuccessfulRefactoring('import \'asyncLib.dart\';\nimport \'dart:async\';\nmain() {\n  var a = res();\n}\n\nFuture<int> res() => newFuture();\n');
        } )());
    }

    test_singleExpression_returnTypeGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  var v = new List<String>();\n}\n');
            this._createRefactoringForString('new List<String>()');
            return this._assertSuccessfulRefactoring('main() {\n  var v = res();\n}\n\nList<String> res() => new List<String>();\n');
        } )());
    }

    test_singleExpression_returnTypePrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:math\' as pref;\nmain() {\n  var v = new pref.Random();\n}\n');
            this._createRefactoringForString('new pref.Random()');
            return this._assertSuccessfulRefactoring('import \'dart:math\' as pref;\nmain() {\n  var v = res();\n}\n\npref.Random res() => new pref.Random();\n');
        } )());
    }

    test_singleExpression_staticContext_extractFromInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  A(int v) {}\n}\nclass B extends A {\n  B() : super(1 + 2) {}\n}\n');
            this._createRefactoringForString('1 + 2');
            return this._assertSuccessfulRefactoring('class A {\n  A(int v) {}\n}\nclass B extends A {\n  B() : super(res()) {}\n\n  static int res() => 1 + 2;\n}\n');
        } )());
    }

    test_singleExpression_staticContext_extractFromInstance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  instanceMethodA() {\n    int v1 = 1;\n    int v2 = 2;\n    int positiveA = v1 + v2; // marker\n  }\n  instanceMethodB() {\n    int v1 = 1;\n    int v2 = 2;\n    int positiveB = v1 + v2;\n  }\n  static staticMethodA() {\n    int v1 = 1;\n    int v2 = 2;\n    int positiveA = v1 + v2;\n  }\n}\n');
            this._createRefactoringWithSuffix('v1 + v2','; // marker');
            return this._assertSuccessfulRefactoring('class A {\n  instanceMethodA() {\n    int v1 = 1;\n    int v2 = 2;\n    int positiveA = res(v1, v2); // marker\n  }\n\n  static int res(int v1, int v2) => v1 + v2;\n  instanceMethodB() {\n    int v1 = 1;\n    int v2 = 2;\n    int positiveB = res(v1, v2);\n  }\n  static staticMethodA() {\n    int v1 = 1;\n    int v2 = 2;\n    int positiveA = res(v1, v2);\n  }\n}\n');
        } )());
    }

    test_singleExpression_staticContext_extractFromStatic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  static staticMethodA() {\n    int v1 = 1;\n    int v2 = 2;\n    int positiveA = v1 + v2; // marker\n  }\n  static staticMethodB() {\n    int v1 = 1;\n    int v2 = 2;\n    int positiveB = v1 + v2;\n  }\n  instanceMethodA() {\n    int v1 = 1;\n    int v2 = 2;\n    int positiveA = v1 + v2;\n  }\n}\n');
            this._createRefactoringWithSuffix('v1 + v2','; // marker');
            return this._assertSuccessfulRefactoring('class A {\n  static staticMethodA() {\n    int v1 = 1;\n    int v2 = 2;\n    int positiveA = res(v1, v2); // marker\n  }\n\n  static int res(int v1, int v2) => v1 + v2;\n  static staticMethodB() {\n    int v1 = 1;\n    int v2 = 2;\n    int positiveB = res(v1, v2);\n  }\n  instanceMethodA() {\n    int v1 = 1;\n    int v2 = 2;\n    int positiveA = res(v1, v2);\n  }\n}\n');
        } )());
    }

    test_singleExpression_staticContext_hasInInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  A(int v) {}\n}\nclass B extends A {\n  B() : super(1 + 2) {}\n  foo() {\n    print(1 + 2); // marker\n  }\n}\n');
            this._createRefactoringWithSuffix('1 + 2','); // marker');
            return this._assertSuccessfulRefactoring('class A {\n  A(int v) {}\n}\nclass B extends A {\n  B() : super(res()) {}\n  foo() {\n    print(res()); // marker\n  }\n\n  static int res() => 1 + 2;\n}\n');
        } )());
    }

    test_singleExpression_usesParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('fooA(int a1) {\n  int a2 = 2;\n  int a = a1 + a2;\n}\nfooB(int b1) {\n  int b2 = 2;\n  int b = b1 + b2;\n}\n');
            this._createRefactoringForString('a1 + a2');
            return this._assertSuccessfulRefactoring('fooA(int a1) {\n  int a2 = 2;\n  int a = res(a1, a2);\n}\n\nint res(int a1, int a2) => a1 + a2;\nfooB(int b1) {\n  int b2 = 2;\n  int b = res(b1, b2);\n}\n');
        } )());
    }

    test_singleExpression_withVariables() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int v1 = 1;\n  int v2 = 2;\n  int a = v1 + v2 + v1;\n}\n');
            this._createRefactoringForString('v1 + v2 + v1');
            return this._assertSuccessfulRefactoring('main() {\n  int v1 = 1;\n  int v2 = 2;\n  int a = res(v1, v2);\n}\n\nint res(int v1, int v2) => v1 + v2 + v1;\n');
        } )());
    }

    test_singleExpression_withVariables_doRename() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int v1 = 1;\n  int v2 = 2;\n  int v3 = 3;\n  int a = v1 + v2 + v1; // marker\n  int b = v2 + v3 + v2;\n}\n');
            this._createRefactoringForString('v1 + v2 + v1');
            await this.refactoring.checkInitialConditions();
            {
                let parameters : core.DartList<any> = this._getParametersCopy();
                expect(parameters,hasLength(2));
                expect(parameters[0].name,'v1');
                expect(parameters[1].name,'v2');
                parameters[0].name = 'par1';
                parameters[1].name = 'param2';
                this.refactoring.parameters = parameters;
            }
            await this.assertRefactoringFinalConditionsOK();
            this.refactoring.createGetter = false;
            return this._assertRefactoringChange('main() {\n  int v1 = 1;\n  int v2 = 2;\n  int v3 = 3;\n  int a = res(v1, v2); // marker\n  int b = res(v2, v3);\n}\n\nint res(int par1, int param2) => par1 + param2 + par1;\n');
        } )());
    }

    test_singleExpression_withVariables_doReorder() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int v1 = 1;\n  int v2 = 2;\n  int v3 = 3;\n  int a = v1 + v2; // marker\n  int b = v2 + v3;\n}\n');
            this._createRefactoringForString('v1 + v2');
            await this.refactoring.checkInitialConditions();
            {
                let parameters : core.DartList<any> = this._getParametersCopy();
                expect(parameters,hasLength(2));
                expect(parameters[0].name,'v1');
                expect(parameters[1].name,'v2');
                let parameter = parameters.removeAt(1);
                parameters.insert(0,parameter);
                this.refactoring.parameters = parameters;
            }
            await this.assertRefactoringFinalConditionsOK();
            this.refactoring.createGetter = false;
            return this._assertRefactoringChange('main() {\n  int v1 = 1;\n  int v2 = 2;\n  int v3 = 3;\n  int a = res(v2, v1); // marker\n  int b = res(v3, v2);\n}\n\nint res(int v2, int v1) => v1 + v2;\n');
        } )());
    }

    test_singleExpression_withVariables_namedExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int v1 = 1;\n  int v2 = 2;\n  int a = process(arg: v1 + v2);\n}\nprocess({arg}) {}\n');
            this._createRefactoringForString('process(arg: v1 + v2)');
            return this._assertSuccessfulRefactoring('main() {\n  int v1 = 1;\n  int v2 = 2;\n  int a = res(v1, v2);\n}\n\nres(int v1, int v2) => process(arg: v1 + v2);\nprocess({arg}) {}\n');
        } )());
    }

    test_singleExpression_withVariables_newType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int v1 = 1;\n  int v2 = 2;\n  int v3 = 3;\n  int a = v1 + v2 + v3;\n}\n');
            this._createRefactoringForString('v1 + v2 + v3');
            await this.refactoring.checkInitialConditions();
            {
                let parameters : core.DartList<any> = this._getParametersCopy();
                expect(parameters,hasLength(3));
                expect(parameters[0].name,'v1');
                expect(parameters[1].name,'v2');
                expect(parameters[2].name,'v3');
                parameters[0].type = 'num';
                parameters[1].type = 'dynamic';
                parameters[2].type = '';
                this.refactoring.parameters = parameters;
            }
            await this.assertRefactoringFinalConditionsOK();
            this.refactoring.createGetter = false;
            return this._assertRefactoringChange('main() {\n  int v1 = 1;\n  int v2 = 2;\n  int v3 = 3;\n  int a = res(v1, v2, v3);\n}\n\nint res(num v1, v2, v3) => v1 + v2 + v3;\n');
        } )());
    }

    test_singleExpression_withVariables_useBestType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  var v1 = 1;\n  var v2 = 2;\n  var a = v1 + v2 + v1; // marker\n}\n');
            this._createRefactoringForString('v1 + v2 + v1');
            return this._assertSuccessfulRefactoring('main() {\n  var v1 = 1;\n  var v2 = 2;\n  var a = res(v1, v2); // marker\n}\n\nint res(int v1, int v2) => v1 + v2 + v1;\n');
        } )());
    }

    test_statements_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int v;\n// start\n  v = 5;\n// end\n  print(v);\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main() {\n  int v;\n// start\n  v = res(v);\n// end\n  print(v);\n}\n\nint res(int v) {\n  v = 5;\n  return v;\n}\n');
        } )());
    }

    test_statements_changeIndentation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  {\n// start\n    if (true) {\n      print(0);\n    }\n// end\n  }\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main() {\n  {\n// start\n    res();\n// end\n  }\n}\n\nvoid res() {\n  if (true) {\n    print(0);\n  }\n}\n');
        } )());
    }

    test_statements_changeIndentation_multilineString() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  {\n// start\n    print("""\nfirst line\nsecond line\n    """);\n// end\n  }\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main() {\n  {\n// start\n    res();\n// end\n  }\n}\n\nvoid res() {\n  print("""\nfirst line\nsecond line\n    """);\n}\n');
        } )());
    }

    test_statements_definesVariable_notUsedOutside() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int a = 1;\n  int b = 1;\n// start\n  int v = a + b;\n  print(v);\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main() {\n  int a = 1;\n  int b = 1;\n// start\n  res(a, b);\n// end\n}\n\nvoid res(int a, int b) {\n  int v = a + b;\n  print(v);\n}\n');
        } )());
    }

    test_statements_definesVariable_oneUsedOutside_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('myFunctionA() {\n  int a = 1;\n// start\n  a += 10;\n// end\n  print(a);\n}\nmyFunctionB() {\n  int b = 2;\n  b += 10;\n  print(b);\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('myFunctionA() {\n  int a = 1;\n// start\n  a = res(a);\n// end\n  print(a);\n}\n\nint res(int a) {\n  a += 10;\n  return a;\n}\nmyFunctionB() {\n  int b = 2;\n  b = res(b);\n  print(b);\n}\n');
        } )());
    }

    test_statements_definesVariable_oneUsedOutside_declaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('myFunctionA() {\n  int a = 1;\n  int b = 2;\n// start\n  int v1 = a + b;\n// end\n  print(v1);\n}\nmyFunctionB() {\n  int a = 3;\n  int b = 4;\n  int v2 = a + b;\n  print(v2);\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('myFunctionA() {\n  int a = 1;\n  int b = 2;\n// start\n  int v1 = res(a, b);\n// end\n  print(v1);\n}\n\nint res(int a, int b) {\n  int v1 = a + b;\n  return v1;\n}\nmyFunctionB() {\n  int a = 3;\n  int b = 4;\n  int v2 = res(a, b);\n  print(v2);\n}\n');
        } )());
    }

    test_statements_definesVariable_twoUsedOutside() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n// start\n  int varA = 1;\n  int varB = 2;\n// end\n  int v = varA + varB;\n}\n');
            this._createRefactoringForStartEndComments();
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL);
        } )());
    }

    test_statements_duplicate_absolutelySame() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('myFunctionA() {\n  print(0);\n  print(1);\n}\nmyFunctionB() {\n// start\n  print(0);\n  print(1);\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('myFunctionA() {\n  res();\n}\nmyFunctionB() {\n// start\n  res();\n// end\n}\n\nvoid res() {\n  print(0);\n  print(1);\n}\n');
        } )());
    }

    test_statements_duplicate_declaresDifferentlyNamedVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('myFunctionA() {\n  int varA = 1;\n  print(varA);\n}\nmyFunctionB() {\n// start\n  int varB = 1;\n  print(varB);\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('myFunctionA() {\n  res();\n}\nmyFunctionB() {\n// start\n  res();\n// end\n}\n\nvoid res() {\n  int varB = 1;\n  print(varB);\n}\n');
        } )());
    }

    test_statements_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('dynaFunction(p) => 0;\nmain() {\n// start\n  var a = 1;\n  var v = dynaFunction(a);\n// end\n  print(v);\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('dynaFunction(p) => 0;\nmain() {\n// start\n  var v = res();\n// end\n  print(v);\n}\n\nres() {\n  var a = 1;\n  var v = dynaFunction(a);\n  return v;\n}\n');
        } )());
    }

    test_statements_endsWithBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n// start\n  if (true) {\n    print(0);\n  }\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main() {\n// start\n  res();\n// end\n}\n\nvoid res() {\n  if (true) {\n    print(0);\n  }\n}\n');
        } )());
    }

    test_statements_exit_throws() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(int p) {\n// start\n  if (p == 0) {\n    return;\n  }\n  throw \'boo!\';\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            await this.assertRefactoringConditionsOK();
        } )());
    }

    test_statements_hasAwait_dynamicReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';\nFuture getValue() async => 42;\nmain() async {\n// start\n  var v = await getValue();\n// end\n  print(v);\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('import \'dart:async\';\nFuture getValue() async => 42;\nmain() async {\n// start\n  var v = await res();\n// end\n  print(v);\n}\n\nFuture res() async {\n  var v = await getValue();\n  return v;\n}\n');
        } )());
    }

    test_statements_hasAwait_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';\nFuture<int> getValue() async => 42;\nmain() async {\n// start\n  int v = await getValue();\n  v += 2;\n// end\n  print(v);\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('import \'dart:async\';\nFuture<int> getValue() async => 42;\nmain() async {\n// start\n  int v = await res();\n// end\n  print(v);\n}\n\nFuture<int> res() async {\n  int v = await getValue();\n  v += 2;\n  return v;\n}\n');
        } )());
    }

    test_statements_hasAwait_forEach() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';\nStream<int> getValueStream() => null;\nmain() async {\n// start\n  int sum = 0;\n  await for (int v in getValueStream()) {\n    sum += v;\n  }\n// end\n  print(sum);\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('import \'dart:async\';\nStream<int> getValueStream() => null;\nmain() async {\n// start\n  int sum = await res();\n// end\n  print(sum);\n}\n\nFuture<int> res() async {\n  int sum = 0;\n  await for (int v in getValueStream()) {\n    sum += v;\n  }\n  return sum;\n}\n');
        } )());
    }

    test_statements_hasAwait_voidReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';\nFuture<int> getValue() async => 42;\nmain() async {\n// start\n  int v = await getValue();\n  print(v);\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('import \'dart:async\';\nFuture<int> getValue() async => 42;\nmain() async {\n// start\n  await res();\n// end\n}\n\nFuture res() async {\n  int v = await getValue();\n  print(v);\n}\n');
        } )());
    }

    test_statements_inSwitchMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  foo(int p) {\n    switch (p) {\n      case 0:\n// start\n        print(0);\n// end\n        break;\n      default:\n        break;\n    }\n  }\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('class A {\n  foo(int p) {\n    switch (p) {\n      case 0:\n// start\n        res();\n// end\n        break;\n      default:\n        break;\n    }\n  }\n\n  void res() {\n    print(0);\n  }\n}\n');
        } )());
    }

    test_statements_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  foo() {\n// start\n    print(0);\n// end\n  }\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('class A {\n  foo() {\n// start\n    res();\n// end\n  }\n\n  void res() {\n    print(0);\n  }\n}\n');
        } )());
    }

    test_statements_noDuplicates() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int a = 1;\n  int b = 1;\n// start\n  print(a);\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main() {\n  int a = 1;\n  int b = 1;\n// start\n  res(a);\n// end\n}\n\nvoid res(int a) {\n  print(a);\n}\n');
        } )());
    }

    test_statements_parameters_ignoreInnerPropagatedType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(Object x) {\n// start\n  if (x is int) {\n    print(\'int\');\n  }\n  if (x is bool) {\n    print(\'bool\');\n  }\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main(Object x) {\n// start\n  res(x);\n// end\n}\n\nvoid res(Object x) {\n  if (x is int) {\n    print(\'int\');\n  }\n  if (x is bool) {\n    print(\'bool\');\n  }\n}\n');
        } )());
    }

    test_statements_parameters_importType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addLibraryReturningAsync();
            await this.indexTestUnit('import \'asyncLib.dart\';\nmain() {\n  var v = newFuture();\n// start\n  print(v);\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('import \'asyncLib.dart\';\nimport \'dart:async\';\nmain() {\n  var v = newFuture();\n// start\n  res(v);\n// end\n}\n\nvoid res(Future<int> v) {\n  print(v);\n}\n');
        } )());
    }

    test_statements_parameters_localFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addLibraryReturningAsync();
            await this.indexTestUnit('class C {\n  int f(int a) {\n    int callback(int x, int y) => x + a;\n    int b = a + 1;\n// start\n    int c = callback(b, 2);\n// end\n    int d = c + 1;\n    return d;\n  }\n}');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('class C {\n  int f(int a) {\n    int callback(int x, int y) => x + a;\n    int b = a + 1;\n// start\n    int c = res(callback, b);\n// end\n    int d = c + 1;\n    return d;\n  }\n\n  int res(int callback(int x, int y), int b) {\n    int c = callback(b, 2);\n    return c;\n  }\n}');
        } )());
    }

    test_statements_parameters_noLocalVariableConflict() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('int f(int x) {\n  int y = x + 1;\n// start\n  if (y % 2 == 0) {\n    int y = x + 2;\n    return y;\n  } else {\n    return y;\n  }\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            await this.assertRefactoringConditionsOK();
        } )());
    }

    test_statements_return_last() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n// start\n  int v = 5;\n  return v + 1;\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main() {\n// start\n  return res();\n// end\n}\n\nint res() {\n  int v = 5;\n  return v + 1;\n}\n');
        } )());
    }

    test_statements_return_multiple_ifElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('num main(bool b) {\n// start\n  if (b) {\n    return 1;\n  } else {\n    return 2.0;\n  }\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('num main(bool b) {\n// start\n  return res(b);\n// end\n}\n\nnum res(bool b) {\n  if (b) {\n    return 1;\n  } else {\n    return 2.0;\n  }\n}\n');
        } )());
    }

    test_statements_return_multiple_ifThen() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('num main(bool b) {\n// start\n  if (b) {\n    return 1;\n  }\n  return 2.0;\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('num main(bool b) {\n// start\n  return res(b);\n// end\n}\n\nnum res(bool b) {\n  if (b) {\n    return 1;\n  }\n  return 2.0;\n}\n');
        } )());
    }

    test_statements_return_multiple_ignoreInFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('int main() {\n// start\n  localFunction() {\n    return \'abc\';\n  }\n  return 42;\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('int main() {\n// start\n  return res();\n// end\n}\n\nint res() {\n  localFunction() {\n    return \'abc\';\n  }\n  return 42;\n}\n');
        } )());
    }

    test_statements_return_multiple_interfaceFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(bool b) {\n// start\n  if (b) {\n    return 1;\n  }\n  return () {};\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main(bool b) {\n// start\n  return res(b);\n// end\n}\n\nObject res(bool b) {\n  if (b) {\n    return 1;\n  }\n  return () {};\n}\n');
        } )());
    }

    test_statements_return_multiple_sameElementDifferentTypeArgs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(bool b) {\n// start\n  if (b) {\n    print(true);\n    return <int>[];\n  } else {\n    print(false);\n    return <String>[];\n  }\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main(bool b) {\n// start\n  return res(b);\n// end\n}\n\nList res(bool b) {\n  if (b) {\n    print(true);\n    return <int>[];\n  } else {\n    print(false);\n    return <String>[];\n  }\n}\n');
        } )());
    }

    test_statements_return_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n// start\n  return 42;\n// end\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main() {\n// start\n  return res();\n// end\n}\n\nint res() {\n  return 42;\n}\n');
        } )());
    }

    test_statements_twoOfThree() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n// start\n  print(0);\n  print(0);\n// end\n  print(0);\n}\n');
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main() {\n// start\n  res();\n// end\n  print(0);\n}\n\nvoid res() {\n  print(0);\n  print(0);\n}\n');
        } )());
    }

    _addLibraryReturningAsync() : void {
        this.addSource('/asyncLib.dart','library asyncLib;\nimport \'dart:async\';\nFuture<int> newFuture() => null;\n');
    }
    _assertConditionsError(message : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let status : any = await this.refactoring.checkAllConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : message});
        } )());
    }

    _assertConditionsFatal(message : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let status : any = await this.refactoring.checkAllConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : message});
        } )());
    }

    _assertFinalConditionsError(message : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : message});
        } )());
    }

    _assertRefactoringChange(expectedCode : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let refactoringChange : any = await this.refactoring.createChange();
            this.refactoringChange = refactoringChange;
            this.assertTestChangeResult(expectedCode);
        } )());
    }

    _assertSuccessfulRefactoring(expectedCode : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertRefactoringConditionsOK();
            this.refactoring.createGetter = false;
            return this._assertRefactoringChange(expectedCode);
        } )());
    }

    _createRefactoring(offset : number,length : number) : void {
        this.refactoring = new bare.createInstance(any,null,this.searchEngine,this.testUnit,offset,length);
        this.refactoring.name = 'res';
    }
    _createRefactoringForStartEndComments() : void {
        let offset : number = this.findEnd('// start') + new core.DartString('\n').length;
        let end : number = this.findOffset('// end');
        this._createRefactoring(offset,end - offset);
    }
    _createRefactoringForStartEndString(startSearch : string,endSearch : string) : void {
        let offset : number = this.findOffset(startSearch);
        let end : number = this.findOffset(endSearch);
        this._createRefactoring(offset,end - offset);
    }
    _createRefactoringForString(search : string) : void {
        let offset : number = this.findOffset(search);
        let length : number = new core.DartString(search).length;
        this._createRefactoring(offset,length);
    }
    _createRefactoringWithSuffix(selectionSearch : string,suffix : string) : void {
        let offset : number = this.findOffset(selectionSearch + suffix);
        let length : number = new core.DartString(selectionSearch).length;
        this._createRefactoring(offset,length);
    }
    _getParametersCopy() : core.DartList<any> {
        return this.refactoring.parameters.map((p : any) =>  {
            return new bare.createInstance(any,null,p.kind,p.type,p.name,{
                id : p.id});
        }).toList();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExtractMethodTest() {
    }
}

export class properties {
}
