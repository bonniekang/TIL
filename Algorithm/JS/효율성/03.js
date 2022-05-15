// 연속 부분수열 1
// N개의 수로 이루어진 수열
// 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요. 

// 투포인터

function solution(m, arr){
    let answer=0;
    let l =0;
    let sum =0;

    for(let r=0; r < arr.length; r++){
        sum += arr[r]
        if(sum === m) answer++;
        while(sum >= m){
            sum -= arr[l++];
            if(sum === m) answer++;
        }
    }
    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));