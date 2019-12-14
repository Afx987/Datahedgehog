/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/binary/tag.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Tag {
    export type Constructors = 'Tag';
    export type Interface = Omit<Tag, Constructors>;
}
@DartClass
export class Tag {
    private static __$Nothing : number;
    static get Nothing() : number { 
        if (this.__$Nothing===undefined) {
            this.__$Nothing = 0;
        }
        return this.__$Nothing;
    }

    private static __$Something : number;
    static get Something() : number { 
        if (this.__$Something===undefined) {
            this.__$Something = 1;
        }
        return this.__$Something;
    }

    private static __$Class : number;
    static get Class() : number { 
        if (this.__$Class===undefined) {
            this.__$Class = 2;
        }
        return this.__$Class;
    }

    private static __$Field : number;
    static get Field() : number { 
        if (this.__$Field===undefined) {
            this.__$Field = 4;
        }
        return this.__$Field;
    }

    private static __$Constructor : number;
    static get Constructor() : number { 
        if (this.__$Constructor===undefined) {
            this.__$Constructor = 5;
        }
        return this.__$Constructor;
    }

    private static __$Procedure : number;
    static get Procedure() : number { 
        if (this.__$Procedure===undefined) {
            this.__$Procedure = 6;
        }
        return this.__$Procedure;
    }

    private static __$InvalidInitializer : number;
    static get InvalidInitializer() : number { 
        if (this.__$InvalidInitializer===undefined) {
            this.__$InvalidInitializer = 7;
        }
        return this.__$InvalidInitializer;
    }

    private static __$FieldInitializer : number;
    static get FieldInitializer() : number { 
        if (this.__$FieldInitializer===undefined) {
            this.__$FieldInitializer = 8;
        }
        return this.__$FieldInitializer;
    }

    private static __$SuperInitializer : number;
    static get SuperInitializer() : number { 
        if (this.__$SuperInitializer===undefined) {
            this.__$SuperInitializer = 9;
        }
        return this.__$SuperInitializer;
    }

    private static __$RedirectingInitializer : number;
    static get RedirectingInitializer() : number { 
        if (this.__$RedirectingInitializer===undefined) {
            this.__$RedirectingInitializer = 10;
        }
        return this.__$RedirectingInitializer;
    }

    private static __$LocalInitializer : number;
    static get LocalInitializer() : number { 
        if (this.__$LocalInitializer===undefined) {
            this.__$LocalInitializer = 11;
        }
        return this.__$LocalInitializer;
    }

    private static __$CheckLibraryIsLoaded : number;
    static get CheckLibraryIsLoaded() : number { 
        if (this.__$CheckLibraryIsLoaded===undefined) {
            this.__$CheckLibraryIsLoaded = 13;
        }
        return this.__$CheckLibraryIsLoaded;
    }

    private static __$LoadLibrary : number;
    static get LoadLibrary() : number { 
        if (this.__$LoadLibrary===undefined) {
            this.__$LoadLibrary = 14;
        }
        return this.__$LoadLibrary;
    }

    private static __$DirectPropertyGet : number;
    static get DirectPropertyGet() : number { 
        if (this.__$DirectPropertyGet===undefined) {
            this.__$DirectPropertyGet = 15;
        }
        return this.__$DirectPropertyGet;
    }

    private static __$DirectPropertySet : number;
    static get DirectPropertySet() : number { 
        if (this.__$DirectPropertySet===undefined) {
            this.__$DirectPropertySet = 16;
        }
        return this.__$DirectPropertySet;
    }

    private static __$DirectMethodInvocation : number;
    static get DirectMethodInvocation() : number { 
        if (this.__$DirectMethodInvocation===undefined) {
            this.__$DirectMethodInvocation = 17;
        }
        return this.__$DirectMethodInvocation;
    }

    private static __$ConstStaticInvocation : number;
    static get ConstStaticInvocation() : number { 
        if (this.__$ConstStaticInvocation===undefined) {
            this.__$ConstStaticInvocation = 18;
        }
        return this.__$ConstStaticInvocation;
    }

    private static __$InvalidExpression : number;
    static get InvalidExpression() : number { 
        if (this.__$InvalidExpression===undefined) {
            this.__$InvalidExpression = 19;
        }
        return this.__$InvalidExpression;
    }

    private static __$VariableGet : number;
    static get VariableGet() : number { 
        if (this.__$VariableGet===undefined) {
            this.__$VariableGet = 20;
        }
        return this.__$VariableGet;
    }

    private static __$VariableSet : number;
    static get VariableSet() : number { 
        if (this.__$VariableSet===undefined) {
            this.__$VariableSet = 21;
        }
        return this.__$VariableSet;
    }

    private static __$PropertyGet : number;
    static get PropertyGet() : number { 
        if (this.__$PropertyGet===undefined) {
            this.__$PropertyGet = 22;
        }
        return this.__$PropertyGet;
    }

    private static __$PropertySet : number;
    static get PropertySet() : number { 
        if (this.__$PropertySet===undefined) {
            this.__$PropertySet = 23;
        }
        return this.__$PropertySet;
    }

    private static __$SuperPropertyGet : number;
    static get SuperPropertyGet() : number { 
        if (this.__$SuperPropertyGet===undefined) {
            this.__$SuperPropertyGet = 24;
        }
        return this.__$SuperPropertyGet;
    }

    private static __$SuperPropertySet : number;
    static get SuperPropertySet() : number { 
        if (this.__$SuperPropertySet===undefined) {
            this.__$SuperPropertySet = 25;
        }
        return this.__$SuperPropertySet;
    }

    private static __$StaticGet : number;
    static get StaticGet() : number { 
        if (this.__$StaticGet===undefined) {
            this.__$StaticGet = 26;
        }
        return this.__$StaticGet;
    }

    private static __$StaticSet : number;
    static get StaticSet() : number { 
        if (this.__$StaticSet===undefined) {
            this.__$StaticSet = 27;
        }
        return this.__$StaticSet;
    }

    private static __$MethodInvocation : number;
    static get MethodInvocation() : number { 
        if (this.__$MethodInvocation===undefined) {
            this.__$MethodInvocation = 28;
        }
        return this.__$MethodInvocation;
    }

    private static __$SuperMethodInvocation : number;
    static get SuperMethodInvocation() : number { 
        if (this.__$SuperMethodInvocation===undefined) {
            this.__$SuperMethodInvocation = 29;
        }
        return this.__$SuperMethodInvocation;
    }

    private static __$StaticInvocation : number;
    static get StaticInvocation() : number { 
        if (this.__$StaticInvocation===undefined) {
            this.__$StaticInvocation = 30;
        }
        return this.__$StaticInvocation;
    }

    private static __$ConstructorInvocation : number;
    static get ConstructorInvocation() : number { 
        if (this.__$ConstructorInvocation===undefined) {
            this.__$ConstructorInvocation = 31;
        }
        return this.__$ConstructorInvocation;
    }

    private static __$ConstConstructorInvocation : number;
    static get ConstConstructorInvocation() : number { 
        if (this.__$ConstConstructorInvocation===undefined) {
            this.__$ConstConstructorInvocation = 32;
        }
        return this.__$ConstConstructorInvocation;
    }

    private static __$Not : number;
    static get Not() : number { 
        if (this.__$Not===undefined) {
            this.__$Not = 33;
        }
        return this.__$Not;
    }

    private static __$LogicalExpression : number;
    static get LogicalExpression() : number { 
        if (this.__$LogicalExpression===undefined) {
            this.__$LogicalExpression = 34;
        }
        return this.__$LogicalExpression;
    }

    private static __$ConditionalExpression : number;
    static get ConditionalExpression() : number { 
        if (this.__$ConditionalExpression===undefined) {
            this.__$ConditionalExpression = 35;
        }
        return this.__$ConditionalExpression;
    }

    private static __$StringConcatenation : number;
    static get StringConcatenation() : number { 
        if (this.__$StringConcatenation===undefined) {
            this.__$StringConcatenation = 36;
        }
        return this.__$StringConcatenation;
    }

    private static __$IsExpression : number;
    static get IsExpression() : number { 
        if (this.__$IsExpression===undefined) {
            this.__$IsExpression = 37;
        }
        return this.__$IsExpression;
    }

    private static __$AsExpression : number;
    static get AsExpression() : number { 
        if (this.__$AsExpression===undefined) {
            this.__$AsExpression = 38;
        }
        return this.__$AsExpression;
    }

    private static __$StringLiteral : number;
    static get StringLiteral() : number { 
        if (this.__$StringLiteral===undefined) {
            this.__$StringLiteral = 39;
        }
        return this.__$StringLiteral;
    }

    private static __$DoubleLiteral : number;
    static get DoubleLiteral() : number { 
        if (this.__$DoubleLiteral===undefined) {
            this.__$DoubleLiteral = 40;
        }
        return this.__$DoubleLiteral;
    }

    private static __$TrueLiteral : number;
    static get TrueLiteral() : number { 
        if (this.__$TrueLiteral===undefined) {
            this.__$TrueLiteral = 41;
        }
        return this.__$TrueLiteral;
    }

    private static __$FalseLiteral : number;
    static get FalseLiteral() : number { 
        if (this.__$FalseLiteral===undefined) {
            this.__$FalseLiteral = 42;
        }
        return this.__$FalseLiteral;
    }

    private static __$NullLiteral : number;
    static get NullLiteral() : number { 
        if (this.__$NullLiteral===undefined) {
            this.__$NullLiteral = 43;
        }
        return this.__$NullLiteral;
    }

    private static __$SymbolLiteral : number;
    static get SymbolLiteral() : number { 
        if (this.__$SymbolLiteral===undefined) {
            this.__$SymbolLiteral = 44;
        }
        return this.__$SymbolLiteral;
    }

    private static __$TypeLiteral : number;
    static get TypeLiteral() : number { 
        if (this.__$TypeLiteral===undefined) {
            this.__$TypeLiteral = 45;
        }
        return this.__$TypeLiteral;
    }

    private static __$ThisExpression : number;
    static get ThisExpression() : number { 
        if (this.__$ThisExpression===undefined) {
            this.__$ThisExpression = 46;
        }
        return this.__$ThisExpression;
    }

    private static __$Rethrow : number;
    static get Rethrow() : number { 
        if (this.__$Rethrow===undefined) {
            this.__$Rethrow = 47;
        }
        return this.__$Rethrow;
    }

    private static __$Throw : number;
    static get Throw() : number { 
        if (this.__$Throw===undefined) {
            this.__$Throw = 48;
        }
        return this.__$Throw;
    }

    private static __$ListLiteral : number;
    static get ListLiteral() : number { 
        if (this.__$ListLiteral===undefined) {
            this.__$ListLiteral = 49;
        }
        return this.__$ListLiteral;
    }

    private static __$MapLiteral : number;
    static get MapLiteral() : number { 
        if (this.__$MapLiteral===undefined) {
            this.__$MapLiteral = 50;
        }
        return this.__$MapLiteral;
    }

    private static __$AwaitExpression : number;
    static get AwaitExpression() : number { 
        if (this.__$AwaitExpression===undefined) {
            this.__$AwaitExpression = 51;
        }
        return this.__$AwaitExpression;
    }

    private static __$FunctionExpression : number;
    static get FunctionExpression() : number { 
        if (this.__$FunctionExpression===undefined) {
            this.__$FunctionExpression = 52;
        }
        return this.__$FunctionExpression;
    }

    private static __$Let : number;
    static get Let() : number { 
        if (this.__$Let===undefined) {
            this.__$Let = 53;
        }
        return this.__$Let;
    }

    private static __$PositiveIntLiteral : number;
    static get PositiveIntLiteral() : number { 
        if (this.__$PositiveIntLiteral===undefined) {
            this.__$PositiveIntLiteral = 55;
        }
        return this.__$PositiveIntLiteral;
    }

    private static __$NegativeIntLiteral : number;
    static get NegativeIntLiteral() : number { 
        if (this.__$NegativeIntLiteral===undefined) {
            this.__$NegativeIntLiteral = 56;
        }
        return this.__$NegativeIntLiteral;
    }

    private static __$BigIntLiteral : number;
    static get BigIntLiteral() : number { 
        if (this.__$BigIntLiteral===undefined) {
            this.__$BigIntLiteral = 57;
        }
        return this.__$BigIntLiteral;
    }

    private static __$ConstListLiteral : number;
    static get ConstListLiteral() : number { 
        if (this.__$ConstListLiteral===undefined) {
            this.__$ConstListLiteral = 58;
        }
        return this.__$ConstListLiteral;
    }

    private static __$ConstMapLiteral : number;
    static get ConstMapLiteral() : number { 
        if (this.__$ConstMapLiteral===undefined) {
            this.__$ConstMapLiteral = 59;
        }
        return this.__$ConstMapLiteral;
    }

    private static __$InvalidStatement : number;
    static get InvalidStatement() : number { 
        if (this.__$InvalidStatement===undefined) {
            this.__$InvalidStatement = 60;
        }
        return this.__$InvalidStatement;
    }

    private static __$ExpressionStatement : number;
    static get ExpressionStatement() : number { 
        if (this.__$ExpressionStatement===undefined) {
            this.__$ExpressionStatement = 61;
        }
        return this.__$ExpressionStatement;
    }

    private static __$Block : number;
    static get Block() : number { 
        if (this.__$Block===undefined) {
            this.__$Block = 62;
        }
        return this.__$Block;
    }

    private static __$EmptyStatement : number;
    static get EmptyStatement() : number { 
        if (this.__$EmptyStatement===undefined) {
            this.__$EmptyStatement = 63;
        }
        return this.__$EmptyStatement;
    }

    private static __$AssertStatement : number;
    static get AssertStatement() : number { 
        if (this.__$AssertStatement===undefined) {
            this.__$AssertStatement = 64;
        }
        return this.__$AssertStatement;
    }

    private static __$LabeledStatement : number;
    static get LabeledStatement() : number { 
        if (this.__$LabeledStatement===undefined) {
            this.__$LabeledStatement = 65;
        }
        return this.__$LabeledStatement;
    }

    private static __$BreakStatement : number;
    static get BreakStatement() : number { 
        if (this.__$BreakStatement===undefined) {
            this.__$BreakStatement = 66;
        }
        return this.__$BreakStatement;
    }

    private static __$WhileStatement : number;
    static get WhileStatement() : number { 
        if (this.__$WhileStatement===undefined) {
            this.__$WhileStatement = 67;
        }
        return this.__$WhileStatement;
    }

    private static __$DoStatement : number;
    static get DoStatement() : number { 
        if (this.__$DoStatement===undefined) {
            this.__$DoStatement = 68;
        }
        return this.__$DoStatement;
    }

    private static __$ForStatement : number;
    static get ForStatement() : number { 
        if (this.__$ForStatement===undefined) {
            this.__$ForStatement = 69;
        }
        return this.__$ForStatement;
    }

    private static __$ForInStatement : number;
    static get ForInStatement() : number { 
        if (this.__$ForInStatement===undefined) {
            this.__$ForInStatement = 70;
        }
        return this.__$ForInStatement;
    }

    private static __$SwitchStatement : number;
    static get SwitchStatement() : number { 
        if (this.__$SwitchStatement===undefined) {
            this.__$SwitchStatement = 71;
        }
        return this.__$SwitchStatement;
    }

    private static __$ContinueSwitchStatement : number;
    static get ContinueSwitchStatement() : number { 
        if (this.__$ContinueSwitchStatement===undefined) {
            this.__$ContinueSwitchStatement = 72;
        }
        return this.__$ContinueSwitchStatement;
    }

    private static __$IfStatement : number;
    static get IfStatement() : number { 
        if (this.__$IfStatement===undefined) {
            this.__$IfStatement = 73;
        }
        return this.__$IfStatement;
    }

    private static __$ReturnStatement : number;
    static get ReturnStatement() : number { 
        if (this.__$ReturnStatement===undefined) {
            this.__$ReturnStatement = 74;
        }
        return this.__$ReturnStatement;
    }

    private static __$TryCatch : number;
    static get TryCatch() : number { 
        if (this.__$TryCatch===undefined) {
            this.__$TryCatch = 75;
        }
        return this.__$TryCatch;
    }

    private static __$TryFinally : number;
    static get TryFinally() : number { 
        if (this.__$TryFinally===undefined) {
            this.__$TryFinally = 76;
        }
        return this.__$TryFinally;
    }

    private static __$YieldStatement : number;
    static get YieldStatement() : number { 
        if (this.__$YieldStatement===undefined) {
            this.__$YieldStatement = 77;
        }
        return this.__$YieldStatement;
    }

    private static __$VariableDeclaration : number;
    static get VariableDeclaration() : number { 
        if (this.__$VariableDeclaration===undefined) {
            this.__$VariableDeclaration = 78;
        }
        return this.__$VariableDeclaration;
    }

    private static __$FunctionDeclaration : number;
    static get FunctionDeclaration() : number { 
        if (this.__$FunctionDeclaration===undefined) {
            this.__$FunctionDeclaration = 79;
        }
        return this.__$FunctionDeclaration;
    }

    private static __$AsyncForInStatement : number;
    static get AsyncForInStatement() : number { 
        if (this.__$AsyncForInStatement===undefined) {
            this.__$AsyncForInStatement = 80;
        }
        return this.__$AsyncForInStatement;
    }

    private static __$TypedefType : number;
    static get TypedefType() : number { 
        if (this.__$TypedefType===undefined) {
            this.__$TypedefType = 87;
        }
        return this.__$TypedefType;
    }

    private static __$VectorType : number;
    static get VectorType() : number { 
        if (this.__$VectorType===undefined) {
            this.__$VectorType = 88;
        }
        return this.__$VectorType;
    }

    private static __$BottomType : number;
    static get BottomType() : number { 
        if (this.__$BottomType===undefined) {
            this.__$BottomType = 89;
        }
        return this.__$BottomType;
    }

    private static __$InvalidType : number;
    static get InvalidType() : number { 
        if (this.__$InvalidType===undefined) {
            this.__$InvalidType = 90;
        }
        return this.__$InvalidType;
    }

    private static __$DynamicType : number;
    static get DynamicType() : number { 
        if (this.__$DynamicType===undefined) {
            this.__$DynamicType = 91;
        }
        return this.__$DynamicType;
    }

    private static __$VoidType : number;
    static get VoidType() : number { 
        if (this.__$VoidType===undefined) {
            this.__$VoidType = 92;
        }
        return this.__$VoidType;
    }

    private static __$InterfaceType : number;
    static get InterfaceType() : number { 
        if (this.__$InterfaceType===undefined) {
            this.__$InterfaceType = 93;
        }
        return this.__$InterfaceType;
    }

    private static __$FunctionType : number;
    static get FunctionType() : number { 
        if (this.__$FunctionType===undefined) {
            this.__$FunctionType = 94;
        }
        return this.__$FunctionType;
    }

    private static __$TypeParameterType : number;
    static get TypeParameterType() : number { 
        if (this.__$TypeParameterType===undefined) {
            this.__$TypeParameterType = 95;
        }
        return this.__$TypeParameterType;
    }

    private static __$SimpleInterfaceType : number;
    static get SimpleInterfaceType() : number { 
        if (this.__$SimpleInterfaceType===undefined) {
            this.__$SimpleInterfaceType = 96;
        }
        return this.__$SimpleInterfaceType;
    }

    private static __$SimpleFunctionType : number;
    static get SimpleFunctionType() : number { 
        if (this.__$SimpleFunctionType===undefined) {
            this.__$SimpleFunctionType = 97;
        }
        return this.__$SimpleFunctionType;
    }

    private static __$NullReference : number;
    static get NullReference() : number { 
        if (this.__$NullReference===undefined) {
            this.__$NullReference = 99;
        }
        return this.__$NullReference;
    }

    private static __$ClassReference : number;
    static get ClassReference() : number { 
        if (this.__$ClassReference===undefined) {
            this.__$ClassReference = 100;
        }
        return this.__$ClassReference;
    }

    private static __$MemberReference : number;
    static get MemberReference() : number { 
        if (this.__$MemberReference===undefined) {
            this.__$MemberReference = 101;
        }
        return this.__$MemberReference;
    }

    private static __$VectorCreation : number;
    static get VectorCreation() : number { 
        if (this.__$VectorCreation===undefined) {
            this.__$VectorCreation = 102;
        }
        return this.__$VectorCreation;
    }

    private static __$VectorGet : number;
    static get VectorGet() : number { 
        if (this.__$VectorGet===undefined) {
            this.__$VectorGet = 103;
        }
        return this.__$VectorGet;
    }

    private static __$VectorSet : number;
    static get VectorSet() : number { 
        if (this.__$VectorSet===undefined) {
            this.__$VectorSet = 104;
        }
        return this.__$VectorSet;
    }

    private static __$VectorCopy : number;
    static get VectorCopy() : number { 
        if (this.__$VectorCopy===undefined) {
            this.__$VectorCopy = 105;
        }
        return this.__$VectorCopy;
    }

    private static __$ClosureCreation : number;
    static get ClosureCreation() : number { 
        if (this.__$ClosureCreation===undefined) {
            this.__$ClosureCreation = 106;
        }
        return this.__$ClosureCreation;
    }

    private static __$SpecializedTagHighBit : number;
    static get SpecializedTagHighBit() : number { 
        if (this.__$SpecializedTagHighBit===undefined) {
            this.__$SpecializedTagHighBit = 128;
        }
        return this.__$SpecializedTagHighBit;
    }

    private static __$SpecializedTagMask : number;
    static get SpecializedTagMask() : number { 
        if (this.__$SpecializedTagMask===undefined) {
            this.__$SpecializedTagMask = 248;
        }
        return this.__$SpecializedTagMask;
    }

    private static __$SpecializedPayloadMask : number;
    static get SpecializedPayloadMask() : number { 
        if (this.__$SpecializedPayloadMask===undefined) {
            this.__$SpecializedPayloadMask = 7;
        }
        return this.__$SpecializedPayloadMask;
    }

    private static __$SpecializedVariableGet : number;
    static get SpecializedVariableGet() : number { 
        if (this.__$SpecializedVariableGet===undefined) {
            this.__$SpecializedVariableGet = 128;
        }
        return this.__$SpecializedVariableGet;
    }

    private static __$SpecializedVariableSet : number;
    static get SpecializedVariableSet() : number { 
        if (this.__$SpecializedVariableSet===undefined) {
            this.__$SpecializedVariableSet = 136;
        }
        return this.__$SpecializedVariableSet;
    }

    private static __$SpecializedIntLiteral : number;
    static get SpecializedIntLiteral() : number { 
        if (this.__$SpecializedIntLiteral===undefined) {
            this.__$SpecializedIntLiteral = 144;
        }
        return this.__$SpecializedIntLiteral;
    }

    private static __$SpecializedIntLiteralBias : number;
    static get SpecializedIntLiteralBias() : number { 
        if (this.__$SpecializedIntLiteralBias===undefined) {
            this.__$SpecializedIntLiteralBias = 3;
        }
        return this.__$SpecializedIntLiteralBias;
    }

    private static __$ProgramFile : number;
    static get ProgramFile() : number { 
        if (this.__$ProgramFile===undefined) {
            this.__$ProgramFile = 2427178479;
        }
        return this.__$ProgramFile;
    }

    constructor() {
    }
    @defaultConstructor
    Tag() {
    }
}

export class properties {
}
