/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/canonical_name.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./ast";
import * as lib4 from "@dart2ts/dart/uri";

export namespace CanonicalName {
    export type Constructors = '_' | 'root';
    export type Interface = Omit<CanonicalName, Constructors>;
}
@DartClass
export class CanonicalName {
    parent : CanonicalName;

    name : string;

    _children : core.DartMap<string,CanonicalName>;

    reference : lib3.Reference;

    index : number;

    @namedConstructor
    _(parent : CanonicalName,name : string) {
        this.index = -1;
        this.parent = parent;
        this.name = name;
        /* TODO (AssertStatementImpl) : assert (name != null); */;
    }
    static _ : new(parent : CanonicalName,name : string) => CanonicalName;

    @namedConstructor
    root() {
        this.index = -1;
        this.parent = null;
        this.name = '';
    }
    static root : new() => CanonicalName;

    get isRoot() : boolean {
        return op(Op.EQUALS,this.parent,null);
    }
    get children() : core.DartIterable<CanonicalName> {
        return (((t)=>(!!t)?t.values:null)(this._children) || new core.DartList.literal<CanonicalName>());
    }
    getChild(name : string) : CanonicalName {
        let map = this._children = ( this._children ) || ( new core.DartMap.literal([
        ]) );
        return map.set(name,new CanonicalName._(this,name));
    }
    getChildFromUri(uri : lib4.Uri) : CanonicalName {
        return this.getChild(`${uri}`);
    }
    getChildFromQualifiedName(name : lib3.Name) : CanonicalName {
        return name.isPrivate ? this.getChildFromUri(name.library.importUri).getChild(name.name) : this.getChild(name.name);
    }
    getChildFromMember(member : lib3.Member) : CanonicalName {
        return this.getChild(CanonicalName.getMemberQualifier(member)).getChildFromQualifiedName(member.name);
    }
    getChildFromTypedef(typedef_ : lib3.Typedef) : CanonicalName {
        return this.getChild('@typedefs').getChild(typedef_.name);
    }
    bindTo(target : lib3.Reference) : void {
        if (op(Op.EQUALS,this.reference,target)) return;
        if (this.reference != null) {
            throw `${this} is already bound`;
        }
        if (target.canonicalName != null) {
            throw `Cannot bind ${this} to ${target.node}, target is already bound to ` + `${target.canonicalName}`;
        }
        target.canonicalName = this;
        this.reference = target;
    }
    unbind() : void {
        if (op(Op.EQUALS,this.reference,null)) return;
        /* TODO (AssertStatementImpl) : assert (reference.canonicalName == this); */;
        this.reference.canonicalName = null;
        this.reference = null;
    }
    unbindAll() : void {
        this.unbind();
        for(let child of this.children) {
            child.unbindAll();
        }
    }
    toString() : string {
        return op(Op.EQUALS,this.parent,null) ? 'root' : `${this.parent}::${this.name}`;
    }
    getReference() : lib3.Reference {
        return this.reference = ( this.reference ) || ( (((_) : lib3.Reference =>  {
            {
                _.canonicalName = this;
                return _;
            }
        })(new lib3.Reference())) );
    }
    static getMemberQualifier(member : lib3.Member) : string {
        if (is(member, lib3.Procedure)) {
            if (member.isGetter) return '@getters';
            if (member.isSetter) return '@setters';
            if (member.isFactory) return '@factories';
            return '@methods';
        }
        if (is(member, lib3.Field)) {
            return '@fields';
        }
        if (is(member, lib3.Constructor)) {
            return '@constructors';
        }
        throw `Unexpected member: ${member}`;
    }
}

export class properties {
}
