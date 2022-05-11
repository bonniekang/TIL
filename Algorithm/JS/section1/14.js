// 가장 긴 문자열
// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

function solution(arr){
    let answer, max = Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        if(x.length > max){
            max = x.length
            answer = x
        }
    }
    return answer;
}

let arr = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(arr))