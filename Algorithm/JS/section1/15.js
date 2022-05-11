// 가운데 문자 출력
// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

function solution(s){
    let answer;

    let mid = Math.floor(s.length / 2);
    if(s.length % 2 === 0){
        answer = s.slice(mid - 1, mid + 1)
    }else{
        answer = s.slice(mid, mid + 1)
    }

    /* 
    substring & substr method 사용하기

    if(s.length%2===1) answer=s.substring(mid, mid+1);
    else answer=s.substring(mid-1, mid+1);

    if(s.length%2===1) answer=s.substr(mid, 1);
    else answer=s.substr(mid-1, 2);

    */
    return answer;
}

let str = 'study'
console.log(solution(str))