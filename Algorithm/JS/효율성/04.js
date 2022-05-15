// 연속 부분수열 2
// N개의 수로 이루어진 수열
// 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그 램을 작성하세요.

//투포인터

function solution(m, arr){
    let answer = 0;
    let sum = 0;
    let l = 0;

    for(let r=0; r < arr.length; r++){
        sum += arr[r];
        while(sum > m){
            sum -= arr[l++]
        }
        // sum = 1, r=0, l=0 -> 1(1)
        // sum = 1+3, r=1, l=0 -> 2((3), (1,3))
        // sum = 1+3+1, r=2, l=0 -> 3((1), (3, 1), (1, 3, 1))
        // sum = 1+2, r=3, l=2 -> 2((2), (1,2))
        // sum = 2+3, r=4, l=3 -> 2((3),(2,3))
        answer += (r - l + 1)
    }
    return answer;
}


let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));