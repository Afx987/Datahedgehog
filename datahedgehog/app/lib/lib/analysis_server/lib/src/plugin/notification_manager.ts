/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/plugin/notification_manager.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/analyzer_plugin/lib/protocol/protocol";
import * as lib4 from "@dart2ts.packages/analysis_server/lib/protocol/protocol_generated";
import * as collection from "@dart2ts/dart/core";

export namespace NotificationManager {
    export type Constructors = 'NotificationManager';
    export type Interface = Omit<NotificationManager, Constructors>;
}
@DartClass
export class NotificationManager {
    private static __$serverId : string;
    static get serverId() : string { 
        if (this.__$serverId===undefined) {
            this.__$serverId = 'server';
        }
        return this.__$serverId;
    }

    channel : any;

    provider : any;

    includedPaths : core.DartList<string>;

    excludedPaths : core.DartList<string>;

    currentSubscriptions : core.DartMap<any,core.DartSet<string>>;

    errors : any;

    folding : any;

    highlights : any;

    navigation : any;

    occurrences : any;

    outlines : any;

    converter : any;

    merger : any;

    constructor(channel : any,provider : any) {
    }
    @defaultConstructor
    NotificationManager(channel : any,provider : any) {
        this.includedPaths = new core.DartList.literal<string>();
        this.excludedPaths = new core.DartList.literal<string>();
        this.currentSubscriptions = new core.DartMap.literal([
        ]);
        this.converter = new bare.createInstance(any,null);
        this.merger = new bare.createInstance(any,null);
        this.channel = channel;
        this.provider = provider;
        this.errors = new bare.createInstance(any,null,NotificationManager.serverId,{
            predicate : this._isIncluded.bind(this)});
        this.folding = new bare.createInstance(any,null,NotificationManager.serverId);
        this.highlights = new bare.createInstance(any,null,NotificationManager.serverId);
        this.navigation = new bare.createInstance(any,null,NotificationManager.serverId);
        this.occurrences = new bare.createInstance(any,null,NotificationManager.serverId);
        this.outlines = new bare.createInstance(any,null,NotificationManager.serverId);
    }
    handlePluginNotification(pluginId : string,notification : any) : void {
        let event : string = notification.event;
        switch (event) {
            case lib3.ANALYSIS_NOTIFICATION_ERRORS:
                let params : any = new bare.createInstance(any,"fromNotification",notification);
                this.recordAnalysisErrors(pluginId,params.file,params.errors);
                break;
            case lib3.ANALYSIS_NOTIFICATION_FOLDING:
                let params : any = new bare.createInstance(any,"fromNotification",notification);
                this.recordFoldingRegions(pluginId,params.file,params.regions);
                break;
            case lib3.ANALYSIS_NOTIFICATION_HIGHLIGHTS:
                let params : any = new bare.createInstance(any,"fromNotification",notification);
                this.recordHighlightRegions(pluginId,params.file,params.regions);
                break;
            case lib3.ANALYSIS_NOTIFICATION_NAVIGATION:
                let params : any = new bare.createInstance(any,"fromNotification",notification);
                this.recordNavigationParams(pluginId,params.file,this.converter.convertAnalysisNavigationParams(params));
                break;
            case lib3.ANALYSIS_NOTIFICATION_OCCURRENCES:
                let params : any = new bare.createInstance(any,"fromNotification",notification);
                this.recordOccurrences(pluginId,params.file,params.occurrences);
                break;
            case lib3.ANALYSIS_NOTIFICATION_OUTLINE:
                let params : any = new bare.createInstance(any,"fromNotification",notification);
                this.recordOutlines(pluginId,params.file,params.outline);
                break;
            case lib3.PLUGIN_NOTIFICATION_ERROR:
                let params : any = new bare.createInstance(any,"fromNotification",notification);
                this.channel.sendNotification(new bare.createInstance(any,null,params.isFatal,params.message,params.stackTrace).toNotification());
                break;
        }
    }
    recordAnalysisErrors(pluginId : string,filePath : string,errorData : core.DartList<any>) : void {
        if (this.errors.isCollectingFor(filePath)) {
            this.errors.putResults(filePath,pluginId,errorData);
            let unmergedErrors : core.DartList<core.DartList<any>> = this.errors.getResults(filePath);
            let mergedErrors : core.DartList<any> = this.merger.mergeAnalysisErrors(unmergedErrors);
            this.channel.sendNotification(new bare.createInstance(any,null,filePath,mergedErrors).toNotification());
        }
    }
    recordFoldingRegions(pluginId : string,filePath : string,foldingData : core.DartList<any>) : void {
        if (this.folding.isCollectingFor(filePath)) {
            this.folding.putResults(filePath,pluginId,foldingData);
            let unmergedFolding : core.DartList<core.DartList<any>> = this.folding.getResults(filePath);
            let mergedFolding : core.DartList<any> = this.merger.mergeFoldingRegions(unmergedFolding);
            this.channel.sendNotification(new bare.createInstance(any,null,filePath,mergedFolding).toNotification());
        }
    }
    recordHighlightRegions(pluginId : string,filePath : string,highlightData : core.DartList<any>) : void {
        if (this.highlights.isCollectingFor(filePath)) {
            this.highlights.putResults(filePath,pluginId,highlightData);
            let unmergedHighlights : core.DartList<core.DartList<any>> = this.highlights.getResults(filePath);
            let mergedHighlights : core.DartList<any> = this.merger.mergeHighlightRegions(unmergedHighlights);
            this.channel.sendNotification(new bare.createInstance(any,null,filePath,mergedHighlights).toNotification());
        }
    }
    recordNavigationParams(pluginId : string,filePath : string,navigationData : any) : void {
        if (this.navigation.isCollectingFor(filePath)) {
            this.navigation.putResults(filePath,pluginId,navigationData);
            let unmergedNavigations : core.DartList<any> = this.navigation.getResults(filePath);
            let mergedNavigations : any = this.merger.mergeNavigation(unmergedNavigations);
            this.channel.sendNotification(mergedNavigations.toNotification());
        }
    }
    recordOccurrences(pluginId : string,filePath : string,occurrencesData : core.DartList<any>) : void {
        if (this.occurrences.isCollectingFor(filePath)) {
            this.occurrences.putResults(filePath,pluginId,occurrencesData);
            let unmergedOccurrences : core.DartList<core.DartList<any>> = this.occurrences.getResults(filePath);
            let mergedOccurrences : core.DartList<any> = this.merger.mergeOccurrences(unmergedOccurrences);
            this.channel.sendNotification(new bare.createInstance(any,null,filePath,mergedOccurrences).toNotification());
        }
    }
    recordOutlines(pluginId : string,filePath : string,outlineData : core.DartList<any>) : void {
        if (this.outlines.isCollectingFor(filePath)) {
            this.outlines.putResults(filePath,pluginId,outlineData);
            let unmergedOutlines : core.DartList<core.DartList<any>> = this.outlines.getResults(filePath);
            let mergedOutlines : core.DartList<any> = this.merger.mergeOutline(unmergedOutlines);
            this.channel.sendNotification(new bare.createInstance(any,null,filePath,lib4.FileKind.LIBRARY,mergedOutlines[0]).toNotification());
        }
    }
    setAnalysisRoots(included : core.DartList<string>,excluded : core.DartList<string>) : void {
        this.includedPaths = included;
        this.excludedPaths = excluded;
    }
    setSubscriptions(newSubscriptions : core.DartMap<any,core.DartSet<string>>) : void {
        var collectorFor : (service : any) => any = (service : any) : any =>  {
            switch (service) {
                case lib4.AnalysisService.FOLDING:
                    return this.folding;
                case lib4.AnalysisService.HIGHLIGHTS:
                    return this.highlights;
                case lib4.AnalysisService.NAVIGATION:
                    return this.navigation;
                case lib4.AnalysisService.OCCURRENCES:
                    return this.occurrences;
                case lib4.AnalysisService.OUTLINE:
                    return this.outlines;
            }
            return null;
        };
        let services : core.DartSet<any> = new core.DartHashSet<any>();
        services.addAll(this.currentSubscriptions.keys);
        services.addAll(newSubscriptions.keys);
        services.forEach((service : any) =>  {
            let collector : any = collectorFor(service);
            if (collector != null) {
                let currentPaths : core.DartSet<string> = this.currentSubscriptions.get(service);
                let newPaths : core.DartSet<string> = newSubscriptions.get(service);
                if (op(Op.EQUALS,currentPaths,null)) {
                    if (op(Op.EQUALS,newPaths,null)) {
                        return;
                    }
                    newPaths.forEach((filePath : string) =>  {
                        collector.startCollectingFor(filePath);
                    });
                }else if (op(Op.EQUALS,newPaths,null)) {
                    currentPaths.forEach((filePath : string) =>  {
                        collector.stopCollectingFor(filePath);
                    });
                }else {
                    newPaths.forEach((filePath : string) =>  {
                        if (!currentPaths.contains(filePath)) {
                            collector.startCollectingFor(filePath);
                        }
                    });
                    currentPaths.forEach((filePath : string) =>  {
                        if (!newPaths.contains(filePath)) {
                            collector.stopCollectingFor(filePath);
                        }
                    });
                }
            }
        });
        this.currentSubscriptions = newSubscriptions;
    }
    _isIncluded(path : string) : boolean {
        var isIncluded : () => boolean = () : boolean =>  {
            for(let includedPath of this.includedPaths) {
                if (this.provider.pathContext.isWithin(includedPath,path) || this.provider.pathContext.equals(includedPath,path)) {
                    return true;
                }
            }
            return false;
        };
        var isExcluded : () => boolean = () : boolean =>  {
            for(let excludedPath of this.excludedPaths) {
                if (this.provider.pathContext.isWithin(excludedPath,path)) {
                    return true;
                }
            }
            return false;
        };
        return isIncluded() && !isExcluded();
    }
}

export class properties {
}
