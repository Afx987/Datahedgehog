/** Library asset:datahedgehog_monitor/lib/lib/gestures/lsq_solver.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as math from "@dart2ts/dart/math";

export namespace _Vector {
    export type Constructors = '_Vector' | 'fromVOL';
    export type Interface = Omit<_Vector, Constructors>;
}
@DartClass
export class _Vector {
    constructor(size : number) {
    }
    @defaultConstructor
    _Vector(size : number) {
        this._offset = 0;
        this._length = size;
        this._elements = typed_data.Float64List(size);
    }
    @namedConstructor
    fromVOL(values : core.DartList<double>,offset : number,length : number) {
        this._offset = offset;
        this._length = length;
        this._elements = values;
    }
    static fromVOL : new(values : core.DartList<double>,offset : number,length : number) => _Vector;

    _offset : number;

    _length : number;

    _elements : core.DartList<double>;

    [OperatorMethods.INDEX](i : number) : double {
        return this._elements[i + this._offset];
    }
    [OperatorMethods.INDEX_EQ](i : number,value : double) : void {
        this._elements[i + this._offset] = value;
    }
    [OperatorMethods.MULTIPLY](a : _Vector) : double {
        let result : double = 0.0;
        for(let i : number = 0; i < this._length; i += 1)result += op(Op.INDEX,this,i) * op(Op.INDEX,a,i);
        return result;
    }
    norm() : double {
        return math.sqrt(op(Op.TIMES,this,this));
    }
}

export namespace _Matrix {
    export type Constructors = '_Matrix';
    export type Interface = Omit<_Matrix, Constructors>;
}
@DartClass
export class _Matrix {
    constructor(rows : number,cols : number) {
    }
    @defaultConstructor
    _Matrix(rows : number,cols : number) {
        this._columns = cols;
        this._elements = typed_data.Float64List(rows * cols);
    }
    _columns : number;

    _elements : core.DartList<double>;

    get(row : number,col : number) : double {
        return this._elements[row * this._columns + col];
    }
    set(row : number,col : number,value : double) : void {
        this._elements[row * this._columns + col] = value;
    }
    getRow(row : number) : _Vector {
        return _Vector.fromVOL(this._elements,row * this._columns,this._columns);
    }
}

export namespace PolynomialFit {
    export type Constructors = 'PolynomialFit';
    export type Interface = Omit<PolynomialFit, Constructors>;
}
@DartClass
export class PolynomialFit {
    constructor(degree : number) {
    }
    @defaultConstructor
    PolynomialFit(degree : number) {
        this.coefficients = typed_data.Float64List(degree + 1);
    }
    coefficients : core.DartList<double>;

    confidence : double;

}

export namespace LeastSquaresSolver {
    export type Constructors = 'LeastSquaresSolver';
    export type Interface = Omit<LeastSquaresSolver, Constructors>;
}
@DartClass
export class LeastSquaresSolver {
    constructor(x : core.DartList<double>,y : core.DartList<double>,w : core.DartList<double>) {
    }
    @defaultConstructor
    LeastSquaresSolver(x : core.DartList<double>,y : core.DartList<double>,w : core.DartList<double>) {
        this.assert = assert;
        this.x = x;
        this.y = y;
        this.w = w;
    }
     : any;

     : any;

     : any;

     : any;

    x : core.DartList<double>;

    y : core.DartList<double>;

    w : core.DartList<double>;

    solve(degree : number) : PolynomialFit {
        if (degree > this.x.length) return null;
        let result : PolynomialFit = PolynomialFit(degree);
        let m : number = this.x.length;
        let n : number = degree + 1;
        let a : _Matrix = _Matrix(n,m);
        for(let h : number = 0; h < m; h += 1){
            a.set(0,h,this.w[h]);
            for(let i : number = 1; i < n; i += 1)a.set(i,h,a.get(i - 1,h) * this.x[h]);
        }
        let q : _Matrix = _Matrix(n,m);
        let r : _Matrix = _Matrix(n,n);
        for(let j : number = 0; j < n; j += 1){
            for(let h : number = 0; h < m; h += 1)q.set(j,h,a.get(j,h));
            for(let i : number = 0; i < j; i += 1){
                let dot : double = op(Op.TIMES,q.getRow(j),q.getRow(i));
                for(let h : number = 0; h < m; h += 1)q.set(j,h,q.get(j,h) - dot * q.get(i,h));
            }
            let norm : double = q.getRow(j).norm();
            if (norm < 0.000001) {
                return null;
            }
            let inverseNorm : double = 1.0 / norm;
            for(let h : number = 0; h < m; h += 1)q.set(j,h,q.get(j,h) * inverseNorm);
            for(let i : number = 0; i < n; i += 1)r.set(j,i,i < j ? 0.0 : op(Op.TIMES,q.getRow(j),a.getRow(i)));
        }
        let wy : _Vector = _Vector(m);
        for(let h : number = 0; h < m; h += 1)op(Op.INDEX_ASSIGN,wy,h,this.y[h] * this.w[h]);
        for(let i : number = n - 1; i >= 0; i -= 1){
            result.coefficients[i] = op(Op.TIMES,q.getRow(i),wy);
            for(let j : number = n - 1; j > i; j -= 1)result.coefficients[i] -= r.get(i,j) * result.coefficients[j];
            result.coefficients[i] /= r.get(i,i);
        }
        let yMean : double = 0.0;
        for(let h : number = 0; h < m; h += 1)yMean += this.y[h];
        yMean /= m;
        let sumSquaredError : double = 0.0;
        let sumSquaredTotal : double = 0.0;
        for(let h : number = 0; h < m; h += 1){
            let term : double = 1.0;
            let err : double = this.y[h] - result.coefficients[0];
            for(let i : number = 1; i < n; i += 1){
                term *= this.x[h];
                err -= term * result.coefficients[i];
            }
            sumSquaredError += this.w[h] * this.w[h] * err * err;
            let v : double = this.y[h] - yMean;
            sumSquaredTotal += this.w[h] * this.w[h] * v * v;
        }
        result.confidence = sumSquaredTotal <= 0.000001 ? 1.0 : 1.0 - (sumSquaredError / sumSquaredTotal);
        return result;
    }
}

export class properties {
}
