A simple calculator app. It should have an input/ output field; ten numeral buttons; add, subtract, multiply and divide buttons; an “=” button, a “C” (clear) button, and a decimal point “.” button. No percent or any other functions. NO advanced features like exponentiation, logarithms, or trigonometric functions. Fixed decimal input, format output to two decimal places. Handle errors by displaying "error" in the input/output field. No calculator history or memory features.

```css
/* 6x4 CSS GRID Layout: */ 

.parent {
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 grid-template-rows: repeat(6, 1fr);
 grid-column-gap: 2px;
 grid-row-gap: 2px;
 }

 .div1 { grid-area: 1 / 1 / 2 / 5; }
 .div2 { grid-area: 2 / 1 / 3 / 2; }
 .div3 { grid-area: 2 / 2 / 3 / 3; }
 .div4 { grid-area: 2 / 3 / 3 / 4; }
 .div5 { grid-area: 2 / 4 / 3 / 5; }
 .div6 { grid-area: 3 / 1 / 4 / 2; }
 .div7 { grid-area: 3 / 2 / 4 / 3; }
 .div8 { grid-area: 3 / 3 / 4 / 4; }
 .div9 { grid-area: 3 / 4 / 5 / 5; }
 .div10 { grid-area: 5 / 4 / 7 / 5; }
 .div11 { grid-area: 4 / 1 / 5 / 2; }
 .div12 { grid-area: 4 / 2 / 5 / 3; }
 .div13 { grid-area: 4 / 3 / 5 / 4; }
 .div14 { grid-area: 5 / 1 / 6 / 2; }
 .div15 { grid-area: 5 / 2 / 6 / 3; }
 .div16 { grid-area: 5 / 3 / 6 / 4; }
 .div17 { grid-area: 6 / 1 / 7 / 3; }
 .div18 { grid-area: 6 / 3 / 7 / 4; }
 ```

div1: input/output field, div2: C button, div3: / button, div4: * button, div5:  - button, div6: 7 button, div7: 8 button, div8: 9 button, div9: + button, div10: = button, div11: 4 button, div12:  5 button, div13: 6 button, div14: 1 button, div15: 2 button, div16: 3 button, div17: 0 button, div18: . button. This mimics the numpad on an ordinary pc keyboard.

Make it work and make it look decent. Use vanilla Node.JS, Javascript, HTML, and CSS ONLY. No Express, only a Node server for localhost. DO NOT USE any 3rd party packages or APIs. No database or data persistence layer
