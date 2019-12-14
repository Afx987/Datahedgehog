/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/analysis/ast_provider_driver.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AbstractAstProvider {
    export type Constructors = 'AbstractAstProvider';
    export type Interface = Omit<AbstractAstProvider, Constructors>;
}
@DartClass
@Implements(any)
export class AbstractAstProvider implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getParsedNameForElement(element : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit : any = await getParsedUnitForElement(element);
            return this._getNameNode(unit,element);
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getResolvedNameForElement(element : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit : any = await getResolvedUnitForElement(element);
            return this._getNameNode(unit,element);
        } )());
    }

    _getNameNode(unit : any,element : any) : any {
        let nameOffset : number = element.nameOffset;
        if (nameOffset == -1) {
            return null;
        }
        let nameNode : any = new bare.createInstance(any,null,nameOffset).searchWithin(unit);
        if (is(nameNode, any)) {
            return nameNode;
        }
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    AbstractAstProvider() {
    }
}

export namespace AstProviderForDriver {
    export type Constructors = AbstractAstProvider.Constructors | 'AstProviderForDriver';
    export type Interface = Omit<AstProviderForDriver, Constructors>;
}
@DartClass
export class AstProviderForDriver extends AbstractAstProvider {
    driver : any;

    constructor(driver : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AstProviderForDriver(driver : any) {
        this.driver = driver;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getParsedUnitForElement(element : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path : string = element.source.fullName;
            let parseResult : any = await this.driver.parseFile(path);
            return parseResult.unit;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getResolvedUnitForElement(element : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path : string = element.source.fullName;
            let analysisResult : any = await this.driver.getResult(path);
            return ((t)=>(!!t)?t.unit:null)(analysisResult);
        } )());
    }

}

export class properties {
}
