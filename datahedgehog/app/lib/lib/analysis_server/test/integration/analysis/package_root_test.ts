/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/package_root_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";
import * as lib4 from "@dart2ts.packages/path/lib/path";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SetAnalysisRootsTest);
    });
};
export namespace SetAnalysisRootsTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'SetAnalysisRootsTest';
    export type Interface = Omit<SetAnalysisRootsTest, Constructors>;
}
@DartClass
export class SetAnalysisRootsTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_package_root() {
        let projPath : string = this.sourcePath('project');
        let mainPath : string = lib4.join(projPath,'main.dart');
        let packagesPath : string = this.sourcePath('packages');
        let fooBarPath : string = lib4.join(packagesPath,'foo','bar.dart');
        let mainText : string = "library main;\n\nimport 'package:foo/bar.dart'\n\nmain() {\n  f();\n}\n";
        let fooBarText : string = "library foo.bar;\n\nf() {}\n";
        this.writeFile(mainPath,mainText);
        let normalizedFooBarPath : string = this.writeFile(fooBarPath,fooBarText);
        this.sendServerSetSubscriptions(new core.DartList.literal(ServerService.STATUS));
        this.sendAnalysisSetSubscriptions(new core.DartMap.literal([
            [AnalysisService.NAVIGATION,new core.DartList.literal(mainPath)]]));
        let navigationRegions : core.DartList<any>;
        let navigationTargets : core.DartList<any>;
        let navigationTargetFiles : core.DartList<string>;
        this.onAnalysisNavigation.listen((params : any) =>  {
            expect(params.file,equals(mainPath));
            navigationRegions = params.regions;
            navigationTargets = params.targets;
            navigationTargetFiles = params.files;
        });
        this.sendAnalysisSetAnalysisRoots(new core.DartList.literal(projPath),new core.DartList.literal(),{
            packageRoots : new core.DartMap.literal([
                [projPath,packagesPath]])});
        this.sendAnalysisSetPriorityFiles(new core.DartList.literal(mainPath));
        return this.analysisFinished.then((_ : any) =>  {
            let found : boolean = false;
            for(let region of navigationRegions) {
                let navigationSource : string = new core.DartString(mainText).substring(region.offset,op(Op.PLUS,region.offset,region.length));
                if (navigationSource == 'f') {
                    found = true;
                    expect(region.targets,hasLength(1));
                    let navigationTargetIndex : number = op(Op.INDEX,region.targets,0);
                    let navigationTarget : any = navigationTargets[navigationTargetIndex];
                    let navigationFile : string = navigationTargetFiles[navigationTarget.fileIndex];
                    expect(navigationFile,equals(normalizedFooBarPath));
                }
            }
            expect(found,isTrue);
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SetAnalysisRootsTest() {
    }
}

export class properties {
}
