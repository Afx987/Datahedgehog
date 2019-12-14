/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/computer/computer_hover.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace DartUnitHoverComputer {
    export type Constructors = 'DartUnitHoverComputer';
    export type Interface = Omit<DartUnitHoverComputer, Constructors>;
}
@DartClass
export class DartUnitHoverComputer {
    _unit : any;

    _offset : number;

    constructor(_unit : any,_offset : number) {
    }
    @defaultConstructor
    DartUnitHoverComputer(_unit : any,_offset : number) {
        this._unit = _unit;
        this._offset = _offset;
    }
    compute() : any {
        let node : any = new bare.createInstance(any,null,this._offset).searchWithin(this._unit);
        if (op(Op.EQUALS,node,null)) {
            return null;
        }
        if (is(node.parent, any) && is(node.parent.parent, any) && is(node.parent.parent.parent, any)) {
            node = node.parent.parent.parent;
        }
        if (is(node.parent, any) && is(node.parent.parent, any)) {
            node = node.parent.parent;
        }
        if (is(node, any)) {
            let expression : any = node;
            let hover : any = new bare.createInstance(any,null,expression.offset,expression.length);
            let element : any = ElementLocator.locate(expression);
            if (element != null) {
                if (is(element, any)) {
                    let accessor : any = element;
                    if (accessor.isSynthetic) {
                        element = accessor.variable;
                    }
                }
                hover.elementDescription = element.toString();
                hover.elementKind = element.kind.displayName;
                hover.isDeprecated = element.isDeprecated;
                if (isNot(element.enclosingElement, any)) {
                    let containingClass : any = element.getAncestor((e : any) =>  {
                        return is(e, any);
                    });
                    if (containingClass != null) {
                        hover.containingClassDescription = containingClass.displayName;
                    }
                    let library : any = element.library;
                    if (library != null) {
                        hover.containingLibraryName = library.name;
                        hover.containingLibraryPath = library.source.fullName;
                    }
                }
                hover.dartdoc = this._computeDocumentation(element);
            }
            hover.parameter = DartUnitHoverComputer._safeToString(expression.bestParameterElement);
            {
                let parent : any = expression.parent;
                let staticType : any = null;
                let propagatedType : any = expression.propagatedType;
                if (is(element, any)) {
                    staticType = element.type;
                }else if (op(Op.EQUALS,element,null) || is(element, any)) {
                    staticType = expression.staticType;
                }
                if (is(parent, any) && op(Op.EQUALS,parent.methodName,expression)) {
                    staticType = parent.staticInvokeType;
                    propagatedType = parent.propagatedInvokeType;
                    if (staticType != null && staticType.isDynamic) {
                        staticType = null;
                    }
                    if (propagatedType != null && propagatedType.isDynamic) {
                        propagatedType = null;
                    }
                }
                hover.staticType = DartUnitHoverComputer._safeToString(staticType);
                hover.propagatedType = DartUnitHoverComputer._safeToString(propagatedType);
            }
            return hover;
        }
        return null;
    }
    _computeDocumentation(element : any) : string {
        if (is(element, any)) {
            element = (element as any).field;
        }
        if (is(element, any)) {
            element = element.enclosingElement;
        }
        if (op(Op.EQUALS,element,null)) {
            return null;
        }
        if (element.documentationComment != null) {
            return removeDartDocDelimiters(element.documentationComment);
        }
        let overridden : any = findOverriddenElements(element);
        for(let superElement of ((_) : core.DartList<any> =>  {
            {
                _.addAll(overridden.superElements);
                _.addAll(overridden.interfaceElements);
                return _;
            }
        })(new core.DartList.literal())) {
            let rawDoc : string = superElement.documentationComment;
            if (rawDoc != null) {
                let interfaceClass : any = superElement.enclosingElement;
                return op(Op.PLUS,removeDartDocDelimiters(rawDoc),`\n\nCopied from `${interfaceClass.displayName}`.`);
            }
        }
        return null;
    }
    static _safeToString(obj : any) {
        return ((_6_)=>(!!_6_)?_6_.toString():null)(obj);
    }
}

export class properties {
}
