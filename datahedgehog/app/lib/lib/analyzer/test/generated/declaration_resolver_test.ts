/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/declaration_resolver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_support";
import * as lib4 from "./resolver_test_case";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(DeclarationResolverMetadataTest);
        defineReflectiveTests(DeclarationResolverTest);
        defineReflectiveTests(StrongModeDeclarationResolverTest);
    });
};
export var _cloneResolveUnit : (unit : any) => any = (unit : any) : any =>  {
    let clonedUnit : any = AstCloner.clone(unit);
    new bare.createInstance(any,null).resolve(clonedUnit,unit.element);
    return clonedUnit;
};
export var _findSimpleIdentifier : (root : any,code : string,search : string) => any = (root : any,code : string,search : string) : any =>  {
    return lib3.EngineTestCase.findNode(root,code,search,(n : any) =>  {
        return is(n, any);
    });
};
export namespace DeclarationResolverMetadataTest {
    export type Constructors = lib4.ResolverTestCase.Constructors | 'DeclarationResolverMetadataTest';
    export type Interface = Omit<DeclarationResolverMetadataTest, Constructors>;
}
@DartClass
export class DeclarationResolverMetadataTest extends lib4.ResolverTestCase {
    code : string;

    unit : any;

    unit2 : any;

    checkMetadata(search : string,_namedArguments? : {expectDifferent? : boolean}) : void {
        let {expectDifferent} = Object.assign({
            "expectDifferent" : false}, _namedArguments );
        let metadata : any = this._findMetadata(this.unit,search);
        let metadata2 : any = this._findMetadata(this.unit2,search);
        expect(metadata,isNotEmpty);
        for(let i : number = 0; i < metadata.length; i++){
            let expectation : any = same(op(Op.INDEX,metadata,i).elementAnnotation);
            if (expectDifferent) {
                expectation = isNot(expectation);
            }
            expect(op(Op.INDEX,metadata2,i).elementAnnotation,expectation);
        }
    }
    setupCode(code : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            this.code = code;
            this.unit = await this.resolveSource(code + ' const a = null;');
            this.unit2 = _cloneResolveUnit(this.unit);
        } )());
    }

    test_metadata_classDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('@a class C {}');
            this.checkMetadata('C');
        } )());
    }

    test_metadata_classTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('@a class C = D with E; class D {} class E {}');
            this.checkMetadata('C');
        } )());
    }

    test_metadata_constructorDeclaration_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('class C { @a C.x(); }');
            this.checkMetadata('x');
        } )());
    }

    test_metadata_constructorDeclaration_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('class C { @a C(); }');
            this.checkMetadata('C()');
        } )());
    }

    test_metadata_declaredIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('f(x, y) { for (@a var x in y) {} }');
            this.checkMetadata('var',{
                expectDifferent : true});
        } )());
    }

    test_metadata_enumDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('@a enum E { v }');
            this.checkMetadata('E');
        } )());
    }

    test_metadata_exportDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/foo.dart','class C {}');
            await this.setupCode('@a export "foo.dart";');
            this.checkMetadata('export');
        } )());
    }

    test_metadata_exportDirective_resynthesized() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit : any = await this.resolveSource('@a\nexport "dart:async";\n\n@b\nexport "dart:math";\n\nconst a = null;\nconst b = null;\n');
            expect(op(Op.INDEX,unit.directives,0).metadata.single.name.name,'a');
            expect(op(Op.INDEX,unit.directives,1).metadata.single.name.name,'b');
            let unitElement = unit.element as any;
            unitElement.setAnnotations(op(Op.INDEX,unit.directives,0).offset,new core.DartList.literal());
            unitElement.setAnnotations(op(Op.INDEX,unit.directives,1).offset,new core.DartList.literal());
            expect(op(Op.INDEX,unitElement.library.exports,0).metadata,hasLength(1));
            expect(op(Op.INDEX,unitElement.library.exports,1).metadata,hasLength(1));
            let clonedUnit : any = AstCloner.clone(unit);
            new bare.createInstance(any,null).resolve(clonedUnit,unit.element);
            expect(op(Op.INDEX,unit.directives,0).metadata.single.name.name,'a');
            expect(op(Op.INDEX,unit.directives,1).metadata.single.name.name,'b');
        } )());
    }

    test_metadata_fieldDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('class C { @a int x; }');
            this.checkMetadata('x');
        } )());
    }

    test_metadata_fieldFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('class C { var x; C(@a this.x); }');
            this.checkMetadata('this');
        } )());
    }

    test_metadata_fieldFormalParameter_withDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('class C { var x; C([@a this.x = null]); }');
            this.checkMetadata('this');
        } )());
    }

    test_metadata_functionDeclaration_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('@a f() {}');
            this.checkMetadata('f');
        } )());
    }

    test_metadata_functionDeclaration_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('@a get f() => null;');
            this.checkMetadata('f');
        } )());
    }

    test_metadata_functionDeclaration_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('@a set f(value) {}');
            this.checkMetadata('f');
        } )());
    }

    test_metadata_functionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('@a typedef F();');
            this.checkMetadata('F');
        } )());
    }

    test_metadata_functionTypedFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('f(@a g()) {}');
            this.checkMetadata('g');
        } )());
    }

    test_metadata_functionTypedFormalParameter_withDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('f([@a g() = null]) {}');
            this.checkMetadata('g');
        } )());
    }

    test_metadata_importDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/foo.dart','class C {}');
            await this.setupCode('@a import "foo.dart";');
            this.checkMetadata('import');
        } )());
    }

    test_metadata_importDirective_partiallyResolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/foo.dart','class C {}');
            this.code = 'const a = null; @a import "foo.dart";';
            let source : any = this.addNamedSource('/test.dart',this.code);
            let target : any = new bare.createInstance(any,null,source,source);
            this.analysisContext.computeResult(source,LIBRARY_ELEMENT1);
            this.unit = this.analysisContext.computeResult(target,RESOLVED_UNIT1);
            this.unit2 = _cloneResolveUnit(this.unit);
            this.checkMetadata('import');
        } )());
    }

    test_metadata_importDirective_resynthesized() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit : any = await this.resolveSource('@a\nimport "dart:async";\n\n@b\nimport "dart:math";\n\nconst a = null;\nconst b = null;\n');
            expect(op(Op.INDEX,unit.directives,0).metadata.single.name.name,'a');
            expect(op(Op.INDEX,unit.directives,1).metadata.single.name.name,'b');
            let unitElement = unit.element as any;
            unitElement.setAnnotations(op(Op.INDEX,unit.directives,0).offset,new core.DartList.literal());
            unitElement.setAnnotations(op(Op.INDEX,unit.directives,1).offset,new core.DartList.literal());
            expect(op(Op.INDEX,unitElement.library.imports,0).metadata,hasLength(1));
            expect(op(Op.INDEX,unitElement.library.imports,1).metadata,hasLength(1));
            let clonedUnit : any = AstCloner.clone(unit);
            new bare.createInstance(any,null).resolve(clonedUnit,unit.element);
            expect(op(Op.INDEX,unit.directives,0).metadata.single.name.name,'a');
            expect(op(Op.INDEX,unit.directives,1).metadata.single.name.name,'b');
        } )());
    }

    test_metadata_libraryDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('@a library L;');
            this.checkMetadata('L');
        } )());
    }

    test_metadata_libraryDirective_resynthesized() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit : any = await this.resolveSource('@a library L; const a = null;');
            expect(unit.directives.single.metadata.single.name.name,'a');
            let unitElement = unit.element as any;
            unitElement.setAnnotations(unit.directives.single.offset,new core.DartList.literal());
            expect(unitElement.library.metadata,hasLength(1));
            let clonedUnit : any = AstCloner.clone(unit);
            new bare.createInstance(any,null).resolve(clonedUnit,unit.element);
            expect(clonedUnit.directives.single.metadata.single.name.name,'a');
        } )());
    }

    test_metadata_localFunctionDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('f() { @a g() {} }');
            let node : any = lib3.EngineTestCase.findNode(this.unit,this.code,'g',(n : any) =>  {
                return is(n, any);
            });
            expect((node as any).metadata,isEmpty);
        } )());
    }

    test_metadata_localVariableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('f() { @a int x; }');
            this.checkMetadata('x',{
                expectDifferent : true});
        } )());
    }

    test_metadata_methodDeclaration_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('class C { @a get m => null; }');
            this.checkMetadata('m');
        } )());
    }

    test_metadata_methodDeclaration_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('class C { @a m() {} }');
            this.checkMetadata('m');
        } )());
    }

    test_metadata_methodDeclaration_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('class C { @a set m(value) {} }');
            this.checkMetadata('m');
        } )());
    }

    test_metadata_partDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/foo.dart','part of L;');
            await this.setupCode('library L; @a part "foo.dart";');
            this.checkMetadata('part');
        } )());
    }

    test_metadata_partDirective_resynthesized() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/part_a.dart','part of L;');
            this.addNamedSource('/part_b.dart','part of L;');
            let unit : any = await this.resolveSource('library L;\n\n@a\npart "part_a.dart";\n\n@b\npart "part_b.dart";\n\nconst a = null;\nconst b = null;\n');
            expect(op(Op.INDEX,unit.directives,1).metadata.single.name.name,'a');
            expect(op(Op.INDEX,unit.directives,2).metadata.single.name.name,'b');
            let unitElement = unit.element as any;
            unitElement.setAnnotations(op(Op.INDEX,unit.directives,1).offset,new core.DartList.literal());
            unitElement.setAnnotations(op(Op.INDEX,unit.directives,2).offset,new core.DartList.literal());
            expect(op(Op.INDEX,unitElement.library.parts,0).metadata,hasLength(1));
            expect(op(Op.INDEX,unitElement.library.parts,1).metadata,hasLength(1));
            let clonedUnit : any = AstCloner.clone(unit);
            new bare.createInstance(any,null).resolve(clonedUnit,unit.element);
            expect(op(Op.INDEX,unit.directives,1).metadata.single.name.name,'a');
            expect(op(Op.INDEX,unit.directives,2).metadata.single.name.name,'b');
        } )());
    }

    test_metadata_simpleFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('f(@a x) {}) {}');
            this.checkMetadata('x');
        } )());
    }

    test_metadata_simpleFormalParameter_withDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('f([@a x = null]) {}');
            this.checkMetadata('x');
        } )());
    }

    test_metadata_topLevelVariableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('@a int x;');
            this.checkMetadata('x');
        } )());
    }

    test_metadata_typeParameter_ofClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('class C<@a T> {}');
            this.checkMetadata('T');
        } )());
    }

    test_metadata_typeParameter_ofClassTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('class C<@a T> = D with E; class D {} class E {}');
            this.checkMetadata('T');
        } )());
    }

    test_metadata_typeParameter_ofFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('f<@a T>() {}');
            this.checkMetadata('T');
        } )());
    }

    test_metadata_typeParameter_ofTypedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.setupCode('typedef F<@a T>();');
            this.checkMetadata('T');
        } )());
    }

    _findMetadata(unit : any,search : string) : any {
        let node : any = lib3.EngineTestCase.findNode(unit,this.code,search,(_ : any) =>  {
            return true;
        });
        while (node != null){
            if (is(node, any) && node.metadata.isNotEmpty) {
                return node.metadata;
            }
            if (is(node, any) && node.metadata.isNotEmpty) {
                return node.metadata;
            }
            node = node.parent;
        }
        fail('Node not found');
        return null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DeclarationResolverMetadataTest() {
    }
}

export namespace DeclarationResolverTest {
    export type Constructors = lib4.ResolverTestCase.Constructors | 'DeclarationResolverTest';
    export type Interface = Omit<DeclarationResolverTest, Constructors>;
}
@DartClass
export class DeclarationResolverTest extends lib4.ResolverTestCase {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
    }
    test_closure_inside_catch_block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'f() {\n  try {\n  } catch (e) {\n    return () => null;\n  }\n}\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_closure_inside_labeled_statement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'f(b) {\n  foo: while (true) {\n    if (b) {\n      break foo;\n    }\n    return () => null;\n  }\n}\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_closure_inside_switch_case() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'void f(k, m) {\n  switch (k) {\n    case 0:\n      m.forEach((key, value) {});\n    break;\n  }\n}\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_closure_inside_switch_default() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'void f(k, m) {\n  switch (k) {\n    default:\n      m.forEach((key, value) {});\n    break;\n  }\n}\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_enumConstant_partiallyResolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'enum Fruit {apple, pear}\n';
            let source : any = this.addNamedSource('/test.dart',code);
            let target : any = new bare.createInstance(any,null,source,source);
            this.analysisContext.computeResult(source,LIBRARY_ELEMENT1);
            let unit : any = this.analysisContext.computeResult(target,RESOLVED_UNIT1);
            _cloneResolveUnit(unit);
        } )());
    }

    test_functionDeclaration_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'int get zzz => 42;\n';
            let unit : any = await this.resolveSource(code);
            let getterElement : any = _findSimpleIdentifier(unit,code,'zzz =>').staticElement;
            expect(getterElement.isGetter,isTrue);
            let unit2 : any = _cloneResolveUnit(unit);
            let getterName : any = _findSimpleIdentifier(unit2,code,'zzz =>');
            expect(getterName.staticElement,same(getterElement));
        } )());
    }

    test_functionDeclaration_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'void set zzz(_) {}\n';
            let unit : any = await this.resolveSource(code);
            let setterElement : any = _findSimpleIdentifier(unit,code,'zzz(_)').staticElement;
            expect(setterElement.isSetter,isTrue);
            let unit2 : any = _cloneResolveUnit(unit);
            let getterName : any = _findSimpleIdentifier(unit2,code,'zzz(_)');
            expect(getterName.staticElement,same(setterElement));
        } )());
    }

    test_genericFunction_asFunctionReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'Function(int, String) f() => null;\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_genericFunction_asGenericFunctionReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'typedef F<T> = int Function(T t, S s) Function<S>(int);\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_genericFunction_asMethodReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C {\n  Function(int, String) m() => null;\n}\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_genericFunction_asParameterReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'f(Function(int, String) p) => null;\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_genericFunction_asTopLevelVariableType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'int Function(int, String) v;\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_genericFunction_asTypeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'List<Function(int)> v;\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_genericFunction_asTypeArgument_lessNodes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'Map<Function<int>> v;\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_genericFunction_asTypeArgument_moreNodes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'List<Function<int>, Function<String>> v;\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_genericFunction_asTypeArgument_noNodes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'List v;\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_genericFunction_asTypeArgument_ofInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'var v = <Function(int)>[];\n';
            let unit : any = await this.resolveSource(code);
            let newUnit : any = _cloneResolveUnit(unit);
            let v = op(Op.INDEX,newUnit.declarations,0) as any;
            let initializer = op(Op.INDEX,v.variables.variables,0).initializer as any;
            expect(op(Op.INDEX,initializer.typeArguments.arguments,0).type,isNotNull);
        } )());
    }

    test_invalid_functionDeclaration_getter_inFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'var v = (() {\n  main() {\n    int get zzz => 42;\n  }\n});\n';
            let unit : any = await this.resolveSource(code);
            let getterElement : any = _findSimpleIdentifier(unit,code,'zzz =>').staticElement;
            let unit2 : any = _cloneResolveUnit(unit);
            let getterName : any = _findSimpleIdentifier(unit2,code,'zzz =>');
            expect(getterName.staticElement,same(getterElement));
        } )());
    }

    test_invalid_functionDeclaration_setter_inFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'var v = (() {\n  main() {\n    set zzz(x) {}\n  }\n});\n';
            let unit : any = await this.resolveSource(code);
            let setterElement : any = _findSimpleIdentifier(unit,code,'zzz(x)').staticElement;
            let unit2 : any = _cloneResolveUnit(unit);
            let setterName : any = _findSimpleIdentifier(unit2,code,'zzz(x)');
            expect(setterName.staticElement,same(setterElement));
        } )());
    }

    test_visitExportDirective_notExistingSource() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'export \'foo.dart\';\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_visitExportDirective_unresolvedUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'export \'package:foo/bar.dart\';\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_visitFunctionExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main(List<String> items) {\n  items.forEach((item) {});\n}\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_visitGenericTypeAlias_0() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'typedef F<T> = Function<S>(List<S> list, Function<A>(A), T);\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_visitGenericTypeAlias_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'typedef F = Function({int});\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_visitGenericTypeAlias_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'typedef F = int;\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_visitImportDirective_notExistingSource() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'import \'foo.dart\';\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_visitImportDirective_unresolvedUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'import \'package:foo/bar.dart\';\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_visitMethodDeclaration_getter_duplicate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C {\n  int get zzz => 1;\n  String get zzz => null;\n}\n';
            let unit : any = await this.resolveSource(code);
            let firstElement : any = _findSimpleIdentifier(unit,code,'zzz => 1').staticElement;
            let secondElement : any = _findSimpleIdentifier(unit,code,'zzz => null').staticElement;
            let unit2 : any = _cloneResolveUnit(unit);
            let firstName : any = _findSimpleIdentifier(unit2,code,'zzz => 1');
            let secondName : any = _findSimpleIdentifier(unit2,code,'zzz => null');
            expect(firstName.staticElement,same(firstElement));
            expect(secondName.staticElement,same(secondElement));
        } )());
    }

    test_visitMethodDeclaration_getterSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C {\n  int _field = 0;\n  int get field => _field;\n  void set field(value) {_field = value;}\n}\n';
            let unit : any = await this.resolveSource(code);
            let getterElement : any = _findSimpleIdentifier(unit,code,'field =').staticElement;
            let setterElement : any = _findSimpleIdentifier(unit,code,'field(').staticElement;
            let unit2 : any = _cloneResolveUnit(unit);
            let getterName : any = _findSimpleIdentifier(unit2,code,'field =');
            let setterName : any = _findSimpleIdentifier(unit2,code,'field(');
            expect(getterName.staticElement,same(getterElement));
            expect(setterName.staticElement,same(setterElement));
        } )());
    }

    test_visitMethodDeclaration_method_duplicate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C {\n  void zzz(x) {}\n  void zzz(y) {}\n}\n';
            let unit : any = await this.resolveSource(code);
            let firstElement : any = _findSimpleIdentifier(unit,code,'zzz(x)').staticElement;
            let secondElement : any = _findSimpleIdentifier(unit,code,'zzz(y)').staticElement;
            let unit2 : any = _cloneResolveUnit(unit);
            let firstName : any = _findSimpleIdentifier(unit2,code,'zzz(x)');
            let secondName : any = _findSimpleIdentifier(unit2,code,'zzz(y)');
            expect(firstName.staticElement,same(firstElement));
            expect(secondName.staticElement,same(secondElement));
        } )());
    }

    test_visitMethodDeclaration_setter_duplicate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C {\n  set zzz(x) {}\n  set zzz(y) {}\n}\n';
            let unit : any = await this.resolveSource(code);
            let firstElement : any = _findSimpleIdentifier(unit,code,'zzz(x)').staticElement;
            let secondElement : any = _findSimpleIdentifier(unit,code,'zzz(y)').staticElement;
            let unit2 : any = _cloneResolveUnit(unit);
            let firstName : any = _findSimpleIdentifier(unit2,code,'zzz(x)');
            let secondName : any = _findSimpleIdentifier(unit2,code,'zzz(y)');
            expect(firstName.staticElement,same(firstElement));
            expect(secondName.staticElement,same(secondElement));
        } )());
    }

    test_visitMethodDeclaration_unaryMinus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C {\n  C operator -() => null;\n  C operator -(C other) => null;\n}\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    test_visitPartDirective_notExistingSource() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'part \'foo.bar\';\n';
            let unit : any = await this.resolveSource(code);
            _cloneResolveUnit(unit);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DeclarationResolverTest() {
    }
}

export namespace StrongModeDeclarationResolverTest {
    export type Constructors = lib4.ResolverTestCase.Constructors | 'StrongModeDeclarationResolverTest';
    export type Interface = Omit<StrongModeDeclarationResolverTest, Constructors>;
}
@DartClass
export class StrongModeDeclarationResolverTest extends lib4.ResolverTestCase {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        this.resetWith({
            options : ((_) : any =>  {
                {
                    _.strongMode = true;
                    return _;
                }
            })(new bare.createInstance(any,null))});
    }
    test_genericFunction_typeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '/*=T*/ max/*<T>*/(/*=T*/ x, /*=T*/ y) => null;\n';
            let unit : any = await this.resolveSource(code);
            let node : any = _findSimpleIdentifier(unit,code,'max').parent;
            let t : any = op(Op.INDEX,node.functionExpression.typeParameters.typeParameters,0);
            let element : any = node.name.staticElement;
            let tElement : any = op(Op.INDEX,element.typeParameters,0);
            expect(tElement,isNotNull);
            expect(element.typeParameters.toString(),"[T]");
            expect(element.type.toString(),"<T>(T, T) → T");
            expect(t.element,same(tElement));
            let unit2 : any = _cloneResolveUnit(unit);
            node = _findSimpleIdentifier(unit2,code,'max').parent;
            t = op(Op.INDEX,node.functionExpression.typeParameters.typeParameters,0);
            expect(t.element,same(tElement));
        } )());
    }

    test_genericMethod_typeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C {\n  /*=T*/ max/*<T>*/(/*=T*/ x, /*=T*/ y) => null;\n}\n';
            let unit : any = await this.resolveSource(code);
            let node : any = _findSimpleIdentifier(unit,code,'max').parent;
            let t : any = op(Op.INDEX,node.typeParameters.typeParameters,0);
            let element : any = node.name.staticElement;
            let tElement : any = op(Op.INDEX,element.typeParameters,0);
            expect(tElement,isNotNull);
            expect(element.typeParameters.toString(),"[T]");
            expect(element.type.toString(),"<T>(T, T) → T");
            expect(t.element,same(tElement));
            let unit2 : any = _cloneResolveUnit(unit);
            node = _findSimpleIdentifier(unit2,code,'max').parent;
            t = op(Op.INDEX,node.typeParameters.typeParameters,0);
            expect(t.element,same(tElement));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StrongModeDeclarationResolverTest() {
    }
}

export class properties {
}
