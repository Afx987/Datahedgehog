/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/utilities.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/analyzer_plugin/lib/protocol/protocol_common";

export var addDefaultArgDetails : (suggestion : any,element : any,requiredParams : core.DartIterable<any>,namedParams : core.DartIterable<any>,options : any) => void = (suggestion : any,element : any,requiredParams : core.DartIterable<any>,namedParams : core.DartIterable<any>,options : any) : void =>  {
    let sb : core.DartStringBuffer = new core.DartStringBuffer();
    let ranges : core.DartList<number> = new core.DartList.literal<number>();
    let offset : number;
    for(let param of requiredParams) {
        if (sb.isNotEmpty) {
            sb.write(', ');
        }
        offset = sb.length;
        let name : string = param.name;
        sb.write(name);
        ranges.addAll(new core.DartList.literal(offset,new core.DartString(name).length));
    }
    for(let param of namedParams) {
        if (param.isRequired) {
            if (sb.isNotEmpty) {
                sb.write(', ');
            }
            let name : string = param.name;
            sb.write(`${name}: `);
            offset = sb.length;
            let defaultValue : string = _getDefaultValue(param);
            sb.write(defaultValue);
            ranges.addAll(new core.DartList.literal(offset,new core.DartString(defaultValue).length));
        }
    }
    if (op(Op.EQUALS,((t)=>(!!t)?t.generateFlutterWidgetChildrenBoilerPlate:null)(options),true)) {
        if (is(element, any)) {
            if (isFlutterWidget(element.enclosingElement)) {
                for(let param of element.parameters) {
                    if (op(Op.EQUALS,param.name,'children')) {
                        let defaultValue : string = (getDefaultStringParameterValue(param) || '');
                        if (sb.isNotEmpty) {
                            sb.write(', ');
                        }
                        sb.write('children: ');
                        offset = sb.length;
                        sb.write(defaultValue);
                        ranges.addAll(new core.DartList.literal(offset,new core.DartString(defaultValue).length));
                    }
                }
            }
        }
    }
    suggestion.defaultArgumentListString = sb.isNotEmpty ? sb.toString() : null;
    suggestion.defaultArgumentListTextRanges = ranges.isNotEmpty ? ranges : null;
};
export var createLocalElement : (source : any,kind : any,id : any,_namedArguments? : {parameters? : string,returnType? : any,isAbstract? : boolean,isDeprecated? : boolean}) => any = (source : any,kind : any,id : any,_namedArguments? : {parameters? : string,returnType? : any,isAbstract? : boolean,isDeprecated? : boolean}) : any =>  {
    let {parameters,returnType,isAbstract,isDeprecated} = Object.assign({
        "isAbstract" : false,
        "isDeprecated" : false}, _namedArguments );
    let name : string;
    let location : any;
    if (id != null) {
        name = id.name;
        location = new bare.createInstance(any,null,source.fullName,id.offset,id.length,0,0);
    }else {
        name = '';
        location = new bare.createInstance(any,null,source.fullName,-1,0,1,0);
    }
    let flags : number = lib3.Element.makeFlags({
        isAbstract : isAbstract,isDeprecated : isDeprecated,isPrivate : Identifier.isPrivateName(name)});
    return new bare.createInstance(any,null,kind,name,flags,{
        location : location,parameters : parameters,returnType : nameForType(returnType)});
};
export var createLocalFieldSuggestion : (source : any,fieldDecl : any,varDecl : any) => any = (source : any,fieldDecl : any,varDecl : any) : any =>  {
    let deprecated : boolean = isDeprecated(fieldDecl) || isDeprecated(varDecl);
    let type : any = fieldDecl.fields.type;
    return createLocalSuggestion(varDecl.name,deprecated,DART_RELEVANCE_LOCAL_FIELD,type,{
        classDecl : fieldDecl.parent,element : createLocalElement(source,lib3.ElementKind.FIELD,varDecl.name,{
            returnType : type,isDeprecated : deprecated})});
};
export var createLocalSuggestion : (id : any,isDeprecated : boolean,defaultRelevance : number,returnType : any,_namedArguments? : {classDecl? : any,kind? : any,element? : any}) => any = (id : any,isDeprecated : boolean,defaultRelevance : number,returnType : any,_namedArguments? : {classDecl? : any,kind? : any,element? : any}) : any =>  {
    let {classDecl,kind,element} = Object.assign({
        "kind" : CompletionSuggestionKind.INVOCATION}, _namedArguments );
    if (op(Op.EQUALS,id,null)) {
        return null;
    }
    let completion : string = id.name;
    if (completion == null || new core.DartString(completion).length <= 0 || completion == '_') {
        return null;
    }
    let suggestion : any = new bare.createInstance(any,null,kind,isDeprecated ? DART_RELEVANCE_LOW : defaultRelevance,completion,new core.DartString(completion).length,0,isDeprecated,false,{
        returnType : nameForType(returnType),element : element});
    if (classDecl != null) {
        let classId : any = classDecl.name;
        if (classId != null) {
            let className : string = classId.name;
            if (className != null && new core.DartString(className).length > 0) {
                suggestion.declaringType = className;
            }
        }
    }
    return suggestion;
};
export var getDefaultStringParameterValue : (param : any) => string = (param : any) : string =>  {
    if (param != null) {
        let type : any = param.type;
        if (is(type, any) && isDartList(type)) {
            let typeArguments : core.DartList<any> = type.typeArguments;
            if (typeArguments.length == 1) {
                let typeArg : any = typeArguments.first;
                let typeInfo : string = !typeArg.isDynamic ? `<${typeArg.name}>` : '';
                return `${typeInfo}[]`;
            }
        }
        if (is(type, any)) {
            let params : string = type.parameters.map((p : any) =>  {
                return `${getTypeString(p.type)}${p.name}`;
            }).join(', ');
            return `(${params}) {}`;
        }
    }
    return null;
};
export var getTypeString : (type : any) => string = (type : any) : string =>  {
    return type.isDynamic ? '' : `${type.name} `;
};
export var isDartList : (type : any) => boolean = (type : any) : boolean =>  {
    let element : any = type.element;
    if (element != null) {
        return op(Op.EQUALS,element.name,"List") && element.library.isDartCore;
    }
    return false;
};
export var isDeprecated : (node : any) => boolean = (node : any) : boolean =>  {
    if (node != null) {
        let metadata : any = node.metadata;
        if (metadata != null) {
            return metadata.any((a : any) =>  {
                return is(a.name, any) && op(Op.EQUALS,a.name.name,'deprecated');
            });
        }
    }
    return false;
};
export var nameForType : (type : any) => string = (type : any) : string =>  {
    if (op(Op.EQUALS,type,properties.NO_RETURN_TYPE)) {
        return null;
    }
    if (op(Op.EQUALS,type,null)) {
        return properties.DYNAMIC;
    }
    if (is(type, any)) {
        let id : any = type.name;
        if (op(Op.EQUALS,id,null)) {
            return properties.DYNAMIC;
        }
        let name : string = id.name;
        if (name == null || new core.DartString(name).length <= 0) {
            return properties.DYNAMIC;
        }
        let typeArgs : any = type.typeArguments;
        if (typeArgs != null) {
        }
        return name;
    }else if (is(type, any)) {
    }
    return properties.DYNAMIC;
};
export var _getDefaultValue : (param : any) => string = (param : any) : string =>  {
    return 'null';
};
export class properties {
    private static __$DYNAMIC;
    static get DYNAMIC() { 
        if (this.__$DYNAMIC===undefined) {
            this.__$DYNAMIC = 'dynamic';
        }
        return this.__$DYNAMIC;
    }
    static set DYNAMIC(__$value : any)  { 
        this.__$DYNAMIC = __$value;
    }

    private static __$NO_RETURN_TYPE : any;
    static get NO_RETURN_TYPE() : any { 
        if (this.__$NO_RETURN_TYPE===undefined) {
            this.__$NO_RETURN_TYPE = astFactory.typeName(astFactory.simpleIdentifier(new bare.createInstance(any,null,TokenType.IDENTIFIER,'',0)),null);
        }
        return this.__$NO_RETURN_TYPE;
    }
    static set NO_RETURN_TYPE(__$value : any)  { 
        this.__$NO_RETURN_TYPE = __$value;
    }

}
