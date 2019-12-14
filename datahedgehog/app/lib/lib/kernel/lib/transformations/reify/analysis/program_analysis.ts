/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/reify/analysis/program_analysis.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../asts";

export var _analyzeAll : (library : any) => boolean = (library : any) : boolean =>  {
    return true;
};
export var analyze : (program : any,_namedArguments? : {analyzeLibrary? : (library : any) => boolean}) => ProgramKnowledge = (program : any,_namedArguments? : {analyzeLibrary? : (library : any) => boolean}) : ProgramKnowledge =>  {
    let {analyzeLibrary} = Object.assign({
        "analyzeLibrary" : _analyzeAll}, _namedArguments );
    let knowledge : ProgramKnowledge = new ProgramKnowledge();
    program.accept(new ProgramAnalysis(knowledge,analyzeLibrary));
    return knowledge;
};
export namespace ProgramKnowledge {
    export type Constructors = 'ProgramKnowledge';
    export type Interface = Omit<ProgramKnowledge, Constructors>;
}
@DartClass
export class ProgramKnowledge {
    _usedTypeVariables : core.DartMap<any,core.DartSet<any>>;

    isTests : core.DartMap<any,core.DartSet<any>>;

    _classTests : core.DartSet<any>;

    get classTests() : core.DartSet<any> {
        if (op(Op.EQUALS,this._classTests,null)) {
            this._classTests = this.isTests.values.expand((set : any) =>  {
                return set;
            }).where((type : any) =>  {
                return is(type, any);
            }).map((type : any) =>  {
                return (type as any).classNode;
            }).toSet();
        }
        return this._classTests;
    }
    recordTypeVariableUse(expression : any,parameter : any) {
        this.add(this._usedTypeVariables,lib3.getEnclosingMember(expression),parameter);
    }
    usedParameters(member : any) : core.DartSet<any> {
        return (this._usedTypeVariables.get(member) || new core.DartSet<any>());
    }
    recordIsTest(node : any,type : any) : void {
        this.add(this.isTests,lib3.getEnclosingMember(node),type);
    }
    add(map : core.DartMap<any,core.DartSet<any>>,key : any,value : any) {
        map.putIfAbsent(key,() =>  {
            return new core.DartSet<any>();
        }).add(value);
    }
    constructor() {
    }
    @defaultConstructor
    ProgramKnowledge() {
        this._usedTypeVariables = new core.DartMap.literal([
        ]);
        this.isTests = new core.DartMap.literal([
        ]);
    }
}

export namespace ProgramAnalysis {
    export type Constructors = 'ProgramAnalysis';
    export type Interface = Omit<ProgramAnalysis, Constructors>;
}
@DartClass
export class ProgramAnalysis extends any {
    knowledge : ProgramKnowledge;

    analyzeLibrary : (library : any) => boolean;

    constructor(knowledge : ProgramKnowledge,analyzeLibrary : (library : any) => boolean) {
    }
    @defaultConstructor
    ProgramAnalysis(knowledge : ProgramKnowledge,analyzeLibrary : (library : any) => boolean) {
        this.knowledge = knowledge;
        this.analyzeLibrary = analyzeLibrary;
    }
    defaultTreeNode(node : any) {
        return node.visitChildren(this);
    }
    visitLibrary(library : any) {
        if (!this.analyzeLibrary(library)) {
            return;
        }
        super.visitLibrary(library);
    }
    handleTypeReference(node : any,type : any) {
        lib3.typeVariables(type).forEach((parameter : any) =>  {
            this.knowledge.recordTypeVariableUse(node,parameter);
        });
    }
    handleInstantiation(node : any) {
        node.arguments.types.forEach((type : any) =>  {
            this.handleTypeReference(node,type);
        });
    }
    visitIsExpression(node : any) {
        this.knowledge.recordIsTest(node,node.type);
        this.handleTypeReference(node,node.type);
        node.visitChildren(this);
    }
    visitConstructorInvocation(node : any) {
        this.handleInstantiation(node);
        node.visitChildren(this);
    }
    visitStaticInvocation(node : any) {
        if (op(Op.EQUALS,node.target.kind,ProcedureKind.Factory)) {
            this.handleInstantiation(node);
        }
        node.visitChildren(this);
    }
}

export class properties {
}
