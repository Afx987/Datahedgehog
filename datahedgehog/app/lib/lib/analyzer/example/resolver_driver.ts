/** Library asset:datahedgehog_monitor/lib/lib/analyzer/example/resolver_driver.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var main : (args : core.DartList<string>) => void = (args : core.DartList<string>) : void =>  {
    core.print(`working dir ${new io.File('.').resolveSymbolicLinksSync()}`);
    if (args.length < 2 || args.length > 3) {
        core.print(properties._usage);
        io.exit(0);
    }
    let packageRoot : string;
    if (args.length == 3) {
        packageRoot = args[2];
    }
    let resourceProvider : any = PhysicalResourceProvider.INSTANCE;
    let sdk : any = new bare.createInstance(any,null,resourceProvider,resourceProvider.getFolder(args[0]));
    let resolvers = new core.DartList.literal(new bare.createInstance(any,null,sdk),new bare.createInstance(any,null,resourceProvider));
    if (packageRoot != null) {
        let builder : any = new bare.createInstance(any,null,resourceProvider,null,null);
        resolvers.add(new bare.createInstance(any,null,resourceProvider,builder.convertPackagesToMap(builder.createPackageMap(packageRoot))));
    }
    let context : any = ((_) : any =>  {
        {
            _.sourceFactory = new bare.createInstance(any,null,resolvers);
            return _;
        }
    })(AnalysisEngine.instance.createAnalysisContext());
    let source : any = new bare.createInstance(any,null,resourceProvider.getFile(args[1]));
    let changeSet : any = ((_) : any =>  {
        {
            addedSource(source);
            return _;
        }
    })(new bare.createInstance(any,null));
    context.applyChanges(changeSet);
    let libElement : any = context.computeLibraryElement(source);
    core.print(`libElement: ${libElement}`);
    let resolvedUnit : any = context.resolveCompilationUnit(source,libElement);
    let visitor = new _ASTVisitor();
    resolvedUnit.accept(visitor);
};
export namespace _ASTVisitor {
    export type Constructors = '_ASTVisitor';
    export type Interface = Omit<_ASTVisitor, Constructors>;
}
@DartClass
export class _ASTVisitor extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) {
        let lines = new core.DartList.literal<string>(`${node.runtimeType} : <"${node}">`);
        if (is(node, any)) {
            let element : any = node.staticElement;
            if (element != null) {
                lines.add(`  element: ${element.runtimeType}`);
                let library : any = element.library;
                if (library != null) {
                    let fullName = element.library.definingCompilationUnit.source.fullName;
                    lines.add(`  from ${fullName}`);
                }
            }
        }
        core.print(lines.join('\n'));
        return super.visitNode(node);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ASTVisitor() {
    }
}

export class properties {
    private static __$_usage;
    static get _usage() { 
        if (this.__$_usage===undefined) {
            this.__$_usage = 'Usage: resolve_driver <path_to_sdk> <file_to_resolve> [<packages_root>]';
        }
        return this.__$_usage;
    }
    static set _usage(__$value : any)  { 
        this.__$_usage = __$value;
    }

}
