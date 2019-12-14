/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/dependency_grapher_impl.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var graphForProgram : (sources : core.DartList<lib3.Uri>,options : any,_namedArguments? : {fileReader? : (originalUri : lib3.Uri,resolvedUri : lib3.Uri) => async.Future<string>}) => async.Future<any> = (sources : core.DartList<lib3.Uri>,options : any,_namedArguments? : {fileReader? : (originalUri : lib3.Uri,resolvedUri : lib3.Uri) => async.Future<string>}) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let {fileReader} = Object.assign({
    }, _namedArguments );
    let uriTranslator : any = await options.getUriTranslator();
    fileReader = ( fileReader ) || ( (originalUri : any,resolvedUri : any) =>  {
        return options.fileSystem.entityForUri(resolvedUri).readAsString();
    } );
    let walker = new _Walker(fileReader,uriTranslator,options.compileSdk);
    let startingPoint = new _StartingPoint(walker,sources);
    await walker.walk(startingPoint);
    return walker.graph;
})());
export namespace _Walker {
    export type Constructors = '_Walker';
    export type Interface = Omit<_Walker, Constructors>;
}
@DartClass
export class _Walker extends any {
    fileReader : (originalUri : lib3.Uri,resolvedUri : lib3.Uri) => async.Future<string>;

    uriTranslator : any;

    _nodesByUri;

    graph;

    compileSdk : boolean;

    constructor(fileReader : (originalUri : lib3.Uri,resolvedUri : lib3.Uri) => async.Future<string>,uriTranslator : any,compileSdk : boolean) {
    }
    @defaultConstructor
    _Walker(fileReader : (originalUri : lib3.Uri,resolvedUri : lib3.Uri) => async.Future<string>,uriTranslator : any,compileSdk : boolean) {
        this._nodesByUri = new core.DartMap.literal([
        ]);
        this.graph = new bare.createInstance(any,null);
        this.fileReader = fileReader;
        this.uriTranslator = uriTranslator;
        this.compileSdk = compileSdk;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluate(v : _WalkerNode) : async.Future<core.Null> {
        if (is(v, _StartingPoint)) return new async.Future.value();
        return this.evaluateScc(new core.DartList.literal(v));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluateScc(scc : core.DartList<_WalkerNode>) : async.Future<core.Null> {
        let cycle = new bare.createInstance(any,null);
        for(let walkerNode of scc) {
            op(Op.INDEX_ASSIGN,cycle.libraries,walkerNode.uri,walkerNode.library);
        }
        this.graph.topologicallySortedCycles.add(cycle);
        return new async.Future.value();
    }
    nodeForUri(referencedUri : lib3.Uri) : _WalkerNode {
        let dependencyNode = this._nodesByUri.putIfAbsent(referencedUri,() =>  {
            return new _WalkerNode(this,referencedUri);
        });
        return dependencyNode;
    }
}

export namespace _WalkerNode {
    export type Constructors = '_WalkerNode';
    export type Interface = Omit<_WalkerNode, Constructors>;
}
@DartClass
export class _WalkerNode extends any {
    private static __$dartCoreUri;
    static get dartCoreUri() { 
        if (this.__$dartCoreUri===undefined) {
            this.__$dartCoreUri = lib3.Uri.parse('dart:core');
        }
        return this.__$dartCoreUri;
    }
    static set dartCoreUri(__$value : any)  { 
        this.__$dartCoreUri = __$value;
    }

    walker : _Walker;

    uri : lib3.Uri;

    library : any;

    constructor(walker : _Walker,uri : lib3.Uri) {
    }
    @defaultConstructor
    _WalkerNode(walker : _Walker,uri : lib3.Uri) {
        this.uri = uri;
        this.library = new bare.createInstance(any,null,uri);
        this.walker = walker;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDependencies() : async.Future<core.DartList<_WalkerNode>> { 
        return new async.Future.fromPromise(( async () =>  {
            let dependencies = new core.DartList.literal<_WalkerNode>();
            let resolvedUri = this.uri.scheme == 'file' ? this.uri : this.walker.uriTranslator.translate(this.uri);
            if (op(Op.EQUALS,resolvedUri,null)) {
                throw new core.StateError(`Invalid URI: ${this.uri}`);
            }
            let contents = await this.walker.fileReader(this.uri,resolvedUri);
            let scannerResults = scanString(contents);
            let listener = new bare.createInstance(any,null);
            new bare.createInstance(any,null,listener).parseUnit(scannerResults.tokens);
            let coreUriFound : boolean = false;
            var handleDependency : (referencedUri : lib3.Uri) => void = (referencedUri : lib3.Uri) : void =>  {
                let dependencyNode : _WalkerNode = this.walker.nodeForUri(referencedUri);
                this.library.dependencies.add(dependencyNode.library);
                if (referencedUri.scheme != 'dart' || this.walker.compileSdk) {
                    dependencies.add(dependencyNode);
                }
                if (op(Op.EQUALS,referencedUri,_WalkerNode.dartCoreUri)) {
                    coreUriFound = true;
                }
            };
            for(let part of listener.parts) {
                this.library.parts.add(this.uri.resolve(part));
            }
            for(let dep of listener.imports) {
                handleDependency(this.uri.resolve(dep.uri));
            }
            for(let dep of listener.exports) {
                handleDependency(this.uri.resolve(dep.uri));
            }
            if (!coreUriFound) {
                handleDependency(_WalkerNode.dartCoreUri);
            }
            return dependencies;
        } )());
    }

}

export namespace _StartingPoint {
    export type Constructors = _WalkerNode.Constructors | '_StartingPoint';
    export type Interface = Omit<_StartingPoint, Constructors>;
}
@DartClass
export class _StartingPoint extends _WalkerNode {
    sources : core.DartList<lib3.Uri>;

    constructor(walker : _Walker,sources : core.DartList<lib3.Uri>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StartingPoint(walker : _Walker,sources : core.DartList<lib3.Uri>) {
        super._WalkerNode(walker,null);
        this.sources = sources;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDependencies() : async.Future<core.DartList<_WalkerNode>> { 
        return new async.Future.fromPromise(( async () =>  {
            return this.sources.map(this.walker.nodeForUri.bind(this.walker)).toList();
        } )());
    }

}

export class properties {
}
