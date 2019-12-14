/** Library asset:datahedgehog_monitor/lib/lib/foundation/licenses.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace LicenseParagraph {
    export type Constructors = 'LicenseParagraph';
    export type Interface = Omit<LicenseParagraph, Constructors>;
}
@DartClass
export class LicenseParagraph {
    constructor(text : string,indent : number) {
    }
    @defaultConstructor
    LicenseParagraph(text : string,indent : number) {
        this.text = text;
        this.indent = indent;
    }
    text : string;

    indent : number;

    private static __$centeredIndent : number;
    static get centeredIndent() : number { 
        if (this.__$centeredIndent===undefined) {
            this.__$centeredIndent = -1;
        }
        return this.__$centeredIndent;
    }

}

export namespace LicenseEntry {
    export type Constructors = 'LicenseEntry';
    export type Interface = Omit<LicenseEntry, Constructors>;
}
@DartClass
export class LicenseEntry {
    constructor() {
    }
    @defaultConstructor
    LicenseEntry() {
    }
    @AbstractProperty
    get packages() : core.DartIterable<string>{ throw 'abstract'}
    @AbstractProperty
    get paragraphs() : core.DartIterable<LicenseParagraph>{ throw 'abstract'}
}

export enum _LicenseEntryWithLineBreaksParserState {
    beforeParagraph,
    inParagraph
}

export namespace LicenseRegistry {
    export type Constructors = '_';
    export type Interface = Omit<LicenseRegistry, Constructors>;
}
@DartClass
export class LicenseRegistry {
    @namedConstructor
    _() {
    }
    static _ : new() => LicenseRegistry;

    private static __$_collectors : core.DartList<() => async.DartStream<LicenseEntry>>;
    static get _collectors() : core.DartList<() => async.DartStream<LicenseEntry>> { 
        return this.__$_collectors;
    }
    static set _collectors(__$value : core.DartList<() => async.DartStream<LicenseEntry>>)  { 
        this.__$_collectors = __$value;
    }

    static addLicense(collector : () => async.DartStream<LicenseEntry>) : void {
        LicenseRegistry._collectors = ( LicenseRegistry._collectors ) || ( new core.DartList.literal<() => async.DartStream<LicenseEntry>>() );
        LicenseRegistry._collectors.add(collector);
    }
    static get licenses() : async.DartStream<LicenseEntry> { 
        return async.stream<LicenseEntry>(()=>(async function*()  {
            if (LicenseRegistry._collectors == null) return;
            for(let collector of LicenseRegistry._collectors) yield* collector();
        }).call(this));
    }

}

export namespace LicenseEntryWithLineBreaks {
    export type Constructors = LicenseEntry.Constructors | 'LicenseEntryWithLineBreaks';
    export type Interface = Omit<LicenseEntryWithLineBreaks, Constructors>;
}
@DartClass
export class LicenseEntryWithLineBreaks extends LicenseEntry {
    constructor(packages : core.DartList<string>,text : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LicenseEntryWithLineBreaks(packages : core.DartList<string>,text : string) {
        this.packages = packages;
        this.text = text;
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    packages : core.DartList<string>;

    text : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get paragraphs() : core.DartIterable<LicenseParagraph> { 
        return core.iter<LicenseParagraph>(()=>(function*()  {
            let lineStart : number = 0;
            let currentPosition : number = 0;
            let lastLineIndent : number = 0;
            let currentLineIndent : number = 0;
            let currentParagraphIndentation : number;
            let state : _LicenseEntryWithLineBreaksParserState = _LicenseEntryWithLineBreaksParserState.beforeParagraph;
            let lines : core.DartList<string> = new core.DartList.literal<string>();
            var addLine : () => void = () : void =>  {
                /* TODO (AssertStatementImpl) : assert (lineStart < currentPosition); */;
                lines.add(new core.DartString(this.text).substring(lineStart,currentPosition));
            };
            var getParagraph : () => LicenseParagraph = () : LicenseParagraph =>  {
                /* TODO (AssertStatementImpl) : assert (lines.isNotEmpty); */;
                /* TODO (AssertStatementImpl) : assert (currentParagraphIndentation != null); */;
                let result : LicenseParagraph = LicenseParagraph(lines.join(' '),currentParagraphIndentation);
                /* TODO (AssertStatementImpl) : assert (result.text.trimLeft() == result.text); */;
                /* TODO (AssertStatementImpl) : assert (result.text.isNotEmpty); */;
                lines.clear();
                return result;
            };
            while (currentPosition < new core.DartString(this.text).length){
                switch (state) {
                    case _LicenseEntryWithLineBreaksParserState.beforeParagraph:
                        /* TODO (AssertStatementImpl) : assert (lineStart == currentPosition); */;
                        switch (this.text[currentPosition]) {
                            case ' ':
                                lineStart = currentPosition + 1;
                                currentLineIndent += 1;
                                state = _LicenseEntryWithLineBreaksParserState.beforeParagraph;
                                break;
                            case '	':
                                lineStart = currentPosition + 1;
                                currentLineIndent += 8;
                                state = _LicenseEntryWithLineBreaksParserState.beforeParagraph;
                                break;
                            case '\n':
                            case '':
                                if (lines.isNotEmpty) {
                                    yield getParagraph();
                                }
                                lastLineIndent = 0;
                                currentLineIndent = 0;
                                currentParagraphIndentation = null;
                                lineStart = currentPosition + 1;
                                state = _LicenseEntryWithLineBreaksParserState.beforeParagraph;
                                break;
                            case '[':
                                currentLineIndent += 1;
                                continue;
                            default:
                                if (lines.isNotEmpty && currentLineIndent > lastLineIndent) {
                                    yield getParagraph();
                                    currentParagraphIndentation = null;
                                }
                                if (currentParagraphIndentation == null) {
                                    if (currentLineIndent > 10) currentParagraphIndentation = LicenseParagraph.centeredIndent;else currentParagraphIndentation = op(Op.QUOTIENT,currentLineIndent,3);
                                }
                                state = _LicenseEntryWithLineBreaksParserState.inParagraph;
                        }
                        break;
                    case _LicenseEntryWithLineBreaksParserState.inParagraph:
                        switch (this.text[currentPosition]) {
                            case '\n':
                                addLine();
                                lastLineIndent = currentLineIndent;
                                currentLineIndent = 0;
                                lineStart = currentPosition + 1;
                                state = _LicenseEntryWithLineBreaksParserState.beforeParagraph;
                                break;
                            case '':
                                addLine();
                                yield getParagraph();
                                lastLineIndent = 0;
                                currentLineIndent = 0;
                                currentParagraphIndentation = null;
                                lineStart = currentPosition + 1;
                                state = _LicenseEntryWithLineBreaksParserState.beforeParagraph;
                                break;
                            default:
                                state = _LicenseEntryWithLineBreaksParserState.inParagraph;
                        }
                        break;
                }
                currentPosition += 1;
            }
            switch (state) {
                case _LicenseEntryWithLineBreaksParserState.beforeParagraph:
                    if (lines.isNotEmpty) {
                        yield getParagraph();
                    }
                    break;
                case _LicenseEntryWithLineBreaksParserState.inParagraph:
                    addLine();
                    yield getParagraph();
                    break;
            }
        }).call(this));
    }

}

export class properties {
}
