let arr1:number[]=[1,2,3,4,5,6,7,8];
arr1.push(11);
console.log(arr1);

let arr2:string[]=[];
arr2[0]="rahul";
arr2[1]="rahul";
arr2[2]="rahul";
arr2[3]="rahul";
console.log(arr2);
arr2.forEach((i)=>console.log(i));

//mixed array
// let arr3:(number|string)[]=[1,,3,4,5,"abs","dvx"];
// arr3.push(true);

//make readonly array
let arr4: readonly number[] =[1,2,5,3,4];
//arr4.push(9) not allow due to readonly Array 

let assignmentArray:number[]=[1,2,3,5,6,7];
// output
arr4.forEach((i)=>console.log(i));
