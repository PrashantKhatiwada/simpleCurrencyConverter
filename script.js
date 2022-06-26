const currencyFrom = document.getElementById('countries-from');
const currencyTo = document.getElementById('countries-to');
const amountFrom = document.getElementById('amountOne');
const amountTo = document.getElementById('amountTwo');
const swapbtn = document.getElementById('swapbtn');
const rate = document.getElementById('rate');

// fetch currency rates and update dom

function calculate() {
    const currencyToConvert = currencyFrom.value;
    const currencyConverted = currencyTo.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/8a3b467f58362e4dd2783656/latest/${currencyToConvert}`)
    .then(res=>res.json())
    .then(data => {
        // console.log(data);
        const ratenum = data.conversion_rates[currencyConverted]; 
        rate.innerText=`1 ${currencyToConvert} = ${ratenum} ${currencyConverted}`;
        amountTo.value=(amountFrom.value * ratenum);
    });
}
calculate();

currencyFrom.addEventListener('change',calculate);
currencyTo.addEventListener('change',calculate);
amountFrom.addEventListener('input',calculate);
amountTo.addEventListener('input',calculate);

swapbtn.addEventListener('click',()=>{
    var temp = currencyFrom.value;
    currencyFrom.value=currencyTo.value;
    currencyTo.value=temp;
    calculate();
})
// function onclickTransform(){
//     swapbtn.style.transform="translateY(5px)";
// }


