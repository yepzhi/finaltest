import questions from './questions.js';
import translations from './translations.js';

// --- Firebase Configuration ---
const firebaseConfig = {
  apiKey: "AIzaSyC4KzcV9qEWUyc0kmv4sN8Jqd__EC2hW0E",
  authDomain: "entrytest-1080e.firebaseapp.com",
  projectId: "entrytest-1080e",
  storageBucket: "entrytest-1080e.firebasestorage.app",
  messagingSenderId: "632427082682",
  appId: "1:632427082682:web:7c01a82361ecefd372e383",
  measurementId: "G-0GRNWR76Q7"
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
    answers: [],
    shuffledQuestions: [],
    userEmail: '',
    folio: '',
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
    questionTimerInterval: null,
    secondsElapsed: 0,
    questionSecondsRemaining: 30, // Anti-cheat timer
    folioSaved: false
};

// DOM Elements
const screens = {
    welcome: document.getElementById('welcome'),
    survey: document.getElementById('survey'),
    instructions: document.getElementById('instructions'),
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
    startQuizBtn: document.getElementById('startQuizBtn'),
    folioDisplayNumber: document.getElementById('folioDisplayNumber'),
    nextBtn: document.getElementById('nextBtn'),
    categoryBadge: document.getElementById('categoryBadge'),
    finalScore: document.getElementById('finalScore'),
    categoryResults: document.getElementById('categoryResults'),
    retryBtn: document.getElementById('retryBtn'),
    timeVal: document.getElementById('timeVal'),
    timerDisplay: document.getElementById('timerDisplay'),
    langBtns: document.querySelectorAll('.lang-btn'),
    
    // Resume UI
    resumeFolio: document.getElementById('resumeFolio'),
    resumeBtn: document.getElementById('resumeBtn'),

    // Admin Elements
    adminBtn: document.getElementById('adminBtn'),
    adminModal: document.getElementById('adminModal'),
    adminPassword: document.getElementById('adminPassword'),
    loginBtn: document.getElementById('loginBtn'),
    closeModal: document.getElementById('closeModal')
};

// Initialization
function init() {
    state.answers = new Array(questions.length).fill(null);
    elements.totalQuestionsNum.textContent = questions.length;
    
    elements.startBtn.addEventListener('click', goToSurvey);
    elements.beginTestBtn.addEventListener('click', showInstructionsScreen);
    elements.startQuizBtn.addEventListener('click', startQuiz);
    elements.resumeBtn.addEventListener('click', () => resumeQuizWithFolio(elements.resumeFolio.value.trim()));
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

    // Default to Spanish as requested
    setLanguage('es');
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

function showInstructionsScreen() {
    state.surveyData.firstName = elements.firstName.value.trim();
    state.surveyData.lastName = elements.lastName.value.trim();
    state.surveyData.school = elements.schoolSelect.value;
    state.surveyData.age = elements.ageInput.value;

    if (!state.surveyData.firstName || !state.surveyData.lastName) {
        alert(state.language === 'en' ? 'Please fill in your name and last name.' : 'Por favor, completa tu nombre y apellido.');
        return;
    }

    if (!state.folio) {
        state.folio = generateFolio();
        state.shuffledQuestions = shuffleArray([...questions]);
    }

    elements.folioDisplayNumber.textContent = 'FOLIO: ' + state.folio;
    switchScreen('instructions');
}

function startQuiz() {
    state.startTime = new Date();
    switchScreen('quiz');
    startTimer();
    loadQuestion();
}

function generateFolio() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = 'JSTEM-';
    for (let i = 0; i < 5; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function switchScreen(screenKey) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenKey].classList.add('active');
    window.scrollTo(0, 0);

    // PISA: Hide language selector during the quiz and results
    const langToggle = document.getElementById('languageToggle');
    if (screenKey === 'quiz' || screenKey === 'results') {
        langToggle.style.display = 'none';
    } else {
        langToggle.style.display = 'flex';
    }
}

function loadQuestion() {
    const question = state.shuffledQuestions[state.currentQuestionIndex];
    
    // Category mapping for translations
    const categoryMap = {
        "Introducción / STEM": "cat_science",
        "Cap.1 — Ciencia": "cat_science",
        "Cap.2 — Tecnologías Inalámbricas": "cat_tech",
        "Cap.2 — Seguridad de Redes": "cat_tech",
        "Cap.2 — Pantallas": "cat_tech",
        "Cap.2 — Óptica": "cat_eng",
        "Cap.2 — Procesadores": "cat_eng",
        "Cap.2 — Memoria": "cat_tech",
        "Cap.2 — Sensores": "cat_eng",
        "Cap.2 — Baterías": "cat_eng",
        "Cap.2 — Materiales": "cat_eng",
        "Cap.2 — Nano-Bio": "cat_bio",
        "Cap.3 — Programación": "cat_code"
    };

    const catKey = categoryMap[question.category] || 'cat_badge';
    elements.categoryBadge.textContent = translations[state.language][catKey] || question.category;
    elements.questionText.textContent = question.question;
    elements.currentQuestionNum.textContent = state.currentQuestionIndex + 1;
    
    const progress = ((state.currentQuestionIndex + 1) / state.shuffledQuestions.length) * 100;
    elements.progressBar.style.width = `${progress}%`;
    
    elements.optionsContainer.innerHTML = '';
    const allOptions = [...question.options];
    
    // Dynamic "No Sé" option
    const noSeOpt = state.language === 'en' ? "I don't know" : (state.language === 'cn' ? '我不知道' : 'No sé / Desconozco la respuesta');
    allOptions.push(noSeOpt);

    const labels = ['A', 'B', 'C', 'D', 'E'];
    allOptions.forEach((opt, idx) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        if (state.answers[state.currentQuestionIndex] === idx) optionEl.classList.add('selected');
        
        optionEl.innerHTML = `
            <div class="option-dot">${labels[idx]}</div>
            <span class="option-text">${opt}</span>
        `;
        
        optionEl.addEventListener('click', () => selectOption(idx));
        elements.optionsContainer.appendChild(optionEl);
    });
    
    elements.nextBtn.innerHTML = state.currentQuestionIndex === state.shuffledQuestions.length - 1 ? translations[state.language].btn_finish : translations[state.language].btn_next;
    elements.nextBtn.disabled = state.answers[state.currentQuestionIndex] === null;

    startQuestionTimer();
}

function startQuestionTimer() {
    clearInterval(state.questionTimerInterval);
    state.questionSecondsRemaining = 40; // 40 seconds per question
    updateQuestionTimerUI();

    state.questionTimerInterval = setInterval(() => {
        state.questionSecondsRemaining--;
        updateQuestionTimerUI();

        if (state.questionSecondsRemaining <= 0) {
            clearInterval(state.questionTimerInterval);
            autoAdvanceOnTimeout();
        }
    }, 1000);
}

function updateQuestionTimerUI() {
    const timerLabel = translations[state.language].question_timer || 'Time:';
    elements.timerDisplay.innerHTML = `
        <span data-i18n="time_elapsed">${translations[state.language].time_elapsed}</span> <span class="mono">${formatTime(state.secondsElapsed)}</span>
        <span style="margin-left: 20px; color: ${state.questionSecondsRemaining < 10 ? 'var(--accent)' : 'var(--primary)'}">
            ${timerLabel} <span class="mono">${state.questionSecondsRemaining}s</span>
        </span>
    `;
}

function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function autoAdvanceOnTimeout() {
    if (state.answers[state.currentQuestionIndex] === null) {
        state.answers[state.currentQuestionIndex] = -1; // Mark as skipped/timeout
    }
    showNext();
}

function selectOption(index) {
    state.answers[state.currentQuestionIndex] = index;
    elements.optionsContainer.querySelectorAll('.option').forEach((opt, idx) => {
        if (idx === index) opt.classList.add('selected');
        else opt.classList.remove('selected');
    });
    elements.nextBtn.disabled = false;
}



function showNext() {
    if (state.currentQuestionIndex < state.shuffledQuestions.length - 1) {
        state.currentQuestionIndex++;
        loadQuestion();
        syncProgressToFirebase();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    state.endTime = new Date();
    stopTimer();
    clearInterval(state.questionTimerInterval);
    const results = calculateResults();
    saveResultsToFirebase(results);
    
    // Show Folio and Confirmation in Results
    elements.categoryResults.innerHTML += `
        <div class="glass-card" style="margin-top: 30px; padding: 20px;">
            <p style="color: var(--primary); font-weight: 800; font-size: 1.2rem;">${translations[state.language].folio_label} ${state.folio}</p>
            <p style="font-size: 0.8rem; opacity: 0.8;">${translations[state.language].folio_generated}</p>
            <p style="margin-top: 10px; color: var(--secondary); font-weight: 600;">${translations[state.language].email_confirmation}</p>
        </div>
    `;
    
    switchScreen('results');
}

function calculateResults() {
    let totalScore = 0;
    const catStats = {};
    
    state.shuffledQuestions.forEach((q, idx) => {
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
        await db.collection("results").doc(state.folio).set({
            folio: state.folio,
            email: state.userEmail,
            survey: state.surveyData,
            score: results.totalScore,
            categories: results.finalCatScores,
            timeSeconds: state.secondsElapsed,
            status: 'completed',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log("Success saving final results!");
    } catch (e) {
        console.error("Error saving to Firebase:", e);
    }
}

async function syncProgressToFirebase() {
    if (!db || !state.folio) return;
    try {
        await db.collection("results").doc(state.folio).set({
            folio: state.folio,
            email: state.userEmail,
            survey: state.surveyData,
            currentQuestionIndex: state.currentQuestionIndex,
            answers: state.answers,
            shuffledIndices: state.shuffledQuestions.map(q => questions.indexOf(q)),
            secondsElapsed: state.secondsElapsed,
            status: 'in-progress',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
    } catch (e) {
        console.warn("Silent failure syncing progress");
    }
}

async function resumeQuizWithFolio(folioId) {
    if (!db || !folioId) return;
    try {
        const doc = await db.collection("results").doc(folioId).get();
        if (doc.exists) {
            const data = doc.data();
            if (data.status === 'completed') {
                alert(state.language === 'en' ? 'This test is already completed.' : 'Este test ya ha sido completado.');
                return;
            }
            // Restore state
            state.folio = data.folio;
            state.userEmail = data.email;
            state.surveyData = data.survey;
            state.currentQuestionIndex = data.currentQuestionIndex || 0;
            state.answers = data.answers || new Array(questions.length).fill(null);
            state.secondsElapsed = data.secondsElapsed || 0;
            
            // Reconstruct shuffled questions
            if (data.shuffledIndices) {
                state.shuffledQuestions = data.shuffledIndices.map(idx => questions[idx]);
            } else {
                state.shuffledQuestions = [...questions];
            }

            // Sync UI inputs just in case
            elements.userEmail.value = state.userEmail;
            elements.firstName.value = state.surveyData.firstName;
            elements.lastName.value = state.surveyData.lastName;
            elements.ageInput.value = state.surveyData.age;
            elements.schoolSelect.value = state.surveyData.school;

            switchScreen('quiz');
            startTimer();
            loadQuestion();
        } else {
            alert(translations[state.language].invalid_folio);
        }
    } catch (e) {
        console.error("Error resuming:", e);
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
    state.shuffledQuestions = [];
    state.secondsElapsed = 0;
    state.folio = '';
    clearInterval(state.questionTimerInterval);
    
    // Clear survey data
    Object.keys(state.surveyData).forEach(key => {
        state.surveyData[key] = (key === 'school') ? 'demo' : (['firstName', 'lastName', 'age'].includes(key) ? '' : 'yes');
    });
    
    // Reset UI fields
    elements.userEmail.value = '';
    elements.firstName.value = '';
    elements.lastName.value = '';
    elements.ageInput.value = '';
    elements.schoolSelect.value = 'demo';
    
    // Reset Toggles to 'Yes' or default
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        if (btn.dataset.val === 'yes' || btn.dataset.val === 'android') btn.classList.add('active');
        else btn.classList.remove('active');
    });

    elements.timerDisplay.style.display = 'none';
    switchScreen('welcome');
}

// Start
init();
