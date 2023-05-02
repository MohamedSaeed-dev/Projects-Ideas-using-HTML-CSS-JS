function Clear() {
    document.querySelector("#input").value = "";
}

function Delete() {
    let value = document.querySelector("#input").value;
    document.querySelector("#input").value = value.slice(0, value.length-1)
}

function Display(value) {
    var input = document.querySelector("#input");
    var startPos = input.selectionStart;
    var endPos = input.selectionEnd;
    var currentValue = input.value;
    input.value = currentValue.substring(0, startPos) + value + currentValue.substring(endPos, currentValue.length);
    input.setSelectionRange(startPos + 1, startPos + 1);
}


let datalist = document.querySelector("#equations");
function Calculate() {
    let result = document.querySelector("#input").value;
    document.querySelector("#input").value = eval(result);
    let option = document.createElement("option");
    option.value = result;
    option.textContent = `= ${eval(result)}`;
    datalist.appendChild(option);
}


