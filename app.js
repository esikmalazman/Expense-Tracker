let expText = document.getElementsByName("expenseText")[0];
let amntText = document.getElementsByName("amountText")[0];
let addBtn = document.getElementsByName("submit")[0];
let target = document.getElementsByClassName("expense-history")[0];
let inputBox= document.getElementById("inputForm");
let number=0;

addBtn.addEventListener("click",addHistory);


function addHistory()
{
    let expValue = expText.value;
    let amntValue = amntText.value;


    console.log(expValue +" "+amntValue);
    number++;
    let addList = document.createElement('li');
    addList.setAttribute("id","addList");
    addList.style.cssText ="list-style-type :none;";
    let addExpHistory = document.createTextNode(" "+expValue+"  ");
    addList.appendChild(addExpHistory); // insert exp into li
   
    var addSpan = document.createElement('span');
    // addSpan.style.color="red";
    let addAmntHistory = document.createTextNode(" "+" RM "+amntValue);
    addSpan.appendChild(addAmntHistory); // insert amnt into span 
    addSpan.innerHTML += '<button class="X-btn  btn btn-outline-danger" onclick="dltList(this)" >X</button >';
    
    target.appendChild(addList).appendChild(addSpan);
   
    inputBox.reset();


    let convert = parseInt(amntValue,10); //convert strind to number

    if (convert>0)
    {
        addSpan.style.cssText = "color:green;";
    }
    else if(convert < 0)
    {
        addSpan.style.cssText = "color:red";
    }
    

    
}





function dltList(nameList)
{
    //remove element when it got click
    var removeLi = document.getElementById("addList"); 
   removeLi.remove(nameList);
   console.log("history remove");
    
}
