/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/bazel_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(BazelFileUriResolverTest);
        defineReflectiveTests(BazelPackageUriResolverTest);
        defineReflectiveTests(BazelWorkspaceTest);
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

export namespace _MockSource {
    export type Constructors = '_MockSource';
    export type Interface = Omit<_MockSource, Constructors>;
}
@DartClass
@Implements(any)
export class _MockSource extends any implements any.Interface {
    fullName : string;

    constructor(fullName : string) {
    }
    @defaultConstructor
    _MockSource(fullName : string) {
        this.fullName = fullName;
    }
}

export namespace BazelFileUriResolverTest {
    export type Constructors = _BaseTest.Constructors | 'BazelFileUriResolverTest';
    export type Interface = Omit<BazelFileUriResolverTest, Constructors>;
}
@DartClass
export class BazelFileUriResolverTest extends _BaseTest {
    workspace : any;

    resolver : any;

    setUp() : void {
        this.provider.newFile(this._p('/workspace/WORKSPACE'),'');
        this.provider.newFolder(this._p('/workspace/bazel-genfiles'));
        this.workspace = BazelWorkspace.find(this.provider,this._p('/workspace'));
        this.resolver = new bare.createInstance(any,null,this.workspace);
        this.provider.newFile(this._p('/workspace/test.dart'),'');
        this.provider.newFile(this._p('/workspace/bazel-bin/gen1.dart'),'');
        this.provider.newFile(this._p('/workspace/bazel-genfiles/gen2.dart'),'');
    }
    test_resolveAbsolute_doesNotExist() : void {
        let source : any = this._resolvePath('/workspace/foo.dart');
        expect(source,isNotNull);
        expect(source.exists(),isFalse);
        expect(source.fullName,this._p('/workspace/foo.dart'));
    }
    test_resolveAbsolute_file() : void {
        let source : any = this._resolvePath('/workspace/test.dart');
        expect(source,isNotNull);
        expect(source.exists(),isTrue);
        expect(source.fullName,this._p('/workspace/test.dart'));
    }
    test_resolveAbsolute_folder() : void {
        let source : any = this._resolvePath('/workspace');
        expect(source,isNotNull);
        expect(source.exists(),isFalse);
        expect(source.fullName,this._p('/workspace'));
    }
    test_resolveAbsolute_generated_file_exists_one() : void {
        let source : any = this._resolvePath('/workspace/gen1.dart');
        expect(source,isNotNull);
        expect(source.exists(),isTrue);
        expect(source.fullName,this._p('/workspace/bazel-bin/gen1.dart'));
    }
    test_resolveAbsolute_generated_file_exists_two() : void {
        let source : any = this._resolvePath('/workspace/gen2.dart');
        expect(source,isNotNull);
        expect(source.exists(),isTrue);
        expect(source.fullName,this._p('/workspace/bazel-genfiles/gen2.dart'));
    }
    test_resolveAbsolute_notFile_dartUri() : void {
        let uri : lib3.Uri = new lib3.Uri({
            scheme : 'dart',path : 'core'});
        let source : any = this.resolver.resolveAbsolute(uri);
        expect(source,isNull);
    }
    test_resolveAbsolute_notFile_httpsUri() : void {
        let uri : lib3.Uri = new lib3.Uri({
            scheme : 'https',path : '127.0.0.1/test.dart'});
        let source : any = this.resolver.resolveAbsolute(uri);
        expect(source,isNull);
    }
    test_restoreAbsolute() : void {
        let uri : lib3.Uri = this.provider.pathContext.toUri(this._p('/workspace/test.dart'));
        let source : any = this.resolver.resolveAbsolute(uri);
        expect(source,isNotNull);
        expect(this.resolver.restoreAbsolute(source),uri);
        expect(this.resolver.restoreAbsolute(new bare.createInstance(any,null,source.fullName,null,null)),uri);
    }
    _resolvePath(absolutePosixPath : string) : any {
        let absolutePath : string = this.provider.convertPath(absolutePosixPath);
        let uri : lib3.Uri = this.provider.pathContext.toUri(absolutePath);
        return this.resolver.resolveAbsolute(uri);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BazelFileUriResolverTest() {
    }
}

export namespace BazelPackageUriResolverTest {
    export type Constructors = _BaseTest.Constructors | 'BazelPackageUriResolverTest';
    export type Interface = Omit<BazelPackageUriResolverTest, Constructors>;
}
@DartClass
export class BazelPackageUriResolverTest extends _BaseTest {
    workspace : any;

    resolver : any;

    test_resolveAbsolute_bin() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/','/workspace/my/foo/lib/foo1.dart','/workspace/bazel-bin/my/foo/lib/foo1.dart'));
        this._assertResolve('package:my.foo/foo1.dart','/workspace/bazel-bin/my/foo/lib/foo1.dart',{
            exists : true});
    }
    test_resolveAbsolute_bin_notInWorkspace() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/','/workspace/bazel-bin/my/foo/lib/foo1.dart'));
        this._assertResolve('package:my.foo/foo1.dart','/workspace/bazel-bin/my/foo/lib/foo1.dart',{
            exists : true});
    }
    test_resolveAbsolute_genfiles() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/','/workspace/my/foo/lib/foo1.dart','/workspace/bazel-genfiles/my/foo/lib/foo1.dart'));
        this._assertResolve('package:my.foo/foo1.dart','/workspace/bazel-genfiles/my/foo/lib/foo1.dart',{
            exists : true});
    }
    test_resolveAbsolute_genfiles_notInWorkspace() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/','/workspace/bazel-genfiles/my/foo/lib/foo1.dart'));
        this._assertResolve('package:my.foo/foo1.dart','/workspace/bazel-genfiles/my/foo/lib/foo1.dart',{
            exists : true});
    }
    test_resolveAbsolute_null_noSlash() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/'));
        let source : any = this.resolver.resolveAbsolute(lib3.Uri.parse('package:foo'));
        expect(source,isNull);
    }
    test_resolveAbsolute_null_notPackage() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/'));
        let source : any = this.resolver.resolveAbsolute(lib3.Uri.parse('dart:async'));
        expect(source,isNull);
    }
    test_resolveAbsolute_null_startsWithSlash() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/','/workspace/my/foo/lib/bar.dart'));
        let source : any = this.resolver.resolveAbsolute(lib3.Uri.parse('package:/foo/bar.dart'));
        expect(source,isNull);
    }
    test_resolveAbsolute_readonly_bin() : void {
        this._addResources(new core.DartList.literal('/Users/user/test/READONLY/prime/','/Users/user/test/READONLY/prime/my/foo/lib/foo1.dart','/Users/user/test/prime/bazel-genfiles/','/Users/user/test/prime/my/module/','/Users/user/test/prime/bazel-bin/my/foo/lib/foo1.dart'),{
            workspacePath : '/Users/user/test/prime/my/module'});
        this._assertResolve('package:my.foo/foo1.dart','/Users/user/test/prime/bazel-bin/my/foo/lib/foo1.dart',{
            exists : true});
    }
    test_resolveAbsolute_readonly_bin_notInWorkspace() : void {
        this._addResources(new core.DartList.literal('/Users/user/test/READONLY/prime/','/Users/user/test/prime/bazel-genfiles/','/Users/user/test/prime/my/module/','/Users/user/test/prime/bazel-bin/my/foo/lib/foo1.dart'),{
            workspacePath : '/Users/user/test/prime/my/module'});
        this._assertResolve('package:my.foo/foo1.dart','/Users/user/test/prime/bazel-bin/my/foo/lib/foo1.dart',{
            exists : true});
    }
    test_resolveAbsolute_readonly_genfiles() : void {
        this._addResources(new core.DartList.literal('/Users/user/test/READONLY/prime/','/Users/user/test/READONLY/prime/my/foo/lib/foo1.dart','/Users/user/test/prime/bazel-genfiles/','/Users/user/test/prime/my/module/','/Users/user/test/prime/bazel-genfiles/my/foo/lib/foo1.dart'),{
            workspacePath : '/Users/user/test/prime/my/module'});
        this._assertResolve('package:my.foo/foo1.dart','/Users/user/test/prime/bazel-genfiles/my/foo/lib/foo1.dart',{
            exists : true});
    }
    test_resolveAbsolute_readonly_genfiles_notInWorkspace() : void {
        this._addResources(new core.DartList.literal('/Users/user/test/READONLY/prime/','/Users/user/test/prime/bazel-genfiles/','/Users/user/test/prime/my/module/','/Users/user/test/prime/bazel-genfiles/my/foo/lib/foo1.dart'),{
            workspacePath : '/Users/user/test/prime/my/module'});
        this._assertResolve('package:my.foo/foo1.dart','/Users/user/test/prime/bazel-genfiles/my/foo/lib/foo1.dart',{
            exists : true});
    }
    test_resolveAbsolute_readonly_thirdParty_bin() : void {
        this._addResources(new core.DartList.literal('/Users/user/test/READONLY/prime/','/Users/user/test/READONLY/prime/third_party/dart/foo/lib/foo1.dart','/Users/user/test/prime/bazel-genfiles/','/Users/user/test/prime/my/module/','/Users/user/test/prime/bazel-bin/third_party/dart/foo/lib/foo1.dart'),{
            workspacePath : '/Users/user/test/prime/my/module'});
        this._assertResolve('package:foo/foo1.dart','/Users/user/test/prime/bazel-bin/third_party/dart/foo/lib/foo1.dart',{
            exists : true});
    }
    test_resolveAbsolute_readonly_thirdParty_genfiles() : void {
        this._addResources(new core.DartList.literal('/Users/user/test/READONLY/prime/','/Users/user/test/READONLY/prime/third_party/dart/foo/lib/foo1.dart','/Users/user/test/prime/bazel-genfiles/','/Users/user/test/prime/my/module/','/Users/user/test/prime/bazel-genfiles/third_party/dart/foo/lib/foo1.dart'),{
            workspacePath : '/Users/user/test/prime/my/module'});
        this._assertResolve('package:foo/foo1.dart','/Users/user/test/prime/bazel-genfiles/third_party/dart/foo/lib/foo1.dart',{
            exists : true});
    }
    test_resolveAbsolute_readonly_thirdParty_workspace_doesNotExist() : void {
        this._addResources(new core.DartList.literal('/Users/user/test/READONLY/prime/','/Users/user/test/READONLY/prime/third_party/dart/foo/lib/foo1.dart','/Users/user/test/prime/bazel-genfiles/','/Users/user/test/prime/my/module/'),{
            workspacePath : '/Users/user/test/prime/my/module'});
        this._assertResolve('package:foo/foo2.dart','/Users/user/test/prime/third_party/dart/foo/lib/foo2.dart',{
            exists : false});
    }
    test_resolveAbsolute_readonly_thirdParty_workspace_exists() : void {
        this._addResources(new core.DartList.literal('/Users/user/test/READONLY/prime/','/Users/user/test/READONLY/prime/third_party/dart/foo/lib/foo1.dart','/Users/user/test/prime/bazel-genfiles/','/Users/user/test/prime/my/module/'),{
            workspacePath : '/Users/user/test/prime/my/module'});
        this._assertResolve('package:foo/foo1.dart','/Users/user/test/READONLY/prime/third_party/dart/foo/lib/foo1.dart',{
            exists : true});
    }
    test_resolveAbsolute_readonly_workspace_doesNotExist() : void {
        this._addResources(new core.DartList.literal('/Users/user/test/READONLY/prime/','/Users/user/test/prime/bazel-genfiles/','/Users/user/test/prime/my/module/'),{
            workspacePath : '/Users/user/test/prime/my/module'});
        this._assertResolve('package:my.foo/foo1.dart','/Users/user/test/prime/my/foo/lib/foo1.dart',{
            exists : false});
    }
    test_resolveAbsolute_readonly_workspace_exists() : void {
        this._addResources(new core.DartList.literal('/Users/user/test/READONLY/prime/','/Users/user/test/READONLY/prime/my/foo/lib/foo1.dart','/Users/user/test/prime/bazel-genfiles/','/Users/user/test/prime/my/module/'),{
            workspacePath : '/Users/user/test/prime/my/module'});
        this._assertResolve('package:my.foo/foo1.dart','/Users/user/test/READONLY/prime/my/foo/lib/foo1.dart',{
            exists : true});
    }
    test_resolveAbsolute_thirdParty_bin() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/','/workspace/third_party/dart/foo/lib/foo1.dart','/workspace/bazel-bin/third_party/dart/foo/lib/foo1.dart'));
        this._assertResolve('package:foo/foo1.dart','/workspace/bazel-bin/third_party/dart/foo/lib/foo1.dart',{
            exists : true});
    }
    test_resolveAbsolute_thirdParty_bin_notInWorkspace() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/','/workspace/bazel-bin/third_party/dart/foo/lib/foo1.dart'));
        this._assertResolve('package:foo/foo1.dart','/workspace/bazel-bin/third_party/dart/foo/lib/foo1.dart',{
            exists : true});
    }
    test_resolveAbsolute_thirdParty_doesNotExist() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/','/workspace/third_party/dart/foo/lib/foo1.dart'));
        this._assertResolve('package:foo/foo2.dart','/workspace/third_party/dart/foo/lib/foo2.dart',{
            exists : false});
    }
    test_resolveAbsolute_thirdParty_exists() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/','/workspace/third_party/dart/foo/lib/foo1.dart'));
        this._assertResolve('package:foo/foo1.dart','/workspace/third_party/dart/foo/lib/foo1.dart',{
            exists : true});
    }
    test_resolveAbsolute_thirdParty_genfiles() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/','/workspace/third_party/dart/foo/lib/foo1.dart','/workspace/bazel-genfiles/third_party/dart/foo/lib/foo1.dart'));
        this._assertResolve('package:foo/foo1.dart','/workspace/bazel-genfiles/third_party/dart/foo/lib/foo1.dart',{
            exists : true});
    }
    test_resolveAbsolute_thirdParty_genfiles_notInWorkspace() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/','/workspace/bazel-genfiles/third_party/dart/foo/lib/foo1.dart'));
        this._assertResolve('package:foo/foo1.dart','/workspace/bazel-genfiles/third_party/dart/foo/lib/foo1.dart',{
            exists : true});
    }
    test_resolveAbsolute_workspace_doesNotExist() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/'));
        this._assertResolve('package:my.foo/doesNotExist.dart','/workspace/my/foo/lib/doesNotExist.dart',{
            exists : false});
    }
    test_resolveAbsolute_workspace_exists() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/','/workspace/my/foo/lib/foo1.dart'));
        this._assertResolve('package:my.foo/foo1.dart','/workspace/my/foo/lib/foo1.dart',{
            exists : true});
    }
    test_restoreAbsolute_noPackageName_workspace() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/','/workspace/lib/foo1.dart','/workspace/foo/lib/foo2.dart'));
        this._assertRestore('/workspace/lib/foo1.dart',null);
        this._assertRestore('/workspace/foo/lib/foo2.dart',null);
    }
    test_restoreAbsolute_noPathInLib_bin() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/','/workspace/bazel-bin/my/foo/lib/foo1.dart'));
        this._assertRestore('/workspace/bazel-bin',null);
        this._assertRestore('/workspace/bazel-bin/my',null);
        this._assertRestore('/workspace/bazel-bin/my/foo',null);
        this._assertRestore('/workspace/bazel-bin/my/foo/lib',null);
    }
    test_restoreAbsolute_noPathInLib_genfiles() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/','/workspace/bazel-genfiles/my/foo/lib/foo1.dart'));
        this._assertRestore('/workspace/bazel-genfiles',null);
        this._assertRestore('/workspace/bazel-genfiles/my',null);
        this._assertRestore('/workspace/bazel-genfiles/my/foo',null);
        this._assertRestore('/workspace/bazel-genfiles/my/foo/lib',null);
    }
    test_restoreAbsolute_noPathInLib_workspace() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/','/workspace/my/foo/lib/foo1.dart'));
        this._assertRestore('/workspace',null);
        this._assertRestore('/workspace/my',null);
        this._assertRestore('/workspace/my/foo',null);
        this._assertRestore('/workspace/my/foo/lib',null);
    }
    test_restoreAbsolute_thirdPartyNotDart_workspace() : void {
        this._addResources(new core.DartList.literal('/workspace/WORKSPACE','/workspace/bazel-genfiles/','/workspace/third_party/something/lib/foo.dart'));
        this._assertRestore('/workspace/third_party/something/lib/foo.dart','package:third_party.something/foo.dart');
    }
    _addResources(paths : core.DartList<string>,_namedArguments? : {workspacePath? : string}) : void {
        let {workspacePath} = Object.assign({
            "workspacePath" : '/workspace'}, _namedArguments );
        for(let path of paths) {
            if (new core.DartString(path).endsWith('/')) {
                this.provider.newFolder(this._p(new core.DartString(path).substring(0,new core.DartString(path).length - 1)));
            }else {
                this.provider.newFile(this._p(path),'');
            }
        }
        this.workspace = BazelWorkspace.find(this.provider,this._p(workspacePath));
        this.resolver = new bare.createInstance(any,null,this.workspace);
    }
    _assertResolve(uriStr : string,posixPath : string,_namedArguments? : {exists? : boolean,restore? : boolean}) : void {
        let {exists,restore} = Object.assign({
            "exists" : true,
            "restore" : true}, _namedArguments );
        let uri : lib3.Uri = lib3.Uri.parse(uriStr);
        let source : any = this.resolver.resolveAbsolute(uri);
        expect(source,isNotNull);
        expect(source.fullName,this._p(posixPath));
        expect(source.uri,uri);
        expect(source.exists(),exists);
        if (restore) {
            let uri : lib3.Uri = this.resolver.restoreAbsolute(source);
            expect(uri.toString(),uriStr);
        }
    }
    _assertRestore(posixPath : string,expectedUri : string) : void {
        let path : string = this._p(posixPath);
        let source : _MockSource = new _MockSource(path);
        let uri : lib3.Uri = this.resolver.restoreAbsolute(source);
        expect(((_511_)=>(!!_511_)?_511_.toString():null)(uri),expectedUri);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BazelPackageUriResolverTest() {
    }
}

export namespace BazelWorkspaceTest {
    export type Constructors = _BaseTest.Constructors | 'BazelWorkspaceTest';
    export type Interface = Omit<BazelWorkspaceTest, Constructors>;
}
@DartClass
export class BazelWorkspaceTest extends _BaseTest {
    test_find_fail_notAbsolute() : void {
        expect(() =>  {
            return BazelWorkspace.find(this.provider,this._p('not_absolute'));
        },throwsArgumentError);
    }
    test_find_hasReadonlyFolder() : void {
        this.provider.newFolder(this._p('/Users/user/test/READONLY/prime'));
        this.provider.newFolder(this._p('/Users/user/test/prime'));
        this.provider.newFolder(this._p('/Users/user/test/prime/bazel-genfiles'));
        let workspace : any = BazelWorkspace.find(this.provider,this._p('/Users/user/test/prime/my/module'));
        expect(workspace.root,this._p('/Users/user/test/prime'));
        expect(workspace.readonly,this._p('/Users/user/test/READONLY/prime'));
        expect(workspace.bin,this._p('/Users/user/test/prime/bazel-bin'));
        expect(workspace.genfiles,this._p('/Users/user/test/prime/bazel-genfiles'));
    }
    test_find_hasReadonlyFolder_bad_actuallyHasWorkspaceFile() : void {
        this.provider.newFolder(this._p('/Users/user/test/READONLY'));
        this.provider.newFile(this._p('/Users/user/test/prime/WORKSPACE'),'');
        this.provider.newFolder(this._p('/Users/user/test/prime/bazel-genfiles'));
        let workspace : any = BazelWorkspace.find(this.provider,this._p('/Users/user/test/prime/my/module'));
        expect(workspace.root,this._p('/Users/user/test/prime'));
        expect(workspace.readonly,isNull);
        expect(workspace.bin,this._p('/Users/user/test/prime/bazel-bin'));
        expect(workspace.genfiles,this._p('/Users/user/test/prime/bazel-genfiles'));
    }
    test_find_hasReadonlyFolder_blaze() : void {
        this.provider.newFolder(this._p('/Users/user/test/READONLY/prime'));
        this.provider.newFolder(this._p('/Users/user/test/prime'));
        this.provider.newFolder(this._p('/Users/user/test/prime/blaze-genfiles'));
        let workspace : any = BazelWorkspace.find(this.provider,this._p('/Users/user/test/prime/my/module'));
        expect(workspace.root,this._p('/Users/user/test/prime'));
        expect(workspace.readonly,this._p('/Users/user/test/READONLY/prime'));
        expect(workspace.bin,this._p('/Users/user/test/prime/blaze-bin'));
        expect(workspace.genfiles,this._p('/Users/user/test/prime/blaze-genfiles'));
    }
    test_find_hasWorkspaceFile() : void {
        this.provider.newFile(this._p('/workspace/WORKSPACE'),'');
        this.provider.newFolder(this._p('/workspace/bazel-genfiles'));
        let workspace : any = BazelWorkspace.find(this.provider,this._p('/workspace/my/module'));
        expect(workspace.root,this._p('/workspace'));
        expect(workspace.readonly,isNull);
        expect(workspace.bin,this._p('/workspace/bazel-bin'));
        expect(workspace.genfiles,this._p('/workspace/bazel-genfiles'));
    }
    test_find_hasWorkspaceFile_forModuleInWorkspace() : void {
        this.provider.newFile(this._p('/workspace/WORKSPACE'),'');
        this.provider.newFolder(this._p('/workspace/bazel-genfiles'));
        let workspace : any = BazelWorkspace.find(this.provider,this._p('/workspace/my/module'));
        expect(workspace.root,this._p('/workspace'));
        expect(workspace.readonly,isNull);
        expect(workspace.bin,this._p('/workspace/bazel-bin'));
        expect(workspace.genfiles,this._p('/workspace/bazel-genfiles'));
    }
    test_find_hasWorkspaceFile_forWorkspace() : void {
        this.provider.newFile(this._p('/workspace/WORKSPACE'),'');
        this.provider.newFolder(this._p('/workspace/bazel-genfiles'));
        let workspace : any = BazelWorkspace.find(this.provider,this._p('/workspace'));
        expect(workspace.root,this._p('/workspace'));
        expect(workspace.readonly,isNull);
        expect(workspace.bin,this._p('/workspace/bazel-bin'));
        expect(workspace.genfiles,this._p('/workspace/bazel-genfiles'));
    }
    test_find_hasWorkspaceFile_forWorkspace_blaze() : void {
        this.provider.newFile(this._p('/workspace/WORKSPACE'),'');
        this.provider.newFolder(this._p('/workspace/blaze-genfiles'));
        let workspace : any = BazelWorkspace.find(this.provider,this._p('/workspace'));
        expect(workspace.root,this._p('/workspace'));
        expect(workspace.readonly,isNull);
        expect(workspace.bin,this._p('/workspace/blaze-bin'));
        expect(workspace.genfiles,this._p('/workspace/blaze-genfiles'));
    }
    test_find_null_noWorkspaceMarkers() : void {
        let workspace : any = BazelWorkspace.find(this.provider,this._p('/workspace/my/module'));
        expect(workspace,isNull);
    }
    test_find_null_noWorkspaceMarkers_inRoot() : void {
        let workspace : any = BazelWorkspace.find(this.provider,this._p('/'));
        expect(workspace,isNull);
    }
    test_find_null_symlinkPrefix() : void {
        let prefix : string = BazelWorkspace.defaultSymlinkPrefix;
        this.provider.newFile(this._p('/workspace/WORKSPACE'),'');
        let workspace : any = BazelWorkspace.find(this.provider,this._p('/workspace/my/module'));
        expect(workspace.root,this._p('/workspace'));
        expect(workspace.readonly,isNull);
        expect(workspace.bin,this._p(`/workspace/${prefix}-bin`));
        expect(workspace.genfiles,this._p(`/workspace/${prefix}-genfiles`));
    }
    test_findFile_hasReadonlyFolder() : void {
        this.provider.newFolder(this._p('/Users/user/test/READONLY/prime'));
        this.provider.newFolder(this._p('/Users/user/test/prime'));
        this.provider.newFile(this._p('/Users/user/test/prime/my/module/test1.dart'),'');
        this.provider.newFile(this._p('/Users/user/test/prime/my/module/test2.dart'),'');
        this.provider.newFile(this._p('/Users/user/test/prime/my/module/test3.dart'),'');
        this.provider.newFile(this._p('/Users/user/test/prime/bazel-bin/my/module/test2.dart'),'');
        this.provider.newFile(this._p('/Users/user/test/prime/bazel-genfiles/my/module/test3.dart'),'');
        this.provider.newFile(this._p('/Users/user/test/READONLY/prime/other/module/test4.dart'),'');
        let workspace : any = BazelWorkspace.find(this.provider,this._p('/Users/user/test/prime/my/module'));
        expect(workspace.findFile(this._p('/Users/user/test/prime/my/module/test1.dart')).path,this._p('/Users/user/test/prime/my/module/test1.dart'));
        expect(workspace.findFile(this._p('/Users/user/test/prime/my/module/test2.dart')).path,this._p('/Users/user/test/prime/bazel-bin/my/module/test2.dart'));
        expect(workspace.findFile(this._p('/Users/user/test/prime/my/module/test3.dart')).path,this._p('/Users/user/test/prime/bazel-genfiles/my/module/test3.dart'));
        expect(workspace.findFile(this._p('/Users/user/test/prime/other/module/test4.dart')).path,this._p('/Users/user/test/READONLY/prime/other/module/test4.dart'));
    }
    test_findFile_main_overrides_readonly() : void {
        this.provider.newFolder(this._p('/Users/user/test/READONLY/prime'));
        this.provider.newFolder(this._p('/Users/user/test/prime'));
        this.provider.newFolder(this._p('/Users/user/test/prime/bazel-genfiles'));
        this.provider.newFile(this._p('/Users/user/test/prime/my/module/test.dart'),'');
        this.provider.newFile(this._p('/Users/user/test/READONLY/prime/my/module/test.dart'),'');
        let workspace : any = BazelWorkspace.find(this.provider,this._p('/Users/user/test/prime/my/module'));
        expect(workspace.findFile(this._p('/Users/user/test/prime/my/module/test.dart')).path,this._p('/Users/user/test/prime/my/module/test.dart'));
    }
    test_findFile_noReadOnly() : void {
        this.provider.newFile(this._p('/workspace/WORKSPACE'),'');
        this.provider.newFile(this._p('/workspace/my/module/test1.dart'),'');
        this.provider.newFile(this._p('/workspace/my/module/test2.dart'),'');
        this.provider.newFile(this._p('/workspace/my/module/test3.dart'),'');
        this.provider.newFile(this._p('/workspace/bazel-bin/my/module/test2.dart'),'');
        this.provider.newFile(this._p('/workspace/bazel-genfiles/my/module/test3.dart'),'');
        let workspace : any = BazelWorkspace.find(this.provider,this._p('/workspace/my/module'));
        expect(workspace.findFile(this._p('/workspace/my/module/test1.dart')).path,this._p('/workspace/my/module/test1.dart'));
        expect(workspace.findFile(this._p('/workspace/my/module/test2.dart')).path,this._p('/workspace/bazel-bin/my/module/test2.dart'));
        expect(workspace.findFile(this._p('/workspace/my/module/test3.dart')).path,this._p('/workspace/bazel-genfiles/my/module/test3.dart'));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BazelWorkspaceTest() {
    }
}

export class properties {
}
