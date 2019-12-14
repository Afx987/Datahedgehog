/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/watch_manager.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace WatchManager {
    export type Constructors = 'WatchManager';
    export type Interface<T> = Omit<WatchManager<T>, Constructors>;
}
@DartClass
export class WatchManager<T> {
    provider : any;

    handleWatchEvent : <T>(event : any,tokens : core.DartList<T>) => void;

    rootNode : WatchNode<T>;

    _watchedFolders : core.DartMap<any,WatchNode<T>>;

    constructor(provider : any,handleWatchEvent : <T>(event : any,tokens : core.DartList<T>) => void) {
    }
    @defaultConstructor
    WatchManager(provider : any,handleWatchEvent : <T>(event : any,tokens : core.DartList<T>) => void) {
        this.rootNode = new WatchNode<T>(null);
        this._watchedFolders = new core.DartHashMap<any,WatchNode<T>>();
        this.provider = provider;
        this.handleWatchEvent = handleWatchEvent;
    }
    addFolder(folder : any,token : T) : void {
        let folderNode : WatchNode<T> = this._watchedFolders.get(folder);
        if (folderNode != null) {
            folderNode.tokens.add(token);
            return;
        }
        folderNode = new WatchNode<T>(folder);
        this._watchedFolders.set(folder,folderNode);
        folderNode.tokens.add(token);
        let parentNode : WatchNode<T> = this.rootNode.insert(folderNode);
        if (op(Op.EQUALS,parentNode,this.rootNode)) {
            folderNode.subscription = folder.changes.listen(this._handleWatchEvent.bind(this));
            for(let childNode of folderNode.children) {
                /* TODO (AssertStatementImpl) : assert (childNode.subscription != null); */;
                if (childNode.subscription != null) {
                    childNode.subscription.cancel();
                    childNode.subscription = null;
                }
            }
        }
    }
    removeFolder(folder : any,token : T) : void {
        let folderNode : WatchNode<T> = this._watchedFolders.get(folder);
        if (op(Op.EQUALS,folderNode,null)) {
            /* TODO (AssertStatementImpl) : assert (false); */;
            return;
        }
        let tokens : core.DartSet<T> = folderNode.tokens;
        if (!tokens.remove(token)) {
            /* TODO (AssertStatementImpl) : assert (false); */;
        }
        if (tokens.isEmpty) {
            if (folderNode.subscription != null) {
                for(let childNode of folderNode.children) {
                    /* TODO (AssertStatementImpl) : assert (childNode.subscription == null); */;
                    childNode.subscription = childNode.folder.changes.listen(this._handleWatchEvent.bind(this));
                }
                folderNode.subscription.cancel();
                folderNode.subscription = null;
            }
            folderNode.delete();
            this._watchedFolders.remove(folder);
        }
    }
    _handleWatchEvent(event : any) : void {
        let path : string = event.path;
        let tokens : core.DartList<T> = new core.DartList.literal<T>();
        let parent : WatchNode<T> = this.rootNode.findParent(path);
        while (parent != this.rootNode){
            tokens.addAll(parent.tokens);
            parent = parent.parent;
        }
        if (tokens.isNotEmpty) {
            this.handleWatchEvent(event,tokens);
        }
    }
}

export namespace WatchNode {
    export type Constructors = 'WatchNode';
    export type Interface<T> = Omit<WatchNode<T>, Constructors>;
}
@DartClass
export class WatchNode<T> {
    folder : any;

    parent : WatchNode<T>;

    _children : core.DartList<WatchNode<T>>;

    tokens : core.DartSet<T>;

    subscription : async.DartStreamSubscription<any>;

    constructor(folder : any) {
    }
    @defaultConstructor
    WatchNode(folder : any) {
        this._children = new core.DartList.literal<WatchNode<T>>();
        this.tokens = new core.DartHashSet<T>();
        this.folder = folder;
    }
    get children() : core.DartIterable<WatchNode<T>> {
        return this._children;
    }
    delete() : void {
        if (this.parent != null) {
            this.parent._removeChild(this);
            this.parent = null;
        }
    }
    findParent(filePath : string) : WatchNode<T> {
        if (this._children == null) {
            return this;
        }
        for(let childNode of this._children) {
            if (childNode.folder.isOrContains(filePath)) {
                return childNode.findParent(filePath);
            }
        }
        return this;
    }
    insert(node : WatchNode<T>) : WatchNode<T> {
        let parentNode : WatchNode<T> = this.findParent(node.folder.path);
        parentNode._addChild(node,true);
        return parentNode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return 'WatchNode (' + `folder = ${op(Op.EQUALS,this.folder,null) ? '<root>' : this.folder.path}, ` + `tokens = ${this.tokens}, ` + `subscription = ${op(Op.EQUALS,this.subscription,null) ? 'null' : 'non-null'})`;
    }
    _addChild(newChild : WatchNode<T>,checkChildren : boolean) : void {
        if (checkChildren) {
            let folder : any = newChild.folder;
            for(let i : number = this._children.length - 1; i >= 0; i--){
                let existingChild : WatchNode<T> = this._children[i];
                if (folder.contains(existingChild.folder.path)) {
                    newChild._addChild(existingChild,false);
                    this._children.removeAt(i);
                }
            }
        }
        newChild.parent = this;
        this._children.add(newChild);
    }
    _removeChild(child : WatchNode<T>) : void {
        this._children.remove(child);
        let grandchildren : core.DartIterable<WatchNode<T>> = child.children;
        for(let grandchild of grandchildren) {
            grandchild.parent = this;
            this._children.add(grandchild);
        }
        child._children.clear();
    }
}

export class properties {
}
