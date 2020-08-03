const generateButton = document.querySelector('[generatebtn]'); 
const generateInpt = document.querySelector('[generateInput]');
generateButton.addEventListener('click', function(){   
 const randomNumber = Math.random() *(9999 - 999);
 const resutInOutput = Math.round(randomNumber);
 if (resutInOutput > 999 && resutInOutput < 9999) {
    const pinNumber = generateInpt.value;
    generateInpt.value = resutInOutput;
 } 
})
function deleteNumber() {
   var value = document.getElementById("numberDisplay").value;
   document.getElementById("numberDisplay").value = value.substr(0, value.length - 1);
}
function buttonClick(){
   var firstInput = document.getElementById('firstText').value;
   var secondInput = document.getElementById('numberDisplay').value;

if (firstInput == "" || secondInput == ""){
alert("You have to Enter at least 4 digit generate PIN");
}

   else if (firstInput == secondInput && (firstInput != "" || secondInput != "")) {
      document.getElementById('positiveNotify').style.display = "block";
   }

   else if(firstInput != secondInput && (firstInput != "" , secondInput != "")){
      let tryItemsValue = document.getElementById('tryItems').innerText;
      let tryItemsNumber = tryItemsValue -  1;
      document.getElementById('tryItems').innerText = tryItemsNumber;
       if(tryItemsNumber == 0 && tryItemsNumber > -1){
         document.getElementById("itemsFinished").innerText = "You have already 3 times left, Try again";
         document.getElementById("submit-button").style.display = "none";
      }
      document.getElementById('negativeNotify').style.display = "block";
   }      
}






