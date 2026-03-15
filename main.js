import questions from './questions.js';
import translations from './translations.js';

// --- Firebase Configuration ---
// USER: Substitute this placeholder with your actual project config from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSy...", 
    authDomain: "jovenesstem-test.firebaseapp.com",
    projectId: "jovenesstem-test",
    storageBucket: "jovenesstem-test.appspot.com",
    messagingSenderId: "...",
    appId: "..."
};

// Initialize Firebase (Compat)
let db;
try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
} catch (e) {
    console.warn("Firebase not initialized correctly. Check config.", e);
}

// Application State
const state = {
    currentQuestionIndex: 0,
    answers: new Array(questions.length).fill(null),
    userEmail: '',
    surveyData: {
        firstName: '',
        lastName: '',
        school: 'demo',
        age: '',
        phone: 'android',
        homeInternet: 'yes',
        computer: 'yes',
        schoolInternet: 'yes',
        familySTEM: 'yes',
        relativesSTEM: 'yes',
        admiration: 'yes',
        stemInterest: 'yes'
    },
    startTime: null,
    endTime: null,
    language: 'es',
    timerInterval: null,
    secondsElapsed: 0
};

// DOM Elements
const screens = {
    welcome: document.getElementById('welcome'),
    survey: document.getElementById('survey'),
    quiz: document.getElementById('quiz'),
    results: document.getElementById('results')
};

const elements = {
    startBtn: document.getElementById('startBtn'),
    beginTestBtn: document.getElementById('beginTestBtn'),
    userEmail: document.getElementById('userEmail'),
    
    // Survey Fields
    firstName: document.getElementById('firstName'),
    lastName: document.getElementById('lastName'),
    schoolSelect: document.getElementById('schoolSelect'),
    ageInput: document.getElementById('ageInput'),
    phoneToggle: document.getElementById('phoneToggle'),
    miniToggles: document.querySelectorAll('.mini-toggle'),
    relativesSTEMToggle: document.getElementById('relativesSTEM'),
    admirationToggle: document.getElementById('admirationToggle'),
    stemInterestToggle: document.getElementById('stemInterest'),

    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    progressBar: document.getElementById('progressBar'),
    currentQuestionNum: document.getElementById('currentQuestionNum'),
    totalQuestionsNum: document.getElementById('totalQuestionsNum'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    categoryBadge: document.getElementById('categoryBadge'),
    finalScore: document.getElementById('finalScore'),
    categoryResults: document.getElementById('categoryResults'),
    retryBtn: document.getElementById('retryBtn'),
    timeVal: document.getElementById('timeVal'),
    timerDisplay: document.getElementById('timerDisplay'),
    langBtns: document.querySelectorAll('.lang-btn'),

    // Admin Elements
    adminBtn: document.getElementById('adminBtn'),
    adminModal: document.getElementById('adminModal'),
    adminPassword: document.getElementById('adminPassword'),
    loginBtn: document.getElementById('loginBtn'),
    closeModal: document.getElementById('closeModal')
};

// Initialization
function init() {
    elements.totalQuestionsNum.textContent = questions.length;
    
    elements.startBtn.addEventListener('click', goToSurvey);
    elements.beginTestBtn.addEventListener('click', startQuiz);
    elements.prevBtn.addEventListener('click', showPrevious);
    elements.nextBtn.addEventListener('click', showNext);
    elements.retryBtn.addEventListener('click', resetQuiz);

    // Admin Handlers
    elements.adminBtn.addEventListener('click', () => elements.adminModal.classList.add('active'));
    elements.closeModal.addEventListener('click', () => elements.adminModal.classList.remove('active'));
    elements.loginBtn.addEventListener('click', checkAdminPassword);

    elements.langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });

    // Toggle logic for Survey
    setupToggles();

    // Detect browser language or default to ES
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) setLanguage(browserLang);
    else setLanguage('es');
}

function checkAdminPassword() {
    if (elements.adminPassword.value === 'JStem14') {
        sessionStorage.setItem('adminAuth', 'true');
        window.location.href = 'admin.html';
    } else {
        alert(state.language === 'en' ? 'Incorrect Password' : 'Contraseña Incorrecta');
        elements.adminPassword.value = '';
    }
}

function setupToggles() {
    // Shared setup for all toggle buttons
    const bindToggle = (parent, key) => {
        parent.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                parent.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.surveyData[key] = btn.dataset.val;
            });
        });
    };

    if (elements.phoneToggle) bindToggle(elements.phoneToggle, 'phone');
    if (elements.relativesSTEMToggle) bindToggle(elements.relativesSTEMToggle, 'relativesSTEM');
    if (elements.admirationToggle) bindToggle(elements.admirationToggle, 'admiration');
    if (elements.stemInterestToggle) bindToggle(elements.stemInterestToggle, 'stemInterest');

    elements.miniToggles.forEach(toggle => {
        bindToggle(toggle, toggle.dataset.key);
    });
}

// Language Logic
function setLanguage(lang) {
    state.language = lang;
    
    elements.langBtns.forEach(btn => {
        if (btn.dataset.lang === lang) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });

    if (screens.quiz.classList.contains('active')) loadQuestion();
}

// Timer Logic
function startTimer() {
    state.secondsElapsed = 0;
    elements.timerDisplay.style.display = 'block';
    state.timerInterval = setInterval(() => {
        state.secondsElapsed++;
        updateTimeDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(state.timerInterval);
}

function updateTimeDisplay() {
    const mins = Math.floor(state.secondsElapsed / 60);
    const secs = state.secondsElapsed % 60;
    elements.timeVal.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Navigation
function goToSurvey() {
    const email = elements.userEmail.value.trim();
    if (!email || !email.includes('@')) {
        alert(state.language === 'en' ? 'Please enter a valid email to continue.' : 'Por favor, introduce un correo electrónico válido.');
        return;
    }
    state.userEmail = email;
    switchScreen('survey');
}

function startQuiz() {
    state.surveyData.firstName = elements.firstName.value.trim();
    state.surveyData.lastName = elements.lastName.value.trim();
    state.surveyData.school = elements.schoolSelect.value;
    state.surveyData.age = elements.ageInput.value;

    if (!state.surveyData.firstName || !state.surveyData.lastName) {
        alert(state.language === 'en' ? 'Please fill in your name and last name.' : 'Por favor, completa tu nombre y apellido.');
        return;
    }

    state.startTime = new Date();
    switchScreen('quiz');
    startTimer();
    loadQuestion();
}

function switchScreen(screenKey) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenKey].classList.add('active');
    window.scrollTo(0, 0);
}

function loadQuestion() {
    const question = questions[state.currentQuestionIndex];
    elements.questionText.textContent = question.question;
    elements.categoryBadge.textContent = question.category;
    elements.currentQuestionNum.textContent = state.currentQuestionIndex + 1;
    
    const progress = ((state.currentQuestionIndex + 1) / questions.length) * 100;
    elements.progressBar.style.width = `${progress}%`;
    
    elements.optionsContainer.innerHTML = '';
    question.options.forEach((opt, idx) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        if (state.answers[state.currentQuestionIndex] === idx) optionEl.classList.add('selected');
        
        optionEl.innerHTML = `
            <div class="option-dot"></div>
            <span class="option-text">${opt}</span>
        `;
        
        optionEl.addEventListener('click', () => selectOption(idx));
        elements.optionsContainer.appendChild(optionEl);
    });
    
    elements.prevBtn.disabled = state.currentQuestionIndex === 0;
    elements.nextBtn.innerHTML = state.currentQuestionIndex === questions.length - 1 ? translations[state.language].btn_finish : translations[state.language].btn_next;
    elements.nextBtn.disabled = state.answers[state.currentQuestionIndex] === null;
}

function selectOption(index) {
    state.answers[state.currentQuestionIndex] = index;
    elements.optionsContainer.querySelectorAll('.option').forEach((opt, idx) => {
        if (idx === index) opt.classList.add('selected');
        else opt.classList.remove('selected');
    });
    elements.nextBtn.disabled = false;
}

function showPrevious() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        loadQuestion();
    }
}

function showNext() {
    if (state.currentQuestionIndex < questions.length - 1) {
        state.currentQuestionIndex++;
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    state.endTime = new Date();
    stopTimer();
    const results = calculateResults();
    saveResultsToFirebase(results);
    switchScreen('results');
}

function calculateResults() {
    let totalScore = 0;
    const catStats = {};
    
    questions.forEach((q, idx) => {
        const isCorrect = state.answers[idx] === q.answer;
        if (isCorrect) totalScore += q.points;
        
        if (!catStats[q.category]) catStats[q.category] = { correct: 0, total: 0 };
        catStats[q.category].total += q.points;
        if (isCorrect) catStats[q.category].correct += q.points;
    });
    
    animateValue(elements.finalScore, 0, totalScore, 1000);
    
    elements.categoryResults.innerHTML = '';
    const finalCatScores = {};

    Object.entries(catStats).forEach(([cat, data]) => {
        const catPercentage = (data.correct / data.total) * 100;
        finalCatScores[cat] = Math.round(catPercentage);

        const catRow = document.createElement('div');
        catRow.className = 'cat-row';
        catRow.innerHTML = `
            <div class="cat-label">
                <span>${cat}</span>
                <span>${Math.round(catPercentage)}%</span>
            </div>
            <div class="cat-bar-bg">
                <div class="cat-bar-fill" style="width: 0%; transition: width 1s ease 0.5s"></div>
            </div>
        `;
        elements.categoryResults.appendChild(catRow);
        setTimeout(() => {
            const bar = catRow.querySelector('.cat-bar-fill');
            if (bar) bar.style.width = `${catPercentage}%`;
        }, 100);
    });

    return { totalScore, finalCatScores };
}

async function saveResultsToFirebase(results) {
    if (!db) return;
    try {
        await db.collection("results").add({
            email: state.userEmail,
            survey: state.surveyData,
            score: results.totalScore,
            categories: results.finalCatScores,
            timeSeconds: state.secondsElapsed,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log("Success saving results!");
    } catch (e) {
        console.error("Error saving to Firebase:", e);
    }
}

function animateValue(obj, start, end, duration) {
    if (!obj) return;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

function resetQuiz() {
    state.currentQuestionIndex = 0;
    state.answers = new Array(questions.length).fill(null);
    elements.userEmail.value = '';
    elements.firstName.value = '';
    elements.lastName.value = '';
    elements.ageInput.value = '';
    elements.timerDisplay.style.display = 'none';
    switchScreen('welcome');
}

// Start
init();
