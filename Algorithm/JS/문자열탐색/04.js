// 가장 짧은 문자거리
// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.

function solution(s, t){
    let answer = [];
    let count = 0;
    for(let i=0; i < s.length; i++){
        if(s[i] !== t){
            count++;
            answer.push(count)
        }else{
            count = 0;
            answer.push(count)
        }
    }
    count = 0;
    for(let i=s.length - 1; i >= 0; i--){
        if(s[i] !== t){
            count++;
            answer[i] = Math.min(answer[i], count)
        }else{
            count = 0;
            answer[i] = count;
        }
    }
    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));