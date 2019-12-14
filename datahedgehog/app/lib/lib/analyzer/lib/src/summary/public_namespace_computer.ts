/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/public_namespace_computer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var computePublicNamespace : (unit : any) => any = (unit : any) : any =>  {
    let visitor : _PublicNamespaceVisitor = new _PublicNamespaceVisitor();
    unit.accept(visitor);
    return new bare.createInstance(any,null,{
        names : visitor.names,exports : visitor.exports,parts : visitor.parts});
};
export var serializeConfiguration : (configuration : any) => any = (configuration : any) : any =>  {
    return new bare.createInstance(any,null,{
        name : configuration.name.components.map((i : any) =>  {
            return i.name;
        }).join('.'),value : (((t)=>(!!t)?t.stringValue:null)(configuration.value) || 'true'),uri : configuration.uri.stringValue});
};
export namespace _CombinatorEncoder {
    export type Constructors = '_CombinatorEncoder';
    export type Interface = Omit<_CombinatorEncoder, Constructors>;
}
@DartClass
export class _CombinatorEncoder extends any {
    constructor() {
    }
    @defaultConstructor
    _CombinatorEncoder() {
    }
    encodeNames(names : any) : core.DartList<string> {
        return names.map((id : any) =>  {
            return id.name;
        }).toList();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitHideCombinator(node : any) : any {
        return new bare.createInstance(any,null,{
            hides : this.encodeNames(node.hiddenNames)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitShowCombinator(node : any) : any {
        return new bare.createInstance(any,null,{
            shows : this.encodeNames(node.shownNames),offset : node.offset,end : node.end});
    }
}

export namespace _PublicNamespaceVisitor {
    export type Constructors = '_PublicNamespaceVisitor';
    export type Interface = Omit<_PublicNamespaceVisitor, Constructors>;
}
@DartClass
export class _PublicNamespaceVisitor extends any {
    names : core.DartList<any>;

    exports : core.DartList<any>;

    parts : core.DartList<string>;

    constructor() {
    }
    @defaultConstructor
    _PublicNamespaceVisitor() {
        this.names = new core.DartList.literal<any>();
        this.exports = new core.DartList.literal<any>();
        this.parts = new core.DartList.literal<string>();
    }
    addNameIfPublic(name : string,kind : any,numTypeParameters : number) : any {
        if (this.isPublic(name)) {
            let b : any = new bare.createInstance(any,null,{
                name : name,kind : kind,numTypeParameters : numTypeParameters});
            this.names.add(b);
            return b;
        }
        return null;
    }
    isPublic(name : string) : boolean {
        return !new core.DartString(name).startsWith('_');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) {
        let cls : any = this.addNameIfPublic(node.name.name,ReferenceKind.classOrEnum,(((t)=>(!!t)?t.length:null)(((t)=>(!!t)?t.typeParameters:null)(node.typeParameters)) || 0));
        if (cls != null) {
            for(let member of node.members) {
                if (is(member, any) && member.isStatic) {
                    for(let field of member.fields.variables) {
                        let name : string = field.name.name;
                        if (this.isPublic(name)) {
                            cls.members.add(new bare.createInstance(any,null,{
                                name : name,kind : ReferenceKind.propertyAccessor,numTypeParameters : 0}));
                        }
                    }
                }
                if (is(member, any) && member.isStatic && !member.isSetter && !member.isOperator) {
                    let name : string = member.name.name;
                    if (this.isPublic(name)) {
                        cls.members.add(new bare.createInstance(any,null,{
                            name : name,kind : member.isGetter ? ReferenceKind.propertyAccessor : ReferenceKind.method,numTypeParameters : (((t)=>(!!t)?t.length:null)(((t)=>(!!t)?t.typeParameters:null)(member.typeParameters)) || 0)}));
                    }
                }
                if (is(member, any) && member.name != null) {
                    let name : string = member.name.name;
                    if (this.isPublic(name)) {
                        cls.members.add(new bare.createInstance(any,null,{
                            name : name,kind : ReferenceKind.constructor,numTypeParameters : 0}));
                    }
                }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) {
        this.addNameIfPublic(node.name.name,ReferenceKind.classOrEnum,(((t)=>(!!t)?t.length:null)(((t)=>(!!t)?t.typeParameters:null)(node.typeParameters)) || 0));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumDeclaration(node : any) {
        let enm : any = this.addNameIfPublic(node.name.name,ReferenceKind.classOrEnum,0);
        if (enm != null) {
            enm.members.add(new bare.createInstance(any,null,{
                name : 'values',kind : ReferenceKind.propertyAccessor,numTypeParameters : 0}));
            for(let enumConstant of node.constants) {
                let name : string = enumConstant.name.name;
                if (this.isPublic(name)) {
                    enm.members.add(new bare.createInstance(any,null,{
                        name : name,kind : ReferenceKind.propertyAccessor,numTypeParameters : 0}));
                }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) {
        this.exports.add(new bare.createInstance(any,null,{
            uri : node.uri.stringValue,combinators : node.combinators.map((c : any) =>  {
                return c.accept(new _CombinatorEncoder());
            }).toList(),configurations : node.configurations.map(serializeConfiguration).toList()}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) {
        let name : string = node.name.name;
        if (node.isSetter) {
            name += '=';
        }
        this.addNameIfPublic(name,node.isGetter || node.isSetter ? ReferenceKind.topLevelPropertyAccessor : ReferenceKind.topLevelFunction,(((t)=>(!!t)?t.length:null)(((t)=>(!!t)?t.typeParameters:null)(node.functionExpression.typeParameters)) || 0));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) {
        this.addNameIfPublic(node.name.name,ReferenceKind.typedef,(((t)=>(!!t)?t.length:null)(((t)=>(!!t)?t.typeParameters:null)(node.typeParameters)) || 0));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericTypeAlias(node : any) {
        this.addNameIfPublic(node.name.name,ReferenceKind.genericFunctionTypedef,(((t)=>(!!t)?t.length:null)(((t)=>(!!t)?t.typeParameters:null)(node.typeParameters)) || 0));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartDirective(node : any) {
        this.parts.add((node.uri.stringValue || ''));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) {
        let name : string = node.name.name;
        this.addNameIfPublic(name,ReferenceKind.topLevelPropertyAccessor,0);
        if (!node.isFinal && !node.isConst) {
            this.addNameIfPublic(`${name}=`,ReferenceKind.topLevelPropertyAccessor,0);
        }
    }
}

export class properties {
}
