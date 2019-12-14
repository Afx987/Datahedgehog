/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis/notification_highlights_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisNotificationHighlightsTest);
        defineReflectiveTests(HighlightTypeTest);
    });
};
export namespace AnalysisNotificationHighlightsTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'AnalysisNotificationHighlightsTest';
    export type Interface = Omit<AnalysisNotificationHighlightsTest, Constructors>;
}
@DartClass
export class AnalysisNotificationHighlightsTest extends lib3.AbstractAnalysisTest {
    regions : core.DartList<any>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    assertHasRawRegion(type : any,offset : number,length : number) : void {
        for(let region of this.regions) {
            if (op(Op.EQUALS,region.offset,offset) && op(Op.EQUALS,region.length,length) && op(Op.EQUALS,region.type,type)) {
                return;
            }
        }
        fail(`Expected to find (offset=${offset}; length=${length}; type=${type}) in\n` + `${this.regions.join('\n')}`);
    }
    assertHasRegion(type : any,search : string,length? : number) : void {
        length = length || -1;
        let offset : number = this.findOffset(search);
        length = this.findRegionLength(search,length);
        this.assertHasRawRegion(type,offset,length);
    }
    assertHasStringRegion(type : any,str : string) : void {
        let offset : number = this.findOffset(str);
        let length : number = new core.DartString(str).length;
        this.assertHasRawRegion(type,offset,length);
    }
    assertNoRawRegion(type : any,offset : number,length : number) : void {
        for(let region of this.regions) {
            if (op(Op.EQUALS,region.offset,offset) && op(Op.EQUALS,region.length,length) && op(Op.EQUALS,region.type,type)) {
                fail(`Not expected to find (offset=${offset}; length=${length}; type=${type}) in\n` + `${this.regions.join('\n')}`);
            }
        }
    }
    assertNoRegion(type : any,search : string,length? : number) : void {
        length = length || -1;
        let offset : number = this.findOffset(search);
        length = this.findRegionLength(search,length);
        this.assertNoRawRegion(type,offset,length);
    }
    findRegionLength(search : string,length : number) : number {
        if (length == -1) {
            length = 0;
            while (length < new core.DartString(search).length){
                let c : number = new core.DartString(search).codeUnitAt(length);
                if (length == 0 && c == new core.DartString('@').codeUnitAt(0)) {
                    length++;
                    continue;
                }
                if (!(c >= new core.DartString('a').codeUnitAt(0) && c <= new core.DartString('z').codeUnitAt(0) || c >= new core.DartString('A').codeUnitAt(0) && c <= new core.DartString('Z').codeUnitAt(0) || c >= new core.DartString('0').codeUnitAt(0) && c <= new core.DartString('9').codeUnitAt(0))) {
                    break;
                }
                length++;
            }
        }
        return length;
    }
    prepareHighlights() : async.Future<any> {
        this.addAnalysisSubscription(AnalysisService.HIGHLIGHTS,this.testFile);
        return this.waitForTasksFinished();
    }
    processNotification(notification : any) : void {
        if (op(Op.EQUALS,notification.event,ANALYSIS_HIGHLIGHTS)) {
            let params = new bare.createInstance(any,null,notification);
            if (op(Op.EQUALS,params.file,this.testFile)) {
                this.regions = params.regions;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.createProject();
    }
    test_ANNOTATION_hasArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class AAA {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.ANNOTATION,'@AAA(',new core.DartString('@AAA(').length);
            this.assertHasRegion(HighlightRegionType.ANNOTATION,') main',new core.DartString(')').length);
        } )());
    }

    test_ANNOTATION_noArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('const AAA = 42;
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.ANNOTATION,'@AAA');
        } )());
    }

    test_BUILT_IN_abstract() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('abstract class A {};
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'abstract class A');
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'abstract class B');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'abstract = 42');
        } )());
    }

    test_BUILT_IN_as() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import \'dart:math\' as math;
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'as math');
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'as int');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'as = 42');
        } )());
    }

    test_BUILT_IN_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('fa() async {}
            await this.prepareHighlights();
            this.assertHasStringRegion(HighlightRegionType.BUILT_IN,'async');
            this.assertHasStringRegion(HighlightRegionType.BUILT_IN,'async*');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'async = false');
        } )());
    }

    test_BUILT_IN_await() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() async {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'await 42');
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'await for');
        } )());
    }

    test_BUILT_IN_deferred() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import \'dart:math\' deferred as math;
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'deferred as math');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'deferred = 42');
        } )());
    }

    test_BUILT_IN_export() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('export "dart:math";
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'export "dart:');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'export = 42');
        } )());
    }

    test_BUILT_IN_external() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'external A()');
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'external aaa()');
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'external main()');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'external = 42');
        } )());
    }

    test_BUILT_IN_factory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'factory A()');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'factory = 42');
        } )());
    }

    test_BUILT_IN_get() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('get aaa => 1;
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'get aaa =>');
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'get bbb =>');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'get = 42');
        } )());
    }

    test_BUILT_IN_hide() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import \'foo.dart\' hide Foo;
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'hide Foo');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'hide = 42');
        } )());
    }

    test_BUILT_IN_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'implements A {}');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'implements = 42');
        } )());
    }

    test_BUILT_IN_import() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import "foo.dart";
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'import "');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'import = 42');
        } )());
    }

    test_BUILT_IN_library() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library lib;
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'library lib;');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'library = 42');
        } )());
    }

    test_BUILT_IN_native() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A native "A_native" {}
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'native "A_');
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'native "bbb_');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'native = 42');
        } )());
    }

    test_BUILT_IN_on() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'on int');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'on = 42');
        } )());
    }

    test_BUILT_IN_operator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'operator +(');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'operator = 42');
        } )());
    }

    test_BUILT_IN_part() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('part "my_part.dart";
            this.addFile('/project/bin/my_part.dart','part of lib;');
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'part "my_');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'part = 42');
        } )());
    }

    test_BUILT_IN_partOf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('part of lib;
            this._addLibraryForTestPart();
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'part of',new core.DartString('part of').length);
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'part = 1');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'of = 2');
        } )());
    }

    test_BUILT_IN_set() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('set aaa(x) {}
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'set aaa(');
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'set bbb(');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'set = 42');
        } )());
    }

    test_BUILT_IN_show() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import \'foo.dart\' show Foo;
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'show Foo');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'show = 42');
        } )());
    }

    test_BUILT_IN_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'static aaa;');
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'static bbb()');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'static = 42');
        } )());
    }

    test_BUILT_IN_sync() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('fa() sync {}
            await this.prepareHighlights();
            this.assertHasStringRegion(HighlightRegionType.BUILT_IN,'sync');
            this.assertHasStringRegion(HighlightRegionType.BUILT_IN,'sync*');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'sync = false');
        } )());
    }

    test_BUILT_IN_typedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('typedef A();
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'typedef A();');
            this.assertNoRegion(HighlightRegionType.BUILT_IN,'typedef = 42');
        } )());
    }

    test_BUILT_IN_yield() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() async* {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.BUILT_IN,'yield 42');
        } )());
    }

    test_BUILT_IN_yieldStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() async* {
            await this.prepareHighlights();
            this.assertHasStringRegion(HighlightRegionType.BUILT_IN,'yield*');
        } )());
    }

    test_CLASS() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class AAA {}
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.CLASS,'AAA {}');
            this.assertHasRegion(HighlightRegionType.CLASS,'AAA aaa');
        } )());
    }

    test_CLASS_notDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('dynamic f() {}
            await this.prepareHighlights();
            this.assertNoRegion(HighlightRegionType.CLASS,'dynamic f()');
        } )());
    }

    test_CLASS_notVoid() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('void f() {}
            await this.prepareHighlights();
            this.assertNoRegion(HighlightRegionType.CLASS,'void f()');
        } )());
    }

    test_COMMENT() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('/**
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.COMMENT_DOCUMENTATION,'/**',32);
            this.assertHasRegion(HighlightRegionType.COMMENT_END_OF_LINE,'//',22);
            this.assertHasRegion(HighlightRegionType.COMMENT_BLOCK,'/* b',19);
        } )());
    }

    test_CONSTRUCTOR() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class AAA {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.CONSTRUCTOR,'name(p)');
            this.assertHasRegion(HighlightRegionType.CONSTRUCTOR,'name(42)');
            this.assertNoRegion(HighlightRegionType.CONSTRUCTOR,'AAA() {}');
            this.assertNoRegion(HighlightRegionType.CONSTRUCTOR,'AAA();');
        } )());
    }

    test_DIRECTIVE() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library lib;
            await this.prepareHighlights();
            this.assertHasStringRegion(HighlightRegionType.DIRECTIVE,"library lib;");
            this.assertHasStringRegion(HighlightRegionType.DIRECTIVE,"import 'dart:math';");
            this.assertHasStringRegion(HighlightRegionType.DIRECTIVE,"export 'dart:math';");
            this.assertHasStringRegion(HighlightRegionType.DIRECTIVE,"part 'part.dart';");
        } )());
    }

    test_DIRECTIVE_partOf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('part of lib;
            this._addLibraryForTestPart();
            await this.prepareHighlights();
            this.assertHasStringRegion(HighlightRegionType.DIRECTIVE,"part of lib;");
        } )());
    }

    test_DYNAMIC_TYPE() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('f() {}
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.DYNAMIC_TYPE,'p)');
            this.assertHasRegion(HighlightRegionType.DYNAMIC_TYPE,'v1 =');
            this.assertNoRegion(HighlightRegionType.DYNAMIC_TYPE,'v2;');
            this.assertNoRegion(HighlightRegionType.DYNAMIC_TYPE,'v3 =');
        } )());
    }

    test_ENUM() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('enum MyEnum {A, B, C}
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.ENUM,'MyEnum {');
            this.assertHasRegion(HighlightRegionType.ENUM,'MyEnum value;');
        } )());
    }

    test_ENUM_CONSTANT() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('enum MyEnum {AAA, BBB}
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.ENUM_CONSTANT,'AAA, ');
            this.assertHasRegion(HighlightRegionType.ENUM_CONSTANT,'BBB}');
            this.assertHasRegion(HighlightRegionType.ENUM_CONSTANT,'AAA);');
            this.assertHasRegion(HighlightRegionType.ENUM_CONSTANT,'BBB);');
        } )());
    }

    test_FIELD() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.FIELD,'aaa = 1');
            this.assertHasRegion(HighlightRegionType.FIELD,'bbb = 2');
            this.assertHasRegion(HighlightRegionType.FIELD,'bbb = 3');
            this.assertHasRegion(HighlightRegionType.FIELD,'aaa = 4');
            this.assertHasRegion(HighlightRegionType.FIELD,'bbb = 5');
        } )());
    }

    test_FIELD_STATIC() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.FIELD_STATIC,'aaa = 1');
            this.assertHasRegion(HighlightRegionType.FIELD_STATIC,'aaa = 2');
            this.assertHasRegion(HighlightRegionType.FIELD_STATIC,'bbb;');
            this.assertHasRegion(HighlightRegionType.FIELD_STATIC,'ccc = 3');
        } )());
    }

    test_FUNCTION() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('fff(p) {}
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.FUNCTION_DECLARATION,'fff(p) {}');
            this.assertHasRegion(HighlightRegionType.FUNCTION,'fff(42)');
        } )());
    }

    test_FUNCTION_TYPE_ALIAS() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('typedef FFF(p);
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.FUNCTION_TYPE_ALIAS,'FFF(p)');
            this.assertHasRegion(HighlightRegionType.FUNCTION_TYPE_ALIAS,'FFF fff)');
        } )());
    }

    test_GETTER_DECLARATION() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('get aaa => null;
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.GETTER_DECLARATION,'aaa => null');
            this.assertHasRegion(HighlightRegionType.GETTER_DECLARATION,'bbb => null');
            this.assertHasRegion(HighlightRegionType.TOP_LEVEL_VARIABLE,'aaa;');
            this.assertHasRegion(HighlightRegionType.FIELD,'bbb;');
        } )());
    }

    test_IDENTIFIER_DEFAULT() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.IDENTIFIER_DEFAULT,'aaa = 42');
            this.assertHasRegion(HighlightRegionType.IDENTIFIER_DEFAULT,'bbb(84)');
            this.assertHasRegion(HighlightRegionType.IDENTIFIER_DEFAULT,'CCC ccc');
        } )());
    }

    test_IMPORT_PREFIX() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import \'dart:math\' as ma;
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.IMPORT_PREFIX,'ma;');
            this.assertHasRegion(HighlightRegionType.IMPORT_PREFIX,'ma.max');
        } )());
    }

    test_KEYWORD() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.KEYWORD,'assert(true)');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'for (;;)');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'for (var v4 in');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'break;');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'case 0:');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'catch (e) {}');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'class A {}');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'const v1');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'continue;');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'default:');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'do {} while');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'if (true)');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'false;');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'final v3 =');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'finally {}');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'in []');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'is int');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'new A();');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'rethrow;');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'return this');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'super();');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'switch (0)');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'this;');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'true;');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'try {');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'while (true) {}');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'while (true);');
            this.assertHasRegion(HighlightRegionType.KEYWORD,'with A;');
        } )());
    }

    test_KEYWORD_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('void main() {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.KEYWORD,'void main()');
        } )());
    }

    test_LABEL() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.LABEL,'myLabel:');
            this.assertHasRegion(HighlightRegionType.LABEL,'myLabel;');
        } )());
    }

    test_LITERAL_BOOLEAN() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('var V = true;');
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.LITERAL_BOOLEAN,'true;');
        } )());
    }

    test_LITERAL_DOUBLE() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('var V = 4.2;');
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.LITERAL_DOUBLE,'4.2;',new core.DartString('4.2').length);
        } )());
    }

    test_LITERAL_INTEGER() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('var V = 42;');
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.LITERAL_INTEGER,'42;');
        } )());
    }

    test_LITERAL_LIST() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('var V = <int>[1, 2, 3];');
            await this.prepareHighlights();
            this.assertHasStringRegion(HighlightRegionType.LITERAL_LIST,'<int>[1, 2, 3]');
        } )());
    }

    test_LITERAL_MAP() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile("var V = const <int, String>{1: 'a', 2: 'b', 3: 'c'};");
            await this.prepareHighlights();
            this.assertHasStringRegion(HighlightRegionType.LITERAL_MAP,"const <int, String>{1: 'a', 2: 'b', 3: 'c'}");
        } )());
    }

    test_LITERAL_STRING() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('var V = "abc";');
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.LITERAL_STRING,'"abc";',new core.DartString('"abc"').length);
        } )());
    }

    test_LOCAL_VARIABLE() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.LOCAL_VARIABLE_DECLARATION,'vvv = 0');
            this.assertHasRegion(HighlightRegionType.LOCAL_VARIABLE,'vvv;');
            this.assertHasRegion(HighlightRegionType.LOCAL_VARIABLE,'vvv = 1;');
        } )());
    }

    test_METHOD() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.METHOD_DECLARATION,'aaa() {}');
            this.assertHasRegion(HighlightRegionType.METHOD_DECLARATION_STATIC,'bbb() {}');
            this.assertHasRegion(HighlightRegionType.METHOD,'aaa();');
            this.assertHasRegion(HighlightRegionType.METHOD,'aaa;');
            this.assertHasRegion(HighlightRegionType.METHOD_STATIC,'bbb();');
            this.assertHasRegion(HighlightRegionType.METHOD_STATIC,'bbb;');
        } )());
    }

    test_METHOD_bestType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main(p) {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.METHOD,'add(null)');
        } )());
    }

    test_PARAMETER() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main(int p) {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.PARAMETER,'p) {');
            this.assertHasRegion(HighlightRegionType.PARAMETER,'p;');
            this.assertHasRegion(HighlightRegionType.PARAMETER,'p = 42');
        } )());
    }

    test_SETTER_DECLARATION() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('set aaa(x) {}
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.SETTER_DECLARATION,'aaa(x)');
            this.assertHasRegion(HighlightRegionType.SETTER_DECLARATION,'bbb(x)');
            this.assertHasRegion(HighlightRegionType.TOP_LEVEL_VARIABLE,'aaa = 1');
            this.assertHasRegion(HighlightRegionType.FIELD,'bbb = 2');
        } )());
    }

    test_TOP_LEVEL_VARIABLE() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('const VVV = 0;
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.TOP_LEVEL_VARIABLE,'VVV = 0');
            this.assertHasRegion(HighlightRegionType.TOP_LEVEL_VARIABLE,'VVV // annotation');
            this.assertHasRegion(HighlightRegionType.TOP_LEVEL_VARIABLE,'VVV);');
            this.assertHasRegion(HighlightRegionType.TOP_LEVEL_VARIABLE,'VVV = 1');
        } )());
    }

    test_TYPE_NAME_DYNAMIC() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('dynamic main() {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.TYPE_NAME_DYNAMIC,'dynamic main()');
            this.assertNoRegion(HighlightRegionType.IDENTIFIER_DEFAULT,'dynamic main()');
            this.assertNoRegion(HighlightRegionType.TYPE_NAME_DYNAMIC,'dynamic = 42');
        } )());
    }

    test_TYPE_PARAMETER() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A<T> {
            await this.prepareHighlights();
            this.assertHasRegion(HighlightRegionType.TYPE_PARAMETER,'T> {');
            this.assertHasRegion(HighlightRegionType.TYPE_PARAMETER,'T fff;');
            this.assertHasRegion(HighlightRegionType.TYPE_PARAMETER,'T mmm(');
            this.assertHasRegion(HighlightRegionType.TYPE_PARAMETER,'T p)');
        } )());
    }

    _addLibraryForTestPart() : void {
        this.addFile(`${this.testFolder}/my_lib.dart`,'library lib;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisNotificationHighlightsTest() {
    }
}

export namespace HighlightTypeTest {
    export type Constructors = 'HighlightTypeTest';
    export type Interface = Omit<HighlightTypeTest, Constructors>;
}
@DartClass
export class HighlightTypeTest {
    test_constructor() : void {
        expect(HighlightRegionType.CLASS,new bare.createInstance(any,null,HighlightRegionType.CLASS.name));
    }
    test_toString() : void {
        expect(HighlightRegionType.CLASS.toString(),'HighlightRegionType.CLASS');
    }
    test_valueOf_unknown() : void {
        expect(() =>  {
            new bare.createInstance(any,null,'no-such-type');
        },throws);
    }
    constructor() {
    }
    @defaultConstructor
    HighlightTypeTest() {
    }
}

export class properties {
}