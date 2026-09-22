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

   EXAM PROTECTION:
   - Back button = Auto Submit
   - Tab/App switch = Auto Submit after 1 second
   - Copy/Cut/Paste disabled
   - Text selection disabled
   - Drag disabled
   - Right click disabled
   - Common keyboard shortcuts disabled
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
        faster and more accessible, but accessibility alone does not guarantee understanding.
        A student may read hundreds of pages online and still possess only
        a superficial grasp of a subject if the information is not examined critically.
    </p>

    <p>
        True learning requires curiosity, reflection and the willingness
        to question what one reads. It also demands patience, because meaningful
        understanding rarely develops instantly. Digital tools can certainly
        support education, but they are most effective when used as instruments
        rather than substitutes for thought. A search engine can provide facts,
        but it cannot automatically determine whether those facts are reliable,
        relevant or properly understood.
    </p>

    <p>
        Therefore, education in the digital age should not merely focus on
        collecting information. It should cultivate the ability to analyse evidence,
        compare different viewpoints and form reasoned conclusions. The learner
        who develops these abilities becomes less dependent on ready-made answers
        and more capable of thinking independently.
    </p>
</div>
`;


/* =========================================================
   MATHEMATICS QUESTIONS
========================================================= */

const MATHEMATICS_QUESTIONS = [

    {
        question: "A sum of ₹8,000 is divided into two parts and invested at 8% p.a. and 12% p.a. simple interest respectively. If the total simple interest received in 2 years is ₹1,600, then the amount invested at 12% p.a. is:",
        options: ["₹3,000", "₹4,000", "₹5,000", "₹6,000"],
        answer: 1,
        explanation: "Let the amount invested at 12% be x. Then 2[8% of (8000−x) + 12% of x] = 1600. Solving gives x = ₹4,000."
    },

    {
        question: "The average of 15 numbers is 28. If two numbers, 18 and 32, are removed, the average of the remaining numbers becomes:",
        options: ["28.46", "29.00", "29.23", "30.00"],
        answer: 0,
        explanation: "Total = 15 × 28 = 420. Remaining total = 420 − 18 − 32 = 370. New average = 370/13 ≈ 28.46."
    },

    {
        question: "A train 180 m long crosses a platform 270 m long in 18 seconds. What is the speed of the train?",
        options: ["80 km/h", "85 km/h", "90 km/h", "100 km/h"],
        answer: 2,
        explanation: "Distance covered = 180 + 270 = 450 m. Speed = 450/18 = 25 m/s = 90 km/h."
    },

    {
        question: "If x + 1/x = 5, then the value of x³ + 1/x³ is:",
        options: ["110", "115", "120", "125"],
        answer: 0,
        explanation: "x³ + 1/x³ = (x + 1/x)³ − 3(x + 1/x) = 125 − 15 = 110."
    },

    {
        question: "A shopkeeper marks an article 40% above its cost price and allows two successive discounts of 10% and 15%. His profit percentage is:",
        options: ["5%", "7.1%", "8%", "10%"],
        answer: 1,
        explanation: "Take CP = 100. MP = 140. SP = 140 × 0.90 × 0.85 = 107.10. Profit = 7.1%."
    },

    {
        question: "The HCF of two numbers is 12 and their LCM is 720. If one of the numbers is 144, the other number is:",
        options: ["48", "60", "72", "84"],
        answer: 1,
        explanation: "Product of two numbers = HCF × LCM = 12 × 720 = 8640. Other number = 8640/144 = 60."
    },

    {
        question: "A can complete a work in 18 days and B can complete it in 24 days. They work together for 6 days, after which A leaves. In how many more days will B complete the remaining work?",
        options: ["8", "9", "10", "12"],
        answer: 2,
        explanation: "Together they complete 6(1/18 + 1/24) = 7/12 of the work. Remaining = 5/12. B takes (5/12) ÷ (1/24) = 10 days."
    },

    {
        question: "The radius of a cylinder is increased by 20% while its height is decreased by 10%. The percentage change in its volume is:",
        options: ["26% increase", "29.6% increase", "30% increase", "32% increase"],
        answer: 1,
        explanation: "Volume is proportional to r²h. New volume factor = 1.2² × 0.9 = 1.296. Hence increase = 29.6%."
    },

    {
        question: "A man spends 75% of his income. If his income increases by 20% and his expenditure increases by 10%, his savings increase by ₹2,000. What was his original income?",
        options: ["₹8,000", "₹9,000", "₹10,000", "₹12,000"],
        answer: null,
        explanation: "No listed option is correct. If original income is x, original expenditure is 0.75x. New saving = 1.20x − 0.825x = 0.375x. Original saving = 0.25x. Increase = 0.125x = ₹2,000, giving x = ₹16,000."
    },

    {
        question: "If the roots of the equation 2x² − 7x + 3 = 0 are α and β, then the value of α/β + β/α is:",
        options: ["37/6", "31/6", "29/6", "25/6"],
        answer: 0,
        explanation: "α + β = 7/2 and αβ = 3/2. Therefore (α² + β²)/(αβ) = [(7/2)² − 2(3/2)]/(3/2) = 37/6."
    },

    {
        question: "A mixture contains milk and water in the ratio 7 : 3. If 20 litres of the mixture are removed and replaced with water, the ratio becomes 7 : 5. What was the original quantity of the mixture?",
        options: ["60 L", "70 L", "80 L", "90 L"],
        answer: null,
        explanation: "The given data gives an original quantity of 120 L, which is not among the options. Therefore no listed option is correct."
    },

    {
        question: "The area of a rectangular field is 1,296 m². If its length is 18 m more than its breadth, then the perimeter of the field is:",
        options: ["144 m", "150 m", "156 m", "162 m"],
        answer: 0,
        explanation: "Let breadth = b. Then b(b+18)=1296, giving b=27 and length=45. Perimeter = 2(27+45)=144 m."
    },

    {
        question: "A sum becomes ₹14,520 in 2 years and ₹15,972 in 3 years at compound interest, compounded annually. The principal is:",
        options: ["₹12,000", "₹12,500", "₹13,000", "₹13,200"],
        answer: 0,
        explanation: "One year's growth factor = 15972/14520 = 1.10. Therefore P = 14520/(1.10)² = ₹12,000."
    },

    {
        question: "A boat travels 30 km downstream in 2 hours and the same distance upstream in 3 hours. The speed of the boat in still water is:",
        options: ["10 km/h", "12.5 km/h", "15 km/h", "20 km/h"],
        answer: 2,
        explanation: "Downstream speed = 15 km/h and upstream speed = 10 km/h. Still-water speed = (15+10)/2 = 12.5 km/h. Therefore the correct option is B."
    },

    {
        question: "If 20% of A = 30% of B and B = 40% of C, then A : C is:",
        options: ["3 : 5", "2 : 3", "3 : 4", "4 : 5"],
        answer: 0,
        explanation: "20A = 30B gives A:B = 3:2. Since B:C = 2:5, A:C = 3:5."
    },

    {
        question: "The angles of a triangle are in the ratio 2 : 3 : 4. The difference between the largest and smallest angles is:",
        options: ["30°", "35°", "40°", "45°"],
        answer: null,
        explanation: "The angles are 40°, 60° and 80°. Their largest-smallest difference is 40°, which is not listed among the options."
    },

    {
        question: "A person covers a certain distance at 48 km/h and reaches 15 minutes late. If he travels at 60 km/h, he reaches 9 minutes early. The distance is:",
        options: ["72 km", "80 km", "84 km", "96 km"],
        answer: 3,
        explanation: "Difference in travel times = 15 + 9 = 24 minutes = 0.4 hour. D/48 − D/60 = 0.4. Hence D = 96 km."
    },

    {
        question: "The smallest number which when divided by 12, 15 and 20 leaves a remainder of 7 in each case, but is exactly divisible by 17, is:",
        options: ["187", "247", "307", "367"],
        answer: 0,
        explanation: "Number = 60k + 7. The smallest value divisible by 17 is obtained at k=3: 60×3+7 = 187."
    },

    {
        question: "The diagonal of a rectangle is 25 cm and its length is 5 cm more than its breadth. The area of the rectangle is:",
        options: ["250 cm²", "300 cm²", "350 cm²", "400 cm²"],
        answer: 1,
        explanation: "Let breadth=b and length=b+5. b²+(b+5)²=625 gives b=15 and length=20. Area=300 cm²."
    },

    {
        question: "A, B and C invest ₹6,000, ₹8,000 and ₹10,000 respectively in a business. After 4 months, A doubles his investment, while B withdraws 25% of his investment. If the total annual profit is ₹46,000, then B's share of the profit is:",
        options: ["₹11,500", "₹12,000", "₹12,500", "₹13,000"],
        answer: 0,
        explanation: "A's capital-months = 6000×4 + 12000×8 = 120000. B = 8000×4 + 6000×8 = 80000. C = 10000×12 = 120000. Ratio = 3:2:3. B gets 2/8 × 46000 = ₹11,500."
    }
];


/* =========================================================
   REASONING QUESTIONS
========================================================= */

const REASONING_QUESTIONS = [

    {
        question: "Book : Author :: Painting : ?",
        options: ["Artist", "Gallery", "Colour", "Brush"],
        answer: 0,
        explanation: "A book is created by an author; similarly, a painting is created by an artist."
    },

    {
        question: "Find the missing number: 7, 13, 25, 49, 97, ?",
        options: ["181", "193", "195", "197"],
        answer: 1,
        explanation: "Each term is multiplied by 2 and 1 is subtracted: 7×2−1=13, 13×2−1=25, etc. Next = 97×2−1 = 193."
    },

    {
        question: "In a certain code language, MANGO is coded as OCPIQ. How will GRAPE be coded in the same language?",
        options: ["ITCRG", "HSBQF", "ITCQG", "HTCRG"],
        answer: 0,
        explanation: "Each letter is shifted two positions forward: G→I, R→T, A→C, P→R, E→G. Hence ITCRG."
    },

    {
        question: "Find the number that does not belong to the group.",
        options: ["121", "169", "225", "289"],
        answer: null,
        explanation: "All four numbers are perfect squares: 11², 13², 15² and 17². Therefore there is no unique odd one out."
    },

    {
        question: "Find the missing term: AZ, BY, CX, DW, ?",
        options: ["EU", "EV", "FV", "EW"],
        answer: 1,
        explanation: "First letters move A,B,C,D,E while second letters move Z,Y,X,W,V. Hence EV."
    },

    {
        question: "Pointing towards a woman, Ravi said, “She is the daughter of the only son of my grandfather.” How is the woman related to Ravi?",
        options: ["Sister", "Mother", "Daughter", "Aunt"],
        answer: 0,
        explanation: "The only son of Ravi's grandfather is Ravi's father. His daughter is Ravi's sister."
    },

    {
        question: "A person starts walking 8 m towards the north. He then turns right and walks 15 m, turns right again and walks 8 m, and finally turns left and walks 5 m. How far and in which direction is he from the starting point?",
        options: ["20 m East", "15 m East", "20 m West", "5 m East"],
        answer: 0,
        explanation: "After moving north 8 m and south 8 m, the vertical displacement is zero. Eastward displacement is 15+5=20 m."
    },

    {
        question: "In a class, Rohan ranks 17th from the top and 24th from the bottom. If three students who were absent are included in the ranking, what will be the total number of students in the class?",
        options: ["43", "44", "45", "46"],
        answer: 0,
        explanation: "Current total = 17+24−1 = 40. Adding 3 absent students gives 43."
    },

    {
        question: "Statements: All pens are books. Some books are papers. No paper is a pencil. Conclusions: I. Some pens are papers. II. No pencil is a book. III. Some books are not pencils. Which conclusion(s) logically follow?",
        options: ["Only I", "Only III", "II and III", "I and III"],
        answer: 1,
        explanation: "Some books are papers and no paper is a pencil, so some books are definitely not pencils. The other conclusions do not necessarily follow."
    },

    {
        question: "Find the number that replaces the question mark: 4 | 7 | 39; 5 | 8 | 57; 6 | 9 | ?",
        options: ["69", "72", "75", "78"],
        answer: 2,
        explanation: "Pattern: first × second + (first + second). Thus 4×7+11=39, 5×8+13=53, which does not match the given 57. Therefore the supplied number pattern is inconsistent."
    },

    {
        question: "Five persons P, Q, R, S and T are sitting in a row facing north. P sits immediately to the left of Q. R sits at one of the extreme ends. S sits immediately between R and T. Q is not at an extreme end. Who sits in the middle?",
        options: ["P", "Q", "S", "T"],
        answer: 3,
        explanation: "The valid arrangement is R-S-T-P-Q. Therefore T sits in the middle."
    },

    {
        question: "If + means ×, − means ÷, × means +, and ÷ means −, then find: 18 + 6 − 3 × 4 ÷ 5 = ?",
        options: ["35", "37", "39", "41"],
        answer: 0,
        explanation: "Replace the symbols: 18×6÷3+4−5 = 36+4−5 = 35."
    },

    {
        question: "The government has introduced a new rule requiring all vehicles to undergo pollution testing every six months. Conclusions: I. Vehicle pollution is considered a concern by the authorities. II. All vehicles currently cause dangerous pollution. III. Regular testing may help monitor vehicle emissions. Which conclusion(s) logically follow?",
        options: ["Only I", "Only II", "I and III", "II and III"],
        answer: 2,
        explanation: "The rule indicates concern about emissions and regular testing can help monitor them. It does not establish that every vehicle causes dangerous pollution."
    },

    {
        question: "If CAT = 24 and DOG = 26, then according to the same pattern, BAT = ?",
        options: ["21", "22", "23", "24"],
        answer: 2,
        explanation: "The value is the sum of alphabet positions. BAT = 2+1+20 = 23."
    },

    {
        question: "If 1 January 2024 was Monday, then what day of the week was 1 January 2025?",
        options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        answer: 1,
        explanation: "2024 was a leap year, so the weekday advances by 2 days. Monday + 2 = Wednesday."
    },

    {
        question: "In a group of 80 students: 45 like Mathematics, 35 like Science, and 20 like both Mathematics and Science. How many students like neither Mathematics nor Science?",
        options: ["15", "20", "25", "30"],
        answer: 1,
        explanation: "Students liking at least one = 45+35−20 = 60. Neither = 80−60 = 20."
    },

    {
        question: "Arrange the following words in a logical order: 1. Seed 2. Flower 3. Fruit 4. Plant 5. Sprout",
        options: ["1, 5, 4, 2, 3", "1, 4, 5, 2, 3", "5, 1, 4, 3, 2", "1, 5, 2, 4, 3"],
        answer: 0,
        explanation: "The logical growth sequence is Seed → Sprout → Plant → Flower → Fruit."
    },

    {
        question: "Choose the pair that follows the same relationship as: 16 : 272",
        options: ["18 : 342", "19 : 380", "21 : 462", "22 : 506"],
        answer: null,
        explanation: "16×17=272, 18×19=342, 19×20=380, 21×22=462 and 22×23=506. All four options follow the same relationship, so there is no unique answer."
    },

    {
        question: "If the letters of the word COMPUTER are arranged alphabetically from left to right, which letter will be third from the right?",
        options: ["M", "O", "P", "R"],
        answer: 3,
        explanation: "Alphabetical order is C, E, M, O, P, R, T, U. Third from the right is R."
    },

    {
        question: "Statement I: Some teachers are writers. Statement II: All writers are readers. Which of the following is definitely true?",
        options: ["All teachers are readers.", "Some teachers are readers.", "No teacher is a reader.", "Some readers are not writers."],
        answer: 1,
        explanation: "Some teachers are writers, and all writers are readers. Therefore some teachers are readers."
    }
];


/* =========================================================
   GK QUESTIONS
========================================================= */

const GK_QUESTIONS = [

    {
        question: "Which Article of the Indian Constitution empowers the President to promulgate an Ordinance when Parliament is not in session?",
        options: ["Article 123", "Article 143", "Article 213", "Article 356"],
        answer: 0,
        explanation: "Article 123 gives the President the power to promulgate Ordinances when Parliament is not in session."
    },

    {
        question: "The term “Blue Revolution” in India is primarily associated with:",
        options: ["Milk production", "Fish production", "Oilseed production", "Horticulture"],
        answer: 1,
        explanation: "The Blue Revolution is associated with fisheries and fish production."
    },

    {
        question: "Which of the following pairs is incorrectly matched?",
        options: ["Vitamin C — Scurvy", "Vitamin D — Rickets", "Vitamin K — Beriberi", "Vitamin B₁ — Beriberi"],
        answer: 2,
        explanation: "Vitamin K is mainly associated with blood clotting. Beriberi is caused by vitamin B1 deficiency."
    },

    {
        question: "The 73rd Constitutional Amendment Act is primarily related to:",
        options: ["Municipalities", "Fundamental Duties", "Panchayati Raj Institutions", "Cooperative Societies"],
        answer: 2,
        explanation: "The 73rd Amendment gave constitutional status to Panchayati Raj Institutions."
    },

    {
        question: "Which institution is responsible for issuing most currency notes in India?",
        options: ["Ministry of Finance", "Reserve Bank of India", "State Bank of India", "SEBI"],
        answer: 1,
        explanation: "The Reserve Bank of India issues most banknotes in India. The ₹1 note is issued by the Government of India."
    },

    {
        question: "The Ibadat Khana was established at Fatehpur Sikri by:",
        options: ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"],
        answer: 0,
        explanation: "Emperor Akbar established the Ibadat Khana at Fatehpur Sikri."
    },

    {
        question: "Which of the following is not a Fundamental Duty under Article 51A?",
        options: ["To protect and improve the natural environment", "To develop scientific temper", "To provide free and compulsory education to children aged 6–14 years", "To safeguard public property"],
        answer: 2,
        explanation: "Providing free and compulsory education to children aged 6–14 is a Fundamental Right under Article 21A, not a Fundamental Duty."
    },

    {
        question: "When a person moves from the Earth's surface towards the centre of the Earth, the value of acceleration due to gravity generally:",
        options: ["Increases continuously", "Remains constant", "Decreases and becomes zero at the centre", "First increases and then becomes infinite"],
        answer: 2,
        explanation: "Inside the Earth, acceleration due to gravity decreases with depth and becomes zero at the centre."
    },

    {
        question: "Which of the following is the largest gland in the human body?",
        options: ["Pancreas", "Liver", "Thyroid", "Pituitary"],
        answer: 1,
        explanation: "The liver is the largest gland in the human body."
    },

    {
        question: "The Permanent Settlement was introduced in Bengal in 1793 during the tenure of:",
        options: ["Lord Cornwallis", "Lord Wellesley", "Lord Dalhousie", "Warren Hastings"],
        answer: 0,
        explanation: "The Permanent Settlement was introduced by Lord Cornwallis in 1793."
    },

    {
        question: "Which of the following rivers is known as the “Sorrow of Bihar”?",
        options: ["Gandak", "Son", "Kosi", "Damodar"],
        answer: 2,
        explanation: "The Kosi River is popularly known as the Sorrow of Bihar because of its frequent flooding."
    },

    {
        question: "The Finance Commission of India is constituted under:",
        options: ["Article 280", "Article 324", "Article 360", "Article 368"],
        answer: 0,
        explanation: "Article 280 provides for the constitution of the Finance Commission."
    },

    {
        question: "Which gas is released in large quantities during the complete combustion of fossil fuels and is a major greenhouse gas?",
        options: ["Nitrogen", "Carbon dioxide", "Hydrogen", "Helium"],
        answer: 1,
        explanation: "Complete combustion of fossil fuels releases carbon dioxide, a major greenhouse gas."
    },

    {
        question: "The Fourth Buddhist Council is traditionally associated with the reign of:",
        options: ["Ashoka", "Kanishka", "Chandragupta Maurya", "Harshavardhana"],
        answer: 1,
        explanation: "The Fourth Buddhist Council is traditionally associated with Emperor Kanishka."
    },

    {
        question: "If the Cash Reserve Ratio (CRR) is increased by the Reserve Bank of India, the immediate impact on the lending capacity of commercial banks is generally:",
        options: ["It increases", "It remains unchanged", "It decreases", "It becomes unlimited"],
        answer: 2,
        explanation: "A higher CRR requires banks to keep more funds with the RBI, reducing the funds available for lending."
    },

    {
        question: "Which classical dance form is traditionally associated with Assam?",
        options: ["Kathakali", "Sattriya", "Kuchipudi", "Manipuri"],
        answer: 1,
        explanation: "Sattriya is the classical dance form traditionally associated with Assam."
    },

    {
        question: "Which Constitutional Amendment reduced the voting age in India from 21 years to 18 years?",
        options: ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
        answer: 2,
        explanation: "The 61st Constitutional Amendment Act, 1988 reduced the voting age from 21 to 18."
    },

    {
        question: "A person standing 5 m in front of a plane mirror moves 2 m towards it. The distance between the person and his image becomes:",
        options: ["3 m", "5 m", "6 m", "8 m"],
        answer: 2,
        explanation: "The person is now 3 m from the mirror. His image is 3 m behind it. Distance between person and image = 6 m."
    },

    {
        question: "Which of the following pairs is correctly matched?",
        options: ["Lothal — Dockyard", "Sanchi — Rock-cut caves", "Nalanda — Harappan site", "Ajanta — Mauryan capital"],
        answer: 0,
        explanation: "Lothal is famous for its ancient dockyard."
    },

    {
        question: "Which of the following is not included in the list of Fundamental Rights at present?",
        options: ["Right to Equality", "Right to Freedom", "Right to Property", "Right against Exploitation"],
        answer: 2,
        explanation: "The Right to Property is no longer a Fundamental Right; it is a constitutional legal right under Article 300A."
    }
];


/* =========================================================
   COMPUTER QUESTIONS
========================================================= */

const COMPUTER_QUESTIONS = [

    {
        question: "Which of the following memory types is volatile and loses its contents when the power supply is switched off?",
        options: ["ROM", "RAM", "SSD", "Flash Memory"],
        answer: 1,
        explanation: "RAM is volatile memory and loses its contents when power is switched off."
    },

    {
        question: "In a computer, the primary function of the ALU is to:",
        options: ["Store data permanently", "Control input and output devices", "Perform arithmetic and logical operations", "Manage network connections"],
        answer: 2,
        explanation: "The Arithmetic Logic Unit performs arithmetic and logical operations."
    },

    {
        question: "Which of the following is not an operating system?",
        options: ["Linux", "Windows", "Oracle", "Android"],
        answer: 2,
        explanation: "Oracle is a database/software company and its database products are not operating systems."
    },

    {
        question: "In MS Excel, which symbol is generally used to make a cell reference absolute?",
        options: ["#", "&", "@", "$"],
        answer: 3,
        explanation: "The dollar sign ($) is used for absolute cell references in Excel."
    },

    {
        question: "Which protocol is primarily used for secure communication between a web browser and a web server?",
        options: ["HTTP", "HTTPS", "FTP", "SMTP"],
        answer: 1,
        explanation: "HTTPS provides encrypted communication between a browser and web server."
    },

    {
        question: "A computer's cache memory is mainly used to:",
        options: ["Store files permanently", "Increase the speed of access to frequently used data", "Replace secondary storage", "Connect computers to a network"],
        answer: 1,
        explanation: "Cache stores frequently accessed data close to the CPU to reduce access time."
    },

    {
        question: "Which of the following represents the correct order of increasing storage capacity?",
        options: ["KB → MB → GB → TB", "MB → KB → GB → TB", "GB → MB → TB → KB", "TB → GB → MB → KB"],
        answer: 0,
        explanation: "The usual order is Kilobyte → Megabyte → Gigabyte → Terabyte."
    },

    {
        question: "In MS Word, Ctrl + H is generally used for:",
        options: ["Highlighting text", "Opening the Help menu", "Find and Replace", "Inserting a hyperlink"],
        answer: 2,
        explanation: "Ctrl + H opens the Find and Replace function in MS Word."
    },

    {
        question: "Which device converts digital signals into analog signals and vice versa for communication over certain networks?",
        options: ["Switch", "Modem", "Hub", "Repeater"],
        answer: 1,
        explanation: "A modem modulates and demodulates signals, converting between digital and analog forms."
    },

    {
        question: "Which of the following is an example of system software?",
        options: ["MS Word", "Adobe Photoshop", "Operating System", "PowerPoint"],
        answer: 2,
        explanation: "An operating system is system software that manages computer hardware and software resources."
    }
];


/* =========================================================
   ENGLISH QUESTIONS
========================================================= */

const ENGLISH_QUESTIONS = [

    {
        question: "What is the central idea of the passage?",
        options: [
            "Digital technology has made traditional education unnecessary.",
            "Students should avoid using the internet for academic purposes.",
            "Effective learning requires critical thinking beyond simply accessing information.",
            "Online information is generally unreliable and should be ignored."
        ],
        answer: 2,
        explanation: "The passage emphasizes that meaningful learning requires critical evaluation rather than merely accessing information."
    },

    {
        question: "According to the passage, accessibility of information does not necessarily guarantee:",
        options: ["Understanding", "Curiosity", "Technology", "Communication"],
        answer: 0,
        explanation: "The passage directly states that accessibility alone does not guarantee understanding."
    },

    {
        question: "The word “superficial” as used in the passage most nearly means:",
        options: ["Thorough", "Deep", "Practical", "Shallow"],
        answer: 3,
        explanation: "Superficial means shallow or lacking depth."
    },

    {
        question: "Which of the following can be inferred from the passage?",
        options: [
            "Search engines are incapable of providing useful information.",
            "Students should completely depend on teachers instead of digital tools.",
            "Critical evaluation is necessary even when information is easily available.",
            "Reading large amounts of information always results in better learning."
        ],
        answer: 2,
        explanation: "The passage emphasizes that information must be critically evaluated even when it is easily accessible."
    },

    {
        question: "According to the passage, digital tools are most effective when they:",
        options: [
            "Replace independent thinking",
            "Are used as instruments to support learning",
            "Provide ready-made conclusions",
            "Eliminate the need for reflection"
        ],
        answer: 1,
        explanation: "The passage states that digital tools are most effective when used as instruments rather than substitutes for thought."
    },

    {
        question: "Error Spotting: Identify the part containing an error: Neither the teacher nor the students was aware of the change in the examination schedule.",
        options: ["Neither the teacher", "nor the students was", "aware of the change", "in the examination schedule"],
        answer: 1,
        explanation: "With 'neither...nor', the verb agrees with the nearer subject. 'Students' is plural, so 'were' is required."
    },

    {
        question: "The committee decided to postpone the meeting ______ the chairman returned from Delhi.",
        options: ["until", "unless", "despite", "whereas"],
        answer: 0,
        explanation: "'Until' correctly indicates the time up to which the meeting was postponed."
    },

    {
        question: "Choose the word closest in meaning to “Meticulous”.",
        options: ["Careless", "Thorough", "Impulsive", "Negligent"],
        answer: 1,
        explanation: "Meticulous means very careful, precise and thorough."
    },

    {
        question: "Choose the word opposite in meaning to “Obsolete”.",
        options: ["Ancient", "Outdated", "Modern", "Useless"],
        answer: 2,
        explanation: "Obsolete means outdated; its opposite is modern."
    },

    {
        question: "Choose the most appropriate meaning of the idiom: “To leave no stone unturned”.",
        options: ["To avoid taking risks", "To search thoroughly", "To create unnecessary problems", "To refuse an opportunity"],
        answer: 1,
        explanation: "The idiom means to make every possible effort or search thoroughly."
    },

    {
        question: "A person who deliberately tries to destroy or damage an established government or political system is called a:",
        options: ["Philanthropist", "Pacifist", "Extortionist", "Subversive"],
        answer: 3,
        explanation: "A subversive is a person who seeks to undermine or overthrow an established system."
    },

    {
        question: "Choose the best replacement for the underlined part: Hardly had the train left the station than it began to rain heavily.",
        options: ["when it began", "then it began", "than it had begun", "when it had begun"],
        answer: 0,
        explanation: "The standard correlative construction is 'Hardly had...when...'."
    },

    {
        question: "Choose the correct passive form: People believe that the scientist has discovered a new method.",
        options: [
            "It is believed that a new method has been discovered by the scientist.",
            "It was believed that a new method is discovered by the scientist.",
            "A new method believed to have discovered by the scientist.",
            "It has believed that the scientist discovered a new method."
        ],
        answer: 0,
        explanation: "The correct passive construction is 'It is believed that...' followed by the passive perfect form."
    },

    {
        question: "Choose the correct indirect form: The teacher said to the students, “Do not waste your time.”",
        options: [
            "The teacher told the students that they did not waste their time.",
            "The teacher advised the students not to waste their time.",
            "The teacher asked the students that do not waste their time.",
            "The teacher said that the students should not wasted their time."
        ],
        answer: 1,
        explanation: "An imperative negative command/advice is reported using 'advised + object + not to + verb'."
    },

    {
        question: "Arrange the following parts to form a meaningful sentence: P. because it encourages people Q. Reading is considered valuable R. to examine ideas critically S. and develop independent opinions",
        options: ["QPRS", "QRPS", "PQRS", "RSPQ"],
        answer: 0,
        explanation: "The meaningful sentence is: 'Reading is considered valuable because it encourages people to examine ideas critically and develop independent opinions.'"
    },

    {
        question: "Despite ______ hard, he could not achieve the desired result.",
        options: ["work", "worked", "working", "to work"],
        answer: 2,
        explanation: "The preposition 'despite' is followed here by the gerund 'working'."
    },

    {
        question: "Identify the part containing an error: Each of the candidates have submitted their application before the deadline.",
        options: ["Each of the candidates", "have submitted", "their application", "before the deadline"],
        answer: 1,
        explanation: "'Each' is singular, so the verb should be 'has submitted'."
    },

    {
        question: "The scientist's explanation was so ______ that even a complicated concept became easy to understand.",
        options: ["obscure", "lucid", "ambiguous", "vague"],
        answer: 1,
        explanation: "Lucid means clear and easy to understand."
    },

    {
        question: "Choose the grammatically correct replacement: No sooner did he reach the office when the meeting started.",
        options: ["than the meeting started", "when the meeting had started", "than the meeting had started", "then the meeting started"],
        answer: 0,
        explanation: "The correct correlative construction is 'No sooner...than...'."
    },

    {
        question: "Choose the word that best describes a person who accepts that something is true without sufficient evidence.",
        options: ["Skeptic", "Pragmatist", "Credulous", "Rationalist"],
        answer: 2,
        explanation: "Credulous describes someone who is too ready to believe something without sufficient evidence."
    }
];


/* =========================================================
   CURRENT AFFAIRS — JUNE, JULY & AUGUST 2026
========================================================= */

const CURRENT_AFFAIRS_QUESTIONS = [

    {
        question: "The India–Oman Comprehensive Economic Partnership Agreement (CEPA) came into force on which date in 2026?",
        options: ["1 June 2026", "15 June 2026", "1 July 2026", "18 June 2026"],
        answer: 0,
        explanation: "The India–Oman CEPA came into force on 1 June 2026."
    },

    {
        question: "According to the findings of NFHS-6, institutional deliveries in India increased from 88.6% under NFHS-5 to approximately:",
        options: ["89.4%", "90.6%", "91.3%", "95.9%"],
        answer: 1,
        explanation: "NFHS-6 reported institutional deliveries of 90.6%. The 91.3% figure refers to births attended by skilled health personnel."
    },

    {
        question: "In July 2026, Sarnath was inscribed on the UNESCO World Heritage List. This became India's:",
        options: ["43rd UNESCO World Heritage Site", "44th UNESCO World Heritage Site", "45th UNESCO World Heritage Site", "46th UNESCO World Heritage Site"],
        answer: 2,
        explanation: "UNESCO states that the inscription of Sarnath made it India's 45th World Heritage Site."
    },

    {
        question: "Vikram-1, launched by Skyroot Aerospace in July 2026, was significant because it:",
        options: [
            "Became India's first human-rated orbital rocket",
            "Became India's first privately developed orbital launch vehicle",
            "Became India's first reusable orbital vehicle",
            "Became India's first lunar launch vehicle"
        ],
        answer: 1,
        explanation: "Vikram-1 became India's first privately developed orbital launch vehicle."
    },

    {
        question: "The Union Cabinet approved Semicon 2.0 in July 2026 with a total budget outlay of:",
        options: ["₹76,500 crore", "₹1,00,000 crore", "₹1,27,500 crore", "₹1,50,000 crore"],
        answer: 2,
        explanation: "The Union Cabinet approved Semicon 2.0 with a total budget outlay of ₹1,27,500 crore."
    },

    {
        question: "The sixth round of the National Family Health Survey (NFHS-6) covered approximately how many districts?",
        options: ["640", "676", "705", "715"],
        answer: 3,
        explanation: "NFHS-6 covered approximately 715 districts and provided estimates at national, state/UT and district levels."
    },

    {
        question: "According to the August 2026 economic data, India's unemployment rate under the Current Weekly Status measure fell to approximately:",
        options: ["4.5%", "5.0%", "5.8%", "6.2%"],
        answer: 1,
        explanation: "Reuters reported India's August 2026 unemployment rate at 5.0% under the Current Weekly Status measure."
    },

    {
        question: "India's August 2026 merchandise trade deficit was reported at approximately:",
        options: ["$21.86 billion", "$24.68 billion", "$26.86 billion", "$29.41 billion"],
        answer: 2,
        explanation: "India's August 2026 merchandise trade deficit was reported at approximately $26.86 billion."
    },

    {
        question: "Under the India–Oman CEPA, Oman provided immediate duty-free access on how many textile and apparel tariff lines?",
        options: ["845", "895", "925", "945"],
        answer: 3,
        explanation: "Oman provided immediate duty-free access on all 945 textile and apparel tariff lines."
    },

    {
        question: "Vikram-1 was designed to deliver small satellites of up to approximately what mass into Low Earth Orbit (LEO)?",
        options: ["150 kg", "250 kg", "350 kg", "500 kg"],
        answer: 2,
        explanation: "Vikram-1 has a payload capability of approximately 350 kg to Low Earth Orbit."
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


/* =========================================================
   EXAM PROTECTION VARIABLES
========================================================= */

let examVisibilityTimer = null;
let examHistoryActive = false;


/* =========================================================
   GET ELEMENT
========================================================= */

function get(id) {
    return document.getElementById(id);
}


/* =========================================================
   INITIALIZE EXAM DATA
========================================================= */

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


/* =========================================================
   SHOW PAGE
========================================================= */

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
   UPDATE DATE/TIME
========================================================= */

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


/* =========================================================
   CURRENT AFFAIRS BUTTON
========================================================= */

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


/* =========================================================
   SUBJECT BUTTONS
========================================================= */

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


/* =========================================================
   SAVE CURRENT SUBJECT POSITION
========================================================= */

function saveCurrentSubjectPosition() {

    if (!SUBJECTS.includes(currentSubject)) {
        return;
    }

    subjectQuestionPositions[currentSubject] =
        currentQuestionIndex;
}


/* =========================================================
   RENDER QUESTION
   GLOBAL NUMBERING:
   Math = 1-20
   Reasoning = 21-40
   GK = 41-60
   Computer = 61-70
   English = 71-90
   Current Affairs = 91-100
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


/* =========================================================
   NAVIGATION BUTTONS
========================================================= */

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


/* =========================================================
   NEXT QUESTION
========================================================= */

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


/* =========================================================
   PREVIOUS QUESTION
========================================================= */

function goToPreviousQuestion() {

    if (currentQuestionIndex > 0) {

        currentQuestionIndex--;

        saveCurrentSubjectPosition();

        renderQuestion();
        renderQuestionPalette();
    }
}


/* =========================================================
   CLEAR ANSWER
========================================================= */

function clearCurrentAnswer() {

    if (!answers[currentSubject]) {
        return;
    }

    answers[currentSubject][currentQuestionIndex] =
        null;

    renderQuestion();
    renderQuestionPalette();
}


/* =========================================================
   REVIEW
========================================================= */

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


/* =========================================================
   OPEN PALETTE
========================================================= */

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


/* =========================================================
   CLOSE PALETTE
========================================================= */

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


/* =========================================================
   START TIMER
========================================================= */

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
   CHECK WHETHER EXAM IS RUNNING
========================================================= */

function isExamRunning() {

    const examPage =
        get("examPage");

    return (
        !examSubmitted &&
        examPage &&
        examPage.classList.contains("active")
    );
}


/* =========================================================
   START EXAM PROTECTION
========================================================= */

function startExamProtection() {

    if (!isExamRunning()) {
        return;
    }

    clearTimeout(examVisibilityTimer);

    examVisibilityTimer = null;

    examHistoryActive = true;


    history.pushState(
        {
            lakshyaExam: true
        },
        "",
        window.location.href
    );
}


/* =========================================================
   HANDLE VISIBILITY CHANGE
========================================================= */

function handleExamVisibility() {

    if (!isExamRunning()) {
        return;
    }


    if (document.visibilityState === "hidden") {

        clearTimeout(examVisibilityTimer);


        examVisibilityTimer =
            setTimeout(() => {

                if (
                    isExamRunning() &&
                    document.visibilityState === "hidden"
                ) {

                    submitExam();
                }

            }, 1000);
    }


    else if (
        document.visibilityState === "visible"
    ) {

        clearTimeout(examVisibilityTimer);

        examVisibilityTimer = null;
    }
}


/* =========================================================
   HANDLE PAGE HIDE
========================================================= */

function handleExamPageHide() {

    if (!isExamRunning()) {
        return;
    }
}


/* =========================================================
   BACK BUTTON = AUTO SUBMIT
========================================================= */

function handleExamBackButton() {

    if (!isExamRunning()) {
        return;
    }


    history.pushState(
        {
            lakshyaExam: true
        },
        "",
        window.location.href
    );


    submitExam();
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


    clearTimeout(examVisibilityTimer);

    examVisibilityTimer = null;


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


    startExamProtection();


    enterFullscreen();
}


/* =========================================================
   SUBMIT MODAL
========================================================= */

function openSubmitModal() {

    if (!isExamRunning()) {
        return;
    }

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
                    question.answer !== null &&
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
                    correctAnswer !== null &&
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


                let correctText = "No valid option";

                if (correctAnswer !== null) {

                    correctText =
                        `${String.fromCharCode(65 + correctAnswer)}. ${question.options[correctAnswer]}`;
                }


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


    clearTimeout(
        examVisibilityTimer
    );


    examVisibilityTimer = null;


    examHistoryActive = false;


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
   KEYBOARD NAVIGATION + SECURITY SHORTCUT BLOCKING
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (!isExamRunning()) {
            return;
        }


        const key =
            event.key.toLowerCase();


        if (
            event.ctrlKey &&
            [
                "c",
                "v",
                "x",
                "u",
                "s",
                "p"
            ].includes(key)
        ) {

            event.preventDefault();
            event.stopPropagation();

            return;
        }


        if (
            event.ctrlKey &&
            event.shiftKey &&
            [
                "i",
                "j",
                "c"
            ].includes(key)
        ) {

            event.preventDefault();
            event.stopPropagation();

            return;
        }


        if (event.key === "F12") {

            event.preventDefault();
            event.stopPropagation();

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
   COPY BLOCK
========================================================= */

document.addEventListener(
    "copy",
    event => {

        if (isExamRunning()) {

            event.preventDefault();
        }
    }
);


/* =========================================================
   CUT BLOCK
========================================================= */

document.addEventListener(
    "cut",
    event => {

        if (isExamRunning()) {

            event.preventDefault();
        }
    }
);


/* =========================================================
   PASTE BLOCK
========================================================= */

document.addEventListener(
    "paste",
    event => {

        if (isExamRunning()) {

            event.preventDefault();
        }
    }
);


/* =========================================================
   TEXT SELECTION BLOCK
========================================================= */

document.addEventListener(
    "selectstart",
    event => {

        if (isExamRunning()) {

            event.preventDefault();
        }
    }
);


/* =========================================================
   DRAG BLOCK
========================================================= */

document.addEventListener(
    "dragstart",
    event => {

        if (isExamRunning()) {

            event.preventDefault();
        }
    }
);


/* =========================================================
   RIGHT CLICK BLOCK
========================================================= */

document.addEventListener(
    "contextmenu",
    event => {

        if (isExamRunning()) {

            event.preventDefault();
        }
    }
);


/* =========================================================
   VISIBILITY CHANGE PROTECTION
========================================================= */

document.addEventListener(
    "visibilitychange",
    handleExamVisibility,
    true
);


/* =========================================================
   PAGE HIDE
========================================================= */

window.addEventListener(
    "pagehide",
    handleExamPageHide,
    true
);


/* =========================================================
   BACK BUTTON PROTECTION
========================================================= */

window.addEventListener(
    "popstate",
    () => {

        if (
            examHistoryActive &&
            isExamRunning()
        ) {

            handleExamBackButton();
        }
    }
);


/* =========================================================
   BEFORE UNLOAD
========================================================= */

window.addEventListener(
    "beforeunload",
    event => {

        if (isExamRunning()) {

            event.preventDefault();

            event.returnValue = "";
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


        /* HOME → LOGIN */

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


        /* START EXAM */

        const startExamBtn =
            get("startExamBtn");


        if (startExamBtn) {

            startExamBtn.addEventListener(
                "click",
                startExam
            );
        }


        /* PASSWORD ENTER */

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


        /* STUDENT NAME ENTER */

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


        /* PREVIOUS */

        const previousBtn =
            get("previousBtn");


        if (previousBtn) {

            previousBtn.addEventListener(
                "click",
                goToPreviousQuestion
            );
        }


        /* NEXT */

        const nextBtn =
            get("nextBtn");


        if (nextBtn) {

            nextBtn.addEventListener(
                "click",
                goToNextQuestion
            );
        }


        /* REVIEW */

        const reviewBtn =
            get("reviewBtn");


        if (reviewBtn) {

            reviewBtn.addEventListener(
                "click",
                toggleReview
            );
        }


        /* CLEAR */

        const clearBtn =
            get("clearBtn");


        if (clearBtn) {

            clearBtn.addEventListener(
                "click",
                clearCurrentAnswer
            );
        }


        /* OPEN PALETTE */

        const openPaletteBtn =
            get("openPaletteBtn");


        if (openPaletteBtn) {

            openPaletteBtn.addEventListener(
                "click",
                openPalette
            );
        }


        /* CLOSE PALETTE */

        const closePaletteBtn =
            get("closePaletteBtn");


        if (closePaletteBtn) {

            closePaletteBtn.addEventListener(
                "click",
                closePalette
            );
        }


        /* PALETTE OVERLAY */

        const paletteOverlay =
            get("paletteOverlay");


        if (paletteOverlay) {

            paletteOverlay.addEventListener(
                "click",
                closePalette
            );
        }


        /* SUBMIT */

        const submitBtn =
            get("submitBtn");


        if (submitBtn) {

            submitBtn.addEventListener(
                "click",
                openSubmitModal
            );
        }


        /* CONFIRM SUBMIT */

        const confirmSubmitBtn =
            get("confirmSubmitBtn");


        if (confirmSubmitBtn) {

            confirmSubmitBtn.addEventListener(
                "click",
                confirmSubmission
            );
        }


        /* CANCEL SUBMIT */

        const cancelSubmitBtn =
            get("cancelSubmitBtn");


        if (cancelSubmitBtn) {

            cancelSubmitBtn.addEventListener(
                "click",
                closeSubmitModal
            );
        }


        /* FULLSCREEN */

        const fullscreenBtn =
            get("fullscreenBtn");


        if (fullscreenBtn) {

            fullscreenBtn.addEventListener(
                "click",
                enterFullscreen
            );
        }

    }
);


/* =========================================================
   INITIAL DATE/TIME
========================================================= */

updateDateTime();