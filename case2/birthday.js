
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value) - 1;
    const year = parseInt(document.getElementById("year").value);
    dateBirth = new Date (year, month, day);
    febriaryInBirthYear = new Date (year, 2, 0);

function checkDateBirth(){
    //const day = parseInt(document.getElementById("day").value);
    //const month = parseInt(document.getElementById("month").value) + 1;
    //const year = parseInt(document.getElementById("year").value);
    const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    //console.log(dateBirth);

    //let dateBirth = new Date (year, month, day);
    let weekDay = dateBirth.getDay();

    document.getElementById("weekDay").innerHTML = week[weekDay];

}
function checkLeapYear(){
    daysInFebriary = febriaryInBirthYear.getDate();
    if (daysInFebriary > 28) {
        document.getElementById("lear-year").innerHTML = year + "год был високостным";
    }
}

function runCheckDateBirth(){
    checkDateBirth();
    checkLeapYear();
}