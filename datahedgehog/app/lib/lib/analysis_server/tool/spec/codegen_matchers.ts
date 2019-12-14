/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/spec/codegen_matchers.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./from_html";
import * as lib4 from "./api";
import * as lib5 from "./to_html";
import * as lib6 from "./implied_types";
import * as convert from "@dart2ts/dart/convert";

export namespace CodegenMatchersVisitor {
    export type Constructors = lib4.HierarchicalApiVisitor.Constructors | 'CodegenMatchersVisitor';
    export type Interface = Omit<CodegenMatchersVisitor, Constructors>;
}
@DartClass
@With(any)
export class CodegenMatchersVisitor extends lib4.HierarchicalApiVisitor implements any.Interface {
    toHtmlVisitor : lib5.ToHtmlVisitor;

    context : string;

    constructor(api : lib4.Api) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CodegenMatchersVisitor(api : lib4.Api) {
        this.toHtmlVisitor = new lib5.ToHtmlVisitor(api);
        super.HierarchicalApiVisitor(api);
        codeGeneratorSettings.commentLineLength = 79;
        codeGeneratorSettings.languageName = 'dart';
    }
    makeMatcher(impliedType : lib6.ImpliedType) : void {
        this.context = impliedType.humanReadableName;
        docComment(this.toHtmlVisitor.collectHtml(() =>  {
            this.toHtmlVisitor.p(() =>  {
                this.toHtmlVisitor.write(this.context);
            });
            if (impliedType.type != null) {
                this.toHtmlVisitor.showType(null,impliedType.type);
            }
        }));
        write(`final Matcher ${camelJoin(new core.DartList.literal('is',impliedType.camelName))} = `);
        if (op(Op.EQUALS,impliedType.type,null)) {
            write('isNull');
        }else {
            this.visitTypeDecl(impliedType.type);
        }
        writeln(';');
        writeln();
    }
    outputObjectFields(fields : core.DartIterable<lib4.TypeObjectField>) : void {
        if (fields.isEmpty) {
            write('null');
            return;
        }
        writeln('{');
        indent(() =>  {
            let commaNeeded : boolean = false;
            for(let field of fields) {
                if (commaNeeded) {
                    writeln(',');
                }
                write(`${convert.properties.JSON.encode(field.name)}: `);
                if (field.value != null) {
                    write(`equals(${convert.properties.JSON.encode(field.value)})`);
                }else {
                    this.visitTypeDecl(field.type);
                }
                commaNeeded = true;
            }
            writeln();
        });
        write('}');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitApi() {
        outputHeader({
            year : '2017'});
        writeln();
        writeln('/**');
        writeln(' * Matchers for data types defined in the analysis server API');
        writeln(' */');
        writeln("import 'package:test/test.dart';");
        writeln();
        writeln("import 'integration_tests.dart';");
        writeln();
        let impliedTypes : core.DartList<lib6.ImpliedType> = lib6.computeImpliedTypes(this.api).values.toList();
        impliedTypes.sort((first : lib6.ImpliedType,second : lib6.ImpliedType) =>  {
            return new core.DartString(first.camelName).compareTo(second.camelName);
        });
        for(let impliedType of impliedTypes) {
            this.makeMatcher(impliedType);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeEnum(typeEnum : lib4.TypeEnum) {
        writeln(`new MatchesEnum(${convert.properties.JSON.encode(this.context)}, [`);
        indent(() =>  {
            let commaNeeded : boolean = false;
            for(let value of typeEnum.values) {
                if (commaNeeded) {
                    writeln(',');
                }
                write(`${convert.properties.JSON.encode(value.value)}`);
                commaNeeded = true;
            }
            writeln();
        });
        write('])');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeList(typeList : lib4.TypeList) {
        write('isListOf(');
        this.visitTypeDecl(typeList.itemType);
        write(')');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeMap(typeMap : lib4.TypeMap) {
        write('isMapOf(');
        this.visitTypeDecl(typeMap.keyType);
        write(', ');
        this.visitTypeDecl(typeMap.valueType);
        write(')');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeObject(typeObject : lib4.TypeObject) : void {
        writeln('new LazyMatcher(() => new MatchesJsonObject(');
        indent(() =>  {
            write(`${convert.properties.JSON.encode(this.context)}, `);
            let requiredFields : core.DartIterable<lib4.TypeObjectField> = typeObject.fields.where((field : lib4.TypeObjectField) =>  {
                return !field.optional;
            });
            this.outputObjectFields(requiredFields);
            let optionalFields : core.DartList<lib4.TypeObjectField> = typeObject.fields.where((field : lib4.TypeObjectField) =>  {
                return field.optional;
            }).toList();
            if (optionalFields.isNotEmpty) {
                write(', optionalFields: ');
                this.outputObjectFields(optionalFields);
            }
        });
        write('))');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeReference(typeReference : lib4.TypeReference) : void {
        let typeName : string = typeReference.typeName;
        if (typeName == 'long') {
            typeName = 'int';
        }
        write(camelJoin(new core.DartList.literal('is',typeName)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeUnion(typeUnion : lib4.TypeUnion) : void {
        let commaNeeded : boolean = false;
        write('isOneOf([');
        for(let choice of typeUnion.choices) {
            if (commaNeeded) {
                write(', ');
            }
            this.visitTypeDecl(choice);
            commaNeeded = true;
        }
        write('])');
    }
}

export class properties {
    private static __$target : any;
    static get target() : any { 
        if (this.__$target===undefined) {
            this.__$target = new bare.createInstance(any,null,'test/integration/support/protocol_matchers.dart',(pkgPath : string) =>  {
                let visitor : CodegenMatchersVisitor = new CodegenMatchersVisitor(lib3.readApi(pkgPath));
                return visitor.collectCode(visitor.visitApi.bind(visitor));
            });
        }
        return this.__$target;
    }
    static set target(__$value : any)  { 
        this.__$target = __$value;
    }

}
