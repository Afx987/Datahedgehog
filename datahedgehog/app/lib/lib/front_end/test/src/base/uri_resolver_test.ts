/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/src/base/uri_resolver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/src/context";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "@dart2ts.packages/path/lib/path";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(UriResolverTestNative);
        defineReflectiveTests(UriResolverTestPosix);
        defineReflectiveTests(UriResolverTestWindows);
    });
};
export namespace UriResolverTest {
    export type Constructors = 'UriResolverTest';
    export type Interface = Omit<UriResolverTest, Constructors>;
}
@DartClass
export class UriResolverTest {
    @AbstractProperty
    get pathContext() : lib3.Context{ throw 'abstract'}
    test_badScheme() : void {
        this._expectResolutionUri('foo:bar/baz.dart',lib4.Uri.parse('foo:bar/baz.dart'));
    }
    test_dart() : void {
        this._expectResolution('dart:core',this._p('sdk/lib/core/core.dart'));
        this._expectResolution('dart:async',this._p('sdk/lib/async/async.dart'));
    }
    test_dartLeadingSlash() : void {
        this._expectResolution('dart:/core',null);
    }
    test_dartLeadingSlash2() : void {
        this._expectResolution('dart://core',null);
    }
    test_dartLeadingSlash3() : void {
        this._expectResolution('dart:///core',null);
    }
    test_dartPart() : void {
        this._expectResolution('dart:core/bool.dart',this._p('sdk/lib/core/bool.dart'));
    }
    test_file() : void {
        this._expectResolution(this._fileUri('foo.dart'),this._p('foo.dart'));
    }
    test_fileLongPath() : void {
        this._expectResolution(this._fileUri('foo/bar.dart'),this._p('foo/bar.dart'));
    }
    test_noSchemeAbsolute() : void {
        this._expectResolutionUri('/foo.dart',lib4.Uri.parse('/foo.dart'));
    }
    test_noSchemeRelative() : void {
        this._expectResolution('foo.dart','foo.dart');
    }
    test_package() : void {
        this._expectResolution('package:foo/bar.dart',this._p('packages/foo/lib/bar.dart'));
        this._expectResolution('package:bar/baz.dart',this._p('packages/bar/lib/baz.dart'));
    }
    test_packageLeadingSlash() : void {
        this._expectResolution('package:/foo',null);
    }
    test_packageLeadingSlash2() : void {
        this._expectResolution('package://foo',null);
    }
    test_packageLeadingSlash3() : void {
        this._expectResolution('package:///foo',null);
    }
    test_packageLongPath() : void {
        this._expectResolution('package:foo/bar/baz.dart',this._p('packages/foo/lib/bar/baz.dart'));
    }
    test_packageNoPath() : void {
        this._expectResolution('package:foo/',this._p('packages/foo/lib/'));
    }
    test_packageNoSlash() : void {
        this._expectResolution('package:foo',null);
    }
    test_packageUnmatchedName() : void {
        this._expectResolution('package:doesNotExist/foo.dart',null);
    }
    _expectResolution(uriString : string,expectedResult : string) : void {
        this._expectResolutionUri(uriString,expectedResult == null ? null : this.pathContext.toUri(expectedResult));
    }
    _expectResolutionUri(uriString : string,expectedResult : lib4.Uri) : void {
        let packages = new core.DartMap.literal([
            ['foo',this._u('packages/foo/lib/')],
            ['bar',this._u('packages/bar/lib/')]]);
        let sdkLibraries = new core.DartMap.literal([
            ['core',this._u('sdk/lib/core/core.dart')],
            ['async',this._u('sdk/lib/async/async.dart')]]);
        let uriResolver = new bare.createInstance(any,null,packages,sdkLibraries);
        expect(uriResolver.resolve(lib4.Uri.parse(uriString)),expectedResult);
    }
    _fileUri(pathPart : string) : string {
        if (this.pathContext.separator == '/') {
            return `file:///${pathPart}`;
        }else {
            return `file:///C:/${pathPart}`;
        }
    }
    _p(posixPath : string) : string {
        if (!new core.DartString(posixPath).startsWith('/')) posixPath = `/${posixPath}`;
        if (this.pathContext.separator == '/') return posixPath;
        return `C:${new core.DartString(posixPath).replaceAll('/',this.pathContext.separator)}`;
    }
    _u(posixPath : string) : lib4.Uri {
        return this.pathContext.toUri(this._p(posixPath));
    }
    constructor() {
    }
    @defaultConstructor
    UriResolverTest() {
    }
}

export namespace UriResolverTestNative {
    export type Constructors = UriResolverTest.Constructors | 'UriResolverTestNative';
    export type Interface = Omit<UriResolverTestNative, Constructors>;
}
@DartClass
export class UriResolverTestNative extends UriResolverTest {
    pathContext : lib3.Context;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UriResolverTestNative() {
        this.pathContext = lib5.properties.context;
    }
}

export namespace UriResolverTestPosix {
    export type Constructors = UriResolverTest.Constructors | 'UriResolverTestPosix';
    export type Interface = Omit<UriResolverTestPosix, Constructors>;
}
@DartClass
export class UriResolverTestPosix extends UriResolverTest {
    pathContext : lib3.Context;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UriResolverTestPosix() {
        this.pathContext = lib5.properties.posix;
    }
}

export namespace UriResolverTestWindows {
    export type Constructors = UriResolverTest.Constructors | 'UriResolverTestWindows';
    export type Interface = Omit<UriResolverTestWindows, Constructors>;
}
@DartClass
export class UriResolverTestWindows extends UriResolverTest {
    pathContext : lib3.Context;

    test_fileWindowsLocal() : void {
        this._expectResolution('file:///C:/foo/bar.dart','C:\foo\bar.dart');
    }
    test_fileWindowsUNC() : void {
        this._expectResolution('file://computer/directory/foo.dart','\\computer\directory\foo.dart');
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UriResolverTestWindows() {
        this.pathContext = lib5.properties.windows;
    }
}

export class properties {
}
