let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let billAmount = parseFloat(document.getElementById('bill_amount').value);
    let tipPercent = parseFloat(document.getElementById('tip_percent').value);
    let numberPeople = parseFloat(document.getElementById('number_people').value);

    let computedTip = billAmount / tipPercent;
    let totalAmount = document.getElementById('total_bill').value = billAmount / numberPeople + computedTip / numberPeople;
    let tipAmount = document.getElementById('tip_amount').value = computedTip;
})
