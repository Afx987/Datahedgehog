/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/closure/info.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../visitor";
import * as lib4 from "./../../ast";

export namespace ClosureInfo {
    export type Constructors = lib3.RecursiveVisitor.Constructors | 'ClosureInfo';
    export type Interface = Omit<ClosureInfo, Constructors>;
}
@DartClass
export class ClosureInfo extends lib3.RecursiveVisitor<any> {
    currentFunction : lib4.FunctionNode;

    function : core.DartMap<lib4.VariableDeclaration,lib4.FunctionNode>;

    variables : core.DartSet<lib4.VariableDeclaration>;

    typeVariables : core.DartMap<lib4.FunctionNode,core.DartSet<lib4.TypeParameter>>;

    thisAccess : core.DartMap<lib4.FunctionNode,lib4.VariableDeclaration>;

    currentMemberLocalNames : core.DartSet<string>;

    localNames : core.DartMap<lib4.FunctionNode,string>;

    invokedGetters : core.DartSet<lib4.Name>;

    declaredInstanceMethodNames : core.DartSet<lib4.Name>;

    currentClass : lib4.Class;

    currentMember : lib4.Member;

    currentMemberFunction : lib4.FunctionNode;

    get isOuterMostContext() : boolean {
        return op(Op.EQUALS,this.currentFunction,null) || op(Op.EQUALS,this.currentMemberFunction,this.currentFunction);
    }
    get tearOffGetterNames() : core.DartMap<lib4.Name,lib4.Name> {
        let result : core.DartMap<lib4.Name,lib4.Name> = new core.DartMap.literal([
        ]);
        for(let name of this.declaredInstanceMethodNames) {
            if (this.invokedGetters.contains(name)) {
                result.set(name,new lib4.Name(`${name.name}#get`,name.library));
            }
        }
        return result;
    }
    beginMember(member : lib4.Member,function? : lib4.FunctionNode) : void {
        this.currentMemberLocalNames.clear();
        if (function != null) {
            this.localNames.set(function,this.computeUniqueLocalName(member.name.name));
        }
        this.currentMember = member;
        this.currentMemberFunction = function;
    }
    endMember() : void {
        this.currentMember = null;
        this.currentMemberFunction = null;
    }
    visitClass(node : lib4.Class) {
        this.currentClass = node;
        super.visitClass(node);
        this.currentClass = null;
    }
    visitConstructor(node : lib4.Constructor) {
        this.beginMember(node,node.function);
        super.visitConstructor(node);
        this.endMember();
    }
    visitProcedure(node : lib4.Procedure) {
        this.beginMember(node,node.function);
        if (node.isInstanceMember && op(Op.EQUALS,node.kind,lib4.ProcedureKind.Method)) {
            let parent : lib4.Class = node.parent;
            if (node.name.name != "length" || parent.enclosingLibrary.importUri.toString() != "dart:io") {
                this.declaredInstanceMethodNames.add(node.name);
            }
        }
        super.visitProcedure(node);
        this.endMember();
    }
    visitField(node : lib4.Field) {
        this.beginMember(node);
        super.visitField(node);
        this.endMember();
    }
    computeUniqueLocalName(name? : string) : string {
        if (name == null || new core.DartString(name).isEmpty) {
            name = "function";
        }
        if (op(Op.EQUALS,this.currentFunction,null)) {
            if (this.currentMember != null) {
                name = `${this.currentMember.name.name}#${name}`;
            }
            if (this.currentClass != null) {
                name = `${this.currentClass.name}#${name}`;
            }
        }else {
            name = `${this.localNames.get(this.currentFunction)}#${name}`;
        }
        let count : number = 1;
        let candidate : string = name;
        while (this.currentMemberLocalNames.contains(candidate)){
            candidate = `${name}#${count++}`;
        }
        this.currentMemberLocalNames.add(candidate);
        return candidate;
    }
    visitFunctionDeclaration(node : lib4.FunctionDeclaration) {
        /* TODO (AssertStatementImpl) : assert (!localNames.containsKey(node)); */;
        this.localNames.set(node.function,this.computeUniqueLocalName(node.variable.name));
        return super.visitFunctionDeclaration(node);
    }
    visitFunctionNode(node : lib4.FunctionNode) {
        this.localNames.putIfAbsent(node,this.computeUniqueLocalName.bind(this));
        let saved = this.currentFunction;
        this.currentFunction = node;
        node.visitChildren(this);
        this.currentFunction = saved;
        let capturedTypeVariables : core.DartSet<lib4.TypeParameter> = this.typeVariables.get(node);
        if (capturedTypeVariables != null && !this.isOuterMostContext) {
            this.typeVariables.putIfAbsent(this.currentFunction,() =>  {
                return new core.DartSet<lib4.TypeParameter>();
            }).addAll(capturedTypeVariables);
        }
    }
    visitVariableDeclaration(node : lib4.VariableDeclaration) {
        this.function.set(node,this.currentFunction);
        node.visitChildren(this);
    }
    visitVariableGet(node : lib4.VariableGet) {
        if (this.function.get(node.variable) != this.currentFunction) {
            this.variables.add(node.variable);
        }
        node.visitChildren(this);
    }
    visitVariableSet(node : lib4.VariableSet) {
        if (this.function.get(node.variable) != this.currentFunction) {
            this.variables.add(node.variable);
        }
        node.visitChildren(this);
    }
    visitTypeParameterType(node : lib4.TypeParameterType) {
        if (!this.isOuterMostContext) {
            this.typeVariables.putIfAbsent(this.currentFunction,() =>  {
                return new core.DartSet<lib4.TypeParameter>();
            }).add(node.parameter);
        }
    }
    visitThisExpression(node : lib4.ThisExpression) {
        if (!this.isOuterMostContext) {
            this.thisAccess.putIfAbsent(this.currentMemberFunction,() =>  {
                return new lib4.VariableDeclaration("#self");
            });
        }
    }
    visitPropertyGet(node : lib4.PropertyGet) {
        this.invokedGetters.add(node.name);
        super.visitPropertyGet(node);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClosureInfo() {
        this.function = new core.DartMap.literal([
        ]);
        this.variables = new core.DartSet<lib4.VariableDeclaration>();
        this.typeVariables = new core.DartMap.literal([
        ]);
        this.thisAccess = new core.DartMap.literal([
        ]);
        this.currentMemberLocalNames = new core.DartSet<string>();
        this.localNames = new core.DartMap.literal([
        ]);
        this.invokedGetters = new core.DartSet<lib4.Name>();
        this.declaredInstanceMethodNames = new core.DartSet<lib4.Name>();
    }
}

export class properties {
}
