/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/summary_sdk.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export namespace SummaryBasedDartSdk {
    export type Constructors = 'SummaryBasedDartSdk' | 'fromBundle';
    export type Interface = Omit<SummaryBasedDartSdk, Constructors>;
}
@DartClass
@Implements(any)
export class SummaryBasedDartSdk implements any.Interface {
    strongMode : boolean;

    _dataStore : any;

    _uriResolver : any;

    _bundle : any;

    resourceProvider : any;

    _analysisContext : any;

    constructor(summaryPath : string,strongMode : boolean,_namedArguments? : {resourceProvider? : any}) {
    }
    @defaultConstructor
    SummaryBasedDartSdk(summaryPath : string,strongMode : boolean,_namedArguments? : {resourceProvider? : any}) {
        let {resourceProvider} = Object.assign({
        }, _namedArguments );
        this.strongMode = strongMode;
        this.resourceProvider = resourceProvider;
        this._dataStore = new bare.createInstance(any,null,new core.DartList.literal<string>(summaryPath),{
            resourceProvider : this.resourceProvider});
        this._uriResolver = new bare.createInstance(any,null,this.resourceProvider,this._dataStore);
        this._bundle = this._dataStore.bundles.single;
    }
    @namedConstructor
    fromBundle(strongMode : boolean,bundle : any,_namedArguments? : {resourceProvider? : any}) {
        let {resourceProvider} = Object.assign({
        }, _namedArguments );
        this.strongMode = strongMode;
        this.resourceProvider = resourceProvider;
        this._dataStore = new bare.createInstance(any,null,new core.DartList.literal(),{
            resourceProvider : this.resourceProvider});
        this._dataStore.addBundle('dart_sdk.sum',bundle);
        this._uriResolver = new bare.createInstance(any,null,this.resourceProvider,this._dataStore);
        this._bundle = bundle;
    }
    static fromBundle : new(strongMode : boolean,bundle : any,_namedArguments? : {resourceProvider? : any}) => SummaryBasedDartSdk;

    get bundle() : any {
        return this._bundle;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get context() : any {
        if (op(Op.EQUALS,this._analysisContext,null)) {
            let analysisOptions : any = ((_) : any =>  {
                {
                    _.strongMode = this.strongMode;
                    return _;
                }
            })(new bare.createInstance(any,null));
            this._analysisContext = new bare.createInstance(any,null,analysisOptions);
            let factory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this)),null,this.resourceProvider);
            this._analysisContext.sourceFactory = factory;
            let dataStore : any = new bare.createInstance(any,null,new core.DartList.literal(),{
                resourceProvider : this.resourceProvider});
            dataStore.addBundle(null,this._bundle);
            this._analysisContext.resultProvider = new bare.createInstance(any,null,this._analysisContext,dataStore);
        }
        return this._analysisContext;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sdkLibraries() : core.DartList<any> {
        throw new core.UnimplementedError();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sdkVersion() : string {
        throw new core.UnimplementedError();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uris() : core.DartList<string> {
        throw new core.UnimplementedError();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fromFileUri(uri : lib3.Uri) : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLinkedBundle() : any {
        return this._bundle;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getSdkLibrary(uri : string) : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mapDartUri(uriStr : string) : any {
        let uri : lib3.Uri = lib3.Uri.parse(uriStr);
        return this._uriResolver.resolveAbsolute(uri);
    }
}

export namespace SummaryTypeProvider {
    export type Constructors = 'SummaryTypeProvider';
    export type Interface = Omit<SummaryTypeProvider, Constructors>;
}
@DartClass
export class SummaryTypeProvider extends any {
    _coreLibrary : any;

    _asyncLibrary : any;

    _boolType : any;

    _deprecatedType : any;

    _doubleType : any;

    _functionType : any;

    _futureDynamicType : any;

    _futureNullType : any;

    _futureOrNullType : any;

    _futureOrType : any;

    _futureType : any;

    _intType : any;

    _iterableDynamicType : any;

    _iterableType : any;

    _listType : any;

    _mapType : any;

    _nullObject : any;

    _nullType : any;

    _numType : any;

    _objectType : any;

    _stackTraceType : any;

    _streamDynamicType : any;

    _streamType : any;

    _stringType : any;

    _symbolType : any;

    _typeType : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get boolType() : any {
        /* TODO (AssertStatementImpl) : assert (_coreLibrary != null); */;
        this._boolType = ( this._boolType ) || ( this._getType(this._coreLibrary,"bool") );
        return this._boolType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bottomType() : any {
        return BottomTypeImpl.instance;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get deprecatedType() : any {
        /* TODO (AssertStatementImpl) : assert (_coreLibrary != null); */;
        this._deprecatedType = ( this._deprecatedType ) || ( this._getType(this._coreLibrary,"Deprecated") );
        return this._deprecatedType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get doubleType() : any {
        /* TODO (AssertStatementImpl) : assert (_coreLibrary != null); */;
        this._doubleType = ( this._doubleType ) || ( this._getType(this._coreLibrary,"double") );
        return this._doubleType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dynamicType() : any {
        return DynamicTypeImpl.instance;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get functionType() : any {
        /* TODO (AssertStatementImpl) : assert (_coreLibrary != null); */;
        this._functionType = ( this._functionType ) || ( this._getType(this._coreLibrary,"Function") );
        return this._functionType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureDynamicType() : any {
        /* TODO (AssertStatementImpl) : assert (_asyncLibrary != null); */;
        this._futureDynamicType = ( this._futureDynamicType ) || ( this.futureType.instantiate(new core.DartList.literal<any>(this.dynamicType)) );
        return this._futureDynamicType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureNullType() : any {
        /* TODO (AssertStatementImpl) : assert (_asyncLibrary != null); */;
        this._futureNullType = ( this._futureNullType ) || ( this.futureType.instantiate(new core.DartList.literal<any>(this.nullType)) );
        return this._futureNullType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureOrNullType() : any {
        /* TODO (AssertStatementImpl) : assert (_asyncLibrary != null); */;
        this._futureOrNullType = ( this._futureOrNullType ) || ( this.futureOrType.instantiate(new core.DartList.literal<any>(this.nullType)) );
        return this._futureOrNullType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureOrType() : any {
        /* TODO (AssertStatementImpl) : assert (_asyncLibrary != null); */;
        try {
            this._futureOrType = ( this._futureOrType ) || ( this._getType(this._asyncLibrary,"FutureOr") );
        } catch (__error__) {

            if (is(__error__,core.StateError)){
                this._futureOrType = TypeProviderImpl.createPlaceholderFutureOr(this.futureType,this.objectType);
            }
        }
        return this._futureOrType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureType() : any {
        /* TODO (AssertStatementImpl) : assert (_asyncLibrary != null); */;
        this._futureType = ( this._futureType ) || ( this._getType(this._asyncLibrary,"Future") );
        return this._futureType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get intType() : any {
        /* TODO (AssertStatementImpl) : assert (_coreLibrary != null); */;
        this._intType = ( this._intType ) || ( this._getType(this._coreLibrary,"int") );
        return this._intType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get iterableDynamicType() : any {
        /* TODO (AssertStatementImpl) : assert (_coreLibrary != null); */;
        this._iterableDynamicType = ( this._iterableDynamicType ) || ( this.iterableType.instantiate(new core.DartList.literal<any>(this.dynamicType)) );
        return this._iterableDynamicType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get iterableType() : any {
        /* TODO (AssertStatementImpl) : assert (_coreLibrary != null); */;
        this._iterableType = ( this._iterableType ) || ( this._getType(this._coreLibrary,"Iterable") );
        return this._iterableType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get listType() : any {
        /* TODO (AssertStatementImpl) : assert (_coreLibrary != null); */;
        this._listType = ( this._listType ) || ( this._getType(this._coreLibrary,"List") );
        return this._listType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get mapType() : any {
        /* TODO (AssertStatementImpl) : assert (_coreLibrary != null); */;
        this._mapType = ( this._mapType ) || ( this._getType(this._coreLibrary,"Map") );
        return this._mapType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nullObject() : any {
        if (op(Op.EQUALS,this._nullObject,null)) {
            this._nullObject = new bare.createInstance(any,null,this.nullType,NullState.NULL_STATE);
        }
        return this._nullObject;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nullType() : any {
        /* TODO (AssertStatementImpl) : assert (_coreLibrary != null); */;
        this._nullType = ( this._nullType ) || ( this._getType(this._coreLibrary,"Null") );
        return this._nullType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get numType() : any {
        /* TODO (AssertStatementImpl) : assert (_coreLibrary != null); */;
        this._numType = ( this._numType ) || ( this._getType(this._coreLibrary,"num") );
        return this._numType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get objectType() : any {
        /* TODO (AssertStatementImpl) : assert (_coreLibrary != null); */;
        this._objectType = ( this._objectType ) || ( this._getType(this._coreLibrary,"Object") );
        return this._objectType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get stackTraceType() : any {
        /* TODO (AssertStatementImpl) : assert (_coreLibrary != null); */;
        this._stackTraceType = ( this._stackTraceType ) || ( this._getType(this._coreLibrary,"StackTrace") );
        return this._stackTraceType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get streamDynamicType() : any {
        /* TODO (AssertStatementImpl) : assert (_asyncLibrary != null); */;
        this._streamDynamicType = ( this._streamDynamicType ) || ( this.streamType.instantiate(new core.DartList.literal<any>(this.dynamicType)) );
        return this._streamDynamicType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get streamType() : any {
        /* TODO (AssertStatementImpl) : assert (_asyncLibrary != null); */;
        this._streamType = ( this._streamType ) || ( this._getType(this._asyncLibrary,"Stream") );
        return this._streamType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get stringType() : any {
        /* TODO (AssertStatementImpl) : assert (_coreLibrary != null); */;
        this._stringType = ( this._stringType ) || ( this._getType(this._coreLibrary,"String") );
        return this._stringType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get symbolType() : any {
        /* TODO (AssertStatementImpl) : assert (_coreLibrary != null); */;
        this._symbolType = ( this._symbolType ) || ( this._getType(this._coreLibrary,"Symbol") );
        return this._symbolType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeType() : any {
        /* TODO (AssertStatementImpl) : assert (_coreLibrary != null); */;
        this._typeType = ( this._typeType ) || ( this._getType(this._coreLibrary,"Type") );
        return this._typeType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get undefinedType() : any {
        return UndefinedTypeImpl.instance;
    }
    initializeAsync(library : any) : void {
        /* TODO (AssertStatementImpl) : assert (_coreLibrary != null); */;
        /* TODO (AssertStatementImpl) : assert (_asyncLibrary == null); */;
        this._asyncLibrary = library;
    }
    initializeCore(library : any) : void {
        /* TODO (AssertStatementImpl) : assert (_coreLibrary == null); */;
        /* TODO (AssertStatementImpl) : assert (_asyncLibrary == null); */;
        this._coreLibrary = library;
    }
    _getType(library : any,name : string) : any {
        let element : any = library.getType(name);
        if (op(Op.EQUALS,element,null)) {
            throw new core.StateError(`No definition of type ${name}`);
        }
        return (element as any).type;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SummaryTypeProvider() {
    }
}

export class properties {
}
