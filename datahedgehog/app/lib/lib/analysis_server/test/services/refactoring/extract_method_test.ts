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
            await this.indexTestUnit('main() {
            this._createRefactoringForString('aaa ');
            return this._assertConditionsFatal('Cannot extract the left-hand side of an assignment.');
        } )());
    }

    test_bad_comment_selectionEndsInside() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal('Selection ends inside a comment.');
        } )());
    }

    test_bad_comment_selectionStartsInside() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal('Selection begins inside a comment.');
        } )());
    }

    test_bad_conflict_method_alreadyDeclaresMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsError("Class 'A' already declares method with name 'res'.");
        } )());
    }

    test_bad_conflict_method_shadowsSuperDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsError("Created method will shadow method 'A.res'.");
        } )());
    }

    test_bad_conflict_topLevel_alreadyDeclaresFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('library my.lib;
            this._createRefactoringForStartEndComments();
            return this._assertConditionsError("Library already declares function with name 'res'.");
        } )());
    }

    test_bad_conflict_topLevel_willHideInheritedMemberUsage() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsError("Created function will shadow method 'A.res'.");
        } )());
    }

    test_bad_constructor_initializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringForString('f = 0');
            return this._assertConditionsFatal('Cannot extract a constructor initializer. Select expression part of initializer.');
        } )());
    }

    test_bad_constructor_redirectingConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringForString('this.named()');
            return this._assertConditionsFatal('Cannot extract a constructor initializer. Select expression part of initializer.');
        } )());
    }

    test_bad_constructor_superConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {}
            this._createRefactoringForString('super()');
            return this._assertConditionsFatal('Cannot extract a constructor initializer. Select expression part of initializer.');
        } )());
    }

    test_bad_doWhile_body() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Operation not applicable to a 'do' statement's body and expression.");
        } )());
    }

    test_bad_emptySelection() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Can only extract a single expression or a set of statements.");
        } )());
    }

    test_bad_forLoop_conditionAndUpdaters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Operation not applicable to a 'for' statement's condition and updaters.");
        } )());
    }

    test_bad_forLoop_init() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Cannot extract initialization part of a 'for' statement.");
        } )());
    }

    test_bad_forLoop_initAndCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Operation not applicable to a 'for' statement's initializer and condition.");
        } )());
    }

    test_bad_forLoop_updaters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Cannot extract increment part of a 'for' statement.");
        } )());
    }

    test_bad_forLoop_updatersAndBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Operation not applicable to a 'for' statement's updaters and body.");
        } )());
    }

    test_bad_methodName_reference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringWithSuffix('main','();');
            return this._assertConditionsFatal("Cannot extract a single method name.");
        } )());
    }

    test_bad_namePartOfDeclaration_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('main');
            return this._assertConditionsFatal("Cannot extract the name part of a declaration.");
        } )());
    }

    test_bad_namePartOfDeclaration_variable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('vvv');
            return this._assertConditionsFatal("Cannot extract the name part of a declaration.");
        } )());
    }

    test_bad_namePartOfQualified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringWithSuffix('fff',' = 1');
            return this._assertConditionsFatal("Can not extract name part of a property access.");
        } )());
    }

    test_bad_newMethodName_notIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            this.refactoring.name = 'bad-name';
            return this._assertConditionsFatal("Method name must not contain '-'.");
        } )());
    }

    test_bad_notSameParent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal('Not all selected statements are enclosed by the same parent statement.');
        } )());
    }

    test_bad_parameterName_duplicate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
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
            await this.indexTestUnit('main() {
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
            await this.indexTestUnit('main() {
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
            await this.indexTestUnit('class A {
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
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndString('print(0','rint(1)');
            return this._assertConditionsFatal("The selection does not cover a set of statements or an expression. " + "Extend selection to a valid range.");
        } )());
    }

    test_bad_statements_exit_notAllExecutionFlows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(int p) {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsError(ExtractMethodRefactoringImpl.ERROR_EXITS);
        } )());
    }

    test_bad_statements_return_andAssignsVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Ambiguous return value: Selected block contains assignment(s) to " + "local variables and return statement.");
        } )());
    }

    test_bad_switchCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Selection must either cover whole switch statement " + "or parts of a single case block.");
        } )());
    }

    test_bad_tokensBetweenLastNodeAndSelectionEnd() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("The end of the selection contains characters that do not belong to a statement.");
        } )());
    }

    test_bad_tokensBetweenSelectionStartAndFirstNode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndString('); // marker','// end');
            return this._assertConditionsFatal("The beginning of the selection contains characters that do not belong to a statement.");
        } )());
    }

    test_bad_try_catchBlock_block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Selection must either cover whole try statement or " + "parts of try, catch, or finally block.");
        } )());
    }

    test_bad_try_catchBlock_complete() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Selection must either cover whole try statement or " + "parts of try, catch, or finally block.");
        } )());
    }

    test_bad_try_catchBlock_exception() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal('Cannot extract the name part of a declaration.');
        } )());
    }

    test_bad_try_finallyBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Selection must either cover whole try statement or " + "parts of try, catch, or finally block.");
        } )());
    }

    test_bad_try_tryBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Selection must either cover whole try statement or " + "parts of try, catch, or finally block.");
        } )());
    }

    test_bad_typeReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString("int");
            return this._assertConditionsFatal("Cannot extract a single type reference.");
        } )());
    }

    test_bad_variableDeclarationFragment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Cannot extract a variable declaration fragment. Select whole declaration statement.");
        } )());
    }

    test_bad_while_conditionAndBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertConditionsFatal("Operation not applicable to a while statement's expression and body.");
        } )());
    }

    test_canExtractGetter_false_closure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('(_) => true');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.canCreateGetter,false);
            expect(this.refactoring.createGetter,false);
        } )());
    }

    test_canExtractGetter_false_fieldAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringForStartEndComments();
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.canCreateGetter,false);
            expect(this.refactoring.createGetter,false);
        } )());
    }

    test_canExtractGetter_false_hasParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(int p) {
            this._createRefactoringForString('p + 1');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.canCreateGetter,false);
            expect(this.refactoring.createGetter,false);
        } )());
    }

    test_canExtractGetter_false_returnNotUsed_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('var topVar = 0;
            this._createRefactoringForString('topVar = 5');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.canCreateGetter,false);
            expect(this.refactoring.createGetter,false);
        } )());
    }

    test_canExtractGetter_false_returnNotUsed_noReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('var topVar = 0;
            this._createRefactoringForStartEndComments();
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.canCreateGetter,false);
            expect(this.refactoring.createGetter,false);
        } )());
    }

    test_canExtractGetter_true() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1 + 2');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.canCreateGetter,true);
            expect(this.refactoring.createGetter,true);
        } )());
    }

    test_checkName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
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
            await this.indexTestUnit('process(f(x)) {}
            this._createRefactoringForString('(x) => x * 2');
            return this._assertSuccessfulRefactoring('process(f(x)) {}
        } )());
    }

    test_closure_asFunction_statements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('process(f(x)) {}
            this._createRefactoringForStartEndString('(x) {','); // marker');
            return this._assertSuccessfulRefactoring('process(f(x)) {}
        } )());
    }

    test_closure_asMethod_statements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('process(f(x)) {}
            this._createRefactoringForStartEndString('(x) {','); // marker');
            return this._assertSuccessfulRefactoring('process(f(x)) {}
        } )());
    }

    test_closure_bad_referencesLocalVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('process(f(x)) {}
            this._createRefactoringForString('(x) => x * k');
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : 'Cannot extract closure as method, it references 1 external variable(s).'});
        } )());
    }

    test_closure_bad_referencesParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('process(f(x)) {}
            this._createRefactoringForString('(x) => x * k');
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : 'Cannot extract closure as method, it references 1 external variable(s).'});
        } )());
    }

    test_fromTopLevelVariableInitializerClosure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('var X = 1;
            this._createRefactoringForString('1 + X');
            return this._assertSuccessfulRefactoring('var X = 1;
        } )());
    }

    test_getExtractGetter_expression_true_binaryExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1 + 2');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.createGetter,true);
        } )());
    }

    test_getExtractGetter_expression_true_literal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('42');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.createGetter,true);
        } )());
    }

    test_getExtractGetter_expression_true_prefixedExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('!true');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.createGetter,true);
        } )());
    }

    test_getExtractGetter_expression_true_prefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('myValue.isEven');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.createGetter,true);
        } )());
    }

    test_getExtractGetter_expression_true_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1.isEven');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.createGetter,true);
        } )());
    }

    test_getExtractGetter_statements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.createGetter,false);
        } )());
    }

    test_getRefactoringName_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1 + 2');
            expect(this.refactoring.refactoringName,'Extract Function');
        } )());
    }

    test_getRefactoringName_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringForString('1 + 2');
            expect(this.refactoring.refactoringName,'Extract Method');
        } )());
    }

    test_names_singleExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class TreeItem {}
            this._createRefactoringWithSuffix('getSelectedItem()','); // marker');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.names,unorderedEquals(new core.DartList.literal('selectedItem','item','my','treeItem2')));
        } )());
    }

    test_offsets_lengths() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1 +  2');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.offsets,unorderedEquals(new core.DartList.literal(this.findOffset('1 + 2'),this.findOffset('1 +  2'))));
            expect(this.refactoring.lengths,unorderedEquals(new core.DartList.literal(5,6)));
        } )());
    }

    test_returnType_closure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('process(f(x)) {}
            this._createRefactoringForString('(x) => x * 2');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.returnType,'');
        } )());
    }

    test_returnType_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1 + 2');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.returnType,'int');
        } )());
    }

    test_returnType_mixInterfaceFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.returnType,'Object');
        } )());
    }

    test_returnType_statements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.returnType,'double');
        } )());
    }

    test_returnType_statements_nullMix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(bool p) {
            this._createRefactoringForStartEndComments();
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.returnType,'int');
        } )());
    }

    test_returnType_statements_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.returnType,'void');
        } )());
    }

    test_setExtractGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1 + 2');
            await this.assertRefactoringConditionsOK();
            expect(this.refactoring.canCreateGetter,true);
            expect(this.refactoring.createGetter,true);
            this.refactoringChange = await this.refactoring.createChange();
            this.assertTestChangeResult('main() {
        } )());
    }

    test_singleExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1 + 2');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_cascade() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('s..length');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('dynaFunction() {}
            this._createRefactoringWithSuffix('dynaFunction()','; // marker');
            return this._assertSuccessfulRefactoring('dynaFunction() {}
        } )());
    }

    test_singleExpression_hasAwait() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';
            this._createRefactoringForString('await getValue()');
            return this._assertSuccessfulRefactoring('import \'dart:async\';
        } )());
    }

    test_singleExpression_ignore_assignmentLeftHandSize() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringWithSuffix('getButton().text','); // marker');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_occurrences() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringWithSuffix('v1 + v2','; // marker');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_occurrences_disabled() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringWithSuffix('v1 + v2','; // marker');
            this.refactoring.extractAll = false;
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_occurrences_inClassOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringWithSuffix('v1 + v2','; // marker');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_singleExpression_occurrences_incompatibleTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('x.toString()');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_occurrences_inWholeUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringWithSuffix('v1 + v2','; // marker');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_parameter_functionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('typedef R Foo<S, R>(S s);
            this._createRefactoringForString('foo(s)');
            return this._assertSuccessfulRefactoring('typedef R Foo<S, R>(S s);
        } )());
    }

    test_singleExpression_returnType_importLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addLibraryReturningAsync();
            await this.indexTestUnit('import \'asyncLib.dart\';
            this._createRefactoringForString('newFuture()');
            return this._assertSuccessfulRefactoring('import \'asyncLib.dart\';
        } )());
    }

    test_singleExpression_returnTypeGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('new List<String>()');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_returnTypePrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:math\' as pref;
            this._createRefactoringForString('new pref.Random()');
            return this._assertSuccessfulRefactoring('import \'dart:math\' as pref;
        } )());
    }

    test_singleExpression_staticContext_extractFromInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringForString('1 + 2');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_singleExpression_staticContext_extractFromInstance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringWithSuffix('v1 + v2','; // marker');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_singleExpression_staticContext_extractFromStatic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringWithSuffix('v1 + v2','; // marker');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_singleExpression_staticContext_hasInInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringWithSuffix('1 + 2','); // marker');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_singleExpression_usesParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('fooA(int a1) {
            this._createRefactoringForString('a1 + a2');
            return this._assertSuccessfulRefactoring('fooA(int a1) {
        } )());
    }

    test_singleExpression_withVariables() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('v1 + v2 + v1');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_withVariables_doRename() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
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
            return this._assertRefactoringChange('main() {
        } )());
    }

    test_singleExpression_withVariables_doReorder() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
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
            return this._assertRefactoringChange('main() {
        } )());
    }

    test_singleExpression_withVariables_namedExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('process(arg: v1 + v2)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_withVariables_newType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
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
            return this._assertRefactoringChange('main() {
        } )());
    }

    test_singleExpression_withVariables_useBestType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('v1 + v2 + v1');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_statements_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_statements_changeIndentation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_statements_changeIndentation_multilineString() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_statements_definesVariable_notUsedOutside() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_statements_definesVariable_oneUsedOutside_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('myFunctionA() {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('myFunctionA() {
        } )());
    }

    test_statements_definesVariable_oneUsedOutside_declaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('myFunctionA() {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('myFunctionA() {
        } )());
    }

    test_statements_definesVariable_twoUsedOutside() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL);
        } )());
    }

    test_statements_duplicate_absolutelySame() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('myFunctionA() {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('myFunctionA() {
        } )());
    }

    test_statements_duplicate_declaresDifferentlyNamedVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('myFunctionA() {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('myFunctionA() {
        } )());
    }

    test_statements_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('dynaFunction(p) => 0;
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('dynaFunction(p) => 0;
        } )());
    }

    test_statements_endsWithBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_statements_exit_throws() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(int p) {
            this._createRefactoringForStartEndComments();
            await this.assertRefactoringConditionsOK();
        } )());
    }

    test_statements_hasAwait_dynamicReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('import \'dart:async\';
        } )());
    }

    test_statements_hasAwait_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('import \'dart:async\';
        } )());
    }

    test_statements_hasAwait_forEach() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('import \'dart:async\';
        } )());
    }

    test_statements_hasAwait_voidReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('import \'dart:async\';
        } )());
    }

    test_statements_inSwitchMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_statements_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_statements_noDuplicates() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_statements_parameters_ignoreInnerPropagatedType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(Object x) {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main(Object x) {
        } )());
    }

    test_statements_parameters_importType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addLibraryReturningAsync();
            await this.indexTestUnit('import \'asyncLib.dart\';
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('import \'asyncLib.dart\';
        } )());
    }

    test_statements_parameters_localFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addLibraryReturningAsync();
            await this.indexTestUnit('class C {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('class C {
        } )());
    }

    test_statements_parameters_noLocalVariableConflict() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('int f(int x) {
            this._createRefactoringForStartEndComments();
            await this.assertRefactoringConditionsOK();
        } )());
    }

    test_statements_return_last() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_statements_return_multiple_ifElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('num main(bool b) {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('num main(bool b) {
        } )());
    }

    test_statements_return_multiple_ifThen() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('num main(bool b) {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('num main(bool b) {
        } )());
    }

    test_statements_return_multiple_ignoreInFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('int main() {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('int main() {
        } )());
    }

    test_statements_return_multiple_interfaceFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(bool b) {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main(bool b) {
        } )());
    }

    test_statements_return_multiple_sameElementDifferentTypeArgs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(bool b) {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main(bool b) {
        } )());
    }

    test_statements_return_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_statements_twoOfThree() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForStartEndComments();
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    _addLibraryReturningAsync() : void {
        this.addSource('/asyncLib.dart','library asyncLib;
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