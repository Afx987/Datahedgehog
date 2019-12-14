/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/plugin/analysis/occurrences/occurrences.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export class properties {
    private static __$OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT_ID : string;
    static get OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT_ID() : string { 
        if (this.__$OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT_ID===undefined) {
            this.__$OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT_ID = Plugin.join(ServerPlugin.UNIQUE_IDENTIFIER,ServerPlugin.OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT);
        }
        return this.__$OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT_ID;
    }
    static set OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT_ID(__$value : string)  { 
        this.__$OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT_ID = __$value;
    }

}
