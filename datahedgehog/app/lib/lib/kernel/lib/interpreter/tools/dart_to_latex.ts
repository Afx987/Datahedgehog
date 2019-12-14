/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/interpreter/tools/dart_to_latex.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var main : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) =>  {
    if (arguments.length != 2) {
        io.properties.stderr.writeln("usage: dart dart_to_latex.dart input.dart output.tex");
        io.exit(1);
    }
    let inputFilename : string = arguments[0];
    let outputFilename : string = arguments[1];
    let parser : Extractor = new Extractor(inputFilename,outputFilename);
    parser.run();
};
export namespace Extractor {
    export type Constructors = 'Extractor';
    export type Interface = Omit<Extractor, Constructors>;
}
@DartClass
export class Extractor {
    private static __$latexMarker : string;
    static get latexMarker() : string { 
        if (this.__$latexMarker===undefined) {
            this.__$latexMarker = "LATEX";
        }
        return this.__$latexMarker;
    }
    static set latexMarker(__$value : string)  { 
        this.__$latexMarker = __$value;
    }

    private static __$latexNextMarker : string;
    static get latexNextMarker() : string { 
        if (this.__$latexNextMarker===undefined) {
            this.__$latexNextMarker = "LATEX-NEXT";
        }
        return this.__$latexNextMarker;
    }
    static set latexNextMarker(__$value : string)  { 
        this.__$latexNextMarker = __$value;
    }

    private static __$commentBegin : string;
    static get commentBegin() : string { 
        if (this.__$commentBegin===undefined) {
            this.__$commentBegin = "/*";
        }
        return this.__$commentBegin;
    }
    static set commentBegin(__$value : string)  { 
        this.__$commentBegin = __$value;
    }

    private static __$commentEnd : string;
    static get commentEnd() : string { 
        if (this.__$commentEnd===undefined) {
            this.__$commentEnd = "*/";
        }
        return this.__$commentEnd;
    }
    static set commentEnd(__$value : string)  { 
        this.__$commentEnd = __$value;
    }

    private static __$oneLineCommentBegin : string;
    static get oneLineCommentBegin() : string { 
        if (this.__$oneLineCommentBegin===undefined) {
            this.__$oneLineCommentBegin = "//";
        }
        return this.__$oneLineCommentBegin;
    }
    static set oneLineCommentBegin(__$value : string)  { 
        this.__$oneLineCommentBegin = __$value;
    }

    inputFilename : string;

    outputFilename : string;

    inputFile : io.File;

    outputFile : io.File;

    input : string;

    constructor(inputFilename : string,outputFilename : string) {
    }
    @defaultConstructor
    Extractor(inputFilename : string,outputFilename : string) {
        this.inputFile = new io.File(inputFilename);
        this.outputFile = new io.File(outputFilename);
        this.inputFilename = inputFilename;
        this.outputFilename = outputFilename;
        this.outputFile.writeAsStringSync("",{
            mode : io.FileMode.WRITE,flush : true});
    }
    findCommentEnd(start : number) : number {
        /* TODO (AssertStatementImpl) : assert (start <= input.length); */;
        /* TODO (AssertStatementImpl) : assert (input.startsWith(commentBegin, start)); */;
        let balance : number = 1;
        let i : number = start + new core.DartString(Extractor.commentBegin).length;
        while (i < new core.DartString(this.input).length && balance > 0){
            if (new core.DartString(this.input).startsWith(Extractor.commentBegin,i)) {
                balance++;
                i += new core.DartString(Extractor.commentBegin).length;
            }else if (new core.DartString(this.input).startsWith(Extractor.commentEnd,i)) {
                balance--;
                i += new core.DartString(Extractor.commentEnd).length;
            }else {
                i++;
            }
        }
        if (balance > 0) {
            return -1;
        }
        return i;
    }
    extractOneLineCommentsFrom(text : string) : void {
        let lines : core.DartList<string> = new core.DartString(text).split("\n");
        let outputLines : core.DartList<string> = new core.DartList<string>();
        let i : number = 0;
        while (i < lines.length){
            let line : string = lines[i];
            if (new core.DartString(line).endsWith(Extractor.oneLineCommentBegin + Extractor.latexMarker)) {
                outputLines.add(new core.DartString(line).substring(0,new core.DartString(line).length - new core.DartString((Extractor.oneLineCommentBegin + Extractor.latexMarker)).length));
                i++;
            }else if (new core.DartString(line).endsWith(Extractor.oneLineCommentBegin + Extractor.latexNextMarker) && i + 1 < lines.length) {
                outputLines.add(lines[i + 1]);
                i += 2;
            }else {
                i++;
            }
        }
        if (outputLines.length > 0) {
            outputLines.insert(0,"\begin{verbatim}");
            outputLines.add("\end{verbatim}");
        }
        for(let line of outputLines) {
            this.outputFile.writeAsStringSync(`${line}\n`,{
                mode : io.FileMode.APPEND});
        }
    }
    extractOneLineComments() : void {
        let endIndex : number = new core.DartString(this.input).indexOf(Extractor.commentBegin);
        while (endIndex != -1 && !new core.DartString(this.input).startsWith(Extractor.commentBegin + Extractor.latexMarker,endIndex)){
            endIndex = this.findCommentEnd(endIndex);
            if (endIndex != -1) {
                endIndex = new core.DartString(this.input).indexOf(Extractor.commentBegin,endIndex);
            }
        }
        if (endIndex == -1) {
            endIndex = new core.DartString(this.input).length;
        }
        this.extractOneLineCommentsFrom(new core.DartString(this.input).substring(0,endIndex));
        this.input = new core.DartString(this.input).substring(endIndex);
    }
    extractBlock() : void {
        let startIndex : number = new core.DartString(this.input).indexOf(Extractor.commentBegin);
        while (startIndex != -1 && !new core.DartString(this.input).startsWith(Extractor.commentBegin + Extractor.latexMarker,startIndex)){
            startIndex = this.findCommentEnd(startIndex);
            if (startIndex != -1) {
                startIndex = new core.DartString(this.input).indexOf(Extractor.commentBegin,startIndex);
            }
        }
        if (startIndex == -1) {
            startIndex = new core.DartString(this.input).length;
        }
        this.input = new core.DartString(this.input).substring(startIndex);
        if (new core.DartString(this.input).startsWith(Extractor.commentBegin + Extractor.latexMarker)) {
            let endIndex : number = this.findCommentEnd(0);
            if (endIndex == -1) {
                endIndex = new core.DartString(this.input).length;
            }
            let latexBeginIndex : number = new core.DartString((Extractor.commentBegin + Extractor.latexMarker)).length;
            let latexEndIndex : number = new core.DartString(new core.DartString(this.input).substring(0,endIndex)).endsWith(Extractor.commentEnd) ? endIndex - new core.DartString(Extractor.commentEnd).length : endIndex;
            this.outputFile.writeAsStringSync(new core.DartString(this.input).substring(latexBeginIndex,latexEndIndex) + "\n",{
                mode : io.FileMode.APPEND});
            this.input = new core.DartString(this.input).substring(endIndex);
        }
    }
    run() : void {
        this.input = this.inputFile.readAsStringSync();
        while (new core.DartString(this.input).length > 0){
            this.extractOneLineComments();
            if (new core.DartString(this.input).length > 0) this.extractBlock();
        }
    }
}

export class properties {
}
