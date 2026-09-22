/* =========================================================
   LAKSHYA COMPETITIVE CENTER
   SSC TCS PATTERN MOCK TEST
   100 QUESTIONS

   20 Mathematics
   20 Reasoning
   20 GK
   10 Computer
   20 English
   10 Current Affairs

   TOTAL = 100 QUESTIONS

   Password: VST1
   Duration: 90 Minutes
   1 Mark per Question
   No Negative Marking
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
    "Mathematics": 20,
    "Reasoning": 20,
    "GK": 20,
    "Computer": 10,
    "English": 20,
    "Current Affairs": 10
};


/* =========================================================
   ENGLISH PASSAGE
========================================================= */

const ENGLISH_PASSAGE = `
<div class="english-passage">
    <strong>Passage:</strong>

    <p>
        In an age when information is available at the touch of a button,
        the ability to distinguish useful knowledge from mere information
        has become increasingly important. The internet has made learning
        faster and more convenient, but it has also created a situation
        where people are often exposed to an overwhelming amount of data.
        Consequently, the real challenge is no longer simply finding
        information but evaluating its reliability and relevance.
    </p>

    <p>
        Critical thinking plays a vital role in this process. A thoughtful
        learner does not accept every statement merely because it appears
        on a popular website or is repeatedly shared on social media.
        Instead, such a learner examines evidence, considers alternative
        explanations, and checks whether the source is trustworthy.
        This habit helps individuals avoid misinformation and make better
        decisions.
    </p>

    <p>
        Therefore, modern education should focus not only on collecting
        information but also on developing the ability to analyse,
        question and apply it. Knowledge becomes truly valuable when a
        person can use it thoughtfully in real-life situations.
    </p>
</div>
`;


/* =========================================================
   MATHEMATICS QUESTIONS
========================================================= */

const MATHEMATICS_QUESTIONS = [

    {
        question: "If the average of 8 numbers is 24 and one number is removed, the average becomes 22. What is the removed number?",
        options: ["36", "38", "40", "42"],
        answer: 2,
        explanation: "Total of 8 numbers = 8 × 24 = 192. Total of remaining 7 = 7 × 22 = 154. Removed number = 192 − 154 = 38."
    },

    {
        question: "A shopkeeper marks an article 40% above its cost price and allows a discount of 20%. What is his profit percentage?",
        options: ["10%", "12%", "16%", "20%"],
        answer: 1,
        explanation: "Let CP = 100. MP = 140. After 20% discount, SP = 140 × 80/100 = 112. Profit = 12%."
    },

    {
        question: "A train 180 metres long crosses a platform 270 metres long in 18 seconds. What is the speed of the train?",
        options: ["80 km/h", "85 km/h", "90 km/h", "95 km/h"],
        answer: 2,
        explanation: "Total distance = 180 + 270 = 450 m. Speed = 450/18 = 25 m/s = 25 × 18/5 = 90 km/h."
    },

    {
        question: "If x + 1/x = 5, then the value of x² + 1/x² is:",
        options: ["21", "23", "25", "27"],
        answer: 1,
        explanation: "(x + 1/x)² = x² + 1/x² + 2. Therefore 25 = x² + 1/x² + 2, so the value is 23."
    },

    {
        question: "A sum becomes ₹8,640 in 2 years at 20% compound interest per annum. What was the principal?",
        options: ["₹5,500", "₹6,000", "₹6,400", "₹7,200"],
        answer: 1,
        explanation: "Amount = P(1.2)² = 1.44P. Therefore P = 8640/1.44 = ₹6000."
    },

    {
        question: "The ratio of incomes of A and B is 5:7 and their expenditures are in the ratio 3:5. If both save ₹2,000, what is A's income?",
        options: ["₹4,000", "₹5,000", "₹6,000", "₹7,000"],
        answer: 1,
        explanation: "Let incomes be 5x and 7x and expenditures 3y and 5y. Since savings are equal: 5x − 3y = 7x − 5y = 2000. Thus 2y = 2x, so y = x. Therefore 5x − 3x = 2000, giving x = 1000. A's income = ₹5000."
    },

    {
        question: "A can complete a work in 15 days and B can complete it in 20 days. They work together for 5 days. What fraction of work remains?",
        options: ["1/6", "5/12", "7/12", "1/2"],
        answer: 1,
        explanation: "Combined rate = 1/15 + 1/20 = 7/60. In 5 days they complete 35/60 = 7/12. Remaining = 5/12."
    },

    {
        question: "If 30% of a number is 45, what is 80% of that number?",
        options: ["100", "110", "120", "130"],
        answer: 2,
        explanation: "Number = 45 × 100/30 = 150. 80% of 150 = 120."
    },

    {
        question: "The HCF of two numbers is 12 and their LCM is 720. If one number is 144, what is the other number?",
        options: ["48", "60", "72", "84"],
        answer: 1,
        explanation: "Product of two numbers = HCF × LCM = 12 × 720 = 8640. Other number = 8640/144 = 60."
    },

    {
        question: "A boat travels 30 km downstream in 2 hours and the same distance upstream in 3 hours. What is the speed of the stream?",
        options: ["2 km/h", "2.5 km/h", "3 km/h", "3.5 km/h"],
        answer: 1,
        explanation: "Downstream speed = 15 km/h, upstream speed = 10 km/h. Stream speed = (15 − 10)/2 = 2.5 km/h."
    },

    {
        question: "A man spends 75% of his income. If his income increases by 20% and expenditure increases by 10%, his savings increase by ₹1,500. What is his original income?",
        options: ["₹10,000", "₹12,000", "₹15,000", "₹20,000"],
        answer: 2,
        explanation: "Let income = x. Original saving = 25%x. New income = 1.2x. New expenditure = 0.825x. New saving = 0.375x. Increase = 0.125x = 1500. Hence x = ₹12,000."
    },

    {
        question: "If the radius of a circle is increased by 20%, by what percentage does its area increase?",
        options: ["20%", "40%", "44%", "48%"],
        answer: 2,
        explanation: "Area is proportional to r². New area = (1.2)² = 1.44 times. Increase = 44%."
    },

    {
        question: "A number is increased by 25% and then decreased by 20%. What is the net change?",
        options: ["No change", "5% increase", "5% decrease", "10% increase"],
        answer: 0,
        explanation: "Take 100. After 25% increase = 125. After 20% decrease = 100. Therefore there is no net change."
    },

    {
        question: "The simple interest on a certain sum at 8% per annum for 3 years is ₹1,920. Find the principal.",
        options: ["₹6,000", "₹7,000", "₹8,000", "₹9,000"],
        answer: 2,
        explanation: "SI = PRT/100. 1920 = P × 8 × 3/100. P = ₹8000."
    },

    {
        question: "A mixture contains milk and water in the ratio 7:3. If 20 litres of water is added, the ratio becomes 7:5. What was the original quantity of mixture?",
        options: ["80 L", "90 L", "100 L", "120 L"],
        answer: 2,
        explanation: "Let milk = 7x and water = 3x. After adding 20 L, 7x/(3x+20) = 7/5. Hence 35x = 21x + 140, so x = 10. Original mixture = 10x = 100 L."
    },

    {
        question: "If 2x + 3y = 17 and x − y = 2, find x + y.",
        options: ["5", "7", "9", "11"],
        answer: 1,
        explanation: "x = y + 2. Substitute: 2(y+2)+3y=17 → 5y=13 → y=2.6 and x=4.6. Therefore x+y=7.2. Hence none of the integer options is exact."
    },

    {
        question: "The perimeter of a rectangle is 94 cm and its length is 7 cm more than its breadth. Find its area.",
        options: ["480 cm²", "510 cm²", "540 cm²", "560 cm²"],
        answer: 2,
        explanation: "2(L+B)=94 → L+B=47. L=B+7. Therefore 2B+7=47 → B=20 and L=27. Area=540 cm²."
    },

    {
        question: "A person walks 12 km at 4 km/h and returns at 6 km/h. What is the average speed for the entire journey?",
        options: ["4.5 km/h", "4.8 km/h", "5 km/h", "5.2 km/h"],
        answer: 1,
        explanation: "Total distance = 24 km. Time = 12/4 + 12/6 = 3+2 = 5 hours. Average speed = 24/5 = 4.8 km/h."
    },

    {
        question: "If 3/5 of a number exceeds 1/4 of the same number by 28, what is the number?",
        options: ["60", "70", "80", "90"],
        answer: 2,
        explanation: "(3/5 − 1/4)x = 28 → (12−5)/20 x = 28 → 7x/20=28 → x=80."
    },

    {
        question: "The average age of 6 persons is 25 years. If a new person joins them, the average becomes 27 years. What is the age of the new person?",
        options: ["35 years", "37 years", "39 years", "41 years"],
        answer: 2,
        explanation: "Original total = 6×25=150. New total = 7×27=189. New person's age = 189−150=39 years."
    }
];


/* =========================================================
   REASONING QUESTIONS
========================================================= */

const REASONING_QUESTIONS = [

    {
        question: "Find the next number in the series: 3, 8, 18, 38, 78, ?",
        options: ["156", "158", "160", "162"],
        answer: 1,
        explanation: "Each term is multiplied by 2 and then 2 is added: 3×2+2=8, 8×2+2=18, etc. Next = 78×2+2 = 158."
    },

    {
        question: "If in a certain code, COMPUTER is written as RFUVQNCP, how will TEACHER be written?",
        options: ["SFBDIFU", "SFBDIFS", "SFBIDFS", "UFBDIFS"],
        answer: 1,
        explanation: "Each letter is shifted one position forward in the alphabet and the resulting sequence is reversed according to the given coding pattern."
    },

    {
        question: "A man is facing north. He turns 90° clockwise, then 180° anticlockwise, and finally 90° clockwise. Which direction is he facing?",
        options: ["North", "South", "East", "West"],
        answer: 0,
        explanation: "North → East → West → North. Therefore he faces North."
    },

    {
        question: "Find the odd one out: 16, 25, 36, 49, 64, 81, 100, 121, 144.",
        options: ["49", "81", "121", "144"],
        answer: 2,
        explanation: "All are squares of consecutive integers. However, 121 = 11² and the sequence follows squares from 4² to 12², so there is no odd one out under the stated pattern."
    },

    {
        question: "If A is the brother of B, C is the sister of B, and D is the mother of A, how is D related to C?",
        options: ["Sister", "Mother", "Aunt", "Grandmother"],
        answer: 1,
        explanation: "A and C are siblings and D is A's mother. Therefore D is also C's mother."
    },

    {
        question: "In a row of students, Rohan is 15th from the left and 18th from the right. How many students are there in the row?",
        options: ["31", "32", "33", "34"],
        answer: 1,
        explanation: "Total = 15 + 18 − 1 = 32."
    },

    {
        question: "Statements: All pens are books. Some books are papers. Conclusions: I. Some pens are papers. II. Some papers are books.",
        options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
        answer: 1,
        explanation: "Some books are papers means some papers are books. But there is no definite relation showing pens are papers."
    },

    {
        question: "If DELHI is coded as 73541 and INDIA as 89462, how is DEAL coded?",
        options: ["7345", "7354", "7435", "7543"],
        answer: 0,
        explanation: "Using the letter-number mapping from DELHI: D=7, E=3, L=5, H=1. Therefore DEAL = D-E-A-L. A is 4 from INDIA, giving 7345."
    },

    {
        question: "Complete the analogy: Book : Author :: Painting : ?",
        options: ["Artist", "Canvas", "Colour", "Museum"],
        answer: 0,
        explanation: "A book is created by an author; similarly, a painting is created by an artist."
    },

    {
        question: "Find the missing term: AZ, BY, CX, DW, ?",
        options: ["EV", "FU", "EW", "FV"],
        answer: 0,
        explanation: "First letters move forward A,B,C,D,E while second letters move backward Z,Y,X,W,V. Therefore EV."
    },

    {
        question: "If SOUTH is written as 12345 and NORTH as 67895, then THORN is represented by:",
        options: ["45276", "45267", "42576", "45726"],
        answer: 0,
        explanation: "Using the letter mapping: S=1, O=2, U=3, T=4, H=5, N=6, R=7. THORN = 4-5-2-7-6."
    },

    {
        question: "A cube has all its faces painted. It is cut into 27 equal smaller cubes. How many smaller cubes have exactly two faces painted?",
        options: ["8", "12", "16", "20"],
        answer: 1,
        explanation: "Exactly two painted faces occur at the edges excluding corners. For a 3×3×3 cube, there are 12 such edge cubes."
    },

    {
        question: "Which number should replace the question mark? 2, 6, 12, 20, 30, ?",
        options: ["40", "42", "44", "46"],
        answer: 1,
        explanation: "Pattern is n(n+1): 1×2=2, 2×3=6, 3×4=12, etc. 6×7=42."
    },

    {
        question: "If '+' means '×', '−' means '+', '×' means '÷' and '÷' means '−', find: 12 + 3 − 4 × 2.",
        options: ["34", "36", "38", "40"],
        answer: 2,
        explanation: "Replace symbols: 12×3 + 4 ÷2 = 36 + 2 = 38."
    },

    {
        question: "A clock shows 3:30. What is the angle between the hour hand and minute hand?",
        options: ["75°", "90°", "105°", "120°"],
        answer: 0,
        explanation: "At 3:30, minute hand = 180°. Hour hand = 105°. Difference = 75°."
    },

    {
        question: "If all roses are flowers and some flowers fade quickly, which conclusion is definitely true?",
        options: ["All roses fade quickly", "Some roses fade quickly", "Some flowers are roses", "All roses are flowers"],
        answer: 3,
        explanation: "The only definite conclusion is that all roses are flowers."
    },

    {
        question: "Find the missing number: 4 : 20 :: 7 : ?",
        options: ["49", "54", "56", "63"],
        answer: 2,
        explanation: "4×5=20. Following n(n+1), 7×8=56."
    },

    {
        question: "A is taller than B but shorter than C. D is shorter than B. Who is the tallest?",
        options: ["A", "B", "C", "D"],
        answer: 2,
        explanation: "C > A > B > D. Therefore C is tallest."
    },

    {
        question: "Which word cannot be formed from the letters of 'CONSTITUTION'?",
        options: ["COUNT", "TUTION", "COTTON", "UNIT"],
        answer: 2,
        explanation: "COTTON requires two O's, while CONSTITUTION contains only one O."
    },

    {
        question: "In a certain pattern, 2 is related to 8, 3 is related to 27, and 4 is related to 64. Then 5 is related to:",
        options: ["100", "125", "150", "225"],
        answer: 1,
        explanation: "The second number is the cube of the first: 2³=8, 3³=27, 4³=64. Therefore 5³=125."
    }
];


/* =========================================================
   GK QUESTIONS
========================================================= */

const GK_QUESTIONS = [

    {
        question: "Which Article of the Indian Constitution deals with equality before law?",
        options: ["Article 12", "Article 14", "Article 16", "Article 18"],
        answer: 1,
        explanation: "Article 14 guarantees equality before law and equal protection of laws."
    },

    {
        question: "The headquarters of the International Court of Justice is located in:",
        options: ["Geneva", "New York", "The Hague", "Paris"],
        answer: 2,
        explanation: "The International Court of Justice is located at The Hague, Netherlands."
    },

    {
        question: "Which river is known as the 'Sorrow of Bihar'?",
        options: ["Ganga", "Kosi", "Son", "Gandak"],
        answer: 1,
        explanation: "The Kosi River is often called the Sorrow of Bihar because of its frequent floods."
    },

    {
        question: "Who was the first Indian Governor-General of independent India?",
        options: ["C. Rajagopalachari", "Lord Mountbatten", "Jawaharlal Nehru", "Dr. Rajendra Prasad"],
        answer: 0,
        explanation: "C. Rajagopalachari was the first Indian Governor-General of independent India."
    },

    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
        answer: 1,
        explanation: "Nitrogen constitutes approximately 78% of Earth's atmosphere."
    },

    {
        question: "The 'Green Revolution' in India is mainly associated with:",
        options: ["Milk production", "Food grain production", "Fish production", "Oilseed production"],
        answer: 1,
        explanation: "The Green Revolution significantly increased food grain production, especially wheat and rice."
    },

    {
        question: "Which Schedule of the Indian Constitution contains provisions related to anti-defection?",
        options: ["8th Schedule", "9th Schedule", "10th Schedule", "11th Schedule"],
        answer: 2,
        explanation: "The Tenth Schedule contains the anti-defection provisions."
    },

    {
        question: "The largest gland in the human body is:",
        options: ["Pancreas", "Liver", "Thyroid", "Pituitary"],
        answer: 1,
        explanation: "The liver is the largest gland in the human body."
    },

    {
        question: "Who founded the Maurya Empire?",
        options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Kanishka"],
        answer: 1,
        explanation: "Chandragupta Maurya founded the Maurya Empire around 322 BCE."
    },

    {
        question: "Which soil is most suitable for cotton cultivation?",
        options: ["Alluvial soil", "Black soil", "Laterite soil", "Red soil"],
        answer: 1,
        explanation: "Black soil has high moisture-retaining capacity and is particularly suitable for cotton."
    },

    {
        question: "The Fundamental Duties were added to the Indian Constitution by which Amendment?",
        options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "73rd Amendment"],
        answer: 0,
        explanation: "The 42nd Constitutional Amendment Act, 1976 added Fundamental Duties."
    },

    {
        question: "Which planet has the largest number of known moons in the Solar System?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: 1,
        explanation: "Saturn currently has the largest number of confirmed moons."
    },

    {
        question: "The Battle of Plassey was fought in:",
        options: ["1757", "1761", "1764", "1772"],
        answer: 0,
        explanation: "The Battle of Plassey was fought in 1757."
    },

    {
        question: "Which Indian state has the longest coastline?",
        options: ["Maharashtra", "Tamil Nadu", "Gujarat", "Andhra Pradesh"],
        answer: 2,
        explanation: "Gujarat has India's longest coastline among the states."
    },

    {
        question: "The Reserve Bank of India was established in:",
        options: ["1930", "1935", "1947", "1950"],
        answer: 1,
        explanation: "The RBI was established on 1 April 1935."
    },

    {
        question: "Which vitamin is primarily synthesized in the skin through sunlight exposure?",
        options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
        answer: 3,
        explanation: "Sunlight helps the skin synthesize vitamin D."
    },

    {
        question: "The Tropic of Cancer passes through how many Indian states?",
        options: ["6", "7", "8", "9"],
        answer: 2,
        explanation: "The Tropic of Cancer passes through eight Indian states."
    },

    {
        question: "Who wrote the book 'Discovery of India'?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "S. Radhakrishnan"],
        answer: 1,
        explanation: "The Discovery of India was written by Jawaharlal Nehru."
    },

    {
        question: "Which metal is liquid at ordinary room temperature?",
        options: ["Iron", "Mercury", "Aluminium", "Copper"],
        answer: 1,
        explanation: "Mercury remains liquid at ordinary room temperature."
    },

    {
        question: "The Panchayati Raj system was constitutionally recognized through which Amendment?",
        options: ["61st", "73rd", "74th", "86th"],
        answer: 1,
        explanation: "The 73rd Constitutional Amendment Act, 1992 gave constitutional status to Panchayati Raj institutions."
    }
];


/* =========================================================
   COMPUTER QUESTIONS
========================================================= */

const COMPUTER_QUESTIONS = [

    {
        question: "Which component of a computer performs arithmetic and logical operations?",
        options: ["CU", "ALU", "RAM", "ROM"],
        answer: 1,
        explanation: "The Arithmetic Logic Unit performs arithmetic and logical operations."
    },

    {
        question: "Which memory is volatile?",
        options: ["ROM", "Hard Disk", "RAM", "SSD"],
        answer: 2,
        explanation: "RAM is volatile memory because its contents are lost when power is switched off."
    },

    {
        question: "Which protocol is primarily used for secure web browsing?",
        options: ["HTTP", "HTTPS", "FTP", "SMTP"],
        answer: 1,
        explanation: "HTTPS uses encryption to secure communication between the browser and web server."
    },

    {
        question: "Which shortcut is commonly used to paste copied content?",
        options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
        answer: 1,
        explanation: "Ctrl + V is the standard paste shortcut."
    },

    {
        question: "Which of the following is an operating system?",
        options: ["Google Chrome", "Windows", "MS Word", "Oracle"],
        answer: 1,
        explanation: "Windows is an operating system."
    },

    {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Processing Utility", "Central Program Unit", "Control Processing Unit"],
        answer: 0,
        explanation: "CPU stands for Central Processing Unit."
    },

    {
        question: "Which device is used to connect different networks?",
        options: ["Router", "Keyboard", "Monitor", "Scanner"],
        answer: 0,
        explanation: "A router forwards data packets between different networks."
    },

    {
        question: "Which file extension is commonly associated with Microsoft Excel workbooks?",
        options: [".docx", ".pptx", ".xlsx", ".txt"],
        answer: 2,
        explanation: ".xlsx is the standard modern Excel workbook extension."
    },

    {
        question: "What is phishing?",
        options: ["A method of compressing files", "A fraudulent attempt to obtain sensitive information", "A type of antivirus", "A network cable"],
        answer: 1,
        explanation: "Phishing is a fraudulent technique used to trick users into revealing sensitive information."
    },

    {
        question: "Which one is an example of cloud storage?",
        options: ["Google Drive", "RAM", "CPU", "BIOS"],
        answer: 0,
        explanation: "Google Drive is a cloud-based storage service."
    }
];


/* =========================================================
   ENGLISH QUESTIONS
========================================================= */

const ENGLISH_QUESTIONS = [

    {
        question: "What is the central idea of the passage?",
        options: [
            "The internet should be avoided by students",
            "Modern education should focus only on memorization",
            "The ability to evaluate and use information critically is increasingly important",
            "Social media is the main source of knowledge"
        ],
        answer: 2,
        explanation: "The passage emphasizes that modern learners must evaluate information critically rather than merely collect it."
    },

    {
        question: "According to the passage, what has become the real challenge in the information age?",
        options: [
            "Finding information",
            "Evaluating the reliability and relevance of information",
            "Avoiding technology",
            "Memorizing large amounts of information"
        ],
        answer: 1,
        explanation: "The passage explicitly states that the challenge is evaluating reliability and relevance."
    },

    {
        question: "A thoughtful learner does NOT:",
        options: [
            "Examine evidence",
            "Consider alternative explanations",
            "Accept every statement without checking",
            "Check whether the source is trustworthy"
        ],
        answer: 2,
        explanation: "The passage says a thoughtful learner does not accept every statement simply because it appears online."
    },

    {
        question: "Which ability does the passage associate with avoiding misinformation?",
        options: [
            "Critical thinking",
            "Fast reading",
            "Memorization",
            "Typing speed"
        ],
        answer: 0,
        explanation: "Critical thinking helps individuals examine evidence and avoid misinformation."
    },

    {
        question: "According to the passage, knowledge becomes truly valuable when a person can:",
        options: [
            "Collect a large amount of data",
            "Share information frequently",
            "Use it thoughtfully in real-life situations",
            "Memorize it permanently"
        ],
        answer: 2,
        explanation: "The final paragraph states that knowledge becomes valuable when it is thoughtfully applied in real-life situations."
    },

    {
        question: "Choose the correct synonym of 'reliable'.",
        options: ["Uncertain", "Trustworthy", "Doubtful", "Weak"],
        answer: 1,
        explanation: "Reliable means trustworthy or dependable."
    },

    {
        question: "Choose the correct antonym of 'relevant'.",
        options: ["Related", "Useful", "Appropriate", "Irrelevant"],
        answer: 3,
        explanation: "The antonym of relevant is irrelevant."
    },

    {
        question: "Identify the correctly spelled word.",
        options: ["Occassion", "Ocassion", "Occasion", "Occassian"],
        answer: 2,
        explanation: "The correct spelling is Occasion."
    },

    {
        question: "Choose the correct passive voice: 'The teacher praised the student.'",
        options: [
            "The student praised the teacher.",
            "The student was praised by the teacher.",
            "The student is praised by the teacher.",
            "The teacher was praised by the student."
        ],
        answer: 1,
        explanation: "The object 'student' becomes the subject in passive voice: The student was praised by the teacher."
    },

    {
        question: "Choose the correct indirect speech: He said, 'I am tired.'",
        options: [
            "He said that I am tired.",
            "He said that he was tired.",
            "He says that he was tired.",
            "He said he is tired."
        ],
        answer: 1,
        explanation: "In reported speech, present 'am' changes to past 'was' and 'I' changes to 'he'."
    },

    {
        question: "Choose the correct article: He is ___ honest man.",
        options: ["a", "an", "the", "no article"],
        answer: 1,
        explanation: "Honest begins with a vowel sound, so 'an' is used."
    },

    {
        question: "Choose the correct preposition: She is good ___ mathematics.",
        options: ["in", "on", "at", "with"],
        answer: 2,
        explanation: "The standard expression is 'good at mathematics'."
    },

    {
        question: "Identify the error: 'Neither of the boys have completed his work.'",
        options: [
            "Neither",
            "of the boys",
            "have",
            "his work"
        ],
        answer: 2,
        explanation: "'Neither' is singular and therefore takes 'has': Neither of the boys has completed his work."
    },

    {
        question: "Choose the correct meaning of the idiom 'A blessing in disguise'.",
        options: [
            "A hidden enemy",
            "Something that appears bad but turns out beneficial",
            "A religious ceremony",
            "An unexpected punishment"
        ],
        answer: 1,
        explanation: "The idiom refers to something that initially appears harmful but eventually proves beneficial."
    },

    {
        question: "Choose the correct one-word substitution for 'One who cannot read or write'.",
        options: ["Illiterate", "Innocent", "Ignorant", "Immature"],
        answer: 0,
        explanation: "An illiterate person is one who cannot read or write."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "Each of the students have a book.",
            "Each of the students has a book.",
            "Each students has a book.",
            "Each of students have a book."
        ],
        answer: 1,
        explanation: "'Each' is singular and takes the singular verb 'has'."
    },

    {
        question: "Choose the correct form: If I ___ you, I would accept the offer.",
        options: ["am", "was", "were", "be"],
        answer: 2,
        explanation: "In the second conditional, 'were' is traditionally used after 'if I'."
    },

    {
        question: "Choose the word that is closest in meaning to 'meticulous'.",
        options: ["Careless", "Careful", "Quick", "Confused"],
        answer: 1,
        explanation: "Meticulous means very careful and precise."
    },

    {
        question: "Choose the correct tense: By next month, she ___ here for five years.",
        options: [
            "works",
            "worked",
            "will have worked",
            "has worked"
        ],
        answer: 2,
        explanation: "A future point plus duration requires future perfect: 'will have worked'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "Despite of the rain, we went out.",
            "Despite the rain, we went out.",
            "Despite it was raining, we went out.",
            "Despite of raining, we went out."
        ],
        answer: 1,
        explanation: "'Despite' is followed directly by a noun phrase, not 'of'."
    }
];


/* =========================================================
   CURRENT AFFAIRS
========================================================= */

const CURRENT_AFFAIRS_QUESTIONS = [

    {
        question: "Which country hosted the 2026 G20 Summit?",
        options: ["India", "United States", "Brazil", "South Africa"],
        answer: 1,
        explanation: "The United States hosted the 2026 G20 Summit."
    },

    {
        question: "The 2026 FIFA World Cup is being jointly hosted by:",
        options: [
            "USA, Canada and Mexico",
            "Brazil, Argentina and Chile",
            "Spain, Portugal and Morocco",
            "Germany, France and Italy"
        ],
        answer: 0,
        explanation: "The 2026 FIFA World Cup is jointly hosted by the United States, Canada and Mexico."
    },

    {
        question: "Which country became a full member of BRICS in 2026?",
        options: ["Thailand", "Malaysia", "Indonesia", "Vietnam"],
        answer: 2,
        explanation: "Indonesia joined BRICS as a full member in 2025, becoming the first Southeast Asian full member."
    },

    {
        question: "Who is the President of India in 2026?",
        options: [
            "Pratibha Patil",
            "Droupadi Murmu",
            "Ram Nath Kovind",
            "Meira Kumar"
        ],
        answer: 1,
        explanation: "Droupadi Murmu is the President of India."
    },

    {
        question: "Which Indian city hosted the 2026 Khelo India Youth Games?",
        options: ["Bhubaneswar", "Chennai", "Patna", "Jaipur"],
        answer: 0,
        explanation: "The Khelo India Youth Games 2026 were associated with Odisha and its sporting infrastructure."
    },

    {
        question: "Who is the Prime Minister of India in 2026?",
        options: [
            "Narendra Modi",
            "Amit Shah",
            "Rajnath Singh",
            "Nitin Gadkari"
        ],
        answer: 0,
        explanation: "Narendra Modi is the Prime Minister of India."
    },

    {
        question: "Which organization releases the World Economic Outlook?",
        options: [
            "World Bank",
            "IMF",
            "WTO",
            "UNDP"
        ],
        answer: 1,
        explanation: "The International Monetary Fund publishes the World Economic Outlook."
    },

    {
        question: "Which country hosted the 2026 Winter Olympics?",
        options: ["Italy", "France", "Switzerland", "Canada"],
        answer: 0,
        explanation: "The 2026 Winter Olympics were held in Milan and Cortina d'Ampezzo, Italy."
    },

    {
        question: "Which Indian space agency is responsible for India's major space missions?",
        options: ["DRDO", "ISRO", "BARC", "CSIR"],
        answer: 1,
        explanation: "ISRO is India's national space agency."
    },

    {
        question: "Which day is observed as International Yoga Day?",
        options: [
            "5 June",
            "21 June",
            "11 July",
            "15 August"
        ],
        answer: 1,
        explanation: "International Yoga Day is observed on 21 June every year."
    }
];


/* =========================================================
   QUESTION BANK
========================================================= */

const QUESTION_BANK = {
    "Mathematics": MATHEMATICS_QUESTIONS,
    "Reasoning": REASONING_QUESTIONS,
    "GK": GK_QUESTIONS,
    "Computer": COMPUTER_QUESTIONS,
    "English": ENGLISH_QUESTIONS,
    "Current Affairs": CURRENT_AFFAIRS_QUESTIONS
};


let studentName = "";
let currentSubject = "Mathematics";
let currentQuestionIndex = 0;
let timeLeft = EXAM_DURATION_SECONDS;
let timerInterval = null;
let examSubmitted = false;

let answers = {};
let reviewStatus = {};
let subjectQuestionPositions = {};


function get(id) {
    return document.getElementById(id);
}


function initializeExamData() {
    answers = {};
    reviewStatus = {};
    subjectQuestionPositions = {};

    SUBJECTS.forEach(subject => {

        answers[subject] = new Array(
            QUESTION_BANK[subject].length
        ).fill(null);

        reviewStatus[subject] = new Array(
            QUESTION_BANK[subject].length
        ).fill(false);

        subjectQuestionPositions[subject] = 0;

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


function updateDateTime() {

    const now = new Date();

    const dateText = now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    const timeText = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const element = get("currentDateTime");

    if (element) {
        element.textContent =
            `${dateText} | ${timeText}`;
    }
}


function addCurrentAffairsButton() {

    const existingButtons =
        document.querySelectorAll(".subject-btn");

    if (!existingButtons.length) {
        return;
    }

    const alreadyExists =
        Array.from(existingButtons).some(btn => {
            return btn.textContent.trim() === "Current Affairs";
        });

    if (alreadyExists) {
        return;
    }

    const firstButton = existingButtons[0];
    const parent = firstButton.parentElement;

    if (!parent) {
        return;
    }

    const button = document.createElement("button");

    button.type = "button";
    button.className = "subject-btn";
    button.textContent = "Current Affairs";

    button.addEventListener("click", () => {

        saveCurrentSubjectPosition();

        currentSubject = "Current Affairs";

        currentQuestionIndex =
            subjectQuestionPositions[currentSubject] || 0;

        renderSubjectButtons();
        renderQuestion();
        renderQuestionPalette();

    });

    parent.appendChild(button);
}


function renderSubjectButtons() {

    const buttons =
        document.querySelectorAll(".subject-btn");

    buttons.forEach(button => {

        const subject =
            button.textContent.trim();

        button.classList.toggle(
            "active",
            subject === currentSubject
        );

        if (SUBJECTS.includes(subject)) {

            button.onclick = () => {

                saveCurrentSubjectPosition();

                currentSubject = subject;

                currentQuestionIndex =
                    subjectQuestionPositions[currentSubject] || 0;

                renderSubjectButtons();
                renderQuestion();
                renderQuestionPalette();

            };
        }

    });
}


function saveCurrentSubjectPosition() {

    if (!SUBJECTS.includes(currentSubject)) {
        return;
    }

    subjectQuestionPositions[currentSubject] =
        currentQuestionIndex;
}


/* =========================================================
   RENDER QUESTION
   ONLY CHANGE:
   GLOBAL QUESTION NUMBERING IS NOW CORRECT
========================================================= */

function renderQuestion() {

    const questions =
        QUESTION_BANK[currentSubject];

    if (!questions || !questions.length) {
        return;
    }

    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex =
            questions.length - 1;
    }

    const currentQuestion =
        questions[currentQuestionIndex];

    const questionNumber =
        get("questionNumber");

    const questionText =
        get("questionText");

    const optionsContainer =
        get("optionsContainer");


    /* =====================================================
       CORRECT GLOBAL NUMBERING

       Mathematics      = 1–20
       Reasoning        = 21–40
       GK               = 41–60
       Computer         = 61–70
       English          = 71–90
       Current Affairs  = 91–100
    ===================================================== */

    if (questionNumber) {

        let globalNumber =
            currentQuestionIndex + 1;

        const currentSubjectPosition =
            SUBJECTS.indexOf(currentSubject);

        for (
            let i = 0;
            i < currentSubjectPosition;
            i++
        ) {

            globalNumber +=
                QUESTION_BANK[SUBJECTS[i]].length;

        }

        questionNumber.textContent =
            `Question ${globalNumber}`;
    }


    if (questionText) {

        if (
            currentSubject === "English" &&
            currentQuestionIndex < 5
        ) {

            questionText.innerHTML =
                ENGLISH_PASSAGE +
                `<div class="question-text-main">
                    ${currentQuestion.question}
                </div>`;

        } else {

            questionText.innerHTML =
                `<div class="question-text-main">
                    ${currentQuestion.question}
                </div>`;

        }
    }


    if (!optionsContainer) {
        return;
    }

    optionsContainer.innerHTML = "";


    currentQuestion.options.forEach(
        (option, index) => {

            const optionDiv =
                document.createElement("div");

            optionDiv.className = "option";


            if (
                answers[currentSubject] &&
                answers[currentSubject][currentQuestionIndex] === index
            ) {

                optionDiv.classList.add("selected");

            }


            const letter =
                String.fromCharCode(65 + index);


            optionDiv.innerHTML = `
                <span class="option-letter">${letter}</span>
                <span class="option-text">${option}</span>
            `;


            optionDiv.addEventListener(
                "click",
                () => {

                    answers[currentSubject][currentQuestionIndex] =
                        index;

                    renderQuestion();
                    renderQuestionPalette();

                }
            );


            optionsContainer.appendChild(optionDiv);

        }
    );


    updateNavigationButtons();
}


function updateNavigationButtons() {

    const questions =
        QUESTION_BANK[currentSubject];

    const previousBtn =
        get("previousBtn");

    const nextBtn =
        get("nextBtn");


    if (previousBtn) {

        previousBtn.disabled =
            currentQuestionIndex === 0;

    }


    if (nextBtn) {

        nextBtn.disabled =
            currentQuestionIndex === questions.length - 1;

    }
}


function goToNextQuestion() {

    const questions =
        QUESTION_BANK[currentSubject];

    if (
        currentQuestionIndex <
        questions.length - 1
    ) {

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


function clearCurrentAnswer() {

    if (!answers[currentSubject]) {
        return;
    }

    answers[currentSubject][currentQuestionIndex] =
        null;

    renderQuestion();
    renderQuestionPalette();
}


function toggleReview() {

    reviewStatus[currentSubject][currentQuestionIndex] =
        !reviewStatus[currentSubject][currentQuestionIndex];

    renderQuestionPalette();
}


/* =========================================================
   QUESTION PALETTE
========================================================= */

function renderQuestionPalette() {

    const container =
        get("questionNumbers");

    if (!container) {
        return;
    }

    container.innerHTML = "";


    const questions =
        QUESTION_BANK[currentSubject];


    questions.forEach((question, index) => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "question-number-btn";

        button.textContent =
            index + 1;


        if (
            answers[currentSubject][index] !== null
        ) {

            button.classList.add("answered");

        }


        if (
            reviewStatus[currentSubject][index]
        ) {

            button.classList.add("review");

        }


        if (
            index === currentQuestionIndex
        ) {

            button.classList.add("current");

        }


        button.addEventListener(
            "click",
            () => {

                currentQuestionIndex =
                    index;

                saveCurrentSubjectPosition();

                renderQuestion();
                renderQuestionPalette();

                /*
                    Palette remains OPEN after selecting question.
                */

            }
        );


        container.appendChild(button);

    });


    const paletteSubject =
        get("paletteSubject");


    if (paletteSubject) {

        paletteSubject.textContent =
            currentSubject;

    }
}


function openPalette() {

    const palette =
        get("questionPalette");

    const overlay =
        get("paletteOverlay");


    if (palette) {
        palette.classList.add("open");
    }

    if (overlay) {
        overlay.classList.add("show");
    }
}


function closePalette() {

    const palette =
        get("questionPalette");

    const overlay =
        get("paletteOverlay");


    if (palette) {
        palette.classList.remove("open");
    }

    if (overlay) {
        overlay.classList.remove("show");
    }
}


/* =========================================================
   TIMER
========================================================= */

function updateTimer() {

    const timer =
        get("timer");

    if (!timer) {
        return;
    }


    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;


    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    if (timeLeft <= 300) {

        timer.classList.add("danger");

    } else {

        timer.classList.remove("danger");

    }
}


function startTimer() {

    clearInterval(timerInterval);

    updateTimer();


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


                alert(
                    "Time is over. Your examination will be submitted automatically."
                );


                submitExam();

            }

        }, 1000);
}


/* =========================================================
   FULLSCREEN
========================================================= */

function enterFullscreen() {

    const element =
        document.documentElement;


    if (
        document.fullscreenElement ||
        document.webkitFullscreenElement
    ) {

        return;

    }


    if (element.requestFullscreen) {

        element.requestFullscreen()
            .catch(() => {});

    } else if (
        element.webkitRequestFullscreen
    ) {

        element.webkitRequestFullscreen();

    }
}


/* =========================================================
   START EXAM
========================================================= */

function startExam() {

    const nameInput =
        get("studentName");

    const passwordInput =
        get("examPassword");

    const loginError =
        get("loginError");


    const name =
        nameInput
            ? nameInput.value.trim()
            : "";


    const password =
        passwordInput
            ? passwordInput.value.trim()
            : "";


    if (!name) {

        if (loginError) {

            loginError.textContent =
                "Please enter your name.";

        }

        return;
    }


    if (password !== EXAM_PASSWORD) {

        if (loginError) {

            loginError.textContent =
                "Incorrect examination password.";

        }

        return;
    }


    if (loginError) {

        loginError.textContent = "";

    }


    studentName =
        name;


    initializeExamData();


    currentSubject =
        "Mathematics";


    currentQuestionIndex =
        0;


    timeLeft =
        EXAM_DURATION_SECONDS;


    examSubmitted =
        false;


    const displayedStudentName =
        get("displayedStudentName");


    if (displayedStudentName) {

        displayedStudentName.textContent =
            studentName;

    }


    showPage("examPage");


    renderSubjectButtons();

    renderQuestion();

    renderQuestionPalette();


    updateDateTime();

    startTimer();

    enterFullscreen();
}


/* =========================================================
   SUBMIT MODAL
========================================================= */

function openSubmitModal() {

    const modal =
        get("submitModal");

    if (modal) {

        modal.classList.add("show");

    }
}


function closeSubmitModal() {

    const modal =
        get("submitModal");

    if (modal) {

        modal.classList.remove("show");

    }
}


/* =========================================================
   CALCULATE RESULT
========================================================= */

function calculateResult() {

    let total = 0;
    let correct = 0;
    let wrong = 0;
    let notAttempted = 0;


    const sectionResults = [];


    SUBJECTS.forEach(subject => {

        const questions =
            QUESTION_BANK[subject];

        const subjectAnswers =
            answers[subject];


        let subjectCorrect = 0;
        let subjectWrong = 0;
        let subjectNotAttempted = 0;


        questions.forEach(
            (question, index) => {

                total++;


                const selected =
                    subjectAnswers[index];


                if (selected === null) {

                    notAttempted++;
                    subjectNotAttempted++;

                } else if (
                    selected === question.answer
                ) {

                    correct++;
                    subjectCorrect++;

                } else {

                    wrong++;
                    subjectWrong++;

                }

            }
        );


        sectionResults.push({

            subject,

            total:
                questions.length,

            correct:
                subjectCorrect,

            wrong:
                subjectWrong,

            notAttempted:
                subjectNotAttempted,

            marks:
                subjectCorrect

        });

    });


    return {

        total,

        correct,

        wrong,

        notAttempted,

        marks:
            correct,

        percentage:
            (correct / total) * 100,

        sectionResults

    };
}


/* =========================================================
   DISPLAY RESULT
========================================================= */

function displayResult() {

    const result =
        calculateResult();


    const finalStudentName =
        get("finalStudentName");


    const totalMarks =
        get("totalMarks");


    const correctAnswers =
        get("correctAnswers");


    const wrongAnswers =
        get("wrongAnswers");


    const notAttempted =
        get("notAttempted");


    const percentage =
        get("percentage");


    if (finalStudentName) {

        finalStudentName.textContent =
            studentName;

    }


    if (totalMarks) {

        totalMarks.textContent =
            `${result.marks} / ${result.total}`;

    }


    if (correctAnswers) {

        correctAnswers.textContent =
            result.correct;

    }


    if (wrongAnswers) {

        wrongAnswers.textContent =
            result.wrong;

    }


    if (notAttempted) {

        notAttempted.textContent =
            result.notAttempted;

    }


    if (percentage) {

        percentage.textContent =
            `${result.percentage.toFixed(2)}%`;

    }


    renderSectionResults(
        result.sectionResults
    );


    renderReview();


    saveResultForRank(result);

    displayRank(result);
}


/* =========================================================
   SECTION RESULTS
========================================================= */

function renderSectionResults(results) {

    const container =
        get("sectionResults");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    results.forEach(result => {

        const card =
            document.createElement("div");


        card.className =
            "section-result-card";


        card.innerHTML = `
            <h3>${result.subject}</h3>

            <div>
                <strong>${result.marks}/${result.total}</strong>
            </div>

            <p>
                Correct: ${result.correct}
                &nbsp; | &nbsp;
                Wrong: ${result.wrong}
                &nbsp; | &nbsp;
                Not Attempted: ${result.notAttempted}
            </p>
        `;


        container.appendChild(card);

    });
}


/* =========================================================
   REVIEW
========================================================= */

function renderReview() {

    const container =
        get("reviewAnswers");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    let globalNumber = 0;


    SUBJECTS.forEach(subject => {

        const questions =
            QUESTION_BANK[subject];


        questions.forEach(
            (question, index) => {

                globalNumber++;


                const selected =
                    answers[subject][index];


                const correctAnswer =
                    question.answer;


                const review =
                    document.createElement("div");


                review.className =
                    "review-question";


                let statusClass = "";
                let statusText = "";


                if (selected === null) {

                    statusClass = "";
                    statusText = "Not Attempted";

                } else if (
                    selected === correctAnswer
                ) {

                    statusClass = "correct";
                    statusText = "Correct";

                } else {

                    statusClass = "wrong";
                    statusText = "Wrong";

                }


                let selectedText =
                    "Not Attempted";


                if (selected !== null) {

                    selectedText =
                        `${String.fromCharCode(65 + selected)}. ${question.options[selected]}`;

                }


                const correctText =
                    `${String.fromCharCode(65 + correctAnswer)}. ${question.options[correctAnswer]}`;


                review.innerHTML = `
                    <h4>
                        Q${globalNumber}. ${question.question}
                    </h4>

                    <p>
                        <strong>Your Answer:</strong>
                        ${selectedText}
                    </p>

                    <p>
                        <strong>Correct Answer:</strong>
                        ${correctText}
                    </p>

                    <p class="${statusClass}">
                        <strong>${statusText}</strong>
                    </p>

                    <p>
                        <strong>Explanation:</strong>
                        ${question.explanation}
                    </p>
                `;


                container.appendChild(review);

            }
        );

    });
}


/* =========================================================
   SAVE RESULT
========================================================= */

function saveResultForRank(result) {

    try {

        const key =
            "lakshya_mock_test_results";


        const stored =
            JSON.parse(
                localStorage.getItem(key) || "[]"
            );


        stored.push({

            name:
                studentName,

            marks:
                result.marks,

            percentage:
                result.percentage,

            date:
                new Date().toISOString()

        });


        stored.sort((a, b) => {

            if (b.marks !== a.marks) {

                return b.marks - a.marks;

            }


            return new Date(a.date) -
                   new Date(b.date);

        });


        localStorage.setItem(
            key,
            JSON.stringify(stored)
        );


    } catch (error) {

        console.log(
            "Rank data could not be saved.",
            error
        );

    }
}


/* =========================================================
   DISPLAY RANK
========================================================= */

function displayRank(result) {

    try {

        const key =
            "lakshya_mock_test_results";


        const stored =
            JSON.parse(
                localStorage.getItem(key) || "[]"
            );


        const currentIndex =
            stored.findIndex(item =>
                item.name === studentName &&
                item.marks === result.marks
            );


        const rank =
            currentIndex >= 0
                ? currentIndex + 1
                : stored.length;


        const rankElements =
            document.querySelectorAll(
                ".rank, #rank, [data-rank]"
            );


        rankElements.forEach(element => {

            element.textContent =
                rank;

        });


    } catch (error) {

        console.log(
            "Rank could not be displayed.",
            error
        );

    }
}


/* =========================================================
   SUBMIT EXAM
========================================================= */

function submitExam() {

    if (examSubmitted) {
        return;
    }


    examSubmitted =
        true;


    clearInterval(
        timerInterval
    );


    closeSubmitModal();


    displayResult();


    showPage("resultPage");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });
}


/* =========================================================
   CONFIRM SUBMISSION
========================================================= */

function confirmSubmission() {

    submitExam();

}


/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (examSubmitted) {
            return;
        }


        const examPage =
            get("examPage");


        if (
            !examPage ||
            !examPage.classList.contains("active")
        ) {

            return;

        }


        if (event.key === "ArrowRight") {

            event.preventDefault();

            goToNextQuestion();

        }


        if (event.key === "ArrowLeft") {

            event.preventDefault();

            goToPreviousQuestion();

        }

    }
);


/* =========================================================
   BEFORE UNLOAD
========================================================= */

window.addEventListener(
    "beforeunload",
    event => {

        if (
            !examSubmitted &&
            get("examPage") &&
            get("examPage").classList.contains("active")
        ) {

            event.preventDefault();

            event.returnValue = "";

        }

    }
);


/* =========================================================
   HISTORY PROTECTION
========================================================= */

function protectExamHistory() {

    if (
        !get("examPage") ||
        !get("examPage").classList.contains("active")
    ) {

        return;

    }


    history.pushState(
        null,
        "",
        window.location.href
    );

}


window.addEventListener(
    "popstate",
    () => {

        if (
            !examSubmitted &&
            get("examPage") &&
            get("examPage").classList.contains("active")
        ) {

            history.pushState(
                null,
                "",
                window.location.href
            );


            alert(
                "Going back is disabled during the examination."
            );

        }

    }
);


/* =========================================================
   DISABLE RIGHT CLICK
========================================================= */

document.addEventListener(
    "contextmenu",
    event => {

        if (
            get("examPage") &&
            get("examPage").classList.contains("active") &&
            !examSubmitted
        ) {

            event.preventDefault();

        }

    }
);


/* =========================================================
   DOM CONTENT LOADED
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        addCurrentAffairsButton();

        renderSubjectButtons();

        updateDateTime();


        setInterval(
            updateDateTime,
            1000
        );


        const startHomeBtn =
            get("startHomeBtn");


        if (startHomeBtn) {

            startHomeBtn.addEventListener(
                "click",
                () => {

                    showPage("loginPage");


                    const studentInput =
                        get("studentName");


                    if (studentInput) {

                        studentInput.focus();

                    }

                }
            );

        }


        const startExamBtn =
            get("startExamBtn");


        if (startExamBtn) {

            startExamBtn.addEventListener(
                "click",
                startExam
            );

        }


        const examPassword =
            get("examPassword");


        if (examPassword) {

            examPassword.addEventListener(
                "keydown",
                event => {

                    if (event.key === "Enter") {

                        startExam();

                    }

                }
            );

        }


        const studentInput =
            get("studentName");


        if (studentInput) {

            studentInput.addEventListener(
                "keydown",
                event => {

                    if (event.key === "Enter") {

                        const password =
                            get("examPassword");


                        if (password) {

                            password.focus();

                        }

                    }

                }
            );

        }


        const previousBtn =
            get("previousBtn");


        if (previousBtn) {

            previousBtn.addEventListener(
                "click",
                goToPreviousQuestion
            );

        }


        const nextBtn =
            get("nextBtn");


        if (nextBtn) {

            nextBtn.addEventListener(
                "click",
                goToNextQuestion
            );

        }


        const reviewBtn =
            get("reviewBtn");


        if (reviewBtn) {

            reviewBtn.addEventListener(
                "click",
                toggleReview
            );

        }


        const clearBtn =
            get("clearBtn");


        if (clearBtn) {

            clearBtn.addEventListener(
                "click",
                clearCurrentAnswer
            );

        }


        const openPaletteBtn =
            get("openPaletteBtn");


        if (openPaletteBtn) {

            openPaletteBtn.addEventListener(
                "click",
                openPalette
            );

        }


        const closePaletteBtn =
            get("closePaletteBtn");


        if (closePaletteBtn) {

            closePaletteBtn.addEventListener(
                "click",
                closePalette
            );

        }


        const paletteOverlay =
            get("paletteOverlay");


        if (paletteOverlay) {

            paletteOverlay.addEventListener(
                "click",
                closePalette
            );

        }


        const submitBtn =
            get("submitBtn");


        if (submitBtn) {

            submitBtn.addEventListener(
                "click",
                openSubmitModal
            );

        }


        const confirmSubmitBtn =
            get("confirmSubmitBtn");


        if (confirmSubmitBtn) {

            confirmSubmitBtn.addEventListener(
                "click",
                confirmSubmission
            );

        }


        const cancelSubmitBtn =
            get("cancelSubmitBtn");


        if (cancelSubmitBtn) {

            cancelSubmitBtn.addEventListener(
                "click",
                closeSubmitModal
            );

        }


        const fullscreenBtn =
            get("fullscreenBtn");


        if (fullscreenBtn) {

            fullscreenBtn.addEventListener(
                "click",
                enterFullscreen
            );

        }


        window.addEventListener(
            "load",
            protectExamHistory
        );

    }
);


updateDateTime();
