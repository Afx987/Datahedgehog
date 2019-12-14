/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/get_errors_nonStandard_sdk.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";
import * as lib4 from "./../../mock_sdk";
import * as lib5 from "@dart2ts.packages/path/lib/path";
import * as io from "@dart2ts/dart/io";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisDomainGetErrorsTest);
    });
};
export namespace AnalysisDomainGetErrorsTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'AnalysisDomainGetErrorsTest';
    export type Interface = Omit<AnalysisDomainGetErrorsTest, Constructors>;
}
@DartClass
export class AnalysisDomainGetErrorsTest extends lib3.AbstractAnalysisServerIntegrationTest {
    createNonStandardSdk() : string {
        let fakeLibrary : lib4.MockSdkLibrary = new lib4.MockSdkLibrary('dart:fake','/lib/fake/fake.dart','');
        let sdkPath : string = lib5.join(this.sourceDirectory.path,'sdk');
        let librariesContent : core.DartStringBuffer = new core.DartStringBuffer();
        librariesContent.writeln('final Map<String, LibraryInfo> LIBRARIES = const <String, LibraryInfo> {');
        ((_) : core.DartList<any> =>  {
            {
                _.add(fakeLibrary);
                _.forEach((library : any) =>  {
                    let components : core.DartList<string> = lib5.properties.posix.split(library.path);
                    components[0] = sdkPath;
                    let libraryPath : string = lib5.joinAll(components);
                    new io.Directory(lib5.dirname(libraryPath)).createSync({
                        recursive : true});
                    new io.File(libraryPath).writeAsStringSync((library as lib4.MockSdkLibrary).content);
                    let relativePath : string = lib5.joinAll(components.sublist(2));
                    librariesContent.write('"');
                    librariesContent.write(new core.DartString(library.shortName).substring(5));
                    librariesContent.write('": const LibraryInfo("');
                    librariesContent.write(relativePath);
                    librariesContent.writeln('"),');
                });
                return _;
            }
        })(lib4.MockSdk.LIBRARIES.toList());
        librariesContent.writeln('};');
        let librariesPath : string = lib5.joinAll(new core.DartList.literal(sdkPath,'lib','_internal','sdk_library_metadata','lib','libraries.dart'));
        new io.Directory(lib5.dirname(librariesPath)).createSync({
            recursive : true});
        new io.File(librariesPath).writeAsStringSync(librariesContent.toString());
        return sdkPath;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    startServer(_namedArguments? : {checked? : boolean,diagnosticPort? : number,servicesPort? : number}) : async.Future<any> {
        let {checked,diagnosticPort,servicesPort} = Object.assign({
            "checked" : true}, _namedArguments );
        let sdkPath : string = this.createNonStandardSdk();
        return this.server.start({
            checked : checked,diagnosticPort : diagnosticPort,sdkPath : sdkPath,servicesPort : servicesPort});
    }
    test_getErrors() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            let text : string = 'import \'dart:core\';\nimport \'dart:fake\';\n';
            this.writeFile(pathname,text);
            this.standardAnalysisSetup();
            await this.analysisFinished;
            let errors : core.DartList<any> = op(Op.INDEX,this.currentAnalysisErrors,pathname);
            expect(errors,hasLength(1));
            expect(errors[0].code,'unused_import');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisDomainGetErrorsTest() {
    }
}

export class properties {
}
