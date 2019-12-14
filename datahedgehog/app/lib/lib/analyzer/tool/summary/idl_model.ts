/** Library asset:datahedgehog_monitor/lib/lib/analyzer/tool/summary/idl_model.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Declaration {
    export type Constructors = 'Declaration';
    export type Interface = Omit<Declaration, Constructors>;
}
@DartClass
export class Declaration {
    documentation : string;

    name : string;

    constructor(documentation : string,name : string) {
    }
    @defaultConstructor
    Declaration(documentation : string,name : string) {
        this.documentation = documentation;
        this.name = name;
    }
}

export namespace FieldType {
    export type Constructors = 'FieldType';
    export type Interface = Omit<FieldType, Constructors>;
}
@DartClass
export class FieldType {
    typeName : string;

    isList : boolean;

    constructor(typeName : string,isList : boolean) {
    }
    @defaultConstructor
    FieldType(typeName : string,isList : boolean) {
        this.typeName = typeName;
        this.isList = isList;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.isList ? `List<${this.typeName}>` : this.typeName;
    }
}

export namespace Idl {
    export type Constructors = 'Idl';
    export type Interface = Omit<Idl, Constructors>;
}
@DartClass
export class Idl {
    classes : core.DartMap<string,ClassDeclaration>;

    enums : core.DartMap<string,EnumDeclaration>;

    constructor() {
    }
    @defaultConstructor
    Idl() {
        this.classes = new core.DartMap.literal([
        ]);
        this.enums = new core.DartMap.literal([
        ]);
    }
}

export namespace ClassDeclaration {
    export type Constructors = Declaration.Constructors | 'ClassDeclaration';
    export type Interface = Omit<ClassDeclaration, Constructors>;
}
@DartClass
export class ClassDeclaration extends Declaration {
    allFields : core.DartList<FieldDeclaration>;

    isTopLevel : boolean;

    fileIdentifier : string;

    constructor(documentation : string,name : string,isTopLevel : boolean,fileIdentifier : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassDeclaration(documentation : string,name : string,isTopLevel : boolean,fileIdentifier : string) {
        this.allFields = new core.DartList.literal<FieldDeclaration>();
        super.Declaration(documentation,name);
        this.isTopLevel = isTopLevel;
        this.fileIdentifier = fileIdentifier;
    }
    get fields() : core.DartIterable<FieldDeclaration> {
        return this.allFields.where((field : FieldDeclaration) =>  {
            return !field.isDeprecated;
        });
    }
}

export namespace EnumDeclaration {
    export type Constructors = Declaration.Constructors | 'EnumDeclaration';
    export type Interface = Omit<EnumDeclaration, Constructors>;
}
@DartClass
export class EnumDeclaration extends Declaration {
    values : core.DartList<EnumValueDeclaration>;

    constructor(documentation : string,name : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EnumDeclaration(documentation : string,name : string) {
        this.values = new core.DartList.literal<EnumValueDeclaration>();
        super.Declaration(documentation,name);
    }
}

export namespace EnumValueDeclaration {
    export type Constructors = Declaration.Constructors | 'EnumValueDeclaration';
    export type Interface = Omit<EnumValueDeclaration, Constructors>;
}
@DartClass
export class EnumValueDeclaration extends Declaration {
    constructor(documentation : string,name : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EnumValueDeclaration(documentation : string,name : string) {
        super.Declaration(documentation,name);
    }
}

export namespace FieldDeclaration {
    export type Constructors = Declaration.Constructors | 'FieldDeclaration';
    export type Interface = Omit<FieldDeclaration, Constructors>;
}
@DartClass
export class FieldDeclaration extends Declaration {
    type : FieldType;

    id : number;

    isDeprecated : boolean;

    isInformative : boolean;

    constructor(documentation : string,name : string,type : FieldType,id : number,isDeprecated : boolean,isInformative : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldDeclaration(documentation : string,name : string,type : FieldType,id : number,isDeprecated : boolean,isInformative : boolean) {
        super.Declaration(documentation,name);
        this.type = type;
        this.id = id;
        this.isDeprecated = isDeprecated;
        this.isInformative = isInformative;
    }
}

export class properties {
}
