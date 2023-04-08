let temp_result = '';

const result_element = document.getElementById("result");

const one = document.getElementById("one");

const two = document.getElementById("two");

const three = document.getElementById("three");

const four = document.getElementById("four");

const five = document.getElementById("five");

const six = document.getElementById("six");

const seven = document.getElementById("seven");

const eight = document.getElementById("eight");

const nine = document.getElementById("nine");

const ac = document.getElementById("ac");

const plus_minus = document.getElementById("plus_minus");

const percent = document.getElementById("percent");

const division = document.getElementById("division");

const myltiply = document.getElementById("myltiply");

const minus = document.getElementById("minus");

const plus = document.getElementById("plus");

const zero = document.getElementById("zero");

const dot = document.getElementById("dot");

const clear = document.getElementById("clear");

const equal = document.getElementById("euqual");

one.onclick = () => {
    temp_result = temp_result + one.innerText;
    result_element.innerText = temp_result;
};

two.onclick = () => {
    temp_result = temp_result + two.innerText;
    result_element.innerText = temp_result;
};

three.onclick = () => {
    temp_result = temp_result + three.innerText;
    result_element.innerText = temp_result;
};

four.onclick = () => {
    temp_result = temp_result + four.innerText;
    result_element.innerText = temp_result;
};

five.onclick = () => {
    temp_result = temp_result + five.innerText;
    result_element.innerText = temp_result
};

six.onclick = () => {
    temp_result = temp_result + six.innerText;
    result_element.innerText = temp_result
};

seven.onclick = () => {
    temp_result = temp_result + seven.innerText;
    result_element.innerText = temp_result
};

eight.onclick = () => {
    temp_result = temp_result + eight.innerText;
    result_element.innerText = temp_result;
}

nine.onclick = () => {
    temp_result = temp_result + nine.innerText;
    result_element.innerText = temp_result;
}

zero.onclick = () => {
    temp_result = temp_result + zero.innerText;
    result_element.innerText = temp_result;
}

dot.onclick = () => {
    temp_result = temp_result + dot.innerText;
    result_element.innerText = temp_result;
}

clear.onclick = () => {
    temp_result = ""; 
    result_element.innerText = "0";
};

ac.onclick = () => {
    temp_result = '';
    result_element.innerText = '0';
};

