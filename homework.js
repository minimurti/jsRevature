
//1.
function fib(n) {// 1 1 2 3 5 8 13
    if(n < 1){
        return 0;
    }
    
    if(n == 1){
        return 1;
    }

    if(n == 2){
        return 1;
    }


    return(fib(n - 1) + fib(n - 2));
}

console.log(`1. FibuNochos at 7 is: ${fib(7)}`);



//2.
function bubbleSort(numArray){
    let i;
    let temp;

    for (i = 0; i < numArray.length; i++) {
      
        if(numArray[i] > numArray[i+1]){
            temp = numArray[i];
            numArray[i] = numArray[i+1];
            numArray[i+1] = temp;
            i = -1;
        }

    }
    return numArray;
}

var outoforder = [5,2,6,4,1];

console.log(`2. Bubble sort of ${outoforder} yeilds ${bubbleSort(outoforder)}`);


//3. 

function reverseStr(someStr){
    let i;
    let output = "";

    for (i = 0; i <= someStr.length; i++) {
            output += someStr.charAt(someStr.length-i);
    }
    return output;

}

var reverseMe = "nadroJ";

console.log(`3. The reverse of ${reverseMe} is ${reverseStr(reverseMe)}.`);


//4.

function factorial(someNum){

    
    if(someNum <= 1){
        return 1;
    }

    if(someNum == 2){
        return 2;
    }

    return someNum*factorial(someNum-1);
}
console.log(`4. 6! =  ${factorial(6)}.`);



//5.
function substring(someStr, length, offset){
    var output = "";

    if(length <= 0 || offset <= 0 || length + offset > someStr.length ){
        alert("Invalid input");
    }

    for (i = offset; i <= (length + offset); i++) {

        output += someStr.charAt(i);
    }

    return output;
}

var instring = "Jordaniel"

console.log(`5. 5 with 2 of Jordaniel =  ${substring(instring,2,5)}.`);


//6.
function isEven(n){
    var quotient = Math.floor(n/2);
    var oTHERquotient = n/2;

    return quotient == oTHERquotient;

}

var instring = "Jordaniel"

console.log(`6. It is ${isEven(2)} that 2 is even`);

console.log(`It is ${isEven(3)} that 3 is even`);


//7.
function isPalindrome(someStr){
    for (i = 0; i <= (someStr.length)/2; i++) {    
        


        if(someStr.charAt(i) != someStr.charAt(someStr.length-i-1)){
            return false;
        }
    }

    return true;
}



var input = "racecar";


console.log(`7. It is ${isPalindrome(input)} that racecar is a palindrome`);

console.log(` It is ${isPalindrome("false")} that "false" is a palindrome`);



//8.

function printShape(shape, height, character){
    let i;
    let j;



    let out = ""


    switch(shape) {
        case "square":
            for(i = 1; i <= height; i++){
                for(j = 1; j <= height; j++){
                    out += character;
                }
                out += "\n";
            }
          break;


        case "triangle":
            for(i = 1; i <= height; i++){
                for(j = 1; j <= i; j++){
                    out += character;
                }
                out += "\n";
            }
        break;


        case "diamond":
           
            height = height/2;
            space = height - 1;  
            out = "";

            for (i = 0; i < height - 1; i++)  
            {  

                for (j = 0;j < space; j++)  
                    out += " ";  
          
                // Print i+1 stars  
                for (j = 0; j <= i; j++)  
                    out += "* ";  
          
                out += "\n";  
                space--;  
            }  
          
            // Repeat again in reverse order  
            space = 0;  
          
            // run loop (parent loop)  
            // till number of rows  
            for (i = height; i > 0; i--)  
            {  
                // loop for initially space,  
                // before star printing  
                for (j = 0; j < space; j++)  
                    out += " ";  
          
                // Print i stars  
                for (j = 0;j < i;j++)  
                    out += "* "; 
          
                out += "\n"; 
                space++;  
            }  
            



        break;


        default:
          // code block
      }


    console.log(out);
}


console.log("8.\n");
printShape("square", 3,"*");
printShape("triangle", 3,"*");
printShape("diamond", 5,"*");


var obj = [1, 4 , 'h', "sup", 123];



//9.
console.log("9.\n");
function traverseObject(someObj){
    
    for (var key in someObj) {
        console.log(`the obj is a ${typeof(someObj[key])} with value ${someObj[key]}`);
    }


}

traverseObject(obj);


var objA = [1, 4 , 6, 7, 123];



//10.

console.log("10.\n");

function deleteElement(someArr){
    
    traverseObject(someArr);
    console.log(`the obj length is ${someArr.length}`);
    
    //var newArr = someArr.slice(2,1);

    delete(someArr[2]);

    traverseObject(someArr);

    console.log(`the obj length is ${someArr.length}`);
}

deleteElement(objA);

//11.

console.log("11.\n");

function spliceElement(someArr){

    console.log(`the obj length is ${someArr.length}`);
    someArr.splice(2, 1);
    console.log(`the obj length is ${someArr.length}`);
}

spliceElement(objA);

//12.
console.log("12.\n");
var Person = function(name, age){
    this.name = name;
    this.age = age;

}

var john = new Person("John", 30);

traverseObject(john);



//13.
console.log("13.\n");


var johny = { name:   "Johny", age : 30 }

traverseObject(johny);































/////////////////////////////////////////////////////////////////////////////////






document.getElementById("listAdder").onchange = function() {addList()};




var liArray = [1,2];
var liArrayEnd = [1,2];

liArray.pop();
liArray.pop();
liArrayEnd.pop();
liArrayEnd.pop();



function addList() {
    var myHeader = document.createElement("li");

    //liArray.push ('<input type="checkbox" class="removeable" onchange="removeList()"></input> ' + document.getElementById("listAdder").value + ' ' + '<button class="moveUp" onclick="rearrange(' + liArray.length + ')">^</button>' + '<button class="moveUp" onclick="rearrangeDown(' + liArray.length + ')">^</button>');
    liArray.push(document.getElementById("listAdder").value)



   

    // myHeader.innerHTML = '<input type="checkbox" class="removeable" onchange="removeList()"></input> ';
    // myHeader.innerHTML += document.getElementById("listAdder").value;
    // myHeader.innerHTML +='move up <input type="checkbox" class=" moveUp" onchange="rearrange()"></input>' ;

    myHeader.innerHTML = '<input type="checkbox" class="removeable" onchange="removeList()"></input> ' + liArray[liArray.length -1] + ' ' + '<button class="moveUp" onclick="rearrange(' +  (liArray.length - 1) + ')">&uarr;</button>' + '<button class="moveUp" onclick="rearrangeDown(' + (liArray.length - 1) + ')">&darr;</button>';

    this.document.getElementById("listToAddTo").appendChild(myHeader);

    

}

document.getElementsByClassName("remove").onchange = function() {removeList()};

function removeList(){
    let checkArray = document.getElementsByClassName("removeable");




    for (var i = 0; i < checkArray.length; i++) {
        let valueToCheck = checkArray[i].checked;

        if(checkArray[i].checked){
            liArray.splice(i,1)
            //checkArray[i].parentElement.remove();
        }
    }

    let j = checkArray.length;
    for (var i = 0; i < j; i++) {
        checkArray[0].parentElement.remove();
    }

    for(var i = 0; i < liArray.length; i++){
        var myHeader = document.createElement("li");
        myHeader.innerHTML = '<input type="checkbox" class="removeable" onchange="removeList()"></input> ' + liArray[i] + ' ' + '<button class="moveUp" onclick="rearrange(' +  i + ')">&uarr;</button>' + '<button class="moveUp" onclick="rearrangeDown(' + i + ')">&darr;</button>';
        this.document.getElementById("listToAddTo").appendChild(myHeader);
    }
    

    




}






///////////////////////////////////////////////////////////////////////////////////////////////////////


function rearrange(i){

    let checkArray = document.getElementsByClassName("removeable");


    if(liArray[i-1]){
        var temp = liArray[i-1];
        liArray[i - 1] = liArray[i];
        liArray[i] = temp;

    }



    let j = checkArray.length;
    for (var i = 0; i < j; i++) {
        checkArray[0].parentElement.remove();
    }

    for(var i = 0; i < liArray.length; i++){
        var myHeader = document.createElement("li");
        myHeader.innerHTML = '<input type="checkbox" class="removeable" onchange="removeList()"></input> ' + liArray[i] + ' ' + '<button class="moveUp" onclick="rearrange(' +  i + ')">&uarr;</button>' + '<button class="moveUp" onclick="rearrangeDown(' + i + ')">&darr;</button>';
        this.document.getElementById("listToAddTo").appendChild(myHeader);
    }
    



}

function rearrangeDown(j){
 
    let checkArray = document.getElementsByClassName("removeable");


    if(liArray[j+1]){
        var temp = liArray[j+1];
        liArray[j + 1] = liArray[j];
        liArray[j] = temp;

    }



    let k = checkArray.length;
    for (var i = 0; i < k; i++) {
        checkArray[0].parentElement.remove();
    }

    for(var i = 0; i < liArray.length; i++){
        var myHeader = document.createElement("li");
        myHeader.innerHTML = '<input type="checkbox" class="removeable" onchange="removeList()"></input> ' + liArray[i] + ' ' + '<button class="moveUp" onclick="rearrange(' +  i + ')">&uarr;</button>' + '<button class="moveUp" onclick="rearrangeDown(' + i + ')">&darr;</button>';
        this.document.getElementById("listToAddTo").appendChild(myHeader);
    }
    


}

