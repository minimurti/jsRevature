
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




//-----------------------------------------------------------------------------------------------


function get_USA() {
    var seartext = "USA";
    var tagval = document.body.getElementsByTagName("*");
     for (var i = 0; i < tagval.length; i++) {
        var n1 = tagval[i].textContent.search(seartext);
        if(n1 != -1){
            console.log((tagval[i].textContent));
           break;
        }
     
     }
  
}

get_USA();






 //-------------------------------------------------------------------------------------2222


function get_People_In_Sales(){
    var table = document.getElementsByTagName("table")[0];
    for (var i = 0; i < table.rows.length;i++){
     var cells =  table.rows[i].cells;
         if(cells[1].textContent === "Sales"){
               console.log(cells[0].textContent);
        }
    }
  
}

get_People_In_Sales();




//-----------------------------------------------------------------------------------------------3

function get_Anchor_Children(){
 
    var anchors = document.body.getElementsByTagName("a");
    for(var i = 0; i < anchors.length; i++){
        

        var anchorBabies = anchors[i].childNodes
        for(var j = 0; j < anchorBabies.length; j++){
            if(anchorBabies[j].tagname = 'span')
            if(anchorBabies[j].innerHTML)
                console.log(anchorBabies[j].innerHTML);


        }





    }


}

get_Anchor_Children();





console.log("4. Hobbies");
function Hobies(){
    var e = document.getElementsByName("hobbies")[0];
    var hobby = e.options[e.selectedIndex].innerHTML;
    hobby += ' ' + e.options[e.selectedIndex].value;
    console.log(hobby);

}

Hobies();

document.getElementsByName("hobbies")[0].onchange = Hobies();



function get_custom_attribute(){
var elements = document.querySelectorAll('[data-customAttr]');
for (var i = 0; i <elements.length;i++){
    console.log(elements[i].dataset.customattr);
    }
}

get_custom_attribute();


document.getElementById("num1").onchange = function() {myFunction()};
document.getElementById("num2").onchange = function() {myFunction()};

function myFunction(){

        let x = document.getElementById("num1").value;
        let y = document.getElementById("num2").value;
    
    if(x && y){
        document.getElementById('sum').innerHTML = `${Number(x) + Number(y)}`;
    }
}




/////////////////////////////////////////////////////////////////


document.getElementsByName("skills")[0].onchange = function() {doYouEvenLiftBro()};

function doYouEvenLiftBro(){
    let x = document.getElementsByName("skills")[0].value;
    console.log(`Bro I bet you don't even lift ${x}`);
}

/////////////////////////////////////////////////////////////////////////////





var oldFavorite;
var ColorRadio = document.getElementsByName("favoriteColor");

function colorFunctions(){
    for(var i =0; i<ColorRadio.length; i++){

        document.getElementsByName("favoriteColor")[i].onchange = function() {disLoyal()};

    }


}


colorFunctions();

var ColorRadio = document.getElementsByName("favoriteColor");

function disLoyal(){
    if(oldFavorite)
        alert(`The color ${oldFavorite} wants to inform you that you are an unloyal color slut`);

        for (var i=0; i<ColorRadio.length; i++) {
            if ( ColorRadio[i].checked ) { // radio checked?
                oldFavorite = document.getElementsByName("favoriteColor")[i].value;
                break; // and break out of for loop
            }
        }


        recolorall();

}


function recolorall(){

    for(var i =0; i<ColorRadio.length; i++){

        var newItem = document.createElement("DIV");  

        //ColorRadio[i].style.backgroundColor = `${oldFavorite}`;
        
        


        // create wrapper container
        var wrapper = document.createElement('div');
        
        // insert wrapper before el in the DOM tree
        ColorRadio[i].parentNode.insertBefore(wrapper, ColorRadio[i]);
        
        // move el into wrapper
        wrapper.appendChild(ColorRadio[i]);

        ColorRadio[i].parentNode.style.backgroundColor = `${oldFavorite}`;
        ColorRadio[i].parentNode.style.display = "inline-block";//makes it so the div doesnt take the whole line

    }


}




////////////////////////////////////////////////////////////////////////////////////////////


employees = document.getElementsByClassName("empName");


function empCreater(){
    for(var i =0; i<ColorRadio.length; i++){

        employees[i].onmouseover = function() {empHIDE(this)};

    }


}


empCreater();

function empHIDE(i){
    
    if(i.style.color == "white")
        i.style.color = "black";
    else{
        i.style.color = "white";
    }



}


function showTime(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("currentTime").innerHTML = time;
}


showTime();

window.setInterval(function(){
    showTime();
}, 1000);



document.getElementById("helloWorld").onclick = function() {nowWAITONEMINUTE()}; 



function nowWAITONEMINUTE(){

    setTimeout(colorChange, 3000);
   

}

function colorChange(){
    document.getElementById("helloWorld").style.color = "red"
}





function walkTheDOM(node, func){

    if(node){
    func(node);

    
    var gothroughme = node.childNodes;

    if(gothroughme && gothroughme.length){
        for(var i = 0; i < gothroughme.length; i++){
            if(gothroughme[i])
                walkTheDOM(gothroughme,func);

        }
    }
    }


}

function allColor(insidethis){
    if(insidethis && insidethis.innerHTML ){
        console.log(insidethis.innerHTML);

    }
}



























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

