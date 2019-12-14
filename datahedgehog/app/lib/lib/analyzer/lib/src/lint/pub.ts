/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/lint/pub.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "@dart2ts.packages/source_span/lib/src/span";
import * as lib5 from "@dart2ts/dart/uri";

export var _findEntry : (map : any,key : string) => PSEntry = (map : any,key : string) : PSEntry =>  {
    let entry : PSEntry;
    map.nodes.forEach((k : any,v : any) =>  {
        if (is(k, any) && key == k.toString()) {
            entry = _processScalar(k,v);
        }
    });
    return entry;
};
export var _processDependencies : (key : any,v : any) => PSDependencyList = (key : any,v : any) : PSDependencyList =>  {
    if (isNot(v, any)) {
        return null;
    }
    let depsMap : any = v;
    let deps : _PSDependencyList = new _PSDependencyList(new _PSNode(key));
    depsMap.nodes.forEach((k : any,v : any) =>  {
        return deps.add(new _PSDependency(k,v));
    });
    return deps;
};
export var _processGitRepo : (key : any,v : any) => PSGitRepo = (key : any,v : any) : PSGitRepo =>  {
    if (isNot(v, any)) {
        return null;
    }
    let hostMap : any = v;
    let repo : _PSGitRepo = new _PSGitRepo();
    repo.token = new _PSNode(key);
    repo.ref = _findEntry(hostMap,'ref');
    repo.url = _findEntry(hostMap,'url');
    return repo;
};
export var _processHost : (key : any,v : any) => PSHost = (key : any,v : any) : PSHost =>  {
    if (isNot(v, any)) {
        return null;
    }
    let hostMap : any = v;
    let host : _PSHost = new _PSHost();
    host.token = new _PSNode(key);
    host.name = _findEntry(hostMap,'name');
    host.url = _findEntry(hostMap,'url');
    return host;
};
export var _processList : (key : any,v : any) => PSNodeList = (key : any,v : any) : PSNodeList =>  {
    if (isNot(v, any)) {
        return null;
    }
    let nodeList : any = v;
    return new _PSNodeList(new _PSNode(key),nodeList.nodes.map((n : any) =>  {
        return new _PSNode(n);
    }));
};
export var _processScalar : (key : any,value : any) => PSEntry = (key : any,value : any) : PSEntry =>  {
    if (isNot(value, any)) {
        return null;
    }
    return new PSEntry(new _PSNode(key),new _PSNode(value));
};
export namespace PSDependency {
    export type Constructors = 'PSDependency';
    export type Interface = Omit<PSDependency, Constructors>;
}
@DartClass
export class PSDependency {
    @AbstractProperty
    get git() : PSGitRepo{ throw 'abstract'}
    @AbstractProperty
    get host() : PSHost{ throw 'abstract'}
    @AbstractProperty
    get name() : PSNode{ throw 'abstract'}
    @AbstractProperty
    get version() : PSEntry{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    PSDependency() {
    }
}

export namespace PSDependencyList {
    export type Constructors = 'PSDependencyList';
    export type Interface = Omit<PSDependencyList, Constructors>;
}
@DartClass
@With(core.DartIterableMixin)
export class PSDependencyList extends core.DartObject implements core.DartIterableMixin.Interface<PSDependency> {
    @Abstract
    map(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    where(f : <E>(element : E) => boolean) : core.DartIterable<PSDependency> {
        throw 'from mixin';
    }
    @Abstract
    expand(f : <T,E>(element : E) => core.DartIterable<T>) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    contains(element : core.DartObject) : boolean {
        throw 'from mixin';
    }
    @Abstract
    forEach(f : <E>(element : E) => void) : void {
        throw 'from mixin';
    }
    @Abstract
    reduce(combine : <E>(value : E,element : E) => E) : PSDependency {
        throw 'from mixin';
    }
    @Abstract
    fold(initialValue : T,combine : <T,E>(previousValue : T,element : E) => T) : T {
        throw 'from mixin';
    }
    @Abstract
    every(f : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    join(separator? : string) : string {
        separator = separator || "";
        throw 'from mixin';
    }
    @Abstract
    any(f : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<PSDependency> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    toSet() : core.DartSet<PSDependency> {
        throw 'from mixin';
    }
    @Abstract
    take(count : number) : core.DartIterable<PSDependency> {
        throw 'from mixin';
    }
    @Abstract
    takeWhile(test : <E>(value : E) => boolean) : core.DartIterable<PSDependency> {
        throw 'from mixin';
    }
    @Abstract
    skip(count : number) : core.DartIterable<PSDependency> {
        throw 'from mixin';
    }
    @Abstract
    skipWhile(test : <E>(value : E) => boolean) : core.DartIterable<PSDependency> {
        throw 'from mixin';
    }
    @Abstract
    firstWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : PSDependency {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    lastWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : PSDependency {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    singleWhere(test : <E>(value : E) => boolean) : PSDependency {
        throw 'from mixin';
    }
    @Abstract
    elementAt(index : number) : PSDependency {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PSDependencyList() {
    }
}

export namespace PSEntry {
    export type Constructors = 'PSEntry';
    export type Interface = Omit<PSEntry, Constructors>;
}
@DartClass
export class PSEntry {
    key : PSNode;

    value : PSNode;

    constructor(key : PSNode,value : PSNode) {
    }
    @defaultConstructor
    PSEntry(key : PSNode,value : PSNode) {
        this.key = key;
        this.value = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.key != null ? (this.key.toString() + ': ') : ''}${this.value}`;
    }
}

export namespace PSGitRepo {
    export type Constructors = 'PSGitRepo';
    export type Interface = Omit<PSGitRepo, Constructors>;
}
@DartClass
export class PSGitRepo {
    @AbstractProperty
    get ref() : PSEntry{ throw 'abstract'}
    @AbstractProperty
    get token() : PSNode{ throw 'abstract'}
    @AbstractProperty
    get url() : PSEntry{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    PSGitRepo() {
    }
}

export namespace PSHost {
    export type Constructors = 'PSHost';
    export type Interface = Omit<PSHost, Constructors>;
}
@DartClass
export class PSHost {
    @AbstractProperty
    get name() : PSEntry{ throw 'abstract'}
    @AbstractProperty
    get token() : PSNode{ throw 'abstract'}
    @AbstractProperty
    get url() : PSEntry{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    PSHost() {
    }
}

export namespace PSNode {
    export type Constructors = 'PSNode';
    export type Interface = Omit<PSNode, Constructors>;
}
@DartClass
export class PSNode {
    @AbstractProperty
    get span() : lib4.SourceSpan{ throw 'abstract'}
    @AbstractProperty
    get text() : string{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    PSNode() {
    }
}

export namespace PSNodeList {
    export type Constructors = 'PSNodeList';
    export type Interface = Omit<PSNodeList, Constructors>;
}
@DartClass
@With(core.DartIterableMixin)
export class PSNodeList extends core.DartObject implements core.DartIterableMixin.Interface<PSNode> {
    @Abstract
    map(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    where(f : <E>(element : E) => boolean) : core.DartIterable<PSNode> {
        throw 'from mixin';
    }
    @Abstract
    expand(f : <T,E>(element : E) => core.DartIterable<T>) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    contains(element : core.DartObject) : boolean {
        throw 'from mixin';
    }
    @Abstract
    forEach(f : <E>(element : E) => void) : void {
        throw 'from mixin';
    }
    @Abstract
    reduce(combine : <E>(value : E,element : E) => E) : PSNode {
        throw 'from mixin';
    }
    @Abstract
    fold(initialValue : T,combine : <T,E>(previousValue : T,element : E) => T) : T {
        throw 'from mixin';
    }
    @Abstract
    every(f : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    join(separator? : string) : string {
        separator = separator || "";
        throw 'from mixin';
    }
    @Abstract
    any(f : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<PSNode> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    toSet() : core.DartSet<PSNode> {
        throw 'from mixin';
    }
    @Abstract
    take(count : number) : core.DartIterable<PSNode> {
        throw 'from mixin';
    }
    @Abstract
    takeWhile(test : <E>(value : E) => boolean) : core.DartIterable<PSNode> {
        throw 'from mixin';
    }
    @Abstract
    skip(count : number) : core.DartIterable<PSNode> {
        throw 'from mixin';
    }
    @Abstract
    skipWhile(test : <E>(value : E) => boolean) : core.DartIterable<PSNode> {
        throw 'from mixin';
    }
    @Abstract
    firstWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : PSNode {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    lastWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : PSNode {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    singleWhere(test : <E>(value : E) => boolean) : PSNode {
        throw 'from mixin';
    }
    @Abstract
    elementAt(index : number) : PSNode {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get iterator() : core.DartIterator<PSNode>{ throw 'abstract'}
    @AbstractProperty
    get token() : PSNode{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PSNodeList() {
    }
}

export namespace Pubspec {
    export type Constructors = never;
    export type Interface = Omit<Pubspec, Constructors>;
}
@DartClass
export class Pubspec {
    @namedFactory
    static $parse(source : string,_namedArguments? : {sourceUrl? : lib5.Uri}) : Pubspec {
        let {sourceUrl} = Object.assign({
        }, _namedArguments );
        return new _Pubspec(source,{
            sourceUrl : sourceUrl});
    }
    static parse : new(source : string,_namedArguments? : {sourceUrl? : lib5.Uri}) => Pubspec;

    @AbstractProperty
    get author() : PSEntry{ throw 'abstract'}
    @AbstractProperty
    get authors() : PSNodeList{ throw 'abstract'}
    @AbstractProperty
    get dependencies() : PSDependencyList{ throw 'abstract'}
    @AbstractProperty
    get description() : PSEntry{ throw 'abstract'}
    @AbstractProperty
    get devDependencies() : PSDependencyList{ throw 'abstract'}
    @AbstractProperty
    get documentation() : PSEntry{ throw 'abstract'}
    @AbstractProperty
    get homepage() : PSEntry{ throw 'abstract'}
    @AbstractProperty
    get name() : PSEntry{ throw 'abstract'}
    @AbstractProperty
    get version() : PSEntry{ throw 'abstract'}
    @Abstract
    accept(visitor : PubspecVisitor<any>){ throw 'abstract'}
}

export namespace PubspecVisitor {
    export type Constructors = 'PubspecVisitor';
    export type Interface<T> = Omit<PubspecVisitor<T>, Constructors>;
}
@DartClass
export class PubspecVisitor<T> {
    visitPackageAuthor(author : PSEntry) : T {
        return null;
    }
    visitPackageAuthors(authors : PSNodeList) : T {
        return null;
    }
    visitPackageDependencies(dependencies : PSDependencyList) : T {
        return null;
    }
    visitPackageDependency(dependency : PSDependency) : T {
        return null;
    }
    visitPackageDescription(description : PSEntry) : T {
        return null;
    }
    visitPackageDevDependencies(dependencies : PSDependencyList) : T {
        return null;
    }
    visitPackageDevDependency(dependency : PSDependency) : T {
        return null;
    }
    visitPackageDocumentation(documentation : PSEntry) : T {
        return null;
    }
    visitPackageHomepage(homepage : PSEntry) : T {
        return null;
    }
    visitPackageName(name : PSEntry) : T {
        return null;
    }
    visitPackageVersion(version : PSEntry) : T {
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    PubspecVisitor() {
    }
}

export namespace _PSGitRepo {
    export type Constructors = '_PSGitRepo';
    export type Interface = Omit<_PSGitRepo, Constructors>;
}
@DartClass
@Implements(PSGitRepo)
export class _PSGitRepo implements PSGitRepo.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    token : PSNode;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    ref : PSEntry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    url : PSEntry;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `    ${this.token}:\n      ${this.url}\n      ${this.ref}`;
    }
    constructor() {
    }
    @defaultConstructor
    _PSGitRepo() {
    }
}

export namespace _PSHost {
    export type Constructors = '_PSHost';
    export type Interface = Omit<_PSHost, Constructors>;
}
@DartClass
@Implements(PSHost)
export class _PSHost implements PSHost.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    token : PSNode;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    name : PSEntry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    url : PSEntry;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `    ${this.token}:\n      ${this.name}\n      ${this.url}`;
    }
    constructor() {
    }
    @defaultConstructor
    _PSHost() {
    }
}

export namespace _PSNode {
    export type Constructors = '_PSNode';
    export type Interface = Omit<_PSNode, Constructors>;
}
@DartClass
@Implements(PSNode)
export class _PSNode implements PSNode.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    text : string;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    span : lib4.SourceSpan;

    constructor(node : any) {
    }
    @defaultConstructor
    _PSNode(node : any) {
        this.text = ((_354_)=>(!!_354_)?_354_.toString():null)(node.value);
        this.span = node.span;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.text}`;
    }
}

export namespace _Pubspec {
    export type Constructors = '_Pubspec';
    export type Interface = Omit<_Pubspec, Constructors>;
}
@DartClass
@Implements(Pubspec)
export class _Pubspec implements Pubspec.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    author : PSEntry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    authors : PSNodeList;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    description : PSEntry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    documentation : PSEntry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    homepage : PSEntry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    name : PSEntry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    version : PSEntry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dependencies : PSDependencyList;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    devDependencies : PSDependencyList;

    constructor(src : string,_namedArguments? : {sourceUrl? : lib5.Uri}) {
    }
    @defaultConstructor
    _Pubspec(src : string,_namedArguments? : {sourceUrl? : lib5.Uri}) {
        let {sourceUrl} = Object.assign({
        }, _namedArguments );
        try {
            this._parse(src,{
                sourceUrl : sourceUrl});
        } catch (__error__) {

            if (is(__error__,core.Exception)){
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : PubspecVisitor<any>) : void {
        if (this.author != null) {
            visitor.visitPackageAuthor(this.author);
        }
        if (this.authors != null) {
            visitor.visitPackageAuthors(this.authors);
        }
        if (this.description != null) {
            visitor.visitPackageDescription(this.description);
        }
        if (this.documentation != null) {
            visitor.visitPackageDocumentation(this.documentation);
        }
        if (this.homepage != null) {
            visitor.visitPackageHomepage(this.homepage);
        }
        if (this.name != null) {
            visitor.visitPackageName(this.name);
        }
        if (this.version != null) {
            visitor.visitPackageVersion(this.version);
        }
        if (this.dependencies != null) {
            visitor.visitPackageDependencies(this.dependencies);
            this.dependencies.forEach((d : any) =>  {
                return visitor.visitPackageDependency(d);
            });
        }
        if (this.devDependencies != null) {
            visitor.visitPackageDevDependencies(this.devDependencies);
            this.devDependencies.forEach((d : any) =>  {
                return visitor.visitPackageDevDependency(d);
            });
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let sb = new _StringBuilder();
        sb.writelin(this.name);
        sb.writelin(this.version);
        sb.writelin(this.author);
        sb.writelin(this.authors);
        sb.writelin(this.description);
        sb.writelin(this.homepage);
        sb.writelin(this.dependencies);
        sb.writelin(this.devDependencies);
        return sb.toString();
    }
    _parse(src : string,_namedArguments? : {sourceUrl? : lib5.Uri}) {
        let {sourceUrl} = Object.assign({
        }, _namedArguments );
        let yaml = loadYamlNode(src,{
            sourceUrl : sourceUrl});
        if (isNot(yaml, any)) {
            return;
        }
        let yamlMap : any = yaml;
        yamlMap.nodes.forEach((k : any,v : any) =>  {
            if (isNot(k, any)) {
                return;
            }
            let key : any = k;
            switch (key.toString()) {
                case 'author':
                    this.author = _processScalar(key,v);
                    break;
                case 'authors':
                    this.authors = _processList(key,v);
                    break;
                case 'homepage':
                    this.homepage = _processScalar(key,v);
                    break;
                case 'name':
                    this.name = _processScalar(key,v);
                    break;
                case 'description':
                    this.description = _processScalar(key,v);
                    break;
                case 'documentation':
                    this.documentation = _processScalar(key,v);
                    break;
                case 'dependencies':
                    this.dependencies = _processDependencies(key,v);
                    break;
                case 'dev_dependencies':
                    this.devDependencies = _processDependencies(key,v);
                    break;
                case 'version':
                    this.version = _processScalar(key,v);
                    break;
            }
        });
    }
}

export namespace _StringBuilder {
    export type Constructors = '_StringBuilder';
    export type Interface = Omit<_StringBuilder, Constructors>;
}
@DartClass
export class _StringBuilder {
    buffer : core.DartStringBuffer;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.buffer.toString();
    }
    writelin(value : core.DartObject) {
        if (value != null) {
            this.buffer.writeln(value);
        }
    }
    constructor() {
    }
    @defaultConstructor
    _StringBuilder() {
        this.buffer = new core.DartStringBuffer();
    }
}

export namespace _PSDependency {
    export type Constructors = PSDependency.Constructors | '_';
    export type Interface = Omit<_PSDependency, Constructors>;
}
@DartClass
export class _PSDependency extends PSDependency {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    name : PSNode;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    version : PSEntry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    host : PSHost;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    git : PSGitRepo;

    constructor(k : any,v : any) {
        // @ts-ignore
        super();
    }
    @defaultFactory
    static $_PSDependency(k : any,v : any) : _PSDependency {
        if (isNot(k, any)) {
            return null;
        }
        let key : any = k;
        let dep : _PSDependency = new _PSDependency._();
        dep.name = new _PSNode(key);
        if (is(v, any)) {
            dep.version = new PSEntry(null,new _PSNode(v));
        }else if (is(v, any)) {
            let details : any = v;
            details.nodes.forEach((k : any,v : any) =>  {
                if (isNot(k, any)) {
                    return;
                }
                let key : any = k;
                switch (key.toString()) {
                    case 'version':
                        dep.version = _processScalar(key,v);
                        break;
                    case 'hosted':
                        dep.host = _processHost(key,v);
                        break;
                    case 'git':
                        dep.git = _processGitRepo(key,v);
                        break;
                }
            });
        }
        return dep;
    }
    @namedConstructor
    _() {
    }
    static _ : new() => _PSDependency;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let sb = new core.DartStringBuffer();
        if (this.name != null) {
            sb.write(`${this.name}:`);
        }
        let versionInfo = '';
        if (this.version != null) {
            if (op(Op.EQUALS,this.version.key,null)) {
                versionInfo = ` ${this.version}`;
            }else {
                versionInfo = `\n    ${this.version}`;
            }
        }
        sb.writeln(versionInfo);
        if (this.host != null) {
            sb.writeln(this.host);
        }
        if (this.git != null) {
            sb.writeln(this.git);
        }
        return sb.toString();
    }
}

export namespace _PSDependencyList {
    export type Constructors = PSDependencyList.Constructors | '_PSDependencyList';
    export type Interface = Omit<_PSDependencyList, Constructors>;
}
@DartClass
export class _PSDependencyList extends PSDependencyList {
    dependencies;

    token : PSNode;

    constructor(token : PSNode) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PSDependencyList(token : PSNode) {
        this.dependencies = new core.DartList.literal<PSDependency>();
        this.token = token;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get iterator() : core.DartIterator<PSDependency> {
        return this.dependencies.iterator;
    }
    add(dependency : PSDependency) {
        if (dependency != null) {
            this.dependencies.add(dependency);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.token}\n${this.dependencies.join('  ')}`;
    }
}

export namespace _PSNodeList {
    export type Constructors = PSNodeList.Constructors | '_PSNodeList';
    export type Interface = Omit<_PSNodeList, Constructors>;
}
@DartClass
export class _PSNodeList extends PSNodeList {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    token : PSNode;

    nodes : core.DartIterable<PSNode>;

    constructor(token : PSNode,nodes : core.DartIterable<PSNode>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PSNodeList(token : PSNode,nodes : core.DartIterable<PSNode>) {
        this.token = token;
        this.nodes = nodes;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get iterator() : core.DartIterator<PSNode> {
        return this.nodes.iterator;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.token}:\n  - ${this.nodes.join('\n  - ')}`;
    }
}

export class properties {
}
