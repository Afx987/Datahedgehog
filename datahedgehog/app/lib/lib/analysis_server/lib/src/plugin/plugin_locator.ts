/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/plugin/plugin_locator.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace PluginLocator {
    export type Constructors = 'PluginLocator';
    export type Interface = Omit<PluginLocator, Constructors>;
}
@DartClass
export class PluginLocator {
    private static __$analysisPluginKey : string;
    static get analysisPluginKey() : string { 
        if (this.__$analysisPluginKey===undefined) {
            this.__$analysisPluginKey = 'analysis_plugin';
        }
        return this.__$analysisPluginKey;
    }

    private static __$defaultPluginFolderName : string;
    static get defaultPluginFolderName() : string { 
        if (this.__$defaultPluginFolderName===undefined) {
            this.__$defaultPluginFolderName = 'analysis_plugin';
        }
        return this.__$defaultPluginFolderName;
    }

    private static __$pubspecFileName : string;
    static get pubspecFileName() : string { 
        if (this.__$pubspecFileName===undefined) {
            this.__$pubspecFileName = 'pubspec.yaml';
        }
        return this.__$pubspecFileName;
    }

    private static __$toolsFolderName : string;
    static get toolsFolderName() : string { 
        if (this.__$toolsFolderName===undefined) {
            this.__$toolsFolderName = 'tools';
        }
        return this.__$toolsFolderName;
    }

    resourceProvider : any;

    pluginMap : core.DartMap<string,string>;

    constructor(resourceProvider : any) {
    }
    @defaultConstructor
    PluginLocator(resourceProvider : any) {
        this.pluginMap = new core.DartMap.literal([
        ]);
        this.resourceProvider = resourceProvider;
    }
    findPlugin(packageRoot : string) : string {
        return this.pluginMap.putIfAbsent(packageRoot,() =>  {
            return this._findPlugin(packageRoot);
        });
    }
    _findPlugin(packageRoot : string) : string {
        let packageFolder : any = this.resourceProvider.getFolder(packageRoot);
        let pubspecFile : any = packageFolder.getChildAssumingFile(PluginLocator.pubspecFileName);
        if (pubspecFile.exists) {
            try {
                let document : any = loadYamlDocument(pubspecFile.readAsStringSync(),{
                    sourceUrl : pubspecFile.toUri()});
                let contents : any = document.contents;
                if (is(contents, any)) {
                    let pluginPath : string = op(Op.INDEX,contents,PluginLocator.analysisPluginKey);
                    if (pluginPath != null) {
                        let pluginFolder : any = packageFolder.getChildAssumingFolder(pluginPath);
                        if (pluginFolder.exists) {
                            return pluginFolder.path;
                        }
                    }
                }
            } catch (__error__) {

                {
                    let exception = __error__;
                }
            }
        }
        let pluginFolder : any = packageFolder.getChildAssumingFolder(PluginLocator.toolsFolderName).getChildAssumingFolder(PluginLocator.defaultPluginFolderName);
        if (pluginFolder.exists) {
            return pluginFolder.path;
        }
        return null;
    }
}

export class properties {
}
