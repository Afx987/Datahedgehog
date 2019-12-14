/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/src/base/processed_options_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ProcessedOptionsTest);
    });
};
export namespace ProcessedOptionsTest {
    export type Constructors = 'ProcessedOptionsTest';
    export type Interface = Omit<ProcessedOptionsTest, Constructors>;
}
@DartClass
export class ProcessedOptionsTest {
    fileSystem;

    _mockOutline : any;

    get mockSummary() : any {
        return this._mockOutline = ( this._mockOutline ) || ( new bare.createInstance(any,null,{
            libraries : new core.DartList.literal(new bare.createInstance(any,null,lib3.Uri.parse('file:///a/b.dart')))}) );
    }
    test_compileSdk_false() {
        for(let value of new core.DartList.literal(false,true)) {
            let raw = ((_) : any =>  {
                {
                    _.compileSdk = value;
                    return _;
                }
            })(new bare.createInstance(any,null));
            let processed = new bare.createInstance(any,null,raw);
            expect(processed.compileSdk,value);
        }
    }
    test_fileSystem_noBazelRoots() {
        let raw = ((_) : any =>  {
            {
                _.fileSystem = this.fileSystem;
                return _;
            }
        })(new bare.createInstance(any,null));
        let processed = new bare.createInstance(any,null,raw);
        expect(processed.fileSystem,same(this.fileSystem));
    }
    test_getSdkSummary_summaryLocationProvided() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let uri = lib3.Uri.parse('file:///sdkSummary');
            this.writeMockSummaryTo(uri);
            this.checkMockSummary(((_) : any =>  {
                {
                    _.fileSystem = this.fileSystem;
                    _.sdkSummary = uri;
                    return _;
                }
            })(new bare.createInstance(any,null)));
        } )());
    }

    writeMockSummaryTo(uri : lib3.Uri) : void {
        let sink = new bare.createInstance(any,null);
        new bare.createInstance(any,null,sink).writeProgramFile(this.mockSummary);
        this.fileSystem.entityForUri(uri).writeAsBytesSync(sink.builder.takeBytes());
    }
    checkMockSummary(raw : any) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let processed = new bare.createInstance(any,null,raw);
            let sdkSummary = await processed.sdkSummaryProgram;
            expect(sdkSummary.libraries.single.importUri,this.mockSummary.libraries.single.importUri);
        } )());
    }

    test_getUriTranslator_explicitPackagesFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.fileSystem.entityForUri(lib3.Uri.parse('file:///.packages')).writeAsStringSync('foo:bar\n');
            this.fileSystem.entityForUri(lib3.Uri.parse('file:///explicit.packages')).writeAsStringSync('foo:baz\n');
            let raw = ((_) : any =>  {
                {
                    _.fileSystem = this.fileSystem;
                    _.packagesFileUri = lib3.Uri.parse('file:///explicit.packages');
                    return _;
                }
            })(new bare.createInstance(any,null));
            let processed = new bare.createInstance(any,null,raw);
            let uriTranslator = await processed.getUriTranslator();
            expect(uriTranslator.packages,new core.DartMap.literal([
                ['foo',lib3.Uri.parse('file:///baz/')]]));
        } )());
    }

    test_getUriTranslator_explicitPackagesFile_withBaseLocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.fileSystem.entityForUri(lib3.Uri.parse('file:///.packages')).writeAsStringSync('foo:bar\n');
            this.fileSystem.entityForUri(lib3.Uri.parse('file:///base/location/explicit.packages')).writeAsStringSync('foo:baz\n');
            let raw = ((_) : any =>  {
                {
                    _.fileSystem = this.fileSystem;
                    _.packagesFileUri = lib3.Uri.parse('file:///base/location/explicit.packages');
                    return _;
                }
            })(new bare.createInstance(any,null));
            let processed = new bare.createInstance(any,null,raw);
            let uriTranslator = await processed.getUriTranslator();
            expect(uriTranslator.packages,new core.DartMap.literal([
                ['foo',lib3.Uri.parse('file:///base/location/baz/')]]));
        } )());
    }

    test_getUriTranslator_noPackages() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.fileSystem.entityForUri(lib3.Uri.parse('file:///.packages')).writeAsStringSync('foo:bar\n');
            let raw = ((_) : any =>  {
                {
                    _.fileSystem = this.fileSystem;
                    _.packagesFileUri = new lib3.Uri();
                    return _;
                }
            })(new bare.createInstance(any,null));
            let processed = new bare.createInstance(any,null,raw);
            let uriTranslator = await processed.getUriTranslator();
            expect(uriTranslator.packages,isEmpty);
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    ProcessedOptionsTest() {
        this.fileSystem = new bare.createInstance(any,null,lib3.Uri.parse('file:///'));
    }
}

export class properties {
}
