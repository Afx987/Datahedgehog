/** Library asset:datahedgehog_monitor/lib/lib/analyzer/tool/summary/generate.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/path/lib/path";
import * as lib5 from "./idl_model";
import * as lib6 from "./mini_ast";
import * as convert from "@dart2ts/dart/convert";

export var main : () => any = () =>  {
    let script : string = io.Platform.script.toFilePath({
        windows : io.Platform.isWindows});
    let pkgPath : string = lib4.normalize(lib4.join(lib4.dirname(script),'..','..'));
    GeneratedContent.generateAll(pkgPath,properties.allTargets);
};
export namespace _CodeGenerator {
    export type Constructors = '_CodeGenerator';
    export type Interface = Omit<_CodeGenerator, Constructors>;
}
@DartClass
export class _CodeGenerator {
    private static __$_throwDeprecated : string;
    static get _throwDeprecated() : string { 
        if (this.__$_throwDeprecated===undefined) {
            this.__$_throwDeprecated = "throw new UnimplementedError('attempt to access deprecated field')";
        }
        return this.__$_throwDeprecated;
    }

    _outBuffer : core.DartStringBuffer;

    _indentation : string;

    _idl : lib5.Idl;

    constructor(pkgPath : string) {
    }
    @defaultConstructor
    _CodeGenerator(pkgPath : string) {
        this._outBuffer = new core.DartStringBuffer();
        this._indentation = '';
        let idlPath : string = lib4.join(pkgPath,'lib','src','summary','idl.dart');
        let idlFile : io.File = new io.File(idlPath);
        let idlText : string = new core.DartString(idlFile.readAsStringSync()).replaceAll(new core.DartRegExp('\n?'),'\n');
        let scanner = new bare.createInstance(any,null,idlText,{
            includeComments : true});
        let startingToken = scanner.tokenize();
        let listener = new lib6.MiniAstBuilder();
        let parser = new lib6.MiniAstParser(listener);
        parser.parseUnit(startingToken);
        this.extractIdl(listener.compilationUnit);
        this.checkIdl();
    }
    checkIdl() : void {
        this._idl.classes.forEach((name : string,cls : lib5.ClassDeclaration) =>  {
            if (cls.fileIdentifier != null) {
                if (new core.DartString(cls.fileIdentifier).length != 4) {
                    throw new core.Exception(`${name}: file identifier must be 4 characters`);
                }
                for(let i : number = 0; i < new core.DartString(cls.fileIdentifier).length; i++){
                    if (new core.DartString(cls.fileIdentifier).codeUnitAt(i) >= 256) {
                        throw new core.Exception(`${name}: file identifier must be encodable as Latin-1`);
                    }
                }
            }
            let idsUsed : core.DartMap<number,string> = new core.DartMap.literal([
            ]);
            for(let field of cls.allFields) {
                let fieldName : string = field.name;
                let type : lib5.FieldType = field.type;
                if (type.isList) {
                    if (this._idl.classes.containsKey(type.typeName)) {
                    }else if (this._idl.enums.containsKey(type.typeName)) {
                    }else if (type.typeName == 'bool') {
                    }else if (type.typeName == 'int') {
                    }else if (type.typeName == 'double') {
                    }else if (type.typeName == 'String') {
                    }else {
                        throw new core.Exception(`${name}.${fieldName}: illegal type (list of ${type.typeName})`);
                    }
                }
                if (idsUsed.containsKey(field.id)) {
                    throw new core.Exception(`${name}.${fieldName}: id ${field.id} already used by` + ` ${idsUsed.get(field.id)}`);
                }
                idsUsed.set(field.id,fieldName);
            }
            for(let i : number = 0; i < idsUsed.length; i++){
                if (!idsUsed.containsKey(i)) {
                    throw new core.Exception(`${name}: no field uses id ${i}`);
                }
            }
        });
    }
    dartType(type : lib5.FieldType) : string {
        let baseType : string = this.idlPrefix(type.typeName);
        if (type.isList) {
            return `List<${baseType}>`;
        }else {
            return baseType;
        }
    }
    defaultValue(type : lib5.FieldType,builder : boolean) : string {
        if (type.isList) {
            if (builder) {
                let elementType : lib5.FieldType = new lib5.FieldType(type.typeName,false);
                return `<${this.encodedType(elementType)}>[]`;
            }else {
                return `const <${this.idlPrefix(type.typeName)}>[]`;
            }
        }else if (this._idl.enums.containsKey(type.typeName)) {
            return `${this.idlPrefix(type.typeName)}.` + `${this._idl.enums.get(type.typeName).values[0].name}`;
        }else if (type.typeName == 'int') {
            return '0';
        }else if (type.typeName == 'String') {
            return "''";
        }else if (type.typeName == 'bool') {
            return 'false';
        }else {
            return null;
        }
    }
    encodedType(type : lib5.FieldType) : string {
        let typeStr : string;
        if (this._idl.classes.containsKey(type.typeName)) {
            typeStr = `${type.typeName}Builder`;
        }else {
            typeStr = this.idlPrefix(type.typeName);
        }
        if (type.isList) {
            return `List<${typeStr}>`;
        }else {
            return typeStr;
        }
    }
    extractIdl(idlParsed : lib6.CompilationUnit) : void {
        this._idl = new lib5.Idl();
        for(let decl of idlParsed.declarations) {
            if (is(decl, lib6.ClassDeclaration)) {
                let isTopLevel : boolean = false;
                let fileIdentifier : string;
                let clsName : string = decl.name;
                for(let annotation of decl.metadata) {
                    if (annotation.arguments != null && annotation.name == 'TopLevel' && annotation.constructorName == null) {
                        isTopLevel = true;
                        if (annotation.arguments == null) {
                            throw new core.Exception(`Class `${clsName}`: TopLevel requires parenthesis`);
                        }
                        if (annotation.constructorName != null) {
                            throw new core.Exception(`Class `${clsName}`: TopLevel doesn't have named constructors`);
                        }
                        if (annotation.arguments.length == 1) {
                            let arg : lib6.Expression = annotation.arguments[0];
                            if (is(arg, lib6.StringLiteral)) {
                                fileIdentifier = arg.stringValue;
                            }else {
                                throw new core.Exception(`Class `${clsName}`: TopLevel argument must be a string` + ' literal');
                            }
                        }else if (annotation.arguments.length != 0) {
                            throw new core.Exception(`Class `${clsName}`: TopLevel requires 0 or 1 arguments`);
                        }
                    }
                }
                let doc : string = this._getNodeDoc(decl);
                let cls : lib5.ClassDeclaration = new lib5.ClassDeclaration(doc,clsName,isTopLevel,fileIdentifier);
                this._idl.classes.set(clsName,cls);
                let expectedBase : string = 'base.SummaryClass';
                if (op(Op.EQUALS,decl.superclass,null) || decl.superclass.name != expectedBase) {
                    throw new core.Exception(`Class `${clsName}` needs to extend `${expectedBase}``);
                }
                for(let classMember of decl.members) {
                    if (is(classMember, lib6.MethodDeclaration) && classMember.isGetter) {
                        let desc : string = `${clsName}.${classMember.name}`;
                        if (op(Op.EQUALS,classMember.returnType,null)) {
                            throw new core.Exception(`Class member needs a type: ${desc}`);
                        }
                        let type : lib6.TypeName = classMember.returnType;
                        let isList : boolean = false;
                        if (type.name == 'List' && type.typeArguments != null && type.typeArguments.length == 1) {
                            isList = true;
                            type = type.typeArguments[0];
                        }
                        if (type.typeArguments != null) {
                            throw new core.Exception(`Cannot handle type arguments in `${type}``);
                        }
                        let id : number;
                        let isDeprecated : boolean = false;
                        let isInformative : boolean = false;
                        for(let annotation of classMember.metadata) {
                            if (annotation.name == 'Id') {
                                if (id != null) {
                                    throw new core.Exception(`Duplicate @id annotation (${classMember})`);
                                }
                                if (annotation.arguments == null) {
                                    throw new core.Exception('@Id must be passed an argument');
                                }
                                if (annotation.arguments.length != 1) {
                                    throw new core.Exception(`@Id must be passed exactly one argument (${desc})`);
                                }
                                let expression : lib6.Expression = annotation.arguments[0];
                                if (is(expression, lib6.IntegerLiteral)) {
                                    id = expression.value;
                                }else {
                                    throw new core.Exception(`@Id parameter must be an integer literal (${desc})`);
                                }
                            }else if (annotation.name == 'deprecated') {
                                if (annotation.arguments != null) {
                                    throw new core.Exception(`@deprecated does not take args (${desc})`);
                                }
                                isDeprecated = true;
                            }else if (annotation.name == 'informative') {
                                isInformative = true;
                            }
                        }
                        if (id == null) {
                            throw new core.Exception(`Missing @id annotation (${desc})`);
                        }
                        let doc : string = this._getNodeDoc(classMember);
                        let fieldType : lib5.FieldType = new lib5.FieldType(type.name,isList);
                        cls.allFields.add(new lib5.FieldDeclaration(doc,classMember.name,fieldType,id,isDeprecated,isInformative));
                    }else if (is(classMember, lib6.ConstructorDeclaration) && new core.DartString(classMember.name.name).endsWith('fromBuffer')) {
                    }else {
                        throw new core.Exception(`Unexpected class member `${classMember}``);
                    }
                }
            }else if (is(decl, lib6.EnumDeclaration)) {
                let doc : string = this._getNodeDoc(decl);
                let enm : lib5.EnumDeclaration = new lib5.EnumDeclaration(doc,decl.name);
                this._idl.enums.set(enm.name,enm);
                for(let constDecl of decl.constants) {
                    let doc : string = this._getNodeDoc(constDecl);
                    enm.values.add(new lib5.EnumValueDeclaration(doc,constDecl.name));
                }
            }else {
                throw new core.Exception(`Unexpected declaration `${decl}``);
            }
        }
    }
    fbsType(type : lib5.FieldType) : string {
        let typeStr : string;
        switch (type.typeName) {
            case 'bool':
                typeStr = 'bool';
                break;
            case 'double':
                typeStr = 'double';
                break;
            case 'int':
                typeStr = 'uint';
                break;
            case 'String':
                typeStr = 'string';
                break;
            default:
                typeStr = type.typeName;
                break;
        }
        if (type.isList) {
            if (typeStr == 'bool') {
                typeStr = 'ubyte';
            }
            return `[${typeStr}]`;
        }else {
            return typeStr;
        }
    }
    generateFlatBufferSchema() : void {
        this.outputHeader();
        for(let enm of this._idl.enums.values) {
            this.out();
            this.outDoc(enm.documentation);
            this.out(`enum ${enm.name} : byte {`);
            this.indent(() =>  {
                for(let i : number = 0; i < enm.values.length; i++){
                    let value : lib5.EnumValueDeclaration = enm.values[i];
                    if (i != 0) {
                        this.out();
                    }
                    let suffix : string = i < enm.values.length - 1 ? ',' : '';
                    this.outDoc(value.documentation);
                    this.out(`${value.name}${suffix}`);
                }
            });
            this.out('}');
        }
        for(let cls of this._idl.classes.values) {
            this.out();
            this.outDoc(cls.documentation);
            this.out(`table ${cls.name} {`);
            this.indent(() =>  {
                for(let i : number = 0; i < cls.allFields.length; i++){
                    let field : lib5.FieldDeclaration = cls.allFields[i];
                    if (i != 0) {
                        this.out();
                    }
                    this.outDoc(field.documentation);
                    let attributes : core.DartList<string> = new core.DartList.literal<string>(`id: ${field.id}`);
                    if (field.isDeprecated) {
                        attributes.add('deprecated');
                    }
                    let attrText : string = attributes.join(', ');
                    this.out(`${field.name}:${this.fbsType(field.type)} (${attrText});`);
                }
            });
            this.out('}');
        }
        this.out();
        let rootType : lib5.ClassDeclaration = this._idl.classes.get('PackageBundle');
        this.out(`root_type ${rootType.name};`);
        if (rootType.fileIdentifier != null) {
            this.out();
            this.out(`file_identifier ${this.quoted(rootType.fileIdentifier)};`);
        }
    }
    generateFormatCode() : void {
        this.outputHeader();
        this.out('library analyzer.src.summary.format;');
        this.out();
        this.out("import 'dart:convert' as convert;");
        this.out();
        this.out("import 'package:front_end/src/base/api_signature.dart' as api_sig;");
        this.out("import 'package:front_end/src/base/flat_buffers.dart' as fb;");
        this.out();
        this.out("import 'idl.dart' as idl;");
        this.out();
        for(let enm of this._idl.enums.values) {
            this._generateEnumReader(enm);
            this.out();
        }
        for(let cls of this._idl.classes.values) {
            this._generateBuilder(cls);
            this.out();
            if (cls.isTopLevel) {
                this._generateReadFunction(cls);
                this.out();
            }
            this._generateReader(cls);
            this.out();
            this._generateImpl(cls);
            this.out();
            this._generateMixin(cls);
            this.out();
        }
    }
    idlPrefix(s : string) : string {
        switch (s) {
            case 'bool':
            case 'double':
            case 'int':
            case 'String':
                return s;
            default:
                return `idl.${s}`;
        }
    }
    indent(callback : () => void) : void {
        let oldIndentation : string = this._indentation;
        try {
            this._indentation += '  ';
            callback();
        } finally {
            this._indentation = oldIndentation;
        }
    }
    out(s? : string) : void {
        s = s || '';
        if (s == '') {
            this._outBuffer.writeln('');
        }else {
            this._outBuffer.writeln(`${this._indentation}${s}`);
        }
    }
    outDoc(documentation : string) : void {
        if (documentation != null) {
            new core.DartString(documentation).split('\n').forEach(this.out.bind(this));
        }
    }
    outputHeader() : void {
        this.out('// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file');
        this.out('// for details. All rights reserved. Use of this source code is governed by a');
        this.out('// BSD-style license that can be found in the LICENSE file.');
        this.out('//');
        this.out('// This file has been automatically generated.  Please do not edit it manually.');
        this.out('// To regenerate the file, use the script "pkg/analyzer/tool/generate_files".');
        this.out();
    }
    quoted(s : string) : string {
        return convert.properties.JSON.encode(s);
    }
    _generateBuilder(cls : lib5.ClassDeclaration) : void {
        let name : string = cls.name;
        let builderName : string = name + 'Builder';
        let mixinName : string = `_${name}Mixin`;
        let constructorParams : core.DartList<string> = new core.DartList.literal<string>();
        this.out(`class ${builderName} extends Object with ${mixinName} ` + `implements ${this.idlPrefix(name)} {`);
        this.indent(() =>  {
            for(let field of cls.fields) {
                let fieldName : string = field.name;
                let type : lib5.FieldType = field.type;
                let typeStr : string = this.encodedType(type);
                this.out(`${typeStr} _${fieldName};`);
            }
            for(let field of cls.allFields) {
                let fieldName : string = field.name;
                let fieldType : lib5.FieldType = field.type;
                let typeStr : string = this.encodedType(fieldType);
                let def : string = this.defaultValue(fieldType,true);
                let defSuffix : string = def == null ? '' : ` ??= ${def}`;
                this.out();
                this.out('@override');
                if (field.isDeprecated) {
                    this.out(`${typeStr} get ${fieldName} => ${_CodeGenerator._throwDeprecated};`);
                }else {
                    this.out(`${typeStr} get ${fieldName} => _${fieldName}${defSuffix};`);
                    this.out();
                    this.outDoc(field.documentation);
                    constructorParams.add(`${typeStr} ${fieldName}`);
                    this.out(`void set ${fieldName}(${typeStr} value) {`);
                    this.indent(() =>  {
                        let stateFieldName : string = '_' + fieldName;
                        if (fieldType.typeName == 'int') {
                            if (!fieldType.isList) {
                                this.out('assert(value == null || value >= 0);');
                            }else {
                                this.out('assert(value == null || value.every((e) => e >= 0));');
                            }
                        }
                        this.out(`this.${stateFieldName} = value;`);
                    });
                    this.out('}');
                }
            }
            this.out();
            this.out(`${builderName}({${constructorParams.join(', ')}})`);
            let fields : core.DartList<lib5.FieldDeclaration> = cls.fields.toList();
            for(let i : number = 0; i < fields.length; i++){
                let field : lib5.FieldDeclaration = fields[i];
                let prefix : string = i == 0 ? '  : ' : '    ';
                let suffix : string = i == fields.length - 1 ? ';' : ',';
                this.out(`${prefix}_${field.name} = ${field.name}${suffix}`);
            }
            {
                this.out();
                this.out('/**');
                this.out(' * Flush [informative] data recursively.');
                this.out(' */');
                this.out('void flushInformative() {');
                this.indent(() =>  {
                    for(let field of cls.fields) {
                        let fieldType : lib5.FieldType = field.type;
                        let valueName : string = '_' + field.name;
                        if (field.isInformative) {
                            this.out(`${valueName} = null;`);
                        }else if (this._idl.classes.containsKey(fieldType.typeName)) {
                            if (fieldType.isList) {
                                this.out(`${valueName}?.forEach((b) => b.flushInformative());`);
                            }else {
                                this.out(`${valueName}?.flushInformative();`);
                            }
                        }
                    }
                });
                this.out('}');
            }
            {
                this.out();
                this.out('/**');
                this.out(' * Accumulate non-[informative] data into [signature].');
                this.out(' */');
                this.out('void collectApiSignature(api_sig.ApiSignature signature) {');
                this.indent(() =>  {
                    let sortedFields : core.DartList<lib5.FieldDeclaration> = ((_) : core.DartList<lib5.FieldDeclaration> =>  {
                        {
                            _.sort((a : lib5.FieldDeclaration,b : lib5.FieldDeclaration) =>  {
                                return new core.DartInt(a.id).compareTo(b.id);
                            });
                            return _;
                        }
                    })(cls.fields.toList());
                    for(let field of sortedFields) {
                        if (field.isInformative) {
                            continue;
                        }
                        let ref : string = `this._${field.name}`;
                        if (field.type.isList) {
                            this.out(`if (${ref} == null) {`);
                            this.indent(() =>  {
                                this.out('signature.addInt(0);');
                            });
                            this.out('} else {');
                            this.indent(() =>  {
                                this.out(`signature.addInt(${ref}.length);`);
                                this.out(`for (var x in ${ref}) {`);
                                this.indent(() =>  {
                                    this._generateSignatureCall(field.type.typeName,'x',false);
                                });
                                this.out('}');
                            });
                            this.out('}');
                        }else {
                            this._generateSignatureCall(field.type.typeName,ref,true);
                        }
                    }
                });
                this.out('}');
            }
            if (cls.isTopLevel) {
                this.out();
                this.out('List<int> toBuffer() {');
                this.indent(() =>  {
                    this.out('fb.Builder fbBuilder = new fb.Builder();');
                    let fileId : string = cls.fileIdentifier == null ? '' : `, ${this.quoted(cls.fileIdentifier)}`;
                    this.out(`return fbBuilder.finish(finish(fbBuilder)${fileId});`);
                });
                this.out('}');
            }
            this.out();
            this.out('fb.Offset finish(fb.Builder fbBuilder) {');
            this.indent(() =>  {
                for(let field of cls.fields) {
                    let fieldType : lib5.FieldType = field.type;
                    let offsetName : string = 'offset_' + field.name;
                    if (fieldType.isList || fieldType.typeName == 'String' || this._idl.classes.containsKey(fieldType.typeName)) {
                        this.out(`fb.Offset ${offsetName};`);
                    }
                }
                for(let field of cls.fields) {
                    let fieldType : lib5.FieldType = field.type;
                    let valueName : string = '_' + field.name;
                    let offsetName : string = 'offset_' + field.name;
                    let condition : string;
                    let writeCode : string;
                    if (fieldType.isList) {
                        condition = ` || ${valueName}.isEmpty`;
                        if (this._idl.classes.containsKey(fieldType.typeName)) {
                            let itemCode : string = 'b.finish(fbBuilder)';
                            let listCode : string = `${valueName}.map((b) => ${itemCode}).toList()`;
                            writeCode = `${offsetName} = fbBuilder.writeList(${listCode});`;
                        }else if (this._idl.enums.containsKey(fieldType.typeName)) {
                            let itemCode : string = 'b.index';
                            let listCode : string = `${valueName}.map((b) => ${itemCode}).toList()`;
                            writeCode = `${offsetName} = fbBuilder.writeListUint8(${listCode});`;
                        }else if (fieldType.typeName == 'bool') {
                            writeCode = `${offsetName} = fbBuilder.writeListBool(${valueName});`;
                        }else if (fieldType.typeName == 'int') {
                            writeCode = `${offsetName} = fbBuilder.writeListUint32(${valueName});`;
                        }else if (fieldType.typeName == 'double') {
                            writeCode = `${offsetName} = fbBuilder.writeListFloat64(${valueName});`;
                        }else {
                            /* TODO (AssertStatementImpl) : assert (fieldType.typeName == 'String'); */;
                            let itemCode : string = 'fbBuilder.writeString(b)';
                            let listCode : string = `${valueName}.map((b) => ${itemCode}).toList()`;
                            writeCode = `${offsetName} = fbBuilder.writeList(${listCode});`;
                        }
                    }else if (fieldType.typeName == 'String') {
                        writeCode = `${offsetName} = fbBuilder.writeString(${valueName});`;
                    }else if (this._idl.classes.containsKey(fieldType.typeName)) {
                        writeCode = `${offsetName} = ${valueName}.finish(fbBuilder);`;
                    }
                    if (writeCode != null) {
                        if (condition == null) {
                            this.out(`if (${valueName} != null) {`);
                        }else {
                            this.out(`if (!(${valueName} == null${condition})) {`);
                        }
                        this.indent(() =>  {
                            this.out(writeCode);
                        });
                        this.out('}');
                    }
                }
                this.out('fbBuilder.startTable();');
                for(let field of cls.fields) {
                    let index : number = field.id;
                    let fieldType : lib5.FieldType = field.type;
                    let valueName : string = '_' + field.name;
                    let condition : string = `${valueName} != null`;
                    let writeCode : string;
                    if (fieldType.isList || fieldType.typeName == 'String' || this._idl.classes.containsKey(fieldType.typeName)) {
                        let offsetName : string = 'offset_' + field.name;
                        condition = `${offsetName} != null`;
                        writeCode = `fbBuilder.addOffset(${index}, ${offsetName});`;
                    }else if (fieldType.typeName == 'bool') {
                        condition = `${valueName} == true`;
                        writeCode = `fbBuilder.addBool(${index}, true);`;
                    }else if (fieldType.typeName == 'int') {
                        condition += ` && ${valueName} != ${this.defaultValue(fieldType,true)}`;
                        writeCode = `fbBuilder.addUint32(${index}, ${valueName});`;
                    }else if (this._idl.enums.containsKey(fieldType.typeName)) {
                        condition += ` && ${valueName} != ${this.defaultValue(fieldType,true)}`;
                        writeCode = `fbBuilder.addUint8(${index}, ${valueName}.index);`;
                    }
                    if (writeCode == null) {
                        throw new core.UnimplementedError(`Writing type ${fieldType.typeName}`);
                    }
                    this.out(`if (${condition}) {`);
                    this.indent(() =>  {
                        this.out(writeCode);
                    });
                    this.out('}');
                }
                this.out('return fbBuilder.endTable();');
            });
            this.out('}');
        });
        this.out('}');
    }
    _generateEnumReader(enm : lib5.EnumDeclaration) : void {
        let name : string = enm.name;
        let readerName : string = `_${name}Reader`;
        let count : string = `${this.idlPrefix(name)}.values.length`;
        let def : string = `${this.idlPrefix(name)}.${enm.values[0].name}`;
        this.out(`class ${readerName} extends fb.Reader<${this.idlPrefix(name)}> {`);
        this.indent(() =>  {
            this.out(`const ${readerName}() : super();`);
            this.out();
            this.out('@override');
            this.out('int get size => 1;');
            this.out();
            this.out('@override');
            this.out(`${this.idlPrefix(name)} read(fb.BufferContext bc, int offset) {`);
            this.indent(() =>  {
                this.out('int index = const fb.Uint8Reader().read(bc, offset);');
                this.out(`return index < ${count} ? ${this.idlPrefix(name)}.values[index] : ${def};`);
            });
            this.out('}');
        });
        this.out('}');
    }
    _generateImpl(cls : lib5.ClassDeclaration) : void {
        let name : string = cls.name;
        let implName : string = `_${name}Impl`;
        let mixinName : string = `_${name}Mixin`;
        this.out(`class ${implName} extends Object with ${mixinName}` + ` implements ${this.idlPrefix(name)} {`);
        this.indent(() =>  {
            this.out('final fb.BufferContext _bc;');
            this.out('final int _bcOffset;');
            this.out();
            this.out(`${implName}(this._bc, this._bcOffset);`);
            this.out();
            for(let field of cls.fields) {
                let returnType : string = this.dartType(field.type);
                let fieldName : string = field.name;
                this.out(`${returnType} _${fieldName};`);
            }
            for(let field of cls.allFields) {
                let index : number = field.id;
                let fieldName : string = field.name;
                let type : lib5.FieldType = field.type;
                let typeName : string = type.typeName;
                let readCode : string;
                let def : string = this.defaultValue(type,false);
                if (type.isList) {
                    if (typeName == 'bool') {
                        readCode = 'const fb.BoolListReader()';
                    }else if (typeName == 'int') {
                        readCode = 'const fb.Uint32ListReader()';
                    }else if (typeName == 'double') {
                        readCode = 'const fb.Float64ListReader()';
                    }else if (typeName == 'String') {
                        let itemCode : string = 'const fb.StringReader()';
                        readCode = `const fb.ListReader<String>(${itemCode})`;
                    }else if (this._idl.classes.containsKey(typeName)) {
                        let itemCode : string = `const _${typeName}Reader()`;
                        readCode = `const fb.ListReader<${this.idlPrefix(typeName)}>(${itemCode})`;
                    }else {
                        /* TODO (AssertStatementImpl) : assert (_idl.enums.containsKey(typeName)); */;
                        let itemCode : string = `const _${typeName}Reader()`;
                        readCode = `const fb.ListReader<${this.idlPrefix(typeName)}>(${itemCode})`;
                    }
                }else if (typeName == 'bool') {
                    readCode = 'const fb.BoolReader()';
                }else if (typeName == 'int') {
                    readCode = 'const fb.Uint32Reader()';
                }else if (typeName == 'String') {
                    readCode = 'const fb.StringReader()';
                }else if (this._idl.enums.containsKey(typeName)) {
                    readCode = `const _${typeName}Reader()`;
                }else if (this._idl.classes.containsKey(typeName)) {
                    readCode = `const _${typeName}Reader()`;
                }
                /* TODO (AssertStatementImpl) : assert (readCode != null); */;
                this.out();
                this.out('@override');
                let returnType : string = this.dartType(type);
                if (field.isDeprecated) {
                    this.out(`${returnType} get ${fieldName} => ${_CodeGenerator._throwDeprecated};`);
                }else {
                    this.out(`${returnType} get ${fieldName} {`);
                    this.indent(() =>  {
                        let readExpr : string = `${readCode}.vTableGet(_bc, _bcOffset, ${index}, ${def})`;
                        this.out(`_${fieldName} ??= ${readExpr};`);
                        this.out(`return _${fieldName};`);
                    });
                    this.out('}');
                }
            }
        });
        this.out('}');
    }
    _generateMixin(cls : lib5.ClassDeclaration) : void {
        let name : string = cls.name;
        let mixinName : string = `_${name}Mixin`;
        this.out(`abstract class ${mixinName} implements ${this.idlPrefix(name)} {`);
        this.indent(() =>  {
            this.out('@override');
            this.out('Map<String, Object> toJson() {');
            this.indent(() =>  {
                this.out('Map<String, Object> _result = <String, Object>{};');
                for(let field of cls.fields) {
                    let condition : string;
                    if (field.type.isList) {
                        condition = `${field.name}.isNotEmpty`;
                    }else {
                        condition = `${field.name} != ${this.defaultValue(field.type,false)}`;
                    }
                    let convertItem : (s : string) => string;
                    if (this._idl.classes.containsKey(field.type.typeName)) {
                        convertItem = (name : string) =>  {
                            return `${name}.toJson()`;
                        };
                    }else if (this._idl.enums.containsKey(field.type.typeName)) {
                        convertItem = (name : string) =>  {
                            return `${name}.toString().split('.')[1]`;
                        };
                    }else if (field.type.typeName == 'double') {
                        convertItem = (name : string) =>  {
                            return `${name}.isFinite ? ${name} : ${name}.toString()`;
                        };
                    }
                    let convertField : string;
                    if (op(Op.EQUALS,convertItem,null)) {
                        convertField = field.name;
                    }else if (field.type.isList) {
                        convertField = `${field.name}.map((_value) =>` + ` ${convertItem('_value')}).toList()`;
                    }else {
                        convertField = convertItem(field.name);
                    }
                    let storeField : string = `_result[${this.quoted(field.name)}] = ${convertField}`;
                    this.out(`if (${condition}) ${storeField};`);
                }
                this.out('return _result;');
            });
            this.out('}');
            this.out();
            this.out('@override');
            this.out('Map<String, Object> toMap() => {');
            this.indent(() =>  {
                for(let field of cls.fields) {
                    let fieldName : string = field.name;
                    this.out(`${this.quoted(fieldName)}: ${fieldName},`);
                }
            });
            this.out('};');
            this.out();
            this.out('@override');
            this.out('String toString() => convert.JSON.encode(toJson());');
        });
        this.out('}');
    }
    _generateReader(cls : lib5.ClassDeclaration) : void {
        let name : string = cls.name;
        let readerName : string = `_${name}Reader`;
        let implName : string = `_${name}Impl`;
        this.out(`class ${readerName} extends fb.TableReader<${implName}> {`);
        this.indent(() =>  {
            this.out(`const ${readerName}();`);
            this.out();
            this.out('@override');
            this.out(`${implName} createObject(fb.BufferContext bc, int offset) => new ${implName}(bc, offset);`);
        });
        this.out('}');
    }
    _generateReadFunction(cls : lib5.ClassDeclaration) : void {
        let name : string = cls.name;
        this.out(`${this.idlPrefix(name)} read${name}(List<int> buffer) {`);
        this.indent(() =>  {
            this.out('fb.BufferContext rootRef = new fb.BufferContext.fromBytes(buffer);');
            this.out(`return const _${name}Reader().read(rootRef, 0);`);
        });
        this.out('}');
    }
    _generateSignatureCall(typeName : string,ref : string,couldBeNull : boolean) : void {
        if (this._idl.enums.containsKey(typeName)) {
            if (couldBeNull) {
                this.out(`signature.addInt(${ref} == null ? 0 : ${ref}.index);`);
            }else {
                this.out(`signature.addInt(${ref}.index);`);
            }
        }else if (this._idl.classes.containsKey(typeName)) {
            if (couldBeNull) {
                this.out(`signature.addBool(${ref} != null);`);
            }
            this.out(`${ref}?.collectApiSignature(signature);`);
        }else {
            switch (typeName) {
                case 'String':
                    if (couldBeNull) {
                        ref += " ?? ''";
                    }
                    this.out(`signature.addString(${ref});`);
                    break;
                case 'int':
                    if (couldBeNull) {
                        ref += ' ?? 0';
                    }
                    this.out(`signature.addInt(${ref});`);
                    break;
                case 'bool':
                    if (couldBeNull) {
                        ref += ' == true';
                    }
                    this.out(`signature.addBool(${ref});`);
                    break;
                case 'double':
                    if (couldBeNull) {
                        ref += ' ?? 0.0';
                    }
                    this.out(`signature.addDouble(${ref});`);
                    break;
                default:
                    throw `Don't know how to generate signature call for ${typeName}`;
            }
        }
    }
    _getNodeDoc(node : lib6.AnnotatedNode) : string {
        let comment : lib6.Comment = node.documentationComment;
        if (comment != null && comment.isDocumentation && comment.tokens.length == 1 && comment.tokens.first.lexeme.startsWith('/*')) {
            let token : any = comment.tokens.first;
            return token.lexeme.split('\n').map((line : string) =>  {
                line = new core.DartString(line).trimLeft();
                if (new core.DartString(line).startsWith('*')) line = ' ' + line;
                return line;
            }).join('\n');
        }
        return null;
    }
}

export class properties {
    private static __$allTargets : core.DartList<any>;
    static get allTargets() : core.DartList<any> { 
        if (this.__$allTargets===undefined) {
            this.__$allTargets = new core.DartList.literal<any>(properties.formatTarget,properties.schemaTarget);
        }
        return this.__$allTargets;
    }
    static set allTargets(__$value : core.DartList<any>)  { 
        this.__$allTargets = __$value;
    }

    private static __$formatTarget : any;
    static get formatTarget() : any { 
        if (this.__$formatTarget===undefined) {
            this.__$formatTarget = new bare.createInstance(any,null,'lib/src/summary/format.dart',(pkgPath : string) =>  {
                let codeGenerator : _CodeGenerator = new _CodeGenerator(pkgPath);
                codeGenerator.generateFormatCode();
                return codeGenerator._outBuffer.toString();
            });
        }
        return this.__$formatTarget;
    }
    static set formatTarget(__$value : any)  { 
        this.__$formatTarget = __$value;
    }

    private static __$schemaTarget : any;
    static get schemaTarget() : any { 
        if (this.__$schemaTarget===undefined) {
            this.__$schemaTarget = new bare.createInstance(any,null,'lib/src/summary/format.fbs',(pkgPath : string) =>  {
                let codeGenerator : _CodeGenerator = new _CodeGenerator(pkgPath);
                codeGenerator.generateFlatBufferSchema();
                return codeGenerator._outBuffer.toString();
            });
        }
        return this.__$schemaTarget;
    }
    static set schemaTarget(__$value : any)  { 
        this.__$schemaTarget = __$value;
    }

}
