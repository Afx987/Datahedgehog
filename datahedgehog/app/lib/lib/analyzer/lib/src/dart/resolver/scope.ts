/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/resolver/scope.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace ImplicitLabelScope {
    export type Constructors = '_';
    export type Interface = Omit<ImplicitLabelScope, Constructors>;
}
@DartClass
export class ImplicitLabelScope {
    private static __$ROOT : ImplicitLabelScope;
    static get ROOT() : ImplicitLabelScope { 
        if (this.__$ROOT===undefined) {
            this.__$ROOT = new ImplicitLabelScope._(null,null);
        }
        return this.__$ROOT;
    }

    outerScope : ImplicitLabelScope;

    statement : any;

    @namedConstructor
    _(outerScope : ImplicitLabelScope,statement : any) {
        this.outerScope = outerScope;
        this.statement = statement;
    }
    static _ : new(outerScope : ImplicitLabelScope,statement : any) => ImplicitLabelScope;

    getTarget(isContinue : boolean) : any {
        if (op(Op.EQUALS,this.outerScope,null)) {
            return null;
        }
        if (isContinue && is(this.statement, any)) {
            return this.outerScope.getTarget(isContinue);
        }
        return this.statement;
    }
    nest(statement : any) : ImplicitLabelScope {
        return new ImplicitLabelScope._(this,statement);
    }
}

export namespace LabelScope {
    export type Constructors = 'LabelScope';
    export type Interface = Omit<LabelScope, Constructors>;
}
@DartClass
export class LabelScope {
    _outerScope : LabelScope;

    _label : string;

    element : any;

    node : any;

    constructor(_outerScope : LabelScope,_label : string,node : any,element : any) {
    }
    @defaultConstructor
    LabelScope(_outerScope : LabelScope,_label : string,node : any,element : any) {
        this._outerScope = _outerScope;
        this._label = _label;
        this.node = node;
        this.element = element;
    }
    lookup(targetLabel : string) : LabelScope {
        if (this._label == targetLabel) {
            return this;
        }
        return ((_249_)=>(!!_249_)?_249_.lookup(targetLabel):null)(this._outerScope);
    }
}

export namespace Namespace {
    export type Constructors = 'Namespace';
    export type Interface = Omit<Namespace, Constructors>;
}
@DartClass
export class Namespace {
    private static __$EMPTY : Namespace;
    static get EMPTY() : Namespace { 
        if (this.__$EMPTY===undefined) {
            this.__$EMPTY = new Namespace(new core.DartHashMap<string,any>());
        }
        return this.__$EMPTY;
    }
    static set EMPTY(__$value : Namespace)  { 
        this.__$EMPTY = __$value;
    }

    _definedNames : core.DartMap<string,any>;

    constructor(_definedNames : core.DartMap<string,any>) {
    }
    @defaultConstructor
    Namespace(_definedNames : core.DartMap<string,any>) {
        this._definedNames = _definedNames;
    }
    get definedNames() : core.DartMap<string,any> {
        return this._definedNames;
    }
    get(name : string) : any {
        return this._definedNames.get(name);
    }
    getPrefixed(prefix : string,name : string) : any {
        return null;
    }
}

export namespace NamespaceBuilder {
    export type Constructors = 'NamespaceBuilder';
    export type Interface = Omit<NamespaceBuilder, Constructors>;
}
@DartClass
export class NamespaceBuilder {
    createExportNamespaceForDirective(element : any) : Namespace {
        let exportedLibrary : any = element.exportedLibrary;
        if (op(Op.EQUALS,exportedLibrary,null)) {
            return Namespace.EMPTY;
        }
        let exportedNames : core.DartHashMap<string,any> = this._getExportMapping(exportedLibrary);
        exportedNames = this._applyCombinators(exportedNames,element.combinators);
        return new Namespace(exportedNames);
    }
    createExportNamespaceForLibrary(library : any) : Namespace {
        let exportedNames : core.DartHashMap<string,any> = this._getExportMapping(library);
        return new Namespace(exportedNames);
    }
    createImportNamespaceForDirective(element : any) : Namespace {
        let importedLibrary : any = element.importedLibrary;
        if (op(Op.EQUALS,importedLibrary,null)) {
            return Namespace.EMPTY;
        }
        let exportedNames : core.DartHashMap<string,any> = this._getExportMapping(importedLibrary);
        exportedNames = this._applyCombinators(exportedNames,element.combinators);
        let prefix : any = element.prefix;
        if (prefix != null) {
            return new PrefixedNamespace(prefix.name,exportedNames);
        }
        return new Namespace(exportedNames);
    }
    createPublicNamespaceForLibrary(library : any) : Namespace {
        let definedNames : core.DartHashMap<string,any> = new core.DartHashMap<string,any>();
        this._addPublicNames(definedNames,library.definingCompilationUnit);
        for(let compilationUnit of library.parts) {
            this._addPublicNames(definedNames,compilationUnit);
        }
        return new Namespace(definedNames);
    }
    _addAllFromNamespace(definedNames : core.DartMap<string,any>,namespace : Namespace) : void {
        if (namespace != null) {
            definedNames.addAll(namespace.definedNames);
        }
    }
    _addIfPublic(definedNames : core.DartMap<string,any>,element : any) : void {
        let name : string = element.name;
        if (name != null && !Scope.isPrivateName(name)) {
            definedNames.set(name,element);
        }
    }
    _addPublicNames(definedNames : core.DartMap<string,any>,compilationUnit : any) : void {
        for(let element of compilationUnit.accessors) {
            this._addIfPublic(definedNames,element);
        }
        for(let element of compilationUnit.enums) {
            this._addIfPublic(definedNames,element);
        }
        for(let element of compilationUnit.functions) {
            this._addIfPublic(definedNames,element);
        }
        for(let element of compilationUnit.functionTypeAliases) {
            this._addIfPublic(definedNames,element);
        }
        for(let element of compilationUnit.types) {
            this._addIfPublic(definedNames,element);
        }
    }
    _applyCombinators(definedNames : core.DartHashMap<string,any>,combinators : core.DartList<any>) : core.DartHashMap<string,any> {
        for(let combinator of combinators) {
            if (is(combinator, any)) {
                definedNames = this._hide(definedNames,combinator.hiddenNames);
            }else if (is(combinator, any)) {
                definedNames = this._show(definedNames,combinator.shownNames);
            }else {
                AnalysisEngine.instance.logger.logError(`Unknown type of combinator: ${combinator.runtimeType}`);
            }
        }
        return definedNames;
    }
    _computeExportMapping(library : any,visitedElements : core.DartHashSet<any>) : core.DartHashMap<string,any> {
        visitedElements.add(library);
        try {
            let definedNames : core.DartHashMap<string,any> = new core.DartHashMap<string,any>();
            for(let element of library.exports) {
                let exportedLibrary : any = element.exportedLibrary;
                if (exportedLibrary != null && !visitedElements.contains(exportedLibrary)) {
                    let exportedNames : core.DartHashMap<string,any> = this._computeExportMapping(exportedLibrary,visitedElements);
                    exportedNames = this._applyCombinators(exportedNames,element.combinators);
                    definedNames.addAll(exportedNames);
                }
            }
            this._addAllFromNamespace(definedNames,(library.context as any).getPublicNamespace(library));
            return definedNames;
        } finally {
            visitedElements.remove(library);
        }
    }
    _getExportMapping(library : any) : core.DartHashMap<string,any> {
        if (library.exportNamespace != null) {
            return library.exportNamespace.definedNames;
        }
        if (is(library, any)) {
            let exportMapping : core.DartHashMap<string,any> = this._computeExportMapping(library,new core.DartHashSet<any>());
            library.exportNamespace = new Namespace(exportMapping);
            return exportMapping;
        }
        return this._computeExportMapping(library,new core.DartHashSet<any>());
    }
    _hide(definedNames : core.DartHashMap<string,any>,hiddenNames : core.DartList<string>) : core.DartMap<string,any> {
        let newNames : core.DartHashMap<string,any> = new core.DartHashMap.from(definedNames);
        for(let name of hiddenNames) {
            newNames.remove(name);
            newNames.remove(`${name}=`);
        }
        return newNames;
    }
    _show(definedNames : core.DartHashMap<string,any>,shownNames : core.DartList<string>) : core.DartHashMap<string,any> {
        let newNames : core.DartHashMap<string,any> = new core.DartHashMap<string,any>();
        for(let name of shownNames) {
            let element : any = op(Op.INDEX,definedNames,name);
            if (element != null) {
                op(Op.INDEX_ASSIGN,newNames,name,element);
            }
            let setterName : string = `${name}=`;
            element = op(Op.INDEX,definedNames,setterName);
            if (element != null) {
                op(Op.INDEX_ASSIGN,newNames,setterName,element);
            }
        }
        return newNames;
    }
    constructor() {
    }
    @defaultConstructor
    NamespaceBuilder() {
    }
}

export namespace PrefixedNamespace {
    export type Constructors = 'PrefixedNamespace';
    export type Interface = Omit<PrefixedNamespace, Constructors>;
}
@DartClass
@Implements(Namespace)
export class PrefixedNamespace implements Namespace.Interface {
    _prefix : string;

    _length : number;

    _definedNames : core.DartHashMap<string,any>;

    constructor(prefix : string,_definedNames : core.DartHashMap<string,any>) {
    }
    @defaultConstructor
    PrefixedNamespace(prefix : string,_definedNames : core.DartHashMap<string,any>) {
        this._prefix = prefix;
        this._length = new core.DartString(prefix).length;
        this._definedNames = _definedNames;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get definedNames() : core.DartMap<string,any> {
        let definedNames : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        this._definedNames.forEach((name : string,element : any) =>  {
            definedNames.set(`${this._prefix}.${name}`,element);
        });
        return definedNames;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(name : string) : any {
        if (new core.DartString(name).length > this._length && new core.DartString(name).startsWith(this._prefix)) {
            if (new core.DartString(name).codeUnitAt(this._length) == new core.DartString('.').codeUnitAt(0)) {
                return op(Op.INDEX,this._definedNames,new core.DartString(name).substring(this._length + 1));
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getPrefixed(prefix : string,name : string) : any {
        if (prefix == this._prefix) {
            return op(Op.INDEX,this._definedNames,name);
        }
        return null;
    }
}

export namespace Scope {
    export type Constructors = 'Scope';
    export type Interface = Omit<Scope, Constructors>;
}
@DartClass
export class Scope {
    private static __$PRIVATE_NAME_PREFIX : number;
    static get PRIVATE_NAME_PREFIX() : number { 
        if (this.__$PRIVATE_NAME_PREFIX===undefined) {
            this.__$PRIVATE_NAME_PREFIX = 95;
        }
        return this.__$PRIVATE_NAME_PREFIX;
    }
    static set PRIVATE_NAME_PREFIX(__$value : number)  { 
        this.__$PRIVATE_NAME_PREFIX = __$value;
    }

    private static __$SETTER_SUFFIX : string;
    static get SETTER_SUFFIX() : string { 
        if (this.__$SETTER_SUFFIX===undefined) {
            this.__$SETTER_SUFFIX = "=";
        }
        return this.__$SETTER_SUFFIX;
    }
    static set SETTER_SUFFIX(__$value : string)  { 
        this.__$SETTER_SUFFIX = __$value;
    }

    private static __$UNARY_MINUS : string;
    static get UNARY_MINUS() : string { 
        if (this.__$UNARY_MINUS===undefined) {
            this.__$UNARY_MINUS = "unary-";
        }
        return this.__$UNARY_MINUS;
    }
    static set UNARY_MINUS(__$value : string)  { 
        this.__$UNARY_MINUS = __$value;
    }

    _definedNames : core.DartHashMap<string,any>;

    get enclosingScope() : Scope {
        return null;
    }
    define(element : any) : void {
        let name : string = this._getName(element);
        if (name != null && !new core.DartString(name).isEmpty) {
            this._definedNames = ( this._definedNames ) || ( new core.DartHashMap<string,any>() );
            this._definedNames.putIfAbsent(name,() =>  {
                return element;
            });
        }
    }
    defineNameWithoutChecking(name : string,element : any) : void {
        this._definedNames = ( this._definedNames ) || ( new core.DartHashMap<string,any>() );
        op(Op.INDEX_ASSIGN,this._definedNames,name,element);
    }
    defineWithoutChecking(element : any) : void {
        this._definedNames = ( this._definedNames ) || ( new core.DartHashMap<string,any>() );
        op(Op.INDEX_ASSIGN,this._definedNames,this._getName(element),element);
    }
    getErrorForDuplicate(existing : any,duplicate : any) : any {
        let source : any = duplicate.source;
        return new bare.createInstance(any,null,source,duplicate.nameOffset,duplicate.nameLength,CompileTimeErrorCode.DUPLICATE_DEFINITION,new core.DartList.literal(existing.displayName));
    }
    getSource(identifier : any) : any {
        let unit : any = identifier.getAncestor((node : any) =>  {
            return is(node, any);
        });
        if (unit != null) {
            let unitElement : any = unit.element;
            if (unitElement != null) {
                return unitElement.source;
            }
        }
        return null;
    }
    @Abstract
    internalLookup(identifier : any,name : string,referencingLibrary : any) : any{ throw 'abstract'}
    localLookup(name : string,referencingLibrary : any) : any {
        if (this._definedNames != null) {
            return op(Op.INDEX,this._definedNames,name);
        }
        return null;
    }
    lookup(identifier : any,referencingLibrary : any) : any {
        if (is(identifier, any)) {
            return this._internalLookupPrefixed(identifier,identifier.prefix.name,identifier.identifier.name,referencingLibrary);
        }
        return this.internalLookup(identifier,identifier.name,referencingLibrary);
    }
    shouldIgnoreUndefined(node : any) : boolean {
        if (this.enclosingScope != null) {
            return this.enclosingScope.shouldIgnoreUndefined(node);
        }
        return false;
    }
    _getName(element : any) : string {
        if (is(element, any)) {
            let method : any = element;
            if (op(Op.EQUALS,method.name,"-") && op(Op.EQUALS,method.parameters.length,0)) {
                return Scope.UNARY_MINUS;
            }
        }
        return element.name;
    }
    @Abstract
    _internalLookupPrefixed(identifier : any,prefix : string,name : string,referencingLibrary : any) : any{ throw 'abstract'}
    static isPrivateName(name : string) : boolean {
        return name != null && StringUtilities.startsWithChar(name,Scope.PRIVATE_NAME_PREFIX);
    }
    constructor() {
    }
    @defaultConstructor
    Scope() {
        this._definedNames = null;
    }
}

export namespace EnclosedScope {
    export type Constructors = Scope.Constructors | 'EnclosedScope';
    export type Interface = Omit<EnclosedScope, Constructors>;
}
@DartClass
export class EnclosedScope extends Scope {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enclosingScope : Scope;

    constructor(enclosingScope : Scope) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EnclosedScope(enclosingScope : Scope) {
        this.enclosingScope = enclosingScope;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalLookup(identifier : any,name : string,referencingLibrary : any) : any {
        let element : any = this.localLookup(name,referencingLibrary);
        if (element != null) {
            return element;
        }
        return this.enclosingScope.internalLookup(identifier,name,referencingLibrary);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _internalLookupPrefixed(identifier : any,prefix : string,name : string,referencingLibrary : any) : any {
        return this.enclosingScope._internalLookupPrefixed(identifier,prefix,name,referencingLibrary);
    }
}

export namespace LibraryImportScope {
    export type Constructors = Scope.Constructors | 'LibraryImportScope';
    export type Interface = Omit<LibraryImportScope, Constructors>;
}
@DartClass
export class LibraryImportScope extends Scope {
    private static __$conflictingSdkElements : string;
    static get conflictingSdkElements() : string { 
        if (this.__$conflictingSdkElements===undefined) {
            this.__$conflictingSdkElements = 'conflictingSdkElements';
        }
        return this.__$conflictingSdkElements;
    }

    _definingLibrary : any;

    _importedNamespaces : core.DartList<Namespace>;

    _definedPrefixedNames : core.DartMap<string,core.DartMap<string,any>>;

    constructor(_definingLibrary : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryImportScope(_definingLibrary : any) {
        this._definingLibrary = _definingLibrary;
        this._createImportedNamespaces();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    define(element : any) : void {
        if (!Scope.isPrivateName(element.displayName)) {
            super.define(element);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getSource(node : any) : any {
        let source : any = super.getSource(node);
        if (op(Op.EQUALS,source,null)) {
            source = this._definingLibrary.definingCompilationUnit.source;
        }
        return source;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalLookup(identifier : any,name : string,referencingLibrary : any) : any {
        let element : any = this.localLookup(name,referencingLibrary);
        if (element != null) {
            return element;
        }
        element = this._lookupInImportedNamespaces(identifier,(namespace : Namespace) =>  {
            return namespace.get(name);
        });
        if (element != null) {
            this.defineNameWithoutChecking(name,element);
        }
        return element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldIgnoreUndefined(node : any) : boolean {
        var getShowCombinators : (importElement : any) => core.DartIterable<any> = (importElement : any) : core.DartIterable<any> =>  {
            return importElement.combinators.where((combinator : any) =>  {
                return is(combinator, any);
            });
        };
        if (is(node, any)) {
            let prefix : string = node.prefix.name;
            let name : string = node.identifier.name;
            let imports : core.DartList<any> = this._definingLibrary.imports;
            let count : number = imports.length;
            for(let i : number = 0; i < count; i++){
                let importElement : any = imports[i];
                if (op(Op.EQUALS,((t)=>(!!t)?t.name:null)(importElement.prefix),prefix) && ((t)=>(!!t)?t.isSynthetic:null)(importElement.importedLibrary) != false) {
                    let showCombinators : core.DartIterable<any> = getShowCombinators(importElement);
                    if (showCombinators.isEmpty) {
                        return true;
                    }
                    for(let combinator of showCombinators) {
                        if (combinator.shownNames.contains(name)) {
                            return true;
                        }
                    }
                }
            }
        }else if (is(node, any)) {
            let name : string = node.name;
            let imports : core.DartList<any> = this._definingLibrary.imports;
            let count : number = imports.length;
            for(let i : number = 0; i < count; i++){
                let importElement : any = imports[i];
                if (op(Op.EQUALS,importElement.prefix,null) && ((t)=>(!!t)?t.isSynthetic:null)(importElement.importedLibrary) != false) {
                    for(let combinator of getShowCombinators(importElement)) {
                        if (combinator.shownNames.contains(name)) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
    _createImportedNamespaces() : void {
        let builder : NamespaceBuilder = new NamespaceBuilder();
        let imports : core.DartList<any> = this._definingLibrary.imports;
        let count : number = imports.length;
        this._importedNamespaces = new core.DartList<Namespace>(count);
        for(let i : number = 0; i < count; i++){
            this._importedNamespaces[i] = builder.createImportNamespaceForDirective(imports[i]);
        }
    }
    _definePrefixedNameWithoutChecking(prefix : string,name : string,element : any) : void {
        this._definedPrefixedNames = ( this._definedPrefixedNames ) || ( new core.DartHashMap<string,core.DartMap<string,any>>() );
        let unprefixedNames : core.DartMap<string,any> = this._definedPrefixedNames.putIfAbsent(prefix,() =>  {
            return new core.DartHashMap<string,any>();
        });
        unprefixedNames.set(name,element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _internalLookupPrefixed(identifier : any,prefix : string,name : string,referencingLibrary : any) : any {
        let element : any = this._localPrefixedLookup(prefix,name);
        if (element != null) {
            return element;
        }
        element = this._lookupInImportedNamespaces(identifier.identifier,(namespace : Namespace) =>  {
            return namespace.getPrefixed(prefix,name);
        });
        if (element != null) {
            this._definePrefixedNameWithoutChecking(prefix,name,element);
        }
        return element;
    }
    _localPrefixedLookup(prefix : string,name : string) : any {
        if (this._definedPrefixedNames != null) {
            let unprefixedNames : core.DartMap<string,any> = this._definedPrefixedNames.get(prefix);
            if (unprefixedNames != null) {
                return unprefixedNames.get(name);
            }
        }
        return null;
    }
    _lookupInImportedNamespaces(identifier : any,lookup : (namespace : Namespace) => any) : any {
        let sdkElements : core.DartSet<any> = new core.DartHashSet<any>();
        let nonSdkElements : core.DartSet<any> = new core.DartHashSet<any>();
        for(let i : number = 0; i < this._importedNamespaces.length; i++){
            let element : any = lookup(this._importedNamespaces[i]);
            if (element != null) {
                if (element.library.isInSdk) {
                    sdkElements.add(element);
                }else {
                    nonSdkElements.add(element);
                }
            }
        }
        let nonSdkCount : number = nonSdkElements.length;
        let sdkCount : number = sdkElements.length;
        if (nonSdkCount == 0) {
            if (sdkCount == 0) {
                return null;
            }else if (sdkCount == 1) {
                return sdkElements.first;
            }
        }
        if (nonSdkCount == 1) {
            if (sdkCount > 0) {
                identifier.setProperty(LibraryImportScope.conflictingSdkElements,sdkElements.toList({
                    growable : false}));
            }
            return nonSdkElements.first;
        }
        return new bare.createInstance(any,null,this._definingLibrary.context,sdkElements.toList({
            growable : false}),nonSdkElements.toList({
            growable : false}));
    }
}

export namespace BlockScope {
    export type Constructors = EnclosedScope.Constructors | 'BlockScope';
    export type Interface = Omit<BlockScope, Constructors>;
}
@DartClass
export class BlockScope extends EnclosedScope {
    constructor(enclosingScope : Scope,block : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BlockScope(enclosingScope : Scope,block : any) {
        super.EnclosedScope(enclosingScope);
        if (op(Op.EQUALS,block,null)) {
            throw new core.ArgumentError("block cannot be null");
        }
        this._defineElements(block);
    }
    _defineElements(block : any) : void {
        for(let element of BlockScope.elementsInBlock(block)) {
            this.define(element);
        }
    }
    static elementsInBlock(block : any) : core.DartIterable<any> { 
        return core.iter<any>(()=>(function*()  {
            let statements : any = block.statements;
            let statementCount : number = statements.length;
            for(let i : number = 0; i < statementCount; i++){
                let statement : any = op(Op.INDEX,statements,i);
                if (is(statement, any)) {
                    let variables : any = statement.variables.variables;
                    let variableCount : number = variables.length;
                    for(let j : number = 0; j < variableCount; j++){
                        yield op(Op.INDEX,variables,j).element;
                    }
                }else if (is(statement, any)) {
                    yield statement.functionDeclaration.element;
                }
            }
        }).call(this));
    }

}

export namespace ClassScope {
    export type Constructors = EnclosedScope.Constructors | 'ClassScope';
    export type Interface = Omit<ClassScope, Constructors>;
}
@DartClass
export class ClassScope extends EnclosedScope {
    constructor(enclosingScope : Scope,classElement : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassScope(enclosingScope : Scope,classElement : any) {
        super.EnclosedScope(enclosingScope);
        if (op(Op.EQUALS,classElement,null)) {
            throw new core.ArgumentError("class element cannot be null");
        }
        this._defineMembers(classElement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getErrorForDuplicate(existing : any,duplicate : any) : any {
        if (is(existing, any) && is(duplicate, any)) {
            if (op(Op.LT,existing.nameOffset,duplicate.nameOffset)) {
                return new bare.createInstance(any,null,duplicate.source,duplicate.nameOffset,duplicate.nameLength,CompileTimeErrorCode.METHOD_AND_GETTER_WITH_SAME_NAME,new core.DartList.literal(existing.displayName));
            }else {
                return new bare.createInstance(any,null,existing.source,existing.nameOffset,existing.nameLength,CompileTimeErrorCode.GETTER_AND_METHOD_WITH_SAME_NAME,new core.DartList.literal(existing.displayName));
            }
        }
        return super.getErrorForDuplicate(existing,duplicate);
    }
    _defineMembers(classElement : any) : void {
        let accessors : core.DartList<any> = classElement.accessors;
        let accessorLength : number = accessors.length;
        for(let i : number = 0; i < accessorLength; i++){
            this.define(accessors[i]);
        }
        let methods : core.DartList<any> = classElement.methods;
        let methodLength : number = methods.length;
        for(let i : number = 0; i < methodLength; i++){
            this.define(methods[i]);
        }
    }
}

export namespace ConstructorInitializerScope {
    export type Constructors = EnclosedScope.Constructors | 'ConstructorInitializerScope';
    export type Interface = Omit<ConstructorInitializerScope, Constructors>;
}
@DartClass
export class ConstructorInitializerScope extends EnclosedScope {
    constructor(enclosingScope : Scope,element : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorInitializerScope(enclosingScope : Scope,element : any) {
        super.EnclosedScope(enclosingScope);
        this._initializeFieldFormalParameters(element);
    }
    _initializeFieldFormalParameters(element : any) : void {
        for(let parameter of element.parameters) {
            if (is(parameter, any)) {
                this.define(parameter);
            }
        }
    }
}

export namespace FunctionScope {
    export type Constructors = EnclosedScope.Constructors | 'FunctionScope';
    export type Interface = Omit<FunctionScope, Constructors>;
}
@DartClass
export class FunctionScope extends EnclosedScope {
    _functionElement : any;

    _parametersDefined : boolean;

    constructor(enclosingScope : Scope,_functionElement : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionScope(enclosingScope : Scope,_functionElement : any) {
        this._parametersDefined = false;
        super.EnclosedScope(new EnclosedScope(new EnclosedScope(enclosingScope)));
        this._functionElement = _functionElement;
        if (op(Op.EQUALS,this._functionElement,null)) {
            throw new core.ArgumentError("function element cannot be null");
        }
        this._defineTypeParameters();
    }
    defineParameters() : void {
        if (this._parametersDefined) {
            return;
        }
        this._parametersDefined = true;
        let parameterScope : Scope = this.enclosingScope;
        let parameters : core.DartList<any> = this._functionElement.parameters;
        let length : number = parameters.length;
        for(let i : number = 0; i < length; i++){
            let parameter : any = parameters[i];
            if (!parameter.isInitializingFormal) {
                parameterScope.define(parameter);
            }
        }
    }
    _defineTypeParameters() : void {
        let typeParameterScope : Scope = this.enclosingScope.enclosingScope;
        let typeParameters : core.DartList<any> = this._functionElement.typeParameters;
        let length : number = typeParameters.length;
        for(let i : number = 0; i < length; i++){
            let typeParameter : any = typeParameters[i];
            typeParameterScope.define(typeParameter);
        }
    }
}

export namespace FunctionTypeScope {
    export type Constructors = EnclosedScope.Constructors | 'FunctionTypeScope';
    export type Interface = Omit<FunctionTypeScope, Constructors>;
}
@DartClass
export class FunctionTypeScope extends EnclosedScope {
    _typeElement : any;

    _parametersDefined : boolean;

    constructor(enclosingScope : Scope,_typeElement : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionTypeScope(enclosingScope : Scope,_typeElement : any) {
        this._parametersDefined = false;
        super.EnclosedScope(new EnclosedScope(enclosingScope));
        this._typeElement = _typeElement;
        this._defineTypeParameters();
    }
    defineParameters() : void {
        if (this._parametersDefined) {
            return;
        }
        this._parametersDefined = true;
        for(let parameter of this._typeElement.parameters) {
            this.define(parameter);
        }
    }
    _defineTypeParameters() : void {
        let typeParameterScope : Scope = this.enclosingScope;
        for(let typeParameter of this._typeElement.typeParameters) {
            typeParameterScope.define(typeParameter);
        }
    }
}

export namespace LibraryScope {
    export type Constructors = EnclosedScope.Constructors | 'LibraryScope';
    export type Interface = Omit<LibraryScope, Constructors>;
}
@DartClass
export class LibraryScope extends EnclosedScope {
    constructor(definingLibrary : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryScope(definingLibrary : any) {
        super.EnclosedScope(new LibraryImportScope(definingLibrary));
        this._defineTopLevelNames(definingLibrary);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getErrorForDuplicate(existing : any,duplicate : any) : any {
        if (is(existing, any)) {
            let offset : number = duplicate.nameOffset;
            if (is(duplicate, any)) {
                let accessor : any = duplicate;
                if (accessor.isSynthetic) {
                    offset = accessor.variable.nameOffset;
                }
            }
            return new bare.createInstance(any,null,duplicate.source,offset,duplicate.nameLength,CompileTimeErrorCode.PREFIX_COLLIDES_WITH_TOP_LEVEL_MEMBER,new core.DartList.literal(existing.displayName));
        }
        return super.getErrorForDuplicate(existing,duplicate);
    }
    _defineLocalNames(compilationUnit : any) : void {
        for(let element of compilationUnit.accessors) {
            this.define(element);
        }
        for(let element of compilationUnit.enums) {
            this.define(element);
        }
        for(let element of compilationUnit.functions) {
            this.define(element);
        }
        for(let element of compilationUnit.functionTypeAliases) {
            this.define(element);
        }
        for(let element of compilationUnit.types) {
            this.define(element);
        }
    }
    _defineTopLevelNames(definingLibrary : any) : void {
        for(let prefix of definingLibrary.prefixes) {
            this.define(prefix);
        }
        this._defineLocalNames(definingLibrary.definingCompilationUnit);
        for(let compilationUnit of definingLibrary.parts) {
            this._defineLocalNames(compilationUnit);
        }
    }
}

export namespace TypeParameterScope {
    export type Constructors = EnclosedScope.Constructors | 'TypeParameterScope';
    export type Interface = Omit<TypeParameterScope, Constructors>;
}
@DartClass
export class TypeParameterScope extends EnclosedScope {
    constructor(enclosingScope : Scope,element : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeParameterScope(enclosingScope : Scope,element : any) {
        super.EnclosedScope(enclosingScope);
        if (op(Op.EQUALS,element,null)) {
            throw new core.ArgumentError("element cannot be null");
        }
        this._defineTypeParameters(element);
    }
    _defineTypeParameters(element : any) : void {
        for(let typeParameter of element.typeParameters) {
            this.define(typeParameter);
        }
    }
}

export class properties {
}
