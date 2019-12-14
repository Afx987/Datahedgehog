/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/summarize_elements.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";

export namespace PackageBundleAssembler {
    export type Constructors = 'PackageBundleAssembler';
    export type Interface = Omit<PackageBundleAssembler, Constructors>;
}
@DartClass
export class PackageBundleAssembler {
    private static __$currentMajorVersion : number;
    static get currentMajorVersion() : number { 
        if (this.__$currentMajorVersion===undefined) {
            this.__$currentMajorVersion = 1;
        }
        return this.__$currentMajorVersion;
    }

    private static __$currentMinorVersion : number;
    static get currentMinorVersion() : number { 
        if (this.__$currentMinorVersion===undefined) {
            this.__$currentMinorVersion = 0;
        }
        return this.__$currentMinorVersion;
    }

    _linkedLibraryUris : core.DartList<string>;

    _linkedLibraries : core.DartList<any>;

    _unlinkedUnitUris : core.DartList<string>;

    _unlinkedUnits : core.DartList<any>;

    _unlinkedUnitMap : core.DartMap<string,any>;

    _unlinkedUnitHashes : core.DartList<string>;

    _dependencies : core.DartList<any>;

    _excludeHashes : boolean;

    constructor(_namedArguments? : {excludeHashes? : boolean}) {
    }
    @defaultConstructor
    PackageBundleAssembler(_namedArguments? : {excludeHashes? : boolean}) {
        let {excludeHashes} = Object.assign({
            "excludeHashes" : false}, _namedArguments );
        this._linkedLibraryUris = new core.DartList.literal<string>();
        this._linkedLibraries = new core.DartList.literal<any>();
        this._unlinkedUnitUris = new core.DartList.literal<string>();
        this._unlinkedUnits = new core.DartList.literal<any>();
        this._unlinkedUnitMap = new core.DartMap.literal([
        ]);
        this._dependencies = new core.DartList.literal<any>();
        this._excludeHashes = excludeHashes;
        this._unlinkedUnitHashes = excludeHashes ? null : new core.DartList.literal<string>();
    }
    addLinkedLibrary(uri : string,library : any) : void {
        this._linkedLibraries.add(library);
        this._linkedLibraryUris.add(uri);
    }
    addUnlinkedUnit(source : any,unit : any) : void {
        this.addUnlinkedUnitWithHash(source.uri.toString(),unit,this._excludeHashes ? null : this._hash(source.contents.data));
    }
    addUnlinkedUnitWithHash(uri : string,unit : any,hash : string) : void {
        this._unlinkedUnitUris.add(uri);
        this._unlinkedUnits.add(unit);
        this._unlinkedUnitMap.set(uri,unit);
        ((_500_)=>(!!_500_)?_500_.add(hash):null)(this._unlinkedUnitHashes);
    }
    assemble() : any {
        return new bare.createInstance(any,null,{
            linkedLibraryUris : this._linkedLibraryUris,linkedLibraries : this._linkedLibraries,unlinkedUnitUris : this._unlinkedUnitUris,unlinkedUnits : this._unlinkedUnits,unlinkedUnitHashes : this._unlinkedUnitHashes,majorVersion : PackageBundleAssembler.currentMajorVersion,minorVersion : PackageBundleAssembler.currentMinorVersion,dependencies : this._dependencies,apiSignature : this._computeApiSignature()});
    }
    recordDependencies(summaryDataStore : any) : void {
        this._dependencies.addAll(summaryDataStore.dependencies);
    }
    _computeApiSignature() : string {
        let apiSignature : any = new bare.createInstance(any,null);
        for(let unitUri of ((_) : core.DartList<string> =>  {
            {
                _.sort();
                return _;
            }
        })(this._unlinkedUnitMap.keys.toList())) {
            apiSignature.addString(unitUri);
            this._unlinkedUnitMap.get(unitUri).collectApiSignature(apiSignature);
        }
        return apiSignature.toHex();
    }
    _hash(contents : string) : string {
        return hex.encode(md5.convert(convert.properties.UTF8.encode(contents)).bytes);
    }
}

export class properties {
}
