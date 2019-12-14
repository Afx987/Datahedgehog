/** Library asset:datahedgehog_monitor/lib/lib/analyzer/tool/summary/stats.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as mirrors from "@dart2ts/dart/mirrors";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    if (args.length != 1) {
        _printUsage();
        io.properties.exitCode = 1;
        return;
    }
    let inputFilePath : string = args[0];
    let bundle : any = new bare.createInstance(any,null,new io.File(inputFilePath).readAsBytesSync());
    let stats : Stats = new Stats();
    stats.record(bundle);
    stats.dump();
};
export var _printUsage : () => void = () : void =>  {
    core.print(`Usage: ${properties.BINARY_NAME} input_file_path`);
};
export namespace Stats {
    export type Constructors = 'Stats';
    export type Interface = Omit<Stats, Constructors>;
}
@DartClass
export class Stats {
    counts : core.DartMap<core.Type,core.DartMap<string,number>>;

    dump() : void {
        this.counts.forEach((type : core.Type,typeCounts : core.DartMap<string,number>) =>  {
            core.print(type);
            let keys : core.DartList<string> = typeCounts.keys.toList();
            keys.sort((a : string,b : string) =>  {
                return new core.DartInt(typeCounts.get(b)).compareTo(typeCounts.get(a));
            });
            for(let key of keys) {
                core.print(`  ${key}: ${typeCounts.get(key)}`);
            }
            core.print('');
        });
    }
    record(obj : any) : void {
        let typeCounts : core.DartMap<string,number> = this.counts.putIfAbsent(obj.runtimeType,() =>  {
            return new core.DartMap.literal([
            ]);
        });
        obj.toMap().forEach((key : string,value : core.DartObject) =>  {
            if (op(Op.EQUALS,value,null) || op(Op.EQUALS,value,0) || op(Op.EQUALS,value,false) || op(Op.EQUALS,value,'') || is(value, core.DartList<any>) && value.isEmpty || mirrors.reflect(value).type.isEnum && op(Op.EQUALS,(value as any).index,0)) {
                return;
            }
            if (!typeCounts.containsKey(key)) {
                typeCounts.set(key,0);
            }
            typeCounts.get(key)++;
            if (is(value, any)) {
                this.record(value);
            }else if (is(value, core.DartList<any>)) {
                value.forEach((element : core.DartObject) =>  {
                    if (is(element, any)) {
                        this.record(element);
                    }
                });
            }
        });
    }
    constructor() {
    }
    @defaultConstructor
    Stats() {
        this.counts = new core.DartMap.literal([
        ]);
    }
}

export class properties {
    private static __$BINARY_NAME : string;
    static get BINARY_NAME() : string { 
        if (this.__$BINARY_NAME===undefined) {
            this.__$BINARY_NAME = "stats";
        }
        return this.__$BINARY_NAME;
    }
    static set BINARY_NAME(__$value : string)  { 
        this.__$BINARY_NAME = __$value;
    }

}
