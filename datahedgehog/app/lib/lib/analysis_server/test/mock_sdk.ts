/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/mock_sdk.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export namespace MockSdk {
    export type Constructors = 'MockSdk';
    export type Interface = Omit<MockSdk, Constructors>;
}
@DartClass
@Implements(any)
export class MockSdk implements any.Interface {
    private static __$LIB_CORE : MockSdkLibrary;
    static get LIB_CORE() : MockSdkLibrary { 
        if (this.__$LIB_CORE===undefined) {
            this.__$LIB_CORE = new MockSdkLibrary('dart:core','/lib/core/core.dart','library dart.core;\n\nimport \'dart:async\';\nimport \'dart:_internal\';\n\nclass Object {\n  const Object() {}\n  bool operator ==(other) => identical(this, other);\n  String toString() => \'a string\';\n  int get hashCode => 0;\n  Type get runtimeType => null;\n  dynamic noSuchMethod(Invocation invocation) => null;\n}\n\nclass Function {}\nclass StackTrace {}\nclass Symbol {}\nclass Type {}\n\nabstract class Comparable<T> {\n  int compareTo(T other);\n}\n\nabstract class String implements Comparable<String> {\n  external factory String.fromCharCodes(Iterable<int> charCodes,\n                                        [int start = 0, int end]);\n  bool get isEmpty => false;\n  bool get isNotEmpty => false;\n  int get length => 0;\n  String toUpperCase();\n  List<int> get codeUnits;\n}\n\nclass bool extends Object {}\n\nabstract class num implements Comparable<num> {\n  bool operator <(num other);\n  bool operator <=(num other);\n  bool operator >(num other);\n  bool operator >=(num other);\n  num operator +(num other);\n  num operator -(num other);\n  num operator *(num other);\n  num operator /(num other);\n  int operator ^(int other);\n  int operator &(int other);\n  int operator |(int other);\n  int operator <<(int other);\n  int operator >>(int other);\n  int operator ~/(num other);\n  num operator %(num other);\n  int operator ~();\n  int toInt();\n  double toDouble();\n  num abs();\n  int round();\n}\n\nabstract class int extends num {\n  bool get isEven => false;\n  int operator -();\n  external static int parse(String source,\n                            { int radix,\n                              int onError(String source) });\n}\n\nabstract class double extends num {\n  static const double NAN = 0.0 / 0.0;\n  static const double INFINITY = 1.0 / 0.0;\n  static const double NEGATIVE_INFINITY = -INFINITY;\n  static const double MIN_POSITIVE = 5e-324;\n  static const double MAX_FINITE = 1.7976931348623157e+308;\n\n  double remainder(num other);\n  double operator +(num other);\n  double operator -(num other);\n  double operator *(num other);\n  double operator %(num other);\n  double operator /(num other);\n  int operator ~/(num other);\n  double operator -();\n  double abs();\n  double get sign;\n  int round();\n  int floor();\n  int ceil();\n  int truncate();\n  double roundToDouble();\n  double floorToDouble();\n  double ceilToDouble();\n  double truncateToDouble();\n  external static double parse(String source,\n                               [double onError(String source)]);\n}\n\nclass DateTime extends Object {}\nclass Null extends Object {}\n\nclass Deprecated extends Object {\n  final String expires;\n  const Deprecated(this.expires);\n}\nconst Object deprecated = const Deprecated("next release");\n\nclass Iterator<E> {\n  bool moveNext();\n  E get current;\n}\n\nabstract class Iterable<E> {\n  Iterator<E> get iterator;\n  bool get isEmpty;\n  Iterable/*<R>*/ map/*<R>*/(/*=R*/ f(E e));\n}\n\nclass List<E> implements Iterable<E> {\n  List();\n  void add(E value) {}\n  void addAll(Iterable<E> iterable) {}\n  E operator [](int index) => null;\n  void operator []=(int index, E value) {}\n  Iterator<E> get iterator => null;\n  void clear() {}\n\n  bool get isEmpty => false;\n  E get first => null;\n  E get last => null;\n\n  Iterable/*<R>*/ map/*<R>*/(/*=R*/ f(E e)) => null;\n\n  /*=R*/ fold/*<R>*/(/*=R*/ initialValue,\n      /*=R*/ combine(/*=R*/ previousValue, E element)) => null;\n\n}\n\nabstract class Map<K, V> extends Object {\n  bool containsKey(Object key);\n  Iterable<K> get keys;\n}\n\nexternal bool identical(Object a, Object b);\n\nvoid print(Object object) {}\n\nclass Uri {\n  static List<int> parseIPv6Address(String host, [int start = 0, int end]) {\n    int parseHex(int start, int end) {\n      return 0;\n    }\n    return null;\n  }\n}\n');
        }
        return this.__$LIB_CORE;
    }

    private static __$LIB_ASYNC : MockSdkLibrary;
    static get LIB_ASYNC() : MockSdkLibrary { 
        if (this.__$LIB_ASYNC===undefined) {
            this.__$LIB_ASYNC = new MockSdkLibrary('dart:async','/lib/async/async.dart','library dart.async;\n\nimport \'dart:math\';\n\nclass Future<T> {\n  factory Future(computation()) => null;\n  factory Future.delayed(Duration duration, [T computation()]) => null;\n  factory Future.value([value]) => null;\n  static Future wait(List<Future> futures) => null;\n}\n\nclass FutureOr<T> {}\n\nclass Stream<T> {}\nabstract class StreamTransformer<S, T> {}\n');
        }
        return this.__$LIB_ASYNC;
    }

    private static __$LIB_COLLECTION : MockSdkLibrary;
    static get LIB_COLLECTION() : MockSdkLibrary { 
        if (this.__$LIB_COLLECTION===undefined) {
            this.__$LIB_COLLECTION = new MockSdkLibrary('dart:collection','/lib/collection/collection.dart','library dart.collection;\n\nabstract class HashMap<K, V> implements Map<K, V> {}\nabstract class LinkedHashMap<K, V> implements Map<K, V> {}\n');
        }
        return this.__$LIB_COLLECTION;
    }

    private static __$LIB_CONVERT : MockSdkLibrary;
    static get LIB_CONVERT() : MockSdkLibrary { 
        if (this.__$LIB_CONVERT===undefined) {
            this.__$LIB_CONVERT = new MockSdkLibrary('dart:convert','/lib/convert/convert.dart','library dart.convert;\n\nimport \'dart:async\';\n\nabstract class Converter<S, T> implements StreamTransformer {}\nclass JsonDecoder extends Converter<String, Object> {}\n');
        }
        return this.__$LIB_CONVERT;
    }

    private static __$LIB_MATH : MockSdkLibrary;
    static get LIB_MATH() : MockSdkLibrary { 
        if (this.__$LIB_MATH===undefined) {
            this.__$LIB_MATH = new MockSdkLibrary('dart:math','/lib/math/math.dart','library dart.math;\nconst double E = 2.718281828459045;\nconst double PI = 3.1415926535897932;\nconst double LN10 =  2.302585092994046;\nT min<T extends num>(T a, T b) => null;\nT max<T extends num>(T a, T b) => null;\nexternal double cos(num radians);\nexternal num pow(num x, num exponent);\nexternal double sin(num radians);\nexternal double sqrt(num x);\nclass Random {\n  bool nextBool() => true;\n  double nextDouble() => 2.0;\n  int nextInt() => 1;\n}\n');
        }
        return this.__$LIB_MATH;
    }

    private static __$LIB_HTML : MockSdkLibrary;
    static get LIB_HTML() : MockSdkLibrary { 
        if (this.__$LIB_HTML===undefined) {
            this.__$LIB_HTML = new MockSdkLibrary('dart:html','/lib/html/dartium/html_dartium.dart','library dart.html;\nclass HtmlElement {}\n');
        }
        return this.__$LIB_HTML;
    }

    private static __$LIB_INTERNAL : MockSdkLibrary;
    static get LIB_INTERNAL() : MockSdkLibrary { 
        if (this.__$LIB_INTERNAL===undefined) {
            this.__$LIB_INTERNAL = new MockSdkLibrary('dart:_internal','/lib/internal/internal.dart','library dart._internal;\nexternal void printToConsole(String line);\n');
        }
        return this.__$LIB_INTERNAL;
    }

    private static __$LIBRARIES : core.DartList<any>;
    static get LIBRARIES() : core.DartList<any> { 
        if (this.__$LIBRARIES===undefined) {
            this.__$LIBRARIES = new core.DartList.literal(MockSdk.LIB_CORE,MockSdk.LIB_ASYNC,MockSdk.LIB_COLLECTION,MockSdk.LIB_CONVERT,MockSdk.LIB_MATH,MockSdk.LIB_HTML,MockSdk.LIB_INTERNAL);
        }
        return this.__$LIBRARIES;
    }

    private static __$librariesContent : string;
    static get librariesContent() : string { 
        if (this.__$librariesContent===undefined) {
            this.__$librariesContent = 'const Map<String, LibraryInfo> libraries = const {\n  "async": const LibraryInfo("async/async.dart"),\n  "collection": const LibraryInfo("collection/collection.dart"),\n  "convert": const LibraryInfo("convert/convert.dart"),\n  "core": const LibraryInfo("core/core.dart"),\n  "html": const LibraryInfo("html/dartium/html_dartium.dart"),\n  "math": const LibraryInfo("math/math.dart"),\n  "_internal": const LibraryInfo("internal/internal.dart"),\n};\n';
        }
        return this.__$librariesContent;
    }

    provider : any;

    _analysisContext : any;

    _bundle : any;

    constructor(_namedArguments? : {generateSummaryFiles? : boolean,resourceProvider? : any}) {
    }
    @defaultConstructor
    MockSdk(_namedArguments? : {generateSummaryFiles? : boolean,resourceProvider? : any}) {
        let {generateSummaryFiles,resourceProvider} = Object.assign({
            "generateSummaryFiles" : false}, _namedArguments );
        this.provider = (resourceProvider || new bare.createInstance(any,null));
        MockSdk.LIBRARIES.forEach((library : any) =>  {
            this.provider.newFile(library.path,(library as MockSdkLibrary).content);
        });
        this.provider.newFile(this.provider.convertPath('/lib/_internal/sdk_library_metadata/lib/libraries.dart'),MockSdk.librariesContent);
        if (generateSummaryFiles) {
            let bytes : core.DartList<number> = this._computeLinkedBundleBytes();
            this.provider.newFileWithBytes(this.provider.convertPath('/lib/_internal/spec.sum'),bytes);
            this.provider.newFileWithBytes(this.provider.convertPath('/lib/_internal/strong.sum'),bytes);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get context() : any {
        if (op(Op.EQUALS,this._analysisContext,null)) {
            this._analysisContext = new bare.createInstance(any,null,null);
            let factory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this)));
            this._analysisContext.sourceFactory = factory;
        }
        return this._analysisContext;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sdkLibraries() : core.DartList<any> {
        return MockSdk.LIBRARIES;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sdkVersion() : string {
        return throw this.unimplemented;
    }
    get unimplemented() : core.UnimplementedError {
        return new core.UnimplementedError();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uris() : core.DartList<string> {
        let uris : core.DartList<string> = new core.DartList.literal<string>();
        for(let library of MockSdk.LIBRARIES) {
            uris.add(library.shortName);
        }
        return uris;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fromFileUri(uri : lib3.Uri) : any {
        let filePath : string = this.provider.pathContext.fromUri(uri);
        for(let library of this.sdkLibraries) {
            let libraryPath : string = this.provider.convertPath(library.path);
            if (filePath == libraryPath) {
                try {
                    let file : any = this.provider.getResource(filePath);
                    let dartUri : lib3.Uri = lib3.Uri.parse(library.shortName);
                    return file.createSource(dartUri);
                } catch (__error__) {

                    {
                        let exception = __error__;
                        return null;
                    }
                }
            }
            let libraryRootPath : string = op(Op.PLUS,this.provider.pathContext.dirname(libraryPath),this.provider.pathContext.separator);
            if (new core.DartString(filePath).startsWith(libraryRootPath)) {
                let pathInLibrary : string = new core.DartString(filePath).substring(new core.DartString(libraryRootPath).length);
                let uriStr : string = `${library.shortName}/${pathInLibrary}`;
                try {
                    let file : any = this.provider.getResource(filePath);
                    let dartUri : lib3.Uri = lib3.Uri.parse(uriStr);
                    return file.createSource(dartUri);
                } catch (__error__) {

                    {
                        let exception = __error__;
                        return null;
                    }
                }
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLinkedBundle() : any {
        if (op(Op.EQUALS,this._bundle,null)) {
            let summaryFile : any = this.provider.getFile(this.provider.convertPath('/lib/_internal/spec.sum'));
            let bytes : core.DartList<number>;
            if (summaryFile.exists) {
                bytes = summaryFile.readAsBytesSync();
            }else {
                bytes = this._computeLinkedBundleBytes();
            }
            this._bundle = new bare.createInstance(any,null,bytes);
        }
        return this._bundle;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getSdkLibrary(dartUri : string) : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mapDartUri(dartUri : string) : any {
        let uriToPath : core.DartMap<string,string> = new core.DartMap.literal([
            ["dart:core","/lib/core/core.dart"],
            ["dart:html","/lib/html/dartium/html_dartium.dart"],
            ["dart:async","/lib/async/async.dart"],
            ["dart:collection","/lib/collection/collection.dart"],
            ["dart:convert","/lib/convert/convert.dart"],
            ["dart:math","/lib/math/math.dart"],
            ["dart:_internal","/lib/internal/internal.dart"]]);
        let path : string = uriToPath.get(dartUri);
        if (path != null) {
            let file : any = this.provider.getResource(path);
            let uri : lib3.Uri = new lib3.Uri({
                scheme : 'dart',path : new core.DartString(dartUri).substring(5)});
            return file.createSource(uri);
        }
        return null;
    }
    _computeLinkedBundleBytes() : core.DartList<number> {
        let librarySources : core.DartList<any> = this.sdkLibraries.map((library : any) =>  {
            return this.mapDartUri(library.shortName);
        }).toList();
        return new bare.createInstance(any,null,librarySources,this.context,this.context.analysisOptions.strongMode).build();
    }
}

export namespace MockSdkLibrary {
    export type Constructors = 'MockSdkLibrary';
    export type Interface = Omit<MockSdkLibrary, Constructors>;
}
@DartClass
@Implements(any)
export class MockSdkLibrary implements any.Interface {
    shortName : string;

    path : string;

    content : string;

    constructor(shortName : string,path : string,content : string) {
    }
    @defaultConstructor
    MockSdkLibrary(shortName : string,path : string,content : string) {
        this.shortName = shortName;
        this.path = path;
        this.content = content;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get category() : string {
        return throw this.unimplemented;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDart2JsLibrary() : boolean {
        return throw this.unimplemented;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDocumented() : boolean {
        return throw this.unimplemented;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isImplementation() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isInternal() : boolean {
        return new core.DartString(this.shortName).startsWith('dart:_');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isShared() : boolean {
        return throw this.unimplemented;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isVmLibrary() : boolean {
        return throw this.unimplemented;
    }
    get unimplemented() : core.UnimplementedError {
        return new core.UnimplementedError();
    }
}

export class properties {
}
