// 격자판 최대합
// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

function solution(arr){
    let answer = Number.MIN_SAFE_INTEGER;
    let sum1 = sum2 = 0;
    for(let i=0; i < arr.length; i++){
        // 0.0 1.1 2.2 3.3 4.4
        // 0.4 1.3 2.2 3.1 4.0
        sum1 += arr[i][i]
        sum2 += arr[i][arr.length - i -1]
    }
    answer = Math.max(sum1, sum2, answer);
    for(let i=0; i < arr.length; i++){
        sum1 = sum2 = 0;
        for(let j = 0; j < arr.length; j++){
            sum1 = arr[i][j]
            sum2 = arr[j][i]
        }
        answer = Math.max(sum1, sum2, answer);
    }
    return answer;
}

let arr=[[10, 13, 10, 12, 15], 
        [12, 39, 30, 23, 11],
        [11, 25, 50, 53, 15],
        [19, 27, 29, 37, 27],
        [19, 13, 30, 13, 19]];
console.log(solution(arr));