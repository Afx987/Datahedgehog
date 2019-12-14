/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/flutter_util.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var convertFlutterChildToChildren : (childArg : any,namedExp : any,eol : string,getNodeText : Function,getLinePrefix : Function,getIndent : Function,getText : Function,_addInsertEdit : Function,_addRemoveEdit : Function,_addReplaceEdit : Function,rangeNode : Function) => void = (childArg : any,namedExp : any,eol : string,getNodeText : Function,getLinePrefix : Function,getIndent : Function,getText : Function,_addInsertEdit : Function,_addRemoveEdit : Function,_addReplaceEdit : Function,rangeNode : Function) : void =>  {
    let childLoc : number = op(Op.PLUS,namedExp.offset,new core.DartString('child').length);
    _addInsertEdit(childLoc,'ren');
    let listLoc : number = childArg.offset;
    let childArgSrc : string = getNodeText(childArg);
    if (!new core.DartString(childArgSrc).contains(eol)) {
        _addInsertEdit(listLoc,'<Widget>[');
        _addInsertEdit(listLoc + childArg.length,']');
    }else {
        let newlineLoc : number = new core.DartString(childArgSrc).lastIndexOf(eol);
        if (newlineLoc == new core.DartString(childArgSrc).length) {
            newlineLoc -= 1;
        }
        let indentOld : string = getLinePrefix(op(Op.PLUS,op(Op.PLUS,childArg.offset,1),newlineLoc));
        let indentNew : string = `${indentOld}${getIndent(1)}`;
        let separator : string = getText(namedExp.offset,op(Op.MINUS,childArg.offset,namedExp.offset));
        let prefix : string = new core.DartString(separator).contains(eol) ? "" : `${eol}${indentNew}`;
        if (new core.DartString(prefix).isEmpty) {
            _addInsertEdit(op(Op.PLUS,namedExp.offset,new core.DartString('child:').length),' <Widget>[');
            _addRemoveEdit(new bare.createInstance(any,null,op(Op.MINUS,childArg.offset,2),2));
        }else {
            _addInsertEdit(listLoc,'<Widget>[');
        }
        let newChildArgSrc : string = new core.DartString(childArgSrc).replaceAll(new core.DartRegExp(`^${indentOld}`,{
            multiLine : true}),`${indentNew}`);
        newChildArgSrc = `${prefix}${newChildArgSrc},${eol}${indentOld}]`;
        _addReplaceEdit(rangeNode(childArg),newChildArgSrc);
    }
};
export var findChildArgument : (newExpr : any) => any = (newExpr : any) : any =>  {
    return newExpr.argumentList.arguments.firstWhere((arg : any) =>  {
        return is(arg, any) && op(Op.EQUALS,arg.name.label.name,'child');
    },{
        orElse : () =>  {
            return null;
        }});
};
export var findChildWidget : (newExpr : any) => any = (newExpr : any) : any =>  {
    let child : any = findChildArgument(newExpr);
    return getChildWidget(child);
};
export var findFlutterNamedExpression : (node : any,name : string) => any = (node : any,name : string) : any =>  {
    if (isNot(node, any)) {
        return null;
    }
    let namedArg : any = node;
    let namedExp : any;
    if (is(namedArg.parent, any) && is(namedArg.parent.parent, any)) {
        namedExp = namedArg.parent.parent;
        if (namedArg.name != name || op(Op.EQUALS,namedExp.expression,null)) {
            return null;
        }
    }else {
        return null;
    }
    if (isNot(((t)=>(!!t)?t.parent:null)(namedExp.parent), any)) {
        return null;
    }
    let newExpr : any = namedExp.parent.parent;
    if (op(Op.EQUALS,newExpr,null) || !isFlutterInstanceCreationExpression(newExpr)) {
        return null;
    }
    return namedExp;
};
export var getChildList : (child : any) => any = (child : any) : any =>  {
    if (is(child.expression, any)) {
        let list : any = child.expression;
        if (list.elements.isEmpty || list.elements.every((element : any) =>  {
            return is(element, any) && isFlutterInstanceCreationExpression(element);
        })) {
            return list;
        }
    }
    return null;
};
export var getChildWidget : (child : any,strict? : boolean) => any = (child : any,strict? : boolean) : any =>  {
    strict = strict || false;
    if (is(((t)=>(!!t)?t.expression:null)(child), any)) {
        let childNewExpr : any = child.expression;
        if (isFlutterInstanceCreationExpression(childNewExpr)) {
            if (!strict || (findChildArgument(childNewExpr) != null)) {
                return childNewExpr;
            }
        }
    }
    return null;
};
export var identifyNewExpression : (node : any) => any = (node : any) : any =>  {
    let newExpr : any;
    if (is(node, any)) {
        if (is(node.parent, any) && is(node.parent.parent, any)) {
            newExpr = node.parent.parent;
        }else if (is(((t)=>(!!t)?t.parent:null)(node.parent), any) && is(((t)=>(!!t)?t.parent:null)(node.parent.parent), any)) {
            newExpr = node.parent.parent.parent;
        }
    }else if (is(node, any)) {
        newExpr = node;
    }
    return newExpr;
};
export var isFlutterInstanceCreationExpression : (newExpr : any) => boolean = (newExpr : any) : boolean =>  {
    let classElement : any = ((t)=>(!!t)?t.enclosingElement:null)(newExpr.staticElement);
    return isFlutterWidget(classElement);
};
export var isFlutterWidget : (classElement : any) => boolean = (classElement : any) : boolean =>  {
    let superType : any = ((_35_)=>(!!_35_)?_35_.firstWhere((type : any) =>  {
        return op(Op.EQUALS,properties._FLUTTER_WIDGET_NAME,type.name);
    },{
        orElse : () =>  {
            return null;
        }}):null)(((t)=>(!!t)?t.allSupertypes:null)(classElement));
    if (op(Op.EQUALS,superType,null)) {
        return false;
    }
    let uri : lib3.Uri = ((t)=>(!!t)?t.uri:null)(((t)=>(!!t)?t.source:null)(superType.element));
    if (uri.toString() != properties._FLUTTER_WIDGET_URI) {
        return false;
    }
    return true;
};
export class properties {
    private static __$_FLUTTER_WIDGET_NAME;
    static get _FLUTTER_WIDGET_NAME() { 
        if (this.__$_FLUTTER_WIDGET_NAME===undefined) {
            this.__$_FLUTTER_WIDGET_NAME = "Widget";
        }
        return this.__$_FLUTTER_WIDGET_NAME;
    }
    static set _FLUTTER_WIDGET_NAME(__$value : any)  { 
        this.__$_FLUTTER_WIDGET_NAME = __$value;
    }

    private static __$_FLUTTER_WIDGET_URI;
    static get _FLUTTER_WIDGET_URI() { 
        if (this.__$_FLUTTER_WIDGET_URI===undefined) {
            this.__$_FLUTTER_WIDGET_URI = "package:flutter/src/widgets/framework.dart";
        }
        return this.__$_FLUTTER_WIDGET_URI;
    }
    static set _FLUTTER_WIDGET_URI(__$value : any)  { 
        this.__$_FLUTTER_WIDGET_URI = __$value;
    }

}
