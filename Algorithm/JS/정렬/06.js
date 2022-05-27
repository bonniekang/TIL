// 장난꾸러기 현수

function solution(arr){
    let answer = [];
    let newArr = arr.slice();
    newArr.sort((a, b) => a-b)

    for(let i=0; i<arr.length; i++){
        if(arr[i] !== newArr[i]) answer.push(i+1)
    }

    return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));