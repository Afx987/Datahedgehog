/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/uri_contributor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/src/context";
import * as lib4 from "@dart2ts.packages/path/lib/path";

export namespace UriContributor {
    export type Constructors = 'UriContributor';
    export type Interface = Omit<UriContributor, Constructors>;
}
@DartClass
export class UriContributor extends any {
    builder : _UriSuggestionBuilder;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeSuggestions(request : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            this.builder = new _UriSuggestionBuilder(request);
            request.target.containingNode.accept(this.builder);
            return this.builder.suggestions;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UriContributor() {
    }
}

export namespace _UriSuggestionBuilder {
    export type Constructors = '_UriSuggestionBuilder';
    export type Interface = Omit<_UriSuggestionBuilder, Constructors>;
}
@DartClass
export class _UriSuggestionBuilder extends any {
    request : any;

    suggestions : core.DartList<any>;

    constructor(request : any) {
    }
    @defaultConstructor
    _UriSuggestionBuilder(request : any) {
        this.suggestions = new core.DartList.literal<any>();
        this.request = request;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) {
        this.visitNamespaceDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) {
        this.visitNamespaceDirective(node);
    }
    visitNamespaceDirective(node : any) {
        let uri : any = node.uri;
        if (is(uri, any)) {
            let offset : number = this.request.offset;
            let start : number = uri.offset;
            let end : number = uri.end;
            if (offset > start) {
                if (offset < end) {
                    this.visitSimpleStringLiteral(uri);
                }else if (offset == end) {
                    if (end == start + 1) {
                        this.visitSimpleStringLiteral(uri);
                    }else {
                        let data : string = this.request.sourceContents;
                        if (end == new core.DartString(data).length) {
                            let ch : string = data[end - 1];
                            if (ch != '"' && ch != "'") {
                                this.visitSimpleStringLiteral(uri);
                            }
                        }
                    }
                }
            }else if (offset == start && offset == end) {
                let data : string = this.request.sourceContents;
                if (end == new core.DartString(data).length) {
                    let ch : string = data[end - 1];
                    if (ch == '"' || ch == "'") {
                        this.visitSimpleStringLiteral(uri);
                    }
                }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleStringLiteral(node : any) {
        let parent : any = node.parent;
        if (is(parent, any) && op(Op.EQUALS,parent.uri,node)) {
            let partialUri : string = this._extractPartialUri(node);
            if (partialUri != null) {
                this._addDartSuggestions();
                this._addPackageSuggestions(partialUri);
                this._addFileSuggestions(partialUri);
            }
        }else if (is(parent, any) && op(Op.EQUALS,parent.uri,node)) {
            let partialUri : string = this._extractPartialUri(node);
            if (partialUri != null) {
                this._addFileSuggestions(partialUri);
            }
        }
    }
    _addDartSuggestions() : void {
        this._addSuggestion('dart:');
        let factory : any = this.request.sourceFactory;
        for(let lib of factory.dartSdk.sdkLibraries) {
            if (!lib.isInternal && !lib.isImplementation) {
                if (!lib.shortName.startsWith('dart:_')) {
                    this._addSuggestion(lib.shortName,{
                        relevance : op(Op.EQUALS,lib.shortName,'dart:core') ? DART_RELEVANCE_LOW : DART_RELEVANCE_DEFAULT});
                }
            }
        }
    }
    _addFileSuggestions(partialUri : string) : void {
        let resProvider : any = this.request.resourceProvider;
        let resContext : lib3.Context = resProvider.pathContext;
        let source : any = this.request.source;
        let parentUri : string;
        if ((new core.DartString(partialUri).endsWith('/'))) {
            parentUri = partialUri;
        }else {
            parentUri = lib4.properties.posix.dirname(partialUri);
            if (parentUri != '.' && !new core.DartString(parentUri).endsWith('/')) {
                parentUri = `${parentUri}/`;
            }
        }
        let uriPrefix : string = parentUri == '.' ? '' : parentUri;
        let dirPath : string = resContext.normalize(parentUri);
        if (resContext.isRelative(dirPath)) {
            let sourceDirPath : string = resContext.dirname(source.fullName);
            if (resContext.isAbsolute(sourceDirPath)) {
                dirPath = resContext.normalize(resContext.join(sourceDirPath,dirPath));
            }else {
                return;
            }
            let srcInLib : boolean = resContext.split(sourceDirPath).contains('lib');
            let dstInLib : boolean = resContext.split(dirPath).contains('lib');
            if (srcInLib && !dstInLib) {
                return;
            }
        }
        if (new core.DartString(dirPath).endsWith('\.')) {
            dirPath = new core.DartString(dirPath).substring(0,new core.DartString(dirPath).length - 1);
        }
        let dir : any = resProvider.getResource(dirPath);
        if (is(dir, any)) {
            try {
                for(let child of dir.getChildren()) {
                    let completion : string;
                    if (is(child, any)) {
                        completion = `${uriPrefix}${child.shortName}/`;
                    }else {
                        completion = `${uriPrefix}${child.shortName}`;
                    }
                    if (completion != source.shortName) {
                        this._addSuggestion(completion);
                    }
                }
            } catch (__error__) {

                if (is(__error__,any)){
                }
            }
        }
    }
    _addPackageFolderSuggestions(partial : string,prefix : string,folder : any) : void {
        try {
            for(let child of folder.getChildren()) {
                if (is(child, any)) {
                    let childPrefix : string = `${prefix}${child.shortName}/`;
                    this._addSuggestion(childPrefix);
                    if (new core.DartString(partial).startsWith(childPrefix)) {
                        this._addPackageFolderSuggestions(partial,childPrefix,child);
                    }
                }else {
                    this._addSuggestion(`${prefix}${child.shortName}`);
                }
            }
        } catch (__error__) {

            if (is(__error__,any)){
                return;
            }
        }
    }
    _addPackageSuggestions(partial : string) : void {
        let factory : any = this.request.sourceFactory;
        let packageMap : core.DartMap<string,core.DartList<any>> = factory.packageMap;
        if (packageMap != null) {
            this._addSuggestion('package:');
            packageMap.forEach((pkgName : string,folders : core.DartList<any>) =>  {
                let prefix : string = `package:${pkgName}/`;
                this._addSuggestion(prefix);
                for(let folder of folders) {
                    if (folder.exists) {
                        this._addPackageFolderSuggestions(partial,prefix,folder);
                    }
                }
            });
        }
    }
    _addSuggestion(completion : string,_namedArguments? : {relevance? : number}) : void {
        let {relevance} = Object.assign({
            "relevance" : DART_RELEVANCE_DEFAULT}, _namedArguments );
        this.suggestions.add(new bare.createInstance(any,null,CompletionSuggestionKind.IMPORT,relevance,completion,new core.DartString(completion).length,0,false,false));
    }
    _extractPartialUri(node : any) : string {
        if (op(Op.LT,this.request.offset,node.contentsOffset)) {
            return null;
        }
        return node.literal.lexeme.substring(op(Op.MINUS,node.contentsOffset,node.offset),op(Op.MINUS,this.request.offset,node.offset));
    }
}

export class properties {
}
