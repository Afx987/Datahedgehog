/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/element/member.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Member {
    export type Constructors = 'Member';
    export type Interface = Omit<Member, Constructors>;
}
@DartClass
@Implements(any)
export class Member implements any.Interface {
    _baseElement : any;

    _definingType : any;

    constructor(_baseElement : any,_definingType : any) {
    }
    @defaultConstructor
    Member(_baseElement : any,_definingType : any) {
        this._baseElement = _baseElement;
        this._definingType = _definingType;
    }
    get baseElement() : any {
        return this._baseElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get context() : any {
        return this._baseElement.context;
    }
    get definingType() : any {
        return this._definingType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        return this._baseElement.displayName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : string {
        return this._baseElement.documentationComment;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get id() : number {
        return this._baseElement.id;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDeprecated() : boolean {
        return this._baseElement.isDeprecated;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFactory() : boolean {
        return this._baseElement.isFactory;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isJS() : boolean {
        return this._baseElement.isJS;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOverride() : boolean {
        return this._baseElement.isOverride;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isPrivate() : boolean {
        return this._baseElement.isPrivate;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isProtected() : boolean {
        return this._baseElement.isProtected;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isPublic() : boolean {
        return this._baseElement.isPublic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isRequired() : boolean {
        return this._baseElement.isRequired;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return this._baseElement.isSynthetic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return this._baseElement.kind;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get library() : any {
        return this._baseElement.library;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get librarySource() : any {
        return this._baseElement.librarySource;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get location() : any {
        return this._baseElement.location;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get metadata() : core.DartList<any> {
        return this._baseElement.metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._baseElement.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameLength() : number {
        return this._baseElement.nameLength;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        return this._baseElement.nameOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get source() : any {
        return this._baseElement.source;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unit() : any {
        return this._baseElement.unit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDocumentationComment() : string {
        return this.documentationComment;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this._baseElement.computeNode();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getAncestor(predicate : any) : any {
        return this.baseElement.getAncestor(predicate);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getExtendedDisplayName(shortName : string) : string {
        return this._baseElement.getExtendedDisplayName(shortName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isAccessibleIn(library : any) : boolean {
        return this._baseElement.isAccessibleIn(library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    safelyVisitChild(child : any,visitor : any) : void {
        if (child != null) {
            child.accept(visitor);
        }
    }
    safelyVisitChildren(children : core.DartList<any>,visitor : any) : void {
        if (children != null) {
            for(let child of children) {
                child.accept(visitor);
            }
        }
    }
    substituteFor(type : any) : any {
        if (op(Op.EQUALS,type,null)) {
            return null;
        }
        let argumentTypes : core.DartList<any> = this._definingType.typeArguments;
        let parameterTypes : core.DartList<any> = TypeParameterTypeImpl.getTypes(this._definingType.typeParameters);
        return type.substitute2(argumentTypes,parameterTypes);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
    }
}

export namespace ExecutableMember {
    export type Constructors = Member.Constructors | 'ExecutableMember';
    export type Interface = Omit<ExecutableMember, Constructors>;
}
@DartClass
@Implements(any)
export class ExecutableMember extends Member implements any.Interface {
    _type : any;

    constructor(baseElement : any,definingType : any,type? : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExecutableMember(baseElement : any,definingType : any,type? : any) {
        this._type = type;
        super.Member(baseElement,definingType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get baseElement() : any {
        return super.baseElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get functions() : core.DartList<any> {
        throw new core.UnsupportedError('functions');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasImplicitReturnType() : boolean {
        return this.baseElement.hasImplicitReturnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAbstract() : boolean {
        return this.baseElement.isAbstract;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAsynchronous() : boolean {
        return this.baseElement.isAsynchronous;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isExternal() : boolean {
        return this.baseElement.isExternal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isGenerator() : boolean {
        return this.baseElement.isGenerator;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOperator() : boolean {
        return this.baseElement.isOperator;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        return this.baseElement.isStatic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynchronous() : boolean {
        return this.baseElement.isSynchronous;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get labels() : core.DartList<any> {
        return this.baseElement.labels;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get localVariables() : core.DartList<any> {
        throw new core.UnsupportedError('localVariables');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        return this.type.parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return this.type.returnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this._type = ( this._type ) || ( this.baseElement.type.substitute2(this.definingType.typeArguments,TypeParameterTypeImpl.getTypes(this.definingType.typeParameters)) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<any> {
        return this.baseElement.typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        this.safelyVisitChildren(this.baseElement.functions,visitor);
        this.safelyVisitChildren(this.labels,visitor);
        this.safelyVisitChildren(this.baseElement.localVariables,visitor);
        this.safelyVisitChildren(this.parameters,visitor);
    }
}

export namespace TypeParameterMember {
    export type Constructors = Member.Constructors | 'TypeParameterMember';
    export type Interface = Omit<TypeParameterMember, Constructors>;
}
@DartClass
@Implements(any)
export class TypeParameterMember extends Member implements any.Interface {
    _bound : any;

    _type : any;

    constructor(baseElement : any,definingType : any,_bound : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeParameterMember(baseElement : any,definingType : any,_bound : any) {
        super.Member(baseElement,definingType);
        this._bound = _bound;
        this._type = new bare.createInstance(any,null,this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get baseElement() : any {
        return super.baseElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bound() : any {
        return this._bound;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return this.baseElement.enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.baseElement.hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this._type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        return is(other, TypeParameterMember) && op(Op.EQUALS,this.baseElement,other.baseElement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitTypeParameterElement(this);
    }
    static from(formals : core.DartList<any>,definingType : any) : core.DartList<any> {
        let argumentTypes : core.DartList<any> = definingType.typeArguments;
        if (argumentTypes.isEmpty) {
            return formals;
        }
        let parameterTypes : core.DartList<any> = TypeParameterTypeImpl.getTypes(definingType.typeParameters);
        let results = formals.toList({
            growable : false});
        for(let i : number = 0; i < results.length; i++){
            let formal = results[i];
            let bound : any = ((t)=>(!!t)?t.bound:null)(formal);
            if (bound != null) {
                bound = bound.substitute2(argumentTypes,parameterTypes);
                results[i] = new TypeParameterMember(formal,definingType,bound);
            }
        }
        let formalTypes : core.DartList<any> = TypeParameterTypeImpl.getTypes(formals);
        for(let formal of results) {
            if (is(formal, TypeParameterMember)) {
                formal._bound = formal.bound.substitute2(TypeParameterTypeImpl.getTypes(results),formalTypes);
            }
        }
        return results;
    }
}

export namespace VariableMember {
    export type Constructors = Member.Constructors | 'VariableMember' | '_';
    export type Interface = Omit<VariableMember, Constructors>;
}
@DartClass
@Implements(any)
export class VariableMember extends Member implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    type : any;

    constructor(baseElement : any,definingType : any,type? : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableMember(baseElement : any,definingType : any,type? : any) {
        this.type = (type || baseElement.type.substitute2(definingType.typeArguments,TypeParameterTypeImpl.getTypes(definingType.typeParameters)));
        super.Member(baseElement,definingType);
    }
    @namedConstructor
    _(baseElement : any,definingType : any,type : any) {
        this.VariableMember(baseElement,definingType,type);
    }
    static _ : new(baseElement : any,definingType : any,type : any) => VariableMember;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get baseElement() : any {
        return super.baseElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constantValue() : any {
        return this.baseElement.constantValue;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasImplicitType() : boolean {
        return this.baseElement.hasImplicitType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get initializer() : any {
        throw new core.UnsupportedError('initializer');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        return this.baseElement.isConst;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFinal() : boolean {
        return this.baseElement.isFinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    get isPotentiallyMutatedInClosure() : boolean {
        return this.baseElement.isPotentiallyMutatedInClosure;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    get isPotentiallyMutatedInScope() : boolean {
        return this.baseElement.isPotentiallyMutatedInScope;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        return this.baseElement.isStatic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeConstantValue() : any {
        return this.baseElement.computeConstantValue();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_248_)=>(!!_248_)?_248_.accept(visitor):null)(this.baseElement.initializer);
    }
}

export namespace ConstructorMember {
    export type Constructors = ExecutableMember.Constructors | 'ConstructorMember';
    export type Interface = Omit<ConstructorMember, Constructors>;
}
@DartClass
@Implements(any)
export class ConstructorMember extends ExecutableMember implements any.Interface {
    constructor(baseElement : any,definingType : any,type? : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorMember(baseElement : any,definingType : any,type? : any) {
        super.ExecutableMember(baseElement,definingType,type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get baseElement() : any {
        return super.baseElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get definingType() : any {
        return super.definingType as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return this.baseElement.enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        return this.baseElement.isConst;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDefaultConstructor() : boolean {
        return this.baseElement.isDefaultConstructor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFactory() : boolean {
        return this.baseElement.isFactory;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameEnd() : number {
        return this.baseElement.nameEnd;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get periodOffset() : number {
        return this.baseElement.periodOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get redirectedConstructor() : any {
        return ConstructorMember.from(this.baseElement.redirectedConstructor,this.definingType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitConstructorElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.baseElement.computeNode();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let baseElement : any = this.baseElement;
        let parameters : core.DartList<any> = this.parameters;
        let type : any = this.type;
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write(baseElement.enclosingElement.displayName);
        let name : string = this.displayName;
        if (name != null && !new core.DartString(name).isEmpty) {
            buffer.write(".");
            buffer.write(name);
        }
        buffer.write("(");
        let parameterCount : number = parameters.length;
        for(let i : number = 0; i < parameterCount; i++){
            if (i > 0) {
                buffer.write(", ");
            }
            buffer.write(parameters[i]);
        }
        buffer.write(")");
        if (type != null) {
            buffer.write(ElementImpl.RIGHT_ARROW);
            buffer.write(type.returnType);
        }
        return buffer.toString();
    }
    static from(constructor : any,definingType : any) : any {
        if (op(Op.EQUALS,constructor,null) || op(Op.EQUALS,definingType.typeArguments.length,0)) {
            return constructor;
        }
        let baseType : any = constructor.type;
        if (op(Op.EQUALS,baseType,null)) {
            return constructor;
        }
        let argumentTypes : core.DartList<any> = definingType.typeArguments;
        let parameterTypes : core.DartList<any> = definingType.element.type.typeArguments;
        let substitutedType : any = baseType.substitute2(argumentTypes,parameterTypes);
        return new ConstructorMember(constructor,definingType,substitutedType);
    }
}

export namespace FieldMember {
    export type Constructors = VariableMember.Constructors | 'FieldMember';
    export type Interface = Omit<FieldMember, Constructors>;
}
@DartClass
@Implements(any)
export class FieldMember extends VariableMember implements any.Interface {
    constructor(baseElement : any,definingType : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldMember(baseElement : any,definingType : any) {
        super.VariableMember(baseElement,definingType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get baseElement() : any {
        return super.baseElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return this.baseElement.enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get getter() : any {
        return PropertyAccessorMember.from(this.baseElement.getter,this.definingType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isEnumConstant() : boolean {
        return this.baseElement.isEnumConstant;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isVirtual() : boolean {
        return this.baseElement.isVirtual;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get propagatedType() : any {
        return this.substituteFor(this.baseElement.propagatedType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get setter() : any {
        return PropertyAccessorMember.from(this.baseElement.setter,this.definingType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitFieldElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.baseElement.computeNode();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.type} ${this.displayName}`;
    }
    static from(field : any,definingType : any) : any {
        if (op(Op.EQUALS,field,null) || definingType.typeArguments.isEmpty) {
            return field;
        }
        return new FieldMember(field,definingType);
    }
}

export namespace FunctionMember {
    export type Constructors = ExecutableMember.Constructors | 'FunctionMember';
    export type Interface = Omit<FunctionMember, Constructors>;
}
@DartClass
@Implements(any)
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class FunctionMember extends ExecutableMember implements any.Interface {
    constructor(baseElement : any,type? : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionMember(baseElement : any,type? : any) {
        super.ExecutableMember(baseElement,null,type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get baseElement() : any {
        return super.baseElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return this.baseElement.enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isEntryPoint() : boolean {
        return this.baseElement.isEntryPoint;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get visibleRange() : any {
        return this.baseElement.visibleRange;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitFunctionElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.baseElement.computeNode();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write(this.baseElement.displayName);
        (this.type as any).appendTo(buffer,new core.DartSet.identity());
        return buffer.toString();
    }
    static from(method : any,definingType : any) : any {
        if (op(Op.EQUALS,method,null) || op(Op.EQUALS,definingType.typeArguments.length,0)) {
            return method;
        }
        let baseType : any = method.type;
        let argumentTypes : core.DartList<any> = definingType.typeArguments;
        let parameterTypes : core.DartList<any> = TypeParameterTypeImpl.getTypes(definingType.typeParameters);
        let substitutedType : any = baseType.substitute2(argumentTypes,parameterTypes);
        return new MethodMember(method,definingType,substitutedType);
    }
}

export namespace MethodMember {
    export type Constructors = ExecutableMember.Constructors | 'MethodMember';
    export type Interface = Omit<MethodMember, Constructors>;
}
@DartClass
@Implements(any)
export class MethodMember extends ExecutableMember implements any.Interface {
    constructor(baseElement : any,definingType : any,type? : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MethodMember(baseElement : any,definingType : any,type? : any) {
        super.ExecutableMember(baseElement,definingType,type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get baseElement() : any {
        return super.baseElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return this.baseElement.enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitMethodElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.baseElement.computeNode();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getReifiedType(objectType : any) : any {
        return this.substituteFor(this.baseElement.getReifiedType(objectType));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let baseElement : any = this.baseElement;
        let parameters : core.DartList<any> = this.parameters;
        let type : any = this.type;
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write(baseElement.enclosingElement.displayName);
        buffer.write(".");
        buffer.write(baseElement.displayName);
        buffer.write("(");
        let parameterCount : number = parameters.length;
        for(let i : number = 0; i < parameterCount; i++){
            if (i > 0) {
                buffer.write(", ");
            }
            buffer.write(parameters[i]);
        }
        buffer.write(")");
        if (type != null) {
            buffer.write(ElementImpl.RIGHT_ARROW);
            buffer.write(type.returnType);
        }
        return buffer.toString();
    }
    static from(method : any,definingType : any) : any {
        if (op(Op.EQUALS,method,null) || op(Op.EQUALS,definingType.typeArguments.length,0)) {
            return method;
        }
        let baseType : any = method.type;
        let argumentTypes : core.DartList<any> = definingType.typeArguments;
        let parameterTypes : core.DartList<any> = definingType.element.type.typeArguments;
        let substitutedType : any = baseType.substitute2(argumentTypes,parameterTypes);
        return new MethodMember(method,definingType,substitutedType);
    }
}

export namespace ParameterMember {
    export type Constructors = VariableMember.Constructors | 'ParameterMember';
    export type Interface = Omit<ParameterMember, Constructors>;
}
@DartClass
@Implements(any)
@With(any)
export class ParameterMember extends VariableMember implements any.Interface,any.Interface {
    constructor(baseElement : any,definingType : any,type? : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ParameterMember(baseElement : any,definingType : any,type? : any) {
        super._(baseElement,definingType,type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get baseElement() : any {
        return super.baseElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get defaultValueCode() : string {
        return this.baseElement.defaultValueCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return this.baseElement.enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.baseElement.hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isCovariant() : boolean {
        return this.baseElement.isCovariant;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isInitializingFormal() : boolean {
        return this.baseElement.isInitializingFormal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameterKind() : any {
        return this.baseElement.parameterKind;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        let type : any = this.type;
        if (is(type, any)) {
            return type.parameters;
        }
        return ParameterElement.EMPTY_LIST;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<any> {
        return this.baseElement.typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get visibleRange() : any {
        return this.baseElement.visibleRange;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitParameterElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.baseElement.computeNode();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getAncestor(predicate : any) : any {
        let element : any = this.baseElement.getAncestor(predicate);
        let definingType : any = this.definingType;
        if (is(definingType, any)) {
            if (is(element, any)) {
                return ConstructorMember.from(element,definingType) as any;
            }else if (is(element, any)) {
                return MethodMember.from(element,definingType) as any;
            }else if (is(element, any)) {
                return PropertyAccessorMember.from(element,definingType) as any;
            }
        }
        return element as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let baseElement : any = this.baseElement;
        let left : string = "";
        let right : string = "";
        while (true){
            if (op(Op.EQUALS,baseElement.parameterKind,ParameterKind.NAMED)) {
                left = "{";
                right = "}";
            }else if (op(Op.EQUALS,baseElement.parameterKind,ParameterKind.POSITIONAL)) {
                left = "[";
                right = "]";
            }else if (op(Op.EQUALS,baseElement.parameterKind,ParameterKind.REQUIRED)) {
            }
            break;
        }
        return `${left}${this.type} ${baseElement.displayName}${right}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        this.safelyVisitChildren(this.parameters,visitor);
    }
}

export namespace PropertyAccessorMember {
    export type Constructors = ExecutableMember.Constructors | 'PropertyAccessorMember';
    export type Interface = Omit<PropertyAccessorMember, Constructors>;
}
@DartClass
@Implements(any)
export class PropertyAccessorMember extends ExecutableMember implements any.Interface {
    constructor(baseElement : any,definingType : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PropertyAccessorMember(baseElement : any,definingType : any) {
        super.ExecutableMember(baseElement,definingType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get baseElement() : any {
        return super.baseElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get correspondingGetter() : any {
        return PropertyAccessorMember.from(this.baseElement.correspondingGetter,this.definingType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get correspondingSetter() : any {
        return PropertyAccessorMember.from(this.baseElement.correspondingSetter,this.definingType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get definingType() : any {
        return super.definingType as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return this.baseElement.enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isGetter() : boolean {
        return this.baseElement.isGetter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSetter() : boolean {
        return this.baseElement.isSetter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get variable() : any {
        let variable : any = this.baseElement.variable;
        if (is(variable, any)) {
            return FieldMember.from(variable,this.definingType);
        }
        return variable;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitPropertyAccessorElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let baseElement : any = this.baseElement;
        let parameters : core.DartList<any> = this.parameters;
        let type : any = this.type;
        let builder : core.DartStringBuffer = new core.DartStringBuffer();
        if (this.isGetter) {
            builder.write("get ");
        }else {
            builder.write("set ");
        }
        builder.write(baseElement.enclosingElement.displayName);
        builder.write(".");
        builder.write(baseElement.displayName);
        builder.write("(");
        let parameterCount : number = parameters.length;
        for(let i : number = 0; i < parameterCount; i++){
            if (i > 0) {
                builder.write(", ");
            }
            builder.write(parameters[i]);
        }
        builder.write(")");
        if (type != null) {
            builder.write(ElementImpl.RIGHT_ARROW);
            builder.write(type.returnType);
        }
        return builder.toString();
    }
    static from(accessor : any,definingType : any) : any {
        if (op(Op.EQUALS,accessor,null) || definingType.typeArguments.isEmpty) {
            return accessor;
        }
        return new PropertyAccessorMember(accessor,definingType);
    }
}

export namespace FieldFormalParameterMember {
    export type Constructors = ParameterMember.Constructors | 'FieldFormalParameterMember';
    export type Interface = Omit<FieldFormalParameterMember, Constructors>;
}
@DartClass
@Implements(any)
export class FieldFormalParameterMember extends ParameterMember implements any.Interface {
    constructor(baseElement : any,definingType : any,type? : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldFormalParameterMember(baseElement : any,definingType : any,type? : any) {
        super.ParameterMember(baseElement,definingType,type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get field() : any {
        let field : any = (this.baseElement as any).field;
        if (is(field, any)) {
            return FieldMember.from(field,this.substituteFor(field.enclosingElement.type));
        }
        return field;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isCovariant() : boolean {
        return this.baseElement.isCovariant;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitFieldFormalParameterElement(this);
    }
}

export class properties {
}
