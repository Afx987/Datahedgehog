/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/resource_utils.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";
import * as lib4 from "@dart2ts.packages/path/lib/src/context";

export var expectAbsolutePosixPath : (posixPath : string) => void = (posixPath : string) : void =>  {
    expect(posixPath,startsWith('/'),{
        reason : `Expected absolute posix path, but found ${posixPath}`});
};
export var expectPosixPath : (posixPath : string) => void = (posixPath : string) : void =>  {
    expect(new core.DartString(posixPath).indexOf('\'),-1,{
        reason : `Expected posix path, but found ${posixPath}`});
};
export var posixToOSFileUri : (posixPath : string) => string = (posixPath : string) : string =>  {
    expectPosixPath(posixPath);
    return properties.isWindows ? `file:///C:${posixPath}` : `file://${posixPath}`;
};
export var posixToOSPath : (posixPath : string) => string = (posixPath : string) : string =>  {
    expectPosixPath(posixPath);
    if (properties.isWindows) {
        let windowsPath : string = new core.DartString(posixPath).replaceAll('/','\');
        if (new core.DartString(posixPath).startsWith('/')) {
            return `C:${windowsPath}`;
        }
        return windowsPath;
    }
    return posixPath;
};
export namespace TestPathTranslator {
    export type Constructors = 'TestPathTranslator';
    export type Interface = Omit<TestPathTranslator, Constructors>;
}
@DartClass
export class TestPathTranslator {
    _provider : any;

    constructor(_provider : any) {
    }
    @defaultConstructor
    TestPathTranslator(_provider : any) {
        this._provider = _provider;
    }
    getResource(posixPath : string) : any {
        return this._provider.getResource(posixToOSPath(posixPath));
    }
    newFile(posixPath : string,content : string) : any {
        return this._provider.newFile(posixToOSPath(posixPath),content);
    }
    newFileWithBytes(posixPath : string,bytes : core.DartList<number>) : any {
        return this._provider.newFileWithBytes(posixToOSPath(posixPath),bytes);
    }
    newFolder(posixPath : string) : any {
        return this._provider.newFolder(posixToOSPath(posixPath));
    }
}

export namespace TestResourceProvider {
    export type Constructors = 'TestResourceProvider';
    export type Interface = Omit<TestResourceProvider, Constructors>;
}
@DartClass
@Implements(any)
export class TestResourceProvider implements any.Interface {
    _provider : any;

    constructor(_provider : any) {
    }
    @defaultConstructor
    TestResourceProvider(_provider : any) {
        this._provider = _provider;
        expect(this._provider.absolutePathContext.separator,properties.isWindows ? '\' : '/');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get absolutePathContext() : any {
        return this._provider.absolutePathContext;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get pathContext() : lib4.Context {
        return this._provider.pathContext;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getFile(path : string) : any {
        return this._provider.getFile(this._assertPath(path));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getFolder(path : string) : any {
        return this._provider.getFolder(this._assertPath(path));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getModificationTimes(sources : core.DartList<any>) : async.Future<core.DartList<number>> { 
        return new async.Future.fromPromise(( async () =>  {
            return sources.map((source : any) =>  {
                return 0;
            }).toList();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getResource(path : string) : any {
        return this._provider.getResource(this._assertPath(path));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getStateLocation(pluginId : string) : any {
        return this._provider.getStateLocation(pluginId);
    }
    _assertPath(path : string) : string {
        if (properties.isWindows) {
            if (new core.DartString(path).contains('/')) {
                fail(`Expected windows path, but found: ${path}`);
            }
        }else {
            if (new core.DartString(path).contains('\')) {
                fail(`Expected posix path, but found: ${path}`);
            }
        }
        return path;
    }
}

export class properties {
    static get isWindows() : boolean {
        return op(Op.EQUALS,lib3.Style.platform,lib3.Style.windows);
    }
}
