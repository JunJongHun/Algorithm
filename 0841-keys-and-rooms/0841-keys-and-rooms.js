/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {

    const visited = new Array(rooms.length).fill(false)

    function dfs(key,rooms){
        
        if(visited[key]===true) return;

        visited[key] = true;

        for(let k of rooms[key]){
            dfs(k,rooms)
        }

    }

    dfs(0,rooms)

    return visited.every(v=>v===true)
};