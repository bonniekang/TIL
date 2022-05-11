// 중복문자제거
// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요. 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

//indexOf method

function solution(s){
    let answer ='';
    for(let i=0; i<s.length; i++){
        if(s.indexOf(s[i]) === i) answer += s[i]
    }
    return answer;
}

let str = 'ksekkset'
console.log(solution(str))