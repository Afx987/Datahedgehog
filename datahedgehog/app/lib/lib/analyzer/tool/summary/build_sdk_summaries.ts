/** Library asset:datahedgehog_monitor/lib/lib/analyzer/tool/summary/build_sdk_summaries.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    let command : string;
    let outFilePath : string;
    let sdkPath : string;
    if (args.length == 2) {
        command = args[0];
        outFilePath = args[1];
    }else if (args.length == 3) {
        command = args[0];
        outFilePath = args[1];
        sdkPath = args[2];
    }else {
        _printUsage();
        io.properties.exitCode = 1;
        return;
    }
    sdkPath = ( sdkPath ) || ( FolderBasedDartSdk.defaultSdkDirectory(PhysicalResourceProvider.INSTANCE).path );
    if (!io.FileSystemEntity.isDirectorySync(`${sdkPath}/lib`)) {
        core.print(`'${sdkPath}/lib' does not exist.`);
        _printUsage();
        return;
    }
    if (command == 'build-spec') {
        _buildSummary(sdkPath,outFilePath,false);
    }else if (command == 'build-strong') {
        _buildSummary(sdkPath,outFilePath,true);
    }else {
        _printUsage();
        return;
    }
};
export var _buildSummary : (sdkPath : string,outPath : string,strong : boolean) => void = (sdkPath : string,outPath : string,strong : boolean) : void =>  {
    let modeName : string = strong ? 'strong' : 'spec';
    core.print(`Generating ${modeName} mode summary.`);
    let sw : core.DartStopwatch = ((_) : core.DartStopwatch =>  {
        {
            _.start();
            return _;
        }
    })(new core.DartStopwatch());
    let bytes : core.DartList<number> = new bare.createInstance(any,null,sdkPath,strong).build();
    new io.File(outPath).writeAsBytesSync(bytes,{
        mode : io.FileMode.WRITE_ONLY});
    core.print(`	Done in ${sw.elapsedMilliseconds} ms.`);
};
export var _printUsage : () => void = () : void =>  {
    core.print(`Usage: ${properties.BINARY_NAME} command arguments`);
    core.print('Where command can be one of the following:');
    core.print('  build-spec output_file [sdk_path]');
    core.print('    Generate spec mode summary file.');
    core.print('  build-strong output_file [sdk_path]');
    core.print('    Generate strong mode summary file.');
};
export class properties {
    private static __$BINARY_NAME;
    static get BINARY_NAME() { 
        if (this.__$BINARY_NAME===undefined) {
            this.__$BINARY_NAME = "build_sdk_summaries";
        }
        return this.__$BINARY_NAME;
    }
    static set BINARY_NAME(__$value : any)  { 
        this.__$BINARY_NAME = __$value;
    }

}
