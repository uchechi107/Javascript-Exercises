//  QUESTION 16
let character = 'A';
if(character  =  'A'){
    console.log('UpperCase letter')
}
else if(character = 'a'){
    console.log('LowerCase Letter')
}
else{
    console.log('Neither')}

    //QUESTION 17
    let age = 25;
    let hasLicense = 'true';
    if(age >= 18 && hasLicense) {
        console.log('can drive');
    }
    else{
        console.log('cannot drive');}

    //QUESTION 18
    let totalAmount = 1000;
    let isMember ='true';
    let discount1 = 0.2 * 1000;
    let discount2 = 0.05 * 1000;
    let finalAmount1 = totalAmount - discount1
    let finalAmount2 = totalAmount - discount2
    
if(isMember && discount1) {
    console.log(finalAmount1);
}
else{console.log(finalAmount2)}

//  QUESTION 19
let number = 15;
for(let i =1; i<=15; i++) 
    if(i % 3 == 0){
        console.log(i)
    }

    //  QUESTION 20
    let hour = 14;
    if(hour >= 5 && hour <=11){
        console.log('Good morning');
    }
    else if (hour >=12 && hour <=17){
        console.log('Good Afternoon');
    }
    else if(hour >= 18 && hour <=21){
        console.log('Good Evening');
    }
    else{console.log('Good Evening')}

