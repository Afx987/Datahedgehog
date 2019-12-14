/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/source/package_map_provider.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace PackageMapInfo {
    export type Constructors = 'PackageMapInfo';
    export type Interface = Omit<PackageMapInfo, Constructors>;
}
@DartClass
export class PackageMapInfo {
    packageMap : core.DartMap<string,core.DartList<any>>;

    dependencies : core.DartSet<string>;

    constructor(packageMap : core.DartMap<string,core.DartList<any>>,dependencies : core.DartSet<string>) {
    }
    @defaultConstructor
    PackageMapInfo(packageMap : core.DartMap<string,core.DartList<any>>,dependencies : core.DartSet<string>) {
        this.packageMap = packageMap;
        this.dependencies = dependencies;
    }
}

export namespace PackageMapProvider {
    export type Constructors = 'PackageMapProvider';
    export type Interface = Omit<PackageMapProvider, Constructors>;
}
@DartClass
export class PackageMapProvider {
    @Abstract
    computePackageMap(folder : any) : PackageMapInfo{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    PackageMapProvider() {
    }
}

export class properties {
}
