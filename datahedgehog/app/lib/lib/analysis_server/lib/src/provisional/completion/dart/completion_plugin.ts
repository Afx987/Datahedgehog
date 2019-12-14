/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/provisional/completion/dart/completion_plugin.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace DartCompletionPlugin {
    export type Constructors = 'DartCompletionPlugin';
    export type Interface = Omit<DartCompletionPlugin, Constructors>;
}
@DartClass
@Implements(any)
export class DartCompletionPlugin implements any.Interface {
    private static __$CONTRIBUTOR_EXTENSION_POINT : string;
    static get CONTRIBUTOR_EXTENSION_POINT() : string { 
        if (this.__$CONTRIBUTOR_EXTENSION_POINT===undefined) {
            this.__$CONTRIBUTOR_EXTENSION_POINT = 'contributor';
        }
        return this.__$CONTRIBUTOR_EXTENSION_POINT;
    }

    private static __$UNIQUE_IDENTIFIER : string;
    static get UNIQUE_IDENTIFIER() : string { 
        if (this.__$UNIQUE_IDENTIFIER===undefined) {
            this.__$UNIQUE_IDENTIFIER = 'dart.completion';
        }
        return this.__$UNIQUE_IDENTIFIER;
    }

    _contributorExtensionPoint : any;

    get contributors() : core.DartIterable<any> {
        return this._contributorExtensionPoint.extensions.map((factory : core.DartObject) =>  {
            return ((factory as any))();
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uniqueIdentifier() : string {
        return DartCompletionPlugin.UNIQUE_IDENTIFIER;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    registerExtensionPoints(registerExtensionPoint : any) : void {
        this._contributorExtensionPoint = new bare.createInstance(any,null,this,DartCompletionPlugin.CONTRIBUTOR_EXTENSION_POINT,null);
        registerExtensionPoint(this._contributorExtensionPoint);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    registerExtensions(registerExtension : any) : void {
        registerExtension(COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID,() =>  {
            return new bare.createInstance(any,null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID,() =>  {
            return new bare.createInstance(any,null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID,() =>  {
            return new bare.createInstance(any,null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID,() =>  {
            return new bare.createInstance(any,null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID,() =>  {
            return new bare.createInstance(any,null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID,() =>  {
            return new bare.createInstance(any,null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID,() =>  {
            return new bare.createInstance(any,null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID,() =>  {
            return new bare.createInstance(any,null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID,() =>  {
            return new bare.createInstance(any,null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID,() =>  {
            return new bare.createInstance(any,null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID,() =>  {
            return new bare.createInstance(any,null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID,() =>  {
            return new bare.createInstance(any,null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID,() =>  {
            return new bare.createInstance(any,null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID,() =>  {
            return new bare.createInstance(any,null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID,() =>  {
            return new bare.createInstance(any,null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID,() =>  {
            return new bare.createInstance(any,null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID,() =>  {
            return new bare.createInstance(any,null);
        });
        registerExtension(DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID,() =>  {
            return new bare.createInstance(any,null);
        });
    }
    constructor() {
    }
    @defaultConstructor
    DartCompletionPlugin() {
    }
}

export class properties {
    private static __$dartCompletionPlugin : DartCompletionPlugin;
    static get dartCompletionPlugin() : DartCompletionPlugin { 
        if (this.__$dartCompletionPlugin===undefined) {
            this.__$dartCompletionPlugin = new DartCompletionPlugin();
        }
        return this.__$dartCompletionPlugin;
    }
    static set dartCompletionPlugin(__$value : DartCompletionPlugin)  { 
        this.__$dartCompletionPlugin = __$value;
    }

}
