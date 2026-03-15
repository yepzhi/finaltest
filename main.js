import questions from './questions.js';

// Application State
const state = {
    currentQuestionIndex: 0,
    answers: new Array(questions.length).fill(null),
    userEmail: '',
    startTime: null,
    endTime: null
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
    levelLabel: document.getElementById('levelLabel'),
    categoryResults: document.getElementById('categoryResults'),
    retryBtn: document.getElementById('retryBtn')
};

// Initialization
function init() {
    elements.totalQuestionsNum.textContent = questions.length;
    
    elements.startBtn.addEventListener('click', startQuiz);
    elements.prevBtn.addEventListener('click', showPrevious);
    elements.nextBtn.addEventListener('click', showNext);
    elements.retryBtn.addEventListener('click', resetQuiz);
}

// Navigation
function startQuiz() {
    const email = elements.userEmail.value.trim();
    if (!email || !email.includes('@')) {
        alert('Por favor, introduce un correo electrónico válido para continuar.');
        return;
    }
    
    state.userEmail = email;
    state.startTime = new Date();
    
    switchScreen('quiz');
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
    elements.nextBtn.textContent = state.currentQuestionIndex === questions.length - 1 ? 'Finalizar' : 'Siguiente';
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
    
    // Determine Level
    const percentage = (totalScore / questions.length) * 100;
    let rank = '';
    if (percentage >= 90) rank = 'Nivel Maestría STEM';
    else if (percentage >= 75) rank = 'Nivel Avanzado';
    else if (percentage >= 50) rank = 'Nivel Competente';
    else rank = 'Nivel Inicial / Curiosidad';
    elements.levelLabel.textContent = rank;
    
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
    switchScreen('welcome');
}

// Start
init();
