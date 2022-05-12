// 가위 바위 보
// A, B 두 사람이 N번의 가위바위보 게임 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다. 1:가위, 2:바위, 3:보, 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램 을 작성하세요

function solution(a, b){
    let answer ="";
    for(let i = 0; i < a.length; i++){
        if(a[i] === b[i]) answer += 'D'
        else if(a[i] === 1 && b[i] === 3) answer += 'A'
        else if(a[i] === 2 && b[i] === 1) answer += 'A'
        else if(a[i] === 3 && b[i] === 2) answer += 'A'
        else answer += 'B'
    }
    return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b))
