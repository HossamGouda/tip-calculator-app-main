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
let invoice = parseFloat(document.getElementById("bill").value);
let ratio_one = parseFloat(rate5.value) / 100;
let ratio_two = parseFloat(rate10.value) / 100;

//end of vars

// function calc to claculate the ratio from the total invoice then excute the target ratio regarding the button
function calc() {
    rate5.addEventListener("click", () => {
        let invoice = parseFloat(document.getElementById("bill").value);
        if (isNaN(invoice) == true || invoice == 0 || invoice < 0) {
            let alert = document.querySelector(".alert");
            alert.style.display = "block";
            let invoice_holder = document.getElementById("bill");
            invoice_holder.style.border = "1px solid red";
            reset.style.background = "hsl(172, 67%, 45%)";

        }
        let ratio_one = parseFloat(rate5.value) / 100;
        let total_amount = invoice * ratio_one;
        let person_nos = parseFloat(document.getElementById("person").value);
        if (person_nos == 0 || isNaN(person_nos) == true) {
            let alert = document.querySelector(".alert");
            alert.style.display = "block"
            let person_nos = document.getElementById("person");
            person_nos.style.border = "1px solid red";

        } else {
            let person_amount = total_amount / person_nos;
            let tip_amount = document.querySelector(".tip_amount");
            tip_amount.innerHTML = person_amount.toFixed(2);
            let total_per_person = (invoice * (1 + ratio_one)) / person_nos;
            let total_person = document.querySelector(".per_person");
            total_person.innerHTML = total_per_person.toFixed(2);
            let reset = document.querySelector(".reset");
            reset.style.background = "hsl(172, 67%, 45%)";

        }
    });
    rate10.addEventListener("click", () => {
        let invoice = parseFloat(document.getElementById("bill").value);
        if (isNaN(invoice) == true || invoice == 0 || invoice < 0) {
            let alert = document.querySelector(".alert");
            alert.style.display = "block";
            let invoice_holder = document.getElementById("bill");
            invoice_holder.style.border = "1px solid red";
            reset.style.background = "hsl(172, 67%, 45%)";

        }
        let ratio_two = parseFloat(rate10.value) / 100;
        let total_amount = invoice * ratio_two;
        let person_nos = parseFloat(document.getElementById("person").value);
        if (person_nos == 0 || isNaN(person_nos) == true) {
            let alert = document.querySelector(".alert");
            alert.style.display = "block";
            let person_nos = document.getElementById("person");
            person_nos.style.border = "1px solid red";
        } else {
            let person_amount = total_amount / person_nos;
            let tip_amount = document.querySelector(".tip_amount");
            tip_amount.innerHTML = person_amount.toFixed(2);
            let total_per_person = (invoice * (1 + ratio_two)) / person_nos;
            let total_person = document.querySelector(".per_person");
            total_person.innerHTML = total_per_person.toFixed(2);
            reset.style.background = "hsl(172, 67%, 45%)";

        }
    });
    rate15.addEventListener("click", () => {
        let invoice = parseFloat(document.getElementById("bill").value);
        if (isNaN(invoice) == true || invoice == 0 || invoice < 0) {
            let alert = document.querySelector(".alert");
            alert.style.display = "block";
            let invoice_holder = document.getElementById("bill");
            invoice_holder.style.border = "1px solid red";
            reset.style.background = "hsl(172, 67%, 45%)";

        }
        let ratio_three = parseFloat(rate15.value) / 100;
        let total_amount = invoice * ratio_three;
        let person_nos = parseInt(document.getElementById("person").value);
        if (person_nos == 0 || isNaN(person_nos) == true) {
            let alert = document.querySelector(".alert");
            alert.style.display = "block";
            let person_nos = document.getElementById("person");
            person_nos.style.border = "1px solid red";
        } else {
            let person_amount = total_amount / person_nos;
            let tip_amount = document.querySelector(".tip_amount");
            tip_amount.innerHTML = person_amount.toFixed(2);
            let total_per_person = (invoice * (1 + ratio_three)) / person_nos;
            let total_person = document.querySelector(".per_person");
            total_person.innerHTML = total_per_person.toFixed(2);
            reset.style.background = "hsl(172, 67%, 45%)";

        }
    });
    rate25.addEventListener("click", () => {
        let invoice = parseFloat(document.getElementById("bill").value);
        if (isNaN(invoice) == true || invoice == 0 || invoice < 0) {
            let alert = document.querySelector(".alert");
            alert.style.display = "block";
            let invoice_holder = document.getElementById("bill");
            invoice_holder.style.border = "1px solid red";
            reset.style.background = "hsl(172, 67%, 45%)";

        }
        let ratio_four = parseFloat(rate25.value) / 100;
        let total_amount = invoice * ratio_four;
        let person_nos = parseInt(document.getElementById("person").value);
        if (person_nos == 0 || isNaN(person_nos) == true) {
            let alert = document.querySelector(".alert");
            alert.style.display = "block";
            let person_nos = document.getElementById("person");
            person_nos.style.border = "1px solid red";
        } else {
            let person_amount = total_amount / person_nos;
            let tip_amount = document.querySelector(".tip_amount");
            tip_amount.innerHTML = person_amount.toFixed(2);
            let total_per_person = (invoice * (1 + ratio_four)) / person_nos;
            let total_person = document.querySelector(".per_person");
            total_person.innerHTML = total_per_person.toFixed(2);
            reset.style.background = "hsl(172, 67%, 45%)";

        }
    });
    rate50.addEventListener("click", () => {
        let invoice = parseFloat(document.getElementById("bill").value);
        if (isNaN(invoice) == true || invoice == 0 || invoice < 0) {
            let alert = document.querySelector(".alert");
            alert.style.display = "block";
            let invoice_holder = document.getElementById("bill");
            invoice_holder.style.border = "1px solid red";
            reset.style.background = "hsl(172, 67%, 45%)";

        }
        let ratio_five = parseFloat(rate50.value) / 100;
        let total_amount = invoice * ratio_five;
        let person_nos = parseInt(document.getElementById("person").value);
        if (person_nos == 0 || isNaN(person_nos) == true) {
            let alert = document.querySelector(".alert");
            alert.style.display = "block";
            let person_nos = document.getElementById("person");
            person_nos.style.border = "1px solid red";
        } else {
            let person_amount = total_amount / person_nos;
            let tip_amount = document.querySelector(".tip_amount");
            tip_amount.innerHTML = person_amount.toFixed(2);
            let total_per_person = (invoice * (1 + ratio_five)) / person_nos;
            let total_person = document.querySelector(".per_person");
            total_person.innerHTML = total_per_person.toFixed(2);
            reset.style.background = "hsl(172, 67%, 45%)";

        }
    });
    custom.addEventListener("input", () => {
        let invoice = parseFloat(document.getElementById("bill").value);
        let person_nos = parseInt(document.getElementById("person").value);
        if (isNaN(invoice) == true || invoice == 0 || invoice < 0) {
            let alert = document.querySelector(".alert");
            alert.style.display = "block";
            let invoice_holder = document.getElementById("bill");
            invoice_holder.style.border = "1px solid red";
            reset.style.background = "hsl(172, 67%, 45%)";

        } else if (person_nos === 0 || isNaN(person_nos) == true) {
            let alert = document.querySelector(".alert");
            alert.style.display = "block";
            let person_nos = document.getElementById("person");
            person_nos.style.border = "1px solid red";
            reset.style.background = "hsl(172, 67%, 45%)";

        } else {
            let customized = parseFloat(custom.value) / 100;
            let total_amount = invoice * customized;
            let person_nos = parseInt(document.getElementById("person").value);
            let person_amount = total_amount / person_nos;
            let tip_amount = document.querySelector(".tip_amount");
            tip_amount.innerHTML = person_amount.toFixed(2);
            let total_per_person = (invoice * (1 + customized)) / person_nos;
            let total_person = document.querySelector(".per_person");
            total_person.innerHTML = total_per_person.toFixed(2);
            reset.style.background = "hsl(172, 67%, 45%)";
        }
    });
}

calc();


function clear() {
    reset.addEventListener("click", () => {
        document.getElementById("bill").value = "";
        document.getElementById("custom").value = "";
        document.querySelector("#person").value = "";
        document.querySelector(".tip_amount").innerHTML = "0.00";
        document.querySelector(".per_person").innerHTML = "0.00";
        document.querySelector(".alert").style.display = "none";
        document.getElementById("person").style.border = "none";
        document.getElementById("bill").style.border = "none";
        document.querySelector(".reset").style.background = "hsl(183, 79%, 24%)"

    });
}

clear();