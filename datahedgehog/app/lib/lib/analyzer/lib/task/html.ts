/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/task/html.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export class properties {
    private static __$HTML_DOCUMENT : any;
    static get HTML_DOCUMENT() : any { 
        if (this.__$HTML_DOCUMENT===undefined) {
            this.__$HTML_DOCUMENT = new bare.createInstance(any,null,'HTML_DOCUMENT',null);
        }
        return this.__$HTML_DOCUMENT;
    }
    static set HTML_DOCUMENT(__$value : any)  { 
        this.__$HTML_DOCUMENT = __$value;
    }

    private static __$HTML_ERRORS : any;
    static get HTML_ERRORS() : any { 
        if (this.__$HTML_ERRORS===undefined) {
            this.__$HTML_ERRORS = new bare.createInstance(any,null,'HTML_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$HTML_ERRORS;
    }
    static set HTML_ERRORS(__$value : any)  { 
        this.__$HTML_ERRORS = __$value;
    }

    private static __$REFERENCED_LIBRARIES : any;
    static get REFERENCED_LIBRARIES() : any { 
        if (this.__$REFERENCED_LIBRARIES===undefined) {
            this.__$REFERENCED_LIBRARIES = new bare.createInstance(any,null,'REFERENCED_LIBRARIES',Source.EMPTY_LIST);
        }
        return this.__$REFERENCED_LIBRARIES;
    }
    static set REFERENCED_LIBRARIES(__$value : any)  { 
        this.__$REFERENCED_LIBRARIES = __$value;
    }

}
