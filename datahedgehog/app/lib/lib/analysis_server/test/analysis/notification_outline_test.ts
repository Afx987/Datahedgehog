/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis/notification_outline_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(_AnalysisNotificationOutlineTest);
    });
};
export namespace _AnalysisNotificationOutlineTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | '_AnalysisNotificationOutlineTest';
    export type Interface = Omit<_AnalysisNotificationOutlineTest, Constructors>;
}
@DartClass
export class _AnalysisNotificationOutlineTest extends lib3.AbstractAnalysisTest {
    fileKind : any;

    libraryName : string;

    outline : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    prepareOutline() : async.Future<any> {
        this.addAnalysisSubscription(AnalysisService.OUTLINE,this.testFile);
        return this.waitForTasksFinished();
    }
    processNotification(notification : any) : void {
        if (op(Op.EQUALS,notification.event,ANALYSIS_OUTLINE)) {
            let params = new bare.createInstance(any,null,notification);
            if (op(Op.EQUALS,params.file,this.testFile)) {
                this.fileKind = params.kind;
                this.libraryName = params.libraryName;
                this.outline = params.outline;
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
    test_afterAnalysis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class AAA {\n}\nclass BBB {\n}\n');
            await this.waitForTasksFinished();
            expect(this.outline,isNull);
            await this.prepareOutline();
            let unitOutline : any = this.outline;
            let outlines : core.DartList<any> = unitOutline.children;
            expect(outlines,hasLength(2));
        } )());
    }

    test_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A<K, V> {\n  int fa, fb;\n  String fc;\n  A(int i, String s);\n  A.name(num p);\n  A._privateName(num p);\n  static String ma(int pa) => null;\n  _mb(int pb);\n  String get propA => null;\n  set propB(int v) {}\n}\nclass B {\n  B(int p);\n}");\n');
            await this.prepareOutline();
            let unitOutline : any = this.outline;
            let topOutlines : core.DartList<any> = unitOutline.children;
            expect(topOutlines,hasLength(2));
            {
                let outline_A : any = topOutlines[0];
                let element_A : any = outline_A.element;
                expect(element_A.kind,ElementKind.CLASS);
                expect(element_A.name,"A");
                expect(element_A.typeParameters,"<K, V>");
                {
                    let location : any = element_A.location;
                    expect(location.offset,new core.DartString(this.testCode).indexOf("A<K, V> {"));
                    expect(location.length,1);
                }
                expect(element_A.parameters,null);
                expect(element_A.returnType,null);
                let outlines_A : core.DartList<any> = outline_A.children;
                expect(outlines_A,hasLength(10));
                {
                    let outline : any = outlines_A[0];
                    let element : any = outline.element;
                    expect(element.kind,ElementKind.FIELD);
                    expect(element.name,"fa");
                    expect(element.parameters,isNull);
                    expect(element.returnType,"int");
                }
                {
                    let outline : any = outlines_A[1];
                    let element : any = outline.element;
                    expect(element.kind,ElementKind.FIELD);
                    expect(element.name,"fb");
                    expect(element.parameters,isNull);
                    expect(element.returnType,"int");
                }
                {
                    let outline : any = outlines_A[2];
                    let element : any = outline.element;
                    expect(element.kind,ElementKind.FIELD);
                    expect(element.name,"fc");
                    expect(element.parameters,isNull);
                    expect(element.returnType,"String");
                }
                {
                    let outline : any = outlines_A[3];
                    let element : any = outline.element;
                    expect(element.kind,ElementKind.CONSTRUCTOR);
                    expect(element.name,"A");
                    {
                        let location : any = element.location;
                        expect(location.offset,new core.DartString(this.testCode).indexOf("A(int i, String s);"));
                        expect(location.length,new core.DartString("A").length);
                    }
                    expect(element.parameters,"(int i, String s)");
                    expect(element.returnType,isNull);
                    expect(element.isAbstract,isFalse);
                    expect(element.isStatic,isFalse);
                }
                {
                    let outline : any = outlines_A[4];
                    let element : any = outline.element;
                    expect(element.kind,ElementKind.CONSTRUCTOR);
                    expect(element.name,"A.name");
                    {
                        let location : any = element.location;
                        expect(location.offset,new core.DartString(this.testCode).indexOf("name(num p);"));
                        expect(location.length,new core.DartString("name").length);
                    }
                    expect(element.parameters,"(num p)");
                    expect(element.returnType,isNull);
                    expect(element.isAbstract,isFalse);
                    expect(element.isStatic,isFalse);
                }
                {
                    let outline : any = outlines_A[5];
                    let element : any = outline.element;
                    expect(element.kind,ElementKind.CONSTRUCTOR);
                    expect(element.name,"A._privateName");
                    {
                        let location : any = element.location;
                        expect(location.offset,new core.DartString(this.testCode).indexOf("_privateName(num p);"));
                        expect(location.length,new core.DartString("_privateName").length);
                    }
                    expect(element.parameters,"(num p)");
                    expect(element.returnType,isNull);
                    expect(element.isAbstract,isFalse);
                    expect(element.isStatic,isFalse);
                }
                {
                    let outline : any = outlines_A[6];
                    let element : any = outline.element;
                    expect(element.kind,ElementKind.METHOD);
                    expect(element.name,"ma");
                    {
                        let location : any = element.location;
                        expect(location.offset,new core.DartString(this.testCode).indexOf("ma(int pa) => null;"));
                        expect(location.length,new core.DartString("ma").length);
                    }
                    expect(element.parameters,"(int pa)");
                    expect(element.returnType,"String");
                    expect(element.isAbstract,isFalse);
                    expect(element.isStatic,isTrue);
                }
                {
                    let outline : any = outlines_A[7];
                    let element : any = outline.element;
                    expect(element.kind,ElementKind.METHOD);
                    expect(element.name,"_mb");
                    {
                        let location : any = element.location;
                        expect(location.offset,new core.DartString(this.testCode).indexOf("_mb(int pb);"));
                        expect(location.length,new core.DartString("_mb").length);
                    }
                    expect(element.parameters,"(int pb)");
                    expect(element.returnType,"");
                    expect(element.isAbstract,isTrue);
                    expect(element.isStatic,isFalse);
                }
                {
                    let outline : any = outlines_A[8];
                    let element : any = outline.element;
                    expect(element.kind,ElementKind.GETTER);
                    expect(element.name,"propA");
                    {
                        let location : any = element.location;
                        expect(location.offset,new core.DartString(this.testCode).indexOf("propA => null;"));
                        expect(location.length,new core.DartString("propA").length);
                    }
                    expect(element.parameters,isNull);
                    expect(element.returnType,"String");
                }
                {
                    let outline : any = outlines_A[9];
                    let element : any = outline.element;
                    expect(element.kind,ElementKind.SETTER);
                    expect(element.name,"propB");
                    {
                        let location : any = element.location;
                        expect(location.offset,new core.DartString(this.testCode).indexOf("propB(int v) {}"));
                        expect(location.length,new core.DartString("propB").length);
                    }
                    expect(element.parameters,"(int v)");
                    expect(element.returnType,"");
                }
            }
            {
                let outline_B : any = topOutlines[1];
                let element_B : any = outline_B.element;
                expect(element_B.kind,ElementKind.CLASS);
                expect(element_B.name,"B");
                expect(element_B.typeParameters,isNull);
                {
                    let location : any = element_B.location;
                    expect(location.offset,new core.DartString(this.testCode).indexOf("B {"));
                    expect(location.length,1);
                }
                expect(element_B.parameters,null);
                expect(element_B.returnType,null);
                let outlines_B : core.DartList<any> = outline_B.children;
                expect(outlines_B,hasLength(1));
                {
                    let outline : any = outlines_B[0];
                    let element : any = outline.element;
                    expect(element.kind,ElementKind.CONSTRUCTOR);
                    expect(element.name,"B");
                    {
                        let location : any = element.location;
                        expect(location.offset,new core.DartString(this.testCode).indexOf("B(int p);"));
                        expect(location.length,new core.DartString("B").length);
                    }
                    expect(element.parameters,"(int p)");
                    expect(element.returnType,isNull);
                }
            }
        } )());
    }

    test_enum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('enum MyEnum {\n  A, B, C\n}\n');
            await this.prepareOutline();
            let unitOutline : any = this.outline;
            let topOutlines : core.DartList<any> = unitOutline.children;
            expect(topOutlines,hasLength(1));
            {
                let outline_MyEnum : any = topOutlines[0];
                let element_MyEnum : any = outline_MyEnum.element;
                expect(element_MyEnum.kind,ElementKind.ENUM);
                expect(element_MyEnum.name,"MyEnum");
                {
                    let location : any = element_MyEnum.location;
                    expect(location.offset,new core.DartString(this.testCode).indexOf("MyEnum {"));
                    expect(location.length,new core.DartString('MyEnum').length);
                }
                expect(element_MyEnum.parameters,null);
                expect(element_MyEnum.returnType,null);
                let outlines_MyEnum : core.DartList<any> = outline_MyEnum.children;
                expect(outlines_MyEnum,hasLength(3));
                this._isEnumConstant(outlines_MyEnum[0],'A');
                this._isEnumConstant(outlines_MyEnum[1],'B');
                this._isEnumConstant(outlines_MyEnum[2],'C');
            }
        } )());
    }

    test_invalidGetterInConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  A() {\n    get badGetter {\n      const int CONST = 0;\n    }\n  }\n}\n');
            await this.prepareOutline();
            expect(this.outline,isNotNull);
        } )());
    }

    test_libraryName_hasLibraryDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library my.lib;\n');
            await this.prepareOutline();
            expect(this.fileKind,FileKind.LIBRARY);
            expect(this.libraryName,'my.lib');
        } )());
    }

    test_libraryName_hasLibraryPartOfDirectives() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('part of lib.in.part.of;\nlibrary my.lib;\n');
            await this.prepareOutline();
            expect(this.fileKind,FileKind.LIBRARY);
            expect(this.libraryName,'my.lib');
        } )());
    }

    test_libraryName_hasPartOfDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('part of my.lib;\n');
            await this.prepareOutline();
            expect(this.fileKind,FileKind.PART);
            expect(this.libraryName,'my.lib');
        } )());
    }

    test_libraryName_noDirectives() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\n');
            await this.prepareOutline();
            expect(this.fileKind,FileKind.LIBRARY);
            expect(this.libraryName,isNull);
        } )());
    }

    test_localFunctions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  A() {\n    int local_A() {}\n  }\n  m() {\n    local_m() {}\n  }\n}\nf() {\n  local_f1(int i) {}\n  local_f2(String s) {\n    local_f21(int p) {}\n  }\n}\n');
            await this.prepareOutline();
            let unitOutline : any = this.outline;
            let topOutlines : core.DartList<any> = unitOutline.children;
            expect(topOutlines,hasLength(2));
            {
                let outline_A : any = topOutlines[0];
                let element_A : any = outline_A.element;
                expect(element_A.kind,ElementKind.CLASS);
                expect(element_A.name,"A");
                {
                    let location : any = element_A.location;
                    expect(location.offset,new core.DartString(this.testCode).indexOf("A {"));
                    expect(location.length,new core.DartString("A").length);
                }
                expect(element_A.parameters,null);
                expect(element_A.returnType,null);
                let outlines_A : core.DartList<any> = outline_A.children;
                expect(outlines_A,hasLength(2));
                {
                    let constructorOutline : any = outlines_A[0];
                    let constructorElement : any = constructorOutline.element;
                    expect(constructorElement.kind,ElementKind.CONSTRUCTOR);
                    expect(constructorElement.name,"A");
                    {
                        let location : any = constructorElement.location;
                        expect(location.offset,new core.DartString(this.testCode).indexOf("A() {"));
                        expect(location.length,new core.DartString("A").length);
                    }
                    expect(constructorElement.parameters,"()");
                    expect(constructorElement.returnType,isNull);
                    let outlines_constructor : core.DartList<any> = constructorOutline.children;
                    expect(outlines_constructor,hasLength(1));
                    {
                        let outline : any = outlines_constructor[0];
                        let element : any = outline.element;
                        expect(element.kind,ElementKind.FUNCTION);
                        expect(element.name,"local_A");
                        {
                            let location : any = element.location;
                            expect(location.offset,new core.DartString(this.testCode).indexOf("local_A() {}"));
                            expect(location.length,new core.DartString("local_A").length);
                        }
                        expect(element.parameters,"()");
                        expect(element.returnType,"int");
                    }
                }
                {
                    let outline_m : any = outlines_A[1];
                    let element_m : any = outline_m.element;
                    expect(element_m.kind,ElementKind.METHOD);
                    expect(element_m.name,"m");
                    {
                        let location : any = element_m.location;
                        expect(location.offset,new core.DartString(this.testCode).indexOf("m() {"));
                        expect(location.length,new core.DartString("m").length);
                    }
                    expect(element_m.parameters,"()");
                    expect(element_m.returnType,"");
                    let methodChildren : core.DartList<any> = outline_m.children;
                    expect(methodChildren,hasLength(1));
                    {
                        let outline : any = methodChildren[0];
                        let element : any = outline.element;
                        expect(element.kind,ElementKind.FUNCTION);
                        expect(element.name,"local_m");
                        {
                            let location : any = element.location;
                            expect(location.offset,new core.DartString(this.testCode).indexOf("local_m() {}"));
                            expect(location.length,new core.DartString("local_m").length);
                        }
                        expect(element.parameters,"()");
                        expect(element.returnType,"");
                    }
                }
            }
            {
                let outline_f : any = topOutlines[1];
                let element_f : any = outline_f.element;
                expect(element_f.kind,ElementKind.FUNCTION);
                expect(element_f.name,"f");
                {
                    let location : any = element_f.location;
                    expect(location.offset,new core.DartString(this.testCode).indexOf("f() {"));
                    expect(location.length,new core.DartString("f").length);
                }
                expect(element_f.parameters,"()");
                expect(element_f.returnType,"");
                let outlines_f : core.DartList<any> = outline_f.children;
                expect(outlines_f,hasLength(2));
                {
                    let outline_f1 : any = outlines_f[0];
                    let element_f1 : any = outline_f1.element;
                    expect(element_f1.kind,ElementKind.FUNCTION);
                    expect(element_f1.name,"local_f1");
                    {
                        let location : any = element_f1.location;
                        expect(location.offset,new core.DartString(this.testCode).indexOf("local_f1(int i) {}"));
                        expect(location.length,new core.DartString("local_f1").length);
                    }
                    expect(element_f1.parameters,"(int i)");
                    expect(element_f1.returnType,"");
                }
                {
                    let outline_f2 : any = outlines_f[1];
                    let element_f2 : any = outline_f2.element;
                    expect(element_f2.kind,ElementKind.FUNCTION);
                    expect(element_f2.name,"local_f2");
                    {
                        let location : any = element_f2.location;
                        expect(location.offset,new core.DartString(this.testCode).indexOf("local_f2(String s) {"));
                        expect(location.length,new core.DartString("local_f2").length);
                    }
                    expect(element_f2.parameters,"(String s)");
                    expect(element_f2.returnType,"");
                    let outlines_f2 : core.DartList<any> = outline_f2.children;
                    expect(outlines_f2,hasLength(1));
                    {
                        let outline_f21 : any = outlines_f2[0];
                        let element_f21 : any = outline_f21.element;
                        expect(element_f21.kind,ElementKind.FUNCTION);
                        expect(element_f21.name,"local_f21");
                        {
                            let location : any = element_f21.location;
                            expect(location.offset,new core.DartString(this.testCode).indexOf("local_f21(int p) {"));
                            expect(location.length,new core.DartString("local_f21").length);
                        }
                        expect(element_f21.parameters,"(int p)");
                        expect(element_f21.returnType,"");
                    }
                }
            }
        } )());
    }

    test_sourceRange_inClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A { // leftA\n  int methodA() {} // endA\n  int methodB() {} // endB\n}\n');
            await this.prepareOutline();
            let unitOutline : any = this.outline;
            let outlines : core.DartList<any> = op(Op.INDEX,unitOutline.children,0).children;
            expect(outlines,hasLength(2));
            {
                let outline : any = outlines[0];
                let element : any = outline.element;
                expect(element.kind,ElementKind.METHOD);
                expect(element.name,"methodA");
                {
                    let offset : number = new core.DartString(this.testCode).indexOf(" // leftA");
                    let end : number = new core.DartString(this.testCode).indexOf(" // endA");
                    expect(outline.offset,offset);
                    expect(outline.length,end - offset);
                }
            }
            {
                let outline : any = outlines[1];
                let element : any = outline.element;
                expect(element.kind,ElementKind.METHOD);
                expect(element.name,"methodB");
                {
                    let offset : number = new core.DartString(this.testCode).indexOf(" // endA");
                    let end : number = new core.DartString(this.testCode).indexOf(" // endB");
                    expect(outline.offset,offset);
                    expect(outline.length,end - offset);
                }
            }
        } )());
    }

    test_sourceRange_inClass_inVariableList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A { // leftA\n  int fieldA, fieldB, fieldC; // marker\n  int fieldD; // marker2\n}\n');
            await this.prepareOutline();
            let unitOutline : any = this.outline;
            let outlines : core.DartList<any> = op(Op.INDEX,unitOutline.children,0).children;
            expect(outlines,hasLength(4));
            {
                let outline : any = outlines[0];
                let element : any = outline.element;
                expect(element.kind,ElementKind.FIELD);
                expect(element.name,"fieldA");
                {
                    let offset : number = new core.DartString(this.testCode).indexOf(" // leftA");
                    let end : number = new core.DartString(this.testCode).indexOf(", fieldB");
                    expect(outline.offset,offset);
                    expect(outline.length,end - offset);
                }
            }
            {
                let outline : any = outlines[1];
                let element : any = outline.element;
                expect(element.kind,ElementKind.FIELD);
                expect(element.name,"fieldB");
                {
                    let offset : number = new core.DartString(this.testCode).indexOf(", fieldB");
                    let end : number = new core.DartString(this.testCode).indexOf(", fieldC");
                    expect(outline.offset,offset);
                    expect(outline.length,end - offset);
                }
            }
            {
                let outline : any = outlines[2];
                let element : any = outline.element;
                expect(element.kind,ElementKind.FIELD);
                expect(element.name,"fieldC");
                {
                    let offset : number = new core.DartString(this.testCode).indexOf(", fieldC");
                    let end : number = new core.DartString(this.testCode).indexOf(" // marker");
                    expect(outline.offset,offset);
                    expect(outline.length,end - offset);
                }
            }
            {
                let outline : any = outlines[3];
                let element : any = outline.element;
                expect(element.kind,ElementKind.FIELD);
                expect(element.name,"fieldD");
                {
                    let offset : number = new core.DartString(this.testCode).indexOf(" // marker");
                    let end : number = new core.DartString(this.testCode).indexOf(" // marker2");
                    expect(outline.offset,offset);
                    expect(outline.length,end - offset);
                }
            }
        } )());
    }

    test_sourceRange_inUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library lib;\n/// My first class.\nclass A {\n} // endA\nclass B {\n} // endB\n');
            await this.prepareOutline();
            let unitOutline : any = this.outline;
            let topOutlines : core.DartList<any> = unitOutline.children;
            expect(topOutlines,hasLength(2));
            {
                let outline : any = topOutlines[0];
                let element : any = outline.element;
                expect(element.kind,ElementKind.CLASS);
                expect(element.name,"A");
                {
                    let offset : number = new core.DartString(this.testCode).indexOf("/// My first class.");
                    let end : number = new core.DartString(this.testCode).indexOf(" // endA");
                    expect(outline.offset,offset);
                    expect(outline.length,end - offset);
                }
            }
            {
                let outline : any = topOutlines[1];
                let element : any = outline.element;
                expect(element.kind,ElementKind.CLASS);
                expect(element.name,"B");
                {
                    let offset : number = new core.DartString(this.testCode).indexOf(" // endA");
                    let end : number = new core.DartString(this.testCode).indexOf(" // endB");
                    expect(outline.offset,offset);
                    expect(outline.length,end - offset);
                }
            }
        } )());
    }

    test_sourceRange_inUnit_inVariableList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('int fieldA, fieldB, fieldC; // marker\nint fieldD; // marker2\n');
            await this.prepareOutline();
            let unitOutline : any = this.outline;
            let outlines : core.DartList<any> = unitOutline.children;
            expect(outlines,hasLength(4));
            {
                let outline : any = outlines[0];
                let element : any = outline.element;
                expect(element.kind,ElementKind.TOP_LEVEL_VARIABLE);
                expect(element.name,"fieldA");
                {
                    let offset : number = 0;
                    let end : number = new core.DartString(this.testCode).indexOf(", fieldB");
                    expect(outline.offset,offset);
                    expect(outline.length,end - offset);
                }
            }
            {
                let outline : any = outlines[1];
                let element : any = outline.element;
                expect(element.kind,ElementKind.TOP_LEVEL_VARIABLE);
                expect(element.name,"fieldB");
                {
                    let offset : number = new core.DartString(this.testCode).indexOf(", fieldB");
                    let end : number = new core.DartString(this.testCode).indexOf(", fieldC");
                    expect(outline.offset,offset);
                    expect(outline.length,end - offset);
                }
            }
            {
                let outline : any = outlines[2];
                let element : any = outline.element;
                expect(element.kind,ElementKind.TOP_LEVEL_VARIABLE);
                expect(element.name,"fieldC");
                {
                    let offset : number = new core.DartString(this.testCode).indexOf(", fieldC");
                    let end : number = new core.DartString(this.testCode).indexOf(" // marker");
                    expect(outline.offset,offset);
                    expect(outline.length,end - offset);
                }
            }
            {
                let outline : any = outlines[3];
                let element : any = outline.element;
                expect(element.kind,ElementKind.TOP_LEVEL_VARIABLE);
                expect(element.name,"fieldD");
                {
                    let offset : number = new core.DartString(this.testCode).indexOf(" // marker");
                    let end : number = new core.DartString(this.testCode).indexOf(" // marker2");
                    expect(outline.offset,offset);
                    expect(outline.length,end - offset);
                }
            }
        } )());
    }

    test_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('typedef String FTA<K, V>(int i, String s);\ntypedef FTB(int p);\nclass A<T> {}\nclass B {}\nclass CTA<T> = A<T> with B;\nclass CTB = A with B;\nString fA(int i, String s) => null;\nfB(int p) => null;\nString get propA => null;\nset propB(int v) {}\n');
            await this.prepareOutline();
            let unitOutline : any = this.outline;
            let topOutlines : core.DartList<any> = unitOutline.children;
            expect(topOutlines,hasLength(10));
            {
                let outline : any = topOutlines[0];
                let element : any = outline.element;
                expect(element.kind,ElementKind.FUNCTION_TYPE_ALIAS);
                expect(element.name,"FTA");
                expect(element.typeParameters,"<K, V>");
                {
                    let location : any = element.location;
                    expect(location.offset,new core.DartString(this.testCode).indexOf("FTA<K, V>("));
                    expect(location.length,new core.DartString("FTA").length);
                }
                expect(element.parameters,"(int i, String s)");
                expect(element.returnType,"String");
            }
            {
                let outline : any = topOutlines[1];
                let element : any = outline.element;
                expect(element.kind,ElementKind.FUNCTION_TYPE_ALIAS);
                expect(element.name,"FTB");
                expect(element.typeParameters,isNull);
                {
                    let location : any = element.location;
                    expect(location.offset,new core.DartString(this.testCode).indexOf("FTB("));
                    expect(location.length,new core.DartString("FTB").length);
                }
                expect(element.parameters,"(int p)");
                expect(element.returnType,"");
            }
            {
                let outline : any = topOutlines[4];
                let element : any = outline.element;
                expect(element.kind,ElementKind.CLASS_TYPE_ALIAS);
                expect(element.name,"CTA");
                expect(element.typeParameters,'<T>');
                {
                    let location : any = element.location;
                    expect(location.offset,new core.DartString(this.testCode).indexOf("CTA<T> ="));
                    expect(location.length,new core.DartString("CTA").length);
                }
                expect(element.parameters,isNull);
                expect(element.returnType,isNull);
            }
            {
                let outline : any = topOutlines[5];
                let element : any = outline.element;
                expect(element.kind,ElementKind.CLASS_TYPE_ALIAS);
                expect(element.name,'CTB');
                expect(element.typeParameters,isNull);
                expect(element.returnType,isNull);
            }
            {
                let outline : any = topOutlines[6];
                let element : any = outline.element;
                expect(element.kind,ElementKind.FUNCTION);
                expect(element.name,"fA");
                {
                    let location : any = element.location;
                    expect(location.offset,new core.DartString(this.testCode).indexOf("fA("));
                    expect(location.length,new core.DartString("fA").length);
                }
                expect(element.parameters,"(int i, String s)");
                expect(element.returnType,"String");
            }
            {
                let outline : any = topOutlines[7];
                let element : any = outline.element;
                expect(element.kind,ElementKind.FUNCTION);
                expect(element.name,"fB");
                {
                    let location : any = element.location;
                    expect(location.offset,new core.DartString(this.testCode).indexOf("fB("));
                    expect(location.length,new core.DartString("fB").length);
                }
                expect(element.parameters,"(int p)");
                expect(element.returnType,"");
            }
            {
                let outline : any = topOutlines[8];
                let element : any = outline.element;
                expect(element.kind,ElementKind.GETTER);
                expect(element.name,"propA");
                {
                    let location : any = element.location;
                    expect(location.offset,new core.DartString(this.testCode).indexOf("propA => null;"));
                    expect(location.length,new core.DartString("propA").length);
                }
                expect(element.parameters,"");
                expect(element.returnType,"String");
            }
            {
                let outline : any = topOutlines[9];
                let element : any = outline.element;
                expect(element.kind,ElementKind.SETTER);
                expect(element.name,"propB");
                {
                    let location : any = element.location;
                    expect(location.offset,new core.DartString(this.testCode).indexOf("propB(int v) {}"));
                    expect(location.length,new core.DartString("propB").length);
                }
                expect(element.parameters,"(int v)");
                expect(element.returnType,"");
            }
        } )());
    }

    _isEnumConstant(outline : any,name : string) : void {
        let element : any = outline.element;
        expect(element.kind,ElementKind.ENUM_CONSTANT);
        expect(element.name,name);
        expect(element.parameters,isNull);
        expect(element.returnType,isNull);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AnalysisNotificationOutlineTest() {
    }
}

export class properties {
}
