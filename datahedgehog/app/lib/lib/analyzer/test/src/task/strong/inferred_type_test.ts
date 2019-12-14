/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/strong/inferred_type_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./strong_test_helper";

export var main : () => void = () : void =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(InferredTypeTest);
        defineReflectiveTests(InferredTypeTest_Driver);
    });
};
export namespace InferredTypeMixin {
    export type Constructors = 'InferredTypeMixin';
    export type Interface = Omit<InferredTypeMixin, Constructors>;
}
@DartClass
export class InferredTypeMixin {
    get hasExtraTaskModelPass() : boolean {
        return true;
    }
    @AbstractProperty
    get mayCheckTypesOfLocals() : boolean{ throw 'abstract'}
    @Abstract
    addFile(content : string,_namedArguments? : {name? : string}) : void{ throw 'abstract'}
    @Abstract
    checkFileElement(content : string) : async.Future<any>{ throw 'abstract'}
    test_asyncClosureReturnType_flatten() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('import \'dart:async\';\nFuture<int> futureInt = null;\nvar f = () => futureInt;\nvar g = () async => futureInt;\n');
            let futureInt = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(futureInt.name,'futureInt');
            expect(futureInt.type.toString(),'Future<int>');
            let f = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(f.name,'f');
            expect(f.type.toString(),'() → Future<int>');
            let g = op(Op.INDEX,mainUnit.topLevelVariables,2);
            expect(g.name,'g');
            expect(g.type.toString(),'() → Future<int>');
        } )());
    }

    test_asyncClosureReturnType_future() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('var f = () async => 0;');
            let f = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(f.name,'f');
            expect(f.type.toString(),'() → Future<int>');
        } )());
    }

    test_asyncClosureReturnType_futureOr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('import \'dart:async\';\nFutureOr<int> futureOrInt = null;\nvar f = () => futureOrInt;\nvar g = () async => futureOrInt;\n');
            let futureOrInt = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(futureOrInt.name,'futureOrInt');
            expect(futureOrInt.type.toString(),'FutureOr<int>');
            let f = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(f.name,'f');
            expect(f.type.toString(),'() → FutureOr<int>');
            let g = op(Op.INDEX,mainUnit.topLevelVariables,2);
            expect(g.name,'g');
            expect(g.type.toString(),'() → Future<int>');
        } )());
    }

    test_blockBodiedLambdas_async_allReturnsAreFutures() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('import \'dart:async\';\nimport \'dart:math\' show Random;\nmain() {\n  var f = /*info:INFERRED_TYPE_CLOSURE*/() async {\n    if (new Random().nextBool()) {\n      return new Future<int>.value(1);\n    } else {\n      return new Future<double>.value(2.0);\n    }\n  };\n  Future<num> g = f();\n  Future<int> h = /*info:ASSIGNMENT_CAST*/f();\n}\n');
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → Future<num>');
        } )());
    }

    test_blockBodiedLambdas_async_allReturnsAreValues() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('import \'dart:async\';\nimport \'dart:math\' show Random;\nmain() {\n  var f = /*info:INFERRED_TYPE_CLOSURE*/() async {\n    if (new Random().nextBool()) {\n      return 1;\n    } else {\n      return 2.0;\n    }\n  };\n  Future<num> g = f();\n  Future<int> h = /*info:ASSIGNMENT_CAST*/f();\n}\n');
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → Future<num>');
        } )());
    }

    test_blockBodiedLambdas_async_mixOfValuesAndFutures() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('import \'dart:async\';\nimport \'dart:math\' show Random;\nmain() {\n  var f = /*info:INFERRED_TYPE_CLOSURE*/() async {\n    if (new Random().nextBool()) {\n      return new Future<int>.value(1);\n    } else {\n      return 2.0;\n    }\n  };\n  Future<num> g = f();\n  Future<int> h = /*info:ASSIGNMENT_CAST*/f();\n}\n');
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → Future<num>');
        } )());
    }

    test_blockBodiedLambdas_asyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('import \'dart:async\';\nmain() {\n  var f = /*info:INFERRED_TYPE_CLOSURE*/() async* {\n    yield 1;\n    Stream<double> s;\n    yield* s;\n  };\n  Stream<num> g = f();\n  Stream<int> h = /*info:ASSIGNMENT_CAST*/f();\n}\n');
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → Stream<num>');
        } )());
    }

    test_blockBodiedLambdas_basic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('test1() {\n  List<int> o;\n  var y = o.map(/*info:INFERRED_TYPE_CLOSURE,info:INFERRED_TYPE_CLOSURE*/(x) { return x + 1; });\n  Iterable<int> z = y;\n}\n');
        } )());
    }

    test_blockBodiedLambdas_downwardsIncompatibleWithUpwardsInference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('main() {\n  String f() => null;\n  var g = f;\n  g = /*info:INFERRED_TYPE_CLOSURE*/() { return /*error:RETURN_OF_INVALID_TYPE*/1; };\n}\n');
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → String');
        } )());
    }

    test_blockBodiedLambdas_downwardsIncompatibleWithUpwardsInference_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('String f() => null;\nvar g = f;\n');
            let f = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(f.type.toString(),'() → String');
        } )());
    }

    test_blockBodiedLambdas_inferBottom_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('import \'dart:async\';\nmain() async {\n  var f = /*info:INFERRED_TYPE_CLOSURE*/() async { return null; };\n  Future y = f();\n  Future<String> z = f();\n  String s = await f();\n}\n');
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → Future<Null>');
        } )());
    }

    test_blockBodiedLambdas_inferBottom_asyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('import \'dart:async\';\nmain() async {\n  var f = /*info:INFERRED_TYPE_CLOSURE*/() async* { yield null; };\n  Stream y = f();\n  Stream<String> z = f();\n  String s = await f().first;\n}\n');
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → Stream<Null>');
        } )());
    }

    test_blockBodiedLambdas_inferBottom_sync() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('var h = null;\nvoid foo(int f(Object _)) {}\n\nmain() {\n  var f = /*info:INFERRED_TYPE_CLOSURE*/(Object x) { return null; };\n  String y = f(42);\n\n  f = /*error:INVALID_CAST_FUNCTION_EXPR, info:INFERRED_TYPE_CLOSURE*/(x) => \'hello\';\n\n  foo(/*info:INFERRED_TYPE_CLOSURE,\n        info:INFERRED_TYPE_CLOSURE*/(x) { return null; });\n  foo(/*info:INFERRED_TYPE_CLOSURE,\n        info:INFERRED_TYPE_CLOSURE*/(x) { throw "not implemented"; });\n}\n');
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,1).localVariables,0);
            expect(f.type.toString(),'(Object) → Null');
        } )());
    }

    test_blockBodiedLambdas_inferBottom_syncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('main() {\n  var f = /*info:INFERRED_TYPE_CLOSURE*/() sync* { yield null; };\n  Iterable y = f();\n  Iterable<String> z = f();\n  String s = f().first;\n}\n');
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → Iterable<Null>');
        } )());
    }

    test_blockBodiedLambdas_LUB() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:math\' show Random;\ntest2() {\n  List<num> o;\n  var y = o.map(/*info:INFERRED_TYPE_CLOSURE, info:INFERRED_TYPE_CLOSURE*/(x) {\n    if (new Random().nextBool()) {\n      return x.toInt() + 1;\n    } else {\n      return x.toDouble();\n    }\n  });\n  Iterable<num> w = y;\n  Iterable<int> z = /*info:ASSIGNMENT_CAST*/y;\n}\n');
        } )());
    }

    test_blockBodiedLambdas_nestedLambdas() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('main() {\n  var f = /*info:INFERRED_TYPE_CLOSURE*/() {\n    return /*info:INFERRED_TYPE_CLOSURE*/(int x) { return 2.0 * x; };\n  };\n}\n');
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → (int) → double');
        } )());
    }

    test_blockBodiedLambdas_noReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('test1() {\n  List<int> o;\n  var y = o.map(/*info:INFERRED_TYPE_CLOSURE,info:INFERRED_TYPE_CLOSURE*/(x) { });\n  Iterable<int> z = y;\n}\n');
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,1);
            expect(f.type.toString(),'Iterable<Null>');
        } )());
    }

    test_blockBodiedLambdas_syncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('main() {\n  var f = /*info:INFERRED_TYPE_CLOSURE*/() sync* {\n    yield 1;\n    yield* /*info:INFERRED_TYPE_LITERAL*/[3, 4.0];\n  };\n  Iterable<num> g = f();\n  Iterable<int> h = /*info:ASSIGNMENT_CAST*/f();\n}\n');
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → Iterable<num>');
        } )());
    }

    test_bottom() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('var v = null;\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'dynamic');
            expect(v.initializer.type.toString(),'() → Null');
        } )());
    }

    test_bottom_inClosure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('var v = () => null;\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'() → dynamic');
            expect(v.initializer.type.toString(),'() → () → dynamic');
        } )());
    }

    test_circularReference_viaClosures() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('var x = () => /*error:TOP_LEVEL_CYCLE*/y;\nvar y = () => /*error:TOP_LEVEL_CYCLE*/x;\n');
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            let y = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(x.name,'x');
            expect(y.name,'y');
            expect(x.type.toString(),'dynamic');
            expect(y.type.toString(),'dynamic');
        } )());
    }

    test_circularReference_viaClosures_initializerTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('var x = () => /*error:TOP_LEVEL_CYCLE*/y;\nvar y = () => /*error:TOP_LEVEL_CYCLE*/x;\n');
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            let y = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(x.name,'x');
            expect(y.name,'y');
            expect(x.initializer.returnType.toString(),'() → dynamic');
            expect(y.initializer.returnType.toString(),'() → dynamic');
        } )());
    }

    test_conflictsCanHappen() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class I1 {\n  int x;\n}\nclass I2 extends I1 {\n  int y;\n}\n\nclass A {\n  final I1 a = null;\n}\n\nclass B {\n  final I2 a = null;\n}\n\nclass C1 implements A, B {\n  /*error:INVALID_METHOD_OVERRIDE*/get a => null;\n}\n\n// Still ambiguous\nclass C2 implements B, A {\n  /*error:INVALID_METHOD_OVERRIDE*/get a => null;\n}\n');
        } )());
    }

    test_conflictsCanHappen2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class I1 {\n  int x;\n}\nclass I2 {\n  int y;\n}\n\nclass I3 implements I1, I2 {\n  int x;\n  int y;\n}\n\nclass A {\n  final I1 a = null;\n}\n\nclass B {\n  final I2 a = null;\n}\n\nclass C1 implements A, B {\n  I3 get a => null;\n}\n\nclass C2 implements A, B {\n  /*error:INVALID_METHOD_OVERRIDE*/get a => null;\n}\n');
        } )());
    }

    test_constructors_downwardsWithConstraint() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {}\nclass B extends A {}\nclass Foo<T extends A> {}\nvoid main() {\n  Foo<B> foo = /*info:INFERRED_TYPE_ALLOCATION*/new Foo();\n}\n');
        } )());
    }

    test_constructors_inferenceFBounded() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let errors = 'error:COULD_NOT_INFER,error:COULD_NOT_INFER';
            let unit = await this.checkFileElement(`class Clonable<T> {}\n\nclass Pair<T extends Clonable<T>, U extends Clonable<U>> {\n  T t;\n  U u;\n  Pair(this.t, this.u);\n  Pair._();\n  Pair<U, T> get reversed => /*info:INFERRED_TYPE_ALLOCATION*/new Pair(u, t);\n}\n\nmain() {\n  final x = new /*${errors}*/Pair._();\n}\n`);
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(x.type.toString(),'Pair<Clonable<dynamic>, Clonable<dynamic>>');
        } )());
    }

    test_constructors_inferFromArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C<T> {\n  T t;\n  C(this.t);\n}\n\nmain() {\n  var x = /*info:INFERRED_TYPE_ALLOCATION*/new C(42);\n\n  num y;\n  C<int> c_int = /*info:INFERRED_TYPE_ALLOCATION*/new C(/*info:DOWN_CAST_IMPLICIT*/y);\n\n  // These hints are not reported because we resolve with a null error listener.\n  C<num> c_num = /*info:INFERRED_TYPE_ALLOCATION*/new C(123);\n  C<num> c_num2 = (/*info:INFERRED_TYPE_ALLOCATION*/new C(456))\n      ..t = 1.0;\n\n  // Down\'t infer from explicit dynamic.\n  var c_dynamic = new C<dynamic>(42);\n  x.t = /*error:INVALID_ASSIGNMENT*/\'hello\';\n}\n');
            let vars = op(Op.INDEX,unit.functions,0).localVariables;
            expect(op(Op.INDEX,vars,0).type.toString(),'C<int>');
            expect(vars.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.name,'c_int');
            }).type.toString(),'C<int>');
            expect(vars.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.name,'c_num');
            }).type.toString(),'C<num>');
            expect(vars.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.name,'c_dynamic');
            }).type.toString(),'C<dynamic>');
        } )());
    }

    test_constructors_inferFromArguments_argumentNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class A {}\n\ntypedef T F<T>();\n\nclass C<T extends A> {\n  C(F<T> f);\n}\n\nclass NotA {}\nNotA myF() => null;\n\nmain() {\n  var x = /*info:INFERRED_TYPE_ALLOCATION*/new /*error:COULD_NOT_INFER*/C(myF);\n}\n');
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,1).localVariables,0);
            expect(x.type.toString(),'C<NotA>');
        } )());
    }

    test_constructors_inferFromArguments_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C<T> {\n  final T t;\n  const C(this.t);\n}\n\nmain() {\n  var x = /*info:INFERRED_TYPE_ALLOCATION*/const C(42);\n}\n');
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(x.type.toString(),'C<int>');
        } )());
    }

    test_constructors_inferFromArguments_constWithUpperBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class C<T extends num> {\n  final T x;\n  const C(this.x);\n}\nclass D<T extends num> {\n  const D();\n}\nvoid f() {\n  const c = /*info:INFERRED_TYPE_ALLOCATION*/const C(0);\n  C<int> c2 = c;\n  const D<int> d = /*info:INFERRED_TYPE_ALLOCATION*/const D();\n}\n');
        } )());
    }

    test_constructors_inferFromArguments_downwardsFromConstructor() {
        return this.checkFileElement('class C<T> { C(List<T> list); }\n\nmain() {\n  var x = /*info:INFERRED_TYPE_ALLOCATION*/new C(/*info:INFERRED_TYPE_LITERAL*/[123]);\n  C<int> y = x;\n\n  var a = new C<dynamic>([123]);\n  // This one however works.\n  var b = new C<Object>(/*info:INFERRED_TYPE_LITERAL*/[123]);\n}\n');
    }
    test_constructors_inferFromArguments_factory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C<T> {\n  T t;\n\n  C._();\n\n  factory C(T t) {\n    var x = new C<T>._();\n    x.t = t;\n    return x;\n  }\n}\n\n\nmain() {\n  var x = /*info:INFERRED_TYPE_ALLOCATION*/new C(42);\n  x.t = /*error:INVALID_ASSIGNMENT*/\'hello\';\n}\n');
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(x.type.toString(),'C<int>');
        } )());
    }

    test_constructors_inferFromArguments_factory_callsConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A<T> {\n  A<T> f = /*info:INFERRED_TYPE_ALLOCATION*/new A();\n  A();\n  factory A.factory() => /*info:INFERRED_TYPE_ALLOCATION*/new A();\n  A<T> m() => /*info:INFERRED_TYPE_ALLOCATION*/new A();\n}\n');
        } )());
    }

    test_constructors_inferFromArguments_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C<T> {\n  T t;\n  C.named(List<T> t);\n}\n\n\nmain() {\n  var x = /*info:INFERRED_TYPE_ALLOCATION*/new C.named(<int>[]);\n  x.t = /*error:INVALID_ASSIGNMENT*/\'hello\';\n}\n');
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(x.type.toString(),'C<int>');
        } )());
    }

    test_constructors_inferFromArguments_namedFactory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C<T> {\n  T t;\n  C();\n\n  factory C.named(T t) {\n    var x = new C<T>();\n    x.t = t;\n    return x;\n  }\n}\n\n\nmain() {\n  var x = /*info:INFERRED_TYPE_ALLOCATION*/new C.named(42);\n  x.t = /*error:INVALID_ASSIGNMENT*/\'hello\';\n}\n');
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(x.type.toString(),'C<int>');
        } )());
    }

    test_constructors_inferFromArguments_redirecting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C<T> {\n  T t;\n  C(this.t);\n  C.named(List<T> t) : this(t[0]);\n}\n\n\nmain() {\n  var x = /*info:INFERRED_TYPE_ALLOCATION*/new C.named(<int>[42]);\n  x.t = /*error:INVALID_ASSIGNMENT*/\'hello\';\n}\n');
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(x.type.toString(),'C<int>');
        } )());
    }

    test_constructors_inferFromArguments_redirectingFactory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('abstract class C<T> {\n  T get t;\n  void set t(T x);\n\n  factory C(T t) = CImpl<T>;\n}\n\nclass CImpl<T> implements C<T> {\n  T t;\n  CImpl(this.t);\n}\n\nmain() {\n  var x = /*info:INFERRED_TYPE_ALLOCATION*/new C(42);\n  x.t = /*error:INVALID_ASSIGNMENT*/\'hello\';\n}\n');
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(x.type.toString(),'C<int>');
        } )());
    }

    test_constructors_reverseTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class Pair<T, U> {\n  T t;\n  U u;\n  Pair(this.t, this.u);\n  Pair<U, T> get reversed => /*info:INFERRED_TYPE_ALLOCATION*/new Pair(u, t);\n}\n');
        } )());
    }

    test_constructors_tooManyPositionalArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class A<T> {}\nmain() {\n  var a = new A/*error:EXTRA_POSITIONAL_ARGUMENTS*/(42);\n}\n');
            let vars = op(Op.INDEX,unit.functions,0).localVariables;
            expect(op(Op.INDEX,vars,0).type.toString(),'A<dynamic>');
        } )());
    }

    test_doNotInferOverriddenFieldsThatExplicitlySayDynamic_infer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {\n  final int x = 2;\n}\n\nclass B implements A {\n  /*error:INVALID_METHOD_OVERRIDE*/dynamic get x => 3;\n}\n\nfoo() {\n  String y = /*info:DYNAMIC_CAST*/new B().x;\n  int z = /*info:DYNAMIC_CAST*/new B().x;\n}\n');
        } )());
    }

    test_dontInferFieldTypeWhenInitializerIsNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var x = null;\nvar y = 3;\nclass A {\n  static var x = null;\n  static var y = 3;\n\n  var x2 = null;\n  var y2 = 3;\n}\n\ntest() {\n  x = "hi";\n  y = /*error:INVALID_ASSIGNMENT*/"hi";\n  A.x = "hi";\n  A.y = /*error:INVALID_ASSIGNMENT*/"hi";\n  new A().x2 = "hi";\n  new A().y2 = /*error:INVALID_ASSIGNMENT*/"hi";\n}\n');
        } )());
    }

    test_dontInferTypeOnDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('test() {\n  dynamic x = 3;\n  x = "hi";\n}\n');
        } )());
    }

    test_dontInferTypeWhenInitializerIsNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('test() {\n  var x = null;\n  x = "hi";\n  x = 3;\n}\n');
        } )());
    }

    test_downwardInference_fixes_noUpwardsErrors() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:math\';\n// T max<T extends num>(T x, T y);\nmain() {\n  num x;\n  dynamic y;\n\n  num a = max(x, /*info:DYNAMIC_CAST*/y);\n  Object b = max(x, /*info:DYNAMIC_CAST*/y);\n  dynamic c = /*error:COULD_NOT_INFER*/max(x, y);\n  var d = /*error:COULD_NOT_INFER*/max(x, y);\n}');
        } )());
    }

    test_downwardInference_miscellaneous() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('typedef T Function2<S, T>(S x);\nclass A<T> {\n  Function2<T, T> x;\n  A(this.x);\n}\nvoid main() {\n  {  // Variables, nested literals\n    var x = "hello";\n    var y = 3;\n    void f(List<Map<int, String>> l) {};\n    f(/*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/{y: x}]);\n  }\n  {\n    int f(int x) => 0;\n    A<int> a = /*info:INFERRED_TYPE_ALLOCATION*/new A(f);\n  }\n}\n');
        } )());
    }

    test_downwardsInference_insideTopLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {\n  B<int> b;\n}\n\nclass B<T> {\n  B(T x);\n}\n\nvar t1 = new A()..b = /*info:INFERRED_TYPE_ALLOCATION*/new B(1);\nvar t2 = <B<int>>[/*info:INFERRED_TYPE_ALLOCATION*/new B(2)];\nvar t3 = /*info:INFERRED_TYPE_LITERAL*/[\n            /*info:INFERRED_TYPE_ALLOCATION*/new\n            /*error:TOP_LEVEL_TYPE_ARGUMENTS*/B(3)\n         ];\n');
        } )());
    }

    test_downwardsInferenceAnnotations() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class Foo {\n  const Foo(List<String> l);\n  const Foo.named(List<String> l);\n}\n@Foo(/*info:INFERRED_TYPE_LITERAL*/const [])\nclass Bar {}\n@Foo.named(/*info:INFERRED_TYPE_LITERAL*/const [])\nclass Baz {}\n');
        } )());
    }

    test_downwardsInferenceAssignmentStatements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('void main() {\n  List<int> l;\n  l = /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"];\n  l = (l = /*info:INFERRED_TYPE_LITERAL*/[1]);\n}\n');
        } )());
    }

    test_downwardsInferenceAsyncAwait() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';\nFuture test() async {\n  dynamic d;\n  List<int> l0 = await /*info:INFERRED_TYPE_LITERAL*/[/*info:DYNAMIC_CAST*/d];\n  List<int> l1 = await /*info:INFERRED_TYPE_ALLOCATION*/new Future.value([d]);\n}\n');
        } )());
    }

    test_downwardsInferenceForEach() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';\n\nabstract class MyStream<T> extends Stream<T> {\n  factory MyStream() => null;\n}\n\nFuture main() async {\n  for(int x in /*info:INFERRED_TYPE_LITERAL*/[1, 2, 3]) {}\n  await for(int x in /*info:INFERRED_TYPE_ALLOCATION*/new MyStream()) {}\n}\n');
        } )());
    }

    test_downwardsInferenceInitializingFormalDefaultFormal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('typedef T Function2<S, T>([S x]);\nclass Foo {\n  List<int> x;\n  Foo([this.x = /*info:INFERRED_TYPE_LITERAL*/const [1]]);\n  Foo.named([List<int> x = /*info:INFERRED_TYPE_LITERAL*/const [1]]);\n}\nvoid f([List<int> l = /*info:INFERRED_TYPE_LITERAL*/const [1]]) {}\n// We do this inference in an early task but don\'t preserve the infos.\nFunction2<List<int>, String> g = /*pass should be info:INFERRED_TYPE_CLOSURE*/([llll = /*info:INFERRED_TYPE_LITERAL*/const [1]]) => "hello";\n');
        } )());
    }

    test_downwardsInferenceOnConstructorArguments_inferDownwards() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class F0 {\n  F0(List<int> a) {}\n}\nclass F1 {\n  F1({List<int> a}) {}\n}\nclass F2 {\n  F2(Iterable<int> a) {}\n}\nclass F3 {\n  F3(Iterable<Iterable<int>> a) {}\n}\nclass F4 {\n  F4({Iterable<Iterable<int>> a}) {}\n}\nvoid main() {\n  new F0(/*info:INFERRED_TYPE_LITERAL*/[]);\n  new F0(/*info:INFERRED_TYPE_LITERAL*/[3]);\n  new F0(/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"]);\n  new F0(/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello",\n                                      3]);\n\n  new F1(a: /*info:INFERRED_TYPE_LITERAL*/[]);\n  new F1(a: /*info:INFERRED_TYPE_LITERAL*/[3]);\n  new F1(a: /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"]);\n  new F1(a: /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello", 3]);\n\n  new F2(/*info:INFERRED_TYPE_LITERAL*/[]);\n  new F2(/*info:INFERRED_TYPE_LITERAL*/[3]);\n  new F2(/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"]);\n  new F2(/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello", 3]);\n\n  new F3(/*info:INFERRED_TYPE_LITERAL*/[]);\n  new F3(/*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[3]]);\n  new F3(/*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"]]);\n  new F3(/*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"],\n                   /*info:INFERRED_TYPE_LITERAL*/[3]]);\n\n  new F4(a: /*info:INFERRED_TYPE_LITERAL*/[]);\n  new F4(a: /*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[3]]);\n  new F4(a: /*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"]]);\n  new F4(a: /*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"],\n                      /*info:INFERRED_TYPE_LITERAL*/[3]]);\n}\n');
        } )());
    }

    test_downwardsInferenceOnFunctionArguments_inferDownwards() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('void f0(List<int> a) {}\nvoid f1({List<int> a}) {}\nvoid f2(Iterable<int> a) {}\nvoid f3(Iterable<Iterable<int>> a) {}\nvoid f4({Iterable<Iterable<int>> a}) {}\nvoid main() {\n  f0(/*info:INFERRED_TYPE_LITERAL*/[]);\n  f0(/*info:INFERRED_TYPE_LITERAL*/[3]);\n  f0(/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"]);\n  f0(/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello", 3]);\n\n  f1(a: /*info:INFERRED_TYPE_LITERAL*/[]);\n  f1(a: /*info:INFERRED_TYPE_LITERAL*/[3]);\n  f1(a: /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"]);\n  f1(a: /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello", 3]);\n\n  f2(/*info:INFERRED_TYPE_LITERAL*/[]);\n  f2(/*info:INFERRED_TYPE_LITERAL*/[3]);\n  f2(/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"]);\n  f2(/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello", 3]);\n\n  f3(/*info:INFERRED_TYPE_LITERAL*/[]);\n  f3(/*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[3]]);\n  f3(/*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"]]);\n  f3(/*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"], /*info:INFERRED_TYPE_LITERAL*/[3]]);\n\n  f4(a: /*info:INFERRED_TYPE_LITERAL*/[]);\n  f4(a: /*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[3]]);\n  f4(a: /*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"]]);\n  f4(a: /*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"], /*info:INFERRED_TYPE_LITERAL*/[3]]);\n}\n');
        } )());
    }

    test_downwardsInferenceOnFunctionExpressions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('typedef T Function2<S, T>(S x);\n\nvoid main () {\n  {\n    Function2<int, String> l0 = /*info:INFERRED_TYPE_CLOSURE*/(int x) => null;\n    Function2<int, String> l1 = (int x) => "hello";\n    Function2<int, String> l2 = /*error:INVALID_ASSIGNMENT*/(String x) => "hello";\n    Function2<int, String> l3 = /*error:INVALID_ASSIGNMENT*/(int x) => 3;\n    Function2<int, String> l4 = /*info:INFERRED_TYPE_CLOSURE*/(int x) {return /*error:RETURN_OF_INVALID_TYPE*/3;};\n  }\n  {\n    Function2<int, String> l0 = /*info:INFERRED_TYPE_CLOSURE*/(x) => null;\n    Function2<int, String> l1 = /*info:INFERRED_TYPE_CLOSURE*/(x) => "hello";\n    Function2<int, String> l2 = /*info:INFERRED_TYPE_CLOSURE, error:INVALID_ASSIGNMENT*/(x) => 3;\n    Function2<int, String> l3 = /*info:INFERRED_TYPE_CLOSURE*/(x) {return /*error:RETURN_OF_INVALID_TYPE*/3;};\n    Function2<int, String> l4 = /*info:INFERRED_TYPE_CLOSURE*/(x) {return /*error:RETURN_OF_INVALID_TYPE*/x;};\n  }\n  {\n    Function2<int, List<String>> l0 = /*info:INFERRED_TYPE_CLOSURE*/(int x) => null;\n    Function2<int, List<String>> l1 = (int x) => /*info:INFERRED_TYPE_LITERAL*/["hello"];\n    Function2<int, List<String>> l2 = /*error:INVALID_ASSIGNMENT*/(String x) => /*info:INFERRED_TYPE_LITERAL*/["hello"];\n    Function2<int, List<String>> l3 = (int x) => /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/3];\n    Function2<int, List<String>> l4 = /*info:INFERRED_TYPE_CLOSURE*/(int x) {return /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/3];};\n  }\n  {\n    Function2<int, int> l0 = /*info:INFERRED_TYPE_CLOSURE*/(x) => x;\n    Function2<int, int> l1 = /*info:INFERRED_TYPE_CLOSURE*/(x) => x+1;\n    Function2<int, String> l2 = /*info:INFERRED_TYPE_CLOSURE, error:INVALID_ASSIGNMENT*/(x) => x;\n    Function2<int, String> l3 = /*info:INFERRED_TYPE_CLOSURE*/(x) => /*info:DYNAMIC_CAST, info:DYNAMIC_INVOKE*/x.substring(3);\n    Function2<String, String> l4 = /*info:INFERRED_TYPE_CLOSURE*/(x) => x.substring(3);\n  }\n}\n');
        } )());
    }

    test_downwardsInferenceOnFunctionOfTUsingTheT() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('void main () {\n  {\n    T f<T>(T x) => null;\n    var v1 = f;\n    v1 = /*info:INFERRED_TYPE_CLOSURE*/<S>(x) => x;\n  }\n  {\n    List<T> f<T>(T x) => null;\n    var v2 = f;\n    v2 = /*info:INFERRED_TYPE_CLOSURE*/<S>(x) => /*info:INFERRED_TYPE_LITERAL*/[x];\n    Iterable<int> r = v2(42);\n    Iterable<String> s = v2(\'hello\');\n    Iterable<List<int>> t = v2(<int>[]);\n    Iterable<num> u = v2(42);\n    Iterable<num> v = v2<num>(42);\n  }\n}\n');
        } )());
    }

    test_downwardsInferenceOnFunctionOfTUsingTheT_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('void main () {\n  {\n    /*=T*/ f/*<T>*/(/*=T*/ x) => null;\n    var v1 = f;\n    v1 = /*info:INFERRED_TYPE_CLOSURE*//*<S>*/(x) => x;\n  }\n  {\n    /*=List<T>*/ f/*<T>*/(/*=T*/ x) => null;\n    var v2 = f;\n    v2 = /*info:INFERRED_TYPE_CLOSURE*//*<S>*/(x) => /*info:INFERRED_TYPE_LITERAL*/[x];\n    Iterable<int> r = v2(42);\n    Iterable<String> s = v2(\'hello\');\n    Iterable<List<int>> t = v2(<int>[]);\n    Iterable<num> u = v2(42);\n    Iterable<num> v = v2/*<num>*/(42);\n  }\n}\n');
        } )());
    }

    test_downwardsInferenceOnGenericConstructorArguments_emptyList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class F3<T> {\n  F3(Iterable<Iterable<T>> a) {}\n}\nclass F4<T> {\n  F4({Iterable<Iterable<T>> a}) {}\n}\nvoid main() {\n  new F3(/*info:INFERRED_TYPE_LITERAL*/[]);\n  new F4(a: /*info:INFERRED_TYPE_LITERAL*/[]);\n}\n');
        } )());
    }

    test_downwardsInferenceOnGenericConstructorArguments_inferDownwards() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class F0<T> {\n  F0(List<T> a) {}\n}\nclass F1<T> {\n  F1({List<T> a}) {}\n}\nclass F2<T> {\n  F2(Iterable<T> a) {}\n}\nclass F3<T> {\n  F3(Iterable<Iterable<T>> a) {}\n}\nclass F4<T> {\n  F4({Iterable<Iterable<T>> a}) {}\n}\nvoid main() {\n  new F0<int>(/*info:INFERRED_TYPE_LITERAL*/[]);\n  new F0<int>(/*info:INFERRED_TYPE_LITERAL*/[3]);\n  new F0<int>(/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"]);\n  new F0<int>(/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello",\n                                      3]);\n\n  new F1<int>(a: /*info:INFERRED_TYPE_LITERAL*/[]);\n  new F1<int>(a: /*info:INFERRED_TYPE_LITERAL*/[3]);\n  new F1<int>(a: /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"]);\n  new F1<int>(a: /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello", 3]);\n\n  new F2<int>(/*info:INFERRED_TYPE_LITERAL*/[]);\n  new F2<int>(/*info:INFERRED_TYPE_LITERAL*/[3]);\n  new F2<int>(/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"]);\n  new F2<int>(/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello", 3]);\n\n  new F3<int>(/*info:INFERRED_TYPE_LITERAL*/[]);\n  new F3<int>(/*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[3]]);\n  new F3<int>(/*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"]]);\n  new F3<int>(/*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"],\n                   /*info:INFERRED_TYPE_LITERAL*/[3]]);\n\n  new F4<int>(a: /*info:INFERRED_TYPE_LITERAL*/[]);\n  new F4<int>(a: /*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[3]]);\n  new F4<int>(a: /*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"]]);\n  new F4<int>(a: /*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"],\n                      /*info:INFERRED_TYPE_LITERAL*/[3]]);\n\n  new F3(/*info:INFERRED_TYPE_LITERAL*/[]);\n  var f31 = /*info:INFERRED_TYPE_ALLOCATION*/new F3(/*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[3]]);\n  var f32 = /*info:INFERRED_TYPE_ALLOCATION*/new F3(/*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/["hello"]]);\n  var f33 = /*info:INFERRED_TYPE_ALLOCATION*/new F3(/*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/["hello"],\n                                        /*info:INFERRED_TYPE_LITERAL*/[3]]);\n\n  new F4(a: /*info:INFERRED_TYPE_LITERAL*/[]);\n  /*info:INFERRED_TYPE_ALLOCATION*/new F4(a: /*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/[3]]);\n  /*info:INFERRED_TYPE_ALLOCATION*/new F4(a: /*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/["hello"]]);\n  /*info:INFERRED_TYPE_ALLOCATION*/new F4(a: /*info:INFERRED_TYPE_LITERAL*/[/*info:INFERRED_TYPE_LITERAL*/["hello"],\n                                           /*info:INFERRED_TYPE_LITERAL*/[3]]);\n}\n');
        } )());
    }

    test_downwardsInferenceOnGenericFunctionExpressions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('void main () {\n  {\n    String f<S>(int x) => null;\n    var v = f;\n    v = /*info:INFERRED_TYPE_CLOSURE*/<T>(int x) => null;\n    v = <T>(int x) => "hello";\n    v = /*error:INVALID_ASSIGNMENT*/<T>(String x) => "hello";\n    v = /*error:INVALID_ASSIGNMENT*/<T>(int x) => 3;\n    v = /*info:INFERRED_TYPE_CLOSURE*/<T>(int x) {return /*error:RETURN_OF_INVALID_TYPE*/3;};\n  }\n  {\n    String f<S>(int x) => null;\n    var v = f;\n    v = /*info:INFERRED_TYPE_CLOSURE, info:INFERRED_TYPE_CLOSURE*/<T>(x) => null;\n    v = /*info:INFERRED_TYPE_CLOSURE*/<T>(x) => "hello";\n    v = /*info:INFERRED_TYPE_CLOSURE, error:INVALID_ASSIGNMENT*/<T>(x) => 3;\n    v = /*info:INFERRED_TYPE_CLOSURE, info:INFERRED_TYPE_CLOSURE*/<T>(x) {return /*error:RETURN_OF_INVALID_TYPE*/3;};\n    v = /*info:INFERRED_TYPE_CLOSURE, info:INFERRED_TYPE_CLOSURE*/<T>(x) {return /*error:RETURN_OF_INVALID_TYPE*/x;};\n  }\n  {\n    List<String> f<S>(int x) => null;\n    var v = f;\n    v = /*info:INFERRED_TYPE_CLOSURE*/<T>(int x) => null;\n    v = <T>(int x) => /*info:INFERRED_TYPE_LITERAL*/["hello"];\n    v = /*error:INVALID_ASSIGNMENT*/<T>(String x) => /*info:INFERRED_TYPE_LITERAL*/["hello"];\n    v = <T>(int x) => /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/3];\n    v = /*info:INFERRED_TYPE_CLOSURE*/<T>(int x) {return /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/3];};\n  }\n  {\n    int int2int<S>(int x) => null;\n    String int2String<T>(int x) => null;\n    String string2String<T>(String x) => null;\n    var x = int2int;\n    x = /*info:INFERRED_TYPE_CLOSURE*/<T>(x) => x;\n    x = /*info:INFERRED_TYPE_CLOSURE*/<T>(x) => x+1;\n    var y = int2String;\n    y = /*info:INFERRED_TYPE_CLOSURE, error:INVALID_ASSIGNMENT*/<T>(x) => x;\n    y = /*info:INFERRED_TYPE_CLOSURE, info:INFERRED_TYPE_CLOSURE*/<T>(x) => /*info:DYNAMIC_INVOKE, info:DYNAMIC_CAST*/x.substring(3);\n    var z = string2String;\n    z = /*info:INFERRED_TYPE_CLOSURE*/<T>(x) => x.substring(3);\n  }\n}\n');
        } )());
    }

    test_downwardsInferenceOnGenericFunctionExpressions_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('void main () {\n  {\n    String f/*<S>*/(int x) => null;\n    var v = f;\n    v = /*info:INFERRED_TYPE_CLOSURE*//*<T>*/(int x) => null;\n    v = /*<T>*/(int x) => "hello";\n    v = /*error:INVALID_ASSIGNMENT*//*<T>*/(String x) => "hello";\n    v = /*error:INVALID_ASSIGNMENT*//*<T>*/(int x) => 3;\n    v = /*info:INFERRED_TYPE_CLOSURE*//*<T>*/(int x) {return /*error:RETURN_OF_INVALID_TYPE*/3;};\n  }\n  {\n    String f/*<S>*/(int x) => null;\n    var v = f;\n    v = /*info:INFERRED_TYPE_CLOSURE, info:INFERRED_TYPE_CLOSURE*//*<T>*/(x) => null;\n    v = /*info:INFERRED_TYPE_CLOSURE*//*<T>*/(x) => "hello";\n    v = /*info:INFERRED_TYPE_CLOSURE, error:INVALID_ASSIGNMENT*//*<T>*/(x) => 3;\n    v = /*info:INFERRED_TYPE_CLOSURE, info:INFERRED_TYPE_CLOSURE*//*<T>*/(x) {return /*error:RETURN_OF_INVALID_TYPE*/3;};\n    v = /*info:INFERRED_TYPE_CLOSURE, info:INFERRED_TYPE_CLOSURE*//*<T>*/(x) {return /*error:RETURN_OF_INVALID_TYPE*/x;};\n  }\n  {\n    List<String> f/*<S>*/(int x) => null;\n    var v = f;\n    v = /*info:INFERRED_TYPE_CLOSURE*//*<T>*/(int x) => null;\n    v = /*<T>*/(int x) => /*info:INFERRED_TYPE_LITERAL*/["hello"];\n    v = /*error:INVALID_ASSIGNMENT*//*<T>*/(String x) => /*info:INFERRED_TYPE_LITERAL*/["hello"];\n    v = /*<T>*/(int x) => /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/3];\n    v = /*info:INFERRED_TYPE_CLOSURE*//*<T>*/(int x) {return /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/3];};\n  }\n  {\n    int int2int/*<S>*/(int x) => null;\n    String int2String/*<T>*/(int x) => null;\n    String string2String/*<T>*/(String x) => null;\n    var x = int2int;\n    x = /*info:INFERRED_TYPE_CLOSURE*//*<T>*/(x) => x;\n    x = /*info:INFERRED_TYPE_CLOSURE*//*<T>*/(x) => x+1;\n    var y = int2String;\n    y = /*info:INFERRED_TYPE_CLOSURE, error:INVALID_ASSIGNMENT*//*<T>*/(x) => x;\n    y = /*info:INFERRED_TYPE_CLOSURE, info:INFERRED_TYPE_CLOSURE*//*<T>*/(x) => /*info:DYNAMIC_INVOKE, info:DYNAMIC_CAST*/x.substring(3);\n    var z = string2String;\n    z = /*info:INFERRED_TYPE_CLOSURE*//*<T>*/(x) => x.substring(3);\n  }\n}\n');
        } )());
    }

    test_downwardsInferenceOnInstanceCreations_inferDownwards() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A<S, T> {\n  S x;\n  T y;\n  A(this.x, this.y);\n  A.named(this.x, this.y);\n}\n\nclass B<S, T> extends A<T, S> {\n  B(S y, T x) : super(x, y);\n  B.named(S y, T x) : super.named(x, y);\n}\n\nclass C<S> extends B<S, S> {\n  C(S a) : super(a, a);\n  C.named(S a) : super.named(a, a);\n}\n\nclass D<S, T> extends B<T, int> {\n  D(T a) : super(a, 3);\n  D.named(T a) : super.named(a, 3);\n}\n\nclass E<S, T> extends A<C<S>, T> {\n  E(T a) : super(null, a);\n}\n\nclass F<S, T> extends A<S, T> {\n  F(S x, T y, {List<S> a, List<T> b}) : super(x, y);\n  F.named(S x, T y, [S a, T b]) : super(a, b);\n}\n\nvoid main() {\n  {\n    A<int, String> a0 = /*info:INFERRED_TYPE_ALLOCATION*/new A(3, "hello");\n    A<int, String> a1 = /*info:INFERRED_TYPE_ALLOCATION*/new A.named(3, "hello");\n    A<int, String> a2 = new A<int, String>(3, "hello");\n    A<int, String> a3 = new A<int, String>.named(3, "hello");\n    A<int, String> a4 = /*error:INVALID_CAST_NEW_EXPR*/new A<int, dynamic>(3, "hello");\n    A<int, String> a5 = /*error:INVALID_CAST_NEW_EXPR*/new A<dynamic, dynamic>.named(3, "hello");\n  }\n  {\n    A<int, String> a0 = /*info:INFERRED_TYPE_ALLOCATION*/new A(\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/"hello",\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/3);\n    A<int, String> a1 = /*info:INFERRED_TYPE_ALLOCATION*/new A.named(\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/"hello",\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/3);\n  }\n  {\n    A<int, String> a0 = /*info:INFERRED_TYPE_ALLOCATION*/new B("hello", 3);\n    A<int, String> a1 = /*info:INFERRED_TYPE_ALLOCATION*/new B.named("hello", 3);\n    A<int, String> a2 = new B<String, int>("hello", 3);\n    A<int, String> a3 = new B<String, int>.named("hello", 3);\n    A<int, String> a4 = /*error:INVALID_ASSIGNMENT*/new B<String, dynamic>("hello", 3);\n    A<int, String> a5 = /*error:INVALID_ASSIGNMENT*/new B<dynamic, dynamic>.named("hello", 3);\n  }\n  {\n    A<int, String> a0 = /*info:INFERRED_TYPE_ALLOCATION*/new B(\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/3,\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/"hello");\n    A<int, String> a1 = /*info:INFERRED_TYPE_ALLOCATION*/new B.named(\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/3,\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/"hello");\n  }\n  {\n    A<int, int> a0 = /*info:INFERRED_TYPE_ALLOCATION*/new C(3);\n    A<int, int> a1 = /*info:INFERRED_TYPE_ALLOCATION*/new C.named(3);\n    A<int, int> a2 = new C<int>(3);\n    A<int, int> a3 = new C<int>.named(3);\n    A<int, int> a4 = /*error:INVALID_ASSIGNMENT*/new C<dynamic>(3);\n    A<int, int> a5 = /*error:INVALID_ASSIGNMENT*/new C<dynamic>.named(3);\n  }\n  {\n    A<int, int> a0 = /*info:INFERRED_TYPE_ALLOCATION*/new C(\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/"hello");\n    A<int, int> a1 = /*info:INFERRED_TYPE_ALLOCATION*/new C.named(\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/"hello");\n  }\n  {\n    A<int, String> a0 = /*info:INFERRED_TYPE_ALLOCATION*/new D("hello");\n    A<int, String> a1 = /*info:INFERRED_TYPE_ALLOCATION*/new D.named("hello");\n    A<int, String> a2 = new D<int, String>("hello");\n    A<int, String> a3 = new D<String, String>.named("hello");\n    A<int, String> a4 = /*error:INVALID_ASSIGNMENT*/new D<num, dynamic>("hello");\n    A<int, String> a5 = /*error:INVALID_ASSIGNMENT*/new D<dynamic, dynamic>.named("hello");\n  }\n  {\n    A<int, String> a0 = /*info:INFERRED_TYPE_ALLOCATION*/new D(\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/3);\n    A<int, String> a1 = /*info:INFERRED_TYPE_ALLOCATION*/new D.named(\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/3);\n  }\n  {\n    A<C<int>, String> a0 = /*info:INFERRED_TYPE_ALLOCATION*/new E("hello");\n  }\n  { // Check named and optional arguments\n    A<int, String> a0 = /*info:INFERRED_TYPE_ALLOCATION*/new F(3, "hello",\n        a: /*info:INFERRED_TYPE_LITERAL*/[3],\n        b: /*info:INFERRED_TYPE_LITERAL*/["hello"]);\n    A<int, String> a1 = /*info:INFERRED_TYPE_ALLOCATION*/new F(3, "hello",\n        a: /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"],\n        b: /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/3]);\n    A<int, String> a2 = /*info:INFERRED_TYPE_ALLOCATION*/new F.named(3, "hello", 3, "hello");\n    A<int, String> a3 = /*info:INFERRED_TYPE_ALLOCATION*/new F.named(3, "hello");\n    A<int, String> a4 = /*info:INFERRED_TYPE_ALLOCATION*/new F.named(3, "hello",\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/"hello", /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/3);\n    A<int, String> a5 = /*info:INFERRED_TYPE_ALLOCATION*/new F.named(3, "hello",\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/"hello");\n  }\n}\n');
        } )());
    }

    test_downwardsInferenceOnListLiterals_inferDownwards() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('void foo([List<String> list1 = /*info:INFERRED_TYPE_LITERAL*/const [],\n          List<String> list2 = /*info:INFERRED_TYPE_LITERAL*/const [/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE,error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/42]]) {\n}\n\nvoid main() {\n  {\n    List<int> l0 = /*info:INFERRED_TYPE_LITERAL*/[];\n    List<int> l1 = /*info:INFERRED_TYPE_LITERAL*/[3];\n    List<int> l2 = /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"];\n    List<int> l3 = /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello", 3];\n  }\n  {\n    List<dynamic> l0 = [];\n    List<dynamic> l1 = [3];\n    List<dynamic> l2 = ["hello"];\n    List<dynamic> l3 = ["hello", 3];\n  }\n  {\n    List<int> l0 = /*error:INVALID_CAST_LITERAL_LIST*/<num>[];\n    List<int> l1 = /*error:INVALID_CAST_LITERAL_LIST*/<num>[3];\n    List<int> l2 = /*error:INVALID_CAST_LITERAL_LIST*/<num>[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"];\n    List<int> l3 = /*error:INVALID_CAST_LITERAL_LIST*/<num>[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello", 3];\n  }\n  {\n    Iterable<int> i0 = /*info:INFERRED_TYPE_LITERAL*/[];\n    Iterable<int> i1 = /*info:INFERRED_TYPE_LITERAL*/[3];\n    Iterable<int> i2 = /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"];\n    Iterable<int> i3 = /*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello", 3];\n  }\n  {\n    const List<int> c0 = /*info:INFERRED_TYPE_LITERAL*/const [];\n    const List<int> c1 = /*info:INFERRED_TYPE_LITERAL*/const [3];\n    const List<int> c2 = /*info:INFERRED_TYPE_LITERAL*/const [/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE,error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello"];\n    const List<int> c3 = /*info:INFERRED_TYPE_LITERAL*/const [/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE,error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/"hello", 3];\n  }\n}\n');
        } )());
    }

    test_downwardsInferenceOnListLiterals_inferIfValueTypesMatchContext() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class DartType {}\ntypedef void Asserter<T>(T type);\ntypedef Asserter<T> AsserterBuilder<S, T>(S arg);\n\nAsserter<DartType> _isInt;\nAsserter<DartType> _isString;\n\nabstract class C {\n  static AsserterBuilder<List<Asserter<DartType>>, DartType> assertBOf;\n  static AsserterBuilder<List<Asserter<DartType>>, DartType> get assertCOf => null;\n\n  AsserterBuilder<List<Asserter<DartType>>, DartType> assertAOf;\n  AsserterBuilder<List<Asserter<DartType>>, DartType> get assertDOf;\n\n  method(AsserterBuilder<List<Asserter<DartType>>, DartType> assertEOf) {\n    assertAOf(/*info:INFERRED_TYPE_LITERAL*/[_isInt, _isString]);\n    assertBOf(/*info:INFERRED_TYPE_LITERAL*/[_isInt, _isString]);\n    assertCOf(/*info:INFERRED_TYPE_LITERAL*/[_isInt, _isString]);\n    assertDOf(/*info:INFERRED_TYPE_LITERAL*/[_isInt, _isString]);\n    assertEOf(/*info:INFERRED_TYPE_LITERAL*/[_isInt, _isString]);\n  }\n  }\n\n  abstract class G<T> {\n  AsserterBuilder<List<Asserter<DartType>>, DartType> assertAOf;\n  AsserterBuilder<List<Asserter<DartType>>, DartType> get assertDOf;\n\n  method(AsserterBuilder<List<Asserter<DartType>>, DartType> assertEOf) {\n    assertAOf(/*info:INFERRED_TYPE_LITERAL*/[_isInt, _isString]);\n    this.assertAOf(/*info:INFERRED_TYPE_LITERAL*/[_isInt, _isString]);\n    this.assertDOf(/*info:INFERRED_TYPE_LITERAL*/[_isInt, _isString]);\n    assertEOf(/*info:INFERRED_TYPE_LITERAL*/[_isInt, _isString]);\n  }\n}\n\nAsserterBuilder<List<Asserter<DartType>>, DartType> assertBOf;\nAsserterBuilder<List<Asserter<DartType>>, DartType> get assertCOf => null;\n\nmain() {\n  AsserterBuilder<List<Asserter<DartType>>, DartType> assertAOf;\n  assertAOf(/*info:INFERRED_TYPE_LITERAL*/[_isInt, _isString]);\n  assertBOf(/*info:INFERRED_TYPE_LITERAL*/[_isInt, _isString]);\n  assertCOf(/*info:INFERRED_TYPE_LITERAL*/[_isInt, _isString]);\n  C.assertBOf(/*info:INFERRED_TYPE_LITERAL*/[_isInt, _isString]);\n  C.assertCOf(/*info:INFERRED_TYPE_LITERAL*/[_isInt, _isString]);\n\n  C c;\n  c.assertAOf(/*info:INFERRED_TYPE_LITERAL*/[_isInt, _isString]);\n  c.assertDOf(/*info:INFERRED_TYPE_LITERAL*/[_isInt, _isString]);\n\n  G<int> g;\n  g.assertAOf(/*info:INFERRED_TYPE_LITERAL*/[_isInt, _isString]);\n  g.assertDOf(/*info:INFERRED_TYPE_LITERAL*/[_isInt, _isString]);\n}\n');
        } )());
    }

    test_downwardsInferenceOnMapLiterals() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('void foo([Map<int, String> m1 = /*info:INFERRED_TYPE_LITERAL*/const {1: "hello"},\n    Map<int, String> m2 = /*info:INFERRED_TYPE_LITERAL*/const {\n      // One error is from type checking and the other is from const evaluation.\n      /*error:MAP_KEY_TYPE_NOT_ASSIGNABLE,error:MAP_KEY_TYPE_NOT_ASSIGNABLE*/"hello":\n          "world"\n    }]) {\n}\nvoid main() {\n  {\n    Map<int, String> l0 = /*info:INFERRED_TYPE_LITERAL*/{};\n    Map<int, String> l1 = /*info:INFERRED_TYPE_LITERAL*/{3: "hello"};\n    Map<int, String> l2 = /*info:INFERRED_TYPE_LITERAL*/{\n      /*error:MAP_KEY_TYPE_NOT_ASSIGNABLE*/"hello": "hello"\n    };\n    Map<int, String> l3 = /*info:INFERRED_TYPE_LITERAL*/{\n      3: /*error:MAP_VALUE_TYPE_NOT_ASSIGNABLE*/3\n    };\n    Map<int, String> l4 = /*info:INFERRED_TYPE_LITERAL*/{\n      3: "hello",\n      /*error:MAP_KEY_TYPE_NOT_ASSIGNABLE*/"hello":\n          /*error:MAP_VALUE_TYPE_NOT_ASSIGNABLE*/3\n    };\n  }\n  {\n    Map<dynamic, dynamic> l0 = {};\n    Map<dynamic, dynamic> l1 = {3: "hello"};\n    Map<dynamic, dynamic> l2 = {"hello": "hello"};\n    Map<dynamic, dynamic> l3 = {3: 3};\n    Map<dynamic, dynamic> l4 = {3:"hello", "hello": 3};\n  }\n  {\n    Map<dynamic, String> l0 = /*info:INFERRED_TYPE_LITERAL*/{};\n    Map<dynamic, String> l1 = /*info:INFERRED_TYPE_LITERAL*/{3: "hello"};\n    Map<dynamic, String> l2 = /*info:INFERRED_TYPE_LITERAL*/{"hello": "hello"};\n    Map<dynamic, String> l3 = /*info:INFERRED_TYPE_LITERAL*/{\n      3: /*error:MAP_VALUE_TYPE_NOT_ASSIGNABLE*/3\n    };\n    Map<dynamic, String> l4 = /*info:INFERRED_TYPE_LITERAL*/{\n      3: "hello",\n      "hello": /*error:MAP_VALUE_TYPE_NOT_ASSIGNABLE*/3\n    };\n  }\n  {\n    Map<int, dynamic> l0 = /*info:INFERRED_TYPE_LITERAL*/{};\n    Map<int, dynamic> l1 = /*info:INFERRED_TYPE_LITERAL*/{3: "hello"};\n    Map<int, dynamic> l2 = /*info:INFERRED_TYPE_LITERAL*/{\n      /*error:MAP_KEY_TYPE_NOT_ASSIGNABLE*/"hello": "hello"\n    };\n    Map<int, dynamic> l3 = /*info:INFERRED_TYPE_LITERAL*/{3: 3};\n    Map<int, dynamic> l4 = /*info:INFERRED_TYPE_LITERAL*/{\n      3:"hello",\n      /*error:MAP_KEY_TYPE_NOT_ASSIGNABLE*/"hello": 3\n    };\n  }\n  {\n    Map<int, String> l0 = /*error:INVALID_CAST_LITERAL_MAP*/<num, dynamic>{};\n    Map<int, String> l1 = /*error:INVALID_CAST_LITERAL_MAP*/<num, dynamic>{3: "hello"};\n    Map<int, String> l3 = /*error:INVALID_CAST_LITERAL_MAP*/<num, dynamic>{3: 3};\n  }\n  {\n    const Map<int, String> l0 = /*info:INFERRED_TYPE_LITERAL*/const {};\n    const Map<int, String> l1 = /*info:INFERRED_TYPE_LITERAL*/const {3: "hello"};\n    const Map<int, String> l2 = /*info:INFERRED_TYPE_LITERAL*/const {\n      /*error:MAP_KEY_TYPE_NOT_ASSIGNABLE,error:MAP_KEY_TYPE_NOT_ASSIGNABLE*/"hello":\n          "hello"\n    };\n    const Map<int, String> l3 = /*info:INFERRED_TYPE_LITERAL*/const {\n      3: /*error:MAP_VALUE_TYPE_NOT_ASSIGNABLE,error:MAP_VALUE_TYPE_NOT_ASSIGNABLE*/3\n    };\n    const Map<int, String> l4 = /*info:INFERRED_TYPE_LITERAL*/const {\n      3:"hello",\n      /*error:MAP_KEY_TYPE_NOT_ASSIGNABLE,error:MAP_KEY_TYPE_NOT_ASSIGNABLE*/"hello":\n          /*error:MAP_VALUE_TYPE_NOT_ASSIGNABLE,error:MAP_VALUE_TYPE_NOT_ASSIGNABLE*/3\n    };\n  }\n}\n');
        } )());
    }

    test_downwardsInferenceYieldYieldStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';\n\nabstract class MyStream<T> extends Stream<T> {\n  factory MyStream() => null;\n}\n\nStream<List<int>> foo() async* {\n  yield /*info:INFERRED_TYPE_LITERAL*/[];\n  yield /*error:YIELD_OF_INVALID_TYPE*/new MyStream();\n  yield* /*error:YIELD_OF_INVALID_TYPE*/[];\n  yield* /*info:INFERRED_TYPE_ALLOCATION*/new MyStream();\n}\n\nIterable<Map<int, int>> bar() sync* {\n  yield /*info:INFERRED_TYPE_LITERAL*/{};\n  yield /*error:YIELD_OF_INVALID_TYPE*/new List();\n  yield* /*error:YIELD_OF_INVALID_TYPE*/{};\n  yield* /*info:INFERRED_TYPE_ALLOCATION*/new List();\n}\n');
        } )());
    }

    test_fieldRefersToStaticGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  final x = _x;\n  static int get _x => null;\n}\n');
            let x = op(Op.INDEX,op(Op.INDEX,mainUnit.types,0).fields,0);
            expect(x.type.toString(),'int');
        } )());
    }

    test_fieldRefersToTopLevelGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  final x = y;\n}\nint get y => null;\n');
            let x = op(Op.INDEX,op(Op.INDEX,mainUnit.types,0).fields,0);
            expect(x.type.toString(),'int');
        } )());
    }

    test_futureOr_subtyping() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';\nvoid add(int x) {}\nadd2(int y) {}\nmain() {\n  Future<int> f;\n  var a = f.then(add);\n  var b = f.then(add2);\n}\n  ');
        } )());
    }

    test_futureThen() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            var build : (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) => string = (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) : string =>  {
                let {declared,downwards,upwards} = Object.assign({
                }, _namedArguments );
                return `import 'dart:async';\nclass MyFuture<T> implements Future<T> {\n  MyFuture() {}\n  MyFuture.value(T x) {}\n  dynamic noSuchMethod(invocation);\n  MyFuture<S> then<S>(FutureOr<S> f(T x), {Function onError}) => null;\n}\n\nvoid main() {\n  ${declared} f;\n  ${downwards}<int> t1 = f.then((_) async => await new ${upwards}<int>.value(3));\n  ${downwards}<int> t2 = f.then(/*info:INFERRED_TYPE_CLOSURE*/(_) async {\n     return await new ${upwards}<int>.value(3);});\n  ${downwards}<int> t3 = f.then((_) async => 3);\n  ${downwards}<int> t4 = f.then(/*info:INFERRED_TYPE_CLOSURE*/(_) async {\n    return 3;});\n  ${downwards}<int> t5 = f.then((_) => new ${upwards}<int>.value(3));\n  ${downwards}<int> t6 = f.then(/*info:INFERRED_TYPE_CLOSURE*/(_) {return new ${upwards}<int>.value(3);});\n  ${downwards}<int> t7 = f.then((_) async => new ${upwards}<int>.value(3));\n  ${downwards}<int> t8 = f.then(/*info:INFERRED_TYPE_CLOSURE*/(_) async {\n    return new ${upwards}<int>.value(3);});\n}\n`;
            };
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "Future",upwards : "Future"}));
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "Future",upwards : "MyFuture"}));
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "MyFuture",upwards : "Future"}));
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "MyFuture",upwards : "MyFuture"}));
            await this.checkFileElement(build({
                declared : "Future",downwards : "Future",upwards : "MyFuture"}));
            await this.checkFileElement(build({
                declared : "Future",downwards : "Future",upwards : "Future"}));
        } )());
    }

    test_futureThen_conditional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            var build : (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) => string = (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) : string =>  {
                let {declared,downwards,upwards} = Object.assign({
                }, _namedArguments );
                return `import 'dart:async';\nclass MyFuture<T> implements Future<T> {\n  MyFuture() {}\n  MyFuture.value(T x) {}\n  dynamic noSuchMethod(invocation);\n  MyFuture<S> then<S>(FutureOr<S> f(T x), {Function onError}) => null;\n}\n\nvoid main() {\n  ${declared}<bool> f;\n  ${downwards}<int> t1 = f.then(/*info:INFERRED_TYPE_CLOSURE*/\n      (x) async => x ? 2 : await new ${upwards}<int>.value(3));\n  ${downwards}<int> t2 = f.then(/*info:INFERRED_TYPE_CLOSURE,info:INFERRED_TYPE_CLOSURE*/(x) async { // TODO(leafp): Why the duplicate here?\n    return /*info:DOWN_CAST_COMPOSITE*/await x ? 2 : new ${upwards}<int>.value(3);});\n  ${downwards}<int> t5 = f.then(/*info:INFERRED_TYPE_CLOSURE,error:INVALID_CAST_FUNCTION_EXPR*/\n      (x) => x ? 2 : new ${upwards}<int>.value(3));\n  ${downwards}<int> t6 = f.then(/*info:INFERRED_TYPE_CLOSURE*/\n      (x) {return /*info:DOWN_CAST_COMPOSITE*/x ? 2 : new ${upwards}<int>.value(3);});\n}\n`;
            };
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "Future",upwards : "Future"}));
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "Future",upwards : "MyFuture"}));
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "MyFuture",upwards : "Future"}));
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "MyFuture",upwards : "MyFuture"}));
            await this.checkFileElement(build({
                declared : "Future",downwards : "Future",upwards : "MyFuture"}));
            await this.checkFileElement(build({
                declared : "Future",downwards : "Future",upwards : "Future"}));
        } )());
    }

    test_futureThen_downwardsMethodTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';\nmain() {\n  Future<int> f;\n  Future<List<int>> b = /*info:ASSIGNMENT_CAST should be pass*/f\n      .then(/*info:INFERRED_TYPE_CLOSURE*/(x) => [])\n      .whenComplete(/*info:INFERRED_TYPE_CLOSURE*/() {});\n  b = f.then(/*info:INFERRED_TYPE_CLOSURE*/(x) => /*info:INFERRED_TYPE_LITERAL*/[]);\n}\n  ');
        } )());
    }

    test_futureThen_explicitFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import "dart:async";\nm1() {\n  Future<int> f;\n  var x = f.then<Future<List<int>>>(/*info:INFERRED_TYPE_CLOSURE,\n                                      error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/\n                                    (x) => []);\n  Future<List<int>> y = x;\n}\nm2() {\n  Future<int> f;\n  var x = f.then<List<int>>(/*info:INFERRED_TYPE_CLOSURE*/(x) => /*info:INFERRED_TYPE_LITERAL*/[]);\n  Future<List<int>> y = x;\n}\n  ');
        } )());
    }

    test_futureThen_upwards() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            var build : (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) => string = (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) : string =>  {
                let {declared,downwards,upwards} = Object.assign({
                }, _namedArguments );
                return `import 'dart:async';\nclass MyFuture<T> implements Future<T> {\n  MyFuture() {}\n  MyFuture.value(T x) {}\n  dynamic noSuchMethod(invocation);\n  MyFuture<S> then<S>(FutureOr<S> f(T x), {Function onError}) => null;\n}\n\nvoid main() {\n  var f = foo().then((_) => 2.3);\n  ${downwards}<int> f2 = /*error:INVALID_ASSIGNMENT*/f;\n\n  // The unnecessary cast is to illustrate that we inferred <double> for\n  // the generic type args, even though we had a return type context.\n  ${downwards}<num> f3 = /*info:UNNECESSARY_CAST*/foo().then(\n      (_) => 2.3) as ${upwards}<double>;\n}\n${declared} foo() => new ${declared}<int>.value(1);\n    `;
            };
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "Future",upwards : "Future"}));
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "MyFuture",upwards : "MyFuture"}));
            await this.checkFileElement(build({
                declared : "Future",downwards : "Future",upwards : "Future"}));
        } )());
    }

    test_futureThen_upwardsFromBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';\nmain() {\n  Future<int> base;\n  var f = base.then(/*info:INFERRED_TYPE_CLOSURE,info:INFERRED_TYPE_CLOSURE*/(x) { return x == 0; });\n  var g = base.then(/*info:INFERRED_TYPE_CLOSURE*/(x) => x == 0);\n  Future<bool> b = f;\n  b = g;\n}\n  ');
        } )());
    }

    test_futureUnion_asyncConditional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            var build : (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) => string = (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) : string =>  {
                let {declared,downwards,upwards} = Object.assign({
                }, _namedArguments );
                return `import 'dart:async';\nclass MyFuture<T> implements Future<T> {\n  MyFuture() {}\n  MyFuture.value(x) {}\n  dynamic noSuchMethod(invocation);\n  MyFuture<S> then<S>(FutureOr<S> f(T x), {Function onError}) => null;\n}\n\n${downwards}<int> g1(bool x) async {\n  return /*info:DOWN_CAST_COMPOSITE*/x ? 42 : /*info:INFERRED_TYPE_ALLOCATION*/new ${upwards}.value(42); }\n${downwards}<int> g2(bool x) async =>\n  /*info:DOWN_CAST_COMPOSITE*/x ? 42 : /*info:INFERRED_TYPE_ALLOCATION*/new ${upwards}.value(42);\n${downwards}<int> g3(bool x) async {\n  var y = x ? 42 : new ${upwards}.value(42);\n  return /*info:DOWN_CAST_COMPOSITE*/y;\n}\n    `;
            };
            await this.checkFileElement(build({
                downwards : "Future",upwards : "Future"}));
            await this.checkFileElement(build({
                downwards : "Future",upwards : "MyFuture"}));
        } )());
    }

    test_futureUnion_downwards() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            var build : (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) => string = (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) : string =>  {
                let {declared,downwards,upwards} = Object.assign({
                }, _namedArguments );
                return `import 'dart:async';\nclass MyFuture<T> implements Future<T> {\n  MyFuture() {}\n  MyFuture.value([x]) {}\n  dynamic noSuchMethod(invocation);\n  MyFuture<S> then<S>(FutureOr<S> f(T x), {Function onError}) => null;\n}\n\n${declared} f;\n// Instantiates Future<int>\n${downwards}<int> t1 = f.then((_) =>\n   /*info:INFERRED_TYPE_ALLOCATION*/new ${upwards}.value('hi'));\n\n// Instantiates List<int>\n${downwards}<List<int>> t2 = f.then((_) => /*info:INFERRED_TYPE_LITERAL*/[3]);\n${downwards}<List<int>> g2() async { return /*info:INFERRED_TYPE_LITERAL*/[3]; }\n${downwards}<List<int>> g3() async {\n  return /*info:INFERRED_TYPE_ALLOCATION*/new ${upwards}.value(\n      /*info:INFERRED_TYPE_LITERAL*/[3]); }\n`;
            };
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "Future",upwards : "Future"}));
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "Future",upwards : "MyFuture"}));
            await this.checkFileElement(build({
                declared : "Future",downwards : "Future",upwards : "Future"}));
            await this.checkFileElement(build({
                declared : "Future",downwards : "Future",upwards : "MyFuture"}));
        } )());
    }

    test_futureUnion_downwardsGenericMethodWithFutureReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';\n\nfoo() async {\n  Future<List<A>> f1 = null;\n  Future<List<A>> f2 = null;\n  List<List<A>> merged = await Future.wait(/*info:INFERRED_TYPE_LITERAL*/[f1, f2]);\n}\n\nclass A {}\n  ');
        } )());
    }

    test_futureUnion_downwardsGenericMethodWithGenericReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';\n\nT id<T>(T x) => x;\n\nmain() async {\n  Future<String> f;\n  String s = await id(f);\n}\n  ');
        } )());
    }

    test_futureUnion_downwardsGenericMethodWithGenericReturn_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';\n\n/*=T*/ id/*<T>*/(/*=T*/ x) => x;\n\nmain() async {\n  Future<String> f;\n  String s = await id(f);\n}\n  ');
        } )());
    }

    test_futureUnion_upwardsGenericMethods() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';\n\nmain() async {\n  var b = new Future<B>.value(new B());\n  var c = new Future<C>.value(new C());\n  var lll = /*info:INFERRED_TYPE_LITERAL*/[b, c];\n  var result = await Future.wait(lll);\n  var result2 = await Future.wait(/*info:INFERRED_TYPE_LITERAL*/[b, c]);\n  List<A> list = result;\n  list = result2;\n}\n\nclass A {}\nclass B extends A {}\nclass C extends A {}\n  ');
        } )());
    }

    test_genericFunctions_returnTypedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('typedef void ToValue<T>(T value);\n\nmain() {\n  ToValue<T> f<T>(T x) => null;\n  var x = f<int>(42);\n  var y = f(42);\n  ToValue<int> takesInt = x;\n  takesInt = y;\n}\n  ');
        } )());
    }

    test_genericFunctions_returnTypedef_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('typedef void ToValue<T>(T value);\n\nmain() {\n  ToValue/*<T>*/ f/*<T>*/(dynamic /*=T*/ x) => null;\n  var x = f/*<int>*/(42);\n  var y = f(42);\n  ToValue<int> takesInt = x;\n  takesInt = y;\n}\n  ');
        } )());
    }

    test_genericMethods_basicDownwardInference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('T f<S, T>(S s) => null;\nmain() {\n  String x = f(42);\n  String y = (f)(42);\n}\n');
        } )());
    }

    test_genericMethods_basicDownwardInference_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('/*=T*/ f/*<S, T>*/(/*=S*/ s) => null;\nmain() {\n  String x = f(42);\n  String y = (f)(42);\n}\n');
        } )());
    }

    test_genericMethods_correctlyRecognizeGenericUpperBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class Foo<T extends Pattern> {\n  U method<U extends T>(U u) => u;\n}\nmain() {\n/*!!!\n  String s;\n  var a = new Foo().method<String>("str");\n  s = a;\n  new Foo();\n\n  var b = new Foo<String>().method("str");\n  s = b;\n  var c = new Foo().method("str");\n  s = c;\n  */\n\n  new Foo<String>()./*error:COULD_NOT_INFER*/method(42);\n}\n');
        } )());
    }

    test_genericMethods_dartMathMinMax() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:math\';\n\nvoid printInt(int x) => print(x);\nvoid printDouble(double x) => print(x);\n\nnum myMax(num x, num y) => max(x, y);\n\nmain() {\n  // Okay if static types match.\n  printInt(max(1, 2));\n  printInt(min(1, 2));\n  printDouble(max(1.0, 2.0));\n  printDouble(min(1.0, 2.0));\n\n  // No help for user-defined functions from num->num->num.\n  printInt(/*info:DOWN_CAST_IMPLICIT*/myMax(1, 2));\n  printInt(myMax(1, 2) as int);\n\n  // Mixing int and double means return type is num.\n  printInt(max(1, /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/2.0));\n  printInt(min(1, /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/2.0));\n  printDouble(max(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/1, 2.0));\n  printDouble(min(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/1, 2.0));\n\n  // Types other than int and double are not accepted.\n  printInt(\n      min(\n          /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/"hi",\n          /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/"there"));\n}\n');
        } )());
    }

    test_genericMethods_doNotInferInvalidOverrideOfGenericMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class C {\nT m<T>(T x) => x;\n}\nclass D extends C {\n/*error:INVALID_METHOD_OVERRIDE*/m(x) => x;\n}\nmain() {\n  int y = /*info:DYNAMIC_CAST*/new D()./*error:WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD*/m<int>(42);\n  print(y);\n}\n');
        } )());
    }

    test_genericMethods_doNotInferInvalidOverrideOfGenericMethod_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class C {\n/*=T*/ m/*<T>*/(/*=T*/ x) => x;\n}\nclass D extends C {\n/*error:INVALID_METHOD_OVERRIDE*/m(x) => x;\n}\nmain() {\n  int y = /*info:DYNAMIC_CAST*/new D()./*error:WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD*/m/*<int>*/(42);\n  print(y);\n}\n');
        } )());
    }

    test_genericMethods_downwardsInferenceAffectsArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('T f<T>(List<T> s) => null;\nmain() {\n  String x = f(/*info:INFERRED_TYPE_LITERAL*/[\'hi\']);\n  String y = f(/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/42]);\n}\n');
        } )());
    }

    test_genericMethods_downwardsInferenceAffectsArguments_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('/*=T*/ f/*<T>*/(List/*<T>*/ s) => null;\nmain() {\n  String x = f(/*info:INFERRED_TYPE_LITERAL*/[\'hi\']);\n  String y = f(/*info:INFERRED_TYPE_LITERAL*/[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/42]);\n}\n');
        } )());
    }

    test_genericMethods_downwardsInferenceFold() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('void main() {\n  List<int> o;\n  int y = o.fold(0, /*info:INFERRED_TYPE_CLOSURE*/(x, y) => x + y);\n  var z = o.fold(0, /*info:INFERRED_TYPE_CLOSURE*/(x, y) => /*info:DYNAMIC_INVOKE*/x + y);\n  y = /*info:DYNAMIC_CAST*/z;\n}\nvoid functionExpressionInvocation() {\n  List<int> o;\n  int y = (o.fold)(0, /*info:INFERRED_TYPE_CLOSURE*/(x, y) => x + y);\n  var z = (o.fold)(0, /*info:INFERRED_TYPE_CLOSURE*/(x, y) => /*info:DYNAMIC_INVOKE*/x + y);\n  y = /*info:DYNAMIC_CAST*/z;\n}\n');
        } )());
    }

    test_genericMethods_handleOverrideOfNonGenericWithGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class C {\n  m(x) => x;\n  dynamic g(int x) => x;\n}\nclass D extends C {\n  /*error:INVALID_METHOD_OVERRIDE*/T m<T>(T x) => x;\n  /*error:INVALID_METHOD_OVERRIDE*/T g<T>(T x) => x;\n}\nmain() {\n  int y = /*info:DYNAMIC_CAST*/(/*info:UNNECESSARY_CAST*/new D() as C).m(42);\n  print(y);\n}\n');
        } )());
    }

    test_genericMethods_inferenceError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('main() {\n  List<String> y;\n  Iterable<String> x = y.map(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/(String z) => 1.0);\n}\n  ');
        } )());
    }

    test_genericMethods_inferGenericFunctionParameterType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C<T> extends D<T> {\n  f<U>(x) {}\n}\nclass D<T> {\n  F<U> f<U>(U u) => null;\n}\ntypedef void F<V>(V v);\n');
            let f = op(Op.INDEX,mainUnit.getType('C').methods,0);
            expect(f.type.toString(),'<U>(U) → (U) → void');
        } )());
    }

    test_genericMethods_inferGenericFunctionParameterType2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C<T> extends D<T> {\n  f<U>(g) => null;\n}\nabstract class D<T> {\n  void f<U>(G<U> g);\n}\ntypedef List<V> G<V>();\n');
            let f = op(Op.INDEX,mainUnit.getType('C').methods,0);
            expect(f.type.toString(),'<U>(() → List<U>) → void');
        } )());
    }

    test_genericMethods_inferGenericFunctionParameterType2_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C<T> extends D<T> {\n  f/*<U>*/(g) => null;\n}\nabstract class D<T> {\n  void f/*<U>*/(G/*<U>*/ g);\n}\ntypedef List<V> G<V>();\n');
            let f = op(Op.INDEX,mainUnit.getType('C').methods,0);
            expect(f.type.toString(),'<U>(() → List<U>) → void');
        } )());
    }

    test_genericMethods_inferGenericFunctionParameterType_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C<T> extends D<T> {\n  f/*<U>*/(x) {}\n}\nclass D<T> {\n  F/*<U>*/ f/*<U>*/(/*=U*/ u) => null;\n}\ntypedef void F<V>(V v);\n');
            let f = op(Op.INDEX,mainUnit.getType('C').methods,0);
            expect(f.type.toString(),'<U>(U) → (U) → void');
        } )());
    }

    test_genericMethods_inferGenericFunctionReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C<T> extends D<T> {\n  f<U>(x) {}\n}\nclass D<T> {\n  F<U> f<U>(U u) => null;\n}\ntypedef V F<V>();\n');
            let f = op(Op.INDEX,mainUnit.getType('C').methods,0);
            expect(f.type.toString(),'<U>(U) → () → U');
        } )());
    }

    test_genericMethods_inferGenericFunctionReturnType_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C<T> extends D<T> {\n  f/*<U>*/(x) {}\n}\nclass D<T> {\n  F/*<U>*/ f/*<U>*/(/*=U*/ u) => null;\n}\ntypedef V F<V>();\n');
            let f = op(Op.INDEX,mainUnit.getType('C').methods,0);
            expect(f.type.toString(),'<U>(U) → () → U');
        } )());
    }

    test_genericMethods_inferGenericInstantiation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:math\' as math;\nimport \'dart:math\' show min;\n\nclass C {\nT m<T extends num>(T x, T y) => null;\n}\n\nmain() {\ntakeIII(math.max);\ntakeDDD(math.max);\ntakeNNN(math.max);\ntakeIDN(math.max);\ntakeDIN(math.max);\ntakeIIN(math.max);\ntakeDDN(math.max);\ntakeIIO(math.max);\ntakeDDO(math.max);\n\ntakeOOI(/*error:COULD_NOT_INFER,error:INVALID_CAST_FUNCTION*/math.max);\ntakeIDI(/*error:COULD_NOT_INFER,error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/math.max);\ntakeDID(/*error:COULD_NOT_INFER,error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/math.max);\ntakeOON(/*error:COULD_NOT_INFER,error:INVALID_CAST_FUNCTION*/math.max);\ntakeOOO(/*error:COULD_NOT_INFER,error:INVALID_CAST_FUNCTION*/math.max);\n\n// Also test SimpleIdentifier\ntakeIII(min);\ntakeDDD(min);\ntakeNNN(min);\ntakeIDN(min);\ntakeDIN(min);\ntakeIIN(min);\ntakeDDN(min);\ntakeIIO(min);\ntakeDDO(min);\n\ntakeOOI(/*error:COULD_NOT_INFER,error:INVALID_CAST_FUNCTION*/min);\ntakeIDI(/*error:COULD_NOT_INFER,error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/min);\ntakeDID(/*error:COULD_NOT_INFER,error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/min);\ntakeOON(/*error:COULD_NOT_INFER,error:INVALID_CAST_FUNCTION*/min);\ntakeOOO(/*error:COULD_NOT_INFER,error:INVALID_CAST_FUNCTION*/min);\n\n// Also PropertyAccess\ntakeIII(new C().m);\ntakeDDD(new C().m);\ntakeNNN(new C().m);\ntakeIDN(new C().m);\ntakeDIN(new C().m);\ntakeIIN(new C().m);\ntakeDDN(new C().m);\ntakeIIO(new C().m);\ntakeDDO(new C().m);\n\n// Note: this is a warning because a downcast of a method tear-off could work\n// (derived method can be a subtype):\n//\n//     class D extends C {\n//       S m<S extends num>(Object x, Object y);\n//     }\n//\n// That\'s legal because we\'re loosening parameter types.\n//\n// We do issue the inference error though, similar to generic function calls.\ntakeOON(/*error:COULD_NOT_INFER,info:DOWN_CAST_COMPOSITE*/new C().m);\ntakeOOO(/*error:COULD_NOT_INFER,info:DOWN_CAST_COMPOSITE*/new C().m);\n\n// Note: this is a warning because a downcast of a method tear-off could work\n// in "normal" Dart, due to bivariance.\n//\n// We do issue the inference error though, similar to generic function calls.\ntakeOOI(/*error:COULD_NOT_INFER,info:DOWN_CAST_COMPOSITE*/new C().m);\n\ntakeIDI(/*error:COULD_NOT_INFER,error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/new C().m);\ntakeDID(/*error:COULD_NOT_INFER,error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/new C().m);\n}\n\nvoid takeIII(int fn(int a, int b)) {}\nvoid takeDDD(double fn(double a, double b)) {}\nvoid takeIDI(int fn(double a, int b)) {}\nvoid takeDID(double fn(int a, double b)) {}\nvoid takeIDN(num fn(double a, int b)) {}\nvoid takeDIN(num fn(int a, double b)) {}\nvoid takeIIN(num fn(int a, int b)) {}\nvoid takeDDN(num fn(double a, double b)) {}\nvoid takeNNN(num fn(num a, num b)) {}\nvoid takeOON(num fn(Object a, Object b)) {}\nvoid takeOOO(num fn(Object a, Object b)) {}\nvoid takeOOI(int fn(Object a, Object b)) {}\nvoid takeIIO(Object fn(int a, int b)) {}\nvoid takeDDO(Object fn(double a, double b)) {}\n');
        } )());
    }

    test_genericMethods_inferGenericMethodType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class C {\n  T m<T>(T x) => x;\n}\nclass D extends C {\n  m<S>(x) => x;\n}\nmain() {\n  int y = new D().m<int>(42);\n  print(y);\n}\n');
        } )());
    }

    test_genericMethods_inferGenericMethodType_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class C {\n  /*=T*/ m/*<T>*/(/*=T*/ x) => x;\n}\nclass D extends C {\n  m/*<S>*/(x) => x;\n}\nmain() {\n  int y = new D().m/*<int>*/(42);\n  print(y);\n}\n');
        } )());
    }

    test_genericMethods_inferJSBuiltin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('/*error:IMPORT_INTERNAL_LIBRARY*/import \'dart:_foreign_helper\' show JS;\nmain() {\n  String x = /*error:INVALID_ASSIGNMENT*/JS(\'int\', \'42\');\n  var y = JS(\'String\', \'"hello"\');\n  y = "world";\n  y = /*error:INVALID_ASSIGNMENT*/42;\n}\n');
        } )());
    }

    test_genericMethods_IterableAndFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';\n\nFuture<int> make(int x) => (/*info:INFERRED_TYPE_ALLOCATION*/new Future(() => x));\n\nmain() {\n  Iterable<Future<int>> list = <int>[1, 2, 3].map(make);\n  Future<List<int>> results = Future.wait(list);\n  Future<String> results2 = results.then((List<int> list)\n    => list.fold(\'\', /*info:INFERRED_TYPE_CLOSURE*/(x, y) => /*info:DYNAMIC_CAST,info:DYNAMIC_INVOKE*/x /*error:UNDEFINED_OPERATOR*/+ y.toString()));\n\n  Future<String> results3 = results.then((List<int> list)\n    => list.fold(\'\', /*info:INFERRED_TYPE_CLOSURE,error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/(String x, y) => x + y.toString()));\n\n  Future<String> results4 = results.then((List<int> list)\n    => list.fold<String>(\'\', /*info:INFERRED_TYPE_CLOSURE*/(x, y) => x + y.toString()));\n}\n');
        } )());
    }

    test_genericMethods_nestedGenericInstantiation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:math\' as math;\nclass Trace {\n  List<Frame> frames = /*info:INFERRED_TYPE_LITERAL*/[];\n}\nclass Frame {\n  String location = \'\';\n}\nmain() {\n  List<Trace> traces = /*info:INFERRED_TYPE_LITERAL*/[];\n  var longest = traces.map(/*info:INFERRED_TYPE_CLOSURE,info:INFERRED_TYPE_CLOSURE*/(trace) {\n    return trace.frames.map(/*info:INFERRED_TYPE_CLOSURE*/(frame) => frame.location.length)\n        .fold(0, math.max);\n  }).fold(0, math.max);\n}\n  ');
        } )());
    }

    test_genericMethods_usesGreatestLowerBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('typedef Iterable<num> F(int x);\ntypedef List<int> G(double x);\n\nT generic<T>(a(T _), b(T _)) => null;\n\nmain() {\n  var v = generic((F f) => null, (G g) => null);\n}\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,1).localVariables,0);
            expect(v.type.toString(),'(num) → List<int>');
        } )());
    }

    test_genericMethods_usesGreatestLowerBound_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('typedef Iterable<num> F(int x);\ntypedef List<int> G(double x);\n\n/*=T*/ generic/*<T>*/(a(/*=T*/ _), b(/*=T*/ _)) => null;\n\nmain() {\n  var v = generic((F f) => null, (G g) => null);\n}\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,1).localVariables,0);
            expect(v.type.toString(),'(num) → List<int>');
        } )());
    }

    test_genericMethods_usesGreatestLowerBound_comment_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('typedef Iterable<num> F(int x);\ntypedef List<int> G(double x);\n\n/*=T*/ generic/*<T>*/(a(/*=T*/ _), b(/*=T*/ _)) => null;\n\nvar v = /*error:TOP_LEVEL_TYPE_ARGUMENTS*/generic((F f) => null, (G g) => null);\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'dynamic');
        } )());
    }

    test_infer_assignToIndex() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('List<double> a = <double>[];\nvar b = (/*error:TOP_LEVEL_UNSUPPORTED*/a[0] = 1.0);\n');
        } )());
    }

    test_infer_assignToProperty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {\n  int f;\n}\nvar v_assign = (/*error:TOP_LEVEL_UNSUPPORTED*/new A().f = 1);\nvar v_plus = (/*error:TOP_LEVEL_UNSUPPORTED*/new A().f += 1);\nvar v_minus = (/*error:TOP_LEVEL_UNSUPPORTED*/new A().f -= 1);\nvar v_multiply = (/*error:TOP_LEVEL_UNSUPPORTED*/new A().f *= 1);\nvar v_prefix_pp = (++new A()./*error:TOP_LEVEL_INSTANCE_GETTER*/f);\nvar v_prefix_mm = (--new A()./*error:TOP_LEVEL_INSTANCE_GETTER*/f);\nvar v_postfix_pp = (new A()./*error:TOP_LEVEL_INSTANCE_GETTER*/f++);\nvar v_postfix_mm = (new A()./*error:TOP_LEVEL_INSTANCE_GETTER*/f--);\n');
        } )());
    }

    test_infer_assignToProperty_custom() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {\n  int operator +(other) => 1;\n  double operator -(other) => 2.0;\n}\nclass B {\n  A a;\n}\nvar v_prefix_pp = (++new B()./*error:TOP_LEVEL_INSTANCE_GETTER*/a);\nvar v_prefix_mm = (--new B()./*error:TOP_LEVEL_INSTANCE_GETTER*/a);\nvar v_postfix_pp = (new B()./*error:TOP_LEVEL_INSTANCE_GETTER*/a++);\nvar v_postfix_mm = (new B()./*error:TOP_LEVEL_INSTANCE_GETTER*/a--);\n');
        } )());
    }

    test_infer_assignToRef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {\n  int f;\n}\nA a = new A();\nvar b = (/*error:TOP_LEVEL_UNSUPPORTED*/a.f = 1);\nvar c = 0;\nvar d = (/*error:TOP_LEVEL_UNSUPPORTED*/c = 1);\n');
        } )());
    }

    test_infer_binary_custom() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {\n  int operator +(other) => 1;\n  double operator -(other) => 2.0;\n}\nvar v_add = new A() + \'foo\';\nvar v_minus = new A() - \'bar\';\n');
        } )());
    }

    test_infer_binary_doubleDouble() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var a_equal = 1.0 == 2.0;\nvar a_notEqual = 1.0 != 2.0;\nvar a_add = 1.0 + 2.0;\nvar a_subtract = 1.0 - 2.0;\nvar a_multiply = 1.0 * 2.0;\nvar a_divide = 1.0 / 2.0;\nvar a_floorDivide = 1.0 ~/ 2.0;\nvar a_greater = 1.0 > 2.0;\nvar a_less = 1.0 < 2.0;\nvar a_greaterEqual = 1.0 >= 2.0;\nvar a_lessEqual = 1.0 <= 2.0;\nvar a_modulo = 1.0 % 2.0;\n');
        } )());
    }

    test_infer_binary_doubleInt() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var a_equal = 1.0 == 2;\nvar a_notEqual = 1.0 != 2;\nvar a_add = 1.0 + 2;\nvar a_subtract = 1.0 - 2;\nvar a_multiply = 1.0 * 2;\nvar a_divide = 1.0 / 2;\nvar a_floorDivide = 1.0 ~/ 2;\nvar a_greater = 1.0 > 2;\nvar a_less = 1.0 < 2;\nvar a_greaterEqual = 1.0 >= 2;\nvar a_lessEqual = 1.0 <= 2;\nvar a_modulo = 1.0 % 2;\n');
        } )());
    }

    test_infer_binary_intDouble() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var a_equal = 1 == 2.0;\nvar a_notEqual = 1 != 2.0;\nvar a_add = 1 + 2.0;\nvar a_subtract = 1 - 2.0;\nvar a_multiply = 1 * 2.0;\nvar a_divide = 1 / 2.0;\nvar a_floorDivide = 1 ~/ 2.0;\nvar a_greater = 1 > 2.0;\nvar a_less = 1 < 2.0;\nvar a_greaterEqual = 1 >= 2.0;\nvar a_lessEqual = 1 <= 2.0;\nvar a_modulo = 1 % 2.0;\n');
        } )());
    }

    test_infer_binary_intInt() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var a_equal = 1 == 2;\nvar a_notEqual = 1 != 2;\nvar a_bitXor = 1 ^ 2;\nvar a_bitAnd = 1 & 2;\nvar a_bitOr = 1 | 2;\nvar a_bitShiftRight = 1 >> 2;\nvar a_bitShiftLeft = 1 << 2;\nvar a_add = 1 + 2;\nvar a_subtract = 1 - 2;\nvar a_multiply = 1 * 2;\nvar a_divide = 1 / 2;\nvar a_floorDivide = 1 ~/ 2;\nvar a_greater = 1 > 2;\nvar a_less = 1 < 2;\nvar a_greaterEqual = 1 >= 2;\nvar a_lessEqual = 1 <= 2;\nvar a_modulo = 1 % 2;\n');
        } )());
    }

    test_infer_conditional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var a = 1 == 2 ? 1 : 2.0;\nvar b = 1 == 2 ? 1.0 : 2;\n');
        } )());
    }

    test_infer_prefixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var a_not = !true;\nvar a_complement = ~1;\nvar a_negate = -1;\n');
        } )());
    }

    test_infer_prefixExpression_custom() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {\n  A();\n  int operator ~() => 1;\n  double operator -() => 2.0;\n}\nvar a = new A();\nvar v_complement = ~a;\nvar v_negate = -a;\n');
        } )());
    }

    test_infer_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var t = true;\nvar a = (throw 0);\nvar b = (throw 0) ? 1 : 2;\nvar c = t ? (throw 1) : 2;\nvar d = t ? 1 : (throw 2);\n');
        } )());
    }

    test_infer_typeCast() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A<T> {}\nclass B<T> extends A<T> {\n  foo() {}\n}\nA<num> a = new B<int>();\nvar b = (a as B<int>);\nmain() {\n  b.foo();\n}\n');
        } )());
    }

    test_infer_typedListLiteral() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var a = <int>[];\nvar b = <double>[1.0, 2.0, 3.0];\nvar c = <List<int>>[];\nvar d = <dynamic>[1, 2.0, false];\n');
        } )());
    }

    test_infer_typedMapLiteral() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var a = <int, String>{0: \'aaa\', 1: \'bbb\'};\nvar b = <double, int>{1.1: 1, 2.2: 2};\nvar c = <List<int>, Map<String, double>>{};\nvar d = <int, dynamic>{};\nvar e = <dynamic, int>{};\nvar f = <dynamic, dynamic>{};\n');
        } )());
    }

    test_infer_use_of_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class B {\n  void f() {}\n}\nclass C extends B {\n  f() {}\n}\nvar x = new C()./*info:USE_OF_VOID_RESULT*/f();\n');
        } )());
    }

    test_inferConstsTransitively() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('const b1 = 2;\n',{
                name : '/b.dart'});
            this.addFile('import \'main.dart\';\nimport \'b.dart\';\nconst a1 = m2;\nconst a2 = b1;\n',{
                name : '/a.dart'});
            await this.checkFileElement('import \'a.dart\';\nconst m1 = a1;\nconst m2 = a2;\n\nfoo() {\n  int i;\n  i = m1;\n}\n');
        } )());
    }

    test_inferCorrectlyOnMultipleVariablesDeclaredTogether() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {\n  var x, y = 2, z = "hi";\n}\n\nclass B implements A {\n  var x = 2, y = 3, z, w = 2;\n}\n\nfoo() {\n  String s;\n  int i;\n\n  s = /*info:DYNAMIC_CAST*/new B().x;\n  s = /*error:INVALID_ASSIGNMENT*/new B().y;\n  s = new B().z;\n  s = /*error:INVALID_ASSIGNMENT*/new B().w;\n\n  i = /*info:DYNAMIC_CAST*/new B().x;\n  i = new B().y;\n  i = /*error:INVALID_ASSIGNMENT*/new B().z;\n  i = new B().w;\n}\n');
        } )());
    }

    test_inferedType_usesSyntheticFunctionType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('int f() => null;\nString g() => null;\nvar v = /*info:INFERRED_TYPE_LITERAL*/[f, g];\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'List<() → Object>');
        } )());
    }

    test_inferedType_usesSyntheticFunctionType_functionTypedParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('int f(int x(String y)) => null;\nString g(int x(String y)) => null;\nvar v = /*info:INFERRED_TYPE_LITERAL*/[f, g];\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'List<((String) → int) → Object>');
        } )());
    }

    test_inferedType_usesSyntheticFunctionType_namedParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('int f({int x}) => null;\nString g({int x}) => null;\nvar v = /*info:INFERRED_TYPE_LITERAL*/[f, g];\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'List<({x: int}) → Object>');
        } )());
    }

    test_inferedType_usesSyntheticFunctionType_positionalParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('int f([int x]) => null;\nString g([int x]) => null;\nvar v = /*info:INFERRED_TYPE_LITERAL*/[f, g];\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'List<([int]) → Object>');
        } )());
    }

    test_inferedType_usesSyntheticFunctionType_requiredParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('int f(int x) => null;\nString g(int x) => null;\nvar v = /*info:INFERRED_TYPE_LITERAL*/[f, g];\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'List<(int) → Object>');
        } )());
    }

    test_inferFromComplexExpressionsIfOuterMostValueIsPrecise() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A { int x; B operator+(other) => null; }\nclass B extends A { B(ignore); }\nvar a = new A();\n// Note: it doesn\'t matter that some of these refer to \'x\'.\nvar b = new B(/*error:UNDEFINED_IDENTIFIER*/x);  // allocations\nvar c1 = [/*error:UNDEFINED_IDENTIFIER*/x];      // list literals\nvar c2 = const [];\nvar d = <dynamic, dynamic>{\'a\': \'b\'};     // map literals\nvar e = new A()..x = 3; // cascades\nvar f = 2 + 3;          // binary expressions are OK if the left operand\n                        // is from a library in a different strongest\n                        // connected component.\nvar g = -3;\nvar h = new A() + 3;\nvar i = /*error:UNDEFINED_OPERATOR,info:DYNAMIC_INVOKE*/- new A();\nvar j = /*info:UNNECESSARY_CAST*/null as B;\n\ntest1() {\n  a = /*error:INVALID_ASSIGNMENT*/"hi";\n  a = new B(3);\n  b = /*error:INVALID_ASSIGNMENT*/"hi";\n  b = new B(3);\n  c1 = [];\n  c1 = /*error:INVALID_ASSIGNMENT*/{};\n  c2 = [];\n  c2 = /*error:INVALID_ASSIGNMENT*/{};\n  d = {};\n  d = /*error:INVALID_ASSIGNMENT*/3;\n  e = new A();\n  e = /*error:INVALID_ASSIGNMENT*/{};\n  f = 3;\n  f = /*error:INVALID_ASSIGNMENT*/false;\n  g = 1;\n  g = /*error:INVALID_ASSIGNMENT*/false;\n  h = /*error:INVALID_ASSIGNMENT*/false;\n  h = new B(\'b\');\n  i = false;\n  j = new B(\'b\');\n  j = /*error:INVALID_ASSIGNMENT*/false;\n  j = /*error:INVALID_ASSIGNMENT*/[];\n}\n');
        } )());
    }

    test_inferFromRhsOnlyIfItWontConflictWithOverriddenFields() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {\n  var x;\n}\n\nclass B implements A {\n  var x = 2;\n}\n\nfoo() {\n  String y = /*info:DYNAMIC_CAST*/new B().x;\n  int z = /*info:DYNAMIC_CAST*/new B().x;\n}\n');
        } )());
    }

    test_inferFromRhsOnlyIfItWontConflictWithOverriddenFields2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {\n  final x = null;\n}\n\nclass B implements A {\n  final x = 2;\n}\n\nfoo() {\n  String y = /*info:DYNAMIC_CAST*/new B().x;\n  int z = /*info:DYNAMIC_CAST*/new B().x;\n}\n');
        } )());
    }

    test_inferFromVariablesInCycleLibsWhenFlagIsOn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('import \'main.dart\';\nvar x = 2; // ok to infer\n',{
                name : '/a.dart'});
            await this.checkFileElement('import \'a.dart\';\nvar y = x; // now ok :)\n\ntest1() {\n  int t = 3;\n  t = x;\n  t = y;\n}\n');
        } )());
    }

    test_inferFromVariablesInCycleLibsWhenFlagIsOn2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('import \'main.dart\';\nclass A { static var x = 2; }\n',{
                name : '/a.dart'});
            await this.checkFileElement('import \'a.dart\';\nclass B { static var y = A.x; }\n\ntest1() {\n  int t = 3;\n  t = A.x;\n  t = B.y;\n}\n');
        } )());
    }

    test_inferFromVariablesInNonCycleImportsWithFlag() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('var x = 2;\n',{
                name : '/a.dart'});
            await this.checkFileElement('import \'a.dart\';\nvar y = x;\n\ntest1() {\n  x = /*error:INVALID_ASSIGNMENT*/"hi";\n  y = /*error:INVALID_ASSIGNMENT*/"hi";\n}\n');
        } )());
    }

    test_inferFromVariablesInNonCycleImportsWithFlag2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('class A { static var x = 2; }\n',{
                name : '/a.dart'});
            await this.checkFileElement('import \'a.dart\';\nclass B { static var y = A.x; }\n\ntest1() {\n  A.x = /*error:INVALID_ASSIGNMENT*/"hi";\n  B.y = /*error:INVALID_ASSIGNMENT*/"hi";\n}\n');
        } )());
    }

    test_inferGenericMethodType_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C {\n  T m<T>(int a, {String b, T c}) => null;\n}\nmain() {\n var y = new C().m(1, b: \'bbb\', c: 2.0);\n}\n');
            let y = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(y.type.toString(),'double');
        } )());
    }

    test_inferGenericMethodType_named_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C {\n  /*=T*/ m/*<T>*/(int a, {String b, /*=T*/ c}) => null;\n}\nmain() {\n  var y = new C().m(1, b: \'bbb\', c: 2.0);\n}\n');
            let y = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(y.type.toString(),'double');
        } )());
    }

    test_inferGenericMethodType_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C {\n  T m<T>(int a, [T b]) => null;\n}\nmain() {\n  var y = new C().m(1, 2.0);\n}\n');
            let y = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(y.type.toString(),'double');
        } )());
    }

    test_inferGenericMethodType_positional2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C {\n  T m<T>(int a, [String b, T c]) => null;\n}\nmain() {\n  var y = new C().m(1, \'bbb\', 2.0);\n}\n');
            let y = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(y.type.toString(),'double');
        } )());
    }

    test_inferGenericMethodType_positional2_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C {\n  /*=T*/ m/*<T>*/(int a, [String b, /*=T*/ c]) => null;\n}\nmain() {\n  var y = new C().m(1, \'bbb\', 2.0);\n}\n');
            let y = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(y.type.toString(),'double');
        } )());
    }

    test_inferGenericMethodType_positional_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C {\n  /*=T*/ m/*<T>*/(int a, [/*=T*/ b]) => null;\n}\nmain() {\n  var y = new C().m(1, 2.0);\n}\n');
            let y = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(y.type.toString(),'double');
        } )());
    }

    test_inferGenericMethodType_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C {\n  T m<T>(T x) => x;\n}\nmain() {\n  var y = new C().m(42);\n}\n');
            let y = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(y.type.toString(),'int');
        } )());
    }

    test_inferGenericMethodType_required_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C {\n  /*=T*/ m/*<T>*/(/*=T*/ x) => x;\n}\nmain() {\n  var y = new C().m(42);\n}\n');
            let y = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(y.type.toString(),'int');
        } )());
    }

    test_inferListLiteralNestedInMapLiteral() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class Resource {}\nclass Folder extends Resource {}\n\nResource getResource(String str) => null;\n\nclass Foo<T> {\n  Foo(T t);\n}\n\nmain() {\n  // List inside map\n  var map = <String, List<Folder>>{\n    \'pkgA\': /*info:INFERRED_TYPE_LITERAL*/[/*info:DOWN_CAST_IMPLICIT*/getResource(\'/pkgA/lib/\')],\n    \'pkgB\': /*info:INFERRED_TYPE_LITERAL*/[/*info:DOWN_CAST_IMPLICIT*/getResource(\'/pkgB/lib/\')]\n  };\n  // Also try map inside list\n  var list = <Map<String, Folder>>[\n    /*info:INFERRED_TYPE_LITERAL*/{ \'pkgA\': /*info:DOWN_CAST_IMPLICIT*/getResource(\'/pkgA/lib/\') },\n    /*info:INFERRED_TYPE_LITERAL*/{ \'pkgB\': /*info:DOWN_CAST_IMPLICIT*/getResource(\'/pkgB/lib/\') },\n  ];\n  // Instance creation too\n  var foo = new Foo<List<Folder>>(\n    /*info:INFERRED_TYPE_LITERAL*/[/*info:DOWN_CAST_IMPLICIT*/getResource(\'/pkgA/lib/\')]\n  );\n}\n');
        } )());
    }

    test_inferLocalFunctionReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('main() {\n  f0() => 42;\n  f1() async => 42;\n\n  f2 /*info:INFERRED_TYPE_CLOSURE*/() { return 42; }\n  f3 /*info:INFERRED_TYPE_CLOSURE*/() async { return 42; }\n  f4 /*info:INFERRED_TYPE_CLOSURE*/() sync* { yield 42; }\n  f5 /*info:INFERRED_TYPE_CLOSURE*/() async* { yield 42; }\n\n  num f6() => 42;\n\n  f7() => f7();\n  f8() => /*error:REFERENCED_BEFORE_DECLARATION*/f9();\n  f9() => f5();\n}\n');
            let fns = op(Op.INDEX,unit.functions,0).functions;
            expect(op(Op.INDEX,fns,0).type.toString(),'() → int');
            expect(op(Op.INDEX,fns,1).type.toString(),'() → Future<int>');
            expect(op(Op.INDEX,fns,2).type.toString(),'() → int');
            expect(op(Op.INDEX,fns,3).type.toString(),'() → Future<int>');
            expect(op(Op.INDEX,fns,4).type.toString(),'() → Iterable<int>');
            expect(op(Op.INDEX,fns,5).type.toString(),'() → Stream<int>');
            expect(op(Op.INDEX,fns,6).type.toString(),'() → num');
            expect(op(Op.INDEX,fns,7).type.toString(),'() → dynamic');
            expect(op(Op.INDEX,fns,8).type.toString(),'() → dynamic');
            expect(op(Op.INDEX,fns,9).type.toString(),'() → Stream<int>');
        } )());
    }

    test_inferParameterType_setter_fromField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C extends D {\n  set foo(x) {}\n}\nclass D {\n  int foo;\n}\n');
            let f = op(Op.INDEX,mainUnit.getType('C').accessors,0);
            expect(f.type.toString(),'(int) → void');
        } )());
    }

    test_inferParameterType_setter_fromSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C extends D {\n  set foo(x) {}\n}\nclass D {\n  set foo(int x) {}\n}\n');
            let f = op(Op.INDEX,mainUnit.getType('C').accessors,0);
            expect(f.type.toString(),'(int) → void');
        } )());
    }

    test_inferred_nonstatic_field_depends_on_static_field_complex() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  static var x = \'x\';\n  var y = /*info:INFERRED_TYPE_LITERAL*/{\n    \'a\': /*info:INFERRED_TYPE_LITERAL*/{\'b\': \'c\'},\n    \'d\': /*info:INFERRED_TYPE_LITERAL*/{\'e\': x}\n  };\n}\n');
            let x = op(Op.INDEX,mainUnit.getType('C').fields,0);
            expect(x.name,'x');
            expect(x.type.toString(),'String');
            let y = op(Op.INDEX,mainUnit.getType('C').fields,1);
            expect(y.name,'y');
            expect(y.type.toString(),'Map<String, Map<String, String>>');
        } )());
    }

    test_inferred_nonstatic_field_depends_on_toplevel_var_simple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('var x = \'x\';\nclass C {\n  var y = x;\n}\n');
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.name,'x');
            expect(x.type.toString(),'String');
            let y = op(Op.INDEX,mainUnit.getType('C').fields,0);
            expect(y.name,'y');
            expect(y.type.toString(),'String');
        } )());
    }

    test_inferredInitializingFormalChecksDefaultValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class Foo {\n  var x = 1;\n  Foo([this.x = /*error:INVALID_ASSIGNMENT*/"1"]);\n}');
        } )());
    }

    test_inferredType_blockClosure_noArgs_noReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {\n  var f = /*info:INFERRED_TYPE_CLOSURE*/() {};\n}\n');
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → Null');
        } )());
    }

    test_inferredType_cascade() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class A {\n  int a;\n  List<int> b;\n  void m() {}\n}\nvar v = new A()..a = 1..b.add(2)..m();\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'A');
        } )());
    }

    test_inferredType_customBinaryOp() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  bool operator*(C other) => true;\n}\nC c;\nvar x = c*c;\n');
            let x = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(x.name,'x');
            expect(x.type.toString(),'bool');
        } )());
    }

    test_inferredType_customBinaryOp_viaInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class I {\n  bool operator*(C other) => true;\n}\nabstract class C implements I {}\nC c;\nvar x = c*c;\n');
            let x = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(x.name,'x');
            expect(x.type.toString(),'bool');
        } )());
    }

    test_inferredType_customIndexOp() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  bool operator[](int index) => true;\n}\nmain() {\n  C c;\n  var x = c[0];\n}\n');
            let x = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,1);
            expect(x.name,'x');
            expect(x.type.toString(),'bool');
        } )());
    }

    test_inferredType_customIndexOp_viaInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class I {\n  bool operator[](int index) => true;\n}\nabstract class C implements I {}\nmain() {\n  C c;\n  var x = c[0];\n}\n');
            let x = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,1);
            expect(x.name,'x');
            expect(x.type.toString(),'bool');
        } )());
    }

    test_inferredType_customUnaryOp() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  bool operator-() => true;\n}\nC c;\nvar x = -c;\n');
            let x = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(x.name,'x');
            expect(x.type.toString(),'bool');
        } )());
    }

    test_inferredType_customUnaryOp_viaInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class I {\n  bool operator-() => true;\n}\nabstract class C implements I {}\nC c;\nvar x = -c;\n');
            let x = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(x.name,'x');
            expect(x.type.toString(),'bool');
        } )());
    }

    test_inferredType_extractMethodTearOff() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  bool g() => true;\n}\nC f() => null;\nvar x = f().g;\n');
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.name,'x');
            expect(x.type.toString(),'() → bool');
        } )());
    }

    test_inferredType_extractMethodTearOff_viaInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class I {\n  bool g() => true;\n}\nabstract class C implements I {}\nC f() => null;\nvar x = f().g;\n');
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.name,'x');
            expect(x.type.toString(),'() → bool');
        } )());
    }

    test_inferredType_fromTopLevelExecutableTearoff() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('var v = print;\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'(Object) → void');
        } )());
    }

    test_inferredType_invokeMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  bool g() => true;\n}\nC f() => null;\nvar x = f().g();\n');
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.name,'x');
            expect(x.type.toString(),'bool');
        } )());
    }

    test_inferredType_invokeMethod_viaInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class I {\n  bool g() => true;\n}\nabstract class C implements I {}\nC f() => null;\nvar x = f().g();\n');
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.name,'x');
            expect(x.type.toString(),'bool');
        } )());
    }

    test_inferredType_isEnum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('enum E { v1 }\nfinal x = E.v1;\n');
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.type.toString(),'E');
        } )());
    }

    test_inferredType_isEnumValues() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('enum E { v1 }\nfinal x = E.values;\n');
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.type.toString(),'List<E>');
        } )());
    }

    test_inferredType_isTypedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('typedef void F();\nfinal x = <String, F>{};\n');
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.type.toString(),'Map<String, () → void>');
        } )());
    }

    test_inferredType_isTypedef_parameterized() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('typedef T F<T>();\nfinal x = <String, F<int>>{};\n');
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.type.toString(),'Map<String, () → int>');
        } )());
    }

    test_inferredType_viaClosure_multipleLevelsOfNesting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  static final f = (bool b) => (int i) => /*info:INFERRED_TYPE_LITERAL*/{i: b};\n}\n');
            let f = op(Op.INDEX,mainUnit.getType('C').fields,0);
            expect(f.type.toString(),'(bool) → (int) → Map<int, bool>');
        } )());
    }

    test_inferredType_viaClosure_typeDependsOnArgs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  static final f = (bool b) => b;\n}\n');
            let f = op(Op.INDEX,mainUnit.getType('C').fields,0);
            expect(f.type.toString(),'(bool) → bool');
        } )());
    }

    test_inferredType_viaClosure_typeIndependentOfArgs_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  static final f = (bool b) => 1;\n}\n');
            let f = op(Op.INDEX,mainUnit.getType('C').fields,0);
            expect(f.type.toString(),'(bool) → int');
        } )());
    }

    test_inferredType_viaClosure_typeIndependentOfArgs_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('final f = (bool b) => 1;');
            let f = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(f.type.toString(),'(bool) → int');
        } )());
    }

    test_inferReturnOfStatementLambda() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('List<String> strings() {\n  var stuff = [].expand(/*info:INFERRED_TYPE_CLOSURE*/(i) {\n    return <String>[];\n  });\n  return stuff.toList();\n}\n  ');
        } )());
    }

    test_inferStaticsTransitively() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('final b1 = 2;\n',{
                name : '/b.dart'});
            this.addFile('import \'main.dart\';\nimport \'b.dart\';\nfinal a1 = m2;\nclass A {\n  static final a2 = b1;\n}\n',{
                name : '/a.dart'});
            await this.checkFileElement('import \'a.dart\';\nfinal m1 = a1;\nfinal m2 = A.a2;\n\nfoo() {\n  int i;\n  i = m1;\n}\n');
        } )());
    }

    test_inferStaticsTransitively2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('const x1 = 1;\nfinal x2 = 1;\nfinal y1 = x1;\nfinal y2 = x2;\n\nfoo() {\n  int i;\n  i = y1;\n  i = y2;\n}\n');
        } )());
    }

    test_inferStaticsTransitively3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('const a1 = 3;\nconst a2 = 4;\nclass A {\n  static const a3 = null;\n}\n',{
                name : '/a.dart'});
            await this.checkFileElement('import \'a.dart\' show a1, A;\nimport \'a.dart\' as p show a2, A;\nconst t1 = 1;\nconst t2 = t1;\nconst t3 = a1;\nconst t4 = p.a2;\nconst t5 = A.a3;\nconst t6 = p.A.a3;\n\nfoo() {\n  int i;\n  i = t1;\n  i = t2;\n  i = t3;\n  i = t4;\n}\n');
        } )());
    }

    test_inferStaticsWithMethodInvocations() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('m3(String a, String b, [a1,a2]) {}\n',{
                name : '/a.dart'});
            await this.checkFileElement('import \'a.dart\';\nclass T {\n  static final T foo = m1(m2(m3(\'\', \'\')));\n  static T m1(String m) { return null; }\n  static String m2(e) { return \'\'; }\n}\n');
        } )());
    }

    test_inferTypeOnOverriddenFields2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {\n  int x = 2;\n}\n\nclass B extends A {\n  get x => 3;\n}\n\nfoo() {\n  String y = /*error:INVALID_ASSIGNMENT*/new B().x;\n  int z = new B().x;\n}\n');
        } )());
    }

    test_inferTypeOnOverriddenFields4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {\n  final int x = 2;\n}\n\nclass B implements A {\n  get x => 3;\n}\n\nfoo() {\n  String y = /*error:INVALID_ASSIGNMENT*/new B().x;\n  int z = new B().x;\n}\n');
        } )());
    }

    test_inferTypeOnVar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('test1() {\n  int x = 3;\n  x = /*error:INVALID_ASSIGNMENT*/"hi";\n}\n');
        } )());
    }

    test_inferTypeOnVar2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('test2() {\n  var x = 3;\n  x = /*error:INVALID_ASSIGNMENT*/"hi";\n}\n');
        } )());
    }

    test_inferTypeOnVarFromField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {\n  int x = 0;\n\n  test1() {\n    var a = x;\n    a = /*error:INVALID_ASSIGNMENT*/"hi";\n    a = 3;\n    var b = y;\n    b = /*error:INVALID_ASSIGNMENT*/"hi";\n    b = 4;\n    var c = z;\n    c = /*error:INVALID_ASSIGNMENT*/"hi";\n    c = 4;\n  }\n\n  int y; // field def after use\n  final z = 42; // should infer `int`\n}\n');
        } )());
    }

    test_inferTypeOnVarFromTopLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('int x = 0;\n\ntest1() {\n  var a = x;\n  a = /*error:INVALID_ASSIGNMENT*/"hi";\n  a = 3;\n  var b = y;\n  b = /*error:INVALID_ASSIGNMENT*/"hi";\n  b = 4;\n  var c = z;\n  c = /*error:INVALID_ASSIGNMENT*/"hi";\n  c = 4;\n}\n\nint y = 0; // field def after use\nfinal z = 42; // should infer `int`\n');
        } )());
    }

    test_inferTypeRegardlessOfDeclarationOrderOrCycles() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('import \'main.dart\';\n\nclass B extends A { }\n',{
                name : '/b.dart'});
            await this.checkFileElement('import \'b.dart\';\nclass C extends B {\n  get x => null;\n}\nclass A {\n  int get x => 0;\n}\nfoo() {\n  int y = new C().x;\n  String z = /*error:INVALID_ASSIGNMENT*/new C().x;\n}\n');
        } )());
    }

    test_inferTypesOnGenericInstantiations_3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A<T> {\n  final T x = null;\n  final T w = null;\n}\n\nclass B implements A<int> {\n  get x => 3;\n  get w => /*error:RETURN_OF_INVALID_TYPE*/"hello";\n}\n\nfoo() {\n  String y = /*error:INVALID_ASSIGNMENT*/new B().x;\n  int z = new B().x;\n}\n');
        } )());
    }

    test_inferTypesOnGenericInstantiations_4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A<T> {\n  T x;\n}\n\nclass B<E> extends A<E> {\n  E y;\n  get x => y;\n}\n\nfoo() {\n  int y = /*error:INVALID_ASSIGNMENT*/new B<String>().x;\n  String z = new B<String>().x;\n}\n');
        } )());
    }

    test_inferTypesOnGenericInstantiations_5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('abstract class I<E> {\n  String m(a, String f(v, E e));\n}\n\nabstract class A<E> implements I<E> {\n  const A();\n  String m(a, String f(v, E e));\n}\n\nabstract class M {\n  final int y = 0;\n}\n\nclass B<E> extends A<E> implements M {\n  const B();\n  int get y => 0;\n\n  m(a, f(v, E e)) {}\n}\n\nfoo () {\n  int y = /*error:INVALID_ASSIGNMENT*/new B().m(null, null);\n  String z = new B().m(null, null);\n}\n');
        } )());
    }

    test_inferTypesOnGenericInstantiations_infer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A<T> {\n  final T x = null;\n}\n\nclass B implements A<int> {\n  /*error:INVALID_METHOD_OVERRIDE*/dynamic get x => 3;\n}\n\nfoo() {\n  String y = /*info:DYNAMIC_CAST*/new B().x;\n  int z = /*info:DYNAMIC_CAST*/new B().x;\n}\n');
        } )());
    }

    test_inferTypesOnGenericInstantiationsInLibraryCycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('import \'main.dart\';\nabstract class I<E> {\n  A<E> m(a, String f(v, int e));\n}\n',{
                name : '/a.dart'});
            await this.checkFileElement('import \'a.dart\';\n\nabstract class A<E> implements I<E> {\n  const A();\n\n  final E value = null;\n}\n\nabstract class M {\n  final int y = 0;\n}\n\nclass B<E> extends A<E> implements M {\n  const B();\n  int get y => 0;\n\n  m(a, f(v, int e)) {}\n}\n\nfoo () {\n  int y = /*error:INVALID_ASSIGNMENT*/new B<String>().m(null, null).value;\n  String z = new B<String>().m(null, null).value;\n}\n');
        } )());
    }

    test_inferTypesOnLoopIndices_forEachLoop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class Foo {\n  int bar = 42;\n}\n\nclass Bar<T extends Iterable<String>> {\n  void foo(T t) {\n    for (var i in t) {\n      int x = /*error:INVALID_ASSIGNMENT*/i;\n    }\n  }\n}\n\nclass Baz<T, E extends Iterable<T>, S extends E> {\n  void foo(S t) {\n    for (var i in t) {\n      int x = /*error:INVALID_ASSIGNMENT*/i;\n      T y = i;\n    }\n  }\n}\n\ntest() {\n  var list = <Foo>[];\n  for (var x in list) {\n    String y = /*error:INVALID_ASSIGNMENT*/x;\n  }\n\n  for (dynamic x in list) {\n    String y = /*info:DYNAMIC_CAST*/x;\n  }\n\n  for (String x in /*error:FOR_IN_OF_INVALID_ELEMENT_TYPE*/list) {\n    String y = x;\n  }\n\n  var z;\n  for(z in list) {\n    String y = /*info:DYNAMIC_CAST*/z;\n  }\n\n  Iterable iter = list;\n  for (Foo /*info:DYNAMIC_CAST*/x in iter) {\n    var y = x;\n  }\n\n  dynamic iter2 = list;\n  for (Foo /*info:DYNAMIC_CAST*/x in /*info:DYNAMIC_CAST*/iter2) {\n    var y = x;\n  }\n\n  var map = <String, Foo>{};\n  // Error: map must be an Iterable.\n  for (var x in /*error:FOR_IN_OF_INVALID_TYPE*/map) {\n    String y = /*info:DYNAMIC_CAST*/x;\n  }\n\n  // We\'re not properly inferring that map.keys is an Iterable<String>\n  // and that x is a String.\n  for (var x in map.keys) {\n    String y = x;\n  }\n}\n');
        } )());
    }

    test_inferTypesOnLoopIndices_forLoopWithInference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('test() {\n  for (var i = 0; i < 10; i++) {\n    int j = i + 1;\n  }\n}\n');
        } )());
    }

    test_inferVariableVoid() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('void f() {}\nvar x = /*info:USE_OF_VOID_RESULT*/f();\n  ');
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.name,'x');
            expect(x.type.toString(),'void');
        } )());
    }

    test_instantiateToBounds_generic2_hasBound_definedAfter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class B<T extends /*error:NOT_INSTANTIATED_BOUND*/A> {}\nclass A<T extends int> {}\nB v = null;\n');
            expect(op(Op.INDEX,unit.topLevelVariables,0).type.toString(),'B<A<dynamic>>');
        } )());
    }

    test_instantiateToBounds_generic2_hasBound_definedBefore() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class A<T extends int> {}\nclass B<T extends /*error:NOT_INSTANTIATED_BOUND*/A> {}\nB v = null;\n');
            expect(op(Op.INDEX,unit.topLevelVariables,0).type.toString(),'B<A<dynamic>>');
        } )());
    }

    test_instantiateToBounds_generic2_noBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class A<T> {}\nclass B<T extends A> {}\nB v = null;\n');
            expect(op(Op.INDEX,unit.topLevelVariables,0).type.toString(),'B<A<dynamic>>');
        } )());
    }

    test_instantiateToBounds_generic_hasBound_definedAfter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('A v = null;\nclass A<T extends int> {}\n');
            expect(op(Op.INDEX,unit.topLevelVariables,0).type.toString(),'A<int>');
        } )());
    }

    test_instantiateToBounds_generic_hasBound_definedBefore() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class A<T extends int> {}\nA v = null;\n');
            expect(op(Op.INDEX,unit.topLevelVariables,0).type.toString(),'A<int>');
        } )());
    }

    test_instantiateToBounds_invokeConstructor_noBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C<T> {}\nmain() {\n  var v = new C();\n}\n');
            let v = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(v.type.toString(),'C<dynamic>');
        } )());
    }

    test_instantiateToBounds_invokeConstructor_typeArgsExact() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C<T extends num> {}\nvar x = new C<int>();\n');
            expect(op(Op.INDEX,unit.topLevelVariables,0).type.toString(),'C<int>');
        } )());
    }

    test_instantiateToBounds_notGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class A {}\nclass B<T extends A> {}\nB v = null;\n');
            expect(op(Op.INDEX,unit.topLevelVariables,0).type.toString(),'B<A>');
        } )());
    }

    test_lambdaDoesNotHavePropagatedTypeHint() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('List<String> getListOfString() => const <String>[];\n\nvoid foo() {\n  List myList = getListOfString();\n  myList.map((type) => 42);\n}\n\nvoid bar() {\n  var list;\n  try {\n    list = <String>[];\n  } catch (_) {\n    return;\n  }\n  /*info:DYNAMIC_INVOKE*/list.map((value) => \'$value\');\n}\n  ');
        } )());
    }

    test_listLiterals() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('test1() {\n  var x = /*info:INFERRED_TYPE_LITERAL*/[1, 2, 3];\n  x.add(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/\'hi\');\n  x.add(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/4.0);\n  x.add(4);\n  List<num> y = x;\n}\ntest2() {\n  var x = /*info:INFERRED_TYPE_LITERAL*/[1, 2.0, 3];\n  x.add(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/\'hi\');\n  x.add(4.0);\n  List<int> y = /*info:ASSIGNMENT_CAST*/x;\n}\n');
        } )());
    }

    test_listLiterals_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var x1 = /*info:INFERRED_TYPE_LITERAL*/[1, 2, 3];\ntest1() {\n  x1.add(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/\'hi\');\n  x1.add(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/4.0);\n  x1.add(4);\n  List<num> y = x1;\n}\nvar x2 = /*info:INFERRED_TYPE_LITERAL*/[1, 2.0, 3];\ntest2() {\n  x2.add(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/\'hi\');\n  x2.add(4.0);\n  List<int> y = /*info:ASSIGNMENT_CAST*/x2;\n}\n');
        } )());
    }

    test_listLiteralsCanInferNull_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('var x = /*info:INFERRED_TYPE_LITERAL*/[null];\n');
            let x = op(Op.INDEX,unit.topLevelVariables,0);
            expect(x.type.toString(),'List<Null>');
        } )());
    }

    test_listLiteralsCanInferNullBottom() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let unit = await this.checkFileElement('test1() {\n  var x = /*info:INFERRED_TYPE_LITERAL*/[null];\n  x.add(/*error:INVALID_CAST_LITERAL*/42);\n}\n');
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(x.type.toString(),'List<Null>');
        } )());
    }

    test_mapLiterals() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('test1() {\n  var x = /*info:INFERRED_TYPE_LITERAL*/{ 1: \'x\', 2: \'y\' };\n  x[3] = \'z\';\n  x[/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/\'hi\'] = \'w\';\n  x[/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/4.0] = \'u\';\n  x[3] = /*error:INVALID_ASSIGNMENT*/42;\n  Map<num, String> y = x;\n}\n\ntest2() {\n  var x = /*info:INFERRED_TYPE_LITERAL*/{ 1: \'x\', 2: \'y\', 3.0: new RegExp(\'.\') };\n  x[3] = \'z\';\n  x[/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/\'hi\'] = \'w\';\n  x[4.0] = \'u\';\n  x[3] = /*error:INVALID_ASSIGNMENT*/42;\n  Pattern p = null;\n  x[2] = p;\n  Map<int, String> y = /*info:ASSIGNMENT_CAST*/x;\n}\n');
        } )());
    }

    test_mapLiterals_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var x1 = /*info:INFERRED_TYPE_LITERAL*/{ 1: \'x\', 2: \'y\' };\ntest1() {\n  x1[3] = \'z\';\n  x1[/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/\'hi\'] = \'w\';\n  x1[/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/4.0] = \'u\';\n  x1[3] = /*error:INVALID_ASSIGNMENT*/42;\n  Map<num, String> y = x1;\n}\n\nvar x2 = /*info:INFERRED_TYPE_LITERAL*/{ 1: \'x\', 2: \'y\', 3.0: new RegExp(\'.\') };\ntest2() {\n  x2[3] = \'z\';\n  x2[/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/\'hi\'] = \'w\';\n  x2[4.0] = \'u\';\n  x2[3] = /*error:INVALID_ASSIGNMENT*/42;\n  Pattern p = null;\n  x2[2] = p;\n  Map<int, String> y = /*info:ASSIGNMENT_CAST*/x2;\n}\n');
        } )());
    }

    test_mapLiteralsCanInferNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let unit = await this.checkFileElement('test1() {\n  var x = /*info:INFERRED_TYPE_LITERAL*/{ null: null };\n  x[/*error:INVALID_CAST_LITERAL*/3] = /*error:INVALID_CAST_LITERAL*/\'z\';\n}\n');
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(x.type.toString(),'Map<Null, Null>');
        } )());
    }

    test_mapLiteralsCanInferNull_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('var x = /*info:INFERRED_TYPE_LITERAL*/{ null: null };\n');
            let x = op(Op.INDEX,unit.topLevelVariables,0);
            expect(x.type.toString(),'Map<Null, Null>');
        } )());
    }

    test_methodCall_withTypeArguments_instanceMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  D<T> f<T>() => null;\n}\nclass D<T> {}\nvar f = new C().f<int>();\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'D<int>');
        } )());
    }

    test_methodCall_withTypeArguments_instanceMethod_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  D/*<T>*/ f/*<T>*/() => null;\n}\nclass D<T> {}\nvar f = new C().f/*<int>*/();\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'D<int>');
        } )());
    }

    test_methodCall_withTypeArguments_instanceMethod_identifierSequence() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  D<T> f<T>() => null;\n}\nclass D<T> {}\nC c;\nvar f = c.f<int>();\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(v.name,'f');
            expect(v.type.toString(),'D<int>');
        } )());
    }

    test_methodCall_withTypeArguments_instanceMethod_identifierSequence_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  D/*<T>*/ f/*<T>*/() => null;\n}\nclass D<T> {}\nC c;\nvar f = c.f/*<int>*/();\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(v.name,'f');
            expect(v.type.toString(),'D<int>');
        } )());
    }

    test_methodCall_withTypeArguments_staticMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  static D<T> f<T>() => null;\n}\nclass D<T> {}\nvar f = C.f<int>();\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'D<int>');
        } )());
    }

    test_methodCall_withTypeArguments_staticMethod_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  static D/*<T>*/ f/*<T>*/() => null;\n}\nclass D<T> {}\nvar f = C.f/*<int>*/();\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'D<int>');
        } )());
    }

    test_methodCall_withTypeArguments_topLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('D<T> f<T>() => null;\nclass D<T> {}\nvar g = f<int>();\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'D<int>');
        } )());
    }

    test_methodCall_withTypeArguments_topLevelFunction_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('D/*<T>*/ f/*<T>*/() => null;\nclass D<T> {}\nvar g = f/*<int>*/();\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'D<int>');
        } )());
    }

    test_noErrorWhenDeclaredTypeIsNumAndAssignedNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('test1() {\n  num x = 3;\n  x = null;\n}\n');
        } )());
    }

    test_nullCoalescingOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('main() {\n  List<int> x;\n  var y = x ?? /*info:INFERRED_TYPE_LITERAL*/[];\n  List<int> z = y;\n}\n');
            let unit = await this.checkFileElement('main() {\n  List<int> x;\n  List<num> y = x ?? /*info:INFERRED_TYPE_LITERAL*/[];\n}\n');
            let y = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,1);
            expect(y.initializer.returnType.toString(),'List<num>');
        } )());
    }

    test_nullLiteralShouldNotInferAsBottom() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var h = null;\nvoid foo(int f(Object _)) {}\n\nmain() {\n  var f = (Object x) => null;\n  String y = /*info:DYNAMIC_CAST*/f(42);\n\n  f = /*info:INFERRED_TYPE_CLOSURE*/(x) => \'hello\';\n\n  var g = null;\n  g = \'hello\';\n  (/*info:DYNAMIC_INVOKE*/g.foo());\n\n  h = \'hello\';\n  (/*info:DYNAMIC_INVOKE*/h.foo());\n\n  foo(/*info:INFERRED_TYPE_CLOSURE*/(x) => null);\n  foo(/*info:INFERRED_TYPE_CLOSURE*/(x) => throw "not implemented");\n}\n');
        } )());
    }

    test_propagateInferenceToFieldInClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {\n  int x = 2;\n}\n\ntest() {\n  var a = new A();\n  A b = a;                      // doesn\'t require down cast\n  print(a.x);     // doesn\'t require dynamic invoke\n  print(a.x + 2); // ok to use in bigger expression\n}\n');
        } )());
    }

    test_propagateInferenceToFieldInClassDynamicWarnings() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {\n  int x = 2;\n}\n\ntest() {\n  dynamic a = new A();\n  A b = /*info:DYNAMIC_CAST*/a;\n  print(/*info:DYNAMIC_INVOKE*/a.x);\n  print(/*info:DYNAMIC_INVOKE*/(/*info:DYNAMIC_INVOKE*/a.x) + 2);\n}\n');
        } )());
    }

    test_propagateInferenceTransitively() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {\n  int x = 2;\n}\n\ntest5() {\n  var a1 = new A();\n  a1.x = /*error:INVALID_ASSIGNMENT*/"hi";\n\n  A a2 = new A();\n  a2.x = /*error:INVALID_ASSIGNMENT*/"hi";\n}\n');
        } )());
    }

    test_propagateInferenceTransitively2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {\n  int x = 42;\n}\n\nclass B {\n  A a = new A();\n}\n\nclass C {\n  B b = new B();\n}\n\nclass D {\n  C c = new C();\n}\n\nvoid main() {\n  var d1 = new D();\n  print(d1.c.b.a.x);\n\n  D d2 = new D();\n  print(d2.c.b.a.x);\n}\n');
        } )());
    }

    test_referenceToTypedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('typedef void F();\nfinal x = F;\n');
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.type.toString(),'Type');
        } )());
    }

    test_refineBinaryExpressionType_typeParameter_T_double() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class C<T extends num> {\n  T a;\n\n  void op(double b) {\n    double r1 = a + b;\n    double r2 = a - b;\n    double r3 = a * b;\n    double r4 = a / b;\n  }\n}\n');
        } )());
    }

    test_refineBinaryExpressionType_typeParameter_T_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class C<T extends num> {\n  T a;\n\n  void op(int b) {\n    T r1 = a + b;\n    T r2 = a - b;\n    T r3 = a * b;\n  }\n\n  void opEq(int b) {\n    a += b;\n    a -= b;\n    a *= b;\n  }\n}\n');
        } )());
    }

    test_refineBinaryExpressionType_typeParameter_T_T() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class C<T extends num> {\n  T a;\n\n  void op(T b) {\n    T r1 = a + b;\n    T r2 = a - b;\n    T r3 = a * b;\n  }\n\n  void opEq(T b) {\n    a += b;\n    a -= b;\n    a *= b;\n  }\n}\n');
        } )());
    }

    test_staticMethod_tearoff() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('const v = C.f;\nclass C {\n  static int f(String s) => null;\n}\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'(String) → int');
        } )());
    }

    test_unsafeBlockClosureInference_closureCall() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {\n  var v = ((x) => 1.0)(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n}\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'double');
        } )());
    }

    test_unsafeBlockClosureInference_constructorCall_explicitDynamicParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C<T> {\n  C(T x());\n}\nvar v = new C<dynamic>(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'C<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_constructorCall_explicitTypeParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C<T> {\n  C(T x());\n}\nvar v = new C<int>(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'C<int>');
        } )());
    }

    test_unsafeBlockClosureInference_constructorCall_implicitTypeParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C<T> {\n  C(T x());\n}\nmain() {\n  var v = /*info:INFERRED_TYPE_ALLOCATION*/new C(\n    /*info:INFERRED_TYPE_CLOSURE*/() {\n      return 1;\n    });\n}\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'C<int>');
        } )());
    }

    test_unsafeBlockClosureInference_constructorCall_noTypeParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  C(x());\n}\nvar v = new C(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'C');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('List<T> f<T>(T g()) => <T>[g()];\nvar v = f<dynamic>(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('dynamic /*=List<T>*/ f/*<T>*/(dynamic/*=T*/ g()) => <T>[g()];\nvar v = f/*<dynamic>*/(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('List<T> f<T>(T g()) => <T>[g()];\nvar v = (f<dynamic>)(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr1_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('dynamic /*=List<T>*/ f/*<T>*/(dynamic/*=T*/ g()) => <T>[g()];\nvar v = (f/*<dynamic>*/)(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('List<T> f<T>(T g()) => <T>[g()];\nvar v = (f)<dynamic>(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr2_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('dynamic /*=List<T>*/ f/*<T>*/(dynamic/*=T*/ g()) => <T>[g()];\nvar v = (f)/*<dynamic>*/(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitTypeParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('List<T> f<T>(T g()) => <T>[g()];\nvar v = f<int>(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('dynamic /*=List<T>*/ f/*<T>*/(dynamic/*=T*/ g()) => <T>[g()];\nvar v = f/*<int>*/(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('List<T> f<T>(T g()) => <T>[g()];\nvar v = (f/int>)(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr1_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('dynamic /*=List<T>*/ f/*<T>*/(dynamic/*=T*/ g()) => <T>[g()];\nvar v = (f/*<int>*/)(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('List<T> f<T>(T g()) => <T>[g()];\nvar v = (f)<int>(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr2_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('dynamic /*=List<T>*/ f/*<T>*/(dynamic/*=T*/ g()) => <T>[g()];\nvar v = (f)/*<int>*/(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_implicitTypeParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {\n  var v = f(\n    /*info:INFERRED_TYPE_CLOSURE*/() {\n      return 1;\n    });\n}\nList<T> f<T>(T g()) => <T>[g()];\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_implicitTypeParam_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {\n  var v = f(\n    /*info:INFERRED_TYPE_CLOSURE*/() {\n      return 1;\n    });\n}\ndynamic /*=List<T>*/ f/*<T>*/(dynamic/*=T*/ g()) => <T>[g()];\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_implicitTypeParam_viaExpr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {\n  var v = (f)(\n    /*info:INFERRED_TYPE_CLOSURE*/() {\n      return 1;\n    });\n}\nList<T> f<T>(T g()) => <T>[g()];\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_implicitTypeParam_viaExpr_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {\n  var v = (f)(\n    /*info:INFERRED_TYPE_CLOSURE*/() {\n      return 1;\n    });\n}\ndynamic /*=List<T>*/ f/*<T>*/(dynamic/*=T*/ g()) => <T>[g()];\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_noTypeParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {\n  var v = f(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n}\ndouble f(x) => 1.0;\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'double');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_noTypeParam_viaExpr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {\n  var v = (f)(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n}\ndouble f(x) => 1.0;\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'double');
        } )());
    }

    test_unsafeBlockClosureInference_inList_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {\n  var v = <dynamic>[/*info:INFERRED_TYPE_CLOSURE*/() { return 1; }];\n}\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_inList_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('typedef int F();\nmain() {\n  var v = <F>[/*info:INFERRED_TYPE_CLOSURE*/() { return 1; }];\n}\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<() → int>');
        } )());
    }

    test_unsafeBlockClosureInference_inList_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {\n  var v = /*info:INFERRED_TYPE_LITERAL*/[\n    /*info:INFERRED_TYPE_CLOSURE*/() {\n      return 1;\n    }];\n}\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<() → int>');
        } )());
    }

    test_unsafeBlockClosureInference_inMap_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {\n  var v = <int, dynamic>{1: /*info:INFERRED_TYPE_CLOSURE*/() { return 1; }};\n}\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'Map<int, dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_inMap_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('typedef int F();\nmain() {\n  var v = <int, F>{1: /*info:INFERRED_TYPE_CLOSURE*/() { return 1; }};\n}\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'Map<int, () → int>');
        } )());
    }

    test_unsafeBlockClosureInference_inMap_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {\n  var v = /*info:INFERRED_TYPE_LITERAL*/{\n    1: /*info:INFERRED_TYPE_CLOSURE*/() {\n      return 1;\n    }};\n}\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'Map<int, () → int>');
        } )());
    }

    test_unsafeBlockClosureInference_methodCall_explicitDynamicParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  List<T> f<T>(T g()) => <T>[g()];\n}\nmain() {\n  var v = new C().f<dynamic>(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n}\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_methodCall_explicitDynamicParam_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  dynamic /*=List<T>*/ f/*<T>*/(dynamic/*=T*/ g()) => <T>[g()];\n}\nmain() {\n  var v = new C().f/*<dynamic>*/(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n}\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_methodCall_explicitTypeParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  List<T> f<T>(T g()) => <T>[g()];\n}\nmain() {\n  var v = new C().f<int>(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n}\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_methodCall_explicitTypeParam_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  dynamic /*=List<T>*/ f/*<T>*/(dynamic/*=T*/ g()) => <T>[g()];\n}\nmain() {\n  var v = new C().f/*<int>*/(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n}\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_methodCall_implicitTypeParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  List<T> f<T>(T g()) => <T>[g()];\n}\nmain() {\n  var v = new C().f(\n    /*info:INFERRED_TYPE_CLOSURE*/() {\n      return 1;\n    });\n}\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_methodCall_implicitTypeParam_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  dynamic /*=List<T>*/ f/*<T>*/(dynamic/*=T*/ g()) => <T>[g()];\n}\nmain() {\n  var v = new C().f(\n    /*info:INFERRED_TYPE_CLOSURE*/() {\n      return 1;\n    });\n}\n');
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_methodCall_noTypeParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {\n  double f(x) => 1.0;\n}\nvar v = new C().f(/*info:INFERRED_TYPE_CLOSURE*/() { return 1; });\n');
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'double');
        } )());
    }

    test_voidReturnTypeSubtypesDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('T run<T>(T f()) {\n  print("running");\n  var t = f();\n  print("done running");\n  return t;\n}\n\n\nvoid printRunning() { print("running"); }\nvar x = run<dynamic>(printRunning);\nvar y = /*info:USE_OF_VOID_RESULT, error:TOP_LEVEL_TYPE_ARGUMENTS*/run(printRunning);\n\nmain() {\n  void printRunning() { print("running"); }\n  var x = run<dynamic>(printRunning);\n  var y = /*info:USE_OF_VOID_RESULT*/run(printRunning);\n  x = 123;\n  x = \'hi\';\n  y = /*error:INVALID_ASSIGNMENT*/123;\n  y = /*error:INVALID_ASSIGNMENT*/\'hi\';\n}\n  ');
            let x = op(Op.INDEX,unit.topLevelVariables,0);
            let y = op(Op.INDEX,unit.topLevelVariables,1);
            expect(x.type.toString(),'dynamic');
            expect(y.type.toString(),'dynamic');
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    InferredTypeMixin() {
    }
}

export namespace InferredTypeTest {
    export type Constructors = lib3.AbstractStrongTest.Constructors | 'InferredTypeTest';
    export type Interface = Omit<InferredTypeTest, Constructors>;
}
@DartClass
@With(InferredTypeMixin)
export class InferredTypeTest extends lib3.AbstractStrongTest implements InferredTypeMixin.Interface {
    @Abstract
    addFile(content : string,_namedArguments? : {name? : string}) : void {
        let {name} = Object.assign({
            "name" : '/main.dart'}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    test_asyncClosureReturnType_flatten() : any {
        throw 'from mixin';
    }
    @Abstract
    test_asyncClosureReturnType_future() : any {
        throw 'from mixin';
    }
    @Abstract
    test_asyncClosureReturnType_futureOr() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_async_allReturnsAreFutures() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_async_allReturnsAreValues() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_async_mixOfValuesAndFutures() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_asyncStar() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_basic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_downwardsIncompatibleWithUpwardsInference() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_downwardsIncompatibleWithUpwardsInference_topLevel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_inferBottom_async() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_inferBottom_asyncStar() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_inferBottom_sync() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_inferBottom_syncStar() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_LUB() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_nestedLambdas() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_noReturn() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_syncStar() : any {
        throw 'from mixin';
    }
    @Abstract
    test_bottom() : any {
        throw 'from mixin';
    }
    @Abstract
    test_bottom_inClosure() : any {
        throw 'from mixin';
    }
    @Abstract
    test_circularReference_viaClosures() : any {
        throw 'from mixin';
    }
    @Abstract
    test_circularReference_viaClosures_initializerTypes() : any {
        throw 'from mixin';
    }
    @Abstract
    test_conflictsCanHappen() : any {
        throw 'from mixin';
    }
    @Abstract
    test_conflictsCanHappen2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_downwardsWithConstraint() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferenceFBounded() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_argumentNotAssignable() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_const() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_constWithUpperBound() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_downwardsFromConstructor() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_factory() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_factory_callsConstructor() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_named() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_namedFactory() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_redirecting() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_redirectingFactory() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_reverseTypeParameters() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_tooManyPositionalArguments() : any {
        throw 'from mixin';
    }
    @Abstract
    test_doNotInferOverriddenFieldsThatExplicitlySayDynamic_infer() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dontInferFieldTypeWhenInitializerIsNull() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dontInferTypeOnDynamic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dontInferTypeWhenInitializerIsNull() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardInference_fixes_noUpwardsErrors() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardInference_miscellaneous() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInference_insideTopLevel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceAnnotations() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceAssignmentStatements() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceAsyncAwait() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceForEach() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceInitializingFormalDefaultFormal() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnConstructorArguments_inferDownwards() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnFunctionArguments_inferDownwards() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnFunctionExpressions() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnFunctionOfTUsingTheT() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnFunctionOfTUsingTheT_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnGenericConstructorArguments_emptyList() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnGenericConstructorArguments_inferDownwards() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnGenericFunctionExpressions() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnGenericFunctionExpressions_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnInstanceCreations_inferDownwards() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnListLiterals_inferDownwards() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnListLiterals_inferIfValueTypesMatchContext() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnMapLiterals() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceYieldYieldStar() : any {
        throw 'from mixin';
    }
    @Abstract
    test_fieldRefersToStaticGetter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_fieldRefersToTopLevelGetter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureOr_subtyping() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureThen() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureThen_conditional() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureThen_downwardsMethodTarget() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureThen_explicitFuture() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureThen_upwards() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureThen_upwardsFromBlock() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureUnion_asyncConditional() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureUnion_downwards() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureUnion_downwardsGenericMethodWithFutureReturn() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureUnion_downwardsGenericMethodWithGenericReturn() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureUnion_downwardsGenericMethodWithGenericReturn_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureUnion_upwardsGenericMethods() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericFunctions_returnTypedef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericFunctions_returnTypedef_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_basicDownwardInference() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_basicDownwardInference_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_correctlyRecognizeGenericUpperBound() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_dartMathMinMax() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_doNotInferInvalidOverrideOfGenericMethod() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_doNotInferInvalidOverrideOfGenericMethod_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_downwardsInferenceAffectsArguments() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_downwardsInferenceAffectsArguments_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_downwardsInferenceFold() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_handleOverrideOfNonGenericWithGeneric() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferenceError() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferGenericFunctionParameterType() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferGenericFunctionParameterType2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferGenericFunctionParameterType2_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferGenericFunctionParameterType_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferGenericFunctionReturnType() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferGenericFunctionReturnType_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferGenericInstantiation() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferGenericMethodType() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferGenericMethodType_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferJSBuiltin() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_IterableAndFuture() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_nestedGenericInstantiation() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_usesGreatestLowerBound() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_usesGreatestLowerBound_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_usesGreatestLowerBound_comment_topLevel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_assignToIndex() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_assignToProperty() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_assignToProperty_custom() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_assignToRef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_binary_custom() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_binary_doubleDouble() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_binary_doubleInt() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_binary_intDouble() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_binary_intInt() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_conditional() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_prefixExpression() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_prefixExpression_custom() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_throw() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_typeCast() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_typedListLiteral() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_typedMapLiteral() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_use_of_void() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferConstsTransitively() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferCorrectlyOnMultipleVariablesDeclaredTogether() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferedType_usesSyntheticFunctionType() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferedType_usesSyntheticFunctionType_functionTypedParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferedType_usesSyntheticFunctionType_namedParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferedType_usesSyntheticFunctionType_positionalParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferedType_usesSyntheticFunctionType_requiredParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferFromComplexExpressionsIfOuterMostValueIsPrecise() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferFromRhsOnlyIfItWontConflictWithOverriddenFields() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferFromRhsOnlyIfItWontConflictWithOverriddenFields2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferFromVariablesInCycleLibsWhenFlagIsOn() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferFromVariablesInCycleLibsWhenFlagIsOn2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferFromVariablesInNonCycleImportsWithFlag() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferFromVariablesInNonCycleImportsWithFlag2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferGenericMethodType_named() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferGenericMethodType_named_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferGenericMethodType_positional() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferGenericMethodType_positional2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferGenericMethodType_positional2_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferGenericMethodType_positional_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferGenericMethodType_required() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferGenericMethodType_required_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferListLiteralNestedInMapLiteral() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferLocalFunctionReturnType() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferParameterType_setter_fromField() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferParameterType_setter_fromSetter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferred_nonstatic_field_depends_on_static_field_complex() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferred_nonstatic_field_depends_on_toplevel_var_simple() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredInitializingFormalChecksDefaultValue() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_blockClosure_noArgs_noReturn() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_cascade() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_customBinaryOp() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_customBinaryOp_viaInterface() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_customIndexOp() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_customIndexOp_viaInterface() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_customUnaryOp() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_customUnaryOp_viaInterface() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_extractMethodTearOff() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_extractMethodTearOff_viaInterface() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_fromTopLevelExecutableTearoff() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_invokeMethod() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_invokeMethod_viaInterface() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_isEnum() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_isEnumValues() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_isTypedef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_isTypedef_parameterized() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_viaClosure_multipleLevelsOfNesting() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_viaClosure_typeDependsOnArgs() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_viaClosure_typeIndependentOfArgs_field() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_viaClosure_typeIndependentOfArgs_topLevel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferReturnOfStatementLambda() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferStaticsTransitively() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferStaticsTransitively2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferStaticsTransitively3() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferStaticsWithMethodInvocations() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypeOnOverriddenFields2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypeOnOverriddenFields4() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypeOnVar() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypeOnVar2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypeOnVarFromField() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypeOnVarFromTopLevel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypeRegardlessOfDeclarationOrderOrCycles() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypesOnGenericInstantiations_3() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypesOnGenericInstantiations_4() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypesOnGenericInstantiations_5() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypesOnGenericInstantiations_infer() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypesOnGenericInstantiationsInLibraryCycle() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypesOnLoopIndices_forEachLoop() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypesOnLoopIndices_forLoopWithInference() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferVariableVoid() : any {
        throw 'from mixin';
    }
    @Abstract
    test_instantiateToBounds_generic2_hasBound_definedAfter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_instantiateToBounds_generic2_hasBound_definedBefore() : any {
        throw 'from mixin';
    }
    @Abstract
    test_instantiateToBounds_generic2_noBound() : any {
        throw 'from mixin';
    }
    @Abstract
    test_instantiateToBounds_generic_hasBound_definedAfter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_instantiateToBounds_generic_hasBound_definedBefore() : any {
        throw 'from mixin';
    }
    @Abstract
    test_instantiateToBounds_invokeConstructor_noBound() : any {
        throw 'from mixin';
    }
    @Abstract
    test_instantiateToBounds_invokeConstructor_typeArgsExact() : any {
        throw 'from mixin';
    }
    @Abstract
    test_instantiateToBounds_notGeneric() : any {
        throw 'from mixin';
    }
    @Abstract
    test_lambdaDoesNotHavePropagatedTypeHint() : any {
        throw 'from mixin';
    }
    @Abstract
    test_listLiterals() : any {
        throw 'from mixin';
    }
    @Abstract
    test_listLiterals_topLevel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_listLiteralsCanInferNull_topLevel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_listLiteralsCanInferNullBottom() : any {
        throw 'from mixin';
    }
    @Abstract
    test_mapLiterals() : any {
        throw 'from mixin';
    }
    @Abstract
    test_mapLiterals_topLevel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_mapLiteralsCanInferNull() : any {
        throw 'from mixin';
    }
    @Abstract
    test_mapLiteralsCanInferNull_topLevel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_methodCall_withTypeArguments_instanceMethod() : any {
        throw 'from mixin';
    }
    @Abstract
    test_methodCall_withTypeArguments_instanceMethod_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_methodCall_withTypeArguments_instanceMethod_identifierSequence() : any {
        throw 'from mixin';
    }
    @Abstract
    test_methodCall_withTypeArguments_instanceMethod_identifierSequence_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_methodCall_withTypeArguments_staticMethod() : any {
        throw 'from mixin';
    }
    @Abstract
    test_methodCall_withTypeArguments_staticMethod_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_methodCall_withTypeArguments_topLevelFunction() : any {
        throw 'from mixin';
    }
    @Abstract
    test_methodCall_withTypeArguments_topLevelFunction_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_noErrorWhenDeclaredTypeIsNumAndAssignedNull() : any {
        throw 'from mixin';
    }
    @Abstract
    test_nullCoalescingOperator() : any {
        throw 'from mixin';
    }
    @Abstract
    test_nullLiteralShouldNotInferAsBottom() : any {
        throw 'from mixin';
    }
    @Abstract
    test_propagateInferenceToFieldInClass() : any {
        throw 'from mixin';
    }
    @Abstract
    test_propagateInferenceToFieldInClassDynamicWarnings() : any {
        throw 'from mixin';
    }
    @Abstract
    test_propagateInferenceTransitively() : any {
        throw 'from mixin';
    }
    @Abstract
    test_propagateInferenceTransitively2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_referenceToTypedef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_refineBinaryExpressionType_typeParameter_T_double() : any {
        throw 'from mixin';
    }
    @Abstract
    test_refineBinaryExpressionType_typeParameter_T_int() : any {
        throw 'from mixin';
    }
    @Abstract
    test_refineBinaryExpressionType_typeParameter_T_T() : any {
        throw 'from mixin';
    }
    @Abstract
    test_staticMethod_tearoff() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_closureCall() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_constructorCall_explicitDynamicParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_constructorCall_explicitTypeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_constructorCall_implicitTypeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_constructorCall_noTypeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr1() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr1_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr2_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitTypeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr1() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr1_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr2_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_implicitTypeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_implicitTypeParam_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_implicitTypeParam_viaExpr() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_implicitTypeParam_viaExpr_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_noTypeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_noTypeParam_viaExpr() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_inList_dynamic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_inList_typed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_inList_untyped() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_inMap_dynamic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_inMap_typed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_inMap_untyped() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_methodCall_explicitDynamicParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_methodCall_explicitDynamicParam_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_methodCall_explicitTypeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_methodCall_explicitTypeParam_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_methodCall_implicitTypeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_methodCall_implicitTypeParam_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_methodCall_noTypeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_voidReturnTypeSubtypesDynamic() : any {
        throw 'from mixin';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get mayCheckTypesOfLocals() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkFileElement(content : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit : any = await this.checkFile(content);
            return (unit).element;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InferredTypeTest() {
    }
}

export namespace InferredTypeTest_Driver {
    export type Constructors = InferredTypeTest.Constructors | 'InferredTypeTest_Driver';
    export type Interface = Omit<InferredTypeTest_Driver, Constructors>;
}
@DartClass
export class InferredTypeTest_Driver extends InferredTypeTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasExtraTaskModelPass() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_circularReference_viaClosures() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_circularReference_viaClosures();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_circularReference_viaClosures_initializerTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_circularReference_viaClosures_initializerTypes();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_listLiteralsCanInferNull_topLevel() {
        return super.test_listLiteralsCanInferNull_topLevel();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_mapLiteralsCanInferNull_topLevel() {
        return super.test_mapLiteralsCanInferNull_topLevel();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr2();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr2_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr2_comment();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr2();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr2_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr2_comment();
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InferredTypeTest_Driver() {
    }
}

export class properties {
}
