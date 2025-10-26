// Flashcards feature
const form = document.getElementById('flashcard-form');
const container = document.getElementById('flashcards-container');

if (form && container) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = document.getElementById('question').value;
    const a = document.getElementById('answer').value;

    const card = document.createElement('div');
    card.className = 'flashcard';
    card.textContent = q;
    card.addEventListener('click', () => {
      card.textContent = card.textContent === q ? a : q;
    });

    container.appendChild(card);
    form.reset();
  });
}

// Login feature
const loginForm = document.getElementById('login-form');
const guestBtn = document.getElementById('guest-btn');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    localStorage.setItem('eduverseUser', username);
    window.location.href = 'index.html';
  });
}

if (guestBtn) {
  guestBtn.addEventListener('click', () => {
    localStorage.setItem('eduverseUser', 'Guest');
    window.location.href = 'index.html';
  });
}

// Random quiz feature
const quizContainer = document.getElementById('quiz-container');
const nextBtn = document.getElementById('next-btn');

const questions = [
  { q: 'What is the capital of the Philippines?', a: 'Manila' },
  { q: 'What is 5 x 5?', a: '25' },
  { q: 'What planet is known as the Red Planet?', a: 'Mars' },
  { q: 'Who wrote Noli Me Tangere?', a: 'Jose Rizal' },
];

if (quizContainer && nextBtn) {
  let current = 0;
  const showQuestion = () => {
    quizContainer.textContent = questions[current].q;
  };
  showQuestion();
  nextBtn.addEventListener('click', () => {
    current = (current + 1) % questions.length;
    showQuestion();
  });
}
