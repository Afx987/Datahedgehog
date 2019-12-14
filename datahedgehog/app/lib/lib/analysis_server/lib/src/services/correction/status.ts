/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/status.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace RefactoringStatus {
    export type Constructors = 'RefactoringStatus';
    export type Interface = Omit<RefactoringStatus, Constructors>;
}
@DartClass
export class RefactoringStatus {
    _severity : any;

    problems : core.DartList<any>;

    constructor() {
    }
    @defaultConstructor
    RefactoringStatus() {
        this._severity = null;
        this.problems = new core.DartList.literal();
    }
    @namedFactory
    static $error(msg : string,location? : any) : RefactoringStatus {
        let status : RefactoringStatus = new RefactoringStatus();
        status.addError(msg,location);
        return status;
    }
    static error : new(msg : string,location : any) => RefactoringStatus;

    @namedFactory
    static $fatal(msg : string,location? : any) : RefactoringStatus {
        let status : RefactoringStatus = new RefactoringStatus();
        status.addFatalError(msg,location);
        return status;
    }
    static fatal : new(msg : string,location : any) => RefactoringStatus;

    @namedFactory
    static $warning(msg : string,location? : any) : RefactoringStatus {
        let status : RefactoringStatus = new RefactoringStatus();
        status.addWarning(msg,location);
        return status;
    }
    static warning : new(msg : string,location : any) => RefactoringStatus;

    get hasError() : boolean {
        return op(Op.EQUALS,this._severity,RefactoringProblemSeverity.FATAL) || op(Op.EQUALS,this._severity,RefactoringProblemSeverity.ERROR);
    }
    get hasFatalError() : boolean {
        return op(Op.EQUALS,this._severity,RefactoringProblemSeverity.FATAL);
    }
    get hasWarning() : boolean {
        return op(Op.EQUALS,this._severity,RefactoringProblemSeverity.WARNING);
    }
    get isOK() : boolean {
        return op(Op.EQUALS,this._severity,null);
    }
    get message() : string {
        let problem : any = this.problem;
        if (op(Op.EQUALS,problem,null)) {
            return null;
        }
        return problem.message;
    }
    get problem() : any {
        for(let problem of this.problems) {
            if (op(Op.EQUALS,problem.severity,this._severity)) {
                return problem;
            }
        }
        return null;
    }
    get severity() : any {
        return this._severity;
    }
    addError(msg : string,location? : any) : void {
        this._addProblem(new bare.createInstance(any,null,RefactoringProblemSeverity.ERROR,msg,{
            location : location}));
    }
    addFatalError(msg : string,location? : any) : void {
        this._addProblem(new bare.createInstance(any,null,RefactoringProblemSeverity.FATAL,msg,{
            location : location}));
    }
    addStatus(other : RefactoringStatus) : void {
        if (op(Op.EQUALS,other,null)) {
            return;
        }
        this.problems.addAll(other.problems);
        this._severity = RefactoringProblemSeverity.max(this._severity,other.severity);
    }
    addWarning(msg : string,location? : any) : void {
        this._addProblem(new bare.createInstance(any,null,RefactoringProblemSeverity.WARNING,msg,{
            location : location}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        sb.write("<");
        if (op(Op.EQUALS,this._severity,null)) {
            sb.write('OK');
        }else {
            sb.write(this._severity.name);
        }
        if (!this.isOK) {
            sb.write("\n");
            for(let problem of this.problems) {
                sb.write("	");
                sb.write(problem);
                sb.write("\n");
            }
        }
        sb.write(">");
        return sb.toString();
    }
    _addProblem(problem : any) : void {
        this.problems.add(problem);
        let severity : any = problem.severity;
        this._severity = RefactoringProblemSeverity.max(this._severity,severity);
    }
}

export class properties {
}
