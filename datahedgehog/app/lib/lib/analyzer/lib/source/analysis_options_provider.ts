/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/source/analysis_options_provider.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/source_span/lib/src/span";

export namespace AnalysisOptionsProvider {
    export type Constructors = 'AnalysisOptionsProvider';
    export type Interface = Omit<AnalysisOptionsProvider, Constructors>;
}
@DartClass
export class AnalysisOptionsProvider {
    sourceFactory : any;

    constructor(sourceFactory? : any) {
    }
    @defaultConstructor
    AnalysisOptionsProvider(sourceFactory? : any) {
        this.sourceFactory = sourceFactory;
    }
    getOptions(root : any,_namedArguments? : {crawlUp? : boolean}) : core.DartMap<string,any> {
        let {crawlUp} = Object.assign({
            "crawlUp" : false}, _namedArguments );
        let resource : any;
        for(let folder : any = root; folder != null; folder = folder.parent){
            resource = folder.getChild(AnalysisEngine.ANALYSIS_OPTIONS_FILE);
            if (resource.exists) {
                break;
            }
            resource = folder.getChild(AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE);
            if (resource.exists || !crawlUp) {
                break;
            }
        }
        return this.getOptionsFromFile(resource);
    }
    getOptionsFromFile(file : any) : core.DartMap<string,any> {
        return this.getOptionsFromSource(new bare.createInstance(any,null,file));
    }
    getOptionsFromSource(source : any) : core.DartMap<string,any> {
        let options : core.DartMap<string,any> = this.getOptionsFromString(this._readAnalysisOptions(source));
        let node : any = options.remove(AnalyzerOptions.include);
        if (this.sourceFactory != null && is(node, any)) {
            let path = node.value;
            if (is(path, "string")) {
                let parent : any = this.sourceFactory.resolveUri(source,path);
                options = this.merge(this.getOptionsFromSource(parent),options);
            }
        }
        return options;
    }
    getOptionsFromString(optionsSource : string) : core.DartMap<string,any> {
        let options : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        if (optionsSource == null) {
            return options;
        }
        var safelyLoadYamlNode : () => any = () : any =>  {
            try {
                return loadYamlNode(optionsSource);
            } catch (__error__) {

                if (is(__error__,any)){
                    let e : any = __error__;
                    throw new OptionsFormatException(e.message,e.span);
                }


                {
                    let e = __error__;
                    throw new OptionsFormatException('Unable to parse YAML document.');
                }
            }
        };
        let doc : any = safelyLoadYamlNode();
        if (is(doc, any) && op(Op.EQUALS,doc.value,null)) {
            return options;
        }
        if ((doc != null) && (isNot(doc, any))) {
            throw new OptionsFormatException(`Bad options file format (expected map, got ${doc.runtimeType})`,doc.span);
        }
        if (is(doc, any)) {
            doc.nodes.forEach((k : any,v : any) =>  {
                let key;
                if (is(k, any)) {
                    key = k.value;
                }
                if (isNot(key, "string")) {
                    throw new OptionsFormatException('Bad options file format (expected String scope key, ' + `got ${k.runtimeType})`,((k || doc)).span);
                }
                if (v != null && isNot(v, any)) {
                    throw new OptionsFormatException('Bad options file format (expected Node value, ' + `got ${v.runtimeType}: `${v.toString()}`)`,doc.span);
                }
                options.set(key,v);
            });
        }
        return options;
    }
    merge(defaults : core.DartMap<string,any>,overrides : core.DartMap<string,any>) : core.DartMap<string,any> {
        return new bare.createInstance(any,null).merge(defaults,overrides) as core.DartMap<string,any>;
    }
    _readAnalysisOptions(source : any) : string {
        try {
            return source.contents.data;
        } catch (__error__) {

            {
                let e = __error__;
                return null;
            }
        }
    }
}

export namespace OptionsFormatException {
    export type Constructors = 'OptionsFormatException';
    export type Interface = Omit<OptionsFormatException, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class OptionsFormatException implements core.Exception.Interface {
    message : string;

    span : lib3.SourceSpan;

    constructor(message : string,span? : lib3.SourceSpan) {
    }
    @defaultConstructor
    OptionsFormatException(message : string,span? : lib3.SourceSpan) {
        this.message = message;
        this.span = span;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `OptionsFormatException: ${((_50_)=>(!!_50_)?new core.DartString(_50_).toString():null)(this.message)}, ${((_51_)=>(!!_51_)?_51_.toString():null)(this.span)}`;
    }
}

export class properties {
}
