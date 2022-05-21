// 후위식 연산(postfix)
// 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.

function solution(s){
    let answer;
    let stack = [];

    for(let x of s){
        if(!isNaN(x)) stack.push(Number(x))
        else{
            let right = stack.pop();
            let left = stack.pop();
            if(x === '+') stack.push(left + right);
            else if(x === '-') stack.push(left - right);
            else if(x === '*') stack.push(left * right);
            else if(x === '/') stack.push(left / right);
        }
    }
    answer = stack[0];
    return answer;
}

let str="352+*9-";
console.log(solution(str));