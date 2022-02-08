const container: HTMLElement | null = document.querySelector(".grid-container");
const trigonometry: HTMLElement | null =
  document.querySelector(".trigonometry");
const func: HTMLElement | null = document.querySelector(".function");
const display: any | null = document.getElementById("display");
const fe: HTMLElement | null = document.getElementById("fe");
let isfe: boolean = false;
const operators: string[] = ["+", "-", "*", "/"];
const POWER: string = "POWER(",
  IN: string = "In(",
  FACTORIAL: string = "factorial(",
  DMS: string = "dms(",
  DEG: string = "degg(";
let data = {
  operation: [],
  formula: [],
};
fe.addEventListener("click", (): void => {
  isfe = !isfe;
  if (isfe) {
    if (
      data.formula.length > 0 &&
      data.operation.length > 0 &&
      typeof parseInt(data.operation.join("")) == "number"
    ) {
      let t1 = parseInt(data.formula.join("")).toExponential();
      data.formula = [];
      data.formula.push(t1);
      let t2 = parseInt(data.operation.join("")).toExponential();
      data.operation = [];
      data.operation.push(t2);
      updateOutput(data.operation.join(""));
    }
    fe.style.borderBottom = "1px solid black";
  } else {
    if (
      data.formula.length > 0 &&
      data.operation.length > 0 &&
      typeof parseInt(data.operation.join("")) == "number"
    ) {
      let op = eval(data.operation.join(""));
      let fo = eval(data.formula.join(""));
      data.operation = [];
      data.formula = [];
      data.operation.push(op);
      data.formula.push(fo);
      updateOutput(data.operation.join(""));
    }
    fe.style.borderBottom = "none";
  }
});
var pointer: number = data.formula.length;
interface btns{
    name: string,
    symbol: string,
    formula: string,
    type: string,
}
let trigo_btn:btns[] = [
  {
    name: "cos",
    symbol: "cos",
    formula: "trigo(Math.cos,",
    type: "trigo_function",
  },
  {
    name: "sin",
    symbol: "sin",
    formula: "trigo(Math.sin,",
    type: "trigo_function",
  },
  {
    name: "tan",
    symbol: "tan",
    formula: "trigo(Math.tan,",
    type: "trigo_function",
  },
  {
    name: "acos",
    symbol: "acos",
    formula: "inv_trigo(Math.acos,",
    type: "trigo_function",
  },
  {
    name: "asin",
    symbol: "asin",
    formula: "inv_trigo(Math.asin,",
    type: "trigo_function",
  },
  {
    name: "atan",
    symbol: "atan",
    formula: "inv_trigo(Math.atan,",
    type: "trigo_function",
  },
];
let fun_btn:btns[] = [
  {
    name: "mod_x_fun",
    symbol: "|x|",
    formula: "Math.abs",
    type: "math_function",
  },
  {
    name: "ceil_x",
    symbol: "⌈x⌉",
    formula: "Math.ceil",
    type: "math_function",
  },
  {
    name: "floor_x",
    symbol: "⌊x⌋",
    formula: "Math.floor",
    type: "math_function",
  },
  {
    name: "random",
    symbol: "rand",
    formula: "Math.random",
    type: "math_function",
  },
  {
    name: "dms",
    symbol: "dms",
    formula: DMS,
    type: "math_function",
  },
  {
    name: "deg",
    symbol: "deg",
    formula: DEG,
    type: "math_function",
  },
];

interface cl_btn{
    name: string,
    symbol: string|number,
    formula: string | boolean |number,
    classname?:string,
    type: string,
}

let cal_btn:cl_btn[] = [
  {
    name: "2nd",
    symbol: "2<sup>nd</sup>",
    formula: false,
    type: "key",
  },

  {
    name: "pi",
    symbol: "π",
    formula: "Math.PI",
    type: "number",
  },
  {
    name: "e",
    symbol: "e",
    formula: "Math.E",
    type: "number",
  },
  {
    name: "clear",
    symbol: "C",
    formula: false,
    type: "key",
  },
  {
    name: "backspace",
    symbol: `<i class="fas fa-backspace"></i>`,
    formula: false,
    type: "key",
  },
  {
    name: "square",
    symbol: "x²",
    formula: POWER,
    type: "math_function",
  },
  {
    name: "1byx",
    symbol: "1/x",
    formula: "1/(",
    type: "math_function",
  },
  {
    name: "mod-x",
    symbol: "|x|",
    formula: "Math.abs",
    type: "math_function",
  },
  {
    name: "exp",
    symbol: "exp",
    formula: "Math.exp",
    type: "math_function",
  },
  {
    name: "mod",
    symbol: "mod",
    formula: "%",
    type: "math_function",
  },
  {
    name: "square-root",
    symbol: "²√",
    formula: "Math.sqrt",
    type: "math_function",
  },
  {
    name: "open-parenthesis",
    symbol: "(",
    formula: "(",
    type: "number",
  },
  {
    name: "close-parenthesis",
    symbol: ")",
    formula: ")",
    type: "number",
  },
  {
    name: "factorial",
    symbol: "n!",
    formula: FACTORIAL,
    type: "math_function",
  },
  {
    name: "division",
    symbol: "÷",
    formula: "/",
    type: "operator",
  },
  {
    name: "power",
    symbol: "x<sup>y</sup>",
    formula: POWER,
    type: "math_function",
  },
  {
    name: "7",
    symbol: 7,
    formula: 7,
    classname: "white",
    type: "number",
  },
  {
    name: "8",
    symbol: 8,
    formula: 8,
    classname: "white",
    type: "number",
  },
  {
    name: "9",
    symbol: 9,
    formula: 9,
    classname: "white",
    type: "number",
  },
  {
    name: "multiplication",
    symbol: "x",
    formula: "*",
    type: "operator",
  },
  {
    name: "tentopx",
    symbol: "10<sup>x</sup>",
    formula: POWER,
    type: "math_function",
  },
  {
    name: "4",
    symbol: 4,
    formula: 4,
    classname: "white",
    type: "number",
  },
  {
    name: "5",
    symbol: 5,
    formula: 5,
    classname: "white",
    type: "number",
  },
  {
    name: "6",
    symbol: 6,
    formula: 6,
    classname: "white",
    type: "number",
  },
  {
    name: "subtraction",
    symbol: "–",
    formula: "-",
    type: "operator",
  },
  {
    name: "log",
    symbol: "log",
    formula: "Math.log10",
    type: "math_function",
  },
  {
    name: "1",
    symbol: 1,
    formula: 1,
    classname: "white",
    type: "number",
  },
  {
    name: "2",
    symbol: 2,
    formula: 2,
    classname: "white",
    type: "number",
  },
  {
    name: "3",
    symbol: 3,
    formula: 3,
    classname: "white",
    type: "number",
  },
  {
    name: "addition",
    symbol: "+",
    formula: "+",
    type: "operator",
  },
  {
    name: "natural-log",
    symbol: "In",
    formula: IN,
    type: "math_function",
  },
  {
    name: "plusorminys",
    symbol: "+/-",
    formula: false,
    classname: "white",
    type: "key",
  },
  {
    name: "0",
    symbol: 0,
    formula: 0,
    classname: "white",
    type: "number",
  },
  {
    name: "comma",
    symbol: ".",
    formula: ".",
    classname: "white",
    type: "number",
  },
  {
    name: "calculate",
    symbol: "=",
    formula: "=",
    classname: "equal",
    type: "calculate",
  },
];

function renderBtns(isnew: boolean): void {
  if (isnew) {
    cal_btn.forEach((button) => {
      container.innerHTML += `<button class="box ${
        button.classname ? `${button.classname}` : ``
      }" id="${button.name}">${button.symbol}</button>`;
    });
  } else {
    container.innerHTML = "";
    cal_btn.forEach((button) => {
      container.innerHTML += `<button class="box ${
        button.classname ? `${button.classname}` : ``
      }" id="${button.name}">${button.symbol}</button>`;
    });
  }
}

renderBtns(true);

trigo_btn.forEach((button): void => {
  document.querySelector(
    ".tri-list"
  ).innerHTML += `<button class="box" id="${button.name}">${button.symbol}</button>`;
});

fun_btn.forEach((button): void => {
  document.querySelector(
    ".fun-list"
  ).innerHTML += `<button class="box" id="${button.name}">${button.symbol}</button>`;
});

container.addEventListener("click", (event):void => {
  let target_btn: any = event.target;
  cal_btn.forEach((button) => {
    if (button.name === target_btn.id) {
      calculator(button);
    }
  });
});
trigonometry.addEventListener("click", (event):void => {
  let target_btn: any = event.target;
  trigo_btn.forEach((button) => {
    if (button.name === target_btn.id) {
      calculator(button);
    }
  });
});

func.addEventListener("click", (event):void => {
  let target_btn: any = event.target;
  fun_btn.forEach((button) => {
    if (button.name === target_btn.id) {
      calculator(button);
    }
  });
});

let is2nd: boolean = false;
let checkporm: number = 0;
function calculator(btn:cl_btn|btns) {
  console.log(btn);
  if (btn.type === "operator") {
    data.operation.push(btn.symbol);
    data.formula.push(btn.formula);
    console.log(data);
    updateOutput(data.operation.join(""));
  } else if (btn.type === "number") {
    data.operation.push(btn.symbol);
    data.formula.push(btn.formula);
    console.log(data);
    updateOutput(data.operation.join(""));
  } else if (btn.type === "math_function") {
    let symbol, formula;
    if (btn.name == "factorial") {
      symbol = "!";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula);
    } else if (btn.name == "dms") {
      symbol = "dms(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula);
    } else if (btn.name == "deg") {
      symbol = "deg(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula);
    } else if (btn.name == "natural-log") {
      symbol = "In(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula);
    } else if (btn.name == "power") {
      symbol = "^(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula);
    } else if (btn.name == "square") {
      symbol = "^(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula);

      data.operation.push("2)");
      data.formula.push("2)");
    } else if (btn.name == "cube") {
      symbol = "^(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula);

      data.operation.push("3)");
      data.formula.push("3)");
    } else if (btn.name == "tentopx") {
      symbol = "10^(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push("10");
      data.formula.push(formula);
    } else if (btn.name == "twotopx") {
      symbol = "2^(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push("2");
      data.formula.push(formula);
    } else if (btn.name == "1byx") {
      symbol = "1/(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula);
    } else if (btn.name == "mod") {
      symbol = "%";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula);
    } else if (btn.name == "mod-x") {
      symbol = "abs(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula + "(");
    } else if (btn.name == "mod_x_fun") {
      symbol = "abs(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula + "(");
    } else if (btn.name == "ceil_x") {
      symbol = "ceil(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula + "(");
    } else if (btn.name == "floor_x") {
      symbol = "floor(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula + "(");
    } else if (btn.name == "random") {
      symbol = "random";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula + "()");
    } else {
      symbol = btn.symbol + "(";
      formula = btn.formula + "(";
      data.operation.push(symbol);
      data.formula.push(formula);
    }
    updateOutput(data.operation.join(""));
  } else if (btn.type === "key") {
    if (btn.name == "clear") {
      data.operation = [];
      data.formula = [];
      updateOutput(data.operation.join(""));
    } else if (btn.name == "backspace") {
      data.operation.pop();
      data.formula.pop();
      console.log("clicked");
      updateOutput(data.operation.join(""));
    } else if (btn.name == "2nd") {
      if (!is2nd) {
        cal_btn.forEach((button) => {
          if (button.name == "square") {
            button.formula = POWER;
            button.name = "cube";
            button.symbol = "x³";
          } else if (button.name == "square-root") {
            button.formula = "Math.cbrt";
            button.name = "cube-root";
            button.symbol = "³√";
          } else if (button.name == "tentopx") {
            button.formula = POWER;
            button.symbol = "2<sup>x</sup>";
            button.name = "twotopx";
          }
        });
        renderBtns(is2nd);
        is2nd = true;
      } else {
        cal_btn.forEach((button) => {
          if (button.name == "cube") {
            button.formula = POWER;
            button.name = "square";
            button.symbol = "x²";
          } else if (button.name == "cube-root") {
            button.formula = "Math.sqrt";
            button.name = "square-root";
            button.symbol = "²√";
          } else if (button.name == "twotopx") {
            button.formula = POWER;
            button.symbol = "10<sup>x</sup>";
            button.name = "tentopx";
          }
        });
        renderBtns(!is2nd);
        is2nd = false;
      }
    } else if (btn.name == "plusorminys") {
      if (
        data.operation.length > 0 &&
        data.formula.length > 0 &&
        checkporm == 0 &&
        parseInt(data.operation[pointer])>0
      ) {
        data.operation[pointer] = "-" + data.operation[pointer];
        data.formula[pointer] = "-" + data.formula[pointer];
        updateOutput(data.operation.join(""));
        checkporm++;
      }
    }
  } else if (btn.type === "calculate") {
    let formula_str = data.formula.join("");
    let POWER_SEARCH_RESULT = search(data.formula, POWER);
    let FACTORIAL_SEARCH_RESULT = search(data.formula, FACTORIAL);

    const BASES = powerBaseGetter(data.formula, POWER_SEARCH_RESULT);
    const NUMBERS = factorialNumberGetter(
      data.formula,
      FACTORIAL_SEARCH_RESULT
    );

    BASES.forEach((base) => {
      let toReplace = base + POWER;
      let replacement = "Math.pow(" + base + ",";
      formula_str = formula_str.replace(toReplace, replacement);
    });

    NUMBERS.forEach((factorial) => {
      formula_str = formula_str.replace(
        factorial.toReplace,
        factorial.replacement
      );
    });

    let result;
    try {
      result = eval(formula_str);
    } catch (error) {
      if (error instanceof SyntaxError) {
        result = "Syntax Error!";
        updateOutput(result);
        return;
      }
    }
    updateOutput(result);
    data.formula = [];
    data.operation = [];
    data.formula.push(result);
    data.operation.push(result);
    checkporm = 0;
  } else if (btn.type == "trigo_function") {
    data.operation.push(btn.symbol + "(");
    data.formula.push(btn.formula);
    updateOutput(data.operation.join(""));
  }
}

function search(aray:any[], keyword:string) {
  let search_result = [];
  aray.forEach((element, index) => {
    if (element == keyword) {
      search_result.push(index);
    }
  });
  return search_result;
}

function factorialNumberGetter(formula, FACTORIAL_SEARCH_RESULT) {
  let numbers = [];
  let factorial_sequence = 0;
  FACTORIAL_SEARCH_RESULT.forEach((factorial_index) => {
    let number = [];

    let next_index = factorial_index + 1;
    let next_input = formula[next_index];

    if (next_input == FACTORIAL) {
      factorial_sequence += 1;
      return;
    }
    let first_factorial_index = factorial_index - factorial_sequence;
    let previous_index = first_factorial_index - 1;

    let parenthesis_count = 0;

    while (previous_index >= 0) {
      if (formula[previous_index] == "(") parenthesis_count--;
      if (formula[previous_index] == ")") parenthesis_count++;

      let is_operator = false;
      operators.forEach((OPERATOR) => {
        if (formula[previous_index] == OPERATOR) is_operator = true;
      });

      if (is_operator && parenthesis_count == 0) break;

      number.unshift(formula[previous_index]);
      previous_index--;
    }
    let number_str = number.join("");
    const factorial = "factorial(",
      close_parenthesis = ")";
    let times = factorial_sequence + 1;
    let toReplace = number_str + FACTORIAL.repeat(times);
    let replacement =
      factorial.repeat(times) + number_str + close_parenthesis.repeat(times);

    numbers.push({
      toReplace: toReplace,
      replacement: replacement,
    });

    factorial_sequence = 0;
  });
  return numbers;
}

function powerBaseGetter(formula, POWER_SEARCH_RESULT) {
  let power_bases = [];
  POWER_SEARCH_RESULT.forEach((power_index) => {
    let base = [];
    let parenthesis_count = 0;
    let previous_index = power_index - 1;
    while (previous_index >= 0) {
      if (formula[previous_index] == "(") parenthesis_count--;
      if (formula[previous_index] == ")") parenthesis_count++;

      let is_operator = false;
      operators.forEach((OPERATOR) => {
        if (formula[previous_index] == OPERATOR) is_operator = true;
      });

      let is_power = formula[previous_index] == POWER;

      if ((is_operator && parenthesis_count == 0) || is_power) break;

      base.unshift(formula[previous_index]);
      previous_index--;
    }
    power_bases.push(base.join(""));
  });
  return power_bases;
}

function updateOutput(operation):void {
  display.value = operation;
}
let deg = true;
document.getElementById("deg").addEventListener("click", () => {
  const _deg: any = document.getElementById("deg");
  if (_deg.value == "DEG") {
    _deg.value = "RED";
    deg = !deg;
  } else {
    _deg.value = "DEG";
    deg = !deg;
  }
  console.log(deg);
});

function trigo(callback, angle) {
  if (!deg) {
    angle = (angle * Math.PI) / 100;
  }
  return callback(angle);
}

function inv_trigo(callback, value) {
  let angle = callback(value);
  if (!deg) {
    angle = (angle * 180) / Math.PI;
  }
  return angle;
}

function factorial(n) {
  if (n % 1 != 0) {
    return gamma(n);
  }
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function In(n) {
  return 2.303 * Math.log10(n);
}
function dms(num) {
  let deg = Math.floor(num);
  let m = Math.round((num - deg) * 60);
  let s = Math.round(((num - deg) * 60 - m) * 60);
  return `${deg}.${m}`;
}
function degg(num) {
  let p = 0;
  if (num - Math.floor(num) !== 0) {
    p = 5;
    console.log(true);
  }
  let deg = Math.floor(num);
  let m = ((num - deg) / 60) * 100;
  return deg + m;
}
// GAMMA FUNCTINON
function gamma(n) {
  // accurate to about 15 decimal places
  //some magic constants
  var g = 7, // g represents the precision desired, p is the values of p[i] to plug into Lanczos' formula
    p = [
      0.99999999999980993, 676.5203681218851, -1259.1392167224028,
      771.32342877765313, -176.61502916214059, 12.507343278686905,
      -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
    ];
  if (n < 0.5) {
    return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
  } else {
    n--;
    var x = p[0];
    for (var i = 1; i < g + 2; i++) {
      x += p[i] / (n + i);
    }
    var t = n + g + 0.5;
    return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
  }
}

//memory part
let memory = document.getElementById("memory");
let memarr = [];
let count_ms = 0;
let check = 0;
memory.addEventListener("click", (event: any) => {
  console.log(window.localStorage);
  switch (event.target.value) {
    //memory all clear
    case "MC":
      memarr = [];
      window.localStorage.clear();
      break;
    //memory recall
    case "MR":
      if (memarr.length != 0 && check == 0) {
        data.formula.push(memarr[memarr.length - 1]);
        data.operation.push(memarr[memarr.length - 1]);
        updateOutput(data.formula.join(""));
        check++;
      }
      break;
    //memory add
    case "M+":
      if (
        data.formula.length == 1 &&
        !(
          data.formula.join("").charCodeAt(0) >= 33 &&
          data.formula.join("").charCodeAt(0) <= 47
        )
      ) {
        memarr.push(data.formula[0]);
      }
      break;
    //memory substruct
    case "M-":
      memarr.pop();
      break;
    //memory store
    case "MS":
      memarr.map((item, index) => {
        // if (window.localStorage.length != 0) {
        //   index += window.localStorage.length;
        // }
        if (localStorage.getItem(`${index}`) == null) {
          let obj = {
            key: index,
            value: item,
          };
          window.localStorage.setItem(`${index}`, JSON.stringify(obj));
        }
      });
      console.log(window.localStorage);
      break;
  }
  setdim(memarr.length);
});

function setdim(isdim: number):void {
  let mc = document.getElementById(`mc`);
  let mr = document.getElementById(`mr`);
  if (isdim > 0) {
    mc.style.color = "black";
    mr.style.color = "black";
  } else {
    mc.style.color = "rgb(211, 211, 211)";
    mr.style.color = "rgb(211, 211, 211)";
  }
}

const fetchFromStorage = function ():void {
  setdim(memarr.length);
  const len = window.localStorage.length;
  for (let i = 0; i < len; i++) {
    let val = window.localStorage.getItem(`${i}`);
    let obj = JSON.parse(val);
    memarr.push(obj.value);
  }
  setdim(memarr.length);
  return;
};
