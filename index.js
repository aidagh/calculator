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
var trash = document.createElement("img");
trash.src = "trash.svg";
trash.id = "trash";
function remove(elemet) {
    elemet.parentNode.removeChild(elemet);
}
//Get numbers and operators and show the result
var result = document.getElementById("result");
var buttons = Array.from(document.getElementsByClassName("button"));
var list = document.createElement("li");
var historyItems = document.getElementById("historyItems");
buttons.map(function (button) {
    button.addEventListener("click", function (e) {
        switch (e.target.innerText) {
            case "C":
                var textnode = document.createTextNode("".concat(result.innerText));
                list.appendChild(textnode);
                historyItems === null || historyItems === void 0 ? void 0 : historyItems.insertBefore(list, historyItems.childNodes[null]);
                list.appendChild(trash);
                result.innerText = "";
                break;
            case "=":
                try {
                    result.innerText = eval(result.innerText);
                }
                catch (_a) {
                    result.innerText = "Error";
                }
                break;
            default:
                result.innerText += e.target.innerText;
                var answer = document.createTextNode("".concat(result.innerText));
                list.appendChild(answer);
                var equalOp = document.createTextNode("".concat(e.target.innerText));
                list.appendChild(equalOp);
        }
    });
});
trash.addEventListener("click", function () {
    remove(historyItems);
});
