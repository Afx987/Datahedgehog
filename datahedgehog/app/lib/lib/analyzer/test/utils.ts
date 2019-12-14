/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/utils.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AstFinder {
    export type Constructors = 'AstFinder';
    export type Interface = Omit<AstFinder, Constructors>;
}
@DartClass
export class AstFinder {
    static getClass(unit : any,className : string) : any {
        let unitMembers : any = unit.declarations;
        for(let unitMember of unitMembers) {
            if (is(unitMember, any) && op(Op.EQUALS,unitMember.name.name,className)) {
                return unitMember;
            }
        }
        let source : any = resolutionMap.elementDeclaredByCompilationUnit(unit).source;
        fail(`No class named ${className} in ${source}`);
        return null;
    }
    static getConstructorInClass(unit : any,className : string,constructorName : string) : any {
        let unitMember : any = AstFinder.getClass(unit,className);
        let classMembers : any = unitMember.members;
        for(let classMember of classMembers) {
            if (is(classMember, any)) {
                if (op(Op.EQUALS,((t)=>(!!t)?t.name:null)(classMember.name),constructorName)) {
                    return classMember;
                }
            }
        }
        fail(`No constructor named ${constructorName} in ${className}`);
        return null;
    }
    static getFieldInClass(unit : any,className : string,fieldName : string) : any {
        let unitMember : any = AstFinder.getClass(unit,className);
        let classMembers : any = unitMember.members;
        for(let classMember of classMembers) {
            if (is(classMember, any)) {
                let fields : any = classMember.fields.variables;
                for(let field of fields) {
                    if (op(Op.EQUALS,field.name.name,fieldName)) {
                        return field;
                    }
                }
            }
        }
        fail(`No field named ${fieldName} in ${className}`);
        return null;
    }
    static getFieldInClassElement(unit : any,className : string,fieldName : string) : any {
        return ((t)=>(!!t)?t.staticElement:null)(((t)=>(!!t)?t.name:null)(AstFinder.getFieldInClass(unit,className,fieldName)));
    }
    static getMethodInClass(unit : any,className : string,methodName : string) : any {
        let unitMember : any = AstFinder.getClass(unit,className);
        let classMembers : any = unitMember.members;
        for(let classMember of classMembers) {
            if (is(classMember, any)) {
                if (op(Op.EQUALS,classMember.name.name,methodName)) {
                    return classMember;
                }
            }
        }
        fail(`No method named ${methodName} in ${className}`);
        return null;
    }
    static getStatementsInMethod(unit : any,className : string,methodName : string) : core.DartList<any> {
        let method : any = AstFinder.getMethodInClass(unit,className,methodName);
        let body : any = method.body;
        return body.block.statements;
    }
    static getStatementsInTopLevelFunction(unit : any,functionName : string) : core.DartList<any> {
        let function : any = AstFinder.getTopLevelFunction(unit,functionName);
        let body : any = function.functionExpression.body;
        return body.block.statements;
    }
    static getTopLevelFunction(unit : any,functionName : string) : any {
        let unitMembers : any = unit.declarations;
        for(let unitMember of unitMembers) {
            if (is(unitMember, any)) {
                if (op(Op.EQUALS,unitMember.name.name,functionName)) {
                    return unitMember;
                }
            }
        }
        fail(`No toplevel function named ${functionName} found`);
        return null;
    }
    static getTopLevelVariable(unit : any,variableName : string) : any {
        let unitMembers : any = unit.declarations;
        for(let unitMember of unitMembers) {
            if (is(unitMember, any)) {
                let variables : any = unitMember.variables.variables;
                for(let variable of variables) {
                    if (op(Op.EQUALS,variable.name.name,variableName)) {
                        return variable;
                    }
                }
            }
        }
        fail(`No toplevel variable named ${variableName} found`);
        return null;
    }
    static getTopLevelVariableElement(unit : any,name : string) : any {
        return ((t)=>(!!t)?t.staticElement:null)(((t)=>(!!t)?t.name:null)(AstFinder.getTopLevelVariable(unit,name)));
    }
    constructor() {
    }
    @defaultConstructor
    AstFinder() {
    }
}

export namespace TypeAssertions {
    export type Constructors = 'TypeAssertions';
    export type Interface = Omit<TypeAssertions, Constructors>;
}
@DartClass
export class TypeAssertions {
    _typeProvider : any;

    constructor(_typeProvider : any) {
    }
    @defaultConstructor
    TypeAssertions(_typeProvider : any) {
        this._typeProvider = _typeProvider;
    }
    get isDynamic() : <T>(type : any) => void {
        return this.isType(this._typeProvider.dynamicType);
    }
    get isInt() : <T>(type : any) => void {
        return this.isType(this._typeProvider.intType);
    }
    get isList() : <T>(type : any) => void {
        return this.hasElementOf(this._typeProvider.listType);
    }
    get isMap() : <T>(type : any) => void {
        return this.hasElementOf(this._typeProvider.mapType);
    }
    get isNull() : <T>(type : any) => void {
        return this.isType(this._typeProvider.nullType);
    }
    get isNum() : <T>(type : any) => void {
        return this.isType(this._typeProvider.numType);
    }
    get isObject() : <T>(type : any) => void {
        return this.isType(this._typeProvider.objectType);
    }
    get isString() : <T>(type : any) => void {
        return this.isType(this._typeProvider.stringType);
    }
    hasElement(expected : any) : <T>(type : any) => void {
        return (type : any) =>  {
            return expect(expected,type.element);
        };
    }
    hasElementOf(type : any) : <T>(type : any) => void {
        return this.hasElement(type.element);
    }
    isFunction2Of(argType : <T>(type : any) => void,returnType : <T>(type : any) => void) : <T>(type : any) => void {
        return (type : any) =>  {
            let fType : any = (type as any);
            argType(op(Op.INDEX,fType.normalParameterTypes,0));
            returnType(fType.returnType);
        };
    }
    isInstantiationOf(baseAssert : <T>(type : any) => void) : <S,T>(arg : core.DartList<<T>(type : any) => void>) => <T>(type : any) => void {
        return (argAsserts : core.DartList<<T>(type : any) => void>) =>  {
            return (type : any) =>  {
                let t : any = (type as any);
                baseAssert(t);
                let typeArguments : core.DartList<any> = t.typeArguments;
                expect(typeArguments,hasLength(argAsserts.length));
                for(let i : number = 0; i < typeArguments.length; i++){
                    (argAsserts[i])(typeArguments[i]);
                }
            };
        };
    }
    isListOf(argAssert : <T>(type : any) => void) : <T>(type : any) => void {
        return (this.isInstantiationOf(this.isList))(new core.DartList.literal(argAssert));
    }
    isMapOf(argAssert0 : <T>(type : any) => void,argAssert1 : <T>(type : any) => void) : <T>(type : any) => void {
        return (this.isInstantiationOf(this.isMap))(new core.DartList.literal(argAssert0,argAssert1));
    }
    isType(expected : any) : <T>(type : any) => void {
        return (t : any) =>  {
            expect(t,expected);
        };
    }
}

export class properties {
}
