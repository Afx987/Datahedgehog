/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/source/source_loader.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../loader";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "./../compiler_context";
import * as lib6 from "./source_library_builder";
import * as lib7 from "./../errors";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as lib9 from "./../scanner";
import * as lib10 from "./../../scanner/token";
import * as lib11 from "./../scanner/error_token";
import * as lib12 from "./outline_builder";
import * as lib13 from "./../parser/class_member_parser";
import * as lib14 from "./../builder/library_builder";
import * as lib15 from "./diet_listener";
import * as lib16 from "./diet_parser";
import * as lib17 from "./../builder/builder";
import * as lib18 from "./../builder/class_builder";
import * as lib19 from "./../builder/enum_builder";
import * as lib20 from "./../builder/type_builder";
import * as lib21 from "./../builder/named_type_builder";
import * as lib22 from "./source_class_builder";

export namespace SourceLoader {
    export type Constructors = lib3.Loader.Constructors | 'SourceLoader';
    export type Interface<L> = Omit<SourceLoader<L>, Constructors>;
}
@DartClass
export class SourceLoader<L> extends lib3.Loader<L> {
    fileSystem : any;

    sourceBytes : core.DartMap<lib4.Uri,core.DartList<number>>;

    excludeSource : boolean;

    hierarchy : any;

    coreTypes : any;

    astFactory : any;

    typeInferenceEngine : any;

    instrumentation : any;

    constructor(fileSystem : any,target : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SourceLoader(fileSystem : any,target : any) {
        this.sourceBytes = new core.DartMap.literal([
        ]);
        this.excludeSource = lib5.CompilerContext.current.options.excludeSource;
        this.astFactory = new bare.createInstance(any,null);
        super.Loader(target);
        this.fileSystem = fileSystem;
    }
    tokenize(library : lib6.SourceLibraryBuilder<any,any>,_namedArguments? : {suppressLexicalErrors? : boolean}) : async.Future<lib10.Token> { 
        return new async.Future.fromPromise(( async () =>  {
            let {suppressLexicalErrors} = Object.assign({
                "suppressLexicalErrors" : false}, _namedArguments );
            let uri : lib4.Uri = library.fileUri;
            if (op(Op.EQUALS,uri,null) || uri.scheme != "file") {
                return lib7.inputError(library.uri,-1,`Not found: ${library.uri}.`);
            }
            let bytes : core.DartList<number> = this.sourceBytes.get(uri);
            if (bytes == null) {
                try {
                    let rawBytes : core.DartList<number> = await this.fileSystem.entityForUri(uri).readAsBytes();
                    let zeroTerminatedBytes : typed_data.Uint8List = new typed_data.Uint8List(rawBytes.length + 1);
                    zeroTerminatedBytes.setRange(0,rawBytes.length,rawBytes);
                    bytes = zeroTerminatedBytes;
                    this.sourceBytes.set(uri,bytes);
                } catch (__error__) {

                    if (is(__error__,any)){
                        let e : any = __error__;
                        return lib7.inputError(uri,-1,e.message);
                    }
                }
            }
            this.byteCount += bytes.length - 1;
            let result : lib9.ScannerResult = lib9.scan(bytes);
            let token : lib10.Token = result.tokens;
            if (!suppressLexicalErrors) {
                let source : core.DartList<number> = this.getSource(bytes);
                this.target.addSourceInformation(library.fileUri,result.lineStarts,source);
            }
            while (is(token, lib11.ErrorToken)){
                if (!suppressLexicalErrors) {
                    let error : lib11.ErrorToken = token;
                    library.addCompileTimeError(token.charOffset,error.assertionMessage,{
                        fileUri : uri});
                }
                token = token.next;
            }
            return token;
        } )());
    }

    getSource(bytes : core.DartList<number>) : core.DartList<number> {
        if (this.excludeSource) return new core.DartList.literal<number>();
        if (is(bytes, typed_data.Uint8List)) {
            return new typed_data.Uint8List.view(bytes.buffer,bytes.offsetInBytes,bytes.length - 1);
        }
        return bytes.sublist(0,bytes.length - 1);
    }
    buildOutline(library : lib6.SourceLibraryBuilder<any,any>) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let tokens : lib10.Token = await this.tokenize(library);
            if (op(Op.EQUALS,tokens,null)) return;
            let listener : lib12.OutlineBuilder = new lib12.OutlineBuilder(library);
            new lib13.ClassMemberParser(listener).parseUnit(tokens);
        } )());
    }

    buildBody(library : lib14.LibraryBuilder<any,any>) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            if (is(library, lib6.SourceLibraryBuilder<any,any>)) {
                let tokens : lib10.Token = await this.tokenize(library,{
                    suppressLexicalErrors : true});
                if (op(Op.EQUALS,tokens,null)) return;
                let listener : lib15.DietListener = this.createDietListener(library);
                let parser : lib16.DietParser = new lib16.DietParser(listener);
                parser.parseUnit(tokens);
                for(let part of library.parts) {
                    let tokens : lib10.Token = await this.tokenize(part);
                    if (tokens != null) {
                        listener.uri = part.fileUri;
                        parser.parseUnit(tokens);
                    }
                }
            }
        } )());
    }

    get target() : any {
        return super.target;
    }
    createDietListener(library : lib14.LibraryBuilder<any,any>) : lib15.DietListener {
        return new lib15.DietListener(library,this.hierarchy,this.coreTypes,this.typeInferenceEngine);
    }
    resolveParts() : void {
        let parts : core.DartList<lib4.Uri> = new core.DartList.literal<lib4.Uri>();
        this.builders.forEach((uri : lib4.Uri,library : lib14.LibraryBuilder<any,any>) =>  {
            if (is(library, lib6.SourceLibraryBuilder<any,any>)) {
                if (library.isPart) {
                    library.validatePart();
                    parts.add(uri);
                }else {
                    library.includeParts();
                }
            }
        });
        parts.forEach(this.builders.remove.bind(this.builders));
        this.ticker.logMs("Resolved parts");
    }
    computeLibraryScopes() : void {
        let exporters : core.DartSet<lib14.LibraryBuilder<any,any>> = new core.DartSet<lib14.LibraryBuilder<any,any>>();
        let exportees : core.DartSet<lib14.LibraryBuilder<any,any>> = new core.DartSet<lib14.LibraryBuilder<any,any>>();
        this.builders.forEach((uri : lib4.Uri,library : lib14.LibraryBuilder<any,any>) =>  {
            if (is(library, lib6.SourceLibraryBuilder<any,any>)) {
                library.buildInitialScopes();
            }
            if (library.exporters.isNotEmpty) {
                exportees.add(library);
                for(let exporter of library.exporters) {
                    exporters.add(exporter.exporter);
                }
            }
        });
        let both : core.DartSet<lib6.SourceLibraryBuilder<any,any>> = new core.DartSet<lib6.SourceLibraryBuilder<any,any>>();
        for(let exported of exportees) {
            if (exporters.contains(exported)) {
                both.add(exported);
            }
            for(let export of exported.exporters) {
                exported.exports.forEach(export.addToExportScope.bind(export));
            }
        }
        let wasChanged : boolean = false;
        do{
            wasChanged = false;
            for(let exported of both) {
                for(let export of exported.exporters) {
                    let exporter : lib6.SourceLibraryBuilder<any,any> = export.exporter;
                    exported.exports.forEach((name : string,member : lib17.Builder) =>  {
                        if (exporter.addToExportScope(name,member)) {
                            wasChanged = true;
                        }
                    });
                }
            }
        } while (wasChanged);
        this.builders.forEach((uri : lib4.Uri,library : lib14.LibraryBuilder<any,any>) =>  {
            if (is(library, lib6.SourceLibraryBuilder<any,any>)) {
                library.addImportsToScope();
            }
        });
        this.ticker.logMs("Computed library scopes");
    }
    debugPrintExports() : void {
        this.builders.forEach((uri : lib4.Uri,l : any) =>  {
            let library : lib6.SourceLibraryBuilder<any,any> = l;
            let members : core.DartSet<lib17.Builder> = new core.DartSet<lib17.Builder>();
            library.forEach((name : string,member : lib17.Builder) =>  {
                while (member != null){
                    members.add(member);
                    member = member.next;
                }
            });
            let exports : core.DartList<string> = new core.DartList.literal<string>();
            library.exports.forEach((name : string,member : lib17.Builder) =>  {
                while (member != null){
                    if (!members.contains(member)) {
                        exports.add(name);
                    }
                    member = member.next;
                }
            });
            if (exports.isNotEmpty) {
                core.print(`${uri} exports ${exports}`);
            }
        });
    }
    resolveTypes() : void {
        let typeCount : number = 0;
        this.builders.forEach((uri : lib4.Uri,library : lib14.LibraryBuilder<any,any>) =>  {
            typeCount += library.resolveTypes(null);
        });
        this.ticker.logMs(`Resolved ${typeCount} types`);
    }
    finishStaticInvocations() : void {
        let count : number = 0;
        this.builders.forEach((uri : lib4.Uri,library : lib14.LibraryBuilder<any,any>) =>  {
            count += library.finishStaticInvocations();
        });
        this.ticker.logMs(`Finished static invocations ${count}`);
    }
    resolveConstructors() : void {
        let count : number = 0;
        this.builders.forEach((uri : lib4.Uri,library : lib14.LibraryBuilder<any,any>) =>  {
            count += library.resolveConstructors(null);
        });
        this.ticker.logMs(`Resolved ${count} constructors`);
    }
    finishTypeVariables(object : lib18.ClassBuilder<any,any>) : void {
        let count : number = 0;
        this.builders.forEach((uri : lib4.Uri,library : lib14.LibraryBuilder<any,any>) =>  {
            count += library.finishTypeVariables(object);
        });
        this.ticker.logMs(`Resolved ${count} type-variable bounds`);
    }
    finishNativeMethods() : void {
        let count : number = 0;
        this.builders.forEach((uri : lib4.Uri,library : lib14.LibraryBuilder<any,any>) =>  {
            count += library.finishNativeMethods();
        });
        this.ticker.logMs(`Finished ${count} native methods`);
    }
    allSupertypes(cls : lib18.ClassBuilder<any,any>) : core.DartSet<lib18.ClassBuilder<any,any>> {
        let length : number = 0;
        let result : core.DartSet<lib18.ClassBuilder<any,any>> = ((_) : core.DartSet<lib18.ClassBuilder<any,any>> =>  {
            {
                _.add(cls);
                return _;
            }
        })(new core.DartSet<lib18.ClassBuilder<any,any>>());
        while (length != result.length){
            length = result.length;
            result.addAll(this.directSupertypes(result));
        }
        return result;
    }
    directSupertypes(classes : core.DartIterable<lib18.ClassBuilder<any,any>>) : core.DartSet<lib18.ClassBuilder<any,any>> {
        let result : core.DartSet<lib18.ClassBuilder<any,any>> = new core.DartSet<lib18.ClassBuilder<any,any>>();
        for(let cls of classes) {
            this.target.addDirectSupertype(cls,result);
        }
        return result;
    }
    cyclicCandidates(classes : core.DartIterable<lib18.ClassBuilder<any,any>>) : core.DartIterable<lib18.ClassBuilder<any,any>> {
        let input : core.DartIterable<lib18.ClassBuilder<any,any>> = new core.DartList.literal();
        let output : core.DartIterable<lib18.ClassBuilder<any,any>> = classes;
        while (input.length != output.length){
            input = output;
            output = this.directSupertypes(input);
        }
        return output;
    }
    checkSemantics() : void {
        let allClasses : core.DartList<lib18.ClassBuilder<any,any>> = this.target.collectAllClasses();
        let candidates : core.DartIterable<lib18.ClassBuilder<any,any>> = this.cyclicCandidates(allClasses);
        let realCycles : core.DartMap<lib18.ClassBuilder<any,any>,core.DartSet<lib18.ClassBuilder<any,any>>> = new core.DartMap.literal([
        ]);
        for(let cls of candidates) {
            let cycles : core.DartSet<lib18.ClassBuilder<any,any>> = this.cyclicCandidates(this.allSupertypes(cls));
            if (cycles.isNotEmpty) {
                realCycles.set(cls,cycles);
            }
        }
        let reported : core.DartSet<lib18.ClassBuilder<any,any>> = new core.DartSet<lib18.ClassBuilder<any,any>>();
        realCycles.forEach((cls : lib18.ClassBuilder<any,any>,cycles : core.DartSet<lib18.ClassBuilder<any,any>>) =>  {
            this.target.breakCycle(cls);
            if (reported.add(cls)) {
                let involved : core.DartList<lib18.ClassBuilder<any,any>> = new core.DartList.literal<lib18.ClassBuilder<any,any>>();
                for(let cls of cycles) {
                    if (realCycles.containsKey(cls)) {
                        involved.add(cls);
                        reported.add(cls);
                    }
                }
                let involvedString : string = involved.map((c : any) =>  {
                    return c.fullNameForErrors;
                }).join("', '");
                cls.addCompileTimeError(cls.charOffset,`'${cls.fullNameForErrors}' is a supertype of itself via ` + `'${involvedString}'.`);
            }
        });
        this.ticker.logMs("Found cycles");
        let blackListedClasses : core.DartSet<lib18.ClassBuilder<any,any>> = new core.DartSet.from(new core.DartList.literal(op(Op.INDEX,this.coreLibrary,"bool"),op(Op.INDEX,this.coreLibrary,"int"),op(Op.INDEX,this.coreLibrary,"num"),op(Op.INDEX,this.coreLibrary,"double"),op(Op.INDEX,this.coreLibrary,"String")));
        for(let cls of allClasses) {
            if (cls.library.loader != this) continue;
            let directSupertypes : core.DartSet<lib18.ClassBuilder<any,any>> = new core.DartSet<lib18.ClassBuilder<any,any>>();
            this.target.addDirectSupertype(cls,directSupertypes);
            for(let supertype of directSupertypes) {
                if (is(supertype, lib19.EnumBuilder<any,any>)) {
                    cls.addCompileTimeError(cls.charOffset,`'${supertype.name}' is an enum and can't be extended or ` + "implemented.");
                }else if (!cls.library.uri.isScheme('dart') && blackListedClasses.contains(supertype)) {
                    cls.addCompileTimeError(cls.charOffset,`'${supertype.name}' is restricted and can't be extended or ` + "implemented.");
                }
            }
            let mixedInType : lib20.TypeBuilder = cls.mixedInType;
            if (mixedInType != null) {
                let isClassBuilder : boolean = false;
                if (is(mixedInType, lib21.NamedTypeBuilder<any,any>)) {
                    let builder = mixedInType.builder;
                    if (is(builder, lib18.ClassBuilder<any,any>)) {
                        isClassBuilder = true;
                        for(let constructory of builder.constructors.local.values) {
                            if (constructory.isConstructor && !constructory.isSynthetic) {
                                cls.addCompileTimeError(cls.charOffset,`Can't use '${builder.fullNameForErrors}' as a mixin ` + "because it has constructors.");
                                builder.addCompileTimeError(constructory.charOffset,"This constructor prevents using " + `'${builder.fullNameForErrors}' as a mixin.`);
                            }
                        }
                    }
                }
                if (!isClassBuilder) {
                    cls.addCompileTimeError(cls.charOffset,`The type '${mixedInType.fullNameForErrors}' can't be mixed in.`);
                }
            }
        }
        this.ticker.logMs("Checked restricted supertypes");
    }
    buildProgram() : void {
        this.builders.forEach((uri : lib4.Uri,library : lib14.LibraryBuilder<any,any>) =>  {
            if (is(library, lib6.SourceLibraryBuilder<any,any>)) {
                this.libraries.add(library.build(this.coreLibrary));
            }
        });
        this.ticker.logMs("Built program");
    }
    computeHierarchy(program : any) : void {
        this.hierarchy = new bare.createInstance(any,null,program);
        this.ticker.logMs("Computed class hierarchy");
        this.coreTypes = new bare.createInstance(any,null,program);
        this.ticker.logMs("Computed core types");
    }
    checkOverrides(sourceClasses : core.DartList<lib22.SourceClassBuilder>) : void {
        /* TODO (AssertStatementImpl) : assert (hierarchy != null); */;
        for(let builder of sourceClasses) {
            builder.checkOverrides(this.hierarchy);
        }
        this.ticker.logMs("Checked overrides");
    }
    createTypeInferenceEngine() : void {
        this.typeInferenceEngine = new bare.createInstance(any,null,this.instrumentation,this.target.strongMode);
    }
    prepareInitializerInference() : void {
        this.typeInferenceEngine.prepareTopLevel(this.coreTypes,this.hierarchy);
        this.builders.forEach((uri : lib4.Uri,library : lib14.LibraryBuilder<any,any>) =>  {
            if (is(library, lib6.SourceLibraryBuilder<any,any>)) {
                library.prepareInitializerInference(library,null);
            }
        });
        this.ticker.logMs("Prepared initializer inference");
    }
    performInitializerInference() : void {
        this.typeInferenceEngine.finishTopLevel();
        this.ticker.logMs("Performed initializer inference");
    }
    getDependencies() : core.DartList<lib4.Uri> {
        return this.sourceBytes.keys.toList();
    }
}

export class properties {
}
