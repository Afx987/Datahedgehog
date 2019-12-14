/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/lint/project.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/path/lib/path";

export var _findAndParsePubspec : (root : io.Directory) => any = (root : io.Directory) : any =>  {
    if (root.existsSync()) {
        let pubspec : io.File = root.listSync({
            followLinks : false}).firstWhere((f : any) =>  {
            return isPubspecFile(f);
        },{
            orElse : () =>  {
                return null;
            }});
        if (pubspec != null) {
            return new bare.createInstance(any,null,pubspec.readAsStringSync(),{
                sourceUrl : lib4.toUri(pubspec.path)});
        }
    }
    return null;
};
export namespace DartProject {
    export type Constructors = 'DartProject';
    export type Interface = Omit<DartProject, Constructors>;
}
@DartClass
export class DartProject {
    _apiModel : _ApiModel;

    _name : string;

    _pubspec : any;

    root : io.Directory;

    constructor(context : any,sources : core.DartList<any>,_namedArguments? : {dir? : io.Directory}) {
    }
    @defaultConstructor
    DartProject(context : any,sources : core.DartList<any>,_namedArguments? : {dir? : io.Directory}) {
        let {dir} = Object.assign({
        }, _namedArguments );
        this.root = (dir || io.Directory.current);
        this._pubspec = _findAndParsePubspec(this.root);
        this._apiModel = new _ApiModel(context,sources,this.root);
    }
    get name() : string {
        return this._name = ( this._name ) || ( this._calculateName() );
    }
    get pubspec() : any {
        return this._pubspec;
    }
    isApi(element : any) : boolean {
        return this._apiModel.contains(element);
    }
    _calculateName() : string {
        if (this.pubspec != null) {
            let nameEntry = this.pubspec.name;
            if (nameEntry != null) {
                return nameEntry.value.text;
            }
        }
        return lib4.basename(this.root.path);
    }
}

export namespace ProjectVisitor {
    export type Constructors = 'ProjectVisitor';
    export type Interface<T> = Omit<ProjectVisitor<T>, Constructors>;
}
@DartClass
export class ProjectVisitor<T> {
    visit(project : DartProject) : T {
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    ProjectVisitor() {
    }
}

export namespace _ApiModel {
    export type Constructors = '_ApiModel';
    export type Interface = Omit<_ApiModel, Constructors>;
}
@DartClass
export class _ApiModel {
    context : any;

    sources : core.DartList<any>;

    root : io.Directory;

    elements : core.DartSet<any>;

    constructor(context : any,sources : core.DartList<any>,root : io.Directory) {
    }
    @defaultConstructor
    _ApiModel(context : any,sources : core.DartList<any>,root : io.Directory) {
        this.elements = new core.DartSet<any>();
        this.context = context;
        this.sources = sources;
        this.root = root;
        this._calculate();
    }
    contains(element : any) : boolean {
        while (element != null){
            if (!element.isPrivate && this.elements.contains(element)) {
                return true;
            }
            element = element.enclosingElement;
        }
        return false;
    }
    _calculate() {
        if (this.sources == null || this.sources.isEmpty) {
            return;
        }
        let libDir = this.root.path + '/lib';
        let libSrcDir = libDir + '/src';
        for(let source of this.sources) {
            let path = source.uri.path;
            if (path.startsWith(libDir) && !path.startsWith(libSrcDir)) {
                let library = this.context.computeLibraryElement(source);
                let namespaceBuilder = new bare.createInstance(any,null);
                let exports = namespaceBuilder.createExportNamespaceForLibrary(library);
                let public = namespaceBuilder.createPublicNamespaceForLibrary(library);
                this.elements.addAll(exports.definedNames.values);
                this.elements.addAll(public.definedNames.values);
            }
        }
    }
}

export class properties {
}
