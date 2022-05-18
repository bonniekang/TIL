// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)

// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하 세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
function compareMaps(m1, m2){
    if(m1.size !== m2.size) return false;
    for(let [key, val] of m1){
        if(!m2.has(key) || m2.get(key) !== val) return false;
    }
    return true;
}

function solution(s, t){
    let answer=0;
    let tHash = new Map();
    let sHash = new Map();

    for(let x of t){
        if(tHash.has(x)) tHash.set(x, tHash.get(x) + 1)
        else tHash.set(x, 1);
    }

    let len = t.length - 1; 

    for(let i=0; i<len; i++){
        if(sHash.has(s[i])) sHash.set(s[i], sHash.get(s[i]) +1)
        else sHash.set(s[i], 1);
    }

    let left = 0;

    for(let right=len; right < s.length; right++){
        if(sHash.has(s[right])) sHash.set(s[right], sHash.get(s[right])+1)
        else sHash.set(s[right], 1);
        // compareMaps 함수 가져오기!
        if(compareMaps(sHash, tHash)) answer++;
        // 왼쪽 레터 수 하나 제거
        sHash.set(s[left], sHash.get(s[left])-1)
        // 0이면 레터 제거
        if(sHash.get(s[left]) === 0) sHash.delete(s[left])
    }

    return answer;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));