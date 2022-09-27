// Q1 Write the code to access element which is having id as "text"

let el=document.getElementById("text")

//Q2 Write the code to access element which is having tag as "h1"

let ele=document.getElementsByTagName("h1")

//Q3 Write the code to access element which is having class as "box"

let elem=document.getElementsByClassName("box")

//Q4 Change the heading from ""Hello"" to ""Hello World"" using DOM functions"

let h1=document.getElementsByClassName("hello")
h1.innerText="Hello World"
console.log(h1.innerText)

//Q5 Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function change(){    
    let card=document.getElementsByClassName("cards")[0]
    if(cards.style.flexDirection="row"){
        cards.style.flexDirection="column"
    }
    else{
        cards.style.flexDirection="row"
    }


//Q7
let heading=document.getElementById("Heading")
heading.style.color="red"
heading.id="heading"    


//Q8 


replace = function() {
    let h2 = document.getElementsByClassName("hello")[0]
    let btn = document.getElementsByClassName("btn")[1]
    if(h2.innerText == "Hello World"){
        h2.innerText = "Welcome to Elevation academy"
    }
    else{
        h2.innerText = "Hello World"
    }
}

//Q9






//Q10
function dropdown(){
    let drop=document.getElementsById("drop")
    let output=drop.options[drop.selectedIndex].innerText
    document.getElementById("text").value=output
}


//Q11

function check() {             
    let email = document.getElementById("email").value
    let phoneNumber = document.getElementById("phone").value
    let birthYear = document.getElementById("birthYear").value
    
    let arr = email.split("@")
    let domainName = arr[arr.length - 1]
    let year = parseInt(birthYear.slice(0, 4))

    if(domainName != 'prepbytes.com'){
        alert("Email is Invalid")
    }
    if((phoneNumber.substr(0, 2) != '91' || phoneNumber.length != 10)){
        alert("Phone Number is Invalid")
    }
    if(year < 1995){
        alert("Birth Year is Invalid")
    }
}
}