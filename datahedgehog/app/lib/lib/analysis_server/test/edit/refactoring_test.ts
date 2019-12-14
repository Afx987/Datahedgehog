/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/edit/refactoring_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../mocks";
import * as lib4 from "./../analysis_abstract";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ConvertGetterMethodToMethodTest);
        defineReflectiveTests(ConvertMethodToGetterTest);
        defineReflectiveTests(ExtractLocalVariableTest);
        defineReflectiveTests(ExtractMethodTest);
        defineReflectiveTests(GetAvailableRefactoringsTest);
        defineReflectiveTests(InlineLocalTest);
        defineReflectiveTests(InlineMethodTest);
        defineReflectiveTests(MoveFileTest);
        defineReflectiveTests(RenameTest);
    });
};
export namespace GetAvailableRefactoringsTest {
    export type Constructors = lib4.AbstractAnalysisTest.Constructors | 'GetAvailableRefactoringsTest';
    export type Interface = Omit<GetAvailableRefactoringsTest, Constructors>;
}
@DartClass
export class GetAvailableRefactoringsTest extends lib4.AbstractAnalysisTest {
    kinds : core.DartList<any>;

    assertHasKind(code : string,search : string,kind : any,expected : boolean) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile(code);
            await this.waitForTasksFinished();
            await this.getRefactoringsAtString(search);
            let matcher : any = contains(kind);
            if (!expected) {
                matcher = isNot(matcher);
            }
            expect(this.kinds,matcher);
        } )());
    }

    assertHasRenameRefactoring(code : string,search : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            return this.assertHasKind(code,search,RefactoringKind.RENAME,true);
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createIndex() : any {
        return createMemoryIndex();
    }
    getRefactorings(offset : number,length : number) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let request : any = new bare.createInstance(any,null,this.testFile,offset,length).toRequest('0');
            this.serverChannel.sendRequest(request);
            let response = await this.serverChannel.waitForResponse(request);
            let result = new bare.createInstance(any,null,response);
            this.kinds = result.kinds;
        } )());
    }

    getRefactoringsAtString(search : string) : async.Future<any> {
        let offset : number = this.findOffset(search);
        return this.getRefactorings(offset,0);
    }
    getRefactoringsForString(search : string) : async.Future<any> {
        let offset : number = this.findOffset(search);
        return this.getRefactorings(offset,new core.DartString(search).length);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.createProject();
        let manager : any = new bare.createInstance(any,null);
        manager.processPlugins(new core.DartList.literal(this.server.serverPlugin));
        this.handler = new bare.createInstance(any,null,this.server);
        this.server.handlers = new core.DartList.literal(this.handler);
    }
    test_convertMethodToGetter_hasElement() : async.Future<any> {
        return this.assertHasKind('int getValue() => 42;\n','getValue',RefactoringKind.CONVERT_METHOD_TO_GETTER,true);
    }
    test_extractLocal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  var a = 1 + 2;\n}\n');
            await this.waitForTasksFinished();
            await this.getRefactoringsForString('1 + 2');
            expect(this.kinds,contains(RefactoringKind.EXTRACT_LOCAL_VARIABLE));
            expect(this.kinds,contains(RefactoringKind.EXTRACT_METHOD));
        } )());
    }

    test_rename_hasElement_class() : async.Future<any> {
        return this.assertHasRenameRefactoring('class Test {}\nmain() {\n  Test v;\n}\n','Test v');
    }
    test_rename_hasElement_constructor() : async.Future<any> {
        return this.assertHasRenameRefactoring('class A {\n  A.test() {}\n}\nmain() {\n  new A.test();\n}\n','test();');
    }
    test_rename_hasElement_function() : async.Future<any> {
        return this.assertHasRenameRefactoring('main() {\n  test();\n}\ntest() {}\n','test();');
    }
    test_rename_hasElement_importElement_directive() : async.Future<any> {
        return this.assertHasRenameRefactoring('import \'dart:math\' as math;\nmain() {\n  math.PI;\n}\n','import ');
    }
    test_rename_hasElement_importElement_prefixDecl() : async.Future<any> {
        return this.assertHasRenameRefactoring('import \'dart:math\' as math;\nmain() {\n  math.PI;\n}\n','math;');
    }
    test_rename_hasElement_importElement_prefixRef() : async.Future<any> {
        return this.assertHasRenameRefactoring('import \'dart:async\' as test;\nimport \'dart:math\' as test;\nmain() {\n  test.PI;\n}\n','test.PI;');
    }
    test_rename_hasElement_instanceGetter() : async.Future<any> {
        return this.assertHasRenameRefactoring('class A {\n  get test => 0;\n}\nmain(A a) {\n  a.test;\n}\n','test;');
    }
    test_rename_hasElement_instanceSetter() : async.Future<any> {
        return this.assertHasRenameRefactoring('class A {\n  set test(x) {}\n}\nmain(A a) {\n  a.test = 2;\n}\n','test = 2;');
    }
    test_rename_hasElement_library() : async.Future<any> {
        return this.assertHasRenameRefactoring('library my.lib;\n','library ');
    }
    test_rename_hasElement_localVariable() : async.Future<any> {
        return this.assertHasRenameRefactoring('main() {\n  int test = 0;\n  print(test);\n}\n','test = 0;');
    }
    test_rename_hasElement_method() : async.Future<any> {
        return this.assertHasRenameRefactoring('class A {\n  test() {}\n}\nmain(A a) {\n  a.test();\n}\n','test();');
    }
    test_rename_noElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  // not an element\n}\n');
            await this.waitForTasksFinished();
            await this.getRefactoringsAtString('// not an element');
            expect(this.kinds,isNot(contains(RefactoringKind.RENAME)));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GetAvailableRefactoringsTest() {
    }
}

export namespace _AbstractGetRefactoring_Test {
    export type Constructors = lib4.AbstractAnalysisTest.Constructors | '_AbstractGetRefactoring_Test';
    export type Interface = Omit<_AbstractGetRefactoring_Test, Constructors>;
}
@DartClass
export class _AbstractGetRefactoring_Test extends lib4.AbstractAnalysisTest {
    shouldWaitForFullAnalysis : boolean;

    assertResultProblemsError(problems : core.DartList<any>,message? : string) : void {
        let problem : any = problems[0];
        expect(problem.severity,RefactoringProblemSeverity.ERROR,{
            reason : problem.toString()});
        if (message != null) {
            expect(problem.message,message);
        }
    }
    assertResultProblemsFatal(problems : core.DartList<any>,message? : string) : void {
        let problem : any = problems[0];
        expect(problems,hasLength(1));
        expect(problem.severity,RefactoringProblemSeverity.FATAL,{
            reason : problem.toString()});
        if (message != null) {
            expect(problem.message,message);
        }
    }
    assertResultProblemsOK(result : any) : void {
        expect(result.initialProblems,isEmpty);
        expect(result.optionsProblems,isEmpty);
        expect(result.finalProblems,isEmpty);
    }
    assertResultProblemsWarning(problems : core.DartList<any>,message? : string) : void {
        let problem : any = problems[0];
        expect(problems,hasLength(1));
        expect(problem.severity,RefactoringProblemSeverity.WARNING,{
            reason : problem.toString()});
        if (message != null) {
            expect(problem.message,message);
        }
    }
    assertSuccessfulRefactoring(requestSender : () => async.Future<any>,expectedCode : string) : async.Future<any> {
        return this.getRefactoringResult(requestSender).then((result : any) =>  {
            this.assertResultProblemsOK(result);
            this.assertTestRefactoringResult(result,expectedCode);
        });
    }
    assertTestRefactoringResult(result : any,expectedCode : string) : void {
        let change : any = result.change;
        expect(change,isNotNull);
        for(let fileEdit of change.edits) {
            if (op(Op.EQUALS,fileEdit.file,this.testFile)) {
                let actualCode : string = SourceEdit.applySequence(this.testCode,fileEdit.edits);
                expect(actualCode,expectedCode);
                return;
            }
        }
        fail(`No SourceFileEdit for ${this.testFile} in ${change}`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createIndex() : any {
        return createMemoryIndex();
    }
    getRefactoringResult(requestSender : () => async.Future<any>) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this.shouldWaitForFullAnalysis) {
                await this.waitForTasksFinished();
            }
            let response : any = await requestSender();
            return new bare.createInstance(any,null,response);
        } )());
    }

    sendRequest(kind : any,offset : number,length : number,options : any,validateOnly? : boolean) : async.Future<any> {
        validateOnly = validateOnly || false;
        let request : any = new bare.createInstance(any,null,kind,this.testFile,offset,length,validateOnly,{
            options : options}).toRequest('0');
        return this.serverChannel.sendRequest(request);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.createProject();
        let manager : any = new bare.createInstance(any,null);
        manager.processPlugins(new core.DartList.literal(this.server.serverPlugin));
        this.handler = new bare.createInstance(any,null,this.server);
        this.server.handlers = new core.DartList.literal(this.handler);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AbstractGetRefactoring_Test() {
        this.shouldWaitForFullAnalysis = true;
    }
}

export namespace ConvertGetterMethodToMethodTest {
    export type Constructors = _AbstractGetRefactoring_Test.Constructors | 'ConvertGetterMethodToMethodTest';
    export type Interface = Omit<ConvertGetterMethodToMethodTest, Constructors>;
}
@DartClass
export class ConvertGetterMethodToMethodTest extends _AbstractGetRefactoring_Test {
    test_function() {
        this.addTestFile('int get test => 42;\nmain() {\n  var a = 1 + test;\n  var b = 2 + test;\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this._sendConvertRequest('test =>');
        },'int test() => 42;\nmain() {\n  var a = 1 + test();\n  var b = 2 + test();\n}\n');
    }
    test_init_fatalError_notExplicit() {
        this.addTestFile('int test = 42;\nmain() {\n  var v = test;\n}\n');
        return this.getRefactoringResult(() =>  {
            return this._sendConvertRequest('test;');
        }).then((result : any) =>  {
            this.assertResultProblemsFatal(result.initialProblems,'Only explicit getters can be converted to methods.');
            expect(result.change,isNull);
        });
    }
    test_method() {
        this.addTestFile('class A {\n  int get test => 1;\n}\nclass B extends A {\n  int get test => 2;\n}\nclass C extends B {\n  int get test => 3;\n}\nclass D extends A {\n  int get test => 4;\n}\nmain(A a, B b, C c, D d) {\n  var va = a.test;\n  var vb = b.test;\n  var vc = c.test;\n  var vd = d.test;\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this._sendConvertRequest('test => 2');
        },'class A {\n  int test() => 1;\n}\nclass B extends A {\n  int test() => 2;\n}\nclass C extends B {\n  int test() => 3;\n}\nclass D extends A {\n  int test() => 4;\n}\nmain(A a, B b, C c, D d) {\n  var va = a.test();\n  var vb = b.test();\n  var vc = c.test();\n  var vd = d.test();\n}\n');
    }
    _sendConvertRequest(search : string) : async.Future<any> {
        let request : any = new bare.createInstance(any,null,RefactoringKind.CONVERT_GETTER_TO_METHOD,this.testFile,this.findOffset(search),0,false).toRequest('0');
        return this.serverChannel.sendRequest(request);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConvertGetterMethodToMethodTest() {
    }
}

export namespace ConvertMethodToGetterTest {
    export type Constructors = _AbstractGetRefactoring_Test.Constructors | 'ConvertMethodToGetterTest';
    export type Interface = Omit<ConvertMethodToGetterTest, Constructors>;
}
@DartClass
export class ConvertMethodToGetterTest extends _AbstractGetRefactoring_Test {
    test_function() {
        this.addTestFile('int test() => 42;\nmain() {\n  var a = 1 + test();\n  var b = 2 + test();\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this._sendConvertRequest('test() =>');
        },'int get test => 42;\nmain() {\n  var a = 1 + test;\n  var b = 2 + test;\n}\n');
    }
    test_init_fatalError_hasParameters() {
        this.addTestFile('int test(p) => p + 1;\nmain() {\n  var v = test(2);\n}\n');
        return this.getRefactoringResult(() =>  {
            return this._sendConvertRequest('test(p)');
        }).then((result : any) =>  {
            this.assertResultProblemsFatal(result.initialProblems,'Only methods without parameters can be converted to getters.');
            expect(result.change,isNull);
        });
    }
    test_init_fatalError_notExecutableElement() {
        this.addTestFile('main() {\n  int abc = 1;\n  print(abc);\n}\n');
        return this.getRefactoringResult(() =>  {
            return this._sendConvertRequest('abc');
        }).then((result : any) =>  {
            this.assertResultProblemsFatal(result.initialProblems,'Unable to create a refactoring');
            expect(result.change,isNull);
        });
    }
    test_method() {
        this.addTestFile('class A {\n  int test() => 1;\n}\nclass B extends A {\n  int test() => 2;\n}\nclass C extends B {\n  int test() => 3;\n}\nclass D extends A {\n  int test() => 4;\n}\nmain(A a, B b, C c, D d) {\n  var va = a.test();\n  var vb = b.test();\n  var vc = c.test();\n  var vd = d.test();\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this._sendConvertRequest('test() => 2');
        },'class A {\n  int get test => 1;\n}\nclass B extends A {\n  int get test => 2;\n}\nclass C extends B {\n  int get test => 3;\n}\nclass D extends A {\n  int get test => 4;\n}\nmain(A a, B b, C c, D d) {\n  var va = a.test;\n  var vb = b.test;\n  var vc = c.test;\n  var vd = d.test;\n}\n');
    }
    _sendConvertRequest(search : string) : async.Future<any> {
        let request : any = new bare.createInstance(any,null,RefactoringKind.CONVERT_METHOD_TO_GETTER,this.testFile,this.findOffset(search),0,false).toRequest('0');
        return this.serverChannel.sendRequest(request);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConvertMethodToGetterTest() {
    }
}

export namespace ExtractLocalVariableTest {
    export type Constructors = _AbstractGetRefactoring_Test.Constructors | 'ExtractLocalVariableTest';
    export type Interface = Omit<ExtractLocalVariableTest, Constructors>;
}
@DartClass
export class ExtractLocalVariableTest extends _AbstractGetRefactoring_Test {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    sendExtractRequest(offset : number,length : number,name : string,extractAll : boolean) : async.Future<any> {
        let kind : any = RefactoringKind.EXTRACT_LOCAL_VARIABLE;
        let options : any = name != null ? new bare.createInstance(any,null,name,extractAll) : null;
        return this.sendRequest(kind,offset,length,options,false);
    }
    sendStringRequest(search : string,name : string,extractAll : boolean) : async.Future<any> {
        let offset : number = this.findOffset(search);
        let length : number = new core.DartString(search).length;
        return this.sendExtractRequest(offset,length,name,extractAll);
    }
    sendStringSuffixRequest(search : string,suffix : string,name : string,extractAll : boolean) : async.Future<any> {
        let offset : number = this.findOffset(search + suffix);
        let length : number = new core.DartString(search).length;
        return this.sendExtractRequest(offset,length,name,extractAll);
    }
    tearDown() : void {
        test_simulateRefactoringException_init = false;
        test_simulateRefactoringException_final = false;
        test_simulateRefactoringException_change = false;
        super.tearDown();
    }
    test_analysis_onlyOneFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.shouldWaitForFullAnalysis = false;
            let otherFile : string = `${this.testFolder}/other.dart`;
            this.addFile(otherFile,'foo(int myName) {}\n');
            this.addTestFile('import \'other.dart\';\nmain() {\n  foo(1 + 2);\n}\n');
            let result : any = await this.getRefactoringResult(() =>  {
                return this.sendStringRequest('1 + 2','res',true);
            });
            let feedback : any = result.feedback;
            expect(feedback.names,contains('myName'));
            let otherSource = this.server.getContextSourcePair(otherFile).source;
            let otherUnit = new bare.createInstance(any,null,otherSource,otherSource);
            expect(this.testContext.getResult(otherUnit,RESOLVED_UNIT),isNull);
        } )());
    }

    test_coveringExpressions() {
        this.addTestFile('main() {\n  var v = 111 + 222 + 333;\n}\n');
        return this.getRefactoringResult(() =>  {
            return this.sendExtractRequest(new core.DartString(this.testCode).indexOf('222 +'),0,'res',true);
        }).then((result : any) =>  {
            let feedback : any = result.feedback;
            expect(feedback.coveringExpressionOffsets,new core.DartList.literal(new core.DartString(this.testCode).indexOf('222 +'),new core.DartString(this.testCode).indexOf('111 +'),new core.DartString(this.testCode).indexOf('111 +')));
            expect(feedback.coveringExpressionLengths,new core.DartList.literal(new core.DartString('222').length,new core.DartString('111 + 222').length,new core.DartString('111 + 222 + 333').length));
        });
    }
    test_extractAll() {
        this.addTestFile('main() {\n  print(1 + 2);\n  print(1 + 2);\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendStringRequest('1 + 2','res',true);
        },'main() {\n  var res = 1 + 2;\n  print(res);\n  print(res);\n}\n');
    }
    test_extractOne() {
        this.addTestFile('main() {\n  print(1 + 2);\n  print(1 + 2); // marker\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendStringSuffixRequest('1 + 2','); // marker','res',false);
        },'main() {\n  print(1 + 2);\n  var res = 1 + 2;\n  print(res); // marker\n}\n');
    }
    test_names() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class TreeItem {}\nTreeItem getSelectedItem() => null;\nmain() {\n  var a = getSelectedItem();\n}\n');
            let result : any = await this.getRefactoringResult(() =>  {
                return this.sendStringSuffixRequest('getSelectedItem()',';',null,true);
            });
            let feedback : any = result.feedback;
            expect(feedback.names,unorderedEquals(new core.DartList.literal('treeItem','item','selectedItem')));
            expect(result.change,isNull);
        } )());
    }

    test_nameWarning() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  print(1 + 2);\n}\n');
            let result : any = await this.getRefactoringResult(() =>  {
                return this.sendStringRequest('1 + 2','Name',true);
            });
            this.assertResultProblemsWarning(result.optionsProblems,'Variable name should start with a lowercase letter.');
            this.assertTestRefactoringResult(result,'main() {\n  var Name = 1 + 2;\n  print(Name);\n}\n');
        } )());
    }

    test_offsetsLengths() {
        this.addTestFile('main() {\n  print(1 + 2);\n  print(1 +  2);\n}\n');
        return this.getRefactoringResult(() =>  {
            return this.sendStringRequest('1 + 2','res',true);
        }).then((result : any) =>  {
            let feedback : any = result.feedback;
            expect(feedback.offsets,new core.DartList.literal(this.findOffset('1 + 2'),this.findOffset('1 +  2')));
            expect(feedback.lengths,new core.DartList.literal(5,6));
        });
    }
    test_resetOnFileChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let otherFile : string = `${this.testFolder}/other.dart`;
            this.addFile(otherFile,'// other 1');
            this.addTestFile('main() {\n  foo(1 + 2);\n}\nfoo(int myName) {}\n');
            {
                let result : any = await this.getRefactoringResult(() =>  {
                    return this.sendStringRequest('1 + 2','res',true);
                });
                let feedback : any = result.feedback;
                expect(feedback.names,contains('myName'));
            }
            let initialResetCount : number = test_resetCount;
            this.addFile(otherFile,'// other 2');
            await lib3.pumpEventQueue();
            expect(test_resetCount,initialResetCount);
            this.modifyTestFile('main() {\n  foo(1 + 2);\n}\nfoo(int otherName) {}\n');
            await lib3.pumpEventQueue();
            expect(test_resetCount,initialResetCount + 1);
            {
                let result : any = await this.getRefactoringResult(() =>  {
                    return this.sendStringRequest('1 + 2','res',true);
                });
                let feedback : any = result.feedback;
                expect(feedback.names,contains('otherName'));
            }
        } )());
    }

    test_serverError_change() {
        test_simulateRefactoringException_change = true;
        this.addTestFile('main() {\n  print(1 + 2);\n}\n');
        return this.waitForTasksFinished().then((_ : any) =>  {
            return this.sendStringRequest('1 + 2','res',true).then((response : any) =>  {
                expect(response.error,isNotNull);
                expect(response.error.code,RequestErrorCode.SERVER_ERROR);
            });
        });
    }
    test_serverError_final() {
        test_simulateRefactoringException_final = true;
        this.addTestFile('main() {\n  print(1 + 2);\n}\n');
        return this.waitForTasksFinished().then((_ : any) =>  {
            return this.sendStringRequest('1 + 2','res',true).then((response : any) =>  {
                expect(response.error,isNotNull);
                expect(response.error.code,RequestErrorCode.SERVER_ERROR);
            });
        });
    }
    test_serverError_init() {
        test_simulateRefactoringException_init = true;
        this.addTestFile('main() {\n  print(1 + 2);\n}\n');
        return this.waitForTasksFinished().then((_ : any) =>  {
            return this.sendStringRequest('1 + 2','res',true).then((response : any) =>  {
                expect(response.error,isNotNull);
                expect(response.error.code,RequestErrorCode.SERVER_ERROR);
            });
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExtractLocalVariableTest() {
    }
}

export namespace ExtractMethodTest {
    export type Constructors = _AbstractGetRefactoring_Test.Constructors | 'ExtractMethodTest';
    export type Interface = Omit<ExtractMethodTest, Constructors>;
}
@DartClass
export class ExtractMethodTest extends _AbstractGetRefactoring_Test {
    offset : number;

    length : number;

    name : string;

    options : any;

    test_expression() {
        this.addTestFile('main() {\n  print(1 + 2);\n  print(1 + 2);\n}\n');
        this._setOffsetLengthForString('1 + 2');
        return this.assertSuccessfulRefactoring(this._computeChange.bind(this),'main() {\n  print(res());\n  print(res());\n}\n\nint res() => 1 + 2;\n');
    }
    test_expression_hasParameters() {
        this.addTestFile('main() {\n  int a = 1;\n  int b = 2;\n  print(a + b);\n  print(a +  b);\n}\n');
        this._setOffsetLengthForString('a + b');
        return this.assertSuccessfulRefactoring(this._computeChange.bind(this),'main() {\n  int a = 1;\n  int b = 2;\n  print(res(a, b));\n  print(res(a, b));\n}\n\nint res(int a, int b) => a + b;\n');
    }
    test_expression_updateParameters() {
        this.addTestFile('main() {\n  int a = 1;\n  int b = 2;\n  print(a + b);\n  print(a + b);\n}\n');
        this._setOffsetLengthForString('a + b');
        return this.getRefactoringResult(this._computeChange.bind(this)).then((result : any) =>  {
            let feedback : any = result.feedback;
            let parameters : core.DartList<any> = feedback.parameters;
            parameters[0].name = 'aaa';
            parameters[1].name = 'bbb';
            parameters[1].type = 'num';
            parameters.insert(0,parameters.removeLast());
            this.options.parameters = parameters;
            return this.assertSuccessfulRefactoring(this._sendExtractRequest.bind(this),'main() {\n  int a = 1;\n  int b = 2;\n  print(res(b, a));\n  print(res(b, a));\n}\n\nint res(num bbb, int aaa) => aaa + bbb;\n');
        });
    }
    test_init_fatalError_invalidStatement() {
        this.addTestFile('main(bool b) {\n// start\n  if (b) {\n    print(1);\n// end\n    print(2);\n  }\n}\n');
        this._setOffsetLengthForStartEnd();
        return this.waitForTasksFinished().then((_ : any) =>  {
            return this._sendExtractRequest();
        }).then((response : any) =>  {
            let result = new bare.createInstance(any,null,response);
            this.assertResultProblemsFatal(result.initialProblems);
            expect(result.feedback,isNull);
        });
    }
    test_names() {
        this.addTestFile('class TreeItem {}\nTreeItem getSelectedItem() => null;\nmain() {\n  var a = getSelectedItem( );\n}\n');
        this._setOffsetLengthForString('getSelectedItem( )');
        return this._computeInitialFeedback().then((feedback : any) =>  {
            expect(feedback.names,unorderedEquals(new core.DartList.literal('treeItem','item','selectedItem')));
            expect(feedback.returnType,'TreeItem');
        });
    }
    test_offsetsLengths() {
        this.addTestFile('class TreeItem {}\nTreeItem getSelectedItem() => null;\nmain() {\n  var a = 1 + 2;\n  var b = 1 +  2;\n}\n');
        this._setOffsetLengthForString('1 + 2');
        return this._computeInitialFeedback().then((feedback : any) =>  {
            expect(feedback.offsets,new core.DartList.literal(this.findOffset('1 + 2'),this.findOffset('1 +  2')));
            expect(feedback.lengths,new core.DartList.literal(5,6));
        });
    }
    test_statements() {
        this.addTestFile('main() {\n  int a = 1;\n  int b = 2;\n// start\n  print(a + b);\n// end\n  print(a + b);\n}\n');
        this._setOffsetLengthForStartEnd();
        return this.assertSuccessfulRefactoring(this._computeChange.bind(this),'main() {\n  int a = 1;\n  int b = 2;\n// start\n  res(a, b);\n// end\n  res(a, b);\n}\n\nvoid res(int a, int b) {\n  print(a + b);\n}\n');
    }
    _computeChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareOptions();
            return this._sendExtractRequest();
        } )());
    }

    _computeInitialFeedback() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.waitForTasksFinished();
            let response : any = await this._sendExtractRequest();
            let result = new bare.createInstance(any,null,response);
            return result.feedback;
        } )());
    }

    _prepareOptions() : async.Future<any> {
        return this.getRefactoringResult(() =>  {
            return this._sendExtractRequest();
        }).then((result : any) =>  {
            this.assertResultProblemsOK(result);
            let feedback : any = result.feedback;
            this.options = new bare.createInstance(any,null,feedback.returnType,false,this.name,feedback.parameters,true);
            return new async.Future.value();
        });
    }
    _sendExtractRequest() : async.Future<any> {
        let kind : any = RefactoringKind.EXTRACT_METHOD;
        return this.sendRequest(kind,this.offset,this.length,this.options,false);
    }
    _setOffsetLengthForStartEnd() : void {
        this.offset = this.findOffset('// start') + new core.DartString('// start\n').length;
        this.length = this.findOffset('// end') - this.offset;
    }
    _setOffsetLengthForString(search : string) : void {
        this.offset = this.findOffset(search);
        this.length = new core.DartString(search).length;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExtractMethodTest() {
        this.name = 'res';
    }
}

export namespace InlineLocalTest {
    export type Constructors = _AbstractGetRefactoring_Test.Constructors | 'InlineLocalTest';
    export type Interface = Omit<InlineLocalTest, Constructors>;
}
@DartClass
export class InlineLocalTest extends _AbstractGetRefactoring_Test {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    test_analysis_onlyOneFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.shouldWaitForFullAnalysis = false;
            let otherFile : string = `${this.testFolder}/other.dart`;
            this.addFile(otherFile,'foo(int p) {}\n');
            this.addTestFile('import \'other.dart\';\nmain() {\n  int res = 1 + 2;\n  foo(res);\n  foo(res);\n}\n');
            let result : any = await this.getRefactoringResult(() =>  {
                return this._sendInlineRequest('res =');
            });
            let feedback : any = result.feedback;
            expect(feedback.occurrences,2);
            let otherSource = this.server.getContextSourcePair(otherFile).source;
            let otherUnit = new bare.createInstance(any,null,otherSource,otherSource);
            expect(this.testContext.getResult(otherUnit,RESOLVED_UNIT),isNull);
        } )());
    }

    test_feedback() {
        this.addTestFile('main() {\n  int test = 42;\n  print(test);\n  print(test);\n}\n');
        return this.getRefactoringResult(() =>  {
            return this._sendInlineRequest('test =');
        }).then((result : any) =>  {
            let feedback : any = result.feedback;
            expect(feedback.name,'test');
            expect(feedback.occurrences,2);
        });
    }
    test_init_fatalError_notVariable() {
        this.addTestFile('main() {}');
        return this.getRefactoringResult(() =>  {
            return this._sendInlineRequest('main() {}');
        }).then((result : any) =>  {
            this.assertResultProblemsFatal(result.initialProblems,'Local variable declaration or reference must be selected to activate this refactoring.');
            expect(result.change,isNull);
        });
    }
    test_OK() {
        this.addTestFile('main() {\n  int test = 42;\n  int a = test + 2;\n  print(test);\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this._sendInlineRequest('test + 2');
        },'main() {\n  int a = 42 + 2;\n  print(42);\n}\n');
    }
    test_resetOnFileChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let otherFile : string = `${this.testFolder}/other.dart`;
            this.addFile(otherFile,'// other 1');
            this.addTestFile('main() {\n  int res = 1 + 2;\n  print(res);\n}\n');
            await this.getRefactoringResult(() =>  {
                return this._sendInlineRequest('res = ');
            });
            let initialResetCount : number = test_resetCount;
            this.addFile(otherFile,'// other 2');
            await lib3.pumpEventQueue();
            expect(test_resetCount,initialResetCount);
            this.modifyTestFile('main() {\n  print(1 + 2);\n}\n');
            await lib3.pumpEventQueue();
            expect(test_resetCount,initialResetCount + 1);
        } )());
    }

    _sendInlineRequest(search : string) : async.Future<any> {
        let request : any = new bare.createInstance(any,null,RefactoringKind.INLINE_LOCAL_VARIABLE,this.testFile,this.findOffset(search),0,false).toRequest('0');
        return this.serverChannel.sendRequest(request);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InlineLocalTest() {
    }
}

export namespace InlineMethodTest {
    export type Constructors = _AbstractGetRefactoring_Test.Constructors | 'InlineMethodTest';
    export type Interface = Omit<InlineMethodTest, Constructors>;
}
@DartClass
export class InlineMethodTest extends _AbstractGetRefactoring_Test {
    options : any;

    test_feedback() {
        this.addTestFile('class A {\n  int f;\n  test(int p) {\n    print(f + p);\n  }\n  main() {\n    test(1);\n  }\n}\n');
        return this.getRefactoringResult(() =>  {
            return this._sendInlineRequest('test(int p)');
        }).then((result : any) =>  {
            let feedback : any = result.feedback;
            expect(feedback.className,'A');
            expect(feedback.methodName,'test');
            expect(feedback.isDeclaration,isTrue);
        });
    }
    test_init_fatalError_noMethod() {
        this.addTestFile('// nothing to inline');
        return this.getRefactoringResult(() =>  {
            return this._sendInlineRequest('// nothing');
        }).then((result : any) =>  {
            this.assertResultProblemsFatal(result.initialProblems,'Method declaration or reference must be selected to activate this refactoring.');
            expect(result.change,isNull);
        });
    }
    test_method() {
        this.addTestFile('class A {\n  int f;\n  test(int p) {\n    print(f + p);\n  }\n  main() {\n    test(1);\n  }\n}\nmain(A a) {\n  a.test(2);\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this._sendInlineRequest('test(int p)');
        },'class A {\n  int f;\n  main() {\n    print(f + 1);\n  }\n}\nmain(A a) {\n  print(a.f + 2);\n}\n');
    }
    test_topLevelFunction() {
        this.addTestFile('test(a, b) {\n  print(a + b);\n}\nmain() {\n  test(1, 2);\n  test(10, 20);\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this._sendInlineRequest('test(a');
        },'main() {\n  print(1 + 2);\n  print(10 + 20);\n}\n');
    }
    test_topLevelFunction_oneInvocation() {
        this.addTestFile('test(a, b) {\n  print(a + b);\n}\nmain() {\n  test(1, 2);\n  test(10, 20);\n}\n');
        this.options.deleteSource = false;
        this.options.inlineAll = false;
        return this.assertSuccessfulRefactoring(() =>  {
            return this._sendInlineRequest('test(10,');
        },'test(a, b) {\n  print(a + b);\n}\nmain() {\n  test(1, 2);\n  print(10 + 20);\n}\n');
    }
    _sendInlineRequest(search : string) : async.Future<any> {
        let request : any = new bare.createInstance(any,null,RefactoringKind.INLINE_METHOD,this.testFile,this.findOffset(search),0,false,{
            options : this.options}).toRequest('0');
        return this.serverChannel.sendRequest(request);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InlineMethodTest() {
        this.options = new bare.createInstance(any,null,true,true);
    }
}

export namespace MoveFileTest {
    export type Constructors = _AbstractGetRefactoring_Test.Constructors | 'MoveFileTest';
    export type Interface = Omit<MoveFileTest, Constructors>;
}
@DartClass
export class MoveFileTest extends _AbstractGetRefactoring_Test {
    options : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    test_OK() {
        this.resourceProvider.newFile('/project/bin/lib.dart','');
        this.addTestFile('import \'dart:math\';\nimport \'lib.dart\';\n');
        this._setOptions('/project/test.dart');
        return this.assertSuccessfulRefactoring(() =>  {
            return this._sendMoveRequest();
        },'import \'dart:math\';\nimport \'bin/lib.dart\';\n');
    }
    _sendMoveRequest() : async.Future<any> {
        let request : any = new bare.createInstance(any,null,RefactoringKind.MOVE_FILE,this.testFile,0,0,false,{
            options : this.options}).toRequest('0');
        return this.serverChannel.sendRequest(request);
    }
    _setOptions(newFile : string) : void {
        this.options = new bare.createInstance(any,null,newFile);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MoveFileTest() {
    }
}

export namespace RenameTest {
    export type Constructors = _AbstractGetRefactoring_Test.Constructors | 'RenameTest';
    export type Interface = Omit<RenameTest, Constructors>;
}
@DartClass
export class RenameTest extends _AbstractGetRefactoring_Test {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    sendRenameRequest(search : string,newName : string,_namedArguments? : {id? : string,validateOnly? : boolean}) : async.Future<any> {
        let {id,validateOnly} = Object.assign({
            "id" : '0',
            "validateOnly" : false}, _namedArguments );
        let options : any = newName != null ? new bare.createInstance(any,null,newName) : null;
        let request : any = new bare.createInstance(any,null,RefactoringKind.RENAME,this.testFile,this.findOffset(search),0,validateOnly,{
            options : options}).toRequest(id);
        return this.serverChannel.sendRequest(request);
    }
    tearDown() : void {
        test_simulateRefactoringReset_afterInitialConditions = false;
        test_simulateRefactoringReset_afterFinalConditions = false;
        test_simulateRefactoringReset_afterCreateChange = false;
        super.tearDown();
    }
    test_cancelPendingRequest() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  int test = 0;\n  print(test);\n}\n');
            let futureA : async.Future<any> = this.sendRenameRequest('test =','nameA',{
                id : '1'});
            let responseB : any = await this.sendRenameRequest('test =','nameB',{
                id : '2'});
            let responseA : any = await futureA;
            expect(responseA,lib3.isResponseFailure('1',RequestErrorCode.REFACTORING_REQUEST_CANCELLED));
            expect(responseB,lib3.isResponseSuccess('2'));
        } )());
    }

    test_class() {
        this.addTestFile('class Test {\n  Test() {}\n  Test.named() {}\n}\nmain() {\n  Test v;\n  new Test();\n  new Test.named();\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest('Test {','NewName');
        },'class NewName {\n  NewName() {}\n  NewName.named() {}\n}\nmain() {\n  NewName v;\n  new NewName();\n  new NewName.named();\n}\n');
    }
    test_class_options_fatalError() {
        this.addTestFile('class Test {}\nmain() {\n  Test v;\n}\n');
        return this.getRefactoringResult(() =>  {
            return this.sendRenameRequest('Test {}','');
        }).then((result : any) =>  {
            this.assertResultProblemsFatal(result.optionsProblems,'Class name must not be empty.');
            expect(result.change,isNull);
        });
    }
    test_class_validateOnly() {
        this.addTestFile('class Test {}\nmain() {\n  Test v;\n}\n');
        return this.getRefactoringResult(() =>  {
            return this.sendRenameRequest('Test {}','NewName',{
                validateOnly : true});
        }).then((result : any) =>  {
            let feedback : any = result.feedback;
            this.assertResultProblemsOK(result);
            expect(feedback.elementKindName,'class');
            expect(feedback.oldName,'Test');
            expect(result.change,isNull);
        });
    }
    test_class_warning() {
        this.addTestFile('class Test {}\nmain() {\n  Test v;\n}\n');
        return this.getRefactoringResult(() =>  {
            return this.sendRenameRequest('Test {}','newName');
        }).then((result : any) =>  {
            this.assertResultProblemsWarning(result.optionsProblems,'Class name should start with an uppercase letter.');
            this.assertTestRefactoringResult(result,'class newName {}\nmain() {\n  newName v;\n}\n');
        }).then((_ : any) =>  {
            return this.getRefactoringResult(() =>  {
                return this.sendRenameRequest('Test {}','NewName');
            }).then((result : any) =>  {
                this.assertResultProblemsOK(result);
                this.assertTestRefactoringResult(result,'class NewName {}\nmain() {\n  NewName v;\n}\n');
            });
        });
    }
    test_classMember_field() {
        this.addTestFile('class A {\n  var test = 0;\n  A(this.test);\n  main() {\n    print(test);\n  }\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest('test = 0','newName');
        },'class A {\n  var newName = 0;\n  A(this.newName);\n  main() {\n    print(newName);\n  }\n}\n');
    }
    test_classMember_field_onFieldFormalParameter() {
        this.addTestFile('class A {\n  var test = 0;\n  A(this.test);\n  main() {\n    print(test);\n  }\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest('test);','newName');
        },'class A {\n  var newName = 0;\n  A(this.newName);\n  main() {\n    print(newName);\n  }\n}\n');
    }
    test_classMember_field_onFieldFormalParameter_named() {
        this.addTestFile('class A {\n  final int test;\n  A({this.test: 0});\n}\nmain() {\n  new A(test: 42);\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest('test: 42','newName');
        },'class A {\n  final int newName;\n  A({this.newName: 0});\n}\nmain() {\n  new A(newName: 42);\n}\n');
    }
    test_classMember_getter() {
        this.addTestFile('class A {\n  get test => 0;\n  main() {\n    print(test);\n  }\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest('test =>','newName');
        },'class A {\n  get newName => 0;\n  main() {\n    print(newName);\n  }\n}\n');
    }
    test_classMember_method() {
        this.addTestFile('class A {\n  test() {}\n  main() {\n    test();\n  }\n}\nmain(A a) {\n  a.test();\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest('test() {}','newName');
        },'class A {\n  newName() {}\n  main() {\n    newName();\n  }\n}\nmain(A a) {\n  a.newName();\n}\n');
    }
    test_classMember_method_potential() {
        this.addTestFile('class A {\n  test() {}\n}\nmain(A a, a2) {\n  a.test();\n  a2.test(); // a2\n}\n');
        return this.getRefactoringResult(() =>  {
            return this.sendRenameRequest('test() {}','newName');
        }).then((result : any) =>  {
            this.assertResultProblemsOK(result);
            let potentialIds : core.DartList<string> = result.potentialEdits;
            expect(potentialIds,hasLength(1));
            let potentialId : string = potentialIds[0];
            let change : any = result.change;
            let potentialEdit : any = this._findEditWithId(change,potentialId);
            expect(potentialEdit,isNotNull);
            expect(potentialEdit.offset,this.findOffset('test(); // a2'));
            expect(potentialEdit.length,4);
        });
    }
    test_classMember_setter() {
        this.addTestFile('class A {\n  set test(x) {}\n  main() {\n    test = 0;\n  }\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest('test = 0','newName');
        },'class A {\n  set newName(x) {}\n  main() {\n    newName = 0;\n  }\n}\n');
    }
    test_constructor_fromFactoryRedirectingConstructor_onClassName() {
        this.addTestFile('class A {\n  A() = B;\n}\nclass B {\n  B() {}\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest('B;','newName');
        },'class A {\n  A() = B.newName;\n}\nclass B {\n  B.newName() {}\n}\n');
    }
    test_constructor_fromInstanceCreation() {
        this.addTestFile('class A {\n  A.test() {}\n}\nmain() {\n  new A.test();\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest('test();','newName');
        },'class A {\n  A.newName() {}\n}\nmain() {\n  new A.newName();\n}\n');
    }
    test_constructor_fromInstanceCreation_default_onClassName() {
        this.addTestFile('class A {\n  A() {}\n}\nmain() {\n  new A();\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest('A();','newName');
        },'class A {\n  A.newName() {}\n}\nmain() {\n  new A.newName();\n}\n');
    }
    test_constructor_fromInstanceCreation_default_onNew() {
        this.addTestFile('class A {\n  A() {}\n}\nmain() {\n  new A();\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest('new A();','newName');
        },'class A {\n  A.newName() {}\n}\nmain() {\n  new A.newName();\n}\n');
    }
    test_feedback() {
        this.addTestFile('class Test {}\nmain() {\n  Test v;\n}\n');
        return this.getRefactoringResult(() =>  {
            return this.sendRenameRequest('st v;','NewName');
        }).then((result : any) =>  {
            let feedback : any = result.feedback;
            expect(feedback,isNotNull);
            expect(feedback.offset,this.findOffset('Test v;'));
            expect(feedback.length,new core.DartString('Test').length);
        });
    }
    test_function() {
        this.addTestFile('test() {}\nmain() {\n  test();\n  print(test);\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest('test() {}','newName');
        },'newName() {}\nmain() {\n  newName();\n  print(newName);\n}\n');
    }
    test_importPrefix_add() {
        this.addTestFile('import \'dart:math\';\nimport \'dart:async\';\nmain() {\n  Random r;\n  Future f;\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest("import 'dart:async';",'new_name');
        },'import \'dart:math\';\nimport \'dart:async\' as new_name;\nmain() {\n  Random r;\n  new_name.Future f;\n}\n');
    }
    test_importPrefix_remove() {
        this.addTestFile('import \'dart:math\' as test;\nimport \'dart:async\' as test;\nmain() {\n  test.Random r;\n  test.Future f;\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest("import 'dart:async' as test;",'');
        },'import \'dart:math\' as test;\nimport \'dart:async\';\nmain() {\n  test.Random r;\n  Future f;\n}\n');
    }
    test_init_fatalError_noElement() {
        this.addTestFile('// nothing to rename');
        return this.getRefactoringResult(() =>  {
            return this.sendRenameRequest('// nothing',null);
        }).then((result : any) =>  {
            this.assertResultProblemsFatal(result.initialProblems,'Unable to create a refactoring');
            expect(result.change,isNull);
        });
    }
    test_library_libraryDirective() {
        this.addTestFile('library aaa.bbb.ccc;\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest('library aaa','my.new_name');
        },'library my.new_name;\n');
    }
    test_library_libraryDirective_name() {
        this.addTestFile('library aaa.bbb.ccc;\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest('aaa','my.new_name');
        },'library my.new_name;\n');
    }
    test_library_libraryDirective_nameDot() {
        this.addTestFile('library aaa.bbb.ccc;\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest('.bbb','my.new_name');
        },'library my.new_name;\n');
    }
    test_library_partOfDirective() {
        this.addFile(`${this.testFolder}/my_lib.dart`,'library aaa.bbb.ccc;\npart \'test.dart\';\n');
        this.addTestFile('part of aaa.bbb.ccc;\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest('aaa.bb','my.new_name');
        },'part of my.new_name;\n');
    }
    test_localVariable() {
        this.addTestFile('main() {\n  int test = 0;\n  test = 1;\n  test += 2;\n  print(test);\n}\n');
        return this.assertSuccessfulRefactoring(() =>  {
            return this.sendRenameRequest('test = 1','newName');
        },'main() {\n  int newName = 0;\n  newName = 1;\n  newName += 2;\n  print(newName);\n}\n');
    }
    test_localVariable_finalCheck_shadowError() {
        this.addTestFile('main() {\n  var newName;\n  int test = 0;\n  print(test);\n}\n');
        return this.getRefactoringResult(() =>  {
            return this.sendRenameRequest('test = 0','newName');
        }).then((result : any) =>  {
            let problems : core.DartList<any> = result.finalProblems;
            expect(problems,hasLength(1));
            this.assertResultProblemsError(problems,"Duplicate local variable 'newName'.");
        });
    }
    test_reset_afterCreateChange() {
        test_simulateRefactoringReset_afterCreateChange = true;
        this.addTestFile('test() {}\nmain() {\n  test();\n}\n');
        return this.waitForTasksFinished().then((_ : any) =>  {
            return this.sendRenameRequest('test() {}','newName').then((response : any) =>  {
                this._expectRefactoringRequestCancelled(response);
            });
        });
    }
    test_reset_afterFinalConditions() {
        test_simulateRefactoringReset_afterFinalConditions = true;
        this.addTestFile('test() {}\nmain() {\n  test();\n}\n');
        return this.waitForTasksFinished().then((_ : any) =>  {
            return this.sendRenameRequest('test() {}','newName').then((response : any) =>  {
                this._expectRefactoringRequestCancelled(response);
            });
        });
    }
    test_reset_afterInitialConditions() {
        test_simulateRefactoringReset_afterInitialConditions = true;
        this.addTestFile('test() {}\nmain() {\n  test();\n}\n');
        return this.waitForTasksFinished().then((_ : any) =>  {
            return this.sendRenameRequest('test() {}','newName').then((response : any) =>  {
                this._expectRefactoringRequestCancelled(response);
            });
        });
    }
    test_resetOnAnalysis() {
        this.addTestFile('main() {\n  int initialName = 0;\n  print(initialName);\n}\n');
        return this.getRefactoringResult(() =>  {
            return this.sendRenameRequest('initialName =','newName',{
                validateOnly : true});
        }).then((result : any) =>  {
            let feedback : any = result.feedback;
            expect(feedback.oldName,'initialName');
            this.modifyTestFile('main() {\n  int otherName = 0;\n  print(otherName);\n}\n');
            return this.waitForTasksFinished().then((_ : any) =>  {
                return this.getRefactoringResult(() =>  {
                    return this.sendRenameRequest('otherName =','newName',{
                        validateOnly : true});
                }).then((result : any) =>  {
                    let feedback : any = result.feedback;
                    expect(feedback.oldName,'otherName');
                });
            });
        });
    }
    _expectRefactoringRequestCancelled(response : any) : void {
        expect(response.error,isNotNull);
        expect(response,lib3.isResponseFailure('0',RequestErrorCode.REFACTORING_REQUEST_CANCELLED));
    }
    _findEditWithId(change : any,id : string) : any {
        let potentialEdit : any;
        change.edits.forEach((fileEdit : any) =>  {
            fileEdit.edits.forEach((edit : any) =>  {
                if (op(Op.EQUALS,edit.id,id)) {
                    potentialEdit = edit;
                }
            });
        });
        return potentialEdit;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenameTest() {
    }
}

export class properties {
}
