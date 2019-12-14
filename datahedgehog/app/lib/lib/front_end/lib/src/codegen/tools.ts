/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/codegen/tools.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/path/lib/path";

export namespace GeneratedContent {
    export type Constructors = 'GeneratedContent';
    export type Interface = Omit<GeneratedContent, Constructors>;
}
@DartClass
export class GeneratedContent {
    @Abstract
    check(pkgPath : string) : boolean{ throw 'abstract'}
    @Abstract
    generate(pkgPath : string) : void{ throw 'abstract'}
    @Abstract
    output(pkgPath : string) : io.FileSystemEntity{ throw 'abstract'}
    static checkAll(pkgPath : string,generatorRelPath : string,targets : core.DartIterable<GeneratedContent>) : void {
        let generateNeeded : boolean = false;
        for(let target of targets) {
            if (!target.check(pkgPath)) {
                core.print(`${target.output(pkgPath).absolute} does not have expected contents.`);
                generateNeeded = true;
            }
        }
        if (generateNeeded) {
            core.print('Please regenerate using:');
            let executable : string = io.Platform.executable;
            let packageRoot : string = '';
            if (io.Platform.packageRoot != null) {
                packageRoot = ` --package-root=${io.Platform.packageRoot}`;
            }
            let generateScript : string = lib4.join(pkgPath,lib4.joinAll(lib4.properties.posix.split(generatorRelPath)));
            core.print(`  ${executable}${packageRoot} ${generateScript}`);
            io.exit(1);
        }else {
            core.print('All generated files up to date.');
        }
    }
    static generateAll(pkgPath : string,targets : core.DartIterable<GeneratedContent>) : void {
        core.print("Generating...");
        for(let target of targets) {
            target.generate(pkgPath);
        }
    }
    constructor() {
    }
    @defaultConstructor
    GeneratedContent() {
    }
}

export namespace DartFormat {
    export type Constructors = 'DartFormat';
    export type Interface = Omit<DartFormat, Constructors>;
}
@DartClass
export class DartFormat {
    static get _dartfmtPath() : string {
        let binName : string = io.Platform.isWindows ? 'dartfmt.bat' : 'dartfmt';
        return lib4.join(lib4.dirname(io.Platform.resolvedExecutable),binName);
    }
    static formatFile(file : io.File) : void {
        let result : io.ProcessResult = io.Process.runSync(DartFormat._dartfmtPath,new core.DartList.literal('-w',file.path));
        if (result.exitCode != 0) throw result.stderr;
    }
    static formatText(text : string) : string {
        let file : io.File = new io.File(lib4.join(io.Directory.systemTemp.path,'gen.dart'));
        file.writeAsStringSync(text);
        let result : io.ProcessResult = io.Process.runSync(DartFormat._dartfmtPath,new core.DartList.literal('-w',file.path));
        if (result.exitCode != 0) throw result.stderr;
        return file.readAsStringSync();
    }
    constructor() {
    }
    @defaultConstructor
    DartFormat() {
    }
}

export namespace GeneratedDirectory {
    export type Constructors = GeneratedContent.Constructors | 'GeneratedDirectory';
    export type Interface = Omit<GeneratedDirectory, Constructors>;
}
@DartClass
export class GeneratedDirectory extends GeneratedContent {
    outputDirPath : string;

    directoryContentsComputer : (pkgPath : string) => core.DartMap<string,(pkgPath : string) => string>;

    constructor(outputDirPath : string,directoryContentsComputer : (pkgPath : string) => core.DartMap<string,(pkgPath : string) => string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GeneratedDirectory(outputDirPath : string,directoryContentsComputer : (pkgPath : string) => core.DartMap<string,(pkgPath : string) => string>) {
        this.outputDirPath = outputDirPath;
        this.directoryContentsComputer = directoryContentsComputer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    check(pkgPath : string) : boolean {
        let outputDirectory : io.Directory = this.output(pkgPath);
        let map : core.DartMap<string,(pkgPath : string) => string> = this.directoryContentsComputer(pkgPath);
        try {
            for(let file of map.keys) {
                let fileContentsComputer : (pkgPath : string) => string = map.get(file);
                let expectedContents : string = fileContentsComputer(pkgPath);
                let outputFile : io.File = new io.File(lib4.properties.posix.join(outputDirectory.path,file));
                let actualContents : string = outputFile.readAsStringSync();
                actualContents = new core.DartString(actualContents).replaceAll('\n','\n');
                if (expectedContents != actualContents) {
                    return false;
                }
            }
            let nonHiddenFileCount : number = 0;
            outputDirectory.listSync({
                recursive : false,followLinks : false}).forEach((fileSystemEntity : io.FileSystemEntity) =>  {
                if (is(fileSystemEntity, io.File) && !new core.DartString(lib4.basename(fileSystemEntity.path)).startsWith('.')) {
                    nonHiddenFileCount++;
                }
            });
            if (nonHiddenFileCount != map.length) {
                return false;
            }
        } catch (__error__) {

            {
                let e = __error__;
                return false;
            }
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    generate(pkgPath : string) : void {
        let outputDirectory : io.Directory = this.output(pkgPath);
        try {
            outputDirectory.deleteSync({
                recursive : true});
        } catch (__error__) {

            {
                let e = __error__;
            }
        }
        outputDirectory.createSync({
            recursive : true});
        let map : core.DartMap<string,(pkgPath : string) => string> = this.directoryContentsComputer(pkgPath);
        map.forEach((file : string,fileContentsComputer : (pkgPath : string) => string) =>  {
            let outputFile : io.File = new io.File(lib4.properties.posix.join(outputDirectory.path,file));
            core.print(`  ${outputFile.path}`);
            outputFile.writeAsStringSync(fileContentsComputer(pkgPath));
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    output(pkgPath : string) : io.Directory {
        return new io.Directory(lib4.join(pkgPath,lib4.joinAll(lib4.properties.posix.split(this.outputDirPath))));
    }
}

export namespace GeneratedFile {
    export type Constructors = GeneratedContent.Constructors | 'GeneratedFile';
    export type Interface = Omit<GeneratedFile, Constructors>;
}
@DartClass
export class GeneratedFile extends GeneratedContent {
    outputPath : string;

    computeContents : (pkgPath : string) => string;

    constructor(outputPath : string,computeContents : (pkgPath : string) => string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GeneratedFile(outputPath : string,computeContents : (pkgPath : string) => string) {
        this.outputPath = outputPath;
        this.computeContents = computeContents;
    }
    get isDartFile() : boolean {
        return new core.DartString(this.outputPath).endsWith('.dart');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    check(pkgPath : string) : boolean {
        let outputFile : io.File = this.output(pkgPath);
        let expectedContents : string = this.computeContents(pkgPath);
        if (this.isDartFile) {
            expectedContents = DartFormat.formatText(expectedContents);
        }
        try {
            let actualContents : string = outputFile.readAsStringSync();
            actualContents = new core.DartString(actualContents).replaceAll('\n','\n');
            return expectedContents == actualContents;
        } catch (__error__) {

            {
                let e = __error__;
                return false;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    generate(pkgPath : string) : void {
        let outputFile : io.File = this.output(pkgPath);
        core.print(`  ${outputFile.path}`);
        outputFile.writeAsStringSync(this.computeContents(pkgPath));
        if (this.isDartFile) {
            DartFormat.formatFile(outputFile);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    output(pkgPath : string) : io.File {
        return new io.File(lib4.join(pkgPath,lib4.joinAll(lib4.properties.posix.split(this.outputPath))));
    }
}

export class properties {
}
