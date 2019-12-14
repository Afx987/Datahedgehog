/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/testing/environment_variable.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "./../errors";
import * as lib5 from "@dart2ts/dart/uri";

export var fileExists : (base : lib5.Uri,path : string) => async.Future<boolean> = (base : lib5.Uri,path : string) => new async.Future.fromPromise(( async () : Promise<boolean> =>  {
    return await new io.File.fromUri(base.resolve(path)).exists();
})());
export namespace EnvironmentVariable {
    export type Constructors = 'EnvironmentVariable';
    export type Interface = Omit<EnvironmentVariable, Constructors>;
}
@DartClass
export class EnvironmentVariable {
    name : string;

    what : string;

    constructor(name : string,what : string) {
    }
    @defaultConstructor
    EnvironmentVariable(name : string,what : string) {
        this.name = name;
        this.what = what;
    }
    get value() : async.Future<string> { 
        return new async.Future.fromPromise(( async () =>  {
            let value : string = io.Platform.environment.get(this.name);
            if (value == null) return this.variableNotDefined();
            await this.validate(value);
            return value;
        } )());
    }

    validate(value : string) : async.Future<core.Null> {
        return new async.Future.value();
    }
    variableNotDefined() {
        lib4.inputError(null,null,`The environment variable '${this.name}' isn't defined. ${this.what}`);
    }
}

export namespace EnvironmentVariableFile {
    export type Constructors = EnvironmentVariable.Constructors | 'EnvironmentVariableFile';
    export type Interface = Omit<EnvironmentVariableFile, Constructors>;
}
@DartClass
export class EnvironmentVariableFile extends EnvironmentVariable {
    constructor(name : string,what : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EnvironmentVariableFile(name : string,what : string) {
        super.EnvironmentVariable(name,what);
    }
    validate(value : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!await new io.File(value).exists()) this.notFound(value);
            return null;
        } )());
    }

    notFound(value : string) {
        lib4.inputError(null,null,`The environment variable '${this.name}' has the value ` + `'${value}', that isn't a file. ${this.what}`);
    }
}

export namespace EnvironmentVariableDirectory {
    export type Constructors = EnvironmentVariable.Constructors | 'EnvironmentVariableDirectory';
    export type Interface = Omit<EnvironmentVariableDirectory, Constructors>;
}
@DartClass
export class EnvironmentVariableDirectory extends EnvironmentVariable {
    constructor(name : string,what : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EnvironmentVariableDirectory(name : string,what : string) {
        super.EnvironmentVariable(name,what);
    }
    validate(value : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!await new io.Directory(value).exists()) this.notFound(value);
            return null;
        } )());
    }

    notFound(value : string) {
        lib4.inputError(null,null,`The environment variable '${this.name}' has the value ` + `'${value}', that isn't a directory. ${this.what}`);
    }
}

export class properties {
}
