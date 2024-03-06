/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    
    const n = image.length

    for(let i=0; i<n; i++){
        let left = 0;
        let right = n-1;

        while(left<right){
            [image[i][left],image[i][right]] = [image[i][right],image[i][left]]
            left++;
            right--;
        }

        for(let j=0;j<n;j++){
            image[i][j]=changeToNumber(image[i][j]);
        }

    }

    return image

};

const changeToNumber = (n) =>{
    return n === 1 ? 0 : 1
}