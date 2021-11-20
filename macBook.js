// taling every buttons from html --------------------------------------------------------------------------------

const memory8GB = button('memory8'); //memory 8GB
const memory16GB = button('memory16'); //memory 16GB
const storage256 = button('storage256'); //storage 256 GB
const storage512 = button('storage512'); //storage 512 GB
const storage1tb = button('storage1tb'); //storage 1TB
const delivery00 = button('delivery00'); //delivery charge 00
const delivery20 = button('delivery20'); //delivery charge 20

// inetial value of grossTotal --------------------------------------------------------------------------------------
document.getElementById('grossTotal').innerText = innerValue('basicPrice');
document.getElementById('netValue').innerText = innerValue('basicPrice');

// buttons for memery ----------------------------------------------------------------------------------------------
memory16GB.addEventListener('click', function(){
    document.getElementById('extraMemory').innerText = 180;
    grossAndNet();
});
memory8GB.addEventListener('click', function(){
    document.getElementById('extraMemory').innerText = 0;
    grossAndNet();
});

// buttons for storage ----------------------------------------------------------------------------------------------
storage256.addEventListener('click', function(){
    document.getElementById('extraStorage').innerText = 0;
    grossAndNet();
});
storage512.addEventListener('click', function(){
    document.getElementById('extraStorage').innerText = 100;
    grossAndNet();
});
storage1tb.addEventListener('click', function(){
    document.getElementById('extraStorage').innerText = 180;
    grossAndNet();
});

// button for deliveery ---------------------------------------------------------------------------------------------
delivery00.addEventListener('click', function(){
    document.getElementById('deliveryCharge').innerText = 0;
    grossAndNet();
});
delivery20.addEventListener('click', function(){
    document.getElementById('deliveryCharge').innerText = 20;
    grossAndNet();
});

// pomo code discount -----------------------------------------------------------------------------------------------
const btnPomo = button('btnPomo'); //pomo button
const pomoCode = document.getElementById('pomoCode'); //pomo Code inlput field

btnPomo.addEventListener('click',function(){
    if(pomoCode.value == 'stevekaku'){
        document.getElementById('netValue').innerText = totalValue()*0.8;
        pomoCode.value = '';
    }
});

// function for taking button ----------------------------------------------------------------------------------------
function button(buttonId){
    const buttonEle = document.getElementById(buttonId);
    return buttonEle;
}

// function for taking inner value as number -------------------------------------------------------------------------
function innerValue(innerTextId){
    const valueAsNumber = Number(document.getElementById(innerTextId).innerText);
    return valueAsNumber;
}

// function for total Price ------------------------------------------------------------------------------------------
function totalValue(){
    let Total = innerValue('basicPrice') + innerValue('extraMemory') + innerValue('extraStorage') + innerValue('deliveryCharge');
    return Total;
}

// function for gross and net value -----------------------------------------------------------------------------------
function grossAndNet(){
    document.getElementById('grossTotal').innerText = totalValue();
    document.getElementById('netValue').innerText = totalValue();
}
