// 10. Pair Sum Divisible by K
// Problem:
// Count the number of pairs whose sum is divisible by k.

// Example:
// Input: arr = [2, 2, 1, 7, 5, 3], k = 4  
// Output: 5

// twoSum(nums,k) will only return the count
function twoSum(nums,k){
    let count=0;
    const remainder=new Array(nums.length).fill(0);
    for(let num of nums){
        let rem=num%k;
        remainder[rem]++;
    }

    count+=(remainder[0]*(remainder[0]-1))/2;

    for(let i=1;i<=k/2;i++){
        if(i!=k-i){
            count+=remainder[i]*remainder[k-i];
        }
    }
    if(k%2==0){
        count+=(remainder[k/2]*(remainder[k/2]-1))/2;
    }
    return count;
}

// TwoSum(nums,k) will return the count as well as pairs.
function TwoSum(nums,k){
    let count=0;
    const map=new Map();
    for(let num of nums){
        let rem=num%k;
        if(!map.has(rem)){
            map.set(rem,[]);
        }
        map.get(rem).push(num);
    }
     if(map.has(0))
     {
        const list=map.get(0);
        printPairs(list,count);
     }

     for(let i=1;i<=k/2;i++){
        if(i!=k-i){
            const list1=map.get(i)||[];
            const list2=map.get(k-i)||[];
            for(let a of list1){
                for(let b of list2){
                    console.log("[ "+a+" , "+b+" ]");
                    count++;
                }
            }
        }
     }

     if(k%2==0&&map.has(k/2)){
        const list=map.get(k/2);
        printPairs(list,count);
     }
    return count;
}
function printPairs(list,count){
    for(let i=0;i<list.length;i++){
        for(let j=i+1;j<list.length;j++){
            console.log("[ "+list[i]+" , "+list[j]+" ]");
            count++;
        }
    }
}

const nums= [2, 2, 1, 7, 5, 3,4,8,4];
const k=4;
console.log(twoSum(nums,k));
console.log(TwoSum(nums,k));