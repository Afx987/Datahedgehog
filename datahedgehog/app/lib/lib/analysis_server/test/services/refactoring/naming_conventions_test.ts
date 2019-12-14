/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/naming_conventions_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_refactoring";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(NamingConventionsTest);
    });
};
export namespace NamingConventionsTest {
    export type Constructors = lib3.RefactoringTest.Constructors | 'NamingConventionsTest';
    export type Interface = Omit<NamingConventionsTest, Constructors>;
}
@DartClass
export class NamingConventionsTest extends lib3.RefactoringTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get refactoring() : any {
        return null;
    }
    test_validateClassName_doesNotStartWithLowerCase() : void {
        this.assertRefactoringStatus(validateClassName("newName"),RefactoringProblemSeverity.WARNING,{
            expectedMessage : "Class name should start with an uppercase letter."});
    }
    test_validateClassName_empty() : void {
        this.assertRefactoringStatus(validateClassName(""),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Class name must not be empty."});
    }
    test_validateClassName_leadingBlanks() : void {
        this.assertRefactoringStatus(validateClassName(" NewName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Class name must not start or end with a blank."});
    }
    test_validateClassName_notIdentifierMiddle() : void {
        this.assertRefactoringStatus(validateClassName("New-Name"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Class name must not contain '-'."});
    }
    test_validateClassName_notIdentifierStart() : void {
        this.assertRefactoringStatus(validateClassName("-NewName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Class name must begin with an uppercase letter or underscore."});
    }
    test_validateClassName_null() : void {
        this.assertRefactoringStatus(validateClassName(null),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Class name must not be null."});
    }
    test_validateClassName_OK() : void {
        this.assertRefactoringStatusOK(validateClassName("NewName"));
    }
    test_validateClassName_OK_leadingDollar() : void {
        this.assertRefactoringStatusOK(validateClassName("$NewName"));
    }
    test_validateClassName_OK_leadingUnderscore() : void {
        this.assertRefactoringStatusOK(validateClassName("_NewName"));
    }
    test_validateClassName_OK_middleDollar() : void {
        this.assertRefactoringStatusOK(validateClassName("New$Name"));
    }
    test_validateClassName_trailingBlanks() : void {
        this.assertRefactoringStatus(validateClassName("NewName "),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Class name must not start or end with a blank."});
    }
    test_validateConstructorName_doesNotStartWithLowerCase() : void {
        this.assertRefactoringStatus(validateConstructorName("NewName"),RefactoringProblemSeverity.WARNING,{
            expectedMessage : "Constructor name should start with a lowercase letter."});
    }
    test_validateConstructorName_empty() : void {
        this.assertRefactoringStatusOK(validateConstructorName(""));
    }
    test_validateConstructorName_leadingBlanks() : void {
        this.assertRefactoringStatus(validateConstructorName(" newName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Constructor name must not start or end with a blank."});
    }
    test_validateConstructorName_notIdentifierMiddle() : void {
        this.assertRefactoringStatus(validateConstructorName("na-me"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Constructor name must not contain '-'."});
    }
    test_validateConstructorName_notIdentifierStart() : void {
        this.assertRefactoringStatus(validateConstructorName("2name"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Constructor name must begin with a lowercase letter or underscore."});
    }
    test_validateConstructorName_null() : void {
        this.assertRefactoringStatus(validateConstructorName(null),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Constructor name must not be null."});
    }
    test_validateConstructorName_OK() : void {
        this.assertRefactoringStatusOK(validateConstructorName("newName"));
    }
    test_validateConstructorName_OK_leadingUnderscore() : void {
        this.assertRefactoringStatusOK(validateConstructorName("_newName"));
    }
    test_validateConstructorName_trailingBlanks() : void {
        this.assertRefactoringStatus(validateConstructorName("newName "),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Constructor name must not start or end with a blank."});
    }
    test_validateFieldName_doesNotStartWithLowerCase() : void {
        this.assertRefactoringStatus(validateFieldName("NewName"),RefactoringProblemSeverity.WARNING,{
            expectedMessage : "Field name should start with a lowercase letter."});
    }
    test_validateFieldName_empty() : void {
        this.assertRefactoringStatus(validateFieldName(""),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Field name must not be empty."});
    }
    test_validateFieldName_leadingBlanks() : void {
        this.assertRefactoringStatus(validateFieldName(" newName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Field name must not start or end with a blank."});
    }
    test_validateFieldName_notIdentifierMiddle() : void {
        this.assertRefactoringStatus(validateFieldName("new-Name"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Field name must not contain '-'."});
    }
    test_validateFieldName_notIdentifierStart() : void {
        this.assertRefactoringStatus(validateFieldName("2newName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Field name must begin with a lowercase letter or underscore."});
    }
    test_validateFieldName_notKeyword() : void {
        this.assertRefactoringStatus(validateFieldName("for"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Field name must not be a keyword."});
    }
    test_validateFieldName_notPseudoKeyword() : void {
        this.assertRefactoringStatus(validateFieldName("await"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Field name must not be a keyword."});
    }
    test_validateFieldName_null() : void {
        this.assertRefactoringStatus(validateFieldName(null),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Field name must not be null."});
    }
    test_validateFieldName_OK() : void {
        this.assertRefactoringStatusOK(validateFieldName("newName"));
    }
    test_validateFieldName_OK_leadingUnderscore() : void {
        this.assertRefactoringStatusOK(validateFieldName("_newName"));
    }
    test_validateFieldName_OK_middleUnderscore() : void {
        this.assertRefactoringStatusOK(validateFieldName("new_name"));
    }
    test_validateFieldName_trailingBlanks() : void {
        this.assertRefactoringStatus(validateFieldName("newName "),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Field name must not start or end with a blank."});
    }
    test_validateFunctionName_doesNotStartWithLowerCase() : void {
        this.assertRefactoringStatus(validateFunctionName("NewName"),RefactoringProblemSeverity.WARNING,{
            expectedMessage : "Function name should start with a lowercase letter."});
    }
    test_validateFunctionName_empty() : void {
        this.assertRefactoringStatus(validateFunctionName(""),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Function name must not be empty."});
    }
    test_validateFunctionName_leadingBlanks() : void {
        this.assertRefactoringStatus(validateFunctionName(" newName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Function name must not start or end with a blank."});
    }
    test_validateFunctionName_notIdentifierMiddle() : void {
        this.assertRefactoringStatus(validateFunctionName("new-Name"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Function name must not contain '-'."});
    }
    test_validateFunctionName_notIdentifierStart() : void {
        this.assertRefactoringStatus(validateFunctionName("2newName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Function name must begin with a lowercase letter or underscore."});
    }
    test_validateFunctionName_notKeyword() : void {
        this.assertRefactoringStatus(validateFunctionName("new"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Function name must not be a keyword."});
    }
    test_validateFunctionName_notPseudoKeyword() : void {
        this.assertRefactoringStatus(validateFunctionName("yield"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Function name must not be a keyword."});
    }
    test_validateFunctionName_null() : void {
        this.assertRefactoringStatus(validateFunctionName(null),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Function name must not be null."});
    }
    test_validateFunctionName_OK() : void {
        this.assertRefactoringStatusOK(validateFunctionName("newName"));
    }
    test_validateFunctionName_OK_leadingUnderscore() : void {
        this.assertRefactoringStatusOK(validateFunctionName("_newName"));
    }
    test_validateFunctionName_OK_middleUnderscore() : void {
        this.assertRefactoringStatusOK(validateFunctionName("new_name"));
    }
    test_validateFunctionName_trailingBlanks() : void {
        this.assertRefactoringStatus(validateFunctionName("newName "),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Function name must not start or end with a blank."});
    }
    test_validateFunctionTypeAliasName_doesNotStartWithLowerCase() : void {
        this.assertRefactoringStatus(validateFunctionTypeAliasName("newName"),RefactoringProblemSeverity.WARNING,{
            expectedMessage : "Function type alias name should start with an uppercase letter."});
    }
    test_validateFunctionTypeAliasName_empty() : void {
        this.assertRefactoringStatus(validateFunctionTypeAliasName(""),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Function type alias name must not be empty."});
    }
    test_validateFunctionTypeAliasName_leadingBlanks() : void {
        this.assertRefactoringStatus(validateFunctionTypeAliasName(" NewName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Function type alias name must not start or end with a blank."});
    }
    test_validateFunctionTypeAliasName_notIdentifierMiddle() : void {
        this.assertRefactoringStatus(validateFunctionTypeAliasName("New-Name"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Function type alias name must not contain '-'."});
    }
    test_validateFunctionTypeAliasName_notIdentifierStart() : void {
        this.assertRefactoringStatus(validateFunctionTypeAliasName("-NewName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Function type alias name must begin with an uppercase letter or underscore."});
    }
    test_validateFunctionTypeAliasName_null() : void {
        this.assertRefactoringStatus(validateFunctionTypeAliasName(null),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Function type alias name must not be null."});
    }
    test_validateFunctionTypeAliasName_OK() : void {
        this.assertRefactoringStatusOK(validateFunctionTypeAliasName("NewName"));
    }
    test_validateFunctionTypeAliasName_OK_leadingDollar() : void {
        this.assertRefactoringStatusOK(validateFunctionTypeAliasName("$NewName"));
    }
    test_validateFunctionTypeAliasName_OK_leadingUnderscore() : void {
        this.assertRefactoringStatusOK(validateFunctionTypeAliasName("_NewName"));
    }
    test_validateFunctionTypeAliasName_OK_middleDollar() : void {
        this.assertRefactoringStatusOK(validateFunctionTypeAliasName("New$Name"));
    }
    test_validateFunctionTypeAliasName_trailingBlanks() : void {
        this.assertRefactoringStatus(validateFunctionTypeAliasName("NewName "),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Function type alias name must not start or end with a blank."});
    }
    test_validateImportPrefixName_doesNotStartWithLowerCase() : void {
        this.assertRefactoringStatus(validateImportPrefixName("NewName"),RefactoringProblemSeverity.WARNING,{
            expectedMessage : "Import prefix name should start with a lowercase letter."});
    }
    test_validateImportPrefixName_empty() : void {
        this.assertRefactoringStatusOK(validateImportPrefixName(""));
    }
    test_validateImportPrefixName_leadingBlanks() : void {
        this.assertRefactoringStatus(validateImportPrefixName(" newName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Import prefix name must not start or end with a blank."});
    }
    test_validateImportPrefixName_notIdentifierMiddle() : void {
        this.assertRefactoringStatus(validateImportPrefixName("new-Name"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Import prefix name must not contain '-'."});
    }
    test_validateImportPrefixName_notIdentifierStart() : void {
        this.assertRefactoringStatus(validateImportPrefixName("2newName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Import prefix name must begin with a lowercase letter or underscore."});
    }
    test_validateImportPrefixName_notKeyword() : void {
        this.assertRefactoringStatus(validateImportPrefixName("while"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Import prefix name must not be a keyword."});
    }
    test_validateImportPrefixName_notPseudoKeyword() : void {
        this.assertRefactoringStatus(validateImportPrefixName("await"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Import prefix name must not be a keyword."});
    }
    test_validateImportPrefixName_null() : void {
        this.assertRefactoringStatus(validateImportPrefixName(null),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Import prefix name must not be null."});
    }
    test_validateImportPrefixName_OK() : void {
        this.assertRefactoringStatusOK(validateImportPrefixName("newName"));
    }
    test_validateImportPrefixName_OK_leadingUnderscore() : void {
        this.assertRefactoringStatusOK(validateImportPrefixName("_newName"));
    }
    test_validateImportPrefixName_OK_middleUnderscore() : void {
        this.assertRefactoringStatusOK(validateImportPrefixName("new_name"));
    }
    test_validateImportPrefixName_trailingBlanks() : void {
        this.assertRefactoringStatus(validateImportPrefixName("newName "),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Import prefix name must not start or end with a blank."});
    }
    test_validateLabelName_doesNotStartWithLowerCase() : void {
        this.assertRefactoringStatus(validateLabelName("NewName"),RefactoringProblemSeverity.WARNING,{
            expectedMessage : "Label name should start with a lowercase letter."});
    }
    test_validateLabelName_empty() : void {
        this.assertRefactoringStatus(validateLabelName(""),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Label name must not be empty."});
    }
    test_validateLabelName_leadingBlanks() : void {
        this.assertRefactoringStatus(validateLabelName(" newName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Label name must not start or end with a blank."});
    }
    test_validateLabelName_notIdentifierMiddle() : void {
        this.assertRefactoringStatus(validateLabelName("new-Name"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Label name must not contain '-'."});
    }
    test_validateLabelName_notIdentifierStart() : void {
        this.assertRefactoringStatus(validateLabelName("2newName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Label name must begin with a lowercase letter or underscore."});
    }
    test_validateLabelName_notKeyword() : void {
        this.assertRefactoringStatus(validateLabelName("for"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Label name must not be a keyword."});
    }
    test_validateLabelName_notPseudoKeyword() : void {
        this.assertRefactoringStatus(validateLabelName("await"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Label name must not be a keyword."});
    }
    test_validateLabelName_null() : void {
        this.assertRefactoringStatus(validateLabelName(null),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Label name must not be null."});
    }
    test_validateLabelName_OK() : void {
        this.assertRefactoringStatusOK(validateLabelName("newName"));
    }
    test_validateLabelName_OK_leadingDollar() : void {
        this.assertRefactoringStatusOK(validateLabelName("$newName"));
    }
    test_validateLabelName_OK_leadingUnderscore() : void {
        this.assertRefactoringStatusOK(validateLabelName("_newName"));
    }
    test_validateLabelName_OK_middleUnderscore() : void {
        this.assertRefactoringStatusOK(validateLabelName("new_name"));
    }
    test_validateLabelName_trailingBlanks() : void {
        this.assertRefactoringStatus(validateLabelName("newName "),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Label name must not start or end with a blank."});
    }
    test_validateLibraryName_blank() : void {
        this.assertRefactoringStatus(validateLibraryName(""),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Library name must not be blank."});
        this.assertRefactoringStatus(validateLibraryName(" "),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Library name must not be blank."});
    }
    test_validateLibraryName_blank_identifier() : void {
        this.assertRefactoringStatus(validateLibraryName("my..name"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Library name identifier must not be empty."});
        this.assertRefactoringStatus(validateLibraryName("my. .name"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Library name identifier must not start or end with a blank."});
    }
    test_validateLibraryName_hasUpperCase() : void {
        this.assertRefactoringStatus(validateLibraryName("my.newName"),RefactoringProblemSeverity.WARNING,{
            expectedMessage : "Library name should consist of lowercase identifier separated by dots."});
    }
    test_validateLibraryName_leadingBlanks() : void {
        this.assertRefactoringStatus(validateLibraryName("my. name"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Library name identifier must not start or end with a blank."});
    }
    test_validateLibraryName_notIdentifierMiddle() : void {
        this.assertRefactoringStatus(validateLibraryName("my.ba-d.name"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Library name identifier must not contain '-'."});
    }
    test_validateLibraryName_notIdentifierStart() : void {
        this.assertRefactoringStatus(validateLibraryName("my.2bad.name"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Library name identifier must begin with a lowercase letter or underscore."});
    }
    test_validateLibraryName_notKeyword() : void {
        this.assertRefactoringStatus(validateLibraryName("my.yield.name"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Library name identifier must not be a keyword."});
    }
    test_validateLibraryName_null() : void {
        this.assertRefactoringStatus(validateLibraryName(null),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Library name must not be null."});
    }
    test_validateLibraryName_OK_oneIdentifier() : void {
        this.assertRefactoringStatusOK(validateLibraryName("name"));
    }
    test_validateLibraryName_OK_severalIdentifiers() : void {
        this.assertRefactoringStatusOK(validateLibraryName("my.lib.name"));
    }
    test_validateLibraryName_trailingBlanks() : void {
        this.assertRefactoringStatus(validateLibraryName("my.bad .name"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Library name identifier must not start or end with a blank."});
    }
    test_validateMethodName_doesNotStartWithLowerCase() : void {
        this.assertRefactoringStatus(validateMethodName("NewName"),RefactoringProblemSeverity.WARNING,{
            expectedMessage : "Method name should start with a lowercase letter."});
    }
    test_validateMethodName_empty() : void {
        this.assertRefactoringStatus(validateMethodName(""),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Method name must not be empty."});
    }
    test_validateMethodName_keyword() : void {
        this.assertRefactoringStatus(validateMethodName("for"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Method name must not be a keyword."});
    }
    test_validateMethodName_leadingBlanks() : void {
        this.assertRefactoringStatus(validateMethodName(" newName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Method name must not start or end with a blank."});
    }
    test_validateMethodName_notIdentifierMiddle() : void {
        this.assertRefactoringStatus(validateMethodName("new-Name"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Method name must not contain '-'."});
    }
    test_validateMethodName_notIdentifierStart() : void {
        this.assertRefactoringStatus(validateMethodName("2newName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Method name must begin with a lowercase letter or underscore."});
    }
    test_validateMethodName_notKeyword() : void {
        this.assertRefactoringStatus(validateMethodName("do"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Method name must not be a keyword."});
    }
    test_validateMethodName_notPseudoKeyword() : void {
        this.assertRefactoringStatus(validateMethodName("yield"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Method name must not be a keyword."});
    }
    test_validateMethodName_null() : void {
        this.assertRefactoringStatus(validateMethodName(null),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Method name must not be null."});
    }
    test_validateMethodName_OK() : void {
        this.assertRefactoringStatusOK(validateMethodName("newName"));
    }
    test_validateMethodName_OK_leadingUnderscore() : void {
        this.assertRefactoringStatusOK(validateMethodName("_newName"));
    }
    test_validateMethodName_OK_middleUnderscore() : void {
        this.assertRefactoringStatusOK(validateMethodName("new_name"));
    }
    test_validateMethodName_trailingBlanks() : void {
        this.assertRefactoringStatus(validateMethodName("newName "),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Method name must not start or end with a blank."});
    }
    test_validateParameterName_doesNotStartWithLowerCase() : void {
        this.assertRefactoringStatus(validateParameterName("NewName"),RefactoringProblemSeverity.WARNING,{
            expectedMessage : "Parameter name should start with a lowercase letter."});
    }
    test_validateParameterName_empty() : void {
        this.assertRefactoringStatus(validateParameterName(""),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Parameter name must not be empty."});
    }
    test_validateParameterName_leadingBlanks() : void {
        this.assertRefactoringStatus(validateParameterName(" newName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Parameter name must not start or end with a blank."});
    }
    test_validateParameterName_notIdentifierMiddle() : void {
        this.assertRefactoringStatus(validateParameterName("new-Name"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Parameter name must not contain '-'."});
    }
    test_validateParameterName_notIdentifierStart() : void {
        this.assertRefactoringStatus(validateParameterName("2newName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Parameter name must begin with a lowercase letter or underscore."});
    }
    test_validateParameterName_notKeyword() : void {
        this.assertRefactoringStatus(validateParameterName("while"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Parameter name must not be a keyword."});
    }
    test_validateParameterName_notPseudoKeyword() : void {
        this.assertRefactoringStatus(validateParameterName("await"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Parameter name must not be a keyword."});
    }
    test_validateParameterName_null() : void {
        this.assertRefactoringStatus(validateParameterName(null),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Parameter name must not be null."});
    }
    test_validateParameterName_OK() : void {
        this.assertRefactoringStatusOK(validateParameterName("newName"));
    }
    test_validateParameterName_OK_leadingUnderscore() : void {
        this.assertRefactoringStatusOK(validateParameterName("_newName"));
    }
    test_validateParameterName_OK_middleUnderscore() : void {
        this.assertRefactoringStatusOK(validateParameterName("new_name"));
    }
    test_validateParameterName_trailingBlanks() : void {
        this.assertRefactoringStatus(validateParameterName("newName "),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Parameter name must not start or end with a blank."});
    }
    test_validateVariableName_doesNotStartWithLowerCase() : void {
        this.assertRefactoringStatus(validateVariableName("NewName"),RefactoringProblemSeverity.WARNING,{
            expectedMessage : "Variable name should start with a lowercase letter."});
    }
    test_validateVariableName_empty() : void {
        this.assertRefactoringStatus(validateVariableName(""),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Variable name must not be empty."});
    }
    test_validateVariableName_leadingBlanks() : void {
        this.assertRefactoringStatus(validateVariableName(" newName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Variable name must not start or end with a blank."});
    }
    test_validateVariableName_notIdentifierMiddle() : void {
        this.assertRefactoringStatus(validateVariableName("new-Name"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Variable name must not contain '-'."});
    }
    test_validateVariableName_notIdentifierStart() : void {
        this.assertRefactoringStatus(validateVariableName("2newName"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Variable name must begin with a lowercase letter or underscore."});
    }
    test_validateVariableName_notKeyword() : void {
        this.assertRefactoringStatus(validateVariableName("for"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Variable name must not be a keyword."});
    }
    test_validateVariableName_notPseudoKeyword() : void {
        this.assertRefactoringStatus(validateVariableName("await"),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Variable name must not be a keyword."});
    }
    test_validateVariableName_null() : void {
        this.assertRefactoringStatus(validateVariableName(null),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Variable name must not be null."});
    }
    test_validateVariableName_OK() : void {
        this.assertRefactoringStatusOK(validateVariableName("newName"));
    }
    test_validateVariableName_OK_leadingDollar() : void {
        this.assertRefactoringStatusOK(validateVariableName("$newName"));
    }
    test_validateVariableName_OK_leadingUnderscore() : void {
        this.assertRefactoringStatusOK(validateVariableName("_newName"));
    }
    test_validateVariableName_OK_middleUnderscore() : void {
        this.assertRefactoringStatusOK(validateVariableName("new_name"));
    }
    test_validateVariableName_trailingBlanks() : void {
        this.assertRefactoringStatus(validateVariableName("newName "),RefactoringProblemSeverity.FATAL,{
            expectedMessage : "Variable name must not start or end with a blank."});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NamingConventionsTest() {
    }
}

export class properties {
}
