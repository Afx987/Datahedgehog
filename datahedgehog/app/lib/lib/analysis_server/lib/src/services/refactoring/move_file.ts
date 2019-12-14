/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/refactoring/move_file.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/src/context";
import * as lib4 from "@dart2ts.packages/path/lib/path";
import * as lib5 from "@dart2ts/dart/uri";
import * as lib6 from "@dart2ts.packages/source_span/lib/src/span";

export namespace MoveFileRefactoringImpl {
    export type Constructors = 'MoveFileRefactoringImpl';
    export type Interface = Omit<MoveFileRefactoringImpl, Constructors>;
}
@DartClass
@Implements(any)
export class MoveFileRefactoringImpl extends any implements any.Interface {
    resourceProvider : any;

    pathContext : lib3.Context;

    searchEngine : any;

    context : any;

    source : any;

    oldFile : string;

    newFile : string;

    change : any;

    library : any;

    oldLibraryDir : string;

    newLibraryDir : string;

    constructor(resourceProvider : any,searchEngine : any,context : any,source : any,oldFile : string) {
    }
    @defaultConstructor
    MoveFileRefactoringImpl(resourceProvider : any,searchEngine : any,context : any,source : any,oldFile : string) {
        this.resourceProvider = resourceProvider;
        this.pathContext = resourceProvider.pathContext;
        this.searchEngine = searchEngine;
        this.context = context;
        this.source = source;
        this.oldFile = oldFile;
        if (this.source != null) {
            this.oldFile = this.source.fullName;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get refactoringName() : string {
        return 'Move File';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkFinalConditions() : async.Future<any> {
        let result : any = new bare.createInstance(any,null);
        return new async.Future.value(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkInitialConditions() : async.Future<any> {
        let result : any = new bare.createInstance(any,null);
        return new async.Future.value(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this.source != null) {
                return this._createFileChange();
            }
            if (this.oldFile != null) {
                let projectFolder : any = this.resourceProvider.getResource(this.oldFile);
                if (is(projectFolder, any) && projectFolder.exists) {
                    let pubspecFile : any = projectFolder.getChild('pubspec.yaml');
                    if (is(pubspecFile, any) && pubspecFile.exists) {
                        return this._createProjectChange(projectFolder,pubspecFile);
                    }
                }
            }
            return null;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    requiresPreview() : boolean {
        return false;
    }
    _computeNewUri(reference : any) : string {
        let refDir : string = this.pathContext.dirname(reference.file);
        if (this._isPackageReference(reference)) {
            let newSource : any = new bare.createInstance(any,null,this.newFile,lib4.toUri(this.newFile),UriKind.FILE_URI);
            let restoredUri : lib5.Uri = this.context.sourceFactory.restoreUri(newSource);
            if (restoredUri != null) {
                return restoredUri.toString();
            }
        }
        return this._getRelativeUri(this.newFile,refDir);
    }
    _createFileChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.change = new bare.createInstance(any,null,'Update File References');
            let librarySources : core.DartList<any> = this.context.getLibrariesContaining(this.source);
            await async.Future.forEach(librarySources,(librarySource : any) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                let unitElement : any = this.context.getCompilationUnitElement(this.source,librarySource);
                if (unitElement != null) {
                    this.library = unitElement.library;
                    if (op(Op.EQUALS,this.library.definingCompilationUnit,unitElement)) {
                        this.oldLibraryDir = this.pathContext.dirname(this.oldFile);
                        this.newLibraryDir = this.pathContext.dirname(this.newFile);
                        this._updateUriReferences(this.library.imports);
                        this._updateUriReferences(this.library.exports);
                        this._updateUriReferences(this.library.parts);
                    }
                    let matches : core.DartList<any> = await this.searchEngine.searchReferences(unitElement);
                    let references : core.DartList<any> = getSourceReferences(matches);
                    for(let reference of references) {
                        let newUri : string = this._computeNewUri(reference);
                        reference.addEdit(this.change,`'${newUri}'`);
                    }
                }
            })()));
            return this.change;
        } )());
    }

    _createProjectChange(project : any,pubspecFile : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.change = new bare.createInstance(any,null,'Rename project');
            let oldPackageName : string = this.pathContext.basename(this.oldFile);
            let newPackageName : string = this.pathContext.basename(this.newFile);
            {
                let nameSpan : lib6.SourceSpan;
                {
                    let pubspecString : string = pubspecFile.readAsStringSync();
                    let pubspecNode : any = loadYamlNode(pubspecString);
                    let nameNode : any = op(Op.INDEX,pubspecNode.nodes,'name');
                    nameSpan = nameNode.span;
                }
                let nameOffset : number = nameSpan.start.offset;
                let nameLength : number = nameSpan.length;
                this.change.addEdit(pubspecFile.path,pubspecFile.modificationStamp,new bare.createInstance(any,null,nameOffset,nameLength,newPackageName));
            }
            for(let librarySource of this.context.librarySources) {
                if (!project.contains(librarySource.fullName)) {
                    continue;
                }
                let library : any = this.context.getLibraryElement(librarySource);
                if (op(Op.EQUALS,library,null)) {
                    continue;
                }
                var updateUriElements : (uriElements : core.DartList<any>) => any = (uriElements : core.DartList<any>) =>  {
                    for(let element of uriElements) {
                        let uri : string = element.uri;
                        if (uri != null) {
                            let oldPrefix : string = `package:${oldPackageName}/`;
                            if (new core.DartString(uri).startsWith(oldPrefix)) {
                                doSourceChange_addElementEdit(this.change,library,new bare.createInstance(any,null,op(Op.PLUS,element.uriOffset,1),new core.DartString(oldPrefix).length,`package:${newPackageName}/`));
                            }
                        }
                    }
                };
                updateUriElements(library.imports);
                updateUriElements(library.exports);
            }
            return this.change;
        } )());
    }

    _getRelativeUri(path : string,from : string) : string {
        let uri : string = this.pathContext.relative(path,{
            from : from});
        let parts : core.DartList<string> = this.pathContext.split(uri);
        return lib4.properties.posix.joinAll(parts);
    }
    _isPackageReference(reference : any) : boolean {
        let source : any = reference.element.source;
        let offset : number = op(Op.PLUS,reference.range.offset,new core.DartString("'").length);
        let content : string = this.context.getContents(source).data;
        return new core.DartString(content).startsWith('package:',offset);
    }
    _isRelativeUri(path : string) : boolean {
        if (lib5.Uri.parse(path).isAbsolute) {
            return false;
        }
        if (this.pathContext.isAbsolute(path)) {
            return false;
        }
        return true;
    }
    _updateUriReference(element : any) : void {
        if (!element.isSynthetic) {
            let elementUri : string = element.uri;
            if (this._isRelativeUri(elementUri)) {
                let elementPath : string = this.pathContext.join(this.oldLibraryDir,elementUri);
                let newUri : string = this._getRelativeUri(elementPath,this.newLibraryDir);
                let uriOffset : number = element.uriOffset;
                let uriLength : number = op(Op.MINUS,element.uriEnd,uriOffset);
                doSourceChange_addElementEdit(this.change,this.library,new bare.createInstance(any,null,uriOffset,uriLength,`'${newUri}'`));
            }
        }
    }
    _updateUriReferences(elements : core.DartList<any>) : void {
        for(let element of elements) {
            this._updateUriReference(element);
        }
    }
}

export class properties {
}
