/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/protocol/protocol_internal.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as convert from "@dart2ts/dart/convert";

export var addAllEditsForSource : (sourceFileEdit : any,edits : core.DartIterable<any>) => void = (sourceFileEdit : any,edits : core.DartIterable<any>) : void =>  {
    edits.forEach(sourceFileEdit.add);
};
export var addEditForSource : (sourceFileEdit : any,sourceEdit : any) => void = (sourceFileEdit : any,sourceEdit : any) : void =>  {
    let edits : core.DartList<any> = sourceFileEdit.edits;
    let index : number = 0;
    while (index < edits.length && op(Op.GT,edits[index].offset,sourceEdit.offset)){
        index++;
    }
    edits.insert(index,sourceEdit);
};
export var addEditToSourceChange : (change : any,file : string,fileStamp : number,edit : any) => void = (change : any,file : string,fileStamp : number,edit : any) : void =>  {
    let fileEdit : any = change.getFileEdit(file);
    if (op(Op.EQUALS,fileEdit,null)) {
        fileEdit = new bare.createInstance(any,null,file,fileStamp);
        change.addFileEdit(fileEdit);
    }
    fileEdit.add(edit);
};
export var applyEdit : (code : string,edit : any) => string = (code : string,edit : any) : string =>  {
    if (op(Op.LT,edit.length,0)) {
        throw new core.RangeError('length is negative');
    }
    return new core.DartString(code).replaceRange(edit.offset,edit.end,edit.replacement);
};
export var applySequenceOfEdits : (code : string,edits : core.DartIterable<any>) => string = (code : string,edits : core.DartIterable<any>) : string =>  {
    edits.forEach((edit : any) =>  {
        code = edit.apply(code);
    });
    return code;
};
export var getChangeFileEdit : (change : any,file : string) => any = (change : any,file : string) : any =>  {
    for(let fileEdit of change.edits) {
        if (op(Op.EQUALS,fileEdit.file,file)) {
            return fileEdit;
        }
    }
    return null;
};
export var listEqual : (listA : core.DartList<any>,listB : core.DartList<any>,itemEqual : (a : any,b : any) => boolean) => boolean = (listA : core.DartList<any>,listB : core.DartList<any>,itemEqual : (a : any,b : any) => boolean) : boolean =>  {
    if (listA == null) {
        return listB == null;
    }
    if (listB == null) {
        return false;
    }
    if (listA.length != listB.length) {
        return false;
    }
    for(let i : number = 0; i < listA.length; i++){
        if (!itemEqual(listA[i],listB[i])) {
            return false;
        }
    }
    return true;
};
export var mapEqual : (mapA : core.DartMap<any,any>,mapB : core.DartMap<any,any>,valueEqual : (a : any,b : any) => boolean) => boolean = (mapA : core.DartMap<any,any>,mapB : core.DartMap<any,any>,valueEqual : (a : any,b : any) => boolean) : boolean =>  {
    if (mapA == null) {
        return mapB == null;
    }
    if (mapB == null) {
        return false;
    }
    if (mapA.length != mapB.length) {
        return false;
    }
    for(let key of mapA.keys) {
        if (!mapB.containsKey(key)) {
            return false;
        }
        if (!valueEqual(mapA.get(key),mapB.get(key))) {
            return false;
        }
    }
    return true;
};
export var mapMap : (map : core.DartMap<any,any>,_namedArguments? : {keyCallback? : (key : any) => any,valueCallback? : (value : any) => any}) => core.DartMap<any,any> = (map : core.DartMap<any,any>,_namedArguments? : {keyCallback? : (key : any) => any,valueCallback? : (value : any) => any}) : core.DartMap<any,any> =>  {
    let {keyCallback,valueCallback} = Object.assign({
    }, _namedArguments );
    let result : core.DartMap<any,any> = new core.DartHashMap<any,any>();
    map.forEach((key : any,value : any) =>  {
        let resultKey : core.DartObject;
        let resultValue : core.DartObject;
        if (keyCallback != null) {
            resultKey = keyCallback(key);
        }else {
            resultKey = key as core.DartObject;
        }
        if (valueCallback != null) {
            resultValue = valueCallback(value);
        }else {
            resultValue = value as core.DartObject;
        }
        op(Op.INDEX_ASSIGN,result,resultKey,resultValue);
    });
    return result;
};
export var maxRefactoringProblemSeverity : (a : any,b : any) => any = (a : any,b : any) : any =>  {
    if (op(Op.EQUALS,b,null)) {
        return a;
    }
    if (op(Op.EQUALS,a,null)) {
        return b;
    }else if (op(Op.EQUALS,a,RefactoringProblemSeverity.INFO)) {
        return b;
    }else if (op(Op.EQUALS,a,RefactoringProblemSeverity.WARNING)) {
        if (op(Op.EQUALS,b,RefactoringProblemSeverity.ERROR) || op(Op.EQUALS,b,RefactoringProblemSeverity.FATAL)) {
            return b;
        }
    }else if (op(Op.EQUALS,a,RefactoringProblemSeverity.ERROR)) {
        if (op(Op.EQUALS,b,RefactoringProblemSeverity.FATAL)) {
            return b;
        }
    }
    return a;
};
export var refactoringFeedbackFromJson : (jsonDecoder : any,jsonPath : string,json : core.DartObject,feedbackJson : core.DartMap<any,any>) => any = (jsonDecoder : any,jsonPath : string,json : core.DartObject,feedbackJson : core.DartMap<any,any>) : any =>  {
    let kind : any = jsonDecoder.refactoringKind;
    if (op(Op.EQUALS,kind,RefactoringKind.EXTRACT_LOCAL_VARIABLE)) {
        return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
    }
    if (op(Op.EQUALS,kind,RefactoringKind.EXTRACT_METHOD)) {
        return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
    }
    if (op(Op.EQUALS,kind,RefactoringKind.INLINE_LOCAL_VARIABLE)) {
        return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
    }
    if (op(Op.EQUALS,kind,RefactoringKind.INLINE_METHOD)) {
        return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
    }
    if (op(Op.EQUALS,kind,RefactoringKind.RENAME)) {
        return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
    }
    return null;
};
export var refactoringOptionsFromJson : (jsonDecoder : any,jsonPath : string,json : core.DartObject,kind : any) => any = (jsonDecoder : any,jsonPath : string,json : core.DartObject,kind : any) : any =>  {
    if (op(Op.EQUALS,kind,RefactoringKind.EXTRACT_LOCAL_VARIABLE)) {
        return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
    }
    if (op(Op.EQUALS,kind,RefactoringKind.EXTRACT_METHOD)) {
        return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
    }
    if (op(Op.EQUALS,kind,RefactoringKind.INLINE_METHOD)) {
        return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
    }
    if (op(Op.EQUALS,kind,RefactoringKind.MOVE_FILE)) {
        return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
    }
    if (op(Op.EQUALS,kind,RefactoringKind.RENAME)) {
        return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
    }
    return null;
};
export namespace HasToJson {
    export type Constructors = 'HasToJson';
    export type Interface = Omit<HasToJson, Constructors>;
}
@DartClass
export class HasToJson {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    HasToJson() {
    }
}

export namespace RequestDecoder {
    export type Constructors = 'RequestDecoder';
    export type Interface = Omit<RequestDecoder, Constructors>;
}
@DartClass
export class RequestDecoder extends any {
    _request : any;

    constructor(_request : any) {
    }
    @defaultConstructor
    RequestDecoder(_request : any) {
        this._request = _request;
    }
    get refactoringKind() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mismatch(jsonPath : string,expected : string,actual? : core.DartObject) : any {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write('Expected to be ');
        buffer.write(expected);
        if (actual != null) {
            buffer.write('; found "');
            buffer.write(convert.properties.JSON.encode(actual));
            buffer.write('"');
        }
        return new bare.createInstance(any,null,new bare.createInstance(any,null,this._request,jsonPath,buffer.toString()));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    missingKey(jsonPath : string,key : string) : any {
        return new bare.createInstance(any,null,new bare.createInstance(any,null,this._request,jsonPath,`Expected to contain key ${convert.properties.JSON.encode(key)}`));
    }
}

export namespace RequestParams {
    export type Constructors = 'RequestParams';
    export type Interface = Omit<RequestParams, Constructors>;
}
@DartClass
@Implements(HasToJson)
export class RequestParams implements HasToJson.Interface {
    @Abstract
    toRequest(id : string) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    RequestParams() {
    }
}

export namespace ResponseDecoder {
    export type Constructors = 'ResponseDecoder';
    export type Interface = Omit<ResponseDecoder, Constructors>;
}
@DartClass
export class ResponseDecoder extends any {
    refactoringKind : any;

    constructor(refactoringKind : any) {
    }
    @defaultConstructor
    ResponseDecoder(refactoringKind : any) {
        this.refactoringKind = refactoringKind;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mismatch(jsonPath : string,expected : string,actual? : core.DartObject) : any {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write('Expected ');
        buffer.write(expected);
        if (actual != null) {
            buffer.write(' found "');
            buffer.write(convert.properties.JSON.encode(actual));
            buffer.write('"');
        }
        buffer.write(' at ');
        buffer.write(jsonPath);
        return new core.Exception(buffer.toString());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    missingKey(jsonPath : string,key : string) : any {
        return new core.Exception(`Missing key ${key} at ${jsonPath}`);
    }
}

export namespace ResponseResult {
    export type Constructors = 'ResponseResult';
    export type Interface = Omit<ResponseResult, Constructors>;
}
@DartClass
@Implements(HasToJson)
export class ResponseResult implements HasToJson.Interface {
    @Abstract
    toResponse(id : string) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ResponseResult() {
    }
}

export class properties {
    private static __$REQUEST_ID_REFACTORING_KINDS : core.DartMap<string,any>;
    static get REQUEST_ID_REFACTORING_KINDS() : core.DartMap<string,any> { 
        if (this.__$REQUEST_ID_REFACTORING_KINDS===undefined) {
            this.__$REQUEST_ID_REFACTORING_KINDS = new core.DartHashMap<string,any>();
        }
        return this.__$REQUEST_ID_REFACTORING_KINDS;
    }
    static set REQUEST_ID_REFACTORING_KINDS(__$value : core.DartMap<string,any>)  { 
        this.__$REQUEST_ID_REFACTORING_KINDS = __$value;
    }

}
