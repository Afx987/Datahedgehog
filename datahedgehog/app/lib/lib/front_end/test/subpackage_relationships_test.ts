/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/subpackage_relationships_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "@dart2ts.packages/path/lib/path";

export var main : () => any = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
    io.exit(await new _SubpackageRelationshipsTest().run());
})());
export namespace SubpackageRules {
    export type Constructors = 'SubpackageRules';
    export type Interface = Omit<SubpackageRules, Constructors>;
}
@DartClass
export class SubpackageRules {
    mayImportAnalyzer : boolean;

    allowSubdirs : boolean;

    allowedDependencies : core.DartList<string>;

    actuallyContainsFiles;

    actuallyImportsAnalyzer;

    actuallyHasSubdirs;

    actualDependencies;

    constructor(_namedArguments? : {mayImportAnalyzer? : boolean,allowSubdirs? : boolean,allowedDependencies? : core.DartList<string>}) {
    }
    @defaultConstructor
    SubpackageRules(_namedArguments? : {mayImportAnalyzer? : boolean,allowSubdirs? : boolean,allowedDependencies? : core.DartList<string>}) {
        let {mayImportAnalyzer,allowSubdirs,allowedDependencies} = Object.assign({
            "mayImportAnalyzer" : false,
            "allowSubdirs" : false,
            "allowedDependencies" : new core.DartList.literal()}, _namedArguments );
        this.actuallyContainsFiles = false;
        this.actuallyImportsAnalyzer = false;
        this.actuallyHasSubdirs = false;
        this.actualDependencies = new core.DartSet<string>();
        this.mayImportAnalyzer = mayImportAnalyzer;
        this.allowSubdirs = allowSubdirs;
        this.allowedDependencies = allowedDependencies;
    }
}

export namespace _SubpackageRelationshipsTest {
    export type Constructors = '_SubpackageRelationshipsTest';
    export type Interface = Omit<_SubpackageRelationshipsTest, Constructors>;
}
@DartClass
export class _SubpackageRelationshipsTest {
    frontEndLibUri;

    problemsReported : boolean;

    checkDependency(src : lib4.Uri,dst : lib4.Uri) : void {
        if (dst.scheme == 'dart') return;
        if (dst.scheme != 'package') {
            this.problem(`${src} depends on ${dst}, which is neither a package: or dart: URI`);
            return;
        }
        let srcSubpackage = this.subpackageForUri(src);
        if (srcSubpackage == null) return;
        let srcSubpackageRules = op(Op.INDEX,properties.subpackageRules,srcSubpackage);
        if (op(Op.EQUALS,srcSubpackageRules,null)) {
            this.problem(`${src} is in subpackage "${srcSubpackage}", which is not found in ` + 'subpackageRules');
            return;
        }
        srcSubpackageRules.actuallyContainsFiles = true;
        if (dst.pathSegments[0] == 'analyzer') {
            if (srcSubpackageRules.mayImportAnalyzer) {
                srcSubpackageRules.actuallyImportsAnalyzer = true;
            }else {
                this.problem(`${src} depends on ${dst}, but subpackage "${srcSubpackage}" may not ` + 'import analyzer');
            }
        }
        let dstSubPackage = this.subpackageForUri(dst);
        if (dstSubPackage == null) return;
        if (dstSubPackage == srcSubpackage) return;
        if (srcSubpackageRules.allowedDependencies.contains(dstSubPackage)) {
            srcSubpackageRules.actualDependencies.add(dstSubPackage);
        }else {
            this.problem(`${src} depends on ${dst}, but subpackage "${srcSubpackage}" is not ` + `allowed to depend on subpackage "${dstSubPackage}"`);
        }
    }
    findFrontEndUris() : core.DartList<lib4.Uri> {
        let frontEndUris = new core.DartList.literal<lib4.Uri>();
        let frontEndLibPath = lib5.fromUri(this.frontEndLibUri);
        for(let entity of new io.Directory(frontEndLibPath).listSync({
            recursive : true,followLinks : false})) {
            if (is(entity, io.File) && new core.DartString(entity.path).endsWith('.dart')) {
                let posixRelativePath = lib5.properties.url.joinAll(lib5.split(lib5.relative(entity.path,{
                    from : frontEndLibPath})));
                frontEndUris.add(lib4.Uri.parse(`package:front_end/${posixRelativePath}`));
            }
        }
        return frontEndUris;
    }
    problem(description : string) : void {
        core.print(description);
        this.problemsReported = true;
    }
    run() : async.Future<number> { 
        return new async.Future.fromPromise(( async () =>  {
            let frontEndUris = await this.findFrontEndUris();
            let packagesFileUri = this.frontEndLibUri.resolve('../../../.packages');
            let graph = await graphForProgram(frontEndUris,((_) : any =>  {
                {
                    _.packagesFileUri = packagesFileUri;
                    _.chaseDependencies = true;
                    return _;
                }
            })(new bare.createInstance(any,null)));
            for(let i = 0; i < graph.topologicallySortedCycles.length; i++){
                for(let library of op(Op.INDEX,graph.topologicallySortedCycles,i).libraries.values) {
                    for(let dependency of library.dependencies) {
                        this.checkDependency(library.uri,dependency.uri);
                    }
                }
            }
            properties.subpackageRules.forEach((subpackage : any,rule : any) =>  {
                if (!rule.actuallyContainsFiles) {
                    this.problem(`${subpackage} contains no files`);
                }
                if (rule.mayImportAnalyzer && !rule.actuallyImportsAnalyzer) {
                    this.problem(`${subpackage} is allowed to import analyzer, but doesn't`);
                }
                if (rule.allowSubdirs && !rule.actuallyHasSubdirs) {
                    this.problem(`${subpackage} is allowed to have subdirectories, but doesn't`);
                }
                for(let dep of rule.allowedDependencies.toSet().difference(rule.actualDependencies)) {
                    this.problem(`${subpackage} lists ${dep} as a dependency, but doesn't use it`);
                }
            });
            return this.problemsReported ? 1 : 0;
        } )());
    }

    subpackageForUri(src : lib4.Uri) : string {
        if (src.scheme != 'package') return null;
        if (src.pathSegments[0] != 'front_end') return null;
        let pathWithLib = `lib/${src.pathSegments.skip(1).join('/')}`;
        let subpackage : string;
        let pathWithinSubpackage : string;
        for(let subpackagePath of properties.subpackageRules.keys) {
            let subpackagePathWithSlash = `${subpackagePath}/`;
            if (new core.DartString(pathWithLib).startsWith(subpackagePathWithSlash) && (subpackage == null || new core.DartString(subpackage).length < subpackagePath.length)) {
                subpackage = subpackagePath;
                pathWithinSubpackage = new core.DartString(pathWithLib).substring(new core.DartString(subpackagePathWithSlash).length);
            }
        }
        if (subpackage == null) {
            this.problem(`Uri ${src} is inside package:front_end but is not in any known ` + 'subpackage');
        }else if (new core.DartString(pathWithinSubpackage).contains('/')) {
            if (op(Op.INDEX,properties.subpackageRules,subpackage).allowSubdirs) {
                op(Op.INDEX,properties.subpackageRules,subpackage).actuallyHasSubdirs = true;
            }else {
                this.problem(`Uri ${src} is in a subfolder of ${subpackage}, but that ` + 'subpackage does not allow dart files in subdirectories.');
            }
        }
        return subpackage;
    }
    constructor() {
    }
    @defaultConstructor
    _SubpackageRelationshipsTest() {
        this.frontEndLibUri = io.Platform.script.resolve('../lib/');
        this.problemsReported = false;
    }
}

export class properties {
    private static __$subpackageRules;
    static get subpackageRules() { 
        if (this.__$subpackageRules===undefined) {
            this.__$subpackageRules = new core.DartMap.literal([
                ['lib',new SubpackageRules({
                    mayImportAnalyzer : true,allowedDependencies : new core.DartList.literal('lib/src','lib/src/base','lib/src/fasta','lib/src/fasta/dill','lib/src/fasta/kernel','lib/src/incremental')})],
                ['lib/src',new SubpackageRules({
                    mayImportAnalyzer : true,allowedDependencies : new core.DartList.literal('lib','lib/src/base','lib/src/fasta',"lib/src/fasta/dill","lib/src/fasta/kernel",'lib/src/fasta/source','lib/src/incremental')})],
                ['lib/src/base',new SubpackageRules({
                    allowedDependencies : new core.DartList.literal('lib','lib/src','lib/src/fasta','lib/src/incremental')})],
                ['lib/src/codegen',new SubpackageRules()],
                ['lib/src/fasta',new SubpackageRules({
                    allowedDependencies : new core.DartList.literal('lib','lib/src/fasta/builder','lib/src/fasta/dill','lib/src/fasta/kernel','lib/src/fasta/parser','lib/src/fasta/scanner','lib/src/fasta/testing','lib/src/fasta/util','lib/src/scanner')})],
                ['lib/src/fasta/builder',new SubpackageRules({
                    allowedDependencies : new core.DartList.literal('lib/src/fasta','lib/src/fasta/parser','lib/src/fasta/source','lib/src/fasta/type_inference','lib/src/fasta/util')})],
                ['lib/src/fasta/dill',new SubpackageRules({
                    allowedDependencies : new core.DartList.literal('lib/src/fasta','lib/src/fasta/builder','lib/src/fasta/kernel')})],
                ['lib/src/fasta/kernel',new SubpackageRules({
                    allowedDependencies : new core.DartList.literal('lib','lib/src/fasta','lib/src/base','lib/src/fasta/builder','lib/src/fasta/dill','lib/src/fasta/parser','lib/src/fasta/scanner','lib/src/fasta/source','lib/src/fasta/type_inference','lib/src/fasta/util','lib/src/scanner')})],
                ['lib/src/fasta/parser',new SubpackageRules({
                    allowedDependencies : new core.DartList.literal('lib/src/fasta','lib/src/fasta/scanner','lib/src/fasta/util','lib/src/scanner')})],
                ['lib/src/fasta/scanner',new SubpackageRules({
                    allowedDependencies : new core.DartList.literal('lib/src/fasta','lib/src/scanner','lib/src/fasta/util')})],
                ['lib/src/fasta/source',new SubpackageRules({
                    allowedDependencies : new core.DartList.literal('lib','lib/src/fasta','lib/src/base','lib/src/fasta/builder','lib/src/fasta/dill','lib/src/fasta/kernel','lib/src/fasta/parser','lib/src/fasta/scanner','lib/src/fasta/type_inference','lib/src/fasta/util','lib/src/scanner')})],
                ['lib/src/fasta/testing',new SubpackageRules({
                    allowedDependencies : new core.DartList.literal('lib/src/fasta','lib/src/base','lib/src/fasta/kernel','lib/src/fasta/scanner','lib/src/scanner')})],
                ['lib/src/fasta/type_inference',new SubpackageRules({
                    allowedDependencies : new core.DartList.literal('lib/src','lib/src/base','lib/src/fasta','lib/src/fasta/kernel')})],
                ['lib/src/fasta/util',new SubpackageRules()],
                ['lib/src/incremental',new SubpackageRules({
                    allowedDependencies : new core.DartList.literal('lib','lib/src','lib/src/base','lib/src/fasta','lib/src/fasta/parser','lib/src/fasta/source')})],
                ['lib/src/scanner',new SubpackageRules({
                    allowedDependencies : new core.DartList.literal('lib/src/base','lib/src/fasta','lib/src/fasta/scanner')})]]);
        }
        return this.__$subpackageRules;
    }
    static set subpackageRules(__$value : any)  { 
        this.__$subpackageRules = __$value;
    }

}
