// 삽입 정렬

function solution(arr){
    let answer=arr;
    for(let i=0; i<arr.length; i++){
        let temp = arr[i];
        let j;
        // ex) i=4, j=3,2,1,0
        // ex) arr[3], arr[2], arr[1], arr[0] > temp(arr[4]) check!
        for(j=i-1; j >= 0; j--){
            if(arr[j]> temp) arr[j+1] = arr[j]
            else break;
        }
        console.log(j) // -1 -1 -1 0 2 2
        arr[j+1] = temp
    }
    return answer;
}
// 5, 6, 7, 11, 10, 9 -> 

let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));