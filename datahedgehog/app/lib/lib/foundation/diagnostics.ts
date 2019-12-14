/** Library asset:datahedgehog_monitor/lib/lib/foundation/diagnostics.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./print";

export var MessageProperty : (name : string,message : string,_namedArguments? : {level? : DiagnosticLevel}) => any = (name : string,message : string,_namedArguments? : {level? : DiagnosticLevel}) =>  {
    let {level} = Object.assign({
        "level" : DiagnosticLevel.info}, _namedArguments );
};
export var shortHash : (object : core.DartObject) => string = (object : core.DartObject) : string =>  {
    return new core.DartString(new core.DartInt(new core.DartInt(object.hashCode).toUnsigned(20)).toRadixString(16)).padLeft(5,'0');
};
export var DiagnosticableTree : () => any = () : any =>  {
    var toString : (_namedArguments? : {minLevel? : DiagnosticLevel}) => string = (_namedArguments? : {minLevel? : DiagnosticLevel}) : string =>  {
        let {minLevel} = Object.assign({
            "minLevel" : DiagnosticLevel.debug}, _namedArguments );
        return toDiagnosticsNode({
            style : DiagnosticsTreeStyle.singleLine}).toString({
            minLevel : minLevel});
    };
    var toStringShallow : (_namedArguments? : {joiner? : string,minLevel? : DiagnosticLevel}) => string = (_namedArguments? : {joiner? : string,minLevel? : DiagnosticLevel}) : string =>  {
        let {joiner,minLevel} = Object.assign({
            "joiner" : ', ',
            "minLevel" : DiagnosticLevel.debug}, _namedArguments );
        let result : core.DartStringBuffer = core.DartStringBuffer();
        result.write(toStringShort());
        result.write(joiner);
        let builder : DiagnosticPropertiesBuilder = DiagnosticPropertiesBuilder();
        debugFillProperties(builder);
        result.write(builder.properties.where((n : DiagnosticsNode) =>  {
            return !n.isFiltered(minLevel);
        }).join(joiner));
        return result.toString();
    };
    var toStringDeep : (_namedArguments? : {prefixLineOne? : string,prefixOtherLines? : string,minLevel? : DiagnosticLevel}) => string = (_namedArguments? : {prefixLineOne? : string,prefixOtherLines? : string,minLevel? : DiagnosticLevel}) : string =>  {
        let {prefixLineOne,prefixOtherLines,minLevel} = Object.assign({
            "prefixLineOne" : '',
            "minLevel" : DiagnosticLevel.debug}, _namedArguments );
        return toDiagnosticsNode().toStringDeep({
            prefixLineOne : prefixLineOne,prefixOtherLines : prefixOtherLines,minLevel : minLevel});
    };
    var toStringShort : () => string = () : string =>  {
        return describeIdentity(this);
    };
    var toDiagnosticsNode : (_namedArguments? : {name? : string,style? : DiagnosticsTreeStyle}) => DiagnosticsNode = (_namedArguments? : {name? : string,style? : DiagnosticsTreeStyle}) : DiagnosticsNode =>  {
        let {name,style} = Object.assign({
        }, _namedArguments );
        return _DiagnosticableTreeNode({
            name : name,value : this,style : style});
    };
    var debugDescribeChildren : () => core.DartList<DiagnosticsNode> = () : core.DartList<DiagnosticsNode> =>  {
        return new core.DartList.literal<DiagnosticsNode>();
    };
    var debugFillProperties : (properties : DiagnosticPropertiesBuilder) => any = (properties : DiagnosticPropertiesBuilder) : any =>  {
    };
};
export var describeEnum : (enumEntry : core.DartObject) => string = (enumEntry : core.DartObject) : string =>  {
    let description : string = enumEntry.toString();
    let indexOfDot : number = new core.DartString(description).indexOf('.');
    /* TODO (AssertStatementImpl) : assert (indexOfDot != -1 && indexOfDot < description.length - 1); */;
    return new core.DartString(description).substring(indexOfDot + 1);
};
export var describeIdentity : (object : core.DartObject) => string = (object : core.DartObject) : string =>  {
    return `${object.runtimeType}#${shortHash(object)}`;
};
export namespace DiagnosticsNode {
    export type Constructors = 'DiagnosticsNode' | 'endsWith';
    export type Interface = Omit<DiagnosticsNode, Constructors>;
}
@DartClass
export class DiagnosticsNode {
    constructor(_namedArguments? : {name? : string,style? : DiagnosticsTreeStyle,showName? : boolean,showSeparator? : boolean}) {
    }
    @defaultConstructor
    DiagnosticsNode(_namedArguments? : {name? : string,style? : DiagnosticsTreeStyle,showName? : boolean,showSeparator? : boolean}) {
        let {name,style,showName,showSeparator} = Object.assign({
            "showName" : true,
            "showSeparator" : true}, _namedArguments );
        this.assert = assert;
        this.name = name;
        this.style = style;
        this.showName = showName;
        this.showSeparator = showSeparator;
    }
     : any;

     : any;

     : any;

    @namedConstructor
    endsWith( : any) {
    }
    static endsWith : new( : any) => DiagnosticsNode;

    @namedFactory
    static $message(message : string,_namedArguments? : {style? : DiagnosticsTreeStyle,level? : DiagnosticLevel}) : DiagnosticsNode {
        let {style,level} = Object.assign({
            "style" : DiagnosticsTreeStyle.singleLine,
            "level" : DiagnosticLevel.info}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (style != null); */;
        /* TODO (AssertStatementImpl) : assert (level != null); */;
        return op(Op.LT,DiagnosticsProperty<T>,);
        op(Op.GT,,(''));
        null;
        description:
            message;
        style:
            style;
        showName:
            false;
        level:
            level;
        ;
    }
    static message : new(message : string,_namedArguments? : {style? : DiagnosticsTreeStyle,level? : DiagnosticLevel}) => DiagnosticsNode;

    name : string;

    @Abstract
    toDescription(_namedArguments? : {parentConfiguration? : TextTreeConfiguration}) : string{ throw 'abstract'}
    showSeparator : boolean;

    isFiltered(minLevel : DiagnosticLevel) : boolean {
        return this.level.index < minLevel.index;
    }
    get level() : DiagnosticLevel {
        return DiagnosticLevel.info;
    }
    showName : boolean;

    get emptyBodyDescription() : string {
        return null;
    }
    @AbstractProperty
    get value() : core.DartObject{ throw 'abstract'}
    style : DiagnosticsTreeStyle;

    @Abstract
    getProperties() : core.DartList<DiagnosticsNode>{ throw 'abstract'}
    @Abstract
    getChildren() : core.DartList<DiagnosticsNode>{ throw 'abstract'}
    get _separator() : string {
        return this.showSeparator ? ':' : '';
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    toJsonMap() : core.DartMap<string,core.DartObject> {
        let data : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
            ['name',this.name],
            ['showSeparator',this.showSeparator],
            ['description',this.toDescription()],
            ['level',describeEnum(this.level)],
            ['showName',this.showName],
            ['emptyBodyDescription',this.emptyBodyDescription],
            ['style',describeEnum(this.style)],
            ['valueToString',this.value.toString()],
            ['type',this.runtimeType.toString()],
            ['hasChildren',this.getChildren().isNotEmpty]]);
        return data;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString(_namedArguments? : {parentConfiguration? : TextTreeConfiguration,minLevel? : DiagnosticLevel}) : string {
        let {parentConfiguration,minLevel} = Object.assign({
            "minLevel" : DiagnosticLevel.info}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (style != null); */;
        /* TODO (AssertStatementImpl) : assert (minLevel != null); */;
        if (op(Op.EQUALS,this.style,DiagnosticsTreeStyle.singleLine)) return this.toStringDeep({
            parentConfiguration : parentConfiguration,minLevel : minLevel});
        let description : string = this.toDescription({
            parentConfiguration : parentConfiguration});
        if (this.name == null || new core.DartString(this.name).isEmpty || !this.showName) return description;
        return new core.DartString(description).contains('\n') ? `${this.name}${this._separator}\n${description}` : `${this.name}${this._separator} ${description}`;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    get textTreeConfiguration() : TextTreeConfiguration {
        /* TODO (AssertStatementImpl) : assert (style != null); */;
        switch (this.style) {
            case DiagnosticsTreeStyle.dense:
                return properties.denseTextConfiguration;
            case DiagnosticsTreeStyle.sparse:
                return properties.sparseTextConfiguration;
            case DiagnosticsTreeStyle.offstage:
                return properties.dashedTextConfiguration;
            case DiagnosticsTreeStyle.whitespace:
                return properties.whitespaceTextConfiguration;
            case DiagnosticsTreeStyle.transition:
                return properties.transitionTextConfiguration;
            case DiagnosticsTreeStyle.singleLine:
                return properties.singleLineTextConfiguration;
        }
        return null;
    }
    _childTextConfiguration(child : DiagnosticsNode,textStyle : TextTreeConfiguration) : TextTreeConfiguration {
        return (child != null && child.style != DiagnosticsTreeStyle.singleLine) ? child.textTreeConfiguration : textStyle;
    }
    toStringDeep(_namedArguments? : {prefixLineOne? : string,prefixOtherLines? : string,parentConfiguration? : TextTreeConfiguration,minLevel? : DiagnosticLevel}) : string {
        let {prefixLineOne,prefixOtherLines,parentConfiguration,minLevel} = Object.assign({
            "prefixLineOne" : '',
            "minLevel" : DiagnosticLevel.debug}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (minLevel != null); */;
        prefixOtherLines = ( prefixOtherLines ) || ( prefixLineOne );
        let children : core.DartList<DiagnosticsNode> = this.getChildren();
        let config : TextTreeConfiguration = this.textTreeConfiguration;
        if (new core.DartString(prefixOtherLines).isEmpty) prefixOtherLines += config.prefixOtherLinesRootNode;
        let builder : _PrefixedStringBuilder = _PrefixedStringBuilder(prefixLineOne,prefixOtherLines);
        let description : string = this.toDescription({
            parentConfiguration : parentConfiguration});
        if (description == null || new core.DartString(description).isEmpty) {
            if (this.showName && this.name != null) builder.write(this.name);
        }else {
            if (this.name != null && new core.DartString(this.name).isNotEmpty && this.showName) {
                builder.write(this.name);
                if (this.showSeparator) builder.write(config.afterName);
                builder.write(config.isNameOnOwnLine || new core.DartString(description).contains('\n') ? '\n' : ' ');
                if (new core.DartString(description).contains('\n') && op(Op.EQUALS,this.style,DiagnosticsTreeStyle.singleLine)) builder.prefixOtherLines += '  ';
            }
            builder.prefixOtherLines += children.isEmpty ? config.propertyPrefixNoChildren : config.propertyPrefixIfChildren;
            builder.write(description);
        }
        let properties : core.DartList<DiagnosticsNode> = this.getProperties().where((n : DiagnosticsNode) =>  {
            return !n.isFiltered(minLevel);
        }).toList();
        if (properties.isNotEmpty || children.isNotEmpty || this.emptyBodyDescription != null) builder.write(config.afterDescriptionIfBody);
        if (config.lineBreakProperties) builder.write(config.lineBreak);
        if (properties.isNotEmpty) builder.write(config.beforeProperties);
        builder.prefixOtherLines += config.bodyIndent;
        if (this.emptyBodyDescription != null && properties.isEmpty && children.isEmpty && new core.DartString(prefixLineOne).isNotEmpty) {
            builder.write(this.emptyBodyDescription);
            if (config.lineBreakProperties) builder.write(config.lineBreak);
        }
        for(let i : number = 0; i < properties.length; ++i){
            let property : DiagnosticsNode = properties[i];
            if (i > 0) builder.write(config.propertySeparator);
            let kWrapWidth : number = 65;
            if (property.style != DiagnosticsTreeStyle.singleLine) {
                let propertyStyle : TextTreeConfiguration = property.textTreeConfiguration;
                builder.writeRaw(property.toStringDeep({
                    prefixLineOne : `${builder.prefixOtherLines}${propertyStyle.prefixLineOne}`,prefixOtherLines : `${builder.prefixOtherLines}${propertyStyle.linkCharacter}${propertyStyle.prefixOtherLines}`,parentConfiguration : config,minLevel : minLevel}));
                continue;
            }
            /* TODO (AssertStatementImpl) : assert (property.style == DiagnosticsTreeStyle.singleLine); */;
            let message : string = property.toString({
                parentConfiguration : config,minLevel : minLevel});
            if (!config.lineBreakProperties || new core.DartString(message).length < kWrapWidth) {
                builder.write(message);
            }else {
                let lines : core.DartList<string> = new core.DartString(message).split('\n');
                for(let j : number = 0; j < lines.length; ++j){
                    let line : string = lines[j];
                    if (j > 0) builder.write(config.lineBreak);
                    builder.write(lib3.debugWordWrap(line,kWrapWidth,{
                        wrapIndent : '  '}).join('\n'));
                }
            }
            if (config.lineBreakProperties) builder.write(config.lineBreak);
        }
        if (properties.isNotEmpty) builder.write(config.afterProperties);
        if (!config.lineBreakProperties) builder.write(config.lineBreak);
        let prefixChildren : string = `${prefixOtherLines}${config.bodyIndent}`;
        if (children.isEmpty && config.addBlankLineIfNoChildren && builder.hasMultipleLines) {
            let prefix : string = new core.DartString(prefixChildren).trimRight();
            if (new core.DartString(prefix).isNotEmpty) builder.writeRaw(`${prefix}${config.lineBreak}`);
        }
        if (children.isNotEmpty && config.showChildren) {
            if (config.isBlankLineBetweenPropertiesAndChildren && properties.isNotEmpty && children.first.textTreeConfiguration.isBlankLineBetweenPropertiesAndChildren) {
                builder.write(config.lineBreak);
            }
            for(let i : number = 0; i < children.length; i++){
                let child : DiagnosticsNode = children[i];
                /* TODO (AssertStatementImpl) : assert (child != null); */;
                let childConfig : TextTreeConfiguration = this._childTextConfiguration(child,config);
                if (i == children.length - 1) {
                    let lastChildPrefixLineOne : string = `${prefixChildren}${childConfig.prefixLastChildLineOne}`;
                    builder.writeRawLine(child.toStringDeep({
                        prefixLineOne : lastChildPrefixLineOne,prefixOtherLines : `${prefixChildren}${childConfig.childLinkSpace}${childConfig.prefixOtherLines}`,parentConfiguration : config,minLevel : minLevel}));
                    if (new core.DartString(childConfig.footer).isNotEmpty) builder.writeRaw(`${prefixChildren}${childConfig.childLinkSpace}${childConfig.footer}`);
                }else {
                    let nextChildStyle : TextTreeConfiguration = this._childTextConfiguration(children[i + 1],config);
                    let childPrefixLineOne : string = `${prefixChildren}${childConfig.prefixLineOne}`;
                    let childPrefixOtherLines : string = `${prefixChildren}${nextChildStyle.linkCharacter}${childConfig.prefixOtherLines}`;
                    builder.writeRawLine(child.toStringDeep({
                        prefixLineOne : childPrefixLineOne,prefixOtherLines : childPrefixOtherLines,parentConfiguration : config,minLevel : minLevel}));
                    if (new core.DartString(childConfig.footer).isNotEmpty) builder.writeRaw(`${prefixChildren}${nextChildStyle.linkCharacter}${childConfig.footer}`);
                }
            }
        }
        return builder.toString();
    }
}

export enum DiagnosticLevel {
    hidden,
    fine,
    debug,
    info,
    warning,
    error,
    off
}

export namespace TextTreeConfiguration {
    export type Constructors = 'TextTreeConfiguration';
    export type Interface = Omit<TextTreeConfiguration, Constructors>;
}
@DartClass
export class TextTreeConfiguration {
    constructor(_namedArguments? : {prefixLineOne? : string,prefixOtherLines? : string,prefixLastChildLineOne? : string,prefixOtherLinesRootNode? : string,linkCharacter? : string,propertyPrefixIfChildren? : string,propertyPrefixNoChildren? : string,lineBreak? : string,lineBreakProperties? : boolean,afterName? : string,afterDescriptionIfBody? : string,beforeProperties? : string,afterProperties? : string,propertySeparator? : string,bodyIndent? : string,footer? : string,showChildren? : boolean,addBlankLineIfNoChildren? : boolean,isNameOnOwnLine? : boolean,isBlankLineBetweenPropertiesAndChildren? : boolean}) {
    }
    @defaultConstructor
    TextTreeConfiguration(_namedArguments? : {prefixLineOne? : string,prefixOtherLines? : string,prefixLastChildLineOne? : string,prefixOtherLinesRootNode? : string,linkCharacter? : string,propertyPrefixIfChildren? : string,propertyPrefixNoChildren? : string,lineBreak? : string,lineBreakProperties? : boolean,afterName? : string,afterDescriptionIfBody? : string,beforeProperties? : string,afterProperties? : string,propertySeparator? : string,bodyIndent? : string,footer? : string,showChildren? : boolean,addBlankLineIfNoChildren? : boolean,isNameOnOwnLine? : boolean,isBlankLineBetweenPropertiesAndChildren? : boolean}) {
        let {prefixLineOne,prefixOtherLines,prefixLastChildLineOne,prefixOtherLinesRootNode,linkCharacter,propertyPrefixIfChildren,propertyPrefixNoChildren,lineBreak,lineBreakProperties,afterName,afterDescriptionIfBody,beforeProperties,afterProperties,propertySeparator,bodyIndent,footer,showChildren,addBlankLineIfNoChildren,isNameOnOwnLine,isBlankLineBetweenPropertiesAndChildren} = Object.assign({
            "lineBreak" : '\n',
            "lineBreakProperties" : true,
            "afterName" : ':',
            "afterDescriptionIfBody" : '',
            "beforeProperties" : '',
            "afterProperties" : '',
            "propertySeparator" : '',
            "bodyIndent" : '',
            "footer" : '',
            "showChildren" : true,
            "addBlankLineIfNoChildren" : true,
            "isNameOnOwnLine" : false,
            "isBlankLineBetweenPropertiesAndChildren" : true}, _namedArguments );
        this.childLinkSpace = op(Op.TIMES,' ',new core.DartString(this.linkCharacter).length);
        this.assert = assert;
        this.prefixLineOne = prefixLineOne;
        this.prefixOtherLines = prefixOtherLines;
        this.prefixLastChildLineOne = prefixLastChildLineOne;
        this.prefixOtherLinesRootNode = prefixOtherLinesRootNode;
        this.linkCharacter = linkCharacter;
        this.propertyPrefixIfChildren = propertyPrefixIfChildren;
        this.propertyPrefixNoChildren = propertyPrefixNoChildren;
        this.lineBreak = lineBreak;
        this.lineBreakProperties = lineBreakProperties;
        this.afterName = afterName;
        this.afterDescriptionIfBody = afterDescriptionIfBody;
        this.beforeProperties = beforeProperties;
        this.afterProperties = afterProperties;
        this.propertySeparator = propertySeparator;
        this.bodyIndent = bodyIndent;
        this.footer = footer;
        this.showChildren = showChildren;
        this.addBlankLineIfNoChildren = addBlankLineIfNoChildren;
        this.isNameOnOwnLine = isNameOnOwnLine;
        this.isBlankLineBetweenPropertiesAndChildren = isBlankLineBetweenPropertiesAndChildren;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    childLinkSpace;

    prefixLineOne : string;

    prefixOtherLines : string;

    prefixLastChildLineOne : string;

    prefixOtherLinesRootNode : string;

    propertyPrefixIfChildren : string;

    propertyPrefixNoChildren : string;

    linkCharacter : string;

    childLinkSpace : string;

    lineBreak : string;

    lineBreakProperties : boolean;

    afterName : string;

    afterDescriptionIfBody : string;

    beforeProperties : string;

    afterProperties : string;

    propertySeparator : string;

    bodyIndent : string;

    showChildren : boolean;

    addBlankLineIfNoChildren : boolean;

    isNameOnOwnLine : boolean;

    footer : string;

    isBlankLineBetweenPropertiesAndChildren : boolean;

}

export namespace _PrefixedStringBuilder {
    export type Constructors = '_PrefixedStringBuilder';
    export type Interface = Omit<_PrefixedStringBuilder, Constructors>;
}
@DartClass
export class _PrefixedStringBuilder {
    constructor(prefixLineOne : string,prefixOtherLines : string) {
    }
    @defaultConstructor
    _PrefixedStringBuilder(prefixLineOne : string,prefixOtherLines : string) {
        this._buffer = core.DartStringBuffer();
        this._atLineStart = true;
        this._hasMultipleLines = false;
        this.prefixLineOne = prefixLineOne;
        this.prefixOtherLines = prefixOtherLines;
    }
    prefixLineOne : string;

    prefixOtherLines : string;

    _buffer : core.DartStringBuffer;

    _atLineStart : boolean;

    _hasMultipleLines : boolean;

    get hasMultipleLines() : boolean {
        return this._hasMultipleLines;
    }
    write(s : string) : any {
        if (new core.DartString(s).isEmpty) return;
        if (s == '\n') {
            if (this._buffer.isEmpty) {
                this._buffer.write(new core.DartString(this.prefixLineOne).trimRight());
            }else if (this._atLineStart) {
                this._buffer.write(new core.DartString(this.prefixOtherLines).trimRight());
                this._hasMultipleLines = true;
            }
            this._buffer.write('\n');
            this._atLineStart = true;
            return;
        }
        if (this._buffer.isEmpty) {
            this._buffer.write(this.prefixLineOne);
        }else if (this._atLineStart) {
            this._buffer.write(this.prefixOtherLines);
            this._hasMultipleLines = true;
        }
        let lineTerminated : boolean = false;
        if (new core.DartString(s).endsWith('\n')) {
            s = new core.DartString(s).substring(0,new core.DartString(s).length - 1);
            lineTerminated = true;
        }
        let parts : core.DartList<string> = new core.DartString(s).split('\n');
        this._buffer.write(parts[0]);
        for(let i : number = 1; i < parts.length; ++i){
            ((_) : core.DartStringBuffer =>  {
                {
                    _.write('\n');
                    _.write(this.prefixOtherLines);
                    _.write(parts[i]);
                    return _;
                }
            })(this._buffer);
        }
        if (lineTerminated) this._buffer.write('\n');
        this._atLineStart = lineTerminated;
    }
    writeRaw(text : string) : any {
        if (new core.DartString(text).isEmpty) return;
        this._buffer.write(text);
        this._atLineStart = new core.DartString(text).endsWith('\n');
    }
    writeRawLine(line : string) : any {
        if (new core.DartString(line).isEmpty) return;
        this._buffer.write(line);
        if (!new core.DartString(line).endsWith('\n')) this._buffer.write('\n');
        this._atLineStart = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this._buffer.toString();
    }
}

export namespace DiagnosticPropertiesBuilder {
    export type Constructors = 'DiagnosticPropertiesBuilder';
    export type Interface = Omit<DiagnosticPropertiesBuilder, Constructors>;
}
@DartClass
export class DiagnosticPropertiesBuilder {
    add(property : DiagnosticsNode) : any {
        this.properties.add(property);
    }
    properties : core.DartList<DiagnosticsNode>;

    defaultDiagnosticsTreeStyle : DiagnosticsTreeStyle;

    emptyBodyDescription : string;

    constructor() {
    }
    @defaultConstructor
    DiagnosticPropertiesBuilder() {
        this.properties = new core.DartList.literal<DiagnosticsNode>();
        this.defaultDiagnosticsTreeStyle = DiagnosticsTreeStyle.sparse;
    }
}

export namespace _NoDefaultValue {
    export type Constructors = '_NoDefaultValue';
    export type Interface = Omit<_NoDefaultValue, Constructors>;
}
@DartClass
export class _NoDefaultValue {
    constructor() {
    }
    @defaultConstructor
    _NoDefaultValue() {
    }
}

export namespace Diagnosticable {
    export type Constructors = 'Diagnosticable';
    export type Interface = Omit<Diagnosticable, Constructors>;
}
@DartClass
export class Diagnosticable {
    constructor() {
    }
    @defaultConstructor
    Diagnosticable() {
    }
    toStringShort() : string {
        return describeIdentity(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString(_namedArguments? : {minLevel? : DiagnosticLevel}) : string {
        let {minLevel} = Object.assign({
            "minLevel" : DiagnosticLevel.debug}, _namedArguments );
        return this.toDiagnosticsNode({
            style : DiagnosticsTreeStyle.singleLine}).toString({
            minLevel : minLevel});
    }
    toDiagnosticsNode(_namedArguments? : {name? : string,style? : DiagnosticsTreeStyle}) : DiagnosticsNode {
        let {name,style} = Object.assign({
        }, _namedArguments );
        return DiagnosticableNode({
            name : name,value : this,style : style});
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : DiagnosticPropertiesBuilder) : any {
    }
}

export enum DiagnosticsTreeStyle {
    sparse,
    offstage,
    dense,
    transition,
    whitespace,
    singleLine
}

export namespace DiagnosticableTree {
    export type Constructors = Diagnosticable.Constructors | 'DiagnosticableTree';
    export type Interface = Omit<DiagnosticableTree, Constructors>;
}
@DartClass
export class DiagnosticableTree extends Diagnosticable {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DiagnosticableTree() {
    }
    toStringShallow(_namedArguments? : {joiner? : string,minLevel? : DiagnosticLevel}) : string {
        let {joiner,minLevel} = Object.assign({
            "joiner" : ', ',
            "minLevel" : DiagnosticLevel.debug}, _namedArguments );
        let result : core.DartStringBuffer = core.DartStringBuffer();
        result.write(this.toString());
        result.write(joiner);
        let builder : DiagnosticPropertiesBuilder = DiagnosticPropertiesBuilder();
        this.debugFillProperties(builder);
        result.write(builder.properties.where((n : DiagnosticsNode) =>  {
            return !n.isFiltered(minLevel);
        }).join(joiner));
        return result.toString();
    }
    toStringDeep(_namedArguments? : {prefixLineOne? : string,prefixOtherLines? : string,minLevel? : DiagnosticLevel}) : string {
        let {prefixLineOne,prefixOtherLines,minLevel} = Object.assign({
            "prefixLineOne" : '',
            "minLevel" : DiagnosticLevel.debug}, _namedArguments );
        return this.toDiagnosticsNode().toStringDeep({
            prefixLineOne : prefixLineOne,prefixOtherLines : prefixOtherLines,minLevel : minLevel});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringShort() : string {
        return describeIdentity(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toDiagnosticsNode(_namedArguments? : {name? : string,style? : DiagnosticsTreeStyle}) : DiagnosticsNode {
        let {name,style} = Object.assign({
        }, _namedArguments );
        return _DiagnosticableTreeNode({
            name : name,value : this,style : style});
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    debugDescribeChildren() : core.DartList<DiagnosticsNode> {
        return new core.DartList.literal<DiagnosticsNode>();
    }
}

export namespace DiagnosticableNode {
    export type Constructors = DiagnosticsNode.Constructors | 'DiagnosticableNode';
    export type Interface<T extends Diagnosticable> = Omit<DiagnosticableNode<T extends Diagnosticable>, Constructors>;
}
@DartClass
export class DiagnosticableNode<T extends Diagnosticable> extends DiagnosticsNode {
    constructor(_namedArguments? : {name? : string,value? : T,style? : DiagnosticsTreeStyle}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DiagnosticableNode(_namedArguments? : {name? : string,value? : T,style? : DiagnosticsTreeStyle}) {
        let {name,value,style} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.value = value;
    }
     : any;

     : any;

    name;
    style;

    style;
    ;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    value : T;

    _cachedBuilder : DiagnosticPropertiesBuilder;

    get _builder() : DiagnosticPropertiesBuilder {
        if (op(Op.EQUALS,this._cachedBuilder,null)) {
            this._cachedBuilder = DiagnosticPropertiesBuilder();
            ((_535_)=>(!!_535_)?_535_.debugFillProperties(this._cachedBuilder):null)(this.value);
        }
        return this._cachedBuilder;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get style() : DiagnosticsTreeStyle {
        return (super.style || this._builder.defaultDiagnosticsTreeStyle);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get emptyBodyDescription() : string {
        return this._builder.emptyBodyDescription;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getProperties() : core.DartList<DiagnosticsNode> {
        return this._builder.properties;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChildren() : core.DartList<DiagnosticsNode> {
        return new core.DartList.literal<DiagnosticsNode>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toDescription(_namedArguments? : {parentConfiguration? : TextTreeConfiguration}) : string {
        let {parentConfiguration} = Object.assign({
        }, _namedArguments );
        return this.value.toStringShort();
    }
}

export namespace DiagnosticsProperty {
    export type Constructors = DiagnosticsNode.Constructors | 'DiagnosticsProperty' | 'lazy';
    export type Interface<T> = Omit<DiagnosticsProperty<T>, Constructors>;
}
@DartClass
export class DiagnosticsProperty<T> extends DiagnosticsNode {
    constructor(name : string,value : T,_namedArguments? : {description? : string,ifNull? : string,ifEmpty? : string,showName? : boolean,showSeparator? : boolean,defaultValue? : core.DartObject,tooltip? : string,missingIfNull? : boolean,style? : DiagnosticsTreeStyle,level? : DiagnosticLevel}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DiagnosticsProperty(name : string,value : T,_namedArguments? : {description? : string,ifNull? : string,ifEmpty? : string,showName? : boolean,showSeparator? : boolean,defaultValue? : core.DartObject,tooltip? : string,missingIfNull? : boolean,style? : DiagnosticsTreeStyle,level? : DiagnosticLevel}) {
        let {description,ifNull,ifEmpty,showName,showSeparator,defaultValue,tooltip,missingIfNull,style,level} = Object.assign({
            "showName" : true,
            "showSeparator" : true,
            "defaultValue" : properties.kNoDefaultValue,
            "missingIfNull" : false,
            "style" : DiagnosticsTreeStyle.singleLine,
            "level" : DiagnosticLevel.info}, _namedArguments );
        this._description = description;
        this._valueComputed = true;
        this._value = this.value;
        this._computeValue = null;
        this.ifNull = (this.ifNull || (this.missingIfNull ? 'MISSING' : null));
        this._defaultLevel = this.level;
        this._description = description;
        this._valueComputed = false;
        this._value = null;
        this._computeValue = computeValue;
        this._defaultLevel = this.level;
        this.ifNull = (this.ifNull || (this.missingIfNull ? 'MISSING' : null));
        this.assert = assert;
        this.ifEmpty = ifEmpty;
        this.defaultValue = defaultValue;
        this.tooltip = tooltip;
        this.missingIfNull = missingIfNull;
    }
     : any;

     : any;

     : any;

     : any;

    _description;
    _valueComputed;
    _value;
    _computeValue;
    ifNull;
    _defaultLevel;
    super;

     : any;

    name;
    showName;

    showName;
    showSeparator;

    showSeparator;
    style;

    style;
    ;

    @namedConstructor
    lazy(name : string,computeValue : <T>() => T,_namedArguments? : {description? : string,ifNull? : string,ifEmpty? : string,showName? : boolean,showSeparator? : boolean,defaultValue? : core.DartObject,tooltip? : string,missingIfNull? : boolean,style? : DiagnosticsTreeStyle,level? : DiagnosticLevel}) {
        let {description,ifNull,ifEmpty,showName,showSeparator,defaultValue,tooltip,missingIfNull,style,level} = Object.assign({
            "showName" : true,
            "showSeparator" : true,
            "defaultValue" : properties.kNoDefaultValue,
            "missingIfNull" : false,
            "style" : DiagnosticsTreeStyle.singleLine,
            "level" : DiagnosticLevel.info}, _namedArguments );
        this._description = description;
        this._valueComputed = true;
        this._value = this.value;
        this._computeValue = null;
        this.ifNull = (this.ifNull || (this.missingIfNull ? 'MISSING' : null));
        this._defaultLevel = this.level;
        this._description = description;
        this._valueComputed = false;
        this._value = null;
        this._computeValue = computeValue;
        this._defaultLevel = this.level;
        this.ifNull = (this.ifNull || (this.missingIfNull ? 'MISSING' : null));
        this.assert = assert;
        this.ifEmpty = ifEmpty;
        this.defaultValue = defaultValue;
        this.tooltip = tooltip;
        this.missingIfNull = missingIfNull;
    }
    static lazy : new<T>(name : string,computeValue : <T>() => T,_namedArguments? : {description? : string,ifNull? : string,ifEmpty? : string,showName? : boolean,showSeparator? : boolean,defaultValue? : core.DartObject,tooltip? : string,missingIfNull? : boolean,style? : DiagnosticsTreeStyle,level? : DiagnosticLevel}) => DiagnosticsProperty<T>;

     : any;

     : any;

     : any;

     : any;

    is : any;

     : T;

     : any;

     : any;

     : any;

    _description;
    _valueComputed;
    _value;
    _computeValue;
    _defaultLevel;
    ifNull;
    super;

     : any;

    name;
    showName;

    showName;
    showSeparator;

    showSeparator;
    style;

    style;
    ;

    _description : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJsonMap() : core.DartMap<string,core.DartObject> {
        let json : core.DartMap<string,core.DartObject> = super.toJsonMap();
        if (this.defaultValue != properties.kNoDefaultValue) json.set('defaultValue',this.defaultValue.toString());
        if (this.ifEmpty != null) json.set('ifEmpty',this.ifEmpty);
        if (this.ifNull != null) json.set('ifNull',this.ifNull);
        if (this.tooltip != null) json.set('tooltip',this.tooltip);
        json.set('missingIfNull',this.missingIfNull);
        if (this.exception != null) json.set('exception',this.exception.toString());
        json.set('propertyType',this.propertyType.toString());
        json.set('valueToString',this.valueToString());
        json.set('defaultLevel',describeEnum(this._defaultLevel));
        if (is(T, Diagnosticable)) json.set('isDiagnosticableValue',true);
        return json;
    }
    valueToString(_namedArguments? : {parentConfiguration? : TextTreeConfiguration}) : string {
        let {parentConfiguration} = Object.assign({
        }, _namedArguments );
        let v : T = this.value;
        return is(v, any) ? v.toStringShort() : v.toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toDescription(_namedArguments? : {parentConfiguration? : TextTreeConfiguration}) : string {
        let {parentConfiguration} = Object.assign({
        }, _namedArguments );
        if (this._description != null) return this._addTooltip(this._description);
        if (this.exception != null) return `EXCEPTION (${this.exception.runtimeType})`;
        if (this.ifNull != null && op(Op.EQUALS,this.value,null)) return this._addTooltip(this.ifNull);
        let result : string = this.valueToString({
            parentConfiguration : parentConfiguration});
        if (new core.DartString(result).isEmpty && this.ifEmpty != null) result = this.ifEmpty;
        return this._addTooltip(result);
    }
    _addTooltip(text : string) : string {
        /* TODO (AssertStatementImpl) : assert (text != null); */;
        return this.tooltip == null ? text : `${text} (${this.tooltip})`;
    }
    ifNull : string;

    ifEmpty : string;

    tooltip : string;

    missingIfNull : boolean;

    get propertyType() : core.Type {
        return T;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : T {
        this._maybeCacheValue();
        return this._value;
    }
    _value : T;

    _valueComputed : boolean;

    _exception : core.DartObject;

    get exception() : core.DartObject {
        this._maybeCacheValue();
        return this._exception;
    }
    _maybeCacheValue() : any {
        if (this._valueComputed) return;
        this._valueComputed = true;
        /* TODO (AssertStatementImpl) : assert (_computeValue != null); */;
        try {
            this._value = this._computeValue();
        } catch (__error__) {

            {
                let exception = __error__;
                this._exception = exception;
                this._value = null;
            }
        }
    }
    defaultValue : core.DartObject;

    _defaultLevel : DiagnosticLevel;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get level() : DiagnosticLevel {
        if (op(Op.EQUALS,this._defaultLevel,DiagnosticLevel.hidden)) return this._defaultLevel;
        if (this.exception != null) return DiagnosticLevel.error;
        if (op(Op.EQUALS,this.value,null) && this.missingIfNull) return DiagnosticLevel.warning;
        if (this.defaultValue != properties.kNoDefaultValue && op(Op.EQUALS,this.value,this.defaultValue)) return DiagnosticLevel.fine;
        return this._defaultLevel;
    }
    _computeValue : <T>() => T;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getProperties() : core.DartList<DiagnosticsNode> {
        return new core.DartList.literal<DiagnosticsNode>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChildren() : core.DartList<DiagnosticsNode> {
        return new core.DartList.literal<DiagnosticsNode>();
    }
}

export namespace ObjectFlagProperty {
    export type Constructors = DiagnosticsProperty.Constructors | 'ObjectFlagProperty' | 'has';
    export type Interface<T> = Omit<ObjectFlagProperty<T>, Constructors>;
}
@DartClass
export class ObjectFlagProperty<T> extends DiagnosticsProperty<T> {
    constructor(name : string,value : T,_namedArguments? : {ifPresent? : any,ifNull? : string,showName? : boolean,level? : DiagnosticLevel}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ObjectFlagProperty(name : string,value : T,_namedArguments? : {ifPresent? : any,ifNull? : string,showName? : boolean,level? : DiagnosticLevel}) {
        let {ifPresent,ifNull,showName,level} = Object.assign({
            "showName" : false,
            "level" : DiagnosticLevel.info}, _namedArguments );
        this.ifPresent = `has ${this.name}`;
        this.assert = assert;
        this.ifPresent = ifPresent;
    }
     : any;

     : any;

     : any;

     : any;

    name;
    value;
    showName;

    showName;
    ifNull;

    ifNull;
    level;

    level;
    ;

    @namedConstructor
    has(name : string,value : T,_namedArguments? : {level? : DiagnosticLevel}) {
        let {level} = Object.assign({
            "level" : DiagnosticLevel.info}, _namedArguments );
        this.ifPresent = `has ${this.name}`;
        this.assert = assert;
    }
    static has : new<T>(name : string,value : T,_namedArguments? : {level? : DiagnosticLevel}) => ObjectFlagProperty<T>;

     : any;

     : any;

    ifPresent;
    super;

    name;
    value;
    showName;

     : any;

    level;
    ;

    ifPresent : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    valueToString(_namedArguments? : {parentConfiguration? : TextTreeConfiguration}) : string {
        let {parentConfiguration} = Object.assign({
        }, _namedArguments );
        if (this.value != null) {
            if (this.ifPresent != null) return this.ifPresent;
        }else {
            if (this.ifNull != null) return this.ifNull;
        }
        return super.valueToString({
            parentConfiguration : parentConfiguration});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get showName() : boolean {
        if ((this.value != null && op(Op.EQUALS,this.ifPresent,null)) || (op(Op.EQUALS,this.value,null) && op(Op.EQUALS,this.ifNull,null))) {
            return true;
        }
        return super.showName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get level() : DiagnosticLevel {
        if (this.value != null) {
            if (op(Op.EQUALS,this.ifPresent,null)) return DiagnosticLevel.hidden;
        }else {
            if (op(Op.EQUALS,this.ifNull,null)) return DiagnosticLevel.hidden;
        }
        return super.level;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJsonMap() : core.DartMap<string,core.DartObject> {
        let json : core.DartMap<string,core.DartObject> = super.toJsonMap();
        if (this.ifPresent != null) json.set('ifPresent',this.ifPresent);
        return json;
    }
}

export namespace EnumProperty {
    export type Constructors = DiagnosticsProperty.Constructors | 'EnumProperty';
    export type Interface<T> = Omit<EnumProperty<T>, Constructors>;
}
@DartClass
export class EnumProperty<T> extends DiagnosticsProperty<T> {
    constructor(name : string,value : T,_namedArguments? : {defaultValue? : core.DartObject,level? : DiagnosticLevel}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EnumProperty(name : string,value : T,_namedArguments? : {defaultValue? : core.DartObject,level? : DiagnosticLevel}) {
        let {defaultValue,level} = Object.assign({
            "defaultValue" : properties.kNoDefaultValue,
            "level" : DiagnosticLevel.info}, _namedArguments );
        this.assert = assert;
    }
     : any;

    name;
    value;
    defaultValue;

    defaultValue;
    level;

    level;
    ;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    valueToString(_namedArguments? : {parentConfiguration? : TextTreeConfiguration}) : string {
        let {parentConfiguration} = Object.assign({
        }, _namedArguments );
        if (op(Op.EQUALS,this.value,null)) return this.value.toString();
        return describeEnum(this.value);
    }
}

export namespace _DiagnosticableTreeNode {
    export type Constructors = DiagnosticableNode.Constructors | '_DiagnosticableTreeNode';
    export type Interface = Omit<_DiagnosticableTreeNode, Constructors>;
}
@DartClass
export class _DiagnosticableTreeNode extends DiagnosticableNode<any> {
    constructor(_namedArguments? : {name? : string,value? : any,style? : DiagnosticsTreeStyle}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DiagnosticableTreeNode(_namedArguments? : {name? : string,value? : any,style? : DiagnosticsTreeStyle}) {
        let {name,value,style} = Object.assign({
        }, _namedArguments );
        super.DiagnosticableNode({
            name : name,value : value,style : style});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChildren() : core.DartList<DiagnosticsNode> {
        if (lib3.value != null) return lib3.value.debugDescribeChildren();
        return new core.DartList.literal<DiagnosticsNode>();
    }
}

export namespace FlagProperty {
    export type Constructors = DiagnosticsProperty.Constructors | 'FlagProperty';
    export type Interface = Omit<FlagProperty, Constructors>;
}
@DartClass
export class FlagProperty extends DiagnosticsProperty<boolean> {
    constructor(name : string,_namedArguments? : {value? : boolean,ifTrue? : string,ifFalse? : string,showName? : boolean,defaultValue? : core.DartObject,level? : DiagnosticLevel}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FlagProperty(name : string,_namedArguments? : {value? : boolean,ifTrue? : string,ifFalse? : string,showName? : boolean,defaultValue? : core.DartObject,level? : DiagnosticLevel}) {
        let {value,ifTrue,ifFalse,showName,defaultValue,level} = Object.assign({
            "showName" : false,
            "level" : DiagnosticLevel.info}, _namedArguments );
        this.assert = assert;
        this.ifTrue = ifTrue;
        this.ifFalse = ifFalse;
    }
     : any;

     : any;

     : any;

     : any;

    name;
    value;
    showName;

    showName;
    defaultValue;

    defaultValue;
    level;

    level;
    ;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJsonMap() : core.DartMap<string,core.DartObject> {
        let json : core.DartMap<string,core.DartObject> = super.toJsonMap();
        if (this.ifTrue != null) json.set('ifTrue',this.ifTrue);
        if (this.ifFalse != null) json.set('ifFalse',this.ifFalse);
        return json;
    }
    ifTrue : string;

    ifFalse : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    valueToString(_namedArguments? : {parentConfiguration? : TextTreeConfiguration}) : string {
        let {parentConfiguration} = Object.assign({
        }, _namedArguments );
        if (op(Op.EQUALS,this.value,true)) {
            if (this.ifTrue != null) return this.ifTrue;
        }else if (op(Op.EQUALS,this.value,false)) {
            if (this.ifFalse != null) return this.ifFalse;
        }
        return super.valueToString({
            parentConfiguration : parentConfiguration});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get showName() : boolean {
        if (op(Op.EQUALS,this.value,null) || (op(Op.EQUALS,this.value,true) && this.ifTrue == null) || (op(Op.EQUALS,this.value,false) && this.ifFalse == null)) {
            return true;
        }
        return super.showName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get level() : DiagnosticLevel {
        if (op(Op.EQUALS,this.value,true)) {
            if (this.ifTrue == null) return DiagnosticLevel.hidden;
        }
        if (op(Op.EQUALS,this.value,false)) {
            if (this.ifFalse == null) return DiagnosticLevel.hidden;
        }
        return super.level;
    }
}

export namespace IterableProperty {
    export type Constructors = DiagnosticsProperty.Constructors | 'IterableProperty';
    export type Interface<T> = Omit<IterableProperty<T>, Constructors>;
}
@DartClass
export class IterableProperty<T> extends DiagnosticsProperty<core.DartIterable<T>> {
    constructor(name : string,value : core.DartIterable<T>,_namedArguments? : {defaultValue? : core.DartObject,ifNull? : string,ifEmpty? : string,style? : DiagnosticsTreeStyle,showName? : boolean,level? : DiagnosticLevel}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IterableProperty(name : string,value : core.DartIterable<T>,_namedArguments? : {defaultValue? : core.DartObject,ifNull? : string,ifEmpty? : string,style? : DiagnosticsTreeStyle,showName? : boolean,level? : DiagnosticLevel}) {
        let {defaultValue,ifNull,ifEmpty,style,showName,level} = Object.assign({
            "defaultValue" : properties.kNoDefaultValue,
            "ifEmpty" : '[]',
            "style" : DiagnosticsTreeStyle.singleLine,
            "showName" : true,
            "level" : DiagnosticLevel.info}, _namedArguments );
        this.assert = assert;
    }
     : any;

     : any;

     : any;

    name;
    value;
    defaultValue;

    defaultValue;
    ifNull;

    ifNull;
    ifEmpty;

    ifEmpty;
    style;

    style;
    showName;

    showName;
    level;

    level;
    ;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    valueToString(_namedArguments? : {parentConfiguration? : TextTreeConfiguration}) : string {
        let {parentConfiguration} = Object.assign({
        }, _namedArguments );
        if (op(Op.EQUALS,this.value,null)) return this.value.toString();
        if (this.value.isEmpty) return (this.ifEmpty || '[]');
        if (parentConfiguration != null && !parentConfiguration.lineBreakProperties) {
            return `[${this.value.join(', ')}]`;
        }
        return this.value.join(op(Op.EQUALS,this.style,DiagnosticsTreeStyle.singleLine) ? ', ' : '\n');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get level() : DiagnosticLevel {
        if (op(Op.EQUALS,this.ifEmpty,null) && this.value != null && this.value.isEmpty && super.level != DiagnosticLevel.hidden) return DiagnosticLevel.fine;
        return super.level;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJsonMap() : core.DartMap<string,core.DartObject> {
        let json : core.DartMap<string,core.DartObject> = super.toJsonMap();
        if (this.value != null) {
            json.set('values',this.value.map((value : T) =>  {
                return value.toString();
            }).toList());
        }
        return json;
    }
}

export namespace _NumProperty {
    export type Constructors = DiagnosticsProperty.Constructors | '_NumProperty' | 'lazy';
    export type Interface<T extends number> = Omit<_NumProperty<T extends number>, Constructors>;
}
@DartClass
export class _NumProperty<T extends number> extends DiagnosticsProperty<T> {
    constructor(name : string,value : T,_namedArguments? : {ifNull? : string,unit? : string,showName? : boolean,defaultValue? : core.DartObject,tooltip? : string,level? : DiagnosticLevel}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _NumProperty(name : string,value : T,_namedArguments? : {ifNull? : string,unit? : string,showName? : boolean,defaultValue? : core.DartObject,tooltip? : string,level? : DiagnosticLevel}) {
        let {ifNull,unit,showName,defaultValue,tooltip,level} = Object.assign({
            "showName" : true,
            "defaultValue" : properties.kNoDefaultValue,
            "level" : DiagnosticLevel.info}, _namedArguments );
        super.DiagnosticsProperty(name,value,{
            ifNull : ifNull,showName : showName,defaultValue : defaultValue,tooltip : tooltip,level : level});
        this.unit = unit;
    }
    @namedConstructor
    lazy(name : string,computeValue : <T>() => T,_namedArguments? : {ifNull? : string,unit? : string,showName? : boolean,defaultValue? : core.DartObject,tooltip? : string,level? : DiagnosticLevel}) {
        let {ifNull,unit,showName,defaultValue,tooltip,level} = Object.assign({
            "showName" : true,
            "defaultValue" : properties.kNoDefaultValue,
            "level" : DiagnosticLevel.info}, _namedArguments );
        super.lazy(name,computeValue,{
            ifNull : ifNull,showName : showName,defaultValue : defaultValue,tooltip : tooltip,level : level});
        this.unit = unit;
    }
    static lazy : new<T extends number>(name : string,computeValue : <T>() => T,_namedArguments? : {ifNull? : string,unit? : string,showName? : boolean,defaultValue? : core.DartObject,tooltip? : string,level? : DiagnosticLevel}) => _NumProperty<T>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJsonMap() : core.DartMap<string,core.DartObject> {
        let json : core.DartMap<string,core.DartObject> = super.toJsonMap();
        if (this.unit != null) json.set('unit',this.unit);
        json.set('numberToString',this.numberToString());
        return json;
    }
    unit : string;

    @Abstract
    numberToString() : string{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    valueToString(_namedArguments? : {parentConfiguration? : TextTreeConfiguration}) : string {
        let {parentConfiguration} = Object.assign({
        }, _namedArguments );
        if (op(Op.EQUALS,lib3.value,null)) return lib3.value.toString();
        return this.unit != null ? `${this.numberToString()}${this.unit}` : this.numberToString();
    }
}

export namespace StringProperty {
    export type Constructors = DiagnosticsProperty.Constructors | 'StringProperty';
    export type Interface = Omit<StringProperty, Constructors>;
}
@DartClass
export class StringProperty extends DiagnosticsProperty<string> {
    constructor(name : string,value : string,_namedArguments? : {description? : string,tooltip? : string,showName? : boolean,defaultValue? : core.DartObject,quoted? : boolean,ifEmpty? : string,level? : DiagnosticLevel}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringProperty(name : string,value : string,_namedArguments? : {description? : string,tooltip? : string,showName? : boolean,defaultValue? : core.DartObject,quoted? : boolean,ifEmpty? : string,level? : DiagnosticLevel}) {
        let {description,tooltip,showName,defaultValue,quoted,ifEmpty,level} = Object.assign({
            "showName" : true,
            "defaultValue" : properties.kNoDefaultValue,
            "quoted" : true,
            "level" : DiagnosticLevel.info}, _namedArguments );
        this.assert = assert;
        this.quoted = quoted;
    }
     : any;

     : any;

     : any;

    name;
    value;
    description;

    description;
    defaultValue;

    defaultValue;
    tooltip;

    tooltip;
    showName;

    showName;
    ifEmpty;

    ifEmpty;
    level;

    level;
    ;

    quoted : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJsonMap() : core.DartMap<string,core.DartObject> {
        let json : core.DartMap<string,core.DartObject> = super.toJsonMap();
        json.set('quoted',this.quoted);
        return json;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    valueToString(_namedArguments? : {parentConfiguration? : TextTreeConfiguration}) : string {
        let {parentConfiguration} = Object.assign({
        }, _namedArguments );
        let text : string = (this._description || this.value);
        if (parentConfiguration != null && !parentConfiguration.lineBreakProperties && text != null) {
            text = new core.DartString(text).replaceAll('\n','\n');
        }
        if (this.quoted && text != null) {
            if (this.ifEmpty != null && new core.DartString(text).isEmpty) return this.ifEmpty;
            return `"${text}"`;
        }
        return new core.DartString(text).toString();
    }
}

export namespace MessageProperty {
    export type Constructors = DiagnosticsProperty.Constructors | 'MessageProperty';
    export type Interface = Omit<MessageProperty, Constructors>;
}
@DartClass
export class MessageProperty extends DiagnosticsProperty<any> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MessageProperty() {
    }
}

export namespace IntProperty {
    export type Constructors = _NumProperty.Constructors | 'IntProperty';
    export type Interface = Omit<IntProperty, Constructors>;
}
@DartClass
export class IntProperty extends _NumProperty<number> {
    constructor(name : string,value : number,_namedArguments? : {ifNull? : string,showName? : boolean,unit? : string,defaultValue? : core.DartObject,level? : DiagnosticLevel}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IntProperty(name : string,value : number,_namedArguments? : {ifNull? : string,showName? : boolean,unit? : string,defaultValue? : core.DartObject,level? : DiagnosticLevel}) {
        let {ifNull,showName,unit,defaultValue,level} = Object.assign({
            "showName" : true,
            "defaultValue" : properties.kNoDefaultValue,
            "level" : DiagnosticLevel.info}, _namedArguments );
        this.assert = assert;
    }
     : any;

     : any;

    name;
    value;
    ifNull;

    ifNull;
    showName;

    showName;
    unit;

    unit;
    defaultValue;

    defaultValue;
    level;

    level;
    ;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    numberToString() : string {
        return this.value.toString();
    }
}

export namespace DoubleProperty {
    export type Constructors = _NumProperty.Constructors | 'DoubleProperty' | 'lazy';
    export type Interface = Omit<DoubleProperty, Constructors>;
}
@DartClass
export class DoubleProperty extends _NumProperty<double> {
    constructor(name : string,value : double,_namedArguments? : {ifNull? : string,unit? : string,tooltip? : string,defaultValue? : core.DartObject,showName? : boolean,level? : DiagnosticLevel}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DoubleProperty(name : string,value : double,_namedArguments? : {ifNull? : string,unit? : string,tooltip? : string,defaultValue? : core.DartObject,showName? : boolean,level? : DiagnosticLevel}) {
        let {ifNull,unit,tooltip,defaultValue,showName,level} = Object.assign({
            "defaultValue" : properties.kNoDefaultValue,
            "showName" : true,
            "level" : DiagnosticLevel.info}, _namedArguments );
        this.assert = assert;
    }
     : any;

     : any;

    name;
    value;
    ifNull;

    ifNull;
    unit;

    unit;
    tooltip;

    tooltip;
    defaultValue;

    defaultValue;
    showName;

    showName;
    level;

    level;
    ;

    @namedConstructor
    lazy(name : string,computeValue : <T>() => double,_namedArguments? : {ifNull? : string,showName? : boolean,unit? : string,tooltip? : string,defaultValue? : core.DartObject,level? : DiagnosticLevel}) {
        let {ifNull,showName,unit,tooltip,defaultValue,level} = Object.assign({
            "showName" : true,
            "defaultValue" : properties.kNoDefaultValue,
            "level" : DiagnosticLevel.info}, _namedArguments );
        this.assert = assert;
    }
    static lazy : new(name : string,computeValue : <T>() => double,_namedArguments? : {ifNull? : string,showName? : boolean,unit? : string,tooltip? : string,defaultValue? : core.DartObject,level? : DiagnosticLevel}) => DoubleProperty;

     : any;

     : any;

    @Abstract
    lazy(name : any,computeValue : any,_namedArguments? : {showName? : any,ifNull? : any,unit? : any,tooltip? : any,defaultValue? : any,level? : any}){ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    numberToString() : string {
        return ((_534_)=>(!!_534_)?_534_.toStringAsFixed(1):null)(this.value);
    }
}

export namespace PercentProperty {
    export type Constructors = DoubleProperty.Constructors | 'PercentProperty';
    export type Interface = Omit<PercentProperty, Constructors>;
}
@DartClass
export class PercentProperty extends DoubleProperty {
    constructor(name : string,fraction : double,_namedArguments? : {ifNull? : string,showName? : boolean,tooltip? : string,unit? : string,level? : DiagnosticLevel}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PercentProperty(name : string,fraction : double,_namedArguments? : {ifNull? : string,showName? : boolean,tooltip? : string,unit? : string,level? : DiagnosticLevel}) {
        let {ifNull,showName,tooltip,unit,level} = Object.assign({
            "showName" : true,
            "level" : DiagnosticLevel.info}, _namedArguments );
        this.assert = assert;
    }
     : any;

     : any;

    name;
    fraction;
    ifNull;

    ifNull;
    showName;

    showName;
    tooltip;

    tooltip;
    unit;

    unit;
    level;

    level;
    ;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    valueToString(_namedArguments? : {parentConfiguration? : TextTreeConfiguration}) : string {
        let {parentConfiguration} = Object.assign({
        }, _namedArguments );
        if (op(Op.EQUALS,lib3.value,null)) return lib3.value.toString();
        return this.unit != null ? `${this.numberToString()} ${this.unit}` : this.numberToString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    numberToString() : string {
        if (op(Op.EQUALS,lib3.value,null)) return lib3.value.toString();
        return `${(op(Op.TIMES,lib3.value.clamp(0.0,1.0),100.0)).toStringAsFixed(1)}%`;
    }
}

export class properties {
    private static __$message;
    static get message() { 
        return this.__$message;
    }
    static set message(__$value : any)  { 
        this.__$message = __$value;
    }
    ,private static __$level;
    static get level() { 
        return this.__$level;
    }
    static set level(__$value : any)  { 
        this.__$level = __$value;
    }

    private static __$sparseTextConfiguration : TextTreeConfiguration;
    static get sparseTextConfiguration() : TextTreeConfiguration { 
        if (this.__$sparseTextConfiguration===undefined) {
            this.__$sparseTextConfiguration = TextTreeConfiguration({
                prefixLineOne : '├─',prefixOtherLines : ' ',prefixLastChildLineOne : '└─',linkCharacter : '│',propertyPrefixIfChildren : '│ ',propertyPrefixNoChildren : '  ',prefixOtherLinesRootNode : ' '});
        }
        return this.__$sparseTextConfiguration;
    }
    static set sparseTextConfiguration(__$value : TextTreeConfiguration)  { 
        this.__$sparseTextConfiguration = __$value;
    }

    private static __$dashedTextConfiguration : TextTreeConfiguration;
    static get dashedTextConfiguration() : TextTreeConfiguration { 
        if (this.__$dashedTextConfiguration===undefined) {
            this.__$dashedTextConfiguration = TextTreeConfiguration({
                prefixLineOne : '╎╌',prefixLastChildLineOne : '└╌',prefixOtherLines : ' ',linkCharacter : '╎',propertyPrefixIfChildren : '│ ',propertyPrefixNoChildren : '  ',prefixOtherLinesRootNode : ' '});
        }
        return this.__$dashedTextConfiguration;
    }
    static set dashedTextConfiguration(__$value : TextTreeConfiguration)  { 
        this.__$dashedTextConfiguration = __$value;
    }

    private static __$denseTextConfiguration : TextTreeConfiguration;
    static get denseTextConfiguration() : TextTreeConfiguration { 
        if (this.__$denseTextConfiguration===undefined) {
            this.__$denseTextConfiguration = TextTreeConfiguration({
                propertySeparator : ', ',beforeProperties : '(',afterProperties : ')',lineBreakProperties : false,prefixLineOne : '├',prefixOtherLines : '',prefixLastChildLineOne : '└',linkCharacter : '│',propertyPrefixIfChildren : '│',propertyPrefixNoChildren : ' ',prefixOtherLinesRootNode : '',addBlankLineIfNoChildren : false,isBlankLineBetweenPropertiesAndChildren : false});
        }
        return this.__$denseTextConfiguration;
    }
    static set denseTextConfiguration(__$value : TextTreeConfiguration)  { 
        this.__$denseTextConfiguration = __$value;
    }

    private static __$transitionTextConfiguration : TextTreeConfiguration;
    static get transitionTextConfiguration() : TextTreeConfiguration { 
        if (this.__$transitionTextConfiguration===undefined) {
            this.__$transitionTextConfiguration = TextTreeConfiguration({
                prefixLineOne : '╞═╦══ ',prefixLastChildLineOne : '╘═╦══ ',prefixOtherLines : ' ║ ',footer : ' ╚═══════════\n',linkCharacter : '│',propertyPrefixIfChildren : '',propertyPrefixNoChildren : '',prefixOtherLinesRootNode : '',afterName : ' ═══',afterDescriptionIfBody : ':',bodyIndent : '  ',isNameOnOwnLine : true,addBlankLineIfNoChildren : false,isBlankLineBetweenPropertiesAndChildren : false});
        }
        return this.__$transitionTextConfiguration;
    }
    static set transitionTextConfiguration(__$value : TextTreeConfiguration)  { 
        this.__$transitionTextConfiguration = __$value;
    }

    private static __$whitespaceTextConfiguration : TextTreeConfiguration;
    static get whitespaceTextConfiguration() : TextTreeConfiguration { 
        if (this.__$whitespaceTextConfiguration===undefined) {
            this.__$whitespaceTextConfiguration = TextTreeConfiguration({
                prefixLineOne : '',prefixLastChildLineOne : '',prefixOtherLines : ' ',prefixOtherLinesRootNode : '  ',bodyIndent : '',propertyPrefixIfChildren : '',propertyPrefixNoChildren : '',linkCharacter : ' ',addBlankLineIfNoChildren : false,afterDescriptionIfBody : ':',isBlankLineBetweenPropertiesAndChildren : false});
        }
        return this.__$whitespaceTextConfiguration;
    }
    static set whitespaceTextConfiguration(__$value : TextTreeConfiguration)  { 
        this.__$whitespaceTextConfiguration = __$value;
    }

    private static __$singleLineTextConfiguration : TextTreeConfiguration;
    static get singleLineTextConfiguration() : TextTreeConfiguration { 
        if (this.__$singleLineTextConfiguration===undefined) {
            this.__$singleLineTextConfiguration = TextTreeConfiguration({
                propertySeparator : ', ',beforeProperties : '(',afterProperties : ')',prefixLineOne : '',prefixOtherLines : '',prefixLastChildLineOne : '',lineBreak : '',lineBreakProperties : false,addBlankLineIfNoChildren : false,showChildren : false,propertyPrefixIfChildren : '',propertyPrefixNoChildren : '',linkCharacter : '',prefixOtherLinesRootNode : ''});
        }
        return this.__$singleLineTextConfiguration;
    }
    static set singleLineTextConfiguration(__$value : TextTreeConfiguration)  { 
        this.__$singleLineTextConfiguration = __$value;
    }

    private static __$kNoDefaultValue : _NoDefaultValue;
    static get kNoDefaultValue() : _NoDefaultValue { 
        if (this.__$kNoDefaultValue===undefined) {
            this.__$kNoDefaultValue = _NoDefaultValue();
        }
        return this.__$kNoDefaultValue;
    }
    static set kNoDefaultValue(__$value : _NoDefaultValue)  { 
        this.__$kNoDefaultValue = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$name;
    static get name() { 
        return this.__$name;
    }
    static set name(__$value : any)  { 
        this.__$name = __$value;
    }
    ,private static __$null;
    static get null() { 
        return this.__$null;
    }
    static set null(__$value : any)  { 
        this.__$null = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$DiagnosticableTreeMixin : any;
    static get DiagnosticableTreeMixin() : any { 
        return this.__$DiagnosticableTreeMixin;
    }
    static set DiagnosticableTreeMixin(__$value : any)  { 
        this.__$DiagnosticableTreeMixin = __$value;
    }

}
