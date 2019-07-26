// RANDOM PROFILE IMAGES

let maleImages = [
    "images/males/1.jpg",
    "images/males/2.jpg",
    "images/males/3.jpg",
    "images/males/4.jpg",
    "images/males/5.jpg",
    "images/males/6.jpg",
    "images/males/7.jpg",
    "images/males/8.jpg",
]

let femaleImages = [
    "images/females/1.jpg",
    "images/females/2.jpg",
    "images/females/3.jpg",
    "images/females/4.jpg",
    "images/females/5.jpg",
    "images/females/6.jpg",
    "images/females/7.jpg",
    "images/females/8.jpg",
];


// SHOW/HIDE

document.getElementById("cv").style.display = "none";


// PERSONAL INFO

let fullName = document.getElementById("full-name-input").value;
let profession = document.getElementById("profession-input");
let fatherName = document.getElementById("fathers-name-input");
let address = document.getElementById("address-input");
let dateOfBirth = document.getElementById("date-input");
let monthOfBirth = document.getElementById("month-input");
let yearOfBirth = document.getElementById("year-input");
let placeOfBirth = document.getElementById("date-of-place-input");
let martialStatus = document.getElementById("martial-output");
let mobileNumber = document.getElementById("number-input");
let email = document.getElementById("email-input");
let website = document.getElementById("web-input");
let hobby1 = document.getElementById("hobby-input-1");
let hobby2 = document.getElementById("hobby-input-2");
let hobby3 = document.getElementById("hobby-input-3");
let hobby4 = document.getElementById("hobby-input-4");
let hobby5 = document.getElementById("hobby-input-5");
let personalDiscription = document.getElementById("personal-discription-input");



function buildCV() {

    let fullName = document.getElementById("full-name-input").value;
    document.getElementById("full-name-output").value = (fullName);


    if (document.getElementById("male-radio").checked) {
        let randomindex = parseInt(Math.random() * maleImages.length);
        document.getElementById("image").src = maleImages[randomindex];
        document.getElementById("gender-output").innerHTML = ("Gender: Male");

    }else if(document.getElementById("female-radio").checked){
        let randomindex = parseInt(Math.random() * femaleImages.length);
        document.getElementById("image").src = femaleImages[randomindex];
        document.getElementById("gender-output").innerHTML = ("Gender: Female");
    }

    document.getElementById("full-name-output").innerHTML = (fullName);
    document.getElementById("profession-output").innerHTML = (profession.value);
    document.getElementById("fathers-name-output").innerHTML = (fatherName.value);
    document.getElementById("address-output").innerHTML = (address.value);
    document.getElementById("date-of-birth").innerHTML = (dateOfBirth.value + " - ");
    document.getElementById("month-of-birth").innerHTML = (monthOfBirth.value + " - ");
    document.getElementById("year-of-birth").innerHTML = (yearOfBirth.value);
    document.getElementById("date-of-place-output").innerHTML = (placeOfBirth.value);
    document.getElementById("number-output").innerHTML = ("Mobile no: " + mobileNumber.value);
    document.getElementById("email-output").innerHTML = ("Email: " + email.value);
    document.getElementById("web-output").innerHTML = ("Website: " + website.value);
    document.getElementById("hobby-output-1").innerHTML = (hobby1.value);
    document.getElementById("hobby-output-2").innerHTML = (hobby2.value);
    document.getElementById("hobby-output-3").innerHTML = (hobby3.value);
    document.getElementById("hobby-output-4").innerHTML = (hobby4.value);
    document.getElementById("hobby-output-5").innerHTML = (hobby5.value);
    document.getElementById("personal-discription-output").innerHTML = (personalDiscription.value);


    // SHOW/HIDE
    document.getElementById("builder").style.display = "none";
    document.getElementById("cv").style.display = "inline-block";


    if(document.getElementById("single-radio").checked){
        martialStatus.innerHTML = ("Martial Status : Single");
    } else if(document.getElementById("relationship-radio").checked){
        martialStatus.innerHTML = ("Martial Status : In a Relationship");
    } else if(document.getElementById("married-radio").checked){
        martialStatus.innerHTML = ("Martial Status : Married");
    }


    




}
