// 교육과정 설계

function solution(need, plan){
    let answer = "YES";
    let queue = need.split('');

    for(let x of plan){
        if(queue.includes(x)){
            if(x !== queue.shift()) return "NO";
        }
    }
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));