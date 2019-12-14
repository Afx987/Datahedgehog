/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/ast.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./visitor";
import * as lib4 from "./text/ast_to_text";
import * as lib5 from "./canonical_name";
import * as lib6 from "@dart2ts/dart/uri";
import * as lib7 from "./transformations/flags";
import * as lib8 from "./type_environment";
import * as lib9 from "./type_algebra";
import * as convert from "@dart2ts/dart/convert";

export var setParents : (nodes : core.DartList<TreeNode>,parent : TreeNode) => void = (nodes : core.DartList<TreeNode>,parent : TreeNode) : void =>  {
    for(let i : number = 0; i < nodes.length; ++i){
        nodes[i].parent = parent;
    }
};
export var getCanonicalNameOfLibrary : (library : Library) => lib5.CanonicalName = (library : Library) : lib5.CanonicalName =>  {
    if (op(Op.EQUALS,library,null)) return null;
    if (op(Op.EQUALS,library.canonicalName,null)) {
        throw `${library} has no canonical name`;
    }
    return library.canonicalName;
};
export var getCanonicalNameOfClass : (class_ : Class) => lib5.CanonicalName = (class_ : Class) : lib5.CanonicalName =>  {
    if (op(Op.EQUALS,class_,null)) return null;
    if (op(Op.EQUALS,class_.canonicalName,null)) {
        throw `${class_} has no canonical name`;
    }
    return class_.canonicalName;
};
export var getCanonicalNameOfMember : (member : Member) => lib5.CanonicalName = (member : Member) : lib5.CanonicalName =>  {
    if (op(Op.EQUALS,member,null)) return null;
    if (op(Op.EQUALS,member.canonicalName,null)) {
        throw `${member} has no canonical name`;
    }
    return member.canonicalName;
};
export var getClassReference : (class_ : Class) => Reference = (class_ : Class) : Reference =>  {
    return ((t)=>(!!t)?t.reference:null)(class_);
};
export var getMemberReference : (member : Member) => Reference = (member : Member) : Reference =>  {
    return ((t)=>(!!t)?t.reference:null)(member);
};
export var _getAsTypeArguments : (typeParameters : core.DartList<TypeParameter>) => core.DartList<DartType> = (typeParameters : core.DartList<TypeParameter>) : core.DartList<DartType> =>  {
    if (typeParameters.isEmpty) return new core.DartList.literal<DartType>();
    return new core.DartList.generate(typeParameters.length,(i : any) =>  {
        return new TypeParameterType(typeParameters[i]);
    },{
        growable : false});
};
export var transformList : (nodes : core.DartList<TreeNode>,visitor : lib3.Transformer,parent : TreeNode) => void = (nodes : core.DartList<TreeNode>,visitor : lib3.Transformer,parent : TreeNode) : void =>  {
    let storeIndex : number = 0;
    for(let i : number = 0; i < nodes.length; ++i){
        let result = nodes[i].accept(visitor);
        if (result != null) {
            nodes[storeIndex] = result;
            result.parent = parent;
            ++storeIndex;
        }
    }
    if (storeIndex < nodes.length) {
        nodes.length = storeIndex;
    }
};
export var transformSupertypeList : (nodes : core.DartList<Supertype>,visitor : lib3.Transformer) => void = (nodes : core.DartList<Supertype>,visitor : lib3.Transformer) : void =>  {
    let storeIndex : number = 0;
    for(let i : number = 0; i < nodes.length; ++i){
        let result = visitor.visitSupertype(nodes[i]);
        if (result != null) {
            nodes[storeIndex] = result;
            ++storeIndex;
        }
    }
    if (storeIndex < nodes.length) {
        nodes.length = storeIndex;
    }
};
export var transformTypeList : (nodes : core.DartList<DartType>,visitor : lib3.Transformer) => void = (nodes : core.DartList<DartType>,visitor : lib3.Transformer) : void =>  {
    let storeIndex : number = 0;
    for(let i : number = 0; i < nodes.length; ++i){
        let result = visitor.visitDartType(nodes[i]);
        if (result != null) {
            nodes[storeIndex] = result;
            ++storeIndex;
        }
    }
    if (storeIndex < nodes.length) {
        nodes.length = storeIndex;
    }
};
export var visitIterable : (nodes : core.DartIterable<Node>,visitor : lib3.Visitor<any>) => void = (nodes : core.DartIterable<Node>,visitor : lib3.Visitor<any>) : void =>  {
    for(let node of nodes) {
        node.accept(visitor);
    }
};
export var visitList : (nodes : core.DartList<Node>,visitor : lib3.Visitor<any>) => void = (nodes : core.DartList<Node>,visitor : lib3.Visitor<any>) : void =>  {
    for(let i : number = 0; i < nodes.length; ++i){
        nodes[i].accept(visitor);
    }
};
export var getCanonicalNameOfTypedef : (typedef_ : Typedef) => lib5.CanonicalName = (typedef_ : Typedef) : lib5.CanonicalName =>  {
    if (op(Op.EQUALS,typedef_,null)) return null;
    if (op(Op.EQUALS,typedef_.canonicalName,null)) {
        throw `${typedef_} has no canonical name`;
    }
    return typedef_.canonicalName;
};
export namespace Reference {
    export type Constructors = 'Reference';
    export type Interface = Omit<Reference, Constructors>;
}
@DartClass
export class Reference {
    canonicalName : lib5.CanonicalName;

    node : NamedNode;

    toString() : string {
        if (this.canonicalName != null) {
            return `Reference to ${this.canonicalName}`;
        }
        if (this.node != null) {
            return `Reference to ${this.node}`;
        }
        return 'Unbound reference';
    }
    get asLibrary() : Library {
        if (op(Op.EQUALS,this.node,null)) {
            throw `${this} is not bound to an AST node. A library was expected`;
        }
        return this.node as Library;
    }
    get asClass() : Class {
        if (op(Op.EQUALS,this.node,null)) {
            throw `${this} is not bound to an AST node. A class was expected`;
        }
        return this.node as Class;
    }
    get asMember() : Member {
        if (op(Op.EQUALS,this.node,null)) {
            throw `${this} is not bound to an AST node. A member was expected`;
        }
        return this.node as Member;
    }
    get asField() : Field {
        if (op(Op.EQUALS,this.node,null)) {
            throw `${this} is not bound to an AST node. A field was expected`;
        }
        return this.node as Field;
    }
    get asConstructor() : Constructor {
        if (op(Op.EQUALS,this.node,null)) {
            throw `${this} is not bound to an AST node. A constructor was expected`;
        }
        return this.node as Constructor;
    }
    get asProcedure() : Procedure {
        if (op(Op.EQUALS,this.node,null)) {
            throw `${this} is not bound to an AST node. A procedure was expected`;
        }
        return this.node as Procedure;
    }
    get asTypedef() : Typedef {
        if (op(Op.EQUALS,this.node,null)) {
            throw `${this} is not bound to an AST node. A typedef was expected`;
        }
        return this.node as Typedef;
    }
    constructor() {
    }
    @defaultConstructor
    Reference() {
    }
}

export enum ClassLevel {
    Temporary,
    Type,
    Hierarchy,
    Mixin,
    Body
}

export enum ProcedureKind {
    Method,
    Getter,
    Setter,
    Operator,
    Factory
}

export enum AsyncMarker {
    Sync,
    SyncStar,
    Async,
    AsyncStar,
    SyncYielding
}

export namespace Source {
    export type Constructors = 'Source';
    export type Interface = Omit<Source, Constructors>;
}
@DartClass
export class Source {
    lineStarts : core.DartList<number>;

    source : core.DartList<number>;

    cachedText : string;

    constructor(lineStarts : core.DartList<number>,source : core.DartList<number>) {
    }
    @defaultConstructor
    Source(lineStarts : core.DartList<number>,source : core.DartList<number>) {
        this.lineStarts = lineStarts;
        this.source = source;
    }
    getTextLine(line : number) : string {
        core.RangeError.checkValueInInterval(line,1,this.lineStarts.length,'line');
        if (this.source == null) return null;
        this.cachedText = ( this.cachedText ) || ( convert.properties.UTF8.decode(this.source,{
            allowMalformed : true}) );
        let index : number = line - 1;
        if (index + 1 == this.lineStarts.length) {
            return new core.DartString(this.cachedText).substring(this.lineStarts[index]);
        }else if (index < this.lineStarts.length) {
            let endOfLine : number = this.lineStarts[index + 1] - 1;
            if (endOfLine > index && this.cachedText[endOfLine - 1] == "") {
                --endOfLine;
            }
            return new core.DartString(this.cachedText).substring(this.lineStarts[index],endOfLine);
        }
        throw "Internal error";
    }
    getLocation(file : string,offset : number) : Location {
        core.RangeError.checkValueInInterval(offset,0,this.lineStarts.last,'offset');
        let low : number = 0, high : number = this.lineStarts.length - 1;
        while (low < high){
            let mid : number = high - ((high - low) >> 1);
            let pivot : number = this.lineStarts[mid];
            if (pivot <= offset) {
                low = mid;
            }else {
                high = mid - 1;
            }
        }
        let lineIndex : number = low;
        let lineStart : number = this.lineStarts[lineIndex];
        let lineNumber : number = 1 + lineIndex;
        let columnNumber : number = 1 + offset - lineStart;
        return new Location(file,lineNumber,columnNumber);
    }
}

export namespace _ChildReplacer {
    export type Constructors = lib3.Transformer.Constructors | '_ChildReplacer';
    export type Interface = Omit<_ChildReplacer, Constructors>;
}
@DartClass
export class _ChildReplacer extends lib3.Transformer {
    child : TreeNode;

    replacement : TreeNode;

    constructor(child : TreeNode,replacement : TreeNode) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ChildReplacer(child : TreeNode,replacement : TreeNode) {
        this.child = child;
        this.replacement = replacement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    defaultTreeNode(node : TreeNode) {
        if (op(Op.EQUALS,node,this.child)) {
            return this.replacement;
        }else {
            return node;
        }
    }
}

export namespace Node {
    export type Constructors = 'Node';
    export type Interface = Omit<Node, Constructors>;
}
@DartClass
export class Node {
    constructor() {
    }
    @defaultConstructor
    Node() {
    }
    @Abstract
    accept(v : lib3.Visitor<any>){ throw 'abstract'}
    @Abstract
    visitChildren(v : lib3.Visitor<any>){ throw 'abstract'}
    toString() : string {
        return lib4.debugNodeToString(this);
    }
}

export namespace Name {
    export type Constructors = '_internal';
    export type Interface = Omit<Name, Constructors>;
}
@DartClass
@Implements(Node)
export class Name implements Node.Interface {
    hashCode : number;

    name : string;

    @AbstractProperty
    get libraryName() : Reference{ throw 'abstract'}
    @AbstractProperty
    get library() : Library{ throw 'abstract'}
    @AbstractProperty
    get isPrivate() : boolean{ throw 'abstract'}
    @namedConstructor
    _internal(hashCode : number,name : string) {
        this.hashCode = hashCode;
        this.name = name;
    }
    static _internal : new(hashCode : number,name : string) => Name;

    constructor(name : string,library? : Library) {
    }
    @defaultFactory
    static $Name(name : string,library? : Library) : Name {
        return new Name.byReference(name,((t)=>(!!t)?t.reference:null)(library));
    }
    @namedFactory
    static $byReference(name : string,libraryName : Reference) : Name {
        if (new core.DartString(name).startsWith('_')) {
            /* TODO (AssertStatementImpl) : assert (libraryName != null); */;
            return new _PrivateName(name,libraryName);
        }else {
            return new _PublicName(name);
        }
    }
    static byReference : new(name : string,libraryName : Reference) => Name;

    [OperatorMethods.EQUALS](other : any) : boolean {
        return is(other, Name) && this.name == other.name && op(Op.EQUALS,this.library,other.library);
    }
    accept(v : lib3.Visitor<any>) {
        return v.visitName(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
}

export namespace Location {
    export type Constructors = 'Location';
    export type Interface = Omit<Location, Constructors>;
}
@DartClass
export class Location {
    file : string;

    line : number;

    column : number;

    constructor(file : string,line : number,column : number) {
    }
    @defaultConstructor
    Location(file : string,line : number,column : number) {
        this.file = file;
        this.line = line;
        this.column = column;
    }
    toString() : string {
        return `${this.file}:${this.line}:${this.column}`;
    }
}

export namespace TreeNode {
    export type Constructors = Node.Constructors | 'TreeNode';
    export type Interface = Omit<TreeNode, Constructors>;
}
@DartClass
export class TreeNode extends Node {
    private static __$_hashCounter : number;
    static get _hashCounter() : number { 
        if (this.__$_hashCounter===undefined) {
            this.__$_hashCounter = 0;
        }
        return this.__$_hashCounter;
    }
    static set _hashCounter(__$value : number)  { 
        this.__$_hashCounter = __$value;
    }

    hashCode : number;

    private static __$noOffset : number;
    static get noOffset() : number { 
        if (this.__$noOffset===undefined) {
            this.__$noOffset = -1;
        }
        return this.__$noOffset;
    }

    parent : TreeNode;

    fileOffset : number;

    @Abstract
    accept(v : lib3.TreeVisitor<any>){ throw 'abstract'}
    @Abstract
    visitChildren(v : lib3.Visitor<any>){ throw 'abstract'}
    @Abstract
    transformChildren(v : lib3.Transformer){ throw 'abstract'}
    replaceChild(child : TreeNode,replacement : TreeNode) : void {
        this.transformChildren(new _ChildReplacer(child,replacement));
    }
    replaceWith(replacement : TreeNode) : void {
        this.parent.replaceChild(this,replacement);
        this.parent = null;
    }
    remove() : void {
        ((_576_)=>(!!_576_)?_576_.replaceChild(this,null):null)(this.parent);
        this.parent = null;
    }
    get enclosingProgram() : Program {
        return ((t)=>(!!t)?t.enclosingProgram:null)(this.parent);
    }
    get location() : Location {
        if (this.fileOffset == TreeNode.noOffset) return ((t)=>(!!t)?t.location:null)(this.parent);
        return this._getLocationInEnclosingFile(this.fileOffset);
    }
    _getLocationInEnclosingFile(offset : number) : Location {
        return ((_577_)=>(!!_577_)?_577_._getLocationInEnclosingFile(offset):null)(this.parent);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TreeNode() {
        this.hashCode = TreeNode._hashCounter = (TreeNode._hashCounter + 1) & 1073741823;
        this.fileOffset = TreeNode.noOffset;
    }
}

export namespace NamedType {
    export type Constructors = Node.Constructors | 'NamedType';
    export type Interface = Omit<NamedType, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class NamedType extends Node implements core.DartComparable.Interface<NamedType> {
    name : string;

    type : DartType;

    constructor(name : string,type : DartType) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NamedType(name : string,type : DartType) {
        this.name = name;
        this.type = type;
    }
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        return is(other, NamedType) && this.name == other.name && op(Op.EQUALS,this.type,other.type);
    }
    get hashCode() : number {
        return new core.DartString(this.name).hashCode * 31 + this.type.hashCode * 37;
    }
    compareTo(other : NamedType) : number {
        return new core.DartString(this.name).compareTo(other.name);
    }
    accept(v : lib3.Visitor<any>) {
        return v.visitNamedType(this);
    }
    visitChildren(v : lib3.Visitor<any>) : void {
        this.type.accept(v);
    }
}

export namespace _PrivateName {
    export type Constructors = Name.Constructors | '_PrivateName';
    export type Interface = Omit<_PrivateName, Constructors>;
}
@DartClass
export class _PrivateName extends Name {
    libraryName : Reference;

    get isPrivate() : boolean {
        return true;
    }
    constructor(name : string,libraryName : Reference) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PrivateName(name : string,libraryName : Reference) {
        this.libraryName = libraryName;
        super._internal(_PrivateName._computeHashCode(name,libraryName),name);
    }
    toString() : string {
        return this.library != null ? `${this.library}::${this.name}` : this.name;
    }
    get library() : Library {
        return this.libraryName.asLibrary;
    }
    static _computeHashCode(name : string,libraryName : Reference) : number {
        return 131 * new core.DartString(name).hashCode + 17 * libraryName.hashCode;
    }
}

export namespace _PublicName {
    export type Constructors = Name.Constructors | '_PublicName';
    export type Interface = Omit<_PublicName, Constructors>;
}
@DartClass
export class _PublicName extends Name {
    get libraryName() : Reference {
        return null;
    }
    get library() : Library {
        return null;
    }
    get isPrivate() : boolean {
        return false;
    }
    constructor(name : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PublicName(name : string) {
        super._internal(new core.DartString(name).hashCode,name);
    }
    toString() : string {
        return this.name;
    }
}

export namespace DartType {
    export type Constructors = Node.Constructors | 'DartType';
    export type Interface = Omit<DartType, Constructors>;
}
@DartClass
export class DartType extends Node {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DartType() {
    }
    @Abstract
    accept(v : lib3.DartTypeVisitor<any>){ throw 'abstract'}
    @Abstract
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean{ throw 'abstract'}
    get unalias() : DartType {
        return this;
    }
    get unaliasOnce() : DartType {
        return this;
    }
}

export namespace Supertype {
    export type Constructors = Node.Constructors | 'Supertype' | 'byReference';
    export type Interface = Omit<Supertype, Constructors>;
}
@DartClass
export class Supertype extends Node {
    className : Reference;

    typeArguments : core.DartList<DartType>;

    constructor(classNode : Class,typeArguments : core.DartList<DartType>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Supertype(classNode : Class,typeArguments : core.DartList<DartType>) {
        this.byReference(getClassReference(classNode),typeArguments);
    }
    @namedConstructor
    byReference(className : Reference,typeArguments : core.DartList<DartType>) {
        this.className = className;
        this.typeArguments = typeArguments;
    }
    static byReference : new(className : Reference,typeArguments : core.DartList<DartType>) => Supertype;

    get classNode() : Class {
        return this.className.asClass;
    }
    accept(v : lib3.Visitor<any>) {
        return v.visitSupertype(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        this.classNode.acceptReference(v);
        visitList(this.typeArguments,v);
    }
    get asInterfaceType() : InterfaceType {
        return new InterfaceType(this.classNode,this.typeArguments);
    }
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        if (core.identical(this,other)) return true;
        if (is(other, Supertype)) {
            if (this.className != other.className) return false;
            if (this.typeArguments.length != other.typeArguments.length) return false;
            for(let i : number = 0; i < this.typeArguments.length; ++i){
                if (this.typeArguments[i] != other.typeArguments[i]) return false;
            }
            return true;
        }else {
            return false;
        }
    }
    get hashCode() : number {
        let hash : number = 1073741823 & this.className.hashCode;
        for(let i : number = 0; i < this.typeArguments.length; ++i){
            hash = 1073741823 & (hash * 31 + (hash ^ this.typeArguments[i].hashCode));
        }
        return hash;
    }
}

export namespace FunctionNode {
    export type Constructors = TreeNode.Constructors | 'FunctionNode';
    export type Interface = Omit<FunctionNode, Constructors>;
}
@DartClass
export class FunctionNode extends TreeNode {
    fileEndOffset : number;

    asyncMarker : AsyncMarker;

    dartAsyncMarker : AsyncMarker;

    typeParameters : core.DartList<TypeParameter>;

    requiredParameterCount : number;

    positionalParameters : core.DartList<VariableDeclaration>;

    namedParameters : core.DartList<VariableDeclaration>;

    returnType : DartType;

    body : Statement;

    constructor(body : Statement,_namedArguments? : {typeParameters? : core.DartList<TypeParameter>,positionalParameters? : core.DartList<VariableDeclaration>,namedParameters? : core.DartList<VariableDeclaration>,requiredParameterCount? : number,returnType? : DartType,asyncMarker? : AsyncMarker,dartAsyncMarker? : AsyncMarker}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionNode(body : Statement,_namedArguments? : {typeParameters? : core.DartList<TypeParameter>,positionalParameters? : core.DartList<VariableDeclaration>,namedParameters? : core.DartList<VariableDeclaration>,requiredParameterCount? : number,returnType? : DartType,asyncMarker? : AsyncMarker,dartAsyncMarker? : AsyncMarker}) {
        let {typeParameters,positionalParameters,namedParameters,requiredParameterCount,returnType,asyncMarker,dartAsyncMarker} = Object.assign({
            "returnType" : new DynamicType(),
            "asyncMarker" : AsyncMarker.Sync}, _namedArguments );
        this.fileEndOffset = TreeNode.noOffset;
        this.positionalParameters = (positionalParameters || new core.DartList.literal<VariableDeclaration>());
        this.requiredParameterCount = ((requiredParameterCount || ((t)=>(!!t)?t.length:null)(positionalParameters)) || 0);
        this.namedParameters = (namedParameters || new core.DartList.literal<VariableDeclaration>());
        this.typeParameters = (typeParameters || new core.DartList.literal<TypeParameter>());
        this.body = body;
        this.returnType = returnType;
        this.asyncMarker = asyncMarker;
        this.dartAsyncMarker = dartAsyncMarker;
        /* TODO (AssertStatementImpl) : assert (returnType != null); */;
        setParents(this.typeParameters,this);
        setParents(this.positionalParameters,this);
        setParents(this.namedParameters,this);
        ((t)=>(!!t)?t.parent:null)(this.body) = this;
        this.dartAsyncMarker = ( this.dartAsyncMarker ) || ( this.asyncMarker );
    }
    static _getTypeOfVariable(node : VariableDeclaration) : DartType {
        return node.type;
    }
    static _getNamedTypeOfVariable(node : VariableDeclaration) : NamedType {
        return new NamedType(node.name,node.type);
    }
    get functionType() : FunctionType {
        let parent : TreeNode = this.parent;
        let named : core.DartList<NamedType> = this.namedParameters.map(FunctionNode._getNamedTypeOfVariable.bind(this)).toList({
            growable : false});
        named.sort();
        return new FunctionType(this.positionalParameters.map(FunctionNode._getTypeOfVariable.bind(this)).toList({
            growable : false}),this.returnType,{
            namedParameters : named,typeParameters : is(parent, Constructor) ? parent.enclosingClass.typeParameters : this.typeParameters,requiredParameterCount : this.requiredParameterCount});
    }
    accept(v : lib3.TreeVisitor<any>) {
        return v.visitFunctionNode(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        visitList(this.typeParameters,v);
        visitList(this.positionalParameters,v);
        visitList(this.namedParameters,v);
        ((_595_)=>(!!_595_)?_595_.accept(v):null)(this.returnType);
        ((_596_)=>(!!_596_)?_596_.accept(v):null)(this.body);
    }
    transformChildren(v : lib3.Transformer) {
        transformList(this.typeParameters,v,this);
        transformList(this.positionalParameters,v,this);
        transformList(this.namedParameters,v,this);
        this.returnType = v.visitDartType(this.returnType);
        if (this.body != null) {
            this.body = this.body.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.body) = this;
        }
    }
}

export namespace DynamicType {
    export type Constructors = DartType.Constructors | 'DynamicType';
    export type Interface = Omit<DynamicType, Constructors>;
}
@DartClass
export class DynamicType extends DartType {
    hashCode : number;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DynamicType() {
        this.hashCode = 54321;
    }
    accept(v : lib3.DartTypeVisitor<any>) {
        return v.visitDynamicType(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        return is(other, DynamicType);
    }
}

export namespace Arguments {
    export type Constructors = TreeNode.Constructors | 'Arguments' | 'empty';
    export type Interface = Omit<Arguments, Constructors>;
}
@DartClass
export class Arguments extends TreeNode {
    types : core.DartList<DartType>;

    positional : core.DartList<Expression>;

    named : core.DartList<NamedExpression>;

    constructor(positional : core.DartList<Expression>,_namedArguments? : {types? : core.DartList<DartType>,named? : core.DartList<NamedExpression>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Arguments(positional : core.DartList<Expression>,_namedArguments? : {types? : core.DartList<DartType>,named? : core.DartList<NamedExpression>}) {
        let {types,named} = Object.assign({
        }, _namedArguments );
        this.types = (types || new core.DartList.literal<DartType>());
        this.named = (named || new core.DartList.literal<NamedExpression>());
        this.positional = positional;
        setParents(this.positional,this);
        setParents(this.named,this);
    }
    @namedConstructor
    empty() {
        this.types = new core.DartList.literal<DartType>();
        this.positional = new core.DartList.literal<Expression>();
        this.named = new core.DartList.literal<NamedExpression>();
    }
    static empty : new() => Arguments;

    accept(v : lib3.TreeVisitor<any>) {
        return v.visitArguments(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        visitList(this.types,v);
        visitList(this.positional,v);
        visitList(this.named,v);
    }
    transformChildren(v : lib3.Transformer) {
        transformTypeList(this.types,v);
        transformList(this.positional,v,this);
        transformList(this.named,v,this);
    }
}

export namespace NamedExpression {
    export type Constructors = TreeNode.Constructors | 'NamedExpression';
    export type Interface = Omit<NamedExpression, Constructors>;
}
@DartClass
export class NamedExpression extends TreeNode {
    name : string;

    value : Expression;

    constructor(name : string,value : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NamedExpression(name : string,value : Expression) {
        this.name = name;
        this.value = value;
        ((t)=>(!!t)?t.parent:null)(this.value) = this;
    }
    accept(v : lib3.TreeVisitor<any>) {
        return v.visitNamedExpression(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_618_)=>(!!_618_)?_618_.accept(v):null)(this.value);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.value != null) {
            this.value = this.value.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.value) = this;
        }
    }
}

export namespace LibraryDependency {
    export type Constructors = TreeNode.Constructors | 'LibraryDependency' | 'deferredImport' | 'import' | 'export' | 'byReference';
    export type Interface = Omit<LibraryDependency, Constructors>;
}
@DartClass
export class LibraryDependency extends TreeNode {
    flags : number;

    annotations : core.DartList<Expression>;

    importedLibraryReference : Reference;

    name : string;

    combinators : core.DartList<Combinator>;

    constructor(flags : number,annotations : core.DartList<Expression>,importedLibrary : Library,name : string,combinators : core.DartList<Combinator>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryDependency(flags : number,annotations : core.DartList<Expression>,importedLibrary : Library,name : string,combinators : core.DartList<Combinator>) {
        this.byReference(flags,annotations,importedLibrary.reference,name,combinators);
    }
    @namedConstructor
    deferredImport(importedLibrary : Library,name : string,_namedArguments? : {combinators? : core.DartList<Combinator>,annotations? : core.DartList<Expression>}) {
        let {combinators,annotations} = Object.assign({
        }, _namedArguments );
        this.byReference(LibraryDependency.DeferredFlag,(annotations || new core.DartList.literal<Expression>()),importedLibrary.reference,name,(combinators || new core.DartList.literal<Combinator>()));
    }
    static deferredImport : new(importedLibrary : Library,name : string,_namedArguments? : {combinators? : core.DartList<Combinator>,annotations? : core.DartList<Expression>}) => LibraryDependency;

    @namedConstructor
    import(importedLibrary : Library,_namedArguments? : {name? : string,combinators? : core.DartList<Combinator>,annotations? : core.DartList<Expression>}) {
        let {name,combinators,annotations} = Object.assign({
        }, _namedArguments );
        this.byReference(0,(annotations || new core.DartList.literal<Expression>()),importedLibrary.reference,name,(combinators || new core.DartList.literal<Combinator>()));
    }
    static import : new(importedLibrary : Library,_namedArguments? : {name? : string,combinators? : core.DartList<Combinator>,annotations? : core.DartList<Expression>}) => LibraryDependency;

    @namedConstructor
    export(importedLibrary : Library,_namedArguments? : {combinators? : core.DartList<Combinator>,annotations? : core.DartList<Expression>}) {
        let {combinators,annotations} = Object.assign({
        }, _namedArguments );
        this.byReference(LibraryDependency.ExportFlag,(annotations || new core.DartList.literal<Expression>()),importedLibrary.reference,null,(combinators || new core.DartList.literal<Combinator>()));
    }
    static export : new(importedLibrary : Library,_namedArguments? : {combinators? : core.DartList<Combinator>,annotations? : core.DartList<Expression>}) => LibraryDependency;

    @namedConstructor
    byReference(flags : number,annotations : core.DartList<Expression>,importedLibraryReference : Reference,name : string,combinators : core.DartList<Combinator>) {
        this.flags = flags;
        this.annotations = annotations;
        this.importedLibraryReference = importedLibraryReference;
        this.name = name;
        this.combinators = combinators;
        setParents(this.annotations,this);
        setParents(this.combinators,this);
    }
    static byReference : new(flags : number,annotations : core.DartList<Expression>,importedLibraryReference : Reference,name : string,combinators : core.DartList<Combinator>) => LibraryDependency;

    get enclosingLibrary() : Library {
        return this.parent;
    }
    get targetLibrary() : Library {
        return this.importedLibraryReference.asLibrary;
    }
    private static __$ExportFlag : number;
    static get ExportFlag() : number { 
        if (this.__$ExportFlag===undefined) {
            this.__$ExportFlag = 1 << 0;
        }
        return this.__$ExportFlag;
    }

    private static __$DeferredFlag : number;
    static get DeferredFlag() : number { 
        if (this.__$DeferredFlag===undefined) {
            this.__$DeferredFlag = 1 << 1;
        }
        return this.__$DeferredFlag;
    }

    get isExport() : boolean {
        return this.flags & LibraryDependency.ExportFlag != 0;
    }
    get isImport() : boolean {
        return !this.isExport;
    }
    get isDeferred() : boolean {
        return this.flags & LibraryDependency.DeferredFlag != 0;
    }
    addAnnotation(annotation : Expression) : void {
        this.annotations.add(((_) : Expression =>  {
            {
                _.parent = this;
                return _;
            }
        })(annotation));
    }
    accept(v : lib3.TreeVisitor<any>) {
        return v.visitLibraryDependency(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        visitList(this.annotations,v);
        visitList(this.combinators,v);
    }
    transformChildren(v : lib3.Transformer) {
        transformList(this.annotations,v,this);
        transformList(this.combinators,v,this);
    }
}

export namespace Combinator {
    export type Constructors = TreeNode.Constructors | 'Combinator' | 'show' | 'hide';
    export type Interface = Omit<Combinator, Constructors>;
}
@DartClass
export class Combinator extends TreeNode {
    isShow : boolean;

    names : core.DartList<string>;

    get dependency() : LibraryDependency {
        return this.parent;
    }
    constructor(isShow : boolean,names : core.DartList<string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Combinator(isShow : boolean,names : core.DartList<string>) {
        this.isShow = isShow;
        this.names = names;
    }
    @namedConstructor
    show(names : core.DartList<string>) {
        this.isShow = true;
        this.names = names;
    }
    static show : new(names : core.DartList<string>) => Combinator;

    @namedConstructor
    hide(names : core.DartList<string>) {
        this.isShow = false;
        this.names = names;
    }
    static hide : new(names : core.DartList<string>) => Combinator;

    get isHide() : boolean {
        return !this.isShow;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(v : lib3.TreeVisitor<any>) {
        return v.visitCombinator(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(v : lib3.Visitor<any>) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    transformChildren(v : lib3.Transformer) {
    }
}

export namespace Initializer {
    export type Constructors = TreeNode.Constructors | 'Initializer';
    export type Interface = Omit<Initializer, Constructors>;
}
@DartClass
export class Initializer extends TreeNode {
    @Abstract
    accept(v : lib3.InitializerVisitor<any>){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Initializer() {
    }
}

export namespace SwitchCase {
    export type Constructors = TreeNode.Constructors | 'SwitchCase' | 'defaultCase' | 'empty';
    export type Interface = Omit<SwitchCase, Constructors>;
}
@DartClass
export class SwitchCase extends TreeNode {
    expressions : core.DartList<Expression>;

    expressionOffsets : core.DartList<number>;

    body : Statement;

    isDefault : boolean;

    constructor(expressions : core.DartList<Expression>,expressionOffsets : core.DartList<number>,body : Statement,_namedArguments? : {isDefault? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SwitchCase(expressions : core.DartList<Expression>,expressionOffsets : core.DartList<number>,body : Statement,_namedArguments? : {isDefault? : boolean}) {
        let {isDefault} = Object.assign({
            "isDefault" : false}, _namedArguments );
        this.expressions = expressions;
        this.expressionOffsets = expressionOffsets;
        this.body = body;
        this.isDefault = isDefault;
        setParents(this.expressions,this);
        ((t)=>(!!t)?t.parent:null)(this.body) = this;
    }
    @namedConstructor
    defaultCase(body : Statement) {
        this.isDefault = true;
        this.expressions = new core.DartList.literal<Expression>();
        this.expressionOffsets = new core.DartList.literal<number>();
        this.body = body;
        ((t)=>(!!t)?t.parent:null)(this.body) = this;
    }
    static defaultCase : new(body : Statement) => SwitchCase;

    @namedConstructor
    empty() {
        this.expressions = new core.DartList.literal<Expression>();
        this.expressionOffsets = new core.DartList.literal<number>();
        this.body = null;
        this.isDefault = false;
    }
    static empty : new() => SwitchCase;

    accept(v : lib3.TreeVisitor<any>) {
        return v.visitSwitchCase(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        visitList(this.expressions,v);
        ((_665_)=>(!!_665_)?_665_.accept(v):null)(this.body);
    }
    transformChildren(v : lib3.Transformer) {
        transformList(this.expressions,v,this);
        if (this.body != null) {
            this.body = this.body.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.body) = this;
        }
    }
}

export namespace TypeParameter {
    export type Constructors = TreeNode.Constructors | 'TypeParameter';
    export type Interface = Omit<TypeParameter, Constructors>;
}
@DartClass
export class TypeParameter extends TreeNode {
    name : string;

    bound : DartType;

    binaryOffset : number;

    constructor(name? : string,bound? : DartType) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeParameter(name? : string,bound? : DartType) {
        this.binaryOffset = 0;
        this.name = name;
        this.bound = bound;
    }
    accept(v : lib3.TreeVisitor<any>) {
        return v.visitTypeParameter(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        this.bound.accept(v);
    }
    transformChildren(v : lib3.Transformer) {
        this.bound = v.visitDartType(this.bound);
    }
    toString() : string {
        return lib4.debugQualifiedTypeParameterName(this);
    }
}

export namespace VectorType {
    export type Constructors = DartType.Constructors | 'VectorType';
    export type Interface = Omit<VectorType, Constructors>;
}
@DartClass
export class VectorType extends DartType {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VectorType() {
    }
    accept(v : lib3.DartTypeVisitor<any>) {
        return v.visitVectorType(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
}

export namespace InterfaceType {
    export type Constructors = DartType.Constructors | 'InterfaceType' | 'byReference';
    export type Interface = Omit<InterfaceType, Constructors>;
}
@DartClass
export class InterfaceType extends DartType {
    className : Reference;

    typeArguments : core.DartList<DartType>;

    constructor(classNode : Class,typeArguments? : core.DartList<DartType>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InterfaceType(classNode : Class,typeArguments? : core.DartList<DartType>) {
        this.byReference(getClassReference(classNode),(typeArguments || InterfaceType._defaultTypeArguments(classNode)));
    }
    @namedConstructor
    byReference(className : Reference,typeArguments : core.DartList<DartType>) {
        this.className = className;
        this.typeArguments = typeArguments;
    }
    static byReference : new(className : Reference,typeArguments : core.DartList<DartType>) => InterfaceType;

    get classNode() : Class {
        return this.className.asClass;
    }
    static _defaultTypeArguments(classNode : Class) : core.DartList<DartType> {
        if (classNode.typeParameters.length == 0) {
            return new core.DartList.literal<DartType>();
        }else {
            return new core.DartList.filled(classNode.typeParameters.length,new DynamicType());
        }
    }
    accept(v : lib3.DartTypeVisitor<any>) {
        return v.visitInterfaceType(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        this.classNode.acceptReference(v);
        visitList(this.typeArguments,v);
    }
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        if (core.identical(this,other)) return true;
        if (is(other, InterfaceType)) {
            if (this.className != other.className) return false;
            if (this.typeArguments.length != other.typeArguments.length) return false;
            for(let i : number = 0; i < this.typeArguments.length; ++i){
                if (this.typeArguments[i] != other.typeArguments[i]) return false;
            }
            return true;
        }else {
            return false;
        }
    }
    get hashCode() : number {
        let hash : number = 1073741823 & this.className.hashCode;
        for(let i : number = 0; i < this.typeArguments.length; ++i){
            hash = 1073741823 & (hash * 31 + (hash ^ this.typeArguments[i].hashCode));
        }
        return hash;
    }
}

export namespace TypeParameterType {
    export type Constructors = DartType.Constructors | 'TypeParameterType';
    export type Interface = Omit<TypeParameterType, Constructors>;
}
@DartClass
export class TypeParameterType extends DartType {
    parameter : TypeParameter;

    bound : DartType;

    constructor(parameter : TypeParameter,bound? : DartType) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeParameterType(parameter : TypeParameter,bound? : DartType) {
        this.parameter = parameter;
        this.bound = bound;
    }
    accept(v : lib3.DartTypeVisitor<any>) {
        return v.visitTypeParameterType(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        return is(other, TypeParameterType) && op(Op.EQUALS,this.parameter,other.parameter);
    }
    get hashCode() : number {
        return (properties._temporaryHashCodeTable.get(this.parameter) || this.parameter.hashCode);
    }
}

export namespace TypedefType {
    export type Constructors = DartType.Constructors | 'TypedefType' | 'byReference';
    export type Interface = Omit<TypedefType, Constructors>;
}
@DartClass
export class TypedefType extends DartType {
    typedefReference : Reference;

    typeArguments : core.DartList<DartType>;

    constructor(typedefNode : Typedef,typeArguments? : core.DartList<DartType>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypedefType(typedefNode : Typedef,typeArguments? : core.DartList<DartType>) {
        this.byReference(typedefNode.reference,(typeArguments || new core.DartList.literal<DartType>()));
    }
    @namedConstructor
    byReference(typedefReference : Reference,typeArguments : core.DartList<DartType>) {
        this.typedefReference = typedefReference;
        this.typeArguments = typeArguments;
    }
    static byReference : new(typedefReference : Reference,typeArguments : core.DartList<DartType>) => TypedefType;

    get typedefNode() : Typedef {
        return this.typedefReference.asTypedef;
    }
    accept(v : lib3.DartTypeVisitor<any>) {
        return v.visitTypedefType(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        visitList(this.typeArguments,v);
        v.visitTypedefReference(this.typedefNode);
    }
    get unaliasOnce() : DartType {
        return lib9.Substitution.fromTypedefType(this).substituteType(this.typedefNode.type);
    }
    get unalias() : DartType {
        return this.unaliasOnce.unalias;
    }
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        if (core.identical(this,other)) return true;
        if (is(other, TypedefType)) {
            if (this.typedefReference != other.typedefReference || this.typeArguments.length != other.typeArguments.length) {
                return false;
            }
            for(let i : number = 0; i < this.typeArguments.length; ++i){
                if (this.typeArguments[i] != other.typeArguments[i]) return false;
            }
            return true;
        }
        return false;
    }
    get hashCode() : number {
        let hash : number = 1073741823 & this.typedefNode.hashCode;
        for(let i : number = 0; i < this.typeArguments.length; ++i){
            hash = 1073741823 & (hash * 31 + (hash ^ this.typeArguments[i].hashCode));
        }
        return hash;
    }
}

export namespace BottomType {
    export type Constructors = DartType.Constructors | 'BottomType';
    export type Interface = Omit<BottomType, Constructors>;
}
@DartClass
export class BottomType extends DartType {
    hashCode : number;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BottomType() {
        this.hashCode = 514213;
    }
    accept(v : lib3.DartTypeVisitor<any>) {
        return v.visitBottomType(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        return is(other, BottomType);
    }
}

export namespace FunctionType {
    export type Constructors = DartType.Constructors | 'FunctionType';
    export type Interface = Omit<FunctionType, Constructors>;
}
@DartClass
export class FunctionType extends DartType {
    typeParameters : core.DartList<TypeParameter>;

    requiredParameterCount : number;

    positionalParameters : core.DartList<DartType>;

    namedParameters : core.DartList<NamedType>;

    returnType : DartType;

    _hashCode : number;

    constructor(positionalParameters : core.DartList<DartType>,returnType : DartType,_namedArguments? : {namedParameters? : core.DartList<NamedType>,typeParameters? : core.DartList<TypeParameter>,requiredParameterCount? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionType(positionalParameters : core.DartList<DartType>,returnType : DartType,_namedArguments? : {namedParameters? : core.DartList<NamedType>,typeParameters? : core.DartList<TypeParameter>,requiredParameterCount? : number}) {
        let {namedParameters,typeParameters,requiredParameterCount} = Object.assign({
            "namedParameters" : new core.DartList.literal<NamedType>(),
            "typeParameters" : new core.DartList.literal<TypeParameter>()}, _namedArguments );
        this.positionalParameters = positionalParameters;
        this.requiredParameterCount = (requiredParameterCount || positionalParameters.length);
        this.returnType = returnType;
        this.namedParameters = namedParameters;
        this.typeParameters = typeParameters;
    }
    accept(v : lib3.DartTypeVisitor<any>) {
        return v.visitFunctionType(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        visitList(this.typeParameters,v);
        visitList(this.positionalParameters,v);
        visitList(this.namedParameters,v);
        this.returnType.accept(v);
    }
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        if (core.identical(this,other)) return true;
        if (is(other, FunctionType)) {
            if (this.typeParameters.length != other.typeParameters.length || this.requiredParameterCount != other.requiredParameterCount || this.positionalParameters.length != other.positionalParameters.length || this.namedParameters.length != other.namedParameters.length) {
                return false;
            }
            if (this.typeParameters.isEmpty) {
                for(let i : number = 0; i < this.positionalParameters.length; ++i){
                    if (this.positionalParameters[i] != other.positionalParameters[i]) {
                        return false;
                    }
                }
                for(let i : number = 0; i < this.namedParameters.length; ++i){
                    if (this.namedParameters[i] != other.namedParameters[i]) {
                        return false;
                    }
                }
                return op(Op.EQUALS,this.returnType,other.returnType);
            }else {
                return lib9.unifyTypes(this,other,new core.DartSet<TypeParameter>()) != null;
            }
        }else {
            return false;
        }
    }
    get withoutTypeParameters() : FunctionType {
        if (this.typeParameters.isEmpty) return this;
        return new FunctionType(this.positionalParameters,this.returnType,{
            requiredParameterCount : this.requiredParameterCount,namedParameters : this.namedParameters});
    }
    getNamedParameter(name : string) : DartType {
        let lower : number = 0;
        let upper : number = this.namedParameters.length - 1;
        while (lower <= upper){
            let pivot : number = op(Op.QUOTIENT,(lower + upper),2);
            let namedParameter = this.namedParameters[pivot];
            let comparison : number = new core.DartString(name).compareTo(namedParameter.name);
            if (comparison == 0) {
                return namedParameter.type;
            }else if (comparison < 0) {
                upper = pivot - 1;
            }else {
                lower = pivot + 1;
            }
        }
        return null;
    }
    get hashCode() : number {
        return this._hashCode = ( this._hashCode ) || ( this._computeHashCode() );
    }
    _computeHashCode() : number {
        let hash : number = 1237;
        hash = 1073741823 & (hash * 31 + this.requiredParameterCount);
        for(let i : number = 0; i < this.typeParameters.length; ++i){
            let parameter : TypeParameter = this.typeParameters[i];
            properties._temporaryHashCodeTable.set(parameter,properties._temporaryHashCodeTable.length);
            hash = 1073741823 & (hash * 31 + parameter.bound.hashCode);
        }
        for(let i : number = 0; i < this.positionalParameters.length; ++i){
            hash = 1073741823 & (hash * 31 + this.positionalParameters[i].hashCode);
        }
        for(let i : number = 0; i < this.namedParameters.length; ++i){
            hash = 1073741823 & (hash * 31 + this.namedParameters[i].hashCode);
        }
        hash = 1073741823 & (hash * 31 + this.returnType.hashCode);
        for(let i : number = 0; i < this.typeParameters.length; ++i){
            properties._temporaryHashCodeTable.remove(this.typeParameters[i]);
        }
        return hash;
    }
}

export namespace Program {
    export type Constructors = TreeNode.Constructors | 'Program';
    export type Interface = Omit<Program, Constructors>;
}
@DartClass
export class Program extends TreeNode {
    root : lib5.CanonicalName;

    libraries : core.DartList<Library>;

    uriToSource : core.DartMap<string,Source>;

    mainMethodName : Reference;

    constructor(_namedArguments? : {nameRoot? : lib5.CanonicalName,libraries? : core.DartList<Library>,uriToSource? : core.DartMap<string,Source>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Program(_namedArguments? : {nameRoot? : lib5.CanonicalName,libraries? : core.DartList<Library>,uriToSource? : core.DartMap<string,Source>}) {
        let {nameRoot,libraries,uriToSource} = Object.assign({
        }, _namedArguments );
        this.root = (nameRoot || new lib5.CanonicalName.root());
        this.libraries = (libraries || new core.DartList.literal<Library>());
        this.uriToSource = (uriToSource || new core.DartMap.literal([
        ]));
        setParents(this.libraries,this);
    }
    computeCanonicalNames() : void {
        for(let library of this.libraries) {
            this.root.getChildFromUri(library.importUri).bindTo(library.reference);
            library.computeCanonicalNames();
        }
    }
    unbindCanonicalNames() : void {
        this.root.unbindAll();
    }
    get mainMethod() : Procedure {
        return ((t)=>(!!t)?t.asProcedure:null)(this.mainMethodName);
    }
    set mainMethod(main : Procedure) {
        this.mainMethodName = getMemberReference(main);
    }
    accept(v : lib3.TreeVisitor<any>) {
        return v.visitProgram(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        visitList(this.libraries,v);
        ((_682_)=>(!!_682_)?_682_.acceptReference(v):null)(this.mainMethod);
    }
    transformChildren(v : lib3.Transformer) {
        transformList(this.libraries,v,this);
    }
    get enclosingProgram() : Program {
        return this;
    }
    getLocation(file : string,offset : number) : Location {
        return ((_683_)=>(!!_683_)?_683_.getLocation(file,offset):null)(this.uriToSource.get(file));
    }
}

export namespace VoidType {
    export type Constructors = DartType.Constructors | 'VoidType';
    export type Interface = Omit<VoidType, Constructors>;
}
@DartClass
export class VoidType extends DartType {
    hashCode : number;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VoidType() {
        this.hashCode = 123121;
    }
    accept(v : lib3.DartTypeVisitor<any>) {
        return v.visitVoidType(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        return is(other, VoidType);
    }
}

export namespace InvalidType {
    export type Constructors = DartType.Constructors | 'InvalidType';
    export type Interface = Omit<InvalidType, Constructors>;
}
@DartClass
export class InvalidType extends DartType {
    hashCode : number;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InvalidType() {
        this.hashCode = 12345;
    }
    accept(v : lib3.DartTypeVisitor<any>) {
        return v.visitInvalidType(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        return is(other, InvalidType);
    }
}

export namespace Expression {
    export type Constructors = TreeNode.Constructors | 'Expression';
    export type Interface = Omit<Expression, Constructors>;
}
@DartClass
export class Expression extends TreeNode {
    @Abstract
    getStaticType(types : lib8.TypeEnvironment) : DartType{ throw 'abstract'}
    getStaticTypeAsInstanceOf(superclass : Class,types : lib8.TypeEnvironment) : InterfaceType {
        if (superclass.typeParameters.isEmpty) {
            return superclass.rawType;
        }
        let type = this.getStaticType(types);
        while (is(type, TypeParameterType)){
            type = (type as TypeParameterType).parameter.bound;
        }
        if (is(type, InterfaceType)) {
            let upcastType = types.hierarchy.getTypeAsInstanceOf(type,superclass);
            if (upcastType != null) return upcastType;
        }else if (is(type, BottomType)) {
            return superclass.bottomType;
        }
        types.typeError(this,`${type} is not a subtype of ${superclass}`);
        return superclass.rawType;
    }
    @Abstract
    accept(v : lib3.ExpressionVisitor<any>){ throw 'abstract'}
    @Abstract
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Expression() {
    }
}

export namespace Catch {
    export type Constructors = TreeNode.Constructors | 'Catch';
    export type Interface = Omit<Catch, Constructors>;
}
@DartClass
export class Catch extends TreeNode {
    guard : DartType;

    exception : VariableDeclaration;

    stackTrace : VariableDeclaration;

    body : Statement;

    constructor(exception : VariableDeclaration,body : Statement,_namedArguments? : {guard? : DartType,stackTrace? : VariableDeclaration}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Catch(exception : VariableDeclaration,body : Statement,_namedArguments? : {guard? : DartType,stackTrace? : VariableDeclaration}) {
        let {guard,stackTrace} = Object.assign({
            "guard" : new DynamicType()}, _namedArguments );
        this.exception = exception;
        this.body = body;
        this.guard = guard;
        this.stackTrace = stackTrace;
        /* TODO (AssertStatementImpl) : assert (guard != null); */;
        ((t)=>(!!t)?t.parent:null)(this.exception) = this;
        ((t)=>(!!t)?t.parent:null)(this.stackTrace) = this;
        ((t)=>(!!t)?t.parent:null)(this.body) = this;
    }
    accept(v : lib3.TreeVisitor<any>) {
        return v.visitCatch(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_671_)=>(!!_671_)?_671_.accept(v):null)(this.guard);
        ((_672_)=>(!!_672_)?_672_.accept(v):null)(this.exception);
        ((_673_)=>(!!_673_)?_673_.accept(v):null)(this.stackTrace);
        ((_674_)=>(!!_674_)?_674_.accept(v):null)(this.body);
    }
    transformChildren(v : lib3.Transformer) {
        this.guard = v.visitDartType(this.guard);
        if (this.exception != null) {
            this.exception = this.exception.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.exception) = this;
        }
        if (this.stackTrace != null) {
            this.stackTrace = this.stackTrace.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.stackTrace) = this;
        }
        if (this.body != null) {
            this.body = this.body.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.body) = this;
        }
    }
}

export namespace NamedNode {
    export type Constructors = TreeNode.Constructors | 'NamedNode';
    export type Interface = Omit<NamedNode, Constructors>;
}
@DartClass
export class NamedNode extends TreeNode {
    reference : Reference;

    constructor(reference : Reference) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NamedNode(reference : Reference) {
        this.reference = (reference || new Reference());
        this.reference.node = this;
    }
    get canonicalName() : lib5.CanonicalName {
        return ((t)=>(!!t)?t.canonicalName:null)(this.reference);
    }
}

export namespace Statement {
    export type Constructors = TreeNode.Constructors | 'Statement';
    export type Interface = Omit<Statement, Constructors>;
}
@DartClass
export class Statement extends TreeNode {
    @Abstract
    accept(v : lib3.StatementVisitor<any>){ throw 'abstract'}
    @Abstract
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Statement() {
    }
}

export namespace MapEntry {
    export type Constructors = TreeNode.Constructors | 'MapEntry';
    export type Interface = Omit<MapEntry, Constructors>;
}
@DartClass
export class MapEntry extends TreeNode {
    key : Expression;

    value : Expression;

    constructor(key : Expression,value : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MapEntry(key : Expression,value : Expression) {
        this.key = key;
        this.value = value;
        ((t)=>(!!t)?t.parent:null)(this.key) = this;
        ((t)=>(!!t)?t.parent:null)(this.value) = this;
    }
    accept(v : lib3.TreeVisitor<any>) {
        return v.visitMapEntry(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_644_)=>(!!_644_)?_644_.accept(v):null)(this.key);
        ((_645_)=>(!!_645_)?_645_.accept(v):null)(this.value);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.key != null) {
            this.key = this.key.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.key) = this;
        }
        if (this.value != null) {
            this.value = this.value.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.value) = this;
        }
    }
}

export namespace SuperInitializer {
    export type Constructors = Initializer.Constructors | 'SuperInitializer' | 'byReference';
    export type Interface = Omit<SuperInitializer, Constructors>;
}
@DartClass
export class SuperInitializer extends Initializer {
    targetReference : Reference;

    arguments : Arguments;

    constructor(target : Constructor,arguments : Arguments) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SuperInitializer(target : Constructor,arguments : Arguments) {
        this.byReference(getMemberReference(target),arguments);
    }
    @namedConstructor
    byReference(targetReference : Reference,arguments : Arguments) {
        this.targetReference = targetReference;
        this.arguments = arguments;
        ((t)=>(!!t)?t.parent:null)(this.arguments) = this;
    }
    static byReference : new(targetReference : Reference,arguments : Arguments) => SuperInitializer;

    get target() : Constructor {
        return ((t)=>(!!t)?t.asConstructor:null)(this.targetReference);
    }
    set target(target : Constructor) {
        this.targetReference = getMemberReference(target);
    }
    accept(v : lib3.InitializerVisitor<any>) {
        return v.visitSuperInitializer(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_590_)=>(!!_590_)?_590_.acceptReference(v):null)(this.target);
        ((_591_)=>(!!_591_)?_591_.accept(v):null)(this.arguments);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.arguments != null) {
            this.arguments = this.arguments.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.arguments) = this;
        }
    }
}

export namespace RedirectingInitializer {
    export type Constructors = Initializer.Constructors | 'RedirectingInitializer' | 'byReference';
    export type Interface = Omit<RedirectingInitializer, Constructors>;
}
@DartClass
export class RedirectingInitializer extends Initializer {
    targetReference : Reference;

    arguments : Arguments;

    constructor(target : Constructor,arguments : Arguments) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RedirectingInitializer(target : Constructor,arguments : Arguments) {
        this.byReference(getMemberReference(target),arguments);
    }
    @namedConstructor
    byReference(targetReference : Reference,arguments : Arguments) {
        this.targetReference = targetReference;
        this.arguments = arguments;
        ((t)=>(!!t)?t.parent:null)(this.arguments) = this;
    }
    static byReference : new(targetReference : Reference,arguments : Arguments) => RedirectingInitializer;

    get target() : Constructor {
        return ((t)=>(!!t)?t.asConstructor:null)(this.targetReference);
    }
    set target(target : Constructor) {
        this.targetReference = getMemberReference(target);
    }
    accept(v : lib3.InitializerVisitor<any>) {
        return v.visitRedirectingInitializer(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_592_)=>(!!_592_)?_592_.acceptReference(v):null)(this.target);
        ((_593_)=>(!!_593_)?_593_.accept(v):null)(this.arguments);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.arguments != null) {
            this.arguments = this.arguments.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.arguments) = this;
        }
    }
}

export namespace LocalInitializer {
    export type Constructors = Initializer.Constructors | 'LocalInitializer';
    export type Interface = Omit<LocalInitializer, Constructors>;
}
@DartClass
export class LocalInitializer extends Initializer {
    variable : VariableDeclaration;

    constructor(variable : VariableDeclaration) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LocalInitializer(variable : VariableDeclaration) {
        this.variable = variable;
        ((t)=>(!!t)?t.parent:null)(this.variable) = this;
    }
    accept(v : lib3.InitializerVisitor<any>) {
        return v.visitLocalInitializer(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_594_)=>(!!_594_)?_594_.accept(v):null)(this.variable);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.variable != null) {
            this.variable = this.variable.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.variable) = this;
        }
    }
}

export namespace SymbolLiteral {
    export type Constructors = Expression.Constructors | 'SymbolLiteral';
    export type Interface = Omit<SymbolLiteral, Constructors>;
}
@DartClass
export class SymbolLiteral extends Expression {
    value : string;

    constructor(value : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SymbolLiteral(value : string) {
        this.value = value;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return types.symbolType;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitSymbolLiteral(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitSymbolLiteral(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
    transformChildren(v : lib3.Transformer) {
    }
}

export namespace TypeLiteral {
    export type Constructors = Expression.Constructors | 'TypeLiteral';
    export type Interface = Omit<TypeLiteral, Constructors>;
}
@DartClass
export class TypeLiteral extends Expression {
    type : DartType;

    constructor(type : DartType) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeLiteral(type : DartType) {
        this.type = type;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return types.typeType;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitTypeLiteral(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitTypeLiteral(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_639_)=>(!!_639_)?_639_.accept(v):null)(this.type);
    }
    transformChildren(v : lib3.Transformer) {
        this.type = v.visitDartType(this.type);
    }
}

export namespace ThisExpression {
    export type Constructors = Expression.Constructors | 'ThisExpression';
    export type Interface = Omit<ThisExpression, Constructors>;
}
@DartClass
export class ThisExpression extends Expression {
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return types.thisType;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitThisExpression(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitThisExpression(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
    transformChildren(v : lib3.Transformer) {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ThisExpression() {
    }
}

export namespace DirectPropertySet {
    export type Constructors = Expression.Constructors | 'DirectPropertySet' | 'byReference';
    export type Interface = Omit<DirectPropertySet, Constructors>;
}
@DartClass
export class DirectPropertySet extends Expression {
    receiver : Expression;

    targetReference : Reference;

    value : Expression;

    constructor(receiver : Expression,target : Member,value : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DirectPropertySet(receiver : Expression,target : Member,value : Expression) {
        this.byReference(receiver,getMemberReference(target),value);
    }
    @namedConstructor
    byReference(receiver : Expression,targetReference : Reference,value : Expression) {
        this.receiver = receiver;
        this.targetReference = targetReference;
        this.value = value;
        ((t)=>(!!t)?t.parent:null)(this.receiver) = this;
        ((t)=>(!!t)?t.parent:null)(this.value) = this;
    }
    static byReference : new(receiver : Expression,targetReference : Reference,value : Expression) => DirectPropertySet;

    get target() : Member {
        return ((t)=>(!!t)?t.asMember:null)(this.targetReference);
    }
    set target(target : Member) {
        this.targetReference = getMemberReference(target);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_606_)=>(!!_606_)?_606_.accept(v):null)(this.receiver);
        ((_607_)=>(!!_607_)?_607_.acceptReference(v):null)(this.target);
        ((_608_)=>(!!_608_)?_608_.accept(v):null)(this.value);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.receiver != null) {
            this.receiver = this.receiver.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.receiver) = this;
        }
        if (this.value != null) {
            this.value = this.value.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.value) = this;
        }
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitDirectPropertySet(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitDirectPropertySet(this,arg);
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return this.value.getStaticType(types);
    }
}

export namespace Throw {
    export type Constructors = Expression.Constructors | 'Throw';
    export type Interface = Omit<Throw, Constructors>;
}
@DartClass
export class Throw extends Expression {
    expression : Expression;

    constructor(expression : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Throw(expression : Expression) {
        this.expression = expression;
        ((t)=>(!!t)?t.parent:null)(this.expression) = this;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return new BottomType();
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitThrow(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitThrow(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_640_)=>(!!_640_)?_640_.accept(v):null)(this.expression);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.expression != null) {
            this.expression = this.expression.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.expression) = this;
        }
    }
}

export namespace ListLiteral {
    export type Constructors = Expression.Constructors | 'ListLiteral';
    export type Interface = Omit<ListLiteral, Constructors>;
}
@DartClass
export class ListLiteral extends Expression {
    isConst : boolean;

    typeArgument : DartType;

    expressions : core.DartList<Expression>;

    constructor(expressions : core.DartList<Expression>,_namedArguments? : {typeArgument? : DartType,isConst? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListLiteral(expressions : core.DartList<Expression>,_namedArguments? : {typeArgument? : DartType,isConst? : boolean}) {
        let {typeArgument,isConst} = Object.assign({
            "typeArgument" : new DynamicType(),
            "isConst" : false}, _namedArguments );
        this.expressions = expressions;
        this.typeArgument = typeArgument;
        this.isConst = isConst;
        /* TODO (AssertStatementImpl) : assert (typeArgument != null); */;
        setParents(this.expressions,this);
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return types.literalListType(this.typeArgument);
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitListLiteral(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitListLiteral(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_641_)=>(!!_641_)?_641_.accept(v):null)(this.typeArgument);
        visitList(this.expressions,v);
    }
    transformChildren(v : lib3.Transformer) {
        this.typeArgument = v.visitDartType(this.typeArgument);
        transformList(this.expressions,v,this);
    }
}

export namespace MapLiteral {
    export type Constructors = Expression.Constructors | 'MapLiteral';
    export type Interface = Omit<MapLiteral, Constructors>;
}
@DartClass
export class MapLiteral extends Expression {
    isConst : boolean;

    keyType : DartType;

    valueType : DartType;

    entries : core.DartList<MapEntry>;

    constructor(entries : core.DartList<MapEntry>,_namedArguments? : {keyType? : DartType,valueType? : DartType,isConst? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MapLiteral(entries : core.DartList<MapEntry>,_namedArguments? : {keyType? : DartType,valueType? : DartType,isConst? : boolean}) {
        let {keyType,valueType,isConst} = Object.assign({
            "keyType" : new DynamicType(),
            "valueType" : new DynamicType(),
            "isConst" : false}, _namedArguments );
        this.entries = entries;
        this.keyType = keyType;
        this.valueType = valueType;
        this.isConst = isConst;
        /* TODO (AssertStatementImpl) : assert (keyType != null); */;
        /* TODO (AssertStatementImpl) : assert (valueType != null); */;
        setParents(this.entries,this);
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return types.literalMapType(this.keyType,this.valueType);
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitMapLiteral(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitMapLiteral(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_642_)=>(!!_642_)?_642_.accept(v):null)(this.keyType);
        ((_643_)=>(!!_643_)?_643_.accept(v):null)(this.valueType);
        visitList(this.entries,v);
    }
    transformChildren(v : lib3.Transformer) {
        this.keyType = v.visitDartType(this.keyType);
        this.valueType = v.visitDartType(this.valueType);
        transformList(this.entries,v,this);
    }
}

export namespace FieldInitializer {
    export type Constructors = Initializer.Constructors | 'FieldInitializer' | 'byReference';
    export type Interface = Omit<FieldInitializer, Constructors>;
}
@DartClass
export class FieldInitializer extends Initializer {
    fieldReference : Reference;

    value : Expression;

    constructor(field : Field,value : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldInitializer(field : Field,value : Expression) {
        this.byReference(((t)=>(!!t)?t.reference:null)(field),value);
    }
    @namedConstructor
    byReference(fieldReference : Reference,value : Expression) {
        this.fieldReference = fieldReference;
        this.value = value;
        ((t)=>(!!t)?t.parent:null)(this.value) = this;
    }
    static byReference : new(fieldReference : Reference,value : Expression) => FieldInitializer;

    get field() : Field {
        return ((t)=>(!!t)?t.node:null)(this.fieldReference);
    }
    set field(field : Field) {
        this.fieldReference = ((t)=>(!!t)?t.reference:null)(field);
    }
    accept(v : lib3.InitializerVisitor<any>) {
        return v.visitFieldInitializer(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_588_)=>(!!_588_)?_588_.acceptReference(v):null)(this.field);
        ((_589_)=>(!!_589_)?_589_.accept(v):null)(this.value);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.value != null) {
            this.value = this.value.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.value) = this;
        }
    }
}

export namespace AwaitExpression {
    export type Constructors = Expression.Constructors | 'AwaitExpression';
    export type Interface = Omit<AwaitExpression, Constructors>;
}
@DartClass
export class AwaitExpression extends Expression {
    operand : Expression;

    constructor(operand : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AwaitExpression(operand : Expression) {
        this.operand = operand;
        ((t)=>(!!t)?t.parent:null)(this.operand) = this;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return types.unfutureType(this.operand.getStaticType(types));
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitAwaitExpression(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitAwaitExpression(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_646_)=>(!!_646_)?_646_.accept(v):null)(this.operand);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.operand != null) {
            this.operand = this.operand.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.operand) = this;
        }
    }
}

export namespace Not {
    export type Constructors = Expression.Constructors | 'Not';
    export type Interface = Omit<Not, Constructors>;
}
@DartClass
export class Not extends Expression {
    operand : Expression;

    constructor(operand : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Not(operand : Expression) {
        this.operand = operand;
        ((t)=>(!!t)?t.parent:null)(this.operand) = this;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return types.boolType;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitNot(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitNot(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_628_)=>(!!_628_)?_628_.accept(v):null)(this.operand);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.operand != null) {
            this.operand = this.operand.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.operand) = this;
        }
    }
}

export namespace Let {
    export type Constructors = Expression.Constructors | 'Let';
    export type Interface = Omit<Let, Constructors>;
}
@DartClass
export class Let extends Expression {
    variable : VariableDeclaration;

    body : Expression;

    constructor(variable : VariableDeclaration,body : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Let(variable : VariableDeclaration,body : Expression) {
        this.variable = variable;
        this.body = body;
        ((t)=>(!!t)?t.parent:null)(this.variable) = this;
        ((t)=>(!!t)?t.parent:null)(this.body) = this;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return this.body.getStaticType(types);
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitLet(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitLet(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_648_)=>(!!_648_)?_648_.accept(v):null)(this.variable);
        ((_649_)=>(!!_649_)?_649_.accept(v):null)(this.body);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.variable != null) {
            this.variable = this.variable.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.variable) = this;
        }
        if (this.body != null) {
            this.body = this.body.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.body) = this;
        }
    }
}

export namespace LoadLibrary {
    export type Constructors = Expression.Constructors | 'LoadLibrary';
    export type Interface = Omit<LoadLibrary, Constructors>;
}
@DartClass
export class LoadLibrary extends Expression {
    import : LibraryDependency;

    constructor(import : LibraryDependency) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LoadLibrary(import : LibraryDependency) {
        this.import = import;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return types.futureType(new DynamicType());
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitLoadLibrary(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitLoadLibrary(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
    transformChildren(v : lib3.Transformer) {
    }
}

export namespace CheckLibraryIsLoaded {
    export type Constructors = Expression.Constructors | 'CheckLibraryIsLoaded';
    export type Interface = Omit<CheckLibraryIsLoaded, Constructors>;
}
@DartClass
export class CheckLibraryIsLoaded extends Expression {
    import : LibraryDependency;

    constructor(import : LibraryDependency) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CheckLibraryIsLoaded(import : LibraryDependency) {
        this.import = import;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return types.objectType;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitCheckLibraryIsLoaded(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitCheckLibraryIsLoaded(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
    transformChildren(v : lib3.Transformer) {
    }
}

export namespace VectorCreation {
    export type Constructors = Expression.Constructors | 'VectorCreation';
    export type Interface = Omit<VectorCreation, Constructors>;
}
@DartClass
export class VectorCreation extends Expression {
    length : number;

    constructor(length : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VectorCreation(length : number) {
        this.length = length;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitVectorCreation(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitVectorCreation(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
    transformChildren(v : lib3.Transformer) {
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return new VectorType();
    }
}

export namespace VectorGet {
    export type Constructors = Expression.Constructors | 'VectorGet';
    export type Interface = Omit<VectorGet, Constructors>;
}
@DartClass
export class VectorGet extends Expression {
    vectorExpression : Expression;

    index : number;

    constructor(vectorExpression : Expression,index : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VectorGet(vectorExpression : Expression,index : number) {
        this.vectorExpression = vectorExpression;
        this.index = index;
        ((t)=>(!!t)?t.parent:null)(this.vectorExpression) = this;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitVectorGet(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitVectorGet(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        this.vectorExpression.accept(v);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.vectorExpression != null) {
            this.vectorExpression = this.vectorExpression.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.vectorExpression) = this;
        }
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return new DynamicType();
    }
}

export namespace VectorSet {
    export type Constructors = Expression.Constructors | 'VectorSet';
    export type Interface = Omit<VectorSet, Constructors>;
}
@DartClass
export class VectorSet extends Expression {
    vectorExpression : Expression;

    index : number;

    value : Expression;

    constructor(vectorExpression : Expression,index : number,value : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VectorSet(vectorExpression : Expression,index : number,value : Expression) {
        this.vectorExpression = vectorExpression;
        this.index = index;
        this.value = value;
        ((t)=>(!!t)?t.parent:null)(this.vectorExpression) = this;
        ((t)=>(!!t)?t.parent:null)(this.value) = this;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitVectorSet(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitVectorSet(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        this.vectorExpression.accept(v);
        this.value.accept(v);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.vectorExpression != null) {
            this.vectorExpression = this.vectorExpression.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.vectorExpression) = this;
        }
        if (this.value != null) {
            this.value = this.value.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.value) = this;
        }
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return this.value.getStaticType(types);
    }
}

export namespace VectorCopy {
    export type Constructors = Expression.Constructors | 'VectorCopy';
    export type Interface = Omit<VectorCopy, Constructors>;
}
@DartClass
export class VectorCopy extends Expression {
    vectorExpression : Expression;

    constructor(vectorExpression : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VectorCopy(vectorExpression : Expression) {
        this.vectorExpression = vectorExpression;
        ((t)=>(!!t)?t.parent:null)(this.vectorExpression) = this;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitVectorCopy(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitVectorCopy(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        this.vectorExpression.accept(v);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.vectorExpression != null) {
            this.vectorExpression = this.vectorExpression.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.vectorExpression) = this;
        }
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return new VectorType();
    }
}

export namespace ClosureCreation {
    export type Constructors = Expression.Constructors | 'ClosureCreation' | 'byReference';
    export type Interface = Omit<ClosureCreation, Constructors>;
}
@DartClass
export class ClosureCreation extends Expression {
    topLevelFunctionReference : Reference;

    contextVector : Expression;

    functionType : FunctionType;

    constructor(topLevelFunction : Member,contextVector : Expression,functionType : FunctionType) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClosureCreation(topLevelFunction : Member,contextVector : Expression,functionType : FunctionType) {
        this.byReference(getMemberReference(topLevelFunction),contextVector,functionType);
    }
    @namedConstructor
    byReference(topLevelFunctionReference : Reference,contextVector : Expression,functionType : FunctionType) {
        this.topLevelFunctionReference = topLevelFunctionReference;
        this.contextVector = contextVector;
        this.functionType = functionType;
        ((t)=>(!!t)?t.parent:null)(this.contextVector) = this;
    }
    static byReference : new(topLevelFunctionReference : Reference,contextVector : Expression,functionType : FunctionType) => ClosureCreation;

    get topLevelFunction() : Procedure {
        return ((t)=>(!!t)?t.asProcedure:null)(this.topLevelFunctionReference);
    }
    set topLevelFunction(topLevelFunction : Member) {
        this.topLevelFunctionReference = getMemberReference(topLevelFunction);
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitClosureCreation(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitClosureCreation(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_650_)=>(!!_650_)?_650_.accept(v):null)(this.contextVector);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.contextVector != null) {
            this.contextVector = this.contextVector.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.contextVector) = this;
        }
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return this.functionType;
    }
}

export namespace InvalidInitializer {
    export type Constructors = Initializer.Constructors | 'InvalidInitializer';
    export type Interface = Omit<InvalidInitializer, Constructors>;
}
@DartClass
export class InvalidInitializer extends Initializer {
    accept(v : lib3.InitializerVisitor<any>) {
        return v.visitInvalidInitializer(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
    transformChildren(v : lib3.Transformer) {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InvalidInitializer() {
    }
}

export namespace InvalidStatement {
    export type Constructors = Statement.Constructors | 'InvalidStatement';
    export type Interface = Omit<InvalidStatement, Constructors>;
}
@DartClass
export class InvalidStatement extends Statement {
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitInvalidStatement(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitInvalidStatement(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
    transformChildren(v : lib3.Transformer) {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InvalidStatement() {
    }
}

export namespace ExpressionStatement {
    export type Constructors = Statement.Constructors | 'ExpressionStatement';
    export type Interface = Omit<ExpressionStatement, Constructors>;
}
@DartClass
export class ExpressionStatement extends Statement {
    expression : Expression;

    constructor(expression : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpressionStatement(expression : Expression) {
        this.expression = expression;
        ((t)=>(!!t)?t.parent:null)(this.expression) = this;
    }
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitExpressionStatement(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitExpressionStatement(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_651_)=>(!!_651_)?_651_.accept(v):null)(this.expression);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.expression != null) {
            this.expression = this.expression.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.expression) = this;
        }
    }
}

export namespace Block {
    export type Constructors = Statement.Constructors | 'Block';
    export type Interface = Omit<Block, Constructors>;
}
@DartClass
export class Block extends Statement {
    statements : core.DartList<Statement>;

    constructor(statements : core.DartList<Statement>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Block(statements : core.DartList<Statement>) {
        this.statements = statements;
        setParents(this.statements,this);
    }
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitBlock(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitBlock(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        visitList(this.statements,v);
    }
    transformChildren(v : lib3.Transformer) {
        transformList(this.statements,v,this);
    }
    addStatement(node : Statement) : void {
        this.statements.add(node);
        node.parent = this;
    }
}

export namespace EmptyStatement {
    export type Constructors = Statement.Constructors | 'EmptyStatement';
    export type Interface = Omit<EmptyStatement, Constructors>;
}
@DartClass
export class EmptyStatement extends Statement {
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitEmptyStatement(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitEmptyStatement(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
    transformChildren(v : lib3.Transformer) {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EmptyStatement() {
    }
}

export namespace AssertStatement {
    export type Constructors = Statement.Constructors | 'AssertStatement';
    export type Interface = Omit<AssertStatement, Constructors>;
}
@DartClass
export class AssertStatement extends Statement {
    condition : Expression;

    message : Expression;

    constructor(condition : Expression,message? : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AssertStatement(condition : Expression,message? : Expression) {
        this.condition = condition;
        this.message = message;
        ((t)=>(!!t)?t.parent:null)(this.condition) = this;
        ((t)=>(!!t)?t.parent:null)(this.message) = this;
    }
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitAssertStatement(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitAssertStatement(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_652_)=>(!!_652_)?_652_.accept(v):null)(this.condition);
        ((_653_)=>(!!_653_)?_653_.accept(v):null)(this.message);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.condition != null) {
            this.condition = this.condition.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.condition) = this;
        }
        if (this.message != null) {
            this.message = this.message.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.message) = this;
        }
    }
}

export namespace LabeledStatement {
    export type Constructors = Statement.Constructors | 'LabeledStatement';
    export type Interface = Omit<LabeledStatement, Constructors>;
}
@DartClass
export class LabeledStatement extends Statement {
    body : Statement;

    constructor(body : Statement) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LabeledStatement(body : Statement) {
        this.body = body;
        ((t)=>(!!t)?t.parent:null)(this.body) = this;
    }
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitLabeledStatement(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitLabeledStatement(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_654_)=>(!!_654_)?_654_.accept(v):null)(this.body);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.body != null) {
            this.body = this.body.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.body) = this;
        }
    }
}

export namespace BreakStatement {
    export type Constructors = Statement.Constructors | 'BreakStatement';
    export type Interface = Omit<BreakStatement, Constructors>;
}
@DartClass
export class BreakStatement extends Statement {
    target : LabeledStatement;

    constructor(target : LabeledStatement) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BreakStatement(target : LabeledStatement) {
        this.target = target;
    }
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitBreakStatement(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitBreakStatement(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
    transformChildren(v : lib3.Transformer) {
    }
}

export namespace WhileStatement {
    export type Constructors = Statement.Constructors | 'WhileStatement';
    export type Interface = Omit<WhileStatement, Constructors>;
}
@DartClass
export class WhileStatement extends Statement {
    condition : Expression;

    body : Statement;

    constructor(condition : Expression,body : Statement) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    WhileStatement(condition : Expression,body : Statement) {
        this.condition = condition;
        this.body = body;
        ((t)=>(!!t)?t.parent:null)(this.condition) = this;
        ((t)=>(!!t)?t.parent:null)(this.body) = this;
    }
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitWhileStatement(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitWhileStatement(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_655_)=>(!!_655_)?_655_.accept(v):null)(this.condition);
        ((_656_)=>(!!_656_)?_656_.accept(v):null)(this.body);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.condition != null) {
            this.condition = this.condition.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.condition) = this;
        }
        if (this.body != null) {
            this.body = this.body.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.body) = this;
        }
    }
}

export namespace DoStatement {
    export type Constructors = Statement.Constructors | 'DoStatement';
    export type Interface = Omit<DoStatement, Constructors>;
}
@DartClass
export class DoStatement extends Statement {
    body : Statement;

    condition : Expression;

    constructor(body : Statement,condition : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DoStatement(body : Statement,condition : Expression) {
        this.body = body;
        this.condition = condition;
        ((t)=>(!!t)?t.parent:null)(this.body) = this;
        ((t)=>(!!t)?t.parent:null)(this.condition) = this;
    }
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitDoStatement(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitDoStatement(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_657_)=>(!!_657_)?_657_.accept(v):null)(this.body);
        ((_658_)=>(!!_658_)?_658_.accept(v):null)(this.condition);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.body != null) {
            this.body = this.body.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.body) = this;
        }
        if (this.condition != null) {
            this.condition = this.condition.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.condition) = this;
        }
    }
}

export namespace ForStatement {
    export type Constructors = Statement.Constructors | 'ForStatement';
    export type Interface = Omit<ForStatement, Constructors>;
}
@DartClass
export class ForStatement extends Statement {
    variables : core.DartList<VariableDeclaration>;

    condition : Expression;

    updates : core.DartList<Expression>;

    body : Statement;

    constructor(variables : core.DartList<VariableDeclaration>,condition : Expression,updates : core.DartList<Expression>,body : Statement) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ForStatement(variables : core.DartList<VariableDeclaration>,condition : Expression,updates : core.DartList<Expression>,body : Statement) {
        this.variables = variables;
        this.condition = condition;
        this.updates = updates;
        this.body = body;
        setParents(this.variables,this);
        ((t)=>(!!t)?t.parent:null)(this.condition) = this;
        setParents(this.updates,this);
        ((t)=>(!!t)?t.parent:null)(this.body) = this;
    }
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitForStatement(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitForStatement(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        visitList(this.variables,v);
        ((_659_)=>(!!_659_)?_659_.accept(v):null)(this.condition);
        visitList(this.updates,v);
        ((_660_)=>(!!_660_)?_660_.accept(v):null)(this.body);
    }
    transformChildren(v : lib3.Transformer) {
        transformList(this.variables,v,this);
        if (this.condition != null) {
            this.condition = this.condition.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.condition) = this;
        }
        transformList(this.updates,v,this);
        if (this.body != null) {
            this.body = this.body.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.body) = this;
        }
    }
}

export namespace ForInStatement {
    export type Constructors = Statement.Constructors | 'ForInStatement';
    export type Interface = Omit<ForInStatement, Constructors>;
}
@DartClass
export class ForInStatement extends Statement {
    variable : VariableDeclaration;

    iterable : Expression;

    body : Statement;

    isAsync : boolean;

    constructor(variable : VariableDeclaration,iterable : Expression,body : Statement,_namedArguments? : {isAsync? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ForInStatement(variable : VariableDeclaration,iterable : Expression,body : Statement,_namedArguments? : {isAsync? : boolean}) {
        let {isAsync} = Object.assign({
            "isAsync" : false}, _namedArguments );
        this.variable = variable;
        this.iterable = iterable;
        this.body = body;
        this.isAsync = isAsync;
        ((t)=>(!!t)?t.parent:null)(this.variable) = this;
        ((t)=>(!!t)?t.parent:null)(this.iterable) = this;
        ((t)=>(!!t)?t.parent:null)(this.body) = this;
    }
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitForInStatement(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitForInStatement(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_661_)=>(!!_661_)?_661_.accept(v):null)(this.variable);
        ((_662_)=>(!!_662_)?_662_.accept(v):null)(this.iterable);
        ((_663_)=>(!!_663_)?_663_.accept(v):null)(this.body);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.variable != null) {
            this.variable = this.variable.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.variable) = this;
        }
        if (this.iterable != null) {
            this.iterable = this.iterable.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.iterable) = this;
        }
        if (this.body != null) {
            this.body = this.body.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.body) = this;
        }
    }
}

export namespace BasicLiteral {
    export type Constructors = Expression.Constructors | 'BasicLiteral';
    export type Interface = Omit<BasicLiteral, Constructors>;
}
@DartClass
export class BasicLiteral extends Expression {
    @AbstractProperty
    get value() : core.DartObject{ throw 'abstract'}
    visitChildren(v : lib3.Visitor<any>) {
    }
    transformChildren(v : lib3.Transformer) {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BasicLiteral() {
    }
}

export namespace DirectPropertyGet {
    export type Constructors = Expression.Constructors | 'DirectPropertyGet' | 'byReference';
    export type Interface = Omit<DirectPropertyGet, Constructors>;
}
@DartClass
export class DirectPropertyGet extends Expression {
    receiver : Expression;

    targetReference : Reference;

    constructor(receiver : Expression,target : Member) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DirectPropertyGet(receiver : Expression,target : Member) {
        this.byReference(receiver,getMemberReference(target));
    }
    @namedConstructor
    byReference(receiver : Expression,targetReference : Reference) {
        this.receiver = receiver;
        this.targetReference = targetReference;
        ((t)=>(!!t)?t.parent:null)(this.receiver) = this;
    }
    static byReference : new(receiver : Expression,targetReference : Reference) => DirectPropertyGet;

    get target() : Member {
        return ((t)=>(!!t)?t.asMember:null)(this.targetReference);
    }
    set target(target : Member) {
        this.targetReference = getMemberReference(target);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_604_)=>(!!_604_)?_604_.accept(v):null)(this.receiver);
        ((_605_)=>(!!_605_)?_605_.acceptReference(v):null)(this.target);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.receiver != null) {
            this.receiver = this.receiver.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.receiver) = this;
        }
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitDirectPropertyGet(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitDirectPropertyGet(this,arg);
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        let superclass : Class = this.target.enclosingClass;
        let receiverType = this.receiver.getStaticTypeAsInstanceOf(superclass,types);
        return lib9.Substitution.fromInterfaceType(receiverType).substituteType(this.target.getterType);
    }
}

export namespace ContinueSwitchStatement {
    export type Constructors = Statement.Constructors | 'ContinueSwitchStatement';
    export type Interface = Omit<ContinueSwitchStatement, Constructors>;
}
@DartClass
export class ContinueSwitchStatement extends Statement {
    target : SwitchCase;

    constructor(target : SwitchCase) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ContinueSwitchStatement(target : SwitchCase) {
        this.target = target;
    }
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitContinueSwitchStatement(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitContinueSwitchStatement(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
    transformChildren(v : lib3.Transformer) {
    }
}

export namespace IfStatement {
    export type Constructors = Statement.Constructors | 'IfStatement';
    export type Interface = Omit<IfStatement, Constructors>;
}
@DartClass
export class IfStatement extends Statement {
    condition : Expression;

    then : Statement;

    otherwise : Statement;

    constructor(condition : Expression,then : Statement,otherwise : Statement) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IfStatement(condition : Expression,then : Statement,otherwise : Statement) {
        this.condition = condition;
        this.then = then;
        this.otherwise = otherwise;
        ((t)=>(!!t)?t.parent:null)(this.condition) = this;
        ((t)=>(!!t)?t.parent:null)(this.then) = this;
        ((t)=>(!!t)?t.parent:null)(this.otherwise) = this;
    }
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitIfStatement(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitIfStatement(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_666_)=>(!!_666_)?_666_.accept(v):null)(this.condition);
        ((_667_)=>(!!_667_)?_667_.accept(v):null)(this.then);
        ((_668_)=>(!!_668_)?_668_.accept(v):null)(this.otherwise);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.condition != null) {
            this.condition = this.condition.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.condition) = this;
        }
        if (this.then != null) {
            this.then = this.then.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.then) = this;
        }
        if (this.otherwise != null) {
            this.otherwise = this.otherwise.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.otherwise) = this;
        }
    }
}

export namespace ReturnStatement {
    export type Constructors = Statement.Constructors | 'ReturnStatement';
    export type Interface = Omit<ReturnStatement, Constructors>;
}
@DartClass
export class ReturnStatement extends Statement {
    expression : Expression;

    constructor(expression? : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ReturnStatement(expression? : Expression) {
        this.expression = expression;
        ((t)=>(!!t)?t.parent:null)(this.expression) = this;
    }
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitReturnStatement(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitReturnStatement(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_669_)=>(!!_669_)?_669_.accept(v):null)(this.expression);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.expression != null) {
            this.expression = this.expression.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.expression) = this;
        }
    }
}

export namespace TryCatch {
    export type Constructors = Statement.Constructors | 'TryCatch';
    export type Interface = Omit<TryCatch, Constructors>;
}
@DartClass
export class TryCatch extends Statement {
    body : Statement;

    catches : core.DartList<Catch>;

    constructor(body : Statement,catches : core.DartList<Catch>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TryCatch(body : Statement,catches : core.DartList<Catch>) {
        this.body = body;
        this.catches = catches;
        ((t)=>(!!t)?t.parent:null)(this.body) = this;
        setParents(this.catches,this);
    }
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitTryCatch(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitTryCatch(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_670_)=>(!!_670_)?_670_.accept(v):null)(this.body);
        visitList(this.catches,v);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.body != null) {
            this.body = this.body.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.body) = this;
        }
        transformList(this.catches,v,this);
    }
}

export namespace AsExpression {
    export type Constructors = Expression.Constructors | 'AsExpression';
    export type Interface = Omit<AsExpression, Constructors>;
}
@DartClass
export class AsExpression extends Expression {
    operand : Expression;

    type : DartType;

    constructor(operand : Expression,type : DartType) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AsExpression(operand : Expression,type : DartType) {
        this.operand = operand;
        this.type = type;
        ((t)=>(!!t)?t.parent:null)(this.operand) = this;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return this.type;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitAsExpression(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitAsExpression(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_637_)=>(!!_637_)?_637_.accept(v):null)(this.operand);
        ((_638_)=>(!!_638_)?_638_.accept(v):null)(this.type);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.operand != null) {
            this.operand = this.operand.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.operand) = this;
        }
        this.type = v.visitDartType(this.type);
    }
}

export namespace TryFinally {
    export type Constructors = Statement.Constructors | 'TryFinally';
    export type Interface = Omit<TryFinally, Constructors>;
}
@DartClass
export class TryFinally extends Statement {
    body : Statement;

    finalizer : Statement;

    constructor(body : Statement,finalizer : Statement) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TryFinally(body : Statement,finalizer : Statement) {
        this.body = body;
        this.finalizer = finalizer;
        ((t)=>(!!t)?t.parent:null)(this.body) = this;
        ((t)=>(!!t)?t.parent:null)(this.finalizer) = this;
    }
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitTryFinally(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitTryFinally(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_675_)=>(!!_675_)?_675_.accept(v):null)(this.body);
        ((_676_)=>(!!_676_)?_676_.accept(v):null)(this.finalizer);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.body != null) {
            this.body = this.body.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.body) = this;
        }
        if (this.finalizer != null) {
            this.finalizer = this.finalizer.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.finalizer) = this;
        }
    }
}

export namespace YieldStatement {
    export type Constructors = Statement.Constructors | 'YieldStatement';
    export type Interface = Omit<YieldStatement, Constructors>;
}
@DartClass
export class YieldStatement extends Statement {
    expression : Expression;

    flags : number;

    constructor(expression : Expression,_namedArguments? : {isYieldStar? : boolean,isNative? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    YieldStatement(expression : Expression,_namedArguments? : {isYieldStar? : boolean,isNative? : boolean}) {
        let {isYieldStar,isNative} = Object.assign({
            "isYieldStar" : false,
            "isNative" : false}, _namedArguments );
        this.flags = 0;
        this.expression = expression;
        ((t)=>(!!t)?t.parent:null)(this.expression) = this;
        this.isYieldStar = isYieldStar;
        this.isNative = isNative;
    }
    private static __$FlagYieldStar : number;
    static get FlagYieldStar() : number { 
        if (this.__$FlagYieldStar===undefined) {
            this.__$FlagYieldStar = 1 << 0;
        }
        return this.__$FlagYieldStar;
    }

    private static __$FlagNative : number;
    static get FlagNative() : number { 
        if (this.__$FlagNative===undefined) {
            this.__$FlagNative = 1 << 1;
        }
        return this.__$FlagNative;
    }

    get isYieldStar() : boolean {
        return this.flags & YieldStatement.FlagYieldStar != 0;
    }
    get isNative() : boolean {
        return this.flags & YieldStatement.FlagNative != 0;
    }
    set isYieldStar(value : boolean) {
        this.flags = value ? (this.flags | YieldStatement.FlagYieldStar) : (this.flags & ~YieldStatement.FlagYieldStar);
    }
    set isNative(value : boolean) {
        this.flags = value ? (this.flags | YieldStatement.FlagNative) : (this.flags & ~YieldStatement.FlagNative);
    }
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitYieldStatement(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitYieldStatement(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_677_)=>(!!_677_)?_677_.accept(v):null)(this.expression);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.expression != null) {
            this.expression = this.expression.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.expression) = this;
        }
    }
}

export namespace VariableDeclaration {
    export type Constructors = Statement.Constructors | 'VariableDeclaration' | 'forValue';
    export type Interface = Omit<VariableDeclaration, Constructors>;
}
@DartClass
export class VariableDeclaration extends Statement {
    fileEqualsOffset : number;

    name : string;

    flags : number;

    type : DartType;

    binaryOffset : number;

    initializer : Expression;

    constructor(name : string,_namedArguments? : {initializer? : Expression,type? : DartType,isFinal? : boolean,isConst? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableDeclaration(name : string,_namedArguments? : {initializer? : Expression,type? : DartType,isFinal? : boolean,isConst? : boolean}) {
        let {initializer,type,isFinal,isConst} = Object.assign({
            "type" : new DynamicType(),
            "isFinal" : false,
            "isConst" : false}, _namedArguments );
        this.fileEqualsOffset = TreeNode.noOffset;
        this.flags = 0;
        this.binaryOffset = -1;
        this.name = name;
        this.initializer = initializer;
        this.type = type;
        /* TODO (AssertStatementImpl) : assert (type != null); */;
        ((t)=>(!!t)?t.parent:null)(this.initializer) = this;
        this.isFinal = isFinal;
        this.isConst = isConst;
    }
    @namedConstructor
    forValue(initializer : Expression,_namedArguments? : {isFinal? : boolean,isConst? : boolean,type? : DartType}) {
        let {isFinal,isConst,type} = Object.assign({
            "isFinal" : true,
            "isConst" : false,
            "type" : new DynamicType()}, _namedArguments );
        this.fileEqualsOffset = TreeNode.noOffset;
        this.flags = 0;
        this.binaryOffset = -1;
        this.initializer = initializer;
        this.type = type;
        /* TODO (AssertStatementImpl) : assert (type != null); */;
        ((t)=>(!!t)?t.parent:null)(this.initializer) = this;
        this.isFinal = isFinal;
        this.isConst = isConst;
    }
    static forValue : new(initializer : Expression,_namedArguments? : {isFinal? : boolean,isConst? : boolean,type? : DartType}) => VariableDeclaration;

    private static __$FlagFinal : number;
    static get FlagFinal() : number { 
        if (this.__$FlagFinal===undefined) {
            this.__$FlagFinal = 1 << 0;
        }
        return this.__$FlagFinal;
    }

    private static __$FlagConst : number;
    static get FlagConst() : number { 
        if (this.__$FlagConst===undefined) {
            this.__$FlagConst = 1 << 1;
        }
        return this.__$FlagConst;
    }

    private static __$FlagInScope : number;
    static get FlagInScope() : number { 
        if (this.__$FlagInScope===undefined) {
            this.__$FlagInScope = 1 << 2;
        }
        return this.__$FlagInScope;
    }

    get isFinal() : boolean {
        return this.flags & VariableDeclaration.FlagFinal != 0;
    }
    get isConst() : boolean {
        return this.flags & VariableDeclaration.FlagConst != 0;
    }
    set isFinal(value : boolean) {
        this.flags = value ? (this.flags | VariableDeclaration.FlagFinal) : (this.flags & ~VariableDeclaration.FlagFinal);
    }
    set isConst(value : boolean) {
        this.flags = value ? (this.flags | VariableDeclaration.FlagConst) : (this.flags & ~VariableDeclaration.FlagConst);
    }
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitVariableDeclaration(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitVariableDeclaration(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_678_)=>(!!_678_)?_678_.accept(v):null)(this.type);
        ((_679_)=>(!!_679_)?_679_.accept(v):null)(this.initializer);
    }
    transformChildren(v : lib3.Transformer) {
        this.type = v.visitDartType(this.type);
        if (this.initializer != null) {
            this.initializer = this.initializer.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.initializer) = this;
        }
    }
    toString() : string {
        return lib4.debugVariableDeclarationName(this);
    }
}

export namespace FunctionDeclaration {
    export type Constructors = Statement.Constructors | 'FunctionDeclaration';
    export type Interface = Omit<FunctionDeclaration, Constructors>;
}
@DartClass
export class FunctionDeclaration extends Statement {
    variable : VariableDeclaration;

    function : FunctionNode;

    constructor(variable : VariableDeclaration,function : FunctionNode) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionDeclaration(variable : VariableDeclaration,function : FunctionNode) {
        this.variable = variable;
        this.function = function;
        ((t)=>(!!t)?t.parent:null)(this.variable) = this;
        ((t)=>(!!t)?t.parent:null)(this.function) = this;
    }
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitFunctionDeclaration(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitFunctionDeclaration(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_680_)=>(!!_680_)?_680_.accept(v):null)(this.variable);
        ((_681_)=>(!!_681_)?_681_.accept(v):null)(this.function);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.variable != null) {
            this.variable = this.variable.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.variable) = this;
        }
        if (this.function != null) {
            this.function = this.function.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.function) = this;
        }
    }
}

export namespace Class {
    export type Constructors = NamedNode.Constructors | 'Class';
    export type Interface = Omit<Class, Constructors>;
}
@DartClass
export class Class extends NamedNode {
    level : ClassLevel;

    annotations : core.DartList<Expression>;

    name : string;

    isAbstract : boolean;

    fileUri : string;

    typeParameters : core.DartList<TypeParameter>;

    supertype : Supertype;

    mixedInType : Supertype;

    implementedTypes : core.DartList<Supertype>;

    fields : core.DartList<Field>;

    constructors : core.DartList<Constructor>;

    procedures : core.DartList<Procedure>;

    constructor(_namedArguments? : {name? : string,isAbstract? : boolean,supertype? : Supertype,mixedInType? : Supertype,typeParameters? : core.DartList<TypeParameter>,implementedTypes? : core.DartList<Supertype>,constructors? : core.DartList<Constructor>,procedures? : core.DartList<Procedure>,fields? : core.DartList<Field>,fileUri? : string,reference? : Reference}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Class(_namedArguments? : {name? : string,isAbstract? : boolean,supertype? : Supertype,mixedInType? : Supertype,typeParameters? : core.DartList<TypeParameter>,implementedTypes? : core.DartList<Supertype>,constructors? : core.DartList<Constructor>,procedures? : core.DartList<Procedure>,fields? : core.DartList<Field>,fileUri? : string,reference? : Reference}) {
        let {name,isAbstract,supertype,mixedInType,typeParameters,implementedTypes,constructors,procedures,fields,fileUri,reference} = Object.assign({
            "isAbstract" : false}, _namedArguments );
        this.level = ClassLevel.Body;
        this.annotations = new core.DartList.literal<Expression>();
        this.typeParameters = (typeParameters || new core.DartList.literal<TypeParameter>());
        this.implementedTypes = (implementedTypes || new core.DartList.literal<Supertype>());
        this.fields = (fields || new core.DartList.literal<Field>());
        this.constructors = (constructors || new core.DartList.literal<Constructor>());
        this.procedures = (procedures || new core.DartList.literal<Procedure>());
        super.NamedNode(reference);
        this.name = name;
        this.isAbstract = isAbstract;
        this.supertype = supertype;
        this.mixedInType = mixedInType;
        this.fileUri = fileUri;
        setParents(this.typeParameters,this);
        setParents(this.constructors,this);
        setParents(this.procedures,this);
        setParents(this.fields,this);
    }
    computeCanonicalNames() : void {
        /* TODO (AssertStatementImpl) : assert (canonicalName != null); */;
        for(let member of this.fields) {
            this.canonicalName.getChildFromMember(member).bindTo(member.reference);
        }
        for(let member of this.procedures) {
            this.canonicalName.getChildFromMember(member).bindTo(member.reference);
        }
        for(let member of this.constructors) {
            this.canonicalName.getChildFromMember(member).bindTo(member.reference);
        }
    }
    get superclass() : Class {
        return ((t)=>(!!t)?t.classNode:null)(this.supertype);
    }
    get mixedInClass() : Class {
        return ((t)=>(!!t)?t.classNode:null)(this.mixedInType);
    }
    get mixin() : Class {
        return (((t)=>(!!t)?t.mixin:null)(this.mixedInClass) || this);
    }
    get isMixinApplication() : boolean {
        return this.mixedInType != null;
    }
    get members() : core.DartIterable<Member> {
        return new core.DartList.literal<core.DartIterable<Member>>(this.fields,this.constructors,this.procedures).expand((x : any) =>  {
            return x;
        });
    }
    get supers() : core.DartIterable<Supertype> {
        return new core.DartList.literal<core.DartIterable<Supertype>>(op(Op.EQUALS,this.supertype,null) ? new core.DartList.literal() : new core.DartList.literal(this.supertype),op(Op.EQUALS,this.mixedInType,null) ? new core.DartList.literal() : new core.DartList.literal(this.mixedInType),this.implementedTypes).expand((x : any) =>  {
            return x;
        });
    }
    get enclosingLibrary() : Library {
        return this.parent;
    }
    addMember(member : Member) : void {
        member.parent = this;
        if (is(member, Constructor)) {
            this.constructors.add(member);
        }else if (is(member, Procedure)) {
            this.procedures.add(member);
        }else if (is(member, Field)) {
            this.fields.add(member);
        }else {
            throw new core.ArgumentError(member);
        }
    }
    addAnnotation(node : Expression) : void {
        if (this.annotations.isEmpty) {
            this.annotations = new core.DartList.literal<Expression>();
        }
        this.annotations.add(node);
        node.parent = this;
    }
    accept(v : lib3.TreeVisitor<any>) {
        return v.visitClass(this);
    }
    acceptReference(v : lib3.Visitor<any>) {
        return v.visitClassReference(this);
    }
    get isInExternalLibrary() : boolean {
        return this.enclosingLibrary.isExternal;
    }
    get asRawSupertype() : Supertype {
        return new Supertype(this,new core.DartList.filled(this.typeParameters.length,new DynamicType()));
    }
    get asThisSupertype() : Supertype {
        return new Supertype(this,_getAsTypeArguments(this.typeParameters));
    }
    _rawType : InterfaceType;

    get rawType() : InterfaceType {
        return this._rawType = ( this._rawType ) || ( new InterfaceType(this) );
    }
    _thisType : InterfaceType;

    get thisType() : InterfaceType {
        return this._thisType = ( this._thisType ) || ( new InterfaceType(this,_getAsTypeArguments(this.typeParameters)) );
    }
    _bottomType : InterfaceType;

    get bottomType() : InterfaceType {
        return this._bottomType = ( this._bottomType ) || ( new InterfaceType(this,new core.DartList.filled(this.typeParameters.length,new BottomType())) );
    }
    toString() : string {
        return lib4.debugQualifiedClassName(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        visitList(this.annotations,v);
        visitList(this.typeParameters,v);
        ((_579_)=>(!!_579_)?_579_.accept(v):null)(this.supertype);
        ((_580_)=>(!!_580_)?_580_.accept(v):null)(this.mixedInType);
        visitList(this.implementedTypes,v);
        visitList(this.constructors,v);
        visitList(this.procedures,v);
        visitList(this.fields,v);
    }
    transformChildren(v : lib3.Transformer) {
        transformList(this.annotations,v,this);
        transformList(this.typeParameters,v,this);
        if (this.supertype != null) {
            this.supertype = v.visitSupertype(this.supertype);
        }
        if (this.mixedInType != null) {
            this.mixedInType = v.visitSupertype(this.mixedInType);
        }
        transformSupertypeList(this.implementedTypes,v);
        transformList(this.constructors,v,this);
        transformList(this.procedures,v,this);
        transformList(this.fields,v,this);
    }
    _getLocationInEnclosingFile(offset : number) : Location {
        return this.enclosingProgram.getLocation(this.fileUri,offset);
    }
}

export namespace IsExpression {
    export type Constructors = Expression.Constructors | 'IsExpression';
    export type Interface = Omit<IsExpression, Constructors>;
}
@DartClass
export class IsExpression extends Expression {
    operand : Expression;

    type : DartType;

    constructor(operand : Expression,type : DartType) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IsExpression(operand : Expression,type : DartType) {
        this.operand = operand;
        this.type = type;
        ((t)=>(!!t)?t.parent:null)(this.operand) = this;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return types.boolType;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitIsExpression(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitIsExpression(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_635_)=>(!!_635_)?_635_.accept(v):null)(this.operand);
        ((_636_)=>(!!_636_)?_636_.accept(v):null)(this.type);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.operand != null) {
            this.operand = this.operand.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.operand) = this;
        }
        this.type = v.visitDartType(this.type);
    }
}

export namespace InvalidExpression {
    export type Constructors = Expression.Constructors | 'InvalidExpression';
    export type Interface = Omit<InvalidExpression, Constructors>;
}
@DartClass
export class InvalidExpression extends Expression {
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return new BottomType();
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitInvalidExpression(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitInvalidExpression(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
    transformChildren(v : lib3.Transformer) {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InvalidExpression() {
    }
}

export namespace VariableGet {
    export type Constructors = Expression.Constructors | 'VariableGet';
    export type Interface = Omit<VariableGet, Constructors>;
}
@DartClass
export class VariableGet extends Expression {
    variable : VariableDeclaration;

    promotedType : DartType;

    constructor(variable : VariableDeclaration,promotedType? : DartType) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableGet(variable : VariableDeclaration,promotedType? : DartType) {
        this.variable = variable;
        this.promotedType = promotedType;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return (this.promotedType || this.variable.type);
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitVariableGet(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitVariableGet(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_597_)=>(!!_597_)?_597_.accept(v):null)(this.promotedType);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.promotedType != null) {
            this.promotedType = v.visitDartType(this.promotedType);
        }
    }
}

export namespace StringConcatenation {
    export type Constructors = Expression.Constructors | 'StringConcatenation';
    export type Interface = Omit<StringConcatenation, Constructors>;
}
@DartClass
export class StringConcatenation extends Expression {
    expressions : core.DartList<Expression>;

    constructor(expressions : core.DartList<Expression>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringConcatenation(expressions : core.DartList<Expression>) {
        this.expressions = expressions;
        setParents(this.expressions,this);
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return types.stringType;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitStringConcatenation(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitStringConcatenation(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        visitList(this.expressions,v);
    }
    transformChildren(v : lib3.Transformer) {
        transformList(this.expressions,v,this);
    }
}

export namespace Rethrow {
    export type Constructors = Expression.Constructors | 'Rethrow';
    export type Interface = Omit<Rethrow, Constructors>;
}
@DartClass
export class Rethrow extends Expression {
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return new BottomType();
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitRethrow(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitRethrow(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
    }
    transformChildren(v : lib3.Transformer) {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Rethrow() {
    }
}

export namespace ConditionalExpression {
    export type Constructors = Expression.Constructors | 'ConditionalExpression';
    export type Interface = Omit<ConditionalExpression, Constructors>;
}
@DartClass
export class ConditionalExpression extends Expression {
    condition : Expression;

    then : Expression;

    otherwise : Expression;

    staticType : DartType;

    constructor(condition : Expression,then : Expression,otherwise : Expression,staticType : DartType) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConditionalExpression(condition : Expression,then : Expression,otherwise : Expression,staticType : DartType) {
        this.condition = condition;
        this.then = then;
        this.otherwise = otherwise;
        this.staticType = staticType;
        ((t)=>(!!t)?t.parent:null)(this.condition) = this;
        ((t)=>(!!t)?t.parent:null)(this.then) = this;
        ((t)=>(!!t)?t.parent:null)(this.otherwise) = this;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return this.staticType;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitConditionalExpression(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitConditionalExpression(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_631_)=>(!!_631_)?_631_.accept(v):null)(this.condition);
        ((_632_)=>(!!_632_)?_632_.accept(v):null)(this.then);
        ((_633_)=>(!!_633_)?_633_.accept(v):null)(this.otherwise);
        ((_634_)=>(!!_634_)?_634_.accept(v):null)(this.staticType);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.condition != null) {
            this.condition = this.condition.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.condition) = this;
        }
        if (this.then != null) {
            this.then = this.then.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.then) = this;
        }
        if (this.otherwise != null) {
            this.otherwise = this.otherwise.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.otherwise) = this;
        }
        if (this.staticType != null) {
            this.staticType = v.visitDartType(this.staticType);
        }
    }
}

export namespace Typedef {
    export type Constructors = NamedNode.Constructors | 'Typedef';
    export type Interface = Omit<Typedef, Constructors>;
}
@DartClass
export class Typedef extends NamedNode {
    fileUri : string;

    annotations : core.DartList<Expression>;

    name : string;

    typeParameters : core.DartList<TypeParameter>;

    type : DartType;

    constructor(name : string,type : DartType,_namedArguments? : {reference? : Reference,fileUri? : string,typeParameters? : core.DartList<TypeParameter>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Typedef(name : string,type : DartType,_namedArguments? : {reference? : Reference,fileUri? : string,typeParameters? : core.DartList<TypeParameter>}) {
        let {reference,fileUri,typeParameters} = Object.assign({
        }, _namedArguments );
        this.annotations = new core.DartList.literal<Expression>();
        this.typeParameters = (typeParameters || new core.DartList.literal<TypeParameter>());
        super.NamedNode(reference);
        this.name = name;
        this.type = type;
        this.fileUri = fileUri;
        setParents(this.typeParameters,this);
    }
    get enclosingLibrary() : Library {
        return this.parent;
    }
    accept(v : lib3.TreeVisitor<any>) {
        return v.visitTypedef(this);
    }
    transformChildren(v : lib3.Transformer) {
        transformList(this.annotations,v,this);
        transformList(this.typeParameters,v,this);
        if (this.type != null) {
            this.type = v.visitDartType(this.type);
        }
    }
    visitChildren(v : lib3.Visitor<any>) {
        visitList(this.annotations,v);
        visitList(this.typeParameters,v);
        ((_578_)=>(!!_578_)?_578_.accept(v):null)(this.type);
    }
    addAnnotation(node : Expression) : void {
        if (this.annotations.isEmpty) {
            this.annotations = new core.DartList.literal<Expression>();
        }
        this.annotations.add(node);
        node.parent = this;
    }
}

export namespace Library {
    export type Constructors = NamedNode.Constructors | 'Library';
    export type Interface = Omit<Library, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class Library extends NamedNode implements core.DartComparable.Interface<Library> {
    importUri : lib6.Uri;

    fileUri : string;

    isExternal : boolean;

    name : string;

    annotations : core.DartList<Expression>;

    dependencies : core.DartList<LibraryDependency>;

    typedefs : core.DartList<Typedef>;

    classes : core.DartList<Class>;

    procedures : core.DartList<Procedure>;

    fields : core.DartList<Field>;

    constructor(importUri : lib6.Uri,_namedArguments? : {name? : string,isExternal? : boolean,annotations? : core.DartList<Expression>,dependencies? : core.DartList<LibraryDependency>,typedefs? : core.DartList<Typedef>,classes? : core.DartList<Class>,procedures? : core.DartList<Procedure>,fields? : core.DartList<Field>,fileUri? : string,reference? : Reference}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Library(importUri : lib6.Uri,_namedArguments? : {name? : string,isExternal? : boolean,annotations? : core.DartList<Expression>,dependencies? : core.DartList<LibraryDependency>,typedefs? : core.DartList<Typedef>,classes? : core.DartList<Class>,procedures? : core.DartList<Procedure>,fields? : core.DartList<Field>,fileUri? : string,reference? : Reference}) {
        let {name,isExternal,annotations,dependencies,typedefs,classes,procedures,fields,fileUri,reference} = Object.assign({
            "isExternal" : false}, _namedArguments );
        this._libraryId = ++Library._libraryIdCounter;
        this.annotations = (annotations || new core.DartList.literal<Expression>());
        this.dependencies = (dependencies || new core.DartList.literal<LibraryDependency>());
        this.typedefs = (typedefs || new core.DartList.literal<Typedef>());
        this.classes = (classes || new core.DartList.literal<Class>());
        this.procedures = (procedures || new core.DartList.literal<Procedure>());
        this.fields = (fields || new core.DartList.literal<Field>());
        super.NamedNode(reference);
        this.importUri = importUri;
        this.name = name;
        this.isExternal = isExternal;
        this.fileUri = fileUri;
        setParents(this.dependencies,this);
        setParents(this.typedefs,this);
        setParents(this.classes,this);
        setParents(this.procedures,this);
        setParents(this.fields,this);
    }
    get members() : core.DartIterable<Member> {
        return new core.DartList.literal<core.DartIterable<Member>>(this.fields,this.procedures).expand((x : any) =>  {
            return x;
        });
    }
    addMember(member : Member) : void {
        member.parent = this;
        if (is(member, Procedure)) {
            this.procedures.add(member);
        }else if (is(member, Field)) {
            this.fields.add(member);
        }else {
            throw new core.ArgumentError(member);
        }
    }
    addClass(class_ : Class) : void {
        class_.parent = this;
        this.classes.add(class_);
    }
    addTypedef(typedef_ : Typedef) : void {
        typedef_.parent = this;
        this.typedefs.add(typedef_);
    }
    addAnnotation(node : Expression) : void {
        node.parent = this;
        this.annotations.add(node);
    }
    computeCanonicalNames() : void {
        /* TODO (AssertStatementImpl) : assert (canonicalName != null); */;
        for(let typedef_ of this.typedefs) {
            this.canonicalName.getChildFromTypedef(typedef_).bindTo(typedef_.reference);
        }
        for(let field of this.fields) {
            this.canonicalName.getChildFromMember(field).bindTo(field.reference);
        }
        for(let member of this.procedures) {
            this.canonicalName.getChildFromMember(member).bindTo(member.reference);
        }
        for(let class_ of this.classes) {
            this.canonicalName.getChild(class_.name).bindTo(class_.reference);
            class_.computeCanonicalNames();
        }
    }
    addDependency(node : LibraryDependency) : void {
        this.dependencies.add(((_) : LibraryDependency =>  {
            {
                _.parent = this;
                return _;
            }
        })(node));
    }
    accept(v : lib3.TreeVisitor<any>) {
        return v.visitLibrary(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        visitList(this.dependencies,v);
        visitList(this.typedefs,v);
        visitList(this.classes,v);
        visitList(this.procedures,v);
        visitList(this.fields,v);
    }
    transformChildren(v : lib3.Transformer) {
        transformList(this.dependencies,v,this);
        transformList(this.typedefs,v,this);
        transformList(this.classes,v,this);
        transformList(this.procedures,v,this);
        transformList(this.fields,v,this);
    }
    private static __$_libraryIdCounter : number;
    static get _libraryIdCounter() : number { 
        if (this.__$_libraryIdCounter===undefined) {
            this.__$_libraryIdCounter = 0;
        }
        return this.__$_libraryIdCounter;
    }
    static set _libraryIdCounter(__$value : number)  { 
        this.__$_libraryIdCounter = __$value;
    }

    _libraryId : number;

    compareTo(other : Library) : number {
        return this._libraryId - other._libraryId;
    }
    toString() : string {
        return lib4.debugLibraryName(this);
    }
    _getLocationInEnclosingFile(offset : number) : Location {
        return this.enclosingProgram.getLocation(this.fileUri,offset);
    }
}

export namespace InvocationExpression {
    export type Constructors = Expression.Constructors | 'InvocationExpression';
    export type Interface = Omit<InvocationExpression, Constructors>;
}
@DartClass
export class InvocationExpression extends Expression {
    @AbstractProperty
    get arguments() : Arguments{ throw 'abstract'}
    set arguments(value : Arguments){ throw 'abstract'}
    @AbstractProperty
    get name() : Name{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InvocationExpression() {
    }
}

export namespace StaticSet {
    export type Constructors = Expression.Constructors | 'StaticSet' | 'byReference';
    export type Interface = Omit<StaticSet, Constructors>;
}
@DartClass
export class StaticSet extends Expression {
    targetReference : Reference;

    value : Expression;

    constructor(target : Member,value : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StaticSet(target : Member,value : Expression) {
        this.byReference(getMemberReference(target),value);
    }
    @namedConstructor
    byReference(targetReference : Reference,value : Expression) {
        this.targetReference = targetReference;
        this.value = value;
        ((t)=>(!!t)?t.parent:null)(this.value) = this;
    }
    static byReference : new(targetReference : Reference,value : Expression) => StaticSet;

    get target() : Member {
        return ((t)=>(!!t)?t.asMember:null)(this.targetReference);
    }
    set target(target : Member) {
        this.targetReference = getMemberReference(target);
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return this.value.getStaticType(types);
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitStaticSet(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitStaticSet(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_616_)=>(!!_616_)?_616_.acceptReference(v):null)(this.target);
        ((_617_)=>(!!_617_)?_617_.accept(v):null)(this.value);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.value != null) {
            this.value = this.value.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.value) = this;
        }
    }
}

export namespace StaticGet {
    export type Constructors = Expression.Constructors | 'StaticGet' | 'byReference';
    export type Interface = Omit<StaticGet, Constructors>;
}
@DartClass
export class StaticGet extends Expression {
    targetReference : Reference;

    constructor(target : Member) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StaticGet(target : Member) {
        this.byReference(getMemberReference(target));
    }
    @namedConstructor
    byReference(targetReference : Reference) {
        this.targetReference = targetReference;
    }
    static byReference : new(targetReference : Reference) => StaticGet;

    get target() : Member {
        return ((t)=>(!!t)?t.asMember:null)(this.targetReference);
    }
    set target(target : Member) {
        this.targetReference = getMemberReference(target);
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return this.target.getterType;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitStaticGet(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitStaticGet(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_615_)=>(!!_615_)?_615_.acceptReference(v):null)(this.target);
    }
    transformChildren(v : lib3.Transformer) {
    }
}

export namespace SwitchStatement {
    export type Constructors = Statement.Constructors | 'SwitchStatement';
    export type Interface = Omit<SwitchStatement, Constructors>;
}
@DartClass
export class SwitchStatement extends Statement {
    expression : Expression;

    cases : core.DartList<SwitchCase>;

    constructor(expression : Expression,cases : core.DartList<SwitchCase>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SwitchStatement(expression : Expression,cases : core.DartList<SwitchCase>) {
        this.expression = expression;
        this.cases = cases;
        ((t)=>(!!t)?t.parent:null)(this.expression) = this;
        setParents(this.cases,this);
    }
    accept(v : lib3.StatementVisitor<any>) {
        return v.visitSwitchStatement(this);
    }
    accept1(v : lib3.StatementVisitor1<any,any>,arg : any) {
        return v.visitSwitchStatement(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_664_)=>(!!_664_)?_664_.accept(v):null)(this.expression);
        visitList(this.cases,v);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.expression != null) {
            this.expression = this.expression.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.expression) = this;
        }
        transformList(this.cases,v,this);
    }
}

export namespace VariableSet {
    export type Constructors = Expression.Constructors | 'VariableSet';
    export type Interface = Omit<VariableSet, Constructors>;
}
@DartClass
export class VariableSet extends Expression {
    variable : VariableDeclaration;

    value : Expression;

    constructor(variable : VariableDeclaration,value : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableSet(variable : VariableDeclaration,value : Expression) {
        this.variable = variable;
        this.value = value;
        ((t)=>(!!t)?t.parent:null)(this.value) = this;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return this.value.getStaticType(types);
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitVariableSet(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitVariableSet(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_598_)=>(!!_598_)?_598_.accept(v):null)(this.value);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.value != null) {
            this.value = this.value.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.value) = this;
        }
    }
}

export namespace SuperPropertySet {
    export type Constructors = Expression.Constructors | 'SuperPropertySet' | 'byReference';
    export type Interface = Omit<SuperPropertySet, Constructors>;
}
@DartClass
export class SuperPropertySet extends Expression {
    name : Name;

    value : Expression;

    interfaceTargetReference : Reference;

    constructor(name : Name,value : Expression,interfaceTarget : Member) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SuperPropertySet(name : Name,value : Expression,interfaceTarget : Member) {
        this.byReference(name,value,getMemberReference(interfaceTarget));
    }
    @namedConstructor
    byReference(name : Name,value : Expression,interfaceTargetReference : Reference) {
        this.name = name;
        this.value = value;
        this.interfaceTargetReference = interfaceTargetReference;
        ((t)=>(!!t)?t.parent:null)(this.value) = this;
    }
    static byReference : new(name : Name,value : Expression,interfaceTargetReference : Reference) => SuperPropertySet;

    get interfaceTarget() : Member {
        return ((t)=>(!!t)?t.asMember:null)(this.interfaceTargetReference);
    }
    set interfaceTarget(member : Member) {
        this.interfaceTargetReference = getMemberReference(member);
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return this.value.getStaticType(types);
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitSuperPropertySet(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitSuperPropertySet(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_613_)=>(!!_613_)?_613_.accept(v):null)(this.name);
        ((_614_)=>(!!_614_)?_614_.accept(v):null)(this.value);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.value != null) {
            this.value = this.value.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.value) = this;
        }
    }
}

export namespace SuperPropertyGet {
    export type Constructors = Expression.Constructors | 'SuperPropertyGet' | 'byReference';
    export type Interface = Omit<SuperPropertyGet, Constructors>;
}
@DartClass
export class SuperPropertyGet extends Expression {
    name : Name;

    interfaceTargetReference : Reference;

    constructor(name : Name,interfaceTarget? : Member) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SuperPropertyGet(name : Name,interfaceTarget? : Member) {
        this.byReference(name,getMemberReference(interfaceTarget));
    }
    @namedConstructor
    byReference(name : Name,interfaceTargetReference : Reference) {
        this.name = name;
        this.interfaceTargetReference = interfaceTargetReference;
    }
    static byReference : new(name : Name,interfaceTargetReference : Reference) => SuperPropertyGet;

    get interfaceTarget() : Member {
        return ((t)=>(!!t)?t.asMember:null)(this.interfaceTargetReference);
    }
    set interfaceTarget(member : Member) {
        this.interfaceTargetReference = getMemberReference(member);
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        let declaringClass : Class = this.interfaceTarget.enclosingClass;
        if (declaringClass.typeParameters.isEmpty) {
            return this.interfaceTarget.getterType;
        }
        let receiver = types.hierarchy.getTypeAsInstanceOf(types.thisType,declaringClass);
        return lib9.Substitution.fromInterfaceType(receiver).substituteType(this.interfaceTarget.getterType);
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitSuperPropertyGet(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitSuperPropertyGet(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_612_)=>(!!_612_)?_612_.accept(v):null)(this.name);
    }
    transformChildren(v : lib3.Transformer) {
    }
}

export namespace PropertyGet {
    export type Constructors = Expression.Constructors | 'PropertyGet' | 'byReference';
    export type Interface = Omit<PropertyGet, Constructors>;
}
@DartClass
export class PropertyGet extends Expression {
    receiver : Expression;

    name : Name;

    interfaceTargetReference : Reference;

    constructor(receiver : Expression,name : Name,interfaceTarget? : Member) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PropertyGet(receiver : Expression,name : Name,interfaceTarget? : Member) {
        this.byReference(receiver,name,getMemberReference(interfaceTarget));
    }
    @namedConstructor
    byReference(receiver : Expression,name : Name,interfaceTargetReference : Reference) {
        this.receiver = receiver;
        this.name = name;
        this.interfaceTargetReference = interfaceTargetReference;
        ((t)=>(!!t)?t.parent:null)(this.receiver) = this;
    }
    static byReference : new(receiver : Expression,name : Name,interfaceTargetReference : Reference) => PropertyGet;

    get interfaceTarget() : Member {
        return ((t)=>(!!t)?t.asMember:null)(this.interfaceTargetReference);
    }
    set interfaceTarget(member : Member) {
        this.interfaceTargetReference = getMemberReference(member);
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        let interfaceTarget = this.interfaceTarget;
        if (interfaceTarget != null) {
            let superclass : Class = interfaceTarget.enclosingClass;
            let receiverType = this.receiver.getStaticTypeAsInstanceOf(superclass,types);
            return lib9.Substitution.fromInterfaceType(receiverType).substituteType(interfaceTarget.getterType);
        }
        let nameString : string = this.name.name;
        if (nameString == 'hashCode') {
            return types.intType;
        }else if (nameString == 'runtimeType') {
            return types.typeType;
        }
        return new DynamicType();
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitPropertyGet(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitPropertyGet(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_599_)=>(!!_599_)?_599_.accept(v):null)(this.receiver);
        ((_600_)=>(!!_600_)?_600_.accept(v):null)(this.name);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.receiver != null) {
            this.receiver = this.receiver.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.receiver) = this;
        }
    }
}

export namespace Member {
    export type Constructors = NamedNode.Constructors | 'Member';
    export type Interface = Omit<Member, Constructors>;
}
@DartClass
export class Member extends NamedNode {
    fileEndOffset : number;

    annotations : core.DartList<Expression>;

    name : Name;

    transformerFlags : number;

    constructor(name : Name,reference : Reference) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Member(name : Name,reference : Reference) {
        this.fileEndOffset = TreeNode.noOffset;
        this.annotations = new core.DartList.literal<Expression>();
        this.transformerFlags = 0;
        super.NamedNode(reference);
        this.name = name;
    }
    get enclosingClass() : Class {
        return is(this.parent, Class) ? this.parent : null;
    }
    get enclosingLibrary() : Library {
        return is(this.parent, Class) ? this.parent.parent : this.parent;
    }
    @Abstract
    accept(v : lib3.MemberVisitor<any>){ throw 'abstract'}
    @Abstract
    acceptReference(v : lib3.MemberReferenceVisitor<any>){ throw 'abstract'}
    get isInExternalLibrary() : boolean {
        return this.enclosingLibrary.isExternal;
    }
    get isAbstract() : boolean {
        return false;
    }
    @AbstractProperty
    get hasGetter() : boolean{ throw 'abstract'}
    @AbstractProperty
    get hasSetter() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isInstanceMember() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isExternal() : boolean{ throw 'abstract'}
    set isExternal(value : boolean){ throw 'abstract'}
    get function() : FunctionNode {
        return null;
    }
    toString() : string {
        return lib4.debugQualifiedMemberName(this);
    }
    addAnnotation(node : Expression) : void {
        if (this.annotations.isEmpty) {
            this.annotations = new core.DartList.literal<Expression>();
        }
        this.annotations.add(node);
        node.parent = this;
    }
    @AbstractProperty
    get getterType() : DartType{ throw 'abstract'}
    @AbstractProperty
    get setterType() : DartType{ throw 'abstract'}
    get containsSuperCalls() : boolean {
        return this.transformerFlags & lib7.TransformerFlag.superCalls != 0;
    }
}

export namespace PropertySet {
    export type Constructors = Expression.Constructors | 'PropertySet' | 'byReference';
    export type Interface = Omit<PropertySet, Constructors>;
}
@DartClass
export class PropertySet extends Expression {
    receiver : Expression;

    name : Name;

    value : Expression;

    interfaceTargetReference : Reference;

    constructor(receiver : Expression,name : Name,value : Expression,interfaceTarget? : Member) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PropertySet(receiver : Expression,name : Name,value : Expression,interfaceTarget? : Member) {
        this.byReference(receiver,name,value,getMemberReference(interfaceTarget));
    }
    @namedConstructor
    byReference(receiver : Expression,name : Name,value : Expression,interfaceTargetReference : Reference) {
        this.receiver = receiver;
        this.name = name;
        this.value = value;
        this.interfaceTargetReference = interfaceTargetReference;
        ((t)=>(!!t)?t.parent:null)(this.receiver) = this;
        ((t)=>(!!t)?t.parent:null)(this.value) = this;
    }
    static byReference : new(receiver : Expression,name : Name,value : Expression,interfaceTargetReference : Reference) => PropertySet;

    get interfaceTarget() : Member {
        return ((t)=>(!!t)?t.asMember:null)(this.interfaceTargetReference);
    }
    set interfaceTarget(member : Member) {
        this.interfaceTargetReference = getMemberReference(member);
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return this.value.getStaticType(types);
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitPropertySet(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitPropertySet(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_601_)=>(!!_601_)?_601_.accept(v):null)(this.receiver);
        ((_602_)=>(!!_602_)?_602_.accept(v):null)(this.name);
        ((_603_)=>(!!_603_)?_603_.accept(v):null)(this.value);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.receiver != null) {
            this.receiver = this.receiver.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.receiver) = this;
        }
        if (this.value != null) {
            this.value = this.value.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.value) = this;
        }
    }
}

export namespace LogicalExpression {
    export type Constructors = Expression.Constructors | 'LogicalExpression';
    export type Interface = Omit<LogicalExpression, Constructors>;
}
@DartClass
export class LogicalExpression extends Expression {
    left : Expression;

    operator : string;

    right : Expression;

    constructor(left : Expression,operator : string,right : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LogicalExpression(left : Expression,operator : string,right : Expression) {
        this.left = left;
        this.operator = operator;
        this.right = right;
        ((t)=>(!!t)?t.parent:null)(this.left) = this;
        ((t)=>(!!t)?t.parent:null)(this.right) = this;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return types.boolType;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitLogicalExpression(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitLogicalExpression(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_629_)=>(!!_629_)?_629_.accept(v):null)(this.left);
        ((_630_)=>(!!_630_)?_630_.accept(v):null)(this.right);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.left != null) {
            this.left = this.left.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.left) = this;
        }
        if (this.right != null) {
            this.right = this.right.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.right) = this;
        }
    }
}

export namespace FunctionExpression {
    export type Constructors = Expression.Constructors | 'FunctionExpression';
    export type Interface = Omit<FunctionExpression, Constructors>;
}
@DartClass
export class FunctionExpression extends Expression {
    function : FunctionNode;

    constructor(function : FunctionNode) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionExpression(function : FunctionNode) {
        this.function = function;
        ((t)=>(!!t)?t.parent:null)(this.function) = this;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return this.function.functionType;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitFunctionExpression(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitFunctionExpression(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_647_)=>(!!_647_)?_647_.accept(v):null)(this.function);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.function != null) {
            this.function = this.function.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.function) = this;
        }
    }
}

export namespace BoolLiteral {
    export type Constructors = BasicLiteral.Constructors | 'BoolLiteral';
    export type Interface = Omit<BoolLiteral, Constructors>;
}
@DartClass
export class BoolLiteral extends BasicLiteral {
    value : boolean;

    constructor(value : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BoolLiteral(value : boolean) {
        this.value = value;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return types.boolType;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitBoolLiteral(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitBoolLiteral(this,arg);
    }
}

export namespace DoubleLiteral {
    export type Constructors = BasicLiteral.Constructors | 'DoubleLiteral';
    export type Interface = Omit<DoubleLiteral, Constructors>;
}
@DartClass
export class DoubleLiteral extends BasicLiteral {
    value : double;

    constructor(value : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DoubleLiteral(value : double) {
        this.value = value;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return types.doubleType;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitDoubleLiteral(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitDoubleLiteral(this,arg);
    }
}

export namespace IntLiteral {
    export type Constructors = BasicLiteral.Constructors | 'IntLiteral';
    export type Interface = Omit<IntLiteral, Constructors>;
}
@DartClass
export class IntLiteral extends BasicLiteral {
    value : number;

    constructor(value : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IntLiteral(value : number) {
        this.value = value;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return types.intType;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitIntLiteral(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitIntLiteral(this,arg);
    }
}

export namespace StringLiteral {
    export type Constructors = BasicLiteral.Constructors | 'StringLiteral';
    export type Interface = Omit<StringLiteral, Constructors>;
}
@DartClass
export class StringLiteral extends BasicLiteral {
    value : string;

    constructor(value : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringLiteral(value : string) {
        this.value = value;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return types.stringType;
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitStringLiteral(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitStringLiteral(this,arg);
    }
}

export namespace ConstructorInvocation {
    export type Constructors = InvocationExpression.Constructors | 'ConstructorInvocation' | 'byReference';
    export type Interface = Omit<ConstructorInvocation, Constructors>;
}
@DartClass
export class ConstructorInvocation extends InvocationExpression {
    targetReference : Reference;

    arguments : Arguments;

    isConst : boolean;

    get name() : Name {
        return ((t)=>(!!t)?t.name:null)(this.target);
    }
    constructor(target : Constructor,arguments : Arguments,_namedArguments? : {isConst? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorInvocation(target : Constructor,arguments : Arguments,_namedArguments? : {isConst? : boolean}) {
        let {isConst} = Object.assign({
            "isConst" : false}, _namedArguments );
        this.byReference(getMemberReference(target),arguments,{
            isConst : isConst});
    }
    @namedConstructor
    byReference(targetReference : Reference,arguments : Arguments,_namedArguments? : {isConst? : boolean}) {
        let {isConst} = Object.assign({
            "isConst" : false}, _namedArguments );
        this.targetReference = targetReference;
        this.arguments = arguments;
        this.isConst = isConst;
        ((t)=>(!!t)?t.parent:null)(this.arguments) = this;
    }
    static byReference : new(targetReference : Reference,arguments : Arguments,_namedArguments? : {isConst? : boolean}) => ConstructorInvocation;

    get target() : Constructor {
        return ((t)=>(!!t)?t.asConstructor:null)(this.targetReference);
    }
    set target(target : Constructor) {
        this.targetReference = getMemberReference(target);
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return this.arguments.types.isEmpty ? this.target.enclosingClass.rawType : new InterfaceType(this.target.enclosingClass,this.arguments.types);
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitConstructorInvocation(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitConstructorInvocation(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_626_)=>(!!_626_)?_626_.acceptReference(v):null)(this.target);
        ((_627_)=>(!!_627_)?_627_.accept(v):null)(this.arguments);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.arguments != null) {
            this.arguments = this.arguments.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.arguments) = this;
        }
    }
    get constructedType() : InterfaceType {
        return this.arguments.types.isEmpty ? this.target.enclosingClass.rawType : new InterfaceType(this.target.enclosingClass,this.arguments.types);
    }
}

export namespace StaticInvocation {
    export type Constructors = InvocationExpression.Constructors | 'StaticInvocation' | 'byReference';
    export type Interface = Omit<StaticInvocation, Constructors>;
}
@DartClass
export class StaticInvocation extends InvocationExpression {
    targetReference : Reference;

    arguments : Arguments;

    isConst : boolean;

    get name() : Name {
        return ((t)=>(!!t)?t.name:null)(this.target);
    }
    constructor(target : Procedure,arguments : Arguments,_namedArguments? : {isConst? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StaticInvocation(target : Procedure,arguments : Arguments,_namedArguments? : {isConst? : boolean}) {
        let {isConst} = Object.assign({
            "isConst" : false}, _namedArguments );
        this.byReference(getMemberReference(target),arguments,{
            isConst : isConst});
    }
    @namedConstructor
    byReference(targetReference : Reference,arguments : Arguments,_namedArguments? : {isConst? : boolean}) {
        let {isConst} = Object.assign({
            "isConst" : false}, _namedArguments );
        this.targetReference = targetReference;
        this.arguments = arguments;
        this.isConst = isConst;
        ((t)=>(!!t)?t.parent:null)(this.arguments) = this;
    }
    static byReference : new(targetReference : Reference,arguments : Arguments,_namedArguments? : {isConst? : boolean}) => StaticInvocation;

    get target() : Procedure {
        return ((t)=>(!!t)?t.asProcedure:null)(this.targetReference);
    }
    set target(target : Procedure) {
        this.targetReference = getMemberReference(target);
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return lib9.Substitution.fromPairs(this.target.function.typeParameters,this.arguments.types).substituteType(this.target.function.returnType);
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitStaticInvocation(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitStaticInvocation(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_624_)=>(!!_624_)?_624_.acceptReference(v):null)(this.target);
        ((_625_)=>(!!_625_)?_625_.accept(v):null)(this.arguments);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.arguments != null) {
            this.arguments = this.arguments.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.arguments) = this;
        }
    }
}

export namespace SuperMethodInvocation {
    export type Constructors = InvocationExpression.Constructors | 'SuperMethodInvocation' | 'byReference';
    export type Interface = Omit<SuperMethodInvocation, Constructors>;
}
@DartClass
export class SuperMethodInvocation extends InvocationExpression {
    name : Name;

    arguments : Arguments;

    interfaceTargetReference : Reference;

    constructor(name : Name,arguments : Arguments,interfaceTarget? : Procedure) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SuperMethodInvocation(name : Name,arguments : Arguments,interfaceTarget? : Procedure) {
        this.byReference(name,arguments,getMemberReference(interfaceTarget));
    }
    @namedConstructor
    byReference(name : Name,arguments : Arguments,interfaceTargetReference : Reference) {
        this.name = name;
        this.arguments = arguments;
        this.interfaceTargetReference = interfaceTargetReference;
        ((t)=>(!!t)?t.parent:null)(this.arguments) = this;
    }
    static byReference : new(name : Name,arguments : Arguments,interfaceTargetReference : Reference) => SuperMethodInvocation;

    get interfaceTarget() : Procedure {
        return ((t)=>(!!t)?t.asProcedure:null)(this.interfaceTargetReference);
    }
    set interfaceTarget(target : Procedure) {
        this.interfaceTargetReference = getMemberReference(target);
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        if (op(Op.EQUALS,this.interfaceTarget,null)) return new DynamicType();
        let superclass : Class = this.interfaceTarget.enclosingClass;
        let receiverType = types.hierarchy.getTypeAsInstanceOf(types.thisType,superclass);
        let returnType = lib9.Substitution.fromInterfaceType(receiverType).substituteType(this.interfaceTarget.function.returnType);
        return lib9.Substitution.fromPairs(this.interfaceTarget.function.typeParameters,this.arguments.types).substituteType(returnType);
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitSuperMethodInvocation(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitSuperMethodInvocation(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_622_)=>(!!_622_)?_622_.accept(v):null)(this.name);
        ((_623_)=>(!!_623_)?_623_.accept(v):null)(this.arguments);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.arguments != null) {
            this.arguments = this.arguments.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.arguments) = this;
        }
    }
}

export namespace MethodInvocation {
    export type Constructors = InvocationExpression.Constructors | 'MethodInvocation' | 'byReference';
    export type Interface = Omit<MethodInvocation, Constructors>;
}
@DartClass
export class MethodInvocation extends InvocationExpression {
    receiver : Expression;

    name : Name;

    arguments : Arguments;

    interfaceTargetReference : Reference;

    constructor(receiver : Expression,name : Name,arguments : Arguments,interfaceTarget? : Procedure) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MethodInvocation(receiver : Expression,name : Name,arguments : Arguments,interfaceTarget? : Procedure) {
        this.byReference(receiver,name,arguments,getMemberReference(interfaceTarget));
    }
    @namedConstructor
    byReference(receiver : Expression,name : Name,arguments : Arguments,interfaceTargetReference : Reference) {
        this.receiver = receiver;
        this.name = name;
        this.arguments = arguments;
        this.interfaceTargetReference = interfaceTargetReference;
        ((t)=>(!!t)?t.parent:null)(this.receiver) = this;
        ((t)=>(!!t)?t.parent:null)(this.arguments) = this;
    }
    static byReference : new(receiver : Expression,name : Name,arguments : Arguments,interfaceTargetReference : Reference) => MethodInvocation;

    get interfaceTarget() : Procedure {
        return ((t)=>(!!t)?t.asProcedure:null)(this.interfaceTargetReference);
    }
    set interfaceTarget(target : Member) {
        this.interfaceTargetReference = getMemberReference(target);
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        if (this.interfaceTarget != null) {
            if (types.isOverloadedArithmeticOperator(this.interfaceTarget)) {
                return types.getTypeOfOverloadedArithmetic(this.receiver.getStaticType(types),this.arguments.positional[0].getStaticType(types));
            }
            let superclass : Class = this.interfaceTarget.enclosingClass;
            let receiverType = this.receiver.getStaticTypeAsInstanceOf(superclass,types);
            let returnType = lib9.Substitution.fromInterfaceType(receiverType).substituteType(this.interfaceTarget.function.returnType);
            return lib9.Substitution.fromPairs(this.interfaceTarget.function.typeParameters,this.arguments.types).substituteType(returnType);
        }
        if (this.name.name == 'call') {
            let receiverType = this.receiver.getStaticType(types);
            if (is(receiverType, FunctionType)) {
                if (receiverType.typeParameters.length != this.arguments.types.length) {
                    return new BottomType();
                }
                return lib9.Substitution.fromPairs(receiverType.typeParameters,this.arguments.types).substituteType(receiverType.returnType);
            }
        }
        if (this.name.name == '==') {
            return types.boolType;
        }
        return new DynamicType();
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitMethodInvocation(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitMethodInvocation(this,arg);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_619_)=>(!!_619_)?_619_.accept(v):null)(this.receiver);
        ((_620_)=>(!!_620_)?_620_.accept(v):null)(this.name);
        ((_621_)=>(!!_621_)?_621_.accept(v):null)(this.arguments);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.receiver != null) {
            this.receiver = this.receiver.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.receiver) = this;
        }
        if (this.arguments != null) {
            this.arguments = this.arguments.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.arguments) = this;
        }
    }
}

export namespace DirectMethodInvocation {
    export type Constructors = InvocationExpression.Constructors | 'DirectMethodInvocation' | 'byReference';
    export type Interface = Omit<DirectMethodInvocation, Constructors>;
}
@DartClass
export class DirectMethodInvocation extends InvocationExpression {
    receiver : Expression;

    targetReference : Reference;

    arguments : Arguments;

    constructor(receiver : Expression,target : Procedure,arguments : Arguments) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DirectMethodInvocation(receiver : Expression,target : Procedure,arguments : Arguments) {
        this.byReference(receiver,getMemberReference(target),arguments);
    }
    @namedConstructor
    byReference(receiver : Expression,targetReference : Reference,arguments : Arguments) {
        this.receiver = receiver;
        this.targetReference = targetReference;
        this.arguments = arguments;
        ((t)=>(!!t)?t.parent:null)(this.receiver) = this;
        ((t)=>(!!t)?t.parent:null)(this.arguments) = this;
    }
    static byReference : new(receiver : Expression,targetReference : Reference,arguments : Arguments) => DirectMethodInvocation;

    get target() : Procedure {
        return ((t)=>(!!t)?t.asProcedure:null)(this.targetReference);
    }
    set target(target : Procedure) {
        this.targetReference = getMemberReference(target);
    }
    get name() : Name {
        return ((t)=>(!!t)?t.name:null)(this.target);
    }
    visitChildren(v : lib3.Visitor<any>) {
        ((_609_)=>(!!_609_)?_609_.accept(v):null)(this.receiver);
        ((_610_)=>(!!_610_)?_610_.acceptReference(v):null)(this.target);
        ((_611_)=>(!!_611_)?_611_.accept(v):null)(this.arguments);
    }
    transformChildren(v : lib3.Transformer) {
        if (this.receiver != null) {
            this.receiver = this.receiver.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.receiver) = this;
        }
        if (this.arguments != null) {
            this.arguments = this.arguments.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.arguments) = this;
        }
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitDirectMethodInvocation(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitDirectMethodInvocation(this,arg);
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        if (types.isOverloadedArithmeticOperator(this.target)) {
            return types.getTypeOfOverloadedArithmetic(this.receiver.getStaticType(types),this.arguments.positional[0].getStaticType(types));
        }
        let superclass : Class = this.target.enclosingClass;
        let receiverType = this.receiver.getStaticTypeAsInstanceOf(superclass,types);
        let returnType = lib9.Substitution.fromInterfaceType(receiverType).substituteType(this.target.function.returnType);
        return lib9.Substitution.fromPairs(this.target.function.typeParameters,this.arguments.types).substituteType(returnType);
    }
}

export namespace Procedure {
    export type Constructors = Member.Constructors | 'Procedure';
    export type Interface = Omit<Procedure, Constructors>;
}
@DartClass
export class Procedure extends Member {
    kind : ProcedureKind;

    flags : number;

    function : FunctionNode;

    fileUri : string;

    constructor(name : Name,kind : ProcedureKind,function : FunctionNode,_namedArguments? : {isAbstract? : boolean,isStatic? : boolean,isExternal? : boolean,isConst? : boolean,transformerFlags? : number,fileUri? : string,reference? : Reference}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Procedure(name : Name,kind : ProcedureKind,function : FunctionNode,_namedArguments? : {isAbstract? : boolean,isStatic? : boolean,isExternal? : boolean,isConst? : boolean,transformerFlags? : number,fileUri? : string,reference? : Reference}) {
        let {isAbstract,isStatic,isExternal,isConst,transformerFlags,fileUri,reference} = Object.assign({
            "isAbstract" : false,
            "isStatic" : false,
            "isExternal" : false,
            "isConst" : false,
            "transformerFlags" : 0}, _namedArguments );
        this.flags = 0;
        super.Member(name,reference);
        this.kind = kind;
        this.function = function;
        this.fileUri = fileUri;
        ((t)=>(!!t)?t.parent:null)(this.function) = this;
        this.isAbstract = isAbstract;
        this.isStatic = isStatic;
        this.isExternal = isExternal;
        this.isConst = isConst;
        this.transformerFlags = transformerFlags;
    }
    private static __$FlagStatic : number;
    static get FlagStatic() : number { 
        if (this.__$FlagStatic===undefined) {
            this.__$FlagStatic = 1 << 0;
        }
        return this.__$FlagStatic;
    }

    private static __$FlagAbstract : number;
    static get FlagAbstract() : number { 
        if (this.__$FlagAbstract===undefined) {
            this.__$FlagAbstract = 1 << 1;
        }
        return this.__$FlagAbstract;
    }

    private static __$FlagExternal : number;
    static get FlagExternal() : number { 
        if (this.__$FlagExternal===undefined) {
            this.__$FlagExternal = 1 << 2;
        }
        return this.__$FlagExternal;
    }

    private static __$FlagConst : number;
    static get FlagConst() : number { 
        if (this.__$FlagConst===undefined) {
            this.__$FlagConst = 1 << 3;
        }
        return this.__$FlagConst;
    }

    get isStatic() : boolean {
        return this.flags & Procedure.FlagStatic != 0;
    }
    get isAbstract() : boolean {
        return this.flags & Procedure.FlagAbstract != 0;
    }
    get isExternal() : boolean {
        return this.flags & Procedure.FlagExternal != 0;
    }
    get isConst() : boolean {
        return this.flags & Procedure.FlagConst != 0;
    }
    set isStatic(value : boolean) {
        this.flags = value ? (this.flags | Procedure.FlagStatic) : (this.flags & ~Procedure.FlagStatic);
    }
    set isAbstract(value : boolean) {
        this.flags = value ? (this.flags | Procedure.FlagAbstract) : (this.flags & ~Procedure.FlagAbstract);
    }
    set isExternal(value : boolean) {
        this.flags = value ? (this.flags | Procedure.FlagExternal) : (this.flags & ~Procedure.FlagExternal);
    }
    set isConst(value : boolean) {
        this.flags = value ? (this.flags | Procedure.FlagConst) : (this.flags & ~Procedure.FlagConst);
    }
    get isInstanceMember() : boolean {
        return !this.isStatic;
    }
    get isGetter() : boolean {
        return op(Op.EQUALS,this.kind,ProcedureKind.Getter);
    }
    get isSetter() : boolean {
        return op(Op.EQUALS,this.kind,ProcedureKind.Setter);
    }
    get isAccessor() : boolean {
        return this.isGetter || this.isSetter;
    }
    get hasGetter() : boolean {
        return this.kind != ProcedureKind.Setter;
    }
    get hasSetter() : boolean {
        return op(Op.EQUALS,this.kind,ProcedureKind.Setter);
    }
    get isFactory() : boolean {
        return op(Op.EQUALS,this.kind,ProcedureKind.Factory);
    }
    accept(v : lib3.MemberVisitor<any>) {
        return v.visitProcedure(this);
    }
    acceptReference(v : lib3.MemberReferenceVisitor<any>) {
        return v.visitProcedureReference(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        visitList(this.annotations,v);
        ((_586_)=>(!!_586_)?_586_.accept(v):null)(this.name);
        ((_587_)=>(!!_587_)?_587_.accept(v):null)(this.function);
    }
    transformChildren(v : lib3.Transformer) {
        transformList(this.annotations,v,this);
        if (this.function != null) {
            this.function = this.function.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.function) = this;
        }
    }
    get getterType() : DartType {
        return this.isGetter ? this.function.returnType : this.function.functionType;
    }
    get setterType() : DartType {
        return this.isSetter ? this.function.positionalParameters[0].type : new BottomType();
    }
    _getLocationInEnclosingFile(offset : number) : Location {
        return this.enclosingProgram.getLocation(this.fileUri,offset);
    }
}

export namespace Constructor {
    export type Constructors = Member.Constructors | 'Constructor';
    export type Interface = Omit<Constructor, Constructors>;
}
@DartClass
export class Constructor extends Member {
    flags : number;

    function : FunctionNode;

    initializers : core.DartList<Initializer>;

    constructor(function : FunctionNode,_namedArguments? : {name? : Name,isConst? : boolean,isExternal? : boolean,isSyntheticDefault? : boolean,initializers? : core.DartList<Initializer>,transformerFlags? : number,reference? : Reference}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Constructor(function : FunctionNode,_namedArguments? : {name? : Name,isConst? : boolean,isExternal? : boolean,isSyntheticDefault? : boolean,initializers? : core.DartList<Initializer>,transformerFlags? : number,reference? : Reference}) {
        let {name,isConst,isExternal,isSyntheticDefault,initializers,transformerFlags,reference} = Object.assign({
            "isConst" : false,
            "isExternal" : false,
            "isSyntheticDefault" : false,
            "transformerFlags" : 0}, _namedArguments );
        this.flags = 0;
        this.initializers = (initializers || new core.DartList.literal<Initializer>());
        super.Member(name,reference);
        this.function = function;
        ((t)=>(!!t)?t.parent:null)(this.function) = this;
        setParents(this.initializers,this);
        this.isConst = isConst;
        this.isExternal = isExternal;
        this.isSyntheticDefault = isSyntheticDefault;
        this.transformerFlags = transformerFlags;
    }
    private static __$FlagConst : number;
    static get FlagConst() : number { 
        if (this.__$FlagConst===undefined) {
            this.__$FlagConst = 1 << 0;
        }
        return this.__$FlagConst;
    }

    private static __$FlagExternal : number;
    static get FlagExternal() : number { 
        if (this.__$FlagExternal===undefined) {
            this.__$FlagExternal = 1 << 1;
        }
        return this.__$FlagExternal;
    }

    private static __$FlagSyntheticDefault : number;
    static get FlagSyntheticDefault() : number { 
        if (this.__$FlagSyntheticDefault===undefined) {
            this.__$FlagSyntheticDefault = 1 << 2;
        }
        return this.__$FlagSyntheticDefault;
    }

    get isConst() : boolean {
        return this.flags & Constructor.FlagConst != 0;
    }
    get isExternal() : boolean {
        return this.flags & Constructor.FlagExternal != 0;
    }
    get isSyntheticDefault() : boolean {
        return this.flags & Constructor.FlagSyntheticDefault != 0;
    }
    set isConst(value : boolean) {
        this.flags = value ? (this.flags | Constructor.FlagConst) : (this.flags & ~Constructor.FlagConst);
    }
    set isExternal(value : boolean) {
        this.flags = value ? (this.flags | Constructor.FlagExternal) : (this.flags & ~Constructor.FlagExternal);
    }
    set isSyntheticDefault(value : boolean) {
        this.flags = value ? (this.flags | Constructor.FlagSyntheticDefault) : (this.flags & ~Constructor.FlagSyntheticDefault);
    }
    get isInstanceMember() : boolean {
        return false;
    }
    get hasGetter() : boolean {
        return false;
    }
    get hasSetter() : boolean {
        return false;
    }
    accept(v : lib3.MemberVisitor<any>) {
        return v.visitConstructor(this);
    }
    acceptReference(v : lib3.MemberReferenceVisitor<any>) {
        return v.visitConstructorReference(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        visitList(this.annotations,v);
        ((_584_)=>(!!_584_)?_584_.accept(v):null)(this.name);
        ((_585_)=>(!!_585_)?_585_.accept(v):null)(this.function);
        visitList(this.initializers,v);
    }
    transformChildren(v : lib3.Transformer) {
        transformList(this.annotations,v,this);
        if (this.function != null) {
            this.function = this.function.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.function) = this;
        }
        transformList(this.initializers,v,this);
    }
    get getterType() : DartType {
        return new BottomType();
    }
    get setterType() : DartType {
        return new BottomType();
    }
}

export namespace Field {
    export type Constructors = Member.Constructors | 'Field';
    export type Interface = Omit<Field, Constructors>;
}
@DartClass
export class Field extends Member {
    type : DartType;

    flags : number;

    initializer : Expression;

    fileUri : string;

    constructor(name : Name,_namedArguments? : {type? : DartType,initializer? : Expression,isFinal? : boolean,isConst? : boolean,isStatic? : boolean,hasImplicitGetter? : boolean,hasImplicitSetter? : boolean,transformerFlags? : number,fileUri? : string,reference? : Reference}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Field(name : Name,_namedArguments? : {type? : DartType,initializer? : Expression,isFinal? : boolean,isConst? : boolean,isStatic? : boolean,hasImplicitGetter? : boolean,hasImplicitSetter? : boolean,transformerFlags? : number,fileUri? : string,reference? : Reference}) {
        let {type,initializer,isFinal,isConst,isStatic,hasImplicitGetter,hasImplicitSetter,transformerFlags,fileUri,reference} = Object.assign({
            "type" : new DynamicType(),
            "isFinal" : false,
            "isConst" : false,
            "isStatic" : false,
            "transformerFlags" : 0}, _namedArguments );
        this.flags = 0;
        super.Member(name,reference);
        this.type = type;
        this.initializer = initializer;
        this.fileUri = fileUri;
        /* TODO (AssertStatementImpl) : assert (type != null); */;
        ((t)=>(!!t)?t.parent:null)(this.initializer) = this;
        this.isFinal = isFinal;
        this.isConst = isConst;
        this.isStatic = isStatic;
        this.hasImplicitGetter = (hasImplicitGetter || !isStatic);
        this.hasImplicitSetter = (hasImplicitSetter || (!isStatic && !isFinal));
        this.transformerFlags = transformerFlags;
    }
    private static __$FlagFinal : number;
    static get FlagFinal() : number { 
        if (this.__$FlagFinal===undefined) {
            this.__$FlagFinal = 1 << 0;
        }
        return this.__$FlagFinal;
    }

    private static __$FlagConst : number;
    static get FlagConst() : number { 
        if (this.__$FlagConst===undefined) {
            this.__$FlagConst = 1 << 1;
        }
        return this.__$FlagConst;
    }

    private static __$FlagStatic : number;
    static get FlagStatic() : number { 
        if (this.__$FlagStatic===undefined) {
            this.__$FlagStatic = 1 << 2;
        }
        return this.__$FlagStatic;
    }

    private static __$FlagHasImplicitGetter : number;
    static get FlagHasImplicitGetter() : number { 
        if (this.__$FlagHasImplicitGetter===undefined) {
            this.__$FlagHasImplicitGetter = 1 << 3;
        }
        return this.__$FlagHasImplicitGetter;
    }

    private static __$FlagHasImplicitSetter : number;
    static get FlagHasImplicitSetter() : number { 
        if (this.__$FlagHasImplicitSetter===undefined) {
            this.__$FlagHasImplicitSetter = 1 << 4;
        }
        return this.__$FlagHasImplicitSetter;
    }

    get isFinal() : boolean {
        return this.flags & Field.FlagFinal != 0;
    }
    get isConst() : boolean {
        return this.flags & Field.FlagConst != 0;
    }
    get isStatic() : boolean {
        return this.flags & Field.FlagStatic != 0;
    }
    get hasImplicitGetter() : boolean {
        return this.flags & Field.FlagHasImplicitGetter != 0;
    }
    get hasImplicitSetter() : boolean {
        return this.flags & Field.FlagHasImplicitSetter != 0;
    }
    set isFinal(value : boolean) {
        this.flags = value ? (this.flags | Field.FlagFinal) : (this.flags & ~Field.FlagFinal);
    }
    set isConst(value : boolean) {
        this.flags = value ? (this.flags | Field.FlagConst) : (this.flags & ~Field.FlagConst);
    }
    set isStatic(value : boolean) {
        this.flags = value ? (this.flags | Field.FlagStatic) : (this.flags & ~Field.FlagStatic);
    }
    set hasImplicitGetter(value : boolean) {
        this.flags = value ? (this.flags | Field.FlagHasImplicitGetter) : (this.flags & ~Field.FlagHasImplicitGetter);
    }
    set hasImplicitSetter(value : boolean) {
        this.flags = value ? (this.flags | Field.FlagHasImplicitSetter) : (this.flags & ~Field.FlagHasImplicitSetter);
    }
    get isMutable() : boolean {
        return this.flags & (Field.FlagFinal | Field.FlagConst) == 0;
    }
    get isInstanceMember() : boolean {
        return !this.isStatic;
    }
    get hasGetter() : boolean {
        return true;
    }
    get hasSetter() : boolean {
        return this.isMutable;
    }
    get isExternal() : boolean {
        return false;
    }
    set isExternal(value : boolean) {
        if (value) throw 'Fields cannot be external';
    }
    accept(v : lib3.MemberVisitor<any>) {
        return v.visitField(this);
    }
    acceptReference(v : lib3.MemberReferenceVisitor<any>) {
        return v.visitFieldReference(this);
    }
    visitChildren(v : lib3.Visitor<any>) {
        visitList(this.annotations,v);
        ((_581_)=>(!!_581_)?_581_.accept(v):null)(this.type);
        ((_582_)=>(!!_582_)?_582_.accept(v):null)(this.name);
        ((_583_)=>(!!_583_)?_583_.accept(v):null)(this.initializer);
    }
    transformChildren(v : lib3.Transformer) {
        this.type = v.visitDartType(this.type);
        transformList(this.annotations,v,this);
        if (this.initializer != null) {
            this.initializer = this.initializer.accept(v);
            ((t)=>(!!t)?t.parent:null)(this.initializer) = this;
        }
    }
    get getterType() : DartType {
        return this.type;
    }
    get setterType() : DartType {
        return this.isMutable ? this.type : new BottomType();
    }
    _getLocationInEnclosingFile(offset : number) : Location {
        return this.enclosingProgram.getLocation(this.fileUri,offset);
    }
}

export namespace NullLiteral {
    export type Constructors = BasicLiteral.Constructors | 'NullLiteral';
    export type Interface = Omit<NullLiteral, Constructors>;
}
@DartClass
export class NullLiteral extends BasicLiteral {
    get value() : core.DartObject {
        return null;
    }
    getStaticType(types : lib8.TypeEnvironment) : DartType {
        return new BottomType();
    }
    accept(v : lib3.ExpressionVisitor<any>) {
        return v.visitNullLiteral(this);
    }
    accept1(v : lib3.ExpressionVisitor1<any,any>,arg : any) {
        return v.visitNullLiteral(this,arg);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NullLiteral() {
    }
}

export class properties {
    private static __$_temporaryHashCodeTable : core.DartMap<TypeParameter,number>;
    static get _temporaryHashCodeTable() : core.DartMap<TypeParameter,number> { 
        if (this.__$_temporaryHashCodeTable===undefined) {
            this.__$_temporaryHashCodeTable = new core.DartMap.literal([
            ]);
        }
        return this.__$_temporaryHashCodeTable;
    }
    static set _temporaryHashCodeTable(__$value : core.DartMap<TypeParameter,number>)  { 
        this.__$_temporaryHashCodeTable = __$value;
    }

}
