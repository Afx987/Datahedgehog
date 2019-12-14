/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/DeltaBlue.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    new DeltaBlue().run();
};
export var chainTest : (n : number) => void = (n : number) : void =>  {
    properties.planner = new Planner();
    let prev : Variable = null, first : Variable = null, last : Variable = null;
    for(let i : number = 0; i <= n; i++){
        let v : Variable = new Variable(`v${i}`,0);
        if (prev != null) new EqualityConstraint(prev,v,properties.REQUIRED);
        if (i == 0) first = v;
        if (i == n) last = v;
        prev = v;
    }
    new StayConstraint(last,properties.STRONG_DEFAULT);
    let edit : EditConstraint = new EditConstraint(first,properties.PREFERRED);
    let plan : Plan = properties.planner.extractPlanFromConstraints(new core.DartList.literal<Constraint>(edit));
    for(let i : number = 0; i < 100; i++){
        first.value = i;
        plan.execute();
        if (last.value != i) {
            core.print("Chain test failed:");
            core.print(`Expected last value to be ${i} but it was ${last.value}.`);
        }
    }
};
export var projectionTest : (n : number) => void = (n : number) : void =>  {
    properties.planner = new Planner();
    let scale : Variable = new Variable("scale",10);
    let offset : Variable = new Variable("offset",1000);
    let src : Variable = null, dst : Variable = null;
    let dests : core.DartList<Variable> = new core.DartList.literal<Variable>();
    for(let i : number = 0; i < n; i++){
        src = new Variable("src",i);
        dst = new Variable("dst",i);
        dests.add(dst);
        new StayConstraint(src,properties.NORMAL);
        new ScaleConstraint(src,scale,offset,dst,properties.REQUIRED);
    }
    change(src,17);
    if (dst.value != 1170) core.print("Projection 1 failed");
    change(dst,1050);
    if (src.value != 5) core.print("Projection 2 failed");
    change(scale,5);
    for(let i : number = 0; i < n - 1; i++){
        if (dests[i].value != i * 5 + 1000) core.print("Projection 3 failed");
    }
    change(offset,2000);
    for(let i : number = 0; i < n - 1; i++){
        if (dests[i].value != i * 5 + 2000) core.print("Projection 4 failed");
    }
};
export var change : (v : Variable,newValue : number) => void = (v : Variable,newValue : number) : void =>  {
    let edit : EditConstraint = new EditConstraint(v,properties.PREFERRED);
    let plan : Plan = properties.planner.extractPlanFromConstraints(new core.DartList.literal<EditConstraint>(edit));
    for(let i : number = 0; i < 10; i++){
        v.value = newValue;
        plan.execute();
    }
    edit.destroyConstraint();
};
export namespace DeltaBlue {
    export type Constructors = 'DeltaBlue';
    export type Interface = Omit<DeltaBlue, Constructors>;
}
@DartClass
export class DeltaBlue {
    run() : void {
        chainTest(100);
        projectionTest(100);
    }
    constructor() {
    }
    @defaultConstructor
    DeltaBlue() {
    }
}

export namespace Strength {
    export type Constructors = 'Strength';
    export type Interface = Omit<Strength, Constructors>;
}
@DartClass
export class Strength {
    value : number;

    name : string;

    constructor(value : number,name : string) {
    }
    @defaultConstructor
    Strength(value : number,name : string) {
        this.value = value;
        this.name = name;
    }
    nextWeaker() : Strength {
        return new core.DartList.literal<Strength>(properties.STRONG_PREFERRED,properties.PREFERRED,properties.STRONG_DEFAULT,properties.NORMAL,properties.WEAK_DEFAULT,properties.WEAKEST)[this.value];
    }
    static stronger(s1 : Strength,s2 : Strength) : boolean {
        return s1.value < s2.value;
    }
    static weaker(s1 : Strength,s2 : Strength) : boolean {
        return s1.value > s2.value;
    }
    static weakest(s1 : Strength,s2 : Strength) : Strength {
        return Strength.weaker(s1,s2) ? s1 : s2;
    }
    static strongest(s1 : Strength,s2 : Strength) : Strength {
        return Strength.stronger(s1,s2) ? s1 : s2;
    }
}

export namespace Constraint {
    export type Constructors = 'Constraint';
    export type Interface = Omit<Constraint, Constructors>;
}
@DartClass
export class Constraint {
    strength : Strength;

    constructor(strength : Strength) {
    }
    @defaultConstructor
    Constraint(strength : Strength) {
        this.strength = strength;
    }
    @Abstract
    isSatisfied() : boolean{ throw 'abstract'}
    @Abstract
    markUnsatisfied() : void{ throw 'abstract'}
    @Abstract
    addToGraph() : void{ throw 'abstract'}
    @Abstract
    removeFromGraph() : void{ throw 'abstract'}
    @Abstract
    chooseMethod(mark : number) : void{ throw 'abstract'}
    @Abstract
    markInputs(mark : number) : void{ throw 'abstract'}
    @Abstract
    inputsKnown(mark : number) : boolean{ throw 'abstract'}
    @Abstract
    output() : Variable{ throw 'abstract'}
    @Abstract
    execute() : void{ throw 'abstract'}
    @Abstract
    recalculate() : void{ throw 'abstract'}
    addConstraint() : void {
        this.addToGraph();
        properties.planner.incrementalAdd(this);
    }
    satisfy(mark : any) : Constraint {
        this.chooseMethod(mark);
        if (!this.isSatisfied()) {
            if (op(Op.EQUALS,this.strength,properties.REQUIRED)) {
                core.print("Could not satisfy a required constraint!");
            }
            return null;
        }
        this.markInputs(mark);
        let out : Variable = this.output();
        let overridden : Constraint = out.determinedBy;
        if (overridden != null) overridden.markUnsatisfied();
        out.determinedBy = this;
        if (!properties.planner.addPropagate(this,mark)) core.print("Cycle encountered");
        out.mark = mark;
        return overridden;
    }
    destroyConstraint() : void {
        if (this.isSatisfied()) properties.planner.incrementalRemove(this);
        this.removeFromGraph();
    }
    isInput() : boolean {
        return false;
    }
}

export namespace Variable {
    export type Constructors = 'Variable';
    export type Interface = Omit<Variable, Constructors>;
}
@DartClass
export class Variable {
    constraints : core.DartList<Constraint>;

    determinedBy : Constraint;

    mark : number;

    walkStrength : Strength;

    stay : boolean;

    value : number;

    name : string;

    constructor(name : string,value : number) {
    }
    @defaultConstructor
    Variable(name : string,value : number) {
        this.constraints = new core.DartList.literal<Constraint>();
        this.mark = 0;
        this.walkStrength = properties.WEAKEST;
        this.stay = true;
        this.name = name;
        this.value = value;
    }
    addConstraint(c : Constraint) : void {
        this.constraints.add(c);
    }
    removeConstraint(c : Constraint) : void {
        this.constraints.remove(c);
        if (op(Op.EQUALS,this.determinedBy,c)) this.determinedBy = null;
    }
}

export namespace Planner {
    export type Constructors = 'Planner';
    export type Interface = Omit<Planner, Constructors>;
}
@DartClass
export class Planner {
    currentMark : number;

    incrementalAdd(c : Constraint) : void {
        let mark : number = this.newMark();
        for(let overridden : Constraint = c.satisfy(mark); overridden != null; overridden = overridden.satisfy(mark))/* TODO (EmptyStatementImpl) : ; */;
    }
    incrementalRemove(c : Constraint) : void {
        let out : Variable = c.output();
        c.markUnsatisfied();
        c.removeFromGraph();
        let unsatisfied : core.DartList<Constraint> = this.removePropagateFrom(out);
        let strength : Strength = properties.REQUIRED;
        do{
            for(let i : number = 0; i < unsatisfied.length; i++){
                let u : Constraint = unsatisfied[i];
                if (op(Op.EQUALS,u.strength,strength)) this.incrementalAdd(u);
            }
            strength = strength.nextWeaker();
        } while (strength != properties.WEAKEST);
    }
    newMark() : number {
        return ++this.currentMark;
    }
    makePlan(sources : core.DartList<Constraint>) : Plan {
        let mark : number = this.newMark();
        let plan : Plan = new Plan();
        let todo : core.DartList<Constraint> = sources;
        while (todo.length > 0){
            let c : Constraint = todo.removeLast();
            if (c.output().mark != mark && c.inputsKnown(mark)) {
                plan.addConstraint(c);
                c.output().mark = mark;
                this.addConstraintsConsumingTo(c.output(),todo);
            }
        }
        return plan;
    }
    extractPlanFromConstraints(constraints : core.DartList<Constraint>) : Plan {
        let sources : core.DartList<Constraint> = new core.DartList.literal<Constraint>();
        for(let i : number = 0; i < constraints.length; i++){
            let c : Constraint = constraints[i];
            if (c.isInput() && c.isSatisfied()) sources.add(c);
        }
        return this.makePlan(sources);
    }
    addPropagate(c : Constraint,mark : number) : boolean {
        let todo : core.DartList<Constraint> = new core.DartList.literal<Constraint>(c);
        while (todo.length > 0){
            let d : Constraint = todo.removeLast();
            if (d.output().mark == mark) {
                this.incrementalRemove(c);
                return false;
            }
            d.recalculate();
            this.addConstraintsConsumingTo(d.output(),todo);
        }
        return true;
    }
    removePropagateFrom(out : Variable) : core.DartList<Constraint> {
        out.determinedBy = null;
        out.walkStrength = properties.WEAKEST;
        out.stay = true;
        let unsatisfied : core.DartList<Constraint> = new core.DartList.literal<Constraint>();
        let todo : core.DartList<Variable> = new core.DartList.literal<Variable>(out);
        while (todo.length > 0){
            let v : Variable = todo.removeLast();
            for(let i : number = 0; i < v.constraints.length; i++){
                let c : Constraint = v.constraints[i];
                if (!c.isSatisfied()) unsatisfied.add(c);
            }
            let determining : Constraint = v.determinedBy;
            for(let i : number = 0; i < v.constraints.length; i++){
                let next : Constraint = v.constraints[i];
                if (next != determining && next.isSatisfied()) {
                    next.recalculate();
                    todo.add(next.output());
                }
            }
        }
        return unsatisfied;
    }
    addConstraintsConsumingTo(v : Variable,coll : core.DartList<Constraint>) : void {
        let determining : Constraint = v.determinedBy;
        for(let i : number = 0; i < v.constraints.length; i++){
            let c : Constraint = v.constraints[i];
            if (c != determining && c.isSatisfied()) coll.add(c);
        }
    }
    constructor() {
    }
    @defaultConstructor
    Planner() {
        this.currentMark = 0;
    }
}

export namespace Plan {
    export type Constructors = 'Plan';
    export type Interface = Omit<Plan, Constructors>;
}
@DartClass
export class Plan {
    list : core.DartList<Constraint>;

    addConstraint(c : Constraint) : void {
        this.list.add(c);
    }
    size() : number {
        return this.list.length;
    }
    execute() : void {
        for(let i : number = 0; i < this.list.length; i++){
            this.list[i].execute();
        }
    }
    constructor() {
    }
    @defaultConstructor
    Plan() {
        this.list = new core.DartList.literal<Constraint>();
    }
}

export namespace UnaryConstraint {
    export type Constructors = Constraint.Constructors | 'UnaryConstraint';
    export type Interface = Omit<UnaryConstraint, Constructors>;
}
@DartClass
export class UnaryConstraint extends Constraint {
    myOutput : Variable;

    satisfied : boolean;

    constructor(myOutput : Variable,strength : Strength) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UnaryConstraint(myOutput : Variable,strength : Strength) {
        this.satisfied = false;
        super.Constraint(strength);
        this.myOutput = myOutput;
        this.addConstraint();
    }
    addToGraph() : void {
        this.myOutput.addConstraint(this);
        this.satisfied = false;
    }
    chooseMethod(mark : number) : void {
        this.satisfied = (this.myOutput.mark != mark) && Strength.stronger(this.strength,this.myOutput.walkStrength);
    }
    isSatisfied() : boolean {
        return this.satisfied;
    }
    markInputs(mark : number) : void {
    }
    output() : Variable {
        return this.myOutput;
    }
    recalculate() : void {
        this.myOutput.walkStrength = this.strength;
        this.myOutput.stay = !this.isInput();
        if (this.myOutput.stay) this.execute();
    }
    markUnsatisfied() : void {
        this.satisfied = false;
    }
    inputsKnown(mark : number) : boolean {
        return true;
    }
    removeFromGraph() : void {
        if (this.myOutput != null) this.myOutput.removeConstraint(this);
        this.satisfied = false;
    }
}

export namespace BinaryConstraint {
    export type Constructors = Constraint.Constructors | 'BinaryConstraint';
    export type Interface = Omit<BinaryConstraint, Constructors>;
}
@DartClass
export class BinaryConstraint extends Constraint {
    v1 : Variable;

    v2 : Variable;

    direction : number;

    constructor(v1 : Variable,v2 : Variable,strength : Strength) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BinaryConstraint(v1 : Variable,v2 : Variable,strength : Strength) {
        this.direction = properties.NONE;
        super.Constraint(strength);
        this.v1 = v1;
        this.v2 = v2;
        this.addConstraint();
    }
    chooseMethod(mark : number) : void {
        if (this.v1.mark == mark) {
            this.direction = (this.v2.mark != mark && Strength.stronger(this.strength,this.v2.walkStrength)) ? properties.FORWARD : properties.NONE;
        }
        if (this.v2.mark == mark) {
            this.direction = (this.v1.mark != mark && Strength.stronger(this.strength,this.v1.walkStrength)) ? properties.BACKWARD : properties.NONE;
        }
        if (Strength.weaker(this.v1.walkStrength,this.v2.walkStrength)) {
            this.direction = Strength.stronger(this.strength,this.v1.walkStrength) ? properties.BACKWARD : properties.NONE;
        }else {
            this.direction = Strength.stronger(this.strength,this.v2.walkStrength) ? properties.FORWARD : properties.BACKWARD;
        }
    }
    addToGraph() : void {
        this.v1.addConstraint(this);
        this.v2.addConstraint(this);
        this.direction = properties.NONE;
    }
    isSatisfied() : boolean {
        return this.direction != properties.NONE;
    }
    markInputs(mark : number) : void {
        this.input().mark = mark;
    }
    input() : Variable {
        return this.direction == properties.FORWARD ? this.v1 : this.v2;
    }
    output() : Variable {
        return this.direction == properties.FORWARD ? this.v2 : this.v1;
    }
    recalculate() : void {
        let ihn : Variable = this.input(), out : Variable = this.output();
        out.walkStrength = Strength.weakest(this.strength,ihn.walkStrength);
        out.stay = ihn.stay;
        if (out.stay) this.execute();
    }
    markUnsatisfied() : void {
        this.direction = properties.NONE;
    }
    inputsKnown(mark : number) : boolean {
        let i : Variable = this.input();
        return i.mark == mark || i.stay || op(Op.EQUALS,i.determinedBy,null);
    }
    removeFromGraph() : void {
        if (this.v1 != null) this.v1.removeConstraint(this);
        if (this.v2 != null) this.v2.removeConstraint(this);
        this.direction = properties.NONE;
    }
}

export namespace StayConstraint {
    export type Constructors = UnaryConstraint.Constructors | 'StayConstraint';
    export type Interface = Omit<StayConstraint, Constructors>;
}
@DartClass
export class StayConstraint extends UnaryConstraint {
    constructor(v : Variable,str : Strength) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StayConstraint(v : Variable,str : Strength) {
        super.UnaryConstraint(v,str);
    }
    execute() : void {
    }
}

export namespace EditConstraint {
    export type Constructors = UnaryConstraint.Constructors | 'EditConstraint';
    export type Interface = Omit<EditConstraint, Constructors>;
}
@DartClass
export class EditConstraint extends UnaryConstraint {
    constructor(v : Variable,str : Strength) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EditConstraint(v : Variable,str : Strength) {
        super.UnaryConstraint(v,str);
    }
    isInput() : boolean {
        return true;
    }
    execute() : void {
    }
}

export namespace ScaleConstraint {
    export type Constructors = BinaryConstraint.Constructors | 'ScaleConstraint';
    export type Interface = Omit<ScaleConstraint, Constructors>;
}
@DartClass
export class ScaleConstraint extends BinaryConstraint {
    scale : Variable;

    offset : Variable;

    constructor(src : Variable,scale : Variable,offset : Variable,dest : Variable,strength : Strength) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScaleConstraint(src : Variable,scale : Variable,offset : Variable,dest : Variable,strength : Strength) {
        super.BinaryConstraint(src,dest,strength);
        this.scale = scale;
        this.offset = offset;
    }
    addToGraph() : void {
        super.addToGraph();
        this.scale.addConstraint(this);
        this.offset.addConstraint(this);
    }
    removeFromGraph() : void {
        super.removeFromGraph();
        if (this.scale != null) this.scale.removeConstraint(this);
        if (this.offset != null) this.offset.removeConstraint(this);
    }
    markInputs(mark : number) : void {
        super.markInputs(mark);
        this.scale.mark = this.offset.mark = mark;
    }
    execute() : void {
        if (this.direction == properties.FORWARD) {
            this.v2.value = this.v1.value * this.scale.value + this.offset.value;
        }else {
            this.v1.value = op(Op.QUOTIENT,(this.v2.value - this.offset.value),this.scale.value);
        }
    }
    recalculate() : void {
        let ihn : Variable = this.input(), out : Variable = this.output();
        out.walkStrength = Strength.weakest(this.strength,ihn.walkStrength);
        out.stay = ihn.stay && this.scale.stay && this.offset.stay;
        if (out.stay) this.execute();
    }
}

export namespace EqualityConstraint {
    export type Constructors = BinaryConstraint.Constructors | 'EqualityConstraint';
    export type Interface = Omit<EqualityConstraint, Constructors>;
}
@DartClass
export class EqualityConstraint extends BinaryConstraint {
    constructor(v1 : Variable,v2 : Variable,strength : Strength) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EqualityConstraint(v1 : Variable,v2 : Variable,strength : Strength) {
        super.BinaryConstraint(v1,v2,strength);
    }
    execute() : void {
        this.output().value = this.input().value;
    }
}

export class properties {
    private static __$REQUIRED;
    static get REQUIRED() { 
        if (this.__$REQUIRED===undefined) {
            this.__$REQUIRED = new Strength(0,"required");
        }
        return this.__$REQUIRED;
    }
    static set REQUIRED(__$value : any)  { 
        this.__$REQUIRED = __$value;
    }

    private static __$STRONG_PREFERRED;
    static get STRONG_PREFERRED() { 
        if (this.__$STRONG_PREFERRED===undefined) {
            this.__$STRONG_PREFERRED = new Strength(1,"strongPreferred");
        }
        return this.__$STRONG_PREFERRED;
    }
    static set STRONG_PREFERRED(__$value : any)  { 
        this.__$STRONG_PREFERRED = __$value;
    }

    private static __$PREFERRED;
    static get PREFERRED() { 
        if (this.__$PREFERRED===undefined) {
            this.__$PREFERRED = new Strength(2,"preferred");
        }
        return this.__$PREFERRED;
    }
    static set PREFERRED(__$value : any)  { 
        this.__$PREFERRED = __$value;
    }

    private static __$STRONG_DEFAULT;
    static get STRONG_DEFAULT() { 
        if (this.__$STRONG_DEFAULT===undefined) {
            this.__$STRONG_DEFAULT = new Strength(3,"strongDefault");
        }
        return this.__$STRONG_DEFAULT;
    }
    static set STRONG_DEFAULT(__$value : any)  { 
        this.__$STRONG_DEFAULT = __$value;
    }

    private static __$NORMAL;
    static get NORMAL() { 
        if (this.__$NORMAL===undefined) {
            this.__$NORMAL = new Strength(4,"normal");
        }
        return this.__$NORMAL;
    }
    static set NORMAL(__$value : any)  { 
        this.__$NORMAL = __$value;
    }

    private static __$WEAK_DEFAULT;
    static get WEAK_DEFAULT() { 
        if (this.__$WEAK_DEFAULT===undefined) {
            this.__$WEAK_DEFAULT = new Strength(5,"weakDefault");
        }
        return this.__$WEAK_DEFAULT;
    }
    static set WEAK_DEFAULT(__$value : any)  { 
        this.__$WEAK_DEFAULT = __$value;
    }

    private static __$WEAKEST;
    static get WEAKEST() { 
        if (this.__$WEAKEST===undefined) {
            this.__$WEAKEST = new Strength(6,"weakest");
        }
        return this.__$WEAKEST;
    }
    static set WEAKEST(__$value : any)  { 
        this.__$WEAKEST = __$value;
    }

    private static __$NONE : number;
    static get NONE() : number { 
        if (this.__$NONE===undefined) {
            this.__$NONE = 1;
        }
        return this.__$NONE;
    }
    static set NONE(__$value : number)  { 
        this.__$NONE = __$value;
    }

    private static __$FORWARD : number;
    static get FORWARD() : number { 
        if (this.__$FORWARD===undefined) {
            this.__$FORWARD = 2;
        }
        return this.__$FORWARD;
    }
    static set FORWARD(__$value : number)  { 
        this.__$FORWARD = __$value;
    }

    private static __$BACKWARD : number;
    static get BACKWARD() : number { 
        if (this.__$BACKWARD===undefined) {
            this.__$BACKWARD = 0;
        }
        return this.__$BACKWARD;
    }
    static set BACKWARD(__$value : number)  { 
        this.__$BACKWARD = __$value;
    }

    private static __$planner : Planner;
    static get planner() : Planner { 
        return this.__$planner;
    }
    static set planner(__$value : Planner)  { 
        this.__$planner = __$value;
    }

}
