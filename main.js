var Item1 = document.getElementById('item-first');
var Item2 = document.getElementById('Second');
var Item3 = document.getElementById('Third');
var Item4 = document.getElementById('Fourth');
var Item5 = document.getElementById('Fifth');
var Item6 = document.getElementById('Sixth');
var totalprice = document.getElementById("total-price");

function optimise() {
    add = Number(Item1.value) + Number(Item2.value) + Number(Item3.value) + Number(Item4.value) + Number(Item5.value) + Number(Item6.value);
    totalprice.innerHTML = add;
}
function submit() {
    if (Item1.value == "" || Item2.value == "" || Item3.value == "" || Item4.value == "" || Item5.value == "" || Item6.value == "") {
        alert("Your Form is Empty");
    }
    else {
        add = Number(Item1.value) + Number(Item2.value) + Number(Item3.value) + Number(Item4.value) + Number(Item5.value) + Number(Item6.value);
        totalprice.innerHTML = add;
    }
}

function sum() {
    if (Item1.value == "") {
        alert("Please fill all the fields");
    }
    else {
        add = Number(Item1.value) + Number(Item2.value) + Number(Item3.value) + Number(Item4.value) + Number(Item5.value) + Number(Item6.value);
        var userinp = prompt("Add the number by user input");
        add = add + Number(userinp);
        alert("Total price is: " + add);
    }
}

function sub() {
    if (Item1.value == "") {
        alert("Please fill all the fields");
    }
    else {
        add = Number(Item1.value) + Number(Item2.value) + Number(Item3.value) + Number(Item4.value) + Number(Item5.value) + Number(Item6.value);
        var userinp = prompt("Substract the number by user input");
        add = add - Number(userinp);
        alert("Total price is: " + add);
    }
}

function mul() {
    if (Item1.value == "") {
        alert("Please fill all the fields");
    }
    else {
        add = Number(Item1.value) + Number(Item2.value) + Number(Item3.value) + Number(Item4.value) + Number(Item5.value) + Number(Item6.value);
        var userinp = prompt("Multiplication of the number by user input");
        add = add * Number(userinp);
        alert("Total price is: " + add);
    }
}

function div() {
    if (Item1.value == "") {
        alert("Please fill all the fields");
    }
    else {
        add = Number(Item1.value) + Number(Item2.value) + Number(Item3.value) + Number(Item4.value) + Number(Item5.value) + Number(Item6.value);
        var userinp = prompt("Division the number by user input");
        add = add / Number(userinp);
        alert("Total price is: " + add);
    }
}

function paidcash() {
    var money = document.getElementById('Seventh');
    if (Item1.value == "" || Item2.value == "" || Item3.value == "" || Item4.value == "" || Item5.value == "" || Item6.value == "") {
        alert("Your Form is Empty");
    }
    else {
        add = Number(Item1.value) + Number(Item2.value) + Number(Item3.value) + Number(Item4.value) + Number(Item5.value) + Number(Item6.value);
        add = add - Number(money.value);
        document.getElementById('return').innerHTML = add;
    }

}