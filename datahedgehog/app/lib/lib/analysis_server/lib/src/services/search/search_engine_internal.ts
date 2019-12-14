/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/search/search_engine_internal.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace SearchEngineImpl {
    export type Constructors = 'SearchEngineImpl';
    export type Interface = Omit<SearchEngineImpl, Constructors>;
}
@DartClass
@Implements(any)
export class SearchEngineImpl implements any.Interface {
    _index : any;

    _getAstProvider : (file : string) => any;

    constructor(_index : any,_getAstProvider : (file : string) => any) {
    }
    @defaultConstructor
    SearchEngineImpl(_index : any,_getAstProvider : (file : string) => any) {
        this._index = _index;
        this._getAstProvider = _getAstProvider;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    searchAllSubtypes(type : any) : async.Future<core.DartSet<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let matches : core.DartList<any> = new core.DartList.literal<any>();
            await this._addMatches(matches,type,IndexRelationKind.IS_ANCESTOR_OF,MatchKind.DECLARATION);
            return matches.map((match : any) =>  {
                return match.element as any;
            }).toSet();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    searchMemberDeclarations(name : string) : async.Future<core.DartList<any>> {
        let pattern : string = `^${name}$`;
        return this._searchDefinedNames(pattern,IndexNameKind.classMember);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    searchMemberReferences(name : string) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let locations : core.DartList<any> = await this._index.getUnresolvedMemberReferences(name);
            return locations.map((location : any) =>  {
                return this._newMatchForLocation(location,null);
            }).toList();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    searchReferences(element : any) : async.Future<core.DartList<any>> {
        let kind : any = element.kind;
        if (op(Op.EQUALS,kind,ElementKind.CLASS) || op(Op.EQUALS,kind,ElementKind.COMPILATION_UNIT) || op(Op.EQUALS,kind,ElementKind.CONSTRUCTOR) || op(Op.EQUALS,kind,ElementKind.FUNCTION_TYPE_ALIAS) || op(Op.EQUALS,kind,ElementKind.SETTER)) {
            return this._searchReferences(element);
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
                return is(n, any);
            });
        }
        return new async.Future.value(new core.DartList.literal<any>());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    searchSubtypes(type : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let matches : core.DartList<any> = new core.DartList.literal<any>();
            await this._addMatches(matches,type,IndexRelationKind.IS_EXTENDED_BY,MatchKind.REFERENCE);
            await this._addMatches(matches,type,IndexRelationKind.IS_MIXED_IN_BY,MatchKind.REFERENCE);
            await this._addMatches(matches,type,IndexRelationKind.IS_IMPLEMENTED_BY,MatchKind.REFERENCE);
            return matches;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    searchTopLevelDeclarations(pattern : string) : async.Future<core.DartList<any>> {
        return this._searchDefinedNames(pattern,IndexNameKind.topLevel);
    }
    _addMatches(matches : core.DartList<any>,element : any,relationKind : any,kind : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let locations : core.DartList<any> = await this._index.getRelations(element,relationKind);
            for(let location of locations) {
                let match : any = this._newMatchForLocation(location,kind);
                matches.add(match);
            }
        } )());
    }

    _newMatchForLocation(location : any,kind : any) : any {
        if (op(Op.EQUALS,kind,null)) {
            let relationKind : any = location.kind;
            if (op(Op.EQUALS,relationKind,IndexRelationKind.IS_INVOKED_BY)) {
                kind = MatchKind.INVOCATION;
            }else if (op(Op.EQUALS,relationKind,IndexRelationKind.IS_REFERENCED_BY)) {
                kind = MatchKind.REFERENCE;
            }else if (op(Op.EQUALS,relationKind,IndexRelationKind.IS_READ_BY)) {
                kind = MatchKind.READ;
            }else if (op(Op.EQUALS,relationKind,IndexRelationKind.IS_READ_WRITTEN_BY)) {
                kind = MatchKind.READ_WRITE;
            }else if (op(Op.EQUALS,relationKind,IndexRelationKind.IS_WRITTEN_BY)) {
                kind = MatchKind.WRITE;
            }else {
                throw new core.ArgumentError(`Unsupported relation kind ${relationKind}`);
            }
        }
        return new SearchMatchImpl(location.context,location.libraryUri,location.unitUri,kind,new bare.createInstance(any,null,location.offset,location.length),location.isResolved,location.isQualified);
    }
    _searchDefinedNames(pattern : string,nameKind : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let regExp : core.DartRegExp = new core.DartRegExp(pattern);
            let locations : core.DartList<any> = await this._index.getDefinedNames(regExp,nameKind);
            return locations.map((location : any) =>  {
                return this._newMatchForLocation(location,MatchKind.DECLARATION);
            }).toList();
        } )());
    }

    _searchReferences(element : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let matches : core.DartList<any> = new core.DartList.literal<any>();
            await this._addMatches(matches,element,IndexRelationKind.IS_REFERENCED_BY,MatchKind.REFERENCE);
            return matches;
        } )());
    }

    _searchReferences_Field(field : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let matches : core.DartList<any> = new core.DartList.literal<any>();
            let getter : any = field.getter;
            let setter : any = field.setter;
            if (!field.isSynthetic) {
                await this._addMatches(matches,field,IndexRelationKind.IS_WRITTEN_BY,MatchKind.WRITE);
                await this._addMatches(matches,field,IndexRelationKind.IS_REFERENCED_BY,MatchKind.REFERENCE);
            }
            if (getter != null) {
                await this._addMatches(matches,getter,IndexRelationKind.IS_REFERENCED_BY,MatchKind.READ);
                await this._addMatches(matches,getter,IndexRelationKind.IS_INVOKED_BY,MatchKind.INVOCATION);
            }
            if (setter != null) {
                await this._addMatches(matches,setter,IndexRelationKind.IS_REFERENCED_BY,MatchKind.WRITE);
            }
            return matches;
        } )());
    }

    _searchReferences_Function(element : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            if (is(element, any)) {
                element = (element as any).baseElement;
            }
            let matches : core.DartList<any> = new core.DartList.literal<any>();
            await this._addMatches(matches,element,IndexRelationKind.IS_REFERENCED_BY,MatchKind.REFERENCE);
            await this._addMatches(matches,element,IndexRelationKind.IS_INVOKED_BY,MatchKind.INVOCATION);
            return matches;
        } )());
    }

    _searchReferences_Getter(getter : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let matches : core.DartList<any> = new core.DartList.literal<any>();
            await this._addMatches(matches,getter,IndexRelationKind.IS_REFERENCED_BY,MatchKind.REFERENCE);
            await this._addMatches(matches,getter,IndexRelationKind.IS_INVOKED_BY,MatchKind.INVOCATION);
            return matches;
        } )());
    }

    _searchReferences_Import(element : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let matches : core.DartList<any> = new core.DartList.literal<any>();
            let libraryElement : any = element.library;
            let librarySource : any = libraryElement.source;
            let context : any = libraryElement.context;
            for(let unitElement of libraryElement.units) {
                let unitSource : any = unitElement.source;
                let unit : any = context.resolveCompilationUnit2(unitSource,librarySource);
                let visitor : _ImportElementReferencesVisitor = new _ImportElementReferencesVisitor(element,unitSource.uri.toString());
                unit.accept(visitor);
                matches.addAll(visitor.matches);
            }
            return matches;
        } )());
    }

    _searchReferences_Library(element : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let matches : core.DartList<any> = new core.DartList.literal<any>();
            let libraryElement : any = element.library;
            let librarySource : any = libraryElement.source;
            let context : any = libraryElement.context;
            for(let unitElement of libraryElement.parts) {
                let unitSource : any = unitElement.source;
                let unit : any = context.resolveCompilationUnit2(unitSource,librarySource);
                for(let directive of unit.directives) {
                    if (is(directive, any) && op(Op.EQUALS,directive.element,libraryElement)) {
                        matches.add(new SearchMatchImpl(context,librarySource.uri.toString(),unitSource.uri.toString(),MatchKind.REFERENCE,range.node(directive.libraryName),true,false));
                    }
                }
            }
            return matches;
        } )());
    }

    _searchReferences_Local(element : any,isRootNode : (n : any) => boolean) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let visitor : _LocalReferencesVisitor = new _LocalReferencesVisitor(element);
            let astProvider : any = this._getAstProvider(element.source.fullName);
            let name : any = await astProvider.getResolvedNameForElement(element);
            let enclosingNode : any = ((_42_)=>(!!_42_)?_42_.getAncestor(isRootNode):null)(name);
            ((_43_)=>(!!_43_)?_43_.accept(visitor):null)(enclosingNode);
            return visitor.matches;
        } )());
    }

    _searchReferences_Parameter(parameter : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let matches : core.DartList<any> = new core.DartList.literal<any>();
            matches.addAll(await this._searchReferences(parameter));
            matches.addAll(await this._searchReferences_Local(parameter,(node : any) =>  {
                let parent : any = node.parent;
                return is(parent, any) || is(parent, any);
            }));
            return matches;
        } )());
    }

    _searchReferences_Prefix(element : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let matches : core.DartList<any> = new core.DartList.literal<any>();
            let libraryElement : any = element.library;
            let librarySource : any = libraryElement.source;
            let context : any = libraryElement.context;
            for(let unitElement of libraryElement.units) {
                let unitSource : any = unitElement.source;
                let unit : any = context.resolveCompilationUnit2(unitSource,librarySource);
                let visitor : _LocalReferencesVisitor = new _LocalReferencesVisitor(element,unitSource.uri.toString());
                unit.accept(visitor);
                matches.addAll(visitor.matches);
            }
            return matches;
        } )());
    }

}

export namespace SearchMatchImpl {
    export type Constructors = 'SearchMatchImpl';
    export type Interface = Omit<SearchMatchImpl, Constructors>;
}
@DartClass
@Implements(any)
export class SearchMatchImpl implements any.Interface {
    _context : any;

    libraryUri : string;

    unitUri : string;

    kind : any;

    sourceRange : any;

    isResolved : boolean;

    isQualified : boolean;

    _librarySource : any;

    _unitSource : any;

    _libraryElement : any;

    _element : any;

    constructor(_context : any,libraryUri : string,unitUri : string,kind : any,sourceRange : any,isResolved : boolean,isQualified : boolean) {
    }
    @defaultConstructor
    SearchMatchImpl(_context : any,libraryUri : string,unitUri : string,kind : any,sourceRange : any,isResolved : boolean,isQualified : boolean) {
        this._context = _context;
        this.libraryUri = libraryUri;
        this.unitUri = unitUri;
        this.kind = kind;
        this.sourceRange = sourceRange;
        this.isResolved = isResolved;
        this.isQualified = isQualified;
    }
    get element() : any {
        if (op(Op.EQUALS,this._element,null)) {
            let unitElement : any = this._context.getCompilationUnitElement(this.unitSource,this.librarySource);
            if (unitElement != null) {
                let finder : _ContainingElementFinder = new _ContainingElementFinder(this.sourceRange.offset);
                unitElement.accept(finder);
                this._element = finder.containingElement;
            }
        }
        return this._element;
    }
    get file() : string {
        return this.unitSource.fullName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return JenkinsSmiHash.hash4(new core.DartString(this.libraryUri).hashCode,new core.DartString(this.unitUri).hashCode,this.kind.hashCode,this.sourceRange.hashCode);
    }
    get libraryElement() : any {
        this._libraryElement = ( this._libraryElement ) || ( this._context.getLibraryElement(this.librarySource) );
        return this._libraryElement;
    }
    get librarySource() : any {
        this._librarySource = ( this._librarySource ) || ( this._context.sourceFactory.forUri(this.libraryUri) );
        return this._librarySource;
    }
    get unitSource() : any {
        this._unitSource = ( this._unitSource ) || ( this._context.sourceFactory.forUri(this.unitUri) );
        return this._unitSource;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        if (core.identical(object,this)) {
            return true;
        }
        if (is(object, SearchMatchImpl)) {
            return op(Op.EQUALS,this.kind,object.kind) && this.libraryUri == object.libraryUri && this.unitUri == object.unitUri && this.isResolved == object.isResolved && this.isQualified == object.isQualified && op(Op.EQUALS,this.sourceRange,object.sourceRange);
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write("SearchMatch(kind=");
        buffer.write(this.kind);
        buffer.write(", libraryUri=");
        buffer.write(this.libraryUri);
        buffer.write(", unitUri=");
        buffer.write(this.unitUri);
        buffer.write(", range=");
        buffer.write(this.sourceRange);
        buffer.write(", isResolved=");
        buffer.write(this.isResolved);
        buffer.write(", isQualified=");
        buffer.write(this.isQualified);
        buffer.write(")");
        return buffer.toString();
    }
    static withNotNullElement(matches : core.DartList<any>) : core.DartList<any> {
        return matches.where((match : any) =>  {
            return match.element != null;
        }).toList();
    }
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
    matches : core.DartList<any>;

    importElement : any;

    context : any;

    libraryUri : string;

    unitUri : string;

    importedElements : core.DartSet<any>;

    constructor(element : any,unitUri : string) {
    }
    @defaultConstructor
    _ImportElementReferencesVisitor(element : any,unitUri : string) {
        this.matches = new core.DartList.literal<any>();
        this.importElement = element;
        this.context = element.context;
        this.libraryUri = element.library.source.uri.toString();
        this.unitUri = unitUri;
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
                        this._addMatchForPrefix(node,parent.identifier);
                    }
                }
                if (is(parent, any) && op(Op.EQUALS,parent.target,node)) {
                    if (this.importedElements.contains(parent.methodName.staticElement)) {
                        this._addMatchForPrefix(node,parent.methodName);
                    }
                }
            }
        }else {
            if (this.importedElements.contains(node.staticElement)) {
                this._addMatchForRange(range.startLength(node,0));
            }
        }
    }
    _addMatchForPrefix(prefixNode : any,nextNode : any) : void {
        this._addMatchForRange(range.startStart(prefixNode,nextNode));
    }
    _addMatchForRange(range : any) : void {
        this.matches.add(new SearchMatchImpl(this.context,this.libraryUri,this.unitUri,MatchKind.REFERENCE,range,true,false));
    }
}

export namespace _LocalReferencesVisitor {
    export type Constructors = '_LocalReferencesVisitor';
    export type Interface = Omit<_LocalReferencesVisitor, Constructors>;
}
@DartClass
export class _LocalReferencesVisitor extends any {
    matches : core.DartList<any>;

    element : any;

    context : any;

    libraryUri : string;

    unitUri : string;

    constructor(element : any,unitUri? : string) {
    }
    @defaultConstructor
    _LocalReferencesVisitor(element : any,unitUri? : string) {
        this.matches = new core.DartList.literal<any>();
        this.element = element;
        this.context = element.context;
        this.libraryUri = element.library.source.uri.toString();
        this.unitUri = (unitUri || element.source.uri.toString());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) {
        if (node.inDeclarationContext()) {
            return;
        }
        if (op(Op.EQUALS,node.bestElement,this.element)) {
            let parent : any = node.parent;
            let kind : any = MatchKind.REFERENCE;
            if (is(this.element, any)) {
                if (is(parent, any) && op(Op.EQUALS,parent.methodName,node)) {
                    kind = MatchKind.INVOCATION;
                }
            }else if (is(this.element, any)) {
                let isGet : boolean = node.inGetterContext();
                let isSet : boolean = node.inSetterContext();
                if (isGet && isSet) {
                    kind = MatchKind.READ_WRITE;
                }else if (isGet) {
                    if (is(parent, any) && op(Op.EQUALS,parent.methodName,node)) {
                        kind = MatchKind.INVOCATION;
                    }else {
                        kind = MatchKind.READ;
                    }
                }else if (isSet) {
                    kind = MatchKind.WRITE;
                }
            }
            this._addMatch(node,kind);
        }
    }
    _addMatch(node : any,kind : any) : void {
        let isQualified : boolean = is(node.parent, any);
        this.matches.add(new SearchMatchImpl(this.context,this.libraryUri,this.unitUri,kind,range.node(node),true,isQualified));
    }
}

export class properties {
}
