/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/context/mock_sdk.dart */
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
    private static __$FULL_URI_MAP : core.DartMap<string,string>;
    static get FULL_URI_MAP() : core.DartMap<string,string> { 
        if (this.__$FULL_URI_MAP===undefined) {
            this.__$FULL_URI_MAP = new core.DartMap.literal([
                ["dart:core",`${properties.sdkRoot}/lib/core/core.dart`],
                ["dart:html",`${properties.sdkRoot}/lib/html/dartium/html_dartium.dart`],
                ["dart:async",`${properties.sdkRoot}/lib/async/async.dart`],
                ["dart:async/stream.dart",`${properties.sdkRoot}/lib/async/stream.dart`],
                ["dart:collection",`${properties.sdkRoot}/lib/collection/collection.dart`],
                ["dart:convert",`${properties.sdkRoot}/lib/convert/convert.dart`],
                ["dart:_foreign_helper",`${properties.sdkRoot}/lib/_foreign_helper/_foreign_helper.dart`],
                ["dart:_interceptors",`${properties.sdkRoot}/lib/_internal/js_runtime/lib/interceptors.dart`],
                ["dart:math",`${properties.sdkRoot}/lib/math/math.dart`]]);
        }
        return this.__$FULL_URI_MAP;
    }

    private static __$NO_ASYNC_URI_MAP : core.DartMap<string,string>;
    static get NO_ASYNC_URI_MAP() : core.DartMap<string,string> { 
        if (this.__$NO_ASYNC_URI_MAP===undefined) {
            this.__$NO_ASYNC_URI_MAP = new core.DartMap.literal([
                ["dart:core",`${properties.sdkRoot}/lib/core/core.dart`]]);
        }
        return this.__$NO_ASYNC_URI_MAP;
    }

    provider : any;

    uriMap : core.DartMap<string,string>;

    _analysisContext : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sdkLibraries : core.DartList<any>;

    _bundle : any;

    constructor(_namedArguments? : {generateSummaryFiles? : boolean,dartAsync? : boolean,resourceProvider? : any}) {
    }
    @defaultConstructor
    MockSdk(_namedArguments? : {generateSummaryFiles? : boolean,dartAsync? : boolean,resourceProvider? : any}) {
        let {generateSummaryFiles,dartAsync,resourceProvider} = Object.assign({
            "generateSummaryFiles" : false,
            "dartAsync" : true}, _namedArguments );
        this.provider = (resourceProvider || new bare.createInstance(any,null));
        this.sdkLibraries = dartAsync ? properties._LIBRARIES : new core.DartList.literal(properties._LIB_CORE);
        this.uriMap = dartAsync ? MockSdk.FULL_URI_MAP : MockSdk.NO_ASYNC_URI_MAP;
        for(let library of this.sdkLibraries) {
            this.provider.newFile(this.provider.convertPath(library.path),library.content);
            library.parts.forEach((path : string,content : string) =>  {
                this.provider.newFile(this.provider.convertPath(path),content);
            });
        }
        this.provider.newFile(this.provider.convertPath(`${properties.sdkRoot}/lib/_internal/sdk_library_metadata/lib/libraries.dart`),properties.librariesContent);
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
            this._analysisContext = new _SdkAnalysisContext(this);
            let factory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this)));
            this._analysisContext.sourceFactory = factory;
        }
        return this._analysisContext;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sdkVersion() : string {
        return throw new core.UnimplementedError();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uris() : core.DartList<string> {
        return this.sdkLibraries.map((library : any) =>  {
            return library.shortName;
        }).toList();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fromFileUri(uri : lib3.Uri) : any {
        let filePath : string = this.provider.pathContext.fromUri(uri);
        if (!new core.DartString(filePath).startsWith(this.provider.convertPath(`${properties.sdkRoot}/lib/`))) {
            return null;
        }
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
        for(let library of properties._LIBRARIES) {
            if (op(Op.EQUALS,library.shortName,dartUri)) {
                return library;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mapDartUri(dartUri : string) : any {
        let path : string = this.uriMap.get(dartUri);
        if (path != null) {
            let file : any = this.provider.getResource(this.provider.convertPath(path));
            let uri : lib3.Uri = new lib3.Uri({
                scheme : 'dart',path : new core.DartString(dartUri).substring(5)});
            return file.createSource(uri);
        }
        return null;
    }
    updateUriFile(uri : string,updateContent : (content : string) => string) : void {
        /* TODO (AssertStatementImpl) : assert (_analysisContext == null); */;
        let path : string = MockSdk.FULL_URI_MAP.get(uri);
        /* TODO (AssertStatementImpl) : assert (path != null); */;
        path = this.provider.convertPath(path);
        let content : string = this.provider.getFile(path).readAsStringSync();
        let newContent : string = updateContent(content);
        this.provider.updateFile(path,newContent);
    }
    _computeLinkedBundleBytes() : core.DartList<number> {
        let librarySources : core.DartList<any> = this.sdkLibraries.map((library : any) =>  {
            return this.mapDartUri(library.shortName);
        }).toList();
        return new bare.createInstance(any,null,librarySources,this.context,this.context.analysisOptions.strongMode).build();
    }
}

export namespace _MockSdkLibrary {
    export type Constructors = '_MockSdkLibrary';
    export type Interface = Omit<_MockSdkLibrary, Constructors>;
}
@DartClass
@Implements(any)
export class _MockSdkLibrary implements any.Interface {
    shortName : string;

    path : string;

    content : string;

    parts : core.DartMap<string,string>;

    constructor(shortName : string,path : string,content : string,parts? : core.DartMap<string,string>) {
    }
    @defaultConstructor
    _MockSdkLibrary(shortName : string,path : string,content : string,parts? : core.DartMap<string,string>) {
        parts = parts || new core.DartMap.literal([
        ]);
        this.shortName = shortName;
        this.path = path;
        this.content = content;
        this.parts = parts;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get category() : string {
        return throw new core.UnimplementedError();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDart2JsLibrary() : boolean {
        return throw new core.UnimplementedError();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDocumented() : boolean {
        return throw new core.UnimplementedError();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isImplementation() : boolean {
        return throw new core.UnimplementedError();
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
        return throw new core.UnimplementedError();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isVmLibrary() : boolean {
        return throw new core.UnimplementedError();
    }
}

export namespace _SdkAnalysisContext {
    export type Constructors = '_SdkAnalysisContext';
    export type Interface = Omit<_SdkAnalysisContext, Constructors>;
}
@DartClass
export class _SdkAnalysisContext extends any {
    sdk : any;

    constructor(sdk : any) {
    }
    @defaultConstructor
    _SdkAnalysisContext(sdk : any) {
        this.sdk = sdk;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createCacheFromSourceFactory(factory : any) : any {
        if (op(Op.EQUALS,factory,null)) {
            return super.createCacheFromSourceFactory(factory);
        }
        return new bare.createInstance(any,null,new core.DartList.literal<any>(AnalysisEngine.instance.partitionManager.forSdk(this.sdk)));
    }
}

export class properties {
    private static __$librariesContent : string;
    static get librariesContent() : string { 
        if (this.__$librariesContent===undefined) {
            this.__$librariesContent = 'const Map<String, LibraryInfo> libraries = const {\n  "async": const LibraryInfo("async/async.dart"),\n  "collection": const LibraryInfo("collection/collection.dart"),\n  "convert": const LibraryInfo("convert/convert.dart"),\n  "core": const LibraryInfo("core/core.dart"),\n  "html": const LibraryInfo(\n    "html/dartium/html_dartium.dart",\n    dart2jsPath: "html/dart2js/html_dart2js.dart"),\n  "math": const LibraryInfo("math/math.dart"),\n  "_foreign_helper": const LibraryInfo("_internal/js_runtime/lib/foreign_helper.dart"),\n};\n';
        }
        return this.__$librariesContent;
    }
    static set librariesContent(__$value : string)  { 
        this.__$librariesContent = __$value;
    }

    private static __$sdkRoot : string;
    static get sdkRoot() : string { 
        if (this.__$sdkRoot===undefined) {
            this.__$sdkRoot = '/sdk';
        }
        return this.__$sdkRoot;
    }
    static set sdkRoot(__$value : string)  { 
        this.__$sdkRoot = __$value;
    }

    private static __$_LIB_ASYNC : _MockSdkLibrary;
    static get _LIB_ASYNC() : _MockSdkLibrary { 
        if (this.__$_LIB_ASYNC===undefined) {
            this.__$_LIB_ASYNC = new _MockSdkLibrary('dart:async',`${properties.sdkRoot}/lib/async/async.dart`,'library dart.async;\n\nimport \'dart:math\';\n\npart \'stream.dart\';\n\nclass Future<T> {\n  factory Future(computation()) => null;\n  factory Future.delayed(Duration duration, [T computation()]) => null;\n  factory Future.value([value]) => null;\n\n  static Future<List/*<T>*/> wait/*<T>*/(\n      Iterable<Future/*<T>*/> futures) => null;\n  Future/*<R>*/ then/*<R>*/(FutureOr/*<R>*/ onValue(T value)) => null;\n\n  Future<T> whenComplete(action());\n}\n\nclass FutureOr<T> {}\n\nabstract class Completer<T> {\n  factory Completer() => new _AsyncCompleter<T>();\n  factory Completer.sync() => new _SyncCompleter<T>();\n  Future<T> get future;\n  void complete([value]);\n  void completeError(Object error, [StackTrace stackTrace]);\n  bool get isCompleted;\n}\n',new core.DartMap.literal([
                [`${properties.sdkRoot}/lib/async/stream.dart`,'part of dart.async;\nabstract class Stream<T> {\n  Future<T> get first;\n  StreamSubscription<T> listen(void onData(T event),\n                               { Function onError,\n                                 void onDone(),\n                                 bool cancelOnError});\n}\n\nabstract class StreamSubscription<T> {\n  Future cancel();\n  void onData(void handleData(T data));\n  void onError(Function handleError);\n  void onDone(void handleDone());\n  void pause([Future resumeSignal]);\n  void resume();\n  bool get isPaused;\n  Future<E> asFuture<E>([E futureValue]);\n}\n\nabstract class StreamTransformer<S, T> {}\n']]));
        }
        return this.__$_LIB_ASYNC;
    }
    static set _LIB_ASYNC(__$value : _MockSdkLibrary)  { 
        this.__$_LIB_ASYNC = __$value;
    }

    private static __$_LIB_COLLECTION : _MockSdkLibrary;
    static get _LIB_COLLECTION() : _MockSdkLibrary { 
        if (this.__$_LIB_COLLECTION===undefined) {
            this.__$_LIB_COLLECTION = new _MockSdkLibrary('dart:collection',`${properties.sdkRoot}/lib/collection/collection.dart`,'library dart.collection;\n\nabstract class HashMap<K, V> implements Map<K, V> {}\n');
        }
        return this.__$_LIB_COLLECTION;
    }
    static set _LIB_COLLECTION(__$value : _MockSdkLibrary)  { 
        this.__$_LIB_COLLECTION = __$value;
    }

    private static __$_LIB_CONVERT : _MockSdkLibrary;
    static get _LIB_CONVERT() : _MockSdkLibrary { 
        if (this.__$_LIB_CONVERT===undefined) {
            this.__$_LIB_CONVERT = new _MockSdkLibrary('dart:convert',`${properties.sdkRoot}/lib/convert/convert.dart`,'library dart.convert;\n\nimport \'dart:async\';\n\nabstract class Converter<S, T> implements StreamTransformer {}\nclass JsonDecoder extends Converter<String, Object> {}\n');
        }
        return this.__$_LIB_CONVERT;
    }
    static set _LIB_CONVERT(__$value : _MockSdkLibrary)  { 
        this.__$_LIB_CONVERT = __$value;
    }

    private static __$_LIB_CORE : _MockSdkLibrary;
    static get _LIB_CORE() : _MockSdkLibrary { 
        if (this.__$_LIB_CORE===undefined) {
            this.__$_LIB_CORE = new _MockSdkLibrary('dart:core',`${properties.sdkRoot}/lib/core/core.dart`,'library dart.core;\n\nimport \'dart:async\';\n\nclass Object {\n  const Object() {}\n  bool operator ==(other) => identical(this, other);\n  String toString() => \'a string\';\n  int get hashCode => 0;\n  Type get runtimeType => null;\n  dynamic noSuchMethod(Invocation invocation) => null;\n}\n\nclass Function {}\nclass StackTrace {}\n\nclass Symbol {\n  const factory Symbol(String name) {\n    return null;\n  }\n}\n\nclass Type {}\n\nabstract class Comparable<T> {\n  int compareTo(T other);\n}\n\nabstract class Pattern {}\nabstract class String implements Comparable<String>, Pattern {\n  external factory String.fromCharCodes(Iterable<int> charCodes,\n                                        [int start = 0, int end]);\n  String operator +(String other) => null;\n  bool get isEmpty => false;\n  bool get isNotEmpty => false;\n  int get length => 0;\n  String substring(int len) => null;\n  String toLowerCase();\n  String toUpperCase();\n  List<int> get codeUnits;\n}\nabstract class RegExp implements Pattern {\n  external factory RegExp(String source);\n}\n\nclass bool extends Object {\n  external const factory bool.fromEnvironment(String name,\n                                              {bool defaultValue: false});\n}\n\nabstract class Invocation {}\n\nabstract class num implements Comparable<num> {\n  bool operator ==(Object other);\n  bool operator <(num other);\n  bool operator <=(num other);\n  bool operator >(num other);\n  bool operator >=(num other);\n  num operator +(num other);\n  num operator -(num other);\n  num operator *(num other);\n  num operator /(num other);\n  int operator ^(int other);\n  int operator |(int other);\n  int operator <<(int other);\n  int operator >>(int other);\n  int operator ~/(num other);\n  num operator %(num other);\n  int operator ~();\n  num operator -();\n  int toInt();\n  double toDouble();\n  num abs();\n  int round();\n}\nabstract class int extends num {\n  external const factory int.fromEnvironment(String name, {int defaultValue});\n\n  bool get isNegative;\n  bool get isEven => false;\n\n  int operator &(int other);\n  int operator |(int other);\n  int operator ^(int other);\n  int operator ~();\n  int operator <<(int shiftAmount);\n  int operator >>(int shiftAmount);\n\n  int operator -();\n\n  external static int parse(String source,\n                            { int radix,\n                              int onError(String source) });\n}\n\nabstract class double extends num {\n  static const double NAN = 0.0 / 0.0;\n  static const double INFINITY = 1.0 / 0.0;\n  static const double NEGATIVE_INFINITY = -INFINITY;\n  static const double MIN_POSITIVE = 5e-324;\n  static const double MAX_FINITE = 1.7976931348623157e+308;\n\n  double remainder(num other);\n  double operator +(num other);\n  double operator -(num other);\n  double operator *(num other);\n  double operator %(num other);\n  double operator /(num other);\n  int operator ~/(num other);\n  double operator -();\n  double abs();\n  double get sign;\n  int round();\n  int floor();\n  int ceil();\n  int truncate();\n  double roundToDouble();\n  double floorToDouble();\n  double ceilToDouble();\n  double truncateToDouble();\n  external static double parse(String source,\n                               [double onError(String source)]);\n}\n\nclass DateTime extends Object {}\n\nclass Null extends Object {\n  factory Null._uninstantiable() {\n    throw new UnsupportedError(\'class Null cannot be instantiated\');\n  }\n}\n\nclass Deprecated extends Object {\n  final String expires;\n  const Deprecated(this.expires);\n}\nconst Object deprecated = const Deprecated("next release");\n\nclass Iterator<E> {\n  bool moveNext();\n  E get current;\n}\n\nabstract class Iterable<E> {\n  Iterator<E> get iterator;\n  bool get isEmpty;\n  E get first;\n\n  Iterable/*<R>*/ map/*<R>*/(/*=R*/ f(E e));\n\n  /*=R*/ fold/*<R>*/(/*=R*/ initialValue,\n      /*=R*/ combine(/*=R*/ previousValue, E element));\n\n  Iterable/*<T>*/ expand/*<T>*/(Iterable/*<T>*/ f(E element));\n\n  Iterable<E> where(bool test(E element));\n  \n  void forEach(void f(E element));\n\n  List<E> toList();\n}\n\nclass List<E> implements Iterable<E> {\n  List();\n  void add(E value) {}\n  void addAll(Iterable<E> iterable) {}\n  E operator [](int index) => null;\n  void operator []=(int index, E value) {}\n  Iterator<E> get iterator => null;\n  void clear() {}\n\n  bool get isEmpty => false;\n  E get first => null;\n  E get last => null;\n\n  /*=R*/ fold/*<R>*/(/*=R*/ initialValue,\n      /*=R*/ combine(/*=R*/ previousValue, E element)) => null;\n\n}\n\nclass Map<K, V> extends Object {\n  V operator [](K key) => null;\n  void operator []=(K key, V value) {}\n  Iterable<K> get keys => null;\n  int get length;\n  Iterable<V> get values;\n}\n\nexternal bool identical(Object a, Object b);\n\nvoid print(Object object) {}\n\nclass _Proxy { const _Proxy(); }\nconst Object proxy = const _Proxy();\n\nclass _Override { const _Override(); }\nconst Object override = const _Override();\n');
        }
        return this.__$_LIB_CORE;
    }
    static set _LIB_CORE(__$value : _MockSdkLibrary)  { 
        this.__$_LIB_CORE = __$value;
    }

    private static __$_LIB_FOREIGN_HELPER : _MockSdkLibrary;
    static get _LIB_FOREIGN_HELPER() : _MockSdkLibrary { 
        if (this.__$_LIB_FOREIGN_HELPER===undefined) {
            this.__$_LIB_FOREIGN_HELPER = new _MockSdkLibrary('dart:_foreign_helper',`${properties.sdkRoot}/lib/_foreign_helper/_foreign_helper.dart`,'library dart._foreign_helper;\n\nJS(String typeDescription, String codeTemplate,\n  [arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11])\n{}\n');
        }
        return this.__$_LIB_FOREIGN_HELPER;
    }
    static set _LIB_FOREIGN_HELPER(__$value : _MockSdkLibrary)  { 
        this.__$_LIB_FOREIGN_HELPER = __$value;
    }

    private static __$_LIB_HTML_DART2JS : _MockSdkLibrary;
    static get _LIB_HTML_DART2JS() : _MockSdkLibrary { 
        if (this.__$_LIB_HTML_DART2JS===undefined) {
            this.__$_LIB_HTML_DART2JS = new _MockSdkLibrary('dart:html',`${properties.sdkRoot}/lib/html/dart2js/html_dart2js.dart`,'library dart.html;\nclass HtmlElement {}\n');
        }
        return this.__$_LIB_HTML_DART2JS;
    }
    static set _LIB_HTML_DART2JS(__$value : _MockSdkLibrary)  { 
        this.__$_LIB_HTML_DART2JS = __$value;
    }

    private static __$_LIB_HTML_DARTIUM : _MockSdkLibrary;
    static get _LIB_HTML_DARTIUM() : _MockSdkLibrary { 
        if (this.__$_LIB_HTML_DARTIUM===undefined) {
            this.__$_LIB_HTML_DARTIUM = new _MockSdkLibrary('dart:html',`${properties.sdkRoot}/lib/html/dartium/html_dartium.dart`,'library dart.dom.html;\n\nfinal HtmlDocument document;\n\nabstract class Element {}\n\nabstract class HtmlDocument {\n  Element query(String relativeSelectors) => null;\n}\n\nabstract class HtmlElement extends Element {}\n\nabstract class AnchorElement extends HtmlElement {}\nabstract class BodyElement extends HtmlElement {}\nabstract class ButtonElement extends HtmlElement {}\nabstract class DivElement extends HtmlElement {}\nabstract class InputElement extends HtmlElement {}\nabstract class SelectElement extends HtmlElement {}\n\n\nabstract class CanvasElement extends HtmlElement {\n  Object getContext(String contextId, [Map attributes]);\n  CanvasRenderingContext2D get context2D;\n}\n\nabstract class class CanvasRenderingContext2D {}\n\nElement query(String relativeSelectors) => null;\n');
        }
        return this.__$_LIB_HTML_DARTIUM;
    }
    static set _LIB_HTML_DARTIUM(__$value : _MockSdkLibrary)  { 
        this.__$_LIB_HTML_DARTIUM = __$value;
    }

    private static __$_LIB_INTERCEPTORS : _MockSdkLibrary;
    static get _LIB_INTERCEPTORS() : _MockSdkLibrary { 
        if (this.__$_LIB_INTERCEPTORS===undefined) {
            this.__$_LIB_INTERCEPTORS = new _MockSdkLibrary('dart:_interceptors',`${properties.sdkRoot}/lib/_internal/js_runtime/lib/interceptors.dart`,'library dart._interceptors;\n');
        }
        return this.__$_LIB_INTERCEPTORS;
    }
    static set _LIB_INTERCEPTORS(__$value : _MockSdkLibrary)  { 
        this.__$_LIB_INTERCEPTORS = __$value;
    }

    private static __$_LIB_MATH : _MockSdkLibrary;
    static get _LIB_MATH() : _MockSdkLibrary { 
        if (this.__$_LIB_MATH===undefined) {
            this.__$_LIB_MATH = new _MockSdkLibrary('dart:math',`${properties.sdkRoot}/lib/math/math.dart`,'library dart.math;\n\nconst double E = 2.718281828459045;\nconst double PI = 3.1415926535897932;\nconst double LN10 =  2.302585092994046;\n\nT min<T extends num>(T a, T b) => null;\nT max<T extends num>(T a, T b) => null;\n\nexternal double cos(num radians);\nexternal double sin(num radians);\nexternal double sqrt(num radians);\nclass Random {\n  bool nextBool() => true;\n  double nextDouble() => 2.0;\n  int nextInt() => 1;\n}\n');
        }
        return this.__$_LIB_MATH;
    }
    static set _LIB_MATH(__$value : _MockSdkLibrary)  { 
        this.__$_LIB_MATH = __$value;
    }

    private static __$_LIBRARIES : core.DartList<any>;
    static get _LIBRARIES() : core.DartList<any> { 
        if (this.__$_LIBRARIES===undefined) {
            this.__$_LIBRARIES = new core.DartList.literal(properties._LIB_CORE,properties._LIB_ASYNC,properties._LIB_COLLECTION,properties._LIB_CONVERT,properties._LIB_FOREIGN_HELPER,properties._LIB_MATH,properties._LIB_HTML_DART2JS,properties._LIB_HTML_DARTIUM,properties._LIB_INTERCEPTORS);
        }
        return this.__$_LIBRARIES;
    }
    static set _LIBRARIES(__$value : core.DartList<any>)  { 
        this.__$_LIBRARIES = __$value;
    }

}
