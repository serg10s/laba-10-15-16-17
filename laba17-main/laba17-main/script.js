function getCurrentTime() {
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();


    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'пʼятниця', 'субота'];
    var day = days[now.getDay()];

    var months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
    var month = months[now.getMonth()];

    var year = now.getFullYear();

    var formattedTime = hours + ":" + minutes + ":" + seconds;
    var formattedDate = day + ", " + now.getDate() + " " + month + " " + year + " року";

    console.log(formattedTime + ", " + formattedDate);
    return formattedTime + ", " + formattedDate;
}

getCurrentTime();
