/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/extract_local_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_refactoring";
import * as convert from "@dart2ts/dart/convert";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ExtractLocalTest);
    });
};
export namespace ExtractLocalTest {
    export type Constructors = lib3.RefactoringTest.Constructors | 'ExtractLocalTest';
    export type Interface = Omit<ExtractLocalTest, Constructors>;
}
@DartClass
export class ExtractLocalTest extends lib3.RefactoringTest {
    refactoring : any;

    test_checkFinalConditions_sameVariable_after() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1 + 2');
            let status : any = await this.refactoring.checkAllConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "The name 'res' is already used in the scope."});
        } )());
    }

    test_checkFinalConditions_sameVariable_before() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1 + 2');
            let status : any = await this.refactoring.checkAllConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "The name 'res' is already used in the scope."});
        } )());
    }

    test_checkInitialConditions_assignmentLeftHandSize() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringWithSuffix('v',' = 1;');
            let status : any = await this.refactoring.checkAllConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : 'Cannot extract the left-hand side of an assignment.'});
        } )());
    }

    test_checkInitialConditions_namePartOfDeclaration_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringWithSuffix('main','()');
            let status : any = await this.refactoring.checkAllConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : 'Cannot extract the name part of a declaration.'});
        } )());
    }

    test_checkInitialConditions_namePartOfDeclaration_variable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringWithSuffix('vvv',' = 0;');
            let status : any = await this.refactoring.checkAllConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : 'Cannot extract the name part of a declaration.'});
        } )());
    }

    test_checkInitialConditions_noExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('abc');
            this._assertInitialConditions_fatal_selection();
        } )());
    }

    test_checkInitialConditions_notPartOfFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('int a = 1 + 2;
            this._createRefactoringForString('1 + 2');
            let status : any = await this.refactoring.checkAllConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : 'An expression inside a function must be selected ' + 'to activate this refactoring.'});
        } )());
    }

    test_checkInitialConditions_stringSelection_leadingQuote() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString("'a");
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_checkInitialConditions_stringSelection_trailingQuote() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString("c'");
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_checkInitialConditions_voidExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('print');
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : 'Cannot extract the void expression.'});
        } )());
    }

    test_checkName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1 + 2');
            expect(this.refactoring.refactoringName,'Extract Local Variable');
            this.refactoring.name = null;
            this.assertRefactoringStatus(this.refactoring.checkName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Variable name must not be null."});
            this.refactoring.name = '';
            this.assertRefactoringStatus(this.refactoring.checkName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Variable name must not be empty."});
            this.refactoring.name = 'res';
            this.assertRefactoringStatusOK(this.refactoring.checkName());
        } )());
    }

    test_checkName_conflict_withInvokedFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1 + 2');
            await this.refactoring.checkInitialConditions();
            this.refactoring.name = 'res';
            this.assertRefactoringStatus(this.refactoring.checkName(),RefactoringProblemSeverity.ERROR,{
                expectedMessage : "The name 'res' is already used in the scope."});
        } )());
    }

    test_checkName_conflict_withOtherLocal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1 + 2');
            await this.refactoring.checkInitialConditions();
            this.refactoring.name = 'res';
            this.assertRefactoringStatus(this.refactoring.checkName(),RefactoringProblemSeverity.ERROR,{
                expectedMessage : "The name 'res' is already used in the scope."});
        } )());
    }

    test_checkName_conflict_withTypeName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1 + 2');
            await this.refactoring.checkInitialConditions();
            this.refactoring.name = 'Res';
            this.assertRefactoringStatus(this.refactoring.checkName(),RefactoringProblemSeverity.ERROR,{
                expectedMessage : "The name 'Res' is already used in the scope."});
        } )());
    }

    test_completeStatementExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(p) {
            this._createRefactoringForString('p.toString()');
            return this._assertSuccessfulRefactoring('main(p) {
        } )());
    }

    test_const_argument_inConstInstanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringForString('1');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_const_inList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_const_inList_inBinaryExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_const_inList_inConditionalExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_const_inList_inParenthesis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_const_inList_inPrefixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('true');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_const_inMap_key() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_const_inMap_value() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('2');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_coveringExpressions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring(new core.DartString(this.testCode).indexOf('bb * 2'),0);
            await this.refactoring.checkInitialConditions();
            let subExpressions : core.DartList<string> = this._getCoveringExpressions();
            expect(subExpressions,new core.DartList.literal('bbb','bbb * 2','aaa + bbb * 2','aaa + bbb * 2 + 3'));
        } )());
    }

    test_coveringExpressions_inArgumentList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring(new core.DartString(this.testCode).indexOf('11 +'),0);
            await this.refactoring.checkInitialConditions();
            let subExpressions : core.DartList<string> = this._getCoveringExpressions();
            expect(subExpressions,new core.DartList.literal('111','111 + 222','foo(111 + 222)'));
        } )());
    }

    test_coveringExpressions_inInvocationOfVoidFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring(new core.DartString(this.testCode).indexOf('11 +'),0);
            await this.refactoring.checkInitialConditions();
            let subExpressions : core.DartList<string> = this._getCoveringExpressions();
            expect(subExpressions,new core.DartList.literal('111','111 + 222'));
        } )());
    }

    test_coveringExpressions_namedExpression_value() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring(new core.DartString(this.testCode).indexOf('42'),0);
            await this.refactoring.checkInitialConditions();
            let subExpressions : core.DartList<string> = this._getCoveringExpressions();
            expect(subExpressions,new core.DartList.literal('42','foo(ppp: 42)'));
        } )());
    }

    test_coveringExpressions_skip_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring(new core.DartString(this.testCode).indexOf('11 +'),0);
            await this.refactoring.checkInitialConditions();
            let subExpressions : core.DartList<string> = this._getCoveringExpressions();
            expect(subExpressions,new core.DartList.literal('111','111 + 222','foo(v = 111 + 222)'));
        } )());
    }

    test_coveringExpressions_skip_constructorName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class AAA {
            this._createRefactoring(new core.DartString(this.testCode).indexOf('AA.name();'),5);
            await this.refactoring.checkInitialConditions();
            let subExpressions : core.DartList<string> = this._getCoveringExpressions();
            expect(subExpressions,new core.DartList.literal('new AAA.name()'));
        } )());
    }

    test_coveringExpressions_skip_constructorName_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring(new core.DartString(this.testCode).indexOf('ame();'),0);
            await this.refactoring.checkInitialConditions();
            let subExpressions : core.DartList<string> = this._getCoveringExpressions();
            expect(subExpressions,new core.DartList.literal('new A.name()'));
        } )());
    }

    test_coveringExpressions_skip_constructorName_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {}
            this._createRefactoring(new core.DartString(this.testCode).indexOf('A();'),0);
            await this.refactoring.checkInitialConditions();
            let subExpressions : core.DartList<string> = this._getCoveringExpressions();
            expect(subExpressions,new core.DartList.literal('new A()'));
        } )());
    }

    test_coveringExpressions_skip_constructorName_typeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A<T> {}
            this._createRefactoring(new core.DartString(this.testCode).indexOf('ring>'),0);
            await this.refactoring.checkInitialConditions();
            let subExpressions : core.DartList<string> = this._getCoveringExpressions();
            expect(subExpressions,new core.DartList.literal('new A<String>()'));
        } )());
    }

    test_coveringExpressions_skip_namedExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring(new core.DartString(this.testCode).indexOf('pp: 42'),0);
            await this.refactoring.checkInitialConditions();
            let subExpressions : core.DartList<string> = this._getCoveringExpressions();
            expect(subExpressions,new core.DartList.literal('foo(ppp: 42)'));
        } )());
    }

    test_fragmentExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('2 + 3');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_fragmentExpression_leadingNotWhitespace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('+ 2');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_fragmentExpression_leadingPartialSelection() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('11 + 2');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_fragmentExpression_leadingWhitespace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString(' 2 + 3');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_fragmentExpression_notAssociativeOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('2 - 3');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_fragmentExpression_trailingNotWhitespace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1 + 2 +');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_fragmentExpression_trailingPartialSelection() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('2 + 33');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_fragmentExpression_trailingWhitespace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('2 + 3 ');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_guessNames_fragmentExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('222 + 333');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.names,unorderedEquals(new core.DartList.literal('i')));
        } )());
    }

    test_guessNames_singleExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class TreeItem {}
            this._createRefactoringWithSuffix('getSelectedItem()','); // marker');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.names,unorderedEquals(new core.DartList.literal('selectedItem','item','my','treeItem')));
        } )());
    }

    test_guessNames_stringPart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('Hello Bob');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.names,unorderedEquals(new core.DartList.literal('helloBob','bob')));
        } )());
    }

    test_occurrences_differentVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringWithSuffix('v + 1','); // marker');
            await this._assertSuccessfulRefactoring('main() {
            this._assertSingleLinkedEditGroup({
                length : 3,offsets : new core.DartList.literal(36,59,85),names : new core.DartList.literal('object','i')});
        } )());
    }

    test_occurrences_disableOccurrences() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('int foo() => 42;
            this._createRefactoringWithSuffix('foo()','; // marker');
            this.refactoring.extractAll = false;
            return this._assertSuccessfulRefactoring('int foo() => 42;
        } )());
    }

    test_occurrences_ignore_assignmentLeftHandSize() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringWithSuffix('v','); // marker');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_occurrences_ignore_nameOfVariableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringWithSuffix('v','); // marker');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_occurrences_singleExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('int foo() => 42;
            this._createRefactoringWithSuffix('foo()','; // marker');
            return this._assertSuccessfulRefactoring('int foo() => 42;
        } )());
    }

    test_occurrences_useDominator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('42');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_occurrences_whenComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('int foo() => 42;
            this._createRefactoringWithSuffix('foo()','; // marker');
            return this._assertSuccessfulRefactoring('int foo() => 42;
        } )());
    }

    test_occurrences_withSpace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('int foo(String s) => 42;
            this._createRefactoringWithSuffix("foo('has space')",'; // marker');
            return this._assertSuccessfulRefactoring('int foo(String s) => 42;
        } )());
    }

    test_offsets_lengths() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('int foo() => 42;
            this._createRefactoringWithSuffix('foo()','; // marker');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.offsets,unorderedEquals(new core.DartList.literal(this.findOffset('foo();'),this.findOffset('foo( );'))));
            expect(this.refactoring.lengths,unorderedEquals(new core.DartList.literal(5,6)));
        } )());
    }

    test_singleExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1 + 2');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringWithSuffix('a.foo','; // marker');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_singleExpression_hasParseError_expectedSemicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.indexTestUnit('main(p) {
            this._createRefactoringForString('p.bar');
            return this._assertSuccessfulRefactoring('main(p) {
        } )());
    }

    test_singleExpression_inExpressionBody_ofClosure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('x.y');
            await this._assertSuccessfulRefactoring('main() {
            this._assertSingleLinkedEditGroup({
                length : 3,offsets : new core.DartList.literal(31,53,59),names : new core.DartList.literal('y')});
        } )());
    }

    test_singleExpression_inExpressionBody_ofFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('foo(Point p) => p.x * p.x + p.y * p.y;
            this._createRefactoringForString('p.x');
            await this._assertSuccessfulRefactoring('foo(Point p) {
            this._assertSingleLinkedEditGroup({
                length : 3,offsets : new core.DartList.literal(21,41,47),names : new core.DartList.literal('x','i')});
        } )());
    }

    test_singleExpression_inExpressionBody_ofMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringForString('p.x');
            await this._assertSuccessfulRefactoring('class A {
            this._assertSingleLinkedEditGroup({
                length : 3,offsets : new core.DartList.literal(35,57,63),names : new core.DartList.literal('x','i')});
        } )());
    }

    test_singleExpression_inIfElseIf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(int p) {
            this._createRefactoringForString('2');
            return this._assertSuccessfulRefactoring('main(int p) {
        } )());
    }

    test_singleExpression_inMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringForString('1 + 2');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_singleExpression_leadingNotWhitespace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('+ 345');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_leadingWhitespace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1 /*abc*/');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_methodName_reference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringWithSuffix('foo','().');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_nameOfProperty_prefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(p) {
            this._createRefactoringWithSuffix('value','; // marker');
            return this._assertSuccessfulRefactoring('main(p) {
        } )());
    }

    test_singleExpression_nameOfProperty_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringWithSuffix('length','; // marker');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_partOfBinaryExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1 + 2');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_string() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('void main() {
            this._createRefactoringAtString('34"');
            return this._assertSuccessfulRefactoring('void main() {
        } )());
    }

    test_singleExpression_trailingNotWhitespace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('12 +');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_trailingWhitespace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('1 + 2 ');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_stringLiteral_part() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('cde');
            await this._assertSuccessfulRefactoring('main() {
            this._assertSingleLinkedEditGroup({
                length : 3,offsets : new core.DartList.literal(15,41),names : new core.DartList.literal('cde')});
        } )());
    }

    test_stringLiteral_whole() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString("'abc'");
            await this._assertSuccessfulRefactoring('main() {
            this._assertSingleLinkedEditGroup({
                length : 3,offsets : new core.DartList.literal(15,36),names : new core.DartList.literal('object','s')});
        } )());
    }

    test_stringLiteralPart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoringForString('$x+$y');
            await this._assertSuccessfulRefactoring('main() {
            this._assertSingleLinkedEditGroup({
                length : 3,offsets : new core.DartList.literal(41,67),names : new core.DartList.literal('xy')});
        } )());
    }

    _assertInitialConditions_fatal_selection() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : 'Expression must be selected to activate this refactoring.'});
        } )());
    }

    _assertSingleLinkedEditGroup(_namedArguments? : {length? : number,offsets? : core.DartList<number>,names? : core.DartList<string>}) : void {
        let {length,offsets,names} = Object.assign({
        }, _namedArguments );
        let positionsString : string = offsets.map((offset : any) =>  {
            return `{"file": "${this.testFile}", "offset": ${offset}}`;
        }).join(',');
        let suggestionsString : string = names.map((name : any) =>  {
            return `{"value": "${name}", "kind": "VARIABLE"}`;
        }).join(',');
        this._assertSingleLinkedEditGroupJson(`{
    }
    _assertSingleLinkedEditGroupJson(expectedJsonString : string) : void {
        let editGroups : core.DartList<any> = this.refactoringChange.linkedEditGroups;
        expect(editGroups,hasLength(1));
        expect(editGroups.first.toJson(),convert.properties.JSON.decode(expectedJsonString));
    }
    _assertSuccessfulRefactoring(expectedCode : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertRefactoringConditionsOK();
            let refactoringChange : any = await this.refactoring.createChange();
            this.refactoringChange = refactoringChange;
            this.assertTestChangeResult(expectedCode);
        } )());
    }

    _createRefactoring(offset : number,length : number) : void {
        this.refactoring = new bare.createInstance(any,null,this.testUnit,offset,length);
        this.refactoring.name = 'res';
    }
    _createRefactoringAtString(search : string) : void {
        let offset : number = this.findOffset(search);
        let length : number = 0;
        this._createRefactoring(offset,length);
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
    _getCoveringExpressions() : core.DartList<string> {
        let subExpressions : core.DartList<string> = new core.DartList.literal<string>();
        for(let i : number = 0; i < this.refactoring.coveringExpressionOffsets.length; i++){
            let offset : number = op(Op.INDEX,this.refactoring.coveringExpressionOffsets,i);
            let length : number = op(Op.INDEX,this.refactoring.coveringExpressionLengths,i);
            subExpressions.add(new core.DartString(this.testCode).substring(offset,offset + length));
        }
        return subExpressions;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExtractLocalTest() {
    }
}

export class properties {
}