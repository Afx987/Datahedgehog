/** Library asset:datahedgehog_monitor/lib/lib/analyzer/benchmark/errors_in_all_libraries.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/path/lib/path";

export var main : (args : core.DartList<string>) => void = (args : core.DartList<string>) : void =>  {
    let packageRoot = lib4.normalize(lib4.join(lib4.dirname(lib4.fromUri(io.Platform.script)),"packages"));
    let best = new core.DartDuration({
        days : 1});
    while (true){
        let start = new core.DartDateTime.now();
        AnalysisEngine.instance.clearCaches();
        let options : any = new bare.createInstance(any,null);
        options.strongMode = true;
        options.strongModeHints = true;
        let resourceProvider : any = PhysicalResourceProvider.INSTANCE;
        let sdk : any = new bare.createInstance(any,null,resourceProvider,resourceProvider.getFolder(args[0]));
        sdk.analysisOptions = options;
        let builder : any = new bare.createInstance(any,null,resourceProvider,null,null);
        let context : any = AnalysisEngine.instance.createAnalysisContext();
        context.sourceFactory = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,sdk),new bare.createInstance(any,null,resourceProvider),new bare.createInstance(any,null,resourceProvider,builder.convertPackagesToMap(builder.createPackageMap(packageRoot)))));
        context.analysisOptions = options;
        let mainSource = new bare.createInstance(any,null,resourceProvider.getFile(lib4.fromUri(io.Platform.script)));
        context.applyChanges(((_) : any =>  {
            {
                addedSource(mainSource);
                return _;
            }
        })(new bare.createInstance(any,null)));
        let initialLibrary = context.resolveCompilationUnit2(mainSource,mainSource);
        let errorCount = 0;
        let allLibraries = _reachableLibraries(resolutionMap.elementDeclaredByCompilationUnit(initialLibrary).library);
        for(let lib of allLibraries) {
            for(let unit of lib.units) {
                let source = unit.source;
                if (op(Op.EQUALS,source.uri.scheme,'dart')) continue;
                let librarySource = context.getLibrariesContaining(source).single;
                context.resolveCompilationUnit2(source,librarySource);
                errorCount += context.computeErrors(source).length;
            }
        }
        let elapsed = new core.DartDateTime.now().difference(start);
        core.print(`${elapsed} : ${errorCount} errors ${op(Op.LT,elapsed,best) ? "(best)" : ""}`);
        if (op(Op.LT,elapsed,best)) best = elapsed;
    }
};
export var _reachableLibraries : (start : any) => core.DartList<any> = (start : any) : core.DartList<any> =>  {
    let results = new core.DartList.literal<any>();
    let seen = new core.DartSet<any>();
    var find : (lib : any) => void = (lib : any) : void =>  {
        if (seen.contains(lib)) return;
        seen.add(lib);
        results.add(lib);
        lib.importedLibraries.forEach(find);
        lib.exportedLibraries.forEach(find);
    };
    find(start);
    return results;
};
export class properties {
}
