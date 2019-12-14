/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/dart/element/builder_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../generated/test_support";
import * as lib4 from "./../../generated/parser_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ApiElementBuilderTest);
        defineReflectiveTests(ElementBuilderTest);
        defineReflectiveTests(LocalElementBuilderTest);
    });
};
export namespace _ApiElementBuilderTestMixin {
    export type Constructors = '_ApiElementBuilderTestMixin';
    export type Interface = Omit<_ApiElementBuilderTestMixin, Constructors>;
}
@DartClass
export class _ApiElementBuilderTestMixin {
    @AbstractProperty
    get compilationUnit() : any{ throw 'abstract'}
    @Abstract
    assertHasCodeRange(element : any,offset : number,length : number) : void{ throw 'abstract'}
    @Abstract
    buildElementsForAst(node : any) : any{ throw 'abstract'}
    @Abstract
    buildElementsForText(code : string) : any{ throw 'abstract'}
    @Abstract
    checkAnnotation(metadata : any) : void{ throw 'abstract'}
    @Abstract
    checkMetadata(element : any) : void{ throw 'abstract'}
    test_genericFunction_asTopLevelVariableType() : void {
        this.buildElementsForText('int Function(int a, String) v;');
        let v = op(Op.INDEX,this.compilationUnit.declarations,0) as any;
        let typeNode = v.variables.type as any;
        let typeElement = typeNode.type.element as any;
        expect(typeElement.parameters,hasLength(2));
        expect(op(Op.INDEX,typeElement.parameters,0).name,'a');
        expect(op(Op.INDEX,typeElement.parameters,1).name,'');
    }
    test_metadata_fieldDeclaration() : void {
        let fields : core.DartList<any> = op(Op.INDEX,this.buildElementsForText('class C { @a int x, y; }').types,0).fields;
        this.checkMetadata(fields[0]);
        this.checkMetadata(fields[1]);
        expect(fields[0].metadata,same(fields[1].metadata));
    }
    test_metadata_topLevelVariableDeclaration() : void {
        let topLevelVariables : core.DartList<any> = this.buildElementsForText('@a int x, y;').topLevelVariables;
        this.checkMetadata(topLevelVariables[0]);
        this.checkMetadata(topLevelVariables[1]);
        expect(topLevelVariables[0].metadata,same(topLevelVariables[1].metadata));
    }
    test_metadata_visitClassDeclaration() : void {
        let classElement : any = op(Op.INDEX,this.buildElementsForText('@a class C {}').types,0);
        this.checkMetadata(classElement);
    }
    test_metadata_visitClassTypeAlias() : void {
        let classElement : any = op(Op.INDEX,this.buildElementsForText('@a class C = D with E;').types,0);
        this.checkMetadata(classElement);
    }
    test_metadata_visitConstructorDeclaration() : void {
        let constructorElement : any = op(Op.INDEX,op(Op.INDEX,this.buildElementsForText('class C { @a C(); }').types,0).constructors,0);
        this.checkMetadata(constructorElement);
    }
    test_metadata_visitDefaultFormalParameter_fieldFormalParameter() : void {
        let parameterElement : any = op(Op.INDEX,op(Op.INDEX,op(Op.INDEX,this.buildElementsForText('class C { var x; C([@a this.x = null]); }').types,0).constructors,0).parameters,0);
        this.checkMetadata(parameterElement);
    }
    test_metadata_visitDefaultFormalParameter_functionTypedFormalParameter() : void {
        let parameterElement : any = op(Op.INDEX,op(Op.INDEX,this.buildElementsForText('f([@a g() = null]) {}').functions,0).parameters,0);
        this.checkMetadata(parameterElement);
    }
    test_metadata_visitDefaultFormalParameter_simpleFormalParameter() : void {
        let parameterElement : any = op(Op.INDEX,op(Op.INDEX,this.buildElementsForText('f([@a gx = null]) {}').functions,0).parameters,0);
        this.checkMetadata(parameterElement);
    }
    test_metadata_visitEnumDeclaration() : void {
        let classElement : any = op(Op.INDEX,this.buildElementsForText('@a enum E { v }').enums,0);
        this.checkMetadata(classElement);
    }
    test_metadata_visitExportDirective() : void {
        this.buildElementsForText('@a export "foo.dart";');
        expect(op(Op.INDEX,this.compilationUnit.directives,0),new bare.createInstance(any,null));
        let exportDirective : any = op(Op.INDEX,this.compilationUnit.directives,0);
        this.checkAnnotation(exportDirective.metadata);
    }
    test_metadata_visitFieldFormalParameter() : void {
        let parameterElement : any = op(Op.INDEX,op(Op.INDEX,op(Op.INDEX,this.buildElementsForText('class C { var x; C(@a this.x); }').types,0).constructors,0).parameters,0);
        this.checkMetadata(parameterElement);
    }
    test_metadata_visitFunctionDeclaration_function() : void {
        let functionElement : any = op(Op.INDEX,this.buildElementsForText('@a f() {}').functions,0);
        this.checkMetadata(functionElement);
    }
    test_metadata_visitFunctionDeclaration_getter() : void {
        let propertyAccessorElement : any = op(Op.INDEX,this.buildElementsForText('@a get f => null;').accessors,0);
        this.checkMetadata(propertyAccessorElement);
    }
    test_metadata_visitFunctionDeclaration_setter() : void {
        let propertyAccessorElement : any = op(Op.INDEX,this.buildElementsForText('@a set f(value) {}').accessors,0);
        this.checkMetadata(propertyAccessorElement);
    }
    test_metadata_visitFunctionTypeAlias() : void {
        let functionTypeAliasElement : any = op(Op.INDEX,this.buildElementsForText('@a typedef F();').typeAliases,0);
        this.checkMetadata(functionTypeAliasElement);
    }
    test_metadata_visitFunctionTypedFormalParameter() : void {
        let parameterElement : any = op(Op.INDEX,op(Op.INDEX,this.buildElementsForText('f(@a g()) {}').functions,0).parameters,0);
        this.checkMetadata(parameterElement);
    }
    test_metadata_visitImportDirective() : void {
        this.buildElementsForText('@a import "foo.dart";');
        expect(op(Op.INDEX,this.compilationUnit.directives,0),new bare.createInstance(any,null));
        let importDirective : any = op(Op.INDEX,this.compilationUnit.directives,0);
        this.checkAnnotation(importDirective.metadata);
    }
    test_metadata_visitLibraryDirective() : void {
        this.buildElementsForText('@a library L;');
        expect(op(Op.INDEX,this.compilationUnit.directives,0),new bare.createInstance(any,null));
        let libraryDirective : any = op(Op.INDEX,this.compilationUnit.directives,0);
        this.checkAnnotation(libraryDirective.metadata);
    }
    test_metadata_visitMethodDeclaration_getter() : void {
        let propertyAccessorElement : any = op(Op.INDEX,op(Op.INDEX,this.buildElementsForText('class C { @a get m => null; }').types,0).accessors,0);
        this.checkMetadata(propertyAccessorElement);
    }
    test_metadata_visitMethodDeclaration_method() : void {
        let methodElement : any = op(Op.INDEX,op(Op.INDEX,this.buildElementsForText('class C { @a m() {} }').types,0).methods,0);
        this.checkMetadata(methodElement);
    }
    test_metadata_visitMethodDeclaration_setter() : void {
        let propertyAccessorElement : any = op(Op.INDEX,op(Op.INDEX,this.buildElementsForText('class C { @a set f(value) {} }').types,0).accessors,0);
        this.checkMetadata(propertyAccessorElement);
    }
    test_metadata_visitPartDirective() : void {
        this.buildElementsForText('@a part "foo.dart";');
        expect(op(Op.INDEX,this.compilationUnit.directives,0),new bare.createInstance(any,null));
        let partDirective : any = op(Op.INDEX,this.compilationUnit.directives,0);
        this.checkAnnotation(partDirective.metadata);
    }
    test_metadata_visitPartOfDirective() : void {
        this.buildElementsForText('@a part of L;');
        expect(op(Op.INDEX,this.compilationUnit.directives,0),new bare.createInstance(any,null));
        let partOfDirective : any = op(Op.INDEX,this.compilationUnit.directives,0);
        expect(partOfDirective.metadata,hasLength(1));
        expect(op(Op.INDEX,partOfDirective.metadata,0).elementAnnotation,isNull);
    }
    test_metadata_visitSimpleFormalParameter() : void {
        let parameterElement : any = op(Op.INDEX,op(Op.INDEX,this.buildElementsForText('f(@a x) {}').functions,0).parameters,0);
        this.checkMetadata(parameterElement);
    }
    test_metadata_visitTypeParameter() : void {
        let typeParameterElement : any = op(Op.INDEX,op(Op.INDEX,this.buildElementsForText('class C<@a T> {}').types,0).typeParameters,0);
        this.checkMetadata(typeParameterElement);
    }
    test_visitClassDeclaration_abstract() : void {
        let types : core.DartList<any> = this.buildElementsForText('abstract class C {}').types;
        expect(types,hasLength(1));
        let type : any = types[0];
        expect(type,isNotNull);
        expect(type.name,'C');
        let typeParameters : core.DartList<any> = type.typeParameters;
        expect(typeParameters,hasLength(0));
        expect(type.isAbstract,isTrue);
        expect(type.isMixinApplication,isFalse);
        expect(type.isSynthetic,isFalse);
    }
    test_visitClassDeclaration_invalidFunctionInAnnotation_class() : void {
        let code : string = 'class A {\n  const A({f});\n}\n\n@A(f: () {})\nclass C {}\n';
        this.buildElementsForText(code);
    }
    test_visitClassDeclaration_invalidFunctionInAnnotation_method() : void {
        let code : string = 'class A {\n  const A({f});\n}\n\nclass C {\n  @A(f: () {})\n  void m() {}\n}\n';
        let holder : any = this.buildElementsForText(code);
        let elementC : any = op(Op.INDEX,holder.types,1);
        expect(elementC,isNotNull);
        let methodM : any = op(Op.INDEX,elementC.methods,0);
        expect(methodM,isNotNull);
        expect(methodM.functions,isEmpty);
    }
    test_visitClassDeclaration_minimal() : void {
        let className : string = "C";
        let classDeclaration : any = AstTestFactory.classDeclaration(null,className,null,null,null,null);
        classDeclaration.documentationComment = AstTestFactory.documentationComment(new core.DartList.literal(((_) : any =>  {
            {
                _.offset = 50;
                return _;
            }
        })(TokenFactory.tokenFromString('/// aaa'))),new core.DartList.literal());
        classDeclaration.endToken.offset = 80;
        let holder : any = this.buildElementsForAst(classDeclaration);
        let types : core.DartList<any> = holder.types;
        expect(types,hasLength(1));
        let type : any = types[0];
        expect(type,isNotNull);
        expect(type.name,className);
        let typeParameters : core.DartList<any> = type.typeParameters;
        expect(typeParameters,hasLength(0));
        expect(type.isAbstract,isFalse);
        expect(type.isMixinApplication,isFalse);
        expect(type.isSynthetic,isFalse);
        expect(type.documentationComment,'/// aaa');
        this.assertHasCodeRange(type,50,31);
    }
    test_visitClassDeclaration_parameterized() : void {
        let className : string = "C";
        let firstVariableName : string = "E";
        let secondVariableName : string = "F";
        let classDeclaration : any = AstTestFactory.classDeclaration(null,className,AstTestFactory.typeParameterList(new core.DartList.literal(firstVariableName,secondVariableName)),null,null,null);
        let holder : any = this.buildElementsForAst(classDeclaration);
        let types : core.DartList<any> = holder.types;
        expect(types,hasLength(1));
        let type : any = types[0];
        expect(type,isNotNull);
        expect(type.name,className);
        let typeParameters : core.DartList<any> = type.typeParameters;
        expect(typeParameters,hasLength(2));
        expect(typeParameters[0].name,firstVariableName);
        expect(typeParameters[1].name,secondVariableName);
        expect(type.isAbstract,isFalse);
        expect(type.isMixinApplication,isFalse);
        expect(type.isSynthetic,isFalse);
    }
    test_visitClassDeclaration_withMembers() : void {
        let className : string = "C";
        let typeParameterName : string = "E";
        let fieldName : string = "f";
        let methodName : string = "m";
        let classDeclaration : any = AstTestFactory.classDeclaration(null,className,AstTestFactory.typeParameterList(new core.DartList.literal(typeParameterName)),null,null,null,new core.DartList.literal(AstTestFactory.fieldDeclaration2(false,null,new core.DartList.literal(AstTestFactory.variableDeclaration(fieldName))),AstTestFactory.methodDeclaration2(null,null,null,null,AstTestFactory.identifier3(methodName),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2())));
        let holder : any = this.buildElementsForAst(classDeclaration);
        let types : core.DartList<any> = holder.types;
        expect(types,hasLength(1));
        let type : any = types[0];
        expect(type,isNotNull);
        expect(type.name,className);
        expect(type.isAbstract,isFalse);
        expect(type.isMixinApplication,isFalse);
        expect(type.isSynthetic,isFalse);
        let typeParameters : core.DartList<any> = type.typeParameters;
        expect(typeParameters,hasLength(1));
        let typeParameter : any = typeParameters[0];
        expect(typeParameter,isNotNull);
        expect(typeParameter.name,typeParameterName);
        let fields : core.DartList<any> = type.fields;
        expect(fields,hasLength(1));
        let field : any = fields[0];
        expect(field,isNotNull);
        expect(field.name,fieldName);
        let methods : core.DartList<any> = type.methods;
        expect(methods,hasLength(1));
        let method : any = methods[0];
        expect(method,isNotNull);
        expect(method.name,methodName);
    }
    test_visitClassTypeAlias() : void {
        let classB : any = ElementFactory.classElement2('B',new core.DartList.literal());
        let constructorB : any = ElementFactory.constructorElement2(classB,'',new core.DartList.literal());
        constructorB.setModifier(Modifier.SYNTHETIC,true);
        classB.constructors = new core.DartList.literal(constructorB);
        let classM : any = ElementFactory.classElement2('M',new core.DartList.literal());
        let withClause : any = AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName(classM,new core.DartList.literal())));
        let alias : any = AstTestFactory.classTypeAlias('C',null,null,AstTestFactory.typeName(classB,new core.DartList.literal()),withClause,null);
        let holder : any = this.buildElementsForAst(alias);
        let types : core.DartList<any> = holder.types;
        expect(types,hasLength(1));
        let type : any = types[0];
        expect(alias.element,same(type));
        expect(type.name,equals('C'));
        expect(type.isAbstract,isFalse);
        expect(type.isMixinApplication,isTrue);
        expect(type.isSynthetic,isFalse);
        expect(type.typeParameters,isEmpty);
        expect(type.fields,isEmpty);
        expect(type.methods,isEmpty);
    }
    test_visitClassTypeAlias_abstract() : void {
        let classB : any = ElementFactory.classElement2('B',new core.DartList.literal());
        let constructorB : any = ElementFactory.constructorElement2(classB,'',new core.DartList.literal());
        constructorB.setModifier(Modifier.SYNTHETIC,true);
        classB.constructors = new core.DartList.literal(constructorB);
        let classM : any = ElementFactory.classElement2('M',new core.DartList.literal());
        let withClause : any = AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName(classM,new core.DartList.literal())));
        let alias : any = AstTestFactory.classTypeAlias('C',null,Keyword.ABSTRACT,AstTestFactory.typeName(classB,new core.DartList.literal()),withClause,null);
        let holder : any = this.buildElementsForAst(alias);
        let types : core.DartList<any> = holder.types;
        expect(types,hasLength(1));
        let type : any = types[0];
        expect(type.isAbstract,isTrue);
        expect(type.isMixinApplication,isTrue);
    }
    test_visitClassTypeAlias_typeParams() : void {
        let classB : any = ElementFactory.classElement2('B',new core.DartList.literal());
        let constructorB : any = ElementFactory.constructorElement2(classB,'',new core.DartList.literal());
        constructorB.setModifier(Modifier.SYNTHETIC,true);
        classB.constructors = new core.DartList.literal(constructorB);
        let classM : any = ElementFactory.classElement2('M',new core.DartList.literal());
        let withClause : any = AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName(classM,new core.DartList.literal())));
        let alias : any = AstTestFactory.classTypeAlias('C',AstTestFactory.typeParameterList(new core.DartList.literal('T')),null,AstTestFactory.typeName(classB,new core.DartList.literal()),withClause,null);
        let holder : any = this.buildElementsForAst(alias);
        let types : core.DartList<any> = holder.types;
        expect(types,hasLength(1));
        let type : any = types[0];
        expect(type.typeParameters,hasLength(1));
        expect(op(Op.INDEX,type.typeParameters,0).name,equals('T'));
    }
    test_visitConstructorDeclaration_external() : void {
        let className : string = "A";
        let constructorDeclaration : any = AstTestFactory.constructorDeclaration2(null,null,AstTestFactory.identifier3(className),null,AstTestFactory.formalParameterList(),null,AstTestFactory.blockFunctionBody2());
        constructorDeclaration.externalKeyword = TokenFactory.tokenFromKeyword(Keyword.EXTERNAL);
        let holder : any = this.buildElementsForAst(constructorDeclaration);
        let constructors : core.DartList<any> = holder.constructors;
        expect(constructors,hasLength(1));
        let constructor : any = constructors[0];
        expect(constructor,isNotNull);
        expect(constructor.isExternal,isTrue);
        expect(constructor.isFactory,isFalse);
        expect(constructor.name,"");
        expect(constructor.functions,hasLength(0));
        expect(constructor.labels,hasLength(0));
        expect(constructor.localVariables,hasLength(0));
        expect(constructor.parameters,hasLength(0));
    }
    test_visitConstructorDeclaration_factory() : void {
        let className : string = "A";
        let constructorDeclaration : any = AstTestFactory.constructorDeclaration2(null,Keyword.FACTORY,AstTestFactory.identifier3(className),null,AstTestFactory.formalParameterList(),null,AstTestFactory.blockFunctionBody2());
        let holder : any = this.buildElementsForAst(constructorDeclaration);
        let constructors : core.DartList<any> = holder.constructors;
        expect(constructors,hasLength(1));
        let constructor : any = constructors[0];
        expect(constructor,isNotNull);
        expect(constructor.isExternal,isFalse);
        expect(constructor.isFactory,isTrue);
        expect(constructor.name,"");
        expect(constructor.functions,hasLength(0));
        expect(constructor.labels,hasLength(0));
        expect(constructor.localVariables,hasLength(0));
        expect(constructor.parameters,hasLength(0));
    }
    test_visitConstructorDeclaration_minimal() : void {
        let className : string = "A";
        let constructorDeclaration : any = AstTestFactory.constructorDeclaration2(null,null,AstTestFactory.identifier3(className),null,AstTestFactory.formalParameterList(),null,AstTestFactory.blockFunctionBody2());
        constructorDeclaration.documentationComment = AstTestFactory.documentationComment(new core.DartList.literal(((_) : any =>  {
            {
                _.offset = 50;
                return _;
            }
        })(TokenFactory.tokenFromString('/// aaa'))),new core.DartList.literal());
        constructorDeclaration.endToken.offset = 80;
        let holder : any = this.buildElementsForAst(constructorDeclaration);
        let constructors : core.DartList<any> = holder.constructors;
        expect(constructors,hasLength(1));
        let constructor : any = constructors[0];
        expect(constructor,isNotNull);
        this.assertHasCodeRange(constructor,50,31);
        expect(constructor.documentationComment,'/// aaa');
        expect(constructor.isExternal,isFalse);
        expect(constructor.isFactory,isFalse);
        expect(constructor.name,"");
        expect(constructor.functions,hasLength(0));
        expect(constructor.labels,hasLength(0));
        expect(constructor.localVariables,hasLength(0));
        expect(constructor.parameters,hasLength(0));
    }
    test_visitConstructorDeclaration_named() : void {
        let className : string = "A";
        let constructorName : string = "c";
        let constructorDeclaration : any = AstTestFactory.constructorDeclaration2(null,null,AstTestFactory.identifier3(className),constructorName,AstTestFactory.formalParameterList(),null,AstTestFactory.blockFunctionBody2());
        let holder : any = this.buildElementsForAst(constructorDeclaration);
        let constructors : core.DartList<any> = holder.constructors;
        expect(constructors,hasLength(1));
        let constructor : any = constructors[0];
        expect(constructor,isNotNull);
        expect(constructor.isExternal,isFalse);
        expect(constructor.isFactory,isFalse);
        expect(constructor.name,constructorName);
        expect(constructor.functions,hasLength(0));
        expect(constructor.labels,hasLength(0));
        expect(constructor.localVariables,hasLength(0));
        expect(constructor.parameters,hasLength(0));
        expect(constructorDeclaration.name.staticElement,same(constructor));
        expect(constructorDeclaration.element,same(constructor));
    }
    test_visitConstructorDeclaration_unnamed() : void {
        let className : string = "A";
        let constructorDeclaration : any = AstTestFactory.constructorDeclaration2(null,null,AstTestFactory.identifier3(className),null,AstTestFactory.formalParameterList(),null,AstTestFactory.blockFunctionBody2());
        let holder : any = this.buildElementsForAst(constructorDeclaration);
        let constructors : core.DartList<any> = holder.constructors;
        expect(constructors,hasLength(1));
        let constructor : any = constructors[0];
        expect(constructor,isNotNull);
        expect(constructor.isExternal,isFalse);
        expect(constructor.isFactory,isFalse);
        expect(constructor.name,"");
        expect(constructor.functions,hasLength(0));
        expect(constructor.labels,hasLength(0));
        expect(constructor.localVariables,hasLength(0));
        expect(constructor.parameters,hasLength(0));
        expect(constructorDeclaration.element,same(constructor));
    }
    test_visitEnumDeclaration() : void {
        let enumName : string = "E";
        let enumDeclaration : any = AstTestFactory.enumDeclaration2(enumName,new core.DartList.literal("ONE"));
        enumDeclaration.documentationComment = AstTestFactory.documentationComment(new core.DartList.literal(((_) : any =>  {
            {
                _.offset = 50;
                return _;
            }
        })(TokenFactory.tokenFromString('/// aaa'))),new core.DartList.literal());
        enumDeclaration.endToken.offset = 80;
        let holder : any = this.buildElementsForAst(enumDeclaration);
        let enums : core.DartList<any> = holder.enums;
        expect(enums,hasLength(1));
        let enumElement : any = enums[0];
        expect(enumElement,isNotNull);
        this.assertHasCodeRange(enumElement,50,31);
        expect(enumElement.documentationComment,'/// aaa');
        expect(enumElement.name,enumName);
    }
    test_visitFieldDeclaration() : void {
        let firstFieldName : string = "x";
        let secondFieldName : string = "y";
        let fieldDeclaration : any = AstTestFactory.fieldDeclaration2(false,null,new core.DartList.literal(AstTestFactory.variableDeclaration(firstFieldName),AstTestFactory.variableDeclaration(secondFieldName)));
        fieldDeclaration.documentationComment = AstTestFactory.documentationComment(new core.DartList.literal(((_) : any =>  {
            {
                _.offset = 50;
                return _;
            }
        })(TokenFactory.tokenFromString('/// aaa'))),new core.DartList.literal());
        fieldDeclaration.endToken.offset = 110;
        let holder : any = this.buildElementsForAst(fieldDeclaration);
        let fields : core.DartList<any> = holder.fields;
        expect(fields,hasLength(2));
        let firstField : any = fields[0];
        expect(firstField,isNotNull);
        this.assertHasCodeRange(firstField,50,61);
        expect(firstField.documentationComment,'/// aaa');
        expect(firstField.name,firstFieldName);
        expect(firstField.initializer,isNull);
        expect(firstField.isConst,isFalse);
        expect(firstField.isFinal,isFalse);
        expect(firstField.isSynthetic,isFalse);
        let secondField : any = fields[1];
        expect(secondField,isNotNull);
        this.assertHasCodeRange(secondField,50,61);
        expect(secondField.documentationComment,'/// aaa');
        expect(secondField.name,secondFieldName);
        expect(secondField.initializer,isNull);
        expect(secondField.isConst,isFalse);
        expect(secondField.isFinal,isFalse);
        expect(secondField.isSynthetic,isFalse);
    }
    test_visitFieldFormalParameter() : void {
        let parameterName : string = "p";
        let formalParameter : any = AstTestFactory.fieldFormalParameter(null,null,parameterName);
        formalParameter.beginToken.offset = 50;
        formalParameter.endToken.offset = 80;
        let holder : any = this.buildElementsForAst(formalParameter);
        let parameters : core.DartList<any> = holder.parameters;
        expect(parameters,hasLength(1));
        let parameter : any = parameters[0];
        expect(parameter,isNotNull);
        this.assertHasCodeRange(parameter,50,31);
        expect(parameter.name,parameterName);
        expect(parameter.initializer,isNull);
        expect(parameter.isConst,isFalse);
        expect(parameter.isFinal,isFalse);
        expect(parameter.isSynthetic,isFalse);
        expect(parameter.parameterKind,ParameterKind.REQUIRED);
        expect(parameter.parameters,hasLength(0));
    }
    test_visitFieldFormalParameter_functionTyped() : void {
        let parameterName : string = "p";
        let formalParameter : any = AstTestFactory.fieldFormalParameter(null,null,parameterName,AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("a"))));
        let holder : any = this.buildElementsForAst(formalParameter);
        let parameters : core.DartList<any> = holder.parameters;
        expect(parameters,hasLength(1));
        let parameter : any = parameters[0];
        expect(parameter,isNotNull);
        expect(parameter.name,parameterName);
        expect(parameter.initializer,isNull);
        expect(parameter.isConst,isFalse);
        expect(parameter.isFinal,isFalse);
        expect(parameter.isSynthetic,isFalse);
        expect(parameter.parameterKind,ParameterKind.REQUIRED);
        expect(parameter.parameters,hasLength(1));
    }
    test_visitFormalParameterList() : void {
        let firstParameterName : string = "a";
        let secondParameterName : string = "b";
        let parameterList : any = AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3(firstParameterName),AstTestFactory.simpleFormalParameter3(secondParameterName)));
        let holder : any = this.buildElementsForAst(parameterList);
        let parameters : core.DartList<any> = holder.parameters;
        expect(parameters,hasLength(2));
        expect(parameters[0].name,firstParameterName);
        expect(parameters[1].name,secondParameterName);
    }
    test_visitFunctionDeclaration_external() : void {
        let functionName : string = "f";
        let declaration : any = AstTestFactory.functionDeclaration(null,null,functionName,AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.emptyFunctionBody()));
        declaration.externalKeyword = TokenFactory.tokenFromKeyword(Keyword.EXTERNAL);
        let holder : any = this.buildElementsForAst(declaration);
        let functions : core.DartList<any> = holder.functions;
        expect(functions,hasLength(1));
        let function : any = functions[0];
        expect(function,isNotNull);
        expect(function.name,functionName);
        expect(declaration.element,same(function));
        expect(declaration.functionExpression.element,same(function));
        expect(function.hasImplicitReturnType,isTrue);
        expect(function.isExternal,isTrue);
        expect(function.isSynthetic,isFalse);
        expect(function.typeParameters,hasLength(0));
    }
    test_visitFunctionDeclaration_getter() : void {
        let functionName : string = "f";
        let declaration : any = AstTestFactory.functionDeclaration(null,Keyword.GET,functionName,AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
        declaration.documentationComment = AstTestFactory.documentationComment(new core.DartList.literal(((_) : any =>  {
            {
                _.offset = 50;
                return _;
            }
        })(TokenFactory.tokenFromString('/// aaa'))),new core.DartList.literal());
        declaration.endToken.offset = 80;
        let holder : any = this.buildElementsForAst(declaration);
        let accessors : core.DartList<any> = holder.accessors;
        expect(accessors,hasLength(1));
        let accessor : any = accessors[0];
        expect(accessor,isNotNull);
        this.assertHasCodeRange(accessor,50,31);
        expect(accessor.documentationComment,'/// aaa');
        expect(accessor.name,functionName);
        expect(declaration.element,same(accessor));
        expect(declaration.functionExpression.element,same(accessor));
        expect(accessor.hasImplicitReturnType,isTrue);
        expect(accessor.isGetter,isTrue);
        expect(accessor.isExternal,isFalse);
        expect(accessor.isSetter,isFalse);
        expect(accessor.isSynthetic,isFalse);
        expect(accessor.typeParameters,hasLength(0));
        let variable : any = accessor.variable;
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },TopLevelVariableElement,variable);
        expect(variable.isSynthetic,isTrue);
    }
    test_visitFunctionDeclaration_plain() : void {
        let functionName : string = "f";
        let declaration : any = AstTestFactory.functionDeclaration(AstTestFactory.typeName4('T'),null,functionName,AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
        declaration.documentationComment = AstTestFactory.documentationComment(new core.DartList.literal(((_) : any =>  {
            {
                _.offset = 50;
                return _;
            }
        })(TokenFactory.tokenFromString('/// aaa'))),new core.DartList.literal());
        declaration.endToken.offset = 80;
        let holder : any = this.buildElementsForAst(declaration);
        let functions : core.DartList<any> = holder.functions;
        expect(functions,hasLength(1));
        let function : any = functions[0];
        expect(function,isNotNull);
        this.assertHasCodeRange(function,50,31);
        expect(function.documentationComment,'/// aaa');
        expect(function.hasImplicitReturnType,isFalse);
        expect(function.name,functionName);
        expect(declaration.element,same(function));
        expect(declaration.functionExpression.element,same(function));
        expect(function.isExternal,isFalse);
        expect(function.isSynthetic,isFalse);
        expect(function.typeParameters,hasLength(0));
    }
    test_visitFunctionDeclaration_setter() : void {
        let functionName : string = "f";
        let declaration : any = AstTestFactory.functionDeclaration(null,Keyword.SET,functionName,AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2()));
        declaration.documentationComment = AstTestFactory.documentationComment(new core.DartList.literal(((_) : any =>  {
            {
                _.offset = 50;
                return _;
            }
        })(TokenFactory.tokenFromString('/// aaa'))),new core.DartList.literal());
        declaration.endToken.offset = 80;
        let holder : any = this.buildElementsForAst(declaration);
        let accessors : core.DartList<any> = holder.accessors;
        expect(accessors,hasLength(1));
        let accessor : any = accessors[0];
        expect(accessor,isNotNull);
        this.assertHasCodeRange(accessor,50,31);
        expect(accessor.documentationComment,'/// aaa');
        expect(accessor.hasImplicitReturnType,isTrue);
        expect(accessor.name,`${functionName}=`);
        expect(declaration.element,same(accessor));
        expect(declaration.functionExpression.element,same(accessor));
        expect(accessor.isGetter,isFalse);
        expect(accessor.isExternal,isFalse);
        expect(accessor.isSetter,isTrue);
        expect(accessor.isSynthetic,isFalse);
        expect(accessor.typeParameters,hasLength(0));
        let variable : any = accessor.variable;
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },TopLevelVariableElement,variable);
        expect(variable.isSynthetic,isTrue);
    }
    test_visitFunctionDeclaration_typeParameters() : void {
        let functionName : string = 'f';
        let typeParameterName : string = 'E';
        let expression : any = AstTestFactory.functionExpression3(AstTestFactory.typeParameterList(new core.DartList.literal(typeParameterName)),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2());
        let declaration : any = AstTestFactory.functionDeclaration(null,null,functionName,expression);
        let holder : any = this.buildElementsForAst(declaration);
        let functions : core.DartList<any> = holder.functions;
        expect(functions,hasLength(1));
        let function : any = functions[0];
        expect(function,isNotNull);
        expect(function.hasImplicitReturnType,isTrue);
        expect(function.name,functionName);
        expect(function.isExternal,isFalse);
        expect(function.isSynthetic,isFalse);
        expect(declaration.element,same(function));
        expect(expression.element,same(function));
        let typeParameters : core.DartList<any> = function.typeParameters;
        expect(typeParameters,hasLength(1));
        let typeParameter : any = typeParameters[0];
        expect(typeParameter,isNotNull);
        expect(typeParameter.name,typeParameterName);
    }
    test_visitMethodDeclaration_abstract() : void {
        let methodName : string = "m";
        let methodDeclaration : any = AstTestFactory.methodDeclaration2(null,null,null,null,AstTestFactory.identifier3(methodName),AstTestFactory.formalParameterList(),AstTestFactory.emptyFunctionBody());
        let holder : any = this.buildElementsForAst(methodDeclaration);
        let methods : core.DartList<any> = holder.methods;
        expect(methods,hasLength(1));
        let method : any = methods[0];
        expect(method,isNotNull);
        expect(method.hasImplicitReturnType,isTrue);
        expect(method.name,methodName);
        expect(method.functions,hasLength(0));
        expect(method.labels,hasLength(0));
        expect(method.localVariables,hasLength(0));
        expect(method.parameters,hasLength(0));
        expect(method.typeParameters,hasLength(0));
        expect(method.isAbstract,isTrue);
        expect(method.isExternal,isFalse);
        expect(method.isStatic,isFalse);
        expect(method.isSynthetic,isFalse);
    }
    test_visitMethodDeclaration_duplicateField_synthetic() : void {
        this.buildElementsForText('class A {\n  int f;\n  int get f => 42;\n}\n');
        let classNode : any = this.compilationUnit.declarations.single;
        let classElement : any = classNode.element;
        expect(classElement.fields,hasLength(2));
        expect(classElement.accessors,hasLength(3));
        let notSyntheticFieldElement : any = classElement.fields.singleWhere((f : any) =>  {
            return op(Op.EQUALS,f.displayName,'f') && !f.isSynthetic;
        });
        let syntheticFieldElement : any = classElement.fields.singleWhere((f : any) =>  {
            return op(Op.EQUALS,f.displayName,'f') && f.isSynthetic;
        });
        let syntheticGetterElement : any = classElement.accessors.singleWhere((a : any) =>  {
            return op(Op.EQUALS,a.displayName,'f') && a.isGetter && a.isSynthetic;
        });
        let syntheticSetterElement : any = classElement.accessors.singleWhere((a : any) =>  {
            return op(Op.EQUALS,a.displayName,'f') && a.isSetter && a.isSynthetic;
        });
        let notSyntheticGetterElement : any = classElement.accessors.singleWhere((a : any) =>  {
            return op(Op.EQUALS,a.displayName,'f') && a.isGetter && !a.isSynthetic;
        });
        expect(notSyntheticFieldElement.getter,same(syntheticGetterElement));
        expect(notSyntheticFieldElement.setter,same(syntheticSetterElement));
        expect(syntheticFieldElement.getter,same(notSyntheticGetterElement));
        expect(syntheticFieldElement.setter,isNull);
        let fieldDeclNode : any = op(Op.INDEX,classNode.members,0);
        let fieldNode : any = fieldDeclNode.fields.variables.single;
        let getterNode : any = op(Op.INDEX,classNode.members,1);
        expect(fieldNode.element,notSyntheticFieldElement);
        expect(getterNode.element,notSyntheticGetterElement);
    }
    test_visitMethodDeclaration_external() : void {
        let methodName : string = "m";
        let methodDeclaration : any = AstTestFactory.methodDeclaration2(null,null,null,null,AstTestFactory.identifier3(methodName),AstTestFactory.formalParameterList(),AstTestFactory.emptyFunctionBody());
        methodDeclaration.externalKeyword = TokenFactory.tokenFromKeyword(Keyword.EXTERNAL);
        let holder : any = this.buildElementsForAst(methodDeclaration);
        let methods : core.DartList<any> = holder.methods;
        expect(methods,hasLength(1));
        let method : any = methods[0];
        expect(method,isNotNull);
        expect(method.hasImplicitReturnType,isTrue);
        expect(method.name,methodName);
        expect(method.functions,hasLength(0));
        expect(method.labels,hasLength(0));
        expect(method.localVariables,hasLength(0));
        expect(method.parameters,hasLength(0));
        expect(method.typeParameters,hasLength(0));
        expect(method.isAbstract,isFalse);
        expect(method.isExternal,isTrue);
        expect(method.isStatic,isFalse);
        expect(method.isSynthetic,isFalse);
    }
    test_visitMethodDeclaration_getter() : void {
        let methodName : string = "m";
        let methodDeclaration : any = AstTestFactory.methodDeclaration2(null,null,Keyword.GET,null,AstTestFactory.identifier3(methodName),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2());
        methodDeclaration.documentationComment = AstTestFactory.documentationComment(new core.DartList.literal(((_) : any =>  {
            {
                _.offset = 50;
                return _;
            }
        })(TokenFactory.tokenFromString('/// aaa'))),new core.DartList.literal());
        methodDeclaration.endToken.offset = 80;
        let holder : any = this.buildElementsForAst(methodDeclaration);
        let fields : core.DartList<any> = holder.fields;
        expect(fields,hasLength(1));
        let field : any = fields[0];
        expect(field,isNotNull);
        expect(field.name,methodName);
        expect(field.isSynthetic,isTrue);
        expect(field.setter,isNull);
        let getter : any = field.getter;
        expect(getter,isNotNull);
        this.assertHasCodeRange(getter,50,31);
        expect(getter.documentationComment,'/// aaa');
        expect(getter.hasImplicitReturnType,isTrue);
        expect(getter.isAbstract,isFalse);
        expect(getter.isExternal,isFalse);
        expect(getter.isGetter,isTrue);
        expect(getter.isSynthetic,isFalse);
        expect(getter.name,methodName);
        expect(getter.variable,field);
        expect(getter.functions,hasLength(0));
        expect(getter.labels,hasLength(0));
        expect(getter.localVariables,hasLength(0));
        expect(getter.parameters,hasLength(0));
    }
    test_visitMethodDeclaration_getter_abstract() : void {
        let methodName : string = "m";
        let methodDeclaration : any = AstTestFactory.methodDeclaration2(null,null,Keyword.GET,null,AstTestFactory.identifier3(methodName),AstTestFactory.formalParameterList(),AstTestFactory.emptyFunctionBody());
        let holder : any = this.buildElementsForAst(methodDeclaration);
        let fields : core.DartList<any> = holder.fields;
        expect(fields,hasLength(1));
        let field : any = fields[0];
        expect(field,isNotNull);
        expect(field.name,methodName);
        expect(field.isSynthetic,isTrue);
        expect(field.setter,isNull);
        let getter : any = field.getter;
        expect(getter,isNotNull);
        expect(getter.hasImplicitReturnType,isTrue);
        expect(getter.isAbstract,isTrue);
        expect(getter.isExternal,isFalse);
        expect(getter.isGetter,isTrue);
        expect(getter.isSynthetic,isFalse);
        expect(getter.name,methodName);
        expect(getter.variable,field);
        expect(getter.functions,hasLength(0));
        expect(getter.labels,hasLength(0));
        expect(getter.localVariables,hasLength(0));
        expect(getter.parameters,hasLength(0));
    }
    test_visitMethodDeclaration_getter_external() : void {
        let methodName : string = "m";
        let methodDeclaration : any = AstTestFactory.methodDeclaration(null,null,Keyword.GET,null,AstTestFactory.identifier3(methodName),AstTestFactory.formalParameterList());
        methodDeclaration.externalKeyword = TokenFactory.tokenFromKeyword(Keyword.EXTERNAL);
        let holder : any = this.buildElementsForAst(methodDeclaration);
        let fields : core.DartList<any> = holder.fields;
        expect(fields,hasLength(1));
        let field : any = fields[0];
        expect(field,isNotNull);
        expect(field.name,methodName);
        expect(field.isSynthetic,isTrue);
        expect(field.setter,isNull);
        let getter : any = field.getter;
        expect(getter,isNotNull);
        expect(getter.hasImplicitReturnType,isTrue);
        expect(getter.isAbstract,isFalse);
        expect(getter.isExternal,isTrue);
        expect(getter.isGetter,isTrue);
        expect(getter.isSynthetic,isFalse);
        expect(getter.name,methodName);
        expect(getter.variable,field);
        expect(getter.functions,hasLength(0));
        expect(getter.labels,hasLength(0));
        expect(getter.localVariables,hasLength(0));
        expect(getter.parameters,hasLength(0));
    }
    test_visitMethodDeclaration_minimal() : void {
        let methodName : string = "m";
        let methodDeclaration : any = AstTestFactory.methodDeclaration2(null,AstTestFactory.typeName4('T'),null,null,AstTestFactory.identifier3(methodName),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2());
        methodDeclaration.documentationComment = AstTestFactory.documentationComment(new core.DartList.literal(((_) : any =>  {
            {
                _.offset = 50;
                return _;
            }
        })(TokenFactory.tokenFromString('/// aaa'))),new core.DartList.literal());
        methodDeclaration.endToken.offset = 80;
        let holder : any = this.buildElementsForAst(methodDeclaration);
        let methods : core.DartList<any> = holder.methods;
        expect(methods,hasLength(1));
        let method : any = methods[0];
        expect(method,isNotNull);
        this.assertHasCodeRange(method,50,31);
        expect(method.documentationComment,'/// aaa');
        expect(method.hasImplicitReturnType,isFalse);
        expect(method.name,methodName);
        expect(method.functions,hasLength(0));
        expect(method.labels,hasLength(0));
        expect(method.localVariables,hasLength(0));
        expect(method.parameters,hasLength(0));
        expect(method.typeParameters,hasLength(0));
        expect(method.isAbstract,isFalse);
        expect(method.isExternal,isFalse);
        expect(method.isStatic,isFalse);
        expect(method.isSynthetic,isFalse);
    }
    test_visitMethodDeclaration_operator() : void {
        let methodName : string = "+";
        let methodDeclaration : any = AstTestFactory.methodDeclaration2(null,null,null,Keyword.OPERATOR,AstTestFactory.identifier3(methodName),AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3("addend"))),AstTestFactory.blockFunctionBody2());
        let holder : any = this.buildElementsForAst(methodDeclaration);
        let methods : core.DartList<any> = holder.methods;
        expect(methods,hasLength(1));
        let method : any = methods[0];
        expect(method,isNotNull);
        expect(method.hasImplicitReturnType,isTrue);
        expect(method.name,methodName);
        expect(method.functions,hasLength(0));
        expect(method.labels,hasLength(0));
        expect(method.localVariables,hasLength(0));
        expect(method.parameters,hasLength(1));
        expect(method.typeParameters,hasLength(0));
        expect(method.isAbstract,isFalse);
        expect(method.isExternal,isFalse);
        expect(method.isStatic,isFalse);
        expect(method.isSynthetic,isFalse);
    }
    test_visitMethodDeclaration_setter() : void {
        let methodName : string = "m";
        let methodDeclaration : any = AstTestFactory.methodDeclaration2(null,null,Keyword.SET,null,AstTestFactory.identifier3(methodName),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2());
        methodDeclaration.documentationComment = AstTestFactory.documentationComment(new core.DartList.literal(((_) : any =>  {
            {
                _.offset = 50;
                return _;
            }
        })(TokenFactory.tokenFromString('/// aaa'))),new core.DartList.literal());
        methodDeclaration.endToken.offset = 80;
        let holder : any = this.buildElementsForAst(methodDeclaration);
        let fields : core.DartList<any> = holder.fields;
        expect(fields,hasLength(1));
        let field : any = fields[0];
        expect(field,isNotNull);
        expect(field.name,methodName);
        expect(field.isSynthetic,isTrue);
        expect(field.getter,isNull);
        let setter : any = field.setter;
        expect(setter,isNotNull);
        this.assertHasCodeRange(setter,50,31);
        expect(setter.documentationComment,'/// aaa');
        expect(setter.hasImplicitReturnType,isTrue);
        expect(setter.isAbstract,isFalse);
        expect(setter.isExternal,isFalse);
        expect(setter.isSetter,isTrue);
        expect(setter.isSynthetic,isFalse);
        expect(setter.name,`${methodName}=`);
        expect(setter.displayName,methodName);
        expect(setter.variable,field);
        expect(setter.functions,hasLength(0));
        expect(setter.labels,hasLength(0));
        expect(setter.localVariables,hasLength(0));
        expect(setter.parameters,hasLength(0));
    }
    test_visitMethodDeclaration_setter_abstract() : void {
        let methodName : string = "m";
        let methodDeclaration : any = AstTestFactory.methodDeclaration2(null,null,Keyword.SET,null,AstTestFactory.identifier3(methodName),AstTestFactory.formalParameterList(),AstTestFactory.emptyFunctionBody());
        let holder : any = this.buildElementsForAst(methodDeclaration);
        let fields : core.DartList<any> = holder.fields;
        expect(fields,hasLength(1));
        let field : any = fields[0];
        expect(field,isNotNull);
        expect(field.name,methodName);
        expect(field.isSynthetic,isTrue);
        expect(field.getter,isNull);
        let setter : any = field.setter;
        expect(setter,isNotNull);
        expect(setter.hasImplicitReturnType,isTrue);
        expect(setter.isAbstract,isTrue);
        expect(setter.isExternal,isFalse);
        expect(setter.isSetter,isTrue);
        expect(setter.isSynthetic,isFalse);
        expect(setter.name,`${methodName}=`);
        expect(setter.displayName,methodName);
        expect(setter.variable,field);
        expect(setter.functions,hasLength(0));
        expect(setter.labels,hasLength(0));
        expect(setter.localVariables,hasLength(0));
        expect(setter.parameters,hasLength(0));
    }
    test_visitMethodDeclaration_setter_external() : void {
        let methodName : string = "m";
        let methodDeclaration : any = AstTestFactory.methodDeclaration(null,null,Keyword.SET,null,AstTestFactory.identifier3(methodName),AstTestFactory.formalParameterList());
        methodDeclaration.externalKeyword = TokenFactory.tokenFromKeyword(Keyword.EXTERNAL);
        let holder : any = this.buildElementsForAst(methodDeclaration);
        let fields : core.DartList<any> = holder.fields;
        expect(fields,hasLength(1));
        let field : any = fields[0];
        expect(field,isNotNull);
        expect(field.name,methodName);
        expect(field.isSynthetic,isTrue);
        expect(field.getter,isNull);
        let setter : any = field.setter;
        expect(setter,isNotNull);
        expect(setter.hasImplicitReturnType,isTrue);
        expect(setter.isAbstract,isFalse);
        expect(setter.isExternal,isTrue);
        expect(setter.isSetter,isTrue);
        expect(setter.isSynthetic,isFalse);
        expect(setter.name,`${methodName}=`);
        expect(setter.displayName,methodName);
        expect(setter.variable,field);
        expect(setter.functions,hasLength(0));
        expect(setter.labels,hasLength(0));
        expect(setter.localVariables,hasLength(0));
        expect(setter.parameters,hasLength(0));
    }
    test_visitMethodDeclaration_static() : void {
        let methodName : string = "m";
        let methodDeclaration : any = AstTestFactory.methodDeclaration2(Keyword.STATIC,null,null,null,AstTestFactory.identifier3(methodName),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2());
        let holder : any = this.buildElementsForAst(methodDeclaration);
        let methods : core.DartList<any> = holder.methods;
        expect(methods,hasLength(1));
        let method : any = methods[0];
        expect(method,isNotNull);
        expect(method.hasImplicitReturnType,isTrue);
        expect(method.name,methodName);
        expect(method.functions,hasLength(0));
        expect(method.labels,hasLength(0));
        expect(method.localVariables,hasLength(0));
        expect(method.parameters,hasLength(0));
        expect(method.typeParameters,hasLength(0));
        expect(method.isAbstract,isFalse);
        expect(method.isExternal,isFalse);
        expect(method.isStatic,isTrue);
        expect(method.isSynthetic,isFalse);
    }
    test_visitMethodDeclaration_typeParameters() : void {
        let methodName : string = "m";
        let methodDeclaration : any = AstTestFactory.methodDeclaration2(null,null,null,null,AstTestFactory.identifier3(methodName),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2());
        methodDeclaration.typeParameters = AstTestFactory.typeParameterList(new core.DartList.literal('E'));
        let holder : any = this.buildElementsForAst(methodDeclaration);
        let methods : core.DartList<any> = holder.methods;
        expect(methods,hasLength(1));
        let method : any = methods[0];
        expect(method,isNotNull);
        expect(method.hasImplicitReturnType,isTrue);
        expect(method.name,methodName);
        expect(method.functions,hasLength(0));
        expect(method.labels,hasLength(0));
        expect(method.localVariables,hasLength(0));
        expect(method.parameters,hasLength(0));
        expect(method.typeParameters,hasLength(1));
        expect(method.isAbstract,isFalse);
        expect(method.isExternal,isFalse);
        expect(method.isStatic,isFalse);
        expect(method.isSynthetic,isFalse);
    }
    test_visitTypeAlias_minimal() : void {
        let aliasName : string = "F";
        let typeAlias : any = AstTestFactory.typeAlias(null,aliasName,null,null);
        let holder : any = this.buildElementsForAst(typeAlias);
        let aliases : core.DartList<any> = holder.typeAliases;
        expect(aliases,hasLength(1));
        let alias : any = aliases[0];
        expect(alias,isNotNull);
        expect(alias.name,aliasName);
        expect(alias.type,isNotNull);
        expect(alias.isSynthetic,isFalse);
    }
    test_visitTypeAlias_withFormalParameters() : void {
        let aliasName : string = "F";
        let firstParameterName : string = "x";
        let secondParameterName : string = "y";
        let typeAlias : any = AstTestFactory.typeAlias(null,aliasName,AstTestFactory.typeParameterList(),AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter3(firstParameterName),AstTestFactory.simpleFormalParameter3(secondParameterName))));
        typeAlias.beginToken.offset = 50;
        typeAlias.endToken.offset = 80;
        let holder : any = this.buildElementsForAst(typeAlias);
        let aliases : core.DartList<any> = holder.typeAliases;
        expect(aliases,hasLength(1));
        let alias : any = aliases[0];
        expect(alias,isNotNull);
        this.assertHasCodeRange(alias,50,31);
        expect(alias.name,aliasName);
        expect(alias.type,isNotNull);
        expect(alias.isSynthetic,isFalse);
        let parameters : core.DartList<any> = alias.parameters;
        expect(parameters,hasLength(2));
        expect(parameters[0].name,firstParameterName);
        expect(parameters[1].name,secondParameterName);
        let typeParameters : core.DartList<any> = alias.typeParameters;
        expect(typeParameters,isNotNull);
        expect(typeParameters,hasLength(0));
    }
    test_visitTypeAlias_withTypeParameters() : void {
        let aliasName : string = "F";
        let firstTypeParameterName : string = "A";
        let secondTypeParameterName : string = "B";
        let typeAlias : any = AstTestFactory.typeAlias(null,aliasName,AstTestFactory.typeParameterList(new core.DartList.literal(firstTypeParameterName,secondTypeParameterName)),AstTestFactory.formalParameterList());
        let holder : any = this.buildElementsForAst(typeAlias);
        let aliases : core.DartList<any> = holder.typeAliases;
        expect(aliases,hasLength(1));
        let alias : any = aliases[0];
        expect(alias,isNotNull);
        expect(alias.name,aliasName);
        expect(alias.type,isNotNull);
        expect(alias.isSynthetic,isFalse);
        let parameters : core.DartList<any> = alias.parameters;
        expect(parameters,isNotNull);
        expect(parameters,hasLength(0));
        let typeParameters : core.DartList<any> = alias.typeParameters;
        expect(typeParameters,hasLength(2));
        expect(typeParameters[0].name,firstTypeParameterName);
        expect(typeParameters[1].name,secondTypeParameterName);
    }
    test_visitTypeParameter() : void {
        let parameterName : string = "E";
        let typeParameter : any = AstTestFactory.typeParameter(parameterName);
        typeParameter.beginToken.offset = 50;
        let holder : any = this.buildElementsForAst(typeParameter);
        let typeParameters : core.DartList<any> = holder.typeParameters;
        expect(typeParameters,hasLength(1));
        let typeParameterElement : any = typeParameters[0];
        expect(typeParameterElement,isNotNull);
        this.assertHasCodeRange(typeParameterElement,50,1);
        expect(typeParameterElement.name,parameterName);
        expect(typeParameterElement.bound,isNull);
        expect(typeParameterElement.isSynthetic,isFalse);
    }
    constructor() {
    }
    @defaultConstructor
    _ApiElementBuilderTestMixin() {
    }
}

export namespace _BaseTest {
    export type Constructors = lib4.ParserTestCase.Constructors | '_BaseTest';
    export type Interface = Omit<_BaseTest, Constructors>;
}
@DartClass
export class _BaseTest extends lib4.ParserTestCase {
    compilationUnitElement : any;

    _compilationUnit : any;

    get compilationUnit() : any {
        return this._compilationUnit;
    }
    assertHasCodeRange(element : any,offset : number,length : number) : void {
        let elementImpl : any = element;
        expect(elementImpl.codeOffset,offset);
        expect(elementImpl.codeLength,length);
    }
    buildElementsForAst(node : any) : any {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this.createElementBuilder(holder);
        node.accept(builder);
        return holder;
    }
    buildElementsForText(code : string) : any {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this.createElementBuilder(holder);
        this._visitAstOfCode(code,builder);
        return holder;
    }
    checkAnnotation(metadata : any) : void {
        expect(metadata,hasLength(1));
        expect(op(Op.INDEX,metadata,0),new bare.createInstance(any,null));
        let annotation : any = op(Op.INDEX,metadata,0);
        expect(annotation.elementAnnotation,new bare.createInstance(any,null));
        let elementAnnotation : any = annotation.elementAnnotation;
        expect(elementAnnotation.element,isNull);
        expect(elementAnnotation.compilationUnit,isNotNull);
        expect(elementAnnotation.compilationUnit,this.compilationUnitElement);
    }
    checkMetadata(element : any) : void {
        expect(element.metadata,hasLength(1));
        expect(op(Op.INDEX,element.metadata,0),new bare.createInstance(any,null));
        let elementAnnotation : any = op(Op.INDEX,element.metadata,0);
        expect(elementAnnotation.element,isNull);
        expect(elementAnnotation.compilationUnit,isNotNull);
        expect(elementAnnotation.compilationUnit,this.compilationUnitElement);
    }
    @Abstract
    createElementBuilder(holder : any) : any{ throw 'abstract'}
    setUp() : void {
        this.compilationUnitElement = new bare.createInstance(any,null,'test.dart');
    }
    _assertVisibleRange(element : any,offset : number,end : number) : void {
        let visibleRange : any = element.visibleRange;
        expect(visibleRange.offset,offset);
        expect(visibleRange.end,end);
    }
    _visitAstOfCode(code : string,visitor : any) : void {
        let logger : lib3.TestLogger = new lib3.TestLogger();
        AnalysisEngine.instance.logger = logger;
        try {
            this._compilationUnit = this.parseCompilationUnit(code);
            this.compilationUnit.accept(visitor);
        } finally {
            expect(logger.log,hasLength(0));
            AnalysisEngine.instance.logger = Logger.NULL;
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BaseTest() {
    }
}

export namespace ApiElementBuilderTest {
    export type Constructors = _BaseTest.Constructors | 'ApiElementBuilderTest';
    export type Interface = Omit<ApiElementBuilderTest, Constructors>;
}
@DartClass
@With(_ApiElementBuilderTestMixin)
export class ApiElementBuilderTest extends _BaseTest implements _ApiElementBuilderTestMixin.Interface {
    @Abstract
    assertHasCodeRange(element : any,offset : number,length : number) : void {
        throw 'from mixin';
    }
    @Abstract
    buildElementsForAst(node : any) : any {
        throw 'from mixin';
    }
    @Abstract
    buildElementsForText(code : string) : any {
        throw 'from mixin';
    }
    @Abstract
    checkAnnotation(metadata : any) : void {
        throw 'from mixin';
    }
    @Abstract
    checkMetadata(element : any) : void {
        throw 'from mixin';
    }
    @Abstract
    test_genericFunction_asTopLevelVariableType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_fieldDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_topLevelVariableDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitClassDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitClassTypeAlias() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitConstructorDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitDefaultFormalParameter_fieldFormalParameter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitDefaultFormalParameter_functionTypedFormalParameter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitDefaultFormalParameter_simpleFormalParameter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitEnumDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitExportDirective() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitFieldFormalParameter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitFunctionDeclaration_function() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitFunctionDeclaration_getter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitFunctionDeclaration_setter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitFunctionTypeAlias() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitFunctionTypedFormalParameter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitImportDirective() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitLibraryDirective() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitMethodDeclaration_getter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitMethodDeclaration_method() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitMethodDeclaration_setter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitPartDirective() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitPartOfDirective() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitSimpleFormalParameter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitTypeParameter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitClassDeclaration_abstract() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitClassDeclaration_invalidFunctionInAnnotation_class() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitClassDeclaration_invalidFunctionInAnnotation_method() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitClassDeclaration_minimal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitClassDeclaration_parameterized() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitClassDeclaration_withMembers() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitClassTypeAlias() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitClassTypeAlias_abstract() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitClassTypeAlias_typeParams() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitConstructorDeclaration_external() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitConstructorDeclaration_factory() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitConstructorDeclaration_minimal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitConstructorDeclaration_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitConstructorDeclaration_unnamed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitEnumDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitFieldDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitFieldFormalParameter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitFieldFormalParameter_functionTyped() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitFormalParameterList() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitFunctionDeclaration_external() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitFunctionDeclaration_getter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitFunctionDeclaration_plain() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitFunctionDeclaration_setter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitFunctionDeclaration_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_abstract() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_duplicateField_synthetic() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_external() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_getter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_getter_abstract() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_getter_external() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_minimal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_operator() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_setter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_setter_abstract() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_setter_external() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_static() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitTypeAlias_minimal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitTypeAlias_withFormalParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitTypeAlias_withTypeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitTypeParameter() : void {
        throw 'from mixin';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElementBuilder(holder : any) : any {
        return new bare.createInstance(any,null,holder,this.compilationUnitElement);
    }
    test_api_class_field() : void {
        let fields : core.DartList<any> = op(Op.INDEX,this.buildElementsForText('class C {\n  var a = 42;\n  var b = () {\n    int v = 0;\n    localFunction() {}\n  };\n}\n').types,0).fields;
        expect(fields,hasLength(2));
        {
            let a : any = fields[0];
            expect(a.displayName,'a');
            expect(a.initializer,isNull);
        }
        {
            let b : any = fields[1];
            expect(b.displayName,'b');
            expect(b.initializer,isNull);
        }
    }
    test_api_class_method_blockBody() : void {
        let method : any = op(Op.INDEX,op(Op.INDEX,this.buildElementsForText('class C {\n  void m(int a, {int b: 42}) {\n    int v = 0;\n    localFunction() {}\n  }\n}\n').types,0).methods,0);
        {
            expect(method.parameters,hasLength(2));
            expect(op(Op.INDEX,method.parameters,0).displayName,'a');
            expect(op(Op.INDEX,method.parameters,0).initializer,isNull);
            expect(op(Op.INDEX,method.parameters,1).displayName,'b');
            expect(op(Op.INDEX,method.parameters,1).initializer,isNull);
        }
        expect(method.localVariables,isEmpty);
        expect(method.functions,isEmpty);
    }
    test_api_topLevelFunction_blockBody() : void {
        let function : any = op(Op.INDEX,this.buildElementsForText('void topLevelFunction() {\n  int v = 0;\n  localFunction() {}\n}\n').functions,0);
        expect(function.localVariables,isEmpty);
        expect(function.functions,isEmpty);
    }
    test_api_topLevelFunction_expressionBody() : void {
        let function : any = op(Op.INDEX,this.buildElementsForText('topLevelFunction() => () {\n  int localVar = 0;\n};\n').functions,0);
        expect(function.localVariables,isEmpty);
        expect(function.functions,isEmpty);
    }
    test_api_topLevelFunction_parameters() : void {
        let function : any = op(Op.INDEX,this.buildElementsForText('void topLevelFunction(int a, int b(double b2), {c: () {int c2; c3() {} }}) {\n}\n').functions,0);
        let parameters : core.DartList<any> = function.parameters;
        expect(parameters,hasLength(3));
        {
            let a : any = parameters[0];
            expect(a.displayName,'a');
            expect(a.initializer,isNull);
        }
        {
            let b : any = parameters[1];
            expect(b.displayName,'b');
            expect(b.initializer,isNull);
            expect(b.parameters,hasLength(1));
            expect(op(Op.INDEX,b.parameters,0).displayName,'b2');
        }
        {
            let c = parameters[2] as any;
            expect(c.displayName,'c');
            expect(c.initializer,isNull);
        }
    }
    test_api_topLevelVariable() : void {
        let variables : core.DartList<any> = this.buildElementsForText('var A = 42;\nvar B = () {\n  int v = 0;\n  localFunction(int _) {}\n};\n').topLevelVariables;
        expect(variables,hasLength(2));
        {
            let a : any = variables[0];
            expect(a.displayName,'A');
            expect(a.initializer,isNull);
        }
        {
            let b : any = variables[1];
            expect(b.displayName,'B');
            expect(b.initializer,isNull);
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ApiElementBuilderTest() {
    }
}

export namespace ElementBuilderTest {
    export type Constructors = _BaseTest.Constructors | 'ElementBuilderTest';
    export type Interface = Omit<ElementBuilderTest, Constructors>;
}
@DartClass
@With(_ApiElementBuilderTestMixin)
export class ElementBuilderTest extends _BaseTest implements _ApiElementBuilderTestMixin.Interface {
    @Abstract
    assertHasCodeRange(element : any,offset : number,length : number) : void {
        throw 'from mixin';
    }
    @Abstract
    buildElementsForAst(node : any) : any {
        throw 'from mixin';
    }
    @Abstract
    checkAnnotation(metadata : any) : void {
        throw 'from mixin';
    }
    @Abstract
    checkMetadata(element : any) : void {
        throw 'from mixin';
    }
    @Abstract
    test_genericFunction_asTopLevelVariableType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_fieldDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_topLevelVariableDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitClassDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitClassTypeAlias() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitConstructorDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitDefaultFormalParameter_fieldFormalParameter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitDefaultFormalParameter_functionTypedFormalParameter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitDefaultFormalParameter_simpleFormalParameter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitEnumDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitExportDirective() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitFieldFormalParameter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitFunctionDeclaration_function() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitFunctionDeclaration_getter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitFunctionDeclaration_setter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitFunctionTypeAlias() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitFunctionTypedFormalParameter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitImportDirective() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitLibraryDirective() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitMethodDeclaration_getter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitMethodDeclaration_method() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitMethodDeclaration_setter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitPartDirective() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitPartOfDirective() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitSimpleFormalParameter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_visitTypeParameter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitClassDeclaration_abstract() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitClassDeclaration_invalidFunctionInAnnotation_class() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitClassDeclaration_invalidFunctionInAnnotation_method() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitClassDeclaration_minimal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitClassDeclaration_parameterized() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitClassDeclaration_withMembers() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitClassTypeAlias() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitClassTypeAlias_abstract() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitClassTypeAlias_typeParams() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitConstructorDeclaration_external() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitConstructorDeclaration_factory() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitConstructorDeclaration_minimal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitConstructorDeclaration_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitConstructorDeclaration_unnamed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitEnumDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitFieldDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitFieldFormalParameter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitFieldFormalParameter_functionTyped() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitFormalParameterList() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitFunctionDeclaration_external() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitFunctionDeclaration_getter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitFunctionDeclaration_plain() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitFunctionDeclaration_setter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitFunctionDeclaration_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_abstract() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_duplicateField_synthetic() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_external() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_getter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_getter_abstract() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_getter_external() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_minimal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_operator() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_setter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_setter_abstract() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_setter_external() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_static() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitMethodDeclaration_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitTypeAlias_minimal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitTypeAlias_withFormalParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitTypeAlias_withTypeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_visitTypeParameter() : void {
        throw 'from mixin';
    }
    buildElementsForText(code : string) : any {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = new bare.createInstance(any,null,holder,this.compilationUnitElement);
        this._visitAstOfCode(code,builder);
        return holder;
    }
    createElementBuilder(holder : any) : any {
        return new bare.createInstance(any,null,holder,this.compilationUnitElement);
    }
    fail_visitMethodDeclaration_setter_duplicate() : void {
        let code : string = 'class C {\n  set zzz(x) {}\n  set zzz(y) {}\n}\n';
        let classElement : any = op(Op.INDEX,this.buildElementsForText(code).types,0);
        for(let accessor of classElement.accessors) {
            expect(accessor.variable.setter,same(accessor));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.compilationUnitElement = new bare.createInstance(any,null,'test.dart');
    }
    test_metadata_localVariableDeclaration() : void {
        let localVariables : core.DartList<any> = op(Op.INDEX,this.buildElementsForText('f() { @a int x, y; }').functions,0).localVariables;
        this.checkMetadata(localVariables[0]);
        this.checkMetadata(localVariables[1]);
        expect(localVariables[0].metadata,same(localVariables[1].metadata));
    }
    test_metadata_visitDeclaredIdentifier() : void {
        let localVariableElement : any = op(Op.INDEX,op(Op.INDEX,this.buildElementsForText('f() { for (@a var x in y) {} }').functions,0).localVariables,0);
        this.checkMetadata(localVariableElement);
    }
    test_visitCatchClause() : void {
        let variables : core.DartList<any> = op(Op.INDEX,this.buildElementsForText('f() { try {} catch (e, s) {} }').functions,0).localVariables;
        let exceptionParameterName : string = "e";
        let stackParameterName : string = "s";
        expect(variables,hasLength(2));
        let exceptionVariable : any = variables[0];
        expect(exceptionVariable,isNotNull);
        expect(exceptionVariable.name,exceptionParameterName);
        expect(exceptionVariable.hasImplicitType,isTrue);
        expect(exceptionVariable.isSynthetic,isFalse);
        expect(exceptionVariable.isConst,isFalse);
        expect(exceptionVariable.isFinal,isFalse);
        expect(exceptionVariable.initializer,isNull);
        this._assertVisibleRange(exceptionVariable,13,28);
        let stackVariable : any = variables[1];
        expect(stackVariable,isNotNull);
        expect(stackVariable.name,stackParameterName);
        expect(stackVariable.isSynthetic,isFalse);
        expect(stackVariable.isConst,isFalse);
        expect(stackVariable.isFinal,isFalse);
        expect(stackVariable.initializer,isNull);
        this._assertVisibleRange(stackVariable,13,28);
    }
    test_visitCatchClause_withType() : void {
        let variables : core.DartList<any> = op(Op.INDEX,this.buildElementsForText('f() { try {} on E catch (e) {} }').functions,0).localVariables;
        let exceptionParameterName : string = "e";
        expect(variables,hasLength(1));
        let exceptionVariable : any = variables[0];
        expect(exceptionVariable,isNotNull);
        expect(exceptionVariable.name,exceptionParameterName);
        expect(exceptionVariable.hasImplicitType,isFalse);
    }
    test_visitCompilationUnit_codeRange() : void {
        let topLevelVariableDeclaration : any = AstTestFactory.topLevelVariableDeclaration(null,AstTestFactory.typeName4('int'),new core.DartList.literal(AstTestFactory.variableDeclaration('V')));
        let unit : any = astFactory.compilationUnit(topLevelVariableDeclaration.beginToken,null,new core.DartList.literal(),new core.DartList.literal(topLevelVariableDeclaration),topLevelVariableDeclaration.endToken);
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        unit.beginToken.offset = 10;
        unit.endToken.offset = 40;
        unit.accept(builder);
        this.assertHasCodeRange(this.compilationUnitElement,0,41);
    }
    test_visitDeclaredIdentifier_noType() : void {
        let variable : any = op(Op.INDEX,op(Op.INDEX,this.buildElementsForText('f() { for (var i in []) {} }').functions,0).localVariables,0);
        this.assertHasCodeRange(variable,11,5);
        expect(variable,isNotNull);
        expect(variable.hasImplicitType,isTrue);
        expect(variable.isConst,isFalse);
        expect(variable.isDeprecated,isFalse);
        expect(variable.isFinal,isFalse);
        expect(variable.isOverride,isFalse);
        expect(variable.isPrivate,isFalse);
        expect(variable.isPublic,isTrue);
        expect(variable.isSynthetic,isFalse);
        expect(variable.name,'i');
    }
    test_visitDeclaredIdentifier_type() : void {
        let variable : any = op(Op.INDEX,op(Op.INDEX,this.buildElementsForText('f() { for (int i in []) {} }').functions,0).localVariables,0);
        this.assertHasCodeRange(variable,11,5);
        expect(variable.hasImplicitType,isFalse);
        expect(variable.isConst,isFalse);
        expect(variable.isDeprecated,isFalse);
        expect(variable.isFinal,isFalse);
        expect(variable.isOverride,isFalse);
        expect(variable.isPrivate,isFalse);
        expect(variable.isPublic,isTrue);
        expect(variable.isSynthetic,isFalse);
        expect(variable.name,'i');
    }
    test_visitDefaultFormalParameter_noType() : void {
        let parameterName : string = 'p';
        let formalParameter : any = AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3(parameterName),AstTestFactory.integer(0));
        formalParameter.beginToken.offset = 50;
        formalParameter.endToken.offset = 80;
        let holder : any = this.buildElementsForAst(formalParameter);
        let parameters : core.DartList<any> = holder.parameters;
        expect(parameters,hasLength(1));
        let parameter : any = parameters[0];
        this.assertHasCodeRange(parameter,50,31);
        expect(parameter.hasImplicitType,isTrue);
        expect(parameter.initializer,isNotNull);
        expect(parameter.initializer.type,isNotNull);
        expect(parameter.initializer.hasImplicitReturnType,isTrue);
        expect(parameter.isConst,isFalse);
        expect(parameter.isDeprecated,isFalse);
        expect(parameter.isFinal,isFalse);
        expect(parameter.isInitializingFormal,isFalse);
        expect(parameter.isOverride,isFalse);
        expect(parameter.isPrivate,isFalse);
        expect(parameter.isPublic,isTrue);
        expect(parameter.isSynthetic,isFalse);
        expect(parameter.name,parameterName);
    }
    test_visitDefaultFormalParameter_type() : void {
        let parameterName : string = 'p';
        let formalParameter : any = AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName4('E'),parameterName),AstTestFactory.integer(0));
        let holder : any = this.buildElementsForAst(formalParameter);
        let parameters : core.DartList<any> = holder.parameters;
        expect(parameters,hasLength(1));
        let parameter : any = parameters[0];
        expect(parameter.hasImplicitType,isFalse);
        expect(parameter.initializer,isNotNull);
        expect(parameter.initializer.type,isNotNull);
        expect(parameter.initializer.hasImplicitReturnType,isTrue);
        expect(parameter.isConst,isFalse);
        expect(parameter.isDeprecated,isFalse);
        expect(parameter.isFinal,isFalse);
        expect(parameter.isInitializingFormal,isFalse);
        expect(parameter.isOverride,isFalse);
        expect(parameter.isPrivate,isFalse);
        expect(parameter.isPublic,isTrue);
        expect(parameter.isSynthetic,isFalse);
        expect(parameter.name,parameterName);
    }
    test_visitFunctionExpression() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let expression : any = AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2());
        expression.accept(builder);
        let functions : core.DartList<any> = holder.functions;
        expect(functions,hasLength(1));
        let function : any = functions[0];
        expect(function,isNotNull);
        expect(expression.element,same(function));
        expect(function.hasImplicitReturnType,isTrue);
        expect(function.isSynthetic,isFalse);
        expect(function.typeParameters,hasLength(0));
    }
    test_visitFunctionExpression_inBlockBody() : void {
        let functions : core.DartList<any> = op(Op.INDEX,this.buildElementsForText('f() { return () => 42; }').functions,0).functions;
        expect(functions,hasLength(1));
        let function : any = functions[0];
        expect(function,isNotNull);
        expect(function.hasImplicitReturnType,isTrue);
        expect(function.isSynthetic,isFalse);
        expect(function.typeParameters,hasLength(0));
    }
    test_visitFunctionExpression_inExpressionBody() : void {
        let functions : core.DartList<any> = op(Op.INDEX,this.buildElementsForText('f() => () => 42;').functions,0).functions;
        expect(functions,hasLength(1));
        let function : any = functions[0];
        expect(function,isNotNull);
        expect(function.hasImplicitReturnType,isTrue);
        expect(function.isSynthetic,isFalse);
        expect(function.typeParameters,hasLength(0));
    }
    test_visitFunctionTypeAlias() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let aliasName : string = "F";
        let parameterName : string = "E";
        let aliasNode : any = AstTestFactory.typeAlias(null,aliasName,AstTestFactory.typeParameterList(new core.DartList.literal(parameterName)),null);
        aliasNode.documentationComment = AstTestFactory.documentationComment(new core.DartList.literal(((_) : any =>  {
            {
                _.offset = 50;
                return _;
            }
        })(TokenFactory.tokenFromString('/// aaa'))),new core.DartList.literal());
        aliasNode.endToken.offset = 80;
        aliasNode.accept(builder);
        let aliases : core.DartList<any> = holder.typeAliases;
        expect(aliases,hasLength(1));
        let alias : any = aliases[0];
        expect(alias,isNotNull);
        this.assertHasCodeRange(alias,50,31);
        expect(alias.documentationComment,'/// aaa');
        expect(alias.name,aliasName);
        expect(alias.parameters,hasLength(0));
        let typeParameters : core.DartList<any> = alias.typeParameters;
        expect(typeParameters,hasLength(1));
        let typeParameter : any = typeParameters[0];
        expect(typeParameter,isNotNull);
        expect(typeParameter.name,parameterName);
    }
    test_visitFunctionTypedFormalParameter() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let parameterName : string = "p";
        let formalParameter : any = AstTestFactory.functionTypedFormalParameter(null,parameterName);
        this._useParameterInMethod(formalParameter,100,110);
        formalParameter.accept(builder);
        let parameters : core.DartList<any> = holder.parameters;
        expect(parameters,hasLength(1));
        let parameter : any = parameters[0];
        expect(parameter,isNotNull);
        expect(parameter.name,parameterName);
        expect(parameter.initializer,isNull);
        expect(parameter.isConst,isFalse);
        expect(parameter.isFinal,isFalse);
        expect(parameter.isSynthetic,isFalse);
        expect(parameter.parameterKind,ParameterKind.REQUIRED);
        this._assertVisibleRange(parameter,100,110);
    }
    test_visitFunctionTypedFormalParameter_covariant() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let parameterName : string = "p";
        let formalParameter : any = AstTestFactory.functionTypedFormalParameter(null,parameterName);
        formalParameter.covariantKeyword = TokenFactory.tokenFromKeyword(Keyword.COVARIANT);
        this._useParameterInMethod(formalParameter,100,110);
        formalParameter.accept(builder);
        let parameters : core.DartList<any> = holder.parameters;
        expect(parameters,hasLength(1));
        let parameter : any = parameters[0];
        expect(parameter,isNotNull);
        expect(parameter.name,parameterName);
        expect(parameter.initializer,isNull);
        expect(parameter.isConst,isFalse);
        expect(parameter.isExplicitlyCovariant,isTrue);
        expect(parameter.isFinal,isFalse);
        expect(parameter.isSynthetic,isFalse);
        expect(parameter.parameterKind,ParameterKind.REQUIRED);
        this._assertVisibleRange(parameter,100,110);
    }
    test_visitFunctionTypedFormalParameter_withTypeParameters() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let parameterName : string = "p";
        let formalParameter : any = AstTestFactory.functionTypedFormalParameter(null,parameterName);
        formalParameter.typeParameters = AstTestFactory.typeParameterList(new core.DartList.literal('F'));
        this._useParameterInMethod(formalParameter,100,110);
        formalParameter.accept(builder);
        let parameters : core.DartList<any> = holder.parameters;
        expect(parameters,hasLength(1));
        let parameter : any = parameters[0];
        expect(parameter,isNotNull);
        expect(parameter.name,parameterName);
        expect(parameter.initializer,isNull);
        expect(parameter.isConst,isFalse);
        expect(parameter.isFinal,isFalse);
        expect(parameter.isSynthetic,isFalse);
        expect(parameter.parameterKind,ParameterKind.REQUIRED);
        expect(parameter.typeParameters,hasLength(1));
        this._assertVisibleRange(parameter,100,110);
    }
    test_visitLabeledStatement() : void {
        let labels : core.DartList<any> = op(Op.INDEX,this.buildElementsForText('f() { l: print(42); }').functions,0).labels;
        expect(labels,hasLength(1));
        let label : any = labels[0];
        expect(label,isNotNull);
        expect(label.name,'l');
        expect(label.isSynthetic,isFalse);
    }
    test_visitMethodDeclaration_withMembers() : void {
        let method : any = op(Op.INDEX,op(Op.INDEX,this.buildElementsForText('class C { m(p) { var v; try { l: return; } catch (e) {} } }').types,0).methods,0);
        let methodName : string = "m";
        let parameterName : string = "p";
        let localVariableName : string = "v";
        let labelName : string = "l";
        let exceptionParameterName : string = "e";
        expect(method,isNotNull);
        expect(method.hasImplicitReturnType,isTrue);
        expect(method.name,methodName);
        expect(method.typeParameters,hasLength(0));
        expect(method.isAbstract,isFalse);
        expect(method.isExternal,isFalse);
        expect(method.isStatic,isFalse);
        expect(method.isSynthetic,isFalse);
        let parameters : core.DartList<any> = method.parameters;
        expect(parameters,hasLength(1));
        let parameter : any = parameters[0];
        expect(parameter,isNotNull);
        expect(parameter.name,parameterName);
        let localVariables : core.DartList<any> = method.localVariables;
        expect(localVariables,hasLength(2));
        let firstVariable : any = localVariables[0];
        let secondVariable : any = localVariables[1];
        expect(firstVariable,isNotNull);
        expect(secondVariable,isNotNull);
        expect((op(Op.EQUALS,firstVariable.name,localVariableName) && op(Op.EQUALS,secondVariable.name,exceptionParameterName)) || (op(Op.EQUALS,firstVariable.name,exceptionParameterName) && op(Op.EQUALS,secondVariable.name,localVariableName)),isTrue);
        let labels : core.DartList<any> = method.labels;
        expect(labels,hasLength(1));
        let label : any = labels[0];
        expect(label,isNotNull);
        expect(label.name,labelName);
    }
    test_visitNamedFormalParameter() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let parameterName : string = "p";
        let formalParameter : any = AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3(parameterName),AstTestFactory.identifier3("42"));
        this._useParameterInMethod(formalParameter,100,110);
        formalParameter.beginToken.offset = 50;
        formalParameter.endToken.offset = 80;
        formalParameter.accept(builder);
        let parameters : core.DartList<any> = holder.parameters;
        expect(parameters,hasLength(1));
        let parameter : any = parameters[0];
        expect(parameter,isNotNull);
        this.assertHasCodeRange(parameter,50,32);
        expect(parameter.name,parameterName);
        expect(parameter.isConst,isFalse);
        expect(parameter.isFinal,isFalse);
        expect(parameter.isSynthetic,isFalse);
        expect(parameter.parameterKind,ParameterKind.NAMED);
        this._assertVisibleRange(parameter,100,110);
        expect(parameter.defaultValueCode,"42");
        let initializer : any = parameter.initializer;
        expect(initializer,isNotNull);
        expect(initializer.isSynthetic,isTrue);
        expect(initializer.hasImplicitReturnType,isTrue);
    }
    test_visitNamedFormalParameter_covariant() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let parameterName : string = "p";
        let formalParameter : any = AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3(parameterName),AstTestFactory.identifier3("42"));
        (formalParameter.parameter as any).covariantKeyword = TokenFactory.tokenFromKeyword(Keyword.COVARIANT);
        this._useParameterInMethod(formalParameter,100,110);
        formalParameter.beginToken.offset = 50;
        formalParameter.endToken.offset = 80;
        formalParameter.accept(builder);
        let parameters : core.DartList<any> = holder.parameters;
        expect(parameters,hasLength(1));
        let parameter : any = parameters[0];
        expect(parameter,isNotNull);
        this.assertHasCodeRange(parameter,50,32);
        expect(parameter.name,parameterName);
        expect(parameter.isConst,isFalse);
        expect(parameter.isExplicitlyCovariant,isTrue);
        expect(parameter.isFinal,isFalse);
        expect(parameter.isSynthetic,isFalse);
        expect(parameter.parameterKind,ParameterKind.NAMED);
        this._assertVisibleRange(parameter,100,110);
        expect(parameter.defaultValueCode,"42");
        let initializer : any = parameter.initializer;
        expect(initializer,isNotNull);
        expect(initializer.isSynthetic,isTrue);
        expect(initializer.hasImplicitReturnType,isTrue);
    }
    test_visitSimpleFormalParameter_noType() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let parameterName : string = "p";
        let formalParameter : any = AstTestFactory.simpleFormalParameter3(parameterName);
        this._useParameterInMethod(formalParameter,100,110);
        formalParameter.accept(builder);
        let parameters : core.DartList<any> = holder.parameters;
        expect(parameters,hasLength(1));
        let parameter : any = parameters[0];
        expect(parameter,isNotNull);
        expect(parameter.hasImplicitType,isTrue);
        expect(parameter.initializer,isNull);
        expect(parameter.isConst,isFalse);
        expect(parameter.isFinal,isFalse);
        expect(parameter.isSynthetic,isFalse);
        expect(parameter.name,parameterName);
        expect(parameter.parameterKind,ParameterKind.REQUIRED);
        this._assertVisibleRange(parameter,100,110);
    }
    test_visitSimpleFormalParameter_noType_covariant() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let parameterName : string = "p";
        let formalParameter : any = AstTestFactory.simpleFormalParameter3(parameterName);
        formalParameter.covariantKeyword = TokenFactory.tokenFromKeyword(Keyword.COVARIANT);
        this._useParameterInMethod(formalParameter,100,110);
        formalParameter.accept(builder);
        let parameters : core.DartList<any> = holder.parameters;
        expect(parameters,hasLength(1));
        let parameter : any = parameters[0];
        expect(parameter,isNotNull);
        expect(parameter.hasImplicitType,isTrue);
        expect(parameter.initializer,isNull);
        expect(parameter.isConst,isFalse);
        expect(parameter.isExplicitlyCovariant,isTrue);
        expect(parameter.isFinal,isFalse);
        expect(parameter.isSynthetic,isFalse);
        expect(parameter.name,parameterName);
        expect(parameter.parameterKind,ParameterKind.REQUIRED);
        this._assertVisibleRange(parameter,100,110);
    }
    test_visitSimpleFormalParameter_type() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let parameterName : string = "p";
        let formalParameter : any = AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName4('T'),parameterName);
        this._useParameterInMethod(formalParameter,100,110);
        formalParameter.accept(builder);
        let parameters : core.DartList<any> = holder.parameters;
        expect(parameters,hasLength(1));
        let parameter : any = parameters[0];
        expect(parameter,isNotNull);
        expect(parameter.hasImplicitType,isFalse);
        expect(parameter.initializer,isNull);
        expect(parameter.isConst,isFalse);
        expect(parameter.isFinal,isFalse);
        expect(parameter.isSynthetic,isFalse);
        expect(parameter.name,parameterName);
        expect(parameter.parameterKind,ParameterKind.REQUIRED);
        this._assertVisibleRange(parameter,100,110);
    }
    test_visitSimpleFormalParameter_type_covariant() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let parameterName : string = "p";
        let formalParameter : any = AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName4('T'),parameterName);
        formalParameter.covariantKeyword = TokenFactory.tokenFromKeyword(Keyword.COVARIANT);
        this._useParameterInMethod(formalParameter,100,110);
        formalParameter.accept(builder);
        let parameters : core.DartList<any> = holder.parameters;
        expect(parameters,hasLength(1));
        let parameter : any = parameters[0];
        expect(parameter,isNotNull);
        expect(parameter.hasImplicitType,isFalse);
        expect(parameter.initializer,isNull);
        expect(parameter.isConst,isFalse);
        expect(parameter.isExplicitlyCovariant,isTrue);
        expect(parameter.isFinal,isFalse);
        expect(parameter.isSynthetic,isFalse);
        expect(parameter.name,parameterName);
        expect(parameter.parameterKind,ParameterKind.REQUIRED);
        this._assertVisibleRange(parameter,100,110);
    }
    test_visitVariableDeclaration_field_covariant() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let fieldName : string = "f";
        let variableDeclaration : any = AstTestFactory.variableDeclaration2(fieldName,null);
        let fieldDeclaration : any = AstTestFactory.fieldDeclaration(false,null,AstTestFactory.typeName4('int'),new core.DartList.literal<any>(variableDeclaration));
        fieldDeclaration.covariantKeyword = TokenFactory.tokenFromKeyword(Keyword.COVARIANT);
        variableDeclaration.accept(builder);
        let fields : core.DartList<any> = holder.fields;
        expect(fields,hasLength(1));
        let field : any = fields[0];
        expect(field,isNotNull);
        let setter : any = field.setter;
        expect(setter,isNotNull);
        expect(op(Op.INDEX,setter.parameters,0).isCovariant,isTrue);
    }
    test_visitVariableDeclaration_inConstructor() : void {
        let constructors : core.DartList<any> = op(Op.INDEX,this.buildElementsForText('class C { C() { var v = 1; } }').types,0).constructors;
        expect(constructors,hasLength(1));
        let variableElements : core.DartList<any> = constructors[0].localVariables;
        expect(variableElements,hasLength(1));
        let variableElement : any = variableElements[0];
        this.assertHasCodeRange(variableElement,16,10);
        expect(variableElement.hasImplicitType,isTrue);
        expect(variableElement.name,'v');
        this._assertVisibleRange(variableElement,14,28);
    }
    test_visitVariableDeclaration_inForEachStatement() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let variableName : string = "v";
        let statement : any = AstTestFactory.forEachStatement(AstTestFactory.declaredIdentifier3('v'),AstTestFactory.listLiteral(),AstTestFactory.block());
        this._setNodeSourceRange(statement,100,110);
        let method : any = AstTestFactory.methodDeclaration2(null,null,null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2(new core.DartList.literal(statement)));
        this._setBlockBodySourceRange(method.body,200,220);
        method.accept(builder);
        let methods : core.DartList<any> = holder.methods;
        expect(methods,hasLength(1));
        let variableElements : core.DartList<any> = methods[0].localVariables;
        expect(variableElements,hasLength(1));
        let variableElement : any = variableElements[0];
        expect(variableElement.name,variableName);
        this._assertVisibleRange(variableElement,100,110);
    }
    test_visitVariableDeclaration_inForStatement() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let variableName : string = "v";
        let statement : any = AstTestFactory.forStatement2(AstTestFactory.variableDeclarationList(null,AstTestFactory.typeName4('T'),new core.DartList.literal(AstTestFactory.variableDeclaration('v'))),null,null,AstTestFactory.block());
        this._setNodeSourceRange(statement,100,110);
        let method : any = AstTestFactory.methodDeclaration2(null,null,null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2(new core.DartList.literal(statement)));
        this._setBlockBodySourceRange(method.body,200,220);
        method.accept(builder);
        let methods : core.DartList<any> = holder.methods;
        expect(methods,hasLength(1));
        let variableElements : core.DartList<any> = methods[0].localVariables;
        expect(variableElements,hasLength(1));
        let variableElement : any = variableElements[0];
        expect(variableElement.name,variableName);
        this._assertVisibleRange(variableElement,100,110);
    }
    test_visitVariableDeclaration_inMethod() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let variableName : string = "v";
        let variable : any = AstTestFactory.variableDeclaration2(variableName,null);
        let statement : any = AstTestFactory.variableDeclarationStatement(null,AstTestFactory.typeName4('T'),new core.DartList.literal(variable));
        let method : any = AstTestFactory.methodDeclaration2(null,null,null,null,AstTestFactory.identifier3("m"),AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2(new core.DartList.literal(statement)));
        this._setBlockBodySourceRange(method.body,100,110);
        method.accept(builder);
        let methods : core.DartList<any> = holder.methods;
        expect(methods,hasLength(1));
        let variableElements : core.DartList<any> = methods[0].localVariables;
        expect(variableElements,hasLength(1));
        let variableElement : any = variableElements[0];
        expect(variableElement.hasImplicitType,isFalse);
        expect(variableElement.name,variableName);
        this._assertVisibleRange(variableElement,100,110);
    }
    test_visitVariableDeclaration_localNestedInFunction() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let variableName : string = "v";
        let variable : any = AstTestFactory.variableDeclaration2(variableName,null);
        let statement : any = AstTestFactory.variableDeclarationStatement2(null,new core.DartList.literal(variable));
        let initializer : any = AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(),AstTestFactory.blockFunctionBody2(new core.DartList.literal(statement)));
        let fieldName : string = "f";
        let field : any = AstTestFactory.variableDeclaration2(fieldName,initializer);
        let fieldDeclaration : any = AstTestFactory.fieldDeclaration2(false,null,new core.DartList.literal(field));
        fieldDeclaration.accept(builder);
        let variables : core.DartList<any> = holder.fields;
        expect(variables,hasLength(1));
        let fieldElement : any = variables[0];
        expect(fieldElement,isNotNull);
        let initializerElement : any = fieldElement.initializer;
        expect(initializerElement,isNotNull);
        expect(initializerElement.hasImplicitReturnType,isTrue);
        let functionElements : core.DartList<any> = initializerElement.functions;
        expect(functionElements,hasLength(1));
        let variableElements : core.DartList<any> = functionElements[0].localVariables;
        expect(variableElements,hasLength(1));
        let variableElement : any = variableElements[0];
        expect(variableElement.hasImplicitType,isTrue);
        expect(variableElement.isConst,isFalse);
        expect(variableElement.isFinal,isFalse);
        expect(variableElement.isSynthetic,isFalse);
        expect(variableElement.name,variableName);
    }
    test_visitVariableDeclaration_noInitializer() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let variableName : string = "v";
        let variableDeclaration : any = AstTestFactory.variableDeclaration2(variableName,null);
        AstTestFactory.variableDeclarationList2(null,new core.DartList.literal(variableDeclaration));
        variableDeclaration.accept(builder);
        let variables : core.DartList<any> = holder.topLevelVariables;
        expect(variables,hasLength(1));
        let variable : any = variables[0];
        expect(variable,isNotNull);
        expect(variable.hasImplicitType,isTrue);
        expect(variable.initializer,isNull);
        expect(variable.name,variableName);
        expect(variable.isConst,isFalse);
        expect(variable.isFinal,isFalse);
        expect(variable.isSynthetic,isFalse);
        expect(variable.getter,isNotNull);
        expect(variable.setter,isNotNull);
    }
    test_visitVariableDeclaration_top() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let variableDeclaration1 : any = AstTestFactory.variableDeclaration('a');
        let variableDeclaration2 : any = AstTestFactory.variableDeclaration('b');
        let topLevelVariableDeclaration : any = AstTestFactory.topLevelVariableDeclaration(Keyword.FINAL,null,new core.DartList.literal(variableDeclaration1,variableDeclaration2));
        topLevelVariableDeclaration.documentationComment = AstTestFactory.documentationComment(new core.DartList.literal(((_) : any =>  {
            {
                _.offset = 50;
                return _;
            }
        })(TokenFactory.tokenFromString('/// aaa'))),new core.DartList.literal());
        topLevelVariableDeclaration.accept(builder);
        let variables : core.DartList<any> = holder.topLevelVariables;
        expect(variables,hasLength(2));
        let variable1 : any = variables[0];
        expect(variable1,isNotNull);
        expect(variable1.documentationComment,'/// aaa');
        let variable2 : any = variables[1];
        expect(variable2,isNotNull);
        expect(variable2.documentationComment,'/// aaa');
    }
    test_visitVariableDeclaration_top_const_hasInitializer() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let variableName : string = "v";
        let variableDeclaration : any = AstTestFactory.variableDeclaration2(variableName,AstTestFactory.integer(42));
        AstTestFactory.variableDeclarationList2(Keyword.CONST,new core.DartList.literal(variableDeclaration));
        variableDeclaration.accept(builder);
        let variables : core.DartList<any> = holder.topLevelVariables;
        expect(variables,hasLength(1));
        let variable : any = variables[0];
        expect(variable,new bare.createInstance(any,null));
        expect(variable.initializer,isNotNull);
        expect(variable.initializer.type,isNotNull);
        expect(variable.initializer.hasImplicitReturnType,isTrue);
        expect(variable.name,variableName);
        expect(variable.hasImplicitType,isTrue);
        expect(variable.isConst,isTrue);
        expect(variable.isFinal,isFalse);
        expect(variable.isSynthetic,isFalse);
        expect(variable.getter,isNotNull);
        expect(variable.setter,isNull);
    }
    test_visitVariableDeclaration_top_final() : void {
        let holder : any = new bare.createInstance(any,null);
        let builder : any = this._makeBuilder(holder);
        let variableName : string = "v";
        let variableDeclaration : any = AstTestFactory.variableDeclaration2(variableName,null);
        AstTestFactory.variableDeclarationList2(Keyword.FINAL,new core.DartList.literal(variableDeclaration));
        variableDeclaration.accept(builder);
        let variables : core.DartList<any> = holder.topLevelVariables;
        expect(variables,hasLength(1));
        let variable : any = variables[0];
        expect(variable,isNotNull);
        expect(variable.hasImplicitType,isTrue);
        expect(variable.initializer,isNull);
        expect(variable.name,variableName);
        expect(variable.isConst,isFalse);
        expect(variable.isFinal,isTrue);
        expect(variable.isSynthetic,isFalse);
        expect(variable.getter,isNotNull);
        expect(variable.setter,isNull);
    }
    _makeBuilder(holder : any) : any {
        return new bare.createInstance(any,null,holder,this.compilationUnitElement);
    }
    _setBlockBodySourceRange(body : any,offset : number,end : number) : void {
        this._setNodeSourceRange(body.block,offset,end);
    }
    _setNodeSourceRange(node : any,offset : number,end : number) : void {
        node.beginToken.offset = offset;
        let endToken : any = node.endToken;
        endToken.offset = end - endToken.length;
    }
    _useParameterInMethod(formalParameter : any,blockOffset : number,blockEnd : number) : void {
        let block : any = AstTestFactory.block();
        block.leftBracket.offset = blockOffset;
        block.rightBracket.offset = blockEnd - 1;
        let body : any = AstTestFactory.blockFunctionBody(block);
        AstTestFactory.methodDeclaration2(null,null,null,null,AstTestFactory.identifier3("main"),AstTestFactory.formalParameterList(new core.DartList.literal(formalParameter)),body);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ElementBuilderTest() {
    }
}

export namespace LocalElementBuilderTest {
    export type Constructors = _BaseTest.Constructors | 'LocalElementBuilderTest';
    export type Interface = Omit<LocalElementBuilderTest, Constructors>;
}
@DartClass
export class LocalElementBuilderTest extends _BaseTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElementBuilder(holder : any) : any {
        return new bare.createInstance(any,null,holder,this.compilationUnitElement);
    }
    test_buildLocalElements() : void {
        let unit : any = this.parseCompilationUnit('main() {\n  int v1;\n  f1() {\n    int v2;\n    f2() {\n      int v3;\n    }\n  }\n}\n');
        let mainAst = unit.declarations.single as any;
        let main : any;
        {
            let holder : any = new bare.createInstance(any,null);
            unit.accept(new bare.createInstance(any,null,holder,this.compilationUnitElement));
            main = holder.functions.single as any;
        }
        expect(main.localVariables,isEmpty);
        expect(main.functions,isEmpty);
        let holder : any = new bare.createInstance(any,null);
        let mainBody : any = mainAst.functionExpression.body;
        mainBody.accept(new bare.createInstance(any,null,holder,this.compilationUnitElement));
        main.functions = holder.functions;
        main.localVariables = holder.localVariables;
        expect(main.localVariables.map((v : any) =>  {
            return v.name;
        }),new core.DartList.literal('v1'));
        expect(main.functions,hasLength(1));
        {
            let f1 : any = op(Op.INDEX,main.functions,0);
            expect(f1.name,'f1');
            expect(f1.localVariables.map((v : any) =>  {
                return v.name;
            }),new core.DartList.literal('v2'));
            expect(f1.functions,hasLength(1));
            {
                let f2 : any = op(Op.INDEX,f1.functions,0);
                expect(f2.name,'f2');
                expect(f2.localVariables.map((v : any) =>  {
                    return v.name;
                }),new core.DartList.literal('v3'));
                expect(f2.functions,isEmpty);
            }
        }
    }
    test_buildParameterInitializer() : void {
        let unit : any = this.parseCompilationUnit('f({p: 42}) {}');
        let function = unit.declarations.single as any;
        let parameter = function.functionExpression.parameters.parameters.single as any;
        {
            let holder : any = new bare.createInstance(any,null);
            unit.accept(new bare.createInstance(any,null,holder,this.compilationUnitElement));
        }
        let parameterElement = parameter.element as any;
        expect(parameterElement,isNotNull);
        expect(parameterElement.initializer,isNull);
        new bare.createInstance(any,null,new bare.createInstance(any,null),this.compilationUnitElement).buildParameterInitializer(parameterElement,parameter.defaultValue);
        expect(parameterElement.initializer,isNotNull);
    }
    test_buildVariableInitializer() : void {
        let unit : any = this.parseCompilationUnit('var V = 42;');
        let topLevelDecl : any = op(Op.INDEX,unit.declarations,0) as any;
        let variable : any = topLevelDecl.variables.variables.single;
        {
            let holder : any = new bare.createInstance(any,null);
            unit.accept(new bare.createInstance(any,null,holder,this.compilationUnitElement));
        }
        let variableElement = variable.element as any;
        expect(variableElement,isNotNull);
        expect(variableElement.initializer,isNull);
        new bare.createInstance(any,null,new bare.createInstance(any,null),this.compilationUnitElement).buildVariableInitializer(variableElement,variable.initializer);
        expect(variableElement.initializer,isNotNull);
    }
    test_genericFunction_isExpression() : void {
        this.buildElementsForText('main(p) { p is Function(int a, String); }');
        let main = op(Op.INDEX,this.compilationUnit.declarations,0) as any;
        let body = main.functionExpression.body as any;
        let statement = op(Op.INDEX,body.block.statements,0) as any;
        let expression = statement.expression as any;
        let typeNode = expression.type as any;
        let typeElement = typeNode.type.element as any;
        expect(typeElement.parameters,hasLength(2));
        expect(op(Op.INDEX,typeElement.parameters,0).name,'a');
        expect(op(Op.INDEX,typeElement.parameters,1).name,'');
    }
    test_visitDefaultFormalParameter_local() : void {
        let unit : any = this.parseCompilationUnit('main() {\n  f({bool b: false}) {}\n}\n');
        let mainAst = unit.declarations.single as any;
        let main : any;
        {
            let holder : any = new bare.createInstance(any,null);
            unit.accept(new bare.createInstance(any,null,holder,this.compilationUnitElement));
            main = holder.functions.single as any;
        }
        let holder : any = new bare.createInstance(any,null);
        let mainBody : any = mainAst.functionExpression.body;
        mainBody.accept(new bare.createInstance(any,null,holder,this.compilationUnitElement));
        main.functions = holder.functions;
        main.localVariables = holder.localVariables;
        expect(main.functions,hasLength(1));
        let f : any = op(Op.INDEX,main.functions,0);
        expect(f.parameters,hasLength(1));
        expect(op(Op.INDEX,f.parameters,0).initializer,isNotNull);
    }
    test_visitFieldFormalParameter() : void {
        let unit : any = this.parseCompilationUnit('main() {\n  f(a, this.b) {}\n}\n',new core.DartList.literal(ParserErrorCode.FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR));
        let main = op(Op.INDEX,unit.declarations,0) as any;
        let mainBody = main.functionExpression.body as any;
        let mainBlock = mainBody.block;
        let statement = op(Op.INDEX,mainBlock.statements,0) as any;
        let f : any = statement.functionDeclaration;
        {
            let holder : any = new bare.createInstance(any,null);
            unit.accept(new bare.createInstance(any,null,holder,this.compilationUnitElement));
        }
        let holder : any = new bare.createInstance(any,null);
        let builder = new bare.createInstance(any,null,holder,this.compilationUnitElement);
        f.accept(builder);
        let parameters : core.DartList<any> = f.functionExpression.parameters.parameters;
        let a : any = parameters[0].element;
        expect(a,isNotNull);
        expect(a.name,'a');
        let b : any = parameters[1].element;
        expect(b,isNotNull);
        expect(b.name,'b');
    }
    test_visitVariableDeclaration_local() : void {
        let holder = this.buildElementsForText('class C { m() { T v = null; } }');
        let variableElements : core.DartList<any> = holder.localVariables;
        expect(variableElements,hasLength(1));
        let variableElement : any = variableElements[0];
        expect(variableElement.hasImplicitType,isFalse);
        expect(variableElement.name,'v');
        expect(variableElement.initializer,isNotNull);
        this._assertVisibleRange(variableElement,14,29);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LocalElementBuilderTest() {
    }
}

export class properties {
}
