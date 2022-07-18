//task1
// function min(...temp){

// let min=Infinity;
// for(i=0;i<temp.length;i++){
//    if(temp[i]<min){
//       min=temp[i]
//    }
// }
// console.log(min)

// }
// min(2,5,9,3)

//task2

// function max(num){
// let a=num%10;
// let b=parseInt(num/100)
// if(a>b){
//    console.log(a)
// }
// else if(a<b){
//    console.log(b)
// }
// else if(a=b){
//    console.log(`${a} = ${b}`)
// }}
// max(259)


//task 3

// let a='2552555552552';
// let temp=a.split("")
// let five=0;
// let two=0;


// for(i=0;i<temp.length;i++){
// if(temp[i]==2){
//    two++
// }
// else if(temp[i]==5){
//    five++
// }
// }
// if(two>five){
//    console.log("2")
// }
// if(five>two){
//    console.log("5")
// }
// if(five===two){
//    console.log(`=`)
// }


//task4

// let sntc='Hello world. I learn to code!'
// let count=0;
// for(i=0;i<sntc.length;i++){
//    if(sntc[i]=="."||sntc[i]=="!"){
//       count++
//    }
// }console.log(count)


//task 5

// let num='+5-2+4-m/n*2:4';
// let count=0;
// for(i=0;i<num.length;i++){
//    if(num[i]=="+"||num[i]=="-"||num[i]=="*"){
//       count++
//    }
// }
// console.log(count)

//task6

// let sntc='Hello world! Hello,    country!'
// let count=0;
// let temp=sntc.split(" ");


// temp.push()


// for(i=0;i<temp.length;i++){

//    if(temp[i]!=""){
//       count++
//    }
// }


// console.log(count);


//task 7
// let  cars="kkpkkkpk"
// let temp=cars.split("p");
// let count=0;


// for(i=0;i<temp.length;i++){
//    if(temp[i].length>count){
//       count=temp[i].length

//    }

// }
// console.log(count)

//task 8

// let words="introduction to algorithms"
// let temp=words.split(' ')
// for(i=0;i<temp.length;i++){
//    temp[i]=temp[i][0].toUpperCase() + temp[i].slice(1)
// }

// console.log(temp.join(' '))


//task9
// let s = "This is a cat sitting on a table"
// let c = "t"
// let count=0;

// for(i=0;i<s.length;i++){
//    if(s[i]==c||s[i]==c.toUpperCase()){
//       count++
//    }
// }
// console.log(count)


//task 10

// let sntc='Iasc  ipt.'

// console.log(sntc.indexOf(" "))
// console.log(sntc.lastIndexOf(" "))
