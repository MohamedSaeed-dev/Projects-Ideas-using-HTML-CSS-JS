let range = document.querySelector("#tip-range");
let dollar = document.querySelector("#number-input");

range.addEventListener("input", () => {
    document.querySelector("#percent").textContent = `${range.value}%`;
    if (dollar.value === "") {
        dollar.placeholder = "Enter valid $ !"
        if (dollar.classList.contains("shake")) {
            dollar.classList.remove("shake");
        }
        else {
            dollar.classList.add("shake");
        }
        
    }
    else {
        calculate();
    }
    
});


dollar.addEventListener("input", () => {
    calculate();
})

const calculate = () => {
    document.querySelector("#percent").textContent = `${range.value}%`;
    let amount = dollar.value * range.value / 100;
    let total = Number(dollar.value) + Number(amount);
    document.querySelector(".result").style.display = "block";
    document.querySelector("#tip-amount").value = amount;
    document.querySelector("#tip-total-bill").value = total;
}