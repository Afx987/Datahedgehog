/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/refactoring/naming_conventions.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var validateClassName : (name : string) => any = (name : string) : any =>  {
    return _validateUpperCamelCase(name,"Class");
};
export var validateConstructorName : (name : string) => any = (name : string) : any =>  {
    if (name != null && new core.DartString(name).isEmpty) {
        return new bare.createInstance(any,null);
    }
    return _validateLowerCamelCase(name,"Constructor");
};
export var validateFieldName : (name : string) => any = (name : string) : any =>  {
    return _validateLowerCamelCase(name,"Field");
};
export var validateFunctionName : (name : string) => any = (name : string) : any =>  {
    return _validateLowerCamelCase(name,"Function");
};
export var validateFunctionTypeAliasName : (name : string) => any = (name : string) : any =>  {
    return _validateUpperCamelCase(name,"Function type alias");
};
export var validateImportPrefixName : (name : string) => any = (name : string) : any =>  {
    if (name != null && new core.DartString(name).isEmpty) {
        return new bare.createInstance(any,null);
    }
    return _validateLowerCamelCase(name,"Import prefix");
};
export var validateLabelName : (name : string) => any = (name : string) : any =>  {
    return _validateLowerCamelCase(name,"Label");
};
export var validateLibraryName : (name : string) => any = (name : string) : any =>  {
    if (name == null) {
        return new bare.createInstance(any,null,"Library name must not be null.");
    }
    if (isBlank(name)) {
        return new bare.createInstance(any,null,"Library name must not be blank.");
    }
    let identifiers : core.DartList<string> = new core.DartString(name).split('.');
    for(let identifier of identifiers) {
        let status : any = _validateIdentifier(identifier,"Library name identifier","a lowercase letter or underscore");
        if (!status.isOK) {
            return status;
        }
    }
    for(let identifier of identifiers) {
        for(let c of new core.DartString(identifier).codeUnits) {
            if (isUpperCase(c)) {
                return new bare.createInstance(any,null,"Library name should consist of lowercase identifier separated by dots.");
            }
        }
    }
    return new bare.createInstance(any,null);
};
export var validateMethodName : (name : string) => any = (name : string) : any =>  {
    return _validateLowerCamelCase(name,"Method");
};
export var validateParameterName : (name : string) => any = (name : string) : any =>  {
    return _validateLowerCamelCase(name,"Parameter");
};
export var validateVariableName : (name : string) => any = (name : string) : any =>  {
    return _validateLowerCamelCase(name,"Variable");
};
export var _validateIdentifier : (identifier : string,desc : string,beginDesc : string) => any = (identifier : string,desc : string,beginDesc : string) : any =>  {
    let trimmed : string = new core.DartString(identifier).trim();
    if (identifier != trimmed) {
        let message : string = `${desc} must not start or end with a blank.`;
        return new bare.createInstance(any,null,message);
    }
    let length : number = new core.DartString(identifier).length;
    if (length == 0) {
        let message : string = `${desc} must not be empty.`;
        return new bare.createInstance(any,null,message);
    }
    {
        let keyword : any = op(Op.INDEX,Keyword.keywords,identifier);
        if (keyword != null) {
            let message : string = `${desc} must not be a keyword.`;
            return new bare.createInstance(any,null,message);
        }
    }
    let currentChar : number = new core.DartString(identifier).codeUnitAt(0);
    if (!isLetter(currentChar) && currentChar != CHAR_UNDERSCORE && currentChar != CHAR_DOLLAR) {
        let message : string = `${desc} must begin with ${beginDesc}.`;
        return new bare.createInstance(any,null,message);
    }
    for(let i : number = 1; i < length; i++){
        currentChar = new core.DartString(identifier).codeUnitAt(i);
        if (!isLetterOrDigit(currentChar) && currentChar != CHAR_UNDERSCORE && currentChar != CHAR_DOLLAR) {
            let charStr : string = new core.DartString.fromCharCode(currentChar).valueOf();
            let message : string = `${desc} must not contain '${charStr}'.`;
            return new bare.createInstance(any,null,message);
        }
    }
    return new bare.createInstance(any,null);
};
export var _validateLowerCamelCase : (identifier : string,desc : string) => any = (identifier : string,desc : string) : any =>  {
    desc += ' name';
    if (identifier == null) {
        let message : string = `${desc} must not be null.`;
        return new bare.createInstance(any,null,message);
    }
    let status : any = _validateIdentifier(identifier,desc,"a lowercase letter or underscore");
    if (!status.isOK) {
        return status;
    }
    if (new core.DartString(identifier).codeUnitAt(0) == CHAR_UNDERSCORE) {
        return new bare.createInstance(any,null);
    }
    if (new core.DartString(identifier).codeUnitAt(0) == CHAR_DOLLAR) {
        return new bare.createInstance(any,null);
    }
    if (!isLowerCase(new core.DartString(identifier).codeUnitAt(0))) {
        let message : string = `${desc} should start with a lowercase letter.`;
        return new bare.createInstance(any,null,message);
    }
    return new bare.createInstance(any,null);
};
export var _validateUpperCamelCase : (identifier : string,desc : string) => any = (identifier : string,desc : string) : any =>  {
    desc += ' name';
    if (identifier == null) {
        let message : string = `${desc} must not be null.`;
        return new bare.createInstance(any,null,message);
    }
    let status : any = _validateIdentifier(identifier,desc,"an uppercase letter or underscore");
    if (!status.isOK) {
        return status;
    }
    if (new core.DartString(identifier).codeUnitAt(0) == CHAR_UNDERSCORE) {
        return new bare.createInstance(any,null);
    }
    if (new core.DartString(identifier).codeUnitAt(0) == CHAR_DOLLAR) {
        return new bare.createInstance(any,null);
    }
    if (!isUpperCase(new core.DartString(identifier).codeUnitAt(0))) {
        let message : string = `${desc} should start with an uppercase letter.`;
        return new bare.createInstance(any,null,message);
    }
    return new bare.createInstance(any,null);
};
export class properties {
}
