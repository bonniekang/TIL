// 일곱 난쟁이 : 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.

function solution(arr){
    let answer = arr;
    let sum = answer.reduce((a, b)=> a+b, 0)

    for(let i =0; i < arr.length-1; i++){
        for(let j = i+1; j < arr.length; j++){
            if((sum - (answer[i] + answer[j])) === 100) {
                /* 나의 오답풀이
                answer.splice(i,1)
                answer.splice(j,1)
                */
               // i 부터 뺄 경우 인덱스 순서에 영향
               answer.splice(j, 1);
               answer.splice(i, 1);
            }
        }
    }
    return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr))