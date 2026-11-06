const clearInputs = () => {
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("result-value").innerHTML = "";
};

const calculate = () => {
  const value1 = document.getElementById("input1").value;
  const operator = document.getElementById("operator").value;
  const value2 = document.getElementById("input2").value;

  let result = 0;

  if (value1 === "" || value2 === "") {
    result = "【エラー】入力値が不足しています";
  } else {
    switch (operator) {
      case "+":
        result = parseFloat(value1) + parseFloat(value2);
        break;
      case "-":
        result = parseFloat(value1) - parseFloat(value2);
        break;
      case "*":
        result = parseFloat(value1) * parseFloat(value2);
        break;
      case "/":
        if (parseFloat(value2) === 0) {
          result = "【エラー】0で割ることはできません";
        } else {
          result = parseFloat(value1) / parseFloat(value2);
        }
        break;
    }
  }

  document.getElementById("result-value").innerHTML = result;
};
