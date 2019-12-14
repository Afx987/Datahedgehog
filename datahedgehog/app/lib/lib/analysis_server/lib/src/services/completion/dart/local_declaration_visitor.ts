/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/local_declaration_visitor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace LocalDeclarationVisitor {
    export type Constructors = 'LocalDeclarationVisitor';
    export type Interface = Omit<LocalDeclarationVisitor, Constructors>;
}
@DartClass
export class LocalDeclarationVisitor extends any {
    private static __$STACKTRACE_TYPE : any;
    static get STACKTRACE_TYPE() : any { 
        if (this.__$STACKTRACE_TYPE===undefined) {
            this.__$STACKTRACE_TYPE = astFactory.typeName(astFactory.simpleIdentifier(new bare.createInstance(any,null,TokenType.IDENTIFIER,'StackTrace',0)),null);
        }
        return this.__$STACKTRACE_TYPE;
    }
    static set STACKTRACE_TYPE(__$value : any)  { 
        this.__$STACKTRACE_TYPE = __$value;
    }

    offset : number;

    constructor(offset : number) {
    }
    @defaultConstructor
    LocalDeclarationVisitor(offset : number) {
        this.offset = offset;
    }
    @Abstract
    declaredClass(declaration : any) : void{ throw 'abstract'}
    @Abstract
    declaredClassTypeAlias(declaration : any) : void{ throw 'abstract'}
    declaredEnum(declaration : any) : void {
    }
    @Abstract
    declaredField(fieldDecl : any,varDecl : any) : void{ throw 'abstract'}
    @Abstract
    declaredFunction(declaration : any) : void{ throw 'abstract'}
    @Abstract
    declaredFunctionTypeAlias(declaration : any) : void{ throw 'abstract'}
    @Abstract
    declaredLabel(label : any,isCaseLabel : boolean) : void{ throw 'abstract'}
    @Abstract
    declaredLocalVar(name : any,type : any) : void{ throw 'abstract'}
    @Abstract
    declaredMethod(declaration : any) : void{ throw 'abstract'}
    @Abstract
    declaredParam(name : any,type : any) : void{ throw 'abstract'}
    @Abstract
    declaredTopLevelVar(varList : any,varDecl : any) : void{ throw 'abstract'}
    finished() : void {
        throw new _LocalDeclarationVisitorFinished();
    }
    visit(node : any) : boolean {
        try {
            node.accept(this);
            return false;
        } catch (__error__) {

            if (is(__error__,_LocalDeclarationVisitorFinished)){
                return true;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : any) : void {
        this._visitStatements(node.statements);
        this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCatchClause(node : any) : void {
        let param : any = node.exceptionParameter;
        if (param != null) {
            this.declaredParam(param,node.exceptionType);
        }
        param = node.stackTraceParameter;
        if (param != null) {
            this.declaredParam(param,LocalDeclarationVisitor.STACKTRACE_TYPE);
        }
        this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : void {
        this._visitClassDeclarationMembers(node);
        this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) : void {
        node.declarations.forEach((declaration : any) =>  {
            if (is(declaration, any)) {
                this.declaredClass(declaration);
            }else if (is(declaration, any)) {
                this.declaredEnum(declaration);
            }else if (is(declaration, any)) {
                this.declaredFunction(declaration);
            }else if (is(declaration, any)) {
                let varList = declaration.variables;
                if (varList != null) {
                    varList.variables.forEach((varDecl : any) =>  {
                        this.declaredTopLevelVar(varList,varDecl);
                    });
                }
            }else if (is(declaration, any)) {
                this.declaredClassTypeAlias(declaration);
            }else if (is(declaration, any)) {
                this.declaredFunctionTypeAlias(declaration);
            }
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) {
        this._visitParamList(node.parameters);
        this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) : void {
        let id : any;
        let type : any;
        let loopVar : any = node.loopVariable;
        if (loopVar != null) {
            id = loopVar.identifier;
            type = loopVar.type;
        }else {
            id = node.identifier;
            type = null;
        }
        if (id != null) {
            this.declaredLocalVar(id,type);
        }
        this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : void {
        let varList : any = node.variables;
        if (varList != null) {
            varList.variables.forEach((varDecl : any) =>  {
                this.declaredLocalVar(varDecl.name,varList.type);
            });
        }
        this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : void {
        this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : void {
        this._visitParamList(node.parameters);
        this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationExpression(node : any) : void {
        this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabeledStatement(node : any) : void {
        for(let label of node.labels) {
            this.declaredLabel(label,false);
        }
        this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : void {
        this._visitParamList(node.parameters);
        this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) : void {
        node.parent.accept(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStringInterpolation(node : any) : void {
        this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchMember(node : any) : void {
        this._visitStatements(node.statements);
        this.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchStatement(node : any) : void {
        for(let member of node.members) {
            for(let label of member.labels) {
                this.declaredLabel(label,true);
            }
        }
        this.visitNode(node);
    }
    _visitClassDeclarationMembers(node : any) : void {
        for(let member of node.members) {
            if (is(member, any)) {
                member.fields.variables.forEach((varDecl : any) =>  {
                    this.declaredField(member,varDecl);
                });
            }else if (is(member, any)) {
                this.declaredMethod(member);
            }
        }
    }
    _visitParamList(paramList : any) : void {
        if (paramList != null) {
            paramList.parameters.forEach((param : any) =>  {
                let normalParam : any;
                if (is(param, any)) {
                    normalParam = param.parameter;
                }else if (is(param, any)) {
                    normalParam = param;
                }
                let type : any = null;
                if (is(normalParam, any)) {
                    type = normalParam.type;
                }else if (is(normalParam, any)) {
                    type = normalParam.returnType;
                }else if (is(normalParam, any)) {
                    type = normalParam.type;
                }
                let name : any = param.identifier;
                this.declaredParam(name,type);
            });
        }
    }
    _visitStatements(statements : any) {
        for(let stmt of statements) {
            if (op(Op.LT,stmt.offset,this.offset)) {
                if (is(stmt, any)) {
                    let varList : any = stmt.variables;
                    if (varList != null) {
                        for(let varDecl of varList.variables) {
                            if (op(Op.LT,varDecl.end,this.offset)) {
                                this.declaredLocalVar(varDecl.name,varList.type);
                            }
                        }
                    }
                }else if (is(stmt, any)) {
                    let declaration : any = stmt.functionDeclaration;
                    if (declaration != null && op(Op.LT,declaration.offset,this.offset)) {
                        let id : any = declaration.name;
                        if (id != null) {
                            let name : string = id.name;
                            if (name != null && new core.DartString(name).length > 0) {
                                this.declaredFunction(declaration);
                            }
                        }
                    }
                }
            }
        }
    }
}

export namespace _LocalDeclarationVisitorFinished {
    export type Constructors = '_LocalDeclarationVisitorFinished';
    export type Interface = Omit<_LocalDeclarationVisitorFinished, Constructors>;
}
@DartClass
export class _LocalDeclarationVisitorFinished {
    constructor() {
    }
    @defaultConstructor
    _LocalDeclarationVisitorFinished() {
    }
}

export class properties {
}
