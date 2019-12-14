/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/frontend/accessors.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../ast";

export var makeLet : (variable : lib3.VariableDeclaration,body : lib3.Expression) => lib3.Expression = (variable : lib3.VariableDeclaration,body : lib3.Expression) : lib3.Expression =>  {
    if (op(Op.EQUALS,variable,null)) return body;
    return new lib3.Let(variable,body);
};
export var makeBinary : (left : lib3.Expression,operator : lib3.Name,interfaceTarget : lib3.Procedure,right : lib3.Expression,_namedArguments? : {offset? : number}) => lib3.Expression = (left : lib3.Expression,operator : lib3.Name,interfaceTarget : lib3.Procedure,right : lib3.Expression,_namedArguments? : {offset? : number}) : lib3.Expression =>  {
    let {offset} = Object.assign({
        "offset" : lib3.TreeNode.noOffset}, _namedArguments );
    return ((_) : lib3.MethodInvocation =>  {
        {
            _.fileOffset = offset;
            return _;
        }
    })(new lib3.MethodInvocation(left,operator,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(right)),interfaceTarget));
};
export var buildIsNull : (value : lib3.Expression,_namedArguments? : {offset? : number}) => lib3.Expression = (value : lib3.Expression,_namedArguments? : {offset? : number}) : lib3.Expression =>  {
    let {offset} = Object.assign({
        "offset" : lib3.TreeNode.noOffset}, _namedArguments );
    return makeBinary(value,properties._equalOperator,null,new lib3.NullLiteral(),{
        offset : offset});
};
export var makeOrReuseVariable : (value : lib3.Expression) => lib3.VariableDeclaration = (value : lib3.Expression) : lib3.VariableDeclaration =>  {
    return new lib3.VariableDeclaration.forValue(value);
};
export var wrapInvalid : (e : lib3.Expression) => lib3.Expression = (e : lib3.Expression) : lib3.Expression =>  {
    return new lib3.Let(new lib3.VariableDeclaration.forValue(e),new lib3.InvalidExpression());
};
export namespace Accessor {
    export type Constructors = 'Accessor';
    export type Interface = Omit<Accessor, Constructors>;
}
@DartClass
export class Accessor {
    offset : number;

    builtBinary : lib3.Expression;

    builtGetter : lib3.Expression;

    constructor(offset : number) {
    }
    @defaultConstructor
    Accessor(offset : number) {
        this.offset = offset;
    }
    buildSimpleRead() : lib3.Expression {
        return this._finish(this._makeSimpleRead());
    }
    buildAssignment(value : lib3.Expression,_namedArguments? : {voidContext? : boolean}) : lib3.Expression {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        return this._finish(this._makeSimpleWrite(value,voidContext));
    }
    buildNullAwareAssignment(value : lib3.Expression,type : lib3.DartType,_namedArguments? : {voidContext? : boolean}) : lib3.Expression {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        if (voidContext) {
            return this._finish(new lib3.ConditionalExpression(buildIsNull(this._makeRead()),this._makeWrite(value,false),new lib3.NullLiteral(),type));
        }
        let tmp = new lib3.VariableDeclaration.forValue(this._makeRead());
        return this._finish(makeLet(tmp,new lib3.ConditionalExpression(buildIsNull(new lib3.VariableGet(tmp)),this._makeWrite(value,false),new lib3.VariableGet(tmp),type)));
    }
    buildCompoundAssignment(binaryOperator : lib3.Name,value : lib3.Expression,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : lib3.Procedure}) : lib3.Expression {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : lib3.TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        return this._finish(this._makeWrite(this.builtBinary = makeBinary(this._makeRead(),binaryOperator,interfaceTarget,value,{
            offset : offset}),voidContext));
    }
    buildPrefixIncrement(binaryOperator : lib3.Name,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : lib3.Procedure}) : lib3.Expression {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : lib3.TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        return this.buildCompoundAssignment(binaryOperator,new lib3.IntLiteral(1),{
            offset : offset,voidContext : voidContext,interfaceTarget : interfaceTarget});
    }
    buildPostfixIncrement(binaryOperator : lib3.Name,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : lib3.Procedure}) : lib3.Expression {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : lib3.TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        if (voidContext) {
            return this.buildPrefixIncrement(binaryOperator,{
                offset : offset,voidContext : true,interfaceTarget : interfaceTarget});
        }
        let value = new lib3.VariableDeclaration.forValue(this._makeRead());
        var valueAccess : () => any = () =>  {
            return new lib3.VariableGet(value);
        };
        let dummy = new lib3.VariableDeclaration.forValue(this._makeWrite(this.builtBinary = makeBinary(valueAccess(),binaryOperator,interfaceTarget,new lib3.IntLiteral(1),{
            offset : offset}),true));
        return this._finish(makeLet(value,makeLet(dummy,valueAccess())));
    }
    _makeSimpleRead() : lib3.Expression {
        return this._makeRead();
    }
    _makeSimpleWrite(value : lib3.Expression,voidContext : boolean) : lib3.Expression {
        return this._makeWrite(value,voidContext);
    }
    @Abstract
    _makeRead() : lib3.Expression{ throw 'abstract'}
    @Abstract
    _makeWrite(value : lib3.Expression,voidContext : boolean) : lib3.Expression{ throw 'abstract'}
    _finish(body : lib3.Expression) : lib3.Expression {
        return body;
    }
    makeInvalidRead() {
        return new lib3.InvalidExpression();
    }
    makeInvalidWrite(value : lib3.Expression) {
        return wrapInvalid(value);
    }
}

export namespace VariableAccessor {
    export type Constructors = Accessor.Constructors | 'VariableAccessor';
    export type Interface = Omit<VariableAccessor, Constructors>;
}
@DartClass
export class VariableAccessor extends Accessor {
    variable : lib3.VariableDeclaration;

    promotedType : lib3.DartType;

    constructor(variable : lib3.VariableDeclaration,promotedType : lib3.DartType,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableAccessor(variable : lib3.VariableDeclaration,promotedType : lib3.DartType,offset : number) {
        super.Accessor(offset);
        this.variable = variable;
        this.promotedType = promotedType;
    }
    _makeRead() {
        return ((_) : lib3.VariableGet =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(new lib3.VariableGet(this.variable,this.promotedType));
    }
    _makeWrite(value : lib3.Expression,voidContext : boolean) {
        return ((_) : any =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(this.variable.isFinal || this.variable.isConst ? this.makeInvalidWrite(value) : new lib3.VariableSet(this.variable,value));
    }
}

export namespace PropertyAccessor {
    export type Constructors = Accessor.Constructors | 'internal';
    export type Interface = Omit<PropertyAccessor, Constructors>;
}
@DartClass
export class PropertyAccessor extends Accessor {
    _receiverVariable : lib3.VariableDeclaration;

    receiver : lib3.Expression;

    name : lib3.Name;

    getter : lib3.Member;
    setter : lib3.Member;

    static make(receiver : lib3.Expression,name : lib3.Name,getter : lib3.Member,setter : lib3.Member,_namedArguments? : {offset? : number}) : Accessor {
        let {offset} = Object.assign({
            "offset" : lib3.TreeNode.noOffset}, _namedArguments );
        if (is(receiver, lib3.ThisExpression)) {
            return new ThisPropertyAccessor(name,getter,setter,offset);
        }else {
            return new PropertyAccessor.internal(receiver,name,getter,setter,offset);
        }
    }
    @namedConstructor
    internal(receiver : lib3.Expression,name : lib3.Name,getter : lib3.Member,setter : lib3.Member,offset : number) {
        super.Accessor(offset);
        this.receiver = receiver;
        this.name = name;
        this.getter = getter;
        this.setter = setter;
    }
    static internal : new(receiver : lib3.Expression,name : lib3.Name,getter : lib3.Member,setter : lib3.Member,offset : number) => PropertyAccessor;

    _makeSimpleRead() {
        return ((_) : lib3.PropertyGet =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(new lib3.PropertyGet(this.receiver,this.name,this.getter));
    }
    _makeSimpleWrite(value : lib3.Expression,voidContext : boolean) {
        return ((_) : lib3.PropertySet =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(new lib3.PropertySet(this.receiver,this.name,value,this.setter));
    }
    receiverAccess() {
        this._receiverVariable = ( this._receiverVariable ) || ( new lib3.VariableDeclaration.forValue(this.receiver) );
        return ((_) : lib3.VariableGet =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(new lib3.VariableGet(this._receiverVariable));
    }
    _makeRead() {
        return this.builtGetter = ((_) : lib3.PropertyGet =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(new lib3.PropertyGet(this.receiverAccess(),this.name,this.getter));
    }
    _makeWrite(value : lib3.Expression,voidContext : boolean) {
        return ((_) : lib3.PropertySet =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(new lib3.PropertySet(this.receiverAccess(),this.name,value,this.setter));
    }
    _finish(body : lib3.Expression) {
        return makeLet(this._receiverVariable,body);
    }
}

export namespace ThisPropertyAccessor {
    export type Constructors = Accessor.Constructors | 'ThisPropertyAccessor';
    export type Interface = Omit<ThisPropertyAccessor, Constructors>;
}
@DartClass
export class ThisPropertyAccessor extends Accessor {
    name : lib3.Name;

    getter : lib3.Member;
    setter : lib3.Member;

    constructor(name : lib3.Name,getter : lib3.Member,setter : lib3.Member,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ThisPropertyAccessor(name : lib3.Name,getter : lib3.Member,setter : lib3.Member,offset : number) {
        super.Accessor(offset);
        this.name = name;
        this.getter = getter;
        this.setter = setter;
    }
    _makeRead() {
        return this.builtGetter = ((_) : lib3.PropertyGet =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(new lib3.PropertyGet(new lib3.ThisExpression(),this.name,this.getter));
    }
    _makeWrite(value : lib3.Expression,voidContext : boolean) {
        return ((_) : lib3.PropertySet =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(new lib3.PropertySet(new lib3.ThisExpression(),this.name,value,this.setter));
    }
}

export namespace NullAwarePropertyAccessor {
    export type Constructors = Accessor.Constructors | 'NullAwarePropertyAccessor';
    export type Interface = Omit<NullAwarePropertyAccessor, Constructors>;
}
@DartClass
export class NullAwarePropertyAccessor extends Accessor {
    receiver : lib3.VariableDeclaration;

    name : lib3.Name;

    getter : lib3.Member;
    setter : lib3.Member;

    type : lib3.DartType;

    constructor(receiver : lib3.Expression,name : lib3.Name,getter : lib3.Member,setter : lib3.Member,type : lib3.DartType,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NullAwarePropertyAccessor(receiver : lib3.Expression,name : lib3.Name,getter : lib3.Member,setter : lib3.Member,type : lib3.DartType,offset : number) {
        this.receiver = makeOrReuseVariable(receiver);
        super.Accessor(offset);
        this.name = name;
        this.getter = getter;
        this.setter = setter;
        this.type = type;
    }
    receiverAccess() {
        return new lib3.VariableGet(this.receiver);
    }
    _makeRead() {
        return this.builtGetter = new lib3.PropertyGet(this.receiverAccess(),this.name,this.getter);
    }
    _makeWrite(value : lib3.Expression,voidContext : boolean) {
        return new lib3.PropertySet(this.receiverAccess(),this.name,value,this.setter);
    }
    _finish(body : lib3.Expression) {
        return makeLet(this.receiver,new lib3.ConditionalExpression(buildIsNull(this.receiverAccess()),new lib3.NullLiteral(),body,this.type));
    }
}

export namespace SuperPropertyAccessor {
    export type Constructors = Accessor.Constructors | 'SuperPropertyAccessor';
    export type Interface = Omit<SuperPropertyAccessor, Constructors>;
}
@DartClass
export class SuperPropertyAccessor extends Accessor {
    name : lib3.Name;

    getter : lib3.Member;
    setter : lib3.Member;

    constructor(name : lib3.Name,getter : lib3.Member,setter : lib3.Member,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SuperPropertyAccessor(name : lib3.Name,getter : lib3.Member,setter : lib3.Member,offset : number) {
        super.Accessor(offset);
        this.name = name;
        this.getter = getter;
        this.setter = setter;
    }
    _makeRead() {
        if (op(Op.EQUALS,this.getter,null)) return this.makeInvalidRead();
        return this.builtGetter = ((_) : lib3.SuperPropertyGet =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(new lib3.SuperPropertyGet(this.name,this.getter));
    }
    _makeWrite(value : lib3.Expression,voidContext : boolean) {
        if (op(Op.EQUALS,this.setter,null)) return this.makeInvalidWrite(value);
        return ((_) : lib3.SuperPropertySet =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(new lib3.SuperPropertySet(this.name,value,this.setter));
    }
}

export namespace IndexAccessor {
    export type Constructors = Accessor.Constructors | 'internal';
    export type Interface = Omit<IndexAccessor, Constructors>;
}
@DartClass
export class IndexAccessor extends Accessor {
    receiver : lib3.Expression;

    index : lib3.Expression;

    receiverVariable : lib3.VariableDeclaration;

    indexVariable : lib3.VariableDeclaration;

    getter : lib3.Procedure;
    setter : lib3.Procedure;

    static make(receiver : lib3.Expression,index : lib3.Expression,getter : lib3.Procedure,setter : lib3.Procedure,_namedArguments? : {offset? : number}) : Accessor {
        let {offset} = Object.assign({
            "offset" : lib3.TreeNode.noOffset}, _namedArguments );
        if (is(receiver, lib3.ThisExpression)) {
            return new ThisIndexAccessor(index,getter,setter,offset);
        }else {
            return new IndexAccessor.internal(receiver,index,getter,setter,offset);
        }
    }
    @namedConstructor
    internal(receiver : lib3.Expression,index : lib3.Expression,getter : lib3.Procedure,setter : lib3.Procedure,offset : number) {
        super.Accessor(offset);
        this.receiver = receiver;
        this.index = index;
        this.getter = getter;
        this.setter = setter;
    }
    static internal : new(receiver : lib3.Expression,index : lib3.Expression,getter : lib3.Procedure,setter : lib3.Procedure,offset : number) => IndexAccessor;

    _makeSimpleRead() {
        return ((_) : lib3.MethodInvocation =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(new lib3.MethodInvocation(this.receiver,properties.indexGetName,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(this.index)),this.getter));
    }
    _makeSimpleWrite(value : lib3.Expression,voidContext : boolean) {
        if (!voidContext) return this._makeWriteAndReturn(value);
        return ((_) : lib3.MethodInvocation =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(new lib3.MethodInvocation(this.receiver,properties.indexSetName,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(this.index,value)),this.setter));
    }
    receiverAccess() {
        this.receiverVariable = ( this.receiverVariable ) || ( new lib3.VariableDeclaration.forValue(this.receiver) );
        return ((_) : lib3.VariableGet =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(new lib3.VariableGet(this.receiverVariable));
    }
    indexAccess() {
        this.indexVariable = ( this.indexVariable ) || ( new lib3.VariableDeclaration.forValue(this.index) );
        return ((_) : lib3.VariableGet =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(new lib3.VariableGet(this.indexVariable));
    }
    _makeRead() {
        return this.builtGetter = ((_) : lib3.MethodInvocation =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(new lib3.MethodInvocation(this.receiverAccess(),properties.indexGetName,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(this.indexAccess())),this.getter));
    }
    _makeWrite(value : lib3.Expression,voidContext : boolean) {
        if (!voidContext) return this._makeWriteAndReturn(value);
        return ((_) : lib3.MethodInvocation =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(new lib3.MethodInvocation(this.receiverAccess(),properties.indexSetName,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(this.indexAccess(),value)),this.setter));
    }
    _makeWriteAndReturn(value : lib3.Expression) {
        let valueVariable = new lib3.VariableDeclaration.forValue(value);
        let dummy = new lib3.VariableDeclaration.forValue(((_) : lib3.MethodInvocation =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(new lib3.MethodInvocation(this.receiverAccess(),properties.indexSetName,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(this.indexAccess(),new lib3.VariableGet(valueVariable))),this.setter)));
        return makeLet(valueVariable,makeLet(dummy,new lib3.VariableGet(valueVariable)));
    }
    _finish(body : lib3.Expression) : lib3.Expression {
        return makeLet(this.receiverVariable,makeLet(this.indexVariable,body));
    }
}

export namespace ThisIndexAccessor {
    export type Constructors = Accessor.Constructors | 'ThisIndexAccessor';
    export type Interface = Omit<ThisIndexAccessor, Constructors>;
}
@DartClass
export class ThisIndexAccessor extends Accessor {
    index : lib3.Expression;

    indexVariable : lib3.VariableDeclaration;

    getter : lib3.Procedure;
    setter : lib3.Procedure;

    constructor(index : lib3.Expression,getter : lib3.Procedure,setter : lib3.Procedure,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ThisIndexAccessor(index : lib3.Expression,getter : lib3.Procedure,setter : lib3.Procedure,offset : number) {
        super.Accessor(offset);
        this.index = index;
        this.getter = getter;
        this.setter = setter;
    }
    _makeSimpleRead() {
        return new lib3.MethodInvocation(new lib3.ThisExpression(),properties.indexGetName,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(this.index)),this.getter);
    }
    _makeSimpleWrite(value : lib3.Expression,voidContext : boolean) {
        if (!voidContext) return this._makeWriteAndReturn(value);
        return new lib3.MethodInvocation(new lib3.ThisExpression(),properties.indexSetName,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(this.index,value)),this.setter);
    }
    indexAccess() {
        this.indexVariable = ( this.indexVariable ) || ( new lib3.VariableDeclaration.forValue(this.index) );
        return new lib3.VariableGet(this.indexVariable);
    }
    _makeRead() {
        return this.builtGetter = new lib3.MethodInvocation(new lib3.ThisExpression(),properties.indexGetName,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(this.indexAccess())),this.getter);
    }
    _makeWrite(value : lib3.Expression,voidContext : boolean) {
        if (!voidContext) return this._makeWriteAndReturn(value);
        return new lib3.MethodInvocation(new lib3.ThisExpression(),properties.indexSetName,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(this.indexAccess(),value)),this.setter);
    }
    _makeWriteAndReturn(value : lib3.Expression) {
        let valueVariable = new lib3.VariableDeclaration.forValue(value);
        let dummy = new lib3.VariableDeclaration.forValue(new lib3.MethodInvocation(new lib3.ThisExpression(),properties.indexSetName,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(this.indexAccess(),new lib3.VariableGet(valueVariable))),this.setter));
        return makeLet(valueVariable,makeLet(dummy,new lib3.VariableGet(valueVariable)));
    }
    _finish(body : lib3.Expression) : lib3.Expression {
        return makeLet(this.indexVariable,body);
    }
}

export namespace SuperIndexAccessor {
    export type Constructors = Accessor.Constructors | 'SuperIndexAccessor';
    export type Interface = Omit<SuperIndexAccessor, Constructors>;
}
@DartClass
export class SuperIndexAccessor extends Accessor {
    index : lib3.Expression;

    indexVariable : lib3.VariableDeclaration;

    getter : lib3.Member;
    setter : lib3.Member;

    constructor(index : lib3.Expression,getter : lib3.Member,setter : lib3.Member,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SuperIndexAccessor(index : lib3.Expression,getter : lib3.Member,setter : lib3.Member,offset : number) {
        super.Accessor(offset);
        this.index = index;
        this.getter = getter;
        this.setter = setter;
    }
    indexAccess() {
        this.indexVariable = ( this.indexVariable ) || ( new lib3.VariableDeclaration.forValue(this.index) );
        return new lib3.VariableGet(this.indexVariable);
    }
    _makeSimpleRead() {
        return new lib3.SuperMethodInvocation(properties.indexGetName,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(this.index)),this.getter);
    }
    _makeSimpleWrite(value : lib3.Expression,voidContext : boolean) {
        if (!voidContext) return this._makeWriteAndReturn(value);
        return new lib3.SuperMethodInvocation(properties.indexSetName,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(this.index,value)),this.setter);
    }
    _makeRead() {
        return this.builtGetter = new lib3.SuperMethodInvocation(properties.indexGetName,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(this.indexAccess())),this.getter);
    }
    _makeWrite(value : lib3.Expression,voidContext : boolean) {
        if (!voidContext) return this._makeWriteAndReturn(value);
        return new lib3.SuperMethodInvocation(properties.indexSetName,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(this.indexAccess(),value)),this.setter);
    }
    _makeWriteAndReturn(value : lib3.Expression) {
        let valueVariable = new lib3.VariableDeclaration.forValue(value);
        let dummy = new lib3.VariableDeclaration.forValue(new lib3.SuperMethodInvocation(properties.indexSetName,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(this.indexAccess(),new lib3.VariableGet(valueVariable))),this.setter));
        return makeLet(valueVariable,makeLet(dummy,new lib3.VariableGet(valueVariable)));
    }
    _finish(body : lib3.Expression) : lib3.Expression {
        return makeLet(this.indexVariable,body);
    }
}

export namespace StaticAccessor {
    export type Constructors = Accessor.Constructors | 'StaticAccessor';
    export type Interface = Omit<StaticAccessor, Constructors>;
}
@DartClass
export class StaticAccessor extends Accessor {
    readTarget : lib3.Member;

    writeTarget : lib3.Member;

    constructor(readTarget : lib3.Member,writeTarget : lib3.Member,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StaticAccessor(readTarget : lib3.Member,writeTarget : lib3.Member,offset : number) {
        super.Accessor(offset);
        this.readTarget = readTarget;
        this.writeTarget = writeTarget;
    }
    _makeRead() {
        return this.builtGetter = ((_) : any =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(op(Op.EQUALS,this.readTarget,null) ? this.makeInvalidRead() : new lib3.StaticGet(this.readTarget));
    }
    _makeWrite(value : lib3.Expression,voidContext : boolean) {
        return ((_) : any =>  {
            {
                _.fileOffset = this.offset;
                return _;
            }
        })(op(Op.EQUALS,this.writeTarget,null) ? this.makeInvalidWrite(value) : new lib3.StaticSet(this.writeTarget,value));
    }
}

export namespace ReadOnlyAccessor {
    export type Constructors = Accessor.Constructors | 'ReadOnlyAccessor';
    export type Interface = Omit<ReadOnlyAccessor, Constructors>;
}
@DartClass
export class ReadOnlyAccessor extends Accessor {
    expression : lib3.Expression;

    value : lib3.VariableDeclaration;

    constructor(expression : lib3.Expression,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ReadOnlyAccessor(expression : lib3.Expression,offset : number) {
        super.Accessor(offset);
        this.expression = expression;
    }
    _makeSimpleRead() {
        return this.expression;
    }
    _makeRead() {
        this.value = ( this.value ) || ( new lib3.VariableDeclaration.forValue(this.expression) );
        return new lib3.VariableGet(this.value);
    }
    _makeWrite(value : lib3.Expression,voidContext : boolean) {
        return this.makeInvalidWrite(value);
    }
    _finish(body : lib3.Expression) : lib3.Expression {
        return makeLet(this.value,body);
    }
}

export class properties {
    private static __$indexGetName : lib3.Name;
    static get indexGetName() : lib3.Name { 
        if (this.__$indexGetName===undefined) {
            this.__$indexGetName = new lib3.Name("[]");
        }
        return this.__$indexGetName;
    }
    static set indexGetName(__$value : lib3.Name)  { 
        this.__$indexGetName = __$value;
    }

    private static __$indexSetName : lib3.Name;
    static get indexSetName() : lib3.Name { 
        if (this.__$indexSetName===undefined) {
            this.__$indexSetName = new lib3.Name("[]=");
        }
        return this.__$indexSetName;
    }
    static set indexSetName(__$value : lib3.Name)  { 
        this.__$indexSetName = __$value;
    }

    private static __$_equalOperator : lib3.Name;
    static get _equalOperator() : lib3.Name { 
        if (this.__$_equalOperator===undefined) {
            this.__$_equalOperator = new lib3.Name('==');
        }
        return this.__$_equalOperator;
    }
    static set _equalOperator(__$value : lib3.Name)  { 
        this.__$_equalOperator = __$value;
    }

}
