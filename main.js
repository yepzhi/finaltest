import questions from './questions.js';
import translations from './translations.js';

// Application State
const state = {
    currentQuestionIndex: 0,
    answers: new Array(questions.length).fill(null),
    userEmail: '',
    startTime: null,
    endTime: null,
    language: 'es',
    timerInterval: null,
    secondsElapsed: 0
};

// DOM Elements
const screens = {
    welcome: document.getElementById('welcome'),
    quiz: document.getElementById('quiz'),
    results: document.getElementById('results')
};

const elements = {
    startBtn: document.getElementById('startBtn'),
    userEmail: document.getElementById('userEmail'),
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
    langBtns: document.querySelectorAll('.lang-btn')
};

// Initialization
function init() {
    elements.totalQuestionsNum.textContent = questions.length;
    
    elements.startBtn.addEventListener('click', startQuiz);
    elements.prevBtn.addEventListener('click', showPrevious);
    elements.nextBtn.addEventListener('click', showNext);
    elements.retryBtn.addEventListener('click', resetQuiz);

    elements.langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });

    // Detect browser language or default to ES
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) setLanguage(browserLang);
    else setLanguage('es');
}

// Language Logic
function setLanguage(lang) {
    state.language = lang;
    
    // Update active button UI
    elements.langBtns.forEach(btn => {
        if (btn.dataset.lang === lang) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    // Translate static elements
    const translatables = document.querySelectorAll('[data-i18n]');
    translatables.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Translate placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // If quiz is running, reload question text
    if (screens.quiz.classList.contains('active')) {
        loadQuestion();
    }
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
function startQuiz() {
    const email = elements.userEmail.value.trim();
    if (!email || !email.includes('@')) {
        alert(state.language === 'en' ? 'Please enter a valid email to continue.' : 'Por favor, introduce un correo electrónico válido.');
        return;
    }
    
    state.userEmail = email;
    state.startTime = new Date();
    
    switchScreen('quiz');
    startTimer();
    loadQuestion();
}

function switchScreen(screenKey) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenKey].classList.add('active');
}

function loadQuestion() {
    const question = questions[state.currentQuestionIndex];
    
    // Update UI
    elements.questionText.textContent = question.question;
    elements.categoryBadge.textContent = question.category;
    elements.currentQuestionNum.textContent = state.currentQuestionIndex + 1;
    
    // Update Progress
    const progress = ((state.currentQuestionIndex + 1) / questions.length) * 100;
    elements.progressBar.style.width = `${progress}%`;
    
    // Render Options
    elements.optionsContainer.innerHTML = '';
    question.options.forEach((opt, idx) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        if (state.answers[state.currentQuestionIndex] === idx) {
            optionEl.classList.add('selected');
        }
        
        optionEl.innerHTML = `
            <div class="option-dot"></div>
            <span class="option-text">${opt}</span>
        `;
        
        optionEl.addEventListener('click', () => selectOption(idx));
        elements.optionsContainer.appendChild(optionEl);
    });
    
    // Buttons state
    elements.prevBtn.disabled = state.currentQuestionIndex === 0;
    elements.nextBtn.innerHTML = state.currentQuestionIndex === questions.length - 1 ? translations[state.language].btn_finish : translations[state.language].btn_next;
    elements.nextBtn.disabled = state.answers[state.currentQuestionIndex] === null;
}

function selectOption(index) {
    state.answers[state.currentQuestionIndex] = index;
    
    // Refresh options UI
    const options = elements.optionsContainer.querySelectorAll('.option');
    options.forEach((opt, idx) => {
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
    calculateResults();
    switchScreen('results');
}

function calculateResults() {
    let totalScore = 0;
    const catStats = {};
    
    questions.forEach((q, idx) => {
        const isCorrect = state.answers[idx] === q.answer;
        if (isCorrect) totalScore += q.points;
        
        if (!catStats[q.category]) {
            catStats[q.category] = { correct: 0, total: 0 };
        }
        catStats[q.category].total += q.points;
        if (isCorrect) catStats[q.category].correct += q.points;
    });
    
    // Update Score UI
    animateValue(elements.finalScore, 0, totalScore, 1000);
    
    // Render Category Breakdown
    elements.categoryResults.innerHTML = '';
    Object.entries(catStats).forEach(([cat, data]) => {
        const catPercentage = (data.correct / data.total) * 100;
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
        
        // Trigger animation after append
        setTimeout(() => {
            catRow.querySelector('.cat-bar-fill').style.width = `${catPercentage}%`;
        }, 100);
    });
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function resetQuiz() {
    state.currentQuestionIndex = 0;
    state.answers = new Array(questions.length).fill(null);
    elements.userEmail.value = '';
    elements.timerDisplay.style.display = 'none';
    switchScreen('welcome');
}

// Start
init();
