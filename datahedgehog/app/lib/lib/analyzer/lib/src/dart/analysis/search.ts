/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/analysis/search.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/collection/lib/src/algorithms";
import * as lib4 from "@dart2ts/dart/uri";

export var _getEnclosingElement : (unitElement : any,offset : number) => any = (unitElement : any,offset : number) : any =>  {
    let finder = new _ContainingElementFinder(offset);
    unitElement.accept(finder);
    return finder.containingElement;
};
export namespace Search {
    export type Constructors = 'Search';
    export type Interface = Omit<Search, Constructors>;
}
@DartClass
export class Search {
    _driver : any;

    constructor(_driver : any) {
    }
    @defaultConstructor
    Search(_driver : any) {
        this._driver = _driver;
    }
    classMembers(name : string) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let elements : core.DartList<any> = new core.DartList.literal<any>();
            var addElement : (element : any) => void = (element : any) : void =>  {
                if (!element.isSynthetic && op(Op.EQUALS,element.displayName,name)) {
                    elements.add(element);
                }
            };
            let files : core.DartList<string> = await this._driver.getFilesDefiningClassMemberName(name);
            for(let file of files) {
                let unitResult : any = await this._driver.getUnitElement(file);
                if (unitResult != null) {
                    for(let clazz of unitResult.element.types) {
                        clazz.accessors.forEach(addElement);
                        clazz.fields.forEach(addElement);
                        clazz.methods.forEach(addElement);
                    }
                }
            }
            return elements;
        } )());
    }

    references(element : any) : async.Future<core.DartList<SearchResult>> { 
        return new async.Future.fromPromise(( async () =>  {
            if (op(Op.EQUALS,element,null)) {
                return new core.DartList.literal<SearchResult>();
            }
            let kind : any = element.kind;
            if (op(Op.EQUALS,kind,ElementKind.CLASS) || op(Op.EQUALS,kind,ElementKind.CONSTRUCTOR) || op(Op.EQUALS,kind,ElementKind.FUNCTION_TYPE_ALIAS) || op(Op.EQUALS,kind,ElementKind.SETTER)) {
                return this._searchReferences(element);
            }else if (op(Op.EQUALS,kind,ElementKind.COMPILATION_UNIT)) {
                return this._searchReferences_CompilationUnit(element);
            }else if (op(Op.EQUALS,kind,ElementKind.GETTER)) {
                return this._searchReferences_Getter(element);
            }else if (op(Op.EQUALS,kind,ElementKind.FIELD) || op(Op.EQUALS,kind,ElementKind.TOP_LEVEL_VARIABLE)) {
                return this._searchReferences_Field(element);
            }else if (op(Op.EQUALS,kind,ElementKind.FUNCTION) || op(Op.EQUALS,kind,ElementKind.METHOD)) {
                if (is(element.enclosingElement, any)) {
                    return this._searchReferences_Local(element,(n : any) =>  {
                        return is(n, any);
                    });
                }
                return this._searchReferences_Function(element);
            }else if (op(Op.EQUALS,kind,ElementKind.IMPORT)) {
                return this._searchReferences_Import(element);
            }else if (op(Op.EQUALS,kind,ElementKind.LABEL) || op(Op.EQUALS,kind,ElementKind.LOCAL_VARIABLE)) {
                return this._searchReferences_Local(element,(n : any) =>  {
                    return is(n, any);
                });
            }else if (op(Op.EQUALS,kind,ElementKind.LIBRARY)) {
                return this._searchReferences_Library(element);
            }else if (op(Op.EQUALS,kind,ElementKind.PARAMETER)) {
                return this._searchReferences_Parameter(element);
            }else if (op(Op.EQUALS,kind,ElementKind.PREFIX)) {
                return this._searchReferences_Prefix(element);
            }else if (op(Op.EQUALS,kind,ElementKind.TYPE_PARAMETER)) {
                return this._searchReferences_Local(element,(n : any) =>  {
                    return is(n.parent, any);
                });
            }
            return new core.DartList.literal<SearchResult>();
        } )());
    }

    subTypes(type : any) : async.Future<core.DartList<SearchResult>> { 
        return new async.Future.fromPromise(( async () =>  {
            if (op(Op.EQUALS,type,null)) {
                return new core.DartList.literal<SearchResult>();
            }
            let results : core.DartList<SearchResult> = new core.DartList.literal<SearchResult>();
            await this._addResults(results,type,new core.DartMap.literal([
                [IndexRelationKind.IS_EXTENDED_BY,SearchResultKind.REFERENCE],
                [IndexRelationKind.IS_MIXED_IN_BY,SearchResultKind.REFERENCE],
                [IndexRelationKind.IS_IMPLEMENTED_BY,SearchResultKind.REFERENCE]]));
            return results;
        } )());
    }

    topLevelElements(regExp : core.DartRegExp) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let elements : core.DartList<any> = new core.DartList.literal<any>();
            var addElement : (element : any) => void = (element : any) : void =>  {
                if (!element.isSynthetic && regExp.hasMatch(element.displayName)) {
                    elements.add(element);
                }
            };
            for(let file of this._driver.fsState.knownFiles) {
                let unitResult : any = await this._driver.getUnitElement(file.path);
                if (unitResult != null) {
                    let unitElement : any = unitResult.element;
                    unitElement.accessors.forEach(addElement);
                    unitElement.enums.forEach(addElement);
                    unitElement.functions.forEach(addElement);
                    unitElement.functionTypeAliases.forEach(addElement);
                    unitElement.topLevelVariables.forEach(addElement);
                    unitElement.types.forEach(addElement);
                }
            }
            return elements;
        } )());
    }

    unresolvedMemberReferences(name : string) : async.Future<core.DartList<SearchResult>> { 
        return new async.Future.fromPromise(( async () =>  {
            if (name == null) {
                return new core.DartList.literal<SearchResult>();
            }
            let files : core.DartList<string> = await this._driver.getFilesReferencingName(name);
            let results : core.DartList<SearchResult> = new core.DartList.literal();
            for(let file of files) {
                let index : any = await this._driver.getIndex(file);
                if (index != null) {
                    let request : _IndexRequest = new _IndexRequest(index);
                    let fileResults = await request.getUnresolvedMemberReferences(name,new core.DartMap.literal([
                        [IndexRelationKind.IS_READ_BY,SearchResultKind.READ],
                        [IndexRelationKind.IS_WRITTEN_BY,SearchResultKind.WRITE],
                        [IndexRelationKind.IS_READ_WRITTEN_BY,SearchResultKind.READ_WRITE],
                        [IndexRelationKind.IS_INVOKED_BY,SearchResultKind.INVOCATION]]),() =>  {
                        return this._getUnitElement(file);
                    });
                    results.addAll(fileResults);
                }
            }
            return results;
        } )());
    }

    _addResults(results : core.DartList<SearchResult>,element : any,relationToResultKind : core.DartMap<any,SearchResultKind>) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let name : string = element.displayName;
            if (is(element, any)) {
                name = element.enclosingElement.displayName;
            }
            let files : core.DartList<string> = new core.DartList.literal<string>();
            let path : string = element.source.fullName;
            if (new core.DartString(name).startsWith('_')) {
                let libraryPath : string = element.library.source.fullName;
                if (this._driver.addedFiles.contains(libraryPath)) {
                    let library : any = this._driver.fsState.getFileForPath(libraryPath);
                    let candidates : core.DartList<any> = ((_) : core.DartList<any> =>  {
                        {
                            _.addAll(library.partedFiles);
                            return _;
                        }
                    })(new core.DartList.literal(library));
                    for(let file of candidates) {
                        if (op(Op.EQUALS,file.path,path) || file.referencedNames.contains(name)) {
                            files.add(file.path);
                        }
                    }
                }
            }else {
                files = await this._driver.getFilesReferencingName(name);
                if (!files.contains(path) && this._driver.addedFiles.contains(path)) {
                    files.add(path);
                }
            }
            for(let file of files) {
                await this._addResultsInFile(results,element,relationToResultKind,file);
            }
        } )());
    }

    _addResultsInFile(results : core.DartList<SearchResult>,element : any,relationToResultKind : core.DartMap<any,SearchResultKind>,file : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let index : any = await this._driver.getIndex(file);
            if (index != null) {
                let request : _IndexRequest = new _IndexRequest(index);
                let elementId : number = request.findElementId(element);
                if (elementId != -1) {
                    let fileResults : core.DartList<SearchResult> = await request.getRelations(elementId,relationToResultKind,() =>  {
                        return this._getUnitElement(file);
                    });
                    results.addAll(fileResults);
                }
            }
        } )());
    }

    _getUnitElement(file : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let result : any = await this._driver.getUnitElement(file);
            return ((t)=>(!!t)?t.element:null)(result);
        } )());
    }

    _searchReferences(element : any) : async.Future<core.DartList<SearchResult>> { 
        return new async.Future.fromPromise(( async () =>  {
            let results : core.DartList<SearchResult> = new core.DartList.literal<SearchResult>();
            await this._addResults(results,element,new core.DartMap.literal([
                [IndexRelationKind.IS_REFERENCED_BY,SearchResultKind.REFERENCE]]));
            return results;
        } )());
    }

    _searchReferences_CompilationUnit(element : any) : async.Future<core.DartList<SearchResult>> { 
        return new async.Future.fromPromise(( async () =>  {
            let path : string = element.source.fullName;
            if (!this._driver.fsState.knownFilePaths.contains(path)) {
                return new core.DartList.literal<SearchResult>();
            }
            let results : core.DartList<SearchResult> = new core.DartList.literal<SearchResult>();
            for(let file of this._driver.fsState.knownFiles) {
                for(let referencedFile of file.directReferencedFiles) {
                    if (op(Op.EQUALS,referencedFile.path,path)) {
                        await this._addResultsInFile(results,element,new core.DartMap.literal([
                            [IndexRelationKind.IS_REFERENCED_BY,SearchResultKind.REFERENCE]]),file.path);
                    }
                }
            }
            return results;
        } )());
    }

    _searchReferences_Field(field : any) : async.Future<core.DartList<SearchResult>> { 
        return new async.Future.fromPromise(( async () =>  {
            let results : core.DartList<SearchResult> = new core.DartList.literal<SearchResult>();
            let getter : any = field.getter;
            let setter : any = field.setter;
            if (!field.isSynthetic) {
                await this._addResults(results,field,new core.DartMap.literal([
                    [IndexRelationKind.IS_WRITTEN_BY,SearchResultKind.WRITE],
                    [IndexRelationKind.IS_REFERENCED_BY,SearchResultKind.REFERENCE]]));
            }
            if (getter != null) {
                await this._addResults(results,getter,new core.DartMap.literal([
                    [IndexRelationKind.IS_REFERENCED_BY,SearchResultKind.READ],
                    [IndexRelationKind.IS_INVOKED_BY,SearchResultKind.INVOCATION]]));
            }
            if (setter != null) {
                await this._addResults(results,setter,new core.DartMap.literal([
                    [IndexRelationKind.IS_REFERENCED_BY,SearchResultKind.WRITE]]));
            }
            return results;
        } )());
    }

    _searchReferences_Function(element : any) : async.Future<core.DartList<SearchResult>> { 
        return new async.Future.fromPromise(( async () =>  {
            if (is(element, any)) {
                element = (element as any).baseElement;
            }
            let results : core.DartList<SearchResult> = new core.DartList.literal<SearchResult>();
            await this._addResults(results,element,new core.DartMap.literal([
                [IndexRelationKind.IS_REFERENCED_BY,SearchResultKind.REFERENCE],
                [IndexRelationKind.IS_INVOKED_BY,SearchResultKind.INVOCATION]]));
            return results;
        } )());
    }

    _searchReferences_Getter(getter : any) : async.Future<core.DartList<SearchResult>> { 
        return new async.Future.fromPromise(( async () =>  {
            let results : core.DartList<SearchResult> = new core.DartList.literal<SearchResult>();
            await this._addResults(results,getter,new core.DartMap.literal([
                [IndexRelationKind.IS_REFERENCED_BY,SearchResultKind.REFERENCE],
                [IndexRelationKind.IS_INVOKED_BY,SearchResultKind.INVOCATION]]));
            return results;
        } )());
    }

    _searchReferences_Import(element : any) : async.Future<core.DartList<SearchResult>> { 
        return new async.Future.fromPromise(( async () =>  {
            let path : string = element.source.fullName;
            if (!this._driver.addedFiles.contains(path)) {
                return new core.DartList.literal<SearchResult>();
            }
            let results : core.DartList<SearchResult> = new core.DartList.literal<SearchResult>();
            let libraryElement : any = element.library;
            for(let unitElement of libraryElement.units) {
                let unitPath : string = unitElement.source.fullName;
                let unitAnalysisResult : any = await this._driver.getResult(unitPath);
                let visitor : _ImportElementReferencesVisitor = new _ImportElementReferencesVisitor(element,unitElement);
                unitAnalysisResult.unit.accept(visitor);
                results.addAll(visitor.results);
            }
            return results;
        } )());
    }

    _searchReferences_Library(element : any) : async.Future<core.DartList<SearchResult>> { 
        return new async.Future.fromPromise(( async () =>  {
            let path : string = element.source.fullName;
            if (!this._driver.addedFiles.contains(path)) {
                return new core.DartList.literal<SearchResult>();
            }
            let results : core.DartList<SearchResult> = new core.DartList.literal<SearchResult>();
            for(let unitElement of element.units) {
                let unitPath : string = unitElement.source.fullName;
                let unitAnalysisResult : any = await this._driver.getResult(unitPath);
                let unit : any = unitAnalysisResult.unit;
                for(let directive of unit.directives) {
                    if (is(directive, any) && op(Op.EQUALS,directive.element,element)) {
                        results.add(new SearchResult._(unit.element,SearchResultKind.REFERENCE,directive.libraryName.offset,directive.libraryName.length,true,false));
                    }
                }
            }
            return results;
        } )());
    }

    _searchReferences_Local(element : any,isRootNode : (n : any) => boolean) : async.Future<core.DartList<SearchResult>> { 
        return new async.Future.fromPromise(( async () =>  {
            let path : string = element.source.fullName;
            if (!this._driver.addedFiles.contains(path)) {
                return new core.DartList.literal<SearchResult>();
            }
            let analysisResult : any = await this._driver.getResult(path);
            let unit : any = analysisResult.unit;
            if (op(Op.EQUALS,unit,null)) {
                return new core.DartList.literal<SearchResult>();
            }
            let node : any = new bare.createInstance(any,null,element.nameOffset).searchWithin(unit);
            if (op(Op.EQUALS,node,null)) {
                return new core.DartList.literal<SearchResult>();
            }
            let enclosingNode : any = node.getAncestor(isRootNode);
            if (op(Op.EQUALS,enclosingNode,null)) {
                return new core.DartList.literal<SearchResult>();
            }
            let visitor : _LocalReferencesVisitor = new _LocalReferencesVisitor(element,unit.element);
            enclosingNode.accept(visitor);
            return visitor.results;
        } )());
    }

    _searchReferences_Parameter(parameter : any) : async.Future<core.DartList<SearchResult>> { 
        return new async.Future.fromPromise(( async () =>  {
            let results : core.DartList<SearchResult> = new core.DartList.literal<SearchResult>();
            results.addAll(await this._searchReferences_Local(parameter,(node : any) =>  {
                let parent : any = node.parent;
                return is(parent, any) || is(parent, any);
            }));
            if (op(Op.EQUALS,parameter.parameterKind,ParameterKind.NAMED)) {
                results.addAll(await this._searchReferences(parameter));
            }
            return results;
        } )());
    }

    _searchReferences_Prefix(element : any) : async.Future<core.DartList<SearchResult>> { 
        return new async.Future.fromPromise(( async () =>  {
            let path : string = element.source.fullName;
            if (!this._driver.addedFiles.contains(path)) {
                return new core.DartList.literal<SearchResult>();
            }
            let results : core.DartList<SearchResult> = new core.DartList.literal<SearchResult>();
            let libraryElement : any = element.library;
            for(let unitElement of libraryElement.units) {
                let unitPath : string = unitElement.source.fullName;
                let unitAnalysisResult : any = await this._driver.getResult(unitPath);
                let visitor : _LocalReferencesVisitor = new _LocalReferencesVisitor(element,unitElement);
                unitAnalysisResult.unit.accept(visitor);
                results.addAll(visitor.results);
            }
            return results;
        } )());
    }

}

export namespace SearchResult {
    export type Constructors = '_';
    export type Interface = Omit<SearchResult, Constructors>;
}
@DartClass
export class SearchResult {
    enclosingElement : any;

    kind : SearchResultKind;

    offset : number;

    length : number;

    isResolved : boolean;

    isQualified : boolean;

    @namedConstructor
    _(enclosingElement : any,kind : SearchResultKind,offset : number,length : number,isResolved : boolean,isQualified : boolean) {
        this.enclosingElement = enclosingElement;
        this.kind = kind;
        this.offset = offset;
        this.length = length;
        this.isResolved = isResolved;
        this.isQualified = isQualified;
    }
    static _ : new(enclosingElement : any,kind : SearchResultKind,offset : number,length : number,isResolved : boolean,isQualified : boolean) => SearchResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write("SearchResult(kind=");
        buffer.write(this.kind);
        buffer.write(", enclosingElement=");
        buffer.write(this.enclosingElement);
        buffer.write(", offset=");
        buffer.write(this.offset);
        buffer.write(", length=");
        buffer.write(this.length);
        buffer.write(", isResolved=");
        buffer.write(this.isResolved);
        buffer.write(", isQualified=");
        buffer.write(this.isQualified);
        buffer.write(")");
        return buffer.toString();
    }
}

export enum SearchResultKind {
    READ,
    READ_WRITE,
    WRITE,
    INVOCATION,
    REFERENCE
}

export namespace _ContainingElementFinder {
    export type Constructors = '_ContainingElementFinder';
    export type Interface = Omit<_ContainingElementFinder, Constructors>;
}
@DartClass
export class _ContainingElementFinder extends any {
    offset : number;

    containingElement : any;

    constructor(offset : number) {
    }
    @defaultConstructor
    _ContainingElementFinder(offset : number) {
        this.offset = offset;
    }
    visitElement(element : any) {
        if (is(element, any)) {
            if (element.codeOffset != null && op(Op.LEQ,element.codeOffset,this.offset) && this.offset <= op(Op.PLUS,element.codeOffset,element.codeLength)) {
                this.containingElement = element;
                super.visitElement(element);
            }
        }
    }
}

export namespace _ImportElementReferencesVisitor {
    export type Constructors = '_ImportElementReferencesVisitor';
    export type Interface = Omit<_ImportElementReferencesVisitor, Constructors>;
}
@DartClass
export class _ImportElementReferencesVisitor extends any {
    results : core.DartList<SearchResult>;

    importElement : any;

    enclosingUnitElement : any;

    importedElements : core.DartSet<any>;

    constructor(element : any,enclosingUnitElement : any) {
    }
    @defaultConstructor
    _ImportElementReferencesVisitor(element : any,enclosingUnitElement : any) {
        this.results = new core.DartList.literal<SearchResult>();
        this.importElement = element;
        this.enclosingUnitElement = enclosingUnitElement;
        this.importedElements = new bare.createInstance(any,null).createImportNamespaceForDirective(element).definedNames.values.toSet();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) {
        if (node.inDeclarationContext()) {
            return;
        }
        if (this.importElement.prefix != null) {
            if (op(Op.EQUALS,node.staticElement,this.importElement.prefix)) {
                let parent : any = node.parent;
                if (is(parent, any) && op(Op.EQUALS,parent.prefix,node)) {
                    if (this.importedElements.contains(parent.staticElement)) {
                        this._addResultForPrefix(node,parent.identifier);
                    }
                }
                if (is(parent, any) && op(Op.EQUALS,parent.target,node)) {
                    if (this.importedElements.contains(parent.methodName.staticElement)) {
                        this._addResultForPrefix(node,parent.methodName);
                    }
                }
            }
        }else {
            if (this.importedElements.contains(node.staticElement)) {
                this._addResult(node.offset,0);
            }
        }
    }
    _addResult(offset : number,length : number) : void {
        let enclosingElement : any = _getEnclosingElement(this.enclosingUnitElement,offset);
        this.results.add(new SearchResult._(enclosingElement,SearchResultKind.REFERENCE,offset,length,true,false));
    }
    _addResultForPrefix(prefixNode : any,nextNode : any) : void {
        let prefixOffset : number = prefixNode.offset;
        this._addResult(prefixOffset,op(Op.MINUS,nextNode.offset,prefixOffset));
    }
}

export namespace _IndexRequest {
    export type Constructors = '_IndexRequest';
    export type Interface = Omit<_IndexRequest, Constructors>;
}
@DartClass
export class _IndexRequest {
    index : any;

    constructor(index : any) {
    }
    @defaultConstructor
    _IndexRequest(index : any) {
        this.index = index;
    }
    findElementId(element : any) : number {
        let info : any = new bare.createInstance(any,null,element);
        element = info.element;
        let unitId : number = this.getUnitId(element);
        if (unitId == -1) {
            return -1;
        }
        let unitMemberId : number = this.getElementUnitMemberId(element);
        if (unitMemberId == -1) {
            return -1;
        }
        let classMemberId : number = this.getElementClassMemberId(element);
        if (classMemberId == -1) {
            return -1;
        }
        let parameterId : number = this.getElementParameterId(element);
        if (parameterId == -1) {
            return -1;
        }
        let elementId : number = this._findFirstOccurrence(this.index.elementNameUnitMemberIds,unitMemberId);
        if (elementId == -1) {
            return -1;
        }
        for(; elementId < this.index.elementNameUnitMemberIds.length && op(Op.EQUALS,op(Op.INDEX,this.index.elementNameUnitMemberIds,elementId),unitMemberId); elementId++){
            if (op(Op.EQUALS,op(Op.INDEX,this.index.elementUnits,elementId),unitId) && op(Op.EQUALS,op(Op.INDEX,this.index.elementNameClassMemberIds,elementId),classMemberId) && op(Op.EQUALS,op(Op.INDEX,this.index.elementNameParameterIds,elementId),parameterId) && op(Op.EQUALS,op(Op.INDEX,this.index.elementKinds,elementId),info.kind)) {
                return elementId;
            }
        }
        return -1;
    }
    getElementClassMemberId(element : any) : number {
        for(; element != null; element = element.enclosingElement){
            if (is(element.enclosingElement, any)) {
                return this.getStringId(element.name);
            }
        }
        return this.index.nullStringId;
    }
    getElementParameterId(element : any) : number {
        for(; element != null; element = element.enclosingElement){
            if (is(element, any)) {
                return this.getStringId(element.name);
            }
        }
        return this.index.nullStringId;
    }
    getElementUnitMemberId(element : any) : number {
        for(; element != null; element = element.enclosingElement){
            if (is(element.enclosingElement, any)) {
                return this.getStringId(element.name);
            }
        }
        return this.index.nullStringId;
    }
    getRelations(elementId : number,relationToResultKind : core.DartMap<any,SearchResultKind>,getEnclosingUnitElement : () => async.Future<any>) : async.Future<core.DartList<SearchResult>> { 
        return new async.Future.fromPromise(( async () =>  {
            let i : number = this._findFirstOccurrence(this.index.usedElements,elementId);
            if (i == -1) {
                return new core.DartList.literal<SearchResult>();
            }
            let results : core.DartList<SearchResult> = new core.DartList.literal<SearchResult>();
            let enclosingUnitElement : any = null;
            for(; i < this.index.usedElements.length && op(Op.EQUALS,op(Op.INDEX,this.index.usedElements,i),elementId); i++){
                let relationKind : any = op(Op.INDEX,this.index.usedElementKinds,i);
                let resultKind : SearchResultKind = relationToResultKind.get(relationKind);
                if (resultKind != null) {
                    let offset : number = op(Op.INDEX,this.index.usedElementOffsets,i);
                    enclosingUnitElement = ( enclosingUnitElement ) || ( await getEnclosingUnitElement() );
                    if (enclosingUnitElement != null) {
                        let enclosingElement : any = _getEnclosingElement(enclosingUnitElement,offset);
                        results.add(new SearchResult._(enclosingElement,resultKind,offset,op(Op.INDEX,this.index.usedElementLengths,i),true,op(Op.INDEX,this.index.usedElementIsQualifiedFlags,i)));
                    }
                }
            }
            return results;
        } )());
    }

    getStringId(str : string) : number {
        return lib3.binarySearch(this.index.strings,str);
    }
    getUnitId(element : any) : number {
        let unitElement : any = getUnitElement(element);
        let libraryUriId : number = this.getUriId(unitElement.library.source.uri);
        if (libraryUriId == -1) {
            return -1;
        }
        let unitUriId : number = this.getUriId(unitElement.source.uri);
        if (unitUriId == -1) {
            return -1;
        }
        for(let i : number = 0; i < this.index.unitLibraryUris.length; i++){
            if (op(Op.EQUALS,op(Op.INDEX,this.index.unitLibraryUris,i),libraryUriId) && op(Op.EQUALS,op(Op.INDEX,this.index.unitUnitUris,i),unitUriId)) {
                return i;
            }
        }
        return -1;
    }
    getUnresolvedMemberReferences(name : string,relationToResultKind : core.DartMap<any,SearchResultKind>,getEnclosingUnitElement : () => async.Future<any>) : async.Future<core.DartList<SearchResult>> { 
        return new async.Future.fromPromise(( async () =>  {
            let nameId : number = this.getStringId(name);
            if (nameId == -1) {
                return new core.DartList.literal<SearchResult>();
            }
            let i : number = this._findFirstOccurrence(this.index.usedNames,nameId);
            if (i == -1) {
                return new core.DartList.literal<SearchResult>();
            }
            let results : core.DartList<SearchResult> = new core.DartList.literal<SearchResult>();
            let enclosingUnitElement : any = null;
            for(; i < this.index.usedNames.length && op(Op.EQUALS,op(Op.INDEX,this.index.usedNames,i),nameId); i++){
                let relationKind : any = op(Op.INDEX,this.index.usedNameKinds,i);
                let resultKind : SearchResultKind = relationToResultKind.get(relationKind);
                if (resultKind != null) {
                    let offset : number = op(Op.INDEX,this.index.usedNameOffsets,i);
                    enclosingUnitElement = ( enclosingUnitElement ) || ( await getEnclosingUnitElement() );
                    if (enclosingUnitElement != null) {
                        let enclosingElement : any = _getEnclosingElement(enclosingUnitElement,offset);
                        results.add(new SearchResult._(enclosingElement,resultKind,offset,new core.DartString(name).length,false,op(Op.INDEX,this.index.usedNameIsQualifiedFlags,i)));
                    }
                }
            }
            return results;
        } )());
    }

    getUriId(uri : lib4.Uri) : number {
        let str : string = uri.toString();
        return this.getStringId(str);
    }
    _findFirstOccurrence(sortedList : core.DartList<number>,value : number) : number {
        let i : number = lib3.binarySearch(sortedList,value);
        if (i == -1) {
            return -1;
        }
        while (i > 0 && sortedList[i - 1] == value){
            i--;
        }
        return i;
    }
}

export namespace _LocalReferencesVisitor {
    export type Constructors = '_LocalReferencesVisitor';
    export type Interface = Omit<_LocalReferencesVisitor, Constructors>;
}
@DartClass
export class _LocalReferencesVisitor extends any {
    results : core.DartList<SearchResult>;

    element : any;

    enclosingUnitElement : any;

    constructor(element : any,enclosingUnitElement : any) {
    }
    @defaultConstructor
    _LocalReferencesVisitor(element : any,enclosingUnitElement : any) {
        this.results = new core.DartList.literal<SearchResult>();
        this.element = element;
        this.enclosingUnitElement = enclosingUnitElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) {
        if (node.inDeclarationContext()) {
            return;
        }
        if (op(Op.EQUALS,node.staticElement,this.element)) {
            let parent : any = node.parent;
            let kind : SearchResultKind = SearchResultKind.REFERENCE;
            if (is(this.element, any)) {
                if (is(parent, any) && op(Op.EQUALS,parent.methodName,node)) {
                    kind = SearchResultKind.INVOCATION;
                }
            }else if (is(this.element, any)) {
                let isGet : boolean = node.inGetterContext();
                let isSet : boolean = node.inSetterContext();
                if (isGet && isSet) {
                    kind = SearchResultKind.READ_WRITE;
                }else if (isGet) {
                    if (is(parent, any) && op(Op.EQUALS,parent.methodName,node)) {
                        kind = SearchResultKind.INVOCATION;
                    }else {
                        kind = SearchResultKind.READ;
                    }
                }else if (isSet) {
                    kind = SearchResultKind.WRITE;
                }
            }
            this._addResult(node,kind);
        }
    }
    _addResult(node : any,kind : SearchResultKind) : void {
        let isQualified : boolean = is(node.parent, any);
        let enclosingElement : any = _getEnclosingElement(this.enclosingUnitElement,node.offset);
        this.results.add(new SearchResult._(enclosingElement,kind,node.offset,node.length,true,isQualified));
    }
}

export class properties {
}
