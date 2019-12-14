/** Library asset:datahedgehog_monitor/lib/lib/mirrors/mirrors.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var currentMirrorSystem : () => MirrorSystem = () : MirrorSystem =>  {
};
export var reflect : (reflectee : core.DartObject) => InstanceMirror = (reflectee : core.DartObject) : InstanceMirror =>  {
};
export var reflectClass : (key : core.Type) => ClassMirror = (key : core.Type) : ClassMirror =>  {
};
export var reflectType : (key : core.Type,typeArguments? : core.DartList<core.Type>) => TypeMirror = (key : core.Type,typeArguments? : core.DartList<core.Type>) : TypeMirror =>  {
};
export namespace MirrorSystem {
    export type Constructors = 'MirrorSystem';
    export type Interface = Omit<MirrorSystem, Constructors>;
}
@DartClass
export class MirrorSystem {
    @AbstractProperty
    get libraries() : core.DartMap<lib3.Uri,LibraryMirror>{ throw 'abstract'}
    findLibrary(libraryName : core.Symbol) : LibraryMirror {
    }
    @AbstractProperty
    get isolate() : IsolateMirror{ throw 'abstract'}
    @AbstractProperty
    get dynamicType() : TypeMirror{ throw 'abstract'}
    @AbstractProperty
    get voidType() : TypeMirror{ throw 'abstract'}
    static getName(symbol : core.Symbol) : string {
    }
    static getSymbol(name : string,library? : LibraryMirror) : core.Symbol {
    }
    constructor() {
    }
    @defaultConstructor
    MirrorSystem() {
    }
}

export namespace Mirror {
    export type Constructors = 'Mirror';
    export type Interface = Omit<Mirror, Constructors>;
}
@DartClass
export class Mirror {
    constructor() {
    }
    @defaultConstructor
    Mirror() {
    }
}

export namespace IsolateMirror {
    export type Constructors = 'IsolateMirror';
    export type Interface = Omit<IsolateMirror, Constructors>;
}
@DartClass
@Implements(Mirror)
export class IsolateMirror implements Mirror.Interface {
    @AbstractProperty
    get debugName() : string{ throw 'abstract'}
    @AbstractProperty
    get isCurrent() : boolean{ throw 'abstract'}
    @AbstractProperty
    get rootLibrary() : LibraryMirror{ throw 'abstract'}
    @Abstract
    [OperatorMethods.EQUALS](other : any) : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    IsolateMirror() {
    }
}

export namespace DeclarationMirror {
    export type Constructors = 'DeclarationMirror';
    export type Interface = Omit<DeclarationMirror, Constructors>;
}
@DartClass
@Implements(Mirror)
export class DeclarationMirror implements Mirror.Interface {
    @AbstractProperty
    get simpleName() : core.Symbol{ throw 'abstract'}
    @AbstractProperty
    get qualifiedName() : core.Symbol{ throw 'abstract'}
    @AbstractProperty
    get owner() : DeclarationMirror{ throw 'abstract'}
    @AbstractProperty
    get isPrivate() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isTopLevel() : boolean{ throw 'abstract'}
    @AbstractProperty
    get location() : SourceLocation{ throw 'abstract'}
    @AbstractProperty
    get metadata() : core.DartList<InstanceMirror>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    DeclarationMirror() {
    }
}

export namespace ObjectMirror {
    export type Constructors = 'ObjectMirror';
    export type Interface = Omit<ObjectMirror, Constructors>;
}
@DartClass
@Implements(Mirror)
export class ObjectMirror implements Mirror.Interface {
    @Abstract
    invoke(memberName : core.Symbol,positionalArguments : core.DartList<any>,namedArguments? : core.DartMap<core.Symbol,any>) : InstanceMirror{ throw 'abstract'}
    @Abstract
    getField(fieldName : core.Symbol) : InstanceMirror{ throw 'abstract'}
    @Abstract
    setField(fieldName : core.Symbol,value : core.DartObject) : InstanceMirror{ throw 'abstract'}
    @Abstract
    delegate(invocation : core.Invocation){ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ObjectMirror() {
    }
}

export namespace InstanceMirror {
    export type Constructors = 'InstanceMirror';
    export type Interface = Omit<InstanceMirror, Constructors>;
}
@DartClass
@Implements(ObjectMirror)
export class InstanceMirror implements ObjectMirror.Interface {
    @AbstractProperty
    get type() : ClassMirror{ throw 'abstract'}
    @AbstractProperty
    get hasReflectee() : boolean{ throw 'abstract'}
    @AbstractProperty
    get reflectee(){ throw 'abstract'}
    @Abstract
    [OperatorMethods.EQUALS](other : any) : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    InstanceMirror() {
    }
}

export namespace ClosureMirror {
    export type Constructors = 'ClosureMirror';
    export type Interface = Omit<ClosureMirror, Constructors>;
}
@DartClass
@Implements(InstanceMirror)
export class ClosureMirror implements InstanceMirror.Interface {
    @AbstractProperty
    get function() : MethodMirror{ throw 'abstract'}
    @Abstract
    apply(positionalArguments : core.DartList<any>,namedArguments? : core.DartMap<core.Symbol,any>) : InstanceMirror{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ClosureMirror() {
    }
}

export namespace LibraryMirror {
    export type Constructors = 'LibraryMirror';
    export type Interface = Omit<LibraryMirror, Constructors>;
}
@DartClass
@Implements(DeclarationMirror,ObjectMirror)
export class LibraryMirror implements DeclarationMirror.Interface,ObjectMirror.Interface {
    @AbstractProperty
    get uri() : lib3.Uri{ throw 'abstract'}
    @AbstractProperty
    get declarations() : core.DartMap<core.Symbol,DeclarationMirror>{ throw 'abstract'}
    @Abstract
    [OperatorMethods.EQUALS](other : any) : boolean{ throw 'abstract'}
    @AbstractProperty
    get libraryDependencies() : core.DartList<LibraryDependencyMirror>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    LibraryMirror() {
    }
}

export namespace LibraryDependencyMirror {
    export type Constructors = 'LibraryDependencyMirror';
    export type Interface = Omit<LibraryDependencyMirror, Constructors>;
}
@DartClass
@Implements(Mirror)
export class LibraryDependencyMirror implements Mirror.Interface {
    @AbstractProperty
    get isImport() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isExport() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isDeferred() : boolean{ throw 'abstract'}
    @AbstractProperty
    get sourceLibrary() : LibraryMirror{ throw 'abstract'}
    @AbstractProperty
    get targetLibrary() : LibraryMirror{ throw 'abstract'}
    @AbstractProperty
    get prefix() : core.Symbol{ throw 'abstract'}
    @AbstractProperty
    get combinators() : core.DartList<CombinatorMirror>{ throw 'abstract'}
    @AbstractProperty
    get location() : SourceLocation{ throw 'abstract'}
    @AbstractProperty
    get metadata() : core.DartList<InstanceMirror>{ throw 'abstract'}
    @Abstract
    loadLibrary() : async.Future<LibraryMirror>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    LibraryDependencyMirror() {
    }
}

export namespace CombinatorMirror {
    export type Constructors = 'CombinatorMirror';
    export type Interface = Omit<CombinatorMirror, Constructors>;
}
@DartClass
@Implements(Mirror)
export class CombinatorMirror implements Mirror.Interface {
    @AbstractProperty
    get identifiers() : core.DartList<core.Symbol>{ throw 'abstract'}
    @AbstractProperty
    get isShow() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isHide() : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    CombinatorMirror() {
    }
}

export namespace TypeMirror {
    export type Constructors = 'TypeMirror';
    export type Interface = Omit<TypeMirror, Constructors>;
}
@DartClass
@Implements(DeclarationMirror)
export class TypeMirror implements DeclarationMirror.Interface {
    @AbstractProperty
    get hasReflectedType() : boolean{ throw 'abstract'}
    @AbstractProperty
    get reflectedType() : core.Type{ throw 'abstract'}
    @AbstractProperty
    get typeVariables() : core.DartList<TypeVariableMirror>{ throw 'abstract'}
    @AbstractProperty
    get typeArguments() : core.DartList<TypeMirror>{ throw 'abstract'}
    @AbstractProperty
    get isOriginalDeclaration() : boolean{ throw 'abstract'}
    @AbstractProperty
    get originalDeclaration() : TypeMirror{ throw 'abstract'}
    @Abstract
    isSubtypeOf(other : TypeMirror) : boolean{ throw 'abstract'}
    @Abstract
    isAssignableTo(other : TypeMirror) : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    TypeMirror() {
    }
}

export namespace ClassMirror {
    export type Constructors = 'ClassMirror';
    export type Interface = Omit<ClassMirror, Constructors>;
}
@DartClass
@Implements(TypeMirror,ObjectMirror)
export class ClassMirror implements TypeMirror.Interface,ObjectMirror.Interface {
    @AbstractProperty
    get superclass() : ClassMirror{ throw 'abstract'}
    @AbstractProperty
    get superinterfaces() : core.DartList<ClassMirror>{ throw 'abstract'}
    @AbstractProperty
    get isAbstract() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isEnum() : boolean{ throw 'abstract'}
    @AbstractProperty
    get declarations() : core.DartMap<core.Symbol,DeclarationMirror>{ throw 'abstract'}
    @AbstractProperty
    get instanceMembers() : core.DartMap<core.Symbol,MethodMirror>{ throw 'abstract'}
    @AbstractProperty
    get staticMembers() : core.DartMap<core.Symbol,MethodMirror>{ throw 'abstract'}
    @AbstractProperty
    get mixin() : ClassMirror{ throw 'abstract'}
    @Abstract
    newInstance(constructorName : core.Symbol,positionalArguments : core.DartList<any>,namedArguments? : core.DartMap<core.Symbol,any>) : InstanceMirror{ throw 'abstract'}
    @Abstract
    [OperatorMethods.EQUALS](other : any) : boolean{ throw 'abstract'}
    @Abstract
    isSubclassOf(other : ClassMirror) : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ClassMirror() {
    }
}

export namespace FunctionTypeMirror {
    export type Constructors = 'FunctionTypeMirror';
    export type Interface = Omit<FunctionTypeMirror, Constructors>;
}
@DartClass
@Implements(ClassMirror)
export class FunctionTypeMirror implements ClassMirror.Interface {
    @AbstractProperty
    get returnType() : TypeMirror{ throw 'abstract'}
    @AbstractProperty
    get parameters() : core.DartList<ParameterMirror>{ throw 'abstract'}
    @AbstractProperty
    get callMethod() : MethodMirror{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    FunctionTypeMirror() {
    }
}

export namespace TypedefMirror {
    export type Constructors = 'TypedefMirror';
    export type Interface = Omit<TypedefMirror, Constructors>;
}
@DartClass
@Implements(TypeMirror)
export class TypedefMirror implements TypeMirror.Interface {
    @AbstractProperty
    get referent() : FunctionTypeMirror{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    TypedefMirror() {
    }
}

export namespace MethodMirror {
    export type Constructors = 'MethodMirror';
    export type Interface = Omit<MethodMirror, Constructors>;
}
@DartClass
@Implements(DeclarationMirror)
export class MethodMirror implements DeclarationMirror.Interface {
    @AbstractProperty
    get returnType() : TypeMirror{ throw 'abstract'}
    @AbstractProperty
    get source() : string{ throw 'abstract'}
    @AbstractProperty
    get parameters() : core.DartList<ParameterMirror>{ throw 'abstract'}
    @AbstractProperty
    get isStatic() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isAbstract() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isSynthetic() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isRegularMethod() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isOperator() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isGetter() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isSetter() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isConstructor() : boolean{ throw 'abstract'}
    @AbstractProperty
    get constructorName() : core.Symbol{ throw 'abstract'}
    @AbstractProperty
    get isConstConstructor() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isGenerativeConstructor() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isRedirectingConstructor() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isFactoryConstructor() : boolean{ throw 'abstract'}
    @Abstract
    [OperatorMethods.EQUALS](other : any) : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    MethodMirror() {
    }
}

export namespace VariableMirror {
    export type Constructors = 'VariableMirror';
    export type Interface = Omit<VariableMirror, Constructors>;
}
@DartClass
@Implements(DeclarationMirror)
export class VariableMirror implements DeclarationMirror.Interface {
    @AbstractProperty
    get type() : TypeMirror{ throw 'abstract'}
    @AbstractProperty
    get isStatic() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isFinal() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isConst() : boolean{ throw 'abstract'}
    @Abstract
    [OperatorMethods.EQUALS](other : any) : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    VariableMirror() {
    }
}

export namespace ParameterMirror {
    export type Constructors = 'ParameterMirror';
    export type Interface = Omit<ParameterMirror, Constructors>;
}
@DartClass
@Implements(VariableMirror)
export class ParameterMirror implements VariableMirror.Interface {
    @AbstractProperty
    get type() : TypeMirror{ throw 'abstract'}
    @AbstractProperty
    get isOptional() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isNamed() : boolean{ throw 'abstract'}
    @AbstractProperty
    get hasDefaultValue() : boolean{ throw 'abstract'}
    @AbstractProperty
    get defaultValue() : InstanceMirror{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ParameterMirror() {
    }
}

export namespace SourceLocation {
    export type Constructors = 'SourceLocation';
    export type Interface = Omit<SourceLocation, Constructors>;
}
@DartClass
export class SourceLocation {
    @AbstractProperty
    get line() : number{ throw 'abstract'}
    @AbstractProperty
    get column() : number{ throw 'abstract'}
    @AbstractProperty
    get sourceUri() : lib3.Uri{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    SourceLocation() {
    }
}

export namespace Comment {
    export type Constructors = 'Comment';
    export type Interface = Omit<Comment, Constructors>;
}
@DartClass
export class Comment {
    text : string;

    trimmedText : string;

    isDocComment : boolean;

    constructor(text : string,trimmedText : string,isDocComment : boolean) {
    }
    @defaultConstructor
    Comment(text : string,trimmedText : string,isDocComment : boolean) {
        this.text = text;
        this.trimmedText = trimmedText;
        this.isDocComment = isDocComment;
    }
}

export namespace MirrorsUsed {
    export type Constructors = 'MirrorsUsed';
    export type Interface = Omit<MirrorsUsed, Constructors>;
}
@DartClass
export class MirrorsUsed {
    symbols;

    targets;

    metaTargets;

    override;

    constructor(_namedArguments? : {symbols? : any,targets? : any,metaTargets? : any,override? : any}) {
    }
    @defaultConstructor
    MirrorsUsed(_namedArguments? : {symbols? : any,targets? : any,metaTargets? : any,override? : any}) {
        let {symbols,targets,metaTargets,override} = Object.assign({
        }, _namedArguments );
        this.symbols = symbols;
        this.targets = targets;
        this.metaTargets = metaTargets;
        this.override = override;
    }
}

export namespace TypeVariableMirror {
    export type Constructors = TypeMirror.Constructors | 'TypeVariableMirror';
    export type Interface = Omit<TypeVariableMirror, Constructors>;
}
@DartClass
export class TypeVariableMirror extends TypeMirror {
    @AbstractProperty
    get upperBound() : TypeMirror{ throw 'abstract'}
    @AbstractProperty
    get isStatic() : boolean{ throw 'abstract'}
    @Abstract
    [OperatorMethods.EQUALS](other : any) : boolean{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeVariableMirror() {
    }
}

export class properties {
}
