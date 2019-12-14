/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/plugin/engine_plugin.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace EnginePlugin {
    export type Constructors = 'EnginePlugin';
    export type Interface = Omit<EnginePlugin, Constructors>;
}
@DartClass
@Implements(any)
export class EnginePlugin implements any.Interface {
    private static __$DART_ERRORS_FOR_SOURCE_EXTENSION_POINT : string;
    static get DART_ERRORS_FOR_SOURCE_EXTENSION_POINT() : string { 
        if (this.__$DART_ERRORS_FOR_SOURCE_EXTENSION_POINT===undefined) {
            this.__$DART_ERRORS_FOR_SOURCE_EXTENSION_POINT = 'dartErrorsForSource';
        }
        return this.__$DART_ERRORS_FOR_SOURCE_EXTENSION_POINT;
    }

    private static __$DART_ERRORS_FOR_UNIT_EXTENSION_POINT : string;
    static get DART_ERRORS_FOR_UNIT_EXTENSION_POINT() : string { 
        if (this.__$DART_ERRORS_FOR_UNIT_EXTENSION_POINT===undefined) {
            this.__$DART_ERRORS_FOR_UNIT_EXTENSION_POINT = 'dartErrorsForUnit';
        }
        return this.__$DART_ERRORS_FOR_UNIT_EXTENSION_POINT;
    }

    private static __$HTML_ERRORS_EXTENSION_POINT : string;
    static get HTML_ERRORS_EXTENSION_POINT() : string { 
        if (this.__$HTML_ERRORS_EXTENSION_POINT===undefined) {
            this.__$HTML_ERRORS_EXTENSION_POINT = 'htmlErrors';
        }
        return this.__$HTML_ERRORS_EXTENSION_POINT;
    }

    private static __$WORK_MANAGER_FACTORY_EXTENSION_POINT : string;
    static get WORK_MANAGER_FACTORY_EXTENSION_POINT() : string { 
        if (this.__$WORK_MANAGER_FACTORY_EXTENSION_POINT===undefined) {
            this.__$WORK_MANAGER_FACTORY_EXTENSION_POINT = 'workManagerFactory';
        }
        return this.__$WORK_MANAGER_FACTORY_EXTENSION_POINT;
    }

    private static __$UNIQUE_IDENTIFIER : string;
    static get UNIQUE_IDENTIFIER() : string { 
        if (this.__$UNIQUE_IDENTIFIER===undefined) {
            this.__$UNIQUE_IDENTIFIER = 'analysis_engine.core';
        }
        return this.__$UNIQUE_IDENTIFIER;
    }

    dartErrorsForSourceExtensionPoint : any;

    dartErrorsForUnitExtensionPoint : any;

    htmlErrorsExtensionPoint : any;

    workManagerFactoryExtensionPoint : any;

    constructor() {
    }
    @defaultConstructor
    EnginePlugin() {
    }
    @DartMethodAnnotation({
        library : 'asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/plugin/engine_plugin.dart',type : 'ExtensionPointId',value : {
            arguments : ['DART_ERRORS_FOR_SOURCE_EXTENSION_POINT_ID'],namedArguments : {
            }}})
    get dartErrorsForSource() : core.DartList<any> {
        return this.dartErrorsForSourceExtensionPoint.extensions;
    }
    @DartMethodAnnotation({
        library : 'asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/plugin/engine_plugin.dart',type : 'ExtensionPointId',value : {
            arguments : ['DART_ERRORS_FOR_UNIT_EXTENSION_POINT_ID'],namedArguments : {
            }}})
    get dartErrorsForUnit() : core.DartList<any> {
        return this.dartErrorsForUnitExtensionPoint.extensions;
    }
    @DartMethodAnnotation({
        library : 'asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/plugin/engine_plugin.dart',type : 'ExtensionPointId',value : {
            arguments : ['HTML_ERRORS_EXTENSION_POINT_ID'],namedArguments : {
            }}})
    get htmlErrors() : core.DartList<any> {
        return this.htmlErrorsExtensionPoint.extensions;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uniqueIdentifier() : string {
        return EnginePlugin.UNIQUE_IDENTIFIER;
    }
    get workManagerFactories() : core.DartList<any> {
        return this.workManagerFactoryExtensionPoint.extensions;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    registerExtensionPoints(registerExtensionPoint : any) : void {
        this.dartErrorsForSourceExtensionPoint = new bare.createInstance(any,null,this,EnginePlugin.DART_ERRORS_FOR_SOURCE_EXTENSION_POINT,null);
        registerExtensionPoint(this.dartErrorsForSourceExtensionPoint);
        this.dartErrorsForUnitExtensionPoint = new bare.createInstance(any,null,this,EnginePlugin.DART_ERRORS_FOR_UNIT_EXTENSION_POINT,null);
        registerExtensionPoint(this.dartErrorsForUnitExtensionPoint);
        this.htmlErrorsExtensionPoint = new bare.createInstance(any,null,this,EnginePlugin.HTML_ERRORS_EXTENSION_POINT,null);
        registerExtensionPoint(this.htmlErrorsExtensionPoint);
        this.workManagerFactoryExtensionPoint = new bare.createInstance(any,null,this,EnginePlugin.WORK_MANAGER_FACTORY_EXTENSION_POINT,null);
        registerExtensionPoint(this.workManagerFactoryExtensionPoint);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    registerExtensions(registerExtension : any) : void {
        this._registerWorkManagerFactoryExtensions(registerExtension);
        this._registerDartErrorsForSource(registerExtension);
        this._registerDartErrorsForUnit(registerExtension);
        this._registerHtmlErrors(registerExtension);
    }
    _registerDartErrorsForSource(registerExtension : any) : void {
        registerExtension(DART_ERRORS_FOR_SOURCE_EXTENSION_POINT_ID,PARSE_ERRORS);
        registerExtension(DART_ERRORS_FOR_SOURCE_EXTENSION_POINT_ID,SCAN_ERRORS);
    }
    _registerDartErrorsForUnit(registerExtension : any) : void {
        registerExtension(DART_ERRORS_FOR_UNIT_EXTENSION_POINT_ID,LIBRARY_UNIT_ERRORS);
    }
    _registerHtmlErrors(registerExtension : any) : void {
        registerExtension(HTML_ERRORS_EXTENSION_POINT_ID,HTML_DOCUMENT_ERRORS);
    }
    _registerWorkManagerFactoryExtensions(registerExtension : any) : void {
        let taskId : string = WORK_MANAGER_EXTENSION_POINT_ID;
        registerExtension(taskId,(context : any) =>  {
            return new bare.createInstance(any,null,context);
        });
        registerExtension(taskId,(context : any) =>  {
            return new bare.createInstance(any,null,context);
        });
        registerExtension(taskId,(context : any) =>  {
            return new bare.createInstance(any,null,context);
        });
    }
}

export namespace ExtensionPointId {
    export type Constructors = 'ExtensionPointId';
    export type Interface = Omit<ExtensionPointId, Constructors>;
}
@DartClass
export class ExtensionPointId {
    extensionPointId : string;

    constructor(extensionPointId : string) {
    }
    @defaultConstructor
    ExtensionPointId(extensionPointId : string) {
        this.extensionPointId = extensionPointId;
    }
}

export class properties {
}
