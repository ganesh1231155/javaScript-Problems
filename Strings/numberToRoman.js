// Integer to Roman
// Seven different symbols represent Roman numerals with the following values:
// Symbol	Value
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000
// Roman numerals are formed by appending the conversions 
// of decimal place values from highest to lowest.

// For example, the Roman numeral for
// Input: num = 3749
// Output: "MMMDCCXLIX"

// Explanation:
// 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
//  700 = DCC as 500 (D) + 100 (C) + 100 (C)
//   40 = XL as 10 (X) less of 50 (L)
//    9 = IX as 1 (I) less of 10 (X)

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const val=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const roman=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let op="";
    for(let i=0;val.length;i++){
        if(num==0){
            break;
        }
        while(num>=val[i]){
            op=`${op}${roman[i]}`;
            num-=val[i];
        }
    }
    return op;
};