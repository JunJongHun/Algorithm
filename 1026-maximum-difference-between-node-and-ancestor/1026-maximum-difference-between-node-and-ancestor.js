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
var maxAncestorDiff = function(root) {
    
    let max = 0;

    function dfs(curr, parents){

        console.log(curr.val,parents)

        if(curr.left === null && curr.right === null){
            for(let v of parents){
            max = Math.max(max,Math.abs(v-curr.val))    
        }
        }

        for(let v of parents){
            max = Math.max(max,Math.abs(v-curr.val))    
        }

        if(curr.left !== null){
            dfs(curr.left,[...parents,curr.val])
        }
        if(curr.right !== null){
            dfs(curr.right,[...parents,curr.val])
        }

    }

    dfs(root,[])

    return max
};