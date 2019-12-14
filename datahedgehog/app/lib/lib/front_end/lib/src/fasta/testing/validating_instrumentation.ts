/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/testing/validating_instrumentation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as io from "@dart2ts/dart/io";
import * as convert from "@dart2ts/dart/convert";

export namespace ValidatingInstrumentation {
    export type Constructors = 'ValidatingInstrumentation';
    export type Interface = Omit<ValidatingInstrumentation, Constructors>;
}
@DartClass
@Implements(any)
export class ValidatingInstrumentation implements any.Interface {
    private static __$_ESCAPE_SEQUENCE;
    static get _ESCAPE_SEQUENCE() { 
        if (this.__$_ESCAPE_SEQUENCE===undefined) {
            this.__$_ESCAPE_SEQUENCE = new core.DartRegExp('\\(.)');
        }
        return this.__$_ESCAPE_SEQUENCE;
    }
    static set _ESCAPE_SEQUENCE(__$value : any)  { 
        this.__$_ESCAPE_SEQUENCE = __$value;
    }

    private static __$_FEATURES;
    static get _FEATURES() { 
        if (this.__$_FEATURES===undefined) {
            this.__$_FEATURES = new core.DartMap.literal([
                ['inference',new core.DartList.literal('topType','typeArg','typeArgs','promotedType','type','returnType','target')]]);
        }
        return this.__$_FEATURES;
    }

    _unsatisfiedExpectations;

    _testedFeaturesState;

    _problems;

    _fixes;

    get hasProblems() : boolean {
        return this._problems.isNotEmpty;
    }
    get problemsAsString() : string {
        return this._problems.join('\n');
    }
    finish() : void {
        this._unsatisfiedExpectations.forEach((uri : any,expectationsForUri : any) =>  {
            expectationsForUri.forEach((offset : any,expectationsAtOffset : any) =>  {
                for(let expectation of expectationsAtOffset) {
                    this._problem(uri,offset,`expected ${expectation.property}=${expectation.value}, ` + 'got nothing',new _Fix(expectation.commentOffset,expectation.commentLength,''));
                }
            });
        });
    }
    fixSource(uri : lib3.Uri) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let fixes = op(Op.INDEX,this._fixes,uri);
            if (op(Op.EQUALS,fixes,null)) return;
            let file : io.File = new io.File.fromUri(uri);
            let bytes = (await file.readAsBytes()).toList();
            fixes.sort((a : any,b : any) =>  {
                return b.offset.compareTo(a.offset);
            });
            for(let fix of fixes) {
                bytes.replaceRange(fix.offset,op(Op.PLUS,fix.offset,fix.length),convert.properties.UTF8.encode(fix.replacement));
            }
            await file.writeAsBytes(bytes);
        } )());
    }

    loadExpectations(uri : lib3.Uri) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let bytes = await readBytesFromFile(uri);
            let expectations = this._unsatisfiedExpectations.putIfAbsent(uri,() =>  {
                return new core.DartMap.literal([
                ]);
            });
            let testedFeaturesState = this._testedFeaturesState.putIfAbsent(uri,() =>  {
                return new core.DartMap.literal([
                ]);
            });
            let result : any = scan(bytes,{
                includeComments : true});
            for(let token : any = result.tokens; !token.isEof; token = token.next){
                for(let commentToken : any = token.precedingComments; commentToken != null; commentToken = commentToken.next){
                    let lexeme : string = commentToken.lexeme;
                    if (new core.DartString(lexeme).startsWith('/*@') && new core.DartString(lexeme).endsWith('*/')) {
                        let expectation = new core.DartString(lexeme).substring(3,new core.DartString(lexeme).length - 2);
                        let equals = new core.DartString(expectation).indexOf('=');
                        let property : string;
                        let value : string;
                        if (equals == -1) {
                            property = expectation;
                            value = '';
                        }else {
                            property = new core.DartString(expectation).substring(0,equals);
                            value = new core.DartString(new core.DartString(expectation).substring(equals + 1)).replaceAllMapped(ValidatingInstrumentation._ESCAPE_SEQUENCE,(m : any) =>  {
                                return m.group(1);
                            });
                        }
                        property = new core.DartString(property).trim();
                        value = new core.DartString(value).trim();
                        if (property == 'testedFeatures') {
                            let state : core.DartSet<string> = new core.DartSet<string>();
                            for(let feature of new core.DartString(value).split(',')) {
                                feature = new core.DartString(feature).trim();
                                state.addAll((op(Op.INDEX,ValidatingInstrumentation._FEATURES,feature) || new core.DartList.literal(feature)));
                            }
                            op(Op.INDEX_ASSIGN,testedFeaturesState,commentToken.offset,state);
                        }else {
                            let offset = token.charOffset;
                            let expectationsAtOffset = expectations.putIfAbsent(offset,() =>  {
                                return new core.DartList.literal();
                            });
                            expectationsAtOffset.add(new _Expectation(property,value,commentToken.offset,commentToken.length));
                        }
                    }
                }
            }
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    record(uri : lib3.Uri,offset : number,property : string,value : any) : void {
        let expectationsForUri = op(Op.INDEX,this._unsatisfiedExpectations,uri);
        if (op(Op.EQUALS,expectationsForUri,null)) return;
        let expectationsAtOffset = op(Op.INDEX,expectationsForUri,offset);
        if (expectationsAtOffset != null) {
            for(let i : number = 0; i < expectationsAtOffset.length; i++){
                let expectation = op(Op.INDEX,expectationsAtOffset,i);
                if (op(Op.EQUALS,expectation.property,property)) {
                    if (!value.matches(expectation.value)) {
                        this._problemWithStack(uri,offset,`expected ${property}=${expectation.value}, got ` + `${property}=${value.toString()}`,new _Fix(expectation.commentOffset,expectation.commentLength,this._makeExpectationComment(property,value)));
                    }
                    expectationsAtOffset.removeAt(i);
                    return;
                }
            }
        }
        if (this._shouldCheck(property,uri,offset)) {
            this._problemWithStack(uri,offset,`expected nothing, got ${property}=${value.toString()}`,new _Fix(offset,0,this._makeExpectationComment(property,value)));
        }
    }
    _escape(s : string) : string {
        s = new core.DartString(s).replaceAll('\','\\');
        if (new core.DartString(s).endsWith('/')) {
            s = `${s} `;
        }
        return new core.DartString(new core.DartString(s).replaceAll('/*','/\*')).replaceAll('*/','*\/');
    }
    _formatProblem(uri : lib3.Uri,offset : number,desc : string,stackTrace : core.DartStackTrace) : string {
        return format(uri,offset,`${desc}${op(Op.EQUALS,stackTrace,null) ? '' : `\n${stackTrace}`}`);
    }
    _makeExpectationComment(property : string,value : any) : string {
        return `/*@${property}=${this._escape(value.toString())}*/`;
    }
    _problem(uri : lib3.Uri,offset : number,desc : string,fix : _Fix) : void {
        this._problems.add(this._formatProblem(uri,offset,desc,null));
        this._fixes.putIfAbsent(uri,() =>  {
            return new core.DartList.literal();
        }).add(fix);
    }
    _problemWithStack(uri : lib3.Uri,offset : number,desc : string,fix : _Fix) : void {
        this._problems.add(this._formatProblem(uri,offset,desc,core.DartStackTrace.current));
        this._fixes.putIfAbsent(uri,() =>  {
            return new core.DartList.literal();
        }).add(fix);
    }
    _shouldCheck(property : string,uri : lib3.Uri,offset : number) : boolean {
        let state = false;
        let testedFeaturesStateForUri = op(Op.INDEX,this._testedFeaturesState,uri);
        if (op(Op.EQUALS,testedFeaturesStateForUri,null)) return false;
        for(let i of testedFeaturesStateForUri.keys) {
            if (i > offset) break;
            let testedFeaturesStateAtOffset = op(Op.INDEX,testedFeaturesStateForUri,i);
            state = testedFeaturesStateAtOffset.contains(property);
        }
        return state;
    }
    constructor() {
    }
    @defaultConstructor
    ValidatingInstrumentation() {
        this._unsatisfiedExpectations = new core.DartMap.literal([
        ]);
        this._testedFeaturesState = new core.DartMap.literal([
        ]);
        this._problems = new core.DartList.literal<string>();
        this._fixes = new core.DartMap.literal([
        ]);
    }
}

export namespace _Expectation {
    export type Constructors = '_Expectation';
    export type Interface = Omit<_Expectation, Constructors>;
}
@DartClass
export class _Expectation {
    property : string;

    value : string;

    commentOffset : number;

    commentLength : number;

    constructor(property : string,value : string,commentOffset : number,commentLength : number) {
    }
    @defaultConstructor
    _Expectation(property : string,value : string,commentOffset : number,commentLength : number) {
        this.property = property;
        this.value = value;
        this.commentOffset = commentOffset;
        this.commentLength = commentLength;
    }
}

export namespace _Fix {
    export type Constructors = '_Fix';
    export type Interface = Omit<_Fix, Constructors>;
}
@DartClass
export class _Fix {
    offset : number;

    length : number;

    replacement : string;

    constructor(offset : number,length : number,replacement : string) {
    }
    @defaultConstructor
    _Fix(offset : number,length : number,replacement : string) {
        this.offset = offset;
        this.length = length;
        this.replacement = replacement;
    }
}

export class properties {
}
