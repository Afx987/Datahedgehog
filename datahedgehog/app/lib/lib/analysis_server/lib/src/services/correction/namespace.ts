/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/namespace.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var getExportedElement : (library : any,name : string) => any = (library : any,name : string) : any =>  {
    if (op(Op.EQUALS,library,null)) {
        return null;
    }
    return getExportNamespaceForLibrary(library).get(name);
};
export var getExportNamespaceForDirective : (exp : any) => core.DartMap<string,any> = (exp : any) : core.DartMap<string,any> =>  {
    let namespace : any = new bare.createInstance(any,null).createExportNamespaceForDirective(exp);
    return namespace.definedNames;
};
export var getExportNamespaceForLibrary : (library : any) => core.DartMap<string,any> = (library : any) : core.DartMap<string,any> =>  {
    let namespace : any = new bare.createInstance(any,null).createExportNamespaceForLibrary(library);
    return namespace.definedNames;
};
export var getImportElement : (prefixNode : any) => any = (prefixNode : any) : any =>  {
    let parent : any = prefixNode.parent;
    if (is(parent, any)) {
        return parent.element;
    }
    let info : ImportElementInfo = internal_getImportElementInfo(prefixNode);
    return ((t)=>(!!t)?t.element:null)(info);
};
export var internal_getImportElement : (libraryElement : any,prefix : string,element : any,importElementsMap : core.DartMap<any,core.DartSet<any>>) => any = (libraryElement : any,prefix : string,element : any,importElementsMap : core.DartMap<any,core.DartSet<any>>) : any =>  {
    if (op(Op.EQUALS,element,null)) {
        return null;
    }
    if (isNot(element.enclosingElement, any)) {
        return null;
    }
    let usedLibrary : any = element.library;
    let candidates : core.DartList<any> = null;
    for(let importElement of libraryElement.imports) {
        if (importElement.importedLibrary != usedLibrary) {
            continue;
        }
        let prefixElement : any = importElement.prefix;
        if (prefix == null) {
            if (prefixElement != null) {
                continue;
            }
        }else {
            if (op(Op.EQUALS,prefixElement,null)) {
                continue;
            }
            if (prefix != prefixElement.name) {
                continue;
            }
        }
        if (op(Op.EQUALS,importElement.combinators.length,0)) {
            return importElement;
        }
        if (candidates == null) {
            candidates = new core.DartList.literal();
        }
        candidates.add(importElement);
    }
    if (candidates == null) {
        return null;
    }
    if (candidates.length == 1) {
        return candidates[0];
    }
    for(let importElement of candidates) {
        if (importElementsMap.containsKey(importElement)) {
            continue;
        }
        let namespace : any = new bare.createInstance(any,null).createImportNamespaceForDirective(importElement);
        let elements : core.DartSet<any> = new core.DartSet.from(namespace.definedNames.values);
        importElementsMap.set(importElement,elements);
    }
    for(let importElement of importElementsMap.keys) {
        let elements : core.DartSet<any> = importElementsMap.get(importElement);
        if (elements.contains(element)) {
            return importElement;
        }
    }
    return null;
};
export var internal_getImportElementInfo : (prefixNode : any) => ImportElementInfo = (prefixNode : any) : ImportElementInfo =>  {
    let info : ImportElementInfo = new ImportElementInfo();
    let parent : any = prefixNode.parent;
    let unit : any = prefixNode.getAncestor((node : any) =>  {
        return is(node, any);
    });
    let libraryElement : any = resolutionMap.elementDeclaredByCompilationUnit(unit).library;
    let usedElement : any = null;
    if (is(parent, any)) {
        let prefixed : any = parent;
        if (op(Op.EQUALS,prefixed.prefix,prefixNode)) {
            usedElement = prefixed.staticElement;
            info.periodEnd = prefixed.period.end;
        }
    }
    if (is(parent, any)) {
        let invocation : any = parent;
        if (op(Op.EQUALS,invocation.target,prefixNode)) {
            usedElement = invocation.methodName.staticElement;
            info.periodEnd = invocation.operator.end;
        }
    }
    if (op(Op.EQUALS,usedElement,null)) {
        return null;
    }
    let prefix : string = prefixNode.name;
    let importElementsMap : core.DartMap<any,core.DartSet<any>> = new core.DartMap.literal([
    ]);
    info.element = internal_getImportElement(libraryElement,prefix,usedElement,importElementsMap);
    if (op(Op.EQUALS,info.element,null)) {
        return null;
    }
    return info;
};
export namespace ImportElementInfo {
    export type Constructors = 'ImportElementInfo';
    export type Interface = Omit<ImportElementInfo, Constructors>;
}
@DartClass
export class ImportElementInfo {
    element : any;

    periodEnd : number;

    constructor() {
    }
    @defaultConstructor
    ImportElementInfo() {
    }
}

export class properties {
}
