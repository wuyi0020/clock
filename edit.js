function openModal() {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
}

InputHour = $("#numberInputH")
InputMin = $("#numberInputM")
InputSec = $("#numberInputS")

function HourbtnUp() {
    let currentValue = InputHour[0].valueAsNumber;
    let Max = InputHour[0].max;
    let Min = InputHour[0].min;
    currentValue=currentValue+1;
    if (currentValue>=Max){
        currentValue=Min;
    };
    if(currentValue<10){
        InputHour[0].value =`0${currentValue}`;
    }else{
        InputHour[0].value = currentValue;
    };
};
function MinbtnUp() {
    let currentValue = InputMin[0].valueAsNumber;
    let Max = InputMin[0].max;
    let Min = InputMin[0].min;
    currentValue=currentValue+1;
    if (currentValue>=Max){
        currentValue=Min;
    };
    if(currentValue<10){
        InputMin[0].value =`0${currentValue}`;
    }else{
        InputMin[0].value = currentValue;
    };
};
function SecbtnUp() {
    let currentValue = InputSec[0].valueAsNumber;
    let Max = InputSec[0].max;
    let Min = InputSec[0].min;
    currentValue=currentValue+1;
    if (currentValue>=Max){
        currentValue=Min;
    };
    if(currentValue<10){
        InputSec[0].value =`0${currentValue}`;
    }else{
        InputSec[0].value = currentValue;
    };
};

function HourbtnDown() {
    let currentValue = InputHour[0].valueAsNumber;
    let Max = InputHour[0].max;
    let Min = InputHour[0].min;
    currentValue--;
    if (currentValue<Min){
        currentValue=Max
    };
    if(currentValue<10){
        InputHour[0].value =`0${currentValue}`;
    }else{
        InputHour[0].value = currentValue;
    };
};
function MinbtnDown() {
    let currentValue = InputMin[0].valueAsNumber;
    let Max = InputMin[0].max;
    let Min = InputMin[0].min;
    currentValue--;
    if (currentValue<Min){
        currentValue=Max
    };
    if(currentValue<10){
        InputMin[0].value =`0${currentValue}`;
    }else{
        InputMin[0].value = currentValue;
    };
};
function SecbtnDown() {
    let currentValue = InputSec[0].valueAsNumber;
    let Max = InputSec[0].max;
    let Min = InputSec[0].min;
    currentValue--;
    if (currentValue<Min){
        currentValue=Max
    };
    if(currentValue<10){
        InputSec[0].value =`0${currentValue}`;
    }else{
        InputSec[0].value = currentValue;
    };
};