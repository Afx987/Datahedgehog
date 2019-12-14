/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/refactoring/rename.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";

export var haveIntersectingRanges : (localElement : any,element : any) => boolean = (localElement : any,element : any) : boolean =>  {
    if (isNot(element, any)) {
        return false;
    }
    let localElement2 : any = element as any;
    let localSource : any = localElement.source;
    let localSource2 : any = localElement2.source;
    let localRange : any = localElement.visibleRange;
    let localRange2 : any = localElement2.visibleRange;
    return op(Op.EQUALS,localSource2,localSource) && localRange != null && localRange2 != null && localRange2.intersects(localRange);
};
export var isDefinedInLibrary : (element : any,context : any,source : any) => boolean = (element : any,context : any,source : any) : boolean =>  {
    if (!isInContext(element,context)) {
        return false;
    }
    let librarySourcesOfSource : core.DartList<any> = context.getLibrariesContaining(source);
    let librarySourceOfElement : any = element.library.source;
    return librarySourcesOfSource.contains(librarySourceOfElement);
};
export var isElementInPubCache : (element : any) => boolean = (element : any) : boolean =>  {
    let source : any = element.source;
    let path : string = source.fullName;
    return isPathInPubCache(path);
};
export var isElementInSdkOrPubCache : (element : any) => boolean = (element : any) : boolean =>  {
    let source : any = element.source;
    let path : string = source.fullName;
    return source.isInSystemLibrary || isPathInPubCache(path);
};
export var isInContext : (element : any,context : any) => boolean = (element : any,context : any) : boolean =>  {
    return op(Op.EQUALS,element.context,context);
};
export var isPathInPubCache : (path : string) => boolean = (path : string) : boolean =>  {
    let parts : core.DartList<string> = lib3.split(path);
    if (parts.contains('.pub-cache')) {
        return true;
    }
    for(let i : number = 0; i < parts.length - 1; i++){
        if (parts[i] == 'Pub' && parts[i + 1] == 'Cache') {
            return true;
        }
        if (parts[i] == 'third_party' && (parts[i + 1] == 'pkg' || parts[i + 1] == 'pkg_tested')) {
            return true;
        }
    }
    return false;
};
export var isReferenceInLocalRange : (localElement : any,reference : any) => boolean = (localElement : any,reference : any) : boolean =>  {
    if (reference.isQualified) {
        return false;
    }
    let localSource : any = localElement.source;
    let referenceSource : any = reference.unitSource;
    let localRange : any = localElement.visibleRange;
    let referenceRange : any = reference.sourceRange;
    return op(Op.EQUALS,referenceSource,localSource) && referenceRange.intersects(localRange);
};
export var isVisibleInLibrary : (element : any,context : any,source : any) => boolean = (element : any,context : any,source : any) : boolean =>  {
    if (!isInContext(element,context)) {
        return false;
    }
    if (element.isPublic) {
        return true;
    }
    return isDefinedInLibrary(element,context,source);
};
export namespace RenameRefactoringImpl {
    export type Constructors = 'RenameRefactoringImpl';
    export type Interface = Omit<RenameRefactoringImpl, Constructors>;
}
@DartClass
@Implements(any)
export class RenameRefactoringImpl extends any implements any.Interface {
    searchEngine : any;

    _element : any;

    context : any;

    elementKindName : string;

    oldName : string;

    change : any;

    newName : string;

    constructor(searchEngine : any,element : any) {
    }
    @defaultConstructor
    RenameRefactoringImpl(searchEngine : any,element : any) {
        this.searchEngine = searchEngine;
        this._element = element;
        this.context = element.context;
        this.elementKindName = element.kind.displayName;
        this.oldName = RenameRefactoringImpl._getDisplayName(element);
    }
    get element() : any {
        return this._element;
    }
    addDeclarationEdit(element : any) : void {
        if (element != null) {
            let edit : any = newSourceEdit_range(range.elementName(element),this.newName);
            doSourceChange_addElementEdit(this.change,element,edit);
        }
    }
    addReferenceEdits(matches : core.DartList<any>) : void {
        let references : core.DartList<any> = getSourceReferences(matches);
        for(let reference of references) {
            reference.addEdit(this.change,this.newName);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkInitialConditions() : async.Future<any> {
        let result : any = new bare.createInstance(any,null);
        if (this.element.source.isInSystemLibrary) {
            let message : string = format("The {0} '{1}' is defined in the SDK, so cannot be renamed.",getElementKindName(this.element),getElementQualifiedName(this.element));
            result.addFatalError(message);
        }
        if (isElementInPubCache(this.element)) {
            let message : string = format("The {0} '{1}' is defined in a pub package, so cannot be renamed.",getElementKindName(this.element),getElementQualifiedName(this.element));
            result.addFatalError(message);
        }
        return new async.Future.value(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkNewName() : any {
        let result : any = new bare.createInstance(any,null);
        if (this.newName == this.oldName) {
            result.addFatalError("The new name must be different than the current name.");
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let changeName : string = `${refactoringName} '${this.oldName}' to '${this.newName}'`;
            this.change = new bare.createInstance(any,null,changeName);
            await this.fillChange();
            return this.change;
        } )());
    }

    @Abstract
    fillChange() : async.Future<any>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    requiresPreview() : boolean {
        return false;
    }
    static _getDisplayName(element : any) : string {
        if (is(element, any)) {
            let prefix : any = element.prefix;
            if (prefix != null) {
                return prefix.displayName;
            }
            return '';
        }
        return element.displayName;
    }
}

export class properties {
}
