/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/closure/context.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../ast";
import * as lib4 from "./../../frontend/accessors";
import * as lib5 from "./converter";

export namespace Context {
    export type Constructors = 'Context';
    export type Interface = Omit<Context, Constructors>;
}
@DartClass
export class Context {
    @AbstractProperty
    get expression() : lib3.Expression{ throw 'abstract'}
    @AbstractProperty
    get accessor() : lib4.Accessor{ throw 'abstract'}
    @Abstract
    extend(variable : lib3.VariableDeclaration,value : lib3.Expression) : void{ throw 'abstract'}
    update(variable : lib3.VariableDeclaration,value : lib3.Expression) : void {
        throw `not supported ${this.runtimeType}`;
    }
    @Abstract
    lookup(variable : lib3.VariableDeclaration) : lib3.Expression{ throw 'abstract'}
    @Abstract
    assign(variable : lib3.VariableDeclaration,value : lib3.Expression,_namedArguments? : {voidContext? : boolean}) : lib3.Expression{ throw 'abstract'}
    @Abstract
    toNestedContext(accessor? : lib4.Accessor) : Context{ throw 'abstract'}
    clone() : lib3.Expression {
        return new lib3.Throw(new lib3.StringLiteral(`Context clone not implemented for ${this.runtimeType}`));
    }
    constructor() {
    }
    @defaultConstructor
    Context() {
    }
}

export namespace NoContext {
    export type Constructors = Context.Constructors | 'NoContext';
    export type Interface = Omit<NoContext, Constructors>;
}
@DartClass
export class NoContext extends Context {
    converter : lib5.ClosureConverter;

    constructor(converter : lib5.ClosureConverter) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NoContext(converter : lib5.ClosureConverter) {
        this.converter = converter;
    }
    get expression() : lib3.Expression {
        return new lib3.NullLiteral();
    }
    get accessor() : lib4.Accessor {
        return null;
    }
    extend(variable : lib3.VariableDeclaration,value : lib3.Expression) : void {
        this.converter.context = ((_) : LocalContext =>  {
            {
                _.extend(variable,value);
                return _;
            }
        })(new LocalContext(this.converter,this));
    }
    lookup(variable : lib3.VariableDeclaration) : lib3.Expression {
        throw `Unbound NoContext.lookup(${variable})`;
    }
    assign(variable : lib3.VariableDeclaration,value : lib3.Expression,_namedArguments? : {voidContext? : boolean}) : lib3.Expression {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        throw `Unbound NoContext.assign(${variable}, ...)`;
    }
    toNestedContext(accessor? : lib4.Accessor) : Context {
        return new NestedContext(this.converter,accessor,new core.DartList.literal<core.DartList<lib3.VariableDeclaration>>());
    }
}

export namespace LocalContext {
    export type Constructors = Context.Constructors | '_internal';
    export type Interface = Omit<LocalContext, Constructors>;
}
@DartClass
export class LocalContext extends Context {
    converter : lib5.ClosureConverter;

    parent : Context;

    self : lib3.VariableDeclaration;

    vectorCreation : lib3.VectorCreation;

    variables : core.DartList<lib3.VariableDeclaration>;

    initializers : core.DartMap<lib3.VariableDeclaration,lib3.VectorSet>;

    @namedConstructor
    _internal(converter : lib5.ClosureConverter,parent : Context,self : lib3.VariableDeclaration,vectorCreation : lib3.VectorCreation) {
        this.variables = new core.DartList.literal<lib3.VariableDeclaration>();
        this.initializers = new core.DartMap.literal([
        ]);
        this.converter = converter;
        this.parent = parent;
        this.self = self;
        this.vectorCreation = vectorCreation;
    }
    static _internal : new(converter : lib5.ClosureConverter,parent : Context,self : lib3.VariableDeclaration,vectorCreation : lib3.VectorCreation) => LocalContext;

    constructor(converter : lib5.ClosureConverter,parent : Context) {
        // @ts-ignore
        super();
    }
    @defaultFactory
    static $LocalContext(converter : lib5.ClosureConverter,parent : Context) : LocalContext {
        let contextClass : lib3.Class = converter.contextClass;
        /* TODO (AssertStatementImpl) : assert (contextClass.constructors.length == 1); */;
        converter.rewriter.insertContextDeclaration(parent.expression);
        return new LocalContext._internal(converter,parent,converter.rewriter.contextDeclaration,converter.rewriter.vectorCreation);
    }
    get expression() : lib3.Expression {
        return this.accessor.buildSimpleRead();
    }
    get accessor() : lib4.Accessor {
        return new lib4.VariableAccessor(this.self,null,lib3.TreeNode.noOffset);
    }
    extend(variable : lib3.VariableDeclaration,value : lib3.Expression) : void {
        let initializer : lib3.VectorSet = new lib3.VectorSet(this.expression,this.variables.length + 1,value);
        value.parent = initializer;
        this.converter.rewriter.insertExtendContext(initializer);
        ++this.vectorCreation.length;
        this.variables.add(variable);
        this.initializers.set(variable,initializer);
    }
    update(variable : lib3.VariableDeclaration,value : lib3.Expression) : void {
        let initializer : lib3.VectorSet = this.initializers.get(variable);
        initializer.value = value;
        value.parent = initializer;
    }
    lookup(variable : lib3.VariableDeclaration) : lib3.Expression {
        let index = this.variables.indexOf(variable);
        return index == -1 ? this.parent.lookup(variable) : new lib3.VectorGet(this.expression,index + 1);
    }
    assign(variable : lib3.VariableDeclaration,value : lib3.Expression,_namedArguments? : {voidContext? : boolean}) : lib3.Expression {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        let index = this.variables.indexOf(variable);
        return index == -1 ? this.parent.assign(variable,value,{
            voidContext : voidContext}) : new lib3.VectorSet(this.expression,index + 1,value);
    }
    toNestedContext(accessor? : lib4.Accessor) : Context {
        accessor = ( accessor ) || ( this.accessor );
        let variabless : core.DartList<core.DartList<lib3.VariableDeclaration>> = new core.DartList.literal<core.DartList<lib3.VariableDeclaration>>();
        let current = this;
        while (current != null && isNot(current, NoContext)){
            if (is(current, LocalContext)) {
                variabless.add(current.variables);
                current = current.parent;
            }else if (is(current, NestedContext)) {
                variabless.addAll((current as NestedContext).variabless);
                current = null;
            }
        }
        return new NestedContext(this.converter,accessor,variabless);
    }
    clone() : lib3.Expression {
        this.self.isFinal = false;
        return new lib3.VariableSet(this.self,new lib3.VectorCopy(new lib3.VariableGet(this.self)));
    }
}

export namespace NestedContext {
    export type Constructors = Context.Constructors | 'NestedContext';
    export type Interface = Omit<NestedContext, Constructors>;
}
@DartClass
export class NestedContext extends Context {
    converter : lib5.ClosureConverter;

    accessor : lib4.Accessor;

    variabless : core.DartList<core.DartList<lib3.VariableDeclaration>>;

    constructor(converter : lib5.ClosureConverter,accessor : lib4.Accessor,variabless : core.DartList<core.DartList<lib3.VariableDeclaration>>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NestedContext(converter : lib5.ClosureConverter,accessor : lib4.Accessor,variabless : core.DartList<core.DartList<lib3.VariableDeclaration>>) {
        this.converter = converter;
        this.accessor = accessor;
        this.variabless = variabless;
    }
    get expression() : lib3.Expression {
        return (((_698_)=>(!!_698_)?_698_.buildSimpleRead():null)(this.accessor) || new lib3.NullLiteral());
    }
    extend(variable : lib3.VariableDeclaration,value : lib3.Expression) : void {
        this.converter.context = ((_) : LocalContext =>  {
            {
                _.extend(variable,value);
                return _;
            }
        })(new LocalContext(this.converter,this));
    }
    lookup(variable : lib3.VariableDeclaration) : lib3.Expression {
        let context : lib3.Expression = this.expression;
        for(let variables of this.variabless) {
            let index = variables.indexOf(variable);
            if (index != -1) {
                return new lib3.VectorGet(context,index + 1);
            }
            context = new lib3.VectorGet(context,0);
        }
        throw `Unbound NestedContext.lookup(${variable})`;
    }
    assign(variable : lib3.VariableDeclaration,value : lib3.Expression,_namedArguments? : {voidContext? : boolean}) : lib3.Expression {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        let context : lib3.Expression = this.expression;
        for(let variables of this.variabless) {
            let index = variables.indexOf(variable);
            if (index != -1) {
                return new lib3.VectorSet(context,index + 1,value);
            }
            context = new lib3.VectorGet(context,0);
        }
        throw `Unbound NestedContext.lookup(${variable})`;
    }
    toNestedContext(accessor? : lib4.Accessor) : Context {
        return new NestedContext(this.converter,(accessor || this.accessor),this.variabless);
    }
}

export class properties {
}
