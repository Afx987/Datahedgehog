/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/fasta/expressions.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./visitor";

export namespace ConstructorName {
    export type Constructors = 'ConstructorName';
    export type Interface = Omit<ConstructorName, Constructors>;
}
@DartClass
export class ConstructorName {
    type : TypeRef;

    name : string;

    constructor(type : TypeRef,name : string) {
    }
    @defaultConstructor
    ConstructorName(type : TypeRef,name : string) {
        this.type = type;
        this.name = name;
    }
    toString() {
        return `ctor: ${this.type}.${this.name}`;
    }
}

export namespace Expression {
    export type Constructors = 'Expression';
    export type Interface = Omit<Expression, Constructors>;
}
@DartClass
export class Expression {
    get isAs() : boolean {
        return false;
    }
    get isBinary() : boolean {
        return false;
    }
    get isConditional() : boolean {
        return false;
    }
    get isIdentical() : boolean {
        return false;
    }
    get isIs() : boolean {
        return false;
    }
    get isLoad() : boolean {
        return false;
    }
    get isOpaqueOp() : boolean {
        return false;
    }
    get isRef() : boolean {
        return false;
    }
    get isUnary() : boolean {
        return false;
    }
    @Abstract
    accept(v : lib3.Visitor){ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Expression() {
    }
}

export namespace KeyValuePair {
    export type Constructors = 'KeyValuePair';
    export type Interface = Omit<KeyValuePair, Constructors>;
}
@DartClass
export class KeyValuePair {
    key : Expression;

    value : Expression;

    constructor(key : Expression,value : Expression) {
    }
    @defaultConstructor
    KeyValuePair(key : Expression,value : Expression) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `(p: ${this.key}, ${this.value})`;
    }
}

export namespace NamedArg {
    export type Constructors = 'NamedArg';
    export type Interface = Omit<NamedArg, Constructors>;
}
@DartClass
export class NamedArg {
    name : string;

    value : Expression;

    constructor(name : string,value : Expression) {
    }
    @defaultConstructor
    NamedArg(name : string,value : Expression) {
        this.name = name;
        this.value = value;
    }
}

export namespace TypeRef {
    export type Constructors = 'TypeRef';
    export type Interface = Omit<TypeRef, Constructors>;
}
@DartClass
export class TypeRef {
    name : Ref;

    typeArguments : core.DartList<TypeRef>;

    constructor(name : Ref,typeArguments : core.DartList<TypeRef>) {
    }
    @defaultConstructor
    TypeRef(name : Ref,typeArguments : core.DartList<TypeRef>) {
        this.name = name;
        this.typeArguments = typeArguments;
    }
    toString() {
        let args = this.typeArguments == null ? "" : `<${this.typeArguments.join(', ')}>`;
        return `t:${this.name}${args}`;
    }
}

export namespace As {
    export type Constructors = Expression.Constructors | 'As';
    export type Interface = Omit<As, Constructors>;
}
@DartClass
export class As extends Expression {
    exp : Expression;

    type : TypeRef;

    constructor(exp : Expression,type : TypeRef) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    As(exp : Expression,type : TypeRef) {
        this.exp = exp;
        this.type = type;
    }
    get isAs() : boolean {
        return true;
    }
    accept(v : any) {
        return v.visitAs(this);
    }
    toString() {
        return `${this.exp} as ${this.type}`;
    }
}

export namespace Binary {
    export type Constructors = Expression.Constructors | 'Binary';
    export type Interface = Omit<Binary, Constructors>;
}
@DartClass
export class Binary extends Expression {
    left : Expression;

    right : Expression;

    operator : number;

    constructor(left : Expression,right : Expression,operator : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Binary(left : Expression,right : Expression,operator : number) {
        this.left = left;
        this.right = right;
        this.operator = operator;
    }
    get isBinary() : boolean {
        return true;
    }
    accept(v : any) {
        return v.visitBinary(this);
    }
    toString() {
        return `${this.left} _ ${this.right}`;
    }
}

export namespace BoolLiteral {
    export type Constructors = Expression.Constructors | 'BoolLiteral';
    export type Interface = Omit<BoolLiteral, Constructors>;
}
@DartClass
export class BoolLiteral extends Expression {
    value : boolean;

    constructor(value : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BoolLiteral(value : boolean) {
        this.value = value;
    }
    accept(v : any) {
        return v.visitBool(this);
    }
    toString() {
        return `${this.value}`;
    }
}

export namespace Conditional {
    export type Constructors = Expression.Constructors | 'Conditional';
    export type Interface = Omit<Conditional, Constructors>;
}
@DartClass
export class Conditional extends Expression {
    test : Expression;

    trueBranch : Expression;

    falseBranch : Expression;

    constructor(test : Expression,trueBranch : Expression,falseBranch : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Conditional(test : Expression,trueBranch : Expression,falseBranch : Expression) {
        this.test = test;
        this.trueBranch = trueBranch;
        this.falseBranch = falseBranch;
    }
    get isConditional() : boolean {
        return true;
    }
    accept(v : any) {
        return v.visitConditional(this);
    }
    toString() {
        return `${this.test} ? ${this.trueBranch} : ${this.falseBranch}`;
    }
}

export namespace ConstCreation {
    export type Constructors = Expression.Constructors | 'ConstCreation';
    export type Interface = Omit<ConstCreation, Constructors>;
}
@DartClass
export class ConstCreation extends Expression {
    constructor : ConstructorName;

    positionalArgs : core.DartList<Expression>;

    namedArgs : core.DartList<NamedArg>;

    constructor(constructor : ConstructorName,positionalArgs : core.DartList<Expression>,namedArgs : core.DartList<NamedArg>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstCreation(constructor : ConstructorName,positionalArgs : core.DartList<Expression>,namedArgs : core.DartList<NamedArg>) {
        this.constructor = constructor;
        this.positionalArgs = positionalArgs;
        this.namedArgs = namedArgs;
    }
    accept(v : any) {
        return v.visitConstCreation(this);
    }
}

export namespace DoubleLiteral {
    export type Constructors = Expression.Constructors | 'DoubleLiteral';
    export type Interface = Omit<DoubleLiteral, Constructors>;
}
@DartClass
export class DoubleLiteral extends Expression {
    value : double;

    constructor(value : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DoubleLiteral(value : double) {
        this.value = value;
    }
    accept(v : any) {
        return v.visitDouble(this);
    }
    toString() {
        return `${this.value}`;
    }
}

export namespace Identical {
    export type Constructors = Expression.Constructors | 'Identical';
    export type Interface = Omit<Identical, Constructors>;
}
@DartClass
export class Identical extends Expression {
    left : Expression;

    right : Expression;

    constructor(left : Expression,right : Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Identical(left : Expression,right : Expression) {
        this.left = left;
        this.right = right;
    }
    get isIdentical() : boolean {
        return true;
    }
    accept(v : any) {
        return v.visitIdentical(this);
    }
    toString() {
        return `identical(${this.left}, ${this.right})`;
    }
}

export namespace IntLiteral {
    export type Constructors = Expression.Constructors | 'IntLiteral';
    export type Interface = Omit<IntLiteral, Constructors>;
}
@DartClass
export class IntLiteral extends Expression {
    value : number;

    constructor(value : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IntLiteral(value : number) {
        this.value = value;
    }
    accept(v : any) {
        return v.visitInt(this);
    }
    toString() {
        return `${this.value}`;
    }
}

export namespace Invalid {
    export type Constructors = Expression.Constructors | 'Invalid';
    export type Interface = Omit<Invalid, Constructors>;
}
@DartClass
export class Invalid extends Expression {
    hint : string;

    constructor(_namedArguments? : {hint? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Invalid(_namedArguments? : {hint? : string}) {
        let {hint} = Object.assign({
        }, _namedArguments );
        this.hint = hint;
    }
    accept(v : any) {
        return v.visitInvalid(this);
    }
    toString() {
        return `(err: ${this.hint})`;
    }
}

export namespace Is {
    export type Constructors = Expression.Constructors | 'Is';
    export type Interface = Omit<Is, Constructors>;
}
@DartClass
export class Is extends Expression {
    exp : Expression;

    type : TypeRef;

    constructor(exp : Expression,type : TypeRef) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Is(exp : Expression,type : TypeRef) {
        this.exp = exp;
        this.type = type;
    }
    get isIs() : boolean {
        return true;
    }
    accept(v : any) {
        return v.visitIs(this);
    }
    toString() {
        return `${this.exp} is ${this.type}`;
    }
}

export namespace ListLiteral {
    export type Constructors = Expression.Constructors | 'ListLiteral';
    export type Interface = Omit<ListLiteral, Constructors>;
}
@DartClass
export class ListLiteral extends Expression {
    elementType : TypeRef;

    values : core.DartList<Expression>;

    isConst : boolean;

    constructor(elementType : TypeRef,values : core.DartList<Expression>,isConst : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListLiteral(elementType : TypeRef,values : core.DartList<Expression>,isConst : boolean) {
        this.elementType = elementType;
        this.values = values;
        this.isConst = isConst;
    }
    accept(v : any) {
        return v.visitList(this);
    }
    toString() {
        return `(list<${this.elementType}>${this.values})`;
    }
}

export namespace Load {
    export type Constructors = Expression.Constructors | 'Load';
    export type Interface = Omit<Load, Constructors>;
}
@DartClass
export class Load extends Expression {
    left : Expression;

    name : string;

    constructor(left : Expression,name : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Load(left : Expression,name : string) {
        this.left = left;
        this.name = name;
    }
    get isLoad() : boolean {
        return true;
    }
    accept(v : any) {
        return v.visitLoad(this);
    }
    toString() {
        return `${this.left}.${this.name}`;
    }
}

export namespace MapLiteral {
    export type Constructors = Expression.Constructors | 'MapLiteral';
    export type Interface = Omit<MapLiteral, Constructors>;
}
@DartClass
export class MapLiteral extends Expression {
    types : core.DartList<TypeRef>;

    values : core.DartList<KeyValuePair>;

    isConst : boolean;

    constructor(types : core.DartList<TypeRef>,values : core.DartList<KeyValuePair>,isConst : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MapLiteral(types : core.DartList<TypeRef>,values : core.DartList<KeyValuePair>,isConst : boolean) {
        this.types = types;
        this.values = values;
        this.isConst = isConst;
        /* TODO (AssertStatementImpl) : assert (types.length <= 2); */;
    }
    accept(v : any) {
        return v.visitMap(this);
    }
    toString() {
        return `(map<${this.types.map((t : any) =>  {
            return `${t}`;
        }).join(", ")}>: ${this.values})`;
    }
}

export namespace NullLiteral {
    export type Constructors = Expression.Constructors | 'NullLiteral';
    export type Interface = Omit<NullLiteral, Constructors>;
}
@DartClass
export class NullLiteral extends Expression {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NullLiteral() {
    }
    accept(v : any) {
        return v.visitNull(this);
    }
    toString() {
        return 'null';
    }
}

export namespace Opaque {
    export type Constructors = Expression.Constructors | 'Opaque';
    export type Interface = Omit<Opaque, Constructors>;
}
@DartClass
export class Opaque extends Expression {
    type : TypeRef;

    hint : string;

    constructor(_namedArguments? : {type? : TypeRef,hint? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Opaque(_namedArguments? : {type? : TypeRef,hint? : string}) {
        let {type,hint} = Object.assign({
        }, _namedArguments );
        this.type = type;
        this.hint = hint;
    }
    accept(v : any) {
        return v.visitOpaque(this);
    }
    toString() {
        let sb = new core.DartStringBuffer();
        sb.write('(o:');
        if (this.hint != null) sb.write(` ${this.hint}`);
        if (this.type != null) sb.write(` ${this.type}`);
        return `${sb})`;
    }
}

export namespace OpaqueOp {
    export type Constructors = Expression.Constructors | 'OpaqueOp';
    export type Interface = Omit<OpaqueOp, Constructors>;
}
@DartClass
export class OpaqueOp extends Expression {
    exp : Expression;

    hint : string;

    constructor(exp : Expression,_namedArguments? : {hint? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OpaqueOp(exp : Expression,_namedArguments? : {hint? : string}) {
        let {hint} = Object.assign({
        }, _namedArguments );
        this.exp = exp;
        this.hint = hint;
    }
    get isOpaqueOp() : boolean {
        return true;
    }
    accept(v : any) {
        return v.visitOpaqueOp(this);
    }
}

export namespace Ref {
    export type Constructors = Expression.Constructors | 'Ref';
    export type Interface = Omit<Ref, Constructors>;
}
@DartClass
export class Ref extends Expression {
    name : string;

    prefix : Ref;

    constructor(name : string,prefix? : Ref) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Ref(name : string,prefix? : Ref) {
        this.name = name;
        this.prefix = prefix;
        /* TODO (AssertStatementImpl) : assert (prefixDepth <= 2); */;
    }
    get isRef() : boolean {
        return true;
    }
    get prefixDepth() : number {
        return op(Op.EQUALS,this.prefix,null) ? 0 : this.prefix.prefixDepth;
    }
    accept(v : any) {
        return v.visitRef(this);
    }
    toString() {
        return `r:${op(Op.EQUALS,this.prefix,null) ? "" : `${this.prefix}.`}${this.name}`;
    }
}

export namespace StringLiteral {
    export type Constructors = Expression.Constructors | 'StringLiteral';
    export type Interface = Omit<StringLiteral, Constructors>;
}
@DartClass
export class StringLiteral extends Expression {
    value : string;

    constructor(value : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringLiteral(value : string) {
        this.value = value;
    }
    accept(v : any) {
        return v.visitString(this);
    }
    toString() {
        return `${this.value}`;
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
    accept(v : any) {
        return v.visitSymbol(this);
    }
    toString() {
        return `#${this.value}`;
    }
}

export namespace Unary {
    export type Constructors = Expression.Constructors | 'Unary';
    export type Interface = Omit<Unary, Constructors>;
}
@DartClass
export class Unary extends Expression {
    exp : Expression;

    operator : number;

    constructor(exp : Expression,operator : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Unary(exp : Expression,operator : number) {
        this.exp = exp;
        this.operator = operator;
    }
    get isUnary() : boolean {
        return true;
    }
    accept(v : any) {
        return v.visitUnary(this);
    }
    toString() {
        return `_ ${this.exp}`;
    }
}

export class properties {
}
