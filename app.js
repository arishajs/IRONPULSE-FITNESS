function filterClasses(category) {

    const cards = document.querySelectorAll(".class-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    event.target.classList.add("active");

    cards.forEach(card => {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}



function calculateBMI() {

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight === "" || height === "") {

        alert("Please enter your weight and height.");

        return;
    }

    height = height / 100;

    let bmi = weight / (height * height);

    bmi = bmi.toFixed(1);

    document.getElementById("bmiValue").innerText = bmi;


    let category = "";

    if (bmi < 18.5) {

        category = "Underweight";

    } else if (bmi >= 18.5 && bmi <= 24.9) {

        category = "Healthy Weight";

    } else if (bmi >= 25 && bmi <= 29.9) {

        category = "Overweight";

    } else {

        category = "Obesity";
    }


    document.getElementById("bmiCategory").innerText =
        "Category: " + category;

}


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("formMessage").innerText =
        "Thank you! Your message has been sent successfully.";

    contactForm.reset();

});



