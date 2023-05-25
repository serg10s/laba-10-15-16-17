let month = parseInt(prompt("nomer pls"));

if (month === 12 || month === 1 || month === 2){
    alert("Winter");
}
else if (month >=3 || month <= 5){
    alert("Spring");
}
else if (month >=6 || month <= 8){     
    alert("Summer");
}
else if (month >=9 || month <= 11){
    alert("Autumn");
};
switch (month){
    case 1:
        alert("January");
        break;
    case 2:
        alert("February");
        break;
    
    case 3:
        alert("march");
        break;

    case 4:
        alert("April");
        break;

    case 5:
        alert("May");
        break;

    case 6:
        alert("June");
        break;

    case 7:
        alert("July");
        break;
    case 8:
        alert("August");
         break;   
    case 9:
        alert("September");
        break;

    case 10:
        alert("October");
        break;
    case 11:
        alert("November");
        break;  
    case 12:
        alert("December");
        break;             
}