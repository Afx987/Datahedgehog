/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/source/path_filter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/src/context";
import * as lib4 from "@dart2ts.packages/path/lib/path";

export namespace PathFilter {
    export type Constructors = 'PathFilter';
    export type Interface = Omit<PathFilter, Constructors>;
}
@DartClass
export class PathFilter {
    pathContext : lib3.Context;

    root : string;

    _ignorePatterns : core.DartList<any>;

    constructor(root : string,ignorePatterns : core.DartList<string>,pathContext? : lib3.Context) {
    }
    @defaultConstructor
    PathFilter(root : string,ignorePatterns : core.DartList<string>,pathContext? : lib3.Context) {
        this._ignorePatterns = new core.DartList<any>();
        this.pathContext = (pathContext || lib4.properties.context);
        this.root = root;
        this.setIgnorePatterns(ignorePatterns);
    }
    ignored(path : string) : boolean {
        path = this._canonicalize(path);
        return !this._contained(path) || this._match(path);
    }
    setIgnorePatterns(ignorePatterns : core.DartList<string>) : void {
        this._ignorePatterns.clear();
        if (ignorePatterns != null) {
            for(let ignorePattern of ignorePatterns) {
                this._ignorePatterns.add(new bare.createInstance(any,null,this.pathContext.separator,ignorePattern));
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        for(let pattern of this._ignorePatterns) {
            sb.write(`${pattern} `);
        }
        sb.writeln('');
        return sb.toString();
    }
    _canonicalize(path : string) : string {
        return this.pathContext.normalize(this.pathContext.join(this.root,path));
    }
    _contained(path : string) : boolean {
        return new core.DartString(path).startsWith(this.root);
    }
    _match(path : string) : boolean {
        path = this._relative(path);
        for(let glob of this._ignorePatterns) {
            if (glob.matches(path)) {
                return true;
            }
        }
        return false;
    }
    _relative(path : string) : string {
        return this.pathContext.relative(path,{
            from : this.root});
    }
}

export class properties {
}
