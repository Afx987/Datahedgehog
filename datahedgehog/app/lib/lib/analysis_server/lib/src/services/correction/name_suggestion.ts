/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/name_suggestion.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var getCamelWordCombinations : (name : string) => core.DartList<string> = (name : string) : core.DartList<string> =>  {
    let result : core.DartList<string> = new core.DartList.literal();
    let parts : core.DartList<string> = getCamelWords(name);
    for(let i : number = 0; i < parts.length; i++){
        let s1 = new core.DartString(parts[i]).toLowerCase();
        let s2 = parts.skip(i + 1).join();
        let suggestion : string = `${s1}${s2}`;
        result.add(suggestion);
    }
    return result;
};
export var getVariableNameSuggestionsForExpression : (expectedType : any,assignedExpression : any,excluded : core.DartSet<string>) => core.DartList<string> = (expectedType : any,assignedExpression : any,excluded : core.DartSet<string>) : core.DartList<string> =>  {
    let res : core.DartSet<string> = new core.DartSet<any>();
    if (assignedExpression != null) {
        let nameFromExpression : string = _getBaseNameFromExpression(assignedExpression);
        if (nameFromExpression != null) {
            nameFromExpression = removeStart(nameFromExpression,'_');
            _addAll(excluded,res,getCamelWordCombinations(nameFromExpression));
        }
        let nameFromParent : string = _getBaseNameFromLocationInParent(assignedExpression);
        if (nameFromParent != null) {
            _addAll(excluded,res,getCamelWordCombinations(nameFromParent));
        }
    }
    if (expectedType != null && !expectedType.isDynamic) {
        let typeName : string = expectedType.name;
        if ('int' == typeName) {
            _addSingleCharacterName(excluded,res,105);
        }else if ('double' == typeName) {
            _addSingleCharacterName(excluded,res,100);
        }else if ('String' == typeName) {
            _addSingleCharacterName(excluded,res,115);
        }else {
            _addAll(excluded,res,getCamelWordCombinations(typeName));
        }
        res.remove(typeName);
    }
    return new core.DartList.from(res);
};
export var getVariableNameSuggestionsForText : (text : string,excluded : core.DartSet<string>) => core.DartList<string> = (text : string,excluded : core.DartSet<string>) : core.DartList<string> =>  {
    {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        for(let i : number = 0; i < new core.DartString(text).length; i++){
            let c : number = new core.DartString(text).codeUnitAt(i);
            if (isLetter(c) || isWhitespace(c)) {
                sb.writeCharCode(c);
            }
        }
        text = sb.toString();
    }
    {
        let words : core.DartList<string> = new core.DartString(text).split(' ');
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        for(let i : number = 0; i < words.length; i++){
            let word : string = words[i];
            if (i > 0) {
                word = capitalize(word);
            }
            sb.write(word);
        }
        text = sb.toString();
    }
    let res : core.DartSet<string> = new core.DartSet<any>();
    _addAll(excluded,res,getCamelWordCombinations(text));
    return new core.DartList.from(res);
};
export var _addAll : (excluded : core.DartSet<string>,result : core.DartSet<string>,toAdd : core.DartIterable<string>) => void = (excluded : core.DartSet<string>,result : core.DartSet<string>,toAdd : core.DartIterable<string>) : void =>  {
    for(let item of toAdd) {
        for(let suffix : number = 1; ; suffix++){
            let name : string = item;
            if (suffix > 1) {
                name += new core.DartInt(suffix).toString();
            }
            if (!excluded.contains(name)) {
                result.add(name);
                break;
            }
        }
    }
};
export var _addSingleCharacterName : (excluded : core.DartSet<string>,result : core.DartSet<string>,c : number) => void = (excluded : core.DartSet<string>,result : core.DartSet<string>,c : number) : void =>  {
    while (c < 122){
        let name : string = new core.DartString.fromCharCode(c).valueOf();
        if (!excluded.contains(name)) {
            result.add(name);
            break;
        }
        c = c + 1;
    }
};
export var _getBaseNameFromExpression : (expression : any) => string = (expression : any) : string =>  {
    let name : string = null;
    if (is(expression, any)) {
        let asExpression : any = expression as any;
        expression = asExpression.expression;
    }
    if (is(expression, any)) {
        let node : any = expression;
        return node.name;
    }else if (is(expression, any)) {
        let node : any = expression;
        return node.identifier.name;
    }else if (is(expression, any)) {
        let node : any = expression;
        return node.propertyName.name;
    }else if (is(expression, any)) {
        name = expression.methodName.name;
    }else if (is(expression, any)) {
        let creation : any = expression;
        let constructorName : any = creation.constructorName;
        let typeName : any = constructorName.type;
        if (typeName != null) {
            let typeNameIdentifier : any = typeName.name;
            if (is(typeNameIdentifier, any)) {
                return typeNameIdentifier.name;
            }
            if (is(typeNameIdentifier, any)) {
                let prefixed : any = typeNameIdentifier;
                if (is(prefixed.prefix.staticElement, any)) {
                    return prefixed.identifier.name;
                }
                return prefixed.prefix.name;
            }
        }
    }
    if (name != null) {
        for(let i : number = 0; i < properties._KNOWN_METHOD_NAME_PREFIXES.length; i++){
            let curr : string = properties._KNOWN_METHOD_NAME_PREFIXES[i];
            if (new core.DartString(name).startsWith(curr)) {
                if (name == curr) {
                    return null;
                }else if (isUpperCase(new core.DartString(name).codeUnitAt(new core.DartString(curr).length))) {
                    return new core.DartString(name).substring(new core.DartString(curr).length);
                }
            }
        }
    }
    return name;
};
export var _getBaseNameFromLocationInParent : (expression : any) => string = (expression : any) : string =>  {
    if (is(expression.parent, any)) {
        let namedExpression : any = expression.parent as any;
        if (op(Op.EQUALS,namedExpression.expression,expression)) {
            return namedExpression.name.label.name;
        }
    }
    {
        let parameter : any = expression.propagatedParameterElement;
        if (op(Op.EQUALS,parameter,null)) {
            parameter = expression.staticParameterElement;
        }
        if (parameter != null) {
            return parameter.displayName;
        }
    }
    return null;
};
export class properties {
    private static __$_KNOWN_METHOD_NAME_PREFIXES : core.DartList<string>;
    static get _KNOWN_METHOD_NAME_PREFIXES() : core.DartList<string> { 
        if (this.__$_KNOWN_METHOD_NAME_PREFIXES===undefined) {
            this.__$_KNOWN_METHOD_NAME_PREFIXES = new core.DartList.literal('get','is','to');
        }
        return this.__$_KNOWN_METHOD_NAME_PREFIXES;
    }
    static set _KNOWN_METHOD_NAME_PREFIXES(__$value : core.DartList<string>)  { 
        this.__$_KNOWN_METHOD_NAME_PREFIXES = __$value;
    }

}
