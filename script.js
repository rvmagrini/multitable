"use strict";

// Taggin elements

document.getElementById("generate").addEventListener("click", function () {
  let olEl = document.getElementById("olEl");
  let txtNumber = document.getElementById("txtnumber");

  olEl.innerHTML = "";

  if (txtNumber.value.length === 0) {
    alert("Please type a number.");
  } else {
    let number = Number(txtNumber.value);

    if (number === 0) {
      alert("Please pick a number greater than 0.");
    } else {
      for (let i = 1; i <= 10; i++) {
        const newLi = document.createElement("li");
        newLi.appendChild(
          document.createTextNode(`${number} x ${i} = ${number * i}`)
        );
        olEl.appendChild(newLi);
      }
    }
  }
  txtNumber.value = "";
  txtNumber.focus();
});
