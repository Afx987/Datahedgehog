/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/spec/implied_types.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./api";

export var computeImpliedTypes : (api : lib3.Api) => core.DartMap<string,ImpliedType> = (api : lib3.Api) : core.DartMap<string,ImpliedType> =>  {
    let visitor : _ImpliedTypesVisitor = new _ImpliedTypesVisitor(api);
    visitor.visitApi();
    return visitor.impliedTypes;
};
export namespace ImpliedType {
    export type Constructors = 'ImpliedType';
    export type Interface = Omit<ImpliedType, Constructors>;
}
@DartClass
export class ImpliedType {
    camelName : string;

    humanReadableName : string;

    type : lib3.TypeDecl;

    kind : string;

    apiNode : lib3.ApiNode;

    constructor(camelName : string,humanReadableName : string,type : lib3.TypeDecl,kind : string,apiNode : lib3.ApiNode) {
    }
    @defaultConstructor
    ImpliedType(camelName : string,humanReadableName : string,type : lib3.TypeDecl,kind : string,apiNode : lib3.ApiNode) {
        this.camelName = camelName;
        this.humanReadableName = humanReadableName;
        this.type = type;
        this.kind = kind;
        this.apiNode = apiNode;
    }
}

export namespace _ImpliedTypesVisitor {
    export type Constructors = lib3.HierarchicalApiVisitor.Constructors | '_ImpliedTypesVisitor';
    export type Interface = Omit<_ImpliedTypesVisitor, Constructors>;
}
@DartClass
export class _ImpliedTypesVisitor extends lib3.HierarchicalApiVisitor {
    impliedTypes : core.DartMap<string,ImpliedType>;

    constructor(api : lib3.Api) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ImpliedTypesVisitor(api : lib3.Api) {
        this.impliedTypes = new core.DartMap.literal([
        ]);
        super.HierarchicalApiVisitor(api);
    }
    storeType(name : string,nameSuffix : string,type : lib3.TypeDecl,kind : string,apiNode : lib3.ApiNode) : void {
        let humanReadableName : string = name;
        let camelNameParts : core.DartList<string> = new core.DartString(name).split('.');
        if (nameSuffix != null) {
            humanReadableName += ` ${nameSuffix}`;
            camelNameParts.add(nameSuffix);
        }
        let camelName : string = camelJoin(camelNameParts);
        this.impliedTypes.set(camelName,new ImpliedType(camelName,humanReadableName,type,kind,apiNode));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNotification(notification : lib3.Notification) {
        this.storeType(notification.longEvent,'params',notification.params,'notificationParams',notification);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRefactoring(refactoring : lib3.Refactoring) {
        let camelKind : string = camelJoin(new core.DartString(new core.DartString(refactoring.kind).toLowerCase()).split('_'));
        this.storeType(camelKind,'feedback',refactoring.feedback,'refactoringFeedback',refactoring);
        this.storeType(camelKind,'options',refactoring.options,'refactoringOptions',refactoring);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRequest(request : lib3.Request) {
        this.storeType(request.longMethod,'params',request.params,'requestParams',request);
        this.storeType(request.longMethod,'result',request.result,'requestResult',request);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeDefinition(typeDefinition : lib3.TypeDefinition) {
        this.storeType(typeDefinition.name,null,typeDefinition.type,'typeDefinition',typeDefinition);
    }
}

export class properties {
}
