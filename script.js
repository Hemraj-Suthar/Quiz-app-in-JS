const qBank = [
    {
        id: 1,
        question: "What is the capital of Haryana?",
        options: ["Yamunanagar", "Panipat", "Gurgaon", "Chandigarh"],
        answer: "Chandigarh",
    },
    {
        id: 2,
        question: "What is the capital of Punjab?",
        options: ["Patiala", "Ludhiana", "Amritsar", "Chandigarh"],
        answer: "Chandigarh",
    },
    {
        id: 3,
        question: "What is the capital of India?",
        options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        answer: "Delhi"
    },
    {
        id: 4,
        question: "What is the capital of Uttarakhad?",
        options: ["Roorkee", "Haridwar", "Dehradun", "Nanital"],
        answer: "Dehradun"
    },
    {
        id: 5,
        question: "What is capital of Uttar Pradesh?",
        options: ["GB Nagar", "Lucknow", "Prayagraj", "Agra"],
        answer: "Lucknow"
    },
];

let currentQueIndex = 0;
let result = 0;
const quiz_container = document.getElementById("quiz-container");

function showQuestion(index) {
    if (index < qBank.length) {
        const element = qBank[index];

        quiz_container.innerHTML =  `
            <div class="que${element.id}">
                <div class="question">${element.question}</div>
                <div class="options">
                    ${element.options.map((option, i) => `
                        <div>
                            <input type="radio" id="option${i}" name="option" value="${option}" class="option">
                            <label for="option${i}">${option}</label>
                        </div>
                    `).join("")}
                </div>
                <button id="submit" type="submit">Submit</button>
            </div>
        `;

        document.getElementById("submit").addEventListener("click", function() {
            const selectedOption = document.querySelector('input[name="option"]:checked');
            if (selectedOption) {
                const answer = selectedOption.value;
                if (answer == element.answer) {
                    result++;
                }
                currentQueIndex++;
                showQuestion(currentQueIndex);
            } else {
                alert("Please select option");
            }
        });
    } else {
        quiz_container.innerHTML = `<div class="result">Your result is ${result} out of 5!</div>`;
    }
}

showQuestion(currentQueIndex);