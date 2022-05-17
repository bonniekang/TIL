// 아나그램(해쉬)
// 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세 요. 아나그램 판별시 대소문자가 구분됩니다.

function solution(s1, s2){
    let answer="YES"; 
    let hash = new Map();

    for(let x of s1){
        if(hash.has(x)) hash.set(x, hash.get(x) + 1)
        else hash.set(x, 1)
    }

    for(let x of s2){
        if(!hash.has(x) || hash.get(x) === 0) return "NO";
        hash.set(x, hash.get(x) -1)
    }
    return answer;
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));