/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/fasta_accessors.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./../scope";
import * as lib5 from "./../builder/prefix_builder";
import * as lib6 from "./frontend_accessors";
import * as lib7 from "./../errors";
import * as lib8 from "./../names";
import * as lib9 from "./../builder/type_declaration_builder";
import * as lib10 from "./kernel_class_builder";
import * as lib11 from "./../builder/builder";

export var isFieldOrGetter : (member : any) => boolean = (member : any) : boolean =>  {
    return is(member, any) || (is(member, any) && member.isGetter);
};
export var buildMethodInvocation : (astFactory : any,receiver : any,name : any,arguments : any,offset : number,_namedArguments? : {isNullAware? : boolean}) => any = (astFactory : any,receiver : any,name : any,arguments : any,offset : number,_namedArguments? : {isNullAware? : boolean}) : any =>  {
    let {isNullAware} = Object.assign({
        "isNullAware" : false}, _namedArguments );
    if (isNullAware) {
        let variable : any = new bare.createInstance(any,null,receiver);
        return lib6.makeLet(variable,new bare.createInstance(any,null,lib6.buildIsNull(astFactory,new bare.createInstance(any,null,variable)),new bare.createInstance(any,null),((_) : any =>  {
            {
                _.fileOffset = offset;
                return _;
            }
        })(astFactory.methodInvocation(new bare.createInstance(any,null,variable),name,arguments)),new bare.createInstance(any,null)));
    }else {
        return ((_) : any =>  {
            {
                _.fileOffset = offset;
                return _;
            }
        })(astFactory.methodInvocation(receiver,name,arguments));
    }
};
export namespace BuilderHelper {
    export type Constructors = 'BuilderHelper';
    export type Interface = Omit<BuilderHelper, Constructors>;
}
@DartClass
export class BuilderHelper {
    @AbstractProperty
    get uri() : lib3.Uri{ throw 'abstract'}
    @AbstractProperty
    get typePromoter() : any{ throw 'abstract'}
    @AbstractProperty
    get functionNestingLevel() : number{ throw 'abstract'}
    @AbstractProperty
    get astFactory() : any{ throw 'abstract'}
    @Abstract
    lookupConstructor(name : any,_namedArguments? : {isSuper? : boolean}) : any{ throw 'abstract'}
    @Abstract
    toSuperMethodInvocation(node : any) : any{ throw 'abstract'}
    @Abstract
    toValue(node : any) : any{ throw 'abstract'}
    @Abstract
    lookupSuperMember(name : any,_namedArguments? : {isSetter? : boolean}) : any{ throw 'abstract'}
    @Abstract
    scopeLookup(scope : lib4.Scope,name : string,token : any,_namedArguments? : {isQualified? : boolean,prefix? : lib5.PrefixBuilder}){ throw 'abstract'}
    @Abstract
    finishSend(receiver : core.DartObject,arguments : any,offset : number){ throw 'abstract'}
    @Abstract
    buildCompileTimeError(error : any,offset? : number) : any{ throw 'abstract'}
    @Abstract
    buildInvalidIntializer(expression : any,offset? : number) : any{ throw 'abstract'}
    @Abstract
    buildSuperInitializer(constructor : any,arguments : any,offset? : number) : any{ throw 'abstract'}
    @Abstract
    buildRedirectingInitializer(constructor : any,arguments : any,charOffset? : number) : any{ throw 'abstract'}
    @Abstract
    buildStaticInvocation(target : any,arguments : any) : any{ throw 'abstract'}
    @Abstract
    buildProblemExpression(builder : lib4.ProblemBuilder,offset : number) : any{ throw 'abstract'}
    @Abstract
    throwNoSuchMethodError(name : string,arguments : any,offset : number,_namedArguments? : {isSuper? : boolean,isGetter? : any,isSetter? : any}) : any{ throw 'abstract'}
    @Abstract
    checkArguments(function : any,arguments : any,typeParameters : core.DartList<any>) : boolean{ throw 'abstract'}
    @Abstract
    makeStaticGet(readTarget : any,token : any) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    BuilderHelper() {
    }
}

export namespace FastaAccessor {
    export type Constructors = 'FastaAccessor';
    export type Interface = Omit<FastaAccessor, Constructors>;
}
@DartClass
@Implements(lib6.Accessor)
export class FastaAccessor implements lib6.Accessor.Interface {
    @AbstractProperty
    get helper() : BuilderHelper{ throw 'abstract'}
    @AbstractProperty
    get plainNameForRead() : string{ throw 'abstract'}
    get uri() : lib3.Uri {
        return this.helper.uri;
    }
    get plainNameForWrite() : string {
        return this.plainNameForRead;
    }
    get isInitializer() : boolean {
        return false;
    }
    buildForEffect() : any {
        return this.buildSimpleRead();
    }
    buildFieldInitializer(initializers : core.DartMap<string,any>) : any {
        let offset : number = offsetForToken(this.token);
        return this.helper.buildInvalidIntializer(this.helper.buildCompileTimeError(`Can't use ${this.plainNameForRead} here.`,offset),offset);
    }
    makeInvalidRead() : any {
        return this.buildThrowNoSuchMethodError(new bare.createInstance(any,null),{
            isGetter : true});
    }
    makeInvalidWrite(value : any) : any {
        return this.buildThrowNoSuchMethodError(this.helper.astFactory.arguments(new core.DartList.literal<any>(value)),{
            isSetter : true});
    }
    @Abstract
    doInvocation(offset : number,arguments : any){ throw 'abstract'}
    buildPropertyAccess(send : IncompleteSend,isNullAware : boolean) {
        if (is(send, SendAccessor)) {
            return buildMethodInvocation(this.helper.astFactory,this.buildSimpleRead(),send.name,send.arguments,offsetForToken(send.token),{
                isNullAware : isNullAware});
        }else {
            return PropertyAccessor.make(this.helper,send.token,this.buildSimpleRead(),send.name,null,null,isNullAware);
        }
    }
    buildThrowNoSuchMethodError(arguments : any,_namedArguments? : {isSuper? : boolean,isGetter? : boolean,isSetter? : boolean,name? : string,offset? : number}) {
        let {isSuper,isGetter,isSetter,name,offset} = Object.assign({
            "isSuper" : false,
            "isGetter" : false,
            "isSetter" : false}, _namedArguments );
        return this.helper.throwNoSuchMethodError((name || this.plainNameForWrite),arguments,(offset || offsetForToken(this.token)),{
            isGetter : isGetter,isSetter : isSetter,isSuper : isSuper});
    }
    get isThisPropertyAccessor() : boolean {
        return false;
    }
    constructor() {
    }
    @defaultConstructor
    FastaAccessor() {
    }
}

export namespace ErrorAccessor {
    export type Constructors = 'ErrorAccessor';
    export type Interface = Omit<ErrorAccessor, Constructors>;
}
@DartClass
@Implements(FastaAccessor)
export class ErrorAccessor implements FastaAccessor.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get builtBinary() : any {
        return lib7.internalError("Unsupported operation.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set builtBinary(expression : any) {
        lib7.internalError("Unsupported operation.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get builtGetter() : any {
        return lib7.internalError("Unsupported operation.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set builtGetter(expression : any) {
        lib7.internalError("Unsupported operation.");
    }
    @Abstract
    buildError(arguments : any,_namedArguments? : {isGetter? : boolean,isSetter? : boolean,offset? : number}) : any{ throw 'abstract'}
    get name() : any {
        return lib7.internalError("Unsupported operation.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get plainNameForRead() : string {
        return this.name.name;
    }
    withReceiver(receiver : core.DartObject,_namedArguments? : {isNullAware? : boolean}) {
        let {isNullAware} = Object.assign({
        }, _namedArguments );
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildFieldInitializer(initializers : core.DartMap<string,any>) : any {
        return this.helper.buildInvalidIntializer(this.buildError(new bare.createInstance(any,null),{
            isSetter : true}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    doInvocation(offset : number,arguments : any) {
        return this.buildError(arguments,{
            offset : offset});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildPropertyAccess(send : IncompleteSend,isNullAware : boolean) {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildThrowNoSuchMethodError(arguments : any,_namedArguments? : {isSuper? : boolean,isGetter? : any,isSetter? : any,name? : string,offset? : number}) {
        let {isSuper,isGetter,isSetter,name,offset} = Object.assign({
            "isSuper" : false,
            "isGetter" : false,
            "isSetter" : false}, _namedArguments );
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildAssignment(value : any,_namedArguments? : {voidContext? : boolean}) : any {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        return this.buildError(this.helper.astFactory.arguments(new core.DartList.literal<any>(value)),{
            isSetter : true});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildCompoundAssignment(binaryOperator : any,value : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        return this.buildError(this.helper.astFactory.arguments(new core.DartList.literal<any>(value)),{
            isGetter : true});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildPrefixIncrement(binaryOperator : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        return this.buildError(this.helper.astFactory.arguments(new core.DartList.literal<any>(new bare.createInstance(any,null,1))),{
            isGetter : true});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildPostfixIncrement(binaryOperator : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        return this.buildError(this.helper.astFactory.arguments(new core.DartList.literal<any>(new bare.createInstance(any,null,1))),{
            isGetter : true});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildNullAwareAssignment(value : any,type : any,_namedArguments? : {voidContext? : boolean}) : any {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        return this.buildError(this.helper.astFactory.arguments(new core.DartList.literal<any>(value)),{
            isSetter : true});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildSimpleRead() : any {
        return this.buildError(new bare.createInstance(any,null),{
            isGetter : true});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    makeInvalidRead() : any {
        return this.buildError(new bare.createInstance(any,null),{
            isGetter : true});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    makeInvalidWrite(value : any) : any {
        return this.buildError(this.helper.astFactory.arguments(new core.DartList.literal<any>(value)),{
            isSetter : true});
    }
    constructor() {
    }
    @defaultConstructor
    ErrorAccessor() {
    }
}

export namespace IndexAccessor {
    export type Constructors = lib6.IndexAccessor.Constructors | 'internal';
    export type Interface = Omit<IndexAccessor, Constructors>;
}
@DartClass
@With(FastaAccessor)
export class IndexAccessor extends lib6.IndexAccessor implements FastaAccessor.Interface {
    @Abstract
    buildForEffect() : any {
        throw 'from mixin';
    }
    @Abstract
    buildFieldInitializer(initializers : core.DartMap<string,any>) : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidRead() : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidWrite(value : any) : any {
        throw 'from mixin';
    }
    @Abstract
    buildPropertyAccess(send : IncompleteSend,isNullAware : boolean) : any {
        throw 'from mixin';
    }
    @Abstract
    buildThrowNoSuchMethodError(arguments : any,_namedArguments? : {isSuper? : boolean,isGetter? : boolean,isSetter? : boolean,name? : string,offset? : number}) : any {
        let {isSuper,isGetter,isSetter,name,offset} = Object.assign({
            "isSuper" : false,
            "isGetter" : false,
            "isSetter" : false}, _namedArguments );
        throw 'from mixin';
    }
    helper : BuilderHelper;

    @namedConstructor
    internal(helper : BuilderHelper,token : any,receiver : any,index : any,getter : any,setter : any) {
        super.internal(helper,receiver,index,getter,setter,token);
        this.helper = helper;
    }
    static internal : new(helper : BuilderHelper,token : any,receiver : any,index : any,getter : any,setter : any) => IndexAccessor;

    get plainNameForRead() : string {
        return "[]";
    }
    get plainNameForWrite() : string {
        return "[]=";
    }
    doInvocation(offset : number,arguments : any) : any {
        return buildMethodInvocation(this.helper.astFactory,this.buildSimpleRead(),lib8.properties.callName,arguments,offset);
    }
    toString() {
        return "IndexAccessor()";
    }
    static make(helper : BuilderHelper,token : any,receiver : any,index : any,getter : any,setter : any) : FastaAccessor {
        if (is(receiver, any)) {
            return new ThisIndexAccessor(helper,token,index,getter,setter);
        }else {
            return new IndexAccessor.internal(helper,token,receiver,index,getter,setter);
        }
    }
}

export namespace PropertyAccessor {
    export type Constructors = lib6.PropertyAccessor.Constructors | 'internal';
    export type Interface = Omit<PropertyAccessor, Constructors>;
}
@DartClass
@With(FastaAccessor)
export class PropertyAccessor extends lib6.PropertyAccessor implements FastaAccessor.Interface {
    @Abstract
    buildForEffect() : any {
        throw 'from mixin';
    }
    @Abstract
    buildFieldInitializer(initializers : core.DartMap<string,any>) : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidRead() : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidWrite(value : any) : any {
        throw 'from mixin';
    }
    @Abstract
    buildPropertyAccess(send : IncompleteSend,isNullAware : boolean) : any {
        throw 'from mixin';
    }
    @Abstract
    buildThrowNoSuchMethodError(arguments : any,_namedArguments? : {isSuper? : boolean,isGetter? : boolean,isSetter? : boolean,name? : string,offset? : number}) : any {
        let {isSuper,isGetter,isSetter,name,offset} = Object.assign({
            "isSuper" : false,
            "isGetter" : false,
            "isSetter" : false}, _namedArguments );
        throw 'from mixin';
    }
    helper : BuilderHelper;

    @namedConstructor
    internal(helper : BuilderHelper,token : any,receiver : any,name : any,getter : any,setter : any) {
        super.internal(helper,receiver,name,getter,setter,token);
        this.helper = helper;
    }
    static internal : new(helper : BuilderHelper,token : any,receiver : any,name : any,getter : any,setter : any) => PropertyAccessor;

    get plainNameForRead() : string {
        return this.name.name;
    }
    get isThisPropertyAccessor() : boolean {
        return is(this.receiver, any);
    }
    doInvocation(offset : number,arguments : any) : any {
        return buildMethodInvocation(this.helper.astFactory,this.receiver,this.name,arguments,offset);
    }
    toString() {
        return "PropertyAccessor()";
    }
    static make(helper : BuilderHelper,token : any,receiver : any,name : any,getter : any,setter : any,isNullAware : boolean) : FastaAccessor {
        if (is(receiver, any)) {
            return new ThisPropertyAccessor(helper,token,name,getter,setter);
        }else {
            return isNullAware ? new NullAwarePropertyAccessor(helper,token,receiver,name,getter,setter,null) : new PropertyAccessor.internal(helper,token,receiver,name,getter,setter);
        }
    }
}

export namespace StaticAccessor {
    export type Constructors = lib6.StaticAccessor.Constructors | 'StaticAccessor';
    export type Interface = Omit<StaticAccessor, Constructors>;
}
@DartClass
@With(FastaAccessor)
export class StaticAccessor extends lib6.StaticAccessor implements FastaAccessor.Interface {
    @Abstract
    buildForEffect() : any {
        throw 'from mixin';
    }
    @Abstract
    buildFieldInitializer(initializers : core.DartMap<string,any>) : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidRead() : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidWrite(value : any) : any {
        throw 'from mixin';
    }
    @Abstract
    buildPropertyAccess(send : IncompleteSend,isNullAware : boolean) : any {
        throw 'from mixin';
    }
    @Abstract
    buildThrowNoSuchMethodError(arguments : any,_namedArguments? : {isSuper? : boolean,isGetter? : boolean,isSetter? : boolean,name? : string,offset? : number}) : any {
        let {isSuper,isGetter,isSetter,name,offset} = Object.assign({
            "isSuper" : false,
            "isGetter" : false,
            "isSetter" : false}, _namedArguments );
        throw 'from mixin';
    }
    constructor(helper : BuilderHelper,token : any,readTarget : any,writeTarget : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StaticAccessor(helper : BuilderHelper,token : any,readTarget : any,writeTarget : any) {
        super.StaticAccessor(helper,readTarget,writeTarget,token);
        /* TODO (AssertStatementImpl) : assert (readTarget != null || writeTarget != null); */;
    }
    @namedFactory
    static $fromBuilder(helper : BuilderHelper,builder : lib11.Builder,token : any,builderSetter : lib11.Builder) : StaticAccessor {
        if (is(builder, lib4.AccessErrorBuilder)) {
            let error : lib4.AccessErrorBuilder = builder;
            builder = error.builder;
            /* TODO (AssertStatementImpl) : assert (builder.isSetter); */;
        }else if (op(Op.EQUALS,builder.target,null)) {
            return lib7.internalError(`Unhandled: ${builder}`);
        }
        let getter : any = builder.target.hasGetter ? builder.target : null;
        let setter : any = builder.target.hasSetter ? builder.target : null;
        if (op(Op.EQUALS,setter,null)) {
            if ((((t)=>(!!t)?t.hasSetter:null)(((t)=>(!!t)?t.target:null)(builderSetter)) || false)) {
                setter = builderSetter.target;
            }
        }
        return new StaticAccessor(helper,token,getter,setter);
    }
    static fromBuilder : new(helper : BuilderHelper,builder : lib11.Builder,token : any,builderSetter : lib11.Builder) => StaticAccessor;

    get plainNameForRead() : string {
        return ((this.readTarget || this.writeTarget)).name.name;
    }
    doInvocation(offset : number,arguments : any) : any {
        if (op(Op.EQUALS,this.readTarget,null) || isFieldOrGetter(this.readTarget)) {
            return buildMethodInvocation(helper.astFactory,this.buildSimpleRead(),lib8.properties.callName,arguments,offset + ((((t)=>(!!t)?t.length:null)(((t)=>(!!t)?t.name:null)(((t)=>(!!t)?t.name:null)(this.readTarget))) || 0)));
        }else {
            return ((_) : any =>  {
                {
                    _.fileOffset = offset;
                    return _;
                }
            })(helper.buildStaticInvocation(this.readTarget,arguments));
        }
    }
    toString() {
        return "StaticAccessor()";
    }
}

export namespace SuperPropertyAccessor {
    export type Constructors = lib6.SuperPropertyAccessor.Constructors | 'SuperPropertyAccessor';
    export type Interface = Omit<SuperPropertyAccessor, Constructors>;
}
@DartClass
@With(FastaAccessor)
export class SuperPropertyAccessor extends lib6.SuperPropertyAccessor implements FastaAccessor.Interface {
    @Abstract
    buildForEffect() : any {
        throw 'from mixin';
    }
    @Abstract
    buildFieldInitializer(initializers : core.DartMap<string,any>) : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidRead() : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidWrite(value : any) : any {
        throw 'from mixin';
    }
    @Abstract
    buildPropertyAccess(send : IncompleteSend,isNullAware : boolean) : any {
        throw 'from mixin';
    }
    @Abstract
    buildThrowNoSuchMethodError(arguments : any,_namedArguments? : {isSuper? : boolean,isGetter? : boolean,isSetter? : boolean,name? : string,offset? : number}) : any {
        let {isSuper,isGetter,isSetter,name,offset} = Object.assign({
            "isSuper" : false,
            "isGetter" : false,
            "isSetter" : false}, _namedArguments );
        throw 'from mixin';
    }
    constructor(helper : BuilderHelper,token : any,name : any,getter : any,setter : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SuperPropertyAccessor(helper : BuilderHelper,token : any,name : any,getter : any,setter : any) {
        super.SuperPropertyAccessor(helper,name,getter,setter,token);
    }
    get plainNameForRead() : string {
        return this.name.name;
    }
    doInvocation(offset : number,arguments : any) : any {
        if (op(Op.EQUALS,this.getter,null) || isFieldOrGetter(this.getter)) {
            return buildMethodInvocation(helper.astFactory,this.buildSimpleRead(),lib8.properties.callName,arguments,offset);
        }else {
            return ((_) : any =>  {
                {
                    _.fileOffset = offset;
                    return _;
                }
            })(new bare.createInstance(any,null,new bare.createInstance(any,null),this.getter,arguments));
        }
    }
    toString() {
        return "SuperPropertyAccessor()";
    }
}

export namespace ThisIndexAccessor {
    export type Constructors = lib6.ThisIndexAccessor.Constructors | 'ThisIndexAccessor';
    export type Interface = Omit<ThisIndexAccessor, Constructors>;
}
@DartClass
@With(FastaAccessor)
export class ThisIndexAccessor extends lib6.ThisIndexAccessor implements FastaAccessor.Interface {
    @Abstract
    buildForEffect() : any {
        throw 'from mixin';
    }
    @Abstract
    buildFieldInitializer(initializers : core.DartMap<string,any>) : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidRead() : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidWrite(value : any) : any {
        throw 'from mixin';
    }
    @Abstract
    buildPropertyAccess(send : IncompleteSend,isNullAware : boolean) : any {
        throw 'from mixin';
    }
    @Abstract
    buildThrowNoSuchMethodError(arguments : any,_namedArguments? : {isSuper? : boolean,isGetter? : boolean,isSetter? : boolean,name? : string,offset? : number}) : any {
        let {isSuper,isGetter,isSetter,name,offset} = Object.assign({
            "isSuper" : false,
            "isGetter" : false,
            "isSetter" : false}, _namedArguments );
        throw 'from mixin';
    }
    constructor(helper : BuilderHelper,token : any,index : any,getter : any,setter : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ThisIndexAccessor(helper : BuilderHelper,token : any,index : any,getter : any,setter : any) {
        super.ThisIndexAccessor(helper,index,getter,setter,token);
    }
    get plainNameForRead() : string {
        return "[]";
    }
    get plainNameForWrite() : string {
        return "[]=";
    }
    doInvocation(offset : number,arguments : any) : any {
        return buildMethodInvocation(helper.astFactory,this.buildSimpleRead(),lib8.properties.callName,arguments,offset);
    }
    toString() {
        return "ThisIndexAccessor()";
    }
}

export namespace SuperIndexAccessor {
    export type Constructors = lib6.SuperIndexAccessor.Constructors | 'SuperIndexAccessor';
    export type Interface = Omit<SuperIndexAccessor, Constructors>;
}
@DartClass
@With(FastaAccessor)
export class SuperIndexAccessor extends lib6.SuperIndexAccessor implements FastaAccessor.Interface {
    @Abstract
    buildForEffect() : any {
        throw 'from mixin';
    }
    @Abstract
    buildFieldInitializer(initializers : core.DartMap<string,any>) : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidRead() : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidWrite(value : any) : any {
        throw 'from mixin';
    }
    @Abstract
    buildPropertyAccess(send : IncompleteSend,isNullAware : boolean) : any {
        throw 'from mixin';
    }
    @Abstract
    buildThrowNoSuchMethodError(arguments : any,_namedArguments? : {isSuper? : boolean,isGetter? : boolean,isSetter? : boolean,name? : string,offset? : number}) : any {
        let {isSuper,isGetter,isSetter,name,offset} = Object.assign({
            "isSuper" : false,
            "isGetter" : false,
            "isSetter" : false}, _namedArguments );
        throw 'from mixin';
    }
    constructor(helper : BuilderHelper,token : any,index : any,getter : any,setter : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SuperIndexAccessor(helper : BuilderHelper,token : any,index : any,getter : any,setter : any) {
        super.SuperIndexAccessor(helper,index,getter,setter,token);
    }
    get plainNameForRead() : string {
        return "[]";
    }
    get plainNameForWrite() : string {
        return "[]=";
    }
    doInvocation(offset : number,arguments : any) : any {
        return buildMethodInvocation(helper.astFactory,this.buildSimpleRead(),lib8.properties.callName,arguments,offset);
    }
    toString() {
        return "SuperIndexAccessor()";
    }
}

export namespace ThisPropertyAccessor {
    export type Constructors = lib6.ThisPropertyAccessor.Constructors | 'ThisPropertyAccessor';
    export type Interface = Omit<ThisPropertyAccessor, Constructors>;
}
@DartClass
@With(FastaAccessor)
export class ThisPropertyAccessor extends lib6.ThisPropertyAccessor implements FastaAccessor.Interface {
    @Abstract
    buildForEffect() : any {
        throw 'from mixin';
    }
    @Abstract
    buildFieldInitializer(initializers : core.DartMap<string,any>) : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidRead() : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidWrite(value : any) : any {
        throw 'from mixin';
    }
    @Abstract
    buildPropertyAccess(send : IncompleteSend,isNullAware : boolean) : any {
        throw 'from mixin';
    }
    @Abstract
    buildThrowNoSuchMethodError(arguments : any,_namedArguments? : {isSuper? : boolean,isGetter? : boolean,isSetter? : boolean,name? : string,offset? : number}) : any {
        let {isSuper,isGetter,isSetter,name,offset} = Object.assign({
            "isSuper" : false,
            "isGetter" : false,
            "isSetter" : false}, _namedArguments );
        throw 'from mixin';
    }
    helper : BuilderHelper;

    constructor(helper : BuilderHelper,token : any,name : any,getter : any,setter : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ThisPropertyAccessor(helper : BuilderHelper,token : any,name : any,getter : any,setter : any) {
        super.ThisPropertyAccessor(helper,name,getter,setter,token);
        this.helper = helper;
    }
    get plainNameForRead() : string {
        return this.name.name;
    }
    get isThisPropertyAccessor() : boolean {
        return true;
    }
    doInvocation(offset : number,arguments : any) : any {
        let interfaceTarget : any = this.getter;
        if (is(interfaceTarget, any)) {
            interfaceTarget = null;
        }
        return buildMethodInvocation(this.helper.astFactory,new bare.createInstance(any,null),this.name,arguments,offset);
    }
    toString() {
        return "ThisPropertyAccessor()";
    }
}

export namespace NullAwarePropertyAccessor {
    export type Constructors = lib6.NullAwarePropertyAccessor.Constructors | 'NullAwarePropertyAccessor';
    export type Interface = Omit<NullAwarePropertyAccessor, Constructors>;
}
@DartClass
@With(FastaAccessor)
export class NullAwarePropertyAccessor extends lib6.NullAwarePropertyAccessor implements FastaAccessor.Interface {
    @Abstract
    buildForEffect() : any {
        throw 'from mixin';
    }
    @Abstract
    buildFieldInitializer(initializers : core.DartMap<string,any>) : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidRead() : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidWrite(value : any) : any {
        throw 'from mixin';
    }
    @Abstract
    buildPropertyAccess(send : IncompleteSend,isNullAware : boolean) : any {
        throw 'from mixin';
    }
    @Abstract
    buildThrowNoSuchMethodError(arguments : any,_namedArguments? : {isSuper? : boolean,isGetter? : boolean,isSetter? : boolean,name? : string,offset? : number}) : any {
        let {isSuper,isGetter,isSetter,name,offset} = Object.assign({
            "isSuper" : false,
            "isGetter" : false,
            "isSetter" : false}, _namedArguments );
        throw 'from mixin';
    }
    helper : BuilderHelper;

    constructor(helper : BuilderHelper,token : any,receiver : any,name : any,getter : any,setter : any,type : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NullAwarePropertyAccessor(helper : BuilderHelper,token : any,receiver : any,name : any,getter : any,setter : any,type : any) {
        super.NullAwarePropertyAccessor(helper,receiver,name,getter,setter,type,token);
        this.helper = helper;
    }
    get plainNameForRead() : string {
        return this.name.name;
    }
    doInvocation(offset : number,arguments : any) : any {
        return lib7.internalError("Not implemented yet.");
    }
    toString() {
        return "NullAwarePropertyAccessor()";
    }
}

export namespace VariableAccessor {
    export type Constructors = lib6.VariableAccessor.Constructors | 'VariableAccessor';
    export type Interface = Omit<VariableAccessor, Constructors>;
}
@DartClass
@With(FastaAccessor)
export class VariableAccessor extends lib6.VariableAccessor implements FastaAccessor.Interface {
    @Abstract
    buildForEffect() : any {
        throw 'from mixin';
    }
    @Abstract
    buildFieldInitializer(initializers : core.DartMap<string,any>) : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidRead() : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidWrite(value : any) : any {
        throw 'from mixin';
    }
    @Abstract
    buildPropertyAccess(send : IncompleteSend,isNullAware : boolean) : any {
        throw 'from mixin';
    }
    @Abstract
    buildThrowNoSuchMethodError(arguments : any,_namedArguments? : {isSuper? : boolean,isGetter? : boolean,isSetter? : boolean,name? : string,offset? : number}) : any {
        let {isSuper,isGetter,isSetter,name,offset} = Object.assign({
            "isSuper" : false,
            "isGetter" : false,
            "isSetter" : false}, _namedArguments );
        throw 'from mixin';
    }
    constructor(helper : BuilderHelper,token : any,variable : any,promotedType? : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableAccessor(helper : BuilderHelper,token : any,variable : any,promotedType? : any) {
        super.VariableAccessor(helper,variable,promotedType,token);
    }
    get plainNameForRead() : string {
        return this.variable.name;
    }
    doInvocation(offset : number,arguments : any) : any {
        return buildMethodInvocation(helper.astFactory,this.buildSimpleRead(),lib8.properties.callName,arguments,offset + ((((t)=>(!!t)?t.length:null)(this.variable.name) || 0)));
    }
    toString() {
        return "VariableAccessor()";
    }
}

export namespace ReadOnlyAccessor {
    export type Constructors = lib6.ReadOnlyAccessor.Constructors | 'ReadOnlyAccessor';
    export type Interface = Omit<ReadOnlyAccessor, Constructors>;
}
@DartClass
@With(FastaAccessor)
export class ReadOnlyAccessor extends lib6.ReadOnlyAccessor implements FastaAccessor.Interface {
    @Abstract
    buildForEffect() : any {
        throw 'from mixin';
    }
    @Abstract
    buildFieldInitializer(initializers : core.DartMap<string,any>) : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidRead() : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidWrite(value : any) : any {
        throw 'from mixin';
    }
    @Abstract
    buildPropertyAccess(send : IncompleteSend,isNullAware : boolean) : any {
        throw 'from mixin';
    }
    @Abstract
    buildThrowNoSuchMethodError(arguments : any,_namedArguments? : {isSuper? : boolean,isGetter? : boolean,isSetter? : boolean,name? : string,offset? : number}) : any {
        let {isSuper,isGetter,isSetter,name,offset} = Object.assign({
            "isSuper" : false,
            "isGetter" : false,
            "isSetter" : false}, _namedArguments );
        throw 'from mixin';
    }
    plainNameForRead : string;

    constructor(helper : BuilderHelper,expression : any,plainNameForRead : string,token : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ReadOnlyAccessor(helper : BuilderHelper,expression : any,plainNameForRead : string,token : any) {
        super.ReadOnlyAccessor(helper,expression,token);
        this.plainNameForRead = plainNameForRead;
    }
    doInvocation(offset : number,arguments : any) : any {
        return buildMethodInvocation(helper.astFactory,this.buildSimpleRead(),lib8.properties.callName,arguments,offset);
    }
}

export namespace ThisAccessor {
    export type Constructors = FastaAccessor.Constructors | 'ThisAccessor';
    export type Interface = Omit<ThisAccessor, Constructors>;
}
@DartClass
export class ThisAccessor extends FastaAccessor {
    helper : BuilderHelper;

    token : any;

    isInitializer : boolean;

    isSuper : boolean;

    constructor(helper : BuilderHelper,token : any,isInitializer : boolean,_namedArguments? : {isSuper? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ThisAccessor(helper : BuilderHelper,token : any,isInitializer : boolean,_namedArguments? : {isSuper? : boolean}) {
        let {isSuper} = Object.assign({
            "isSuper" : false}, _namedArguments );
        this.helper = helper;
        this.token = token;
        this.isInitializer = isInitializer;
        this.isSuper = isSuper;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get builtBinary() : any {
        return lib7.internalError("Unsupported operation.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set builtBinary(expression : any) {
        lib7.internalError("Unsupported operation.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get builtGetter() : any {
        return lib7.internalError("Unsupported operation.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set builtGetter(expression : any) {
        lib7.internalError("Unsupported operation.");
    }
    get plainNameForRead() : string {
        return lib7.internalError(this.isSuper ? "super" : "this");
    }
    buildSimpleRead() : any {
        if (!this.isSuper) {
            return new bare.createInstance(any,null);
        }else {
            return this.helper.buildCompileTimeError("Can't use `super` as an expression.",offsetForToken(this.token));
        }
    }
    buildFieldInitializer(initializers : core.DartMap<string,any>) : any {
        let keyword : string = this.isSuper ? "super" : "this";
        let offset : number = offsetForToken(this.token);
        return this.helper.buildInvalidIntializer(this.helper.buildCompileTimeError(`Can't use '${keyword}' here, did you mean '${keyword}()'?`,offset),offset);
    }
    buildPropertyAccess(send : IncompleteSend,isNullAware : boolean) {
        if (this.isInitializer && is(send, SendAccessor)) {
            return this.buildConstructorInitializer(offsetForToken(send.token),send.name,send.arguments);
        }
        if (is(send, SendAccessor)) {
            let result : any = buildMethodInvocation(this.helper.astFactory,new bare.createInstance(any,null),send.name,send.arguments,offsetForToken(this.token));
            return this.isSuper ? this.helper.toSuperMethodInvocation(result) : result;
        }else {
            if (this.isSuper) {
                let getter : any = this.helper.lookupSuperMember(send.name);
                let setter : any = this.helper.lookupSuperMember(send.name,{
                    isSetter : true});
                return new SuperPropertyAccessor(this.helper,send.token,send.name,getter,setter);
            }else {
                return new ThisPropertyAccessor(this.helper,send.token,send.name,null,null);
            }
        }
    }
    doInvocation(offset : number,arguments : any) {
        if (this.isInitializer) {
            return this.buildConstructorInitializer(offset,new bare.createInstance(any,null,""),arguments);
        }else {
            return buildMethodInvocation(this.helper.astFactory,new bare.createInstance(any,null),lib8.properties.callName,arguments,offset);
        }
    }
    buildConstructorInitializer(offset : number,name : any,arguments : any) : any {
        let constructor : any = this.helper.lookupConstructor(name,{
            isSuper : this.isSuper});
        if (op(Op.EQUALS,constructor,null) || !this.helper.checkArguments(constructor.function,arguments,new core.DartList.literal<any>())) {
            return this.helper.buildInvalidIntializer(this.buildThrowNoSuchMethodError(arguments,{
                isSuper : this.isSuper,name : name.name,offset : offset}),offset);
        }else if (this.isSuper) {
            return this.helper.buildSuperInitializer(constructor,arguments,offset);
        }else {
            return this.helper.buildRedirectingInitializer(constructor,arguments,offset);
        }
    }
    buildAssignment(value : any,_namedArguments? : {voidContext? : boolean}) : any {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        return this.buildAssignmentError();
    }
    buildNullAwareAssignment(value : any,type : any,_namedArguments? : {voidContext? : boolean}) : any {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        return this.buildAssignmentError();
    }
    buildCompoundAssignment(binaryOperator : any,value : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        return this.buildAssignmentError();
    }
    buildPrefixIncrement(binaryOperator : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        return this.buildAssignmentError();
    }
    buildPostfixIncrement(binaryOperator : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        return this.buildAssignmentError();
    }
    buildAssignmentError() : any {
        let message : string = this.isSuper ? "Can't assign to 'super'." : "Can't assign to 'this'.";
        return this.helper.buildCompileTimeError(message,offsetForToken(this.token));
    }
    toString() {
        let offset : number = offsetForToken(this.token);
        return `ThisAccessor(${offset}${this.isSuper ? ', super' : ''})`;
    }
}

export namespace IncompleteSend {
    export type Constructors = FastaAccessor.Constructors | 'IncompleteSend';
    export type Interface = Omit<IncompleteSend, Constructors>;
}
@DartClass
export class IncompleteSend extends FastaAccessor {
    helper : BuilderHelper;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    token : any;

    name : any;

    constructor(helper : BuilderHelper,token : any,name : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IncompleteSend(helper : BuilderHelper,token : any,name : any) {
        this.helper = helper;
        this.token = token;
        this.name = name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get builtBinary() : any {
        return lib7.internalError("Unsupported operation.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set builtBinary(expression : any) {
        lib7.internalError("Unsupported operation.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get builtGetter() : any {
        return lib7.internalError("Unsupported operation.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set builtGetter(expression : any) {
        lib7.internalError("Unsupported operation.");
    }
    @Abstract
    withReceiver(receiver : core.DartObject,_namedArguments? : {isNullAware? : boolean}){ throw 'abstract'}
}

export namespace ParenthesizedExpression {
    export type Constructors = ReadOnlyAccessor.Constructors | 'ParenthesizedExpression';
    export type Interface = Omit<ParenthesizedExpression, Constructors>;
}
@DartClass
export class ParenthesizedExpression extends ReadOnlyAccessor {
    constructor(helper : BuilderHelper,expression : any,token : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ParenthesizedExpression(helper : BuilderHelper,expression : any,token : any) {
        super.ReadOnlyAccessor(helper,expression,"<a parenthesized expression>",token);
    }
    makeInvalidWrite(value : any) : any {
        return helper.buildCompileTimeError("Can't assign to a parenthesized expression.",offsetForToken(this.token));
    }
}

export namespace UnresolvedAccessor {
    export type Constructors = FastaAccessor.Constructors | 'UnresolvedAccessor';
    export type Interface = Omit<UnresolvedAccessor, Constructors>;
}
@DartClass
@With(ErrorAccessor)
export class UnresolvedAccessor extends FastaAccessor implements ErrorAccessor.Interface {
    @Abstract
    withReceiver(receiver : core.DartObject,_namedArguments? : {isNullAware? : boolean}) : any {
        let {isNullAware} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    buildFieldInitializer(initializers : core.DartMap<string,any>) : any {
        throw 'from mixin';
    }
    @Abstract
    buildPropertyAccess(send : IncompleteSend,isNullAware : boolean) : any {
        throw 'from mixin';
    }
    @Abstract
    buildThrowNoSuchMethodError(arguments : any,_namedArguments? : {isSuper? : boolean,isGetter? : any,isSetter? : any,name? : string,offset? : number}) : any {
        let {isSuper,isGetter,isSetter,name,offset} = Object.assign({
            "isSuper" : false,
            "isGetter" : false,
            "isSetter" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    buildAssignment(value : any,_namedArguments? : {voidContext? : boolean}) : any {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    buildCompoundAssignment(binaryOperator : any,value : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    buildPrefixIncrement(binaryOperator : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    buildPostfixIncrement(binaryOperator : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    buildNullAwareAssignment(value : any,type : any,_namedArguments? : {voidContext? : boolean}) : any {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    buildSimpleRead() : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidRead() : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidWrite(value : any) : any {
        throw 'from mixin';
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    token : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    helper : BuilderHelper;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    name : any;

    constructor(helper : BuilderHelper,name : any,token : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UnresolvedAccessor(helper : BuilderHelper,name : any,token : any) {
        this.helper = helper;
        this.name = name;
        this.token = token;
    }
    doInvocation(charOffset : number,arguments : any) : any {
        return this.buildError(arguments,{
            offset : charOffset});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildError(arguments : any,_namedArguments? : {isGetter? : boolean,isSetter? : boolean,offset? : number}) : any {
        let {isGetter,isSetter,offset} = Object.assign({
            "isGetter" : false,
            "isSetter" : false}, _namedArguments );
        return this.helper.throwNoSuchMethodError(plainNameForRead,arguments,(offset || offsetForToken(this.token)),{
            isGetter : isGetter,isSetter : isSetter});
    }
}

export namespace IncompleteError {
    export type Constructors = IncompleteSend.Constructors | 'IncompleteError';
    export type Interface = Omit<IncompleteError, Constructors>;
}
@DartClass
@With(ErrorAccessor)
export class IncompleteError extends IncompleteSend implements ErrorAccessor.Interface {
    @Abstract
    withReceiver(receiver : core.DartObject,_namedArguments? : {isNullAware? : boolean}) : any {
        let {isNullAware} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    buildFieldInitializer(initializers : core.DartMap<string,any>) : any {
        throw 'from mixin';
    }
    @Abstract
    buildPropertyAccess(send : IncompleteSend,isNullAware : boolean) : any {
        throw 'from mixin';
    }
    @Abstract
    buildThrowNoSuchMethodError(arguments : any,_namedArguments? : {isSuper? : boolean,isGetter? : any,isSetter? : any,name? : string,offset? : number}) : any {
        let {isSuper,isGetter,isSetter,name,offset} = Object.assign({
            "isSuper" : false,
            "isGetter" : false,
            "isSetter" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    buildAssignment(value : any,_namedArguments? : {voidContext? : boolean}) : any {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    buildCompoundAssignment(binaryOperator : any,value : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    buildPrefixIncrement(binaryOperator : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    buildPostfixIncrement(binaryOperator : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    buildNullAwareAssignment(value : any,type : any,_namedArguments? : {voidContext? : boolean}) : any {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    buildSimpleRead() : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidRead() : any {
        throw 'from mixin';
    }
    @Abstract
    makeInvalidWrite(value : any) : any {
        throw 'from mixin';
    }
    error : core.DartObject;

    constructor(helper : BuilderHelper,token : any,error : core.DartObject) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IncompleteError(helper : BuilderHelper,token : any,error : core.DartObject) {
        super.IncompleteSend(helper,token,null);
        this.error = error;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildError(arguments : any,_namedArguments? : {isGetter? : boolean,isSetter? : boolean,offset? : number}) : any {
        let {isGetter,isSetter,offset} = Object.assign({
            "isGetter" : false,
            "isSetter" : false}, _namedArguments );
        return this.helper.buildCompileTimeError(this.error,(offset || offsetForToken(this.token)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    doInvocation(offset : number,arguments : any) {
        return this;
    }
}

export namespace SendAccessor {
    export type Constructors = IncompleteSend.Constructors | 'SendAccessor';
    export type Interface = Omit<SendAccessor, Constructors>;
}
@DartClass
export class SendAccessor extends IncompleteSend {
    arguments : any;

    constructor(helper : BuilderHelper,token : any,name : any,arguments : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SendAccessor(helper : BuilderHelper,token : any,name : any,arguments : any) {
        super.IncompleteSend(helper,token,name);
        this.arguments = arguments;
        /* TODO (AssertStatementImpl) : assert (arguments != null); */;
    }
    get plainNameForRead() : string {
        return this.name.name;
    }
    buildSimpleRead() : any {
        return lib7.internalError("Unhandled");
    }
    buildAssignment(value : any,_namedArguments? : {voidContext? : boolean}) : any {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        return lib7.internalError("Unhandled");
    }
    withReceiver(receiver : core.DartObject,_namedArguments? : {isNullAware? : boolean}) {
        let {isNullAware} = Object.assign({
            "isNullAware" : false}, _namedArguments );
        if (is(receiver, lib9.TypeDeclarationBuilder<any,any>)) {
            isNullAware = false;
        }
        if (is(receiver, FastaAccessor)) {
            return receiver.buildPropertyAccess(this,isNullAware);
        }
        if (is(receiver, lib5.PrefixBuilder)) {
            let prefix : lib5.PrefixBuilder = receiver;
            receiver = this.helper.scopeLookup(prefix.exports,this.name.name,this.token,{
                isQualified : true,prefix : prefix});
            return this.helper.finishSend(receiver,this.arguments,offsetForToken(this.token));
        }
        let result : any;
        if (is(receiver, lib10.KernelClassBuilder)) {
            let builder : lib11.Builder = receiver.findStaticBuilder(this.name.name,offsetForToken(this.token),this.uri);
            if (op(Op.EQUALS,builder,null) || is(builder, lib4.AccessErrorBuilder)) {
                return this.buildThrowNoSuchMethodError(this.arguments);
            }
            if (builder.hasProblem) {
                result = this.helper.buildProblemExpression(builder,offsetForToken(this.token));
            }else {
                let target : any = builder.target;
                if (target != null) {
                    if (is(target, any)) {
                        result = buildMethodInvocation(this.helper.astFactory,new bare.createInstance(any,null,target),lib8.properties.callName,this.arguments,op(Op.PLUS,offsetForToken(this.token),((((t)=>(!!t)?t.length:null)(((t)=>(!!t)?t.name:null)(target.name)) || 0))),{
                            isNullAware : isNullAware});
                    }else {
                        result = ((_) : any =>  {
                            {
                                _.fileOffset = offsetForToken(this.token);
                                return _;
                            }
                        })(this.helper.buildStaticInvocation(target,this.arguments));
                    }
                }else {
                    result = ((_) : any =>  {
                        {
                            _.fileOffset = offsetForToken(this.token);
                            return _;
                        }
                    })(this.buildThrowNoSuchMethodError(this.arguments));
                }
            }
        }else {
            result = buildMethodInvocation(this.helper.astFactory,this.helper.toValue(receiver),this.name,this.arguments,offsetForToken(this.token),{
                isNullAware : isNullAware});
        }
        return result;
    }
    buildNullAwareAssignment(value : any,type : any,_namedArguments? : {voidContext? : boolean}) : any {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        return lib7.internalError("Unhandled");
    }
    buildCompoundAssignment(binaryOperator : any,value : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "voidContext" : false}, _namedArguments );
        return lib7.internalError("Unhandled");
    }
    buildPrefixIncrement(binaryOperator : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "voidContext" : false}, _namedArguments );
        return lib7.internalError("Unhandled");
    }
    buildPostfixIncrement(binaryOperator : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "voidContext" : false}, _namedArguments );
        return lib7.internalError("Unhandled");
    }
    doInvocation(offset : number,arguments : any) : any {
        return lib7.internalError("Unhandled");
    }
    toString() {
        let offset : number = offsetForToken(this.token);
        return `SendAccessor(${offset}, ${this.name}, ${this.arguments})`;
    }
}

export namespace IncompletePropertyAccessor {
    export type Constructors = IncompleteSend.Constructors | 'IncompletePropertyAccessor';
    export type Interface = Omit<IncompletePropertyAccessor, Constructors>;
}
@DartClass
export class IncompletePropertyAccessor extends IncompleteSend {
    constructor(helper : BuilderHelper,token : any,name : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IncompletePropertyAccessor(helper : BuilderHelper,token : any,name : any) {
        super.IncompleteSend(helper,token,name);
    }
    get plainNameForRead() : string {
        return this.name.name;
    }
    buildSimpleRead() : any {
        return lib7.internalError("Unhandled");
    }
    buildAssignment(value : any,_namedArguments? : {voidContext? : boolean}) : any {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        return lib7.internalError("Unhandled");
    }
    withReceiver(receiver : core.DartObject,_namedArguments? : {isNullAware? : boolean}) {
        let {isNullAware} = Object.assign({
            "isNullAware" : false}, _namedArguments );
        if (is(receiver, lib9.TypeDeclarationBuilder<any,any>)) {
            isNullAware = false;
        }
        if (is(receiver, FastaAccessor)) {
            return receiver.buildPropertyAccess(this,isNullAware);
        }
        if (is(receiver, lib5.PrefixBuilder)) {
            let prefix : lib5.PrefixBuilder = receiver;
            return this.helper.scopeLookup(prefix.exports,this.name.name,this.token,{
                isQualified : true,prefix : prefix});
        }
        if (is(receiver, lib10.KernelClassBuilder)) {
            let builder : lib11.Builder = receiver.findStaticBuilder(this.name.name,offsetForToken(this.token),this.uri);
            if (op(Op.EQUALS,builder,null)) {
                return this.buildThrowNoSuchMethodError(new bare.createInstance(any,null),{
                    isGetter : true});
            }
            let setter : lib11.Builder;
            if (builder.isSetter) {
                setter = builder;
            }else if (builder.isGetter) {
                setter = receiver.findStaticBuilder(this.name.name,offsetForToken(this.token),this.uri,{
                    isSetter : true});
            }else if (builder.isField && !builder.isFinal) {
                setter = builder;
            }
            return new StaticAccessor.fromBuilder(this.helper,builder,this.token,setter);
        }
        return PropertyAccessor.make(this.helper,this.token,this.helper.toValue(receiver),this.name,null,null,isNullAware);
    }
    buildNullAwareAssignment(value : any,type : any,_namedArguments? : {voidContext? : boolean}) : any {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        return lib7.internalError("Unhandled");
    }
    buildCompoundAssignment(binaryOperator : any,value : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "voidContext" : false}, _namedArguments );
        return lib7.internalError("Unhandled");
    }
    buildPrefixIncrement(binaryOperator : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "voidContext" : false}, _namedArguments );
        return lib7.internalError("Unhandled");
    }
    buildPostfixIncrement(binaryOperator : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "voidContext" : false}, _namedArguments );
        return lib7.internalError("Unhandled");
    }
    doInvocation(offset : number,arguments : any) : any {
        return lib7.internalError("Unhandled");
    }
    toString() {
        let offset : number = offsetForToken(this.token);
        return `IncompletePropertyAccessor(${offset}, ${this.name})`;
    }
}

export class properties {
}
