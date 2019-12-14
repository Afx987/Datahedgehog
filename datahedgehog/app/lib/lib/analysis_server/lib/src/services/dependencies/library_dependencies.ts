/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/dependencies/library_dependencies.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace LibraryDependencyCollector {
    export type Constructors = 'LibraryDependencyCollector';
    export type Interface = Omit<LibraryDependencyCollector, Constructors>;
}
@DartClass
export class LibraryDependencyCollector {
    _visitedLibraries : core.DartSet<any>;

    _dependencies : core.DartSet<string>;

    _contexts : core.DartIterable<any>;

    constructor(_contexts : core.DartIterable<any>) {
    }
    @defaultConstructor
    LibraryDependencyCollector(_contexts : core.DartIterable<any>) {
        this._visitedLibraries = new core.DartSet<any>();
        this._dependencies = new core.DartSet<string>();
        this._contexts = _contexts;
    }
    calculatePackageMap(folderMap : core.DartMap<any,any>) : core.DartMap<string,core.DartMap<string,core.DartList<string>>> {
        let contextMap : core.DartMap<any,any> = this._reverse(folderMap);
        let result : core.DartMap<string,core.DartMap<string,core.DartList<string>>> = new core.DartMap<string,core.DartMap<string,core.DartList<string>>>();
        for(let context of this._contexts) {
            let packageMap : core.DartMap<string,core.DartList<any>> = context.sourceFactory.packageMap;
            if (packageMap != null) {
                let map : core.DartMap<string,core.DartList<string>> = new core.DartMap<string,core.DartList<string>>();
                packageMap.forEach((name : string,folders : core.DartList<any>) =>  {
                    return map.set(name,new core.DartList.from(folders.map((f : any) =>  {
                        return f.path;
                    })));
                });
                result.set(contextMap.get(context).path,map);
            }
        }
        return result;
    }
    collectLibraryDependencies() : core.DartSet<string> {
        this._contexts.forEach((context : any) =>  {
            return context.librarySources.forEach((source : any) =>  {
                return this._addDependencies(context.getLibraryElement(source));
            });
        });
        return this._dependencies;
    }
    _addDependencies(libraryElement : any) : void {
        if (op(Op.EQUALS,libraryElement,null)) {
            return;
        }
        if (this._visitedLibraries.add(libraryElement)) {
            for(let cu of libraryElement.units) {
                let path : string = cu.source.fullName;
                if (path != null) {
                    this._dependencies.add(path);
                }
            }
            libraryElement.imports.forEach((import : any) =>  {
                return this._addDependencies(import.importedLibrary);
            });
            libraryElement.exports.forEach((export : any) =>  {
                return this._addDependencies(export.exportedLibrary);
            });
        }
    }
    _reverse(map : core.DartMap<any,any>) : core.DartMap<any,any> {
        let reverseMap : core.DartMap<any,any> = new core.DartMap<any,any>();
        map.forEach((f : any,c : any) =>  {
            return reverseMap.set(c,f);
        });
        return reverseMap;
    }
}

export class properties {
}
