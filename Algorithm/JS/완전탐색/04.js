// 졸업 선물
// 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램
// 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 배송비는 할인에 포함되지 않습니다.
// 첫 번째 줄에 선생님이 현재 예산으로 선물할 수 있는 최대 학생수를 출력합니다. 선생님 최소한 1개 이상의 상품을 살 수 있는 예산을 가지고 있습니다.

// 반 학생수 N, 예산 M
// [가격, 배송비]
function solution(m, product){
    let answer = 0;
    //반 학생수
    let n = product.length;
    // 정렬하기!!!
    product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))

    for(let i=0; i < n; i++){
        // 할인받을 상품 빼고 남은 돈 계산!
        let money = m - (product[i][0] / 2 + product[i][1])
        let count = 1; //하나는 삼
        
        for(let j=0; j < n; j++){
            if(i !== j && (product[j][0] + product[j][1]) > money) break;
            if(i !== j && (product[j][0] + product[j][1]) <= money){
                money -= (product[j][0] + product[j][1])
                count++;
            }
        }
        answer = Math.max(answer, count)
    }

    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));