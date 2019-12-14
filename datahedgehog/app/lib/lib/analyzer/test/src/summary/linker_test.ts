/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/summary/linker_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./summarize_ast_test";
import * as lib4 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(LinkerUnitTest);
    });
};
export namespace LinkerUnitTest {
    export type Constructors = lib3.SummaryLinkerTest.Constructors | 'LinkerUnitTest';
    export type Interface = Omit<LinkerUnitTest, Constructors>;
}
@DartClass
export class LinkerUnitTest extends lib3.SummaryLinkerTest {
    linker : any;

    linkerInputs : lib3.LinkerInputs;

    _testLibrary : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get allowMissingFiles() : boolean {
        return false;
    }
    get isUndefined() : any {
        return new bare.createInstance(any,null);
    }
    get testLibrary() : any {
        return this._testLibrary = ( this._testLibrary ) || ( this.linker.getLibrary(this.linkerInputs.testDartUri) as any );
    }
    createLinker(text : string,_namedArguments? : {path? : string}) : void {
        let {path} = Object.assign({
            "path" : '/test.dart'}, _namedArguments );
        this.linkerInputs = this.createLinkerInputs(text,{
            path : path});
        let linkedLibraries : core.DartMap<string,any> = setupForLink(this.linkerInputs.linkedLibraries,this.linkerInputs.getUnit.bind(this.linkerInputs),this.linkerInputs.getDeclaredVariable.bind(this.linkerInputs));
        this.linker = new bare.createInstance(any,null,linkedLibraries,this.linkerInputs.getDependency.bind(this.linkerInputs),this.linkerInputs.getUnit.bind(this.linkerInputs),true);
    }
    getLibrary(uri : string) : any {
        return this.linker.getLibrary(lib4.Uri.parse(uri));
    }
    test_apiSignature_apiChanges() : void {
        let bundle0 = this.createPackageBundle('f(int i) { print(i); }',{
            path : '/test.dart'});
        let bundle1 = this.createPackageBundle('f(String s) { print(s); }',{
            path : '/test.dart'});
        expect(bundle0.apiSignature,isNotEmpty);
        expect(bundle1.apiSignature,isNotEmpty);
        expect(bundle0.apiSignature,isNot(bundle1.apiSignature));
    }
    test_apiSignature_localChanges() : void {
        let bundle0 = this.createPackageBundle('f() { print(0); }',{
            path : '/test.dart'});
        let bundle1 = this.createPackageBundle('f() { print(1); }',{
            path : '/test.dart'});
        expect(bundle0.apiSignature,isNotEmpty);
        expect(bundle1.apiSignature,isNotEmpty);
        expect(bundle0.apiSignature,bundle1.apiSignature);
    }
    test_apiSignature_orderChange() : void {
        this.addNamedSource('/a.dart','class A {}');
        let bundle0 = this.createPackageBundle('class B {}',{
            path : '/b.dart'});
        this.addNamedSource('/b.dart','class B {}');
        let bundle1 = this.createPackageBundle('class A {}',{
            path : '/a.dart'});
        expect(bundle0.apiSignature,isNotEmpty);
        expect(bundle1.apiSignature,isNotEmpty);
        expect(bundle0.apiSignature,bundle1.apiSignature);
    }
    test_apiSignature_unlinkedOnly() : void {
        this.addNamedSource('/a.dart','class C {}');
        let bundle0 = this.createPackageBundle('',{
            path : '/b.dart'});
        this.addNamedSource('/a.dart','');
        let bundle1 = this.createPackageBundle('class C {}',{
            path : '/b.dart'});
        let text = 'import \'a.dart\';\nimport \'b.dart\';\nclass D extends C {}\n';
        this.addBundle('/bundle0.ds',bundle0);
        let bundle2 = this.createPackageBundle(text,{
            path : '/c.dart'});
        this.addBundle('/bundle1.ds',bundle1);
        let bundle3 = this.createPackageBundle(text,{
            path : '/c.dart'});
        expect(bundle2.apiSignature,isNotEmpty);
        expect(bundle3.apiSignature,isNotEmpty);
        expect(bundle2.apiSignature,bundle3.apiSignature);
    }
    test_baseClass_genericWithAccessor() : void {
        this.createLinker('class B<T> {\n  int get i => null;\n}\nclass C<U> extends B<U> {\n  var j;\n}\n    ');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
    }
    test_baseClass_genericWithField() : void {
        this.createLinker('class B<T> {\n  int i = 0;\n}\nclass C<T> extends B<T> {\n  void f() {}\n}\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
    }
    test_baseClass_genericWithFunctionTypedParameter() : void {
        this.createLinker('class B<T> {\n  void f(void g(T t));\n}\nclass C<U> extends B<U> {\n  void f(g) {}\n}\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
    }
    test_baseClass_genericWithGenericMethod() : void {
        this.createLinker('class B<T> {\n  List<U> f<U>(U u) => null;\n}\nclass C<V> extends B<V> {\n  var j;\n}\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
    }
    test_baseClass_genericWithGenericMethod_returnsGenericFuture() : void {
        this.createLinker('import \'dart:async\';\nclass B<T> {\n  Future<T> f() => null;\n}\nclass C<T> extends B<T> {\n  Future<T> f() => null;\n}\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
    }
    test_baseClass_genericWithStaticFinal() : void {
        this.createLinker('class B<T> {\n  static final int i = 0;\n}\nclass C<T> extends B<T> {\n  void f() {}\n}\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
    }
    test_baseClass_withPrivateField() : void {
        this.createLinker('class B {\n  var _b;\n}\nclass C extends B {\n  var c;\n}\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
    }
    test_bundle_refers_to_bundle() : void {
        let bundle1 = this.createPackageBundle('var x = 0;\n',{
            path : '/a.dart'});
        this.addBundle('/a.ds',bundle1);
        let bundle2 = this.createPackageBundle('import "a.dart";\nvar y = x;\n',{
            path : '/b.dart'});
        expect(bundle2.dependencies,hasLength(1));
        expect(op(Op.INDEX,bundle2.dependencies,0).summaryPath,'/a.ds');
        expect(op(Op.INDEX,bundle2.dependencies,0).apiSignature,bundle1.apiSignature);
        this.addBundle('/a.ds',bundle1);
        this.addBundle('/b.ds',bundle2);
        this.createLinker('import "b.dart";\nvar z = y;\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        expect(this._getVariable(library.getContainedName('z')).inferredType.toString(),'int');
    }
    test_constCycle_viaLength() : void {
        this.createLinker('class C {\n  final y;\n  const C() : y = x.length;\n}\nconst x = [const C()];\n');
        this.testLibrary.libraryCycleForLink.ensureLinked();
        let classC : any = this.testLibrary.getContainedName('C');
        expect(classC.unnamedConstructor.isCycleFree,false);
    }
    test_covariance() : void {
        this.createLinker('library meta;\nconst checked = null;\nclass A<T> {\n  void f(@checked T t) {}\n}\nclass B<T> extends A<T> {\n  void f(T t) {}\n}\n');
        this.testLibrary.libraryCycleForLink.ensureLinked();
        let classA : any = this.testLibrary.getContainedName('A');
        let methodAF : any = classA.getContainedName('f');
        let parameterAFT : any = op(Op.INDEX,methodAF.parameters,0);
        expect(parameterAFT.isCovariant,isTrue);
        expect(parameterAFT.inheritsCovariant,isFalse);
        let classB : any = this.testLibrary.getContainedName('B');
        let methodBF : any = classB.getContainedName('f');
        let parameterBFT : any = op(Op.INDEX,methodBF.parameters,0);
        expect(parameterAFT.isCovariant,isTrue);
        expect(parameterBFT.inheritsCovariant,isTrue);
    }
    test_createPackageBundle_withPackageUri() : void {
        let bundle : any = this.createPackageBundle('class B {\n  void f(int i) {}\n}\nclass C extends B {\n  f(i) {} // Inferred param type: int\n}\n',{
            uri : 'package:foo/bar.dart'});
        let cf : any = op(Op.INDEX,op(Op.INDEX,op(Op.INDEX,bundle.unlinkedUnits,0).classes,1).executables,0);
        let cfi : any = op(Op.INDEX,cf.parameters,0);
        expect(cfi.inferredTypeSlot,isNot(0));
        let typeRef : any = this._lookupInferredType(op(Op.INDEX,op(Op.INDEX,bundle.linkedLibraries,0).units,0),cfi.inferredTypeSlot);
        expect(typeRef,isNotNull);
        expect(op(Op.INDEX,op(Op.INDEX,bundle.unlinkedUnits,0).references,typeRef.reference).name,'int');
    }
    test_getContainedName_nonStaticField() : void {
        this.createLinker('class C { var f; }');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        let c : any = library.getContainedName('C');
        expect(c.getContainedName('f'),isNot(this.isUndefined));
    }
    test_getContainedName_nonStaticGetter() : void {
        this.createLinker('class C { get g => null; }');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        let c : any = library.getContainedName('C');
        expect(c.getContainedName('g'),isNot(this.isUndefined));
    }
    test_getContainedName_nonStaticMethod() : void {
        this.createLinker('class C { m() {} }');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        let c : any = library.getContainedName('C');
        expect(c.getContainedName('m'),isNot(this.isUndefined));
    }
    test_getContainedName_nonStaticSetter() : void {
        this.createLinker('class C { void set s(value) {} }');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        let c : any = library.getContainedName('C');
        expect(c.getContainedName('s='),isNot(this.isUndefined));
    }
    test_inferredType_closure_fromBundle() : void {
        let bundle = this.createPackageBundle('var x = () {};\n',{
            path : '/a.dart'});
        this.addBundle('/a.ds',bundle);
        this.createLinker('import \'a.dart\';\nvar y = x;\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        expect(this._getVariable(library.getContainedName('y')).inferredType.toString(),'() → dynamic');
    }
    test_inferredType_closure_fromBundle_identifierSequence() : void {
        let bundle = this.createPackageBundle('class C {\n  static final x = (D d) => d.e;\n}\nclass D {\n  E e;\n}\nclass E {}\n',{
            path : '/a.dart'});
        this.addBundle('/a.ds',bundle);
        this.createLinker('import \'a.dart\';\nvar y = C.x;\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        expect(this._getVariable(library.getContainedName('y')).inferredType.toString(),'(D) → dynamic');
    }
    test_inferredType_instanceField_conditional_genericFunctions() : void {
        this.createLinker('class C {\n  final f = true ? <T>(T t) => 0 : <T>(T t) => 1;\n}\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
        let cls : any = library.getContainedName('C');
        expect(cls.fields,hasLength(1));
        let field = op(Op.INDEX,cls.fields,0);
        expect(field.type.toString(),'(<bottom>) → dynamic');
    }
    test_inferredType_instanceField_dynamic() : void {
        this.createLinker('var x;\nclass C {\n  var f = x; // Inferred type: dynamic\n}\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
        let cls : any = library.getContainedName('C');
        expect(cls.fields,hasLength(1));
        let field = op(Op.INDEX,cls.fields,0);
        expect(field.type.toString(),'dynamic');
    }
    test_inferredType_methodParamType_dynamic() : void {
        this.createLinker('clas B {\n  void f(dynamic x) {}\n}\nclass C extends B {\n  f(x) {} // Inferred param type: dynamic\n}\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
        let cls : any = library.getContainedName('C');
        expect(cls.methods,hasLength(1));
        let method = op(Op.INDEX,cls.methods,0);
        expect(method.parameters,hasLength(1));
        expect(op(Op.INDEX,method.parameters,0).type.toString(),'dynamic');
    }
    test_inferredType_methodReturnType_dynamic() : void {
        this.createLinker('class B {\n  dynamic f() {}\n}\nclass C extends B {\n  f() {} // Inferred return type: dynamic\n}\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
        let cls : any = library.getContainedName('C');
        expect(cls.methods,hasLength(1));
        expect(op(Op.INDEX,cls.methods,0).returnType.toString(),'dynamic');
    }
    test_inferredType_methodReturnType_void() : void {
        this.createLinker('class B {\n  void f() {}\n}\nclass C extends B {\n  f() {}\n}\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
        let cls : any = library.getContainedName('C');
        expect(cls.methods,hasLength(1));
        expect(op(Op.INDEX,cls.methods,0).returnType.toString(),'void');
    }
    test_inferredType_staticField_dynamic() : void {
        this.createLinker('dynamic x = null;\nclass C {\n  static var y = x;\n}\n');
        expect(this._getVariable(this.linker.getLibrary(this.linkerInputs.testDartUri).getContainedName('C').getContainedName('y')).inferredType.toString(),'dynamic');
    }
    test_inferredType_topLevelVariable_dynamic() : void {
        this.createLinker('dynamic x = null;\nvar y = x;\n');
        expect(this._getVariable(this.linker.getLibrary(this.linkerInputs.testDartUri).getContainedName('y')).inferredType.toString(),'dynamic');
    }
    test_inferredTypeFromOutsideBuildUnit_dynamic() : void {
        let bundle = this.createPackageBundle('var x;\nvar y = x; // Inferred type: dynamic\n',{
            path : '/a.dart'});
        this.addBundle('/a.ds',bundle);
        this.createLinker('import \'a.dart\';\nvar z = y; // Inferred type: dynamic\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        expect(this._getVariable(library.getContainedName('z')).inferredType.toString(),'dynamic');
    }
    test_inferredTypeFromOutsideBuildUnit_instanceField() : void {
        let bundle = this.createPackageBundle('class C {\n  var f = 0; // Inferred type: int\n}\n',{
            path : '/a.dart'});
        this.addBundle('/a.ds',bundle);
        this.createLinker('import \'a.dart\';\nvar x = new C().f; // Inferred type: dynamic\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        expect(this._getVariable(library.getContainedName('x')).inferredType.toString(),'dynamic');
    }
    test_inferredTypeFromOutsideBuildUnit_instanceField_toInstanceField() : void {
        let bundle = this.createPackageBundle('class C {\n  var f = 0; // Inferred type: int\n}\n',{
            path : '/a.dart'});
        this.addBundle('/a.ds',bundle);
        this.createLinker('import \'a.dart\';\nclass D {\n  var g = new C().f; // Inferred type: dynamic\n}\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        let classD : any = library.getContainedName('D');
        expect(op(Op.INDEX,classD.fields,0).inferredType.toString(),'dynamic');
    }
    test_inferredTypeFromOutsideBuildUnit_methodParamType_viaInheritance() : void {
        let bundle = this.createPackageBundle('class B {\n  void f(int i) {}\n}\nclass C extends B {\n  f(i) {} // Inferred param type: int\n}\n',{
            path : '/a.dart'});
        this.addBundle('/a.ds',bundle);
        this.createLinker('import \'a.dart\';\nclass D extends C {\n  f(i) {} // Inferred param type: int\n}\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
        let cls : any = library.getContainedName('D');
        expect(cls.methods,hasLength(1));
        let method = op(Op.INDEX,cls.methods,0);
        expect(method.parameters,hasLength(1));
        expect(op(Op.INDEX,method.parameters,0).type.toString(),'int');
    }
    test_inferredTypeFromOutsideBuildUnit_methodReturnType_viaCall() : void {
        let bundle = this.createPackageBundle('class B {\n  int f() => 0;\n}\nclass C extends B {\n  f() => 1; // Inferred return type: int\n}\n',{
            path : '/a.dart'});
        this.addBundle('/a.ds',bundle);
        this.createLinker('import \'a.dart\';\nvar x = new C().f(); // Inferred type: int\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        expect(this._getVariable(library.getContainedName('x')).inferredType.toString(),'int');
    }
    test_inferredTypeFromOutsideBuildUnit_methodReturnType_viaInheritance() : void {
        let bundle = this.createPackageBundle('class B {\n  int f() => 0;\n}\nclass C extends B {\n  f() => 1; // Inferred return type: int\n}\n',{
            path : '/a.dart'});
        this.addBundle('/a.ds',bundle);
        this.createLinker('import \'a.dart\';\nclass D extends C {\n  f() => 2; //Inferred return type: int\n}\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
        let cls : any = library.getContainedName('D');
        expect(cls.methods,hasLength(1));
        expect(op(Op.INDEX,cls.methods,0).returnType.toString(),'int');
    }
    test_inferredTypeFromOutsideBuildUnit_staticField() : void {
        let bundle = this.createPackageBundle('class C { static var f = 0; }',{
            path : '/a.dart'});
        this.addBundle('/a.ds',bundle);
        this.createLinker('import "a.dart"; var x = C.f;',{
            path : '/b.dart'});
        expect(this._getVariable(this.linker.getLibrary(this.linkerInputs.testDartUri).getContainedName('x')).inferredType.toString(),'int');
    }
    test_inferredTypeFromOutsideBuildUnit_topLevelVariable() : void {
        let bundle = this.createPackageBundle('var a = 0;',{
            path : '/a.dart'});
        this.addBundle('/a.ds',bundle);
        this.createLinker('import "a.dart"; var b = a;',{
            path : '/b.dart'});
        expect(this._getVariable(this.linker.getLibrary(this.linkerInputs.testDartUri).getContainedName('b')).inferredType.toString(),'int');
    }
    test_instantiate_param_of_param_to_bounds() : void {
        this.createLinker('class C<T> {}\nclass D<T extends num> {}\nfinal x = new C<D>();\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
        let x : any = library.getContainedName('x');
        let type1 : any = x.returnType;
        expect(type1.element.name,'C');
        expect(type1.typeArguments,hasLength(1));
        let type2 : any = op(Op.INDEX,type1.typeArguments,0);
        expect(type2.element.name,'D');
        expect(type2.typeArguments,hasLength(1));
        let type3 : any = op(Op.INDEX,type2.typeArguments,0);
        expect(type3.toString(),'num');
    }
    test_instantiate_param_to_bounds_class() : void {
        this.createLinker('class C<T extends num> {}\nfinal x = new C();\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
        let x : any = library.getContainedName('x');
        let type1 : any = x.returnType;
        expect(type1.element.name,'C');
        expect(type1.typeArguments,hasLength(1));
        let type2 : any = op(Op.INDEX,type1.typeArguments,0);
        expect(type2.toString(),'num');
    }
    test_instantiate_param_to_bounds_typedef() : void {
        this.createLinker('typedef T F<T extends num>();\nfinal x = new List<F>();\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
        let x : any = library.getContainedName('x');
        let type1 : any = x.returnType;
        expect(type1.element.name,'List');
        expect(type1.typeArguments,hasLength(1));
        let type2 : any = op(Op.INDEX,type1.typeArguments,0);
        expect(type2.element.name,'F');
        expect(type2.returnType.toString(),'num');
    }
    test_leastUpperBound_functionAndClass() : void {
        this.createLinker('class C {}\nvoid f() {}\nvar x = {\n  \'C\': C,\n  \'f\': f\n};\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
    }
    test_libraryCycle_ignoresDependenciesOutsideBuildUnit() : void {
        this.createLinker('import "dart:async";');
        let libraryCycle : any = this.testLibrary.libraryCycleForLink;
        expect(libraryCycle.dependencies,isEmpty);
        expect(libraryCycle.libraries,new core.DartList.literal(this.testLibrary));
    }
    test_libraryCycle_linkEnsuresDependenciesLinked() : void {
        this.addNamedSource('/a.dart','import "b.dart";');
        this.addNamedSource('/b.dart','');
        this.addNamedSource('/c.dart','');
        this.createLinker('import "a.dart"; import "c.dart";');
        let libA : any = this.getLibrary('file:///a.dart');
        let libB : any = this.getLibrary('file:///b.dart');
        let libC : any = this.getLibrary('file:///c.dart');
        expect(libA.libraryCycleForLink.node.isEvaluated,isFalse);
        expect(libB.libraryCycleForLink.node.isEvaluated,isFalse);
        expect(libC.libraryCycleForLink.node.isEvaluated,isFalse);
        libA.libraryCycleForLink.ensureLinked();
        expect(libA.libraryCycleForLink.node.isEvaluated,isTrue);
        expect(libB.libraryCycleForLink.node.isEvaluated,isTrue);
        expect(libC.libraryCycleForLink.node.isEvaluated,isFalse);
    }
    test_libraryCycle_nontrivial() : void {
        this.addNamedSource('/a.dart','import "b.dart";');
        this.addNamedSource('/b.dart','import "a.dart";');
        this.createLinker('');
        let libA : any = this.getLibrary('file:///a.dart');
        let libB : any = this.getLibrary('file:///b.dart');
        let libraryCycle : any = libA.libraryCycleForLink;
        expect(libB.libraryCycleForLink,same(libraryCycle));
        expect(libraryCycle.dependencies,isEmpty);
        expect(libraryCycle.libraries,unorderedEquals(new core.DartList.literal(libA,libB)));
    }
    test_libraryCycle_nontrivial_dependencies() : void {
        this.addNamedSource('/a.dart','');
        this.addNamedSource('/b.dart','');
        this.addNamedSource('/c.dart','import "a.dart"; import "d.dart";');
        this.addNamedSource('/d.dart','import "b.dart"; import "c.dart";');
        this.createLinker('');
        let libA : any = this.getLibrary('file:///a.dart');
        let libB : any = this.getLibrary('file:///b.dart');
        let libC : any = this.getLibrary('file:///c.dart');
        let libD : any = this.getLibrary('file:///d.dart');
        let libraryCycle : any = libC.libraryCycleForLink;
        expect(libD.libraryCycleForLink,same(libraryCycle));
        expect(libraryCycle.dependencies,unorderedEquals(new core.DartList.literal(libA.libraryCycleForLink,libB.libraryCycleForLink)));
        expect(libraryCycle.libraries,unorderedEquals(new core.DartList.literal(libC,libD)));
    }
    test_libraryCycle_nontrivial_via_export() : void {
        this.addNamedSource('/a.dart','export "b.dart";');
        this.addNamedSource('/b.dart','export "a.dart";');
        this.createLinker('');
        let libA : any = this.getLibrary('file:///a.dart');
        let libB : any = this.getLibrary('file:///b.dart');
        let libraryCycle : any = libA.libraryCycleForLink;
        expect(libB.libraryCycleForLink,same(libraryCycle));
        expect(libraryCycle.dependencies,isEmpty);
        expect(libraryCycle.libraries,unorderedEquals(new core.DartList.literal(libA,libB)));
    }
    test_libraryCycle_trivial() : void {
        this.createLinker('');
        let libraryCycle : any = this.testLibrary.libraryCycleForLink;
        expect(libraryCycle.dependencies,isEmpty);
        expect(libraryCycle.libraries,new core.DartList.literal(this.testLibrary));
    }
    test_libraryCycle_trivial_dependencies() : void {
        this.addNamedSource('/a.dart','');
        this.addNamedSource('/b.dart','');
        this.createLinker('import "a.dart"; import "b.dart";');
        let libA : any = this.getLibrary('file:///a.dart');
        let libB : any = this.getLibrary('file:///b.dart');
        let libraryCycle : any = this.testLibrary.libraryCycleForLink;
        expect(libraryCycle.dependencies,unorderedEquals(new core.DartList.literal(libA.libraryCycleForLink,libB.libraryCycleForLink)));
        expect(libraryCycle.libraries,new core.DartList.literal(this.testLibrary));
    }
    test_malformed_function_reference() : void {
        let bundle = this.createPackageBundle('var x = () {}',{
            path : '/a.dart'});
        expect(bundle.linkedLibraries,hasLength(1));
        expect(op(Op.INDEX,bundle.linkedLibraries,0).units,hasLength(1));
        for(let ref of op(Op.INDEX,op(Op.INDEX,bundle.linkedLibraries,0).units,0).references) {
            if (op(Op.EQUALS,ref.kind,ReferenceKind.function)) {
                ref.localIndex = 1234;
            }
        }
        this.addBundle('/a.ds',bundle);
        this.createLinker('import \'a.dart\';\nvar y = x;\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        expect(this._getVariable(library.getContainedName('y')).inferredType.toString(),'dynamic');
    }
    test_multiplyInheritedExecutable_differentSignatures() : void {
        this.createLinker('class B {\n  void f() {}\n}\nabstract class I {\n   f();\n}\nclass C extends B with I {}\nclass D extends C {\n  void f() {}\n}\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        library.libraryCycleForLink.ensureLinked();
    }
    test_parameterParentElementForLink_implicitFunctionTypeIndices() : void {
        this.createLinker('void f(a, void g(b, c, d, void h())) {}');
        let f : any = this.testLibrary.getContainedName('f');
        expect(f.implicitFunctionTypeIndices,new core.DartList.literal());
        let g : any = op(Op.INDEX,f.parameters,1);
        let gType : any = g.type;
        let gTypeElement : any = gType.element;
        expect(gTypeElement.implicitFunctionTypeIndices,new core.DartList.literal(1));
        let h : any = op(Op.INDEX,gTypeElement.parameters,3);
        let hType : any = h.type;
        let hTypeElement : any = hType.element;
        expect(hTypeElement.implicitFunctionTypeIndices,new core.DartList.literal(1,3));
    }
    test_parameterParentElementForLink_innermostExecutable() : void {
        this.createLinker('void f(void g(void h())) {}');
        let f : any = this.testLibrary.getContainedName('f');
        expect(f.typeParameterContext,same(f));
        let g : any = op(Op.INDEX,f.parameters,0);
        let gType : any = g.type;
        let gTypeElement : any = gType.element;
        expect(gTypeElement.typeParameterContext,same(f));
        let h : any = op(Op.INDEX,gTypeElement.parameters,0);
        let hType : any = h.type;
        let hTypeElement : any = hType.element;
        expect(hTypeElement.typeParameterContext,same(f));
    }
    test_topLevelFunction_isStatic() : void {
        this.createLinker('f() {}');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        let f : any = library.getContainedName('f');
        expect(f.isStatic,true);
    }
    test_topLevelGetter_isStatic() : void {
        this.createLinker('get x => null;');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        let x : any = library.getContainedName('x');
        expect(x.isStatic,true);
    }
    test_topLevelSetter_isStatic() : void {
        this.createLinker('void set x(value) {}');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        let x : any = library.getContainedName('x=');
        expect(x.isStatic,true);
    }
    test_topLevelVariable_isStatic() : void {
        this.createLinker('var x;');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        let x : any = library.getContainedName('x');
        expect(x.isStatic,true);
        expect(x.variable.isStatic,true);
    }
    test_typeParameter_isTypeParameterInScope_direct() : void {
        this.createLinker('class C<T, U> {}');
        let c : any = this.testLibrary.getContainedName('C');
        let t : any = op(Op.INDEX,c.typeParameters,0);
        let u : any = op(Op.INDEX,c.typeParameters,1);
        expect(c.isTypeParameterInScope(t),true);
        expect(c.isTypeParameterInScope(u),true);
    }
    test_typeParameter_isTypeParameterInScope_indirect() : void {
        this.createLinker('class C<T, U> { f<V, W>() {} }');
        let c : any = this.testLibrary.getContainedName('C');
        let f : any = op(Op.INDEX,c.methods,0);
        let t : any = op(Op.INDEX,c.typeParameters,0);
        let u : any = op(Op.INDEX,c.typeParameters,1);
        expect(f.isTypeParameterInScope(t),true);
        expect(f.isTypeParameterInScope(u),true);
    }
    test_typeParameter_isTypeParameterInScope_reversed() : void {
        this.createLinker('class C<T, U> { f<V, W>() {} }');
        let c : any = this.testLibrary.getContainedName('C');
        let f : any = op(Op.INDEX,c.methods,0);
        let v : any = op(Op.INDEX,f.typeParameters,0);
        let w : any = op(Op.INDEX,f.typeParameters,1);
        expect(c.isTypeParameterInScope(v),false);
        expect(c.isTypeParameterInScope(w),false);
    }
    test_typeParameter_isTypeParameterInScope_unrelated() : void {
        this.createLinker('class C<T, U> {} class D<V, W> {}');
        let c : any = this.testLibrary.getContainedName('C');
        let d : any = this.testLibrary.getContainedName('D');
        let t : any = op(Op.INDEX,c.typeParameters,0);
        let u : any = op(Op.INDEX,c.typeParameters,1);
        let v : any = op(Op.INDEX,d.typeParameters,0);
        let w : any = op(Op.INDEX,d.typeParameters,1);
        expect(c.isTypeParameterInScope(v),false);
        expect(c.isTypeParameterInScope(w),false);
        expect(d.isTypeParameterInScope(t),false);
        expect(d.isTypeParameterInScope(u),false);
    }
    test_variable_initializer_presence() : void {
        this.createLinker('const int c = 0;\nint i = 0;\nint j;\nvar v = 0;\n');
        let library : any = this.linker.getLibrary(this.linkerInputs.testDartUri);
        let c : any = library.getContainedName('c');
        expect(c.variable.initializer,isNotNull);
        let i : any = library.getContainedName('i');
        expect(i.variable.initializer,isNotNull);
        let j : any = library.getContainedName('j');
        expect(j.variable.initializer,isNull);
        let v : any = library.getContainedName('v');
        expect(v.variable.initializer,isNotNull);
    }
    _getVariable(element : any) : any {
        return (element as any).variable;
    }
    _lookupInferredType(unit : any,slot : number) : any {
        for(let ref of unit.types) {
            if (op(Op.EQUALS,ref.slot,slot)) {
                return ref;
            }
        }
        return null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LinkerUnitTest() {
    }
}

export class properties {
}
