/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/class_hierarchy_basic.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace BasicClassHierarchy {
    export type Constructors = 'BasicClassHierarchy';
    export type Interface = Omit<BasicClassHierarchy, Constructors>;
}
@DartClass
export class BasicClassHierarchy {
    superclasses : core.DartMap<any,core.DartSet<any>>;

    superMixtures : core.DartMap<any,core.DartSet<any>>;

    supertypes : core.DartMap<any,core.DartSet<any>>;

    supertypeInstantiations : core.DartMap<any,core.DartMap<any,any>>;

    gettersAndCalls : core.DartMap<any,core.DartMap<any,any>>;

    setters : core.DartMap<any,core.DartMap<any,any>>;

    interfaceGettersAndCalls : core.DartMap<any,core.DartMap<any,core.DartList<any>>>;

    interfaceSetters : core.DartMap<any,core.DartMap<any,core.DartList<any>>>;

    classes : core.DartList<any>;

    classIndex : core.DartMap<any,number>;

    constructor(program : any) {
    }
    @defaultConstructor
    BasicClassHierarchy(program : any) {
        this.superclasses = new core.DartMap.literal([
        ]);
        this.superMixtures = new core.DartMap.literal([
        ]);
        this.supertypes = new core.DartMap.literal([
        ]);
        this.supertypeInstantiations = new core.DartMap.literal([
        ]);
        this.gettersAndCalls = new core.DartMap.literal([
        ]);
        this.setters = new core.DartMap.literal([
        ]);
        this.interfaceGettersAndCalls = new core.DartMap.literal([
        ]);
        this.interfaceSetters = new core.DartMap.literal([
        ]);
        this.classes = new core.DartList.literal<any>();
        this.classIndex = new core.DartMap.literal([
        ]);
        for(let library of program.libraries) {
            for(let classNode of library.classes) {
                this.buildSuperTypeSets(classNode);
                this.buildSuperTypeInstantiations(classNode);
                this.buildDispatchTable(classNode);
                this.buildInterfaceTable(classNode);
            }
        }
    }
    forEachOverridePair(class_ : any,callback : (member : any,superMember : any,setter : boolean) => any) : void {
        var report : (member : any,superMember : any,setter : boolean) => void = (member : any,superMember : any,setter : boolean) : void =>  {
            if (!core.identical(member,superMember)) {
                callback(member,superMember,setter);
            }
        };
        for(let member of class_.mixin.members) {
            for(let supertype of class_.supers) {
                if (member.hasGetter) {
                    for(let superMember of this.getInterfaceMembersByName(supertype.classNode,member.name)) {
                        report(member,superMember,false);
                    }
                }
                if (member.hasSetter) {
                    for(let superMember of this.getInterfaceMembersByName(supertype.classNode,member.name,{
                        setter : true})) {
                        report(member,superMember,true);
                    }
                }
            }
        }
        for(let setter of new core.DartList.literal(true,false)) {
            for(let member of this.getDispatchTargets(class_,{
                setters : setter})) {
                for(let supertype of class_.supers) {
                    for(let superMember of this.getInterfaceMembersByName(supertype.classNode,member.name,{
                        setter : setter})) {
                        report(member,superMember,setter);
                    }
                }
                if (!class_.isAbstract && member.enclosingClass != class_.mixin) {
                    for(let declaredMember of this.getInterfaceMembersByName(class_,member.name,{
                        setter : setter})) {
                        report(member,declaredMember,setter);
                    }
                }
            }
        }
    }
    buildSuperTypeSets(node : any) : void {
        if (this.superclasses.containsKey(node)) return;
        this.superclasses.set(node,((_) : core.DartSet<any> =>  {
            {
                _.add(node);
                return _;
            }
        })(new core.DartSet<any>()));
        this.superMixtures.set(node,((_) : core.DartSet<any> =>  {
            {
                _.add(node);
                return _;
            }
        })(new core.DartSet<any>()));
        this.supertypes.set(node,((_) : core.DartSet<any> =>  {
            {
                _.add(node);
                return _;
            }
        })(new core.DartSet<any>()));
        if (node.supertype != null) {
            this.buildSuperTypeSets(node.supertype.classNode);
            this.superclasses.get(node).addAll(this.superclasses.get(node.supertype.classNode));
            this.superMixtures.get(node).addAll(this.superMixtures.get(node.supertype.classNode));
            this.supertypes.get(node).addAll(this.supertypes.get(node.supertype.classNode));
        }
        if (node.mixedInType != null) {
            this.buildSuperTypeSets(node.mixedInType.classNode);
            this.superMixtures.get(node).addAll(this.superMixtures.get(node.mixedInType.classNode));
            this.supertypes.get(node).addAll(this.supertypes.get(node.mixedInType.classNode));
        }
        for(let supertype of node.implementedTypes) {
            this.buildSuperTypeSets(supertype.classNode);
            this.supertypes.get(node).addAll(this.supertypes.get(supertype.classNode));
        }
        this.classes.add(node);
        this.classIndex.set(node,this.classes.length - 1);
    }
    buildSuperTypeInstantiations(node : any) : void {
        if (this.supertypeInstantiations.containsKey(node)) return;
        this.supertypeInstantiations.set(node,new core.DartMap.literal([
            [node,node.asThisSupertype]]));
        for(let supertype of node.supers) {
            let superclass = supertype.classNode;
            this.buildSuperTypeInstantiations(superclass);
            let substitution = Substitution.fromPairs(superclass.typeParameters,supertype.typeArguments);
            this.supertypeInstantiations.get(superclass).forEach((key : any,type : any) =>  {
                this.supertypeInstantiations.get(node).set(key,substitution.substituteSupertype(type));
            });
        }
    }
    buildDispatchTable(node : any) : void {
        if (this.gettersAndCalls.containsKey(node)) return;
        this.gettersAndCalls.set(node,new core.DartMap.literal([
        ]));
        this.setters.set(node,new core.DartMap.literal([
        ]));
        if (node.supertype != null) {
            this.buildDispatchTable(node.supertype.classNode);
            this.gettersAndCalls.get(node).addAll(this.gettersAndCalls.get(node.supertype.classNode));
            this.setters.get(node).addAll(this.setters.get(node.supertype.classNode));
        }
        let mixin : any = (((t)=>(!!t)?t.classNode:null)(node.mixedInType) || node);
        for(let procedure of mixin.procedures) {
            if (procedure.isStatic || procedure.isAbstract) continue;
            if (op(Op.EQUALS,procedure.kind,ProcedureKind.Setter)) {
                this.setters.get(node).set(procedure.name,procedure);
            }else {
                this.gettersAndCalls.get(node).set(procedure.name,procedure);
            }
        }
        for(let field of mixin.fields) {
            if (field.isStatic) continue;
            this.gettersAndCalls.get(node).set(field.name,field);
            if (!field.isFinal) {
                this.setters.get(node).set(field.name,field);
            }
        }
    }
    mergeMaps(source : core.DartMap<any,core.DartList<any>>,destination : core.DartMap<any,core.DartList<any>>) : void {
        for(let name of source.keys) {
            destination.putIfAbsent(name,() =>  {
                return new core.DartList.literal<any>();
            }).addAll(source.get(name));
        }
    }
    buildInterfaceTable(node : any) : void {
        if (this.interfaceGettersAndCalls.containsKey(node)) return;
        this.interfaceGettersAndCalls.set(node,new core.DartMap.literal([
        ]));
        this.interfaceSetters.set(node,new core.DartMap.literal([
        ]));
        var inheritFrom : (type : any) => void = (type : any) : void =>  {
            if (op(Op.EQUALS,type,null)) return;
            this.buildInterfaceTable(type.classNode);
            this.mergeMaps(this.interfaceGettersAndCalls.get(type.classNode),this.interfaceGettersAndCalls.get(node));
            this.mergeMaps(this.interfaceSetters.get(type.classNode),this.interfaceSetters.get(node));
        };
        inheritFrom(node.supertype);
        inheritFrom(node.mixedInType);
        node.implementedTypes.forEach(inheritFrom);
        for(let procedure of node.mixin.procedures) {
            if (procedure.isStatic) continue;
            if (op(Op.EQUALS,procedure.kind,ProcedureKind.Setter)) {
                this.interfaceSetters.get(node).set(procedure.name,new core.DartList.literal<any>(procedure));
            }else {
                this.interfaceGettersAndCalls.get(node).set(procedure.name,new core.DartList.literal<any>(procedure));
            }
        }
        for(let field of node.mixin.fields) {
            if (field.isStatic) continue;
            this.interfaceGettersAndCalls.get(node).set(field.name,new core.DartList.literal<any>(field));
            if (!field.isFinal) {
                this.interfaceSetters.get(node).set(field.name,new core.DartList.literal<any>(field));
            }
        }
    }
    isSubclassOf(subtype : any,supertype : any) : boolean {
        return this.superclasses.get(subtype).contains(supertype);
    }
    isSubmixtureOf(subtype : any,supertype : any) : boolean {
        return this.superMixtures.get(subtype).contains(supertype);
    }
    isSubtypeOf(subtype : any,supertype : any) : boolean {
        return this.supertypes.get(subtype).contains(supertype);
    }
    getClassAsInstanceOf(type : any,supertype : any) : any {
        return this.supertypeInstantiations.get(type).get(supertype);
    }
    getDispatchTarget(class_ : any,name : any,_namedArguments? : {setter? : boolean}) : any {
        let {setter} = Object.assign({
            "setter" : false}, _namedArguments );
        return setter ? this.setters.get(class_).get(name) : this.gettersAndCalls.get(class_).get(name);
    }
    getDispatchTargets(class_ : any,_namedArguments? : {setters? : boolean}) : core.DartIterable<any> {
        let {setters} = Object.assign({
            "setters" : false}, _namedArguments );
        return setters ? this.setters.get(class_).values : this.gettersAndCalls.get(class_).values;
    }
    tryFirst(members : core.DartList<any>) : any {
        return (members == null || members.isEmpty) ? null : members[0];
    }
    getInterfaceMember(class_ : any,name : any,_namedArguments? : {setter? : boolean}) : any {
        let {setter} = Object.assign({
            "setter" : false}, _namedArguments );
        return this.tryFirst(this.getInterfaceMembersByName(class_,name,{
            setter : setter}));
    }
    getInterfaceMembersByName(class_ : any,name : any,_namedArguments? : {setter? : boolean}) : core.DartIterable<any> {
        let {setter} = Object.assign({
            "setter" : false}, _namedArguments );
        let iterable = setter ? this.interfaceSetters.get(class_).get(name) : this.interfaceGettersAndCalls.get(class_).get(name);
        return iterable == null ? new core.DartList.literal<any>() : iterable;
    }
    getInterfaceMembers(class_ : any,_namedArguments? : {setters? : boolean}) : core.DartIterable<any> {
        let {setters} = Object.assign({
            "setters" : false}, _namedArguments );
        return setters ? this.interfaceSetters.get(class_).values.expand((x : any) =>  {
            return x;
        }) : this.interfaceGettersAndCalls.get(class_).values.expand((x : any) =>  {
            return x;
        });
    }
    getClassIndex(node : any) : number {
        return this.classIndex.get(node);
    }
    getExpenseHistogram() : core.DartList<number> {
        return new core.DartList.literal<number>();
    }
    getCompressionRatio() : double {
        return 0.0;
    }
    getSuperTypeHashTableSize() : number {
        return 0;
    }
    noSuchMethod(inv : any) {
        return super.noSuchMethod(inv);
    }
}

export class properties {
}
