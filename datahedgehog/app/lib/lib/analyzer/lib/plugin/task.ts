/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/plugin/task.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export class properties {
    private static __$DART_ERRORS_FOR_SOURCE_EXTENSION_POINT_ID : string;
    static get DART_ERRORS_FOR_SOURCE_EXTENSION_POINT_ID() : string { 
        if (this.__$DART_ERRORS_FOR_SOURCE_EXTENSION_POINT_ID===undefined) {
            this.__$DART_ERRORS_FOR_SOURCE_EXTENSION_POINT_ID = Plugin.join(EnginePlugin.UNIQUE_IDENTIFIER,EnginePlugin.DART_ERRORS_FOR_SOURCE_EXTENSION_POINT);
        }
        return this.__$DART_ERRORS_FOR_SOURCE_EXTENSION_POINT_ID;
    }
    static set DART_ERRORS_FOR_SOURCE_EXTENSION_POINT_ID(__$value : string)  { 
        this.__$DART_ERRORS_FOR_SOURCE_EXTENSION_POINT_ID = __$value;
    }

    private static __$DART_ERRORS_FOR_UNIT_EXTENSION_POINT_ID : string;
    static get DART_ERRORS_FOR_UNIT_EXTENSION_POINT_ID() : string { 
        if (this.__$DART_ERRORS_FOR_UNIT_EXTENSION_POINT_ID===undefined) {
            this.__$DART_ERRORS_FOR_UNIT_EXTENSION_POINT_ID = Plugin.join(EnginePlugin.UNIQUE_IDENTIFIER,EnginePlugin.DART_ERRORS_FOR_UNIT_EXTENSION_POINT);
        }
        return this.__$DART_ERRORS_FOR_UNIT_EXTENSION_POINT_ID;
    }
    static set DART_ERRORS_FOR_UNIT_EXTENSION_POINT_ID(__$value : string)  { 
        this.__$DART_ERRORS_FOR_UNIT_EXTENSION_POINT_ID = __$value;
    }

    private static __$HTML_ERRORS_EXTENSION_POINT_ID : string;
    static get HTML_ERRORS_EXTENSION_POINT_ID() : string { 
        if (this.__$HTML_ERRORS_EXTENSION_POINT_ID===undefined) {
            this.__$HTML_ERRORS_EXTENSION_POINT_ID = Plugin.join(EnginePlugin.UNIQUE_IDENTIFIER,EnginePlugin.HTML_ERRORS_EXTENSION_POINT);
        }
        return this.__$HTML_ERRORS_EXTENSION_POINT_ID;
    }
    static set HTML_ERRORS_EXTENSION_POINT_ID(__$value : string)  { 
        this.__$HTML_ERRORS_EXTENSION_POINT_ID = __$value;
    }

    private static __$WORK_MANAGER_EXTENSION_POINT_ID : string;
    static get WORK_MANAGER_EXTENSION_POINT_ID() : string { 
        if (this.__$WORK_MANAGER_EXTENSION_POINT_ID===undefined) {
            this.__$WORK_MANAGER_EXTENSION_POINT_ID = Plugin.join(EnginePlugin.UNIQUE_IDENTIFIER,EnginePlugin.WORK_MANAGER_FACTORY_EXTENSION_POINT);
        }
        return this.__$WORK_MANAGER_EXTENSION_POINT_ID;
    }
    static set WORK_MANAGER_EXTENSION_POINT_ID(__$value : string)  { 
        this.__$WORK_MANAGER_EXTENSION_POINT_ID = __$value;
    }

}
