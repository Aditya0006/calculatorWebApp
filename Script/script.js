var input = document.getElementById("screen");
let string = "";

let buttons = document.querySelectorAll('button');

let arr = Array.from(buttons);
// hello
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        try {
            if (e.target.innerHTML == '=') {
                if (string != 0) {
                    string = eval(string);
                    input.value = string;
                } else {
                    string = "";
                    input.value = string;
                }

            } else if (e.target.innerHTML == 'AC') {
                string = "";
                input.value = string;
            } else if (e.target.innerHTML == 'DEL') {
                if (input.value == 'Error' || input.value != 0) {
                    string = "";
                    input.value = string
                }
                string = string.substring(0, string.length - 1);
                input.value = string;
            } else {
                string += e.target.innerHTML;
                input.value = string;
            }
        } catch (e) {
            string = "Error";
            input.value = string;
        }

    });
})