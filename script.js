/* =========================================================
   PASS ACADEMY | PHYSICAL ACADEMY
   SSC / TCS PATTERN MOCK TEST
   100 QUESTIONS
   ========================================================= */

const EXAM_PASSWORD = "VST1";
const EXAM_DURATION_SECONDS = 90 * 60;

const SUBJECTS = [
    "Mathematics",
    "Reasoning",
    "GK",
    "Computer",
    "English",
    "Current Affairs"
];

const QUESTIONS_PER_SUBJECT = {
    Mathematics: 20,
    Reasoning: 20,
    GK: 20,
    Computer: 10,
    English: 20,
    "Current Affairs": 10
};


/* =========================================================
   QUESTION BANK
   KEEP YOUR EXISTING QUESTION ARRAYS HERE
   ========================================================= */

/*
   KEEP THESE FROM YOUR ORIGINAL SCRIPT.JS:

   const ENGLISH_PASSAGE = `...`;

   const MATHEMATICS_QUESTIONS = [ ... ];

   const REASONING_QUESTIONS = [ ... ];

   const GK_QUESTIONS = [ ... ];

   const COMPUTER_QUESTIONS = [ ... ];

   const ENGLISH_QUESTIONS = [ ... ];

   const CURRENT_AFFAIRS_QUESTIONS = [ ... ];
*/


const QUESTION_BANK = {
    Mathematics: MATHEMATICS_QUESTIONS,
    Reasoning: REASONING_QUESTIONS,
    GK: GK_QUESTIONS,
    Computer: COMPUTER_QUESTIONS,
    English: ENGLISH_QUESTIONS,
    "Current Affairs": CURRENT_AFFAIRS_QUESTIONS
};


/* =========================================================
   EXAM STATE
   ========================================================= */

let studentName = "";
let currentSubject = "Mathematics";
let currentQuestionIndex = 0;

let timeLeft = EXAM_DURATION_SECONDS;
let timerInterval = null;

let examSubmitted = false;

let answers = {};
let reviewStatus = {};

let subjectQuestionPositions = {};


/* =========================================================
   HELPERS
   ========================================================= */

function get(id) {
    return document.getElementById(id);
}


function initializeExamData() {

    answers = {};
    reviewStatus = {};
    subjectQuestionPositions = {};

    SUBJECTS.forEach(subject => {

        subjectQuestionPositions[subject] = 0;

        QUESTION_BANK[subject].forEach((question, index) => {

            const key = `${subject}_${index}`;

            answers[key] = null;
            reviewStatus[key] = false;

        });

    });
}


function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const page = get(pageId);

    if (page) {
        page.classList.add("active");
    }
}


/* =========================================================
   DATE / TIME
   ========================================================= */

function updateDateTime() {

    const element = get("currentDateTime");

    if (!element) return;

    const now = new Date();

    element.textContent = now.toLocaleString("en-IN", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}


/* =========================================================
   SUBJECT BUTTONS
   ========================================================= */

function renderSubjectButtons() {

    document.querySelectorAll(".subject-btn").forEach(button => {

        const subject = button.dataset.subject;

        button.classList.toggle(
            "active",
            subject === currentSubject
        );

        button.onclick = () => {

            if (examSubmitted) return;

            saveCurrentSubjectPosition();

            currentSubject = subject;
            currentQuestionIndex =
                subjectQuestionPositions[subject] || 0;

            renderSubjectButtons();
            renderQuestion();
            renderQuestionPalette();

            closePalette();

        };

    });

}


/* =========================================================
   SAVE POSITION
   ========================================================= */

function saveCurrentSubjectPosition() {

    subjectQuestionPositions[currentSubject] =
        currentQuestionIndex;

}


/* =========================================================
   GLOBAL QUESTION NUMBER
   ========================================================= */

function getGlobalQuestionNumber(subject, index) {

    let number = index + 1;

    for (const current of SUBJECTS) {

        if (current === subject) {
            break;
        }

        number += QUESTION_BANK[current].length;
    }

    return number;
}


/* =========================================================
   RENDER QUESTION
   ========================================================= */

function renderQuestion() {

    const questions = QUESTION_BANK[currentSubject];

    if (!questions || !questions.length) {
        return;
    }

    const question =
        questions[currentQuestionIndex];

    const globalNumber =
        getGlobalQuestionNumber(
            currentSubject,
            currentQuestionIndex
        );

    get("questionNumber").textContent =
        `Question ${globalNumber}`;

    let questionHTML = "";

    if (
        currentSubject === "English" &&
        currentQuestionIndex < 5 &&
        typeof ENGLISH_PASSAGE !== "undefined"
    ) {

        questionHTML += `
            <div class="english-passage">
                ${ENGLISH_PASSAGE}
            </div>
        `;

    }

    questionHTML += question.question;

    get("questionText").innerHTML = questionHTML;

    const container = get("optionsContainer");

    container.innerHTML = "";

    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.type = "button";
        button.className = "option";

        button.innerHTML = `
            <strong>
                ${String.fromCharCode(65 + index)}.
            </strong>
            ${option}
        `;

        const key =
            `${currentSubject}_${currentQuestionIndex}`;

        if (answers[key] === index) {
            button.classList.add("selected");
        }

        button.onclick = () => {

            if (examSubmitted) return;

            answers[key] = index;

            reviewStatus[key] = false;

            renderQuestion();

            renderQuestionPalette();

        };

        container.appendChild(button);

    });

    get("paletteSubject").textContent =
        currentSubject;

    updateNavigationButtons();

    const reviewButton = get("reviewBtn");

    if (reviewButton) {

        const key =
            `${currentSubject}_${currentQuestionIndex}`;

        reviewButton.textContent =
            reviewStatus[key]
                ? "Remove Review"
                : "Mark for Review";

    }

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function updateNavigationButtons() {

    const previousButton = get("previousBtn");
    const nextButton = get("nextBtn");

    previousButton.disabled =
        currentQuestionIndex === 0;

    nextButton.disabled =
        currentQuestionIndex ===
        QUESTION_BANK[currentSubject].length - 1;

}


function goToNextQuestion() {

    const total =
        QUESTION_BANK[currentSubject].length;

    if (currentQuestionIndex < total - 1) {

        currentQuestionIndex++;

        saveCurrentSubjectPosition();

        renderQuestion();
        renderQuestionPalette();

    }

}


function goToPreviousQuestion() {

    if (currentQuestionIndex > 0) {

        currentQuestionIndex--;

        saveCurrentSubjectPosition();

        renderQuestion();
        renderQuestionPalette();

    }

}


/* =========================================================
   CLEAR
   ========================================================= */

function clearCurrentAnswer() {

    const key =
        `${currentSubject}_${currentQuestionIndex}`;

    answers[key] = null;

    renderQuestion();
    renderQuestionPalette();

}


/* =========================================================
   REVIEW
   ========================================================= */

function toggleReview() {

    const key =
        `${currentSubject}_${currentQuestionIndex}`;

    reviewStatus[key] =
        !reviewStatus[key];

    renderQuestion();
    renderQuestionPalette();

}


/* =========================================================
   QUESTION PALETTE
   ========================================================= */

function renderQuestionPalette() {

    const container =
        get("questionNumbers");

    container.innerHTML = "";

    const questions =
        QUESTION_BANK[currentSubject];

    questions.forEach((question, index) => {

        const button =
            document.createElement("button");

        button.type = "button";
        button.className = "question-number";

        button.textContent =
            getGlobalQuestionNumber(
                currentSubject,
                index
            );

        const key =
            `${currentSubject}_${index}`;

        if (answers[key] !== null) {
            button.classList.add("answered");
        }

        if (reviewStatus[key]) {
            button.classList.add("review");
        }

        if (index === currentQuestionIndex) {
            button.classList.add("current");
        }

        button.onclick = () => {

            currentQuestionIndex = index;

            saveCurrentSubjectPosition();

            renderQuestion();
            renderQuestionPalette();

        };

        container.appendChild(button);

    });

}


/* =========================================================
   MOBILE PALETTE
   ========================================================= */

function openPalette() {

    get("questionPalette")
        .classList.add("mobile-open");

    get("paletteOverlay")
        .classList.add("show");

}


function closePalette() {

    get("questionPalette")
        .classList.remove("mobile-open");

    get("paletteOverlay")
        .classList.remove("show");

}


/* =========================================================
   TIMER
   ========================================================= */

function updateTimer() {

    const timer = get("timer");

    if (!timer) return;

    const hours =
        Math.floor(timeLeft / 3600);

    const minutes =
        Math.floor((timeLeft % 3600) / 60);

    const seconds =
        timeLeft % 60;

    timer.textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;

    if (timeLeft <= 300) {
        timer.style.background = "#dc2626";
    }

}


function startTimer() {

    clearInterval(timerInterval);

    timerInterval =
        setInterval(() => {

            if (examSubmitted) {
                clearInterval(timerInterval);
                return;
            }

            timeLeft--;

            updateTimer();

            if (timeLeft <= 0) {

                clearInterval(timerInterval);

                submitExam(true);

            }

        }, 1000);

}


/* =========================================================
   FULLSCREEN
   ========================================================= */

function enterFullscreen() {

    const element = document.documentElement;

    if (!document.fullscreenElement &&
        element.requestFullscreen) {

        element.requestFullscreen().catch(() => {});

    }

}


/* =========================================================
   START EXAM
   ========================================================= */

function startExam() {

    const name =
        get("studentName").value.trim();

    const password =
        get("examPassword").value.trim();

    const error =
        get("loginError");

    error.textContent = "";

    if (!name) {

        error.textContent =
            "Please enter your full name.";

        get("studentName").focus();

        return;
    }

    if (password !== EXAM_PASSWORD) {

        error.textContent =
            "Incorrect examination password.";

        get("examPassword").focus();

        return;
    }

    studentName = name;

    examSubmitted = false;

    initializeExamData();

    currentSubject = "Mathematics";
    currentQuestionIndex = 0;

    timeLeft = EXAM_DURATION_SECONDS;

    get("displayedStudentName").textContent =
        studentName;

    updateTimer();

    showPage("examPage");

    renderSubjectButtons();
    renderQuestion();
    renderQuestionPalette();

    startTimer();

    enterFullscreen();

    protectExamHistory();

}


/* =========================================================
   SUBMIT MODAL
   ========================================================= */

function openSubmitModal() {

    get("submitModal")
        .classList.add("show");

}


function closeSubmitModal() {

    get("submitModal")
        .classList.remove("show");

}


/* =========================================================
   RESULT CALCULATION
   ========================================================= */

function calculateResult() {

    let correct = 0;
    let wrong = 0;
    let notAttempted = 0;

    const sectionResults = {};

    SUBJECTS.forEach(subject => {

        let sectionCorrect = 0;
        let sectionWrong = 0;
        let sectionNotAttempted = 0;

        QUESTION_BANK[subject].forEach(
            (question, index) => {

                const key =
                    `${subject}_${index}`;

                const selected =
                    answers[key];

                if (selected === null) {

                    notAttempted++;
                    sectionNotAttempted++;

                } else if (
                    selected === question.answer
                ) {

                    correct++;
                    sectionCorrect++;

                } else {

                    wrong++;
                    sectionWrong++;

                }

            }
        );

        sectionResults[subject] = {
            correct: sectionCorrect,
            wrong: sectionWrong,
            notAttempted: sectionNotAttempted,
            total: QUESTION_BANK[subject].length
        };

    });

    return {
        correct,
        wrong,
        notAttempted,
        marks: correct,
        percentage: correct,
        sectionResults
    };

}


/* =========================================================
   DISPLAY RESULT
   ========================================================= */

function displayResult() {

    const result =
        calculateResult();

    get("finalStudentName").textContent =
        studentName;

    get("totalMarks").textContent =
        `${result.marks} / 100`;

    get("correctAnswers").textContent =
        result.correct;

    get("wrongAnswers").textContent =
        result.wrong;

    get("notAttempted").textContent =
        result.notAttempted;

    get("percentage").textContent =
        `${result.percentage}%`;

    renderSectionResults(result.sectionResults);

    renderReview();

    saveResultForRank(result);

    showPage("resultPage");

}


/* =========================================================
   SECTION RESULTS
   ========================================================= */

function renderSectionResults(sectionResults) {

    const container =
        get("sectionResults");

    container.innerHTML = "";

    SUBJECTS.forEach(subject => {

        const result =
            sectionResults[subject];

        const div =
            document.createElement("div");

        div.className = "section-result";

        div.innerHTML = `
            <strong>${subject}</strong>
            <br>
            Correct: ${result.correct}
            &nbsp; | &nbsp;
            Wrong: ${result.wrong}
            &nbsp; | &nbsp;
            Not Attempted: ${result.notAttempted}
            &nbsp; | &nbsp;
            Total: ${result.total}
        `;

        container.appendChild(div);

    });

}


/* =========================================================
   DETAILED REVIEW
   ========================================================= */

function renderReview() {

    const container =
        get("reviewAnswers");

    container.innerHTML = "";

    let globalNumber = 0;

    SUBJECTS.forEach(subject => {

        QUESTION_BANK[subject].forEach(
            (question, index) => {

                globalNumber++;

                const key =
                    `${subject}_${index}`;

                const selected =
                    answers[key];

                const item =
                    document.createElement("div");

                let statusClass =
                    "unattempted";

                let statusText =
                    "Not Attempted";

                if (selected !== null) {

                    if (selected === question.answer) {

                        statusClass = "correct";
                        statusText = "Correct";

                    } else {

                        statusClass = "wrong";
                        statusText = "Wrong";

                    }

                }

                let selectedText =
                    selected === null
                        ? "Not Attempted"
                        : question.options[selected];

                const correctText =
                    question.options[question.answer];

                item.className =
                    `review-item ${statusClass}`;

                item.innerHTML = `
                    <strong>
                        Q${globalNumber}. ${subject}
                    </strong>

                    <p style="margin:8px 0">
                        ${question.question}
                    </p>

                    <div>
                        Your Answer:
                        <strong>${selectedText}</strong>
                    </div>

                    <div>
                        Correct Answer:
                        <strong>${correctText}</strong>
                    </div>

                    <div style="margin-top:6px">
                        Status:
                        <strong>${statusText}</strong>
                    </div>
                `;

                container.appendChild(item);

            }
        );

    });

}


/* =========================================================
   LOCAL RANK DATA
   ========================================================= */

function saveResultForRank(result) {

    const key =
        "pass_academy_mock_test_results";

    const oldResults =
        JSON.parse(
            localStorage.getItem(key) || "[]"
        );

    oldResults.push({
        name: studentName,
        marks: result.marks,
        percentage: result.percentage,
        date: new Date().toISOString()
    });

    oldResults.sort(
        (a, b) => b.marks - a.marks
    );

    localStorage.setItem(
        key,
        JSON.stringify(oldResults.slice(0, 50))
    );

}


/* =========================================================
   SUBMIT
   ========================================================= */

function submitExam(autoSubmit = false) {

    if (examSubmitted) return;

    if (autoSubmit) {

        confirmSubmission();

        return;

    }

    openSubmitModal();

}


function confirmSubmission() {

    if (examSubmitted) return;

    examSubmitted = true;

    clearInterval(timerInterval);

    closeSubmitModal();

    displayResult();

}


/* =========================================================
   BROWSER BACK PROTECTION
   ========================================================= */

function protectExamHistory() {

    history.pushState(
        { examActive: true },
        "",
        location.href
    );

}


window.addEventListener(
    "popstate",
    function () {

        if (
            get("examPage").classList.contains("active") &&
            !examSubmitted
        ) {

            history.pushState(
                { examActive: true },
                "",
                location.href
            );

            /*
             * Back button automatically submits
             * the examination.
             */

            confirmSubmission();

        }

    }
);


/* =========================================================
   BEFORE UNLOAD
   ========================================================= */

window.addEventListener(
    "beforeunload",
    function (event) {

        if (
            get("examPage").classList.contains("active") &&
            !examSubmitted
        ) {

            event.preventDefault();
            event.returnValue = "";

        }

    }
);


/* =========================================================
   RIGHT CLICK PROTECTION
   ========================================================= */

document.addEventListener(
    "contextmenu",
    function (event) {

        if (
            get("examPage") &&
            get("examPage").classList.contains("active")
        ) {

            event.preventDefault();

        }

    }
);


/* =========================================================
   KEYBOARD NAVIGATION
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            !get("examPage").classList.contains("active") ||
            examSubmitted
        ) {
            return;
        }

        if (
            event.target.tagName === "INPUT" ||
            event.target.tagName === "TEXTAREA"
        ) {
            return;
        }

        if (event.key === "ArrowRight") {

            goToNextQuestion();

        }

        if (event.key === "ArrowLeft") {

            goToPreviousQuestion();

        }

    }
);


/* =========================================================
   STARTUP
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDateTime();

        setInterval(
            updateDateTime,
            1000
        );


        get("startHomeBtn").onclick =
            function () {

                showPage("loginPage");

                setTimeout(() => {
                    get("studentName").focus();
                }, 100);

            };


        get("startExamBtn").onclick =
            startExam;


        get("examPassword").addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {
                    startExam();
                }

            }
        );


        get("studentName").addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {
                    get("examPassword").focus();
                }

            }
        );


        get("previousBtn").onclick =
            goToPreviousQuestion;


        get("nextBtn").onclick =
            goToNextQuestion;


        get("clearBtn").onclick =
            clearCurrentAnswer;


        get("reviewBtn").onclick =
            toggleReview;


        get("openPaletteBtn").onclick =
            openPalette;


        get("closePaletteBtn").onclick =
            closePalette;


        get("paletteOverlay").onclick =
            closePalette;


        get("submitBtn").onclick =
            () => submitExam(false);


        get("cancelSubmitBtn").onclick =
            closeSubmitModal;


        get("confirmSubmitBtn").onclick =
            confirmSubmission;


        get("fullscreenBtn").onclick =
            enterFullscreen;


        renderSubjectButtons();

    }
);
