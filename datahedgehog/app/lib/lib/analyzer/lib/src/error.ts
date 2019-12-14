/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/error.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace AnalyzerError {
    export type Constructors = 'AnalyzerError';
    export type Interface = Omit<AnalyzerError, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class AnalyzerError implements core.Exception.Interface {
    error : any;

    constructor(error : any) {
    }
    @defaultConstructor
    AnalyzerError(error : any) {
        this.error = error;
    }
    get message() : string {
        return this.toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let builder = new core.DartStringBuffer();
        let sourceName : string = this.error.source.shortName;
        sourceName = ( sourceName ) || ( '<unknown source>' );
        builder.write(`Error in ${sourceName}: ${this.error.message}`);
        builder.writeln();
        return builder.toString();
    }
}

export namespace AnalyzerErrorGroup {
    export type Constructors = 'AnalyzerErrorGroup' | 'fromAnalysisErrors';
    export type Interface = Omit<AnalyzerErrorGroup, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class AnalyzerErrorGroup implements core.Exception.Interface {
    _errors : core.DartList<AnalyzerError>;

    constructor(errors : core.DartIterable<AnalyzerError>) {
    }
    @defaultConstructor
    AnalyzerErrorGroup(errors : core.DartIterable<AnalyzerError>) {
        this._errors = errors.toList();
    }
    @namedConstructor
    fromAnalysisErrors(errors : core.DartIterable<any>) {
        this.AnalyzerErrorGroup(errors.map((e : any) =>  {
            return new AnalyzerError(e);
        }));
    }
    static fromAnalysisErrors : new(errors : core.DartIterable<any>) => AnalyzerErrorGroup;

    get errors() : core.DartList<AnalyzerError> {
        return new collection.UnmodifiableListView<AnalyzerError>(this._errors);
    }
    get message() : string {
        return this.toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.errors.join("\n");
    }
}

export class properties {
    private static __$_MAX_ERROR_LINE_LENGTH;
    static get _MAX_ERROR_LINE_LENGTH() { 
        if (this.__$_MAX_ERROR_LINE_LENGTH===undefined) {
            this.__$_MAX_ERROR_LINE_LENGTH = 120;
        }
        return this.__$_MAX_ERROR_LINE_LENGTH;
    }
    static set _MAX_ERROR_LINE_LENGTH(__$value : any)  { 
        this.__$_MAX_ERROR_LINE_LENGTH = __$value;
    }

}
