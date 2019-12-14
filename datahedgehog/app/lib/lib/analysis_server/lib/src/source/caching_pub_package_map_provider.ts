/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/source/caching_pub_package_map_provider.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";
import * as io from "@dart2ts/dart/io";

export namespace CachingPubPackageMapProvider {
    export type Constructors = 'CachingPubPackageMapProvider';
    export type Interface = Omit<CachingPubPackageMapProvider, Constructors>;
}
@DartClass
export class CachingPubPackageMapProvider extends any {
    private static __$cacheKey;
    static get cacheKey() { 
        if (this.__$cacheKey===undefined) {
            this.__$cacheKey = 'pub_list_cache';
        }
        return this.__$cacheKey;
    }

    private static __$cacheVersion;
    static get cacheVersion() { 
        if (this.__$cacheVersion===undefined) {
            this.__$cacheVersion = 1;
        }
        return this.__$cacheVersion;
    }

    private static __$cacheVersionKey;
    static get cacheVersionKey() { 
        if (this.__$cacheVersionKey===undefined) {
            this.__$cacheVersionKey = 'pub_list_cache_version';
        }
        return this.__$cacheVersionKey;
    }

    private static __$pubListResultKey;
    static get pubListResultKey() { 
        if (this.__$pubListResultKey===undefined) {
            this.__$pubListResultKey = 'pub_list_result';
        }
        return this.__$pubListResultKey;
    }

    private static __$modificationStampsKey;
    static get modificationStampsKey() { 
        if (this.__$modificationStampsKey===undefined) {
            this.__$modificationStampsKey = 'modification_stamps';
        }
        return this.__$modificationStampsKey;
    }

    _cache : core.DartMap<string,core.DartMap<any,any>>;

    _cacheModificationTime : number;

    _writeFile : (file : any,content : string) => number;

    constructor(resourceProvider : any,sdk : any,runPubList? : any,_writeFile? : (file : any,content : string) => number) {
    }
    @defaultConstructor
    CachingPubPackageMapProvider(resourceProvider : any,sdk : any,runPubList? : any,_writeFile? : (file : any,content : string) => number) {
        super.DartObject(resourceProvider,sdk,runPubList);
        this._writeFile = _writeFile;
        if (op(Op.EQUALS,this._writeFile,null)) {
            this._writeFile = this._writeFileDefault.bind(this);
        }
    }
    get cacheFile() : any {
        return this._cacheDir.getChild('cache');
    }
    get _cacheDir() : any {
        return resourceProvider.getStateLocation('.pub-list');
    }
    get _touchFile() : any {
        return this._cacheDir.getChild('touch');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computePackageMap(folder : any) : any {
        if (!folder.exists) {
            return computePackageMapError(folder);
        }
        this._readCache();
        let entry : core.DartMap<any,any> = this._cache.get(folder.path);
        if (entry != null) {
            let modificationStamps : core.DartMap<string,number> = entry.get(CachingPubPackageMapProvider.modificationStampsKey) as core.DartMap<string,number>;
            if (modificationStamps != null) {
                if (!this._haveDependenciesChanged(modificationStamps)) {
                    return this.parsePackageMap(entry.get(CachingPubPackageMapProvider.pubListResultKey),folder);
                }
            }
        }
        let runCount : number = 0;
        let info : any;
        while (true){
            let startStamp : number;
            try {
                startStamp = this._writeFile(this._touchFile,'touch');
            } catch (__error__) {

                {
                    let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    AnalysisEngine.instance.logger.logInformation(`Exception writing ${this._touchFile}\n${exception}\n${stackTrace}`);
                    startStamp = new core.DartDateTime.now().millisecondsSinceEpoch;
                }
            }
            info = super.computePackageMap(folder);
            ++runCount;
            if (!this._haveDependenciesChangedSince(info,startStamp)) {
                break;
            }
            if (runCount == 4) {
                AnalysisEngine.instance.logger.logInformation(`pub list called ${runCount} times: ${folder}`);
                break;
            }
        }
        this._writeCache();
        return info;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parsePackageMap(obj : core.DartMap<any,any>,folder : any) : any {
        let info : any = super.parsePackageMap(obj,folder);
        let modificationStamps : core.DartMap<string,number> = new core.DartMap<string,number>();
        for(let path of info.dependencies) {
            let res : any = resourceProvider.getResource(path);
            if (is(res, any) && res.exists) {
                modificationStamps.set(path,res.createSource().modificationStamp);
            }
        }
        this._cache.set(folder.path,new core.DartMap.literal([
            [CachingPubPackageMapProvider.pubListResultKey,obj],
            [CachingPubPackageMapProvider.modificationStampsKey,modificationStamps]]));
        return info;
    }
    _haveDependenciesChanged(modificationStamps : core.DartMap<string,number>) : boolean {
        for(let path of modificationStamps.keys) {
            let res : any = resourceProvider.getResource(path);
            if (is(res, any)) {
                if (!res.exists || res.createSource().modificationStamp != modificationStamps.get(path)) {
                    return true;
                }
            }else {
                return true;
            }
        }
        return false;
    }
    _haveDependenciesChangedSince(info : any,startStamp : number) : boolean {
        for(let path of info.dependencies) {
            let res : any = resourceProvider.getResource(path);
            if (is(res, any)) {
                let modStamp : number = res.createSource().modificationStamp;
                if (modStamp != null && modStamp >= startStamp) {
                    return true;
                }
            }
        }
        return false;
    }
    _readCache() : void {
        let source : any = this.cacheFile.createSource();
        if (source.exists() && (this._cache == null || this._cacheModificationTime != source.modificationStamp)) {
            try {
                let data : any = source.contents;
                let map : core.DartMap<any,any> = convert.properties.JSON.decode(data.data);
                if (op(Op.EQUALS,map.get(CachingPubPackageMapProvider.cacheVersionKey),CachingPubPackageMapProvider.cacheVersion)) {
                    this._cache = map.get(CachingPubPackageMapProvider.cacheKey) as core.DartMap<string,core.DartMap<any,any>>;
                    this._cacheModificationTime = data.modificationTime;
                }
            } catch (__error__) {

                {
                    let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    AnalysisEngine.instance.logger.logInformation(`Exception reading ${this.cacheFile}\n${exception}\n${stackTrace}`);
                }
            }
        }
        if (this._cache == null) {
            this._cache = new core.DartMap<string,core.DartMap<any,any>>();
        }
    }
    _writeCache() : void {
        try {
            this._cacheModificationTime = this._writeFile(this.cacheFile,convert.properties.JSON.encode(new core.DartMap.literal([
                [CachingPubPackageMapProvider.cacheVersionKey,CachingPubPackageMapProvider.cacheVersion],
                [CachingPubPackageMapProvider.cacheKey,this._cache]])));
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                AnalysisEngine.instance.logger.logInformation(`Exception writing ${this.cacheFile}\n${exception}\n${stackTrace}`);
            }
        }
    }
    _writeFileDefault(cacheFile : any,content : string) : number {
        let file : io.File = new io.File(cacheFile.path);
        if (!file.parent.existsSync()) {
            file.parent.createSync({
                recursive : true});
        }
        file.writeAsStringSync(content,{
            flush : true});
        return file.lastModifiedSync().millisecondsSinceEpoch;
    }
}

export class properties {
}
