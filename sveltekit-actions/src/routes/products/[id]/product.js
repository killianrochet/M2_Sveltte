import * as service from '../../connexion/connexion.js';

const allSegmentation = {};

console.log("Segmentation avant modif: ");
console.log(allSegmentation);

export function getInfoProduct(product){
    for(let key in product.segmentation){
        if(allSegmentation[key]){
            allSegmentation[key] += product.segmentation[key];
        }else{
            allSegmentation[key] = product.segmentation[key];
        }
    }
    console.log("Segmentation après modif: ");
    console.log(allSegmentation);
}

