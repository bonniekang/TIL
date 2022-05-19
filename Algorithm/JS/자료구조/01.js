// 올바른 괄호
// 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.

function solution(s){
    let answer = "YES";
    let stack = [];

    for(let x of s){
        if(x === '(') stack.push(x);
        else{
            if(stack.length === 0) return "NO";
            stack.pop()
        }
    }
    if(stack.length > 0) return "NO";
    return answer;
}

let a="(()(()))(()";
console.log(solution(a));