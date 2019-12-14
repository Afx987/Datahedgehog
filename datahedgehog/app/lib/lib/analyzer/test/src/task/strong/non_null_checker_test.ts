/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/strong/non_null_checker_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./strong_test_helper";

export var main : () => void = () : void =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(NonNullCheckerTest);
        defineReflectiveTests(NonNullCheckerTest_Driver);
    });
};
export var _withError : (file : string,error : string) => string = (file : string,error : string) : string =>  {
    return new core.DartString(("" + file)).replaceFirst("boom",error);
};
export namespace NonNullCheckerTest {
    export type Constructors = lib3.AbstractStrongTest.Constructors | 'NonNullCheckerTest';
    export type Interface = Omit<NonNullCheckerTest, Constructors>;
}
@DartClass
export class NonNullCheckerTest extends lib3.AbstractStrongTest {
    defaultNnbdExample : string;

    defaultNnbdExampleMod1 : string;

    defaultNnbdExampleMod2 : string;

    test_assign_null_to_nonnullable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('int x = 0;\n\nmain() {\n  x = 1;\n  x = /*error:INVALID_ASSIGNMENT*/null;\n}\n');
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_compoundAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('void main() {\n  int i = 1;\n  i += 2;\n  /*error:INVALID_ASSIGNMENT*/i += null;\n  print(i);\n}\n');
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_forEach() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('void main() {\n  var ints = <num>[1, 2, 3, null];\n  for (int /*error:INVALID_ASSIGNMENT*/i in ints) {\n    print(i);\n  }\n}\n');
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_forLoop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class MyList {\n  int length;\n  MyList() {\n    length = 6;\n  }\n  String operator [](int i) {\n    return <String>["Dart", "Java", "JS", "C", "C++", "C#"][i];\n  }\n}\n\nmain() {\n  var languages = new MyList();\n  for (int i = 0; i < languages.length; ++i) {\n    print(languages[i]);\n  }\n}\n');
        } )());
    }

    test_generics() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('class Foo<T> {\n  T x;\n\n  Foo(this.x);\n}\n\nvoid main() {\n  var f = new Foo<String>("hello");\n  var g = new Foo<int>(10);\n  var h = new Foo<String>(null);\n  var i = new Foo<int>(/*error:INVALID_ASSIGNMENT*/null);\n\n  print(f.x);\n  print(g.x);\n  print(h.x);\n  print(i.x);\n}\n');
            this.addFile('class Foo<T> {\n  T x; // Should be annotated for a runtime check: x = (null as T)\n\n  Foo();\n}\n\nvoid main() {\n  var f = new Foo<String>();\n  var g = new Foo<int>(); // Should fail at runtime.\n}\n');
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_initialize_nonnullable_with_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('int x = /*error:INVALID_ASSIGNMENT*/null;');
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_initialize_nonnullable_with_valid_value() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('int x = 0;');
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_map() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('class Pair<K, V> {\n  K first;\n  V second;\n\n  Pair(this.first, this.second);\n}\n\nclass SlowMap<K, V> {\n  List<Pair<K, V>> array;\n  int arrayLength = 0;\n\n  SlowMap() : array = <Pair<K, V>>[];\n\n  void insert(K key, V value) {\n    array.add(new Pair<K, V>(key, value));\n    ++arrayLength;\n  }\n\n  bool has(K key) {\n    for (int i = 0; i < arrayLength; ++i) {\n      if (array[i].first == key) {\n        return true;\n      }\n    }\n    return false;\n  }\n\n  V get(K key) {\n    for (int i = 0; i < arrayLength; ++i) {\n      if (array[i].first == key) {\n        return array[i].second;\n      }\n    }\n    return null;\n    // TODO(stanm): generate explicit cast to V which will produce a runtime\n    // error if V is non-nullable. Optionally, generate a static warning too.\n  }\n}\n\nvoid main() {\n  var legs = new SlowMap<String, int>();\n  legs.insert("spider", 8);\n  legs.insert("goat", 4);\n  legs.insert("chicken", 2);\n\n  int x = legs.get("goat"); // This should not produce an error.\n  int y = legs.get("sheep"); // TODO(stanm): Runtime error here.\n}\n');
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_method_call() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('int s(int x) {\n  return x + 1;\n}\n\nvoid main() {\n  s(10);\n  s(/*error:INVALID_ASSIGNMENT*/null);\n}\n');
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_nonnullable_fields() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile(this.defaultNnbdExample);
            this.addFile(_withError(this.defaultNnbdExampleMod1,"error:INVALID_ASSIGNMENT"));
            this.addFile(_withError(this.defaultNnbdExampleMod2,"error:INVALID_ASSIGNMENT"));
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_nullable_fields() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile(this.defaultNnbdExample);
            this.addFile(this.defaultNnbdExampleMod1);
            this.addFile(this.defaultNnbdExampleMod2);
            await this.check();
        } )());
    }

    test_nullableTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('int x = null;');
        } )());
    }

    test_prefer_final_to_non_nullable_error() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('main() { final int /*error:FINAL_NOT_INITIALIZED*/x; }');
            this.addFile('final int /*error:FINAL_NOT_INITIALIZED*/x;');
            this.addFile('void foo() {}\n\nclass A {\n  final int x;\n\n  /*warning:FINAL_NOT_INITIALIZED_CONSTRUCTOR_1*/A();\n}\n');
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_uninitialized_nonnullable_field_declaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('void foo() {}\n\nclass A {\n  // Ideally, we should allow x to be init in the constructor, but that requires\n  // too much complication in the checker, so for now we throw a static error at\n  // the declaration site.\n  int /*error:NON_NULLABLE_FIELD_NOT_INITIALIZED*/x;\n\n  A();\n}\n');
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_uninitialized_nonnullable_local_variable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('main() { int /*error:NON_NULLABLE_FIELD_NOT_INITIALIZED*/x; }');
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_uninitialized_nonnullable_top_level_variable_declaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('int /*error:NON_NULLABLE_FIELD_NOT_INITIALIZED*/x;');
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NonNullCheckerTest() {
        this.defaultNnbdExample = 'class Point {\n  final int x, y;\n  Point(this.x, this.y);\n  Point operator +(Point other) => new Point(x + other.x, y + other.y);\n  String toString() => "x: $x, y: $y";\n}\n\nvoid main() {\n  Point p1 = new Point(0, 0);\n  Point p2 = new Point(10, 10);\n  print("p1 + p2 = ${p1 + p2}");\n}\n';
        this.defaultNnbdExampleMod1 = 'class Point {\n  final int x, y;\n  Point(this.x, this.y);\n  Point operator +(Point other) => new Point(x + other.x, y + other.y);\n  String toString() => "x: $x, y: $y";\n}\n\nvoid main() {\n  Point p1 = new Point(0, 0);\n  Point p2 = new Point(10, /*boom*/null); // Change here.\n  print("p1 + p2 = ${p1 + p2}");\n}\n';
        this.defaultNnbdExampleMod2 = 'class Point {\n  final int x, y;\n  Point(this.x, this.y);\n  Point operator +(Point other) => new Point(x + other.x, y + other.y);\n  String toString() => "x: $x, y: $y";\n}\n\nvoid main() {\n  bool f = false; // Necessary, because dead code is otherwise detected.\n  Point p1 = new Point(0, 0);\n  Point p2 = new Point(10, /*boom*/f ? 10 : null); // Change here.\n  print("p1 + p2 = ${p1 + p2}");\n}\n';
    }
}

export namespace NonNullCheckerTest_Driver {
    export type Constructors = NonNullCheckerTest.Constructors | 'NonNullCheckerTest_Driver';
    export type Interface = Omit<NonNullCheckerTest_Driver, Constructors>;
}
@DartClass
export class NonNullCheckerTest_Driver extends NonNullCheckerTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return true;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NonNullCheckerTest_Driver() {
    }
}

export class properties {
}
