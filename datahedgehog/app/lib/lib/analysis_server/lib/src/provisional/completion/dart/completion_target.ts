/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/provisional/completion/dart/completion_target.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var _computeArgIndex : (containingNode : any,entity : core.DartObject) => number = (containingNode : any,entity : core.DartObject) : number =>  {
    let argList = containingNode;
    if (is(argList, any)) {
        entity = argList;
        argList = argList.parent;
    }
    if (is(argList, any)) {
        let args : any = argList.arguments;
        for(let index : number = 0; index < args.length; ++index){
            if (op(Op.EQUALS,entity,op(Op.INDEX,args,index))) {
                return index;
            }
        }
        if (args.isEmpty) {
            return 0;
        }
        if (op(Op.EQUALS,entity,argList.rightParenthesis)) {
            if (op(Op.EQUALS,((t)=>(!!t)?t.lexeme:null)(argList.rightParenthesis.previous),',')) {
                return args.length;
            }
            return op(Op.MINUS,args.length,1);
        }
    }
    return null;
};
export namespace CompletionTarget {
    export type Constructors = '_';
    export type Interface = Omit<CompletionTarget, Constructors>;
}
@DartClass
export class CompletionTarget {
    unit : any;

    offset : number;

    containingNode : any;

    entity : core.DartObject;

    isCommentText : boolean;

    argIndex : number;

    @namedFactory
    static $forOffset(compilationUnit : any,offset : number,_namedArguments? : {entryPoint? : any}) : CompletionTarget {
        let {entryPoint} = Object.assign({
        }, _namedArguments );
        entryPoint = ( entryPoint ) || ( compilationUnit );
        let containingNode : any = entryPoint;
        outerLoop:
            while (true){
                if (is(containingNode, any)) {
                    let comment : any = containingNode;
                    for(let commentReference of comment.references) {
                        if (op(Op.LEQ,commentReference.offset,offset) && offset <= commentReference.end) {
                            containingNode = commentReference;
                            continue;
                        }
                    }
                }
                for(let entity of containingNode.childEntities) {
                    if (is(entity, any)) {
                        if (CompletionTarget._isCandidateToken(entity,offset)) {
                            let commentToken : any = CompletionTarget._getContainingCommentToken(entity,offset);
                            if (commentToken != null) {
                                return new CompletionTarget._(compilationUnit,offset,containingNode,commentToken,true);
                            }
                            return new CompletionTarget._(compilationUnit,offset,containingNode,entity,false);
                        }else {
                            continue;
                        }
                    }else if (is(entity, any)) {
                        if (!CompletionTarget._isCandidateToken(entity.endToken,offset)) {
                            continue;
                        }
                        if (CompletionTarget._isCandidateNode(entity,offset)) {
                            let commentToken : any = CompletionTarget._getContainingCommentToken(entity.beginToken,offset);
                            if (commentToken != null) {
                                let docComment : any = CompletionTarget._getContainingDocComment(containingNode,commentToken);
                                if (docComment != null) {
                                    return new CompletionTarget._(compilationUnit,offset,docComment,commentToken,false);
                                }else {
                                    return new CompletionTarget._(compilationUnit,offset,compilationUnit,commentToken,true);
                                }
                            }
                            return new CompletionTarget._(compilationUnit,offset,containingNode,entity,false);
                        }
                        containingNode = entity;
                        continue;
                    }else {
                        /* TODO (AssertStatementImpl) : assert (false); */;
                    }
                }
                /* TODO (AssertStatementImpl) : assert (identical(containingNode, entryPoint)); */;
                return new CompletionTarget._(compilationUnit,offset,entryPoint,null,false);
            };
    }
    static forOffset : new(compilationUnit : any,offset : number,_namedArguments? : {entryPoint? : any}) => CompletionTarget;

    @namedConstructor
    _(unit : any,offset : number,containingNode : any,entity : core.DartObject,isCommentText : boolean) {
        this.containingNode = containingNode;
        this.entity = entity;
        this.argIndex = _computeArgIndex(containingNode,entity);
        this.unit = unit;
        this.offset = offset;
        this.isCommentText = isCommentText;
    }
    static _ : new(unit : any,offset : number,containingNode : any,entity : core.DartObject,isCommentText : boolean) => CompletionTarget;

    get isCascade() : boolean {
        let node : any = this.containingNode;
        if (is(node, any)) {
            return node.isCascaded && this.offset > op(Op.PLUS,node.operator.offset,1);
        }
        if (is(node, any)) {
            return node.isCascaded && this.offset > op(Op.PLUS,node.operator.offset,1);
        }
        return false;
    }
    isFunctionalArgument() : boolean {
        if (!this.maybeFunctionalArgument()) {
            return false;
        }
        let parent : any = this.containingNode.parent;
        if (is(parent, any)) {
            parent = parent.parent;
        }
        if (is(parent, any)) {
            let instType : any = parent.bestType;
            if (instType != null) {
                let intTypeElem : any = instType.element;
                if (is(intTypeElem, any)) {
                    let constructorName : any = parent.constructorName.name;
                    let constructor : any = constructorName != null ? intTypeElem.getNamedConstructor(constructorName.name) : intTypeElem.unnamedConstructor;
                    return constructor != null && CompletionTarget._isFunctionalParameter(constructor.parameters,this.argIndex,this.containingNode);
                }
            }
        }else if (is(parent, any)) {
            let methodName : any = parent.methodName;
            if (methodName != null) {
                let methodElem : any = methodName.bestElement;
                if (is(methodElem, any)) {
                    return CompletionTarget._isFunctionalParameter(methodElem.parameters,this.argIndex,this.containingNode);
                }else if (is(methodElem, any)) {
                    return CompletionTarget._isFunctionalParameter(methodElem.parameters,this.argIndex,this.containingNode);
                }
            }
        }
        return false;
    }
    maybeFunctionalArgument() : boolean {
        if (this.argIndex != null) {
            if (is(this.containingNode, any)) {
                return true;
            }
            if (is(this.containingNode, any)) {
                if (is(this.containingNode.parent, any)) {
                    return true;
                }
            }
        }
        return false;
    }
    static _getContainingCommentToken(token : any,offset : number) : any {
        if (op(Op.EQUALS,token,null)) {
            return null;
        }
        if (offset >= token.offset) {
            return null;
        }
        token = token.precedingComments;
        while (token != null){
            if (offset <= token.offset) {
                return null;
            }
            if (offset <= token.end) {
                if (op(Op.EQUALS,token.type,TokenType.SINGLE_LINE_COMMENT) || offset < token.end) {
                    return token;
                }
            }
            token = token.next;
        }
        return null;
    }
    static _getContainingDocComment(node : any,token : any) : any {
        if (is(node, any)) {
            let docComment : any = node.documentationComment;
            if (docComment != null && docComment.tokens.contains(token)) {
                return docComment;
            }
        }
        return null;
    }
    static _isCandidateNode(node : any,offset : number) : boolean {
        let beginToken : any = node.beginToken;
        if (beginToken.type.isKeyword || op(Op.EQUALS,beginToken.type,TokenType.IDENTIFIER)) {
            return CompletionTarget._isCandidateToken(beginToken,offset);
        }
        return offset <= node.offset;
    }
    static _isCandidateToken(token : any,offset : number) : boolean {
        if (offset < token.end) {
            return true;
        }else if (offset == token.end) {
            return token.type.isKeyword || op(Op.EQUALS,token.type,TokenType.IDENTIFIER) || op(Op.EQUALS,token.length,0);
        }else if (!token.isSynthetic) {
            return false;
        }
        let previous : any = token.previous;
        if (offset < previous.end) {
            return true;
        }else if (offset == previous.end) {
            return token.type.isKeyword || op(Op.EQUALS,previous.type,TokenType.IDENTIFIER);
        }else {
            return false;
        }
    }
    static _isFunctionalParameter(parameters : core.DartList<any>,paramIndex : number,containingNode : any) : boolean {
        let paramType : any;
        if (paramIndex < parameters.length) {
            let param : any = parameters[paramIndex];
            if (op(Op.EQUALS,param.parameterKind,ParameterKind.NAMED)) {
                if (is(containingNode, any)) {
                    let name : string = ((t)=>(!!t)?t.name:null)(((t)=>(!!t)?t.label:null)(containingNode.name));
                    param = parameters.firstWhere((param : any) =>  {
                        return op(Op.EQUALS,param.parameterKind,ParameterKind.NAMED) && op(Op.EQUALS,param.name,name);
                    },{
                        orElse : () =>  {
                            return null;
                        }});
                    paramType = ((t)=>(!!t)?t.type:null)(param);
                }
            }else {
                paramType = param.type;
            }
        }
        return is(paramType, any) || is(paramType, any);
    }
}

export class properties {
}
