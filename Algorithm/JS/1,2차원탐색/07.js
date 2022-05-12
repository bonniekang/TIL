// 봉우리
// 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역, 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성, 격자의 가장자리는 0으로 초기화 되었다고 가정

function solution(arr){
    let answer=0;
    let n = arr.length;
    //상하좌우
    let dx = [-1 , 0, 1, 0];
    let dy = [0, 1, 0, -1];

    for(let i =0; i < n; i++){
        for(let j =0; j < n; j++){
            for(let k = 0; k < 4; k++){
                if(arr[i][j] > arr[i + dx[k]][j+ dy[k]]){
                    
                }
            }
        }
    }
    return answer;
}

let arr=[[5, 3, 7, 2, 3], 
        [3, 7, 1, 6, 1],
        [7, 2, 5, 3, 4],
        [4, 3, 6, 4, 1],
        [8, 7, 3, 5, 2]];
console.log(solution(arr));