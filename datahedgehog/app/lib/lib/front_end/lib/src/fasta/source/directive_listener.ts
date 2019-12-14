/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/source/directive_listener.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../parser/listener";
import * as lib4 from "./../../scanner/token";
import * as lib5 from "./../quote";
import * as lib6 from "./../parser/identifier_context";
import * as lib7 from "./../fasta_codes";

export namespace DirectiveListener {
    export type Constructors = lib3.Listener.Constructors | 'DirectiveListener';
    export type Interface = Omit<DirectiveListener, Constructors>;
}
@DartClass
export class DirectiveListener extends lib3.Listener {
    imports : core.DartList<NamespaceDirective>;

    exports : core.DartList<NamespaceDirective>;

    parts : core.DartSet<string>;

    _inPart : boolean;

    _uri : string;

    _combinators : core.DartList<NamespaceCombinator>;

    _combinatorNames : core.DartList<string>;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DirectiveListener() {
        this.imports = new core.DartList.literal<NamespaceDirective>();
        this.exports = new core.DartList.literal<NamespaceDirective>();
        this.parts = new core.DartSet<string>();
        this._inPart = false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginExport(export : lib4.Token) {
        this._combinators = new core.DartList.literal<NamespaceCombinator>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginHide(hide : lib4.Token) : void {
        this._combinatorNames = new core.DartList.literal<string>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginImport(import : lib4.Token) {
        this._combinators = new core.DartList.literal<NamespaceCombinator>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginLiteralString(token : lib4.Token) : void {
        if (this._combinators != null || this._inPart) {
            this._uri = lib5.unescapeString(token.lexeme);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginPart(part : lib4.Token) {
        this._inPart = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginShow(show : lib4.Token) : void {
        this._combinatorNames = new core.DartList.literal<string>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endExport(export : lib4.Token,semicolon : lib4.Token) {
        this.exports.add(new NamespaceDirective.export(this._uri,this._combinators));
        this._uri = null;
        this._combinators = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endHide(hide : lib4.Token) : void {
        this._combinators.add(new NamespaceCombinator.hide(this._combinatorNames));
        this._combinatorNames = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endImport(import : lib4.Token,deferred : lib4.Token,asKeyword : lib4.Token,semicolon : lib4.Token) {
        this.imports.add(new NamespaceDirective.import(this._uri,this._combinators));
        this._uri = null;
        this._combinators = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endPart(part : lib4.Token,semicolon : lib4.Token) {
        this.parts.add(this._uri);
        this._uri = null;
        this._inPart = false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endShow(show : lib4.Token) : void {
        this._combinators.add(new NamespaceCombinator.show(this._combinatorNames));
        this._combinatorNames = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleIdentifier(token : lib4.Token,context : lib6.IdentifierContext) : void {
        if (this._combinatorNames != null && op(Op.EQUALS,context,lib6.IdentifierContext.combinator)) {
            this._combinatorNames.add(token.lexeme);
        }
    }
    handleNativeClause(token : lib4.Token) : lib4.Token {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleUnrecoverableError(token : lib4.Token,message : lib7.FastaMessage) : lib4.Token {
        if (op(Op.EQUALS,message.code,lib7.properties.codeExpectedBlockToSkip)) {
            let recover : lib4.Token = this.handleNativeClause(token);
            if (recover != null) return recover;
        }
        return super.handleUnrecoverableError(token,message);
    }
}

export namespace NamespaceCombinator {
    export type Constructors = 'hide' | 'show';
    export type Interface = Omit<NamespaceCombinator, Constructors>;
}
@DartClass
export class NamespaceCombinator {
    isShow : boolean;

    names : core.DartSet<string>;

    @namedConstructor
    hide(names : core.DartList<string>) {
        this.isShow = false;
        this.names = names.toSet();
    }
    static hide : new(names : core.DartList<string>) => NamespaceCombinator;

    @namedConstructor
    show(names : core.DartList<string>) {
        this.isShow = true;
        this.names = names.toSet();
    }
    static show : new(names : core.DartList<string>) => NamespaceCombinator;

}

export namespace NamespaceDirective {
    export type Constructors = 'export' | 'import';
    export type Interface = Omit<NamespaceDirective, Constructors>;
}
@DartClass
export class NamespaceDirective {
    isImport : boolean;

    uri : string;

    combinators : core.DartList<NamespaceCombinator>;

    @namedConstructor
    export(uri : string,combinators : core.DartList<NamespaceCombinator>) {
        this.isImport = false;
        this.uri = uri;
        this.combinators = combinators;
    }
    static export : new(uri : string,combinators : core.DartList<NamespaceCombinator>) => NamespaceDirective;

    @namedConstructor
    import(uri : string,combinators : core.DartList<NamespaceCombinator>) {
        this.isImport = true;
        this.uri = uri;
        this.combinators = combinators;
    }
    static import : new(uri : string,combinators : core.DartList<NamespaceCombinator>) => NamespaceDirective;

}

export class properties {
}
