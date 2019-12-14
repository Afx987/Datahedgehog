/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/protocol_server.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/analysis_server/lib/src/services/search/search_engine";

export var doAnalysisError_listFromEngine : (analysisOptions : any,lineInfo : any,errors : core.DartList<any>) => core.DartList<any> = (analysisOptions : any,lineInfo : any,errors : core.DartList<any>) : core.DartList<any> =>  {
    let serverErrors : core.DartList<any> = new core.DartList.literal<any>();
    for(let error of errors) {
        let processor : any = ErrorProcessor.getProcessor(analysisOptions,error);
        if (processor != null) {
            let severity : any = processor.severity;
            if (severity != null) {
                serverErrors.add(newAnalysisError_fromEngine(lineInfo,error,severity));
            }
        }else {
            serverErrors.add(newAnalysisError_fromEngine(lineInfo,error));
        }
    }
    return serverErrors;
};
export var doSourceChange_addElementEdit : (change : any,element : any,edit : any) => void = (change : any,element : any,edit : any) : void =>  {
    let source : any = element.source;
    doSourceChange_addSourceEdit(change,source,edit);
};
export var doSourceChange_addSourceEdit : (change : any,source : any,edit : any,_namedArguments? : {isNewFile? : boolean}) => void = (change : any,source : any,edit : any,_namedArguments? : {isNewFile? : boolean}) : void =>  {
    let {isNewFile} = Object.assign({
        "isNewFile" : false}, _namedArguments );
    let file : string = source.fullName;
    change.addEdit(file,isNewFile ? -1 : 0,edit);
};
export var getReturnTypeString : (element : any) => string = (element : any) : string =>  {
    if (is(element, any)) {
        if (op(Op.EQUALS,element.kind,lib3.ElementKind.SETTER)) {
            return null;
        }else {
            return ((_31_)=>(!!_31_)?_31_.toString():null)(element.returnType);
        }
    }else if (is(element, any)) {
        let type : any = element.type;
        return type != null ? type.displayName : 'dynamic';
    }else if (is(element, any)) {
        return element.returnType.toString();
    }else {
        return null;
    }
};
export var newAnalysisError_fromEngine : (lineInfo : any,error : any,errorSeverity? : any) => any = (lineInfo : any,error : any,errorSeverity? : any) : any =>  {
    let errorCode : any = error.errorCode;
    let location : any;
    {
        let file : string = error.source.fullName;
        let offset : number = error.offset;
        let length : number = error.length;
        let startLine : number = -1;
        let startColumn : number = -1;
        if (lineInfo != null) {
            let lineLocation : any = lineInfo.getLocation(offset);
            if (lineLocation != null) {
                startLine = lineLocation.lineNumber;
                startColumn = lineLocation.columnNumber;
            }
        }
        location = new bare.createInstance(any,null,file,offset,length,startLine,startColumn);
    }
    errorSeverity = ( errorSeverity ) || ( errorCode.errorSeverity );
    let severity = new bare.createInstance(any,null,errorSeverity.name);
    let type = new bare.createInstance(any,null,errorCode.type.name);
    let message : string = error.message;
    let code : string = errorCode.name.toLowerCase();
    let correction : string = error.correction;
    let fix : boolean = hasFix(error.errorCode);
    return new bare.createInstance(any,null,severity,type,location,message,code,{
        correction : correction,hasFix : fix});
};
export var newLocation_fromElement : (element : any) => any = (element : any) : any =>  {
    if (op(Op.EQUALS,element,null) || op(Op.EQUALS,element.source,null)) {
        return null;
    }
    let offset : number = element.nameOffset;
    let length : number = element.nameLength;
    if (is(element, any) || (is(element, any) && offset < 0)) {
        offset = 0;
        length = 0;
    }
    let unitElement : any = _getUnitElement(element);
    let range : any = new bare.createInstance(any,null,offset,length);
    return _locationForArgs(unitElement,range);
};
export var newLocation_fromMatch : (match : any) => any = (match : any) : any =>  {
    let unitElement : any = _getUnitElement(match.element);
    return _locationForArgs(unitElement,match.sourceRange);
};
export var newLocation_fromNode : (node : any) => any = (node : any) : any =>  {
    let unit : any = node.getAncestor((node : any) =>  {
        return is(node, any);
    });
    let unitElement : any = unit.element;
    let range : any = new bare.createInstance(any,null,node.offset,node.length);
    return _locationForArgs(unitElement,range);
};
export var newLocation_fromUnit : (unit : any,range : any) => any = (unit : any,range : any) : any =>  {
    return _locationForArgs(unit.element,range);
};
export var newOverriddenMember_fromEngine : (member : any) => any = (member : any) : any =>  {
    let element : any = convertElement(member);
    let className : string = member.enclosingElement.displayName;
    return new bare.createInstance(any,null,element,className);
};
export var newSearchResult_fromMatch : (match : any) => any = (match : any) : any =>  {
    let kind : any = newSearchResultKind_fromEngine(match.kind);
    let location : any = newLocation_fromMatch(match);
    let path : core.DartList<any> = _computePath(match.element);
    return new bare.createInstance(any,null,location,kind,!match.isResolved,path);
};
export var newSearchResultKind_fromEngine : (kind : any) => any = (kind : any) : any =>  {
    if (op(Op.EQUALS,kind,lib3.MatchKind.DECLARATION)) {
        return SearchResultKind.DECLARATION;
    }
    if (op(Op.EQUALS,kind,lib3.MatchKind.READ)) {
        return SearchResultKind.READ;
    }
    if (op(Op.EQUALS,kind,lib3.MatchKind.READ_WRITE)) {
        return SearchResultKind.READ_WRITE;
    }
    if (op(Op.EQUALS,kind,lib3.MatchKind.WRITE)) {
        return SearchResultKind.WRITE;
    }
    if (op(Op.EQUALS,kind,lib3.MatchKind.INVOCATION)) {
        return SearchResultKind.INVOCATION;
    }
    if (op(Op.EQUALS,kind,lib3.MatchKind.REFERENCE)) {
        return SearchResultKind.REFERENCE;
    }
    return SearchResultKind.UNKNOWN;
};
export var newSourceEdit_range : (range : any,replacement : string,_namedArguments? : {id? : string}) => any = (range : any,replacement : string,_namedArguments? : {id? : string}) : any =>  {
    let {id} = Object.assign({
    }, _namedArguments );
    return new bare.createInstance(any,null,range.offset,range.length,replacement,{
        id : id});
};
export var _computePath : (element : any) => core.DartList<any> = (element : any) : core.DartList<any> =>  {
    let path : core.DartList<any> = new core.DartList.literal<any>();
    while (element != null){
        path.add(convertElement(element));
        if (is(element, any)) {
            let library : any = element.enclosingElement;
            element = library.definingCompilationUnit;
        }else {
            element = element.enclosingElement;
        }
    }
    return path;
};
export var _getUnitElement : (element : any) => any = (element : any) : any =>  {
    if (is(element, any)) {
        return element;
    }
    if (is(((t)=>(!!t)?t.enclosingElement:null)(element), any)) {
        element = element.enclosingElement;
    }
    if (is(element, any)) {
        return element.definingCompilationUnit;
    }
    for(; element != null; element = element.enclosingElement){
        if (is(element, any)) {
            return element;
        }
    }
    return null;
};
export var _locationForArgs : (unitElement : any,range : any) => any = (unitElement : any,range : any) : any =>  {
    let startLine : number = 0;
    let startColumn : number = 0;
    try {
        let lineInfo : any = unitElement.lineInfo;
        if (lineInfo != null) {
            let offsetLocation : any = lineInfo.getLocation(range.offset);
            startLine = offsetLocation.lineNumber;
            startColumn = offsetLocation.columnNumber;
        }
    } catch (__error__) {

        if (is(__error__,any)){
        }
    }
    return new bare.createInstance(any,null,unitElement.source.fullName,range.offset,range.length,startLine,startColumn);
};
export class properties {
}
