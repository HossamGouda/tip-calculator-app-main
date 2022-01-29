//global varialbles
let bill = document.getElementById("bill");
let rate5 = document.querySelector(".rate1");
let rate10 = document.querySelector(".rate2");
let rate15 = document.querySelector(".rate3");
let rate25 = document.querySelector(".rate4");
let rate50 = document.querySelector(".rate5");
let custom = document.getElementById("custom");
let person_nos = document.querySelector("#person");
let tip_amount = document.querySelector(".tip_amount");
let total_person = document.querySelector(".per_person");
let reset = document.querySelector(".reset");
let invoice = parseInt(document.getElementById("bill").value);
let ratio_one = parseInt(rate5.value) / 100;
let ratio_two = parseInt(rate10.value) / 100;

// function calc to claculate the ratio from the total invoice
function calc() {
  rate5.addEventListener("click", () => {
    let invoice = parseInt(document.getElementById("bill").value);
    let ratio_one = parseInt(rate5.value) / 100;   
    let total_amount = invoice * ratio_one;
    let person_nos = parseInt(document.getElementById("person").value);
    //control the flow and apper the warning box 
    if(person_nos==0 || isNaN(person_nos)==true){
       let alert = document.querySelector(".alert");
       alert.style.display="block"
      let person_nos = document.getElementById("person");
      person_nos.style.border = "1px solid red";

    }
    else{
      let person_amount = total_amount / person_nos;
      let tip_amount = document.querySelector(".tip_amount");
      tip_amount.innerHTML = Math.round(person_amount).toFixed(2);
      let total_per_person = (invoice * (1 + ratio_one)) / person_nos;
      let total_person = document.querySelector(".per_person");
      total_person.innerHTML = total_per_person.toFixed(2);
    }
  });
  rate10.addEventListener("click", () => {
    let invoice = parseInt(document.getElementById("bill").value);
    let ratio_two = parseInt(rate10.value) / 100;
    console.log(invoice * ratio_two);
    let total_amount = invoice * ratio_two;
    let person_nos = parseInt(document.getElementById("person").value);
    //control the flow and apper the warning box
    if (person_nos == 0 || isNaN(person_nos) == true) {
      let alert = document.querySelector(".alert");
      alert.style.display = "block";
      let person_nos = document.getElementById("person");
      person_nos.style.border = "1px solid red";
    } else {
      let person_amount = total_amount / person_nos;
      let tip_amount = document.querySelector(".tip_amount");
      tip_amount.innerHTML = Math.round(person_amount).toFixed(2);
      let total_per_person = (invoice * (1 + ratio_two)) / person_nos;
      let total_person = document.querySelector(".per_person");
      total_person.innerHTML = total_per_person.toFixed(2);
    }
  });
  rate15.addEventListener("click", () => {
    let invoice = parseInt(document.getElementById("bill").value);
    let ratio_three = parseInt(rate15.value) / 100;
    console.log(invoice * ratio_three);
    let total_amount = invoice * ratio_three;
    let person_nos = parseInt(document.getElementById("person").value);
    //control the flow and apper the warning box
    if (person_nos == 0 || isNaN(person_nos) == true) {
      let alert = document.querySelector(".alert");
      alert.style.display = "block";
      let person_nos = document.getElementById("person");
      person_nos.style.border = "1px solid red";
    } else {
      let person_amount = total_amount / person_nos;
      let tip_amount = document.querySelector(".tip_amount");
      tip_amount.innerHTML = Math.round(person_amount).toFixed(2);
      let total_per_person = (invoice * (1 + ratio_three)) / person_nos;
      let total_person = document.querySelector(".per_person");
      total_person.innerHTML = total_per_person.toFixed(2);
    }
  });
  rate25.addEventListener("click", () => {
    let invoice = parseInt(document.getElementById("bill").value);
    let ratio_four = parseInt(rate25.value) / 100;
    console.log(invoice * ratio_four);
  });
  rate50.addEventListener("click", () => {
    let invoice = parseInt(document.getElementById("bill").value);
    let ratio_five = parseInt(rate50.value) / 100;
    console.log(invoice * ratio_five);
  });
  custom.addEventListener("input", () => {
    let invoice = parseInt(document.getElementById("bill").value);
    let customized = parseInt(custom.value) / 100;
    console.log(invoice * customized);
  });
}

calc();

// to reset the values of inpust (bill, custom percentage)

function clear() {
  reset.addEventListener("click", () => {
    document.getElementById("bill").value = "";
    document.getElementById("custom").value = "";
    document.querySelector("#person").value = "";
    document.querySelector(".tip_amount").innerHTML = "0.00"; 
    document.querySelector(".per_person").innerHTML = "0.00"; 
    document.querySelector(".alert").style.display = "none"; 
    document.getElementById("person").style.border = "none"; 
  });
}

clear();

