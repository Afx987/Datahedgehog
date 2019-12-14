/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/error_suppression_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test_case";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ErrorSuppressionTest);
    });
};
export namespace ErrorSuppressionTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'ErrorSuppressionTest';
    export type Interface = Omit<ErrorSuppressionTest, Constructors>;
}
@DartClass
export class ErrorSuppressionTest extends lib3.ResolverTestCase {
    test_error_code_mismatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('// ignore: const_initialized_with_non_constant_value\nint x = \'\';\nconst y = x; //CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT,CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE));
        } )());
    }

    test_ignore_first() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('// ignore: invalid_assignment\nint x = \'\';\n// ... but no ignore here ...\nconst y = x; //CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE));
        } )());
    }

    test_ignore_first_trailing() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int x = \'\'; // ignore: invalid_assignment\n// ... but no ignore here ...\nconst y = x; //CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE));
        } )());
    }

    test_ignore_only_trailing() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int x = \'\'; // ignore: invalid_assignment\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal());
        } )());
    }

    test_ignore_second() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('//INVALID_ASSIGNMENT\nint x = \'\';\n// ignore: const_initialized_with_non_constant_value\nconst y = x; //CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_ignore_second_trailing() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('//INVALID_ASSIGNMENT\nint x = \'\';\nconst y = x; // ignore: const_initialized_with_non_constant_value\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_ignore_upper_case() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int x = \'\'; // ignore: INVALID_ASSIGNMENT\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal());
        } )());
    }

    test_invalid_error_code() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('// ignore: right_format_wrong_code\nint x = \'\';\nconst y = x; //CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT,CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE));
        } )());
    }

    test_missing_error_codes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('    int x = 3;\n// ignore:\nconst String y = x; //INVALID_ASSIGNMENT, CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT,CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE));
        } )());
    }

    test_missing_metadata_suffix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('// ignore invalid_assignment\nString y = 3; //INVALID_ASSIGNMENT\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_multiple_comments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int x = \'\'; //This is the first comment...\n// ignore: const_initialized_with_non_constant_value\nconst y = x; //CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_multiple_ignores() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int x = 3;\n// ignore: invalid_assignment, const_initialized_with_non_constant_value\nconst String y = x; //INVALID_ASSIGNMENT, CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal());
        } )());
    }

    test_multiple_ignores_traling() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int x = 3;\nconst String y = x; // ignore: invalid_assignment, const_initialized_with_non_constant_value\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal());
        } )());
    }

    test_multiple_ignores_whitespace_variant_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int x = 3;\n//ignore:invalid_assignment,const_initialized_with_non_constant_value\nconst String y = x; //INVALID_ASSIGNMENT, CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal());
        } )());
    }

    test_multiple_ignores_whitespace_variant_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int x = 3;\n//ignore: invalid_assignment,const_initialized_with_non_constant_value\nconst String y = x; //INVALID_ASSIGNMENT, CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal());
        } )());
    }

    test_multiple_ignores_whitespace_variant_3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int x = 3;\n// ignore: invalid_assignment,const_initialized_with_non_constant_value\nconst String y = x; //INVALID_ASSIGNMENT, CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal());
        } )());
    }

    test_no_ignores() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int x = \'\';  //INVALID_ASSIGNMENT\nconst y = x; //CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT,CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE));
        } )());
    }

    test_ignore_for_file() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int x = \'\';  //INVALID_ASSIGNMENT\nconst y = x; //CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE\n// ignore_for_file: invalid_assignment\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE));
        } )());
    }

    test_multiple_ignore_for_files() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int x = \'\';  //INVALID_ASSIGNMENT\nconst y = x; //CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE\n// ignore_for_file: invalid_assignment,const_initialized_with_non_constant_value\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal());
        } )());
    }

    test_ignore_for_file_whitespace_variant() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('//ignore_for_file:   const_initialized_with_non_constant_value , invalid_assignment\nint x = \'\';  //INVALID_ASSIGNMENT\nconst y = x; //CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal());
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ErrorSuppressionTest() {
    }
}

export class properties {
}
