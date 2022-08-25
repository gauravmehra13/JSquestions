//Add 2 Numbers

const AddTwoNumbers = (a,b) => {
    return a+b;
};

//conditions are obeyed or not


const Is_Valid = (a,b) => {
  
    return ((a<10)&&(a>b))
    
    
  };


  //Check the conditons


  const Check = (A,B) => 


  {
    if (A%10==0) && (B%10==0)
 
    {   return true  }
 
    else if (A%10!=0) && (B%10!=0)

  {return false}

if( )

}
  
  ;



//Find the first digit of a 4 digit number


const First_Digit = (n) => {
   
  let lastdig=n%10;
  FirstDigit=(n-lastdig)/1000; 
  
 
  return (parseInt(FirstDigit));
};


//Find the last digit of a 4 digit number



const Last_Digit = (n) => {
    
    
  let Last_Digit=n%10;
  return (Last_Digit);
};


//Find the remainder


const Find_the_remainder = (a,b) => {
    
    
  return (b%a);
  
};


//Multipy two Numbers


const Multiply_two_number = (a,b) => {
    
  return a*b;
};


//Marks Calculator



const Sum = (A, B, C) => 
{
 return A+B+C
};

const Average = (A, B, C) => 
{
 return ((A+B+C)/3);
};







