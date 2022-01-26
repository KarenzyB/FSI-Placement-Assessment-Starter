let yourName = "Karen Borbor"

// selecting the element with an id of credit
let credit = document.querySelector('#credit')

// We'll use these variables to track the counts of each cookie type 

//create an array
let cookies = [
    gb = 0,
    cc = 0,
    sugar = 0
]
// let gb = 0 // Gingerbread
// let cc = 0 // Chocolate Chip
// let sugar = 0 // Sugar Sprinkle


//gb button and totals

let gbPlusBtn = document.querySelector('#add-gb')
let gbMinusBtn = document.querySelector('#minus-gb')

gbPlusBtn.addEventListener('click', function() {
    gb = gb + 1;
    document.querySelector('#qty-total').textContent = gb + cc + sugar;
    document.querySelector('#qty-gb').textContent = gb;

})
gbMinusBtn.addEventListener('click', function() {
        gb = gb - 1;
        if (gb < 0) gb=0
        document.querySelector('#qty-total').textContent = gb + cc + sugar;
        document.querySelector('#qty-gb').textContent = gb;
    
})

//cc buttons and totals
let ccPlusBtn = document.querySelector('#add-cc')
let ccMinusBtn = document.querySelector('#minus-cc')

ccPlusBtn.addEventListener('click', function() {
    cc = cc + 1;
    document.querySelector('#qty-total').textContent = gb + cc + sugar;
    document.querySelector('#qty-cc').textContent = cc;

})
ccMinusBtn.addEventListener('click', function() {
    cc = cc - 1;
    if (cc < 0) cc=0;
    document.querySelector('#qty-total').textContent = gb + cc + sugar;
    document.querySelector('#qty-cc').textContent = cc;

})

//sugar buttons and totals
let sugarPlusBtn = document.querySelector('#add-sugar')
let sugarMinusBtn = document.querySelector('#minus-sugar')

sugarPlusBtn.addEventListener('click', function() {
    sugar = sugar + 1;
    document.querySelector('#qty-total').textContent = gb + cc + sugar;
    document.querySelector('#qty-sugar').textContent = sugar;

})
sugarMinusBtn.addEventListener('click', function() {
    sugar = sugar - 1;
    if (sugar < 0) sugar = 0
    document.querySelector('#qty-total').textContent = gb + cc + sugar;
    document.querySelector('#qty-sugar').textContent = sugar;
})

// Code to update name display
document.querySelector('#credit').textContent =  `Created by ${yourName}`;

//document.querySelector('#qty-total').textContent = sum+=cookies;
//for loop for sum?