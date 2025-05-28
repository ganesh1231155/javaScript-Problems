// Subsets of a Certain Size
// How many subsets of size 3 can be formed from the set 
// B={1,2,3,4,5}?

// Solution:
// Number of subsets =  n! / r! * (n-r)! 
function factorial(num){
        if(num<0||num>100) throw new Error("Input out of bound.");
                      
        return num===0||num===1? 1 :Array.from({length:num},(_,i)=>i+1)
                                .reduce((acc,n)=>acc*n,1);
    }
function subSets(set,size){
    
    if(set.length<size) return 0;
    const count= factorial(set.length)/(factorial(size)*factorial(set.length-size));
    return count;
}
try{

    const set=[1,2,3,4,5];
    const size=3;
    console.log(subSets(set,size));
}catch(e){
    console.log(e.message);
}