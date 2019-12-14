/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/analysis_context_factory.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "@dart2ts/dart/uri";

export namespace AnalysisContextFactory {
    export type Constructors = 'AnalysisContextFactory';
    export type Interface = Omit<AnalysisContextFactory, Constructors>;
}
@DartClass
export class AnalysisContextFactory {
    private static __$_DART_MATH : string;
    static get _DART_MATH() : string { 
        if (this.__$_DART_MATH===undefined) {
            this.__$_DART_MATH = "dart:math";
        }
        return this.__$_DART_MATH;
    }
    static set _DART_MATH(__$value : string)  { 
        this.__$_DART_MATH = __$value;
    }

    private static __$_DART_INTERCEPTORS : string;
    static get _DART_INTERCEPTORS() : string { 
        if (this.__$_DART_INTERCEPTORS===undefined) {
            this.__$_DART_INTERCEPTORS = "dart:_interceptors";
        }
        return this.__$_DART_INTERCEPTORS;
    }
    static set _DART_INTERCEPTORS(__$value : string)  { 
        this.__$_DART_INTERCEPTORS = __$value;
    }

    private static __$_DART_JS_HELPER : string;
    static get _DART_JS_HELPER() : string { 
        if (this.__$_DART_JS_HELPER===undefined) {
            this.__$_DART_JS_HELPER = "dart:_js_helper";
        }
        return this.__$_DART_JS_HELPER;
    }
    static set _DART_JS_HELPER(__$value : string)  { 
        this.__$_DART_JS_HELPER = __$value;
    }

    static contextWithCore(_namedArguments? : {resourceProvider? : any}) : any {
        let {resourceProvider} = Object.assign({
        }, _namedArguments );
        let context : AnalysisContextForTests = new AnalysisContextForTests();
        return AnalysisContextFactory.initContextWithCore(context,null,resourceProvider);
    }
    static contextWithCoreAndOptions(options : any,_namedArguments? : {resourceProvider? : any}) : any {
        let {resourceProvider} = Object.assign({
        }, _namedArguments );
        let context : AnalysisContextForTests = new AnalysisContextForTests();
        context._internalSetAnalysisOptions(options);
        return AnalysisContextFactory.initContextWithCore(context,null,resourceProvider);
    }
    static contextWithCoreAndPackages(packages : core.DartMap<string,string>,_namedArguments? : {resourceProvider? : any}) : any {
        let {resourceProvider} = Object.assign({
        }, _namedArguments );
        let context : AnalysisContextForTests = new AnalysisContextForTests();
        return AnalysisContextFactory.initContextWithCore(context,new TestPackageUriResolver(packages),resourceProvider);
    }
    static initContextWithCore(context : any,contributedResolver? : any,resourceProvider? : any) : any {
        resourceProvider = ( resourceProvider ) || ( PhysicalResourceProvider.INSTANCE );
        let sdk : any = new _AnalysisContextFactory_initContextWithCore(resourceProvider,'/fake/sdk');
        let resolvers : core.DartList<any> = new core.DartList.literal<any>(new bare.createInstance(any,null,sdk),new bare.createInstance(any,null,resourceProvider));
        if (contributedResolver != null) {
            resolvers.add(contributedResolver);
        }
        let sourceFactory : any = new bare.createInstance(any,null,resolvers);
        context.sourceFactory = sourceFactory;
        let coreContext : any = sdk.context;
        (coreContext.analysisOptions as any).strongMode = context.analysisOptions.strongMode;
        let provider : any = new bare.createInstance(any,null);
        let coreUnit : any = new bare.createInstance(any,null,"core.dart");
        let coreSource : any = sourceFactory.forUri(DartSdk.DART_CORE);
        coreContext.setContents(coreSource,"");
        coreUnit.librarySource = coreUnit.source = coreSource;
        let overrideClassElement : any = ElementFactory.classElement2("_Override");
        let proxyClassElement : any = ElementFactory.classElement2("_Proxy");
        proxyClassElement.constructors = new core.DartList.literal<any>(((_) : any =>  {
            {
                _.isCycleFree = true;
                _.constantInitializers = new core.DartList.literal<any>();
                return _;
            }
        })(ElementFactory.constructorElement(proxyClassElement,'',true)));
        let objectClassElement : any = provider.objectType.element;
        coreUnit.types = new core.DartList.literal<any>(provider.boolType.element,provider.deprecatedType.element,provider.doubleType.element,provider.functionType.element,provider.intType.element,provider.iterableType.element,provider.iteratorType.element,provider.listType.element,provider.mapType.element,provider.nullType.element,provider.numType.element,objectClassElement,overrideClassElement,proxyClassElement,provider.stackTraceType.element,provider.stringType.element,provider.symbolType.element,provider.typeType.element);
        coreUnit.functions = new core.DartList.literal<any>(ElementFactory.functionElement3("identical",provider.boolType,new core.DartList.literal<any>(objectClassElement,objectClassElement),null),ElementFactory.functionElement3("print",VoidTypeImpl.instance,new core.DartList.literal<any>(objectClassElement),null));
        let proxyTopLevelVariableElt : any = ElementFactory.topLevelVariableElement3("proxy",true,false,proxyClassElement.type);
        let deprecatedTopLevelVariableElt : any = ElementFactory.topLevelVariableElement3("deprecated",true,false,provider.deprecatedType);
        let overrideTopLevelVariableElt : any = ElementFactory.topLevelVariableElement3("override",true,false,overrideClassElement.type);
        {
            let deprecatedElement : any = provider.deprecatedType.element;
            let initializer : any = AstTestFactory.instanceCreationExpression2(Keyword.CONST,AstTestFactory.typeName(deprecatedElement),new core.DartList.literal(AstTestFactory.string2('next release')));
            let constructor : any = deprecatedElement.constructors.single;
            initializer.staticElement = constructor;
            initializer.constructorName.staticElement = constructor;
            deprecatedTopLevelVariableElt.constantInitializer = initializer;
        }
        coreUnit.accessors = new core.DartList.literal<any>(deprecatedTopLevelVariableElt.getter,overrideTopLevelVariableElt.getter,proxyTopLevelVariableElt.getter);
        coreUnit.topLevelVariables = new core.DartList.literal<any>(deprecatedTopLevelVariableElt,overrideTopLevelVariableElt,proxyTopLevelVariableElt);
        let coreLibrary : any = new bare.createInstance(any,null,coreContext,AstTestFactory.libraryIdentifier2(new core.DartList.literal("dart","core")));
        coreLibrary.definingCompilationUnit = coreUnit;
        let asyncLibrary : any = new bare.createInstance(any,null,coreContext,AstTestFactory.libraryIdentifier2(new core.DartList.literal("dart","async")));
        let asyncUnit : any = new bare.createInstance(any,null,"async.dart");
        let asyncSource : any = sourceFactory.forUri(DartSdk.DART_ASYNC);
        coreContext.setContents(asyncSource,"");
        asyncUnit.librarySource = asyncUnit.source = asyncSource;
        asyncLibrary.definingCompilationUnit = asyncUnit;
        let futureElement : any = ElementFactory.classElement2("Future",new core.DartList.literal("T"));
        let futureOrElement : any = ElementFactory.classElement2("FutureOr",new core.DartList.literal("T"));
        futureElement.enclosingElement = asyncUnit;
        let futureConstructor : any = ElementFactory.constructorElement2(futureElement,"value");
        futureConstructor.parameters = new core.DartList.literal<any>(ElementFactory.positionalParameter2("value",provider.dynamicType));
        futureConstructor.factory = true;
        futureElement.constructors = new core.DartList.literal<any>(futureConstructor);
        let futureThenR : any = DynamicElementImpl.instance;
        let onValueReturnType : any = DynamicTypeImpl.instance;
        if (context.analysisOptions.strongMode) {
            futureThenR = ElementFactory.typeParameterWithType('R');
            onValueReturnType = futureOrElement.type.instantiate(new core.DartList.literal(futureThenR.type));
        }
        let thenOnValue : any = ElementFactory.functionElement3('onValue',onValueReturnType,new core.DartList.literal(op(Op.INDEX,futureElement.typeParameters,0)),null);
        thenOnValue.isSynthetic = true;
        let futureRType : any = futureElement.type.instantiate(new core.DartList.literal(futureThenR.type));
        let thenMethod : any = ElementFactory.methodElementWithParameters(futureElement,"then",futureRType,new core.DartList.literal(ElementFactory.requiredParameter2("onValue",thenOnValue.type),ElementFactory.namedParameter2("onError",provider.functionType)));
        if (!futureThenR.type.isDynamic) {
            thenMethod.typeParameters = new core.DartList.literal<any>(futureThenR);
        }
        thenOnValue.enclosingElement = thenMethod;
        thenOnValue.type = new bare.createInstance(any,null,thenOnValue);
        (op(Op.INDEX,thenMethod.parameters,0) as any).type = thenOnValue.type;
        thenMethod.type = new bare.createInstance(any,null,thenMethod);
        futureElement.methods = new core.DartList.literal<any>(thenMethod);
        let completerElement : any = ElementFactory.classElement2("Completer",new core.DartList.literal("T"));
        let completerConstructor : any = ElementFactory.constructorElement2(completerElement,null);
        completerElement.constructors = new core.DartList.literal<any>(completerConstructor);
        let streamSubscriptionElement : any = ElementFactory.classElement2("StreamSubscription",new core.DartList.literal("T"));
        let streamElement : any = ElementFactory.classElement2("Stream",new core.DartList.literal("T"));
        streamElement.abstract = true;
        streamElement.constructors = new core.DartList.literal<any>(ElementFactory.constructorElement2(streamElement,null));
        let returnType : any = streamSubscriptionElement.type.instantiate(streamElement.type.typeArguments);
        let listenOnData : any = ElementFactory.functionElement3('onData',VoidTypeImpl.instance,new core.DartList.literal<any>(op(Op.INDEX,streamElement.typeParameters,0)),null);
        listenOnData.isSynthetic = true;
        let parameterTypes : core.DartList<any> = new core.DartList.literal<any>(listenOnData.type);
        let listenMethod : any = ElementFactory.methodElement('listen',returnType,parameterTypes);
        streamElement.methods = new core.DartList.literal<any>(listenMethod);
        listenMethod.type = new bare.createInstance(any,null,listenMethod);
        let listenParamFunction : any = parameterTypes[0].element;
        listenParamFunction.enclosingElement = listenMethod;
        listenParamFunction.type = new bare.createInstance(any,null,listenParamFunction);
        let listenParam : any = op(Op.INDEX,listenMethod.parameters,0);
        listenParam.type = listenParamFunction.type;
        asyncUnit.types = new core.DartList.literal<any>(completerElement,futureElement,futureOrElement,streamElement,streamSubscriptionElement);
        let htmlUnit : any = new bare.createInstance(any,null,"html_dartium.dart");
        let htmlSource : any = sourceFactory.forUri(DartSdk.DART_HTML);
        coreContext.setContents(htmlSource,"");
        htmlUnit.librarySource = htmlUnit.source = htmlSource;
        let elementElement : any = ElementFactory.classElement2("Element");
        let elementType : any = elementElement.type;
        let canvasElement : any = ElementFactory.classElement("CanvasElement",elementType);
        let contextElement : any = ElementFactory.classElement2("CanvasRenderingContext");
        let contextElementType : any = contextElement.type;
        let context2dElement : any = ElementFactory.classElement("CanvasRenderingContext2D",contextElementType);
        canvasElement.methods = new core.DartList.literal<any>(ElementFactory.methodElement("getContext",contextElementType,new core.DartList.literal(provider.stringType)));
        canvasElement.accessors = new core.DartList.literal<any>(ElementFactory.getterElement("context2D",false,context2dElement.type));
        canvasElement.fields = canvasElement.accessors.map((accessor : any) =>  {
            return accessor.variable;
        }).toList();
        let documentElement : any = ElementFactory.classElement("Document",elementType);
        let htmlDocumentElement : any = ElementFactory.classElement("HtmlDocument",documentElement.type);
        htmlDocumentElement.methods = new core.DartList.literal<any>(ElementFactory.methodElement("query",elementType,new core.DartList.literal<any>(provider.stringType)));
        htmlUnit.types = new core.DartList.literal<any>(ElementFactory.classElement("AnchorElement",elementType),ElementFactory.classElement("BodyElement",elementType),ElementFactory.classElement("ButtonElement",elementType),canvasElement,contextElement,context2dElement,ElementFactory.classElement("DivElement",elementType),documentElement,elementElement,htmlDocumentElement,ElementFactory.classElement("InputElement",elementType),ElementFactory.classElement("SelectElement",elementType));
        htmlUnit.functions = new core.DartList.literal<any>(ElementFactory.functionElement3("query",elementElement.type,new core.DartList.literal<any>(provider.stringType.element),ClassElement.EMPTY_LIST));
        let document : any = ElementFactory.topLevelVariableElement3("document",false,true,htmlDocumentElement.type);
        htmlUnit.topLevelVariables = new core.DartList.literal<any>(document);
        htmlUnit.accessors = new core.DartList.literal<any>(document.getter);
        let htmlLibrary : any = new bare.createInstance(any,null,coreContext,AstTestFactory.libraryIdentifier2(new core.DartList.literal("dart","dom","html")));
        htmlLibrary.definingCompilationUnit = htmlUnit;
        let mathUnit : any = new bare.createInstance(any,null,"math.dart");
        let mathSource : any = sourceFactory.forUri(AnalysisContextFactory._DART_MATH);
        coreContext.setContents(mathSource,"");
        mathUnit.librarySource = mathUnit.source = mathSource;
        let cosElement : any = ElementFactory.functionElement3("cos",provider.doubleType,new core.DartList.literal<any>(provider.numType.element),ClassElement.EMPTY_LIST);
        let ln10Element : any = ElementFactory.topLevelVariableElement3("LN10",true,false,provider.doubleType);
        let maxT : any = ElementFactory.typeParameterWithType('T',provider.numType);
        let maxElement : any = ElementFactory.functionElement3("max",maxT.type,new core.DartList.literal(maxT,maxT),ClassElement.EMPTY_LIST);
        maxElement.typeParameters = new core.DartList.literal(maxT);
        maxElement.type = new bare.createInstance(any,null,maxElement);
        let piElement : any = ElementFactory.topLevelVariableElement3("PI",true,false,provider.doubleType);
        let randomElement : any = ElementFactory.classElement2("Random");
        randomElement.abstract = true;
        let randomConstructor : any = ElementFactory.constructorElement2(randomElement,null);
        randomConstructor.factory = true;
        let seedParam : any = new bare.createInstance(any,null,"seed",0);
        seedParam.parameterKind = ParameterKind.POSITIONAL;
        seedParam.type = provider.intType;
        randomConstructor.parameters = new core.DartList.literal<any>(seedParam);
        randomElement.constructors = new core.DartList.literal<any>(randomConstructor);
        let sinElement : any = ElementFactory.functionElement3("sin",provider.doubleType,new core.DartList.literal<any>(provider.numType.element),ClassElement.EMPTY_LIST);
        let sqrtElement : any = ElementFactory.functionElement3("sqrt",provider.doubleType,new core.DartList.literal<any>(provider.numType.element),ClassElement.EMPTY_LIST);
        mathUnit.accessors = new core.DartList.literal<any>(ln10Element.getter,piElement.getter);
        mathUnit.functions = new core.DartList.literal<any>(cosElement,maxElement,sinElement,sqrtElement);
        mathUnit.topLevelVariables = new core.DartList.literal<any>(ln10Element,piElement);
        mathUnit.types = new core.DartList.literal<any>(randomElement);
        let mathLibrary : any = new bare.createInstance(any,null,coreContext,AstTestFactory.libraryIdentifier2(new core.DartList.literal("dart","math")));
        mathLibrary.definingCompilationUnit = mathUnit;
        let source : any = sourceFactory.forUri(AnalysisContextFactory._DART_INTERCEPTORS);
        coreContext.setContents(source,"");
        source = sourceFactory.forUri(AnalysisContextFactory._DART_JS_HELPER);
        coreContext.setContents(source,"");
        let elementMap : core.DartHashMap<any,any> = new core.DartHashMap<any,any>();
        op(Op.INDEX_ASSIGN,elementMap,coreSource,coreLibrary);
        if (asyncSource != null) {
            op(Op.INDEX_ASSIGN,elementMap,asyncSource,asyncLibrary);
        }
        op(Op.INDEX_ASSIGN,elementMap,htmlSource,htmlLibrary);
        op(Op.INDEX_ASSIGN,elementMap,mathSource,mathLibrary);
        for(let library of elementMap.values) {
            let namespace : any = new bare.createInstance(any,null).createPublicNamespaceForLibrary(library);
            library.exportNamespace = namespace;
            library.publicNamespace = namespace;
        }
        context.recordLibraryElements(elementMap);
        for(let library of elementMap.values) {
            library.createLoadLibraryFunction(context.typeProvider);
        }
        return context;
    }
    constructor() {
    }
    @defaultConstructor
    AnalysisContextFactory() {
    }
}

export namespace AnalysisContextForTests {
    export type Constructors = 'AnalysisContextForTests';
    export type Interface = Omit<AnalysisContextForTests, Constructors>;
}
@DartClass
export class AnalysisContextForTests extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set analysisOptions(options : any) {
        let currentOptions : any = analysisOptions;
        let needsRecompute : boolean = currentOptions.analyzeFunctionBodiesPredicate != options.analyzeFunctionBodiesPredicate || currentOptions.generateImplicitErrors != options.generateImplicitErrors || currentOptions.generateSdkErrors != options.generateSdkErrors || currentOptions.dart2jsHint != options.dart2jsHint || (currentOptions.hint && !options.hint) || currentOptions.preserveComments != options.preserveComments || currentOptions.enableStrictCallChecks != options.enableStrictCallChecks;
        if (needsRecompute) {
            fail("Cannot set options that cause the sources to be reanalyzed in a test context");
        }
        super.analysisOptions = options;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    exists(source : any) : boolean {
        return super.exists(source) || sourceFactory.dartSdk.context.exists(source);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getContents(source : any) : any {
        if (source.isInSystemLibrary) {
            return sourceFactory.dartSdk.context.getContents(source);
        }
        return super.getContents(source);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getModificationStamp(source : any) : number {
        if (source.isInSystemLibrary) {
            return sourceFactory.dartSdk.context.getModificationStamp(source);
        }
        return super.getModificationStamp(source);
    }
    _internalSetAnalysisOptions(options : any) : void {
        super.analysisOptions = options;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisContextForTests() {
    }
}

export namespace AnalysisContextHelper {
    export type Constructors = 'AnalysisContextHelper';
    export type Interface = Omit<AnalysisContextHelper, Constructors>;
}
@DartClass
export class AnalysisContextHelper {
    resourceProvider : any;

    context : any;

    constructor(options? : any,provider? : any) {
    }
    @defaultConstructor
    AnalysisContextHelper(options? : any,provider? : any) {
        this.resourceProvider = (provider || new bare.createInstance(any,null));
        this.context = AnalysisContextFactory.contextWithCoreAndOptions((options || new bare.createInstance(any,null)),{
            resourceProvider : this.resourceProvider});
    }
    addSource(path : string,code : string) : any {
        let source : any = this.resourceProvider.getFile(this.resourceProvider.convertPath(path)).createSource();
        if (new core.DartString(path).endsWith(".dart") || new core.DartString(path).endsWith(".html")) {
            let changeSet : any = new bare.createInstance(any,null);
            changeSet.addedSource(source);
            this.context.applyChanges(changeSet);
        }
        this.context.setContents(source,code);
        return source;
    }
    getDefiningUnitElement(source : any) : any {
        return this.context.getCompilationUnitElement(source,source);
    }
    resolveDefiningUnit(source : any) : any {
        let libraryElement : any = this.context.computeLibraryElement(source);
        return this.context.resolveCompilationUnit(source,libraryElement);
    }
    runTasks() : void {
        let result : any = this.context.performAnalysisTask();
        while (result.changeNotices != null){
            result = this.context.performAnalysisTask();
        }
    }
}

export namespace TestPackageUriResolver {
    export type Constructors = 'TestPackageUriResolver';
    export type Interface = Omit<TestPackageUriResolver, Constructors>;
}
@DartClass
export class TestPackageUriResolver extends any {
    sourceMap : core.DartMap<string,any>;

    constructor(map : core.DartMap<string,string>) {
    }
    @defaultConstructor
    TestPackageUriResolver(map : core.DartMap<string,string>) {
        this.sourceMap = new core.DartHashMap<string,any>();
        map.forEach((uri : string,contents : string) =>  {
            this.sourceMap.set(uri,new bare.createInstance(any,null,contents,'/test_pkg_source.dart'));
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib4.Uri,actualUri? : lib4.Uri) : any {
        let uriString : string = uri.toString();
        return this.sourceMap.get(uriString);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    restoreAbsolute(source : any) : lib4.Uri {
        return throw new core.UnimplementedError();
    }
}

export namespace _AnalysisContextFactory_initContextWithCore {
    export type Constructors = '_AnalysisContextFactory_initContextWithCore';
    export type Interface = Omit<_AnalysisContextFactory_initContextWithCore, Constructors>;
}
@DartClass
export class _AnalysisContextFactory_initContextWithCore extends any {
    constructor(resourceProvider : any,sdkPath : string) {
    }
    @defaultConstructor
    _AnalysisContextFactory_initContextWithCore(resourceProvider : any,sdkPath : string) {
        super.DartObject(resourceProvider,resourceProvider.getFolder(sdkPath));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initialLibraryMap(useDart2jsPaths : boolean) : any {
        let map : any = new bare.createInstance(any,null);
        this._addLibrary(map,DartSdk.DART_ASYNC,false,"async.dart");
        this._addLibrary(map,DartSdk.DART_CORE,false,"core.dart");
        this._addLibrary(map,DartSdk.DART_HTML,false,"html_dartium.dart");
        this._addLibrary(map,AnalysisContextFactory._DART_MATH,false,"math.dart");
        this._addLibrary(map,AnalysisContextFactory._DART_INTERCEPTORS,true,"_interceptors.dart");
        this._addLibrary(map,AnalysisContextFactory._DART_JS_HELPER,true,"_js_helper.dart");
        return map;
    }
    _addLibrary(map : any,uri : string,isInternal : boolean,path : string) : void {
        let library : any = new bare.createInstance(any,null,uri);
        if (isInternal) {
            library.category = "Internal";
        }
        library.path = path;
        map.setLibrary(uri,library);
    }
}

export class properties {
}
