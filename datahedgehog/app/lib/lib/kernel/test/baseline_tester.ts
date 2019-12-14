/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/baseline_tester.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/path/lib/path";
import * as lib5 from "@dart2ts/dart/uri";

export var runBaselineTests : (folderName : string,target : TestTarget) => void = (folderName : string,target : TestTarget) : void =>  {
    let outputDirectory : string = `${properties.testcaseDirectory}/${folderName}`;
    let batch = new bare.createInstance(any,null);
    let directory : io.Directory = new io.Directory(properties.inputDirectory);
    let applicationRoot = new bare.createInstance(any,null,directory.absolute.path);
    for(let file of directory.listSync()) {
        if (is(file, io.File) && new core.DartString(file.path).endsWith('.dart')) {
            let name : string = lib4.basename(file.path);
            test(name,() => new async.Future.fromPromise(( async () : Promise<any> =>  {
                let dartPath : lib5.Uri = new lib5.Uri({
                    scheme : 'file',path : lib4.absolute(file.path)});
                let shortName : string = lib4.withoutExtension(name);
                let filenameOfBaseline : string = `${outputDirectory}/${shortName}.baseline.txt`;
                let filenameOfCurrent : string = `${outputDirectory}/${shortName}.current.txt`;
                let program = new bare.createInstance(any,null);
                let loader = await batch.getLoader(program,new bare.createInstance(any,null,{
                    strongMode : target.strongMode,sdk : properties.sdkDirectory,declaredVariables : target.extraDeclaredVariables,applicationRoot : applicationRoot}));
                loader.loadProgram(dartPath,{
                    target : target});
                verifyProgram(program);
                let errors = new core.DartList.literal<string>();
                errors.addAll(target.performModularTransformations(program));
                verifyProgram(program);
                errors.addAll(target.performGlobalTransformations(program));
                verifyProgram(program);
                let buffer = new core.DartStringBuffer();
                for(let error of errors) {
                    buffer.writeln(`// ${error}`);
                }
                new bare.createInstance(any,null,buffer,{
                    annotator : target.annotator}).writeLibraryFile(program.mainMethod.enclosingLibrary);
                let current : string = `${buffer}`;
                new io.File(filenameOfCurrent).writeAsStringSync(current);
                let baselineFile = new io.File(filenameOfBaseline);
                if (!baselineFile.existsSync()) {
                    new io.File(filenameOfBaseline).writeAsStringSync(current);
                }else {
                    let baseline = baselineFile.readAsStringSync();
                    if (baseline != current) {
                        fail(`Output of `${name}` changed for ${folderName}.\n` + 'Command to reset the baseline:\n' + `  rm ${filenameOfBaseline}\n` + 'Command to see the diff:\n' + `  diff -cd ${outputDirectory}/${shortName}.{baseline,current}.txt` + '\n');
                    }
                }
            })()));
        }
    }
};
export namespace TestTarget {
    export type Constructors = 'TestTarget';
    export type Interface = Omit<TestTarget, Constructors>;
}
@DartClass
export class TestTarget extends any {
    get annotator() : any {
        return null;
    }
    @Abstract
    performModularTransformations(program : any) : core.DartList<string>{ throw 'abstract'}
    @Abstract
    performGlobalTransformations(program : any) : core.DartList<string>{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TestTarget() {
    }
}

export class properties {
    private static __$testcaseDirectory : string;
    static get testcaseDirectory() : string { 
        if (this.__$testcaseDirectory===undefined) {
            this.__$testcaseDirectory = 'pkg/kernel/testcases';
        }
        return this.__$testcaseDirectory;
    }
    static set testcaseDirectory(__$value : string)  { 
        this.__$testcaseDirectory = __$value;
    }

    private static __$inputDirectory : string;
    static get inputDirectory() : string { 
        if (this.__$inputDirectory===undefined) {
            this.__$inputDirectory = 'pkg/kernel/testcases/input';
        }
        return this.__$inputDirectory;
    }
    static set inputDirectory(__$value : string)  { 
        this.__$inputDirectory = __$value;
    }

    private static __$sdkDirectory : string;
    static get sdkDirectory() : string { 
        if (this.__$sdkDirectory===undefined) {
            this.__$sdkDirectory = 'sdk';
        }
        return this.__$sdkDirectory;
    }
    static set sdkDirectory(__$value : string)  { 
        this.__$sdkDirectory = __$value;
    }

}
