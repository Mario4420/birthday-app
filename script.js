year = {
    "January" : 31,
    "February" : 29,
    "March" : 31,
    "April" : 30,
    "May" : 31,
    "June" : 30,
    "July" : 31,
    "August" : 31,
    "September" : 30,
    "October" : 31,
    "November" : 30,
    "December" : 31
};

class Birthday{
    constructor(firstName, lastName, date){
        this.firstName = firstName;
        this.lastName = lastName;
        this.date = date;
    }
}

let containerLeft = document.getElementById("container-left");
let monthsDropdown = document.getElementById("months");
let enterBirthdayButton = document.getElementById("enter-birthday");
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let dayEntry = document.getElementById("day");

let birthdays = []

for(let month in year){
    let monthName = document.createElement("h1");
    monthName.innerHTML = month;
    let option = document.createElement("option");
    option.value = month;
    option.innerHTML = month;
    monthsDropdown.appendChild(option);
    containerLeft.appendChild(monthName);
    for(let i = 1; i <= year[month]; i++){
        let day = document.createElement("button");
        day.innerHTML = i;
        day.onclick = function(){
            alert("no birthday");
        }
        containerLeft.appendChild(day);
    }
}

enterBirthdayButton.onclick = function() {
    let day = dayEntry.value;
    let month = monthsDropdown.options[monthsDropdown.selectedIndex].value;

    if(day <= 0){
        alert("cant have negativ nor 0 days");
    }
    else if(month === "February" && day > 29){
        alert("not that many days in february");
    }
    else if(month === "April" || month === "June" || month === "Spetember" || month === "November" && day > 29){
        alert("April, June, Spetember or November dont have that many days");
    }
    else if(day > 31){
        alert("More than 31 days are not possible");
    }
    else{
        birthdays.push(new Birthday(
            firstName.value,
            lastName.value,
            [
                day,
                month
            ]
        ));
        console.log(birthdays[birthdays.length-1]);
    }
};