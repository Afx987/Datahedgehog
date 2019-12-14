/** Library asset:datahedgehog_monitor/lib/lib/_internal/js_runtime/lib/shared/embedded_names.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export enum JsGetName {
    GETTER_PREFIX,
    SETTER_PREFIX,
    CALL_PREFIX,
    CALL_PREFIX0,
    CALL_PREFIX1,
    CALL_PREFIX2,
    CALL_PREFIX3,
    CALL_PREFIX4,
    CALL_PREFIX5,
    CALL_CATCH_ALL,
    REFLECTABLE,
    CLASS_DESCRIPTOR_PROPERTY,
    REQUIRED_PARAMETER_PROPERTY,
    DEFAULT_VALUES_PROPERTY,
    CALL_NAME_PROPERTY,
    DEFERRED_ACTION_PROPERTY,
    OPERATOR_AS_PREFIX,
    SIGNATURE_NAME,
    RTI_NAME,
    TYPEDEF_TAG,
    FUNCTION_TYPE_TAG,
    FUNCTION_TYPE_VOID_RETURN_TAG,
    FUNCTION_TYPE_RETURN_TYPE_TAG,
    FUNCTION_TYPE_REQUIRED_PARAMETERS_TAG,
    FUNCTION_TYPE_OPTIONAL_PARAMETERS_TAG,
    FUNCTION_TYPE_NAMED_PARAMETERS_TAG,
    IS_INDEXABLE_FIELD_NAME,
    NULL_CLASS_TYPE_NAME,
    OBJECT_CLASS_TYPE_NAME,
    FUNCTION_CLASS_TYPE_NAME
}

export enum JsBuiltin {
    dartObjectConstructor,
    isCheckPropertyToJsConstructorName,
    isFunctionType,
    createFunctionTypeRti,
    rawRtiToJsConstructorName,
    rawRuntimeType,
    isSubtype,
    isGivenTypeRti,
    getMetadata,
    getType,
    createDartClosureFromNameOfStaticFunction
}

export class properties {
    private static __$ISOLATE_TAG;
    static get ISOLATE_TAG() { 
        if (this.__$ISOLATE_TAG===undefined) {
            this.__$ISOLATE_TAG = 'isolateTag';
        }
        return this.__$ISOLATE_TAG;
    }
    static set ISOLATE_TAG(__$value : any)  { 
        this.__$ISOLATE_TAG = __$value;
    }

    private static __$TYPEDEF_TYPE_PROPERTY_NAME;
    static get TYPEDEF_TYPE_PROPERTY_NAME() { 
        if (this.__$TYPEDEF_TYPE_PROPERTY_NAME===undefined) {
            this.__$TYPEDEF_TYPE_PROPERTY_NAME = "$typedefType";
        }
        return this.__$TYPEDEF_TYPE_PROPERTY_NAME;
    }
    static set TYPEDEF_TYPE_PROPERTY_NAME(__$value : any)  { 
        this.__$TYPEDEF_TYPE_PROPERTY_NAME = __$value;
    }

    private static __$NATIVE_SUPERCLASS_TAG_NAME;
    static get NATIVE_SUPERCLASS_TAG_NAME() { 
        if (this.__$NATIVE_SUPERCLASS_TAG_NAME===undefined) {
            this.__$NATIVE_SUPERCLASS_TAG_NAME = "$nativeSuperclassTag";
        }
        return this.__$NATIVE_SUPERCLASS_TAG_NAME;
    }
    static set NATIVE_SUPERCLASS_TAG_NAME(__$value : any)  { 
        this.__$NATIVE_SUPERCLASS_TAG_NAME = __$value;
    }

    private static __$STATIC_FUNCTION_NAME_PROPERTY_NAME;
    static get STATIC_FUNCTION_NAME_PROPERTY_NAME() { 
        if (this.__$STATIC_FUNCTION_NAME_PROPERTY_NAME===undefined) {
            this.__$STATIC_FUNCTION_NAME_PROPERTY_NAME = '$static_name';
        }
        return this.__$STATIC_FUNCTION_NAME_PROPERTY_NAME;
    }
    static set STATIC_FUNCTION_NAME_PROPERTY_NAME(__$value : any)  { 
        this.__$STATIC_FUNCTION_NAME_PROPERTY_NAME = __$value;
    }

    private static __$METADATA;
    static get METADATA() { 
        if (this.__$METADATA===undefined) {
            this.__$METADATA = 'metadata';
        }
        return this.__$METADATA;
    }
    static set METADATA(__$value : any)  { 
        this.__$METADATA = __$value;
    }

    private static __$TYPES;
    static get TYPES() { 
        if (this.__$TYPES===undefined) {
            this.__$TYPES = 'types';
        }
        return this.__$TYPES;
    }
    static set TYPES(__$value : any)  { 
        this.__$TYPES = __$value;
    }

    private static __$GET_TYPE_FROM_NAME;
    static get GET_TYPE_FROM_NAME() { 
        if (this.__$GET_TYPE_FROM_NAME===undefined) {
            this.__$GET_TYPE_FROM_NAME = 'getTypeFromName';
        }
        return this.__$GET_TYPE_FROM_NAME;
    }
    static set GET_TYPE_FROM_NAME(__$value : any)  { 
        this.__$GET_TYPE_FROM_NAME = __$value;
    }

    private static __$INTERCEPTED_NAMES;
    static get INTERCEPTED_NAMES() { 
        if (this.__$INTERCEPTED_NAMES===undefined) {
            this.__$INTERCEPTED_NAMES = 'interceptedNames';
        }
        return this.__$INTERCEPTED_NAMES;
    }
    static set INTERCEPTED_NAMES(__$value : any)  { 
        this.__$INTERCEPTED_NAMES = __$value;
    }

    private static __$MANGLED_GLOBAL_NAMES;
    static get MANGLED_GLOBAL_NAMES() { 
        if (this.__$MANGLED_GLOBAL_NAMES===undefined) {
            this.__$MANGLED_GLOBAL_NAMES = 'mangledGlobalNames';
        }
        return this.__$MANGLED_GLOBAL_NAMES;
    }
    static set MANGLED_GLOBAL_NAMES(__$value : any)  { 
        this.__$MANGLED_GLOBAL_NAMES = __$value;
    }

    private static __$MANGLED_NAMES;
    static get MANGLED_NAMES() { 
        if (this.__$MANGLED_NAMES===undefined) {
            this.__$MANGLED_NAMES = 'mangledNames';
        }
        return this.__$MANGLED_NAMES;
    }
    static set MANGLED_NAMES(__$value : any)  { 
        this.__$MANGLED_NAMES = __$value;
    }

    private static __$INTERCEPTORS_BY_TAG;
    static get INTERCEPTORS_BY_TAG() { 
        if (this.__$INTERCEPTORS_BY_TAG===undefined) {
            this.__$INTERCEPTORS_BY_TAG = 'interceptorsByTag';
        }
        return this.__$INTERCEPTORS_BY_TAG;
    }
    static set INTERCEPTORS_BY_TAG(__$value : any)  { 
        this.__$INTERCEPTORS_BY_TAG = __$value;
    }

    private static __$LEAF_TAGS;
    static get LEAF_TAGS() { 
        if (this.__$LEAF_TAGS===undefined) {
            this.__$LEAF_TAGS = 'leafTags';
        }
        return this.__$LEAF_TAGS;
    }
    static set LEAF_TAGS(__$value : any)  { 
        this.__$LEAF_TAGS = __$value;
    }

    private static __$GET_ISOLATE_TAG;
    static get GET_ISOLATE_TAG() { 
        if (this.__$GET_ISOLATE_TAG===undefined) {
            this.__$GET_ISOLATE_TAG = 'getIsolateTag';
        }
        return this.__$GET_ISOLATE_TAG;
    }
    static set GET_ISOLATE_TAG(__$value : any)  { 
        this.__$GET_ISOLATE_TAG = __$value;
    }

    private static __$TYPEDEF_PREDICATE_PROPERTY_NAME;
    static get TYPEDEF_PREDICATE_PROPERTY_NAME() { 
        if (this.__$TYPEDEF_PREDICATE_PROPERTY_NAME===undefined) {
            this.__$TYPEDEF_PREDICATE_PROPERTY_NAME = "$$isTypedef";
        }
        return this.__$TYPEDEF_PREDICATE_PROPERTY_NAME;
    }
    static set TYPEDEF_PREDICATE_PROPERTY_NAME(__$value : any)  { 
        this.__$TYPEDEF_PREDICATE_PROPERTY_NAME = __$value;
    }

    private static __$DISPATCH_PROPERTY_NAME;
    static get DISPATCH_PROPERTY_NAME() { 
        if (this.__$DISPATCH_PROPERTY_NAME===undefined) {
            this.__$DISPATCH_PROPERTY_NAME = "dispatchPropertyName";
        }
        return this.__$DISPATCH_PROPERTY_NAME;
    }
    static set DISPATCH_PROPERTY_NAME(__$value : any)  { 
        this.__$DISPATCH_PROPERTY_NAME = __$value;
    }

    private static __$TYPE_TO_INTERCEPTOR_MAP;
    static get TYPE_TO_INTERCEPTOR_MAP() { 
        if (this.__$TYPE_TO_INTERCEPTOR_MAP===undefined) {
            this.__$TYPE_TO_INTERCEPTOR_MAP = "typeToInterceptorMap";
        }
        return this.__$TYPE_TO_INTERCEPTOR_MAP;
    }
    static set TYPE_TO_INTERCEPTOR_MAP(__$value : any)  { 
        this.__$TYPE_TO_INTERCEPTOR_MAP = __$value;
    }

    private static __$CURRENT_SCRIPT;
    static get CURRENT_SCRIPT() { 
        if (this.__$CURRENT_SCRIPT===undefined) {
            this.__$CURRENT_SCRIPT = 'currentScript';
        }
        return this.__$CURRENT_SCRIPT;
    }
    static set CURRENT_SCRIPT(__$value : any)  { 
        this.__$CURRENT_SCRIPT = __$value;
    }

    private static __$CREATE_NEW_ISOLATE;
    static get CREATE_NEW_ISOLATE() { 
        if (this.__$CREATE_NEW_ISOLATE===undefined) {
            this.__$CREATE_NEW_ISOLATE = 'createNewIsolate';
        }
        return this.__$CREATE_NEW_ISOLATE;
    }
    static set CREATE_NEW_ISOLATE(__$value : any)  { 
        this.__$CREATE_NEW_ISOLATE = __$value;
    }

    private static __$CLASS_ID_EXTRACTOR;
    static get CLASS_ID_EXTRACTOR() { 
        if (this.__$CLASS_ID_EXTRACTOR===undefined) {
            this.__$CLASS_ID_EXTRACTOR = 'classIdExtractor';
        }
        return this.__$CLASS_ID_EXTRACTOR;
    }
    static set CLASS_ID_EXTRACTOR(__$value : any)  { 
        this.__$CLASS_ID_EXTRACTOR = __$value;
    }

    private static __$INSTANCE_FROM_CLASS_ID;
    static get INSTANCE_FROM_CLASS_ID() { 
        if (this.__$INSTANCE_FROM_CLASS_ID===undefined) {
            this.__$INSTANCE_FROM_CLASS_ID = "instanceFromClassId";
        }
        return this.__$INSTANCE_FROM_CLASS_ID;
    }
    static set INSTANCE_FROM_CLASS_ID(__$value : any)  { 
        this.__$INSTANCE_FROM_CLASS_ID = __$value;
    }

    private static __$CLASS_FIELDS_EXTRACTOR;
    static get CLASS_FIELDS_EXTRACTOR() { 
        if (this.__$CLASS_FIELDS_EXTRACTOR===undefined) {
            this.__$CLASS_FIELDS_EXTRACTOR = 'classFieldsExtractor';
        }
        return this.__$CLASS_FIELDS_EXTRACTOR;
    }
    static set CLASS_FIELDS_EXTRACTOR(__$value : any)  { 
        this.__$CLASS_FIELDS_EXTRACTOR = __$value;
    }

    private static __$INITIALIZE_EMPTY_INSTANCE;
    static get INITIALIZE_EMPTY_INSTANCE() { 
        if (this.__$INITIALIZE_EMPTY_INSTANCE===undefined) {
            this.__$INITIALIZE_EMPTY_INSTANCE = "initializeEmptyInstance";
        }
        return this.__$INITIALIZE_EMPTY_INSTANCE;
    }
    static set INITIALIZE_EMPTY_INSTANCE(__$value : any)  { 
        this.__$INITIALIZE_EMPTY_INSTANCE = __$value;
    }

    private static __$DEFERRED_LIBRARY_URIS;
    static get DEFERRED_LIBRARY_URIS() { 
        if (this.__$DEFERRED_LIBRARY_URIS===undefined) {
            this.__$DEFERRED_LIBRARY_URIS = 'deferredLibraryUris';
        }
        return this.__$DEFERRED_LIBRARY_URIS;
    }
    static set DEFERRED_LIBRARY_URIS(__$value : any)  { 
        this.__$DEFERRED_LIBRARY_URIS = __$value;
    }

    private static __$DEFERRED_LIBRARY_HASHES;
    static get DEFERRED_LIBRARY_HASHES() { 
        if (this.__$DEFERRED_LIBRARY_HASHES===undefined) {
            this.__$DEFERRED_LIBRARY_HASHES = 'deferredLibraryHashes';
        }
        return this.__$DEFERRED_LIBRARY_HASHES;
    }
    static set DEFERRED_LIBRARY_HASHES(__$value : any)  { 
        this.__$DEFERRED_LIBRARY_HASHES = __$value;
    }

    private static __$INITIALIZE_LOADED_HUNK;
    static get INITIALIZE_LOADED_HUNK() { 
        if (this.__$INITIALIZE_LOADED_HUNK===undefined) {
            this.__$INITIALIZE_LOADED_HUNK = 'initializeLoadedHunk';
        }
        return this.__$INITIALIZE_LOADED_HUNK;
    }
    static set INITIALIZE_LOADED_HUNK(__$value : any)  { 
        this.__$INITIALIZE_LOADED_HUNK = __$value;
    }

    private static __$LAZIES;
    static get LAZIES() { 
        if (this.__$LAZIES===undefined) {
            this.__$LAZIES = 'lazies';
        }
        return this.__$LAZIES;
    }
    static set LAZIES(__$value : any)  { 
        this.__$LAZIES = __$value;
    }

    private static __$IS_HUNK_INITIALIZED;
    static get IS_HUNK_INITIALIZED() { 
        if (this.__$IS_HUNK_INITIALIZED===undefined) {
            this.__$IS_HUNK_INITIALIZED = 'isHunkInitialized';
        }
        return this.__$IS_HUNK_INITIALIZED;
    }
    static set IS_HUNK_INITIALIZED(__$value : any)  { 
        this.__$IS_HUNK_INITIALIZED = __$value;
    }

    private static __$DEFERRED_INITIALIZED;
    static get DEFERRED_INITIALIZED() { 
        if (this.__$DEFERRED_INITIALIZED===undefined) {
            this.__$DEFERRED_INITIALIZED = 'deferredInitialized';
        }
        return this.__$DEFERRED_INITIALIZED;
    }
    static set DEFERRED_INITIALIZED(__$value : any)  { 
        this.__$DEFERRED_INITIALIZED = __$value;
    }

    private static __$PRECOMPILED;
    static get PRECOMPILED() { 
        if (this.__$PRECOMPILED===undefined) {
            this.__$PRECOMPILED = 'precompiled';
        }
        return this.__$PRECOMPILED;
    }
    static set PRECOMPILED(__$value : any)  { 
        this.__$PRECOMPILED = __$value;
    }

    private static __$FINISHED_CLASSES;
    static get FINISHED_CLASSES() { 
        if (this.__$FINISHED_CLASSES===undefined) {
            this.__$FINISHED_CLASSES = 'finishedClasses';
        }
        return this.__$FINISHED_CLASSES;
    }
    static set FINISHED_CLASSES(__$value : any)  { 
        this.__$FINISHED_CLASSES = __$value;
    }

    private static __$GLOBAL_FUNCTIONS;
    static get GLOBAL_FUNCTIONS() { 
        if (this.__$GLOBAL_FUNCTIONS===undefined) {
            this.__$GLOBAL_FUNCTIONS = 'globalFunctions';
        }
        return this.__$GLOBAL_FUNCTIONS;
    }
    static set GLOBAL_FUNCTIONS(__$value : any)  { 
        this.__$GLOBAL_FUNCTIONS = __$value;
    }

    private static __$STATIC_FUNCTION_NAME_TO_CLOSURE;
    static get STATIC_FUNCTION_NAME_TO_CLOSURE() { 
        if (this.__$STATIC_FUNCTION_NAME_TO_CLOSURE===undefined) {
            this.__$STATIC_FUNCTION_NAME_TO_CLOSURE = 'staticFunctionNameToClosure';
        }
        return this.__$STATIC_FUNCTION_NAME_TO_CLOSURE;
    }
    static set STATIC_FUNCTION_NAME_TO_CLOSURE(__$value : any)  { 
        this.__$STATIC_FUNCTION_NAME_TO_CLOSURE = __$value;
    }

    private static __$ALL_CLASSES;
    static get ALL_CLASSES() { 
        if (this.__$ALL_CLASSES===undefined) {
            this.__$ALL_CLASSES = 'allClasses';
        }
        return this.__$ALL_CLASSES;
    }
    static set ALL_CLASSES(__$value : any)  { 
        this.__$ALL_CLASSES = __$value;
    }

    private static __$TYPE_INFORMATION;
    static get TYPE_INFORMATION() { 
        if (this.__$TYPE_INFORMATION===undefined) {
            this.__$TYPE_INFORMATION = 'typeInformation';
        }
        return this.__$TYPE_INFORMATION;
    }
    static set TYPE_INFORMATION(__$value : any)  { 
        this.__$TYPE_INFORMATION = __$value;
    }

    private static __$STATICS;
    static get STATICS() { 
        if (this.__$STATICS===undefined) {
            this.__$STATICS = 'statics';
        }
        return this.__$STATICS;
    }
    static set STATICS(__$value : any)  { 
        this.__$STATICS = __$value;
    }

    private static __$LIBRARIES;
    static get LIBRARIES() { 
        if (this.__$LIBRARIES===undefined) {
            this.__$LIBRARIES = 'libraries';
        }
        return this.__$LIBRARIES;
    }
    static set LIBRARIES(__$value : any)  { 
        this.__$LIBRARIES = __$value;
    }

    private static __$IS_HUNK_LOADED;
    static get IS_HUNK_LOADED() { 
        if (this.__$IS_HUNK_LOADED===undefined) {
            this.__$IS_HUNK_LOADED = 'isHunkLoaded';
        }
        return this.__$IS_HUNK_LOADED;
    }
    static set IS_HUNK_LOADED(__$value : any)  { 
        this.__$IS_HUNK_LOADED = __$value;
    }

}
