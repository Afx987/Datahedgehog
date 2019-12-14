/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/lint/options_rule_validator.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace LinterRuleOptionsValidator {
    export type Constructors = 'LinterRuleOptionsValidator';
    export type Interface = Omit<LinterRuleOptionsValidator, Constructors>;
}
@DartClass
export class LinterRuleOptionsValidator extends any {
    private static __$linter;
    static get linter() { 
        if (this.__$linter===undefined) {
            this.__$linter = 'linter';
        }
        return this.__$linter;
    }

    private static __$rulesKey;
    static get rulesKey() { 
        if (this.__$rulesKey===undefined) {
            this.__$rulesKey = 'rules';
        }
        return this.__$rulesKey;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    validate(reporter : any,options : core.DartMap<string,any>) : core.DartList<any> {
        let errors : core.DartList<any> = new core.DartList.literal<any>();
        let node = options.get(LinterRuleOptionsValidator.linter);
        if (is(node, any)) {
            let rules = op(Op.INDEX,node.nodes,LinterRuleOptionsValidator.rulesKey);
            this.validateRules(rules,reporter);
        }
        return errors;
    }
    validateRules(rules : any,reporter : any) {
        if (is(rules, any)) {
            let registeredLints : core.DartIterable<string> = Registry.ruleRegistry.map((r : any) =>  {
                return r.name;
            });
            rules.nodes.forEach((ruleNode : any) =>  {
                let value : core.DartObject = ruleNode.value;
                if (value != null && !registeredLints.contains(value)) {
                    reporter.reportErrorForSpan(properties.UNDEFINED_LINT_WARNING,ruleNode.span,new core.DartList.literal(value));
                }
            });
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LinterRuleOptionsValidator() {
    }
}

export class properties {
    private static __$UNDEFINED_LINT_WARNING : any;
    static get UNDEFINED_LINT_WARNING() : any { 
        if (this.__$UNDEFINED_LINT_WARNING===undefined) {
            this.__$UNDEFINED_LINT_WARNING = new bare.createInstance(any,null,'UNDEFINED_LINT_WARNING',"'{0}' is not a recognized lint rule");
        }
        return this.__$UNDEFINED_LINT_WARNING;
    }
    static set UNDEFINED_LINT_WARNING(__$value : any)  { 
        this.__$UNDEFINED_LINT_WARNING = __$value;
    }

}
