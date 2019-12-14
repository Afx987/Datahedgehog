/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/plugin/server_plugin.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ServerPlugin {
    export type Constructors = 'ServerPlugin';
    export type Interface = Omit<ServerPlugin, Constructors>;
}
@DartClass
@Implements(any)
export class ServerPlugin implements any.Interface {
    private static __$ANALYZED_FILE_PATTERNS_EXTENSION_POINT : string;
    static get ANALYZED_FILE_PATTERNS_EXTENSION_POINT() : string { 
        if (this.__$ANALYZED_FILE_PATTERNS_EXTENSION_POINT===undefined) {
            this.__$ANALYZED_FILE_PATTERNS_EXTENSION_POINT = 'analyzedFilePatterns';
        }
        return this.__$ANALYZED_FILE_PATTERNS_EXTENSION_POINT;
    }

    private static __$ASSIST_CONTRIBUTOR_EXTENSION_POINT : string;
    static get ASSIST_CONTRIBUTOR_EXTENSION_POINT() : string { 
        if (this.__$ASSIST_CONTRIBUTOR_EXTENSION_POINT===undefined) {
            this.__$ASSIST_CONTRIBUTOR_EXTENSION_POINT = 'assistContributor';
        }
        return this.__$ASSIST_CONTRIBUTOR_EXTENSION_POINT;
    }

    private static __$COMPLETION_CONTRIBUTOR_EXTENSION_POINT : string;
    static get COMPLETION_CONTRIBUTOR_EXTENSION_POINT() : string { 
        if (this.__$COMPLETION_CONTRIBUTOR_EXTENSION_POINT===undefined) {
            this.__$COMPLETION_CONTRIBUTOR_EXTENSION_POINT = 'completionContributor';
        }
        return this.__$COMPLETION_CONTRIBUTOR_EXTENSION_POINT;
    }

    private static __$DOMAIN_EXTENSION_POINT : string;
    static get DOMAIN_EXTENSION_POINT() : string { 
        if (this.__$DOMAIN_EXTENSION_POINT===undefined) {
            this.__$DOMAIN_EXTENSION_POINT = 'domain';
        }
        return this.__$DOMAIN_EXTENSION_POINT;
    }

    private static __$FIX_CONTRIBUTOR_EXTENSION_POINT : string;
    static get FIX_CONTRIBUTOR_EXTENSION_POINT() : string { 
        if (this.__$FIX_CONTRIBUTOR_EXTENSION_POINT===undefined) {
            this.__$FIX_CONTRIBUTOR_EXTENSION_POINT = 'fixContributor';
        }
        return this.__$FIX_CONTRIBUTOR_EXTENSION_POINT;
    }

    private static __$INDEX_CONTRIBUTOR_EXTENSION_POINT : string;
    static get INDEX_CONTRIBUTOR_EXTENSION_POINT() : string { 
        if (this.__$INDEX_CONTRIBUTOR_EXTENSION_POINT===undefined) {
            this.__$INDEX_CONTRIBUTOR_EXTENSION_POINT = 'indexContributor';
        }
        return this.__$INDEX_CONTRIBUTOR_EXTENSION_POINT;
    }

    private static __$NAVIGATION_CONTRIBUTOR_EXTENSION_POINT : string;
    static get NAVIGATION_CONTRIBUTOR_EXTENSION_POINT() : string { 
        if (this.__$NAVIGATION_CONTRIBUTOR_EXTENSION_POINT===undefined) {
            this.__$NAVIGATION_CONTRIBUTOR_EXTENSION_POINT = 'navigationContributor';
        }
        return this.__$NAVIGATION_CONTRIBUTOR_EXTENSION_POINT;
    }

    private static __$OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT : string;
    static get OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT() : string { 
        if (this.__$OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT===undefined) {
            this.__$OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT = 'occurrencesContributor';
        }
        return this.__$OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT;
    }

    private static __$SET_ANALISYS_DOMAIN_EXTENSION_POINT : string;
    static get SET_ANALISYS_DOMAIN_EXTENSION_POINT() : string { 
        if (this.__$SET_ANALISYS_DOMAIN_EXTENSION_POINT===undefined) {
            this.__$SET_ANALISYS_DOMAIN_EXTENSION_POINT = 'setAnalysisDomain';
        }
        return this.__$SET_ANALISYS_DOMAIN_EXTENSION_POINT;
    }

    private static __$UNIQUE_IDENTIFIER : string;
    static get UNIQUE_IDENTIFIER() : string { 
        if (this.__$UNIQUE_IDENTIFIER===undefined) {
            this.__$UNIQUE_IDENTIFIER = 'analysis_server.core';
        }
        return this.__$UNIQUE_IDENTIFIER;
    }

    analyzedFilePatternsExtensionPoint : any;

    assistContributorExtensionPoint : any;

    completionContributorExtensionPoint : any;

    domainExtensionPoint : any;

    fixContributorExtensionPoint : any;

    navigationContributorExtensionPoint : any;

    occurrencesContributorExtensionPoint : any;

    setAnalysisDomainExtensionPoint : any;

    constructor() {
    }
    @defaultConstructor
    ServerPlugin() {
    }
    get analyzedFilePatterns() : core.DartList<string> {
        let patterns : core.DartList<string> = new core.DartList.literal<string>();
        for(let extension of this.analyzedFilePatternsExtensionPoint.extensions) {
            patterns.addAll(extension);
        }
        return patterns;
    }
    get assistContributors() : core.DartList<any> {
        return this.assistContributorExtensionPoint.extensions;
    }
    get completionContributors() : core.DartIterable<any> {
        return this.completionContributorExtensionPoint.extensions.map((factory : any) =>  {
            return factory();
        });
    }
    get fixContributors() : core.DartList<any> {
        return this.fixContributorExtensionPoint.extensions;
    }
    get navigationContributors() : core.DartList<any> {
        return this.navigationContributorExtensionPoint.extensions;
    }
    get occurrencesContributors() : core.DartList<any> {
        return this.occurrencesContributorExtensionPoint.extensions;
    }
    get setAnalysisDomainFunctions() : core.DartList<any> {
        return this.setAnalysisDomainExtensionPoint.extensions;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uniqueIdentifier() : string {
        return ServerPlugin.UNIQUE_IDENTIFIER;
    }
    createDomains(server : any) : core.DartList<any> {
        if (op(Op.EQUALS,this.domainExtensionPoint,null)) {
            return new core.DartList.literal<any>();
        }
        return this.domainExtensionPoint.extensions.map((factory : (server : any) => any) =>  {
            return factory(server);
        }).toList();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    registerExtensionPoints(registerExtensionPoint : any) : void {
        this.analyzedFilePatternsExtensionPoint = new bare.createInstance(any,null,this,ServerPlugin.ANALYZED_FILE_PATTERNS_EXTENSION_POINT,null);
        registerExtensionPoint(this.analyzedFilePatternsExtensionPoint);
        this.assistContributorExtensionPoint = new bare.createInstance(any,null,this,ServerPlugin.ASSIST_CONTRIBUTOR_EXTENSION_POINT,null);
        registerExtensionPoint(this.assistContributorExtensionPoint);
        this.completionContributorExtensionPoint = new bare.createInstance(any,null,this,ServerPlugin.COMPLETION_CONTRIBUTOR_EXTENSION_POINT,null);
        registerExtensionPoint(this.completionContributorExtensionPoint);
        this.domainExtensionPoint = new bare.createInstance(any,null,this,ServerPlugin.DOMAIN_EXTENSION_POINT,null);
        registerExtensionPoint(this.domainExtensionPoint);
        this.fixContributorExtensionPoint = new bare.createInstance(any,null,this,ServerPlugin.FIX_CONTRIBUTOR_EXTENSION_POINT,null);
        registerExtensionPoint(this.fixContributorExtensionPoint);
        this.navigationContributorExtensionPoint = new bare.createInstance(any,null,this,ServerPlugin.NAVIGATION_CONTRIBUTOR_EXTENSION_POINT,null);
        registerExtensionPoint(this.navigationContributorExtensionPoint);
        this.occurrencesContributorExtensionPoint = new bare.createInstance(any,null,this,ServerPlugin.OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT,null);
        registerExtensionPoint(this.occurrencesContributorExtensionPoint);
        this.setAnalysisDomainExtensionPoint = new bare.createInstance(any,null,this,ServerPlugin.SET_ANALISYS_DOMAIN_EXTENSION_POINT,null);
        registerExtensionPoint(this.setAnalysisDomainExtensionPoint);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    registerExtensions(registerExtension : any) : void {
        let patterns : core.DartList<string> = new core.DartList.literal<string>(`**/*.${AnalysisEngine.SUFFIX_DART}`,`**/*.${AnalysisEngine.SUFFIX_HTML}`,`**/*.${AnalysisEngine.SUFFIX_HTM}`,`**/${AnalysisEngine.ANALYSIS_OPTIONS_FILE}`,`**/${AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE}`);
        registerExtension(ANALYZED_FILE_PATTERNS_EXTENSION_POINT_ID,patterns);
        registerExtension(ASSIST_CONTRIBUTOR_EXTENSION_POINT_ID,new bare.createInstance(any,null));
        registerExtension(NAVIGATION_CONTRIBUTOR_EXTENSION_POINT_ID,new bare.createInstance(any,null));
        registerExtension(OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT_ID,new bare.createInstance(any,null));
        let domainId : string = Plugin.join(ServerPlugin.UNIQUE_IDENTIFIER,ServerPlugin.DOMAIN_EXTENSION_POINT);
        registerExtension(domainId,(server : any) =>  {
            return new bare.createInstance(any,null,server);
        });
        registerExtension(domainId,(server : any) =>  {
            return new bare.createInstance(any,null,server);
        });
        registerExtension(domainId,(server : any) =>  {
            return new bare.createInstance(any,null,server);
        });
        registerExtension(domainId,(server : any) =>  {
            return new bare.createInstance(any,null,server);
        });
        registerExtension(domainId,(server : any) =>  {
            return new bare.createInstance(any,null,server);
        });
        registerExtension(domainId,(server : any) =>  {
            return new bare.createInstance(any,null,server);
        });
        registerExtension(domainId,(server : any) =>  {
            return new bare.createInstance(any,null,server);
        });
        registerExtension(FIX_CONTRIBUTOR_EXTENSION_POINT_ID,new bare.createInstance(any,null));
    }
}

export class properties {
}
