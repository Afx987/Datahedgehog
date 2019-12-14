/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/text/ast_to_text.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../ast";
import * as lib4 from "./../visitor";
import * as lib5 from "./../import_table";

export var debugLibraryName : (node : lib3.Library) => string = (node : lib3.Library) : string =>  {
    return op(Op.EQUALS,node,null) ? 'null' : (node.name || properties.globalDebuggingNames.nameLibrary(node));
};
export var debugClassName : (node : lib3.Class) => string = (node : lib3.Class) : string =>  {
    return op(Op.EQUALS,node,null) ? 'null' : (node.name || properties.globalDebuggingNames.nameClass(node));
};
export var debugQualifiedClassName : (node : lib3.Class) => string = (node : lib3.Class) : string =>  {
    return debugLibraryName(node.enclosingLibrary) + '::' + debugClassName(node);
};
export var debugMemberName : (node : lib3.Member) => string = (node : lib3.Member) : string =>  {
    return (((t)=>(!!t)?t.name:null)(node.name) || properties.globalDebuggingNames.nameMember(node));
};
export var debugQualifiedMemberName : (node : lib3.Member) => string = (node : lib3.Member) : string =>  {
    if (node.enclosingClass != null) {
        return debugQualifiedClassName(node.enclosingClass) + '::' + debugMemberName(node);
    }else {
        return debugLibraryName(node.enclosingLibrary) + '::' + debugMemberName(node);
    }
};
export var debugTypeParameterName : (node : lib3.TypeParameter) => string = (node : lib3.TypeParameter) : string =>  {
    return (node.name || properties.globalDebuggingNames.nameTypeParameter(node));
};
export var debugQualifiedTypeParameterName : (node : lib3.TypeParameter) => string = (node : lib3.TypeParameter) : string =>  {
    if (is(node.parent, lib3.Class)) {
        return debugQualifiedClassName(node.parent) + '::' + debugTypeParameterName(node);
    }
    if (is(node.parent, lib3.Member)) {
        return debugQualifiedMemberName(node.parent) + '::' + debugTypeParameterName(node);
    }
    return debugTypeParameterName(node);
};
export var debugVariableDeclarationName : (node : lib3.VariableDeclaration) => string = (node : lib3.VariableDeclaration) : string =>  {
    return (node.name || properties.globalDebuggingNames.nameVariable(node));
};
export var debugNodeToString : (node : lib3.Node) => string = (node : lib3.Node) : string =>  {
    let buffer : core.DartStringBuffer = new core.DartStringBuffer();
    new Printer(buffer,{
        syntheticNames : properties.globalDebuggingNames}).writeNode(node);
    return `${buffer}`;
};
export var programToString : (node : lib3.Program) => string = (node : lib3.Program) : string =>  {
    let buffer : core.DartStringBuffer = new core.DartStringBuffer();
    new Printer(buffer,{
        syntheticNames : new NameSystem()}).writeProgramFile(node);
    return `${buffer}`;
};
export var procedureKindToString : (kind : lib3.ProcedureKind) => string = (kind : lib3.ProcedureKind) : string =>  {
    switch (kind) {
        case lib3.ProcedureKind.Method:
            return 'method';
        case lib3.ProcedureKind.Getter:
            return 'get';
        case lib3.ProcedureKind.Setter:
            return 'set';
        case lib3.ProcedureKind.Operator:
            return 'operator';
        case lib3.ProcedureKind.Factory:
            return 'factory';
    }
    throw `illegal ProcedureKind: ${kind}`;
};
export namespace Namer {
    export type Constructors = 'Namer';
    export type Interface<T> = Omit<Namer<T>, Constructors>;
}
@DartClass
export class Namer<T> {
    index : number;

    prefix : string;

    map : core.DartMap<T,string>;

    constructor(prefix : string) {
    }
    @defaultConstructor
    Namer(prefix : string) {
        this.index = 0;
        this.map = new core.DartMap.literal([
        ]);
        this.prefix = prefix;
    }
    getName(key : T) : string {
        return this.map.putIfAbsent(key,() =>  {
            return `${this.prefix}${++this.index}`;
        });
    }
}

export namespace Disambiguator {
    export type Constructors = 'Disambiguator';
    export type Interface<T> = Omit<Disambiguator<T>, Constructors>;
}
@DartClass
export class Disambiguator<T> {
    names : core.DartMap<T,string>;

    usedNames : core.DartSet<string>;

    disambiguate(key : T,proposeName : <T>() => string) : string {
        return this.names.putIfAbsent(key,() =>  {
            let proposedName = proposeName();
            if (this.usedNames.add(proposedName)) return proposedName;
            let i : number = 2;
            while (!this.usedNames.add(`${proposedName}${i}`)){
                ++i;
            }
            return `${proposedName}${i}`;
        });
    }
    constructor() {
    }
    @defaultConstructor
    Disambiguator() {
        this.names = new core.DartMap.literal([
        ]);
        this.usedNames = new core.DartSet<string>();
    }
}

export namespace NameSystem {
    export type Constructors = 'NameSystem';
    export type Interface = Omit<NameSystem, Constructors>;
}
@DartClass
export class NameSystem {
    variables : Namer<lib3.VariableDeclaration>;

    members : Namer<lib3.Member>;

    classes : Namer<lib3.Class>;

    libraries : Namer<lib3.Library>;

    typeParameters : Namer<lib3.TypeParameter>;

    labels : Namer<lib3.TreeNode>;

    prefixes : Disambiguator<lib3.Library>;

    nameVariable(node : lib3.VariableDeclaration) {
        return this.variables.getName(node);
    }
    nameMember(node : lib3.Member) {
        return this.members.getName(node);
    }
    nameClass(node : lib3.Class) {
        return this.classes.getName(node);
    }
    nameLibrary(node : lib3.Library) {
        return this.libraries.getName(node);
    }
    nameTypeParameter(node : lib3.TypeParameter) {
        return this.typeParameters.getName(node);
    }
    nameSwitchCase(node : lib3.SwitchCase) {
        return this.labels.getName(node);
    }
    nameLabeledStatement(node : lib3.LabeledStatement) {
        return this.labels.getName(node);
    }
    nameLibraryPrefix(node : lib3.Library,_namedArguments? : {proposedName? : string}) {
        let {proposedName} = Object.assign({
        }, _namedArguments );
        return this.prefixes.disambiguate(node,() =>  {
            if (proposedName != null) return proposedName;
            if (node.name != null) return this.abbreviateName(node.name);
            if (node.importUri != null) {
                let path = node.importUri.hasEmptyPath ? `${node.importUri}` : node.importUri.pathSegments.last;
                if (new core.DartString(path).endsWith('.dart')) {
                    path = new core.DartString(path).substring(0,new core.DartString(path).length - new core.DartString('.dart').length);
                }
                return this.abbreviateName(path);
            }
            return 'L';
        });
    }
    punctuation : core.DartRegExp;

    abbreviateName(name : string) : string {
        let dot : number = new core.DartString(name).lastIndexOf(this.punctuation);
        if (dot != -1) {
            name = new core.DartString(name).substring(dot + 1);
        }
        if (new core.DartString(name).length > 4) {
            return new core.DartString(name).substring(0,3);
        }
        return name;
    }
    constructor() {
    }
    @defaultConstructor
    NameSystem() {
        this.variables = new Namer<lib3.VariableDeclaration>('#t');
        this.members = new Namer<lib3.Member>('#m');
        this.classes = new Namer<lib3.Class>('#class');
        this.libraries = new Namer<lib3.Library>('#lib');
        this.typeParameters = new Namer<lib3.TypeParameter>('#T');
        this.labels = new Namer<lib3.TreeNode>('#L');
        this.prefixes = new Disambiguator<lib3.Library>();
        this.punctuation = new core.DartRegExp('[.:]');
    }
}

export namespace Annotator {
    export type Constructors = 'Annotator';
    export type Interface = Omit<Annotator, Constructors>;
}
@DartClass
export class Annotator {
    @Abstract
    annotateVariable(printer : Printer,node : lib3.VariableDeclaration) : string{ throw 'abstract'}
    @Abstract
    annotateReturn(printer : Printer,node : lib3.FunctionNode) : string{ throw 'abstract'}
    @Abstract
    annotateField(printer : Printer,node : lib3.Field) : string{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Annotator() {
    }
}

export namespace Printer {
    export type Constructors = lib4.Visitor.Constructors | 'Printer' | '_inner';
    export type Interface = Omit<Printer, Constructors>;
}
@DartClass
export class Printer extends lib4.Visitor<core.Null> {
    syntheticNames : NameSystem;

    sink : core.DartStringSink;

    annotator : Annotator;

    importTable : lib5.ImportTable;

    indentation : number;

    column : number;

    showExternal : boolean;

    showOffsets : boolean;

    private static __$SPACE : number;
    static get SPACE() : number { 
        if (this.__$SPACE===undefined) {
            this.__$SPACE = 0;
        }
        return this.__$SPACE;
    }
    static set SPACE(__$value : number)  { 
        this.__$SPACE = __$value;
    }

    private static __$WORD : number;
    static get WORD() : number { 
        if (this.__$WORD===undefined) {
            this.__$WORD = 1;
        }
        return this.__$WORD;
    }
    static set WORD(__$value : number)  { 
        this.__$WORD = __$value;
    }

    private static __$SYMBOL : number;
    static get SYMBOL() : number { 
        if (this.__$SYMBOL===undefined) {
            this.__$SYMBOL = 2;
        }
        return this.__$SYMBOL;
    }
    static set SYMBOL(__$value : number)  { 
        this.__$SYMBOL = __$value;
    }

    state : number;

    constructor(sink : core.DartStringSink,_namedArguments? : {syntheticNames? : NameSystem,showExternal? : boolean,showOffsets? : boolean,importTable? : lib5.ImportTable,annotator? : Annotator}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Printer(sink : core.DartStringSink,_namedArguments? : {syntheticNames? : NameSystem,showExternal? : boolean,showOffsets? : boolean,importTable? : lib5.ImportTable,annotator? : Annotator}) {
        let {syntheticNames,showExternal,showOffsets,importTable,annotator} = Object.assign({
            "showOffsets" : false}, _namedArguments );
        this.indentation = 0;
        this.column = 0;
        this.state = Printer.SPACE;
        this.syntheticNames = (syntheticNames || new NameSystem());
        this.sink = sink;
        this.showExternal = showExternal;
        this.showOffsets = showOffsets;
        this.importTable = importTable;
        this.annotator = annotator;
    }
    @namedConstructor
    _inner(parent : Printer,importTable : lib5.ImportTable) {
        this.indentation = 0;
        this.column = 0;
        this.state = Printer.SPACE;
        this.sink = parent.sink;
        this.syntheticNames = parent.syntheticNames;
        this.annotator = parent.annotator;
        this.showExternal = parent.showExternal;
        this.showOffsets = parent.showOffsets;
        this.importTable = importTable;
    }
    static _inner : new(parent : Printer,importTable : lib5.ImportTable) => Printer;

    getLibraryName(node : lib3.Library) : string {
        return (node.name || this.syntheticNames.nameLibrary(node));
    }
    getLibraryReference(node : lib3.Library) : string {
        if (op(Op.EQUALS,node,null)) return '<No Library>';
        if (this.importTable != null && this.importTable.getImportIndex(node) != -1) {
            return this.syntheticNames.nameLibraryPrefix(node);
        }
        return this.getLibraryName(node);
    }
    getClassName(node : lib3.Class) : string {
        return (node.name || this.syntheticNames.nameClass(node));
    }
    getClassReference(node : lib3.Class) : string {
        if (op(Op.EQUALS,node,null)) return '<No Class>';
        let name : string = this.getClassName(node);
        let library : string = this.getLibraryReference(node.enclosingLibrary);
        return `${library}::${name}`;
    }
    getTypedefReference(node : lib3.Typedef) : string {
        if (op(Op.EQUALS,node,null)) return '<No Typedef>';
        let library : string = this.getLibraryReference(node.enclosingLibrary);
        return `${library}::${node.name}`;
    }
    private static __$emptyNameString : string;
    static get emptyNameString() : string { 
        if (this.__$emptyNameString===undefined) {
            this.__$emptyNameString = '•';
        }
        return this.__$emptyNameString;
    }
    static set emptyNameString(__$value : string)  { 
        this.__$emptyNameString = __$value;
    }

    private static __$emptyName : lib3.Name;
    static get emptyName() : lib3.Name { 
        if (this.__$emptyName===undefined) {
            this.__$emptyName = new lib3.Name(Printer.emptyNameString);
        }
        return this.__$emptyName;
    }
    static set emptyName(__$value : lib3.Name)  { 
        this.__$emptyName = __$value;
    }

    getMemberName(node : lib3.Member) : lib3.Name {
        if (((t)=>(!!t)?t.name:null)(node.name) == '') return Printer.emptyName;
        if (node.name != null) return node.name;
        return new lib3.Name(this.syntheticNames.nameMember(node));
    }
    getMemberReference(node : lib3.Member) : string {
        if (op(Op.EQUALS,node,null)) return '<No Member>';
        let name : string = this.getMemberName(node).name;
        if (is(node.parent, lib3.Class)) {
            let className : string = this.getClassReference(node.parent);
            return `${className}::${name}`;
        }else {
            let library : string = this.getLibraryReference(node.enclosingLibrary);
            return `${library}::${name}`;
        }
    }
    getVariableName(node : lib3.VariableDeclaration) : string {
        return (node.name || this.syntheticNames.nameVariable(node));
    }
    getVariableReference(node : lib3.VariableDeclaration) : string {
        if (op(Op.EQUALS,node,null)) return '<No VariableDeclaration>';
        return this.getVariableName(node);
    }
    getTypeParameterName(node : lib3.TypeParameter) : string {
        return (node.name || this.syntheticNames.nameTypeParameter(node));
    }
    getTypeParameterReference(node : lib3.TypeParameter) : string {
        if (op(Op.EQUALS,node,null)) return '<No TypeParameter>';
        let name : string = this.getTypeParameterName(node);
        if (is(node.parent, lib3.FunctionNode) && is(node.parent.parent, lib3.Member)) {
            let member : string = this.getMemberReference(node.parent.parent);
            return `${member}::${name}`;
        }else if (is(node.parent, lib3.Class)) {
            let className : string = this.getClassReference(node.parent);
            return `${className}::${name}`;
        }else {
            return name;
        }
    }
    writeLibraryFile(library : lib3.Library) : void {
        this.writeAnnotationList(library.annotations);
        this.writeWord('library');
        if (library.name != null) {
            this.writeWord(library.name);
        }
        this.endLine(';');
        let imports = new lib5.LibraryImportTable(library);
        for(let library of imports.importedLibraries) {
            let importPath = imports.getImportPath(library);
            if (importPath == "") {
                let prefix = this.syntheticNames.nameLibraryPrefix(library,{
                    proposedName : 'self'});
                this.endLine(`import self as ${prefix};`);
            }else {
                let prefix = this.syntheticNames.nameLibraryPrefix(library);
                this.endLine(`import "${importPath}" as ${prefix};`);
            }
        }
        for(let import of library.dependencies) {
            import.accept(this);
        }
        this.endLine();
        let inner = new Printer._inner(this,imports);
        library.dependencies.forEach(inner.writeNode.bind(inner));
        library.typedefs.forEach(inner.writeNode.bind(inner));
        library.classes.forEach(inner.writeNode.bind(inner));
        library.fields.forEach(inner.writeNode.bind(inner));
        library.procedures.forEach(inner.writeNode.bind(inner));
    }
    writeProgramFile(program : lib3.Program) : void {
        let imports : lib5.ImportTable = new lib5.ProgramImportTable(program);
        let inner = new Printer._inner(this,imports);
        this.writeWord('main');
        this.writeSpaced('=');
        inner.writeMemberReference(program.mainMethod);
        this.endLine(';');
        for(let library of program.libraries) {
            if (library.isExternal) {
                if (!this.showExternal) {
                    continue;
                }
                this.writeWord('external');
            }
            this.writeAnnotationList(library.annotations);
            this.writeWord('library');
            if (library.name != null) {
                this.writeWord(library.name);
            }
            if (library.importUri != null) {
                this.writeSpaced('from');
                this.writeWord(`"${library.importUri}"`);
            }
            let prefix = this.syntheticNames.nameLibraryPrefix(library);
            this.writeSpaced('as');
            this.writeWord(prefix);
            this.endLine(' {');
            ++inner.indentation;
            library.dependencies.forEach(inner.writeNode.bind(inner));
            library.typedefs.forEach(inner.writeNode.bind(inner));
            library.classes.forEach(inner.writeNode.bind(inner));
            library.fields.forEach(inner.writeNode.bind(inner));
            library.procedures.forEach(inner.writeNode.bind(inner));
            --inner.indentation;
            this.endLine('}');
        }
    }
    getPrecedence(node : lib3.TreeNode) : number {
        return Precedence.of(node);
    }
    write(string : string) : void {
        this.sink.write(string);
        this.column += new core.DartString(string).length;
    }
    writeSpace(string? : string) : void {
        string = string || ' ';
        this.write(string);
        this.state = Printer.SPACE;
    }
    ensureSpace() : void {
        if (this.state != Printer.SPACE) this.writeSpace();
    }
    writeSymbol(string : string) : void {
        this.write(string);
        this.state = Printer.SYMBOL;
    }
    writeSpaced(string : string) : void {
        this.ensureSpace();
        this.write(string);
        this.writeSpace();
    }
    writeComma(string? : string) : void {
        string = string || ',';
        this.write(string);
        this.writeSpace();
    }
    writeWord(string : string) : void {
        if (new core.DartString(string).isEmpty) return;
        this.ensureWordBoundary();
        this.write(string);
        this.state = Printer.WORD;
    }
    ensureWordBoundary() : void {
        if (this.state == Printer.WORD) {
            this.writeSpace();
        }
    }
    writeIndentation() : void {
        this.writeSpace(op(Op.TIMES,'  ',this.indentation));
    }
    writeNode(node : lib3.Node) : void {
        if (op(Op.EQUALS,node,null)) {
            this.writeSymbol("<Null>");
        }else {
            if (this.showOffsets && is(node, lib3.TreeNode)) {
                this.writeWord(`[${node.fileOffset}]`);
            }
            node.accept(this);
        }
    }
    writeOptionalNode(node : lib3.Node) : void {
        if (node != null) {
            node.accept(this);
        }
    }
    writeAnnotatedType(type : lib3.DartType,annotation : string) : void {
        this.writeType(type);
        if (annotation != null) {
            this.write('/');
            this.write(annotation);
            this.state = Printer.WORD;
        }
    }
    writeType(type : lib3.DartType) : void {
        if (op(Op.EQUALS,type,null)) {
            core.print('<No DartType>');
        }else {
            type.accept(this);
        }
    }
    writeOptionalType(type : lib3.DartType) : void {
        if (type != null) {
            type.accept(this);
        }
    }
    visitSupertype(type : lib3.Supertype) {
        if (op(Op.EQUALS,type,null)) {
            core.print('<No Supertype>');
        }else {
            this.writeClassReference(type.classNode);
            if (type.typeArguments.isNotEmpty) {
                this.writeSymbol('<');
                this.writeList(type.typeArguments,this.writeType.bind(this));
                this.writeSymbol('>');
            }
        }
    }
    visitVectorType(type : lib3.VectorType) {
        this.writeWord('Vector');
    }
    visitTypedefType(type : lib3.TypedefType) {
        this.writeTypedefReference(type.typedefNode);
        if (type.typeArguments.isNotEmpty) {
            this.writeSymbol('<');
            this.writeList(type.typeArguments,this.writeType.bind(this));
            this.writeSymbol('>');
        }
    }
    writeModifier(isThere : boolean,name : string) : void {
        if (isThere) {
            this.writeWord(name);
        }
    }
    writeName(name : lib3.Name) : void {
        if (((t)=>(!!t)?t.name:null)(name) == '') {
            this.writeWord(Printer.emptyNameString);
        }else {
            this.writeWord((((t)=>(!!t)?t.name:null)(name) || '<anon>'));
        }
    }
    endLine(string? : string) : void {
        if (string != null) {
            this.write(string);
        }
        this.write('\n');
        this.state = Printer.SPACE;
        this.column = 0;
    }
    writeFunction(function : lib3.FunctionNode,_namedArguments? : {name? : any,initializers? : core.DartList<lib3.Initializer>,terminateLine? : boolean}) : void {
        let {name,initializers,terminateLine} = Object.assign({
            "terminateLine" : true}, _namedArguments );
        if (is(name, "string")) {
            this.writeWord(name);
        }else if (is(name, lib3.Name)) {
            this.writeName(name);
        }else {
            /* TODO (AssertStatementImpl) : assert (name == null); */;
        }
        this.writeTypeParameterList(function.typeParameters);
        this.writeParameterList(function.positionalParameters,function.namedParameters,function.requiredParameterCount);
        this.writeReturnType(function.returnType,((_694_)=>(!!_694_)?_694_.annotateReturn(this,function):null)(this.annotator));
        if (initializers != null && initializers.isNotEmpty) {
            this.endLine();
            ++this.indentation;
            this.writeIndentation();
            this.writeComma(':');
            this.writeList(initializers,this.writeNode.bind(this));
            --this.indentation;
        }
        if (function.asyncMarker != lib3.AsyncMarker.Sync) {
            this.writeSpaced(this.getAsyncMarkerKeyword(function.asyncMarker));
        }
        if (function.dartAsyncMarker != lib3.AsyncMarker.Sync && function.dartAsyncMarker != function.asyncMarker) {
            this.writeSpaced("/* originally");
            this.writeSpaced(this.getAsyncMarkerKeyword(function.dartAsyncMarker));
            this.writeSpaced("*/");
        }
        if (function.body != null) {
            this.writeFunctionBody(function.body,{
                terminateLine : terminateLine});
        }else if (terminateLine) {
            this.endLine(';');
        }
    }
    getAsyncMarkerKeyword(marker : lib3.AsyncMarker) : string {
        switch (marker) {
            case lib3.AsyncMarker.Sync:
                return 'sync';
            case lib3.AsyncMarker.SyncStar:
                return 'sync*';
            case lib3.AsyncMarker.Async:
                return 'async';
            case lib3.AsyncMarker.AsyncStar:
                return 'async*';
            case lib3.AsyncMarker.SyncYielding:
                return 'yielding';
            default:
                return `<Invalid async marker: ${marker}>`;
        }
    }
    writeFunctionBody(body : lib3.Statement,_namedArguments? : {terminateLine? : boolean}) : void {
        let {terminateLine} = Object.assign({
            "terminateLine" : true}, _namedArguments );
        if (is(body, lib3.Block) && body.statements.isEmpty) {
            this.ensureSpace();
            this.writeSymbol('{}');
            this.state = Printer.WORD;
            if (terminateLine) {
                this.endLine();
            }
        }else if (is(body, lib3.Block)) {
            this.ensureSpace();
            this.endLine('{');
            ++this.indentation;
            body.statements.forEach(this.writeNode.bind(this));
            --this.indentation;
            this.writeIndentation();
            this.writeSymbol('}');
            this.state = Printer.WORD;
            if (terminateLine) {
                this.endLine();
            }
        }else if (is(body, lib3.ReturnStatement) && !terminateLine) {
            this.writeSpaced('=>');
            this.writeExpression(body.expression);
        }else {
            this.writeBody(body);
        }
    }
    writeBody(body : lib3.Statement) : void {
        if (is(body, lib3.Block)) {
            this.endLine(' {');
            ++this.indentation;
            body.statements.forEach(this.writeNode.bind(this));
            --this.indentation;
            this.writeIndentation();
            this.endLine('}');
        }else {
            this.endLine();
            ++this.indentation;
            this.writeNode(body);
            --this.indentation;
        }
    }
    writeReturnType(type : lib3.DartType,annotation : string) : void {
        if (op(Op.EQUALS,type,null)) return;
        this.writeSpaced('→');
        this.writeAnnotatedType(type,annotation);
    }
    writeTypeParameterList(typeParameters : core.DartList<lib3.TypeParameter>) : void {
        if (typeParameters.isEmpty) return;
        this.writeSymbol('<');
        this.writeList(typeParameters,this.writeNode.bind(this));
        this.writeSymbol('>');
        this.state = Printer.WORD;
    }
    writeParameterList(positional : core.DartList<lib3.VariableDeclaration>,named : core.DartList<lib3.VariableDeclaration>,requiredParameterCount : number) : void {
        this.writeSymbol('(');
        this.writeList(positional.take(requiredParameterCount),this.writeVariableDeclaration.bind(this));
        if (requiredParameterCount < positional.length) {
            if (requiredParameterCount > 0) {
                this.writeComma();
            }
            this.writeSymbol('[');
            this.writeList(positional.skip(requiredParameterCount),this.writeVariableDeclaration.bind(this));
            this.writeSymbol(']');
        }
        if (named.isNotEmpty) {
            if (positional.isNotEmpty) {
                this.writeComma();
            }
            this.writeSymbol('{');
            this.writeList(named,this.writeVariableDeclaration.bind(this));
            this.writeSymbol('}');
        }
        this.writeSymbol(')');
    }
    writeList(nodes : core.DartIterable<any>,callback : (x : any) => any,_namedArguments? : {separator? : string}) : void {
        let {separator} = Object.assign({
            "separator" : ','}, _namedArguments );
        let first : boolean = true;
        for(let node of nodes) {
            if (first) {
                first = false;
            }else {
                this.writeComma(separator);
            }
            callback(node);
        }
    }
    writeMemberReference(member : lib3.Member) : void {
        this.writeWord(this.getMemberReference(member));
    }
    writeClassReference(classNode : lib3.Class) : void {
        this.writeWord(this.getClassReference(classNode));
    }
    writeTypedefReference(typedefNode : lib3.Typedef) : void {
        this.writeWord(this.getTypedefReference(typedefNode));
    }
    writeLibraryReference(library : lib3.Library) : void {
        this.writeWord(this.getLibraryReference(library));
    }
    writeVariableReference(variable : lib3.VariableDeclaration) : void {
        this.writeWord(this.getVariableReference(variable));
    }
    writeTypeParameterReference(node : lib3.TypeParameter) : void {
        this.writeWord(this.getTypeParameterReference(node));
    }
    writeExpression(node : lib3.Expression,minimumPrecedence? : number) : void {
        if (this.showOffsets) this.writeWord(`[${node.fileOffset}]`);
        let needsParenteses : boolean = false;
        if (minimumPrecedence != null && this.getPrecedence(node) < minimumPrecedence) {
            needsParenteses = true;
            this.writeSymbol('(');
        }
        this.writeNode(node);
        if (needsParenteses) {
            this.writeSymbol(')');
        }
    }
    writeAnnotation(node : lib3.Expression) : void {
        this.writeSymbol('@');
        if (is(node, lib3.ConstructorInvocation)) {
            this.writeMemberReference(node.target);
            this.visitArguments(node.arguments);
        }else {
            this.writeExpression(node);
        }
    }
    writeAnnotationList(nodes : core.DartList<lib3.Expression>) : void {
        for(let node of nodes) {
            this.writeIndentation();
            this.writeAnnotation(node);
            this.endLine();
        }
    }
    visitLibrary(node : lib3.Library) {
    }
    visitField(node : lib3.Field) {
        this.writeAnnotationList(node.annotations);
        this.writeIndentation();
        this.writeModifier(node.isStatic,'static');
        this.writeModifier(node.isFinal,'final');
        this.writeModifier(node.isConst,'const');
        if (node.isStatic) {
            this.writeModifier(node.hasImplicitGetter,'[getter]');
            this.writeModifier(node.hasImplicitSetter,'[setter]');
        }else {
            this.writeModifier(!node.hasImplicitGetter,'[no-getter]');
            if (node.isFinal) {
                this.writeModifier(node.hasImplicitSetter,'[setter]');
            }else {
                this.writeModifier(!node.hasImplicitSetter,'[no-setter]');
            }
        }
        this.writeWord('field');
        this.writeSpace();
        this.writeAnnotatedType(node.type,((_695_)=>(!!_695_)?_695_.annotateField(this,node):null)(this.annotator));
        this.writeName(this.getMemberName(node));
        if (node.initializer != null) {
            this.writeSpaced('=');
            this.writeExpression(node.initializer);
        }
        if ((op(Op.EQUALS,node.enclosingClass,null) && node.enclosingLibrary.fileUri != node.fileUri) || (node.enclosingClass != null && node.enclosingClass.fileUri != node.fileUri)) {
            this.writeWord(`/* from ${node.fileUri} */`);
        }
        this.endLine(';');
    }
    visitProcedure(node : lib3.Procedure) {
        this.writeAnnotationList(node.annotations);
        this.writeIndentation();
        this.writeModifier(node.isExternal,'external');
        this.writeModifier(node.isStatic,'static');
        this.writeModifier(node.isAbstract,'abstract');
        this.writeWord(procedureKindToString(node.kind));
        if ((op(Op.EQUALS,node.enclosingClass,null) && node.enclosingLibrary.fileUri != node.fileUri) || (node.enclosingClass != null && node.enclosingClass.fileUri != node.fileUri)) {
            this.writeWord(`/* from ${node.fileUri} */`);
        }
        this.writeFunction(node.function,{
            name : this.getMemberName(node)});
    }
    visitConstructor(node : lib3.Constructor) {
        this.writeAnnotationList(node.annotations);
        this.writeIndentation();
        this.writeModifier(node.isExternal,'external');
        this.writeModifier(node.isConst,'const');
        this.writeModifier(node.isSyntheticDefault,'default');
        this.writeWord('constructor');
        this.writeFunction(node.function,{
            name : node.name,initializers : node.initializers});
    }
    visitClass(node : lib3.Class) {
        this.writeAnnotationList(node.annotations);
        this.writeIndentation();
        this.writeModifier(node.isAbstract,'abstract');
        this.writeWord('class');
        this.writeWord(this.getClassName(node));
        this.writeTypeParameterList(node.typeParameters);
        if (node.isMixinApplication) {
            this.writeSpaced('=');
            this.visitSupertype(node.supertype);
            this.writeSpaced('with');
            this.visitSupertype(node.mixedInType);
        }else if (node.supertype != null) {
            this.writeSpaced('extends');
            this.visitSupertype(node.supertype);
        }
        if (node.implementedTypes.isNotEmpty) {
            this.writeSpaced('implements');
            this.writeList(node.implementedTypes,this.visitSupertype.bind(this));
        }
        let endLineString = ' {';
        if (node.enclosingLibrary.fileUri != node.fileUri) {
            endLineString += ` // from ${node.fileUri}`;
        }
        this.endLine(endLineString);
        ++this.indentation;
        node.fields.forEach(this.writeNode.bind(this));
        node.constructors.forEach(this.writeNode.bind(this));
        node.procedures.forEach(this.writeNode.bind(this));
        --this.indentation;
        this.writeIndentation();
        this.endLine('}');
    }
    visitTypedef(node : lib3.Typedef) {
        this.writeIndentation();
        this.writeWord('typedef');
        this.writeWord(node.name);
        this.writeTypeParameterList(node.typeParameters);
        this.writeSpaced('=');
        this.writeNode(node.type);
        this.endLine(';');
    }
    visitInvalidExpression(node : lib3.InvalidExpression) {
        this.writeWord('invalid-expression');
    }
    visitMethodInvocation(node : lib3.MethodInvocation) {
        this.writeExpression(node.receiver,Precedence.PRIMARY);
        this.writeSymbol('.');
        this.writeInterfaceTarget(node.name,node.interfaceTarget);
        this.writeNode(node.arguments);
    }
    visitDirectMethodInvocation(node : lib3.DirectMethodInvocation) {
        this.writeExpression(node.receiver,Precedence.PRIMARY);
        this.writeSymbol('.{=');
        this.writeMemberReference(node.target);
        this.writeSymbol('}');
        this.writeNode(node.arguments);
    }
    visitSuperMethodInvocation(node : lib3.SuperMethodInvocation) {
        this.writeWord('super');
        this.writeSymbol('.');
        this.writeInterfaceTarget(node.name,node.interfaceTarget);
        this.writeNode(node.arguments);
    }
    visitStaticInvocation(node : lib3.StaticInvocation) {
        this.writeModifier(node.isConst,'const');
        this.writeMemberReference(node.target);
        this.writeNode(node.arguments);
    }
    visitConstructorInvocation(node : lib3.ConstructorInvocation) {
        this.writeWord(node.isConst ? 'const' : 'new');
        this.writeMemberReference(node.target);
        this.writeNode(node.arguments);
    }
    visitNot(node : lib3.Not) {
        this.writeSymbol('!');
        this.writeExpression(node.operand,Precedence.PREFIX);
    }
    visitLogicalExpression(node : lib3.LogicalExpression) {
        let precedence : number = Precedence.binaryPrecedence.get(node.operator);
        this.writeExpression(node.left,precedence);
        this.writeSpaced(node.operator);
        this.writeExpression(node.right,precedence + 1);
    }
    visitConditionalExpression(node : lib3.ConditionalExpression) {
        this.writeExpression(node.condition,Precedence.LOGICAL_OR);
        this.writeSpaced('?');
        this.writeExpression(node.then);
        this.writeSpaced(':');
        this.writeExpression(node.otherwise);
    }
    getEscapedCharacter(codeUnit : number) : string {
        switch (codeUnit) {
            case 9:
                return '\t';
            case 10:
                return '\n';
            case 11:
                return '\v';
            case 12:
                return '\f';
            case 13:
                return '\r';
            case 34:
                return '\"';
            case 36:
                return '\$';
            case 92:
                return '\\';
            default:
                if (codeUnit < 32 || codeUnit > 126) {
                    return '\u' + new core.DartString(`${codeUnit}`).padLeft(4,'0');
                }else {
                    return null;
                }
        }
    }
    escapeString(string : string) : string {
        let buffer : core.DartStringBuffer;
        for(let i : number = 0; i < new core.DartString(string).length; ++i){
            let character : string = this.getEscapedCharacter(new core.DartString(string).codeUnitAt(i));
            if (character != null) {
                buffer = ( buffer ) || ( new core.DartStringBuffer(new core.DartString(string).substring(0,i)) );
                buffer.write(character);
            }else {
                ((_696_)=>(!!_696_)?_696_.write(string[i]):null)(buffer);
            }
        }
        return op(Op.EQUALS,buffer,null) ? string : buffer.toString();
    }
    visitStringConcatenation(node : lib3.StringConcatenation) {
        if (this.state == Printer.WORD) {
            this.writeSpace();
        }
        this.write('"');
        for(let part of node.expressions) {
            if (is(part, lib3.StringLiteral)) {
                this.writeSymbol(this.escapeString(part.value));
            }else {
                this.writeSymbol('${');
                this.writeExpression(part);
                this.writeSymbol('}');
            }
        }
        this.write('"');
        this.state = Printer.WORD;
    }
    visitIsExpression(node : lib3.IsExpression) {
        this.writeExpression(node.operand,Precedence.BITWISE_OR);
        this.writeSpaced('is');
        this.writeType(node.type);
    }
    visitAsExpression(node : lib3.AsExpression) {
        this.writeExpression(node.operand,Precedence.BITWISE_OR);
        this.writeSpaced('as');
        this.writeType(node.type);
    }
    visitSymbolLiteral(node : lib3.SymbolLiteral) {
        this.writeSymbol('#');
        this.writeWord(node.value);
    }
    visitTypeLiteral(node : lib3.TypeLiteral) {
        this.writeType(node.type);
    }
    visitThisExpression(node : lib3.ThisExpression) {
        this.writeWord('this');
    }
    visitRethrow(node : lib3.Rethrow) {
        this.writeWord('rethrow');
    }
    visitThrow(node : lib3.Throw) {
        this.writeWord('throw');
        this.writeSpace();
        this.writeExpression(node.expression);
    }
    visitListLiteral(node : lib3.ListLiteral) {
        if (node.isConst) {
            this.writeWord('const');
            this.writeSpace();
        }
        if (node.typeArgument != null) {
            this.writeSymbol('<');
            this.writeType(node.typeArgument);
            this.writeSymbol('>');
        }
        this.writeSymbol('[');
        this.writeList(node.expressions,this.writeNode.bind(this));
        this.writeSymbol(']');
    }
    visitMapLiteral(node : lib3.MapLiteral) {
        if (node.isConst) {
            this.writeWord('const');
            this.writeSpace();
        }
        if (node.keyType != null) {
            this.writeSymbol('<');
            this.writeList(new core.DartList.literal(node.keyType,node.valueType),this.writeType.bind(this));
            this.writeSymbol('>');
        }
        this.writeSymbol('{');
        this.writeList(node.entries,this.writeNode.bind(this));
        this.writeSymbol('}');
    }
    visitMapEntry(node : lib3.MapEntry) {
        this.writeExpression(node.key);
        this.writeComma(':');
        this.writeExpression(node.value);
    }
    visitAwaitExpression(node : lib3.AwaitExpression) {
        this.writeWord('await');
        this.writeExpression(node.operand);
    }
    visitFunctionExpression(node : lib3.FunctionExpression) {
        this.writeFunction(node.function,{
            terminateLine : false});
    }
    visitStringLiteral(node : lib3.StringLiteral) {
        this.writeWord(`"${this.escapeString(node.value)}"`);
    }
    visitIntLiteral(node : lib3.IntLiteral) {
        this.writeWord(`${node.value}`);
    }
    visitDoubleLiteral(node : lib3.DoubleLiteral) {
        this.writeWord(`${node.value}`);
    }
    visitBoolLiteral(node : lib3.BoolLiteral) {
        this.writeWord(`${node.value}`);
    }
    visitNullLiteral(node : lib3.NullLiteral) {
        this.writeWord('null');
    }
    visitLet(node : lib3.Let) {
        this.writeWord('let');
        this.writeVariableDeclaration(node.variable);
        this.writeSpaced('in');
        this.writeExpression(node.body);
    }
    visitLoadLibrary(node : lib3.LoadLibrary) {
        this.writeWord('LoadLibrary');
        this.writeSymbol('(');
        this.writeWord(node.import.name);
        this.writeSymbol(')');
        this.state = Printer.WORD;
    }
    visitCheckLibraryIsLoaded(node : lib3.CheckLibraryIsLoaded) {
        this.writeWord('CheckLibraryIsLoaded');
        this.writeSymbol('(');
        this.writeWord(node.import.name);
        this.writeSymbol(')');
        this.state = Printer.WORD;
    }
    visitVectorCreation(node : lib3.VectorCreation) {
        this.writeWord('MakeVector');
        this.writeSymbol('(');
        this.writeWord(new core.DartInt(node.length).toString());
        this.writeSymbol(')');
    }
    visitVectorGet(node : lib3.VectorGet) {
        this.writeExpression(node.vectorExpression);
        this.writeSymbol('[');
        this.writeWord(new core.DartInt(node.index).toString());
        this.writeSymbol(']');
    }
    visitVectorSet(node : lib3.VectorSet) {
        this.writeExpression(node.vectorExpression);
        this.writeSymbol('[');
        this.writeWord(new core.DartInt(node.index).toString());
        this.writeSymbol(']');
        this.writeSpaced('=');
        this.writeExpression(node.value);
    }
    visitVectorCopy(node : lib3.VectorCopy) {
        this.writeWord('CopyVector');
        this.writeSymbol('(');
        this.writeExpression(node.vectorExpression);
        this.writeSymbol(')');
    }
    visitClosureCreation(node : lib3.ClosureCreation) {
        this.writeWord('MakeClosure');
        this.writeSymbol('<');
        this.writeNode(node.functionType);
        this.writeSymbol('>');
        this.writeSymbol('(');
        this.writeMemberReference(node.topLevelFunction);
        this.writeComma();
        this.writeExpression(node.contextVector);
        this.writeSymbol(')');
    }
    visitLibraryDependency(node : lib3.LibraryDependency) {
        this.writeIndentation();
        this.writeWord(node.isImport ? 'import' : 'export');
        let uriString = `${node.targetLibrary.importUri}`;
        this.writeWord(`"${uriString}"`);
        if (node.isDeferred) {
            this.writeWord('deferred');
        }
        if (node.name != null) {
            this.writeWord('as');
            this.writeWord(node.name);
        }
        this.endLine(';');
    }
    defaultExpression(node : lib3.Expression) {
        this.writeWord(`${node.runtimeType}`);
    }
    visitVariableGet(node : lib3.VariableGet) {
        this.writeVariableReference(node.variable);
        if (node.promotedType != null) {
            this.writeSymbol('{');
            this.writeNode(node.promotedType);
            this.writeSymbol('}');
            this.state = Printer.WORD;
        }
    }
    visitVariableSet(node : lib3.VariableSet) {
        this.writeVariableReference(node.variable);
        this.writeSpaced('=');
        this.writeExpression(node.value);
    }
    writeInterfaceTarget(name : lib3.Name,target : lib3.Member) : void {
        if (target != null) {
            this.writeSymbol('{');
            this.writeMemberReference(target);
            this.writeSymbol('}');
        }else {
            this.writeName(name);
        }
    }
    visitPropertyGet(node : lib3.PropertyGet) {
        this.writeExpression(node.receiver,Precedence.PRIMARY);
        this.writeSymbol('.');
        this.writeInterfaceTarget(node.name,node.interfaceTarget);
    }
    visitPropertySet(node : lib3.PropertySet) {
        this.writeExpression(node.receiver,Precedence.PRIMARY);
        this.writeSymbol('.');
        this.writeInterfaceTarget(node.name,node.interfaceTarget);
        this.writeSpaced('=');
        this.writeExpression(node.value);
    }
    visitSuperPropertyGet(node : lib3.SuperPropertyGet) {
        this.writeWord('super');
        this.writeSymbol('.');
        this.writeInterfaceTarget(node.name,node.interfaceTarget);
    }
    visitSuperPropertySet(node : lib3.SuperPropertySet) {
        this.writeWord('super');
        this.writeSymbol('.');
        this.writeInterfaceTarget(node.name,node.interfaceTarget);
        this.writeSpaced('=');
        this.writeExpression(node.value);
    }
    visitDirectPropertyGet(node : lib3.DirectPropertyGet) {
        this.writeExpression(node.receiver,Precedence.PRIMARY);
        this.writeSymbol('.{=');
        this.writeMemberReference(node.target);
        this.writeSymbol('}');
    }
    visitDirectPropertySet(node : lib3.DirectPropertySet) {
        this.writeExpression(node.receiver,Precedence.PRIMARY);
        this.writeSymbol('.{=');
        this.writeMemberReference(node.target);
        this.writeSymbol('}');
        this.writeSpaced('=');
        this.writeExpression(node.value);
    }
    visitStaticGet(node : lib3.StaticGet) {
        this.writeMemberReference(node.target);
    }
    visitStaticSet(node : lib3.StaticSet) {
        this.writeMemberReference(node.target);
        this.writeSpaced('=');
        this.writeExpression(node.value);
    }
    visitInvalidStatement(node : lib3.InvalidStatement) {
        this.writeIndentation();
        this.endLine('invalid-statement;');
    }
    visitExpressionStatement(node : lib3.ExpressionStatement) {
        this.writeIndentation();
        this.writeExpression(node.expression);
        this.endLine(';');
    }
    visitBlock(node : lib3.Block) {
        this.writeIndentation();
        if (node.statements.isEmpty) {
            this.endLine('{}');
            return null;
        }
        this.endLine('{');
        ++this.indentation;
        node.statements.forEach(this.writeNode.bind(this));
        --this.indentation;
        this.writeIndentation();
        this.endLine('}');
    }
    visitEmptyStatement(node : lib3.EmptyStatement) {
        this.writeIndentation();
        this.endLine(';');
    }
    visitAssertStatement(node : lib3.AssertStatement) {
        this.writeIndentation();
        this.writeWord('assert');
        this.writeSymbol('(');
        this.writeExpression(node.condition);
        if (node.message != null) {
            this.writeComma();
            this.writeExpression(node.message);
        }
        this.endLine(');');
    }
    visitLabeledStatement(node : lib3.LabeledStatement) {
        this.writeIndentation();
        this.writeWord(this.syntheticNames.nameLabeledStatement(node));
        this.endLine(':');
        this.writeNode(node.body);
    }
    visitBreakStatement(node : lib3.BreakStatement) {
        this.writeIndentation();
        this.writeWord('break');
        this.writeWord(this.syntheticNames.nameLabeledStatement(node.target));
        this.endLine(';');
    }
    visitWhileStatement(node : lib3.WhileStatement) {
        this.writeIndentation();
        this.writeSpaced('while');
        this.writeSymbol('(');
        this.writeExpression(node.condition);
        this.writeSymbol(')');
        this.writeBody(node.body);
    }
    visitDoStatement(node : lib3.DoStatement) {
        this.writeIndentation();
        this.writeWord('do');
        this.writeBody(node.body);
        this.writeIndentation();
        this.writeSpaced('while');
        this.writeSymbol('(');
        this.writeExpression(node.condition);
        this.endLine(')');
    }
    visitForStatement(node : lib3.ForStatement) {
        this.writeIndentation();
        this.writeSpaced('for');
        this.writeSymbol('(');
        this.writeList(node.variables,this.writeVariableDeclaration.bind(this));
        this.writeComma(';');
        if (node.condition != null) {
            this.writeExpression(node.condition);
        }
        this.writeComma(';');
        this.writeList(node.updates,this.writeExpression.bind(this));
        this.writeSymbol(')');
        this.writeBody(node.body);
    }
    visitForInStatement(node : lib3.ForInStatement) {
        this.writeIndentation();
        if (node.isAsync) {
            this.writeSpaced('await');
        }
        this.writeSpaced('for');
        this.writeSymbol('(');
        this.writeVariableDeclaration(node.variable,{
            useVarKeyword : true});
        this.writeSpaced('in');
        this.writeExpression(node.iterable);
        this.writeSymbol(')');
        this.writeBody(node.body);
    }
    visitSwitchStatement(node : lib3.SwitchStatement) {
        this.writeIndentation();
        this.writeWord('switch');
        this.writeSymbol('(');
        this.writeExpression(node.expression);
        this.endLine(') {');
        ++this.indentation;
        node.cases.forEach(this.writeNode.bind(this));
        --this.indentation;
        this.writeIndentation();
        this.endLine('}');
    }
    visitSwitchCase(node : lib3.SwitchCase) {
        let label : string = this.syntheticNames.nameSwitchCase(node);
        this.writeIndentation();
        this.writeWord(label);
        this.endLine(':');
        for(let expression of node.expressions) {
            this.writeIndentation();
            this.writeWord('case');
            this.writeExpression(expression);
            this.endLine(':');
        }
        if (node.isDefault) {
            this.writeIndentation();
            this.writeWord('default');
            this.endLine(':');
        }
        ++this.indentation;
        this.writeNode(node.body);
        --this.indentation;
    }
    visitContinueSwitchStatement(node : lib3.ContinueSwitchStatement) {
        this.writeIndentation();
        this.writeWord('continue');
        this.writeWord(this.syntheticNames.nameSwitchCase(node.target));
        this.endLine(';');
    }
    visitIfStatement(node : lib3.IfStatement) {
        this.writeIndentation();
        this.writeWord('if');
        this.writeSymbol('(');
        this.writeExpression(node.condition);
        this.writeSymbol(')');
        this.writeBody(node.then);
        if (node.otherwise != null) {
            this.writeIndentation();
            this.writeWord('else');
            this.writeBody(node.otherwise);
        }
    }
    visitReturnStatement(node : lib3.ReturnStatement) {
        this.writeIndentation();
        this.writeWord('return');
        if (node.expression != null) {
            this.writeSpace();
            this.writeExpression(node.expression);
        }
        this.endLine(';');
    }
    visitTryCatch(node : lib3.TryCatch) {
        this.writeIndentation();
        this.writeWord('try');
        this.writeBody(node.body);
        node.catches.forEach(this.writeNode.bind(this));
    }
    visitCatch(node : lib3.Catch) {
        this.writeIndentation();
        if (node.guard != null) {
            this.writeWord('on');
            this.writeType(node.guard);
            this.writeSpace();
        }
        this.writeWord('catch');
        this.writeSymbol('(');
        if (node.exception != null) {
            this.writeVariableDeclaration(node.exception);
        }else {
            this.writeWord('no-exception-var');
        }
        if (node.stackTrace != null) {
            this.writeComma();
            this.writeVariableDeclaration(node.stackTrace);
        }
        this.writeSymbol(')');
        this.writeBody(node.body);
    }
    visitTryFinally(node : lib3.TryFinally) {
        this.writeIndentation();
        this.writeWord('try');
        this.writeBody(node.body);
        this.writeIndentation();
        this.writeWord('finally');
        this.writeBody(node.finalizer);
    }
    visitYieldStatement(node : lib3.YieldStatement) {
        this.writeIndentation();
        if (node.isYieldStar) {
            this.writeWord('yield*');
        }else if (node.isNative) {
            this.writeWord('[yield]');
        }else {
            this.writeWord('yield');
        }
        this.writeExpression(node.expression);
        this.endLine(';');
    }
    visitVariableDeclaration(node : lib3.VariableDeclaration) {
        this.writeIndentation();
        this.writeVariableDeclaration(node,{
            useVarKeyword : true});
        this.endLine(';');
    }
    visitFunctionDeclaration(node : lib3.FunctionDeclaration) {
        this.writeIndentation();
        this.writeWord('function');
        this.writeFunction(node.function,{
            name : this.getVariableName(node.variable)});
    }
    writeVariableDeclaration(node : lib3.VariableDeclaration,_namedArguments? : {useVarKeyword? : boolean}) : void {
        let {useVarKeyword} = Object.assign({
            "useVarKeyword" : false}, _namedArguments );
        if (this.showOffsets) this.writeWord(`[${node.fileOffset}]`);
        this.writeModifier(node.isFinal,'final');
        this.writeModifier(node.isConst,'const');
        if (node.type != null) {
            this.writeAnnotatedType(node.type,((_697_)=>(!!_697_)?_697_.annotateVariable(this,node):null)(this.annotator));
        }
        if (useVarKeyword && !node.isFinal && !node.isConst && op(Op.EQUALS,node.type,null)) {
            this.writeWord('var');
        }
        this.writeWord(this.getVariableName(node));
        if (node.initializer != null) {
            this.writeSpaced('=');
            this.writeExpression(node.initializer);
        }
    }
    visitArguments(node : lib3.Arguments) {
        if (node.types.isNotEmpty) {
            this.writeSymbol('<');
            this.writeList(node.types,this.writeType.bind(this));
            this.writeSymbol('>');
        }
        this.writeSymbol('(');
        let allArgs = new core.DartList.literal<core.DartList<lib3.TreeNode>>(node.positional,node.named).expand((x : any) =>  {
            return x;
        });
        this.writeList(allArgs,this.writeNode.bind(this));
        this.writeSymbol(')');
    }
    visitNamedExpression(node : lib3.NamedExpression) {
        this.writeWord(node.name);
        this.writeComma(':');
        this.writeExpression(node.value);
    }
    defaultStatement(node : lib3.Statement) {
        this.writeIndentation();
        this.endLine(`${node.runtimeType}`);
    }
    visitInvalidInitializer(node : lib3.InvalidInitializer) {
        this.writeWord('invalid-initializer');
    }
    visitFieldInitializer(node : lib3.FieldInitializer) {
        this.writeMemberReference(node.field);
        this.writeSpaced('=');
        this.writeExpression(node.value);
    }
    visitSuperInitializer(node : lib3.SuperInitializer) {
        this.writeWord('super');
        this.writeMemberReference(node.target);
        this.writeNode(node.arguments);
    }
    visitRedirectingInitializer(node : lib3.RedirectingInitializer) {
        this.writeWord('this');
        this.writeMemberReference(node.target);
        this.writeNode(node.arguments);
    }
    visitLocalInitializer(node : lib3.LocalInitializer) {
        this.writeVariableDeclaration(node.variable);
    }
    defaultInitializer(node : lib3.Initializer) {
        this.writeIndentation();
        this.endLine(`: ${node.runtimeType}`);
    }
    visitInvalidType(node : lib3.InvalidType) {
        this.writeWord('invalid-type');
    }
    visitDynamicType(node : lib3.DynamicType) {
        this.writeWord('dynamic');
    }
    visitVoidType(node : lib3.VoidType) {
        this.writeWord('void');
    }
    visitInterfaceType(node : lib3.InterfaceType) {
        this.writeClassReference(node.classNode);
        if (node.typeArguments.isNotEmpty) {
            this.writeSymbol('<');
            this.writeList(node.typeArguments,this.writeType.bind(this));
            this.writeSymbol('>');
            this.state = Printer.WORD;
        }
    }
    visitFunctionType(node : lib3.FunctionType) {
        if (this.state == Printer.WORD) {
            this.ensureSpace();
        }
        this.writeTypeParameterList(node.typeParameters);
        this.writeSymbol('(');
        let positional = node.positionalParameters;
        this.writeList(positional.take(node.requiredParameterCount),this.writeType.bind(this));
        if (node.requiredParameterCount < positional.length) {
            if (node.requiredParameterCount > 0) {
                this.writeComma();
            }
            this.writeSymbol('[');
            this.writeList(positional.skip(node.requiredParameterCount),this.writeType.bind(this));
            this.writeSymbol(']');
        }
        if (node.namedParameters.isNotEmpty) {
            if (node.positionalParameters.isNotEmpty) {
                this.writeComma();
            }
            this.writeSymbol('{');
            this.writeList(node.namedParameters,this.visitNamedType.bind(this));
            this.writeSymbol('}');
        }
        this.writeSymbol(')');
        this.writeSpaced('→');
        this.writeType(node.returnType);
    }
    visitNamedType(node : lib3.NamedType) {
        this.writeWord(node.name);
        this.writeSymbol(':');
        this.writeSpace();
        this.writeType(node.type);
    }
    visitTypeParameterType(node : lib3.TypeParameterType) {
        this.writeTypeParameterReference(node.parameter);
    }
    visitTypeParameter(node : lib3.TypeParameter) {
        this.writeWord(this.getTypeParameterName(node));
        this.writeSpaced('extends');
        this.writeType(node.bound);
    }
    defaultNode(node : lib3.Node) {
        this.write(`<${node.runtimeType}>`);
    }
}

export namespace Precedence {
    export type Constructors = lib4.ExpressionVisitor.Constructors | 'Precedence';
    export type Interface = Omit<Precedence, Constructors>;
}
@DartClass
export class Precedence extends lib4.ExpressionVisitor<number> {
    private static __$instance : Precedence;
    static get instance() : Precedence { 
        if (this.__$instance===undefined) {
            this.__$instance = new Precedence();
        }
        return this.__$instance;
    }
    static set instance(__$value : Precedence)  { 
        this.__$instance = __$value;
    }

    static of(node : lib3.Expression) : number {
        return node.accept(Precedence.instance);
    }
    private static __$EXPRESSION : number;
    static get EXPRESSION() : number { 
        if (this.__$EXPRESSION===undefined) {
            this.__$EXPRESSION = 1;
        }
        return this.__$EXPRESSION;
    }

    private static __$CONDITIONAL : number;
    static get CONDITIONAL() : number { 
        if (this.__$CONDITIONAL===undefined) {
            this.__$CONDITIONAL = 2;
        }
        return this.__$CONDITIONAL;
    }

    private static __$LOGICAL_NULL_AWARE : number;
    static get LOGICAL_NULL_AWARE() : number { 
        if (this.__$LOGICAL_NULL_AWARE===undefined) {
            this.__$LOGICAL_NULL_AWARE = 3;
        }
        return this.__$LOGICAL_NULL_AWARE;
    }

    private static __$LOGICAL_OR : number;
    static get LOGICAL_OR() : number { 
        if (this.__$LOGICAL_OR===undefined) {
            this.__$LOGICAL_OR = 4;
        }
        return this.__$LOGICAL_OR;
    }

    private static __$LOGICAL_AND : number;
    static get LOGICAL_AND() : number { 
        if (this.__$LOGICAL_AND===undefined) {
            this.__$LOGICAL_AND = 5;
        }
        return this.__$LOGICAL_AND;
    }

    private static __$EQUALITY : number;
    static get EQUALITY() : number { 
        if (this.__$EQUALITY===undefined) {
            this.__$EQUALITY = 6;
        }
        return this.__$EQUALITY;
    }

    private static __$RELATIONAL : number;
    static get RELATIONAL() : number { 
        if (this.__$RELATIONAL===undefined) {
            this.__$RELATIONAL = 7;
        }
        return this.__$RELATIONAL;
    }

    private static __$BITWISE_OR : number;
    static get BITWISE_OR() : number { 
        if (this.__$BITWISE_OR===undefined) {
            this.__$BITWISE_OR = 8;
        }
        return this.__$BITWISE_OR;
    }

    private static __$BITWISE_XOR : number;
    static get BITWISE_XOR() : number { 
        if (this.__$BITWISE_XOR===undefined) {
            this.__$BITWISE_XOR = 9;
        }
        return this.__$BITWISE_XOR;
    }

    private static __$BITWISE_AND : number;
    static get BITWISE_AND() : number { 
        if (this.__$BITWISE_AND===undefined) {
            this.__$BITWISE_AND = 10;
        }
        return this.__$BITWISE_AND;
    }

    private static __$SHIFT : number;
    static get SHIFT() : number { 
        if (this.__$SHIFT===undefined) {
            this.__$SHIFT = 11;
        }
        return this.__$SHIFT;
    }

    private static __$ADDITIVE : number;
    static get ADDITIVE() : number { 
        if (this.__$ADDITIVE===undefined) {
            this.__$ADDITIVE = 12;
        }
        return this.__$ADDITIVE;
    }

    private static __$MULTIPLICATIVE : number;
    static get MULTIPLICATIVE() : number { 
        if (this.__$MULTIPLICATIVE===undefined) {
            this.__$MULTIPLICATIVE = 13;
        }
        return this.__$MULTIPLICATIVE;
    }

    private static __$PREFIX : number;
    static get PREFIX() : number { 
        if (this.__$PREFIX===undefined) {
            this.__$PREFIX = 14;
        }
        return this.__$PREFIX;
    }

    private static __$POSTFIX : number;
    static get POSTFIX() : number { 
        if (this.__$POSTFIX===undefined) {
            this.__$POSTFIX = 15;
        }
        return this.__$POSTFIX;
    }

    private static __$TYPE_LITERAL : number;
    static get TYPE_LITERAL() : number { 
        if (this.__$TYPE_LITERAL===undefined) {
            this.__$TYPE_LITERAL = 19;
        }
        return this.__$TYPE_LITERAL;
    }

    private static __$PRIMARY : number;
    static get PRIMARY() : number { 
        if (this.__$PRIMARY===undefined) {
            this.__$PRIMARY = 20;
        }
        return this.__$PRIMARY;
    }

    private static __$CALLEE : number;
    static get CALLEE() : number { 
        if (this.__$CALLEE===undefined) {
            this.__$CALLEE = 21;
        }
        return this.__$CALLEE;
    }

    private static __$binaryPrecedence : core.DartMap<string,number>;
    static get binaryPrecedence() : core.DartMap<string,number> { 
        if (this.__$binaryPrecedence===undefined) {
            this.__$binaryPrecedence = new core.DartMap.literal([
                ['&&',Precedence.LOGICAL_AND],
                ['||',Precedence.LOGICAL_OR],
                ['??',Precedence.LOGICAL_NULL_AWARE],
                ['==',Precedence.EQUALITY],
                ['!=',Precedence.EQUALITY],
                ['>',Precedence.RELATIONAL],
                ['>=',Precedence.RELATIONAL],
                ['<',Precedence.RELATIONAL],
                ['<=',Precedence.RELATIONAL],
                ['|',Precedence.BITWISE_OR],
                ['^',Precedence.BITWISE_XOR],
                ['&',Precedence.BITWISE_AND],
                ['>>',Precedence.SHIFT],
                ['<<',Precedence.SHIFT],
                ['+',Precedence.ADDITIVE],
                ['-',Precedence.ADDITIVE],
                ['*',Precedence.MULTIPLICATIVE],
                ['%',Precedence.MULTIPLICATIVE],
                ['/',Precedence.MULTIPLICATIVE],
                ['~/',Precedence.MULTIPLICATIVE],
                [null,Precedence.EXPRESSION]]);
        }
        return this.__$binaryPrecedence;
    }

    static isAssociativeBinaryOperator(precedence : number) : boolean {
        return precedence != Precedence.EQUALITY && precedence != Precedence.RELATIONAL;
    }
    defaultExpression(node : lib3.Expression) : number {
        return Precedence.EXPRESSION;
    }
    visitInvalidExpression(node : lib3.InvalidExpression) : number {
        return Precedence.CALLEE;
    }
    visitMethodInvocation(node : lib3.MethodInvocation) : number {
        return Precedence.CALLEE;
    }
    visitSuperMethodInvocation(node : lib3.SuperMethodInvocation) : number {
        return Precedence.CALLEE;
    }
    visitDirectMethodInvocation(node : lib3.DirectMethodInvocation) : number {
        return Precedence.CALLEE;
    }
    visitStaticInvocation(node : lib3.StaticInvocation) : number {
        return Precedence.CALLEE;
    }
    visitConstructorInvocation(node : lib3.ConstructorInvocation) : number {
        return Precedence.CALLEE;
    }
    visitNot(node : lib3.Not) : number {
        return Precedence.PREFIX;
    }
    visitLogicalExpression(node : lib3.LogicalExpression) : number {
        return Precedence.binaryPrecedence.get(node.operator);
    }
    visitConditionalExpression(node : lib3.ConditionalExpression) : number {
        return Precedence.CONDITIONAL;
    }
    visitStringConcatenation(node : lib3.StringConcatenation) : number {
        return Precedence.PRIMARY;
    }
    visitIsExpression(node : lib3.IsExpression) : number {
        return Precedence.RELATIONAL;
    }
    visitAsExpression(node : lib3.AsExpression) : number {
        return Precedence.RELATIONAL;
    }
    visitSymbolLiteral(node : lib3.SymbolLiteral) : number {
        return Precedence.PRIMARY;
    }
    visitTypeLiteral(node : lib3.TypeLiteral) : number {
        return Precedence.PRIMARY;
    }
    visitThisExpression(node : lib3.ThisExpression) : number {
        return Precedence.CALLEE;
    }
    visitRethrow(node : lib3.Rethrow) : number {
        return Precedence.PRIMARY;
    }
    visitThrow(node : lib3.Throw) : number {
        return Precedence.EXPRESSION;
    }
    visitListLiteral(node : lib3.ListLiteral) : number {
        return Precedence.PRIMARY;
    }
    visitMapLiteral(node : lib3.MapLiteral) : number {
        return Precedence.PRIMARY;
    }
    visitAwaitExpression(node : lib3.AwaitExpression) : number {
        return Precedence.PREFIX;
    }
    visitFunctionExpression(node : lib3.FunctionExpression) : number {
        return Precedence.PRIMARY;
    }
    visitStringLiteral(node : lib3.StringLiteral) : number {
        return Precedence.CALLEE;
    }
    visitIntLiteral(node : lib3.IntLiteral) : number {
        return Precedence.CALLEE;
    }
    visitDoubleLiteral(node : lib3.DoubleLiteral) : number {
        return Precedence.CALLEE;
    }
    visitBoolLiteral(node : lib3.BoolLiteral) : number {
        return Precedence.CALLEE;
    }
    visitNullLiteral(node : lib3.NullLiteral) : number {
        return Precedence.CALLEE;
    }
    visitVariableGet(node : lib3.VariableGet) : number {
        return Precedence.PRIMARY;
    }
    visitVariableSet(node : lib3.VariableSet) : number {
        return Precedence.EXPRESSION;
    }
    visitPropertyGet(node : lib3.PropertyGet) : number {
        return Precedence.PRIMARY;
    }
    visitPropertySet(node : lib3.PropertySet) : number {
        return Precedence.EXPRESSION;
    }
    visitSuperPropertyGet(node : lib3.SuperPropertyGet) : number {
        return Precedence.PRIMARY;
    }
    visitSuperPropertySet(node : lib3.SuperPropertySet) : number {
        return Precedence.EXPRESSION;
    }
    visitDirectPropertyGet(node : lib3.DirectPropertyGet) : number {
        return Precedence.PRIMARY;
    }
    visitDirectPropertySet(node : lib3.DirectPropertySet) : number {
        return Precedence.EXPRESSION;
    }
    visitStaticGet(node : lib3.StaticGet) : number {
        return Precedence.PRIMARY;
    }
    visitStaticSet(node : lib3.StaticSet) : number {
        return Precedence.EXPRESSION;
    }
    visitLet(node : lib3.Let) : number {
        return Precedence.EXPRESSION;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Precedence() {
    }
}

export namespace ExpressionPrinter {
    export type Constructors = 'ExpressionPrinter';
    export type Interface = Omit<ExpressionPrinter, Constructors>;
}
@DartClass
export class ExpressionPrinter {
    writeer : Printer;

    minimumPrecedence : number;

    constructor(writeer : Printer,minimumPrecedence : number) {
    }
    @defaultConstructor
    ExpressionPrinter(writeer : Printer,minimumPrecedence : number) {
        this.writeer = writeer;
        this.minimumPrecedence = minimumPrecedence;
    }
}

export class properties {
    private static __$globalDebuggingNames : NameSystem;
    static get globalDebuggingNames() : NameSystem { 
        if (this.__$globalDebuggingNames===undefined) {
            this.__$globalDebuggingNames = new NameSystem();
        }
        return this.__$globalDebuggingNames;
    }
    static set globalDebuggingNames(__$value : NameSystem)  { 
        this.__$globalDebuggingNames = __$value;
    }

}
