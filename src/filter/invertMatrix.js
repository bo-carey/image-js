'use strict';


// this code gives the same result as invert()
// but is based on a matrix of pixels
// may be easier to implement some algorithm
// but it will likely be much slower

// this method is 50 times SLOWER than invert !!!!!!

export default function invertMatrix() {
    this.checkProcessable("invert",{
        bitDepth:[8,16]
    });
    let matrix=this.getMatrix();
    for (let i=0; i<matrix.length; i++) {
        let row=matrix[i];
        for (let j=0; j<row.length; j++) {
            var pixel=row[j];
            for (let k=0; k<this.components; k++) {
                pixel[k] = this.maxValue - pixel[k];
            }
        }
    }
    this.setMatrix(matrix);
};