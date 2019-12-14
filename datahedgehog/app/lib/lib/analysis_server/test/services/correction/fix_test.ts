/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/correction/fix_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../abstract_single_unit";
import * as lib4 from "./flutter_util";
import * as lib5 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(FixProcessorTest);
        defineReflectiveTests(LintFixTest);
    });
};
export namespace BaseFixProcessorTest {
    export type Constructors = lib3.AbstractSingleUnitTest.Constructors | 'BaseFixProcessorTest';
    export type Interface = Omit<BaseFixProcessorTest, Constructors>;
}
@DartClass
export class BaseFixProcessorTest extends lib3.AbstractSingleUnitTest {
    errorFilter : (error : any) => boolean;

    myPkgLibPath : string;

    flutterPkgLibPath : string;

    fix : any;

    change : any;

    resultCode : string;

    assert_undefinedFunction_create_returnType_bool(lineWithTest : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit(`main() {\n  bool b = true;\n  ${lineWithTest}\n}\n`);
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,`main() {\n  bool b = true;\n  ${lineWithTest}\n}\n\nbool test() {\n}\n`);
        } )());
    }

    assertHasFix(kind : any,expected : string,_namedArguments? : {target? : string}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {target} = Object.assign({
            }, _namedArguments );
            let error : any = await this._findErrorToFix();
            this.fix = await this._assertHasFix(kind,error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            if (target != null) {
                expect(target,fileEdits.first.file);
            }
            this.resultCode = SourceEdit.applySequence(this.testCode,op(Op.INDEX,this.change.edits,0).edits);
            expect(this.resultCode,expected);
        } )());
    }

    assertNoFix(kind : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let error : any = await this._findErrorToFix();
            let fixes : core.DartList<any> = await this._computeFixes(error);
            for(let fix of fixes) {
                if (op(Op.EQUALS,fix.kind,kind)) {
                    throw fail(`Unexpected fix ${kind} in\n${fixes.join('\n')}`);
                }
            }
        } )());
    }

    expectedPosition(search : string) : any {
        let offset : number = new core.DartString(this.resultCode).indexOf(search);
        return new bare.createInstance(any,null,this.testFile,offset);
    }
    expectedPositions(patterns : core.DartList<string>) : core.DartList<any> {
        let positions : core.DartList<any> = new core.DartList.literal<any>();
        patterns.forEach((search : string) =>  {
            positions.add(this.expectedPosition(search));
        });
        return positions;
    }
    expectedSuggestions(kind : any,values : core.DartList<string>) : core.DartList<any> {
        return values.map((value : any) =>  {
            return new bare.createInstance(any,null,value,kind);
        }).toList();
    }
    setUp() : void {
        super.setUp();
        this.verifyNoTestUnitErrors = false;
    }
    _assertHasFix(kind : any,error : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let fixes : core.DartList<any> = await this._computeFixes(error);
            for(let fix of fixes) {
                if (op(Op.EQUALS,fix.kind,kind)) {
                    return fix;
                }
            }
            throw fail(`Expected to find fix ${kind} in\n${fixes.join('\n')}`);
        } )());
    }

    _assertLinkedGroup(group : any,expectedStrings : core.DartList<string>,expectedSuggestions? : core.DartList<any>) : void {
        let expectedPositions : core.DartList<any> = this._findResultPositions(expectedStrings);
        expect(group.positions,unorderedEquals(expectedPositions));
        if (expectedSuggestions != null) {
            expect(group.suggestions,unorderedEquals(expectedSuggestions));
        }
    }
    _computeErrors() : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this.enableNewAnalysisDriver) {
                return (await this.driver.getResult(this.testFile)).errors;
            }else {
                return this.context.computeErrors(this.testSource);
            }
        } )());
    }

    _computeFixes(error : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let fixContext : any = new _DartFixContextImpl(this.provider,this.driver,new bare.createInstance(any,null,this.driver),this.testUnit,error);
            return await new bare.createInstance(any,null).internalComputeFixes(fixContext);
        } )());
    }

    _configureMyPkg(pathToCode : core.DartMap<string,string>) : void {
        pathToCode.forEach((path : any,code : any) =>  {
            this.provider.newFile(`${this.myPkgLibPath}/${path}`,code);
        });
        let myPkgFolder : any = this.provider.getResource(this.myPkgLibPath);
        let pkgResolver : any = new bare.createInstance(any,null,this.provider,new core.DartMap.literal([
            ['my_pkg',new core.DartList.literal(myPkgFolder)]]));
        let sourceFactory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.sdk),pkgResolver,this.resourceResolver));
        if (this.enableNewAnalysisDriver) {
            this.driver.configure({
                sourceFactory : sourceFactory});
        }else {
            this.context.sourceFactory = sourceFactory;
        }
        this.addSource('/tmp/other.dart',pathToCode.keys.map((path : any) =>  {
            return `import 'package:my_pkg/${path}';`;
        }).join('\n'));
    }
    _findErrorToFix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let errors : core.DartList<any> = await this._computeErrors();
            if (this.errorFilter != null) {
                errors = errors.where(this.errorFilter).toList();
            }
            expect(errors,hasLength(1));
            return errors[0];
        } )());
    }

    _findResultPositions(searchStrings : core.DartList<string>) : core.DartList<any> {
        let positions : core.DartList<any> = new core.DartList.literal<any>();
        for(let search of searchStrings) {
            let offset : number = new core.DartString(this.resultCode).indexOf(search);
            positions.add(new bare.createInstance(any,null,this.testFile,offset));
        }
        return positions;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BaseFixProcessorTest() {
        this.errorFilter = (error : any) =>  {
            return error.errorCode != HintCode.UNUSED_CATCH_CLAUSE && error.errorCode != HintCode.UNUSED_CATCH_STACK && error.errorCode != HintCode.UNUSED_ELEMENT && error.errorCode != HintCode.UNUSED_FIELD && error.errorCode != HintCode.UNUSED_LOCAL_VARIABLE;
        };
        this.myPkgLibPath = '/packages/my_pkg/lib';
        this.flutterPkgLibPath = '/packages/flutter/lib';
    }
}

export namespace _DartFixContextImpl {
    export type Constructors = '_DartFixContextImpl';
    export type Interface = Omit<_DartFixContextImpl, Constructors>;
}
@DartClass
@Implements(any)
export class _DartFixContextImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resourceProvider : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    analysisDriver : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    astProvider : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    unit : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    error : any;

    constructor(resourceProvider : any,analysisDriver : any,astProvider : any,unit : any,error : any) {
    }
    @defaultConstructor
    _DartFixContextImpl(resourceProvider : any,analysisDriver : any,astProvider : any,unit : any,error : any) {
        this.resourceProvider = resourceProvider;
        this.analysisDriver = analysisDriver;
        this.astProvider = astProvider;
        this.unit = unit;
        this.error = error;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get getTopLevelDeclarations() : any {
        return this.analysisDriver.getTopLevelNameDeclarations;
    }
}

export namespace FixProcessorTest {
    export type Constructors = BaseFixProcessorTest.Constructors | 'FixProcessorTest';
    export type Interface = Omit<FixProcessorTest, Constructors>;
}
@DartClass
export class FixProcessorTest extends BaseFixProcessorTest {
    test_addFieldFormalParameters_hasRequiredParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class Test {\n  final int a;\n  final int b;\n  final int c;\n  Test(this.a);\n}\n');
            await this.assertHasFix(DartFixKind.ADD_FIELD_FORMAL_PARAMETERS,'class Test {\n  final int a;\n  final int b;\n  final int c;\n  Test(this.a, this.b, this.c);\n}\n');
        } )());
    }

    test_addFieldFormalParameters_noParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class Test {\n  final int a;\n  final int b;\n  final int c;\n  Test();\n}\n');
            await this.assertHasFix(DartFixKind.ADD_FIELD_FORMAL_PARAMETERS,'class Test {\n  final int a;\n  final int b;\n  final int c;\n  Test(this.a, this.b, this.c);\n}\n');
        } )());
    }

    test_addFieldFormalParameters_noRequiredParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class Test {\n  final int a;\n  final int b;\n  final int c;\n  Test([this.c]);\n}\n');
            await this.assertHasFix(DartFixKind.ADD_FIELD_FORMAL_PARAMETERS,'class Test {\n  final int a;\n  final int b;\n  final int c;\n  Test(this.a, this.b, [this.c]);\n}\n');
        } )());
    }

    test_addMissingParameter_function_positional_hasNamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('test({int a}) {}\nmain() {\n  test(1);\n}\n');
            await this.assertNoFix(DartFixKind.ADD_MISSING_PARAMETER_POSITIONAL);
        } )());
    }

    test_addMissingParameter_function_positional_hasZero() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('test() {}\nmain() {\n  test(1);\n}\n');
            await this.assertHasFix(DartFixKind.ADD_MISSING_PARAMETER_POSITIONAL,'test([int i]) {}\nmain() {\n  test(1);\n}\n');
        } )());
    }

    test_addMissingParameter_function_required_hasNamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('test({int a}) {}\nmain() {\n  test(1);\n}\n');
            await this.assertHasFix(DartFixKind.ADD_MISSING_PARAMETER_REQUIRED,'test(int i, {int a}) {}\nmain() {\n  test(1);\n}\n');
        } )());
    }

    test_addMissingParameter_function_required_hasOne() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('test(int a) {}\nmain() {\n  test(1, 2.0);\n}\n');
            await this.assertHasFix(DartFixKind.ADD_MISSING_PARAMETER_REQUIRED,'test(int a, double d) {}\nmain() {\n  test(1, 2.0);\n}\n');
        } )());
    }

    test_addMissingParameter_function_required_hasZero() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('test() {}\nmain() {\n  test(1);\n}\n');
            await this.assertHasFix(DartFixKind.ADD_MISSING_PARAMETER_REQUIRED,'test(int i) {}\nmain() {\n  test(1);\n}\n');
        } )());
    }

    test_addMissingParameter_method_positional_hasOne() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  test(int a) {}\n  main() {\n    test(1, 2.0);\n  }\n}\n');
            await this.assertHasFix(DartFixKind.ADD_MISSING_PARAMETER_POSITIONAL,'class A {\n  test(int a, [double d]) {}\n  main() {\n    test(1, 2.0);\n  }\n}\n');
        } )());
    }

    test_addMissingParameter_method_required_hasOne() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  test(int a) {}\n  main() {\n    test(1, 2.0);\n  }\n}\n');
            await this.assertHasFix(DartFixKind.ADD_MISSING_PARAMETER_REQUIRED,'class A {\n  test(int a, double d) {}\n  main() {\n    test(1, 2.0);\n  }\n}\n');
        } )());
    }

    test_addMissingParameter_method_required_hasZero() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  test() {}\n  main() {\n    test(1);\n  }\n}\n');
            await this.assertHasFix(DartFixKind.ADD_MISSING_PARAMETER_REQUIRED,'class A {\n  test(int i) {}\n  main() {\n    test(1);\n  }\n}\n');
        } )());
    }

    test_addMissingRequiredArg_cons_flutter_children() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addPackageSource('flutter','src/widgets/framework.dart',lib4.properties.flutter_framework_code);
            this._addMetaPackageSource();
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';\nimport \'package:meta/meta.dart\';\n\nclass MyWidget extends Widget {\n  MyWidget({@required List<Widget> children});\n}\n\nbuild() {\n  return new MyWidget();\n}\n');
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'package:flutter/src/widgets/framework.dart\';\nimport \'package:meta/meta.dart\';\n\nclass MyWidget extends Widget {\n  MyWidget({@required List<Widget> children});\n}\n\nbuild() {\n  return new MyWidget(children: <Widget>[],);\n}\n',{
                target : '/test.dart'});
        } )());
    }

    test_addMissingRequiredArg_cons_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            this.addSource('/libA.dart','library libA;\nimport \'package:meta/meta.dart\';\n\nclass A {\n  A({@required int a}) {}\n}\n');
            await this.resolveTestUnit('import \'libA.dart\';\n\nmain() {\n  A a = new A();\n}\n');
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'libA.dart\';\n\nmain() {\n  A a = new A(a: null);\n}\n',{
                target : '/test.dart'});
        } )());
    }

    test_addMissingRequiredArg_cons_single_closure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            this.addSource('/libA.dart','library libA;\nimport \'package:meta/meta.dart\';\n\ntypedef void VoidCallback();\n\nclass A {\n  A({@required VoidCallback onPressed}) {}\n}\n');
            await this.resolveTestUnit('import \'libA.dart\';\n\nmain() {\n  A a = new A();\n}\n');
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'libA.dart\';\n\nmain() {\n  A a = new A(onPressed: () {});\n}\n',{
                target : '/test.dart'});
        } )());
    }

    test_addMissingRequiredArg_cons_single_closure_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            this.addSource('/libA.dart','library libA;\nimport \'package:meta/meta.dart\';\n\ntypedef void Callback(e);\n\nclass A {\n  A({@required Callback callback}) {}\n}\n');
            await this.resolveTestUnit('import \'libA.dart\';\n\nmain() {\n  A a = new A();\n}\n');
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'libA.dart\';\n\nmain() {\n  A a = new A(callback: (e) {});\n}\n',{
                target : '/test.dart'});
        } )());
    }

    test_addMissingRequiredArg_cons_single_closure_3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            this.addSource('/libA.dart','library libA;\nimport \'package:meta/meta.dart\';\n\ntypedef void Callback(a,b,c);\n\nclass A {\n  A({@required Callback callback}) {}\n}\n');
            await this.resolveTestUnit('import \'libA.dart\';\n\nmain() {\n  A a = new A();\n}\n');
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'libA.dart\';\n\nmain() {\n  A a = new A(callback: (a, b, c) {});\n}\n',{
                target : '/test.dart'});
        } )());
    }

    test_addMissingRequiredArg_cons_single_closure_4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            this.addSource('/libA.dart','library libA;\nimport \'package:meta/meta.dart\';\n\ntypedef int Callback(int a, String b,c);\n\nclass A {\n  A({@required Callback callback}) {}\n}\n');
            await this.resolveTestUnit('import \'libA.dart\';\n\nmain() {\n  A a = new A();\n}\n');
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'libA.dart\';\n\nmain() {\n  A a = new A(callback: (int a, String b, c) {});\n}\n',{
                target : '/test.dart'});
        } )());
    }

    test_addMissingRequiredArg_cons_single_list() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            this.addSource('/libA.dart','library libA;\nimport \'package:meta/meta.dart\';\n\nclass A {\n  A({@required List<String> names}) {}\n}\n');
            await this.resolveTestUnit('import \'libA.dart\';\n\nmain() {\n  A a = new A();\n}\n');
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'libA.dart\';\n\nmain() {\n  A a = new A(names: <String>[]);\n}\n',{
                target : '/test.dart'});
        } )());
    }

    test_addMissingRequiredArg_multiple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            await this.resolveTestUnit('import \'package:meta/meta.dart\';\n\ntest({@required int a, @required int bcd}) {}\nmain() {\n  test(a: 3);\n}\n');
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'package:meta/meta.dart\';\n\ntest({@required int a, @required int bcd}) {}\nmain() {\n  test(a: 3, bcd: null);\n}\n');
        } )());
    }

    test_addMissingRequiredArg_multiple_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            await this.resolveTestUnit('import \'package:meta/meta.dart\';\n\ntest({@required int a, @required int bcd}) {}\nmain() {\n  test();\n}\n');
            let errors : core.DartList<any> = await this._computeErrors();
            expect(errors,hasLength(2));
            let filteredErrors : core.DartList<any> = errors.where((e : any) =>  {
                return op(Op.EQUALS,e.message,"The parameter 'a' is required.");
            }).toList();
            expect(filteredErrors,hasLength(1));
            let fixes : core.DartList<any> = await this._computeFixes(filteredErrors.first);
            let filteredFixes : core.DartList<any> = fixes.where((fix : any) =>  {
                return op(Op.EQUALS,fix.change.message,"Add required argument 'a'");
            }).toList();
            expect(filteredFixes,hasLength(1));
            this.change = filteredFixes.first.change;
            this.resultCode = SourceEdit.applySequence(this.testCode,op(Op.INDEX,this.change.edits,0).edits);
            expect(this.resultCode,'import \'package:meta/meta.dart\';\n\ntest({@required int a, @required int bcd}) {}\nmain() {\n  test(a: null);\n}\n');
        } )());
    }

    test_addMissingRequiredArg_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            await this.resolveTestUnit('import \'package:meta/meta.dart\';\n\ntest({@required int abc}) {}\nmain() {\n  test();\n}\n');
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'package:meta/meta.dart\';\n\ntest({@required int abc}) {}\nmain() {\n  test(abc: null);\n}\n');
        } )());
    }

    test_addMissingRequiredArg_single_normal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            await this.resolveTestUnit('import \'package:meta/meta.dart\';\n\ntest(String x, {@required int abc}) {}\nmain() {\n  test("foo");\n}\n');
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'package:meta/meta.dart\';\n\ntest(String x, {@required int abc}) {}\nmain() {\n  test("foo", abc: null);\n}\n');
        } )());
    }

    test_addMissingRequiredArg_single_with_details() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            await this.resolveTestUnit('import \'package:meta/meta.dart\';\n\ntest({@Required("Really who doesn\'t need an abc?") int abc}) {}\nmain() {\n  test();\n}\n');
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'package:meta/meta.dart\';\n\ntest({@Required("Really who doesn\'t need an abc?") int abc}) {}\nmain() {\n  test(abc: null);\n}\n');
        } )());
    }

    test_addSync_asyncFor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\';\nvoid main(Stream<String> names) {\n  await for (String name in names) {\n    print(name);\n  }\n}\n');
            await this.assertHasFix(DartFixKind.ADD_ASYNC,'import \'dart:async\';\nFuture main(Stream<String> names) async {\n  await for (String name in names) {\n    print(name);\n  }\n}\n');
        } )());
    }

    test_addSync_BAD_nullFunctionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('var F = await;\n');
            await this.assertNoFix(DartFixKind.ADD_ASYNC);
        } )());
    }

    test_addSync_blockFunctionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('foo() {}\nmain() {\n  await foo();\n}\n');
            let errors : core.DartList<any> = await this._computeErrors();
            expect(errors,hasLength(2));
            errors.sort((a : any,b : any) =>  {
                return a.message.compareTo(b.message);
            });
            {
                let error : any = errors[0];
                expect(error.message,"Expected to find ';'.");
                let fixes : core.DartList<any> = await this._computeFixes(error);
                expect(fixes,isEmpty);
            }
            {
                let error : any = errors[1];
                expect(error.message,startsWith("Undefined name 'await' in function"));
                let fixes : core.DartList<any> = await this._computeFixes(error);
                expect(fixes,hasLength(1));
                let fix : any = fixes[0];
                expect(fix.kind,DartFixKind.ADD_ASYNC);
                let fileEdits : core.DartList<any> = fix.change.edits;
                expect(fileEdits,hasLength(1));
                this.resultCode = SourceEdit.applySequence(this.testCode,fileEdits[0].edits);
                expect(this.resultCode,'foo() {}\nmain() async {\n  await foo();\n}\n');
            }
        } )());
    }

    test_addSync_expressionFunctionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticWarningCode.UNDEFINED_IDENTIFIER_AWAIT);
            };
            await this.resolveTestUnit('foo() {}\nmain() => await foo();\n');
            await this.assertHasFix(DartFixKind.ADD_ASYNC,'foo() {}\nmain() async => await foo();\n');
        } )());
    }

    test_addSync_returnFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticWarningCode.UNDEFINED_IDENTIFIER_AWAIT);
            };
            await this.resolveTestUnit('foo() {}\nint main() {\n  await foo();\n  return 42;\n}\n');
            await this.assertHasFix(DartFixKind.ADD_ASYNC,'import \'dart:async\';\n\nfoo() {}\nFuture<int> main() async {\n  await foo();\n  return 42;\n}\n');
        } )());
    }

    test_addSync_returnFuture_alreadyFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticWarningCode.UNDEFINED_IDENTIFIER_AWAIT);
            };
            await this.resolveTestUnit('import \'dart:async\';\nfoo() {}\nFuture<int> main() {\n  await foo();\n  return 42;\n}\n');
            await this.assertHasFix(DartFixKind.ADD_ASYNC,'import \'dart:async\';\nfoo() {}\nFuture<int> main() async {\n  await foo();\n  return 42;\n}\n');
        } )());
    }

    test_addSync_returnFuture_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticWarningCode.UNDEFINED_IDENTIFIER_AWAIT);
            };
            await this.resolveTestUnit('foo() {}\ndynamic main() {\n  await foo();\n  return 42;\n}\n');
            await this.assertHasFix(DartFixKind.ADD_ASYNC,'foo() {}\ndynamic main() async {\n  await foo();\n  return 42;\n}\n');
        } )());
    }

    test_addSync_returnFuture_noType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticWarningCode.UNDEFINED_IDENTIFIER_AWAIT);
            };
            await this.resolveTestUnit('foo() {}\nmain() {\n  await foo();\n  return 42;\n}\n');
            await this.assertHasFix(DartFixKind.ADD_ASYNC,'foo() {}\nmain() async {\n  await foo();\n  return 42;\n}\n');
        } )());
    }

    test_boolean() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  boolean v;\n}\n');
            await this.assertHasFix(DartFixKind.REPLACE_BOOLEAN_WITH_BOOL,'main() {\n  bool v;\n}\n');
        } )());
    }

    test_canBeNullAfterNullAware_chain() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(x) {\n  x?.a.b.c;\n}\n');
            await this.assertHasFix(DartFixKind.REPLACE_WITH_NULL_AWARE,'main(x) {\n  x?.a?.b?.c;\n}\n');
        } )());
    }

    test_canBeNullAfterNullAware_methodInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(x) {\n  x?.a.b();\n}\n');
            await this.assertHasFix(DartFixKind.REPLACE_WITH_NULL_AWARE,'main(x) {\n  x?.a?.b();\n}\n');
        } )());
    }

    test_canBeNullAfterNullAware_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(x) {\n  x?.a().b;\n}\n');
            await this.assertHasFix(DartFixKind.REPLACE_WITH_NULL_AWARE,'main(x) {\n  x?.a()?.b;\n}\n');
        } )());
    }

    test_changeToStaticAccess_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  static foo() {}\n}\nmain(A a) {\n  a.foo();\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO_STATIC_ACCESS,'class A {\n  static foo() {}\n}\nmain(A a) {\n  A.foo();\n}\n');
        } )());
    }

    test_changeToStaticAccess_method_importType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA;\nclass A {\n  static foo() {}\n}\n');
            this.addSource('/libB.dart','library libB;\nimport \'libA.dart\';\nclass B extends A {}\n');
            await this.resolveTestUnit('import \'libB.dart\';\nmain(B b) {\n  b.foo();\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO_STATIC_ACCESS,'import \'libA.dart\';\nimport \'libB.dart\';\nmain(B b) {\n  A.foo();\n}\n');
        } )());
    }

    test_changeToStaticAccess_method_prefixLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\' as pref;\nmain(pref.Future f) {\n  f.wait([]);\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO_STATIC_ACCESS,'import \'dart:async\' as pref;\nmain(pref.Future f) {\n  pref.Future.wait([]);\n}\n');
        } )());
    }

    test_changeToStaticAccess_property() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  static get foo => 42;\n}\nmain(A a) {\n  a.foo;\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO_STATIC_ACCESS,'class A {\n  static get foo => 42;\n}\nmain(A a) {\n  A.foo;\n}\n');
        } )());
    }

    test_changeToStaticAccess_property_importType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA;\nclass A {\n  static get foo => null;\n}\n');
            this.addSource('/libB.dart','library libB;\nimport \'libA.dart\';\nclass B extends A {}\n');
            await this.resolveTestUnit('import \'libB.dart\';\nmain(B b) {\n  b.foo;\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO_STATIC_ACCESS,'import \'libA.dart\';\nimport \'libB.dart\';\nmain(B b) {\n  A.foo;\n}\n');
        } )());
    }

    test_changeTypeAnnotation_BAD_multipleVariables() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  String a, b = 42;\n}\n');
            await this.assertNoFix(DartFixKind.CHANGE_TYPE_ANNOTATION);
        } )());
    }

    test_changeTypeAnnotation_BAD_notVariableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  String v;\n  v = 42;\n}\n');
            await this.assertNoFix(DartFixKind.CHANGE_TYPE_ANNOTATION);
        } )());
    }

    test_changeTypeAnnotation_OK_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  String v = <int>[];\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TYPE_ANNOTATION,'main() {\n  List<int> v = <int>[];\n}\n');
        } )());
    }

    test_changeTypeAnnotation_OK_simple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  String v = \'abc\'.length;\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TYPE_ANNOTATION,'main() {\n  int v = \'abc\'.length;\n}\n');
        } )());
    }

    test_createClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  Test v = null;\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_CLASS,'main() {\n  Test v = null;\n}\n\nclass Test {\n}\n');
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('Test v =','Test {'));
        } )());
    }

    test_createClass_BAD_hasUnresolvedPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  prefix.Test v = null;\n}\n');
            await this.assertNoFix(DartFixKind.CREATE_CLASS);
        } )());
    }

    test_createClass_inLibraryOfPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libCode : string = 'library my.lib;\n\nclass A {}\n';
            this.addSource('/lib.dart',libCode);
            await this.resolveTestUnit('import \'lib.dart\' as lib;\n\nmain() {\n  lib.A a = null;\n  lib.Test t = null;\n}\n');
            let error : any = await this._findErrorToFix();
            this.fix = await this._assertHasFix(DartFixKind.CREATE_CLASS,error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            let fileEdit : any = op(Op.INDEX,this.change.edits,0);
            expect(fileEdit.file,'/lib.dart');
            expect(SourceEdit.applySequence(libCode,fileEdit.edits),'library my.lib;\n\nclass A {}\n\nclass Test {\n}\n');
            expect(this.change.linkedEditGroups,isEmpty);
        } )());
    }

    test_createClass_innerLocalFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('f() {\n  g() {\n    Test v = null;\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_CLASS,'f() {\n  g() {\n    Test v = null;\n  }\n}\n\nclass Test {\n}\n');
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('Test v =','Test {'));
        } )());
    }

    test_createClass_itemOfList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var a = [Test];\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_CLASS,'main() {\n  var a = [Test];\n}\n\nclass Test {\n}\n');
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('Test];','Test {'));
        } )());
    }

    test_createClass_itemOfList_inAnnotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticWarningCode.UNDEFINED_IDENTIFIER);
            };
            await this.resolveTestUnit('class MyAnnotation {\n  const MyAnnotation(a, b);\n}\n@MyAnnotation(int, const [Test])\nmain() {}\n');
            await this.assertHasFix(DartFixKind.CREATE_CLASS,'class MyAnnotation {\n  const MyAnnotation(a, b);\n}\n@MyAnnotation(int, const [Test])\nmain() {}\n\nclass Test {\n}\n');
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('Test])','Test {'));
        } )());
    }

    test_createConstructor_forFinalFields() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return error.message.contains("'a'");
            };
            await this.resolveTestUnit('class Test {\n  final int a;\n  final int b = 2;\n  final int c;\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_CONSTRUCTOR_FOR_FINAL_FIELDS,'class Test {\n  final int a;\n  final int b = 2;\n  final int c;\n\n  Test(this.a, this.c);\n}\n');
        } )());
    }

    test_createConstructor_insteadOfSyntheticDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int field;\n\n  method() {}\n}\nmain() {\n  new A(1, 2.0);\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_CONSTRUCTOR,'class A {\n  int field;\n\n  A(int i, double d);\n\n  method() {}\n}\nmain() {\n  new A(1, 2.0);\n}\n');
        } )());
    }

    test_createConstructor_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  method() {}\n}\nmain() {\n  new A.named(1, 2.0);\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_CONSTRUCTOR,'class A {\n  A.named(int i, double d);\n\n  method() {}\n}\nmain() {\n  new A.named(1, 2.0);\n}\n');
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('named(int ','named(1'));
        } )());
    }

    test_createConstructor_named_emptyClassBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {}\nmain() {\n  new A.named(1);\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_CONSTRUCTOR,'class A {\n  A.named(int i);\n}\nmain() {\n  new A.named(1);\n}\n');
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('named(int ','named(1'));
        } )());
    }

    test_createConstructorForFinalFields_inTopLevelMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  final int v;\n}\n');
            await this.assertNoFix(DartFixKind.CREATE_CONSTRUCTOR_FOR_FINAL_FIELDS);
        } )());
    }

    test_createConstructorForFinalFields_topLevelField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('final int v;\n');
            await this.assertNoFix(DartFixKind.CREATE_CONSTRUCTOR_FOR_FINAL_FIELDS);
        } )());
    }

    test_createConstructorSuperExplicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  A(bool p1, int p2, double p3, String p4, {p5});\n}\nclass B extends A {\n  B() {}\n}\n');
            await this.assertHasFix(DartFixKind.ADD_SUPER_CONSTRUCTOR_INVOCATION,'class A {\n  A(bool p1, int p2, double p3, String p4, {p5});\n}\nclass B extends A {\n  B() : super(false, 0, 0.0, \'\') {}\n}\n');
        } )());
    }

    test_createConstructorSuperExplicit_hasInitializers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  A(int p);\n}\nclass B extends A {\n  int field;\n  B() : field = 42 {}\n}\n');
            await this.assertHasFix(DartFixKind.ADD_SUPER_CONSTRUCTOR_INVOCATION,'class A {\n  A(int p);\n}\nclass B extends A {\n  int field;\n  B() : field = 42, super(0) {}\n}\n');
        } )());
    }

    test_createConstructorSuperExplicit_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  A.named(int p);\n}\nclass B extends A {\n  B() {}\n}\n');
            await this.assertHasFix(DartFixKind.ADD_SUPER_CONSTRUCTOR_INVOCATION,'class A {\n  A.named(int p);\n}\nclass B extends A {\n  B() : super.named(0) {}\n}\n');
        } )());
    }

    test_createConstructorSuperExplicit_named_private() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  A._named(int p);\n}\nclass B extends A {\n  B() {}\n}\n');
            await this.assertNoFix(DartFixKind.ADD_SUPER_CONSTRUCTOR_INVOCATION);
        } )());
    }

    test_createConstructorSuperExplicit_typeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A<T> {\n  A(T p);\n}\nclass B extends A<int> {\n  B();\n}\n');
            await this.assertHasFix(DartFixKind.ADD_SUPER_CONSTRUCTOR_INVOCATION,'class A<T> {\n  A(T p);\n}\nclass B extends A<int> {\n  B() : super(0);\n}\n');
        } )());
    }

    test_createConstructorSuperImplicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  A(p1, int p2, List<String> p3, [int p4]);\n}\nclass B extends A {\n  int existingField;\n\n  void existingMethod() {}\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_CONSTRUCTOR_SUPER,'class A {\n  A(p1, int p2, List<String> p3, [int p4]);\n}\nclass B extends A {\n  int existingField;\n\n  B(p1, int p2, List<String> p3) : super(p1, p2, p3);\n\n  void existingMethod() {}\n}\n');
        } )());
    }

    test_createConstructorSuperImplicit_fieldInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int _field;\n  A(this._field);\n}\nclass B extends A {\n  int existingField;\n\n  void existingMethod() {}\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_CONSTRUCTOR_SUPER,'class A {\n  int _field;\n  A(this._field);\n}\nclass B extends A {\n  int existingField;\n\n  B(int field) : super(field);\n\n  void existingMethod() {}\n}\n');
        } )());
    }

    test_createConstructorSuperImplicit_importType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA;\nclass A {}\n');
            this.addSource('/libB.dart','library libB;\nimport \'libA.dart\';\nclass B {\n  B(A a);\n}\n');
            await this.resolveTestUnit('import \'libB.dart\';\nclass C extends B {\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_CONSTRUCTOR_SUPER,'import \'libA.dart\';\nimport \'libB.dart\';\nclass C extends B {\n  C(A a) : super(a);\n}\n');
        } )());
    }

    test_createConstructorSuperImplicit_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  A.named(p1, int p2);\n}\nclass B extends A {\n  int existingField;\n\n  void existingMethod() {}\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_CONSTRUCTOR_SUPER,'class A {\n  A.named(p1, int p2);\n}\nclass B extends A {\n  int existingField;\n\n  B.named(p1, int p2) : super.named(p1, p2);\n\n  void existingMethod() {}\n}\n');
        } )());
    }

    test_createConstructorSuperImplicit_private() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  A._named(p);\n}\nclass B extends A {\n}\n');
            await this.assertNoFix(DartFixKind.CREATE_CONSTRUCTOR_SUPER);
        } )());
    }

    test_createConstructorSuperImplicit_typeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C<T> {\n  final T x;\n  C(this.x);\n}\nclass D extends C<int> {\n}');
            await this.assertHasFix(DartFixKind.CREATE_CONSTRUCTOR_SUPER,'class C<T> {\n  final T x;\n  C(this.x);\n}\nclass D extends C<int> {\n  D(int x) : super(x);\n}');
        } )());
    }

    test_createField_BAD_inEnum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('enum MyEnum {\n  AAA, BBB\n}\nmain() {\n  MyEnum.foo;\n}\n');
            await this.assertNoFix(DartFixKind.CREATE_FIELD);
        } )());
    }

    test_createField_BAD_inSDK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List p) {\n  p.foo = 1;\n}\n');
            await this.assertNoFix(DartFixKind.CREATE_FIELD);
        } )());
    }

    test_createField_getter_multiLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n}\nclass B {\n  A a;\n}\nclass C {\n  B b;\n}\nmain(C c) {\n  int v = c.b.a.test;\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {\n  int test;\n}\nclass B {\n  A a;\n}\nclass C {\n  B b;\n}\nmain(C c) {\n  int v = c.b.a.test;\n}\n');
        } )());
    }

    test_createField_getter_qualified_instance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n}\nmain(A a) {\n  int v = a.test;\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {\n  int test;\n}\nmain(A a) {\n  int v = a.test;\n}\n');
        } )());
    }

    test_createField_getter_qualified_instance_dynamicType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  B b;\n  void f(Object p) {\n    p == b.test;\n  }\n}\nclass B {\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {\n  B b;\n  void f(Object p) {\n    p == b.test;\n  }\n}\nclass B {\n  var test;\n}\n');
        } )());
    }

    test_createField_getter_qualified_propagatedType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  A get self => this;\n}\nmain() {\n  var a = new A();\n  int v = a.self.test;\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {\n  int test;\n\n  A get self => this;\n}\nmain() {\n  var a = new A();\n  int v = a.self.test;\n}\n');
        } )());
    }

    test_createField_getter_unqualified_instance_asInvocationArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  main() {\n    f(test);\n  }\n}\nf(String s) {}\n');
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {\n  String test;\n\n  main() {\n    f(test);\n  }\n}\nf(String s) {}\n');
        } )());
    }

    test_createField_getter_unqualified_instance_assignmentRhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  main() {\n    int v = test;\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {\n  int test;\n\n  main() {\n    int v = test;\n  }\n}\n');
        } )());
    }

    test_createField_getter_unqualified_instance_asStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  main() {\n    test;\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {\n  var test;\n\n  main() {\n    test;\n  }\n}\n');
        } )());
    }

    test_createField_hint() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n}\nmain(A a) {\n  var x = a;\n  int v = x.test;\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {\n  int test;\n}\nmain(A a) {\n  var x = a;\n  int v = x.test;\n}\n');
        } )());
    }

    test_createField_hint_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n}\nmain(A a) {\n  var x = a;\n  x.test = 0;\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {\n  int test;\n}\nmain(A a) {\n  var x = a;\n  x.test = 0;\n}\n');
        } )());
    }

    test_createField_importType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA;\nclass A {}\n');
            this.addSource('/libB.dart','library libB;\nimport \'libA.dart\';\nA getA() => null;\n');
            await this.resolveTestUnit('import \'libB.dart\';\nclass C {\n}\nmain(C c) {\n  c.test = getA();\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'import \'libA.dart\';\nimport \'libB.dart\';\nclass C {\n  A test;\n}\nmain(C c) {\n  c.test = getA();\n}\n');
        } )());
    }

    test_createField_setter_generic_BAD() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n}\nclass B<T> {\n  List<T> items;\n  main(A a) {\n    a.test = items;\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {\n  List test;\n}\nclass B<T> {\n  List<T> items;\n  main(A a) {\n    a.test = items;\n  }\n}\n');
        } )());
    }

    test_createField_setter_generic_OK_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A<T> {\n  List<T> items;\n\n  main(A a) {\n    test = items;\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A<T> {\n  List<T> items;\n\n  List<T> test;\n\n  main(A a) {\n    test = items;\n  }\n}\n');
        } )());
    }

    test_createField_setter_qualified_instance_hasField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int aaa;\n  int zzz;\n\n  existingMethod() {}\n}\nmain(A a) {\n  a.test = 5;\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {\n  int aaa;\n  int zzz;\n\n  int test;\n\n  existingMethod() {}\n}\nmain(A a) {\n  a.test = 5;\n}\n');
        } )());
    }

    test_createField_setter_qualified_instance_hasMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  existingMethod() {}\n}\nmain(A a) {\n  a.test = 5;\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {\n  int test;\n\n  existingMethod() {}\n}\nmain(A a) {\n  a.test = 5;\n}\n');
        } )());
    }

    test_createField_setter_qualified_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n}\nmain() {\n  A.test = 5;\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {\n  static int test;\n}\nmain() {\n  A.test = 5;\n}\n');
        } )());
    }

    test_createField_setter_unqualified_instance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  main() {\n    test = 5;\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {\n  int test;\n\n  main() {\n    test = 5;\n  }\n}\n');
        } )());
    }

    test_createField_setter_unqualified_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  static main() {\n    test = 5;\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {\n  static int test;\n\n  static main() {\n    test = 5;\n  }\n}\n');
        } )());
    }

    test_createFile_forImport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/my/project/bin/test.dart';
            await this.resolveTestUnit('import \'my_file.dart\';\n');
            let error : any = await this._findErrorToFix();
            this.fix = await this._assertHasFix(DartFixKind.CREATE_FILE,error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            let fileEdit : any = op(Op.INDEX,this.change.edits,0);
            expect(fileEdit.file,'/my/project/bin/my_file.dart');
            expect(fileEdit.fileStamp,-1);
            expect(fileEdit.edits,hasLength(1));
            expect(op(Op.INDEX,fileEdit.edits,0).replacement,contains('library my_file;'));
        } )());
    }

    test_createFile_forImport_BAD_inPackage_lib_justLib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.provider.newFile('/projects/my_package/pubspec.yaml','name: my_package');
            this.testFile = '/projects/my_package/test.dart';
            await this.resolveTestUnit('import \'lib\';\n');
            await this.assertNoFix(DartFixKind.CREATE_FILE);
        } )());
    }

    test_createFile_forImport_BAD_notDart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/my/project/bin/test.dart';
            await this.resolveTestUnit('import \'my_file.txt\';\n');
            await this.assertNoFix(DartFixKind.CREATE_FILE);
        } )());
    }

    test_createFile_forImport_inPackage_lib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.provider.newFile('/projects/my_package/pubspec.yaml','name: my_package');
            this.testFile = '/projects/my_package/lib/test.dart';
            this.provider.newFolder('/projects/my_package/lib');
            await this.resolveTestUnit('import \'a/bb/c_cc/my_lib.dart\';\n');
            let error : any = await this._findErrorToFix();
            this.fix = await this._assertHasFix(DartFixKind.CREATE_FILE,error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            let fileEdit : any = op(Op.INDEX,this.change.edits,0);
            expect(fileEdit.file,'/projects/my_package/lib/a/bb/c_cc/my_lib.dart');
            expect(fileEdit.fileStamp,-1);
            expect(fileEdit.edits,hasLength(1));
            expect(op(Op.INDEX,fileEdit.edits,0).replacement,contains('library my_package.a.bb.c_cc.my_lib;'));
        } )());
    }

    test_createFile_forImport_inPackage_test() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.provider.newFile('/projects/my_package/pubspec.yaml','name: my_package');
            this.testFile = '/projects/my_package/test/misc/test_all.dart';
            await this.resolveTestUnit('import \'a/bb/my_lib.dart\';\n');
            let error : any = await this._findErrorToFix();
            this.fix = await this._assertHasFix(DartFixKind.CREATE_FILE,error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            let fileEdit : any = op(Op.INDEX,this.change.edits,0);
            expect(fileEdit.file,'/projects/my_package/test/misc/a/bb/my_lib.dart');
            expect(fileEdit.fileStamp,-1);
            expect(fileEdit.edits,hasLength(1));
            expect(op(Op.INDEX,fileEdit.edits,0).replacement,contains('library my_package.test.misc.a.bb.my_lib;'));
        } )());
    }

    test_createFile_forPart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/my/project/bin/test.dart';
            await this.resolveTestUnit('library my.lib;\npart \'my_part.dart\';\n');
            let error : any = await this._findErrorToFix();
            this.fix = await this._assertHasFix(DartFixKind.CREATE_FILE,error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            let fileEdit : any = op(Op.INDEX,this.change.edits,0);
            expect(fileEdit.file,'/my/project/bin/my_part.dart');
            expect(fileEdit.fileStamp,-1);
            expect(fileEdit.edits,hasLength(1));
            expect(op(Op.INDEX,fileEdit.edits,0).replacement,contains('part of my.lib;'));
        } )());
    }

    test_createFile_forPart_inPackageLib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.provider.newFile('/my/pubspec.yaml','name: my_test\n');
            this.testFile = '/my/lib/test.dart';
            this.addTestSource('library my.lib;\npart \'my_part.dart\';\n',lib5.Uri.parse('package:my/test.dart'));
            let pkgResolver : any = new bare.createInstance(any,null,this.provider,new core.DartMap.literal([
                ['my',new core.DartList.literal<any>(this.provider.getResource('/my/lib'))]]));
            let sourceFactory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.sdk),pkgResolver,this.resourceResolver));
            if (this.enableNewAnalysisDriver) {
                this.driver.configure({
                    sourceFactory : sourceFactory});
                this.testUnit = (await this.driver.getResult(this.testFile)).unit;
            }else {
                this.context.sourceFactory = sourceFactory;
                this.testUnit = await this.resolveLibraryUnit(this.testSource);
            }
            let error : any = await this._findErrorToFix();
            this.fix = await this._assertHasFix(DartFixKind.CREATE_FILE,error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            let fileEdit : any = op(Op.INDEX,this.change.edits,0);
            expect(fileEdit.file,'/my/lib/my_part.dart');
            expect(fileEdit.fileStamp,-1);
            expect(fileEdit.edits,hasLength(1));
            expect(op(Op.INDEX,fileEdit.edits,0).replacement,contains('part of my.lib;'));
        } )());
    }

    test_createGetter_BAD_inSDK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List p) {\n  int v = p.foo;\n}\n');
            await this.assertNoFix(DartFixKind.CREATE_GETTER);
        } )());
    }

    test_createGetter_hint_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n}\nmain(A a) {\n  var x = a;\n  int v = x.test;\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_GETTER,'class A {\n  int get test => null;\n}\nmain(A a) {\n  var x = a;\n  int v = x.test;\n}\n');
        } )());
    }

    test_createGetter_location_afterLastGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int existingField;\n\n  int get existingGetter => null;\n\n  existingMethod() {}\n}\nmain(A a) {\n  int v = a.test;\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_GETTER,'class A {\n  int existingField;\n\n  int get existingGetter => null;\n\n  int get test => null;\n\n  existingMethod() {}\n}\nmain(A a) {\n  int v = a.test;\n}\n');
        } )());
    }

    test_createGetter_multiLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n}\nclass B {\n  A a;\n}\nclass C {\n  B b;\n}\nmain(C c) {\n  int v = c.b.a.test;\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_GETTER,'class A {\n  int get test => null;\n}\nclass B {\n  A a;\n}\nclass C {\n  B b;\n}\nmain(C c) {\n  int v = c.b.a.test;\n}\n');
        } )());
    }

    test_createGetter_qualified_instance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n}\nmain(A a) {\n  int v = a.test;\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_GETTER,'class A {\n  int get test => null;\n}\nmain(A a) {\n  int v = a.test;\n}\n');
        } )());
    }

    test_createGetter_qualified_instance_dynamicType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  B b;\n  void f(Object p) {\n    p == b.test;\n  }\n}\nclass B {\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_GETTER,'class A {\n  B b;\n  void f(Object p) {\n    p == b.test;\n  }\n}\nclass B {\n  get test => null;\n}\n');
        } )());
    }

    test_createGetter_qualified_propagatedType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  A get self => this;\n}\nmain() {\n  var a = new A();\n  int v = a.self.test;\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_GETTER,'class A {\n  A get self => this;\n\n  int get test => null;\n}\nmain() {\n  var a = new A();\n  int v = a.self.test;\n}\n');
        } )());
    }

    test_createGetter_setterContext() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n}\nmain(A a) {\n  a.test = 42;\n}\n');
            await this.assertNoFix(DartFixKind.CREATE_GETTER);
        } )());
    }

    test_createGetter_unqualified_instance_asInvocationArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  main() {\n    f(test);\n  }\n}\nf(String s) {}\n');
            await this.assertHasFix(DartFixKind.CREATE_GETTER,'class A {\n  String get test => null;\n\n  main() {\n    f(test);\n  }\n}\nf(String s) {}\n');
        } )());
    }

    test_createGetter_unqualified_instance_assignmentLhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  main() {\n    test = 42;\n  }\n}\n');
            await this.assertNoFix(DartFixKind.CREATE_GETTER);
        } )());
    }

    test_createGetter_unqualified_instance_assignmentRhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  main() {\n    int v = test;\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_GETTER,'class A {\n  int get test => null;\n\n  main() {\n    int v = test;\n  }\n}\n');
        } )());
    }

    test_createGetter_unqualified_instance_asStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  main() {\n    test;\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_GETTER,'class A {\n  get test => null;\n\n  main() {\n    test;\n  }\n}\n');
        } )());
    }

    test_createLocalVariable_functionType_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('typedef MY_FUNCTION(int p);\nfoo(MY_FUNCTION f) {}\nmain() {\n  foo(bar);\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_LOCAL_VARIABLE,'typedef MY_FUNCTION(int p);\nfoo(MY_FUNCTION f) {}\nmain() {\n  MY_FUNCTION bar;\n  foo(bar);\n}\n');
        } )());
    }

    test_createLocalVariable_functionType_synthetic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('foo(f(int p)) {}\nmain() {\n  foo(bar);\n}\n');
            await this.assertNoFix(DartFixKind.CREATE_LOCAL_VARIABLE);
        } )());
    }

    test_createLocalVariable_read_typeAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  int a = test;\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_LOCAL_VARIABLE,'main() {\n  int test;\n  int a = test;\n}\n');
        } )());
    }

    test_createLocalVariable_read_typeCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (!test) {\n    print(42);\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_LOCAL_VARIABLE,'main() {\n  bool test;\n  if (!test) {\n    print(42);\n  }\n}\n');
        } )());
    }

    test_createLocalVariable_read_typeInvocationArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  f(test);\n}\nf(String p) {}\n');
            await this.assertHasFix(DartFixKind.CREATE_LOCAL_VARIABLE,'main() {\n  String test;\n  f(test);\n}\nf(String p) {}\n');
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('String test;'));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,1),new core.DartList.literal('test;','test);'));
        } )());
    }

    test_createLocalVariable_read_typeInvocationTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  test.add(\'hello\');\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_LOCAL_VARIABLE,'main() {\n  var test;\n  test.add(\'hello\');\n}\n');
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('test;','test.add('));
        } )());
    }

    test_createLocalVariable_write_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  test = 42;\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_LOCAL_VARIABLE,'main() {\n  var test = 42;\n}\n');
        } )());
    }

    test_createLocalVariable_write_assignment_compound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  test += 42;\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_LOCAL_VARIABLE,'main() {\n  int test;\n  test += 42;\n}\n');
        } )());
    }

    test_createMissingMethodCall() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C implements Function {\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_MISSING_METHOD_CALL,'class C implements Function {\n  call() {\n    // TODO: implement call\n  }\n}\n');
        } )());
    }

    test_createMissingOverrides_field_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  var f;\n}\n\nclass B implements A {\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'class A {\n  var f;\n}\n\nclass B implements A {\n  @override\n  var f;\n}\n');
        } )());
    }

    test_createMissingOverrides_functionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('typedef int Binary(int left, int right);\n\nabstract class Emulator {\n  void performBinary(Binary binary);\n}\n\nclass MyEmulator extends Emulator {\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'typedef int Binary(int left, int right);\n\nabstract class Emulator {\n  void performBinary(Binary binary);\n}\n\nclass MyEmulator extends Emulator {\n  @override\n  void performBinary(Binary binary) {\n    // TODO: implement performBinary\n  }\n}\n');
        } )());
    }

    test_createMissingOverrides_functionTypedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class A {\n  forEach(int f(double p1, String p2));\n}\n\nclass B extends A {\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'abstract class A {\n  forEach(int f(double p1, String p2));\n}\n\nclass B extends A {\n  @override\n  forEach(int f(double p1, String p2)) {\n    // TODO: implement forEach\n  }\n}\n');
        } )());
    }

    test_createMissingOverrides_generics_typeArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class Iterator<T> {\n}\n\nabstract class IterableMixin<T> {\n  Iterator<T> get iterator;\n}\n\nclass Test extends IterableMixin<int> {\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'class Iterator<T> {\n}\n\nabstract class IterableMixin<T> {\n  Iterator<T> get iterator;\n}\n\nclass Test extends IterableMixin<int> {\n  // TODO: implement iterator\n  @override\n  Iterator<int> get iterator => null;\n}\n');
        } )());
    }

    test_createMissingOverrides_generics_typeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class ItemProvider<T> {\n  List<T> getItems();\n}\n\nclass Test<V> extends ItemProvider<V> {\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'abstract class ItemProvider<T> {\n  List<T> getItems();\n}\n\nclass Test<V> extends ItemProvider<V> {\n  @override\n  List<V> getItems() {\n    // TODO: implement getItems\n  }\n}\n');
        } )());
    }

    test_createMissingOverrides_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class A {\n  get g1;\n  int get g2;\n}\n\nclass B extends A {\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'abstract class A {\n  get g1;\n  int get g2;\n}\n\nclass B extends A {\n  // TODO: implement g1\n  @override\n  get g1 => null;\n\n  // TODO: implement g2\n  @override\n  int get g2 => null;\n}\n');
        } )());
    }

    test_createMissingOverrides_importPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\' as aaa;\nabstract class A {\n  Map<aaa.Future, List<aaa.Future>> g(aaa.Future p);\n}\n\nclass B extends A {\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'import \'dart:async\' as aaa;\nabstract class A {\n  Map<aaa.Future, List<aaa.Future>> g(aaa.Future p);\n}\n\nclass B extends A {\n  @override\n  Map<aaa.Future, List<aaa.Future>> g(aaa.Future p) {\n    // TODO: implement g\n  }\n}\n');
        } )());
    }

    test_createMissingOverrides_mergeToField_getterSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int ma;\n  void mb() {}\n  double mc;\n}\n\nclass B implements A {\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'class A {\n  int ma;\n  void mb() {}\n  double mc;\n}\n\nclass B implements A {\n  @override\n  int ma;\n\n  @override\n  double mc;\n\n  @override\n  void mb() {\n    // TODO: implement mb\n  }\n}\n');
        } )());
    }

    test_createMissingOverrides_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class A {\n  m1();\n  int m2();\n  String m3(int p1, double p2, Map<int, List<String>> p3);\n  String m4(p1, p2);\n  String m5(p1, [int p2 = 2, int p3, p4 = 4]);\n  String m6(p1, {int p2: 2, int p3, p4: 4});\n}\n\nclass B extends A {\n}\n');
            let expectedCode : string = 'abstract class A {\n  m1();\n  int m2();\n  String m3(int p1, double p2, Map<int, List<String>> p3);\n  String m4(p1, p2);\n  String m5(p1, [int p2 = 2, int p3, p4 = 4]);\n  String m6(p1, {int p2: 2, int p3, p4: 4});\n}\n\nclass B extends A {\n  @override\n  m1() {\n    // TODO: implement m1\n  }\n\n  @override\n  int m2() {\n    // TODO: implement m2\n  }\n\n  @override\n  String m3(int p1, double p2, Map<int, List<String>> p3) {\n    // TODO: implement m3\n  }\n\n  @override\n  String m4(p1, p2) {\n    // TODO: implement m4\n  }\n\n  @override\n  String m5(p1, [int p2 = 2, int p3, p4 = 4]) {\n    // TODO: implement m5\n  }\n\n  @override\n  String m6(p1, {int p2: 2, int p3, p4: 4}) {\n    // TODO: implement m6\n  }\n}\n';
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,expectedCode);
            {
                let endPosition : any = this.change.selection;
                expect(endPosition,isNotNull);
                expect(endPosition.file,this.testFile);
                let endOffset : number = endPosition.offset;
                let endString : string = new core.DartString(expectedCode).substring(endOffset,endOffset + 25);
                expect(endString,contains('m1'));
                expect(endString,isNot(contains('m2')));
                expect(endString,isNot(contains('m3')));
                expect(endString,isNot(contains('m4')));
                expect(endString,isNot(contains('m5')));
                expect(endString,isNot(contains('m6')));
            }
        } )());
    }

    test_createMissingOverrides_method_emptyClassBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class A {\n  void foo();\n}\n\nclass B extends A {}\n');
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'abstract class A {\n  void foo();\n}\n\nclass B extends A {\n  @override\n  void foo() {\n    // TODO: implement foo\n  }\n}\n');
        } )());
    }

    test_createMissingOverrides_method_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C<T> {}\nclass V<E> {}\n\nabstract class A {\n  E1 foo<E1, E2 extends C<int>>(V<E2> v);\n}\n\nclass B implements A {\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'class C<T> {}\nclass V<E> {}\n\nabstract class A {\n  E1 foo<E1, E2 extends C<int>>(V<E2> v);\n}\n\nclass B implements A {\n  @override\n  E1 foo<E1, E2 extends C<int>>(V<E2> v) {\n    // TODO: implement foo\n  }\n}\n');
        } )());
    }

    test_createMissingOverrides_operator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class A {\n  int operator [](int index);\n  void operator []=(int index, String value);\n}\n\nclass B extends A {\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'abstract class A {\n  int operator [](int index);\n  void operator []=(int index, String value);\n}\n\nclass B extends A {\n  @override\n  int operator [](int index) {\n    // TODO: implement []\n  }\n\n  @override\n  void operator []=(int index, String value) {\n    // TODO: implement []=\n  }\n}\n');
        } )());
    }

    test_createMissingOverrides_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class A {\n  set s1(x);\n  set s2(int x);\n  void set s3(String x);\n}\n\nclass B extends A {\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'abstract class A {\n  set s1(x);\n  set s2(int x);\n  void set s3(String x);\n}\n\nclass B extends A {\n  @override\n  set s1(x) {\n    // TODO: implement s1\n  }\n\n  @override\n  set s2(int x) {\n    // TODO: implement s2\n  }\n\n  @override\n  set s3(String x) {\n    // TODO: implement s3\n  }\n}\n');
        } )());
    }

    test_createNoSuchMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class A {\n  m1();\n  int m2();\n}\n\nclass B extends A {\n  existing() {}\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_NO_SUCH_METHOD,'abstract class A {\n  m1();\n  int m2();\n}\n\nclass B extends A {\n  existing() {}\n\n  noSuchMethod(Invocation invocation) => super.noSuchMethod(invocation);\n}\n');
        } )());
    }

    test_creationFunction_forFunctionType_cascadeSecond() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  B ma() => null;\n}\nclass B {\n  useFunction(int g(double a, String b)) {}\n}\n\nmain() {\n  A a = new A();\n  a..ma().useFunction(test);\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'class A {\n  B ma() => null;\n}\nclass B {\n  useFunction(int g(double a, String b)) {}\n}\n\nmain() {\n  A a = new A();\n  a..ma().useFunction(test);\n}\n\nint test(double a, String b) {\n}\n');
        } )());
    }

    test_creationFunction_forFunctionType_coreFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  useFunction(g: test);\n}\nuseFunction({Function g}) {}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {\n  useFunction(g: test);\n}\nuseFunction({Function g}) {}\n\ntest() {\n}\n');
        } )());
    }

    test_creationFunction_forFunctionType_dynamicArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  useFunction(test);\n}\nuseFunction(int g(a, b)) {}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {\n  useFunction(test);\n}\nuseFunction(int g(a, b)) {}\n\nint test(a, b) {\n}\n');
        } )());
    }

    test_creationFunction_forFunctionType_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  useFunction(test);\n}\nuseFunction(int g(double a, String b)) {}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {\n  useFunction(test);\n}\nuseFunction(int g(double a, String b)) {}\n\nint test(double a, String b) {\n}\n');
        } )());
    }

    test_creationFunction_forFunctionType_function_namedArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  useFunction(g: test);\n}\nuseFunction({int g(double a, String b)}) {}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {\n  useFunction(g: test);\n}\nuseFunction({int g(double a, String b)}) {}\n\nint test(double a, String b) {\n}\n');
        } )());
    }

    test_creationFunction_forFunctionType_importType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA;\nclass A {}\n');
            this.addSource('/libB.dart','library libB;\nimport \'libA.dart\';\nuseFunction(int g(A a)) {}\n');
            await this.resolveTestUnit('import \'libB.dart\';\nmain() {\n  useFunction(test);\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'import \'libA.dart\';\nimport \'libB.dart\';\nmain() {\n  useFunction(test);\n}\n\nint test(A a) {\n}\n');
        } )());
    }

    test_creationFunction_forFunctionType_method_enclosingClass_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  static foo() {\n    useFunction(test);\n  }\n}\nuseFunction(int g(double a, String b)) {}\n');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {\n  static foo() {\n    useFunction(test);\n  }\n\n  static int test(double a, String b) {\n  }\n}\nuseFunction(int g(double a, String b)) {}\n');
        } )());
    }

    test_creationFunction_forFunctionType_method_enclosingClass_static2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  var f;\n  A() : f = useFunction(test);\n}\nuseFunction(int g(double a, String b)) {}\n');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {\n  var f;\n  A() : f = useFunction(test);\n\n  static int test(double a, String b) {\n  }\n}\nuseFunction(int g(double a, String b)) {}\n');
        } )());
    }

    test_creationFunction_forFunctionType_method_targetClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(A a) {\n  useFunction(a.test);\n}\nclass A {\n}\nuseFunction(int g(double a, String b)) {}\n');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'main(A a) {\n  useFunction(a.test);\n}\nclass A {\n  int test(double a, String b) {\n  }\n}\nuseFunction(int g(double a, String b)) {}\n');
        } )());
    }

    test_creationFunction_forFunctionType_method_targetClass_hasOtherMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(A a) {\n  useFunction(a.test);\n}\nclass A {\n  m() {}\n}\nuseFunction(int g(double a, String b)) {}\n');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'main(A a) {\n  useFunction(a.test);\n}\nclass A {\n  m() {}\n\n  int test(double a, String b) {\n  }\n}\nuseFunction(int g(double a, String b)) {}\n');
        } )());
    }

    test_creationFunction_forFunctionType_notFunctionType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(A a) {\n  useFunction(a.test);\n}\ntypedef A();\nuseFunction(g) {}\n');
            await this.assertNoFix(DartFixKind.CREATE_METHOD);
            await this.assertNoFix(DartFixKind.CREATE_FUNCTION);
        } )());
    }

    test_creationFunction_forFunctionType_unknownTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(A a) {\n  useFunction(a.test);\n}\nclass A {\n}\nuseFunction(g) {}\n');
            await this.assertNoFix(DartFixKind.CREATE_METHOD);
        } )());
    }

    test_expectedToken_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  print(0)\n}\n');
            await this.assertHasFix(DartFixKind.INSERT_SEMICOLON,'main() {\n  print(0);\n}\n');
        } )());
    }

    test_illegalAsyncReturnType_adjacentNodes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE);
            };
            await this.resolveTestUnit('import \'dart:async\';\nvar v;int main() async => 0;\n');
            await this.assertHasFix(DartFixKind.REPLACE_RETURN_TYPE_FUTURE,'import \'dart:async\';\nvar v;Future<int> main() async => 0;\n');
        } )());
    }

    test_illegalAsyncReturnType_asyncLibrary_import() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE);
            };
            await this.resolveTestUnit('library main;\nint main() async {\n}\n');
            await this.assertHasFix(DartFixKind.REPLACE_RETURN_TYPE_FUTURE,'library main;\n\nimport \'dart:async\';\nFuture<int> main() async {\n}\n');
        } )());
    }

    test_illegalAsyncReturnType_asyncLibrary_usePrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE);
            };
            await this.resolveTestUnit('import \'dart:async\' as al;\nint main() async {\n}\n');
            await this.assertHasFix(DartFixKind.REPLACE_RETURN_TYPE_FUTURE,'import \'dart:async\' as al;\nal.Future<int> main() async {\n}\n');
        } )());
    }

    test_illegalAsyncReturnType_complexTypeName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE);
            };
            await this.resolveTestUnit('import \'dart:async\';\nList<int> main() async {\n}\n');
            await this.assertHasFix(DartFixKind.REPLACE_RETURN_TYPE_FUTURE,'import \'dart:async\';\nFuture<List<int>> main() async {\n}\n');
        } )());
    }

    test_illegalAsyncReturnType_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE);
            };
            await this.resolveTestUnit('import \'dart:async\';\nvoid main() async {\n}\n');
            await this.assertHasFix(DartFixKind.REPLACE_RETURN_TYPE_FUTURE,'import \'dart:async\';\nFuture main() async {\n}\n');
        } )());
    }

    test_importLibraryPackage_preferDirectOverExport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureMyPkg(new core.DartMap.literal([
                ['b.dart','class Test {}'],
                ['a.dart',"export 'b.dart';"]]));
            await this.resolveTestUnit('main() {\n  Test test = null;\n}\n');
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'package:my_pkg/b.dart\';\n\nmain() {\n  Test test = null;\n}\n');
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT2,'import \'package:my_pkg/a.dart\';\n\nmain() {\n  Test test = null;\n}\n');
        } )());
    }

    test_importLibraryPackage_preferDirectOverExport_src() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.myPkgLibPath = '/my/src/packages/my_pkg/lib';
            this._configureMyPkg(new core.DartMap.literal([
                ['b.dart','class Test {}'],
                ['a.dart',"export 'b.dart';"]]));
            await this.resolveTestUnit('main() {\n  Test test = null;\n}\n');
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'package:my_pkg/b.dart\';\n\nmain() {\n  Test test = null;\n}\n');
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT2,'import \'package:my_pkg/a.dart\';\n\nmain() {\n  Test test = null;\n}\n');
        } )());
    }

    test_importLibraryPackage_preferPublicOverPrivate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureMyPkg(new core.DartMap.literal([
                ['src/a.dart','class Test {}'],
                ['b.dart',"export 'src/a.dart';"]]));
            await this.resolveTestUnit('main() {\n  Test test = null;\n}\n');
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT2,'import \'package:my_pkg/b.dart\';\n\nmain() {\n  Test test = null;\n}\n');
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT3,'import \'package:my_pkg/src/a.dart\';\n\nmain() {\n  Test test = null;\n}\n');
        } )());
    }

    test_importLibraryProject_BAD_notInLib_BUILD() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/aaa/bin/test.dart';
            this.provider.newFile('/aaa/BUILD','');
            this.provider.newFile('/bbb/BUILD','');
            this.addSource('/bbb/test/lib.dart','class Test {}');
            await this.resolveTestUnit('main() {\n  Test t;\n}\n');
            this.performAllAnalysisTasks();
            await this.assertNoFix(DartFixKind.IMPORT_LIBRARY_PROJECT1);
        } )());
    }

    test_importLibraryProject_BAD_notInLib_pubspec() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/aaa/bin/test.dart';
            this.provider.newFile('/aaa/pubspec.yaml','name: aaa');
            this.provider.newFile('/bbb/pubspec.yaml','name: bbb');
            this.addSource('/bbb/test/lib.dart','class Test {}');
            await this.resolveTestUnit('main() {\n  Test t;\n}\n');
            this.performAllAnalysisTasks();
            await this.assertNoFix(DartFixKind.IMPORT_LIBRARY_PROJECT1);
        } )());
    }

    test_importLibraryProject_withClass_annotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','library lib;\nclass Test {\n  const Test(int p);\n}\n');
            await this.resolveTestUnit('@Test(0)\nmain() {\n}\n');
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'lib.dart\';\n\n@Test(0)\nmain() {\n}\n');
        } )());
    }

    test_importLibraryProject_withClass_constInstanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','class Test {\n  const Test();\n}\n');
            await this.resolveTestUnit('main() {\n  const Test();\n}\n');
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'lib.dart\';\n\nmain() {\n  const Test();\n}\n');
        } )());
    }

    test_importLibraryProject_withClass_hasOtherLibraryWithPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/project/bin/test.dart';
            this.addSource('/project/bin/a.dart','library a;\nclass One {}\n');
            this.addSource('/project/bin/b.dart','library b;\nclass One {}\nclass Two {}\n');
            await this.resolveTestUnit('import \'b.dart\' show Two;\nmain () {\n  new Two();\n  new One();\n}\n');
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'a.dart\';\nimport \'b.dart\' show Two;\nmain () {\n  new Two();\n  new One();\n}\n');
        } )());
    }

    test_importLibraryProject_withClass_inParentFolder() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/project/bin/test.dart';
            this.addSource('/project/lib.dart','library lib;\nclass Test {}\n');
            await this.resolveTestUnit('main() {\n  Test t = null;\n}\n');
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'../lib.dart\';\n\nmain() {\n  Test t = null;\n}\n');
        } )());
    }

    test_importLibraryProject_withClass_inRelativeFolder() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/project/bin/test.dart';
            this.addSource('/project/lib/sub/folder/lib.dart','library lib;\nclass Test {}\n');
            await this.resolveTestUnit('main() {\n  Test t = null;\n}\n');
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'../lib/sub/folder/lib.dart\';\n\nmain() {\n  Test t = null;\n}\n');
        } )());
    }

    test_importLibraryProject_withClass_inSameFolder() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/project/bin/test.dart';
            this.addSource('/project/bin/lib.dart','library lib;\nclass Test {}\n');
            await this.resolveTestUnit('main() {\n  Test t = null;\n}\n');
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'lib.dart\';\n\nmain() {\n  Test t = null;\n}\n');
        } )());
    }

    test_importLibraryProject_withFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','library lib;\nmyFunction() {}\n');
            await this.resolveTestUnit('main() {\n  myFunction();\n}\n');
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'lib.dart\';\n\nmain() {\n  myFunction();\n}\n');
        } )());
    }

    test_importLibraryProject_withFunction_unresolvedMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','library lib;\nmyFunction() {}\n');
            await this.resolveTestUnit('class A {\n  main() {\n    myFunction();\n  }\n}\n');
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'lib.dart\';\n\nclass A {\n  main() {\n    myFunction();\n  }\n}\n');
        } )());
    }

    test_importLibraryProject_withFunctionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/project/bin/test.dart';
            this.addSource('/project/bin/lib.dart','library lib;\ntypedef MyFunction();\n');
            await this.resolveTestUnit('main() {\n  MyFunction t = null;\n}\n');
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'lib.dart\';\n\nmain() {\n  MyFunction t = null;\n}\n');
        } )());
    }

    test_importLibraryProject_withTopLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','library lib;\nint MY_VAR = 42;\n');
            await this.resolveTestUnit('main() {\n  print(MY_VAR);\n}\n');
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'lib.dart\';\n\nmain() {\n  print(MY_VAR);\n}\n');
        } )());
    }

    test_importLibrarySdk_withClass_AsExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  p as Future;\n}\n');
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:async\';\n\nmain(p) {\n  p as Future;\n}\n');
        } )());
    }

    test_importLibrarySdk_withClass_invocationTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  Future.wait(null);\n}\n');
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:async\';\n\nmain() {\n  Future.wait(null);\n}\n');
        } )());
    }

    test_importLibrarySdk_withClass_IsExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  p is Future;\n}\n');
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:async\';\n\nmain(p) {\n  p is Future;\n}\n');
        } )());
    }

    test_importLibrarySdk_withClass_itemOfList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var a = [Future];\n}\n');
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:async\';\n\nmain() {\n  var a = [Future];\n}\n');
        } )());
    }

    test_importLibrarySdk_withClass_itemOfList_inAnnotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticWarningCode.UNDEFINED_IDENTIFIER);
            };
            await this.resolveTestUnit('class MyAnnotation {\n  const MyAnnotation(a, b);\n}\n@MyAnnotation(int, const [Future])\nmain() {}\n');
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:async\';\n\nclass MyAnnotation {\n  const MyAnnotation(a, b);\n}\n@MyAnnotation(int, const [Future])\nmain() {}\n');
        } )());
    }

    test_importLibrarySdk_withClass_typeAnnotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  Future f = null;\n}\n');
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:async\';\n\nmain() {\n  Future f = null;\n}\n');
        } )());
    }

    test_importLibrarySdk_withClass_typeAnnotation_PrefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  Future.wait;\n}\n');
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:async\';\n\nmain() {\n  Future.wait;\n}\n');
        } )());
    }

    test_importLibrarySdk_withClass_typeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  List<Future> futures = [];\n}\n');
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:async\';\n\nmain() {\n  List<Future> futures = [];\n}\n');
        } )());
    }

    test_importLibrarySdk_withTopLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  print(PI);\n}\n');
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:math\';\n\nmain() {\n  print(PI);\n}\n');
        } )());
    }

    test_importLibrarySdk_withTopLevelVariable_annotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('@PI\nmain() {\n}\n');
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:math\';\n\n@PI\nmain() {\n}\n');
        } )());
    }

    test_importLibraryShow_project() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/project/bin/test.dart';
            this.addSource('/project/bin/lib.dart','class A {}\nclass B {}\n');
            await this.resolveTestUnit('import \'lib.dart\' show A;\nmain() {\n  A a;\n  B b;\n}\n');
            this.performAllAnalysisTasks();
            await this.assertNoFix(DartFixKind.IMPORT_LIBRARY_PROJECT1);
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SHOW,'import \'lib.dart\' show A, B;\nmain() {\n  A a;\n  B b;\n}\n');
        } )());
    }

    test_importLibraryShow_sdk() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\' show Stream;\nmain() {\n  Stream s = null;\n  Future f = null;\n}\n');
            await this.assertNoFix(DartFixKind.IMPORT_LIBRARY_SDK);
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SHOW,'import \'dart:async\' show Future, Stream;\nmain() {\n  Stream s = null;\n  Future f = null;\n}\n');
        } )());
    }

    test_isNotNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  p is! Null;\n}\n');
            await this.assertHasFix(DartFixKind.USE_NOT_EQ_NULL,'main(p) {\n  p != null;\n}\n');
        } )());
    }

    test_isNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  p is Null;\n}\n');
            await this.assertHasFix(DartFixKind.USE_EQ_EQ_NULL,'main(p) {\n  p == null;\n}\n');
        } )());
    }

    test_makeEnclosingClassAbstract_declaresAbstractMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  m();\n}\n');
            await this.assertHasFix(DartFixKind.MAKE_CLASS_ABSTRACT,'abstract class A {\n  m();\n}\n');
        } )());
    }

    test_makeEnclosingClassAbstract_inheritsAbstractMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class A {\n  m();\n}\nclass B extends A {\n}\n');
            await this.assertHasFix(DartFixKind.MAKE_CLASS_ABSTRACT,'abstract class A {\n  m();\n}\nabstract class B extends A {\n}\n');
        } )());
    }

    test_makeFieldNotFinal_hasType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  final int fff = 1;\n  main() {\n    fff = 2;\n  }\n}\n');
            await this.assertHasFix(DartFixKind.MAKE_FIELD_NOT_FINAL,'class A {\n  int fff = 1;\n  main() {\n    fff = 2;\n  }\n}\n');
        } )());
    }

    test_makeFieldNotFinal_noType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  final fff = 1;\n  main() {\n    fff = 2;\n  }\n}\n');
            await this.assertHasFix(DartFixKind.MAKE_FIELD_NOT_FINAL,'class A {\n  var fff = 1;\n  main() {\n    fff = 2;\n  }\n}\n');
        } )());
    }

    test_noException_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  p i s Null;\n}');
            let errors : core.DartList<any> = await this._computeErrors();
            for(let error of errors) {
                await this._computeFixes(error);
            }
        } )());
    }

    test_nonBoolCondition_addNotNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(String p) {\n  if (p) {\n    print(p);\n  }\n}\n');
            await this.assertHasFix(DartFixKind.ADD_NE_NULL,'main(String p) {\n  if (p != null) {\n    print(p);\n  }\n}\n');
        } )());
    }

    test_removeDeadCode_condition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(int p) {\n  if (true || p > 5) {\n    print(1);\n  }\n}\n');
            await this.assertHasFix(DartFixKind.REMOVE_DEAD_CODE,'main(int p) {\n  if (true) {\n    print(1);\n  }\n}\n');
        } )());
    }

    test_removeDeadCode_statements_one() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('int main() {\n  print(0);\n  return 42;\n  print(1);\n}\n');
            await this.assertHasFix(DartFixKind.REMOVE_DEAD_CODE,'int main() {\n  print(0);\n  return 42;\n}\n');
        } )());
    }

    test_removeDeadCode_statements_two() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('int main() {\n  print(0);\n  return 42;\n  print(1);\n  print(2);\n}\n');
            await this.assertHasFix(DartFixKind.REMOVE_DEAD_CODE,'int main() {\n  print(0);\n  return 42;\n}\n');
        } )());
    }

    test_removeParentheses_inGetterDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int get foo() => 0;\n}\n');
            await this.assertHasFix(DartFixKind.REMOVE_PARAMETERS_IN_GETTER_DECLARATION,'class A {\n  int get foo => 0;\n}\n');
        } )());
    }

    test_removeParentheses_inGetterInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int get foo => 0;\n}\nmain(A a) {\n  a.foo();\n}\n');
            await this.assertHasFix(DartFixKind.REMOVE_PARENTHESIS_IN_GETTER_INVOCATION,'class A {\n  int get foo => 0;\n}\nmain(A a) {\n  a.foo;\n}\n');
        } )());
    }

    test_removeUnnecessaryCast_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(Object p) {\n  if (p is String) {\n    String v = ((p as String));\n  }\n}\n');
            await this.assertHasFix(DartFixKind.REMOVE_UNNECESSARY_CAST,'main(Object p) {\n  if (p is String) {\n    String v = p;\n  }\n}\n');
        } )());
    }

    test_removeUnusedCatchClause() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return true;
            };
            await this.resolveTestUnit('main() {\n  try {\n    throw 42;\n  } on int catch (e) {\n  }\n}\n');
            await this.assertHasFix(DartFixKind.REMOVE_UNUSED_CATCH_CLAUSE,'main() {\n  try {\n    throw 42;\n  } on int {\n  }\n}\n');
        } )());
    }

    test_removeUnusedCatchStack() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return true;
            };
            await this.resolveTestUnit('main() {\n  try {\n    throw 42;\n  } catch (e, stack) {\n  }\n}\n');
            await this.assertHasFix(DartFixKind.REMOVE_UNUSED_CATCH_STACK,'main() {\n  try {\n    throw 42;\n  } catch (e) {\n  }\n}\n');
        } )());
    }

    test_removeUnusedImport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:math\';\nmain() {\n}\n');
            await this.assertHasFix(DartFixKind.REMOVE_UNUSED_IMPORT,'main() {\n}\n');
        } )());
    }

    test_removeUnusedImport_anotherImportOnLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:math\'; import \'dart:async\';\n\nmain() {\n  Future f;\n}\n');
            await this.assertHasFix(DartFixKind.REMOVE_UNUSED_IMPORT,'import \'dart:async\';\n\nmain() {\n  Future f;\n}\n');
        } )());
    }

    test_removeUnusedImport_severalLines() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import\n  \'dart:math\';\nmain() {\n}\n');
            await this.assertHasFix(DartFixKind.REMOVE_UNUSED_IMPORT,'main() {\n}\n');
        } )());
    }

    test_replaceVarWithDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,ParserErrorCode.VAR_AS_TYPE_NAME);
            };
            await this.resolveTestUnit('class A {\n  Map<String, var> m;\n}\n');
            await this.assertHasFix(DartFixKind.REPLACE_VAR_WITH_DYNAMIC,'class A {\n  Map<String, dynamic> m;\n}\n');
        } )());
    }

    test_replaceWithConstInstanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  const A();\n}\nconst a = new A();\n');
            await this.assertHasFix(DartFixKind.USE_CONST,'class A {\n  const A();\n}\nconst a = const A();\n');
        } )());
    }

    test_undefinedClass_useSimilar_BAD_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\' as c;\nmain() {\n  c.Fture v = null;\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO,'import \'dart:async\' as c;\nmain() {\n  c.Future v = null;\n}\n');
        } )());
    }

    test_undefinedClass_useSimilar_fromImport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  Stirng s = \'abc\';\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO,'main() {\n  String s = \'abc\';\n}\n');
        } )());
    }

    test_undefinedClass_useSimilar_fromThisLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class MyClass {}\nmain() {\n  MyCalss v = null;\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class MyClass {}\nmain() {\n  MyClass v = null;\n}\n');
        } )());
    }

    test_undefinedFunction_create_bottomArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  test(throw 42);\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {\n  test(throw 42);\n}\n\nvoid test(arg0) {\n}\n');
        } )());
    }

    test_undefinedFunction_create_duplicateArgumentNames() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C {\n  int x;\n}\n\nfoo(C c1, C c2) {\n  bar(c1.x, c2.x);\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'class C {\n  int x;\n}\n\nfoo(C c1, C c2) {\n  bar(c1.x, c2.x);\n}\n\nvoid bar(int x, int x2) {\n}\n');
        } )());
    }

    test_undefinedFunction_create_dynamicArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  dynamic v;\n  test(v);\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {\n  dynamic v;\n  test(v);\n}\n\nvoid test(v) {\n}\n');
        } )());
    }

    test_undefinedFunction_create_dynamicReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  dynamic v = test();\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {\n  dynamic v = test();\n}\n\ntest() {\n}\n');
        } )());
    }

    test_undefinedFunction_create_fromFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  int v = myUndefinedFunction(1, 2.0, \'3\');\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {\n  int v = myUndefinedFunction(1, 2.0, \'3\');\n}\n\nint myUndefinedFunction(int i, double d, String s) {\n}\n');
        } )());
    }

    test_undefinedFunction_create_fromMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  main() {\n    int v = myUndefinedFunction(1, 2.0, \'3\');\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'class A {\n  main() {\n    int v = myUndefinedFunction(1, 2.0, \'3\');\n  }\n}\n\nint myUndefinedFunction(int i, double d, String s) {\n}\n');
        } )());
    }

    test_undefinedFunction_create_generic_BAD() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A<T> {\n  Map<int, T> items;\n  main() {\n    process(items);\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'class A<T> {\n  Map<int, T> items;\n  main() {\n    process(items);\n  }\n}\n\nvoid process(Map items) {\n}\n');
        } )());
    }

    test_undefinedFunction_create_generic_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  List<int> items;\n  main() {\n    process(items);\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'class A {\n  List<int> items;\n  main() {\n    process(items);\n  }\n}\n\nvoid process(List<int> items) {\n}\n');
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,2),new core.DartList.literal('List<int> items) {'),this.expectedSuggestions(LinkedEditSuggestionKind.TYPE,new core.DartList.literal('List<int>','Iterable<int>','Object')));
        } )());
    }

    test_undefinedFunction_create_importType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','library lib;\nimport \'dart:async\';\nFuture getFuture() => null;\n');
            await this.resolveTestUnit('import \'lib.dart\';\nmain() {\n  test(getFuture());\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'import \'dart:async\';\nimport \'lib.dart\';\nmain() {\n  test(getFuture());\n}\n\nvoid test(Future future) {\n}\n');
        } )());
    }

    test_undefinedFunction_create_nullArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  test(null);\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {\n  test(null);\n}\n\nvoid test(arg0) {\n}\n');
        } )());
    }

    test_undefinedFunction_create_returnType_bool_expressions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assert_undefinedFunction_create_returnType_bool("!test();");
            await this.assert_undefinedFunction_create_returnType_bool("b && test();");
            await this.assert_undefinedFunction_create_returnType_bool("test() && b;");
            await this.assert_undefinedFunction_create_returnType_bool("b || test();");
            await this.assert_undefinedFunction_create_returnType_bool("test() || b;");
        } )());
    }

    test_undefinedFunction_create_returnType_bool_statements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assert_undefinedFunction_create_returnType_bool("assert ( test() );");
            await this.assert_undefinedFunction_create_returnType_bool("if ( test() ) {}");
            await this.assert_undefinedFunction_create_returnType_bool("while ( test() ) {}");
            await this.assert_undefinedFunction_create_returnType_bool("do {} while ( test() );");
        } )());
    }

    test_undefinedFunction_create_returnType_fromAssignment_eq() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  int v;\n  v = myUndefinedFunction();\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {\n  int v;\n  v = myUndefinedFunction();\n}\n\nint myUndefinedFunction() {\n}\n');
        } )());
    }

    test_undefinedFunction_create_returnType_fromAssignment_plusEq() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  int v;\n  v += myUndefinedFunction();\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {\n  int v;\n  v += myUndefinedFunction();\n}\n\nnum myUndefinedFunction() {\n}\n');
        } )());
    }

    test_undefinedFunction_create_returnType_fromBinary_right() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  0 + myUndefinedFunction();\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {\n  0 + myUndefinedFunction();\n}\n\nnum myUndefinedFunction() {\n}\n');
        } )());
    }

    test_undefinedFunction_create_returnType_fromInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  int v = myUndefinedFunction();\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {\n  int v = myUndefinedFunction();\n}\n\nint myUndefinedFunction() {\n}\n');
        } )());
    }

    test_undefinedFunction_create_returnType_fromInvocationArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('foo(int p) {}\nmain() {\n  foo( myUndefinedFunction() );\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'foo(int p) {}\nmain() {\n  foo( myUndefinedFunction() );\n}\n\nint myUndefinedFunction() {\n}\n');
        } )());
    }

    test_undefinedFunction_create_returnType_fromReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('int main() {\n  return myUndefinedFunction();\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'int main() {\n  return myUndefinedFunction();\n}\n\nint myUndefinedFunction() {\n}\n');
        } )());
    }

    test_undefinedFunction_create_returnType_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  myUndefinedFunction();\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {\n  myUndefinedFunction();\n}\n\nvoid myUndefinedFunction() {\n}\n');
        } )());
    }

    test_undefinedFunction_useSimilar_fromImport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  pritn(0);\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO,'main() {\n  print(0);\n}\n');
        } )());
    }

    test_undefinedFunction_useSimilar_prefixed_fromImport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:core\' as c;\nmain() {\n  c.prnt(42);\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO,'import \'dart:core\' as c;\nmain() {\n  c.print(42);\n}\n');
        } )());
    }

    test_undefinedFunction_useSimilar_prefixed_ignoreLocal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\' as c;\nmain() {\n  c.main();\n}\n');
            await this.assertNoFix(DartFixKind.CHANGE_TO);
        } )());
    }

    test_undefinedFunction_useSimilar_thisLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('myFunction() {}\nmain() {\n  myFuntcion();\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO,'myFunction() {}\nmain() {\n  myFunction();\n}\n');
        } )());
    }

    test_undefinedGetter_useSimilar_hint() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int myField;\n}\nmain(A a) {\n  var x = a;\n  print(x.myFild);\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {\n  int myField;\n}\nmain(A a) {\n  var x = a;\n  print(x.myField);\n}\n');
        } )());
    }

    test_undefinedGetter_useSimilar_qualified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int myField;\n}\nmain(A a) {\n  print(a.myFild);\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {\n  int myField;\n}\nmain(A a) {\n  print(a.myField);\n}\n');
        } )());
    }

    test_undefinedGetter_useSimilar_qualified_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  static int MY_NAME = 1;\n}\nmain() {\n  A.MY_NAM;\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {\n  static int MY_NAME = 1;\n}\nmain() {\n  A.MY_NAME;\n}\n');
        } )());
    }

    test_undefinedGetter_useSimilar_unqualified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int myField;\n  main() {\n    print(myFild);\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {\n  int myField;\n  main() {\n    print(myField);\n  }\n}\n');
        } )());
    }

    test_undefinedMethod_create_BAD_inSDK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  List.foo();\n}\n');
            await this.assertNoFix(DartFixKind.CREATE_METHOD);
        } )());
    }

    test_undefinedMethod_create_BAD_targetIsEnum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('enum MyEnum {A, B}\nmain() {\n  MyEnum.foo();\n}\n');
            await this.assertNoFix(DartFixKind.CREATE_METHOD);
        } )());
    }

    test_undefinedMethod_create_generic_BAD_argumentType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A<T> {\n  B b;\n  Map<int, T> items;\n  main() {\n    b.process(items);\n  }\n}\n\nclass B {\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A<T> {\n  B b;\n  Map<int, T> items;\n  main() {\n    b.process(items);\n  }\n}\n\nclass B {\n  void process(Map items) {}\n}\n');
        } )());
    }

    test_undefinedMethod_create_generic_BAD_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A<T> {\n  main() {\n    T t = new B().compute();\n  }\n}\n\nclass B {\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A<T> {\n  main() {\n    T t = new B().compute();\n  }\n}\n\nclass B {\n  dynamic compute() {}\n}\n');
        } )());
    }

    test_undefinedMethod_create_generic_OK_literal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  B b;\n  List<int> items;\n  main() {\n    b.process(items);\n  }\n}\n\nclass B {}\n');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {\n  B b;\n  List<int> items;\n  main() {\n    b.process(items);\n  }\n}\n\nclass B {\n  void process(List<int> items) {}\n}\n');
        } )());
    }

    test_undefinedMethod_create_generic_OK_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A<T> {\n  List<T> items;\n  main() {\n    process(items);\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A<T> {\n  List<T> items;\n  main() {\n    process(items);\n  }\n\n  void process(List<T> items) {}\n}\n');
        } )());
    }

    test_undefinedMethod_createQualified_emptyClassBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {}\nmain() {\n  A.myUndefinedMethod();\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {\n  static void myUndefinedMethod() {}\n}\nmain() {\n  A.myUndefinedMethod();\n}\n');
        } )());
    }

    test_undefinedMethod_createQualified_fromClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n}\nmain() {\n  A.myUndefinedMethod();\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {\n  static void myUndefinedMethod() {}\n}\nmain() {\n  A.myUndefinedMethod();\n}\n');
        } )());
    }

    test_undefinedMethod_createQualified_fromClass_hasOtherMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  foo() {}\n}\nmain() {\n  A.myUndefinedMethod();\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {\n  foo() {}\n\n  static void myUndefinedMethod() {}\n}\nmain() {\n  A.myUndefinedMethod();\n}\n');
        } )());
    }

    test_undefinedMethod_createQualified_fromInstance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n}\nmain(A a) {\n  a.myUndefinedMethod();\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {\n  void myUndefinedMethod() {}\n}\nmain(A a) {\n  a.myUndefinedMethod();\n}\n');
        } )());
    }

    test_undefinedMethod_createQualified_targetIsFunctionType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('typedef A();\nmain() {\n  A.myUndefinedMethod();\n}\n');
            await this.assertNoFix(DartFixKind.CREATE_METHOD);
        } )());
    }

    test_undefinedMethod_createQualified_targetIsUnresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  NoSuchClass.myUndefinedMethod();\n}\n');
            await this.assertNoFix(DartFixKind.CREATE_METHOD);
        } )());
    }

    test_undefinedMethod_createUnqualified_duplicateArgumentNames() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C {\n  int x;\n}\n\nclass D {\n  foo(C c1, C c2) {\n    bar(c1.x, c2.x);\n  }\n}');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class C {\n  int x;\n}\n\nclass D {\n  foo(C c1, C c2) {\n    bar(c1.x, c2.x);\n  }\n\n  void bar(int x, int x2) {}\n}');
        } )());
    }

    test_undefinedMethod_createUnqualified_parameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  main() {\n    myUndefinedMethod(0, 1.0, \'3\');\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {\n  main() {\n    myUndefinedMethod(0, 1.0, \'3\');\n  }\n\n  void myUndefinedMethod(int i, double d, String s) {}\n}\n');
            let index : number = 0;
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('void myUndefinedMethod('));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('myUndefinedMethod(0','myUndefinedMethod(int'));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('int i'),this.expectedSuggestions(LinkedEditSuggestionKind.TYPE,new core.DartList.literal('int','num','Object','Comparable<num>')));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('i,'));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('double d'),this.expectedSuggestions(LinkedEditSuggestionKind.TYPE,new core.DartList.literal('double','num','Object','Comparable<num>')));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('d,'));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('String s'),this.expectedSuggestions(LinkedEditSuggestionKind.TYPE,new core.DartList.literal('String','Object','Comparable<String>')));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('s)'));
        } )());
    }

    test_undefinedMethod_createUnqualified_parameters_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  main() {\n    myUndefinedMethod(0, bbb: 1.0, ccc: \'2\');\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {\n  main() {\n    myUndefinedMethod(0, bbb: 1.0, ccc: \'2\');\n  }\n\n  void myUndefinedMethod(int i, {double bbb, String ccc}) {}\n}\n');
            let index : number = 0;
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('void myUndefinedMethod('));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('myUndefinedMethod(0','myUndefinedMethod(int'));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('int i'),this.expectedSuggestions(LinkedEditSuggestionKind.TYPE,new core.DartList.literal('int','num','Object','Comparable<num>')));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('i,'));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('double bbb'),this.expectedSuggestions(LinkedEditSuggestionKind.TYPE,new core.DartList.literal('double','num','Object','Comparable<num>')));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('String ccc'),this.expectedSuggestions(LinkedEditSuggestionKind.TYPE,new core.DartList.literal('String','Object','Comparable<String>')));
        } )());
    }

    test_undefinedMethod_createUnqualified_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  main() {\n    int v = myUndefinedMethod();\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {\n  main() {\n    int v = myUndefinedMethod();\n  }\n\n  int myUndefinedMethod() {}\n}\n');
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('int myUndefinedMethod('));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,1),new core.DartList.literal('myUndefinedMethod();','myUndefinedMethod() {'));
        } )());
    }

    test_undefinedMethod_createUnqualified_staticFromField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  static var f = myUndefinedMethod();\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {\n  static var f = myUndefinedMethod();\n\n  static myUndefinedMethod() {}\n}\n');
        } )());
    }

    test_undefinedMethod_createUnqualified_staticFromMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  static main() {\n    myUndefinedMethod();\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {\n  static main() {\n    myUndefinedMethod();\n  }\n\n  static void myUndefinedMethod() {}\n}\n');
        } )());
    }

    test_undefinedMethod_hint_createQualified_fromInstance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n}\nmain() {\n  var a = new A();\n  a.myUndefinedMethod();\n}\n');
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {\n  void myUndefinedMethod() {}\n}\nmain() {\n  var a = new A();\n  a.myUndefinedMethod();\n}\n');
        } )());
    }

    test_undefinedMethod_parameterType_differentPrefixInTargetUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code2 : string = 'library test2;\nimport \'test3.dart\' as bbb;\nexport \'test3.dart\';\nclass D {\n}\n';
            this.addSource('/test2.dart',code2);
            this.addSource('/test3.dart','library test3;\nclass E {}\n');
            await this.resolveTestUnit('library test;\nimport \'test2.dart\' as aaa;\nmain(aaa.D d, aaa.E e) {\n  d.foo(e);\n}\n');
            let error : any = await this._findErrorToFix();
            this.fix = await this._assertHasFix(DartFixKind.CREATE_METHOD,error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            let fileEdit : any = op(Op.INDEX,this.change.edits,0);
            expect(fileEdit.file,'/test2.dart');
            expect(SourceEdit.applySequence(code2,fileEdit.edits),'library test2;\nimport \'test3.dart\' as bbb;\nexport \'test3.dart\';\nclass D {\n  void foo(bbb.E e) {}\n}\n');
        } )());
    }

    test_undefinedMethod_parameterType_inTargetUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code2 : string = 'library test2;\nclass D {\n}\nclass E {}\n';
            this.addSource('/test2.dart',code2);
            await this.resolveTestUnit('library test;\nimport \'test2.dart\' as test2;\nmain(test2.D d, test2.E e) {\n  d.foo(e);\n}\n');
            let error : any = await this._findErrorToFix();
            this.fix = await this._assertHasFix(DartFixKind.CREATE_METHOD,error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            let fileEdit : any = op(Op.INDEX,this.change.edits,0);
            expect(fileEdit.file,'/test2.dart');
            expect(SourceEdit.applySequence(code2,fileEdit.edits),'library test2;\nclass D {\n  void foo(E e) {}\n}\nclass E {}\n');
        } )());
    }

    test_undefinedMethod_useSimilar_ignoreOperators() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(Object object) {\n  object.then();\n}\n');
            await this.assertNoFix(DartFixKind.CHANGE_TO);
        } )());
    }

    test_undefinedMethod_useSimilar_qualified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  myMethod() {}\n}\nmain() {\n  A a = new A();\n  a.myMehtod();\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {\n  myMethod() {}\n}\nmain() {\n  A a = new A();\n  a.myMethod();\n}\n');
        } )());
    }

    test_undefinedMethod_useSimilar_unqualified_superClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  myMethod() {}\n}\nclass B extends A {\n  main() {\n    myMehtod();\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {\n  myMethod() {}\n}\nclass B extends A {\n  main() {\n    myMethod();\n  }\n}\n');
        } )());
    }

    test_undefinedMethod_useSimilar_unqualified_thisClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  myMethod() {}\n  main() {\n    myMehtod();\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {\n  myMethod() {}\n  main() {\n    myMethod();\n  }\n}\n');
        } )());
    }

    test_undefinedParameter_convertFlutterChild_invalidList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Container(\n    child: new Row(\n      child: <Widget>[\n        new Transform(),\n        null,\n        new AspectRatio(),\n      ],\n    ),\n  );\n}\n');
            await this.assertNoFix(DartFixKind.CONVERT_FLUTTER_CHILD);
        } )());
    }

    test_undefinedParameter_convertFlutterChild_OK_hasList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Container(\n    child: new Row(\n      child: [\n        new Transform(),\n        new ClipRect.rect(),\n        new AspectRatio(),\n      ],\n    ),\n  );\n}\n');
            await this.assertHasFix(DartFixKind.CONVERT_FLUTTER_CHILD,'import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Container(\n    child: new Row(\n      children: <Widget>[\n        new Transform(),\n        new ClipRect.rect(),\n        new AspectRatio(),\n      ],\n    ),\n  );\n}\n');
        } )());
    }

    test_undefinedParameter_convertFlutterChild_OK_hasTypedList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Container(\n    child: new Row(\n      child: <Widget>[\n        new Transform(),\n        new ClipRect.rect(),\n        new AspectRatio(),\n      ],\n    ),\n  );\n}\n');
            await this.assertHasFix(DartFixKind.CONVERT_FLUTTER_CHILD,'import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Container(\n    child: new Row(\n      children: <Widget>[\n        new Transform(),\n        new ClipRect.rect(),\n        new AspectRatio(),\n      ],\n    ),\n  );\n}\n');
        } )());
    }

    test_undefinedParameter_convertFlutterChild_OK_multiLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Scaffold(\n    body: new Row(\n      child: new Container(\n        width: 200.0,\n        height: 300.0,\n      ),\n    ),\n  );\n}\n');
            await this.assertHasFix(DartFixKind.CONVERT_FLUTTER_CHILD,'import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Scaffold(\n    body: new Row(\n      children: <Widget>[\n        new Container(\n          width: 200.0,\n          height: 300.0,\n        ),\n      ],\n    ),\n  );\n}\n');
        } )());
    }

    test_undefinedSetter_useSimilar_hint() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int myField;\n}\nmain(A a) {\n  var x = a;\n  x.myFild = 42;\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {\n  int myField;\n}\nmain(A a) {\n  var x = a;\n  x.myField = 42;\n}\n');
        } )());
    }

    test_undefinedSetter_useSimilar_qualified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int myField;\n}\nmain(A a) {\n  a.myFild = 42;\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {\n  int myField;\n}\nmain(A a) {\n  a.myField = 42;\n}\n');
        } )());
    }

    test_undefinedSetter_useSimilar_unqualified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int myField;\n  main() {\n    myFild = 42;\n  }\n}\n');
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {\n  int myField;\n  main() {\n    myField = 42;\n  }\n}\n');
        } )());
    }

    test_useEffectiveIntegerDivision() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var a = 5;\n  var b = 2;\n  print((a / b).toInt());\n}\n');
            await this.assertHasFix(DartFixKind.USE_EFFECTIVE_INTEGER_DIVISION,'main() {\n  var a = 5;\n  var b = 2;\n  print(a ~/ b);\n}\n');
        } )());
    }

    test_useImportPrefix_withClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\' as pref;\nmain() {\n  pref.Stream s = null;\n  Future f = null;\n}\n');
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PREFIX,'import \'dart:async\' as pref;\nmain() {\n  pref.Stream s = null;\n  pref.Future f = null;\n}\n');
        } )());
    }

    test_useImportPrefix_withTopLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:math\' as pref;\nmain() {\n  print(pref.E);\n  print(PI);\n}\n');
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PREFIX,'import \'dart:math\' as pref;\nmain() {\n  print(pref.E);\n  print(pref.PI);\n}\n');
        } )());
    }

    _addMetaPackageSource() : void {
        this.addPackageSource('meta','meta.dart','library meta;\n\nconst Required required = const Required();\n\nclass Required {\n  final String reason;\n  const Required([this.reason]);\n}\n');
    }
    _configureFlutterPkg(pathToCode : core.DartMap<string,string>) : void {
        pathToCode.forEach((path : any,code : any) =>  {
            this.provider.newFile(`${lib4.properties.flutterPkgLibPath}/${path}`,code);
        });
        let myPkgFolder : any = this.provider.getResource(lib4.properties.flutterPkgLibPath);
        let pkgResolver : any = new bare.createInstance(any,null,this.provider,new core.DartMap.literal([
            ['flutter',new core.DartList.literal(myPkgFolder)]]));
        let sourceFactory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.sdk),pkgResolver,this.resourceResolver));
        if (this.enableNewAnalysisDriver) {
            this.driver.configure({
                sourceFactory : sourceFactory});
        }else {
            this.context.sourceFactory = sourceFactory;
        }
        this.addSource('/tmp/other.dart',pathToCode.keys.map((path : any) =>  {
            return `import 'package:flutter/${path}';`;
        }).join('\n'));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FixProcessorTest() {
    }
}

export namespace LintFixTest {
    export type Constructors = BaseFixProcessorTest.Constructors | 'LintFixTest';
    export type Interface = Omit<LintFixTest, Constructors>;
}
@DartClass
export class LintFixTest extends BaseFixProcessorTest {
    error : any;

    applyFix(kind : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.fix = await this._assertHasFix(kind,this.error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            this.resultCode = SourceEdit.applySequence(this.testCode,op(Op.INDEX,this.change.edits,0).edits);
        } )());
    }

    findLint(src : string,lintCode : string,_namedArguments? : {length? : number}) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let {length} = Object.assign({
                "length" : 1}, _namedArguments );
            let errorOffset : number = new core.DartString(src).indexOf('/*LINT*/');
            await this.resolveTestUnit(new core.DartString(src).replaceAll('/*LINT*/',''));
            this.error = new bare.createInstance(any,null,resolutionMap.elementDeclaredByCompilationUnit(this.testUnit).source,errorOffset,length,new bare.createInstance(any,null,lintCode,'<ignored>'));
        } )());
    }

    test_lint_addMissingOverride_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class abstract Test {\n  int get t;\n}\nclass Sub extends Test {\n  int /*LINT*/t = 42;\n}\n';
            await this.findLint(src,LintNames.annotate_overrides);
            await this.applyFix(DartFixKind.LINT_ADD_OVERRIDE);
            this.verifyResult('class abstract Test {\n  int get t;\n}\nclass Sub extends Test {\n  @override\n  int t = 42;\n}\n');
        } )());
    }

    test_lint_addMissingOverride_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Test {\n  int get t => null;\n}\nclass Sub extends Test {\n  int get /*LINT*/t => null;\n}\n';
            await this.findLint(src,LintNames.annotate_overrides);
            await this.applyFix(DartFixKind.LINT_ADD_OVERRIDE);
            this.verifyResult('class Test {\n  int get t => null;\n}\nclass Sub extends Test {\n  @override\n  int get t => null;\n}\n');
        } )());
    }

    test_lint_addMissingOverride_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Test {\n  void t() { }\n}\nclass Sub extends Test {\n  void /*LINT*/t() { }\n}\n';
            await this.findLint(src,LintNames.annotate_overrides);
            await this.applyFix(DartFixKind.LINT_ADD_OVERRIDE);
            this.verifyResult('class Test {\n  void t() { }\n}\nclass Sub extends Test {\n  @override\n  void t() { }\n}\n');
        } )());
    }

    test_lint_addMissingOverride_method_with_doc_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Test {\n  void t() { }\n}\nclass Sub extends Test {\n  /// Doc comment.\n  void /*LINT*/t() { }\n}\n';
            await this.findLint(src,LintNames.annotate_overrides);
            await this.applyFix(DartFixKind.LINT_ADD_OVERRIDE);
            this.verifyResult('class Test {\n  void t() { }\n}\nclass Sub extends Test {\n  /// Doc comment.\n  @override\n  void t() { }\n}\n');
        } )());
    }

    test_lint_addMissingOverride_method_with_doc_comment_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Test {\n  void t() { }\n}\nclass Sub extends Test {\n  /**\n   * Doc comment.\n   */\n  void /*LINT*/t() { }\n}\n';
            await this.findLint(src,LintNames.annotate_overrides);
            await this.applyFix(DartFixKind.LINT_ADD_OVERRIDE);
            this.verifyResult('class Test {\n  void t() { }\n}\nclass Sub extends Test {\n  /**\n   * Doc comment.\n   */\n  @override\n  void t() { }\n}\n');
        } )());
    }

    test_lint_addMissingOverride_method_with_doc_comment_and_metadata() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Test {\n  void t() { }\n}\nclass Sub extends Test {\n  /// Doc comment.\n  @foo\n  void /*LINT*/t() { }\n}\n';
            await this.findLint(src,LintNames.annotate_overrides);
            await this.applyFix(DartFixKind.LINT_ADD_OVERRIDE);
            this.verifyResult('class Test {\n  void t() { }\n}\nclass Sub extends Test {\n  /// Doc comment.\n  @override\n  @foo\n  void t() { }\n}\n');
        } )());
    }

    test_lint_addMissingOverride_method_with_non_doc_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Test {\n  void t() { }\n}\nclass Sub extends Test {\n  // Non-doc comment.\n  void /*LINT*/t() { }\n}\n';
            await this.findLint(src,LintNames.annotate_overrides);
            await this.applyFix(DartFixKind.LINT_ADD_OVERRIDE);
            this.verifyResult('class Test {\n  void t() { }\n}\nclass Sub extends Test {\n  // Non-doc comment.\n  @override\n  void t() { }\n}\n');
        } )());
    }

    test_lint_removeInterpolationBraces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'main() {\n  var v = 42;\n  print(\'v: /*LINT*/${ v}\');\n}\n';
            await this.findLint(src,LintNames.unnecessary_brace_in_string_interp,{
                length : 4});
            await this.applyFix(DartFixKind.LINT_REMOVE_INTERPOLATION_BRACES);
            this.verifyResult('main() {\n  var v = 42;\n  print(\'v: $v\');\n}\n');
        } )());
    }

    test_removeAwait_intLiteral() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'bad() async {\n  print(/*LINT*/await 23);\n}\n';
            await this.findLint(src,LintNames.await_only_futures);
            await this.applyFix(DartFixKind.REMOVE_AWAIT);
            this.verifyResult('bad() async {\n  print(23);\n}\n');
        } )());
    }

    test_removeAwait_StringLiteral() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'bad() async {\n  print(/*LINT*/await \'hola\');\n}\n';
            await this.findLint(src,LintNames.await_only_futures);
            await this.applyFix(DartFixKind.REMOVE_AWAIT);
            this.verifyResult('bad() async {\n  print(\'hola\');\n}\n');
        } )());
    }

    test_removeEmptyStatement_insideBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'void foo() {\n  while(true) {\n    /*LINT*/;\n  }\n}\n';
            await this.findLint(src,LintNames.empty_statements);
            await this.applyFix(DartFixKind.REMOVE_EMPTY_STATEMENT);
            this.verifyResult('void foo() {\n  while(true) {\n  }\n}\n');
        } )());
    }

    test_removeEmptyStatement_outOfBlock_otherLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'void foo() {\n  while(true)\n  /*LINT*/;\n  print(\'hi\');\n}\n';
            await this.findLint(src,LintNames.empty_statements);
            await this.applyFix(DartFixKind.REPLACE_WITH_BRACKETS);
            this.verifyResult('void foo() {\n  while(true) {}\n  print(\'hi\');\n}\n');
        } )());
    }

    test_removeEmptyStatement_outOfBlock_sameLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'void foo() {\n  while(true)/*LINT*/;\n  print(\'hi\');\n}\n';
            await this.findLint(src,LintNames.empty_statements);
            await this.applyFix(DartFixKind.REPLACE_WITH_BRACKETS);
            this.verifyResult('void foo() {\n  while(true) {}\n  print(\'hi\');\n}\n');
        } )());
    }

    test_removeInitializer_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Test {\n  int /*LINT*/x = null;\n}\n';
            await this.findLint(src,LintNames.avoid_init_to_null);
            await this.applyFix(DartFixKind.REMOVE_INITIALIZER);
            this.verifyResult('class Test {\n  int x;\n}\n');
        } )());
    }

    test_removeInitializer_listOfVariableDeclarations() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'String a = \'a\', /*LINT*/b = null, c = \'c\';\n';
            await this.findLint(src,LintNames.avoid_init_to_null);
            await this.applyFix(DartFixKind.REMOVE_INITIALIZER);
            this.verifyResult('String a = \'a\', b, c = \'c\';\n');
        } )());
    }

    test_removeInitializer_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'var /*LINT*/x = null;\n';
            await this.findLint(src,LintNames.avoid_init_to_null);
            await this.applyFix(DartFixKind.REMOVE_INITIALIZER);
            this.verifyResult('var x;\n');
        } )());
    }

    test_removeMethodDeclaration_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class A {\n  int x;\n}\nclass B extends A {\n  @override\n  int get /*LINT*/x => super.x;\n}\n';
            await this.findLint(src,LintNames.unnecessary_override);
            await this.applyFix(DartFixKind.REMOVE_METHOD_DECLARATION);
            this.verifyResult('class A {\n  int x;\n}\nclass B extends A {\n}\n');
        } )());
    }

    test_removeMethodDeclaration_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class A {\n  @override\n  String /*LINT*/toString() => super.toString();\n}\n';
            await this.findLint(src,LintNames.unnecessary_override);
            await this.applyFix(DartFixKind.REMOVE_METHOD_DECLARATION);
            this.verifyResult('class A {\n}\n');
        } )());
    }

    test_removeMethodDeclaration_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class A {\n  int x;\n}\nclass B extends A {\n  @override\n  set /*LINT*/x(int other) {\n    this.x = other;\n  }\n}\n';
            await this.findLint(src,LintNames.unnecessary_override);
            await this.applyFix(DartFixKind.REMOVE_METHOD_DECLARATION);
            this.verifyResult('class A {\n  int x;\n}\nclass B extends A {\n}\n');
        } )());
    }

    test_removeThisExpression_methodInvocation_oneCharacterOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class A {\n  void foo() {\n    /*LINT*/this.foo();\n  }\n}\n';
            await this.findLint(src,LintNames.unnecessary_this);
            await this.applyFix(DartFixKind.REMOVE_THIS_EXPRESSION);
            this.verifyResult('class A {\n  void foo() {\n    foo();\n  }\n}\n');
        } )());
    }

    test_removeThisExpression_methodInvocation_twoCharactersOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class A {\n  void foo() {\n    /*LINT*/this?.foo();\n  }\n}\n';
            await this.findLint(src,LintNames.unnecessary_this);
            await this.applyFix(DartFixKind.REMOVE_THIS_EXPRESSION);
            this.verifyResult('class A {\n  void foo() {\n    foo();\n  }\n}\n');
        } )());
    }

    test_removeThisExpression_propertyAccess_oneCharacterOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class A {\n  int x;\n  void foo() {\n    /*LINT*/this.x = 2;\n  }\n}\n';
            await this.findLint(src,LintNames.unnecessary_this);
            await this.applyFix(DartFixKind.REMOVE_THIS_EXPRESSION);
            this.verifyResult('class A {\n  int x;\n  void foo() {\n    x = 2;\n  }\n}\n');
        } )());
    }

    test_removeThisExpression_propertyAccess_twoCharactersOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class A {\n  int x;\n  void foo() {\n    /*LINT*/this?.x = 2;\n  }\n}\n';
            await this.findLint(src,LintNames.unnecessary_this);
            await this.applyFix(DartFixKind.REMOVE_THIS_EXPRESSION);
            this.verifyResult('class A {\n  int x;\n  void foo() {\n    x = 2;\n  }\n}\n');
        } )());
    }

    test_removeTypeName_avoidAnnotatingWithDynamic_InsideFunctionTypedFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'bad(void foo(/*LINT*/dynamic x)) {\n  return null;\n}\n';
            await this.findLint(src,LintNames.avoid_annotating_with_dynamic);
            await this.applyFix(DartFixKind.REMOVE_TYPE_NAME);
            this.verifyResult('bad(void foo(x)) {\n  return null;\n}\n');
        } )());
    }

    test_removeTypeName_avoidAnnotatingWithDynamic_NamedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'bad({/*LINT*/dynamic defaultValue}) {\n  return null;\n}\n';
            await this.findLint(src,LintNames.avoid_annotating_with_dynamic);
            await this.applyFix(DartFixKind.REMOVE_TYPE_NAME);
            this.verifyResult('bad({defaultValue}) {\n  return null;\n}\n');
        } )());
    }

    test_removeTypeName_avoidAnnotatingWithDynamic_NormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'bad(/*LINT*/dynamic defaultValue) {\n  return null;\n}\n';
            await this.findLint(src,LintNames.avoid_annotating_with_dynamic);
            await this.applyFix(DartFixKind.REMOVE_TYPE_NAME);
            this.verifyResult('bad(defaultValue) {\n  return null;\n}\n');
        } )());
    }

    test_removeTypeName_avoidAnnotatingWithDynamic_OptionalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'bad([/*LINT*/dynamic defaultValue]) {\n  return null;\n}\n';
            await this.findLint(src,LintNames.avoid_annotating_with_dynamic);
            await this.applyFix(DartFixKind.REMOVE_TYPE_NAME);
            this.verifyResult('bad([defaultValue]) {\n  return null;\n}\n');
        } )());
    }

    test_removeTypeName_avoidReturnTypesOnSetters_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = '/*LINT*/void set speed2(int ms) {}\n';
            await this.findLint(src,LintNames.avoid_return_types_on_setters);
            await this.applyFix(DartFixKind.REMOVE_TYPE_NAME);
            this.verifyResult('set speed2(int ms) {}\n');
        } )());
    }

    test_removeTypeName_avoidTypesOnClosureParameters_FunctionTypedFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'var functionWithFunction = (/*LINT*/int f(int x)) => f(0);\n';
            await this.findLint(src,LintNames.avoid_types_on_closure_parameters);
            await this.applyFix(DartFixKind.REPLACE_WITH_IDENTIFIER);
            this.verifyResult('var functionWithFunction = (f) => f(0);\n');
        } )());
    }

    test_removeTypeName_avoidTypesOnClosureParameters_NamedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'var x = ({/*LINT*/Future<int> defaultValue}) {\n  return null;\n};\n';
            await this.findLint(src,LintNames.avoid_types_on_closure_parameters);
            await this.applyFix(DartFixKind.REMOVE_TYPE_NAME);
            this.verifyResult('var x = ({defaultValue}) {\n  return null;\n};\n');
        } )());
    }

    test_removeTypeName_avoidTypesOnClosureParameters_NormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'var x = (/*LINT*/Future<int> defaultValue) {\n  return null;\n};\n';
            await this.findLint(src,LintNames.avoid_types_on_closure_parameters);
            await this.applyFix(DartFixKind.REMOVE_TYPE_NAME);
            this.verifyResult('var x = (defaultValue) {\n  return null;\n};\n');
        } )());
    }

    test_removeTypeName_avoidTypesOnClosureParameters_OptionalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'var x = ([/*LINT*/Future<int> defaultValue]) {\n  return null;\n};\n';
            await this.findLint(src,LintNames.avoid_types_on_closure_parameters);
            await this.applyFix(DartFixKind.REMOVE_TYPE_NAME);
            this.verifyResult('var x = ([defaultValue]) {\n  return null;\n};\n');
        } )());
    }

    test_replaceWithConditionalAssignment_withCodeBeforeAndAfter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Person {\n  String _fullName;\n  void foo() {\n    print(\'hi\');\n    /*LINT*/if (_fullName == null) {\n      _fullName = getFullUserName(this);\n    }\n    print(\'hi\');\n  }\n}\n';
            await this.findLint(src,LintNames.prefer_conditional_assignment);
            await this.applyFix(DartFixKind.REPLACE_WITH_CONDITIONAL_ASSIGNMENT);
            this.verifyResult('class Person {\n  String _fullName;\n  void foo() {\n    print(\'hi\');\n    _fullName ??= getFullUserName(this);\n    print(\'hi\');\n  }\n}\n');
        } )());
    }

    test_replaceWithConditionalAssignment_withOneBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Person {\n  String _fullName;\n  void foo() {\n    /*LINT*/if (_fullName == null) {\n      _fullName = getFullUserName(this);\n    }\n  }\n}\n';
            await this.findLint(src,LintNames.prefer_conditional_assignment);
            await this.applyFix(DartFixKind.REPLACE_WITH_CONDITIONAL_ASSIGNMENT);
            this.verifyResult('class Person {\n  String _fullName;\n  void foo() {\n    _fullName ??= getFullUserName(this);\n  }\n}\n');
        } )());
    }

    test_replaceWithConditionalAssignment_withoutBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Person {\n  String _fullName;\n  void foo() {\n    /*LINT*/if (_fullName == null)\n      _fullName = getFullUserName(this);\n  }\n}\n';
            await this.findLint(src,LintNames.prefer_conditional_assignment);
            await this.applyFix(DartFixKind.REPLACE_WITH_CONDITIONAL_ASSIGNMENT);
            this.verifyResult('class Person {\n  String _fullName;\n  void foo() {\n    _fullName ??= getFullUserName(this);\n  }\n}\n');
        } )());
    }

    test_replaceWithConditionalAssignment_withTwoBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Person {\n  String _fullName;\n  void foo() {\n    /*LINT*/if (_fullName == null) {{\n      _fullName = getFullUserName(this);\n    }}\n  }\n}\n';
            await this.findLint(src,LintNames.prefer_conditional_assignment);
            await this.applyFix(DartFixKind.REPLACE_WITH_CONDITIONAL_ASSIGNMENT);
            this.verifyResult('class Person {\n  String _fullName;\n  void foo() {\n    _fullName ??= getFullUserName(this);\n  }\n}\n');
        } )());
    }

    test_replaceWithLiteral_linkedHashMap_withCommentsInGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'import \'dart:collection\';\n\nfinal a = /*LINT*/new LinkedHashMap<int,/*comment*/int>();\n';
            await this.findLint(src,LintNames.prefer_collection_literals);
            await this.applyFix(DartFixKind.REPLACE_WITH_LITERAL);
            this.verifyResult('import \'dart:collection\';\n\nfinal a = <int,/*comment*/int>{};\n');
        } )());
    }

    test_replaceWithLiteral_linkedHashMap_withDynamicGenerics() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'import \'dart:collection\';\n\nfinal a = /*LINT*/new LinkedHashMap<dynamic,dynamic>();\n';
            await this.findLint(src,LintNames.prefer_collection_literals);
            await this.applyFix(DartFixKind.REPLACE_WITH_LITERAL);
            this.verifyResult('import \'dart:collection\';\n\nfinal a = <dynamic,dynamic>{};\n');
        } )());
    }

    test_replaceWithLiteral_linkedHashMap_withGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'import \'dart:collection\';\n\nfinal a = /*LINT*/new LinkedHashMap<int,int>();\n';
            await this.findLint(src,LintNames.prefer_collection_literals);
            await this.applyFix(DartFixKind.REPLACE_WITH_LITERAL);
            this.verifyResult('import \'dart:collection\';\n\nfinal a = <int,int>{};\n');
        } )());
    }

    test_replaceWithLiteral_linkedHashMap_withoutGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'import \'dart:collection\';\n\nfinal a = /*LINT*/new LinkedHashMap();\n';
            await this.findLint(src,LintNames.prefer_collection_literals);
            await this.applyFix(DartFixKind.REPLACE_WITH_LITERAL);
            this.verifyResult('import \'dart:collection\';\n\nfinal a = {};\n');
        } )());
    }

    test_replaceWithLiteral_list_withGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'final a = /*LINT*/new List<int>();\n';
            await this.findLint(src,LintNames.prefer_collection_literals);
            await this.applyFix(DartFixKind.REPLACE_WITH_LITERAL);
            this.verifyResult('final a = <int>[];\n');
        } )());
    }

    test_replaceWithLiteral_list_withoutGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'final a = /*LINT*/new List();\n';
            await this.findLint(src,LintNames.prefer_collection_literals);
            await this.applyFix(DartFixKind.REPLACE_WITH_LITERAL);
            this.verifyResult('final a = [];\n');
        } )());
    }

    test_replaceWithLiteral_map_withGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'final a = /*LINT*/new Map<int,int>();\n';
            await this.findLint(src,LintNames.prefer_collection_literals);
            await this.applyFix(DartFixKind.REPLACE_WITH_LITERAL);
            this.verifyResult('final a = <int,int>{};\n');
        } )());
    }

    test_replaceWithLiteral_map_withoutGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'final a = /*LINT*/new Map();\n';
            await this.findLint(src,LintNames.prefer_collection_literals);
            await this.applyFix(DartFixKind.REPLACE_WITH_LITERAL);
            this.verifyResult('final a = {};\n');
        } )());
    }

    test_replaceWithTearOff_function_oneParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'final x = /*LINT*/(name) {\n  print(name);\n};\n';
            await this.findLint(src,LintNames.unnecessary_lambdas);
            await this.applyFix(DartFixKind.REPLACE_WITH_TEAR_OFF);
            this.verifyResult('final x = print;\n');
        } )());
    }

    test_replaceWithTearOff_function_zeroParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'void foo(){}\nFunction finalVar() {\n  return /*LINT*/() {\n    foo();\n  };\n}\n';
            await this.findLint(src,LintNames.unnecessary_lambdas);
            await this.applyFix(DartFixKind.REPLACE_WITH_TEAR_OFF);
            this.verifyResult('void foo(){}\nFunction finalVar() {\n  return foo;\n}\n');
        } )());
    }

    test_replaceWithTearOff_lambda_asArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'void foo() {\n  bool isPair(int a) => a % 2 == 0;\n  final finalList = <int>[];\n  finalList.where(/*LINT*/(number) =>\n    isPair(number));\n}\n';
            await this.findLint(src,LintNames.unnecessary_lambdas);
            await this.applyFix(DartFixKind.REPLACE_WITH_TEAR_OFF);
            this.verifyResult('void foo() {\n  bool isPair(int a) => a % 2 == 0;\n  final finalList = <int>[];\n  finalList.where(isPair);\n}\n');
        } )());
    }

    test_replaceWithTearOff_method_oneParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'var a = /*LINT*/(x) => finalList.remove(x);\n';
            await this.findLint(src,LintNames.unnecessary_lambdas);
            await this.applyFix(DartFixKind.REPLACE_WITH_TEAR_OFF);
            this.verifyResult('var a = finalList.remove;\n');
        } )());
    }

    test_replaceWithTearOff_method_zeroParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'final Object a;\nFunction finalVar() {\n  return /*LINT*/() {\n    return a.toString();\n  };\n}\n';
            await this.findLint(src,LintNames.unnecessary_lambdas);
            await this.applyFix(DartFixKind.REPLACE_WITH_TEAR_OFF);
            this.verifyResult('final Object a;\nFunction finalVar() {\n  return a.toString;\n}\n');
        } )());
    }

    verifyResult(expectedResult : string) : void {
        expect(this.resultCode,expectedResult);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LintFixTest() {
    }
}

export class properties {
}
