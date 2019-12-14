/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/source_factory_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as convert from "@dart2ts/dart/convert";
import * as lib5 from "./test_support";
import * as lib6 from "@dart2ts.packages/path/lib/src/context";

export var main : () => any = () =>  {
    runPackageMapTests();
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SourceFactoryTest);
    });
};
export var createSource : (_namedArguments? : {path? : string,uri? : string}) => any = (_namedArguments? : {path? : string,uri? : string}) : any =>  {
    let {path,uri} = Object.assign({
    }, _namedArguments );
    return new bare.createInstance(any,null).getFile(path).createSource(uri != null ? lib3.Uri.parse(uri) : null);
};
export var runPackageMapTests : () => void = () : void =>  {
    let resourceProvider : any = new bare.createInstance(any,null);
    let baseUri : lib3.Uri = new lib3.Uri.file('test/base');
    let testResolvers : core.DartList<any> = new core.DartList.literal(new bare.createInstance(any,null,resourceProvider));
    var createPackageMap : (base : lib3.Uri,configFileContents : string) => any = (base : lib3.Uri,configFileContents : string) : any =>  {
        let bytes : core.DartList<number> = convert.properties.UTF8.encode(configFileContents);
        let map : core.DartMap<string,lib3.Uri> = null /*topLevl*/.parse(bytes,base);
        return new bare.createInstance(any,null,map);
    };
    var getPackageMap : (config : string) => core.DartMap<string,core.DartList<any>> = (config : string) : core.DartMap<string,core.DartList<any>> =>  {
        let packages : any = createPackageMap(baseUri,config);
        let factory : any = new bare.createInstance(any,null,testResolvers,packages);
        return factory.packageMap;
    };
    var resolvePackageUri : (_namedArguments? : {uri? : string,config? : string,containingSource? : any,customResolver? : any}) => string = (_namedArguments? : {uri? : string,config? : string,containingSource? : any,customResolver? : any}) : string =>  {
        let {uri,config,containingSource,customResolver} = Object.assign({
        }, _namedArguments );
        let packages : any = createPackageMap(baseUri,config);
        let resolvers : core.DartList<any> = testResolvers.toList();
        if (customResolver != null) {
            resolvers.add(customResolver);
        }
        let factory : any = new bare.createInstance(any,null,resolvers,packages);
        expect(AnalysisEngine.instance.logger,Logger.NULL);
        let logger = new lib5.TestLogger();
        AnalysisEngine.instance.logger = logger;
        try {
            let source : any = factory.resolveUri(containingSource,uri);
            expect(logger.log,new core.DartList.literal());
            return source != null ? source.fullName : null;
        } finally {
            AnalysisEngine.instance.logger = Logger.NULL;
        }
    };
    var restorePackageUri : (_namedArguments? : {source? : any,config? : string,customResolver? : any}) => lib3.Uri = (_namedArguments? : {source? : any,config? : string,customResolver? : any}) : lib3.Uri =>  {
        let {source,config,customResolver} = Object.assign({
        }, _namedArguments );
        let packages : any = createPackageMap(baseUri,config);
        let resolvers : core.DartList<any> = testResolvers.toList();
        if (customResolver != null) {
            resolvers.add(customResolver);
        }
        let factory : any = new bare.createInstance(any,null,resolvers,packages);
        return factory.restoreUri(source);
    };
    group('SourceFactoryTest',() =>  {
        group('package mapping',() =>  {
            group('resolveUri',() =>  {
                test('URI in mapping',() =>  {
                    let uri : string = resolvePackageUri({
                        config : 'unittest:file:///home/somebody/.pub/cache/unittest-0.9.9/lib/\nasync:file:///home/somebody/.pub/cache/async-1.1.0/lib/\nquiver:file:///home/somebody/.pub/cache/quiver-1.2.1/lib\n',uri : 'package:unittest/unittest.dart'});
                    expect(uri,equals('/home/somebody/.pub/cache/unittest-0.9.9/lib/unittest.dart'));
                });
                test('URI in mapping (no scheme)',() =>  {
                    let uri : string = resolvePackageUri({
                        config : 'unittest:/home/somebody/.pub/cache/unittest-0.9.9/lib/\nasync:/home/somebody/.pub/cache/async-1.1.0/lib/\nquiver:/home/somebody/.pub/cache/quiver-1.2.1/lib\n',uri : 'package:unittest/unittest.dart'});
                    expect(uri,equals('/home/somebody/.pub/cache/unittest-0.9.9/lib/unittest.dart'));
                });
                test('URI not in mapping',() =>  {
                    let uri : string = resolvePackageUri({
                        config : 'unittest:/home/somebody/.pub/cache/unittest-0.9.9/lib/',uri : 'package:foo/foo.dart'});
                    expect(uri,isNull);
                });
                test('Non-package URI',() =>  {
                    let testResolver = new CustomUriResolver({
                        uriPath : 'test_uri'});
                    let uri : string = resolvePackageUri({
                        config : 'unittest:/home/somebody/.pub/cache/unittest-0.9.9/lib/',uri : 'custom:custom.dart',customResolver : testResolver});
                    expect(uri,testResolver.uriPath);
                });
                test('Bad package URI',() =>  {
                    let uri : string = resolvePackageUri({
                        config : '',uri : 'package:foo'});
                    expect(uri,isNull);
                });
                test('Invalid URI',() =>  {
                    expect(() =>  {
                        return resolvePackageUri({
                            config : 'foo:<:&%>',uri : 'package:foo/bar.dart'});
                    },throwsA(new bare.createInstance(any,null)));
                });
                test('Valid URI that cannot be further resolved',() =>  {
                    let uri : string = resolvePackageUri({
                        config : 'foo:http://www.google.com',uri : 'package:foo/bar.dart'});
                    expect(uri,isNull);
                });
                test('Relative URIs',() =>  {
                    let containingSource : any = createSource({
                        path : '/foo/bar/baz/foo.dart',uri : 'package:foo/foo.dart'});
                    let uri : string = resolvePackageUri({
                        config : 'foo:/foo/bar/baz',uri : 'bar.dart',containingSource : containingSource});
                    expect(uri,isNotNull);
                    expect(uri,equals('/foo/bar/baz/bar.dart'));
                });
            });
            group('restoreUri',() =>  {
                test('URI in mapping',() =>  {
                    let uri : lib3.Uri = restorePackageUri({
                        config : 'unittest:/home/somebody/.pub/cache/unittest-0.9.9/lib/\nasync:/home/somebody/.pub/cache/async-1.1.0/lib/\nquiver:/home/somebody/.pub/cache/quiver-1.2.1/lib\n',source : new bare.createInstance(any,null,resourceProvider.getFile('/home/somebody/.pub/cache/unittest-0.9.9/lib/unittest.dart'))});
                    expect(uri,isNotNull);
                    expect(uri.toString(),equals('package:unittest/unittest.dart'));
                });
            });
            group('packageMap',() =>  {
                test('non-file URIs filtered',() =>  {
                    let map : core.DartMap<string,core.DartList<any>> = getPackageMap('quiver:/home/somebody/.pub/cache/quiver-1.2.1/lib\nfoo:http://www.google.com\n');
                    expect(map.keys,unorderedEquals(new core.DartList.literal('quiver')));
                });
            });
        });
    });
    group('URI utils',() =>  {
        group('URI',() =>  {
            test('startsWith',() =>  {
                expect(null /*topLevl*/.startsWith(lib3.Uri.parse('/foo/bar/'),lib3.Uri.parse('/foo/')),isTrue);
                expect(null /*topLevl*/.startsWith(lib3.Uri.parse('/foo/bar/'),lib3.Uri.parse('/foo/bar/')),isTrue);
                expect(null /*topLevl*/.startsWith(lib3.Uri.parse('/foo/bar'),lib3.Uri.parse('/foo/b')),isFalse);
                expect(null /*topLevl*/.startsWith(lib3.Uri.parse('/foo/bar'),lib3.Uri.parse('')),isFalse);
                expect(null /*topLevl*/.startsWith(lib3.Uri.parse(''),lib3.Uri.parse('/foo/bar')),isFalse);
            });
        });
    });
};
export namespace AbsoluteUriResolver {
    export type Constructors = 'AbsoluteUriResolver';
    export type Interface = Omit<AbsoluteUriResolver, Constructors>;
}
@DartClass
export class AbsoluteUriResolver extends any {
    resourceProvider : any;

    constructor(resourceProvider : any) {
    }
    @defaultConstructor
    AbsoluteUriResolver(resourceProvider : any) {
        this.resourceProvider = resourceProvider;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib3.Uri,actualUri? : lib3.Uri) : any {
        return new bare.createInstance(any,null,this.resourceProvider.getFile(this.resourceProvider.pathContext.fromUri(uri)),actualUri);
    }
}

export namespace CustomUriResolver {
    export type Constructors = 'CustomUriResolver';
    export type Interface = Omit<CustomUriResolver, Constructors>;
}
@DartClass
export class CustomUriResolver extends any {
    uriPath : string;

    constructor(_namedArguments? : {uriPath? : string}) {
    }
    @defaultConstructor
    CustomUriResolver(_namedArguments? : {uriPath? : string}) {
        let {uriPath} = Object.assign({
        }, _namedArguments );
        this.uriPath = uriPath;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib3.Uri,actualUri? : lib3.Uri) : any {
        return createSource({
            path : this.uriPath});
    }
}

export namespace SourceFactoryTest {
    export type Constructors = 'SourceFactoryTest';
    export type Interface = Omit<SourceFactoryTest, Constructors>;
}
@DartClass
export class SourceFactoryTest {
    resourceProvider : any;

    test_creation() : void {
        expect(new bare.createInstance(any,null,new core.DartList.literal()),isNotNull);
    }
    test_fromEncoding_invalidUri() : void {
        let factory : any = new bare.createInstance(any,null,new core.DartList.literal());
        expect(() =>  {
            return factory.fromEncoding("<:&%>");
        },throwsArgumentError);
    }
    test_fromEncoding_noResolver() : void {
        let factory : any = new bare.createInstance(any,null,new core.DartList.literal());
        expect(() =>  {
            return factory.fromEncoding("foo:/does/not/exist.dart");
        },throwsArgumentError);
    }
    test_fromEncoding_valid() : void {
        let encoding : string = "file:///does/not/exist.dart";
        let factory : any = new bare.createInstance(any,null,new core.DartList.literal(new UriResolver_SourceFactoryTest_test_fromEncoding_valid(encoding)));
        expect(factory.fromEncoding(encoding),isNotNull);
    }
    test_resolveUri_absolute() : void {
        let resolver : UriResolver_absolute = new UriResolver_absolute();
        let factory : any = new bare.createInstance(any,null,new core.DartList.literal(resolver));
        factory.resolveUri(null,"dart:core");
        expect(resolver.invoked,isTrue);
    }
    test_resolveUri_nonAbsolute_absolute() : void {
        let factory : any = new bare.createInstance(any,null,new core.DartList.literal(new AbsoluteUriResolver(this.resourceProvider)));
        let absolutePath : string = "/does/not/matter.dart";
        let containingSource : any = new bare.createInstance(any,null,this.resourceProvider.getFile("/does/not/exist.dart"));
        let result : any = factory.resolveUri(containingSource,absolutePath);
        expect(result.fullName,FileUtilities2.createFile(absolutePath).getAbsolutePath());
    }
    test_resolveUri_nonAbsolute_relative() : void {
        let factory : any = new bare.createInstance(any,null,new core.DartList.literal(new AbsoluteUriResolver(this.resourceProvider)));
        let containingSource : any = new bare.createInstance(any,null,this.resourceProvider.getFile("/does/not/have.dart"));
        let result : any = factory.resolveUri(containingSource,"exist.dart");
        expect(result.fullName,FileUtilities2.createFile("/does/not/exist.dart").getAbsolutePath());
    }
    test_resolveUri_nonAbsolute_relative_package() : void {
        let provider : any = new bare.createInstance(any,null);
        let context : lib6.Context = provider.pathContext;
        let packagePath : string = context.joinAll(new core.DartList.literal(context.separator,'path','to','package'));
        let libPath : string = context.joinAll(new core.DartList.literal(packagePath,'lib'));
        let dirPath : string = context.joinAll(new core.DartList.literal(libPath,'dir'));
        let firstPath : string = context.joinAll(new core.DartList.literal(dirPath,'first.dart'));
        let secondPath : string = context.joinAll(new core.DartList.literal(dirPath,'second.dart'));
        provider.newFolder(packagePath);
        let libFolder : any = provider.newFolder(libPath);
        provider.newFolder(dirPath);
        let firstFile : any = provider.newFile(firstPath,'');
        provider.newFile(secondPath,'');
        let resolver : any = new bare.createInstance(any,null,provider,new core.DartMap.literal([
            ['package',new core.DartList.literal(libFolder)]]));
        let factory : any = new bare.createInstance(any,null,new core.DartList.literal(resolver));
        let librarySource : any = firstFile.createSource(lib3.Uri.parse('package:package/dir/first.dart'));
        let result : any = factory.resolveUri(librarySource,'second.dart');
        expect(result,isNotNull);
        expect(result.fullName,secondPath);
        expect(result.uri.toString(),'package:package/dir/second.dart');
    }
    test_restoreUri() : void {
        let file1 : any = this.resourceProvider.getFile("/some/file1.dart");
        let file2 : any = this.resourceProvider.getFile("/some/file2.dart");
        let source1 : any = new bare.createInstance(any,null,file1);
        let source2 : any = new bare.createInstance(any,null,file2);
        let expected1 : lib3.Uri = lib3.Uri.parse("file:///my_file.dart");
        let factory : any = new bare.createInstance(any,null,new core.DartList.literal(new UriResolver_restoreUri(source1,expected1)));
        expect(factory.restoreUri(source1),same(expected1));
        expect(factory.restoreUri(source2),same(null));
    }
    constructor() {
    }
    @defaultConstructor
    SourceFactoryTest() {
        this.resourceProvider = new bare.createInstance(any,null);
    }
}

export namespace UriResolver_absolute {
    export type Constructors = 'UriResolver_absolute';
    export type Interface = Omit<UriResolver_absolute, Constructors>;
}
@DartClass
export class UriResolver_absolute extends any {
    invoked : boolean;

    constructor() {
    }
    @defaultConstructor
    UriResolver_absolute() {
        this.invoked = false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib3.Uri,actualUri? : lib3.Uri) : any {
        this.invoked = true;
        return null;
    }
}

export namespace UriResolver_restoreUri {
    export type Constructors = 'UriResolver_restoreUri';
    export type Interface = Omit<UriResolver_restoreUri, Constructors>;
}
@DartClass
export class UriResolver_restoreUri extends any {
    source1 : any;

    expected1 : lib3.Uri;

    constructor(source1 : any,expected1 : lib3.Uri) {
    }
    @defaultConstructor
    UriResolver_restoreUri(source1 : any,expected1 : lib3.Uri) {
        this.source1 = source1;
        this.expected1 = expected1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib3.Uri,actualUri? : lib3.Uri) : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    restoreAbsolute(source : any) : lib3.Uri {
        if (core.identical(source,this.source1)) {
            return this.expected1;
        }
        return null;
    }
}

export namespace UriResolver_SourceFactoryTest_test_fromEncoding_valid {
    export type Constructors = 'UriResolver_SourceFactoryTest_test_fromEncoding_valid';
    export type Interface = Omit<UriResolver_SourceFactoryTest_test_fromEncoding_valid, Constructors>;
}
@DartClass
export class UriResolver_SourceFactoryTest_test_fromEncoding_valid extends any {
    encoding : string;

    constructor(encoding : string) {
    }
    @defaultConstructor
    UriResolver_SourceFactoryTest_test_fromEncoding_valid(encoding : string) {
        this.encoding = encoding;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib3.Uri,actualUri? : lib3.Uri) : any {
        if (uri.toString() == this.encoding) {
            return new lib5.TestSource();
        }
        return null;
    }
}

export class properties {
}
