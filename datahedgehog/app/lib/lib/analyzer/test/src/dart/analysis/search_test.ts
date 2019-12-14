/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/dart/analysis/search_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./base";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SearchTest);
    });
};
export namespace ExpectedResult {
    export type Constructors = 'ExpectedResult';
    export type Interface = Omit<ExpectedResult, Constructors>;
}
@DartClass
export class ExpectedResult {
    enclosingElement : any;

    kind : any;

    offset : number;

    length : number;

    isResolved : boolean;

    isQualified : boolean;

    constructor(enclosingElement : any,kind : any,offset : number,length : number,_namedArguments? : {isResolved? : boolean,isQualified? : boolean}) {
    }
    @defaultConstructor
    ExpectedResult(enclosingElement : any,kind : any,offset : number,length : number,_namedArguments? : {isResolved? : boolean,isQualified? : boolean}) {
        let {isResolved,isQualified} = Object.assign({
            "isResolved" : true,
            "isQualified" : false}, _namedArguments );
        this.enclosingElement = enclosingElement;
        this.kind = kind;
        this.offset = offset;
        this.length = length;
        this.isResolved = isResolved;
        this.isQualified = isQualified;
    }
    [OperatorMethods.EQUALS](result : core.DartObject) : boolean {
        return is(result, any) && op(Op.EQUALS,result.kind,this.kind) && op(Op.EQUALS,result.isResolved,this.isResolved) && op(Op.EQUALS,result.isQualified,this.isQualified) && op(Op.EQUALS,result.offset,this.offset) && op(Op.EQUALS,result.length,this.length) && op(Op.EQUALS,result.enclosingElement,this.enclosingElement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write("ExpectedResult(kind=");
        buffer.write(this.kind);
        buffer.write(", enclosingElement=");
        buffer.write(this.enclosingElement);
        buffer.write(", offset=");
        buffer.write(this.offset);
        buffer.write(", length=");
        buffer.write(this.length);
        buffer.write(", isResolved=");
        buffer.write(this.isResolved);
        buffer.write(", isQualified=");
        buffer.write(this.isQualified);
        buffer.write(")");
        return buffer.toString();
    }
}

export namespace SearchTest {
    export type Constructors = lib3.BaseAnalysisDriverTest.Constructors | 'SearchTest';
    export type Interface = Omit<SearchTest, Constructors>;
}
@DartClass
export class SearchTest extends lib3.BaseAnalysisDriverTest {
    private static __$testUri;
    static get testUri() { 
        if (this.__$testUri===undefined) {
            this.__$testUri = 'package:test/test.dart';
        }
        return this.__$testUri;
    }

    testUnit : any;

    testUnitElement : any;

    testLibraryElement : any;

    test_classMembers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class A {\n  test() {}\n}\nclass B {\n  int test = 1;\n  int testTwo = 2;\n  main() {\n    int test = 3;\n  }\n}\n');
            let a : any = this._findElement('A');
            let b : any = this._findElement('B');
            expect(await this.driver.search.classMembers('test'),unorderedEquals(new core.DartList.literal(op(Op.INDEX,a.methods,0),op(Op.INDEX,b.fields,0))));
        } )());
    }

    test_classMembers_importNotDart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('import \'not-dart.txt\';\n');
            expect(await this.driver.search.classMembers('test'),isEmpty);
        } )());
    }

    test_searchMemberReferences_qualified_resolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class C {\n  var test;\n}\nmain(C c) {\n  print(c.test);\n  c.test = 1;\n  c.test += 2;\n  c.test();\n}\n');
            await this._verifyNameReferences('test',new core.DartList.literal());
        } )());
    }

    test_searchMemberReferences_qualified_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('main(p) {\n  print(p.test);\n  p.test = 1;\n  p.test += 2;\n  p.test();\n}\n');
            let main : any = this._findElement('main');
            await this._verifyNameReferences('test',new core.DartList.literal<ExpectedResult>(this._expectIdQU(main,SearchResultKind.READ,'test);'),this._expectIdQU(main,SearchResultKind.WRITE,'test = 1;'),this._expectIdQU(main,SearchResultKind.READ_WRITE,'test += 2;'),this._expectIdQU(main,SearchResultKind.INVOCATION,'test();')));
        } )());
    }

    test_searchMemberReferences_unqualified_resolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class C {\n  var test;\n  main() {\n    print(test);\n    test = 1;\n    test += 2;\n    test();\n  }\n}\n');
            await this._verifyNameReferences('test',new core.DartList.literal());
        } )());
    }

    test_searchMemberReferences_unqualified_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class C {\n  main() {\n    print(test);\n    test = 1;\n    test += 2;\n    test();\n  }\n}\n');
            let main : any = this._findElement('main');
            await this._verifyNameReferences('test',new core.DartList.literal<ExpectedResult>(this._expectIdU(main,SearchResultKind.READ,'test);'),this._expectIdU(main,SearchResultKind.WRITE,'test = 1;'),this._expectIdU(main,SearchResultKind.READ_WRITE,'test += 2;'),this._expectIdU(main,SearchResultKind.INVOCATION,'test();')));
        } )());
    }

    test_searchReferences_ClassElement_definedInSdk_declarationSite() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('import \'dart:math\';\nRandom v1;\nRandom v2;\n');
            let randomElement : any;
            {
                let randomPath : string = this.sdk.mapDartUri('dart:math').fullName;
                let result : any = await this.driver.getResult(randomPath);
                randomElement = result.unit.element.getType('Random');
            }
            let v1 : any = this._findElement('v1');
            let v2 : any = this._findElement('v2');
            let expected = new core.DartList.literal(this._expectId(v1,SearchResultKind.REFERENCE,'Random v1;'),this._expectId(v2,SearchResultKind.REFERENCE,'Random v2;'));
            await this._verifyReferences(randomElement,expected);
        } )());
    }

    test_searchReferences_ClassElement_definedInSdk_useSite() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('import \'dart:math\';\nRandom v1;\nRandom v2;\n');
            let v1 = this._findElement('v1') as any;
            let v2 = this._findElement('v2') as any;
            let randomElement = v1.type.element as any;
            let expected = new core.DartList.literal(this._expectId(v1,SearchResultKind.REFERENCE,'Random v1;'),this._expectId(v2,SearchResultKind.REFERENCE,'Random v2;'));
            await this._verifyReferences(randomElement,expected);
        } )());
    }

    test_searchReferences_ClassElement_definedInside() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class A {};\nmain(A p) {\n  A v;\n}\nclass B1 extends A {} // extends\nclass B2 implements A {} // implements\nclass B3 extends Object with A {} // with\nList<A> v2 = null;\n');
            let element : any = this._findElementAtString('A {}');
            let p : any = this._findElement('p');
            let main : any = this._findElement('main');
            let b1 : any = this._findElement('B1');
            let b2 : any = this._findElement('B2');
            let b3 : any = this._findElement('B3');
            let v2 : any = this._findElement('v2');
            let expected = new core.DartList.literal(this._expectId(p,SearchResultKind.REFERENCE,'A p'),this._expectId(main,SearchResultKind.REFERENCE,'A v'),this._expectId(b1,SearchResultKind.REFERENCE,'A {} // extends'),this._expectId(b2,SearchResultKind.REFERENCE,'A {} // implements'),this._expectId(b3,SearchResultKind.REFERENCE,'A {} // with'),this._expectId(v2,SearchResultKind.REFERENCE,'A> v2'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ClassElement_definedOutside() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.provider.newFile(this._p(`${this.testProject}/lib.dart`),'class A {};\n');
            await this._resolveTestUnit('import \'lib.dart\';\nmain(A p) {\n  A v;\n}\n');
            let element : any = this._findElementAtString('A p');
            let p : any = this._findElement('p');
            let main : any = this._findElement('main');
            let expected = new core.DartList.literal(this._expectId(p,SearchResultKind.REFERENCE,'A p'),this._expectId(main,SearchResultKind.REFERENCE,'A v'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_CompilationUnitElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.provider.newFile(this._p(`${this.testProject}/foo.dart`),'');
            await this._resolveTestUnit('import \'foo.dart\'; // import\nexport \'foo.dart\'; // export\n');
            let element : any = op(Op.INDEX,this.testLibraryElement.imports,0).importedLibrary.definingCompilationUnit;
            let uriLength : number = new core.DartString("'foo.dart'").length;
            let expected = new core.DartList.literal(this._expectIdQ(this.testUnitElement,SearchResultKind.REFERENCE,"'foo.dart'; // import",{
                length : uriLength}),this._expectIdQ(this.testUnitElement,SearchResultKind.REFERENCE,"'foo.dart'; // export",{
                length : uriLength}));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ConstructorElement_default() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class A {\n  A() {}\n}\nmain() {\n  new A();\n}\n');
            let element : any = this._findElementAtString('A() {}');
            let mainElement : any = this._findElement('main');
            let expected = new core.DartList.literal(this._expectIdQ(mainElement,SearchResultKind.REFERENCE,'();',{
                length : 0}));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ConstructorElement_default_otherFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let other : string = this._p(`${this.testProject}/other.dart`);
            let otherCode : string = 'import \'test.dart\';\nmain() {\n  new A(); // in other\n}\n';
            this.provider.newFile(other,otherCode);
            this.driver.addFile(other);
            await this._resolveTestUnit('class A {\n  A() {}\n}\n');
            let element : any = this._findElementAtString('A() {}');
            let otherUnit : any = (await this.driver.getResult(other)).unit;
            let main : any = op(Op.INDEX,resolutionMap.elementDeclaredByCompilationUnit(otherUnit).functions,0);
            let expected = new core.DartList.literal(new ExpectedResult(main,SearchResultKind.REFERENCE,new core.DartString(otherCode).indexOf('(); // in other'),0,{
                isResolved : true,isQualified : true}));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ConstructorElement_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class A {\n  A.named() {}\n}\nmain() {\n  new A.named();\n}\n');
            let element : any = this._findElement('named');
            let mainElement : any = this._findElement('main');
            let expected = new core.DartList.literal(this._expectIdQ(mainElement,SearchResultKind.REFERENCE,'.named();',{
                length : new core.DartString('.named').length}));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ConstructorElement_synthetic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class A {\n}\nmain() {\n  new A();\n}\n');
            let classElement : any = this._findElement('A');
            let element : any = classElement.unnamedConstructor;
            let mainElement : any = this._findElement('main');
            let expected = new core.DartList.literal(this._expectIdQ(mainElement,SearchResultKind.REFERENCE,'();',{
                length : 0}));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_FieldElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class A {\n  var field;\n  A({this.field});\n  main() {\n    new A(field: 1);\n    // getter\n    print(field); // ref-nq\n    print(this.field); // ref-q\n    field(); // inv-nq\n    this.field(); // inv-q\n    // setter\n    field = 2; // ref-nq;\n    this.field = 3; // ref-q;\n  }\n}\n');
            let element : any = this._findElement('field',ElementKind.FIELD);
            let main : any = this._findElement('main');
            let fieldParameter : any = this._findElement('field',ElementKind.PARAMETER);
            let expected = new core.DartList.literal(this._expectIdQ(fieldParameter,SearchResultKind.WRITE,'field}'),this._expectIdQ(main,SearchResultKind.REFERENCE,'field: 1'),this._expectId(main,SearchResultKind.READ,'field); // ref-nq'),this._expectIdQ(main,SearchResultKind.READ,'field); // ref-q'),this._expectId(main,SearchResultKind.INVOCATION,'field(); // inv-nq'),this._expectIdQ(main,SearchResultKind.INVOCATION,'field(); // inv-q'),this._expectId(main,SearchResultKind.WRITE,'field = 2; // ref-nq'),this._expectIdQ(main,SearchResultKind.WRITE,'field = 3; // ref-q'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_FieldElement_ofEnum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('enum MyEnum {\n  A, B, C\n}\nmain() {\n  print(MyEnum.A.index);\n  print(MyEnum.values);\n  print(MyEnum.A);\n  print(MyEnum.B);\n}\n');
            let enumElement : any = this._findElement('MyEnum');
            let mainElement : any = this._findElement('main');
            await this._verifyReferences(enumElement.getField('index'),new core.DartList.literal(this._expectIdQ(mainElement,SearchResultKind.READ,'index);')));
            await this._verifyReferences(enumElement.getField('values'),new core.DartList.literal(this._expectIdQ(mainElement,SearchResultKind.READ,'values);')));
            await this._verifyReferences(enumElement.getField('A'),new core.DartList.literal(this._expectIdQ(mainElement,SearchResultKind.READ,'A.index);'),this._expectIdQ(mainElement,SearchResultKind.READ,'A);')));
            await this._verifyReferences(enumElement.getField('B'),new core.DartList.literal(this._expectIdQ(mainElement,SearchResultKind.READ,'B);')));
        } )());
    }

    test_searchReferences_FieldElement_synthetic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class A {\n  get field => null;\n  set field(x) {}\n  main() {\n    // getter\n    print(field); // ref-nq\n    print(this.field); // ref-q\n    field(); // inv-nq\n    this.field(); // inv-q\n    // setter\n    field = 2; // ref-nq;\n    this.field = 3; // ref-q;\n  }\n}\n');
            let element : any = this._findElement('field',ElementKind.FIELD);
            let main : any = this._findElement('main');
            let expected = new core.DartList.literal(this._expectId(main,SearchResultKind.READ,'field); // ref-nq'),this._expectIdQ(main,SearchResultKind.READ,'field); // ref-q'),this._expectId(main,SearchResultKind.INVOCATION,'field(); // inv-nq'),this._expectIdQ(main,SearchResultKind.INVOCATION,'field(); // inv-q'),this._expectId(main,SearchResultKind.WRITE,'field = 2; // ref-nq'),this._expectIdQ(main,SearchResultKind.WRITE,'field = 3; // ref-q'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_FunctionElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('test() {}\nmain() {\n  test();\n  print(test);\n}\n');
            let element : any = this._findElement('test');
            let mainElement : any = this._findElement('main');
            let expected = new core.DartList.literal(this._expectId(mainElement,SearchResultKind.INVOCATION,'test();'),this._expectId(mainElement,SearchResultKind.REFERENCE,'test);'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_FunctionElement_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('main() {\n  test() {}\n  test();\n  print(test);\n}\n');
            let element : any = this._findElement('test');
            let main : any = this._findElement('main');
            let expected = new core.DartList.literal(this._expectId(main,SearchResultKind.INVOCATION,'test();'),this._expectId(main,SearchResultKind.REFERENCE,'test);'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ImportElement_noPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('import \'dart:math\' show max, PI, Random hide min;\nexport \'dart:math\' show max, PI, Random hide min;\nmain() {\n  print(PI);\n  print(new Random());\n  print(max(1, 2));\n}\nRandom bar() => null;\n');
            let element : any = op(Op.INDEX,this.testLibraryElement.imports,0);
            let mainElement : any = await this._findElement('main');
            let barElement : any = await this._findElement('bar');
            let kind = SearchResultKind.REFERENCE;
            let expected = new core.DartList.literal(this._expectId(mainElement,kind,'PI);',{
                length : 0}),this._expectId(mainElement,kind,'Random()',{
                length : 0}),this._expectId(mainElement,kind,'max(',{
                length : 0}),this._expectId(barElement,kind,'Random bar()',{
                length : 0}));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ImportElement_withPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('import \'dart:math\' as math show max, PI, Random hide min;\nexport \'dart:math\' show max, PI, Random hide min;\nmain() {\n  print(math.PI);\n  print(new math.Random());\n  print(math.max(1, 2));\n}\nmath.Random bar() => null;\n');
            let element : any = op(Op.INDEX,this.testLibraryElement.imports,0);
            let mainElement : any = await this._findElement('main');
            let barElement : any = await this._findElement('bar');
            let kind = SearchResultKind.REFERENCE;
            let length = new core.DartString('math.').length;
            let expected = new core.DartList.literal(this._expectId(mainElement,kind,'math.PI);',{
                length : length}),this._expectId(mainElement,kind,'math.Random()',{
                length : length}),this._expectId(mainElement,kind,'math.max(',{
                length : length}),this._expectId(barElement,kind,'math.Random bar()',{
                length : length}));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ImportElement_withPrefix_forMultipleImports() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('import \'dart:async\' as p;\nimport \'dart:math\' as p;\nmain() {\n  p.Random;\n  p.Future;\n}\n');
            let mainElement : any = await this._findElement('main');
            let kind = SearchResultKind.REFERENCE;
            let length = new core.DartString('p.').length;
            {
                let element : any = op(Op.INDEX,this.testLibraryElement.imports,0);
                let expected = new core.DartList.literal(this._expectId(mainElement,kind,'p.Future;',{
                    length : length}));
                await this._verifyReferences(element,expected);
            }
            {
                let element : any = op(Op.INDEX,this.testLibraryElement.imports,1);
                let expected = new core.DartList.literal(this._expectId(mainElement,kind,'p.Random',{
                    length : length}));
                await this._verifyReferences(element,expected);
            }
        } )());
    }

    test_searchReferences_LabelElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('main() {\nlabel:\n  while (true) {\n    if (true) {\n      break label; // 1\n    }\n    break label; // 2\n  }\n}\n');
            let element : any = this._findElement('label');
            let main : any = this._findElement('main');
            let expected = new core.DartList.literal(this._expectId(main,SearchResultKind.REFERENCE,'label; // 1'),this._expectId(main,SearchResultKind.REFERENCE,'label; // 2'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_LibraryElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let codeA = 'part of lib; // A';
            let codeB = 'part of lib; // B';
            this.provider.newFile(this._p(`${this.testProject}/unitA.dart`),codeA);
            this.provider.newFile(this._p(`${this.testProject}/unitB.dart`),codeB);
            await this._resolveTestUnit('library lib;\npart \'unitA.dart\';\npart \'unitB.dart\';\n');
            let element : any = this.testLibraryElement;
            let unitElementA : any = op(Op.INDEX,element.parts,0);
            let unitElementB : any = op(Op.INDEX,element.parts,1);
            let expected = new core.DartList.literal(new ExpectedResult(unitElementA,SearchResultKind.REFERENCE,new core.DartString(codeA).indexOf('lib; // A'),new core.DartString('lib').length),new ExpectedResult(unitElementB,SearchResultKind.REFERENCE,new core.DartString(codeB).indexOf('lib; // B'),new core.DartString('lib').length));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_LocalVariableElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('main() {\n  var v;\n  v = 1;\n  v += 2;\n  print(v);\n  v();\n}\n');
            let element : any = this._findElement('v');
            let main : any = this._findElement('main');
            let expected = new core.DartList.literal(this._expectId(main,SearchResultKind.WRITE,'v = 1;'),this._expectId(main,SearchResultKind.READ_WRITE,'v += 2;'),this._expectId(main,SearchResultKind.READ,'v);'),this._expectId(main,SearchResultKind.INVOCATION,'v();'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_localVariableElement_inForEachLoop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('main() {\n  for (var v in []) {\n    v = 1;\n    v += 2;\n    print(v);\n    v();\n  }\n}\n');
            let element : any = this._findElementAtString('v in []');
            let main : any = this._findElement('main');
            let expected = new core.DartList.literal(this._expectId(main,SearchResultKind.WRITE,'v = 1;'),this._expectId(main,SearchResultKind.READ_WRITE,'v += 2;'),this._expectId(main,SearchResultKind.READ,'v);'),this._expectId(main,SearchResultKind.INVOCATION,'v();'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_MethodElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class A {\n  m() {}\n  main() {\n    m(); // 1\n    this.m(); // 2\n    print(m); // 3\n    print(this.m); // 4\n  }\n}\n');
            let method : any = this._findElement('m');
            let mainElement : any = this._findElement('main');
            let expected = new core.DartList.literal(this._expectId(mainElement,SearchResultKind.INVOCATION,'m(); // 1'),this._expectIdQ(mainElement,SearchResultKind.INVOCATION,'m(); // 2'),this._expectId(mainElement,SearchResultKind.REFERENCE,'m); // 3'),this._expectIdQ(mainElement,SearchResultKind.REFERENCE,'m); // 4'));
            await this._verifyReferences(method,expected);
        } )());
    }

    test_searchReferences_MethodMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class A<T> {\n  T m() => null;\n}\nmain(A<int> a) {\n  a.m(); // ref\n}\n');
            let method : any = this._findElementAtString('m(); // ref');
            let mainElement : any = this._findElement('main');
            let expected = new core.DartList.literal(this._expectIdQ(mainElement,SearchResultKind.INVOCATION,'m(); // ref'));
            await this._verifyReferences(method,expected);
        } )());
    }

    test_searchReferences_ParameterElement_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('foo({p}) {\n  p = 1;\n  p += 2;\n  print(p);\n  p();\n}\nmain() {\n  foo(p: 42);\n}\n');
            let element : any = this._findElement('p');
            let fooElement : any = this._findElement('foo');
            let mainElement : any = this._findElement('main');
            let expected = new core.DartList.literal(this._expectId(fooElement,SearchResultKind.WRITE,'p = 1;'),this._expectId(fooElement,SearchResultKind.READ_WRITE,'p += 2;'),this._expectId(fooElement,SearchResultKind.READ,'p);'),this._expectId(fooElement,SearchResultKind.INVOCATION,'p();'),this._expectIdQ(mainElement,SearchResultKind.REFERENCE,'p: 42'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ParameterElement_ofConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class C {\n  var f;\n  C(p) : f = p + 1 {\n    p = 2;\n    p += 3;\n    print(p);\n    p();\n  }\n}\nmain() {\n  new C(42);\n}\n');
            let element : any = this._findElement('p');
            let classC : any = this._findElement('C');
            let constructorA : any = classC.unnamedConstructor;
            let expected = new core.DartList.literal(this._expectId(constructorA,SearchResultKind.READ,'p + 1 {'),this._expectId(constructorA,SearchResultKind.WRITE,'p = 2;'),this._expectId(constructorA,SearchResultKind.READ_WRITE,'p += 3;'),this._expectId(constructorA,SearchResultKind.READ,'p);'),this._expectId(constructorA,SearchResultKind.INVOCATION,'p();'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ParameterElement_ofLocalFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('main() {\n  foo(p) {\n    p = 1;\n    p += 2;\n    print(p);\n    p();\n  }\n  foo(42);\n}\n');
            let element : any = this._findElement('p');
            let fooElement : any = this._findElement('foo');
            let expected = new core.DartList.literal(this._expectId(fooElement,SearchResultKind.WRITE,'p = 1;'),this._expectId(fooElement,SearchResultKind.READ_WRITE,'p += 2;'),this._expectId(fooElement,SearchResultKind.READ,'p);'),this._expectId(fooElement,SearchResultKind.INVOCATION,'p();'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ParameterElement_ofMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class C {\n  foo(p) {\n    p = 1;\n    p += 2;\n    print(p);\n    p();\n  }\n}\nmain(C c) {\n  c.foo(42);\n}\n');
            let element : any = this._findElement('p');
            let fooElement : any = this._findElement('foo');
            let expected = new core.DartList.literal(this._expectId(fooElement,SearchResultKind.WRITE,'p = 1;'),this._expectId(fooElement,SearchResultKind.READ_WRITE,'p += 2;'),this._expectId(fooElement,SearchResultKind.READ,'p);'),this._expectId(fooElement,SearchResultKind.INVOCATION,'p();'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ParameterElement_ofTopLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('foo(p) {\n  p = 1;\n  p += 2;\n  print(p);\n  p();\n}\nmain() {\n  foo(42);\n}\n');
            let element : any = this._findElement('p');
            let fooElement : any = this._findElement('foo');
            let expected = new core.DartList.literal(this._expectId(fooElement,SearchResultKind.WRITE,'p = 1;'),this._expectId(fooElement,SearchResultKind.READ_WRITE,'p += 2;'),this._expectId(fooElement,SearchResultKind.READ,'p);'),this._expectId(fooElement,SearchResultKind.INVOCATION,'p();'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_PrefixElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let partCode : string = 'part of my_lib;\nppp.Future c;\n';
            this.provider.newFile(this._p(`${this.testProject}/my_part.dart`),partCode);
            await this._resolveTestUnit('library my_lib;\nimport \'dart:async\' as ppp;\npart \'my_part.dart\';\nmain() {\n  ppp.Future a;\n  ppp.Stream b;\n}\n');
            let element : any = this._findElementAtString('ppp;');
            let a : any = this._findElement('a');
            let b : any = this._findElement('b');
            let c : any = lib3.findChildElement(this.testLibraryElement,'c');
            let expected = new core.DartList.literal(this._expectId(a,SearchResultKind.REFERENCE,'ppp.Future'),this._expectId(b,SearchResultKind.REFERENCE,'ppp.Stream'),new ExpectedResult(c,SearchResultKind.REFERENCE,new core.DartString(partCode).indexOf('ppp.Future c'),new core.DartString('ppp').length));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_private_declaredInDefiningUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let p1 : string = this._p(`${this.testProject}/part1.dart`);
            let p2 : string = this._p(`${this.testProject}/part2.dart`);
            let p3 : string = this._p(`${this.testProject}/part3.dart`);
            let code1 : string = 'part of lib; _C v1;';
            let code2 : string = 'part of lib; _C v2;';
            this.provider.newFile(p1,code1);
            this.provider.newFile(p2,code2);
            this.provider.newFile(p3,'part of lib; int v3;');
            this.driver.addFile(p1);
            this.driver.addFile(p2);
            this.driver.addFile(p3);
            await this._resolveTestUnit('library lib;\npart \'part1.dart\';\npart \'part2.dart\';\npart \'part3.dart\';\nclass _C {}\n_C v;\n');
            let element : any = this._findElementAtString('_C {}');
            let v : any = op(Op.INDEX,this.testUnitElement.topLevelVariables,0);
            let v1 : any = op(Op.INDEX,op(Op.INDEX,this.testLibraryElement.parts,0).topLevelVariables,0);
            let v2 : any = op(Op.INDEX,op(Op.INDEX,this.testLibraryElement.parts,1).topLevelVariables,0);
            let expected = new core.DartList.literal(this._expectId(v,SearchResultKind.REFERENCE,'_C v;',{
                length : 2}),new ExpectedResult(v1,SearchResultKind.REFERENCE,new core.DartString(code1).indexOf('_C v1;'),2),new ExpectedResult(v2,SearchResultKind.REFERENCE,new core.DartString(code2).indexOf('_C v2;'),2));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_private_declaredInPart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let p : string = this._p(`${this.testProject}/lib.dart`);
            let p1 : string = this._p(`${this.testProject}/part1.dart`);
            let p2 : string = this._p(`${this.testProject}/part2.dart`);
            let code = 'library lib;\npart \'part1.dart\';\npart \'part2.dart\';\n_C v;\n';
            let code1 = 'part of lib;\nclass _C {}\n_C v1;\n';
            let code2 : string = 'part of lib; _C v2;';
            this.provider.newFile(p,code);
            this.provider.newFile(p1,code1);
            this.provider.newFile(p2,code2);
            this.driver.addFile(p);
            this.driver.addFile(p1);
            this.driver.addFile(p2);
            let result : any = await this.driver.getResult(p);
            this.testUnit = result.unit;
            this.testUnitElement = this.testUnit.element;
            this.testLibraryElement = this.testUnitElement.library;
            let element : any = op(Op.INDEX,op(Op.INDEX,this.testLibraryElement.parts,0).types,0);
            let v : any = op(Op.INDEX,this.testUnitElement.topLevelVariables,0);
            let v1 : any = op(Op.INDEX,op(Op.INDEX,this.testLibraryElement.parts,0).topLevelVariables,0);
            let v2 : any = op(Op.INDEX,op(Op.INDEX,this.testLibraryElement.parts,1).topLevelVariables,0);
            let expected = new core.DartList.literal(new ExpectedResult(v,SearchResultKind.REFERENCE,new core.DartString(code).indexOf('_C v;'),2),new ExpectedResult(v1,SearchResultKind.REFERENCE,new core.DartString(code1).indexOf('_C v1;'),2),new ExpectedResult(v2,SearchResultKind.REFERENCE,new core.DartString(code2).indexOf('_C v2;'),2));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_PropertyAccessorElement_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class A {\n  get ggg => null;\n  main() {\n    print(ggg); // ref-nq\n    print(this.ggg); // ref-q\n    ggg(); // inv-nq\n    this.ggg(); // inv-q\n  }\n}\n');
            let element : any = this._findElement('ggg',ElementKind.GETTER);
            let main : any = this._findElement('main');
            let expected = new core.DartList.literal(this._expectId(main,SearchResultKind.REFERENCE,'ggg); // ref-nq'),this._expectIdQ(main,SearchResultKind.REFERENCE,'ggg); // ref-q'),this._expectId(main,SearchResultKind.INVOCATION,'ggg(); // inv-nq'),this._expectIdQ(main,SearchResultKind.INVOCATION,'ggg(); // inv-q'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_PropertyAccessorElement_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class A {\n  set s(x) {}\n  main() {\n    s = 1;\n    this.s = 2;\n  }\n}\n');
            let element : any = this._findElement('s=');
            let mainElement : any = this._findElement('main');
            let expected = new core.DartList.literal(this._expectId(mainElement,SearchResultKind.REFERENCE,'s = 1'),this._expectIdQ(mainElement,SearchResultKind.REFERENCE,'s = 2'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_TopLevelVariableElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.provider.newFile(this._p(`${this.testProject}/lib.dart`),'library lib;\nvar V;\n');
            await this._resolveTestUnit('import \'lib.dart\' show V; // imp\nimport \'lib.dart\' as pref;\nmain() {\n  pref.V = 1; // q\n  print(pref.V); // q\n  pref.V(); // q\n  V = 1; // nq\n  print(V); // nq\n  V(); // nq\n}\n');
            let importElement : any = op(Op.INDEX,this.testLibraryElement.imports,0);
            let impUnit : any = importElement.importedLibrary.definingCompilationUnit;
            let variable : any = op(Op.INDEX,impUnit.topLevelVariables,0);
            let main : any = this._findElement('main');
            let expected = new core.DartList.literal(this._expectIdQ(this.testUnitElement,SearchResultKind.REFERENCE,'V; // imp'),this._expectIdQ(main,SearchResultKind.WRITE,'V = 1; // q'),this._expectIdQ(main,SearchResultKind.READ,'V); // q'),this._expectIdQ(main,SearchResultKind.INVOCATION,'V(); // q'),this._expectId(main,SearchResultKind.WRITE,'V = 1; // nq'),this._expectId(main,SearchResultKind.READ,'V); // nq'),this._expectId(main,SearchResultKind.INVOCATION,'V(); // nq'));
            await this._verifyReferences(variable,expected);
        } )());
    }

    test_searchReferences_TypeParameterElement_ofClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class A<T> {\n  foo(T a) {}\n  bar(T b) {}\n}\n');
            let element : any = this._findElement('T');
            let a : any = this._findElement('a');
            let b : any = this._findElement('b');
            let expected = new core.DartList.literal(this._expectId(a,SearchResultKind.REFERENCE,'T a'),this._expectId(b,SearchResultKind.REFERENCE,'T b'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_TypeParameterElement_ofLocalFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('main() {\n  void foo<T>(T a) {\n    void bar(T b) {}\n  }\n}\n');
            let element : any = this._findElement('T');
            let a : any = this._findElement('a');
            let b : any = this._findElement('b');
            let expected = new core.DartList.literal(this._expectId(a,SearchResultKind.REFERENCE,'T a'),this._expectId(b,SearchResultKind.REFERENCE,'T b'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_TypeParameterElement_ofMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class A {\n  foo<T>(T p) {}\n}\n');
            let element : any = this._findElement('T');
            let p : any = this._findElement('p');
            let expected = new core.DartList.literal(this._expectId(p,SearchResultKind.REFERENCE,'T p'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_TypeParameterElement_ofTopLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('foo<T>(T a) {\n  bar(T b) {}\n}\n');
            let element : any = this._findElement('T');
            let a : any = this._findElement('a');
            let b : any = this._findElement('b');
            let expected = new core.DartList.literal(this._expectId(a,SearchResultKind.REFERENCE,'T a'),this._expectId(b,SearchResultKind.REFERENCE,'T b'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchSubtypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class T {}\nclass A extends T {} // A\nclass B = Object with T; // B\nclass C implements T {} // C\n');
            let element : any = this._findElement('T');
            let a : any = this._findElement('A');
            let b : any = this._findElement('B');
            let c : any = this._findElement('C');
            let expected = new core.DartList.literal(this._expectId(a,SearchResultKind.REFERENCE,'T {} // A'),this._expectId(b,SearchResultKind.REFERENCE,'T; // B'),this._expectId(c,SearchResultKind.REFERENCE,'T {} // C'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_topLevelElements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._resolveTestUnit('class A {} // A\nclass B = Object with A;\ntypedef C();\nD() {}\nvar e = null;\nclass NoMatchABCDE {}\n');
            let a : any = this._findElement('A');
            let b : any = this._findElement('B');
            let c : any = this._findElement('C');
            let d : any = this._findElement('D');
            let e : any = this._findElement('e');
            let regExp : core.DartRegExp = new core.DartRegExp('^[ABCDe]$');
            expect(await this.driver.search.topLevelElements(regExp),unorderedEquals(new core.DartList.literal(a,b,c,d,e)));
        } )());
    }

    _expectId(enclosingElement : any,kind : any,search : string,_namedArguments? : {length? : number,isResolved? : boolean,isQualified? : boolean}) : ExpectedResult {
        let {length,isResolved,isQualified} = Object.assign({
            "isResolved" : true,
            "isQualified" : false}, _namedArguments );
        let offset : number = this.findOffset(search);
        if (length == null) {
            length = this.getLeadingIdentifierLength(search);
        }
        return new ExpectedResult(enclosingElement,kind,offset,length,{
            isResolved : isResolved,isQualified : isQualified});
    }
    _expectIdQ(element : any,kind : any,search : string,_namedArguments? : {length? : number,isResolved? : boolean}) : ExpectedResult {
        let {length,isResolved} = Object.assign({
            "isResolved" : true}, _namedArguments );
        return this._expectId(element,kind,search,{
            isQualified : true,length : length});
    }
    _expectIdQU(element : any,kind : any,search : string,_namedArguments? : {length? : number}) : ExpectedResult {
        let {length} = Object.assign({
        }, _namedArguments );
        return this._expectId(element,kind,search,{
            isQualified : true,isResolved : false,length : length});
    }
    _expectIdU(element : any,kind : any,search : string,_namedArguments? : {length? : number}) : ExpectedResult {
        let {length} = Object.assign({
        }, _namedArguments );
        return this._expectId(element,kind,search,{
            isQualified : false,isResolved : false,length : length});
    }
    _findElement(name : string,kind? : any) : any {
        return lib3.findChildElement(this.testUnit.element,name,kind);
    }
    _findElementAtString(search : string) : any {
        let offset : number = this.findOffset(search);
        let node : any = new bare.createInstance(any,null,offset).searchWithin(this.testUnit);
        return ElementLocator.locate(node);
    }
    _p(path : string) : string {
        return this.provider.convertPath(path);
    }
    _resolveTestUnit(code : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile(code);
            if (op(Op.EQUALS,this.testUnit,null)) {
                let result : any = await this.driver.getResult(this.testFile);
                this.testUnit = result.unit;
                this.testUnitElement = this.testUnit.element;
                this.testLibraryElement = this.testUnitElement.library;
            }
        } )());
    }

    _verifyNameReferences(name : string,expectedMatches : core.DartList<ExpectedResult>) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let results : core.DartList<any> = await this.driver.search.unresolvedMemberReferences(name);
            SearchTest._assertResults(results,expectedMatches);
            expect(results,hasLength(expectedMatches.length));
        } )());
    }

    _verifyReferences(element : any,expectedMatches : core.DartList<ExpectedResult>) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let results : core.DartList<any> = await this.driver.search.references(element);
            SearchTest._assertResults(results,expectedMatches);
            expect(results,hasLength(expectedMatches.length));
        } )());
    }

    static _assertResults(matches : core.DartList<any>,expectedMatches : core.DartList<ExpectedResult>) : void {
        expect(matches,unorderedEquals(expectedMatches));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SearchTest() {
    }
}

export class properties {
}
