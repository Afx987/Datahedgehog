/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/spec/api.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace ApiNode {
    export type Constructors = 'ApiNode';
    export type Interface = Omit<ApiNode, Constructors>;
}
@DartClass
export class ApiNode {
    experimental : boolean;

    deprecated : boolean;

    html : any;

    constructor(html : any,experimental : boolean,deprecated : boolean) {
    }
    @defaultConstructor
    ApiNode(html : any,experimental : boolean,deprecated : boolean) {
        this.experimental = (experimental || false);
        this.deprecated = (deprecated || false);
        this.html = html;
    }
}

export namespace ApiVisitor {
    export type Constructors = 'ApiVisitor';
    export type Interface<T> = Omit<ApiVisitor<T>, Constructors>;
}
@DartClass
export class ApiVisitor<T> {
    visitTypeDecl(type : TypeDecl) : T {
        return type.accept(this) as T;
    }
    @Abstract
    visitTypeEnum(typeEnum : TypeEnum) : T{ throw 'abstract'}
    @Abstract
    visitTypeList(typeList : TypeList) : T{ throw 'abstract'}
    @Abstract
    visitTypeMap(typeMap : TypeMap) : T{ throw 'abstract'}
    @Abstract
    visitTypeObject(typeObject : TypeObject) : T{ throw 'abstract'}
    @Abstract
    visitTypeReference(typeReference : TypeReference) : T{ throw 'abstract'}
    @Abstract
    visitTypeUnion(typeUnion : TypeUnion) : T{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ApiVisitor() {
    }
}

export namespace Api {
    export type Constructors = ApiNode.Constructors | 'Api';
    export type Interface = Omit<Api, Constructors>;
}
@DartClass
export class Api extends ApiNode {
    version : string;

    domains : core.DartList<Domain>;

    types : Types;

    refactorings : Refactorings;

    constructor(version : string,domains : core.DartList<Domain>,types : Types,refactorings : Refactorings,html : any,_namedArguments? : {experimental? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Api(version : string,domains : core.DartList<Domain>,types : Types,refactorings : Refactorings,html : any,_namedArguments? : {experimental? : boolean}) {
        let {experimental} = Object.assign({
        }, _namedArguments );
        super.ApiNode(html,experimental,false);
        this.version = version;
        this.domains = domains;
        this.types = types;
        this.refactorings = refactorings;
    }
}

export namespace Domain {
    export type Constructors = ApiNode.Constructors | 'Domain';
    export type Interface = Omit<Domain, Constructors>;
}
@DartClass
export class Domain extends ApiNode {
    name : string;

    requests : core.DartList<Request>;

    notifications : core.DartList<Notification>;

    constructor(name : string,requests : core.DartList<Request>,notifications : core.DartList<Notification>,html : any,_namedArguments? : {experimental? : boolean,deprecated? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Domain(name : string,requests : core.DartList<Request>,notifications : core.DartList<Notification>,html : any,_namedArguments? : {experimental? : boolean,deprecated? : boolean}) {
        let {experimental,deprecated} = Object.assign({
        }, _namedArguments );
        super.ApiNode(html,experimental,deprecated);
        this.name = name;
        this.requests = requests;
        this.notifications = notifications;
    }
}

export namespace HierarchicalApiVisitor {
    export type Constructors = ApiVisitor.Constructors | 'HierarchicalApiVisitor';
    export type Interface = Omit<HierarchicalApiVisitor, Constructors>;
}
@DartClass
export class HierarchicalApiVisitor extends ApiVisitor<any> {
    api : Api;

    constructor(api : Api) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    HierarchicalApiVisitor(api : Api) {
        this.api = api;
    }
    resolveTypeReferenceChain(type : TypeDecl) : TypeDecl {
        while (is(type, TypeReference) && this.api.types.containsKey(type.typeName)){
            type = op(Op.INDEX,this.api.types,(type as TypeReference).typeName).type;
        }
        return type;
    }
    visitApi() : void {
        this.api.domains.forEach(this.visitDomain.bind(this));
        this.visitTypes(this.api.types);
        this.visitRefactorings(this.api.refactorings);
    }
    visitDomain(domain : Domain) : void {
        domain.requests.forEach(this.visitRequest.bind(this));
        domain.notifications.forEach(this.visitNotification.bind(this));
    }
    visitNotification(notification : Notification) : void {
        if (notification.params != null) {
            this.visitTypeDecl(notification.params);
        }
    }
    visitRefactoring(refactoring : Refactoring) : void {
        if (refactoring.feedback != null) {
            this.visitTypeDecl(refactoring.feedback);
        }
        if (refactoring.options != null) {
            this.visitTypeDecl(refactoring.options);
        }
    }
    visitRefactorings(refactorings : Refactorings) : void {
        ((_49_)=>(!!_49_)?_49_.forEach(this.visitRefactoring.bind(this)):null)(refactorings);
    }
    visitRequest(request : Request) : void {
        if (request.params != null) {
            this.visitTypeDecl(request.params);
        }
        if (request.result != null) {
            this.visitTypeDecl(request.result);
        }
    }
    visitTypeDefinition(typeDefinition : TypeDefinition) : void {
        this.visitTypeDecl(typeDefinition.type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeEnum(typeEnum : TypeEnum) : void {
        typeEnum.values.forEach(this.visitTypeEnumValue.bind(this));
    }
    visitTypeEnumValue(typeEnumValue : TypeEnumValue) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeList(typeList : TypeList) : void {
        this.visitTypeDecl(typeList.itemType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeMap(typeMap : TypeMap) : void {
        this.visitTypeDecl(typeMap.keyType);
        this.visitTypeDecl(typeMap.valueType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeObject(typeObject : TypeObject) : void {
        typeObject.fields.forEach(this.visitTypeObjectField.bind(this));
    }
    visitTypeObjectField(typeObjectField : TypeObjectField) : void {
        this.visitTypeDecl(typeObjectField.type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeReference(typeReference : TypeReference) : void {
    }
    visitTypes(types : Types) : void {
        types.forEach(this.visitTypeDefinition.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeUnion(typeUnion : TypeUnion) : void {
        typeUnion.choices.forEach(this.visitTypeDecl.bind(this));
    }
}

export namespace Notification {
    export type Constructors = ApiNode.Constructors | 'Notification';
    export type Interface = Omit<Notification, Constructors>;
}
@DartClass
export class Notification extends ApiNode {
    domainName : string;

    event : string;

    params : TypeObject;

    constructor(domainName : string,event : string,params : TypeObject,html : any,_namedArguments? : {experimental? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Notification(domainName : string,event : string,params : TypeObject,html : any,_namedArguments? : {experimental? : boolean}) {
        let {experimental} = Object.assign({
        }, _namedArguments );
        super.ApiNode(html,experimental,false);
        this.domainName = domainName;
        this.event = event;
        this.params = params;
    }
    get longEvent() : string {
        return `${this.domainName}.${this.event}`;
    }
    get notificationType() : TypeDecl {
        let fields : core.DartList<TypeObjectField> = new core.DartList.literal(new TypeObjectField('event',new TypeReference('String',null),null,{
            value : `${this.domainName}.${this.event}`}));
        if (this.params != null) {
            fields.add(new TypeObjectField('params',this.params,null));
        }
        return new TypeObject(fields,null);
    }
}

export namespace Refactoring {
    export type Constructors = ApiNode.Constructors | 'Refactoring';
    export type Interface = Omit<Refactoring, Constructors>;
}
@DartClass
export class Refactoring extends ApiNode {
    kind : string;

    feedback : TypeObject;

    options : TypeObject;

    constructor(kind : string,feedback : TypeObject,options : TypeObject,html : any,_namedArguments? : {experimental? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Refactoring(kind : string,feedback : TypeObject,options : TypeObject,html : any,_namedArguments? : {experimental? : boolean}) {
        let {experimental} = Object.assign({
        }, _namedArguments );
        super.ApiNode(html,experimental,false);
        this.kind = kind;
        this.feedback = feedback;
        this.options = options;
    }
}

export namespace Refactorings {
    export type Constructors = ApiNode.Constructors | 'Refactorings';
    export type Interface = Omit<Refactorings, Constructors>;
}
@DartClass
@With(core.DartIterableMixin)
export class Refactorings extends ApiNode implements core.DartIterableMixin.Interface<Refactoring> {
    @Abstract
    map(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    where(f : <E>(element : E) => boolean) : core.DartIterable<Refactoring> {
        throw 'from mixin';
    }
    @Abstract
    expand(f : <T,E>(element : E) => core.DartIterable<T>) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    contains(element : core.DartObject) : boolean {
        throw 'from mixin';
    }
    @Abstract
    forEach(f : <E>(element : E) => void) : void {
        throw 'from mixin';
    }
    @Abstract
    reduce(combine : <E>(value : E,element : E) => E) : Refactoring {
        throw 'from mixin';
    }
    @Abstract
    fold(initialValue : T,combine : <T,E>(previousValue : T,element : E) => T) : T {
        throw 'from mixin';
    }
    @Abstract
    every(f : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    join(separator? : string) : string {
        separator = separator || "";
        throw 'from mixin';
    }
    @Abstract
    any(f : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<Refactoring> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    toSet() : core.DartSet<Refactoring> {
        throw 'from mixin';
    }
    @Abstract
    take(count : number) : core.DartIterable<Refactoring> {
        throw 'from mixin';
    }
    @Abstract
    takeWhile(test : <E>(value : E) => boolean) : core.DartIterable<Refactoring> {
        throw 'from mixin';
    }
    @Abstract
    skip(count : number) : core.DartIterable<Refactoring> {
        throw 'from mixin';
    }
    @Abstract
    skipWhile(test : <E>(value : E) => boolean) : core.DartIterable<Refactoring> {
        throw 'from mixin';
    }
    @Abstract
    firstWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : Refactoring {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    lastWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : Refactoring {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    singleWhere(test : <E>(value : E) => boolean) : Refactoring {
        throw 'from mixin';
    }
    @Abstract
    elementAt(index : number) : Refactoring {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    refactorings : core.DartList<Refactoring>;

    constructor(refactorings : core.DartList<Refactoring>,html : any,_namedArguments? : {experimental? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Refactorings(refactorings : core.DartList<Refactoring>,html : any,_namedArguments? : {experimental? : boolean}) {
        let {experimental} = Object.assign({
        }, _namedArguments );
        super.ApiNode(html,experimental,false);
        this.refactorings = refactorings;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get iterator() : core.DartIterator<Refactoring> {
        return this.refactorings.iterator;
    }
}

export namespace Request {
    export type Constructors = ApiNode.Constructors | 'Request';
    export type Interface = Omit<Request, Constructors>;
}
@DartClass
export class Request extends ApiNode {
    domainName : string;

    method : string;

    params : TypeObject;

    result : TypeObject;

    constructor(domainName : string,method : string,params : TypeObject,result : TypeObject,html : any,_namedArguments? : {experimental? : boolean,deprecated? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Request(domainName : string,method : string,params : TypeObject,result : TypeObject,html : any,_namedArguments? : {experimental? : boolean,deprecated? : boolean}) {
        let {experimental,deprecated} = Object.assign({
        }, _namedArguments );
        super.ApiNode(html,experimental,deprecated);
        this.domainName = domainName;
        this.method = method;
        this.params = params;
        this.result = result;
    }
    get longMethod() : string {
        return `${this.domainName}.${this.method}`;
    }
    get requestType() : TypeDecl {
        let fields : core.DartList<TypeObjectField> = new core.DartList.literal(new TypeObjectField('id',new TypeReference('String',null),null),new TypeObjectField('method',new TypeReference('String',null),null,{
            value : `${this.domainName}.${this.method}`}));
        if (this.params != null) {
            fields.add(new TypeObjectField('params',this.params,null));
        }
        return new TypeObject(fields,null);
    }
    get responseType() : TypeDecl {
        let fields : core.DartList<TypeObjectField> = new core.DartList.literal(new TypeObjectField('id',new TypeReference('String',null),null),new TypeObjectField('error',new TypeReference('RequestError',null),null,{
            optional : true}));
        if (this.result != null) {
            fields.add(new TypeObjectField('result',this.result,null));
        }
        return new TypeObject(fields,null);
    }
}

export namespace TypeDecl {
    export type Constructors = ApiNode.Constructors | 'TypeDecl';
    export type Interface = Omit<TypeDecl, Constructors>;
}
@DartClass
export class TypeDecl extends ApiNode {
    constructor(html : any,experimental : boolean,deprecated : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeDecl(html : any,experimental : boolean,deprecated : boolean) {
        super.ApiNode(html,experimental,deprecated);
    }
    @Abstract
    accept(visitor : ApiVisitor<any>){ throw 'abstract'}
}

export namespace TypeDefinition {
    export type Constructors = ApiNode.Constructors | 'TypeDefinition';
    export type Interface = Omit<TypeDefinition, Constructors>;
}
@DartClass
export class TypeDefinition extends ApiNode {
    name : string;

    type : TypeDecl;

    isExternal : boolean;

    constructor(name : string,type : TypeDecl,html : any,_namedArguments? : {experimental? : boolean,deprecated? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeDefinition(name : string,type : TypeDecl,html : any,_namedArguments? : {experimental? : boolean,deprecated? : boolean}) {
        let {experimental,deprecated} = Object.assign({
        }, _namedArguments );
        this.isExternal = false;
        super.ApiNode(html,experimental,deprecated);
        this.name = name;
        this.type = type;
    }
}

export namespace TypeEnumValue {
    export type Constructors = ApiNode.Constructors | 'TypeEnumValue';
    export type Interface = Omit<TypeEnumValue, Constructors>;
}
@DartClass
export class TypeEnumValue extends ApiNode {
    value : string;

    constructor(value : string,html : any,_namedArguments? : {experimental? : boolean,deprecated? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeEnumValue(value : string,html : any,_namedArguments? : {experimental? : boolean,deprecated? : boolean}) {
        let {experimental,deprecated} = Object.assign({
        }, _namedArguments );
        super.ApiNode(html,experimental,deprecated);
        this.value = value;
    }
}

export namespace TypeObjectField {
    export type Constructors = ApiNode.Constructors | 'TypeObjectField';
    export type Interface = Omit<TypeObjectField, Constructors>;
}
@DartClass
export class TypeObjectField extends ApiNode {
    name : string;

    type : TypeDecl;

    optional : boolean;

    value : core.DartObject;

    constructor(name : string,type : TypeDecl,html : any,_namedArguments? : {optional? : boolean,value? : core.DartObject,experimental? : boolean,deprecated? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeObjectField(name : string,type : TypeDecl,html : any,_namedArguments? : {optional? : boolean,value? : core.DartObject,experimental? : boolean,deprecated? : boolean}) {
        let {optional,value,experimental,deprecated} = Object.assign({
            "optional" : false}, _namedArguments );
        super.ApiNode(html,experimental,deprecated);
        this.name = name;
        this.type = type;
        this.optional = optional;
        this.value = value;
    }
}

export namespace Types {
    export type Constructors = ApiNode.Constructors | 'Types';
    export type Interface = Omit<Types, Constructors>;
}
@DartClass
@With(core.DartIterableMixin)
export class Types extends ApiNode implements core.DartIterableMixin.Interface<TypeDefinition> {
    @Abstract
    map(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    where(f : <E>(element : E) => boolean) : core.DartIterable<TypeDefinition> {
        throw 'from mixin';
    }
    @Abstract
    expand(f : <T,E>(element : E) => core.DartIterable<T>) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    contains(element : core.DartObject) : boolean {
        throw 'from mixin';
    }
    @Abstract
    forEach(f : <E>(element : E) => void) : void {
        throw 'from mixin';
    }
    @Abstract
    reduce(combine : <E>(value : E,element : E) => E) : TypeDefinition {
        throw 'from mixin';
    }
    @Abstract
    fold(initialValue : T,combine : <T,E>(previousValue : T,element : E) => T) : T {
        throw 'from mixin';
    }
    @Abstract
    every(f : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    join(separator? : string) : string {
        separator = separator || "";
        throw 'from mixin';
    }
    @Abstract
    any(f : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<TypeDefinition> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    toSet() : core.DartSet<TypeDefinition> {
        throw 'from mixin';
    }
    @Abstract
    take(count : number) : core.DartIterable<TypeDefinition> {
        throw 'from mixin';
    }
    @Abstract
    takeWhile(test : <E>(value : E) => boolean) : core.DartIterable<TypeDefinition> {
        throw 'from mixin';
    }
    @Abstract
    skip(count : number) : core.DartIterable<TypeDefinition> {
        throw 'from mixin';
    }
    @Abstract
    skipWhile(test : <E>(value : E) => boolean) : core.DartIterable<TypeDefinition> {
        throw 'from mixin';
    }
    @Abstract
    firstWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : TypeDefinition {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    lastWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : TypeDefinition {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    singleWhere(test : <E>(value : E) => boolean) : TypeDefinition {
        throw 'from mixin';
    }
    @Abstract
    elementAt(index : number) : TypeDefinition {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    types : core.DartMap<string,TypeDefinition>;

    importUris : core.DartList<string>;

    constructor(types : core.DartMap<string,TypeDefinition>,html : any,_namedArguments? : {experimental? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Types(types : core.DartMap<string,TypeDefinition>,html : any,_namedArguments? : {experimental? : boolean}) {
        let {experimental} = Object.assign({
        }, _namedArguments );
        this.importUris = new core.DartList.literal<string>();
        super.ApiNode(html,experimental,false);
        this.types = types;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get iterator() : core.DartIterator<TypeDefinition> {
        return this.types.values.iterator;
    }
    get keys() : core.DartIterable<string> {
        return this.types.keys;
    }
    [OperatorMethods.INDEX](typeName : string) : TypeDefinition {
        return this.types.get(typeName);
    }
    containsKey(typeName : string) : boolean {
        return this.types.containsKey(typeName);
    }
}

export namespace TypeEnum {
    export type Constructors = TypeDecl.Constructors | 'TypeEnum';
    export type Interface = Omit<TypeEnum, Constructors>;
}
@DartClass
export class TypeEnum extends TypeDecl {
    values : core.DartList<TypeEnumValue>;

    constructor(values : core.DartList<TypeEnumValue>,html : any,_namedArguments? : {experimental? : boolean,deprecated? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeEnum(values : core.DartList<TypeEnumValue>,html : any,_namedArguments? : {experimental? : boolean,deprecated? : boolean}) {
        let {experimental,deprecated} = Object.assign({
        }, _namedArguments );
        super.TypeDecl(html,experimental,deprecated);
        this.values = values;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : ApiVisitor<any>) {
        return visitor.visitTypeEnum(this);
    }
}

export namespace TypeList {
    export type Constructors = TypeDecl.Constructors | 'TypeList';
    export type Interface = Omit<TypeList, Constructors>;
}
@DartClass
export class TypeList extends TypeDecl {
    itemType : TypeDecl;

    constructor(itemType : TypeDecl,html : any,_namedArguments? : {experimental? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeList(itemType : TypeDecl,html : any,_namedArguments? : {experimental? : boolean}) {
        let {experimental} = Object.assign({
        }, _namedArguments );
        super.TypeDecl(html,experimental,false);
        this.itemType = itemType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : ApiVisitor<any>) {
        return visitor.visitTypeList(this);
    }
}

export namespace TypeMap {
    export type Constructors = TypeDecl.Constructors | 'TypeMap';
    export type Interface = Omit<TypeMap, Constructors>;
}
@DartClass
export class TypeMap extends TypeDecl {
    keyType : TypeReference;

    valueType : TypeDecl;

    constructor(keyType : TypeReference,valueType : TypeDecl,html : any,_namedArguments? : {experimental? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeMap(keyType : TypeReference,valueType : TypeDecl,html : any,_namedArguments? : {experimental? : boolean}) {
        let {experimental} = Object.assign({
        }, _namedArguments );
        super.TypeDecl(html,experimental,false);
        this.keyType = keyType;
        this.valueType = valueType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : ApiVisitor<any>) {
        return visitor.visitTypeMap(this);
    }
}

export namespace TypeObject {
    export type Constructors = TypeDecl.Constructors | 'TypeObject';
    export type Interface = Omit<TypeObject, Constructors>;
}
@DartClass
export class TypeObject extends TypeDecl {
    fields : core.DartList<TypeObjectField>;

    constructor(fields : core.DartList<TypeObjectField>,html : any,_namedArguments? : {experimental? : boolean,deprecated? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeObject(fields : core.DartList<TypeObjectField>,html : any,_namedArguments? : {experimental? : boolean,deprecated? : boolean}) {
        let {experimental,deprecated} = Object.assign({
        }, _namedArguments );
        super.TypeDecl(html,experimental,deprecated);
        this.fields = fields;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : ApiVisitor<any>) {
        return visitor.visitTypeObject(this);
    }
    getField(name : string) : TypeObjectField {
        for(let field of this.fields) {
            if (field.name == name) {
                return field;
            }
        }
        return null;
    }
}

export namespace TypeReference {
    export type Constructors = TypeDecl.Constructors | 'TypeReference';
    export type Interface = Omit<TypeReference, Constructors>;
}
@DartClass
export class TypeReference extends TypeDecl {
    typeName : string;

    constructor(typeName : string,html : any,_namedArguments? : {experimental? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeReference(typeName : string,html : any,_namedArguments? : {experimental? : boolean}) {
        let {experimental} = Object.assign({
        }, _namedArguments );
        super.TypeDecl(html,experimental,false);
        this.typeName = typeName;
        if (new core.DartString(this.typeName).isEmpty) {
            throw new core.Exception('Empty type name');
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : ApiVisitor<any>) {
        return visitor.visitTypeReference(this);
    }
}

export namespace TypeUnion {
    export type Constructors = TypeDecl.Constructors | 'TypeUnion';
    export type Interface = Omit<TypeUnion, Constructors>;
}
@DartClass
export class TypeUnion extends TypeDecl {
    choices : core.DartList<TypeDecl>;

    field : string;

    constructor(choices : core.DartList<TypeDecl>,field : string,html : any,_namedArguments? : {experimental? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeUnion(choices : core.DartList<TypeDecl>,field : string,html : any,_namedArguments? : {experimental? : boolean}) {
        let {experimental} = Object.assign({
        }, _namedArguments );
        super.TypeDecl(html,experimental,false);
        this.choices = choices;
        this.field = field;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : ApiVisitor<any>) {
        return visitor.visitTypeUnion(this);
    }
}

export class properties {
}
