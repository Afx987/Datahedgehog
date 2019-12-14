/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/computer/computer_overrides.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var findOverriddenElements : (element : any) => OverriddenElements = (element : any) : OverriddenElements =>  {
    if (is(((t)=>(!!t)?t.enclosingElement:null)(element), any)) {
        return new _OverriddenElementsFinder(element).find();
    }
    return new OverriddenElements(element,new core.DartList.literal<any>(),new core.DartList.literal<any>());
};
export namespace DartUnitOverridesComputer {
    export type Constructors = 'DartUnitOverridesComputer';
    export type Interface = Omit<DartUnitOverridesComputer, Constructors>;
}
@DartClass
export class DartUnitOverridesComputer {
    _unit : any;

    _overrides : core.DartList<any>;

    constructor(_unit : any) {
    }
    @defaultConstructor
    DartUnitOverridesComputer(_unit : any) {
        this._overrides = new core.DartList.literal<any>();
        this._unit = _unit;
    }
    compute() : core.DartList<any> {
        for(let unitMember of this._unit.declarations) {
            if (is(unitMember, any)) {
                for(let classMember of unitMember.members) {
                    if (is(classMember, any)) {
                        if (classMember.isStatic) {
                            continue;
                        }
                        this._addOverride(classMember.name);
                    }
                    if (is(classMember, any)) {
                        if (classMember.isStatic) {
                            continue;
                        }
                        let fields : core.DartList<any> = classMember.fields.variables;
                        for(let field of fields) {
                            this._addOverride(field.name);
                        }
                    }
                }
            }
        }
        return this._overrides;
    }
    _addOverride(node : any) : void {
        let element : any = node.staticElement;
        let overridesResult : OverriddenElements = new _OverriddenElementsFinder(element).find();
        let superElements : core.DartList<any> = overridesResult.superElements;
        let interfaceElements : core.DartList<any> = overridesResult.interfaceElements;
        if (superElements.isNotEmpty || interfaceElements.isNotEmpty) {
            let superMember : any = superElements.isNotEmpty ? null /*topLevl*/.newOverriddenMember_fromEngine(superElements.first) : null;
            let interfaceMembers : core.DartList<any> = interfaceElements.map((member : any) =>  {
                return null /*topLevl*/.newOverriddenMember_fromEngine(member);
            }).toList();
            this._overrides.add(new bare.createInstance(any,null,node.offset,node.length,{
                superclassMember : superMember,interfaceMembers : nullIfEmpty(interfaceMembers)}));
        }
    }
}

export namespace OverriddenElements {
    export type Constructors = 'OverriddenElements';
    export type Interface = Omit<OverriddenElements, Constructors>;
}
@DartClass
export class OverriddenElements {
    element : any;

    superElements : core.DartList<any>;

    interfaceElements : core.DartList<any>;

    constructor(element : any,superElements : core.DartList<any>,interfaceElements : core.DartList<any>) {
    }
    @defaultConstructor
    OverriddenElements(element : any,superElements : core.DartList<any>,interfaceElements : core.DartList<any>) {
        this.element = element;
        this.superElements = superElements;
        this.interfaceElements = interfaceElements;
    }
}

export namespace _OverriddenElementsFinder {
    export type Constructors = '_OverriddenElementsFinder';
    export type Interface = Omit<_OverriddenElementsFinder, Constructors>;
}
@DartClass
export class _OverriddenElementsFinder {
    private static __$FIELD_KINDS : core.DartList<any>;
    static get FIELD_KINDS() : core.DartList<any> { 
        if (this.__$FIELD_KINDS===undefined) {
            this.__$FIELD_KINDS = new core.DartList.literal<any>(ElementKind.FIELD,ElementKind.GETTER,ElementKind.SETTER);
        }
        return this.__$FIELD_KINDS;
    }

    private static __$GETTER_KINDS : core.DartList<any>;
    static get GETTER_KINDS() : core.DartList<any> { 
        if (this.__$GETTER_KINDS===undefined) {
            this.__$GETTER_KINDS = new core.DartList.literal<any>(ElementKind.FIELD,ElementKind.GETTER);
        }
        return this.__$GETTER_KINDS;
    }

    private static __$METHOD_KINDS : core.DartList<any>;
    static get METHOD_KINDS() : core.DartList<any> { 
        if (this.__$METHOD_KINDS===undefined) {
            this.__$METHOD_KINDS = new core.DartList.literal<any>(ElementKind.METHOD);
        }
        return this.__$METHOD_KINDS;
    }

    private static __$SETTER_KINDS : core.DartList<any>;
    static get SETTER_KINDS() : core.DartList<any> { 
        if (this.__$SETTER_KINDS===undefined) {
            this.__$SETTER_KINDS = new core.DartList.literal<any>(ElementKind.FIELD,ElementKind.SETTER);
        }
        return this.__$SETTER_KINDS;
    }

    _seed : any;

    _library : any;

    _class : any;

    _name : string;

    _kinds : core.DartList<any>;

    _superElements : core.DartList<any>;

    _interfaceElements : core.DartList<any>;

    _visited : core.DartSet<any>;

    constructor(seed : any) {
    }
    @defaultConstructor
    _OverriddenElementsFinder(seed : any) {
        this._superElements = new core.DartList.literal<any>();
        this._interfaceElements = new core.DartList.literal<any>();
        this._visited = new core.DartSet<any>();
        this._seed = seed;
        this._class = seed.enclosingElement;
        if (op(Op.EQUALS,this._class,null)) {
            let type : core.Type = seed.runtimeType;
            let name : string = seed.name;
            throw new core.ArgumentError(`The ${type} named ${name} does not have an enclosing element`);
        }
        this._library = this._class.library;
        this._name = seed.displayName;
        if (is(seed, any)) {
            this._kinds = _OverriddenElementsFinder.METHOD_KINDS;
        }else if (is(seed, any)) {
            this._kinds = seed.isGetter ? _OverriddenElementsFinder.GETTER_KINDS : _OverriddenElementsFinder.SETTER_KINDS;
        }else {
            this._kinds = _OverriddenElementsFinder.FIELD_KINDS;
        }
    }
    find() : OverriddenElements {
        this._visited.clear();
        this._addSuperOverrides(this._class.supertype);
        this._visited.clear();
        this._addInterfaceOverrides(this._class.type,false);
        this._superElements.forEach(this._interfaceElements.remove.bind(this._interfaceElements));
        return new OverriddenElements(this._seed,this._superElements,this._interfaceElements);
    }
    _addInterfaceOverrides(type : any,checkType : boolean) : void {
        if (op(Op.EQUALS,type,null)) {
            return;
        }
        if (!this._visited.add(type)) {
            return;
        }
        if (checkType) {
            let element : any = this._lookupMember(type.element);
            if (element != null && !this._interfaceElements.contains(element)) {
                this._interfaceElements.add(element);
            }
        }
        for(let interfaceType of type.interfaces) {
            this._addInterfaceOverrides(interfaceType,true);
        }
        this._addInterfaceOverrides(type.superclass,checkType);
    }
    _addSuperOverrides(type : any) : void {
        if (op(Op.EQUALS,type,null)) {
            return;
        }
        if (!this._visited.add(type)) {
            return;
        }
        let element : any = this._lookupMember(type.element);
        if (element != null && !this._superElements.contains(element)) {
            this._superElements.add(element);
        }
        this._addSuperOverrides(type.superclass);
    }
    _lookupMember(classElement : any) : any {
        if (op(Op.EQUALS,classElement,null)) {
            return null;
        }
        let member : any;
        if (this._kinds.contains(ElementKind.METHOD)) {
            member = classElement.lookUpMethod(this._name,this._library);
            if (member != null) {
                return member;
            }
        }
        if (this._kinds.contains(ElementKind.GETTER)) {
            member = classElement.lookUpGetter(this._name,this._library);
            if (member != null) {
                return member;
            }
        }
        if (this._kinds.contains(ElementKind.SETTER)) {
            member = classElement.lookUpSetter(this._name + '=',this._library);
            if (member != null) {
                return member;
            }
        }
        return null;
    }
}

export class properties {
}
