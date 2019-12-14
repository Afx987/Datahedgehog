/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/src/watch_manager_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../mocks";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(WatchManagerTest);
        defineReflectiveTests(WatchNodeTest);
    });
};
export namespace Token {
    export type Constructors = 'Token';
    export type Interface = Omit<Token, Constructors>;
}
@DartClass
export class Token {
    name : string;

    constructor(name : string) {
    }
    @defaultConstructor
    Token(name : string) {
        this.name = name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
}

export namespace WatchListener {
    export type Constructors = 'WatchListener';
    export type Interface = Omit<WatchListener, Constructors>;
}
@DartClass
export class WatchListener {
    event : any;

    tokens : core.DartList<Token>;

    clear() : void {
        this.event = null;
        this.tokens = null;
    }
    handleWatchEvent(event : any,tokens : core.DartList<Token>) : void {
        this.event = event;
        this.tokens = tokens;
    }
    constructor() {
    }
    @defaultConstructor
    WatchListener() {
    }
}

export namespace WatchManagerTest {
    export type Constructors = 'WatchManagerTest';
    export type Interface = Omit<WatchManagerTest, Constructors>;
}
@DartClass
export class WatchManagerTest {
    provider : any;

    listener : WatchListener;

    manager : any;

    setUp() : void {
        this.provider = new bare.createInstance(any,null);
        this.listener = new WatchListener();
        this.manager = new bare.createInstance(any,null,this.provider,this.listener.handleWatchEvent.bind(this.listener));
    }
    test_addFolder_folderAndSubfolder() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let topFolder : any = this.provider.getFolder('/a/b');
            let childFolder : any = this.provider.getFolder('/a/b/c/d');
            let topToken : Token = new Token('topToken');
            let childToken : Token = new Token('childToken');
            this.manager.addFolder(topFolder,topToken);
            this.manager.addFolder(childFolder,childToken);
            let newFile1 : any = this.provider.newFile('/a/b/c/lib.dart','');
            await this._expectEvent(ChangeType.ADD,newFile1.path,new core.DartList.literal(topToken));
            let newFile2 : any = this.provider.newFile('/a/b/c/d/lib.dart','');
            return this._expectEvent(ChangeType.ADD,newFile2.path,new core.DartList.literal(topToken,childToken));
        } )());
    }

    test_addFolder_singleFolder_multipleTokens() : async.Future<any> {
        let folder : any = this.provider.getFolder('/a/b');
        let token1 : Token = new Token('token1');
        let token2 : Token = new Token('token2');
        this.manager.addFolder(folder,token1);
        this.manager.addFolder(folder,token2);
        let newFile : any = this.provider.newFile('/a/b/lib.dart','');
        return this._expectEvent(ChangeType.ADD,newFile.path,new core.DartList.literal(token1,token2));
    }
    test_addFolder_singleFolder_singleToken() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let folder : any = this.provider.getFolder('/a/b');
            let token : Token = new Token('token');
            this.manager.addFolder(folder,token);
            let newFolder : any = this.provider.newFolder('/a/b/c');
            await this._expectEvent(ChangeType.ADD,newFolder.path,new core.DartList.literal(token));
            let newFile : any = this.provider.newFile('/a/b/c/lib.dart','');
            return this._expectEvent(ChangeType.ADD,newFile.path,new core.DartList.literal(token));
        } )());
    }

    test_addFolder_unrelatedFolders() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let folder1 : any = this.provider.getFolder('/a/b');
            let folder2 : any = this.provider.getFolder('/c/d');
            let token1 : Token = new Token('token1');
            let token2 : Token = new Token('token2');
            this.manager.addFolder(folder1,token1);
            this.manager.addFolder(folder2,token2);
            let newFile1 : any = this.provider.newFile('/a/b/lib.dart','');
            await this._expectEvent(ChangeType.ADD,newFile1.path,new core.DartList.literal(token1));
            let newFile2 : any = this.provider.newFile('/c/d/lib.dart','');
            return this._expectEvent(ChangeType.ADD,newFile2.path,new core.DartList.literal(token2));
        } )());
    }

    test_creation() : void {
        expect(this.manager,isNotNull);
    }
    test_removeFolder_multipleTokens() : async.Future<any> {
        let folder : any = this.provider.getFolder('/a/b');
        let token1 : Token = new Token('token1');
        let token2 : Token = new Token('token2');
        this.manager.addFolder(folder,token1);
        this.manager.addFolder(folder,token2);
        this.manager.removeFolder(folder,token2);
        let newFile : any = this.provider.newFile('/a/b/lib.dart','');
        return this._expectEvent(ChangeType.ADD,newFile.path,new core.DartList.literal(token1));
    }
    test_removeFolder_withChildren() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let topFolder : any = this.provider.getFolder('/a/b');
            let childFolder : any = this.provider.getFolder('/a/b/c/d');
            let topToken : Token = new Token('topToken');
            let childToken : Token = new Token('childToken');
            this.manager.addFolder(topFolder,topToken);
            this.manager.addFolder(childFolder,childToken);
            this.manager.removeFolder(topFolder,topToken);
            let newFile : any = this.provider.newFile('/a/b/c/d/lib.dart','');
            await this._expectEvent(ChangeType.ADD,newFile.path,new core.DartList.literal(childToken));
            this.provider.newFile('/a/b/lib.dart','');
            return this._expectNoEvent();
        } )());
    }

    test_removeFolder_withNoChildren() : async.Future<any> {
        let folder : any = this.provider.getFolder('/a/b');
        let token : Token = new Token('token');
        this.manager.addFolder(folder,token);
        this.manager.removeFolder(folder,token);
        this.provider.newFile('/a/b/lib.dart','');
        return this._expectNoEvent();
    }
    _expectEvent(expectedType : any,expectedPath : string,expectedTokens : core.DartList<Token>) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await lib3.pumpEventQueue();
            let event : any = this.listener.event;
            expect(event,isNotNull);
            expect(event.type,expectedType);
            expect(event.path,expectedPath);
            expect(this.listener.tokens,unorderedEquals(expectedTokens));
            this.listener.clear();
        } )());
    }

    _expectNoEvent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await lib3.pumpEventQueue();
            expect(this.listener.event,isNull);
            expect(this.listener.tokens,isNull);
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    WatchManagerTest() {
    }
}

export namespace WatchNodeTest {
    export type Constructors = 'WatchNodeTest';
    export type Interface = Omit<WatchNodeTest, Constructors>;
}
@DartClass
export class WatchNodeTest {
    provider : any;

    test_creation_folder() : void {
        let folder : any = this.provider.getFolder('/a/b');
        let node : any = new bare.createInstance(any,null,folder);
        expect(node,isNotNull);
        expect(node.children,isEmpty);
        expect(node.folder,folder);
        expect(node.parent,isNull);
        expect(node.subscription,isNull);
        expect(node.tokens,isEmpty);
    }
    test_creation_noFolder() : void {
        let node : any = new bare.createInstance(any,null,null);
        expect(node,isNotNull);
        expect(node.children,isEmpty);
        expect(node.folder,isNull);
        expect(node.parent,isNull);
        expect(node.subscription,isNull);
        expect(node.tokens,isEmpty);
    }
    test_delete_nested_child() : void {
        let rootNode : any = new bare.createInstance(any,null,null);
        let topNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b'));
        let childNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b/c/d'));
        let grandchildNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b/c/d/e'));
        rootNode.insert(topNode);
        rootNode.insert(childNode);
        rootNode.insert(grandchildNode);
        childNode.delete();
        expect(rootNode.children,equals(new core.DartList.literal(topNode)));
        expect(topNode.children,equals(new core.DartList.literal(grandchildNode)));
        expect(topNode.parent,rootNode);
        expect(grandchildNode.parent,topNode);
    }
    test_delete_nested_noChild() : void {
        let rootNode : any = new bare.createInstance(any,null,null);
        let topNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b'));
        let childNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b/c/d'));
        rootNode.insert(topNode);
        rootNode.insert(childNode);
        childNode.delete();
        expect(rootNode.children,equals(new core.DartList.literal(topNode)));
        expect(topNode.children,isEmpty);
        expect(topNode.parent,rootNode);
    }
    test_delete_top_child() : void {
        let rootNode : any = new bare.createInstance(any,null,null);
        let topNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b'));
        let childNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b/c/d'));
        rootNode.insert(topNode);
        rootNode.insert(childNode);
        topNode.delete();
        expect(rootNode.children,equals(new core.DartList.literal(childNode)));
        expect(childNode.parent,rootNode);
    }
    test_delete_top_noChild() : void {
        let rootNode : any = new bare.createInstance(any,null,null);
        let topNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b'));
        rootNode.insert(topNode);
        topNode.delete();
        expect(rootNode.children,isEmpty);
    }
    test_findParent_childOfLeaf() : void {
        let rootNode : any = new bare.createInstance(any,null,null);
        let topNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b'));
        rootNode.insert(topNode);
        expect(rootNode.findParent('/a/b/c'),topNode);
    }
    test_findParent_childOfNonLeaf() : void {
        let rootNode : any = new bare.createInstance(any,null,null);
        let topNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b'));
        let childNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b/c/d'));
        rootNode.insert(topNode);
        rootNode.insert(childNode);
        expect(rootNode.findParent('/a/b/c'),topNode);
    }
    test_findParent_noMatch() : void {
        let rootNode : any = new bare.createInstance(any,null,null);
        let topNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b'));
        rootNode.insert(topNode);
        expect(rootNode.findParent('/c/d'),rootNode);
    }
    test_insert_intermediate_afterParentAndChild() : void {
        let rootNode : any = new bare.createInstance(any,null,null);
        let topNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b'));
        let childNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b/c/d'));
        let intermediateNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b/c'));
        rootNode.insert(topNode);
        rootNode.insert(childNode);
        rootNode.insert(intermediateNode);
        expect(topNode.parent,rootNode);
        expect(topNode.children,equals(new core.DartList.literal(intermediateNode)));
        expect(intermediateNode.parent,topNode);
        expect(intermediateNode.children,equals(new core.DartList.literal(childNode)));
        expect(childNode.parent,intermediateNode);
        expect(childNode.children,isEmpty);
    }
    test_insert_nested_afterParent() : void {
        let rootNode : any = new bare.createInstance(any,null,null);
        let topNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b'));
        let childNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b/c/d'));
        rootNode.insert(topNode);
        rootNode.insert(childNode);
        expect(childNode.parent,topNode);
        expect(childNode.children,isEmpty);
        expect(topNode.children,equals(new core.DartList.literal(childNode)));
    }
    test_insert_nested_beforeParent() : void {
        let rootNode : any = new bare.createInstance(any,null,null);
        let topNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b'));
        let childNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b/c/d'));
        rootNode.insert(childNode);
        rootNode.insert(topNode);
        expect(childNode.parent,topNode);
        expect(childNode.children,isEmpty);
        expect(topNode.children,equals(new core.DartList.literal(childNode)));
    }
    test_insert_top() : void {
        let rootNode : any = new bare.createInstance(any,null,null);
        let topNode : any = new bare.createInstance(any,null,this.provider.getFolder('/a/b'));
        rootNode.insert(topNode);
        expect(rootNode.children,equals(new core.DartList.literal(topNode)));
        expect(topNode.parent,rootNode);
        expect(topNode.children,isEmpty);
    }
    constructor() {
    }
    @defaultConstructor
    WatchNodeTest() {
        this.provider = new bare.createInstance(any,null);
    }
}

export class properties {
}
