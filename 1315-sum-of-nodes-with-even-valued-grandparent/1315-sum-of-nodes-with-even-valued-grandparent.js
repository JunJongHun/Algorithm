/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
    
    const queue = []
    let sum = 0;
  

    queue.push([root,null,null])


    while(queue.length > 0){
        const [cur,p,pp] = queue.shift()

        if(pp && pp.val%2===0) sum+=cur.val

        if(cur.left){
            queue.push([cur.left,cur,p])
        }
        if(cur.right){
            queue.push([cur.right,cur,p])
        }
    }

  

    return sum


};