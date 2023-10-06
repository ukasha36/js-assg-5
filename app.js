// Question -- 1
// const a = prompt("Enter a number : ")
// const a1=+a ; 

// document.write(a1);
// document.write(Math.floor(a1));
// document.write(Math.ceil(a1));

// Question -- 2

// const b = prompt("Enter a negative number : ")
// const b1=+a ; 

// document.write(b1);
// document.write(Math.floor(b1));
// document.write(Math.ceil(b1));

// Question -- 3

// const rand = Math.random()*100
// const rand1  = parseInt(rand)
// document.write(" Number between 1 and 100 :  " + rand1);

//  Question -- 4 

const currentdate = new Date();

document.write(currentdate);

//  Question -- 5

// const monthNames = [
//     "January", "February", "March", "April",
//     "May", "June", "July", "August",
//     "September", "October", "November", "December"
// ];
 
// const currentmonth = currentdate.getMonth();

// const currentmonth2 = monthNames[currentmonth]
// document.write(currentmonth2);

//  Question -- 6 
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const currentday = currentdate.getDay() ;
currentday2 = dayNames[currentday];

document.write (currentday2); 

// Question  --- 7
if (currentday2 == "saturday" || currentday2 == "sunday") {
    document.write (" Funday");
}

// Question  --- 8
const age = prompt("Enter your age  : ")
const currentyear =  currentdate.getFullYear();

const cal = currentyear - age; 

document.write(cal);