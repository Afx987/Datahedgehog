/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/task/yaml.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export class properties {
    private static __$YAML_DOCUMENT : any;
    static get YAML_DOCUMENT() : any { 
        if (this.__$YAML_DOCUMENT===undefined) {
            this.__$YAML_DOCUMENT = new bare.createInstance(any,null,'YAML_DOCUMENT',null);
        }
        return this.__$YAML_DOCUMENT;
    }
    static set YAML_DOCUMENT(__$value : any)  { 
        this.__$YAML_DOCUMENT = __$value;
    }

    private static __$YAML_ERRORS : any;
    static get YAML_ERRORS() : any { 
        if (this.__$YAML_ERRORS===undefined) {
            this.__$YAML_ERRORS = new bare.createInstance(any,null,'YAML_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$YAML_ERRORS;
    }
    static set YAML_ERRORS(__$value : any)  { 
        this.__$YAML_ERRORS = __$value;
    }

}
