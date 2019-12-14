/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/linter/linter_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(LinterRuleOptionsValidatorTest);
    });
};
export namespace LinterRuleOptionsValidatorTest {
    export type Constructors = 'LinterRuleOptionsValidatorTest';
    export type Interface = Omit<LinterRuleOptionsValidatorTest, Constructors>;
}
@DartClass
export class LinterRuleOptionsValidatorTest {
    validator : any;

    optionsProvider : any;

    recorder : any;

    reporter : any;

    get errors() : core.DartList<any> {
        return this.recorder.errors;
    }
    setUp() {
        registerLintRules();
        this.recorder = new bare.createInstance(any,null);
        this.reporter = new bare.createInstance(any,null,this.recorder,new _TestSource());
    }
    test_linter_defined_rules() {
        this.validate('linter:\n  rules:\n    - camel_case_types\n    ',new core.DartList.literal());
    }
    test_linter_no_rules() {
        this.validate('linter:\n  rules:\n    ',new core.DartList.literal());
    }
    test_linter_null_rule() {
        this.validate('linter:\n  rules:\n    -\n\n    ',new core.DartList.literal());
    }
    test_linter_undefined_rule() {
        this.validate('linter:\n  rules:\n    - undefined\n    ',new core.DartList.literal(UNDEFINED_LINT_WARNING));
    }
    validate(source : string,expected : core.DartList<any>) {
        let options = this.optionsProvider.getOptionsFromString(source);
        this.validator.validate(this.reporter,options);
        expect(this.errors.map((e : any) =>  {
            return e.errorCode;
        }),unorderedEquals(expected));
    }
    constructor() {
    }
    @defaultConstructor
    LinterRuleOptionsValidatorTest() {
        this.validator = new bare.createInstance(any,null);
        this.optionsProvider = new bare.createInstance(any,null);
    }
}

export namespace _TestSource {
    export type Constructors = '_TestSource';
    export type Interface = Omit<_TestSource, Constructors>;
}
@DartClass
@Implements(any)
export class _TestSource implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    constructor() {
    }
    @defaultConstructor
    _TestSource() {
    }
}

export class properties {
}
