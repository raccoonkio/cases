let dateBirth = '';
let day = '';
let month = '';
let year = '';
const currentDate = new Date();

function checkDateBirth(){
    const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let weekDay = dateBirth.getDay();
    document.getElementById("weekDay").innerHTML = week[weekDay];
}
function checkLeapYear(){
    febriaryInBirth = new Date (year, 2, 0);
    result = (febriaryInBirth.getDate() > 28) ? "год был високостным" : "год не был високостным"
    document.getElementById("lear-year").innerHTML = year + " " + result;
}
function calculateAge(){
    let age = Math.floor((currentDate - dateBirth) / (24 * 3600 * 1000 * 365));
    document.getElementById('age').innerHTML = age;
}
function birthInStars(){
    let dateSrt = day + ':' + month + ":" + year;
    
    numStars = {
        0: ['***', '* *', '* *', '* *', '***'], //0
        1: ['  *', '  *', '  *', '  *', '  *'], //1
        2: ['***', '  *', '***', '*  ', '***'], //2
        3: ['***', '  *', ' **', '  *', '***'], //3
        4: ['* *', '* *', '***', '  *', '  *'], //4
        5: ['***', '*  ', '***', '  *', '***'], //5
        6: ['***', '*  ', '***', '* *', '***'], //6
        7: ['***', '  *', '  *', '  *', '  *'], //7
        8: ['***', '* *', '***', '* *', '***'], //8
        9: ['***', '* *', '***', '  *', '***'], //9
        ":": ['   ', '   ', '   ', '   ', ' * '], // :
    };
    let result = '';
    for (let i = 0; i < 5; i++){
        let resultStr = '';
        for (let j = 0; j < dateSrt.length; j++){
        resultStr = resultStr + numStars[dateSrt[j]][i] + ' ' ;
        }
        result = result + resultStr + '\r\n';
    }
    console.log(result);
    
}

function runCheckDateBirth(){
    day = parseInt(document.getElementById("day").value);
    month = parseInt(document.getElementById("month").value);
    year = parseInt(document.getElementById("year").value);
    dateBirth =  new Date (year, month - 1, day);
    monthOfBirth = new Date(year, month, 0);

    if (day === '' || month === '' || year === '' || day === NaN || month === NaN || year === NaN ){
        document.getElementById('result').innerHTML = 'поля ввода не должны быть пустыми и могут содержать только числа';
    } else if ( dateBirth > currentDate ) {
        document.getElementById('result').innerHTML = 'дата дня рождения не может превышать текущую дату';
    } else if ( day > monthOfBirth.getDate() ) {
        document.getElementById('result').innerHTML =  `вы ввели некоректную дату, в ${monthOfBirth.getMonth()}`;
    } else if ( month > 12){
        document.getElementById('result').innerHTML = 'Вы ввели в поле месяц число больше 12';
    } else {
        checkDateBirth();
        checkLeapYear();
        calculateAge();
        birthInStars();
    }
    
}



