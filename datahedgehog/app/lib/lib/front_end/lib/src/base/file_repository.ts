/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/base/file_repository.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export namespace FileRepository {
    export type Constructors = 'FileRepository';
    export type Interface = Omit<FileRepository, Constructors>;
}
@DartClass
export class FileRepository {
    private static __$_pathRegexp;
    static get _pathRegexp() { 
        if (this.__$_pathRegexp===undefined) {
            this.__$_pathRegexp = new core.DartRegExp('^/[0-9]+\.dart$');
        }
        return this.__$_pathRegexp;
    }
    static set _pathRegexp(__$value : any)  { 
        this.__$_pathRegexp = __$value;
    }

    _uris;

    _uriToIndexMap;

    _contents;

    clearContents() : void {
        for(let i = 0; i < this._contents.length; i++){
            op(Op.INDEX_ASSIGN,this._contents,i,null);
        }
    }
    contentsForPath(path : string) : string {
        let contents = op(Op.INDEX,this._contents,this._indexForPath(path));
        /* TODO (AssertStatementImpl) : assert (contents != null); */;
        return contents;
    }
    getContentsForTesting() : core.DartMap<string,string> {
        let result = new core.DartMap.literal([
        ]);
        for(let i = 0; i < this._contents.length; i++){
            if (op(Op.INDEX,this._contents,i) != null) result.set(this._pathForIndex(i),op(Op.INDEX,this._contents,i));
        }
        return result;
    }
    pathForUri(uri : lib3.Uri,_namedArguments? : {allocate? : boolean}) : string {
        let {allocate} = Object.assign({
            "allocate" : false}, _namedArguments );
        return this._pathForIndex(this._indexForUri(uri,allocate));
    }
    store(uri : lib3.Uri,contents : string) : string {
        let index : number = this._indexForUri(uri,true);
        op(Op.INDEX_ASSIGN,this._contents,index,contents);
        return this._pathForIndex(index);
    }
    uriForPath(path : string) : lib3.Uri {
        return op(Op.INDEX,this._uris,this._indexForPath(path));
    }
    _indexForPath(path : string) : number {
        /* TODO (AssertStatementImpl) : assert (_pathRegexp.hasMatch(path)); */;
        return core.DartInt.parse(new core.DartString(path).substring(1,new core.DartString(path).length - 5));
    }
    _indexForUri(uri : lib3.Uri,allocate : boolean) : number {
        let index : number = op(Op.INDEX,this._uriToIndexMap,uri);
        /* TODO (AssertStatementImpl) : assert (allocate || index != null); */;
        if (index == null) {
            index = this._uris.length;
            this._uris.add(uri);
            op(Op.INDEX_ASSIGN,this._uriToIndexMap,uri,index);
            this._contents.add(null);
        }
        return index;
    }
    _pathForIndex(index : number) : string {
        return `/${index}.dart`;
    }
    constructor() {
    }
    @defaultConstructor
    FileRepository() {
        this._uris = new core.DartList.literal<lib3.Uri>();
        this._uriToIndexMap = new core.DartMap.literal([
        ]);
        this._contents = new core.DartList.literal<string>();
    }
}

export class properties {
}
