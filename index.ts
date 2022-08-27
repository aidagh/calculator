// const textnode = document.createTextNode(`${element}`);
//   list.appendChild(textnode);
//   historyItems?.insertBefore(list, historyItems.childNodes[null]);
// const getChar = (element) => {
//   let operator = element.innerText;
//   console.log(operator);
//   const textnode = document.createTextNode(`${operator}`);
//   list.appendChild(textnode);
//   historyItems?.insertBefore(list, historyItems.childNodes[null]);
//   return operator;
// };

// const getInput = (element) => {
//   const textnode = document.createTextNode(`${element}`);
//   list.appendChild(textnode);
//   historyItems?.insertBefore(list, historyItems.childNodes[null]);
// };

const trash = document.createElement("img");
trash.src = "trash.svg";
trash.id = "trash";

function remove(elemet) {
  elemet.parentNode.removeChild(elemet);
}
//Get numbers and operators and show the result
let result = document.getElementById("result");
let buttons = Array.from(document.getElementsByClassName("button"));
let list: any = document.createElement("li");
const historyItems = document.getElementById("historyItems");

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        const textnode = document.createTextNode(`${result.innerText}`);
        list.appendChild(textnode);
        historyItems?.insertBefore(list, historyItems.childNodes[null]);
        list.appendChild(trash);

        result.innerText = "";

        break;
      case "=":
        try {
        
          result.innerText = eval(result.innerText);
        } catch {
          result.innerText = "Error";
        }
        break;
     
       =
      default:
        result.innerText += e.target.innerText;
        const answer = document.createTextNode(`${result.innerText}`);
        list.appendChild(answer);
        const equalOp = document.createTextNode(`${e.target.innerText}`);
        list.appendChild(equalOp);
    }
  });
});

trash.addEventListener("click", function () {
  remove(historyItems);
});
