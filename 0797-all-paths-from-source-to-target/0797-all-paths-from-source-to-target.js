/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    
    const answer = []

    function dfs(now,d,visited){

        if(visited[now] === true){
            return
        }

        visited[now] = true
        d.push(now)
        
        if(now === graph.length-1){
            answer.push([...d])
            return
        }

        

        for(let v of graph[now]){
            if(visited[v]===false){
                dfs(v,d,visited)
                visited[v] = false
                d.pop()
            }
       
        }

    }

    dfs(0,[],new Array(graph.length).fill(false))

    return answer
};