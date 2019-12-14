/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/search/type_hierarchy.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace TypeHierarchyComputer {
    export type Constructors = 'TypeHierarchyComputer';
    export type Interface = Omit<TypeHierarchyComputer, Constructors>;
}
@DartClass
export class TypeHierarchyComputer {
    _searchEngine : any;

    _pivotElement : any;

    _pivotLibrary : any;

    _pivotKind : any;

    _pivotName : string;

    _pivotFieldFinal : boolean;

    _pivotClass : any;

    _items : core.DartList<any>;

    _itemClassElements : core.DartList<any>;

    _elementItemMap : core.DartMap<any,any>;

    constructor(_searchEngine : any,_pivotElement : any) {
    }
    @defaultConstructor
    TypeHierarchyComputer(_searchEngine : any,_pivotElement : any) {
        this._items = new core.DartList.literal<any>();
        this._itemClassElements = new core.DartList.literal<any>();
        this._elementItemMap = new core.DartHashMap<any,any>();
        this._searchEngine = _searchEngine;
        this._pivotElement = _pivotElement;
        this._pivotLibrary = this._pivotElement.library;
        this._pivotKind = this._pivotElement.kind;
        this._pivotName = this._pivotElement.name;
        let element : any = this._pivotElement;
        if (is(this._pivotElement, any)) {
            this._pivotFieldFinal = (this._pivotElement as any).isFinal;
            element = this._pivotElement.enclosingElement;
        }
        if (is(this._pivotElement, any)) {
            element = this._pivotElement.enclosingElement;
        }
        if (is(element, any)) {
            this._pivotClass = element;
        }
    }
    compute() : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this._pivotClass != null) {
                let type : any = this._pivotClass.type;
                this._createSuperItem(type);
                await this._createSubclasses(this._items[0],0,type);
                return this._items;
            }
            return null;
        } )());
    }

    computeSuper() : core.DartList<any> {
        if (this._pivotClass != null) {
            let type : any = this._pivotClass.type;
            this._createSuperItem(type);
            return this._items;
        }
        return null;
    }
    _createSubclasses(item : any,itemId : number,type : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let subElements : core.DartSet<any> = await getDirectSubClasses(this._searchEngine,type.element);
            let subItemIds : core.DartList<number> = new core.DartList.literal<number>();
            for(let subElement of subElements) {
                let subItem : any = this._elementItemMap.get(subElement);
                if (subItem != null) {
                    let id : number = this._items.indexOf(subItem);
                    item.subclasses.add(id);
                    continue;
                }
                let subMemberElement : any = this._findMemberElement(subElement);
                subItem = new bare.createInstance(any,null,convertElement(subElement),{
                    memberElement : subMemberElement != null ? convertElement(subMemberElement) : null,superclass : itemId});
                let subItemId : number = this._items.length;
                this._elementItemMap.set(subElement,subItem);
                this._items.add(subItem);
                this._itemClassElements.add(subElement);
                item.subclasses.add(subItemId);
                subItemIds.add(subItemId);
            }
            for(let subItemId of subItemIds) {
                let subItem : any = this._items[subItemId];
                let subItemElement : any = this._itemClassElements[subItemId];
                let subType : any = subItemElement.type;
                await this._createSubclasses(subItem,subItemId,subType);
            }
        } )());
    }

    _createSuperItem(type : any) : number {
        let item : any = this._elementItemMap.get(type.element);
        if (item != null) {
            return this._items.indexOf(item);
        }
        let itemId : number;
        {
            let displayName : string = null;
            if (type.typeArguments.isNotEmpty) {
                displayName = type.toString();
            }
            let classElement : any = type.element;
            let memberElement : any = this._findMemberElement(classElement);
            item = new bare.createInstance(any,null,convertElement(classElement),{
                displayName : displayName,memberElement : memberElement != null ? convertElement(memberElement) : null});
            this._elementItemMap.set(classElement,item);
            itemId = this._items.length;
            this._items.add(item);
            this._itemClassElements.add(classElement);
        }
        {
            let superType : any = type.superclass;
            if (superType != null) {
                item.superclass = this._createSuperItem(superType);
            }
        }
        type.mixins.forEach((type : any) =>  {
            let id : number = this._createSuperItem(type);
            item.mixins.add(id);
        });
        type.interfaces.forEach((type : any) =>  {
            let id : number = this._createSuperItem(type);
            item.interfaces.add(id);
        });
        return itemId;
    }
    _findMemberElement(clazz : any) : any {
        let result : any;
        if (op(Op.EQUALS,this._pivotKind,ElementKind.METHOD)) {
            result = clazz.getMethod(this._pivotName);
        }else if (op(Op.EQUALS,this._pivotKind,ElementKind.GETTER)) {
            result = clazz.getGetter(this._pivotName);
        }else if (op(Op.EQUALS,this._pivotKind,ElementKind.SETTER)) {
            result = clazz.getSetter(this._pivotName);
        }else if (op(Op.EQUALS,this._pivotKind,ElementKind.FIELD)) {
            result = clazz.getGetter(this._pivotName);
            if (op(Op.EQUALS,result,null) && !this._pivotFieldFinal) {
                result = clazz.getSetter(this._pivotName);
            }
        }
        if (result != null && result.isAccessibleIn(this._pivotLibrary)) {
            return result;
        }
        for(let mixin of clazz.mixins.reversed) {
            let mixinElement : any = mixin.element;
            if (op(Op.EQUALS,this._pivotKind,ElementKind.METHOD)) {
                result = mixinElement.lookUpMethod(this._pivotName,this._pivotLibrary);
            }else if (op(Op.EQUALS,this._pivotKind,ElementKind.GETTER)) {
                result = mixinElement.lookUpGetter(this._pivotName,this._pivotLibrary);
            }else if (op(Op.EQUALS,this._pivotKind,ElementKind.SETTER)) {
                result = mixinElement.lookUpSetter(this._pivotName,this._pivotLibrary);
            }else if (op(Op.EQUALS,this._pivotKind,ElementKind.FIELD)) {
                result = mixinElement.lookUpGetter(this._pivotName,this._pivotLibrary);
                if (op(Op.EQUALS,result,null) && !this._pivotFieldFinal) {
                    result = mixinElement.lookUpSetter(this._pivotName,this._pivotLibrary);
                }
            }
            if (op(Op.EQUALS,result,this._pivotElement)) {
                return null;
            }
            if (result != null) {
                return result;
            }
        }
        return null;
    }
}

export class properties {
}
