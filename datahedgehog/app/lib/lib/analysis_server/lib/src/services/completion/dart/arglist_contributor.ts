/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/arglist_contributor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var _argCount : (request : any) => number = (request : any) : number =>  {
    let node : any = request.target.containingNode;
    if (is(node, any)) {
        if (op(Op.EQUALS,request.target.entity,node.rightParenthesis)) {
            if (op(Op.EQUALS,((t)=>(!!t)?t.lexeme:null)(node.rightParenthesis.previous),',')) {
                return op(Op.PLUS,node.arguments.length,1);
            }
        }
        return node.arguments.length;
    }
    return 0;
};
export var _getTargetId : (node : any) => any = (node : any) : any =>  {
    if (is(node, any)) {
        return _getTargetId(node.parent);
    }
    if (is(node, any)) {
        let parent : any = node.parent;
        if (is(parent, any)) {
            return parent.methodName;
        }
        if (is(parent, any)) {
            let constructorName : any = parent.constructorName;
            if (constructorName != null) {
                if (constructorName.name != null) {
                    return constructorName.name;
                }
                let typeName : any = constructorName.type.name;
                if (is(typeName, any)) {
                    return typeName;
                }
                if (is(typeName, any)) {
                    return typeName.identifier;
                }
            }
        }
        if (is(parent, any)) {
            return (parent.constructorName || parent.name);
        }
    }
    return null;
};
export var _isAppendingToArgList : (request : any) => boolean = (request : any) : boolean =>  {
    let node : any = request.target.containingNode;
    if (is(node, any)) {
        let entity = request.target.entity;
        if (op(Op.EQUALS,entity,node.rightParenthesis)) {
            return true;
        }
        if (op(Op.GT,node.arguments.length,0) && op(Op.EQUALS,node.arguments.last,entity)) {
            return is(entity, any);
        }
    }
    return false;
};
export var _isEditingNamedArgLabel : (request : any) => boolean = (request : any) : boolean =>  {
    let node : any = request.target.containingNode;
    if (is(node, any)) {
        let entity = request.target.entity;
        if (is(entity, any)) {
            let offset : number = request.offset;
            if (op(Op.LT,entity.offset,offset) && offset < entity.end) {
                return true;
            }
        }
    }
    return false;
};
export var _isInNamedExpression : (request : any) => boolean = (request : any) : boolean =>  {
    let entity : core.DartObject = request.target.entity;
    if (is(entity, any)) {
        let name : any = entity.name;
        return op(Op.LT,name.offset,request.offset) && op(Op.LT,request.offset,name.end);
    }
    return false;
};
export var _isInsertingToArgListWithNoSynthetic : (request : any) => boolean = (request : any) : boolean =>  {
    let node : any = request.target.containingNode;
    if (is(node, any)) {
        let entity = request.target.entity;
        return is(entity, any);
    }
    return false;
};
export var _isInsertingToArgListWithSynthetic : (request : any) => boolean = (request : any) : boolean =>  {
    let node : any = request.target.containingNode;
    if (is(node, any)) {
        let entity = request.target.entity;
        if (is(entity, any)) {
            let argIndex : number = request.target.argIndex;
            if (op(Op.EQUALS,node.arguments.length,argIndex + 1) || is(node.arguments.getRange(argIndex + 1,argIndex + 2).first, any)) {
                return true;
            }
        }
    }
    return false;
};
export var _namedArgs : (request : any) => core.DartIterable<string> = (request : any) : core.DartIterable<string> =>  {
    let node : any = request.target.containingNode;
    let namedArgs : core.DartList<string> = new core.DartList<string>();
    if (is(node, any)) {
        for(let arg of node.arguments) {
            if (is(arg, any)) {
                namedArgs.add(arg.name.label.name);
            }
        }
    }
    return namedArgs;
};
export namespace ArgListContributor {
    export type Constructors = 'ArgListContributor';
    export type Interface = Omit<ArgListContributor, Constructors>;
}
@DartClass
export class ArgListContributor extends any {
    request : any;

    suggestions : core.DartList<any>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeSuggestions(request : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            this.request = request;
            this.suggestions = new core.DartList.literal<any>();
            let targetId : any = _getTargetId(request.target.containingNode);
            if (op(Op.EQUALS,targetId,null)) {
                return EMPTY_LIST;
            }
            let elem : any = targetId.bestElement;
            if (op(Op.EQUALS,elem,null)) {
                return EMPTY_LIST;
            }
            if (is(elem, any)) {
                this._addSuggestions(((t)=>(!!t)?t.parameters:null)(elem.unnamedConstructor));
                return this.suggestions;
            }
            if (is(elem, any)) {
                this._addSuggestions(elem.parameters);
                return this.suggestions;
            }
            if (is(elem, any)) {
                this._addSuggestions(elem.parameters);
                return this.suggestions;
            }
            if (is(elem, any)) {
                this._addSuggestions(elem.parameters);
                return this.suggestions;
            }
            return EMPTY_LIST;
        } )());
    }

    _addDefaultParamSuggestions(parameters : core.DartIterable<any>,appendComma? : boolean) : void {
        appendComma = appendComma || false;
        let appendColon : boolean = !_isInNamedExpression(this.request);
        let namedArgs : core.DartIterable<string> = _namedArgs(this.request);
        for(let parameter of parameters) {
            if (op(Op.EQUALS,parameter.parameterKind,ParameterKind.NAMED)) {
                this._addNamedParameterSuggestion(namedArgs,parameter,appendColon,appendComma);
            }
        }
    }
    _addNamedParameterSuggestion(namedArgs : core.DartList<string>,parameter : any,appendColon : boolean,appendComma : boolean) : void {
        let name : string = parameter.name;
        let type : string = ((t)=>(!!t)?t.displayName:null)(parameter.type);
        if (name != null && new core.DartString(name).length > 0 && !namedArgs.contains(name)) {
            let completion : string = name;
            if (appendColon) {
                completion += ': ';
            }
            let selectionOffset : number = new core.DartString(completion).length;
            let element : any = parameter.enclosingElement;
            if (is(element, any)) {
                if (isFlutterWidget(element.enclosingElement) && op(Op.EQUALS,parameter.name,'children')) {
                    let value : string = getDefaultStringParameterValue(parameter);
                    if (value != null) {
                        completion += value;
                        selectionOffset = new core.DartString(completion).length - 1;
                    }
                }
            }
            if (appendComma) {
                completion += ',';
            }
            let suggestion : any = new bare.createInstance(any,null,CompletionSuggestionKind.NAMED_ARGUMENT,DART_RELEVANCE_NAMED_PARAMETER,completion,selectionOffset,0,false,false,{
                parameterName : name,parameterType : type});
            if (is(parameter, any)) {
                ArgListContributor._setDocumentation(suggestion,((t)=>(!!t)?t.documentationComment:null)(parameter.field));
                suggestion.element = convertElement(parameter);
            }
            this.suggestions.add(suggestion);
        }
    }
    _addSuggestions(parameters : core.DartIterable<any>) : void {
        if (parameters == null || parameters.length == 0) {
            return;
        }
        let requiredParam : core.DartIterable<any> = parameters.where((p : any) =>  {
            return op(Op.EQUALS,p.parameterKind,ParameterKind.REQUIRED);
        });
        let requiredCount : number = requiredParam.length;
        if (_isEditingNamedArgLabel(this.request) || _isAppendingToArgList(this.request)) {
            if (requiredCount == 0 || requiredCount < _argCount(this.request)) {
                let addTrailingComma : boolean = !this._isFollowedByAComma(this.request) && this._isInFlutterCreation(this.request);
                this._addDefaultParamSuggestions(parameters,addTrailingComma);
            }
        }else if (_isInsertingToArgListWithNoSynthetic(this.request)) {
            this._addDefaultParamSuggestions(parameters,true);
        }else if (_isInsertingToArgListWithSynthetic(this.request)) {
            this._addDefaultParamSuggestions(parameters,!this._isFollowedByAComma(this.request));
        }
    }
    _isFollowedByAComma(request : any) : boolean {
        let containingNode = request.target.containingNode;
        let entity = request.target.entity;
        let token : any = is(entity, any) ? entity.endToken : is(entity, any) ? entity : null;
        return (token != ((t)=>(!!t)?t.endToken:null)(containingNode)) && op(Op.EQUALS,((t)=>(!!t)?t.type:null)(((t)=>(!!t)?t.next:null)(token)),TokenType.COMMA);
    }
    _isInFlutterCreation(request : any) : boolean {
        let containingNode : any = ((t)=>(!!t)?t.containingNode:null)(((t)=>(!!t)?t.target:null)(request));
        let newExpr : any = containingNode != null ? identifyNewExpression(containingNode.parent) : null;
        return newExpr != null && isFlutterInstanceCreationExpression(newExpr);
    }
    static _setDocumentation(suggestion : any,comment : string) : void {
        if (comment != null) {
            let doc : string = removeDartDocDelimiters(comment);
            suggestion.docComplete = doc;
            suggestion.docSummary = getDartDocSummary(doc);
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ArgListContributor() {
    }
}

export class properties {
}
