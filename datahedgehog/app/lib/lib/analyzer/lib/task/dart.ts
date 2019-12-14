/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/task/dart.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace LibrarySpecificUnit {
    export type Constructors = 'LibrarySpecificUnit';
    export type Interface = Omit<LibrarySpecificUnit, Constructors>;
}
@DartClass
@Implements(any)
export class LibrarySpecificUnit implements any.Interface {
    private static __$EMPTY_LIST : core.DartList<LibrarySpecificUnit>;
    static get EMPTY_LIST() : core.DartList<LibrarySpecificUnit> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<LibrarySpecificUnit>();
        }
        return this.__$EMPTY_LIST;
    }

    library : any;

    unit : any;

    constructor(library : any,unit : any) {
    }
    @defaultConstructor
    LibrarySpecificUnit(library : any,unit : any) {
        this.library = library;
        this.unit = unit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return JenkinsSmiHash.combine(this.library.hashCode,this.unit.hashCode);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get librarySource() : any {
        return this.library;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get source() : any {
        return this.unit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        return is(other, LibrarySpecificUnit) && op(Op.EQUALS,other.library,this.library) && op(Op.EQUALS,other.unit,this.unit);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.unit} in ${this.library}`;
    }
}

export class properties {
    private static __$DART_ERRORS : any;
    static get DART_ERRORS() : any { 
        if (this.__$DART_ERRORS===undefined) {
            this.__$DART_ERRORS = new bare.createInstance(any,null,'DART_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$DART_ERRORS;
    }
    static set DART_ERRORS(__$value : any)  { 
        this.__$DART_ERRORS = __$value;
    }

    private static __$EXPLICITLY_IMPORTED_LIBRARIES : any;
    static get EXPLICITLY_IMPORTED_LIBRARIES() : any { 
        if (this.__$EXPLICITLY_IMPORTED_LIBRARIES===undefined) {
            this.__$EXPLICITLY_IMPORTED_LIBRARIES = new bare.createInstance(any,null,'EXPLICITLY_IMPORTED_LIBRARIES',Source.EMPTY_LIST);
        }
        return this.__$EXPLICITLY_IMPORTED_LIBRARIES;
    }
    static set EXPLICITLY_IMPORTED_LIBRARIES(__$value : any)  { 
        this.__$EXPLICITLY_IMPORTED_LIBRARIES = __$value;
    }

    private static __$EXPORTED_LIBRARIES : any;
    static get EXPORTED_LIBRARIES() : any { 
        if (this.__$EXPORTED_LIBRARIES===undefined) {
            this.__$EXPORTED_LIBRARIES = new bare.createInstance(any,null,'EXPORTED_LIBRARIES',Source.EMPTY_LIST);
        }
        return this.__$EXPORTED_LIBRARIES;
    }
    static set EXPORTED_LIBRARIES(__$value : any)  { 
        this.__$EXPORTED_LIBRARIES = __$value;
    }

    private static __$IMPORTED_LIBRARIES : any;
    static get IMPORTED_LIBRARIES() : any { 
        if (this.__$IMPORTED_LIBRARIES===undefined) {
            this.__$IMPORTED_LIBRARIES = new bare.createInstance(any,null,'IMPORTED_LIBRARIES',Source.EMPTY_LIST);
        }
        return this.__$IMPORTED_LIBRARIES;
    }
    static set IMPORTED_LIBRARIES(__$value : any)  { 
        this.__$IMPORTED_LIBRARIES = __$value;
    }

    private static __$INCLUDED_PARTS : any;
    static get INCLUDED_PARTS() : any { 
        if (this.__$INCLUDED_PARTS===undefined) {
            this.__$INCLUDED_PARTS = new bare.createInstance(any,null,'INCLUDED_PARTS',Source.EMPTY_LIST);
        }
        return this.__$INCLUDED_PARTS;
    }
    static set INCLUDED_PARTS(__$value : any)  { 
        this.__$INCLUDED_PARTS = __$value;
    }

    private static __$IS_LAUNCHABLE : any;
    static get IS_LAUNCHABLE() : any { 
        if (this.__$IS_LAUNCHABLE===undefined) {
            this.__$IS_LAUNCHABLE = new bare.createInstance(any,null,'IS_LAUNCHABLE',false);
        }
        return this.__$IS_LAUNCHABLE;
    }
    static set IS_LAUNCHABLE(__$value : any)  { 
        this.__$IS_LAUNCHABLE = __$value;
    }

    private static __$LIBRARY_ELEMENT : any;
    static get LIBRARY_ELEMENT() : any { 
        if (this.__$LIBRARY_ELEMENT===undefined) {
            this.__$LIBRARY_ELEMENT = new bare.createInstance(any,null,'LIBRARY_ELEMENT',null);
        }
        return this.__$LIBRARY_ELEMENT;
    }
    static set LIBRARY_ELEMENT(__$value : any)  { 
        this.__$LIBRARY_ELEMENT = __$value;
    }

    private static __$PARSED_UNIT : any;
    static get PARSED_UNIT() : any { 
        if (this.__$PARSED_UNIT===undefined) {
            this.__$PARSED_UNIT = new bare.createInstance(any,null,'PARSED_UNIT',null,{
                cachingPolicy : AST_CACHING_POLICY});
        }
        return this.__$PARSED_UNIT;
    }
    static set PARSED_UNIT(__$value : any)  { 
        this.__$PARSED_UNIT = __$value;
    }

    private static __$RESOLVED_UNIT : any;
    static get RESOLVED_UNIT() : any { 
        if (this.__$RESOLVED_UNIT===undefined) {
            this.__$RESOLVED_UNIT = new bare.createInstance(any,null,'RESOLVED_UNIT',null,{
                cachingPolicy : AST_RESOLVED_CACHING_POLICY});
        }
        return this.__$RESOLVED_UNIT;
    }
    static set RESOLVED_UNIT(__$value : any)  { 
        this.__$RESOLVED_UNIT = __$value;
    }

    private static __$SOURCE_KIND : any;
    static get SOURCE_KIND() : any { 
        if (this.__$SOURCE_KIND===undefined) {
            this.__$SOURCE_KIND = new bare.createInstance(any,null,'SOURCE_KIND',SourceKind.UNKNOWN);
        }
        return this.__$SOURCE_KIND;
    }
    static set SOURCE_KIND(__$value : any)  { 
        this.__$SOURCE_KIND = __$value;
    }

    private static __$TOKEN_STREAM : any;
    static get TOKEN_STREAM() : any { 
        if (this.__$TOKEN_STREAM===undefined) {
            this.__$TOKEN_STREAM = new bare.createInstance(any,null,'TOKEN_STREAM',null,{
                cachingPolicy : TOKEN_STREAM_CACHING_POLICY});
        }
        return this.__$TOKEN_STREAM;
    }
    static set TOKEN_STREAM(__$value : any)  { 
        this.__$TOKEN_STREAM = __$value;
    }

    private static __$UNITS : any;
    static get UNITS() : any { 
        if (this.__$UNITS===undefined) {
            this.__$UNITS = new bare.createInstance(any,null,'UNITS',Source.EMPTY_LIST);
        }
        return this.__$UNITS;
    }
    static set UNITS(__$value : any)  { 
        this.__$UNITS = __$value;
    }

}
