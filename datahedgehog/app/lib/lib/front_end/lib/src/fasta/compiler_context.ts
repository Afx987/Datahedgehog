/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/compiler_context.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./compiler_command_line";
import * as lib4 from "./colors";

export namespace CompilerContext {
    export type Constructors = 'CompilerContext';
    export type Interface = Omit<CompilerContext, Constructors>;
}
@DartClass
export class CompilerContext {
    fileSystem : any;

    options : lib3.CompilerCommandLine;

    uriToSource : core.DartMap<string,any>;

    enableColorsCached : boolean;

    constructor(options : lib3.CompilerCommandLine) {
    }
    @defaultConstructor
    CompilerContext(options : lib3.CompilerCommandLine) {
        this.fileSystem = PhysicalFileSystem.instance;
        this.uriToSource = new core.DartMap.literal([
        ]);
        this.enableColorsCached = null;
        this.options = options;
    }
    static get current() : CompilerContext {
        return (op(Op.INDEX,async.DartZone.current,properties.compilerContextKey) || properties.rootContext);
    }
    static withGlobalOptions(cl : lib3.CompilerCommandLine,action : (c : CompilerContext) => any) : any {
        let c : CompilerContext = new CompilerContext(cl);
        return async.runZoned(() =>  {
            return action(c);
        },{
            zoneValues : new core.DartMap.literal([
                [properties.compilerContextKey,c]])});
    }
    static get enableColors() : boolean {
        return CompilerContext.current.enableColorsCached = ( CompilerContext.current.enableColorsCached ) || ( lib4.computeEnableColors(CompilerContext.current) );
    }
}

export class properties {
    private static __$compilerContextKey : core.DartObject;
    static get compilerContextKey() : core.DartObject { 
        if (this.__$compilerContextKey===undefined) {
            this.__$compilerContextKey = new core.DartObject();
        }
        return this.__$compilerContextKey;
    }
    static set compilerContextKey(__$value : core.DartObject)  { 
        this.__$compilerContextKey = __$value;
    }

    private static __$rootContext : CompilerContext;
    static get rootContext() : CompilerContext { 
        if (this.__$rootContext===undefined) {
            this.__$rootContext = new CompilerContext(lib3.CompilerCommandLine.forRootContext());
        }
        return this.__$rootContext;
    }
    static set rootContext(__$value : CompilerContext)  { 
        this.__$rootContext = __$value;
    }

}
