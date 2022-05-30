// 결혼식

function solution(times){
    let answer = Number.MIN_SAFE_INTEGER;
    let T_line = [];

    for(let x of times){
        T_line.push([x[0], 'start']);
        T_line.push([x[1], 'end']);
    }

    T_line.sort((a, b) => {
        console.log(a[1].charCodeAt(), b[1].charCodeAt())
        if(a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt()
        else return a[0] - b[0]
    })
    let count = 0;
    for(let x of T_line){
        if(x[1] === 's') count++;
        else count--;
        answer = Math.max(answer, count);
    }
    return answer;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));