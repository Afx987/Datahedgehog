/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/domains/analysis/implemented_dart.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ImplementedComputer {
    export type Constructors = 'ImplementedComputer';
    export type Interface = Omit<ImplementedComputer, Constructors>;
}
@DartClass
export class ImplementedComputer {
    searchEngine : any;

    unitElement : any;

    classes : core.DartList<any>;

    members : core.DartList<any>;

    subtypes : core.DartSet<any>;

    constructor(searchEngine : any,unitElement : any) {
    }
    @defaultConstructor
    ImplementedComputer(searchEngine : any,unitElement : any) {
        this.classes = new core.DartList.literal<any>();
        this.members = new core.DartList.literal<any>();
        this.searchEngine = searchEngine;
        this.unitElement = unitElement;
    }
    compute() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            for(let type of this.unitElement.types) {
                if (op(Op.EQUALS,type.supertype,null)) {
                    this._addImplementedClass(type);
                    type.accessors.forEach(this._addImplementedMember.bind(this));
                    type.fields.forEach(this._addImplementedMember.bind(this));
                    type.methods.forEach(this._addImplementedMember.bind(this));
                    continue;
                }
                this.subtypes = await this.searchEngine.searchAllSubtypes(type);
                if (this.subtypes.isNotEmpty) {
                    this._addImplementedClass(type);
                }
                type.accessors.forEach(this._addMemberIfImplemented.bind(this));
                type.fields.forEach(this._addMemberIfImplemented.bind(this));
                type.methods.forEach(this._addMemberIfImplemented.bind(this));
            }
        } )());
    }

    _addImplementedClass(type : any) : void {
        let offset : number = type.nameOffset;
        let length : number = type.nameLength;
        this.classes.add(new bare.createInstance(any,null,offset,length));
    }
    _addImplementedMember(member : any) : void {
        let offset : number = member.nameOffset;
        let length : number = member.nameLength;
        this.members.add(new bare.createInstance(any,null,offset,length));
    }
    _addMemberIfImplemented(element : any) : void {
        if (element.isSynthetic || ImplementedComputer._isStatic(element)) {
            return;
        }
        if (this._hasOverride(element)) {
            this._addImplementedMember(element);
        }
    }
    _hasOverride(element : any) : boolean {
        let name : string = element.displayName;
        let library : any = element.library;
        for(let subtype of this.subtypes) {
            let subElement : any = subtype.getMethod(name);
            if (op(Op.EQUALS,subElement,null)) {
                subElement = subtype.getField(name);
            }
            if (subElement != null && !subElement.isStatic && subElement.isAccessibleIn(library)) {
                return true;
            }
        }
        return false;
    }
    static _isStatic(element : any) : boolean {
        if (is(element, any)) {
            return element.isStatic;
        }else if (is(element, any)) {
            return element.isStatic;
        }
        return false;
    }
}

export class properties {
}
