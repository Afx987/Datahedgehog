/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/summary_file_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace SummaryBuilder {
    export type Constructors = 'SummaryBuilder';
    export type Interface = Omit<SummaryBuilder, Constructors>;
}
@DartClass
export class SummaryBuilder {
    librarySources : core.DartIterable<any>;

    context : any;

    strong : boolean;

    constructor(librarySources : core.DartIterable<any>,context : any,strong : boolean) {
    }
    @defaultConstructor
    SummaryBuilder(librarySources : core.DartIterable<any>,context : any,strong : boolean) {
        this.librarySources = librarySources;
        this.context = context;
        this.strong = strong;
    }
    @namedFactory
    static $forSdk(sdkPath : string,strong : boolean) : SummaryBuilder {
        let resourceProvider : any = PhysicalResourceProvider.INSTANCE;
        let sdk : any = new bare.createInstance(any,null,resourceProvider,resourceProvider.getFolder(sdkPath),strong);
        sdk.useSummary = false;
        sdk.analysisOptions = ((_) : any =>  {
            {
                _.strongMode = strong;
                return _;
            }
        })(new bare.createInstance(any,null));
        let uriSet : core.DartSet<string> = sdk.sdkLibraries.map((library : any) =>  {
            return library.shortName;
        }).toSet();
        if (!strong) {
            uriSet.add('dart:html/nativewrappers.dart');
        }
        uriSet.add('dart:html_common/html_common_dart2js.dart');
        let librarySources : core.DartSet<any> = new core.DartHashSet<any>();
        for(let uri of uriSet) {
            librarySources.add(sdk.mapDartUri(uri));
        }
        return new SummaryBuilder(librarySources,sdk.context,strong);
    }
    static forSdk : new(sdkPath : string,strong : boolean) => SummaryBuilder;

    build() : core.DartList<number> {
        return new _Builder(this.context,this.librarySources,this.strong).build();
    }
}

export namespace _Builder {
    export type Constructors = '_Builder';
    export type Interface = Omit<_Builder, Constructors>;
}
@DartClass
export class _Builder {
    context : any;

    librarySources : core.DartIterable<any>;

    strong : boolean;

    libraryUris : core.DartSet<string>;

    unlinkedMap : core.DartMap<string,any>;

    bundleAssembler : any;

    constructor(context : any,librarySources : core.DartIterable<any>,strong : boolean) {
    }
    @defaultConstructor
    _Builder(context : any,librarySources : core.DartIterable<any>,strong : boolean) {
        this.libraryUris = new core.DartSet<string>();
        this.unlinkedMap = new core.DartMap.literal([
        ]);
        this.bundleAssembler = new bare.createInstance(any,null);
        this.context = context;
        this.librarySources = librarySources;
        this.strong = strong;
    }
    build() : core.DartList<number> {
        this.librarySources.forEach(this._addLibrary.bind(this));
        let map : core.DartMap<string,any> = link(this.libraryUris,(uri : any) =>  {
            throw new core.StateError(`Unexpected call to GetDependencyCallback(${uri}).`);
        },(uri : any) =>  {
            let unlinked : any = this.unlinkedMap.get(uri);
            if (op(Op.EQUALS,unlinked,null)) {
                throw new core.StateError(`Unable to find unresolved unit ${uri}.`);
            }
            return unlinked;
        },(name : string) =>  {
            throw new core.StateError(`Unexpected call to GetDeclaredVariable(${name}).`);
        },this.strong);
        map.forEach(this.bundleAssembler.addLinkedLibrary);
        return this.bundleAssembler.assemble().toBuffer();
    }
    _addLibrary(source : any) : void {
        let uriStr : string = source.uri.toString();
        if (!this.libraryUris.add(uriStr)) {
            return;
        }
        let unit : any = this._addUnlinked(source);
        for(let directive of unit.directives) {
            if (is(directive, any)) {
                let libUri : string = directive.uri.stringValue;
                let libSource : any = this.context.sourceFactory.resolveUri(source,libUri);
                this._addLibrary(libSource);
            }else if (is(directive, any)) {
                let partUri : string = directive.uri.stringValue;
                let partSource : any = this.context.sourceFactory.resolveUri(source,partUri);
                this._addUnlinked(partSource);
            }
        }
    }
    _addUnlinked(source : any) : any {
        let uriStr : string = source.uri.toString();
        let unit : any = this._parse(source);
        let unlinked : any = serializeAstUnlinked(unit);
        this.unlinkedMap.set(uriStr,unlinked);
        this.bundleAssembler.addUnlinkedUnit(source,unlinked);
        return unit;
    }
    _parse(source : any) : any {
        let errorListener : any = AnalysisErrorListener.NULL_LISTENER;
        let code : string = source.contents.data;
        let reader : any = new bare.createInstance(any,null,code);
        let scanner : any = new bare.createInstance(any,null,source,reader,errorListener);
        scanner.scanGenericMethodComments = this.strong;
        let token : any = scanner.tokenize();
        let lineInfo : any = new bare.createInstance(any,null,scanner.lineStarts);
        let parser : any = new bare.createInstance(any,null,source,errorListener);
        parser.parseGenericMethodComments = this.strong;
        let unit : any = parser.parseCompilationUnit(token);
        unit.lineInfo = lineInfo;
        return unit;
    }
}

export class properties {
}
