//Calculator



const Calculator = (A, B, C) => 
{
	switch(true)
	{
	  case (A=='+') :{
	     var sum=B+C;
	     return B+C;
      
	}

	     case(A=='-'):{
	     var sub=B-C;
	     return B-C;
	     
	     
	}

	
	     case(A=='*'):{
	     var mult=B*C;
	     return B*C;
	     
	     
	}
	   case(A=='/'):{
	     var div=B/C;
	     return B/C;
	   }
	}
	
    
};

	

//Check whether the conditions are fulfilled or not


const Check_divisibility = (N) => {
    if ((N%6===0) && (N%9===0)){
      return("Divisible by both");
    }
    else{
      return("Not Divisible by both");
    }
  };

    
    //Eligible Voter


    
const isEligible = (a) => {
    
    if (a>18){
      return ("eligible for voting");
    }
    
    else
    
    return ("not eligible for voting");
};

//Find Relation



const findRelation = (x,y) => {
    
    if (x<y)
    {
      return (x +" is smaller than "+ y);
    }
    
    else if (x>y)
    {
      return(x + " is greater than " + y);
    }
    
    else
    {
      return(x +" is equal to " + y);
    }
    
};

//Grades


const findGrades = (a) => {
    switch(true){
      case (41<=a && a<=50):
        return ("A");
        // break;
      case (31<=a && a<=40):
        return ("B");
        // break;
      case (21<=a && a<=30):
        return ("C");
        // break;
      case (11<=a && a<=20):
      return ("D");  
        // break;
      case (a<=10):
        return ("E");
        // break;
      default:
        return ("It is not a valid value");
    }
  };
  


//Get Value



const getValue = (a) => {
    
    if(a=='p' || a=='p'){
      return "PrepBytes";
    }
    
    else if (a=='z' || a=='Z'){
      return "Zenith";
    }
    
    else if (a=='e' || a=='E'){
      return "Expert Coder";
    }
    
    else{
      return "Data Structure";
    }
    
    
};


//Greatest Number




const Max_out_of_three = (A,B,C) => {
    
    if ((A>B)&&(A>C)){
      return A;
      
    }
    
     
    else if ((B>A)&&(B>C)){
      return B;
      
    }
    
   else if ((C>A)&&(C>B)){
      return C;
      
    }
    
    else if((A==B)&&(B==C)){
      return -1;
    }
};





//Second Smallest


const findSndSmallest = (x,y,z) => {
    
    let smallest;
    if ((x<y) && (x>z)|| (x>y) && (x<z))
    return x;
    
    else if ((y<x) && (y>z) || (y>x) && (y<z))
     return y;
     
    else if ((z<x) && (z>y) || (z>x) && (z<y))
     return z;
  };
  




//Obtuse or Acute Triangle



const Triangle_Check = (A,B,C) => {
    
    if ((A>90) | (B>90) | (C>90)){
      return (" obtuse")
    }
        else{
          return ("acute")
        }
    };
    
    