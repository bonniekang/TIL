// 버블 정렬

function solution(arr){
    let answer = arr;

    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            // arr.length = 6
            // i=0 -> j = 0,1,2,3,4
            // i=1 -> j = 0,1,2,3

            // 배열의 맨 끝부터 정렬
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }

    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));