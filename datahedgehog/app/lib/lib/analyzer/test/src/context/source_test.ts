/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/context/source_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_context";
import * as lib4 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SourceFactoryImplTest);
    });
};
export namespace SourceFactoryImplTest {
    export type Constructors = lib3.AbstractContextTest.Constructors | 'SourceFactoryImplTest';
    export type Interface = Omit<SourceFactoryImplTest, Constructors>;
}
@DartClass
export class SourceFactoryImplTest extends lib3.AbstractContextTest {
    test_restoreUri() : void {
        let libPath : string = this.resourceProvider.convertPath('/pkgs/somepkg/lib/');
        let libUri : lib4.Uri = this.resourceProvider.getFolder(libPath).toUri();
        let packageUriMap : core.DartMap<string,lib4.Uri> = new core.DartMap.literal([
            ['foo',libUri]]);
        let sourceFactory : any = new bare.createInstance(any,null,new core.DartList.literal<any>(new bare.createInstance(any,null,this.resourceProvider)),new _MockPackages(packageUriMap));
        let libSource : any = this.newSource('/pkgs/somepkg/lib');
        let uri : lib4.Uri = sourceFactory.restoreUri(libSource);
        try {
            expect(uri,lib4.Uri.parse('package:foo/'));
        } catch (__error__) {

            {
                let e = __error__;
                core.print('=== debug info ===');
                core.print(`libPath: ${libPath}`);
                core.print(`libUri: ${libUri}`);
                core.print(`libSource: ${((t)=>(!!t)?t.fullName:null)(libSource)}`);
                /* TODO (RethrowExpressionImpl): rethrow */;
            }
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SourceFactoryImplTest() {
    }
}

export namespace _MockPackages {
    export type Constructors = '_MockPackages';
    export type Interface = Omit<_MockPackages, Constructors>;
}
@DartClass
@Implements(any)
export class _MockPackages implements any.Interface {
    map : core.DartMap<string,lib4.Uri>;

    constructor(map : core.DartMap<string,lib4.Uri>) {
    }
    @defaultConstructor
    _MockPackages(map : core.DartMap<string,lib4.Uri>) {
        this.map = map;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get packages() : core.DartIterable<string> {
        return this.map.keys;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    asMap() : core.DartMap<string,lib4.Uri> {
        return this.map;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolve(packageUri : lib4.Uri,_namedArguments? : {notFound? : (packageUri : lib4.Uri) => lib4.Uri}) : lib4.Uri {
        let {notFound} = Object.assign({
        }, _namedArguments );
        fail('Unexpected invocation of resolve');
        return null;
    }
}

export class properties {
}
