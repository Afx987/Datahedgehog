/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/index/index_unit_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../abstract_single_unit";
import * as convert from "@dart2ts/dart/convert";
import * as lib5 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(PackageIndexAssemblerTest);
    });
};
export namespace ExpectedLocation {
    export type Constructors = 'ExpectedLocation';
    export type Interface = Omit<ExpectedLocation, Constructors>;
}
@DartClass
export class ExpectedLocation {
    unitElement : any;

    offset : number;

    length : number;

    isQualified : boolean;

    constructor(unitElement : any,offset : number,length : number,isQualified : boolean) {
    }
    @defaultConstructor
    ExpectedLocation(unitElement : any,offset : number,length : number,isQualified : boolean) {
        this.unitElement = unitElement;
        this.offset = offset;
        this.length = length;
        this.isQualified = isQualified;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `(unit=${this.unitElement}; offset=${this.offset}; length=${this.length};` + ` isQualified=${this.isQualified})`;
    }
}

export namespace PackageIndexAssemblerTest {
    export type Constructors = lib3.AbstractSingleUnitTest.Constructors | 'PackageIndexAssemblerTest';
    export type Interface = Omit<PackageIndexAssemblerTest, Constructors>;
}
@DartClass
export class PackageIndexAssemblerTest extends lib3.AbstractSingleUnitTest {
    packageIndex : any;

    unitIndex : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    assertThat(element : any) : _ElementIndexAssert {
        let relations : core.DartList<_Relation> = this._getElementRelations(element);
        return new _ElementIndexAssert(this,element,relations);
    }
    assertThatName(name : string) : _NameIndexAssert {
        return new _NameIndexAssert(this,name);
    }
    importedUnit(_namedArguments? : {index? : number}) : any {
        let {index} = Object.assign({
            "index" : 0}, _namedArguments );
        let imports : core.DartList<any> = this.testLibraryElement.imports;
        return imports[index].importedLibrary.definingCompilationUnit;
    }
    test_definedName_classMember_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  int f;\n}');
            this._assertDefinedName('f',IndexNameKind.classMember,'f;');
        } )());
    }

    test_definedName_classMember_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  int get g => 0;\n}');
            this._assertDefinedName('g',IndexNameKind.classMember,'g => 0;');
        } )());
    }

    test_definedName_classMember_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  m() {}\n}');
            this._assertDefinedName('m',IndexNameKind.classMember,'m() {}');
        } )());
    }

    test_definedName_classMember_operator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  operator +(o) {}\n}');
            this._assertDefinedName('+',IndexNameKind.classMember,'+(o) {}');
        } )());
    }

    test_definedName_classMember_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  int set s (_) {}\n}');
            this._assertDefinedName('s',IndexNameKind.classMember,'s (_) {}');
        } )());
    }

    test_definedName_topLevel_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {}');
            this._assertDefinedName('A',IndexNameKind.topLevel,'A {}');
        } )());
    }

    test_definedName_topLevel_class2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {}',{
                declOnly : true});
            this._assertDefinedName('A',IndexNameKind.topLevel,'A {}');
        } )());
    }

    test_definedName_topLevel_classAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class M {}\nclass C = Object with M;');
            this._assertDefinedName('C',IndexNameKind.topLevel,'C =');
        } )());
    }

    test_definedName_topLevel_enum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('enum E {a, b, c}');
            this._assertDefinedName('E',IndexNameKind.topLevel,'E {');
        } )());
    }

    test_definedName_topLevel_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('foo() {}');
            this._assertDefinedName('foo',IndexNameKind.topLevel,'foo() {}');
        } )());
    }

    test_definedName_topLevel_functionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('typedef F(int p);');
            this._assertDefinedName('F',IndexNameKind.topLevel,'F(int p);');
        } )());
    }

    test_definedName_topLevel_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('int get g => 0;\n');
            this._assertDefinedName('g',IndexNameKind.topLevel,'g => 0;');
        } )());
    }

    test_definedName_topLevel_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('int set s (_) {}\n');
            this._assertDefinedName('s',IndexNameKind.topLevel,'s (_) {}');
        } )());
    }

    test_definedName_topLevel_topLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('var V = 42;');
            this._assertDefinedName('V',IndexNameKind.topLevel,'V = 42;');
        } )());
    }

    test_hasAncestor_ClassDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {}\nclass B1 extends A {}\nclass B2 implements A {}\nclass C1 extends B1 {}\nclass C2 extends B2 {}\nclass C3 implements B1 {}\nclass C4 implements B2 {}\nclass M extends Object with A {}\n');
            let classElementA : any = this.findElement("A");
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isAncestorOf('B1 extends A');
                    _.isAncestorOf('B2 implements A');
                    _.isAncestorOf('C1 extends B1');
                    _.isAncestorOf('C2 extends B2');
                    _.isAncestorOf('C3 implements B1');
                    _.isAncestorOf('C4 implements B2');
                    _.isAncestorOf('M extends Object with A');
                    return _;
                }
            })(this.assertThat(classElementA));
        } )());
    }

    test_hasAncestor_ClassTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {}\nclass B extends A {}\nclass C1 = Object with A;\nclass C2 = Object with B;\n');
            let classElementA : any = this.findElement('A');
            let classElementB : any = this.findElement('B');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isAncestorOf('C1 = Object with A');
                    _.isAncestorOf('C2 = Object with B');
                    return _;
                }
            })(this.assertThat(classElementA));
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isAncestorOf('C2 = Object with B');
                    return _;
                }
            })(this.assertThat(classElementB));
        } )());
    }

    test_isExtendedBy_ClassDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {} // 1\nclass B extends A {} // 2\n');
            let elementA : any = this.findElement('A');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isExtendedAt('A {} // 2',false);
                    _.isReferencedAt('A {} // 2',false);
                    return _;
                }
            })(this.assertThat(elementA));
        } )());
    }

    test_isExtendedBy_ClassDeclaration_isQualified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','class A {}\n');
            await this._indexTestUnit('import \'lib.dart\' as p;\nclass B extends p.A {} // 2\n');
            let elementA : any = this.importedUnit().getType('A');
            this.assertThat(elementA).isExtendedAt('A {} // 2',true);
        } )());
    }

    test_isExtendedBy_ClassDeclaration_Object() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {}\n');
            let elementA : any = this.findElement('A');
            let elementObject : any = elementA.supertype.element;
            this.assertThat(elementObject).isExtendedAt('A {}',true,{
                length : 0});
        } )());
    }

    test_isExtendedBy_ClassTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {}\nclass B {}\nclass C = A with B;\n');
            let elementA : any = this.findElement('A');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isExtendedAt('A with',false);
                    _.isReferencedAt('A with',false);
                    return _;
                }
            })(this.assertThat(elementA));
        } )());
    }

    test_isExtendedBy_ClassTypeAlias_isQualified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','class A {}\n');
            await this._indexTestUnit('import \'lib.dart\' as p;\nclass B {}\nclass C = p.A with B;\n');
            let elementA : any = this.importedUnit().getType('A');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isExtendedAt('A with',true);
                    _.isReferencedAt('A with',true);
                    return _;
                }
            })(this.assertThat(elementA));
        } )());
    }

    test_isImplementedBy_ClassDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {} // 1\nclass B implements A {} // 2\n');
            let elementA : any = this.findElement('A');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isImplementedAt('A {} // 2',false);
                    _.isReferencedAt('A {} // 2',false);
                    return _;
                }
            })(this.assertThat(elementA));
        } )());
    }

    test_isImplementedBy_ClassDeclaration_isQualified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','class A {}\n');
            await this._indexTestUnit('import \'lib.dart\' as p;\nclass B implements p.A {} // 2\n');
            let elementA : any = this.importedUnit().getType('A');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isImplementedAt('A {} // 2',true);
                    _.isReferencedAt('A {} // 2',true);
                    return _;
                }
            })(this.assertThat(elementA));
        } )());
    }

    test_isImplementedBy_ClassTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {} // 1\nclass B {} // 2\nclass C = Object with A implements B; // 3\n');
            let elementB : any = this.findElement('B');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isImplementedAt('B; // 3',false);
                    _.isReferencedAt('B; // 3',false);
                    return _;
                }
            })(this.assertThat(elementB));
        } )());
    }

    test_isInvokedBy_FieldElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  var field;\n  main() {\n    this.field(); // q\n    field(); // nq\n  }\n}');
            let field : any = this.findElement('field');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isInvokedAt('field(); // q',true);
                    _.isInvokedAt('field(); // nq',false);
                    return _;
                }
            })(this.assertThat(field.getter));
        } )());
    }

    test_isInvokedBy_FunctionElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','library lib;\nfoo() {}\n');
            await this._indexTestUnit('import \'lib.dart\';\nimport \'lib.dart\' as pref;\nmain() {\n  pref.foo(); // q\n  foo(); // nq\n}');
            let element : any = op(Op.INDEX,this.importedUnit().functions,0);
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isInvokedAt('foo(); // q',true);
                    _.isInvokedAt('foo(); // nq',false);
                    return _;
                }
            })(this.assertThat(element));
        } )());
    }

    test_isInvokedBy_FunctionElement_synthetic_loadLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this._indexTestUnit('import \'dart:math\' deferred as math;\nmain() {\n  math.loadLibrary(); // 1\n  math.loadLibrary(); // 2\n}\n');
            let mathLib : any = op(Op.INDEX,this.testLibraryElement.imports,0).importedLibrary;
            let element : any = mathLib.loadLibraryFunction;
            this.assertThat(element).isInvokedAt('loadLibrary(); // 1',true);
            this.assertThat(element).isInvokedAt('loadLibrary(); // 2',true);
        } )());
    }

    test_isInvokedBy_MethodElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  foo() {}\n  main() {\n    this.foo(); // q\n    foo(); // nq\n  }\n}');
            let element : any = this.findElement('foo');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isInvokedAt('foo(); // q',true);
                    _.isInvokedAt('foo(); // nq',false);
                    return _;
                }
            })(this.assertThat(element));
        } )());
    }

    test_isInvokedBy_MethodElement_propagatedType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  foo() {}\n}\nmain() {\n  var a = new A();\n  a.foo();\n}\n');
            let element : any = this.findElement('foo');
            this.assertThat(element).isInvokedAt('foo();',true);
        } )());
    }

    test_isInvokedBy_operator_binary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  operator +(other) => this;\n}\nmain(A a) {\n  print(a + 1);\n  a += 2;\n  ++a;\n  a++;\n}\n');
            let element : any = this.findElement('+');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isInvokedAt('+ 1',true,{
                        length : 1});
                    _.isInvokedAt('+= 2',true,{
                        length : 2});
                    _.isInvokedAt('++a',true,{
                        length : 2});
                    _.isInvokedAt('++;',true,{
                        length : 2});
                    return _;
                }
            })(this.assertThat(element));
        } )());
    }

    test_isInvokedBy_operator_index() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  operator [](i) => null;\n  operator []=(i, v) {}\n}\nmain(A a) {\n  print(a[0]);\n  a[1] = 42;\n}\n');
            let readElement : any = this.findElement('[]');
            let writeElement : any = this.findElement('[]=');
            this.assertThat(readElement).isInvokedAt('[0]',true,{
                length : 1});
            this.assertThat(writeElement).isInvokedAt('[1]',true,{
                length : 1});
        } )());
    }

    test_isInvokedBy_operator_prefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  A operator ~() => this;\n}\nmain(A a) {\n  print(~a);\n}\n');
            let element : any = this.findElement('~');
            this.assertThat(element).isInvokedAt('~a',true,{
                length : 1});
        } )());
    }

    test_isInvokedBy_PropertyAccessorElement_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  get ggg => null;\n  main() {\n    this.ggg(); // q\n    ggg(); // nq\n  }\n}');
            let element : any = this.findElement('ggg',ElementKind.GETTER);
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isInvokedAt('ggg(); // q',true);
                    _.isInvokedAt('ggg(); // nq',false);
                    return _;
                }
            })(this.assertThat(element));
        } )());
    }

    test_isMixedInBy_ClassDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {} // 1\nclass B extends Object with A {} // 2\n');
            let elementA : any = this.findElement('A');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isMixedInAt('A {} // 2',false);
                    _.isReferencedAt('A {} // 2',false);
                    return _;
                }
            })(this.assertThat(elementA));
        } )());
    }

    test_isMixedInBy_ClassDeclaration_isQualified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','class A {}\n');
            await this._indexTestUnit('import \'lib.dart\' as p;\nclass B extends Object with p.A {} // 2\n');
            let elementA : any = this.importedUnit().getType('A');
            this.assertThat(elementA).isMixedInAt('A {} // 2',true);
        } )());
    }

    test_isMixedInBy_ClassTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {} // 1\nclass B = Object with A; // 2\n');
            let elementA : any = this.findElement('A');
            this.assertThat(elementA).isMixedInAt('A; // 2',false);
        } )());
    }

    test_isReferencedBy_ClassElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  static var field;\n}\nmain(A p) {\n  A v;\n  new A(); // 2\n  A.field = 1;\n  print(A.field); // 3\n}\n');
            let element : any = this.findElement('A');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('A p) {',false);
                    _.isReferencedAt('A v;',false);
                    _.isReferencedAt('A(); // 2',false);
                    _.isReferencedAt('A.field = 1;',false);
                    _.isReferencedAt('A.field); // 3',false);
                    return _;
                }
            })(this.assertThat(element));
        } )());
    }

    test_isReferencedBy_ClassElement_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this._indexTestUnit('class A {}\nmain() {\n  A(); // invalid code, but still a reference\n}');
            let element : any = this.findElement('A');
            this.assertThat(element).isReferencedAt('A();',false);
        } )());
    }

    test_isReferencedBy_ClassElement_invocation_isQualified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            this.addSource('/lib.dart','class A {}\n');
            await this._indexTestUnit('import \'lib.dart\' as p;\nmain() {\n  p.A(); // invalid code, but still a reference\n}');
            let element : any = this.importedUnit().getType('A');
            this.assertThat(element).isReferencedAt('A();',true);
        } )());
    }

    test_isReferencedBy_ClassTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {}\nclass B = Object with A;\nmain(B p) {\n  B v;\n}\n');
            let element : any = this.findElement('B');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('B p) {',false);
                    _.isReferencedAt('B v;',false);
                    return _;
                }
            })(this.assertThat(element));
        } )());
    }

    test_isReferencedBy_CompilationUnitElement_export() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','library lib;\n');
            await this._indexTestUnit('export \'lib.dart\';\n');
            let element : any = op(Op.INDEX,this.testLibraryElement.exports,0).exportedLibrary;
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt("'lib.dart'",true,{
                        length : 10});
                    return _;
                }
            })(this.assertThat(element));
        } )());
    }

    test_isReferencedBy_CompilationUnitElement_import() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','library lib;\n');
            await this._indexTestUnit('import \'lib.dart\';\n');
            let element : any = op(Op.INDEX,this.testLibraryElement.imports,0).importedLibrary;
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt("'lib.dart'",true,{
                        length : 10});
                    return _;
                }
            })(this.assertThat(element));
        } )());
    }

    test_isReferencedBy_CompilationUnitElement_part() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/my_unit.dart','part of my_lib;');
            await this._indexTestUnit('library my_lib;\npart \'my_unit.dart\';\n');
            let element : any = op(Op.INDEX,this.testLibraryElement.parts,0);
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt("'my_unit.dart';",true,{
                        length : 14});
                    return _;
                }
            })(this.assertThat(element));
        } )());
    }

    test_isReferencedBy_ConstructorElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A implements B {\n  A() {}\n  A.foo() {}\n}\nclass B extends A {\n  B() : super(); // 1\n  B.foo() : super.foo(); // 2\n  factory B.bar() = A.foo; // 3\n}\nmain() {\n  new A(); // 4\n  new A.foo(); // 5\n}\n');
            let classA : any = this.findElement('A');
            let constA : any = op(Op.INDEX,classA.constructors,0);
            let constA_foo : any = op(Op.INDEX,classA.constructors,1);
            ((_) : _ElementIndexAssert =>  {
                {
                    _.hasRelationCount(2);
                    _.isReferencedAt('(); // 1',true,{
                        length : 0});
                    _.isReferencedAt('(); // 4',true,{
                        length : 0});
                    return _;
                }
            })(this.assertThat(constA));
            ((_) : _ElementIndexAssert =>  {
                {
                    _.hasRelationCount(3);
                    _.isReferencedAt('.foo(); // 2',true,{
                        length : 4});
                    _.isReferencedAt('.foo; // 3',true,{
                        length : 4});
                    _.isReferencedAt('.foo(); // 5',true,{
                        length : 4});
                    return _;
                }
            })(this.assertThat(constA_foo));
        } )());
    }

    test_isReferencedBy_ConstructorElement_classTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class M {}\nclass A implements B {\n  A() {}\n  A.named() {}\n}\nclass B = A with M;\nclass C = B with M;\nmain() {\n  new B(); // B1\n  new B.named(); // B2\n  new C(); // C1\n  new C.named(); // C2\n}\n');
            let classA : any = this.findElement('A');
            let constA : any = op(Op.INDEX,classA.constructors,0);
            let constA_named : any = op(Op.INDEX,classA.constructors,1);
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('(); // B1',true,{
                        length : 0});
                    _.isReferencedAt('(); // C1',true,{
                        length : 0});
                    return _;
                }
            })(this.assertThat(constA));
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('.named(); // B2',true,{
                        length : 6});
                    _.isReferencedAt('.named(); // C2',true,{
                        length : 6});
                    return _;
                }
            })(this.assertThat(constA_named));
        } )());
    }

    test_isReferencedBy_ConstructorElement_classTypeAlias_cycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class M {}\nclass A = B with M;\nclass B = A with M;\nmain() {\n  new A();\n  new B();\n}\n');
        } )());
    }

    test_isReferencedBy_ConstructorElement_namedOnlyWithDot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  A.named() {}\n}\nmain() {\n  new A.named();\n}\n');
            let offsetWithoutDot : number = this.findOffset('named();');
            let offsetWithDot : number = this.findOffset('.named();');
            expect(this.unitIndex.usedElementOffsets,isNot(contains(offsetWithoutDot)));
            expect(this.unitIndex.usedElementOffsets,contains(offsetWithDot));
        } )());
    }

    test_isReferencedBy_ConstructorElement_redirection() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  A() : this.bar(); // 1\n  A.foo() : this(); // 2\n  A.bar();\n}\n');
            let classA : any = this.findElement('A');
            let constA : any = op(Op.INDEX,classA.constructors,0);
            let constA_bar : any = op(Op.INDEX,classA.constructors,2);
            this.assertThat(constA).isReferencedAt('(); // 2',true,{
                length : 0});
            this.assertThat(constA_bar).isReferencedAt('.bar(); // 1',true,{
                length : 4});
        } )());
    }

    test_isReferencedBy_ConstructorElement_synthetic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {}\nmain() {\n  new A(); // 1\n}\n');
            let classA : any = this.findElement('A');
            let constA : any = op(Op.INDEX,classA.constructors,0);
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('(); // 1',true,{
                        length : 0});
                    return _;
                }
            })(this.assertThat(constA));
        } )());
    }

    test_isReferencedBy_DynamicElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('dynamic f() {\n}');
            expect(this.unitIndex.usedElementOffsets,isEmpty);
        } )());
    }

    test_isReferencedBy_FieldElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  var field;\n  A({this.field});\n  m() {\n    field = 2; // nq\n    print(field); // nq\n  }\n}\nmain(A a) {\n  a.field = 3; // q\n  print(a.field); // q\n  new A(field: 4);\n}\n');
            let field : any = this.findElement('field',ElementKind.FIELD);
            let getter : any = field.getter;
            let setter : any = field.setter;
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isWrittenAt('field});',true);
                    return _;
                }
            })(this.assertThat(field));
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('field = 2; // nq',false);
                    return _;
                }
            })(this.assertThat(setter));
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('field); // nq',false);
                    return _;
                }
            })(this.assertThat(getter));
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('field = 3; // q',true);
                    return _;
                }
            })(this.assertThat(setter));
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('field); // q',true);
                    return _;
                }
            })(this.assertThat(getter));
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('field: 4',true);
                    return _;
                }
            })(this.assertThat(field));
        } )());
    }

    test_isReferencedBy_FieldElement_multiple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  var aaa;\n  var bbb;\n  A(this.aaa, this.bbb) {}\n  m() {\n    print(aaa);\n    aaa = 1;\n    print(bbb);\n    bbb = 2;\n  }\n}\n');
            {
                let field : any = this.findElement('aaa',ElementKind.FIELD);
                let getter : any = field.getter;
                let setter : any = field.setter;
                ((_) : _ElementIndexAssert =>  {
                    {
                        _.isWrittenAt('aaa, ',true);
                        return _;
                    }
                })(this.assertThat(field));
                ((_) : _ElementIndexAssert =>  {
                    {
                        _.isReferencedAt('aaa);',false);
                        return _;
                    }
                })(this.assertThat(getter));
                ((_) : _ElementIndexAssert =>  {
                    {
                        _.isReferencedAt('aaa = 1;',false);
                        return _;
                    }
                })(this.assertThat(setter));
            }
            {
                let field : any = this.findElement('bbb',ElementKind.FIELD);
                let getter : any = field.getter;
                let setter : any = field.setter;
                ((_) : _ElementIndexAssert =>  {
                    {
                        _.isWrittenAt('bbb) {}',true);
                        return _;
                    }
                })(this.assertThat(field));
                ((_) : _ElementIndexAssert =>  {
                    {
                        _.isReferencedAt('bbb);',false);
                        return _;
                    }
                })(this.assertThat(getter));
                ((_) : _ElementIndexAssert =>  {
                    {
                        _.isReferencedAt('bbb = 2;',false);
                        return _;
                    }
                })(this.assertThat(setter));
            }
        } )());
    }

    test_isReferencedBy_FieldElement_ofEnum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this._indexTestUnit('enum MyEnum {\n  A, B, C\n}\nmain() {\n  print(MyEnum.values);\n  print(MyEnum.A.index);\n  print(MyEnum.A);\n  print(MyEnum.B);\n}\n');
            let enumElement : any = this.findElement('MyEnum');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('values);',true);
                    return _;
                }
            })(this.assertThat(enumElement.getGetter('values')));
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('index);',true);
                    return _;
                }
            })(this.assertThat(enumElement.getGetter('index')));
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('A);',true);
                    return _;
                }
            })(this.assertThat(enumElement.getGetter('A')));
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('B);',true);
                    return _;
                }
            })(this.assertThat(enumElement.getGetter('B')));
        } )());
    }

    test_isReferencedBy_FieldElement_synthetic_hasGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this._indexTestUnit('class A {\n  A() : f = 42;\n  int get f => 0;\n}\n');
            let element2 : any = this.findElement('A');
            this.assertThat(element2.getField('f')).isWrittenAt('f = 42',true);
        } )());
    }

    test_isReferencedBy_FieldElement_synthetic_hasGetterSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this._indexTestUnit('class A {\n  A() : f = 42;\n  int get f => 0;\n  set f(_) {}\n}\n');
            let element2 : any = this.findElement('A');
            this.assertThat(element2.getField('f')).isWrittenAt('f = 42',true);
        } )());
    }

    test_isReferencedBy_FieldElement_synthetic_hasSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this._indexTestUnit('class A {\n  A() : f = 42;\n  set f(_) {}\n}\n');
            let element2 : any = this.findElement('A');
            this.assertThat(element2.getField('f')).isWrittenAt('f = 42',true);
        } )());
    }

    test_isReferencedBy_FunctionElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('foo() {}\nmain() {\n  print(foo);\n  print(foo());\n}\n');
            let element : any = this.findElement('foo');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('foo);',false);
                    _.isInvokedAt('foo());',false);
                    return _;
                }
            })(this.assertThat(element));
        } )());
    }

    test_isReferencedBy_FunctionElement_with_LibraryElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/foo.dart','bar() {}\n');
            await this._indexTestUnit('import "foo.dart";\nmain() {\n  bar();\n}\n');
            let fooLibrary : any = op(Op.INDEX,this.testLibraryElement.imports,0).importedLibrary;
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('"foo.dart";',true,{
                        length : 10});
                    return _;
                }
            })(this.assertThat(fooLibrary));
            {
                let bar : any = op(Op.INDEX,fooLibrary.definingCompilationUnit.functions,0);
                ((_) : _ElementIndexAssert =>  {
                    {
                        _.isInvokedAt('bar();',false);
                        return _;
                    }
                })(this.assertThat(bar));
            }
        } )());
    }

    test_isReferencedBy_FunctionTypeAliasElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('typedef A();\nmain(A p) {\n}\n');
            let element : any = this.findElement('A');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('A p) {',false);
                    return _;
                }
            })(this.assertThat(element));
        } )());
    }

    test_isReferencedBy_identifierInComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {}\n/// [A] text\nvar myVariable = null;\n');
            let element : any = this.findElement('A');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('A] text',false);
                    return _;
                }
            })(this.assertThat(element));
        } )());
    }

    test_isReferencedBy_MethodElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  method() {}\n  main() {\n    print(this.method); // q\n    print(method); // nq\n  }\n}');
            let element : any = this.findElement('method');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('method); // q',true);
                    _.isReferencedAt('method); // nq',false);
                    return _;
                }
            })(this.assertThat(element));
        } )());
    }

    test_isReferencedBy_ParameterElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('foo({var p}) {}\nmain() {\n  foo(p: 1);\n}\n');
            let element : any = this.findElement('p');
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('p: 1',true);
                    return _;
                }
            })(this.assertThat(element));
        } )());
    }

    test_isReferencedBy_TopLevelVariableElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','library lib;\nvar V;\n');
            await this._indexTestUnit('import \'lib.dart\' show V; // imp\nimport \'lib.dart\' as pref;\nmain() {\n  pref.V = 5; // q\n  print(pref.V); // q\n  V = 5; // nq\n  print(V); // nq\n}');
            let variable : any = op(Op.INDEX,this.importedUnit().topLevelVariables,0);
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('V; // imp',true);
                    return _;
                }
            })(this.assertThat(variable));
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('V); // q',true);
                    _.isReferencedAt('V); // nq',false);
                    return _;
                }
            })(this.assertThat(variable.getter));
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isReferencedAt('V = 5; // q',true);
                    _.isReferencedAt('V = 5; // nq',false);
                    return _;
                }
            })(this.assertThat(variable.setter));
        } )());
    }

    test_isReferencedBy_TopLevelVariableElement_synthetic_hasGetterSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            this.addSource('/lib.dart','int get V => 0;\nvoid set V(_) {}\n');
            await this._indexTestUnit('import \'lib.dart\' show V;\n');
            let element : any = op(Op.INDEX,this.importedUnit().topLevelVariables,0);
            this.assertThat(element).isReferencedAt('V;',true);
        } )());
    }

    test_isReferencedBy_TopLevelVariableElement_synthetic_hasSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            this.addSource('/lib.dart','void set V(_) {}\n');
            await this._indexTestUnit('import \'lib.dart\' show V;\n');
            let element : any = op(Op.INDEX,this.importedUnit().topLevelVariables,0);
            this.assertThat(element).isReferencedAt('V;',true);
        } )());
    }

    test_isReferencedBy_typeInVariableList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {}\nA myVariable = null;\n');
            let element : any = this.findElement('A');
            this.assertThat(element).isReferencedAt('A myVariable',false);
        } )());
    }

    test_isWrittenBy_FieldElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  int field;\n  A.foo({this.field});\n  A.bar() : field = 5;\n}\n');
            let element : any = this.findElement('field',ElementKind.FIELD);
            ((_) : _ElementIndexAssert =>  {
                {
                    _.isWrittenAt('field})',true);
                    _.isWrittenAt('field = 5',true);
                    return _;
                }
            })(this.assertThat(element));
        } )());
    }

    test_usedName_inLibraryIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this._indexTestUnit('library aaa.bbb.ccc;\nclass C {\n  var bbb;\n}\nmain(p) {\n  p.bbb = 1;\n}\n');
            ((_) : _NameIndexAssert =>  {
                {
                    _.isNotUsed('bbb.ccc',IndexRelationKind.IS_READ_BY);
                    _.isUsedQ('bbb = 1;',IndexRelationKind.IS_WRITTEN_BY);
                    return _;
                }
            })(this.assertThatName('bbb'));
        } )());
    }

    test_usedName_qualified_resolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this._indexTestUnit('class C {\n  var x;\n}\nmain(C c) {\n  c.x;\n  c.x = 1;\n  c.x += 2;\n  c.x();\n}\n');
            ((_) : _NameIndexAssert =>  {
                {
                    _.isNotUsedQ('x;',IndexRelationKind.IS_READ_BY);
                    _.isNotUsedQ('x = 1;',IndexRelationKind.IS_WRITTEN_BY);
                    _.isNotUsedQ('x += 2;',IndexRelationKind.IS_READ_WRITTEN_BY);
                    _.isNotUsedQ('x();',IndexRelationKind.IS_INVOKED_BY);
                    return _;
                }
            })(this.assertThatName('x'));
        } )());
    }

    test_usedName_qualified_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this._indexTestUnit('main(p) {\n  p.x;\n  p.x = 1;\n  p.x += 2;\n  p.x();\n}\n');
            ((_) : _NameIndexAssert =>  {
                {
                    _.isUsedQ('x;',IndexRelationKind.IS_READ_BY);
                    _.isUsedQ('x = 1;',IndexRelationKind.IS_WRITTEN_BY);
                    _.isUsedQ('x += 2;',IndexRelationKind.IS_READ_WRITTEN_BY);
                    _.isUsedQ('x();',IndexRelationKind.IS_INVOKED_BY);
                    return _;
                }
            })(this.assertThatName('x'));
        } )());
    }

    test_usedName_unqualified_resolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this._indexTestUnit('class C {\n  var x;\n  m() {\n    x;\n    x = 1;\n    x += 2;\n    x();\n  }\n}\n');
            ((_) : _NameIndexAssert =>  {
                {
                    _.isNotUsedQ('x;',IndexRelationKind.IS_READ_BY);
                    _.isNotUsedQ('x = 1;',IndexRelationKind.IS_WRITTEN_BY);
                    _.isNotUsedQ('x += 2;',IndexRelationKind.IS_READ_WRITTEN_BY);
                    _.isNotUsedQ('x();',IndexRelationKind.IS_INVOKED_BY);
                    return _;
                }
            })(this.assertThatName('x'));
        } )());
    }

    test_usedName_unqualified_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this._indexTestUnit('main() {\n  x;\n  x = 1;\n  x += 2;\n  x();\n}\n');
            ((_) : _NameIndexAssert =>  {
                {
                    _.isUsed('x;',IndexRelationKind.IS_READ_BY);
                    _.isUsed('x = 1;',IndexRelationKind.IS_WRITTEN_BY);
                    _.isUsed('x += 2;',IndexRelationKind.IS_READ_WRITTEN_BY);
                    _.isUsed('x();',IndexRelationKind.IS_INVOKED_BY);
                    return _;
                }
            })(this.assertThatName('x'));
        } )());
    }

    _assertDefinedName(name : string,kind : any,search : string) : void {
        let offset : number = this.findOffset(search);
        let nameId : number = this._getStringId(name);
        for(let i : number = 0; i < this.unitIndex.definedNames.length; i++){
            if (op(Op.EQUALS,op(Op.INDEX,this.unitIndex.definedNames,i),nameId) && op(Op.EQUALS,op(Op.INDEX,this.unitIndex.definedNameKinds,i),kind) && op(Op.EQUALS,op(Op.INDEX,this.unitIndex.definedNameOffsets,i),offset)) {
                return;
            }
        }
        this._failWithIndexDump(`Not found ${name} ${kind} at ${offset}`);
    }
    _assertHasRelation(element : any,relations : core.DartList<_Relation>,expectedRelationKind : any,expectedLocation : ExpectedLocation) : void {
        for(let relation of relations) {
            if (op(Op.EQUALS,relation.kind,expectedRelationKind) && relation.offset == expectedLocation.offset && relation.length == expectedLocation.length && relation.isQualified == expectedLocation.isQualified) {
                return;
            }
        }
        this._failWithIndexDump(`not found\n${element} ${expectedRelationKind} at ${expectedLocation}`);
    }
    _assertUsedName(name : string,kind : any,expectedLocation : ExpectedLocation,isNot : boolean) : void {
        let nameId : number = this._getStringId(name);
        for(let i : number = 0; i < this.unitIndex.usedNames.length; i++){
            if (op(Op.EQUALS,op(Op.INDEX,this.unitIndex.usedNames,i),nameId) && op(Op.EQUALS,op(Op.INDEX,this.unitIndex.usedNameKinds,i),kind) && op(Op.EQUALS,op(Op.INDEX,this.unitIndex.usedNameOffsets,i),expectedLocation.offset) && op(Op.EQUALS,op(Op.INDEX,this.unitIndex.usedNameIsQualifiedFlags,i),expectedLocation.isQualified)) {
                if (isNot) {
                    this._failWithIndexDump(`Unexpected ${name} ${kind} at ${expectedLocation}`);
                }
                return;
            }
        }
        if (isNot) {
            return;
        }
        this._failWithIndexDump(`Not found ${name} ${kind} at ${expectedLocation}`);
    }
    _expectedLocation(search : string,isQualified : boolean,_namedArguments? : {length? : number}) : ExpectedLocation {
        let {length} = Object.assign({
        }, _namedArguments );
        let offset : number = this.findOffset(search);
        if (length == null) {
            length = this.getLeadingIdentifierLength(search);
        }
        return new ExpectedLocation(this.testUnitElement,offset,length,isQualified);
    }
    _failWithIndexDump(msg : string) : void {
        let packageIndexJsonString : string = new convert.JsonEncoder.withIndent('  ').convert(this.packageIndex.toJson());
        fail(`${msg} in\n` + packageIndexJsonString);
    }
    _findElementId(element : any) : number {
        let unitId : number = this._getUnitId(element);
        let info : any = new bare.createInstance(any,null,element);
        element = info.element;
        let unitMemberId : number = this._getStringId(PackageIndexAssembler.NULL_STRING);
        let classMemberId : number = this._getStringId(PackageIndexAssembler.NULL_STRING);
        let parameterId : number = this._getStringId(PackageIndexAssembler.NULL_STRING);
        for(let e : any = element; e != null; e = e.enclosingElement){
            if (is(e.enclosingElement, any)) {
                unitMemberId = this._getStringId(e.name);
            }
        }
        for(let e : any = element; e != null; e = e.enclosingElement){
            if (is(e.enclosingElement, any)) {
                classMemberId = this._getStringId(e.name);
            }
        }
        if (is(element, any)) {
            parameterId = this._getStringId(element.name);
        }
        for(let elementId : number = 0; elementId < this.packageIndex.elementUnits.length; elementId++){
            if (op(Op.EQUALS,op(Op.INDEX,this.packageIndex.elementUnits,elementId),unitId) && op(Op.EQUALS,op(Op.INDEX,this.packageIndex.elementNameUnitMemberIds,elementId),unitMemberId) && op(Op.EQUALS,op(Op.INDEX,this.packageIndex.elementNameClassMemberIds,elementId),classMemberId) && op(Op.EQUALS,op(Op.INDEX,this.packageIndex.elementNameParameterIds,elementId),parameterId) && op(Op.EQUALS,op(Op.INDEX,this.packageIndex.elementKinds,elementId),info.kind)) {
                return elementId;
            }
        }
        this._failWithIndexDump(`Element ${element} is not referenced`);
        return 0;
    }
    _getElementRelations(element : any) : core.DartList<_Relation> {
        let elementId : number = this._findElementId(element);
        let relations : core.DartList<_Relation> = new core.DartList.literal<_Relation>();
        for(let i : number = 0; i < this.unitIndex.usedElementOffsets.length; i++){
            if (op(Op.EQUALS,op(Op.INDEX,this.unitIndex.usedElements,i),elementId)) {
                relations.add(new _Relation(op(Op.INDEX,this.unitIndex.usedElementKinds,i),op(Op.INDEX,this.unitIndex.usedElementOffsets,i),op(Op.INDEX,this.unitIndex.usedElementLengths,i),op(Op.INDEX,this.unitIndex.usedElementIsQualifiedFlags,i)));
            }
        }
        return relations;
    }
    _getStringId(str : string) : number {
        let id : number = this.packageIndex.strings.indexOf(str);
        expect(id,isNonNegative);
        return id;
    }
    _getUnitId(element : any) : number {
        let unitElement : any = PackageIndexAssembler.getUnitElement(element);
        let libraryUriId : number = this._getUriId(unitElement.library.source.uri);
        let unitUriId : number = this._getUriId(unitElement.source.uri);
        expect(this.packageIndex.unitLibraryUris,hasLength(this.packageIndex.unitUnitUris.length));
        for(let i : number = 0; i < this.packageIndex.unitLibraryUris.length; i++){
            if (op(Op.EQUALS,op(Op.INDEX,this.packageIndex.unitLibraryUris,i),libraryUriId) && op(Op.EQUALS,op(Op.INDEX,this.packageIndex.unitUnitUris,i),unitUriId)) {
                return i;
            }
        }
        this._failWithIndexDump(`Unit ${unitElement} of ${element} is not referenced`);
        return -1;
    }
    _getUriId(uri : lib5.Uri) : number {
        let str : string = uri.toString();
        return this._getStringId(str);
    }
    _indexTestUnit(code : string,_namedArguments? : {declOnly? : boolean}) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let {declOnly} = Object.assign({
                "declOnly" : false}, _namedArguments );
            await this.resolveTestUnit(code);
            let assembler : any = new bare.createInstance(any,null);
            if (declOnly) {
                assembler.indexDeclarations(this.testUnit);
            }else {
                assembler.indexUnit(this.testUnit);
            }
            let indexBuilder : any = assembler.assemble();
            let indexBytes : core.DartList<number> = indexBuilder.toBuffer();
            this.packageIndex = new bare.createInstance(any,null,indexBytes);
            expect(this.packageIndex.units,hasLength(1));
            this.unitIndex = op(Op.INDEX,this.packageIndex.units,0);
            expect(this.unitIndex.unit,this._getUnitId(this.testUnitElement));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PackageIndexAssemblerTest() {
    }
}

export namespace _ElementIndexAssert {
    export type Constructors = '_ElementIndexAssert';
    export type Interface = Omit<_ElementIndexAssert, Constructors>;
}
@DartClass
export class _ElementIndexAssert {
    test : PackageIndexAssemblerTest;

    element : any;

    relations : core.DartList<_Relation>;

    constructor(test : PackageIndexAssemblerTest,element : any,relations : core.DartList<_Relation>) {
    }
    @defaultConstructor
    _ElementIndexAssert(test : PackageIndexAssemblerTest,element : any,relations : core.DartList<_Relation>) {
        this.test = test;
        this.element = element;
        this.relations = relations;
    }
    hasRelationCount(expectedCount : number) : void {
        expect(this.relations,hasLength(expectedCount));
    }
    isAncestorOf(search : string,_namedArguments? : {length? : number}) : void {
        let {length} = Object.assign({
        }, _namedArguments );
        this.test._assertHasRelation(this.element,this.relations,IndexRelationKind.IS_ANCESTOR_OF,this.test._expectedLocation(search,false,{
            length : length}));
    }
    isExtendedAt(search : string,isQualified : boolean,_namedArguments? : {length? : number}) : void {
        let {length} = Object.assign({
        }, _namedArguments );
        this.test._assertHasRelation(this.element,this.relations,IndexRelationKind.IS_EXTENDED_BY,this.test._expectedLocation(search,isQualified,{
            length : length}));
    }
    isImplementedAt(search : string,isQualified : boolean,_namedArguments? : {length? : number}) : void {
        let {length} = Object.assign({
        }, _namedArguments );
        this.test._assertHasRelation(this.element,this.relations,IndexRelationKind.IS_IMPLEMENTED_BY,this.test._expectedLocation(search,isQualified,{
            length : length}));
    }
    isInvokedAt(search : string,isQualified : boolean,_namedArguments? : {length? : number}) : void {
        let {length} = Object.assign({
        }, _namedArguments );
        this.test._assertHasRelation(this.element,this.relations,IndexRelationKind.IS_INVOKED_BY,this.test._expectedLocation(search,isQualified,{
            length : length}));
    }
    isMixedInAt(search : string,isQualified : boolean,_namedArguments? : {length? : number}) : void {
        let {length} = Object.assign({
        }, _namedArguments );
        this.test._assertHasRelation(this.element,this.relations,IndexRelationKind.IS_MIXED_IN_BY,this.test._expectedLocation(search,isQualified,{
            length : length}));
    }
    isReferencedAt(search : string,isQualified : boolean,_namedArguments? : {length? : number}) : void {
        let {length} = Object.assign({
        }, _namedArguments );
        this.test._assertHasRelation(this.element,this.relations,IndexRelationKind.IS_REFERENCED_BY,this.test._expectedLocation(search,isQualified,{
            length : length}));
    }
    isWrittenAt(search : string,isQualified : boolean,_namedArguments? : {length? : number}) : void {
        let {length} = Object.assign({
        }, _namedArguments );
        this.test._assertHasRelation(this.element,this.relations,IndexRelationKind.IS_WRITTEN_BY,this.test._expectedLocation(search,isQualified,{
            length : length}));
    }
}

export namespace _NameIndexAssert {
    export type Constructors = '_NameIndexAssert';
    export type Interface = Omit<_NameIndexAssert, Constructors>;
}
@DartClass
export class _NameIndexAssert {
    test : PackageIndexAssemblerTest;

    name : string;

    constructor(test : PackageIndexAssemblerTest,name : string) {
    }
    @defaultConstructor
    _NameIndexAssert(test : PackageIndexAssemblerTest,name : string) {
        this.test = test;
        this.name = name;
    }
    isNotUsed(search : string,kind : any) : void {
        this.test._assertUsedName(this.name,kind,this.test._expectedLocation(search,false),true);
    }
    isNotUsedQ(search : string,kind : any) : void {
        this.test._assertUsedName(this.name,kind,this.test._expectedLocation(search,true),true);
    }
    isUsed(search : string,kind : any) : void {
        this.test._assertUsedName(this.name,kind,this.test._expectedLocation(search,false),false);
    }
    isUsedQ(search : string,kind : any) : void {
        this.test._assertUsedName(this.name,kind,this.test._expectedLocation(search,true),false);
    }
}

export namespace _Relation {
    export type Constructors = '_Relation';
    export type Interface = Omit<_Relation, Constructors>;
}
@DartClass
export class _Relation {
    kind : any;

    offset : number;

    length : number;

    isQualified : boolean;

    constructor(kind : any,offset : number,length : number,isQualified : boolean) {
    }
    @defaultConstructor
    _Relation(kind : any,offset : number,length : number,isQualified : boolean) {
        this.kind = kind;
        this.offset = offset;
        this.length = length;
        this.isQualified = isQualified;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `_Relation{kind: ${this.kind}, offset: ${this.offset}, length: ${this.length}, ` + `isQualified: ${this.isQualified}}`;
    }
}

export class properties {
}
