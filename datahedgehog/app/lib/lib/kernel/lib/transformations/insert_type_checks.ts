/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/insert_type_checks.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../core_types";
import * as lib4 from "./../class_hierarchy";
import * as lib5 from "./../ast";
import * as lib6 from "./../type_checker";
import * as lib7 from "./../log";

export namespace InsertTypeChecks {
    export type Constructors = 'InsertTypeChecks';
    export type Interface = Omit<InsertTypeChecks, Constructors>;
}
@DartClass
export class InsertTypeChecks {
    coreTypes : lib3.CoreTypes;

    hierarchy : lib4.ClassHierarchy;

    constructor(_namedArguments? : {coreTypes? : lib3.CoreTypes,hierarchy? : lib4.ClassHierarchy}) {
    }
    @defaultConstructor
    InsertTypeChecks(_namedArguments? : {coreTypes? : lib3.CoreTypes,hierarchy? : lib4.ClassHierarchy}) {
        let {coreTypes,hierarchy} = Object.assign({
        }, _namedArguments );
        this.coreTypes = coreTypes;
        this.hierarchy = hierarchy;
    }
    transformProgram(program : lib5.Program) : void {
        this.coreTypes = ( this.coreTypes ) || ( new lib3.CoreTypes(program) );
        this.hierarchy = ( this.hierarchy ) || ( new lib4.ClassHierarchy(program) );
        new CheckInsertingTypeChecker(this.coreTypes,this.hierarchy).checkProgram(program);
    }
}

export namespace CheckInsertingTypeChecker {
    export type Constructors = lib6.TypeChecker.Constructors | 'CheckInsertingTypeChecker';
    export type Interface = Omit<CheckInsertingTypeChecker, Constructors>;
}
@DartClass
export class CheckInsertingTypeChecker extends lib6.TypeChecker {
    constructor(coreTypes : lib3.CoreTypes,hierarchy : lib4.ClassHierarchy) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CheckInsertingTypeChecker(coreTypes : lib3.CoreTypes,hierarchy : lib4.ClassHierarchy) {
        super.TypeChecker(coreTypes,hierarchy);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fail(where : lib5.TreeNode,message : string) : void {
        lib7.properties.log.severe(`${where.location}: ${message}`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkAssignable(where : lib5.TreeNode,from : lib5.DartType,to : lib5.DartType) : void {
        if (!this.environment.isSubtypeOf(from,to)) {
            this.fail(where,`${from} cannot be assigned to ${to}`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkAndDowncastExpression(expression : lib5.Expression,from : lib5.DartType,to : lib5.DartType) : lib5.Expression {
        if (!this.environment.isSubtypeOf(from,to)) {
            return ((_) : lib5.AsExpression =>  {
                {
                    _.fileOffset = expression.fileOffset;
                    return _;
                }
            })(new lib5.AsExpression(expression,to));
        }else {
            return expression;
        }
    }
}

export class properties {
}
