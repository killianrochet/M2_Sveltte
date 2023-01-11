
export let inputProduct = 0

export function getProduct(product, userSegmentation){
    inputProduct += 1;
    for(let key in product.segmentation){
        if(userSegmentation[key]){
            if(inputProduct != 0){
                userSegmentation[key] = (userSegmentation[key] / inputProduct) * (inputProduct - 1) + product.segmentation[key] / inputProduct
            }
            else{
                userSegmentation[key] += product.segmentation[key];
            }
        }else{
            userSegmentation[key] = product.segmentation[key];
        }
    }
    localStorage.setItem("Segmentation" , JSON.stringify(userSegmentation));
    console.log(userSegmentation);
}

