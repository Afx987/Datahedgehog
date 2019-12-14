/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/gn_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(GnWorkspaceTest);
    });
};
export namespace _BaseTest {
    export type Constructors = '_BaseTest';
    export type Interface = Omit<_BaseTest, Constructors>;
}
@DartClass
export class _BaseTest {
    provider : any;

    _p(path : string) : string {
        return this.provider.convertPath(path);
    }
    constructor() {
    }
    @defaultConstructor
    _BaseTest() {
        this.provider = new bare.createInstance(any,null);
    }
}

export namespace GnWorkspaceTest {
    export type Constructors = _BaseTest.Constructors | 'GnWorkspaceTest';
    export type Interface = Omit<GnWorkspaceTest, Constructors>;
}
@DartClass
export class GnWorkspaceTest extends _BaseTest {
    test_find_notAbsolute() : void {
        expect(() =>  {
            return GnWorkspace.find(this.provider,this._p('not_absolute'));
        },throwsArgumentError);
    }
    test_find_noJiriRoot() : void {
        this.provider.newFolder(this._p('/workspace'));
        let workspace : any = GnWorkspace.find(this.provider,this._p('/workspace'));
        expect(workspace,isNull);
    }
    test_find_withRoot() : void {
        this.provider.newFolder(this._p('/workspace/.jiri_root'));
        this.provider.newFolder(this._p('/workspace/some/code'));
        this.provider.newFile(this._p('/workspace/some/code/pubspec.yaml'),'');
        this.provider.newFile(this._p('/workspace/out/debug-x87_128/gen/some/code/foo.packages'),'');
        let workspace : any = GnWorkspace.find(this.provider,this._p('/workspace/some/code'));
        expect(workspace,isNotNull);
        expect(workspace.root,this._p('/workspace/some/code'));
    }
    test_find_inHost() : void {
        this.provider.newFolder(this._p('/workspace/.jiri_root'));
        this.provider.newFolder(this._p('/workspace/some/code'));
        this.provider.newFile(this._p('/workspace/some/code/pubspec.yaml'),'');
        this.provider.newFile(this._p('/workspace/out/debug-x87_128/host_y32/gen/some/code/foo.packages'),'');
        let workspace : any = GnWorkspace.find(this.provider,this._p('/workspace/some/code'));
        expect(workspace,isNotNull);
        expect(workspace.root,this._p('/workspace/some/code'));
    }
    test_packages() : void {
        this.provider.newFolder(this._p('/workspace/.jiri_root'));
        this.provider.newFolder(this._p('/workspace/some/code'));
        this.provider.newFile(this._p('/workspace/some/code/pubspec.yaml'),'');
        let packageLocation : string = this._p('/workspace/this/is/the/package');
        let packageUri : lib3.Uri = this.provider.pathContext.toUri(packageLocation);
        this.provider.newFile(this._p('/workspace/out/debug-x87_128/gen/some/code/foo.packages'),`flutter:${packageUri}`);
        let workspace : any = GnWorkspace.find(this.provider,this._p('/workspace/some/code'));
        expect(workspace,isNotNull);
        expect(workspace.root,this._p('/workspace/some/code'));
        expect(workspace.packageMap.length,1);
        expect(op(Op.INDEX,op(Op.INDEX,workspace.packageMap,'flutter'),0).path,packageLocation);
    }
    test_packages_multipleFiles() : void {
        this.provider.newFolder(this._p('/workspace/.jiri_root'));
        this.provider.newFolder(this._p('/workspace/some/code'));
        this.provider.newFile(this._p('/workspace/some/code/pubspec.yaml'),'');
        let packageOneLocation : string = this._p('/workspace/this/is/the/package');
        let packageOneUri : lib3.Uri = this.provider.pathContext.toUri(packageOneLocation);
        this.provider.newFile(this._p('/workspace/out/debug-x87_128/gen/some/code/foo.packages'),`flutter:${packageOneUri}`);
        let packageTwoLocation : string = this._p('/workspace/this/is/the/other/package');
        let packageTwoUri : lib3.Uri = this.provider.pathContext.toUri(packageTwoLocation);
        this.provider.newFile(this._p('/workspace/out/debug-x87_128/gen/some/code/foo_test.packages'),`rettluf:${packageTwoUri}`);
        let workspace : any = GnWorkspace.find(this.provider,this._p('/workspace/some/code'));
        expect(workspace,isNotNull);
        expect(workspace.root,this._p('/workspace/some/code'));
        expect(workspace.packageMap.length,2);
        expect(op(Op.INDEX,op(Op.INDEX,workspace.packageMap,'flutter'),0).path,packageOneLocation);
        expect(op(Op.INDEX,op(Op.INDEX,workspace.packageMap,'rettluf'),0).path,packageTwoLocation);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GnWorkspaceTest() {
    }
}

export class properties {
}
