/** Library asset:datahedgehog_monitor/lib/lib/services/text_formatter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./text_input";
import * as math from "@dart2ts/dart/math";
import * as lib5 from "./text_editing";

export var _selectionAwareTextManipulation : (value : lib3.TextEditingValue,substringManipulation : (substring : string) => string) => lib3.TextEditingValue = (value : lib3.TextEditingValue,substringManipulation : (substring : string) => string) : lib3.TextEditingValue =>  {
    let selectionStartIndex : number = value.selection.start;
    let selectionEndIndex : number = value.selection.end;
    let manipulatedText : string;
    let manipulatedSelection : lib5.TextSelection;
    if (selectionStartIndex < 0 || selectionEndIndex < 0) {
        manipulatedText = substringManipulation(value.text);
    }else {
        let beforeSelection : string = substringManipulation(new core.DartString(value.text).substring(0,selectionStartIndex));
        let inSelection : string = substringManipulation(new core.DartString(value.text).substring(selectionStartIndex,selectionEndIndex));
        let afterSelection : string = substringManipulation(new core.DartString(value.text).substring(selectionEndIndex));
        manipulatedText = beforeSelection + inSelection + afterSelection;
        if (value.selection.baseOffset > value.selection.extentOffset) {
            manipulatedSelection = value.selection.copyWith({
                baseOffset : new core.DartString(beforeSelection).length + new core.DartString(inSelection).length,extentOffset : new core.DartString(beforeSelection).length});
        }else {
            manipulatedSelection = value.selection.copyWith({
                baseOffset : new core.DartString(beforeSelection).length,extentOffset : new core.DartString(beforeSelection).length + new core.DartString(inSelection).length});
        }
    }
    return lib3.TextEditingValue({
        text : manipulatedText,selection : (manipulatedSelection || new lib5.TextSelection.collapsed({
            offset : -1})),composing : manipulatedText == value.text ? value.composing : lib5.TextRange.empty});
};
export namespace TextInputFormatter {
    export type Constructors = 'TextInputFormatter';
    export type Interface = Omit<TextInputFormatter, Constructors>;
}
@DartClass
export class TextInputFormatter {
    @Abstract
    formatEditUpdate(oldValue : lib3.TextEditingValue,newValue : lib3.TextEditingValue) : lib3.TextEditingValue{ throw 'abstract'}
    static withFunction(formatFunction : (oldValue : lib3.TextEditingValue,newValue : lib3.TextEditingValue) => lib3.TextEditingValue) : TextInputFormatter {
        return _SimpleTextInputFormatter(formatFunction);
    }
    constructor() {
    }
    @defaultConstructor
    TextInputFormatter() {
    }
}

export namespace _SimpleTextInputFormatter {
    export type Constructors = TextInputFormatter.Constructors | '_SimpleTextInputFormatter';
    export type Interface = Omit<_SimpleTextInputFormatter, Constructors>;
}
@DartClass
export class _SimpleTextInputFormatter extends TextInputFormatter {
    constructor(formatFunction : (oldValue : lib3.TextEditingValue,newValue : lib3.TextEditingValue) => lib3.TextEditingValue) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SimpleTextInputFormatter(formatFunction : (oldValue : lib3.TextEditingValue,newValue : lib3.TextEditingValue) => lib3.TextEditingValue) {
        this.assert = assert;
        this.formatFunction = formatFunction;
    }
     : any;

    formatFunction : (oldValue : lib3.TextEditingValue,newValue : lib3.TextEditingValue) => lib3.TextEditingValue;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    formatEditUpdate(oldValue : lib3.TextEditingValue,newValue : lib3.TextEditingValue) : lib3.TextEditingValue {
        return this.formatFunction(oldValue,newValue);
    }
}

export namespace BlacklistingTextInputFormatter {
    export type Constructors = TextInputFormatter.Constructors | 'BlacklistingTextInputFormatter';
    export type Interface = Omit<BlacklistingTextInputFormatter, Constructors>;
}
@DartClass
export class BlacklistingTextInputFormatter extends TextInputFormatter {
    constructor(blacklistedPattern : core.DartPattern,_namedArguments? : {replacementString? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BlacklistingTextInputFormatter(blacklistedPattern : core.DartPattern,_namedArguments? : {replacementString? : string}) {
        let {replacementString} = Object.assign({
            "replacementString" : ''}, _namedArguments );
        this.assert = assert;
        this.blacklistedPattern = blacklistedPattern;
        this.replacementString = replacementString;
    }
     : any;

    blacklistedPattern : core.DartPattern;

    replacementString : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    formatEditUpdate(oldValue : lib3.TextEditingValue,newValue : lib3.TextEditingValue) : lib3.TextEditingValue {
        return _selectionAwareTextManipulation(newValue,(substring : string) =>  {
            return new core.DartString(substring).replaceAll(this.blacklistedPattern,this.replacementString);
        });
    }
    private static __$singleLineFormatter : BlacklistingTextInputFormatter;
    static get singleLineFormatter() : BlacklistingTextInputFormatter { 
        if (this.__$singleLineFormatter===undefined) {
            this.__$singleLineFormatter = BlacklistingTextInputFormatter(core.DartRegExp('\n'));
        }
        return this.__$singleLineFormatter;
    }
    static set singleLineFormatter(__$value : BlacklistingTextInputFormatter)  { 
        this.__$singleLineFormatter = __$value;
    }

}

export namespace LengthLimitingTextInputFormatter {
    export type Constructors = TextInputFormatter.Constructors | 'LengthLimitingTextInputFormatter';
    export type Interface = Omit<LengthLimitingTextInputFormatter, Constructors>;
}
@DartClass
export class LengthLimitingTextInputFormatter extends TextInputFormatter {
    constructor(maxLength : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LengthLimitingTextInputFormatter(maxLength : number) {
        this.assert = assert;
        this.maxLength = maxLength;
    }
     : any;

     : any;

     : any;

    maxLength : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    formatEditUpdate(oldValue : lib3.TextEditingValue,newValue : lib3.TextEditingValue) : lib3.TextEditingValue {
        if (this.maxLength != null && this.maxLength > 0 && new core.DartString(newValue.text).runes.length > this.maxLength) {
            let newSelection : lib5.TextSelection = newValue.selection.copyWith({
                baseOffset : math.min(newValue.selection.start,this.maxLength),extentOffset : math.min(newValue.selection.end,this.maxLength)});
            let iterator : core.DartRuneIterator = core.DartRuneIterator(newValue.text);
            if (iterator.moveNext()) for(let count : number = 0; count < this.maxLength; ++count)if (!iterator.moveNext()) break;
            let truncated : string = new core.DartString(newValue.text).substring(0,iterator.rawIndex);
            return lib3.TextEditingValue({
                text : truncated,selection : newSelection,composing : lib5.TextRange.empty});
        }
        return newValue;
    }
}

export namespace WhitelistingTextInputFormatter {
    export type Constructors = TextInputFormatter.Constructors | 'WhitelistingTextInputFormatter';
    export type Interface = Omit<WhitelistingTextInputFormatter, Constructors>;
}
@DartClass
export class WhitelistingTextInputFormatter extends TextInputFormatter {
    constructor(whitelistedPattern : core.DartPattern) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    WhitelistingTextInputFormatter(whitelistedPattern : core.DartPattern) {
        this.assert = assert;
        this.whitelistedPattern = whitelistedPattern;
    }
     : any;

    whitelistedPattern : core.DartPattern;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    formatEditUpdate(oldValue : lib3.TextEditingValue,newValue : lib3.TextEditingValue) : lib3.TextEditingValue {
        return _selectionAwareTextManipulation(newValue,(substring : string) =>  {
            return this.whitelistedPattern.allMatches(substring).map((match : core.DartMatch) =>  {
                return match.group(0);
            }).join();
        });
    }
    private static __$digitsOnly : WhitelistingTextInputFormatter;
    static get digitsOnly() : WhitelistingTextInputFormatter { 
        if (this.__$digitsOnly===undefined) {
            this.__$digitsOnly = WhitelistingTextInputFormatter(core.DartRegExp('\d+'));
        }
        return this.__$digitsOnly;
    }
    static set digitsOnly(__$value : WhitelistingTextInputFormatter)  { 
        this.__$digitsOnly = __$value;
    }

}

export class properties {
}
