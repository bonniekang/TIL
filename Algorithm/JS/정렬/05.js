// Least Recently Used(카카오 캐시 문제 변형)

function solution(size, arr){
    let answer = Array.from({length: size}, () => 0);
    // size = 5, answer = [0,0,0,0,0]
    // arr=[1, 2, 3, 2, 6, 2, 3, 5, 7]

    arr.forEach(x => {
        let pos = -1;
        for(let i=0; i<size.length; i++){
            if(x === answer[i]) pos =i;
        }
        if(pos === -1){
            for(let i=size-1; i >= 1; i--){
                answer[i] = answer[i-1];
            }
        }
        else{
            for(let i=pos; i >= 1; i--){
                answer[i] = answer[i-1];
            }
        }
        answer[0] = x;
    })

    return answer;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));