const questions = [
    {
        question: "İlk azərbaycanlı kimyaçı qadın kimdir ?",
        choices: ["Svetlana Məmmədova", "Reyhan Əliyeva", "İzzət Orucova", "Əminə Salamova"],
        answer: 2
    },

    {
        question: "Lakmus kağızını göyərtməsinə, özünəməxsus kəskin iyinə və qatı xlorid turşusunun dumanı ilə ağ tüstü əmələ gətirməsinə görə təyin etmək olar. Bu hansı maddədir ?",
        choices: ["Na2O", "NH3", "SO2", "H2S"],
        answer: 1
    },

    {
        question: "Kəşf edildikdə həyatsız adlandırılsada əslində həyat üçün əvəzsiz olan bu ziddiyətli elementin adı nədir ?",
        choices: ["Ozon", "Azot", "Oksigen", "Xlor"],
        answer: 1
    },

    {
        question: "Ağardılmış parçadan xloru təmizləmək üçün hansı maddədən istifadə olunur ?",
        choices: ["Na2CO3", "NaHCO3", "NaHSO3", "NaHSO4"],
        answer: 2
    },

    {
        question: "Kibrit qutusunun yan səthi hansı maddədən ibarətdir ?",
        choices: ["Qırmızı fosfor", "Kükürd", "Bertole duzu", "Qara fosfor"],
        answer: 0
    },

    {
        question: "Hansı elementin adı yarımadanın adından götürülmüşdür ?",
        choices: ["Sc", "Ge", "Ag", "Ga"],
        answer: 0
    },

    {
        question: "Bitkilərin budaq və gövdələrinə, heyvanların mühafizə örtüklərinə möhkəmlik verir.Qamışın möhkəmliyi,balıqların pulcuğunun kəpənək və quşların qanadlarının,heyvan yununun möhkəmliyi onun tərkibində olan hansı maddədən ibarətdir ?",
        choices: ["Si", "CO2", "P2O5", "SiO2"],
        answer: 3
    },

    {
        question: "Kibriti yandırdıqda ilk anda hansı qazın iyi gəlir ?",
        choices: ["Kükürd qazı", "Ammonyak", "Hidrogen-xlorid", "Karbon qazı"],
        answer: 0
    },

    {
        question: "Qlauber duzunun tərkibində neçə oksigen atomu var ?",
        choices: ["10", "14", "4", "13"],
        answer: 1
    },

    {
        question: "Bu qazla tənəffüs etdikdə, o qanın hemoqlabini ilə birləşib orqanizmin oksigenlə təmin olunmasını kəskin çətinləşdirir və bu insan ölümü ilə nəticələnə bilər.",
        choices: ["CO2", "SO2", "H2S", "CO"],
        answer: 3
    },

    {
        question: "Yerə dağılmış civəni necə zərərsizləşdirmək olar ?",
        choices: ["Alüminium tozu", "Kükürd tozu", "Dəmir tozu", "Yod kristalı"],
        answer: 1
    },

    {
        question: "d orbitalında maksimum neçə elektron olur ? ?",
        choices: ["6", "5", "10", "7"],
        answer: 2
    },

    {
        question: "Etil spirtinin 5 % -li məhluluunda hansı maddə var ?",
        choices: ["Kükürd", "Yod", "Brom", "Karbon"],
        answer: 1
    },

    {
        question: "Mədə şirəsinin tərkibində hansı maddə var və neçə faizi təşkil edir ?",
        choices: ["HCl, 0.03%", "HClO, 0.06%", "HCl, 0.3%", "HClO, 0.6%"],
        answer: 2
    },
    
    {
        question: "Birləşmələri alovu sarı rəngə boyayır, ağ neftdə saxlanılır ?",
        choices: ["Natrium", "Kalium", "Kalsium", "Litium"],
        answer: 0
    },

    {
        question: "Səyyar soyuducularda tez xarab olan məhsulları saxlamaq üçün hansı maddədən istifadə olunur ?",
        choices: ["P2O5", "N2O5", "SO3", "CO2"],
        answer: 2
    },

    {
        question: "Fotosintez prosesini sürətləndirici və karbohidratların toplanmasına kömək edir ?",
        choices: ["Azot", "Kalium", "Fosfor", "Natrium"],
        answer: 1
    },

    {
        question: "E1 < E2 << E3 <E4 buna əsasən elementin yerləşdiyi qrupu müəyyən edin.",
        choices: ["3", "4", "1", "2"],
        answer: 3
    },

    {
        question: "Yer kürəsinin nüvəsi nədən ibarətdir ?",
        choices: ["Dəmir", "Alüminium", "Xrom", "Mis"],
        answer: 0
    },

    {
        question: "Flüorid turşusunu  hansı qabda saxlamaq olmaz ?",
        choices: ["Polad", "Çuqun", "Mis", "Şüşə"],
        answer: 3
    },

    {
        question: "İnsan bədəninin neçə faizi oksigendir ?",
        choices: ["70", "75", "65", "80"],
        answer: 2
    },

    {
        question: "Günəş batareyalarının hazırlanmasında yarımkeçiricilik xassəsinə malikdir.Onun əsasında hazırlanmış fotoelementlər udulan günəş enerjisinin 10% -ə qədərinin elektrik enerjisinə çevirir.",
        choices: ["Qrafit", "Almaz", "Fosfor", "Silisium"],
        answer: 2
    },

    {
        question: "Onun duzları diş və sümüklərin tərkib hissəsidir və gübrə kimi də istifadə olunur ?",
        choices: ["Ca(H2PO4)2", "Ca3(PO4)2", "CaCO3", "CaSO4"],
        answer: 1
    },

    {
        question: "On tam dolmuş orbital və üç boş orbitalı olan elementin sıra nömrəsini tapın.",
        choices: ["25", "13", "23", "33"],
        answer: 2
    },

    {
        question: "1889-cu ildə istifadəyə verilmiş Eyfel qülləsi vaxtaşırı qüllənin rənglənməsinə görə 60 ton boya sərf olunur, bunun səbəbini  nə ilə izah edə bilərsiniz ?",
        choices: ["Korreziya", "Elektroliz", "Hidroliz", "Hidratlaşma"],
        answer: 0
    },

    {
        question: "Bu maddə yandırıcı mərmilərin və əl qumbaralarının hazırlanmasında, həmçinin hərbi tüstü pərdələrinin yaradılmasında istifadə olunur.",
        choices: ["P2O5", "P4", "S8", "CO2"],
        answer: 1
    },

    {
        question: "Bu maddə kristal qəfəsinin quruluşuna və bərkliyinə görə almaza oxşayır və ondan yanıcı və cilalayıcı alətlər hazırlanır.",
        choices: ["SiH4;", "Si", "SiO2", "SiC"],
        answer: 3
    },

    {
        question: "Ağardıcı və dezinfeksiyaedici xassəyə malikdir. Açıq mavi rəngli,xoşiyli,dadsız molekulyar quruluşlu qazdır.",
        choices: ["Oksigen", "Azot", "Ozon", "Xlor"],
        answer: 2
    },

    {
        question: "Kibritin  ucu hansı maddədən ibarətdir ?",
        choices: ["Qırmızı fosfor", "Bertole duzu", "Qlauber duzu", "Qara fosfor"],
        answer: 1
    },

    {
        question: "Normal halda üç tək elektronu olan neçənci qrup elementidir ?",
        choices: ["4", "7", "3", "5"],
        answer: 1
    },

    {
        question: "Canlı orqanizmlər neçə faiz su itirdikdə məhv olur ?",
        choices: ["10-20%", "15-20%", "15-25%", "20-25%"],
        answer: 0
    },

    {
        question: "Maddə tərkibinin sabitliyi qanunu kim tərəfindən kəşf olunub ?",
        choices: ["A.Avaqadro", "A.Lavoazye", "C.Prust", "C.Dalton"],
        answer: 2
    },

    {
        question: "Hansı maddə texnikada kaustik soda adlanır?",
        choices: ["NaOH", "Na2CO3", "NaHCO3", "K2CO3"],
        answer: 0
    },

    {
        question: "Əşyanın üzərində güzgü kimi təbəqə əmələ gətirən hansı metal poladın korroziyadan müdafiəsi üçün geniş şəkildə istifadə olunur ?",
        choices: ["Manqan", "Mis", "Dəmir", "Nikel"],
        answer: 3
    },

    {
        question: "Bataqlıqda belə hadisə müşahidə etmək olar: sakit dayanmış su hövzəsinin dibindən qaz qabaqcıqları çıxır və səssiz yox olur. Bu nədir?",
        choices: ["Kükürd qazı", "Karbon qazı", "Metan qazı", "Ammonyak qazı"],
        answer: 2
    },
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = new Array(questions.length).fill(null);

document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
});

function showQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElements = document.querySelectorAll('.choice');
    const resultElement = document.getElementById('result');

    questionElement.textContent = questions[currentQuestionIndex].question;
    choicesElements.forEach((button, index) => {
        button.textContent = questions[currentQuestionIndex].choices[index];
        button.disabled = false;
        button.classList.remove('correct', 'incorrect');
    });

    if (userAnswers[currentQuestionIndex] !== null) {
        highlightAnswer(userAnswers[currentQuestionIndex]);
    } else {
        resultElement.textContent = '';
    }

    document.getElementById('next-button').style.display = 'block';
    document.getElementById('back-button').style.display = currentQuestionIndex > 0 ? 'block' : 'none';
}

function selectAnswer(choiceIndex) {
    userAnswers[currentQuestionIndex] = choiceIndex;
    highlightAnswer(choiceIndex);
}

function highlightAnswer(choiceIndex) {
    const correctAnswerIndex = questions[currentQuestionIndex].answer;
    const resultElement = document.getElementById('result');
    const choicesElements = document.querySelectorAll('.choice');

    choicesElements.forEach((button, index) => {
        button.disabled = true;
        if (index === correctAnswerIndex) {
            button.classList.add('correct');
        } else if (index === choiceIndex) {
            button.classList.add('incorrect');
        }
    });

    if (choiceIndex === correctAnswerIndex) {
        resultElement.textContent = 'Doğru!';
        resultElement.style.color = 'green';
        score++;
    } else {
        resultElement.textContent = `Yanlış! Düzgün cavab - ${questions[currentQuestionIndex].choices[correctAnswerIndex]}.`;
        resultElement.style.color = 'red';
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function showScore() {
    const totalScore = score; // Düzəltmə: totalScore dəyişənini əlavə etdim
    const totalQuestions = questions.length; // Düzəltmə: totalQuestions dəyişənini əlavə etdim

    document.getElementById('quiz').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('back-button').style.display = 'none';
    document.getElementById('score-container').style.display = 'block';
    document.getElementById('score').textContent = `${totalScore} / ${totalQuestions}`; // Düzəltmə: totalScore və totalQuestions istifadə edildi
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers.fill(null);
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('score-container').style.display = 'none';
    showQuestion();
}
