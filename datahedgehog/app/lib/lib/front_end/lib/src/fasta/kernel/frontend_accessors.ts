/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/frontend_accessors.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var makeLet : (variable : any,body : any) => any = (variable : any,body : any) : any =>  {
    if (op(Op.EQUALS,variable,null)) return body;
    return new bare.createInstance(any,null,variable,body);
};
export var makeBinary : (astFactory : any,left : any,operator : any,interfaceTarget : any,right : any,_namedArguments? : {offset? : number}) => any = (astFactory : any,left : any,operator : any,interfaceTarget : any,right : any,_namedArguments? : {offset? : number}) : any =>  {
    let {offset} = Object.assign({
        "offset" : TreeNode.noOffset}, _namedArguments );
    return ((_) : any =>  {
        {
            _.fileOffset = offset;
            return _;
        }
    })(astFactory.methodInvocation(left,operator,astFactory.arguments(new core.DartList.literal<any>(right)),interfaceTarget));
};
export var buildIsNull : (astFactory : any,value : any,_namedArguments? : {offset? : number}) => any = (astFactory : any,value : any,_namedArguments? : {offset? : number}) : any =>  {
    let {offset} = Object.assign({
        "offset" : TreeNode.noOffset}, _namedArguments );
    return makeBinary(astFactory,value,properties._equalOperator,null,new bare.createInstance(any,null),{
        offset : offset});
};
export var makeOrReuseVariable : (value : any) => any = (value : any) : any =>  {
    return new bare.createInstance(any,null,value);
};
export var wrapInvalid : (e : any) => any = (e : any) : any =>  {
    return new bare.createInstance(any,null,new bare.createInstance(any,null,e),new bare.createInstance(any,null));
};
export namespace Accessor {
    export type Constructors = 'Accessor';
    export type Interface = Omit<Accessor, Constructors>;
}
@DartClass
export class Accessor {
    helper : any;

    token : any;

    builtBinary : any;

    builtGetter : any;

    constructor(helper : any,token : any) {
    }
    @defaultConstructor
    Accessor(helper : any,token : any) {
        this.helper = helper;
        this.token = token;
    }
    buildSimpleRead() : any {
        return this._finish(this._makeSimpleRead());
    }
    buildAssignment(value : any,_namedArguments? : {voidContext? : boolean}) : any {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        return this._finish(this._makeSimpleWrite(value,voidContext));
    }
    buildNullAwareAssignment(value : any,type : any,_namedArguments? : {voidContext? : boolean}) : any {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        if (voidContext) {
            return this._finish(new bare.createInstance(any,null,buildIsNull(this.helper.astFactory,this._makeRead()),this._makeWrite(value,false),new bare.createInstance(any,null),type));
        }
        let tmp = new bare.createInstance(any,null,this._makeRead());
        return this._finish(makeLet(tmp,new bare.createInstance(any,null,buildIsNull(this.helper.astFactory,new bare.createInstance(any,null,tmp)),this._makeWrite(value,false),new bare.createInstance(any,null,tmp),type)));
    }
    buildCompoundAssignment(binaryOperator : any,value : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        return this._finish(this._makeWrite(this.builtBinary = makeBinary(this.helper.astFactory,this._makeRead(),binaryOperator,interfaceTarget,value,{
            offset : offset}),voidContext));
    }
    buildPrefixIncrement(binaryOperator : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        return this.buildCompoundAssignment(binaryOperator,new bare.createInstance(any,null,1),{
            offset : offset,voidContext : voidContext,interfaceTarget : interfaceTarget});
    }
    buildPostfixIncrement(binaryOperator : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        if (voidContext) {
            return this.buildPrefixIncrement(binaryOperator,{
                offset : offset,voidContext : true,interfaceTarget : interfaceTarget});
        }
        let value = new bare.createInstance(any,null,this._makeRead());
        var valueAccess : () => any = () =>  {
            return new bare.createInstance(any,null,value);
        };
        let dummy = new bare.createInstance(any,null,this._makeWrite(this.builtBinary = makeBinary(this.helper.astFactory,valueAccess(),binaryOperator,interfaceTarget,new bare.createInstance(any,null,1),{
            offset : offset}),true));
        return this._finish(makeLet(value,makeLet(dummy,valueAccess())));
    }
    _makeSimpleRead() : any {
        return this._makeRead();
    }
    _makeSimpleWrite(value : any,voidContext : boolean) : any {
        return this._makeWrite(value,voidContext);
    }
    @Abstract
    _makeRead() : any{ throw 'abstract'}
    @Abstract
    _makeWrite(value : any,voidContext : boolean) : any{ throw 'abstract'}
    _finish(body : any) : any {
        return body;
    }
    makeInvalidRead() {
        return new bare.createInstance(any,null);
    }
    makeInvalidWrite(value : any) {
        return wrapInvalid(value);
    }
}

export namespace VariableAccessor {
    export type Constructors = Accessor.Constructors | 'VariableAccessor';
    export type Interface = Omit<VariableAccessor, Constructors>;
}
@DartClass
export class VariableAccessor extends Accessor {
    variable : any;

    promotedType : any;

    constructor(helper : any,variable : any,promotedType : any,token : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableAccessor(helper : any,variable : any,promotedType : any,token : any) {
        super.Accessor(helper,token);
        this.variable = variable;
        this.promotedType = promotedType;
    }
    _makeRead() : any {
        let fact = this.helper.typePromoter.getFactForAccess(this.variable,this.helper.functionNestingLevel);
        let scope = this.helper.typePromoter.currentScope;
        return this.helper.astFactory.variableGet(this.variable,fact,scope,this.token);
    }
    _makeWrite(value : any,voidContext : boolean) : any {
        this.helper.typePromoter.mutateVariable(this.variable,this.helper.functionNestingLevel);
        return ((_) : any =>  {
            {
                _.fileOffset = offsetForToken(this.token);
                return _;
            }
        })(this.variable.isFinal || this.variable.isConst ? this.makeInvalidWrite(value) : this.helper.astFactory.variableSet(this.variable,value));
    }
}

export namespace PropertyAccessor {
    export type Constructors = Accessor.Constructors | 'internal';
    export type Interface = Omit<PropertyAccessor, Constructors>;
}
@DartClass
export class PropertyAccessor extends Accessor {
    _receiverVariable : any;

    receiver : any;

    name : any;

    getter : any;
    setter : any;

    static make(helper : any,receiver : any,name : any,getter : any,setter : any,_namedArguments? : {token? : any}) : Accessor {
        let {token} = Object.assign({
        }, _namedArguments );
        if (is(receiver, any)) {
            return new ThisPropertyAccessor(helper,name,getter,setter,token);
        }else {
            return new PropertyAccessor.internal(helper,receiver,name,getter,setter,token);
        }
    }
    @namedConstructor
    internal(helper : any,receiver : any,name : any,getter : any,setter : any,token : any) {
        super.Accessor(helper,token);
        this.receiver = receiver;
        this.name = name;
        this.getter = getter;
        this.setter = setter;
    }
    static internal : new(helper : any,receiver : any,name : any,getter : any,setter : any,token : any) => PropertyAccessor;

    _makeSimpleRead() : any {
        return ((_) : any =>  {
            {
                _.fileOffset = offsetForToken(this.token);
                return _;
            }
        })(this.helper.astFactory.propertyGet(this.receiver,this.name,this.getter));
    }
    _makeSimpleWrite(value : any,voidContext : boolean) : any {
        return ((_) : any =>  {
            {
                _.fileOffset = offsetForToken(this.token);
                return _;
            }
        })(this.helper.astFactory.propertySet(this.receiver,this.name,value,this.setter));
    }
    receiverAccess() {
        this._receiverVariable = ( this._receiverVariable ) || ( new bare.createInstance(any,null,this.receiver) );
        return ((_) : any =>  {
            {
                _.fileOffset = offsetForToken(this.token);
                return _;
            }
        })(new bare.createInstance(any,null,this._receiverVariable));
    }
    _makeRead() : any {
        return this.builtGetter = ((_) : any =>  {
            {
                _.fileOffset = offsetForToken(this.token);
                return _;
            }
        })(this.helper.astFactory.propertyGet(this.receiverAccess(),this.name,this.getter));
    }
    _makeWrite(value : any,voidContext : boolean) : any {
        return ((_) : any =>  {
            {
                _.fileOffset = offsetForToken(this.token);
                return _;
            }
        })(this.helper.astFactory.propertySet(this.receiverAccess(),this.name,value,this.setter));
    }
    _finish(body : any) : any {
        return makeLet(this._receiverVariable,body);
    }
}

export namespace ThisPropertyAccessor {
    export type Constructors = Accessor.Constructors | 'ThisPropertyAccessor';
    export type Interface = Omit<ThisPropertyAccessor, Constructors>;
}
@DartClass
export class ThisPropertyAccessor extends Accessor {
    name : any;

    getter : any;
    setter : any;

    constructor(helper : any,name : any,getter : any,setter : any,token : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ThisPropertyAccessor(helper : any,name : any,getter : any,setter : any,token : any) {
        super.Accessor(helper,token);
        this.name = name;
        this.getter = getter;
        this.setter = setter;
    }
    _makeRead() : any {
        return this.builtGetter = ((_) : any =>  {
            {
                _.fileOffset = offsetForToken(this.token);
                return _;
            }
        })(this.helper.astFactory.propertyGet(new bare.createInstance(any,null),this.name,this.getter));
    }
    _makeWrite(value : any,voidContext : boolean) : any {
        return ((_) : any =>  {
            {
                _.fileOffset = offsetForToken(this.token);
                return _;
            }
        })(this.helper.astFactory.propertySet(new bare.createInstance(any,null),this.name,value,this.setter));
    }
}

export namespace NullAwarePropertyAccessor {
    export type Constructors = Accessor.Constructors | 'NullAwarePropertyAccessor';
    export type Interface = Omit<NullAwarePropertyAccessor, Constructors>;
}
@DartClass
export class NullAwarePropertyAccessor extends Accessor {
    receiver : any;

    name : any;

    getter : any;
    setter : any;

    type : any;

    constructor(helper : any,receiver : any,name : any,getter : any,setter : any,type : any,token : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NullAwarePropertyAccessor(helper : any,receiver : any,name : any,getter : any,setter : any,type : any,token : any) {
        this.receiver = makeOrReuseVariable(receiver);
        super.Accessor(helper,token);
        this.name = name;
        this.getter = getter;
        this.setter = setter;
        this.type = type;
    }
    receiverAccess() {
        return new bare.createInstance(any,null,this.receiver);
    }
    _makeRead() : any {
        return this.builtGetter = this.helper.astFactory.propertyGet(this.receiverAccess(),this.name,this.getter);
    }
    _makeWrite(value : any,voidContext : boolean) : any {
        return this.helper.astFactory.propertySet(this.receiverAccess(),this.name,value,this.setter);
    }
    _finish(body : any) : any {
        return makeLet(this.receiver,new bare.createInstance(any,null,buildIsNull(this.helper.astFactory,this.receiverAccess()),new bare.createInstance(any,null),body,this.type));
    }
}

export namespace SuperPropertyAccessor {
    export type Constructors = Accessor.Constructors | 'SuperPropertyAccessor';
    export type Interface = Omit<SuperPropertyAccessor, Constructors>;
}
@DartClass
export class SuperPropertyAccessor extends Accessor {
    name : any;

    getter : any;
    setter : any;

    constructor(helper : any,name : any,getter : any,setter : any,token : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SuperPropertyAccessor(helper : any,name : any,getter : any,setter : any,token : any) {
        super.Accessor(helper,token);
        this.name = name;
        this.getter = getter;
        this.setter = setter;
    }
    _makeRead() : any {
        if (op(Op.EQUALS,this.getter,null)) return this.makeInvalidRead();
        return this.builtGetter = ((_) : any =>  {
            {
                _.fileOffset = offsetForToken(this.token);
                return _;
            }
        })(new bare.createInstance(any,null,this.name,this.getter));
    }
    _makeWrite(value : any,voidContext : boolean) : any {
        if (op(Op.EQUALS,this.setter,null)) return this.makeInvalidWrite(value);
        return ((_) : any =>  {
            {
                _.fileOffset = offsetForToken(this.token);
                return _;
            }
        })(new bare.createInstance(any,null,this.name,value,this.setter));
    }
}

export namespace IndexAccessor {
    export type Constructors = Accessor.Constructors | 'internal';
    export type Interface = Omit<IndexAccessor, Constructors>;
}
@DartClass
export class IndexAccessor extends Accessor {
    receiver : any;

    index : any;

    receiverVariable : any;

    indexVariable : any;

    getter : any;
    setter : any;

    static make(helper : any,receiver : any,index : any,getter : any,setter : any,_namedArguments? : {token? : any}) : Accessor {
        let {token} = Object.assign({
        }, _namedArguments );
        if (is(receiver, any)) {
            return new ThisIndexAccessor(helper,index,getter,setter,token);
        }else {
            return new IndexAccessor.internal(helper,receiver,index,getter,setter,token);
        }
    }
    @namedConstructor
    internal(helper : any,receiver : any,index : any,getter : any,setter : any,token : any) {
        super.Accessor(helper,token);
        this.receiver = receiver;
        this.index = index;
        this.getter = getter;
        this.setter = setter;
    }
    static internal : new(helper : any,receiver : any,index : any,getter : any,setter : any,token : any) => IndexAccessor;

    _makeSimpleRead() : any {
        return ((_) : any =>  {
            {
                _.fileOffset = offsetForToken(this.token);
                return _;
            }
        })(this.helper.astFactory.methodInvocation(this.receiver,properties.indexGetName,this.helper.astFactory.arguments(new core.DartList.literal<any>(this.index)),this.getter));
    }
    _makeSimpleWrite(value : any,voidContext : boolean) : any {
        if (!voidContext) return this._makeWriteAndReturn(value);
        return ((_) : any =>  {
            {
                _.fileOffset = offsetForToken(this.token);
                return _;
            }
        })(this.helper.astFactory.methodInvocation(this.receiver,properties.indexSetName,this.helper.astFactory.arguments(new core.DartList.literal<any>(this.index,value)),this.setter));
    }
    receiverAccess() {
        this.receiverVariable = ( this.receiverVariable ) || ( new bare.createInstance(any,null,this.receiver) );
        return ((_) : any =>  {
            {
                _.fileOffset = offsetForToken(this.token);
                return _;
            }
        })(new bare.createInstance(any,null,this.receiverVariable));
    }
    indexAccess() {
        this.indexVariable = ( this.indexVariable ) || ( new bare.createInstance(any,null,this.index) );
        return ((_) : any =>  {
            {
                _.fileOffset = offsetForToken(this.token);
                return _;
            }
        })(new bare.createInstance(any,null,this.indexVariable));
    }
    _makeRead() : any {
        return this.builtGetter = ((_) : any =>  {
            {
                _.fileOffset = offsetForToken(this.token);
                return _;
            }
        })(this.helper.astFactory.methodInvocation(this.receiverAccess(),properties.indexGetName,this.helper.astFactory.arguments(new core.DartList.literal<any>(this.indexAccess())),this.getter));
    }
    _makeWrite(value : any,voidContext : boolean) : any {
        if (!voidContext) return this._makeWriteAndReturn(value);
        return ((_) : any =>  {
            {
                _.fileOffset = offsetForToken(this.token);
                return _;
            }
        })(this.helper.astFactory.methodInvocation(this.receiverAccess(),properties.indexSetName,this.helper.astFactory.arguments(new core.DartList.literal<any>(this.indexAccess(),value)),this.setter));
    }
    _makeWriteAndReturn(value : any) {
        let valueVariable = new bare.createInstance(any,null,value);
        let dummy = new bare.createInstance(any,null,((_) : any =>  {
            {
                _.fileOffset = offsetForToken(this.token);
                return _;
            }
        })(this.helper.astFactory.methodInvocation(this.receiverAccess(),properties.indexSetName,this.helper.astFactory.arguments(new core.DartList.literal<any>(this.indexAccess(),new bare.createInstance(any,null,valueVariable))),this.setter)));
        return makeLet(valueVariable,makeLet(dummy,new bare.createInstance(any,null,valueVariable)));
    }
    _finish(body : any) : any {
        return makeLet(this.receiverVariable,makeLet(this.indexVariable,body));
    }
}

export namespace ThisIndexAccessor {
    export type Constructors = Accessor.Constructors | 'ThisIndexAccessor';
    export type Interface = Omit<ThisIndexAccessor, Constructors>;
}
@DartClass
export class ThisIndexAccessor extends Accessor {
    index : any;

    indexVariable : any;

    getter : any;
    setter : any;

    constructor(helper : any,index : any,getter : any,setter : any,token : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ThisIndexAccessor(helper : any,index : any,getter : any,setter : any,token : any) {
        super.Accessor(helper,token);
        this.index = index;
        this.getter = getter;
        this.setter = setter;
    }
    _makeSimpleRead() : any {
        return this.helper.astFactory.methodInvocation(new bare.createInstance(any,null),properties.indexGetName,this.helper.astFactory.arguments(new core.DartList.literal<any>(this.index)),this.getter);
    }
    _makeSimpleWrite(value : any,voidContext : boolean) : any {
        if (!voidContext) return this._makeWriteAndReturn(value);
        return this.helper.astFactory.methodInvocation(new bare.createInstance(any,null),properties.indexSetName,this.helper.astFactory.arguments(new core.DartList.literal<any>(this.index,value)),this.setter);
    }
    indexAccess() {
        this.indexVariable = ( this.indexVariable ) || ( new bare.createInstance(any,null,this.index) );
        return new bare.createInstance(any,null,this.indexVariable);
    }
    _makeRead() : any {
        return this.builtGetter = this.helper.astFactory.methodInvocation(new bare.createInstance(any,null),properties.indexGetName,this.helper.astFactory.arguments(new core.DartList.literal<any>(this.indexAccess())),this.getter);
    }
    _makeWrite(value : any,voidContext : boolean) : any {
        if (!voidContext) return this._makeWriteAndReturn(value);
        return this.helper.astFactory.methodInvocation(new bare.createInstance(any,null),properties.indexSetName,this.helper.astFactory.arguments(new core.DartList.literal<any>(this.indexAccess(),value)),this.setter);
    }
    _makeWriteAndReturn(value : any) {
        let valueVariable = new bare.createInstance(any,null,value);
        let dummy = new bare.createInstance(any,null,this.helper.astFactory.methodInvocation(new bare.createInstance(any,null),properties.indexSetName,this.helper.astFactory.arguments(new core.DartList.literal<any>(this.indexAccess(),new bare.createInstance(any,null,valueVariable))),this.setter));
        return makeLet(valueVariable,makeLet(dummy,new bare.createInstance(any,null,valueVariable)));
    }
    _finish(body : any) : any {
        return makeLet(this.indexVariable,body);
    }
}

export namespace SuperIndexAccessor {
    export type Constructors = Accessor.Constructors | 'SuperIndexAccessor';
    export type Interface = Omit<SuperIndexAccessor, Constructors>;
}
@DartClass
export class SuperIndexAccessor extends Accessor {
    index : any;

    indexVariable : any;

    getter : any;
    setter : any;

    constructor(helper : any,index : any,getter : any,setter : any,token : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SuperIndexAccessor(helper : any,index : any,getter : any,setter : any,token : any) {
        super.Accessor(helper,token);
        this.index = index;
        this.getter = getter;
        this.setter = setter;
    }
    indexAccess() {
        this.indexVariable = ( this.indexVariable ) || ( new bare.createInstance(any,null,this.index) );
        return new bare.createInstance(any,null,this.indexVariable);
    }
    _makeSimpleRead() : any {
        return new bare.createInstance(any,null,properties.indexGetName,this.helper.astFactory.arguments(new core.DartList.literal<any>(this.index)),this.getter);
    }
    _makeSimpleWrite(value : any,voidContext : boolean) : any {
        if (!voidContext) return this._makeWriteAndReturn(value);
        return new bare.createInstance(any,null,properties.indexSetName,this.helper.astFactory.arguments(new core.DartList.literal<any>(this.index,value)),this.setter);
    }
    _makeRead() : any {
        return this.builtGetter = new bare.createInstance(any,null,properties.indexGetName,this.helper.astFactory.arguments(new core.DartList.literal<any>(this.indexAccess())),this.getter);
    }
    _makeWrite(value : any,voidContext : boolean) : any {
        if (!voidContext) return this._makeWriteAndReturn(value);
        return new bare.createInstance(any,null,properties.indexSetName,this.helper.astFactory.arguments(new core.DartList.literal<any>(this.indexAccess(),value)),this.setter);
    }
    _makeWriteAndReturn(value : any) {
        let valueVariable = new bare.createInstance(any,null,value);
        let dummy = new bare.createInstance(any,null,new bare.createInstance(any,null,properties.indexSetName,this.helper.astFactory.arguments(new core.DartList.literal<any>(this.indexAccess(),new bare.createInstance(any,null,valueVariable))),this.setter));
        return makeLet(valueVariable,makeLet(dummy,new bare.createInstance(any,null,valueVariable)));
    }
    _finish(body : any) : any {
        return makeLet(this.indexVariable,body);
    }
}

export namespace StaticAccessor {
    export type Constructors = Accessor.Constructors | 'StaticAccessor';
    export type Interface = Omit<StaticAccessor, Constructors>;
}
@DartClass
export class StaticAccessor extends Accessor {
    readTarget : any;

    writeTarget : any;

    constructor(helper : any,readTarget : any,writeTarget : any,token : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StaticAccessor(helper : any,readTarget : any,writeTarget : any,token : any) {
        super.Accessor(helper,token);
        this.readTarget = readTarget;
        this.writeTarget = writeTarget;
    }
    _makeRead() : any {
        return this.builtGetter = op(Op.EQUALS,this.readTarget,null) ? this.makeInvalidRead() : this.helper.makeStaticGet(this.readTarget,this.token);
    }
    _makeWrite(value : any,voidContext : boolean) : any {
        return ((_) : any =>  {
            {
                _.fileOffset = offsetForToken(this.token);
                return _;
            }
        })(op(Op.EQUALS,this.writeTarget,null) ? this.makeInvalidWrite(value) : new bare.createInstance(any,null,this.writeTarget,value));
    }
}

export namespace ReadOnlyAccessor {
    export type Constructors = Accessor.Constructors | 'ReadOnlyAccessor';
    export type Interface = Omit<ReadOnlyAccessor, Constructors>;
}
@DartClass
export class ReadOnlyAccessor extends Accessor {
    expression : any;

    value : any;

    constructor(helper : any,expression : any,token : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ReadOnlyAccessor(helper : any,expression : any,token : any) {
        super.Accessor(helper,token);
        this.expression = expression;
    }
    _makeSimpleRead() : any {
        return this.expression;
    }
    _makeRead() : any {
        this.value = ( this.value ) || ( new bare.createInstance(any,null,this.expression) );
        return new bare.createInstance(any,null,this.value);
    }
    _makeWrite(value : any,voidContext : boolean) : any {
        return this.makeInvalidWrite(value);
    }
    _finish(body : any) : any {
        return makeLet(this.value,body);
    }
}

export class properties {
    private static __$indexGetName : any;
    static get indexGetName() : any { 
        if (this.__$indexGetName===undefined) {
            this.__$indexGetName = new bare.createInstance(any,null,"[]");
        }
        return this.__$indexGetName;
    }
    static set indexGetName(__$value : any)  { 
        this.__$indexGetName = __$value;
    }

    private static __$indexSetName : any;
    static get indexSetName() : any { 
        if (this.__$indexSetName===undefined) {
            this.__$indexSetName = new bare.createInstance(any,null,"[]=");
        }
        return this.__$indexSetName;
    }
    static set indexSetName(__$value : any)  { 
        this.__$indexSetName = __$value;
    }

    private static __$_equalOperator : any;
    static get _equalOperator() : any { 
        if (this.__$_equalOperator===undefined) {
            this.__$_equalOperator = new bare.createInstance(any,null,'==');
        }
        return this.__$_equalOperator;
    }
    static set _equalOperator(__$value : any)  { 
        this.__$_equalOperator = __$value;
    }

}
