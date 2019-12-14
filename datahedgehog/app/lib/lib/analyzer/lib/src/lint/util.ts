/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/lint/util.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";
import * as io from "@dart2ts/dart/io";

export var createLibraryNamePrefix : (_namedArguments? : {libraryPath? : string,projectRoot? : string,packageName? : string}) => string = (_namedArguments? : {libraryPath? : string,projectRoot? : string,packageName? : string}) : string =>  {
    let {libraryPath,projectRoot,packageName} = Object.assign({
    }, _namedArguments );
    let libraryDirectory = lib3.properties.posix.dirname(libraryPath);
    let path = lib3.properties.posix.relative(libraryDirectory,{
        from : projectRoot});
    let segments = lib3.split(path);
    if (segments[0] == 'lib') {
        path = lib3.properties.posix.joinAll(segments.sublist(1));
    }
    path = new core.DartString(path).replaceAll('/','.');
    if (new core.DartString(path).isNotEmpty) {
        path = `.${path}`;
    }
    return `${packageName}${path}`;
};
export var isDartFileName : (fileName : string) => boolean = (fileName : string) : boolean =>  {
    return new core.DartString(fileName).endsWith('.dart');
};
export var isIdentifier : (name : string) => boolean = (name : string) : boolean =>  {
    return properties._identifier.hasMatch(name);
};
export var isJustUnderscores : (name : string) => boolean = (name : string) : boolean =>  {
    return properties._underscores.hasMatch(name);
};
export var isLowerCamelCase : (id : string) => boolean = (id : string) : boolean =>  {
    return new core.DartString(id).length == 1 && isUpperCase(new core.DartString(id).codeUnitAt(0)) || id == '_' || properties._lowerCamelCase.hasMatch(id);
};
export var isLowerCaseUnderScore : (id : string) => boolean = (id : string) : boolean =>  {
    return properties._lowerCaseUnderScore.hasMatch(id);
};
export var isLowerCaseUnderScoreWithDots : (id : string) => boolean = (id : string) : boolean =>  {
    return properties._lowerCaseUnderScoreWithDots.hasMatch(id);
};
export var isPubspecFileName : (fileName : string) => boolean = (fileName : string) : boolean =>  {
    return properties._pubspec.hasMatch(fileName);
};
export var isUpperCase : (c : number) => boolean = (c : number) : boolean =>  {
    return c >= 64 && c <= 90;
};
export namespace Spelunker {
    export type Constructors = 'Spelunker';
    export type Interface = Omit<Spelunker, Constructors>;
}
@DartClass
export class Spelunker {
    path : string;

    sink : io.IOSink;

    constructor(path : string,_namedArguments? : {sink? : io.IOSink}) {
    }
    @defaultConstructor
    Spelunker(path : string,_namedArguments? : {sink? : io.IOSink}) {
        let {sink} = Object.assign({
        }, _namedArguments );
        this.sink = (sink || io.properties.stdout);
        this.path = path;
    }
    spelunk() : void {
        let contents = new io.File(this.path).readAsStringSync();
        let errorListener = new _ErrorListener();
        let reader = new bare.createInstance(any,null,contents);
        let stringSource = new bare.createInstance(any,null,contents,this.path);
        let scanner = new bare.createInstance(any,null,stringSource,reader,errorListener);
        let startToken = scanner.tokenize();
        errorListener.throwIfErrors();
        let parser = new bare.createInstance(any,null,stringSource,errorListener);
        let node = parser.parseCompilationUnit(startToken);
        errorListener.throwIfErrors();
        let visitor = new _SourceVisitor(this.sink);
        node.accept(visitor);
    }
}

export namespace _ErrorListener {
    export type Constructors = '_ErrorListener';
    export type Interface = Omit<_ErrorListener, Constructors>;
}
@DartClass
@Implements(any)
export class _ErrorListener implements any.Interface {
    errors;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onError(error : any) : void {
        this.errors.add(error);
    }
    throwIfErrors() : void {
        if (this.errors.isNotEmpty) {
            throw new core.Exception(this.errors);
        }
    }
    constructor() {
    }
    @defaultConstructor
    _ErrorListener() {
        this.errors = new core.DartList.literal<any>();
    }
}

export namespace _SourceVisitor {
    export type Constructors = '_SourceVisitor';
    export type Interface = Omit<_SourceVisitor, Constructors>;
}
@DartClass
export class _SourceVisitor extends any {
    indent : number;

    sink : io.IOSink;

    constructor(sink : io.IOSink) {
    }
    @defaultConstructor
    _SourceVisitor(sink : io.IOSink) {
        this.indent = 0;
        this.sink = sink;
    }
    asString(node : any) : string {
        return this.typeInfo(node.runtimeType) + ` [${node.toString()}]`;
    }
    getPrecedingComments(token : any) : core.DartList<any> {
        let comments = new core.DartList.literal<any>();
        let comment = token.precedingComments;
        while (is(comment, any)){
            comments.add(comment);
            comment = comment.next;
        }
        return comments;
    }
    getTrailingComment(node : any) : string {
        let successor = node.endToken.next;
        if (successor != null) {
            let precedingComments = successor.precedingComments;
            if (precedingComments != null) {
                return precedingComments.toString();
            }
        }
        return '';
    }
    typeInfo(type : core.Type) : string {
        return type.toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) {
        this.write(node);
        ++this.indent;
        node.visitChildren(this);
        --this.indent;
        return null;
    }
    write(node : any) {
        let comments = this.getPrecedingComments(node.beginToken);
        comments.forEach((c : any) =>  {
            return this.sink.writeln(`${op(Op.TIMES,"  ",this.indent)}${c}`);
        });
        this.sink.writeln(`${op(Op.TIMES,"  ",this.indent)}${this.asString(node)} ${this.getTrailingComment(node)}`);
    }
}

export class properties {
    private static __$_identifier;
    static get _identifier() { 
        if (this.__$_identifier===undefined) {
            this.__$_identifier = new core.DartRegExp('^([(_|$)a-zA-Z]+([_a-zA-Z0-9])*)$');
        }
        return this.__$_identifier;
    }
    static set _identifier(__$value : any)  { 
        this.__$_identifier = __$value;
    }

    private static __$_lowerCamelCase;
    static get _lowerCamelCase() { 
        if (this.__$_lowerCamelCase===undefined) {
            this.__$_lowerCamelCase = new core.DartRegExp('^(_)*[?$a-z][a-z0-9?$]*([A-Z][a-z0-9?$]*)*$');
        }
        return this.__$_lowerCamelCase;
    }
    static set _lowerCamelCase(__$value : any)  { 
        this.__$_lowerCamelCase = __$value;
    }

    private static __$_lowerCaseUnderScore;
    static get _lowerCaseUnderScore() { 
        if (this.__$_lowerCaseUnderScore===undefined) {
            this.__$_lowerCaseUnderScore = new core.DartRegExp('^([a-z]+([_]?[a-z0-9]+)*)+$');
        }
        return this.__$_lowerCaseUnderScore;
    }
    static set _lowerCaseUnderScore(__$value : any)  { 
        this.__$_lowerCaseUnderScore = __$value;
    }

    private static __$_lowerCaseUnderScoreWithDots;
    static get _lowerCaseUnderScoreWithDots() { 
        if (this.__$_lowerCaseUnderScoreWithDots===undefined) {
            this.__$_lowerCaseUnderScoreWithDots = new core.DartRegExp('^[a-z][_a-z0-9]*(\.[a-z][_a-z0-9]*)*$');
        }
        return this.__$_lowerCaseUnderScoreWithDots;
    }
    static set _lowerCaseUnderScoreWithDots(__$value : any)  { 
        this.__$_lowerCaseUnderScoreWithDots = __$value;
    }

    private static __$_pubspec;
    static get _pubspec() { 
        if (this.__$_pubspec===undefined) {
            this.__$_pubspec = new core.DartRegExp('^[_]?pubspec\.yaml$');
        }
        return this.__$_pubspec;
    }
    static set _pubspec(__$value : any)  { 
        this.__$_pubspec = __$value;
    }

    private static __$_underscores;
    static get _underscores() { 
        if (this.__$_underscores===undefined) {
            this.__$_underscores = new core.DartRegExp('^[_]+$');
        }
        return this.__$_underscores;
    }
    static set _underscores(__$value : any)  { 
        this.__$_underscores = __$value;
    }

}
